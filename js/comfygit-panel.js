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
const yt = {}, Eo = [], xs = () => {
}, $i = () => !1, sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, tl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, pu = Object.prototype.hasOwnProperty, ct = (e, s) => pu.call(e, s), Ye = Array.isArray, To = (e) => _n(e) === "[object Map]", Oo = (e) => _n(e) === "[object Set]", xl = (e) => _n(e) === "[object Date]", Ze = (e) => typeof e == "function", It = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Ci = (e) => (gt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), xi = Object.prototype.toString, _n = (e) => xi.call(e), gu = (e) => _n(e).slice(8, -1), Si = (e) => _n(e) === "[object Object]", sl = (e) => It(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xo = /* @__PURE__ */ Za(
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
  } else if (It(e) || gt(e))
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
function Me(e) {
  let s = "";
  if (It(e))
    s = e;
  else if (Ye(e))
    for (let o = 0; o < e.length; o++) {
      const a = Me(e[o]);
      a && (s += a + " ");
    }
  else if (gt(e))
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
  if (o = gt(e), a = gt(s), o || a) {
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
const Ti = (e) => !!(e && e.__v_isRef === !0), d = (e) => It(e) ? e : e == null ? "" : Ye(e) || gt(e) && (e.toString === xi || !Ze(e.toString)) ? Ti(e) ? d(e.value) : JSON.stringify(e, Pi, 2) : String(e), Pi = (e, s) => Ti(s) ? Pi(e, s.value) : To(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[ba(a, r) + " =>"] = l, o),
    {}
  )
} : Oo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ba(o))
} : fs(s) ? ba(s) : gt(s) && !Ye(s) && !Si(s) ? String(s) : s, ba = (e, s = "") => {
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
let kt;
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
    const s = kt, o = ms;
    kt = this, ms = !0;
    try {
      return this.fn();
    } finally {
      Ni(this), kt = s, ms = o, this.flags &= -3;
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
  const s = e.dep, o = kt, a = ms;
  kt = e, ms = !0;
  try {
    Li(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ks(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    kt = o, ms = a, Ni(e), e.flags &= -3;
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
    const o = kt;
    kt = void 0;
    try {
      s();
    } finally {
      kt = o;
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
    if (!kt || !ms || kt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== kt)
      o = this.activeLink = new Pu(kt, this), kt.deps ? (o.prevDep = kt.depsTail, kt.depsTail.nextDep = o, kt.depsTail = o) : kt.deps = kt.depsTail = o, Ai(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = kt.depsTail, o.nextDep = void 0, kt.depsTail.nextDep = o, kt.depsTail = o, kt.deps === o && (kt.deps = a);
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
  if (ms && kt) {
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
      u.forEach((p, _) => {
        (_ === "length" || _ === dn || !fs(_) && _ >= v) && c(p);
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
  const s = rt(e);
  return s === e ? s : (At(s, "iterate", dn), os(e) ? s : s.map(vs));
}
function ia(e) {
  return At(e = rt(e), "iterate", dn), e;
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
  const a = rt(e);
  At(a, "iterate", dn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && cl(o[0]) ? (o[0] = rt(o[0]), a[s](...o)) : l;
}
function Fo(e, s, o = []) {
  Ns(), nl();
  const a = rt(e)[s].apply(e, o);
  return al(), Us(), a;
}
const Du = /* @__PURE__ */ Za("__proto__,__v_isRef,__isVue"), zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function Lu(e) {
  fs(e) || (e = String(e));
  const s = rt(this);
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
      return l && gt(m) ? Gn(m) : m;
    }
    return gt(c) ? l ? Gn(c) : Qs(c) : c;
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
      if (!os(a) && !Os(a) && (r = rt(r), a = rt(a)), !u && Bt(r) && !Bt(a))
        return f || (r.value = a), !0;
    }
    const c = u ? Number(o) < s.length : ct(s, o), m = Reflect.set(
      s,
      o,
      a,
      Bt(s) ? s : l
    );
    return s === rt(l) && (c ? Ks(a, r) && Rs(s, "set", o, a) : Rs(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = ct(s, o);
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
    const l = this.__v_raw, r = rt(l), u = To(r), c = e === "entries" || e === Symbol.iterator && u, m = e === "keys" && u, f = l[e](...a), v = o ? Va : s ? Lo : vs;
    return !s && At(
      r,
      "iterate",
      m ? za : io
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
      const r = this.__v_raw, u = rt(r), c = rt(l);
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
      return !e && At(rt(l), "iterate", io), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = rt(r), c = rt(l);
      return e || (Ks(l, c) && At(u, "has", l), At(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, m = rt(c), f = s ? Va : e ? Lo : vs;
      return !e && At(m, "iterate", io), c.forEach((v, p) => l.call(r, f(v), f(p), u));
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
        !s && !os(l) && !Os(l) && (l = rt(l));
        const r = rt(this);
        return Sn(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !os(r) && !Os(r) && (r = rt(r));
        const u = rt(this), { has: c, get: m } = Sn(u);
        let f = c.call(u, l);
        f || (l = rt(l), f = c.call(u, l));
        const v = m.call(u, l);
        return u.set(l, r), f ? Ks(r, v) && Rs(u, "set", l, r) : Rs(u, "add", l, r), this;
      },
      delete(l) {
        const r = rt(this), { has: u, get: c } = Sn(r);
        let m = u.call(r, l);
        m || (l = rt(l), m = u.call(r, l)), c && c.call(r, l);
        const f = r.delete(l);
        return m && Rs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = rt(this), r = l.size !== 0, u = l.clear();
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
    ct(o, l) && l in a ? o : a,
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
  if (!gt(e) || e.__v_raw && !(s && e.__v_isReactive))
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
function rt(e) {
  const s = e && e.__v_raw;
  return s ? rt(s) : e;
}
function qu(e) {
  return !ct(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0), e;
}
const vs = (e) => gt(e) ? Qs(e) : e, Lo = (e) => gt(e) ? Gn(e) : e;
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
    this.dep = new il(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : rt(s), this._value = o ? s : vs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || os(s) || Os(s);
    s = a ? s : rt(s), Ks(s, o) && (this._rawValue = s, this._value = a ? s : vs(s), this.dep.trigger());
  }
}
function Xe(e) {
  return Bt(e) ? e.value : e;
}
const Qu = {
  get: (e, s, o) => s === "__v_raw" ? e : Xe(Reflect.get(e, s, o)),
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
    kt !== this)
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
function tc(e, s, o = yt) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: m } = o, f = (P) => l ? P : os(P) || l === !1 || l === 0 ? Ms(P, 1) : Ms(P);
  let v, p, _, h, w = !1, x = !1;
  if (Bt(e) ? (p = () => e.value, w = os(e)) : ro(e) ? (p = () => f(e), w = !0) : Ye(e) ? (x = !0, w = e.some((P) => ro(P) || os(P)), p = () => e.map((P) => {
    if (Bt(P))
      return P.value;
    if (ro(P))
      return f(P);
    if (Ze(P))
      return m ? m(P, 2) : P();
  })) : Ze(e) ? s ? p = m ? () => m(e, 2) : e : p = () => {
    if (_) {
      Ns();
      try {
        _();
      } finally {
        Us();
      }
    }
    const P = ao;
    ao = v;
    try {
      return m ? m(e, 3, [h]) : e(h);
    } finally {
      ao = P;
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
  let A = x ? new Array(e.length).fill(En) : En;
  const I = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (s) {
        const M = v.run();
        if (l || w || (x ? M.some((O, j) => Ks(O, A[j])) : Ks(M, A))) {
          _ && _();
          const O = ao;
          ao = v;
          try {
            const j = [
              M,
              // pass undefined as the old value when it's changed for the first time
              A === En ? void 0 : x && A[0] === En ? [] : A,
              h
            ];
            A = M, m ? m(s, 3, j) : (
              // @ts-expect-error
              s(...j)
            );
          } finally {
            ao = O;
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
  }, s ? a ? I(!0) : A = v.run() : u ? u(I.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ms(e, s = 1 / 0, o) {
  if (s <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
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
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: u } = s && s.appContext.config || yt;
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
function g(e, s = Nt, o) {
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
  if (Nt === null)
    return e;
  const o = va(Nt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, u, c, m = yt] = s[l];
    r && (Ze(r) && (r = {
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
      pc: p,
      pbc: _,
      o: { insert: h, querySelector: w, createText: x, createComment: C }
    } = f, S = tn(s.props);
    let { shapeFlag: A, children: I, dynamicChildren: P } = s;
    if (e == null) {
      const M = s.el = x(""), O = s.anchor = x("");
      h(M, o, a), h(O, o, a);
      const j = (L, Z) => {
        A & 16 && v(
          I,
          L,
          Z,
          l,
          r,
          u,
          c,
          m
        );
      }, E = () => {
        const L = s.target = Fa(s.props, w), Z = er(L, s, x, h);
        L && (u !== "svg" && Rl(L) ? u = "svg" : u !== "mathml" && Ml(L) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), S || (j(L, Z), An(s, !1)));
      };
      S && (j(o, O), An(s, !0)), Pl(s.props) ? (s.el.__isMounted = !1, Gt(() => {
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
      const M = s.anchor = e.anchor, O = s.target = e.target, j = s.targetAnchor = e.targetAnchor, E = tn(e.props), L = E ? o : O, Z = E ? M : j;
      if (u === "svg" || Rl(O) ? u = "svg" : (u === "mathml" || Ml(O)) && (u = "mathml"), P ? (_(
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
        Z,
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
        const Y = s.target = Fa(
          s.props,
          w
        );
        Y && Tn(
          s,
          Y,
          null,
          f,
          0
        );
      } else E && Tn(
        s,
        O,
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
  const { el: u, anchor: c, shapeFlag: m, children: f, props: v } = e, p = r === 2;
  if (p && a(u, s, o), (!p || tn(v)) && m & 16)
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
  function _(x, C, S, A) {
    C.anchor = p(
      u(x),
      C,
      c(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = A;
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
      const r = nr(l), u = rt(e), { mode: c } = u;
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
        (p) => f = p
      );
      m.type !== zt && mo(m, f);
      let v = o.subTree && Dl(o.subTree);
      if (v && v.type !== zt && !lo(v, m) && or(o).type !== zt) {
        let p = fn(
          v,
          u,
          a,
          o
        );
        if (mo(v, p), c === "out-in" && m.type !== zt)
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
function fn(e, s, o, a, l) {
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
    onAfterAppear: A,
    onAppearCancelled: I
  } = s, P = String(e.key), M = ar(o, e), O = (L, Z) => {
    L && ps(
      L,
      a,
      9,
      Z
    );
  }, j = (L, Z) => {
    const Y = Z[1];
    O(L, Z), Ye(L) ? L.every((q) => q.length <= 1) && Y() : L.length <= 1 && Y();
  }, E = {
    mode: u,
    persisted: c,
    beforeEnter(L) {
      let Z = m;
      if (!o.isMounted)
        if (r)
          Z = C || m;
        else
          return;
      L[Ts] && L[Ts](
        !0
        /* cancelled */
      );
      const Y = M[P];
      Y && lo(e, Y) && Y.el[Ts] && Y.el[Ts](), O(Z, [L]);
    },
    enter(L) {
      let Z = f, Y = v, q = p;
      if (!o.isMounted)
        if (r)
          Z = S || f, Y = A || v, q = I || p;
        else
          return;
      let te = !1;
      const W = L[Pn] = (Q) => {
        te || (te = !0, Q ? O(q, [L]) : O(Y, [L]), E.delayedLeave && E.delayedLeave(), L[Pn] = void 0);
      };
      Z ? j(Z, [L, W]) : W();
    },
    leave(L, Z) {
      const Y = String(e.key);
      if (L[Pn] && L[Pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Z();
      O(_, [L]);
      let q = !1;
      const te = L[Ts] = (W) => {
        q || (q = !0, Z(), W ? O(x, [L]) : O(w, [L]), L[Ts] = void 0, M[Y] === e && delete M[Y]);
      };
      M[Y] = e, h ? j(h, [L, te]) : te();
    },
    clone(L) {
      const Z = fn(
        L,
        s,
        o,
        a,
        l
      );
      return l && l(Z), Z;
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
function $e(e, s) {
  return Ze(e) ? (
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
  const r = a.shapeFlag & 4 ? va(a.component) : a.el, u = l ? null : r, { i: c, r: m } = e, f = s && s.r, v = c.refs === yt ? c.refs = {} : c.refs, p = c.setupState, _ = rt(p), h = p === yt ? $i : (w) => ct(_, w);
  if (f != null && f !== m) {
    if (Ll(s), It(f))
      v[f] = null, h(f) && (p[f] = null);
    else if (Bt(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (Ze(m))
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
            const A = [r];
            m.value = A, e.k && (v[e.k] = A);
          }
        } else w ? (v[m] = u, h(m) && (p[m] = u)) : x && (m.value = u, e.k && (v[e.k] = u));
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
}, dc = As("bm"), at = As("m"), mc = As(
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
function we(e, s, o, a) {
  let l;
  const r = o, u = Ye(e);
  if (u || It(e)) {
    const c = u && ro(e);
    let m = !1, f = !1;
    c && (m = !os(e), f = Os(e), e = ia(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
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
  } else if (gt(e))
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
function ot(e, s, o = {}, a, l) {
  if (Nt.ce || Nt.parent && Ro(Nt.parent) && Nt.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), D(
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
), Ia = (e, s) => e !== yt && !e.__isScriptSetup && ct(e, s), wc = {
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
        if (l !== yt && ct(l, s))
          return u[s] = 2, l[s];
        if (ct(r, s))
          return u[s] = 3, r[s];
        if (o !== yt && ct(o, s))
          return u[s] = 4, o[s];
        Wa && (u[s] = 0);
      }
    }
    const f = on[s];
    let v, p;
    if (f)
      return s === "$attrs" && At(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== yt && ct(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      p = m.config.globalProperties, ct(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ia(l, s) ? (l[s] = o, !0) : a !== yt && ct(a, s) ? (a[s] = o, !0) : ct(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let m;
    return !!(o[c] || e !== yt && c[0] !== "$" && ct(e, c) || Ia(s, c) || ct(r, c) || ct(a, c) || ct(on, c) || ct(l.config.globalProperties, c) || (m = u.__cssModules) && m[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : ct(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
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
    beforeUnmount: A,
    destroyed: I,
    unmounted: P,
    render: M,
    renderTracked: O,
    renderTriggered: j,
    errorCaptured: E,
    serverPrefetch: L,
    // public API
    expose: Z,
    inheritAttrs: Y,
    // assets
    components: q,
    directives: te,
    filters: W
  } = s;
  if (f && kc(f, a, null), u)
    for (const Ue in u) {
      const ne = u[Ue];
      Ze(ne) && (a[Ue] = ne.bind(o));
    }
  if (l) {
    const Ue = l.call(o, o);
    gt(Ue) && (e.data = Qs(Ue));
  }
  if (Wa = !0, r)
    for (const Ue in r) {
      const ne = r[Ue], he = Ze(ne) ? ne.bind(o, o) : Ze(ne.get) ? ne.get.bind(o, o) : xs, ce = !Ze(ne) && Ze(ne.set) ? ne.set.bind(o) : xs, Ae = U({
        get: he,
        set: ce
      });
      Object.defineProperty(a, Ue, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (Ce) => Ae.value = Ce
      });
    }
  if (c)
    for (const Ue in c)
      dr(c[Ue], a, o, Ue);
  if (m) {
    const Ue = Ze(m) ? m.call(o) : m;
    Reflect.ownKeys(Ue).forEach((ne) => {
      Ic(ne, Ue[ne]);
    });
  }
  v && Ol(v, e, "c");
  function le(Ue, ne) {
    Ye(ne) ? ne.forEach((he) => Ue(he.bind(o))) : ne && Ue(ne.bind(o));
  }
  if (le(dc, p), le(at, _), le(mc, h), le(rr, w), le(rc, x), le(uc, C), le(gc, E), le(pc, O), le(vc, j), le(da, A), le(Xs, P), le(fc, L), Ye(Z))
    if (Z.length) {
      const Ue = e.exposed || (e.exposed = {});
      Z.forEach((ne) => {
        Object.defineProperty(Ue, ne, {
          get: () => o[ne],
          set: (he) => o[ne] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === xs && (e.render = M), Y != null && (e.inheritAttrs = Y), q && (e.components = q), te && (e.directives = te), L && lr(e);
}
function kc(e, s, o = xs) {
  Ye(e) && (e = Ga(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = zn(
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
    Ze(r) && St(l, r);
  } else if (Ze(e))
    St(l, e.bind(o));
  else if (gt(e))
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
  ), Yn(m, s, u)), gt(s) && r.set(s, m), m;
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
    Ze(a) || (a = Mt({}, a)), l != null && !gt(l) && (l = null);
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
        return u.has(v) || (v && Ze(v.install) ? (u.add(v), v.install(f, ...p)) : Ze(v) && (u.add(v), v(f, ...p))), f;
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
        const p = Mo;
        Mo = f;
        try {
          return v();
        } finally {
          Mo = p;
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
      return o && Ze(s) ? s.call(a && a.proxy) : s;
  }
}
const Ec = Symbol.for("v-scx"), Tc = () => zn(Ec);
function St(e, s, o) {
  return vr(e, s, o);
}
function vr(e, s, o = yt) {
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
  let p = !1;
  r === "post" ? c.scheduler = (h) => {
    Gt(h, v && v.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (h, w) => {
    w ? h() : dl(h);
  }), c.augmentJob = (h) => {
    s && (h.flags |= 4), p && (h.flags |= 2, v && (h.id = v.uid, h.i = v));
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
const Rc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Js(s)}Modifiers`];
function Mc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || yt;
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
  if (!Ze(e)) {
    const m = (f) => {
      const v = gr(f, s, !0);
      v && (c = !0, Mt(u, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !c ? (gt(e) && a.set(e, null), null) : (Ye(r) ? r.forEach((m) => u[m] = null) : Mt(u, r), gt(e) && a.set(e, u), u);
}
function ma(e, s) {
  return !e || !sa(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), ct(e, s[0].toLowerCase() + s.slice(1)) || ct(e, Js(s)) || ct(e, s));
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
  let S, A;
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
      ), A = c;
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
      ), A = s.props ? c : Lc(c);
    }
  } catch (P) {
    nn.length = 0, ra(P, e, 1), S = $(zt);
  }
  let I = S;
  if (A && x !== !1) {
    const P = Object.keys(A), { shapeFlag: M } = I;
    P.length && M & 7 && (r && P.some(el) && (A = Nc(
      A,
      r
    )), I = qs(I, A, !1, !0));
  }
  return o.dirs && (I = qs(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && mo(I, o.transition), S = I, Kn(C), S;
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
  } = e, c = rt(l), [m] = e.propsOptions;
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
          if (ct(r, _))
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
      !ct(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Js(p)) === p || !ct(s, v))) && (m ? o && // for camelCase
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
        (!s || !ct(s, p)) && (delete r[p], f = !0);
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
      l && ct(l, v = ls(m)) ? !r || !r.includes(v) ? o[v] = f : (c || (c = {}))[v] = f : ma(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, u = !0);
    }
  if (r) {
    const m = rt(o), f = c || yt;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = ja(
        l,
        m,
        p,
        f[p],
        e,
        !ct(f, p)
      );
    }
  }
  return u;
}
function ja(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = ct(u, "default");
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
    const v = (p) => {
      m = !0;
      const [_, h] = kr(p, s, !0);
      Mt(u, _), h && c.push(...h);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return gt(e) && a.set(e, Eo), Eo;
  if (Ye(r))
    for (let v = 0; v < r.length; v++) {
      const p = ls(r[v]);
      Bl(p) && (u[p] = yt);
    }
  else if (r)
    for (const v in r) {
      const p = ls(v);
      if (Bl(p)) {
        const _ = r[v], h = u[p] = Ye(_) || Ze(_) ? { type: _ } : Mt({}, _), w = h.type;
        let x = !1, C = !0;
        if (Ye(w))
          for (let S = 0; S < w.length; ++S) {
            const A = w[S], I = Ze(A) && A.name;
            if (I === "Boolean") {
              x = !0;
              break;
            } else I === "String" && (C = !1);
          }
        else
          x = Ze(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = C, (x || ct(h, "default")) && c.push(p);
      }
    }
  const f = [u, c];
  return gt(e) && a.set(e, f), f;
}
function Bl(e) {
  return e[0] !== "$" && !Xo(e);
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
  let r = !0, u = yt;
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
    parentNode: p,
    nextSibling: _,
    setScopeId: h = xs,
    insertStaticContent: w
  } = e, x = (V, J, ve, Ee = null, G = null, z = null, ee = void 0, ae = null, de = !!J.dynamicChildren) => {
    if (V === J)
      return;
    V && !lo(V, J) && (Ee = B(V), Ce(V, G, z, !0), V = null), J.patchFlag === -2 && (de = !1, J.dynamicChildren = null);
    const { type: ie, ref: Ne, shapeFlag: Pe } = J;
    switch (ie) {
      case fa:
        C(V, J, ve, Ee);
        break;
      case zt:
        S(V, J, ve, Ee);
        break;
      case Ta:
        V == null && A(J, ve, Ee, ee);
        break;
      case H:
        q(
          V,
          J,
          ve,
          Ee,
          G,
          z,
          ee,
          ae,
          de
        );
        break;
      default:
        Pe & 1 ? M(
          V,
          J,
          ve,
          Ee,
          G,
          z,
          ee,
          ae,
          de
        ) : Pe & 6 ? te(
          V,
          J,
          ve,
          Ee,
          G,
          z,
          ee,
          ae,
          de
        ) : (Pe & 64 || Pe & 128) && ie.process(
          V,
          J,
          ve,
          Ee,
          G,
          z,
          ee,
          ae,
          de,
          Ve
        );
    }
    Ne != null && G ? sn(Ne, V && V.ref, z, J || V, !J) : Ne == null && V && V.ref != null && sn(V.ref, null, z, V, !0);
  }, C = (V, J, ve, Ee) => {
    if (V == null)
      a(
        J.el = c(J.children),
        ve,
        Ee
      );
    else {
      const G = J.el = V.el;
      J.children !== V.children && f(G, J.children);
    }
  }, S = (V, J, ve, Ee) => {
    V == null ? a(
      J.el = m(J.children || ""),
      ve,
      Ee
    ) : J.el = V.el;
  }, A = (V, J, ve, Ee) => {
    [V.el, V.anchor] = w(
      V.children,
      J,
      ve,
      Ee,
      V.el,
      V.anchor
    );
  }, I = ({ el: V, anchor: J }, ve, Ee) => {
    let G;
    for (; V && V !== J; )
      G = _(V), a(V, ve, Ee), V = G;
    a(J, ve, Ee);
  }, P = ({ el: V, anchor: J }) => {
    let ve;
    for (; V && V !== J; )
      ve = _(V), l(V), V = ve;
    l(J);
  }, M = (V, J, ve, Ee, G, z, ee, ae, de) => {
    if (J.type === "svg" ? ee = "svg" : J.type === "math" && (ee = "mathml"), V == null)
      O(
        J,
        ve,
        Ee,
        G,
        z,
        ee,
        ae,
        de
      );
    else {
      const ie = V.el && V.el._isVueCE ? V.el : null;
      try {
        ie && ie._beginPatch(), L(
          V,
          J,
          G,
          z,
          ee,
          ae,
          de
        );
      } finally {
        ie && ie._endPatch();
      }
    }
  }, O = (V, J, ve, Ee, G, z, ee, ae) => {
    let de, ie;
    const { props: Ne, shapeFlag: Pe, transition: ge, dirs: K } = V;
    if (de = V.el = u(
      V.type,
      z,
      Ne && Ne.is,
      Ne
    ), Pe & 8 ? v(de, V.children) : Pe & 16 && E(
      V.children,
      de,
      null,
      Ee,
      G,
      Ea(V, z),
      ee,
      ae
    ), K && to(V, null, Ee, "created"), j(de, V, V.scopeId, ee, Ee), Ne) {
      for (const Ie in Ne)
        Ie !== "value" && !Xo(Ie) && r(de, Ie, null, Ne[Ie], z, Ee);
      "value" in Ne && r(de, "value", null, Ne.value, z), (ie = Ne.onVnodeBeforeMount) && ws(ie, Ee, V);
    }
    K && to(V, null, Ee, "beforeMount");
    const Fe = Hc(G, ge);
    Fe && ge.beforeEnter(de), a(de, J, ve), ((ie = Ne && Ne.onVnodeMounted) || Fe || K) && Gt(() => {
      ie && ws(ie, Ee, V), Fe && ge.enter(de), K && to(V, null, Ee, "mounted");
    }, G);
  }, j = (V, J, ve, Ee, G) => {
    if (ve && h(V, ve), Ee)
      for (let z = 0; z < Ee.length; z++)
        h(V, Ee[z]);
    if (G) {
      let z = G.subTree;
      if (J === z || Sr(z.type) && (z.ssContent === J || z.ssFallback === J)) {
        const ee = G.vnode;
        j(
          V,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          G.parent
        );
      }
    }
  }, E = (V, J, ve, Ee, G, z, ee, ae, de = 0) => {
    for (let ie = de; ie < V.length; ie++) {
      const Ne = V[ie] = ae ? Hs(V[ie]) : Cs(V[ie]);
      x(
        null,
        Ne,
        J,
        ve,
        Ee,
        G,
        z,
        ee,
        ae
      );
    }
  }, L = (V, J, ve, Ee, G, z, ee) => {
    const ae = J.el = V.el;
    let { patchFlag: de, dynamicChildren: ie, dirs: Ne } = J;
    de |= V.patchFlag & 16;
    const Pe = V.props || yt, ge = J.props || yt;
    let K;
    if (ve && so(ve, !1), (K = ge.onVnodeBeforeUpdate) && ws(K, ve, J, V), Ne && to(J, V, ve, "beforeUpdate"), ve && so(ve, !0), (Pe.innerHTML && ge.innerHTML == null || Pe.textContent && ge.textContent == null) && v(ae, ""), ie ? Z(
      V.dynamicChildren,
      ie,
      ae,
      ve,
      Ee,
      Ea(J, G),
      z
    ) : ee || ne(
      V,
      J,
      ae,
      null,
      ve,
      Ee,
      Ea(J, G),
      z,
      !1
    ), de > 0) {
      if (de & 16)
        Y(ae, Pe, ge, ve, G);
      else if (de & 2 && Pe.class !== ge.class && r(ae, "class", null, ge.class, G), de & 4 && r(ae, "style", Pe.style, ge.style, G), de & 8) {
        const Fe = J.dynamicProps;
        for (let Ie = 0; Ie < Fe.length; Ie++) {
          const Se = Fe[Ie], Oe = Pe[Se], Re = ge[Se];
          (Re !== Oe || Se === "value") && r(ae, Se, Oe, Re, G, ve);
        }
      }
      de & 1 && V.children !== J.children && v(ae, J.children);
    } else !ee && ie == null && Y(ae, Pe, ge, ve, G);
    ((K = ge.onVnodeUpdated) || Ne) && Gt(() => {
      K && ws(K, ve, J, V), Ne && to(J, V, ve, "updated");
    }, Ee);
  }, Z = (V, J, ve, Ee, G, z, ee) => {
    for (let ae = 0; ae < J.length; ae++) {
      const de = V[ae], ie = J[ae], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lo(de, ie) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 198) ? p(de.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ve
        )
      );
      x(
        de,
        ie,
        Ne,
        null,
        Ee,
        G,
        z,
        ee,
        !0
      );
    }
  }, Y = (V, J, ve, Ee, G) => {
    if (J !== ve) {
      if (J !== yt)
        for (const z in J)
          !Xo(z) && !(z in ve) && r(
            V,
            z,
            J[z],
            null,
            G,
            Ee
          );
      for (const z in ve) {
        if (Xo(z)) continue;
        const ee = ve[z], ae = J[z];
        ee !== ae && z !== "value" && r(V, z, ae, ee, G, Ee);
      }
      "value" in ve && r(V, "value", J.value, ve.value, G);
    }
  }, q = (V, J, ve, Ee, G, z, ee, ae, de) => {
    const ie = J.el = V ? V.el : c(""), Ne = J.anchor = V ? V.anchor : c("");
    let { patchFlag: Pe, dynamicChildren: ge, slotScopeIds: K } = J;
    K && (ae = ae ? ae.concat(K) : K), V == null ? (a(ie, ve, Ee), a(Ne, ve, Ee), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      J.children || [],
      ve,
      Ne,
      G,
      z,
      ee,
      ae,
      de
    )) : Pe > 0 && Pe & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    V.dynamicChildren ? (Z(
      V.dynamicChildren,
      ge,
      ve,
      G,
      z,
      ee,
      ae
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (J.key != null || G && J === G.subTree) && gl(
      V,
      J,
      !0
      /* shallow */
    )) : ne(
      V,
      J,
      ve,
      Ne,
      G,
      z,
      ee,
      ae,
      de
    );
  }, te = (V, J, ve, Ee, G, z, ee, ae, de) => {
    J.slotScopeIds = ae, V == null ? J.shapeFlag & 512 ? G.ctx.activate(
      J,
      ve,
      Ee,
      ee,
      de
    ) : W(
      J,
      ve,
      Ee,
      G,
      z,
      ee,
      de
    ) : Q(V, J, de);
  }, W = (V, J, ve, Ee, G, z, ee) => {
    const ae = V.component = td(
      V,
      Ee,
      G
    );
    if (ua(V) && (ae.ctx.renderer = Ve), sd(ae, !1, ee), ae.asyncDep) {
      if (G && G.registerDep(ae, le, ee), !V.el) {
        const de = ae.subTree = $(zt);
        S(null, de, J, ve), V.placeholder = de.el;
      }
    } else
      le(
        ae,
        V,
        J,
        ve,
        G,
        z,
        ee
      );
  }, Q = (V, J, ve) => {
    const Ee = J.component = V.component;
    if (Uc(V, J, ve))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        Ue(Ee, J, ve);
        return;
      } else
        Ee.next = J, Ee.update();
    else
      J.el = V.el, Ee.vnode = J;
  }, le = (V, J, ve, Ee, G, z, ee) => {
    const ae = () => {
      if (V.isMounted) {
        let { next: Pe, bu: ge, u: K, parent: Fe, vnode: Ie } = V;
        {
          const ye = xr(V);
          if (ye) {
            Pe && (Pe.el = Ie.el, Ue(V, Pe, ee)), ye.asyncDep.then(() => {
              V.isUnmounted || ae();
            });
            return;
          }
        }
        let Se = Pe, Oe;
        so(V, !1), Pe ? (Pe.el = Ie.el, Ue(V, Pe, ee)) : Pe = Ie, ge && On(ge), (Oe = Pe.props && Pe.props.onVnodeBeforeUpdate) && ws(Oe, Fe, Pe, Ie), so(V, !0);
        const Re = Vl(V), X = V.subTree;
        V.subTree = Re, x(
          X,
          Re,
          // parent may have changed if it's in a teleport
          p(X.el),
          // anchor may have changed if it's in a fragment
          B(X),
          V,
          G,
          z
        ), Pe.el = Re.el, Se === null && Oc(V, Re.el), K && Gt(K, G), (Oe = Pe.props && Pe.props.onVnodeUpdated) && Gt(
          () => ws(Oe, Fe, Pe, Ie),
          G
        );
      } else {
        let Pe;
        const { el: ge, props: K } = J, { bm: Fe, m: Ie, parent: Se, root: Oe, type: Re } = V, X = Ro(J);
        so(V, !1), Fe && On(Fe), !X && (Pe = K && K.onVnodeBeforeMount) && ws(Pe, Se, J), so(V, !0);
        {
          Oe.ce && // @ts-expect-error _def is private
          Oe.ce._def.shadowRoot !== !1 && Oe.ce._injectChildStyle(Re);
          const ye = V.subTree = Vl(V);
          x(
            null,
            ye,
            ve,
            Ee,
            V,
            G,
            z
          ), J.el = ye.el;
        }
        if (Ie && Gt(Ie, G), !X && (Pe = K && K.onVnodeMounted)) {
          const ye = J;
          Gt(
            () => ws(Pe, Se, ye),
            G
          );
        }
        (J.shapeFlag & 256 || Se && Ro(Se.vnode) && Se.vnode.shapeFlag & 256) && V.a && Gt(V.a, G), V.isMounted = !0, J = ve = Ee = null;
      }
    };
    V.scope.on();
    const de = V.effect = new Ri(ae);
    V.scope.off();
    const ie = V.update = de.run.bind(de), Ne = V.job = de.runIfDirty.bind(de);
    Ne.i = V, Ne.id = V.uid, de.scheduler = () => dl(Ne), so(V, !0), ie();
  }, Ue = (V, J, ve) => {
    J.component = V;
    const Ee = V.vnode.props;
    V.vnode = J, V.next = null, zc(V, J.props, Ee, ve), Wc(V, J.children, ve), Ns(), Tl(V), Us();
  }, ne = (V, J, ve, Ee, G, z, ee, ae, de = !1) => {
    const ie = V && V.children, Ne = V ? V.shapeFlag : 0, Pe = J.children, { patchFlag: ge, shapeFlag: K } = J;
    if (ge > 0) {
      if (ge & 128) {
        ce(
          ie,
          Pe,
          ve,
          Ee,
          G,
          z,
          ee,
          ae,
          de
        );
        return;
      } else if (ge & 256) {
        he(
          ie,
          Pe,
          ve,
          Ee,
          G,
          z,
          ee,
          ae,
          de
        );
        return;
      }
    }
    K & 8 ? (Ne & 16 && me(ie, G, z), Pe !== ie && v(ve, Pe)) : Ne & 16 ? K & 16 ? ce(
      ie,
      Pe,
      ve,
      Ee,
      G,
      z,
      ee,
      ae,
      de
    ) : me(ie, G, z, !0) : (Ne & 8 && v(ve, ""), K & 16 && E(
      Pe,
      ve,
      Ee,
      G,
      z,
      ee,
      ae,
      de
    ));
  }, he = (V, J, ve, Ee, G, z, ee, ae, de) => {
    V = V || Eo, J = J || Eo;
    const ie = V.length, Ne = J.length, Pe = Math.min(ie, Ne);
    let ge;
    for (ge = 0; ge < Pe; ge++) {
      const K = J[ge] = de ? Hs(J[ge]) : Cs(J[ge]);
      x(
        V[ge],
        K,
        ve,
        null,
        G,
        z,
        ee,
        ae,
        de
      );
    }
    ie > Ne ? me(
      V,
      G,
      z,
      !0,
      !1,
      Pe
    ) : E(
      J,
      ve,
      Ee,
      G,
      z,
      ee,
      ae,
      de,
      Pe
    );
  }, ce = (V, J, ve, Ee, G, z, ee, ae, de) => {
    let ie = 0;
    const Ne = J.length;
    let Pe = V.length - 1, ge = Ne - 1;
    for (; ie <= Pe && ie <= ge; ) {
      const K = V[ie], Fe = J[ie] = de ? Hs(J[ie]) : Cs(J[ie]);
      if (lo(K, Fe))
        x(
          K,
          Fe,
          ve,
          null,
          G,
          z,
          ee,
          ae,
          de
        );
      else
        break;
      ie++;
    }
    for (; ie <= Pe && ie <= ge; ) {
      const K = V[Pe], Fe = J[ge] = de ? Hs(J[ge]) : Cs(J[ge]);
      if (lo(K, Fe))
        x(
          K,
          Fe,
          ve,
          null,
          G,
          z,
          ee,
          ae,
          de
        );
      else
        break;
      Pe--, ge--;
    }
    if (ie > Pe) {
      if (ie <= ge) {
        const K = ge + 1, Fe = K < Ne ? J[K].el : Ee;
        for (; ie <= ge; )
          x(
            null,
            J[ie] = de ? Hs(J[ie]) : Cs(J[ie]),
            ve,
            Fe,
            G,
            z,
            ee,
            ae,
            de
          ), ie++;
      }
    } else if (ie > ge)
      for (; ie <= Pe; )
        Ce(V[ie], G, z, !0), ie++;
    else {
      const K = ie, Fe = ie, Ie = /* @__PURE__ */ new Map();
      for (ie = Fe; ie <= ge; ie++) {
        const Be = J[ie] = de ? Hs(J[ie]) : Cs(J[ie]);
        Be.key != null && Ie.set(Be.key, ie);
      }
      let Se, Oe = 0;
      const Re = ge - Fe + 1;
      let X = !1, ye = 0;
      const ke = new Array(Re);
      for (ie = 0; ie < Re; ie++) ke[ie] = 0;
      for (ie = K; ie <= Pe; ie++) {
        const Be = V[ie];
        if (Oe >= Re) {
          Ce(Be, G, z, !0);
          continue;
        }
        let We;
        if (Be.key != null)
          We = Ie.get(Be.key);
        else
          for (Se = Fe; Se <= ge; Se++)
            if (ke[Se - Fe] === 0 && lo(Be, J[Se])) {
              We = Se;
              break;
            }
        We === void 0 ? Ce(Be, G, z, !0) : (ke[We - Fe] = ie + 1, We >= ye ? ye = We : X = !0, x(
          Be,
          J[We],
          ve,
          null,
          G,
          z,
          ee,
          ae,
          de
        ), Oe++);
      }
      const Ke = X ? Kc(ke) : Eo;
      for (Se = Ke.length - 1, ie = Re - 1; ie >= 0; ie--) {
        const Be = Fe + ie, We = J[Be], et = J[Be + 1], qe = Be + 1 < Ne ? (
          // #13559, fallback to el placeholder for unresolved async component
          et.el || et.placeholder
        ) : Ee;
        ke[ie] === 0 ? x(
          null,
          We,
          ve,
          qe,
          G,
          z,
          ee,
          ae,
          de
        ) : X && (Se < 0 || ie !== Ke[Se] ? Ae(We, ve, qe, 2) : Se--);
      }
    }
  }, Ae = (V, J, ve, Ee, G = null) => {
    const { el: z, type: ee, transition: ae, children: de, shapeFlag: ie } = V;
    if (ie & 6) {
      Ae(V.component.subTree, J, ve, Ee);
      return;
    }
    if (ie & 128) {
      V.suspense.move(J, ve, Ee);
      return;
    }
    if (ie & 64) {
      ee.move(V, J, ve, Ve);
      return;
    }
    if (ee === H) {
      a(z, J, ve);
      for (let Pe = 0; Pe < de.length; Pe++)
        Ae(de[Pe], J, ve, Ee);
      a(V.anchor, J, ve);
      return;
    }
    if (ee === Ta) {
      I(V, J, ve);
      return;
    }
    if (Ee !== 2 && ie & 1 && ae)
      if (Ee === 0)
        ae.beforeEnter(z), a(z, J, ve), Gt(() => ae.enter(z), G);
      else {
        const { leave: Pe, delayLeave: ge, afterLeave: K } = ae, Fe = () => {
          V.ctx.isUnmounted ? l(z) : a(z, J, ve);
        }, Ie = () => {
          z._isLeaving && z[Ts](
            !0
            /* cancelled */
          ), Pe(z, () => {
            Fe(), K && K();
          });
        };
        ge ? ge(z, Fe, Ie) : Ie();
      }
    else
      a(z, J, ve);
  }, Ce = (V, J, ve, Ee = !1, G = !1) => {
    const {
      type: z,
      props: ee,
      ref: ae,
      children: de,
      dynamicChildren: ie,
      shapeFlag: Ne,
      patchFlag: Pe,
      dirs: ge,
      cacheIndex: K
    } = V;
    if (Pe === -2 && (G = !1), ae != null && (Ns(), sn(ae, null, ve, V, !0), Us()), K != null && (J.renderCache[K] = void 0), Ne & 256) {
      J.ctx.deactivate(V);
      return;
    }
    const Fe = Ne & 1 && ge, Ie = !Ro(V);
    let Se;
    if (Ie && (Se = ee && ee.onVnodeBeforeUnmount) && ws(Se, J, V), Ne & 6)
      F(V.component, ve, Ee);
    else {
      if (Ne & 128) {
        V.suspense.unmount(ve, Ee);
        return;
      }
      Fe && to(V, null, J, "beforeUnmount"), Ne & 64 ? V.type.remove(
        V,
        J,
        ve,
        Ve,
        Ee
      ) : ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== H || Pe > 0 && Pe & 64) ? me(
        ie,
        J,
        ve,
        !1,
        !0
      ) : (z === H && Pe & 384 || !G && Ne & 16) && me(de, J, ve), Ee && be(V);
    }
    (Ie && (Se = ee && ee.onVnodeUnmounted) || Fe) && Gt(() => {
      Se && ws(Se, J, V), Fe && to(V, null, J, "unmounted");
    }, ve);
  }, be = (V) => {
    const { type: J, el: ve, anchor: Ee, transition: G } = V;
    if (J === H) {
      ue(ve, Ee);
      return;
    }
    if (J === Ta) {
      P(V);
      return;
    }
    const z = () => {
      l(ve), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (V.shapeFlag & 1 && G && !G.persisted) {
      const { leave: ee, delayLeave: ae } = G, de = () => ee(ve, z);
      ae ? ae(V.el, z, de) : de();
    } else
      z();
  }, ue = (V, J) => {
    let ve;
    for (; V !== J; )
      ve = _(V), l(V), V = ve;
    l(J);
  }, F = (V, J, ve) => {
    const { bum: Ee, scope: G, job: z, subTree: ee, um: ae, m: de, a: ie } = V;
    Wl(de), Wl(ie), Ee && On(Ee), G.stop(), z && (z.flags |= 8, Ce(ee, V, J, ve)), ae && Gt(ae, J), Gt(() => {
      V.isUnmounted = !0;
    }, J);
  }, me = (V, J, ve, Ee = !1, G = !1, z = 0) => {
    for (let ee = z; ee < V.length; ee++)
      Ce(V[ee], J, ve, Ee, G);
  }, B = (V) => {
    if (V.shapeFlag & 6)
      return B(V.component.subTree);
    if (V.shapeFlag & 128)
      return V.suspense.next();
    const J = _(V.anchor || V.el), ve = J && J[Qi];
    return ve ? _(ve) : J;
  };
  let N = !1;
  const re = (V, J, ve) => {
    V == null ? J._vnode && Ce(J._vnode, null, null, !0) : x(
      J._vnode || null,
      V,
      J,
      null,
      null,
      null,
      ve
    ), J._vnode = V, N || (N = !0, Tl(), qi(), N = !1);
  }, Ve = {
    p: x,
    um: Ce,
    m: Ae,
    r: be,
    mt: W,
    mc: E,
    pc: ne,
    pbc: Z,
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
}) => (typeof e == "number" && (e = "" + e), e != null ? It(e) || Bt(e) || Ze(e) ? { i: Nt, r: e, k: s, f: !!o } : e : null);
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
const $ = Jc;
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
    c && !It(c) && (s.class = Me(c)), gt(m) && (cl(m) && !Ye(m) && (m = Mt({}, m)), s.style = Ft(m));
  }
  const u = It(e) ? 1 : Sr(e) ? 128 : Xi(e) ? 64 : gt(e) ? 4 : Ze(e) ? 2 : 0;
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
function b(e = " ", s = 0) {
  return $(fa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), D(zt, null, e)) : $(zt, null, e);
}
function Cs(e) {
  return e == null || typeof e == "boolean" ? $(zt) : Ye(e) ? $(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pn(e) ? Hs(e) : $(fa, null, String(e));
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
  else Ze(s) ? (s = { default: s, _ctx: Nt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Xc(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Me([s.class, a.class]));
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
    propsDefaults: yt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: yt,
    data: yt,
    props: yt,
    attrs: yt,
    slots: yt,
    refs: yt,
    setupState: yt,
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
  Ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : gt(s) && (e.setupState = ji(s)), Pr(e);
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
  return Ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function id(e) {
  return Ze(e) && "__vccOpts" in e;
}
const U = (e, s) => Zu(e, s, gn);
function Ao(e, s, o) {
  try {
    Jn(-1);
    const a = arguments.length;
    return a === 2 ? gt(s) && !Ye(s) ? pn(s) ? $(e, null, [s]) : $(e, s) : $(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && pn(o) && (o = [o]), $(e, s, o));
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
  for (const q in e)
    q in Mr || (s[q] = e[q]);
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
    onEnter: A,
    onEnterCancelled: I,
    onLeave: P,
    onLeaveCancelled: M,
    onBeforeAppear: O = S,
    onAppear: j = A,
    onAppearCancelled: E = I
  } = s, L = (q, te, W, Q) => {
    q._enterCancelled = Q, Ws(q, te ? v : c), Ws(q, te ? f : u), W && W();
  }, Z = (q, te) => {
    q._isLeaving = !1, Ws(q, p), Ws(q, h), Ws(q, _), te && te();
  }, Y = (q) => (te, W) => {
    const Q = q ? j : A, le = () => L(te, q, W);
    oo(Q, [te, le]), Yl(() => {
      Ws(te, q ? m : r), ks(te, q ? v : c), ql(Q) || Jl(te, a, x, le);
    });
  };
  return Mt(s, {
    onBeforeEnter(q) {
      oo(S, [q]), ks(q, r), ks(q, u);
    },
    onBeforeAppear(q) {
      oo(O, [q]), ks(q, m), ks(q, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(q, te) {
      q._isLeaving = !0;
      const W = () => Z(q, te);
      ks(q, p), q._enterCancelled ? (ks(q, _), qa(q)) : (qa(q), ks(q, _)), Yl(() => {
        q._isLeaving && (Ws(q, p), ks(q, h), ql(P) || Jl(q, a, C, W));
      }), oo(P, [q, W]);
    },
    onEnterCancelled(q) {
      L(q, !1, void 0, !0), oo(I, [q]);
    },
    onAppearCancelled(q) {
      L(q, !0, void 0, !0), oo(E, [q]);
    },
    onLeaveCancelled(q) {
      Z(q), oo(M, [q]);
    }
  });
}
function vd(e) {
  if (e == null)
    return null;
  if (gt(e))
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
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${Bs}Delay`), r = a(`${Bs}Duration`), u = Ql(l, r), c = a(`${Bo}Delay`), m = a(`${Bo}Duration`), f = Ql(c, m);
  let v = null, p = 0, _ = 0;
  s === Bs ? u > 0 && (v = Bs, p = u, _ = r.length) : s === Bo ? f > 0 && (v = Bo, p = f, _ = m.length) : (p = Math.max(u, f), v = p > 0 ? u > f ? Bs : Bo : null, _ = v ? v === Bs ? r.length : m.length : 0);
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
        const p = f[Xn] = (_) => {
          _ && _.target !== f || (!_ || _.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[Xn] = null, Ws(f, u));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = rt(e), c = Lr(u);
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
}, pt = (e, s) => {
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
}, Kt = /* @__PURE__ */ xe(Xd, [["__scopeId", "data-v-21565df9"]]), Zd = {
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
    return (s, o) => (n(), D(fl(`h${e.level}`), {
      class: Me(["panel-title", e.variant])
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
      class: Me(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", lm, [
        $(sm, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), D(zr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", im, [
        ot(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ xe(rm, [["__scopeId", "data-v-55a62cd6"]]), um = {
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
    return (s, o) => (n(), D(fl(`h${e.level}`), {
      class: Me(["section-title", { clickable: e.clickable }]),
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
}), Xt = /* @__PURE__ */ xe(dm, [["__scopeId", "data-v-559361eb"]]), mm = { class: "status-grid" }, fm = { class: "status-grid__columns" }, vm = { class: "status-grid__column" }, pm = { class: "status-grid__title" }, gm = { class: "status-grid__column status-grid__column--right" }, hm = { class: "status-grid__title" }, ym = {
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
    const s = e, o = U(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Me(["status-item", o.value, { "is-separator": e.separator }])
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
    const s = e, o = U(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Me(["issue-card", o.value])
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
      class: Me(["action-btn", e.variant, e.size, { loading: e.loading }]),
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
      e.actionLabel ? (n(), D(_e, {
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
      class: Me(["detail-label"]),
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
      class: Me(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
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
      e.value ? (n(), D(Ya, {
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
}), bt = /* @__PURE__ */ xe(Wm, [["__scopeId", "data-v-ef15664a"]]), Gm = { class: "modal-header" }, jm = { class: "modal-body" }, Hm = { class: "status-section" }, Km = {
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
        var S, A, I;
        const C = (I = (A = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : I.find((P) => P.name === x);
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
    function p(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, h) => {
      var w, x, C, S, A, I, P, M, O, j, E, L, Z, Y, q, te, W, Q, le, Ue, ne, he;
      return n(), D(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: h[7] || (h[7] = (ce) => _.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: h[6] || (h[6] = pt(() => {
            }, ["stop"]))
          }, [
            t("div", Gm, [
              h[8] || (h[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: h[0] || (h[0] = (ce) => _.$emit("close"))
              }, "✕")
            ]),
            t("div", jm, [
              t("div", Hm, [
                $(Xt, { level: "4" }, {
                  default: g(() => [...h[9] || (h[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                $(bt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (n(), i("div", Km, [
                t("div", qm, [
                  $(Xt, { level: "4" }, {
                    default: g(() => [...h[10] || (h[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[1] || (h[1] = (ce) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Ym, [
                  t("div", Jm, [
                    h[11] || (h[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", Xm, [
                    (n(!0), i(H, null, we(a.value, (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zm, d(ce.name), 1),
                      t("span", ef, d(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", tf, [
                  t("div", sf, [
                    h[12] || (h[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", of, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", nf, [
                    (n(!0), i(H, null, we(l.value, (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      t("span", af, d(ce.name), 1),
                      t("span", lf, d(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", rf, [
                  t("div", uf, [
                    h[13] || (h[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", cf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", df, [
                    (n(!0), i(H, null, we(e.status.workflows.new, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      t("span", mf, d(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", ff, [
                  t("div", vf, [
                    h[14] || (h[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", pf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", gf, [
                    (n(!0), i(H, null, we(e.status.workflows.modified, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      t("span", hf, d(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (A = e.status.workflows) == null ? void 0 : A.deleted) != null && I.length ? (n(), i("div", yf, [
                  t("div", wf, [
                    h[15] || (h[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", _f, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", kf, [
                    (n(!0), i(H, null, we(e.status.workflows.deleted, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      t("span", bf, d(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", $f, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: h[2] || (h[2] = (ce) => o.value = !o.value)
                  }, [
                    h[16] || (h[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Cf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", xf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Sf, [
                    (n(!0), i(H, null, we(r.value, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      t("span", If, d(ce), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (n(), i("div", Ef, [
                $(Xt, { level: "4" }, {
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
                    (n(!0), i(H, null, we(e.status.git_changes.nodes_added, (ce) => (n(), i("div", {
                      key: v(ce),
                      class: "change-item"
                    }, [
                      t("span", Df, d(v(ce)), 1),
                      p(ce) ? (n(), i("span", Lf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (j = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && j.length ? (n(), i("div", Nf, [
                  t("div", Uf, [
                    h[19] || (h[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Of, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Af, [
                    (n(!0), i(H, null, we(e.status.git_changes.nodes_removed, (ce) => (n(), i("div", {
                      key: v(ce),
                      class: "change-item"
                    }, [
                      t("span", zf, d(v(ce)), 1),
                      p(ce) ? (n(), i("span", Vf, "dev")) : y("", !0)
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
              (Z = e.status.comparison) != null && Z.is_synced ? y("", !0) : (n(), i("div", Hf, [
                t("div", Kf, [
                  $(Xt, { level: "4" }, {
                    default: g(() => [...h[22] || (h[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[3] || (h[3] = (ce) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                h[26] || (h[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (q = (Y = e.status.comparison) == null ? void 0 : Y.missing_nodes) != null && q.length ? (n(), i("div", qf, [
                  $(bt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Yf, [
                    (n(!0), i(H, null, we(e.status.comparison.missing_nodes.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + d(ce), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Jf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (W = (te = e.status.comparison) == null ? void 0 : te.extra_nodes) != null && W.length ? (n(), i("div", Qf, [
                  $(bt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Xf, [
                    (n(!0), i(H, null, we(e.status.comparison.extra_nodes.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + d(ce), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Zf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (le = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && le.length ? (n(), i("div", ev, [
                  $(bt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", tv, [
                    (n(!0), i(H, null, we(e.status.comparison.version_mismatches.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(d(ce.name) + ": ", 1),
                      t("span", sv, d(ce.actual), 1),
                      h[23] || (h[23] = b(" → ", -1)),
                      t("span", ov, d(ce.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", nv, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Ue = e.status.comparison) == null ? void 0 : Ue.packages_in_sync) === !1 ? (n(), i("div", av, [
                  $(bt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", lv, [
                  $(_e, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: h[4] || (h[4] = (ce) => _.$emit("repair"))
                  }, {
                    default: g(() => [...h[24] || (h[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  h[25] || (h[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (he = (ne = e.status.comparison) == null ? void 0 : ne.disabled_nodes) != null && he.length ? (n(), i("div", iv, [
                $(Xt, { level: "4" }, {
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
                  (n(!0), i(H, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (ce) => (n(), i("div", {
                    key: ce,
                    class: "drift-list-item"
                  }, " • " + d(ce), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", cv, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", dv, [
                $(Xt, { level: "4" }, {
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
                onClick: h[5] || (h[5] = (ce) => _.$emit("close"))
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
    const x = U(() => {
      const ue = a.status.workflows.analyzed || [], F = ue.filter(
        (me) => me.unresolved_models_count > 0 || me.ambiguous_models_count > 0
      );
      return F.length === 0 && a.status.missing_models_count > 0 ? ue.filter((me) => me.sync_state === "synced") : F;
    });
    function C() {
      const ue = x.value;
      ue.length !== 0 && (v.value = !0, f("repair-missing-models", ue.map((F) => F.name)));
    }
    function S() {
      v.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: h, closeDetailModal: w });
    const A = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), I = U(() => a.status.has_changes), P = U(() => {
      const ue = a.status.git_changes;
      return ue.nodes_added.length > 0 || ue.nodes_removed.length > 0 || ue.workflow_changes;
    }), M = U(() => a.status.has_changes || A.value), O = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), j = U(() => a.status.git_changes.has_other_changes), E = U(() => {
      var ue;
      return ((ue = a.status.workflows.analyzed) == null ? void 0 : ue.filter((F) => F.status === "broken")) || [];
    }), L = U(() => {
      var ue;
      return ((ue = a.status.workflows.analyzed) == null ? void 0 : ue.filter(
        (F) => F.has_path_sync_issues && !F.has_issues
      )) || [];
    }), Z = U(() => E.value.length > 0);
    function Y(ue) {
      const F = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const me of F) {
        const B = ue.match(me);
        if (B != null && B[1])
          return B[1];
      }
      return null;
    }
    function q(ue) {
      const F = ue.map(Y).filter((me) => !!me);
      return [...new Set(F)];
    }
    function te(ue) {
      if (ue.length === 0) return "";
      if (ue.length === 1) return ` (>= ${ue[0]})`;
      const F = ue.slice(0, 2).map((B) => `>= ${B}`).join(", "), me = ue.length > 2;
      return ` (${F}${me ? ", ..." : ""})`;
    }
    function W(ue) {
      return ue.replace(/uninstallable node mappings?/gi, (F) => F.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(ue) {
      const F = W(ue.issue_summary || "Has issues"), me = /(?:>=|v?\d+\.\d+)/i.test(F), B = q(ue.version_gated_guidance || []);
      return (ue.nodes_version_gated_count || 0) > 0 && B.length > 0 && !me ? `${ue.name} — ${F} (needs ComfyUI ${B.map((N) => `>= ${N}`).join(", ")})` : `${ue.name} — ${F}`;
    }
    const le = U(() => E.value.reduce(
      (ue, F) => ue + (F.nodes_version_gated_count || 0),
      0
    )), Ue = U(() => {
      const ue = E.value.flatMap(
        (F) => q(F.version_gated_guidance || [])
      );
      return [...new Set(ue)];
    }), ne = U(() => E.value.reduce(
      (ue, F) => ue + (F.nodes_uninstallable_count || 0),
      0
    )), he = U(() => {
      const ue = [];
      return le.value > 0 && ue.push(
        `${le.value} require newer ComfyUI${te(Ue.value)}`
      ), ne.value > 0 && ue.push(`${ne.value} need community packages`), ue.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ue.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ce = U(() => Z.value || L.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ae = U(() => {
      const ue = [];
      return a.status.workflows.new.length > 0 && ue.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ue.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ue.push(`${a.status.workflows.deleted.length} deleted`), ue.length > 0 ? `${ue.join(", ")} workflow${ue.length === 1 && !ue[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ce = U(() => {
      var me, B;
      const ue = [], F = a.status.comparison;
      return (me = F.missing_nodes) != null && me.length && ue.push(`${F.missing_nodes.length} missing node${F.missing_nodes.length === 1 ? "" : "s"}`), (B = F.extra_nodes) != null && B.length && ue.push(`${F.extra_nodes.length} untracked node${F.extra_nodes.length === 1 ? "" : "s"}`), ue.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ue.join(" and ")}.`;
    }), be = U(() => {
      var me, B;
      const ue = [], F = a.status.comparison;
      return (me = F.extra_nodes) != null && me.length && (F.extra_nodes.slice(0, 3).forEach((N) => {
        ue.push(`Untracked: ${N}`);
      }), F.extra_nodes.length > 3 && ue.push(`...and ${F.extra_nodes.length - 3} more untracked`)), (B = F.missing_nodes) != null && B.length && (F.missing_nodes.slice(0, 3).forEach((N) => {
        ue.push(`Missing: ${N}`);
      }), F.missing_nodes.length > 3 && ue.push(`...and ${F.missing_nodes.length - 3} more missing`)), ue;
    });
    return (ue, F) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), D(cs, {
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
                onClick: F[0] || (F[0] = (me) => ue.$emit("start-setup"))
              }, {
                default: g(() => [...F[13] || (F[13] = [
                  b(" Start Setup ", -1)
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
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: F[1] || (F[1] = (me) => ue.$emit("view-environments"))
              }, {
                default: g(() => [...F[14] || (F[14] = [
                  b(" View Environments ", -1)
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
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: F[2] || (F[2] = (me) => ue.$emit("create-environment"))
              }, {
                default: g(() => [...F[15] || (F[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: F[4] || (F[4] = (me) => r.value = !0),
            onMouseleave: F[5] || (F[5] = (me) => r.value = !1)
          }, [
            t("div", hv, [
              $(Xt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...F[16] || (F[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(fd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), D(_e, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: g(() => [...F[17] || (F[17] = [
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
            }, fo({
              left: g(() => [
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
                $(_s, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
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
                j.value ? (n(), D(_s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !P.value && !j.value ? (n(), D(_s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (n(), D(_s, {
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
                  F[19] || (F[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", yv, [
                    t("span", wv, d(Ae.value), 1),
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: F[3] || (F[3] = (me) => ue.$emit("commit-changes"))
                    }, {
                      default: g(() => [...F[18] || (F[18] = [
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
          e.status.is_detached_head ? (n(), D(cs, {
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
                onClick: F[6] || (F[6] = (me) => ue.$emit("create-branch"))
              }, {
                default: g(() => [...F[20] || (F[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", _v, [
            $(Xt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...F[21] || (F[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ce.value ? (n(), i(H, { key: 0 }, [
              E.value.length > 0 ? (n(), D(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: he.value,
                items: E.value.map(Q)
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[7] || (F[7] = (me) => ue.$emit("view-workflows"))
                  }, {
                    default: g(() => [...F[22] || (F[22] = [
                      b(" See Workflows ", -1)
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
                items: L.value.map((me) => `${me.name} — ${me.models_needing_path_sync_count} model path${me.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[8] || (F[8] = (me) => ue.$emit("view-workflows"))
                  }, {
                    default: g(() => [...F[23] || (F[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !Z.value ? (n(), D(cs, {
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
                    onClick: F[9] || (F[9] = (me) => ue.$emit("view-workflows"))
                  }, {
                    default: g(() => [...F[24] || (F[24] = [
                      b(" See Workflows ", -1)
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
                description: Ce.value,
                items: be.value
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: g(() => [...F[25] || (F[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[10] || (F[10] = (me) => ue.$emit("view-nodes"))
                  }, {
                    default: g(() => [...F[26] || (F[26] = [
                      b(" See Nodes ", -1)
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
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[11] || (F[11] = (me) => ue.$emit("view-nodes"))
                  }, {
                    default: g(() => [...F[27] || (F[27] = [
                      b(" See Nodes ", -1)
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
      $(gv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: F[12] || (F[12] = (me) => l.value = !1),
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
      class: Me(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        m[0] || (m[0] = as((f) => c.$emit("enter"), ["enter"])),
        m[1] || (m[1] = as((f) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => c.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => c.$emit("blur"))
    }, null, 42, Cv));
  }
}), an = /* @__PURE__ */ xe(xv, [["__scopeId", "data-v-0380d08f"]]), Sv = { class: "branch-create-form" }, Iv = { class: "form-actions" }, Ev = /* @__PURE__ */ $e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = U(() => {
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
      $(an, {
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
      class: Me(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
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
}), Nv = /* @__PURE__ */ xe(Lv, [["__scopeId", "data-v-c6581a24"]]), QL = Qs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const XL = [
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
], ZL = {
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
], eN = [
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
function it() {
  const e = k(!1), s = k(null);
  async function o(se, Te) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi(se, Te);
    if (!je.ok) {
      const us = await je.json().catch(() => ({}));
      throw new Error(us.error || us.message || `Request failed: ${je.status}`);
    }
    const _t = await je.text();
    if (_t)
      return JSON.parse(_t);
  }
  async function a(se = !1) {
    return o(se ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(se, Te = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: se, allow_issues: Te })
    });
  }
  async function r(se = 10, Te = 0) {
    return o(`/v2/comfygit/log?limit=${se}&offset=${Te}`);
  }
  async function u(se, Te = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(se)}&limit=${Te}`);
  }
  async function c(se) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: se })
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
  async function v(se) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: se, force: !0 })
    });
  }
  async function p() {
    return o("/v2/comfygit/branches");
  }
  async function _(se) {
    return o(`/v2/comfygit/commit/${se}`);
  }
  async function h(se, Te = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: se, force: Te })
    });
  }
  async function w(se, Te = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: se, start_point: Te })
    });
  }
  async function x(se, Te = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: se, force: Te })
    });
  }
  async function C(se, Te = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(se)}`, {
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
        const se = await a();
        return {
          environments: [{
            name: se.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + se.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: se.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: se.branch
          }],
          current: se.environment,
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
  async function I(se) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(se)}`);
    } catch {
      return null;
    }
  }
  async function P(se, Te) {
    const je = { target_env: se };
    return Te && (je.workspace_path = Te), o("/v2/comfygit/switch_environment", {
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
  async function O(se) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function j() {
    return o("/v2/workspace/environments/create_status");
  }
  async function E(se = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${se}`);
  }
  async function L(se) {
    return o(`/v2/workspace/environments/${se}`, {
      method: "DELETE"
    });
  }
  async function Z(se = !1) {
    try {
      return o(se ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Te = await a(se), je = [];
      return Te.workflows.new.forEach((_t) => {
        je.push({
          name: _t,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: _t
        });
      }), Te.workflows.modified.forEach((_t) => {
        je.push({
          name: _t,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: _t
        });
      }), Te.workflows.synced.forEach((_t) => {
        je.push({
          name: _t,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: _t
        });
      }), je;
    }
  }
  async function Y(se) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/details`);
  }
  async function q(se) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/contract`);
  }
  async function te(se, Te) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Te)
    });
  }
  async function W(se) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/contract`, {
      method: "DELETE"
    });
  }
  async function Q(se) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/resolve`, {
      method: "POST"
    });
  }
  async function le(se, Te, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Te, install_models: je })
    });
  }
  async function Ue(se, Te, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(se)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Te, importance: je })
    });
  }
  async function ne() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function he() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ce(se) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(se)}`);
  }
  async function Ae(se) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: se })
    });
  }
  async function Ce(se, Te) {
    return o(`/v2/workspace/models/${se}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Te })
    });
  }
  async function be(se, Te) {
    return o(`/v2/workspace/models/${se}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Te })
    });
  }
  async function ue(se) {
    return o(`/v2/workspace/models/${se}`, {
      method: "DELETE"
    });
  }
  async function F(se) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function me() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function B() {
    return o("/v2/workspace/models/directory");
  }
  async function N(se) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: se })
    });
  }
  async function re(se) {
    const Te = new URLSearchParams({ url: se });
    return o(`/v2/workspace/huggingface/repo-info?${Te}`);
  }
  async function Ve() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ze(se, Te = 10) {
    const je = new URLSearchParams({ query: se, limit: String(Te) });
    return o(`/v2/workspace/huggingface/search?${je}`);
  }
  async function V(se) {
    try {
      const Te = se ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(se)}` : "/v2/comfygit/config";
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
  async function J(se, Te) {
    const je = Te ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Te)}` : "/v2/comfygit/config";
    return o(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function ve(se, Te) {
    try {
      const je = new URLSearchParams();
      return se && je.append("level", se), Te && je.append("lines", Te.toString()), o(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ee(se, Te) {
    try {
      const je = new URLSearchParams();
      return se && je.append("level", se), Te && je.append("lines", Te.toString()), o(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function G() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function z() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ee(se, Te) {
    try {
      const je = new URLSearchParams();
      return se && je.append("level", se), Te && je.append("lines", Te.toString()), o(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function ae() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function de(se) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: se })
    });
  }
  async function ie() {
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
  async function Ne(se) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(se)}/track-dev`, {
      method: "POST"
    });
  }
  async function Pe(se) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(se)}/install`, {
      method: "POST"
    });
  }
  async function ge(se, Te) {
    var Fs, Je, _a, Cl;
    const je = Ov(), _t = ((Je = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Je.clientId) ?? ((Cl = (_a = window.app) == null ? void 0 : _a.api) == null ? void 0 : Cl.initialClientId) ?? "comfygit-panel", Dt = {
      id: se.id,
      version: se.version || se.selected_version || "latest",
      selected_version: se.selected_version || "latest",
      mode: se.mode || "remote",
      channel: se.channel || "default"
    };
    return se.install_source && (Dt.install_source = se.install_source), se.install_source === "git" && se.repository && (Dt.repository = se.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: je,
        client_id: _t
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", se.id), Te != null && Te.beforeQueueStart && await Te.beforeQueueStart(je), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: je };
  }
  async function K(se) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(se)}/update`, {
      method: "POST"
    });
  }
  async function Fe(se) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(se)}`, {
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
  async function Se(se, Te) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: se, url: Te })
    });
  }
  async function Oe(se) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(se)}`, {
      method: "DELETE"
    });
  }
  async function Re(se, Te, je) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(se)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Te, push_url: je })
    });
  }
  async function X(se, Te) {
    const je = {};
    return Te && (je["X-Git-Auth-Token"] = Te), o(`/v2/comfygit/remotes/${encodeURIComponent(se)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function ye(se) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(se)}/status`);
    } catch {
      return null;
    }
  }
  async function ke(se = "skip", Te = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: se,
        remove_extra_nodes: Te
      })
    });
  }
  async function Ke(se, Te) {
    const je = Te ? `/v2/comfygit/remotes/${encodeURIComponent(se)}/pull-preview?branch=${encodeURIComponent(Te)}` : `/v2/comfygit/remotes/${encodeURIComponent(se)}/pull-preview`;
    return o(je);
  }
  async function Be(se, Te = {}) {
    const je = { "Content-Type": "application/json" };
    return Te.authToken && (je["X-Git-Auth-Token"] = Te.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(se)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: Te.modelStrategy || "skip",
        force: Te.force || !1,
        resolutions: Te.resolutions
      })
    });
  }
  async function We(se, Te) {
    const je = Te ? `/v2/comfygit/remotes/${encodeURIComponent(se)}/push-preview?branch=${encodeURIComponent(Te)}` : `/v2/comfygit/remotes/${encodeURIComponent(se)}/push-preview`;
    return o(je);
  }
  async function et(se, Te = {}) {
    const je = { "Content-Type": "application/json" };
    return Te.authToken && (je["X-Git-Auth-Token"] = Te.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(se)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: Te.force || !1 })
    });
  }
  async function qe(se, Te) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(se)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Te })
    });
  }
  async function ft(se) {
    const Te = {
      success: 0,
      failed: []
    };
    for (const je of se)
      try {
        await Q(je), Te.success++;
      } catch (_t) {
        Te.failed.push({
          name: je,
          error: _t instanceof Error ? _t.message : "Unknown error"
        });
      }
    return Te;
  }
  async function ut(se) {
    var _t;
    const Te = new FormData();
    if (Te.append("file", se), !((_t = window.app) != null && _t.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Te
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const Dt = await je.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function mt(se) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(se)}`
    );
  }
  async function Pt(se, Te, je, _t) {
    var Fs;
    const Dt = new FormData();
    if (Dt.append("file", se), Dt.append("name", Te), Dt.append("model_strategy", je), Dt.append("torch_backend", _t), !((Fs = window.app) != null && Fs.api))
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
  async function Ot(se) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: se })
    });
  }
  async function fe(se, Te, je, _t) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: se,
        name: Te,
        model_strategy: je,
        torch_backend: _t
      })
    });
  }
  async function T() {
    return o("/v2/setup/status");
  }
  async function R() {
    return o("/v2/comfygit/update-check");
  }
  async function Le() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function tt(se) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function vt() {
    return o("/v2/setup/initialize_status");
  }
  async function st(se) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function xt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Et() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Ge(se, Te) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: se, save_key: Te })
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ys(se) {
    const Te = se ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(se)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Te);
  }
  async function vo(se) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function po() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function go(se) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(se)}`, {
      method: "DELETE"
    });
  }
  async function Zs(se) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(se)}/stop`, {
      method: "POST"
    });
  }
  async function ho(se) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(se)}/start`, {
      method: "POST"
    });
  }
  async function yo(se) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(se)}/status`);
  }
  async function wo(se) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: se })
    });
  }
  async function _o(se = !1) {
    return o(se ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ko() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function ha() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ya(se) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function wa(se) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(se)}`, {
      method: "DELETE"
    });
  }
  async function xn(se) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(se)
    });
  }
  async function pe() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function oe(se) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(se)}/info`);
  }
  async function He(se) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(se)}/instances`);
  }
  async function Qe(se, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(se)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Te)
    });
  }
  async function ht(se, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(se)}/instances/${encodeURIComponent(Te)}/start`, {
      method: "POST"
    });
  }
  async function Tt(se, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(se)}/instances/${encodeURIComponent(Te)}/stop`, {
      method: "POST"
    });
  }
  async function rs(se, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(se)}/instances/${encodeURIComponent(Te)}`, {
      method: "DELETE"
    });
  }
  async function eo(se) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: se })
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
    getEnvironments: A,
    getEnvironmentDetails: I,
    switchEnvironment: P,
    getSwitchProgress: M,
    createEnvironment: O,
    getCreateProgress: j,
    getComfyUIReleases: E,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: Z,
    getWorkflowDetails: Y,
    getWorkflowContract: q,
    saveWorkflowContract: te,
    deleteWorkflowContract: W,
    resolveWorkflow: Q,
    installWorkflowDeps: le,
    setModelImportance: Ue,
    // Model Management
    getEnvironmentModels: ne,
    getWorkspaceModels: he,
    getModelDetails: ce,
    openFileLocation: Ae,
    addModelSource: Ce,
    removeModelSource: be,
    deleteModel: ue,
    downloadModel: F,
    scanWorkspaceModels: me,
    getModelsDirectory: B,
    setModelsDirectory: N,
    getHuggingFaceRepoInfo: re,
    getModelsSubdirectories: Ve,
    searchHuggingFaceRepos: ze,
    // Settings
    getConfig: V,
    updateConfig: J,
    // Debug/Logs
    getEnvironmentLogs: ve,
    getWorkspaceLogs: Ee,
    getEnvironmentLogPath: G,
    getWorkspaceLogPath: z,
    getOrchestratorLogs: ee,
    getOrchestratorLogPath: ae,
    openFile: de,
    // Node Management
    getNodes: ie,
    trackNodeAsDev: Ne,
    installNode: Pe,
    queueNodeInstall: ge,
    updateNode: K,
    uninstallNode: Fe,
    // Git Remotes
    getRemotes: Ie,
    addRemote: Se,
    removeRemote: Oe,
    updateRemoteUrl: Re,
    fetchRemote: X,
    getRemoteSyncStatus: ye,
    // Push/Pull
    getPullPreview: Ke,
    pullFromRemote: Be,
    getPushPreview: We,
    pushToRemote: et,
    validateMerge: qe,
    // Environment Sync
    syncEnvironmentManually: ke,
    // Workflow Repair
    repairWorkflowModels: ft,
    // Import Operations
    previewTarballImport: ut,
    previewGitImport: Ot,
    validateEnvironmentName: mt,
    executeImport: Pt,
    executeGitImport: fe,
    getImportProgress: ts,
    // First-Time Setup
    getSetupStatus: T,
    // Manager Update Notice
    getUpdateCheck: R,
    updateManager: Le,
    initializeWorkspace: tt,
    getInitializeProgress: vt,
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
    scanForWorkers: pe,
    getWorkerSystemInfo: oe,
    getWorkerInstances: He,
    deployToWorker: Qe,
    startWorkerInstance: ht,
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
    }), Xs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (n(), D(Ut, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Me(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = pt(() => {
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
      class: Me(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Hv)) : y("", !0),
      ot(s.$slots, "default", {}, void 0)
    ], 10, jv));
  }
}), De = /* @__PURE__ */ xe(Kv, [["__scopeId", "data-v-f3452606"]]), qv = { class: "commit-list" }, Yv = /* @__PURE__ */ $e({
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
    const s = e, o = U(() => s.hash.slice(0, s.length));
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
      class: Me(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      $(Fr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Xv, d(e.message), 1),
      t("span", Zv, d(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = pt(() => {
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
    const s = e, { getBranchHistory: o } = it(), a = k([]), l = k(!1), r = k(!0);
    return at(async () => {
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
      header: g(() => [
        t("div", tp, [
          c[4] || (c[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", sp, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", op, "CURRENT")) : y("", !0)
        ]),
        $(De, {
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
        r.value ? (n(), i("div", ip, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", rp, " No commits found on this branch ")) : (n(), D(Vr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(H, null, we(a.value, (m) => (n(), D(Br, {
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
        e.isCurrent ? y("", !0) : (n(), D(_e, {
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
        e.isCurrent ? y("", !0) : (n(), D(De, {
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
    return (v, p) => (n(), D(Kt, null, {
      header: g(() => [
        $(qt, { title: "BRANCHES" }, {
          actions: g(() => [
            a.value ? y("", !0) : (n(), D(_e, {
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
          (n(!0), i(H, null, we(e.branches, (_) => (n(), D(Nv, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (h) => c(_)
          }, {
            actions: g(() => [
              _.is_current ? y("", !0) : (n(), D(_e, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: pt((h) => o("switch", _.name), ["stop"])
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
        l.value ? (n(), D(cp, {
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
    const s = e, o = U(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), D(Kt, null, {
      header: g(() => [
        $(qt, { title: o.value }, null, 8, ["title"])
      ]),
      content: g(() => [
        e.commits.length === 0 ? (n(), D(gs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), D(Vr, { key: 1 }, {
          default: g(() => [
            (n(!0), i(H, null, we(e.commits, (r) => (n(), D(Br, {
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
    return (s, o) => (n(), D(fl(`h${e.level}`), {
      class: Me(["base-title", e.variant])
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
      class: Me(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Me(["base-select", { error: !!e.error }]),
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
}), uo = /* @__PURE__ */ xe($p, [["__scopeId", "data-v-4996bfe0"]]), Cp = { class: "popover-header" }, xp = { class: "popover-title" }, Sp = { class: "popover-content" }, Ip = {
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
    return (s, o) => (n(), D(Ut, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = pt(() => {
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
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = it(), m = k(null), f = k(!1), v = k(null), p = k(!1), _ = k({}), h = k(!1), w = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(W) {
      switch (W) {
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
    function A(W) {
      switch (W) {
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
    function I(W) {
      switch (W) {
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
    function P(W) {
      switch (W) {
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
    function M(W) {
      switch (W) {
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
    function O(W) {
      if (!W.loaded_by || W.loaded_by.length === 0) return [];
      const Q = W.hash || W.filename;
      return w.value.has(Q) ? W.loaded_by : W.loaded_by.slice(0, 3);
    }
    function j(W) {
      return w.value.has(W);
    }
    function E(W) {
      w.value.has(W) ? w.value.delete(W) : w.value.add(W), w.value = new Set(w.value);
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function Z(W, Q) {
      _.value[W] = Q, p.value = !0;
    }
    async function Y(W) {
      try {
        await u(W);
      } catch (Q) {
        v.value = Q instanceof Error ? Q.message : "Failed to open file location";
      }
    }
    async function q(W) {
      if (W.package_id)
        try {
          const Q = W.latest_version || "latest";
          await c({
            id: W.package_id,
            version: Q,
            selected_version: Q,
            mode: "remote",
            channel: "default"
          }), x.value.add(W.package_id);
        } catch (Q) {
          v.value = Q instanceof Error ? Q.message : "Failed to queue node install";
        }
    }
    async function te() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [W, Q] of Object.entries(_.value))
          await r(o.workflowName, W, Q);
        a("refresh"), a("close");
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return at(L), (W, Q) => (n(), i(H, null, [
      $(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: Q[4] || (Q[4] = (le) => a("close"))
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
              (n(!0), i(H, null, we(m.value.models, (le) => {
                var Ue;
                return n(), i("div", {
                  key: le.hash || le.filename,
                  class: "model-card"
                }, [
                  t("div", Rp, [
                    Q[6] || (Q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Mp, d(le.filename), 1)
                  ]),
                  t("div", Dp, [
                    t("div", Lp, [
                      Q[7] || (Q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Me(["value", S(le.status)])
                      }, d(A(le.status)), 3)
                    ]),
                    t("div", Np, [
                      t("span", Up, [
                        Q[8] || (Q[8] = b(" Importance: ", -1)),
                        $(zr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Q[0] || (Q[0] = (ne) => h.value = !0)
                        })
                      ]),
                      $(uo, {
                        "model-value": _.value[le.filename] || le.importance,
                        options: C,
                        "onUpdate:modelValue": (ne) => Z(le.filename, ne)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    le.loaded_by && le.loaded_by.length > 0 ? (n(), i("div", Op, [
                      Q[9] || (Q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Ap, [
                        (n(!0), i(H, null, we(O(le), (ne, he) => (n(), i("div", {
                          key: `${ne.node_id}-${he}`,
                          class: "node-reference"
                        }, d(ne.node_type) + " (Node #" + d(ne.node_id) + ") ", 1))), 128)),
                        le.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ne) => E(le.hash || le.filename)
                        }, d(j(le.hash || le.filename) ? "▼ Show less" : `▶ View all (${le.loaded_by.length})`), 9, zp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    le.size_mb ? (n(), i("div", Vp, [
                      Q[10] || (Q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Fp, d(le.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    le.has_category_mismatch ? (n(), i("div", Bp, [
                      Q[13] || (Q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Wp, [
                        Q[11] || (Q[11] = b(" In ", -1)),
                        t("code", null, d(le.actual_category) + "/", 1),
                        Q[12] || (Q[12] = b(" but loader needs ", -1)),
                        t("code", null, d((Ue = le.expected_categories) == null ? void 0 : Ue[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  le.status !== "available" ? (n(), i("div", Gp, [
                    le.status === "downloadable" ? (n(), D(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Q[1] || (Q[1] = (ne) => a("resolve"))
                    }, {
                      default: g(() => [...Q[14] || (Q[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : le.status === "category_mismatch" && le.file_path ? (n(), D(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => Y(le.file_path)
                    }, {
                      default: g(() => [...Q[15] || (Q[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : le.status !== "path_mismatch" ? (n(), D(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (ne) => a("resolve"))
                    }, {
                      default: g(() => [...Q[16] || (Q[16] = [
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
              (n(!0), i(H, null, we(m.value.nodes, (le, Ue) => (n(), i("div", {
                key: `${le.name}-${le.status}-${Ue}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Me(["node-status", I(le.status)])
                }, d(P(le.status)), 3),
                t("div", Kp, [
                  t("div", qp, [
                    t("span", Yp, d(le.name), 1),
                    t("span", Jp, d(M(le.status)), 1),
                    le.version ? (n(), i("span", Qp, "v" + d(le.version), 1)) : y("", !0),
                    le.status === "uninstallable" && le.package_id && !x.value.has(le.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ne) => q(le)
                    }, " Install ", 8, Xp)) : le.status === "uninstallable" && le.package_id && x.value.has(le.package_id) ? (n(), i("span", Zp, " Queued ")) : y("", !0)
                  ]),
                  le.guidance ? (n(), i("div", eg, d(le.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          $(De, {
            variant: "secondary",
            onClick: Q[3] || (Q[3] = (le) => a("close"))
          }, {
            default: g(() => [...Q[17] || (Q[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            onClick: te
          }, {
            default: g(() => [...Q[18] || (Q[18] = [
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
        onClose: Q[5] || (Q[5] = (le) => h.value = !1)
      }, {
        content: g(() => [...Q[19] || (Q[19] = [
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
      class: Me(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Me(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = as((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = as((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, og),
      e.error ? (n(), i("span", ng, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), dt = /* @__PURE__ */ xe(ag, [["__scopeId", "data-v-9ba02cdc"]]), lg = { class: "base-textarea-wrapper" }, ig = ["value", "rows", "placeholder", "disabled", "maxlength"], rg = {
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
          u[1] || (u[1] = as(pt((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = as(pt((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          as(l, ["enter"])
        ]
      }, null, 40, ig),
      e.showCharCount && e.maxLength ? (n(), i("div", rg, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), yn = /* @__PURE__ */ xe(ug, [["__scopeId", "data-v-c6d16c93"]]), cg = ["for"], dg = {
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
    const s = e, o = U(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Me(["base-form-field", { "full-width": e.fullWidth }])
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
}), $t = /* @__PURE__ */ xe(pg, [["__scopeId", "data-v-9a1cf296"]]), gg = { class: "contract-meta" }, hg = { class: "contract-summary" }, yg = { class: "summary-pill" }, wg = { class: "summary-pill" }, _g = { class: "summary-pill" }, kg = { class: "contract-meta-grid" }, bg = { class: "contract-layout" }, $g = { class: "contract-column" }, Cg = { class: "section-header" }, xg = {
  key: 0,
  class: "empty-message"
}, Sg = { class: "item-card-header" }, Ig = { class: "item-card-title" }, Eg = { class: "item-card-meta" }, Tg = { class: "item-grid" }, Pg = { class: "contract-column" }, Rg = { class: "section-header" }, Mg = {
  key: 0,
  class: "empty-message"
}, Dg = { class: "item-card-header" }, Lg = { class: "item-card-title" }, Ng = { class: "item-card-meta" }, Ug = { class: "item-grid" }, Og = /* @__PURE__ */ $e({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = it(), c = k(!1), m = k(!1), f = k(!1), v = k(null), p = k(null), _ = k(null), h = [
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
      var Z;
      return ((Z = p.value) == null ? void 0 : Z.contract_summary.has_contract) === !0;
    }), C = U(() => {
      if (!_.value)
        return { inputs: [], outputs: [] };
      const Z = _.value.default_contract || "default";
      return _.value.contracts[Z] || (_.value.contracts[Z] = { inputs: [], outputs: [] }), _.value.contracts[Z];
    }), S = U(() => {
      var Y;
      const Z = ((Y = p.value) == null ? void 0 : Y.contract_summary.status) ?? "none";
      return Z === "valid" ? "Valid Contract" : Z === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function A(Z) {
      return Z ? JSON.parse(JSON.stringify(Z)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function I(Z) {
      if (!_.value) return;
      const Y = Z.trim() || "default";
      _.value.default_contract = Y, _.value.contracts[Y] || (_.value.contracts[Y] = { inputs: [], outputs: [] });
    }
    function P(Z) {
      C.value.inputs.splice(Z, 1);
    }
    function M(Z) {
      C.value.outputs.splice(Z, 1);
    }
    async function O() {
      c.value = !0, v.value = null;
      try {
        p.value = await l(o.workflowName), _.value = A(p.value.execution_contract);
      } catch (Z) {
        v.value = Z instanceof Error ? Z.message : "Failed to load workflow contract";
      } finally {
        c.value = !1;
      }
    }
    async function j() {
      if (_.value) {
        m.value = !0, v.value = null;
        try {
          p.value = await r(o.workflowName, _.value), _.value = A(p.value.execution_contract), a("refresh");
        } catch (Z) {
          v.value = Z instanceof Error ? Z.message : "Failed to save workflow contract";
        } finally {
          m.value = !1;
        }
      }
    }
    async function E() {
      f.value = !0, v.value = null;
      try {
        await u(o.workflowName), await O(), a("refresh");
      } catch (Z) {
        v.value = Z instanceof Error ? Z.message : "Failed to delete workflow contract";
      } finally {
        f.value = !1;
      }
    }
    function L() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), a("close");
    }
    return at(O), (Z, Y) => (n(), D(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: v.value || void 0,
      "fixed-height": "",
      onClose: Y[3] || (Y[3] = (q) => a("close"))
    }, {
      body: g(() => [
        _.value ? (n(), i(H, { key: 0 }, [
          t("section", gg, [
            t("div", hg, [
              t("span", yg, d(S.value), 1),
              t("span", wg, d(C.value.inputs.length) + " input" + d(C.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", _g, d(C.value.outputs.length) + " output" + d(C.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", kg, [
              $($t, { label: "Default Contract" }, {
                default: g(() => [
                  $(dt, {
                    "model-value": _.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": I
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              $($t, { label: "Display Name" }, {
                default: g(() => [
                  $(dt, {
                    modelValue: C.value.display_name,
                    "onUpdate:modelValue": Y[0] || (Y[0] = (q) => C.value.display_name = q),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            $($t, { label: "Description" }, {
              default: g(() => [
                $(yn, {
                  modelValue: C.value.description,
                  "onUpdate:modelValue": Y[1] || (Y[1] = (q) => C.value.description = q),
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
                  default: g(() => [...Y[4] || (Y[4] = [
                    b("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              C.value.inputs.length ? y("", !0) : (n(), i("div", xg, " No inputs configured. ")),
              (n(!0), i(H, null, we(C.value.inputs, (q, te) => (n(), i("div", {
                key: `input-${te}`,
                class: "item-card"
              }, [
                t("div", Sg, [
                  t("div", null, [
                    t("div", Ig, d(q.name || `Input ${te + 1}`), 1),
                    t("div", Eg, [
                      b(" Node " + d(q.node_id || "?"), 1),
                      q.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        b(" · Widget " + d(q.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  $(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (W) => P(te)
                  }, {
                    default: g(() => [...Y[5] || (Y[5] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Tg, [
                  $($t, { label: "Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: q.name,
                        "onUpdate:modelValue": (W) => q.name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Display Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: q.display_name,
                        "onUpdate:modelValue": (W) => q.display_name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Type" }, {
                    default: g(() => [
                      $(uo, {
                        "model-value": q.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (W) => q.type = W
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Required" }, {
                    default: g(() => [
                      $(uo, {
                        "model-value": q.required ? "true" : "false",
                        options: w,
                        "full-width": "",
                        "onUpdate:modelValue": (W) => q.required = W === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Default" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: q.default,
                        "onUpdate:modelValue": (W) => q.default = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]))), 128))
            ]),
            t("div", Pg, [
              t("div", Rg, [
                $(Ls, { variant: "section" }, {
                  default: g(() => [...Y[6] || (Y[6] = [
                    b("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              C.value.outputs.length ? y("", !0) : (n(), i("div", Mg, " No outputs configured. ")),
              (n(!0), i(H, null, we(C.value.outputs, (q, te) => (n(), i("div", {
                key: `output-${te}`,
                class: "item-card"
              }, [
                t("div", Dg, [
                  t("div", null, [
                    t("div", Lg, d(q.name || `Output ${te + 1}`), 1),
                    t("div", Ng, [
                      b(" Node " + d(q.node_id || "?"), 1),
                      q.selector ? (n(), i(H, { key: 0 }, [
                        b(" · " + d(q.selector), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  $(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (W) => M(te)
                  }, {
                    default: g(() => [...Y[7] || (Y[7] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Ug, [
                  $($t, { label: "Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: q.name,
                        "onUpdate:modelValue": (W) => q.name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Display Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: q.display_name,
                        "onUpdate:modelValue": (W) => q.display_name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Type" }, {
                    default: g(() => [
                      $(uo, {
                        "model-value": q.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (W) => q.type = W
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
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
        $(De, {
          variant: "secondary",
          onClick: L
        }, {
          default: g(() => [...Y[8] || (Y[8] = [
            b(" Open I/O Mapping Mode ", -1)
          ])]),
          _: 1
        }),
        $(De, {
          variant: "secondary",
          onClick: Y[2] || (Y[2] = (q) => a("close"))
        }, {
          default: g(() => [...Y[9] || (Y[9] = [
            b(" Close ", -1)
          ])]),
          _: 1
        }),
        $(De, {
          variant: "danger",
          disabled: !x.value,
          loading: f.value,
          onClick: E
        }, {
          default: g(() => [...Y[10] || (Y[10] = [
            b(" Delete Contract ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"]),
        $(De, {
          variant: "primary",
          loading: m.value,
          onClick: j
        }, {
          default: g(() => [...Y[11] || (Y[11] = [
            b(" Save Contract ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ag = /* @__PURE__ */ xe(Og, [["__scopeId", "data-v-a66736df"]]), lt = Qs({
  items: [],
  status: "idle"
});
let $s = null;
function Wr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Da(e) {
  return lt.items.find((s) => s.id === e);
}
async function Io() {
  if (lt.status === "downloading") return;
  const e = lt.items.find((s) => s.status === "queued");
  if (!e) {
    lt.status = "idle";
    return;
  }
  lt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await zg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    lt.status = "idle", Io();
  }
}
async function zg(e) {
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
async function Vg() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (lt.items.some((l) => l.url === o.url && l.filename === o.filename))
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
      lt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function zo() {
  function e(C) {
    for (const S of C) {
      if (lt.items.some(
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
      lt.items.push(I);
    }
    lt.status === "idle" && Io();
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
        $s && ($s.close(), $s = null), S.status = "failed", S.error = "Cancelled by user", lt.status = "idle", Io();
      } else if (S.status === "queued") {
        const A = lt.items.findIndex((I) => I.id === C);
        A >= 0 && lt.items.splice(A, 1);
      }
    }
  }
  function o(C) {
    const S = Da(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, lt.status === "idle" && Io());
  }
  function a(C) {
    const S = Da(C);
    !S || S.status !== "paused" || (S.status = "queued", lt.status === "idle" && Io());
  }
  function l() {
    const C = lt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    lt.status === "idle" && Io();
  }
  function r(C) {
    const S = lt.items.findIndex((A) => A.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(lt.items[S].status) && lt.items.splice(S, 1);
  }
  function u() {
    lt.items = lt.items.filter((C) => C.status !== "completed");
  }
  function c() {
    lt.items = lt.items.filter((C) => C.status !== "failed");
  }
  const m = U(
    () => lt.items.find((C) => C.status === "downloading")
  ), f = U(
    () => lt.items.filter((C) => C.status === "queued")
  ), v = U(
    () => lt.items.filter((C) => C.status === "completed")
  ), p = U(
    () => lt.items.filter((C) => C.status === "failed")
  ), _ = U(
    () => lt.items.filter((C) => C.status === "paused")
  ), h = U(() => lt.items.length > 0), w = U(
    () => lt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = U(
    () => lt.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Gn(lt),
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
    loadPendingDownloads: Vg
  };
}
function Gr() {
  const e = k(null), s = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function u(A, I) {
    var M;
    if (!((M = window.app) != null && M.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(A, I);
    if (!P.ok) {
      const O = await P.json().catch(() => ({})), j = O.error || O.message || `Request failed: ${P.status}`;
      throw new Error(j);
    }
    return P.json();
  }
  async function c(A) {
    l.value = !0, r.value = null;
    try {
      let I;
      return So() || (I = await u(
        `/v2/comfygit/workflow/${A}/analyze`,
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
  async function m(A, I, P, M) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!So()) {
        const j = Object.fromEntries(I), E = Object.fromEntries(P), L = M ? Array.from(M) : [];
        O = await u(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
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
      return s.value = O, O;
    } catch (O) {
      const j = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = j, O;
    } finally {
      l.value = !1;
    }
  }
  async function f(A, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return So() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: I })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const M = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = M, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(A, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return So() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: I })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const M = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = M, P;
    } finally {
      l.value = !1;
    }
  }
  const p = Qs({
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
      return So(), await w(A);
    } catch (I) {
      const P = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = P, I;
    }
  }
  async function w(A) {
    var P;
    const I = await u(
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
      const M = new Map(((P = I.failed) == null ? void 0 : P.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < p.nodesToInstall.length; O++) {
        const j = p.nodesToInstall[O], E = M.get(j);
        p.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !E,
          error: E
        });
      }
    }
    return p.nodesInstalled = I.nodes_installed, p.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (p.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function x(A, I, P) {
    _(), p.phase = "resolving", r.value = null;
    const M = Object.fromEntries(I), O = Object.fromEntries(P);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: M,
          model_choices: O
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const E = j.body.getReader(), L = new TextDecoder();
      let Z = "";
      for (; ; ) {
        const { done: Y, value: q } = await E.read();
        if (Y) break;
        Z += L.decode(q, { stream: !0 });
        const te = Z.split(`

`);
        Z = te.pop() || "";
        for (const W of te) {
          if (!W.trim()) continue;
          const Q = W.split(`
`);
          let le = "", Ue = "";
          for (const ne of Q)
            ne.startsWith("event: ") ? le = ne.slice(7) : ne.startsWith("data: ") && (Ue = ne.slice(6));
          if (Ue)
            try {
              const ne = JSON.parse(Ue);
              C(le, ne);
            } catch (ne) {
              console.warn("Failed to parse SSE event:", ne);
            }
        }
      }
    } catch (j) {
      const E = j instanceof Error ? j.message : "Unknown error occurred";
      throw r.value = E, p.error = E, p.phase = "error", j;
    }
  }
  function C(A, I) {
    switch (A) {
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
  function S(A, I) {
    const { addToQueue: P } = zo(), M = I.filter((O) => O.url && O.target_path).map((O) => ({
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
const Fg = { class: "resolution-stepper" }, Bg = { class: "stepper-header" }, Wg = ["onClick"], Gg = {
  key: 0,
  class: "step-icon"
}, jg = {
  key: 1,
  class: "step-number"
}, Hg = { class: "step-label" }, Kg = {
  key: 0,
  class: "step-connector"
}, qg = { class: "stepper-content" }, Yg = /* @__PURE__ */ $e({
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
    return (f, v) => (n(), i("div", Fg, [
      t("div", Bg, [
        (n(!0), i(H, null, we(e.steps, (p, _) => (n(), i("div", {
          key: p.id,
          class: Me(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (h) => m(p.id)
        }, [
          t("div", {
            class: Me(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Gg, "✓")) : (n(), i("span", jg, d(_ + 1), 1))
          ], 2),
          t("div", Hg, d(p.label), 1),
          _ < e.steps.length - 1 ? (n(), i("div", Kg)) : y("", !0)
        ], 10, Wg))), 128))
      ]),
      t("div", qg, [
        ot(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Jg = /* @__PURE__ */ xe(Yg, [["__scopeId", "data-v-2a7b3af8"]]), Qg = /* @__PURE__ */ $e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: Me(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), Zn = /* @__PURE__ */ xe(Qg, [["__scopeId", "data-v-17ec4b80"]]), Xg = { class: "node-info" }, Zg = { class: "node-info-text" }, eh = { class: "item-body" }, th = {
  key: 0,
  class: "resolved-state"
}, sh = {
  key: 1,
  class: "multiple-options"
}, oh = {
  key: 0,
  class: "installed-packs-section"
}, nh = { class: "installed-packs-list" }, ah = ["onClick"], lh = { class: "installed-pack-name" }, ih = { class: "installed-pack-source" }, rh = { class: "options-list" }, uh = ["onClick"], ch = ["name", "value", "checked", "onChange"], dh = { class: "option-content" }, mh = { class: "option-header" }, fh = { class: "option-package-id" }, vh = {
  key: 0,
  class: "option-title"
}, ph = { class: "option-meta" }, gh = {
  key: 0,
  class: "installed-badge"
}, hh = { class: "action-buttons" }, yh = {
  key: 2,
  class: "unresolved"
}, wh = {
  key: 0,
  class: "installed-packs-section"
}, _h = { class: "installed-packs-list" }, kh = ["onClick"], bh = { class: "installed-pack-name" }, $h = { class: "installed-pack-source" }, Ch = {
  key: 1,
  class: "searching-state"
}, xh = { class: "options-list" }, Sh = ["onClick"], Ih = ["name", "value"], Eh = { class: "option-content" }, Th = { class: "option-header" }, Ph = { class: "option-package-id" }, Rh = {
  key: 0,
  class: "option-description"
}, Mh = { class: "option-meta" }, Dh = {
  key: 0,
  class: "installed-badge"
}, Lh = {
  key: 3,
  class: "unresolved-message"
}, Nh = { class: "action-buttons" }, Uh = /* @__PURE__ */ $e({
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
    return (v, p) => (n(), i("div", {
      class: Me(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Xg, [
        t("span", Zg, [
          p[7] || (p[7] = b("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Me(["status-badge", c.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", eh, [
        r.value ? (n(), i("div", th, [
          $(De, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (_) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", sh, [
          u.value.length > 0 ? (n(), i("div", oh, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", nh, [
              (n(!0), i(H, null, we(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", lh, d(_.package_id), 1),
                t("span", ih, d(f(_.source)), 1)
              ], 8, ah))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", rh, [
            (n(!0), i(H, null, we(e.options, (_, h) => (n(), i("label", {
              key: _.package_id,
              class: Me(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => m(h)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => m(h)
              }, null, 40, ch),
              t("div", dh, [
                t("div", mh, [
                  t("span", fh, d(_.package_id), 1),
                  $(Zn, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (n(), i("div", vh, d(_.title), 1)) : y("", !0),
                t("div", ph, [
                  _.is_installed ? (n(), i("span", gh, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, uh))), 128))
          ]),
          t("div", hh, [
            $(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (_) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(De, {
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
        ])) : (n(), i("div", yh, [
          u.value.length > 0 ? (n(), i("div", wh, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", _h, [
              (n(!0), i(H, null, we(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", bh, d(_.package_id), 1),
                t("span", $h, d(f(_.source)), 1)
              ], 8, kh))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", Ch, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", xh, [
              (n(!0), i(H, null, we(e.searchResults.slice(0, 5), (_, h) => (n(), i("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", _)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, Ih),
                t("div", Eh, [
                  t("div", Th, [
                    t("span", Ph, d(_.package_id), 1),
                    $(Zn, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (n(), i("div", Rh, d(l(_.description)), 1)) : y("", !0),
                  t("div", Mh, [
                    _.is_installed ? (n(), i("span", Dh, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Sh))), 128))
            ])
          ], 64)) : (n(), i("div", Lh, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Nh, [
            $(De, {
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
            $(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(De, {
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
}), Oh = /* @__PURE__ */ xe(Uh, [["__scopeId", "data-v-fb0bbf03"]]), Ah = { class: "item-navigator" }, zh = { class: "nav-item-info" }, Vh = ["title"], Fh = { class: "nav-controls" }, Bh = { class: "nav-arrows" }, Wh = ["disabled"], Gh = ["disabled"], jh = { class: "nav-position" }, Hh = /* @__PURE__ */ $e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Ah, [
      t("div", zh, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, d(e.itemName), 9, Vh)
      ]),
      t("div", Fh, [
        t("div", Bh, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Wh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Gh)
        ]),
        t("span", jh, d(e.currentIndex + 1) + "/" + d(e.totalItems), 1)
      ])
    ]));
  }
}), jr = /* @__PURE__ */ xe(Hh, [["__scopeId", "data-v-74af7920"]]), Kh = { class: "node-resolution-step" }, qh = {
  key: 0,
  class: "auto-resolved-section"
}, Yh = { class: "section-header" }, Jh = { class: "stat-badge" }, Qh = { class: "resolved-packages-list" }, Xh = { class: "package-info" }, Zh = { class: "package-id" }, ey = { class: "node-count" }, ty = { class: "package-actions" }, sy = {
  key: 0,
  class: "status-badge install"
}, oy = {
  key: 1,
  class: "status-badge skip"
}, ny = ["onClick"], ay = {
  key: 1,
  class: "section-divider"
}, ly = { class: "step-header" }, iy = { class: "stat-badge" }, ry = {
  key: 1,
  class: "step-body"
}, uy = {
  key: 3,
  class: "empty-state"
}, cy = { class: "node-modal-body" }, dy = { class: "node-search-results-container" }, my = {
  key: 0,
  class: "node-search-results"
}, fy = ["onClick"], vy = { class: "node-result-header" }, py = { class: "node-result-package-id" }, gy = {
  key: 0,
  class: "node-result-description"
}, hy = {
  key: 1,
  class: "node-empty-state"
}, yy = {
  key: 2,
  class: "node-empty-state"
}, wy = {
  key: 3,
  class: "node-empty-state"
}, _y = { class: "node-manual-entry-modal" }, ky = { class: "node-modal-body" }, by = { class: "node-modal-actions" }, $y = /* @__PURE__ */ $e({
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
      w.value && he(), w.value = !1;
    }
    const C = U(() => o.nodes[r.value]), S = U(() => o.nodes.filter((B) => o.nodeChoices.has(B.node_type)).length), A = U(() => C.value ? _.value.get(C.value.node_type) || [] : []), I = U(() => C.value ? h.value.has(C.value.node_type) : !1);
    St(C, async (B) => {
      var N;
      B && ((N = B.options) != null && N.length || _.value.has(B.node_type) || h.value.has(B.node_type) || o.nodeChoices.has(B.node_type) || await P(B.node_type));
    }, { immediate: !0 });
    async function P(B) {
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
    function j(B) {
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
    function Z(B) {
      B >= 0 && B < o.nodes.length && (r.value = B);
    }
    function Y() {
      var B;
      for (let N = r.value + 1; N < o.nodes.length; N++) {
        const re = o.nodes[N];
        if (!((B = o.nodeChoices) != null && B.has(re.node_type))) {
          Z(N);
          return;
        }
      }
    }
    function q() {
      C.value && (a("mark-optional", C.value.node_type), Rt(() => Y()));
    }
    function te() {
      C.value && (a("skip", C.value.node_type), Rt(() => Y()));
    }
    function W(B) {
      C.value && (a("option-selected", C.value.node_type, B), Rt(() => Y()));
    }
    function Q() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function le() {
      C.value && (m.value = C.value.node_type, v.value = A.value, u.value = !0, be(m.value));
    }
    function Ue() {
      f.value = "", c.value = !0;
    }
    function ne(B) {
      C.value && (a("manual-entry", C.value.node_type, B), Rt(() => Y()));
    }
    function he() {
      u.value = !1, m.value = "", v.value = [];
    }
    function ce() {
      c.value = !1, f.value = "";
    }
    let Ae = null;
    function Ce() {
      Ae && clearTimeout(Ae), Ae = setTimeout(() => {
        be(m.value);
      }, 300);
    }
    async function be(B) {
      if (!B.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(B, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function ue(B) {
      C.value && (a("manual-entry", C.value.node_type, B.package_id), he(), Rt(() => Y()));
    }
    function F(B) {
      C.value && (a("manual-entry", C.value.node_type, B.package_id), Rt(() => Y()));
    }
    function me() {
      !C.value || !f.value.trim() || (a("manual-entry", C.value.node_type, f.value.trim()), ce(), Rt(() => Y()));
    }
    return (B, N) => {
      var re, Ve;
      return n(), i("div", Kh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", qh, [
          t("div", Yh, [
            N[6] || (N[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Jh, d(M.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Qh, [
            (n(!0), i(H, null, we(e.autoResolvedPackages, (ze) => (n(), i("div", {
              key: ze.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Xh, [
                t("code", Zh, d(ze.package_id), 1),
                t("span", ey, d(ze.node_types_count) + " node type" + d(ze.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", ty, [
                O(ze.package_id) ? (n(), i("span", oy, " SKIPPED ")) : (n(), i("span", sy, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (V) => j(ze.package_id)
                }, d(O(ze.package_id) ? "Include" : "Skip"), 9, ny)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", ay)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", ly, [
            N[7] || (N[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", iy, d(S.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), D(jr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: N[0] || (N[0] = (ze) => Z(r.value - 1)),
            onNext: N[1] || (N[1] = (ze) => Z(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (n(), i("div", ry, [
            $(Oh, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((re = C.value.options) != null && re.length),
              options: C.value.options,
              choice: (Ve = e.nodeChoices) == null ? void 0 : Ve.get(C.value.node_type),
              status: E.value,
              "status-label": L.value,
              "search-results": A.value,
              "is-searching": I.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: q,
              onSkip: te,
              onManualEntry: Ue,
              onSearch: le,
              onOptionSelected: W,
              onClearChoice: Q,
              onSearchResultSelected: F,
              onInstalledPackSelected: ne
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", uy, [...N[8] || (N[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), D(Ut, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: N[4] || (N[4] = pt((ze) => w.value = !0, ["self"])),
            onMouseup: pt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: N[3] || (N[3] = (ze) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                N[9] || (N[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", cy, [
                $(dt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (ze) => m.value = ze),
                  placeholder: "Search by node type, package name...",
                  onInput: Ce
                }, null, 8, ["modelValue"]),
                t("div", dy, [
                  v.value.length > 0 ? (n(), i("div", my, [
                    (n(!0), i(H, null, we(v.value, (ze) => (n(), i("div", {
                      key: ze.package_id,
                      class: "node-search-result-item",
                      onClick: (V) => ue(ze)
                    }, [
                      t("div", vy, [
                        t("code", py, d(ze.package_id), 1),
                        ze.match_confidence ? (n(), D(Zn, {
                          key: 0,
                          confidence: ze.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ze.description ? (n(), i("div", gy, d(ze.description), 1)) : y("", !0)
                    ], 8, fy))), 128))
                  ])) : p.value ? (n(), i("div", hy, "Searching...")) : m.value ? (n(), i("div", yy, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", wy, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), D(Ut, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pt(ce, ["self"])
          }, [
            t("div", _y, [
              t("div", { class: "node-modal-header" }, [
                N[10] || (N[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              t("div", ky, [
                $(dt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": N[5] || (N[5] = (ze) => f.value = ze),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", by, [
                  $(De, {
                    variant: "secondary",
                    onClick: ce
                  }, {
                    default: g(() => [...N[11] || (N[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(De, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: me
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
}), Cy = /* @__PURE__ */ xe($y, [["__scopeId", "data-v-94c6a438"]]), xy = { class: "node-info" }, Sy = { class: "node-info-text" }, Iy = { class: "item-body" }, Ey = {
  key: 0,
  class: "resolved-state"
}, Ty = {
  key: 1,
  class: "multiple-options"
}, Py = { class: "options-list" }, Ry = ["onClick"], My = ["name", "value", "checked", "onChange"], Dy = { class: "option-content" }, Ly = { class: "option-header" }, Ny = { class: "option-filename" }, Uy = { class: "option-meta" }, Oy = { class: "option-size" }, Ay = { class: "option-category" }, zy = { class: "option-path" }, Vy = { class: "action-buttons" }, Fy = {
  key: 2,
  class: "unresolved"
}, By = { class: "action-buttons" }, Wy = /* @__PURE__ */ $e({
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
      class: Me(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", xy, [
        t("span", Sy, [
          f[7] || (f[7] = b("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Me(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Iy, [
        l.value ? (n(), i("div", Ey, [
          $(De, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: g(() => [...f[8] || (f[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Ty, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Py, [
            (n(!0), i(H, null, we(e.options, (v, p) => (n(), i("label", {
              key: v.model.hash,
              class: Me(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (_) => u(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (_) => u(p)
              }, null, 40, My),
              t("div", Dy, [
                t("div", Ly, [
                  t("span", Ny, d(v.model.filename), 1),
                  $(Zn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Uy, [
                  t("span", Oy, d(c(v.model.size)), 1),
                  t("span", Ay, d(v.model.category), 1)
                ]),
                t("div", zy, d(v.model.relative_path), 1)
              ])
            ], 10, Ry))), 128))
          ]),
          t("div", Vy, [
            $(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(De, {
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
        ])) : (n(), i("div", Fy, [
          f[16] || (f[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", By, [
            $(De, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: g(() => [...f[13] || (f[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[14] || (f[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(De, {
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
}), Gy = /* @__PURE__ */ xe(Wy, [["__scopeId", "data-v-8a82fefa"]]), jy = { class: "model-resolution-step" }, Hy = { class: "step-header" }, Ky = { class: "step-info" }, qy = { class: "step-title" }, Yy = { class: "step-description" }, Jy = { class: "stat-badge" }, Qy = {
  key: 1,
  class: "step-body"
}, Xy = {
  key: 2,
  class: "empty-state"
}, Zy = { class: "model-search-modal" }, e1 = { class: "model-modal-body" }, t1 = {
  key: 0,
  class: "model-search-results"
}, s1 = ["onClick"], o1 = { class: "model-result-header" }, n1 = { class: "model-result-filename" }, a1 = { class: "model-result-meta" }, l1 = { class: "model-result-category" }, i1 = { class: "model-result-size" }, r1 = {
  key: 0,
  class: "model-result-path"
}, u1 = {
  key: 1,
  class: "model-no-results"
}, c1 = {
  key: 2,
  class: "model-searching"
}, d1 = { class: "model-download-url-modal" }, m1 = { class: "model-modal-body" }, f1 = { class: "model-input-group" }, v1 = { class: "model-input-group" }, p1 = { class: "model-modal-actions" }, g1 = /* @__PURE__ */ $e({
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
    function a(ne) {
      var he;
      return ne && ((he = o[ne]) == null ? void 0 : he[0]) || null;
    }
    const l = e, r = s, u = k(0), c = k(!1), m = k(!1), f = k(""), v = k(""), p = k(""), _ = k([]), h = k(!1), w = U(() => l.models[u.value]), x = U(() => l.models.some((ne) => ne.is_download_intent)), C = U(() => l.models.filter(
      (ne) => l.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), S = U(() => {
      var he;
      if (!w.value) return "";
      const ne = a((he = w.value.reference) == null ? void 0 : he.node_type);
      return ne ? `${ne}/${w.value.filename}` : "";
    }), A = U(() => {
      var he;
      if (!w.value) return "not-found";
      const ne = l.modelChoices.get(w.value.filename);
      if (ne)
        switch (ne.action) {
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
      return w.value.is_download_intent ? "download" : (he = w.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), I = U(() => {
      var he, ce;
      if (!w.value) return;
      const ne = l.modelChoices.get(w.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return (he = ne.selected_model) != null && he.filename ? `→ ${ne.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (ce = w.value.options) != null && ce.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function P(ne) {
      ne >= 0 && ne < l.models.length && (u.value = ne);
    }
    function M() {
      var ne;
      for (let he = u.value + 1; he < l.models.length; he++) {
        const ce = l.models[he];
        if (!ce.is_download_intent && !((ne = l.modelChoices) != null && ne.has(ce.filename))) {
          P(he);
          return;
        }
      }
    }
    function O() {
      w.value && (r("mark-optional", w.value.filename), Rt(() => M()));
    }
    function j() {
      w.value && (r("skip", w.value.filename), Rt(() => M()));
    }
    function E(ne) {
      w.value && (r("option-selected", w.value.filename, ne), Rt(() => M()));
    }
    function L() {
      w.value && r("clear-choice", w.value.filename);
    }
    function Z() {
      w.value && (f.value = w.value.filename, c.value = !0);
    }
    function Y() {
      w.value && (v.value = w.value.download_source || "", p.value = w.value.target_path || S.value, m.value = !0);
    }
    function q() {
      c.value = !1, f.value = "", _.value = [];
    }
    function te() {
      m.value = !1, v.value = "", p.value = "";
    }
    function W() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function Q(ne) {
      w.value && (q(), Rt(() => M()));
    }
    function le() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), p.value.trim() || void 0), te(), Rt(() => M()));
    }
    function Ue(ne) {
      if (!ne) return "Unknown";
      const he = ne / (1024 * 1024 * 1024);
      return he >= 1 ? `${he.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, he) => {
      var ce, Ae, Ce;
      return n(), i("div", jy, [
        t("div", Hy, [
          t("div", Ky, [
            t("h3", qy, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Yy, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Jy, d(C.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), D(jr, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: he[0] || (he[0] = (be) => P(u.value - 1)),
          onNext: he[1] || (he[1] = (be) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        w.value ? (n(), i("div", Qy, [
          $(Gy, {
            filename: w.value.filename,
            "node-type": ((ce = w.value.reference) == null ? void 0 : ce.node_type) || "Unknown",
            "has-multiple-options": !!((Ae = w.value.options) != null && Ae.length),
            options: w.value.options,
            choice: (Ce = e.modelChoices) == null ? void 0 : Ce.get(w.value.filename),
            status: A.value,
            "status-label": I.value,
            onMarkOptional: O,
            onSkip: j,
            onDownloadUrl: Y,
            onSearch: Z,
            onOptionSelected: E,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Xy, [...he[5] || (he[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), D(Ut, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pt(q, ["self"])
          }, [
            t("div", Zy, [
              t("div", { class: "model-modal-header" }, [
                he[6] || (he[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              t("div", e1, [
                $(dt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (be) => f.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: W
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", t1, [
                  (n(!0), i(H, null, we(_.value, (be) => (n(), i("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (ue) => Q()
                  }, [
                    t("div", o1, [
                      t("code", n1, d(be.filename), 1)
                    ]),
                    t("div", a1, [
                      t("span", l1, d(be.category), 1),
                      t("span", i1, d(Ue(be.size)), 1)
                    ]),
                    be.relative_path ? (n(), i("div", r1, d(be.relative_path), 1)) : y("", !0)
                  ], 8, s1))), 128))
                ])) : f.value && !h.value ? (n(), i("div", u1, ' No models found matching "' + d(f.value) + '" ', 1)) : y("", !0),
                h.value ? (n(), i("div", c1, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), D(Ut, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pt(te, ["self"])
          }, [
            t("div", d1, [
              t("div", { class: "model-modal-header" }, [
                he[7] || (he[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              t("div", m1, [
                t("div", f1, [
                  he[8] || (he[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(dt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": he[3] || (he[3] = (be) => v.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", v1, [
                  he[9] || (he[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(dt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": he[4] || (he[4] = (be) => p.value = be),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", p1, [
                  $(De, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: g(() => [...he[10] || (he[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: le
                  }, {
                    default: g(() => [...he[11] || (he[11] = [
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
}), h1 = /* @__PURE__ */ xe(g1, [["__scopeId", "data-v-5c700bfa"]]), y1 = { class: "applying-step" }, w1 = {
  key: 0,
  class: "phase-content"
}, _1 = {
  key: 1,
  class: "phase-content"
}, k1 = { class: "phase-description" }, b1 = { class: "overall-progress" }, $1 = { class: "progress-bar" }, C1 = { class: "progress-label" }, x1 = { class: "install-list" }, S1 = { class: "install-icon" }, I1 = { key: 0 }, E1 = {
  key: 1,
  class: "spinner"
}, T1 = { key: 2 }, P1 = { key: 3 }, R1 = {
  key: 0,
  class: "install-error"
}, M1 = {
  key: 2,
  class: "phase-content"
}, D1 = { class: "phase-header" }, L1 = { class: "phase-title" }, N1 = { class: "completion-summary" }, U1 = {
  key: 0,
  class: "summary-item success"
}, O1 = { class: "summary-text" }, A1 = {
  key: 1,
  class: "summary-item error"
}, z1 = { class: "summary-text" }, V1 = {
  key: 2,
  class: "failed-list"
}, F1 = { class: "failed-node-id" }, B1 = { class: "failed-error" }, W1 = {
  key: 4,
  class: "summary-item success"
}, G1 = {
  key: 5,
  class: "restart-prompt"
}, j1 = {
  key: 3,
  class: "phase-content error"
}, H1 = { class: "error-message" }, K1 = /* @__PURE__ */ $e({
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
      return n(), i("div", y1, [
        e.progress.phase === "resolving" ? (n(), i("div", w1, [...m[2] || (m[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", _1, [
          m[3] || (m[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", k1, " Installing " + d((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + d(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", b1, [
            t("div", $1, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", C1, d(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + d(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", x1, [
            (n(!0), i(H, null, we(e.progress.nodesToInstall, (h, w) => (n(), i("div", {
              key: h,
              class: Me(["install-item", r(h, w)])
            }, [
              t("span", S1, [
                r(h, w) === "pending" ? (n(), i("span", I1, "○")) : r(h, w) === "installing" ? (n(), i("span", E1, "◌")) : r(h, w) === "complete" ? (n(), i("span", T1, "✓")) : r(h, w) === "failed" ? (n(), i("span", P1, "✗")) : y("", !0)
              ]),
              t("code", null, d(h), 1),
              u(h) ? (n(), i("span", R1, d(u(h)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", M1, [
          t("div", D1, [
            t("span", {
              class: Me(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", L1, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", N1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", U1, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", O1, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", A1, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", z1, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", V1, [
              (n(!0), i(H, null, we(a.value, (h) => (n(), i("div", {
                key: h.node_id,
                class: "failed-item"
              }, [
                t("code", F1, d(h.node_id), 1),
                t("span", B1, d(h.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: m[0] || (m[0] = (h) => c.$emit("retry-failed"))
            }, " Retry Failed (" + d(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", W1, [...m[6] || (m[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            m[8] || (m[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", G1, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", j1, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", H1, d(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), q1 = /* @__PURE__ */ xe(K1, [["__scopeId", "data-v-5efaae58"]]), Y1 = {
  key: 0,
  class: "loading-state"
}, J1 = {
  key: 1,
  class: "wizard-content"
}, Q1 = {
  key: 0,
  class: "step-content"
}, X1 = { class: "analysis-summary" }, Z1 = { class: "analysis-header" }, ew = { class: "summary-description" }, tw = { class: "stats-grid" }, sw = { class: "stat-card" }, ow = { class: "stat-items" }, nw = {
  key: 0,
  class: "stat-item success"
}, aw = { class: "stat-count" }, lw = {
  key: 1,
  class: "stat-item info"
}, iw = { class: "stat-count" }, rw = {
  key: 2,
  class: "stat-item warning"
}, uw = { class: "stat-count" }, cw = {
  key: 3,
  class: "stat-item warning"
}, dw = { class: "stat-count" }, mw = {
  key: 4,
  class: "stat-item warning"
}, fw = { class: "stat-count" }, vw = {
  key: 5,
  class: "stat-item error"
}, pw = { class: "stat-count" }, gw = { class: "stat-card" }, hw = { class: "stat-items" }, yw = { class: "stat-item success" }, ww = { class: "stat-count" }, _w = {
  key: 0,
  class: "stat-item info"
}, kw = { class: "stat-count" }, bw = {
  key: 1,
  class: "stat-item warning"
}, $w = { class: "stat-count" }, Cw = {
  key: 2,
  class: "stat-item warning"
}, xw = { class: "stat-count" }, Sw = {
  key: 3,
  class: "stat-item error"
}, Iw = { class: "stat-count" }, Ew = {
  key: 0,
  class: "status-message warning"
}, Tw = { class: "status-text" }, Pw = {
  key: 1,
  class: "status-message warning"
}, Rw = { class: "status-text" }, Mw = {
  key: 2,
  class: "status-message info"
}, Dw = { class: "status-text" }, Lw = {
  key: 3,
  class: "status-message info"
}, Nw = { class: "status-text" }, Uw = {
  key: 4,
  class: "status-message info"
}, Ow = { class: "status-text" }, Aw = {
  key: 5,
  class: "status-message warning"
}, zw = { class: "status-text" }, Vw = {
  key: 6,
  class: "status-message success"
}, Fw = {
  key: 7,
  class: "category-mismatch-section"
}, Bw = { class: "mismatch-list" }, Ww = { class: "mismatch-path" }, Gw = { class: "mismatch-target" }, jw = {
  key: 8,
  class: "category-mismatch-section"
}, Hw = { class: "mismatch-list" }, Kw = { class: "mismatch-path" }, qw = { class: "status-text" }, Yw = {
  key: 1,
  class: "step-content node-step-content"
}, Jw = {
  key: 0,
  class: "community-node-section"
}, Qw = { class: "community-node-header" }, Xw = { class: "community-node-title" }, Zw = { class: "community-node-list" }, e0 = { class: "community-node-info" }, t0 = { class: "community-node-heading" }, s0 = { class: "item-name" }, o0 = { class: "community-node-package" }, n0 = { class: "community-node-meta" }, a0 = { class: "community-node-guidance" }, l0 = { key: 0 }, i0 = { class: "community-choice-status" }, r0 = { class: "community-node-actions" }, u0 = {
  key: 3,
  class: "step-content"
}, c0 = { class: "review-summary" }, d0 = { class: "review-stats" }, m0 = { class: "review-stat" }, f0 = { class: "stat-value" }, v0 = { class: "review-stat" }, p0 = { class: "stat-value" }, g0 = { class: "review-stat" }, h0 = { class: "stat-value" }, y0 = { class: "review-stat" }, w0 = { class: "stat-value" }, _0 = {
  key: 0,
  class: "review-section"
}, k0 = { class: "section-title" }, b0 = { class: "review-items" }, $0 = { class: "item-name" }, C0 = { class: "item-choice" }, x0 = {
  key: 0,
  class: "choice-badge install"
}, S0 = {
  key: 1,
  class: "choice-badge skip"
}, I0 = {
  key: 1,
  class: "review-section"
}, E0 = { class: "section-title" }, T0 = { class: "review-items" }, P0 = { class: "item-name" }, R0 = { class: "item-choice" }, M0 = {
  key: 0,
  class: "choice-badge install"
}, D0 = {
  key: 1,
  class: "choice-badge optional"
}, L0 = {
  key: 2,
  class: "choice-badge skip"
}, N0 = {
  key: 2,
  class: "review-section"
}, U0 = { class: "section-title" }, O0 = { class: "review-items" }, A0 = { class: "item-name" }, z0 = { class: "item-choice" }, V0 = {
  key: 0,
  class: "choice-badge install"
}, F0 = {
  key: 1,
  class: "choice-badge optional"
}, B0 = {
  key: 2,
  class: "choice-badge skip"
}, W0 = {
  key: 1,
  class: "choice-badge pending"
}, G0 = {
  key: 3,
  class: "review-section"
}, j0 = { class: "section-title" }, H0 = { class: "review-items download-details" }, K0 = { class: "download-info" }, q0 = { class: "item-name" }, Y0 = { class: "download-meta" }, J0 = { class: "download-path" }, Q0 = ["title"], X0 = {
  key: 4,
  class: "review-section"
}, Z0 = { class: "section-title" }, e_ = { class: "review-items" }, t_ = { class: "item-name" }, s_ = { class: "item-choice" }, o_ = {
  key: 0,
  class: "choice-badge install"
}, n_ = {
  key: 1,
  class: "choice-badge download"
}, a_ = {
  key: 2,
  class: "choice-badge optional"
}, l_ = {
  key: 3,
  class: "choice-badge skip"
}, i_ = {
  key: 4,
  class: "choice-badge skip"
}, r_ = {
  key: 1,
  class: "choice-badge download"
}, u_ = {
  key: 2,
  class: "choice-badge pending"
}, c_ = {
  key: 5,
  class: "no-choices"
}, d_ = /* @__PURE__ */ $e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: m, resetProgress: f } = Gr(), { loadPendingDownloads: v } = zo(), { openFileLocation: p, queueNodeInstall: _, getNodes: h } = it(), w = k(null), x = k([]), C = k(!1), S = k(!1), A = k(null), I = k("analysis"), P = k([]), M = k(/* @__PURE__ */ new Map()), O = k(/* @__PURE__ */ new Map()), j = k(/* @__PURE__ */ new Set()), E = U(() => {
      const fe = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || Ue.value || ne.value) && fe.push({ id: "nodes", label: "Nodes" }), Q.value && fe.push({ id: "models", label: "Models" }), fe.push({ id: "review", label: "Review" }), I.value === "applying" && fe.push({ id: "applying", label: "Applying" }), fe;
    }), L = U(() => w.value ? w.value.stats.needs_user_input : !1), Z = U(() => w.value ? w.value.nodes.version_gated || [] : []), Y = U(() => w.value ? w.value.nodes.uninstallable || [] : []), q = U(() => Y.value.filter((fe) => {
      var T;
      return !!((T = fe.package) != null && T.package_id);
    })), te = U(() => Z.value.length > 0), W = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), Q = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), le = U(() => w.value ? w.value.stats.download_intents > 0 : !1), Ue = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ne = U(() => q.value.length > 0), he = U(() => w.value ? w.value.nodes.resolved.length : 0), ce = U(() => w.value ? w.value.models.resolved.filter((fe) => fe.has_category_mismatch) : []), Ae = U(() => ce.value.length > 0), Ce = U(() => W.value || Ue.value || ne.value ? "nodes" : Q.value ? "models" : "review"), be = U(() => {
      if (!w.value) return [];
      const fe = w.value.nodes.resolved.filter((R) => !R.is_installed), T = /* @__PURE__ */ new Set();
      return fe.filter((R) => T.has(R.package.package_id) ? !1 : (T.add(R.package.package_id), !0));
    }), ue = U(() => {
      if (!w.value) return [];
      const fe = w.value.nodes.resolved.filter((R) => !R.is_installed), T = /* @__PURE__ */ new Map();
      for (const R of fe) {
        const Le = T.get(R.package.package_id);
        Le ? Le.node_types_count++ : T.set(R.package.package_id, {
          package_id: R.package.package_id,
          title: R.package.title,
          node_types_count: 1
        });
      }
      return Array.from(T.values());
    }), F = U(() => be.value.filter((fe) => !j.value.has(fe.package.package_id))), me = U(() => w.value ? w.value.models.resolved.filter(
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
      })), T = w.value.nodes.ambiguous.map((R) => ({
        node_type: R.reference.node_type,
        has_multiple_options: !0,
        options: R.options.map((Le) => ({
          package_id: Le.package.package_id,
          title: Le.package.title,
          match_confidence: Le.match_confidence,
          match_type: Le.match_type,
          is_installed: Le.is_installed
        }))
      }));
      return [...fe, ...T];
    }), N = U(() => {
      if (!w.value) return [];
      const fe = w.value.models.unresolved.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), T = w.value.models.ambiguous.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        has_multiple_options: !0,
        options: R.options.map((Le) => ({
          model: Le.model,
          match_confidence: Le.match_confidence,
          match_type: Le.match_type,
          has_download_source: Le.has_download_source
        }))
      }));
      return [...fe, ...T];
    }), re = U(() => {
      const fe = N.value, T = me.value.map((R) => ({
        filename: R.filename,
        reference: R.reference,
        is_download_intent: !0,
        resolved_model: R.resolved_model,
        download_source: R.download_source,
        target_path: R.target_path,
        options: void 0
      }));
      return [...fe, ...T];
    }), Ve = U(() => me.value.filter((fe) => {
      const T = O.value.get(fe.filename);
      return T ? T.action === "download" : !0;
    }).map((fe) => ({
      filename: fe.filename,
      url: fe.download_source,
      target_path: fe.target_path
    })));
    function ze(fe, T = 50) {
      return fe.length <= T ? fe : fe.slice(0, T - 3) + "...";
    }
    const V = U(() => {
      let fe = F.value.length;
      for (const T of M.value.values())
        T.action === "install" && fe++;
      for (const T of O.value.values())
        T.action === "select" && fe++;
      return fe;
    }), J = U(() => {
      let fe = 0;
      for (const T of O.value.values())
        T.action === "download" && fe++;
      for (const T of me.value)
        O.value.get(T.filename) || fe++;
      return fe;
    }), ve = U(() => {
      let fe = 0;
      for (const T of M.value.values())
        T.action === "optional" && fe++;
      for (const T of O.value.values())
        T.action === "optional" && fe++;
      return fe;
    }), Ee = U(() => {
      let fe = j.value.size;
      for (const T of M.value.values())
        T.action === "skip" && fe++;
      for (const T of O.value.values())
        T.action === "skip" && fe++;
      for (const T of B.value)
        M.value.has(T.node_type) || fe++;
      for (const T of N.value)
        O.value.has(T.filename) || fe++;
      return fe;
    }), G = U(() => {
      const fe = {};
      if (fe.analysis = { resolved: 1, total: 1 }, W.value || ne.value) {
        const T = B.value.length, R = q.value.length, Le = B.value.filter(
          (xt) => M.value.has(xt.node_type)
        ).length, tt = q.value.filter(
          (xt) => M.value.has(xt.reference.node_type)
        ).length, vt = T + R, st = Le + tt;
        fe.nodes = { resolved: st, total: vt };
      }
      if (Q.value) {
        const T = re.value.length, R = re.value.filter(
          (Le) => O.value.has(Le.filename) || Le.is_download_intent
        ).length;
        fe.models = { resolved: R, total: T };
      }
      if (fe.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const T = m.totalFiles || 1, R = m.completedFiles.length;
        fe.applying = { resolved: R, total: T };
      }
      return fe;
    });
    function z(fe) {
      I.value = fe;
    }
    function ee() {
      const fe = E.value.findIndex((T) => T.id === I.value);
      fe > 0 && (I.value = E.value[fe - 1].id);
    }
    function ae() {
      const fe = E.value.findIndex((T) => T.id === I.value);
      fe < E.value.length - 1 && (I.value = E.value[fe + 1].id);
    }
    function de() {
      for (const fe of q.value) {
        const T = fe.reference.node_type;
        M.value.has(T) || ye(fe, "registry");
      }
    }
    function ie(fe) {
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
    function Ne(fe) {
      return fe.filter((T) => T.installed && T.tracked).filter((T) => T.name !== "comfygit-manager").map((T) => ({
        package_id: T.registry_id || T.name,
        source: T.source
      })).filter((T, R, Le) => Le.findIndex((tt) => tt.package_id === T.package_id) === R).sort((T, R) => {
        const Le = ie(T.source) - ie(R.source);
        return Le !== 0 ? Le : T.package_id.localeCompare(R.package_id);
      });
    }
    async function Pe() {
      C.value = !0, A.value = null;
      try {
        const [fe, T] = await Promise.all([
          l(o.workflowName),
          h()
        ]);
        w.value = fe, x.value = Ne(T.nodes), de();
      } catch (fe) {
        A.value = fe instanceof Error ? fe.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ge() {
      P.value.includes("analysis") || P.value.push("analysis"), W.value || Ue.value || ne.value ? I.value = "nodes" : Q.value ? I.value = "models" : I.value = "review";
    }
    function K(fe) {
      M.value.set(fe, { action: "optional" });
    }
    function Fe(fe) {
      M.value.set(fe, { action: "skip" });
    }
    function Ie(fe, T) {
      var Le;
      const R = B.value.find((tt) => tt.node_type === fe);
      (Le = R == null ? void 0 : R.options) != null && Le[T] && M.value.set(fe, {
        action: "install",
        package_id: R.options[T].package_id
      });
    }
    function Se(fe, T) {
      M.value.set(fe, {
        action: "install",
        package_id: T
      });
    }
    function Oe(fe) {
      M.value.delete(fe);
    }
    function Re(fe) {
      return M.value.get(fe);
    }
    function X(fe) {
      const T = Re(fe);
      return T ? T.action === "optional" ? "Marked optional" : T.action === "skip" ? "Skipped" : T.action === "install" ? T.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ye(fe, T) {
      var tt;
      const R = (tt = fe.package) == null ? void 0 : tt.package_id;
      if (!R) return;
      const Le = {
        action: "install",
        package_id: R,
        version: fe.package.latest_version || null,
        install_source: T
      };
      T === "git" && fe.package.repository && (Le.repository = fe.package.repository), M.value.set(fe.reference.node_type, Le);
    }
    function ke(fe) {
      M.value.set(fe, { action: "optional" });
    }
    function Ke(fe) {
      M.value.set(fe, { action: "skip" });
    }
    function Be(fe) {
      j.value.has(fe) ? j.value.delete(fe) : j.value.add(fe);
    }
    function We(fe) {
      O.value.set(fe, { action: "optional" });
    }
    function et(fe) {
      O.value.set(fe, { action: "skip" });
    }
    function qe(fe, T) {
      var Le;
      const R = N.value.find((tt) => tt.filename === fe);
      (Le = R == null ? void 0 : R.options) != null && Le[T] && O.value.set(fe, {
        action: "select",
        selected_model: R.options[T].model
      });
    }
    function ft(fe, T, R) {
      O.value.set(fe, {
        action: "download",
        url: T,
        target_path: R
      });
    }
    function ut(fe) {
      O.value.delete(fe);
    }
    async function mt(fe) {
      try {
        await p(fe);
      } catch (T) {
        A.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function Pt() {
      var fe;
      S.value = !0, A.value = null, f(), m.phase = "resolving", I.value = "applying";
      try {
        const T = await r(o.workflowName, M.value, O.value, j.value);
        T.models_to_download && T.models_to_download.length > 0 && c(o.workflowName, T.models_to_download);
        const R = q.value.map((st) => {
          const xt = Re(st.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const Et = xt.repository || st.package.repository, Ge = xt.package_id || st.package.package_id;
          return !Et || !Ge ? null : {
            id: Ge,
            repository: Et,
            selectedVersion: xt.version || st.package.latest_version || "latest"
          };
        }).filter((st) => !!st), Le = new Set(R.map((st) => st.id)), tt = [
          ...T.nodes_to_install || [],
          ...F.value.map((st) => st.package.package_id)
        ];
        m.nodesToInstall = [...new Set(tt)].filter((st) => !Le.has(st)), m.nodesToInstall.length > 0 && await u(o.workflowName);
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
        const vt = m.installError || ((fe = m.nodeInstallProgress) == null ? void 0 : fe.completedNodes.some((st) => !st.success));
        !m.needsRestart && !vt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (T) {
        A.value = T instanceof Error ? T.message : "Failed to apply resolution", m.error = A.value, m.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function ts() {
      a("refresh"), a("restart"), a("close");
    }
    async function Ot() {
      var T;
      const fe = ((T = m.nodeInstallProgress) == null ? void 0 : T.completedNodes.filter((R) => !R.success).map((R) => R.node_id)) || [];
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
    return at(Pe), (fe, T) => (n(), D(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: A.value || void 0,
      "fixed-height": !0,
      onClose: T[1] || (T[1] = (R) => a("close"))
    }, {
      body: g(() => [
        C.value && !w.value ? (n(), i("div", Y1, [...T[2] || (T[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", J1, [
          $(Jg, {
            steps: E.value,
            "current-step": I.value,
            "completed-steps": P.value,
            "step-stats": G.value,
            onStepChange: z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (n(), i("div", Q1, [
            t("div", X1, [
              t("div", Z1, [
                T[3] || (T[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", ew, " Found " + d(w.value.stats.total_nodes) + " nodes and " + d(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", tw, [
                t("div", sw, [
                  T[16] || (T[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", ow, [
                    he.value > 0 ? (n(), i("div", nw, [
                      T[4] || (T[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", aw, d(he.value), 1),
                      T[5] || (T[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", lw, [
                      T[6] || (T[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", iw, d(w.value.stats.packages_needing_installation), 1),
                      T[7] || (T[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", rw, [
                      T[8] || (T[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", uw, d(w.value.nodes.ambiguous.length), 1),
                      T[9] || (T[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    Z.value.length > 0 ? (n(), i("div", cw, [
                      T[10] || (T[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", dw, d(Z.value.length), 1),
                      T[11] || (T[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    Y.value.length > 0 ? (n(), i("div", mw, [
                      T[12] || (T[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", fw, d(Y.value.length), 1),
                      T[13] || (T[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", vw, [
                      T[14] || (T[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", pw, d(w.value.nodes.unresolved.length), 1),
                      T[15] || (T[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", gw, [
                  T[27] || (T[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", hw, [
                    t("div", yw, [
                      T[17] || (T[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", ww, d(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      T[18] || (T[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", _w, [
                      T[19] || (T[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", kw, d(w.value.stats.download_intents), 1),
                      T[20] || (T[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Ae.value ? (n(), i("div", bw, [
                      T[21] || (T[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", $w, d(ce.value.length), 1),
                      T[22] || (T[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", Cw, [
                      T[23] || (T[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", xw, d(w.value.models.ambiguous.length), 1),
                      T[24] || (T[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", Sw, [
                      T[25] || (T[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Iw, d(w.value.models.unresolved.length), 1),
                      T[26] || (T[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              L.value ? (n(), i("div", Ew, [
                T[28] || (T[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Tw, d(B.value.length + N.value.length) + " items need your input", 1)
              ])) : te.value ? (n(), i("div", Pw, [
                T[29] || (T[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Rw, d(Z.value.length) + " node type" + d(Z.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : Y.value.length > 0 ? (n(), i("div", Mw, [
                T[30] || (T[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Dw, d(Y.value.length) + " community-mapped node type" + d(Y.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ue.value ? (n(), i("div", Lw, [
                T[31] || (T[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Nw, d(w.value.stats.packages_needing_installation) + " package" + d(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(w.value.stats.nodes_needing_installation) + " node type" + d(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(le.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : le.value ? (n(), i("div", Uw, [
                T[32] || (T[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Ow, d(w.value.stats.download_intents) + " model" + d(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Ae.value ? (n(), i("div", Aw, [
                T[33] || (T[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", zw, d(ce.value.length) + " model" + d(ce.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", Vw, [...T[34] || (T[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Ae.value ? (n(), i("div", Fw, [
                T[37] || (T[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", Bw, [
                  (n(!0), i(H, null, we(ce.value, (R) => {
                    var Le, tt;
                    return n(), i("div", {
                      key: R.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", Ww, d(R.actual_category) + "/" + d((Le = R.model) == null ? void 0 : Le.filename), 1),
                      T[36] || (T[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", Gw, d((tt = R.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      R.file_path ? (n(), D(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => mt(R.file_path)
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
              te.value ? (n(), i("div", jw, [
                T[38] || (T[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", Hw, [
                  (n(!0), i(H, null, we(Z.value, (R) => {
                    var Le;
                    return n(), i("div", {
                      key: `vg-${R.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", Kw, d(R.reference.node_type), 1),
                      t("span", qw, d(R.guidance || ((Le = w.value.node_guidance) == null ? void 0 : Le[R.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "nodes" ? (n(), i("div", Yw, [
            $(Cy, {
              nodes: B.value,
              "node-choices": M.value,
              "auto-resolved-packages": ue.value,
              "skipped-packages": j.value,
              "installed-node-packs": x.value,
              onMarkOptional: K,
              onSkip: Fe,
              onOptionSelected: Ie,
              onManualEntry: Se,
              onClearChoice: Oe,
              onPackageSkip: Be
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            q.value.length > 0 ? (n(), i("div", Jw, [
              t("div", Qw, [
                t("h4", Xw, "Community-Mapped Packages (" + d(q.value.length) + ")", 1),
                T[39] || (T[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", Zw, [
                (n(!0), i(H, null, we(q.value, (R) => (n(), i("div", {
                  key: `community-${R.reference.node_type}-${R.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", e0, [
                    t("div", t0, [
                      t("code", s0, d(R.reference.node_type), 1),
                      t("span", o0, d(R.package.title || R.package.package_id), 1)
                    ]),
                    t("div", n0, d(R.package.package_id), 1),
                    t("div", a0, [
                      T[40] || (T[40] = b(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      R.guidance ? (n(), i("span", l0, d(R.guidance), 1)) : y("", !0)
                    ]),
                    t("div", i0, d(X(R.reference.node_type)), 1)
                  ]),
                  t("div", r0, [
                    $(De, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !R.package.package_id,
                      onClick: (Le) => ye(R, "registry")
                    }, {
                      default: g(() => [...T[41] || (T[41] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    R.package.repository ? (n(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !R.package.package_id,
                      onClick: (Le) => ye(R, "git")
                    }, {
                      default: g(() => [...T[42] || (T[42] = [
                        b(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    $(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Le) => ke(R.reference.node_type)
                    }, {
                      default: g(() => [...T[43] || (T[43] = [
                        b(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Le) => Ke(R.reference.node_type)
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
          I.value === "models" ? (n(), D(h1, {
            key: 2,
            models: re.value,
            "model-choices": O.value,
            onMarkOptional: We,
            onSkip: et,
            onOptionSelected: qe,
            onDownloadUrl: ft,
            onClearChoice: ut
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          I.value === "review" ? (n(), i("div", u0, [
            t("div", c0, [
              T[50] || (T[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", d0, [
                t("div", m0, [
                  t("span", f0, d(V.value), 1),
                  T[45] || (T[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", v0, [
                  t("span", p0, d(J.value), 1),
                  T[46] || (T[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", g0, [
                  t("span", h0, d(ve.value), 1),
                  T[47] || (T[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", y0, [
                  t("span", w0, d(Ee.value), 1),
                  T[48] || (T[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ue.value.length > 0 ? (n(), i("div", _0, [
                t("h4", k0, "Node Packages (" + d(ue.value.length) + ")", 1),
                t("div", b0, [
                  (n(!0), i(H, null, we(ue.value, (R) => (n(), i("div", {
                    key: R.package_id,
                    class: "review-item"
                  }, [
                    t("code", $0, d(R.package_id), 1),
                    t("div", C0, [
                      j.value.has(R.package_id) ? (n(), i("span", S0, "Skipped")) : (n(), i("span", x0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              q.value.length > 0 ? (n(), i("div", I0, [
                t("h4", E0, "Community-Mapped Packages (" + d(q.value.length) + ")", 1),
                t("div", T0, [
                  (n(!0), i(H, null, we(q.value, (R) => {
                    var Le, tt, vt;
                    return n(), i("div", {
                      key: `review-community-${R.reference.node_type}-${R.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", P0, d(R.reference.node_type), 1),
                      t("div", R0, [
                        ((Le = Re(R.reference.node_type)) == null ? void 0 : Le.action) === "install" ? (n(), i("span", M0, d(((tt = Re(R.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((vt = Re(R.reference.node_type)) == null ? void 0 : vt.action) === "optional" ? (n(), i("span", D0, " Optional ")) : (n(), i("span", L0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              B.value.length > 0 ? (n(), i("div", N0, [
                t("h4", U0, "Node Choices (" + d(B.value.length) + ")", 1),
                t("div", O0, [
                  (n(!0), i(H, null, we(B.value, (R) => {
                    var Le, tt, vt, st;
                    return n(), i("div", {
                      key: R.node_type,
                      class: "review-item"
                    }, [
                      t("code", A0, d(R.node_type), 1),
                      t("div", z0, [
                        M.value.has(R.node_type) ? (n(), i(H, { key: 0 }, [
                          ((Le = M.value.get(R.node_type)) == null ? void 0 : Le.action) === "install" ? (n(), i("span", V0, d((tt = M.value.get(R.node_type)) == null ? void 0 : tt.package_id), 1)) : ((vt = M.value.get(R.node_type)) == null ? void 0 : vt.action) === "optional" ? (n(), i("span", F0, " Optional ")) : ((st = M.value.get(R.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", B0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", W0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ve.value.length > 0 ? (n(), i("div", G0, [
                t("h4", j0, "Models to Download (" + d(Ve.value.length) + ")", 1),
                t("div", H0, [
                  (n(!0), i(H, null, we(Ve.value, (R) => (n(), i("div", {
                    key: R.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", K0, [
                      t("code", q0, d(R.filename), 1),
                      t("div", Y0, [
                        t("span", J0, "→ " + d(R.target_path), 1),
                        R.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: R.url
                        }, d(ze(R.url)), 9, Q0)) : y("", !0)
                      ])
                    ]),
                    T[49] || (T[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              re.value.length > 0 ? (n(), i("div", X0, [
                t("h4", Z0, "Models (" + d(re.value.length) + ")", 1),
                t("div", e_, [
                  (n(!0), i(H, null, we(re.value, (R) => {
                    var Le, tt, vt, st, xt, Et, Ge;
                    return n(), i("div", {
                      key: R.filename,
                      class: "review-item"
                    }, [
                      t("code", t_, d(R.filename), 1),
                      t("div", s_, [
                        O.value.has(R.filename) ? (n(), i(H, { key: 0 }, [
                          ((Le = O.value.get(R.filename)) == null ? void 0 : Le.action) === "select" ? (n(), i("span", o_, d((vt = (tt = O.value.get(R.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : vt.filename), 1)) : ((st = O.value.get(R.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", n_, " Download ")) : ((xt = O.value.get(R.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", a_, " Optional ")) : ((Et = O.value.get(R.filename)) == null ? void 0 : Et.action) === "skip" ? (n(), i("span", l_, " Skip ")) : ((Ge = O.value.get(R.filename)) == null ? void 0 : Ge.action) === "cancel_download" ? (n(), i("span", i_, " Cancel Download ")) : y("", !0)
                        ], 64)) : R.is_download_intent ? (n(), i("span", r_, " Pending Download ")) : (n(), i("span", u_, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              be.value.length === 0 && q.value.length === 0 && B.value.length === 0 && re.value.length === 0 ? (n(), i("div", c_, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "applying" ? (n(), D(q1, {
            key: 4,
            progress: Xe(m),
            onRestart: ts,
            onRetryFailed: Ot
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        I.value !== "analysis" && I.value !== "applying" ? (n(), D(De, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: ee
        }, {
          default: g(() => [...T[51] || (T[51] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T[54] || (T[54] = t("div", { class: "footer-spacer" }, null, -1)),
        I.value !== "applying" || Xe(m).phase === "complete" || Xe(m).phase === "error" ? (n(), D(De, {
          key: 1,
          variant: "secondary",
          onClick: T[0] || (T[0] = (R) => a("close"))
        }, {
          default: g(() => [
            b(d(Xe(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "analysis" ? (n(), D(De, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ge
        }, {
          default: g(() => [
            b(d(Ce.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        I.value === "nodes" ? (n(), D(De, {
          key: 3,
          variant: "primary",
          onClick: ae
        }, {
          default: g(() => [
            b(d(Q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "models" ? (n(), D(De, {
          key: 4,
          variant: "primary",
          onClick: ae
        }, {
          default: g(() => [...T[52] || (T[52] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        I.value === "review" ? (n(), D(De, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: Pt
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
}), m_ = /* @__PURE__ */ xe(d_, [["__scopeId", "data-v-49848358"]]), f_ = { class: "search-input-wrapper" }, v_ = ["value", "placeholder"], p_ = /* @__PURE__ */ $e({
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
    }), (m, f) => (n(), i("div", f_, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: as(c, ["escape"])
      }, null, 40, v_),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), g_ = /* @__PURE__ */ xe(p_, [["__scopeId", "data-v-266f857a"]]), h_ = { class: "search-bar" }, y_ = /* @__PURE__ */ $e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", h_, [
      $(g_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Vo = /* @__PURE__ */ xe(y_, [["__scopeId", "data-v-3d51bbfd"]]), w_ = { class: "section-group" }, __ = {
  key: 0,
  class: "section-content"
}, k_ = /* @__PURE__ */ $e({
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
    return (u, c) => (n(), i("section", w_, [
      $(Xt, {
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
      !e.collapsible || l.value ? (n(), i("div", __, [
        ot(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), wt = /* @__PURE__ */ xe(k_, [["__scopeId", "data-v-c48e33ed"]]), b_ = { class: "item-header" }, $_ = {
  key: 0,
  class: "item-icon"
}, C_ = { class: "item-info" }, x_ = {
  key: 0,
  class: "item-title"
}, S_ = {
  key: 1,
  class: "item-subtitle"
}, I_ = {
  key: 0,
  class: "item-details"
}, E_ = {
  key: 1,
  class: "item-actions"
}, T_ = /* @__PURE__ */ $e({
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
      class: Me(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      t("div", b_, [
        l.$slots.icon ? (n(), i("span", $_, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", C_, [
          l.$slots.title ? (n(), i("div", x_, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", S_, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", I_, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", E_, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ xe(T_, [["__scopeId", "data-v-cc435e0e"]]), P_ = { class: "loading-state" }, R_ = { class: "loading-message" }, M_ = /* @__PURE__ */ $e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", P_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", R_, d(e.message), 1)
    ]));
  }
}), zs = /* @__PURE__ */ xe(M_, [["__scopeId", "data-v-ad8436c9"]]), D_ = { class: "error-state" }, L_ = { class: "error-message" }, N_ = /* @__PURE__ */ $e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", D_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", L_, d(e.message), 1),
      e.retry ? (n(), D(_e, {
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
}), Vs = /* @__PURE__ */ xe(N_, [["__scopeId", "data-v-5397be48"]]), U_ = /* @__PURE__ */ $e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = it(), r = k([]), u = k(!1), c = k(null), m = k(""), f = k(!0), v = k(!1), p = k(!1), _ = k(!1), h = k(!1), w = k(null), x = U(
      () => r.value.filter((Ce) => Ce.status === "broken")
    ), C = U(
      () => r.value.filter((Ce) => Ce.status === "new")
    ), S = U(
      () => r.value.filter((Ce) => Ce.status === "modified")
    ), A = U(
      () => r.value.filter((Ce) => Ce.status === "synced")
    ), I = U(() => {
      if (!m.value.trim()) return r.value;
      const Ce = m.value.toLowerCase();
      return r.value.filter((be) => be.name.toLowerCase().includes(Ce));
    }), P = U(
      () => x.value.filter(
        (Ce) => !m.value.trim() || Ce.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), M = U(
      () => C.value.filter(
        (Ce) => !m.value.trim() || Ce.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), O = U(
      () => S.value.filter(
        (Ce) => !m.value.trim() || Ce.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), j = U(
      () => A.value.filter(
        (Ce) => !m.value.trim() || Ce.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), E = U(
      () => v.value ? j.value : j.value.slice(0, 5)
    );
    async function L(Ce = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(Ce);
      } catch (be) {
        c.value = be instanceof Error ? be.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: L });
    function Z(Ce) {
      w.value = Ce, p.value = !0;
    }
    function Y(Ce) {
      w.value = Ce, _.value = !0;
    }
    function q(Ce) {
      w.value = Ce, h.value = !0;
    }
    function te(Ce) {
      var F;
      const ue = (F = Ce.detail) == null ? void 0 : F.workflowName;
      ue && q(ue);
    }
    function W() {
      a("refresh");
    }
    async function Q() {
      _.value = !1, await L(!0);
    }
    async function le() {
      await L(!0), a("refresh");
    }
    async function Ue() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ne(Ce) {
      return Ce.replace(/uninstallable node mappings?/gi, (be) => be.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function he(Ce) {
      if (Ce.issue_summary && Ce.issue_summary.trim().length > 0)
        return ne(Ce.issue_summary);
      const be = [];
      return Ce.version_gated_count && Ce.version_gated_count > 0 && be.push(`${Ce.version_gated_count} node${Ce.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), Ce.uninstallable_count && Ce.uninstallable_count > 0 && be.push(`${Ce.uninstallable_count} node${Ce.uninstallable_count > 1 ? "s" : ""} need community packages`), Ce.missing_nodes > 0 && be.push(`${Ce.missing_nodes} missing node${Ce.missing_nodes > 1 ? "s" : ""}`), Ce.missing_models > 0 && be.push(`${Ce.missing_models} missing model${Ce.missing_models > 1 ? "s" : ""}`), Ce.models_with_category_mismatch && Ce.models_with_category_mismatch > 0 && be.push(`${Ce.models_with_category_mismatch} model${Ce.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), Ce.pending_downloads && Ce.pending_downloads > 0 && be.push(`${Ce.pending_downloads} pending download${Ce.pending_downloads > 1 ? "s" : ""}`), be.length > 0 ? be.join(", ") : "Has issues";
    }
    function ce(Ce) {
      const be = Ce.sync_state === "new" ? "New" : Ce.sync_state === "modified" ? "Modified" : Ce.sync_state === "synced" ? "Synced" : Ce.sync_state, ue = Ae(Ce);
      return Ce.has_path_sync_issues && Ce.models_needing_path_sync && Ce.models_needing_path_sync > 0 ? `${Ce.models_needing_path_sync} model path${Ce.models_needing_path_sync > 1 ? "s" : ""} need${Ce.models_needing_path_sync === 1 ? "s" : ""} sync · ${ue}` : `${be || "Unknown"} · ${ue}`;
    }
    function Ae(Ce) {
      const be = Ce.contract_summary;
      return !be || !be.has_contract ? "No contract" : be.status === "incomplete" ? `${be.input_count} in / ${be.output_count} out · incomplete` : `${be.input_count} in / ${be.output_count} out`;
    }
    return at(() => {
      L(), window.addEventListener("comfygit:open-workflow-contract", te);
    }), da(() => {
      window.removeEventListener("comfygit:open-workflow-contract", te);
    }), (Ce, be) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          $(Vo, {
            modelValue: m.value,
            "onUpdate:modelValue": be[0] || (be[0] = (ue) => m.value = ue),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), D(zs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), D(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            P.value.length ? (n(), D(wt, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(P.value, (ue) => (n(), D(Lt, {
                  key: ue.name,
                  status: "broken"
                }, {
                  icon: g(() => [...be[8] || (be[8] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(he(ue)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => Y(ue.name)
                    }, {
                      default: g(() => [...be[9] || (be[9] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => q(ue.name)
                    }, {
                      default: g(() => [...be[10] || (be[10] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => Z(ue.name)
                    }, {
                      default: g(() => [...be[11] || (be[11] = [
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
            M.value.length ? (n(), D(wt, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(M.value, (ue) => (n(), D(Lt, {
                  key: ue.name,
                  status: ue.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    b(d(ue.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    b(d(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ce(ue)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => q(ue.name)
                    }, {
                      default: g(() => [...be[12] || (be[12] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => Z(ue.name)
                    }, {
                      default: g(() => [...be[13] || (be[13] = [
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
            O.value.length ? (n(), D(wt, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(O.value, (ue) => (n(), D(Lt, {
                  key: ue.name,
                  status: ue.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...be[14] || (be[14] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(d(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ce(ue)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => q(ue.name)
                    }, {
                      default: g(() => [...be[15] || (be[15] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => Z(ue.name)
                    }, {
                      default: g(() => [...be[16] || (be[16] = [
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
            j.value.length ? (n(), D(wt, {
              key: 3,
              title: "SYNCED",
              count: j.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: be[2] || (be[2] = (ue) => f.value = ue)
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(E.value, (ue) => (n(), D(Lt, {
                  key: ue.name,
                  status: ue.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    b(d(ue.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    b(d(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ce(ue)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => q(ue.name)
                    }, {
                      default: g(() => [...be[17] || (be[17] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => Z(ue.name)
                    }, {
                      default: g(() => [...be[18] || (be[18] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && j.value.length > 5 ? (n(), D(_e, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: be[1] || (be[1] = (ue) => v.value = !0),
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
            I.value.length ? y("", !0) : (n(), D(gs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && w.value ? (n(), D(sg, {
        key: 0,
        "workflow-name": w.value,
        onClose: be[3] || (be[3] = (ue) => p.value = !1),
        onResolve: be[4] || (be[4] = (ue) => Y(w.value)),
        onRefresh: be[5] || (be[5] = (ue) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      _.value && w.value ? (n(), D(m_, {
        key: 1,
        "workflow-name": w.value,
        onClose: Q,
        onInstall: W,
        onRefresh: be[6] || (be[6] = (ue) => a("refresh")),
        onRestart: Ue
      }, null, 8, ["workflow-name"])) : y("", !0),
      h.value && w.value ? (n(), D(Ag, {
        key: 2,
        "workflow-name": w.value,
        onClose: be[7] || (be[7] = (ue) => h.value = !1),
        onRefresh: le
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), O_ = /* @__PURE__ */ xe(U_, [["__scopeId", "data-v-894ef6ed"]]), A_ = /* @__PURE__ */ $e({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Me(["summary-bar", e.variant])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Cn = /* @__PURE__ */ xe(A_, [["__scopeId", "data-v-ccb7816e"]]), z_ = {
  key: 0,
  class: "model-details"
}, V_ = { class: "detail-section" }, F_ = { class: "detail-row" }, B_ = { class: "detail-value mono" }, W_ = { class: "detail-row" }, G_ = { class: "detail-value mono" }, j_ = { class: "detail-row" }, H_ = { class: "detail-value mono" }, K_ = { class: "detail-row" }, q_ = { class: "detail-value" }, Y_ = { class: "detail-row" }, J_ = { class: "detail-value" }, Q_ = { class: "detail-row" }, X_ = { class: "detail-value" }, Z_ = { class: "detail-section" }, ek = { class: "section-header" }, tk = {
  key: 0,
  class: "locations-list"
}, sk = { class: "location-path mono" }, ok = {
  key: 0,
  class: "location-modified"
}, nk = ["onClick"], ak = {
  key: 1,
  class: "empty-state"
}, lk = { class: "detail-section" }, ik = { class: "section-header" }, rk = {
  key: 0,
  class: "sources-list"
}, uk = { class: "source-type" }, ck = ["href"], dk = ["disabled", "onClick"], mk = {
  key: 1,
  class: "empty-state"
}, fk = { class: "add-source-form" }, vk = ["disabled"], pk = {
  key: 2,
  class: "source-error"
}, gk = {
  key: 3,
  class: "source-success"
}, hk = /* @__PURE__ */ $e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = it(), c = k(null), m = k(!0), f = k(null), v = k(""), p = k(!1), _ = k(null), h = k(null), w = k(null), x = k(null);
    let C = null;
    function S(E, L = "success", Z = 2e3) {
      C && clearTimeout(C), x.value = { message: E, type: L }, C = setTimeout(() => {
        x.value = null;
      }, Z);
    }
    function A(E) {
      if (!E) return "Unknown";
      const L = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return E >= L ? `${(E / L).toFixed(1)} GB` : E >= Z ? `${(E / Z).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
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
    async function O(E) {
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
      var Z;
      return n(), i(H, null, [
        $(Ct, {
          title: `Model Details: ${((Z = c.value) == null ? void 0 : Z.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: L[5] || (L[5] = (Y) => E.$emit("close"))
        }, {
          body: g(() => {
            var Y, q, te, W;
            return [
              c.value ? (n(), i("div", z_, [
                t("section", V_, [
                  t("div", F_, [
                    L[6] || (L[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", B_, d(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (Q) => I(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", W_, [
                    L[7] || (L[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", G_, d(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (Q) => I(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", j_, [
                    L[8] || (L[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", H_, d(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (Q) => I(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", K_, [
                    L[9] || (L[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", q_, d(A(c.value.size)), 1)
                  ]),
                  t("div", Y_, [
                    L[10] || (L[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", J_, d(c.value.category), 1)
                  ]),
                  t("div", Q_, [
                    L[11] || (L[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", X_, d(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", Z_, [
                  t("h4", ek, "Locations (" + d(((Y = c.value.locations) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (q = c.value.locations) != null && q.length ? (n(), i("div", tk, [
                    (n(!0), i(H, null, we(c.value.locations, (Q, le) => (n(), i("div", {
                      key: le,
                      class: "location-item"
                    }, [
                      t("span", sk, d(Q.path), 1),
                      Q.modified ? (n(), i("span", ok, "Modified: " + d(Q.modified), 1)) : y("", !0),
                      Q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ue) => P(Q.path)
                      }, " Open File Location ", 8, nk)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", ak, "No locations found"))
                ]),
                t("section", lk, [
                  t("h4", ik, "Download Sources (" + d(((te = c.value.sources) == null ? void 0 : te.length) || 0) + ")", 1),
                  (W = c.value.sources) != null && W.length ? (n(), i("div", rk, [
                    (n(!0), i(H, null, we(c.value.sources, (Q, le) => (n(), i("div", {
                      key: le,
                      class: "source-item"
                    }, [
                      t("span", uk, d(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(Q.url), 9, ck),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: _.value === Q.url,
                        onClick: (Ue) => O(Q.url)
                      }, d(_.value === Q.url ? "..." : "×"), 9, dk)
                    ]))), 128))
                  ])) : (n(), i("div", mk, " No download sources configured ")),
                  t("div", fk, [
                    nt(t("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (Q) => v.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [es, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || p.value,
                      onClick: M
                    }, d(p.value ? "Adding..." : "Add Source"), 9, vk)
                  ]),
                  h.value ? (n(), i("p", pk, d(h.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", gk, d(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (Y) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), D(Ut, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Me(["toast", x.value.type])
          }, d(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), wl = /* @__PURE__ */ xe(hk, [["__scopeId", "data-v-f15cbb56"]]), yk = ["disabled"], wk = { class: "dropdown-value" }, _k = ["onClick"], kk = {
  key: 0,
  class: "dropdown-error"
}, bk = /* @__PURE__ */ $e({
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
    const v = U(() => {
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
      const S = r.value.getBoundingClientRect(), A = window.innerHeight, I = A - S.bottom, P = S.top, M = Math.min(300, o.options.length * 36 + 8), O = I < M && P > I;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${A - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
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
    return at(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Xs(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, A) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Me(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", wk, d(v.value), 1),
        A[0] || (A[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, yk),
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
          (n(!0), i(H, null, we(e.options, (I) => (n(), i("div", {
            key: m(I),
            class: Me(["dropdown-option", { selected: m(I) === e.modelValue }]),
            onClick: (P) => h(I)
          }, d(f(I)), 11, _k))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", kk, d(e.error), 1)) : y("", !0)
    ], 512));
  }
}), $k = /* @__PURE__ */ xe(bk, [["__scopeId", "data-v-857e085b"]]);
function Ck(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function xk(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!Ck(o.hostname)) return { kind: "unknown" };
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
function Sk(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ik(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${Sk(o)}`;
}
const Ek = { class: "hf-file-browser" }, Tk = { class: "browser-header" }, Pk = { class: "repo-info" }, Rk = { class: "repo-id" }, Mk = {
  key: 0,
  class: "revision-pill"
}, Dk = {
  key: 0,
  class: "loading-state"
}, Lk = {
  key: 1,
  class: "error-state"
}, Nk = { class: "toolbar" }, Uk = { class: "toolbar-actions" }, Ok = { class: "file-list-container" }, Ak = {
  key: 0,
  class: "file-list-header"
}, zk = ["checked", "indeterminate"], Vk = { class: "sort-indicator" }, Fk = { class: "sort-indicator" }, Bk = {
  key: 1,
  class: "empty-state"
}, Wk = {
  key: 2,
  class: "file-list"
}, Gk = ["onClick"], jk = ["checked", "onChange"], Hk = { class: "file-path" }, Kk = { class: "file-size" }, qk = { class: "destination-section" }, Yk = { class: "destination-row" }, Jk = {
  key: 0,
  class: "path-separator"
}, Qk = { class: "action-bar" }, Xk = { class: "summary-info" }, Zk = { class: "summary-count" }, eb = { class: "summary-size" }, tb = /* @__PURE__ */ $e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = it(), u = k([]), c = k(/* @__PURE__ */ new Set()), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k("name"), h = k(!0), w = k(""), x = k(""), C = k(""), S = k([]), A = k(!1);
    let I = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, M = U(() => {
      let F = u.value;
      if (o.initialPath) {
        const me = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        F = F.filter((B) => B.path.startsWith(me) || B.path === o.initialPath);
      }
      if (p.value && (F = F.filter((me) => me.is_model_file)), v.value.trim()) {
        const me = v.value.toLowerCase();
        F = F.filter((B) => B.path.toLowerCase().includes(me));
      }
      return F;
    }), O = U(() => {
      const F = [...M.value];
      return F.sort((me, B) => {
        let N;
        return _.value === "name" ? N = me.path.localeCompare(B.path) : N = me.size - B.size, h.value ? N : -N;
      }), F;
    }), j = U(() => M.value.length === 0 ? !1 : M.value.every((F) => c.value.has(F.path))), E = U(() => M.value.some((F) => c.value.has(F.path))), L = U(() => {
      const F = S.value.map((me) => ({
        label: me,
        value: me
      }));
      return F.push({ label: "Custom path...", value: "__custom__" }), F;
    }), Z = U(() => w.value === "__custom__" ? C.value.trim().length > 0 : w.value.length > 0), Y = U(() => {
      let F = 0;
      for (const me of c.value) {
        const B = u.value.find((N) => N.path === me);
        B && (F += B.size);
      }
      return F;
    });
    function q(F) {
      if (F === 0) return "0 B";
      const me = 1024 * 1024 * 1024, B = 1024 * 1024, N = 1024;
      return F >= me ? `${(F / me).toFixed(2)} GB` : F >= B ? `${(F / B).toFixed(1)} MB` : F >= N ? `${(F / N).toFixed(0)} KB` : `${F} B`;
    }
    function te(F) {
      const me = F.match(P);
      return me ? `${me[1]}${me[4]}` : null;
    }
    function W(F) {
      const me = new Set(c.value), B = me.has(F.path), N = F.shard_group || te(F.path);
      if (N) {
        const re = u.value.filter((Ve) => (Ve.shard_group || te(Ve.path)) === N);
        B ? re.forEach((Ve) => me.delete(Ve.path)) : re.forEach((Ve) => me.add(Ve.path));
      } else
        B ? me.delete(F.path) : me.add(F.path);
      c.value = me;
    }
    function Q() {
      const F = new Set(c.value);
      for (const me of M.value)
        me.is_model_file && F.add(me.path);
      c.value = F;
    }
    function le() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Ue() {
      if (j.value) {
        const F = new Set(c.value);
        for (const me of M.value)
          F.delete(me.path);
        c.value = F;
      } else {
        const F = new Set(c.value);
        for (const me of M.value)
          F.add(me.path);
        c.value = F;
      }
    }
    function ne(F) {
      _.value === F ? h.value = !h.value : (_.value = F, h.value = !0);
    }
    function he(F) {
      const me = F.split("/");
      return me.length >= 2 ? me[me.length - 2] : null;
    }
    function ce() {
      if (A.value || c.value.size === 0) return;
      const F = /* @__PURE__ */ new Set();
      for (const N of c.value) {
        const re = he(N);
        re && F.add(re.toLowerCase());
      }
      if (F.size !== 1) return;
      const me = [...F][0], B = S.value.find(
        (N) => N.toLowerCase() === me
      );
      B && B !== w.value && (I = !0, w.value = B, Rt(() => {
        I = !1;
      }));
    }
    function Ae() {
      return w.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function Ce() {
      if (c.value.size === 0 || !Z.value) return;
      const F = Ae(), me = [];
      for (const B of c.value) {
        const N = u.value.find((re) => re.path === B);
        N && me.push({
          url: Ik(o.repoId, o.revision, N.path),
          destination: F,
          filename: N.path.split("/").pop() || N.path
        });
      }
      a("queue", me);
    }
    async function be() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const F = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, me = await l(F);
          if (u.value = me.files, o.preselectedFile) {
            const B = u.value.find((N) => N.path === o.preselectedFile);
            B && W(B);
          }
        } catch (F) {
          f.value = F instanceof Error ? F.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function ue() {
      try {
        const F = await r();
        S.value = F.directories, F.directories.length > 0 && !w.value && (w.value = F.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return St(() => [o.repoId, o.revision], () => {
      o.repoId && be();
    }, { immediate: !1 }), St(() => o.repoId, () => {
      A.value = !1;
    }), St(c, () => {
      ce();
    }, { deep: !0 }), St(S, () => {
      S.value.length > 0 && c.value.size > 0 && ce();
    }), St(w, (F, me) => {
      I || me === "" || (A.value = !0);
    }), at(() => {
      be(), ue();
    }), (F, me) => (n(), i("div", Ek, [
      t("div", Tk, [
        t("button", {
          class: "back-btn",
          onClick: me[0] || (me[0] = (B) => F.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Pk, [
          t("span", Rk, d(e.repoId), 1),
          e.revision ? (n(), i("span", Mk, d(e.revision), 1)) : y("", !0)
        ])
      ]),
      m.value ? (n(), i("div", Dk, " Loading repository files... ")) : f.value ? (n(), i("div", Lk, d(f.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", Nk, [
          $(dt, {
            modelValue: v.value,
            "onUpdate:modelValue": me[1] || (me[1] = (B) => v.value = B),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Uk, [
            t("button", {
              class: Me(["toggle-btn", { active: p.value }]),
              onClick: me[2] || (me[2] = (B) => p.value = !p.value)
            }, d(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: le
            }, "Clear")
          ])
        ]),
        t("div", Ok, [
          M.value.length > 0 ? (n(), i("div", Ak, [
            t("input", {
              type: "checkbox",
              checked: j.value,
              indeterminate: E.value && !j.value,
              class: "file-checkbox",
              onChange: Ue
            }, null, 40, zk),
            t("span", {
              class: "header-name",
              onClick: me[3] || (me[3] = (B) => ne("name"))
            }, [
              me[9] || (me[9] = b(" Name ", -1)),
              t("span", Vk, d(_.value === "name" ? h.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: me[4] || (me[4] = (B) => ne("size"))
            }, [
              me[10] || (me[10] = b(" Size ", -1)),
              t("span", Fk, d(_.value === "size" ? h.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          M.value.length === 0 ? (n(), i("div", Bk, d(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Wk, [
            (n(!0), i(H, null, we(O.value, (B) => (n(), i("div", {
              key: B.path,
              class: Me(["file-item", { selected: c.value.has(B.path) }]),
              onClick: (N) => W(B)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(B.path),
                class: "file-checkbox",
                onClick: me[5] || (me[5] = pt(() => {
                }, ["stop"])),
                onChange: (N) => W(B)
              }, null, 40, jk),
              t("span", Hk, d(B.path), 1),
              t("span", Kk, d(q(B.size)), 1)
            ], 10, Gk))), 128))
          ]))
        ]),
        t("div", qk, [
          me[11] || (me[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Yk, [
            $($k, {
              modelValue: w.value,
              "onUpdate:modelValue": me[6] || (me[6] = (B) => w.value = B),
              options: L.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", Jk, "/")) : y("", !0),
            w.value !== "__custom__" ? (n(), D(dt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": me[7] || (me[7] = (B) => x.value = B),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (n(), D(dt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": me[8] || (me[8] = (B) => C.value = B),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Qk, [
          t("div", Xk, [
            t("span", Zk, d(c.value.size) + " file(s) selected", 1),
            t("span", eb, d(q(Y.value)), 1)
          ]),
          $(De, {
            variant: "primary",
            disabled: c.value.size === 0 || !Z.value,
            onClick: Ce
          }, {
            default: g(() => [...me[12] || (me[12] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), sb = /* @__PURE__ */ xe(tb, [["__scopeId", "data-v-183acebc"]]), ob = { class: "token-config-modal" }, nb = { class: "provider-info" }, ab = { class: "provider-icon" }, lb = { class: "provider-name" }, ib = {
  key: 0,
  class: "current-token"
}, rb = { class: "mask" }, ub = { class: "token-input-section" }, cb = { class: "input-label" }, db = { class: "help-text" }, mb = ["href"], fb = { class: "modal-actions" }, vb = /* @__PURE__ */ $e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = it(), r = k(""), u = k(!1), c = k(!1), m = U(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = U(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = U(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = U(
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
      body: g(() => [
        t("div", ob, [
          t("div", nb, [
            t("span", ab, d(f.value), 1),
            t("span", lb, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", ib, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", rb, d(e.currentTokenMask), 1),
            $(De, {
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
          t("div", ub, [
            t("label", cb, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            $(dt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", db, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, d(_.value), 9, mb)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", fb, [
          $(De, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(De, {
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
}), pb = /* @__PURE__ */ xe(vb, [["__scopeId", "data-v-0687d0ce"]]), gb = { class: "huggingface-tab" }, hb = {
  key: 0,
  class: "search-section"
}, yb = { class: "search-header" }, wb = { class: "search-bar" }, _b = {
  key: 1,
  class: "search-results"
}, kb = {
  key: 0,
  class: "loading-state"
}, bb = {
  key: 1,
  class: "error-state"
}, $b = {
  key: 2,
  class: "results-list"
}, Cb = ["onClick"], xb = { class: "repo-header" }, Sb = { class: "repo-id" }, Ib = { class: "repo-stats" }, Eb = {
  class: "stat",
  title: "Downloads"
}, Tb = {
  class: "stat",
  title: "Likes"
}, Pb = {
  key: 0,
  class: "repo-desc"
}, Rb = {
  key: 1,
  class: "repo-tags"
}, Mb = {
  key: 3,
  class: "empty-state"
}, Db = {
  key: 4,
  class: "hint-state"
}, Lb = /* @__PURE__ */ $e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = it(), a = k("search"), l = k(""), r = k([]), u = k(!1), c = k(null), m = k(!1), f = k(null), v = k("main"), p = k(), _ = k(), h = k(!1), w = k(null), x = U(() => {
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
      const E = xk(j);
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
    function A(j) {
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
    function O() {
      w.value = null;
    }
    return at(P), (j, E) => (n(), i("div", gb, [
      a.value === "search" ? (n(), i("div", hb, [
        t("div", yb, [
          t("div", wb, [
            $(dt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (L) => l.value = L),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: as(S, ["enter"])
            }, null, 8, ["modelValue"]),
            $(De, {
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
          $(De, {
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
      a.value === "search" ? (n(), i("div", _b, [
        u.value ? (n(), i("div", kb, " Searching HuggingFace... ")) : c.value ? (n(), i("div", bb, [
          t("p", null, d(c.value), 1),
          x.value ? (n(), D(De, {
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
        ])) : r.value.length > 0 ? (n(), i("div", $b, [
          (n(!0), i(H, null, we(r.value, (L) => (n(), i("div", {
            key: L.repo_id,
            class: "repo-card",
            onClick: (Z) => A(L.repo_id)
          }, [
            t("div", xb, [
              t("span", Sb, d(L.repo_id), 1),
              t("div", Ib, [
                t("span", Eb, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + d(C(L.downloads)), 1)
                ]),
                t("span", Tb, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + d(C(L.likes)), 1)
                ])
              ])
            ]),
            L.description ? (n(), i("p", Pb, d(L.description), 1)) : y("", !0),
            L.tags.length > 0 ? (n(), i("div", Rb, [
              (n(!0), i(H, null, we(L.tags.slice(0, 5), (Z) => (n(), i("span", {
                key: Z,
                class: "tag"
              }, d(Z), 1))), 128))
            ])) : y("", !0)
          ], 8, Cb))), 128))
        ])) : m.value ? (n(), i("div", Mb, " No repositories found ")) : (n(), i("div", Db, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), D(sb, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": _.value,
        onBack: I,
        onQueue: E[3] || (E[3] = (L) => j.$emit("queue", L))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      h.value ? (n(), D(pb, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: E[4] || (E[4] = (L) => h.value = !1),
        onSaved: M,
        onCleared: O
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Nb = /* @__PURE__ */ xe(Lb, [["__scopeId", "data-v-e13209bf"]]), Ub = { class: "civitai-tab" }, Ob = /* @__PURE__ */ $e({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Ub, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Ab = /* @__PURE__ */ xe(Ob, [["__scopeId", "data-v-44948051"]]), zb = { class: "direct-url-tab" }, Vb = { class: "input-group" }, Fb = { class: "input-group" }, Bb = {
  key: 0,
  class: "error"
}, Wb = { class: "actions" }, Gb = /* @__PURE__ */ $e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = k(""), r = U(() => {
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
    return (m, f) => (n(), i("div", zb, [
      t("div", Vb, [
        f[2] || (f[2] = t("label", null, "Download URL", -1)),
        $(dt, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Fb, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        $(dt, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Bb, d(r.value), 1)) : y("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Wb, [
        $(De, {
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
}), jb = /* @__PURE__ */ xe(Gb, [["__scopeId", "data-v-01def7aa"]]), Hb = { class: "download-modal" }, Kb = { class: "tab-bar" }, qb = ["onClick"], Yb = { class: "tab-content" }, Jb = /* @__PURE__ */ $e({
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
    return (f, v) => e.show ? (n(), D(Ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: g(() => [
        t("div", Hb, [
          t("div", Kb, [
            (n(), i(H, null, we(l, (p) => t("button", {
              key: p.id,
              class: Me(["tab-btn", { active: r.value === p.id }]),
              onClick: (_) => r.value = p.id
            }, d(p.icon) + " " + d(p.label), 11, qb)), 64))
          ]),
          t("div", Yb, [
            r.value === "huggingface" ? (n(), D(Nb, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), D(Ab, { key: 1 })) : r.value === "direct" ? (n(), D(jb, {
              key: 2,
              onQueue: c
            })) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        $(De, {
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
}), Hr = /* @__PURE__ */ xe(Jb, [["__scopeId", "data-v-90a9f401"]]), Qb = /* @__PURE__ */ $e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = it(), r = k([]), u = k([]), c = k("production"), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k(null), h = k(!1);
    function w() {
      p.value = !1, o("navigate", "model-index");
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
    }), A = U(() => {
      const E = {};
      for (const Z of C.value) {
        const Y = Z.type || "other";
        E[Y] || (E[Y] = []), E[Y].push(Z);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([Z], [Y]) => {
        const q = L.indexOf(Z), te = L.indexOf(Y);
        return q >= 0 && te >= 0 ? q - te : q >= 0 ? -1 : te >= 0 ? 1 : Z.localeCompare(Y);
      }).map(([Z, Y]) => ({ type: Z, models: Y }));
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
    function O(E) {
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
      $(Kt, null, {
        header: g(() => [
          $(qt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[1] || (L[1] = (Z) => p.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (Z) => h.value = !0)
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
          $(Vo, {
            modelValue: v.value,
            "onUpdate:modelValue": L[2] || (L[2] = (Z) => v.value = Z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), D(zs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), D(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), D(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(r.value.length) + " models • " + d(I(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, we(A.value, (Z) => (n(), D(wt, {
              key: Z.type,
              title: Z.type.toUpperCase(),
              count: Z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(Z.models, (Y) => (n(), D(Lt, {
                  key: Y.hash || Y.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...L[7] || (L[7] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(Y.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(I(Y.size)), 1)
                  ]),
                  details: g(() => [
                    $(bt, {
                      label: "Used by:",
                      value: (Y.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(bt, {
                      label: "Path:",
                      value: Y.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => P(Y)
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
            S.value.length ? (n(), D(wt, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(S.value, (Z) => (n(), D(Lt, {
                  key: Z.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...L[9] || (L[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(Z.filename), 1)
                  ]),
                  subtitle: g(() => [...L[10] || (L[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var Y;
                    return [
                      $(bt, {
                        label: "Required by:",
                        value: ((Y = Z.workflow_names) == null ? void 0 : Y.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => O(Z.filename)
                    }, {
                      default: g(() => [...L[11] || (L[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => M(Z.filename)
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
            !C.value.length && !S.value.length ? (n(), D(gs, {
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
        onClose: L[3] || (L[3] = (Z) => p.value = !1)
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
      _.value ? (n(), D(wl, {
        key: 0,
        identifier: _.value,
        onClose: L[4] || (L[4] = (Z) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      $(Hr, {
        show: h.value,
        onClose: L[5] || (L[5] = (Z) => h.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Xb = /* @__PURE__ */ xe(Qb, [["__scopeId", "data-v-af3ca736"]]), Zb = {
  key: 0,
  class: "indexing-progress"
}, e2 = { class: "progress-info" }, t2 = { class: "progress-label" }, s2 = { class: "progress-count" }, o2 = { class: "progress-bar" }, n2 = { class: "modal-content" }, a2 = { class: "modal-header" }, l2 = { class: "modal-body" }, i2 = { class: "input-group" }, r2 = { class: "current-path" }, u2 = { class: "input-group" }, c2 = { class: "modal-footer" }, d2 = /* @__PURE__ */ $e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = it(), u = s, c = k([]), m = k(!1), f = k(!1), v = k(null), p = k(""), _ = k(!1), h = k(null), w = k(!1), x = k(null), C = k(""), S = k(!1), A = k(!1), I = k(null), P = U(
      () => c.value.reduce((te, W) => te + (W.size || 0), 0)
    ), M = U(() => {
      if (!p.value.trim()) return c.value;
      const te = p.value.toLowerCase();
      return c.value.filter((W) => {
        const Q = W, le = W.sha256 || Q.sha256_hash || "";
        return W.filename.toLowerCase().includes(te) || le.toLowerCase().includes(te);
      });
    }), O = U(() => {
      const te = {};
      for (const Q of M.value) {
        const le = Q.type || "other";
        te[le] || (te[le] = []), te[le].push(Q);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(te).sort(([Q], [le]) => {
        const Ue = W.indexOf(Q), ne = W.indexOf(le);
        return Ue >= 0 && ne >= 0 ? Ue - ne : Ue >= 0 ? -1 : ne >= 0 ? 1 : Q.localeCompare(le);
      }).map(([Q, le]) => ({ type: Q, models: le }));
    });
    function j(te) {
      if (!te) return "Unknown";
      const W = 1024 * 1024 * 1024, Q = 1024 * 1024;
      return te >= W ? `${(te / W).toFixed(1)} GB` : te >= Q ? `${(te / Q).toFixed(0)} MB` : `${(te / 1024).toFixed(0)} KB`;
    }
    function E(te) {
      h.value = te.hash || te.filename;
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        const te = await a();
        await Y(), te.changes > 0 && console.log(`Scan complete: ${te.changes} changes detected`);
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function Z() {
      if (C.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const te = await r(C.value.trim());
          x.value = te.path, w.value = !1, C.value = "", await Y(), console.log(`Directory changed: ${te.models_indexed} models indexed`), u("refresh");
        } catch (te) {
          v.value = te instanceof Error ? te.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function Y() {
      m.value = !0, v.value = null;
      try {
        c.value = await o();
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function q() {
      try {
        const te = await l();
        x.value = te.path;
      } catch {
      }
    }
    return at(() => {
      Y(), q();
    }), (te, W) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: W[2] || (W[2] = (Q) => _.value = !0)
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
                onClick: W[0] || (W[0] = (Q) => w.value = !0)
              }, {
                default: g(() => [...W[11] || (W[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: W[1] || (W[1] = (Q) => A.value = !0)
              }, {
                default: g(() => [...W[12] || (W[12] = [
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
          I.value ? (n(), i("div", Zb, [
            t("div", e2, [
              t("span", t2, d(I.value.message), 1),
              t("span", s2, d(I.value.current) + "/" + d(I.value.total), 1)
            ]),
            t("div", o2, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          $(Vo, {
            modelValue: p.value,
            "onUpdate:modelValue": W[3] || (W[3] = (Q) => p.value = Q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || I.value ? (n(), D(zs, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), D(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length ? (n(), D(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(c.value.length) + " models • " + d(j(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, we(O.value, (Q) => (n(), D(wt, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(Q.models, (le) => (n(), D(Lt, {
                  key: le.sha256 || le.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...W[13] || (W[13] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(le.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(j(le.size)), 1)
                  ]),
                  details: g(() => [
                    $(bt, {
                      label: "Hash:",
                      value: le.hash ? le.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => E(le)
                    }, {
                      default: g(() => [...W[14] || (W[14] = [
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
            M.value.length ? y("", !0) : (n(), D(gs, {
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
        onClose: W[4] || (W[4] = (Q) => _.value = !1)
      }, {
        content: g(() => [...W[15] || (W[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value ? (n(), D(wl, {
        key: 0,
        identifier: h.value,
        onClose: W[5] || (W[5] = (Q) => h.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), D(Ut, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: W[9] || (W[9] = pt((Q) => w.value = !1, ["self"]))
        }, [
          t("div", n2, [
            t("div", a2, [
              W[16] || (W[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: W[6] || (W[6] = (Q) => w.value = !1)
              }, "✕")
            ]),
            t("div", l2, [
              t("div", i2, [
                W[17] || (W[17] = t("label", null, "Current Directory", -1)),
                t("code", r2, d(x.value || "Not set"), 1)
              ]),
              t("div", u2, [
                W[18] || (W[18] = t("label", null, "New Directory Path", -1)),
                $(dt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": W[7] || (W[7] = (Q) => C.value = Q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              W[19] || (W[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", c2, [
              $(De, {
                variant: "secondary",
                onClick: W[8] || (W[8] = (Q) => w.value = !1)
              }, {
                default: g(() => [...W[20] || (W[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              $(De, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: Z
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
        show: A.value,
        onClose: W[10] || (W[10] = (Q) => A.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), m2 = /* @__PURE__ */ xe(d2, [["__scopeId", "data-v-3705114c"]]), f2 = { class: "node-details" }, v2 = { class: "status-row" }, p2 = {
  key: 0,
  class: "detail-row"
}, g2 = { class: "value" }, h2 = { class: "detail-row" }, y2 = { class: "value" }, w2 = {
  key: 1,
  class: "detail-row"
}, _2 = { class: "value mono" }, k2 = {
  key: 2,
  class: "detail-row"
}, b2 = ["href"], $2 = {
  key: 3,
  class: "detail-row"
}, C2 = { class: "value mono small" }, x2 = { class: "detail-row" }, S2 = {
  key: 0,
  class: "value"
}, I2 = {
  key: 1,
  class: "workflow-list"
}, E2 = /* @__PURE__ */ $e({
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
      body: g(() => [
        t("div", f2, [
          t("div", v2, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Me(["status-badge", l.value])
            }, d(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", p2, [
            m[3] || (m[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", g2, d(e.node.source === "development" ? "" : "v") + d(e.node.version), 1)
          ])) : y("", !0),
          t("div", h2, [
            m[4] || (m[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", y2, d(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", w2, [
            m[5] || (m[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", _2, d(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", k2, [
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
            ], 8, b2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", $2, [
            m[8] || (m[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", C2, d(e.node.download_url), 1)
          ])) : y("", !0),
          m[10] || (m[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", x2, [
            m[9] || (m[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", S2, " Not used in any workflows ")) : (n(), i("div", I2, [
              (n(!0), i(H, null, we(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        $(De, {
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
}), T2 = /* @__PURE__ */ xe(E2, [["__scopeId", "data-v-b342f626"]]), P2 = { class: "dialog-message" }, R2 = {
  key: 0,
  class: "dialog-details"
}, M2 = {
  key: 1,
  class: "dialog-warning"
}, D2 = /* @__PURE__ */ $e({
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
      body: g(() => [
        t("p", P2, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", R2, [
          (n(!0), i(H, null, we(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", M2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + d(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), D(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        $(De, {
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
}), _l = /* @__PURE__ */ xe(D2, [["__scopeId", "data-v-3670b9f5"]]), L2 = { class: "mismatch-warning" }, N2 = { class: "version-mismatch" }, U2 = { class: "version-actual" }, O2 = { class: "version-expected" }, A2 = { style: { color: "var(--cg-color-warning)" } }, z2 = { style: { color: "var(--cg-color-warning)" } }, V2 = {
  key: 0,
  class: "community-status-badge"
}, F2 = { key: 0 }, B2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, W2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, G2 = /* @__PURE__ */ $e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: m } = it(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = k(!1), p = k(null), _ = k(""), h = k(!1), w = k(null), x = k(/* @__PURE__ */ new Set()), C = k(null), S = U(() => {
      if (!_.value.trim()) return f.value.nodes;
      const B = _.value.toLowerCase();
      return f.value.nodes.filter(
        (N) => {
          var re, Ve;
          return N.name.toLowerCase().includes(B) || ((re = N.description) == null ? void 0 : re.toLowerCase().includes(B)) || ((Ve = N.repository) == null ? void 0 : Ve.toLowerCase().includes(B));
        }
      );
    }), A = U(
      () => S.value.filter((B) => B.installed && B.tracked)
    ), I = U(
      () => S.value.filter((B) => !B.installed && B.tracked && !B.issue_type)
    ), P = U(
      () => S.value.filter((B) => B.installed && !B.tracked)
    ), M = U(
      () => S.value.filter((B) => B.issue_type === "version_gated")
    ), O = U(
      () => S.value.filter((B) => B.issue_type === "uninstallable")
    ), j = U(() => M.value.length), E = U(() => O.value.length);
    function L(B) {
      return B.registry_id || B.name;
    }
    function Z(B) {
      return x.value.has(L(B));
    }
    async function Y(B, N) {
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
    function q(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[B] || B;
    }
    const te = U(() => o.versionMismatches.length > 0);
    function W(B) {
      return !B.used_in_workflows || B.used_in_workflows.length === 0 ? "Not used in any workflows" : B.used_in_workflows.length === 1 ? B.used_in_workflows[0] : `${B.used_in_workflows.length} workflows`;
    }
    function Q(B) {
      return B.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function le(B) {
      return B.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Ue(B) {
      return B.registry_id ? `Community-mapped package: ${B.registry_id}` : "Community-mapped package";
    }
    function ne(B) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function he(B) {
      w.value = B;
    }
    function ce() {
      a("open-node-manager");
    }
    function Ae(B) {
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
            N.status === "success" ? (a("toast", `✓ Node "${B}" tracked as development`, "success"), await me()) : a("toast", `Failed to track node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error tracking node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Ce(B) {
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
            N.status === "success" ? (a("toast", `✓ Node "${B}" removed`, "success"), await me()) : a("toast", `Failed to remove node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error removing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function be(B) {
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
            N.status === "success" ? (a("toast", `✓ Node "${B}" installed`, "success"), await me()) : a("toast", `Failed to install node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ue(B) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${B.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0, await Y(B, "registry");
          } catch (N) {
            a("toast", `Error queueing install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function F(B) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${B.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0, await Y(B, "git");
          } catch (N) {
            a("toast", `Error queueing git install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function me() {
      v.value = !0, p.value = null;
      try {
        f.value = await l();
      } catch (B) {
        p.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return at(me), (B, N) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (re) => h.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: ce
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
          $(Vo, {
            modelValue: _.value,
            "onUpdate:modelValue": N[1] || (N[1] = (re) => _.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          v.value ? (n(), D(zs, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), D(Vs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: me
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            f.value.total_count ? (n(), D(Cn, {
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
            te.value ? (n(), D(wt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", L2, [
                  N[8] || (N[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, we(e.versionMismatches, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: g(() => [...N[9] || (N[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(re.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", N2, [
                      t("span", U2, d(re.actual), 1),
                      N[10] || (N[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", O2, d(re.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "warning",
                      size: "sm",
                      onClick: N[2] || (N[2] = (Ve) => a("repair-environment"))
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
            M.value.length ? (n(), D(wt, {
              key: 2,
              title: "BLOCKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(M.value, (re) => (n(), D(Lt, {
                  key: `blocked-${re.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...N[12] || (N[12] = [
                    b("⛔", -1)
                  ])]),
                  title: g(() => [
                    b(d(re.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", A2, d(Q(re)), 1)
                  ]),
                  details: g(() => [
                    $(bt, {
                      label: "Guidance:",
                      value: re.issue_guidance || le(re)
                    }, null, 8, ["value"]),
                    $(bt, {
                      label: "Used by:",
                      value: W(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => he(re)
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
            O.value.length ? (n(), D(wt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(O.value, (re) => (n(), D(Lt, {
                  key: `community-${re.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...N[14] || (N[14] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(re.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", z2, d(Ue(re)), 1)
                  ]),
                  details: g(() => [
                    $(bt, {
                      label: "Guidance:",
                      value: re.issue_guidance || ne(re)
                    }, null, 8, ["value"]),
                    $(bt, {
                      label: "Used by:",
                      value: W(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => he(re)
                    }, {
                      default: g(() => [...N[15] || (N[15] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Z(re) ? (n(), i("span", V2, "Queued")) : (n(), i(H, { key: 1 }, [
                      re.registry_id ? (n(), D(_e, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ve) => ue(re)
                      }, {
                        default: g(() => [...N[16] || (N[16] = [
                          b(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      re.repository ? (n(), D(_e, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ve) => F(re)
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
            P.value.length ? (n(), D(wt, {
              key: 4,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(P.value, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: g(() => [...N[18] || (N[18] = [
                    b("?", -1)
                  ])]),
                  title: g(() => [
                    b(d(re.name), 1)
                  ]),
                  subtitle: g(() => [...N[19] || (N[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    $(bt, {
                      label: "Used by:",
                      value: W(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => he(re)
                    }, {
                      default: g(() => [...N[20] || (N[20] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => Ae(re.name)
                    }, {
                      default: g(() => [...N[21] || (N[21] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ve) => Ce(re.name)
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
            A.value.length ? (n(), D(wt, {
              key: 5,
              title: "INSTALLED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(A.value, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    b(d(re.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    b(d(re.name), 1)
                  ]),
                  subtitle: g(() => [
                    re.version ? (n(), i("span", F2, d(re.source === "development" ? "" : "v") + d(re.version), 1)) : (n(), i("span", B2, "version unknown")),
                    t("span", W2, " • " + d(q(re.source)), 1)
                  ]),
                  details: g(() => [
                    $(bt, {
                      label: "Used by:",
                      value: W(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => he(re)
                    }, {
                      default: g(() => [...N[23] || (N[23] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ce
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
            I.value.length ? (n(), D(wt, {
              key: 6,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(I.value, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "missing"
                }, {
                  icon: g(() => [...N[25] || (N[25] = [
                    b("!", -1)
                  ])]),
                  title: g(() => [
                    b(d(re.name), 1)
                  ]),
                  subtitle: g(() => [...N[26] || (N[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    $(bt, {
                      label: "Required by:",
                      value: W(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => he(re)
                    }, {
                      default: g(() => [...N[27] || (N[27] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => be(re.name)
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
            !A.value.length && !I.value.length && !M.value.length && !O.value.length && !P.value.length ? (n(), D(gs, {
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
        onClose: N[4] || (N[4] = (re) => h.value = !1)
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
            onClick: N[3] || (N[3] = (re) => h.value = !1)
          }, {
            default: g(() => [...N[30] || (N[30] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), D(T2, {
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
}), j2 = /* @__PURE__ */ xe(G2, [["__scopeId", "data-v-3ef68ac4"]]);
function Kr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const H2 = { class: "remote-url-display" }, K2 = ["title"], q2 = ["title"], Y2 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J2 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q2 = /* @__PURE__ */ $e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), a = U(() => {
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
    return (r, u) => (n(), i("div", H2, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(a.value), 9, K2),
      t("button", {
        class: Me(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", J2, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", Y2, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, q2)
    ]));
  }
}), X2 = /* @__PURE__ */ xe(Q2, [["__scopeId", "data-v-7768a58d"]]), Z2 = { class: "remote-title" }, e$ = {
  key: 0,
  class: "default-badge"
}, t$ = {
  key: 1,
  class: "sync-badge"
}, s$ = {
  key: 0,
  class: "ahead"
}, o$ = {
  key: 1,
  class: "behind"
}, n$ = {
  key: 1,
  class: "synced"
}, a$ = ["href"], l$ = {
  key: 1,
  class: "remote-url-text"
}, i$ = /* @__PURE__ */ $e({
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
      icon: g(() => [
        b(d(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", Z2, [
          t("span", null, d(e.remote.name), 1),
          a.value ? (n(), i("span", e$, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", t$, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", s$, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", o$, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", n$, "✓ synced"))
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
          onClick: v[0] || (v[0] = pt(() => {
          }, ["stop"]))
        }, d(m.value), 9, a$)) : (n(), i("span", l$, d(m.value), 1))
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
        a.value ? y("", !0) : (n(), D(_e, {
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), D(bt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              $(X2, {
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
}), r$ = /* @__PURE__ */ xe(i$, [["__scopeId", "data-v-8310f3a8"]]), u$ = { class: "remote-form" }, c$ = { class: "form-header" }, d$ = { class: "form-body" }, m$ = {
  key: 0,
  class: "form-error"
}, f$ = { class: "form-actions" }, v$ = /* @__PURE__ */ $e({
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
    return (f, v) => (n(), i("div", u$, [
      t("div", c$, [
        $(Xt, null, {
          default: g(() => [
            b(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", d$, [
        $($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            $(dt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        $($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            $(dt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        $($t, { label: "Push URL (optional)" }, {
          default: g(() => [
            $(dt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (n(), i("div", m$, d(u.value), 1)) : y("", !0)
      ]),
      t("div", f$, [
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
}), p$ = /* @__PURE__ */ xe(v$, [["__scopeId", "data-v-56021b18"]]), g$ = { class: "conflict-summary-box" }, h$ = { class: "summary-header" }, y$ = { class: "summary-text" }, w$ = { key: 0 }, _$ = {
  key: 1,
  class: "all-resolved"
}, k$ = { class: "summary-progress" }, b$ = { class: "progress-bar" }, $$ = { class: "progress-text" }, C$ = /* @__PURE__ */ $e({
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
    return (a, l) => (n(), i("div", g$, [
      t("div", h$, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", y$, [
          t("strong", null, d(e.conflictCount) + " conflict" + d(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", w$, " Resolve all conflicts before " + d(e.operationType) + "ing ", 1)) : (n(), i("p", _$, " All conflicts resolved - ready to " + d(e.operationType), 1))
        ])
      ]),
      t("div", k$, [
        t("div", b$, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", $$, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), x$ = /* @__PURE__ */ xe(C$, [["__scopeId", "data-v-4e9e6cc9"]]), S$ = { class: "modal-header" }, I$ = { class: "modal-title" }, E$ = { class: "modal-body" }, T$ = {
  key: 0,
  class: "error-box"
}, P$ = {
  key: 0,
  class: "error-hint"
}, R$ = {
  key: 1,
  class: "loading-state"
}, M$ = { class: "commit-summary" }, D$ = {
  key: 0,
  class: "commits-section"
}, L$ = { class: "commit-list" }, N$ = { class: "commit-hash" }, U$ = { class: "commit-message" }, O$ = { class: "commit-date" }, A$ = {
  key: 1,
  class: "changes-section"
}, z$ = {
  key: 0,
  class: "change-group",
  open: ""
}, V$ = { class: "change-count" }, F$ = { class: "change-list" }, B$ = {
  key: 0,
  class: "conflict-badge"
}, W$ = {
  key: 1,
  class: "change-group"
}, G$ = { class: "change-count" }, j$ = { class: "change-list" }, H$ = {
  key: 2,
  class: "change-group"
}, K$ = { class: "change-count" }, q$ = { class: "change-list" }, Y$ = {
  key: 3,
  class: "strategy-section"
}, J$ = { class: "radio-group" }, Q$ = { class: "radio-option" }, X$ = { class: "radio-option" }, Z$ = { class: "radio-option" }, eC = {
  key: 4,
  class: "up-to-date"
}, tC = { class: "modal-actions" }, vi = "comfygit.pullModelStrategy", sC = /* @__PURE__ */ $e({
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
    }), p = U(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), _ = U(
      () => v.value > 0 && p.value === v.value
    ), h = U(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !_.value));
    function w(C) {
      if (!f.value) return !1;
      const S = C.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((A) => A.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var A, I;
      return n(), D(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (P) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = pt(() => {
            }, ["stop"]))
          }, [
            t("div", S$, [
              t("h3", I$, "PULL FROM " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", E$, [
              e.error ? (n(), i("div", T$, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, d(e.error), 1),
                  r.value ? (n(), i("p", P$, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", R$, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (A = e.preview) != null && A.has_uncommitted_changes ? (n(), i(H, { key: 2 }, [
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
                t("div", M$, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", D$, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", L$, [
                    (n(!0), i(H, null, we(e.preview.commits, (P) => (n(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      t("span", N$, d(P.short_hash || P.hash.slice(0, 7)), 1),
                      t("span", U$, d(P.message), 1),
                      t("span", O$, d(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                m.value ? (n(), i("div", A$, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", z$, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", V$, d(u.value) + " changes", 1)
                    ]),
                    t("div", F$, [
                      (n(!0), i(H, null, we(e.preview.changes.workflows.added, (P) => (n(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128)),
                      (n(!0), i(H, null, we(e.preview.changes.workflows.modified, (P) => (n(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + d(P) + " ", 1),
                        w(P) ? (n(), i("span", B$, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, we(e.preview.changes.workflows.deleted, (P) => (n(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (n(), i("details", W$, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", G$, d(c.value) + " to install", 1)
                    ]),
                    t("div", j$, [
                      (n(!0), i(H, null, we(e.preview.changes.nodes.to_install, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", H$, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", K$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", q$, [
                      (n(!0), i(H, null, we(e.preview.changes.models.referenced, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item"
                      }, d(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (n(), D(x$, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", Y$, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", J$, [
                    t("label", Q$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", X$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Z$, [
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
                e.preview.commits_behind === 0 ? (n(), i("div", eC, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", tC, [
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
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), D(_e, {
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
                f.value && !_.value ? (n(), D(_e, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + d(p.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), D(_e, {
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
}), oC = /* @__PURE__ */ xe(sC, [["__scopeId", "data-v-1d633bba"]]), nC = { class: "modal-header" }, aC = { class: "modal-title" }, lC = { class: "modal-body" }, iC = {
  key: 0,
  class: "loading-state"
}, rC = {
  key: 1,
  class: "warning-box"
}, uC = {
  key: 0,
  class: "commits-section"
}, cC = { class: "commit-list" }, dC = { class: "commit-hash" }, mC = { class: "commit-message" }, fC = { class: "commit-date" }, vC = { class: "force-option" }, pC = { class: "checkbox-option" }, gC = { class: "commit-summary" }, hC = { key: 0 }, yC = { key: 1 }, wC = {
  key: 0,
  class: "info-box"
}, _C = {
  key: 1,
  class: "commits-section"
}, kC = { class: "commit-list" }, bC = { class: "commit-hash" }, $C = { class: "commit-message" }, CC = { class: "commit-date" }, xC = {
  key: 2,
  class: "up-to-date"
}, SC = { class: "modal-actions" }, IC = /* @__PURE__ */ $e({
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
      return n(), D(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = pt(() => {
            }, ["stop"]))
          }, [
            t("div", nC, [
              t("h3", aC, "PUSH TO " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", lC, [
              e.loading ? (n(), i("div", iC, [...u[8] || (u[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (c = e.preview) != null && c.has_uncommitted_changes ? (n(), i("div", rC, [...u[9] || (u[9] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", uC, [
                  u[10] || (u[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", cC, [
                    (n(!0), i(H, null, we(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", dC, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", mC, d(v.message), 1),
                      t("span", fC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", vC, [
                  t("label", pC, [
                    nt(t("input", {
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
                t("div", gC, [
                  u[14] || (u[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", hC, " Creating " + d(e.preview.remote) + "/" + d(e.preview.branch) + " with " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", yC, " Pushing " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + d(e.preview.remote) + "/" + d(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", wC, [...u[15] || (u[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", _C, [
                  u[16] || (u[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", kC, [
                    (n(!0), i(H, null, we(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", bC, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", $C, d(v.message), 1),
                      t("span", CC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", xC, [
                  u[17] || (u[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", SC, [
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), D(_e, {
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
}), EC = /* @__PURE__ */ xe(IC, [["__scopeId", "data-v-3c2e35ab"]]), TC = { class: "resolution-choice-group" }, PC = ["disabled"], RC = ["disabled"], MC = /* @__PURE__ */ $e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", TC, [
      t("button", {
        class: Me(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, PC),
      t("button", {
        class: Me(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, RC)
    ]));
  }
}), DC = /* @__PURE__ */ xe(MC, [["__scopeId", "data-v-985715ed"]]), LC = { class: "conflict-header" }, NC = { class: "conflict-info" }, UC = { class: "workflow-name" }, OC = { class: "conflict-description" }, AC = {
  key: 0,
  class: "resolved-badge"
}, zC = { class: "resolved-text" }, VC = { class: "conflict-hashes" }, FC = { class: "hash-item" }, BC = { class: "hash-item" }, WC = { class: "conflict-actions" }, GC = /* @__PURE__ */ $e({
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
      var v, p;
      return n(), i("div", {
        class: Me(["conflict-item", { resolved: r.value }])
      }, [
        t("div", LC, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", NC, [
            t("code", UC, d(e.conflict.name) + ".json", 1),
            t("div", OC, d(u.value), 1)
          ]),
          r.value ? (n(), i("div", AC, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", zC, d(c.value), 1)
          ])) : y("", !0)
        ]),
        t("div", VC, [
          t("span", FC, [
            f[3] || (f[3] = b("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", BC, [
            f[4] || (f[4] = b("Theirs: ", -1)),
            t("code", null, d(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", WC, [
          $(DC, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), jC = /* @__PURE__ */ xe(GC, [["__scopeId", "data-v-506d3bbf"]]), HC = { class: "resolution-content" }, KC = {
  key: 0,
  class: "error-box"
}, qC = { class: "resolution-header" }, YC = { class: "header-stats" }, JC = { class: "stat" }, QC = { class: "stat-value" }, XC = { class: "stat resolved" }, ZC = { class: "stat-value" }, e3 = {
  key: 0,
  class: "stat pending"
}, t3 = { class: "stat-value" }, s3 = { class: "conflicts-list" }, o3 = {
  key: 1,
  class: "all-resolved-message"
}, n3 = /* @__PURE__ */ $e({
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
    function p() {
      a("apply");
    }
    return (_, h) => (n(), D(Ct, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", HC, [
          e.error ? (n(), i("div", KC, [
            h[1] || (h[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              h[0] || (h[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, d(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", qC, [
            t("div", YC, [
              t("div", JC, [
                t("span", QC, d(e.workflowConflicts.length), 1),
                h[2] || (h[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", XC, [
                t("span", ZC, d(l.value), 1),
                h[3] || (h[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", e3, [
                t("span", t3, d(r.value), 1),
                h[4] || (h[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            h[5] || (h[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", s3, [
            (n(!0), i(H, null, we(e.workflowConflicts, (w) => (n(), D(jC, {
              key: w.name,
              conflict: w,
              resolution: m(w.name),
              onResolve: (x) => f(w.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", o3, [
            h[6] || (h[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + d(c.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        $(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...h[7] || (h[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h[8] || (h[8] = t("div", { class: "footer-spacer" }, null, -1)),
        $(De, {
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
}), a3 = /* @__PURE__ */ xe(n3, [["__scopeId", "data-v-c58d150d"]]), l3 = { class: "node-conflict-item" }, i3 = { class: "node-header" }, r3 = { class: "node-name" }, u3 = { class: "node-id" }, c3 = { class: "version-comparison" }, d3 = { class: "version yours" }, m3 = { class: "version theirs" }, f3 = { class: "chosen-version" }, v3 = { class: "chosen" }, p3 = { class: "chosen-reason" }, g3 = { class: "affected-workflows" }, h3 = { class: "wf-source" }, y3 = { class: "wf-version" }, w3 = /* @__PURE__ */ $e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", l3, [
      t("div", i3, [
        t("code", r3, d(e.conflict.node_name), 1),
        t("span", u3, "(" + d(e.conflict.node_id) + ")", 1)
      ]),
      t("div", c3, [
        t("div", d3, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, d(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", m3, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, d(e.conflict.target_version), 1)
        ])
      ]),
      t("div", f3, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", v3, d(e.conflict.chosen_version), 1),
        t("span", p3, d(e.conflict.chosen_reason), 1)
      ]),
      t("details", g3, [
        t("summary", null, " Affected workflows (" + d(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, we(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, d(a.name), 1),
            t("span", h3, "(" + d(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", y3, "needs v" + d(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), _3 = /* @__PURE__ */ xe(w3, [["__scopeId", "data-v-8b626725"]]), k3 = { class: "validation-content" }, b3 = {
  key: 0,
  class: "compatible-message"
}, $3 = { class: "conflicts-list" }, C3 = {
  key: 2,
  class: "warnings-section"
}, x3 = /* @__PURE__ */ $e({
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
      body: g(() => [
        t("div", k3, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", b3, [
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
            t("div", $3, [
              (n(!0), i(H, null, we(e.validation.node_conflicts, (c) => (n(), D(_3, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", C3, [
            u[8] || (u[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, we(e.validation.warnings, (c, m) => (n(), i("li", { key: m }, d(c), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        $(De, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: g(() => [...u[9] || (u[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = t("div", { class: "footer-spacer" }, null, -1)),
        $(De, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: g(() => [...u[10] || (u[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(De, {
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
}), S3 = /* @__PURE__ */ xe(x3, [["__scopeId", "data-v-fefd26ed"]]), I3 = { key: 0 }, E3 = /* @__PURE__ */ $e({
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
    } = it(), w = k([]), x = k(null), C = k({}), S = k(!1), A = k(null), I = k(""), P = k(!1), M = k(null), O = k(!1), j = k("add"), E = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = U(() => {
      if (!I.value.trim()) return w.value;
      const Se = I.value.toLowerCase();
      return w.value.filter(
        (Oe) => Oe.name.toLowerCase().includes(Se) || Oe.fetch_url.toLowerCase().includes(Se) || Oe.push_url.toLowerCase().includes(Se)
      );
    });
    async function Z() {
      S.value = !0, A.value = null;
      try {
        const Se = await a();
        w.value = Se.remotes, x.value = Se.current_branch_tracking || null, await Promise.all(
          Se.remotes.map(async (Oe) => {
            const Re = await m(Oe.name);
            Re && (C.value[Oe.name] = Re);
          })
        );
      } catch (Se) {
        A.value = Se instanceof Error ? Se.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function Y() {
      j.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function q(Se) {
      const Oe = w.value.find((Re) => Re.name === Se);
      Oe && (j.value = "edit", E.value = {
        name: Oe.name,
        fetchUrl: Oe.fetch_url,
        pushUrl: Oe.push_url
      }, O.value = !0);
    }
    async function te(Se) {
      try {
        j.value === "add" ? await l(Se.name, Se.fetchUrl) : await u(Se.name, Se.fetchUrl, Se.pushUrl || void 0), O.value = !1, await Z();
      } catch (Oe) {
        A.value = Oe instanceof Error ? Oe.message : "Operation failed";
      }
    }
    function W() {
      O.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(Se) {
      M.value = Se;
      try {
        await c(Se);
        const Oe = await m(Se);
        Oe && (C.value[Se] = Oe), o("toast", `✓ Fetched from ${Se}`, "success");
      } catch (Oe) {
        o("toast", Oe instanceof Error ? Oe.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function le(Se) {
      if (confirm(`Remove remote "${Se}"?`))
        try {
          await r(Se), await Z();
        } catch (Oe) {
          A.value = Oe instanceof Error ? Oe.message : "Failed to remove remote";
        }
    }
    function Ue() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ne = k("idle"), he = U(() => ne.value === "pull_preview"), ce = U(
      () => ne.value === "resolving" || ne.value === "validating"
    ), Ae = U(
      () => ne.value === "validation_review" || ne.value === "executing"
    ), Ce = k(!1), be = k(null), ue = k(!1), F = k(null), me = k(!1), B = k(null), N = k(null), re = k(/* @__PURE__ */ new Map()), Ve = k(null), ze = k(null), V = U(() => B.value && Kr(B.value) ? B.value : null);
    async function J(Se) {
      F.value = Se, ne.value = "pull_preview", me.value = !0, B.value = null, N.value = null;
      try {
        B.value = await f(Se);
      } catch (Oe) {
        N.value = Oe instanceof Error ? Oe.message : "Failed to load pull preview";
      } finally {
        me.value = !1;
      }
    }
    function ve() {
      ne.value = "idle", B.value = null, N.value = null, F.value = null;
    }
    async function Ee(Se) {
      if (!F.value) return;
      ne.value = "executing", N.value = null;
      const Oe = F.value;
      try {
        const Re = await v(Oe, Se);
        if (Re.rolled_back) {
          N.value = `Pull failed and was rolled back: ${Re.error || "Unknown error"}`, ne.value = "pull_preview";
          return;
        }
        Pe(), ne.value = "idle", o("toast", `✓ Pulled from ${Oe}`, "success"), await Z();
      } catch (Re) {
        N.value = Re instanceof Error ? Re.message : "Pull failed", ne.value = "pull_preview";
      }
    }
    function G() {
      V.value && (ne.value = "resolving", ze.value = null);
    }
    function z(Se, Oe) {
      re.value.set(Se, { name: Se, resolution: Oe });
    }
    function ee() {
      ne.value = "pull_preview";
    }
    async function ae() {
      ne.value = "validating", ze.value = null;
      try {
        const Se = Array.from(re.value.values());
        Ve.value = await h(F.value, Se), ne.value = "validation_review";
      } catch (Se) {
        ze.value = Se instanceof Error ? Se.message : "Validation failed", ne.value = "resolving";
      }
    }
    async function de() {
      ne.value = "executing";
      const Se = F.value;
      try {
        const Oe = Array.from(re.value.values()), Re = await v(Se, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Oe
        });
        if (Re.rolled_back) {
          N.value = `Pull failed and was rolled back: ${Re.error || "Unknown error"}`, ne.value = "pull_preview";
          return;
        }
        Pe(), ne.value = "idle", o("toast", `✓ Pulled from ${Se}`, "success"), await Z();
      } catch (Oe) {
        N.value = Oe instanceof Error ? Oe.message : "Pull failed", ne.value = "validation_review";
      }
    }
    function ie() {
      ne.value = "resolving";
    }
    function Ne() {
      Pe(), ne.value = "idle";
    }
    function Pe() {
      re.value.clear(), Ve.value = null, ze.value = null, N.value = null, B.value = null, F.value = null;
    }
    async function ge(Se) {
      F.value = Se, Ce.value = !0, me.value = !0, be.value = null;
      try {
        be.value = await p(Se);
      } catch (Oe) {
        A.value = Oe instanceof Error ? Oe.message : "Failed to load push preview";
      } finally {
        me.value = !1;
      }
    }
    function K() {
      Ce.value = !1, be.value = null, F.value = null;
    }
    async function Fe(Se) {
      if (!F.value) return;
      ue.value = !0;
      const Oe = F.value;
      try {
        await _(Oe, Se), K(), o("toast", `✓ Pushed to ${Oe}`, "success"), await Z();
      } catch (Re) {
        o("toast", Re instanceof Error ? Re.message : "Push failed", "error");
      } finally {
        ue.value = !1;
      }
    }
    function Ie() {
      const Se = F.value;
      K(), Se && J(Se);
    }
    return at(Z), (Se, Oe) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Oe[0] || (Oe[0] = (Re) => P.value = !0)
          }, {
            actions: g(() => [
              O.value ? y("", !0) : (n(), D(_e, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: g(() => [...Oe[3] || (Oe[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          O.value ? y("", !0) : (n(), D(Vo, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": Oe[1] || (Oe[1] = (Re) => I.value = Re),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          S.value ? (n(), D(zs, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (n(), D(Vs, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            O.value ? (n(), D(p$, {
              key: 0,
              mode: j.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: te,
              onCancel: W
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            w.value.length && !O.value ? (n(), D(Cn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", I3, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            L.value.length && !O.value ? (n(), D(wt, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(L.value, (Re) => (n(), D(r$, {
                  key: Re.name,
                  remote: Re,
                  "sync-status": C.value[Re.name],
                  "fetching-remote": M.value,
                  onFetch: Q,
                  onEdit: q,
                  onRemove: le,
                  onPull: J,
                  onPush: ge
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !O.value ? (n(), D(gs, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                $(_e, {
                  variant: "primary",
                  onClick: Y
                }, {
                  default: g(() => [...Oe[4] || (Oe[4] = [
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
        onClose: Oe[2] || (Oe[2] = (Re) => P.value = !1)
      }, {
        content: g(() => [...Oe[5] || (Oe[5] = [
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
            onClick: Ue
          }, {
            default: g(() => [...Oe[6] || (Oe[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $(oC, {
        show: he.value,
        "remote-name": F.value || "",
        preview: B.value,
        loading: me.value,
        pulling: ne.value === "executing",
        error: N.value,
        "conflict-resolutions": re.value,
        onClose: ve,
        onPull: Ee,
        onOpenConflictResolution: G
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      $(EC, {
        show: Ce.value,
        "remote-name": F.value || "",
        preview: be.value,
        loading: me.value,
        pushing: ue.value,
        onClose: K,
        onPush: Fe,
        onPullFirst: Ie
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ce.value && V.value ? (n(), D(a3, {
        key: 0,
        "workflow-conflicts": V.value.workflow_conflicts,
        resolutions: re.value,
        "operation-type": "pull",
        validating: ne.value === "validating",
        error: ze.value,
        onClose: ee,
        onResolve: z,
        onApply: ae
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ae.value && Ve.value ? (n(), D(S3, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: ne.value === "executing",
        onProceed: de,
        onGoBack: ie,
        onCancel: Ne
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), T3 = /* @__PURE__ */ xe(E3, [["__scopeId", "data-v-9ae3b76d"]]), P3 = { class: "setting-info" }, R3 = { class: "setting-label" }, M3 = {
  key: 0,
  class: "required-marker"
}, D3 = {
  key: 0,
  class: "setting-description"
}, L3 = { class: "setting-control" }, N3 = /* @__PURE__ */ $e({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Me(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", P3, [
        t("div", R3, [
          b(d(e.label) + " ", 1),
          e.required ? (n(), i("span", M3, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", D3, d(e.description), 1)) : y("", !0)
      ]),
      t("div", L3, [
        ot(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Wo = /* @__PURE__ */ xe(N3, [["__scopeId", "data-v-cb5d236c"]]), U3 = { class: "toggle" }, O3 = ["checked", "disabled"], A3 = /* @__PURE__ */ $e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", U3, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, O3),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), pi = /* @__PURE__ */ xe(A3, [["__scopeId", "data-v-71c0f550"]]), z3 = { class: "workspace-settings-content" }, V3 = { class: "settings-section" }, F3 = { class: "path-setting" }, B3 = { class: "path-value" }, W3 = { class: "path-setting" }, G3 = { class: "path-value" }, j3 = { class: "settings-section" }, H3 = { class: "settings-section" }, K3 = { class: "settings-section" }, q3 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u } = it(), c = k(!1), m = k(null), f = k(null), v = k(null), p = k(null), _ = k(""), h = k(""), w = k(""), x = k(!1), C = k(!1), S = k(!1), A = k(!0);
    function I(Y) {
      return Y.join(" ");
    }
    function P(Y) {
      return Y.trim() ? Y.trim().split(/\s+/) : [];
    }
    const M = U(() => {
      if (!p.value) return !1;
      const Y = x.value, q = C.value, te = w.value !== I(p.value.comfyui_extra_args || []);
      return Y || q || te;
    });
    async function O() {
      c.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), p.value = { ...v.value }, _.value = v.value.civitai_api_key || "", h.value = v.value.huggingface_token || "", w.value = I(v.value.comfyui_extra_args || []), x.value = !1, C.value = !1;
        const Y = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = Y !== "false", A.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (Y) {
        m.value = Y instanceof Error ? Y.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function j() {
      var Y;
      f.value = null;
      try {
        const q = {};
        x.value && (q.civitai_api_key = _.value || null), C.value && (q.huggingface_token = h.value || null), w.value !== I(((Y = p.value) == null ? void 0 : Y.comfyui_extra_args) || []) && (q.comfyui_extra_args = P(w.value)), await u(q, a.workspacePath || void 0), await O(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (q) {
        const te = q instanceof Error ? q.message : "Failed to save settings";
        f.value = { type: "error", message: te }, l("error", te);
      }
    }
    function E() {
      p.value && (_.value = p.value.civitai_api_key || "", h.value = p.value.huggingface_token || "", w.value = I(p.value.comfyui_extra_args || []), x.value = !1, C.value = !1, f.value = null);
    }
    function L(Y) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Y)), console.log("[ComfyGit] Auto-refresh setting saved:", Y);
    }
    function Z(Y) {
      Y ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Y ? "enabled" : "disabled");
    }
    return s({
      saveSettings: j,
      resetSettings: E,
      hasChanges: M,
      loadSettings: O
    }), at(O), (Y, q) => (n(), i("div", z3, [
      c.value ? (n(), D(zs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), D(Vs, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        $(wt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var te, W;
            return [
              t("div", V3, [
                t("div", F3, [
                  q[7] || (q[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  q[8] || (q[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", B3, d(((te = v.value) == null ? void 0 : te.workspace_path) || "Loading..."), 1)
                ]),
                t("div", W3, [
                  q[9] || (q[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  q[10] || (q[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", G3, d(((W = v.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(wt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", j3, [
              $(Wo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  $(an, {
                    modelValue: _.value,
                    "onUpdate:modelValue": q[0] || (q[0] = (te) => _.value = te),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: q[1] || (q[1] = (te) => x.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(Wo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  $(an, {
                    modelValue: h.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (te) => h.value = te),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: q[3] || (q[3] = (te) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $(wt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", H3, [
              $(Wo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  $(an, {
                    modelValue: w.value,
                    "onUpdate:modelValue": q[4] || (q[4] = (te) => w.value = te),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              q[11] || (q[11] = t("div", { class: "setting-hint" }, [
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
        $(wt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", K3, [
              $(Wo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  $(pi, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      q[5] || (q[5] = (te) => S.value = te),
                      L
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(Wo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  $(pi, {
                    modelValue: A.value,
                    "onUpdate:modelValue": [
                      q[6] || (q[6] = (te) => A.value = te),
                      Z
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
}), qr = /* @__PURE__ */ xe(q3, [["__scopeId", "data-v-9c5b427b"]]), Y3 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), D(Kt, null, {
      header: g(() => [
        $(qt, { title: "WORKSPACE SETTINGS" }, {
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
              (u = s.value) != null && u.hasChanges ? (n(), D(_e, {
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
}), J3 = { class: "base-tabs" }, Q3 = ["disabled", "onClick"], X3 = {
  key: 0,
  class: "base-tabs__badge"
}, Z3 = /* @__PURE__ */ $e({
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
    return (r, u) => (n(), i("div", J3, [
      (n(!0), i(H, null, we(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: Me([
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
        c.badge ? (n(), i("span", X3, d(c.badge), 1)) : y("", !0)
      ], 10, Q3))), 128))
    ]));
  }
}), Yr = /* @__PURE__ */ xe(Z3, [["__scopeId", "data-v-ad5e6cad"]]), ex = { class: "log-viewer-wrapper" }, tx = ["disabled", "title"], sx = /* @__PURE__ */ $e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle"), l = U(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Rt();
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
    return (f, v) => (n(), i("div", ex, [
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
        }, d(a.value === "copied" ? "Copied!" : "Copy"), 9, tx),
        (n(!0), i(H, null, we(l.value, (p, _) => (n(), i("div", {
          key: _,
          class: Me(`log-line log-level-${p.level.toLowerCase()}`)
        }, d(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Jr = /* @__PURE__ */ xe(sx, [["__scopeId", "data-v-c0cc6d21"]]), ox = /* @__PURE__ */ $e({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = it(), u = k("workspace"), c = k([]), m = k(!1), f = k(null), v = k(!1), p = k(null), _ = k(null), h = k(!1), w = U(() => u.value === "workspace" ? p.value : _.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        u.value === "workspace" ? c.value = await s(void 0, 500) : c.value = await a(void 0, 500);
      } catch (A) {
        f.value = A instanceof Error ? A.message : `Failed to load ${u.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function C() {
      try {
        const [A, I] = await Promise.all([
          o(),
          l()
        ]);
        A.exists && (p.value = A.path), I.exists && (_.value = I.path);
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
    return St(u, () => {
      x();
    }), at(() => {
      x(), C();
    }), (A, I) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
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
}), nx = /* @__PURE__ */ $e({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = it(), r = k([]), u = k(!1), c = k(null), m = k(!1), f = k("production"), v = k(null), p = k(!1);
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
      $(Kt, null, {
        header: g(() => [
          $(qt, {
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
}), ax = { class: "env-title" }, lx = {
  key: 0,
  class: "current-badge"
}, ix = {
  key: 0,
  class: "branch-info"
}, rx = /* @__PURE__ */ $e({
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
      icon: g(() => [
        b(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", ax, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", lx, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", ix, [
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
          $(bt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          $(bt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          $(bt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), D(bt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ux = /* @__PURE__ */ xe(rx, [["__scopeId", "data-v-9231917a"]]), cx = { class: "env-details" }, dx = { class: "status-row" }, mx = {
  key: 0,
  class: "detail-row"
}, fx = { class: "value mono" }, vx = {
  key: 1,
  class: "detail-row"
}, px = { class: "value mono small" }, gx = { class: "collapsible-section" }, hx = { class: "value" }, yx = {
  key: 0,
  class: "collapsible-body"
}, wx = { class: "item-list" }, _x = { class: "item-name" }, kx = { class: "item-name" }, bx = { class: "item-name" }, $x = { class: "item-name" }, Cx = {
  key: 0,
  class: "empty-list"
}, xx = { class: "collapsible-section" }, Sx = { class: "value" }, Ix = {
  key: 0,
  class: "collapsible-body"
}, Ex = { class: "item-list" }, Tx = { class: "item-name" }, Px = {
  key: 0,
  class: "item-meta"
}, Rx = {
  key: 0,
  class: "empty-list"
}, Mx = { class: "collapsible-section" }, Dx = { class: "value" }, Lx = {
  key: 0,
  class: "missing-count"
}, Nx = {
  key: 0,
  class: "collapsible-body"
}, Ux = { class: "item-list" }, Ox = { class: "model-row" }, Ax = { class: "item-name" }, zx = { class: "model-meta" }, Vx = { class: "item-meta" }, Fx = {
  key: 0,
  class: "item-meta"
}, Bx = {
  key: 0,
  class: "empty-list"
}, Wx = {
  key: 2,
  class: "section-divider"
}, Gx = {
  key: 3,
  class: "detail-row"
}, jx = { class: "value" }, Hx = { class: "footer-actions" }, Kx = /* @__PURE__ */ $e({
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
      body: g(() => {
        var v, p, _, h, w, x, C, S, A, I, P, M, O, j;
        return [
          t("div", cx, [
            t("div", dx, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Me(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, d(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", mx, [
              f[7] || (f[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", fx, d(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", vx, [
              f[8] || (f[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", px, d(e.environment.path), 1)
            ])) : y("", !0),
            f[17] || (f[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", gx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (E) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", hx, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Me(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", yx, [
                t("div", wx, [
                  (n(!0), i(H, null, we(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", _x, d(E), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, we(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", kx, d(E), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, we(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", bx, d(E), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, we(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", $x, d(E), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", Cx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", xx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (E) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", Sx, d(((h = e.detail) == null ? void 0 : h.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: Me(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", Ix, [
                t("div", Ex, [
                  (n(!0), i(H, null, we(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", Tx, d(E.name), 1),
                    E.version ? (n(), i("span", Px, d(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", Rx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", Mx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (E) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", Dx, [
                  b(d(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (A = (S = e.detail) == null ? void 0 : S.models) != null && A.missing.length ? (n(), i("span", Lx, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (I = e.detail) != null && I.models ? (n(), i("span", {
                  key: 0,
                  class: Me(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (n(), i("div", Nx, [
                t("div", Ux, [
                  (n(!0), i(H, null, we(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", Ox, [
                      t("span", Ax, d(E.filename), 1),
                      t("span", {
                        class: Me(["criticality-badge", E.criticality])
                      }, d(E.criticality), 3)
                    ]),
                    t("div", zx, [
                      t("span", Vx, d(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", Fx, " used by: " + d(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", Bx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (M = e.detail) != null && M.created_at || e.environment.created_at ? (n(), i("div", Wx)) : y("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (n(), i("div", Gx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", jx, d(c(((j = e.detail) == null ? void 0 : j.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", Hx, [
          e.canDelete ? (n(), D(De, {
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
          $(De, {
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
}), qx = /* @__PURE__ */ xe(Kx, [["__scopeId", "data-v-92e68b76"]]), Qr = [
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
], Zr = "auto", Yx = { class: "progress-bar" }, Jx = /* @__PURE__ */ $e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Yx, [
      t("div", {
        class: Me(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), ga = /* @__PURE__ */ xe(Jx, [["__scopeId", "data-v-1beb0512"]]), Qx = { class: "task-progress" }, Xx = { class: "progress-info" }, Zx = { class: "progress-percentage" }, e5 = { class: "progress-message" }, t5 = {
  key: 0,
  class: "progress-steps"
}, s5 = { class: "step-icon" }, o5 = { class: "step-label" }, n5 = /* @__PURE__ */ $e({
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
    return (l, r) => (n(), i("div", Qx, [
      $(ga, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Xx, [
        t("span", Zx, d(e.progress) + "%", 1),
        t("span", e5, d(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", t5, [
        (n(!0), i(H, null, we(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: Me(["step", o(u.id)])
        }, [
          t("span", s5, d(a(u.id)), 1),
          t("span", o5, d(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ea = /* @__PURE__ */ xe(n5, [["__scopeId", "data-v-9d1de66c"]]), a5 = {
  key: 0,
  class: "create-env-form"
}, l5 = { class: "form-field" }, i5 = { class: "input-wrapper" }, r5 = {
  key: 0,
  class: "validating-indicator"
}, u5 = {
  key: 1,
  class: "valid-indicator"
}, c5 = {
  key: 0,
  class: "field-error"
}, d5 = { class: "form-field" }, m5 = ["value"], f5 = { class: "form-field" }, v5 = ["disabled"], p5 = ["value"], g5 = { class: "form-field" }, h5 = ["value"], y5 = { class: "form-field form-field--checkbox" }, w5 = { class: "form-checkbox" }, _5 = {
  key: 1,
  class: "create-env-progress"
}, k5 = { class: "creating-intro" }, b5 = {
  key: 0,
  class: "progress-warning"
}, $5 = {
  key: 1,
  class: "create-error"
}, C5 = { class: "error-message" }, x5 = {
  key: 1,
  class: "footer-status"
}, S5 = 10, I5 = /* @__PURE__ */ $e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = it(), c = k(""), m = k(Xr), f = k("latest"), v = k(Zr), p = k(!1), _ = k(null), h = k(!1), w = k(!1);
    let x = null, C = 0;
    const S = U(() => !!c.value.trim() && w.value && !_.value && !h.value && !P.value), A = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = k(!1), P = k(!1), M = k({
      progress: 0,
      message: ""
    });
    let O = null, j = 0;
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
    St(c, (ne) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const he = ne.trim();
      if (!he) {
        _.value = null, h.value = !1;
        return;
      }
      h.value = !0, x = setTimeout(() => {
        Z(he);
      }, 400);
    });
    async function Z(ne, he = !1) {
      const ce = ne.trim();
      if (!ce)
        return w.value = !1, h.value = !1, _.value = he ? "Environment name is required" : null, !1;
      const Ae = ++C;
      h.value = !0;
      try {
        const Ce = await u(ce);
        return Ae !== C ? !1 : (_.value = Ce.valid ? null : Ce.error || "Invalid name", w.value = !!Ce.valid, !!Ce.valid);
      } catch {
        return Ae !== C || (_.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        Ae === C && (h.value = !1);
      }
    }
    async function Y() {
      x && (clearTimeout(x), x = null), await Z(c.value, !0);
    }
    function q() {
      P.value || o("close");
    }
    async function te() {
      const ne = c.value.trim();
      if (!ne) {
        _.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Z(ne, !0)) {
        P.value = !0, M.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ce = {
            name: ne,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ae = await l(ce);
          Ae.status === "started" ? W() : Ae.status === "error" && (M.value = {
            progress: 0,
            message: Ae.message || "Failed to start creation",
            error: Ae.message
          });
        } catch (ce) {
          M.value = {
            progress: 0,
            message: ce instanceof Error ? ce.message : "Unknown error",
            error: ce instanceof Error ? ce.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      O || (j = 0, O = window.setInterval(async () => {
        try {
          const ne = await r();
          j = 0, M.value = {
            progress: ne.progress ?? 0,
            message: ne.message,
            phase: ne.phase,
            error: ne.error
          }, ne.state === "complete" ? (Q(), o("created", ne.environment_name || c.value.trim(), p.value)) : ne.state === "error" ? (Q(), M.value.error = ne.error || ne.message) : ne.state === "idle" && P.value && (Q(), M.value.error = "Creation was interrupted. Please try again.");
        } catch {
          j++, j >= S5 && (Q(), M.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Q() {
      O && (clearInterval(O), O = null);
    }
    function le() {
      P.value = !1, M.value = { progress: 0, message: "" }, o("close");
    }
    async function Ue() {
      I.value = !0;
      try {
        A.value = await a();
      } catch (ne) {
        console.error("Failed to load ComfyUI releases:", ne);
      } finally {
        I.value = !1;
      }
    }
    return at(async () => {
      var ne;
      await Rt(), (ne = L.value) == null || ne.focus(), Ue();
    }), Xs(() => {
      Q(), x && (clearTimeout(x), x = null);
    }), (ne, he) => (n(), D(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: q
    }, {
      body: g(() => [
        P.value ? (n(), i("div", _5, [
          t("p", k5, [
            he[12] || (he[12] = b(" Creating environment ", -1)),
            t("strong", null, d(c.value), 1),
            he[13] || (he[13] = b("... ", -1))
          ]),
          $(ea, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (n(), i("p", b5, " This may take several minutes. Please wait... ")),
          M.value.error ? (n(), i("div", $5, [
            t("p", C5, d(M.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", a5, [
          t("div", l5, [
            he[6] || (he[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", i5, [
              nt(t("input", {
                ref_key: "nameInput",
                ref: L,
                "onUpdate:modelValue": he[0] || (he[0] = (ce) => c.value = ce),
                type: "text",
                class: Me(["form-input", { error: !!_.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: as(te, ["enter"]),
                onBlur: Y
              }, null, 34), [
                [es, c.value]
              ]),
              h.value ? (n(), i("span", r5, "...")) : w.value ? (n(), i("span", u5, "✓")) : y("", !0)
            ]),
            _.value ? (n(), i("div", c5, d(_.value), 1)) : y("", !0),
            he[7] || (he[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", d5, [
            he[8] || (he[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": he[1] || (he[1] = (ce) => m.value = ce),
              class: "form-select"
            }, [
              (n(!0), i(H, null, we(Xe(Qr), (ce) => (n(), i("option", {
                key: ce,
                value: ce
              }, d(ce), 9, m5))), 128))
            ], 512), [
              [Ss, m.value]
            ])
          ]),
          t("div", f5, [
            he[9] || (he[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": he[2] || (he[2] = (ce) => f.value = ce),
              class: "form-select",
              disabled: I.value
            }, [
              (n(!0), i(H, null, we(A.value, (ce) => (n(), i("option", {
                key: ce.tag_name,
                value: ce.tag_name
              }, d(ce.name), 9, p5))), 128))
            ], 8, v5), [
              [Ss, f.value]
            ])
          ]),
          t("div", g5, [
            he[10] || (he[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            nt(t("select", {
              "onUpdate:modelValue": he[3] || (he[3] = (ce) => v.value = ce),
              class: "form-select"
            }, [
              (n(!0), i(H, null, we(Xe(kl), (ce) => (n(), i("option", {
                key: ce,
                value: ce
              }, d(ce) + d(ce === "auto" ? " (detect GPU)" : ""), 9, h5))), 128))
            ], 512), [
              [Ss, v.value]
            ])
          ]),
          t("div", y5, [
            t("label", w5, [
              nt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": he[4] || (he[4] = (ce) => p.value = ce)
              }, null, 512), [
                [hn, p.value]
              ]),
              he[11] || (he[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        P.value ? (n(), i(H, { key: 1 }, [
          M.value.error ? (n(), D(De, {
            key: 0,
            variant: "secondary",
            onClick: le
          }, {
            default: g(() => [...he[16] || (he[16] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", x5, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          $(De, {
            variant: "primary",
            disabled: !S.value,
            onClick: te
          }, {
            default: g(() => [...he[14] || (he[14] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(De, {
            variant: "secondary",
            onClick: he[5] || (he[5] = (ce) => o("close"))
          }, {
            default: g(() => [...he[15] || (he[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), E5 = /* @__PURE__ */ xe(I5, [["__scopeId", "data-v-3faa3d9b"]]), T5 = /* @__PURE__ */ $e({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = it(), u = k([]), c = k(!1), m = k(null), f = k(""), v = k(!1), p = k(!1), _ = k(null), h = k(null), w = U(() => {
      if (!f.value.trim()) return u.value;
      const P = f.value.toLowerCase();
      return u.value.filter(
        (M) => {
          var O;
          return M.name.toLowerCase().includes(P) || ((O = M.current_branch) == null ? void 0 : O.toLowerCase().includes(P));
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
    function A(P) {
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
      $(Kt, null, {
        header: g(() => [
          $(qt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (O) => v.value = !0)
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
          $(Vo, {
            modelValue: f.value,
            "onUpdate:modelValue": M[1] || (M[1] = (O) => f.value = O),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), D(zs, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), D(Vs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            w.value.length ? (n(), D(wt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(w.value, (O) => (n(), D(ux, {
                  key: O.name,
                  "environment-name": O.name,
                  "is-current": O.is_current,
                  "current-branch": O.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    O.is_current ? y("", !0) : (n(), D(_e, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => P.$emit("switch", O.name)
                    }, {
                      default: g(() => [...M[8] || (M[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => S(O)
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
            w.value.length ? y("", !0) : (n(), D(gs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, fo({ _: 2 }, [
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
        onClose: M[3] || (M[3] = (O) => v.value = !1)
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
            onClick: M[2] || (M[2] = (O) => v.value = !1)
          }, {
            default: g(() => [...M[12] || (M[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(qx, {
        key: 0,
        environment: _.value,
        detail: h.value,
        "can-delete": u.value.length > 1,
        onClose: M[4] || (M[4] = (O) => {
          _.value = null, h.value = null;
        }),
        onDelete: A
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), D(E5, {
        key: 1,
        onClose: M[5] || (M[5] = (O) => p.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), P5 = /* @__PURE__ */ xe(T5, [["__scopeId", "data-v-0c0fbd88"]]), R5 = { class: "file-path" }, M5 = { class: "file-path-text" }, D5 = ["title"], L5 = /* @__PURE__ */ $e({
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
    return (l, r) => (n(), i("div", R5, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", M5, d(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, d(o.value ? "✓" : "📋"), 9, D5)) : y("", !0)
    ]));
  }
}), N5 = /* @__PURE__ */ xe(L5, [["__scopeId", "data-v-f0982173"]]), U5 = ["checked", "disabled"], O5 = { class: "base-checkbox-box" }, A5 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, z5 = {
  key: 0,
  class: "base-checkbox-label"
}, V5 = /* @__PURE__ */ $e({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Me(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, U5),
      t("span", O5, [
        e.modelValue ? (n(), i("svg", A5, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", z5, [
        ot(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ta = /* @__PURE__ */ xe(V5, [["__scopeId", "data-v-bf17c831"]]), F5 = { class: "export-blocked" }, B5 = { class: "error-header" }, W5 = { class: "error-summary" }, G5 = { class: "error-description" }, j5 = { class: "issues-list" }, H5 = { class: "issue-message" }, K5 = {
  key: 0,
  class: "issue-details"
}, q5 = ["onClick"], Y5 = { class: "issue-fix" }, J5 = {
  key: 0,
  class: "commit-section"
}, Q5 = {
  key: 0,
  class: "issues-warning"
}, X5 = {
  key: 1,
  class: "commit-error"
}, Z5 = /* @__PURE__ */ $e({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = it(), r = k(""), u = k(!1), c = k(!1), m = k(""), f = Qs({}), v = U(
      () => o.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), p = U(
      () => o.issues.some((C) => C.type === "unresolved_issues")
    ), _ = U(
      () => p.value && !c.value
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
            const A = ((C = S.issues) == null ? void 0 : C.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${A}`;
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
      onClose: S[4] || (S[4] = (A) => C.$emit("close"))
    }, {
      body: g(() => [
        t("div", F5, [
          t("div", B5, [
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
            t("div", W5, [
              S[5] || (S[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", G5, d(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", j5, [
            (n(!0), i(H, null, we(e.issues, (A, I) => (n(), i("div", {
              key: I,
              class: "issue-item"
            }, [
              t("div", H5, d(A.message), 1),
              A.details.length ? (n(), i("div", K5, [
                (n(!0), i(H, null, we(w(I), (P, M) => (n(), i("div", {
                  key: M,
                  class: "issue-detail"
                }, d(P), 1))), 128)),
                A.details.length > 3 && !f[I] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (P) => f[I] = !0
                }, " +" + d(A.details.length - 3) + " more ", 9, q5)) : y("", !0)
              ])) : y("", !0),
              t("div", Y5, [
                A.type === "uncommitted_workflows" ? (n(), i(H, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : A.type === "uncommitted_git_changes" ? (n(), i(H, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : A.type === "unresolved_issues" ? (n(), i(H, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", J5, [
            p.value ? (n(), i("div", Q5, [
              S[8] || (S[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              $(ta, {
                modelValue: c.value,
                "onUpdate:modelValue": S[0] || (S[0] = (A) => c.value = A),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...S[7] || (S[7] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            $(yn, {
              modelValue: r.value,
              "onUpdate:modelValue": S[1] || (S[1] = (A) => r.value = A),
              placeholder: "Describe your changes...",
              disabled: u.value || _.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            m.value ? (n(), i("div", X5, d(m.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        v.value ? (n(), i(H, { key: 0 }, [
          $(De, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (A) => C.$emit("close"))
          }, {
            default: g(() => [...S[9] || (S[9] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(De, {
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
        ], 64)) : (n(), D(De, {
          key: 1,
          variant: "primary",
          onClick: S[3] || (S[3] = (A) => C.$emit("close"))
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
}), eu = /* @__PURE__ */ xe(Z5, [["__scopeId", "data-v-bd79ba24"]]), e8 = { class: "export-warnings" }, t8 = {
  key: 0,
  class: "success-header"
}, s8 = { class: "warning-header" }, o8 = { class: "warning-summary" }, n8 = { class: "warning-title" }, a8 = { class: "models-section" }, l8 = { class: "models-list" }, i8 = { class: "model-info" }, r8 = { class: "model-filename" }, u8 = { class: "model-workflows" }, c8 = ["onClick"], d8 = /* @__PURE__ */ $e({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(!1), r = k(null), u = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
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
          t("div", e8, [
            e.models.length === 0 ? (n(), i("div", t8, [...f[4] || (f[4] = [
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
              t("div", s8, [
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
                t("div", o8, [
                  t("h3", n8, d(e.models.length) + " model" + d(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", a8, [
                t("div", l8, [
                  (n(!0), i(H, null, we(u.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", i8, [
                      t("div", r8, d(v.filename), 1),
                      t("div", u8, " Used by: " + d(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (p) => r.value = v.hash
                    }, " Add Source ", 8, c8)
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
          $(De, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: g(() => [...f[7] || (f[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          $(De, {
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
      r.value ? (n(), D(wl, {
        key: 0,
        identifier: r.value,
        onClose: c
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ xe(d8, [["__scopeId", "data-v-b698d882"]]), m8 = { class: "export-card" }, f8 = { class: "export-path-row" }, v8 = { class: "export-actions" }, p8 = {
  key: 1,
  class: "export-warning"
}, g8 = /* @__PURE__ */ $e({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = it(), a = k(""), l = k(!1), r = k(!1), u = k(!1), c = k(null), m = k(!1), f = k(null), v = k(!1), p = k(!1), _ = U(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
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
    async function A() {
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
          const O = await M.blob(), j = URL.createObjectURL(O), E = c.value.path.split("/").pop() || "environment-export.tar.gz", L = document.createElement("a");
          L.href = j, L.download = E, document.body.appendChild(L), L.click(), document.body.removeChild(L), URL.revokeObjectURL(j);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (P, M) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (O) => m.value = !0)
          })
        ]),
        content: g(() => [
          $(wt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", m8, [
                M[7] || (M[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", f8, [
                  $(an, {
                    modelValue: a.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (O) => a.value = O),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", v8, [
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
          c.value ? (n(), D(wt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              $(Lt, {
                status: c.value.status === "success" ? "synced" : "broken"
              }, fo({
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
                    $(bt, { label: "Saved to:" }, {
                      default: g(() => [
                        $(N5, {
                          path: c.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    c.value.models_without_sources !== void 0 ? (n(), D(bt, {
                      key: 0,
                      label: "Models without sources:",
                      value: c.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    c.value.models_without_sources && c.value.models_without_sources > 0 ? (n(), i("div", p8, [...M[8] || (M[8] = [
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
                      onClick: A
                    }, {
                      default: g(() => [...M[10] || (M[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    $(_e, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (O) => c.value = null)
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
        onClose: M[3] || (M[3] = (O) => m.value = !1)
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
      v.value && f.value ? (n(), D(eu, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: M[4] || (M[4] = (O) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : y("", !0),
      p.value && f.value ? (n(), D(tu, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: M[5] || (M[5] = (O) => p.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), h8 = /* @__PURE__ */ xe(g8, [["__scopeId", "data-v-ddeffd68"]]), y8 = { class: "file-input-wrapper" }, w8 = ["accept", "multiple", "disabled"], _8 = /* @__PURE__ */ $e({
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
    }), (c, m) => (n(), i("div", y8, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, w8),
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
}), k8 = /* @__PURE__ */ xe(_8, [["__scopeId", "data-v-cd192091"]]), b8 = {
  key: 0,
  class: "drop-zone-empty"
}, $8 = { class: "drop-zone-text" }, C8 = { class: "drop-zone-primary" }, x8 = { class: "drop-zone-secondary" }, S8 = { class: "drop-zone-actions" }, I8 = {
  key: 1,
  class: "drop-zone-file"
}, E8 = { class: "file-info" }, T8 = { class: "file-details" }, P8 = { class: "file-name" }, R8 = { class: "file-size" }, M8 = /* @__PURE__ */ $e({
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
    const o = s, a = k(!1), l = k(null), r = k(0), u = U(() => l.value !== null), c = U(() => {
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
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _(C) {
      var A;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (A = C.dataTransfer) == null ? void 0 : A.files;
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
      class: Me(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
      onDragenter: pt(f, ["prevent"]),
      onDragover: pt(v, ["prevent"]),
      onDragleave: pt(p, ["prevent"]),
      onDrop: pt(_, ["prevent"])
    }, [
      u.value ? (n(), i("div", I8, [
        t("div", E8, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", T8, [
            t("div", P8, d(c.value), 1),
            t("div", R8, d(m.value), 1)
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
      ])) : (n(), i("div", b8, [
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
        t("div", $8, [
          t("p", C8, d(e.primaryText), 1),
          t("p", x8, d(e.secondaryText), 1)
        ]),
        t("div", S8, [
          $(k8, {
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
}), D8 = /* @__PURE__ */ xe(M8, [["__scopeId", "data-v-0f79cb86"]]), L8 = { class: "import-preview" }, N8 = { class: "preview-header" }, U8 = {
  key: 0,
  class: "source-env"
}, O8 = { class: "preview-content" }, A8 = { class: "preview-section" }, z8 = { class: "section-header" }, V8 = { class: "section-info" }, F8 = { class: "section-count" }, B8 = {
  key: 0,
  class: "item-list"
}, W8 = { class: "item-name" }, G8 = {
  key: 0,
  class: "item-more"
}, j8 = { class: "preview-section" }, H8 = { class: "section-header" }, K8 = { class: "section-info" }, q8 = { class: "section-count" }, Y8 = {
  key: 0,
  class: "item-list"
}, J8 = { class: "item-details" }, Q8 = { class: "item-name" }, X8 = { class: "item-meta" }, Z8 = {
  key: 0,
  class: "item-more"
}, eS = { class: "preview-section" }, tS = { class: "section-header" }, sS = { class: "section-info" }, oS = { class: "section-count" }, nS = {
  key: 0,
  class: "item-list"
}, aS = { class: "item-name" }, lS = {
  key: 0,
  class: "item-more"
}, iS = {
  key: 0,
  class: "preview-section"
}, rS = { class: "git-info" }, uS = /* @__PURE__ */ $e({
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
    return (u, c) => (n(), i("div", L8, [
      t("div", N8, [
        $(Xt, null, {
          default: g(() => [...c[0] || (c[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", U8, [
          c[1] || (c[1] = b(" From: ", -1)),
          $(Ya, null, {
            default: g(() => [
              b(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", O8, [
        t("div", A8, [
          t("div", z8, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", V8, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", F8, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", B8, [
            (n(!0), i(H, null, we(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              c[4] || (c[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", W8, d(m), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", G8, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", j8, [
          t("div", H8, [
            c[6] || (c[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", K8, [
              c[5] || (c[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", q8, d(a.value) + " file" + d(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", Y8, [
            (n(!0), i(H, null, we(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", J8, [
                t("span", Q8, d(m.filename), 1),
                t("span", X8, d(r(m.size)) + " • " + d(m.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", Z8, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", eS, [
          t("div", tS, [
            c[9] || (c[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", sS, [
              c[8] || (c[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", oS, d(l.value) + " node" + d(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", nS, [
            (n(!0), i(H, null, we(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              c[10] || (c[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", aS, d(m), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", lS, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", iS, [
          c[11] || (c[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", rS, [
            e.gitBranch ? (n(), D(bt, {
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
            e.gitCommit ? (n(), D(bt, {
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
}), cS = /* @__PURE__ */ xe(uS, [["__scopeId", "data-v-182fe113"]]), dS = { class: "import-config" }, mS = { class: "config-container" }, fS = { class: "config-field" }, vS = { class: "input-wrapper" }, pS = ["value"], gS = {
  key: 0,
  class: "validating-indicator"
}, hS = {
  key: 1,
  class: "valid-indicator"
}, yS = {
  key: 0,
  class: "field-error"
}, wS = { class: "config-field" }, _S = { class: "strategy-options" }, kS = ["value", "checked", "onChange"], bS = { class: "strategy-content" }, $S = { class: "strategy-label" }, CS = { class: "strategy-description" }, xS = { class: "config-field switch-field" }, SS = { class: "switch-label" }, IS = ["checked"], ES = { class: "advanced-section" }, TS = { class: "advanced-content" }, PS = { class: "config-field" }, RS = ["value"], MS = ["value"], DS = /* @__PURE__ */ $e({
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
    return (v, p) => (n(), i("div", dS, [
      $(Xt, null, {
        default: g(() => [...p[2] || (p[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", mS, [
        t("div", fS, [
          $(Bn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", vS, [
            t("input", {
              type: "text",
              class: Me(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: m,
              onBlur: f
            }, null, 42, pS),
            l.value ? (n(), i("span", gS, "...")) : r.value ? (n(), i("span", hS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", yS, d(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", wS, [
          $(Bn, null, {
            default: g(() => [...p[5] || (p[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", _S, [
            (n(), i(H, null, we(u, (_) => t("label", {
              key: _.value,
              class: Me(["strategy-option", { active: e.modelStrategy === _.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: e.modelStrategy === _.value,
                onChange: (h) => a("update:modelStrategy", _.value)
              }, null, 40, kS),
              t("div", bS, [
                t("span", $S, d(_.label), 1),
                t("span", CS, d(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", xS, [
          t("label", SS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (_) => a("update:switchAfterImport", _.target.checked))
            }, null, 40, IS),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", ES, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", TS, [
            t("div", PS, [
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
                (n(!0), i(H, null, we(Xe(kl), (_) => (n(), i("option", {
                  key: _,
                  value: _
                }, d(_) + d(_ === "auto" ? " (detect GPU)" : ""), 9, MS))), 128))
              ], 40, RS)
            ])
          ])
        ])
      ])
    ]));
  }
}), LS = /* @__PURE__ */ xe(DS, [["__scopeId", "data-v-89ea06a1"]]), NS = { class: "import-flow" }, US = {
  key: 0,
  class: "import-empty"
}, OS = { class: "git-import-section" }, AS = { class: "git-url-input-row" }, zS = ["disabled"], VS = {
  key: 0,
  class: "git-error"
}, FS = {
  key: 1,
  class: "import-configure"
}, BS = { class: "selected-file-bar" }, WS = {
  key: 0,
  class: "file-bar-content"
}, GS = { class: "file-bar-info" }, jS = { class: "file-bar-name" }, HS = { class: "file-bar-size" }, KS = {
  key: 1,
  class: "file-bar-content"
}, qS = { class: "file-bar-info" }, YS = { class: "file-bar-name" }, JS = {
  key: 0,
  class: "preview-loading"
}, QS = { class: "import-actions" }, XS = {
  key: 2,
  class: "import-progress"
}, ZS = { class: "creating-intro" }, e4 = {
  key: 0,
  class: "progress-warning"
}, t4 = {
  key: 1,
  class: "import-error"
}, s4 = { class: "error-message" }, o4 = {
  key: 3,
  class: "import-complete"
}, n4 = { class: "complete-message" }, a4 = { class: "complete-title" }, l4 = { class: "complete-details" }, i4 = { class: "complete-actions" }, r4 = /* @__PURE__ */ $e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var ue, F, me, B;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: m, executeGitImport: f, getImportProgress: v } = it();
    let p = null;
    const _ = k(null), h = k(a.resumeImport ?? !1), w = k(!1), x = k(!1), C = k(""), S = k(!1), A = k(null), I = k(""), P = k(null), M = k(!1), O = k(null), j = k(null), E = k({
      name: ((ue = a.initialProgress) == null ? void 0 : ue.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = k(null), Z = k({
      message: ((F = a.initialProgress) == null ? void 0 : F.message) ?? "Preparing import...",
      phase: ((me = a.initialProgress) == null ? void 0 : me.phase) ?? "",
      progress: ((B = a.initialProgress) == null ? void 0 : B.progress) ?? 0,
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
    ], q = U(() => {
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
    }), te = U(() => !S.value && !A.value && j.value && E.value.name.length > 0 && !L.value && (_.value || P.value));
    async function W(N) {
      _.value = N, S.value = !0, A.value = null, j.value = null;
      try {
        const re = await r(N);
        j.value = re;
      } catch (re) {
        A.value = re instanceof Error ? re.message : "Failed to analyze file", console.error("Preview error:", re);
      } finally {
        S.value = !1;
      }
    }
    function Q() {
      _.value = null, P.value = null, I.value = "", O.value = null, w.value = !1, x.value = !1, C.value = "", j.value = null, A.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null, l("source-cleared");
    }
    function le() {
      Ce(), Q(), h.value = !1, S.value = !1, M.value = !1, Z.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ue() {
      if (I.value.trim()) {
        M.value = !0, O.value = null;
        try {
          const N = await u(I.value.trim());
          P.value = I.value.trim(), j.value = N;
        } catch (N) {
          O.value = N instanceof Error ? N.message : "Failed to analyze repository";
        } finally {
          M.value = !1;
        }
      }
    }
    function ne(N) {
      try {
        const re = new URL(N);
        return re.host + re.pathname.replace(/\.git$/, "");
      } catch {
        return N;
      }
    }
    async function he(N) {
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
    async function ce() {
      if (E.value.name && !(!_.value && !P.value)) {
        h.value = !0, w.value = !1, Z.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
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
          N.status === "started" ? Ae() : (x.value = !1, C.value = N.message, h.value = !1, w.value = !0);
        } catch (N) {
          x.value = !1, C.value = N instanceof Error ? N.message : "Unknown error occurred during import", h.value = !1, w.value = !0;
        }
      }
    }
    async function Ae() {
      if (p) return;
      const N = async () => {
        try {
          const Ve = await v();
          return Z.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? (Ce(), x.value = !0, C.value = `Environment '${Ve.environment_name}' created successfully`, h.value = !1, w.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, E.value.switchAfterImport), !1) : Ve.state === "error" ? (Ce(), x.value = !1, C.value = Ve.error || Ve.message, h.value = !1, w.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await N() && (p = setInterval(async () => {
        await N() || Ce();
      }, 2e3));
    }
    function Ce() {
      p && (clearInterval(p), p = null);
    }
    function be(N) {
      return N < 1024 ? `${N} B` : N < 1024 * 1024 ? `${(N / 1024).toFixed(1)} KB` : N < 1024 * 1024 * 1024 ? `${(N / (1024 * 1024)).toFixed(1)} MB` : `${(N / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const N = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", N.state, N), N.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", N.environment_name), h.value = !0, E.value.name = N.environment_name || E.value.name || "", Z.value = {
          progress: N.progress ?? 0,
          message: N.message || "Importing...",
          phase: N.phase || "",
          error: null
        }, Ae());
      } catch (N) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", N);
      }
    }), s({
      handleReset: le,
      isImporting: h,
      canImport: te
    }), (N, re) => {
      var Ve;
      return n(), i("div", NS, [
        !_.value && !P.value && !h.value ? (n(), i("div", US, [
          $(D8, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: W
          }),
          re[7] || (re[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", OS, [
            re[5] || (re[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", AS, [
              nt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": re[0] || (re[0] = (ze) => I.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: as(Ue, ["enter"]),
                disabled: M.value
              }, null, 40, zS), [
                [es, I.value]
              ]),
              $(_e, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || M.value,
                onClick: Ue
              }, {
                default: g(() => [
                  b(d(M.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (n(), i("div", VS, d(O.value), 1)) : y("", !0),
            re[6] || (re[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !h.value && !w.value ? (n(), i("div", FS, [
          t("div", BS, [
            _.value ? (n(), i("div", WS, [
              re[8] || (re[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", GS, [
                t("div", jS, d(_.value.name), 1),
                t("div", HS, d(be(_.value.size)), 1)
              ])
            ])) : P.value ? (n(), i("div", KS, [
              re[10] || (re[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", qS, [
                t("div", YS, d(ne(P.value)), 1),
                re[9] || (re[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            $(_e, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: g(() => [...re[11] || (re[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", JS, [...re[12] || (re[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : A.value ? (n(), D(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : j.value ? (n(), D(cS, {
            key: 2,
            "source-environment": q.value.sourceEnvironment,
            workflows: q.value.workflows,
            models: q.value.models,
            nodes: q.value.nodes,
            "git-branch": q.value.gitBranch,
            "git-commit": q.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          j.value ? (n(), D(LS, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": re[1] || (re[1] = (ze) => E.value.name = ze),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": re[2] || (re[2] = (ze) => E.value.modelStrategy = ze),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": re[3] || (re[3] = (ze) => E.value.torchBackend = ze),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": re[4] || (re[4] = (ze) => E.value.switchAfterImport = ze),
            "name-error": L.value,
            onValidateName: he
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((Ve = j.value) != null && Ve.models_needing_download) ? (n(), D(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", QS, [
            $(_e, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...re[13] || (re[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(_e, {
              variant: "primary",
              size: "md",
              disabled: !te.value,
              onClick: ce
            }, {
              default: g(() => [...re[14] || (re[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h.value ? (n(), i("div", XS, [
          t("p", ZS, [
            re[15] || (re[15] = b(" Importing environment ", -1)),
            t("strong", null, d(E.value.name), 1),
            re[16] || (re[16] = b("... ", -1))
          ]),
          $(ea, {
            progress: Z.value.progress,
            message: Z.value.message,
            "current-phase": Z.value.phase,
            variant: Z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Y
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Z.value.error ? y("", !0) : (n(), i("p", e4, " This may take several minutes. Please wait... ")),
          Z.value.error ? (n(), i("div", t4, [
            t("p", s4, d(Z.value.error), 1)
          ])) : y("", !0)
        ])) : w.value ? (n(), i("div", o4, [
          t("div", {
            class: Me(["complete-icon", x.value ? "success" : "error"])
          }, d(x.value ? "✓" : "✕"), 3),
          t("div", n4, [
            t("div", a4, d(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", l4, d(C.value), 1)
          ]),
          t("div", i4, [
            $(_e, {
              variant: "primary",
              size: "md",
              onClick: le
            }, {
              default: g(() => [...re[17] || (re[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), su = /* @__PURE__ */ xe(r4, [["__scopeId", "data-v-72cbc04e"]]), u4 = /* @__PURE__ */ $e({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
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
}), c4 = /* @__PURE__ */ xe(u4, [["__scopeId", "data-v-e13bfe76"]]), Dn = So(), d4 = 5e3, $o = k([]), La = k(!1), Na = k(null);
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
  function p() {
    Go || (Go = window.setInterval(u, d4));
  }
  function _() {
    Go && (clearInterval(Go), Go = null);
  }
  return St(o, (h) => {
    h.length > 0 && p();
  }, { immediate: !0 }), e != null && e.autoStart && (u(), p()), {
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
    startPolling: p,
    stopPolling: _
  };
}
const m4 = { class: "instance-header" }, f4 = { class: "provider-badge" }, v4 = { class: "instance-name" }, p4 = {
  key: 0,
  class: "spinner"
}, g4 = { class: "instance-details" }, h4 = {
  key: 0,
  class: "detail"
}, y4 = {
  key: 1,
  class: "detail instance-url"
}, w4 = {
  key: 2,
  class: "detail"
}, _4 = {
  key: 3,
  class: "detail"
}, k4 = {
  key: 4,
  class: "detail total-cost"
}, b4 = {
  key: 0,
  class: "deployment-progress"
}, $4 = { class: "progress-message" }, C4 = { class: "instance-actions" }, x4 = /* @__PURE__ */ $e({
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
      class: Me(["instance-card", l.value])
    }, [
      t("div", m4, [
        t("span", f4, d(o.value), 1),
        t("span", v4, d(e.instance.name), 1),
        t("span", {
          class: Me(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", p4)) : y("", !0),
          b(" " + d(a.value), 1)
        ], 2)
      ]),
      t("div", g4, [
        e.instance.gpu_type ? (n(), i("span", h4, d(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", y4, d(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", w4, d(c(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", _4, "$" + d(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", k4, "$" + d(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", b4, [
        t("div", $4, d(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), D(ga, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", C4, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), D(_e, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), D(_e, {
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
        e.instance.status === "running" ? (n(), D(_e, {
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
        e.instance.status === "stopped" ? (n(), D(_e, {
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
}), S4 = /* @__PURE__ */ xe(x4, [["__scopeId", "data-v-746c3894"]]), I4 = { class: "instances-tab" }, E4 = { class: "instances-header" }, T4 = {
  key: 0,
  class: "loading-state"
}, P4 = {
  key: 1,
  class: "empty-state"
}, R4 = {
  key: 2,
  class: "instances-list"
}, M4 = /* @__PURE__ */ $e({
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
    return (a, l) => (n(), i("div", I4, [
      t("div", E4, [
        $(Xt, null, {
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
      e.isLoading && e.instances.length === 0 ? (n(), i("div", T4, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", P4, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", R4, [
        (n(!0), i(H, null, we(o.value, (r) => (n(), D(S4, {
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
}), D4 = /* @__PURE__ */ xe(M4, [["__scopeId", "data-v-ba614fc3"]]), L4 = { class: "remote-header" }, N4 = { class: "remote-info" }, U4 = { class: "remote-icon" }, O4 = { class: "remote-name" }, A4 = {
  key: 0,
  class: "default-badge"
}, z4 = {
  key: 1,
  class: "sync-badge"
}, V4 = {
  key: 0,
  class: "ahead"
}, F4 = {
  key: 1,
  class: "behind"
}, B4 = {
  key: 1,
  class: "synced"
}, W4 = ["href"], G4 = {
  key: 1,
  class: "remote-url-text"
}, j4 = { class: "remote-actions" }, H4 = /* @__PURE__ */ $e({
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
      class: Me(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", L4, [
        t("div", N4, [
          t("span", U4, d(o.value ? "🔗" : "🌐"), 1),
          t("span", O4, d(e.remote.name), 1),
          o.value ? (n(), i("span", A4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", z4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", V4, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", F4, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", B4, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = pt(() => {
          }, ["stop"]))
        }, d(l.value), 9, W4)) : (n(), i("span", G4, d(l.value), 1))
      ]),
      t("div", j4, [
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), D(_e, {
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
}), nu = /* @__PURE__ */ xe(H4, [["__scopeId", "data-v-d687d161"]]), K4 = { class: "runpod-tab" }, q4 = { class: "api-key-card" }, Y4 = { class: "api-key-row" }, J4 = { class: "api-key-input-wrapper" }, Q4 = ["type", "disabled"], X4 = ["title"], Z4 = { class: "status-icon" }, eI = { class: "status-text" }, tI = {
  key: 0,
  class: "credit-balance"
}, sI = { class: "config-card" }, oI = { class: "config-row" }, nI = ["disabled"], aI = {
  key: 0,
  value: ""
}, lI = {
  key: 1,
  value: "",
  disabled: ""
}, iI = ["value", "disabled"], rI = { class: "config-row" }, uI = {
  key: 0,
  class: "loading-inline"
}, cI = { class: "no-volumes-state" }, dI = { class: "no-volumes-text" }, mI = ["value"], fI = { class: "config-row" }, vI = ["disabled"], pI = {
  key: 0,
  value: ""
}, gI = {
  key: 1,
  value: ""
}, hI = {
  key: 2,
  value: ""
}, yI = ["value"], wI = { class: "config-row" }, _I = { class: "radio-group" }, kI = { class: "radio-option" }, bI = { class: "radio-label" }, $I = { class: "radio-option disabled" }, CI = { class: "radio-label" }, xI = { class: "config-row" }, SI = { class: "radio-group" }, II = { class: "radio-option" }, EI = { class: "radio-label" }, TI = { class: "radio-option disabled" }, PI = { class: "radio-label" }, RI = { class: "config-row" }, MI = {
  key: 0,
  class: "loading-text"
}, DI = {
  key: 1,
  class: "empty-remotes"
}, LI = { class: "remotes-list" }, NI = {
  key: 0,
  class: "sync-warning"
}, UI = { class: "warning-content" }, OI = { class: "remotes-footer" }, AI = { class: "summary-card" }, zI = {
  key: 0,
  class: "loading-text"
}, VI = { class: "summary-row" }, FI = { class: "summary-value" }, BI = { class: "summary-row" }, WI = { class: "summary-value" }, GI = { class: "summary-row" }, jI = { class: "summary-value" }, HI = {
  key: 0,
  class: "summary-sub-row"
}, KI = { class: "summary-sub-label" }, qI = {
  key: 1,
  class: "summary-sub-row warning"
}, YI = { class: "summary-sub-label" }, JI = { class: "summary-row" }, QI = { class: "summary-value" }, XI = { class: "summary-row" }, ZI = { class: "summary-value" }, e6 = { class: "deployment-summary" }, t6 = { class: "summary-columns" }, s6 = { class: "summary-column" }, o6 = { class: "pricing-row" }, n6 = { class: "pricing-value" }, a6 = { class: "pricing-row" }, l6 = { class: "pricing-value" }, i6 = { class: "pricing-row" }, r6 = { class: "pricing-value" }, u6 = { class: "pricing-row total" }, c6 = { class: "pricing-value" }, d6 = { class: "summary-column" }, m6 = { class: "spec-row" }, f6 = { class: "spec-row" }, v6 = {
  key: 0,
  class: "spec-row"
}, p6 = {
  key: 1,
  class: "spec-row spot-warning"
}, g6 = {
  key: 4,
  class: "deploy-actions"
}, h6 = { class: "progress-content" }, y6 = { class: "phase-indicator" }, w6 = { key: 0 }, _6 = { key: 1 }, k6 = { key: 2 }, b6 = {
  key: 3,
  class: "spinner"
}, $6 = { class: "phase-text" }, C6 = { class: "phase-name" }, x6 = { class: "phase-detail" }, S6 = {
  key: 0,
  class: "ready-actions"
}, I6 = { class: "console-link" }, E6 = ["href"], T6 = /* @__PURE__ */ $e({
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
    } = it(), S = k(!1), A = k(""), I = k(!1), P = k(!1), M = k(null), O = k(null), j = k(""), E = k(""), L = k(""), Z = k("SECURE"), Y = k("ON_DEMAND"), q = k("my-comfyui-deploy"), te = k([]), W = k({}), Q = k(!1), le = k(null), Ue = k(null), ne = k(null), he = k([]), ce = k(!1), Ae = k([]), Ce = k(!1), be = k([]), ue = k(!1), F = k(null), me = k(!1), B = k(!1), N = k(null), re = k(!1), Ve = k(null), ze = k(null), V = k(null), J = k(!1), ve = k(null), Ee = k(!1), G = k(!1), z = U(() => Ae.value.find((T) => T.id === E.value) || null), ee = U(() => j.value ? Ae.value.filter((T) => T.data_center_id === j.value) : Ae.value), ae = U(() => be.value.filter((T) => T.available)), de = U(() => le.value && W.value[le.value] || null), ie = U(() => {
      if (!le.value) return null;
      const T = te.value.find((R) => R.name === le.value);
      return (T == null ? void 0 : T.fetch_url) || null;
    }), Ne = U(() => I.value && E.value && L.value && ie.value && !B.value && !J.value), Pe = (T) => {
      const R = be.value.find((tt) => tt.id === L.value);
      if (!R) return "0.00";
      if (T === "SECURE") return (R.securePrice ?? 0).toFixed(2);
      if (T === "COMMUNITY") return (R.communityPrice ?? 0).toFixed(2);
      const Le = Z.value === "SECURE";
      return T === "ON_DEMAND" ? Le ? (R.securePrice ?? 0).toFixed(2) : (R.communityPrice ?? 0).toFixed(2) : Le ? (R.secureSpotPrice ?? 0).toFixed(2) : (R.communitySpotPrice ?? 0).toFixed(2);
    }, ge = U(() => {
      const T = be.value.find((Et) => Et.id === L.value), R = Ae.value.find((Et) => Et.id === E.value);
      if (!T) return null;
      const Le = Z.value === "SECURE", tt = Y.value === "SPOT";
      let vt;
      tt ? vt = Le ? T.secureSpotPrice ?? 0 : T.communitySpotPrice ?? 0 : vt = Le ? T.securePrice ?? 0 : T.communityPrice ?? 0;
      const st = R ? R.size_gb * 14e-5 : 0, xt = 4e-3;
      return {
        gpu: vt,
        volume: st,
        container: xt,
        total: vt + st + xt
      };
    });
    async function K() {
      await ye(), await Promise.all([Ke(), Fe()]);
    }
    async function Fe() {
      Q.value = !0;
      try {
        const T = await _();
        te.value = T.remotes, await Promise.all(
          T.remotes.map(async (Le) => {
            const tt = await h(Le.name);
            tt && (W.value[Le.name] = tt);
          })
        );
        const R = T.remotes.find((Le) => Le.is_default);
        R ? le.value = R.name : T.remotes.length > 0 && (le.value = T.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function Ie(T) {
      Ue.value = T;
      try {
        await w(T);
        const R = await h(T);
        R && (W.value[T] = R), o("toast", `Fetched from ${T}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        Ue.value = null;
      }
    }
    async function Se(T) {
      ne.value = T;
      try {
        await x(T, { force: !1 });
        const R = await h(T);
        R && (W.value[T] = R), o("toast", `Pushed to ${T}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        ne.value = null;
      }
    }
    function Oe(T) {
      le.value = T;
    }
    async function Re() {
      if (A.value) {
        P.value = !0, M.value = null;
        try {
          const T = await l(A.value, !0);
          T.status === "success" ? (I.value = !0, O.value = T.credit_balance ?? null, M.value = { type: "success", message: T.message }, await K()) : M.value = { type: "error", message: T.message };
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
    async function X() {
      try {
        await v(), A.value = "", I.value = !1, M.value = null, O.value = null, he.value = [], j.value = "", Ae.value = [], E.value = "", be.value = [], L.value = "", F.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ye() {
      Ce.value = !0, ce.value = !0;
      try {
        const T = await r();
        Ae.value = T.volumes;
        const R = /* @__PURE__ */ new Map();
        for (const Le of T.volumes)
          Le.data_center_id && !R.has(Le.data_center_id) && R.set(Le.data_center_id, {
            id: Le.data_center_id,
            name: Le.data_center_name || Le.data_center_id,
            available: !0
          });
        if (T.volumes.length === 0) {
          const Le = await C();
          he.value = Le.data_centers;
        } else
          he.value = Array.from(R.values());
        if (Ae.value.length > 0) {
          const Le = Ae.value[0];
          E.value = Le.id, Le.data_center_id && (j.value = Le.data_center_id, await ke(Le.data_center_id));
        } else he.value.length > 0 && (j.value = he.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ce.value = !1, ce.value = !1;
      }
    }
    async function ke(T) {
      ue.value = !0;
      try {
        const R = await u(T);
        be.value = R.gpu_types;
        const Le = be.value.find((tt) => tt.available);
        Le ? L.value = Le.id : L.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        ue.value = !1;
      }
    }
    St(j, async (T) => {
      if (!T || Ce.value) return;
      const R = Ae.value.find((Le) => Le.id === E.value);
      R && R.data_center_id !== T && (E.value = ""), await ke(T);
    }), St(E, async (T) => {
      if (!T) {
        be.value = [], L.value = "";
        return;
      }
      if (Ce.value) return;
      const R = Ae.value.find((Le) => Le.id === T);
      R && R.data_center_id !== j.value ? j.value = R.data_center_id : R && await ke(R.data_center_id);
    });
    async function Ke() {
      me.value = !0;
      try {
        F.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        me.value = !1;
      }
    }
    async function Be() {
      if (!(!L.value || !E.value)) {
        J.value = !0, N.value = null;
        try {
          const T = await p();
          ve.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? G.value = !0 : await qe() : Ee.value = !0;
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
    async function We() {
      G.value = !1, await qe();
    }
    async function et() {
      try {
        const T = await p();
        ve.value = T;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function qe() {
      B.value = !0;
      try {
        let T;
        if (Y.value === "SPOT") {
          const Le = be.value.find((tt) => tt.id === L.value);
          Le && (T = Z.value === "SECURE" ? Le.secureSpotPrice : Le.communitySpotPrice);
        }
        const R = await c({
          gpu_type_id: L.value,
          pod_name: q.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: Z.value,
          pricing_type: Y.value,
          spot_bid: T,
          import_source: ie.value
        });
        N.value = R, R.status === "success" && R.pod_id ? (Ve.value = R.pod_id, re.value = !0, ft(R.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", R.message, "error");
      } catch (T) {
        N.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        B.value = !1;
      }
    }
    function ft(T) {
      mt(T), V.value = window.setInterval(() => mt(T), 3e3);
    }
    function ut() {
      V.value && (clearInterval(V.value), V.value = null);
    }
    async function mt(T) {
      try {
        const R = await m(T);
        ze.value = R, (R.phase === "READY" || R.phase === "ERROR" || R.phase === "STOPPED") && (ut(), R.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (R) {
        console.error("Failed to poll deployment status:", R);
      }
    }
    function Pt() {
      re.value = !1, ut(), Ve.value = null, ze.value = null;
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
    function fe(T) {
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
        T.has_key && T.key_preview && (A.value = `****${T.key_preview}`, T.valid ? (I.value = !0, O.value = T.credit_balance ?? null, M.value = { type: "success", message: "Connected to RunPod" }, await K()) : T.error && (M.value = { type: "error", message: T.error }));
      } catch {
      }
    }), Xs(() => {
      ut();
    }), (T, R) => {
      var Le, tt, vt, st, xt, Et;
      return n(), i(H, null, [
        t("div", K4, [
          $(wt, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", q4, [
                t("div", Y4, [
                  t("div", J4, [
                    nt(t("input", {
                      "onUpdate:modelValue": R[0] || (R[0] = (Ge) => A.value = Ge),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, Q4), [
                      [pa, A.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: R[1] || (R[1] = (Ge) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, d(S.value ? "👁" : "👁‍🗨"), 9, X4)
                  ]),
                  I.value ? y("", !0) : (n(), D(_e, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: P.value,
                    disabled: !A.value || P.value,
                    onClick: Re
                  }, {
                    default: g(() => [...R[16] || (R[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (n(), D(_e, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: X
                  }, {
                    default: g(() => [...R[17] || (R[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                M.value ? (n(), i("div", {
                  key: 0,
                  class: Me(["connection-status", M.value.type])
                }, [
                  t("span", Z4, d(M.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", eI, d(M.value.message), 1),
                  O.value !== null ? (n(), i("span", tI, " $" + d(O.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                R[18] || (R[18] = t("div", { class: "api-key-help" }, [
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
          I.value ? (n(), D(wt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", sI, [
                t("div", oI, [
                  R[19] || (R[19] = t("label", { class: "config-label" }, "Region", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": R[2] || (R[2] = (Ge) => j.value = Ge),
                    class: "config-select",
                    disabled: ce.value
                  }, [
                    ce.value ? (n(), i("option", aI, "Loading...")) : j.value ? y("", !0) : (n(), i("option", lI, "Select a region")),
                    (n(!0), i(H, null, we(he.value, (Ge) => (n(), i("option", {
                      key: Ge.id,
                      value: Ge.id,
                      disabled: !Ge.available
                    }, d(Ge.id) + " (" + d(Ge.name) + ")" + d(Ge.available ? "" : " [Unavailable]"), 9, iI))), 128))
                  ], 8, nI), [
                    [Ss, j.value]
                  ])
                ]),
                t("div", rI, [
                  R[24] || (R[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ce.value ? (n(), i("div", uI, "Loading volumes...")) : ee.value.length === 0 ? (n(), i(H, { key: 1 }, [
                    t("div", cI, [
                      R[20] || (R[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", dI, "No volumes in " + d(j.value || "this region"), 1)
                    ]),
                    R[21] || (R[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    R[22] || (R[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(H, { key: 2 }, [
                    nt(t("select", {
                      "onUpdate:modelValue": R[3] || (R[3] = (Ge) => E.value = Ge),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, we(ee.value, (Ge) => (n(), i("option", {
                        key: Ge.id,
                        value: Ge.id
                      }, d(Ge.name) + " (" + d(Ge.size_gb) + "GB) ", 9, mI))), 128))
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
                t("div", fI, [
                  R[25] || (R[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": R[4] || (R[4] = (Ge) => L.value = Ge),
                    class: "config-select",
                    disabled: ue.value || !E.value
                  }, [
                    E.value ? ue.value ? (n(), i("option", gI, "Loading GPUs...")) : ae.value.length === 0 ? (n(), i("option", hI, "No GPUs available in this region")) : y("", !0) : (n(), i("option", pI, "Select a volume first")),
                    (n(!0), i(H, null, we(ae.value, (Ge) => (n(), i("option", {
                      key: Ge.id,
                      value: Ge.id
                    }, d(Ge.displayName) + " (" + d(Ge.memoryInGb) + "GB) - $" + d(Z.value === "SECURE" ? (Ge.securePrice ?? 0).toFixed(2) : (Ge.communityPrice ?? 0).toFixed(2)) + "/hr " + d(Ge.stockStatus ? `[${Ge.stockStatus}]` : ""), 9, yI))), 128))
                  ], 8, vI), [
                    [Ss, L.value]
                  ])
                ]),
                t("div", wI, [
                  R[26] || (R[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", _I, [
                    t("label", kI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[5] || (R[5] = (Ge) => Z.value = Ge),
                        value: "SECURE"
                      }, null, 512), [
                        [ds, Z.value]
                      ]),
                      t("span", bI, "Secure ($" + d(Pe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", $I, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[6] || (R[6] = (Ge) => Z.value = Ge),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ds, Z.value]
                      ]),
                      t("span", CI, "Community ($" + d(Pe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", xI, [
                  R[27] || (R[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", SI, [
                    t("label", II, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[7] || (R[7] = (Ge) => Y.value = Ge),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ds, Y.value]
                      ]),
                      t("span", EI, "On-Demand ($" + d(Pe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", TI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[8] || (R[8] = (Ge) => Y.value = Ge),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ds, Y.value]
                      ]),
                      t("span", PI, "Spot ($" + d(Pe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", RI, [
                  R[28] || (R[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  nt(t("input", {
                    "onUpdate:modelValue": R[9] || (R[9] = (Ge) => q.value = Ge),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [es, q.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (n(), D(wt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              Q.value ? (n(), i("div", MI, "Loading remotes...")) : te.value.length === 0 ? (n(), i("div", DI, [
                R[30] || (R[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                $(_e, {
                  variant: "primary",
                  size: "xs",
                  onClick: R[10] || (R[10] = (Ge) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...R[29] || (R[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", LI, [
                  (n(!0), i(H, null, we(te.value, (Ge) => (n(), D(nu, {
                    key: Ge.name,
                    remote: Ge,
                    "sync-status": W.value[Ge.name],
                    "is-selected": le.value === Ge.name,
                    "is-fetching": Ue.value === Ge.name,
                    "is-pushing": ne.value === Ge.name,
                    onFetch: Ie,
                    onPush: Se,
                    onSelect: Oe
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                de.value && de.value.ahead > 0 ? (n(), i("div", NI, [
                  R[31] || (R[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", UI, [
                    t("strong", null, d(de.value.ahead) + " unpushed commit" + d(de.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(le.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  $(_e, {
                    variant: "primary",
                    size: "xs",
                    loading: ne.value === le.value,
                    onClick: R[11] || (R[11] = (Ge) => le.value && Se(le.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + d(le.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", OI, [
                  $(_e, {
                    variant: "link",
                    size: "xs",
                    onClick: R[12] || (R[12] = (Ge) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...R[32] || (R[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (n(), D(wt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", AI, [
                me.value ? (n(), i("div", zI, "Loading environment summary...")) : F.value ? (n(), i(H, { key: 1 }, [
                  t("div", VI, [
                    R[33] || (R[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", FI, d(F.value.comfyui_version), 1)
                  ]),
                  t("div", BI, [
                    R[34] || (R[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", WI, d(F.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", GI, [
                    R[35] || (R[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", jI, d(F.value.model_count) + " models", 1)
                  ]),
                  F.value.models_with_sources > 0 ? (n(), i("div", HI, [
                    t("span", KI, "└─ " + d(F.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  F.value.models_without_sources > 0 ? (n(), i("div", qI, [
                    t("span", YI, "└─ " + d(F.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", JI, [
                    R[36] || (R[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", QI, d(F.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", XI, [
                    R[37] || (R[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", ZI, "~" + d(F.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && ge.value ? (n(), D(wt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var Ge, is;
              return [
                t("div", e6, [
                  t("div", t6, [
                    t("div", s6, [
                      R[42] || (R[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", o6, [
                        R[38] || (R[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", n6, "$" + d(ge.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", a6, [
                        R[39] || (R[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", l6, "$" + d(ge.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", i6, [
                        R[40] || (R[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", r6, "$" + d(ge.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      R[43] || (R[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", u6, [
                        R[41] || (R[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", c6, "~$" + d(ge.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", d6, [
                      R[45] || (R[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", m6, [
                        t("span", null, d(((Ge = be.value.find((ys) => ys.id === L.value)) == null ? void 0 : Ge.displayName) || "GPU") + " (" + d(((is = be.value.find((ys) => ys.id === L.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", f6, [
                        t("span", null, "Region: " + d(j.value), 1)
                      ]),
                      z.value ? (n(), i("div", v6, [
                        t("span", null, "Volume: " + d(z.value.name), 1)
                      ])) : y("", !0),
                      Y.value === "SPOT" ? (n(), i("div", p6, [...R[44] || (R[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (n(), i("div", g6, [
            $(_e, {
              variant: "primary",
              size: "md",
              loading: J.value || B.value,
              disabled: !Ne.value,
              onClick: Be
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
                b(" " + d(J.value ? "Validating..." : B.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          N.value ? (n(), D(wt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              $(Lt, {
                status: N.value.status === "success" ? "synced" : "broken"
              }, fo({
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
                    onClick: R[13] || (R[13] = (Ge) => N.value = null)
                  }, {
                    default: g(() => [...R[47] || (R[47] = [
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
                    $(bt, {
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
          "show-close-button": ((Le = ze.value) == null ? void 0 : Le.phase) === "READY" || ((tt = ze.value) == null ? void 0 : tt.phase) === "ERROR" || ((vt = ze.value) == null ? void 0 : vt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Pt
        }, fo({
          body: g(() => {
            var Ge, is, ys, vo, po, go, Zs, ho, yo, wo, _o, ko;
            return [
              t("div", h6, [
                t("div", y6, [
                  t("div", {
                    class: Me(["phase-icon", (is = (Ge = ze.value) == null ? void 0 : Ge.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ys = ze.value) == null ? void 0 : ys.phase) === "READY" ? (n(), i("span", w6, "✓")) : ((vo = ze.value) == null ? void 0 : vo.phase) === "ERROR" ? (n(), i("span", _6, "✕")) : ((po = ze.value) == null ? void 0 : po.phase) === "STOPPED" ? (n(), i("span", k6, "○")) : (n(), i("span", b6, "⟳"))
                  ], 2),
                  t("div", $6, [
                    t("div", C6, d(Ot((go = ze.value) == null ? void 0 : go.phase)), 1),
                    t("div", x6, d(((Zs = ze.value) == null ? void 0 : Zs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                $(ga, {
                  progress: fe((ho = ze.value) == null ? void 0 : ho.phase),
                  variant: ((yo = ze.value) == null ? void 0 : yo.phase) === "ERROR" ? "error" : ((wo = ze.value) == null ? void 0 : wo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((_o = ze.value) == null ? void 0 : _o.phase) === "READY" ? (n(), i("div", S6, [
                  $(_e, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: g(() => [...R[48] || (R[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", I6, [
                  (ko = ze.value) != null && ko.console_url ? (n(), i("a", {
                    key: 0,
                    href: ze.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, E6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((st = ze.value) == null ? void 0 : st.phase) === "READY" || ((xt = ze.value) == null ? void 0 : xt.phase) === "ERROR" || ((Et = ze.value) == null ? void 0 : Et.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              $(_e, {
                variant: "ghost",
                size: "xs",
                onClick: Pt
              }, {
                default: g(() => [...R[49] || (R[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        Ee.value && ve.value ? (n(), D(eu, {
          key: 1,
          issues: ve.value.blocking_issues,
          onClose: R[14] || (R[14] = (Ge) => Ee.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        G.value && ve.value ? (n(), D(tu, {
          key: 2,
          models: ve.value.warnings.models_without_sources,
          onConfirm: We,
          onCancel: R[15] || (R[15] = (Ge) => G.value = !1),
          onRevalidate: et
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), P6 = /* @__PURE__ */ xe(T6, [["__scopeId", "data-v-522cd4d9"]]), R6 = { class: "worker-header" }, M6 = { class: "worker-status" }, D6 = { class: "worker-name" }, L6 = { class: "worker-actions" }, N6 = { class: "worker-details" }, U6 = { class: "detail-item" }, O6 = { class: "detail-value" }, A6 = {
  key: 0,
  class: "detail-item"
}, z6 = { class: "detail-value" }, V6 = {
  key: 1,
  class: "detail-item"
}, F6 = { class: "detail-value mode-badge" }, B6 = {
  key: 0,
  class: "worker-stats"
}, W6 = {
  key: 0,
  class: "stat-item"
}, G6 = { key: 0 }, j6 = {
  key: 1,
  class: "worker-stats offline"
}, H6 = /* @__PURE__ */ $e({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Me(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", R6, [
        t("div", M6, [
          t("span", {
            class: Me(["status-dot", e.worker.status])
          }, null, 2),
          t("span", D6, d(e.worker.name), 1)
        ]),
        t("div", L6, [
          e.worker.status === "online" ? (n(), D(_e, {
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
      t("div", N6, [
        t("span", U6, [
          t("span", O6, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", A6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", z6, d(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", V6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", F6, d(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", B6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", W6, [
          b(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", G6, "(" + d(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", j6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), K6 = /* @__PURE__ */ xe(H6, [["__scopeId", "data-v-b1be7134"]]), q6 = { class: "add-worker-content" }, Y6 = { class: "manual-form" }, J6 = { class: "form-row" }, Q6 = { class: "form-row-inline" }, X6 = { class: "form-field flex-2" }, Z6 = { class: "form-field flex-1" }, eE = { class: "form-row" }, tE = { class: "api-key-wrapper" }, sE = ["type"], oE = { class: "result-icon" }, nE = { class: "result-content" }, aE = { class: "result-message" }, lE = {
  key: 0,
  class: "result-detail"
}, iE = { class: "modal-actions" }, rE = /* @__PURE__ */ $e({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = it(), l = Qs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = k(!1), u = k(!1), c = k(!1), m = k(null), f = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
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
    return (h, w) => (n(), D(Ct, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (x) => h.$emit("close"))
    }, {
      body: g(() => [
        t("div", q6, [
          t("div", Y6, [
            t("div", J6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              nt(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [es, l.name]
              ])
            ]),
            t("div", Q6, [
              t("div", X6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [es, l.host]
                ])
              ]),
              t("div", Z6, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                nt(t("input", {
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
            t("div", eE, [
              w[9] || (w[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", tE, [
                nt(t("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (x) => l.apiKey = x),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, sE), [
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
              class: Me(["test-result", m.value.type])
            }, [
              t("span", oE, d(m.value.type === "success" ? "✓" : "✕"), 1),
              t("div", nE, [
                t("span", aE, d(m.value.message), 1),
                m.value.gpu_info ? (n(), i("span", lE, "GPU: " + d(m.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", iE, [
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
}), uE = /* @__PURE__ */ xe(rE, [["__scopeId", "data-v-07a00732"]]), cE = { class: "discovered-content" }, dE = {
  key: 0,
  class: "workers-list"
}, mE = { class: "worker-info" }, fE = { class: "worker-name" }, vE = { class: "worker-address" }, pE = {
  key: 0,
  class: "worker-gpu"
}, gE = {
  key: 1,
  class: "empty-state"
}, hE = {
  key: 2,
  class: "api-key-section"
}, yE = { class: "selected-worker" }, wE = { class: "selected-name" }, _E = { class: "selected-address" }, kE = { class: "form-row" }, bE = { class: "api-key-wrapper" }, $E = ["type"], CE = { class: "result-icon" }, xE = { class: "result-message" }, SE = { class: "modal-actions" }, IE = /* @__PURE__ */ $e({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = it(), l = k(null), r = k(""), u = k(!1), c = k(!1), m = k(null), f = k(null);
    async function v(_) {
      var h;
      l.value = _, r.value = "", f.value = null, await Rt(), (h = m.value) == null || h.focus();
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
    return (_, h) => (n(), D(Ct, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: h[3] || (h[3] = (w) => _.$emit("close"))
    }, {
      body: g(() => [
        t("div", cE, [
          e.workers.length > 0 ? (n(), i("div", dE, [
            (n(!0), i(H, null, we(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", mE, [
                t("span", fE, d(w.name), 1),
                t("span", vE, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", pE, d(w.gpu_info), 1)) : y("", !0)
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
          ])) : (n(), i("div", gE, [...h[5] || (h[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", hE, [
            t("div", yE, [
              h[6] || (h[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", wE, d(l.value.name), 1),
              t("span", _E, "(" + d(l.value.host) + ":" + d(l.value.port) + ")", 1)
            ]),
            t("div", kE, [
              h[7] || (h[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", bE, [
                nt(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
                  type: u.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: as(p, ["enter"])
                }, null, 40, $E), [
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
              class: Me(["test-result", f.value.type])
            }, [
              t("span", CE, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", xE, d(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", SE, [
          l.value ? (n(), D(_e, {
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
          l.value ? (n(), D(_e, {
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
}), EE = /* @__PURE__ */ xe(IE, [["__scopeId", "data-v-5a3e40a4"]]), TE = { class: "deploy-content" }, PE = { class: "section" }, RE = {
  key: 0,
  class: "loading-text"
}, ME = {
  key: 1,
  class: "empty-remotes"
}, DE = {
  key: 2,
  class: "remotes-list"
}, LE = { class: "section" }, NE = { class: "mode-options" }, UE = { class: "mode-option" }, OE = ["disabled"], AE = { class: "mode-option" }, zE = { class: "section" }, VE = {
  key: 0,
  class: "section"
}, FE = { class: "summary-row" }, BE = {
  key: 1,
  class: "sync-warning"
}, WE = { class: "warning-content" }, GE = { class: "modal-actions" }, jE = /* @__PURE__ */ $e({
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
    } = it(), v = k([]), p = k({}), _ = k(!1), h = k(null), w = k(null), x = k(null), C = k(o.worker.mode || "native"), S = k(""), A = k(null), I = k(!1), P = U(() => h.value && p.value[h.value] || null), M = U(() => {
      if (!h.value) return null;
      const te = v.value.find((W) => W.name === h.value);
      return (te == null ? void 0 : te.fetch_url) || null;
    }), O = U(() => M.value && !I.value);
    async function j() {
      _.value = !0;
      try {
        const te = await l();
        v.value = te.remotes, await Promise.all(
          te.remotes.map(async (Q) => {
            const le = await r(Q.name);
            le && (p.value[Q.name] = le);
          })
        );
        const W = te.remotes.find((Q) => Q.is_default);
        W ? h.value = W.name : te.remotes.length > 0 && (h.value = te.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        _.value = !1;
      }
    }
    async function E() {
      try {
        A.value = await m();
      } catch {
      }
    }
    async function L(te) {
      w.value = te;
      try {
        await u(te);
        const W = await r(te);
        W && (p.value[te] = W), a("toast", `Fetched from ${te}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function Z(te) {
      x.value = te;
      try {
        await c(te, { force: !1 });
        const W = await r(te);
        W && (p.value[te] = W), a("toast", `Pushed to ${te}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function Y(te) {
      h.value = te;
    }
    async function q() {
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
    }), (te, W) => (n(), D(Ct, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: W[5] || (W[5] = (Q) => te.$emit("close"))
    }, {
      body: g(() => [
        t("div", TE, [
          t("div", PE, [
            W[7] || (W[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            _.value ? (n(), i("div", RE, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", ME, [...W[6] || (W[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", DE, [
              (n(!0), i(H, null, we(v.value, (Q) => (n(), D(nu, {
                key: Q.name,
                remote: Q,
                "sync-status": p.value[Q.name],
                "is-selected": h.value === Q.name,
                "is-fetching": w.value === Q.name,
                "is-pushing": x.value === Q.name,
                onFetch: L,
                onPush: Z,
                onSelect: Y
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", LE, [
            W[10] || (W[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", NE, [
              t("label", UE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": W[0] || (W[0] = (Q) => C.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, OE), [
                  [ds, C.value]
                ]),
                W[8] || (W[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", AE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": W[1] || (W[1] = (Q) => C.value = Q),
                  value: "native"
                }, null, 512), [
                  [ds, C.value]
                ]),
                W[9] || (W[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", zE, [
            W[11] || (W[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            nt(t("input", {
              "onUpdate:modelValue": W[2] || (W[2] = (Q) => S.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [es, S.value]
            ])
          ]),
          A.value ? (n(), i("div", VE, [
            W[12] || (W[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", FE, " ComfyUI: " + d(A.value.comfyui_version) + " • " + d(A.value.node_count) + " nodes • " + d(A.value.model_count) + " models • " + d(A.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          P.value && P.value.ahead > 0 ? (n(), i("div", BE, [
            W[14] || (W[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", WE, [
              t("strong", null, d(P.value.ahead) + " unpushed commit" + d(P.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(h.value) + "' before deploying to include your latest changes.", 1)
            ]),
            $(_e, {
              variant: "primary",
              size: "xs",
              loading: x.value === h.value,
              onClick: W[3] || (W[3] = (Q) => h.value && Z(h.value))
            }, {
              default: g(() => [...W[13] || (W[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", GE, [
          $(_e, {
            variant: "ghost",
            size: "sm",
            onClick: W[4] || (W[4] = (Q) => te.$emit("close"))
          }, {
            default: g(() => [...W[15] || (W[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(_e, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !O.value || I.value,
            onClick: q
          }, {
            default: g(() => [...W[16] || (W[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), HE = /* @__PURE__ */ xe(jE, [["__scopeId", "data-v-c12720d3"]]), KE = { class: "custom-tab" }, qE = { class: "section-header" }, YE = { class: "section-actions" }, JE = { class: "workers-content" }, QE = {
  key: 0,
  class: "loading-state"
}, XE = {
  key: 1,
  class: "empty-state"
}, ZE = {
  key: 2,
  class: "workers-list"
}, eT = { class: "scan-icon" }, tT = { class: "scan-message" }, sT = /* @__PURE__ */ $e({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: u
    } = it(), c = k([]), m = k([]), f = k(!1), v = k(!1), p = k(null), _ = k(!1), h = k(!1), w = k(null), x = k(null);
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
          (L) => !c.value.some((Z) => Z.host === L.host && Z.port === L.port)
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
    async function A(j) {
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
    function O() {
      w.value = null, o("deployed");
    }
    return at(() => {
      C();
    }), (j, E) => (n(), i("div", KE, [
      t("div", qE, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", YE, [
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
      t("div", JE, [
        f.value && c.value.length === 0 ? (n(), i("div", QE, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : c.value.length === 0 ? (n(), i("div", XE, [...E[10] || (E[10] = [
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
        ])])) : (n(), i("div", ZE, [
          (n(!0), i(H, null, we(c.value, (L) => (n(), D(K6, {
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
        class: Me(["scan-result", x.value.type])
      }, [
        t("span", eT, d(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", tT, d(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (L) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      h.value ? (n(), D(EE, {
        key: 1,
        workers: m.value,
        onClose: E[2] || (E[2] = (L) => h.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      _.value ? (n(), D(uE, {
        key: 2,
        onClose: E[3] || (E[3] = (L) => _.value = !1),
        onAdd: A
      })) : y("", !0),
      w.value ? (n(), D(HE, {
        key: 3,
        worker: w.value,
        onClose: E[4] || (E[4] = (L) => w.value = null),
        onToast: E[5] || (E[5] = (L, Z) => o("toast", L, Z)),
        onDeployed: O
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), oT = /* @__PURE__ */ xe(sT, [["__scopeId", "data-v-1637dead"]]), Ua = "ComfyGit.Deploy.GitHubPAT";
function au(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function nT(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function aT() {
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
    isRemoteHttps: nT
  };
}
const lT = { class: "settings-content" }, iT = { class: "settings-section" }, rT = {
  key: 0,
  class: "ssh-warning"
}, uT = { class: "form-row" }, cT = { class: "token-wrapper" }, dT = ["type"], mT = { class: "result-icon" }, fT = { class: "result-message" }, vT = { class: "token-actions" }, pT = /* @__PURE__ */ $e({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: u } = aT(), { getRemotes: c, testGitAuth: m } = it(), f = k(""), v = k(!1), p = k(!1), _ = k(null), h = k(!1), w = U(() => u());
    at(async () => {
      var I;
      const A = a();
      A && (f.value = A);
      try {
        const M = (I = (await c()).remotes) == null ? void 0 : I.find((O) => O.name === "origin");
        M && au(M.url) && (h.value = !0);
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
    function C() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function S() {
      r(), f.value = "", _.value = null;
    }
    return (A, I) => (n(), D(Ct, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (P) => A.$emit("close"))
    }, {
      body: g(() => [
        t("div", lT, [
          t("div", iT, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            h.value ? (n(), i("div", rT, [...I[3] || (I[3] = [
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
            t("div", uT, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", cT, [
                nt(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (P) => f.value = P),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, dT), [
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
              class: Me(["test-result", _.value.type])
            }, [
              t("span", mT, d(_.value.type === "success" ? "✓" : "✕"), 1),
              t("span", fT, d(_.value.message), 1)
            ], 2)) : y("", !0),
            t("div", vT, [
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
              w.value ? (n(), D(_e, {
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
}), gT = /* @__PURE__ */ xe(pT, [["__scopeId", "data-v-b21588ad"]]), hT = /* @__PURE__ */ $e({
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
    } = ou(), _ = k(!1), h = k(!1), w = k("instances"), x = k(null), C = k(null), S = U(() => [
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
    async function A(j) {
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
    async function O() {
      await u(), w.value = "instances";
    }
    return at(() => {
      u(), v();
    }), Xs(() => {
      p();
    }), (j, E) => (n(), i(H, null, [
      $(Kt, null, {
        header: g(() => [
          $(qt, {
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
          w.value === "instances" ? (n(), D(D4, {
            key: 0,
            instances: Xe(a),
            "is-loading": Xe(l),
            "action-loading-id": x.value,
            onRefresh: Xe(u),
            onStop: A,
            onStart: I,
            onTerminate: P
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          w.value === "runpod" ? (n(), D(P6, {
            key: 1,
            onToast: E[3] || (E[3] = (L, Z) => o("toast", L, Z)),
            onNavigate: E[4] || (E[4] = (L) => o("navigate", L)),
            onDeployed: O
          })) : y("", !0),
          w.value === "custom" ? (n(), D(oT, {
            key: 2,
            onToast: E[5] || (E[5] = (L, Z) => o("toast", L, Z)),
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
      h.value ? (n(), D(gT, {
        key: 1,
        onClose: E[8] || (E[8] = (L) => h.value = !1),
        onSaved: E[9] || (E[9] = (L) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), yT = /* @__PURE__ */ xe(hT, [["__scopeId", "data-v-d4e32a10"]]), wT = { class: "header-info" }, _T = { class: "commit-hash" }, kT = {
  key: 0,
  class: "commit-refs"
}, bT = { class: "commit-message" }, $T = { class: "commit-date" }, CT = {
  key: 0,
  class: "loading"
}, xT = {
  key: 1,
  class: "changes-section"
}, ST = { class: "stats-row" }, IT = { class: "stat" }, ET = { class: "stat insertions" }, TT = { class: "stat deletions" }, PT = {
  key: 0,
  class: "change-group"
}, RT = {
  key: 1,
  class: "change-group"
}, MT = {
  key: 0,
  class: "version"
}, DT = {
  key: 2,
  class: "change-group"
}, LT = { class: "change-item" }, NT = /* @__PURE__ */ $e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = it(), a = k(null), l = k(!0), r = U(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = U(() => {
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
    }), (c, m) => (n(), D(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (f) => c.$emit("close"))
    }, {
      header: g(() => {
        var f, v, p, _;
        return [
          t("div", wT, [
            m[4] || (m[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", _T, d(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (_ = (p = a.value) == null ? void 0 : p.refs) != null && _.length ? (n(), i("span", kT, [
              (n(!0), i(H, null, we(a.value.refs, (h) => (n(), i("span", {
                key: h,
                class: "ref-badge"
              }, d(h), 1))), 128))
            ])) : y("", !0)
          ]),
          $(De, {
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
          t("div", bT, d(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          t("div", $T, d(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", CT, "Loading details...")) : a.value ? (n(), i("div", xT, [
            t("div", ST, [
              t("span", IT, d(a.value.stats.files_changed) + " files", 1),
              t("span", ET, "+" + d(a.value.stats.insertions), 1),
              t("span", TT, "-" + d(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", PT, [
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
            u.value ? (n(), i("div", RT, [
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
                p.version ? (n(), i("span", MT, "(" + d(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, we(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", DT, [
              $(Ls, { variant: "section" }, {
                default: g(() => [...m[13] || (m[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", LT, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        $(De, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => c.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(De, {
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
}), UT = /* @__PURE__ */ xe(NT, [["__scopeId", "data-v-d256ff6d"]]), OT = { class: "popover-header" }, AT = { class: "popover-body" }, zT = {
  key: 0,
  class: "changes-summary"
}, VT = {
  key: 0,
  class: "change-item"
}, FT = {
  key: 1,
  class: "change-item"
}, BT = {
  key: 2,
  class: "change-item"
}, WT = {
  key: 3,
  class: "change-item"
}, GT = {
  key: 4,
  class: "change-item"
}, jT = {
  key: 5,
  class: "change-item"
}, HT = {
  key: 1,
  class: "no-changes"
}, KT = {
  key: 2,
  class: "loading"
}, qT = {
  key: 3,
  class: "issues-error"
}, YT = { class: "error-header" }, JT = { class: "error-title" }, QT = { class: "issues-list" }, XT = { class: "workflow-state" }, ZT = { class: "message-section" }, eP = { class: "popover-footer" }, tP = {
  key: 1,
  class: "commit-popover"
}, sP = { class: "popover-header" }, oP = { class: "popover-body" }, nP = {
  key: 0,
  class: "changes-summary"
}, aP = {
  key: 0,
  class: "change-item"
}, lP = {
  key: 1,
  class: "change-item"
}, iP = {
  key: 2,
  class: "change-item"
}, rP = {
  key: 3,
  class: "change-item"
}, uP = {
  key: 4,
  class: "change-item"
}, cP = {
  key: 5,
  class: "change-item"
}, dP = {
  key: 1,
  class: "no-changes"
}, mP = {
  key: 2,
  class: "loading"
}, fP = {
  key: 3,
  class: "issues-error"
}, vP = { class: "error-header" }, pP = { class: "error-title" }, gP = { class: "issues-list" }, hP = { class: "workflow-state" }, yP = { class: "message-section" }, wP = { class: "popover-footer" }, _P = /* @__PURE__ */ $e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = it(), r = k(""), u = k(!1), c = k(!1), m = U(() => {
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
    }), p = U(() => v.value.length > 0), _ = U(() => p.value && !c.value);
    async function h() {
      var w, x, C, S;
      if (!(p.value && !c.value) && !(!m.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const A = await l(r.value.trim(), c.value);
          if (A.status === "success") {
            const I = `Committed: ${((w = A.summary) == null ? void 0 : w.new) || 0} new, ${((x = A.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = A.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: I });
          } else if (A.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (A.status === "blocked") {
            const I = ((S = A.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: A.message || "Commit failed" });
        } catch (A) {
          a("committed", { success: !1, message: A instanceof Error ? A.message : "Commit failed" });
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
          onClick: x[4] || (x[4] = pt(() => {
          }, ["stop"]))
        }, [
          t("div", OT, [
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
          t("div", AT, [
            e.status && m.value ? (n(), i("div", zT, [
              e.status.workflows.new.length ? (n(), i("div", VT, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", FT, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", BT, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", WT, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", GT, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (n(), i("div", jT, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", HT, " No changes to commit ")) : (n(), i("div", KT, " Loading... ")),
            p.value ? (n(), i("div", qT, [
              t("div", YT, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", JT, d(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", QT, [
                (n(!0), i(H, null, we(v.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d(C.name), 1),
                  t("span", XT, "(" + d(C.sync_state) + ")", 1),
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
            t("div", ZT, [
              $(yn, {
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
          t("div", eP, [
            $(De, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(De, {
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
    ])) : (n(), i("div", tP, [
      t("div", sP, [
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
      t("div", oP, [
        e.status && m.value ? (n(), i("div", nP, [
          e.status.workflows.new.length ? (n(), i("div", aP, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", lP, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", iP, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", rP, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", uP, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (n(), i("div", cP, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", dP, " No changes to commit ")) : (n(), i("div", mP, " Loading... ")),
        p.value ? (n(), i("div", fP, [
          t("div", vP, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", pP, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", gP, [
            (n(!0), i(H, null, we(v.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, d(C.name), 1),
              t("span", hP, "(" + d(C.sync_state) + ")", 1),
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
        t("div", yP, [
          $(yn, {
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
      t("div", wP, [
        $(De, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(De, {
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
}), lu = /* @__PURE__ */ xe(_P, [["__scopeId", "data-v-5f897631"]]), kP = { class: "modal-header" }, bP = { class: "modal-body" }, $P = { class: "switch-message" }, CP = { class: "switch-details" }, xP = { class: "modal-actions" }, SP = /* @__PURE__ */ $e({
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
          onClick: o[3] || (o[3] = pt(() => {
          }, ["stop"]))
        }, [
          t("div", kP, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", bP, [
            t("p", $P, [
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
            t("p", CP, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", xP, [
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
}), IP = /* @__PURE__ */ xe(SP, [["__scopeId", "data-v-e9c5253e"]]), EP = {
  key: 0,
  class: "modal-overlay"
}, TP = { class: "modal-content" }, PP = { class: "modal-body" }, RP = { class: "progress-info" }, MP = { class: "progress-percentage" }, DP = { class: "progress-state" }, LP = { class: "switch-steps" }, NP = { class: "step-icon" }, UP = { class: "step-label" }, OP = /* @__PURE__ */ $e({
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
      e.show ? (n(), i("div", EP, [
        t("div", TP, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", PP, [
            $(ga, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", RP, [
              t("div", MP, d(e.progress) + "%", 1),
              t("div", DP, d(o.value), 1)
            ]),
            t("div", LP, [
              (n(!0), i(H, null, we(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: Me(["switch-step", c.status])
              }, [
                t("span", NP, d(c.icon), 1),
                t("span", UP, d(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), AP = /* @__PURE__ */ xe(OP, [["__scopeId", "data-v-768a5078"]]), zP = { class: "modal-header" }, VP = { class: "modal-body" }, FP = {
  key: 0,
  class: "node-section"
}, BP = { class: "node-list" }, WP = {
  key: 1,
  class: "node-section"
}, GP = { class: "node-list" }, jP = { class: "modal-actions" }, HP = /* @__PURE__ */ $e({
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
          onClick: o[3] || (o[3] = pt(() => {
          }, ["stop"]))
        }, [
          t("div", zP, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", VP, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", FP, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", BP, [
                (n(!0), i(H, null, we(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", WP, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", GP, [
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
          t("div", jP, [
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
}), KP = /* @__PURE__ */ xe(HP, [["__scopeId", "data-v-7cad7518"]]), qP = [
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
], Nn = "v0.0.24", YP = "Akatz", JP = { class: "social-buttons" }, QP = ["title", "aria-label", "onClick"], XP = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ZP = ["d"], e7 = ["title", "aria-label", "onClick"], t7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, s7 = ["d"], o7 = /* @__PURE__ */ $e({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", JP, [
      (n(!0), i(H, null, we(Xe(qP), (l) => (n(), i(H, {
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
          (n(), i("svg", XP, [
            t("path", {
              d: l.iconPath
            }, null, 8, ZP)
          ]))
        ], 8, QP)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", t7, [
            t("path", {
              d: l.iconPath
            }, null, 8, s7)
          ]))
        ], 8, e7))
      ], 64))), 128))
    ]));
  }
}), iu = /* @__PURE__ */ xe(o7, [["__scopeId", "data-v-4f846342"]]), n7 = { class: "footer-info" }, a7 = ["title"], l7 = {
  key: 0,
  class: "dev-badge"
}, i7 = { class: "made-by" }, r7 = /* @__PURE__ */ $e({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = it(), o = k(null), a = k(null), l = k(null), r = U(() => o.value === "development"), u = U(() => {
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
    }), (c, m) => (n(), i("div", n7, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        b(d(Xe(Nn)) + " ", 1),
        r.value ? (n(), i("span", l7, "dev")) : y("", !0)
      ], 8, a7),
      t("span", i7, [
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
        b(" by " + d(Xe(YP)), 1)
      ])
    ]));
  }
}), ru = /* @__PURE__ */ xe(r7, [["__scopeId", "data-v-4fa265b3"]]), u7 = /* @__PURE__ */ $e({
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
    return (r, u) => (n(), D(Ct, {
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
          $(De, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: g(() => [...u[2] || (u[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(De, {
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
}), c7 = /* @__PURE__ */ xe(u7, [["__scopeId", "data-v-fac00ae7"]]), d7 = { class: "header-actions" }, m7 = {
  key: 0,
  class: "wizard-step"
}, f7 = { class: "form-field" }, v7 = ["placeholder"], p7 = {
  key: 0,
  class: "form-error"
}, g7 = { class: "form-field form-field--checkbox" }, h7 = { class: "form-checkbox" }, y7 = {
  key: 0,
  class: "form-field"
}, w7 = ["placeholder"], _7 = {
  key: 0,
  class: "form-info"
}, k7 = {
  key: 1,
  class: "form-suggestion"
}, b7 = {
  key: 2,
  class: "form-error"
}, $7 = {
  key: 3,
  class: "form-info"
}, C7 = {
  key: 1,
  class: "wizard-step"
}, x7 = {
  key: 0,
  class: "progress-check-loading"
}, S7 = {
  key: 0,
  class: "cli-warning"
}, I7 = { class: "cli-warning-header" }, E7 = {
  key: 1,
  class: "env-landing"
}, T7 = { class: "env-list" }, P7 = ["value"], R7 = { class: "env-name" }, M7 = {
  key: 2,
  class: "env-create"
}, D7 = { class: "form-field" }, L7 = { class: "form-field" }, N7 = ["value"], U7 = { class: "form-field" }, O7 = ["disabled"], A7 = ["value"], z7 = { class: "form-field" }, V7 = ["value"], F7 = { class: "form-field form-field--checkbox" }, B7 = { class: "form-checkbox" }, W7 = {
  key: 0,
  class: "form-error"
}, G7 = {
  key: 1,
  class: "env-creating"
}, j7 = { class: "creating-intro" }, H7 = {
  key: 3,
  class: "env-import"
}, K7 = { class: "wizard-footer" }, q7 = { class: "wizard-footer-actions" }, Co = 10, Y7 = 600 * 1e3, gi = 1800 * 1e3, J7 = /* @__PURE__ */ $e({
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
    } = it(), p = k(o.initialStep || 1), _ = k(null), h = k("landing"), w = k(!1), x = k(!1), C = k(!1), S = k(!1), A = k(null), I = k(o.initialStep === 2), P = k(o.defaultPath), M = k(!!o.detectedModelsDir), O = k(o.detectedModelsDir || ""), j = k(null), E = k(null), L = k(null), Z = k(null), Y = k("my-new-env"), q = k(Xr), te = k("latest"), W = k(Zr), Q = k(!0), le = k(null), Ue = k(null), ne = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), he = k(!1), ce = k(!1), Ae = k(!1), Ce = k({ progress: 0, message: "" }), be = k({ progress: 0, message: "" }), ue = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = k(0), me = k(null), B = k(0), N = k(null), re = U(() => {
      var Ie, Se;
      const ge = (Ie = P.value) == null ? void 0 : Ie.trim(), K = !j.value, Fe = !M.value || !E.value && ((Se = O.value) == null ? void 0 : Se.trim());
      return ge && K && Fe;
    }), Ve = U(() => {
      var ge;
      return (ge = Y.value) == null ? void 0 : ge.trim();
    }), ze = U(() => !!(p.value === 2 || Ue.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), V = U(() => Ue.value || o.workspacePath || null);
    async function J() {
      var ge;
      if (j.value = null, !!((ge = P.value) != null && ge.trim()))
        try {
          const K = await u({ path: P.value, type: "workspace" });
          K.valid || (j.value = K.error || "Invalid path");
        } catch (K) {
          j.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ve() {
      var ge;
      if (E.value = null, L.value = null, Z.value = null, !!((ge = O.value) != null && ge.trim()))
        try {
          const K = await u({ path: O.value, type: "models" });
          if (K.valid)
            Z.value = K.model_count ?? null;
          else if (E.value = K.error || "Invalid path", K.suggestion) {
            L.value = K.suggestion, O.value = K.suggestion, E.value = null;
            const Fe = await u({ path: K.suggestion, type: "models" });
            Fe.valid && (Z.value = Fe.model_count ?? null);
          }
        } catch (K) {
          E.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ee() {
      var ge, K, Fe, Ie, Se;
      if (j.value = null, E.value = null, await J(), (ge = j.value) != null && ge.includes("already exists")) {
        j.value = null, Ue.value = ((K = P.value) == null ? void 0 : K.trim()) || o.defaultPath, p.value = 2, z();
        return;
      }
      if (!j.value && !(M.value && ((Fe = O.value) != null && Fe.trim()) && (await ve(), E.value))) {
        ce.value = !0;
        try {
          await l({
            workspace_path: ((Ie = P.value) == null ? void 0 : Ie.trim()) || o.defaultPath,
            models_directory: M.value && ((Se = O.value) == null ? void 0 : Se.trim()) || null
          }), F.value = 0, me.value = Date.now();
          const Oe = setInterval(async () => {
            var Re;
            if (me.value && Date.now() - me.value > Y7) {
              clearInterval(Oe), ce.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const X = await r();
              if (F.value = 0, X.state === "idle" && ce.value) {
                clearInterval(Oe), ce.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: X.progress, message: X.message }, X.state === "complete" ? (clearInterval(Oe), ce.value = !1, Ue.value = ((Re = P.value) == null ? void 0 : Re.trim()) || o.defaultPath, p.value = 2, z()) : X.state === "error" && (clearInterval(Oe), ce.value = !1, j.value = X.error || "Workspace creation failed");
            } catch (X) {
              F.value++, console.warn(`Polling failure ${F.value}/${Co}:`, X), F.value >= Co && (clearInterval(Oe), ce.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Oe) {
          ce.value = !1, j.value = Oe instanceof Error ? Oe.message : "Failed to create workspace";
        }
      }
    }
    async function G() {
      Ae.value = !0, le.value = null;
      try {
        const ge = {
          name: Y.value.trim() || "my-new-env",
          python_version: q.value,
          comfyui_version: te.value,
          torch_backend: W.value,
          switch_after: Q.value,
          workspace_path: Ue.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(ge)).status === "started") {
          B.value = 0, N.value = Date.now();
          const Fe = setInterval(async () => {
            if (N.value && Date.now() - N.value > gi) {
              clearInterval(Fe), Ae.value = !1, le.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ie = await m();
              if (B.value = 0, Ie.state === "idle" && Ae.value) {
                clearInterval(Fe), Ae.value = !1, le.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (be.value = {
                progress: Ie.progress ?? 0,
                message: Ie.message,
                phase: Ie.phase
              }, Ie.state === "complete") {
                clearInterval(Fe), Ae.value = !1;
                const Se = Ie.environment_name || ge.name;
                Q.value ? a("complete", Se, Ue.value) : (h.value = "landing", a("environment-created-no-switch", Se));
              } else Ie.state === "error" && (clearInterval(Fe), Ae.value = !1, le.value = Ie.error || "Environment creation failed");
            } catch (Ie) {
              B.value++, console.warn(`Polling failure ${B.value}/${Co}:`, Ie), B.value >= Co && (clearInterval(Fe), Ae.value = !1, le.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ge) {
        Ae.value = !1, le.value = ge instanceof Error ? ge.message : "Unknown error";
      }
    }
    async function z() {
      he.value = !0;
      try {
        ne.value = await v();
      } catch (ge) {
        console.error("Failed to load ComfyUI releases:", ge);
      } finally {
        he.value = !1;
      }
    }
    function ee() {
      _.value && a("switch-environment", _.value, Ue.value);
    }
    function ae() {
      h.value === "create" || h.value === "import" ? h.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function de(ge, K) {
      x.value = !1, K ? a("complete", ge, Ue.value) : (a("environment-created-no-switch", ge), h.value = "landing");
    }
    function ie() {
    }
    at(async () => {
      if (o.detectedModelsDir && (O.value = o.detectedModelsDir), o.workspacePath && (Ue.value = o.workspacePath), p.value === 2) {
        z();
        const ge = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Ne(), clearTimeout(ge), I.value = !1;
      }
    });
    async function Ne() {
      try {
        const ge = await m();
        if (console.log("[ComfyGit] Create progress check:", ge.state, ge), ge.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ge.environment_name), h.value = "create", Ae.value = !0, Y.value = ge.environment_name || "my-new-env", be.value = {
            progress: ge.progress ?? 0,
            message: ge.message,
            phase: ge.phase
          }, Pe();
          return;
        }
      } catch (ge) {
        console.log("[ComfyGit] Create progress check failed:", ge);
      }
      try {
        const ge = await f();
        console.log("[ComfyGit] Import progress check:", ge.state, ge), ge.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ge.environment_name), A.value = {
          message: ge.message || "Importing...",
          phase: ge.phase || "",
          progress: ge.progress ?? 0,
          environmentName: ge.environment_name || ""
        }, S.value = !0, h.value = "import", x.value = !0);
      } catch (ge) {
        console.log("[ComfyGit] Import progress check failed:", ge);
      }
    }
    async function Pe() {
      B.value = 0, N.value = Date.now();
      let ge = null;
      const K = async () => {
        if (N.value && Date.now() - N.value > gi)
          return ge && clearInterval(ge), Ae.value = !1, le.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ie = await m();
          if (B.value = 0, Ie.state === "idle" && Ae.value)
            return ge && clearInterval(ge), Ae.value = !1, le.value = "Environment creation was interrupted. Please try again.", !1;
          if (be.value = {
            progress: Ie.progress ?? 0,
            message: Ie.message,
            phase: Ie.phase
          }, Ie.state === "complete") {
            ge && clearInterval(ge), Ae.value = !1;
            const Se = Ie.environment_name || Y.value;
            return a("complete", Se, Ue.value), !1;
          } else if (Ie.state === "error")
            return ge && clearInterval(ge), Ae.value = !1, le.value = Ie.error || "Environment creation failed", !1;
          return !0;
        } catch (Ie) {
          return B.value++, console.warn(`Polling failure ${B.value}/${Co}:`, Ie), B.value >= Co ? (ge && clearInterval(ge), Ae.value = !1, le.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ge = setInterval(async () => {
        !await K() && ge && clearInterval(ge);
      }, 2e3));
    }
    return (ge, K) => (n(), i(H, null, [
      $(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Fe) => ge.$emit("close"))
      }, {
        header: g(() => [
          K[20] || (K[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", d7, [
            $(iu),
            K[19] || (K[19] = t("span", { class: "header-divider" }, null, -1)),
            ze.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Fe) => w.value = !0)
            }, [...K[17] || (K[17] = [
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
              onClick: K[1] || (K[1] = (Fe) => ge.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
          var Fe;
          return [
            p.value === 1 ? (n(), i("div", m7, [
              K[24] || (K[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", f7, [
                K[21] || (K[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (Ie) => P.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, v7), [
                  [es, P.value]
                ]),
                j.value ? (n(), i("p", p7, d(j.value), 1)) : y("", !0)
              ]),
              t("div", g7, [
                t("label", h7, [
                  nt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (Ie) => M.value = Ie)
                  }, null, 512), [
                    [hn, M.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (n(), i("div", y7, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (Ie) => O.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, w7), [
                  [es, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (n(), i("p", _7, " Detected: " + d(e.detectedModelsDir), 1)) : y("", !0),
                L.value ? (n(), i("p", k7, " Did you mean: " + d(L.value), 1)) : y("", !0),
                E.value ? (n(), i("p", b7, d(E.value), 1)) : y("", !0),
                Z.value !== null && !E.value ? (n(), i("p", $7, " Found " + d(Z.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ce.value ? (n(), D(ea, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", C7, [
              I.value ? (n(), i("div", x7, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", S7, [
                  t("div", I7, [
                    K[27] || (K[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (Ie) => C.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
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
                  K[29] || (K[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                h.value === "landing" ? (n(), i("div", E7, [
                  K[34] || (K[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (Ie) => h.value = "create")
                  }, [...K[31] || (K[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (Ie) => {
                      S.value = !1, h.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Fe = o.existingEnvironments) != null && Fe.length ? (n(), i(H, { key: 0 }, [
                    K[33] || (K[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", T7, [
                      (n(!0), i(H, null, we(o.existingEnvironments, (Ie) => (n(), i("label", {
                        key: Ie,
                        class: Me(["env-option", { selected: _.value === Ie }])
                      }, [
                        nt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ie,
                          "onUpdate:modelValue": K[8] || (K[8] = (Se) => _.value = Se)
                        }, null, 8, P7), [
                          [ds, _.value]
                        ]),
                        t("span", R7, d(Ie), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : h.value === "create" ? (n(), i("div", M7, [
                  Ae.value ? (n(), i("div", G7, [
                    t("p", j7, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      t("strong", null, d(Y.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    $(ea, {
                      progress: be.value.progress,
                      message: be.value.message,
                      "current-phase": be.value.phase,
                      "show-steps": !0,
                      steps: ue
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", D7, [
                      K[35] || (K[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      nt(t("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (Ie) => Y.value = Ie),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [es, Y.value]
                      ])
                    ]),
                    t("div", L7, [
                      K[36] || (K[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (Ie) => q.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, we(Xe(Qr), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, d(Ie), 9, N7))), 128))
                      ], 512), [
                        [Ss, q.value]
                      ])
                    ]),
                    t("div", U7, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (Ie) => te.value = Ie),
                        class: "form-select",
                        disabled: he.value
                      }, [
                        (n(!0), i(H, null, we(ne.value, (Ie) => (n(), i("option", {
                          key: Ie.tag_name,
                          value: Ie.tag_name
                        }, d(Ie.name), 9, A7))), 128))
                      ], 8, O7), [
                        [Ss, te.value]
                      ])
                    ]),
                    t("div", z7, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (Ie) => W.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, we(Xe(kl), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, d(Ie) + d(Ie === "auto" ? " (detect GPU)" : ""), 9, V7))), 128))
                      ], 512), [
                        [Ss, W.value]
                      ])
                    ]),
                    t("div", F7, [
                      t("label", B7, [
                        nt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (Ie) => Q.value = Ie)
                        }, null, 512), [
                          [hn, Q.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    le.value ? (n(), i("div", W7, d(le.value), 1)) : y("", !0)
                  ], 64))
                ])) : h.value === "import" ? (n(), i("div", H7, [
                  $(su, {
                    "workspace-path": Ue.value,
                    "resume-import": S.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: de,
                    onImportStarted: K[14] || (K[14] = (Ie) => x.value = !0),
                    onSourceCleared: ie
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", K7, [
            $(ru),
            t("div", q7, [
              p.value === 1 ? (n(), D(De, {
                key: 0,
                variant: "primary",
                disabled: !re.value || ce.value,
                onClick: Ee
              }, {
                default: g(() => [
                  b(d(ce.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(H, { key: 1 }, [
                !Ae.value && !x.value && (h.value !== "landing" || o.setupState === "no_workspace" && !Ue.value) ? (n(), D(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: ae
                }, {
                  default: g(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                h.value === "create" ? (n(), D(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || Ae.value,
                  onClick: G
                }, {
                  default: g(() => [
                    b(d(Ae.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                h.value === "landing" && _.value ? (n(), D(De, {
                  key: 2,
                  variant: "primary",
                  onClick: ee
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
      w.value ? (n(), D(c7, {
        key: 0,
        "workspace-path": V.value,
        onClose: K[16] || (K[16] = (Fe) => w.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), Q7 = /* @__PURE__ */ xe(J7, [["__scopeId", "data-v-9a9aadc0"]]), X7 = { class: "update-banner" }, Z7 = { class: "update-banner__left" }, eR = { class: "update-banner__title" }, tR = {
  key: 0,
  class: "update-banner__summary"
}, sR = { class: "update-banner__actions" }, oR = ["disabled"], nR = ["disabled"], aR = ["disabled"], lR = /* @__PURE__ */ $e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", X7, [
      t("div", Z7, [
        t("div", eR, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", tR, d(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", sR, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, oR),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, nR)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, aR)
      ])
    ]));
  }
}), iR = /* @__PURE__ */ xe(lR, [["__scopeId", "data-v-49562c5c"]]), uu = "ComfyGit.UpdateNotice.DismissedVersion";
function rR() {
  try {
    return localStorage.getItem(uu);
  } catch {
    return null;
  }
}
function uR(e) {
  try {
    localStorage.setItem(uu, e);
  } catch {
  }
}
function cR(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : rR() !== e.latest_version;
}
const dR = { class: "comfygit-panel" }, mR = { class: "panel-header" }, fR = { class: "header-left" }, vR = {
  key: 0,
  class: "header-info"
}, pR = { class: "header-actions" }, gR = { class: "env-switcher" }, hR = {
  key: 0,
  class: "header-info"
}, yR = { class: "branch-name" }, wR = { class: "panel-main" }, _R = { class: "sidebar" }, kR = { class: "sidebar-content" }, bR = { class: "sidebar-section" }, $R = { class: "sidebar-section" }, CR = { class: "sidebar-section" }, xR = {
  key: 0,
  class: "sidebar-badge"
}, SR = { class: "sidebar-footer" }, IR = { class: "content-area" }, ER = {
  key: 0,
  class: "error-message"
}, TR = {
  key: 1,
  class: "loading"
}, PR = { class: "dialog-content env-selector-dialog" }, RR = { class: "dialog-header" }, MR = { class: "dialog-body" }, DR = { class: "env-list" }, LR = { class: "env-info" }, NR = { class: "env-name-row" }, UR = { class: "env-indicator" }, OR = { class: "env-name" }, AR = {
  key: 0,
  class: "env-branch"
}, zR = {
  key: 1,
  class: "current-label"
}, VR = { class: "env-stats" }, FR = ["onClick"], BR = { class: "toast-container" }, WR = { class: "toast-message" }, hi = "ComfyGit.LastView", yi = "ComfyGit.LastSection", GR = /* @__PURE__ */ $e({
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
      getUpdateCheck: A,
      updateManager: I
    } = it(), P = gp(), { liveInstanceCount: M } = ou({ autoStart: !0 }), O = k(null), j = k([]), E = k([]), L = k([]), Z = U(() => L.value.find((pe) => pe.is_current)), Y = k(null), q = k(!1), te = k(1), W = U(() => {
      var pe;
      return ((pe = Y.value) == null ? void 0 : pe.state) || "managed";
    }), Q = k(!1), le = k(null), Ue = k(null), ne = k(!1), he = k(null), ce = k(!1), Ae = k(!1), Ce = U(() => !ce.value && cR(he.value)), be = k(null), ue = k(null), F = k(null), me = k(!1), B = k(!1), N = k(""), re = k(null), Ve = k({ state: "idle", progress: 0, message: "" });
    let ze = null, V = null;
    const J = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ve = o.initialView ? J[o.initialView] : null, Ee = [
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
    ], G = ["this-env", "all-envs", "sharing"];
    function z() {
      try {
        const pe = sessionStorage.getItem(hi), oe = sessionStorage.getItem(yi);
        if (pe && oe && Ee.includes(pe) && G.includes(oe))
          return { view: pe, section: oe };
      } catch {
      }
      return null;
    }
    const ee = z(), ae = k((ve == null ? void 0 : ve.view) ?? (ee == null ? void 0 : ee.view) ?? "status"), de = k((ve == null ? void 0 : ve.section) ?? (ee == null ? void 0 : ee.section) ?? "this-env");
    function ie(pe, oe) {
      ae.value = pe, de.value = oe;
      try {
        sessionStorage.setItem(hi, pe), sessionStorage.setItem(yi, oe);
      } catch {
      }
    }
    function Ne(pe) {
      const He = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[pe];
      He && ie(He.view, He.section);
    }
    function Pe() {
      ie("branches", "this-env");
    }
    function ge() {
      a("close"), setTimeout(() => {
        var oe;
        const pe = document.querySelectorAll("button.comfyui-button");
        for (const He of pe)
          if (((oe = He.textContent) == null ? void 0 : oe.trim()) === "Manager") {
            He.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const K = k(null), Fe = k(!1), Ie = k(!1), Se = k([]);
    let Oe = 0;
    function Re(pe, oe = "info", He = 3e3) {
      const Qe = ++Oe;
      return Se.value.push({ id: Qe, message: pe, type: oe }), He > 0 && setTimeout(() => {
        Se.value = Se.value.filter((ht) => ht.id !== Qe);
      }, He), Qe;
    }
    function X(pe) {
      Se.value = Se.value.filter((oe) => oe.id !== pe);
    }
    function ye(pe, oe) {
      Re(pe, oe);
    }
    async function ke() {
      he.value = null, ce.value = !1;
      try {
        he.value = await A();
      } catch {
      }
    }
    function Ke() {
      var oe;
      const pe = (oe = he.value) == null ? void 0 : oe.release_url;
      if (pe)
        try {
          window.open(pe, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Be() {
      var oe;
      const pe = (oe = he.value) == null ? void 0 : oe.latest_version;
      pe && uR(pe), ce.value = !0;
    }
    async function We() {
      var oe, He;
      if (Ae.value) return;
      Ae.value = !0;
      const pe = Re("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await I();
        if (X(pe), Qe.status !== "success") {
          if (Re(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const ht = Qe.manual_instructions.split(`
`).map((Tt) => Tt.trim()).filter(Boolean);
            K.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: ht,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                K.value = null;
              }
            };
          }
          return;
        }
        if (Re(Qe.message || "Update complete", "success"), Be(), Qe.restart_required) {
          fe();
          try {
            await ((He = (oe = window.app) == null ? void 0 : oe.api) == null ? void 0 : He.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        X(pe);
        const ht = Qe instanceof Error ? Qe.message : "Update failed";
        Re(ht, "error");
      } finally {
        Ae.value = !1;
      }
    }
    const et = U(() => {
      if (!O.value) return "neutral";
      const pe = O.value.workflows, oe = pe.new.length > 0 || pe.modified.length > 0 || pe.deleted.length > 0 || O.value.has_changes;
      return O.value.comparison.is_synced ? oe ? "warning" : "success" : "error";
    });
    U(() => O.value ? et.value === "success" ? "All synced" : et.value === "warning" ? "Uncommitted changes" : et.value === "error" ? "Not synced" : "" : "");
    async function qe() {
      Q.value = !0, le.value = null;
      try {
        const [pe, oe, He, Qe] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        O.value = pe, j.value = oe.commits, E.value = He.branches, L.value = Qe, a("statusUpdate", pe), be.value && await be.value.loadWorkflows(!0);
      } catch (pe) {
        le.value = pe instanceof Error ? pe.message : "Failed to load status", O.value = null, j.value = [], E.value = [];
      } finally {
        Q.value = !1;
      }
    }
    function ft(pe) {
      Ue.value = pe;
    }
    async function ut(pe) {
      var He;
      Ue.value = null;
      const oe = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      K.value = {
        title: oe ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: oe ? "You have uncommitted changes that will be lost." : `Checkout commit ${pe.short_hash || ((He = pe.hash) == null ? void 0 : He.slice(0, 7))}?`,
        details: oe ? xn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: oe ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: oe,
        onConfirm: async () => {
          var Tt;
          K.value = null, fe();
          const Qe = Re(`Checking out ${pe.short_hash || ((Tt = pe.hash) == null ? void 0 : Tt.slice(0, 7))}...`, "info", 0), ht = await c(pe.hash, oe);
          X(Qe), ht.status === "success" ? Re("Restarting ComfyUI...", "success") : Re(ht.message || "Checkout failed", "error");
        }
      };
    }
    async function mt(pe) {
      const oe = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      K.value = {
        title: oe ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: oe ? "You have uncommitted changes." : `Switch to branch "${pe}"?`,
        details: oe ? xn() : void 0,
        warning: oe ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: oe ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          K.value = null, fe();
          const He = Re(`Switching to ${pe}...`, "info", 0), Qe = await f(pe, oe);
          X(He), Qe.status === "success" ? Re("Restarting ComfyUI...", "success") : Re(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Pt(pe) {
      const oe = Re(`Creating branch ${pe}...`, "info", 0), He = await m(pe);
      X(oe), He.status === "success" ? (Re(`Branch "${pe}" created`, "success"), await qe()) : Re(He.message || "Failed to create branch", "error");
    }
    async function ts(pe, oe = !1) {
      const He = async (Qe) => {
        var Tt;
        const ht = Re(`Deleting branch ${pe}...`, "info", 0);
        try {
          const rs = await v(pe, Qe);
          X(ht), rs.status === "success" ? (Re(`Branch "${pe}" deleted`, "success"), await qe()) : (Tt = rs.message) != null && Tt.includes("not fully merged") ? K.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${pe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              K.value = null, await He(!0);
            }
          } : Re(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          X(ht);
          const eo = rs instanceof Error ? rs.message : "Failed to delete branch";
          eo.includes("not fully merged") ? K.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${pe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              K.value = null, await He(!0);
            }
          } : Re(eo, "error");
        }
      };
      K.value = {
        title: "Delete Branch",
        message: `Delete branch "${pe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          K.value = null, await He(oe);
        }
      };
    }
    async function Ot(pe) {
      Ue.value = null;
      const oe = prompt("Enter branch name:");
      if (oe) {
        const He = Re(`Creating branch ${oe}...`, "info", 0), Qe = await m(oe, pe.hash);
        X(He), Qe.status === "success" ? (Re(`Branch "${oe}" created from ${pe.short_hash}`, "success"), await qe()) : Re(Qe.message || "Failed to create branch", "error");
      }
    }
    function fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function T() {
      K.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var pe;
          K.value = null, fe(), Re("Restarting environment...", "info");
          try {
            (pe = window.app) != null && pe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function R() {
      K.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var pe;
          K.value = null, Re("Stopping environment...", "info");
          try {
            (pe = window.app) != null && pe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Le(pe, oe) {
      ne.value = !1, N.value = pe, re.value = oe || null, me.value = !0;
    }
    async function tt() {
      me.value = !1, B.value = !0, fe(), Ve.value = {
        progress: 10,
        state: vt(10),
        message: st(10)
      };
      try {
        await _(N.value, re.value || void 0), xt(), Ge();
      } catch (pe) {
        Et(), B.value = !1, Re(`Failed to initiate switch: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error"), Ve.value = { state: "idle", progress: 0, message: "" }, re.value = null;
      }
    }
    function vt(pe) {
      return pe >= 100 ? "complete" : pe >= 80 ? "validating" : pe >= 60 ? "starting" : pe >= 30 ? "syncing" : "preparing";
    }
    function st(pe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(pe)] || "";
    }
    function xt() {
      if (V) return;
      let pe = 10;
      const oe = 60, He = 5e3, Qe = 100, ht = (oe - pe) / (He / Qe);
      V = window.setInterval(() => {
        if (pe += ht, pe >= oe && (pe = oe, Et()), Ve.value.progress < oe) {
          const Tt = Math.floor(pe);
          Ve.value = {
            progress: Tt,
            state: vt(Tt),
            message: st(Tt)
          };
        }
      }, Qe);
    }
    function Et() {
      V && (clearInterval(V), V = null);
    }
    function Ge() {
      ze || (ze = window.setInterval(async () => {
        try {
          let pe = await P.getStatus();
          if ((!pe || pe.state === "idle") && (pe = await h()), !pe)
            return;
          const oe = pe.progress || 0;
          oe >= 60 && Et();
          const He = Math.max(oe, Ve.value.progress), Qe = pe.state && pe.state !== "idle" && pe.state !== "unknown", ht = Qe ? pe.state : vt(He), Tt = Qe && pe.message || st(He);
          Ve.value = {
            state: ht,
            progress: He,
            message: Tt
          }, pe.state === "complete" ? (Et(), is(), B.value = !1, Re(`✓ Switched to ${N.value}`, "success"), await qe(), N.value = "") : pe.state === "rolled_back" ? (Et(), is(), B.value = !1, Re("Switch failed, restored previous environment", "warning"), N.value = "") : pe.state === "critical_failure" && (Et(), is(), B.value = !1, Re(`Critical error during switch: ${pe.message}`, "error"), N.value = "");
        } catch (pe) {
          console.error("Failed to poll switch progress:", pe);
        }
      }, 1e3));
    }
    function is() {
      Et(), ze && (clearInterval(ze), ze = null);
    }
    function ys() {
      var pe;
      me.value = !1, N.value = "", (pe = Y.value) != null && pe.state && Y.value.state !== "managed" && (te.value = Y.value.state === "no_workspace" ? 1 : 2, q.value = !0);
    }
    async function vo(pe) {
      Fe.value = !1, await qe(), Re(pe.message, pe.success ? "success" : "error");
    }
    async function po() {
      Ie.value = !1;
      const pe = Re("Syncing environment...", "info", 0);
      try {
        const oe = await x("skip", !0);
        if (X(pe), oe.status === "success") {
          const He = [];
          oe.nodes_installed.length && He.push(`${oe.nodes_installed.length} installed`), oe.nodes_removed.length && He.push(`${oe.nodes_removed.length} removed`);
          const Qe = He.length ? `: ${He.join(", ")}` : "";
          Re(`✓ Environment synced${Qe}`, "success"), await qe();
        } else {
          const He = oe.errors.length ? oe.errors.join("; ") : oe.message;
          Re(`Sync failed: ${He}`, "error");
        }
      } catch (oe) {
        X(pe), Re(`Sync error: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error");
      }
    }
    async function go(pe) {
      var oe;
      try {
        const He = await C(pe);
        He.failed.length === 0 ? Re(`✓ Repaired ${He.success} workflow${He.success === 1 ? "" : "s"}`, "success") : Re(`Repaired ${He.success}, failed: ${He.failed.length}`, "warning"), await qe();
      } catch (He) {
        Re(`Repair failed: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (oe = F.value) == null || oe.resetRepairingState();
      }
    }
    async function Zs() {
      var oe, He;
      const pe = Re("Repairing environment...", "info", 0);
      try {
        const Qe = await x("skip", !0);
        if (X(pe), Qe.status === "success") {
          const ht = [];
          Qe.nodes_installed.length && ht.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && ht.push(`${Qe.nodes_removed.length} removed`);
          const Tt = ht.length ? `: ${ht.join(", ")}` : "";
          Re(`✓ Environment repaired${Tt}`, "success"), (oe = F.value) == null || oe.closeDetailModal(), await qe();
        } else {
          const ht = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Re(`Repair failed: ${ht}`, "error");
        }
      } catch (Qe) {
        X(pe), Re(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (He = F.value) == null || He.resetRepairingEnvironmentState();
      }
    }
    async function ho(pe, oe) {
      Re(`Environment '${pe}' created`, "success"), await qe(), ue.value && await ue.value.loadEnvironments(), oe && await Le(pe);
    }
    async function yo(pe) {
      var oe;
      if (((oe = Z.value) == null ? void 0 : oe.name) === pe) {
        Re("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      K.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${pe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          K.value = null;
          try {
            const He = await w(pe);
            He.status === "success" ? (Re(`Environment "${pe}" deleted`, "success"), await qe(), ue.value && await ue.value.loadEnvironments()) : Re(He.message || "Failed to delete environment", "error");
          } catch (He) {
            Re(`Error deleting environment: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function wo(pe, oe) {
      q.value = !1;
      try {
        Y.value = await S();
      } catch {
      }
      await Le(pe, oe);
    }
    function _o() {
      q.value = !1, a("close");
    }
    async function ko(pe, oe) {
      await Le(pe, oe);
    }
    async function ha(pe) {
      await qe(), await Le(pe);
    }
    async function ya(pe) {
      Y.value = await S(), console.log(`Environment '${pe}' created. Available for switching.`);
    }
    function wa() {
      ie("environments", "all-envs"), setTimeout(() => {
        var pe;
        (pe = ue.value) == null || pe.openCreateModal();
      }, 100);
    }
    function xn() {
      if (!O.value) return [];
      const pe = [], oe = O.value.workflows;
      return oe.new.length && pe.push(`${oe.new.length} new workflow(s)`), oe.modified.length && pe.push(`${oe.modified.length} modified workflow(s)`), oe.deleted.length && pe.push(`${oe.deleted.length} deleted workflow(s)`), pe;
    }
    return at(async () => {
      try {
        if (Y.value = await S(), Y.value.state === "no_workspace") {
          q.value = !0, te.value = 1;
          return;
        }
        if (Y.value.state === "empty_workspace") {
          q.value = !0, te.value = 2;
          return;
        }
        if (Y.value.state === "unmanaged") {
          q.value = !0, te.value = 2;
          return;
        }
      } catch (pe) {
        console.warn("Setup status check failed, proceeding normally:", pe);
      }
      await Promise.all([
        qe(),
        ke()
      ]);
    }), (pe, oe) => {
      var He, Qe, ht, Tt, rs, eo, se, Te, je, _t, Dt, us, Fs;
      return n(), i("div", dR, [
        t("div", mR, [
          t("div", fR, [
            oe[31] || (oe[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            O.value ? (n(), i("div", vR)) : y("", !0)
          ]),
          t("div", pR, [
            $(iu),
            oe[34] || (oe[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Me(["icon-btn", { spinning: Q.value }]),
              onClick: qe,
              title: "Refresh"
            }, [...oe[32] || (oe[32] = [
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
              onClick: oe[0] || (oe[0] = (Je) => a("close")),
              title: "Close"
            }, [...oe[33] || (oe[33] = [
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
        Ce.value && he.value ? (n(), D(iR, {
          key: 0,
          info: he.value,
          updating: Ae.value,
          onUpdate: We,
          onDismiss: Be,
          onReleaseNotes: Ke
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", gR, [
          t("div", { class: "env-switcher-header" }, [
            oe[35] || (oe[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: oe[1] || (oe[1] = (Je) => ie("environments", "all-envs"))
          }, [
            O.value ? (n(), i("div", hR, [
              t("span", null, d(((He = Z.value) == null ? void 0 : He.name) || ((Qe = O.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              t("span", yR, "(" + d(O.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            oe[36] || (oe[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", wR, [
          t("div", _R, [
            t("div", kR, [
              t("div", bR, [
                oe[37] || (oe[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "status" && de.value === "this-env" }]),
                  onClick: oe[2] || (oe[2] = (Je) => ie("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "workflows" }]),
                  onClick: oe[3] || (oe[3] = (Je) => ie("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "models-env" }]),
                  onClick: oe[4] || (oe[4] = (Je) => ie("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "branches" }]),
                  onClick: oe[5] || (oe[5] = (Je) => ie("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "history" }]),
                  onClick: oe[6] || (oe[6] = (Je) => ie("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "nodes" }]),
                  onClick: oe[7] || (oe[7] = (Je) => ie("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "debug-env" }]),
                  onClick: oe[8] || (oe[8] = (Je) => ie("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              oe[41] || (oe[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", $R, [
                oe[38] || (oe[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "environments" }]),
                  onClick: oe[9] || (oe[9] = (Je) => ie("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "model-index" }]),
                  onClick: oe[10] || (oe[10] = (Je) => ie("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "settings" }]),
                  onClick: oe[11] || (oe[11] = (Je) => ie("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "debug-workspace" }]),
                  onClick: oe[12] || (oe[12] = (Je) => ie("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              oe[42] || (oe[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", CR, [
                oe[40] || (oe[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "deploy" }]),
                  onClick: oe[13] || (oe[13] = (Je) => ie("deploy", "sharing"))
                }, [
                  oe[39] || (oe[39] = b(" DEPLOY ", -1)),
                  Xe(M) > 0 ? (n(), i("span", xR, d(Xe(M)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "export" }]),
                  onClick: oe[14] || (oe[14] = (Je) => ie("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "import" }]),
                  onClick: oe[15] || (oe[15] = (Je) => ie("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Me(["sidebar-item", { active: ae.value === "remotes" }]),
                  onClick: oe[16] || (oe[16] = (Je) => ie("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", SR, [
              $(ru)
            ])
          ]),
          t("div", IR, [
            le.value ? (n(), i("div", ER, d(le.value), 1)) : !O.value && ae.value === "status" ? (n(), i("div", TR, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              ae.value === "status" ? (n(), D($v, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: F,
                status: O.value,
                "setup-state": W.value,
                onSwitchBranch: Pe,
                onCommitChanges: oe[17] || (oe[17] = (Je) => Fe.value = !0),
                onSyncEnvironment: oe[18] || (oe[18] = (Je) => Ie.value = !0),
                onViewWorkflows: oe[19] || (oe[19] = (Je) => ie("workflows", "this-env")),
                onViewHistory: oe[20] || (oe[20] = (Je) => ie("history", "this-env")),
                onViewDebug: oe[21] || (oe[21] = (Je) => ie("debug-env", "this-env")),
                onViewNodes: oe[22] || (oe[22] = (Je) => ie("nodes", "this-env")),
                onRepairMissingModels: go,
                onRepairEnvironment: Zs,
                onStartSetup: oe[23] || (oe[23] = (Je) => q.value = !0),
                onViewEnvironments: oe[24] || (oe[24] = (Je) => ie("environments", "all-envs")),
                onCreateEnvironment: wa
              }, null, 8, ["status", "setup-state"])) : ae.value === "workflows" ? (n(), D(O_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: be,
                onRefresh: qe
              }, null, 512)) : ae.value === "models-env" ? (n(), D(Xb, {
                key: 2,
                onNavigate: Ne
              })) : ae.value === "branches" ? (n(), D(fp, {
                key: 3,
                branches: E.value,
                current: ((ht = O.value) == null ? void 0 : ht.branch) || null,
                onSwitch: mt,
                onCreate: Pt,
                onDelete: ts
              }, null, 8, ["branches", "current"])) : ae.value === "history" ? (n(), D(pp, {
                key: 4,
                commits: j.value,
                "current-ref": (Tt = O.value) == null ? void 0 : Tt.branch,
                onSelect: ft,
                onCheckout: ut
              }, null, 8, ["commits", "current-ref"])) : ae.value === "nodes" ? (n(), D(j2, {
                key: 5,
                "version-mismatches": ((eo = (rs = O.value) == null ? void 0 : rs.comparison) == null ? void 0 : eo.version_mismatches) || [],
                onOpenNodeManager: ge,
                onRepairEnvironment: Zs,
                onToast: ye
              }, null, 8, ["version-mismatches"])) : ae.value === "debug-env" ? (n(), D(nx, { key: 6 })) : ae.value === "environments" ? (n(), D(P5, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ue,
                onSwitch: Le,
                onCreated: ho,
                onDelete: yo
              }, null, 512)) : ae.value === "model-index" ? (n(), D(m2, {
                key: 8,
                onRefresh: qe
              })) : ae.value === "settings" ? (n(), D(Y3, { key: 9 })) : ae.value === "debug-workspace" ? (n(), D(ox, { key: 10 })) : ae.value === "deploy" ? (n(), D(yT, {
                key: 11,
                onToast: ye,
                onNavigate: Ne
              })) : ae.value === "export" ? (n(), D(h8, { key: 12 })) : ae.value === "import" ? (n(), D(c4, {
                key: 13,
                onImportCompleteSwitch: ha
              })) : ae.value === "remotes" ? (n(), D(T3, {
                key: 14,
                onToast: ye
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Ue.value ? (n(), D(UT, {
          key: 1,
          commit: Ue.value,
          onClose: oe[25] || (oe[25] = (Je) => Ue.value = null),
          onCheckout: ut,
          onCreateBranch: Ot
        }, null, 8, ["commit"])) : y("", !0),
        K.value ? (n(), D(_l, {
          key: 2,
          title: K.value.title,
          message: K.value.message,
          details: K.value.details,
          warning: K.value.warning,
          confirmLabel: K.value.confirmLabel,
          cancelLabel: K.value.cancelLabel,
          secondaryLabel: K.value.secondaryLabel,
          secondaryAction: K.value.secondaryAction,
          destructive: K.value.destructive,
          onConfirm: K.value.onConfirm,
          onCancel: oe[26] || (oe[26] = (Je) => K.value = null),
          onSecondary: K.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        $(IP, {
          show: me.value,
          "from-environment": ((se = Z.value) == null ? void 0 : se.name) || "unknown",
          "to-environment": N.value,
          onConfirm: tt,
          onClose: ys
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Fe.value && O.value ? (n(), D(lu, {
          key: 3,
          status: O.value,
          "as-modal": !0,
          onClose: oe[27] || (oe[27] = (Je) => Fe.value = !1),
          onCommitted: vo
        }, null, 8, ["status"])) : y("", !0),
        Ie.value && O.value ? (n(), D(KP, {
          key: 4,
          show: Ie.value,
          "mismatch-details": {
            missing_nodes: O.value.comparison.missing_nodes,
            extra_nodes: O.value.comparison.extra_nodes
          },
          onConfirm: po,
          onClose: oe[28] || (oe[28] = (Je) => Ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        $(AP, {
          show: B.value,
          state: Ve.value.state,
          progress: Ve.value.progress,
          message: Ve.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ne.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: oe[30] || (oe[30] = pt((Je) => ne.value = !1, ["self"]))
        }, [
          t("div", PR, [
            t("div", RR, [
              oe[44] || (oe[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: oe[29] || (oe[29] = (Je) => ne.value = !1)
              }, [...oe[43] || (oe[43] = [
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
            t("div", MR, [
              oe[45] || (oe[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", DR, [
                (n(!0), i(H, null, we(L.value, (Je) => (n(), i("div", {
                  key: Je.name,
                  class: Me(["env-item", { current: Je.is_current }])
                }, [
                  t("div", LR, [
                    t("div", NR, [
                      t("span", UR, d(Je.is_current ? "●" : "○"), 1),
                      t("span", OR, d(Je.name), 1),
                      Je.current_branch ? (n(), i("span", AR, "(" + d(Je.current_branch) + ")", 1)) : y("", !0),
                      Je.is_current ? (n(), i("span", zR, "CURRENT")) : y("", !0)
                    ]),
                    t("div", VR, d(Je.workflow_count) + " workflows • " + d(Je.node_count) + " nodes ", 1)
                  ]),
                  Je.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_a) => Le(Je.name)
                  }, " SWITCH ", 8, FR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        q.value ? (n(), D(Q7, {
          key: 6,
          "default-path": ((Te = Y.value) == null ? void 0 : Te.default_path) || "~/comfygit",
          "detected-models-dir": ((je = Y.value) == null ? void 0 : je.detected_models_dir) || null,
          "initial-step": te.value,
          "existing-environments": ((_t = Y.value) == null ? void 0 : _t.environments) || [],
          "cli-installed": ((Dt = Y.value) == null ? void 0 : Dt.cli_installed) ?? !0,
          "setup-state": ((us = Y.value) == null ? void 0 : us.state) || "no_workspace",
          "workspace-path": ((Fs = Y.value) == null ? void 0 : Fs.workspace_path) || null,
          onComplete: wo,
          onClose: _o,
          onSwitchEnvironment: ko,
          onEnvironmentCreatedNoSwitch: ya
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", BR, [
          $(Dd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(H, null, we(Se.value, (Je) => (n(), i("div", {
                key: Je.id,
                class: Me(["toast", Je.type])
              }, [
                t("span", WR, d(Je.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), jR = /* @__PURE__ */ xe(GR, [["__scopeId", "data-v-9c2af32e"]]), HR = { class: "item-header" }, KR = { class: "item-info" }, qR = { class: "filename" }, YR = { class: "metadata" }, JR = { class: "size" }, QR = {
  key: 0,
  class: "type"
}, XR = { class: "item-actions" }, ZR = {
  key: 0,
  class: "progress-section"
}, eM = { class: "progress-bar" }, tM = { class: "progress-stats" }, sM = { class: "downloaded" }, oM = { class: "speed" }, nM = {
  key: 0,
  class: "eta"
}, aM = {
  key: 1,
  class: "status-msg paused"
}, lM = {
  key: 2,
  class: "status-msg queued"
}, iM = {
  key: 3,
  class: "status-msg completed"
}, rM = {
  key: 4,
  class: "status-msg failed"
}, uM = {
  key: 0,
  class: "retries"
}, cM = /* @__PURE__ */ $e({
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
      class: Me(["download-item", `status-${e.item.status}`])
    }, [
      t("div", HR, [
        t("div", KR, [
          t("div", qR, d(e.item.filename), 1),
          t("div", YR, [
            t("span", JR, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", QR, d(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", XR, [
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
      e.item.status === "downloading" ? (n(), i("div", ZR, [
        t("div", eM, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", tM, [
          t("span", sM, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", oM, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", nM, d(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", aM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", lM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", iM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", rM, [
        b(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", uM, "(" + d(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), jo = /* @__PURE__ */ xe(cM, [["__scopeId", "data-v-2110df65"]]), dM = { class: "queue-title" }, mM = { class: "count" }, fM = { class: "queue-actions" }, vM = { class: "action-label" }, pM = {
  key: 0,
  class: "overall-progress"
}, gM = { class: "progress-bar" }, hM = {
  key: 0,
  class: "current-mini"
}, yM = { class: "filename" }, wM = { class: "speed" }, _M = {
  key: 1,
  class: "queue-content"
}, kM = {
  key: 0,
  class: "section"
}, bM = {
  key: 1,
  class: "section"
}, $M = { class: "section-header" }, CM = { class: "section-label paused" }, xM = { class: "items-list" }, SM = {
  key: 2,
  class: "section"
}, IM = { class: "section-header" }, EM = { class: "section-label" }, TM = { class: "items-list" }, PM = {
  key: 3,
  class: "section"
}, RM = { class: "section-header" }, MM = { class: "section-label" }, DM = { class: "items-list" }, LM = {
  key: 4,
  class: "section"
}, NM = { class: "section-header" }, UM = { class: "section-label failed" }, OM = { class: "items-list" }, AM = /* @__PURE__ */ $e({
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
    } = zo(), x = k(!1);
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
        const O = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, j = M && (M.active > 0 || M.paused > 0);
        O && j && (C = setTimeout(() => {
          w(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = U(() => {
      var O;
      if (s.items.length === 0) return 0;
      const P = l.value.length, M = ((O = o.value) == null ? void 0 : O.progress) || 0;
      return Math.round((P + M / 100) / s.items.length * 100);
    });
    function A(P) {
      f(P);
    }
    function I(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, M) => (n(), D(Ut, { to: "body" }, [
      Xe(c) ? (n(), i("div", {
        key: 0,
        class: Me(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (O) => x.value = !x.value)
        }, [
          t("div", dM, [
            M[4] || (M[4] = t("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", mM, "(" + d(Xe(m)) + "/" + d(Xe(s).items.length) + ")", 1)
          ]),
          t("div", fM, [
            t("span", vM, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", _M, [
          Xe(o) ? (n(), i("div", kM, [
            M[6] || (M[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            $(jo, {
              item: Xe(o),
              onCancel: M[1] || (M[1] = (O) => A(Xe(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Xe(u).length > 0 ? (n(), i("div", bM, [
            t("div", $M, [
              t("span", CM, "Paused (" + d(Xe(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...O) => Xe(_) && Xe(_)(...O))
              }, "Resume All")
            ]),
            t("div", xM, [
              (n(!0), i(H, null, we(Xe(u), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onResume: (j) => Xe(p)(O.id),
                onRemove: (j) => Xe(h)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Xe(a).length > 0 ? (n(), i("div", SM, [
            t("div", IM, [
              t("span", EM, "Queued (" + d(Xe(a).length) + ")", 1)
            ]),
            t("div", TM, [
              (n(!0), i(H, null, we(Xe(a), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onCancel: (j) => A(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Xe(l).length > 0 ? (n(), i("div", PM, [
            t("div", RM, [
              t("span", MM, "Completed (" + d(Xe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...O) => Xe(w) && Xe(w)(...O))
              }, "Clear")
            ]),
            t("div", DM, [
              (n(!0), i(H, null, we(Xe(l).slice(0, 3), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onRemove: (j) => Xe(h)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Xe(r).length > 0 ? (n(), i("div", LM, [
            t("div", NM, [
              t("span", UM, "Failed (" + d(Xe(r).length) + ")", 1)
            ]),
            t("div", OM, [
              (n(!0), i(H, null, we(Xe(r), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onRetry: (j) => Xe(v)(O.id),
                onRemove: (j) => Xe(h)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", pM, [
          t("div", gM, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Xe(o) ? (n(), i("div", hM, [
            t("span", yM, d(Xe(o).filename), 1),
            t("span", wM, d(I(Xe(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), zM = /* @__PURE__ */ xe(AM, [["__scopeId", "data-v-3a3c9607"]]), VM = { class: "detail-header" }, FM = { class: "item-count" }, BM = { class: "resource-list" }, WM = { class: "item-info" }, GM = { class: "item-name" }, jM = {
  key: 0,
  class: "item-subtitle"
}, HM = {
  key: 0,
  class: "installing-badge"
}, KM = ["title"], qM = {
  key: 2,
  class: "installed-badge"
}, YM = {
  key: 3,
  class: "queued-badge"
}, JM = {
  key: 4,
  class: "action-buttons"
}, QM = {
  key: 1,
  class: "no-action"
}, XM = /* @__PURE__ */ $e({
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
    return (h, w) => (n(), D(Ct, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", VM, [
          t("span", FM, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), D(De, {
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
        t("div", BM, [
          (n(!0), i(H, null, we(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", WM, [
              t("span", GM, d(x.name), 1),
              x.subtitle ? (n(), i("span", jM, d(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (n(), i(H, { key: 0 }, [
              m(x) ? (n(), i("span", HM, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, KM)) : f(x) ? (n(), i("span", qM, "Installed")) : c(x) ? (n(), i("span", YM, "Queued")) : (n(), i("div", JM, [
                (n(!0), i(H, null, we(_(x), (C) => (n(), D(De, {
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
            ], 64)) : (n(), i("span", QM, d(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        $(De, {
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
}), ZM = /* @__PURE__ */ xe(XM, [["__scopeId", "data-v-ec7e9202"]]), eD = {
  key: 0,
  class: "loading-state"
}, tD = {
  key: 1,
  class: "analysis-results"
}, sD = {
  key: 0,
  class: "section"
}, oD = { class: "section-header" }, nD = { class: "section-title" }, aD = { class: "item-list" }, lD = { class: "package-info" }, iD = { class: "package-name" }, rD = { class: "node-count" }, uD = {
  key: 1,
  class: "installing-badge"
}, cD = {
  key: 2,
  class: "queued-badge"
}, dD = ["title"], mD = {
  key: 4,
  class: "installed-badge"
}, fD = {
  key: 1,
  class: "section"
}, vD = { class: "section-header" }, pD = { class: "section-title" }, gD = { class: "item-list" }, hD = { class: "node-type" }, yD = {
  key: 0,
  class: "overflow-note"
}, wD = {
  key: 2,
  class: "section"
}, _D = { class: "section-header" }, kD = { class: "section-title" }, bD = { class: "item-list" }, $D = { class: "node-type" }, CD = { class: "not-found" }, xD = {
  key: 0,
  class: "overflow-note"
}, SD = {
  key: 3,
  class: "section"
}, ID = { class: "section-header" }, ED = { class: "section-title" }, TD = { class: "item-list" }, PD = { class: "package-info community-info" }, RD = { class: "community-title-row" }, MD = { class: "package-name" }, DD = { class: "node-count" }, LD = { class: "community-mapping-note" }, ND = { key: 0 }, UD = {
  key: 0,
  class: "community-actions"
}, OD = {
  key: 1,
  class: "installing-badge"
}, AD = {
  key: 2,
  class: "queued-badge"
}, zD = ["title"], VD = {
  key: 4,
  class: "installed-badge"
}, FD = ["title"], BD = {
  key: 1,
  class: "no-url"
}, WD = {
  key: 4,
  class: "section"
}, GD = { class: "section-header" }, jD = { class: "section-title" }, HD = { class: "item-list" }, KD = { class: "model-info" }, qD = { class: "model-name" }, YD = {
  key: 1,
  class: "queued-badge"
}, JD = {
  key: 1,
  class: "no-url"
}, QD = { class: "dont-show-again" }, XD = 3e4, ZD = /* @__PURE__ */ $e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Map()), m = k(/* @__PURE__ */ new Set()), f = k(!1), v = k(null), p = k(0), _ = k(null), h = k(/* @__PURE__ */ new Set()), w = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), { addToQueue: C } = zo(), { queueNodeInstall: S } = it(), A = U(() => {
      var X;
      return ((X = a.value) == null ? void 0 : X.package_aliases) || {};
    });
    function I(X) {
      if (!X) return null;
      const ye = A.value;
      let ke = X;
      const Ke = /* @__PURE__ */ new Set();
      for (; ye[ke] && !Ke.has(ke); )
        Ke.add(ke), ke = ye[ke];
      return ke;
    }
    function P(X, ye) {
      return X instanceof Error && X.message ? X.message : typeof X == "string" && X.trim().length > 0 ? X : ye;
    }
    function M(X) {
      for (const [ye, ke] of w.value.entries())
        ke === X && w.value.delete(ye);
    }
    function O(X) {
      if (!x.value.has(X)) return;
      const ye = x.value.get(X);
      clearTimeout(ye), x.value.delete(X);
    }
    function j() {
      for (const X of x.value.values())
        clearTimeout(X);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(X) {
      O(X);
      const ye = setTimeout(() => {
        if (x.value.delete(X), !u.value.has(X)) return;
        M(X), u.value.delete(X), v.value === X && (v.value = null), c.value.set(X, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", X);
      }, XD);
      x.value.set(X, ye);
    }
    function L(X) {
      const ye = `Cannot install "${X.title}" - package_id is missing`;
      c.value.set(X.item_id, ye), o.value = ye, console.warn("[ComfyGit] Community install requested without package_id:", X);
    }
    const Z = U(() => Y.value.length > 0 || te.value.length > 0 || W.value.length > 0 || Q.value.length > 0 || ce.value.length > 0), Y = U(() => {
      var ke, Ke;
      if (!((ke = a.value) != null && ke.nodes)) return [];
      const X = /* @__PURE__ */ new Map(), ye = (a.value.nodes.resolved || []).filter((Be) => {
        var We;
        return !Be.is_installed && ((We = Be.package) == null ? void 0 : We.package_id);
      });
      for (const Be of ye) {
        const We = I(Be.package.package_id);
        if (!We) continue;
        X.has(We) || X.set(We, {
          package_id: We,
          title: Be.package.title || We,
          node_count: 0,
          node_types: [],
          repository: Be.package.repository || null,
          latest_version: Be.package.latest_version || null
        });
        const et = X.get(We);
        et.node_count++, et.node_types.push(((Ke = Be.reference) == null ? void 0 : Ke.node_type) || Be.node_type);
      }
      return Array.from(X.values());
    }), q = U(() => Y.value.reduce((X, ye) => X + ye.node_count, 0)), te = U(() => {
      var X;
      return (X = a.value) != null && X.nodes ? (a.value.nodes.unresolved || []).map((ye) => {
        var ke;
        return {
          node_type: ((ke = ye.reference) == null ? void 0 : ke.node_type) || ye.node_type
        };
      }) : [];
    }), W = U(() => {
      var ye;
      if (!((ye = a.value) != null && ye.nodes)) return [];
      const X = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ke) => {
        var Be;
        const Ke = ((Be = ke.reference) == null ? void 0 : Be.node_type) || ke.node_type;
        return {
          node_type: Ke,
          guidance: ke.guidance || X[Ke] || null
        };
      });
    }), Q = U(() => {
      var ke, Ke, Be, We, et, qe, ft, ut;
      if (!((ke = a.value) != null && ke.nodes)) return [];
      const X = a.value.node_guidance || {}, ye = /* @__PURE__ */ new Map();
      for (const mt of a.value.nodes.uninstallable || []) {
        const Pt = ((Ke = mt.reference) == null ? void 0 : Ke.node_type) || mt.node_type, ts = I(((Be = mt.package) == null ? void 0 : Be.package_id) || null), Ot = ts || `node:${Pt}`;
        ye.has(Ot) || ye.set(Ot, {
          item_id: Ot,
          node_type: Pt,
          title: ((We = mt.package) == null ? void 0 : We.title) || ts || Pt,
          node_count: 0,
          package_id: ts,
          repository: ((et = mt.package) == null ? void 0 : et.repository) || null,
          latest_version: ((qe = mt.package) == null ? void 0 : qe.latest_version) || null,
          guidance: mt.guidance || X[Pt] || null
        });
        const fe = ye.get(Ot);
        fe.node_count++, fe.guidance || (fe.guidance = mt.guidance || X[Pt] || null), !fe.repository && ((ft = mt.package) != null && ft.repository) && (fe.repository = mt.package.repository), !fe.latest_version && ((ut = mt.package) != null && ut.latest_version) && (fe.latest_version = mt.package.latest_version);
      }
      return Array.from(ye.values());
    }), le = U(() => Q.value.filter((X) => !!X.package_id)), Ue = U(() => Q.value.length >= 5 ? Q.value.slice(0, 4) : Q.value), ne = U(() => le.value.length > 0 && le.value.every((X) => {
      const ye = X.package_id;
      return r.value.has(ye) || u.value.has(ye) || c.value.has(ye);
    }));
    function he(X) {
      const ye = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return X.repository && ye.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ye;
    }
    const ce = U(() => {
      var Be;
      if (!((Be = a.value) != null && Be.models)) return [];
      const X = (a.value.models.resolved || []).filter(
        (We) => We.match_type === "download_intent" || We.match_type === "property_download_intent" || We.match_type === "not_found"
      ).map((We) => {
        var et, qe, ft, ut;
        return {
          filename: ((qe = (et = We.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((ft = We.reference) == null ? void 0 : ft.widget_value) || We.widget_value,
          widget_value: ((ut = We.reference) == null ? void 0 : ut.widget_value) || We.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: We.download_source || null,
          targetPath: We.target_path || null,
          canDownload: !!(We.download_source && We.target_path)
        };
      }), ye = (a.value.models.unresolved || []).map((We) => {
        var et, qe, ft, ut;
        return {
          filename: ((qe = (et = We.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((ft = We.reference) == null ? void 0 : ft.widget_value) || We.widget_value,
          widget_value: ((ut = We.reference) == null ? void 0 : ut.widget_value) || We.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ke = /* @__PURE__ */ new Map(), Ke = [];
      for (const We of X) {
        if (!We.url) {
          Ke.push(We);
          continue;
        }
        const et = `${We.filename}::${We.url}`, qe = ke.get(et);
        if (!qe) {
          ke.set(et, We);
          continue;
        }
        !qe.targetPath && We.targetPath && (qe.targetPath = We.targetPath), !qe.canDownload && We.canDownload && (qe.canDownload = We.canDownload);
      }
      return [...ke.values(), ...Ke, ...ye];
    }), Ae = U(() => ce.value.filter((X) => X.canDownload)), Ce = U(() => Y.value.length >= 5 ? Y.value.slice(0, 4) : Y.value), be = U(() => ce.value.length >= 5 ? ce.value.slice(0, 4) : ce.value), ue = U(() => Y.value.length > 0 && Y.value.every(
      (X) => r.value.has(X.package_id) || u.value.has(X.package_id) || c.value.has(X.package_id)
    )), F = U(() => Ae.value.length > 0 && Ae.value.every((X) => m.value.has(X.url))), me = U(() => Y.value.length > 0 || le.value.length > 0 || Ae.value.length > 0), B = U(() => {
      const X = (Y.value.length === 0 || ue.value) && (le.value.length === 0 || ne.value), ye = Ae.value.length === 0 || F.value;
      return X && ye;
    }), N = U(() => _.value === "models" ? `Missing Models (${ce.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${q.value})` : _.value === "community" ? `Community-Mapped Packages (${Q.value.length})` : ""), re = U(() => _.value === "models" ? ce.value.map((X) => ({
      id: X.url || X.widget_value,
      name: X.filename,
      canAction: X.canDownload,
      actionDisabledReason: X.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? Y.value.map((X) => ({
      id: X.package_id,
      name: X.title,
      subtitle: `(${X.node_count} ${X.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? Q.value.map((X) => ({
      id: X.package_id || X.item_id,
      name: X.title,
      subtitle: `(${X.node_count} ${X.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!X.package_id,
      actionDisabledReason: X.package_id ? void 0 : "Manual setup required",
      actions: X.package_id ? he(X) : []
    })) : []);
    function Ve(X, ye) {
      if (_.value === "models") {
        const ke = ce.value.find((Ke) => Ke.url === X.id || Ke.widget_value === X.id);
        ke && Ee(ke);
      } else if (_.value === "packages") {
        const ke = Y.value.find((Ke) => Ke.package_id === X.id);
        ke && V(ke);
      } else if (_.value === "community") {
        const ke = Q.value.find((Be) => (Be.package_id || Be.item_id) === X.id);
        if (!ke) return;
        if (!ke.package_id) {
          L({ item_id: ke.item_id, title: ke.title });
          return;
        }
        J(ke, ye === "install_git" ? "git" : "registry");
      }
    }
    function ze() {
      _.value === "models" ? ee() : _.value === "packages" ? G() : _.value === "community" && z();
    }
    async function V(X) {
      return ve(X.package_id, X.latest_version, "registry");
    }
    async function J(X, ye) {
      return X.package_id ? ve(X.package_id, X.latest_version, ye, X.repository) : (L({ item_id: X.item_id, title: X.title }), !1);
    }
    async function ve(X, ye, ke, Ke) {
      const Be = I(X) || X, We = ye || "latest";
      if (r.value.has(Be) || u.value.has(Be) || c.value.has(Be))
        return !0;
      Oe(), v.value = Be;
      let et = null;
      try {
        const qe = {
          id: Be,
          version: We,
          selected_version: We,
          mode: "remote",
          channel: "default"
        };
        ke === "git" && Ke && (qe.repository = Ke, qe.install_source = "git");
        const { ui_id: ft } = await S(qe, {
          beforeQueueStart: (ut) => {
            et = ut, w.value.set(ut, Be), u.value.add(Be), E(Be), console.log("[ComfyGit] Registered pending install:", {
              ui_id: ut,
              packageId: Be,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return et || (et = ft, w.value.set(ft, Be), u.value.add(Be), E(Be), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: ft,
          packageId: Be,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (qe) {
        const ft = P(qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", qe), et && w.value.delete(et), M(Be), O(Be), u.value.delete(Be), c.value.set(Be, ft), !1;
      } finally {
        v.value = null;
      }
    }
    function Ee(X) {
      !X.url || !X.targetPath || m.value.has(X.url) || (C([{
        workflow: "unsaved",
        filename: X.filename,
        url: X.url,
        targetPath: X.targetPath
      }]), m.value.add(X.url));
    }
    async function G() {
      const X = { attempted: 0, failed: 0 };
      for (const ye of Y.value)
        !r.value.has(ye.package_id) && !u.value.has(ye.package_id) && !c.value.has(ye.package_id) && (X.attempted++, await V(ye) || X.failed++);
      return X;
    }
    async function z() {
      const X = { attempted: 0, failed: 0 };
      for (const ye of le.value) {
        const ke = ye.package_id;
        !r.value.has(ke) && !u.value.has(ke) && !c.value.has(ke) && (X.attempted++, await J(ye, "registry") || X.failed++);
      }
      return X;
    }
    function ee() {
      const X = Ae.value.filter(
        (ye) => !m.value.has(ye.url)
      );
      if (X.length === 0) return 0;
      C(X.map((ye) => ({
        workflow: "unsaved",
        filename: ye.filename,
        url: ye.url,
        targetPath: ye.targetPath
      })));
      for (const ye of X)
        m.value.add(ye.url);
      return X.length;
    }
    async function ae() {
      const X = await G(), ye = await z();
      ee();
      const ke = X.attempted + ye.attempted, Ke = X.failed + ye.failed;
      if (ke > 0 && Ke > 0) {
        const Be = ke - Ke;
        o.value = `${Be} of ${ke} installs queued, ${Ke} failed`;
      }
    }
    function de() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function ie(X) {
      var Be, We;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ye = X == null ? void 0 : X.id;
      if (ye && h.value.has(ye)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ye} this session`);
        return;
      }
      const ke = window.app, Ke = (Be = ke == null ? void 0 : ke.extensionManager) == null ? void 0 : Be.workflow;
      if (Ke) {
        let ft = !1;
        for (let ut = 0; ut < 20; ut++) {
          const mt = Ke.activeWorkflow;
          if (!mt) {
            await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          const Pt = (We = mt.activeState) == null ? void 0 : We.id;
          if (!(ye && Pt === ye)) {
            ut < 19 && await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          if (ft = !0, mt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${mt.filename}`), ye && h.value.add(ye);
            return;
          }
          break;
        }
        ft || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, j(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, p.value = 0;
      try {
        const et = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: X, name: "unsaved" })
        });
        if (!et.ok) {
          const qe = await et.json();
          throw new Error(qe.error || "Failed to analyze workflow");
        }
        a.value = await et.json(), Z.value && (l.value = !0, ye && h.value.add(ye));
      } catch (et) {
        console.error("[ComfyGit] Failed to analyze workflow:", et);
      } finally {
        s.value = !1;
      }
    }
    function Ne() {
      j(), l.value = !1, a.value = null;
    }
    function Pe(X) {
      const { workflow: ye } = X.detail;
      ye && ie(ye);
    }
    function ge(X) {
      var Ke;
      const ye = (Ke = X.detail) == null ? void 0 : Ke.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ye,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: X.detail
      });
      const ke = w.value.get(ye);
      ke ? (O(ke), v.value = ke, console.log("[ComfyGit] Installing package:", ke)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ye);
    }
    function K(X) {
      var Be, We, et, qe, ft, ut, mt;
      const ye = (Be = X.detail) == null ? void 0 : Be.ui_id, ke = (et = (We = X.detail) == null ? void 0 : We.status) == null ? void 0 : et.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ye,
        status: ke,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: X.detail
      });
      const Ke = w.value.get(ye);
      if (Ke) {
        if (O(Ke), w.value.delete(ye), u.value.delete(Ke), v.value === Ke && (v.value = null), ke === "success")
          r.value.add(Ke), p.value++, console.log("[ComfyGit] Package installed successfully:", Ke);
        else {
          const Pt = ((ut = (ft = (qe = X.detail) == null ? void 0 : qe.status) == null ? void 0 : ft.messages) == null ? void 0 : ut[0]) || ((mt = X.detail) == null ? void 0 : mt.result) || "Unknown error";
          c.value.set(Ke, Pt), console.error("[ComfyGit] Package install failed:", Ke, Pt);
        }
        w.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ye);
    }
    let Fe = null;
    function Ie() {
      var X;
      return Fe || (Fe = (X = window.app) == null ? void 0 : X.api), Fe;
    }
    let Se = !1;
    function Oe() {
      if (Se) return !0;
      const X = Ie();
      return X ? (X.addEventListener("cm-task-started", ge), X.addEventListener("cm-task-completed", K), X.addEventListener("comfygit:workflow-changed", Re), Se = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Re(X) {
      const { change_type: ye } = X.detail;
      (ye === "created" || ye === "modified") && l.value && (j(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", Pe);
    }), Xs(() => {
      if (j(), window.removeEventListener("comfygit:workflow-loaded", Pe), Se) {
        const X = Ie();
        X && (X.removeEventListener("cm-task-started", ge), X.removeEventListener("cm-task-completed", K), X.removeEventListener("comfygit:workflow-changed", Re)), Se = !1;
      }
    }), (X, ye) => (n(), i(H, null, [
      l.value ? (n(), D(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ne
      }, {
        body: g(() => [
          s.value ? (n(), i("div", eD, [...ye[5] || (ye[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && Z.value ? (n(), i("div", tD, [
            Y.value.length > 0 ? (n(), i("div", sD, [
              t("div", oD, [
                t("span", nD, "Missing Custom Nodes (" + d(q.value) + ")", 1),
                Y.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ue.value,
                  onClick: G
                }, {
                  default: g(() => [
                    b(d(ue.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", aD, [
                (n(!0), i(H, null, we(Ce.value, (ke) => (n(), i("div", {
                  key: ke.package_id,
                  class: "package-item"
                }, [
                  t("div", lD, [
                    t("span", iD, d(ke.title), 1),
                    t("span", rD, "(" + d(ke.node_count) + " " + d(ke.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ke.package_id) && !u.value.has(ke.package_id) && !c.value.has(ke.package_id) ? (n(), D(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === ke.package_id,
                    onClick: (Ke) => V(ke)
                  }, {
                    default: g(() => [
                      b(d(v.value === ke.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === ke.package_id ? (n(), i("span", uD, "Installing...")) : u.value.has(ke.package_id) ? (n(), i("span", cD, "Queued")) : c.value.has(ke.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(ke.package_id)
                  }, "Failed ⚠", 8, dD)) : (n(), i("span", mD, "Installed"))
                ]))), 128)),
                Y.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ye[0] || (ye[0] = (ke) => _.value = "packages")
                }, [
                  t("span", null, "Show all " + d(Y.value.length) + " packages...", 1),
                  ye[6] || (ye[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            te.value.length > 0 ? (n(), i("div", fD, [
              t("div", vD, [
                t("span", pD, "Unknown Nodes (" + d(te.value.length) + ")", 1)
              ]),
              t("div", gD, [
                (n(!0), i(H, null, we(te.value.slice(0, 5), (ke) => (n(), i("div", {
                  key: ke.node_type,
                  class: "item"
                }, [
                  t("code", hD, d(ke.node_type), 1),
                  ye[7] || (ye[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                te.value.length > 5 ? (n(), i("div", yD, " ...and " + d(te.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            W.value.length > 0 ? (n(), i("div", wD, [
              t("div", _D, [
                t("span", kD, "Requires Newer ComfyUI (" + d(W.value.length) + ")", 1)
              ]),
              t("div", bD, [
                (n(!0), i(H, null, we(W.value.slice(0, 5), (ke) => (n(), i("div", {
                  key: `vg-${ke.node_type}`,
                  class: "item"
                }, [
                  t("code", $D, d(ke.node_type), 1),
                  t("span", CD, d(ke.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                W.value.length > 5 ? (n(), i("div", xD, " ...and " + d(W.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            Q.value.length > 0 ? (n(), i("div", SD, [
              t("div", ID, [
                t("span", ED, "Community-Mapped Packages (" + d(Q.value.length) + ")", 1),
                le.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ne.value,
                  onClick: z
                }, {
                  default: g(() => [
                    b(d(ne.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", TD, [
                (n(!0), i(H, null, we(Ue.value, (ke) => (n(), i("div", {
                  key: `community-${ke.item_id}`,
                  class: "package-item"
                }, [
                  t("div", PD, [
                    t("div", RD, [
                      t("span", MD, d(ke.title), 1),
                      t("span", DD, "(" + d(ke.node_count) + " " + d(ke.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", LD, [
                      ye[8] || (ye[8] = b(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ke.guidance ? (n(), i("span", ND, ". " + d(ke.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ke.package_id ? (n(), i(H, { key: 0 }, [
                    !r.value.has(ke.package_id) && !u.value.has(ke.package_id) && !c.value.has(ke.package_id) ? (n(), i("div", UD, [
                      $(De, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === ke.package_id,
                        onClick: (Ke) => J(ke, "registry")
                      }, {
                        default: g(() => [
                          b(d(v.value === ke.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ke.repository ? (n(), D(De, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === ke.package_id,
                        onClick: (Ke) => J(ke, "git")
                      }, {
                        default: g(() => [...ye[9] || (ye[9] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === ke.package_id ? (n(), i("span", OD, "Installing...")) : u.value.has(ke.package_id) ? (n(), i("span", AD, "Queued")) : c.value.has(ke.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(ke.package_id)
                    }, "Failed ⚠", 8, zD)) : (n(), i("span", VD, "Installed"))
                  ], 64)) : (n(), i(H, { key: 1 }, [
                    c.value.has(ke.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(ke.item_id)
                    }, "Failed ⚠", 8, FD)) : (n(), i("span", BD, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Q.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ye[1] || (ye[1] = (ke) => _.value = "community")
                }, [
                  t("span", null, "Show all " + d(Q.value.length) + " packages...", 1),
                  ye[10] || (ye[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ce.value.length > 0 ? (n(), i("div", WD, [
              t("div", GD, [
                t("span", jD, "Missing Models (" + d(ce.value.length) + ")", 1),
                Ae.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: F.value,
                  onClick: ee
                }, {
                  default: g(() => [
                    b(d(F.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", HD, [
                (n(!0), i(H, null, we(be.value, (ke) => (n(), i("div", {
                  key: ke.widget_value,
                  class: "model-item"
                }, [
                  t("div", KD, [
                    t("span", qD, d(ke.filename), 1)
                  ]),
                  ke.canDownload ? (n(), i(H, { key: 0 }, [
                    m.value.has(ke.url) ? (n(), i("span", YD, "Queued")) : (n(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => Ee(ke)
                    }, {
                      default: g(() => [...ye[11] || (ye[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", JD, "Manual download required"))
                ]))), 128)),
                ce.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ye[2] || (ye[2] = (ke) => _.value = "models")
                }, [
                  t("span", null, "Show all " + d(ce.value.length) + " models...", 1),
                  ye[12] || (ye[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", QD, [
              $(ta, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  ye[3] || (ye[3] = (ke) => f.value = ke),
                  de
                ]
              }, {
                default: g(() => [...ye[13] || (ye[13] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: g(() => [
          $(De, {
            variant: "secondary",
            onClick: Ne
          }, {
            default: g(() => [...ye[14] || (ye[14] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          me.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            disabled: B.value,
            onClick: ae
          }, {
            default: g(() => [
              b(d(B.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      _.value ? (n(), D(ZM, {
        key: 1,
        title: N.value,
        items: re.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? m.value : u.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : c.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: ye[4] || (ye[4] = (ke) => _.value = null),
        onAction: Ve,
        onBulkAction: ze
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), eL = /* @__PURE__ */ xe(ZD, [["__scopeId", "data-v-dfb55c3f"]]), tL = {
  key: 0,
  class: "io-mapping-root"
}, sL = { class: "io-mapping-visual-layer" }, oL = { class: "io-mapping-header" }, nL = { class: "io-mapping-header-main" }, aL = { class: "io-mapping-subtitle" }, lL = {
  key: 0,
  class: "io-mapping-hover-summary"
}, iL = { class: "io-mapping-header-actions" }, rL = { class: "io-mapping-sidebar" }, uL = { class: "io-mapping-sidebar-scroll" }, cL = {
  key: 0,
  class: "io-state-block"
}, dL = {
  key: 1,
  class: "io-state-block io-state-error"
}, mL = { class: "contract-meta" }, fL = { class: "contract-summary" }, vL = { class: "summary-pill" }, pL = { class: "summary-pill" }, gL = { class: "summary-pill" }, hL = { class: "contract-meta-grid" }, yL = { class: "mapping-section" }, wL = { class: "section-header" }, _L = {
  key: 0,
  class: "empty-message"
}, kL = ["onClick"], bL = { class: "item-card-header" }, $L = { class: "item-card-title" }, CL = { class: "item-card-meta" }, xL = { class: "item-grid" }, SL = { class: "mapping-section" }, IL = { class: "section-header" }, EL = {
  key: 0,
  class: "empty-message"
}, TL = ["onClick"], PL = { class: "item-card-header" }, RL = { class: "item-card-title" }, ML = { class: "item-card-meta" }, DL = { class: "item-grid" }, LL = { class: "io-mapping-footer" }, NL = /* @__PURE__ */ $e({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = it(), l = k(!1), r = k(""), u = k(!1), c = k(!1), m = k(null), f = k(null), v = k(null), p = k(null), _ = k(null), h = k(0), w = k(null), x = k(null);
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
    ], A = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], I = U(() => {
      if (!v.value)
        return { inputs: [], outputs: [] };
      const G = v.value.default_contract || "default";
      return v.value.contracts[G] || (v.value.contracts[G] = { inputs: [], outputs: [] }), v.value.contracts[G];
    }), P = U(() => {
      var z;
      const G = ((z = f.value) == null ? void 0 : z.contract_summary.status) ?? "none";
      return G === "valid" ? "Valid Contract" : G === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function M(G) {
      return G ? JSON.parse(JSON.stringify(G)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function O(G) {
      if (!v.value) return;
      const z = G.trim() || "default";
      v.value.default_contract = z, v.value.contracts[z] || (v.value.contracts[z] = { inputs: [], outputs: [] });
    }
    function j(G, z) {
      return G.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || z;
    }
    function E(G) {
      const z = String(G ?? "").toLowerCase();
      return z.includes("image") ? "image" : z.includes("video") ? "video" : z.includes("audio") ? "audio" : z.includes("int") ? "integer" : z.includes("float") || z.includes("double") || z.includes("number") ? "number" : z.includes("bool") ? "boolean" : z.includes("combo") || z.includes("enum") ? "enum" : z.includes("string") || z.includes("text") ? "string" : "file";
    }
    function L(G) {
      I.value.inputs.splice(G, 1), p.value === G && (p.value = null);
    }
    function Z(G) {
      I.value.outputs.splice(G, 1), _.value === G && (_.value = null);
    }
    function Y(G) {
      const z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(G)) : String(G);
      return document.querySelector(`[data-node-id="${z}"]`);
    }
    function q(G) {
      return G instanceof Element ? !!G.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function te(G) {
      var ae, de, ie, Ne, Pe, ge;
      if (!(G instanceof Element)) return null;
      const z = G.closest("[data-node-id]"), ee = z == null ? void 0 : z.getAttribute("data-node-id");
      return ee ? ((ie = (de = (ae = s.comfyApp) == null ? void 0 : ae.graph) == null ? void 0 : de.getNodeById) == null ? void 0 : ie.call(de, ee)) ?? ((ge = (Pe = (Ne = s.comfyApp) == null ? void 0 : Ne.rootGraph) == null ? void 0 : Pe.getNodeById) == null ? void 0 : ge.call(Pe, ee)) ?? null : null;
    }
    function W(G, z) {
      if (z == null || z < 0) return null;
      const ee = Y(G);
      return ee ? ee.querySelectorAll('[data-testid="node-widget"]')[z] ?? null : null;
    }
    function Q(G) {
      return !G || G.width <= 0 || G.height <= 0 ? null : {
        left: `${G.left}px`,
        top: `${G.top}px`,
        width: `${G.width}px`,
        height: `${G.height}px`
      };
    }
    function le(G) {
      const z = Y((G == null ? void 0 : G.id) ?? "");
      if (z) return z.getBoundingClientRect();
      const ee = s.comfyApp;
      if (!G || typeof (ee == null ? void 0 : ee.canvasPosToClientPos) != "function") return null;
      const de = ee.canvasPosToClientPos([G.pos[0], G.pos[1] - 32]), ie = ee.canvasPosToClientPos([G.pos[0] + G.size[0], G.pos[1] + G.size[1]]);
      return !de || !ie ? null : new DOMRect(de[0], de[1], ie[0] - de[0], ie[1] - de[1]);
    }
    function Ue(G) {
      var Pe, ge, K, Fe, Ie, Se, Oe;
      const z = W(G.node_id, G.widget_idx);
      if (z) return z.getBoundingClientRect();
      const ee = ((K = (ge = (Pe = s.comfyApp) == null ? void 0 : Pe.graph) == null ? void 0 : ge.getNodeById) == null ? void 0 : K.call(ge, String(G.node_id))) ?? ((Se = (Ie = (Fe = s.comfyApp) == null ? void 0 : Fe.rootGraph) == null ? void 0 : Ie.getNodeById) == null ? void 0 : Se.call(Ie, String(G.node_id)));
      if (!ee || typeof G.widget_idx != "number" || !Array.isArray(ee.widgets)) return null;
      const ae = ee.widgets[G.widget_idx];
      if (!ae || typeof ((Oe = s.comfyApp) == null ? void 0 : Oe.canvasPosToClientPos) != "function") return le(ee);
      const de = 10, ie = s.comfyApp.canvasPosToClientPos([ee.pos[0] + de, ee.pos[1] + (ae.y ?? 0)]), Ne = s.comfyApp.canvasPosToClientPos([ee.pos[0] + ee.size[0] - de, ee.pos[1] + (ae.y ?? 0) + (ae.computedHeight ?? 24)]);
      return !ie || !Ne ? le(ee) : new DOMRect(ie[0], ie[1], Ne[0] - ie[0], Ne[1] - ie[1]);
    }
    function ne(G) {
      var ee, ae, de, ie, Ne, Pe;
      const z = ((de = (ae = (ee = s.comfyApp) == null ? void 0 : ee.graph) == null ? void 0 : ae.getNodeById) == null ? void 0 : de.call(ae, String(G.node_id))) ?? ((Pe = (Ne = (ie = s.comfyApp) == null ? void 0 : ie.rootGraph) == null ? void 0 : Ne.getNodeById) == null ? void 0 : Pe.call(Ne, String(G.node_id)));
      return le(z);
    }
    const he = U(() => (h.value, I.value.inputs.map((G, z) => {
      const ee = Q(Ue(G));
      return ee ? {
        key: `input-${z}-${G.node_id}-${G.widget_idx ?? "na"}`,
        style: ee,
        active: p.value === z
      } : null;
    }).filter((G) => !!G))), ce = U(() => (h.value, I.value.outputs.map((G, z) => {
      const ee = Q(ne(G));
      return ee ? {
        key: `output-${z}-${G.node_id}-${G.selector ?? "primary"}`,
        style: ee,
        active: _.value === z
      } : null;
    }).filter((G) => !!G)));
    function Ae(G) {
      var K, Fe, Ie, Se, Oe, Re, X, ye, ke, Ke;
      if (q(G.target)) return null;
      const z = (K = s.comfyApp) == null ? void 0 : K.canvas;
      if (!z) return null;
      const ee = (Fe = z.convertEventToCanvasOffset) == null ? void 0 : Fe.call(z, G);
      if (!ee || ee.length < 2) return null;
      const [ae, de] = ee, ie = z.graph || ((Ie = s.comfyApp) == null ? void 0 : Ie.graph) || ((Se = s.comfyApp) == null ? void 0 : Se.rootGraph), Ne = ((Oe = ie == null ? void 0 : ie.getNodeOnPos) == null ? void 0 : Oe.call(ie, ae, de, z.visible_nodes)) || ((Re = z.getNodeOnPos) == null ? void 0 : Re.call(z, ae, de)) || te(G.target);
      if (!Ne) return null;
      const Pe = (X = Ne.getWidgetOnPos) == null ? void 0 : X.call(Ne, ae, de, !0);
      if (Pe)
        return { kind: "input", node: Ne, widget: Pe, canvasX: ae, canvasY: de };
      const ge = ((ye = Ne.getOutputOnPos) == null ? void 0 : ye.call(Ne, [ae, de])) || ((Ke = (ke = Ne.constructor) == null ? void 0 : ke.nodeData) != null && Ke.output_node ? { name: Ne.title || Ne.type || "output", type: "image" } : null);
      return ge ? { kind: "output", node: Ne, output: ge, canvasX: ae, canvasY: de } : null;
    }
    function Ce(G, z) {
      var Pe;
      const ee = Array.isArray(G.widgets) ? G.widgets.indexOf(z) : -1, ae = I.value.inputs.findIndex(
        (ge) => String(ge.node_id) === String(G.id) && ge.widget_idx === ee
      );
      if (ae >= 0) {
        p.value = ae;
        return;
      }
      const de = typeof ((Pe = z == null ? void 0 : z.options) == null ? void 0 : Pe.property) == "string" ? z.options.property : void 0, ie = (z == null ? void 0 : z.name) || de || "input", Ne = {
        name: j(String(ie), `input_${I.value.inputs.length + 1}`),
        display_name: String((z == null ? void 0 : z.name) || de || `Input ${I.value.inputs.length + 1}`),
        type: E(z == null ? void 0 : z.type),
        node_id: String(G.id),
        widget_idx: ee >= 0 ? ee : void 0,
        field_key: de,
        required: !0,
        default: (z == null ? void 0 : z.value) ?? ""
      };
      I.value.inputs.push(Ne), p.value = I.value.inputs.length - 1, _.value = null;
    }
    function be(G, z) {
      const ee = Array.isArray(G.outputs) ? G.outputs.indexOf(z) : -1, ae = ee >= 0 ? `slot:${ee}` : "primary", de = I.value.outputs.findIndex(
        (Ne) => String(Ne.node_id) === String(G.id) && (Ne.selector || "primary") === ae
      );
      if (de >= 0) {
        _.value = de;
        return;
      }
      const ie = {
        name: j(String((z == null ? void 0 : z.name) || "output"), `output_${I.value.outputs.length + 1}`),
        display_name: String((z == null ? void 0 : z.name) || `Output ${I.value.outputs.length + 1}`),
        type: E(z == null ? void 0 : z.type),
        node_id: String(G.id),
        selector: ae
      };
      I.value.outputs.push(ie), _.value = I.value.outputs.length - 1, p.value = null;
    }
    function ue(G) {
      var ae, de, ie;
      if (!l.value) {
        w.value = null, x.value = null;
        return;
      }
      const z = Ae(G);
      if (!z) {
        w.value = null, x.value = null;
        return;
      }
      if (z.kind === "input") {
        const Ne = Array.isArray(z.node.widgets) ? z.node.widgets.indexOf(z.widget) : -1, Pe = Q(((ae = W(z.node.id, Ne)) == null ? void 0 : ae.getBoundingClientRect()) ?? Ue({
          node_id: String(z.node.id),
          widget_idx: Ne >= 0 ? Ne : void 0
        }));
        if (!Pe) {
          w.value = null, x.value = null;
          return;
        }
        w.value = {
          kind: "input",
          label: `${((de = z.widget) == null ? void 0 : de.name) || "widget"} · Node ${z.node.id}`
        }, x.value = { kind: "input", style: Pe };
        return;
      }
      const ee = Q(le(z.node));
      if (!ee) {
        w.value = null, x.value = null;
        return;
      }
      w.value = {
        kind: "output",
        label: `${((ie = z.output) == null ? void 0 : ie.name) || z.node.title || z.node.type || "output"} · Node ${z.node.id}`
      }, x.value = { kind: "output", style: ee };
    }
    function F(G) {
      var ae, de, ie;
      if (!l.value || !v.value || G.button !== 0) return;
      const z = Ae(G);
      if (!z) return;
      const ee = (ae = s.comfyApp) == null ? void 0 : ae.canvas;
      if (ee) {
        if (z.kind === "input") {
          G.preventDefault(), G.stopImmediatePropagation(), G.stopPropagation(), Array.isArray(ee.graph_mouse) && (ee.graph_mouse[0] = z.canvasX, ee.graph_mouse[1] = z.canvasY), (de = ee.selectNode) == null || de.call(ee, z.node, !1), Ce(z.node, z.widget);
          return;
        }
        G.preventDefault(), G.stopImmediatePropagation(), G.stopPropagation(), Array.isArray(ee.graph_mouse) && (ee.graph_mouse[0] = z.canvasX, ee.graph_mouse[1] = z.canvasY), (ie = ee.selectNode) == null || ie.call(ee, z.node, !1), be(z.node, z.output);
      }
    }
    function me() {
      document.addEventListener("pointerdown", F, !0), document.addEventListener("pointermove", ue, !0);
    }
    function B() {
      document.removeEventListener("pointerdown", F, !0), document.removeEventListener("pointermove", ue, !0);
    }
    async function N() {
      if (r.value) {
        u.value = !0, m.value = null;
        try {
          f.value = await o(r.value), v.value = M(f.value.execution_contract);
        } catch (G) {
          m.value = G instanceof Error ? G.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function re() {
      if (!(!v.value || !r.value)) {
        c.value = !0, m.value = null;
        try {
          f.value = await a(r.value, v.value), v.value = M(f.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), ze({ reopenContract: !0 });
        } catch (G) {
          m.value = G instanceof Error ? G.message : "Failed to save workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    function Ve() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function ze(G) {
      l.value = !1, w.value = null, x.value = null, G != null && G.reopenPanel && Ve();
    }
    async function V(G) {
      var ae, de;
      const ee = (de = (ae = G.detail) == null ? void 0 : ae.workflowName) == null ? void 0 : de.trim();
      ee && (r.value = ee, p.value = null, _.value = null, l.value = !0, await N());
    }
    function J(G) {
      G.key === "Escape" && l.value && ze({ reopenPanel: !0 });
    }
    function ve() {
      if (C != null) return;
      const G = () => {
        if (h.value += 1, !l.value) {
          C = null;
          return;
        }
        C = window.requestAnimationFrame(G);
      };
      C = window.requestAnimationFrame(G);
    }
    function Ee() {
      C != null && (window.cancelAnimationFrame(C), C = null);
    }
    return St(l, (G) => {
      G ? (me(), ve()) : (B(), Ee());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", V), window.addEventListener("keydown", J);
    }), da(() => {
      B(), Ee(), window.removeEventListener("comfygit:open-io-mapping", V), window.removeEventListener("keydown", J);
    }), (G, z) => l.value ? (n(), i("div", tL, [
      t("div", sL, [
        (n(!0), i(H, null, we(he.value, (ee) => (n(), i("div", {
          key: ee.key,
          class: Me(["io-highlight", "io-highlight-input", { active: ee.active }]),
          style: Ft(ee.style)
        }, null, 6))), 128)),
        (n(!0), i(H, null, we(ce.value, (ee) => (n(), i("div", {
          key: ee.key,
          class: Me(["io-highlight", "io-highlight-output", { active: ee.active }]),
          style: Ft(ee.style)
        }, null, 6))), 128)),
        x.value ? (n(), i("div", {
          key: 0,
          class: Me(["io-highlight", x.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(x.value.style)
        }, null, 6)) : y("", !0)
      ]),
      t("div", oL, [
        t("div", nL, [
          z[4] || (z[4] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", aL, d(r.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          w.value ? (n(), i("div", lL, " Hovering " + d(w.value.kind) + ": " + d(w.value.label), 1)) : y("", !0)
        ]),
        t("div", iL, [
          $(De, {
            size: "sm",
            variant: "secondary",
            onClick: z[0] || (z[0] = (ee) => ze({ reopenPanel: !0 }))
          }, {
            default: g(() => [...z[5] || (z[5] = [
              b(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", rL, [
        t("div", uL, [
          u.value ? (n(), i("div", cL, " Loading workflow contract... ")) : m.value ? (n(), i("div", dL, d(m.value), 1)) : v.value ? (n(), i(H, { key: 2 }, [
            t("section", mL, [
              t("div", fL, [
                t("span", vL, d(P.value), 1),
                t("span", pL, d(I.value.inputs.length) + " input" + d(I.value.inputs.length === 1 ? "" : "s"), 1),
                t("span", gL, d(I.value.outputs.length) + " output" + d(I.value.outputs.length === 1 ? "" : "s"), 1)
              ]),
              t("div", hL, [
                $($t, { label: "Default Contract" }, {
                  default: g(() => [
                    $(dt, {
                      "model-value": v.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": O
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                $($t, { label: "Display Name" }, {
                  default: g(() => [
                    $(dt, {
                      modelValue: I.value.display_name,
                      "onUpdate:modelValue": z[1] || (z[1] = (ee) => I.value.display_name = ee),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              $($t, { label: "Description" }, {
                default: g(() => [
                  $(yn, {
                    modelValue: I.value.description,
                    "onUpdate:modelValue": z[2] || (z[2] = (ee) => I.value.description = ee),
                    rows: 2,
                    placeholder: "Optional description for this contract"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            t("section", yL, [
              t("div", wL, [
                $(Ls, { variant: "section" }, {
                  default: g(() => [...z[6] || (z[6] = [
                    b("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.inputs.length ? y("", !0) : (n(), i("div", _L, " No inputs configured. ")),
              (n(!0), i(H, null, we(I.value.inputs, (ee, ae) => (n(), i("div", {
                key: `input-${ae}`,
                class: Me(["item-card", { selected: p.value === ae }]),
                onClick: (de) => p.value = ae
              }, [
                t("div", bL, [
                  t("div", null, [
                    t("div", $L, d(ee.name || `Input ${ae + 1}`), 1),
                    t("div", CL, [
                      b(" Node " + d(ee.node_id || "?"), 1),
                      ee.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        b(" · Widget " + d(ee.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  $(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: pt((de) => L(ae), ["stop"])
                  }, {
                    default: g(() => [...z[7] || (z[7] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", xL, [
                  $($t, { label: "Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: ee.name,
                        "onUpdate:modelValue": (de) => ee.name = de,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Display Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: ee.display_name,
                        "onUpdate:modelValue": (de) => ee.display_name = de,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Type" }, {
                    default: g(() => [
                      $(uo, {
                        "model-value": ee.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (de) => ee.type = de
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Required" }, {
                    default: g(() => [
                      $(uo, {
                        "model-value": ee.required ? "true" : "false",
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (de) => ee.required = de === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Default" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: ee.default,
                        "onUpdate:modelValue": (de) => ee.default = de,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 10, kL))), 128))
            ]),
            t("section", SL, [
              t("div", IL, [
                $(Ls, { variant: "section" }, {
                  default: g(() => [...z[8] || (z[8] = [
                    b("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.outputs.length ? y("", !0) : (n(), i("div", EL, " No outputs configured. ")),
              (n(!0), i(H, null, we(I.value.outputs, (ee, ae) => (n(), i("div", {
                key: `output-${ae}`,
                class: Me(["item-card", { selected: _.value === ae }]),
                onClick: (de) => _.value = ae
              }, [
                t("div", PL, [
                  t("div", null, [
                    t("div", RL, d(ee.name || `Output ${ae + 1}`), 1),
                    t("div", ML, [
                      b(" Node " + d(ee.node_id || "?"), 1),
                      ee.selector ? (n(), i(H, { key: 0 }, [
                        b(" · " + d(ee.selector), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  $(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: pt((de) => Z(ae), ["stop"])
                  }, {
                    default: g(() => [...z[9] || (z[9] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", DL, [
                  $($t, { label: "Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: ee.name,
                        "onUpdate:modelValue": (de) => ee.name = de,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Display Name" }, {
                    default: g(() => [
                      $(dt, {
                        modelValue: ee.display_name,
                        "onUpdate:modelValue": (de) => ee.display_name = de,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $($t, { label: "Type" }, {
                    default: g(() => [
                      $(uo, {
                        "model-value": ee.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (de) => ee.type = de
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 10, TL))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        t("div", LL, [
          $(De, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (ee) => ze({ reopenPanel: !0 }))
          }, {
            default: g(() => [...z[10] || (z[10] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(De, {
            variant: "primary",
            loading: c.value,
            onClick: re
          }, {
            default: g(() => [...z[11] || (z[11] = [
              b(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : y("", !0);
  }
}), UL = /* @__PURE__ */ xe(NL, [["__scopeId", "data-v-57d47618"]]), OL = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', AL = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', zL = {
  comfy: OL,
  phosphor: AL
}, bl = "comfy", cu = "comfygit-theme";
let no = null, du = bl;
function VL() {
  try {
    const e = localStorage.getItem(cu);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return bl;
}
function mu(e = bl) {
  no && no.remove(), no = document.createElement("style"), no.id = "comfygit-theme-styles", no.setAttribute("data-theme", e), no.textContent = zL[e], document.head.appendChild(no), document.body.setAttribute("data-comfygit-theme", e), du = e;
  try {
    localStorage.setItem(cu, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function FL() {
  return du;
}
function BL(e) {
  mu(e);
}
function WL(e) {
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
const GL = VL();
mu(GL);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), BL(e);
  },
  getTheme: () => {
    const e = FL();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ps = null, ln = null, Jt = null, rn = null, Ho = null, wi = null, Ko = null, _i = null, qo = null, ki = null;
const Do = k(null);
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
function jL() {
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
    render: () => Ao(jR, {
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
        Yo(), HL(l.success, l.message), Wn().then(un);
      }
    })
  }), rn.mount(Jt), document.body.appendChild(Jt);
}
function Yo() {
  rn && (rn.unmount(), rn = null), Jt && (Jt.remove(), Jt = null);
}
function HL(e, s) {
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
function KL() {
  Ho || (Ho = document.createElement("div"), Ho.className = "comfygit-download-queue-root", wi = $n({
    render: () => Ao(zM)
  }), wi.mount(Ho), document.body.appendChild(Ho), console.log("[ComfyGit] Model download queue mounted"));
}
function qL() {
  Ko || (Ko = document.createElement("div"), Ko.className = "comfygit-missing-resources-root", _i = $n({
    render: () => Ao(eL)
  }), _i.mount(Ko), document.body.appendChild(Ko), console.log("[ComfyGit] Missing resources popup mounted"));
}
function YL() {
  qo || (qo = document.createElement("div"), qo.className = "comfygit-io-mapping-root", ki = $n({
    render: () => Ao(UL, {
      comfyApp: Qt
    })
  }), ki.mount(qo), document.body.appendChild(qo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let jt = null;
function un() {
  if (!jt) return;
  const e = jt.querySelector(".commit-indicator");
  e && (e.style.display = jL() ? "block" : "none");
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Un, jt = document.createElement("button"), jt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", jt.innerHTML = 'Commit <span class="commit-indicator"></span>', jt.title = "Quick Commit", jt.onclick = () => bi(jt), e.appendChild(s), e.appendChild(jt), (r = (l = Qt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Qt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), KL(), qL(), YL(), window.addEventListener("comfygit:open-panel", ((u) => {
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
          h.remove(), Un("debug-env");
        }, h.appendChild(A);
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
          A.disabled = !0, A.textContent = "Restarting...", A.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Qt.refreshComboInNodes && (await Qt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, h.style.borderColor = "#4caf50", A.style.display = "none", setTimeout(() => {
                  h.remove();
                }, 3e3);
              } catch (M) {
                console.error("[ComfyGit] Failed to refresh nodes:", M), w.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", h.style.borderColor = "#4caf50", A.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", h.style.borderColor = "#e53935", A.textContent = "Try Again", A.disabled = !1, A.style.opacity = "1";
          }
        }, h.appendChild(A);
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
        console.log(`[ComfyGit] Workflow ${_}: ${h}`), await Wn(), un();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const _ = p.detail != null;
        _ && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), v = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const _ = WL(p.detail);
        _ && m(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const _ = p, { count: h = 1 } = _.detail || {};
        f(h);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
