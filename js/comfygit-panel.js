var Lc = Object.defineProperty;
var Dc = (e, s, o) => s in e ? Lc(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[s] = o;
var bn = (e, s, o) => Dc(e, typeof s != "symbol" ? s + "" : s, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function dl(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const gt = {}, wo = [], Cs = () => {
}, Ui = () => !1, Zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ml = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, fl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Oc = Object.prototype.hasOwnProperty, mt = (e, s) => Oc.call(e, s), Ze = Array.isArray, _o = (e) => pn(e) === "[object Map]", Po = (e) => pn(e) === "[object Set]", Al = (e) => pn(e) === "[object Date]", tt = (e) => typeof e == "function", $t = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Ai = (e) => (vt(e) || tt(e)) && tt(e.then) && tt(e.catch), zi = Object.prototype.toString, pn = (e) => zi.call(e), Uc = (e) => pn(e).slice(8, -1), Vi = (e) => pn(e) === "[object Object]", vl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jo = /* @__PURE__ */ dl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ea = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Ac = /-\w/g, rs = ea(
  (e) => e.replace(Ac, (s) => s.slice(1).toUpperCase())
), zc = /\B([A-Z])/g, Ys = ea(
  (e) => e.replace(zc, "-$1").toLowerCase()
), ta = ea((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pa = ea(
  (e) => e ? `on${ta(e)}` : ""
), qs = (e, s) => !Object.is(e, s), Rn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, Fi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, sa = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Vc = (e) => {
  const s = $t(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let zl;
const oa = () => zl || (zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (Ze(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? Gc(a) : Wt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if ($t(e) || vt(e))
    return e;
}
const Fc = /;(?![^(]*\))/g, Bc = /:([^]+)/, Wc = /\/\*[^]*?\*\//g;
function Gc(e) {
  const s = {};
  return e.replace(Wc, "").split(Fc).forEach((o) => {
    if (o) {
      const a = o.split(Bc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Ae(e) {
  let s = "";
  if ($t(e))
    s = e;
  else if (Ze(e))
    for (let o = 0; o < e.length; o++) {
      const a = Ae(e[o]);
      a && (s += a + " ");
    }
  else if (vt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hc = /* @__PURE__ */ dl(jc);
function Bi(e) {
  return !!e || e === "";
}
function qc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = ro(e[a], s[a]);
  return o;
}
function ro(e, s) {
  if (e === s) return !0;
  let o = Al(e), a = Al(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = fs(e), a = fs(s), o || a)
    return e === s;
  if (o = Ze(e), a = Ze(s), o || a)
    return o && a ? qc(e, s) : !1;
  if (o = vt(e), a = vt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !ro(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function pl(e, s) {
  return e.findIndex((o) => ro(o, s));
}
const Wi = (e) => !!(e && e.__v_isRef === !0), m = (e) => $t(e) ? e : e == null ? "" : Ze(e) || vt(e) && (e.toString === zi || !tt(e.toString)) ? Wi(e) ? m(e.value) : JSON.stringify(e, Gi, 2) : String(e), Gi = (e, s) => Wi(s) ? Gi(e, s.value) : _o(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[Ra(a, r) + " =>"] = l, o),
    {}
  )
} : Po(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Ra(o))
} : fs(s) ? Ra(s) : vt(s) && !Ze(s) && !Vi(s) ? String(s) : s, Ra = (e, s = "") => {
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
class Kc {
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
function Jc() {
  return Yt;
}
let ht;
const Na = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yt && Yt.active && Yt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Na.has(this) && (Na.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vl(this), Ki(this);
    const s = ht, o = ms;
    ht = this, ms = !0;
    try {
      return this.fn();
    } finally {
      Ji(this), ht = s, ms = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        yl(s);
      this.deps = this.depsTail = void 0, Vl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qa(this) && this.run();
  }
  get dirty() {
    return qa(this);
  }
}
let Hi = 0, Yo, Qo;
function qi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Qo, Qo = e;
    return;
  }
  e.next = Yo, Yo = e;
}
function gl() {
  Hi++;
}
function hl() {
  if (--Hi > 0)
    return;
  if (Qo) {
    let s = Qo;
    for (Qo = void 0; s; ) {
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
function Ki(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Ji(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), yl(a), Yc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function qa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Yi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Yi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ln) || (e.globalVersion = ln, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = ht, a = ms;
  ht = e, ms = !0;
  try {
    Ki(e);
    const l = e.fn(e._value);
    (s.version === 0 || qs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    ht = o, ms = a, Ji(e), e.flags &= -3;
  }
}
function yl(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      yl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Yc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ms = !0;
const Qi = [];
function Os() {
  Qi.push(ms), ms = !1;
}
function Us() {
  const e = Qi.pop();
  ms = e === void 0 ? !0 : e;
}
function Vl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = ht;
    ht = void 0;
    try {
      s();
    } finally {
      ht = o;
    }
  }
}
let ln = 0;
class Qc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!ht || !ms || ht === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ht)
      o = this.activeLink = new Qc(ht, this), ht.deps ? (o.prevDep = ht.depsTail, ht.depsTail.nextDep = o, ht.depsTail = o) : ht.deps = ht.depsTail = o, Xi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = ht.depsTail, o.nextDep = void 0, ht.depsTail.nextDep = o, ht.depsTail = o, ht.deps === o && (ht.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, ln++, this.notify(s);
  }
  notify(s) {
    gl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      hl();
    }
  }
}
function Xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Xi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ka = /* @__PURE__ */ new WeakMap(), ao = Symbol(
  ""
), Ja = Symbol(
  ""
), rn = Symbol(
  ""
);
function zt(e, s, o) {
  if (ms && ht) {
    let a = Ka.get(e);
    a || Ka.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new wl()), l.map = a, l.key = o), l.track();
  }
}
function Ns(e, s, o, a, l, r) {
  const c = Ka.get(e);
  if (!c) {
    ln++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (gl(), s === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), v = d && vl(o);
    if (d && o === "length") {
      const f = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === rn || !fs(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(rn)), s) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(ao)), _o(e) && u(c.get(Ja)));
          break;
        case "delete":
          d || (u(c.get(ao)), _o(e) && u(c.get(Ja)));
          break;
        case "set":
          _o(e) && u(c.get(ao));
          break;
      }
  }
  hl();
}
function po(e) {
  const s = rt(e);
  return s === e ? s : (zt(s, "iterate", rn), ls(e) ? s : s.map(vs));
}
function na(e) {
  return zt(e = rt(e), "iterate", rn), e;
}
function Ws(e, s) {
  return As(e) ? lo(e) ? Eo(vs(s)) : Eo(s) : vs(s);
}
const Xc = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return po(this).concat(
      ...e.map((s) => Ze(s) ? po(s) : s)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
  },
  every(e, s) {
    return Ts(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Ts(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Ws(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Ts(
      this,
      "find",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Ts(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Ts(
      this,
      "findLast",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Ts(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Ts(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return Da(this, "includes", e);
  },
  indexOf(...e) {
    return Da(this, "indexOf", e);
  },
  join(e) {
    return po(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Da(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Ts(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...e) {
    return Ao(this, "push", e);
  },
  reduce(e, ...s) {
    return Fl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return Fl(this, "reduceRight", e, s);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Ts(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Ao(this, "splice", e);
  },
  toReversed() {
    return po(this).toReversed();
  },
  toSorted(e) {
    return po(this).toSorted(e);
  },
  toSpliced(...e) {
    return po(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ao(this, "unshift", e);
  },
  values() {
    return La(this, "values", (e) => Ws(this, e));
  }
};
function La(e, s, o) {
  const a = na(e), l = a[s]();
  return a !== e && !ls(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Zc = Array.prototype;
function Ts(e, s, o, a, l, r) {
  const c = na(e), u = c !== e && !ls(e), d = c[s];
  if (d !== Zc[s]) {
    const p = d.apply(e, r);
    return u ? vs(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Ws(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, a);
  return u && l ? l(f) : f;
}
function Fl(e, s, o, a) {
  const l = na(e);
  let r = o;
  return l !== e && (ls(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ws(e, u), d, e);
  }), l[s](r, ...a);
}
function Da(e, s, o) {
  const a = rt(e);
  zt(a, "iterate", rn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && bl(o[0]) ? (o[0] = rt(o[0]), a[s](...o)) : l;
}
function Ao(e, s, o = []) {
  Os(), gl();
  const a = rt(e)[s].apply(e, o);
  return hl(), Us(), a;
}
const eu = /* @__PURE__ */ dl("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function tu(e) {
  fs(e) || (e = String(e));
  const s = rt(this);
  return zt(s, "has", e), s.hasOwnProperty(e);
}
class er {
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
      return a === (l ? r ? du : nr : r ? or : sr).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Ze(s);
    if (!l) {
      let d;
      if (c && (d = Xc[o]))
        return d;
      if (o === "hasOwnProperty")
        return tu;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(s) ? s : a
    );
    if ((fs(o) ? Zi.has(o) : eu(o)) || (l || zt(s, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && vl(o) ? u : u.value;
      return l && vt(d) ? Vn(d) : d;
    }
    return vt(u) ? l ? Vn(u) : mo(u) : u;
  }
}
class tr extends er {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Ze(s) && vl(o);
    if (!this._isShallow) {
      const v = As(r);
      if (!ls(a) && !As(a) && (r = rt(r), a = rt(a)), !c && Gt(r) && !Gt(a))
        return v || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : mt(s, o), d = Reflect.set(
      s,
      o,
      a,
      Gt(s) ? s : l
    );
    return s === rt(l) && (u ? qs(a, r) && Ns(s, "set", o, a) : Ns(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = mt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Ns(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!fs(o) || !Zi.has(o)) && zt(s, "has", o), a;
  }
  ownKeys(s) {
    return zt(
      s,
      "iterate",
      Ze(s) ? "length" : ao
    ), Reflect.ownKeys(s);
  }
}
class su extends er {
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
const ou = /* @__PURE__ */ new tr(), nu = /* @__PURE__ */ new su(), au = /* @__PURE__ */ new tr(!0);
const Ya = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function lu(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = rt(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...a), f = o ? Ya : s ? Eo : vs;
    return !s && zt(
      r,
      "iterate",
      d ? Ja : ao
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
function Cn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function iu(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = rt(r), u = rt(l);
      e || (qs(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = $n(c), v = s ? Ya : e ? Eo : vs;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && zt(rt(l), "iterate", ao), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = rt(r), u = rt(l);
      return e || (qs(l, u) && zt(c, "has", l), zt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = rt(u), v = s ? Ya : e ? Eo : vs;
      return !e && zt(d, "iterate", ao), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(l) {
        !s && !ls(l) && !As(l) && (l = rt(l));
        const r = rt(this);
        return $n(r).has.call(r, l) || (r.add(l), Ns(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !ls(r) && !As(r) && (r = rt(r));
        const c = rt(this), { has: u, get: d } = $n(c);
        let v = u.call(c, l);
        v || (l = rt(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? qs(r, f) && Ns(c, "set", l, r) : Ns(c, "add", l, r), this;
      },
      delete(l) {
        const r = rt(this), { has: c, get: u } = $n(r);
        let d = c.call(r, l);
        d || (l = rt(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Ns(r, "delete", l, void 0), v;
      },
      clear() {
        const l = rt(this), r = l.size !== 0, c = l.clear();
        return r && Ns(
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
    o[l] = lu(l, e, s);
  }), o;
}
function _l(e, s) {
  const o = iu(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    mt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const ru = {
  get: /* @__PURE__ */ _l(!1, !1)
}, cu = {
  get: /* @__PURE__ */ _l(!1, !0)
}, uu = {
  get: /* @__PURE__ */ _l(!0, !1)
};
const sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), du = /* @__PURE__ */ new WeakMap();
function mu(e) {
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
function fu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mu(Uc(e));
}
function mo(e) {
  return As(e) ? e : kl(
    e,
    !1,
    ou,
    ru,
    sr
  );
}
function vu(e) {
  return kl(
    e,
    !1,
    au,
    cu,
    or
  );
}
function Vn(e) {
  return kl(
    e,
    !0,
    nu,
    uu,
    nr
  );
}
function kl(e, s, o, a, l) {
  if (!vt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = fu(e);
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
function lo(e) {
  return As(e) ? lo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function As(e) {
  return !!(e && e.__v_isReadonly);
}
function ls(e) {
  return !!(e && e.__v_isShallow);
}
function bl(e) {
  return e ? !!e.__v_raw : !1;
}
function rt(e) {
  const s = e && e.__v_raw;
  return s ? rt(s) : e;
}
function pu(e) {
  return !mt(e, "__v_skip") && Object.isExtensible(e) && Fi(e, "__v_skip", !0), e;
}
const vs = (e) => vt(e) ? mo(e) : e, Eo = (e) => vt(e) ? Vn(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return gu(e, !1);
}
function gu(e, s) {
  return Gt(e) ? e : new hu(e, s);
}
class hu {
  constructor(s, o) {
    this.dep = new wl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : rt(s), this._value = o ? s : vs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || ls(s) || As(s);
    s = a ? s : rt(s), qs(s, o) && (this._rawValue = s, this._value = a ? s : vs(s), this.dep.trigger());
  }
}
function et(e) {
  return Gt(e) ? e.value : e;
}
const yu = {
  get: (e, s, o) => s === "__v_raw" ? e : et(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function ar(e) {
  return lo(e) ? e : new Proxy(e, yu);
}
class wu {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new wl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ln - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return qi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Yi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function _u(e, s, o = !1) {
  let a, l;
  return tt(e) ? a = e : (a = e.get, l = e.set), new wu(a, l, o);
}
const xn = {}, Fn = /* @__PURE__ */ new WeakMap();
let oo;
function ku(e, s = !1, o = oo) {
  if (o) {
    let a = Fn.get(o);
    a || Fn.set(o, a = []), a.push(e);
  }
}
function bu(e, s, o = gt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (T) => l ? T : ls(T) || l === !1 || l === 0 ? Ls(T, 1) : Ls(T);
  let f, p, w, y, _ = !1, x = !1;
  if (Gt(e) ? (p = () => e.value, _ = ls(e)) : lo(e) ? (p = () => v(e), _ = !0) : Ze(e) ? (x = !0, _ = e.some((T) => lo(T) || ls(T)), p = () => e.map((T) => {
    if (Gt(T))
      return T.value;
    if (lo(T))
      return v(T);
    if (tt(T))
      return d ? d(T, 2) : T();
  })) : tt(e) ? s ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Os();
      try {
        w();
      } finally {
        Us();
      }
    }
    const T = oo;
    oo = f;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      oo = T;
    }
  } : p = Cs, s && l) {
    const T = p, R = l === !0 ? 1 / 0 : l;
    p = () => Ls(T(), R);
  }
  const C = Jc(), S = () => {
    f.stop(), C && C.active && fl(C.effects, f);
  };
  if (r && s) {
    const T = s;
    s = (...R) => {
      T(...R), S();
    };
  }
  let O = x ? new Array(e.length).fill(xn) : xn;
  const I = (T) => {
    if (!(!(f.flags & 1) || !f.dirty && !T))
      if (s) {
        const R = f.run();
        if (l || _ || (x ? R.some((D, J) => qs(D, O[J])) : qs(R, O))) {
          w && w();
          const D = oo;
          oo = f;
          try {
            const J = [
              R,
              // pass undefined as the old value when it's changed for the first time
              O === xn ? void 0 : x && O[0] === xn ? [] : O,
              y
            ];
            O = R, d ? d(s, 3, J) : (
              // @ts-expect-error
              s(...J)
            );
          } finally {
            oo = D;
          }
        }
      } else
        f.run();
  };
  return u && u(I), f = new ji(p), f.scheduler = c ? () => c(I, !1) : I, y = (T) => ku(T, !1, f), w = f.onStop = () => {
    const T = Fn.get(f);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const R of T) R();
      Fn.delete(f);
    }
  }, s ? a ? I(!0) : O = f.run() : c ? c(I.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Ls(e, s = 1 / 0, o) {
  if (s <= 0 || !vt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Gt(e))
    Ls(e.value, s, o);
  else if (Ze(e))
    for (let a = 0; a < e.length; a++)
      Ls(e[a], s, o);
  else if (Po(e) || _o(e))
    e.forEach((a) => {
      Ls(a, s, o);
    });
  else if (Vi(e)) {
    for (const a in e)
      Ls(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ls(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    aa(l, s, o);
  }
}
function ps(e, s, o, a) {
  if (tt(e)) {
    const l = gn(e, s, o, a);
    return l && Ai(l) && l.catch((r) => {
      aa(r, s, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], s, o, a));
    return l;
  }
}
function aa(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || gt;
  if (s) {
    let u = s.parent;
    const d = s.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
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
      Os(), gn(r, null, 10, [
        e,
        d,
        v
      ]), Us();
      return;
    }
  }
  $u(e, o, l, a, c);
}
function $u(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let _s = -1;
const ko = [];
let Gs = null, ho = 0;
const lr = /* @__PURE__ */ Promise.resolve();
let Bn = null;
function Nt(e) {
  const s = Bn || lr;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Cu(e) {
  let s = _s + 1, o = Jt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Jt[a], r = cn(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function $l(e) {
  if (!(e.flags & 1)) {
    const s = cn(e), o = Jt[Jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= cn(o) ? Jt.push(e) : Jt.splice(Cu(s), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Bn || (Bn = lr.then(cr));
}
function xu(e) {
  Ze(e) ? ko.push(...e) : Gs && e.id === -1 ? Gs.splice(ho + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), ir();
}
function Bl(e, s, o = _s + 1) {
  for (; o < Jt.length; o++) {
    const a = Jt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function rr(e) {
  if (ko.length) {
    const s = [...new Set(ko)].sort(
      (o, a) => cn(o) - cn(a)
    );
    if (ko.length = 0, Gs) {
      Gs.push(...s);
      return;
    }
    for (Gs = s, ho = 0; ho < Gs.length; ho++) {
      const o = Gs[ho];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gs = null, ho = 0;
  }
}
const cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  try {
    for (_s = 0; _s < Jt.length; _s++) {
      const s = Jt[_s];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), gn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; _s < Jt.length; _s++) {
      const s = Jt[_s];
      s && (s.flags &= -2);
    }
    _s = -1, Jt.length = 0, rr(), Bn = null, (Jt.length || ko.length) && cr();
  }
}
let Ot = null, ur = null;
function Wn(e) {
  const s = Ot;
  return Ot = e, ur = e && e.type.__scopeId || null, s;
}
function g(e, s = Ot, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Hn(-1);
    const r = Wn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Wn(r), a._d && Hn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Tt(e, s) {
  if (Ot === null)
    return e;
  const o = da(Ot), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = gt] = s[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ls(c), a.push({
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
function Xs(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Os(), ps(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Us());
  }
}
const dr = Symbol("_vte"), mr = (e) => e.__isTeleport, Xo = (e) => e && (e.disabled || e.disabled === ""), Wl = (e) => e && (e.defer || e.defer === ""), Gl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, jl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Qa = (e, s) => {
  const o = e && e.to;
  return $t(o) ? s ? s(o) : null : o;
}, fr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: _, createText: x, createComment: C }
    } = v, S = Xo(s.props);
    let { shapeFlag: O, children: I, dynamicChildren: T } = s;
    if (e == null) {
      const R = s.el = x(""), D = s.anchor = x("");
      y(R, o, a), y(D, o, a);
      const J = (B, Z) => {
        O & 16 && f(
          I,
          B,
          Z,
          l,
          r,
          c,
          u,
          d
        );
      }, E = () => {
        const B = s.target = Qa(s.props, _), Z = vr(B, s, x, y);
        B && (c !== "svg" && Gl(B) ? c = "svg" : c !== "mathml" && jl(B) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), S || (J(B, Z), Nn(s, !1)));
      };
      S && (J(o, D), Nn(s, !0)), Wl(s.props) ? (s.el.__isMounted = !1, qt(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if (Wl(s.props) && e.el.__isMounted === !1) {
        qt(() => {
          fr.process(
            e,
            s,
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
      s.el = e.el, s.targetStart = e.targetStart;
      const R = s.anchor = e.anchor, D = s.target = e.target, J = s.targetAnchor = e.targetAnchor, E = Xo(e.props), B = E ? o : D, Z = E ? R : J;
      if (c === "svg" || Gl(D) ? c = "svg" : (c === "mathml" || jl(D)) && (c = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        B,
        l,
        r,
        c,
        u
      ), El(e, s, !0)) : d || p(
        e,
        s,
        B,
        Z,
        l,
        r,
        c,
        u,
        !1
      ), S)
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : Sn(
          s,
          o,
          R,
          v,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const X = s.target = Qa(
          s.props,
          _
        );
        X && Sn(
          s,
          X,
          null,
          v,
          0
        );
      } else E && Sn(
        s,
        D,
        J,
        v,
        1
      );
      Nn(s, S);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
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
      const y = r || !Xo(w);
      for (let _ = 0; _ < u.length; _++) {
        const x = u[_];
        a(
          x,
          s,
          o,
          y,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: Sn,
  hydrate: Su
};
function Sn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(c, s, o), (!p || Xo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        s,
        o,
        2
      );
  p && a(u, s, o);
}
function Su(e, s, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(x, C, S, O) {
    C.anchor = p(
      c(x),
      C,
      u(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = O;
  }
  const y = s.target = Qa(
    s.props,
    d
  ), _ = Xo(s.props);
  if (y) {
    const x = y._lpa || y.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          x,
          x && c(x)
        );
      else {
        s.anchor = c(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              s.targetStart = C;
            else if (C.data === "teleport anchor") {
              s.targetAnchor = C, y._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          C = c(C);
        }
        s.targetAnchor || vr(y, s, f, v), p(
          x && c(x),
          s,
          y,
          o,
          a,
          l,
          r
        );
      }
    Nn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const Ut = fr;
function Nn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function vr(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[dr] = r, e && (a(l, e), a(r, e)), r;
}
const Ps = Symbol("_leaveCb"), In = Symbol("_enterCb");
function pr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return it(() => {
    e.isMounted = !0;
  }), ra(() => {
    e.isUnmounting = !0;
  }), e;
}
const ns = [Function, Array], gr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ns,
  onEnter: ns,
  onAfterEnter: ns,
  onEnterCancelled: ns,
  // leave
  onBeforeLeave: ns,
  onLeave: ns,
  onAfterLeave: ns,
  onLeaveCancelled: ns,
  // appear
  onBeforeAppear: ns,
  onAppear: ns,
  onAfterAppear: ns,
  onAppearCancelled: ns
}, hr = (e) => {
  const s = e.subTree;
  return s.component ? hr(s.component) : s;
}, Iu = {
  name: "BaseTransition",
  props: gr,
  setup(e, { slots: s }) {
    const o = Ml(), a = pr();
    return () => {
      const l = s.default && Cl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = yr(l), c = rt(e), { mode: u } = c;
      if (a.isLeaving)
        return Oa(r);
      const d = Hl(r);
      if (!d)
        return Oa(r);
      let v = un(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Ft && co(d, v);
      let f = o.subTree && Hl(o.subTree);
      if (f && f.type !== Ft && !no(f, d) && hr(o).type !== Ft) {
        let p = un(
          f,
          c,
          a,
          o
        );
        if (co(f, p), u === "out-in" && d.type !== Ft)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Oa(r);
        u === "in-out" && d.type !== Ft ? p.delayLeave = (w, y, _) => {
          const x = wr(
            a,
            f
          );
          x[String(f.key)] = f, w[Ps] = () => {
            y(), w[Ps] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function yr(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Ft) {
        s = o;
        break;
      }
  }
  return s;
}
const Eu = Iu;
function wr(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function un(e, s, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: y,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: O,
    onAppearCancelled: I
  } = s, T = String(e.key), R = wr(o, e), D = (B, Z) => {
    B && ps(
      B,
      a,
      9,
      Z
    );
  }, J = (B, Z) => {
    const X = Z[1];
    D(B, Z), Ze(B) ? B.every((ie) => ie.length <= 1) && X() : B.length <= 1 && X();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(B) {
      let Z = d;
      if (!o.isMounted)
        if (r)
          Z = C || d;
        else
          return;
      B[Ps] && B[Ps](
        !0
        /* cancelled */
      );
      const X = R[T];
      X && no(e, X) && X.el[Ps] && X.el[Ps](), D(Z, [B]);
    },
    enter(B) {
      let Z = v, X = f, ie = p;
      if (!o.isMounted)
        if (r)
          Z = S || v, X = O || f, ie = I || p;
        else
          return;
      let he = !1;
      const te = B[In] = (Y) => {
        he || (he = !0, Y ? D(ie, [B]) : D(X, [B]), E.delayedLeave && E.delayedLeave(), B[In] = void 0);
      };
      Z ? J(Z, [B, te]) : te();
    },
    leave(B, Z) {
      const X = String(e.key);
      if (B[In] && B[In](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Z();
      D(w, [B]);
      let ie = !1;
      const he = B[Ps] = (te) => {
        ie || (ie = !0, Z(), te ? D(x, [B]) : D(_, [B]), B[Ps] = void 0, R[X] === e && delete R[X]);
      };
      R[X] = e, y ? J(y, [B, he]) : he();
    },
    clone(B) {
      const Z = un(
        B,
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
function Oa(e) {
  if (la(e))
    return e = Ks(e), e.children = null, e;
}
function Hl(e) {
  if (!la(e))
    return mr(e.type) && e.children ? yr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && tt(o.default))
      return o.default();
  }
}
function co(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, co(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Cl(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === q ? (c.patchFlag & 128 && l++, a = a.concat(
      Cl(c.children, s, u)
    )) : (s || c.type !== Ft) && a.push(u != null ? Ks(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Se(e, s) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, s, { setup: e })
  ) : e;
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Gn = /* @__PURE__ */ new WeakMap();
function Zo(e, s, o, a, l = !1) {
  if (Ze(e)) {
    e.forEach(
      (_, x) => Zo(
        _,
        s && (Ze(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (bo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? da(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, v = s && s.r, f = u.refs === gt ? u.refs = {} : u.refs, p = u.setupState, w = rt(p), y = p === gt ? Ui : (_) => mt(w, _);
  if (v != null && v !== d) {
    if (ql(s), $t(v))
      f[v] = null, y(v) && (p[v] = null);
    else if (Gt(v)) {
      v.value = null;
      const _ = s;
      _.k && (f[_.k] = null);
    }
  }
  if (tt(d))
    gn(d, u, 12, [c, f]);
  else {
    const _ = $t(d), x = Gt(d);
    if (_ || x) {
      const C = () => {
        if (e.f) {
          const S = _ ? y(d) ? p[d] : f[d] : d.value;
          if (l)
            Ze(S) && fl(S, r);
          else if (Ze(S))
            S.includes(r) || S.push(r);
          else if (_)
            f[d] = [r], y(d) && (p[d] = f[d]);
          else {
            const O = [r];
            d.value = O, e.k && (f[e.k] = O);
          }
        } else _ ? (f[d] = c, y(d) && (p[d] = c)) : x && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const S = () => {
          C(), Gn.delete(e);
        };
        S.id = -1, Gn.set(e, S), qt(S, o);
      } else
        ql(e), C();
    }
  }
}
function ql(e) {
  const s = Gn.get(e);
  s && (s.flags |= 8, Gn.delete(e));
}
oa().requestIdleCallback;
oa().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, la = (e) => e.type.__isKeepAlive;
function Tu(e, s) {
  kr(e, "a", s);
}
function Mu(e, s) {
  kr(e, "da", s);
}
function kr(e, s, o = Bt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ia(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      la(l.parent.vnode) && Pu(a, s, o, l), l = l.parent;
  }
}
function Pu(e, s, o, a) {
  const l = ia(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Ro(() => {
    fl(a[s], l);
  }, o);
}
function ia(e, s, o = Bt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Os();
      const u = hn(o), d = ps(s, o, e, c);
      return u(), Us(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const zs = (e) => (s, o = Bt) => {
  (!fn || e === "sp") && ia(e, (...a) => s(...a), o);
}, Ru = zs("bm"), it = zs("m"), Nu = zs(
  "bu"
), br = zs("u"), ra = zs(
  "bum"
), Ro = zs("um"), Lu = zs(
  "sp"
), Du = zs("rtg"), Ou = zs("rtc");
function Uu(e, s = Bt) {
  ia("ec", e, s);
}
const Au = "components", $r = Symbol.for("v-ndc");
function xl(e) {
  return $t(e) ? zu(Au, e, !1) || e : e || $r;
}
function zu(e, s, o = !0, a = !1) {
  const l = Ot || Bt;
  if (l) {
    const r = l.type;
    {
      const u = Id(
        r,
        !1
      );
      if (u && (u === s || u === rs(s) || u === ta(rs(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Kl(l[e] || r[e], s) || // global registration
      Kl(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function Kl(e, s) {
  return e && (e[s] || e[rs(s)] || e[ta(rs(s))]);
}
function ke(e, s, o, a) {
  let l;
  const r = o, c = Ze(e);
  if (c || $t(e)) {
    const u = c && lo(e);
    let d = !1, v = !1;
    u && (d = !ls(e), v = As(e), e = na(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = s(
        d ? v ? Eo(vs(e[f])) : vs(e[f]) : e[f],
        f,
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
        (u, d) => s(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const f = u[d];
        l[d] = s(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function ss(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
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
function ot(e, s, o = {}, a, l) {
  if (Ot.ce || Ot.parent && bo(Ot.parent) && Ot.parent.ce) {
    const v = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), N(
      q,
      null,
      [k("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && Cr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = N(
    q,
    {
      key: (u && !fs(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Cr(e) {
  return e.some((s) => mn(s) ? !(s.type === Ft || s.type === q && !Cr(s.children)) : !0) ? e : null;
}
const Xa = (e) => e ? Wr(e) ? da(e) : Xa(e.parent) : null, en = (
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
    $parent: (e) => Xa(e.parent),
    $root: (e) => Xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $l(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Nt.bind(e.proxy)),
    $watch: (e) => Qu.bind(e)
  })
), Ua = (e, s) => e !== gt && !e.__isScriptSetup && mt(e, s), Vu = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (s[0] !== "$") {
      const w = c[s];
      if (w !== void 0)
        switch (w) {
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
        if (Ua(a, s))
          return c[s] = 1, a[s];
        if (l !== gt && mt(l, s))
          return c[s] = 2, l[s];
        if (mt(r, s))
          return c[s] = 3, r[s];
        if (o !== gt && mt(o, s))
          return c[s] = 4, o[s];
        Za && (c[s] = 0);
      }
    }
    const v = en[s];
    let f, p;
    if (v)
      return s === "$attrs" && zt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[s])
    )
      return f;
    if (o !== gt && mt(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      p = d.config.globalProperties, mt(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ua(l, s) ? (l[s] = o, !0) : a !== gt && mt(a, s) ? (a[s] = o, !0) : mt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== gt && u[0] !== "$" && mt(e, u) || Ua(s, u) || mt(r, u) || mt(a, u) || mt(en, u) || mt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : mt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Jl(e) {
  return Ze(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Za = !0;
function Fu(e) {
  const s = Sr(e), o = e.proxy, a = e.ctx;
  Za = !1, s.beforeCreate && Yl(s.beforeCreate, e, "bc");
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
    beforeUpdate: y,
    updated: _,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: O,
    destroyed: I,
    unmounted: T,
    render: R,
    renderTracked: D,
    renderTriggered: J,
    errorCaptured: E,
    serverPrefetch: B,
    // public API
    expose: Z,
    inheritAttrs: X,
    // assets
    components: ie,
    directives: he,
    filters: te
  } = s;
  if (v && Bu(v, a, null), c)
    for (const Ne in c) {
      const ne = c[Ne];
      tt(ne) && (a[Ne] = ne.bind(o));
    }
  if (l) {
    const Ne = l.call(o, o);
    vt(Ne) && (e.data = mo(Ne));
  }
  if (Za = !0, r)
    for (const Ne in r) {
      const ne = r[Ne], ve = tt(ne) ? ne.bind(o, o) : tt(ne.get) ? ne.get.bind(o, o) : Cs, z = !tt(ne) && tt(ne.set) ? ne.set.bind(o) : Cs, pe = L({
        get: ve,
        set: z
      });
      Object.defineProperty(a, Ne, {
        enumerable: !0,
        configurable: !0,
        get: () => pe.value,
        set: (Pe) => pe.value = Pe
      });
    }
  if (u)
    for (const Ne in u)
      xr(u[Ne], a, o, Ne);
  if (d) {
    const Ne = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(Ne).forEach((ne) => {
      Ku(ne, Ne[ne]);
    });
  }
  f && Yl(f, e, "c");
  function ue(Ne, ne) {
    Ze(ne) ? ne.forEach((ve) => Ne(ve.bind(o))) : ne && Ne(ne.bind(o));
  }
  if (ue(Ru, p), ue(it, w), ue(Nu, y), ue(br, _), ue(Tu, x), ue(Mu, C), ue(Uu, E), ue(Ou, D), ue(Du, J), ue(ra, O), ue(Ro, T), ue(Lu, B), Ze(Z))
    if (Z.length) {
      const Ne = e.exposed || (e.exposed = {});
      Z.forEach((ne) => {
        Object.defineProperty(Ne, ne, {
          get: () => o[ne],
          set: (ve) => o[ne] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === Cs && (e.render = R), X != null && (e.inheritAttrs = X), ie && (e.components = ie), he && (e.directives = he), B && _r(e);
}
function Bu(e, s, o = Cs) {
  Ze(e) && (e = el(e));
  for (const a in e) {
    const l = e[a];
    let r;
    vt(l) ? "default" in l ? r = Ln(
      l.from || a,
      l.default,
      !0
    ) : r = Ln(l.from || a) : r = Ln(l), Gt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Yl(e, s, o) {
  ps(
    Ze(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function xr(e, s, o, a) {
  let l = a.includes(".") ? Tr(o, a) : () => o[a];
  if ($t(e)) {
    const r = s[e];
    tt(r) && kt(l, r);
  } else if (tt(e))
    kt(l, e.bind(o));
  else if (vt(e))
    if (Ze(e))
      e.forEach((r) => xr(r, s, o, a));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : s[e.handler];
      tt(r) && kt(l, r, e);
    }
}
function Sr(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (v) => jn(d, v, c, !0)
  ), jn(d, s, c)), vt(s) && r.set(s, d), d;
}
function jn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && jn(e, r, o, !0), l && l.forEach(
    (c) => jn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = Wu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const Wu = {
  data: Ql,
  props: Xl,
  emits: Xl,
  // objects
  methods: qo,
  computed: qo,
  // lifecycle
  beforeCreate: Ht,
  created: Ht,
  beforeMount: Ht,
  mounted: Ht,
  beforeUpdate: Ht,
  updated: Ht,
  beforeDestroy: Ht,
  beforeUnmount: Ht,
  destroyed: Ht,
  unmounted: Ht,
  activated: Ht,
  deactivated: Ht,
  errorCaptured: Ht,
  serverPrefetch: Ht,
  // assets
  components: qo,
  directives: qo,
  // watch
  watch: ju,
  // provide / inject
  provide: Ql,
  inject: Gu
};
function Ql(e, s) {
  return s ? e ? function() {
    return Mt(
      tt(e) ? e.call(this, this) : e,
      tt(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Gu(e, s) {
  return qo(el(e), el(s));
}
function el(e) {
  if (Ze(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Ht(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function qo(e, s) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Xl(e, s) {
  return e ? Ze(e) && Ze(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Jl(e),
    Jl(s ?? {})
  ) : s;
}
function ju(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Ht(e[a], s[a]);
  return o;
}
function Ir() {
  return {
    app: null,
    config: {
      isNativeTag: Ui,
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
let Hu = 0;
function qu(e, s) {
  return function(a, l = null) {
    tt(a) || (a = Mt({}, a)), l != null && !vt(l) && (l = null);
    const r = Ir(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Hu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Td,
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
          const y = v._ceVNode || k(a, l);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, f, w), d = !0, v._container = f, f.__vue_app__ = v, da(y.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (ps(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = $o;
        $o = v;
        try {
          return f();
        } finally {
          $o = p;
        }
      }
    };
    return v;
  };
}
let $o = null;
function Ku(e, s) {
  if (Bt) {
    let o = Bt.provides;
    const a = Bt.parent && Bt.parent.provides;
    a === o && (o = Bt.provides = Object.create(a)), o[e] = s;
  }
}
function Ln(e, s, o = !1) {
  const a = Ml();
  if (a || $o) {
    let l = $o ? $o._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(s) ? s.call(a && a.proxy) : s;
  }
}
const Ju = Symbol.for("v-scx"), Yu = () => Ln(Ju);
function kt(e, s, o) {
  return Er(e, s, o);
}
function Er(e, s, o = gt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = s && a || !s && r !== "post";
  let v;
  if (fn) {
    if (r === "sync") {
      const y = Yu();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = Cs, y.resume = Cs, y.pause = Cs, y;
    }
  }
  const f = Bt;
  u.call = (y, _, x) => ps(y, f, _, x);
  let p = !1;
  r === "post" ? u.scheduler = (y) => {
    qt(y, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (y, _) => {
    _ ? y() : $l(y);
  }), u.augmentJob = (y) => {
    s && (y.flags |= 4), p && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const w = bu(e, s, u);
  return fn && (v ? v.push(w) : d && w()), w;
}
function Qu(e, s, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? Tr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  tt(s) ? r = s : (r = s.handler, o = s);
  const c = hn(this), u = Er(l, r.bind(a), o);
  return c(), u;
}
function Tr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Xu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${rs(s)}Modifiers`] || e[`${Ys(s)}Modifiers`];
function Zu(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || gt;
  let l = o;
  const r = s.startsWith("update:"), c = r && Xu(a, s.slice(7));
  c && (c.trim && (l = o.map((f) => $t(f) ? f.trim() : f)), c.number && (l = o.map(sa)));
  let u, d = a[u = Pa(s)] || // also try camelCase event handler (#2249)
  a[u = Pa(rs(s))];
  !d && r && (d = a[u = Pa(Ys(s))]), d && ps(
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
    e.emitted[u] = !0, ps(
      v,
      e,
      6,
      l
    );
  }
}
const ed = /* @__PURE__ */ new WeakMap();
function Mr(e, s, o = !1) {
  const a = o ? ed : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Mr(v, s, !0);
      f && (u = !0, Mt(c, f));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (vt(e) && a.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), vt(e) && a.set(e, c), c);
}
function ca(e, s) {
  return !e || !Zn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), mt(e, s[0].toLowerCase() + s.slice(1)) || mt(e, Ys(s)) || mt(e, s));
}
function Zl(e) {
  const {
    type: s,
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
    setupState: y,
    ctx: _,
    inheritAttrs: x
  } = e, C = Wn(e);
  let S, O;
  try {
    if (o.shapeFlag & 4) {
      const T = l || a, R = T;
      S = bs(
        v.call(
          R,
          T,
          f,
          p,
          y,
          w,
          _
        )
      ), O = u;
    } else {
      const T = s;
      S = bs(
        T.length > 1 ? T(
          p,
          { attrs: u, slots: c, emit: d }
        ) : T(
          p,
          null
        )
      ), O = s.props ? u : td(u);
    }
  } catch (T) {
    tn.length = 0, aa(T, e, 1), S = k(Ft);
  }
  let I = S;
  if (O && x !== !1) {
    const T = Object.keys(O), { shapeFlag: R } = I;
    T.length && R & 7 && (r && T.some(ml) && (O = sd(
      O,
      r
    )), I = Ks(I, O, !1, !0));
  }
  return o.dirs && (I = Ks(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && co(I, o.transition), S = I, Wn(C), S;
}
const td = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Zn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, sd = (e, s) => {
  const o = {};
  for (const a in e)
    (!ml(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function od(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = s, v = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? ei(a, c, v) : !!c;
    if (d & 8) {
      const f = s.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== a[w] && !ca(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? ei(a, c, v) : !0 : !!c;
  return !1;
}
function ei(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ca(o, r))
      return !0;
  }
  return !1;
}
function nd({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Pr = {}, Rr = () => Object.create(Pr), Nr = (e) => Object.getPrototypeOf(e) === Pr;
function ad(e, s, o, a = !1) {
  const l = {}, r = Rr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Lr(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : vu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ld(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = rt(l), [d] = e.propsOptions;
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
        if (ca(e.emitsOptions, w))
          continue;
        const y = s[w];
        if (d)
          if (mt(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const _ = rs(w);
            l[_] = tl(
              d,
              u,
              _,
              y,
              e,
              !1
            );
          }
        else
          y !== r[w] && (r[w] = y, v = !0);
      }
    }
  } else {
    Lr(e, s, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!s || // for camelCase
      !mt(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ys(p)) === p || !mt(s, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = tl(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!s || !mt(s, p)) && (delete r[p], v = !0);
  }
  v && Ns(e.attrs, "set", "");
}
function Lr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Jo(d))
        continue;
      const v = s[d];
      let f;
      l && mt(l, f = rs(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : ca(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, c = !0);
    }
  if (r) {
    const d = rt(o), v = u || gt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = tl(
        l,
        d,
        p,
        v[p],
        e,
        !mt(v, p)
      );
    }
  }
  return c;
}
function tl(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = mt(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = hn(l);
          a = v[o] = d.call(
            null,
            s
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
    ] && (a === "" || a === Ys(o)) && (a = !0));
  }
  return a;
}
const id = /* @__PURE__ */ new WeakMap();
function Dr(e, s, o = !1) {
  const a = o ? id : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, y] = Dr(p, s, !0);
      Mt(c, w), y && u.push(...y);
    };
    !o && s.mixins.length && s.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return vt(e) && a.set(e, wo), wo;
  if (Ze(r))
    for (let f = 0; f < r.length; f++) {
      const p = rs(r[f]);
      ti(p) && (c[p] = gt);
    }
  else if (r)
    for (const f in r) {
      const p = rs(f);
      if (ti(p)) {
        const w = r[f], y = c[p] = Ze(w) || tt(w) ? { type: w } : Mt({}, w), _ = y.type;
        let x = !1, C = !0;
        if (Ze(_))
          for (let S = 0; S < _.length; ++S) {
            const O = _[S], I = tt(O) && O.name;
            if (I === "Boolean") {
              x = !0;
              break;
            } else I === "String" && (C = !1);
          }
        else
          x = tt(_) && _.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = C, (x || mt(y, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return vt(e) && a.set(e, v), v;
}
function ti(e) {
  return e[0] !== "$" && !Jo(e);
}
const Sl = (e) => e === "_" || e === "_ctx" || e === "$stable", Il = (e) => Ze(e) ? e.map(bs) : [bs(e)], rd = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => Il(s(...l)), o);
  return a._c = !1, a;
}, Or = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (Sl(l)) continue;
    const r = e[l];
    if (tt(r))
      s[l] = rd(l, r, a);
    else if (r != null) {
      const c = Il(r);
      s[l] = () => c;
    }
  }
}, Ur = (e, s) => {
  const o = Il(s);
  e.slots.default = () => o;
}, Ar = (e, s, o) => {
  for (const a in s)
    (o || !Sl(a)) && (e[a] = s[a]);
}, cd = (e, s, o) => {
  const a = e.slots = Rr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Ar(a, s, o), o && Fi(a, "_", l, !0)) : Or(s, a);
  } else s && Ur(e, s);
}, ud = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = gt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : Ar(l, s, o) : (r = !s.$stable, Or(s, l)), c = s;
  } else s && (Ur(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !Sl(u) && c[u] == null && delete l[u];
}, qt = pd;
function dd(e) {
  return md(e);
}
function md(e, s) {
  const o = oa();
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
    setScopeId: y = Cs,
    insertStaticContent: _
  } = e, x = (U, A, j, we = null, _e = null, be = null, Me = void 0, Le = null, Re = !!A.dynamicChildren) => {
    if (U === A)
      return;
    U && !no(U, A) && (we = M(U), Pe(U, _e, be, !0), U = null), A.patchFlag === -2 && (Re = !1, A.dynamicChildren = null);
    const { type: Ee, ref: je, shapeFlag: Ve } = A;
    switch (Ee) {
      case ua:
        C(U, A, j, we);
        break;
      case Ft:
        S(U, A, j, we);
        break;
      case za:
        U == null && O(A, j, we, Me);
        break;
      case q:
        ie(
          U,
          A,
          j,
          we,
          _e,
          be,
          Me,
          Le,
          Re
        );
        break;
      default:
        Ve & 1 ? R(
          U,
          A,
          j,
          we,
          _e,
          be,
          Me,
          Le,
          Re
        ) : Ve & 6 ? he(
          U,
          A,
          j,
          we,
          _e,
          be,
          Me,
          Le,
          Re
        ) : (Ve & 64 || Ve & 128) && Ee.process(
          U,
          A,
          j,
          we,
          _e,
          be,
          Me,
          Le,
          Re,
          Fe
        );
    }
    je != null && _e ? Zo(je, U && U.ref, be, A || U, !A) : je == null && U && U.ref != null && Zo(U.ref, null, be, U, !0);
  }, C = (U, A, j, we) => {
    if (U == null)
      a(
        A.el = u(A.children),
        j,
        we
      );
    else {
      const _e = A.el = U.el;
      A.children !== U.children && v(_e, A.children);
    }
  }, S = (U, A, j, we) => {
    U == null ? a(
      A.el = d(A.children || ""),
      j,
      we
    ) : A.el = U.el;
  }, O = (U, A, j, we) => {
    [U.el, U.anchor] = _(
      U.children,
      A,
      j,
      we,
      U.el,
      U.anchor
    );
  }, I = ({ el: U, anchor: A }, j, we) => {
    let _e;
    for (; U && U !== A; )
      _e = w(U), a(U, j, we), U = _e;
    a(A, j, we);
  }, T = ({ el: U, anchor: A }) => {
    let j;
    for (; U && U !== A; )
      j = w(U), l(U), U = j;
    l(A);
  }, R = (U, A, j, we, _e, be, Me, Le, Re) => {
    if (A.type === "svg" ? Me = "svg" : A.type === "math" && (Me = "mathml"), U == null)
      D(
        A,
        j,
        we,
        _e,
        be,
        Me,
        Le,
        Re
      );
    else {
      const Ee = U.el && U.el._isVueCE ? U.el : null;
      try {
        Ee && Ee._beginPatch(), B(
          U,
          A,
          _e,
          be,
          Me,
          Le,
          Re
        );
      } finally {
        Ee && Ee._endPatch();
      }
    }
  }, D = (U, A, j, we, _e, be, Me, Le) => {
    let Re, Ee;
    const { props: je, shapeFlag: Ve, transition: ye, dirs: Q } = U;
    if (Re = U.el = c(
      U.type,
      be,
      je && je.is,
      je
    ), Ve & 8 ? f(Re, U.children) : Ve & 16 && E(
      U.children,
      Re,
      null,
      we,
      _e,
      Aa(U, be),
      Me,
      Le
    ), Q && Xs(U, null, we, "created"), J(Re, U, U.scopeId, Me, we), je) {
      for (const xe in je)
        xe !== "value" && !Jo(xe) && r(Re, xe, null, je[xe], be, we);
      "value" in je && r(Re, "value", null, je.value, be), (Ee = je.onVnodeBeforeMount) && hs(Ee, we, U);
    }
    Q && Xs(U, null, we, "beforeMount");
    const We = fd(_e, ye);
    We && ye.beforeEnter(Re), a(Re, A, j), ((Ee = je && je.onVnodeMounted) || We || Q) && qt(() => {
      Ee && hs(Ee, we, U), We && ye.enter(Re), Q && Xs(U, null, we, "mounted");
    }, _e);
  }, J = (U, A, j, we, _e) => {
    if (j && y(U, j), we)
      for (let be = 0; be < we.length; be++)
        y(U, we[be]);
    if (_e) {
      let be = _e.subTree;
      if (A === be || Vr(be.type) && (be.ssContent === A || be.ssFallback === A)) {
        const Me = _e.vnode;
        J(
          U,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          _e.parent
        );
      }
    }
  }, E = (U, A, j, we, _e, be, Me, Le, Re = 0) => {
    for (let Ee = Re; Ee < U.length; Ee++) {
      const je = U[Ee] = Le ? js(U[Ee]) : bs(U[Ee]);
      x(
        null,
        je,
        A,
        j,
        we,
        _e,
        be,
        Me,
        Le
      );
    }
  }, B = (U, A, j, we, _e, be, Me) => {
    const Le = A.el = U.el;
    let { patchFlag: Re, dynamicChildren: Ee, dirs: je } = A;
    Re |= U.patchFlag & 16;
    const Ve = U.props || gt, ye = A.props || gt;
    let Q;
    if (j && Zs(j, !1), (Q = ye.onVnodeBeforeUpdate) && hs(Q, j, A, U), je && Xs(A, U, j, "beforeUpdate"), j && Zs(j, !0), (Ve.innerHTML && ye.innerHTML == null || Ve.textContent && ye.textContent == null) && f(Le, ""), Ee ? Z(
      U.dynamicChildren,
      Ee,
      Le,
      j,
      we,
      Aa(A, _e),
      be
    ) : Me || ne(
      U,
      A,
      Le,
      null,
      j,
      we,
      Aa(A, _e),
      be,
      !1
    ), Re > 0) {
      if (Re & 16)
        X(Le, Ve, ye, j, _e);
      else if (Re & 2 && Ve.class !== ye.class && r(Le, "class", null, ye.class, _e), Re & 4 && r(Le, "style", Ve.style, ye.style, _e), Re & 8) {
        const We = A.dynamicProps;
        for (let xe = 0; xe < We.length; xe++) {
          const Ye = We[xe], ze = Ve[Ye], De = ye[Ye];
          (De !== ze || Ye === "value") && r(Le, Ye, ze, De, _e, j);
        }
      }
      Re & 1 && U.children !== A.children && f(Le, A.children);
    } else !Me && Ee == null && X(Le, Ve, ye, j, _e);
    ((Q = ye.onVnodeUpdated) || je) && qt(() => {
      Q && hs(Q, j, A, U), je && Xs(A, U, j, "updated");
    }, we);
  }, Z = (U, A, j, we, _e, be, Me) => {
    for (let Le = 0; Le < A.length; Le++) {
      const Re = U[Le], Ee = A[Le], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Re.type === q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !no(Re, Ee) || // - In the case of a component, it could contain anything.
        Re.shapeFlag & 198) ? p(Re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      x(
        Re,
        Ee,
        je,
        null,
        we,
        _e,
        be,
        Me,
        !0
      );
    }
  }, X = (U, A, j, we, _e) => {
    if (A !== j) {
      if (A !== gt)
        for (const be in A)
          !Jo(be) && !(be in j) && r(
            U,
            be,
            A[be],
            null,
            _e,
            we
          );
      for (const be in j) {
        if (Jo(be)) continue;
        const Me = j[be], Le = A[be];
        Me !== Le && be !== "value" && r(U, be, Le, Me, _e, we);
      }
      "value" in j && r(U, "value", A.value, j.value, _e);
    }
  }, ie = (U, A, j, we, _e, be, Me, Le, Re) => {
    const Ee = A.el = U ? U.el : u(""), je = A.anchor = U ? U.anchor : u("");
    let { patchFlag: Ve, dynamicChildren: ye, slotScopeIds: Q } = A;
    Q && (Le = Le ? Le.concat(Q) : Q), U == null ? (a(Ee, j, we), a(je, j, we), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      j,
      je,
      _e,
      be,
      Me,
      Le,
      Re
    )) : Ve > 0 && Ve & 64 && ye && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    U.dynamicChildren ? (Z(
      U.dynamicChildren,
      ye,
      j,
      _e,
      be,
      Me,
      Le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || _e && A === _e.subTree) && El(
      U,
      A,
      !0
      /* shallow */
    )) : ne(
      U,
      A,
      j,
      je,
      _e,
      be,
      Me,
      Le,
      Re
    );
  }, he = (U, A, j, we, _e, be, Me, Le, Re) => {
    A.slotScopeIds = Le, U == null ? A.shapeFlag & 512 ? _e.ctx.activate(
      A,
      j,
      we,
      Me,
      Re
    ) : te(
      A,
      j,
      we,
      _e,
      be,
      Me,
      Re
    ) : Y(U, A, Re);
  }, te = (U, A, j, we, _e, be, Me) => {
    const Le = U.component = bd(
      U,
      we,
      _e
    );
    if (la(U) && (Le.ctx.renderer = Fe), $d(Le, !1, Me), Le.asyncDep) {
      if (_e && _e.registerDep(Le, ue, Me), !U.el) {
        const Re = Le.subTree = k(Ft);
        S(null, Re, A, j), U.placeholder = Re.el;
      }
    } else
      ue(
        Le,
        U,
        A,
        j,
        _e,
        be,
        Me
      );
  }, Y = (U, A, j) => {
    const we = A.component = U.component;
    if (od(U, A, j))
      if (we.asyncDep && !we.asyncResolved) {
        Ne(we, A, j);
        return;
      } else
        we.next = A, we.update();
    else
      A.el = U.el, we.vnode = A;
  }, ue = (U, A, j, we, _e, be, Me) => {
    const Le = () => {
      if (U.isMounted) {
        let { next: Ve, bu: ye, u: Q, parent: We, vnode: xe } = U;
        {
          const me = zr(U);
          if (me) {
            Ve && (Ve.el = xe.el, Ne(U, Ve, Me)), me.asyncDep.then(() => {
              U.isUnmounted || Le();
            });
            return;
          }
        }
        let Ye = Ve, ze;
        Zs(U, !1), Ve ? (Ve.el = xe.el, Ne(U, Ve, Me)) : Ve = xe, ye && Rn(ye), (ze = Ve.props && Ve.props.onVnodeBeforeUpdate) && hs(ze, We, Ve, xe), Zs(U, !0);
        const De = Zl(U), H = U.subTree;
        U.subTree = De, x(
          H,
          De,
          // parent may have changed if it's in a teleport
          p(H.el),
          // anchor may have changed if it's in a fragment
          M(H),
          U,
          _e,
          be
        ), Ve.el = De.el, Ye === null && nd(U, De.el), Q && qt(Q, _e), (ze = Ve.props && Ve.props.onVnodeUpdated) && qt(
          () => hs(ze, We, Ve, xe),
          _e
        );
      } else {
        let Ve;
        const { el: ye, props: Q } = A, { bm: We, m: xe, parent: Ye, root: ze, type: De } = U, H = bo(A);
        Zs(U, !1), We && Rn(We), !H && (Ve = Q && Q.onVnodeBeforeMount) && hs(Ve, Ye, A), Zs(U, !0);
        {
          ze.ce && // @ts-expect-error _def is private
          ze.ce._def.shadowRoot !== !1 && ze.ce._injectChildStyle(De);
          const me = U.subTree = Zl(U);
          x(
            null,
            me,
            j,
            we,
            U,
            _e,
            be
          ), A.el = me.el;
        }
        if (xe && qt(xe, _e), !H && (Ve = Q && Q.onVnodeMounted)) {
          const me = A;
          qt(
            () => hs(Ve, Ye, me),
            _e
          );
        }
        (A.shapeFlag & 256 || Ye && bo(Ye.vnode) && Ye.vnode.shapeFlag & 256) && U.a && qt(U.a, _e), U.isMounted = !0, A = j = we = null;
      }
    };
    U.scope.on();
    const Re = U.effect = new ji(Le);
    U.scope.off();
    const Ee = U.update = Re.run.bind(Re), je = U.job = Re.runIfDirty.bind(Re);
    je.i = U, je.id = U.uid, Re.scheduler = () => $l(je), Zs(U, !0), Ee();
  }, Ne = (U, A, j) => {
    A.component = U;
    const we = U.vnode.props;
    U.vnode = A, U.next = null, ld(U, A.props, we, j), ud(U, A.children, j), Os(), Bl(U), Us();
  }, ne = (U, A, j, we, _e, be, Me, Le, Re = !1) => {
    const Ee = U && U.children, je = U ? U.shapeFlag : 0, Ve = A.children, { patchFlag: ye, shapeFlag: Q } = A;
    if (ye > 0) {
      if (ye & 128) {
        z(
          Ee,
          Ve,
          j,
          we,
          _e,
          be,
          Me,
          Le,
          Re
        );
        return;
      } else if (ye & 256) {
        ve(
          Ee,
          Ve,
          j,
          we,
          _e,
          be,
          Me,
          Le,
          Re
        );
        return;
      }
    }
    Q & 8 ? (je & 16 && ee(Ee, _e, be), Ve !== Ee && f(j, Ve)) : je & 16 ? Q & 16 ? z(
      Ee,
      Ve,
      j,
      we,
      _e,
      be,
      Me,
      Le,
      Re
    ) : ee(Ee, _e, be, !0) : (je & 8 && f(j, ""), Q & 16 && E(
      Ve,
      j,
      we,
      _e,
      be,
      Me,
      Le,
      Re
    ));
  }, ve = (U, A, j, we, _e, be, Me, Le, Re) => {
    U = U || wo, A = A || wo;
    const Ee = U.length, je = A.length, Ve = Math.min(Ee, je);
    let ye;
    for (ye = 0; ye < Ve; ye++) {
      const Q = A[ye] = Re ? js(A[ye]) : bs(A[ye]);
      x(
        U[ye],
        Q,
        j,
        null,
        _e,
        be,
        Me,
        Le,
        Re
      );
    }
    Ee > je ? ee(
      U,
      _e,
      be,
      !0,
      !1,
      Ve
    ) : E(
      A,
      j,
      we,
      _e,
      be,
      Me,
      Le,
      Re,
      Ve
    );
  }, z = (U, A, j, we, _e, be, Me, Le, Re) => {
    let Ee = 0;
    const je = A.length;
    let Ve = U.length - 1, ye = je - 1;
    for (; Ee <= Ve && Ee <= ye; ) {
      const Q = U[Ee], We = A[Ee] = Re ? js(A[Ee]) : bs(A[Ee]);
      if (no(Q, We))
        x(
          Q,
          We,
          j,
          null,
          _e,
          be,
          Me,
          Le,
          Re
        );
      else
        break;
      Ee++;
    }
    for (; Ee <= Ve && Ee <= ye; ) {
      const Q = U[Ve], We = A[ye] = Re ? js(A[ye]) : bs(A[ye]);
      if (no(Q, We))
        x(
          Q,
          We,
          j,
          null,
          _e,
          be,
          Me,
          Le,
          Re
        );
      else
        break;
      Ve--, ye--;
    }
    if (Ee > Ve) {
      if (Ee <= ye) {
        const Q = ye + 1, We = Q < je ? A[Q].el : we;
        for (; Ee <= ye; )
          x(
            null,
            A[Ee] = Re ? js(A[Ee]) : bs(A[Ee]),
            j,
            We,
            _e,
            be,
            Me,
            Le,
            Re
          ), Ee++;
      }
    } else if (Ee > ye)
      for (; Ee <= Ve; )
        Pe(U[Ee], _e, be, !0), Ee++;
    else {
      const Q = Ee, We = Ee, xe = /* @__PURE__ */ new Map();
      for (Ee = We; Ee <= ye; Ee++) {
        const G = A[Ee] = Re ? js(A[Ee]) : bs(A[Ee]);
        G.key != null && xe.set(G.key, Ee);
      }
      let Ye, ze = 0;
      const De = ye - We + 1;
      let H = !1, me = 0;
      const re = new Array(De);
      for (Ee = 0; Ee < De; Ee++) re[Ee] = 0;
      for (Ee = Q; Ee <= Ve; Ee++) {
        const G = U[Ee];
        if (ze >= De) {
          Pe(G, _e, be, !0);
          continue;
        }
        let F;
        if (G.key != null)
          F = xe.get(G.key);
        else
          for (Ye = We; Ye <= ye; Ye++)
            if (re[Ye - We] === 0 && no(G, A[Ye])) {
              F = Ye;
              break;
            }
        F === void 0 ? Pe(G, _e, be, !0) : (re[F - We] = Ee + 1, F >= me ? me = F : H = !0, x(
          G,
          A[F],
          j,
          null,
          _e,
          be,
          Me,
          Le,
          Re
        ), ze++);
      }
      const Ke = H ? vd(re) : wo;
      for (Ye = Ke.length - 1, Ee = De - 1; Ee >= 0; Ee--) {
        const G = We + Ee, F = A[G], ae = A[G + 1], ge = G + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          ae.el || ae.placeholder
        ) : we;
        re[Ee] === 0 ? x(
          null,
          F,
          j,
          ge,
          _e,
          be,
          Me,
          Le,
          Re
        ) : H && (Ye < 0 || Ee !== Ke[Ye] ? pe(F, j, ge, 2) : Ye--);
      }
    }
  }, pe = (U, A, j, we, _e = null) => {
    const { el: be, type: Me, transition: Le, children: Re, shapeFlag: Ee } = U;
    if (Ee & 6) {
      pe(U.component.subTree, A, j, we);
      return;
    }
    if (Ee & 128) {
      U.suspense.move(A, j, we);
      return;
    }
    if (Ee & 64) {
      Me.move(U, A, j, Fe);
      return;
    }
    if (Me === q) {
      a(be, A, j);
      for (let Ve = 0; Ve < Re.length; Ve++)
        pe(Re[Ve], A, j, we);
      a(U.anchor, A, j);
      return;
    }
    if (Me === za) {
      I(U, A, j);
      return;
    }
    if (we !== 2 && Ee & 1 && Le)
      if (we === 0)
        Le.beforeEnter(be), a(be, A, j), qt(() => Le.enter(be), _e);
      else {
        const { leave: Ve, delayLeave: ye, afterLeave: Q } = Le, We = () => {
          U.ctx.isUnmounted ? l(be) : a(be, A, j);
        }, xe = () => {
          be._isLeaving && be[Ps](
            !0
            /* cancelled */
          ), Ve(be, () => {
            We(), Q && Q();
          });
        };
        ye ? ye(be, We, xe) : xe();
      }
    else
      a(be, A, j);
  }, Pe = (U, A, j, we = !1, _e = !1) => {
    const {
      type: be,
      props: Me,
      ref: Le,
      children: Re,
      dynamicChildren: Ee,
      shapeFlag: je,
      patchFlag: Ve,
      dirs: ye,
      cacheIndex: Q
    } = U;
    if (Ve === -2 && (_e = !1), Le != null && (Os(), Zo(Le, null, j, U, !0), Us()), Q != null && (A.renderCache[Q] = void 0), je & 256) {
      A.ctx.deactivate(U);
      return;
    }
    const We = je & 1 && ye, xe = !bo(U);
    let Ye;
    if (xe && (Ye = Me && Me.onVnodeBeforeUnmount) && hs(Ye, A, U), je & 6)
      W(U.component, j, we);
    else {
      if (je & 128) {
        U.suspense.unmount(j, we);
        return;
      }
      We && Xs(U, null, A, "beforeUnmount"), je & 64 ? U.type.remove(
        U,
        A,
        j,
        Fe,
        we
      ) : Ee && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ee.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (be !== q || Ve > 0 && Ve & 64) ? ee(
        Ee,
        A,
        j,
        !1,
        !0
      ) : (be === q && Ve & 384 || !_e && je & 16) && ee(Re, A, j), we && Ue(U);
    }
    (xe && (Ye = Me && Me.onVnodeUnmounted) || We) && qt(() => {
      Ye && hs(Ye, A, U), We && Xs(U, null, A, "unmounted");
    }, j);
  }, Ue = (U) => {
    const { type: A, el: j, anchor: we, transition: _e } = U;
    if (A === q) {
      se(j, we);
      return;
    }
    if (A === za) {
      T(U);
      return;
    }
    const be = () => {
      l(j), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (U.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Me, delayLeave: Le } = _e, Re = () => Me(j, be);
      Le ? Le(U.el, be, Re) : Re();
    } else
      be();
  }, se = (U, A) => {
    let j;
    for (; U !== A; )
      j = w(U), l(U), U = j;
    l(A);
  }, W = (U, A, j) => {
    const { bum: we, scope: _e, job: be, subTree: Me, um: Le, m: Re, a: Ee } = U;
    si(Re), si(Ee), we && Rn(we), _e.stop(), be && (be.flags |= 8, Pe(Me, U, A, j)), Le && qt(Le, A), qt(() => {
      U.isUnmounted = !0;
    }, A);
  }, ee = (U, A, j, we = !1, _e = !1, be = 0) => {
    for (let Me = be; Me < U.length; Me++)
      Pe(U[Me], A, j, we, _e);
  }, M = (U) => {
    if (U.shapeFlag & 6)
      return M(U.component.subTree);
    if (U.shapeFlag & 128)
      return U.suspense.next();
    const A = w(U.anchor || U.el), j = A && A[dr];
    return j ? w(j) : A;
  };
  let P = !1;
  const le = (U, A, j) => {
    U == null ? A._vnode && Pe(A._vnode, null, null, !0) : x(
      A._vnode || null,
      U,
      A,
      null,
      null,
      null,
      j
    ), A._vnode = U, P || (P = !0, Bl(), rr(), P = !1);
  }, Fe = {
    p: x,
    um: Pe,
    m: pe,
    r: Ue,
    mt: te,
    mc: E,
    pc: ne,
    pbc: Z,
    n: M,
    o: e
  };
  return {
    render: le,
    hydrate: void 0,
    createApp: qu(le)
  };
}
function Aa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Zs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function fd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function El(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Ze(a) && Ze(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && El(c, u)), u.type === ua && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Ft && !u.el && (u.el = c.el);
    }
}
function vd(e) {
  const s = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = s[c];
  return o;
}
function zr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : zr(s);
}
function si(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const Vr = (e) => e.__isSuspense;
function pd(e, s) {
  s && s.pendingBranch ? Ze(e) ? s.effects.push(...e) : s.effects.push(e) : xu(e);
}
const q = Symbol.for("v-fgt"), ua = Symbol.for("v-txt"), Ft = Symbol.for("v-cmt"), za = Symbol.for("v-stc"), tn = [];
let es = null;
function n(e = !1) {
  tn.push(es = e ? null : []);
}
function gd() {
  tn.pop(), es = tn[tn.length - 1] || null;
}
let dn = 1;
function Hn(e, s = !1) {
  dn += e, e < 0 && es && s && (es.hasOnce = !0);
}
function Fr(e) {
  return e.dynamicChildren = dn > 0 ? es || wo : null, gd(), dn > 0 && es && es.push(e), e;
}
function i(e, s, o, a, l, r) {
  return Fr(
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
function N(e, s, o, a, l) {
  return Fr(
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
function mn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function no(e, s) {
  return e.type === s.type && e.key === s.key;
}
const Br = ({ key: e }) => e ?? null, Dn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || tt(e) ? { i: Ot, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === q ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Br(s),
    ref: s && Dn(s),
    scopeId: ur,
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
    ctx: Ot
  };
  return u ? (Tl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), dn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const k = hd;
function hd(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === $r) && (e = Ft), mn(e)) {
    const u = Ks(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Tl(u, o), dn > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (Ed(e) && (e = e.__vccOpts), s) {
    s = yd(s);
    let { class: u, style: d } = s;
    u && !$t(u) && (s.class = Ae(u)), vt(d) && (bl(d) && !Ze(d) && (d = Mt({}, d)), s.style = Wt(d));
  }
  const c = $t(e) ? 1 : Vr(e) ? 128 : mr(e) ? 64 : vt(e) ? 4 : tt(e) ? 2 : 0;
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
function yd(e) {
  return e ? bl(e) || Nr(e) ? Mt({}, e) : e : null;
}
function Ks(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = s ? wd(l || {}, s) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Br(v),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ze(r) ? r.concat(Dn(s)) : [r, Dn(s)] : Dn(s)
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
    patchFlag: s && e.type !== q ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && Ks(e.ssContent),
    ssFallback: e.ssFallback && Ks(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && co(
    f,
    d.clone(f)
  ), f;
}
function $(e = " ", s = 0) {
  return k(ua, null, e, s);
}
function h(e = "", s = !1) {
  return s ? (n(), N(Ft, null, e)) : k(Ft, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? k(Ft) : Ze(e) ? k(
    q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : mn(e) ? js(e) : k(ua, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ks(e);
}
function Tl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Ze(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Tl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Nr(s) ? s._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else tt(s) ? (s = { default: s, _ctx: Ot }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function wd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Ae([s.class, a.class]));
      else if (l === "style")
        s.style = Wt([s.style, a.style]);
      else if (Zn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Ze(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function hs(e, s, o, a = null) {
  ps(e, s, 7, [
    o,
    a
  ]);
}
const _d = Ir();
let kd = 0;
function bd(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || _d, r = {
    uid: kd++,
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
    scope: new Kc(
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
    propsOptions: Dr(a, l),
    emitsOptions: Mr(a, l),
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Zu.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const Ml = () => Bt || Ot;
let qn, sl;
{
  const e = oa(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  qn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), sl = s(
    "__VUE_SSR_SETTERS__",
    (o) => fn = o
  );
}
const hn = (e) => {
  const s = Bt;
  return qn(e), e.scope.on(), () => {
    e.scope.off(), qn(s);
  };
}, oi = () => {
  Bt && Bt.scope.off(), qn(null);
};
function Wr(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function $d(e, s = !1, o = !1) {
  s && sl(s);
  const { props: a, children: l } = e.vnode, r = Wr(e);
  ad(e, a, r, s), cd(e, l, o || s);
  const c = r ? Cd(e, s) : void 0;
  return s && sl(!1), c;
}
function Cd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vu);
  const { setup: a } = o;
  if (a) {
    Os();
    const l = e.setupContext = a.length > 1 ? Sd(e) : null, r = hn(e), c = gn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ai(c);
    if (Us(), r(), (u || e.sp) && !bo(e) && _r(e), u) {
      if (c.then(oi, oi), s)
        return c.then((d) => {
          ni(e, d);
        }).catch((d) => {
          aa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ni(e, c);
  } else
    Gr(e);
}
function ni(e, s, o) {
  tt(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : vt(s) && (e.setupState = ar(s)), Gr(e);
}
function Gr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || Cs);
  {
    const l = hn(e);
    Os();
    try {
      Fu(e);
    } finally {
      Us(), l();
    }
  }
}
const xd = {
  get(e, s) {
    return zt(e, "get", ""), e[s];
  }
};
function Sd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, xd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function da(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ar(pu(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in en)
        return en[o](e);
    },
    has(s, o) {
      return o in s || o in en;
    }
  })) : e.proxy;
}
function Id(e, s = !0) {
  return tt(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Ed(e) {
  return tt(e) && "__vccOpts" in e;
}
const L = (e, s) => _u(e, s, fn);
function No(e, s, o) {
  try {
    Hn(-1);
    const a = arguments.length;
    return a === 2 ? vt(s) && !Ze(s) ? mn(s) ? k(e, null, [s]) : k(e, s) : k(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && mn(o) && (o = [o]), k(e, s, o));
  } finally {
    Hn(1);
  }
}
const Td = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ol;
const ai = typeof window < "u" && window.trustedTypes;
if (ai)
  try {
    ol = /* @__PURE__ */ ai.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = ol ? (e) => ol.createHTML(e) : (e) => e, Md = "http://www.w3.org/2000/svg", Pd = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, li = Ms && /* @__PURE__ */ Ms.createElement("template"), Rd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ms.createElementNS(Md, e) : s === "mathml" ? Ms.createElementNS(Pd, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ms.createTextNode(e),
  createComment: (e) => Ms.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ms.querySelector(e),
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
      li.innerHTML = jr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = li.content;
      if (a === "svg" || a === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
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
}, Fs = "transition", zo = "animation", To = Symbol("_vtc"), Hr = {
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
}, qr = /* @__PURE__ */ Mt(
  {},
  gr,
  Hr
), Nd = (e) => (e.displayName = "Transition", e.props = qr, e), Ld = /* @__PURE__ */ Nd(
  (e, { slots: s }) => No(Eu, Kr(e), s)
), eo = (e, s = []) => {
  Ze(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ii = (e) => e ? Ze(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Kr(e) {
  const s = {};
  for (const ie in e)
    ie in Hr || (s[ie] = e[ie]);
  if (e.css === !1)
    return s;
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
    leaveToClass: y = `${o}-leave-to`
  } = e, _ = Dd(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: O,
    onEnterCancelled: I,
    onLeave: T,
    onLeaveCancelled: R,
    onBeforeAppear: D = S,
    onAppear: J = O,
    onAppearCancelled: E = I
  } = s, B = (ie, he, te, Y) => {
    ie._enterCancelled = Y, Bs(ie, he ? f : u), Bs(ie, he ? v : c), te && te();
  }, Z = (ie, he) => {
    ie._isLeaving = !1, Bs(ie, p), Bs(ie, y), Bs(ie, w), he && he();
  }, X = (ie) => (he, te) => {
    const Y = ie ? J : O, ue = () => B(he, ie, te);
    eo(Y, [he, ue]), ri(() => {
      Bs(he, ie ? d : r), ws(he, ie ? f : u), ii(Y) || ci(he, a, x, ue);
    });
  };
  return Mt(s, {
    onBeforeEnter(ie) {
      eo(S, [ie]), ws(ie, r), ws(ie, c);
    },
    onBeforeAppear(ie) {
      eo(D, [ie]), ws(ie, d), ws(ie, v);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(ie, he) {
      ie._isLeaving = !0;
      const te = () => Z(ie, he);
      ws(ie, p), ie._enterCancelled ? (ws(ie, w), nl(ie)) : (nl(ie), ws(ie, w)), ri(() => {
        ie._isLeaving && (Bs(ie, p), ws(ie, y), ii(T) || ci(ie, a, C, te));
      }), eo(T, [ie, te]);
    },
    onEnterCancelled(ie) {
      B(ie, !1, void 0, !0), eo(I, [ie]);
    },
    onAppearCancelled(ie) {
      B(ie, !0, void 0, !0), eo(E, [ie]);
    },
    onLeaveCancelled(ie) {
      Z(ie), eo(R, [ie]);
    }
  });
}
function Dd(e) {
  if (e == null)
    return null;
  if (vt(e))
    return [Va(e.enter), Va(e.leave)];
  {
    const s = Va(e);
    return [s, s];
  }
}
function Va(e) {
  return Vc(e);
}
function ws(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[To] || (e[To] = /* @__PURE__ */ new Set())).add(s);
}
function Bs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[To];
  o && (o.delete(s), o.size || (e[To] = void 0));
}
function ri(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Od = 0;
function ci(e, s, o, a) {
  const l = e._endId = ++Od, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Jr(e, s);
  if (!c)
    return a();
  const v = c + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (y) => {
    y.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, u + 1), e.addEventListener(v, w);
}
function Jr(e, s) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Fs}Delay`), r = a(`${Fs}Duration`), c = ui(l, r), u = a(`${zo}Delay`), d = a(`${zo}Duration`), v = ui(u, d);
  let f = null, p = 0, w = 0;
  s === Fs ? c > 0 && (f = Fs, p = c, w = r.length) : s === zo ? v > 0 && (f = zo, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Fs : zo : null, w = f ? f === Fs ? r.length : d.length : 0);
  const y = f === Fs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Fs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: y
  };
}
function ui(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => di(o) + di(e[a])));
}
function di(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ud(e, s, o) {
  const a = e[To];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const mi = Symbol("_vod"), Ad = Symbol("_vsh"), zd = Symbol(""), Vd = /(?:^|;)\s*display\s*:/;
function Fd(e, s, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if ($t(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && On(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && On(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), On(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[zd];
      c && (o += ";" + c), a.cssText = o, r = Vd.test(o);
    }
  } else s && e.removeAttribute("style");
  mi in e && (e[mi] = r ? a.display : "", e[Ad] && (a.display = "none"));
}
const fi = /\s*!important$/;
function On(e, s, o) {
  if (Ze(o))
    o.forEach((a) => On(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = Bd(e, s);
    fi.test(o) ? e.setProperty(
      Ys(a),
      o.replace(fi, ""),
      "important"
    ) : e[a] = o;
  }
}
const vi = ["Webkit", "Moz", "ms"], Fa = {};
function Bd(e, s) {
  const o = Fa[s];
  if (o)
    return o;
  let a = rs(s);
  if (a !== "filter" && a in e)
    return Fa[s] = a;
  a = ta(a);
  for (let l = 0; l < vi.length; l++) {
    const r = vi[l] + a;
    if (r in e)
      return Fa[s] = r;
  }
  return s;
}
const pi = "http://www.w3.org/1999/xlink";
function gi(e, s, o, a, l, r = Hc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(pi, s.slice(6, s.length)) : e.setAttributeNS(pi, s, o) : o == null || r && !Bi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : fs(o) ? String(o) : o
  );
}
function hi(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? jr(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = Bi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
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
function Wd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const yi = Symbol("_vei");
function Gd(e, s, o, a, l = null) {
  const r = e[yi] || (e[yi] = {}), c = r[s];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = jd(s);
    if (a) {
      const v = r[s] = Kd(
        a,
        l
      );
      Ds(e, u, v, d);
    } else c && (Wd(e, u, c, d), r[s] = void 0);
  }
}
const wi = /(?:Once|Passive|Capture)$/;
function jd(e) {
  let s;
  if (wi.test(e)) {
    s = {};
    let a;
    for (; a = e.match(wi); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ys(e.slice(2)), s];
}
let Ba = 0;
const Hd = /* @__PURE__ */ Promise.resolve(), qd = () => Ba || (Hd.then(() => Ba = 0), Ba = Date.now());
function Kd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ps(
      Jd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = qd(), o;
}
function Jd(e, s) {
  if (Ze(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const _i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yd = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? Ud(e, a, c) : s === "style" ? Fd(e, o, a) : Zn(s) ? ml(s) || Gd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Qd(e, s, a, c)) ? (hi(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && gi(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !$t(a)) ? hi(e, rs(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), gi(e, s, a, c));
};
function Qd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && _i(s) && tt(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return _i(s) && $t(o) ? !1 : s in e;
}
const Yr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Kn = Symbol("_moveCb"), ki = Symbol("_enterCb"), Xd = (e) => (delete e.props.mode, e), Zd = /* @__PURE__ */ Xd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, qr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Ml(), a = pr();
    let l, r;
    return br(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!nm(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(tm), l.forEach(sm);
      const u = l.filter(om);
      nl(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        ws(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[Kn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Kn] = null, Bs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = rt(e), u = Kr(c);
      let d = c.tag || q;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), co(
            f,
            un(
              f,
              u,
              a,
              o
            )
          ), Yr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = s.default ? Cl(s.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && co(
          f,
          un(f, u, a, o)
        );
      }
      return k(d, null, r);
    };
  }
}), em = Zd;
function tm(e) {
  const s = e.el;
  s[Kn] && s[Kn](), s[ki] && s[ki]();
}
function sm(e) {
  Qr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function om(e) {
  const s = Yr.get(e), o = Qr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function nm(e, s, o) {
  const a = e.cloneNode(), l = e[To];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Jr(a);
  return r.removeChild(a), c;
}
const Js = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ze(s) ? (o) => Rn(s, o) : s;
};
function am(e) {
  e.target.composing = !0;
}
function bi(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const is = Symbol("_assign");
function $i(e, s, o) {
  return s && (e = e.trim()), o && (e = sa(e)), e;
}
const Co = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[is] = Js(l);
    const r = a || l.props && l.props.type === "number";
    Ds(e, s ? "change" : "input", (c) => {
      c.target.composing || e[is]($i(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = $i(e.value, o, r);
    }), s || (Ds(e, "compositionstart", am), Ds(e, "compositionend", bi), Ds(e, "change", bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[is] = Js(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? sa(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Jn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[is] = Js(o), Ds(e, "change", () => {
      const a = e._modelValue, l = Mo(e), r = e.checked, c = e[is];
      if (Ze(a)) {
        const u = pl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(u, 1), c(v);
        }
      } else if (Po(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Xr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ci,
  beforeUpdate(e, s, o) {
    e[is] = Js(o), Ci(e, s, o);
  }
};
function Ci(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ze(s))
    l = pl(s, a.props.value) > -1;
  else if (Po(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = ro(s, Xr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Un = {
  created(e, { value: s }, o) {
    e.checked = ro(s, o.props.value), e[is] = Js(o), Ds(e, "change", () => {
      e[is](Mo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[is] = Js(a), s !== o && (e.checked = ro(s, a.props.value));
  }
}, xo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Po(s);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? sa(Mo(c)) : Mo(c)
      );
      e[is](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Nt(() => {
        e._assigning = !1;
      });
    }), e[is] = Js(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    xi(e, s);
  },
  beforeUpdate(e, s, o) {
    e[is] = Js(o);
  },
  updated(e, { value: s }) {
    e._assigning || xi(e, s);
  }
};
function xi(e, s) {
  const o = e.multiple, a = Ze(s);
  if (!(o && !a && !Po(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Mo(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((v) => String(v) === String(u)) : c.selected = pl(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (ro(Mo(c), s)) {
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
function Xr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const lm = ["ctrl", "shift", "alt", "meta"], im = {
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
  exact: (e, s) => lm.some((o) => e[`${o}Key`] && !s.includes(o))
}, dt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = im[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, rm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ts = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ys(l.key);
    if (s.some(
      (c) => c === r || rm[c] === r
    ))
      return e(l);
  }));
}, cm = /* @__PURE__ */ Mt({ patchProp: Yd }, Rd);
let Si;
function um() {
  return Si || (Si = dd(cm));
}
const yn = ((...e) => {
  const s = um().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = mm(a);
    if (!l) return;
    const r = s._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, dm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function dm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function mm(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const fm = { class: "panel-layout" }, vm = {
  key: 0,
  class: "panel-layout-header"
}, pm = {
  key: 1,
  class: "panel-layout-search"
}, gm = { class: "panel-layout-content" }, hm = {
  key: 2,
  class: "panel-layout-footer"
}, ym = /* @__PURE__ */ Se({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", fm, [
      s.$slots.header ? (n(), i("div", vm, [
        ot(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (n(), i("div", pm, [
        ot(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", gm, [
        ot(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", hm, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Ie = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Pt = /* @__PURE__ */ Ie(ym, [["__scopeId", "data-v-21565df9"]]), wm = {
  key: 0,
  class: "panel-title-prefix"
}, _m = {
  key: 1,
  class: "panel-title-prefix-theme"
}, km = /* @__PURE__ */ Se({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), N(xl(`h${e.level}`), {
      class: Ae(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", wm, m(e.prefix), 1)) : (n(), i("span", _m)),
        ot(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bm = /* @__PURE__ */ Ie(km, [["__scopeId", "data-v-c3875efc"]]), $m = ["title"], Cm = ["width", "height"], xm = /* @__PURE__ */ Se({
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
      ])], 8, Cm))
    ], 8, $m));
  }
}), Zr = /* @__PURE__ */ Ie(xm, [["__scopeId", "data-v-6fc7f16d"]]), Sm = { class: "header-left" }, Im = {
  key: 0,
  class: "header-actions"
}, Em = /* @__PURE__ */ Se({
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
      class: Ae(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Sm, [
        k(bm, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), N(Zr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", Im, [
        ot(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ Ie(Em, [["__scopeId", "data-v-55a62cd6"]]), Tm = {
  key: 0,
  class: "section-title-count"
}, Mm = {
  key: 1,
  class: "section-title-icon"
}, Pm = /* @__PURE__ */ Se({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), N(xl(`h${e.level}`), {
      class: Ae(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Tm, "(" + m(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", Mm, m(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), as = /* @__PURE__ */ Ie(Pm, [["__scopeId", "data-v-559361eb"]]), Rm = { class: "status-grid" }, Nm = { class: "status-grid__columns" }, Lm = { class: "status-grid__column" }, Dm = { class: "status-grid__title" }, Om = { class: "status-grid__column status-grid__column--right" }, Um = { class: "status-grid__title" }, Am = {
  key: 0,
  class: "status-grid__footer"
}, zm = /* @__PURE__ */ Se({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", Rm, [
      t("div", Nm, [
        t("div", Lm, [
          t("h4", Dm, m(e.leftTitle), 1),
          ot(s.$slots, "left", {}, void 0)
        ]),
        t("div", Om, [
          t("h4", Um, m(e.rightTitle), 1),
          ot(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", Am, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Vm = /* @__PURE__ */ Ie(zm, [["__scopeId", "data-v-73b7ba3f"]]), Fm = {
  key: 0,
  class: "status-item__icon"
}, Bm = {
  key: 1,
  class: "status-item__count"
}, Wm = { class: "status-item__label" }, Gm = /* @__PURE__ */ Se({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = L(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Ae(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Fm, m(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", Bm, m(e.count), 1)) : h("", !0),
      t("span", Wm, m(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ Ie(Gm, [["__scopeId", "data-v-6f929183"]]), jm = { class: "issue-card__header" }, Hm = { class: "issue-card__icon" }, qm = { class: "issue-card__title" }, Km = {
  key: 0,
  class: "issue-card__content"
}, Jm = {
  key: 0,
  class: "issue-card__description"
}, Ym = {
  key: 1,
  class: "issue-card__items"
}, Qm = {
  key: 2,
  class: "issue-card__actions"
}, Xm = /* @__PURE__ */ Se({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = L(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Ae(["issue-card", o.value])
    }, [
      t("div", jm, [
        t("span", Hm, m(e.icon), 1),
        t("h4", qm, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Km, [
        e.description ? (n(), i("p", Jm, m(e.description), 1)) : h("", !0),
        ot(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", Ym, [
        (n(!0), i(q, null, ke(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, m(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Qm, [
        ot(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ds = /* @__PURE__ */ Ie(Xm, [["__scopeId", "data-v-df6aa348"]]), Zm = ["type", "disabled"], ef = {
  key: 0,
  class: "spinner"
}, tf = /* @__PURE__ */ Se({
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
      class: Ae(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", ef)) : h("", !0),
      e.loading ? h("", !0) : ot(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Zm));
  }
}), Ce = /* @__PURE__ */ Ie(tf, [["__scopeId", "data-v-772abe47"]]), sf = { class: "empty-state" }, of = {
  key: 0,
  class: "empty-icon"
}, nf = { class: "empty-message" }, af = /* @__PURE__ */ Se({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", sf, [
      e.icon ? (n(), i("div", of, m(e.icon), 1)) : h("", !0),
      t("p", nf, m(e.message), 1),
      e.actionLabel ? (n(), N(Ce, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: g(() => [
          $(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ Ie(af, [["__scopeId", "data-v-4466284f"]]), lf = /* @__PURE__ */ Se({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ae(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), An = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-75e9eeb8"]]), rf = /* @__PURE__ */ Se({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ae(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), al = /* @__PURE__ */ Ie(rf, [["__scopeId", "data-v-2f186e4c"]]), cf = { class: "detail-row" }, uf = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), i("div", cf, [
      k(An, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), N(al, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          $(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Ie(uf, [["__scopeId", "data-v-ef15664a"]]), df = { class: "modal-header" }, mf = { class: "modal-body" }, ff = { class: "status-section" }, vf = {
  key: 0,
  class: "status-section"
}, pf = { class: "section-header-row" }, gf = {
  key: 0,
  class: "workflow-group"
}, hf = { class: "workflow-group-header" }, yf = { class: "workflow-group-title" }, wf = { class: "workflow-list" }, _f = { class: "workflow-name" }, kf = { class: "workflow-issue" }, bf = {
  key: 1,
  class: "workflow-group"
}, $f = { class: "workflow-group-header" }, Cf = { class: "workflow-group-title" }, xf = { class: "workflow-list" }, Sf = { class: "workflow-name" }, If = { class: "workflow-issue" }, Ef = {
  key: 2,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Nf = {
  key: 3,
  class: "workflow-group"
}, Lf = { class: "workflow-group-header" }, Df = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Uf = { class: "workflow-name" }, Af = {
  key: 4,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Wf = {
  key: 5,
  class: "workflow-group"
}, Gf = { class: "workflow-group-title" }, jf = { class: "expand-icon" }, Hf = {
  key: 0,
  class: "workflow-list"
}, qf = { class: "workflow-name" }, Kf = {
  key: 1,
  class: "status-section"
}, Jf = {
  key: 0,
  class: "change-group"
}, Yf = { class: "change-group-header" }, Qf = { class: "change-group-title" }, Xf = { class: "change-list" }, Zf = { class: "node-name" }, ev = {
  key: 0,
  class: "dev-badge"
}, tv = {
  key: 1,
  class: "change-group"
}, sv = { class: "change-group-header" }, ov = { class: "change-group-title" }, nv = { class: "change-list" }, av = { class: "node-name" }, lv = {
  key: 0,
  class: "dev-badge"
}, iv = {
  key: 2,
  class: "change-group"
}, rv = { class: "change-list" }, cv = { class: "change-item" }, uv = { class: "node-name" }, dv = {
  key: 3,
  class: "change-group"
}, mv = {
  key: 2,
  class: "status-section"
}, fv = { class: "section-header-row" }, vv = {
  key: 0,
  class: "drift-item"
}, pv = { class: "drift-list" }, gv = {
  key: 0,
  class: "drift-list-more"
}, hv = {
  key: 1,
  class: "drift-item"
}, yv = { class: "drift-list" }, wv = {
  key: 0,
  class: "drift-list-more"
}, _v = {
  key: 2,
  class: "drift-item"
}, kv = { class: "drift-list" }, bv = { class: "version-actual" }, $v = { class: "version-expected" }, Cv = {
  key: 0,
  class: "drift-list-more"
}, xv = {
  key: 3,
  class: "drift-item"
}, Sv = { class: "repair-action" }, Iv = {
  key: 3,
  class: "status-section"
}, Ev = { class: "info-box" }, Tv = { class: "drift-list" }, Mv = {
  key: 0,
  class: "drift-list-more"
}, Pv = {
  key: 4,
  class: "status-section"
}, Rv = { class: "warning-box" }, Nv = {
  key: 5,
  class: "empty-state-inline"
}, Lv = { class: "modal-actions" }, Dv = /* @__PURE__ */ Se({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = b(!1);
    it(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), kt(() => s.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const a = L(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = L(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = L(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : _.filter((x) => {
        var S, O, I;
        const C = (I = (O = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : I.find((T) => T.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), c = L(() => {
      var w, y, _, x, C;
      return (w = s.status) != null && w.workflows ? (((y = s.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = s.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), u = L(() => {
      var y, _, x;
      const w = (y = s.status) == null ? void 0 : y.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = L(() => {
      var w, y, _, x, C, S;
      return !c.value && !u.value && ((y = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = L(() => {
      var y, _;
      const w = (_ = (y = s.status) == null ? void 0 : y.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, y) => {
      var _, x, C, S, O, I, T, R, D, J, E, B, Z, X, ie, he, te, Y, ue, Ne, ne, ve;
      return n(), N(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (z) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = dt(() => {
            }, ["stop"]))
          }, [
            t("div", df, [
              y[8] || (y[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (z) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", mf, [
              t("div", ff, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[9] || (y[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", vf, [
                t("div", pf, [
                  k(as, { level: "4" }, {
                    default: g(() => [...y[10] || (y[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (z) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", gf, [
                  t("div", hf, [
                    y[11] || (y[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", yf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  t("div", wf, [
                    (n(!0), i(q, null, ke(a.value, (z) => (n(), i("div", {
                      key: z.name,
                      class: "workflow-item"
                    }, [
                      t("span", _f, m(z.name), 1),
                      t("span", kf, m(z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", bf, [
                  t("div", $f, [
                    y[12] || (y[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Cf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  t("div", xf, [
                    (n(!0), i(q, null, ke(l.value, (z) => (n(), i("div", {
                      key: z.name,
                      class: "workflow-item"
                    }, [
                      t("span", Sf, m(z.name), 1),
                      t("span", If, m(z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (n(), i("div", Ef, [
                  t("div", Tf, [
                    y[13] || (y[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Mf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Pf, [
                    (n(!0), i(q, null, ke(e.status.workflows.new, (z) => (n(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      t("span", Rf, m(z), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", Nf, [
                  t("div", Lf, [
                    y[14] || (y[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Df, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (n(!0), i(q, null, ke(e.status.workflows.modified, (z) => (n(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      t("span", Uf, m(z), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (I = (O = e.status.workflows) == null ? void 0 : O.deleted) != null && I.length ? (n(), i("div", Af, [
                  t("div", zf, [
                    y[15] || (y[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Vf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Ff, [
                    (n(!0), i(q, null, ke(e.status.workflows.deleted, (z) => (n(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, m(z), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", Wf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (z) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Gf, "SYNCED (" + m(r.value.length) + ")", 1),
                    t("span", jf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Hf, [
                    (n(!0), i(q, null, ke(r.value, (z) => (n(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      t("span", qf, m(z), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (n(), i("div", Kf, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (R = (T = e.status.git_changes) == null ? void 0 : T.nodes_added) != null && R.length ? (n(), i("div", Jf, [
                  t("div", Yf, [
                    y[18] || (y[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Qf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (n(!0), i(q, null, ke(e.status.git_changes.nodes_added, (z) => (n(), i("div", {
                      key: f(z),
                      class: "change-item"
                    }, [
                      t("span", Zf, m(f(z)), 1),
                      p(z) ? (n(), i("span", ev, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (J = (D = e.status.git_changes) == null ? void 0 : D.nodes_removed) != null && J.length ? (n(), i("div", tv, [
                  t("div", sv, [
                    y[19] || (y[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", ov, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", nv, [
                    (n(!0), i(q, null, ke(e.status.git_changes.nodes_removed, (z) => (n(), i("div", {
                      key: f(z),
                      class: "change-item"
                    }, [
                      t("span", av, m(f(z)), 1),
                      p(z) ? (n(), i("span", lv, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (n(), i("div", iv, [
                  y[20] || (y[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", rv, [
                    t("div", cv, [
                      t("span", uv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (B = e.status.git_changes) != null && B.has_other_changes ? (n(), i("div", dv, [...y[21] || (y[21] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : h("", !0)
              ])) : h("", !0),
              (Z = e.status.comparison) != null && Z.is_synced ? h("", !0) : (n(), i("div", mv, [
                t("div", fv, [
                  k(as, { level: "4" }, {
                    default: g(() => [...y[22] || (y[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (z) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (ie = (X = e.status.comparison) == null ? void 0 : X.missing_nodes) != null && ie.length ? (n(), i("div", vv, [
                  k(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", pv, [
                    (n(!0), i(q, null, ke(e.status.comparison.missing_nodes.slice(0, 10), (z) => (n(), i("div", {
                      key: z,
                      class: "drift-list-item"
                    }, " - " + m(z), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", gv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (te = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && te.length ? (n(), i("div", hv, [
                  k(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", yv, [
                    (n(!0), i(q, null, ke(e.status.comparison.extra_nodes.slice(0, 10), (z) => (n(), i("div", {
                      key: z,
                      class: "drift-list-item"
                    }, " - " + m(z), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", wv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ue = (Y = e.status.comparison) == null ? void 0 : Y.version_mismatches) != null && ue.length ? (n(), i("div", _v, [
                  k(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", kv, [
                    (n(!0), i(q, null, ke(e.status.comparison.version_mismatches.slice(0, 10), (z) => (n(), i("div", {
                      key: z.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(z.name) + ": ", 1),
                      t("span", bv, m(z.actual), 1),
                      y[23] || (y[23] = $(" → ", -1)),
                      t("span", $v, m(z.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Cv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Ne = e.status.comparison) == null ? void 0 : Ne.packages_in_sync) === !1 ? (n(), i("div", xv, [
                  k(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", Sv, [
                  k(Ce, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (z) => w.$emit("repair"))
                  }, {
                    default: g(() => [...y[24] || (y[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ve = (ne = e.status.comparison) == null ? void 0 : ne.disabled_nodes) != null && ve.length ? (n(), i("div", Iv, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Ev, [
                  y[28] || (y[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Tv, [
                  (n(!0), i(q, null, ke(e.status.comparison.disabled_nodes.slice(0, 10), (z) => (n(), i("div", {
                    key: z,
                    class: "drift-list-item"
                  }, " • " + m(z), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Mv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Pv, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Rv, [
                  y[30] || (y[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (n(), i("div", Nv, [...y[32] || (y[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            t("div", Lv, [
              k(Ce, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (z) => w.$emit("close"))
              }, {
                default: g(() => [...y[33] || (y[33] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), Ov = /* @__PURE__ */ Ie(Dv, [["__scopeId", "data-v-e2b37122"]]), Uv = { class: "health-section-header" }, Av = { class: "suggestions-content" }, zv = { class: "suggestions-text" }, Vv = { style: { "margin-top": "var(--cg-space-3)" } }, Fv = {
  key: 1,
  class: "no-issues-text"
}, Bv = /* @__PURE__ */ Se({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = b(!1), r = b(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, f = b(!1), p = b(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function y() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = L(() => {
      const se = a.status.workflows.analyzed || [], W = se.filter(
        (ee) => ee.unresolved_models_count > 0 || ee.ambiguous_models_count > 0
      );
      return W.length === 0 && a.status.missing_models_count > 0 ? se.filter((ee) => ee.sync_state === "synced") : W;
    });
    function C() {
      const se = x.value;
      se.length !== 0 && (f.value = !0, v("repair-missing-models", se.map((W) => W.name)));
    }
    function S() {
      f.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: _ });
    const O = L(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), I = L(() => a.status.has_changes), T = L(() => {
      const se = a.status.git_changes;
      return se.nodes_added.length > 0 || se.nodes_removed.length > 0 || se.workflow_changes;
    }), R = L(() => a.status.has_changes || O.value), D = L(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), J = L(() => a.status.git_changes.has_other_changes), E = L(() => {
      var se;
      return ((se = a.status.workflows.analyzed) == null ? void 0 : se.filter((W) => W.status === "broken")) || [];
    }), B = L(() => {
      var se;
      return ((se = a.status.workflows.analyzed) == null ? void 0 : se.filter(
        (W) => W.has_path_sync_issues && !W.has_issues
      )) || [];
    }), Z = L(() => E.value.length > 0);
    function X(se) {
      const W = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ee of W) {
        const M = se.match(ee);
        if (M != null && M[1])
          return M[1];
      }
      return null;
    }
    function ie(se) {
      const W = se.map(X).filter((ee) => !!ee);
      return [...new Set(W)];
    }
    function he(se) {
      if (se.length === 0) return "";
      if (se.length === 1) return ` (>= ${se[0]})`;
      const W = se.slice(0, 2).map((M) => `>= ${M}`).join(", "), ee = se.length > 2;
      return ` (${W}${ee ? ", ..." : ""})`;
    }
    function te(se) {
      return se.replace(/uninstallable node mappings?/gi, (W) => W.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Y(se) {
      const W = te(se.issue_summary || "Has issues"), ee = /(?:>=|v?\d+\.\d+)/i.test(W), M = ie(se.version_gated_guidance || []);
      return (se.nodes_version_gated_count || 0) > 0 && M.length > 0 && !ee ? `${se.name} — ${W} (needs ComfyUI ${M.map((P) => `>= ${P}`).join(", ")})` : `${se.name} — ${W}`;
    }
    const ue = L(() => E.value.reduce(
      (se, W) => se + (W.nodes_version_gated_count || 0),
      0
    )), Ne = L(() => {
      const se = E.value.flatMap(
        (W) => ie(W.version_gated_guidance || [])
      );
      return [...new Set(se)];
    }), ne = L(() => E.value.reduce(
      (se, W) => se + (W.nodes_uninstallable_count || 0),
      0
    )), ve = L(() => {
      const se = [];
      return ue.value > 0 && se.push(
        `${ue.value} require newer ComfyUI${he(Ne.value)}`
      ), ne.value > 0 && se.push(`${ne.value} need community packages`), se.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${se.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), z = L(() => Z.value || B.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), pe = L(() => {
      const se = [];
      return a.status.workflows.new.length > 0 && se.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && se.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && se.push(`${a.status.workflows.deleted.length} deleted`), se.length > 0 ? `${se.join(", ")} workflow${se.length === 1 && !se[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Pe = L(() => {
      var ee, M;
      const se = [], W = a.status.comparison;
      return (ee = W.missing_nodes) != null && ee.length && se.push(`${W.missing_nodes.length} missing node${W.missing_nodes.length === 1 ? "" : "s"}`), (M = W.extra_nodes) != null && M.length && se.push(`${W.extra_nodes.length} untracked node${W.extra_nodes.length === 1 ? "" : "s"}`), se.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${se.join(" and ")}.`;
    }), Ue = L(() => {
      var ee, M;
      const se = [], W = a.status.comparison;
      return (ee = W.extra_nodes) != null && ee.length && (W.extra_nodes.slice(0, 3).forEach((P) => {
        se.push(`Untracked: ${P}`);
      }), W.extra_nodes.length > 3 && se.push(`...and ${W.extra_nodes.length - 3} more untracked`)), (M = W.missing_nodes) != null && M.length && (W.missing_nodes.slice(0, 3).forEach((P) => {
        se.push(`Missing: ${P}`);
      }), W.missing_nodes.length > 3 && se.push(`...and ${W.missing_nodes.length - 3} more missing`)), se;
    });
    return (se, W) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), N(ds, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (ee) => se.$emit("start-setup"))
              }, {
                default: g(() => [...W[13] || (W[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), N(ds, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: W[1] || (W[1] = (ee) => se.$emit("view-environments"))
              }, {
                default: g(() => [...W[14] || (W[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), N(ds, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: W[2] || (W[2] = (ee) => se.$emit("create-environment"))
              }, {
                default: g(() => [...W[15] || (W[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: W[4] || (W[4] = (ee) => r.value = !0),
            onMouseleave: W[5] || (W[5] = (ee) => r.value = !1)
          }, [
            t("div", Uv, [
              k(as, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...W[16] || (W[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Ld, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), N(Ce, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...W[17] || (W[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            k(Vm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ss({
              left: g(() => [
                e.status.workflows.new.length ? (n(), N(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), N(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), N(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                k(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: O.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), N(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), N(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), N(ys, {
                  key: 2,
                  icon: "●",
                  count: D.value,
                  label: D.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                J.value ? (n(), N(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                I.value && !T.value && !J.value ? (n(), N(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                I.value ? h("", !0) : (n(), N(ys, {
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
                fn: g(() => [
                  W[19] || (W[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Av, [
                    t("span", zv, m(pe.value), 1),
                    k(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: W[3] || (W[3] = (ee) => se.$emit("commit-changes"))
                    }, {
                      default: g(() => [...W[18] || (W[18] = [
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
          e.status.is_detached_head ? (n(), N(ds, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: W[6] || (W[6] = (ee) => se.$emit("create-branch"))
              }, {
                default: g(() => [...W[20] || (W[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", Vv, [
            k(as, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...W[21] || (W[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            z.value ? (n(), i(q, { key: 0 }, [
              E.value.length > 0 ? (n(), N(ds, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ve.value,
                items: E.value.map(Y)
              }, {
                actions: g(() => [
                  k(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[7] || (W[7] = (ee) => se.$emit("view-workflows"))
                  }, {
                    default: g(() => [...W[22] || (W[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              B.value.length > 0 ? (n(), N(ds, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${B.value.length} workflow${B.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: B.value.map((ee) => `${ee.name} — ${ee.models_needing_path_sync_count} model path${ee.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  k(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[8] || (W[8] = (ee) => se.$emit("view-workflows"))
                  }, {
                    default: g(() => [...W[23] || (W[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !Z.value ? (n(), N(ds, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  k(Ce, {
                    variant: "primary",
                    size: "sm",
                    disabled: f.value,
                    onClick: C
                  }, {
                    default: g(() => [
                      $(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(Ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: W[9] || (W[9] = (ee) => se.$emit("view-workflows"))
                  }, {
                    default: g(() => [...W[24] || (W[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), N(ds, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Pe.value,
                items: Ue.value
              }, {
                actions: g(() => [
                  k(Ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...W[25] || (W[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[10] || (W[10] = (ee) => se.$emit("view-nodes"))
                  }, {
                    default: g(() => [...W[26] || (W[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), N(ds, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  k(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[11] || (W[11] = (ee) => se.$emit("view-nodes"))
                  }, {
                    default: g(() => [...W[27] || (W[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : R.value ? (n(), i("span", Fv, "No issues")) : (n(), N(cs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Ov, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: W[12] || (W[12] = (ee) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Wv = /* @__PURE__ */ Ie(Bv, [["__scopeId", "data-v-df52ba90"]]), oR = mo({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const nR = [
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
], aR = {
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
}, Gv = [
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
], lR = [
  ...Gv,
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
function Vo() {
  return !1;
}
class ec extends Error {
  constructor(o, a, l, r) {
    super(o);
    bn(this, "status");
    bn(this, "data");
    bn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function jv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ft() {
  const e = b(!1), s = b(null);
  async function o(K, $e) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi(K, $e), ut = await Be.text();
    if (!Be.ok) {
      let jt = {};
      if (ut)
        try {
          const os = JSON.parse(ut);
          os && typeof os == "object" && (jt = os);
        } catch {
          jt = { error: ut };
        }
      const gs = jt.error || jt.message || jt.detail || Be.statusText || `Request failed: ${Be.status}`;
      throw new ec(String(gs), Be.status, jt, K);
    }
    if (ut)
      return JSON.parse(ut);
  }
  async function a(K) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(K)}`);
  }
  async function l(K, $e, Be) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: K, email: $e, password: Be })
    });
  }
  async function r(K, $e, Be) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: K, email: $e, password: Be })
    });
  }
  async function c(K, $e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(K)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function u(K, $e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: K, refresh_token: $e || null })
    });
  }
  async function d(K, $e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(K)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function v(K, $e, Be) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent($e)}/revisions?cloud_url=${encodeURIComponent(K)}`,
      {
        headers: { Authorization: `Bearer ${Be}` }
      }
    );
  }
  async function f(K, $e, Be, ut) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$e}`
      },
      body: JSON.stringify({
        cloud_url: K,
        source_message: Be || null,
        cloud_environment_id: ut || null
      })
    });
  }
  async function p(K = !1) {
    return o(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(K, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: $e })
    });
  }
  async function y(K = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${K}&offset=${$e}`);
  }
  async function _(K, $e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(K)}&limit=${$e}`);
  }
  async function x(K) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function C() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function S() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function O(K) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K, force: !0 })
    });
  }
  async function I(K) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(K)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function T(K, $e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(K)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $e, force: !0 })
    });
  }
  async function R() {
    return o("/v2/comfygit/branches");
  }
  async function D(K) {
    return o(`/v2/comfygit/commit/${K}`);
  }
  async function J(K, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: $e })
    });
  }
  async function E(K, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: $e })
    });
  }
  async function B(K, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: $e })
    });
  }
  async function Z(K, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function X() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const K = await p();
        return {
          environments: [{
            name: K.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + K.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: K.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: K.branch
          }],
          current: K.environment,
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
  async function ie() {
    return (await X()).environments;
  }
  async function he(K) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(K)}`);
    } catch {
      return null;
    }
  }
  async function te(K, $e) {
    const Be = { target_env: K };
    return $e && (Be.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Be)
    });
  }
  async function Y() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function ue(K) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Ne() {
    return o("/v2/workspace/environments/create_status");
  }
  async function ne(K = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${K}`);
  }
  async function ve(K) {
    return o(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function z(K = !1) {
    try {
      return o(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await p(K), Be = [];
      return $e.workflows.new.forEach((ut) => {
        Be.push({
          name: ut,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), $e.workflows.modified.forEach((ut) => {
        Be.push({
          name: ut,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), $e.workflows.synced.forEach((ut) => {
        Be.push({
          name: ut,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), Be;
    }
  }
  async function pe(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function Pe(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/contract`);
  }
  async function Ue(K, $e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function se(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/contract`, {
      method: "DELETE"
    });
  }
  async function W(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function ee(K, $e, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Be })
    });
  }
  async function M(K, $e, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Be })
    });
  }
  async function P() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function le() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function Fe(K) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function Qe(K) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function U(K, $e) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function A(K, $e) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function j(K) {
    return o(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function we(K) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function be() {
    return o("/v2/workspace/models/directory");
  }
  async function Me(K) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function Le(K) {
    const $e = new URLSearchParams({ url: K });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function Re() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ee(K, $e = 10) {
    const Be = new URLSearchParams({ query: K, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${Be}`);
  }
  async function je(K) {
    try {
      const $e = K ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(K)}` : "/v2/comfygit/config";
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
  async function Ve(K, $e) {
    const Be = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ye(K, $e) {
    try {
      const Be = new URLSearchParams();
      return K && Be.append("level", K), $e && Be.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Q(K, $e) {
    try {
      const Be = new URLSearchParams();
      return K && Be.append("level", K), $e && Be.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function We() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function xe() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Ye() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ze(K, $e) {
    try {
      const Be = new URLSearchParams();
      return K && Be.append("level", K), $e && Be.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function De() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function H(K) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function me() {
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
  async function re(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ke(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function G(K, $e) {
    var gs, os, Oo, Uo;
    const Be = jv(), ut = ((os = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : os.clientId) ?? ((Uo = (Oo = window.app) == null ? void 0 : Oo.api) == null ? void 0 : Uo.initialClientId) ?? "comfygit-panel", Lt = {
      id: K.id,
      version: K.version || K.selected_version || "latest",
      selected_version: K.selected_version || "latest",
      mode: K.mode || "remote",
      channel: K.channel || "default"
    };
    return K.install_source && (Lt.install_source = K.install_source), K.install_source === "git" && K.repository && (Lt.repository = K.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Lt,
        ui_id: Be,
        client_id: ut
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Be, "for package:", K.id), $e != null && $e.beforeQueueStart && await $e.beforeQueueStart(Be), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Be };
  }
  async function F(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function ae(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ge() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Te(K, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: $e })
    });
  }
  async function Je(K) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function He(K, $e, Be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Be })
    });
  }
  async function nt(K, $e) {
    const Be = {};
    return $e && (Be["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST",
      headers: Be
    });
  }
  async function yt(K) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function St(K = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: $e
      })
    });
  }
  async function de(K, $e) {
    const Be = $e ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview`;
    return o(Be);
  }
  async function V(K, $e = {}) {
    const Be = { "Content-Type": "application/json" };
    return $e.authToken && (Be["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/pull`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function fe(K, $e) {
    const Be = $e ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview`;
    return o(Be);
  }
  async function qe(K, $e = {}) {
    const Be = { "Content-Type": "application/json" };
    return $e.authToken && (Be["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/push`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function ct(K, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function It(K) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Be of K)
      try {
        await W(Be), $e.success++;
      } catch (ut) {
        $e.failed.push({
          name: Be,
          error: ut instanceof Error ? ut.message : "Unknown error"
        });
      }
    return $e;
  }
  async function at(K) {
    var ut;
    const $e = new FormData();
    if ($e.append("file", K), !((ut = window.app) != null && ut.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Be.ok) {
      const Lt = await Be.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${Be.status}`);
    }
    return Be.json();
  }
  async function Ct(K) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(K)}`
    );
  }
  async function At(K, $e, Be, ut) {
    var gs;
    const Lt = new FormData();
    if (Lt.append("file", K), Lt.append("name", $e), Lt.append("model_strategy", Be), Lt.append("torch_backend", ut), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!jt.ok) {
      const os = await jt.json().catch(() => ({}));
      throw new Error(os.message || os.error || `Import failed: ${jt.status}`);
    }
    return jt.json();
  }
  async function Is() {
    return o("/v2/workspace/import/status");
  }
  async function ma(K) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: K })
    });
  }
  async function Vs(K, $e, Be, ut) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: K,
        name: $e,
        model_strategy: Be,
        torch_backend: ut
      })
    });
  }
  async function fa() {
    return o("/v2/setup/status");
  }
  async function fo() {
    return o("/v2/comfygit/update-check");
  }
  async function vo() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function va(K) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Es() {
    return o("/v2/setup/initialize_status");
  }
  async function pa(K) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Do() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ga() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ha(K, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: K, save_key: $e })
    });
  }
  async function ya() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function wa(K) {
    const $e = K ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(K)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function _n(K) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function _a() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ka(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ba(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/stop`, {
      method: "POST"
    });
  }
  async function $a(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/start`, {
      method: "POST"
    });
  }
  async function Ca(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/status`);
  }
  async function xa(K) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function Sa(K = !1) {
    return o(K ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ia() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ta(K) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Ma(K) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function kn(K) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ce() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function oe(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/info`);
  }
  async function Ge(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`);
  }
  async function Xe(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function pt(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function Et(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function us(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function Qs(K) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: K })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: p,
    commit: w,
    getHistory: y,
    getBranchHistory: _,
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: O,
    validateEnvironmentExport: I,
    exportEnvironmentWithForce: T,
    // Git Operations
    getBranches: R,
    getCommitDetail: D,
    checkout: J,
    createBranch: E,
    switchBranch: B,
    deleteBranch: Z,
    // Environment Management
    listEnvironments: X,
    getEnvironments: ie,
    getEnvironmentDetails: he,
    switchEnvironment: te,
    getSwitchProgress: Y,
    createEnvironment: ue,
    getCreateProgress: Ne,
    getComfyUIReleases: ne,
    deleteEnvironment: ve,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: pe,
    getWorkflowContract: Pe,
    saveWorkflowContract: Ue,
    deleteWorkflowContract: se,
    resolveWorkflow: W,
    installWorkflowDeps: ee,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: P,
    getWorkspaceModels: le,
    getModelDetails: Fe,
    openFileLocation: Qe,
    addModelSource: U,
    removeModelSource: A,
    deleteModel: j,
    downloadModel: we,
    scanWorkspaceModels: _e,
    getModelsDirectory: be,
    setModelsDirectory: Me,
    getHuggingFaceRepoInfo: Le,
    getModelsSubdirectories: Re,
    searchHuggingFaceRepos: Ee,
    // Settings
    getConfig: je,
    updateConfig: Ve,
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
    getEnvironmentLogs: ye,
    getEnvironmentManifest: xe,
    getWorkspaceLogs: Q,
    getEnvironmentLogPath: We,
    getWorkspaceLogPath: Ye,
    getOrchestratorLogs: ze,
    getOrchestratorLogPath: De,
    openFile: H,
    // Node Management
    getNodes: me,
    trackNodeAsDev: re,
    installNode: Ke,
    queueNodeInstall: G,
    updateNode: F,
    uninstallNode: ae,
    // Git Remotes
    getRemotes: ge,
    addRemote: Te,
    removeRemote: Je,
    updateRemoteUrl: He,
    fetchRemote: nt,
    getRemoteSyncStatus: yt,
    // Push/Pull
    getPullPreview: de,
    pullFromRemote: V,
    getPushPreview: fe,
    pushToRemote: qe,
    validateMerge: ct,
    // Environment Sync
    syncEnvironmentManually: St,
    // Workflow Repair
    repairWorkflowModels: It,
    // Import Operations
    previewTarballImport: at,
    previewGitImport: ma,
    validateEnvironmentName: Ct,
    executeImport: At,
    executeGitImport: Vs,
    getImportProgress: Is,
    // First-Time Setup
    getSetupStatus: fa,
    // Manager Update Notice
    getUpdateCheck: fo,
    updateManager: vo,
    initializeWorkspace: va,
    getInitializeProgress: Es,
    validatePath: pa,
    // Deploy Operations
    getDeploySummary: Do,
    getDataCenters: ga,
    testRunPodConnection: ha,
    getNetworkVolumes: ya,
    getRunPodGpuTypes: wa,
    deployToRunPod: _n,
    getRunPodPods: _a,
    terminateRunPodPod: ka,
    stopRunPodPod: ba,
    startRunPodPod: $a,
    getDeploymentStatus: Ca,
    exportDeployPackage: xa,
    getStoredRunPodKey: Sa,
    clearRunPodKey: Ia,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: Ta,
    removeCustomWorker: Ma,
    testWorkerConnection: kn,
    scanForWorkers: ce,
    getWorkerSystemInfo: oe,
    getWorkerInstances: Ge,
    deployToWorker: Xe,
    startWorkerInstance: pt,
    stopWorkerInstance: Et,
    terminateWorkerInstance: us,
    // Git Authentication
    testGitAuth: Qs
  };
}
async function En(e, s) {
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
function Hv() {
  async function e() {
    try {
      return await En("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await En("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await En("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await En("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const qv = { class: "base-modal-header" }, Kv = {
  key: 0,
  class: "base-modal-title"
}, Jv = { class: "base-modal-body" }, Yv = {
  key: 0,
  class: "base-modal-loading"
}, Qv = {
  key: 1,
  class: "base-modal-error"
}, Xv = {
  key: 0,
  class: "base-modal-footer"
}, Zv = /* @__PURE__ */ Se({
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
    return it(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Ro(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), N(Ut, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ae(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = dt(() => {
          }, ["stop"]))
        }, [
          t("div", qv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Kv, m(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => c.$emit("close"))
            }, [...u[2] || (u[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : h("", !0)
          ]),
          t("div", Jv, [
            e.loading ? (n(), i("div", Yv, "Loading...")) : e.error ? (n(), i("div", Qv, m(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Xv, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), xt = /* @__PURE__ */ Ie(Zv, [["__scopeId", "data-v-8dab1081"]]), ep = ["type", "disabled"], tp = {
  key: 0,
  class: "spinner"
}, sp = /* @__PURE__ */ Se({
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
      class: Ae(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", tp)) : h("", !0),
      ot(s.$slots, "default", {}, void 0)
    ], 10, ep));
  }
}), Oe = /* @__PURE__ */ Ie(sp, [["__scopeId", "data-v-f3452606"]]), op = {
  key: 0,
  class: "base-title-count"
}, np = /* @__PURE__ */ Se({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), N(xl(`h${e.level}`), {
      class: Ae(["base-title", e.variant])
    }, {
      default: g(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", op, "(" + m(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), io = /* @__PURE__ */ Ie(np, [["__scopeId", "data-v-5a01561d"]]), ap = ["value", "disabled"], lp = {
  key: 0,
  value: "",
  disabled: ""
}, ip = ["value"], rp = {
  key: 0,
  class: "base-select-error"
}, cp = /* @__PURE__ */ Se({
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
      class: Ae(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ae(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", lp, m(e.placeholder), 1)) : h("", !0),
        (n(!0), i(q, null, ke(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, m(o(r)), 9, ip))), 128))
      ], 42, ap),
      e.error ? (n(), i("span", rp, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), sn = /* @__PURE__ */ Ie(cp, [["__scopeId", "data-v-4996bfe0"]]), up = { class: "popover-header" }, dp = { class: "popover-title" }, mp = { class: "popover-content" }, fp = {
  key: 0,
  class: "popover-actions"
}, vp = /* @__PURE__ */ Se({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), N(Ut, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = dt(() => {
          }, ["stop"]))
        }, [
          t("div", up, [
            t("h4", dp, m(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", mp, [
            ot(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", fp, [
            ot(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), Qt = /* @__PURE__ */ Ie(vp, [["__scopeId", "data-v-42815ace"]]), pp = { class: "detail-section" }, gp = {
  key: 0,
  class: "empty-message"
}, hp = { class: "model-header" }, yp = { class: "model-name" }, wp = { class: "model-details" }, _p = { class: "model-row" }, kp = { class: "model-row" }, bp = { class: "label" }, $p = {
  key: 0,
  class: "model-row model-row-nodes"
}, Cp = { class: "node-list" }, xp = ["onClick"], Sp = {
  key: 1,
  class: "model-row"
}, Ip = { class: "value" }, Ep = {
  key: 2,
  class: "model-row"
}, Tp = { class: "value error" }, Mp = {
  key: 0,
  class: "model-actions"
}, Pp = { class: "detail-section" }, Rp = {
  key: 0,
  class: "empty-message"
}, Np = { class: "node-content" }, Lp = { class: "node-main" }, Dp = { class: "node-name" }, Op = { class: "node-badge" }, Up = {
  key: 0,
  class: "node-version"
}, Ap = ["onClick"], zp = {
  key: 2,
  class: "node-install-queued"
}, Vp = {
  key: 0,
  class: "node-guidance"
}, Fp = /* @__PURE__ */ Se({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ft(), d = b(null), v = b(!1), f = b(null), p = b(!1), w = b({}), y = b(!1), _ = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(te) {
      switch (te) {
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
    function O(te) {
      switch (te) {
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
    function I(te) {
      switch (te) {
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
    function T(te) {
      switch (te) {
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
    function R(te) {
      switch (te) {
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
    function D(te) {
      if (!te.loaded_by || te.loaded_by.length === 0) return [];
      const Y = te.hash || te.filename;
      return _.value.has(Y) ? te.loaded_by : te.loaded_by.slice(0, 3);
    }
    function J(te) {
      return _.value.has(te);
    }
    function E(te) {
      _.value.has(te) ? _.value.delete(te) : _.value.add(te), _.value = new Set(_.value);
    }
    async function B() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (te) {
        f.value = te instanceof Error ? te.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function Z(te, Y) {
      w.value[te] = Y, p.value = !0;
    }
    async function X(te) {
      try {
        await c(te);
      } catch (Y) {
        f.value = Y instanceof Error ? Y.message : "Failed to open file location";
      }
    }
    async function ie(te) {
      if (te.package_id)
        try {
          const Y = te.latest_version || "latest";
          await u({
            id: te.package_id,
            version: Y,
            selected_version: Y,
            mode: "remote",
            channel: "default"
          }), x.value.add(te.package_id);
        } catch (Y) {
          f.value = Y instanceof Error ? Y.message : "Failed to queue node install";
        }
    }
    async function he() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [te, Y] of Object.entries(w.value))
          await r(o.workflowName, te, Y);
        a("refresh"), a("close");
      } catch (te) {
        f.value = te instanceof Error ? te.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return it(B), (te, Y) => (n(), i(q, null, [
      k(xt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: Y[4] || (Y[4] = (ue) => a("close"))
      }, {
        body: g(() => [
          d.value ? (n(), i(q, { key: 0 }, [
            t("section", pp, [
              k(io, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", gp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(q, null, ke(d.value.models, (ue) => {
                var Ne;
                return n(), i("div", {
                  key: ue.hash || ue.filename,
                  class: "model-card"
                }, [
                  t("div", hp, [
                    Y[6] || (Y[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", yp, m(ue.filename), 1)
                  ]),
                  t("div", wp, [
                    t("div", _p, [
                      Y[7] || (Y[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ae(["value", S(ue.status)])
                      }, m(O(ue.status)), 3)
                    ]),
                    t("div", kp, [
                      t("span", bp, [
                        Y[8] || (Y[8] = $(" Importance: ", -1)),
                        k(Zr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Y[0] || (Y[0] = (ne) => y.value = !0)
                        })
                      ]),
                      k(sn, {
                        "model-value": w.value[ue.filename] || ue.importance,
                        options: C,
                        "onUpdate:modelValue": (ne) => Z(ue.filename, ne)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    ue.loaded_by && ue.loaded_by.length > 0 ? (n(), i("div", $p, [
                      Y[9] || (Y[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Cp, [
                        (n(!0), i(q, null, ke(D(ue), (ne, ve) => (n(), i("div", {
                          key: `${ne.node_id}-${ve}`,
                          class: "node-reference"
                        }, m(ne.node_type) + " (Node #" + m(ne.node_id) + ") ", 1))), 128)),
                        ue.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ne) => E(ue.hash || ue.filename)
                        }, m(J(ue.hash || ue.filename) ? "▼ Show less" : `▶ View all (${ue.loaded_by.length})`), 9, xp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    ue.size_mb ? (n(), i("div", Sp, [
                      Y[10] || (Y[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ip, m(ue.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    ue.has_category_mismatch ? (n(), i("div", Ep, [
                      Y[13] || (Y[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Tp, [
                        Y[11] || (Y[11] = $(" In ", -1)),
                        t("code", null, m(ue.actual_category) + "/", 1),
                        Y[12] || (Y[12] = $(" but loader needs ", -1)),
                        t("code", null, m((Ne = ue.expected_categories) == null ? void 0 : Ne[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  ue.status !== "available" ? (n(), i("div", Mp, [
                    ue.status === "downloadable" ? (n(), N(Oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Y[1] || (Y[1] = (ne) => a("resolve"))
                    }, {
                      default: g(() => [...Y[14] || (Y[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : ue.status === "category_mismatch" && ue.file_path ? (n(), N(Oe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => X(ue.file_path)
                    }, {
                      default: g(() => [...Y[15] || (Y[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : ue.status !== "path_mismatch" ? (n(), N(Oe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (ne) => a("resolve"))
                    }, {
                      default: g(() => [...Y[16] || (Y[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", Pp, [
              k(io, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Rp, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(q, null, ke(d.value.nodes, (ue, Ne) => (n(), i("div", {
                key: `${ue.name}-${ue.status}-${Ne}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Ae(["node-status", I(ue.status)])
                }, m(T(ue.status)), 3),
                t("div", Np, [
                  t("div", Lp, [
                    t("span", Dp, m(ue.name), 1),
                    t("span", Op, m(R(ue.status)), 1),
                    ue.version ? (n(), i("span", Up, "v" + m(ue.version), 1)) : h("", !0),
                    ue.status === "uninstallable" && ue.package_id && !x.value.has(ue.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ne) => ie(ue)
                    }, " Install ", 8, Ap)) : ue.status === "uninstallable" && ue.package_id && x.value.has(ue.package_id) ? (n(), i("span", zp, " Queued ")) : h("", !0)
                  ]),
                  ue.guidance ? (n(), i("div", Vp, m(ue.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          k(Oe, {
            variant: "secondary",
            onClick: Y[3] || (Y[3] = (ue) => a("close"))
          }, {
            default: g(() => [...Y[17] || (Y[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), N(Oe, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: g(() => [...Y[18] || (Y[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(Qt, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: Y[5] || (Y[5] = (ue) => y.value = !1)
      }, {
        content: g(() => [...Y[19] || (Y[19] = [
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
}), Bp = /* @__PURE__ */ Ie(Fp, [["__scopeId", "data-v-543076d9"]]), lt = mo({
  items: [],
  status: "idle"
});
let ks = null;
function tc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Wa(e) {
  return lt.items.find((s) => s.id === e);
}
async function yo() {
  if (lt.status === "downloading") return;
  const e = lt.items.find((s) => s.status === "queued");
  if (!e) {
    lt.status = "idle";
    return;
  }
  lt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Wp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    lt.status = "idle", yo();
  }
}
async function Wp(e) {
  return new Promise((s, o) => {
    ks && (ks.close(), ks = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ks = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - u > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const y = JSON.parse(w.data);
        switch (y.type) {
          case "progress":
            e.downloaded = y.downloaded || 0, e.size = y.total || e.size, u = Date.now();
            const _ = u, x = (_ - r) / 1e3, C = e.downloaded - c;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ks = null, s();
            break;
          case "error":
            d = !0, p(), l.close(), ks = null, o(new Error(y.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ks = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Gp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (lt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: tc(),
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
function Lo() {
  function e(C) {
    for (const S of C) {
      if (lt.items.some(
        (T) => T.url === S.url && T.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const I = {
        id: tc(),
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
    lt.status === "idle" && yo();
  }
  async function s(C) {
    const S = Wa(C);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), S.status = "failed", S.error = "Cancelled by user", lt.status = "idle", yo();
      } else if (S.status === "queued") {
        const O = lt.items.findIndex((I) => I.id === C);
        O >= 0 && lt.items.splice(O, 1);
      }
    }
  }
  function o(C) {
    const S = Wa(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, lt.status === "idle" && yo());
  }
  function a(C) {
    const S = Wa(C);
    !S || S.status !== "paused" || (S.status = "queued", lt.status === "idle" && yo());
  }
  function l() {
    const C = lt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    lt.status === "idle" && yo();
  }
  function r(C) {
    const S = lt.items.findIndex((O) => O.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(lt.items[S].status) && lt.items.splice(S, 1);
  }
  function c() {
    lt.items = lt.items.filter((C) => C.status !== "completed");
  }
  function u() {
    lt.items = lt.items.filter((C) => C.status !== "failed");
  }
  const d = L(
    () => lt.items.find((C) => C.status === "downloading")
  ), v = L(
    () => lt.items.filter((C) => C.status === "queued")
  ), f = L(
    () => lt.items.filter((C) => C.status === "completed")
  ), p = L(
    () => lt.items.filter((C) => C.status === "failed")
  ), w = L(
    () => lt.items.filter((C) => C.status === "paused")
  ), y = L(() => lt.items.length > 0), _ = L(
    () => lt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = L(
    () => lt.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Vn(lt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: y,
    activeCount: _,
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
    loadPendingDownloads: Gp
  };
}
function sc() {
  const e = b(null), s = b(null), o = b([]), a = b([]), l = b(!1), r = b(null);
  async function c(O, I) {
    var R;
    if (!((R = window.app) != null && R.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(O, I);
    if (!T.ok) {
      const D = await T.json().catch(() => ({})), J = D.error || D.message || `Request failed: ${T.status}`;
      throw new Error(J);
    }
    return T.json();
  }
  async function u(O) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Vo() || (I = await c(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), I.nodes.version_gated = I.nodes.version_gated || [], I.nodes.uninstallable = I.nodes.uninstallable || [], I.node_guidance = I.node_guidance || {}, I.package_aliases = I.package_aliases || {}, e.value = I, I;
    } catch (I) {
      const T = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = T, I;
    } finally {
      l.value = !1;
    }
  }
  async function d(O, I, T, R) {
    l.value = !0, r.value = null;
    try {
      let D;
      if (!Vo()) {
        const J = Object.fromEntries(I), E = Object.fromEntries(T), B = R ? Array.from(R) : [];
        D = await c(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: J,
              model_choices: E,
              skipped_packages: B
            })
          }
        );
      }
      return s.value = D, D;
    } catch (D) {
      const J = D instanceof Error ? D.message : "Unknown error occurred";
      throw r.value = J, D;
    } finally {
      l.value = !1;
    }
  }
  async function v(O, I = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Vo() || (T = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: I })
        }
      )), o.value = T.results, T.results;
    } catch (T) {
      const R = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = R, T;
    } finally {
      l.value = !1;
    }
  }
  async function f(O, I = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Vo() || (T = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: I })
        }
      )), a.value = T.results, T.results;
    } catch (T) {
      const R = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = R, T;
    } finally {
      l.value = !1;
    }
  }
  const p = mo({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function y(O) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Vo(), await _(O);
    } catch (I) {
      const T = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = T, I;
    }
  }
  async function _(O) {
    var T;
    const I = await c(
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
      const R = new Map(((T = I.failed) == null ? void 0 : T.map((D) => [D.node_id, D.error])) || []);
      for (let D = 0; D < p.nodesToInstall.length; D++) {
        const J = p.nodesToInstall[D], E = R.get(J);
        p.nodeInstallProgress.completedNodes.push({
          node_id: J,
          success: !E,
          error: E
        });
      }
    }
    return p.nodesInstalled = I.nodes_installed, p.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (p.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function x(O, I, T) {
    w(), p.phase = "resolving", r.value = null;
    const R = Object.fromEntries(I), D = Object.fromEntries(T);
    try {
      const J = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: R,
          model_choices: D
        })
      });
      if (!J.ok)
        throw new Error(`Request failed: ${J.status}`);
      if (!J.body)
        throw new Error("No response body");
      const E = J.body.getReader(), B = new TextDecoder();
      let Z = "";
      for (; ; ) {
        const { done: X, value: ie } = await E.read();
        if (X) break;
        Z += B.decode(ie, { stream: !0 });
        const he = Z.split(`

`);
        Z = he.pop() || "";
        for (const te of he) {
          if (!te.trim()) continue;
          const Y = te.split(`
`);
          let ue = "", Ne = "";
          for (const ne of Y)
            ne.startsWith("event: ") ? ue = ne.slice(7) : ne.startsWith("data: ") && (Ne = ne.slice(6));
          if (Ne)
            try {
              const ne = JSON.parse(Ne);
              C(ue, ne);
            } catch (ne) {
              console.warn("Failed to parse SSE event:", ne);
            }
        }
      }
    } catch (J) {
      const E = J instanceof Error ? J.message : "Unknown error occurred";
      throw r.value = E, p.error = E, p.phase = "error", J;
    }
  }
  function C(O, I) {
    switch (O) {
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
  function S(O, I) {
    const { addToQueue: T } = Lo(), R = I.filter((D) => D.url && D.target_path).map((D) => ({
      workflow: O,
      filename: D.filename,
      url: D.url,
      targetPath: D.target_path,
      size: D.size || 0,
      type: "model"
    }));
    return R.length > 0 && T(R), R.length;
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
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: y,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const jp = { class: "resolution-stepper" }, Hp = { class: "stepper-header" }, qp = ["onClick"], Kp = {
  key: 0,
  class: "step-icon"
}, Jp = {
  key: 1,
  class: "step-number"
}, Yp = { class: "step-label" }, Qp = {
  key: 0,
  class: "step-connector"
}, Xp = { class: "stepper-content" }, Zp = /* @__PURE__ */ Se({
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
    return (v, f) => (n(), i("div", jp, [
      t("div", Hp, [
        (n(!0), i(q, null, ke(e.steps, (p, w) => (n(), i("div", {
          key: p.id,
          class: Ae(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (y) => d(p.id)
        }, [
          t("div", {
            class: Ae(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Kp, "✓")) : (n(), i("span", Jp, m(w + 1), 1))
          ], 2),
          t("div", Yp, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Qp)) : h("", !0)
        ], 10, qp))), 128))
      ]),
      t("div", Xp, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), eg = /* @__PURE__ */ Ie(Zp, [["__scopeId", "data-v-2a7b3af8"]]), tg = /* @__PURE__ */ Se({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = L(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = L(() => `confidence-${o.value}`), l = L(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Ae(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), Yn = /* @__PURE__ */ Ie(tg, [["__scopeId", "data-v-17ec4b80"]]), sg = { class: "node-info" }, og = { class: "node-info-text" }, ng = { class: "item-body" }, ag = {
  key: 0,
  class: "resolved-state"
}, lg = {
  key: 1,
  class: "multiple-options"
}, ig = {
  key: 0,
  class: "installed-packs-section"
}, rg = { class: "installed-packs-list" }, cg = ["onClick"], ug = { class: "installed-pack-name" }, dg = { class: "installed-pack-source" }, mg = { class: "options-list" }, fg = ["onClick"], vg = ["name", "value", "checked", "onChange"], pg = { class: "option-content" }, gg = { class: "option-header" }, hg = { class: "option-package-id" }, yg = {
  key: 0,
  class: "option-title"
}, wg = { class: "option-meta" }, _g = {
  key: 0,
  class: "installed-badge"
}, kg = { class: "action-buttons" }, bg = {
  key: 2,
  class: "unresolved"
}, $g = {
  key: 0,
  class: "installed-packs-section"
}, Cg = { class: "installed-packs-list" }, xg = ["onClick"], Sg = { class: "installed-pack-name" }, Ig = { class: "installed-pack-source" }, Eg = {
  key: 1,
  class: "searching-state"
}, Tg = { class: "options-list" }, Mg = ["onClick"], Pg = ["name", "value"], Rg = { class: "option-content" }, Ng = { class: "option-header" }, Lg = { class: "option-package-id" }, Dg = {
  key: 0,
  class: "option-description"
}, Og = { class: "option-meta" }, Ug = {
  key: 0,
  class: "installed-badge"
}, Ag = {
  key: 3,
  class: "unresolved-message"
}, zg = { class: "action-buttons" }, Vg = /* @__PURE__ */ Se({
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
    function l(f, p = 80) {
      return f.length <= p ? f : f.slice(0, p - 3) + "...";
    }
    const r = L(() => !!o.choice);
    L(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), L(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    });
    const c = L(() => o.installedNodePacks || []), u = L(() => {
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
    function d(f) {
      a("option-selected", f);
    }
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
      class: Ae(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", sg, [
        t("span", og, [
          p[7] || (p[7] = $("Node type: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ae(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", ng, [
        r.value ? (n(), i("div", ag, [
          k(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", lg, [
          c.value.length > 0 ? (n(), i("div", ig, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", rg, [
              (n(!0), i(q, null, ke(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", ug, m(w.package_id), 1),
                t("span", dg, m(v(w.source)), 1)
              ], 8, cg))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", mg, [
            (n(!0), i(q, null, ke(e.options, (w, y) => (n(), i("label", {
              key: w.package_id,
              class: Ae(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (_) => d(y)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (_) => d(y)
              }, null, 40, vg),
              t("div", pg, [
                t("div", gg, [
                  t("span", hg, m(w.package_id), 1),
                  k(Yn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", yg, m(w.title), 1)) : h("", !0),
                t("div", wg, [
                  w.is_installed ? (n(), i("span", _g, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, fg))), 128))
          ]),
          t("div", kg, [
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", bg, [
          c.value.length > 0 ? (n(), i("div", $g, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", Cg, [
              (n(!0), i(q, null, ke(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", Sg, m(w.package_id), 1),
                t("span", Ig, m(v(w.source)), 1)
              ], 8, xg))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (n(), i("div", Eg, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(q, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Tg, [
              (n(!0), i(q, null, ke(e.searchResults.slice(0, 5), (w, y) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => a("search-result-selected", w)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, Pg),
                t("div", Rg, [
                  t("div", Ng, [
                    t("span", Lg, m(w.package_id), 1),
                    k(Yn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", Dg, m(l(w.description)), 1)) : h("", !0),
                  t("div", Og, [
                    w.is_installed ? (n(), i("span", Ug, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, Mg))), 128))
            ])
          ], 64)) : (n(), i("div", Ag, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", zg, [
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => a("search"))
            }, {
              default: g(() => {
                var w;
                return [
                  $(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => a("mark-optional"))
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
}), Fg = /* @__PURE__ */ Ie(Vg, [["__scopeId", "data-v-fb0bbf03"]]), Bg = { class: "item-navigator" }, Wg = { class: "nav-item-info" }, Gg = ["title"], jg = { class: "nav-controls" }, Hg = { class: "nav-arrows" }, qg = ["disabled"], Kg = ["disabled"], Jg = { class: "nav-position" }, Yg = /* @__PURE__ */ Se({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Bg, [
      t("div", Wg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, Gg)
      ]),
      t("div", jg, [
        t("div", Hg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, qg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Kg)
        ]),
        t("span", Jg, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), oc = /* @__PURE__ */ Ie(Yg, [["__scopeId", "data-v-74af7920"]]), Qg = ["type", "value", "placeholder", "disabled"], Xg = {
  key: 0,
  class: "base-input-error"
}, Zg = /* @__PURE__ */ Se({
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
      class: Ae(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ae(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = ts((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ts((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Qg),
      e.error ? (n(), i("span", Xg, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ Ie(Zg, [["__scopeId", "data-v-9ba02cdc"]]), eh = { class: "node-resolution-step" }, th = {
  key: 0,
  class: "auto-resolved-section"
}, sh = { class: "section-header" }, oh = { class: "stat-badge" }, nh = { class: "resolved-packages-list" }, ah = { class: "package-info" }, lh = { class: "package-id" }, ih = { class: "node-count" }, rh = { class: "package-actions" }, ch = {
  key: 0,
  class: "status-badge install"
}, uh = {
  key: 1,
  class: "status-badge skip"
}, dh = ["onClick"], mh = {
  key: 1,
  class: "section-divider"
}, fh = { class: "step-header" }, vh = { class: "stat-badge" }, ph = {
  key: 1,
  class: "step-body"
}, gh = {
  key: 3,
  class: "empty-state"
}, hh = { class: "node-modal-body" }, yh = { class: "node-search-results-container" }, wh = {
  key: 0,
  class: "node-search-results"
}, _h = ["onClick"], kh = { class: "node-result-header" }, bh = { class: "node-result-package-id" }, $h = {
  key: 0,
  class: "node-result-description"
}, Ch = {
  key: 1,
  class: "node-empty-state"
}, xh = {
  key: 2,
  class: "node-empty-state"
}, Sh = {
  key: 3,
  class: "node-empty-state"
}, Ih = { class: "node-manual-entry-modal" }, Eh = { class: "node-modal-body" }, Th = { class: "node-modal-actions" }, Mh = /* @__PURE__ */ Se({
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
    const o = e, a = s, { searchNodes: l } = sc(), r = b(0), c = b(!1), u = b(!1), d = b(""), v = b(""), f = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), y = b(/* @__PURE__ */ new Set()), _ = b(!1);
    function x() {
      _.value && ve(), _.value = !1;
    }
    const C = L(() => o.nodes[r.value]), S = L(() => o.nodes.filter((M) => o.nodeChoices.has(M.node_type)).length), O = L(() => C.value ? w.value.get(C.value.node_type) || [] : []), I = L(() => C.value ? y.value.has(C.value.node_type) : !1);
    kt(C, async (M) => {
      var P;
      M && ((P = M.options) != null && P.length || w.value.has(M.node_type) || y.value.has(M.node_type) || o.nodeChoices.has(M.node_type) || await T(M.node_type));
    }, { immediate: !0 });
    async function T(M) {
      y.value.add(M);
      try {
        const P = await l(M, 5);
        w.value.set(M, P);
      } catch {
        w.value.set(M, []);
      } finally {
        y.value.delete(M);
      }
    }
    const R = L(() => o.autoResolvedPackages.filter((M) => !o.skippedPackages.has(M.package_id)).length);
    function D(M) {
      return o.skippedPackages.has(M);
    }
    function J(M) {
      a("package-skip", M);
    }
    const E = L(() => {
      var P;
      if (!C.value) return "not-found";
      const M = o.nodeChoices.get(C.value.node_type);
      if (M)
        switch (M.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (P = C.value.options) != null && P.length ? "ambiguous" : "not-found";
    }), B = L(() => {
      var P;
      if (!C.value) return;
      const M = o.nodeChoices.get(C.value.node_type);
      if (M)
        switch (M.action) {
          case "install":
            return M.package_id ? `→ ${M.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (P = C.value.options) != null && P.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function Z(M) {
      M >= 0 && M < o.nodes.length && (r.value = M);
    }
    function X() {
      var M;
      for (let P = r.value + 1; P < o.nodes.length; P++) {
        const le = o.nodes[P];
        if (!((M = o.nodeChoices) != null && M.has(le.node_type))) {
          Z(P);
          return;
        }
      }
    }
    function ie() {
      C.value && (a("mark-optional", C.value.node_type), Nt(() => X()));
    }
    function he() {
      C.value && (a("skip", C.value.node_type), Nt(() => X()));
    }
    function te(M) {
      C.value && (a("option-selected", C.value.node_type, M), Nt(() => X()));
    }
    function Y() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function ue() {
      C.value && (d.value = C.value.node_type, f.value = O.value, c.value = !0, Ue(d.value));
    }
    function Ne() {
      v.value = "", u.value = !0;
    }
    function ne(M) {
      C.value && (a("manual-entry", C.value.node_type, M), Nt(() => X()));
    }
    function ve() {
      c.value = !1, d.value = "", f.value = [];
    }
    function z() {
      u.value = !1, v.value = "";
    }
    let pe = null;
    function Pe() {
      pe && clearTimeout(pe), pe = setTimeout(() => {
        Ue(d.value);
      }, 300);
    }
    async function Ue(M) {
      if (!M.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(M, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function se(M) {
      C.value && (a("manual-entry", C.value.node_type, M.package_id), ve(), Nt(() => X()));
    }
    function W(M) {
      C.value && (a("manual-entry", C.value.node_type, M.package_id), Nt(() => X()));
    }
    function ee() {
      !C.value || !v.value.trim() || (a("manual-entry", C.value.node_type, v.value.trim()), z(), Nt(() => X()));
    }
    return (M, P) => {
      var le, Fe;
      return n(), i("div", eh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", th, [
          t("div", sh, [
            P[6] || (P[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", oh, m(R.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", nh, [
            (n(!0), i(q, null, ke(e.autoResolvedPackages, (Qe) => (n(), i("div", {
              key: Qe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", ah, [
                t("code", lh, m(Qe.package_id), 1),
                t("span", ih, m(Qe.node_types_count) + " node type" + m(Qe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", rh, [
                D(Qe.package_id) ? (n(), i("span", uh, " SKIPPED ")) : (n(), i("span", ch, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (U) => J(Qe.package_id)
                }, m(D(Qe.package_id) ? "Include" : "Skip"), 9, dh)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", mh)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(q, { key: 2 }, [
          t("div", fh, [
            P[7] || (P[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", vh, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), N(oc, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: P[0] || (P[0] = (Qe) => Z(r.value - 1)),
            onNext: P[1] || (P[1] = (Qe) => Z(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (n(), i("div", ph, [
            k(Fg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((le = C.value.options) != null && le.length),
              options: C.value.options,
              choice: (Fe = e.nodeChoices) == null ? void 0 : Fe.get(C.value.node_type),
              status: E.value,
              "status-label": B.value,
              "search-results": O.value,
              "is-searching": I.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ie,
              onSkip: he,
              onManualEntry: Ne,
              onSearch: ue,
              onOptionSelected: te,
              onClearChoice: Y,
              onSearchResultSelected: W,
              onInstalledPackSelected: ne
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", gh, [...P[8] || (P[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (n(), N(Ut, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: P[4] || (P[4] = dt((Qe) => _.value = !0, ["self"])),
            onMouseup: dt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: P[3] || (P[3] = (Qe) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                P[9] || (P[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ve
                }, "✕")
              ]),
              t("div", hh, [
                k(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": P[2] || (P[2] = (Qe) => d.value = Qe),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                t("div", yh, [
                  f.value.length > 0 ? (n(), i("div", wh, [
                    (n(!0), i(q, null, ke(f.value, (Qe) => (n(), i("div", {
                      key: Qe.package_id,
                      class: "node-search-result-item",
                      onClick: (U) => se(Qe)
                    }, [
                      t("div", kh, [
                        t("code", bh, m(Qe.package_id), 1),
                        Qe.match_confidence ? (n(), N(Yn, {
                          key: 0,
                          confidence: Qe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      Qe.description ? (n(), i("div", $h, m(Qe.description), 1)) : h("", !0)
                    ], 8, _h))), 128))
                  ])) : p.value ? (n(), i("div", Ch, "Searching...")) : d.value ? (n(), i("div", xh, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", Sh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (n(), N(Ut, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: dt(z, ["self"])
          }, [
            t("div", Ih, [
              t("div", { class: "node-modal-header" }, [
                P[10] || (P[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              t("div", Eh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": P[5] || (P[5] = (Qe) => v.value = Qe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Th, [
                  k(Oe, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: g(() => [...P[11] || (P[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Oe, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ee
                  }, {
                    default: g(() => [...P[12] || (P[12] = [
                      $(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : h("", !0)
        ]))
      ]);
    };
  }
}), Ph = /* @__PURE__ */ Ie(Mh, [["__scopeId", "data-v-94c6a438"]]), Rh = { class: "node-info" }, Nh = { class: "node-info-text" }, Lh = { class: "item-body" }, Dh = {
  key: 0,
  class: "resolved-state"
}, Oh = {
  key: 1,
  class: "multiple-options"
}, Uh = { class: "options-list" }, Ah = ["onClick"], zh = ["name", "value", "checked", "onChange"], Vh = { class: "option-content" }, Fh = { class: "option-header" }, Bh = { class: "option-filename" }, Wh = { class: "option-meta" }, Gh = { class: "option-size" }, jh = { class: "option-category" }, Hh = { class: "option-path" }, qh = { class: "action-buttons" }, Kh = {
  key: 2,
  class: "unresolved"
}, Jh = { class: "action-buttons" }, Yh = /* @__PURE__ */ Se({
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
    const o = e, a = s, l = L(() => !!o.choice);
    L(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = L(() => {
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
      class: Ae(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Rh, [
        t("span", Nh, [
          v[7] || (v[7] = $("Used by: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ae(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", Lh, [
        l.value ? (n(), i("div", Dh, [
          k(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: g(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Oh, [
          v[12] || (v[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Uh, [
            (n(!0), i(q, null, ke(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: Ae(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, zh),
              t("div", Vh, [
                t("div", Fh, [
                  t("span", Bh, m(f.model.filename), 1),
                  k(Yn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Wh, [
                  t("span", Gh, m(u(f.model.size)), 1),
                  t("span", jh, m(f.model.category), 1)
                ]),
                t("div", Hh, m(f.model.relative_path), 1)
              ])
            ], 10, Ah))), 128))
          ]),
          t("div", qh, [
            k(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: g(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: g(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: g(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Kh, [
          v[16] || (v[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Jh, [
            k(Oe, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: g(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: g(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
            }, {
              default: g(() => [...v[15] || (v[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Qh = /* @__PURE__ */ Ie(Yh, [["__scopeId", "data-v-8a82fefa"]]), Xh = { class: "model-resolution-step" }, Zh = { class: "step-header" }, ey = { class: "step-info" }, ty = { class: "step-title" }, sy = { class: "step-description" }, oy = { class: "stat-badge" }, ny = {
  key: 1,
  class: "step-body"
}, ay = {
  key: 2,
  class: "empty-state"
}, ly = { class: "model-search-modal" }, iy = { class: "model-modal-body" }, ry = {
  key: 0,
  class: "model-search-results"
}, cy = ["onClick"], uy = { class: "model-result-header" }, dy = { class: "model-result-filename" }, my = { class: "model-result-meta" }, fy = { class: "model-result-category" }, vy = { class: "model-result-size" }, py = {
  key: 0,
  class: "model-result-path"
}, gy = {
  key: 1,
  class: "model-no-results"
}, hy = {
  key: 2,
  class: "model-searching"
}, yy = { class: "model-download-url-modal" }, wy = { class: "model-modal-body" }, _y = { class: "model-input-group" }, ky = { class: "model-input-group" }, by = { class: "model-modal-actions" }, $y = /* @__PURE__ */ Se({
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
      var ve;
      return ne && ((ve = o[ne]) == null ? void 0 : ve[0]) || null;
    }
    const l = e, r = s, c = b(0), u = b(!1), d = b(!1), v = b(""), f = b(""), p = b(""), w = b([]), y = b(!1), _ = L(() => l.models[c.value]), x = L(() => l.models.some((ne) => ne.is_download_intent)), C = L(() => l.models.filter(
      (ne) => l.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), S = L(() => {
      var ve;
      if (!_.value) return "";
      const ne = a((ve = _.value.reference) == null ? void 0 : ve.node_type);
      return ne ? `${ne}/${_.value.filename}` : "";
    }), O = L(() => {
      var ve;
      if (!_.value) return "not-found";
      const ne = l.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (ve = _.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), I = L(() => {
      var ve, z;
      if (!_.value) return;
      const ne = l.modelChoices.get(_.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return (ve = ne.selected_model) != null && ve.filename ? `→ ${ne.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (z = _.value.options) != null && z.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function T(ne) {
      ne >= 0 && ne < l.models.length && (c.value = ne);
    }
    function R() {
      var ne;
      for (let ve = c.value + 1; ve < l.models.length; ve++) {
        const z = l.models[ve];
        if (!z.is_download_intent && !((ne = l.modelChoices) != null && ne.has(z.filename))) {
          T(ve);
          return;
        }
      }
    }
    function D() {
      _.value && (r("mark-optional", _.value.filename), Nt(() => R()));
    }
    function J() {
      _.value && (r("skip", _.value.filename), Nt(() => R()));
    }
    function E(ne) {
      _.value && (r("option-selected", _.value.filename, ne), Nt(() => R()));
    }
    function B() {
      _.value && r("clear-choice", _.value.filename);
    }
    function Z() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function X() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ie() {
      u.value = !1, v.value = "", w.value = [];
    }
    function he() {
      d.value = !1, f.value = "", p.value = "";
    }
    function te() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function Y(ne) {
      _.value && (ie(), Nt(() => R()));
    }
    function ue() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), he(), Nt(() => R()));
    }
    function Ne(ne) {
      if (!ne) return "Unknown";
      const ve = ne / (1024 * 1024 * 1024);
      return ve >= 1 ? `${ve.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, ve) => {
      var z, pe, Pe;
      return n(), i("div", Xh, [
        t("div", Zh, [
          t("div", ey, [
            t("h3", ty, m(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", sy, m(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", oy, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), N(oc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ve[0] || (ve[0] = (Ue) => T(c.value - 1)),
          onNext: ve[1] || (ve[1] = (Ue) => T(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        _.value ? (n(), i("div", ny, [
          k(Qh, {
            filename: _.value.filename,
            "node-type": ((z = _.value.reference) == null ? void 0 : z.node_type) || "Unknown",
            "has-multiple-options": !!((pe = _.value.options) != null && pe.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: O.value,
            "status-label": I.value,
            onMarkOptional: D,
            onSkip: J,
            onDownloadUrl: X,
            onSearch: Z,
            onOptionSelected: E,
            onClearChoice: B
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", ay, [...ve[5] || (ve[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), N(Ut, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: dt(ie, ["self"])
          }, [
            t("div", ly, [
              t("div", { class: "model-modal-header" }, [
                ve[6] || (ve[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              t("div", iy, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (Ue) => v.value = Ue),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", ry, [
                  (n(!0), i(q, null, ke(w.value, (Ue) => (n(), i("div", {
                    key: Ue.hash,
                    class: "model-search-result-item",
                    onClick: (se) => Y()
                  }, [
                    t("div", uy, [
                      t("code", dy, m(Ue.filename), 1)
                    ]),
                    t("div", my, [
                      t("span", fy, m(Ue.category), 1),
                      t("span", vy, m(Ne(Ue.size)), 1)
                    ]),
                    Ue.relative_path ? (n(), i("div", py, m(Ue.relative_path), 1)) : h("", !0)
                  ], 8, cy))), 128))
                ])) : v.value && !y.value ? (n(), i("div", gy, ' No models found matching "' + m(v.value) + '" ', 1)) : h("", !0),
                y.value ? (n(), i("div", hy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), N(Ut, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: dt(he, ["self"])
          }, [
            t("div", yy, [
              t("div", { class: "model-modal-header" }, [
                ve[7] || (ve[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", wy, [
                t("div", _y, [
                  ve[8] || (ve[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(wt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": ve[3] || (ve[3] = (Ue) => f.value = Ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ky, [
                  ve[9] || (ve[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(wt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ve[4] || (ve[4] = (Ue) => p.value = Ue),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", by, [
                  k(Oe, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: g(() => [...ve[10] || (ve[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Oe, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: ue
                  }, {
                    default: g(() => [...ve[11] || (ve[11] = [
                      $(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : h("", !0)
        ]))
      ]);
    };
  }
}), Cy = /* @__PURE__ */ Ie($y, [["__scopeId", "data-v-5c700bfa"]]), xy = { class: "applying-step" }, Sy = {
  key: 0,
  class: "phase-content"
}, Iy = {
  key: 1,
  class: "phase-content"
}, Ey = { class: "phase-description" }, Ty = { class: "overall-progress" }, My = { class: "progress-bar" }, Py = { class: "progress-label" }, Ry = { class: "install-list" }, Ny = { class: "install-icon" }, Ly = { key: 0 }, Dy = {
  key: 1,
  class: "spinner"
}, Oy = { key: 2 }, Uy = { key: 3 }, Ay = {
  key: 0,
  class: "install-error"
}, zy = {
  key: 2,
  class: "phase-content"
}, Vy = { class: "phase-header" }, Fy = { class: "phase-title" }, By = { class: "completion-summary" }, Wy = {
  key: 0,
  class: "summary-item success"
}, Gy = { class: "summary-text" }, jy = {
  key: 1,
  class: "summary-item error"
}, Hy = { class: "summary-text" }, qy = {
  key: 2,
  class: "failed-list"
}, Ky = { class: "failed-node-id" }, Jy = { class: "failed-error" }, Yy = {
  key: 4,
  class: "summary-item success"
}, Qy = {
  key: 5,
  class: "restart-prompt"
}, Xy = {
  key: 3,
  class: "phase-content error"
}, Zy = { class: "error-message" }, e1 = /* @__PURE__ */ Se({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = L(() => {
      var v, f;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), a = L(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = L(() => a.value.length > 0);
    function r(u, d) {
      var f, p;
      const v = (f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((p = s.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, f, p, w;
      return n(), i("div", xy, [
        e.progress.phase === "resolving" ? (n(), i("div", Sy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Iy, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Ey, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Ty, [
            t("div", My, [
              t("div", {
                class: "progress-fill",
                style: Wt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Py, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Ry, [
            (n(!0), i(q, null, ke(e.progress.nodesToInstall, (y, _) => (n(), i("div", {
              key: y,
              class: Ae(["install-item", r(y, _)])
            }, [
              t("span", Ny, [
                r(y, _) === "pending" ? (n(), i("span", Ly, "○")) : r(y, _) === "installing" ? (n(), i("span", Dy, "◌")) : r(y, _) === "complete" ? (n(), i("span", Oy, "✓")) : r(y, _) === "failed" ? (n(), i("span", Uy, "✗")) : h("", !0)
              ]),
              t("code", null, m(y), 1),
              c(y) ? (n(), i("span", Ay, m(c(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", zy, [
          t("div", Vy, [
            t("span", {
              class: Ae(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            t("h3", Fy, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", By, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Wy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Gy, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", jy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", Hy, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", qy, [
              (n(!0), i(q, null, ke(a.value, (y) => (n(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                t("code", Ky, m(y.node_id), 1),
                t("span", Jy, m(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (n(), i("div", Yy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Qy, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", Xy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Zy, m(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), t1 = /* @__PURE__ */ Ie(e1, [["__scopeId", "data-v-5efaae58"]]), s1 = {
  key: 0,
  class: "loading-state"
}, o1 = {
  key: 1,
  class: "wizard-content"
}, n1 = {
  key: 0,
  class: "step-content"
}, a1 = { class: "analysis-summary" }, l1 = { class: "analysis-header" }, i1 = { class: "summary-description" }, r1 = { class: "stats-grid" }, c1 = { class: "stat-card" }, u1 = { class: "stat-items" }, d1 = {
  key: 0,
  class: "stat-item success"
}, m1 = { class: "stat-count" }, f1 = {
  key: 1,
  class: "stat-item info"
}, v1 = { class: "stat-count" }, p1 = {
  key: 2,
  class: "stat-item warning"
}, g1 = { class: "stat-count" }, h1 = {
  key: 3,
  class: "stat-item warning"
}, y1 = { class: "stat-count" }, w1 = {
  key: 4,
  class: "stat-item warning"
}, _1 = { class: "stat-count" }, k1 = {
  key: 5,
  class: "stat-item error"
}, b1 = { class: "stat-count" }, $1 = { class: "stat-card" }, C1 = { class: "stat-items" }, x1 = { class: "stat-item success" }, S1 = { class: "stat-count" }, I1 = {
  key: 0,
  class: "stat-item info"
}, E1 = { class: "stat-count" }, T1 = {
  key: 1,
  class: "stat-item warning"
}, M1 = { class: "stat-count" }, P1 = {
  key: 2,
  class: "stat-item warning"
}, R1 = { class: "stat-count" }, N1 = {
  key: 3,
  class: "stat-item error"
}, L1 = { class: "stat-count" }, D1 = {
  key: 0,
  class: "status-message warning"
}, O1 = { class: "status-text" }, U1 = {
  key: 1,
  class: "status-message warning"
}, A1 = { class: "status-text" }, z1 = {
  key: 2,
  class: "status-message info"
}, V1 = { class: "status-text" }, F1 = {
  key: 3,
  class: "status-message info"
}, B1 = { class: "status-text" }, W1 = {
  key: 4,
  class: "status-message info"
}, G1 = { class: "status-text" }, j1 = {
  key: 5,
  class: "status-message warning"
}, H1 = { class: "status-text" }, q1 = {
  key: 6,
  class: "status-message success"
}, K1 = {
  key: 7,
  class: "category-mismatch-section"
}, J1 = { class: "mismatch-list" }, Y1 = { class: "mismatch-path" }, Q1 = { class: "mismatch-target" }, X1 = {
  key: 8,
  class: "category-mismatch-section"
}, Z1 = { class: "mismatch-list" }, e0 = { class: "mismatch-path" }, t0 = { class: "status-text" }, s0 = {
  key: 1,
  class: "step-content node-step-content"
}, o0 = {
  key: 0,
  class: "community-node-section"
}, n0 = { class: "community-node-header" }, a0 = { class: "community-node-title" }, l0 = { class: "community-node-list" }, i0 = { class: "community-node-info" }, r0 = { class: "community-node-heading" }, c0 = { class: "item-name" }, u0 = { class: "community-node-package" }, d0 = { class: "community-node-meta" }, m0 = { class: "community-node-guidance" }, f0 = { key: 0 }, v0 = { class: "community-choice-status" }, p0 = { class: "community-node-actions" }, g0 = {
  key: 3,
  class: "step-content"
}, h0 = { class: "review-summary" }, y0 = { class: "review-stats" }, w0 = { class: "review-stat" }, _0 = { class: "stat-value" }, k0 = { class: "review-stat" }, b0 = { class: "stat-value" }, $0 = { class: "review-stat" }, C0 = { class: "stat-value" }, x0 = { class: "review-stat" }, S0 = { class: "stat-value" }, I0 = {
  key: 0,
  class: "review-section"
}, E0 = { class: "section-title" }, T0 = { class: "review-items" }, M0 = { class: "item-name" }, P0 = { class: "item-choice" }, R0 = {
  key: 0,
  class: "choice-badge install"
}, N0 = {
  key: 1,
  class: "choice-badge skip"
}, L0 = {
  key: 1,
  class: "review-section"
}, D0 = { class: "section-title" }, O0 = { class: "review-items" }, U0 = { class: "item-name" }, A0 = { class: "item-choice" }, z0 = {
  key: 0,
  class: "choice-badge install"
}, V0 = {
  key: 1,
  class: "choice-badge optional"
}, F0 = {
  key: 2,
  class: "choice-badge skip"
}, B0 = {
  key: 2,
  class: "review-section"
}, W0 = { class: "section-title" }, G0 = { class: "review-items" }, j0 = { class: "item-name" }, H0 = { class: "item-choice" }, q0 = {
  key: 0,
  class: "choice-badge install"
}, K0 = {
  key: 1,
  class: "choice-badge optional"
}, J0 = {
  key: 2,
  class: "choice-badge skip"
}, Y0 = {
  key: 1,
  class: "choice-badge pending"
}, Q0 = {
  key: 3,
  class: "review-section"
}, X0 = { class: "section-title" }, Z0 = { class: "review-items download-details" }, ew = { class: "download-info" }, tw = { class: "item-name" }, sw = { class: "download-meta" }, ow = { class: "download-path" }, nw = ["title"], aw = {
  key: 4,
  class: "review-section"
}, lw = { class: "section-title" }, iw = { class: "review-items" }, rw = { class: "item-name" }, cw = { class: "item-choice" }, uw = {
  key: 0,
  class: "choice-badge install"
}, dw = {
  key: 1,
  class: "choice-badge download"
}, mw = {
  key: 2,
  class: "choice-badge optional"
}, fw = {
  key: 3,
  class: "choice-badge skip"
}, vw = {
  key: 4,
  class: "choice-badge skip"
}, pw = {
  key: 1,
  class: "choice-badge download"
}, gw = {
  key: 2,
  class: "choice-badge pending"
}, hw = {
  key: 5,
  class: "no-choices"
}, yw = /* @__PURE__ */ Se({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = sc(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = ft(), _ = b(null), x = b([]), C = b(!1), S = b(!1), O = b(null), I = b("analysis"), T = b([]), R = b(/* @__PURE__ */ new Map()), D = b(/* @__PURE__ */ new Map()), J = b(/* @__PURE__ */ new Set()), E = L(() => {
      const de = [
        { id: "analysis", label: "Analysis" }
      ];
      return (te.value || Ne.value || ne.value) && de.push({ id: "nodes", label: "Nodes" }), Y.value && de.push({ id: "models", label: "Models" }), de.push({ id: "review", label: "Review" }), I.value === "applying" && de.push({ id: "applying", label: "Applying" }), de;
    }), B = L(() => _.value ? _.value.stats.needs_user_input : !1), Z = L(() => _.value ? _.value.nodes.version_gated || [] : []), X = L(() => _.value ? _.value.nodes.uninstallable || [] : []), ie = L(() => X.value.filter((de) => {
      var V;
      return !!((V = de.package) != null && V.package_id);
    })), he = L(() => Z.value.length > 0), te = L(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), Y = L(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), ue = L(() => _.value ? _.value.stats.download_intents > 0 : !1), Ne = L(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ne = L(() => ie.value.length > 0), ve = L(() => _.value ? _.value.nodes.resolved.length : 0), z = L(() => _.value ? _.value.models.resolved.filter((de) => de.has_category_mismatch) : []), pe = L(() => z.value.length > 0), Pe = L(() => te.value || Ne.value || ne.value ? "nodes" : Y.value ? "models" : "review"), Ue = L(() => {
      if (!_.value) return [];
      const de = _.value.nodes.resolved.filter((fe) => !fe.is_installed), V = /* @__PURE__ */ new Set();
      return de.filter((fe) => V.has(fe.package.package_id) ? !1 : (V.add(fe.package.package_id), !0));
    }), se = L(() => {
      if (!_.value) return [];
      const de = _.value.nodes.resolved.filter((fe) => !fe.is_installed), V = /* @__PURE__ */ new Map();
      for (const fe of de) {
        const qe = V.get(fe.package.package_id);
        qe ? qe.node_types_count++ : V.set(fe.package.package_id, {
          package_id: fe.package.package_id,
          title: fe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(V.values());
    }), W = L(() => Ue.value.filter((de) => !J.value.has(de.package.package_id))), ee = L(() => _.value ? _.value.models.resolved.filter(
      (de) => de.match_type === "download_intent" || de.match_type === "property_download_intent"
    ).map((de) => ({
      filename: de.reference.widget_value,
      reference: de.reference,
      is_download_intent: !0,
      resolved_model: de.model,
      download_source: de.download_source,
      target_path: de.target_path
    })) : []), M = L(() => {
      if (!_.value) return [];
      const de = _.value.nodes.unresolved.map((fe) => ({
        node_type: fe.reference.node_type,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), V = _.value.nodes.ambiguous.map((fe) => ({
        node_type: fe.reference.node_type,
        has_multiple_options: !0,
        options: fe.options.map((qe) => ({
          package_id: qe.package.package_id,
          title: qe.package.title,
          match_confidence: qe.match_confidence,
          match_type: qe.match_type,
          is_installed: qe.is_installed
        }))
      }));
      return [...de, ...V];
    }), P = L(() => {
      if (!_.value) return [];
      const de = _.value.models.unresolved.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), V = _.value.models.ambiguous.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        has_multiple_options: !0,
        options: fe.options.map((qe) => ({
          model: qe.model,
          match_confidence: qe.match_confidence,
          match_type: qe.match_type,
          has_download_source: qe.has_download_source
        }))
      }));
      return [...de, ...V];
    }), le = L(() => {
      const de = P.value, V = ee.value.map((fe) => ({
        filename: fe.filename,
        reference: fe.reference,
        is_download_intent: !0,
        resolved_model: fe.resolved_model,
        download_source: fe.download_source,
        target_path: fe.target_path,
        options: void 0
      }));
      return [...de, ...V];
    }), Fe = L(() => ee.value.filter((de) => {
      const V = D.value.get(de.filename);
      return V ? V.action === "download" : !0;
    }).map((de) => ({
      filename: de.filename,
      url: de.download_source,
      target_path: de.target_path
    })));
    function Qe(de, V = 50) {
      return de.length <= V ? de : de.slice(0, V - 3) + "...";
    }
    const U = L(() => {
      let de = W.value.length;
      for (const V of R.value.values())
        V.action === "install" && de++;
      for (const V of D.value.values())
        V.action === "select" && de++;
      return de;
    }), A = L(() => {
      let de = 0;
      for (const V of D.value.values())
        V.action === "download" && de++;
      for (const V of ee.value)
        D.value.get(V.filename) || de++;
      return de;
    }), j = L(() => {
      let de = 0;
      for (const V of R.value.values())
        V.action === "optional" && de++;
      for (const V of D.value.values())
        V.action === "optional" && de++;
      return de;
    }), we = L(() => {
      let de = J.value.size;
      for (const V of R.value.values())
        V.action === "skip" && de++;
      for (const V of D.value.values())
        V.action === "skip" && de++;
      for (const V of M.value)
        R.value.has(V.node_type) || de++;
      for (const V of P.value)
        D.value.has(V.filename) || de++;
      return de;
    }), _e = L(() => {
      const de = {};
      if (de.analysis = { resolved: 1, total: 1 }, te.value || ne.value) {
        const V = M.value.length, fe = ie.value.length, qe = M.value.filter(
          (Ct) => R.value.has(Ct.node_type)
        ).length, ct = ie.value.filter(
          (Ct) => R.value.has(Ct.reference.node_type)
        ).length, It = V + fe, at = qe + ct;
        de.nodes = { resolved: at, total: It };
      }
      if (Y.value) {
        const V = le.value.length, fe = le.value.filter(
          (qe) => D.value.has(qe.filename) || qe.is_download_intent
        ).length;
        de.models = { resolved: fe, total: V };
      }
      if (de.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const V = d.totalFiles || 1, fe = d.completedFiles.length;
        de.applying = { resolved: fe, total: V };
      }
      return de;
    });
    function be(de) {
      I.value = de;
    }
    function Me() {
      const de = E.value.findIndex((V) => V.id === I.value);
      de > 0 && (I.value = E.value[de - 1].id);
    }
    function Le() {
      const de = E.value.findIndex((V) => V.id === I.value);
      de < E.value.length - 1 && (I.value = E.value[de + 1].id);
    }
    function Re() {
      for (const de of ie.value) {
        const V = de.reference.node_type;
        R.value.has(V) || me(de, "registry");
      }
    }
    function Ee(de) {
      switch (de) {
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
    function je(de) {
      return de.filter((V) => V.installed && V.tracked).filter((V) => V.name !== "comfygit-manager").map((V) => ({
        package_id: V.registry_id || V.name,
        source: V.source
      })).filter((V, fe, qe) => qe.findIndex((ct) => ct.package_id === V.package_id) === fe).sort((V, fe) => {
        const qe = Ee(V.source) - Ee(fe.source);
        return qe !== 0 ? qe : V.package_id.localeCompare(fe.package_id);
      });
    }
    async function Ve() {
      C.value = !0, O.value = null;
      try {
        const [de, V] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        _.value = de, x.value = je(V.nodes), Re();
      } catch (de) {
        O.value = de instanceof Error ? de.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ye() {
      T.value.includes("analysis") || T.value.push("analysis"), te.value || Ne.value || ne.value ? I.value = "nodes" : Y.value ? I.value = "models" : I.value = "review";
    }
    function Q(de) {
      R.value.set(de, { action: "optional" });
    }
    function We(de) {
      R.value.set(de, { action: "skip" });
    }
    function xe(de, V) {
      var qe;
      const fe = M.value.find((ct) => ct.node_type === de);
      (qe = fe == null ? void 0 : fe.options) != null && qe[V] && R.value.set(de, {
        action: "install",
        package_id: fe.options[V].package_id
      });
    }
    function Ye(de, V) {
      R.value.set(de, {
        action: "install",
        package_id: V
      });
    }
    function ze(de) {
      R.value.delete(de);
    }
    function De(de) {
      return R.value.get(de);
    }
    function H(de) {
      const V = De(de);
      return V ? V.action === "optional" ? "Marked optional" : V.action === "skip" ? "Skipped" : V.action === "install" ? V.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function me(de, V) {
      var ct;
      const fe = (ct = de.package) == null ? void 0 : ct.package_id;
      if (!fe) return;
      const qe = {
        action: "install",
        package_id: fe,
        version: de.package.latest_version || null,
        install_source: V
      };
      V === "git" && de.package.repository && (qe.repository = de.package.repository), R.value.set(de.reference.node_type, qe);
    }
    function re(de) {
      R.value.set(de, { action: "optional" });
    }
    function Ke(de) {
      R.value.set(de, { action: "skip" });
    }
    function G(de) {
      J.value.has(de) ? J.value.delete(de) : J.value.add(de);
    }
    function F(de) {
      D.value.set(de, { action: "optional" });
    }
    function ae(de) {
      D.value.set(de, { action: "skip" });
    }
    function ge(de, V) {
      var qe;
      const fe = P.value.find((ct) => ct.filename === de);
      (qe = fe == null ? void 0 : fe.options) != null && qe[V] && D.value.set(de, {
        action: "select",
        selected_model: fe.options[V].model
      });
    }
    function Te(de, V, fe) {
      D.value.set(de, {
        action: "download",
        url: V,
        target_path: fe
      });
    }
    function Je(de) {
      D.value.delete(de);
    }
    async function He(de) {
      try {
        await p(de);
      } catch (V) {
        O.value = V instanceof Error ? V.message : "Failed to open file location";
      }
    }
    async function nt() {
      var de;
      S.value = !0, O.value = null, v(), d.phase = "resolving", I.value = "applying";
      try {
        const V = await r(o.workflowName, R.value, D.value, J.value);
        V.models_to_download && V.models_to_download.length > 0 && u(o.workflowName, V.models_to_download);
        const fe = ie.value.map((at) => {
          const Ct = De(at.reference.node_type);
          if ((Ct == null ? void 0 : Ct.action) !== "install" || Ct.install_source !== "git")
            return null;
          const At = Ct.repository || at.package.repository, Is = Ct.package_id || at.package.package_id;
          return !At || !Is ? null : {
            id: Is,
            repository: At,
            selectedVersion: Ct.version || at.package.latest_version || "latest"
          };
        }).filter((at) => !!at), qe = new Set(fe.map((at) => at.id)), ct = [
          ...V.nodes_to_install || [],
          ...W.value.map((at) => at.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ct)].filter((at) => !qe.has(at)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const at of fe)
          await w({
            id: at.id,
            version: at.selectedVersion,
            selected_version: at.selectedVersion,
            repository: at.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f();
        const It = d.installError || ((de = d.nodeInstallProgress) == null ? void 0 : de.completedNodes.some((at) => !at.success));
        !d.needsRestart && !It && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (V) {
        O.value = V instanceof Error ? V.message : "Failed to apply resolution", d.error = O.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function yt() {
      a("refresh"), a("restart"), a("close");
    }
    async function St() {
      var V;
      const de = ((V = d.nodeInstallProgress) == null ? void 0 : V.completedNodes.filter((fe) => !fe.success).map((fe) => fe.node_id)) || [];
      if (de.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: de.length
        }, d.nodesToInstall = de, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (fe) {
          d.error = fe instanceof Error ? fe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return it(Ve), (de, V) => (n(), N(xt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: V[1] || (V[1] = (fe) => a("close"))
    }, {
      body: g(() => [
        C.value && !_.value ? (n(), i("div", s1, [...V[2] || (V[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", o1, [
          k(eg, {
            steps: E.value,
            "current-step": I.value,
            "completed-steps": T.value,
            "step-stats": _e.value,
            onStepChange: be
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (n(), i("div", n1, [
            t("div", a1, [
              t("div", l1, [
                V[3] || (V[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", i1, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", r1, [
                t("div", c1, [
                  V[16] || (V[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", u1, [
                    ve.value > 0 ? (n(), i("div", d1, [
                      V[4] || (V[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", m1, m(ve.value), 1),
                      V[5] || (V[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", f1, [
                      V[6] || (V[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", v1, m(_.value.stats.packages_needing_installation), 1),
                      V[7] || (V[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (n(), i("div", p1, [
                      V[8] || (V[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", g1, m(_.value.nodes.ambiguous.length), 1),
                      V[9] || (V[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    Z.value.length > 0 ? (n(), i("div", h1, [
                      V[10] || (V[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", y1, m(Z.value.length), 1),
                      V[11] || (V[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    X.value.length > 0 ? (n(), i("div", w1, [
                      V[12] || (V[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", _1, m(X.value.length), 1),
                      V[13] || (V[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    _.value.nodes.unresolved.length > 0 ? (n(), i("div", k1, [
                      V[14] || (V[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", b1, m(_.value.nodes.unresolved.length), 1),
                      V[15] || (V[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", $1, [
                  V[27] || (V[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", C1, [
                    t("div", x1, [
                      V[17] || (V[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", S1, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      V[18] || (V[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", I1, [
                      V[19] || (V[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", E1, m(_.value.stats.download_intents), 1),
                      V[20] || (V[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    pe.value ? (n(), i("div", T1, [
                      V[21] || (V[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", M1, m(z.value.length), 1),
                      V[22] || (V[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", P1, [
                      V[23] || (V[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", R1, m(_.value.models.ambiguous.length), 1),
                      V[24] || (V[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", N1, [
                      V[25] || (V[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", L1, m(_.value.models.unresolved.length), 1),
                      V[26] || (V[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              B.value ? (n(), i("div", D1, [
                V[28] || (V[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", O1, m(M.value.length + P.value.length) + " items need your input", 1)
              ])) : he.value ? (n(), i("div", U1, [
                V[29] || (V[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", A1, m(Z.value.length) + " node type" + m(Z.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : X.value.length > 0 ? (n(), i("div", z1, [
                V[30] || (V[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", V1, m(X.value.length) + " community-mapped node type" + m(X.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ne.value ? (n(), i("div", F1, [
                V[31] || (V[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", B1, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(ue.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ue.value ? (n(), i("div", W1, [
                V[32] || (V[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", G1, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : pe.value ? (n(), i("div", j1, [
                V[33] || (V[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", H1, m(z.value.length) + " model" + m(z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", q1, [...V[34] || (V[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              pe.value ? (n(), i("div", K1, [
                V[37] || (V[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", J1, [
                  (n(!0), i(q, null, ke(z.value, (fe) => {
                    var qe, ct;
                    return n(), i("div", {
                      key: fe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", Y1, m(fe.actual_category) + "/" + m((qe = fe.model) == null ? void 0 : qe.filename), 1),
                      V[36] || (V[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", Q1, m((ct = fe.expected_categories) == null ? void 0 : ct[0]) + "/", 1),
                      fe.file_path ? (n(), N(Oe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (It) => He(fe.file_path)
                      }, {
                        default: g(() => [...V[35] || (V[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              he.value ? (n(), i("div", X1, [
                V[38] || (V[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", Z1, [
                  (n(!0), i(q, null, ke(Z.value, (fe) => {
                    var qe;
                    return n(), i("div", {
                      key: `vg-${fe.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", e0, m(fe.reference.node_type), 1),
                      t("span", t0, m(fe.guidance || ((qe = _.value.node_guidance) == null ? void 0 : qe[fe.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          I.value === "nodes" ? (n(), i("div", s0, [
            k(Ph, {
              nodes: M.value,
              "node-choices": R.value,
              "auto-resolved-packages": se.value,
              "skipped-packages": J.value,
              "installed-node-packs": x.value,
              onMarkOptional: Q,
              onSkip: We,
              onOptionSelected: xe,
              onManualEntry: Ye,
              onClearChoice: ze,
              onPackageSkip: G
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ie.value.length > 0 ? (n(), i("div", o0, [
              t("div", n0, [
                t("h4", a0, "Community-Mapped Packages (" + m(ie.value.length) + ")", 1),
                V[39] || (V[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", l0, [
                (n(!0), i(q, null, ke(ie.value, (fe) => (n(), i("div", {
                  key: `community-${fe.reference.node_type}-${fe.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", i0, [
                    t("div", r0, [
                      t("code", c0, m(fe.reference.node_type), 1),
                      t("span", u0, m(fe.package.title || fe.package.package_id), 1)
                    ]),
                    t("div", d0, m(fe.package.package_id), 1),
                    t("div", m0, [
                      V[40] || (V[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      fe.guidance ? (n(), i("span", f0, m(fe.guidance), 1)) : h("", !0)
                    ]),
                    t("div", v0, m(H(fe.reference.node_type)), 1)
                  ]),
                  t("div", p0, [
                    k(Oe, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !fe.package.package_id,
                      onClick: (qe) => me(fe, "registry")
                    }, {
                      default: g(() => [...V[41] || (V[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    fe.package.repository ? (n(), N(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !fe.package.package_id,
                      onClick: (qe) => me(fe, "git")
                    }, {
                      default: g(() => [...V[42] || (V[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    k(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (qe) => re(fe.reference.node_type)
                    }, {
                      default: g(() => [...V[43] || (V[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (qe) => Ke(fe.reference.node_type)
                    }, {
                      default: g(() => [...V[44] || (V[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          I.value === "models" ? (n(), N(Cy, {
            key: 2,
            models: le.value,
            "model-choices": D.value,
            onMarkOptional: F,
            onSkip: ae,
            onOptionSelected: ge,
            onDownloadUrl: Te,
            onClearChoice: Je
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          I.value === "review" ? (n(), i("div", g0, [
            t("div", h0, [
              V[50] || (V[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", y0, [
                t("div", w0, [
                  t("span", _0, m(U.value), 1),
                  V[45] || (V[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", k0, [
                  t("span", b0, m(A.value), 1),
                  V[46] || (V[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", $0, [
                  t("span", C0, m(j.value), 1),
                  V[47] || (V[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", x0, [
                  t("span", S0, m(we.value), 1),
                  V[48] || (V[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              se.value.length > 0 ? (n(), i("div", I0, [
                t("h4", E0, "Node Packages (" + m(se.value.length) + ")", 1),
                t("div", T0, [
                  (n(!0), i(q, null, ke(se.value, (fe) => (n(), i("div", {
                    key: fe.package_id,
                    class: "review-item"
                  }, [
                    t("code", M0, m(fe.package_id), 1),
                    t("div", P0, [
                      J.value.has(fe.package_id) ? (n(), i("span", N0, "Skipped")) : (n(), i("span", R0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              ie.value.length > 0 ? (n(), i("div", L0, [
                t("h4", D0, "Community-Mapped Packages (" + m(ie.value.length) + ")", 1),
                t("div", O0, [
                  (n(!0), i(q, null, ke(ie.value, (fe) => {
                    var qe, ct, It;
                    return n(), i("div", {
                      key: `review-community-${fe.reference.node_type}-${fe.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", U0, m(fe.reference.node_type), 1),
                      t("div", A0, [
                        ((qe = De(fe.reference.node_type)) == null ? void 0 : qe.action) === "install" ? (n(), i("span", z0, m(((ct = De(fe.reference.node_type)) == null ? void 0 : ct.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((It = De(fe.reference.node_type)) == null ? void 0 : It.action) === "optional" ? (n(), i("span", V0, " Optional ")) : (n(), i("span", F0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              M.value.length > 0 ? (n(), i("div", B0, [
                t("h4", W0, "Node Choices (" + m(M.value.length) + ")", 1),
                t("div", G0, [
                  (n(!0), i(q, null, ke(M.value, (fe) => {
                    var qe, ct, It, at;
                    return n(), i("div", {
                      key: fe.node_type,
                      class: "review-item"
                    }, [
                      t("code", j0, m(fe.node_type), 1),
                      t("div", H0, [
                        R.value.has(fe.node_type) ? (n(), i(q, { key: 0 }, [
                          ((qe = R.value.get(fe.node_type)) == null ? void 0 : qe.action) === "install" ? (n(), i("span", q0, m((ct = R.value.get(fe.node_type)) == null ? void 0 : ct.package_id), 1)) : ((It = R.value.get(fe.node_type)) == null ? void 0 : It.action) === "optional" ? (n(), i("span", K0, " Optional ")) : ((at = R.value.get(fe.node_type)) == null ? void 0 : at.action) === "skip" ? (n(), i("span", J0, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", Y0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Fe.value.length > 0 ? (n(), i("div", Q0, [
                t("h4", X0, "Models to Download (" + m(Fe.value.length) + ")", 1),
                t("div", Z0, [
                  (n(!0), i(q, null, ke(Fe.value, (fe) => (n(), i("div", {
                    key: fe.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", ew, [
                      t("code", tw, m(fe.filename), 1),
                      t("div", sw, [
                        t("span", ow, "→ " + m(fe.target_path), 1),
                        fe.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: fe.url
                        }, m(Qe(fe.url)), 9, nw)) : h("", !0)
                      ])
                    ]),
                    V[49] || (V[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              le.value.length > 0 ? (n(), i("div", aw, [
                t("h4", lw, "Models (" + m(le.value.length) + ")", 1),
                t("div", iw, [
                  (n(!0), i(q, null, ke(le.value, (fe) => {
                    var qe, ct, It, at, Ct, At, Is;
                    return n(), i("div", {
                      key: fe.filename,
                      class: "review-item"
                    }, [
                      t("code", rw, m(fe.filename), 1),
                      t("div", cw, [
                        D.value.has(fe.filename) ? (n(), i(q, { key: 0 }, [
                          ((qe = D.value.get(fe.filename)) == null ? void 0 : qe.action) === "select" ? (n(), i("span", uw, m((It = (ct = D.value.get(fe.filename)) == null ? void 0 : ct.selected_model) == null ? void 0 : It.filename), 1)) : ((at = D.value.get(fe.filename)) == null ? void 0 : at.action) === "download" ? (n(), i("span", dw, " Download ")) : ((Ct = D.value.get(fe.filename)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", mw, " Optional ")) : ((At = D.value.get(fe.filename)) == null ? void 0 : At.action) === "skip" ? (n(), i("span", fw, " Skip ")) : ((Is = D.value.get(fe.filename)) == null ? void 0 : Is.action) === "cancel_download" ? (n(), i("span", vw, " Cancel Download ")) : h("", !0)
                        ], 64)) : fe.is_download_intent ? (n(), i("span", pw, " Pending Download ")) : (n(), i("span", gw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ue.value.length === 0 && ie.value.length === 0 && M.value.length === 0 && le.value.length === 0 ? (n(), i("div", hw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          I.value === "applying" ? (n(), N(t1, {
            key: 4,
            progress: et(d),
            onRestart: yt,
            onRetryFailed: St
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        I.value !== "analysis" && I.value !== "applying" ? (n(), N(Oe, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Me
        }, {
          default: g(() => [...V[51] || (V[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        V[54] || (V[54] = t("div", { class: "footer-spacer" }, null, -1)),
        I.value !== "applying" || et(d).phase === "complete" || et(d).phase === "error" ? (n(), N(Oe, {
          key: 1,
          variant: "secondary",
          onClick: V[0] || (V[0] = (fe) => a("close"))
        }, {
          default: g(() => [
            $(m(et(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        I.value === "analysis" ? (n(), N(Oe, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ye
        }, {
          default: g(() => [
            $(m(Pe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        I.value === "nodes" ? (n(), N(Oe, {
          key: 3,
          variant: "primary",
          onClick: Le
        }, {
          default: g(() => [
            $(m(Y.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        I.value === "models" ? (n(), N(Oe, {
          key: 4,
          variant: "primary",
          onClick: Le
        }, {
          default: g(() => [...V[52] || (V[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        I.value === "review" ? (n(), N(Oe, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: g(() => [...V[53] || (V[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ww = /* @__PURE__ */ Ie(yw, [["__scopeId", "data-v-49848358"]]), _w = { class: "search-input-wrapper" }, kw = ["value", "placeholder"], bw = /* @__PURE__ */ Se({
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
    return it(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", _w, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ts(u, ["escape"])
      }, null, 40, kw),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), $w = /* @__PURE__ */ Ie(bw, [["__scopeId", "data-v-266f857a"]]), Cw = { class: "search-bar" }, xw = /* @__PURE__ */ Se({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", Cw, [
      k($w, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), uo = /* @__PURE__ */ Ie(xw, [["__scopeId", "data-v-3d51bbfd"]]), Sw = { class: "section-group" }, Iw = {
  key: 0,
  class: "section-content"
}, Ew = /* @__PURE__ */ Se({
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
    return (c, u) => (n(), i("section", Sw, [
      k(as, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          $(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", Iw, [
        ot(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), bt = /* @__PURE__ */ Ie(Ew, [["__scopeId", "data-v-c48e33ed"]]), Tw = { class: "item-header" }, Mw = {
  key: 0,
  class: "item-icon"
}, Pw = { class: "item-info" }, Rw = {
  key: 0,
  class: "item-title"
}, Nw = {
  key: 1,
  class: "item-subtitle"
}, Lw = {
  key: 0,
  class: "item-details"
}, Dw = {
  key: 1,
  class: "item-actions"
}, Ow = /* @__PURE__ */ Se({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = L(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Ae(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", Tw, [
        l.$slots.icon ? (n(), i("span", Mw, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", Pw, [
          l.$slots.title ? (n(), i("div", Rw, [
            ot(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", Nw, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", Lw, [
        ot(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", Dw, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Ie(Ow, [["__scopeId", "data-v-cc435e0e"]]), Uw = { class: "loading-state" }, Aw = { class: "loading-message" }, zw = /* @__PURE__ */ Se({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", Uw, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Aw, m(e.message), 1)
    ]));
  }
}), xs = /* @__PURE__ */ Ie(zw, [["__scopeId", "data-v-ad8436c9"]]), Vw = { class: "error-state" }, Fw = { class: "error-message" }, Bw = /* @__PURE__ */ Se({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", Vw, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Fw, m(e.message), 1),
      e.retry ? (n(), N(Ce, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Ss = /* @__PURE__ */ Ie(Bw, [["__scopeId", "data-v-5397be48"]]), Ww = /* @__PURE__ */ Se({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ft(), r = b([]), c = b(!1), u = b(null), d = b(""), v = b(!0), f = b(!1), p = b(!1), w = b(!1), y = b(null), _ = L(
      () => r.value.filter((z) => z.status === "broken")
    ), x = L(
      () => r.value.filter((z) => z.status === "new")
    ), C = L(
      () => r.value.filter((z) => z.status === "modified")
    ), S = L(
      () => r.value.filter((z) => z.status === "synced")
    ), O = L(() => {
      if (!d.value.trim()) return r.value;
      const z = d.value.toLowerCase();
      return r.value.filter((pe) => pe.name.toLowerCase().includes(z));
    }), I = L(
      () => _.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), T = L(
      () => x.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = L(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = L(
      () => S.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), J = L(
      () => f.value ? D.value : D.value.slice(0, 5)
    );
    async function E(z = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(z);
      } catch (pe) {
        u.value = pe instanceof Error ? pe.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function B(z) {
      y.value = z, p.value = !0;
    }
    function Z(z) {
      y.value = z, w.value = !0;
    }
    function X(z) {
      y.value = z, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: z }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ie(z) {
      var Ue;
      const Pe = (Ue = z.detail) == null ? void 0 : Ue.workflowName;
      Pe && X(Pe);
    }
    function he() {
      a("refresh");
    }
    async function te() {
      w.value = !1, await E(!0);
    }
    async function Y() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ue(z) {
      return z.replace(/uninstallable node mappings?/gi, (pe) => pe.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Ne(z) {
      if (z.issue_summary && z.issue_summary.trim().length > 0)
        return ue(z.issue_summary);
      const pe = [];
      return z.version_gated_count && z.version_gated_count > 0 && pe.push(`${z.version_gated_count} node${z.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), z.uninstallable_count && z.uninstallable_count > 0 && pe.push(`${z.uninstallable_count} node${z.uninstallable_count > 1 ? "s" : ""} need community packages`), z.missing_nodes > 0 && pe.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && pe.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && pe.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && pe.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), pe.length > 0 ? pe.join(", ") : "Has issues";
    }
    function ne(z) {
      const pe = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state, Pe = ve(z);
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync · ${Pe}` : `${pe || "Unknown"} · ${Pe}`;
    }
    function ve(z) {
      const pe = z.contract_summary;
      return !pe || !pe.has_contract ? "No contract" : pe.status === "incomplete" ? `${pe.input_count} in / ${pe.output_count} out · incomplete` : `${pe.input_count} in / ${pe.output_count} out`;
    }
    return it(() => {
      E(), window.addEventListener("comfygit:open-workflow-contract", ie);
    }), ra(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ie);
    }), (z, pe) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          k(uo, {
            modelValue: d.value,
            "onUpdate:modelValue": pe[0] || (pe[0] = (Pe) => d.value = Pe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), N(xs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), N(Ss, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            I.value.length ? (n(), N(bt, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(I.value, (Pe) => (n(), N(Vt, {
                  key: Pe.name,
                  status: "broken"
                }, {
                  icon: g(() => [...pe[7] || (pe[7] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(Ne(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ue) => Z(Pe.name)
                    }, {
                      default: g(() => [...pe[8] || (pe[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => X(Pe.name)
                    }, {
                      default: g(() => [...pe[9] || (pe[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => B(Pe.name)
                    }, {
                      default: g(() => [...pe[10] || (pe[10] = [
                        $(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (n(), N(bt, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(T.value, (Pe) => (n(), N(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    $(m(Pe.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(ne(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => X(Pe.name)
                    }, {
                      default: g(() => [...pe[11] || (pe[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => B(Pe.name)
                    }, {
                      default: g(() => [...pe[12] || (pe[12] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            R.value.length ? (n(), N(bt, {
              key: 2,
              title: "MODIFIED",
              count: R.value.length
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(R.value, (Pe) => (n(), N(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...pe[13] || (pe[13] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(ne(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => X(Pe.name)
                    }, {
                      default: g(() => [...pe[14] || (pe[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => B(Pe.name)
                    }, {
                      default: g(() => [...pe[15] || (pe[15] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            D.value.length ? (n(), N(bt, {
              key: 3,
              title: "SYNCED",
              count: D.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: pe[2] || (pe[2] = (Pe) => v.value = Pe)
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(J.value, (Pe) => (n(), N(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    $(m(Pe.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(ne(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => X(Pe.name)
                    }, {
                      default: g(() => [...pe[16] || (pe[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ue) => B(Pe.name)
                    }, {
                      default: g(() => [...pe[17] || (pe[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && D.value.length > 5 ? (n(), N(Ce, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: pe[1] || (pe[1] = (Pe) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + m(D.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            O.value.length ? h("", !0) : (n(), N(cs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && y.value ? (n(), N(Bp, {
        key: 0,
        "workflow-name": y.value,
        onClose: pe[3] || (pe[3] = (Pe) => p.value = !1),
        onResolve: pe[4] || (pe[4] = (Pe) => Z(y.value)),
        onRefresh: pe[5] || (pe[5] = (Pe) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && y.value ? (n(), N(ww, {
        key: 1,
        "workflow-name": y.value,
        onClose: te,
        onInstall: he,
        onRefresh: pe[6] || (pe[6] = (Pe) => a("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Gw = /* @__PURE__ */ Ie(Ww, [["__scopeId", "data-v-28ee54dd"]]), jw = /* @__PURE__ */ Se({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ae(["summary-bar", e.variant])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), wn = /* @__PURE__ */ Ie(jw, [["__scopeId", "data-v-ccb7816e"]]), Hw = {
  key: 0,
  class: "model-details"
}, qw = { class: "detail-section" }, Kw = { class: "detail-row" }, Jw = { class: "detail-value mono" }, Yw = { class: "detail-row" }, Qw = { class: "detail-value mono" }, Xw = { class: "detail-row" }, Zw = { class: "detail-value mono" }, e_ = { class: "detail-row" }, t_ = { class: "detail-value" }, s_ = { class: "detail-row" }, o_ = { class: "detail-value" }, n_ = { class: "detail-row" }, a_ = { class: "detail-value" }, l_ = { class: "detail-section" }, i_ = { class: "section-header" }, r_ = {
  key: 0,
  class: "locations-list"
}, c_ = { class: "location-path mono" }, u_ = {
  key: 0,
  class: "location-modified"
}, d_ = ["onClick"], m_ = {
  key: 1,
  class: "empty-state"
}, f_ = { class: "detail-section" }, v_ = { class: "section-header" }, p_ = {
  key: 0,
  class: "sources-list"
}, g_ = { class: "source-type" }, h_ = ["href"], y_ = ["disabled", "onClick"], w_ = {
  key: 1,
  class: "empty-state"
}, __ = { class: "add-source-form" }, k_ = ["disabled"], b_ = {
  key: 2,
  class: "source-error"
}, $_ = {
  key: 3,
  class: "source-success"
}, C_ = /* @__PURE__ */ Se({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = ft(), u = b(null), d = b(!0), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(null), _ = b(null), x = b(null);
    let C = null;
    function S(E, B = "success", Z = 2e3) {
      C && clearTimeout(C), x.value = { message: E, type: B }, C = setTimeout(() => {
        x.value = null;
      }, Z);
    }
    function O(E) {
      if (!E) return "Unknown";
      const B = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return E >= B ? `${(E / B).toFixed(1)} GB` : E >= Z ? `${(E / Z).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function I(E) {
      navigator.clipboard.writeText(E), S("Copied to clipboard!");
    }
    async function T(E) {
      try {
        await c(E), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function R() {
      if (!(!f.value.trim() || !u.value)) {
        p.value = !0, y.value = null, _.value = null;
        try {
          await l(u.value.hash, f.value.trim()), _.value = "Source added successfully!", f.value = "", await J();
        } catch (E) {
          y.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function D(E) {
      if (u.value) {
        w.value = E, y.value = null, _.value = null;
        try {
          await r(u.value.hash, E), S("Source removed"), await J();
        } catch (B) {
          y.value = B instanceof Error ? B.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function J() {
      d.value = !0, v.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return it(J), (E, B) => {
      var Z;
      return n(), i(q, null, [
        k(xt, {
          title: `Model Details: ${((Z = u.value) == null ? void 0 : Z.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: B[5] || (B[5] = (X) => E.$emit("close"))
        }, {
          body: g(() => {
            var X, ie, he, te;
            return [
              u.value ? (n(), i("div", Hw, [
                t("section", qw, [
                  t("div", Kw, [
                    B[6] || (B[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", Jw, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: B[0] || (B[0] = (Y) => I(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", Yw, [
                    B[7] || (B[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", Qw, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: B[1] || (B[1] = (Y) => I(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", Xw, [
                    B[8] || (B[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", Zw, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: B[2] || (B[2] = (Y) => I(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", e_, [
                    B[9] || (B[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", t_, m(O(u.value.size)), 1)
                  ]),
                  t("div", s_, [
                    B[10] || (B[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", o_, m(u.value.category), 1)
                  ]),
                  t("div", n_, [
                    B[11] || (B[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", a_, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", l_, [
                  t("h4", i_, "Locations (" + m(((X = u.value.locations) == null ? void 0 : X.length) || 0) + ")", 1),
                  (ie = u.value.locations) != null && ie.length ? (n(), i("div", r_, [
                    (n(!0), i(q, null, ke(u.value.locations, (Y, ue) => (n(), i("div", {
                      key: ue,
                      class: "location-item"
                    }, [
                      t("span", c_, m(Y.path), 1),
                      Y.modified ? (n(), i("span", u_, "Modified: " + m(Y.modified), 1)) : h("", !0),
                      Y.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ne) => T(Y.path)
                      }, " Open File Location ", 8, d_)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", m_, "No locations found"))
                ]),
                t("section", f_, [
                  t("h4", v_, "Download Sources (" + m(((he = u.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (n(), i("div", p_, [
                    (n(!0), i(q, null, ke(u.value.sources, (Y, ue) => (n(), i("div", {
                      key: ue,
                      class: "source-item"
                    }, [
                      t("span", g_, m(Y.type) + ":", 1),
                      t("a", {
                        href: Y.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(Y.url), 9, h_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Y.url,
                        onClick: (Ne) => D(Y.url)
                      }, m(w.value === Y.url ? "..." : "×"), 9, y_)
                    ]))), 128))
                  ])) : (n(), i("div", w_, " No download sources configured ")),
                  t("div", __, [
                    Tt(t("input", {
                      "onUpdate:modelValue": B[3] || (B[3] = (Y) => f.value = Y),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Co, f.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !f.value.trim() || p.value,
                      onClick: R
                    }, m(p.value ? "Adding..." : "Add Source"), 9, k_)
                  ]),
                  y.value ? (n(), i("p", b_, m(y.value), 1)) : h("", !0),
                  _.value ? (n(), i("p", $_, m(_.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: B[4] || (B[4] = (X) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), N(Ut, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Ae(["toast", x.value.type])
          }, m(x.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), Pl = /* @__PURE__ */ Ie(C_, [["__scopeId", "data-v-f15cbb56"]]), x_ = ["disabled"], S_ = { class: "dropdown-value" }, I_ = ["onClick"], E_ = {
  key: 0,
  class: "dropdown-error"
}, T_ = /* @__PURE__ */ Se({
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
    const o = e, a = s, l = b(!1), r = b(null), c = b(null), u = b({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const f = L(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((O) => d(O) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function y(S) {
      a("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), O = window.innerHeight, I = O - S.bottom, T = S.top, R = Math.min(300, o.options.length * 36 + 8), D = I < R && T > I;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...D ? { bottom: `${O - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    kt(l, async (S) => {
      S && (await Nt(), _());
    });
    function x() {
      l.value && _();
    }
    function C(S) {
      S.key === "Escape" && l.value && w();
    }
    return it(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Ro(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, O) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Ae(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", S_, m(f.value), 1),
        O[0] || (O[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, x_),
      (n(), N(Ut, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : h("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Wt(u.value)
        }, [
          (n(!0), i(q, null, ke(e.options, (I) => (n(), i("div", {
            key: d(I),
            class: Ae(["dropdown-option", { selected: d(I) === e.modelValue }]),
            onClick: (T) => y(I)
          }, m(v(I)), 11, I_))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (n(), i("span", E_, m(e.error), 1)) : h("", !0)
    ], 512));
  }
}), M_ = /* @__PURE__ */ Ie(T_, [["__scopeId", "data-v-857e085b"]]);
function P_(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function R_(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!P_(o.hostname)) return { kind: "unknown" };
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
function N_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function L_(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${N_(o)}`;
}
const D_ = { class: "hf-file-browser" }, O_ = { class: "browser-header" }, U_ = { class: "repo-info" }, A_ = { class: "repo-id" }, z_ = {
  key: 0,
  class: "revision-pill"
}, V_ = {
  key: 0,
  class: "loading-state"
}, F_ = {
  key: 1,
  class: "error-state"
}, B_ = { class: "toolbar" }, W_ = { class: "toolbar-actions" }, G_ = { class: "file-list-container" }, j_ = {
  key: 0,
  class: "file-list-header"
}, H_ = ["checked", "indeterminate"], q_ = { class: "sort-indicator" }, K_ = { class: "sort-indicator" }, J_ = {
  key: 1,
  class: "empty-state"
}, Y_ = {
  key: 2,
  class: "file-list"
}, Q_ = ["onClick"], X_ = ["checked", "onChange"], Z_ = { class: "file-path" }, ek = { class: "file-size" }, tk = { class: "destination-section" }, sk = { class: "destination-row" }, ok = {
  key: 0,
  class: "path-separator"
}, nk = { class: "action-bar" }, ak = { class: "summary-info" }, lk = { class: "summary-count" }, ik = { class: "summary-size" }, rk = /* @__PURE__ */ Se({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ft(), c = b([]), u = b(/* @__PURE__ */ new Set()), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b("name"), y = b(!0), _ = b(""), x = b(""), C = b(""), S = b([]), O = b(!1);
    let I = !1;
    const T = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, R = L(() => {
      let W = c.value;
      if (o.initialPath) {
        const ee = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        W = W.filter((M) => M.path.startsWith(ee) || M.path === o.initialPath);
      }
      if (p.value && (W = W.filter((ee) => ee.is_model_file)), f.value.trim()) {
        const ee = f.value.toLowerCase();
        W = W.filter((M) => M.path.toLowerCase().includes(ee));
      }
      return W;
    }), D = L(() => {
      const W = [...R.value];
      return W.sort((ee, M) => {
        let P;
        return w.value === "name" ? P = ee.path.localeCompare(M.path) : P = ee.size - M.size, y.value ? P : -P;
      }), W;
    }), J = L(() => R.value.length === 0 ? !1 : R.value.every((W) => u.value.has(W.path))), E = L(() => R.value.some((W) => u.value.has(W.path))), B = L(() => {
      const W = S.value.map((ee) => ({
        label: ee,
        value: ee
      }));
      return W.push({ label: "Custom path...", value: "__custom__" }), W;
    }), Z = L(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), X = L(() => {
      let W = 0;
      for (const ee of u.value) {
        const M = c.value.find((P) => P.path === ee);
        M && (W += M.size);
      }
      return W;
    });
    function ie(W) {
      if (W === 0) return "0 B";
      const ee = 1024 * 1024 * 1024, M = 1024 * 1024, P = 1024;
      return W >= ee ? `${(W / ee).toFixed(2)} GB` : W >= M ? `${(W / M).toFixed(1)} MB` : W >= P ? `${(W / P).toFixed(0)} KB` : `${W} B`;
    }
    function he(W) {
      const ee = W.match(T);
      return ee ? `${ee[1]}${ee[4]}` : null;
    }
    function te(W) {
      const ee = new Set(u.value), M = ee.has(W.path), P = W.shard_group || he(W.path);
      if (P) {
        const le = c.value.filter((Fe) => (Fe.shard_group || he(Fe.path)) === P);
        M ? le.forEach((Fe) => ee.delete(Fe.path)) : le.forEach((Fe) => ee.add(Fe.path));
      } else
        M ? ee.delete(W.path) : ee.add(W.path);
      u.value = ee;
    }
    function Y() {
      const W = new Set(u.value);
      for (const ee of R.value)
        ee.is_model_file && W.add(ee.path);
      u.value = W;
    }
    function ue() {
      u.value = /* @__PURE__ */ new Set();
    }
    function Ne() {
      if (J.value) {
        const W = new Set(u.value);
        for (const ee of R.value)
          W.delete(ee.path);
        u.value = W;
      } else {
        const W = new Set(u.value);
        for (const ee of R.value)
          W.add(ee.path);
        u.value = W;
      }
    }
    function ne(W) {
      w.value === W ? y.value = !y.value : (w.value = W, y.value = !0);
    }
    function ve(W) {
      const ee = W.split("/");
      return ee.length >= 2 ? ee[ee.length - 2] : null;
    }
    function z() {
      if (O.value || u.value.size === 0) return;
      const W = /* @__PURE__ */ new Set();
      for (const P of u.value) {
        const le = ve(P);
        le && W.add(le.toLowerCase());
      }
      if (W.size !== 1) return;
      const ee = [...W][0], M = S.value.find(
        (P) => P.toLowerCase() === ee
      );
      M && M !== _.value && (I = !0, _.value = M, Nt(() => {
        I = !1;
      }));
    }
    function pe() {
      return _.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function Pe() {
      if (u.value.size === 0 || !Z.value) return;
      const W = pe(), ee = [];
      for (const M of u.value) {
        const P = c.value.find((le) => le.path === M);
        P && ee.push({
          url: L_(o.repoId, o.revision, P.path),
          destination: W,
          filename: P.path.split("/").pop() || P.path
        });
      }
      a("queue", ee);
    }
    async function Ue() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const W = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ee = await l(W);
          if (c.value = ee.files, o.preselectedFile) {
            const M = c.value.find((P) => P.path === o.preselectedFile);
            M && te(M);
          }
        } catch (W) {
          v.value = W instanceof Error ? W.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function se() {
      try {
        const W = await r();
        S.value = W.directories, W.directories.length > 0 && !_.value && (_.value = W.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && Ue();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      O.value = !1;
    }), kt(u, () => {
      z();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && u.value.size > 0 && z();
    }), kt(_, (W, ee) => {
      I || ee === "" || (O.value = !0);
    }), it(() => {
      Ue(), se();
    }), (W, ee) => (n(), i("div", D_, [
      t("div", O_, [
        t("button", {
          class: "back-btn",
          onClick: ee[0] || (ee[0] = (M) => W.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", U_, [
          t("span", A_, m(e.repoId), 1),
          e.revision ? (n(), i("span", z_, m(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (n(), i("div", V_, " Loading repository files... ")) : v.value ? (n(), i("div", F_, m(v.value), 1)) : (n(), i(q, { key: 2 }, [
        t("div", B_, [
          k(wt, {
            modelValue: f.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (M) => f.value = M),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", W_, [
            t("button", {
              class: Ae(["toggle-btn", { active: p.value }]),
              onClick: ee[2] || (ee[2] = (M) => p.value = !p.value)
            }, m(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Y
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: ue
            }, "Clear")
          ])
        ]),
        t("div", G_, [
          R.value.length > 0 ? (n(), i("div", j_, [
            t("input", {
              type: "checkbox",
              checked: J.value,
              indeterminate: E.value && !J.value,
              class: "file-checkbox",
              onChange: Ne
            }, null, 40, H_),
            t("span", {
              class: "header-name",
              onClick: ee[3] || (ee[3] = (M) => ne("name"))
            }, [
              ee[9] || (ee[9] = $(" Name ", -1)),
              t("span", q_, m(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: ee[4] || (ee[4] = (M) => ne("size"))
            }, [
              ee[10] || (ee[10] = $(" Size ", -1)),
              t("span", K_, m(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          R.value.length === 0 ? (n(), i("div", J_, m(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Y_, [
            (n(!0), i(q, null, ke(D.value, (M) => (n(), i("div", {
              key: M.path,
              class: Ae(["file-item", { selected: u.value.has(M.path) }]),
              onClick: (P) => te(M)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(M.path),
                class: "file-checkbox",
                onClick: ee[5] || (ee[5] = dt(() => {
                }, ["stop"])),
                onChange: (P) => te(M)
              }, null, 40, X_),
              t("span", Z_, m(M.path), 1),
              t("span", ek, m(ie(M.size)), 1)
            ], 10, Q_))), 128))
          ]))
        ]),
        t("div", tk, [
          ee[11] || (ee[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", sk, [
            k(M_, {
              modelValue: _.value,
              "onUpdate:modelValue": ee[6] || (ee[6] = (M) => _.value = M),
              options: B.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (n(), i("span", ok, "/")) : h("", !0),
            _.value !== "__custom__" ? (n(), N(wt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": ee[7] || (ee[7] = (M) => x.value = M),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          _.value === "__custom__" ? (n(), N(wt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": ee[8] || (ee[8] = (M) => C.value = M),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", nk, [
          t("div", ak, [
            t("span", lk, m(u.value.size) + " file(s) selected", 1),
            t("span", ik, m(ie(X.value)), 1)
          ]),
          k(Oe, {
            variant: "primary",
            disabled: u.value.size === 0 || !Z.value,
            onClick: Pe
          }, {
            default: g(() => [...ee[12] || (ee[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), ck = /* @__PURE__ */ Ie(rk, [["__scopeId", "data-v-183acebc"]]), uk = { class: "token-config-modal" }, dk = { class: "provider-info" }, mk = { class: "provider-icon" }, fk = { class: "provider-name" }, vk = {
  key: 0,
  class: "current-token"
}, pk = { class: "mask" }, gk = { class: "token-input-section" }, hk = { class: "input-label" }, yk = { class: "help-text" }, wk = ["href"], _k = { class: "modal-actions" }, kk = /* @__PURE__ */ Se({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ft(), r = b(""), c = b(!1), u = b(!1), d = L(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = L(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = L(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = L(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = L(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function y() {
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
    async function _() {
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
    return (x, C) => (n(), N(xt, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        t("div", uk, [
          t("div", dk, [
            t("span", mk, m(v.value), 1),
            t("span", fk, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", vk, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", pk, m(e.currentTokenMask), 1),
            k(Oe, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: g(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          t("div", gk, [
            t("label", hk, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", yk, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, wk)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", _k, [
          k(Oe, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Oe, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: y
          }, {
            default: g(() => [...C[6] || (C[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), bk = /* @__PURE__ */ Ie(kk, [["__scopeId", "data-v-0687d0ce"]]), $k = { class: "huggingface-tab" }, Ck = {
  key: 0,
  class: "search-section"
}, xk = { class: "search-header" }, Sk = { class: "search-bar" }, Ik = {
  key: 1,
  class: "search-results"
}, Ek = {
  key: 0,
  class: "loading-state"
}, Tk = {
  key: 1,
  class: "error-state"
}, Mk = {
  key: 2,
  class: "results-list"
}, Pk = ["onClick"], Rk = { class: "repo-header" }, Nk = { class: "repo-id" }, Lk = { class: "repo-stats" }, Dk = {
  class: "stat",
  title: "Downloads"
}, Ok = {
  class: "stat",
  title: "Likes"
}, Uk = {
  key: 0,
  class: "repo-desc"
}, Ak = {
  key: 1,
  class: "repo-tags"
}, zk = {
  key: 3,
  class: "empty-state"
}, Vk = {
  key: 4,
  class: "hint-state"
}, Fk = /* @__PURE__ */ Se({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ft(), a = b("search"), l = b(""), r = b([]), c = b(!1), u = b(null), d = b(!1), v = b(null), f = b("main"), p = b(), w = b(), y = b(!1), _ = b(null), x = L(() => {
      if (!u.value) return !1;
      const J = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || J.includes("authentication") || J.includes("unauthorized");
    });
    function C(J) {
      return J >= 1e6 ? `${(J / 1e6).toFixed(1)}M` : J >= 1e3 ? `${(J / 1e3).toFixed(1)}K` : String(J);
    }
    async function S() {
      const J = l.value.trim();
      if (!J) return;
      u.value = null;
      const E = R_(J);
      if (E.kind === "file" && E.repoId && E.path) {
        v.value = E.repoId, f.value = E.revision || "main";
        const B = E.path.split("/");
        B.length > 1 ? p.value = B.slice(0, -1).join("/") : p.value = void 0, w.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        v.value = E.repoId, f.value = E.revision || "main", p.value = E.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(J) && !J.includes("://")) {
        v.value = J, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const B = await s(J);
        r.value = B.results, d.value = !0;
      } catch (B) {
        u.value = B instanceof Error ? B.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function O(J) {
      v.value = J, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function I() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function T() {
      try {
        const J = await o();
        _.value = J.huggingface_token || null;
      } catch (J) {
        console.error("Failed to load config:", J);
      }
    }
    function R() {
      T(), x.value && l.value && S();
    }
    function D() {
      _.value = null;
    }
    return it(T), (J, E) => (n(), i("div", $k, [
      a.value === "search" ? (n(), i("div", Ck, [
        t("div", xk, [
          t("div", Sk, [
            k(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (B) => l.value = B),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ts(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Oe, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: g(() => [...E[5] || (E[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (B) => y.value = !0)
          }, {
            default: g(() => [
              $(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      a.value === "search" ? (n(), i("div", Ik, [
        c.value ? (n(), i("div", Ek, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Tk, [
          t("p", null, m(u.value), 1),
          x.value ? (n(), N(Oe, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (B) => y.value = !0)
          }, {
            default: g(() => [...E[6] || (E[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Mk, [
          (n(!0), i(q, null, ke(r.value, (B) => (n(), i("div", {
            key: B.repo_id,
            class: "repo-card",
            onClick: (Z) => O(B.repo_id)
          }, [
            t("div", Rk, [
              t("span", Nk, m(B.repo_id), 1),
              t("div", Lk, [
                t("span", Dk, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(C(B.downloads)), 1)
                ]),
                t("span", Ok, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(C(B.likes)), 1)
                ])
              ])
            ]),
            B.description ? (n(), i("p", Uk, m(B.description), 1)) : h("", !0),
            B.tags.length > 0 ? (n(), i("div", Ak, [
              (n(!0), i(q, null, ke(B.tags.slice(0, 5), (Z) => (n(), i("span", {
                key: Z,
                class: "tag"
              }, m(Z), 1))), 128))
            ])) : h("", !0)
          ], 8, Pk))), 128))
        ])) : d.value ? (n(), i("div", zk, " No repositories found ")) : (n(), i("div", Vk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), N(ck, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: I,
        onQueue: E[3] || (E[3] = (B) => J.$emit("queue", B))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (n(), N(bk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: E[4] || (E[4] = (B) => y.value = !1),
        onSaved: R,
        onCleared: D
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Bk = /* @__PURE__ */ Ie(Fk, [["__scopeId", "data-v-e13209bf"]]), Wk = { class: "civitai-tab" }, Gk = /* @__PURE__ */ Se({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Wk, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), jk = /* @__PURE__ */ Ie(Gk, [["__scopeId", "data-v-44948051"]]), Hk = { class: "direct-url-tab" }, qk = { class: "input-group" }, Kk = { class: "input-group" }, Jk = {
  key: 0,
  class: "error"
}, Yk = { class: "actions" }, Qk = /* @__PURE__ */ Se({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = b(""), r = L(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = L(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, v) => (n(), i("div", Hk, [
      t("div", qk, [
        v[2] || (v[2] = t("label", null, "Download URL", -1)),
        k(wt, {
          modelValue: a.value,
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a.value = f),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Kk, [
        v[3] || (v[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        k(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Jk, m(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Yk, [
        k(Oe, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: g(() => [...v[4] || (v[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Xk = /* @__PURE__ */ Ie(Qk, [["__scopeId", "data-v-01def7aa"]]), Zk = { class: "download-modal" }, eb = { class: "tab-bar" }, tb = ["onClick"], sb = { class: "tab-content" }, ob = /* @__PURE__ */ Se({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Lo(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = b("huggingface");
    function c(v) {
      a(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.destination ? `${f.destination}/${f.filename}` : f.filename
      }))), o("close");
    }
    function u(v) {
      a(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (v, f) => e.show ? (n(), N(xt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        t("div", Zk, [
          t("div", eb, [
            (n(), i(q, null, ke(l, (p) => t("button", {
              key: p.id,
              class: Ae(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, m(p.icon) + " " + m(p.label), 11, tb)), 64))
          ]),
          t("div", sb, [
            r.value === "huggingface" ? (n(), N(Bk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), N(jk, { key: 1 })) : r.value === "direct" ? (n(), N(Xk, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...f[0] || (f[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), nc = /* @__PURE__ */ Ie(ob, [["__scopeId", "data-v-90a9f401"]]), nb = /* @__PURE__ */ Se({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ft(), r = b([]), c = b([]), u = b("production"), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = L(
      () => r.value.reduce((E, B) => E + (B.size || 0), 0)
    ), C = L(() => {
      if (!f.value.trim()) return r.value;
      const E = f.value.toLowerCase();
      return r.value.filter((B) => B.filename.toLowerCase().includes(E));
    }), S = L(() => {
      if (!f.value.trim()) return c.value;
      const E = f.value.toLowerCase();
      return c.value.filter((B) => B.filename.toLowerCase().includes(E));
    }), O = L(() => {
      const E = {};
      for (const Z of C.value) {
        const X = Z.type || "other";
        E[X] || (E[X] = []), E[X].push(Z);
      }
      const B = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([Z], [X]) => {
        const ie = B.indexOf(Z), he = B.indexOf(X);
        return ie >= 0 && he >= 0 ? ie - he : ie >= 0 ? -1 : he >= 0 ? 1 : Z.localeCompare(X);
      }).map(([Z, X]) => ({ type: Z, models: X }));
    });
    function I(E) {
      if (!E) return "Unknown";
      const B = E / (1024 * 1024);
      return B >= 1024 ? `${(B / 1024).toFixed(1)} GB` : `${B.toFixed(0)} MB`;
    }
    function T(E) {
      w.value = E.hash || E.filename;
    }
    function R(E) {
      o("navigate", "model-index");
    }
    function D(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function J() {
      d.value = !0, v.value = null;
      try {
        const E = await a();
        r.value = E, c.value = [];
        const B = await l();
        u.value = B.environment || "production";
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return it(J), (E, B) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: B[1] || (B[1] = (Z) => p.value = !0)
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (Z) => y.value = !0)
              }, {
                default: g(() => [...B[6] || (B[6] = [
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
          k(uo, {
            modelValue: f.value,
            "onUpdate:modelValue": B[2] || (B[2] = (Z) => f.value = Z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (n(), N(xs, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), N(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            r.value.length ? (n(), N(wn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(I(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(q, null, ke(O.value, (Z) => (n(), N(bt, {
              key: Z.type,
              title: Z.type.toUpperCase(),
              count: Z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(Z.models, (X) => (n(), N(Vt, {
                  key: X.hash || X.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...B[7] || (B[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(X.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(I(X.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: (X.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Path:",
                      value: X.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => T(X)
                    }, {
                      default: g(() => [...B[8] || (B[8] = [
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
            S.value.length ? (n(), N(bt, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(S.value, (Z) => (n(), N(Vt, {
                  key: Z.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...B[9] || (B[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(Z.filename), 1)
                  ]),
                  subtitle: g(() => [...B[10] || (B[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var X;
                    return [
                      k(_t, {
                        label: "Required by:",
                        value: ((X = Z.workflow_names) == null ? void 0 : X.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    k(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => D(Z.filename)
                    }, {
                      default: g(() => [...B[11] || (B[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => R(Z.filename)
                    }, {
                      default: g(() => [...B[12] || (B[12] = [
                        $(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !C.value.length && !S.value.length ? (n(), N(cs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: p.value,
        title: "About Environment Models",
        onClose: B[3] || (B[3] = (Z) => p.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            B[13] || (B[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + m(u.value) + '"', 1),
            B[14] || (B[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          k(Ce, {
            variant: "primary",
            onClick: _
          }, {
            default: g(() => [...B[15] || (B[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), N(Pl, {
        key: 0,
        identifier: w.value,
        onClose: B[4] || (B[4] = (Z) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      k(nc, {
        show: y.value,
        onClose: B[5] || (B[5] = (Z) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), ab = /* @__PURE__ */ Ie(nb, [["__scopeId", "data-v-af3ca736"]]), lb = {
  key: 0,
  class: "indexing-progress"
}, ib = { class: "progress-info" }, rb = { class: "progress-label" }, cb = { class: "progress-count" }, ub = { class: "progress-bar" }, db = { class: "modal-content" }, mb = { class: "modal-header" }, fb = { class: "modal-body" }, vb = { class: "input-group" }, pb = { class: "current-path" }, gb = { class: "input-group" }, hb = { class: "modal-footer" }, yb = /* @__PURE__ */ Se({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ft(), c = s, u = b([]), d = b(!1), v = b(!1), f = b(null), p = b(""), w = b(!1), y = b(null), _ = b(!1), x = b(null), C = b(""), S = b(!1), O = b(!1), I = b(null), T = L(
      () => u.value.reduce((he, te) => he + (te.size || 0), 0)
    ), R = L(() => {
      if (!p.value.trim()) return u.value;
      const he = p.value.toLowerCase();
      return u.value.filter((te) => {
        const Y = te, ue = te.sha256 || Y.sha256_hash || "";
        return te.filename.toLowerCase().includes(he) || ue.toLowerCase().includes(he);
      });
    }), D = L(() => {
      const he = {};
      for (const Y of R.value) {
        const ue = Y.type || "other";
        he[ue] || (he[ue] = []), he[ue].push(Y);
      }
      const te = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([Y], [ue]) => {
        const Ne = te.indexOf(Y), ne = te.indexOf(ue);
        return Ne >= 0 && ne >= 0 ? Ne - ne : Ne >= 0 ? -1 : ne >= 0 ? 1 : Y.localeCompare(ue);
      }).map(([Y, ue]) => ({ type: Y, models: ue }));
    });
    function J(he) {
      if (!he) return "Unknown";
      const te = 1024 * 1024 * 1024, Y = 1024 * 1024;
      return he >= te ? `${(he / te).toFixed(1)} GB` : he >= Y ? `${(he / Y).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function E(he) {
      y.value = he.hash || he.filename;
    }
    async function B() {
      v.value = !0, f.value = null;
      try {
        const he = await a();
        await X(), he.changes > 0 && console.log(`Scan complete: ${he.changes} changes detected`);
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function Z() {
      if (C.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const he = await r(C.value.trim());
          x.value = he.path, _.value = !1, C.value = "", await X(), console.log(`Directory changed: ${he.models_indexed} models indexed`), c("refresh");
        } catch (he) {
          f.value = he instanceof Error ? he.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function X() {
      d.value = !0, f.value = null;
      try {
        u.value = await o();
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ie() {
      try {
        const he = await l();
        x.value = he.path;
      } catch {
      }
    }
    return it(() => {
      X(), ie();
    }), (he, te) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: te[2] || (te[2] = (Y) => w.value = !0)
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: B
              }, {
                default: g(() => [
                  $(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: te[0] || (te[0] = (Y) => _.value = !0)
              }, {
                default: g(() => [...te[11] || (te[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: te[1] || (te[1] = (Y) => O.value = !0)
              }, {
                default: g(() => [...te[12] || (te[12] = [
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
          I.value ? (n(), i("div", lb, [
            t("div", ib, [
              t("span", rb, m(I.value.message), 1),
              t("span", cb, m(I.value.current) + "/" + m(I.value.total), 1)
            ]),
            t("div", ub, [
              t("div", {
                class: "progress-fill",
                style: Wt({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          k(uo, {
            modelValue: p.value,
            "onUpdate:modelValue": te[3] || (te[3] = (Y) => p.value = Y),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || I.value ? (n(), N(xs, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), N(Ss, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            u.value.length ? (n(), N(wn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(u.value.length) + " models • " + m(J(T.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(q, null, ke(D.value, (Y) => (n(), N(bt, {
              key: Y.type,
              title: Y.type.toUpperCase(),
              count: Y.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(Y.models, (ue) => (n(), N(Vt, {
                  key: ue.sha256 || ue.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...te[13] || (te[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(ue.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(J(ue.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Hash:",
                      value: ue.hash ? ue.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => E(ue)
                    }, {
                      default: g(() => [...te[14] || (te[14] = [
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
            R.value.length ? h("", !0) : (n(), N(cs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: te[4] || (te[4] = (Y) => w.value = !1)
      }, {
        content: g(() => [...te[15] || (te[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (n(), N(Pl, {
        key: 0,
        identifier: y.value,
        onClose: te[5] || (te[5] = (Y) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), N(Ut, { to: "body" }, [
        _.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: te[9] || (te[9] = dt((Y) => _.value = !1, ["self"]))
        }, [
          t("div", db, [
            t("div", mb, [
              te[16] || (te[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: te[6] || (te[6] = (Y) => _.value = !1)
              }, "✕")
            ]),
            t("div", fb, [
              t("div", vb, [
                te[17] || (te[17] = t("label", null, "Current Directory", -1)),
                t("code", pb, m(x.value || "Not set"), 1)
              ]),
              t("div", gb, [
                te[18] || (te[18] = t("label", null, "New Directory Path", -1)),
                k(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": te[7] || (te[7] = (Y) => C.value = Y),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              te[19] || (te[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", hb, [
              k(Oe, {
                variant: "secondary",
                onClick: te[8] || (te[8] = (Y) => _.value = !1)
              }, {
                default: g(() => [...te[20] || (te[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Oe, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: Z
              }, {
                default: g(() => [
                  $(m(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      k(nc, {
        show: O.value,
        onClose: te[10] || (te[10] = (Y) => O.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), wb = /* @__PURE__ */ Ie(yb, [["__scopeId", "data-v-3705114c"]]), _b = { class: "node-details" }, kb = { class: "status-row" }, bb = {
  key: 0,
  class: "detail-row"
}, $b = { class: "value" }, Cb = { class: "detail-row" }, xb = { class: "value" }, Sb = {
  key: 1,
  class: "detail-row"
}, Ib = { class: "value mono" }, Eb = {
  key: 2,
  class: "detail-row"
}, Tb = ["href"], Mb = {
  key: 3,
  class: "detail-row"
}, Pb = { class: "value mono small" }, Rb = { class: "detail-row" }, Nb = {
  key: 0,
  class: "value"
}, Lb = {
  key: 1,
  class: "workflow-list"
}, Db = /* @__PURE__ */ Se({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = L(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = L(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = L(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), N(xt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: g(() => [
        t("div", _b, [
          t("div", kb, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ae(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", bb, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", $b, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : h("", !0),
          t("div", Cb, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", xb, m(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", Sb, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Ib, m(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (n(), i("div", Eb, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(m(e.node.repository) + " ", 1),
              d[6] || (d[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Tb)
          ])) : h("", !0),
          e.node.download_url ? (n(), i("div", Mb, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Pb, m(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Rb, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", Nb, " Not used in any workflows ")) : (n(), i("div", Lb, [
              (n(!0), i(q, null, ke(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ob = /* @__PURE__ */ Ie(Db, [["__scopeId", "data-v-b342f626"]]), Ub = { class: "dialog-message" }, Ab = {
  key: 0,
  class: "dialog-details"
}, zb = {
  key: 1,
  class: "dialog-warning"
}, Vb = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), N(xt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", Ub, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", Ab, [
          (n(!0), i(q, null, ke(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : h("", !0),
        e.warning ? (n(), i("p", zb, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + m(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            $(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), N(Oe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            $(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        k(Oe, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: g(() => [
            $(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Rl = /* @__PURE__ */ Ie(Vb, [["__scopeId", "data-v-3670b9f5"]]), Fb = { class: "mismatch-warning" }, Bb = { class: "version-mismatch" }, Wb = { class: "version-actual" }, Gb = { class: "version-expected" }, jb = { style: { color: "var(--cg-color-warning)" } }, Hb = { style: { color: "var(--cg-color-warning)" } }, qb = {
  key: 0,
  class: "community-status-badge"
}, Kb = { key: 0 }, Jb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Yb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Qb = /* @__PURE__ */ Se({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: d } = ft(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), f = b(!1), p = b(null), w = b(""), y = b(!1), _ = b(null), x = b(/* @__PURE__ */ new Set()), C = b(null), S = L(() => {
      if (!w.value.trim()) return v.value.nodes;
      const M = w.value.toLowerCase();
      return v.value.nodes.filter(
        (P) => {
          var le, Fe;
          return P.name.toLowerCase().includes(M) || ((le = P.description) == null ? void 0 : le.toLowerCase().includes(M)) || ((Fe = P.repository) == null ? void 0 : Fe.toLowerCase().includes(M));
        }
      );
    }), O = L(
      () => S.value.filter((M) => M.installed && M.tracked)
    ), I = L(
      () => S.value.filter((M) => !M.installed && M.tracked && !M.issue_type)
    ), T = L(
      () => S.value.filter((M) => M.installed && !M.tracked)
    ), R = L(
      () => S.value.filter((M) => M.issue_type === "version_gated")
    ), D = L(
      () => S.value.filter((M) => M.issue_type === "uninstallable")
    ), J = L(() => R.value.length), E = L(() => D.value.length);
    function B(M) {
      return M.registry_id || M.name;
    }
    function Z(M) {
      return x.value.has(B(M));
    }
    async function X(M, P) {
      const le = M.registry_id;
      if (!le) {
        a("toast", `Node "${M.name}" has no package id for install`, "warning");
        return;
      }
      if (P === "git" && !M.repository) {
        a("toast", `Node "${M.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Fe = {
        id: le,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      P === "git" && M.repository && (Fe.repository = M.repository, Fe.install_source = "git"), await d(Fe), x.value.add(B(M)), a("toast", `✓ Queued install for "${M.name}"`, "success");
    }
    function ie(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    const he = L(() => o.versionMismatches.length > 0);
    function te(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function Y(M) {
      return M.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ue(M) {
      return M.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Ne(M) {
      return M.registry_id ? `Community-mapped package: ${M.registry_id}` : "Community-mapped package";
    }
    function ne(M) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ve(M) {
      _.value = M;
    }
    function z() {
      a("open-node-manager");
    }
    function pe(M) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${M}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const P = await r(M);
            P.status === "success" ? (a("toast", `✓ Node "${M}" tracked as development`, "success"), await ee()) : a("toast", `Failed to track node: ${P.message || "Unknown error"}`, "error");
          } catch (P) {
            a("toast", `Error tracking node: ${P instanceof Error ? P.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function Pe(M) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${M}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const P = await u(M);
            P.status === "success" ? (a("toast", `✓ Node "${M}" removed`, "success"), await ee()) : a("toast", `Failed to remove node: ${P.message || "Unknown error"}`, "error");
          } catch (P) {
            a("toast", `Error removing node: ${P instanceof Error ? P.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function Ue(M) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${M}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const P = await c(M);
            P.status === "success" ? (a("toast", `✓ Node "${M}" installed`, "success"), await ee()) : a("toast", `Failed to install node: ${P.message || "Unknown error"}`, "error");
          } catch (P) {
            a("toast", `Error installing node: ${P instanceof Error ? P.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function se(M) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${M.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await X(M, "registry");
          } catch (P) {
            a("toast", `Error queueing install: ${P instanceof Error ? P.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function W(M) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${M.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await X(M, "git");
          } catch (P) {
            a("toast", `Error queueing git install: ${P instanceof Error ? P.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    async function ee() {
      f.value = !0, p.value = null;
      try {
        v.value = await l();
      } catch (M) {
        p.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return it(ee), (M, P) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (le) => y.value = !0)
          }, {
            actions: g(() => [
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: g(() => [...P[7] || (P[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(uo, {
            modelValue: w.value,
            "onUpdate:modelValue": P[1] || (P[1] = (le) => w.value = le),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          f.value ? (n(), N(xs, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), N(Ss, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            v.value.total_count ? (n(), N(wn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(m(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (n(), i(q, { key: 0 }, [
                  $(" • " + m(v.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                J.value ? (n(), i(q, { key: 1 }, [
                  $(" • " + m(J.value) + " blocked", 1)
                ], 64)) : h("", !0),
                E.value ? (n(), i(q, { key: 2 }, [
                  $(" • " + m(E.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                v.value.untracked_count ? (n(), i(q, { key: 3 }, [
                  $(" • " + m(v.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            he.value ? (n(), N(bt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", Fb, [
                  P[8] || (P[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(q, null, ke(e.versionMismatches, (le) => (n(), N(Vt, {
                  key: le.name,
                  status: "warning"
                }, {
                  icon: g(() => [...P[9] || (P[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(le.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Bb, [
                      t("span", Wb, m(le.actual), 1),
                      P[10] || (P[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Gb, m(le.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "warning",
                      size: "sm",
                      onClick: P[2] || (P[2] = (Fe) => a("repair-environment"))
                    }, {
                      default: g(() => [...P[11] || (P[11] = [
                        $(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            R.value.length ? (n(), N(bt, {
              key: 2,
              title: "BLOCKED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(R.value, (le) => (n(), N(Vt, {
                  key: `blocked-${le.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...P[12] || (P[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(m(le.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", jb, m(Y(le)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: le.issue_guidance || ue(le)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: te(le)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Fe) => ve(le)
                    }, {
                      default: g(() => [...P[13] || (P[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            D.value.length ? (n(), N(bt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(D.value, (le) => (n(), N(Vt, {
                  key: `community-${le.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...P[14] || (P[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(le.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Hb, m(Ne(le)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: le.issue_guidance || ne(le)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: te(le)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Fe) => ve(le)
                    }, {
                      default: g(() => [...P[15] || (P[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Z(le) ? (n(), i("span", qb, "Queued")) : (n(), i(q, { key: 1 }, [
                      le.registry_id ? (n(), N(Ce, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Fe) => se(le)
                      }, {
                        default: g(() => [...P[16] || (P[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      le.repository ? (n(), N(Ce, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Fe) => W(le)
                      }, {
                        default: g(() => [...P[17] || (P[17] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (n(), N(bt, {
              key: 4,
              title: "UNTRACKED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(T.value, (le) => (n(), N(Vt, {
                  key: le.name,
                  status: "warning"
                }, {
                  icon: g(() => [...P[18] || (P[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(m(le.name), 1)
                  ]),
                  subtitle: g(() => [...P[19] || (P[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: te(le)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Fe) => ve(le)
                    }, {
                      default: g(() => [...P[20] || (P[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Fe) => pe(le.name)
                    }, {
                      default: g(() => [...P[21] || (P[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Fe) => Pe(le.name)
                    }, {
                      default: g(() => [...P[22] || (P[22] = [
                        $(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            O.value.length ? (n(), N(bt, {
              key: 5,
              title: "INSTALLED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(O.value, (le) => (n(), N(Vt, {
                  key: le.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(m(le.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(m(le.name), 1)
                  ]),
                  subtitle: g(() => [
                    le.version ? (n(), i("span", Kb, m(le.source === "development" ? "" : "v") + m(le.version), 1)) : (n(), i("span", Jb, "version unknown")),
                    t("span", Yb, " • " + m(ie(le.source)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: te(le)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Fe) => ve(le)
                    }, {
                      default: g(() => [...P[23] || (P[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: g(() => [...P[24] || (P[24] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (n(), N(bt, {
              key: 6,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(I.value, (le) => (n(), N(Vt, {
                  key: le.name,
                  status: "missing"
                }, {
                  icon: g(() => [...P[25] || (P[25] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(m(le.name), 1)
                  ]),
                  subtitle: g(() => [...P[26] || (P[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Required by:",
                      value: te(le)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Fe) => ve(le)
                    }, {
                      default: g(() => [...P[27] || (P[27] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Fe) => Ue(le.name)
                    }, {
                      default: g(() => [...P[28] || (P[28] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !O.value.length && !I.value.length && !R.value.length && !D.value.length && !T.value.length ? (n(), N(cs, {
              key: 7,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: P[4] || (P[4] = (le) => y.value = !1)
      }, {
        content: g(() => [...P[29] || (P[29] = [
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
          k(Ce, {
            variant: "primary",
            onClick: P[3] || (P[3] = (le) => y.value = !1)
          }, {
            default: g(() => [...P[30] || (P[30] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), N(Ob, {
        key: 0,
        node: _.value,
        onClose: P[5] || (P[5] = (le) => _.value = null)
      }, null, 8, ["node"])) : h("", !0),
      C.value ? (n(), N(Rl, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: P[6] || (P[6] = (le) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), Xb = /* @__PURE__ */ Ie(Qb, [["__scopeId", "data-v-3ef68ac4"]]), Zb = { class: "setting-info" }, e2 = { class: "setting-label" }, t2 = {
  key: 0,
  class: "required-marker"
}, s2 = {
  key: 0,
  class: "setting-description"
}, o2 = { class: "setting-control" }, n2 = /* @__PURE__ */ Se({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ae(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      t("div", Zb, [
        t("div", e2, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", t2, "*")) : h("", !0)
        ]),
        e.description ? (n(), i("div", s2, m(e.description), 1)) : h("", !0)
      ]),
      t("div", o2, [
        ot(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Hs = /* @__PURE__ */ Ie(n2, [["__scopeId", "data-v-3e106b1c"]]), a2 = ["type", "value", "placeholder", "disabled"], l2 = /* @__PURE__ */ Se({
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
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return it(() => {
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
    }), (u, d) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Ae(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = ts((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ts((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, a2));
  }
}), $s = /* @__PURE__ */ Ie(l2, [["__scopeId", "data-v-0380d08f"]]), i2 = { class: "toggle" }, r2 = ["checked", "disabled"], c2 = /* @__PURE__ */ Se({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", i2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, r2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ii = /* @__PURE__ */ Ie(c2, [["__scopeId", "data-v-71c0f550"]]), Ga = "ComfyGit.Deploy.GitHubPAT";
function ac(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function u2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function d2() {
  function e() {
    try {
      return localStorage.getItem(Ga);
    } catch {
      return null;
    }
  }
  function s(l) {
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
    setToken: s,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: ac,
    isRemoteHttps: u2
  };
}
const m2 = { class: "workspace-settings-content" }, f2 = { class: "settings-section" }, v2 = { class: "path-setting" }, p2 = { class: "path-value" }, g2 = { class: "path-setting" }, h2 = { class: "path-value" }, y2 = { class: "settings-section" }, w2 = { class: "token-setting" }, _2 = {
  key: 0,
  class: "token-warning"
}, k2 = { class: "token-actions" }, b2 = { class: "settings-section" }, $2 = { class: "settings-section" }, C2 = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ft(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = d2(), y = b(!1), _ = b(null), x = b(null), C = b(null), S = b(null), O = b(""), I = b(""), T = b(""), R = b(""), D = b(!1), J = b(!1), E = b(!1), B = b(""), Z = b(!1), X = b(!1), ie = b(null), he = b(!1), te = b(!0);
    function Y(ee) {
      return ee.join(" ");
    }
    function ue(ee) {
      return ee.trim() ? ee.trim().split(/\s+/) : [];
    }
    const Ne = L(() => {
      if (!S.value) return !1;
      const ee = D.value, M = J.value, P = E.value, le = R.value !== Y(S.value.comfyui_extra_args || []);
      return ee || M || P || le;
    }), ne = L(() => w());
    async function ve() {
      var ee;
      y.value = !0, _.value = null;
      try {
        C.value = await r(a.workspacePath || void 0), S.value = { ...C.value }, O.value = C.value.civitai_api_key || "", I.value = C.value.huggingface_token || "", R.value = Y(C.value.comfyui_extra_args || []), T.value = v() || "", B.value = T.value, D.value = !1, J.value = !1, E.value = !1, ie.value = null;
        const M = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = M !== "false", te.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const le = (ee = (await u()).remotes) == null ? void 0 : ee.find((Fe) => Fe.name === "origin");
          Z.value = !!(le && ac(le.url));
        } catch {
          Z.value = !1;
        }
      } catch (M) {
        _.value = M instanceof Error ? M.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function z() {
      var ee;
      x.value = null;
      try {
        const M = {};
        D.value && (M.civitai_api_key = O.value || null), J.value && (M.huggingface_token = I.value || null), R.value !== Y(((ee = S.value) == null ? void 0 : ee.comfyui_extra_args) || []) && (M.comfyui_extra_args = ue(R.value)), await c(M, a.workspacePath || void 0), E.value && (T.value ? f(T.value) : p()), await ve(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (M) {
        const P = M instanceof Error ? M.message : "Failed to save settings";
        x.value = { type: "error", message: P }, l("error", P);
      }
    }
    function pe() {
      S.value && (O.value = S.value.civitai_api_key || "", I.value = S.value.huggingface_token || "", R.value = Y(S.value.comfyui_extra_args || []), T.value = B.value, D.value = !1, J.value = !1, E.value = !1, ie.value = null, x.value = null);
    }
    async function Pe() {
      if (T.value) {
        X.value = !0, ie.value = null;
        try {
          const ee = await d(T.value);
          ie.value = {
            type: ee.status === "success" ? "success" : "error",
            message: ee.message
          };
        } catch (ee) {
          ie.value = {
            type: "error",
            message: ee instanceof Error ? ee.message : "Connection test failed"
          };
        } finally {
          X.value = !1;
        }
      }
    }
    function Ue() {
      T.value = "", E.value = !0, ie.value = null;
    }
    function se(ee) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ee)), console.log("[ComfyGit] Auto-refresh setting saved:", ee);
    }
    function W(ee) {
      ee ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ee ? "enabled" : "disabled");
    }
    return s({
      saveSettings: z,
      resetSettings: pe,
      hasChanges: Ne,
      loadSettings: ve
    }), it(ve), (ee, M) => (n(), i("div", m2, [
      y.value ? (n(), N(xs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), N(Ss, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ve
      }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
        k(bt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var P, le;
            return [
              t("div", f2, [
                t("div", v2, [
                  M[9] || (M[9] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  M[10] || (M[10] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", p2, m(((P = C.value) == null ? void 0 : P.workspace_path) || "Loading..."), 1)
                ]),
                t("div", g2, [
                  M[11] || (M[11] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  M[12] || (M[12] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", h2, m(((le = C.value) == null ? void 0 : le.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(bt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", y2, [
              k(Hs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  k($s, {
                    modelValue: O.value,
                    "onUpdate:modelValue": M[0] || (M[0] = (P) => O.value = P),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: M[1] || (M[1] = (P) => D.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Hs, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  k($s, {
                    modelValue: I.value,
                    "onUpdate:modelValue": M[2] || (M[2] = (P) => I.value = P),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: M[3] || (M[3] = (P) => J.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Hs, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: g(() => [
                  t("div", w2, [
                    k($s, {
                      modelValue: T.value,
                      "onUpdate:modelValue": M[4] || (M[4] = (P) => T.value = P),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: M[5] || (M[5] = (P) => E.value = !0)
                    }, null, 8, ["modelValue"]),
                    Z.value ? (n(), i("div", _2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    M[15] || (M[15] = t("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    t("div", k2, [
                      k(Ce, {
                        variant: "ghost",
                        size: "xs",
                        loading: X.value,
                        disabled: !T.value || X.value,
                        onClick: Pe
                      }, {
                        default: g(() => [...M[13] || (M[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      ne.value ? (n(), N(Ce, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: Ue
                      }, {
                        default: g(() => [...M[14] || (M[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    ie.value ? (n(), i("div", {
                      key: 1,
                      class: Ae(["token-test-result", ie.value.type])
                    }, m(ie.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(bt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", b2, [
              k(Hs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  k($s, {
                    modelValue: R.value,
                    "onUpdate:modelValue": M[6] || (M[6] = (P) => R.value = P),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              M[16] || (M[16] = t("div", { class: "setting-hint" }, [
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
        k(bt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", $2, [
              k(Hs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  k(Ii, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      M[7] || (M[7] = (P) => he.value = P),
                      se
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Hs, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  k(Ii, {
                    modelValue: te.value,
                    "onUpdate:modelValue": [
                      M[8] || (M[8] = (P) => te.value = P),
                      W
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x.value ? (n(), N(wn, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Wt({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), lc = /* @__PURE__ */ Ie(C2, [["__scopeId", "data-v-f1bdc574"]]), x2 = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), N(Pt, null, {
      header: g(() => [
        k(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              k(Ce, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (n(), N(Ce, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  $(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        k(lc, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), S2 = { class: "env-title" }, I2 = {
  key: 0,
  class: "current-badge"
}, E2 = {
  key: 0,
  class: "branch-info"
}, T2 = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), N(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, ss({
      icon: g(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", S2, [
          t("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", I2, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", E2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + m(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        ot(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          k(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), N(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), M2 = /* @__PURE__ */ Ie(T2, [["__scopeId", "data-v-9231917a"]]), P2 = { class: "env-details" }, R2 = { class: "status-row" }, N2 = {
  key: 0,
  class: "detail-row"
}, L2 = { class: "value mono" }, D2 = {
  key: 1,
  class: "detail-row"
}, O2 = { class: "value mono small" }, U2 = { class: "collapsible-section" }, A2 = { class: "value" }, z2 = {
  key: 0,
  class: "collapsible-body"
}, V2 = { class: "item-list" }, F2 = { class: "item-name" }, B2 = { class: "item-name" }, W2 = { class: "item-name" }, G2 = { class: "item-name" }, j2 = {
  key: 0,
  class: "empty-list"
}, H2 = { class: "collapsible-section" }, q2 = { class: "value" }, K2 = {
  key: 0,
  class: "collapsible-body"
}, J2 = { class: "item-list" }, Y2 = { class: "item-name" }, Q2 = {
  key: 0,
  class: "item-meta"
}, X2 = {
  key: 0,
  class: "empty-list"
}, Z2 = { class: "collapsible-section" }, e$ = { class: "value" }, t$ = {
  key: 0,
  class: "missing-count"
}, s$ = {
  key: 0,
  class: "collapsible-body"
}, o$ = { class: "item-list" }, n$ = { class: "model-row" }, a$ = { class: "item-name" }, l$ = { class: "model-meta" }, i$ = { class: "item-meta" }, r$ = {
  key: 0,
  class: "item-meta"
}, c$ = {
  key: 0,
  class: "empty-list"
}, u$ = {
  key: 2,
  class: "section-divider"
}, d$ = {
  key: 3,
  class: "detail-row"
}, m$ = { class: "value" }, f$ = { class: "footer-actions" }, v$ = /* @__PURE__ */ Se({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = L(() => {
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
    return (d, v) => (n(), N(xt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: g(() => {
        var f, p, w, y, _, x, C, S, O, I, T, R, D, J;
        return [
          t("div", P2, [
            t("div", R2, [
              v[7] || (v[7] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Ae(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", N2, [
              v[8] || (v[8] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", L2, m(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (n(), i("div", D2, [
              v[9] || (v[9] = t("span", { class: "label" }, "Path:", -1)),
              t("span", O2, m(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = t("div", { class: "section-divider" }, null, -1)),
            t("div", U2, [
              t("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (E) => r("workflows"))
              }, [
                v[10] || (v[10] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", A2, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ae(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", z2, [
                t("div", V2, [
                  (n(!0), i(q, null, ke(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", F2, m(E), 1),
                    v[11] || (v[11] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(q, null, ke(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", B2, m(E), 1),
                    v[12] || (v[12] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(q, null, ke(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", W2, m(E), 1),
                    v[13] || (v[13] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(q, null, ke(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", G2, m(E), 1),
                    v[14] || (v[14] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", j2, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            t("div", H2, [
              t("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (E) => r("nodes"))
              }, [
                v[15] || (v[15] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", q2, m(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ae(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", K2, [
                t("div", J2, [
                  (n(!0), i(q, null, ke(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", Y2, m(E.name), 1),
                    E.version ? (n(), i("span", Q2, m(E.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (n(), i("div", X2, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            t("div", Z2, [
              t("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (E) => r("models"))
              }, [
                v[16] || (v[16] = t("span", { class: "label" }, "Models:", -1)),
                t("span", e$, [
                  $(m(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (O = (S = e.detail) == null ? void 0 : S.models) != null && O.missing.length ? (n(), i("span", t$, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (I = e.detail) != null && I.models ? (n(), i("span", {
                  key: 0,
                  class: Ae(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (n(), i("div", s$, [
                t("div", o$, [
                  (n(!0), i(q, null, ke(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", n$, [
                      t("span", a$, m(E.filename), 1),
                      t("span", {
                        class: Ae(["criticality-badge", E.criticality])
                      }, m(E.criticality), 3)
                    ]),
                    t("div", l$, [
                      t("span", i$, m(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", r$, " used by: " + m(E.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", c$, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (R = e.detail) != null && R.created_at || e.environment.created_at ? (n(), i("div", u$)) : h("", !0),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", d$, [
              v[17] || (v[17] = t("span", { class: "label" }, "Created:", -1)),
              t("span", m$, m(u(((J = e.detail) == null ? void 0 : J.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", f$, [
          k(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: g(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), N(Oe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: g(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = t("div", { class: "footer-spacer" }, null, -1)),
          k(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
          }, {
            default: g(() => [...v[21] || (v[21] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), p$ = /* @__PURE__ */ Ie(v$, [["__scopeId", "data-v-750671f5"]]), ic = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], rc = "3.12", Nl = [
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
], cc = "auto", g$ = { class: "progress-bar" }, h$ = /* @__PURE__ */ Se({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = L(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", g$, [
      t("div", {
        class: Ae(["progress-fill", e.variant]),
        style: Wt({ width: o.value })
      }, null, 6)
    ]));
  }
}), uc = /* @__PURE__ */ Ie(h$, [["__scopeId", "data-v-1beb0512"]]), y$ = { class: "task-progress" }, w$ = { class: "progress-info" }, _$ = { class: "progress-percentage" }, k$ = { class: "progress-message" }, b$ = {
  key: 0,
  class: "progress-steps"
}, $$ = { class: "step-icon" }, C$ = { class: "step-label" }, x$ = /* @__PURE__ */ Se({
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
    return (l, r) => (n(), i("div", y$, [
      k(uc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", w$, [
        t("span", _$, m(e.progress) + "%", 1),
        t("span", k$, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", b$, [
        (n(!0), i(q, null, ke(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Ae(["step", o(c.id)])
        }, [
          t("span", $$, m(a(c.id)), 1),
          t("span", C$, m(c.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), Qn = /* @__PURE__ */ Ie(x$, [["__scopeId", "data-v-9d1de66c"]]), S$ = {
  key: 0,
  class: "create-env-form"
}, I$ = { class: "form-field" }, E$ = { class: "input-wrapper" }, T$ = {
  key: 0,
  class: "validating-indicator"
}, M$ = {
  key: 1,
  class: "valid-indicator"
}, P$ = {
  key: 0,
  class: "field-error"
}, R$ = { class: "form-field" }, N$ = ["value"], L$ = { class: "form-field" }, D$ = ["disabled"], O$ = ["value"], U$ = { class: "form-field" }, A$ = ["value"], z$ = { class: "form-field form-field--checkbox" }, V$ = { class: "form-checkbox" }, F$ = {
  key: 1,
  class: "create-env-progress"
}, B$ = { class: "creating-intro" }, W$ = {
  key: 0,
  class: "progress-warning"
}, G$ = {
  key: 1,
  class: "create-error"
}, j$ = { class: "error-message" }, H$ = {
  key: 1,
  class: "footer-status"
}, q$ = 10, K$ = /* @__PURE__ */ Se({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ft(), u = b(""), d = b(rc), v = b("latest"), f = b(cc), p = b(!1), w = b(null), y = b(!1), _ = b(!1);
    let x = null, C = 0;
    const S = L(() => !!u.value.trim() && _.value && !w.value && !y.value && !T.value), O = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = b(!1), T = b(!1), R = b({
      progress: 0,
      message: ""
    });
    let D = null, J = 0;
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
    ], B = b(null);
    kt(u, (ne) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const ve = ne.trim();
      if (!ve) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, x = setTimeout(() => {
        Z(ve);
      }, 400);
    });
    async function Z(ne, ve = !1) {
      const z = ne.trim();
      if (!z)
        return _.value = !1, y.value = !1, w.value = ve ? "Environment name is required" : null, !1;
      const pe = ++C;
      y.value = !0;
      try {
        const Pe = await c(z);
        return pe !== C ? !1 : (w.value = Pe.valid ? null : Pe.error || "Invalid name", _.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return pe !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        pe === C && (y.value = !1);
      }
    }
    async function X() {
      x && (clearTimeout(x), x = null), await Z(u.value, !0);
    }
    function ie() {
      T.value || o("close");
    }
    async function he() {
      const ne = u.value.trim();
      if (!ne) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Z(ne, !0)) {
        T.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const z = {
            name: ne,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, pe = await l(z);
          pe.status === "started" ? te() : pe.status === "error" && (R.value = {
            progress: 0,
            message: pe.message || "Failed to start creation",
            error: pe.message
          });
        } catch (z) {
          R.value = {
            progress: 0,
            message: z instanceof Error ? z.message : "Unknown error",
            error: z instanceof Error ? z.message : "Unknown error"
          };
        }
      }
    }
    function te() {
      D || (J = 0, D = window.setInterval(async () => {
        try {
          const ne = await r();
          J = 0, R.value = {
            progress: ne.progress ?? 0,
            message: ne.message,
            phase: ne.phase,
            error: ne.error
          }, ne.state === "complete" ? (Y(), o("created", ne.environment_name || u.value.trim(), p.value)) : ne.state === "error" ? (Y(), R.value.error = ne.error || ne.message) : ne.state === "idle" && T.value && (Y(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          J++, J >= q$ && (Y(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Y() {
      D && (clearInterval(D), D = null);
    }
    function ue() {
      T.value = !1, R.value = { progress: 0, message: "" }, o("close");
    }
    async function Ne() {
      I.value = !0;
      try {
        O.value = await a();
      } catch (ne) {
        console.error("Failed to load ComfyUI releases:", ne);
      } finally {
        I.value = !1;
      }
    }
    return it(async () => {
      var ne;
      await Nt(), (ne = B.value) == null || ne.focus(), Ne();
    }), Ro(() => {
      Y(), x && (clearTimeout(x), x = null);
    }), (ne, ve) => (n(), N(xt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !T.value,
      onClose: ie
    }, {
      body: g(() => [
        T.value ? (n(), i("div", F$, [
          t("p", B$, [
            ve[12] || (ve[12] = $(" Creating environment ", -1)),
            t("strong", null, m(u.value), 1),
            ve[13] || (ve[13] = $("... ", -1))
          ]),
          k(Qn, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? h("", !0) : (n(), i("p", W$, " This may take several minutes. Please wait... ")),
          R.value.error ? (n(), i("div", G$, [
            t("p", j$, m(R.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", S$, [
          t("div", I$, [
            ve[6] || (ve[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", E$, [
              Tt(t("input", {
                ref_key: "nameInput",
                ref: B,
                "onUpdate:modelValue": ve[0] || (ve[0] = (z) => u.value = z),
                type: "text",
                class: Ae(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: ts(he, ["enter"]),
                onBlur: X
              }, null, 34), [
                [Co, u.value]
              ]),
              y.value ? (n(), i("span", T$, "...")) : _.value ? (n(), i("span", M$, "✓")) : h("", !0)
            ]),
            w.value ? (n(), i("div", P$, m(w.value), 1)) : h("", !0),
            ve[7] || (ve[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", R$, [
            ve[8] || (ve[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            Tt(t("select", {
              "onUpdate:modelValue": ve[1] || (ve[1] = (z) => d.value = z),
              class: "form-select"
            }, [
              (n(!0), i(q, null, ke(et(ic), (z) => (n(), i("option", {
                key: z,
                value: z
              }, m(z), 9, N$))), 128))
            ], 512), [
              [xo, d.value]
            ])
          ]),
          t("div", L$, [
            ve[9] || (ve[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(t("select", {
              "onUpdate:modelValue": ve[2] || (ve[2] = (z) => v.value = z),
              class: "form-select",
              disabled: I.value
            }, [
              (n(!0), i(q, null, ke(O.value, (z) => (n(), i("option", {
                key: z.tag_name,
                value: z.tag_name
              }, m(z.name), 9, O$))), 128))
            ], 8, D$), [
              [xo, v.value]
            ])
          ]),
          t("div", U$, [
            ve[10] || (ve[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(t("select", {
              "onUpdate:modelValue": ve[3] || (ve[3] = (z) => f.value = z),
              class: "form-select"
            }, [
              (n(!0), i(q, null, ke(et(Nl), (z) => (n(), i("option", {
                key: z,
                value: z
              }, m(z) + m(z === "auto" ? " (detect GPU)" : ""), 9, A$))), 128))
            ], 512), [
              [xo, f.value]
            ])
          ]),
          t("div", z$, [
            t("label", V$, [
              Tt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ve[4] || (ve[4] = (z) => p.value = z)
              }, null, 512), [
                [Jn, p.value]
              ]),
              ve[11] || (ve[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        T.value ? (n(), i(q, { key: 1 }, [
          R.value.error ? (n(), N(Oe, {
            key: 0,
            variant: "secondary",
            onClick: ue
          }, {
            default: g(() => [...ve[16] || (ve[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", H$, " Creating environment... "))
        ], 64)) : (n(), i(q, { key: 0 }, [
          k(Oe, {
            variant: "primary",
            disabled: !S.value,
            onClick: he
          }, {
            default: g(() => [...ve[14] || (ve[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Oe, {
            variant: "secondary",
            onClick: ve[5] || (ve[5] = (z) => o("close"))
          }, {
            default: g(() => [...ve[15] || (ve[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), J$ = /* @__PURE__ */ Ie(K$, [["__scopeId", "data-v-3faa3d9b"]]), Y$ = /* @__PURE__ */ Se({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ft(), c = b([]), u = b(!1), d = b(null), v = b(""), f = b(!1), p = b(!1), w = b(null), y = b(null), _ = L(() => {
      if (!v.value.trim()) return c.value;
      const R = v.value.toLowerCase();
      return c.value.filter(
        (D) => {
          var J;
          return D.name.toLowerCase().includes(R) || ((J = D.current_branch) == null ? void 0 : J.toLowerCase().includes(R));
        }
      );
    });
    function x(R, D) {
      p.value = !1, a("created", R, D);
    }
    function C() {
      p.value = !0;
    }
    async function S(R) {
      w.value = R, y.value = null;
      const D = await r(R.name);
      D && (y.value = D);
    }
    function O(R) {
      w.value = null, y.value = null, a("delete", R);
    }
    function I(R) {
      w.value = null, y.value = null, a("export", R);
    }
    async function T() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (R) {
        d.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return it(T), s({
      loadEnvironments: T,
      openCreateModal: C
    }), (R, D) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[1] || (D[1] = (J) => f.value = !0)
          }, {
            actions: g(() => [
              e.canCreate ? (n(), N(Ce, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...D[7] || (D[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : h("", !0),
              k(Ce, {
                variant: "secondary",
                size: "sm",
                onClick: D[0] || (D[0] = (J) => R.$emit("import"))
              }, {
                default: g(() => [...D[8] || (D[8] = [
                  $(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(uo, {
            modelValue: v.value,
            "onUpdate:modelValue": D[2] || (D[2] = (J) => v.value = J),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), N(xs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), N(Ss, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            _.value.length ? (n(), N(bt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(_.value, (J) => (n(), N(M2, {
                  key: J.name,
                  "environment-name": J.name,
                  "is-current": J.is_current,
                  "current-branch": J.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    !J.is_current && e.canSwitch ? (n(), N(Ce, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => R.$emit("switch", J.name)
                    }, {
                      default: g(() => [...D[9] || (D[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : h("", !0),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => S(J)
                    }, {
                      default: g(() => [...D[10] || (D[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => R.$emit("export", J.name)
                    }, {
                      default: g(() => [...D[11] || (D[11] = [
                        $(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            _.value.length ? h("", !0) : (n(), N(cs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ss({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  e.canCreate ? (n(), N(Ce, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...D[12] || (D[12] = [
                      $(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: f.value,
        title: "About Environments",
        onClose: D[4] || (D[4] = (J) => f.value = !1)
      }, {
        content: g(() => [...D[13] || (D[13] = [
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
          k(Ce, {
            variant: "secondary",
            onClick: D[3] || (D[3] = (J) => f.value = !1)
          }, {
            default: g(() => [...D[14] || (D[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), N(p$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: D[5] || (D[5] = (J) => {
          w.value = null, y.value = null;
        }),
        onDelete: O,
        onExport: I
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (n(), N(J$, {
        key: 1,
        onClose: D[6] || (D[6] = (J) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), Q$ = /* @__PURE__ */ Ie(Y$, [["__scopeId", "data-v-01d95db8"]]), X$ = { class: "file-path" }, Z$ = { class: "file-path-text" }, eC = ["title"], tC = /* @__PURE__ */ Se({
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
    return (l, r) => (n(), i("div", X$, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", Z$, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, eC)) : h("", !0)
    ]));
  }
}), sC = /* @__PURE__ */ Ie(tC, [["__scopeId", "data-v-f0982173"]]), oC = { class: "base-textarea-wrapper" }, nC = ["value", "rows", "placeholder", "disabled", "maxlength"], aC = {
  key: 0,
  class: "base-textarea-count"
}, lC = /* @__PURE__ */ Se({
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
    return (r, c) => (n(), i("div", oC, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ts(dt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ts(dt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ts(l, ["enter"])
        ]
      }, null, 40, nC),
      e.showCharCount && e.maxLength ? (n(), i("div", aC, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), So = /* @__PURE__ */ Ie(lC, [["__scopeId", "data-v-c6d16c93"]]), iC = ["checked", "disabled"], rC = { class: "base-checkbox-box" }, cC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, uC = {
  key: 0,
  class: "base-checkbox-label"
}, dC = /* @__PURE__ */ Se({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Ae(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, iC),
      t("span", rC, [
        e.modelValue ? (n(), i("svg", cC, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      s.$slots.default ? (n(), i("span", uC, [
        ot(s.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ Ie(dC, [["__scopeId", "data-v-bf17c831"]]), mC = { class: "export-blocked" }, fC = { class: "error-header" }, vC = { class: "error-summary" }, pC = { class: "error-title" }, gC = { class: "error-description" }, hC = { class: "issues-list" }, yC = { class: "issue-message" }, wC = {
  key: 0,
  class: "issue-details"
}, _C = ["onClick"], kC = { class: "issue-fix" }, bC = {
  key: 0,
  class: "commit-section"
}, $C = {
  key: 0,
  class: "issues-warning"
}, CC = {
  key: 1,
  class: "commit-error"
}, xC = /* @__PURE__ */ Se({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ft(), r = b(""), c = b(!1), u = b(!1), d = b(""), v = mo({}), f = L(() => o.mode === "publish" ? "Publish" : "Export"), p = L(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = L(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), y = L(
      () => w.value && !u.value
    ), _ = L(
      () => p.value && r.value.trim() !== "" && !c.value && !y.value
    );
    function x(S) {
      const O = o.issues[S];
      return v[S] || O.details.length <= 3 ? O.details : O.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const O = await l(r.value.trim(), u.value);
          if (O.status === "success")
            a("committed");
          else if (O.status === "blocked") {
            const I = ((S = O.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${I}`;
          } else
            d.value = O.message || "Commit failed";
        } catch (O) {
          d.value = O instanceof Error ? O.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, O) => (n(), N(xt, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: O[4] || (O[4] = (I) => S.$emit("close"))
    }, {
      body: g(() => [
        t("div", mC, [
          t("div", fC, [
            O[5] || (O[5] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", vC, [
              t("h3", pC, m(f.value) + " blocked", 1),
              t("p", gC, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          t("div", hC, [
            (n(!0), i(q, null, ke(e.issues, (I, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", yC, m(I.message), 1),
              I.details.length ? (n(), i("div", wC, [
                (n(!0), i(q, null, ke(x(T), (R, D) => (n(), i("div", {
                  key: D,
                  class: "issue-detail"
                }, m(R), 1))), 128)),
                I.details.length > 3 && !v[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (R) => v[T] = !0
                }, " +" + m(I.details.length - 3) + " more ", 9, _C)) : h("", !0)
              ])) : h("", !0),
              t("div", kC, [
                I.type === "uncommitted_workflows" ? (n(), i(q, { key: 0 }, [
                  $(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "uncommitted_git_changes" ? (n(), i(q, { key: 1 }, [
                  $(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "unresolved_issues" ? (n(), i(q, { key: 2 }, [
                  $(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", bC, [
            w.value ? (n(), i("div", $C, [
              O[7] || (O[7] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(Xn, {
                modelValue: u.value,
                "onUpdate:modelValue": O[0] || (O[0] = (I) => u.value = I),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...O[6] || (O[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            k(So, {
              modelValue: r.value,
              "onUpdate:modelValue": O[1] || (O[1] = (I) => r.value = I),
              placeholder: "Describe your changes...",
              disabled: c.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", CC, m(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (n(), i(q, { key: 0 }, [
          k(Oe, {
            variant: "secondary",
            onClick: O[2] || (O[2] = (I) => S.$emit("close"))
          }, {
            default: g(() => [...O[8] || (O[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Oe, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: C
          }, {
            default: g(() => [
              $(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), N(Oe, {
          key: 1,
          variant: "primary",
          onClick: O[3] || (O[3] = (I) => S.$emit("close"))
        }, {
          default: g(() => [...O[9] || (O[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), dc = /* @__PURE__ */ Ie(xC, [["__scopeId", "data-v-a8990107"]]), SC = { class: "export-warnings" }, IC = {
  key: 0,
  class: "success-header"
}, EC = { class: "success-summary" }, TC = { class: "success-description" }, MC = { class: "warning-header" }, PC = { class: "warning-summary" }, RC = { class: "warning-title" }, NC = { class: "warning-description" }, LC = { class: "models-section" }, DC = { class: "models-list" }, OC = { class: "model-info" }, UC = { class: "model-filename" }, AC = { class: "model-workflows" }, zC = ["onClick"], VC = /* @__PURE__ */ Se({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(!1), r = b(null), c = L(() => o.mode || "export"), u = L(() => c.value === "publish" ? "Publish" : "Export"), d = L(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function v() {
      r.value = null, a("revalidate");
    }
    return (f, p) => (n(), i(q, null, [
      k(xt, {
        title: c.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => f.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", SC, [
            e.models.length === 0 ? (n(), i("div", IC, [
              p[5] || (p[5] = t("span", { class: "success-icon" }, [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1)),
              t("div", EC, [
                p[4] || (p[4] = t("h3", { class: "success-title" }, "All models have source URLs", -1)),
                t("p", TC, " Your environment is ready to " + m(c.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (n(), i(q, { key: 1 }, [
              t("div", MC, [
                p[6] || (p[6] = t("span", { class: "warning-icon" }, [
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
                t("div", PC, [
                  t("h3", RC, m(e.models.length) + " model" + m(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  t("p", NC, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + m(c.value) + " anyway. ", 1)
                ])
              ]),
              t("div", LC, [
                t("div", DC, [
                  (n(!0), i(q, null, ke(d.value, (w) => (n(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    t("div", OC, [
                      t("div", UC, m(w.filename), 1),
                      t("div", AC, " Used by: " + m(w.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, zC)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => l.value = !0)
                }, " Show " + m(e.models.length - 3) + " more model" + m(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          k(Oe, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => f.$emit("cancel"))
          }, {
            default: g(() => [
              $(" Cancel " + m(c.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          k(Oe, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => f.$emit("confirm"))
          }, {
            default: g(() => [
              $(m(e.models.length === 0 ? u.value : `${u.value} Anyway`), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]),
      r.value ? (n(), N(Pl, {
        key: 0,
        identifier: r.value,
        onClose: v
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), mc = /* @__PURE__ */ Ie(VC, [["__scopeId", "data-v-9b6d5fce"]]), FC = { class: "export-card" }, BC = { class: "export-path-row" }, WC = { class: "export-actions" }, GC = {
  key: 1,
  class: "export-warning"
}, jC = /* @__PURE__ */ Se({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const s = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ft(), c = b(""), u = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(!1), _ = b(!1), x = L(() => {
      var Z;
      return ((Z = s.environmentName) == null ? void 0 : Z.trim()) || null;
    }), C = L(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = L(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), O = L(() => u.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function I() {
      u.value = !0, f.value = null;
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z, Z.can_export ? Z.warnings.models_without_sources.length > 0 ? _.value = !0 : await J() : y.value = !0;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function T() {
      _.value = !1, await J();
    }
    async function R() {
      y.value = !1, u.value = !0;
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z, Z.can_export ? Z.warnings.models_without_sources.length > 0 ? _.value = !0 : await J() : y.value = !0;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Re-validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function D() {
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z;
      } catch (Z) {
        console.error("Re-validation failed:", Z);
      }
    }
    async function J() {
      d.value = !0;
      try {
        const Z = x.value ? await r(x.value, c.value || void 0) : await a(c.value || void 0);
        f.value = Z;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function E() {
      var Z;
      if ((Z = f.value) != null && Z.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (X) {
          console.error("Failed to copy path:", X);
        }
    }
    async function B() {
      var Z;
      if ((Z = f.value) != null && Z.path) {
        v.value = !0;
        try {
          const X = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!X.ok)
            throw new Error(`Download failed: ${X.statusText}`);
          const ie = await X.blob(), he = URL.createObjectURL(ie), te = f.value.path.split("/").pop() || "environment-export.tar.gz", Y = document.createElement("a");
          Y.href = he, Y.download = te, document.body.appendChild(Y), Y.click(), document.body.removeChild(Y), URL.revokeObjectURL(he);
        } catch (X) {
          console.error("Failed to download:", X), alert(`Download failed: ${X instanceof Error ? X.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (Z, X) => (n(), i(q, null, [
      k(Pt, null, ss({
        content: g(() => [
          k(bt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", FC, [
                X[7] || (X[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", BC, [
                  k($s, {
                    modelValue: c.value,
                    "onUpdate:modelValue": X[1] || (X[1] = (ie) => c.value = ie),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", WC, [
                  k(Ce, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || d.value,
                    disabled: u.value || d.value,
                    onClick: I
                  }, {
                    default: g(() => [
                      X[6] || (X[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + m(O.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), N(bt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              k(Vt, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, ss({
                icon: g(() => [
                  $(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(m(f.value.status === "success" ? S.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    k(_t, { label: "Saved to:" }, {
                      default: g(() => [
                        k(sC, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), N(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", GC, [...X[8] || (X[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    k(Ce, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: B
                    }, {
                      default: g(() => [...X[9] || (X[9] = [
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
                    k(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: E
                    }, {
                      default: g(() => [...X[10] || (X[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(Ce, {
                      variant: "ghost",
                      size: "sm",
                      onClick: X[2] || (X[2] = (ie) => f.value = null)
                    }, {
                      default: g(() => [...X[11] || (X[11] = [
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
          })) : h("", !0)
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Rt, {
              title: C.value,
              "show-info": !0,
              onInfoClick: X[0] || (X[0] = (ie) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      k(Qt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: X[3] || (X[3] = (ie) => p.value = !1)
      }, {
        content: g(() => [...X[12] || (X[12] = [
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
      y.value && w.value ? (n(), N(dc, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: X[4] || (X[4] = (ie) => y.value = !1),
        onCommitted: R
      }, null, 8, ["issues"])) : h("", !0),
      _.value && w.value ? (n(), N(mc, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: X[5] || (X[5] = (ie) => _.value = !1),
        onRevalidate: D
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), HC = /* @__PURE__ */ Ie(jC, [["__scopeId", "data-v-253214a4"]]), qC = { class: "file-input-wrapper" }, KC = ["accept", "multiple", "disabled"], JC = /* @__PURE__ */ Se({
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
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return s({
      triggerInput: r
    }), (u, d) => (n(), i("div", qC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, KC),
      k(Ce, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          ot(u.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            $(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), YC = /* @__PURE__ */ Ie(JC, [["__scopeId", "data-v-cd192091"]]), QC = {
  key: 0,
  class: "drop-zone-empty"
}, XC = { class: "drop-zone-text" }, ZC = { class: "drop-zone-primary" }, ex = { class: "drop-zone-secondary" }, tx = { class: "drop-zone-actions" }, sx = {
  key: 1,
  class: "drop-zone-file"
}, ox = { class: "file-info" }, nx = { class: "file-details" }, ax = { class: "file-name" }, lx = { class: "file-size" }, ix = /* @__PURE__ */ Se({
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
    const o = s, a = b(!1), l = b(null), r = b(0), c = L(() => l.value !== null), u = L(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = L(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function f(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(C) {
      var O;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (O = C.dataTransfer) == null ? void 0 : O.files;
      S && S.length > 0 && _(S[0]);
    }
    function y(C) {
      C.length > 0 && _(C[0]);
    }
    function _(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (n(), i("div", {
      class: Ae(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: dt(v, ["prevent"]),
      onDragover: dt(f, ["prevent"]),
      onDragleave: dt(p, ["prevent"]),
      onDrop: dt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", sx, [
        t("div", ox, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", nx, [
            t("div", ax, m(u.value), 1),
            t("div", lx, m(d.value), 1)
          ])
        ]),
        k(Ce, {
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
      ])) : (n(), i("div", QC, [
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
        t("div", XC, [
          t("p", ZC, m(e.primaryText), 1),
          t("p", ex, m(e.secondaryText), 1)
        ]),
        t("div", tx, [
          k(YC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: g(() => [
              $(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), rx = /* @__PURE__ */ Ie(ix, [["__scopeId", "data-v-0f79cb86"]]), cx = { class: "commit-hash" }, ux = /* @__PURE__ */ Se({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = L(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", cx, m(o.value), 1));
  }
}), fc = /* @__PURE__ */ Ie(ux, [["__scopeId", "data-v-7c333cc6"]]), dx = { class: "import-preview" }, mx = { class: "preview-header" }, fx = {
  key: 0,
  class: "source-env"
}, vx = { class: "preview-content" }, px = { class: "preview-section" }, gx = { class: "section-header" }, hx = { class: "section-info" }, yx = { class: "section-count" }, wx = {
  key: 0,
  class: "item-list"
}, _x = { class: "item-name" }, kx = {
  key: 0,
  class: "item-more"
}, bx = { class: "preview-section" }, $x = { class: "section-header" }, Cx = { class: "section-info" }, xx = { class: "section-count" }, Sx = {
  key: 0,
  class: "item-list"
}, Ix = { class: "item-details" }, Ex = { class: "item-name" }, Tx = { class: "item-meta" }, Mx = {
  key: 0,
  class: "item-more"
}, Px = { class: "preview-section" }, Rx = { class: "section-header" }, Nx = { class: "section-info" }, Lx = { class: "section-count" }, Dx = {
  key: 0,
  class: "item-list"
}, Ox = { class: "item-name" }, Ux = {
  key: 0,
  class: "item-more"
}, Ax = {
  key: 0,
  class: "preview-section"
}, zx = { class: "git-info" }, Vx = /* @__PURE__ */ Se({
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
    const s = e, o = L(() => s.workflows.length), a = L(() => s.models.length), l = L(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", dx, [
      t("div", mx, [
        k(as, null, {
          default: g(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", fx, [
          u[1] || (u[1] = $(" From: ", -1)),
          k(al, null, {
            default: g(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      t("div", vx, [
        t("div", px, [
          t("div", gx, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", hx, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", yx, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", wx, [
            (n(!0), i(q, null, ke(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", _x, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", kx, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", bx, [
          t("div", $x, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Cx, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", xx, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", Sx, [
            (n(!0), i(q, null, ke(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Ix, [
                t("span", Ex, m(d.filename), 1),
                t("span", Tx, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", Mx, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", Px, [
          t("div", Rx, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Nx, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", Lx, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", Dx, [
            (n(!0), i(q, null, ke(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Ox, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", Ux, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", Ax, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", zx, [
            e.gitBranch ? (n(), N(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                k(al, null, {
                  default: g(() => [
                    $(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (n(), N(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                k(fc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), Fx = /* @__PURE__ */ Ie(Vx, [["__scopeId", "data-v-182fe113"]]), Bx = { class: "import-config" }, Wx = { class: "config-container" }, Gx = { class: "config-field" }, jx = { class: "input-wrapper" }, Hx = ["value"], qx = {
  key: 0,
  class: "validating-indicator"
}, Kx = {
  key: 1,
  class: "valid-indicator"
}, Jx = {
  key: 0,
  class: "field-error"
}, Yx = { class: "config-field" }, Qx = { class: "strategy-options" }, Xx = ["value", "checked", "onChange"], Zx = { class: "strategy-content" }, e3 = { class: "strategy-label" }, t3 = { class: "strategy-description" }, s3 = { class: "config-field switch-field" }, o3 = { class: "switch-label" }, n3 = ["checked"], a3 = { class: "advanced-section" }, l3 = { class: "advanced-content" }, i3 = { class: "config-field" }, r3 = ["value"], c3 = ["value"], u3 = /* @__PURE__ */ Se({
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
    kt(() => o.nameError, (f) => {
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
    return (f, p) => (n(), i("div", Bx, [
      k(as, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", Wx, [
        t("div", Gx, [
          k(An, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", jx, [
            t("input", {
              type: "text",
              class: Ae(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Hx),
            l.value ? (n(), i("span", qx, "...")) : r.value ? (n(), i("span", Kx, "✓")) : h("", !0)
          ]),
          e.nameError ? (n(), i("div", Jx, m(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", Yx, [
          k(An, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", Qx, [
            (n(), i(q, null, ke(c, (w) => t("label", {
              key: w.value,
              class: Ae(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => a("update:modelStrategy", w.value)
              }, null, 40, Xx),
              t("div", Zx, [
                t("span", e3, m(w.label), 1),
                t("span", t3, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", s3, [
          t("label", o3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, n3),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", a3, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", l3, [
            t("div", i3, [
              k(An, null, {
                default: g(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(q, null, ke(et(Nl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, c3))), 128))
              ], 40, r3)
            ])
          ])
        ])
      ])
    ]));
  }
}), d3 = /* @__PURE__ */ Ie(u3, [["__scopeId", "data-v-89ea06a1"]]), m3 = { class: "import-flow" }, f3 = {
  key: 0,
  class: "import-empty"
}, v3 = { class: "git-import-section" }, p3 = { class: "git-url-input-row" }, g3 = ["disabled"], h3 = {
  key: 0,
  class: "git-error"
}, y3 = {
  key: 1,
  class: "import-configure"
}, w3 = { class: "selected-file-bar" }, _3 = {
  key: 0,
  class: "file-bar-content"
}, k3 = { class: "file-bar-info" }, b3 = { class: "file-bar-name" }, $3 = { class: "file-bar-size" }, C3 = {
  key: 1,
  class: "file-bar-content"
}, x3 = { class: "file-bar-info" }, S3 = { class: "file-bar-name" }, I3 = {
  key: 0,
  class: "preview-loading"
}, E3 = { class: "import-actions" }, T3 = {
  key: 2,
  class: "import-progress"
}, M3 = { class: "creating-intro" }, P3 = {
  key: 0,
  class: "progress-warning"
}, R3 = {
  key: 1,
  class: "import-error"
}, N3 = { class: "error-message" }, L3 = {
  key: 3,
  class: "import-complete"
}, D3 = { class: "complete-message" }, O3 = { class: "complete-title" }, U3 = { class: "complete-details" }, A3 = { class: "complete-actions" }, z3 = /* @__PURE__ */ Se({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var se, W, ee, M;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ft();
    let p = null;
    const w = b(null), y = b(a.resumeImport ?? !1), _ = b(!1), x = b(!1), C = b(""), S = b(!1), O = b(null), I = b(""), T = b(null), R = b(!1), D = b(null), J = b(null), E = b({
      name: ((se = a.initialProgress) == null ? void 0 : se.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), B = b(null), Z = b({
      message: ((W = a.initialProgress) == null ? void 0 : W.message) ?? "Preparing import...",
      phase: ((ee = a.initialProgress) == null ? void 0 : ee.phase) ?? "",
      progress: ((M = a.initialProgress) == null ? void 0 : M.progress) ?? 0,
      error: null
    }), X = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ie = L(() => {
      if (!J.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const P = J.value;
      return {
        sourceEnvironment: P.comfyui_version ? `ComfyUI ${P.comfyui_version}` : "Unknown",
        workflows: P.workflows.map((le) => le.name),
        models: P.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: P.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), he = L(() => !S.value && !O.value && J.value && E.value.name.length > 0 && !B.value && (w.value || T.value));
    async function te(P) {
      w.value = P, S.value = !0, O.value = null, J.value = null;
      try {
        const le = await r(P);
        J.value = le;
      } catch (le) {
        O.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        S.value = !1;
      }
    }
    function Y() {
      w.value = null, T.value = null, I.value = "", D.value = null, _.value = !1, x.value = !1, C.value = "", J.value = null, O.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, B.value = null, l("source-cleared");
    }
    function ue() {
      Pe(), Y(), y.value = !1, S.value = !1, R.value = !1, Z.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ne() {
      if (I.value.trim()) {
        R.value = !0, D.value = null;
        try {
          const P = await c(I.value.trim());
          T.value = I.value.trim(), J.value = P;
        } catch (P) {
          D.value = P instanceof Error ? P.message : "Failed to analyze repository";
        } finally {
          R.value = !1;
        }
      }
    }
    function ne(P) {
      try {
        const le = new URL(P);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return P;
      }
    }
    async function ve(P) {
      if (!P) {
        B.value = "Environment name is required";
        return;
      }
      try {
        const le = await u(P);
        B.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        B.value = "Failed to validate name";
      }
    }
    async function z() {
      if (E.value.name && !(!w.value && !T.value)) {
        y.value = !0, _.value = !1, Z.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let P;
          if (w.value)
            P = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (T.value)
            P = await v(
              T.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          P.status === "started" ? pe() : (x.value = !1, C.value = P.message, y.value = !1, _.value = !0);
        } catch (P) {
          x.value = !1, C.value = P instanceof Error ? P.message : "Unknown error occurred during import", y.value = !1, _.value = !0;
        }
      }
    }
    async function pe() {
      if (p) return;
      const P = async () => {
        try {
          const Fe = await f();
          return Z.value = {
            message: Fe.message,
            phase: Fe.phase || "",
            progress: Fe.progress ?? (Fe.state === "importing" ? 50 : 0),
            error: Fe.error || null
          }, Fe.state === "complete" ? (Pe(), x.value = !0, C.value = `Environment '${Fe.environment_name}' created successfully`, y.value = !1, _.value = !0, Fe.environment_name && l("import-complete", Fe.environment_name, E.value.switchAfterImport), !1) : Fe.state === "error" ? (Pe(), x.value = !1, C.value = Fe.error || Fe.message, y.value = !1, _.value = !0, !1) : !0;
        } catch (Fe) {
          return console.error("Failed to poll import progress:", Fe), !0;
        }
      };
      await P() && (p = setInterval(async () => {
        await P() || Pe();
      }, 2e3));
    }
    function Pe() {
      p && (clearInterval(p), p = null);
    }
    function Ue(P) {
      return P < 1024 ? `${P} B` : P < 1024 * 1024 ? `${(P / 1024).toFixed(1)} KB` : P < 1024 * 1024 * 1024 ? `${(P / (1024 * 1024)).toFixed(1)} MB` : `${(P / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return it(async () => {
      try {
        const P = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", P.state, P), P.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", P.environment_name), y.value = !0, E.value.name = P.environment_name || E.value.name || "", Z.value = {
          progress: P.progress ?? 0,
          message: P.message || "Importing...",
          phase: P.phase || "",
          error: null
        }, pe());
      } catch (P) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", P);
      }
    }), s({
      handleReset: ue,
      isImporting: y,
      canImport: he
    }), (P, le) => {
      var Fe;
      return n(), i("div", m3, [
        !w.value && !T.value && !y.value ? (n(), i("div", f3, [
          k(rx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          le[7] || (le[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", v3, [
            le[5] || (le[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", p3, [
              Tt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Qe) => I.value = Qe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ts(Ne, ["enter"]),
                disabled: R.value
              }, null, 40, g3), [
                [Co, I.value]
              ]),
              k(Ce, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || R.value,
                onClick: Ne
              }, {
                default: g(() => [
                  $(m(R.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            D.value ? (n(), i("div", h3, m(D.value), 1)) : h("", !0),
            le[6] || (le[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !y.value && !_.value ? (n(), i("div", y3, [
          t("div", w3, [
            w.value ? (n(), i("div", _3, [
              le[8] || (le[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", k3, [
                t("div", b3, m(w.value.name), 1),
                t("div", $3, m(Ue(w.value.size)), 1)
              ])
            ])) : T.value ? (n(), i("div", C3, [
              le[10] || (le[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", x3, [
                t("div", S3, m(ne(T.value)), 1),
                le[9] || (le[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            k(Ce, {
              variant: "ghost",
              size: "sm",
              onClick: Y
            }, {
              default: g(() => [...le[11] || (le[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", I3, [...le[12] || (le[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : O.value ? (n(), N(ds, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [O.value]
          }, null, 8, ["details"])) : J.value ? (n(), N(Fx, {
            key: 2,
            "source-environment": ie.value.sourceEnvironment,
            workflows: ie.value.workflows,
            models: ie.value.models,
            nodes: ie.value.nodes,
            "git-branch": ie.value.gitBranch,
            "git-commit": ie.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          J.value ? (n(), N(d3, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": le[1] || (le[1] = (Qe) => E.value.name = Qe),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Qe) => E.value.modelStrategy = Qe),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Qe) => E.value.torchBackend = Qe),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Qe) => E.value.switchAfterImport = Qe),
            "name-error": B.value,
            onValidateName: ve
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          E.value.modelStrategy === "skip" && ((Fe = J.value) != null && Fe.models_needing_download) ? (n(), N(ds, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${J.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", E3, [
            k(Ce, {
              variant: "secondary",
              size: "md",
              onClick: Y
            }, {
              default: g(() => [...le[13] || (le[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ce, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: z
            }, {
              default: g(() => [...le[14] || (le[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (n(), i("div", T3, [
          t("p", M3, [
            le[15] || (le[15] = $(" Importing environment ", -1)),
            t("strong", null, m(E.value.name), 1),
            le[16] || (le[16] = $("... ", -1))
          ]),
          k(Qn, {
            progress: Z.value.progress,
            message: Z.value.message,
            "current-phase": Z.value.phase,
            variant: Z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: X
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Z.value.error ? h("", !0) : (n(), i("p", P3, " This may take several minutes. Please wait... ")),
          Z.value.error ? (n(), i("div", R3, [
            t("p", N3, m(Z.value.error), 1)
          ])) : h("", !0)
        ])) : _.value ? (n(), i("div", L3, [
          t("div", {
            class: Ae(["complete-icon", x.value ? "success" : "error"])
          }, m(x.value ? "✓" : "✕"), 3),
          t("div", D3, [
            t("div", O3, m(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", U3, m(C.value), 1)
          ]),
          t("div", A3, [
            k(Ce, {
              variant: "primary",
              size: "md",
              onClick: ue
            }, {
              default: g(() => [...le[17] || (le[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), vc = /* @__PURE__ */ Ie(z3, [["__scopeId", "data-v-72cbc04e"]]), V3 = /* @__PURE__ */ Se({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(q, null, [
      k(Pt, null, ss({
        content: g(() => [
          k(vc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Rt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      k(Qt, {
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
}), F3 = /* @__PURE__ */ Ie(V3, [["__scopeId", "data-v-41b1f298"]]), pc = "ComfyGit.Cloud.Url", gc = "ComfyGit.Cloud.DashboardUrl", ll = "ComfyGit.Cloud.Session", il = "ComfyGit.Cloud.User", hc = "ComfyGit.Cloud.LinkedEnvironments";
function Ll(e) {
  try {
    const s = localStorage.getItem(e);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}
function yc(e, s = "") {
  try {
    return localStorage.getItem(e) || s;
  } catch {
    return s;
  }
}
const ja = b(yc(pc, "http://127.0.0.1:8012")), Ha = b(yc(gc, "")), Tn = b(Ll(ll)), Fo = b(Ll(il)), to = b(Ll(hc) || {});
function wc() {
  const e = L(() => {
    var d, v;
    return !!((d = Tn.value) != null && d.access_token) && !!((v = Fo.value) != null && v.id);
  }), s = L(() => {
    var d;
    return ((d = Fo.value) == null ? void 0 : d.email) || "Not signed in";
  });
  function o(d) {
    ja.value = d.trim();
    try {
      localStorage.setItem(pc, ja.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save cloud URL:", v);
    }
  }
  function a(d) {
    Ha.value = d.trim();
    try {
      localStorage.setItem(gc, Ha.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save dashboard URL:", v);
    }
  }
  function l(d, v) {
    Tn.value = d, Fo.value = v;
    try {
      localStorage.setItem(ll, JSON.stringify(d)), localStorage.setItem(il, JSON.stringify(v));
    } catch (f) {
      console.error("[useCloudAuth] Failed to save auth state:", f);
    }
  }
  function r() {
    Tn.value = null, Fo.value = null;
    try {
      localStorage.removeItem(ll), localStorage.removeItem(il);
    } catch (d) {
      console.error("[useCloudAuth] Failed to clear auth state:", d);
    }
  }
  function c(d) {
    const v = String(d || "").trim();
    return v && to.value[v] || null;
  }
  function u(d, v) {
    const f = String(d || "").trim();
    if (f) {
      if (v)
        to.value = {
          ...to.value,
          [f]: { id: v.id, name: v.name }
        };
      else {
        const p = { ...to.value };
        delete p[f], to.value = p;
      }
      try {
        localStorage.setItem(hc, JSON.stringify(to.value));
      } catch (p) {
        console.error("[useCloudAuth] Failed to save linked cloud environments:", p);
      }
    }
  }
  return {
    cloudUrl: ja,
    dashboardUrl: Ha,
    session: Tn,
    user: Fo,
    isAuthenticated: e,
    authLabel: s,
    setCloudUrl: o,
    setDashboardUrl: a,
    setAuth: l,
    clearAuth: r,
    linkedEnvironments: to,
    getLinkedEnvironment: c,
    setLinkedEnvironment: u
  };
}
const B3 = { class: "account-section" }, W3 = {
  key: 0,
  class: "account-card"
}, G3 = { class: "account-card-header" }, j3 = { class: "account-meta" }, H3 = { class: "row-actions" }, q3 = {
  key: 1,
  class: "account-card"
}, K3 = { class: "auth-form-grid" }, J3 = { class: "field-group full-span" }, Y3 = { class: "field-group full-span" }, Q3 = { class: "row-actions" }, X3 = { class: "account-section" }, Z3 = { class: "stacked-form" }, e5 = { class: "row-actions" }, t5 = { class: "stacked-form" }, s5 = { class: "row-actions" }, o5 = /* @__PURE__ */ Se({
  __name: "AccountSection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, { getCloudAuthConfig: a, loginToCloud: l, signupToCloud: r, getCloudMe: c, logoutFromCloud: u } = ft(), { cloudUrl: d, dashboardUrl: v, session: f, user: p, isAuthenticated: w, authLabel: y, setCloudUrl: _, setDashboardUrl: x, setAuth: C, clearAuth: S } = wc(), O = b(!1), I = b(d.value), T = b(v.value), R = b(""), D = b(""), J = b(!1), E = b(!1), B = b(!1), Z = b(!1), X = b(null), ie = b(null), he = L(() => w.value ? y.value : "Not signed in");
    function te() {
      const Ue = I.value.trim();
      return _(Ue), I.value = d.value, d.value;
    }
    async function Y() {
      var Ue;
      if (!(!((Ue = f.value) != null && Ue.access_token) || !d.value))
        try {
          const se = await c(d.value, f.value.access_token);
          f.value && C(f.value, se.user);
        } catch (se) {
          S(), ie.value = {
            type: "error",
            message: se instanceof Error ? se.message : "Stored cloud session is no longer valid."
          };
        }
    }
    async function ue() {
      const Ue = te();
      J.value = !0, X.value = null;
      try {
        const se = await a(Ue);
        X.value = {
          type: "success",
          message: `Connected. Supabase auth is configured for ${se.url}.`
        };
      } catch (se) {
        X.value = {
          type: "error",
          message: se instanceof Error ? se.message : "Failed to connect to cloud."
        };
      } finally {
        J.value = !1;
      }
    }
    function Ne() {
      const Ue = te();
      X.value = {
        type: "info",
        message: `Cloud URL saved: ${Ue}`
      };
    }
    function ne() {
      const Ue = T.value.trim();
      x(Ue), T.value = v.value, X.value = {
        type: "info",
        message: `Dashboard URL saved: ${v.value || "cleared"}`
      };
    }
    async function ve() {
      const Ue = te();
      E.value = !0, ie.value = null;
      try {
        const se = await l(Ue, R.value.trim(), D.value);
        if (!se.session || !se.user)
          throw new Error("Cloud did not return a session.");
        C(se.session, se.user), ie.value = { type: "success", message: "Signed in successfully." }, o("toast", "Signed in to ComfyGit Cloud", "success"), D.value = "";
      } catch (se) {
        ie.value = {
          type: "error",
          message: se instanceof Error ? se.message : "Failed to sign in."
        };
      } finally {
        E.value = !1;
      }
    }
    async function z() {
      const Ue = te();
      B.value = !0, ie.value = null;
      try {
        const se = await r(Ue, R.value.trim(), D.value);
        if (!se.session || !se.user)
          throw new Error("Cloud did not return a session.");
        C(se.session, se.user), ie.value = { type: "success", message: "Account created and signed in." }, o("toast", "ComfyGit Cloud account created", "success"), D.value = "";
      } catch (se) {
        ie.value = {
          type: "error",
          message: se instanceof Error ? se.message : "Failed to create account."
        };
      } finally {
        B.value = !1;
      }
    }
    async function pe() {
      var Ue;
      Z.value = !0;
      try {
        await u(d.value, (Ue = f.value) == null ? void 0 : Ue.refresh_token);
      } catch {
      } finally {
        S(), Z.value = !1, ie.value = { type: "info", message: "Signed out." }, o("toast", "Signed out of ComfyGit Cloud", "info");
      }
    }
    function Pe() {
      v.value && window.open(v.value, "_blank", "noopener,noreferrer");
    }
    return it(() => {
      Y();
    }), (Ue, se) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "CLOUD ACCOUNT",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (W) => O.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: Ae(["auth-chip", { authenticated: et(w) }])
              }, m(he.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          k(bt, { title: "AUTHENTICATION" }, {
            default: g(() => [
              t("div", B3, [
                et(w) && et(p) ? (n(), i("div", W3, [
                  t("div", G3, [
                    se[8] || (se[8] = t("div", { class: "account-title" }, "SIGNED IN", -1)),
                    k(Ce, {
                      variant: "ghost",
                      size: "xs",
                      loading: Z.value,
                      onClick: pe
                    }, {
                      default: g(() => [...se[7] || (se[7] = [
                        $(" Sign Out ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  t("div", j3, [
                    t("div", null, [
                      se[9] || (se[9] = t("span", { class: "meta-label" }, "Email:", -1)),
                      $(" " + m(et(p).email || "—"), 1)
                    ]),
                    t("div", null, [
                      se[10] || (se[10] = t("span", { class: "meta-label" }, "User ID:", -1)),
                      $(" " + m(et(p).id), 1)
                    ])
                  ]),
                  t("div", H3, [
                    k(Ce, {
                      variant: "primary",
                      size: "xs",
                      onClick: se[1] || (se[1] = (W) => o("navigate", "publish"))
                    }, {
                      default: g(() => [...se[11] || (se[11] = [
                        $(" Go To Publish ", -1)
                      ])]),
                      _: 1
                    }),
                    k(Ce, {
                      variant: "ghost",
                      size: "xs",
                      onClick: Pe
                    }, {
                      default: g(() => [...se[12] || (se[12] = [
                        $(" Open Dashboard ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])) : (n(), i("div", q3, [
                  se[17] || (se[17] = t("div", { class: "account-title" }, "SIGN IN OR CREATE ACCOUNT", -1)),
                  t("div", K3, [
                    t("div", J3, [
                      se[13] || (se[13] = t("label", { class: "field-label" }, "Email", -1)),
                      k($s, {
                        modelValue: R.value,
                        "onUpdate:modelValue": se[2] || (se[2] = (W) => R.value = W),
                        type: "email",
                        placeholder: "you@example.com",
                        onKeydown: ts(dt(ve, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ]),
                    t("div", Y3, [
                      se[14] || (se[14] = t("label", { class: "field-label" }, "Password", -1)),
                      k($s, {
                        modelValue: D.value,
                        "onUpdate:modelValue": se[3] || (se[3] = (W) => D.value = W),
                        type: "password",
                        placeholder: "Enter password",
                        onKeydown: ts(dt(ve, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ])
                  ]),
                  t("div", Q3, [
                    k(Ce, {
                      variant: "primary",
                      size: "xs",
                      loading: E.value,
                      onClick: ve
                    }, {
                      default: g(() => [...se[15] || (se[15] = [
                        $(" Sign In ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      loading: B.value,
                      onClick: z
                    }, {
                      default: g(() => [...se[16] || (se[16] = [
                        $(" Create Account ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  ie.value ? (n(), i("div", {
                    key: 0,
                    class: Ae(["status-text", ie.value.type])
                  }, m(ie.value.message), 3)) : h("", !0)
                ]))
              ])
            ]),
            _: 1
          }),
          k(bt, {
            title: "ADVANCED",
            collapsible: "",
            "initially-expanded": !1
          }, {
            default: g(() => [
              t("div", X3, [
                k(Hs, {
                  label: "Cloud API URL",
                  description: "Override the ComfyGit Cloud API base URL for local development or non-default deployments",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", Z3, [
                      k($s, {
                        modelValue: I.value,
                        "onUpdate:modelValue": se[4] || (se[4] = (W) => I.value = W),
                        placeholder: "http://127.0.0.1:8012"
                      }, null, 8, ["modelValue"]),
                      t("div", e5, [
                        k(Ce, {
                          variant: "secondary",
                          size: "xs",
                          onClick: Ne
                        }, {
                          default: g(() => [...se[18] || (se[18] = [
                            $(" Save URL ", -1)
                          ])]),
                          _: 1
                        }),
                        k(Ce, {
                          variant: "ghost",
                          size: "xs",
                          loading: J.value,
                          onClick: ue
                        }, {
                          default: g(() => [...se[19] || (se[19] = [
                            $(" Test Connection ", -1)
                          ])]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      X.value ? (n(), i("div", {
                        key: 0,
                        class: Ae(["status-text", X.value.type])
                      }, m(X.value.message), 3)) : h("", !0)
                    ])
                  ]),
                  _: 1
                }),
                k(Hs, {
                  label: "Dashboard URL",
                  description: "Override the cloud dashboard URL used by the Open Dashboard actions",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", t5, [
                      k($s, {
                        modelValue: T.value,
                        "onUpdate:modelValue": se[5] || (se[5] = (W) => T.value = W),
                        placeholder: "http://100.99.14.94:5174"
                      }, null, 8, ["modelValue"]),
                      t("div", s5, [
                        k(Ce, {
                          variant: "secondary",
                          size: "xs",
                          onClick: ne
                        }, {
                          default: g(() => [...se[20] || (se[20] = [
                            $(" Save URL ", -1)
                          ])]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      k(Qt, {
        show: O.value,
        title: "Cloud Account",
        onClose: se[6] || (se[6] = (W) => O.value = !1)
      }, {
        content: g(() => [...se[21] || (se[21] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page manages the local panel's connection to ComfyGit Cloud."),
            t("p", null, "Use it to configure the cloud URL, sign in or create an account, and inspect the currently linked cloud identity."),
            t("p", null, [
              $("Publishing revisions happens from the separate "),
              t("strong", null, "Publish"),
              $(" page.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), n5 = /* @__PURE__ */ Ie(o5, [["__scopeId", "data-v-6a8d04d9"]]), a5 = {
  key: 0,
  class: "publish-card"
}, l5 = { class: "row-actions" }, i5 = {
  key: 1,
  class: "publish-grid"
}, r5 = {
  key: 0,
  class: "publish-card working-copy-card"
}, c5 = { class: "card-title" }, u5 = { class: "card-copy" }, d5 = { class: "meta-grid" }, m5 = { class: "link-section" }, f5 = { class: "field-group" }, v5 = { class: "row-actions" }, p5 = { class: "row-actions" }, g5 = {
  key: 0,
  class: "publish-error"
}, h5 = {
  key: 1,
  class: "publish-card"
}, y5 = { class: "publish-card revisions-card" }, w5 = {
  key: 0,
  class: "card-copy"
}, _5 = {
  key: 1,
  class: "publish-error"
}, k5 = {
  key: 2,
  class: "card-copy"
}, b5 = {
  key: 3,
  class: "card-copy"
}, $5 = {
  key: 4,
  class: "revision-list"
}, C5 = { class: "revision-main" }, x5 = { class: "revision-title" }, S5 = {
  key: 0,
  class: "matched-badge"
}, I5 = { class: "revision-copy" }, E5 = { class: "revision-meta" }, T5 = { key: 0 }, M5 = /* @__PURE__ */ Se({
  __name: "PublishSection",
  props: {
    environmentName: {},
    branchName: {}
  },
  emits: ["navigate", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getHistory: l,
      validateExport: r,
      validateEnvironmentExport: c,
      getCloudEnvironments: u,
      getCloudEnvironmentRevisions: d,
      publishCurrentEnvironmentToCloud: v
    } = ft(), { cloudUrl: f, session: p, user: w, isAuthenticated: y, getLinkedEnvironment: _, setLinkedEnvironment: x } = wc(), C = b(!1), S = b(!1), O = b(!1), I = b(!1), T = b(null), R = b(null), D = b(null), J = b([]), E = b(null), B = b(null), Z = b(null), X = b(!1), ie = b(!1), he = b([]), te = b(""), Y = L(() => {
      var A;
      return ((A = w.value) == null ? void 0 : A.email) || "Not signed in";
    }), ue = L(() => {
      var A;
      return ((A = p.value) == null ? void 0 : A.access_token) || "";
    }), Ne = L(() => B.value && J.value.find((A) => A.source_commit_sha === B.value) || null), ne = L(() => {
      var A;
      return y.value ? !B.value || !((A = E.value) != null && A.can_export) ? !0 : !Ne.value : !1;
    }), ve = L(() => B.value || "No commits yet"), z = L(() => {
      var A;
      return ((A = D.value) == null ? void 0 : A.name) || "Will be created on first publish";
    }), pe = L(
      () => he.value.map((A) => ({
        label: A.name,
        value: A.id
      }))
    ), Pe = L(() => E.value ? E.value.can_export ? E.value.warnings.models_without_sources.length > 0 ? "This local working copy can be published, but some model source URLs are still missing and may reduce deployability." : "This local working copy is ready to publish as a new immutable cloud revision." : "This local working copy is not publishable yet. Review the issues and commit or resolve them first." : "Checking local publish readiness..."), Ue = L(() => I.value ? "Publishing..." : O.value ? "Validating..." : "Publish Revision");
    async function se() {
      var A;
      if (!y.value) {
        E.value = null;
        return;
      }
      O.value = !0, R.value = null;
      try {
        E.value = (A = o.environmentName) != null && A.trim() ? await c(o.environmentName) : await r();
      } catch (j) {
        E.value = null, R.value = j instanceof Error ? j.message : "Failed to validate publish readiness.";
      } finally {
        O.value = !1;
      }
    }
    async function W() {
      var A, j;
      if (!y.value || !ue.value || !f.value) {
        D.value = null, J.value = [], T.value = null, await se();
        return;
      }
      S.value = !0, T.value = null, R.value = null;
      try {
        const [we, _e] = await Promise.all([
          l(1),
          u(f.value, ue.value)
        ]);
        B.value = ((A = we.commits[0]) == null ? void 0 : A.hash) || null, Z.value = ((j = we.commits[0]) == null ? void 0 : j.message) || null, he.value = _e.environments || [];
        const be = _(o.environmentName), Me = (be ? he.value.find((Le) => Le.id === be.id) : null) || he.value.find(
          (Le) => Le.name === (o.environmentName || "")
        ) || null;
        if (D.value = Me, te.value = (Me == null ? void 0 : Me.id) || "", Me) {
          const Le = await d(f.value, Me.id, ue.value);
          J.value = Le.revisions || [];
        } else
          J.value = [];
        await se();
      } catch (we) {
        D.value = null, he.value = [], te.value = "", J.value = [], T.value = we instanceof Error ? we.message : "Failed to load cloud revision state.";
      } finally {
        S.value = !1;
      }
    }
    async function ee() {
      var A;
      if (!y.value || !ue.value || !f.value) {
        a("navigate", "account");
        return;
      }
      I.value = !0, R.value = null;
      try {
        const j = await v(
          f.value,
          ue.value,
          Z.value || null,
          ((A = D.value) == null ? void 0 : A.id) || null
        );
        await W(), a(
          "toast",
          j.environment_revision ? `Published ${j.environment.name} r${j.environment_revision.revision_number}` : `Published ${j.environment.name}`,
          "success"
        );
      } catch (j) {
        R.value = j instanceof Error ? j.message : "Publish failed.";
      } finally {
        I.value = !1;
      }
    }
    function M() {
      const A = he.value.find((j) => j.id === te.value) || null;
      x(o.environmentName, A ? { id: A.id, name: A.name } : null), D.value = A, J.value = [], a(
        "toast",
        A ? `Linked ${o.environmentName || "environment"} to cloud environment ${A.name}` : `Cleared linked cloud environment for ${o.environmentName || "environment"}`,
        "success"
      ), W();
    }
    function P() {
      te.value = "", x(o.environmentName, null), D.value = null, J.value = [], a("toast", `Cleared linked cloud environment for ${o.environmentName || "environment"}`, "success"), W();
    }
    async function le() {
      if (!y.value) {
        a("navigate", "account");
        return;
      }
      if (await se(), !!E.value) {
        if (!E.value.can_export) {
          X.value = !0;
          return;
        }
        if (E.value.warnings.models_without_sources.length > 0) {
          ie.value = !0;
          return;
        }
        await ee();
      }
    }
    async function Fe() {
      if (X.value = !1, await W(), !!E.value) {
        if (!E.value.can_export) {
          X.value = !0;
          return;
        }
        if (E.value.warnings.models_without_sources.length > 0) {
          ie.value = !0;
          return;
        }
        await ee();
      }
    }
    async function Qe() {
      ie.value = !1, await ee();
    }
    function U(A) {
      const j = Date.parse(A);
      if (Number.isNaN(j)) return A;
      const we = Date.now() - j, _e = Math.floor(we / 6e4);
      if (_e < 1) return "just now";
      if (_e < 60) return `${_e}m ago`;
      const be = Math.floor(_e / 60);
      if (be < 24) return `${be}h ago`;
      const Me = Math.floor(be / 24);
      return Me < 30 ? `${Me}d ago` : new Date(j).toLocaleString();
    }
    return it(() => {
      W();
    }), kt(
      [y, f, () => {
        var A;
        return (A = p.value) == null ? void 0 : A.access_token;
      }, () => o.environmentName],
      () => {
        W();
      }
    ), (A, j) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "PUBLISH REVISION",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (we) => C.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: Ae(["auth-chip", { authenticated: et(y) }])
              }, m(Y.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          k(bt, { title: "PUBLISH" }, {
            default: g(() => [
              et(y) ? (n(), i("div", i5, [
                ne.value ? (n(), i("div", r5, [
                  j[16] || (j[16] = t("div", { class: "card-topline" }, "WORKING COPY", -1)),
                  t("div", c5, m(e.environmentName || "Current environment"), 1),
                  t("div", u5, m(Pe.value), 1),
                  t("div", d5, [
                    t("div", null, [
                      j[9] || (j[9] = t("span", { class: "publish-label" }, "Branch:", -1)),
                      $(" " + m(e.branchName || "Detached"), 1)
                    ]),
                    t("div", null, [
                      j[10] || (j[10] = t("span", { class: "publish-label" }, "Commit:", -1)),
                      $(" " + m(ve.value), 1)
                    ]),
                    t("div", null, [
                      j[11] || (j[11] = t("span", { class: "publish-label" }, "Cloud env:", -1)),
                      $(" " + m(z.value), 1)
                    ])
                  ]),
                  t("div", m5, [
                    t("div", f5, [
                      j[12] || (j[12] = t("label", { class: "field-label" }, "Linked Cloud Environment", -1)),
                      k(sn, {
                        modelValue: te.value,
                        "onUpdate:modelValue": j[2] || (j[2] = (we) => te.value = we),
                        options: pe.value,
                        placeholder: "Create new cloud environment on first publish",
                        "full-width": "",
                        disabled: S.value || I.value
                      }, null, 8, ["modelValue", "options", "disabled"])
                    ]),
                    t("div", v5, [
                      k(Ce, {
                        variant: "secondary",
                        size: "xs",
                        disabled: S.value || I.value,
                        onClick: M
                      }, {
                        default: g(() => [...j[13] || (j[13] = [
                          $(" Save Link ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"]),
                      k(Ce, {
                        variant: "ghost",
                        size: "xs",
                        disabled: !te.value || S.value || I.value,
                        onClick: P
                      }, {
                        default: g(() => [...j[14] || (j[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ]),
                  t("div", p5, [
                    k(Ce, {
                      variant: "primary",
                      size: "xs",
                      loading: O.value || I.value,
                      disabled: O.value || I.value,
                      onClick: le
                    }, {
                      default: g(() => [
                        $(m(Ue.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    k(Ce, {
                      variant: "secondary",
                      size: "xs",
                      disabled: O.value || I.value,
                      onClick: W
                    }, {
                      default: g(() => [...j[15] || (j[15] = [
                        $(" Refresh ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  R.value ? (n(), i("div", g5, m(R.value), 1)) : h("", !0)
                ])) : (n(), i("div", h5, [...j[17] || (j[17] = [
                  t("div", { class: "card-topline" }, "WORKING COPY", -1),
                  t("div", { class: "card-title" }, "Already published", -1),
                  t("div", { class: "card-copy" }, " Current local state matches a known published revision. Make another local change or commit before publishing again. ", -1)
                ])])),
                t("div", y5, [
                  j[22] || (j[22] = t("div", { class: "card-topline" }, "PUBLISHED REVISIONS", -1)),
                  S.value ? (n(), i("div", w5, "Loading cloud revisions...")) : T.value ? (n(), i("div", _5, m(T.value), 1)) : D.value ? J.value.length ? (n(), i("div", $5, [
                    (n(!0), i(q, null, ke(J.value, (we) => {
                      var _e, be;
                      return n(), i("div", {
                        key: we.id,
                        class: Ae(["revision-row", { matched: we.id === ((_e = Ne.value) == null ? void 0 : _e.id) }])
                      }, [
                        t("div", C5, [
                          t("div", x5, [
                            t("span", null, "r" + m(we.revision_number), 1),
                            we.id === ((be = Ne.value) == null ? void 0 : be.id) ? (n(), i("span", S5, "Matches local")) : h("", !0)
                          ]),
                          t("div", I5, m(we.source_message || "No revision message."), 1),
                          t("div", E5, [
                            t("span", null, m(we.workflow_count) + " workflows", 1),
                            t("span", null, m(we.node_count) + " nodes", 1),
                            t("span", null, m(we.model_count) + " models", 1),
                            t("span", null, "Created " + m(U(we.created_at)), 1),
                            we.source_commit_sha ? (n(), i("span", T5, "Commit " + m(we.source_commit_sha), 1)) : h("", !0)
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])) : (n(), i("div", b5, [
                    j[20] || (j[20] = $(" Cloud environment ", -1)),
                    t("strong", null, m(D.value.name), 1),
                    j[21] || (j[21] = $(" exists, but it has no immutable revisions yet. ", -1))
                  ])) : (n(), i("div", k5, [
                    j[18] || (j[18] = $(" No linked cloud environment is selected for ", -1)),
                    t("strong", null, m(e.environmentName || "this environment"), 1),
                    j[19] || (j[19] = $(". Publishing will create one unless you link this local environment to an existing cloud environment above. ", -1))
                  ]))
                ])
              ])) : (n(), i("div", a5, [
                j[7] || (j[7] = t("div", { class: "blocked-title" }, "SIGN IN REQUIRED", -1)),
                j[8] || (j[8] = t("div", { class: "blocked-copy" }, " Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account. ", -1)),
                t("div", l5, [
                  k(Ce, {
                    variant: "primary",
                    size: "xs",
                    onClick: j[1] || (j[1] = (we) => a("navigate", "account"))
                  }, {
                    default: g(() => [...j[6] || (j[6] = [
                      $(" Sign In ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      k(Qt, {
        show: C.value,
        title: "Publish",
        onClose: j[3] || (j[3] = (we) => C.value = !1)
      }, {
        content: g(() => [...j[23] || (j[23] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page publishes the current local environment state as an immutable cloud revision."),
            t("p", null, "It reuses export-style validation before submission so uncommitted changes and missing model source data are surfaced before publish."),
            t("p", null, "The cloud dashboard remains responsible for deployments, targets, and runtime operations.")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      X.value && E.value ? (n(), N(dc, {
        key: 0,
        issues: E.value.blocking_issues,
        mode: "publish",
        onClose: j[4] || (j[4] = (we) => X.value = !1),
        onCommitted: Fe
      }, null, 8, ["issues"])) : h("", !0),
      ie.value && E.value ? (n(), N(mc, {
        key: 1,
        models: E.value.warnings.models_without_sources,
        mode: "publish",
        onConfirm: Qe,
        onCancel: j[5] || (j[5] = (we) => ie.value = !1),
        onRevalidate: se
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), P5 = /* @__PURE__ */ Ie(M5, [["__scopeId", "data-v-d16eeb92"]]), R5 = { class: "base-tabs" }, N5 = ["disabled", "onClick"], L5 = {
  key: 0,
  class: "base-tabs__badge"
}, D5 = /* @__PURE__ */ Se({
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
    return (r, c) => (n(), i("div", R5, [
      (n(!0), i(q, null, ke(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: Ae([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        $(m(u.label) + " ", 1),
        u.badge ? (n(), i("span", L5, m(u.badge), 1)) : h("", !0)
      ], 10, N5))), 128))
    ]));
  }
}), Dl = /* @__PURE__ */ Ie(D5, [["__scopeId", "data-v-ad5e6cad"]]), O5 = { class: "commit-list" }, U5 = /* @__PURE__ */ Se({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", O5, [
      ot(s.$slots, "default", {}, void 0)
    ]));
  }
}), _c = /* @__PURE__ */ Ie(U5, [["__scopeId", "data-v-8c5ee761"]]), A5 = { class: "commit-message" }, z5 = { class: "commit-date" }, V5 = /* @__PURE__ */ Se({
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
      class: Ae(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      k(fc, { hash: e.hash }, null, 8, ["hash"]),
      t("span", A5, m(e.message), 1),
      t("span", z5, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = dt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), kc = /* @__PURE__ */ Ie(V5, [["__scopeId", "data-v-dd7c621b"]]), F5 = /* @__PURE__ */ Se({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = L(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), N(Pt, null, ss({
      content: g(() => [
        e.commits.length === 0 ? (n(), N(cs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), N(_c, { key: 1 }, {
          default: g(() => [
            (n(!0), i(q, null, ke(e.commits, (r) => (n(), N(kc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: g(() => [
                k(Ce, {
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
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: g(() => [
          k(Rt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), B5 = /* @__PURE__ */ Ie(F5, [["__scopeId", "data-v-fa4bf3a1"]]), W5 = { class: "branch-create-form" }, G5 = { class: "form-actions" }, j5 = /* @__PURE__ */ Se({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = L(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", W5, [
      k($s, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", G5, [
        k(Ce, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...d[1] || (d[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(Ce, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), H5 = /* @__PURE__ */ Ie(j5, [["__scopeId", "data-v-7c500394"]]), q5 = { class: "branch-list-item__indicator" }, K5 = { class: "branch-list-item__name" }, J5 = {
  key: 0,
  class: "branch-list-item__actions"
}, Y5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, Q5 = /* @__PURE__ */ Se({
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
      class: Ae(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", q5, m(e.isCurrent ? "●" : "○"), 1),
      t("span", K5, m(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", J5, [
        ot(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Y5, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), X5 = /* @__PURE__ */ Ie(Q5, [["__scopeId", "data-v-c6581a24"]]), Z5 = { class: "header-info" }, eS = { class: "branch-name" }, tS = {
  key: 0,
  class: "current-badge"
}, sS = { class: "branch-meta" }, oS = { key: 0 }, nS = {
  key: 0,
  class: "meta-note"
}, aS = {
  key: 0,
  class: "loading"
}, lS = {
  key: 1,
  class: "empty-state"
}, iS = /* @__PURE__ */ Se({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ft(), a = b([]), l = b(!1), r = b(!0);
    return it(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), N(xt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: g(() => [
        t("div", Z5, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", eS, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", tS, "CURRENT")) : h("", !0)
        ]),
        k(Oe, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
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
        t("div", sS, [
          r.value ? (n(), i("span", oS, "Loading...")) : (n(), i(q, { key: 1 }, [
            t("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", nS, "(showing first " + m(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", aS, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", lS, " No commits found on this branch ")) : (n(), N(_c, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(q, null, ke(a.value, (d) => (n(), N(kc, {
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
      footer: g(() => [
        e.isCurrent ? h("", !0) : (n(), N(Ce, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: g(() => [...u[6] || (u[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (n(), N(Oe, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
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
}), rS = /* @__PURE__ */ Ie(iS, [["__scopeId", "data-v-2e5437cc"]]), cS = {
  key: 2,
  class: "branch-list"
}, uS = /* @__PURE__ */ Se({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1), l = b(null);
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
    return (f, p) => (n(), N(Pt, null, ss({
      content: g(() => [
        a.value ? (n(), N(H5, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (n(), N(cs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", cS, [
          (n(!0), i(q, null, ke(e.branches, (w) => (n(), N(X5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => u(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (n(), N(Ce, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: dt((y) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), N(rS, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : h("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: g(() => [
          k(Rt, { title: "BRANCHES" }, {
            actions: g(() => [
              a.value ? h("", !0) : (n(), N(Ce, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
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
        key: "0"
      }
    ]), 1024));
  }
}), dS = /* @__PURE__ */ Ie(uS, [["__scopeId", "data-v-a3de96cc"]]);
function bc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const mS = { class: "remote-url-display" }, fS = ["title"], vS = ["title"], pS = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gS = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hS = /* @__PURE__ */ Se({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = b(!1), a = L(() => {
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
    return (r, c) => (n(), i("div", mS, [
      t("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, fS),
      t("button", {
        class: Ae(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", gS, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", pS, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, vS)
    ]));
  }
}), yS = /* @__PURE__ */ Ie(hS, [["__scopeId", "data-v-7768a58d"]]), wS = { class: "remote-title" }, _S = {
  key: 0,
  class: "default-badge"
}, kS = {
  key: 1,
  class: "sync-badge"
}, bS = {
  key: 0,
  class: "ahead"
}, $S = {
  key: 1,
  class: "behind"
}, CS = {
  key: 1,
  class: "synced"
}, xS = ["href"], SS = {
  key: 1,
  class: "remote-url-text"
}, IS = /* @__PURE__ */ Se({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = L(() => s.fetchingRemote === s.remote.name), a = L(() => s.remote.is_default), l = L(() => s.syncStatus && s.syncStatus.behind > 0), r = L(() => s.syncStatus && s.syncStatus.ahead > 0), c = L(() => s.remote.push_url !== s.remote.fetch_url), u = L(() => {
      const v = s.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = L(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), N(Vt, {
      status: a.value ? "synced" : void 0
    }, ss({
      icon: g(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", wS, [
          t("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", _S, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", kS, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(q, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", bS, "↑" + m(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", $S, "↓" + m(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", CS, "✓ synced"))
          ])) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (n(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = dt(() => {
          }, ["stop"]))
        }, m(d.value), 9, xS)) : (n(), i("span", SS, m(d.value), 1))
      ]),
      actions: g(() => [
        k(Ce, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...f[6] || (f[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(Ce, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            $(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Ce, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Ce, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), N(Ce, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...f[8] || (f[8] = [
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), N(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              k(yS, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ES = /* @__PURE__ */ Ie(IS, [["__scopeId", "data-v-8310f3a8"]]), TS = ["for"], MS = {
  key: 0,
  class: "base-form-field-required"
}, PS = { class: "base-form-field-input" }, RS = {
  key: 1,
  class: "base-form-field-error"
}, NS = {
  key: 2,
  class: "base-form-field-hint"
}, LS = /* @__PURE__ */ Se({
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
    const s = e, o = L(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Ae(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(m(e.label) + " ", 1),
        e.required ? (n(), i("span", MS, "*")) : h("", !0)
      ], 8, TS)) : h("", !0),
      t("div", PS, [
        ot(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", RS, m(e.error), 1)) : e.hint ? (n(), i("span", NS, m(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Ie(LS, [["__scopeId", "data-v-9a1cf296"]]), DS = { class: "remote-form" }, OS = { class: "form-header" }, US = { class: "form-body" }, AS = {
  key: 0,
  class: "form-error"
}, zS = { class: "form-actions" }, VS = /* @__PURE__ */ Se({
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
    }), r = b(!1), c = b(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = L(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (v, f) => (n(), i("div", DS, [
      t("div", OS, [
        k(as, null, {
          default: g(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", US, [
        k(Dt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(Dt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(Dt, { label: "Push URL (optional)" }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", AS, m(c.value), 1)) : h("", !0)
      ]),
      t("div", zS, [
        k(Ce, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            $(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(Ce, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: g(() => [...f[4] || (f[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), FS = /* @__PURE__ */ Ie(VS, [["__scopeId", "data-v-56021b18"]]), BS = { class: "conflict-summary-box" }, WS = { class: "summary-header" }, GS = { class: "summary-text" }, jS = { key: 0 }, HS = {
  key: 1,
  class: "all-resolved"
}, qS = { class: "summary-progress" }, KS = { class: "progress-bar" }, JS = { class: "progress-text" }, YS = /* @__PURE__ */ Se({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = L(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", BS, [
      t("div", WS, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", GS, [
          t("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", jS, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", HS, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      t("div", qS, [
        t("div", KS, [
          t("div", {
            class: "progress-fill",
            style: Wt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", JS, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), QS = /* @__PURE__ */ Ie(YS, [["__scopeId", "data-v-4e9e6cc9"]]), XS = { class: "modal-header" }, ZS = { class: "modal-title" }, e8 = { class: "modal-body" }, t8 = {
  key: 0,
  class: "error-box"
}, s8 = {
  key: 0,
  class: "error-hint"
}, o8 = {
  key: 1,
  class: "loading-state"
}, n8 = { class: "commit-summary" }, a8 = {
  key: 0,
  class: "commits-section"
}, l8 = { class: "commit-list" }, i8 = { class: "commit-hash" }, r8 = { class: "commit-message" }, c8 = { class: "commit-date" }, u8 = {
  key: 1,
  class: "changes-section"
}, d8 = {
  key: 0,
  class: "change-group",
  open: ""
}, m8 = { class: "change-count" }, f8 = { class: "change-list" }, v8 = {
  key: 0,
  class: "conflict-badge"
}, p8 = {
  key: 1,
  class: "change-group"
}, g8 = { class: "change-count" }, h8 = { class: "change-list" }, y8 = {
  key: 2,
  class: "change-group"
}, w8 = { class: "change-count" }, _8 = { class: "change-list" }, k8 = {
  key: 3,
  class: "strategy-section"
}, b8 = { class: "radio-group" }, $8 = { class: "radio-option" }, C8 = { class: "radio-option" }, x8 = { class: "radio-option" }, S8 = {
  key: 4,
  class: "up-to-date"
}, I8 = { class: "modal-actions" }, Ei = "comfygit.pullModelStrategy", E8 = /* @__PURE__ */ Se({
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
    const o = e, a = s, l = b(localStorage.getItem(Ei) || "skip");
    kt(l, (C) => {
      localStorage.setItem(Ei, C);
    });
    const r = L(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = L(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), u = L(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = L(() => {
      var C;
      return c.value > 0 || u.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = L(() => o.preview && bc(o.preview) ? o.preview : null), f = L(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = L(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = L(
      () => f.value > 0 && p.value === f.value
    ), y = L(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(C) {
      if (!v.value) return !1;
      const S = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((O) => O.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var O, I;
      return n(), N(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (T) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = dt(() => {
            }, ["stop"]))
          }, [
            t("div", XS, [
              t("h3", ZS, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (T) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", e8, [
              e.error ? (n(), i("div", t8, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", s8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (n(), i("div", o8, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (O = e.preview) != null && O.has_uncommitted_changes ? (n(), i(q, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(q, { key: 3 }, [
                t("div", n8, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", a8, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", l8, [
                    (n(!0), i(q, null, ke(e.preview.commits, (T) => (n(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      t("span", i8, m(T.short_hash || T.hash.slice(0, 7)), 1),
                      t("span", r8, m(T.message), 1),
                      t("span", c8, m(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (n(), i("div", u8, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", d8, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", m8, m(c.value) + " changes", 1)
                    ]),
                    t("div", f8, [
                      (n(!0), i(q, null, ke(e.preview.changes.workflows.added, (T) => (n(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + m(T), 1))), 128)),
                      (n(!0), i(q, null, ke(e.preview.changes.workflows.modified, (T) => (n(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(T) + " ", 1),
                        _(T) ? (n(), i("span", v8, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(q, null, ke(e.preview.changes.workflows.deleted, (T) => (n(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + m(T), 1))), 128))
                    ])
                  ])) : h("", !0),
                  u.value > 0 ? (n(), i("details", p8, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", g8, m(u.value) + " to install", 1)
                    ]),
                    t("div", h8, [
                      (n(!0), i(q, null, ke(e.preview.changes.nodes.to_install, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + m(T), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", y8, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", w8, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", _8, [
                      (n(!0), i(q, null, ke(e.preview.changes.models.referenced, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item"
                      }, m(T), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (n(), N(QS, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", k8, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", b8, [
                    t("label", $8, [
                      Tt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [Un, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", C8, [
                      Tt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [Un, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", x8, [
                      Tt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (T) => l.value = T),
                        value: "skip"
                      }, null, 512), [
                        [Un, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", S8, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            t("div", I8, [
              k(Ce, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (T) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(q, { key: 0 }, [
                k(Ce, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (T) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(Ce, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (T) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), N(Ce, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (T) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(q, { key: 2 }, [
                v.value && !w.value ? (n(), N(Ce, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (T) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), N(Ce, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !y.value,
                  onClick: S[9] || (S[9] = (T) => x(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
                    $(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), T8 = /* @__PURE__ */ Ie(E8, [["__scopeId", "data-v-1d633bba"]]), M8 = { class: "modal-header" }, P8 = { class: "modal-title" }, R8 = { class: "modal-body" }, N8 = {
  key: 0,
  class: "error-box"
}, L8 = {
  key: 1,
  class: "loading-state"
}, D8 = {
  key: 2,
  class: "warning-box"
}, O8 = {
  key: 0,
  class: "commits-section"
}, U8 = { class: "commit-list" }, A8 = { class: "commit-hash" }, z8 = { class: "commit-message" }, V8 = { class: "commit-date" }, F8 = { class: "force-option" }, B8 = { class: "checkbox-option" }, W8 = { class: "commit-summary" }, G8 = { key: 0 }, j8 = { key: 1 }, H8 = {
  key: 0,
  class: "info-box"
}, q8 = {
  key: 1,
  class: "commits-section"
}, K8 = { class: "commit-list" }, J8 = { class: "commit-hash" }, Y8 = { class: "commit-message" }, Q8 = { class: "commit-date" }, X8 = {
  key: 2,
  class: "up-to-date"
}, Z8 = { class: "modal-actions" }, e4 = /* @__PURE__ */ Se({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean },
    error: {}
  },
  emits: ["close", "push", "pull-first"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, d, v;
      return n(), N(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (f) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = dt(() => {
            }, ["stop"]))
          }, [
            t("div", M8, [
              t("h3", P8, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (f) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", R8, [
              e.error ? (n(), i("div", N8, [
                c[9] || (c[9] = t("span", { class: "error-icon" }, "!", -1)),
                t("div", null, [
                  c[8] || (c[8] = t("strong", null, "Push failed", -1)),
                  t("p", null, m(e.error), 1)
                ])
              ])) : h("", !0),
              e.loading ? (n(), i("div", L8, [...c[10] || (c[10] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", D8, [...c[11] || (c[11] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (n(), i(q, { key: 3 }, [
                c[15] || (c[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", O8, [
                  c[12] || (c[12] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", U8, [
                    (n(!0), i(q, null, ke(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", A8, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", z8, m(f.message), 1),
                      t("span", V8, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                t("div", F8, [
                  t("label", B8, [
                    Tt(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (f) => a.value = f)
                    }, null, 512), [
                      [Jn, a.value]
                    ]),
                    c[13] || (c[13] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[14] || (c[14] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(q, { key: 4 }, [
                t("div", W8, [
                  c[16] || (c[16] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", G8, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", j8, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", H8, [...c[17] || (c[17] = [
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
                ])])) : h("", !0),
                e.preview.commits_ahead > 0 ? (n(), i("div", q8, [
                  c[18] || (c[18] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", K8, [
                    (n(!0), i(q, null, ke(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", J8, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", Y8, m(f.message), 1),
                      t("span", Q8, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", X8, [
                  c[19] || (c[19] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            t("div", Z8, [
              k(Ce, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (f) => r.$emit("close"))
              }, {
                default: g(() => [...c[20] || (c[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (n(), i(q, { key: 0 }, [
                k(Ce, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (f) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[21] || (c[21] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(Ce, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (f) => l(!0))
                }, {
                  default: g(() => [...c[22] || (c[22] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), N(Ce, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (f) => l(!1))
              }, {
                default: g(() => [...c[23] || (c[23] = [
                  $(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), t4 = /* @__PURE__ */ Ie(e4, [["__scopeId", "data-v-621a386e"]]), s4 = { class: "resolution-choice-group" }, o4 = ["disabled"], n4 = ["disabled"], a4 = /* @__PURE__ */ Se({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", s4, [
      t("button", {
        class: Ae(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, o4),
      t("button", {
        class: Ae(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, n4)
    ]));
  }
}), l4 = /* @__PURE__ */ Ie(a4, [["__scopeId", "data-v-985715ed"]]), i4 = { class: "conflict-header" }, r4 = { class: "conflict-info" }, c4 = { class: "workflow-name" }, u4 = { class: "conflict-description" }, d4 = {
  key: 0,
  class: "resolved-badge"
}, m4 = { class: "resolved-text" }, f4 = { class: "conflict-hashes" }, v4 = { class: "hash-item" }, p4 = { class: "hash-item" }, g4 = { class: "conflict-actions" }, h4 = /* @__PURE__ */ Se({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && a("resolve", d);
    });
    const r = L(() => l.value !== null), c = L(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = L(() => {
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
        class: Ae(["conflict-item", { resolved: r.value }])
      }, [
        t("div", i4, [
          v[2] || (v[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", r4, [
            t("code", c4, m(e.conflict.name) + ".json", 1),
            t("div", u4, m(c.value), 1)
          ]),
          r.value ? (n(), i("div", d4, [
            v[1] || (v[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", m4, m(u.value), 1)
          ])) : h("", !0)
        ]),
        t("div", f4, [
          t("span", v4, [
            v[3] || (v[3] = $("Your: ", -1)),
            t("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", p4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            t("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", g4, [
          k(l4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), y4 = /* @__PURE__ */ Ie(h4, [["__scopeId", "data-v-506d3bbf"]]), w4 = { class: "resolution-content" }, _4 = {
  key: 0,
  class: "error-box"
}, k4 = { class: "resolution-header" }, b4 = { class: "header-stats" }, $4 = { class: "stat" }, C4 = { class: "stat-value" }, x4 = { class: "stat resolved" }, S4 = { class: "stat-value" }, I4 = {
  key: 0,
  class: "stat pending"
}, E4 = { class: "stat-value" }, T4 = { class: "conflicts-list" }, M4 = {
  key: 1,
  class: "all-resolved-message"
}, P4 = /* @__PURE__ */ Se({
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
    const o = e, a = s, l = L(() => o.resolutions.size), r = L(() => o.workflowConflicts.length - l.value), c = L(() => l.value === o.workflowConflicts.length), u = L(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const y = o.resolutions.get(w);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function v(w, y) {
      a("resolve", w, y);
    }
    function f() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, y) => (n(), N(xt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: g(() => [
        t("div", w4, [
          e.error ? (n(), i("div", _4, [
            y[1] || (y[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              y[0] || (y[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, m(e.error), 1)
            ])
          ])) : h("", !0),
          t("div", k4, [
            t("div", b4, [
              t("div", $4, [
                t("span", C4, m(e.workflowConflicts.length), 1),
                y[2] || (y[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", x4, [
                t("span", S4, m(l.value), 1),
                y[3] || (y[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", I4, [
                t("span", E4, m(r.value), 1),
                y[4] || (y[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", T4, [
            (n(!0), i(q, null, ke(e.workflowConflicts, (_) => (n(), N(y4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => v(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", M4, [
            y[6] || (y[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: f
        }, {
          default: g(() => [...y[7] || (y[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Oe, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            $(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), R4 = /* @__PURE__ */ Ie(P4, [["__scopeId", "data-v-c58d150d"]]), N4 = { class: "node-conflict-item" }, L4 = { class: "node-header" }, D4 = { class: "node-name" }, O4 = { class: "node-id" }, U4 = { class: "version-comparison" }, A4 = { class: "version yours" }, z4 = { class: "version theirs" }, V4 = { class: "chosen-version" }, F4 = { class: "chosen" }, B4 = { class: "chosen-reason" }, W4 = { class: "affected-workflows" }, G4 = { class: "wf-source" }, j4 = { class: "wf-version" }, H4 = /* @__PURE__ */ Se({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", N4, [
      t("div", L4, [
        t("code", D4, m(e.conflict.node_name), 1),
        t("span", O4, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      t("div", U4, [
        t("div", A4, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", z4, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      t("div", V4, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", F4, m(e.conflict.chosen_version), 1),
        t("span", B4, m(e.conflict.chosen_reason), 1)
      ]),
      t("details", W4, [
        t("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(q, null, ke(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, m(a.name), 1),
            t("span", G4, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", j4, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), q4 = /* @__PURE__ */ Ie(H4, [["__scopeId", "data-v-8b626725"]]), K4 = { class: "validation-content" }, J4 = {
  key: 0,
  class: "compatible-message"
}, Y4 = { class: "conflicts-list" }, Q4 = {
  key: 2,
  class: "warnings-section"
}, X4 = /* @__PURE__ */ Se({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = L(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), N(xt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: g(() => [
        t("div", K4, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", J4, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(q, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Y4, [
              (n(!0), i(q, null, ke(e.validation.node_conflicts, (u) => (n(), N(q4, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", Q4, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(q, null, ke(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Oe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Oe, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: g(() => [
            $(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Z4 = /* @__PURE__ */ Ie(X4, [["__scopeId", "data-v-fefd26ed"]]), eI = {
  key: 0,
  class: "embedded-toolbar"
}, tI = { class: "embedded-toolbar-search" }, sI = { key: 0 }, oI = /* @__PURE__ */ Se({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
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
      validateMerge: y
    } = ft(), _ = b([]), x = b(null), C = b({}), S = b(!1), O = b(null), I = b(""), T = b(!1), R = b(null), D = b(!1), J = b("add"), E = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), B = L(() => {
      if (!I.value.trim()) return _.value;
      const ze = I.value.toLowerCase();
      return _.value.filter(
        (De) => De.name.toLowerCase().includes(ze) || De.fetch_url.toLowerCase().includes(ze) || De.push_url.toLowerCase().includes(ze)
      );
    });
    async function Z() {
      S.value = !0, O.value = null;
      try {
        const ze = await a();
        _.value = ze.remotes, x.value = ze.current_branch_tracking || null, await Promise.all(
          ze.remotes.map(async (De) => {
            const H = await d(De.name);
            H && (C.value[De.name] = H);
          })
        );
      } catch (ze) {
        O.value = ze instanceof Error ? ze.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function X() {
      J.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function ie(ze) {
      const De = _.value.find((H) => H.name === ze);
      De && (J.value = "edit", E.value = {
        name: De.name,
        fetchUrl: De.fetch_url,
        pushUrl: De.push_url
      }, D.value = !0);
    }
    async function he(ze) {
      try {
        J.value === "add" ? await l(ze.name, ze.fetchUrl) : await c(ze.name, ze.fetchUrl, ze.pushUrl || void 0), D.value = !1, await Z();
      } catch (De) {
        O.value = De instanceof Error ? De.message : "Operation failed";
      }
    }
    function te() {
      D.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Y(ze) {
      R.value = ze;
      try {
        await u(ze);
        const De = await d(ze);
        De && (C.value[ze] = De), o("toast", `✓ Fetched from ${ze}`, "success");
      } catch (De) {
        o("toast", De instanceof Error ? De.message : "Fetch failed", "error");
      } finally {
        R.value = null;
      }
    }
    async function ue(ze) {
      if (confirm(`Remove remote "${ze}"?`))
        try {
          await r(ze), await Z();
        } catch (De) {
          O.value = De instanceof Error ? De.message : "Failed to remove remote";
        }
    }
    function Ne() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ne = b("idle"), ve = L(() => ne.value === "pull_preview"), z = L(
      () => ne.value === "resolving" || ne.value === "validating"
    ), pe = L(
      () => ne.value === "validation_review" || ne.value === "executing"
    ), Pe = b(!1), Ue = b(null), se = b(!1), W = b(null), ee = b(null), M = b(!1), P = b(null), le = b(null), Fe = b(/* @__PURE__ */ new Map()), Qe = b(null), U = b(null), A = L(() => P.value && bc(P.value) ? P.value : null);
    async function j(ze) {
      ee.value = ze, ne.value = "pull_preview", M.value = !0, P.value = null, le.value = null;
      try {
        P.value = await v(ze);
      } catch (De) {
        le.value = De instanceof Error ? De.message : "Failed to load pull preview";
      } finally {
        M.value = !1;
      }
    }
    function we() {
      ne.value = "idle", P.value = null, le.value = null, ee.value = null;
    }
    async function _e(ze) {
      if (!ee.value) return;
      ne.value = "executing", le.value = null;
      const De = ee.value;
      try {
        const H = await f(De, ze);
        if (H.rolled_back) {
          le.value = `Pull failed and was rolled back: ${H.error || "Unknown error"}`, ne.value = "pull_preview";
          return;
        }
        ye(), ne.value = "idle", o("toast", `✓ Pulled from ${De}`, "success"), await Z();
      } catch (H) {
        le.value = H instanceof Error ? H.message : "Pull failed", ne.value = "pull_preview";
      }
    }
    function be() {
      A.value && (ne.value = "resolving", U.value = null);
    }
    function Me(ze, De) {
      Fe.value.set(ze, { name: ze, resolution: De });
    }
    function Le() {
      ne.value = "pull_preview";
    }
    async function Re() {
      ne.value = "validating", U.value = null;
      try {
        const ze = Array.from(Fe.value.values());
        Qe.value = await y(ee.value, ze), ne.value = "validation_review";
      } catch (ze) {
        U.value = ze instanceof Error ? ze.message : "Validation failed", ne.value = "resolving";
      }
    }
    async function Ee() {
      ne.value = "executing";
      const ze = ee.value;
      try {
        const De = Array.from(Fe.value.values()), H = await f(ze, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: De
        });
        if (H.rolled_back) {
          le.value = `Pull failed and was rolled back: ${H.error || "Unknown error"}`, ne.value = "pull_preview";
          return;
        }
        ye(), ne.value = "idle", o("toast", `✓ Pulled from ${ze}`, "success"), await Z();
      } catch (De) {
        le.value = De instanceof Error ? De.message : "Pull failed", ne.value = "validation_review";
      }
    }
    function je() {
      ne.value = "resolving";
    }
    function Ve() {
      ye(), ne.value = "idle";
    }
    function ye() {
      Fe.value.clear(), Qe.value = null, U.value = null, le.value = null, P.value = null, ee.value = null;
    }
    async function Q(ze) {
      ee.value = ze, Pe.value = !0, M.value = !0, Ue.value = null, W.value = null;
      try {
        Ue.value = await p(ze);
      } catch (De) {
        W.value = De instanceof Error ? De.message : "Failed to load push preview";
      } finally {
        M.value = !1;
      }
    }
    function We() {
      Pe.value = !1, Ue.value = null, W.value = null, ee.value = null;
    }
    async function xe(ze) {
      var H;
      if (!ee.value) return;
      se.value = !0;
      const De = ee.value;
      W.value = null;
      try {
        await w(De, ze), We(), o("toast", `✓ Pushed to ${De}`, "success"), await Z();
      } catch (me) {
        const re = me instanceof Error ? me.message : "Push failed";
        W.value = re, me instanceof ec && me.status === 409 && ((H = me.data) != null && H.needs_force) && Ue.value ? Ue.value = {
          ...Ue.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", re, "error");
      } finally {
        se.value = !1;
      }
    }
    function Ye() {
      const ze = ee.value;
      We(), ze && j(ze);
    }
    return it(Z), (ze, De) => (n(), i(q, null, [
      k(Pt, null, ss({
        content: g(() => [
          S.value ? (n(), N(xs, {
            key: 0,
            message: "Loading remotes..."
          })) : O.value ? (n(), N(Ss, {
            key: 1,
            message: O.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            e.embedded && !D.value ? (n(), i("div", eI, [
              t("div", tI, [
                k(uo, {
                  modelValue: I.value,
                  "onUpdate:modelValue": De[2] || (De[2] = (H) => I.value = H),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              k(Ce, {
                variant: "primary",
                size: "sm",
                onClick: X
              }, {
                default: g(() => [...De[5] || (De[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            D.value ? (n(), N(FS, {
              key: 1,
              mode: J.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: he,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            _.value.length && !D.value ? (n(), N(wn, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(_.value.length) + " remote" + m(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", sI, " • Tracking: " + m(x.value.remote) + "/" + m(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            B.value.length && !D.value ? (n(), N(bt, {
              key: 3,
              title: "REMOTES",
              count: B.value.length
            }, {
              default: g(() => [
                (n(!0), i(q, null, ke(B.value, (H) => (n(), N(ES, {
                  key: H.name,
                  remote: H,
                  "sync-status": C.value[H.name],
                  "fetching-remote": R.value,
                  onFetch: Y,
                  onEdit: ie,
                  onRemove: ue,
                  onPull: j,
                  onPush: Q
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !B.value.length && !D.value ? (n(), N(cs, {
              key: 4,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                k(Ce, {
                  variant: "primary",
                  onClick: X
                }, {
                  default: g(() => [...De[6] || (De[6] = [
                    $(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Rt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: De[0] || (De[0] = (H) => T.value = !0)
            }, {
              actions: g(() => [
                D.value ? h("", !0) : (n(), N(Ce, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: X
                }, {
                  default: g(() => [...De[4] || (De[4] = [
                    $(" + Add Remote ", -1)
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
          fn: g(() => [
            D.value ? h("", !0) : (n(), N(uo, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": De[1] || (De[1] = (H) => I.value = H),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      k(Qt, {
        show: T.value,
        title: "About Git Remotes",
        onClose: De[3] || (De[3] = (H) => T.value = !1)
      }, {
        content: g(() => [...De[7] || (De[7] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Ce, {
            variant: "link",
            onClick: Ne
          }, {
            default: g(() => [...De[8] || (De[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(T8, {
        show: ve.value,
        "remote-name": ee.value || "",
        preview: P.value,
        loading: M.value,
        pulling: ne.value === "executing",
        error: le.value,
        "conflict-resolutions": Fe.value,
        onClose: we,
        onPull: _e,
        onOpenConflictResolution: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(t4, {
        show: Pe.value,
        "remote-name": ee.value || "",
        preview: Ue.value,
        loading: M.value,
        pushing: se.value,
        error: W.value,
        onClose: We,
        onPush: xe,
        onPullFirst: Ye
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      z.value && A.value ? (n(), N(R4, {
        key: 0,
        "workflow-conflicts": A.value.workflow_conflicts,
        resolutions: Fe.value,
        "operation-type": "pull",
        validating: ne.value === "validating",
        error: U.value,
        onClose: Le,
        onResolve: Me,
        onApply: Re
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      pe.value && Qe.value ? (n(), N(Z4, {
        key: 1,
        validation: Qe.value,
        "operation-type": "pull",
        executing: ne.value === "executing",
        onProceed: Ee,
        onGoBack: je,
        onCancel: Ve
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), nI = /* @__PURE__ */ Ie(oI, [["__scopeId", "data-v-e03090a2"]]), aI = /* @__PURE__ */ Se({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = [
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = b(o.initialTab ?? "history");
    return kt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), N(Pt, null, {
      header: g(() => [
        k(Rt, { title: "VERSION CONTROL" })
      ]),
      search: g(() => [
        k(Dl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (n(), N(B5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), N(dS, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), N(nI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function $c(e) {
  var o;
  if (typeof navigator < "u" && ((o = navigator.clipboard) != null && o.writeText)) {
    await navigator.clipboard.writeText(e);
    return;
  }
  if (typeof document > "u")
    throw new Error("Clipboard unavailable");
  const s = document.createElement("textarea");
  s.value = e, s.setAttribute("readonly", ""), s.style.position = "fixed", s.style.top = "-1000px", s.style.left = "-1000px", s.style.opacity = "0", document.body.appendChild(s);
  try {
    if (s.focus(), s.select(), s.setSelectionRange(0, s.value.length), !document.execCommand("copy"))
      throw new Error("execCommand copy failed");
  } finally {
    s.remove();
  }
}
const lI = { class: "text-viewer-wrapper" }, iI = ["disabled", "title"], rI = { class: "text-content" }, cI = /* @__PURE__ */ Se({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle");
    async function l() {
      if (s.content)
        try {
          await $c(s.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (n(), i("div", lI, [
      t("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, iI),
        t("pre", rI, m(e.content), 1)
      ], 544)
    ]));
  }
}), uI = /* @__PURE__ */ Ie(cI, [["__scopeId", "data-v-85a537ba"]]), dI = {
  key: 1,
  class: "manifest-viewer-shell"
}, mI = { class: "manifest-path" }, fI = /* @__PURE__ */ Se({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: s } = ft(), o = b(!1), a = b(null), l = b(!1), r = b({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, a.value = null;
      try {
        r.value = await s();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return it(c), (u, d) => (n(), i(q, null, [
      k(Pt, null, ss({
        content: g(() => [
          o.value ? (n(), N(xs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), N(Ss, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), N(cs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", dI, [
              k(uI, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Rt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: g(() => [
                k(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: g(() => [
                    $(m(o.value ? "Loading..." : "Refresh"), 1)
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
      k(Qt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: g(() => [
          d[3] || (d[3] = t("p", null, [
            $(" This view shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          t("div", mI, [
            t("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          k(Ce, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: g(() => [...d[7] || (d[7] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), vI = /* @__PURE__ */ Ie(fI, [["__scopeId", "data-v-814a8fdd"]]), pI = { class: "log-viewer-wrapper" }, gI = ["disabled", "title"], hI = /* @__PURE__ */ Se({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle"), l = L(() => s.logs.map((v) => ({
      text: s.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Nt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    it(r), kt(() => s.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await $c(v), a.value = "copied", setTimeout(() => {
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
    return (v, f) => (n(), i("div", pI, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, gI),
        (n(!0), i(q, null, ke(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Ae(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Cc = /* @__PURE__ */ Ie(hI, [["__scopeId", "data-v-5aaf1b88"]]), yI = /* @__PURE__ */ Se({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ft(), r = b([]), c = b(!1), u = b(null), d = b(!1), v = b("production"), f = b(null), p = b(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const x = await o();
          v.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function y() {
      try {
        const x = await a();
        x.exists && (f.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return it(() => {
      w(), y();
    }), (x, C) => (n(), i(q, null, [
      k(Pt, null, ss({
        content: g(() => [
          c.value ? (n(), N(xs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), N(Ss, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            r.value.length === 0 ? (n(), N(cs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), N(Cc, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Rt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                k(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: g(() => [
                    $(m(c.value ? "Loading..." : "Refresh"), 1)
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
      k(Qt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, m(v.value), 1),
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
        actions: g(() => [
          k(Ce, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => d.value = !1)
          }, {
            default: g(() => [...C[6] || (C[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ti = /* @__PURE__ */ Se({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ft(), c = e, u = b(c.initialTab ?? "workspace"), d = b([]), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(null), _ = b(!1), x = L(() => u.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await a(void 0, 500);
      } catch (I) {
        f.value = I instanceof Error ? I.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [I, T] = await Promise.all([
          o(),
          l()
        ]);
        I.exists && (w.value = I.path), T.exists && (y.value = T.path);
      } catch {
      }
    }
    async function O() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          _.value = !1;
        }
      }
    }
    return kt(u, () => {
      C();
    }), kt(() => c.initialTab, (I) => {
      I && (u.value = I);
    }), it(() => {
      C(), S();
    }), (I, T) => (n(), i(q, null, [
      k(Pt, null, ss({
        content: g(() => [
          v.value ? (n(), N(xs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), N(Ss, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(q, { key: 2 }, [
            d.value.length === 0 ? (n(), N(cs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), N(Cc, {
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
          fn: g(() => [
            k(Rt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: T[0] || (T[0] = (R) => p.value = !0)
            }, {
              actions: g(() => [
                k(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: O,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: g(() => [
                    $(m(v.value ? "Loading..." : "Refresh"), 1)
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
          fn: g(() => [
            k(Dl, {
              modelValue: u.value,
              "onUpdate:modelValue": T[1] || (T[1] = (R) => u.value = R),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      k(Qt, {
        show: p.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (R) => p.value = !1)
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
          k(Ce, {
            variant: "primary",
            onClick: T[2] || (T[2] = (R) => p.value = !1)
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
}), wI = /* @__PURE__ */ Se({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const s = e, o = [
      { id: "manifest", label: "Manifest" },
      { id: "env", label: "Env Logs" },
      { id: "workspace", label: "Workspace Logs" },
      { id: "orchestrator", label: "Orchestrator Logs" }
    ], a = b(s.initialTab ?? "manifest"), l = b(!1);
    return kt(() => s.initialTab, (r) => {
      r && (a.value = r);
    }), (r, c) => (n(), i(q, null, [
      k(Pt, null, {
        header: g(() => [
          k(Rt, {
            title: "DIAGNOSTICS",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => l.value = !0)
          })
        ]),
        search: g(() => [
          k(Dl, {
            modelValue: a.value,
            "onUpdate:modelValue": c[1] || (c[1] = (u) => a.value = u),
            tabs: o
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          a.value === "manifest" ? (n(), N(vI, {
            key: 0,
            embedded: ""
          })) : a.value === "env" ? (n(), N(yI, {
            key: 1,
            embedded: ""
          })) : a.value === "workspace" ? (n(), N(Ti, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), N(Ti, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 1
      }),
      k(Qt, {
        show: l.value,
        title: "About Diagnostics",
        "max-width": "520px",
        onClose: c[3] || (c[3] = (u) => l.value = !1)
      }, {
        content: g(() => [...c[4] || (c[4] = [
          t("p", null, [
            t("strong", null, "Diagnostics"),
            $(" groups read-only inspection and log surfaces for the current environment and workspace. ")
          ], -1),
          t("p", null, " Use this area when you need to inspect what ComfyGit is tracking or debug environment and supervisor behavior without leaving the panel. ", -1),
          t("p", null, [
            t("strong", null, "Manifest"),
            t("br"),
            $(" Shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. This is useful for inspecting tracked workflow, model, node, and contract state. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Env Logs"),
            t("br"),
            $(" Shows logs for the currently active environment. Use these when debugging workflow execution, model resolution, node installation, or other environment-local issues. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Workspace Logs"),
            t("br"),
            $(" Shows workspace-wide events that affect more than one environment. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Orchestrator Logs"),
            t("br"),
            $(" Shows supervisor and handoff logs for environment creation, switching, restarts, and other process-management behavior. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Ce, {
            variant: "primary",
            size: "sm",
            onClick: c[2] || (c[2] = (u) => l.value = !1)
          }, {
            default: g(() => [...c[5] || (c[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _I = { class: "header-info" }, kI = { class: "commit-hash" }, bI = {
  key: 0,
  class: "commit-refs"
}, $I = { class: "commit-message" }, CI = { class: "commit-date" }, xI = {
  key: 0,
  class: "loading"
}, SI = {
  key: 1,
  class: "changes-section"
}, II = { class: "stats-row" }, EI = { class: "stat" }, TI = { class: "stat insertions" }, MI = { class: "stat deletions" }, PI = {
  key: 0,
  class: "change-group"
}, RI = {
  key: 1,
  class: "change-group"
}, NI = {
  key: 0,
  class: "version"
}, LI = {
  key: 2,
  class: "change-group"
}, DI = { class: "change-item" }, OI = /* @__PURE__ */ Se({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ft(), a = b(null), l = b(!0), r = L(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = L(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return it(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), N(xt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: g(() => {
        var v, f, p, w;
        return [
          t("div", _I, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", kI, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", bI, [
              (n(!0), i(q, null, ke(a.value.refs, (y) => (n(), i("span", {
                key: y,
                class: "ref-badge"
              }, m(y), 1))), 128))
            ])) : h("", !0)
          ]),
          k(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => u.$emit("close"))
          }, {
            default: g(() => [...d[5] || (d[5] = [
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
        var v, f;
        return [
          t("div", $I, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          t("div", CI, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", xI, "Loading details...")) : a.value ? (n(), i("div", SI, [
            t("div", II, [
              t("span", EI, m(a.value.stats.files_changed) + " files", 1),
              t("span", TI, "+" + m(a.value.stats.insertions), 1),
              t("span", MI, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", PI, [
              k(io, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(q, null, ke(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(q, null, ke(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(q, null, ke(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (n(), i("div", RI, [
              k(io, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(q, null, ke(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p.name), 1),
                p.version ? (n(), i("span", NI, "(" + m(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(q, null, ke(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", LI, [
              k(io, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", DI, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Oe, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            $(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), UI = /* @__PURE__ */ Ie(OI, [["__scopeId", "data-v-d256ff6d"]]), AI = { class: "popover-header" }, zI = { class: "popover-body" }, VI = {
  key: 0,
  class: "changes-summary"
}, FI = {
  key: 0,
  class: "change-item"
}, BI = {
  key: 1,
  class: "change-item"
}, WI = {
  key: 2,
  class: "change-item"
}, GI = {
  key: 3,
  class: "change-item"
}, jI = {
  key: 4,
  class: "change-item"
}, HI = {
  key: 5,
  class: "change-item"
}, qI = {
  key: 1,
  class: "no-changes"
}, KI = {
  key: 2,
  class: "loading"
}, JI = {
  key: 3,
  class: "issues-error"
}, YI = { class: "error-header" }, QI = { class: "error-title" }, XI = { class: "issues-list" }, ZI = { class: "workflow-state" }, e6 = { class: "message-section" }, t6 = { class: "popover-footer" }, s6 = {
  key: 1,
  class: "commit-popover"
}, o6 = { class: "popover-header" }, n6 = { class: "popover-body" }, a6 = {
  key: 0,
  class: "changes-summary"
}, l6 = {
  key: 0,
  class: "change-item"
}, i6 = {
  key: 1,
  class: "change-item"
}, r6 = {
  key: 2,
  class: "change-item"
}, c6 = {
  key: 3,
  class: "change-item"
}, u6 = {
  key: 4,
  class: "change-item"
}, d6 = {
  key: 5,
  class: "change-item"
}, m6 = {
  key: 1,
  class: "no-changes"
}, f6 = {
  key: 2,
  class: "loading"
}, v6 = {
  key: 3,
  class: "issues-error"
}, p6 = { class: "error-header" }, g6 = { class: "error-title" }, h6 = { class: "issues-list" }, y6 = { class: "workflow-state" }, w6 = { class: "message-section" }, _6 = { class: "popover-footer" }, k6 = /* @__PURE__ */ Se({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ft(), r = b(""), c = b(!1), u = b(!1), d = L(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = L(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), f = L(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = L(() => f.value.length > 0), w = L(() => p.value && !u.value);
    async function y() {
      var _, x, C, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const O = await l(r.value.trim(), u.value);
          if (O.status === "success") {
            const I = `Committed: ${((_ = O.summary) == null ? void 0 : _.new) || 0} new, ${((x = O.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = O.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: I });
          } else if (O.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (O.status === "blocked") {
            const I = ((S = O.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: O.message || "Commit failed" });
        } catch (O) {
          a("committed", { success: !1, message: O instanceof Error ? O.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (n(), N(Ut, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = dt(() => {
          }, ["stop"]))
        }, [
          t("div", AI, [
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
          t("div", zI, [
            e.status && d.value ? (n(), i("div", VI, [
              e.status.workflows.new.length ? (n(), i("div", FI, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (n(), i("div", BI, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", WI, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", GI, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", jI, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (n(), i("div", HI, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", qI, " No changes to commit ")) : (n(), i("div", KI, " Loading... ")),
            p.value ? (n(), i("div", JI, [
              t("div", YI, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", QI, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", XI, [
                (n(!0), i(q, null, ke(f.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, m(C.name), 1),
                  t("span", ZI, "(" + m(C.sync_state) + ")", 1),
                  $(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              k(Xn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => u.value = C),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            t("div", e6, [
              k(So, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", t6, [
            k(Oe, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Oe, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: y
            }, {
              default: g(() => [
                $(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", s6, [
      t("div", o6, [
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
      t("div", n6, [
        e.status && d.value ? (n(), i("div", a6, [
          e.status.workflows.new.length ? (n(), i("div", l6, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (n(), i("div", i6, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", r6, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", c6, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", u6, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (n(), i("div", d6, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", m6, " No changes to commit ")) : (n(), i("div", f6, " Loading... ")),
        p.value ? (n(), i("div", v6, [
          t("div", p6, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", g6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", h6, [
            (n(!0), i(q, null, ke(f.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, m(C.name), 1),
              t("span", y6, "(" + m(C.sync_state) + ")", 1),
              $(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          k(Xn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => u.value = C),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        t("div", w6, [
          k(So, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", _6, [
        k(Oe, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Oe, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: y
        }, {
          default: g(() => [
            $(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), xc = /* @__PURE__ */ Ie(k6, [["__scopeId", "data-v-5f897631"]]), b6 = { class: "modal-header" }, $6 = { class: "modal-body" }, C6 = { class: "switch-message" }, x6 = { class: "switch-details" }, S6 = { class: "modal-actions" }, I6 = /* @__PURE__ */ Se({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), N(Ut, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = dt(() => {
          }, ["stop"]))
        }, [
          t("div", b6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", $6, [
            t("p", C6, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", x6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", S6, [
            k(Ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ce, {
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
      ])) : h("", !0)
    ]));
  }
}), E6 = /* @__PURE__ */ Ie(I6, [["__scopeId", "data-v-e9c5253e"]]), T6 = {
  key: 0,
  class: "modal-overlay"
}, M6 = { class: "modal-content" }, P6 = { class: "modal-body" }, R6 = { class: "progress-info" }, N6 = { class: "progress-percentage" }, L6 = { class: "progress-state" }, D6 = { class: "switch-steps" }, O6 = { class: "step-icon" }, U6 = { class: "step-label" }, A6 = /* @__PURE__ */ Se({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = L(() => {
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
    }), a = L(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = L(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === s.state);
      return r.map((u, d) => {
        let v = "pending", f = "○";
        return d < c ? (v = "completed", f = "✓") : d === c && (v = "active", f = "⟳"), {
          ...u,
          status: v,
          icon: f
        };
      });
    });
    return (r, c) => (n(), N(Ut, { to: "body" }, [
      e.show ? (n(), i("div", T6, [
        t("div", M6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", P6, [
            k(uc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", R6, [
              t("div", N6, m(e.progress) + "%", 1),
              t("div", L6, m(o.value), 1)
            ]),
            t("div", D6, [
              (n(!0), i(q, null, ke(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Ae(["switch-step", u.status])
              }, [
                t("span", O6, m(u.icon), 1),
                t("span", U6, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), z6 = /* @__PURE__ */ Ie(A6, [["__scopeId", "data-v-768a5078"]]), V6 = { class: "modal-header" }, F6 = { class: "modal-body" }, B6 = {
  key: 0,
  class: "node-section"
}, W6 = { class: "node-list" }, G6 = {
  key: 1,
  class: "node-section"
}, j6 = { class: "node-list" }, H6 = { class: "modal-actions" }, q6 = /* @__PURE__ */ Se({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), N(Ut, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = dt(() => {
          }, ["stop"]))
        }, [
          t("div", V6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", F6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", B6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", W6, [
                (n(!0), i(q, null, ke(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", G6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", j6, [
                (n(!0), i(q, null, ke(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", H6, [
            k(Ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ce, {
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
      ])) : h("", !0)
    ]));
  }
}), K6 = /* @__PURE__ */ Ie(q6, [["__scopeId", "data-v-7cad7518"]]), J6 = [
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
], Mn = "v0.0.24", Y6 = "Akatz", Q6 = { class: "social-buttons" }, X6 = ["title", "aria-label", "onClick"], Z6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, eE = ["d"], tE = ["title", "aria-label", "onClick"], sE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, oE = ["d"], nE = /* @__PURE__ */ Se({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", Q6, [
      (n(!0), i(q, null, ke(et(J6), (l) => (n(), i(q, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          $(m(l.label) + " ", 1),
          (n(), i("svg", Z6, [
            t("path", {
              d: l.iconPath
            }, null, 8, eE)
          ]))
        ], 8, X6)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", sE, [
            t("path", {
              d: l.iconPath
            }, null, 8, oE)
          ]))
        ], 8, tE))
      ], 64))), 128))
    ]));
  }
}), Sc = /* @__PURE__ */ Ie(nE, [["__scopeId", "data-v-4f846342"]]), aE = { class: "footer-info" }, lE = ["title"], iE = {
  key: 0,
  class: "dev-badge"
}, rE = { class: "made-by" }, cE = /* @__PURE__ */ Se({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ft(), o = b(null), a = b(null), l = b(null), r = L(() => o.value === "development"), c = L(() => {
      var d;
      if (!r.value) return Mn;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Mn} (${u})` : `${Mn} (development)`;
    });
    return it(async () => {
      try {
        const u = await s();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", aE, [
      t("span", {
        class: "version",
        title: c.value
      }, [
        $(m(et(Mn)) + " ", 1),
        r.value ? (n(), i("span", iE, "dev")) : h("", !0)
      ], 8, lE),
      t("span", rE, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + m(et(Y6)), 1)
      ])
    ]));
  }
}), Ic = /* @__PURE__ */ Ie(cE, [["__scopeId", "data-v-4fa265b3"]]), uE = /* @__PURE__ */ Se({
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
    return (r, c) => (n(), N(xt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: g(() => [
        k(lc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          k(Oe, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: g(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Oe, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
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
}), dE = /* @__PURE__ */ Ie(uE, [["__scopeId", "data-v-fac00ae7"]]), mE = { class: "header-actions" }, fE = {
  key: 0,
  class: "wizard-step"
}, vE = { class: "form-field" }, pE = ["placeholder"], gE = {
  key: 0,
  class: "form-error"
}, hE = { class: "form-field form-field--checkbox" }, yE = { class: "form-checkbox" }, wE = {
  key: 0,
  class: "form-field"
}, _E = ["placeholder"], kE = {
  key: 0,
  class: "form-info"
}, bE = {
  key: 1,
  class: "form-suggestion"
}, $E = {
  key: 2,
  class: "form-error"
}, CE = {
  key: 3,
  class: "form-info"
}, xE = {
  key: 1,
  class: "wizard-step"
}, SE = {
  key: 0,
  class: "progress-check-loading"
}, IE = {
  key: 0,
  class: "cli-warning"
}, EE = { class: "cli-warning-header" }, TE = {
  key: 1,
  class: "env-landing"
}, ME = { class: "env-list" }, PE = ["value"], RE = { class: "env-name" }, NE = {
  key: 2,
  class: "env-create"
}, LE = { class: "form-field" }, DE = { class: "form-field" }, OE = ["value"], UE = { class: "form-field" }, AE = ["disabled"], zE = ["value"], VE = { class: "form-field" }, FE = ["value"], BE = { class: "form-field form-field--checkbox" }, WE = { class: "form-checkbox" }, GE = {
  key: 0,
  class: "form-error"
}, jE = {
  key: 1,
  class: "env-creating"
}, HE = { class: "creating-intro" }, qE = {
  key: 3,
  class: "env-import"
}, KE = { class: "wizard-footer" }, JE = { class: "wizard-footer-actions" }, go = 10, YE = 600 * 1e3, Mi = 1800 * 1e3, QE = /* @__PURE__ */ Se({
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
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ft(), p = b(o.initialStep || 1), w = b(null), y = b("landing"), _ = b(!1), x = b(!1), C = b(!1), S = b(!1), O = b(null), I = b(o.initialStep === 2), T = b(o.defaultPath), R = b(!!o.detectedModelsDir), D = b(o.detectedModelsDir || ""), J = b(null), E = b(null), B = b(null), Z = b(null), X = b("my-new-env"), ie = b(rc), he = b("latest"), te = b(cc), Y = b(!0), ue = b(null), Ne = b(null), ne = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), ve = b(!1), z = b(!1), pe = b(!1), Pe = b({ progress: 0, message: "" }), Ue = b({ progress: 0, message: "" }), se = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], W = b(0), ee = b(null), M = b(0), P = b(null), le = L(() => {
      var xe, Ye;
      const ye = (xe = T.value) == null ? void 0 : xe.trim(), Q = !J.value, We = !R.value || !E.value && ((Ye = D.value) == null ? void 0 : Ye.trim());
      return ye && Q && We;
    }), Fe = L(() => {
      var ye;
      return (ye = X.value) == null ? void 0 : ye.trim();
    }), Qe = L(() => !!(p.value === 2 || Ne.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), U = L(() => Ne.value || o.workspacePath || null);
    async function A() {
      var ye;
      if (J.value = null, !!((ye = T.value) != null && ye.trim()))
        try {
          const Q = await c({ path: T.value, type: "workspace" });
          Q.valid || (J.value = Q.error || "Invalid path");
        } catch (Q) {
          J.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function j() {
      var ye;
      if (E.value = null, B.value = null, Z.value = null, !!((ye = D.value) != null && ye.trim()))
        try {
          const Q = await c({ path: D.value, type: "models" });
          if (Q.valid)
            Z.value = Q.model_count ?? null;
          else if (E.value = Q.error || "Invalid path", Q.suggestion) {
            B.value = Q.suggestion, D.value = Q.suggestion, E.value = null;
            const We = await c({ path: Q.suggestion, type: "models" });
            We.valid && (Z.value = We.model_count ?? null);
          }
        } catch (Q) {
          E.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function we() {
      var ye, Q, We, xe, Ye;
      if (J.value = null, E.value = null, await A(), (ye = J.value) != null && ye.includes("already exists")) {
        J.value = null, Ne.value = ((Q = T.value) == null ? void 0 : Q.trim()) || o.defaultPath, p.value = 2, be();
        return;
      }
      if (!J.value && !(R.value && ((We = D.value) != null && We.trim()) && (await j(), E.value))) {
        z.value = !0;
        try {
          await l({
            workspace_path: ((xe = T.value) == null ? void 0 : xe.trim()) || o.defaultPath,
            models_directory: R.value && ((Ye = D.value) == null ? void 0 : Ye.trim()) || null
          }), W.value = 0, ee.value = Date.now();
          const ze = setInterval(async () => {
            var De;
            if (ee.value && Date.now() - ee.value > YE) {
              clearInterval(ze), z.value = !1, J.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const H = await r();
              if (W.value = 0, H.state === "idle" && z.value) {
                clearInterval(ze), z.value = !1, J.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: H.progress, message: H.message }, H.state === "complete" ? (clearInterval(ze), z.value = !1, Ne.value = ((De = T.value) == null ? void 0 : De.trim()) || o.defaultPath, p.value = 2, be()) : H.state === "error" && (clearInterval(ze), z.value = !1, J.value = H.error || "Workspace creation failed");
            } catch (H) {
              W.value++, console.warn(`Polling failure ${W.value}/${go}:`, H), W.value >= go && (clearInterval(ze), z.value = !1, J.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ze) {
          z.value = !1, J.value = ze instanceof Error ? ze.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      pe.value = !0, ue.value = null;
      try {
        const ye = {
          name: X.value.trim() || "my-new-env",
          python_version: ie.value,
          comfyui_version: he.value,
          torch_backend: te.value,
          switch_after: Y.value,
          workspace_path: Ne.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ye)).status === "started") {
          M.value = 0, P.value = Date.now();
          const We = setInterval(async () => {
            if (P.value && Date.now() - P.value > Mi) {
              clearInterval(We), pe.value = !1, ue.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await d();
              if (M.value = 0, xe.state === "idle" && pe.value) {
                clearInterval(We), pe.value = !1, ue.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(We), pe.value = !1;
                const Ye = xe.environment_name || ye.name;
                Y.value ? a("complete", Ye, Ne.value) : (y.value = "landing", a("environment-created-no-switch", Ye));
              } else xe.state === "error" && (clearInterval(We), pe.value = !1, ue.value = xe.error || "Environment creation failed");
            } catch (xe) {
              M.value++, console.warn(`Polling failure ${M.value}/${go}:`, xe), M.value >= go && (clearInterval(We), pe.value = !1, ue.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ye) {
        pe.value = !1, ue.value = ye instanceof Error ? ye.message : "Unknown error";
      }
    }
    async function be() {
      ve.value = !0;
      try {
        ne.value = await f();
      } catch (ye) {
        console.error("Failed to load ComfyUI releases:", ye);
      } finally {
        ve.value = !1;
      }
    }
    function Me() {
      w.value && a("switch-environment", w.value, Ne.value);
    }
    function Le() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Re(ye, Q) {
      x.value = !1, Q ? a("complete", ye, Ne.value) : (a("environment-created-no-switch", ye), y.value = "landing");
    }
    function Ee() {
    }
    it(async () => {
      if (o.detectedModelsDir && (D.value = o.detectedModelsDir), o.workspacePath && (Ne.value = o.workspacePath), p.value === 2) {
        be();
        const ye = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await je(), clearTimeout(ye), I.value = !1;
      }
    });
    async function je() {
      try {
        const ye = await d();
        if (console.log("[ComfyGit] Create progress check:", ye.state, ye), ye.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ye.environment_name), y.value = "create", pe.value = !0, X.value = ye.environment_name || "my-new-env", Ue.value = {
            progress: ye.progress ?? 0,
            message: ye.message,
            phase: ye.phase
          }, Ve();
          return;
        }
      } catch (ye) {
        console.log("[ComfyGit] Create progress check failed:", ye);
      }
      try {
        const ye = await v();
        console.log("[ComfyGit] Import progress check:", ye.state, ye), ye.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ye.environment_name), O.value = {
          message: ye.message || "Importing...",
          phase: ye.phase || "",
          progress: ye.progress ?? 0,
          environmentName: ye.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (ye) {
        console.log("[ComfyGit] Import progress check failed:", ye);
      }
    }
    async function Ve() {
      M.value = 0, P.value = Date.now();
      let ye = null;
      const Q = async () => {
        if (P.value && Date.now() - P.value > Mi)
          return ye && clearInterval(ye), pe.value = !1, ue.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const xe = await d();
          if (M.value = 0, xe.state === "idle" && pe.value)
            return ye && clearInterval(ye), pe.value = !1, ue.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: xe.progress ?? 0,
            message: xe.message,
            phase: xe.phase
          }, xe.state === "complete") {
            ye && clearInterval(ye), pe.value = !1;
            const Ye = xe.environment_name || X.value;
            return a("complete", Ye, Ne.value), !1;
          } else if (xe.state === "error")
            return ye && clearInterval(ye), pe.value = !1, ue.value = xe.error || "Environment creation failed", !1;
          return !0;
        } catch (xe) {
          return M.value++, console.warn(`Polling failure ${M.value}/${go}:`, xe), M.value >= go ? (ye && clearInterval(ye), pe.value = !1, ue.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ye = setInterval(async () => {
        !await Q() && ye && clearInterval(ye);
      }, 2e3));
    }
    return (ye, Q) => (n(), i(q, null, [
      k(xt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (We) => ye.$emit("close"))
      }, {
        header: g(() => [
          Q[20] || (Q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", mE, [
            k(Sc),
            Q[19] || (Q[19] = t("span", { class: "header-divider" }, null, -1)),
            Qe.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (We) => _.value = !0)
            }, [...Q[17] || (Q[17] = [
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
            ])])) : h("", !0),
            t("button", {
              class: "icon-btn",
              onClick: Q[1] || (Q[1] = (We) => ye.$emit("close")),
              title: "Close"
            }, [...Q[18] || (Q[18] = [
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
          var We;
          return [
            p.value === 1 ? (n(), i("div", fE, [
              Q[24] || (Q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", vE, [
                Q[21] || (Q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(t("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (xe) => T.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, pE), [
                  [Co, T.value]
                ]),
                J.value ? (n(), i("p", gE, m(J.value), 1)) : h("", !0)
              ]),
              t("div", hE, [
                t("label", yE, [
                  Tt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (xe) => R.value = xe)
                  }, null, 512), [
                    [Jn, R.value]
                  ]),
                  Q[22] || (Q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              R.value ? (n(), i("div", wE, [
                Q[23] || (Q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(t("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (xe) => D.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, _E), [
                  [Co, D.value]
                ]),
                e.detectedModelsDir && !D.value ? (n(), i("p", kE, " Detected: " + m(e.detectedModelsDir), 1)) : h("", !0),
                B.value ? (n(), i("p", bE, " Did you mean: " + m(B.value), 1)) : h("", !0),
                E.value ? (n(), i("p", $E, m(E.value), 1)) : h("", !0),
                Z.value !== null && !E.value ? (n(), i("p", CE, " Found " + m(Z.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              z.value ? (n(), N(Qn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (n(), i("div", xE, [
              I.value ? (n(), i("div", SE, [...Q[25] || (Q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(q, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", IE, [
                  t("div", EE, [
                    Q[27] || (Q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (xe) => C.value = !0),
                      title: "Dismiss"
                    }, [...Q[26] || (Q[26] = [
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
                  Q[29] || (Q[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Q[30] || (Q[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (n(), i("div", TE, [
                  Q[34] || (Q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (xe) => y.value = "create")
                  }, [...Q[31] || (Q[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Q[7] || (Q[7] = (xe) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (We = o.existingEnvironments) != null && We.length ? (n(), i(q, { key: 0 }, [
                    Q[33] || (Q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", ME, [
                      (n(!0), i(q, null, ke(o.existingEnvironments, (xe) => (n(), i("label", {
                        key: xe,
                        class: Ae(["env-option", { selected: w.value === xe }])
                      }, [
                        Tt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: xe,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (Ye) => w.value = Ye)
                        }, null, 8, PE), [
                          [Un, w.value]
                        ]),
                        t("span", RE, m(xe), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (n(), i("div", NE, [
                  pe.value ? (n(), i("div", jE, [
                    t("p", HE, [
                      Q[41] || (Q[41] = $(" Creating environment ", -1)),
                      t("strong", null, m(X.value), 1),
                      Q[42] || (Q[42] = $("... ", -1))
                    ]),
                    k(Qn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: se
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(q, { key: 0 }, [
                    Q[40] || (Q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", LE, [
                      Q[35] || (Q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(t("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (xe) => X.value = xe),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Co, X.value]
                      ])
                    ]),
                    t("div", DE, [
                      Q[36] || (Q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(t("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (xe) => ie.value = xe),
                        class: "form-select"
                      }, [
                        (n(!0), i(q, null, ke(et(ic), (xe) => (n(), i("option", {
                          key: xe,
                          value: xe
                        }, m(xe), 9, OE))), 128))
                      ], 512), [
                        [xo, ie.value]
                      ])
                    ]),
                    t("div", UE, [
                      Q[37] || (Q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(t("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (xe) => he.value = xe),
                        class: "form-select",
                        disabled: ve.value
                      }, [
                        (n(!0), i(q, null, ke(ne.value, (xe) => (n(), i("option", {
                          key: xe.tag_name,
                          value: xe.tag_name
                        }, m(xe.name), 9, zE))), 128))
                      ], 8, AE), [
                        [xo, he.value]
                      ])
                    ]),
                    t("div", VE, [
                      Q[38] || (Q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(t("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (xe) => te.value = xe),
                        class: "form-select"
                      }, [
                        (n(!0), i(q, null, ke(et(Nl), (xe) => (n(), i("option", {
                          key: xe,
                          value: xe
                        }, m(xe) + m(xe === "auto" ? " (detect GPU)" : ""), 9, FE))), 128))
                      ], 512), [
                        [xo, te.value]
                      ])
                    ]),
                    t("div", BE, [
                      t("label", WE, [
                        Tt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (xe) => Y.value = xe)
                        }, null, 512), [
                          [Jn, Y.value]
                        ]),
                        Q[39] || (Q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    ue.value ? (n(), i("div", GE, m(ue.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (n(), i("div", qE, [
                  k(vc, {
                    "workspace-path": Ne.value,
                    "resume-import": S.value,
                    "initial-progress": O.value ?? void 0,
                    onImportComplete: Re,
                    onImportStarted: Q[14] || (Q[14] = (xe) => x.value = !0),
                    onSourceCleared: Ee
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          t("div", KE, [
            k(Ic),
            t("div", JE, [
              p.value === 1 ? (n(), N(Oe, {
                key: 0,
                variant: "primary",
                disabled: !le.value || z.value,
                onClick: we
              }, {
                default: g(() => [
                  $(m(z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(q, { key: 1 }, [
                !pe.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Ne.value) ? (n(), N(Oe, {
                  key: 0,
                  variant: "secondary",
                  onClick: Le
                }, {
                  default: g(() => [...Q[44] || (Q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (n(), N(Oe, {
                  key: 1,
                  variant: "primary",
                  disabled: !Fe.value || pe.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    $(m(pe.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (n(), N(Oe, {
                  key: 2,
                  variant: "primary",
                  onClick: Me
                }, {
                  default: g(() => [
                    $(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), N(dE, {
        key: 0,
        "workspace-path": U.value,
        onClose: Q[16] || (Q[16] = (We) => _.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), XE = /* @__PURE__ */ Ie(QE, [["__scopeId", "data-v-9a9aadc0"]]), ZE = { class: "update-banner" }, eT = { class: "update-banner__left" }, tT = { class: "update-banner__title" }, sT = {
  key: 0,
  class: "update-banner__summary"
}, oT = { class: "update-banner__actions" }, nT = ["disabled"], aT = ["disabled"], lT = ["disabled"], iT = /* @__PURE__ */ Se({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", ZE, [
      t("div", eT, [
        t("div", tT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", sT, m(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      t("div", oT, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, nT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, aT)) : h("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, lT)
      ])
    ]));
  }
}), rT = /* @__PURE__ */ Ie(iT, [["__scopeId", "data-v-49562c5c"]]), Ec = "ComfyGit.UpdateNotice.DismissedVersion";
function cT() {
  try {
    return localStorage.getItem(Ec);
  } catch {
    return null;
  }
}
function uT(e) {
  try {
    localStorage.setItem(Ec, e);
  } catch {
  }
}
function dT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : cT() !== e.latest_version;
}
const mT = { class: "comfygit-panel" }, fT = { class: "panel-header" }, vT = { class: "header-left" }, pT = {
  key: 0,
  class: "header-info"
}, gT = { class: "header-actions" }, hT = { class: "env-switcher" }, yT = { class: "env-switcher-header" }, wT = { class: "env-control-buttons" }, _T = {
  key: 0,
  class: "header-info"
}, kT = { class: "branch-name" }, bT = { class: "panel-main" }, $T = { class: "sidebar" }, CT = { class: "sidebar-content" }, xT = { class: "sidebar-section" }, ST = { class: "sidebar-section" }, IT = { class: "sidebar-section" }, ET = { class: "sidebar-footer" }, TT = { class: "content-area" }, MT = {
  key: 0,
  class: "error-message"
}, PT = {
  key: 1,
  class: "loading"
}, RT = { class: "dialog-content env-selector-dialog" }, NT = { class: "dialog-header" }, LT = { class: "dialog-body" }, DT = { class: "env-list" }, OT = { class: "env-info" }, UT = { class: "env-name-row" }, AT = { class: "env-indicator" }, zT = { class: "env-name" }, VT = {
  key: 0,
  class: "env-branch"
}, FT = {
  key: 1,
  class: "current-label"
}, BT = { class: "env-stats" }, WT = ["onClick"], GT = { class: "toast-container" }, jT = { class: "toast-message" }, Pi = "ComfyGit.LastView", Ri = "ComfyGit.LastSection", HT = /* @__PURE__ */ Se({
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
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: y,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: O,
      updateManager: I
    } = ft(), T = Hv(), R = b(null), D = b([]), J = b([]), E = b([]), B = L(() => E.value.find((ce) => ce.is_current)), Z = b(null), X = b(!1), ie = b(!1), he = b("history"), te = b("manifest"), Y = b(null), ue = b(!1), Ne = b(1), ne = L(() => {
      var ce;
      return ((ce = Y.value) == null ? void 0 : ce.state) || "managed";
    }), ve = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, z = L(() => {
      var ce, oe;
      return ((oe = (ce = Y.value) == null ? void 0 : ce.runtime_context) == null ? void 0 : oe.capabilities) || ve;
    }), pe = b(!1), Pe = b(null), Ue = b(null), se = b(!1), W = b(null), ee = b(!1), M = b(!1), P = L(() => !ee.value && dT(W.value)), le = b(null), Fe = b(null), Qe = b(null), U = b(!1), A = b(!1), j = b(""), we = b(null), _e = b({ state: "idle", progress: 0, message: "" });
    let be = null, Me = null;
    const Le = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      account: { view: "account", section: "cloud" },
      publish: { view: "publish", section: "cloud" }
    }, Re = o.initialView ? Le[o.initialView] : null, Ee = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics",
      "account",
      "publish"
    ], je = ["this-env", "version-control", "workspace", "cloud", "diagnostics"];
    function Ve() {
      try {
        const ce = sessionStorage.getItem(Pi), oe = sessionStorage.getItem(Ri), Ge = ce === "branches" || ce === "history" || ce === "remotes" ? "version-control" : ce === "manifest" || ce === "debug-env" || ce === "debug-workspace" ? "diagnostics" : ce === "deploy" ? "publish" : ce, Xe = oe === "all-envs" ? "workspace" : oe === "sharing" ? "cloud" : oe;
        if (ce && oe && Ee.includes(Ge) && je.includes(Xe))
          return { view: Ge, section: Xe };
      } catch {
      }
      return null;
    }
    const ye = Ve(), Q = b((Re == null ? void 0 : Re.view) ?? (ye == null ? void 0 : ye.view) ?? "status"), We = b((Re == null ? void 0 : Re.section) ?? (ye == null ? void 0 : ye.section) ?? "this-env");
    function xe(ce, oe) {
      Q.value = ce, We.value = oe;
      try {
        sessionStorage.setItem(Pi, ce), sessionStorage.setItem(Ri, oe);
      } catch {
      }
    }
    function Ye(ce) {
      const Ge = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" },
        account: { view: "account", section: "cloud" },
        publish: { view: "publish", section: "cloud" }
      }[ce];
      Ge && xe(Ge.view, Ge.section);
    }
    function ze(ce) {
      he.value = ce, xe("version-control", "version-control");
    }
    function De(ce) {
      te.value = ce, xe("diagnostics", "diagnostics");
    }
    function H() {
      ze("branches");
    }
    function me() {
      a("close"), setTimeout(() => {
        var oe;
        const ce = document.querySelectorAll("button.comfyui-button");
        for (const Ge of ce)
          if (((oe = Ge.textContent) == null ? void 0 : oe.trim()) === "Manager") {
            Ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const re = b(null), Ke = b(!1), G = b(!1), F = b([]);
    let ae = 0;
    function ge(ce, oe = "info", Ge = 3e3) {
      const Xe = ++ae;
      return F.value.push({ id: Xe, message: ce, type: oe }), Ge > 0 && setTimeout(() => {
        F.value = F.value.filter((pt) => pt.id !== Xe);
      }, Ge), Xe;
    }
    function Te(ce) {
      F.value = F.value.filter((oe) => oe.id !== ce);
    }
    function Je(ce, oe) {
      ge(ce, oe);
    }
    async function He() {
      W.value = null, ee.value = !1;
      try {
        W.value = await O();
      } catch {
      }
    }
    function nt() {
      var oe;
      const ce = (oe = W.value) == null ? void 0 : oe.release_url;
      if (ce)
        try {
          window.open(ce, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function yt() {
      var oe;
      const ce = (oe = W.value) == null ? void 0 : oe.latest_version;
      ce && uT(ce), ee.value = !0;
    }
    async function St() {
      var oe, Ge;
      if (M.value) return;
      M.value = !0;
      const ce = ge("Updating comfygit-manager...", "info", 0);
      try {
        const Xe = await I();
        if (Te(ce), Xe.status !== "success") {
          if (ge(Xe.message || "Update failed", "error"), Xe.manual_instructions) {
            const pt = Xe.manual_instructions.split(`
`).map((Et) => Et.trim()).filter(Boolean);
            re.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: pt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                re.value = null;
              }
            };
          }
          return;
        }
        if (ge(Xe.message || "Update complete", "success"), yt(), Xe.restart_required) {
          At();
          try {
            await ((Ge = (oe = window.app) == null ? void 0 : oe.api) == null ? void 0 : Ge.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Xe) {
        Te(ce);
        const pt = Xe instanceof Error ? Xe.message : "Update failed";
        ge(pt, "error");
      } finally {
        M.value = !1;
      }
    }
    const de = L(() => {
      if (!R.value) return "neutral";
      const ce = R.value.workflows, oe = ce.new.length > 0 || ce.modified.length > 0 || ce.deleted.length > 0 || R.value.has_changes;
      return R.value.comparison.is_synced ? oe ? "warning" : "success" : "error";
    });
    L(() => R.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function V() {
      pe.value = !0, Pe.value = null;
      try {
        const [ce, oe, Ge, Xe] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        R.value = ce, D.value = oe.commits, J.value = Ge.branches, E.value = Xe, a("statusUpdate", ce), le.value && await le.value.loadWorkflows(!0);
      } catch (ce) {
        Pe.value = ce instanceof Error ? ce.message : "Failed to load status", R.value = null, D.value = [], J.value = [];
      } finally {
        pe.value = !1;
      }
    }
    function fe(ce) {
      Ue.value = ce;
    }
    async function qe(ce) {
      var Ge;
      Ue.value = null;
      const oe = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      re.value = {
        title: oe ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: oe ? "You have uncommitted changes that will be lost." : `Checkout commit ${ce.short_hash || ((Ge = ce.hash) == null ? void 0 : Ge.slice(0, 7))}?`,
        details: oe ? kn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: oe ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: oe,
        onConfirm: async () => {
          var Et;
          re.value = null, At();
          const Xe = ge(`Checking out ${ce.short_hash || ((Et = ce.hash) == null ? void 0 : Et.slice(0, 7))}...`, "info", 0), pt = await u(ce.hash, oe);
          Te(Xe), pt.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(pt.message || "Checkout failed", "error");
        }
      };
    }
    async function ct(ce) {
      const oe = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      re.value = {
        title: oe ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: oe ? "You have uncommitted changes." : `Switch to branch "${ce}"?`,
        details: oe ? kn() : void 0,
        warning: oe ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: oe ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          re.value = null, At();
          const Ge = ge(`Switching to ${ce}...`, "info", 0), Xe = await v(ce, oe);
          Te(Ge), Xe.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(Xe.message || "Branch switch failed", "error");
        }
      };
    }
    async function It(ce) {
      const oe = ge(`Creating branch ${ce}...`, "info", 0), Ge = await d(ce);
      Te(oe), Ge.status === "success" ? (ge(`Branch "${ce}" created`, "success"), await V()) : ge(Ge.message || "Failed to create branch", "error");
    }
    async function at(ce, oe = !1) {
      const Ge = async (Xe) => {
        var Et;
        const pt = ge(`Deleting branch ${ce}...`, "info", 0);
        try {
          const us = await f(ce, Xe);
          Te(pt), us.status === "success" ? (ge(`Branch "${ce}" deleted`, "success"), await V()) : (Et = us.message) != null && Et.includes("not fully merged") ? re.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              re.value = null, await Ge(!0);
            }
          } : ge(us.message || "Failed to delete branch", "error");
        } catch (us) {
          Te(pt);
          const Qs = us instanceof Error ? us.message : "Failed to delete branch";
          Qs.includes("not fully merged") ? re.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              re.value = null, await Ge(!0);
            }
          } : ge(Qs, "error");
        }
      };
      re.value = {
        title: "Delete Branch",
        message: `Delete branch "${ce}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          re.value = null, await Ge(oe);
        }
      };
    }
    async function Ct(ce) {
      Ue.value = null;
      const oe = prompt("Enter branch name:");
      if (oe) {
        const Ge = ge(`Creating branch ${oe}...`, "info", 0), Xe = await d(oe, ce.hash);
        Te(Ge), Xe.status === "success" ? (ge(`Branch "${oe}" created from ${ce.short_hash}`, "success"), await V()) : ge(Xe.message || "Failed to create branch", "error");
      }
    }
    function At() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Is() {
      if (!z.value.can_restart_current) {
        ge("Restart is not available in this runtime context.", "warning");
        return;
      }
      re.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ce;
          re.value = null, At(), ge("Restarting environment...", "info");
          try {
            (ce = window.app) != null && ce.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ma() {
      if (!z.value.can_stop_current) {
        ge("Stop is not available in this runtime context.", "warning");
        return;
      }
      re.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ce;
          re.value = null, ge("Stopping environment...", "info");
          try {
            (ce = window.app) != null && ce.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Vs(ce, oe) {
      if (!z.value.can_switch_environment) {
        ge("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      se.value = !1, j.value = ce, we.value = oe || null, U.value = !0;
    }
    async function fa() {
      U.value = !1, A.value = !0, At(), _e.value = {
        progress: 10,
        state: fo(10),
        message: vo(10)
      };
      try {
        await w(j.value, we.value || void 0), va(), pa();
      } catch (ce) {
        Es(), A.value = !1, ge(`Failed to initiate switch: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error"), _e.value = { state: "idle", progress: 0, message: "" }, we.value = null;
      }
    }
    function fo(ce) {
      return ce >= 100 ? "complete" : ce >= 80 ? "validating" : ce >= 60 ? "starting" : ce >= 30 ? "syncing" : "preparing";
    }
    function vo(ce) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[fo(ce)] || "";
    }
    function va() {
      if (Me) return;
      let ce = 10;
      const oe = 60, Ge = 5e3, Xe = 100, pt = (oe - ce) / (Ge / Xe);
      Me = window.setInterval(() => {
        if (ce += pt, ce >= oe && (ce = oe, Es()), _e.value.progress < oe) {
          const Et = Math.floor(ce);
          _e.value = {
            progress: Et,
            state: fo(Et),
            message: vo(Et)
          };
        }
      }, Xe);
    }
    function Es() {
      Me && (clearInterval(Me), Me = null);
    }
    function pa() {
      be || (be = window.setInterval(async () => {
        try {
          let ce = await T.getStatus();
          if ((!ce || ce.state === "idle") && (ce = await y()), !ce)
            return;
          const oe = ce.progress || 0;
          oe >= 60 && Es();
          const Ge = Math.max(oe, _e.value.progress), Xe = ce.state && ce.state !== "idle" && ce.state !== "unknown", pt = Xe ? ce.state : fo(Ge), Et = Xe && ce.message || vo(Ge);
          _e.value = {
            state: pt,
            progress: Ge,
            message: Et
          }, ce.state === "complete" ? (Es(), Do(), A.value = !1, ge(`✓ Switched to ${j.value}`, "success"), await V(), j.value = "") : ce.state === "rolled_back" ? (Es(), Do(), A.value = !1, ge("Switch failed, restored previous environment", "warning"), j.value = "") : ce.state === "critical_failure" && (Es(), Do(), A.value = !1, ge(`Critical error during switch: ${ce.message}`, "error"), j.value = "");
        } catch (ce) {
          console.error("Failed to poll switch progress:", ce);
        }
      }, 1e3));
    }
    function Do() {
      Es(), be && (clearInterval(be), be = null);
    }
    function ga() {
      var ce;
      U.value = !1, j.value = "", (ce = Y.value) != null && ce.state && Y.value.state !== "managed" && (Ne.value = Y.value.state === "no_workspace" ? 1 : 2, ue.value = !0);
    }
    async function ha(ce) {
      Ke.value = !1, await V(), ge(ce.message, ce.success ? "success" : "error");
    }
    async function ya() {
      G.value = !1;
      const ce = ge("Syncing environment...", "info", 0);
      try {
        const oe = await x("skip", !0);
        if (Te(ce), oe.status === "success") {
          const Ge = [];
          oe.nodes_installed.length && Ge.push(`${oe.nodes_installed.length} installed`), oe.nodes_removed.length && Ge.push(`${oe.nodes_removed.length} removed`);
          const Xe = Ge.length ? `: ${Ge.join(", ")}` : "";
          ge(`✓ Environment synced${Xe}`, "success"), await V();
        } else {
          const Ge = oe.errors.length ? oe.errors.join("; ") : oe.message;
          ge(`Sync failed: ${Ge}`, "error");
        }
      } catch (oe) {
        Te(ce), ge(`Sync error: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error");
      }
    }
    async function wa(ce) {
      var oe;
      try {
        const Ge = await C(ce);
        Ge.failed.length === 0 ? ge(`✓ Repaired ${Ge.success} workflow${Ge.success === 1 ? "" : "s"}`, "success") : ge(`Repaired ${Ge.success}, failed: ${Ge.failed.length}`, "warning"), await V();
      } catch (Ge) {
        ge(`Repair failed: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (oe = Qe.value) == null || oe.resetRepairingState();
      }
    }
    async function _n() {
      var oe, Ge;
      const ce = ge("Repairing environment...", "info", 0);
      try {
        const Xe = await x("skip", !0);
        if (Te(ce), Xe.status === "success") {
          const pt = [];
          Xe.nodes_installed.length && pt.push(`${Xe.nodes_installed.length} installed`), Xe.nodes_removed.length && pt.push(`${Xe.nodes_removed.length} removed`);
          const Et = pt.length ? `: ${pt.join(", ")}` : "";
          ge(`✓ Environment repaired${Et}`, "success"), (oe = Qe.value) == null || oe.closeDetailModal(), await V();
        } else {
          const pt = Xe.errors.length ? Xe.errors.join(", ") : Xe.message || "Unknown error";
          ge(`Repair failed: ${pt}`, "error");
        }
      } catch (Xe) {
        Te(ce), ge(`Repair error: ${Xe instanceof Error ? Xe.message : "Unknown error"}`, "error");
      } finally {
        (Ge = Qe.value) == null || Ge.resetRepairingEnvironmentState();
      }
    }
    async function _a(ce, oe) {
      ge(`Environment '${ce}' created`, "success"), await V(), Fe.value && await Fe.value.loadEnvironments(), oe && z.value.can_switch_environment && await Vs(ce);
    }
    async function ka(ce) {
      var oe;
      if (!z.value.can_delete_environment) {
        ge("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((oe = B.value) == null ? void 0 : oe.name) === ce) {
        ge("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      re.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ce}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          re.value = null;
          try {
            const Ge = await _(ce);
            Ge.status === "success" ? (ge(`Environment "${ce}" deleted`, "success"), await V(), Fe.value && await Fe.value.loadEnvironments()) : ge(Ge.message || "Failed to delete environment", "error");
          } catch (Ge) {
            ge(`Error deleting environment: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ba(ce, oe) {
      ue.value = !1;
      try {
        Y.value = await S();
      } catch {
      }
      z.value.can_switch_environment && await Vs(ce, oe);
    }
    function $a() {
      ue.value = !1, a("close");
    }
    async function Ca(ce, oe) {
      await Vs(ce, oe);
    }
    async function xa(ce) {
      X.value = !1, await V(), await Vs(ce);
    }
    function Sa() {
      Z.value = null, X.value = !0;
    }
    function Ia(ce) {
      Z.value = ce, ie.value = !0;
    }
    function Ea() {
      ie.value = !1, Z.value = null;
    }
    async function Ta(ce) {
      Y.value = await S(), console.log(`Environment '${ce}' created. Available for switching.`);
    }
    function Ma() {
      if (!z.value.can_create_environment) {
        ge("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      xe("environments", "workspace"), setTimeout(() => {
        var ce;
        (ce = Fe.value) == null || ce.openCreateModal();
      }, 100);
    }
    function kn() {
      if (!R.value) return [];
      const ce = [], oe = R.value.workflows;
      return oe.new.length && ce.push(`${oe.new.length} new workflow(s)`), oe.modified.length && ce.push(`${oe.modified.length} modified workflow(s)`), oe.deleted.length && ce.push(`${oe.deleted.length} deleted workflow(s)`), ce;
    }
    return it(async () => {
      try {
        if (Y.value = await S(), Y.value.state === "no_workspace" && z.value.can_initialize_workspace) {
          ue.value = !0, Ne.value = 1;
          return;
        }
        if (Y.value.state === "empty_workspace" && z.value.can_create_environment) {
          ue.value = !0, Ne.value = 2;
          return;
        }
        if (Y.value.state === "unmanaged" && z.value.can_switch_environment) {
          ue.value = !0, Ne.value = 2;
          return;
        }
      } catch (ce) {
        console.warn("Setup status check failed, proceeding normally:", ce);
      }
      await Promise.all([
        V(),
        He()
      ]);
    }), (ce, oe) => {
      var Ge, Xe, pt, Et, us, Qs, K, $e, Be, ut, Lt, jt, gs, os, Oo, Uo;
      return n(), i("div", mT, [
        t("div", fT, [
          t("div", vT, [
            oe[28] || (oe[28] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            R.value ? (n(), i("div", pT)) : h("", !0)
          ]),
          t("div", gT, [
            k(Sc),
            oe[31] || (oe[31] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ae(["icon-btn", { spinning: pe.value }]),
              onClick: V,
              title: "Refresh"
            }, [...oe[29] || (oe[29] = [
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
              onClick: oe[0] || (oe[0] = (st) => a("close")),
              title: "Close"
            }, [...oe[30] || (oe[30] = [
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
        P.value && W.value ? (n(), N(rT, {
          key: 0,
          info: W.value,
          updating: M.value,
          onUpdate: St,
          onDismiss: yt,
          onReleaseNotes: nt
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", hT, [
          t("div", yT, [
            oe[32] || (oe[32] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", wT, [
              z.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Is
              }, " Restart ")) : h("", !0),
              z.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ma
              }, " Stop ")) : h("", !0)
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: oe[1] || (oe[1] = (st) => xe("environments", "workspace"))
          }, [
            R.value ? (n(), i("div", _T, [
              t("span", null, m(((Ge = B.value) == null ? void 0 : Ge.name) || ((Xe = R.value) == null ? void 0 : Xe.environment) || "Loading..."), 1),
              t("span", kT, "(" + m(R.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            oe[33] || (oe[33] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", bT, [
          t("div", $T, [
            t("div", CT, [
              t("div", xT, [
                oe[34] || (oe[34] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "status" && We.value === "this-env" }]),
                  onClick: oe[2] || (oe[2] = (st) => xe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: oe[3] || (oe[3] = (st) => xe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: oe[4] || (oe[4] = (st) => xe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: oe[5] || (oe[5] = (st) => xe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "version-control" }]),
                  onClick: oe[6] || (oe[6] = (st) => ze("history"))
                }, " VERSION CONTROL ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "diagnostics" }]),
                  onClick: oe[7] || (oe[7] = (st) => De("manifest"))
                }, " DIAGNOSTICS ", 2)
              ]),
              oe[37] || (oe[37] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", ST, [
                oe[35] || (oe[35] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: oe[8] || (oe[8] = (st) => xe("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: oe[9] || (oe[9] = (st) => xe("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: oe[10] || (oe[10] = (st) => xe("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              oe[38] || (oe[38] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", IT, [
                oe[36] || (oe[36] = t("div", { class: "sidebar-section-title" }, "CLOUD", -1)),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "publish" }]),
                  onClick: oe[11] || (oe[11] = (st) => xe("publish", "cloud"))
                }, " PUBLISH ", 2),
                t("button", {
                  class: Ae(["sidebar-item", { active: Q.value === "account" }]),
                  onClick: oe[12] || (oe[12] = (st) => xe("account", "cloud"))
                }, " ACCOUNT ", 2)
              ])
            ]),
            t("div", ET, [
              k(Ic)
            ])
          ]),
          t("div", TT, [
            Pe.value ? (n(), i("div", MT, m(Pe.value), 1)) : !R.value && Q.value === "status" ? (n(), i("div", PT, " Loading status... ")) : (n(), i(q, { key: 2 }, [
              Q.value === "status" ? (n(), N(Wv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Qe,
                status: R.value,
                "setup-state": ne.value,
                onSwitchBranch: H,
                onCommitChanges: oe[13] || (oe[13] = (st) => Ke.value = !0),
                onSyncEnvironment: oe[14] || (oe[14] = (st) => G.value = !0),
                onViewWorkflows: oe[15] || (oe[15] = (st) => xe("workflows", "this-env")),
                onViewHistory: oe[16] || (oe[16] = (st) => ze("history")),
                onViewDebug: oe[17] || (oe[17] = (st) => De("env")),
                onViewNodes: oe[18] || (oe[18] = (st) => xe("nodes", "this-env")),
                onRepairMissingModels: wa,
                onRepairEnvironment: _n,
                onStartSetup: oe[19] || (oe[19] = (st) => ue.value = !0),
                onViewEnvironments: oe[20] || (oe[20] = (st) => xe("environments", "workspace")),
                onCreateEnvironment: Ma
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (n(), N(Gw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: le,
                onRefresh: V
              }, null, 512)) : Q.value === "models-env" ? (n(), N(ab, {
                key: 2,
                onNavigate: Ye
              })) : Q.value === "version-control" ? (n(), N(aI, {
                key: 3,
                commits: D.value,
                "current-ref": (pt = R.value) == null ? void 0 : pt.branch,
                branches: J.value,
                current: ((Et = R.value) == null ? void 0 : Et.branch) || null,
                "initial-tab": he.value,
                onSelect: fe,
                onCheckout: qe,
                onSwitch: ct,
                onCreate: It,
                onDelete: at,
                onToast: Je
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Q.value === "nodes" ? (n(), N(Xb, {
                key: 4,
                "version-mismatches": ((Qs = (us = R.value) == null ? void 0 : us.comparison) == null ? void 0 : Qs.version_mismatches) || [],
                onOpenNodeManager: me,
                onRepairEnvironment: _n,
                onToast: Je
              }, null, 8, ["version-mismatches"])) : Q.value === "diagnostics" ? (n(), N(wI, {
                key: 5,
                "initial-tab": te.value
              }, null, 8, ["initial-tab"])) : Q.value === "environments" ? (n(), N(Q$, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: Fe,
                "can-create": z.value.can_create_environment,
                "can-switch": z.value.can_switch_environment,
                "can-delete": z.value.can_delete_environment,
                onSwitch: Vs,
                onCreated: _a,
                onDelete: ka,
                onImport: Sa,
                onExport: Ia
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Q.value === "model-index" ? (n(), N(wb, {
                key: 7,
                onRefresh: V
              })) : Q.value === "settings" ? (n(), N(x2, { key: 8 })) : Q.value === "account" ? (n(), N(n5, {
                key: 9,
                onToast: Je,
                onNavigate: Ye
              })) : Q.value === "publish" ? (n(), N(P5, {
                key: 10,
                "environment-name": ((K = B.value) == null ? void 0 : K.name) || (($e = R.value) == null ? void 0 : $e.environment) || null,
                "branch-name": ((Be = R.value) == null ? void 0 : Be.branch) || null,
                onNavigate: Ye,
                onToast: Je
              }, null, 8, ["environment-name", "branch-name"])) : h("", !0)
            ], 64))
          ])
        ]),
        Ue.value ? (n(), N(UI, {
          key: 1,
          commit: Ue.value,
          onClose: oe[21] || (oe[21] = (st) => Ue.value = null),
          onCheckout: qe,
          onCreateBranch: Ct
        }, null, 8, ["commit"])) : h("", !0),
        re.value ? (n(), N(Rl, {
          key: 2,
          title: re.value.title,
          message: re.value.message,
          details: re.value.details,
          warning: re.value.warning,
          confirmLabel: re.value.confirmLabel,
          cancelLabel: re.value.cancelLabel,
          secondaryLabel: re.value.secondaryLabel,
          secondaryAction: re.value.secondaryAction,
          destructive: re.value.destructive,
          onConfirm: re.value.onConfirm,
          onCancel: oe[22] || (oe[22] = (st) => re.value = null),
          onSecondary: re.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        X.value ? (n(), N(xt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: oe[23] || (oe[23] = (st) => X.value = !1)
        }, {
          body: g(() => [
            k(F3, {
              embedded: "",
              onImportCompleteSwitch: xa
            })
          ]),
          _: 1
        })) : h("", !0),
        ie.value ? (n(), N(xt, {
          key: 4,
          title: Z.value ? `EXPORT ENVIRONMENT: ${Z.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: Ea
        }, {
          body: g(() => [
            k(HC, {
              embedded: "",
              "environment-name": Z.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        k(E6, {
          show: U.value,
          "from-environment": ((ut = B.value) == null ? void 0 : ut.name) || "unknown",
          "to-environment": j.value,
          onConfirm: fa,
          onClose: ga
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ke.value && R.value ? (n(), N(xc, {
          key: 5,
          status: R.value,
          "as-modal": !0,
          onClose: oe[24] || (oe[24] = (st) => Ke.value = !1),
          onCommitted: ha
        }, null, 8, ["status"])) : h("", !0),
        G.value && R.value ? (n(), N(K6, {
          key: 6,
          show: G.value,
          "mismatch-details": {
            missing_nodes: R.value.comparison.missing_nodes,
            extra_nodes: R.value.comparison.extra_nodes
          },
          onConfirm: ya,
          onClose: oe[25] || (oe[25] = (st) => G.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        k(z6, {
          show: A.value,
          state: _e.value.state,
          progress: _e.value.progress,
          message: _e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: oe[27] || (oe[27] = dt((st) => se.value = !1, ["self"]))
        }, [
          t("div", RT, [
            t("div", NT, [
              oe[40] || (oe[40] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: oe[26] || (oe[26] = (st) => se.value = !1)
              }, [...oe[39] || (oe[39] = [
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
            t("div", LT, [
              oe[41] || (oe[41] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", DT, [
                (n(!0), i(q, null, ke(E.value, (st) => (n(), i("div", {
                  key: st.name,
                  class: Ae(["env-item", { current: st.is_current }])
                }, [
                  t("div", OT, [
                    t("div", UT, [
                      t("span", AT, m(st.is_current ? "●" : "○"), 1),
                      t("span", zT, m(st.name), 1),
                      st.current_branch ? (n(), i("span", VT, "(" + m(st.current_branch) + ")", 1)) : h("", !0),
                      st.is_current ? (n(), i("span", FT, "CURRENT")) : h("", !0)
                    ]),
                    t("div", BT, m(st.workflow_count) + " workflows • " + m(st.node_count) + " nodes ", 1)
                  ]),
                  !st.is_current && z.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (eR) => Vs(st.name)
                  }, " SWITCH ", 8, WT)) : h("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        ue.value ? (n(), N(XE, {
          key: 8,
          "default-path": ((Lt = Y.value) == null ? void 0 : Lt.default_path) || "~/comfygit",
          "detected-models-dir": ((jt = Y.value) == null ? void 0 : jt.detected_models_dir) || null,
          "initial-step": Ne.value,
          "existing-environments": ((gs = Y.value) == null ? void 0 : gs.environments) || [],
          "cli-installed": ((os = Y.value) == null ? void 0 : os.cli_installed) ?? !0,
          "setup-state": ((Oo = Y.value) == null ? void 0 : Oo.state) || "no_workspace",
          "workspace-path": ((Uo = Y.value) == null ? void 0 : Uo.workspace_path) || null,
          onComplete: ba,
          onClose: $a,
          onSwitchEnvironment: Ca,
          onEnvironmentCreatedNoSwitch: Ta
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", GT, [
          k(em, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(q, null, ke(F.value, (st) => (n(), i("div", {
                key: st.id,
                class: Ae(["toast", st.type])
              }, [
                t("span", jT, m(st.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), qT = /* @__PURE__ */ Ie(HT, [["__scopeId", "data-v-77557cbb"]]), KT = { class: "item-header" }, JT = { class: "item-info" }, YT = { class: "filename" }, QT = { class: "metadata" }, XT = { class: "size" }, ZT = {
  key: 0,
  class: "type"
}, e7 = { class: "item-actions" }, t7 = {
  key: 0,
  class: "progress-section"
}, s7 = { class: "progress-bar" }, o7 = { class: "progress-stats" }, n7 = { class: "downloaded" }, a7 = { class: "speed" }, l7 = {
  key: 0,
  class: "eta"
}, i7 = {
  key: 1,
  class: "status-msg paused"
}, r7 = {
  key: 2,
  class: "status-msg queued"
}, c7 = {
  key: 3,
  class: "status-msg completed"
}, u7 = {
  key: 4,
  class: "status-msg failed"
}, d7 = {
  key: 0,
  class: "retries"
}, m7 = /* @__PURE__ */ Se({
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
      class: Ae(["download-item", `status-${e.item.status}`])
    }, [
      t("div", KT, [
        t("div", JT, [
          t("div", YT, m(e.item.filename), 1),
          t("div", QT, [
            t("span", XT, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", ZT, m(e.item.type), 1)) : h("", !0)
          ])
        ]),
        t("div", e7, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : h("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : h("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : h("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : h("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", t7, [
        t("div", s7, [
          t("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", o7, [
          t("span", n7, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          t("span", a7, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", l7, m(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", i7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", r7, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", c7, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", u7, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", d7, "(" + m(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Bo = /* @__PURE__ */ Ie(m7, [["__scopeId", "data-v-2110df65"]]), f7 = { class: "queue-title" }, v7 = { class: "count" }, p7 = { class: "queue-actions" }, g7 = { class: "action-label" }, h7 = {
  key: 0,
  class: "overall-progress"
}, y7 = { class: "progress-bar" }, w7 = {
  key: 0,
  class: "current-mini"
}, _7 = { class: "filename" }, k7 = { class: "speed" }, b7 = {
  key: 1,
  class: "queue-content"
}, $7 = {
  key: 0,
  class: "section"
}, C7 = {
  key: 1,
  class: "section"
}, x7 = { class: "section-header" }, S7 = { class: "section-label paused" }, I7 = { class: "items-list" }, E7 = {
  key: 2,
  class: "section"
}, T7 = { class: "section-header" }, M7 = { class: "section-label" }, P7 = { class: "items-list" }, R7 = {
  key: 3,
  class: "section"
}, N7 = { class: "section-header" }, L7 = { class: "section-label" }, D7 = { class: "items-list" }, O7 = {
  key: 4,
  class: "section"
}, U7 = { class: "section-header" }, A7 = { class: "section-label failed" }, z7 = { class: "items-list" }, V7 = /* @__PURE__ */ Se({
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
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: y,
      clearCompleted: _
    } = Lo(), x = b(!1);
    let C = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (T, R) => {
        C && (clearTimeout(C), C = null);
        const D = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, J = R && (R.active > 0 || R.paused > 0);
        D && J && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = L(() => {
      var D;
      if (s.items.length === 0) return 0;
      const T = l.value.length, R = ((D = o.value) == null ? void 0 : D.progress) || 0;
      return Math.round((T + R / 100) / s.items.length * 100);
    });
    function O(T) {
      v(T);
    }
    function I(T) {
      return T === 0 ? "..." : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, R) => (n(), N(Ut, { to: "body" }, [
      et(u) ? (n(), i("div", {
        key: 0,
        class: Ae(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: R[0] || (R[0] = (D) => x.value = !x.value)
        }, [
          t("div", f7, [
            R[4] || (R[4] = t("span", { class: "icon" }, "↓", -1)),
            R[5] || (R[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", v7, "(" + m(et(d)) + "/" + m(et(s).items.length) + ")", 1)
          ]),
          t("div", p7, [
            t("span", g7, m(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", b7, [
          et(o) ? (n(), i("div", $7, [
            R[6] || (R[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            k(Bo, {
              item: et(o),
              onCancel: R[1] || (R[1] = (D) => O(et(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          et(c).length > 0 ? (n(), i("div", C7, [
            t("div", x7, [
              t("span", S7, "Paused (" + m(et(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: R[2] || (R[2] = //@ts-ignore
                (...D) => et(w) && et(w)(...D))
              }, "Resume All")
            ]),
            t("div", I7, [
              (n(!0), i(q, null, ke(et(c), (D) => (n(), N(Bo, {
                key: D.id,
                item: D,
                onResume: (J) => et(p)(D.id),
                onRemove: (J) => et(y)(D.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          et(a).length > 0 ? (n(), i("div", E7, [
            t("div", T7, [
              t("span", M7, "Queued (" + m(et(a).length) + ")", 1)
            ]),
            t("div", P7, [
              (n(!0), i(q, null, ke(et(a), (D) => (n(), N(Bo, {
                key: D.id,
                item: D,
                onCancel: (J) => O(D.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          et(l).length > 0 ? (n(), i("div", R7, [
            t("div", N7, [
              t("span", L7, "Completed (" + m(et(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: R[3] || (R[3] = //@ts-ignore
                (...D) => et(_) && et(_)(...D))
              }, "Clear")
            ]),
            t("div", D7, [
              (n(!0), i(q, null, ke(et(l).slice(0, 3), (D) => (n(), N(Bo, {
                key: D.id,
                item: D,
                onRemove: (J) => et(y)(D.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          et(r).length > 0 ? (n(), i("div", O7, [
            t("div", U7, [
              t("span", A7, "Failed (" + m(et(r).length) + ")", 1)
            ]),
            t("div", z7, [
              (n(!0), i(q, null, ke(et(r), (D) => (n(), N(Bo, {
                key: D.id,
                item: D,
                onRetry: (J) => et(f)(D.id),
                onRemove: (J) => et(y)(D.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", h7, [
          t("div", y7, [
            t("div", {
              class: "progress-fill",
              style: Wt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          et(o) ? (n(), i("div", w7, [
            t("span", _7, m(et(o).filename), 1),
            t("span", k7, m(I(et(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), F7 = /* @__PURE__ */ Ie(V7, [["__scopeId", "data-v-3a3c9607"]]), B7 = { class: "detail-header" }, W7 = { class: "item-count" }, G7 = { class: "resource-list" }, j7 = { class: "item-info" }, H7 = { class: "item-name" }, q7 = {
  key: 0,
  class: "item-subtitle"
}, K7 = {
  key: 0,
  class: "installing-badge"
}, J7 = ["title"], Y7 = {
  key: 2,
  class: "installed-badge"
}, Q7 = {
  key: 3,
  class: "queued-badge"
}, X7 = {
  key: 4,
  class: "action-buttons"
}, Z7 = {
  key: 1,
  class: "no-action"
}, eM = /* @__PURE__ */ Se({
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
    const o = e, a = s, l = L(() => o.items.filter((y) => y.canAction)), r = L(() => l.value.length > 0 && l.value.every(
      (y) => {
        var _, x;
        return o.queuedItems.has(y.id) || ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) || ((x = o.failedItems) == null ? void 0 : x.has(y.id));
      }
    )), c = L(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(y) {
      return o.queuedItems.has(y.id);
    }
    function d(y) {
      return o.installingItem === y.id;
    }
    function v(y) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function f(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function p(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(y.id)) || "Unknown error";
    }
    function w(y) {
      return y.actions && y.actions.length > 0 ? y.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (y, _) => (n(), N(xt, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", B7, [
          t("span", W7, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), N(Oe, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => a("bulk-action"))
          }, {
            default: g(() => [
              $(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        t("div", G7, [
          (n(!0), i(q, null, ke(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", j7, [
              t("span", H7, m(x.name), 1),
              x.subtitle ? (n(), i("span", q7, m(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (n(), i(q, { key: 0 }, [
              d(x) ? (n(), i("span", K7, "Installing...")) : f(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, J7)) : v(x) ? (n(), i("span", Y7, "Installed")) : u(x) ? (n(), i("span", Q7, "Queued")) : (n(), i("div", X7, [
                (n(!0), i(q, null, ke(w(x), (C) => (n(), N(Oe, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => a("action", x, C.key)
                }, {
                  default: g(() => [
                    $(m(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", Z7, m(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        k(Oe, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => a("close"))
        }, {
          default: g(() => [..._[3] || (_[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), tM = /* @__PURE__ */ Ie(eM, [["__scopeId", "data-v-ec7e9202"]]), sM = {
  key: 0,
  class: "loading-state"
}, oM = {
  key: 1,
  class: "analysis-results"
}, nM = {
  key: 0,
  class: "section"
}, aM = { class: "section-header" }, lM = { class: "section-title" }, iM = { class: "item-list" }, rM = { class: "package-info" }, cM = { class: "package-name" }, uM = { class: "node-count" }, dM = {
  key: 1,
  class: "installing-badge"
}, mM = {
  key: 2,
  class: "queued-badge"
}, fM = ["title"], vM = {
  key: 4,
  class: "installed-badge"
}, pM = {
  key: 1,
  class: "section"
}, gM = { class: "section-header" }, hM = { class: "section-title" }, yM = { class: "item-list" }, wM = { class: "node-type" }, _M = {
  key: 0,
  class: "overflow-note"
}, kM = {
  key: 2,
  class: "section"
}, bM = { class: "section-header" }, $M = { class: "section-title" }, CM = { class: "item-list" }, xM = { class: "node-type" }, SM = { class: "not-found" }, IM = {
  key: 0,
  class: "overflow-note"
}, EM = {
  key: 3,
  class: "section"
}, TM = { class: "section-header" }, MM = { class: "section-title" }, PM = { class: "item-list" }, RM = { class: "package-info community-info" }, NM = { class: "community-title-row" }, LM = { class: "package-name" }, DM = { class: "node-count" }, OM = { class: "community-mapping-note" }, UM = { key: 0 }, AM = {
  key: 0,
  class: "community-actions"
}, zM = {
  key: 1,
  class: "installing-badge"
}, VM = {
  key: 2,
  class: "queued-badge"
}, FM = ["title"], BM = {
  key: 4,
  class: "installed-badge"
}, WM = ["title"], GM = {
  key: 1,
  class: "no-url"
}, jM = {
  key: 4,
  class: "section"
}, HM = { class: "section-header" }, qM = { class: "section-title" }, KM = { class: "item-list" }, JM = { class: "model-info" }, YM = { class: "model-name" }, QM = {
  key: 1,
  class: "queued-badge"
}, XM = {
  key: 1,
  class: "no-url"
}, ZM = { class: "dont-show-again" }, eP = 3e4, tP = /* @__PURE__ */ Se({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = b(!1), o = b(null), a = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), v = b(!1), f = b(null), p = b(0), w = b(null), y = b(/* @__PURE__ */ new Set()), _ = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = Lo(), { queueNodeInstall: S } = ft(), O = L(() => {
      var H;
      return ((H = a.value) == null ? void 0 : H.package_aliases) || {};
    });
    function I(H) {
      if (!H) return null;
      const me = O.value;
      let re = H;
      const Ke = /* @__PURE__ */ new Set();
      for (; me[re] && !Ke.has(re); )
        Ke.add(re), re = me[re];
      return re;
    }
    function T(H, me) {
      return H instanceof Error && H.message ? H.message : typeof H == "string" && H.trim().length > 0 ? H : me;
    }
    function R(H) {
      for (const [me, re] of _.value.entries())
        re === H && _.value.delete(me);
    }
    function D(H) {
      if (!x.value.has(H)) return;
      const me = x.value.get(H);
      clearTimeout(me), x.value.delete(H);
    }
    function J() {
      for (const H of x.value.values())
        clearTimeout(H);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(H) {
      D(H);
      const me = setTimeout(() => {
        if (x.value.delete(H), !c.value.has(H)) return;
        R(H), c.value.delete(H), f.value === H && (f.value = null), u.value.set(H, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", H);
      }, eP);
      x.value.set(H, me);
    }
    function B(H) {
      const me = `Cannot install "${H.title}" - package_id is missing`;
      u.value.set(H.item_id, me), o.value = me, console.warn("[ComfyGit] Community install requested without package_id:", H);
    }
    const Z = L(() => X.value.length > 0 || he.value.length > 0 || te.value.length > 0 || Y.value.length > 0 || z.value.length > 0), X = L(() => {
      var re, Ke;
      if (!((re = a.value) != null && re.nodes)) return [];
      const H = /* @__PURE__ */ new Map(), me = (a.value.nodes.resolved || []).filter((G) => {
        var F;
        return !G.is_installed && ((F = G.package) == null ? void 0 : F.package_id);
      });
      for (const G of me) {
        const F = I(G.package.package_id);
        if (!F) continue;
        H.has(F) || H.set(F, {
          package_id: F,
          title: G.package.title || F,
          node_count: 0,
          node_types: [],
          repository: G.package.repository || null,
          latest_version: G.package.latest_version || null
        });
        const ae = H.get(F);
        ae.node_count++, ae.node_types.push(((Ke = G.reference) == null ? void 0 : Ke.node_type) || G.node_type);
      }
      return Array.from(H.values());
    }), ie = L(() => X.value.reduce((H, me) => H + me.node_count, 0)), he = L(() => {
      var H;
      return (H = a.value) != null && H.nodes ? (a.value.nodes.unresolved || []).map((me) => {
        var re;
        return {
          node_type: ((re = me.reference) == null ? void 0 : re.node_type) || me.node_type
        };
      }) : [];
    }), te = L(() => {
      var me;
      if (!((me = a.value) != null && me.nodes)) return [];
      const H = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((re) => {
        var G;
        const Ke = ((G = re.reference) == null ? void 0 : G.node_type) || re.node_type;
        return {
          node_type: Ke,
          guidance: re.guidance || H[Ke] || null
        };
      });
    }), Y = L(() => {
      var re, Ke, G, F, ae, ge, Te, Je;
      if (!((re = a.value) != null && re.nodes)) return [];
      const H = a.value.node_guidance || {}, me = /* @__PURE__ */ new Map();
      for (const He of a.value.nodes.uninstallable || []) {
        const nt = ((Ke = He.reference) == null ? void 0 : Ke.node_type) || He.node_type, yt = I(((G = He.package) == null ? void 0 : G.package_id) || null), St = yt || `node:${nt}`;
        me.has(St) || me.set(St, {
          item_id: St,
          node_type: nt,
          title: ((F = He.package) == null ? void 0 : F.title) || yt || nt,
          node_count: 0,
          package_id: yt,
          repository: ((ae = He.package) == null ? void 0 : ae.repository) || null,
          latest_version: ((ge = He.package) == null ? void 0 : ge.latest_version) || null,
          guidance: He.guidance || H[nt] || null
        });
        const de = me.get(St);
        de.node_count++, de.guidance || (de.guidance = He.guidance || H[nt] || null), !de.repository && ((Te = He.package) != null && Te.repository) && (de.repository = He.package.repository), !de.latest_version && ((Je = He.package) != null && Je.latest_version) && (de.latest_version = He.package.latest_version);
      }
      return Array.from(me.values());
    }), ue = L(() => Y.value.filter((H) => !!H.package_id)), Ne = L(() => Y.value.length >= 5 ? Y.value.slice(0, 4) : Y.value), ne = L(() => ue.value.length > 0 && ue.value.every((H) => {
      const me = H.package_id;
      return r.value.has(me) || c.value.has(me) || u.value.has(me);
    }));
    function ve(H) {
      const me = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return H.repository && me.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), me;
    }
    const z = L(() => {
      var G;
      if (!((G = a.value) != null && G.models)) return [];
      const H = (a.value.models.resolved || []).filter(
        (F) => F.match_type === "download_intent" || F.match_type === "property_download_intent" || F.match_type === "not_found"
      ).map((F) => {
        var ae, ge, Te, Je;
        return {
          filename: ((ge = (ae = F.reference) == null ? void 0 : ae.widget_value) == null ? void 0 : ge.split("/").pop()) || ((Te = F.reference) == null ? void 0 : Te.widget_value) || F.widget_value,
          widget_value: ((Je = F.reference) == null ? void 0 : Je.widget_value) || F.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: F.download_source || null,
          targetPath: F.target_path || null,
          canDownload: !!(F.download_source && F.target_path)
        };
      }), me = (a.value.models.unresolved || []).map((F) => {
        var ae, ge, Te, Je;
        return {
          filename: ((ge = (ae = F.reference) == null ? void 0 : ae.widget_value) == null ? void 0 : ge.split("/").pop()) || ((Te = F.reference) == null ? void 0 : Te.widget_value) || F.widget_value,
          widget_value: ((Je = F.reference) == null ? void 0 : Je.widget_value) || F.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), re = /* @__PURE__ */ new Map(), Ke = [];
      for (const F of H) {
        if (!F.url) {
          Ke.push(F);
          continue;
        }
        const ae = `${F.filename}::${F.url}`, ge = re.get(ae);
        if (!ge) {
          re.set(ae, F);
          continue;
        }
        !ge.targetPath && F.targetPath && (ge.targetPath = F.targetPath), !ge.canDownload && F.canDownload && (ge.canDownload = F.canDownload);
      }
      return [...re.values(), ...Ke, ...me];
    }), pe = L(() => z.value.filter((H) => H.canDownload)), Pe = L(() => X.value.length >= 5 ? X.value.slice(0, 4) : X.value), Ue = L(() => z.value.length >= 5 ? z.value.slice(0, 4) : z.value), se = L(() => X.value.length > 0 && X.value.every(
      (H) => r.value.has(H.package_id) || c.value.has(H.package_id) || u.value.has(H.package_id)
    )), W = L(() => pe.value.length > 0 && pe.value.every((H) => d.value.has(H.url))), ee = L(() => X.value.length > 0 || ue.value.length > 0 || pe.value.length > 0), M = L(() => {
      const H = (X.value.length === 0 || se.value) && (ue.value.length === 0 || ne.value), me = pe.value.length === 0 || W.value;
      return H && me;
    }), P = L(() => w.value === "models" ? `Missing Models (${z.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ie.value})` : w.value === "community" ? `Community-Mapped Packages (${Y.value.length})` : ""), le = L(() => w.value === "models" ? z.value.map((H) => ({
      id: H.url || H.widget_value,
      name: H.filename,
      canAction: H.canDownload,
      actionDisabledReason: H.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? X.value.map((H) => ({
      id: H.package_id,
      name: H.title,
      subtitle: `(${H.node_count} ${H.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? Y.value.map((H) => ({
      id: H.package_id || H.item_id,
      name: H.title,
      subtitle: `(${H.node_count} ${H.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!H.package_id,
      actionDisabledReason: H.package_id ? void 0 : "Manual setup required",
      actions: H.package_id ? ve(H) : []
    })) : []);
    function Fe(H, me) {
      if (w.value === "models") {
        const re = z.value.find((Ke) => Ke.url === H.id || Ke.widget_value === H.id);
        re && we(re);
      } else if (w.value === "packages") {
        const re = X.value.find((Ke) => Ke.package_id === H.id);
        re && U(re);
      } else if (w.value === "community") {
        const re = Y.value.find((G) => (G.package_id || G.item_id) === H.id);
        if (!re) return;
        if (!re.package_id) {
          B({ item_id: re.item_id, title: re.title });
          return;
        }
        A(re, me === "install_git" ? "git" : "registry");
      }
    }
    function Qe() {
      w.value === "models" ? Me() : w.value === "packages" ? _e() : w.value === "community" && be();
    }
    async function U(H) {
      return j(H.package_id, H.latest_version, "registry");
    }
    async function A(H, me) {
      return H.package_id ? j(H.package_id, H.latest_version, me, H.repository) : (B({ item_id: H.item_id, title: H.title }), !1);
    }
    async function j(H, me, re, Ke) {
      const G = I(H) || H, F = me || "latest";
      if (r.value.has(G) || c.value.has(G) || u.value.has(G))
        return !0;
      ze(), f.value = G;
      let ae = null;
      try {
        const ge = {
          id: G,
          version: F,
          selected_version: F,
          mode: "remote",
          channel: "default"
        };
        re === "git" && Ke && (ge.repository = Ke, ge.install_source = "git");
        const { ui_id: Te } = await S(ge, {
          beforeQueueStart: (Je) => {
            ae = Je, _.value.set(Je, G), c.value.add(G), E(G), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Je,
              packageId: G,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return ae || (ae = Te, _.value.set(Te, G), c.value.add(G), E(G), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Te,
          packageId: G,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (ge) {
        const Te = T(ge, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ge), ae && _.value.delete(ae), R(G), D(G), c.value.delete(G), u.value.set(G, Te), !1;
      } finally {
        f.value = null;
      }
    }
    function we(H) {
      !H.url || !H.targetPath || d.value.has(H.url) || (C([{
        workflow: "unsaved",
        filename: H.filename,
        url: H.url,
        targetPath: H.targetPath
      }]), d.value.add(H.url));
    }
    async function _e() {
      const H = { attempted: 0, failed: 0 };
      for (const me of X.value)
        !r.value.has(me.package_id) && !c.value.has(me.package_id) && !u.value.has(me.package_id) && (H.attempted++, await U(me) || H.failed++);
      return H;
    }
    async function be() {
      const H = { attempted: 0, failed: 0 };
      for (const me of ue.value) {
        const re = me.package_id;
        !r.value.has(re) && !c.value.has(re) && !u.value.has(re) && (H.attempted++, await A(me, "registry") || H.failed++);
      }
      return H;
    }
    function Me() {
      const H = pe.value.filter(
        (me) => !d.value.has(me.url)
      );
      if (H.length === 0) return 0;
      C(H.map((me) => ({
        workflow: "unsaved",
        filename: me.filename,
        url: me.url,
        targetPath: me.targetPath
      })));
      for (const me of H)
        d.value.add(me.url);
      return H.length;
    }
    async function Le() {
      const H = await _e(), me = await be();
      Me();
      const re = H.attempted + me.attempted, Ke = H.failed + me.failed;
      if (re > 0 && Ke > 0) {
        const G = re - Ke;
        o.value = `${G} of ${re} installs queued, ${Ke} failed`;
      }
    }
    function Re() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ee(H) {
      var G, F;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const me = H == null ? void 0 : H.id;
      if (me && y.value.has(me)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${me} this session`);
        return;
      }
      const re = window.app, Ke = (G = re == null ? void 0 : re.extensionManager) == null ? void 0 : G.workflow;
      if (Ke) {
        let Te = !1;
        for (let Je = 0; Je < 20; Je++) {
          const He = Ke.activeWorkflow;
          if (!He) {
            await new Promise((St) => setTimeout(St, 50));
            continue;
          }
          const nt = (F = He.activeState) == null ? void 0 : F.id;
          if (!(me && nt === me)) {
            Je < 19 && await new Promise((St) => setTimeout(St, 50));
            continue;
          }
          if (Te = !0, He.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${He.filename}`), me && y.value.add(me);
            return;
          }
          break;
        }
        Te || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, J(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const ae = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: H, name: "unsaved" })
        });
        if (!ae.ok) {
          const ge = await ae.json();
          throw new Error(ge.error || "Failed to analyze workflow");
        }
        a.value = await ae.json(), Z.value && (l.value = !0, me && y.value.add(me));
      } catch (ae) {
        console.error("[ComfyGit] Failed to analyze workflow:", ae);
      } finally {
        s.value = !1;
      }
    }
    function je() {
      J(), l.value = !1, a.value = null;
    }
    function Ve(H) {
      const { workflow: me } = H.detail;
      me && Ee(me);
    }
    function ye(H) {
      var Ke;
      const me = (Ke = H.detail) == null ? void 0 : Ke.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: me,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: H.detail
      });
      const re = _.value.get(me);
      re ? (D(re), f.value = re, console.log("[ComfyGit] Installing package:", re)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", me);
    }
    function Q(H) {
      var G, F, ae, ge, Te, Je, He;
      const me = (G = H.detail) == null ? void 0 : G.ui_id, re = (ae = (F = H.detail) == null ? void 0 : F.status) == null ? void 0 : ae.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: me,
        status: re,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: H.detail
      });
      const Ke = _.value.get(me);
      if (Ke) {
        if (D(Ke), _.value.delete(me), c.value.delete(Ke), f.value === Ke && (f.value = null), re === "success")
          r.value.add(Ke), p.value++, console.log("[ComfyGit] Package installed successfully:", Ke);
        else {
          const nt = ((Je = (Te = (ge = H.detail) == null ? void 0 : ge.status) == null ? void 0 : Te.messages) == null ? void 0 : Je[0]) || ((He = H.detail) == null ? void 0 : He.result) || "Unknown error";
          u.value.set(Ke, nt), console.error("[ComfyGit] Package install failed:", Ke, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", me);
    }
    let We = null;
    function xe() {
      var H;
      return We || (We = (H = window.app) == null ? void 0 : H.api), We;
    }
    let Ye = !1;
    function ze() {
      if (Ye) return !0;
      const H = xe();
      return H ? (H.addEventListener("cm-task-started", ye), H.addEventListener("cm-task-completed", Q), H.addEventListener("comfygit:workflow-changed", De), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function De(H) {
      const { change_type: me } = H.detail;
      (me === "created" || me === "modified") && l.value && (J(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return it(() => {
      window.addEventListener("comfygit:workflow-loaded", Ve);
    }), Ro(() => {
      if (J(), window.removeEventListener("comfygit:workflow-loaded", Ve), Ye) {
        const H = xe();
        H && (H.removeEventListener("cm-task-started", ye), H.removeEventListener("cm-task-completed", Q), H.removeEventListener("comfygit:workflow-changed", De)), Ye = !1;
      }
    }), (H, me) => (n(), i(q, null, [
      l.value ? (n(), N(xt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: je
      }, {
        body: g(() => [
          s.value ? (n(), i("div", sM, [...me[5] || (me[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && Z.value ? (n(), i("div", oM, [
            X.value.length > 0 ? (n(), i("div", nM, [
              t("div", aM, [
                t("span", lM, "Missing Custom Nodes (" + m(ie.value) + ")", 1),
                X.value.length > 1 ? (n(), N(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: se.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    $(m(se.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", iM, [
                (n(!0), i(q, null, ke(Pe.value, (re) => (n(), i("div", {
                  key: re.package_id,
                  class: "package-item"
                }, [
                  t("div", rM, [
                    t("span", cM, m(re.title), 1),
                    t("span", uM, "(" + m(re.node_count) + " " + m(re.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(re.package_id) && !c.value.has(re.package_id) && !u.value.has(re.package_id) ? (n(), N(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === re.package_id,
                    onClick: (Ke) => U(re)
                  }, {
                    default: g(() => [
                      $(m(f.value === re.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === re.package_id ? (n(), i("span", dM, "Installing...")) : c.value.has(re.package_id) ? (n(), i("span", mM, "Queued")) : u.value.has(re.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(re.package_id)
                  }, "Failed ⚠", 8, fM)) : (n(), i("span", vM, "Installed"))
                ]))), 128)),
                X.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[0] || (me[0] = (re) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + m(X.value.length) + " packages...", 1),
                  me[6] || (me[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (n(), i("div", pM, [
              t("div", gM, [
                t("span", hM, "Unknown Nodes (" + m(he.value.length) + ")", 1)
              ]),
              t("div", yM, [
                (n(!0), i(q, null, ke(he.value.slice(0, 5), (re) => (n(), i("div", {
                  key: re.node_type,
                  class: "item"
                }, [
                  t("code", wM, m(re.node_type), 1),
                  me[7] || (me[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (n(), i("div", _M, " ...and " + m(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            te.value.length > 0 ? (n(), i("div", kM, [
              t("div", bM, [
                t("span", $M, "Requires Newer ComfyUI (" + m(te.value.length) + ")", 1)
              ]),
              t("div", CM, [
                (n(!0), i(q, null, ke(te.value.slice(0, 5), (re) => (n(), i("div", {
                  key: `vg-${re.node_type}`,
                  class: "item"
                }, [
                  t("code", xM, m(re.node_type), 1),
                  t("span", SM, m(re.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                te.value.length > 5 ? (n(), i("div", IM, " ...and " + m(te.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            Y.value.length > 0 ? (n(), i("div", EM, [
              t("div", TM, [
                t("span", MM, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                ue.value.length > 1 ? (n(), N(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ne.value,
                  onClick: be
                }, {
                  default: g(() => [
                    $(m(ne.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", PM, [
                (n(!0), i(q, null, ke(Ne.value, (re) => (n(), i("div", {
                  key: `community-${re.item_id}`,
                  class: "package-item"
                }, [
                  t("div", RM, [
                    t("div", NM, [
                      t("span", LM, m(re.title), 1),
                      t("span", DM, "(" + m(re.node_count) + " " + m(re.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", OM, [
                      me[8] || (me[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      re.guidance ? (n(), i("span", UM, ". " + m(re.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  re.package_id ? (n(), i(q, { key: 0 }, [
                    !r.value.has(re.package_id) && !c.value.has(re.package_id) && !u.value.has(re.package_id) ? (n(), i("div", AM, [
                      k(Oe, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === re.package_id,
                        onClick: (Ke) => A(re, "registry")
                      }, {
                        default: g(() => [
                          $(m(f.value === re.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      re.repository ? (n(), N(Oe, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === re.package_id,
                        onClick: (Ke) => A(re, "git")
                      }, {
                        default: g(() => [...me[9] || (me[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : f.value === re.package_id ? (n(), i("span", zM, "Installing...")) : c.value.has(re.package_id) ? (n(), i("span", VM, "Queued")) : u.value.has(re.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(re.package_id)
                    }, "Failed ⚠", 8, FM)) : (n(), i("span", BM, "Installed"))
                  ], 64)) : (n(), i(q, { key: 1 }, [
                    u.value.has(re.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(re.item_id)
                    }, "Failed ⚠", 8, WM)) : (n(), i("span", GM, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Y.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[1] || (me[1] = (re) => w.value = "community")
                }, [
                  t("span", null, "Show all " + m(Y.value.length) + " packages...", 1),
                  me[10] || (me[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            z.value.length > 0 ? (n(), i("div", jM, [
              t("div", HM, [
                t("span", qM, "Missing Models (" + m(z.value.length) + ")", 1),
                pe.value.length > 1 ? (n(), N(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: W.value,
                  onClick: Me
                }, {
                  default: g(() => [
                    $(m(W.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", KM, [
                (n(!0), i(q, null, ke(Ue.value, (re) => (n(), i("div", {
                  key: re.widget_value,
                  class: "model-item"
                }, [
                  t("div", JM, [
                    t("span", YM, m(re.filename), 1)
                  ]),
                  re.canDownload ? (n(), i(q, { key: 0 }, [
                    d.value.has(re.url) ? (n(), i("span", QM, "Queued")) : (n(), N(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => we(re)
                    }, {
                      default: g(() => [...me[11] || (me[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", XM, "Manual download required"))
                ]))), 128)),
                z.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[2] || (me[2] = (re) => w.value = "models")
                }, [
                  t("span", null, "Show all " + m(z.value.length) + " models...", 1),
                  me[12] || (me[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", ZM, [
              k(Xn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  me[3] || (me[3] = (re) => v.value = re),
                  Re
                ]
              }, {
                default: g(() => [...me[13] || (me[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          k(Oe, {
            variant: "secondary",
            onClick: je
          }, {
            default: g(() => [...me[14] || (me[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ee.value ? (n(), N(Oe, {
            key: 0,
            variant: "primary",
            disabled: M.value,
            onClick: Le
          }, {
            default: g(() => [
              $(m(M.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (n(), N(tM, {
        key: 1,
        title: P.value,
        items: le.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: me[4] || (me[4] = (re) => w.value = null),
        onAction: Fe,
        onBulkAction: Qe
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), sP = /* @__PURE__ */ Ie(tP, [["__scopeId", "data-v-dfb55c3f"]]), oP = {
  key: 0,
  class: "io-mapping-root"
}, nP = { class: "io-mapping-visual-layer" }, aP = { class: "io-mapping-header" }, lP = { class: "io-mapping-header-main" }, iP = { class: "io-mapping-subtitle" }, rP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, cP = { class: "io-mapping-header-actions" }, uP = { class: "io-mapping-sidebar" }, dP = { class: "io-mapping-sidebar-scroll" }, mP = {
  key: 0,
  class: "io-state-block"
}, fP = {
  key: 1,
  class: "io-state-block io-state-error"
}, vP = { class: "contract-meta-section" }, pP = { class: "contract-meta-toggle-icon" }, gP = {
  key: 0,
  class: "contract-meta-body"
}, hP = { class: "contract-summary" }, yP = { class: "summary-pill" }, wP = { class: "summary-pill" }, _P = { class: "summary-pill" }, kP = { class: "mapping-section" }, bP = { class: "section-header" }, $P = {
  key: 0,
  class: "empty-message"
}, CP = ["onClick"], xP = { class: "item-card-title" }, SP = { class: "item-card-meta" }, IP = { class: "item-card-summary" }, EP = { key: 0 }, TP = { class: "mapping-section" }, MP = { class: "section-header" }, PP = {
  key: 0,
  class: "empty-message"
}, RP = ["onClick"], NP = { class: "item-card-title" }, LP = { class: "item-card-meta" }, DP = { class: "item-card-summary" }, OP = { class: "io-mapping-footer" }, UP = { class: "io-mapping-footer-left" }, AP = { class: "io-mapping-footer-right" }, zP = /* @__PURE__ */ Se({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ft(), r = b(!1), c = b(""), u = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(null), w = b(null), y = b(!1), _ = b(!1), x = b(null), C = b(null), S = b(0), O = b(null), I = b(null);
    let T = null;
    const R = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], D = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], J = L(() => {
      var G;
      return ((G = p.value) == null ? void 0 : G.contract_summary.has_contract) === !0;
    }), E = L(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const G = w.value.default_contract || "default";
      return w.value.contracts[G] || (w.value.contracts[G] = { inputs: [], outputs: [] }), w.value.contracts[G];
    }), B = L(() => {
      var F;
      const G = ((F = p.value) == null ? void 0 : F.contract_summary.status) ?? "none";
      return G === "valid" ? "Valid Contract" : G === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function Z(G) {
      return G ? JSON.parse(JSON.stringify(G)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function X(G) {
      return G === "integer" || G === "number";
    }
    function ie(G) {
      return G === "enum";
    }
    function he(G) {
      return G == null ? "" : String(G);
    }
    function te(G) {
      const F = G.trim();
      if (!F) return;
      const ae = Number(F);
      return Number.isFinite(ae) ? ae : void 0;
    }
    function Y(G) {
      return (G || []).join(`
`);
    }
    function ue(G) {
      return G.split(/[\n,]/).map((F) => F.trim()).filter(Boolean);
    }
    function Ne(G) {
      return typeof G == "string" ? G.length > 24 ? `${G.slice(0, 24)}...` : G : String(G);
    }
    function ne(G) {
      return G == null ? "" : String(G);
    }
    function ve(G) {
      var ae;
      const F = (ae = G == null ? void 0 : G.options) == null ? void 0 : ae.values;
      return Array.isArray(F) ? F.map((ge) => String(ge)).filter(Boolean) : [];
    }
    function z(G, F) {
      var Te;
      const ae = (Te = G == null ? void 0 : G.options) == null ? void 0 : Te[F];
      if (ae == null || ae === "") return;
      const ge = Number(ae);
      return Number.isFinite(ge) ? ge : void 0;
    }
    function pe(G, F) {
      return G.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || F;
    }
    function Pe(G) {
      if (!w.value) return;
      const F = G.trim() || "default";
      w.value.default_contract = F, w.value.contracts[F] || (w.value.contracts[F] = { inputs: [], outputs: [] });
    }
    function Ue(G) {
      const F = String(G ?? "").toLowerCase();
      return F.includes("image") ? "image" : F.includes("video") ? "video" : F.includes("audio") ? "audio" : F.includes("int") ? "integer" : F.includes("float") || F.includes("double") || F.includes("number") ? "number" : F.includes("bool") ? "boolean" : F.includes("combo") || F.includes("enum") ? "enum" : F.includes("string") || F.includes("text") ? "string" : "file";
    }
    function se(G) {
      E.value.inputs.splice(G, 1), x.value === G && (x.value = null);
    }
    function W(G) {
      E.value.outputs.splice(G, 1), C.value === G && (C.value = null);
    }
    function ee(G) {
      x.value = x.value === G ? null : G, x.value != null && (C.value = null);
    }
    function M(G) {
      C.value = C.value === G ? null : G, C.value != null && (x.value = null);
    }
    function P(G) {
      const F = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(G)) : String(G);
      return document.querySelector(`[data-node-id="${F}"]`);
    }
    function le(G) {
      return G instanceof Element ? !!G.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function Fe(G) {
      var ge, Te, Je, He, nt, yt;
      if (!(G instanceof Element)) return null;
      const F = G.closest("[data-node-id]"), ae = F == null ? void 0 : F.getAttribute("data-node-id");
      return ae ? ((Je = (Te = (ge = s.comfyApp) == null ? void 0 : ge.graph) == null ? void 0 : Te.getNodeById) == null ? void 0 : Je.call(Te, ae)) ?? ((yt = (nt = (He = s.comfyApp) == null ? void 0 : He.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : yt.call(nt, ae)) ?? null : null;
    }
    function Qe(G, F) {
      if (F == null || F < 0) return null;
      const ae = P(G);
      return ae ? ae.querySelectorAll('[data-testid="node-widget"]')[F] ?? null : null;
    }
    function U(G) {
      return !G || G.width <= 0 || G.height <= 0 ? null : {
        left: `${G.left}px`,
        top: `${G.top}px`,
        width: `${G.width}px`,
        height: `${G.height}px`
      };
    }
    function A(G) {
      const F = P((G == null ? void 0 : G.id) ?? "");
      if (F) return F.getBoundingClientRect();
      const ae = s.comfyApp;
      if (!G || typeof (ae == null ? void 0 : ae.canvasPosToClientPos) != "function") return null;
      const Te = ae.canvasPosToClientPos([G.pos[0], G.pos[1] - 32]), Je = ae.canvasPosToClientPos([G.pos[0] + G.size[0], G.pos[1] + G.size[1]]);
      return !Te || !Je ? null : new DOMRect(Te[0], Te[1], Je[0] - Te[0], Je[1] - Te[1]);
    }
    function j(G) {
      var nt, yt, St, de, V, fe, qe;
      const F = Qe(G.node_id, G.widget_idx);
      if (F) return F.getBoundingClientRect();
      const ae = ((St = (yt = (nt = s.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : yt.getNodeById) == null ? void 0 : St.call(yt, String(G.node_id))) ?? ((fe = (V = (de = s.comfyApp) == null ? void 0 : de.rootGraph) == null ? void 0 : V.getNodeById) == null ? void 0 : fe.call(V, String(G.node_id)));
      if (!ae || typeof G.widget_idx != "number" || !Array.isArray(ae.widgets)) return null;
      const ge = ae.widgets[G.widget_idx];
      if (!ge || typeof ((qe = s.comfyApp) == null ? void 0 : qe.canvasPosToClientPos) != "function") return A(ae);
      const Te = 10, Je = s.comfyApp.canvasPosToClientPos([ae.pos[0] + Te, ae.pos[1] + (ge.y ?? 0)]), He = s.comfyApp.canvasPosToClientPos([ae.pos[0] + ae.size[0] - Te, ae.pos[1] + (ge.y ?? 0) + (ge.computedHeight ?? 24)]);
      return !Je || !He ? A(ae) : new DOMRect(Je[0], Je[1], He[0] - Je[0], He[1] - Je[1]);
    }
    function we(G) {
      var ae, ge, Te, Je, He, nt;
      const F = ((Te = (ge = (ae = s.comfyApp) == null ? void 0 : ae.graph) == null ? void 0 : ge.getNodeById) == null ? void 0 : Te.call(ge, String(G.node_id))) ?? ((nt = (He = (Je = s.comfyApp) == null ? void 0 : Je.rootGraph) == null ? void 0 : He.getNodeById) == null ? void 0 : nt.call(He, String(G.node_id)));
      return A(F);
    }
    const _e = L(() => (S.value, E.value.inputs.map((G, F) => {
      const ae = U(j(G));
      return ae ? {
        key: `input-${F}-${G.node_id}-${G.widget_idx ?? "na"}`,
        style: ae,
        active: x.value === F
      } : null;
    }).filter((G) => !!G))), be = L(() => (S.value, E.value.outputs.map((G, F) => {
      const ae = U(we(G));
      return ae ? {
        key: `output-${F}-${G.node_id}-${G.selector ?? "primary"}`,
        style: ae,
        active: C.value === F
      } : null;
    }).filter((G) => !!G)));
    function Me(G) {
      var St, de, V, fe, qe, ct, It, at, Ct, At;
      if (le(G.target)) return null;
      const F = (St = s.comfyApp) == null ? void 0 : St.canvas;
      if (!F) return null;
      const ae = (de = F.convertEventToCanvasOffset) == null ? void 0 : de.call(F, G);
      if (!ae || ae.length < 2) return null;
      const [ge, Te] = ae, Je = F.graph || ((V = s.comfyApp) == null ? void 0 : V.graph) || ((fe = s.comfyApp) == null ? void 0 : fe.rootGraph), He = ((qe = Je == null ? void 0 : Je.getNodeOnPos) == null ? void 0 : qe.call(Je, ge, Te, F.visible_nodes)) || ((ct = F.getNodeOnPos) == null ? void 0 : ct.call(F, ge, Te)) || Fe(G.target);
      if (!He) return null;
      const nt = (It = He.getWidgetOnPos) == null ? void 0 : It.call(He, ge, Te, !0);
      if (nt)
        return { kind: "input", node: He, widget: nt, canvasX: ge, canvasY: Te };
      const yt = ((at = He.getOutputOnPos) == null ? void 0 : at.call(He, [ge, Te])) || ((At = (Ct = He.constructor) == null ? void 0 : Ct.nodeData) != null && At.output_node ? { name: He.title || He.type || "output", type: "image" } : null);
      return yt ? { kind: "output", node: He, output: yt, canvasX: ge, canvasY: Te } : null;
    }
    function Le(G, F) {
      var nt;
      const ae = Array.isArray(G.widgets) ? G.widgets.indexOf(F) : -1, ge = E.value.inputs.findIndex(
        (yt) => String(yt.node_id) === String(G.id) && yt.widget_idx === ae
      );
      if (ge >= 0) {
        x.value = ge;
        return;
      }
      const Te = typeof ((nt = F == null ? void 0 : F.options) == null ? void 0 : nt.property) == "string" ? F.options.property : void 0, Je = (F == null ? void 0 : F.name) || Te || "input", He = {
        name: pe(String(Je), `input_${E.value.inputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || Te || `Input ${E.value.inputs.length + 1}`),
        type: Ue(F == null ? void 0 : F.type),
        node_id: String(G.id),
        widget_idx: ae >= 0 ? ae : void 0,
        field_key: Te,
        required: !0,
        default: (F == null ? void 0 : F.value) ?? ""
      };
      X(He.type) && (He.min = z(F, "min"), He.max = z(F, "max")), ie(He.type) && (He.enum_values = ve(F)), E.value.inputs.push(He), x.value = E.value.inputs.length - 1, C.value = null;
    }
    function Re(G, F) {
      const ae = Array.isArray(G.outputs) ? G.outputs.indexOf(F) : -1, ge = ae >= 0 ? `slot:${ae}` : "primary", Te = E.value.outputs.findIndex(
        (He) => String(He.node_id) === String(G.id) && (He.selector || "primary") === ge
      );
      if (Te >= 0) {
        C.value = Te;
        return;
      }
      const Je = {
        name: pe(String((F == null ? void 0 : F.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || `Output ${E.value.outputs.length + 1}`),
        type: Ue(F == null ? void 0 : F.type),
        node_id: String(G.id),
        selector: ge
      };
      E.value.outputs.push(Je), C.value = E.value.outputs.length - 1, x.value = null;
    }
    function Ee(G) {
      var ge, Te, Je;
      if (!r.value) {
        O.value = null, I.value = null;
        return;
      }
      const F = Me(G);
      if (!F) {
        O.value = null, I.value = null;
        return;
      }
      if (F.kind === "input") {
        const He = Array.isArray(F.node.widgets) ? F.node.widgets.indexOf(F.widget) : -1, nt = U(((ge = Qe(F.node.id, He)) == null ? void 0 : ge.getBoundingClientRect()) ?? j({
          node_id: String(F.node.id),
          widget_idx: He >= 0 ? He : void 0
        }));
        if (!nt) {
          O.value = null, I.value = null;
          return;
        }
        O.value = {
          kind: "input",
          label: `${((Te = F.widget) == null ? void 0 : Te.name) || "widget"} · Node ${F.node.id}`
        }, I.value = { kind: "input", style: nt };
        return;
      }
      const ae = U(A(F.node));
      if (!ae) {
        O.value = null, I.value = null;
        return;
      }
      O.value = {
        kind: "output",
        label: `${((Je = F.output) == null ? void 0 : Je.name) || F.node.title || F.node.type || "output"} · Node ${F.node.id}`
      }, I.value = { kind: "output", style: ae };
    }
    function je(G) {
      var ge, Te, Je;
      if (!r.value || !w.value || G.button !== 0) return;
      const F = Me(G);
      if (!F) return;
      const ae = (ge = s.comfyApp) == null ? void 0 : ge.canvas;
      if (ae) {
        if (F.kind === "input") {
          G.preventDefault(), G.stopImmediatePropagation(), G.stopPropagation(), Array.isArray(ae.graph_mouse) && (ae.graph_mouse[0] = F.canvasX, ae.graph_mouse[1] = F.canvasY), (Te = ae.selectNode) == null || Te.call(ae, F.node, !1), Le(F.node, F.widget);
          return;
        }
        G.preventDefault(), G.stopImmediatePropagation(), G.stopPropagation(), Array.isArray(ae.graph_mouse) && (ae.graph_mouse[0] = F.canvasX, ae.graph_mouse[1] = F.canvasY), (Je = ae.selectNode) == null || Je.call(ae, F.node, !1), Re(F.node, F.output);
      }
    }
    function Ve() {
      document.addEventListener("pointerdown", je, !0), document.addEventListener("pointermove", Ee, !0);
    }
    function ye() {
      document.removeEventListener("pointerdown", je, !0), document.removeEventListener("pointermove", Ee, !0);
    }
    async function Q() {
      if (c.value) {
        u.value = !0, f.value = null;
        try {
          p.value = await o(c.value), w.value = Z(p.value.execution_contract);
        } catch (G) {
          f.value = G instanceof Error ? G.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function We() {
      if (!(!w.value || !c.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = Z(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), De({ reopenPanel: !0 });
        } catch (G) {
          f.value = G instanceof Error ? G.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function xe() {
      _.value = !0;
    }
    async function Ye() {
      if (c.value) {
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), De({ reopenPanel: !0 });
        } catch (G) {
          f.value = G instanceof Error ? G.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function ze() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function De(G) {
      r.value = !1, O.value = null, I.value = null, _.value = !1, G != null && G.reopenPanel && ze();
    }
    async function H(G) {
      var ge, Te;
      const ae = (Te = (ge = G.detail) == null ? void 0 : ge.workflowName) == null ? void 0 : Te.trim();
      ae && (c.value = ae, x.value = null, C.value = null, y.value = !1, r.value = !0, await Q());
    }
    function me(G) {
      if (G.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        De({ reopenPanel: !0 });
      }
    }
    function re() {
      if (T != null) return;
      const G = () => {
        if (S.value += 1, !r.value) {
          T = null;
          return;
        }
        T = window.requestAnimationFrame(G);
      };
      T = window.requestAnimationFrame(G);
    }
    function Ke() {
      T != null && (window.cancelAnimationFrame(T), T = null);
    }
    return kt(r, (G) => {
      G ? (Ve(), re()) : (ye(), Ke());
    }), it(() => {
      window.addEventListener("comfygit:open-io-mapping", H), window.addEventListener("keydown", me);
    }), ra(() => {
      ye(), Ke(), window.removeEventListener("comfygit:open-io-mapping", H), window.removeEventListener("keydown", me);
    }), (G, F) => r.value ? (n(), i("div", oP, [
      t("div", nP, [
        (n(!0), i(q, null, ke(_e.value, (ae) => (n(), i("div", {
          key: ae.key,
          class: Ae(["io-highlight", "io-highlight-input", { active: ae.active }]),
          style: Wt(ae.style)
        }, null, 6))), 128)),
        (n(!0), i(q, null, ke(be.value, (ae) => (n(), i("div", {
          key: ae.key,
          class: Ae(["io-highlight", "io-highlight-output", { active: ae.active }]),
          style: Wt(ae.style)
        }, null, 6))), 128)),
        I.value ? (n(), i("div", {
          key: 0,
          class: Ae(["io-highlight", I.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(I.value.style)
        }, null, 6)) : h("", !0)
      ]),
      t("div", aP, [
        t("div", lP, [
          F[8] || (F[8] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", iP, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          O.value ? (n(), i("div", rP, " Hovering " + m(O.value.kind) + ": " + m(O.value.label), 1)) : h("", !0)
        ]),
        t("div", cP, [
          k(Oe, {
            size: "sm",
            variant: "secondary",
            onClick: F[0] || (F[0] = (ae) => De({ reopenPanel: !0 }))
          }, {
            default: g(() => [...F[9] || (F[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", uP, [
        t("div", dP, [
          u.value ? (n(), i("div", mP, " Loading workflow contract... ")) : f.value ? (n(), i("div", fP, m(f.value), 1)) : w.value ? (n(), i(q, { key: 2 }, [
            t("section", vP, [
              t("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: F[1] || (F[1] = (ae) => y.value = !y.value)
              }, [
                F[10] || (F[10] = t("span", null, "Contract Details", -1)),
                t("span", pP, m(y.value ? "▾" : "▸"), 1)
              ]),
              y.value ? (n(), i("div", gP, [
                k(Dt, { label: "Default Contract" }, {
                  default: g(() => [
                    k(wt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                k(Dt, { label: "Display Name" }, {
                  default: g(() => [
                    k(wt, {
                      modelValue: E.value.display_name,
                      "onUpdate:modelValue": F[2] || (F[2] = (ae) => E.value.display_name = ae),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Dt, { label: "Description" }, {
                  default: g(() => [
                    k(So, {
                      modelValue: E.value.description,
                      "onUpdate:modelValue": F[3] || (F[3] = (ae) => E.value.description = ae),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : h("", !0)
            ]),
            t("section", hP, [
              t("span", yP, m(B.value), 1),
              t("span", wP, m(E.value.inputs.length) + " input" + m(E.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", _P, m(E.value.outputs.length) + " output" + m(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", kP, [
              t("div", bP, [
                k(io, { variant: "section" }, {
                  default: g(() => [...F[11] || (F[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? h("", !0) : (n(), i("div", $P, " No inputs configured. ")),
              (n(!0), i(q, null, ke(E.value.inputs, (ae, ge) => (n(), i("div", {
                key: `input-${ge}`,
                class: Ae(["item-card", { selected: x.value === ge }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Te) => ee(ge)
                }, [
                  t("div", null, [
                    t("div", xP, m(ae.name || `Input ${ge + 1}`), 1),
                    t("div", SP, [
                      $(" Node " + m(ae.node_id || "?"), 1),
                      ae.widget_idx !== void 0 ? (n(), i(q, { key: 0 }, [
                        $(" · Widget " + m(ae.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", IP, [
                      t("span", null, m(ae.type || "string"), 1),
                      t("span", null, m(ae.required ? "required" : "optional"), 1),
                      ae.default !== void 0 && ae.default !== "" ? (n(), i("span", EP, "default " + m(Ne(ae.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: dt((Te) => se(ge), ["stop"])
                  }, {
                    default: g(() => [...F[12] || (F[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, CP),
                x.value === ge ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[4] || (F[4] = dt(() => {
                  }, ["stop"]))
                }, [
                  k(Dt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: ae.name,
                        "onUpdate:modelValue": (Te) => ae.name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Dt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: ae.display_name,
                        "onUpdate:modelValue": (Te) => ae.display_name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Dt, { label: "Type" }, {
                    default: g(() => [
                      k(sn, {
                        "model-value": ae.type,
                        options: R,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => ae.type = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Dt, { label: "Required" }, {
                    default: g(() => [
                      k(sn, {
                        "model-value": ae.required ? "true" : "false",
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => ae.required = Te === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Dt, {
                    class: Ae({ "item-grid-full": ae.type === "string" || ae.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      ae.type === "string" ? (n(), N(So, {
                        key: 0,
                        "model-value": ne(ae.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Te) => ae.default = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), N(wt, {
                        key: 1,
                        modelValue: ae.default,
                        "onUpdate:modelValue": (Te) => ae.default = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  X(ae.type) ? (n(), N(Dt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": he(ae.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => ae.min = te(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  X(ae.type) ? (n(), N(Dt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": he(ae.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => ae.max = te(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ie(ae.type) ? (n(), N(Dt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      k(So, {
                        "model-value": Y(ae.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Te) => ae.enum_values = ue(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("section", TP, [
              t("div", MP, [
                k(io, { variant: "section" }, {
                  default: g(() => [...F[13] || (F[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? h("", !0) : (n(), i("div", PP, " No outputs configured. ")),
              (n(!0), i(q, null, ke(E.value.outputs, (ae, ge) => (n(), i("div", {
                key: `output-${ge}`,
                class: Ae(["item-card", { selected: C.value === ge }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Te) => M(ge)
                }, [
                  t("div", null, [
                    t("div", NP, m(ae.name || `Output ${ge + 1}`), 1),
                    t("div", LP, [
                      $(" Node " + m(ae.node_id || "?"), 1),
                      ae.selector ? (n(), i(q, { key: 0 }, [
                        $(" · " + m(ae.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", DP, [
                      t("span", null, m(ae.type || "file"), 1)
                    ])
                  ]),
                  k(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: dt((Te) => W(ge), ["stop"])
                  }, {
                    default: g(() => [...F[14] || (F[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, RP),
                C.value === ge ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[5] || (F[5] = dt(() => {
                  }, ["stop"]))
                }, [
                  k(Dt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: ae.name,
                        "onUpdate:modelValue": (Te) => ae.name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Dt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: ae.display_name,
                        "onUpdate:modelValue": (Te) => ae.display_name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Dt, { label: "Type" }, {
                    default: g(() => [
                      k(sn, {
                        "model-value": ae.type,
                        options: R,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => ae.type = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        t("div", OP, [
          t("div", UP, [
            k(Oe, {
              variant: "secondary",
              onClick: F[6] || (F[6] = (ae) => De({ reopenPanel: !0 }))
            }, {
              default: g(() => [...F[15] || (F[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          t("div", AP, [
            k(Oe, {
              variant: "danger",
              disabled: !J.value,
              loading: v.value,
              onClick: xe
            }, {
              default: g(() => [...F[16] || (F[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            k(Oe, {
              variant: "primary",
              loading: d.value,
              onClick: We
            }, {
              default: g(() => [...F[17] || (F[17] = [
                $(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (n(), N(Rl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ye,
        onCancel: F[7] || (F[7] = (ae) => _.value = !1)
      }, null, 8, ["message"])) : h("", !0)
    ])) : h("", !0);
  }
}), VP = /* @__PURE__ */ Ie(zP, [["__scopeId", "data-v-13515b27"]]), FP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', BP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', WP = {
  comfy: FP,
  phosphor: BP
}, Ol = "comfy", Tc = "comfygit-theme";
let so = null, Mc = Ol;
function GP() {
  try {
    const e = localStorage.getItem(Tc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ol;
}
function Pc(e = Ol) {
  so && so.remove(), so = document.createElement("style"), so.id = "comfygit-theme-styles", so.setAttribute("data-theme", e), so.textContent = WP[e], document.head.appendChild(so), document.body.setAttribute("data-comfygit-theme", e), Mc = e;
  try {
    localStorage.setItem(Tc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function jP() {
  return Mc;
}
function HP(e) {
  Pc(e);
}
function qP(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ul = document.createElement("link");
Ul.rel = "stylesheet";
Ul.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ul);
const KP = GP();
Pc(KP);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), HP(e);
  },
  getTheme: () => {
    const e = jP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Rs = null, on = null, Xt = null, nn = null, Wo = null, Ni = null, Go = null, Li = null, jo = null, Di = null;
const Io = b(null);
let vn = "no_workspace", Rc = !1;
async function zn() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const s = await Zt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Io.value = await s.json());
  } catch {
  }
}
async function rl() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const s = await Zt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        vn = o.state, Rc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function cl() {
  var s;
  if (vn === "managed" || !Rc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function JP() {
  if (!Io.value) return !1;
  const e = Io.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Io.value.has_changes;
}
function Pn(e) {
  Ko(), Rs = document.createElement("div"), Rs.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Rs.appendChild(s), Rs.addEventListener("click", (a) => {
    a.target === Rs && Ko();
  });
  const o = (a) => {
    a.key === "Escape" && (Ko(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), on = yn({
    render: () => No(qT, {
      initialView: e,
      onClose: Ko,
      onStatusUpdate: async (a) => {
        Io.value = a, an(), await rl(), ul(), cl();
      }
    })
  }), on.mount(s), document.body.appendChild(Rs);
}
function Ko() {
  on && (on.unmount(), on = null), Rs && (Rs.remove(), Rs = null);
}
function Oi(e) {
  Ho(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${s.bottom + 8}px`, Xt.style.right = `${window.innerWidth - s.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Ho(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Ho(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), nn = yn({
    render: () => No(xc, {
      status: Io.value,
      onClose: Ho,
      onCommitted: (l) => {
        Ho(), YP(l.success, l.message), zn().then(an);
      }
    })
  }), nn.mount(Xt), document.body.appendChild(Xt);
}
function Ho() {
  nn && (nn.unmount(), nn = null), Xt && (Xt.remove(), Xt = null);
}
function YP(e, s) {
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
function QP() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-download-queue-root", Ni = yn({
    render: () => No(F7)
  }), Ni.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Model download queue mounted"));
}
function XP() {
  Go || (Go = document.createElement("div"), Go.className = "comfygit-missing-resources-root", Li = yn({
    render: () => No(sP)
  }), Li.mount(Go), document.body.appendChild(Go), console.log("[ComfyGit] Missing resources popup mounted"));
}
function ZP() {
  jo || (jo = document.createElement("div"), jo.className = "comfygit-io-mapping-root", Di = yn({
    render: () => No(VP, {
      comfyApp: Zt
    })
  }), Di.mount(jo), document.body.appendChild(jo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function an() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = JP() ? "block" : "none");
}
function ul() {
  if (!Kt) return;
  const e = vn !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Nc = document.createElement("style");
Nc.textContent = `
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
document.head.appendChild(Nc);
Zt.registerExtension({
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
        Kt && !Kt.disabled && Oi(Kt);
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
    if (vn === "managed")
      try {
        await Promise.all([
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (vn !== "managed") return;
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Pn, Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Oi(Kt), e.appendChild(s), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), QP(), XP(), ZP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Pn(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ko();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([zn(), rl()]), an(), ul(), cl(), setTimeout(cl, 100), setInterval(async () => {
      await Promise.all([zn(), rl()]), an(), ul();
    }, 3e4);
    const a = Zt.api;
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
        const y = document.createElement("button");
        y.textContent = "Refresh", y.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => c(), p.appendChild(y);
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
        const y = document.createElement("div");
        y.id = "comfygit-error-toast", y.style.cssText = `
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
        _.textContent = "⚠️", _.style.fontSize = "20px", y.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), y.appendChild(x);
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
          y.remove(), Pn("debug-env");
        }, y.appendChild(O);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => y.remove(), y.appendChild(I), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && y.remove();
        }, 1e4);
      }, v = function(p) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const y = document.createElement("div");
        y.id = "comfygit-restart-toast", y.style.cssText = `
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
        _.textContent = "✅", _.style.fontSize = "20px", y.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), y.appendChild(x);
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
          O.disabled = !0, O.textContent = "Restarting...", O.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const T = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", O.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (R) {
                console.error("[ComfyGit] Failed to refresh nodes:", R), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", O.style.display = "none";
              }
            };
            a.addEventListener("reconnected", T, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (T) {
            console.error("[ComfyGit] Failed to restart:", T), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", O.textContent = "Try Again", O.disabled = !1, O.style.opacity = "1";
          }
        }, y.appendChild(O);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => y.remove(), y.appendChild(I), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: y } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await zn(), an();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = qP(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
