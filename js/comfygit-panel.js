import { app as _t } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as ge, createBlock as S, resolveDynamicComponent as ls, normalizeClass as le, withCtx as i, toDisplayString as n, createVNode as g, createTextVNode as w, computed as U, Fragment as G, renderList as se, normalizeStyle as Xe, ref as _, onMounted as De, watch as qt, Teleport as Pe, withModifiers as ze, Transition as qs, createSlots as Yt, withKeys as mt, onUnmounted as Ys, reactive as ys, readonly as Xs, unref as pe, withDirectives as Fe, vModelText as Ut, nextTick as Qs, vModelSelect as $t, vModelCheckbox as ts, TransitionGroup as Zs, createApp as is, h as rs } from "vue";
const Js = { class: "panel-layout" }, eo = {
  key: 0,
  class: "panel-layout-header"
}, to = {
  key: 1,
  class: "panel-layout-search"
}, so = { class: "panel-layout-content" }, oo = {
  key: 2,
  class: "panel-layout-footer"
}, ao = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (r, a) => (s(), o("div", Js, [
      r.$slots.header ? (s(), o("div", eo, [
        ge(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (s(), o("div", to, [
        ge(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", so, [
        ge(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", oo, [
        ge(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Q = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [d, p] of r)
    a[d] = p;
  return a;
}, Ve = /* @__PURE__ */ Q(ao, [["__scopeId", "data-v-21565df9"]]), no = {
  key: 0,
  class: "panel-title-prefix"
}, lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, io = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, a) => (s(), S(ls(`h${t.level}`), {
      class: le(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", no, n(t.prefix), 1)) : (s(), o("span", lo)),
        ge(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ Q(io, [["__scopeId", "data-v-c3875efc"]]), co = ["title"], uo = ["width", "height"], mo = /* @__PURE__ */ X({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (d) => r.$emit("click"))
    }, [
      (s(), o("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...a[1] || (a[1] = [
        e("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        e("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, uo))
    ], 8, co));
  }
}), ws = /* @__PURE__ */ Q(mo, [["__scopeId", "data-v-6fc7f16d"]]), vo = { class: "header-left" }, fo = {
  key: 0,
  class: "header-actions"
}, go = /* @__PURE__ */ X({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", vo, [
        g(ro, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(n(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(ws, {
          key: 0,
          onClick: a[0] || (a[0] = (d) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", fo, [
        ge(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ Q(go, [["__scopeId", "data-v-55a62cd6"]]), po = {
  key: 0,
  class: "section-title-count"
}, ho = {
  key: 1,
  class: "section-title-icon"
}, yo = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), S(ls(`h${t.level}`), {
      class: le(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, {
      default: i(() => [
        ge(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", po, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", ho, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ge = /* @__PURE__ */ Q(yo, [["__scopeId", "data-v-559361eb"]]), wo = { class: "status-grid" }, ko = { class: "status-grid__columns" }, bo = { class: "status-grid__column" }, _o = { class: "status-grid__title" }, $o = { class: "status-grid__column status-grid__column--right" }, Co = { class: "status-grid__title" }, xo = {
  key: 0,
  class: "status-grid__footer"
}, So = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, a) => (s(), o("div", wo, [
      e("div", ko, [
        e("div", bo, [
          e("h4", _o, n(t.leftTitle), 1),
          ge(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", $o, [
          e("h4", Co, n(t.rightTitle), 1),
          ge(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", xo, [
        ge(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Io = /* @__PURE__ */ Q(So, [["__scopeId", "data-v-73b7ba3f"]]), Eo = {
  key: 0,
  class: "status-item__icon"
}, Mo = {
  key: 1,
  class: "status-item__count"
}, zo = { class: "status-item__label" }, Lo = /* @__PURE__ */ X({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, a = U(() => `status-item--${r.variant}`);
    return (d, p) => (s(), o("div", {
      class: le(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Eo, n(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", Mo, n(t.count), 1)) : c("", !0),
      e("span", zo, n(t.label), 1)
    ], 2));
  }
}), et = /* @__PURE__ */ Q(Lo, [["__scopeId", "data-v-6f929183"]]), Do = { class: "issue-card__header" }, Ro = { class: "issue-card__icon" }, To = { class: "issue-card__title" }, No = {
  key: 0,
  class: "issue-card__content"
}, Uo = {
  key: 0,
  class: "issue-card__description"
}, Po = {
  key: 1,
  class: "issue-card__items"
}, Bo = {
  key: 2,
  class: "issue-card__actions"
}, Oo = /* @__PURE__ */ X({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, a = U(() => `issue-card--${r.severity}`);
    return (d, p) => (s(), o("div", {
      class: le(["issue-card", a.value])
    }, [
      e("div", Do, [
        e("span", Ro, n(t.icon), 1),
        e("h4", To, n(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", No, [
        t.description ? (s(), o("p", Uo, n(t.description), 1)) : c("", !0),
        ge(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", Po, [
        (s(!0), o(G, null, se(t.items, (v, y) => (s(), o("div", {
          key: y,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, n(v), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", Bo, [
        ge(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Q(Oo, [["__scopeId", "data-v-df6aa348"]]), Fo = ["type", "disabled"], Vo = {
  key: 0,
  class: "spinner"
}, Ao = /* @__PURE__ */ X({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: le(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Vo)) : c("", !0),
      t.loading ? c("", !0) : ge(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Fo));
  }
}), te = /* @__PURE__ */ Q(Ao, [["__scopeId", "data-v-772abe47"]]), Wo = { class: "empty-state" }, Go = {
  key: 0,
  class: "empty-icon"
}, jo = { class: "empty-message" }, Ho = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, a) => (s(), o("div", Wo, [
      t.icon ? (s(), o("div", Go, n(t.icon), 1)) : c("", !0),
      e("p", jo, n(t.message), 1),
      t.actionLabel ? (s(), S(te, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (d) => r.$emit("action"))
      }, {
        default: i(() => [
          w(n(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Qe = /* @__PURE__ */ Q(Ho, [["__scopeId", "data-v-4466284f"]]), Ko = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: le(["detail-label"]),
      style: Xe({ minWidth: t.minWidth })
    }, [
      ge(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ss = /* @__PURE__ */ Q(Ko, [["__scopeId", "data-v-75e9eeb8"]]), qo = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("span", {
      class: le(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ge(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), os = /* @__PURE__ */ Q(qo, [["__scopeId", "data-v-2f186e4c"]]), Yo = { class: "detail-row" }, Xo = /* @__PURE__ */ X({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(t) {
    return (r, a) => (s(), o("div", Yo, [
      g(ss, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(n(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(os, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(n(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ge(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Se = /* @__PURE__ */ Q(Xo, [["__scopeId", "data-v-ef15664a"]]), Qo = { class: "modal-header" }, Zo = { class: "modal-body" }, Jo = { class: "status-section" }, ea = {
  key: 0,
  class: "status-section"
}, ta = { class: "section-header-row" }, sa = {
  key: 0,
  class: "workflow-group"
}, oa = { class: "workflow-group-header" }, aa = { class: "workflow-group-title" }, na = { class: "workflow-list" }, la = { class: "workflow-name" }, ia = { class: "workflow-issue" }, ra = {
  key: 1,
  class: "workflow-group"
}, da = { class: "workflow-group-header" }, ca = { class: "workflow-group-title" }, ua = { class: "workflow-list" }, ma = { class: "workflow-name" }, va = { class: "workflow-issue" }, fa = {
  key: 2,
  class: "workflow-group"
}, ga = { class: "workflow-group-header" }, pa = { class: "workflow-group-title" }, ha = { class: "workflow-list" }, ya = { class: "workflow-name" }, wa = {
  key: 3,
  class: "workflow-group"
}, ka = { class: "workflow-group-header" }, ba = { class: "workflow-group-title" }, _a = { class: "workflow-list" }, $a = { class: "workflow-name" }, Ca = {
  key: 4,
  class: "workflow-group"
}, xa = { class: "workflow-group-header" }, Sa = { class: "workflow-group-title" }, Ia = { class: "workflow-list" }, Ea = { class: "workflow-name" }, Ma = {
  key: 5,
  class: "workflow-group"
}, za = { class: "workflow-group-title" }, La = { class: "expand-icon" }, Da = {
  key: 0,
  class: "workflow-list"
}, Ra = { class: "workflow-name" }, Ta = {
  key: 1,
  class: "status-section"
}, Na = {
  key: 0,
  class: "change-group"
}, Ua = { class: "change-group-header" }, Pa = { class: "change-group-title" }, Ba = { class: "change-list" }, Oa = { class: "node-name" }, Fa = {
  key: 0,
  class: "dev-badge"
}, Va = {
  key: 1,
  class: "change-group"
}, Aa = { class: "change-group-header" }, Wa = { class: "change-group-title" }, Ga = { class: "change-list" }, ja = { class: "node-name" }, Ha = {
  key: 0,
  class: "dev-badge"
}, Ka = {
  key: 2,
  class: "change-group"
}, qa = { class: "change-list" }, Ya = { class: "change-item" }, Xa = { class: "node-name" }, Qa = {
  key: 3,
  class: "change-group"
}, Za = {
  key: 2,
  class: "status-section"
}, Ja = { class: "section-header-row" }, en = {
  key: 0,
  class: "drift-item"
}, tn = { class: "drift-list" }, sn = {
  key: 0,
  class: "drift-list-more"
}, on = {
  key: 1,
  class: "drift-item"
}, an = { class: "drift-list" }, nn = {
  key: 0,
  class: "drift-list-more"
}, ln = {
  key: 2,
  class: "drift-item"
}, rn = {
  key: 3,
  class: "drift-item"
}, dn = {
  key: 3,
  class: "status-section"
}, cn = { class: "info-box" }, un = { class: "drift-list" }, mn = {
  key: 0,
  class: "drift-list-more"
}, vn = {
  key: 4,
  class: "status-section"
}, fn = { class: "warning-box" }, gn = {
  key: 5,
  class: "empty-state-inline"
}, pn = { class: "modal-actions" }, hn = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, a = _(!1);
    De(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), qt(() => r.show, (k, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", k);
    }, { immediate: !0 });
    const d = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), p = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var k, C, L;
      return ((L = (C = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : C.synced) == null ? void 0 : L.filter(($) => {
        var R, O, I;
        const f = (I = (O = (R = r.status) == null ? void 0 : R.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : I.find((B) => B.name === $);
        return !f || f.status !== "broken";
      })) || [];
    }), y = U(() => {
      var k, C, L, $, f;
      return (k = r.status) != null && k.workflows ? (((C = r.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((L = r.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || ((($ = r.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((f = r.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var C, L, $;
      const k = (C = r.status) == null ? void 0 : C.git_changes;
      return k ? (((L = k.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || ((($ = k.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = U(() => {
      var k, C, L, $, f, R;
      return !y.value && !m.value && ((C = (k = r.status) == null ? void 0 : k.comparison) == null ? void 0 : C.is_synced) && (((L = r.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((R = (f = ($ = r.status) == null ? void 0 : $.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : R.length) ?? 0) === 0;
    }), u = U(() => {
      var C, L;
      const k = (L = (C = r.status) == null ? void 0 : C.git_changes) == null ? void 0 : L.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function b(k) {
      return typeof k == "string" ? k : k.name;
    }
    function h(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, C) => {
      var L, $, f, R, O, I, B, W, F, N, D, x, z, ee, Y, ae, me, de, J, P, E, ne;
      return s(), S(Pe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (q) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", Qo, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (q) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Zo, [
              e("div", Jo, [
                g(Ge, { level: "4" }, {
                  default: i(() => [...C[8] || (C[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(Se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              y.value ? (s(), o("div", ea, [
                e("div", ta, [
                  g(Ge, { level: "4" }, {
                    default: i(() => [...C[9] || (C[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (q) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", aa, "BROKEN (COMMITTED) (" + n(d.value.length) + ")", 1)
                  ]),
                  e("div", na, [
                    (s(!0), o(G, null, se(d.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", la, n(q.name), 1),
                      e("span", ia, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (s(), o("div", ra, [
                  e("div", da, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ca, "BROKEN (UNCOMMITTED) (" + n(p.value.length) + ")", 1)
                  ]),
                  e("div", ua, [
                    (s(!0), o(G, null, se(p.value, (q) => (s(), o("div", {
                      key: q.name,
                      class: "workflow-item"
                    }, [
                      e("span", ma, n(q.name), 1),
                      e("span", va, n(q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (L = t.status.workflows) == null ? void 0 : L.new) != null && $.length ? (s(), o("div", fa, [
                  e("div", ga, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", pa, "NEW (" + n(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", ha, [
                    (s(!0), o(G, null, se(t.status.workflows.new, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", ya, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (f = t.status.workflows) == null ? void 0 : f.modified) != null && R.length ? (s(), o("div", wa, [
                  e("div", ka, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ba, "MODIFIED (" + n(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", _a, [
                    (s(!0), o(G, null, se(t.status.workflows.modified, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", $a, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && I.length ? (s(), o("div", Ca, [
                  e("div", xa, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Sa, "DELETED (" + n(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ia, [
                    (s(!0), o(G, null, se(t.status.workflows.deleted, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", Ea, n(q), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", Ma, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (q) => a.value = !a.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", za, "SYNCED (" + n(v.value.length) + ")", 1),
                    e("span", La, n(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (s(), o("div", Da, [
                    (s(!0), o(G, null, se(v.value, (q) => (s(), o("div", {
                      key: q,
                      class: "workflow-item"
                    }, [
                      e("span", Ra, n(q), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", Ta, [
                g(Ge, { level: "4" }, {
                  default: i(() => [...C[16] || (C[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (B = t.status.git_changes) == null ? void 0 : B.nodes_added) != null && W.length ? (s(), o("div", Na, [
                  e("div", Ua, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Pa, "NODES ADDED (" + n(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Ba, [
                    (s(!0), o(G, null, se(t.status.git_changes.nodes_added, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", Oa, n(b(q)), 1),
                      h(q) ? (s(), o("span", Fa, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && N.length ? (s(), o("div", Va, [
                  e("div", Aa, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Wa, "NODES REMOVED (" + n(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ga, [
                    (s(!0), o(G, null, se(t.status.git_changes.nodes_removed, (q) => (s(), o("div", {
                      key: b(q),
                      class: "change-item"
                    }, [
                      e("span", ja, n(b(q)), 1),
                      h(q) ? (s(), o("span", Ha, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", Ka, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", qa, [
                    e("div", Ya, [
                      e("span", Xa, n(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", Qa, [...C[20] || (C[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : c("", !0)
              ])) : c("", !0),
              (z = t.status.comparison) != null && z.is_synced ? c("", !0) : (s(), o("div", Za, [
                e("div", Ja, [
                  g(Ge, { level: "4" }, {
                    default: i(() => [...C[21] || (C[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (q) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ee = t.status.comparison) == null ? void 0 : ee.missing_nodes) != null && Y.length ? (s(), o("div", en, [
                  g(Se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", tn, [
                    (s(!0), o(G, null, se(t.status.comparison.missing_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", sn, " ... and " + n(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (me = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && me.length ? (s(), o("div", on, [
                  g(Se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", an, [
                    (s(!0), o(G, null, se(t.status.comparison.extra_nodes.slice(0, 10), (q) => (s(), o("div", {
                      key: q,
                      class: "drift-list-item"
                    }, " - " + n(q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", nn, " ... and " + n(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (J = (de = t.status.comparison) == null ? void 0 : de.version_mismatches) != null && J.length ? (s(), o("div", ln, [
                  g(Se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (P = t.status.comparison) != null && P.packages_in_sync ? c("", !0) : (s(), o("div", rn, [
                  g(Se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && ne.length ? (s(), o("div", dn, [
                g(Ge, { level: "4" }, {
                  default: i(() => [...C[23] || (C[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", cn, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, n(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", un, [
                  (s(!0), o(G, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (q) => (s(), o("div", {
                    key: q,
                    class: "drift-list-item"
                  }, " • " + n(q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", mn, " ... and " + n(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", vn, [
                g(Ge, { level: "4" }, {
                  default: i(() => [...C[25] || (C[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", fn, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, n(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", gn, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", pn, [
              g(te, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (q) => k.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  w(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), yn = /* @__PURE__ */ Q(hn, [["__scopeId", "data-v-c67eed17"]]), wn = { class: "health-section-header" }, kn = { class: "suggestions-content" }, bn = { class: "suggestions-text" }, _n = {
  key: 4,
  style: { "margin-top": "var(--cg-space-3)" }
}, $n = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments", "create-environment"],
  setup(t, { emit: r }) {
    const a = t, d = _(!1), p = _(!1);
    function v() {
      d.value = !0;
    }
    function y() {
      d.value = !1, l("view-workflows");
    }
    function m() {
      d.value = !1, l("view-nodes");
    }
    const l = r, u = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), b = U(() => a.status.has_changes), h = U(() => {
      const F = a.status.git_changes;
      return F.nodes_added.length > 0 || F.nodes_removed.length > 0 || F.workflow_changes;
    }), k = U(() => a.status.has_changes || u.value), C = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), L = U(() => a.status.git_changes.has_other_changes), $ = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter((N) => N.status === "broken")) || [];
    }), f = U(() => {
      var F;
      return ((F = a.status.workflows.analyzed) == null ? void 0 : F.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), R = U(() => $.value.length > 0), O = U(() => R.value || f.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced), I = U(() => {
      const F = [];
      return a.status.workflows.new.length > 0 && F.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && F.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && F.push(`${a.status.workflows.deleted.length} deleted`), F.length > 0 ? `${F.join(", ")} workflow${F.length === 1 && !F[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), B = U(() => {
      var D, x;
      const F = [], N = a.status.comparison;
      return (D = N.missing_nodes) != null && D.length && F.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (x = N.extra_nodes) != null && x.length && F.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), F.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${F.join(" and ")}.`;
    }), W = U(() => {
      var D, x;
      const F = [], N = a.status.comparison;
      return (D = N.extra_nodes) != null && D.length && (N.extra_nodes.slice(0, 3).forEach((z) => {
        F.push(`Untracked: ${z}`);
      }), N.extra_nodes.length > 3 && F.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (x = N.missing_nodes) != null && x.length && (N.missing_nodes.slice(0, 3).forEach((z) => {
        F.push(`Missing: ${z}`);
      }), N.missing_nodes.length > 3 && F.push(`...and ${N.missing_nodes.length - 3} more missing`)), F;
    });
    return (F, N) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, { title: "STATUS" })
        ]),
        content: i(() => [
          a.setupState === "no_workspace" ? (s(), S(at, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (D) => F.$emit("start-setup"))
              }, {
                default: i(() => [...N[12] || (N[12] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (s(), S(at, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (D) => F.$emit("view-environments"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (s(), S(at, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (D) => F.$emit("create-environment"))
              }, {
                default: i(() => [...N[14] || (N[14] = [
                  w(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (D) => p.value = !0),
            onMouseleave: N[5] || (N[5] = (D) => p.value = !1)
          }, [
            e("div", wn, [
              g(Ge, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...N[15] || (N[15] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(qs, { name: "fade" }, {
                default: i(() => [
                  p.value ? (s(), S(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...N[16] || (N[16] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(Io, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), S(et, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), S(et, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), S(et, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(et, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(et, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(et, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(et, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                L.value ? (s(), S(et, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !h.value && !L.value ? (s(), S(et, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (s(), S(et, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              k.value ? {
                name: "footer",
                fn: i(() => [
                  N[18] || (N[18] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", kn, [
                    e("span", bn, n(I.value), 1),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (D) => F.$emit("commit-changes"))
                    }, {
                      default: i(() => [...N[17] || (N[17] = [
                        w(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), S(at, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (D) => F.$emit("create-branch"))
              }, {
                default: i(() => [...N[19] || (N[19] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          O.value ? (s(), o("div", _n, [
            g(Ge, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[20] || (N[20] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (s(), S(at, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: $.value.map((D) => `${D.name} — ${D.issue_summary}`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[21] || (N[21] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            f.value.length > 0 ? (s(), S(at, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${f.value.length} workflow${f.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: f.value.map((D) => `${D.name} — ${D.models_needing_path_sync_count} model path${D.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[8] || (N[8] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[22] || (N[22] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !R.value ? (s(), S(at, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[9] || (N[9] = (D) => F.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[23] || (N[23] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), S(at, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: B.value,
              items: W.value
            }, {
              actions: i(() => [
                g(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...N[24] || (N[24] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(te, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[10] || (N[10] = (D) => F.$emit("view-nodes"))
                }, {
                  default: i(() => [...N[25] || (N[25] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !O.value && !k.value ? (s(), S(Qe, {
            key: 5,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(yn, {
        show: d.value,
        status: t.status,
        onClose: N[11] || (N[11] = (D) => d.value = !1),
        onNavigateWorkflows: y,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Cn = /* @__PURE__ */ Q($n, [["__scopeId", "data-v-e63d612b"]]), xn = ["type", "value", "placeholder", "disabled"], Sn = /* @__PURE__ */ X({
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
  setup(t, { expose: r, emit: a }) {
    const d = t, p = a, v = _(null);
    function y(m) {
      const l = m.target.value;
      p("update:modelValue", l);
    }
    return De(() => {
      d.autoFocus && v.value && v.value.focus();
    }), r({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: le(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: y,
      onKeyup: [
        l[0] || (l[0] = mt((u) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = mt((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (u) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (u) => m.$emit("blur"))
    }, null, 42, xn));
  }
}), Ht = /* @__PURE__ */ Q(Sn, [["__scopeId", "data-v-0380d08f"]]), In = { class: "branch-create-form" }, En = { class: "form-actions" }, Mn = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const a = r, d = _(""), p = U(() => {
      const m = d.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      p.value && (a("create", d.value.trim()), d.value = "");
    }
    function y() {
      d.value = "", a("cancel");
    }
    return (m, l) => (s(), o("div", In, [
      g(Ht, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => d.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: y
      }, null, 8, ["modelValue"]),
      e("div", En, [
        g(te, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: v
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(te, {
          variant: "secondary",
          size: "sm",
          onClick: y
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), zn = /* @__PURE__ */ Q(Mn, [["__scopeId", "data-v-7c500394"]]), Ln = { class: "branch-list-item__indicator" }, Dn = { class: "branch-list-item__name" }, Rn = {
  key: 0,
  class: "branch-list-item__actions"
}, Tn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Nn = /* @__PURE__ */ X({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (d) => t.clickable && r.$emit("click"))
    }, [
      e("span", Ln, n(t.isCurrent ? "●" : "○"), 1),
      e("span", Dn, n(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", Rn, [
        ge(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Tn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Un = /* @__PURE__ */ Q(Nn, [["__scopeId", "data-v-c6581a24"]]), Pn = {
  key: 2,
  class: "branch-list"
}, Bn = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const a = r, d = _(!1);
    function p(y) {
      a("create", y), v();
    }
    function v() {
      d.value = !1;
    }
    return (y, m) => (s(), S(Ve, null, {
      header: i(() => [
        g(Ae, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? c("", !0) : (s(), S(te, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => d.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(zn, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), S(Qe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Pn, [
          (s(!0), o(G, null, se(t.branches, (l) => (s(), S(Un, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), S(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => y.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), S(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => y.$emit("switch", l.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
                  w(" Switch ", -1)
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
}), On = /* @__PURE__ */ Q(Bn, [["__scopeId", "data-v-86784ddd"]]), Fn = { class: "commit-list" }, Vn = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (r, a) => (s(), o("div", Fn, [
      ge(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), An = /* @__PURE__ */ Q(Vn, [["__scopeId", "data-v-8c5ee761"]]), Wn = { class: "commit-hash" }, Gn = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, a = U(() => r.hash.slice(0, r.length));
    return (d, p) => (s(), o("span", Wn, n(a.value), 1));
  }
}), ks = /* @__PURE__ */ Q(Gn, [["__scopeId", "data-v-7c333cc6"]]), jn = { class: "commit-message" }, Hn = { class: "commit-date" }, Kn = /* @__PURE__ */ X({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p() {
      a.clickable && d("click");
    }
    return (v, y) => (s(), o("div", {
      class: le(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(ks, { hash: t.hash }, null, 8, ["hash"]),
      e("span", jn, n(t.message), 1),
      e("span", Hn, n(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: y[0] || (y[0] = ze(() => {
        }, ["stop"]))
      }, [
        ge(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ Q(Kn, [["__scopeId", "data-v-dd7c621b"]]), Yn = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, a) => (s(), S(Ve, null, {
      header: i(() => [
        g(Ae, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), S(Qe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(An, { key: 1 }, {
          default: i(() => [
            (s(!0), o(G, null, se(t.commits, (d) => (s(), S(qn, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (p) => r.$emit("select", d)
            }, {
              actions: i(() => [
                g(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => r.$emit("checkout", d),
                  title: "Checkout this commit"
                }, {
                  default: i(() => [...a[0] || (a[0] = [
                    e("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), Xn = /* @__PURE__ */ Q(Yn, [["__scopeId", "data-v-981c3c64"]]), vs = [
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
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], Qn = {
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
}, bs = [
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
], Zn = [
  ...bs,
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
], At = [
  {
    name: "ComfyUI-Manager",
    installed: !0,
    registry_id: "comfyui-manager",
    repository: "https://github.com/ltdrdata/ComfyUI-Manager",
    version: "2.8.5",
    source: "registry",
    download_url: null,
    description: "ComfyUI extension for managing custom nodes",
    used_in_workflows: ["flux-dev-img2img.json", "sdxl-lightning.json", "flux-schnell.json"]
  },
  {
    name: "comfyui_flux",
    installed: !0,
    registry_id: "comfyui_flux",
    repository: "https://github.com/black-forest-labs/flux",
    version: "1.2.0",
    source: "registry",
    download_url: null,
    description: "FLUX.1 model support for ComfyUI",
    used_in_workflows: ["flux-dev-img2img.json", "flux-schnell.json"]
  },
  {
    name: "comfyui-controlnet-aux",
    installed: !0,
    registry_id: "comfyui-controlnet-aux",
    repository: "https://github.com/Fannovel16/comfyui_controlnet_aux",
    version: "1.0.3",
    source: "registry",
    download_url: null,
    description: "ControlNet auxiliary preprocessors",
    used_in_workflows: ["controlnet-pose.json"]
  },
  {
    name: "rgthree-comfy",
    installed: !1,
    registry_id: "rgthree-comfy",
    repository: "https://github.com/rgthree/rgthree-comfy",
    version: null,
    source: "registry",
    download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip",
    description: "Power user nodes for ComfyUI workflows",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-image-saver",
    installed: !1,
    registry_id: "comfyui-image-saver",
    repository: "https://github.com/girish946/ComfyUI-Image-Saver",
    version: null,
    source: "registry",
    download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip",
    description: "Advanced image saving options",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-impact-pack",
    installed: !0,
    registry_id: "comfyui-impact-pack",
    repository: "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    version: "4.12.1",
    source: "registry",
    download_url: null,
    description: "Custom nodes for ComfyUI impact pack",
    used_in_workflows: ["sd15-upscale.json"]
  },
  {
    name: "ComfyUI-KJNodes",
    installed: !0,
    registry_id: "comfyui-kjnodes",
    repository: "https://github.com/kijai/ComfyUI-KJNodes",
    version: "1.1.2",
    source: "registry",
    download_url: null,
    description: "KJ utility nodes collection",
    used_in_workflows: []
  },
  {
    name: "custom-dev-nodes",
    installed: !0,
    registry_id: void 0,
    repository: void 0,
    version: "0.1.0-dev",
    source: "development",
    download_url: null,
    description: "Local development nodes",
    used_in_workflows: []
  },
  {
    name: "comfyui-easy-use",
    installed: !1,
    registry_id: "comfyui-easy-use",
    repository: "https://github.com/yolain/ComfyUI-Easy-Use",
    version: null,
    source: "registry",
    download_url: "https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip",
    description: "Simplified workflow nodes",
    used_in_workflows: ["sd15-upscale.json"]
  }
], Jn = [
  {
    hash: "e719c9c",
    message: "refactor: Improve UI consistency and fix display issues",
    author: "Alex Katz",
    date: "2024-01-15T10:30:00Z",
    date_relative: "5 days ago"
  },
  {
    hash: "781a023",
    message: "refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic",
    author: "Alex Katz",
    date: "2024-01-14T15:20:00Z",
    date_relative: "6 days ago"
  },
  {
    hash: "19f7898",
    message: "Merge branch 'design/phosphor' into feature/comfygit-ui",
    author: "Alex Katz",
    date: "2024-01-13T09:15:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "426fe3c",
    message: "Merge branch 'feature/comfygit-ui' into main",
    author: "Alex Katz",
    date: "2024-01-12T14:45:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "8c21deb",
    message: "Add initial agpl 3 license",
    author: "Alex Katz",
    date: "2024-01-10T11:00:00Z",
    date_relative: "2 weeks ago"
  }
], Wt = [
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.core.environment",
    level: "INFO",
    func: "sync",
    line: "306",
    message: "Restored workflows from .cec/"
  },
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.managers.workflow_manager",
    level: "INFO",
    func: "restore_from_cec",
    line: "554",
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: "2025-11-23 13:07:40,286",
    name: "comfygit_core.core.environment",
    level: "DEBUG",
    func: "sync",
    line: "399",
    message: "User content symlinks configured"
  },
  {
    timestamp: "2025-11-23 13:07:42,130",
    name: "comfygit_core.managers.workflow_manager",
    level: "DEBUG",
    func: "resolve_workflow",
    line: "884",
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: "2025-11-23 13:07:42,157",
    name: "comfygit.command",
    level: "INFO",
    func: "log_command",
    line: "180",
    message: "Command 'env status' completed successfully"
  }
], ye = {
  // Environment Management
  getEnvironments: async () => (await he(300), [
    {
      name: "production",
      is_current: !0,
      path: "~/comfygit/environments/production",
      workflow_count: 18,
      node_count: 45,
      model_count: 3,
      current_branch: "main",
      created_at: "2024-01-01T00:00:00Z",
      last_used: (/* @__PURE__ */ new Date()).toISOString(),
      last_commit: "e719c9c",
      last_commit_date: "2024-01-15T10:30:00Z"
    },
    {
      name: "testing",
      is_current: !1,
      path: "~/comfygit/environments/testing",
      workflow_count: 12,
      node_count: 32,
      model_count: 2,
      current_branch: "develop",
      created_at: "2024-01-05T00:00:00Z",
      last_used: new Date(Date.now() - 864e5 * 2).toISOString(),
      // 2 days ago
      last_commit: "426fe3c",
      last_commit_date: "2024-01-12T14:45:00Z"
    },
    {
      name: "experimental",
      is_current: !1,
      path: "~/comfygit/environments/experimental",
      workflow_count: 5,
      node_count: 18,
      model_count: 1,
      current_branch: "feature/new-nodes",
      created_at: "2024-01-10T00:00:00Z",
      last_used: new Date(Date.now() - 864e5).toISOString(),
      // 1 day ago
      last_commit: "781a023",
      last_commit_date: "2024-01-14T15:20:00Z"
    }
  ]),
  switchEnvironment: async (t) => {
    await he(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, a) => {
    await he(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await he(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await he(400), vs),
  getWorkflowDetails: async (t) => (await he(300), Qn[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await he(800), {
    workflow_name: t,
    // Nodes resolved with confidence scores
    nodes_resolved: [
      {
        node_type: "ComfyUI-Flux",
        match_type: "exact",
        package_id: "comfyui_flux",
        match_confidence: 1,
        is_optional: !1,
        rank: 5,
        // Registry popularity
        versions: ["1.2.0", "1.1.0", "1.0.0"]
      }
    ],
    // Nodes that need installation
    nodes_unresolved: [
      {
        node_type: "RgthreeNodeSet",
        possible_matches: [
          {
            package_id: "rgthree-comfy",
            match_type: "fuzzy",
            match_confidence: 0.85,
            rank: 12
          }
        ]
      },
      {
        node_type: "ImageSaver",
        possible_matches: [
          {
            package_id: "comfyui-image-saver",
            match_type: "type_only",
            match_confidence: 0.7,
            rank: 45
          }
        ]
      }
    ],
    nodes_ambiguous: [],
    // Multiple equally-matched candidates
    // Models resolved
    models_resolved: [
      {
        workflow: t,
        filename: "flux1-dev-fp8.safetensors",
        resolved_model: {
          hash: "a11e2e7b",
          sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      },
      {
        workflow: t,
        filename: "clip_l.safetensors",
        resolved_model: {
          hash: "3e9f12a7",
          sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      }
    ],
    // Models that need downloading
    models_unresolved: [
      {
        workflow: t,
        filename: "flux_vae.safetensors",
        node_type: "VAELoader",
        node_id: "10",
        expected_category: "vae"
      }
    ],
    models_ambiguous: [],
    // Multiple models match same name
    // Download intents (models queued for download)
    download_results: [
      {
        model: "flux_vae.safetensors",
        status: "pending",
        source_url: null,
        // No source configured
        can_download: !1,
        estimated_size_mb: 335
      }
    ],
    // Summary fields
    has_issues: !0,
    // Has unresolved nodes and models
    has_download_intents: !0,
    summary: "Missing: 2 nodes, 1 model",
    // Installation plan preview
    nodes_to_install: ["rgthree-comfy", "comfyui-image-saver"],
    models_to_download: ["flux_vae.safetensors"],
    estimated_size_mb: 335,
    estimated_time_seconds: 120
  }),
  installWorkflowDeps: async (t, r, a) => {
    await he(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (t, r, a) => {
    await he(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await he(350), bs),
  getWorkspaceModels: async () => (await he(400), Zn),
  getModelDetails: async (t) => (await he(200), {
    filename: t,
    hash: "762871a9ab79bfa2",
    blake3: null,
    sha256: null,
    size: 173e8,
    category: "checkpoints",
    relative_path: `checkpoints/${t}`,
    last_seen: "2025-11-11 23:34:23",
    locations: [
      { path: `/workspace/models/checkpoints/${t}`, modified: "2024-08-03 13:16:22" }
    ],
    sources: []
  }),
  updateModelSource: async (t, r) => {
    await he(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await he(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await he(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await he(350);
    const t = At.filter((a) => a.installed), r = At.filter((a) => !a.installed);
    return {
      nodes: At,
      total_count: At.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await he(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await he(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await he(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await he(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await he(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await he(250), (t ? Wt.filter((d) => d.level === t) : Wt).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await he(300);
    const a = [...Wt, ...Wt.map((p) => ({
      ...p,
      name: "comfygit.workspace"
    }))];
    return (t ? a.filter((p) => p.level === t) : a).slice(0, r || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async () => (await he(400), {
    environment: "production",
    branch: "main",
    // Set to null to test detached HEAD
    is_detached_head: !1,
    // Set to true to test detached HEAD warning
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: vs.filter((t) => t.status === "synced").map((t) => t.name),
      total: 18,
      analyzed: [
        {
          name: "img2img-basic.json",
          sync_state: "new",
          status: "new",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 8,
          model_count: 2
        },
        {
          name: "controlnet-pose.json",
          sync_state: "new",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 1,
          unresolved_nodes_count: 1,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 unresolved node",
          node_count: 12,
          model_count: 3
        },
        {
          name: "flux-schnell.json",
          sync_state: "modified",
          status: "modified",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 15,
          model_count: 4
        },
        {
          name: "sdxl-lightning.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 2,
          unresolved_models_count: 1,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "2 unresolved nodes, 1 missing model",
          node_count: 20,
          model_count: 5,
          has_category_mismatch_issues: !1,
          models_with_category_mismatch_count: 0
        },
        // Category mismatch example - LoRA in wrong directory
        {
          name: "lora-wrong-dir.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 model in wrong directory",
          node_count: 8,
          model_count: 2,
          has_category_mismatch_issues: !0,
          models_with_category_mismatch_count: 1
        },
        {
          name: "flux-dev-img2img.json",
          sync_state: "synced",
          status: "synced",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 18,
          model_count: 3
        }
      ]
    },
    git_changes: {
      nodes_added: [],
      nodes_removed: [],
      workflow_changes: !1,
      has_other_changes: !1
    },
    comparison: {
      is_synced: !1,
      missing_nodes: ["rgthree-comfy", "comfyui-image-saver"],
      extra_nodes: []
    },
    missing_models_count: 1
  }),
  getCommitHistory: async (t = 10) => (await he(300), Jn.slice(0, t)),
  getBranches: async () => (await he(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await he(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await he(300), {
    remotes: [
      {
        name: "origin",
        fetch_url: "https://github.com/comfyhub/comfygit-demo.git",
        push_url: "https://github.com/comfyhub/comfygit-demo.git",
        is_default: !0
      },
      {
        name: "upstream",
        fetch_url: "https://github.com/comfyhub/comfygit.git",
        push_url: "https://github.com/comfyhub/comfygit.git",
        is_default: !1
      }
    ],
    current_branch_tracking: {
      remote: "origin",
      branch: "main"
    }
  }),
  addRemote: async (t, r) => {
    await he(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await he(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, a) => {
    await he(400), console.log(`[MOCK] Updating remote ${t}: ${r}${a ? ` (push: ${a})` : ""}`);
  },
  fetchRemote: async (t) => {
    await he(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await he(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================
  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (t) => (await he(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: t, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 2,
        nodes_ambiguous: 0,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 2: Only unresolved models (not found in index)
    "test-unresolved-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: t,
              node_id: "node4",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "custom_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 1,
        total_models: 2,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 2,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 3: Ambiguous nodes (multiple matching packages)
    "test-ambiguous-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: t, node_id: "node1" },
            options: [
              {
                package: { package_id: "comfyui-flux-official", title: "FLUX Official Nodes" },
                match_confidence: 0.95,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-community-nodes", title: "FLUX Community Pack" },
                match_confidence: 0.9,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "advanced-flux-toolkit", title: "Advanced FLUX Toolkit" },
                match_confidence: 0.85,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          },
          {
            reference: { node_type: "ImageEnhancer", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "comfyui-image-enhance", title: "Image Enhancement Suite" },
                match_confidence: 0.88,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "ultimate-image-toolkit", title: "Ultimate Image Toolkit" },
                match_confidence: 0.82,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "def456", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 2,
        total_models: 1,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 2,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 4: Ambiguous models (multiple files match the name)
    "test-ambiguous-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl_model.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "aaa111",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.95,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "bbb222",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.85,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_turbo.safetensors",
                  hash: "ccc333",
                  size: 67e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_turbo.safetensors"
                },
                match_confidence: 0.75,
                match_type: "fuzzy",
                has_download_source: !1
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 1,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 0,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 5: Complex mixed scenario (everything)
    "test-mixed-complex.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "flux-samplers-pro", title: "FLUX Samplers Pro" },
                match_confidence: 0.92,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-toolkit", title: "FLUX Toolkit" },
                match_confidence: 0.87,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node5",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "flux_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node6",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "ddd444",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.9,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "eee555",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.8,
                match_type: "fuzzy",
                has_download_source: !0
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 3,
        total_models: 3,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 1,
        models_unresolved: 1,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 6: All resolved (perfect workflow, no user input needed)
    "test-all-resolved.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: t, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
            model: { filename: "sdxl_vae.safetensors", hash: "ggg777", size: 335e6, category: "vae", relative_path: "vae/sdxl_vae.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 2,
        nodes_resolved: 3,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !1
      }
    }
  }[t] || {
    workflow: t,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: t },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: t, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: t, node_id: "node2" },
          options: [
            {
              package: { package_id: "flux-package-a", title: "FLUX Package A" },
              match_confidence: 0.92,
              match_type: "fuzzy",
              is_installed: !1
            },
            {
              package: { package_id: "flux-package-b", title: "FLUX Package B" },
              match_confidence: 0.85,
              match_type: "fuzzy",
              is_installed: !1
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: t,
            node_id: "node3",
            node_type: "CheckpointLoader",
            widget_name: "model",
            widget_value: "test_model.safetensors"
          },
          reason: "not_found_in_index"
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: !0
    }
  }),
  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (t, r, a) => {
    await he(800);
    const d = [], p = [];
    return r.forEach((v, y) => {
      v.action === "install" && v.package_id && d.push(v.package_id);
    }), a.forEach((v, y) => {
      v.action === "download" && v.url ? p.push({
        filename: y,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${y}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: d,
      models_to_download: p,
      estimated_time_seconds: d.length * 30 + p.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await he(400);
    const a = [
      {
        package_id: "comfyui-flux-official",
        match_confidence: 0.95,
        match_type: "fuzzy",
        description: "Official FLUX model support for ComfyUI with optimized samplers",
        repository: "https://github.com/black-forest-labs/flux-comfy",
        is_installed: !1
      },
      {
        package_id: "flux-advanced-toolkit",
        match_confidence: 0.88,
        match_type: "fuzzy",
        description: "Advanced FLUX tools including custom schedulers and samplers",
        repository: "https://github.com/community/flux-toolkit",
        is_installed: !1
      },
      {
        package_id: "comfyui-upscaler-pack",
        match_confidence: 0.82,
        match_type: "fuzzy",
        description: "Collection of upscaling nodes with various models",
        repository: "https://github.com/upscaler/comfyui-pack",
        is_installed: !1
      },
      {
        package_id: "ultimate-image-tools",
        match_confidence: 0.75,
        match_type: "partial",
        description: "Ultimate image processing toolkit for ComfyUI",
        repository: "https://github.com/tools/ultimate-image",
        is_installed: !0
      },
      {
        package_id: "comfyui-controlnet-aux",
        match_confidence: 0.7,
        match_type: "partial",
        description: "Auxiliary ControlNet preprocessors",
        repository: "https://github.com/fannovel16/controlnet-aux",
        is_installed: !0
      }
    ];
    return {
      results: a.slice(0, r),
      total: a.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, r = 10) => {
    await he(400);
    const a = [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "abc123def456",
        size: 11725e6,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        match_confidence: 0.95
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "def456abc789",
        size: 65e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        match_confidence: 0.9
      },
      {
        filename: "sdxl_refiner_1.0.safetensors",
        hash: "ghi789jkl012",
        size: 61e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_refiner_1.0.safetensors",
        match_confidence: 0.85
      },
      {
        filename: "flux_vae.safetensors",
        hash: "mno345pqr678",
        size: 335e6,
        category: "vae",
        has_download_source: !1,
        relative_path: "vae/flux_vae.safetensors",
        match_confidence: 0.8
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "stu901vwx234",
        size: 145e7,
        category: "controlnet",
        has_download_source: !0,
        relative_path: "controlnet/controlnet_openpose.safetensors",
        match_confidence: 0.75
      }
    ];
    return {
      results: a.slice(0, r),
      total: a.length
    };
  }
};
function he(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Lt() {
  return !0;
}
const Ce = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, Me = {
  state: "idle",
  message: "",
  startTime: null,
  envName: null
};
function el() {
  if (Ce.initState === "idle" || Ce.initState === "complete" || Ce.initState === "error" || !Ce.initStartTime) return;
  const t = Date.now() - Ce.initStartTime;
  if (t < 2e3)
    Ce.initState = "creating_workspace", Ce.initProgress = Math.min(20, Math.floor(t / 100)), Ce.initMessage = "Creating workspace structure...";
  else if (t < 4e3)
    Ce.initState = "setting_models_dir", Ce.initProgress = 20 + Math.floor((t - 2e3) / 200), Ce.initMessage = "Configuring models directory...";
  else if (t < 8e3) {
    Ce.initState = "scanning_models";
    const r = Math.floor((t - 4e3) / 50);
    Ce.initProgress = 30 + Math.min(65, r);
    const a = Math.floor((t - 4e3) / 100);
    Ce.initMessage = `Scanning models (${a}/42)...`;
  } else
    Ce.initState = "complete", Ce.initProgress = 100, Ce.initMessage = "Complete! 42 models indexed", Ce.modelsFound = 42, Ce.initStartTime = null;
}
function tl() {
  if (Me.state === "idle" || Me.state === "complete" || Me.state === "error" || !Me.startTime) return;
  const t = Date.now() - Me.startTime;
  t < 1e4 ? (Me.state = "creating", t < 2e3 ? Me.message = "Setting up virtual environment..." : t < 5e3 ? Me.message = "Installing ComfyUI..." : Me.message = "Installing PyTorch...") : (Me.state = "complete", Me.message = `Environment '${Me.envName}' created successfully`, Me.startTime = null);
}
function Te() {
  const t = _(!1), r = _(null);
  async function a(H, we) {
    var kt;
    if (!((kt = window.app) != null && kt.api))
      throw new Error("ComfyUI API not available");
    const xe = await window.app.api.fetchApi(H, we);
    if (!xe.ok) {
      const ft = await xe.json().catch(() => ({}));
      throw new Error(ft.error || ft.message || `Request failed: ${xe.status}`);
    }
    return xe.json();
  }
  async function d(H = !1) {
    return ye.getStatus();
  }
  async function p(H, we = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: we })
    });
  }
  async function v(H = 10, we = 0) {
    {
      const xe = await ye.getCommitHistory(H);
      return {
        commits: xe,
        total: xe.length,
        offset: we
      };
    }
  }
  async function y(H) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function m() {
    return ye.getBranches();
  }
  async function l(H) {
    return a(`/v2/comfygit/commit/${H}`);
  }
  async function u(H, we = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: we })
    });
  }
  async function b(H, we = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: we })
    });
  }
  async function h(H, we = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: we })
    });
  }
  async function k(H, we = !1) {
    return await ye.deleteBranch(H), { status: "success" };
  }
  async function C() {
    return ye.getEnvironments();
  }
  async function L(H) {
    return ye.switchEnvironment(H);
  }
  async function $() {
    return null;
  }
  async function f(H) {
    return Me.state = "creating", Me.message = "Setting up virtual environment...", Me.startTime = Date.now(), Me.envName = H.name, console.log("[MOCK] Starting environment creation:", H), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function R() {
    return tl(), {
      state: Me.state,
      message: Me.message,
      environment_name: Me.state === "complete" && Me.envName || void 0,
      error: Me.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function O(H = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function I(H) {
    return await ye.deleteEnvironment(H), { status: "success" };
  }
  async function B(H = !1) {
    return ye.getWorkflows();
  }
  async function W(H) {
    return ye.getWorkflowDetails(H);
  }
  async function F(H) {
    return ye.resolveWorkflow(H);
  }
  async function N(H, we, xe) {
    return await ye.installWorkflowDeps(H, we, xe), { status: "success" };
  }
  async function D(H, we, xe) {
    return ye.setModelImportance(H, we, xe);
  }
  async function x() {
    return ye.getEnvironmentModels();
  }
  async function z() {
    return ye.getWorkspaceModels();
  }
  async function ee(H) {
    return ye.getModelDetails(H);
  }
  async function Y(H) {
    return console.log(`[MOCK] Opening file location: ${H}`), { status: "success" };
  }
  async function ae(H, we) {
    return await ye.updateModelSource(H, we), { status: "success", source_type: "custom" };
  }
  async function me(H, we) {
    return { status: "success" };
  }
  async function de(H) {
    return ye.deleteModel(H);
  }
  async function J(H) {
    return await ye.downloadModel(H), { status: "success" };
  }
  async function P() {
    return { status: "success", changes: 0 };
  }
  async function E() {
    return { path: "~/comfygit/models" };
  }
  async function ne(H) {
    return { status: "success", path: H, models_indexed: 10 };
  }
  async function q() {
    return ye.getConfig();
  }
  async function Ee(H) {
    return ye.updateConfig(H);
  }
  async function $e(H, we) {
    return ye.getEnvironmentLogs(H, we);
  }
  async function Ne(H, we) {
    return ye.getWorkspaceLogs(H, we);
  }
  async function Ke() {
    return ye.getNodes();
  }
  async function oe(H) {
    return { status: "success", message: `Node '${H}' tracked as development` };
  }
  async function A(H) {
    return await ye.installNode(H), { status: "success" };
  }
  async function Z(H) {
    return await ye.updateNode(H), { status: "success" };
  }
  async function be(H) {
    return await ye.uninstallNode(H), { status: "success" };
  }
  async function ie() {
    return ye.getRemotes();
  }
  async function vt(H, we) {
    return await ye.addRemote(H, we), { status: "success", remote_name: H };
  }
  async function It(H) {
    return await ye.removeRemote(H), { status: "success", remote_name: H };
  }
  async function Et(H, we, xe) {
    return await ye.updateRemoteUrl(H, we, xe), { status: "success", remote_name: H };
  }
  async function _e(H) {
    return await ye.fetchRemote(H), { status: "success", remote_name: H };
  }
  async function ct(H) {
    return ye.getRemoteSyncStatus(H);
  }
  async function st(H = "skip", we = !0) {
    return await new Promise((xe) => setTimeout(xe, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function Ze() {
    return Ce.initState === "complete" ? {
      state: "empty_workspace",
      workspace_path: "~/comfygit",
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models"
    } : {
      state: "no_workspace",
      workspace_path: null,
      default_path: "~/comfygit",
      environments: [],
      current_environment: null,
      detected_models_dir: "/mock/ComfyUI/models"
    };
  }
  async function Mt(H) {
    return Ce.initState = "creating_workspace", Ce.initProgress = 0, Ce.initMessage = "Starting workspace creation...", Ce.initStartTime = Date.now(), Ce.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", H), { status: "started", task_id: "mock-task-id" };
  }
  async function fe() {
    return el(), {
      state: Ce.initState,
      progress: Ce.initProgress,
      message: Ce.initMessage,
      models_found: Ce.initState === "complete" ? Ce.modelsFound : void 0,
      error: Ce.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function je(H) {
    return await new Promise((we) => setTimeout(we, 200)), H.type === "workspace" ? !H.path || H.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : H.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : H.type === "models" ? !H.path || H.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : H.path.endsWith("ComfyUI") || H.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: H.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: d,
    commit: p,
    getHistory: v,
    exportEnv: y,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: u,
    createBranch: b,
    switchBranch: h,
    deleteBranch: k,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: L,
    getSwitchProgress: $,
    createEnvironment: f,
    getCreateProgress: R,
    getComfyUIReleases: O,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: W,
    resolveWorkflow: F,
    installWorkflowDeps: N,
    setModelImportance: D,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: z,
    getModelDetails: ee,
    openFileLocation: Y,
    addModelSource: ae,
    removeModelSource: me,
    deleteModel: de,
    downloadModel: J,
    scanWorkspaceModels: P,
    getModelsDirectory: E,
    setModelsDirectory: ne,
    // Settings
    getConfig: q,
    updateConfig: Ee,
    // Debug/Logs
    getEnvironmentLogs: $e,
    getWorkspaceLogs: Ne,
    // Node Management
    getNodes: Ke,
    trackNodeAsDev: oe,
    installNode: A,
    updateNode: Z,
    uninstallNode: be,
    // Git Remotes
    getRemotes: ie,
    addRemote: vt,
    removeRemote: It,
    updateRemoteUrl: Et,
    fetchRemote: _e,
    getRemoteSyncStatus: ct,
    // Environment Sync
    syncEnvironmentManually: st,
    // First-Time Setup
    getSetupStatus: Ze,
    initializeWorkspace: Mt,
    getInitializeProgress: fe,
    validatePath: je
  };
}
async function Dt(t, r = {}, a = 5e3) {
  const d = new AbortController(), p = setTimeout(() => d.abort(), a);
  try {
    const v = await fetch(t, {
      ...r,
      signal: d.signal
    });
    return clearTimeout(p), v;
  } catch (v) {
    throw clearTimeout(p), v.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : v;
  }
}
function _s() {
  const t = _(null);
  async function r() {
    try {
      const y = await Dt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (y.ok)
        return (await y.json()).port;
    } catch {
    }
    return 8189;
  }
  async function a() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const y = await Dt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Health check failed");
      return await y.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const y = await Dt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Failed to get status");
      return await y.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Dt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Dt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: a,
    getStatus: d,
    restart: p,
    kill: v
  };
}
const sl = { class: "base-modal-header" }, ol = {
  key: 0,
  class: "base-modal-title"
}, al = { class: "base-modal-body" }, nl = {
  key: 0,
  class: "base-modal-loading"
}, ll = {
  key: 1,
  class: "base-modal-error"
}, il = {
  key: 0,
  class: "base-modal-footer"
}, rl = /* @__PURE__ */ X({
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
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p() {
      a.closeOnOverlayClick && d("close");
    }
    function v(y) {
      y.key === "Escape" && a.showCloseButton && d("close");
    }
    return De(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Ys(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (y, m) => (s(), S(Pe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: le(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", sl, [
            ge(y.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", ol, n(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => y.$emit("close"))
            }, [...m[2] || (m[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          e("div", al, [
            t.loading ? (s(), o("div", nl, "Loading...")) : t.error ? (s(), o("div", ll, n(t.error), 1)) : ge(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (s(), o("div", il, [
            ge(y.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), lt = /* @__PURE__ */ Q(rl, [["__scopeId", "data-v-8dab1081"]]), dl = ["type", "disabled"], cl = {
  key: 0,
  class: "spinner"
}, ul = /* @__PURE__ */ X({
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
  setup(t) {
    return (r, a) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: le(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (d) => r.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", cl)) : c("", !0),
      ge(r.$slots, "default", {}, void 0, !0)
    ], 10, dl));
  }
}), re = /* @__PURE__ */ Q(ul, [["__scopeId", "data-v-f3452606"]]), ml = {
  key: 0,
  class: "base-title-count"
}, vl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, a) => (s(), S(ls(`h${t.level}`), {
      class: le(["base-title", t.variant])
    }, {
      default: i(() => [
        ge(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", ml, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Pt = /* @__PURE__ */ Q(vl, [["__scopeId", "data-v-5a01561d"]]), fl = ["value", "disabled"], gl = {
  key: 0,
  value: "",
  disabled: ""
}, pl = ["value"], hl = {
  key: 0,
  class: "base-select-error"
}, yl = /* @__PURE__ */ X({
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
  setup(t) {
    function r(d) {
      return typeof d == "string" ? d : d.value;
    }
    function a(d) {
      return typeof d == "string" ? d : d.label;
    }
    return (d, p) => (s(), o("div", {
      class: le(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: le(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (v) => d.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", gl, n(t.placeholder), 1)) : c("", !0),
        (s(!0), o(G, null, se(t.options, (v) => (s(), o("option", {
          key: r(v),
          value: r(v)
        }, n(a(v)), 9, pl))), 128))
      ], 42, fl),
      t.error ? (s(), o("span", hl, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), wl = /* @__PURE__ */ Q(yl, [["__scopeId", "data-v-7436d745"]]), kl = { class: "popover-header" }, bl = { class: "popover-title" }, _l = { class: "popover-content" }, $l = {
  key: 0,
  class: "popover-actions"
}, Cl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, a) => (s(), S(Pe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Xe({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", kl, [
            e("h4", bl, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", _l, [
            ge(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", $l, [
            ge(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), it = /* @__PURE__ */ Q(Cl, [["__scopeId", "data-v-42815ace"]]), xl = { class: "detail-section" }, Sl = {
  key: 0,
  class: "empty-message"
}, Il = { class: "model-header" }, El = { class: "model-name" }, Ml = { class: "model-details" }, zl = { class: "model-row" }, Ll = { class: "model-row" }, Dl = { class: "label" }, Rl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Tl = { class: "node-list" }, Nl = ["onClick"], Ul = {
  key: 1,
  class: "model-row"
}, Pl = { class: "value" }, Bl = {
  key: 2,
  class: "model-row"
}, Ol = { class: "value error" }, Fl = {
  key: 0,
  class: "model-actions"
}, Vl = { class: "detail-section" }, Al = {
  key: 0,
  class: "empty-message"
}, Wl = { class: "node-name" }, Gl = {
  key: 0,
  class: "node-version"
}, jl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const a = t, d = r, { getWorkflowDetails: p, setModelImportance: v, openFileLocation: y } = Te(), m = _(null), l = _(!1), u = _(null), b = _(!1), h = _({}), k = _(!1), C = _(/* @__PURE__ */ new Set()), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function $(D) {
      switch (D) {
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
    function f(D) {
      switch (D) {
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
    function R(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const x = D.hash || D.filename;
      return C.value.has(x) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function O(D) {
      return C.value.has(D);
    }
    function I(D) {
      C.value.has(D) ? C.value.delete(D) : C.value.add(D), C.value = new Set(C.value);
    }
    async function B() {
      l.value = !0, u.value = null;
      try {
        m.value = await p(a.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function W(D, x) {
      h.value[D] = x, b.value = !0;
    }
    async function F(D) {
      try {
        await y(D);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function N() {
      if (!b.value) {
        d("close");
        return;
      }
      l.value = !0, u.value = null;
      try {
        for (const [D, x] of Object.entries(h.value))
          await v(a.workflowName, D, x);
        d("refresh"), d("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return De(B), (D, x) => (s(), o(G, null, [
      g(lt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: u.value || void 0,
        onClose: x[4] || (x[4] = (z) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(G, { key: 0 }, [
            e("section", xl, [
              g(Pt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + n(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Sl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, se(m.value.models, (z) => {
                var ee;
                return s(), o("div", {
                  key: z.hash || z.filename,
                  class: "model-card"
                }, [
                  e("div", Il, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", El, n(z.filename), 1)
                  ]),
                  e("div", Ml, [
                    e("div", zl, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: le(["value", $(z.status)])
                      }, n(f(z.status)), 3)
                    ]),
                    e("div", Ll, [
                      e("span", Dl, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        g(ws, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (Y) => k.value = !0)
                        })
                      ]),
                      g(wl, {
                        "model-value": h.value[z.filename] || z.importance,
                        options: L,
                        "onUpdate:modelValue": (Y) => W(z.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    z.loaded_by && z.loaded_by.length > 0 ? (s(), o("div", Rl, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Tl, [
                        (s(!0), o(G, null, se(R(z), (Y, ae) => (s(), o("div", {
                          key: `${Y.node_id}-${ae}`,
                          class: "node-reference"
                        }, n(Y.node_type) + " (Node #" + n(Y.node_id) + ") ", 1))), 128)),
                        z.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => I(z.hash || z.filename)
                        }, n(O(z.hash || z.filename) ? "▼ Show less" : `▶ View all (${z.loaded_by.length})`), 9, Nl)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    z.size_mb ? (s(), o("div", Ul, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Pl, n(z.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    z.has_category_mismatch ? (s(), o("div", Bl, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Ol, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, n(z.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, n((ee = z.expected_categories) == null ? void 0 : ee[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  z.status !== "available" ? (s(), o("div", Fl, [
                    z.status === "downloadable" ? (s(), S(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (Y) => d("resolve"))
                    }, {
                      default: i(() => [...x[14] || (x[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : z.status === "category_mismatch" && z.file_path ? (s(), S(re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => F(z.file_path)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : z.status !== "path_mismatch" ? (s(), S(re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (Y) => d("resolve"))
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : c("", !0)
                  ])) : c("", !0)
                ]);
              }), 128))
            ]),
            e("section", Vl, [
              g(Pt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + n(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Al, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(G, null, se(m.value.nodes, (z) => (s(), o("div", {
                key: z.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", z.status === "installed" ? "installed" : "missing"])
                }, n(z.status === "installed" ? "✓" : "✕"), 3),
                e("span", Wl, n(z.name), 1),
                z.version ? (s(), o("span", Gl, "v" + n(z.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(re, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (z) => d("close"))
          }, {
            default: i(() => [...x[17] || (x[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (s(), S(re, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...x[18] || (x[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(it, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (z) => k.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              w(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              w(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              w(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hl = /* @__PURE__ */ Q(jl, [["__scopeId", "data-v-668728e6"]]), ke = ys({
  items: [],
  status: "idle"
});
let tt = null;
function $s() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Zt(t) {
  return ke.items.find((r) => r.id === t);
}
async function bt() {
  if (ke.status === "downloading") return;
  const t = ke.items.find((r) => r.status === "queued");
  if (!t) {
    ke.status = "idle";
    return;
  }
  ke.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Kl(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    ke.status = "idle", bt();
  }
}
async function Kl(t) {
  return new Promise((r, a) => {
    tt && (tt.close(), tt = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    tt = p;
    let v = Date.now(), y = 0, m = !1;
    p.onmessage = (l) => {
      try {
        const u = JSON.parse(l.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), h = (b - v) / 1e3;
            if (h > 0.5) {
              const k = t.downloaded - y;
              if (t.speed = k / h, v = b, y = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), tt = null, r();
            break;
          case "error":
            m = !0, p.close(), tt = null, a(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), tt = null, m || a(new Error("Connection lost"));
    };
  });
}
async function ql() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const a of r.pending_downloads) {
      if (ke.items.some((p) => p.url === a.url && p.filename === a.filename))
        continue;
      const d = {
        id: $s(),
        workflow: a.workflow,
        filename: a.filename,
        url: a.url,
        targetPath: a.target_path,
        size: a.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ke.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Ft() {
  function t(f) {
    for (const R of f) {
      if (ke.items.some(
        (B) => B.url === R.url && B.targetPath === R.targetPath && ["queued", "downloading", "paused", "completed"].includes(B.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${R.filename}`);
        continue;
      }
      const I = {
        id: $s(),
        workflow: R.workflow,
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath,
        size: R.size || 0,
        type: R.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ke.items.push(I);
    }
    ke.status === "idle" && bt();
  }
  async function r(f) {
    const R = Zt(f);
    if (R) {
      if (R.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(R.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        tt && (tt.close(), tt = null), R.status = "failed", R.error = "Cancelled by user", ke.status = "idle", bt();
      } else if (R.status === "queued") {
        const O = ke.items.findIndex((I) => I.id === f);
        O >= 0 && ke.items.splice(O, 1);
      }
    }
  }
  function a(f) {
    const R = Zt(f);
    !R || R.status !== "failed" || (R.status = "queued", R.error = void 0, R.progress = 0, R.downloaded = 0, ke.status === "idle" && bt());
  }
  function d(f) {
    const R = Zt(f);
    !R || R.status !== "paused" || (R.status = "queued", ke.status === "idle" && bt());
  }
  function p() {
    const f = ke.items.filter((R) => R.status === "paused");
    for (const R of f)
      R.status = "queued";
    ke.status === "idle" && bt();
  }
  function v(f) {
    const R = ke.items.findIndex((O) => O.id === f);
    R >= 0 && ["completed", "failed", "paused"].includes(ke.items[R].status) && ke.items.splice(R, 1);
  }
  function y() {
    ke.items = ke.items.filter((f) => f.status !== "completed");
  }
  function m() {
    ke.items = ke.items.filter((f) => f.status !== "failed");
  }
  const l = U(
    () => ke.items.find((f) => f.status === "downloading")
  ), u = U(
    () => ke.items.filter((f) => f.status === "queued")
  ), b = U(
    () => ke.items.filter((f) => f.status === "completed")
  ), h = U(
    () => ke.items.filter((f) => f.status === "failed")
  ), k = U(
    () => ke.items.filter((f) => f.status === "paused")
  ), C = U(() => ke.items.length > 0), L = U(
    () => ke.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), $ = U(
    () => ke.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Xs(ke),
    // Computed
    currentDownload: l,
    queuedItems: u,
    completedItems: b,
    failedItems: h,
    pausedItems: k,
    hasItems: C,
    activeCount: L,
    hasPaused: $,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: a,
    resumeDownload: d,
    resumeAllPaused: p,
    removeItem: v,
    clearCompleted: y,
    clearFailed: m,
    loadPendingDownloads: ql
  };
}
function Cs() {
  const t = _(null), r = _(null), a = _([]), d = _([]), p = _(!1), v = _(null);
  async function y(R, O) {
    var B;
    if (!((B = window.app) != null && B.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(R, O);
    if (!I.ok) {
      const W = await I.json().catch(() => ({})), F = W.error || W.message || `Request failed: ${I.status}`;
      throw new Error(F);
    }
    return I.json();
  }
  async function m(R) {
    p.value = !0, v.value = null;
    try {
      let O;
      return Lt() && (O = await ye.analyzeWorkflow(R)), t.value = O, O;
    } catch (O) {
      const I = O instanceof Error ? O.message : "Unknown error occurred";
      throw v.value = I, O;
    } finally {
      p.value = !1;
    }
  }
  async function l(R, O, I, B) {
    p.value = !0, v.value = null;
    try {
      let W;
      return Lt() && (W = await ye.applyResolution(R, O, I)), r.value = W, W;
    } catch (W) {
      const F = W instanceof Error ? W.message : "Unknown error occurred";
      throw v.value = F, W;
    } finally {
      p.value = !1;
    }
  }
  async function u(R, O = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Lt() && (I = await ye.searchNodes(R, O)), a.value = I.results, I.results;
    } catch (I) {
      const B = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = B, I;
    } finally {
      p.value = !1;
    }
  }
  async function b(R, O = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Lt() && (I = await ye.searchModels(R, O)), d.value = I.results, I.results;
    } catch (I) {
      const B = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = B, I;
    } finally {
      p.value = !1;
    }
  }
  const h = ys({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function C(R) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Lt()) {
        h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
        for (let O = 0; O < h.nodesToInstall.length; O++)
          h.nodeInstallProgress.currentNode = h.nodesToInstall[O], h.nodeInstallProgress.currentIndex = O, await new Promise((I) => setTimeout(I, 500)), h.nodeInstallProgress.completedNodes.push({
            node_id: h.nodesToInstall[O],
            success: !0
          });
        return h.nodesInstalled = h.nodesToInstall, h.needsRestart = h.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: h.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await L(R);
    } catch (O) {
      const I = O instanceof Error ? O.message : "Failed to install nodes";
      throw h.installError = I, O;
    }
  }
  async function L(R) {
    var I;
    const O = await y(
      `/v2/comfygit/workflow/${R}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: h.nodesToInstall
        })
      }
    );
    if (h.nodeInstallProgress) {
      h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
      const B = new Map(((I = O.failed) == null ? void 0 : I.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < h.nodesToInstall.length; W++) {
        const F = h.nodesToInstall[W], N = B.get(F);
        h.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !N,
          error: N
        });
      }
    }
    return h.nodesInstalled = O.nodes_installed, h.needsRestart = O.nodes_installed.length > 0, O.failed && O.failed.length > 0 && (h.installError = `${O.failed.length} package(s) failed to install`), O;
  }
  async function $(R, O, I) {
    k(), h.phase = "resolving", v.value = null;
    {
      const B = await ye.applyResolution(R, O, I);
      r.value = B, h.nodesToInstall = B.nodes_to_install, h.phase = "complete";
      return;
    }
  }
  function f(R, O) {
    const { addToQueue: I } = Ft(), B = O.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: R,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return B.length > 0 && I(B), B.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: a,
    modelSearchResults: d,
    isLoading: p,
    error: v,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: $,
    installNodes: C,
    searchNodes: u,
    searchModels: b,
    resetProgress: k,
    queueModelDownloads: f
  };
}
const Yl = { class: "resolution-stepper" }, Xl = { class: "stepper-header" }, Ql = ["onClick"], Zl = {
  key: 0,
  class: "step-icon"
}, Jl = {
  key: 1,
  class: "step-number"
}, ei = { class: "step-label" }, ti = {
  key: 0,
  class: "step-connector"
}, si = { class: "stepper-content" }, oi = /* @__PURE__ */ X({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p(u) {
      var b;
      if ((b = a.stepStats) != null && b[u]) {
        const h = a.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return a.completedSteps.includes(u);
    }
    function v(u) {
      var b;
      if ((b = a.stepStats) != null && b[u]) {
        const h = a.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function y(u) {
      return p(u) ? "state-complete" : v(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function l(u) {
      d("step-change", u);
    }
    return (u, b) => (s(), o("div", Yl, [
      e("div", Xl, [
        (s(!0), o(G, null, se(t.steps, (h, k) => (s(), o("div", {
          key: h.id,
          class: le(["step", {
            active: t.currentStep === h.id,
            completed: p(h.id),
            "in-progress": v(h.id),
            disabled: m(h.id)
          }]),
          onClick: (C) => l(h.id)
        }, [
          e("div", {
            class: le(["step-indicator", y(h.id)])
          }, [
            p(h.id) ? (s(), o("span", Zl, "✓")) : (s(), o("span", Jl, n(k + 1), 1))
          ], 2),
          e("div", ei, n(h.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", ti)) : c("", !0)
        ], 10, Ql))), 128))
      ]),
      e("div", si, [
        ge(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ai = /* @__PURE__ */ Q(oi, [["__scopeId", "data-v-2a7b3af8"]]), ni = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = U(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), d = U(() => `confidence-${a.value}`), p = U(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : a.value.charAt(0).toUpperCase() + a.value.slice(1));
    return (v, y) => (s(), o("span", {
      class: le(["confidence-badge", d.value, t.size])
    }, n(p.value), 3));
  }
}), Kt = /* @__PURE__ */ Q(ni, [["__scopeId", "data-v-17ec4b80"]]), li = { class: "node-info" }, ii = { class: "node-info-text" }, ri = { class: "item-body" }, di = {
  key: 0,
  class: "resolved-state"
}, ci = {
  key: 1,
  class: "multiple-options"
}, ui = { class: "options-list" }, mi = ["onClick"], vi = ["name", "value", "checked", "onChange"], fi = { class: "option-content" }, gi = { class: "option-header" }, pi = { class: "option-package-id" }, hi = {
  key: 0,
  class: "option-title"
}, yi = { class: "option-meta" }, wi = {
  key: 0,
  class: "installed-badge"
}, ki = { class: "action-buttons" }, bi = {
  key: 2,
  class: "unresolved"
}, _i = {
  key: 0,
  class: "searching-state"
}, $i = { class: "options-list" }, Ci = ["onClick"], xi = ["name", "value"], Si = { class: "option-content" }, Ii = { class: "option-header" }, Ei = { class: "option-package-id" }, Mi = {
  key: 0,
  class: "option-description"
}, zi = { class: "option-meta" }, Li = {
  key: 0,
  class: "installed-badge"
}, Di = {
  key: 2,
  class: "unresolved-message"
}, Ri = { class: "action-buttons" }, Ti = /* @__PURE__ */ X({
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
  setup(t, { emit: r }) {
    const a = t, d = r;
    function p(l, u = 80) {
      return l.length <= u ? l : l.slice(0, u - 3) + "...";
    }
    const v = U(() => !!a.choice);
    U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.package_id;
    });
    const y = U(() => {
      switch (a.status) {
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
    function m(l) {
      d("option-selected", l);
    }
    return (l, u) => (s(), o("div", {
      class: le(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", li, [
        e("span", ii, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", y.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", ri, [
        v.value ? (s(), o("div", di, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ci, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ui, [
            (s(!0), o(G, null, se(t.options, (b, h) => (s(), o("label", {
              key: b.package_id,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => m(h)
              }, null, 40, vi),
              e("div", fi, [
                e("div", gi, [
                  e("span", pi, n(b.package_id), 1),
                  g(Kt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", hi, n(b.title), 1)) : c("", !0),
                e("div", yi, [
                  b.is_installed ? (s(), o("span", wi, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, mi))), 128))
          ]),
          e("div", ki, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", bi, [
          t.isSearching ? (s(), o("div", _i, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(G, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", $i, [
              (s(!0), o(G, null, se(t.searchResults.slice(0, 5), (b, h) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, xi),
                e("div", Si, [
                  e("div", Ii, [
                    e("span", Ei, n(b.package_id), 1),
                    g(Kt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", Mi, n(p(b.description)), 1)) : c("", !0),
                  e("div", zi, [
                    b.is_installed ? (s(), o("span", Li, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, Ci))), 128))
            ])
          ], 64)) : (s(), o("div", Di, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ri, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => {
                var b;
                return [
                  w(n((b = t.searchResults) != null && b.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...u[16] || (u[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[17] || (u[17] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ni = /* @__PURE__ */ Q(Ti, [["__scopeId", "data-v-c2997d1d"]]), Ui = { class: "item-navigator" }, Pi = { class: "nav-item-info" }, Bi = ["title"], Oi = { class: "nav-controls" }, Fi = { class: "nav-arrows" }, Vi = ["disabled"], Ai = ["disabled"], Wi = { class: "nav-position" }, Gi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const a = r;
    return (d, p) => (s(), o("div", Ui, [
      e("div", Pi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, n(t.itemName), 9, Bi)
      ]),
      e("div", Oi, [
        e("div", Fi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => a("prev")),
            title: "Previous item"
          }, " ← ", 8, Vi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => a("next")),
            title: "Next item"
          }, " → ", 8, Ai)
        ]),
        e("span", Wi, n(t.currentIndex + 1) + "/" + n(t.totalItems), 1)
      ])
    ]));
  }
}), xs = /* @__PURE__ */ Q(Gi, [["__scopeId", "data-v-74af7920"]]), ji = ["type", "value", "placeholder", "disabled"], Hi = {
  key: 0,
  class: "base-input-error"
}, Ki = /* @__PURE__ */ X({
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
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: le(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          a[1] || (a[1] = mt((d) => r.$emit("enter"), ["enter"])),
          a[2] || (a[2] = mt((d) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ji),
      t.error ? (s(), o("span", Hi, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ Q(Ki, [["__scopeId", "data-v-9ba02cdc"]]), qi = { class: "node-resolution-step" }, Yi = {
  key: 0,
  class: "auto-resolved-section"
}, Xi = { class: "section-header" }, Qi = { class: "stat-badge" }, Zi = { class: "resolved-packages-list" }, Ji = { class: "package-info" }, er = { class: "package-id" }, tr = { class: "node-count" }, sr = { class: "package-actions" }, or = {
  key: 0,
  class: "status-badge install"
}, ar = {
  key: 1,
  class: "status-badge skip"
}, nr = ["onClick"], lr = {
  key: 1,
  class: "section-divider"
}, ir = { class: "step-header" }, rr = { class: "stat-badge" }, dr = {
  key: 1,
  class: "step-body"
}, cr = {
  key: 3,
  class: "empty-state"
}, ur = { class: "node-modal-body" }, mr = { class: "node-search-results-container" }, vr = {
  key: 0,
  class: "node-search-results"
}, fr = ["onClick"], gr = { class: "node-result-header" }, pr = { class: "node-result-package-id" }, hr = {
  key: 0,
  class: "node-result-description"
}, yr = {
  key: 1,
  class: "node-empty-state"
}, wr = {
  key: 2,
  class: "node-empty-state"
}, kr = {
  key: 3,
  class: "node-empty-state"
}, br = { class: "node-manual-entry-modal" }, _r = { class: "node-modal-body" }, $r = { class: "node-modal-actions" }, Cr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const a = t, d = r, { searchNodes: p } = Cs(), v = _(0), y = _(!1), m = _(!1), l = _(""), u = _(""), b = _([]), h = _(!1), k = _(/* @__PURE__ */ new Map()), C = _(/* @__PURE__ */ new Set()), L = _(!1);
    function $() {
      L.value && P(), L.value = !1;
    }
    const f = U(() => a.nodes[v.value]), R = U(() => a.nodes.filter((oe) => a.nodeChoices.has(oe.node_type)).length), O = U(() => f.value ? k.value.get(f.value.node_type) || [] : []), I = U(() => f.value ? C.value.has(f.value.node_type) : !1);
    qt(f, async (oe) => {
      var A;
      oe && ((A = oe.options) != null && A.length || k.value.has(oe.node_type) || C.value.has(oe.node_type) || a.nodeChoices.has(oe.node_type) || await B(oe.node_type));
    }, { immediate: !0 });
    async function B(oe) {
      C.value.add(oe);
      try {
        const A = await p(oe, 5);
        k.value.set(oe, A);
      } catch {
        k.value.set(oe, []);
      } finally {
        C.value.delete(oe);
      }
    }
    const W = U(() => a.autoResolvedPackages.filter((oe) => !a.skippedPackages.has(oe.package_id)).length);
    function F(oe) {
      return a.skippedPackages.has(oe);
    }
    function N(oe) {
      d("package-skip", oe);
    }
    const D = U(() => {
      var A;
      if (!f.value) return "not-found";
      const oe = a.nodeChoices.get(f.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = f.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var A;
      if (!f.value) return;
      const oe = a.nodeChoices.get(f.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return oe.package_id ? `→ ${oe.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = f.value.options) != null && A.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function z(oe) {
      oe >= 0 && oe < a.nodes.length && (v.value = oe);
    }
    function ee() {
      f.value && d("mark-optional", f.value.node_type);
    }
    function Y() {
      f.value && d("skip", f.value.node_type);
    }
    function ae(oe) {
      f.value && d("option-selected", f.value.node_type, oe);
    }
    function me() {
      f.value && d("clear-choice", f.value.node_type);
    }
    function de() {
      f.value && (l.value = f.value.node_type, b.value = O.value, y.value = !0, Ee(l.value));
    }
    function J() {
      u.value = "", m.value = !0;
    }
    function P() {
      y.value = !1, l.value = "", b.value = [];
    }
    function E() {
      m.value = !1, u.value = "";
    }
    let ne = null;
    function q() {
      ne && clearTimeout(ne), ne = setTimeout(() => {
        Ee(l.value);
      }, 300);
    }
    async function Ee(oe) {
      if (!oe.trim()) {
        b.value = [];
        return;
      }
      h.value = !0;
      try {
        b.value = await p(oe, 10);
      } catch {
        b.value = [];
      } finally {
        h.value = !1;
      }
    }
    function $e(oe) {
      f.value && (d("manual-entry", f.value.node_type, oe.package_id), P());
    }
    function Ne(oe) {
      f.value && d("manual-entry", f.value.node_type, oe.package_id);
    }
    function Ke() {
      !f.value || !u.value.trim() || (d("manual-entry", f.value.node_type, u.value.trim()), E());
    }
    return (oe, A) => {
      var Z, be;
      return s(), o("div", qi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Yi, [
          e("div", Xi, [
            A[6] || (A[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Qi, n(W.value) + "/" + n(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Zi, [
            (s(!0), o(G, null, se(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ji, [
                e("code", er, n(ie.package_id), 1),
                e("span", tr, n(ie.node_types_count) + " node type" + n(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", sr, [
                F(ie.package_id) ? (s(), o("span", ar, " SKIPPED ")) : (s(), o("span", or, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (vt) => N(ie.package_id)
                }, n(F(ie.package_id) ? "Include" : "Skip"), 9, nr)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", lr)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(G, { key: 2 }, [
          e("div", ir, [
            A[7] || (A[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", rr, n(R.value) + "/" + n(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), S(xs, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: A[0] || (A[0] = (ie) => z(v.value - 1)),
            onNext: A[1] || (A[1] = (ie) => z(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          f.value ? (s(), o("div", dr, [
            g(Ni, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Z = f.value.options) != null && Z.length),
              options: f.value.options,
              choice: (be = t.nodeChoices) == null ? void 0 : be.get(f.value.node_type),
              status: D.value,
              "status-label": x.value,
              "search-results": O.value,
              "is-searching": I.value,
              onMarkOptional: ee,
              onSkip: Y,
              onManualEntry: J,
              onSearch: de,
              onOptionSelected: ae,
              onClearChoice: me,
              onSearchResultSelected: Ne
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", cr, [...A[8] || (A[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), S(Pe, { to: "body" }, [
          y.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: A[4] || (A[4] = ze((ie) => L.value = !0, ["self"])),
            onMouseup: ze($, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: A[3] || (A[3] = (ie) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                A[9] || (A[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", ur, [
                g(Ye, {
                  modelValue: l.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (ie) => l.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                e("div", mr, [
                  b.value.length > 0 ? (s(), o("div", vr, [
                    (s(!0), o(G, null, se(b.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (vt) => $e(ie)
                    }, [
                      e("div", gr, [
                        e("code", pr, n(ie.package_id), 1),
                        ie.match_confidence ? (s(), S(Kt, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      ie.description ? (s(), o("div", hr, n(ie.description), 1)) : c("", !0)
                    ], 8, fr))), 128))
                  ])) : h.value ? (s(), o("div", yr, "Searching...")) : l.value ? (s(), o("div", wr, 'No packages found matching "' + n(l.value) + '"', 1)) : (s(), o("div", kr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), S(Pe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(E, ["self"])
          }, [
            e("div", br, [
              e("div", { class: "node-modal-header" }, [
                A[10] || (A[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", _r, [
                g(Ye, {
                  modelValue: u.value,
                  "onUpdate:modelValue": A[5] || (A[5] = (ie) => u.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", $r, [
                  g(re, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: i(() => [...A[11] || (A[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: Ke
                  }, {
                    default: i(() => [...A[12] || (A[12] = [
                      w(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : c("", !0)
        ]))
      ]);
    };
  }
}), xr = /* @__PURE__ */ Q(Cr, [["__scopeId", "data-v-281581bc"]]), Sr = { class: "node-info" }, Ir = { class: "node-info-text" }, Er = { class: "item-body" }, Mr = {
  key: 0,
  class: "resolved-state"
}, zr = {
  key: 1,
  class: "multiple-options"
}, Lr = { class: "options-list" }, Dr = ["onClick"], Rr = ["name", "value", "checked", "onChange"], Tr = { class: "option-content" }, Nr = { class: "option-header" }, Ur = { class: "option-filename" }, Pr = { class: "option-meta" }, Br = { class: "option-size" }, Or = { class: "option-category" }, Fr = { class: "option-path" }, Vr = { class: "action-buttons" }, Ar = {
  key: 2,
  class: "unresolved"
}, Wr = { class: "action-buttons" }, Gr = /* @__PURE__ */ X({
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
  setup(t, { emit: r }) {
    const a = t, d = r, p = U(() => !!a.choice);
    U(() => {
      var l;
      return (l = a.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l, u;
      return ((u = (l = a.choice) == null ? void 0 : l.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const v = U(() => {
      switch (a.status) {
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
    function y(l) {
      d("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const u = l / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, u) => (s(), o("div", {
      class: le(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Sr, [
        e("span", Ir, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, n(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", v.value])
        }, n(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Er, [
        p.value ? (s(), o("div", Mr, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", zr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Lr, [
            (s(!0), o(G, null, se(t.options, (b, h) => (s(), o("label", {
              key: b.model.hash,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (k) => y(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (k) => y(h)
              }, null, 40, Rr),
              e("div", Tr, [
                e("div", Nr, [
                  e("span", Ur, n(b.model.filename), 1),
                  g(Kt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Pr, [
                  e("span", Br, n(m(b.model.size)), 1),
                  e("span", Or, n(b.model.category), 1)
                ]),
                e("div", Fr, n(b.model.relative_path), 1)
              ])
            ], 10, Dr))), 128))
          ]),
          e("div", Vr, [
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => d("search"))
            }, {
              default: i(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ar, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Wr, [
            g(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => d("search"))
            }, {
              default: i(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => d("download-url"))
            }, {
              default: i(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...u[15] || (u[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), jr = /* @__PURE__ */ Q(Gr, [["__scopeId", "data-v-8a82fefa"]]), Hr = { class: "model-resolution-step" }, Kr = { class: "step-header" }, qr = { class: "step-info" }, Yr = { class: "step-title" }, Xr = { class: "step-description" }, Qr = { class: "stat-badge" }, Zr = {
  key: 1,
  class: "step-body"
}, Jr = {
  key: 2,
  class: "empty-state"
}, ed = { class: "model-search-modal" }, td = { class: "model-modal-body" }, sd = {
  key: 0,
  class: "model-search-results"
}, od = ["onClick"], ad = { class: "model-result-header" }, nd = { class: "model-result-filename" }, ld = { class: "model-result-meta" }, id = { class: "model-result-category" }, rd = { class: "model-result-size" }, dd = {
  key: 0,
  class: "model-result-path"
}, cd = {
  key: 1,
  class: "model-no-results"
}, ud = {
  key: 2,
  class: "model-searching"
}, md = { class: "model-download-url-modal" }, vd = { class: "model-modal-body" }, fd = { class: "model-input-group" }, gd = { class: "model-input-group" }, pd = { class: "model-modal-actions" }, hd = /* @__PURE__ */ X({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
    const a = {
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
    function d(P) {
      var E;
      return P && ((E = a[P]) == null ? void 0 : E[0]) || null;
    }
    const p = t, v = r, y = _(0), m = _(!1), l = _(!1), u = _(""), b = _(""), h = _(""), k = _([]), C = _(!1), L = U(() => p.models[y.value]), $ = U(() => p.models.some((P) => P.is_download_intent)), f = U(() => p.models.filter(
      (P) => p.modelChoices.has(P.filename) || P.is_download_intent
    ).length), R = U(() => {
      var E;
      if (!L.value) return "";
      const P = d((E = L.value.reference) == null ? void 0 : E.node_type);
      return P ? `${P}/${L.value.filename}` : "";
    }), O = U(() => {
      var E;
      if (!L.value) return "not-found";
      const P = p.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
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
      return L.value.is_download_intent ? "download" : (E = L.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), I = U(() => {
      var E, ne;
      if (!L.value) return;
      const P = p.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (E = P.selected_model) != null && E.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (ne = L.value.options) != null && ne.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function B(P) {
      P >= 0 && P < p.models.length && (y.value = P);
    }
    function W() {
      L.value && v("mark-optional", L.value.filename);
    }
    function F() {
      L.value && v("skip", L.value.filename);
    }
    function N(P) {
      L.value && v("option-selected", L.value.filename, P);
    }
    function D() {
      L.value && v("clear-choice", L.value.filename);
    }
    function x() {
      L.value && (u.value = L.value.filename, m.value = !0);
    }
    function z() {
      L.value && (b.value = L.value.download_source || "", h.value = L.value.target_path || R.value, l.value = !0);
    }
    function ee() {
      m.value = !1, u.value = "", k.value = [];
    }
    function Y() {
      l.value = !1, b.value = "", h.value = "";
    }
    function ae() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function me(P) {
      L.value && ee();
    }
    function de() {
      !L.value || !b.value.trim() || (v("download-url", L.value.filename, b.value.trim(), h.value.trim() || void 0), Y());
    }
    function J(P) {
      if (!P) return "Unknown";
      const E = P / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, E) => {
      var ne, q, Ee;
      return s(), o("div", Hr, [
        e("div", Kr, [
          e("div", qr, [
            e("h3", Yr, n($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Xr, n($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Qr, n(f.value) + "/" + n(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), S(xs, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": y.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = ($e) => B(y.value - 1)),
          onNext: E[1] || (E[1] = ($e) => B(y.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        L.value ? (s(), o("div", Zr, [
          g(jr, {
            filename: L.value.filename,
            "node-type": ((ne = L.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((q = L.value.options) != null && q.length),
            options: L.value.options,
            choice: (Ee = t.modelChoices) == null ? void 0 : Ee.get(L.value.filename),
            status: O.value,
            "status-label": I.value,
            onMarkOptional: W,
            onSkip: F,
            onDownloadUrl: z,
            onSearch: x,
            onOptionSelected: N,
            onClearChoice: D
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Jr, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Pe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(ee, ["self"])
          }, [
            e("div", ed, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", td, [
                g(Ye, {
                  modelValue: u.value,
                  "onUpdate:modelValue": E[2] || (E[2] = ($e) => u.value = $e),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", sd, [
                  (s(!0), o(G, null, se(k.value, ($e) => (s(), o("div", {
                    key: $e.hash,
                    class: "model-search-result-item",
                    onClick: (Ne) => me()
                  }, [
                    e("div", ad, [
                      e("code", nd, n($e.filename), 1)
                    ]),
                    e("div", ld, [
                      e("span", id, n($e.category), 1),
                      e("span", rd, n(J($e.size)), 1)
                    ]),
                    $e.relative_path ? (s(), o("div", dd, n($e.relative_path), 1)) : c("", !0)
                  ], 8, od))), 128))
                ])) : u.value && !C.value ? (s(), o("div", cd, ' No models found matching "' + n(u.value) + '" ', 1)) : c("", !0),
                C.value ? (s(), o("div", ud, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Pe, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(Y, ["self"])
          }, [
            e("div", md, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              e("div", vd, [
                e("div", fd, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Ye, {
                    modelValue: b.value,
                    "onUpdate:modelValue": E[3] || (E[3] = ($e) => b.value = $e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", gd, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Ye, {
                    modelValue: h.value,
                    "onUpdate:modelValue": E[4] || (E[4] = ($e) => h.value = $e),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", pd, [
                  g(re, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: i(() => [...E[10] || (E[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !b.value.trim() || !h.value.trim(),
                    onClick: de
                  }, {
                    default: i(() => [...E[11] || (E[11] = [
                      w(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : c("", !0)
        ]))
      ]);
    };
  }
}), yd = /* @__PURE__ */ Q(hd, [["__scopeId", "data-v-c6acbada"]]), wd = { class: "applying-step" }, kd = {
  key: 0,
  class: "phase-content"
}, bd = {
  key: 1,
  class: "phase-content"
}, _d = { class: "phase-description" }, $d = { class: "overall-progress" }, Cd = { class: "progress-bar" }, xd = { class: "progress-label" }, Sd = { class: "install-list" }, Id = { class: "install-icon" }, Ed = { key: 0 }, Md = {
  key: 1,
  class: "spinner"
}, zd = { key: 2 }, Ld = { key: 3 }, Dd = {
  key: 0,
  class: "install-error"
}, Rd = {
  key: 2,
  class: "phase-content"
}, Td = { class: "phase-header" }, Nd = { class: "phase-title" }, Ud = { class: "completion-summary" }, Pd = {
  key: 0,
  class: "summary-item success"
}, Bd = { class: "summary-text" }, Od = {
  key: 1,
  class: "summary-item error"
}, Fd = { class: "summary-text" }, Vd = {
  key: 2,
  class: "failed-list"
}, Ad = { class: "failed-node-id" }, Wd = { class: "failed-error" }, Gd = {
  key: 4,
  class: "summary-item success"
}, jd = {
  key: 5,
  class: "restart-prompt"
}, Hd = {
  key: 3,
  class: "phase-content error"
}, Kd = { class: "error-message" }, qd = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, a = U(() => {
      var u, b;
      const m = ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || r.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), d = U(() => {
      var m;
      return ((m = r.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), p = U(() => d.value.length > 0);
    function v(m, l) {
      var b, h;
      const u = (b = r.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((k) => k.node_id === m);
      return u ? u.success ? "complete" : "failed" : ((h = r.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === l ? "installing" : "pending";
    }
    function y(m) {
      var l, u;
      return (u = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : u.error;
    }
    return (m, l) => {
      var u, b, h, k;
      return s(), o("div", wd, [
        t.progress.phase === "resolving" ? (s(), o("div", kd, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", bd, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", _d, " Installing " + n((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + n(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", $d, [
            e("div", Cd, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${a.value}%` })
              }, null, 4)
            ]),
            e("span", xd, n(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + n(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Sd, [
            (s(!0), o(G, null, se(t.progress.nodesToInstall, (C, L) => (s(), o("div", {
              key: C,
              class: le(["install-item", v(C, L)])
            }, [
              e("span", Id, [
                v(C, L) === "pending" ? (s(), o("span", Ed, "○")) : v(C, L) === "installing" ? (s(), o("span", Md, "◌")) : v(C, L) === "complete" ? (s(), o("span", zd, "✓")) : v(C, L) === "failed" ? (s(), o("span", Ld, "✗")) : c("", !0)
              ]),
              e("code", null, n(C), 1),
              y(C) ? (s(), o("span", Dd, n(y(C)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Rd, [
          e("div", Td, [
            e("span", {
              class: le(["phase-icon", p.value ? "warning" : "success"])
            }, n(p.value ? "⚠" : "✓"), 3),
            e("h3", Nd, n(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Ud, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Pd, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Bd, n(t.progress.nodesInstalled.length) + " node package" + n(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Od, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Fd, n(d.value.length) + " package" + n(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", Vd, [
              (s(!0), o(G, null, se(d.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", Ad, n(C.node_id), 1),
                e("span", Wd, n(C.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (C) => m.$emit("retry-failed"))
            }, " Retry Failed (" + n(d.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (s(), o("div", Gd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", jd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (C) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Hd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Kd, n(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), Yd = /* @__PURE__ */ Q(qd, [["__scopeId", "data-v-5efaae58"]]), Xd = {
  key: 0,
  class: "loading-state"
}, Qd = {
  key: 1,
  class: "wizard-content"
}, Zd = {
  key: 0,
  class: "step-content"
}, Jd = { class: "analysis-summary" }, ec = { class: "analysis-header" }, tc = { class: "summary-description" }, sc = { class: "stats-grid" }, oc = { class: "stat-card" }, ac = { class: "stat-items" }, nc = {
  key: 0,
  class: "stat-item success"
}, lc = { class: "stat-count" }, ic = {
  key: 1,
  class: "stat-item info"
}, rc = { class: "stat-count" }, dc = {
  key: 2,
  class: "stat-item warning"
}, cc = { class: "stat-count" }, uc = {
  key: 3,
  class: "stat-item error"
}, mc = { class: "stat-count" }, vc = { class: "stat-card" }, fc = { class: "stat-items" }, gc = { class: "stat-item success" }, pc = { class: "stat-count" }, hc = {
  key: 0,
  class: "stat-item info"
}, yc = { class: "stat-count" }, wc = {
  key: 1,
  class: "stat-item warning"
}, kc = { class: "stat-count" }, bc = {
  key: 2,
  class: "stat-item warning"
}, _c = { class: "stat-count" }, $c = {
  key: 3,
  class: "stat-item error"
}, Cc = { class: "stat-count" }, xc = {
  key: 0,
  class: "status-message warning"
}, Sc = { class: "status-text" }, Ic = {
  key: 1,
  class: "status-message info"
}, Ec = { class: "status-text" }, Mc = {
  key: 2,
  class: "status-message info"
}, zc = { class: "status-text" }, Lc = {
  key: 3,
  class: "status-message warning"
}, Dc = { class: "status-text" }, Rc = {
  key: 4,
  class: "status-message success"
}, Tc = {
  key: 5,
  class: "category-mismatch-section"
}, Nc = { class: "mismatch-list" }, Uc = { class: "mismatch-path" }, Pc = { class: "mismatch-target" }, Bc = {
  key: 3,
  class: "step-content"
}, Oc = { class: "review-summary" }, Fc = { class: "review-stats" }, Vc = { class: "review-stat" }, Ac = { class: "stat-value" }, Wc = { class: "review-stat" }, Gc = { class: "stat-value" }, jc = { class: "review-stat" }, Hc = { class: "stat-value" }, Kc = { class: "review-stat" }, qc = { class: "stat-value" }, Yc = {
  key: 0,
  class: "review-section"
}, Xc = { class: "section-title" }, Qc = { class: "review-items" }, Zc = { class: "item-name" }, Jc = { class: "item-choice" }, eu = {
  key: 0,
  class: "choice-badge install"
}, tu = {
  key: 1,
  class: "choice-badge skip"
}, su = {
  key: 1,
  class: "review-section"
}, ou = { class: "section-title" }, au = { class: "review-items" }, nu = { class: "item-name" }, lu = { class: "item-choice" }, iu = {
  key: 0,
  class: "choice-badge install"
}, ru = {
  key: 1,
  class: "choice-badge optional"
}, du = {
  key: 2,
  class: "choice-badge skip"
}, cu = {
  key: 1,
  class: "choice-badge pending"
}, uu = {
  key: 2,
  class: "review-section"
}, mu = { class: "section-title" }, vu = { class: "review-items" }, fu = { class: "item-name" }, gu = { class: "item-choice" }, pu = {
  key: 0,
  class: "choice-badge install"
}, hu = {
  key: 1,
  class: "choice-badge download"
}, yu = {
  key: 2,
  class: "choice-badge optional"
}, wu = {
  key: 3,
  class: "choice-badge skip"
}, ku = {
  key: 4,
  class: "choice-badge skip"
}, bu = {
  key: 1,
  class: "choice-badge download"
}, _u = {
  key: 2,
  class: "choice-badge pending"
}, $u = {
  key: 3,
  class: "no-choices"
}, Cu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const a = t, d = r, { analyzeWorkflow: p, applyResolution: v, installNodes: y, queueModelDownloads: m, progress: l, resetProgress: u } = Cs(), { loadPendingDownloads: b } = Ft(), { openFileLocation: h } = Te(), k = _(null), C = _(!1), L = _(!1), $ = _(null), f = _("analysis"), R = _([]), O = _(/* @__PURE__ */ new Map()), I = _(/* @__PURE__ */ new Map()), B = _(/* @__PURE__ */ new Set()), W = U(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (N.value || z.value) && j.push({ id: "nodes", label: "Nodes" }), (D.value || x.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), f.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), F = U(() => k.value ? k.value.stats.needs_user_input : !1), N = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), D = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = U(() => k.value ? k.value.stats.download_intents > 0 : !1), z = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), ee = U(() => k.value ? k.value.nodes.resolved.length : 0), Y = U(() => k.value ? k.value.models.resolved.filter((j) => j.has_category_mismatch) : []), ae = U(() => Y.value.length > 0), me = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((K) => !K.is_installed), T = /* @__PURE__ */ new Set();
      return j.filter((K) => T.has(K.package.package_id) ? !1 : (T.add(K.package.package_id), !0));
    }), de = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((K) => !K.is_installed), T = /* @__PURE__ */ new Map();
      for (const K of j) {
        const ve = T.get(K.package.package_id);
        ve ? ve.node_types_count++ : T.set(K.package.package_id, {
          package_id: K.package.package_id,
          title: K.package.title,
          node_types_count: 1
        });
      }
      return Array.from(T.values());
    }), J = U(() => me.value.filter((j) => !B.value.has(j.package.package_id))), P = U(() => k.value ? k.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), E = U(() => {
      if (!k.value) return [];
      const j = k.value.nodes.unresolved.map((K) => ({
        node_type: K.reference.node_type,
        reason: K.reason,
        is_unresolved: !0,
        options: void 0
      })), T = k.value.nodes.ambiguous.map((K) => ({
        node_type: K.reference.node_type,
        has_multiple_options: !0,
        options: K.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...j, ...T];
    }), ne = U(() => {
      if (!k.value) return [];
      const j = k.value.models.unresolved.map((K) => ({
        filename: K.reference.widget_value,
        reference: K.reference,
        reason: K.reason,
        is_unresolved: !0,
        options: void 0
      })), T = k.value.models.ambiguous.map((K) => ({
        filename: K.reference.widget_value,
        reference: K.reference,
        has_multiple_options: !0,
        options: K.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...j, ...T];
    }), q = U(() => {
      const j = ne.value, T = P.value.map((K) => ({
        filename: K.filename,
        reference: K.reference,
        is_download_intent: !0,
        resolved_model: K.resolved_model,
        download_source: K.download_source,
        target_path: K.target_path,
        options: void 0
      }));
      return [...j, ...T];
    }), Ee = U(() => {
      let j = J.value.length;
      for (const T of O.value.values())
        T.action === "install" && j++;
      for (const T of I.value.values())
        T.action === "select" && j++;
      return j;
    }), $e = U(() => {
      let j = 0;
      for (const T of I.value.values())
        T.action === "download" && j++;
      return j;
    }), Ne = U(() => {
      let j = 0;
      for (const T of O.value.values())
        T.action === "optional" && j++;
      for (const T of I.value.values())
        T.action === "optional" && j++;
      return j;
    }), Ke = U(() => {
      let j = B.value.size;
      for (const T of O.value.values())
        T.action === "skip" && j++;
      for (const T of I.value.values())
        T.action === "skip" && j++;
      for (const T of E.value)
        O.value.has(T.node_type) || j++;
      for (const T of ne.value)
        I.value.has(T.filename) || j++;
      return j;
    }), oe = U(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, N.value) {
        const T = E.value.length, K = E.value.filter(
          (ve) => O.value.has(ve.node_type)
        ).length;
        j.nodes = { resolved: K, total: T };
      }
      if (D.value || x.value) {
        const T = q.value.length, K = q.value.filter(
          (ve) => I.value.has(ve.filename) || ve.is_download_intent
        ).length;
        j.models = { resolved: K, total: T };
      }
      if (j.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const T = l.totalFiles || 1, K = l.completedFiles.length;
        j.applying = { resolved: K, total: T };
      }
      return j;
    });
    function A(j) {
      f.value = j;
    }
    function Z() {
      const j = W.value.findIndex((T) => T.id === f.value);
      j > 0 && (f.value = W.value[j - 1].id);
    }
    function be() {
      const j = W.value.findIndex((T) => T.id === f.value);
      j < W.value.length - 1 && (f.value = W.value[j + 1].id);
    }
    async function ie() {
      C.value = !0, $.value = null;
      try {
        k.value = await p(a.workflowName);
      } catch (j) {
        $.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function vt() {
      R.value.includes("analysis") || R.value.push("analysis"), N.value || z.value ? f.value = "nodes" : D.value || x.value ? f.value = "models" : f.value = "review";
    }
    function It(j) {
      O.value.set(j, { action: "optional" });
    }
    function Et(j) {
      O.value.set(j, { action: "skip" });
    }
    function _e(j, T) {
      var ve;
      const K = E.value.find((Re) => Re.node_type === j);
      (ve = K == null ? void 0 : K.options) != null && ve[T] && O.value.set(j, {
        action: "install",
        package_id: K.options[T].package_id
      });
    }
    function ct(j, T) {
      O.value.set(j, {
        action: "install",
        package_id: T
      });
    }
    function st(j) {
      O.value.delete(j);
    }
    function Ze(j) {
      B.value.has(j) ? B.value.delete(j) : B.value.add(j);
    }
    function Mt(j) {
      I.value.set(j, { action: "optional" });
    }
    function fe(j) {
      I.value.set(j, { action: "skip" });
    }
    function je(j, T) {
      var ve;
      const K = ne.value.find((Re) => Re.filename === j);
      (ve = K == null ? void 0 : K.options) != null && ve[T] && I.value.set(j, {
        action: "select",
        selected_model: K.options[T].model
      });
    }
    function H(j, T, K) {
      I.value.set(j, {
        action: "download",
        url: T,
        target_path: K
      });
    }
    function we(j) {
      I.value.delete(j);
    }
    async function xe(j) {
      try {
        await h(j);
      } catch (T) {
        $.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function kt() {
      var j;
      L.value = !0, $.value = null, u(), l.phase = "resolving", f.value = "applying";
      try {
        const T = await v(a.workflowName, O.value, I.value, B.value);
        T.models_to_download && T.models_to_download.length > 0 && m(a.workflowName, T.models_to_download);
        const K = [
          ...T.nodes_to_install || [],
          ...J.value.map((Re) => Re.package.package_id)
        ];
        l.nodesToInstall = [...new Set(K)], l.nodesToInstall.length > 0 && await y(a.workflowName), l.phase = "complete", await b();
        const ve = l.installError || ((j = l.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Re) => !Re.success));
        !l.needsRestart && !ve && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (T) {
        $.value = T instanceof Error ? T.message : "Failed to apply resolution", l.error = $.value, l.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    function ft() {
      d("refresh"), d("restart"), d("close");
    }
    async function Xt() {
      var T;
      const j = ((T = l.nodeInstallProgress) == null ? void 0 : T.completedNodes.filter((K) => !K.success).map((K) => K.node_id)) || [];
      if (j.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, l.nodesToInstall = j, l.nodesInstalled = [], l.installError = void 0;
        try {
          await y(a.workflowName), l.phase = "complete";
        } catch (K) {
          l.error = K instanceof Error ? K.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return De(ie), (j, T) => (s(), S(lt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: $.value || void 0,
      "fixed-height": !0,
      onClose: T[1] || (T[1] = (K) => d("close"))
    }, {
      body: i(() => [
        C.value && !k.value ? (s(), o("div", Xd, [...T[2] || (T[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Qd, [
          g(ai, {
            steps: W.value,
            "current-step": f.value,
            "completed-steps": R.value,
            "step-stats": oe.value,
            onStepChange: A
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", Zd, [
            e("div", Jd, [
              e("div", ec, [
                T[3] || (T[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", tc, " Found " + n(k.value.stats.total_nodes) + " nodes and " + n(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", sc, [
                e("div", oc, [
                  T[12] || (T[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", ac, [
                    ee.value > 0 ? (s(), o("div", nc, [
                      T[4] || (T[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", lc, n(ee.value), 1),
                      T[5] || (T[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", ic, [
                      T[6] || (T[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", rc, n(k.value.stats.packages_needing_installation), 1),
                      T[7] || (T[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", dc, [
                      T[8] || (T[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", cc, n(k.value.nodes.ambiguous.length), 1),
                      T[9] || (T[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", uc, [
                      T[10] || (T[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", mc, n(k.value.nodes.unresolved.length), 1),
                      T[11] || (T[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", vc, [
                  T[23] || (T[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", fc, [
                    e("div", gc, [
                      T[13] || (T[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", pc, n(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      T[14] || (T[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", hc, [
                      T[15] || (T[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", yc, n(k.value.stats.download_intents), 1),
                      T[16] || (T[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    ae.value ? (s(), o("div", wc, [
                      T[17] || (T[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", kc, n(Y.value.length), 1),
                      T[18] || (T[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", bc, [
                      T[19] || (T[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", _c, n(k.value.models.ambiguous.length), 1),
                      T[20] || (T[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", $c, [
                      T[21] || (T[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Cc, n(k.value.models.unresolved.length), 1),
                      T[22] || (T[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", xc, [
                T[24] || (T[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Sc, n(E.value.length + ne.value.length) + " items need your input", 1)
              ])) : z.value ? (s(), o("div", Ic, [
                T[25] || (T[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Ec, n(k.value.stats.packages_needing_installation) + " package" + n(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + n(k.value.stats.nodes_needing_installation) + " node type" + n(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + n(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", Mc, [
                T[26] || (T[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", zc, n(k.value.stats.download_intents) + " model" + n(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ae.value ? (s(), o("div", Lc, [
                T[27] || (T[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Dc, n(Y.value.length) + " model" + n(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Rc, [...T[28] || (T[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ae.value ? (s(), o("div", Tc, [
                T[31] || (T[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Nc, [
                  (s(!0), o(G, null, se(Y.value, (K) => {
                    var ve, Re;
                    return s(), o("div", {
                      key: K.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Uc, n(K.actual_category) + "/" + n((ve = K.model) == null ? void 0 : ve.filename), 1),
                      T[30] || (T[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Pc, n((Re = K.expected_categories) == null ? void 0 : Re[0]) + "/", 1),
                      K.file_path ? (s(), S(re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (ut) => xe(K.file_path)
                      }, {
                        default: i(() => [...T[29] || (T[29] = [
                          w(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]);
                  }), 128))
                ])
              ])) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "nodes" ? (s(), S(xr, {
            key: 1,
            nodes: E.value,
            "node-choices": O.value,
            "auto-resolved-packages": de.value,
            "skipped-packages": B.value,
            onMarkOptional: It,
            onSkip: Et,
            onOptionSelected: _e,
            onManualEntry: ct,
            onClearChoice: st,
            onPackageSkip: Ze
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          f.value === "models" ? (s(), S(yd, {
            key: 2,
            models: q.value,
            "model-choices": I.value,
            onMarkOptional: Mt,
            onSkip: fe,
            onOptionSelected: je,
            onDownloadUrl: H,
            onClearChoice: we
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          f.value === "review" ? (s(), o("div", Bc, [
            e("div", Oc, [
              T[36] || (T[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Fc, [
                e("div", Vc, [
                  e("span", Ac, n(Ee.value), 1),
                  T[32] || (T[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Wc, [
                  e("span", Gc, n($e.value), 1),
                  T[33] || (T[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", jc, [
                  e("span", Hc, n(Ne.value), 1),
                  T[34] || (T[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Kc, [
                  e("span", qc, n(Ke.value), 1),
                  T[35] || (T[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              de.value.length > 0 ? (s(), o("div", Yc, [
                e("h4", Xc, "Node Packages (" + n(de.value.length) + ")", 1),
                e("div", Qc, [
                  (s(!0), o(G, null, se(de.value, (K) => (s(), o("div", {
                    key: K.package_id,
                    class: "review-item"
                  }, [
                    e("code", Zc, n(K.package_id), 1),
                    e("div", Jc, [
                      B.value.has(K.package_id) ? (s(), o("span", tu, "Skipped")) : (s(), o("span", eu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              E.value.length > 0 ? (s(), o("div", su, [
                e("h4", ou, "Node Choices (" + n(E.value.length) + ")", 1),
                e("div", au, [
                  (s(!0), o(G, null, se(E.value, (K) => {
                    var ve, Re, ut, Je;
                    return s(), o("div", {
                      key: K.node_type,
                      class: "review-item"
                    }, [
                      e("code", nu, n(K.node_type), 1),
                      e("div", lu, [
                        O.value.has(K.node_type) ? (s(), o(G, { key: 0 }, [
                          ((ve = O.value.get(K.node_type)) == null ? void 0 : ve.action) === "install" ? (s(), o("span", iu, n((Re = O.value.get(K.node_type)) == null ? void 0 : Re.package_id), 1)) : ((ut = O.value.get(K.node_type)) == null ? void 0 : ut.action) === "optional" ? (s(), o("span", ru, " Optional ")) : ((Je = O.value.get(K.node_type)) == null ? void 0 : Je.action) === "skip" ? (s(), o("span", du, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", cu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              q.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Models (" + n(q.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(G, null, se(q.value, (K) => {
                    var ve, Re, ut, Je, Vt, gt, pt;
                    return s(), o("div", {
                      key: K.filename,
                      class: "review-item"
                    }, [
                      e("code", fu, n(K.filename), 1),
                      e("div", gu, [
                        I.value.has(K.filename) ? (s(), o(G, { key: 0 }, [
                          ((ve = I.value.get(K.filename)) == null ? void 0 : ve.action) === "select" ? (s(), o("span", pu, n((ut = (Re = I.value.get(K.filename)) == null ? void 0 : Re.selected_model) == null ? void 0 : ut.filename), 1)) : ((Je = I.value.get(K.filename)) == null ? void 0 : Je.action) === "download" ? (s(), o("span", hu, " Download ")) : ((Vt = I.value.get(K.filename)) == null ? void 0 : Vt.action) === "optional" ? (s(), o("span", yu, " Optional ")) : ((gt = I.value.get(K.filename)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", wu, " Skip ")) : ((pt = I.value.get(K.filename)) == null ? void 0 : pt.action) === "cancel_download" ? (s(), o("span", ku, " Cancel Download ")) : c("", !0)
                        ], 64)) : K.is_download_intent ? (s(), o("span", bu, " Pending Download ")) : (s(), o("span", _u, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              me.value.length === 0 && E.value.length === 0 && q.value.length === 0 ? (s(), o("div", $u, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "applying" ? (s(), S(Yd, {
            key: 4,
            progress: pe(l),
            onRestart: ft,
            onRetryFailed: Xt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), S(re, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: Z
        }, {
          default: i(() => [...T[37] || (T[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        T[41] || (T[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || pe(l).phase === "complete" || pe(l).phase === "error" ? (s(), S(re, {
          key: 1,
          variant: "secondary",
          onClick: T[0] || (T[0] = (K) => d("close"))
        }, {
          default: i(() => [
            w(n(pe(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "analysis" ? (s(), S(re, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: vt
        }, {
          default: i(() => [...T[38] || (T[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        f.value === "nodes" ? (s(), S(re, {
          key: 3,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [
            w(n(D.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "models" ? (s(), S(re, {
          key: 4,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [...T[39] || (T[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        f.value === "review" ? (s(), S(re, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: kt
        }, {
          default: i(() => [...T[40] || (T[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), xu = /* @__PURE__ */ Q(Cu, [["__scopeId", "data-v-6276cf1d"]]), Su = { class: "search-input-wrapper" }, Iu = ["value", "placeholder"], Eu = /* @__PURE__ */ X({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = _(null);
    let v;
    function y(l) {
      const u = l.target.value;
      a.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        d("update:modelValue", u);
      }, a.debounce)) : d("update:modelValue", u);
    }
    function m() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = p.value) == null || l.focus();
    }
    return De(() => {
      a.autoFocus && p.value && p.value.focus();
    }), (l, u) => (s(), o("div", Su, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: mt(m, ["escape"])
      }, null, 40, Iu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Mu = /* @__PURE__ */ Q(Eu, [["__scopeId", "data-v-266f857a"]]), zu = { class: "search-bar" }, Lu = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, a) => (s(), o("div", zu, [
      g(Mu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => r.$emit("update:modelValue", d)),
        onClear: a[1] || (a[1] = (d) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), xt = /* @__PURE__ */ Q(Lu, [["__scopeId", "data-v-3d51bbfd"]]), Du = { class: "section-group" }, Ru = {
  key: 0,
  class: "section-content"
}, Tu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = _(a.initiallyExpanded);
    function v() {
      a.collapsible && (p.value = !p.value, d("toggle", p.value));
    }
    return (y, m) => (s(), o("section", Du, [
      g(Ge, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: v
      }, {
        default: i(() => [
          w(n(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", Ru, [
        ge(y.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ Q(Tu, [["__scopeId", "data-v-c48e33ed"]]), Nu = { class: "item-header" }, Uu = {
  key: 0,
  class: "item-icon"
}, Pu = { class: "item-info" }, Bu = {
  key: 0,
  class: "item-title"
}, Ou = {
  key: 1,
  class: "item-subtitle"
}, Fu = {
  key: 0,
  class: "item-details"
}, Vu = {
  key: 1,
  class: "item-actions"
}, Au = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.status ? `status-${a.status}` : "");
    return (p, v) => (s(), o("div", {
      class: le(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: v[0] || (v[0] = (y) => t.clickable && p.$emit("click"))
    }, [
      e("div", Nu, [
        p.$slots.icon ? (s(), o("span", Uu, [
          ge(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Pu, [
          p.$slots.title ? (s(), o("div", Bu, [
            ge(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (s(), o("div", Ou, [
            ge(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", Fu, [
        ge(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (s(), o("div", Vu, [
        ge(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ Q(Au, [["__scopeId", "data-v-cc435e0e"]]), Wu = { class: "loading-state" }, Gu = { class: "loading-message" }, ju = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, a) => (s(), o("div", Wu, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Gu, n(t.message), 1)
    ]));
  }
}), rt = /* @__PURE__ */ Q(ju, [["__scopeId", "data-v-ad8436c9"]]), Hu = { class: "error-state" }, Ku = { class: "error-message" }, qu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, a) => (s(), o("div", Hu, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Ku, n(t.message), 1),
      t.retry ? (s(), S(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (d) => r.$emit("retry"))
      }, {
        default: i(() => [...a[1] || (a[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ Q(qu, [["__scopeId", "data-v-5397be48"]]), Yu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getWorkflows: p } = Te();
    _s();
    const v = _([]), y = _(!1), m = _(null), l = _(""), u = _(!0), b = _(!1), h = _(!1), k = _(!1), C = _(null), L = U(
      () => v.value.filter((J) => J.status === "broken")
    ), $ = U(
      () => v.value.filter((J) => J.status === "new")
    ), f = U(
      () => v.value.filter((J) => J.status === "modified")
    ), R = U(
      () => v.value.filter((J) => J.status === "synced")
    ), O = U(() => {
      if (!l.value.trim()) return v.value;
      const J = l.value.toLowerCase();
      return v.value.filter((P) => P.name.toLowerCase().includes(J));
    }), I = U(
      () => L.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), B = U(
      () => $.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), W = U(
      () => f.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = U(
      () => R.value.filter(
        (J) => !l.value.trim() || J.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), N = U(
      () => b.value ? F.value : F.value.slice(0, 5)
    );
    async function D(J = !1) {
      y.value = !0, m.value = null;
      try {
        v.value = await p(J);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    r({ loadWorkflows: D });
    function x(J) {
      C.value = J, h.value = !0;
    }
    function z(J) {
      C.value = J, k.value = !0;
    }
    function ee() {
      alert("Bulk resolution not yet implemented");
    }
    function Y() {
      d("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function me(J) {
      const P = [];
      return J.missing_nodes > 0 && P.push(`${J.missing_nodes} missing node${J.missing_nodes > 1 ? "s" : ""}`), J.missing_models > 0 && P.push(`${J.missing_models} missing model${J.missing_models > 1 ? "s" : ""}`), J.models_with_category_mismatch && J.models_with_category_mismatch > 0 && P.push(`${J.models_with_category_mismatch} model${J.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), J.pending_downloads && J.pending_downloads > 0 && P.push(`${J.pending_downloads} pending download${J.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function de(J) {
      const P = J.sync_state === "new" ? "New" : J.sync_state === "modified" ? "Modified" : J.sync_state === "synced" ? "Synced" : J.sync_state;
      return J.has_path_sync_issues && J.models_needing_path_sync && J.models_needing_path_sync > 0 ? `${J.models_needing_path_sync} model path${J.models_needing_path_sync > 1 ? "s" : ""} need${J.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return De(D), (J, P) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, { title: "WORKFLOWS" }, {
            actions: i(() => [
              L.value.length > 0 ? (s(), S(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: i(() => [...P[8] || (P[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: l.value,
            "onUpdate:modelValue": P[0] || (P[0] = (E) => l.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), S(rt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), S(dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            I.value.length ? (s(), S(Le, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(I.value, (E) => (s(), S(Ue, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: i(() => [...P[9] || (P[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(me(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => z(E.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[11] || (P[11] = [
                        w(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            B.value.length ? (s(), S(Le, {
              key: 1,
              title: "NEW",
              count: B.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(B.value, (E) => (s(), S(Ue, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(n(E.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[12] || (P[12] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            W.value.length ? (s(), S(Le, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(W.value, (E) => (s(), S(Ue, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...P[13] || (P[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[14] || (P[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            F.value.length ? (s(), S(Le, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: P[2] || (P[2] = (E) => u.value = E)
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(N.value, (E) => (s(), S(Ue, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(n(E.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(n(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(de(E)), 1)
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => x(E.name)
                    }, {
                      default: i(() => [...P[15] || (P[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && F.value.length > 5 ? (s(), S(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (E) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + n(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            O.value.length ? c("", !0) : (s(), S(Qe, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && C.value ? (s(), S(Hl, {
        key: 0,
        "workflow-name": C.value,
        onClose: P[3] || (P[3] = (E) => h.value = !1),
        onResolve: P[4] || (P[4] = (E) => z(C.value)),
        onRefresh: P[5] || (P[5] = (E) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && C.value ? (s(), S(xu, {
        key: 1,
        "workflow-name": C.value,
        onClose: P[6] || (P[6] = (E) => k.value = !1),
        onInstall: Y,
        onRefresh: P[7] || (P[7] = (E) => d("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Xu = /* @__PURE__ */ Q(Yu, [["__scopeId", "data-v-591d06d5"]]), Qu = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["summary-bar", t.variant])
    }, [
      ge(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ Q(Qu, [["__scopeId", "data-v-ccb7816e"]]), Zu = {
  key: 0,
  class: "model-details"
}, Ju = { class: "detail-section" }, em = { class: "detail-row" }, tm = { class: "detail-value mono" }, sm = { class: "detail-row" }, om = { class: "detail-value mono" }, am = { class: "detail-row" }, nm = { class: "detail-value mono" }, lm = { class: "detail-row" }, im = { class: "detail-value" }, rm = { class: "detail-row" }, dm = { class: "detail-value" }, cm = { class: "detail-row" }, um = { class: "detail-value" }, mm = { class: "detail-section" }, vm = { class: "section-header" }, fm = {
  key: 0,
  class: "locations-list"
}, gm = { class: "location-path mono" }, pm = {
  key: 0,
  class: "location-modified"
}, hm = ["onClick"], ym = {
  key: 1,
  class: "empty-state"
}, wm = { class: "detail-section" }, km = { class: "section-header" }, bm = {
  key: 0,
  class: "sources-list"
}, _m = { class: "source-type" }, $m = ["href"], Cm = ["disabled", "onClick"], xm = {
  key: 1,
  class: "empty-state"
}, Sm = { class: "add-source-form" }, Im = ["disabled"], Em = {
  key: 2,
  class: "source-error"
}, Mm = {
  key: 3,
  class: "source-success"
}, zm = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, { getModelDetails: d, addModelSource: p, removeModelSource: v, openFileLocation: y } = Te(), m = _(null), l = _(!0), u = _(null), b = _(""), h = _(!1), k = _(null), C = _(null), L = _(null), $ = _(null);
    let f = null;
    function R(D, x = "success", z = 2e3) {
      f && clearTimeout(f), $.value = { message: D, type: x }, f = setTimeout(() => {
        $.value = null;
      }, z);
    }
    function O(D) {
      if (!D) return "Unknown";
      const x = 1024 * 1024 * 1024, z = 1024 * 1024;
      return D >= x ? `${(D / x).toFixed(1)} GB` : D >= z ? `${(D / z).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function I(D) {
      navigator.clipboard.writeText(D), R("Copied to clipboard!");
    }
    async function B(D) {
      try {
        await y(D), R("Opening file location...");
      } catch {
        R("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!b.value.trim() || !m.value)) {
        h.value = !0, C.value = null, L.value = null;
        try {
          await p(m.value.hash, b.value.trim()), L.value = "Source added successfully!", b.value = "", await N();
        } catch (D) {
          C.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function F(D) {
      if (m.value) {
        k.value = D, C.value = null, L.value = null;
        try {
          await v(m.value.hash, D), R("Source removed"), await N();
        } catch (x) {
          C.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function N() {
      l.value = !0, u.value = null;
      try {
        m.value = await d(a.identifier);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return De(N), (D, x) => {
      var z;
      return s(), o(G, null, [
        g(lt, {
          title: `Model Details: ${((z = m.value) == null ? void 0 : z.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: u.value,
          onClose: x[5] || (x[5] = (ee) => D.$emit("close"))
        }, {
          body: i(() => {
            var ee, Y, ae, me;
            return [
              m.value ? (s(), o("div", Zu, [
                e("section", Ju, [
                  e("div", em, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", tm, n(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (de) => I(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", sm, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", om, n(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (de) => I(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", am, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", nm, n(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (de) => I(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", lm, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", im, n(O(m.value.size)), 1)
                  ]),
                  e("div", rm, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", dm, n(m.value.category), 1)
                  ]),
                  e("div", cm, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", um, n(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", mm, [
                  e("h4", vm, "Locations (" + n(((ee = m.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (Y = m.value.locations) != null && Y.length ? (s(), o("div", fm, [
                    (s(!0), o(G, null, se(m.value.locations, (de, J) => (s(), o("div", {
                      key: J,
                      class: "location-item"
                    }, [
                      e("span", gm, n(de.path), 1),
                      de.modified ? (s(), o("span", pm, "Modified: " + n(de.modified), 1)) : c("", !0),
                      de.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => B(de.path)
                      }, " Open File Location ", 8, hm)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", ym, "No locations found"))
                ]),
                e("section", wm, [
                  e("h4", km, "Download Sources (" + n(((ae = m.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (me = m.value.sources) != null && me.length ? (s(), o("div", bm, [
                    (s(!0), o(G, null, se(m.value.sources, (de, J) => (s(), o("div", {
                      key: J,
                      class: "source-item"
                    }, [
                      e("span", _m, n(de.type) + ":", 1),
                      e("a", {
                        href: de.url,
                        target: "_blank",
                        class: "source-url"
                      }, n(de.url), 9, $m),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === de.url,
                        onClick: (P) => F(de.url)
                      }, n(k.value === de.url ? "..." : "×"), 9, Cm)
                    ]))), 128))
                  ])) : (s(), o("div", xm, " No download sources configured ")),
                  e("div", Sm, [
                    Fe(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (de) => b.value = de),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ut, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || h.value,
                      onClick: W
                    }, n(h.value ? "Adding..." : "Add Source"), 9, Im)
                  ]),
                  C.value ? (s(), o("p", Em, n(C.value), 1)) : c("", !0),
                  L.value ? (s(), o("p", Mm, n(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (ee) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Pe, { to: "body" }, [
          $.value ? (s(), o("div", {
            key: 0,
            class: le(["toast", $.value.type])
          }, n($.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Ss = /* @__PURE__ */ Q(zm, [["__scopeId", "data-v-f15cbb56"]]), Lm = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const a = r, { getEnvironmentModels: d, getStatus: p } = Te(), v = _([]), y = _([]), m = _("production"), l = _(!1), u = _(null), b = _(""), h = _(!1), k = _(null);
    function C() {
      h.value = !1, a("navigate", "model-index");
    }
    const L = U(
      () => v.value.reduce((N, D) => N + (D.size || 0), 0)
    ), $ = U(() => {
      if (!b.value.trim()) return v.value;
      const N = b.value.toLowerCase();
      return v.value.filter((D) => D.filename.toLowerCase().includes(N));
    }), f = U(() => {
      if (!b.value.trim()) return y.value;
      const N = b.value.toLowerCase();
      return y.value.filter((D) => D.filename.toLowerCase().includes(N));
    }), R = U(() => {
      const N = {};
      for (const x of $.value) {
        const z = x.type || "other";
        N[z] || (N[z] = []), N[z].push(x);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([x], [z]) => {
        const ee = D.indexOf(x), Y = D.indexOf(z);
        return ee >= 0 && Y >= 0 ? ee - Y : ee >= 0 ? -1 : Y >= 0 ? 1 : x.localeCompare(z);
      }).map(([x, z]) => ({ type: x, models: z }));
    });
    function O(N) {
      if (!N) return "Unknown";
      const D = N / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function I(N) {
      k.value = N.hash || N.filename;
    }
    function B(N) {
      a("navigate", "model-index");
    }
    function W(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function F() {
      l.value = !0, u.value = null;
      try {
        const N = await d();
        v.value = N, y.value = [];
        const D = await p();
        m.value = D.environment || "production";
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return De(F), (N, D) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (x) => h.value = !0)
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: b.value,
            "onUpdate:modelValue": D[1] || (D[1] = (x) => b.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(rt, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), S(dt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length ? (s(), S(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " models • " + n(O(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(G, null, se(R.value, (x) => (s(), S(Le, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(x.models, (z) => (s(), S(Ue, {
                  key: z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...D[4] || (D[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(O(z.size)), 1)
                  ]),
                  details: i(() => [
                    g(Se, {
                      label: "Used by:",
                      value: (z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(Se, {
                      label: "Path:",
                      value: z.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => I(z)
                    }, {
                      default: i(() => [...D[5] || (D[5] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            f.value.length ? (s(), S(Le, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(f.value, (x) => (s(), S(Ue, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...D[6] || (D[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(n(x.filename), 1)
                  ]),
                  subtitle: i(() => [...D[7] || (D[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var z;
                    return [
                      g(Se, {
                        label: "Required by:",
                        value: ((z = x.workflow_names) == null ? void 0 : z.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => W(x.filename)
                    }, {
                      default: i(() => [...D[8] || (D[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => B(x.filename)
                    }, {
                      default: i(() => [...D[9] || (D[9] = [
                        w(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !$.value.length && !f.value.length ? (s(), S(Qe, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: h.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (x) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            D[10] || (D[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + n(m.value) + '"', 1),
            D[11] || (D[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: C
          }, {
            default: i(() => [...D[12] || (D[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(Ss, {
        key: 0,
        identifier: k.value,
        onClose: D[3] || (D[3] = (x) => k.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Dm = /* @__PURE__ */ Q(Lm, [["__scopeId", "data-v-cb4f12b3"]]), Rm = {
  key: 0,
  class: "indexing-progress"
}, Tm = { class: "progress-info" }, Nm = { class: "progress-label" }, Um = { class: "progress-count" }, Pm = { class: "progress-bar" }, Bm = { class: "modal-content" }, Om = { class: "modal-header" }, Fm = { class: "modal-body" }, Vm = { class: "input-group" }, Am = { class: "current-path" }, Wm = { class: "input-group" }, Gm = { class: "modal-footer" }, jm = { class: "modal-content" }, Hm = { class: "modal-header" }, Km = { class: "modal-body" }, qm = { class: "input-group" }, Ym = { class: "input-group" }, Xm = { class: "modal-footer" }, Qm = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: a,
      scanWorkspaceModels: d,
      getModelsDirectory: p,
      setModelsDirectory: v
    } = Te(), { addToQueue: y } = Ft(), m = r, l = _([]), u = _(!1), b = _(!1), h = _(null), k = _(""), C = _(!1), L = _(null), $ = _(!1), f = _(null), R = _(""), O = _(!1), I = _(!1), B = _(""), W = _(""), F = _(null), N = U(
      () => l.value.reduce((P, E) => P + (E.size || 0), 0)
    ), D = U(() => {
      if (!k.value.trim()) return l.value;
      const P = k.value.toLowerCase();
      return l.value.filter((E) => {
        const ne = E, q = E.sha256 || ne.sha256_hash || "";
        return E.filename.toLowerCase().includes(P) || q.toLowerCase().includes(P);
      });
    }), x = U(() => {
      const P = {};
      for (const ne of D.value) {
        const q = ne.type || "other";
        P[q] || (P[q] = []), P[q].push(ne);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([ne], [q]) => {
        const Ee = E.indexOf(ne), $e = E.indexOf(q);
        return Ee >= 0 && $e >= 0 ? Ee - $e : Ee >= 0 ? -1 : $e >= 0 ? 1 : ne.localeCompare(q);
      }).map(([ne, q]) => ({ type: ne, models: q }));
    });
    function z(P) {
      if (!P) return "Unknown";
      const E = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return P >= E ? `${(P / E).toFixed(1)} GB` : P >= ne ? `${(P / ne).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function ee(P) {
      L.value = P.hash || P.filename;
    }
    async function Y() {
      b.value = !0, h.value = null;
      try {
        const P = await d();
        await de(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function ae() {
      if (R.value.trim()) {
        O.value = !0, h.value = null;
        try {
          const P = await v(R.value.trim());
          f.value = P.path, $.value = !1, R.value = "", await de(), console.log(`Directory changed: ${P.models_indexed} models indexed`), m("refresh");
        } catch (P) {
          h.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function me() {
      if (!B.value.trim() || !W.value.trim()) return;
      const P = W.value.split("/").pop() || "model.safetensors";
      y([{
        workflow: "__manual__",
        filename: P,
        url: B.value.trim(),
        targetPath: W.value.trim()
      }]), B.value = "", W.value = "", I.value = !1;
    }
    async function de() {
      u.value = !0, h.value = null;
      try {
        l.value = await a();
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function J() {
      try {
        const P = await p();
        f.value = P.path;
      } catch {
      }
    }
    return De(() => {
      de(), J();
    }), (P, E) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (ne) => C.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: Y
              }, {
                default: i(() => [
                  w(n(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (ne) => $.value = !0)
              }, {
                default: i(() => [...E[15] || (E[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (ne) => I.value = !0)
              }, {
                default: i(() => [...E[16] || (E[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  w(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          F.value ? (s(), o("div", Rm, [
            e("div", Tm, [
              e("span", Nm, n(F.value.message), 1),
              e("span", Um, n(F.value.current) + "/" + n(F.value.total), 1)
            ]),
            e("div", Pm, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g(xt, {
            modelValue: k.value,
            "onUpdate:modelValue": E[3] || (E[3] = (ne) => k.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value || F.value ? (s(), S(rt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), S(dt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            l.value.length ? (s(), S(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(l.value.length) + " models • " + n(z(N.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(G, null, se(x.value, (ne) => (s(), S(Le, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(ne.models, (q) => (s(), S(Ue, {
                  key: q.sha256 || q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...E[17] || (E[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(n(q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(n(z(q.size)), 1)
                  ]),
                  details: i(() => [
                    g(Se, {
                      label: "Hash:",
                      value: q.hash ? q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => ee(q)
                    }, {
                      default: i(() => [...E[18] || (E[18] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            D.value.length ? c("", !0) : (s(), S(Qe, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: E[4] || (E[4] = (ne) => C.value = !1)
      }, {
        content: i(() => [...E[19] || (E[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), S(Ss, {
        key: 0,
        identifier: L.value,
        onClose: E[5] || (E[5] = (ne) => L.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), S(Pe, { to: "body" }, [
        $.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = ze((ne) => $.value = !1, ["self"]))
        }, [
          e("div", Bm, [
            e("div", Om, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (ne) => $.value = !1)
              }, "✕")
            ]),
            e("div", Fm, [
              e("div", Vm, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", Am, n(f.value || "Not set"), 1)
              ]),
              e("div", Wm, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                g(Ye, {
                  modelValue: R.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (ne) => R.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Gm, [
              g(re, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (ne) => $.value = !1)
              }, {
                default: i(() => [...E[24] || (E[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !R.value.trim() || O.value,
                loading: O.value,
                onClick: ae
              }, {
                default: i(() => [
                  w(n(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), S(Pe, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = ze((ne) => I.value = !1, ["self"]))
        }, [
          e("div", jm, [
            e("div", Hm, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (ne) => I.value = !1)
              }, "✕")
            ]),
            e("div", Km, [
              e("div", qm, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                g(Ye, {
                  modelValue: B.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (ne) => B.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Ym, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Ye, {
                  modelValue: W.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (ne) => W.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Xm, [
              g(re, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (ne) => I.value = !1)
              }, {
                default: i(() => [...E[29] || (E[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !B.value.trim() || !W.value.trim(),
                onClick: me
              }, {
                default: i(() => [...E[30] || (E[30] = [
                  w(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), Zm = /* @__PURE__ */ Q(Qm, [["__scopeId", "data-v-73b78d84"]]), Jm = { class: "node-details" }, ev = { class: "status-row" }, tv = {
  key: 0,
  class: "detail-row"
}, sv = { class: "value" }, ov = { class: "detail-row" }, av = { class: "value" }, nv = {
  key: 1,
  class: "detail-row"
}, lv = { class: "value mono" }, iv = {
  key: 2,
  class: "detail-row"
}, rv = ["href"], dv = {
  key: 3,
  class: "detail-row"
}, cv = { class: "value mono small" }, uv = { class: "detail-row" }, mv = {
  key: 0,
  class: "value"
}, vv = {
  key: 1,
  class: "workflow-list"
}, fv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => a.node.installed ? a.node.tracked ? a.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), y = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[a.node.source] || a.node.source);
    return (m, l) => (s(), S(lt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (u) => d("close"))
    }, {
      body: i(() => [
        e("div", Jm, [
          e("div", ev, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", p.value])
            }, n(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", tv, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", sv, n(t.node.source === "development" ? "" : "v") + n(t.node.version), 1)
          ])) : c("", !0),
          e("div", ov, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", av, n(y.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", nv, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", lv, n(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", iv, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(n(t.node.repository) + " ", 1),
              l[6] || (l[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, rv)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", dv, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", cv, n(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", uv, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", mv, " Not used in any workflows ")) : (s(), o("div", vv, [
              (s(!0), o(G, null, se(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, n(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (u) => d("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            w(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gv = /* @__PURE__ */ Q(fv, [["__scopeId", "data-v-b342f626"]]), pv = { key: 0 }, hv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, yv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, wv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const a = r, { getNodes: d, trackNodeAsDev: p, installNode: v, uninstallNode: y } = Te(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = _(!1), u = _(null), b = _(""), h = _(!1), k = _(null), C = U(() => {
      if (!b.value.trim()) return m.value.nodes;
      const x = b.value.toLowerCase();
      return m.value.nodes.filter(
        (z) => {
          var ee, Y;
          return z.name.toLowerCase().includes(x) || ((ee = z.description) == null ? void 0 : ee.toLowerCase().includes(x)) || ((Y = z.repository) == null ? void 0 : Y.toLowerCase().includes(x));
        }
      );
    }), L = U(
      () => C.value.filter((x) => x.installed && x.tracked)
    ), $ = U(
      () => C.value.filter((x) => !x.installed && x.tracked)
    ), f = U(
      () => C.value.filter((x) => x.installed && !x.tracked)
    );
    function R(x) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[x] || x;
    }
    function O(x) {
      return !x.used_in_workflows || x.used_in_workflows.length === 0 ? "Not used in any workflows" : x.used_in_workflows.length === 1 ? x.used_in_workflows[0] : `${x.used_in_workflows.length} workflows`;
    }
    function I(x) {
      k.value = x;
    }
    function B() {
      a("open-node-manager");
    }
    async function W(x) {
      if (confirm(`Track "${x}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const z = await p(x);
          z.status === "success" ? (alert(`Node "${x}" is now tracked as development!`), await D()) : alert(`Failed to track node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F(x) {
      if (confirm(`Remove untracked node "${x}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const z = await y(x);
          z.status === "success" ? (alert(`Node "${x}" removed!`), await D()) : alert(`Failed to remove node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function N(x) {
      if (confirm(`Install node "${x}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const z = await v(x);
          z.status === "success" ? (alert(`Node "${x}" installed successfully!`), await D()) : alert(`Failed to install node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function D() {
      l.value = !0, u.value = null;
      try {
        m.value = await d();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return De(D), (x, z) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (ee) => h.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: i(() => [...z[5] || (z[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: b.value,
            "onUpdate:modelValue": z[1] || (z[1] = (ee) => b.value = ee),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), S(rt, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), S(dt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            m.value.total_count ? (s(), S(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(n(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(G, { key: 0 }, [
                  w(" • " + n(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (s(), o(G, { key: 1 }, [
                  w(" • " + n(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            f.value.length ? (s(), S(Le, {
              key: 1,
              title: "UNTRACKED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(f.value, (ee) => (s(), S(Ue, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(Se, {
                      label: "Used by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => I(ee)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => W(ee.name)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => F(ee.name)
                    }, {
                      default: i(() => [...z[10] || (z[10] = [
                        w(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (s(), S(Le, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(L.value, (ee) => (s(), S(Ue, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(n(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [
                    ee.version ? (s(), o("span", pv, n(ee.source === "development" ? "" : "v") + n(ee.version), 1)) : (s(), o("span", hv, "version unknown")),
                    e("span", yv, " • " + n(R(ee.source)), 1)
                  ]),
                  details: i(() => [
                    g(Se, {
                      label: "Used by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => I(ee)
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
                        w(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (s(), S(Le, {
              key: 3,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(G, null, se($.value, (ee) => (s(), S(Ue, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: i(() => [...z[13] || (z[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(n(ee.name), 1)
                  ]),
                  subtitle: i(() => [...z[14] || (z[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(Se, {
                      label: "Required by:",
                      value: O(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => I(ee)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => N(ee.name)
                    }, {
                      default: i(() => [...z[16] || (z[16] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !L.value.length && !$.value.length && !f.value.length ? (s(), S(Qe, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: z[3] || (z[3] = (ee) => h.value = !1)
      }, {
        content: i(() => [...z[17] || (z[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            w(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            w(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            w(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: z[2] || (z[2] = (ee) => h.value = !1)
          }, {
            default: i(() => [...z[18] || (z[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(gv, {
        key: 0,
        node: k.value,
        onClose: z[4] || (z[4] = (ee) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), kv = /* @__PURE__ */ Q(wv, [["__scopeId", "data-v-4ac1465a"]]), bv = { class: "remote-url-display" }, _v = ["title"], $v = ["title"], Cv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Sv = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, a = _(!1), d = U(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const v = r.url.slice(0, Math.floor(r.maxLength * 0.6)), y = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${v}...${y}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(r.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, y) => (s(), o("div", bv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, n(d.value), 9, _v),
      e("button", {
        class: le(["copy-btn", { copied: a.value }]),
        onClick: p,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (s(), o("svg", xv, [...y[1] || (y[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Cv, [...y[0] || (y[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, $v)
    ]));
  }
}), fs = /* @__PURE__ */ Q(Sv, [["__scopeId", "data-v-7768a58d"]]), Iv = { class: "remote-title" }, Ev = {
  key: 0,
  class: "default-badge"
}, Mv = {
  key: 1,
  class: "sync-badge"
}, zv = {
  key: 0,
  class: "ahead"
}, Lv = {
  key: 1,
  class: "behind"
}, Dv = {
  key: 0,
  class: "tracking-info"
}, Rv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const a = t, d = U(() => a.fetchingRemote === a.remote.name), p = U(() => a.remote.is_default), v = U(() => !!a.trackingBranch);
    function y(m) {
      const l = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), h = Math.floor(b / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const k = Math.floor(h / 60);
      if (k < 24) return `${k}h ago`;
      const C = Math.floor(k / 24);
      return C < 7 ? `${C}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), S(Ue, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(n(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Iv, [
          e("span", null, n(t.remote.name), 1),
          p.value ? (s(), o("span", Ev, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Mv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", zv, "↑" + n(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", Lv, "↓" + n(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", Dv, " Tracking: " + n(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var u;
        return [
          g(Se, { label: "Fetch:" }, {
            default: i(() => [
              g(fs, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(Se, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(fs, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (s(), S(Se, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, n(y(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        g(te, {
          variant: "primary",
          size: "xs",
          loading: d.value,
          onClick: l[0] || (l[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...l[3] || (l[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(te, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? c("", !0) : (s(), S(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...l[5] || (l[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Tv = /* @__PURE__ */ Q(Rv, [["__scopeId", "data-v-17362e45"]]), Nv = ["for"], Uv = {
  key: 0,
  class: "base-form-field-required"
}, Pv = { class: "base-form-field-input" }, Bv = {
  key: 1,
  class: "base-form-field-error"
}, Ov = {
  key: 2,
  class: "base-form-field-hint"
}, Fv = /* @__PURE__ */ X({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(t) {
    const r = t, a = U(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (d, p) => (s(), o("div", {
      class: le(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        w(n(t.label) + " ", 1),
        t.required ? (s(), o("span", Uv, "*")) : c("", !0)
      ], 8, Nv)) : c("", !0),
      e("div", Pv, [
        ge(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Bv, n(t.error), 1)) : t.hint ? (s(), o("span", Ov, n(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Jt = /* @__PURE__ */ Q(Fv, [["__scopeId", "data-v-9a1cf296"]]), Vv = { class: "remote-form" }, Av = { class: "form-header" }, Wv = { class: "form-body" }, Gv = {
  key: 0,
  class: "form-error"
}, jv = { class: "form-actions" }, Hv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const a = t, d = r, p = _({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), v = _(!1), y = _(null);
    qt(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      p.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const m = U(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        y.value = null, v.value = !0;
        try {
          d("submit", p.value);
        } catch (u) {
          y.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (u, b) => (s(), o("div", Vv, [
      e("div", Av, [
        g(Ge, null, {
          default: i(() => [
            w(n(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Wv, [
        g(Jt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Ye, {
              modelValue: p.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (h) => p.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Jt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Ye, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (h) => p.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Jt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Ye, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (h) => p.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y.value ? (s(), o("div", Gv, n(y.value), 1)) : c("", !0)
      ]),
      e("div", jv, [
        g(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: l
        }, {
          default: i(() => [
            w(n(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(te, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (h) => u.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Kv = /* @__PURE__ */ Q(Hv, [["__scopeId", "data-v-56021b18"]]), qv = { key: 0 }, Yv = /* @__PURE__ */ X({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: a,
      removeRemote: d,
      updateRemoteUrl: p,
      fetchRemote: v,
      getRemoteSyncStatus: y
    } = Te(), m = _([]), l = _(null), u = _({}), b = _(!1), h = _(null), k = _(""), C = _(!1), L = _(null), $ = _(!1), f = _("add"), R = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = U(() => {
      if (!k.value.trim()) return m.value;
      const Y = k.value.toLowerCase();
      return m.value.filter(
        (ae) => ae.name.toLowerCase().includes(Y) || ae.fetch_url.toLowerCase().includes(Y) || ae.push_url.toLowerCase().includes(Y)
      );
    });
    function I(Y) {
      var ae;
      return ((ae = l.value) == null ? void 0 : ae.remote) === Y;
    }
    async function B() {
      b.value = !0, h.value = null;
      try {
        const Y = await r();
        m.value = Y.remotes, l.value = Y.current_branch_tracking || null, await Promise.all(
          Y.remotes.map(async (ae) => {
            const me = await y(ae.name);
            me && (u.value[ae.name] = me);
          })
        );
      } catch (Y) {
        h.value = Y instanceof Error ? Y.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function W() {
      f.value = "add", R.value = { name: "", fetchUrl: "", pushUrl: "" }, $.value = !0;
    }
    function F(Y) {
      const ae = m.value.find((me) => me.name === Y);
      ae && (f.value = "edit", R.value = {
        name: ae.name,
        fetchUrl: ae.fetch_url,
        pushUrl: ae.push_url
      }, $.value = !0);
    }
    async function N(Y) {
      try {
        f.value === "add" ? await a(Y.name, Y.fetchUrl) : await p(Y.name, Y.fetchUrl, Y.pushUrl || void 0), $.value = !1, await B();
      } catch (ae) {
        h.value = ae instanceof Error ? ae.message : "Operation failed";
      }
    }
    function D() {
      $.value = !1, R.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function x(Y) {
      L.value = Y;
      try {
        await v(Y);
        const ae = await y(Y);
        ae && (u.value[Y] = ae);
      } catch (ae) {
        h.value = ae instanceof Error ? ae.message : "Fetch failed";
      } finally {
        L.value = null;
      }
    }
    async function z(Y) {
      if (confirm(`Remove remote "${Y}"?`))
        try {
          await d(Y), await B();
        } catch (ae) {
          h.value = ae instanceof Error ? ae.message : "Failed to remove remote";
        }
    }
    function ee() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return De(B), (Y, ae) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ae[0] || (ae[0] = (me) => C.value = !0)
          }, {
            actions: i(() => [
              $.value ? c("", !0) : (s(), S(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...ae[3] || (ae[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          $.value ? c("", !0) : (s(), S(xt, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": ae[1] || (ae[1] = (me) => k.value = me),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (s(), S(rt, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (s(), S(dt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            $.value ? (s(), S(Kv, {
              key: 0,
              mode: f.value,
              "remote-name": R.value.name,
              "fetch-url": R.value.fetchUrl,
              "push-url": R.value.pushUrl,
              onSubmit: N,
              onCancel: D
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !$.value ? (s(), S(St, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(m.value.length) + " remote" + n(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", qv, " • Tracking: " + n(l.value.remote) + "/" + n(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !$.value ? (s(), S(Le, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(O.value, (me) => {
                  var de;
                  return s(), S(Tv, {
                    key: me.name,
                    remote: me,
                    "sync-status": u.value[me.name],
                    "tracking-branch": I(me.name) ? (de = l.value) == null ? void 0 : de.branch : void 0,
                    "fetching-remote": L.value,
                    onFetch: x,
                    onEdit: F,
                    onRemove: z
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !O.value.length && !$.value ? (s(), S(Qe, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(te, {
                  variant: "primary",
                  onClick: W
                }, {
                  default: i(() => [...ae[4] || (ae[4] = [
                    w(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: C.value,
        title: "About Git Remotes",
        onClose: ae[2] || (ae[2] = (me) => C.value = !1)
      }, {
        content: i(() => [...ae[5] || (ae[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "link",
            onClick: ee
          }, {
            default: i(() => [...ae[6] || (ae[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Xv = /* @__PURE__ */ Q(Yv, [["__scopeId", "data-v-a75719bb"]]), Qv = { class: "setting-info" }, Zv = { class: "setting-label" }, Jv = {
  key: 0,
  class: "required-marker"
}, ef = {
  key: 0,
  class: "setting-description"
}, tf = { class: "setting-control" }, sf = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, a) => (s(), o("div", {
      class: le(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Qv, [
        e("div", Zv, [
          w(n(t.label) + " ", 1),
          t.required ? (s(), o("span", Jv, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", ef, n(t.description), 1)) : c("", !0)
      ]),
      e("div", tf, [
        ge(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), nt = /* @__PURE__ */ Q(sf, [["__scopeId", "data-v-cb5d236c"]]), of = { class: "toggle" }, af = ["checked", "disabled"], nf = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", of, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, af),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), wt = /* @__PURE__ */ Q(nf, [["__scopeId", "data-v-71c0f550"]]), lf = { class: "settings-section" }, rf = { class: "path-setting" }, df = { class: "path-value" }, cf = { class: "path-setting" }, uf = { class: "path-value" }, mf = { class: "settings-section" }, vf = { class: "settings-section" }, ff = { class: "settings-section" }, gf = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: a } = Te(), d = _(!1), p = _(null), v = _(null), y = _(null), m = _(null), l = _(""), u = _(""), b = _(!0), h = _(!0), k = _(!1), C = U(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function L() {
      d.value = !0, p.value = null;
      try {
        y.value = await r(), m.value = { ...y.value }, l.value = y.value.civitai_api_key || "", u.value = y.value.huggingface_token || "", b.value = y.value.auto_sync_models, h.value = y.value.confirm_destructive;
        const O = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = O === "true";
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      var O;
      v.value = null;
      try {
        const I = {};
        l.value !== (((O = m.value) == null ? void 0 : O.civitai_api_key) || "") && (I.civitai_api_key = l.value || null), await a(I), await L(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (I) {
        v.value = {
          type: "error",
          message: I instanceof Error ? I.message : "Failed to save settings"
        };
      }
    }
    function f() {
      m.value && (l.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, v.value = null);
    }
    function R(O) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(O)), console.log("[ComfyGit] Auto-refresh setting saved:", O);
    }
    return De(L), (O, I) => (s(), S(Ve, null, {
      header: i(() => [
        g(Ae, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(te, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: $
            }, {
              default: i(() => [...I[5] || (I[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (s(), S(te, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: i(() => [...I[6] || (I[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), S(rt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (s(), S(dt, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
          g(Le, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var B, W;
              return [
                e("div", lf, [
                  e("div", rf, [
                    I[7] || (I[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    I[8] || (I[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", df, n(((B = y.value) == null ? void 0 : B.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", cf, [
                    I[9] || (I[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    I[10] || (I[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", uf, n(((W = y.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Le, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", mf, [
                g(nt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Ht, {
                      modelValue: l.value,
                      "onUpdate:modelValue": I[0] || (I[0] = (B) => l.value = B),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(nt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Ht, {
                      modelValue: u.value,
                      "onUpdate:modelValue": I[1] || (I[1] = (B) => u.value = B),
                      type: "password",
                      placeholder: "Not yet supported",
                      disabled: "",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Le, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", vf, [
                g(nt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(wt, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        I[2] || (I[2] = (B) => k.value = B),
                        R
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Le, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", ff, [
                g(nt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(wt, {
                      modelValue: b.value,
                      "onUpdate:modelValue": I[3] || (I[3] = (B) => b.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(nt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(wt, {
                      modelValue: h.value,
                      "onUpdate:modelValue": I[4] || (I[4] = (B) => h.value = B),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), S(St, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Xe({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, n(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), pf = /* @__PURE__ */ Q(gf, [["__scopeId", "data-v-7861bd35"]]), hf = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = Te(), a = _([]), d = _(!1), p = _(null), v = _(!1), y = _(null), m = U(() => a.value.length === 0 ? [] : a.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function l() {
      d.value = !0, p.value = null;
      try {
        a.value = await r(void 0, 500);
      } catch (u) {
        p.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var u;
          (u = y.value) != null && u.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return De(l), (u, b) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (h) => v.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: d.value
              }, {
                default: i(() => [
                  w(n(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          d.value ? (s(), S(rt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (s(), S(dt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            a.value.length === 0 ? (s(), S(Qe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(G, null, se(m.value, (h, k) => (s(), o("div", {
                key: k,
                class: le(`log-line log-level-${h.level.toLowerCase()}`)
              }, n(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (h) => v.value = !1)
      }, {
        content: i(() => [...b[3] || (b[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            w(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            w(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            w(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            w(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: b[1] || (b[1] = (h) => v.value = !1)
          }, {
            default: i(() => [...b[4] || (b[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), yf = /* @__PURE__ */ Q(hf, [["__scopeId", "data-v-39f6a756"]]), wf = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: a } = Te(), d = _([]), p = _(!1), v = _(null), y = _(!1), m = _("production"), l = _(null), u = U(() => d.value.length === 0 ? [] : d.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function b() {
      p.value = !0, v.value = null;
      try {
        d.value = await r(void 0, 500);
        try {
          const h = await a();
          m.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        v.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var h;
          (h = l.value) != null && h.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return De(b), (h, k) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (C) => y.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: p.value
              }, {
                default: i(() => [
                  w(n(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (s(), S(rt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), S(dt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            d.value.length === 0 ? (s(), S(Qe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(G, null, se(u.value, (C, L) => (s(), o("div", {
                key: L,
                class: le(`log-line log-level-${C.level.toLowerCase()}`)
              }, n(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(it, {
        show: y.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = (C) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            k[3] || (k[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, n(m.value), 1),
            k[4] || (k[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          k[5] || (k[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            w(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            w(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            w(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            w(" Detailed debugging information ")
          ], -1)),
          k[6] || (k[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(te, {
            variant: "primary",
            onClick: k[1] || (k[1] = (C) => y.value = !1)
          }, {
            default: i(() => [...k[7] || (k[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kf = /* @__PURE__ */ Q(wf, [["__scopeId", "data-v-4f1e6f72"]]), bf = { class: "env-title" }, _f = {
  key: 0,
  class: "current-badge"
}, $f = {
  key: 0,
  class: "branch-info"
}, Cf = /* @__PURE__ */ X({
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
  setup(t) {
    return (r, a) => (s(), S(Ue, {
      status: t.isCurrent ? "synced" : void 0
    }, Yt({
      icon: i(() => [
        w(n(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", bf, [
          e("span", null, n(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", _f, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", $f, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + n(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        ge(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(Se, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(Se, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(Se, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(Se, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), xf = /* @__PURE__ */ Q(Cf, [["__scopeId", "data-v-9231917a"]]), Sf = { class: "env-details" }, If = { class: "status-row" }, Ef = {
  key: 0,
  class: "detail-row"
}, Mf = { class: "value mono" }, zf = {
  key: 1,
  class: "detail-row"
}, Lf = { class: "value mono small" }, Df = { class: "detail-row" }, Rf = { class: "value" }, Tf = { class: "detail-row" }, Nf = { class: "value" }, Uf = { class: "detail-row" }, Pf = { class: "value" }, Bf = {
  key: 2,
  class: "section-divider"
}, Of = {
  key: 3,
  class: "detail-row"
}, Ff = { class: "value" }, Vf = {
  key: 4,
  class: "detail-row"
}, Af = { class: "value" }, Wf = { class: "footer-actions" }, Gf = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const a = r;
    function d(p) {
      if (!p) return "Unknown";
      try {
        const v = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), u = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, v) => (s(), S(lt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (y) => a("close"))
    }, {
      body: i(() => [
        e("div", Sf, [
          e("div", If, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, n(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ef, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Mf, n(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", zf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Lf, n(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Df, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Rf, n(t.environment.workflow_count), 1)
          ]),
          e("div", Tf, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Nf, n(t.environment.node_count), 1)
          ]),
          e("div", Uf, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Pf, n(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Bf)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Of, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Ff, n(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Vf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Af, n(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Wf, [
          t.canDelete ? (s(), S(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => a("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(re, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (y) => a("close"))
          }, {
            default: i(() => [...v[13] || (v[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), jf = /* @__PURE__ */ Q(Gf, [["__scopeId", "data-v-59855453"]]), Is = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Es = "3.12", Ms = [
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
], zs = "auto", Hf = { class: "create-env-form" }, Kf = { class: "form-field" }, qf = { class: "form-field" }, Yf = ["value"], Xf = { class: "form-field" }, Qf = ["disabled"], Zf = ["value"], Jf = { class: "form-field" }, eg = ["value"], tg = { class: "form-field form-field--checkbox" }, sg = { class: "form-checkbox" }, og = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: r }) {
    const a = r, { getComfyUIReleases: d } = Te(), p = _(""), v = _(Es), y = _("latest"), m = _(zs), l = _(!1), u = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = _(!1), h = _(null);
    function k() {
      const L = p.value.trim();
      if (!L) return;
      const $ = {
        name: L,
        python_version: v.value,
        comfyui_version: y.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      a("create", $);
    }
    async function C() {
      b.value = !0;
      try {
        u.value = await d();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        b.value = !1;
      }
    }
    return De(async () => {
      var L;
      await Qs(), (L = h.value) == null || L.focus(), C();
    }), (L, $) => (s(), S(lt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: $[6] || ($[6] = (f) => a("close"))
    }, {
      body: i(() => [
        e("div", Hf, [
          e("div", Kf, [
            $[7] || ($[7] = e("label", { class: "form-label" }, "Name", -1)),
            Fe(e("input", {
              ref_key: "nameInput",
              ref: h,
              "onUpdate:modelValue": $[0] || ($[0] = (f) => p.value = f),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: mt(k, ["enter"])
            }, null, 544), [
              [Ut, p.value]
            ])
          ]),
          e("div", qf, [
            $[8] || ($[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Fe(e("select", {
              "onUpdate:modelValue": $[1] || ($[1] = (f) => v.value = f),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(pe(Is), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f), 9, Yf))), 128))
            ], 512), [
              [$t, v.value]
            ])
          ]),
          e("div", Xf, [
            $[9] || ($[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Fe(e("select", {
              "onUpdate:modelValue": $[2] || ($[2] = (f) => y.value = f),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(G, null, se(u.value, (f) => (s(), o("option", {
                key: f.tag_name,
                value: f.tag_name
              }, n(f.name), 9, Zf))), 128))
            ], 8, Qf), [
              [$t, y.value]
            ])
          ]),
          e("div", Jf, [
            $[10] || ($[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Fe(e("select", {
              "onUpdate:modelValue": $[3] || ($[3] = (f) => m.value = f),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(pe(Ms), (f) => (s(), o("option", {
                key: f,
                value: f
              }, n(f) + n(f === "auto" ? " (detect GPU)" : ""), 9, eg))), 128))
            ], 512), [
              [$t, m.value]
            ])
          ]),
          e("div", tg, [
            e("label", sg, [
              Fe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": $[4] || ($[4] = (f) => l.value = f)
              }, null, 512), [
                [ts, l.value]
              ]),
              $[11] || ($[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: k
        }, {
          default: i(() => [...$[12] || ($[12] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(re, {
          variant: "secondary",
          onClick: $[5] || ($[5] = (f) => a("close"))
        }, {
          default: i(() => [...$[13] || ($[13] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ag = /* @__PURE__ */ Q(og, [["__scopeId", "data-v-a2f13447"]]), ng = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: r, emit: a }) {
    const d = a, { getEnvironments: p } = Te(), v = _([]), y = _(!1), m = _(null), l = _(""), u = _(!1), b = _(!1), h = _(null), k = U(
      () => v.value.find((I) => I.is_current)
    ), C = U(() => {
      if (!l.value.trim()) return v.value;
      const I = l.value.toLowerCase();
      return v.value.filter(
        (B) => {
          var W;
          return B.name.toLowerCase().includes(I) || ((W = B.current_branch) == null ? void 0 : W.toLowerCase().includes(I));
        }
      );
    });
    function L(I) {
      d("create", I), b.value = !1;
    }
    function $() {
      b.value = !0;
    }
    function f(I) {
      h.value = I;
    }
    function R(I) {
      h.value = null, d("delete", I);
    }
    async function O() {
      y.value = !0, m.value = null;
      try {
        v.value = await p();
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return De(O), r({
      loadEnvironments: O,
      openCreateModal: $
    }), (I, B) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (W) => u.value = !0)
          }, {
            actions: i(() => [
              g(te, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: i(() => [...B[6] || (B[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(te, {
                variant: "secondary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...B[7] || (B[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(xt, {
            modelValue: l.value,
            "onUpdate:modelValue": B[1] || (B[1] = (W) => l.value = W),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), S(rt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), S(dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length ? (s(), S(St, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + n(v.value.length) + " " + n(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(G, { key: 0 }, [
                  B[8] || (B[8] = w(" • Current: ", -1)),
                  e("strong", null, n(k.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (s(), S(Le, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: i(() => [
                (s(!0), o(G, null, se(C.value, (W) => (s(), S(xf, {
                  key: W.name,
                  "environment-name": W.name,
                  "is-current": W.is_current,
                  "current-branch": W.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    W.is_current ? c("", !0) : (s(), S(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => I.$emit("switch", W.name)
                    }, {
                      default: i(() => [...B[9] || (B[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => f(W)
                    }, {
                      default: i(() => [...B[10] || (B[10] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? c("", !0) : (s(), S(Qe, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(te, {
                    variant: "primary",
                    onClick: $
                  }, {
                    default: i(() => [...B[11] || (B[11] = [
                      w(" Create Environment ", -1)
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
      g(it, {
        show: u.value,
        title: "About Environments",
        onClose: B[3] || (B[3] = (W) => u.value = !1)
      }, {
        content: i(() => [...B[12] || (B[12] = [
          e("p", null, [
            e("strong", null, "Environments"),
            w(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Use cases:")
          ], -1),
          e("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
            e("li", null, "Separate production and development workflows"),
            e("li", null, "Test different node configurations"),
            e("li", null, "Experiment with new models safely"),
            e("li", null, "Maintain multiple project versions")
          ], -1)
        ])]),
        actions: i(() => [
          g(te, {
            variant: "secondary",
            onClick: B[2] || (B[2] = (W) => u.value = !1)
          }, {
            default: i(() => [...B[13] || (B[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), S(jf, {
        key: 0,
        environment: h.value,
        "can-delete": v.value.length > 1,
        onClose: B[4] || (B[4] = (W) => h.value = null),
        onDelete: R
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (s(), S(ag, {
        key: 1,
        onClose: B[5] || (B[5] = (W) => b.value = !1),
        onCreate: L
      })) : c("", !0)
    ], 64));
  }
}), lg = /* @__PURE__ */ Q(ng, [["__scopeId", "data-v-fd2c82b3"]]), ig = { class: "file-path" }, rg = { class: "file-path-text" }, dg = ["title"], cg = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, a = _(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(r.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, v) => (s(), o("div", ig, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", rg, n(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: d
      }, n(a.value ? "✓" : "📋"), 9, dg)) : c("", !0)
    ]));
  }
}), ug = /* @__PURE__ */ Q(cg, [["__scopeId", "data-v-f0982173"]]), mg = { class: "output-path-input" }, vg = { class: "export-actions" }, fg = {
  key: 1,
  class: "export-warning"
}, gg = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = Te(), a = _(""), d = _(!1), p = _(null), v = _(!1);
    async function y() {
      d.value = !0, p.value = null;
      try {
        const l = await r(a.value || void 0);
        p.value = l;
      } catch (l) {
        p.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function m() {
      var l;
      if ((l = p.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (l, u) => (s(), o(G, null, [
      g(Ve, null, {
        header: i(() => [
          g(Ae, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(te, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => v.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...u[5] || (u[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    e("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g(Le, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Ue, { status: "synced" }, {
                icon: i(() => [...u[6] || (u[6] = [
                  w("📦", -1)
                ])]),
                title: i(() => [...u[7] || (u[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...u[8] || (u[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  g(Se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(Se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(Se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(Se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Le, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Ue, { status: "synced" }, {
                icon: i(() => [...u[9] || (u[9] = [
                  w("📁", -1)
                ])]),
                title: i(() => [...u[10] || (u[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: i(() => [...u[11] || (u[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", mg, [
                    g(Ht, {
                      modelValue: a.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => a.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Le, { title: "EXPORT" }, {
            default: i(() => [
              e("div", vg, [
                g(te, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: y
                }, {
                  default: i(() => [
                    u[12] || (u[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    w(" " + n(d.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                a.value ? (s(), S(te, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: u[2] || (u[2] = (b) => a.value = "")
                }, {
                  default: i(() => [...u[13] || (u[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), S(Le, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(Ue, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: i(() => [
                  w(n(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(n(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(n(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(Se, { label: "Saved to:" }, {
                      default: i(() => [
                        g(ug, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), S(Se, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", fg, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => p.value = null)
                    }, {
                      default: i(() => [...u[16] || (u[16] = [
                        w(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(it, {
        show: v.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => v.value = !1)
      }, {
        content: i(() => [...u[17] || (u[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            w(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), pg = /* @__PURE__ */ Q(gg, [["__scopeId", "data-v-1777a9d5"]]), hg = { class: "file-input-wrapper" }, yg = ["accept", "multiple", "disabled"], wg = /* @__PURE__ */ X({
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
  setup(t, { expose: r, emit: a }) {
    const d = a, p = _(null);
    function v() {
      var m;
      (m = p.value) == null || m.click();
    }
    function y(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return r({
      triggerInput: v
    }), (m, l) => (s(), o("div", hg, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: y
      }, null, 40, yg),
      g(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          ge(m.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + n(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), kg = /* @__PURE__ */ Q(wg, [["__scopeId", "data-v-cd192091"]]), bg = {
  key: 0,
  class: "drop-zone-empty"
}, _g = { class: "drop-zone-text" }, $g = { class: "drop-zone-primary" }, Cg = { class: "drop-zone-secondary" }, xg = { class: "drop-zone-actions" }, Sg = {
  key: 1,
  class: "drop-zone-file"
}, Ig = { class: "file-info" }, Eg = { class: "file-details" }, Mg = { class: "file-name" }, zg = { class: "file-size" }, Lg = /* @__PURE__ */ X({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: r }) {
    const a = r, d = _(!1), p = _(null), v = _(0), y = U(() => p.value !== null), m = U(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), l = U(() => {
      if (!p.value) return "";
      const f = p.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(f) {
      var R;
      v.value++, (R = f.dataTransfer) != null && R.types.includes("Files") && (d.value = !0);
    }
    function b(f) {
      f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function h() {
      v.value--, v.value === 0 && (d.value = !1);
    }
    function k(f) {
      var O;
      v.value = 0, d.value = !1;
      const R = (O = f.dataTransfer) == null ? void 0 : O.files;
      R && R.length > 0 && L(R[0]);
    }
    function C(f) {
      f.length > 0 && L(f[0]);
    }
    function L(f) {
      p.value = f, a("fileSelected", f);
    }
    function $() {
      p.value = null, a("clear");
    }
    return (f, R) => (s(), o("div", {
      class: le(["file-drop-zone", { "drop-active": d.value, "has-file": y.value }]),
      onDragenter: ze(u, ["prevent"]),
      onDragover: ze(b, ["prevent"]),
      onDragleave: ze(h, ["prevent"]),
      onDrop: ze(k, ["prevent"])
    }, [
      y.value ? (s(), o("div", Sg, [
        e("div", Ig, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Eg, [
            e("div", Mg, n(m.value), 1),
            e("div", zg, n(l.value), 1)
          ])
        ]),
        g(te, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: i(() => [...R[2] || (R[2] = [
            e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (s(), o("div", bg, [
        R[0] || (R[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", _g, [
          e("p", $g, n(t.primaryText), 1),
          e("p", Cg, n(t.secondaryText), 1)
        ]),
        e("div", xg, [
          g(kg, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: i(() => [
              w(n(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Dg = /* @__PURE__ */ Q(Lg, [["__scopeId", "data-v-e00abbca"]]), Rg = { class: "import-preview" }, Tg = { class: "preview-header" }, Ng = {
  key: 0,
  class: "source-env"
}, Ug = { class: "preview-content" }, Pg = { class: "preview-section" }, Bg = { class: "section-header" }, Og = { class: "section-info" }, Fg = { class: "section-count" }, Vg = {
  key: 0,
  class: "item-list"
}, Ag = { class: "item-name" }, Wg = {
  key: 0,
  class: "item-more"
}, Gg = { class: "preview-section" }, jg = { class: "section-header" }, Hg = { class: "section-info" }, Kg = { class: "section-count" }, qg = {
  key: 0,
  class: "item-list"
}, Yg = { class: "item-details" }, Xg = { class: "item-name" }, Qg = { class: "item-meta" }, Zg = {
  key: 0,
  class: "item-more"
}, Jg = { class: "preview-section" }, ep = { class: "section-header" }, tp = { class: "section-info" }, sp = { class: "section-count" }, op = {
  key: 0,
  class: "item-list"
}, ap = { class: "item-name" }, np = {
  key: 0,
  class: "item-more"
}, lp = {
  key: 0,
  class: "preview-section"
}, ip = { class: "git-info" }, rp = /* @__PURE__ */ X({
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
  setup(t) {
    const r = t, a = U(() => r.workflows.length), d = U(() => r.models.length), p = U(() => r.nodes.length);
    function v(y) {
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (y, m) => (s(), o("div", Rg, [
      e("div", Tg, [
        g(Ge, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Ng, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(os, null, {
            default: i(() => [
              w(n(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Ug, [
        e("div", Pg, [
          e("div", Bg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Og, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Fg, n(a.value) + " file" + n(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Vg, [
            (s(!0), o(G, null, se(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ag, n(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Wg, " +" + n(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Gg, [
          e("div", jg, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Hg, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Kg, n(d.value) + " file" + n(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", qg, [
            (s(!0), o(G, null, se(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Yg, [
                e("span", Xg, n(l.filename), 1),
                e("span", Qg, n(v(l.size)) + " • " + n(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Zg, " +" + n(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Jg, [
          e("div", ep, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", tp, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", sp, n(p.value) + " node" + n(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", op, [
            (s(!0), o(G, null, se(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ap, n(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", np, " +" + n(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", lp, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", ip, [
            t.gitBranch ? (s(), S(Se, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(os, null, {
                  default: i(() => [
                    w(n(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), S(Se, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(ks, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), dp = /* @__PURE__ */ Q(rp, [["__scopeId", "data-v-182fe113"]]), cp = { class: "import-options" }, up = { class: "options-container" }, mp = { class: "option-section" }, vp = { class: "conflict-options" }, fp = ["value", "checked", "onChange"], gp = { class: "conflict-content" }, pp = { class: "conflict-label" }, hp = { class: "conflict-description" }, yp = { class: "option-section" }, wp = { class: "component-toggles" }, kp = /* @__PURE__ */ X({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: r }) {
    const a = r, d = [
      {
        value: "overwrite",
        label: "Overwrite Existing",
        description: "Replace existing workflows and models"
      },
      {
        value: "keep",
        label: "Keep Existing",
        description: "Skip files that already exist"
      },
      {
        value: "rename",
        label: "Rename New",
        description: "Add suffix to imported files"
      }
    ];
    return (p, v) => (s(), o("div", cp, [
      g(Ge, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", up, [
        e("div", mp, [
          g(ss, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", vp, [
            (s(), o(G, null, se(d, (y) => e("label", {
              key: y.value,
              class: le(["conflict-option", { active: t.conflictMode === y.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: y.value,
                checked: t.conflictMode === y.value,
                onChange: (m) => a("update:conflictMode", y.value)
              }, null, 40, fp),
              e("div", gp, [
                e("span", pp, n(y.label), 1),
                e("span", hp, n(y.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", yp, [
          g(ss, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", wp, [
            g(nt, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(wt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (y) => a("update:includeWorkflows", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(nt, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(wt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (y) => a("update:includeModels", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(nt, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(wt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (y) => a("update:includeNodes", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(nt, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(wt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (y) => a("update:includeGitHistory", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), bp = /* @__PURE__ */ Q(kp, [["__scopeId", "data-v-0ec212b0"]]), _p = {
  key: 0,
  class: "import-empty"
}, $p = { class: "import-help" }, Cp = {
  key: 1,
  class: "import-configure"
}, xp = { class: "selected-file-bar" }, Sp = { class: "file-bar-content" }, Ip = { class: "file-bar-info" }, Ep = { class: "file-bar-name" }, Mp = { class: "file-bar-size" }, zp = { class: "import-actions" }, Lp = {
  key: 2,
  class: "import-progress"
}, Dp = { class: "progress-content" }, Rp = { class: "progress-info" }, Tp = { class: "progress-title" }, Np = { class: "progress-detail" }, Up = { class: "progress-bar" }, Pp = { class: "progress-status" }, Bp = {
  key: 3,
  class: "import-complete"
}, Op = { class: "complete-message" }, Fp = { class: "complete-title" }, Vp = { class: "complete-details" }, Ap = { class: "complete-actions" }, Wp = /* @__PURE__ */ X({
  __name: "ImportSection",
  setup(t) {
    const r = _(null), a = _(!1), d = _(!1), p = _(!1), v = _(""), y = _({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = _({
      sourceEnvironment: "production-env",
      workflows: [
        "workflow-1.json",
        "workflow-2.json",
        "complex-workflow.json"
      ],
      models: [
        { filename: "sd_xl_base_1.0.safetensors", size: 6938025472, type: "Stable-diffusion" },
        { filename: "controlnet_canny.safetensors", size: 1445075712, type: "ControlNet" },
        { filename: "vae.safetensors", size: 334643200, type: "VAE" }
      ],
      nodes: [
        "comfyui-impact-pack",
        "comfyui-controlnet-aux",
        "comfyui-custom-scripts"
      ],
      gitBranch: "main",
      gitCommit: "a1b2c3d"
    }), u = U(() => y.value.includeWorkflows || y.value.includeModels || y.value.includeNodes || y.value.includeGitHistory);
    function b($) {
      r.value = $;
    }
    function h() {
      r.value = null, d.value = !1, p.value = !1, v.value = "";
    }
    function k() {
      h(), a.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (r.value) {
        a.value = !0, d.value = !1;
        try {
          const $ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const f of $)
            m.value = f, await new Promise((R) => setTimeout(R, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((f) => setTimeout(f, 500)), p.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch ($) {
          p.value = !1, v.value = $ instanceof Error ? $.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, d.value = !0;
        }
      }
    }
    function L($) {
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ($, f) => (s(), S(Ve, null, {
      header: i(() => [
        g(Ae, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !r.value && !a.value ? (s(), o("div", _p, [
          g(Dg, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", $p, [
            g(Ge, null, {
              default: i(() => [...f[5] || (f[5] = [
                w("How to Import", -1)
              ])]),
              _: 1
            }),
            f[6] || (f[6] = e("div", { class: "help-content" }, [
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "1"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Select Export File"),
                  e("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "2"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Review Preview"),
                  e("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "3"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Configure Options"),
                  e("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "4"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Import"),
                  e("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : r.value && !a.value && !d.value ? (s(), o("div", Cp, [
          e("div", xp, [
            e("div", Sp, [
              f[7] || (f[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Ip, [
                e("div", Ep, n(r.value.name), 1),
                e("div", Mp, n(L(r.value.size)), 1)
              ])
            ]),
            g(te, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: i(() => [...f[8] || (f[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(dp, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(bp, {
            "conflict-mode": y.value.conflictMode,
            "onUpdate:conflictMode": f[0] || (f[0] = (R) => y.value.conflictMode = R),
            "include-workflows": y.value.includeWorkflows,
            "onUpdate:includeWorkflows": f[1] || (f[1] = (R) => y.value.includeWorkflows = R),
            "include-models": y.value.includeModels,
            "onUpdate:includeModels": f[2] || (f[2] = (R) => y.value.includeModels = R),
            "include-nodes": y.value.includeNodes,
            "onUpdate:includeNodes": f[3] || (f[3] = (R) => y.value.includeNodes = R),
            "include-git-history": y.value.includeGitHistory,
            "onUpdate:includeGitHistory": f[4] || (f[4] = (R) => y.value.includeGitHistory = R)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !y.value.includeModels && l.value.models.length > 0 ? (s(), S(at, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", zp, [
            g(te, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: C
            }, {
              default: i(() => [...f[9] || (f[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                w(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            g(te, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: i(() => [...f[10] || (f[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (s(), o("div", Lp, [
          e("div", Dp, [
            f[11] || (f[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Rp, [
              e("div", Tp, n(m.value.message), 1),
              e("div", Np, n(m.value.detail), 1)
            ])
          ]),
          e("div", Up, [
            e("div", {
              class: "progress-bar-fill",
              style: Xe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Pp, n(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Bp, [
          e("div", {
            class: le(["complete-icon", p.value ? "success" : "error"])
          }, n(p.value ? "✓" : "✕"), 3),
          e("div", Op, [
            e("div", Fp, n(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Vp, n(v.value), 1)
          ]),
          e("div", Ap, [
            g(te, {
              variant: "primary",
              size: "md",
              onClick: k
            }, {
              default: i(() => [...f[12] || (f[12] = [
                w(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Gp = /* @__PURE__ */ Q(Wp, [["__scopeId", "data-v-18e18eb5"]]), jp = { class: "header-info" }, Hp = { class: "commit-hash" }, Kp = {
  key: 0,
  class: "commit-refs"
}, qp = { class: "commit-message" }, Yp = { class: "commit-date" }, Xp = {
  key: 0,
  class: "loading"
}, Qp = {
  key: 1,
  class: "changes-section"
}, Zp = { class: "stats-row" }, Jp = { class: "stat" }, eh = { class: "stat insertions" }, th = { class: "stat deletions" }, sh = {
  key: 0,
  class: "change-group"
}, oh = {
  key: 1,
  class: "change-group"
}, ah = {
  key: 0,
  class: "version"
}, nh = {
  key: 2,
  class: "change-group"
}, lh = { class: "change-item" }, ih = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: a } = Te(), d = _(null), p = _(!0), v = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), y = U(() => {
      if (!d.value) return !1;
      const m = d.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return De(async () => {
      try {
        d.value = await a(r.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, l) => (s(), S(lt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (u) => m.$emit("close"))
    }, {
      header: i(() => {
        var u, b, h, k;
        return [
          e("div", jp, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Hp, n(((u = d.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (h = d.value) == null ? void 0 : h.refs) != null && k.length ? (s(), o("span", Kp, [
              (s(!0), o(G, null, se(d.value.refs, (C) => (s(), o("span", {
                key: C,
                class: "ref-badge"
              }, n(C), 1))), 128))
            ])) : c("", !0)
          ]),
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (C) => m.$emit("close"))
          }, {
            default: i(() => [...l[5] || (l[5] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: i(() => {
        var u, b;
        return [
          e("div", qp, n(((u = d.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Yp, n(((b = d.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", Xp, "Loading details...")) : d.value ? (s(), o("div", Qp, [
            e("div", Zp, [
              e("span", Jp, n(d.value.stats.files_changed) + " files", 1),
              e("span", eh, "+" + n(d.value.stats.insertions), 1),
              e("span", th, "-" + n(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", sh, [
              g(Pt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, se(d.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, se(d.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(h), 1)
              ]))), 128)),
              (s(!0), o(G, null, se(d.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h), 1)
              ]))), 128))
            ])) : c("", !0),
            y.value ? (s(), o("div", oh, [
              g(Pt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, se(d.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(h.name), 1),
                h.version ? (s(), o("span", ah, "(" + n(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(G, null, se(d.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", nh, [
              g(Pt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", lh, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: "primary",
          onClick: l[2] || (l[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), rh = /* @__PURE__ */ Q(ih, [["__scopeId", "data-v-d256ff6d"]]), dh = { class: "dialog-message" }, ch = {
  key: 0,
  class: "dialog-details"
}, uh = {
  key: 1,
  class: "dialog-warning"
}, mh = /* @__PURE__ */ X({
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
  setup(t) {
    return (r, a) => (s(), S(lt, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (d) => r.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", dh, n(t.message), 1),
        t.details && t.details.length ? (s(), o("div", ch, [
          (s(!0), o(G, null, se(t.details, (d, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + n(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", uh, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + n(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (d) => r.$emit("cancel"))
        }, {
          default: i(() => [
            w(n(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(re, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (d) => r.$emit("secondary"))
        }, {
          default: i(() => [
            w(n(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
        }, {
          default: i(() => [
            w(n(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), vh = /* @__PURE__ */ Q(mh, [["__scopeId", "data-v-3670b9f5"]]), fh = { class: "base-textarea-wrapper" }, gh = ["value", "rows", "placeholder", "disabled", "maxlength"], ph = {
  key: 0,
  class: "base-textarea-count"
}, hh = /* @__PURE__ */ X({
  __name: "BaseTextarea",
  props: {
    modelValue: {},
    rows: { default: 3 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    maxLength: {},
    showCharCount: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "ctrlEnter"],
  setup(t) {
    return (r, a) => (s(), o("div", fh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          a[1] || (a[1] = mt(ze((d) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = mt(ze((d) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, gh),
      t.showCharCount && t.maxLength ? (s(), o("div", ph, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ Q(hh, [["__scopeId", "data-v-5516e6fc"]]), yh = ["checked", "disabled"], wh = { class: "base-checkbox-box" }, kh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, bh = {
  key: 0,
  class: "base-checkbox-label"
}, _h = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, a) => (s(), o("label", {
      class: le(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: a[0] || (a[0] = (d) => r.$emit("update:modelValue", d.target.checked))
      }, null, 40, yh),
      e("span", wh, [
        t.modelValue ? (s(), o("svg", kh, [...a[1] || (a[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      r.$slots.default ? (s(), o("span", bh, [
        ge(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ps = /* @__PURE__ */ Q(_h, [["__scopeId", "data-v-bf17c831"]]), $h = { class: "popover-header" }, Ch = { class: "popover-body" }, xh = {
  key: 0,
  class: "changes-summary"
}, Sh = {
  key: 0,
  class: "change-item"
}, Ih = {
  key: 1,
  class: "change-item"
}, Eh = {
  key: 2,
  class: "change-item"
}, Mh = {
  key: 3,
  class: "change-item"
}, zh = {
  key: 4,
  class: "change-item"
}, Lh = {
  key: 1,
  class: "no-changes"
}, Dh = {
  key: 2,
  class: "loading"
}, Rh = {
  key: 3,
  class: "issues-error"
}, Th = { class: "error-header" }, Nh = { class: "error-title" }, Uh = { class: "issues-list" }, Ph = { class: "message-section" }, Bh = { class: "popover-footer" }, Oh = {
  key: 1,
  class: "commit-popover"
}, Fh = { class: "popover-header" }, Vh = { class: "popover-body" }, Ah = {
  key: 0,
  class: "changes-summary"
}, Wh = {
  key: 0,
  class: "change-item"
}, Gh = {
  key: 1,
  class: "change-item"
}, jh = {
  key: 2,
  class: "change-item"
}, Hh = {
  key: 3,
  class: "change-item"
}, Kh = {
  key: 4,
  class: "change-item"
}, qh = {
  key: 1,
  class: "no-changes"
}, Yh = {
  key: 2,
  class: "loading"
}, Xh = {
  key: 3,
  class: "issues-error"
}, Qh = { class: "error-header" }, Zh = { class: "error-title" }, Jh = { class: "issues-list" }, e1 = { class: "message-section" }, t1 = { class: "popover-footer" }, s1 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const a = t, d = r, { commit: p } = Te(), v = _(""), y = _(!1), m = _(!1), l = _(null), u = U(() => {
      if (!a.status) return !1;
      const L = a.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || a.status.has_changes;
    }), b = U(() => {
      var L;
      return (L = a.status) != null && L.workflows.analyzed ? a.status.workflows.analyzed.filter(
        ($) => $.has_issues && ($.sync_state === "new" || $.sync_state === "modified")
      ) : [];
    }), h = U(() => b.value.length > 0), k = U(() => h.value && !m.value);
    async function C() {
      var L, $, f;
      if (!(h.value && !m.value) && !(!u.value || !v.value.trim() || y.value)) {
        y.value = !0, l.value = null;
        try {
          const R = await p(v.value.trim(), m.value);
          R.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((L = R.summary) == null ? void 0 : L.new) || 0} new, ${(($ = R.summary) == null ? void 0 : $.modified) || 0} modified, ${((f = R.summary) == null ? void 0 : f.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => d("committed"), 1e3)) : R.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : R.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: R.message || "Commit failed" };
        } catch (R) {
          l.value = { type: "error", message: R instanceof Error ? R.message : "Commit failed" };
        } finally {
          y.value = !1;
        }
      }
    }
    return (L, $) => t.asModal ? (s(), S(Pe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (f) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", $h, [
            $[11] || ($[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (f) => d("close"))
            }, [...$[10] || ($[10] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          e("div", Ch, [
            t.status && u.value ? (s(), o("div", xh, [
              t.status.workflows.new.length ? (s(), o("div", Sh, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Ih, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Eh, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Mh, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", zh, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", Lh, " No changes to commit ")) : (s(), o("div", Dh, " Loading... ")),
            h.value ? (s(), o("div", Rh, [
              e("div", Th, [
                $[17] || ($[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Nh, n(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Uh, [
                (s(!0), o(G, null, se(b.value, (f) => (s(), o("div", {
                  key: f.name,
                  class: "issue-item"
                }, [
                  e("strong", null, n(f.name), 1),
                  w(": " + n(f.issue_summary), 1)
                ]))), 128))
              ]),
              g(ps, {
                modelValue: m.value,
                "onUpdate:modelValue": $[1] || ($[1] = (f) => m.value = f),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...$[18] || ($[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Ph, [
              g(gs, {
                modelValue: v.value,
                "onUpdate:modelValue": $[2] || ($[2] = (f) => v.value = f),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || y.value || k.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: le(["result", l.value.type])
            }, n(l.value.message), 3)) : c("", !0)
          ]),
          e("div", Bh, [
            g(re, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (f) => d("close"))
            }, {
              default: i(() => [...$[19] || ($[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !v.value.trim() || y.value || k.value,
              loading: y.value,
              onClick: C
            }, {
              default: i(() => [
                w(n(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Oh, [
      e("div", Fh, [
        $[21] || ($[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (f) => d("close"))
        }, [...$[20] || ($[20] = [
          e("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      e("div", Vh, [
        t.status && u.value ? (s(), o("div", Ah, [
          t.status.workflows.new.length ? (s(), o("div", Wh, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Gh, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", jh, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Hh, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Kh, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", qh, " No changes to commit ")) : (s(), o("div", Yh, " Loading... ")),
        h.value ? (s(), o("div", Xh, [
          e("div", Qh, [
            $[27] || ($[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Zh, n(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Jh, [
            (s(!0), o(G, null, se(b.value, (f) => (s(), o("div", {
              key: f.name,
              class: "issue-item"
            }, [
              e("strong", null, n(f.name), 1),
              w(": " + n(f.issue_summary), 1)
            ]))), 128))
          ]),
          g(ps, {
            modelValue: m.value,
            "onUpdate:modelValue": $[7] || ($[7] = (f) => m.value = f),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...$[28] || ($[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", e1, [
          g(gs, {
            modelValue: v.value,
            "onUpdate:modelValue": $[8] || ($[8] = (f) => v.value = f),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || y.value || k.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: le(["result", l.value.type])
        }, n(l.value.message), 3)) : c("", !0)
      ]),
      e("div", t1, [
        g(re, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (f) => d("close"))
        }, {
          default: i(() => [...$[29] || ($[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !v.value.trim() || y.value || k.value,
          loading: y.value,
          onClick: C
        }, {
          default: i(() => [
            w(n(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ls = /* @__PURE__ */ Q(s1, [["__scopeId", "data-v-d92153de"]]), o1 = { class: "modal-header" }, a1 = { class: "modal-body" }, n1 = { class: "switch-message" }, l1 = { class: "switch-details" }, i1 = { class: "modal-actions" }, r1 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), S(Pe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", o1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", a1, [
            e("p", n1, [
              a[6] || (a[6] = w(" Switch from ", -1)),
              e("strong", null, n(t.fromEnvironment), 1),
              a[7] || (a[7] = w(" to ", -1)),
              e("strong", null, n(t.toEnvironment), 1),
              a[8] || (a[8] = w("? ", -1))
            ]),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", l1, ' Your current work will be preserved. You can switch back to "' + n(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", i1, [
            g(te, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(te, {
              variant: "primary",
              onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...a[12] || (a[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), d1 = /* @__PURE__ */ Q(r1, [["__scopeId", "data-v-e9c5253e"]]), c1 = { class: "progress-bar" }, u1 = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, a = U(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (d, p) => (s(), o("div", c1, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: Xe({ width: a.value })
      }, null, 6)
    ]));
  }
}), m1 = /* @__PURE__ */ Q(u1, [["__scopeId", "data-v-1beb0512"]]), v1 = {
  key: 0,
  class: "modal-overlay"
}, f1 = { class: "modal-content" }, g1 = { class: "modal-body" }, p1 = { class: "progress-info" }, h1 = { class: "progress-percentage" }, y1 = { class: "progress-state" }, w1 = { class: "switch-steps" }, k1 = { class: "step-icon" }, b1 = { class: "step-label" }, _1 = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, a = U(() => {
      const v = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return r.message || v[r.state] || r.state;
    }), d = U(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), p = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], y = v.findIndex((m) => m.state === r.state);
      return v.map((m, l) => {
        let u = "pending", b = "○";
        return l < y ? (u = "completed", b = "✓") : l === y && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (v, y) => (s(), S(Pe, { to: "body" }, [
      t.show ? (s(), o("div", v1, [
        e("div", f1, [
          y[1] || (y[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", g1, [
            g(m1, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", p1, [
              e("div", h1, n(t.progress) + "%", 1),
              e("div", y1, n(a.value), 1)
            ]),
            e("div", w1, [
              (s(!0), o(G, null, se(p.value, (m) => (s(), o("div", {
                key: m.state,
                class: le(["switch-step", m.status])
              }, [
                e("span", k1, n(m.icon), 1),
                e("span", b1, n(m.label), 1)
              ], 2))), 128))
            ]),
            y[0] || (y[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), $1 = /* @__PURE__ */ Q(_1, [["__scopeId", "data-v-768a5078"]]), C1 = { class: "modal-header" }, x1 = { class: "modal-body" }, S1 = {
  key: 0,
  class: "node-section"
}, I1 = { class: "node-list" }, E1 = {
  key: 1,
  class: "node-section"
}, M1 = { class: "node-list" }, z1 = { class: "modal-actions" }, L1 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, a) => (s(), S(Pe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (d) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", C1, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (d) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", x1, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", S1, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", I1, [
                (s(!0), o(G, null, se(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", E1, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", M1, [
                (s(!0), o(G, null, se(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item remove"
                }, " - " + n(d), 1))), 128))
              ])
            ])) : c("", !0),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", z1, [
            g(te, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (d) => r.$emit("close"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(te, {
              variant: "primary",
              onClick: a[2] || (a[2] = (d) => r.$emit("confirm"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), D1 = /* @__PURE__ */ Q(L1, [["__scopeId", "data-v-7cad7518"]]), R1 = { class: "wizard-steps" }, T1 = { class: "step-number" }, N1 = {
  key: 0,
  class: "wizard-step"
}, U1 = { class: "form-field" }, P1 = ["placeholder"], B1 = {
  key: 0,
  class: "form-error"
}, O1 = { class: "form-field form-field--checkbox" }, F1 = { class: "form-checkbox" }, V1 = {
  key: 0,
  class: "form-field"
}, A1 = ["placeholder"], W1 = {
  key: 0,
  class: "form-info"
}, G1 = {
  key: 1,
  class: "form-suggestion"
}, j1 = {
  key: 2,
  class: "form-error"
}, H1 = {
  key: 3,
  class: "form-info"
}, K1 = {
  key: 1,
  class: "wizard-progress"
}, q1 = { class: "progress-bar" }, Y1 = { class: "progress-message" }, X1 = {
  key: 1,
  class: "wizard-step"
}, Q1 = { class: "form-field" }, Z1 = { class: "form-field" }, J1 = ["value"], ey = { class: "form-field" }, ty = ["disabled"], sy = ["value"], oy = { class: "form-field" }, ay = ["value"], ny = { class: "form-field form-field--checkbox" }, ly = { class: "form-checkbox" }, iy = {
  key: 0,
  class: "wizard-progress"
}, ry = { class: "progress-bar" }, dy = { class: "progress-message" }, cy = {
  key: 1,
  class: "form-error"
}, Gt = 10, uy = 600 * 1e3, my = 1800 * 1e3, vy = /* @__PURE__ */ X({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {}
  },
  emits: ["complete", "close"],
  setup(t, { emit: r }) {
    const a = t, d = r, {
      initializeWorkspace: p,
      getInitializeProgress: v,
      validatePath: y,
      createEnvironment: m,
      getCreateProgress: l,
      getComfyUIReleases: u
    } = Te(), b = _(1), h = _(a.defaultPath), k = _(!!a.detectedModelsDir), C = _(a.detectedModelsDir || ""), L = _(null), $ = _(null), f = _(null), R = _(null), O = _("my-new-env"), I = _(Es), B = _("latest"), W = _(zs), F = _(!0), N = _(null), D = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), x = _(!1), z = _(!1), ee = _(!1), Y = _({ progress: 0, message: "" }), ae = _({ progress: 0, message: "" }), me = _(0), de = _(null), J = _(0), P = _(null), E = U(() => {
      var be, ie;
      const oe = (be = h.value) == null ? void 0 : be.trim(), A = !L.value, Z = !k.value || !$.value && ((ie = C.value) == null ? void 0 : ie.trim());
      return oe && A && Z;
    }), ne = U(() => {
      var oe;
      return (oe = O.value) == null ? void 0 : oe.trim();
    });
    async function q() {
      var oe;
      if (L.value = null, !!((oe = h.value) != null && oe.trim()))
        try {
          const A = await y({ path: h.value, type: "workspace" });
          A.valid || (L.value = A.error || "Invalid path");
        } catch (A) {
          L.value = A instanceof Error ? A.message : "Validation failed";
        }
    }
    async function Ee() {
      var oe;
      if ($.value = null, f.value = null, R.value = null, !!((oe = C.value) != null && oe.trim()))
        try {
          const A = await y({ path: C.value, type: "models" });
          if (A.valid)
            R.value = A.model_count ?? null;
          else if ($.value = A.error || "Invalid path", A.suggestion) {
            f.value = A.suggestion, C.value = A.suggestion, $.value = null;
            const Z = await y({ path: A.suggestion, type: "models" });
            Z.valid && (R.value = Z.model_count ?? null);
          }
        } catch (A) {
          $.value = A instanceof Error ? A.message : "Validation failed";
        }
    }
    async function $e() {
      var oe, A, Z;
      if (L.value = null, $.value = null, await q(), !L.value && !(k.value && ((oe = C.value) != null && oe.trim()) && (await Ee(), $.value))) {
        z.value = !0;
        try {
          await p({
            workspace_path: ((A = h.value) == null ? void 0 : A.trim()) || a.defaultPath,
            models_directory: k.value && ((Z = C.value) == null ? void 0 : Z.trim()) || null
          }), me.value = 0, de.value = Date.now();
          const be = setInterval(async () => {
            if (de.value && Date.now() - de.value > uy) {
              clearInterval(be), z.value = !1, L.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ie = await v();
              if (me.value = 0, ie.state === "idle" && z.value) {
                clearInterval(be), z.value = !1, L.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Y.value = { progress: ie.progress, message: ie.message }, ie.state === "complete" ? (clearInterval(be), z.value = !1, b.value = 2, Ke()) : ie.state === "error" && (clearInterval(be), z.value = !1, L.value = ie.error || "Workspace creation failed");
            } catch (ie) {
              me.value++, console.warn(`Polling failure ${me.value}/${Gt}:`, ie), me.value >= Gt && (clearInterval(be), z.value = !1, L.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (be) {
          z.value = !1, L.value = be instanceof Error ? be.message : "Failed to create workspace";
        }
      }
    }
    async function Ne() {
      ee.value = !0, N.value = null;
      try {
        const oe = {
          name: O.value.trim() || "my-new-env",
          python_version: I.value,
          comfyui_version: B.value,
          torch_backend: W.value,
          switch_after: F.value
        };
        if ((await m(oe)).status === "started") {
          J.value = 0, P.value = Date.now();
          const Z = setInterval(async () => {
            if (P.value && Date.now() - P.value > my) {
              clearInterval(Z), ee.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await l();
              if (J.value = 0, be.state === "idle" && ee.value) {
                clearInterval(Z), ee.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              ae.value = {
                progress: be.state === "creating" ? 50 : be.state === "complete" ? 100 : 0,
                message: be.message
              }, be.state === "complete" ? (clearInterval(Z), d("complete", be.environment_name || oe.name)) : be.state === "error" && (clearInterval(Z), ee.value = !1, N.value = be.error || "Environment creation failed");
            } catch (be) {
              J.value++, console.warn(`Polling failure ${J.value}/${Gt}:`, be), J.value >= Gt && (clearInterval(Z), ee.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        ee.value = !1, N.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function Ke() {
      x.value = !0;
      try {
        D.value = await u();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        x.value = !1;
      }
    }
    return De(() => {
      a.detectedModelsDir && (C.value = a.detectedModelsDir);
    }), (oe, A) => (s(), S(lt, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: A[9] || (A[9] = (Z) => oe.$emit("close"))
    }, {
      body: i(() => [
        e("div", R1, [
          e("div", {
            class: le(["step", { active: b.value === 1, complete: b.value > 1 }])
          }, [
            e("span", T1, n(b.value > 1 ? "✓" : "1"), 1),
            A[10] || (A[10] = e("span", { class: "step-label" }, "Workspace", -1))
          ], 2),
          A[12] || (A[12] = e("div", { class: "step-connector" }, null, -1)),
          e("div", {
            class: le(["step", { active: b.value === 2 }])
          }, [...A[11] || (A[11] = [
            e("span", { class: "step-number" }, "2", -1),
            e("span", { class: "step-label" }, "Environment", -1)
          ])], 2)
        ]),
        b.value === 1 ? (s(), o("div", N1, [
          A[16] || (A[16] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
          e("div", U1, [
            A[13] || (A[13] = e("label", { class: "form-label" }, "Workspace Path", -1)),
            Fe(e("input", {
              "onUpdate:modelValue": A[0] || (A[0] = (Z) => h.value = Z),
              type: "text",
              class: "form-input",
              placeholder: t.defaultPath,
              onBlur: q
            }, null, 40, P1), [
              [Ut, h.value]
            ]),
            L.value ? (s(), o("p", B1, n(L.value), 1)) : c("", !0)
          ]),
          e("div", O1, [
            e("label", F1, [
              Fe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[1] || (A[1] = (Z) => k.value = Z)
              }, null, 512), [
                [ts, k.value]
              ]),
              A[14] || (A[14] = e("span", null, "I have existing ComfyUI models", -1))
            ])
          ]),
          k.value ? (s(), o("div", V1, [
            A[15] || (A[15] = e("label", { class: "form-label" }, "Models Directory", -1)),
            Fe(e("input", {
              "onUpdate:modelValue": A[2] || (A[2] = (Z) => C.value = Z),
              type: "text",
              class: "form-input",
              placeholder: t.detectedModelsDir || "/path/to/models",
              onBlur: Ee
            }, null, 40, A1), [
              [Ut, C.value]
            ]),
            t.detectedModelsDir && !C.value ? (s(), o("p", W1, " Detected: " + n(t.detectedModelsDir), 1)) : c("", !0),
            f.value ? (s(), o("p", G1, " Did you mean: " + n(f.value), 1)) : c("", !0),
            $.value ? (s(), o("p", j1, n($.value), 1)) : c("", !0),
            R.value !== null && !$.value ? (s(), o("p", H1, " Found " + n(R.value) + " model files ", 1)) : c("", !0)
          ])) : c("", !0),
          z.value ? (s(), o("div", K1, [
            e("div", q1, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${Y.value.progress}%` })
              }, null, 4)
            ]),
            e("p", Y1, n(Y.value.message), 1)
          ])) : c("", !0)
        ])) : c("", !0),
        b.value === 2 ? (s(), o("div", X1, [
          A[22] || (A[22] = e("p", { class: "wizard-intro" }, " Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows. ", -1)),
          e("div", Q1, [
            A[17] || (A[17] = e("label", { class: "form-label" }, "Environment Name", -1)),
            Fe(e("input", {
              "onUpdate:modelValue": A[3] || (A[3] = (Z) => O.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-new-env"
            }, null, 512), [
              [Ut, O.value]
            ])
          ]),
          e("div", Z1, [
            A[18] || (A[18] = e("label", { class: "form-label" }, "Python Version", -1)),
            Fe(e("select", {
              "onUpdate:modelValue": A[4] || (A[4] = (Z) => I.value = Z),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(pe(Is), (Z) => (s(), o("option", {
                key: Z,
                value: Z
              }, n(Z), 9, J1))), 128))
            ], 512), [
              [$t, I.value]
            ])
          ]),
          e("div", ey, [
            A[19] || (A[19] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Fe(e("select", {
              "onUpdate:modelValue": A[5] || (A[5] = (Z) => B.value = Z),
              class: "form-select",
              disabled: x.value
            }, [
              (s(!0), o(G, null, se(D.value, (Z) => (s(), o("option", {
                key: Z.tag_name,
                value: Z.tag_name
              }, n(Z.name), 9, sy))), 128))
            ], 8, ty), [
              [$t, B.value]
            ])
          ]),
          e("div", oy, [
            A[20] || (A[20] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Fe(e("select", {
              "onUpdate:modelValue": A[6] || (A[6] = (Z) => W.value = Z),
              class: "form-select"
            }, [
              (s(!0), o(G, null, se(pe(Ms), (Z) => (s(), o("option", {
                key: Z,
                value: Z
              }, n(Z) + n(Z === "auto" ? " (detect GPU)" : ""), 9, ay))), 128))
            ], 512), [
              [$t, W.value]
            ])
          ]),
          e("div", ny, [
            e("label", ly, [
              Fe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[7] || (A[7] = (Z) => F.value = Z),
                checked: ""
              }, null, 512), [
                [ts, F.value]
              ]),
              A[21] || (A[21] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ]),
          ee.value ? (s(), o("div", iy, [
            e("div", ry, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${ae.value.progress}%` })
              }, null, 4)
            ]),
            e("p", dy, n(ae.value.message), 1)
          ])) : c("", !0),
          N.value ? (s(), o("div", cy, n(N.value), 1)) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        b.value === 1 ? (s(), S(re, {
          key: 0,
          variant: "primary",
          disabled: !E.value || z.value,
          onClick: $e
        }, {
          default: i(() => [
            w(n(z.value ? "Creating..." : "Next"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : b.value === 2 ? (s(), o(G, { key: 1 }, [
          g(re, {
            variant: "secondary",
            disabled: ee.value,
            onClick: A[8] || (A[8] = (Z) => b.value = 1)
          }, {
            default: i(() => [...A[23] || (A[23] = [
              w(" Back ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          g(re, {
            variant: "primary",
            disabled: !ne.value || ee.value,
            onClick: Ne
          }, {
            default: i(() => [
              w(n(ee.value ? "Creating..." : "Create & Switch"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 64)) : c("", !0)
      ]),
      _: 1
    }));
  }
}), fy = /* @__PURE__ */ Q(vy, [["__scopeId", "data-v-4d9ac500"]]), gy = { class: "comfygit-panel" }, py = { class: "panel-header" }, hy = { class: "header-left" }, yy = {
  key: 0,
  class: "header-info"
}, wy = { class: "header-actions" }, ky = { class: "env-switcher" }, by = {
  key: 0,
  class: "header-info"
}, _y = { class: "branch-name" }, $y = { class: "panel-main" }, Cy = { class: "sidebar" }, xy = { class: "sidebar-section" }, Sy = { class: "sidebar-section" }, Iy = { class: "sidebar-section" }, Ey = { class: "content-area" }, My = {
  key: 0,
  class: "error-message"
}, zy = {
  key: 1,
  class: "loading"
}, Ly = {
  key: 4,
  class: "dialog-overlay"
}, Dy = { class: "dialog-content create-progress-dialog" }, Ry = { class: "dialog-body create-progress-body" }, Ty = { class: "create-progress-message" }, Ny = { class: "dialog-content env-selector-dialog" }, Uy = { class: "dialog-header" }, Py = { class: "dialog-body" }, By = { class: "env-list" }, Oy = { class: "env-info" }, Fy = { class: "env-name-row" }, Vy = { class: "env-indicator" }, Ay = { class: "env-name" }, Wy = {
  key: 0,
  class: "env-branch"
}, Gy = {
  key: 1,
  class: "current-label"
}, jy = { class: "env-stats" }, Hy = ["onClick"], Ky = { class: "toast-container" }, qy = { class: "toast-icon" }, Yy = { class: "toast-message" }, Xy = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const a = r, {
      getStatus: d,
      getHistory: p,
      getBranches: v,
      checkout: y,
      createBranch: m,
      switchBranch: l,
      deleteBranch: u,
      getEnvironments: b,
      switchEnvironment: h,
      getSwitchProgress: k,
      createEnvironment: C,
      getCreateProgress: L,
      deleteEnvironment: $,
      syncEnvironmentManually: f,
      getSetupStatus: R
    } = Te(), O = _s(), I = _(null), B = _([]), W = _([]), F = _([]), N = U(() => F.value.find((V) => V.is_current)), D = _(null), x = _(!1), z = U(() => {
      var V;
      return ((V = D.value) == null ? void 0 : V.state) || "managed";
    }), ee = _(!1), Y = _(null), ae = _(null), me = _(!1), de = _(null), J = _(null), P = _(!1), E = _(!1), ne = _(""), q = _({ state: "idle", progress: 0, message: "" });
    let Ee = null, $e = null;
    const Ne = _(!1), Ke = _({ state: "idle", message: "" }), oe = _(null);
    let A = null;
    const Z = _("status"), be = _("this-env");
    function ie(V, M) {
      Z.value = V, be.value = M;
    }
    function vt(V) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[V];
      ce && ie(ce.view, ce.section);
    }
    function It() {
      ie("branches", "this-env");
    }
    function Et() {
      a("close"), setTimeout(() => {
        var M;
        const V = document.querySelectorAll("button.comfyui-button");
        for (const ce of V)
          if (((M = ce.textContent) == null ? void 0 : M.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const _e = _(null), ct = _(!1), st = _(!1), Ze = _([]);
    let Mt = 0;
    function fe(V, M = "info", ce = 3e3) {
      const Ie = ++Mt;
      return Ze.value.push({ id: Ie, message: V, type: M }), ce > 0 && setTimeout(() => {
        Ze.value = Ze.value.filter((Be) => Be.id !== Ie);
      }, ce), Ie;
    }
    function je(V) {
      Ze.value = Ze.value.filter((M) => M.id !== V);
    }
    function H(V) {
      switch (V) {
        case "success":
          return "✓";
        case "warning":
          return "!";
        case "error":
          return "✕";
        default:
          return "→";
      }
    }
    const we = U(() => {
      if (!I.value) return "neutral";
      const V = I.value.workflows, M = V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? M ? "warning" : "success" : "error";
    });
    U(() => I.value ? we.value === "success" ? "All synced" : we.value === "warning" ? "Uncommitted changes" : we.value === "error" ? "Not synced" : "" : "");
    async function xe() {
      ee.value = !0, Y.value = null;
      try {
        const [V, M, ce, Ie] = await Promise.all([
          d(!0),
          p(),
          v(),
          b()
        ]);
        I.value = V, B.value = M.commits, W.value = ce.branches, F.value = Ie, a("statusUpdate", V), de.value && await de.value.loadWorkflows(!0);
      } catch (V) {
        Y.value = V instanceof Error ? V.message : "Failed to load status", I.value = null, B.value = [], W.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function kt(V) {
      ae.value = V;
    }
    async function ft(V) {
      var ce;
      ae.value = null;
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      _e.value = {
        title: M ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: M ? "You have uncommitted changes that will be lost." : `Checkout commit ${V.short_hash || ((ce = V.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: M ? ms() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: M,
        onConfirm: async () => {
          var Oe;
          _e.value = null, ve();
          const Ie = fe(`Checking out ${V.short_hash || ((Oe = V.hash) == null ? void 0 : Oe.slice(0, 7))}...`, "info", 0), Be = await y(V.hash, M);
          je(Ie), Be.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Be.message || "Checkout failed", "error");
        }
      };
    }
    async function Xt(V) {
      const M = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      _e.value = {
        title: M ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: M ? "You have uncommitted changes." : `Switch to branch "${V}"?`,
        details: M ? ms() : void 0,
        warning: M ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          _e.value = null, ve();
          const ce = fe(`Switching to ${V}...`, "info", 0), Ie = await l(V, M);
          je(ce), Ie.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function j(V) {
      const M = fe(`Creating branch ${V}...`, "info", 0), ce = await m(V);
      je(M), ce.status === "success" ? (fe(`Branch "${V}" created`, "success"), await xe()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function T(V, M = !1) {
      const ce = async (Ie) => {
        var Oe;
        const Be = fe(`Deleting branch ${V}...`, "info", 0);
        try {
          const ot = await u(V, Ie);
          je(Be), ot.status === "success" ? (fe(`Branch "${V}" deleted`, "success"), await xe()) : (Oe = ot.message) != null && Oe.includes("not fully merged") ? _e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              _e.value = null, await ce(!0);
            }
          } : fe(ot.message || "Failed to delete branch", "error");
        } catch (ot) {
          je(Be);
          const zt = ot instanceof Error ? ot.message : "Failed to delete branch";
          zt.includes("not fully merged") ? _e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${V}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              _e.value = null, await ce(!0);
            }
          } : fe(zt, "error");
        }
      };
      _e.value = {
        title: "Delete Branch",
        message: `Delete branch "${V}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          _e.value = null, await ce(M);
        }
      };
    }
    async function K(V) {
      ae.value = null;
      const M = prompt("Enter branch name:");
      if (M) {
        const ce = fe(`Creating branch ${M}...`, "info", 0), Ie = await m(M, V.hash);
        je(ce), Ie.status === "success" ? (fe(`Branch "${M}" created from ${V.short_hash}`, "success"), await xe()) : fe(Ie.message || "Failed to create branch", "error");
      }
    }
    function ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Re() {
      _e.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          _e.value = null, ve(), fe("Restarting environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ut() {
      _e.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var V;
          _e.value = null, fe("Stopping environment...", "info");
          try {
            (V = window.app) != null && V.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Je(V) {
      me.value = !1, ne.value = V, P.value = !0;
    }
    async function Vt() {
      P.value = !1, E.value = !0, ve(), q.value = {
        progress: 10,
        state: gt(10),
        message: pt(10)
      };
      try {
        await h(ne.value), Ps(), Bs();
      } catch (V) {
        ht(), E.value = !1, fe(`Failed to initiate switch: ${V instanceof Error ? V.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function gt(V) {
      return V >= 100 ? "complete" : V >= 80 ? "validating" : V >= 60 ? "starting" : V >= 30 ? "syncing" : "preparing";
    }
    function pt(V) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[gt(V)] || "";
    }
    function Ps() {
      if ($e) return;
      let V = 10;
      const M = 60, ce = 5e3, Ie = 100, Be = (M - V) / (ce / Ie);
      $e = window.setInterval(() => {
        if (V += Be, V >= M && (V = M, ht()), q.value.progress < M) {
          const Oe = Math.floor(V);
          q.value = {
            progress: Oe,
            state: gt(Oe),
            message: pt(Oe)
          };
        }
      }, Ie);
    }
    function ht() {
      $e && (clearInterval($e), $e = null);
    }
    function Bs() {
      Ee || (Ee = window.setInterval(async () => {
        try {
          let V = await O.getStatus();
          if ((!V || V.state === "idle") && (V = await k()), !V)
            return;
          const M = V.progress || 0;
          M >= 60 && ht();
          const ce = Math.max(M, q.value.progress), Ie = V.state && V.state !== "idle" && V.state !== "unknown", Be = Ie ? V.state : gt(ce), Oe = Ie && V.message || pt(ce);
          q.value = {
            state: Be,
            progress: ce,
            message: Oe
          }, V.state === "complete" ? (ht(), Qt(), E.value = !1, fe(`✓ Switched to ${ne.value}`, "success"), await xe(), ne.value = "") : V.state === "rolled_back" ? (ht(), Qt(), E.value = !1, fe("Switch failed, restored previous environment", "warning"), ne.value = "") : V.state === "critical_failure" && (ht(), Qt(), E.value = !1, fe(`Critical error during switch: ${V.message}`, "error"), ne.value = "");
        } catch (V) {
          console.error("Failed to poll switch progress:", V);
        }
      }, 1e3));
    }
    function Qt() {
      ht(), Ee && (clearInterval(Ee), Ee = null);
    }
    function Os() {
      P.value = !1, ne.value = "";
    }
    async function Fs() {
      ct.value = !1, await xe(), fe("✓ Changes committed", "success");
    }
    async function Vs() {
      st.value = !1;
      const V = fe("Syncing environment...", "info", 0);
      try {
        const M = await f("skip", !0);
        if (je(V), M.status === "success") {
          const ce = [];
          M.nodes_installed.length && ce.push(`${M.nodes_installed.length} installed`), M.nodes_removed.length && ce.push(`${M.nodes_removed.length} removed`);
          const Ie = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${Ie}`, "success"), await xe();
        } else {
          const ce = M.errors.length ? M.errors.join("; ") : M.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (M) {
        je(V), fe(`Sync error: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
      }
    }
    async function As(V) {
      oe.value = V, Ne.value = !0, Ke.value = { state: "creating", message: `Creating environment '${V.name}'...` };
      try {
        const M = await C(V);
        M.status === "started" ? Ws() : M.status === "error" && (Ne.value = !1, fe(`Failed to create environment: ${M.message}. Check debug logs for details.`, "error"), oe.value = null);
      } catch (M) {
        Ne.value = !1, fe(`Error creating environment: ${M instanceof Error ? M.message : "Unknown error"}. Check debug logs.`, "error"), oe.value = null;
      }
    }
    function Ws() {
      A || (A = window.setInterval(async () => {
        var V;
        try {
          const M = await L();
          Ke.value = { state: M.state, message: M.message }, M.state === "complete" ? (us(), Ne.value = !1, fe(`✓ Environment '${M.environment_name}' created`, "success"), await xe(), J.value && await J.value.loadEnvironments(), (V = oe.value) != null && V.switch_after && M.environment_name && await Je(M.environment_name), oe.value = null) : M.state === "error" && (us(), Ne.value = !1, fe(`Failed to create environment: ${M.error || M.message}. Check debug logs.`, "error"), oe.value = null);
        } catch (M) {
          console.error("Failed to poll create progress:", M);
        }
      }, 2e3));
    }
    function us() {
      A && (clearInterval(A), A = null);
    }
    async function Gs(V) {
      var M;
      if (((M = N.value) == null ? void 0 : M.name) === V) {
        fe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      _e.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${V}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          _e.value = null;
          try {
            const ce = await $(V);
            ce.status === "success" ? (fe(`Environment "${V}" deleted`, "success"), await xe(), J.value && await J.value.loadEnvironments()) : fe(ce.message || "Failed to delete environment", "error");
          } catch (ce) {
            fe(`Error deleting environment: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function js(V) {
      x.value = !1;
      try {
        D.value = await R();
      } catch {
      }
      await Je(V);
    }
    function Hs() {
      x.value = !1, a("close");
    }
    function Ks() {
      ie("environments", "all-envs"), setTimeout(() => {
        var V;
        (V = J.value) == null || V.openCreateModal();
      }, 100);
    }
    function ms() {
      if (!I.value) return [];
      const V = [], M = I.value.workflows;
      return M.new.length && V.push(`${M.new.length} new workflow(s)`), M.modified.length && V.push(`${M.modified.length} modified workflow(s)`), M.deleted.length && V.push(`${M.deleted.length} deleted workflow(s)`), V;
    }
    return De(async () => {
      try {
        if (D.value = await R(), D.value.state === "no_workspace") {
          x.value = !0;
          return;
        }
      } catch (V) {
        console.warn("Setup status check failed, proceeding normally:", V);
      }
      await xe();
    }), (V, M) => {
      var ce, Ie, Be, Oe, ot, zt;
      return s(), o("div", gy, [
        e("div", py, [
          e("div", hy, [
            M[29] || (M[29] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (s(), o("div", yy)) : c("", !0)
          ]),
          e("div", wy, [
            e("button", {
              class: le(["icon-btn", { spinning: ee.value }]),
              onClick: xe,
              title: "Refresh"
            }, [...M[30] || (M[30] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            e("button", {
              class: "icon-btn",
              onClick: M[0] || (M[0] = (ue) => a("close")),
              title: "Close"
            }, [...M[31] || (M[31] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        e("div", ky, [
          e("div", { class: "env-switcher-header" }, [
            M[32] || (M[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Re
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ut
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: M[1] || (M[1] = (ue) => ie("environments", "all-envs"))
          }, [
            I.value ? (s(), o("div", by, [
              e("span", null, n(((ce = N.value) == null ? void 0 : ce.name) || ((Ie = I.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", _y, "(" + n(I.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            M[33] || (M[33] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", $y, [
          e("div", Cy, [
            e("div", xy, [
              M[34] || (M[34] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "status" && be.value === "this-env" }]),
                onClick: M[2] || (M[2] = (ue) => ie("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "workflows" }]),
                onClick: M[3] || (M[3] = (ue) => ie("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "models-env" }]),
                onClick: M[4] || (M[4] = (ue) => ie("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "branches" }]),
                onClick: M[5] || (M[5] = (ue) => ie("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "history" }]),
                onClick: M[6] || (M[6] = (ue) => ie("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "nodes" }]),
                onClick: M[7] || (M[7] = (ue) => ie("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "debug-env" }]),
                onClick: M[8] || (M[8] = (ue) => ie("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            M[37] || (M[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Sy, [
              M[35] || (M[35] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "environments" }]),
                onClick: M[9] || (M[9] = (ue) => ie("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "model-index" }]),
                onClick: M[10] || (M[10] = (ue) => ie("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "settings" }]),
                onClick: M[11] || (M[11] = (ue) => ie("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                onClick: M[12] || (M[12] = (ue) => ie("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            M[38] || (M[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Iy, [
              M[36] || (M[36] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "export" }]),
                onClick: M[13] || (M[13] = (ue) => ie("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "import" }]),
                onClick: M[14] || (M[14] = (ue) => ie("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: Z.value === "remotes" }]),
                onClick: M[15] || (M[15] = (ue) => ie("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ey, [
            Y.value ? (s(), o("div", My, n(Y.value), 1)) : !I.value && Z.value === "status" ? (s(), o("div", zy, " Loading status... ")) : (s(), o(G, { key: 2 }, [
              Z.value === "status" ? (s(), S(Cn, {
                key: 0,
                status: I.value,
                "setup-state": z.value,
                onSwitchBranch: It,
                onCommitChanges: M[16] || (M[16] = (ue) => ct.value = !0),
                onSyncEnvironment: M[17] || (M[17] = (ue) => st.value = !0),
                onViewWorkflows: M[18] || (M[18] = (ue) => ie("workflows", "this-env")),
                onViewHistory: M[19] || (M[19] = (ue) => ie("history", "this-env")),
                onViewDebug: M[20] || (M[20] = (ue) => ie("debug-env", "this-env")),
                onStartSetup: M[21] || (M[21] = (ue) => x.value = !0),
                onViewEnvironments: M[22] || (M[22] = (ue) => ie("environments", "all-envs")),
                onCreateEnvironment: Ks
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), S(Xu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: de,
                onRefresh: xe
              }, null, 512)) : Z.value === "models-env" ? (s(), S(Dm, {
                key: 2,
                onNavigate: vt
              })) : Z.value === "branches" ? (s(), S(On, {
                key: 3,
                branches: W.value,
                current: ((Be = I.value) == null ? void 0 : Be.branch) || null,
                onSwitch: Xt,
                onCreate: j,
                onDelete: T
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), S(Xn, {
                key: 4,
                commits: B.value,
                onSelect: kt,
                onCheckout: ft
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), S(kv, {
                key: 5,
                onOpenNodeManager: Et
              })) : Z.value === "debug-env" ? (s(), S(kf, { key: 6 })) : Z.value === "environments" ? (s(), S(lg, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: J,
                onSwitch: Je,
                onCreate: As,
                onDelete: Gs
              }, null, 512)) : Z.value === "model-index" ? (s(), S(Zm, {
                key: 8,
                onRefresh: xe
              })) : Z.value === "settings" ? (s(), S(pf, { key: 9 })) : Z.value === "debug-workspace" ? (s(), S(yf, { key: 10 })) : Z.value === "export" ? (s(), S(pg, { key: 11 })) : Z.value === "import" ? (s(), S(Gp, { key: 12 })) : Z.value === "remotes" ? (s(), S(Xv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        ae.value ? (s(), S(rh, {
          key: 0,
          commit: ae.value,
          onClose: M[23] || (M[23] = (ue) => ae.value = null),
          onCheckout: ft,
          onCreateBranch: K
        }, null, 8, ["commit"])) : c("", !0),
        _e.value ? (s(), S(vh, {
          key: 1,
          title: _e.value.title,
          message: _e.value.message,
          details: _e.value.details,
          warning: _e.value.warning,
          confirmLabel: _e.value.confirmLabel,
          cancelLabel: _e.value.cancelLabel,
          secondaryLabel: _e.value.secondaryLabel,
          secondaryAction: _e.value.secondaryAction,
          destructive: _e.value.destructive,
          onConfirm: _e.value.onConfirm,
          onCancel: M[24] || (M[24] = (ue) => _e.value = null),
          onSecondary: _e.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(d1, {
          show: P.value,
          "from-environment": ((Oe = N.value) == null ? void 0 : Oe.name) || "unknown",
          "to-environment": ne.value,
          onConfirm: Vt,
          onClose: Os
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ct.value && I.value ? (s(), S(Ls, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: M[25] || (M[25] = (ue) => ct.value = !1),
          onCommitted: Fs
        }, null, 8, ["status"])) : c("", !0),
        st.value && I.value ? (s(), S(D1, {
          key: 3,
          show: st.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: Vs,
          onClose: M[26] || (M[26] = (ue) => st.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g($1, {
          show: E.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Ne.value ? (s(), o("div", Ly, [
          e("div", Dy, [
            M[41] || (M[41] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", Ry, [
              M[39] || (M[39] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", Ty, n(Ke.value.message), 1),
              M[40] || (M[40] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        me.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: M[28] || (M[28] = ze((ue) => me.value = !1, ["self"]))
        }, [
          e("div", Ny, [
            e("div", Uy, [
              M[43] || (M[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: M[27] || (M[27] = (ue) => me.value = !1)
              }, [...M[42] || (M[42] = [
                e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            e("div", Py, [
              M[44] || (M[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", By, [
                (s(!0), o(G, null, se(F.value, (ue) => (s(), o("div", {
                  key: ue.name,
                  class: le(["env-item", { current: ue.is_current }])
                }, [
                  e("div", Oy, [
                    e("div", Fy, [
                      e("span", Vy, n(ue.is_current ? "●" : "○"), 1),
                      e("span", Ay, n(ue.name), 1),
                      ue.current_branch ? (s(), o("span", Wy, "(" + n(ue.current_branch) + ")", 1)) : c("", !0),
                      ue.is_current ? (s(), o("span", Gy, "CURRENT")) : c("", !0)
                    ]),
                    e("div", jy, n(ue.workflow_count) + " workflows • " + n(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (o0) => Je(ue.name)
                  }, " SWITCH ", 8, Hy))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        x.value ? (s(), S(fy, {
          key: 6,
          "default-path": ((ot = D.value) == null ? void 0 : ot.default_path) || "~/comfygit",
          "detected-models-dir": ((zt = D.value) == null ? void 0 : zt.detected_models_dir) || null,
          onComplete: js,
          onClose: Hs
        }, null, 8, ["default-path", "detected-models-dir"])) : c("", !0),
        e("div", Ky, [
          g(Zs, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(G, null, se(Ze.value, (ue) => (s(), o("div", {
                key: ue.id,
                class: le(["toast", ue.type])
              }, [
                e("span", qy, n(H(ue.type)), 1),
                e("span", Yy, n(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Qy = /* @__PURE__ */ Q(Xy, [["__scopeId", "data-v-2a9584ec"]]), Zy = { class: "item-header" }, Jy = { class: "item-info" }, ew = { class: "filename" }, tw = { class: "metadata" }, sw = { class: "size" }, ow = {
  key: 0,
  class: "type"
}, aw = { class: "item-actions" }, nw = {
  key: 0,
  class: "progress-section"
}, lw = { class: "progress-bar" }, iw = { class: "progress-stats" }, rw = { class: "downloaded" }, dw = { class: "speed" }, cw = {
  key: 0,
  class: "eta"
}, uw = {
  key: 1,
  class: "status-msg paused"
}, mw = {
  key: 2,
  class: "status-msg queued"
}, vw = {
  key: 3,
  class: "status-msg completed"
}, fw = {
  key: 4,
  class: "status-msg failed"
}, gw = {
  key: 0,
  class: "retries"
}, pw = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const a = r;
    function d(y) {
      if (y === 0) return "?";
      const m = y / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(y / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(y) {
      return y === 0 ? "-" : `${(y / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(y) {
      if (y < 60) return `${Math.round(y)}s`;
      const m = Math.floor(y / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (y, m) => (s(), o("div", {
      class: le(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Zy, [
        e("div", Jy, [
          e("div", ew, n(t.item.filename), 1),
          e("div", tw, [
            e("span", sw, n(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", ow, n(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", aw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => a("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => a("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => a("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => a("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", nw, [
        e("div", lw, [
          e("div", {
            class: "progress-fill",
            style: Xe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", iw, [
          e("span", rw, n(d(t.item.downloaded)) + " / " + n(d(t.item.size)), 1),
          e("span", dw, n(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", cw, n(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", uw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", mw, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", vw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", fw, [
        w(" ✗ " + n(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", gw, "(" + n(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ Q(pw, [["__scopeId", "data-v-2110df65"]]), hw = { class: "queue-title" }, yw = { class: "count" }, ww = { class: "queue-actions" }, kw = { class: "action-label" }, bw = {
  key: 0,
  class: "overall-progress"
}, _w = { class: "progress-bar" }, $w = {
  key: 0,
  class: "current-mini"
}, Cw = { class: "filename" }, xw = { class: "speed" }, Sw = {
  key: 1,
  class: "queue-content"
}, Iw = {
  key: 0,
  class: "section"
}, Ew = {
  key: 1,
  class: "section"
}, Mw = { class: "section-header" }, zw = { class: "section-label paused" }, Lw = { class: "items-list" }, Dw = {
  key: 2,
  class: "section"
}, Rw = { class: "section-header" }, Tw = { class: "section-label" }, Nw = { class: "items-list" }, Uw = {
  key: 3,
  class: "section"
}, Pw = { class: "section-header" }, Bw = { class: "section-label" }, Ow = { class: "items-list" }, Fw = {
  key: 4,
  class: "section"
}, Vw = { class: "section-header" }, Aw = { class: "section-label failed" }, Ww = { class: "items-list" }, Gw = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: a,
      queuedItems: d,
      completedItems: p,
      failedItems: v,
      pausedItems: y,
      hasItems: m,
      activeCount: l,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: h,
      resumeAllPaused: k,
      removeItem: C,
      clearCompleted: L
    } = Ft(), $ = _(!1);
    let f = null;
    qt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: y.value.length,
        completed: p.value.length
      }),
      (B, W) => {
        f && (clearTimeout(f), f = null);
        const F = B.active === 0 && B.failed === 0 && B.paused === 0 && B.completed > 0, N = W && (W.active > 0 || W.paused > 0);
        F && N && (f = setTimeout(() => {
          L(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const R = U(() => {
      var F;
      if (r.items.length === 0) return 0;
      const B = p.value.length, W = ((F = a.value) == null ? void 0 : F.progress) || 0;
      return Math.round((B + W / 100) / r.items.length * 100);
    });
    function O(B) {
      u(B);
    }
    function I(B) {
      return B === 0 ? "" : `${(B / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (B, W) => (s(), S(Pe, { to: "body" }, [
      pe(m) ? (s(), o("div", {
        key: 0,
        class: le(["model-download-queue", { minimized: !$.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (F) => $.value = !$.value)
        }, [
          e("div", hw, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", yw, "(" + n(pe(l)) + "/" + n(pe(r).items.length) + ")", 1)
          ]),
          e("div", ww, [
            e("span", kw, n($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (s(), o("div", Sw, [
          pe(a) ? (s(), o("div", Iw, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(Rt, {
              item: pe(a),
              onCancel: W[1] || (W[1] = (F) => O(pe(a).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          pe(y).length > 0 ? (s(), o("div", Ew, [
            e("div", Mw, [
              e("span", zw, "Paused (" + n(pe(y).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...F) => pe(k) && pe(k)(...F))
              }, "Resume All")
            ]),
            e("div", Lw, [
              (s(!0), o(G, null, se(pe(y), (F) => (s(), S(Rt, {
                key: F.id,
                item: F,
                onResume: (N) => pe(h)(F.id),
                onRemove: (N) => pe(C)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          pe(d).length > 0 ? (s(), o("div", Dw, [
            e("div", Rw, [
              e("span", Tw, "Queued (" + n(pe(d).length) + ")", 1)
            ]),
            e("div", Nw, [
              (s(!0), o(G, null, se(pe(d), (F) => (s(), S(Rt, {
                key: F.id,
                item: F,
                onCancel: (N) => O(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          pe(p).length > 0 ? (s(), o("div", Uw, [
            e("div", Pw, [
              e("span", Bw, "Completed (" + n(pe(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...F) => pe(L) && pe(L)(...F))
              }, "Clear")
            ]),
            e("div", Ow, [
              (s(!0), o(G, null, se(pe(p).slice(0, 3), (F) => (s(), S(Rt, {
                key: F.id,
                item: F,
                onRemove: (N) => pe(C)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          pe(v).length > 0 ? (s(), o("div", Fw, [
            e("div", Vw, [
              e("span", Aw, "Failed (" + n(pe(v).length) + ")", 1)
            ]),
            e("div", Ww, [
              (s(!0), o(G, null, se(pe(v), (F) => (s(), S(Rt, {
                key: F.id,
                item: F,
                onRetry: (N) => pe(b)(F.id),
                onRemove: (N) => pe(C)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", bw, [
          e("div", _w, [
            e("div", {
              class: "progress-fill",
              style: Xe({ width: `${R.value}%` })
            }, null, 4)
          ]),
          pe(a) ? (s(), o("div", $w, [
            e("span", Cw, n(pe(a).filename), 1),
            e("span", xw, n(I(pe(a).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), jw = /* @__PURE__ */ Q(Gw, [["__scopeId", "data-v-60751cfa"]]), Hw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Kw = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', qw = {
  comfy: Hw,
  phosphor: Kw
}, ds = "comfy", Ds = "comfygit-theme";
let yt = null, Rs = ds;
function Yw() {
  try {
    const t = localStorage.getItem(Ds);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ds;
}
function Ts(t = ds) {
  yt && yt.remove(), yt = document.createElement("style"), yt.id = "comfygit-theme-styles", yt.setAttribute("data-theme", t), yt.textContent = qw[t], document.head.appendChild(yt), document.body.setAttribute("data-comfygit-theme", t), Rs = t;
  try {
    localStorage.setItem(Ds, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Xw() {
  return Rs;
}
function Qw(t) {
  Ts(t);
}
const cs = document.createElement("link");
cs.rel = "stylesheet";
cs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(cs);
const Zw = Yw();
Ts(Zw);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Qw(t);
  },
  getTheme: () => {
    const t = Xw();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let qe = null, We = null, Bt = null, Tt = null, hs = null;
const Ct = _(null);
let Ns = "managed";
async function jt() {
  var t;
  if (!((t = _t) != null && t.api)) return null;
  try {
    const r = await _t.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ct.value = await r.json());
  } catch {
  }
}
async function as() {
  {
    Ns = "no_workspace";
    return;
  }
}
function Jw() {
  if (!Ct.value) return !1;
  const t = Ct.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ct.value.has_changes;
}
function e0() {
  qe && qe.remove(), qe = document.createElement("div"), qe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", qe.appendChild(t), qe.addEventListener("click", (d) => {
    d.target === qe && es();
  });
  const r = (d) => {
    d.key === "Escape" && (es(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), is({
    render: () => rs(Qy, {
      onClose: es,
      onStatusUpdate: async (d) => {
        Ct.value = d, Ot(), await as(), ns();
      }
    })
  }).mount(t), document.body.appendChild(qe);
}
function es() {
  qe && (qe.remove(), qe = null);
}
function t0(t) {
  Nt(), We = document.createElement("div"), We.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  We.style.position = "fixed", We.style.top = `${r.bottom + 8}px`, We.style.right = `${window.innerWidth - r.right}px`, We.style.zIndex = "10001";
  const a = (p) => {
    We && !We.contains(p.target) && p.target !== t && (Nt(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const d = (p) => {
    p.key === "Escape" && (Nt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Bt = is({
    render: () => rs(Ls, {
      status: Ct.value,
      onClose: Nt,
      onCommitted: () => {
        Nt(), jt().then(Ot);
      }
    })
  }), Bt.mount(We), document.body.appendChild(We);
}
function Nt() {
  Bt && (Bt.unmount(), Bt = null), We && (We.remove(), We = null);
}
function s0() {
  Tt || (Tt = document.createElement("div"), Tt.className = "comfygit-download-queue-root", hs = is({
    render: () => rs(jw)
  }), hs.mount(Tt), document.body.appendChild(Tt), console.log("[ComfyGit] Model download queue mounted"));
}
let He = null;
function Ot() {
  if (!He) return;
  const t = He.querySelector(".commit-indicator");
  t && (t.style.display = Jw() ? "block" : "none");
}
function ns() {
  if (!He) return;
  const t = Ns !== "managed";
  He.disabled = t, He.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Us = document.createElement("style");
Us.textContent = `
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
document.head.appendChild(Us);
_t.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = e0, He = document.createElement("button"), He.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", He.innerHTML = 'Commit <span class="commit-indicator"></span>', He.title = "Quick Commit", He.onclick = () => t0(He), t.appendChild(r), t.appendChild(He), (v = (p = _t.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (_t.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), s0();
    const { loadPendingDownloads: a } = Ft();
    a(), await Promise.all([jt(), as()]), Ot(), ns(), setInterval(async () => {
      await Promise.all([jt(), as()]), Ot(), ns();
    }, 3e4);
    const d = _t.api;
    if (d) {
      let y = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, m = function() {
        const u = document.createElement("div");
        u.style.cssText = `
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", u.appendChild(b);
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => y(), u.appendChild(h);
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => u.remove(), u.appendChild(k), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      d.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${h}`), await jt(), Ot();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), y()) : m()), l = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
