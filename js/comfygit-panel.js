import { app as At } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Me, createBlock as E, resolveDynamicComponent as zs, normalizeClass as ue, withCtx as r, toDisplayString as a, createVNode as w, createTextVNode as h, computed as U, Fragment as F, renderList as ae, normalizeStyle as It, ref as k, onMounted as He, watch as St, Teleport as Qe, withModifiers as Ge, Transition as Mo, createSlots as Dt, withKeys as kt, reactive as gs, onUnmounted as to, readonly as Po, unref as _e, withDirectives as Oe, vModelText as Lt, vModelRadio as Ft, vModelCheckbox as us, nextTick as To, vModelSelect as Tt, vModelDynamic as Ro, TransitionGroup as zo, createApp as ps, h as hs } from "vue";
const Lo = { class: "panel-layout" }, Do = {
  key: 0,
  class: "panel-layout-header"
}, No = {
  key: 1,
  class: "panel-layout-search"
}, Uo = { class: "panel-layout-content" }, Bo = {
  key: 2,
  class: "panel-layout-footer"
}, Oo = /* @__PURE__ */ oe({
  __name: "PanelLayout",
  setup(t) {
    return (l, n) => (s(), o("div", Lo, [
      l.$slots.header ? (s(), o("div", Do, [
        Me(l.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      l.$slots.search ? (s(), o("div", No, [
        Me(l.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Uo, [
        Me(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (s(), o("div", Bo, [
        Me(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ne = (t, l) => {
  const n = t.__vccOpts || t;
  for (const [i, m] of l)
    n[i] = m;
  return n;
}, et = /* @__PURE__ */ ne(Oo, [["__scopeId", "data-v-21565df9"]]), Ao = {
  key: 0,
  class: "panel-title-prefix"
}, Fo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Vo = /* @__PURE__ */ oe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (l, n) => (s(), E(zs(`h${t.level}`), {
      class: ue(["panel-title", t.variant])
    }, {
      default: r(() => [
        t.showPrefix ? (s(), o("span", Ao, a(t.prefix), 1)) : (s(), o("span", Fo)),
        Me(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wo = /* @__PURE__ */ ne(Vo, [["__scopeId", "data-v-c3875efc"]]), Go = ["title"], jo = ["width", "height"], Ho = /* @__PURE__ */ oe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => l.$emit("click"))
    }, [
      (s(), o("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
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
      ])], 8, jo))
    ], 8, Go));
  }
}), so = /* @__PURE__ */ ne(Ho, [["__scopeId", "data-v-6fc7f16d"]]), Ko = { class: "header-left" }, qo = {
  key: 0,
  class: "header-actions"
}, Yo = /* @__PURE__ */ oe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: ue(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ko, [
        w(Wo, { "show-prefix": t.showPrefix }, {
          default: r(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(so, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => l.$emit("info-click"))
        })) : d("", !0)
      ]),
      l.$slots.actions ? (s(), o("div", qo, [
        Me(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ ne(Yo, [["__scopeId", "data-v-55a62cd6"]]), Xo = {
  key: 0,
  class: "section-title-count"
}, Qo = {
  key: 1,
  class: "section-title-icon"
}, Zo = /* @__PURE__ */ oe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), E(zs(`h${t.level}`), {
      class: ue(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && l.$emit("click"))
    }, {
      default: r(() => [
        Me(l.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Xo, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Qo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dt = /* @__PURE__ */ ne(Zo, [["__scopeId", "data-v-559361eb"]]), Jo = { class: "status-grid" }, en = { class: "status-grid__columns" }, tn = { class: "status-grid__column" }, sn = { class: "status-grid__title" }, on = { class: "status-grid__column status-grid__column--right" }, nn = { class: "status-grid__title" }, an = {
  key: 0,
  class: "status-grid__footer"
}, ln = /* @__PURE__ */ oe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (l, n) => (s(), o("div", Jo, [
      e("div", en, [
        e("div", tn, [
          e("h4", sn, a(t.leftTitle), 1),
          Me(l.$slots, "left", {}, void 0, !0)
        ]),
        e("div", on, [
          e("h4", nn, a(t.rightTitle), 1),
          Me(l.$slots, "right", {}, void 0, !0)
        ])
      ]),
      l.$slots.footer ? (s(), o("div", an, [
        Me(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), rn = /* @__PURE__ */ ne(ln, [["__scopeId", "data-v-73b7ba3f"]]), dn = {
  key: 0,
  class: "status-item__icon"
}, cn = {
  key: 1,
  class: "status-item__count"
}, un = { class: "status-item__label" }, mn = /* @__PURE__ */ oe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, n = U(() => `status-item--${l.variant}`);
    return (i, m) => (s(), o("div", {
      class: ue(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", dn, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", cn, a(t.count), 1)) : d("", !0),
      e("span", un, a(t.label), 1)
    ], 2));
  }
}), yt = /* @__PURE__ */ ne(mn, [["__scopeId", "data-v-6f929183"]]), vn = { class: "issue-card__header" }, fn = { class: "issue-card__icon" }, gn = { class: "issue-card__title" }, pn = {
  key: 0,
  class: "issue-card__content"
}, hn = {
  key: 0,
  class: "issue-card__description"
}, yn = {
  key: 1,
  class: "issue-card__items"
}, wn = {
  key: 2,
  class: "issue-card__actions"
}, kn = /* @__PURE__ */ oe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const l = t, n = U(() => `issue-card--${l.severity}`);
    return (i, m) => (s(), o("div", {
      class: ue(["issue-card", n.value])
    }, [
      e("div", vn, [
        e("span", fn, a(t.icon), 1),
        e("h4", gn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", pn, [
        t.description ? (s(), o("p", hn, a(t.description), 1)) : d("", !0),
        Me(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", yn, [
        (s(!0), o(F, null, ae(t.items, (v, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          m[0] || (m[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", wn, [
        Me(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ ne(kn, [["__scopeId", "data-v-df6aa348"]]), _n = ["type", "disabled"], bn = {
  key: 0,
  class: "spinner"
}, $n = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ue(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => l.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", bn)) : d("", !0),
      t.loading ? d("", !0) : Me(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, _n));
  }
}), se = /* @__PURE__ */ ne($n, [["__scopeId", "data-v-772abe47"]]), Cn = { class: "empty-state" }, xn = {
  key: 0,
  class: "empty-icon"
}, Sn = { class: "empty-message" }, In = /* @__PURE__ */ oe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (l, n) => (s(), o("div", Cn, [
      t.icon ? (s(), o("div", xn, a(t.icon), 1)) : d("", !0),
      e("p", Sn, a(t.message), 1),
      t.actionLabel ? (s(), E(se, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => l.$emit("action"))
      }, {
        default: r(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), pt = /* @__PURE__ */ ne(In, [["__scopeId", "data-v-4466284f"]]), En = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (l, n) => (s(), o("span", {
      class: ue(["detail-label"]),
      style: It({ minWidth: t.minWidth })
    }, [
      Me(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ds = /* @__PURE__ */ ne(En, [["__scopeId", "data-v-75e9eeb8"]]), Mn = /* @__PURE__ */ oe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (l, n) => (s(), o("span", {
      class: ue(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Me(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ms = /* @__PURE__ */ ne(Mn, [["__scopeId", "data-v-2f186e4c"]]), Pn = { class: "detail-row" }, Tn = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("div", Pn, [
      w(ds, { "min-width": t.labelMinWidth }, {
        default: r(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(Ms, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: r(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Me(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), We = /* @__PURE__ */ ne(Tn, [["__scopeId", "data-v-ef15664a"]]), Rn = { class: "modal-header" }, zn = { class: "modal-body" }, Ln = { class: "status-section" }, Dn = {
  key: 0,
  class: "status-section"
}, Nn = { class: "section-header-row" }, Un = {
  key: 0,
  class: "workflow-group"
}, Bn = { class: "workflow-group-header" }, On = { class: "workflow-group-title" }, An = { class: "workflow-list" }, Fn = { class: "workflow-name" }, Vn = { class: "workflow-issue" }, Wn = {
  key: 1,
  class: "workflow-group"
}, Gn = { class: "workflow-group-header" }, jn = { class: "workflow-group-title" }, Hn = { class: "workflow-list" }, Kn = { class: "workflow-name" }, qn = { class: "workflow-issue" }, Yn = {
  key: 2,
  class: "workflow-group"
}, Xn = { class: "workflow-group-header" }, Qn = { class: "workflow-group-title" }, Zn = { class: "workflow-list" }, Jn = { class: "workflow-name" }, ea = {
  key: 3,
  class: "workflow-group"
}, ta = { class: "workflow-group-header" }, sa = { class: "workflow-group-title" }, oa = { class: "workflow-list" }, na = { class: "workflow-name" }, aa = {
  key: 4,
  class: "workflow-group"
}, la = { class: "workflow-group-header" }, ia = { class: "workflow-group-title" }, ra = { class: "workflow-list" }, da = { class: "workflow-name" }, ca = {
  key: 5,
  class: "workflow-group"
}, ua = { class: "workflow-group-title" }, ma = { class: "expand-icon" }, va = {
  key: 0,
  class: "workflow-list"
}, fa = { class: "workflow-name" }, ga = {
  key: 1,
  class: "status-section"
}, pa = {
  key: 0,
  class: "change-group"
}, ha = { class: "change-group-header" }, ya = { class: "change-group-title" }, wa = { class: "change-list" }, ka = { class: "node-name" }, _a = {
  key: 0,
  class: "dev-badge"
}, ba = {
  key: 1,
  class: "change-group"
}, $a = { class: "change-group-header" }, Ca = { class: "change-group-title" }, xa = { class: "change-list" }, Sa = { class: "node-name" }, Ia = {
  key: 0,
  class: "dev-badge"
}, Ea = {
  key: 2,
  class: "change-group"
}, Ma = { class: "change-list" }, Pa = { class: "change-item" }, Ta = { class: "node-name" }, Ra = {
  key: 3,
  class: "change-group"
}, za = {
  key: 2,
  class: "status-section"
}, La = { class: "section-header-row" }, Da = {
  key: 0,
  class: "drift-item"
}, Na = { class: "drift-list" }, Ua = {
  key: 0,
  class: "drift-list-more"
}, Ba = {
  key: 1,
  class: "drift-item"
}, Oa = { class: "drift-list" }, Aa = {
  key: 0,
  class: "drift-list-more"
}, Fa = {
  key: 2,
  class: "drift-item"
}, Va = { class: "drift-list" }, Wa = { class: "version-actual" }, Ga = { class: "version-expected" }, ja = {
  key: 0,
  class: "drift-list-more"
}, Ha = {
  key: 3,
  class: "drift-item"
}, Ka = { class: "repair-action" }, qa = {
  key: 3,
  class: "status-section"
}, Ya = { class: "info-box" }, Xa = { class: "drift-list" }, Qa = {
  key: 0,
  class: "drift-list-more"
}, Za = {
  key: 4,
  class: "status-section"
}, Ja = { class: "warning-box" }, el = {
  key: 5,
  class: "empty-state-inline"
}, tl = { class: "modal-actions" }, sl = /* @__PURE__ */ oe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const l = t, n = k(!1);
    He(() => {
      console.log("StatusDetailModal mounted, initial show value:", l.show);
    }), St(() => l.show, (b, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", b);
    }, { immediate: !0 });
    const i = U(() => {
      var b, _, T;
      return ((T = (_ = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), m = U(() => {
      var b, _, T;
      return ((T = (_ = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var b, _, T;
      return ((T = (_ = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : _.synced) == null ? void 0 : T.filter((x) => {
        var C, D, S;
        const $ = (S = (D = (C = l.status) == null ? void 0 : C.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : S.find((R) => R.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = U(() => {
      var b, _, T, x, $;
      return (b = l.status) != null && b.workflows ? (((_ = l.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((T = l.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((x = l.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = l.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), f = U(() => {
      var _, T, x;
      const b = (_ = l.status) == null ? void 0 : _.git_changes;
      return b ? (((T = b.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((x = b.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), c = U(() => {
      var b, _, T, x, $, C;
      return !u.value && !f.value && ((_ = (b = l.status) == null ? void 0 : b.comparison) == null ? void 0 : _.is_synced) && (((T = l.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = ($ = (x = l.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), g = U(() => {
      var _, T;
      const b = (T = (_ = l.status) == null ? void 0 : _.git_changes) == null ? void 0 : T.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function p(b) {
      return typeof b == "string" ? b : b.name;
    }
    function y(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, _) => {
      var T, x, $, C, D, S, R, W, V, j, M, z, B, re, Z, X, de, Y, N, L, P, ie;
      return s(), E(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[7] || (_[7] = (ee) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[6] || (_[6] = Ge(() => {
            }, ["stop"]))
          }, [
            e("div", Rn, [
              _[8] || (_[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (ee) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", zn, [
              e("div", Ln, [
                w(dt, { level: "4" }, {
                  default: r(() => [..._[9] || (_[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(We, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", Dn, [
                e("div", Nn, [
                  w(dt, { level: "4" }, {
                    default: r(() => [..._[10] || (_[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (ee) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Un, [
                  e("div", Bn, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", On, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", An, [
                    (s(!0), o(F, null, ae(i.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(ee.name), 1),
                      e("span", Vn, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                m.value.length ? (s(), o("div", Wn, [
                  e("div", Gn, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", jn, "BROKEN (UNCOMMITTED) (" + a(m.value.length) + ")", 1)
                  ]),
                  e("div", Hn, [
                    (s(!0), o(F, null, ae(m.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(ee.name), 1),
                      e("span", qn, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = (T = t.status.workflows) == null ? void 0 : T.new) != null && x.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Qn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(F, null, ae(t.status.workflows.new, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Jn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", ea, [
                  e("div", ta, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", sa, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", oa, [
                    (s(!0), o(F, null, ae(t.status.workflows.modified, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", na, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (S = (D = t.status.workflows) == null ? void 0 : D.deleted) != null && S.length ? (s(), o("div", aa, [
                  e("div", la, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ia, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ra, [
                    (s(!0), o(F, null, ae(t.status.workflows.deleted, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", da, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                v.value.length ? (s(), o("div", ca, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (ee) => n.value = !n.value)
                  }, [
                    _[16] || (_[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ua, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", ma, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", va, [
                    (s(!0), o(F, null, ae(v.value, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", fa, a(ee), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              f.value ? (s(), o("div", ga, [
                w(dt, { level: "4" }, {
                  default: r(() => [..._[17] || (_[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && W.length ? (s(), o("div", pa, [
                  e("div", ha, [
                    _[18] || (_[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ya, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", wa, [
                    (s(!0), o(F, null, ae(t.status.git_changes.nodes_added, (ee) => (s(), o("div", {
                      key: p(ee),
                      class: "change-item"
                    }, [
                      e("span", ka, a(p(ee)), 1),
                      y(ee) ? (s(), o("span", _a, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (j = (V = t.status.git_changes) == null ? void 0 : V.nodes_removed) != null && j.length ? (s(), o("div", ba, [
                  e("div", $a, [
                    _[19] || (_[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ca, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", xa, [
                    (s(!0), o(F, null, ae(t.status.git_changes.nodes_removed, (ee) => (s(), o("div", {
                      key: p(ee),
                      class: "change-item"
                    }, [
                      e("span", Sa, a(p(ee)), 1),
                      y(ee) ? (s(), o("span", Ia, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.workflow_changes ? (s(), o("div", Ea, [
                  _[20] || (_[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ma, [
                    e("div", Pa, [
                      e("span", Ta, a(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (z = t.status.git_changes) != null && z.has_other_changes ? (s(), o("div", Ra, [..._[21] || (_[21] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : d("", !0)
              ])) : d("", !0),
              (B = t.status.comparison) != null && B.is_synced ? d("", !0) : (s(), o("div", za, [
                e("div", La, [
                  w(dt, { level: "4" }, {
                    default: r(() => [..._[22] || (_[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (ee) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[26] || (_[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (Z = (re = t.status.comparison) == null ? void 0 : re.missing_nodes) != null && Z.length ? (s(), o("div", Da, [
                  w(We, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Na, [
                    (s(!0), o(F, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ua, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (de = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && de.length ? (s(), o("div", Ba, [
                  w(We, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Oa, [
                    (s(!0), o(F, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Aa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (N = (Y = t.status.comparison) == null ? void 0 : Y.version_mismatches) != null && N.length ? (s(), o("div", Fa, [
                  w(We, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Va, [
                    (s(!0), o(F, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(ee.name) + ": ", 1),
                      e("span", Wa, a(ee.actual), 1),
                      _[23] || (_[23] = h(" → ", -1)),
                      e("span", Ga, a(ee.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", ja, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((L = t.status.comparison) == null ? void 0 : L.packages_in_sync) === !1 ? (s(), o("div", Ha, [
                  w(We, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ka, [
                  w(se, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: _[4] || (_[4] = (ee) => b.$emit("repair"))
                  }, {
                    default: r(() => [..._[24] || (_[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  _[25] || (_[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ie = (P = t.status.comparison) == null ? void 0 : P.disabled_nodes) != null && ie.length ? (s(), o("div", qa, [
                w(dt, { level: "4" }, {
                  default: r(() => [..._[27] || (_[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ya, [
                  _[28] || (_[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Xa, [
                  (s(!0), o(F, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (s(), o("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Qa, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Za, [
                w(dt, { level: "4" }, {
                  default: r(() => [..._[29] || (_[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ja, [
                  _[30] || (_[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[31] || (_[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              c.value ? (s(), o("div", el, [..._[32] || (_[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", tl, [
              w(se, {
                variant: "secondary",
                onClick: _[5] || (_[5] = (ee) => b.$emit("close"))
              }, {
                default: r(() => [..._[33] || (_[33] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), ol = /* @__PURE__ */ ne(sl, [["__scopeId", "data-v-e2b37122"]]), nl = { class: "health-section-header" }, al = { class: "suggestions-content" }, ll = { class: "suggestions-text" }, il = { style: { "margin-top": "var(--cg-space-3)" } }, rl = {
  key: 1,
  class: "no-issues-text"
}, dl = /* @__PURE__ */ oe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: l, emit: n }) {
    const i = t, m = k(!1), v = k(!1);
    function u() {
      m.value = !0;
    }
    function f() {
      m.value = !1, g("view-workflows");
    }
    function c() {
      m.value = !1, g("view-nodes");
    }
    const g = n, p = k(!1), y = k(!1);
    function b() {
      y.value = !0, g("repair-environment");
    }
    function _() {
      y.value = !1;
    }
    function T() {
      m.value = !1;
    }
    const x = U(() => {
      const Y = i.status.workflows.analyzed || [], N = Y.filter(
        (L) => L.unresolved_models_count > 0 || L.ambiguous_models_count > 0
      );
      return N.length === 0 && i.status.missing_models_count > 0 ? Y.filter((L) => L.sync_state === "synced") : N;
    });
    function $() {
      const Y = x.value;
      Y.length !== 0 && (p.value = !0, g("repair-missing-models", Y.map((N) => N.name)));
    }
    function C() {
      p.value = !1;
    }
    l({ resetRepairingState: C, resetRepairingEnvironmentState: _, closeDetailModal: T });
    const D = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), S = U(() => i.status.has_changes), R = U(() => {
      const Y = i.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), W = U(() => i.status.has_changes || D.value), V = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), j = U(() => i.status.git_changes.has_other_changes), M = U(() => {
      var Y;
      return ((Y = i.status.workflows.analyzed) == null ? void 0 : Y.filter((N) => N.status === "broken")) || [];
    }), z = U(() => {
      var Y;
      return ((Y = i.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), B = U(() => M.value.length > 0), re = U(() => B.value || z.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), Z = U(() => {
      const Y = [];
      return i.status.workflows.new.length > 0 && Y.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && Y.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && Y.push(`${i.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), X = U(() => {
      var L, P;
      const Y = [], N = i.status.comparison;
      return (L = N.missing_nodes) != null && L.length && Y.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (P = N.extra_nodes) != null && P.length && Y.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), de = U(() => {
      var L, P;
      const Y = [], N = i.status.comparison;
      return (L = N.extra_nodes) != null && L.length && (N.extra_nodes.slice(0, 3).forEach((ie) => {
        Y.push(`Untracked: ${ie}`);
      }), N.extra_nodes.length > 3 && Y.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (P = N.missing_nodes) != null && P.length && (N.missing_nodes.slice(0, 3).forEach((ie) => {
        Y.push(`Missing: ${ie}`);
      }), N.missing_nodes.length > 3 && Y.push(`...and ${N.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, N) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, { title: "STATUS" })
        ]),
        content: r(() => [
          i.setupState === "no_workspace" ? (s(), E(vt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (L) => Y.$emit("start-setup"))
              }, {
                default: r(() => [...N[13] || (N[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(vt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (L) => Y.$emit("view-environments"))
              }, {
                default: r(() => [...N[14] || (N[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(vt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (L) => Y.$emit("create-environment"))
              }, {
                default: r(() => [...N[15] || (N[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (L) => v.value = !0),
            onMouseleave: N[5] || (N[5] = (L) => v.value = !1)
          }, [
            e("div", nl, [
              w(dt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: r(() => [...N[16] || (N[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(Mo, { name: "fade" }, {
                default: r(() => [
                  v.value ? (s(), E(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: r(() => [...N[17] || (N[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            w(rn, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Dt({
              left: r(() => [
                t.status.workflows.new.length ? (s(), E(yt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(yt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(yt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                w(yt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: D.value
                }, null, 8, ["count", "separator"])
              ]),
              right: r(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(yt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(yt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(yt, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                j.value ? (s(), E(yt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                S.value && !R.value && !j.value ? (s(), E(yt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                S.value ? d("", !0) : (s(), E(yt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              W.value ? {
                name: "footer",
                fn: r(() => [
                  N[19] || (N[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", al, [
                    e("span", ll, a(Z.value), 1),
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (L) => Y.$emit("commit-changes"))
                    }, {
                      default: r(() => [...N[18] || (N[18] = [
                        h(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), E(vt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (L) => Y.$emit("create-branch"))
              }, {
                default: r(() => [...N[20] || (N[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", il, [
            w(dt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: r(() => [...N[21] || (N[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (s(), o(F, { key: 0 }, [
              M.value.length > 0 ? (s(), E(vt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: M.value.map((L) => `${L.name} — ${L.issue_summary}`)
              }, {
                actions: r(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (L) => Y.$emit("view-workflows"))
                  }, {
                    default: r(() => [...N[22] || (N[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              z.value.length > 0 ? (s(), E(vt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${z.value.length} workflow${z.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: z.value.map((L) => `${L.name} — ${L.models_needing_path_sync_count} model path${L.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: r(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (L) => Y.$emit("view-workflows"))
                  }, {
                    default: r(() => [...N[23] || (N[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !B.value ? (s(), E(vt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: r(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: $
                  }, {
                    default: r(() => [
                      h(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (L) => Y.$emit("view-workflows"))
                  }, {
                    default: r(() => [...N[24] || (N[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(vt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: X.value,
                items: de.value
              }, {
                actions: r(() => [
                  w(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: r(() => [...N[25] || (N[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (L) => Y.$emit("view-nodes"))
                  }, {
                    default: r(() => [...N[26] || (N[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(vt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: r(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (L) => Y.$emit("view-nodes"))
                  }, {
                    default: r(() => [...N[27] || (N[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : W.value ? (s(), o("span", rl, "No issues")) : (s(), E(pt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(ol, {
        show: m.value,
        status: t.status,
        "is-repairing": y.value,
        onClose: N[12] || (N[12] = (L) => m.value = !1),
        onNavigateWorkflows: f,
        onNavigateNodes: c,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), cl = /* @__PURE__ */ ne(dl, [["__scopeId", "data-v-55fcd77f"]]), ul = ["type", "value", "placeholder", "disabled"], ml = /* @__PURE__ */ oe({
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
  setup(t, { expose: l, emit: n }) {
    const i = t, m = n, v = k(null);
    function u(f) {
      const c = f.target.value;
      m("update:modelValue", c);
    }
    return He(() => {
      i.autoFocus && v.value && v.value.focus();
    }), l({
      focus: () => {
        var f;
        return (f = v.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = v.value) == null ? void 0 : f.blur();
      }
    }), (f, c) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ue(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        c[0] || (c[0] = kt((g) => f.$emit("enter"), ["enter"])),
        c[1] || (c[1] = kt((g) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: c[2] || (c[2] = (g) => f.$emit("focus")),
      onBlur: c[3] || (c[3] = (g) => f.$emit("blur"))
    }, null, 42, ul));
  }
}), ms = /* @__PURE__ */ ne(ml, [["__scopeId", "data-v-0380d08f"]]), vl = { class: "branch-create-form" }, fl = { class: "form-actions" }, gl = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: l }) {
    const n = l, i = k(""), m = U(() => {
      const f = i.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function v() {
      m.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (f, c) => (s(), o("div", vl, [
      w(ms, {
        modelValue: i.value,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => i.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", fl, [
        w(se, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: v
        }, {
          default: r(() => [...c[1] || (c[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(se, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: r(() => [...c[2] || (c[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pl = /* @__PURE__ */ ne(gl, [["__scopeId", "data-v-7c500394"]]), hl = { class: "branch-list-item__indicator" }, yl = { class: "branch-list-item__name" }, wl = {
  key: 0,
  class: "branch-list-item__actions"
}, kl = {
  key: 0,
  class: "branch-list-item__current-label"
}, _l = /* @__PURE__ */ oe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: ue(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && l.$emit("click"))
    }, [
      e("span", hl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", yl, a(t.branchName), 1),
      l.$slots.actions || t.showCurrentLabel ? (s(), o("div", wl, [
        Me(l.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", kl, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ ne(_l, [["__scopeId", "data-v-c6581a24"]]), $l = {
  key: 2,
  class: "branch-list"
}, Cl = /* @__PURE__ */ oe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: l }) {
    const n = l, i = k(!1);
    function m(u) {
      n("create", u), v();
    }
    function v() {
      i.value = !1;
    }
    return (u, f) => (s(), E(et, null, {
      header: r(() => [
        w(tt, { title: "BRANCHES" }, {
          actions: r(() => [
            i.value ? d("", !0) : (s(), E(se, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: f[0] || (f[0] = (c) => i.value = !0)
            }, {
              default: r(() => [...f[1] || (f[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: r(() => [
        i.value ? (s(), E(pl, {
          key: 0,
          onCreate: m,
          onCancel: v
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(pt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", $l, [
          (s(!0), o(F, null, ae(t.branches, (c) => (s(), E(bl, {
            key: c.name,
            "branch-name": c.name,
            "is-current": c.is_current
          }, {
            actions: r(() => [
              c.is_current ? d("", !0) : (s(), E(se, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (g) => u.$emit("delete", c.name)
              }, {
                default: r(() => [...f[2] || (f[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              c.is_current ? d("", !0) : (s(), E(se, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (g) => u.$emit("switch", c.name)
              }, {
                default: r(() => [...f[3] || (f[3] = [
                  h(" Switch ", -1)
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
}), xl = /* @__PURE__ */ ne(Cl, [["__scopeId", "data-v-86784ddd"]]), Sl = { class: "commit-list" }, Il = /* @__PURE__ */ oe({
  __name: "CommitList",
  setup(t) {
    return (l, n) => (s(), o("div", Sl, [
      Me(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), El = /* @__PURE__ */ ne(Il, [["__scopeId", "data-v-8c5ee761"]]), Ml = { class: "commit-hash" }, Pl = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const l = t, n = U(() => l.hash.slice(0, l.length));
    return (i, m) => (s(), o("span", Ml, a(n.value), 1));
  }
}), oo = /* @__PURE__ */ ne(Pl, [["__scopeId", "data-v-7c333cc6"]]), Tl = { class: "commit-message" }, Rl = { class: "commit-date" }, zl = /* @__PURE__ */ oe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m() {
      n.clickable && i("click");
    }
    return (v, u) => (s(), o("div", {
      class: ue(["commit-item", { clickable: t.clickable }]),
      onClick: m
    }, [
      w(oo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Tl, a(t.message), 1),
      e("span", Rl, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Ge(() => {
        }, ["stop"]))
      }, [
        Me(v.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ll = /* @__PURE__ */ ne(zl, [["__scopeId", "data-v-dd7c621b"]]), Dl = /* @__PURE__ */ oe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (l, n) => (s(), E(et, null, {
      header: r(() => [
        w(tt, { title: "HISTORY" })
      ]),
      content: r(() => [
        t.commits.length === 0 ? (s(), E(pt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(El, { key: 1 }, {
          default: r(() => [
            (s(!0), o(F, null, ae(t.commits, (i) => (s(), E(Ll, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (m) => l.$emit("select", i)
            }, {
              actions: r(() => [
                w(se, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (m) => l.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: r(() => [...n[0] || (n[0] = [
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
}), Nl = /* @__PURE__ */ ne(Dl, [["__scopeId", "data-v-981c3c64"]]), Be = gs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
function Ls() {
  const t = U(() => Be.hasWorkspace ? Be.hasEnvironments ? Be.isManaged ? "managed" : "unmanaged" : "empty_workspace" : "no_workspace");
  function l(u) {
    Be.hasWorkspace = u, u || (Be.hasEnvironments = !1, Be.isManaged = !1);
  }
  function n(u) {
    Be.hasEnvironments = u, u || (Be.isManaged = !1), u && !Be.hasWorkspace && (Be.hasWorkspace = !0);
  }
  function i(u) {
    Be.isManaged = u, u && (Be.hasWorkspace = !0, Be.hasEnvironments = !0);
  }
  function m(u) {
    Be.hasLegacyManager = u;
  }
  function v(u) {
    switch (u) {
      case "no_workspace":
        Be.hasWorkspace = !1, Be.hasEnvironments = !1, Be.isManaged = !1;
        break;
      case "empty_workspace":
        Be.hasWorkspace = !0, Be.hasEnvironments = !1, Be.isManaged = !1;
        break;
      case "unmanaged":
        Be.hasWorkspace = !0, Be.hasEnvironments = !0, Be.isManaged = !1;
        break;
      case "managed":
        Be.hasWorkspace = !0, Be.hasEnvironments = !0, Be.isManaged = !0;
        break;
    }
  }
  return {
    state: Be,
    setupState: t,
    setHasWorkspace: l,
    setHasEnvironments: n,
    setIsManaged: i,
    setHasLegacyManager: m,
    setPreset: v
  };
}
const Ks = /* @__PURE__ */ new Set(), qs = [
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
  ...Array(12).fill(null).map((t, l) => ({
    name: `synced-workflow-${l + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + l,
    model_count: 1 + l % 3,
    sync_state: "synced"
  }))
], Ul = {
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
}, no = [
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
], Bl = [
  ...no,
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
], ns = [
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
], Ol = [
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
], as = [
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
], be = {
  // Environment Management
  getEnvironments: async () => (await ke(300), [
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
    await ke(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, l, n) => {
    await ke(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${l}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (t) => {
    await ke(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ke(400), qs),
  getWorkflowDetails: async (t) => (await ke(300), Ul[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ke(800), {
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
  installWorkflowDeps: async (t, l, n) => {
    await ke(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${l}, models=${n}`);
  },
  setModelImportance: async (t, l, n) => {
    await ke(200), console.log(`[MOCK] Setting ${l} importance to ${n} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ke(350), no),
  getWorkspaceModels: async () => (await ke(400), Bl),
  getModelDetails: async (t) => (await ke(200), {
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
  updateModelSource: async (t, l) => {
    await ke(300), Ks.add(t), console.log(`[MOCK] Added source for ${t}: ${l}`);
  },
  deleteModel: async (t) => {
    await ke(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ke(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ke(350);
    const t = ns.filter((n) => n.installed), l = ns.filter((n) => !n.installed);
    return {
      nodes: ns,
      total_count: ns.length,
      installed_count: t.length,
      missing_count: l.length
    };
  },
  installNode: async (t) => {
    await ke(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ke(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ke(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ke(200), {
    workspace_path: "/workspace",
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0,
    confirm_destructive: !0,
    comfyui_extra_args: []
  }),
  updateConfig: async (t) => {
    await ke(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, l) => (await ke(250), (t ? as.filter((i) => i.level === t) : as).slice(0, l || 100)),
  getWorkspaceLogs: async (t, l) => {
    await ke(300);
    const n = [...as, ...as.map((m) => ({
      ...m,
      name: "comfygit.workspace"
    }))];
    return (t ? n.filter((m) => m.level === t) : n).slice(0, l || 100);
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
  getStatus: async () => {
    await ke(400);
    const { state: t } = Ls();
    return {
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
        synced: qs.filter((l) => l.status === "synced").map((l) => l.name),
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
      missing_models_count: 1,
      has_legacy_manager: t.hasLegacyManager
    };
  },
  getCommitHistory: async (t = 10) => (await ke(300), Ol.slice(0, t)),
  getBranches: async () => (await ke(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ke(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ke(300), {
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
  addRemote: async (t, l) => {
    await ke(400), console.log(`[MOCK] Adding remote: ${t} -> ${l}`);
  },
  removeRemote: async (t) => {
    await ke(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, l, n) => {
    await ke(400), console.log(`[MOCK] Updating remote ${t}: ${l}${n ? ` (push: ${n})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ke(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ke(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  /**
   * Get Pull Preview - Returns preview with optional workflow conflicts (V2)
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH workflow conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with workflow conflicts
   */
  getPullPreview: async (t) => {
    await ke(500);
    const l = {
      remote: t,
      branch: "main",
      commits_behind: 3,
      commits: [
        { hash: "abc1234", short_hash: "abc1234", message: "Add new workflow features", date: "2024-01-15T10:30:00Z", date_relative: "2 hours ago" },
        { hash: "def5678", short_hash: "def5678", message: "Update node dependencies", date: "2024-01-15T09:15:00Z", date_relative: "3 hours ago" },
        { hash: "ghi9012", short_hash: "ghi9012", message: "Fix model path handling", date: "2024-01-15T08:00:00Z", date_relative: "4 hours ago" }
      ],
      changes: {
        workflows: {
          added: ["new-workflow.json"],
          modified: ["flux-schnell.json", "sdxl-turbo.json"],
          deleted: []
        },
        nodes: {
          to_install: ["comfyui-animatediff", "comfyui-controlnet-aux"],
          to_remove: []
        },
        models: {
          referenced: ["flux1-dev.safetensors", "sdxl_base.safetensors"],
          count: 2
        }
      },
      has_uncommitted_changes: !1,
      can_pull: !0,
      block_reason: null
    };
    return t !== "upstream" ? {
      ...l,
      has_conflicts: !0,
      workflow_conflicts: [
        {
          name: "flux-schnell",
          conflict_type: "both_modified",
          base_hash: "abc12345",
          target_hash: "def67890"
        },
        {
          name: "sdxl-turbo",
          conflict_type: "both_modified",
          base_hash: "11111111",
          target_hash: "22222222"
        }
      ]
    } : {
      ...l,
      has_conflicts: !1,
      workflow_conflicts: []
    };
  },
  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (t, l) => {
    await ke(400);
    const n = l.some((v) => v.resolution === "take_base"), i = l.some((v) => v.resolution === "take_target");
    return n && i ? {
      is_compatible: !1,
      node_conflicts: [
        {
          node_id: "rgthree-comfy",
          node_name: "rgthree's ComfyUI Nodes",
          base_version: "2.0.0",
          target_version: "1.5.0",
          chosen_version: "1.5.0",
          chosen_reason: "Required by sdxl-turbo (theirs)",
          affected_workflows: [
            { name: "flux-schnell", source: "base", required_version: "2.0.0" },
            { name: "sdxl-turbo", source: "target", required_version: "1.5.0" }
          ]
        }
      ],
      warnings: []
    } : {
      is_compatible: !0,
      node_conflicts: [],
      warnings: i ? ["Model 'flux-dev.safetensors' has no download source"] : []
    };
  },
  /**
   * Pull from Remote - Execute pull with optional conflict resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (t, l) => (await ke(1500), console.log(`[MOCK] Pulling from ${t} with options:`, l), l.resolutions && Math.random() < 0.1 ? {
    status: "error",
    pull_output: "",
    sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
    rolled_back: !0,
    error: "Simulated sync failure - merge rolled back"
  } : {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: l.resolutions ? ["comfyui-animatediff"] : [],
      nodes_removed: [],
      models_queued: 0,
      errors: []
    },
    rolled_back: !1,
    message: "Pull completed successfully"
  }),
  /**
   * Get Push Preview
   * GET /v2/comfygit/remotes/{name}/push-preview
   */
  getPushPreview: async (t) => (await ke(400), {
    remote: t,
    branch: "main",
    commits_ahead: 2,
    commits: [
      { hash: "xyz1234", short_hash: "xyz1234", message: "Local workflow changes", date: "2024-01-15T11:00:00Z", date_relative: "1 hour ago" },
      { hash: "uvw5678", short_hash: "uvw5678", message: "Add new node configuration", date: "2024-01-15T10:45:00Z", date_relative: "1.5 hours ago" }
    ],
    has_uncommitted_changes: !1,
    remote_has_new_commits: !1,
    can_push: !0,
    needs_force: !1,
    block_reason: null
  }),
  /**
   * Push to Remote
   * POST /v2/comfygit/remotes/{name}/push
   */
  pushToRemote: async (t, l) => (await ke(1e3), console.log(`[MOCK] Pushing to ${t} with options:`, l), {
    status: "success",
    push_output: "Everything up-to-date",
    commits_pushed: 2,
    message: "Push completed successfully"
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
  analyzeWorkflow: async (t) => (await ke(600), {
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
  applyResolution: async (t, l, n) => {
    await ke(800);
    const i = [], m = [];
    return l.forEach((v, u) => {
      v.action === "install" && v.package_id && i.push(v.package_id);
    }), n.forEach((v, u) => {
      v.action === "download" && v.url ? m.push({
        filename: u,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${u}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: m,
      estimated_time_seconds: i.length * 30 + m.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, l = 10) => {
    await ke(400);
    const n = [
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
      results: n.slice(0, l),
      total: n.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, l = 10) => {
    await ke(400);
    const n = [
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
      results: n.slice(0, l),
      total: n.length
    };
  },
  // Export Validation - shows warnings for models without sources
  validateExport: async () => {
    await ke(400);
    const l = [
      {
        filename: "sd_xl_base_1.0.safetensors",
        hash: "abc123def456",
        workflows: ["flux-dev-img2img.json", "sdxl-lightning.json"]
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "xyz789ghi012",
        workflows: ["pose-to-image.json"]
      },
      {
        filename: "custom_lora_v2.safetensors",
        hash: "lmn345opq678",
        workflows: ["flux-dev-img2img.json"]
      },
      {
        filename: "vae_ft_mse.pt",
        hash: "rst901uvw234",
        workflows: ["sdxl-lightning.json", "pose-to-image.json", "upscale-workflow.json"]
      }
    ].filter(
      (n) => !Ks.has(n.hash)
    );
    return {
      can_export: !0,
      blocking_issues: [],
      warnings: {
        models_without_sources: l
      }
    };
  },
  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async () => (await ke(400), {
    can_export: !1,
    blocking_issues: [
      {
        type: "uncommitted_workflows",
        message: "Cannot export with uncommitted workflow changes",
        details: ["new-workflow.json", "modified-portrait.json", "another-change.json"]
      },
      {
        type: "unresolved_issues",
        message: "Cannot export - workflows have unresolved issues",
        details: []
      }
    ],
    warnings: {
      models_without_sources: []
    }
  }),
  exportEnvWithForce: async (t) => {
    await ke(800);
    const l = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      path: t || `/home/user/exports/production_export_${l}.tar.gz`,
      models_without_sources: 4
    };
  },
  // =============================================================================
  // Deploy Endpoints
  // =============================================================================
  getDeploySummary: async () => (await ke(300), {
    comfyui_version: "v0.3.48",
    node_count: 15,
    model_count: 8,
    models_with_sources: 6,
    models_without_sources: 2,
    workflow_count: 3,
    estimated_package_size_mb: 45.2
  }),
  testRunPodConnection: async (t, l) => (await ke(800), t.startsWith("rp_") ? {
    status: "success",
    message: "Connected to RunPod",
    credit_balance: 25.5
  } : {
    status: "error",
    message: 'Invalid API key format. Keys should start with "rp_"'
  }),
  getNetworkVolumes: async () => (await ke(400), {
    volumes: [
      {
        id: "5aio30csvw",
        name: "comfygit_workspace",
        size_gb: 100,
        data_center_id: "US-IL-1",
        data_center_name: "United States"
      },
      {
        id: "abc123xyz",
        name: "my-sd-models",
        size_gb: 200,
        data_center_id: "EU-CZ-1",
        data_center_name: "Europe"
      }
    ]
  }),
  getRunPodGpuTypes: async (t) => {
    await ke(400);
    const l = [
      { id: "NVIDIA RTX 4090", displayName: "RTX 4090", memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, available: !0, data_center_id: "US-IL-1" },
      { id: "NVIDIA RTX 3090", displayName: "RTX 3090", memoryInGb: 24, securePrice: 0.22, communityPrice: 0.16, available: !0, data_center_id: "US-IL-1" },
      { id: "NVIDIA A100 80GB", displayName: "A100 80GB", memoryInGb: 80, securePrice: 1.89, communityPrice: 1.49, available: !0, data_center_id: "US-IL-1" },
      { id: "NVIDIA RTX 4090", displayName: "RTX 4090", memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, available: !0, data_center_id: "EU-CZ-1" },
      { id: "NVIDIA RTX A6000", displayName: "RTX A6000", memoryInGb: 48, securePrice: 0.79, communityPrice: 0.59, available: !0, data_center_id: "EU-CZ-1" }
    ];
    return t ? { gpu_types: l.filter((n) => n.data_center_id === t) } : { gpu_types: l };
  },
  deployToRunPod: async (t) => (await ke(2e3), console.log("[MOCK] Deploying to RunPod:", t), {
    status: "success",
    pod_id: "mock_pod_" + Date.now(),
    message: "Pod created. Starting ComfyUI setup..."
  }),
  getRunPodPods: async () => (await ke(500), {
    pods: [
      {
        id: "mock_abc123",
        name: "my-comfyui-deploy",
        gpu_type: "NVIDIA RTX 4090",
        gpu_count: 1,
        status: "RUNNING",
        created_at: new Date(Date.now() - 36e5).toISOString(),
        cost_per_hour: 0.44,
        uptime_seconds: 3600,
        total_cost: 0.44,
        pod_url: "https://mock_abc123.runpod.net",
        comfyui_url: "https://mock_abc123-8188.proxy.runpod.net"
      },
      {
        id: "mock_def456",
        name: "test-deployment",
        gpu_type: "NVIDIA RTX 3090",
        gpu_count: 1,
        status: "EXITED",
        created_at: new Date(Date.now() - 864e5).toISOString(),
        cost_per_hour: 0.22,
        uptime_seconds: 900,
        total_cost: 0.06,
        pod_url: "https://mock_def456.runpod.net"
      }
    ]
  }),
  terminateRunPodPod: async (t) => (await ke(1e3), console.log(`[MOCK] Terminating pod: ${t}`), { status: "success", message: "Pod terminated" }),
  exportDeployPackage: async (t) => {
    await ke(1500);
    const l = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      package_path: t || `/home/user/comfygit_deploy_${l}.tar.gz`,
      package_size_mb: 45.2,
      message: "Deploy package created successfully"
    };
  },
  getStoredRunPodKey: async () => (await ke(200), {
    has_key: !1
  }),
  clearRunPodKey: async () => (await ke(200), console.log("[MOCK] Cleared RunPod API key"), { status: "success" })
};
function ke(t) {
  return new Promise((l) => setTimeout(l, t));
}
function Ht() {
  return !0;
}
const De = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, Le = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, ls = [
  { id: "init_structure", endTime: 300, progress: 5, message: "Creating environment structure..." },
  { id: "resolve_version", endTime: 800, progress: 10, message: "Resolving ComfyUI version..." },
  { id: "clone_comfyui", endTime: 2800, progress: 25, message: "Cloning ComfyUI..." },
  { id: "configure_environment", endTime: 3300, progress: 30, message: "Configuring environment..." },
  { id: "create_venv", endTime: 4300, progress: 35, message: "Creating virtual environment..." },
  { id: "install_pytorch", endTime: 8300, progress: 70, message: "Installing PyTorch..." },
  { id: "configure_pytorch", endTime: 8800, progress: 75, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 11300, progress: 95, message: "Installing ComfyUI dependencies..." },
  { id: "finalize", endTime: 11800, progress: 100, message: "Finalizing environment..." }
];
function Al() {
  if (De.initState === "idle" || De.initState === "complete" || De.initState === "error" || !De.initStartTime) return;
  const t = Date.now() - De.initStartTime;
  if (t < 2e3)
    De.initState = "creating_workspace", De.initProgress = Math.min(20, Math.floor(t / 100)), De.initMessage = "Creating workspace structure...";
  else if (t < 4e3)
    De.initState = "setting_models_dir", De.initProgress = 20 + Math.floor((t - 2e3) / 200), De.initMessage = "Configuring models directory...";
  else if (t < 8e3) {
    De.initState = "scanning_models";
    const l = Math.floor((t - 4e3) / 50);
    De.initProgress = 30 + Math.min(65, l);
    const n = Math.floor((t - 4e3) / 100);
    De.initMessage = `Scanning models (${n}/42)...`;
  } else
    De.initState = "complete", De.initProgress = 100, De.initMessage = "Complete! 42 models indexed", De.modelsFound = 42, De.initStartTime = null;
}
function Fl() {
  if (Le.state === "idle" || Le.state === "complete" || Le.state === "error" || !Le.startTime) return;
  const t = Date.now() - Le.startTime;
  let l = !1;
  for (const n of ls)
    if (t < n.endTime) {
      Le.phase = n.id, Le.message = n.message;
      const i = ls.indexOf(n) - 1, m = i >= 0 ? ls[i].endTime : 0, v = i >= 0 ? ls[i].progress : 0, u = n.endTime - m, c = (t - m) / u;
      Le.progress = Math.floor(v + (n.progress - v) * c), l = !0;
      break;
    }
  l || (Le.state = "complete", Le.phase = "complete", Le.progress = 100, Le.message = `Environment '${Le.envName}' created successfully`, Le.startTime = null);
}
const Ne = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, is = [
  { id: "clone_comfyui", endTime: 2e3, progress: 15, message: "Cloning/restoring ComfyUI..." },
  { id: "extract_builtins", endTime: 2500, progress: 20, message: "Extracting builtin nodes..." },
  { id: "configure_pytorch", endTime: 3500, progress: 35, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 6e3, progress: 60, message: "Installing dependencies..." },
  { id: "sync_nodes", endTime: 7e3, progress: 70, message: "Syncing custom nodes..." },
  { id: "copy_workflows", endTime: 7500, progress: 80, message: "Copying workflows..." },
  { id: "resolve_models", endTime: 8e3, progress: 85, message: "Resolving models..." },
  { id: "download_models", endTime: 9500, progress: 95, message: "Downloading models..." },
  { id: "finalize", endTime: 1e4, progress: 100, message: "Finalizing environment..." }
];
function Vl() {
  if (Ne.state !== "importing" || !Ne.startTime) return;
  const t = Date.now() - Ne.startTime;
  for (const l of is)
    if (t < l.endTime) {
      Ne.phase = l.id, Ne.message = l.message;
      const n = is.indexOf(l) - 1, i = n >= 0 ? is[n].endTime : 0, m = n >= 0 ? is[n].progress : 0, v = l.endTime - i, u = t - i;
      Ne.progress = Math.floor(m + (l.progress - m) * (u / v));
      return;
    }
  Ne.state = "complete", Ne.phase = "complete", Ne.progress = 100, Ne.message = `Environment '${Ne.envName}' imported successfully`, Ne.startTime = null;
}
function qe() {
  const t = k(!1), l = k(null);
  async function n(H, ge) {
    var Ct;
    if (!((Ct = window.app) != null && Ct.api))
      throw new Error("ComfyUI API not available");
    const Ue = await window.app.api.fetchApi(H, ge);
    if (!Ue.ok) {
      const Pt = await Ue.json().catch(() => ({}));
      throw new Error(Pt.error || Pt.message || `Request failed: ${Ue.status}`);
    }
    return Ue.json();
  }
  async function i(H = !1) {
    return be.getStatus();
  }
  async function m(H, ge = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ge })
    });
  }
  async function v(H = 10, ge = 0) {
    {
      const Ue = await be.getCommitHistory(H);
      return {
        commits: Ue,
        total: Ue.length,
        offset: ge
      };
    }
  }
  async function u(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function f() {
    return be.validateExport();
  }
  async function c(H) {
    return be.exportEnvWithForce(H);
  }
  async function g() {
    return be.getBranches();
  }
  async function p(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function y(H, ge = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ge })
    });
  }
  async function b(H, ge = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ge })
    });
  }
  async function _(H, ge = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ge })
    });
  }
  async function T(H, ge = !1) {
    return await be.deleteBranch(H), { status: "success" };
  }
  async function x() {
    return be.getEnvironments();
  }
  async function $(H, ge) {
    return be.switchEnvironment(H);
  }
  async function C() {
    return null;
  }
  async function D(H) {
    return Le.state = "creating", Le.phase = "init_structure", Le.progress = 0, Le.message = "Creating environment structure...", Le.startTime = Date.now(), Le.envName = H.name, console.log("[MOCK] Starting environment creation:", H), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function S() {
    return Fl(), {
      state: Le.state,
      phase: Le.phase ?? void 0,
      progress: Le.progress,
      message: Le.message,
      environment_name: Le.state === "complete" && Le.envName || void 0,
      error: Le.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function R(H = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function W(H) {
    return await be.deleteEnvironment(H), { status: "success" };
  }
  async function V(H = !1) {
    return be.getWorkflows();
  }
  async function j(H) {
    return be.getWorkflowDetails(H);
  }
  async function M(H) {
    return be.resolveWorkflow(H);
  }
  async function z(H, ge, Ue) {
    return await be.installWorkflowDeps(H, ge, Ue), { status: "success" };
  }
  async function B(H, ge, Ue) {
    return be.setModelImportance(H, ge, Ue);
  }
  async function re() {
    return be.getEnvironmentModels();
  }
  async function Z() {
    return be.getWorkspaceModels();
  }
  async function X(H) {
    return be.getModelDetails(H);
  }
  async function de(H) {
    return console.log(`[MOCK] Opening file location: ${H}`), { status: "success" };
  }
  async function Y(H, ge) {
    return await be.updateModelSource(H, ge), { status: "success", source_type: "custom" };
  }
  async function N(H, ge) {
    return { status: "success" };
  }
  async function L(H) {
    return be.deleteModel(H);
  }
  async function P(H) {
    return await be.downloadModel(H), { status: "success" };
  }
  async function ie() {
    return { status: "success", changes: 0 };
  }
  async function ee() {
    return { path: "~/comfygit/models" };
  }
  async function Ce(H) {
    return { status: "success", path: H, models_indexed: 10 };
  }
  async function Ie(H) {
    return be.getConfig();
  }
  async function ze(H, ge) {
    return be.updateConfig(H);
  }
  async function je(H, ge) {
    return be.getEnvironmentLogs(H, ge);
  }
  async function ce(H, ge) {
    return be.getWorkspaceLogs(H, ge);
  }
  async function ye() {
    return { path: "/mock/workspace/logs/env/full.log", exists: !0 };
  }
  async function Pe() {
    return { path: "/mock/workspace/logs/workspace/full.log", exists: !0 };
  }
  async function Q(H) {
    return console.log(`[MOCK] Opening file: ${H}`), { status: "success" };
  }
  async function le() {
    return be.getNodes();
  }
  async function we(H) {
    return { status: "success", message: `Node '${H}' tracked as development` };
  }
  async function Ae(H) {
    return await be.installNode(H), { status: "success" };
  }
  async function ot(H) {
    return await be.updateNode(H), { status: "success" };
  }
  async function it(H) {
    return await be.uninstallNode(H), { status: "success" };
  }
  async function Ee() {
    return be.getRemotes();
  }
  async function fe(H, ge) {
    return await be.addRemote(H, ge), { status: "success", remote_name: H };
  }
  async function J(H) {
    return await be.removeRemote(H), { status: "success", remote_name: H };
  }
  async function me(H, ge, Ue) {
    return await be.updateRemoteUrl(H, ge, Ue), { status: "success", remote_name: H };
  }
  async function nt(H) {
    return await be.fetchRemote(H), { status: "success", remote_name: H };
  }
  async function xe(H) {
    return be.getRemoteSyncStatus(H);
  }
  async function Xe(H = "skip", ge = !0) {
    return await new Promise((Ue) => setTimeout(Ue, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function ct(H, ge) {
    return be.getPullPreview(H);
  }
  async function ut(H, ge = {}) {
    return be.pullFromRemote(H, ge);
  }
  async function Fe(H, ge) {
    return be.getPushPreview(H);
  }
  async function ve(H, ge = {}) {
    return be.pushToRemote(H, ge);
  }
  async function K(H, ge) {
    return be.validateMerge(H, ge);
  }
  async function q(H) {
    const ge = {
      success: 0,
      failed: []
    };
    for (const Ue of H)
      try {
        await M(Ue), ge.success++;
      } catch (Ct) {
        ge.failed.push({
          name: Ue,
          error: Ct instanceof Error ? Ct.message : "Unknown error"
        });
      }
    return ge;
  }
  async function I(H) {
    return await new Promise((ge) => setTimeout(ge, 500)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function A(H) {
    return await new Promise((ge) => setTimeout(ge, 200)), H === "existing-env" ? { valid: !1, error: "Environment 'existing-env' already exists" } : H.includes("/") || H.includes(" ") ? { valid: !1, error: "Name contains invalid characters" } : { valid: !0, name: H };
  }
  async function te(H, ge, Ue, Ct) {
    return await new Promise((Pt) => setTimeout(Pt, 300)), Ne.state = "importing", Ne.phase = null, Ne.progress = 0, Ne.message = `Importing environment '${ge}'...`, Ne.startTime = Date.now(), Ne.envName = ge, { status: "started", message: `Importing environment '${ge}'...` };
  }
  async function $e() {
    return Vl(), {
      state: Ne.state,
      phase: Ne.phase,
      progress: Ne.progress,
      message: Ne.message,
      environment_name: Ne.envName
    };
  }
  async function Ye(H) {
    return await new Promise((ge) => setTimeout(ge, 800)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function _t(H, ge, Ue, Ct) {
    return await new Promise((Pt) => setTimeout(Pt, 300)), Ne.state = "importing", Ne.phase = null, Ne.progress = 0, Ne.message = `Importing environment '${ge}' from git...`, Ne.startTime = Date.now(), Ne.envName = ge, { status: "started", message: `Importing environment '${ge}'...` };
  }
  async function mt() {
    {
      const { state: H, setupState: ge } = Ls(), Ue = [];
      return H.hasEnvironments && Ue.push("mock-env-1", "mock-env-2"), Le.state === "complete" && Le.envName && (Ue.includes(Le.envName) || Ue.push(Le.envName)), {
        state: ge.value,
        workspace_path: H.hasWorkspace ? "~/comfygit" : null,
        default_path: "~/comfygit",
        environments: Ue,
        current_environment: H.isManaged ? "mock-env-1" : null,
        detected_models_dir: "/mock/ComfyUI/models",
        cli_installed: !1,
        cli_path: null
      };
    }
  }
  async function Nt(H) {
    return De.initState = "creating_workspace", De.initProgress = 0, De.initMessage = "Starting workspace creation...", De.initStartTime = Date.now(), De.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", H), { status: "started", task_id: "mock-task-id" };
  }
  async function bt() {
    return Al(), {
      state: De.initState,
      progress: De.initProgress,
      message: De.initMessage,
      models_found: De.initState === "complete" ? De.modelsFound : void 0,
      error: De.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function Ut(H) {
    return await new Promise((ge) => setTimeout(ge, 200)), H.type === "workspace" ? !H.path || H.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : H.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : H.type === "models" ? !H.path || H.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : H.path.endsWith("ComfyUI") || H.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: H.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  async function ys() {
    return be.getDeploySummary();
  }
  async function $t(H, ge) {
    return be.testRunPodConnection(H, ge);
  }
  async function ws() {
    return be.getNetworkVolumes();
  }
  async function Gt(H) {
    return be.getRunPodGpuTypes(H);
  }
  async function ks(H) {
    return be.deployToRunPod(H);
  }
  async function _s() {
    return be.getRunPodPods();
  }
  async function bs(H) {
    return be.terminateRunPodPod(H);
  }
  async function $s(H) {
    return be.exportDeployPackage(H);
  }
  async function os() {
    return be.getStoredRunPodKey();
  }
  async function Cs() {
    return be.clearRunPodKey();
  }
  return {
    isLoading: t,
    error: l,
    getStatus: i,
    commit: m,
    getHistory: v,
    exportEnv: u,
    validateExport: f,
    exportEnvWithForce: c,
    // Git Operations
    getBranches: g,
    getCommitDetail: p,
    checkout: y,
    createBranch: b,
    switchBranch: _,
    deleteBranch: T,
    // Environment Management
    getEnvironments: x,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: D,
    getCreateProgress: S,
    getComfyUIReleases: R,
    deleteEnvironment: W,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: j,
    resolveWorkflow: M,
    installWorkflowDeps: z,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: re,
    getWorkspaceModels: Z,
    getModelDetails: X,
    openFileLocation: de,
    addModelSource: Y,
    removeModelSource: N,
    deleteModel: L,
    downloadModel: P,
    scanWorkspaceModels: ie,
    getModelsDirectory: ee,
    setModelsDirectory: Ce,
    // Settings
    getConfig: Ie,
    updateConfig: ze,
    // Debug/Logs
    getEnvironmentLogs: je,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: ye,
    getWorkspaceLogPath: Pe,
    openFile: Q,
    // Node Management
    getNodes: le,
    trackNodeAsDev: we,
    installNode: Ae,
    updateNode: ot,
    uninstallNode: it,
    // Git Remotes
    getRemotes: Ee,
    addRemote: fe,
    removeRemote: J,
    updateRemoteUrl: me,
    fetchRemote: nt,
    getRemoteSyncStatus: xe,
    // Push/Pull
    getPullPreview: ct,
    pullFromRemote: ut,
    getPushPreview: Fe,
    pushToRemote: ve,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: Xe,
    // Workflow Repair
    repairWorkflowModels: q,
    // Import Operations
    previewTarballImport: I,
    previewGitImport: Ye,
    validateEnvironmentName: A,
    executeImport: te,
    executeGitImport: _t,
    getImportProgress: $e,
    // First-Time Setup
    getSetupStatus: mt,
    initializeWorkspace: Nt,
    getInitializeProgress: bt,
    validatePath: Ut,
    // Deploy Operations
    getDeploySummary: ys,
    testRunPodConnection: $t,
    getNetworkVolumes: ws,
    getRunPodGpuTypes: Gt,
    deployToRunPod: ks,
    getRunPodPods: _s,
    terminateRunPodPod: bs,
    exportDeployPackage: $s,
    getStoredRunPodKey: os,
    clearRunPodKey: Cs
  };
}
async function Kt(t, l = {}, n = 5e3) {
  const i = new AbortController(), m = setTimeout(() => i.abort(), n);
  try {
    const v = await fetch(t, {
      ...l,
      signal: i.signal
    });
    return clearTimeout(m), v;
  } catch (v) {
    throw clearTimeout(m), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function ao() {
  const t = k(null);
  async function l() {
    try {
      const u = await Kt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (u.ok)
        return (await u.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await l()), !t.value)
      return null;
    try {
      const u = await Kt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await l(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await l()), !t.value)
      return null;
    try {
      const u = await Kt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Failed to get status");
      return await u.json();
    } catch {
      return null;
    }
  }
  async function m() {
    if (t.value || (t.value = await l()), !t.value)
      throw new Error("Control port not available");
    if (!(await Kt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await l()), !t.value)
      throw new Error("Control port not available");
    if (!(await Kt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: l,
    checkHealth: n,
    getStatus: i,
    restart: m,
    kill: v
  };
}
const Wl = { class: "base-modal-header" }, Gl = {
  key: 0,
  class: "base-modal-title"
}, jl = { class: "base-modal-body" }, Hl = {
  key: 0,
  class: "base-modal-loading"
}, Kl = {
  key: 1,
  class: "base-modal-error"
}, ql = {
  key: 0,
  class: "base-modal-footer"
}, Yl = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m() {
      n.closeOnOverlayClick && i("close");
    }
    function v(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return He(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), to(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (u, f) => (s(), E(Qe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: m
      }, [
        e("div", {
          class: ue(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: f[1] || (f[1] = Ge(() => {
          }, ["stop"]))
        }, [
          e("div", Wl, [
            Me(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Gl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (c) => u.$emit("close"))
            }, [...f[2] || (f[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          e("div", jl, [
            t.loading ? (s(), o("div", Hl, "Loading...")) : t.error ? (s(), o("div", Kl, a(t.error), 1)) : Me(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", ql, [
            Me(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), st = /* @__PURE__ */ ne(Yl, [["__scopeId", "data-v-8dab1081"]]), Xl = ["type", "disabled"], Ql = {
  key: 0,
  class: "spinner"
}, Zl = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ue(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => l.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Ql)) : d("", !0),
      Me(l.$slots, "default", {}, void 0, !0)
    ], 10, Xl));
  }
}), pe = /* @__PURE__ */ ne(Zl, [["__scopeId", "data-v-f3452606"]]), Jl = {
  key: 0,
  class: "base-title-count"
}, ei = /* @__PURE__ */ oe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (l, n) => (s(), E(zs(`h${t.level}`), {
      class: ue(["base-title", t.variant])
    }, {
      default: r(() => [
        Me(l.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Jl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qt = /* @__PURE__ */ ne(ei, [["__scopeId", "data-v-5a01561d"]]), ti = ["value", "disabled"], si = {
  key: 0,
  value: "",
  disabled: ""
}, oi = ["value"], ni = {
  key: 0,
  class: "base-select-error"
}, ai = /* @__PURE__ */ oe({
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
    function l(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, m) => (s(), o("div", {
      class: ue(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ue(["base-select", { error: !!t.error }]),
        onChange: m[0] || (m[0] = (v) => i.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", si, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(F, null, ae(t.options, (v) => (s(), o("option", {
          key: l(v),
          value: l(v)
        }, a(n(v)), 9, oi))), 128))
      ], 42, ti),
      t.error ? (s(), o("span", ni, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), li = /* @__PURE__ */ ne(ai, [["__scopeId", "data-v-7436d745"]]), ii = { class: "popover-header" }, ri = { class: "popover-title" }, di = { class: "popover-content" }, ci = {
  key: 0,
  class: "popover-actions"
}, ui = /* @__PURE__ */ oe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (l, n) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: It({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ge(() => {
          }, ["stop"]))
        }, [
          e("div", ii, [
            e("h4", ri, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", di, [
            Me(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (s(), o("div", ci, [
            Me(l.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ht = /* @__PURE__ */ ne(ui, [["__scopeId", "data-v-42815ace"]]), mi = { class: "detail-section" }, vi = {
  key: 0,
  class: "empty-message"
}, fi = { class: "model-header" }, gi = { class: "model-name" }, pi = { class: "model-details" }, hi = { class: "model-row" }, yi = { class: "model-row" }, wi = { class: "label" }, ki = {
  key: 0,
  class: "model-row model-row-nodes"
}, _i = { class: "node-list" }, bi = ["onClick"], $i = {
  key: 1,
  class: "model-row"
}, Ci = { class: "value" }, xi = {
  key: 2,
  class: "model-row"
}, Si = { class: "value error" }, Ii = {
  key: 0,
  class: "model-actions"
}, Ei = { class: "detail-section" }, Mi = {
  key: 0,
  class: "empty-message"
}, Pi = { class: "node-name" }, Ti = {
  key: 0,
  class: "node-version"
}, Ri = /* @__PURE__ */ oe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: l }) {
    const n = t, i = l, { getWorkflowDetails: m, setModelImportance: v, openFileLocation: u } = qe(), f = k(null), c = k(!1), g = k(null), p = k(!1), y = k({}), b = k(!1), _ = k(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(M) {
      switch (M) {
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
    function $(M) {
      switch (M) {
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
    function C(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const z = M.hash || M.filename;
      return _.value.has(z) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function D(M) {
      return _.value.has(M);
    }
    function S(M) {
      _.value.has(M) ? _.value.delete(M) : _.value.add(M), _.value = new Set(_.value);
    }
    async function R() {
      c.value = !0, g.value = null;
      try {
        f.value = await m(n.workflowName);
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        c.value = !1;
      }
    }
    function W(M, z) {
      y.value[M] = z, p.value = !0;
    }
    async function V(M) {
      try {
        await u(M);
      } catch (z) {
        g.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function j() {
      if (!p.value) {
        i("close");
        return;
      }
      c.value = !0, g.value = null;
      try {
        for (const [M, z] of Object.entries(y.value))
          await v(n.workflowName, M, z);
        i("refresh"), i("close");
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        c.value = !1;
      }
    }
    return He(R), (M, z) => (s(), o(F, null, [
      w(st, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: c.value,
        error: g.value || void 0,
        onClose: z[4] || (z[4] = (B) => i("close"))
      }, {
        body: r(() => [
          f.value ? (s(), o(F, { key: 0 }, [
            e("section", mi, [
              w(Qt, { variant: "section" }, {
                default: r(() => [
                  h("MODELS USED (" + a(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (s(), o("div", vi, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ae(f.value.models, (B) => {
                var re;
                return s(), o("div", {
                  key: B.hash || B.filename,
                  class: "model-card"
                }, [
                  e("div", fi, [
                    z[6] || (z[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", gi, a(B.filename), 1)
                  ]),
                  e("div", pi, [
                    e("div", hi, [
                      z[7] || (z[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ue(["value", x(B.status)])
                      }, a($(B.status)), 3)
                    ]),
                    e("div", yi, [
                      e("span", wi, [
                        z[8] || (z[8] = h(" Importance: ", -1)),
                        w(so, {
                          size: 14,
                          title: "About importance levels",
                          onClick: z[0] || (z[0] = (Z) => b.value = !0)
                        })
                      ]),
                      w(li, {
                        "model-value": y.value[B.filename] || B.importance,
                        options: T,
                        "onUpdate:modelValue": (Z) => W(B.filename, Z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    B.loaded_by && B.loaded_by.length > 0 ? (s(), o("div", ki, [
                      z[9] || (z[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", _i, [
                        (s(!0), o(F, null, ae(C(B), (Z, X) => (s(), o("div", {
                          key: `${Z.node_id}-${X}`,
                          class: "node-reference"
                        }, a(Z.node_type) + " (Node #" + a(Z.node_id) + ") ", 1))), 128)),
                        B.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => S(B.hash || B.filename)
                        }, a(D(B.hash || B.filename) ? "▼ Show less" : `▶ View all (${B.loaded_by.length})`), 9, bi)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    B.size_mb ? (s(), o("div", $i, [
                      z[10] || (z[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Ci, a(B.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    B.has_category_mismatch ? (s(), o("div", xi, [
                      z[13] || (z[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Si, [
                        z[11] || (z[11] = h(" In ", -1)),
                        e("code", null, a(B.actual_category) + "/", 1),
                        z[12] || (z[12] = h(" but loader needs ", -1)),
                        e("code", null, a((re = B.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  B.status !== "available" ? (s(), o("div", Ii, [
                    B.status === "downloadable" ? (s(), E(pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: z[1] || (z[1] = (Z) => i("resolve"))
                    }, {
                      default: r(() => [...z[14] || (z[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : B.status === "category_mismatch" && B.file_path ? (s(), E(pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => V(B.file_path)
                    }, {
                      default: r(() => [...z[15] || (z[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : B.status !== "path_mismatch" ? (s(), E(pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: z[2] || (z[2] = (Z) => i("resolve"))
                    }, {
                      default: r(() => [...z[16] || (z[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", Ei, [
              w(Qt, { variant: "section" }, {
                default: r(() => [
                  h("NODES USED (" + a(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (s(), o("div", Mi, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ae(f.value.nodes, (B) => (s(), o("div", {
                key: B.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ue(["node-status", B.status === "installed" ? "installed" : "missing"])
                }, a(B.status === "installed" ? "✓" : "✕"), 3),
                e("span", Pi, a(B.name), 1),
                B.version ? (s(), o("span", Ti, "v" + a(B.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: r(() => [
          w(pe, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (B) => i("close"))
          }, {
            default: r(() => [...z[17] || (z[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), E(pe, {
            key: 0,
            variant: "primary",
            onClick: j
          }, {
            default: r(() => [...z[18] || (z[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(ht, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: z[5] || (z[5] = (B) => b.value = !1)
      }, {
        content: r(() => [...z[19] || (z[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              h(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              h(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              h(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), zi = /* @__PURE__ */ ne(Ri, [["__scopeId", "data-v-668728e6"]]), Re = gs({
  items: [],
  status: "idle"
});
let wt = null;
function lo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function xs(t) {
  return Re.items.find((l) => l.id === t);
}
async function Ot() {
  if (Re.status === "downloading") return;
  const t = Re.items.find((l) => l.status === "queued");
  if (!t) {
    Re.status = "idle";
    return;
  }
  Re.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Li(t), t.status = "completed", t.progress = 100;
  } catch (l) {
    t.status = "failed", t.error = l instanceof Error ? l.message : "Download failed", t.retries++;
  } finally {
    Re.status = "idle", Ot();
  }
}
async function Li(t) {
  return new Promise((l, n) => {
    wt && (wt.close(), wt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), m = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    wt = m;
    let v = Date.now(), u = 0, f = !1;
    m.onmessage = (c) => {
      try {
        const g = JSON.parse(c.data);
        switch (g.type) {
          case "progress":
            t.downloaded = g.downloaded || 0, t.size = g.total || t.size;
            const p = Date.now(), y = (p - v) / 1e3;
            if (y > 0.5) {
              const b = t.downloaded - u;
              if (t.speed = b / y, v = p, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f = !0, m.close(), wt = null, l();
            break;
          case "error":
            f = !0, m.close(), wt = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, m.onerror = () => {
      m.close(), wt = null, f || n(new Error("Connection lost"));
    };
  });
}
async function Di() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const l = await t.json();
    if (!l.pending_downloads || l.pending_downloads.length === 0) return;
    for (const n of l.pending_downloads) {
      if (Re.items.some((m) => m.url === n.url && m.filename === n.filename))
        continue;
      const i = {
        id: lo(),
        workflow: n.workflow,
        filename: n.filename,
        url: n.url,
        targetPath: n.target_path,
        size: n.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Re.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${l.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function ts() {
  function t($) {
    for (const C of $) {
      if (Re.items.some(
        (R) => R.url === C.url && R.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const S = {
        id: lo(),
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
      Re.items.push(S);
    }
    Re.status === "idle" && Ot();
  }
  async function l($) {
    const C = xs($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        wt && (wt.close(), wt = null), C.status = "failed", C.error = "Cancelled by user", Re.status = "idle", Ot();
      } else if (C.status === "queued") {
        const D = Re.items.findIndex((S) => S.id === $);
        D >= 0 && Re.items.splice(D, 1);
      }
    }
  }
  function n($) {
    const C = xs($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Re.status === "idle" && Ot());
  }
  function i($) {
    const C = xs($);
    !C || C.status !== "paused" || (C.status = "queued", Re.status === "idle" && Ot());
  }
  function m() {
    const $ = Re.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Re.status === "idle" && Ot();
  }
  function v($) {
    const C = Re.items.findIndex((D) => D.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Re.items[C].status) && Re.items.splice(C, 1);
  }
  function u() {
    Re.items = Re.items.filter(($) => $.status !== "completed");
  }
  function f() {
    Re.items = Re.items.filter(($) => $.status !== "failed");
  }
  const c = U(
    () => Re.items.find(($) => $.status === "downloading")
  ), g = U(
    () => Re.items.filter(($) => $.status === "queued")
  ), p = U(
    () => Re.items.filter(($) => $.status === "completed")
  ), y = U(
    () => Re.items.filter(($) => $.status === "failed")
  ), b = U(
    () => Re.items.filter(($) => $.status === "paused")
  ), _ = U(() => Re.items.length > 0), T = U(
    () => Re.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = U(
    () => Re.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Po(Re),
    // Computed
    currentDownload: c,
    queuedItems: g,
    completedItems: p,
    failedItems: y,
    pausedItems: b,
    hasItems: _,
    activeCount: T,
    hasPaused: x,
    // Actions
    addToQueue: t,
    cancelDownload: l,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: m,
    removeItem: v,
    clearCompleted: u,
    clearFailed: f,
    loadPendingDownloads: Di
  };
}
function io() {
  const t = k(null), l = k(null), n = k([]), i = k([]), m = k(!1), v = k(null);
  async function u(C, D) {
    var R;
    if (!((R = window.app) != null && R.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(C, D);
    if (!S.ok) {
      const W = await S.json().catch(() => ({})), V = W.error || W.message || `Request failed: ${S.status}`;
      throw new Error(V);
    }
    return S.json();
  }
  async function f(C) {
    m.value = !0, v.value = null;
    try {
      let D;
      return Ht() && (D = await be.analyzeWorkflow(C)), t.value = D, D;
    } catch (D) {
      const S = D instanceof Error ? D.message : "Unknown error occurred";
      throw v.value = S, D;
    } finally {
      m.value = !1;
    }
  }
  async function c(C, D, S, R) {
    m.value = !0, v.value = null;
    try {
      let W;
      return Ht() && (W = await be.applyResolution(C, D, S)), l.value = W, W;
    } catch (W) {
      const V = W instanceof Error ? W.message : "Unknown error occurred";
      throw v.value = V, W;
    } finally {
      m.value = !1;
    }
  }
  async function g(C, D = 10) {
    m.value = !0, v.value = null;
    try {
      let S;
      return Ht() && (S = await be.searchNodes(C, D)), n.value = S.results, S.results;
    } catch (S) {
      const R = S instanceof Error ? S.message : "Unknown error occurred";
      throw v.value = R, S;
    } finally {
      m.value = !1;
    }
  }
  async function p(C, D = 10) {
    m.value = !0, v.value = null;
    try {
      let S;
      return Ht() && (S = await be.searchModels(C, D)), i.value = S.results, S.results;
    } catch (S) {
      const R = S instanceof Error ? S.message : "Unknown error occurred";
      throw v.value = R, S;
    } finally {
      m.value = !1;
    }
  }
  const y = gs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function _(C) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Ht()) {
        y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
        for (let D = 0; D < y.nodesToInstall.length; D++)
          y.nodeInstallProgress.currentNode = y.nodesToInstall[D], y.nodeInstallProgress.currentIndex = D, await new Promise((S) => setTimeout(S, 500)), y.nodeInstallProgress.completedNodes.push({
            node_id: y.nodesToInstall[D],
            success: !0
          });
        return y.nodesInstalled = y.nodesToInstall, y.needsRestart = y.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: y.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await T(C);
    } catch (D) {
      const S = D instanceof Error ? D.message : "Failed to install nodes";
      throw y.installError = S, D;
    }
  }
  async function T(C) {
    var S;
    const D = await u(
      `/v2/comfygit/workflow/${C}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: y.nodesToInstall
        })
      }
    );
    if (y.nodeInstallProgress) {
      y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
      const R = new Map(((S = D.failed) == null ? void 0 : S.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < y.nodesToInstall.length; W++) {
        const V = y.nodesToInstall[W], j = R.get(V);
        y.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !j,
          error: j
        });
      }
    }
    return y.nodesInstalled = D.nodes_installed, y.needsRestart = D.nodes_installed.length > 0, D.failed && D.failed.length > 0 && (y.installError = `${D.failed.length} package(s) failed to install`), D;
  }
  async function x(C, D, S) {
    b(), y.phase = "resolving", v.value = null;
    {
      const R = await be.applyResolution(C, D, S);
      l.value = R, y.nodesToInstall = R.nodes_to_install, y.phase = "complete";
      return;
    }
  }
  function $(C, D) {
    const { addToQueue: S } = ts(), R = D.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: C,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return R.length > 0 && S(R), R.length;
  }
  return {
    // State
    result: t,
    appliedResult: l,
    searchResults: n,
    modelSearchResults: i,
    isLoading: m,
    error: v,
    progress: y,
    // Methods
    analyzeWorkflow: f,
    applyResolution: c,
    applyResolutionWithProgress: x,
    installNodes: _,
    searchNodes: g,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: $
  };
}
const Ni = { class: "resolution-stepper" }, Ui = { class: "stepper-header" }, Bi = ["onClick"], Oi = {
  key: 0,
  class: "step-icon"
}, Ai = {
  key: 1,
  class: "step-number"
}, Fi = { class: "step-label" }, Vi = {
  key: 0,
  class: "step-connector"
}, Wi = { class: "stepper-content" }, Gi = /* @__PURE__ */ oe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m(g) {
      var p;
      if ((p = n.stepStats) != null && p[g]) {
        const y = n.stepStats[g];
        return y.total > 0 && y.resolved === y.total;
      }
      return n.completedSteps.includes(g);
    }
    function v(g) {
      var p;
      if ((p = n.stepStats) != null && p[g]) {
        const y = n.stepStats[g];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function u(g) {
      return m(g) ? "state-complete" : v(g) ? "state-partial" : "state-pending";
    }
    function f(g) {
      return !1;
    }
    function c(g) {
      i("step-change", g);
    }
    return (g, p) => (s(), o("div", Ni, [
      e("div", Ui, [
        (s(!0), o(F, null, ae(t.steps, (y, b) => (s(), o("div", {
          key: y.id,
          class: ue(["step", {
            active: t.currentStep === y.id,
            completed: m(y.id),
            "in-progress": v(y.id),
            disabled: f(y.id)
          }]),
          onClick: (_) => c(y.id)
        }, [
          e("div", {
            class: ue(["step-indicator", u(y.id)])
          }, [
            m(y.id) ? (s(), o("span", Oi, "✓")) : (s(), o("span", Ai, a(b + 1), 1))
          ], 2),
          e("div", Fi, a(y.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", Vi)) : d("", !0)
        ], 10, Bi))), 128))
      ]),
      e("div", Wi, [
        Me(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ji = /* @__PURE__ */ ne(Gi, [["__scopeId", "data-v-2a7b3af8"]]), Hi = /* @__PURE__ */ oe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, n = U(() => l.confidence >= 0.9 ? "high" : l.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), m = U(() => l.showPercentage ? `${Math.round(l.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, u) => (s(), o("span", {
      class: ue(["confidence-badge", i.value, t.size])
    }, a(m.value), 3));
  }
}), vs = /* @__PURE__ */ ne(Hi, [["__scopeId", "data-v-17ec4b80"]]), Ki = { class: "node-info" }, qi = { class: "node-info-text" }, Yi = { class: "item-body" }, Xi = {
  key: 0,
  class: "resolved-state"
}, Qi = {
  key: 1,
  class: "multiple-options"
}, Zi = { class: "options-list" }, Ji = ["onClick"], er = ["name", "value", "checked", "onChange"], tr = { class: "option-content" }, sr = { class: "option-header" }, or = { class: "option-package-id" }, nr = {
  key: 0,
  class: "option-title"
}, ar = { class: "option-meta" }, lr = {
  key: 0,
  class: "installed-badge"
}, ir = { class: "action-buttons" }, rr = {
  key: 2,
  class: "unresolved"
}, dr = {
  key: 0,
  class: "searching-state"
}, cr = { class: "options-list" }, ur = ["onClick"], mr = ["name", "value"], vr = { class: "option-content" }, fr = { class: "option-header" }, gr = { class: "option-package-id" }, pr = {
  key: 0,
  class: "option-description"
}, hr = { class: "option-meta" }, yr = {
  key: 0,
  class: "installed-badge"
}, wr = {
  key: 2,
  class: "unresolved-message"
}, kr = { class: "action-buttons" }, _r = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m(c, g = 80) {
      return c.length <= g ? c : c.slice(0, g - 3) + "...";
    }
    const v = U(() => !!n.choice);
    U(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.action;
    }), U(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.package_id;
    });
    const u = U(() => {
      switch (n.status) {
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
    function f(c) {
      i("option-selected", c);
    }
    return (c, g) => (s(), o("div", {
      class: ue(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Ki, [
        e("span", qi, [
          g[7] || (g[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ue(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Yi, [
        v.value ? (s(), o("div", Xi, [
          w(pe, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (p) => i("clear-choice"))
          }, {
            default: r(() => [...g[8] || (g[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Qi, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Zi, [
            (s(!0), o(F, null, ae(t.options, (p, y) => (s(), o("label", {
              key: p.package_id,
              class: ue(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (b) => f(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (b) => f(y)
              }, null, 40, er),
              e("div", tr, [
                e("div", sr, [
                  e("span", or, a(p.package_id), 1),
                  w(vs, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", nr, a(p.title), 1)) : d("", !0),
                e("div", ar, [
                  p.is_installed ? (s(), o("span", lr, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Ji))), 128))
          ]),
          e("div", ir, [
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[1] || (g[1] = (p) => i("search"))
            }, {
              default: r(() => [...g[9] || (g[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[2] || (g[2] = (p) => i("manual-entry"))
            }, {
              default: r(() => [...g[10] || (g[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[11] || (g[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", rr, [
          t.isSearching ? (s(), o("div", dr, [...g[13] || (g[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(F, { key: 1 }, [
            g[14] || (g[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", cr, [
              (s(!0), o(F, null, ae(t.searchResults.slice(0, 5), (p, y) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: y
                }, null, 8, mr),
                e("div", vr, [
                  e("div", fr, [
                    e("span", gr, a(p.package_id), 1),
                    w(vs, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", pr, a(m(p.description)), 1)) : d("", !0),
                  e("div", hr, [
                    p.is_installed ? (s(), o("span", yr, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, ur))), 128))
            ])
          ], 64)) : (s(), o("div", wr, [...g[15] || (g[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", kr, [
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[4] || (g[4] = (p) => i("search"))
            }, {
              default: r(() => {
                var p;
                return [
                  h(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (p) => i("manual-entry"))
            }, {
              default: r(() => [...g[16] || (g[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[17] || (g[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), br = /* @__PURE__ */ ne(_r, [["__scopeId", "data-v-c2997d1d"]]), $r = { class: "item-navigator" }, Cr = { class: "nav-item-info" }, xr = ["title"], Sr = { class: "nav-controls" }, Ir = { class: "nav-arrows" }, Er = ["disabled"], Mr = ["disabled"], Pr = { class: "nav-position" }, Tr = /* @__PURE__ */ oe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: l }) {
    const n = l;
    return (i, m) => (s(), o("div", $r, [
      e("div", Cr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, xr)
      ]),
      e("div", Sr, [
        e("div", Ir, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: m[0] || (m[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Er),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: m[1] || (m[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, Mr)
        ]),
        e("span", Pr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), ro = /* @__PURE__ */ ne(Tr, [["__scopeId", "data-v-74af7920"]]), Rr = ["type", "value", "placeholder", "disabled"], zr = {
  key: 0,
  class: "base-input-error"
}, Lr = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("div", {
      class: ue(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ue(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = kt((i) => l.$emit("enter"), ["enter"])),
          n[2] || (n[2] = kt((i) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Rr),
      t.error ? (s(), o("span", zr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ ne(Lr, [["__scopeId", "data-v-9ba02cdc"]]), Dr = { class: "node-resolution-step" }, Nr = {
  key: 0,
  class: "auto-resolved-section"
}, Ur = { class: "section-header" }, Br = { class: "stat-badge" }, Or = { class: "resolved-packages-list" }, Ar = { class: "package-info" }, Fr = { class: "package-id" }, Vr = { class: "node-count" }, Wr = { class: "package-actions" }, Gr = {
  key: 0,
  class: "status-badge install"
}, jr = {
  key: 1,
  class: "status-badge skip"
}, Hr = ["onClick"], Kr = {
  key: 1,
  class: "section-divider"
}, qr = { class: "step-header" }, Yr = { class: "stat-badge" }, Xr = {
  key: 1,
  class: "step-body"
}, Qr = {
  key: 3,
  class: "empty-state"
}, Zr = { class: "node-modal-body" }, Jr = { class: "node-search-results-container" }, ed = {
  key: 0,
  class: "node-search-results"
}, td = ["onClick"], sd = { class: "node-result-header" }, od = { class: "node-result-package-id" }, nd = {
  key: 0,
  class: "node-result-description"
}, ad = {
  key: 1,
  class: "node-empty-state"
}, ld = {
  key: 2,
  class: "node-empty-state"
}, id = {
  key: 3,
  class: "node-empty-state"
}, rd = { class: "node-manual-entry-modal" }, dd = { class: "node-modal-body" }, cd = { class: "node-modal-actions" }, ud = /* @__PURE__ */ oe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: l }) {
    const n = t, i = l, { searchNodes: m } = io(), v = k(0), u = k(!1), f = k(!1), c = k(""), g = k(""), p = k([]), y = k(!1), b = k(/* @__PURE__ */ new Map()), _ = k(/* @__PURE__ */ new Set()), T = k(!1);
    function x() {
      T.value && L(), T.value = !1;
    }
    const $ = U(() => n.nodes[v.value]), C = U(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), D = U(() => $.value ? b.value.get($.value.node_type) || [] : []), S = U(() => $.value ? _.value.has($.value.node_type) : !1);
    St($, async (ce) => {
      var ye;
      ce && ((ye = ce.options) != null && ye.length || b.value.has(ce.node_type) || _.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await R(ce.node_type));
    }, { immediate: !0 });
    async function R(ce) {
      _.value.add(ce);
      try {
        const ye = await m(ce, 5);
        b.value.set(ce, ye);
      } catch {
        b.value.set(ce, []);
      } finally {
        _.value.delete(ce);
      }
    }
    const W = U(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function V(ce) {
      return n.skippedPackages.has(ce);
    }
    function j(ce) {
      i("package-skip", ce);
    }
    const M = U(() => {
      var ye;
      if (!$.value) return "not-found";
      const ce = n.nodeChoices.get($.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ye = $.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), z = U(() => {
      var ye;
      if (!$.value) return;
      const ce = n.nodeChoices.get($.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ye = $.value.options) != null && ye.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function B(ce) {
      ce >= 0 && ce < n.nodes.length && (v.value = ce);
    }
    function re() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function Z() {
      $.value && i("skip", $.value.node_type);
    }
    function X(ce) {
      $.value && i("option-selected", $.value.node_type, ce);
    }
    function de() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function Y() {
      $.value && (c.value = $.value.node_type, p.value = D.value, u.value = !0, Ce(c.value));
    }
    function N() {
      g.value = "", f.value = !0;
    }
    function L() {
      u.value = !1, c.value = "", p.value = [];
    }
    function P() {
      f.value = !1, g.value = "";
    }
    let ie = null;
    function ee() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        Ce(c.value);
      }, 300);
    }
    async function Ce(ce) {
      if (!ce.trim()) {
        p.value = [];
        return;
      }
      y.value = !0;
      try {
        p.value = await m(ce, 10);
      } catch {
        p.value = [];
      } finally {
        y.value = !1;
      }
    }
    function Ie(ce) {
      $.value && (i("manual-entry", $.value.node_type, ce.package_id), L());
    }
    function ze(ce) {
      $.value && i("manual-entry", $.value.node_type, ce.package_id);
    }
    function je() {
      !$.value || !g.value.trim() || (i("manual-entry", $.value.node_type, g.value.trim()), P());
    }
    return (ce, ye) => {
      var Pe, Q;
      return s(), o("div", Dr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Nr, [
          e("div", Ur, [
            ye[6] || (ye[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Br, a(W.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Or, [
            (s(!0), o(F, null, ae(t.autoResolvedPackages, (le) => (s(), o("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ar, [
                e("code", Fr, a(le.package_id), 1),
                e("span", Vr, a(le.node_types_count) + " node type" + a(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Wr, [
                V(le.package_id) ? (s(), o("span", jr, " SKIPPED ")) : (s(), o("span", Gr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (we) => j(le.package_id)
                }, a(V(le.package_id) ? "Include" : "Skip"), 9, Hr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Kr)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(F, { key: 2 }, [
          e("div", qr, [
            ye[7] || (ye[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Yr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), E(ro, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ye[0] || (ye[0] = (le) => B(v.value - 1)),
            onNext: ye[1] || (ye[1] = (le) => B(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          $.value ? (s(), o("div", Xr, [
            w(br, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Pe = $.value.options) != null && Pe.length),
              options: $.value.options,
              choice: (Q = t.nodeChoices) == null ? void 0 : Q.get($.value.node_type),
              status: M.value,
              "status-label": z.value,
              "search-results": D.value,
              "is-searching": S.value,
              onMarkOptional: re,
              onSkip: Z,
              onManualEntry: N,
              onSearch: Y,
              onOptionSelected: X,
              onClearChoice: de,
              onSearchResultSelected: ze
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Qr, [...ye[8] || (ye[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Qe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ye[4] || (ye[4] = Ge((le) => T.value = !0, ["self"])),
            onMouseup: Ge(x, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ye[3] || (ye[3] = (le) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ye[9] || (ye[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Zr, [
                w(gt, {
                  modelValue: c.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (le) => c.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                e("div", Jr, [
                  p.value.length > 0 ? (s(), o("div", ed, [
                    (s(!0), o(F, null, ae(p.value, (le) => (s(), o("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (we) => Ie(le)
                    }, [
                      e("div", sd, [
                        e("code", od, a(le.package_id), 1),
                        le.match_confidence ? (s(), E(vs, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      le.description ? (s(), o("div", nd, a(le.description), 1)) : d("", !0)
                    ], 8, td))), 128))
                  ])) : y.value ? (s(), o("div", ad, "Searching...")) : c.value ? (s(), o("div", ld, 'No packages found matching "' + a(c.value) + '"', 1)) : (s(), o("div", id, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Qe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ge(P, ["self"])
          }, [
            e("div", rd, [
              e("div", { class: "node-modal-header" }, [
                ye[10] || (ye[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", dd, [
                w(gt, {
                  modelValue: g.value,
                  "onUpdate:modelValue": ye[5] || (ye[5] = (le) => g.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", cd, [
                  w(pe, {
                    variant: "secondary",
                    onClick: P
                  }, {
                    default: r(() => [...ye[11] || (ye[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(pe, {
                    variant: "primary",
                    disabled: !g.value.trim(),
                    onClick: je
                  }, {
                    default: r(() => [...ye[12] || (ye[12] = [
                      h(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), md = /* @__PURE__ */ ne(ud, [["__scopeId", "data-v-281581bc"]]), vd = { class: "node-info" }, fd = { class: "node-info-text" }, gd = { class: "item-body" }, pd = {
  key: 0,
  class: "resolved-state"
}, hd = {
  key: 1,
  class: "multiple-options"
}, yd = { class: "options-list" }, wd = ["onClick"], kd = ["name", "value", "checked", "onChange"], _d = { class: "option-content" }, bd = { class: "option-header" }, $d = { class: "option-filename" }, Cd = { class: "option-meta" }, xd = { class: "option-size" }, Sd = { class: "option-category" }, Id = { class: "option-path" }, Ed = { class: "action-buttons" }, Md = {
  key: 2,
  class: "unresolved"
}, Pd = { class: "action-buttons" }, Td = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => !!n.choice);
    U(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.action;
    }), U(() => {
      var c, g;
      return ((g = (c = n.choice) == null ? void 0 : c.selected_model) == null ? void 0 : g.filename) || "selected";
    });
    const v = U(() => {
      switch (n.status) {
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
    function u(c) {
      i("option-selected", c);
    }
    function f(c) {
      if (!c) return "Unknown";
      const g = c / (1024 * 1024 * 1024);
      return g >= 1 ? `${g.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (c, g) => (s(), o("div", {
      class: ue(["model-resolution-item", { resolved: m.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", vd, [
        e("span", fd, [
          g[7] || (g[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ue(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", gd, [
        m.value ? (s(), o("div", pd, [
          w(pe, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (p) => i("clear-choice"))
          }, {
            default: r(() => [...g[8] || (g[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", hd, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", yd, [
            (s(!0), o(F, null, ae(t.options, (p, y) => (s(), o("label", {
              key: p.model.hash,
              class: ue(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (b) => u(y)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (b) => u(y)
              }, null, 40, kd),
              e("div", _d, [
                e("div", bd, [
                  e("span", $d, a(p.model.filename), 1),
                  w(vs, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Cd, [
                  e("span", xd, a(f(p.model.size)), 1),
                  e("span", Sd, a(p.model.category), 1)
                ]),
                e("div", Id, a(p.model.relative_path), 1)
              ])
            ], 10, wd))), 128))
          ]),
          e("div", Ed, [
            w(pe, {
              variant: "ghost",
              size: "sm",
              onClick: g[1] || (g[1] = (p) => i("search"))
            }, {
              default: r(() => [...g[9] || (g[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "ghost",
              size: "sm",
              onClick: g[2] || (g[2] = (p) => i("download-url"))
            }, {
              default: r(() => [...g[10] || (g[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[11] || (g[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Md, [
          g[16] || (g[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Pd, [
            w(pe, {
              variant: "primary",
              size: "sm",
              onClick: g[4] || (g[4] = (p) => i("search"))
            }, {
              default: r(() => [...g[13] || (g[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (p) => i("download-url"))
            }, {
              default: r(() => [...g[14] || (g[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[15] || (g[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Rd = /* @__PURE__ */ ne(Td, [["__scopeId", "data-v-8a82fefa"]]), zd = { class: "model-resolution-step" }, Ld = { class: "step-header" }, Dd = { class: "step-info" }, Nd = { class: "step-title" }, Ud = { class: "step-description" }, Bd = { class: "stat-badge" }, Od = {
  key: 1,
  class: "step-body"
}, Ad = {
  key: 2,
  class: "empty-state"
}, Fd = { class: "model-search-modal" }, Vd = { class: "model-modal-body" }, Wd = {
  key: 0,
  class: "model-search-results"
}, Gd = ["onClick"], jd = { class: "model-result-header" }, Hd = { class: "model-result-filename" }, Kd = { class: "model-result-meta" }, qd = { class: "model-result-category" }, Yd = { class: "model-result-size" }, Xd = {
  key: 0,
  class: "model-result-path"
}, Qd = {
  key: 1,
  class: "model-no-results"
}, Zd = {
  key: 2,
  class: "model-searching"
}, Jd = { class: "model-download-url-modal" }, ec = { class: "model-modal-body" }, tc = { class: "model-input-group" }, sc = { class: "model-input-group" }, oc = { class: "model-modal-actions" }, nc = /* @__PURE__ */ oe({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: l }) {
    const n = {
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
    function i(L) {
      var P;
      return L && ((P = n[L]) == null ? void 0 : P[0]) || null;
    }
    const m = t, v = l, u = k(0), f = k(!1), c = k(!1), g = k(""), p = k(""), y = k(""), b = k([]), _ = k(!1), T = U(() => m.models[u.value]), x = U(() => m.models.some((L) => L.is_download_intent)), $ = U(() => m.models.filter(
      (L) => m.modelChoices.has(L.filename) || L.is_download_intent
    ).length), C = U(() => {
      var P;
      if (!T.value) return "";
      const L = i((P = T.value.reference) == null ? void 0 : P.node_type);
      return L ? `${L}/${T.value.filename}` : "";
    }), D = U(() => {
      var P;
      if (!T.value) return "not-found";
      const L = m.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (P = T.value.options) != null && P.length ? "ambiguous" : "not-found";
    }), S = U(() => {
      var P, ie;
      if (!T.value) return;
      const L = m.modelChoices.get(T.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (P = L.selected_model) != null && P.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (ie = T.value.options) != null && ie.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function R(L) {
      L >= 0 && L < m.models.length && (u.value = L);
    }
    function W() {
      T.value && v("mark-optional", T.value.filename);
    }
    function V() {
      T.value && v("skip", T.value.filename);
    }
    function j(L) {
      T.value && v("option-selected", T.value.filename, L);
    }
    function M() {
      T.value && v("clear-choice", T.value.filename);
    }
    function z() {
      T.value && (g.value = T.value.filename, f.value = !0);
    }
    function B() {
      T.value && (p.value = T.value.download_source || "", y.value = T.value.target_path || C.value, c.value = !0);
    }
    function re() {
      f.value = !1, g.value = "", b.value = [];
    }
    function Z() {
      c.value = !1, p.value = "", y.value = "";
    }
    function X() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function de(L) {
      T.value && re();
    }
    function Y() {
      !T.value || !p.value.trim() || (v("download-url", T.value.filename, p.value.trim(), y.value.trim() || void 0), Z());
    }
    function N(L) {
      if (!L) return "Unknown";
      const P = L / (1024 * 1024 * 1024);
      return P >= 1 ? `${P.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, P) => {
      var ie, ee, Ce;
      return s(), o("div", zd, [
        e("div", Ld, [
          e("div", Dd, [
            e("h3", Nd, a(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ud, a(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Bd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(ro, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: P[0] || (P[0] = (Ie) => R(u.value - 1)),
          onNext: P[1] || (P[1] = (Ie) => R(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", Od, [
          w(Rd, {
            filename: T.value.filename,
            "node-type": ((ie = T.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((ee = T.value.options) != null && ee.length),
            options: T.value.options,
            choice: (Ce = t.modelChoices) == null ? void 0 : Ce.get(T.value.filename),
            status: D.value,
            "status-label": S.value,
            onMarkOptional: W,
            onSkip: V,
            onDownloadUrl: B,
            onSearch: z,
            onOptionSelected: j,
            onClearChoice: M
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ad, [...P[5] || (P[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Qe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ge(re, ["self"])
          }, [
            e("div", Fd, [
              e("div", { class: "model-modal-header" }, [
                P[6] || (P[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              e("div", Vd, [
                w(gt, {
                  modelValue: g.value,
                  "onUpdate:modelValue": P[2] || (P[2] = (Ie) => g.value = Ie),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", Wd, [
                  (s(!0), o(F, null, ae(b.value, (Ie) => (s(), o("div", {
                    key: Ie.hash,
                    class: "model-search-result-item",
                    onClick: (ze) => de()
                  }, [
                    e("div", jd, [
                      e("code", Hd, a(Ie.filename), 1)
                    ]),
                    e("div", Kd, [
                      e("span", qd, a(Ie.category), 1),
                      e("span", Yd, a(N(Ie.size)), 1)
                    ]),
                    Ie.relative_path ? (s(), o("div", Xd, a(Ie.relative_path), 1)) : d("", !0)
                  ], 8, Gd))), 128))
                ])) : g.value && !_.value ? (s(), o("div", Qd, ' No models found matching "' + a(g.value) + '" ', 1)) : d("", !0),
                _.value ? (s(), o("div", Zd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Qe, { to: "body" }, [
          c.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ge(Z, ["self"])
          }, [
            e("div", Jd, [
              e("div", { class: "model-modal-header" }, [
                P[7] || (P[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              e("div", ec, [
                e("div", tc, [
                  P[8] || (P[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(gt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": P[3] || (P[3] = (Ie) => p.value = Ie),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", sc, [
                  P[9] || (P[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(gt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": P[4] || (P[4] = (Ie) => y.value = Ie),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", oc, [
                  w(pe, {
                    variant: "secondary",
                    onClick: Z
                  }, {
                    default: r(() => [...P[10] || (P[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(pe, {
                    variant: "primary",
                    disabled: !p.value.trim() || !y.value.trim(),
                    onClick: Y
                  }, {
                    default: r(() => [...P[11] || (P[11] = [
                      h(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), ac = /* @__PURE__ */ ne(nc, [["__scopeId", "data-v-c6acbada"]]), lc = { class: "applying-step" }, ic = {
  key: 0,
  class: "phase-content"
}, rc = {
  key: 1,
  class: "phase-content"
}, dc = { class: "phase-description" }, cc = { class: "overall-progress" }, uc = { class: "progress-bar" }, mc = { class: "progress-label" }, vc = { class: "install-list" }, fc = { class: "install-icon" }, gc = { key: 0 }, pc = {
  key: 1,
  class: "spinner"
}, hc = { key: 2 }, yc = { key: 3 }, wc = {
  key: 0,
  class: "install-error"
}, kc = {
  key: 2,
  class: "phase-content"
}, _c = { class: "phase-header" }, bc = { class: "phase-title" }, $c = { class: "completion-summary" }, Cc = {
  key: 0,
  class: "summary-item success"
}, xc = { class: "summary-text" }, Sc = {
  key: 1,
  class: "summary-item error"
}, Ic = { class: "summary-text" }, Ec = {
  key: 2,
  class: "failed-list"
}, Mc = { class: "failed-node-id" }, Pc = { class: "failed-error" }, Tc = {
  key: 4,
  class: "summary-item success"
}, Rc = {
  key: 5,
  class: "restart-prompt"
}, zc = {
  key: 3,
  class: "phase-content error"
}, Lc = { class: "error-message" }, Dc = /* @__PURE__ */ oe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const l = t, n = U(() => {
      var g, p;
      const f = ((g = l.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) || l.progress.nodesToInstall.length;
      if (!f) return 0;
      const c = ((p = l.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(c / f * 100);
    }), i = U(() => {
      var f;
      return ((f = l.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.filter((c) => !c.success)) || [];
    }), m = U(() => i.value.length > 0);
    function v(f, c) {
      var p, y;
      const g = (p = l.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === f);
      return g ? g.success ? "complete" : "failed" : ((y = l.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === c ? "installing" : "pending";
    }
    function u(f) {
      var c, g;
      return (g = (c = l.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.find((p) => p.node_id === f)) == null ? void 0 : g.error;
    }
    return (f, c) => {
      var g, p, y, b;
      return s(), o("div", lc, [
        t.progress.phase === "resolving" ? (s(), o("div", ic, [...c[2] || (c[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", rc, [
          c[3] || (c[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", dc, " Installing " + a((((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", cc, [
            e("div", uc, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", mc, a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", vc, [
            (s(!0), o(F, null, ae(t.progress.nodesToInstall, (_, T) => (s(), o("div", {
              key: _,
              class: ue(["install-item", v(_, T)])
            }, [
              e("span", fc, [
                v(_, T) === "pending" ? (s(), o("span", gc, "○")) : v(_, T) === "installing" ? (s(), o("span", pc, "◌")) : v(_, T) === "complete" ? (s(), o("span", hc, "✓")) : v(_, T) === "failed" ? (s(), o("span", yc, "✗")) : d("", !0)
              ]),
              e("code", null, a(_), 1),
              u(_) ? (s(), o("span", wc, a(u(_)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", kc, [
          e("div", _c, [
            e("span", {
              class: ue(["phase-icon", m.value ? "warning" : "success"])
            }, a(m.value ? "⚠" : "✓"), 3),
            e("h3", bc, a(m.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", $c, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Cc, [
              c[4] || (c[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", xc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Sc, [
              c[5] || (c[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Ic, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Ec, [
              (s(!0), o(F, null, ae(i.value, (_) => (s(), o("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", Mc, a(_.node_id), 1),
                e("span", Pc, a(_.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: c[0] || (c[0] = (_) => f.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            m.value ? d("", !0) : (s(), o("div", Tc, [...c[6] || (c[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            c[8] || (c[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Rc, [
              c[7] || (c[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: c[1] || (c[1] = (_) => f.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", zc, [
          c[9] || (c[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Lc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), Nc = /* @__PURE__ */ ne(Dc, [["__scopeId", "data-v-5efaae58"]]), Uc = {
  key: 0,
  class: "loading-state"
}, Bc = {
  key: 1,
  class: "wizard-content"
}, Oc = {
  key: 0,
  class: "step-content"
}, Ac = { class: "analysis-summary" }, Fc = { class: "analysis-header" }, Vc = { class: "summary-description" }, Wc = { class: "stats-grid" }, Gc = { class: "stat-card" }, jc = { class: "stat-items" }, Hc = {
  key: 0,
  class: "stat-item success"
}, Kc = { class: "stat-count" }, qc = {
  key: 1,
  class: "stat-item info"
}, Yc = { class: "stat-count" }, Xc = {
  key: 2,
  class: "stat-item warning"
}, Qc = { class: "stat-count" }, Zc = {
  key: 3,
  class: "stat-item error"
}, Jc = { class: "stat-count" }, eu = { class: "stat-card" }, tu = { class: "stat-items" }, su = { class: "stat-item success" }, ou = { class: "stat-count" }, nu = {
  key: 0,
  class: "stat-item info"
}, au = { class: "stat-count" }, lu = {
  key: 1,
  class: "stat-item warning"
}, iu = { class: "stat-count" }, ru = {
  key: 2,
  class: "stat-item warning"
}, du = { class: "stat-count" }, cu = {
  key: 3,
  class: "stat-item error"
}, uu = { class: "stat-count" }, mu = {
  key: 0,
  class: "status-message warning"
}, vu = { class: "status-text" }, fu = {
  key: 1,
  class: "status-message info"
}, gu = { class: "status-text" }, pu = {
  key: 2,
  class: "status-message info"
}, hu = { class: "status-text" }, yu = {
  key: 3,
  class: "status-message warning"
}, wu = { class: "status-text" }, ku = {
  key: 4,
  class: "status-message success"
}, _u = {
  key: 5,
  class: "category-mismatch-section"
}, bu = { class: "mismatch-list" }, $u = { class: "mismatch-path" }, Cu = { class: "mismatch-target" }, xu = {
  key: 3,
  class: "step-content"
}, Su = { class: "review-summary" }, Iu = { class: "review-stats" }, Eu = { class: "review-stat" }, Mu = { class: "stat-value" }, Pu = { class: "review-stat" }, Tu = { class: "stat-value" }, Ru = { class: "review-stat" }, zu = { class: "stat-value" }, Lu = { class: "review-stat" }, Du = { class: "stat-value" }, Nu = {
  key: 0,
  class: "review-section"
}, Uu = { class: "section-title" }, Bu = { class: "review-items" }, Ou = { class: "item-name" }, Au = { class: "item-choice" }, Fu = {
  key: 0,
  class: "choice-badge install"
}, Vu = {
  key: 1,
  class: "choice-badge skip"
}, Wu = {
  key: 1,
  class: "review-section"
}, Gu = { class: "section-title" }, ju = { class: "review-items" }, Hu = { class: "item-name" }, Ku = { class: "item-choice" }, qu = {
  key: 0,
  class: "choice-badge install"
}, Yu = {
  key: 1,
  class: "choice-badge optional"
}, Xu = {
  key: 2,
  class: "choice-badge skip"
}, Qu = {
  key: 1,
  class: "choice-badge pending"
}, Zu = {
  key: 2,
  class: "review-section"
}, Ju = { class: "section-title" }, em = { class: "review-items" }, tm = { class: "item-name" }, sm = { class: "item-choice" }, om = {
  key: 0,
  class: "choice-badge install"
}, nm = {
  key: 1,
  class: "choice-badge download"
}, am = {
  key: 2,
  class: "choice-badge optional"
}, lm = {
  key: 3,
  class: "choice-badge skip"
}, im = {
  key: 4,
  class: "choice-badge skip"
}, rm = {
  key: 1,
  class: "choice-badge download"
}, dm = {
  key: 2,
  class: "choice-badge pending"
}, cm = {
  key: 3,
  class: "no-choices"
}, um = /* @__PURE__ */ oe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: l }) {
    const n = t, i = l, { analyzeWorkflow: m, applyResolution: v, installNodes: u, queueModelDownloads: f, progress: c, resetProgress: g } = io(), { loadPendingDownloads: p } = ts(), { openFileLocation: y } = qe(), b = k(null), _ = k(!1), T = k(!1), x = k(null), $ = k("analysis"), C = k([]), D = k(/* @__PURE__ */ new Map()), S = k(/* @__PURE__ */ new Map()), R = k(/* @__PURE__ */ new Set()), W = U(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (j.value || B.value) && q.push({ id: "nodes", label: "Nodes" }), (M.value || z.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), $.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), V = U(() => b.value ? b.value.stats.needs_user_input : !1), j = U(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), M = U(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), z = U(() => b.value ? b.value.stats.download_intents > 0 : !1), B = U(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), re = U(() => b.value ? b.value.nodes.resolved.length : 0), Z = U(() => b.value ? b.value.models.resolved.filter((q) => q.has_category_mismatch) : []), X = U(() => Z.value.length > 0), de = U(() => {
      if (!b.value) return [];
      const q = b.value.nodes.resolved.filter((A) => !A.is_installed), I = /* @__PURE__ */ new Set();
      return q.filter((A) => I.has(A.package.package_id) ? !1 : (I.add(A.package.package_id), !0));
    }), Y = U(() => {
      if (!b.value) return [];
      const q = b.value.nodes.resolved.filter((A) => !A.is_installed), I = /* @__PURE__ */ new Map();
      for (const A of q) {
        const te = I.get(A.package.package_id);
        te ? te.node_types_count++ : I.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(I.values());
    }), N = U(() => de.value.filter((q) => !R.value.has(q.package.package_id))), L = U(() => b.value ? b.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), P = U(() => {
      if (!b.value) return [];
      const q = b.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), I = b.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((te) => ({
          package_id: te.package.package_id,
          title: te.package.title,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          is_installed: te.is_installed
        }))
      }));
      return [...q, ...I];
    }), ie = U(() => {
      if (!b.value) return [];
      const q = b.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), I = b.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((te) => ({
          model: te.model,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          has_download_source: te.has_download_source
        }))
      }));
      return [...q, ...I];
    }), ee = U(() => {
      const q = ie.value, I = L.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...q, ...I];
    }), Ce = U(() => {
      let q = N.value.length;
      for (const I of D.value.values())
        I.action === "install" && q++;
      for (const I of S.value.values())
        I.action === "select" && q++;
      return q;
    }), Ie = U(() => {
      let q = 0;
      for (const I of S.value.values())
        I.action === "download" && q++;
      return q;
    }), ze = U(() => {
      let q = 0;
      for (const I of D.value.values())
        I.action === "optional" && q++;
      for (const I of S.value.values())
        I.action === "optional" && q++;
      return q;
    }), je = U(() => {
      let q = R.value.size;
      for (const I of D.value.values())
        I.action === "skip" && q++;
      for (const I of S.value.values())
        I.action === "skip" && q++;
      for (const I of P.value)
        D.value.has(I.node_type) || q++;
      for (const I of ie.value)
        S.value.has(I.filename) || q++;
      return q;
    }), ce = U(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, j.value) {
        const I = P.value.length, A = P.value.filter(
          (te) => D.value.has(te.node_type)
        ).length;
        q.nodes = { resolved: A, total: I };
      }
      if (M.value || z.value) {
        const I = ee.value.length, A = ee.value.filter(
          (te) => S.value.has(te.filename) || te.is_download_intent
        ).length;
        q.models = { resolved: A, total: I };
      }
      if (q.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const I = c.totalFiles || 1, A = c.completedFiles.length;
        q.applying = { resolved: A, total: I };
      }
      return q;
    });
    function ye(q) {
      $.value = q;
    }
    function Pe() {
      const q = W.value.findIndex((I) => I.id === $.value);
      q > 0 && ($.value = W.value[q - 1].id);
    }
    function Q() {
      const q = W.value.findIndex((I) => I.id === $.value);
      q < W.value.length - 1 && ($.value = W.value[q + 1].id);
    }
    async function le() {
      _.value = !0, x.value = null;
      try {
        b.value = await m(n.workflowName);
      } catch (q) {
        x.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        _.value = !1;
      }
    }
    function we() {
      C.value.includes("analysis") || C.value.push("analysis"), j.value || B.value ? $.value = "nodes" : M.value || z.value ? $.value = "models" : $.value = "review";
    }
    function Ae(q) {
      D.value.set(q, { action: "optional" });
    }
    function ot(q) {
      D.value.set(q, { action: "skip" });
    }
    function it(q, I) {
      var te;
      const A = P.value.find(($e) => $e.node_type === q);
      (te = A == null ? void 0 : A.options) != null && te[I] && D.value.set(q, {
        action: "install",
        package_id: A.options[I].package_id
      });
    }
    function Ee(q, I) {
      D.value.set(q, {
        action: "install",
        package_id: I
      });
    }
    function fe(q) {
      D.value.delete(q);
    }
    function J(q) {
      R.value.has(q) ? R.value.delete(q) : R.value.add(q);
    }
    function me(q) {
      S.value.set(q, { action: "optional" });
    }
    function nt(q) {
      S.value.set(q, { action: "skip" });
    }
    function xe(q, I) {
      var te;
      const A = ie.value.find(($e) => $e.filename === q);
      (te = A == null ? void 0 : A.options) != null && te[I] && S.value.set(q, {
        action: "select",
        selected_model: A.options[I].model
      });
    }
    function Xe(q, I, A) {
      S.value.set(q, {
        action: "download",
        url: I,
        target_path: A
      });
    }
    function ct(q) {
      S.value.delete(q);
    }
    async function ut(q) {
      try {
        await y(q);
      } catch (I) {
        x.value = I instanceof Error ? I.message : "Failed to open file location";
      }
    }
    async function Fe() {
      var q;
      T.value = !0, x.value = null, g(), c.phase = "resolving", $.value = "applying";
      try {
        const I = await v(n.workflowName, D.value, S.value, R.value);
        I.models_to_download && I.models_to_download.length > 0 && f(n.workflowName, I.models_to_download);
        const A = [
          ...I.nodes_to_install || [],
          ...N.value.map(($e) => $e.package.package_id)
        ];
        c.nodesToInstall = [...new Set(A)], c.nodesToInstall.length > 0 && await u(n.workflowName), c.phase = "complete", await p();
        const te = c.installError || ((q = c.nodeInstallProgress) == null ? void 0 : q.completedNodes.some(($e) => !$e.success));
        !c.needsRestart && !te && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (I) {
        x.value = I instanceof Error ? I.message : "Failed to apply resolution", c.error = x.value, c.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function ve() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var I;
      const q = ((I = c.nodeInstallProgress) == null ? void 0 : I.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (q.length !== 0) {
        c.phase = "installing", c.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: q.length
        }, c.nodesToInstall = q, c.nodesInstalled = [], c.installError = void 0;
        try {
          await u(n.workflowName), c.phase = "complete";
        } catch (A) {
          c.error = A instanceof Error ? A.message : "Retry failed", c.phase = "error";
        }
      }
    }
    return He(le), (q, I) => (s(), E(st, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: _.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: I[1] || (I[1] = (A) => i("close"))
    }, {
      body: r(() => [
        _.value && !b.value ? (s(), o("div", Uc, [...I[2] || (I[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Bc, [
          w(ji, {
            steps: W.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": ce.value,
            onStepChange: ye
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Oc, [
            e("div", Ac, [
              e("div", Fc, [
                I[3] || (I[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Vc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Wc, [
                e("div", Gc, [
                  I[12] || (I[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", jc, [
                    re.value > 0 ? (s(), o("div", Hc, [
                      I[4] || (I[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Kc, a(re.value), 1),
                      I[5] || (I[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", qc, [
                      I[6] || (I[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Yc, a(b.value.stats.packages_needing_installation), 1),
                      I[7] || (I[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", Xc, [
                      I[8] || (I[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Qc, a(b.value.nodes.ambiguous.length), 1),
                      I[9] || (I[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Zc, [
                      I[10] || (I[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Jc, a(b.value.nodes.unresolved.length), 1),
                      I[11] || (I[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", eu, [
                  I[23] || (I[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", tu, [
                    e("div", su, [
                      I[13] || (I[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ou, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      I[14] || (I[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", nu, [
                      I[15] || (I[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", au, a(b.value.stats.download_intents), 1),
                      I[16] || (I[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    X.value ? (s(), o("div", lu, [
                      I[17] || (I[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", iu, a(Z.value.length), 1),
                      I[18] || (I[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", ru, [
                      I[19] || (I[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", du, a(b.value.models.ambiguous.length), 1),
                      I[20] || (I[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", cu, [
                      I[21] || (I[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", uu, a(b.value.models.unresolved.length), 1),
                      I[22] || (I[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", mu, [
                I[24] || (I[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", vu, a(P.value.length + ie.value.length) + " items need your input", 1)
              ])) : B.value ? (s(), o("div", fu, [
                I[25] || (I[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", gu, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(z.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : z.value ? (s(), o("div", pu, [
                I[26] || (I[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", hu, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : X.value ? (s(), o("div", yu, [
                I[27] || (I[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", wu, a(Z.value.length) + " model" + a(Z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", ku, [...I[28] || (I[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              X.value ? (s(), o("div", _u, [
                I[31] || (I[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", bu, [
                  (s(!0), o(F, null, ae(Z.value, (A) => {
                    var te, $e;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", $u, a(A.actual_category) + "/" + a((te = A.model) == null ? void 0 : te.filename), 1),
                      I[30] || (I[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Cu, a(($e = A.expected_categories) == null ? void 0 : $e[0]) + "/", 1),
                      A.file_path ? (s(), E(pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ye) => ut(A.file_path)
                      }, {
                        default: r(() => [...I[29] || (I[29] = [
                          h(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          $.value === "nodes" ? (s(), E(md, {
            key: 1,
            nodes: P.value,
            "node-choices": D.value,
            "auto-resolved-packages": Y.value,
            "skipped-packages": R.value,
            onMarkOptional: Ae,
            onSkip: ot,
            onOptionSelected: it,
            onManualEntry: Ee,
            onClearChoice: fe,
            onPackageSkip: J
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          $.value === "models" ? (s(), E(ac, {
            key: 2,
            models: ee.value,
            "model-choices": S.value,
            onMarkOptional: me,
            onSkip: nt,
            onOptionSelected: xe,
            onDownloadUrl: Xe,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          $.value === "review" ? (s(), o("div", xu, [
            e("div", Su, [
              I[36] || (I[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Iu, [
                e("div", Eu, [
                  e("span", Mu, a(Ce.value), 1),
                  I[32] || (I[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Pu, [
                  e("span", Tu, a(Ie.value), 1),
                  I[33] || (I[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Ru, [
                  e("span", zu, a(ze.value), 1),
                  I[34] || (I[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Lu, [
                  e("span", Du, a(je.value), 1),
                  I[35] || (I[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Y.value.length > 0 ? (s(), o("div", Nu, [
                e("h4", Uu, "Node Packages (" + a(Y.value.length) + ")", 1),
                e("div", Bu, [
                  (s(!0), o(F, null, ae(Y.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", Ou, a(A.package_id), 1),
                    e("div", Au, [
                      R.value.has(A.package_id) ? (s(), o("span", Vu, "Skipped")) : (s(), o("span", Fu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              P.value.length > 0 ? (s(), o("div", Wu, [
                e("h4", Gu, "Node Choices (" + a(P.value.length) + ")", 1),
                e("div", ju, [
                  (s(!0), o(F, null, ae(P.value, (A) => {
                    var te, $e, Ye, _t;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", Hu, a(A.node_type), 1),
                      e("div", Ku, [
                        D.value.has(A.node_type) ? (s(), o(F, { key: 0 }, [
                          ((te = D.value.get(A.node_type)) == null ? void 0 : te.action) === "install" ? (s(), o("span", qu, a(($e = D.value.get(A.node_type)) == null ? void 0 : $e.package_id), 1)) : ((Ye = D.value.get(A.node_type)) == null ? void 0 : Ye.action) === "optional" ? (s(), o("span", Yu, " Optional ")) : ((_t = D.value.get(A.node_type)) == null ? void 0 : _t.action) === "skip" ? (s(), o("span", Xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Qu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ee.value.length > 0 ? (s(), o("div", Zu, [
                e("h4", Ju, "Models (" + a(ee.value.length) + ")", 1),
                e("div", em, [
                  (s(!0), o(F, null, ae(ee.value, (A) => {
                    var te, $e, Ye, _t, mt, Nt, bt;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", tm, a(A.filename), 1),
                      e("div", sm, [
                        S.value.has(A.filename) ? (s(), o(F, { key: 0 }, [
                          ((te = S.value.get(A.filename)) == null ? void 0 : te.action) === "select" ? (s(), o("span", om, a((Ye = ($e = S.value.get(A.filename)) == null ? void 0 : $e.selected_model) == null ? void 0 : Ye.filename), 1)) : ((_t = S.value.get(A.filename)) == null ? void 0 : _t.action) === "download" ? (s(), o("span", nm, " Download ")) : ((mt = S.value.get(A.filename)) == null ? void 0 : mt.action) === "optional" ? (s(), o("span", am, " Optional ")) : ((Nt = S.value.get(A.filename)) == null ? void 0 : Nt.action) === "skip" ? (s(), o("span", lm, " Skip ")) : ((bt = S.value.get(A.filename)) == null ? void 0 : bt.action) === "cancel_download" ? (s(), o("span", im, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", rm, " Pending Download ")) : (s(), o("span", dm, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              de.value.length === 0 && P.value.length === 0 && ee.value.length === 0 ? (s(), o("div", cm, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          $.value === "applying" ? (s(), E(Nc, {
            key: 4,
            progress: _e(c),
            onRestart: ve,
            onRetryFailed: K
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: r(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), E(pe, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Pe
        }, {
          default: r(() => [...I[37] || (I[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        I[41] || (I[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || _e(c).phase === "complete" || _e(c).phase === "error" ? (s(), E(pe, {
          key: 1,
          variant: "secondary",
          onClick: I[0] || (I[0] = (A) => i("close"))
        }, {
          default: r(() => [
            h(a(_e(c).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        $.value === "analysis" ? (s(), E(pe, {
          key: 2,
          variant: "primary",
          disabled: _.value,
          onClick: we
        }, {
          default: r(() => [...I[38] || (I[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        $.value === "nodes" ? (s(), E(pe, {
          key: 3,
          variant: "primary",
          onClick: Q
        }, {
          default: r(() => [
            h(a(M.value || z.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        $.value === "models" ? (s(), E(pe, {
          key: 4,
          variant: "primary",
          onClick: Q
        }, {
          default: r(() => [...I[39] || (I[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        $.value === "review" ? (s(), E(pe, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Fe
        }, {
          default: r(() => [...I[40] || (I[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), mm = /* @__PURE__ */ ne(um, [["__scopeId", "data-v-6276cf1d"]]), vm = { class: "search-input-wrapper" }, fm = ["value", "placeholder"], gm = /* @__PURE__ */ oe({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = k(null);
    let v;
    function u(c) {
      const g = c.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        i("update:modelValue", g);
      }, n.debounce)) : i("update:modelValue", g);
    }
    function f() {
      var c;
      i("update:modelValue", ""), i("clear"), (c = m.value) == null || c.focus();
    }
    return He(() => {
      n.autoFocus && m.value && m.value.focus();
    }), (c, g) => (s(), o("div", vm, [
      e("input", {
        ref_key: "inputRef",
        ref: m,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: kt(f, ["escape"])
      }, null, 40, fm),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), pm = /* @__PURE__ */ ne(gm, [["__scopeId", "data-v-266f857a"]]), hm = { class: "search-bar" }, ym = /* @__PURE__ */ oe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (l, n) => (s(), o("div", hm, [
      w(pm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Wt = /* @__PURE__ */ ne(ym, [["__scopeId", "data-v-3d51bbfd"]]), wm = { class: "section-group" }, km = {
  key: 0,
  class: "section-content"
}, _m = /* @__PURE__ */ oe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = k(n.initiallyExpanded);
    function v() {
      n.collapsible && (m.value = !m.value, i("toggle", m.value));
    }
    return (u, f) => (s(), o("section", wm, [
      w(dt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: m.value,
        onClick: v
      }, {
        default: r(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || m.value ? (s(), o("div", km, [
        Me(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ ne(_m, [["__scopeId", "data-v-c48e33ed"]]), bm = { class: "item-header" }, $m = {
  key: 0,
  class: "item-icon"
}, Cm = { class: "item-info" }, xm = {
  key: 0,
  class: "item-title"
}, Sm = {
  key: 1,
  class: "item-subtitle"
}, Im = {
  key: 0,
  class: "item-details"
}, Em = {
  key: 1,
  class: "item-actions"
}, Mm = /* @__PURE__ */ oe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, i = U(() => n.status ? `status-${n.status}` : "");
    return (m, v) => (s(), o("div", {
      class: ue(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: v[0] || (v[0] = (u) => t.clickable && m.$emit("click"))
    }, [
      e("div", bm, [
        m.$slots.icon ? (s(), o("span", $m, [
          Me(m.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Cm, [
          m.$slots.title ? (s(), o("div", xm, [
            Me(m.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          m.$slots.subtitle ? (s(), o("div", Sm, [
            Me(m.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      m.$slots.details ? (s(), o("div", Im, [
        Me(m.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      m.$slots.actions ? (s(), o("div", Em, [
        Me(m.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ ne(Mm, [["__scopeId", "data-v-cc435e0e"]]), Pm = { class: "loading-state" }, Tm = { class: "loading-message" }, Rm = /* @__PURE__ */ oe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (l, n) => (s(), o("div", Pm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Tm, a(t.message), 1)
    ]));
  }
}), Et = /* @__PURE__ */ ne(Rm, [["__scopeId", "data-v-ad8436c9"]]), zm = { class: "error-state" }, Lm = { class: "error-message" }, Dm = /* @__PURE__ */ oe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (l, n) => (s(), o("div", zm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Lm, a(t.message), 1),
      t.retry ? (s(), E(se, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => l.$emit("retry"))
      }, {
        default: r(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Mt = /* @__PURE__ */ ne(Dm, [["__scopeId", "data-v-5397be48"]]), Nm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: l, emit: n }) {
    const i = n, { getWorkflows: m } = qe();
    ao();
    const v = k([]), u = k(!1), f = k(null), c = k(""), g = k(!0), p = k(!1), y = k(!1), b = k(!1), _ = k(null), T = U(
      () => v.value.filter((N) => N.status === "broken")
    ), x = U(
      () => v.value.filter((N) => N.status === "new")
    ), $ = U(
      () => v.value.filter((N) => N.status === "modified")
    ), C = U(
      () => v.value.filter((N) => N.status === "synced")
    ), D = U(() => {
      if (!c.value.trim()) return v.value;
      const N = c.value.toLowerCase();
      return v.value.filter((L) => L.name.toLowerCase().includes(N));
    }), S = U(
      () => T.value.filter(
        (N) => !c.value.trim() || N.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), R = U(
      () => x.value.filter(
        (N) => !c.value.trim() || N.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), W = U(
      () => $.value.filter(
        (N) => !c.value.trim() || N.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), V = U(
      () => C.value.filter(
        (N) => !c.value.trim() || N.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), j = U(
      () => p.value ? V.value : V.value.slice(0, 5)
    );
    async function M(N = !1) {
      u.value = !0, f.value = null;
      try {
        v.value = await m(N);
      } catch (L) {
        f.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    l({ loadWorkflows: M });
    function z(N) {
      _.value = N, y.value = !0;
    }
    function B(N) {
      _.value = N, b.value = !0;
    }
    function re() {
      i("refresh");
    }
    async function Z() {
      b.value = !1, await M(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function de(N) {
      const L = [];
      return N.missing_nodes > 0 && L.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && L.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && L.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && L.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function Y(N) {
      const L = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return He(M), (N, L) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, { title: "WORKFLOWS" })
        ]),
        search: r(() => [
          w(Wt, {
            modelValue: c.value,
            "onUpdate:modelValue": L[0] || (L[0] = (P) => c.value = P),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          u.value ? (s(), E(Et, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (s(), E(Mt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            S.value.length ? (s(), E(Ve, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(S.value, (P) => (s(), E(Je, {
                  key: P.name,
                  status: "broken"
                }, {
                  icon: r(() => [...L[7] || (L[7] = [
                    h("⚠", -1)
                  ])]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(de(P)), 1)
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => B(P.name)
                    }, {
                      default: r(() => [...L[8] || (L[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => z(P.name)
                    }, {
                      default: r(() => [...L[9] || (L[9] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            R.value.length ? (s(), E(Ve, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(R.value, (P) => (s(), E(Je, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: r(() => [
                    h(a(P.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(Y(P)), 1)
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => z(P.name)
                    }, {
                      default: r(() => [...L[10] || (L[10] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            W.value.length ? (s(), E(Ve, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(W.value, (P) => (s(), E(Je, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: r(() => [...L[11] || (L[11] = [
                    h("⚡", -1)
                  ])]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(Y(P)), 1)
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => z(P.name)
                    }, {
                      default: r(() => [...L[12] || (L[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            V.value.length ? (s(), E(Ve, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": g.value,
              onToggle: L[2] || (L[2] = (P) => g.value = P)
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(j.value, (P) => (s(), E(Je, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: r(() => [
                    h(a(P.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(Y(P)), 1)
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => z(P.name)
                    }, {
                      default: r(() => [...L[13] || (L[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && V.value.length > 5 ? (s(), E(se, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (P) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: r(() => [
                    h(" View all " + a(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            D.value.length ? d("", !0) : (s(), E(pt, {
              key: 4,
              icon: "📭",
              message: c.value ? `No workflows match '${c.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && _.value ? (s(), E(zi, {
        key: 0,
        "workflow-name": _.value,
        onClose: L[3] || (L[3] = (P) => y.value = !1),
        onResolve: L[4] || (L[4] = (P) => B(_.value)),
        onRefresh: L[5] || (L[5] = (P) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && _.value ? (s(), E(mm, {
        key: 1,
        "workflow-name": _.value,
        onClose: Z,
        onInstall: re,
        onRefresh: L[6] || (L[6] = (P) => i("refresh")),
        onRestart: X
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Um = /* @__PURE__ */ ne(Nm, [["__scopeId", "data-v-fa3f076e"]]), Bm = /* @__PURE__ */ oe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: ue(["summary-bar", t.variant])
    }, [
      Me(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ ne(Bm, [["__scopeId", "data-v-ccb7816e"]]), Om = {
  key: 0,
  class: "model-details"
}, Am = { class: "detail-section" }, Fm = { class: "detail-row" }, Vm = { class: "detail-value mono" }, Wm = { class: "detail-row" }, Gm = { class: "detail-value mono" }, jm = { class: "detail-row" }, Hm = { class: "detail-value mono" }, Km = { class: "detail-row" }, qm = { class: "detail-value" }, Ym = { class: "detail-row" }, Xm = { class: "detail-value" }, Qm = { class: "detail-row" }, Zm = { class: "detail-value" }, Jm = { class: "detail-section" }, ev = { class: "section-header" }, tv = {
  key: 0,
  class: "locations-list"
}, sv = { class: "location-path mono" }, ov = {
  key: 0,
  class: "location-modified"
}, nv = ["onClick"], av = {
  key: 1,
  class: "empty-state"
}, lv = { class: "detail-section" }, iv = { class: "section-header" }, rv = {
  key: 0,
  class: "sources-list"
}, dv = { class: "source-type" }, cv = ["href"], uv = ["disabled", "onClick"], mv = {
  key: 1,
  class: "empty-state"
}, vv = { class: "add-source-form" }, fv = ["disabled"], gv = {
  key: 2,
  class: "source-error"
}, pv = {
  key: 3,
  class: "source-success"
}, hv = /* @__PURE__ */ oe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = t, { getModelDetails: i, addModelSource: m, removeModelSource: v, openFileLocation: u } = qe(), f = k(null), c = k(!0), g = k(null), p = k(""), y = k(!1), b = k(null), _ = k(null), T = k(null), x = k(null);
    let $ = null;
    function C(M, z = "success", B = 2e3) {
      $ && clearTimeout($), x.value = { message: M, type: z }, $ = setTimeout(() => {
        x.value = null;
      }, B);
    }
    function D(M) {
      if (!M) return "Unknown";
      const z = 1024 * 1024 * 1024, B = 1024 * 1024;
      return M >= z ? `${(M / z).toFixed(1)} GB` : M >= B ? `${(M / B).toFixed(0)} MB` : `${(M / 1024).toFixed(0)} KB`;
    }
    function S(M) {
      navigator.clipboard.writeText(M), C("Copied to clipboard!");
    }
    async function R(M) {
      try {
        await u(M), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!p.value.trim() || !f.value)) {
        y.value = !0, _.value = null, T.value = null;
        try {
          await m(f.value.hash, p.value.trim()), T.value = "Source added successfully!", p.value = "", await j();
        } catch (M) {
          _.value = M instanceof Error ? M.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function V(M) {
      if (f.value) {
        b.value = M, _.value = null, T.value = null;
        try {
          await v(f.value.hash, M), C("Source removed"), await j();
        } catch (z) {
          _.value = z instanceof Error ? z.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function j() {
      c.value = !0, g.value = null;
      try {
        f.value = await i(n.identifier);
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to load model details";
      } finally {
        c.value = !1;
      }
    }
    return He(j), (M, z) => {
      var B;
      return s(), o(F, null, [
        w(st, {
          title: `Model Details: ${((B = f.value) == null ? void 0 : B.filename) || "Loading..."}`,
          size: "lg",
          loading: c.value,
          error: g.value,
          onClose: z[5] || (z[5] = (re) => M.$emit("close"))
        }, {
          body: r(() => {
            var re, Z, X, de;
            return [
              f.value ? (s(), o("div", Om, [
                e("section", Am, [
                  e("div", Fm, [
                    z[6] || (z[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Vm, a(f.value.hash || "Not computed"), 1),
                    f.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[0] || (z[0] = (Y) => S(f.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Wm, [
                    z[7] || (z[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Gm, a(f.value.blake3 || "Not computed"), 1),
                    f.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[1] || (z[1] = (Y) => S(f.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", jm, [
                    z[8] || (z[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Hm, a(f.value.sha256 || "Not computed"), 1),
                    f.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[2] || (z[2] = (Y) => S(f.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Km, [
                    z[9] || (z[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", qm, a(D(f.value.size)), 1)
                  ]),
                  e("div", Ym, [
                    z[10] || (z[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Xm, a(f.value.category), 1)
                  ]),
                  e("div", Qm, [
                    z[11] || (z[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Zm, a(f.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Jm, [
                  e("h4", ev, "Locations (" + a(((re = f.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Z = f.value.locations) != null && Z.length ? (s(), o("div", tv, [
                    (s(!0), o(F, null, ae(f.value.locations, (Y, N) => (s(), o("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      e("span", sv, a(Y.path), 1),
                      Y.modified ? (s(), o("span", ov, "Modified: " + a(Y.modified), 1)) : d("", !0),
                      Y.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => R(Y.path)
                      }, " Open File Location ", 8, nv)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", av, "No locations found"))
                ]),
                e("section", lv, [
                  e("h4", iv, "Download Sources (" + a(((X = f.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (de = f.value.sources) != null && de.length ? (s(), o("div", rv, [
                    (s(!0), o(F, null, ae(f.value.sources, (Y, N) => (s(), o("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      e("span", dv, a(Y.type) + ":", 1),
                      e("a", {
                        href: Y.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Y.url), 9, cv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === Y.url,
                        onClick: (L) => V(Y.url)
                      }, a(b.value === Y.url ? "..." : "×"), 9, uv)
                    ]))), 128))
                  ])) : (s(), o("div", mv, " No download sources configured ")),
                  e("div", vv, [
                    Oe(e("input", {
                      "onUpdate:modelValue": z[3] || (z[3] = (Y) => p.value = Y),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Lt, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || y.value,
                      onClick: W
                    }, a(y.value ? "Adding..." : "Add Source"), 9, fv)
                  ]),
                  _.value ? (s(), o("p", gv, a(_.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", pv, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: r(() => [
            e("button", {
              class: "btn-secondary",
              onClick: z[4] || (z[4] = (re) => M.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Qe, { to: "body" }, [
          x.value ? (s(), o("div", {
            key: 0,
            class: ue(["toast", x.value.type])
          }, a(x.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), Ds = /* @__PURE__ */ ne(hv, [["__scopeId", "data-v-f15cbb56"]]), yv = /* @__PURE__ */ oe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: l }) {
    const n = l, { getEnvironmentModels: i, getStatus: m } = qe(), v = k([]), u = k([]), f = k("production"), c = k(!1), g = k(null), p = k(""), y = k(!1), b = k(null);
    function _() {
      y.value = !1, n("navigate", "model-index");
    }
    const T = U(
      () => v.value.reduce((j, M) => j + (M.size || 0), 0)
    ), x = U(() => {
      if (!p.value.trim()) return v.value;
      const j = p.value.toLowerCase();
      return v.value.filter((M) => M.filename.toLowerCase().includes(j));
    }), $ = U(() => {
      if (!p.value.trim()) return u.value;
      const j = p.value.toLowerCase();
      return u.value.filter((M) => M.filename.toLowerCase().includes(j));
    }), C = U(() => {
      const j = {};
      for (const z of x.value) {
        const B = z.type || "other";
        j[B] || (j[B] = []), j[B].push(z);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([z], [B]) => {
        const re = M.indexOf(z), Z = M.indexOf(B);
        return re >= 0 && Z >= 0 ? re - Z : re >= 0 ? -1 : Z >= 0 ? 1 : z.localeCompare(B);
      }).map(([z, B]) => ({ type: z, models: B }));
    });
    function D(j) {
      if (!j) return "Unknown";
      const M = j / (1024 * 1024);
      return M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB`;
    }
    function S(j) {
      b.value = j.hash || j.filename;
    }
    function R(j) {
      n("navigate", "model-index");
    }
    function W(j) {
      alert(`Download functionality not yet implemented for ${j}`);
    }
    async function V() {
      c.value = !0, g.value = null;
      try {
        const j = await i();
        v.value = j, u.value = [];
        const M = await m();
        f.value = M.environment || "production";
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to load models";
      } finally {
        c.value = !1;
      }
    }
    return He(V), (j, M) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (z) => y.value = !0)
          })
        ]),
        search: r(() => [
          w(Wt, {
            modelValue: p.value,
            "onUpdate:modelValue": M[1] || (M[1] = (z) => p.value = z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          c.value ? (s(), E(Et, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (s(), E(Mt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            v.value.length ? (s(), E(ss, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                h(" Total: " + a(v.value.length) + " models • " + a(D(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ae(C.value, (z) => (s(), E(Ve, {
              key: z.type,
              title: z.type.toUpperCase(),
              count: z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(z.models, (B) => (s(), E(Je, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...M[4] || (M[4] = [
                    h("📦", -1)
                  ])]),
                  title: r(() => [
                    h(a(B.filename), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(D(B.size)), 1)
                  ]),
                  details: r(() => [
                    w(We, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(We, {
                      label: "Path:",
                      value: B.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => S(B)
                    }, {
                      default: r(() => [...M[5] || (M[5] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (s(), E(Ve, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae($.value, (z) => (s(), E(Je, {
                  key: z.filename,
                  status: "broken"
                }, {
                  icon: r(() => [...M[6] || (M[6] = [
                    h("⚠", -1)
                  ])]),
                  title: r(() => [
                    h(a(z.filename), 1)
                  ]),
                  subtitle: r(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: r(() => {
                    var B;
                    return [
                      w(We, {
                        label: "Required by:",
                        value: ((B = z.workflow_names) == null ? void 0 : B.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: r(() => [
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => W(z.filename)
                    }, {
                      default: r(() => [...M[8] || (M[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => R(z.filename)
                    }, {
                      default: r(() => [...M[9] || (M[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !x.value.length && !$.value.length ? (s(), E(pt, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(ht, {
        show: y.value,
        title: "About Environment Models",
        onClose: M[2] || (M[2] = (z) => y.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            M[10] || (M[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(f.value) + '"', 1),
            M[11] || (M[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: r(() => [
          w(se, {
            variant: "primary",
            onClick: _
          }, {
            default: r(() => [...M[12] || (M[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(Ds, {
        key: 0,
        identifier: b.value,
        onClose: M[3] || (M[3] = (z) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), wv = /* @__PURE__ */ ne(yv, [["__scopeId", "data-v-cb4f12b3"]]), kv = {
  key: 0,
  class: "indexing-progress"
}, _v = { class: "progress-info" }, bv = { class: "progress-label" }, $v = { class: "progress-count" }, Cv = { class: "progress-bar" }, xv = { class: "modal-content" }, Sv = { class: "modal-header" }, Iv = { class: "modal-body" }, Ev = { class: "input-group" }, Mv = { class: "current-path" }, Pv = { class: "input-group" }, Tv = { class: "modal-footer" }, Rv = { class: "modal-content" }, zv = { class: "modal-header" }, Lv = { class: "modal-body" }, Dv = { class: "input-group" }, Nv = { class: "input-group" }, Uv = { class: "modal-footer" }, Bv = /* @__PURE__ */ oe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: l }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: m,
      setModelsDirectory: v
    } = qe(), { addToQueue: u } = ts(), f = l, c = k([]), g = k(!1), p = k(!1), y = k(null), b = k(""), _ = k(!1), T = k(null), x = k(!1), $ = k(null), C = k(""), D = k(!1), S = k(!1), R = k(""), W = k(""), V = k(null), j = U(
      () => c.value.reduce((L, P) => L + (P.size || 0), 0)
    ), M = U(() => {
      if (!b.value.trim()) return c.value;
      const L = b.value.toLowerCase();
      return c.value.filter((P) => {
        const ie = P, ee = P.sha256 || ie.sha256_hash || "";
        return P.filename.toLowerCase().includes(L) || ee.toLowerCase().includes(L);
      });
    }), z = U(() => {
      const L = {};
      for (const ie of M.value) {
        const ee = ie.type || "other";
        L[ee] || (L[ee] = []), L[ee].push(ie);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ie], [ee]) => {
        const Ce = P.indexOf(ie), Ie = P.indexOf(ee);
        return Ce >= 0 && Ie >= 0 ? Ce - Ie : Ce >= 0 ? -1 : Ie >= 0 ? 1 : ie.localeCompare(ee);
      }).map(([ie, ee]) => ({ type: ie, models: ee }));
    });
    function B(L) {
      if (!L) return "Unknown";
      const P = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return L >= P ? `${(L / P).toFixed(1)} GB` : L >= ie ? `${(L / ie).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function re(L) {
      T.value = L.hash || L.filename;
    }
    async function Z() {
      p.value = !0, y.value = null;
      try {
        const L = await i();
        await Y(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        y.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        D.value = !0, y.value = null;
        try {
          const L = await v(C.value.trim());
          $.value = L.path, x.value = !1, C.value = "", await Y(), console.log(`Directory changed: ${L.models_indexed} models indexed`), f("refresh");
        } catch (L) {
          y.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function de() {
      if (!R.value.trim() || !W.value.trim()) return;
      const L = W.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: L,
        url: R.value.trim(),
        targetPath: W.value.trim()
      }]), R.value = "", W.value = "", S.value = !1;
    }
    async function Y() {
      g.value = !0, y.value = null;
      try {
        c.value = await n();
      } catch (L) {
        y.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        g.value = !1;
      }
    }
    async function N() {
      try {
        const L = await m();
        $.value = L.path;
      } catch {
      }
    }
    return He(() => {
      Y(), N();
    }), (L, P) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: P[2] || (P[2] = (ie) => _.value = !0)
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: Z
              }, {
                default: r(() => [
                  h(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: P[0] || (P[0] = (ie) => x.value = !0)
              }, {
                default: r(() => [...P[15] || (P[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: P[1] || (P[1] = (ie) => S.value = !0)
              }, {
                default: r(() => [...P[16] || (P[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  h(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          V.value ? (s(), o("div", kv, [
            e("div", _v, [
              e("span", bv, a(V.value.message), 1),
              e("span", $v, a(V.value.current) + "/" + a(V.value.total), 1)
            ]),
            e("div", Cv, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          w(Wt, {
            modelValue: b.value,
            "onUpdate:modelValue": P[3] || (P[3] = (ie) => b.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          g.value || V.value ? (s(), E(Et, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : y.value ? (s(), E(Mt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            c.value.length ? (s(), E(ss, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                h(" Total: " + a(c.value.length) + " models • " + a(B(j.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ae(z.value, (ie) => (s(), E(Ve, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(ie.models, (ee) => (s(), E(Je, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...P[17] || (P[17] = [
                    h("📦", -1)
                  ])]),
                  title: r(() => [
                    h(a(ee.filename), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(B(ee.size)), 1)
                  ]),
                  details: r(() => [
                    w(We, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ce) => re(ee)
                    }, {
                      default: r(() => [...P[18] || (P[18] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            M.value.length ? d("", !0) : (s(), E(pt, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(ht, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: P[4] || (P[4] = (ie) => _.value = !1)
      }, {
        content: r(() => [...P[19] || (P[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), E(Ds, {
        key: 0,
        identifier: T.value,
        onClose: P[5] || (P[5] = (ie) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Qe, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[9] || (P[9] = Ge((ie) => x.value = !1, ["self"]))
        }, [
          e("div", xv, [
            e("div", Sv, [
              P[20] || (P[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: P[6] || (P[6] = (ie) => x.value = !1)
              }, "✕")
            ]),
            e("div", Iv, [
              e("div", Ev, [
                P[21] || (P[21] = e("label", null, "Current Directory", -1)),
                e("code", Mv, a($.value || "Not set"), 1)
              ]),
              e("div", Pv, [
                P[22] || (P[22] = e("label", null, "New Directory Path", -1)),
                w(gt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": P[7] || (P[7] = (ie) => C.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              P[23] || (P[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Tv, [
              w(pe, {
                variant: "secondary",
                onClick: P[8] || (P[8] = (ie) => x.value = !1)
              }, {
                default: r(() => [...P[24] || (P[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(pe, {
                variant: "primary",
                disabled: !C.value.trim() || D.value,
                loading: D.value,
                onClick: X
              }, {
                default: r(() => [
                  h(a(D.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Qe, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[14] || (P[14] = Ge((ie) => S.value = !1, ["self"]))
        }, [
          e("div", Rv, [
            e("div", zv, [
              P[25] || (P[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: P[10] || (P[10] = (ie) => S.value = !1)
              }, "✕")
            ]),
            e("div", Lv, [
              e("div", Dv, [
                P[26] || (P[26] = e("label", null, "Download URL", -1)),
                w(gt, {
                  modelValue: R.value,
                  "onUpdate:modelValue": P[11] || (P[11] = (ie) => R.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Nv, [
                P[27] || (P[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(gt, {
                  modelValue: W.value,
                  "onUpdate:modelValue": P[12] || (P[12] = (ie) => W.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              P[28] || (P[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Uv, [
              w(pe, {
                variant: "secondary",
                onClick: P[13] || (P[13] = (ie) => S.value = !1)
              }, {
                default: r(() => [...P[29] || (P[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(pe, {
                variant: "primary",
                disabled: !R.value.trim() || !W.value.trim(),
                onClick: de
              }, {
                default: r(() => [...P[30] || (P[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), Ov = /* @__PURE__ */ ne(Bv, [["__scopeId", "data-v-73b78d84"]]), Av = { class: "node-details" }, Fv = { class: "status-row" }, Vv = {
  key: 0,
  class: "detail-row"
}, Wv = { class: "value" }, Gv = { class: "detail-row" }, jv = { class: "value" }, Hv = {
  key: 1,
  class: "detail-row"
}, Kv = { class: "value mono" }, qv = {
  key: 2,
  class: "detail-row"
}, Yv = ["href"], Xv = {
  key: 3,
  class: "detail-row"
}, Qv = { class: "value mono small" }, Zv = { class: "detail-row" }, Jv = {
  key: 0,
  class: "value"
}, ef = {
  key: 1,
  class: "workflow-list"
}, tf = /* @__PURE__ */ oe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (f, c) => (s(), E(st, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: c[1] || (c[1] = (g) => i("close"))
    }, {
      body: r(() => [
        e("div", Av, [
          e("div", Fv, [
            c[2] || (c[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ue(["status-badge", m.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Vv, [
            c[3] || (c[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Wv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", Gv, [
            c[4] || (c[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", jv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Hv, [
            c[5] || (c[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Kv, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", qv, [
            c[7] || (c[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(a(t.node.repository) + " ", 1),
              c[6] || (c[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Yv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", Xv, [
            c[8] || (c[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Qv, a(t.node.download_url), 1)
          ])) : d("", !0),
          c[10] || (c[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Zv, [
            c[9] || (c[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Jv, " Not used in any workflows ")) : (s(), o("div", ef, [
              (s(!0), o(F, null, ae(t.node.used_in_workflows, (g) => (s(), o("span", {
                key: g,
                class: "workflow-tag"
              }, a(g), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: r(() => [
        w(pe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (g) => i("close"))
        }, {
          default: r(() => [...c[11] || (c[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), sf = /* @__PURE__ */ ne(tf, [["__scopeId", "data-v-b342f626"]]), of = { class: "dialog-message" }, nf = {
  key: 0,
  class: "dialog-details"
}, af = {
  key: 1,
  class: "dialog-warning"
}, lf = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), E(st, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => l.$emit("cancel"))
    }, {
      body: r(() => [
        e("p", of, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", nf, [
          (s(!0), o(F, null, ae(t.details, (i, m) => (s(), o("div", {
            key: m,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", af, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: r(() => [
        w(pe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => l.$emit("cancel"))
        }, {
          default: r(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(pe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => l.$emit("secondary"))
        }, {
          default: r(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        w(pe, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
        }, {
          default: r(() => [
            h(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), co = /* @__PURE__ */ ne(lf, [["__scopeId", "data-v-3670b9f5"]]), rf = { class: "mismatch-warning" }, df = { class: "version-mismatch" }, cf = { class: "version-actual" }, uf = { class: "version-expected" }, mf = { key: 0 }, vf = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, ff = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, gf = /* @__PURE__ */ oe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: l }) {
    const n = t, i = l, { getNodes: m, trackNodeAsDev: v, installNode: u, uninstallNode: f } = qe(), c = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), g = k(!1), p = k(null), y = k(""), b = k(!1), _ = k(null), T = k(null), x = U(() => {
      if (!y.value.trim()) return c.value.nodes;
      const Z = y.value.toLowerCase();
      return c.value.nodes.filter(
        (X) => {
          var de, Y;
          return X.name.toLowerCase().includes(Z) || ((de = X.description) == null ? void 0 : de.toLowerCase().includes(Z)) || ((Y = X.repository) == null ? void 0 : Y.toLowerCase().includes(Z));
        }
      );
    }), $ = U(
      () => x.value.filter((Z) => Z.installed && Z.tracked)
    ), C = U(
      () => x.value.filter((Z) => !Z.installed && Z.tracked)
    ), D = U(
      () => x.value.filter((Z) => Z.installed && !Z.tracked)
    );
    function S(Z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Z] || Z;
    }
    const R = U(() => n.versionMismatches.length > 0);
    function W(Z) {
      return !Z.used_in_workflows || Z.used_in_workflows.length === 0 ? "Not used in any workflows" : Z.used_in_workflows.length === 1 ? Z.used_in_workflows[0] : `${Z.used_in_workflows.length} workflows`;
    }
    function V(Z) {
      _.value = Z;
    }
    function j() {
      i("open-node-manager");
    }
    function M(Z) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${Z}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const X = await v(Z);
            X.status === "success" ? (i("toast", `✓ Node "${Z}" tracked as development`, "success"), await re()) : i("toast", `Failed to track node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error tracking node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function z(Z) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Z}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const X = await f(Z);
            X.status === "success" ? (i("toast", `✓ Node "${Z}" removed`, "success"), await re()) : i("toast", `Failed to remove node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error removing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function B(Z) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${Z}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const X = await u(Z);
            X.status === "success" ? (i("toast", `✓ Node "${Z}" installed`, "success"), await re()) : i("toast", `Failed to install node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error installing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    async function re() {
      g.value = !0, p.value = null;
      try {
        c.value = await m();
      } catch (Z) {
        p.value = Z instanceof Error ? Z.message : "Failed to load nodes";
      } finally {
        g.value = !1;
      }
    }
    return He(re), (Z, X) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (de) => b.value = !0)
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: r(() => [...X[7] || (X[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          w(Wt, {
            modelValue: y.value,
            "onUpdate:modelValue": X[1] || (X[1] = (de) => y.value = de),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          g.value ? (s(), E(Et, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (s(), E(Mt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            c.value.total_count ? (s(), E(ss, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                h(a(c.value.installed_count) + " installed ", 1),
                c.value.missing_count ? (s(), o(F, { key: 0 }, [
                  h(" • " + a(c.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                c.value.untracked_count ? (s(), o(F, { key: 1 }, [
                  h(" • " + a(c.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            R.value ? (s(), E(Ve, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                e("div", rf, [
                  X[8] || (X[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(F, null, ae(t.versionMismatches, (de) => (s(), E(Je, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: r(() => [...X[9] || (X[9] = [
                    h("⚠", -1)
                  ])]),
                  title: r(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: r(() => [
                    e("span", df, [
                      e("span", cf, a(de.actual), 1),
                      X[10] || (X[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", uf, a(de.expected), 1)
                    ])
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "warning",
                      size: "sm",
                      onClick: X[2] || (X[2] = (Y) => i("repair-environment"))
                    }, {
                      default: r(() => [...X[11] || (X[11] = [
                        h(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            D.value.length ? (s(), E(Ve, {
              key: 2,
              title: "UNTRACKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(D.value, (de) => (s(), E(Je, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: r(() => [...X[12] || (X[12] = [
                    h("?", -1)
                  ])]),
                  title: r(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: r(() => [...X[13] || (X[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: r(() => [
                    w(We, {
                      label: "Used by:",
                      value: W(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => V(de)
                    }, {
                      default: r(() => [...X[14] || (X[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => M(de.name)
                    }, {
                      default: r(() => [...X[15] || (X[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => z(de.name)
                    }, {
                      default: r(() => [...X[16] || (X[16] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (s(), E(Ve, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae($.value, (de) => (s(), E(Je, {
                  key: de.name,
                  status: "synced"
                }, {
                  icon: r(() => [
                    h(a(de.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: r(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: r(() => [
                    de.version ? (s(), o("span", mf, a(de.source === "development" ? "" : "v") + a(de.version), 1)) : (s(), o("span", vf, "version unknown")),
                    e("span", ff, " • " + a(S(de.source)), 1)
                  ]),
                  details: r(() => [
                    w(We, {
                      label: "Used by:",
                      value: W(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => V(de)
                    }, {
                      default: r(() => [...X[17] || (X[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: r(() => [...X[18] || (X[18] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? (s(), E(Ve, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(C.value, (de) => (s(), E(Je, {
                  key: de.name,
                  status: "missing"
                }, {
                  icon: r(() => [...X[19] || (X[19] = [
                    h("!", -1)
                  ])]),
                  title: r(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: r(() => [...X[20] || (X[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: r(() => [
                    w(We, {
                      label: "Required by:",
                      value: W(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => V(de)
                    }, {
                      default: r(() => [...X[21] || (X[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => B(de.name)
                    }, {
                      default: r(() => [...X[22] || (X[22] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !$.value.length && !C.value.length && !D.value.length ? (s(), E(pt, {
              key: 5,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(ht, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: X[4] || (X[4] = (de) => b.value = !1)
      }, {
        content: r(() => [...X[23] || (X[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            h(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            h(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            h(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: r(() => [
          w(se, {
            variant: "primary",
            onClick: X[3] || (X[3] = (de) => b.value = !1)
          }, {
            default: r(() => [...X[24] || (X[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), E(sf, {
        key: 0,
        node: _.value,
        onClose: X[5] || (X[5] = (de) => _.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(co, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: X[6] || (X[6] = (de) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), pf = /* @__PURE__ */ ne(gf, [["__scopeId", "data-v-1555a802"]]);
function uo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const hf = { class: "remote-url-display" }, yf = ["title"], wf = ["title"], kf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _f = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bf = /* @__PURE__ */ oe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const l = t, n = k(!1), i = U(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const v = l.url.slice(0, Math.floor(l.maxLength * 0.6)), u = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${v}...${u}`;
    });
    async function m() {
      try {
        await navigator.clipboard.writeText(l.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, u) => (s(), o("div", hf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, yf),
      e("button", {
        class: ue(["copy-btn", { copied: n.value }]),
        onClick: m,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", _f, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", kf, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, wf)
    ]));
  }
}), $f = /* @__PURE__ */ ne(bf, [["__scopeId", "data-v-7768a58d"]]), Cf = { class: "remote-title" }, xf = {
  key: 0,
  class: "default-badge"
}, Sf = {
  key: 1,
  class: "sync-badge"
}, If = {
  key: 0,
  class: "ahead"
}, Ef = {
  key: 1,
  class: "behind"
}, Mf = {
  key: 1,
  class: "synced"
}, Pf = ["href"], Tf = {
  key: 1,
  class: "remote-url-text"
}, Rf = /* @__PURE__ */ oe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const l = t, n = U(() => l.fetchingRemote === l.remote.name), i = U(() => l.remote.is_default), m = U(() => l.syncStatus && l.syncStatus.behind > 0), v = U(() => l.syncStatus && l.syncStatus.ahead > 0), u = U(() => l.remote.push_url !== l.remote.fetch_url), f = U(() => {
      const g = l.remote.fetch_url, p = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), c = U(() => l.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, p) => (s(), E(Je, {
      status: i.value ? "synced" : void 0
    }, Dt({
      icon: r(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: r(() => [
        e("div", Cf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", xf, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Sf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", If, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Ef, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Mf, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: r(() => [
        f.value ? (s(), o("a", {
          key: 0,
          href: f.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = Ge(() => {
          }, ["stop"]))
        }, a(c.value), 9, Pf)) : (s(), o("span", Tf, a(c.value), 1))
      ]),
      actions: r(() => [
        w(se, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (y) => g.$emit("fetch", t.remote.name))
        }, {
          default: r(() => [...p[6] || (p[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(se, {
          variant: m.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (y) => g.$emit("pull", t.remote.name))
        }, {
          default: r(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(se, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (y) => g.$emit("push", t.remote.name))
        }, {
          default: r(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(se, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (y) => g.$emit("edit", t.remote.name))
        }, {
          default: r(() => [...p[7] || (p[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(se, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (y) => g.$emit("remove", t.remote.name))
        }, {
          default: r(() => [...p[8] || (p[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: r(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(We, {
            key: 0,
            label: "Push URL:"
          }, {
            default: r(() => [
              w($f, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), zf = /* @__PURE__ */ ne(Rf, [["__scopeId", "data-v-8310f3a8"]]), Lf = ["for"], Df = {
  key: 0,
  class: "base-form-field-required"
}, Nf = { class: "base-form-field-input" }, Uf = {
  key: 1,
  class: "base-form-field-error"
}, Bf = {
  key: 2,
  class: "base-form-field-hint"
}, Of = /* @__PURE__ */ oe({
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
    const l = t, n = U(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, m) => (s(), o("div", {
      class: ue(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Df, "*")) : d("", !0)
      ], 8, Lf)) : d("", !0),
      e("div", Nf, [
        Me(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Uf, a(t.error), 1)) : t.hint ? (s(), o("span", Bf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), Ss = /* @__PURE__ */ ne(Of, [["__scopeId", "data-v-9a1cf296"]]), Af = { class: "remote-form" }, Ff = { class: "form-header" }, Vf = { class: "form-body" }, Wf = {
  key: 0,
  class: "form-error"
}, Gf = { class: "form-actions" }, jf = /* @__PURE__ */ oe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = k({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = k(!1), u = k(null);
    St(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      m.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const f = U(() => m.value.name.trim() !== "" && m.value.fetchUrl.trim() !== "");
    async function c() {
      if (!(!f.value || v.value)) {
        u.value = null, v.value = !0;
        try {
          i("submit", m.value);
        } catch (g) {
          u.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (g, p) => (s(), o("div", Af, [
      e("div", Ff, [
        w(dt, null, {
          default: r(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Vf, [
        w(Ss, {
          label: "Remote Name",
          required: ""
        }, {
          default: r(() => [
            w(gt, {
              modelValue: m.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (y) => m.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(Ss, {
          label: "Fetch URL",
          required: ""
        }, {
          default: r(() => [
            w(gt, {
              modelValue: m.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (y) => m.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(Ss, { label: "Push URL (optional)" }, {
          default: r(() => [
            w(gt, {
              modelValue: m.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (y) => m.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", Wf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", Gf, [
        w(se, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: v.value,
          onClick: c
        }, {
          default: r(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(se, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (y) => g.$emit("cancel"))
        }, {
          default: r(() => [...p[4] || (p[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Hf = /* @__PURE__ */ ne(jf, [["__scopeId", "data-v-56021b18"]]), Kf = { class: "conflict-summary-box" }, qf = { class: "summary-header" }, Yf = { class: "summary-text" }, Xf = { key: 0 }, Qf = {
  key: 1,
  class: "all-resolved"
}, Zf = { class: "summary-progress" }, Jf = { class: "progress-bar" }, eg = { class: "progress-text" }, tg = /* @__PURE__ */ oe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const l = t, n = U(
      () => l.conflictCount > 0 ? l.resolvedCount / l.conflictCount * 100 : 0
    );
    return (i, m) => (s(), o("div", Kf, [
      e("div", qf, [
        m[0] || (m[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Yf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Xf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Qf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Zf, [
        e("div", Jf, [
          e("div", {
            class: "progress-fill",
            style: It({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", eg, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), sg = /* @__PURE__ */ ne(tg, [["__scopeId", "data-v-4e9e6cc9"]]), og = { class: "modal-header" }, ng = { class: "modal-title" }, ag = { class: "modal-body" }, lg = {
  key: 0,
  class: "error-box"
}, ig = {
  key: 0,
  class: "error-hint"
}, rg = {
  key: 1,
  class: "loading-state"
}, dg = { class: "commit-summary" }, cg = {
  key: 0,
  class: "changes-section"
}, ug = {
  key: 0,
  class: "change-group",
  open: ""
}, mg = { class: "change-count" }, vg = { class: "change-list" }, fg = {
  key: 0,
  class: "conflict-badge"
}, gg = {
  key: 1,
  class: "change-group"
}, pg = { class: "change-count" }, hg = { class: "change-list" }, yg = {
  key: 2,
  class: "change-group"
}, wg = { class: "change-count" }, kg = { class: "change-list" }, _g = {
  key: 2,
  class: "strategy-section"
}, bg = { class: "radio-group" }, $g = { class: "radio-option" }, Cg = { class: "radio-option" }, xg = { class: "radio-option" }, Sg = {
  key: 3,
  class: "up-to-date"
}, Ig = { class: "modal-actions" }, Ys = "comfygit.pullModelStrategy", Eg = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l, m = k(localStorage.getItem(Ys) || "skip");
    St(m, ($) => {
      localStorage.setItem(Ys, $);
    });
    const v = U(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), f = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), c = U(() => {
      var $;
      return u.value > 0 || f.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), g = U(() => n.preview && uo(n.preview) ? n.preview : null), p = U(() => {
      var $;
      return (($ = g.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), y = U(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), b = U(
      () => p.value > 0 && y.value === p.value
    ), _ = U(() => !(!n.preview || n.preview.has_uncommitted_changes || g.value && !b.value));
    function T($) {
      if (!g.value) return !1;
      const C = $.replace(/\.json$/, "");
      return g.value.workflow_conflicts.some((D) => D.name === C);
    }
    function x($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: m.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var D, S;
      return s(), E(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (R) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Ge(() => {
            }, ["stop"]))
          }, [
            e("div", og, [
              e("h3", ng, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (R) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", ag, [
              t.error ? (s(), o("div", lg, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (s(), o("p", ig, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", rg, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (D = t.preview) != null && D.has_uncommitted_changes ? (s(), o(F, { key: 2 }, [
                C[15] || (C[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", dg, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                c.value ? (s(), o("div", cg, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", ug, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", mg, a(u.value) + " changes", 1)
                    ]),
                    e("div", vg, [
                      (s(!0), o(F, null, ae(t.preview.changes.workflows.added, (R) => (s(), o("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (s(!0), o(F, null, ae(t.preview.changes.workflows.modified, (R) => (s(), o("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(R) + " ", 1),
                        T(R) ? (s(), o("span", fg, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(F, null, ae(t.preview.changes.workflows.deleted, (R) => (s(), o("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : d("", !0),
                  f.value > 0 ? (s(), o("details", gg, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", pg, a(f.value) + " to install", 1)
                    ]),
                    e("div", hg, [
                      (s(!0), o(F, null, ae(t.preview.changes.nodes.to_install, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", yg, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", wg, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", kg, [
                      (s(!0), o(F, null, ae(t.preview.changes.models.referenced, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                g.value ? (s(), E(sg, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": y.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", _g, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", bg, [
                    e("label", $g, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (R) => m.value = R),
                        value: "all"
                      }, null, 512), [
                        [Ft, m.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Cg, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (R) => m.value = R),
                        value: "required"
                      }, null, 512), [
                        [Ft, m.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", xg, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (R) => m.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Ft, m.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Sg, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Ig, [
              w(se, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (R) => $.$emit("close"))
              }, {
                default: r(() => [...C[29] || (C[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(F, { key: 0 }, [
                w(se, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (R) => x(!1))
                }, {
                  default: r(() => [...C[30] || (C[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(se, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (R) => x(!0))
                }, {
                  default: r(() => [...C[31] || (C[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (R) => x(!0))
              }, {
                default: r(() => [...C[32] || (C[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(F, { key: 2 }, [
                g.value && !b.value ? (s(), E(se, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (R) => i("openConflictResolution"))
                }, {
                  default: r(() => [
                    h(" Resolve Conflicts (" + a(y.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(se, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: C[9] || (C[9] = (R) => x(!1))
                }, {
                  default: r(() => [...C[33] || (C[33] = [
                    h(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Mg = /* @__PURE__ */ ne(Eg, [["__scopeId", "data-v-300c7b2f"]]), Pg = { class: "modal-header" }, Tg = { class: "modal-title" }, Rg = { class: "modal-body" }, zg = {
  key: 0,
  class: "loading-state"
}, Lg = {
  key: 1,
  class: "warning-box"
}, Dg = {
  key: 0,
  class: "commits-section"
}, Ng = { class: "commit-list" }, Ug = { class: "commit-hash" }, Bg = { class: "commit-message" }, Og = { class: "commit-date" }, Ag = { class: "force-option" }, Fg = { class: "checkbox-option" }, Vg = { class: "commit-summary" }, Wg = {
  key: 0,
  class: "commits-section"
}, Gg = { class: "commit-list" }, jg = { class: "commit-hash" }, Hg = { class: "commit-message" }, Kg = { class: "commit-date" }, qg = {
  key: 1,
  class: "up-to-date"
}, Yg = { class: "modal-actions" }, Xg = /* @__PURE__ */ oe({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: l }) {
    const n = l, i = k(!1);
    function m(v) {
      n("push", { force: v });
    }
    return (v, u) => {
      var f, c, g;
      return s(), E(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (p) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Ge(() => {
            }, ["stop"]))
          }, [
            e("div", Pg, [
              e("h3", Tg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (p) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", Rg, [
              t.loading ? (s(), o("div", zg, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (f = t.preview) != null && f.has_uncommitted_changes ? (s(), o("div", Lg, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (c = t.preview) != null && c.remote_has_new_commits ? (s(), o(F, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Dg, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Ng, [
                    (s(!0), o(F, null, ae(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Ug, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Bg, a(p.message), 1),
                      e("span", Og, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Ag, [
                  e("label", Fg, [
                    Oe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (p) => i.value = p)
                    }, null, 512), [
                      [us, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", Vg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Wg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Gg, [
                    (s(!0), o(F, null, ae(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", jg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Hg, a(p.message), 1),
                      e("span", Kg, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", qg, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Yg, [
              w(se, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (p) => v.$emit("close"))
              }, {
                default: r(() => [...u[17] || (u[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (g = t.preview) != null && g.remote_has_new_commits ? (s(), o(F, { key: 0 }, [
                w(se, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (p) => v.$emit("pull-first"))
                }, {
                  default: r(() => [...u[18] || (u[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(se, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (p) => m(!0))
                }, {
                  default: r(() => [...u[19] || (u[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (p) => m(!1))
              }, {
                default: r(() => [...u[20] || (u[20] = [
                  h(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Qg = /* @__PURE__ */ ne(Xg, [["__scopeId", "data-v-bc6ded53"]]), Zg = { class: "resolution-choice-group" }, Jg = ["disabled"], ep = ["disabled"], tp = /* @__PURE__ */ oe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("div", Zg, [
      e("button", {
        class: ue(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => l.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Jg),
      e("button", {
        class: ue(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => l.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, ep)
    ]));
  }
}), sp = /* @__PURE__ */ ne(tp, [["__scopeId", "data-v-985715ed"]]), op = { class: "conflict-header" }, np = { class: "conflict-info" }, ap = { class: "workflow-name" }, lp = { class: "conflict-description" }, ip = {
  key: 0,
  class: "resolved-badge"
}, rp = { class: "resolved-text" }, dp = { class: "conflict-hashes" }, cp = { class: "hash-item" }, up = { class: "hash-item" }, mp = { class: "conflict-actions" }, vp = /* @__PURE__ */ oe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = k(n.resolution);
    St(() => n.resolution, (c) => {
      m.value = c;
    }), St(m, (c) => {
      c && i("resolve", c);
    });
    const v = U(() => m.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), f = U(() => {
      switch (m.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (c, g) => {
      var p, y;
      return s(), o("div", {
        class: ue(["conflict-item", { resolved: v.value }])
      }, [
        e("div", op, [
          g[2] || (g[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", np, [
            e("code", ap, a(t.conflict.name) + ".json", 1),
            e("div", lp, a(u.value), 1)
          ]),
          v.value ? (s(), o("div", ip, [
            g[1] || (g[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", rp, a(f.value), 1)
          ])) : d("", !0)
        ]),
        e("div", dp, [
          e("span", cp, [
            g[3] || (g[3] = h("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", up, [
            g[4] || (g[4] = h("Theirs: ", -1)),
            e("code", null, a(((y = t.conflict.target_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", mp, [
          w(sp, {
            modelValue: m.value,
            "onUpdate:modelValue": g[0] || (g[0] = (b) => m.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), fp = /* @__PURE__ */ ne(vp, [["__scopeId", "data-v-506d3bbf"]]), gp = { class: "resolution-content" }, pp = {
  key: 0,
  class: "error-box"
}, hp = { class: "resolution-header" }, yp = { class: "header-stats" }, wp = { class: "stat" }, kp = { class: "stat-value" }, _p = { class: "stat resolved" }, bp = { class: "stat-value" }, $p = {
  key: 0,
  class: "stat pending"
}, Cp = { class: "stat-value" }, xp = { class: "conflicts-list" }, Sp = {
  key: 1,
  class: "all-resolved-message"
}, Ip = /* @__PURE__ */ oe({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => n.resolutions.size), v = U(() => n.workflowConflicts.length - m.value), u = U(() => m.value === n.workflowConflicts.length), f = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function c(b) {
      const _ = n.resolutions.get(b);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function g(b, _) {
      i("resolve", b, _);
    }
    function p() {
      i("close");
    }
    function y() {
      i("apply");
    }
    return (b, _) => (s(), E(st, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: r(() => [
        e("div", gp, [
          t.error ? (s(), o("div", pp, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", hp, [
            e("div", yp, [
              e("div", wp, [
                e("span", kp, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", _p, [
                e("span", bp, a(m.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (s(), o("div", $p, [
                e("span", Cp, a(v.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", xp, [
            (s(!0), o(F, null, ae(t.workflowConflicts, (T) => (s(), E(fp, {
              key: T.name,
              conflict: T,
              resolution: c(T.name),
              onResolve: (x) => g(T.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", Sp, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(f.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: r(() => [
        w(pe, {
          variant: "secondary",
          onClick: p
        }, {
          default: r(() => [..._[7] || (_[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(pe, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: y
        }, {
          default: r(() => [
            h(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ep = /* @__PURE__ */ ne(Ip, [["__scopeId", "data-v-c58d150d"]]), Mp = { class: "node-conflict-item" }, Pp = { class: "node-header" }, Tp = { class: "node-name" }, Rp = { class: "node-id" }, zp = { class: "version-comparison" }, Lp = { class: "version yours" }, Dp = { class: "version theirs" }, Np = { class: "chosen-version" }, Up = { class: "chosen" }, Bp = { class: "chosen-reason" }, Op = { class: "affected-workflows" }, Ap = { class: "wf-source" }, Fp = { class: "wf-version" }, Vp = /* @__PURE__ */ oe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (l, n) => (s(), o("div", Mp, [
      e("div", Pp, [
        e("code", Tp, a(t.conflict.node_name), 1),
        e("span", Rp, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", zp, [
        e("div", Lp, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Dp, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Np, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Up, a(t.conflict.chosen_version), 1),
        e("span", Bp, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Op, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(F, null, ae(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Ap, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Fp, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Wp = /* @__PURE__ */ ne(Vp, [["__scopeId", "data-v-8b626725"]]), Gp = { class: "validation-content" }, jp = {
  key: 0,
  class: "compatible-message"
}, Hp = { class: "conflicts-list" }, Kp = {
  key: 2,
  class: "warnings-section"
}, qp = /* @__PURE__ */ oe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, u) => (s(), E(st, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (f) => i("cancel"))
    }, {
      body: r(() => [
        e("div", Gp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", jp, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(F, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Hp, [
              (s(!0), o(F, null, ae(t.validation.node_conflicts, (f) => (s(), E(Wp, {
                key: f.node_id,
                conflict: f
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Kp, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(F, null, ae(t.validation.warnings, (f, c) => (s(), o("li", { key: c }, a(f), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: r(() => [
        w(pe, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (f) => i("cancel"))
        }, {
          default: r(() => [...u[9] || (u[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(pe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (f) => i("goBack"))
        }, {
          default: r(() => [...u[10] || (u[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(pe, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (f) => i("proceed"))
        }, {
          default: r(() => [
            h(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Yp = /* @__PURE__ */ ne(qp, [["__scopeId", "data-v-fefd26ed"]]), Xp = { key: 0 }, Qp = /* @__PURE__ */ oe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: l }) {
    const n = l, {
      getRemotes: i,
      addRemote: m,
      removeRemote: v,
      updateRemoteUrl: u,
      fetchRemote: f,
      getRemoteSyncStatus: c,
      getPullPreview: g,
      pullFromRemote: p,
      getPushPreview: y,
      pushToRemote: b,
      validateMerge: _
    } = qe(), T = k([]), x = k(null), $ = k({}), C = k(!1), D = k(null), S = k(""), R = k(!1), W = k(null), V = k(!1), j = k("add"), M = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), z = U(() => {
      if (!S.value.trim()) return T.value;
      const A = S.value.toLowerCase();
      return T.value.filter(
        (te) => te.name.toLowerCase().includes(A) || te.fetch_url.toLowerCase().includes(A) || te.push_url.toLowerCase().includes(A)
      );
    });
    async function B() {
      C.value = !0, D.value = null;
      try {
        const A = await i();
        T.value = A.remotes, x.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (te) => {
            const $e = await c(te.name);
            $e && ($.value[te.name] = $e);
          })
        );
      } catch (A) {
        D.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function re() {
      j.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function Z(A) {
      const te = T.value.find(($e) => $e.name === A);
      te && (j.value = "edit", M.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, V.value = !0);
    }
    async function X(A) {
      try {
        j.value === "add" ? await m(A.name, A.fetchUrl) : await u(A.name, A.fetchUrl, A.pushUrl || void 0), V.value = !1, await B();
      } catch (te) {
        D.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function de() {
      V.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Y(A) {
      W.value = A;
      try {
        await f(A);
        const te = await c(A);
        te && ($.value[A] = te), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (te) {
        n("toast", te instanceof Error ? te.message : "Fetch failed", "error");
      } finally {
        W.value = null;
      }
    }
    async function N(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await v(A), await B();
        } catch (te) {
          D.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function L() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const P = k("idle"), ie = U(() => P.value === "pull_preview"), ee = U(
      () => P.value === "resolving" || P.value === "validating"
    ), Ce = U(
      () => P.value === "validation_review" || P.value === "executing"
    ), Ie = k(!1), ze = k(null), je = k(!1), ce = k(null), ye = k(!1), Pe = k(null), Q = k(null), le = k(/* @__PURE__ */ new Map()), we = k(null), Ae = k(null), ot = U(() => Pe.value && uo(Pe.value) ? Pe.value : null);
    async function it(A) {
      ce.value = A, P.value = "pull_preview", ye.value = !0, Pe.value = null, Q.value = null;
      try {
        Pe.value = await g(A);
      } catch (te) {
        Q.value = te instanceof Error ? te.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function Ee() {
      P.value = "idle", Pe.value = null, Q.value = null, ce.value = null;
    }
    async function fe(A) {
      if (!ce.value) return;
      P.value = "executing", Q.value = null;
      const te = ce.value;
      try {
        const $e = await p(te, A);
        if ($e.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${$e.error || "Unknown error"}`, P.value = "pull_preview";
          return;
        }
        Fe(), P.value = "idle", n("toast", `✓ Pulled from ${te}`, "success"), await B();
      } catch ($e) {
        Q.value = $e instanceof Error ? $e.message : "Pull failed", P.value = "pull_preview";
      }
    }
    function J() {
      ot.value && (P.value = "resolving", Ae.value = null);
    }
    function me(A, te) {
      le.value.set(A, { name: A, resolution: te });
    }
    function nt() {
      P.value = "pull_preview";
    }
    async function xe() {
      P.value = "validating", Ae.value = null;
      try {
        const A = Array.from(le.value.values());
        we.value = await _(ce.value, A), P.value = "validation_review";
      } catch (A) {
        Ae.value = A instanceof Error ? A.message : "Validation failed", P.value = "resolving";
      }
    }
    async function Xe() {
      P.value = "executing";
      const A = ce.value;
      try {
        const te = Array.from(le.value.values()), $e = await p(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: te
        });
        if ($e.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${$e.error || "Unknown error"}`, P.value = "pull_preview";
          return;
        }
        Fe(), P.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await B();
      } catch (te) {
        Q.value = te instanceof Error ? te.message : "Pull failed", P.value = "validation_review";
      }
    }
    function ct() {
      P.value = "resolving";
    }
    function ut() {
      Fe(), P.value = "idle";
    }
    function Fe() {
      le.value.clear(), we.value = null, Ae.value = null, Q.value = null, Pe.value = null, ce.value = null;
    }
    async function ve(A) {
      ce.value = A, Ie.value = !0, ye.value = !0, ze.value = null;
      try {
        ze.value = await y(A);
      } catch (te) {
        D.value = te instanceof Error ? te.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function K() {
      Ie.value = !1, ze.value = null, ce.value = null;
    }
    async function q(A) {
      if (!ce.value) return;
      je.value = !0;
      const te = ce.value;
      try {
        await b(te, A), K(), n("toast", `✓ Pushed to ${te}`, "success"), await B();
      } catch ($e) {
        n("toast", $e instanceof Error ? $e.message : "Push failed", "error");
      } finally {
        je.value = !1;
      }
    }
    function I() {
      const A = ce.value;
      K(), A && it(A);
    }
    return He(B), (A, te) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = ($e) => R.value = !0)
          }, {
            actions: r(() => [
              V.value ? d("", !0) : (s(), E(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: r(() => [...te[3] || (te[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          V.value ? d("", !0) : (s(), E(Wt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": te[1] || (te[1] = ($e) => S.value = $e),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: r(() => [
          C.value ? (s(), E(Et, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (s(), E(Mt, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            V.value ? (s(), E(Hf, {
              key: 0,
              mode: j.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: X,
              onCancel: de
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !V.value ? (s(), E(ss, {
              key: 1,
              variant: "compact"
            }, {
              default: r(() => [
                h(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (s(), o("span", Xp, " • Tracking: " + a(x.value.remote) + "/" + a(x.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            z.value.length && !V.value ? (s(), E(Ve, {
              key: 2,
              title: "REMOTES",
              count: z.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(z.value, ($e) => (s(), E(zf, {
                  key: $e.name,
                  remote: $e,
                  "sync-status": $.value[$e.name],
                  "fetching-remote": W.value,
                  onFetch: Y,
                  onEdit: Z,
                  onRemove: N,
                  onPull: it,
                  onPush: ve
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !z.value.length && !V.value ? (s(), E(pt, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: r(() => [
                w(se, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: r(() => [...te[4] || (te[4] = [
                    h(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(ht, {
        show: R.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = ($e) => R.value = !1)
      }, {
        content: r(() => [...te[5] || (te[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: r(() => [
          w(se, {
            variant: "link",
            onClick: L
          }, {
            default: r(() => [...te[6] || (te[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(Mg, {
        show: ie.value,
        "remote-name": ce.value || "",
        preview: Pe.value,
        loading: ye.value,
        pulling: P.value === "executing",
        error: Q.value,
        "conflict-resolutions": le.value,
        onClose: Ee,
        onPull: fe,
        onOpenConflictResolution: J
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Qg, {
        show: Ie.value,
        "remote-name": ce.value || "",
        preview: ze.value,
        loading: ye.value,
        pushing: je.value,
        onClose: K,
        onPush: q,
        onPullFirst: I
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ee.value && ot.value ? (s(), E(Ep, {
        key: 0,
        "workflow-conflicts": ot.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: P.value === "validating",
        error: Ae.value,
        onClose: nt,
        onResolve: me,
        onApply: xe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ce.value && we.value ? (s(), E(Yp, {
        key: 1,
        validation: we.value,
        "operation-type": "pull",
        executing: P.value === "executing",
        onProceed: Xe,
        onGoBack: ct,
        onCancel: ut
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Zp = /* @__PURE__ */ ne(Qp, [["__scopeId", "data-v-9ae3b76d"]]), Jp = { class: "setting-info" }, eh = { class: "setting-label" }, th = {
  key: 0,
  class: "required-marker"
}, sh = {
  key: 0,
  class: "setting-description"
}, oh = { class: "setting-control" }, nh = /* @__PURE__ */ oe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: ue(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Jp, [
        e("div", eh, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", th, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", sh, a(t.description), 1)) : d("", !0)
      ]),
      e("div", oh, [
        Me(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Is = /* @__PURE__ */ ne(nh, [["__scopeId", "data-v-cb5d236c"]]), ah = { class: "toggle" }, lh = ["checked", "disabled"], ih = /* @__PURE__ */ oe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("label", ah, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, lh),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), rh = /* @__PURE__ */ ne(ih, [["__scopeId", "data-v-71c0f550"]]), dh = { class: "workspace-settings-content" }, ch = { class: "settings-section" }, uh = { class: "path-setting" }, mh = { class: "path-value" }, vh = { class: "path-setting" }, fh = { class: "path-value" }, gh = { class: "settings-section" }, ph = { class: "settings-section" }, hh = { class: "settings-section" }, yh = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: l, emit: n }) {
    const i = t, m = n, { getConfig: v, updateConfig: u } = qe(), f = k(!1), c = k(null), g = k(null), p = k(null), y = k(null), b = k(""), _ = k(""), T = k(!1);
    function x(V) {
      return V.join(" ");
    }
    function $(V) {
      return V.trim() ? V.trim().split(/\s+/) : [];
    }
    const C = U(() => {
      if (!y.value) return !1;
      const V = b.value !== (y.value.civitai_api_key || ""), j = _.value !== x(y.value.comfyui_extra_args || []);
      return V || j;
    });
    async function D() {
      f.value = !0, c.value = null;
      try {
        p.value = await v(i.workspacePath || void 0), y.value = { ...p.value }, b.value = p.value.civitai_api_key || "", _.value = x(p.value.comfyui_extra_args || []);
        const V = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = V === "true";
      } catch (V) {
        c.value = V instanceof Error ? V.message : "Failed to load settings";
      } finally {
        f.value = !1;
      }
    }
    async function S() {
      var V, j;
      g.value = null;
      try {
        const M = {};
        b.value !== (((V = y.value) == null ? void 0 : V.civitai_api_key) || "") && (M.civitai_api_key = b.value || null), _.value !== x(((j = y.value) == null ? void 0 : j.comfyui_extra_args) || []) && (M.comfyui_extra_args = $(_.value)), await u(M, i.workspacePath || void 0), await D(), g.value = { type: "success", message: "Settings saved successfully" }, m("saved"), setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (M) {
        const z = M instanceof Error ? M.message : "Failed to save settings";
        g.value = { type: "error", message: z }, m("error", z);
      }
    }
    function R() {
      y.value && (b.value = y.value.civitai_api_key || "", _.value = x(y.value.comfyui_extra_args || []), g.value = null);
    }
    function W(V) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(V)), console.log("[ComfyGit] Auto-refresh setting saved:", V);
    }
    return l({
      saveSettings: S,
      resetSettings: R,
      hasChanges: C,
      loadSettings: D
    }), He(D), (V, j) => (s(), o("div", dh, [
      f.value ? (s(), E(Et, {
        key: 0,
        message: "Loading workspace settings..."
      })) : c.value ? (s(), E(Mt, {
        key: 1,
        message: c.value,
        retry: !0,
        onRetry: D
      }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
        w(Ve, { title: "WORKSPACE PATHS" }, {
          default: r(() => {
            var M, z;
            return [
              e("div", ch, [
                e("div", uh, [
                  j[3] || (j[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  j[4] || (j[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", mh, a(((M = p.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                e("div", vh, [
                  j[5] || (j[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  j[6] || (j[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", fh, a(((z = p.value) == null ? void 0 : z.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        w(Ve, { title: "API CREDENTIALS" }, {
          default: r(() => [
            e("div", gh, [
              w(Is, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: r(() => [
                  w(ms, {
                    modelValue: b.value,
                    "onUpdate:modelValue": j[0] || (j[0] = (M) => b.value = M),
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
        w(Ve, { title: "COMFYUI SETTINGS" }, {
          default: r(() => [
            e("div", ph, [
              w(Is, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: r(() => [
                  w(ms, {
                    modelValue: _.value,
                    "onUpdate:modelValue": j[1] || (j[1] = (M) => _.value = M),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              j[7] || (j[7] = e("div", { class: "setting-hint" }, [
                h(" Common flags: "),
                e("code", null, "--lowvram"),
                h(", "),
                e("code", null, "--highvram"),
                h(", "),
                e("code", null, "--listen 0.0.0.0"),
                h(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        w(Ve, { title: "UI SETTINGS" }, {
          default: r(() => [
            e("div", hh, [
              w(Is, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: r(() => [
                  w(rh, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      j[2] || (j[2] = (M) => T.value = M),
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
        g.value ? (s(), E(ss, {
          key: 0,
          variant: (g.value.type === "success", "compact")
        }, {
          default: r(() => [
            e("span", {
              style: It({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(g.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), mo = /* @__PURE__ */ ne(yh, [["__scopeId", "data-v-9f44552d"]]), wh = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const l = k(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, m) => (s(), E(et, null, {
      header: r(() => [
        w(tt, { title: "WORKSPACE SETTINGS" }, {
          actions: r(() => {
            var v, u;
            return [
              w(se, {
                variant: "primary",
                size: "sm",
                disabled: !((v = l.value) != null && v.hasChanges),
                onClick: m[0] || (m[0] = (f) => {
                  var c;
                  return (c = l.value) == null ? void 0 : c.saveSettings();
                })
              }, {
                default: r(() => [...m[2] || (m[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = l.value) != null && u.hasChanges ? (s(), E(se, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: m[1] || (m[1] = (f) => {
                  var c;
                  return (c = l.value) == null ? void 0 : c.resetSettings();
                })
              }, {
                default: r(() => [...m[3] || (m[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: r(() => [
        w(mo, {
          ref_key: "contentRef",
          ref: l,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), kh = /* @__PURE__ */ oe({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: l, getWorkspaceLogPath: n, openFile: i } = qe(), m = k([]), v = k(!1), u = k(null), f = k(!1), c = k(null), g = k(null), p = k(!1), y = U(() => m.value.length === 0 ? [] : m.value.map((x) => ({
      text: `${x.timestamp} - ${x.name} - ${x.level} - ${x.func}:${x.line} - ${x.message}`,
      level: x.level
    })));
    async function b() {
      v.value = !0, u.value = null;
      try {
        m.value = await l(void 0, 500);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load workspace logs";
      } finally {
        v.value = !1, setTimeout(() => {
          var x;
          (x = c.value) != null && x.parentElement && (c.value.parentElement.scrollTop = c.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function _() {
      try {
        const x = await n();
        x.exists && (g.value = x.path);
      } catch {
      }
    }
    async function T() {
      if (g.value) {
        p.value = !0;
        try {
          await i(g.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return He(() => {
      b(), _();
    }), (x, $) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => f.value = !0)
          }, {
            actions: r(() => [
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !g.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: r(() => [
                  h(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: v.value
              }, {
                default: r(() => [
                  h(a(v.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          v.value ? (s(), E(Et, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), E(Mt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            m.value.length === 0 ? (s(), E(pt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: c,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ae(y.value, (C, D) => (s(), o("div", {
                key: D,
                class: ue(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(ht, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (C) => f.value = !1)
      }, {
        content: r(() => [...$[3] || ($[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: r(() => [
          w(se, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => f.value = !1)
          }, {
            default: r(() => [...$[4] || ($[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _h = /* @__PURE__ */ ne(kh, [["__scopeId", "data-v-7f05352a"]]), bh = /* @__PURE__ */ oe({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: l, getStatus: n, getEnvironmentLogPath: i, openFile: m } = qe(), v = k([]), u = k(!1), f = k(null), c = k(!1), g = k("production"), p = k(null), y = k(null), b = k(!1), _ = U(() => v.value.length === 0 ? [] : v.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, f.value = null;
      try {
        v.value = await l(void 0, 500);
        try {
          const C = await n();
          g.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        f.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = p.value) != null && C.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function x() {
      try {
        const C = await i();
        C.exists && (y.value = C.path);
      } catch {
      }
    }
    async function $() {
      if (y.value) {
        b.value = !0;
        try {
          await m(y.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          b.value = !1;
        }
      }
    }
    return He(() => {
      T(), x();
    }), (C, D) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (S) => c.value = !0)
          }, {
            actions: r(() => [
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: !y.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: r(() => [
                  h(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: u.value
              }, {
                default: r(() => [
                  h(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          u.value ? (s(), E(Et, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (s(), E(Mt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            v.value.length === 0 ? (s(), E(pt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ae(_.value, (S, R) => (s(), o("div", {
                key: R,
                class: ue(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(ht, {
        show: c.value,
        title: "About Environment Logs",
        onClose: D[2] || (D[2] = (S) => c.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            D[3] || (D[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(g.value), 1),
            D[4] || (D[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          D[5] || (D[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1)),
          D[6] || (D[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: r(() => [
          w(se, {
            variant: "primary",
            onClick: D[1] || (D[1] = (S) => c.value = !1)
          }, {
            default: r(() => [...D[7] || (D[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $h = /* @__PURE__ */ ne(bh, [["__scopeId", "data-v-6f8db7ce"]]), Ch = { class: "env-title" }, xh = {
  key: 0,
  class: "current-badge"
}, Sh = {
  key: 0,
  class: "branch-info"
}, Ih = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), E(Je, {
      status: t.isCurrent ? "synced" : void 0
    }, Dt({
      icon: r(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: r(() => [
        e("div", Ch, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", xh, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: r(() => [
        t.currentBranch ? (s(), o("span", Sh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: r(() => [
        Me(l.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: r(() => [
          w(We, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(We, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(We, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(We, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Eh = /* @__PURE__ */ ne(Ih, [["__scopeId", "data-v-9231917a"]]), Mh = { class: "env-details" }, Ph = { class: "status-row" }, Th = {
  key: 0,
  class: "detail-row"
}, Rh = { class: "value mono" }, zh = {
  key: 1,
  class: "detail-row"
}, Lh = { class: "value mono small" }, Dh = { class: "detail-row" }, Nh = { class: "value" }, Uh = { class: "detail-row" }, Bh = { class: "value" }, Oh = { class: "detail-row" }, Ah = { class: "value" }, Fh = {
  key: 2,
  class: "section-divider"
}, Vh = {
  key: 3,
  class: "detail-row"
}, Wh = { class: "value" }, Gh = {
  key: 4,
  class: "detail-row"
}, jh = { class: "value" }, Hh = { class: "footer-actions" }, Kh = /* @__PURE__ */ oe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: l }) {
    const n = l;
    function i(m) {
      if (!m) return "Unknown";
      try {
        const v = new Date(m), f = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), c = Math.floor(f / 6e4), g = Math.floor(f / 36e5), p = Math.floor(f / 864e5);
        return c < 1 ? "just now" : c < 60 ? `${c} ${c === 1 ? "minute" : "minutes"} ago` : g < 24 ? `${g} ${g === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return m;
      }
    }
    return (m, v) => (s(), E(st, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (u) => n("close"))
    }, {
      body: r(() => [
        e("div", Mh, [
          e("div", Ph, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ue(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Th, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Rh, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", zh, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Lh, a(t.environment.path), 1)
          ])) : d("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Dh, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Nh, a(t.environment.workflow_count), 1)
          ]),
          e("div", Uh, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Bh, a(t.environment.node_count), 1)
          ]),
          e("div", Oh, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Ah, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Fh)) : d("", !0),
          t.environment.created_at ? (s(), o("div", Vh, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Wh, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", Gh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", jh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: r(() => [
        e("div", Hh, [
          t.canDelete ? (s(), E(pe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (u) => n("delete", t.environment.name))
          }, {
            default: r(() => [...v[12] || (v[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          w(pe, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (u) => n("close"))
          }, {
            default: r(() => [...v[13] || (v[13] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), qh = /* @__PURE__ */ ne(Kh, [["__scopeId", "data-v-59855453"]]), vo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fo = "3.12", Ns = [
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
], go = "auto", Yh = { class: "progress-bar" }, Xh = /* @__PURE__ */ oe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const l = t, n = U(() => `${Math.max(0, Math.min(100, l.progress))}%`);
    return (i, m) => (s(), o("div", Yh, [
      e("div", {
        class: ue(["progress-fill", t.variant]),
        style: It({ width: n.value })
      }, null, 6)
    ]));
  }
}), po = /* @__PURE__ */ ne(Xh, [["__scopeId", "data-v-1beb0512"]]), Qh = { class: "task-progress" }, Zh = { class: "progress-info" }, Jh = { class: "progress-percentage" }, e1 = { class: "progress-message" }, t1 = {
  key: 0,
  class: "progress-steps"
}, s1 = { class: "step-icon" }, o1 = { class: "step-label" }, n1 = /* @__PURE__ */ oe({
  __name: "TaskProgressDisplay",
  props: {
    progress: {},
    message: {},
    currentPhase: {},
    variant: { default: "default" },
    showSteps: { type: Boolean, default: !1 },
    steps: { default: () => [] }
  },
  setup(t) {
    const l = t;
    function n(m) {
      const v = l.steps.find((u) => u.id === m);
      return v ? l.progress >= v.progressThreshold ? "completed" : l.currentPhase === m ? "active" : "pending" : "pending";
    }
    function i(m) {
      const v = n(m);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (m, v) => (s(), o("div", Qh, [
      w(po, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Zh, [
        e("span", Jh, a(t.progress) + "%", 1),
        e("span", e1, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", t1, [
        (s(!0), o(F, null, ae(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: ue(["step", n(u.id)])
        }, [
          e("span", s1, a(i(u.id)), 1),
          e("span", o1, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ ne(n1, [["__scopeId", "data-v-9d1de66c"]]), a1 = {
  key: 0,
  class: "create-env-form"
}, l1 = { class: "form-field" }, i1 = { class: "form-field" }, r1 = ["value"], d1 = { class: "form-field" }, c1 = ["disabled"], u1 = ["value"], m1 = { class: "form-field" }, v1 = ["value"], f1 = { class: "form-field form-field--checkbox" }, g1 = { class: "form-checkbox" }, p1 = {
  key: 1,
  class: "create-env-progress"
}, h1 = { class: "creating-intro" }, y1 = {
  key: 0,
  class: "progress-warning"
}, w1 = {
  key: 1,
  class: "create-error"
}, k1 = { class: "error-message" }, _1 = {
  key: 1,
  class: "footer-status"
}, b1 = 10, $1 = /* @__PURE__ */ oe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: l }) {
    const n = l, { getComfyUIReleases: i, createEnvironment: m, getCreateProgress: v } = qe(), u = k(""), f = k(fo), c = k("latest"), g = k(go), p = k(!1), y = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = k(!1), _ = k(!1), T = k({
      progress: 0,
      message: ""
    });
    let x = null, $ = 0;
    const C = [
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
    function S() {
      _.value || n("close");
    }
    async function R() {
      const z = u.value.trim();
      if (z) {
        _.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const B = {
            name: z,
            python_version: f.value,
            comfyui_version: c.value,
            torch_backend: g.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await m(B);
          re.status === "started" ? W() : re.status === "error" && (T.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (B) {
          T.value = {
            progress: 0,
            message: B instanceof Error ? B.message : "Unknown error",
            error: B instanceof Error ? B.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      x || ($ = 0, x = window.setInterval(async () => {
        try {
          const z = await v();
          $ = 0, T.value = {
            progress: z.progress ?? 0,
            message: z.message,
            phase: z.phase,
            error: z.error
          }, z.state === "complete" ? (V(), n("created", z.environment_name || u.value.trim(), p.value)) : z.state === "error" ? (V(), T.value.error = z.error || z.message) : z.state === "idle" && _.value && (V(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= b1 && (V(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      x && (clearInterval(x), x = null);
    }
    function j() {
      _.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function M() {
      b.value = !0;
      try {
        y.value = await i();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        b.value = !1;
      }
    }
    return He(async () => {
      var z;
      await To(), (z = D.value) == null || z.focus(), M();
    }), to(() => {
      V();
    }), (z, B) => (s(), E(st, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !_.value,
      onClose: S
    }, {
      body: r(() => [
        _.value ? (s(), o("div", p1, [
          e("p", h1, [
            B[11] || (B[11] = h(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            B[12] || (B[12] = h("... ", -1))
          ]),
          w(fs, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", y1, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", w1, [
            e("p", k1, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", a1, [
          e("div", l1, [
            B[6] || (B[6] = e("label", { class: "form-label" }, "Name", -1)),
            Oe(e("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": B[0] || (B[0] = (re) => u.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: kt(R, ["enter"])
            }, null, 544), [
              [Lt, u.value]
            ])
          ]),
          e("div", i1, [
            B[7] || (B[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": B[1] || (B[1] = (re) => f.value = re),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ae(_e(vo), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re), 9, r1))), 128))
            ], 512), [
              [Tt, f.value]
            ])
          ]),
          e("div", d1, [
            B[8] || (B[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": B[2] || (B[2] = (re) => c.value = re),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(F, null, ae(y.value, (re) => (s(), o("option", {
                key: re.tag_name,
                value: re.tag_name
              }, a(re.name), 9, u1))), 128))
            ], 8, c1), [
              [Tt, c.value]
            ])
          ]),
          e("div", m1, [
            B[9] || (B[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": B[3] || (B[3] = (re) => g.value = re),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ae(_e(Ns), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re) + a(re === "auto" ? " (detect GPU)" : ""), 9, v1))), 128))
            ], 512), [
              [Tt, g.value]
            ])
          ]),
          e("div", f1, [
            e("label", g1, [
              Oe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": B[4] || (B[4] = (re) => p.value = re)
              }, null, 512), [
                [us, p.value]
              ]),
              B[10] || (B[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: r(() => [
        _.value ? (s(), o(F, { key: 1 }, [
          T.value.error ? (s(), E(pe, {
            key: 0,
            variant: "secondary",
            onClick: j
          }, {
            default: r(() => [...B[15] || (B[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", _1, " Creating environment... "))
        ], 64)) : (s(), o(F, { key: 0 }, [
          w(pe, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: R
          }, {
            default: r(() => [...B[13] || (B[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(pe, {
            variant: "secondary",
            onClick: B[5] || (B[5] = (re) => n("close"))
          }, {
            default: r(() => [...B[14] || (B[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), C1 = /* @__PURE__ */ ne($1, [["__scopeId", "data-v-f37eaa42"]]), x1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: l, emit: n }) {
    const i = n, { getEnvironments: m } = qe(), v = k([]), u = k(!1), f = k(null), c = k(""), g = k(!1), p = k(!1), y = k(null), b = U(() => {
      if (!c.value.trim()) return v.value;
      const D = c.value.toLowerCase();
      return v.value.filter(
        (S) => {
          var R;
          return S.name.toLowerCase().includes(D) || ((R = S.current_branch) == null ? void 0 : R.toLowerCase().includes(D));
        }
      );
    });
    function _(D, S) {
      p.value = !1, i("created", D, S);
    }
    function T() {
      p.value = !0;
    }
    function x(D) {
      y.value = D;
    }
    function $(D) {
      y.value = null, i("delete", D);
    }
    async function C() {
      u.value = !0, f.value = null;
      try {
        v.value = await m();
      } catch (D) {
        f.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return He(C), l({
      loadEnvironments: C,
      openCreateModal: T
    }), (D, S) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (R) => g.value = !0)
          }, {
            actions: r(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: r(() => [...S[6] || (S[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: r(() => [...S[7] || (S[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          w(Wt, {
            modelValue: c.value,
            "onUpdate:modelValue": S[1] || (S[1] = (R) => c.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          u.value ? (s(), E(Et, {
            key: 0,
            message: "Loading environments..."
          })) : f.value ? (s(), E(Mt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            b.value.length ? (s(), E(Ve, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(b.value, (R) => (s(), E(Eh, {
                  key: R.name,
                  "environment-name": R.name,
                  "is-current": R.is_current,
                  "current-branch": R.current_branch,
                  "show-last-used": !1
                }, {
                  actions: r(() => [
                    R.is_current ? d("", !0) : (s(), E(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => D.$emit("switch", R.name)
                    }, {
                      default: r(() => [...S[8] || (S[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => x(R)
                    }, {
                      default: r(() => [...S[9] || (S[9] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? d("", !0) : (s(), E(pt, {
              key: 1,
              icon: "🌍",
              message: c.value ? `No environments match '${c.value}'` : "No environments found. Create one to get started!"
            }, Dt({ _: 2 }, [
              c.value ? void 0 : {
                name: "actions",
                fn: r(() => [
                  w(se, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: r(() => [...S[10] || (S[10] = [
                      h(" Create Environment ", -1)
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
      w(ht, {
        show: g.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (R) => g.value = !1)
      }, {
        content: r(() => [...S[11] || (S[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            h(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: r(() => [
          w(se, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (R) => g.value = !1)
          }, {
            default: r(() => [...S[12] || (S[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), E(qh, {
        key: 0,
        environment: y.value,
        "can-delete": v.value.length > 1,
        onClose: S[4] || (S[4] = (R) => y.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), E(C1, {
        key: 1,
        onClose: S[5] || (S[5] = (R) => p.value = !1),
        onCreated: _
      })) : d("", !0)
    ], 64));
  }
}), S1 = /* @__PURE__ */ ne(x1, [["__scopeId", "data-v-f95999f4"]]), I1 = { class: "file-path" }, E1 = { class: "file-path-text" }, M1 = ["title"], P1 = /* @__PURE__ */ oe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, n = k(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(l.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (m) {
        console.error("Failed to copy:", m);
      }
    }
    return (m, v) => (s(), o("div", I1, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", E1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, M1)) : d("", !0)
    ]));
  }
}), ho = /* @__PURE__ */ ne(P1, [["__scopeId", "data-v-f0982173"]]), T1 = { class: "export-blocked" }, R1 = { class: "issues-list" }, z1 = { class: "issue-message" }, L1 = {
  key: 0,
  class: "issue-details"
}, D1 = ["onClick"], N1 = { class: "issue-fix" }, U1 = /* @__PURE__ */ oe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const l = t, n = gs({});
    function i(m) {
      const v = l.issues[m];
      return n[m] || v.details.length <= 3 ? v.details : v.details.slice(0, 3);
    }
    return (m, v) => (s(), E(st, {
      title: "Cannot Export",
      size: "md",
      onClose: v[1] || (v[1] = (u) => m.$emit("close"))
    }, {
      body: r(() => [
        e("div", T1, [
          v[2] || (v[2] = e("div", { class: "error-header" }, [
            e("span", { class: "error-icon" }, [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            e("div", { class: "error-summary" }, [
              e("h3", { class: "error-title" }, "Export blocked"),
              e("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          e("div", R1, [
            (s(!0), o(F, null, ae(t.issues, (u, f) => (s(), o("div", {
              key: f,
              class: "issue-item"
            }, [
              e("div", z1, a(u.message), 1),
              u.details.length ? (s(), o("div", L1, [
                (s(!0), o(F, null, ae(i(f), (c, g) => (s(), o("div", {
                  key: g,
                  class: "issue-detail"
                }, a(c), 1))), 128)),
                u.details.length > 3 && !n[f] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (c) => n[f] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, D1)) : d("", !0)
              ])) : d("", !0),
              e("div", N1, [
                u.type === "uncommitted_workflows" ? (s(), o(F, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(F, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(F, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: r(() => [
        w(pe, {
          variant: "primary",
          onClick: v[0] || (v[0] = (u) => m.$emit("close"))
        }, {
          default: r(() => [...v[3] || (v[3] = [
            h(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), B1 = /* @__PURE__ */ ne(U1, [["__scopeId", "data-v-b52f5e32"]]), O1 = { class: "export-warnings" }, A1 = {
  key: 0,
  class: "success-header"
}, F1 = { class: "warning-header" }, V1 = { class: "warning-summary" }, W1 = { class: "warning-title" }, G1 = { class: "models-section" }, j1 = { class: "models-list" }, H1 = { class: "model-info" }, K1 = { class: "model-filename" }, q1 = { class: "model-workflows" }, Y1 = ["onClick"], X1 = /* @__PURE__ */ oe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = k(!1), v = k(null), u = U(() => m.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function f() {
      v.value = null, i("revalidate");
    }
    return (c, g) => (s(), o(F, null, [
      w(st, {
        title: "Export Warnings",
        size: "md",
        onClose: g[3] || (g[3] = (p) => c.$emit("cancel"))
      }, {
        body: r(() => [
          e("div", O1, [
            t.models.length === 0 ? (s(), o("div", A1, [...g[4] || (g[4] = [
              e("span", { class: "success-icon" }, [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              e("div", { class: "success-summary" }, [
                e("h3", { class: "success-title" }, "All models have source URLs"),
                e("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (s(), o(F, { key: 1 }, [
              e("div", F1, [
                g[6] || (g[6] = e("span", { class: "warning-icon" }, [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    e("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                e("div", V1, [
                  e("h3", W1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  g[5] || (g[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", G1, [
                e("div", j1, [
                  (s(!0), o(F, null, ae(u.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", H1, [
                      e("div", K1, a(p.filename), 1),
                      e("div", q1, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (y) => v.value = p.hash
                    }, " Add Source ", 8, Y1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !m.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: g[0] || (g[0] = (p) => m.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: r(() => [
          w(pe, {
            variant: "secondary",
            onClick: g[1] || (g[1] = (p) => c.$emit("cancel"))
          }, {
            default: r(() => [...g[7] || (g[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(pe, {
            variant: "primary",
            onClick: g[2] || (g[2] = (p) => c.$emit("confirm"))
          }, {
            default: r(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      v.value ? (s(), E(Ds, {
        key: 0,
        identifier: v.value,
        onClose: f
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Q1 = /* @__PURE__ */ ne(X1, [["__scopeId", "data-v-b698d882"]]), Z1 = { class: "export-card" }, J1 = { class: "export-path-row" }, ey = { class: "export-actions" }, ty = {
  key: 1,
  class: "export-warning"
}, sy = /* @__PURE__ */ oe({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: l, exportEnvWithForce: n } = qe(), i = k(""), m = k(!1), v = k(!1), u = k(!1), f = k(null), c = k(!1), g = k(null), p = k(!1), y = k(!1), b = U(() => m.value ? "Validating..." : v.value ? "Exporting..." : "Export Environment");
    async function _() {
      m.value = !0, f.value = null;
      try {
        const S = await l();
        g.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? y.value = !0 : await $() : p.value = !0;
      } catch (S) {
        f.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        m.value = !1;
      }
    }
    async function T() {
      y.value = !1, await $();
    }
    async function x() {
      try {
        const S = await l();
        g.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function $() {
      v.value = !0;
      try {
        const S = await n(i.value || void 0);
        f.value = S;
      } catch (S) {
        f.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      var S;
      if ((S = f.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (R) {
          console.error("Failed to copy path:", R);
        }
    }
    async function D() {
      var S;
      if ((S = f.value) != null && S.path) {
        u.value = !0;
        try {
          const R = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!R.ok)
            throw new Error(`Download failed: ${R.statusText}`);
          const W = await R.blob(), V = URL.createObjectURL(W), j = f.value.path.split("/").pop() || "environment-export.tar.gz", M = document.createElement("a");
          M.href = V, M.download = j, document.body.appendChild(M), M.click(), document.body.removeChild(M), URL.revokeObjectURL(V);
        } catch (R) {
          console.error("Failed to download:", R), alert(`Download failed: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, R) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (W) => c.value = !0)
          })
        ]),
        content: r(() => [
          w(Ve, { title: "EXPORT OPTIONS" }, {
            default: r(() => [
              e("div", Z1, [
                R[7] || (R[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", J1, [
                  w(ms, {
                    modelValue: i.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (W) => i.value = W),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ey, [
                  w(se, {
                    variant: "primary",
                    size: "md",
                    loading: m.value || v.value,
                    disabled: m.value || v.value,
                    onClick: _
                  }, {
                    default: r(() => [
                      R[6] || (R[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      h(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (s(), E(Ve, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: r(() => [
              w(Je, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Dt({
                icon: r(() => [
                  h(a(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  h(a(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: r(() => [
                  h(a(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: r(() => [
                    w(We, { label: "Saved to:" }, {
                      default: r(() => [
                        w(ho, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (s(), E(We, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (s(), o("div", ty, [...R[8] || (R[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: r(() => [
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: D
                    }, {
                      default: r(() => [...R[9] || (R[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: r(() => [...R[10] || (R[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: R[2] || (R[2] = (W) => f.value = null)
                    }, {
                      default: r(() => [...R[11] || (R[11] = [
                        h(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }),
      w(ht, {
        show: c.value,
        title: "What Gets Exported",
        onClose: R[3] || (R[3] = (W) => c.value = !1)
      }, {
        content: r(() => [...R[12] || (R[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" — Environment settings and metadata")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Use Cases:"),
              e("ul", null, [
                e("li", null, "Share environments with collaborators"),
                e("li", null, "Back up your setup for safekeeping"),
                e("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            e("p", { class: "info-note" }, [
              e("strong", null, "Note:"),
              h(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value && g.value ? (s(), E(B1, {
        key: 0,
        issues: g.value.blocking_issues,
        onClose: R[4] || (R[4] = (W) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      y.value && g.value ? (s(), E(Q1, {
        key: 1,
        models: g.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: R[5] || (R[5] = (W) => y.value = !1),
        onRevalidate: x
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), oy = /* @__PURE__ */ ne(sy, [["__scopeId", "data-v-f4d120f2"]]), ny = { class: "file-input-wrapper" }, ay = ["accept", "multiple", "disabled"], ly = /* @__PURE__ */ oe({
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
  setup(t, { expose: l, emit: n }) {
    const i = n, m = k(null);
    function v() {
      var f;
      (f = m.value) == null || f.click();
    }
    function u(f) {
      const c = f.target;
      c.files && c.files.length > 0 && (i("change", c.files), c.value = "");
    }
    return l({
      triggerInput: v
    }), (f, c) => (s(), o("div", ny, [
      e("input", {
        ref_key: "fileInputRef",
        ref: m,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, ay),
      w(se, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: r(() => [
          Me(f.$slots, "default", {}, () => [
            c[0] || (c[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), iy = /* @__PURE__ */ ne(ly, [["__scopeId", "data-v-cd192091"]]), ry = {
  key: 0,
  class: "drop-zone-empty"
}, dy = { class: "drop-zone-text" }, cy = { class: "drop-zone-primary" }, uy = { class: "drop-zone-secondary" }, my = { class: "drop-zone-actions" }, vy = {
  key: 1,
  class: "drop-zone-file"
}, fy = { class: "file-info" }, gy = { class: "file-details" }, py = { class: "file-name" }, hy = { class: "file-size" }, yy = /* @__PURE__ */ oe({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: l }) {
    const n = l, i = k(!1), m = k(null), v = k(0), u = U(() => m.value !== null), f = U(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.name) || "";
    }), c = U(() => {
      if (!m.value) return "";
      const $ = m.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g($) {
      var C;
      $.stopPropagation(), v.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function p($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function y($) {
      $.stopPropagation(), v.value--, v.value === 0 && (i.value = !1);
    }
    function b($) {
      var D;
      $.stopPropagation(), v.value = 0, i.value = !1;
      const C = (D = $.dataTransfer) == null ? void 0 : D.files;
      C && C.length > 0 && T(C[0]);
    }
    function _($) {
      $.length > 0 && T($[0]);
    }
    function T($) {
      m.value = $, n("fileSelected", $);
    }
    function x() {
      m.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: ue(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Ge(g, ["prevent"]),
      onDragover: Ge(p, ["prevent"]),
      onDragleave: Ge(y, ["prevent"]),
      onDrop: Ge(b, ["prevent"])
    }, [
      u.value ? (s(), o("div", vy, [
        e("div", fy, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", gy, [
            e("div", py, a(f.value), 1),
            e("div", hy, a(c.value), 1)
          ])
        ]),
        w(se, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: r(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", ry, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", dy, [
          e("p", cy, a(t.primaryText), 1),
          e("p", uy, a(t.secondaryText), 1)
        ]),
        e("div", my, [
          w(iy, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: _
          }, {
            default: r(() => [
              h(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), wy = /* @__PURE__ */ ne(yy, [["__scopeId", "data-v-0f79cb86"]]), ky = { class: "import-preview" }, _y = { class: "preview-header" }, by = {
  key: 0,
  class: "source-env"
}, $y = { class: "preview-content" }, Cy = { class: "preview-section" }, xy = { class: "section-header" }, Sy = { class: "section-info" }, Iy = { class: "section-count" }, Ey = {
  key: 0,
  class: "item-list"
}, My = { class: "item-name" }, Py = {
  key: 0,
  class: "item-more"
}, Ty = { class: "preview-section" }, Ry = { class: "section-header" }, zy = { class: "section-info" }, Ly = { class: "section-count" }, Dy = {
  key: 0,
  class: "item-list"
}, Ny = { class: "item-details" }, Uy = { class: "item-name" }, By = { class: "item-meta" }, Oy = {
  key: 0,
  class: "item-more"
}, Ay = { class: "preview-section" }, Fy = { class: "section-header" }, Vy = { class: "section-info" }, Wy = { class: "section-count" }, Gy = {
  key: 0,
  class: "item-list"
}, jy = { class: "item-name" }, Hy = {
  key: 0,
  class: "item-more"
}, Ky = {
  key: 0,
  class: "preview-section"
}, qy = { class: "git-info" }, Yy = /* @__PURE__ */ oe({
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
    const l = t, n = U(() => l.workflows.length), i = U(() => l.models.length), m = U(() => l.nodes.length);
    function v(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (s(), o("div", ky, [
      e("div", _y, [
        w(dt, null, {
          default: r(() => [...f[0] || (f[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", by, [
          f[1] || (f[1] = h(" From: ", -1)),
          w(Ms, null, {
            default: r(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", $y, [
        e("div", Cy, [
          e("div", xy, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Sy, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Iy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Ey, [
            (s(!0), o(F, null, ae(t.workflows.slice(0, t.maxPreviewItems), (c) => (s(), o("div", {
              key: c,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", My, a(c), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Py, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Ty, [
          e("div", Ry, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", zy, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Ly, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Dy, [
            (s(!0), o(F, null, ae(t.models.slice(0, t.maxPreviewItems), (c) => (s(), o("div", {
              key: c.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ny, [
                e("span", Uy, a(c.filename), 1),
                e("span", By, a(v(c.size)) + " • " + a(c.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Oy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Ay, [
          e("div", Fy, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Vy, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Wy, a(m.value) + " node" + a(m.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Gy, [
            (s(!0), o(F, null, ae(t.nodes.slice(0, t.maxPreviewItems), (c) => (s(), o("div", {
              key: c,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", jy, a(c), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Hy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Ky, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", qy, [
            t.gitBranch ? (s(), E(We, {
              key: 0,
              label: "Branch"
            }, {
              default: r(() => [
                w(Ms, null, {
                  default: r(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), E(We, {
              key: 1,
              label: "Commit"
            }, {
              default: r(() => [
                w(oo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Xy = /* @__PURE__ */ ne(Yy, [["__scopeId", "data-v-182fe113"]]), Qy = { class: "import-config" }, Zy = { class: "config-container" }, Jy = { class: "config-field" }, e0 = { class: "input-wrapper" }, t0 = ["value"], s0 = {
  key: 0,
  class: "validating-indicator"
}, o0 = {
  key: 1,
  class: "valid-indicator"
}, n0 = {
  key: 0,
  class: "field-error"
}, a0 = { class: "config-field" }, l0 = { class: "strategy-options" }, i0 = ["value", "checked", "onChange"], r0 = { class: "strategy-content" }, d0 = { class: "strategy-label" }, c0 = { class: "strategy-description" }, u0 = { class: "config-field switch-field" }, m0 = { class: "switch-label" }, v0 = ["checked"], f0 = { class: "advanced-section" }, g0 = { class: "advanced-content" }, p0 = { class: "config-field" }, h0 = ["value"], y0 = ["value"], w0 = /* @__PURE__ */ oe({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = k(!1), v = k(!1);
    St(() => n.nameError, (p) => {
      m.value = !1, v.value = !p && n.name.length > 0;
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
    let f = null;
    function c(p) {
      const y = p.target.value;
      i("update:name", y), v.value = !1, f && clearTimeout(f), y.length > 0 ? (m.value = !0, f = setTimeout(() => {
        i("validate-name", y);
      }, 400)) : m.value = !1;
    }
    function g() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, y) => (s(), o("div", Qy, [
      w(dt, null, {
        default: r(() => [...y[2] || (y[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Zy, [
        e("div", Jy, [
          w(ds, { required: "" }, {
            default: r(() => [...y[3] || (y[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", e0, [
            e("input", {
              type: "text",
              class: ue(["name-input", { error: t.nameError || t.name.length === 0, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: c,
              onBlur: g
            }, null, 42, t0),
            m.value ? (s(), o("span", s0, "...")) : v.value ? (s(), o("span", o0, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", n0, a(t.nameError), 1)) : d("", !0),
          y[4] || (y[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", a0, [
          w(ds, null, {
            default: r(() => [...y[5] || (y[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", l0, [
            (s(), o(F, null, ae(u, (b) => e("label", {
              key: b.value,
              class: ue(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (_) => i("update:modelStrategy", b.value)
              }, null, 40, i0),
              e("div", r0, [
                e("span", d0, a(b.label), 1),
                e("span", c0, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", u0, [
          e("label", m0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: y[0] || (y[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, v0),
            y[6] || (y[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", f0, [
          y[8] || (y[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", g0, [
            e("div", p0, [
              w(ds, null, {
                default: r(() => [...y[7] || (y[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: y[1] || (y[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(F, null, ae(_e(Ns), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, y0))), 128))
              ], 40, h0)
            ])
          ])
        ])
      ])
    ]));
  }
}), k0 = /* @__PURE__ */ ne(w0, [["__scopeId", "data-v-89ea06a1"]]), _0 = { class: "import-flow" }, b0 = {
  key: 0,
  class: "import-empty"
}, $0 = { class: "git-import-section" }, C0 = { class: "git-url-input-row" }, x0 = ["disabled"], S0 = {
  key: 0,
  class: "git-error"
}, I0 = {
  key: 1,
  class: "import-configure"
}, E0 = { class: "selected-file-bar" }, M0 = {
  key: 0,
  class: "file-bar-content"
}, P0 = { class: "file-bar-info" }, T0 = { class: "file-bar-name" }, R0 = { class: "file-bar-size" }, z0 = {
  key: 1,
  class: "file-bar-content"
}, L0 = { class: "file-bar-info" }, D0 = { class: "file-bar-name" }, N0 = {
  key: 0,
  class: "preview-loading"
}, U0 = { class: "import-actions" }, B0 = {
  key: 2,
  class: "import-progress"
}, O0 = { class: "creating-intro" }, A0 = {
  key: 0,
  class: "progress-warning"
}, F0 = {
  key: 1,
  class: "import-error"
}, V0 = { class: "error-message" }, W0 = {
  key: 3,
  class: "import-complete"
}, G0 = { class: "complete-message" }, j0 = { class: "complete-title" }, H0 = { class: "complete-details" }, K0 = { class: "complete-actions" }, q0 = /* @__PURE__ */ oe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: l, emit: n }) {
    var je, ce, ye, Pe;
    const i = t, m = n, { previewTarballImport: v, previewGitImport: u, validateEnvironmentName: f, executeImport: c, executeGitImport: g, getImportProgress: p } = qe();
    let y = null;
    const b = k(null), _ = k(i.resumeImport ?? !1), T = k(!1), x = k(!1), $ = k(""), C = k(!1), D = k(null), S = k(""), R = k(null), W = k(!1), V = k(null), j = k(null), M = k({
      name: ((je = i.initialProgress) == null ? void 0 : je.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), z = k(null), B = k({
      message: ((ce = i.initialProgress) == null ? void 0 : ce.message) ?? "Preparing import...",
      phase: ((ye = i.initialProgress) == null ? void 0 : ye.phase) ?? "",
      progress: ((Pe = i.initialProgress) == null ? void 0 : Pe.progress) ?? 0,
      error: null
    }), re = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Z = U(() => {
      if (!j.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Q = j.value;
      return {
        sourceEnvironment: Q.comfyui_version ? `ComfyUI ${Q.comfyui_version}` : "Unknown",
        workflows: Q.workflows.map((le) => le.name),
        models: Q.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: Q.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = U(() => !C.value && !D.value && j.value && M.value.name.length > 0 && !z.value && (b.value || R.value));
    async function de(Q) {
      b.value = Q, C.value = !0, D.value = null, j.value = null;
      try {
        const le = await v(Q);
        j.value = le;
      } catch (le) {
        D.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        C.value = !1;
      }
    }
    function Y() {
      b.value = null, R.value = null, S.value = "", V.value = null, T.value = !1, x.value = !1, $.value = "", j.value = null, D.value = null, M.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, z.value = null, m("source-cleared");
    }
    function N() {
      Ie(), Y(), _.value = !1, C.value = !1, W.value = !1, B.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function L() {
      if (S.value.trim()) {
        W.value = !0, V.value = null;
        try {
          const Q = await u(S.value.trim());
          R.value = S.value.trim(), j.value = Q;
        } catch (Q) {
          V.value = Q instanceof Error ? Q.message : "Failed to analyze repository";
        } finally {
          W.value = !1;
        }
      }
    }
    function P(Q) {
      try {
        const le = new URL(Q);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return Q;
      }
    }
    async function ie(Q) {
      if (!Q) {
        z.value = "Environment name is required";
        return;
      }
      try {
        const le = await f(Q);
        z.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        z.value = "Failed to validate name";
      }
    }
    async function ee() {
      if (M.value.name && !(!b.value && !R.value)) {
        _.value = !0, T.value = !1, B.value = { message: `Creating environment '${M.value.name}'...`, phase: "", progress: 0, error: null }, m("import-started");
        try {
          let Q;
          if (b.value)
            Q = await c(
              b.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else if (R.value)
            Q = await g(
              R.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Q.status === "started" ? Ce() : (x.value = !1, $.value = Q.message, _.value = !1, T.value = !0);
        } catch (Q) {
          x.value = !1, $.value = Q instanceof Error ? Q.message : "Unknown error occurred during import", _.value = !1, T.value = !0;
        }
      }
    }
    async function Ce() {
      if (y) return;
      const Q = async () => {
        try {
          const we = await p();
          return B.value = {
            message: we.message,
            phase: we.phase || "",
            progress: we.progress ?? (we.state === "importing" ? 50 : 0),
            error: we.error || null
          }, we.state === "complete" ? (Ie(), x.value = !0, $.value = `Environment '${we.environment_name}' created successfully`, _.value = !1, T.value = !0, we.environment_name && m("import-complete", we.environment_name, M.value.switchAfterImport), !1) : we.state === "error" ? (Ie(), x.value = !1, $.value = we.error || we.message, _.value = !1, T.value = !0, !1) : !0;
        } catch (we) {
          return console.error("Failed to poll import progress:", we), !0;
        }
      };
      await Q() && (y = setInterval(async () => {
        await Q() || Ie();
      }, 2e3));
    }
    function Ie() {
      y && (clearInterval(y), y = null);
    }
    function ze(Q) {
      return Q < 1024 ? `${Q} B` : Q < 1024 * 1024 ? `${(Q / 1024).toFixed(1)} KB` : Q < 1024 * 1024 * 1024 ? `${(Q / (1024 * 1024)).toFixed(1)} MB` : `${(Q / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return He(async () => {
      try {
        const Q = await p();
        console.log("[ComfyGit ImportFlow] Import progress check:", Q.state, Q), Q.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Q.environment_name), _.value = !0, M.value.name = Q.environment_name || M.value.name || "", B.value = {
          progress: Q.progress ?? 0,
          message: Q.message || "Importing...",
          phase: Q.phase || "",
          error: null
        }, Ce());
      } catch (Q) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Q);
      }
    }), l({
      handleReset: N,
      isImporting: _,
      canImport: X
    }), (Q, le) => {
      var we;
      return s(), o("div", _0, [
        !b.value && !R.value && !_.value ? (s(), o("div", b0, [
          w(wy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: de
          }),
          le[7] || (le[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", $0, [
            le[5] || (le[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", C0, [
              Oe(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Ae) => S.value = Ae),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: kt(L, ["enter"]),
                disabled: W.value
              }, null, 40, x0), [
                [Lt, S.value]
              ]),
              w(se, {
                variant: "primary",
                size: "sm",
                disabled: !S.value.trim() || W.value,
                onClick: L
              }, {
                default: r(() => [
                  h(a(W.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (s(), o("div", S0, a(V.value), 1)) : d("", !0),
            le[6] || (le[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (b.value || R.value) && !_.value && !T.value ? (s(), o("div", I0, [
          e("div", E0, [
            b.value ? (s(), o("div", M0, [
              le[8] || (le[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", P0, [
                e("div", T0, a(b.value.name), 1),
                e("div", R0, a(ze(b.value.size)), 1)
              ])
            ])) : R.value ? (s(), o("div", z0, [
              le[10] || (le[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", L0, [
                e("div", D0, a(P(R.value)), 1),
                le[9] || (le[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            w(se, {
              variant: "ghost",
              size: "sm",
              onClick: Y
            }, {
              default: r(() => [...le[11] || (le[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", N0, [...le[12] || (le[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (s(), E(vt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : j.value ? (s(), E(Xy, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          j.value ? (s(), E(k0, {
            key: 3,
            name: M.value.name,
            "onUpdate:name": le[1] || (le[1] = (Ae) => M.value.name = Ae),
            "model-strategy": M.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Ae) => M.value.modelStrategy = Ae),
            "torch-backend": M.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Ae) => M.value.torchBackend = Ae),
            "switch-after-import": M.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Ae) => M.value.switchAfterImport = Ae),
            "name-error": z.value,
            onValidateName: ie
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          M.value.modelStrategy === "skip" && ((we = j.value) != null && we.models_needing_download) ? (s(), E(vt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", U0, [
            w(se, {
              variant: "secondary",
              size: "md",
              onClick: Y
            }, {
              default: r(() => [...le[13] || (le[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(se, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: ee
            }, {
              default: r(() => [...le[14] || (le[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : _.value ? (s(), o("div", B0, [
          e("p", O0, [
            le[15] || (le[15] = h(" Importing environment ", -1)),
            e("strong", null, a(M.value.name), 1),
            le[16] || (le[16] = h("... ", -1))
          ]),
          w(fs, {
            progress: B.value.progress,
            message: B.value.message,
            "current-phase": B.value.phase,
            variant: B.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          B.value.error ? d("", !0) : (s(), o("p", A0, " This may take several minutes. Please wait... ")),
          B.value.error ? (s(), o("div", F0, [
            e("p", V0, a(B.value.error), 1)
          ])) : d("", !0)
        ])) : T.value ? (s(), o("div", W0, [
          e("div", {
            class: ue(["complete-icon", x.value ? "success" : "error"])
          }, a(x.value ? "✓" : "✕"), 3),
          e("div", G0, [
            e("div", j0, a(x.value ? "Import Successful" : "Import Failed"), 1),
            e("div", H0, a($.value), 1)
          ]),
          e("div", K0, [
            w(se, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: r(() => [...le[17] || (le[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), yo = /* @__PURE__ */ ne(q0, [["__scopeId", "data-v-72cbc04e"]]), Y0 = /* @__PURE__ */ oe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: l }) {
    const n = l, i = k(!1);
    function m(v, u) {
      u && n("import-complete-switch", v);
    }
    return (v, u) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (f) => i.value = !0)
          })
        ]),
        content: r(() => [
          w(yo, { onImportComplete: m })
        ]),
        _: 1
      }),
      w(ht, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (f) => i.value = !1)
      }, {
        content: r(() => [...u[2] || (u[2] = [
          e("div", { class: "help-steps" }, [
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "1"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Creates a New Environment"),
                e("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "2"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Preview Before Import"),
                e("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "3"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Choose Model Strategy"),
                e("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "4"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Switch When Ready"),
                e("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), X0 = /* @__PURE__ */ ne(Y0, [["__scopeId", "data-v-e13bfe76"]]), Q0 = { class: "api-key-card" }, Z0 = { class: "api-key-row" }, J0 = { class: "api-key-input-wrapper" }, ew = ["type", "disabled"], tw = ["title"], sw = { class: "status-icon" }, ow = { class: "status-text" }, nw = {
  key: 0,
  class: "credit-balance"
}, aw = { class: "config-card" }, lw = { class: "config-row" }, iw = {
  key: 0,
  class: "loading-inline"
}, rw = ["value"], dw = { class: "config-row" }, cw = ["disabled"], uw = {
  key: 0,
  value: ""
}, mw = {
  key: 1,
  value: ""
}, vw = {
  key: 2,
  value: ""
}, fw = ["value", "disabled"], gw = { class: "config-row" }, pw = { class: "radio-group" }, hw = { class: "radio-option" }, yw = { class: "radio-label" }, ww = { class: "radio-option" }, kw = { class: "radio-label" }, _w = { class: "config-row" }, bw = { class: "summary-card" }, $w = {
  key: 0,
  class: "loading-text"
}, Cw = { class: "summary-row" }, xw = { class: "summary-value" }, Sw = { class: "summary-row" }, Iw = { class: "summary-value" }, Ew = { class: "summary-row" }, Mw = { class: "summary-value" }, Pw = {
  key: 0,
  class: "summary-sub-row"
}, Tw = { class: "summary-sub-label" }, Rw = {
  key: 1,
  class: "summary-sub-row warning"
}, zw = { class: "summary-sub-label" }, Lw = { class: "summary-row" }, Dw = { class: "summary-value" }, Nw = { class: "summary-row" }, Uw = { class: "summary-value" }, Bw = {
  key: 2,
  class: "deploy-actions"
}, Ow = { class: "pods-header" }, Aw = {
  key: 0,
  class: "loading-text"
}, Fw = {
  key: 1,
  class: "empty-state"
}, Vw = {
  key: 2,
  class: "pods-list"
}, Ww = { class: "pod-header" }, Gw = { class: "pod-name" }, jw = { class: "pod-details" }, Hw = { class: "pod-gpu" }, Kw = { class: "pod-uptime" }, qw = { class: "pod-cost" }, Yw = { class: "pod-actions" }, Xw = /* @__PURE__ */ oe({
  __name: "DeploySection",
  emits: ["toast"],
  setup(t, { emit: l }) {
    const n = l, {
      getDeploySummary: i,
      testRunPodConnection: m,
      getNetworkVolumes: v,
      getRunPodGpuTypes: u,
      deployToRunPod: f,
      getRunPodPods: c,
      terminateRunPodPod: g,
      exportDeployPackage: p,
      getStoredRunPodKey: y,
      clearRunPodKey: b
    } = qe(), _ = k(!1), T = k(!1), x = k(""), $ = k(!1), C = k(!1), D = k(null), S = k(null), R = k(""), W = k(""), V = k("SECURE"), j = k("my-comfyui-deploy"), M = k([]), z = k(!1), B = k([]), re = k(!1), Z = k(null), X = k(!1), de = k([]), Y = k(!1), N = k(!1), L = k(null), P = k(!1), ie = k(null), ee = k(null);
    U(() => M.value.find((fe) => fe.id === R.value) || null);
    const Ce = U(() => $.value && R.value && W.value && !N.value), Ie = (fe) => {
      const J = B.value.find((me) => me.id === W.value);
      return J ? fe === "SECURE" ? J.securePrice.toFixed(2) : J.communityPrice.toFixed(2) : "0.00";
    };
    async function ze() {
      if (x.value) {
        C.value = !0, D.value = null;
        try {
          const fe = await m(x.value, !0);
          fe.status === "success" ? ($.value = !0, S.value = fe.credit_balance ?? null, D.value = { type: "success", message: fe.message }, await Promise.all([
            ce(),
            Pe(),
            Q()
          ])) : D.value = { type: "error", message: fe.message };
        } catch (fe) {
          D.value = {
            type: "error",
            message: fe instanceof Error ? fe.message : "Connection test failed"
          };
        } finally {
          C.value = !1;
        }
      }
    }
    async function je() {
      try {
        await b(), x.value = "", $.value = !1, D.value = null, S.value = null, M.value = [], R.value = "", B.value = [], W.value = "", Z.value = null, de.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function ce() {
      z.value = !0;
      try {
        const fe = await v();
        M.value = fe.volumes, M.value.length > 0 && (R.value = M.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        z.value = !1;
      }
    }
    async function ye(fe) {
      re.value = !0;
      try {
        const J = await u(fe);
        B.value = J.gpu_types;
        const me = B.value.find((nt) => nt.available);
        me ? W.value = me.id : W.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        re.value = !1;
      }
    }
    St(R, async (fe) => {
      if (!fe) {
        B.value = [], W.value = "";
        return;
      }
      const J = M.value.find((me) => me.id === fe);
      J && await ye(J.data_center_id);
    });
    async function Pe() {
      X.value = !0;
      try {
        Z.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        X.value = !1;
      }
    }
    async function Q() {
      Y.value = !0;
      try {
        const fe = await c();
        de.value = fe.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        Y.value = !1;
      }
    }
    async function le() {
      if (!(!W.value || !R.value)) {
        N.value = !0, L.value = null;
        try {
          const fe = await f({
            gpu_type_id: W.value,
            pod_name: j.value || "my-comfyui-deploy",
            network_volume_id: R.value,
            cloud_type: V.value
          });
          L.value = fe, fe.status === "success" ? (n("toast", "Deployment started!", "success"), await Q()) : n("toast", fe.message, "error");
        } catch (fe) {
          L.value = {
            status: "error",
            message: fe instanceof Error ? fe.message : "Deployment failed"
          }, n("toast", "Deployment failed", "error");
        } finally {
          N.value = !1;
        }
      }
    }
    async function we() {
      P.value = !0, ie.value = null;
      try {
        const fe = await p();
        ie.value = fe, fe.status === "success" ? n("toast", "Package created!", "success") : n("toast", fe.message || "Export failed", "error");
      } catch (fe) {
        ie.value = {
          status: "error",
          message: fe instanceof Error ? fe.message : "Export failed"
        }, n("toast", "Export failed", "error");
      } finally {
        P.value = !1;
      }
    }
    async function Ae(fe) {
      ee.value = fe;
      try {
        const J = await g(fe);
        J.status === "success" ? (n("toast", "Pod terminated", "success"), await Q()) : n("toast", J.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        ee.value = null;
      }
    }
    function ot(fe) {
      window.open(fe, "_blank", "noopener,noreferrer");
    }
    function it(fe) {
      navigator.clipboard.writeText(fe), n("toast", "Path copied to clipboard", "info");
    }
    function Ee(fe) {
      const J = Math.floor(fe / 3600), me = Math.floor(fe % 3600 / 60);
      return J > 0 ? `${J}h ${me}m` : `${me}m`;
    }
    return He(async () => {
      try {
        const fe = await y();
        fe.has_key && fe.key_preview && (x.value = fe.key_preview, await ze());
      } catch {
      }
    }), (fe, J) => (s(), o(F, null, [
      w(et, null, {
        header: r(() => [
          w(tt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (me) => _.value = !0)
          })
        ]),
        content: r(() => [
          w(Ve, { title: "RUNPOD API KEY" }, {
            default: r(() => [
              e("div", Q0, [
                e("div", Z0, [
                  e("div", J0, [
                    Oe(e("input", {
                      "onUpdate:modelValue": J[1] || (J[1] = (me) => x.value = me),
                      type: T.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: $.value
                    }, null, 8, ew), [
                      [Ro, x.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: J[2] || (J[2] = (me) => T.value = !T.value),
                      title: T.value ? "Hide key" : "Show key"
                    }, a(T.value ? "👁" : "👁‍🗨"), 9, tw)
                  ]),
                  $.value ? d("", !0) : (s(), E(se, {
                    key: 0,
                    variant: "secondary",
                    size: "sm",
                    loading: C.value,
                    disabled: !x.value || C.value,
                    onClick: ze
                  }, {
                    default: r(() => [...J[12] || (J[12] = [
                      h(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  $.value ? (s(), E(se, {
                    key: 1,
                    variant: "ghost",
                    size: "sm",
                    onClick: je
                  }, {
                    default: r(() => [...J[13] || (J[13] = [
                      h(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                D.value ? (s(), o("div", {
                  key: 0,
                  class: ue(["connection-status", D.value.type])
                }, [
                  e("span", sw, a(D.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", ow, a(D.value.message), 1),
                  S.value !== null ? (s(), o("span", nw, " $" + a(S.value.toFixed(2)) + " credit ", 1)) : d("", !0)
                ], 2)) : d("", !0),
                J[14] || (J[14] = e("div", { class: "api-key-help" }, [
                  e("span", { class: "help-icon" }, "i"),
                  e("span", { class: "help-text" }, [
                    h(" Get your API key at "),
                    e("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    h(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          $.value ? (s(), E(Ve, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: r(() => [
              e("div", aw, [
                e("div", lw, [
                  J[19] || (J[19] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  z.value ? (s(), o("div", iw, "Loading volumes...")) : M.value.length === 0 ? (s(), o(F, { key: 1 }, [
                    J[15] || (J[15] = e("div", { class: "no-volumes-state" }, [
                      e("span", { class: "no-volumes-icon" }, "⚠"),
                      e("span", { class: "no-volumes-text" }, "No network volumes found")
                    ], -1)),
                    J[16] || (J[16] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    J[17] || (J[17] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(F, { key: 2 }, [
                    Oe(e("select", {
                      "onUpdate:modelValue": J[3] || (J[3] = (me) => R.value = me),
                      class: "config-select"
                    }, [
                      (s(!0), o(F, null, ae(M.value, (me) => (s(), o("option", {
                        key: me.id,
                        value: me.id
                      }, a(me.name) + " (" + a(me.size_gb) + "GB, " + a(me.data_center_id) + ") ", 9, rw))), 128))
                    ], 512), [
                      [Tt, R.value]
                    ]),
                    J[18] || (J[18] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", dw, [
                  J[20] || (J[20] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  Oe(e("select", {
                    "onUpdate:modelValue": J[4] || (J[4] = (me) => W.value = me),
                    class: "config-select",
                    disabled: re.value || !R.value
                  }, [
                    R.value ? re.value ? (s(), o("option", mw, "Loading GPUs...")) : B.value.length === 0 ? (s(), o("option", vw, "No GPUs available in this region")) : d("", !0) : (s(), o("option", uw, "Select a volume first")),
                    (s(!0), o(F, null, ae(B.value, (me) => (s(), o("option", {
                      key: me.id,
                      value: me.id,
                      disabled: !me.available
                    }, a(me.displayName) + " (" + a(me.memoryInGb) + "GB) - $" + a(V.value === "SECURE" ? me.securePrice.toFixed(2) : me.communityPrice.toFixed(2)) + "/hr " + a(me.available ? "" : " [Unavailable]"), 9, fw))), 128))
                  ], 8, cw), [
                    [Tt, W.value]
                  ])
                ]),
                e("div", gw, [
                  J[21] || (J[21] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", pw, [
                    e("label", hw, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": J[5] || (J[5] = (me) => V.value = me),
                        value: "SECURE"
                      }, null, 512), [
                        [Ft, V.value]
                      ]),
                      e("span", yw, "Secure ($" + a(Ie("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", ww, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": J[6] || (J[6] = (me) => V.value = me),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [Ft, V.value]
                      ]),
                      e("span", kw, "Community ($" + a(Ie("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", _w, [
                  J[22] || (J[22] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Oe(e("input", {
                    "onUpdate:modelValue": J[7] || (J[7] = (me) => j.value = me),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Lt, j.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (s(), E(Ve, {
            key: 1,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: r(() => [
              e("div", bw, [
                X.value ? (s(), o("div", $w, "Loading environment summary...")) : Z.value ? (s(), o(F, { key: 1 }, [
                  e("div", Cw, [
                    J[23] || (J[23] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", xw, a(Z.value.comfyui_version), 1)
                  ]),
                  e("div", Sw, [
                    J[24] || (J[24] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", Iw, a(Z.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", Ew, [
                    J[25] || (J[25] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", Mw, a(Z.value.model_count) + " models", 1)
                  ]),
                  Z.value.models_with_sources > 0 ? (s(), o("div", Pw, [
                    e("span", Tw, "└─ " + a(Z.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : d("", !0),
                  Z.value.models_without_sources > 0 ? (s(), o("div", Rw, [
                    e("span", zw, "└─ " + a(Z.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : d("", !0),
                  e("div", Lw, [
                    J[26] || (J[26] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", Dw, a(Z.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", Nw, [
                    J[27] || (J[27] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Uw, "~" + a(Z.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : d("", !0)
              ])
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (s(), o("div", Bw, [
            w(se, {
              variant: "primary",
              size: "md",
              loading: N.value,
              disabled: !Ce.value,
              onClick: le
            }, {
              default: r(() => [...J[28] || (J[28] = [
                e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1),
                h(" Deploy to RunPod ", -1)
              ])]),
              _: 1
            }, 8, ["loading", "disabled"]),
            w(se, {
              variant: "secondary",
              size: "md",
              loading: P.value,
              onClick: we
            }, {
              default: r(() => [...J[29] || (J[29] = [
                e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" })
                ], -1),
                h(" Export Package ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : d("", !0),
          L.value ? (s(), E(Ve, {
            key: 3,
            title: "DEPLOY STATUS"
          }, {
            default: r(() => [
              w(Je, {
                status: L.value.status === "success" ? "synced" : "broken"
              }, Dt({
                icon: r(() => [
                  h(a(L.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  h(a(L.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: r(() => [
                  h(a(L.value.message), 1)
                ]),
                actions: r(() => [
                  w(se, {
                    variant: "ghost",
                    size: "sm",
                    onClick: J[8] || (J[8] = (me) => L.value = null)
                  }, {
                    default: r(() => [...J[30] || (J[30] = [
                      h(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                L.value.pod_id ? {
                  name: "details",
                  fn: r(() => [
                    w(We, {
                      label: "Pod ID:",
                      value: L.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (s(), E(Ve, {
            key: 4,
            title: "ACTIVE PODS"
          }, {
            default: r(() => [
              e("div", Ow, [
                w(se, {
                  variant: "ghost",
                  size: "sm",
                  loading: Y.value,
                  onClick: Q
                }, {
                  default: r(() => [...J[31] || (J[31] = [
                    h(" Refresh ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ]),
              Y.value && de.value.length === 0 ? (s(), o("div", Aw, " Loading pods... ")) : de.value.length === 0 ? (s(), o("div", Fw, [...J[32] || (J[32] = [
                e("span", { class: "empty-icon" }, "○", -1),
                e("span", { class: "empty-text" }, "No active pods", -1)
              ])])) : (s(), o("div", Vw, [
                (s(!0), o(F, null, ae(de.value, (me) => (s(), o("div", {
                  key: me.id,
                  class: "pod-card"
                }, [
                  e("div", Ww, [
                    e("span", Gw, a(me.name), 1),
                    e("span", {
                      class: ue(["pod-status", me.status.toLowerCase()])
                    }, a(me.status === "RUNNING" ? "●" : "○") + " " + a(me.status), 3)
                  ]),
                  e("div", jw, [
                    e("span", Hw, a(me.gpu_type), 1),
                    J[33] || (J[33] = e("span", { class: "pod-separator" }, "•", -1)),
                    e("span", Kw, a(Ee(me.uptime_seconds)), 1),
                    J[34] || (J[34] = e("span", { class: "pod-separator" }, "•", -1)),
                    e("span", qw, "$" + a(me.total_cost.toFixed(2)), 1)
                  ]),
                  e("div", Yw, [
                    me.comfyui_url && me.status === "RUNNING" ? (s(), E(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (nt) => ot(me.comfyui_url)
                    }, {
                      default: r(() => [...J[35] || (J[35] = [
                        h(" Open ComfyUI ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w(se, {
                      variant: "ghost",
                      size: "sm",
                      loading: ee.value === me.id,
                      onClick: (nt) => Ae(me.id)
                    }, {
                      default: r(() => [...J[36] || (J[36] = [
                        h(" Terminate ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ]))), 128))
              ]))
            ]),
            _: 1
          })) : d("", !0),
          ie.value ? (s(), E(Ve, {
            key: 5,
            title: "EXPORT RESULT"
          }, {
            default: r(() => [
              w(Je, {
                status: ie.value.status === "success" ? "synced" : "broken"
              }, Dt({
                icon: r(() => [
                  h(a(ie.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  h(a(ie.value.status === "success" ? "Package Created" : "Export Failed"), 1)
                ]),
                subtitle: r(() => [
                  h(a(ie.value.message), 1)
                ]),
                actions: r(() => [
                  ie.value.package_path ? (s(), E(se, {
                    key: 0,
                    variant: "secondary",
                    size: "sm",
                    onClick: J[9] || (J[9] = (me) => it(ie.value.package_path))
                  }, {
                    default: r(() => [...J[37] || (J[37] = [
                      h(" Copy Path ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0),
                  w(se, {
                    variant: "ghost",
                    size: "sm",
                    onClick: J[10] || (J[10] = (me) => ie.value = null)
                  }, {
                    default: r(() => [...J[38] || (J[38] = [
                      h(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ie.value.package_path ? {
                  name: "details",
                  fn: r(() => [
                    w(We, { label: "Saved to:" }, {
                      default: r(() => [
                        w(ho, {
                          path: ie.value.package_path
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    w(We, {
                      label: "Size:",
                      value: `${ie.value.package_size_mb} MB`
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }),
      w(ht, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: J[11] || (J[11] = (me) => _.value = !1)
      }, {
        content: r(() => [...J[39] || (J[39] = [
          e("div", { class: "deploy-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "What is Deploy?"),
              e("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "What gets deployed:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" - All committed workflows")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" - Installed automatically")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" - Downloaded from sources (when available)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" - Environment settings")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Cost Information:"),
              e("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qw = /* @__PURE__ */ ne(Xw, [["__scopeId", "data-v-406e3d16"]]), Zw = { class: "header-info" }, Jw = { class: "commit-hash" }, ek = {
  key: 0,
  class: "commit-refs"
}, tk = { class: "commit-message" }, sk = { class: "commit-date" }, ok = {
  key: 0,
  class: "loading"
}, nk = {
  key: 1,
  class: "changes-section"
}, ak = { class: "stats-row" }, lk = { class: "stat" }, ik = { class: "stat insertions" }, rk = { class: "stat deletions" }, dk = {
  key: 0,
  class: "change-group"
}, ck = {
  key: 1,
  class: "change-group"
}, uk = {
  key: 0,
  class: "version"
}, mk = {
  key: 2,
  class: "change-group"
}, vk = { class: "change-item" }, fk = /* @__PURE__ */ oe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const l = t, { getCommitDetail: n } = qe(), i = k(null), m = k(!0), v = U(() => {
      if (!i.value) return !1;
      const f = i.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const f = i.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return He(async () => {
      try {
        i.value = await n(l.commit.hash);
      } finally {
        m.value = !1;
      }
    }), (f, c) => (s(), E(st, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (g) => f.$emit("close"))
    }, {
      header: r(() => {
        var g, p, y, b;
        return [
          e("div", Zw, [
            c[4] || (c[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Jw, a(((g = i.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (y = i.value) == null ? void 0 : y.refs) != null && b.length ? (s(), o("span", ek, [
              (s(!0), o(F, null, ae(i.value.refs, (_) => (s(), o("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : d("", !0)
          ]),
          w(pe, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (_) => f.$emit("close"))
          }, {
            default: r(() => [...c[5] || (c[5] = [
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
      body: r(() => {
        var g, p;
        return [
          e("div", tk, a(((g = i.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", sk, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          m.value ? (s(), o("div", ok, "Loading details...")) : i.value ? (s(), o("div", nk, [
            e("div", ak, [
              e("span", lk, a(i.value.stats.files_changed) + " files", 1),
              e("span", ik, "+" + a(i.value.stats.insertions), 1),
              e("span", rk, "-" + a(i.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", dk, [
              w(Qt, { variant: "section" }, {
                default: r(() => [...c[6] || (c[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ae(i.value.changes.workflows.added, (y) => (s(), o("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                c[7] || (c[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(F, null, ae(i.value.changes.workflows.modified, (y) => (s(), o("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                c[8] || (c[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(F, null, ae(i.value.changes.workflows.deleted, (y) => (s(), o("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                c[9] || (c[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", ck, [
              w(Qt, { variant: "section" }, {
                default: r(() => [...c[10] || (c[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ae(i.value.changes.nodes.added, (y) => (s(), o("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                c[11] || (c[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y.name), 1),
                y.version ? (s(), o("span", uk, "(" + a(y.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(F, null, ae(i.value.changes.nodes.removed, (y) => (s(), o("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                c[12] || (c[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", mk, [
              w(Qt, { variant: "section" }, {
                default: r(() => [...c[13] || (c[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", vk, [
                c[14] || (c[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: r(() => [
        w(pe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (g) => f.$emit("createBranch", t.commit))
        }, {
          default: r(() => [...c[15] || (c[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(pe, {
          variant: "primary",
          onClick: c[2] || (c[2] = (g) => f.$emit("checkout", t.commit))
        }, {
          default: r(() => [...c[16] || (c[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), gk = /* @__PURE__ */ ne(fk, [["__scopeId", "data-v-d256ff6d"]]), pk = { class: "base-textarea-wrapper" }, hk = ["value", "rows", "placeholder", "disabled", "maxlength"], yk = {
  key: 0,
  class: "base-textarea-count"
}, wk = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m(v) {
      v.shiftKey || v.ctrlKey || v.metaKey || n.submitOnEnter && (v.preventDefault(), i("submit"));
    }
    return (v, u) => (s(), o("div", pk, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (f) => v.$emit("update:modelValue", f.target.value)),
        onKeydown: [
          u[1] || (u[1] = kt(Ge((f) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = kt(Ge((f) => v.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          kt(m, ["enter"])
        ]
      }, null, 40, hk),
      t.showCharCount && t.maxLength ? (s(), o("div", yk, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Xs = /* @__PURE__ */ ne(wk, [["__scopeId", "data-v-c6d16c93"]]), kk = ["checked", "disabled"], _k = { class: "base-checkbox-box" }, bk = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, $k = {
  key: 0,
  class: "base-checkbox-label"
}, Ck = /* @__PURE__ */ oe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("label", {
      class: ue(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.checked))
      }, null, 40, kk),
      e("span", _k, [
        t.modelValue ? (s(), o("svg", bk, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      l.$slots.default ? (s(), o("span", $k, [
        Me(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Qs = /* @__PURE__ */ ne(Ck, [["__scopeId", "data-v-bf17c831"]]), xk = { class: "popover-header" }, Sk = { class: "popover-body" }, Ik = {
  key: 0,
  class: "changes-summary"
}, Ek = {
  key: 0,
  class: "change-item"
}, Mk = {
  key: 1,
  class: "change-item"
}, Pk = {
  key: 2,
  class: "change-item"
}, Tk = {
  key: 3,
  class: "change-item"
}, Rk = {
  key: 4,
  class: "change-item"
}, zk = {
  key: 5,
  class: "change-item"
}, Lk = {
  key: 1,
  class: "no-changes"
}, Dk = {
  key: 2,
  class: "loading"
}, Nk = {
  key: 3,
  class: "issues-error"
}, Uk = { class: "error-header" }, Bk = { class: "error-title" }, Ok = { class: "issues-list" }, Ak = { class: "message-section" }, Fk = { class: "popover-footer" }, Vk = {
  key: 1,
  class: "commit-popover"
}, Wk = { class: "popover-header" }, Gk = { class: "popover-body" }, jk = {
  key: 0,
  class: "changes-summary"
}, Hk = {
  key: 0,
  class: "change-item"
}, Kk = {
  key: 1,
  class: "change-item"
}, qk = {
  key: 2,
  class: "change-item"
}, Yk = {
  key: 3,
  class: "change-item"
}, Xk = {
  key: 4,
  class: "change-item"
}, Qk = {
  key: 5,
  class: "change-item"
}, Zk = {
  key: 1,
  class: "no-changes"
}, Jk = {
  key: 2,
  class: "loading"
}, e_ = {
  key: 3,
  class: "issues-error"
}, t_ = { class: "error-header" }, s_ = { class: "error-title" }, o_ = { class: "issues-list" }, n_ = { class: "message-section" }, a_ = { class: "popover-footer" }, l_ = /* @__PURE__ */ oe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: l }) {
    const n = t, i = l, { commit: m } = qe(), v = k(""), u = k(!1), f = k(!1), c = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), g = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows, x = n.status.git_changes;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), p = U(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), y = U(() => p.value.length > 0), b = U(() => y.value && !f.value);
    async function _() {
      var T, x, $;
      if (!(y.value && !f.value) && !(!c.value || !v.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await m(v.value.trim(), f.value);
          if (C.status === "success") {
            const D = `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((x = C.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: D });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, x) => t.asModal ? (s(), E(Qe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = Ge(() => {
          }, ["stop"]))
        }, [
          e("div", xk, [
            x[11] || (x[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = ($) => i("close"))
            }, [...x[10] || (x[10] = [
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
          e("div", Sk, [
            t.status && c.value ? (s(), o("div", Ik, [
              t.status.workflows.new.length ? (s(), o("div", Ek, [
                x[12] || (x[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Mk, [
                x[13] || (x[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Pk, [
                x[14] || (x[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Tk, [
                x[15] || (x[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Rk, [
                x[16] || (x[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              g.value ? d("", !0) : (s(), o("div", zk, [...x[17] || (x[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Lk, " No changes to commit ")) : (s(), o("div", Dk, " Loading... ")),
            y.value ? (s(), o("div", Nk, [
              e("div", Uk, [
                x[18] || (x[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Bk, a(p.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Ok, [
                (s(!0), o(F, null, ae(p.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  h(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              w(Qs, {
                modelValue: f.value,
                "onUpdate:modelValue": x[1] || (x[1] = ($) => f.value = $),
                class: "allow-issues-toggle"
              }, {
                default: r(() => [...x[19] || (x[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", Ak, [
              w(Xs, {
                modelValue: v.value,
                "onUpdate:modelValue": x[2] || (x[2] = ($) => v.value = $),
                placeholder: b.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
                disabled: !c.value || u.value || b.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: _,
                onSubmit: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", Fk, [
            w(pe, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => i("close"))
            }, {
              default: r(() => [...x[20] || (x[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(pe, {
              variant: f.value ? "danger" : "primary",
              disabled: !c.value || !v.value.trim() || u.value || b.value,
              loading: u.value,
              onClick: _
            }, {
              default: r(() => [
                h(a(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Vk, [
      e("div", Wk, [
        x[22] || (x[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = ($) => i("close"))
        }, [...x[21] || (x[21] = [
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
      e("div", Gk, [
        t.status && c.value ? (s(), o("div", jk, [
          t.status.workflows.new.length ? (s(), o("div", Hk, [
            x[23] || (x[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Kk, [
            x[24] || (x[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", qk, [
            x[25] || (x[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Yk, [
            x[26] || (x[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Xk, [
            x[27] || (x[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          g.value ? d("", !0) : (s(), o("div", Qk, [...x[28] || (x[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Zk, " No changes to commit ")) : (s(), o("div", Jk, " Loading... ")),
        y.value ? (s(), o("div", e_, [
          e("div", t_, [
            x[29] || (x[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", s_, a(p.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", o_, [
            (s(!0), o(F, null, ae(p.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              h(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          w(Qs, {
            modelValue: f.value,
            "onUpdate:modelValue": x[7] || (x[7] = ($) => f.value = $),
            class: "allow-issues-toggle"
          }, {
            default: r(() => [...x[30] || (x[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", n_, [
          w(Xs, {
            modelValue: v.value,
            "onUpdate:modelValue": x[8] || (x[8] = ($) => v.value = $),
            placeholder: b.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || u.value || b.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: _,
            onSubmit: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", a_, [
        w(pe, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => i("close"))
        }, {
          default: r(() => [...x[31] || (x[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(pe, {
          variant: f.value ? "danger" : "primary",
          disabled: !c.value || !v.value.trim() || u.value || b.value,
          loading: u.value,
          onClick: _
        }, {
          default: r(() => [
            h(a(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), wo = /* @__PURE__ */ ne(l_, [["__scopeId", "data-v-d0fe6172"]]), i_ = { class: "modal-header" }, r_ = { class: "modal-body" }, d_ = { class: "switch-message" }, c_ = { class: "switch-details" }, u_ = { class: "modal-actions" }, m_ = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (l, n) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ge(() => {
          }, ["stop"]))
        }, [
          e("div", i_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", r_, [
            e("p", d_, [
              n[6] || (n[6] = h(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = h(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = h("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", c_, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", u_, [
            w(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => l.$emit("close"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
            }, {
              default: r(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), v_ = /* @__PURE__ */ ne(m_, [["__scopeId", "data-v-e9c5253e"]]), f_ = {
  key: 0,
  class: "modal-overlay"
}, g_ = { class: "modal-content" }, p_ = { class: "modal-body" }, h_ = { class: "progress-info" }, y_ = { class: "progress-percentage" }, w_ = { class: "progress-state" }, k_ = { class: "switch-steps" }, __ = { class: "step-icon" }, b_ = { class: "step-label" }, $_ = /* @__PURE__ */ oe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const l = t, n = U(() => {
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
      return l.message || v[l.state] || l.state;
    }), i = U(() => l.state === "complete" ? "success" : l.state === "critical_failure" || l.state === "rolled_back" ? "error" : "default"), m = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = v.findIndex((f) => f.state === l.state);
      return v.map((f, c) => {
        let g = "pending", p = "○";
        return c < u ? (g = "completed", p = "✓") : c === u && (g = "active", p = "⟳"), {
          ...f,
          status: g,
          icon: p
        };
      });
    });
    return (v, u) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", f_, [
        e("div", g_, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", p_, [
            w(po, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", h_, [
              e("div", y_, a(t.progress) + "%", 1),
              e("div", w_, a(n.value), 1)
            ]),
            e("div", k_, [
              (s(!0), o(F, null, ae(m.value, (f) => (s(), o("div", {
                key: f.state,
                class: ue(["switch-step", f.status])
              }, [
                e("span", __, a(f.icon), 1),
                e("span", b_, a(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), C_ = /* @__PURE__ */ ne($_, [["__scopeId", "data-v-768a5078"]]), x_ = { class: "modal-header" }, S_ = { class: "modal-body" }, I_ = {
  key: 0,
  class: "node-section"
}, E_ = { class: "node-list" }, M_ = {
  key: 1,
  class: "node-section"
}, P_ = { class: "node-list" }, T_ = { class: "modal-actions" }, R_ = /* @__PURE__ */ oe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (l, n) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ge(() => {
          }, ["stop"]))
        }, [
          e("div", x_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", S_, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", I_, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", E_, [
                (s(!0), o(F, null, ae(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", M_, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", P_, [
                (s(!0), o(F, null, ae(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", T_, [
            w(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => l.$emit("close"))
            }, {
              default: r(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), z_ = /* @__PURE__ */ ne(R_, [["__scopeId", "data-v-7cad7518"]]), L_ = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfyhub-org",
    title: "Sponsor ComfyHub",
    ariaLabel: "Sponsor ComfyHub on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyHub Discord",
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
    url: "https://github.com/comfyhub-org/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], D_ = "v0.0.3", N_ = "Akatz", U_ = { class: "social-buttons" }, B_ = ["title", "aria-label", "onClick"], O_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, A_ = ["d"], F_ = ["title", "aria-label", "onClick"], V_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, W_ = ["d"], G_ = /* @__PURE__ */ oe({
  __name: "SocialButtons",
  setup(t) {
    function l(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", U_, [
      (s(!0), o(F, null, ae(_e(L_), (m) => (s(), o(F, {
        key: m.id
      }, [
        m.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: m.title,
          "aria-label": m.ariaLabel,
          onClick: (v) => l(m.url)
        }, [
          h(a(m.label) + " ", 1),
          (s(), o("svg", O_, [
            e("path", {
              d: m.iconPath
            }, null, 8, A_)
          ]))
        ], 8, B_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: m.title,
          "aria-label": m.ariaLabel,
          onClick: (v) => l(m.url)
        }, [
          (s(), o("svg", V_, [
            e("path", {
              d: m.iconPath
            }, null, 8, W_)
          ]))
        ], 8, F_))
      ], 64))), 128))
    ]));
  }
}), ko = /* @__PURE__ */ ne(G_, [["__scopeId", "data-v-4f846342"]]), j_ = { class: "footer-info" }, H_ = { class: "version" }, K_ = { class: "made-by" }, q_ = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(t) {
    return (l, n) => (s(), o("div", j_, [
      e("span", H_, a(_e(D_)), 1),
      e("span", K_, [
        n[0] || (n[0] = h(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        h(" by " + a(_e(N_)), 1)
      ])
    ]));
  }
}), _o = /* @__PURE__ */ ne(q_, [["__scopeId", "data-v-8bc3db0a"]]), Y_ = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = k(null);
    async function i() {
      var v;
      await ((v = n.value) == null ? void 0 : v.saveSettings());
    }
    function m() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (v, u) => (s(), E(st, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (f) => v.$emit("close"))
    }, {
      body: r(() => [
        w(mo, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: m
        }, null, 8, ["workspace-path"])
      ]),
      footer: r(() => {
        var f;
        return [
          w(pe, {
            variant: "primary",
            disabled: !((f = n.value) != null && f.hasChanges),
            onClick: i
          }, {
            default: r(() => [...u[2] || (u[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(pe, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (c) => v.$emit("close"))
          }, {
            default: r(() => [...u[3] || (u[3] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), X_ = /* @__PURE__ */ ne(Y_, [["__scopeId", "data-v-fac00ae7"]]), Q_ = { class: "header-actions" }, Z_ = {
  key: 0,
  class: "wizard-step"
}, J_ = { class: "form-field" }, eb = ["placeholder"], tb = {
  key: 0,
  class: "form-error"
}, sb = { class: "form-field form-field--checkbox" }, ob = { class: "form-checkbox" }, nb = {
  key: 0,
  class: "form-field"
}, ab = ["placeholder"], lb = {
  key: 0,
  class: "form-info"
}, ib = {
  key: 1,
  class: "form-suggestion"
}, rb = {
  key: 2,
  class: "form-error"
}, db = {
  key: 3,
  class: "form-info"
}, cb = {
  key: 1,
  class: "wizard-step"
}, ub = {
  key: 0,
  class: "progress-check-loading"
}, mb = {
  key: 0,
  class: "cli-warning"
}, vb = { class: "cli-warning-header" }, fb = {
  key: 1,
  class: "env-landing"
}, gb = { class: "env-list" }, pb = ["value"], hb = { class: "env-name" }, yb = {
  key: 2,
  class: "env-create"
}, wb = { class: "form-field" }, kb = { class: "form-field" }, _b = ["value"], bb = { class: "form-field" }, $b = ["disabled"], Cb = ["value"], xb = { class: "form-field" }, Sb = ["value"], Ib = { class: "form-field form-field--checkbox" }, Eb = { class: "form-checkbox" }, Mb = {
  key: 0,
  class: "form-error"
}, Pb = {
  key: 1,
  class: "env-creating"
}, Tb = { class: "creating-intro" }, Rb = {
  key: 3,
  class: "env-import"
}, zb = { class: "wizard-footer" }, Lb = { class: "wizard-footer-actions" }, Bt = 10, Db = 600 * 1e3, Zs = 1800 * 1e3, Nb = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l, {
      initializeWorkspace: m,
      getInitializeProgress: v,
      validatePath: u,
      createEnvironment: f,
      getCreateProgress: c,
      getImportProgress: g,
      getComfyUIReleases: p
    } = qe(), y = k(n.initialStep || 1), b = k(null), _ = k("landing"), T = k(!1), x = k(!1), $ = k(!1), C = k(!1), D = k(null), S = k(n.initialStep === 2), R = k(n.defaultPath), W = k(!!n.detectedModelsDir), V = k(n.detectedModelsDir || ""), j = k(null), M = k(null), z = k(null), B = k(null), re = k("my-new-env"), Z = k(fo), X = k("latest"), de = k(go), Y = k(!0), N = k(null), L = k(null), P = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ie = k(!1), ee = k(!1), Ce = k(!1), Ie = k({ progress: 0, message: "" }), ze = k({ progress: 0, message: "" }), je = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ce = k(0), ye = k(null), Pe = k(0), Q = k(null), le = U(() => {
      var I, A;
      const ve = (I = R.value) == null ? void 0 : I.trim(), K = !j.value, q = !W.value || !M.value && ((A = V.value) == null ? void 0 : A.trim());
      return ve && K && q;
    }), we = U(() => {
      var ve;
      return (ve = re.value) == null ? void 0 : ve.trim();
    }), Ae = U(() => !!(y.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), ot = U(() => L.value || n.workspacePath || null);
    async function it() {
      var ve;
      if (j.value = null, !!((ve = R.value) != null && ve.trim()))
        try {
          const K = await u({ path: R.value, type: "workspace" });
          K.valid || (j.value = K.error || "Invalid path");
        } catch (K) {
          j.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ee() {
      var ve;
      if (M.value = null, z.value = null, B.value = null, !!((ve = V.value) != null && ve.trim()))
        try {
          const K = await u({ path: V.value, type: "models" });
          if (K.valid)
            B.value = K.model_count ?? null;
          else if (M.value = K.error || "Invalid path", K.suggestion) {
            z.value = K.suggestion, V.value = K.suggestion, M.value = null;
            const q = await u({ path: K.suggestion, type: "models" });
            q.valid && (B.value = q.model_count ?? null);
          }
        } catch (K) {
          M.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function fe() {
      var ve, K, q, I, A;
      if (j.value = null, M.value = null, await it(), (ve = j.value) != null && ve.includes("already exists")) {
        j.value = null, L.value = ((K = R.value) == null ? void 0 : K.trim()) || n.defaultPath, y.value = 2, me();
        return;
      }
      if (!j.value && !(W.value && ((q = V.value) != null && q.trim()) && (await Ee(), M.value))) {
        ee.value = !0;
        try {
          await m({
            workspace_path: ((I = R.value) == null ? void 0 : I.trim()) || n.defaultPath,
            models_directory: W.value && ((A = V.value) == null ? void 0 : A.trim()) || null
          }), ce.value = 0, ye.value = Date.now();
          const te = setInterval(async () => {
            var $e;
            if (ye.value && Date.now() - ye.value > Db) {
              clearInterval(te), ee.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ye = await v();
              if (ce.value = 0, Ye.state === "idle" && ee.value) {
                clearInterval(te), ee.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ie.value = { progress: Ye.progress, message: Ye.message }, Ye.state === "complete" ? (clearInterval(te), ee.value = !1, L.value = (($e = R.value) == null ? void 0 : $e.trim()) || n.defaultPath, y.value = 2, me()) : Ye.state === "error" && (clearInterval(te), ee.value = !1, j.value = Ye.error || "Workspace creation failed");
            } catch (Ye) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${Bt}:`, Ye), ce.value >= Bt && (clearInterval(te), ee.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (te) {
          ee.value = !1, j.value = te instanceof Error ? te.message : "Failed to create workspace";
        }
      }
    }
    async function J() {
      Ce.value = !0, N.value = null;
      try {
        const ve = {
          name: re.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: X.value,
          torch_backend: de.value,
          switch_after: Y.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await f(ve)).status === "started") {
          Pe.value = 0, Q.value = Date.now();
          const q = setInterval(async () => {
            if (Q.value && Date.now() - Q.value > Zs) {
              clearInterval(q), Ce.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const I = await c();
              if (Pe.value = 0, I.state === "idle" && Ce.value) {
                clearInterval(q), Ce.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ze.value = {
                progress: I.progress ?? 0,
                message: I.message,
                phase: I.phase
              }, I.state === "complete") {
                clearInterval(q), Ce.value = !1;
                const A = I.environment_name || ve.name;
                Y.value ? i("complete", A, L.value) : (_.value = "landing", i("environment-created-no-switch", A));
              } else I.state === "error" && (clearInterval(q), Ce.value = !1, N.value = I.error || "Environment creation failed");
            } catch (I) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${Bt}:`, I), Pe.value >= Bt && (clearInterval(q), Ce.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        Ce.value = !1, N.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function me() {
      ie.value = !0;
      try {
        P.value = await p();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ie.value = !1;
      }
    }
    function nt() {
      b.value && i("switch-environment", b.value, L.value);
    }
    function xe() {
      _.value === "create" || _.value === "import" ? _.value = "landing" : y.value === 2 && n.setupState === "no_workspace" && (y.value = 1);
    }
    function Xe(ve, K) {
      x.value = !1, K ? i("complete", ve, L.value) : (i("environment-created-no-switch", ve), _.value = "landing");
    }
    function ct() {
    }
    He(async () => {
      if (n.detectedModelsDir && (V.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), y.value === 2) {
        me();
        const ve = setTimeout(() => {
          S.value = !1;
        }, 3e3);
        await ut(), clearTimeout(ve), S.value = !1;
      }
    });
    async function ut() {
      try {
        const ve = await c();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), _.value = "create", Ce.value = !0, re.value = ve.environment_name || "my-new-env", ze.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Fe();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await g();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), D.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, C.value = !0, _.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Fe() {
      Pe.value = 0, Q.value = Date.now();
      let ve = null;
      const K = async () => {
        if (Q.value && Date.now() - Q.value > Zs)
          return ve && clearInterval(ve), Ce.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const I = await c();
          if (Pe.value = 0, I.state === "idle" && Ce.value)
            return ve && clearInterval(ve), Ce.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (ze.value = {
            progress: I.progress ?? 0,
            message: I.message,
            phase: I.phase
          }, I.state === "complete") {
            ve && clearInterval(ve), Ce.value = !1;
            const A = I.environment_name || re.value;
            return i("complete", A, L.value), !1;
          } else if (I.state === "error")
            return ve && clearInterval(ve), Ce.value = !1, N.value = I.error || "Environment creation failed", !1;
          return !0;
        } catch (I) {
          return Pe.value++, console.warn(`Polling failure ${Pe.value}/${Bt}:`, I), Pe.value >= Bt ? (ve && clearInterval(ve), Ce.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ve = setInterval(async () => {
        !await K() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, K) => (s(), o(F, null, [
      w(st, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (q) => ve.$emit("close"))
      }, {
        header: r(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", Q_, [
            w(ko),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            Ae.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (q) => T.value = !0)
            }, [...K[17] || (K[17] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                e("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : d("", !0),
            e("button", {
              class: "icon-btn",
              onClick: K[1] || (K[1] = (q) => ve.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
        body: r(() => {
          var q;
          return [
            y.value === 1 ? (s(), o("div", Z_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", J_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (I) => R.value = I),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, eb), [
                  [Lt, R.value]
                ]),
                j.value ? (s(), o("p", tb, a(j.value), 1)) : d("", !0)
              ]),
              e("div", sb, [
                e("label", ob, [
                  Oe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (I) => W.value = I)
                  }, null, 512), [
                    [us, W.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              W.value ? (s(), o("div", nb, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (I) => V.value = I),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, ab), [
                  [Lt, V.value]
                ]),
                t.detectedModelsDir && !V.value ? (s(), o("p", lb, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                z.value ? (s(), o("p", ib, " Did you mean: " + a(z.value), 1)) : d("", !0),
                M.value ? (s(), o("p", rb, a(M.value), 1)) : d("", !0),
                B.value !== null && !M.value ? (s(), o("p", db, " Found " + a(B.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              ee.value ? (s(), E(fs, {
                key: 1,
                progress: Ie.value.progress,
                message: Ie.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            y.value === 2 ? (s(), o("div", cb, [
              S.value ? (s(), o("div", ub, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(F, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", mb, [
                  e("div", vb, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (I) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
                      e("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  K[29] || (K[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : d("", !0),
                _.value === "landing" ? (s(), o("div", fb, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (I) => _.value = "create")
                  }, [...K[31] || (K[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (I) => {
                      C.value = !1, _.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (q = n.existingEnvironments) != null && q.length ? (s(), o(F, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", gb, [
                      (s(!0), o(F, null, ae(n.existingEnvironments, (I) => (s(), o("label", {
                        key: I,
                        class: ue(["env-option", { selected: b.value === I }])
                      }, [
                        Oe(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: I,
                          "onUpdate:modelValue": K[8] || (K[8] = (A) => b.value = A)
                        }, null, 8, pb), [
                          [Ft, b.value]
                        ]),
                        e("span", hb, a(I), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : d("", !0)
                ])) : _.value === "create" ? (s(), o("div", yb, [
                  Ce.value ? (s(), o("div", Pb, [
                    e("p", Tb, [
                      K[41] || (K[41] = h(" Creating environment ", -1)),
                      e("strong", null, a(re.value), 1),
                      K[42] || (K[42] = h("... ", -1))
                    ]),
                    w(fs, {
                      progress: ze.value.progress,
                      message: ze.value.message,
                      "current-phase": ze.value.phase,
                      "show-steps": !0,
                      steps: je
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(F, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", wb, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Oe(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (I) => re.value = I),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Lt, re.value]
                      ])
                    ]),
                    e("div", kb, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (I) => Z.value = I),
                        class: "form-select"
                      }, [
                        (s(!0), o(F, null, ae(_e(vo), (I) => (s(), o("option", {
                          key: I,
                          value: I
                        }, a(I), 9, _b))), 128))
                      ], 512), [
                        [Tt, Z.value]
                      ])
                    ]),
                    e("div", bb, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (I) => X.value = I),
                        class: "form-select",
                        disabled: ie.value
                      }, [
                        (s(!0), o(F, null, ae(P.value, (I) => (s(), o("option", {
                          key: I.tag_name,
                          value: I.tag_name
                        }, a(I.name), 9, Cb))), 128))
                      ], 8, $b), [
                        [Tt, X.value]
                      ])
                    ]),
                    e("div", xb, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (I) => de.value = I),
                        class: "form-select"
                      }, [
                        (s(!0), o(F, null, ae(_e(Ns), (I) => (s(), o("option", {
                          key: I,
                          value: I
                        }, a(I) + a(I === "auto" ? " (detect GPU)" : ""), 9, Sb))), 128))
                      ], 512), [
                        [Tt, de.value]
                      ])
                    ]),
                    e("div", Ib, [
                      e("label", Eb, [
                        Oe(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (I) => Y.value = I)
                        }, null, 512), [
                          [us, Y.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (s(), o("div", Mb, a(N.value), 1)) : d("", !0)
                  ], 64))
                ])) : _.value === "import" ? (s(), o("div", Rb, [
                  w(yo, {
                    "workspace-path": L.value,
                    "resume-import": C.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: Xe,
                    onImportStarted: K[14] || (K[14] = (I) => x.value = !0),
                    onSourceCleared: ct
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : d("", !0)
              ], 64))
            ])) : d("", !0)
          ];
        }),
        footer: r(() => [
          e("div", zb, [
            w(_o),
            e("div", Lb, [
              y.value === 1 ? (s(), E(pe, {
                key: 0,
                variant: "primary",
                disabled: !le.value || ee.value,
                onClick: fe
              }, {
                default: r(() => [
                  h(a(ee.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y.value === 2 ? (s(), o(F, { key: 1 }, [
                !Ce.value && !x.value && (_.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (s(), E(pe, {
                  key: 0,
                  variant: "secondary",
                  onClick: xe
                }, {
                  default: r(() => [...K[44] || (K[44] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : d("", !0),
                _.value === "create" ? (s(), E(pe, {
                  key: 1,
                  variant: "primary",
                  disabled: !we.value || Ce.value,
                  onClick: J
                }, {
                  default: r(() => [
                    h(a(Ce.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0),
                _.value === "landing" && b.value ? (s(), E(pe, {
                  key: 2,
                  variant: "primary",
                  onClick: nt
                }, {
                  default: r(() => [
                    h(" Switch to " + a(b.value), 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ], 64)) : d("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      T.value ? (s(), E(X_, {
        key: 0,
        "workspace-path": ot.value,
        onClose: K[16] || (K[16] = (q) => T.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), Ub = /* @__PURE__ */ ne(Nb, [["__scopeId", "data-v-9a9aadc0"]]), Bb = { class: "comfygit-panel" }, Ob = { class: "panel-header" }, Ab = { class: "header-left" }, Fb = {
  key: 0,
  class: "header-info"
}, Vb = { class: "header-actions" }, Wb = { class: "env-switcher" }, Gb = {
  key: 0,
  class: "header-info"
}, jb = { class: "branch-name" }, Hb = { class: "panel-main" }, Kb = { class: "sidebar" }, qb = { class: "sidebar-content" }, Yb = { class: "sidebar-section" }, Xb = { class: "sidebar-section" }, Qb = { class: "sidebar-section" }, Zb = { class: "sidebar-footer" }, Jb = { class: "content-area" }, e2 = {
  key: 0,
  class: "error-message"
}, t2 = {
  key: 1,
  class: "loading"
}, s2 = { class: "dialog-content env-selector-dialog" }, o2 = { class: "dialog-header" }, n2 = { class: "dialog-body" }, a2 = { class: "env-list" }, l2 = { class: "env-info" }, i2 = { class: "env-name-row" }, r2 = { class: "env-indicator" }, d2 = { class: "env-name" }, c2 = {
  key: 0,
  class: "env-branch"
}, u2 = {
  key: 1,
  class: "current-label"
}, m2 = { class: "env-stats" }, v2 = ["onClick"], f2 = { class: "toast-container" }, g2 = { class: "toast-message" }, p2 = /* @__PURE__ */ oe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: l }) {
    const n = t, i = l, {
      getStatus: m,
      getHistory: v,
      getBranches: u,
      checkout: f,
      createBranch: c,
      switchBranch: g,
      deleteBranch: p,
      getEnvironments: y,
      switchEnvironment: b,
      getSwitchProgress: _,
      deleteEnvironment: T,
      syncEnvironmentManually: x,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = qe(), D = ao(), S = k(null), R = k([]), W = k([]), V = k([]), j = U(() => V.value.find((G) => G.is_current)), M = k(null), z = k(!1), B = k(1), re = U(() => {
      var G;
      return ((G = M.value) == null ? void 0 : G.state) || "managed";
    }), Z = k(!1), X = k(null), de = k(null), Y = k(!1), N = k(null), L = k(null), P = k(null), ie = k(!1), ee = k(!1), Ce = k(""), Ie = k(null), ze = k({ state: "idle", progress: 0, message: "" });
    let je = null, ce = null;
    const ye = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Pe = n.initialView ? ye[n.initialView] : null, Q = k((Pe == null ? void 0 : Pe.view) ?? "status"), le = k((Pe == null ? void 0 : Pe.section) ?? "this-env");
    function we(G, O) {
      Q.value = G, le.value = O;
    }
    function Ae(G) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      he && we(he.view, he.section);
    }
    function ot() {
      we("branches", "this-env");
    }
    function it() {
      i("close"), setTimeout(() => {
        var O;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const he of G)
          if (((O = he.textContent) == null ? void 0 : O.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ee = k(null), fe = k(!1), J = k(!1), me = k([]);
    let nt = 0;
    function xe(G, O = "info", he = 3e3) {
      const Te = ++nt;
      return me.value.push({ id: Te, message: G, type: O }), he > 0 && setTimeout(() => {
        me.value = me.value.filter((Ke) => Ke.id !== Te);
      }, he), Te;
    }
    function Xe(G) {
      me.value = me.value.filter((O) => O.id !== G);
    }
    function ct(G, O) {
      xe(G, O);
    }
    const ut = U(() => {
      if (!S.value) return "neutral";
      const G = S.value.workflows, O = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? O ? "warning" : "success" : "error";
    });
    U(() => S.value ? ut.value === "success" ? "All synced" : ut.value === "warning" ? "Uncommitted changes" : ut.value === "error" ? "Not synced" : "" : "");
    async function Fe() {
      Z.value = !0, X.value = null;
      try {
        const [G, O, he, Te] = await Promise.all([
          m(!0),
          v(),
          u(),
          y()
        ]);
        S.value = G, R.value = O.commits, W.value = he.branches, V.value = Te, i("statusUpdate", G), N.value && await N.value.loadWorkflows(!0);
      } catch (G) {
        X.value = G instanceof Error ? G.message : "Failed to load status", S.value = null, R.value = [], W.value = [];
      } finally {
        Z.value = !1;
      }
    }
    function ve(G) {
      de.value = G;
    }
    async function K(G) {
      var he;
      de.value = null;
      const O = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Ee.value = {
        title: O ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: O ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((he = G.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: O ? As() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: O ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: O,
        onConfirm: async () => {
          var Ze;
          Ee.value = null, $e();
          const Te = xe(`Checking out ${G.short_hash || ((Ze = G.hash) == null ? void 0 : Ze.slice(0, 7))}...`, "info", 0), Ke = await f(G.hash, O);
          Xe(Te), Ke.status === "success" ? xe("Restarting ComfyUI...", "success") : xe(Ke.message || "Checkout failed", "error");
        }
      };
    }
    async function q(G) {
      const O = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Ee.value = {
        title: O ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: O ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: O ? As() : void 0,
        warning: O ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: O ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, $e();
          const he = xe(`Switching to ${G}...`, "info", 0), Te = await g(G, O);
          Xe(he), Te.status === "success" ? xe("Restarting ComfyUI...", "success") : xe(Te.message || "Branch switch failed", "error");
        }
      };
    }
    async function I(G) {
      const O = xe(`Creating branch ${G}...`, "info", 0), he = await c(G);
      Xe(O), he.status === "success" ? (xe(`Branch "${G}" created`, "success"), await Fe()) : xe(he.message || "Failed to create branch", "error");
    }
    async function A(G, O = !1) {
      const he = async (Te) => {
        var Ze;
        const Ke = xe(`Deleting branch ${G}...`, "info", 0);
        try {
          const xt = await p(G, Te);
          Xe(Ke), xt.status === "success" ? (xe(`Branch "${G}" deleted`, "success"), await Fe()) : (Ze = xt.message) != null && Ze.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await he(!0);
            }
          } : xe(xt.message || "Failed to delete branch", "error");
        } catch (xt) {
          Xe(Ke);
          const jt = xt instanceof Error ? xt.message : "Failed to delete branch";
          jt.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await he(!0);
            }
          } : xe(jt, "error");
        }
      };
      Ee.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, await he(O);
        }
      };
    }
    async function te(G) {
      de.value = null;
      const O = prompt("Enter branch name:");
      if (O) {
        const he = xe(`Creating branch ${O}...`, "info", 0), Te = await c(O, G.hash);
        Xe(he), Te.status === "success" ? (xe(`Branch "${O}" created from ${G.short_hash}`, "success"), await Fe()) : xe(Te.message || "Failed to create branch", "error");
      }
    }
    function $e() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ye() {
      Ee.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          Ee.value = null, $e(), xe("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function _t() {
      Ee.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          Ee.value = null, xe("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function mt(G, O) {
      Y.value = !1, Ce.value = G, Ie.value = O || null, ie.value = !0;
    }
    async function Nt() {
      ie.value = !1, ee.value = !0, $e(), ze.value = {
        progress: 10,
        state: bt(10),
        message: Ut(10)
      };
      try {
        await b(Ce.value, Ie.value || void 0), ys(), ws();
      } catch (G) {
        $t(), ee.value = !1, xe(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), ze.value = { state: "idle", progress: 0, message: "" }, Ie.value = null;
      }
    }
    function bt(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function Ut(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[bt(G)] || "";
    }
    function ys() {
      if (ce) return;
      let G = 10;
      const O = 60, he = 5e3, Te = 100, Ke = (O - G) / (he / Te);
      ce = window.setInterval(() => {
        if (G += Ke, G >= O && (G = O, $t()), ze.value.progress < O) {
          const Ze = Math.floor(G);
          ze.value = {
            progress: Ze,
            state: bt(Ze),
            message: Ut(Ze)
          };
        }
      }, Te);
    }
    function $t() {
      ce && (clearInterval(ce), ce = null);
    }
    function ws() {
      je || (je = window.setInterval(async () => {
        try {
          let G = await D.getStatus();
          if ((!G || G.state === "idle") && (G = await _()), !G)
            return;
          const O = G.progress || 0;
          O >= 60 && $t();
          const he = Math.max(O, ze.value.progress), Te = G.state && G.state !== "idle" && G.state !== "unknown", Ke = Te ? G.state : bt(he), Ze = Te && G.message || Ut(he);
          ze.value = {
            state: Ke,
            progress: he,
            message: Ze
          }, G.state === "complete" ? ($t(), Gt(), ee.value = !1, xe(`✓ Switched to ${Ce.value}`, "success"), await Fe(), Ce.value = "") : G.state === "rolled_back" ? ($t(), Gt(), ee.value = !1, xe("Switch failed, restored previous environment", "warning"), Ce.value = "") : G.state === "critical_failure" && ($t(), Gt(), ee.value = !1, xe(`Critical error during switch: ${G.message}`, "error"), Ce.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Gt() {
      $t(), je && (clearInterval(je), je = null);
    }
    function ks() {
      var G;
      ie.value = !1, Ce.value = "", (G = M.value) != null && G.state && M.value.state !== "managed" && (B.value = M.value.state === "no_workspace" ? 1 : 2, z.value = !0);
    }
    async function _s(G) {
      fe.value = !1, await Fe(), xe(G.message, G.success ? "success" : "error");
    }
    async function bs() {
      J.value = !1;
      const G = xe("Syncing environment...", "info", 0);
      try {
        const O = await x("skip", !0);
        if (Xe(G), O.status === "success") {
          const he = [];
          O.nodes_installed.length && he.push(`${O.nodes_installed.length} installed`), O.nodes_removed.length && he.push(`${O.nodes_removed.length} removed`);
          const Te = he.length ? `: ${he.join(", ")}` : "";
          xe(`✓ Environment synced${Te}`, "success"), await Fe();
        } else {
          const he = O.errors.length ? O.errors.join("; ") : O.message;
          xe(`Sync failed: ${he}`, "error");
        }
      } catch (O) {
        Xe(G), xe(`Sync error: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
      }
    }
    async function $s(G) {
      var O;
      try {
        const he = await $(G);
        he.failed.length === 0 ? xe(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : xe(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await Fe();
      } catch (he) {
        xe(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (O = P.value) == null || O.resetRepairingState();
      }
    }
    async function os() {
      var O, he;
      const G = xe("Repairing environment...", "info", 0);
      try {
        const Te = await x("skip", !0);
        if (Xe(G), Te.status === "success") {
          const Ke = [];
          Te.nodes_installed.length && Ke.push(`${Te.nodes_installed.length} installed`), Te.nodes_removed.length && Ke.push(`${Te.nodes_removed.length} removed`);
          const Ze = Ke.length ? `: ${Ke.join(", ")}` : "";
          xe(`✓ Environment repaired${Ze}`, "success"), (O = P.value) == null || O.closeDetailModal(), await Fe();
        } else {
          const Ke = Te.errors.length ? Te.errors.join(", ") : Te.message || "Unknown error";
          xe(`Repair failed: ${Ke}`, "error");
        }
      } catch (Te) {
        Xe(G), xe(`Repair error: ${Te instanceof Error ? Te.message : "Unknown error"}`, "error");
      } finally {
        (he = P.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function Cs(G, O) {
      xe(`Environment '${G}' created`, "success"), await Fe(), L.value && await L.value.loadEnvironments(), O && await mt(G);
    }
    async function H(G) {
      var O;
      if (((O = j.value) == null ? void 0 : O.name) === G) {
        xe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ee.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ee.value = null;
          try {
            const he = await T(G);
            he.status === "success" ? (xe(`Environment "${G}" deleted`, "success"), await Fe(), L.value && await L.value.loadEnvironments()) : xe(he.message || "Failed to delete environment", "error");
          } catch (he) {
            xe(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ge(G, O) {
      z.value = !1;
      try {
        M.value = await C();
      } catch {
      }
      await mt(G, O);
    }
    function Ue() {
      z.value = !1, i("close");
    }
    async function Ct(G, O) {
      await mt(G, O);
    }
    async function Pt(G) {
      await Fe(), await mt(G);
    }
    async function Io(G) {
      M.value = await C(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function Eo() {
      we("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = L.value) == null || G.openCreateModal();
      }, 100);
    }
    function As() {
      if (!S.value) return [];
      const G = [], O = S.value.workflows;
      return O.new.length && G.push(`${O.new.length} new workflow(s)`), O.modified.length && G.push(`${O.modified.length} modified workflow(s)`), O.deleted.length && G.push(`${O.deleted.length} deleted workflow(s)`), G;
    }
    return He(async () => {
      try {
        if (M.value = await C(), M.value.state === "no_workspace") {
          z.value = !0, B.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          z.value = !0, B.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          z.value = !0, B.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await Fe();
    }), (G, O) => {
      var he, Te, Ke, Ze, xt, jt, Fs, Vs, Ws, Gs, js, Hs;
      return s(), o("div", Bb, [
        e("div", Ob, [
          e("div", Ab, [
            O[31] || (O[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", Fb)) : d("", !0)
          ]),
          e("div", Vb, [
            w(ko),
            O[34] || (O[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: ue(["icon-btn", { spinning: Z.value }]),
              onClick: Fe,
              title: "Refresh"
            }, [...O[32] || (O[32] = [
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
              onClick: O[0] || (O[0] = (Se) => i("close")),
              title: "Close"
            }, [...O[33] || (O[33] = [
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
        e("div", Wb, [
          e("div", { class: "env-switcher-header" }, [
            O[35] || (O[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ye
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: _t
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: O[1] || (O[1] = (Se) => we("environments", "all-envs"))
          }, [
            S.value ? (s(), o("div", Gb, [
              e("span", null, a(((he = j.value) == null ? void 0 : he.name) || ((Te = S.value) == null ? void 0 : Te.environment) || "Loading..."), 1),
              e("span", jb, "(" + a(S.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            O[36] || (O[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Hb, [
          e("div", Kb, [
            e("div", qb, [
              e("div", Yb, [
                O[37] || (O[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "status" && le.value === "this-env" }]),
                  onClick: O[2] || (O[2] = (Se) => we("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: O[3] || (O[3] = (Se) => we("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: O[4] || (O[4] = (Se) => we("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "branches" }]),
                  onClick: O[5] || (O[5] = (Se) => we("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "history" }]),
                  onClick: O[6] || (O[6] = (Se) => we("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: O[7] || (O[7] = (Se) => we("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "debug-env" }]),
                  onClick: O[8] || (O[8] = (Se) => we("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              O[40] || (O[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Xb, [
                O[38] || (O[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: O[9] || (O[9] = (Se) => we("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: O[10] || (O[10] = (Se) => we("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: O[11] || (O[11] = (Se) => we("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "debug-workspace" }]),
                  onClick: O[12] || (O[12] = (Se) => we("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              O[41] || (O[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Qb, [
                O[39] || (O[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "deploy" }]),
                  onClick: O[13] || (O[13] = (Se) => we("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "export" }]),
                  onClick: O[14] || (O[14] = (Se) => we("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "import" }]),
                  onClick: O[15] || (O[15] = (Se) => we("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: Q.value === "remotes" }]),
                  onClick: O[16] || (O[16] = (Se) => we("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", Zb, [
              w(_o)
            ])
          ]),
          e("div", Jb, [
            X.value ? (s(), o("div", e2, a(X.value), 1)) : !S.value && Q.value === "status" ? (s(), o("div", t2, " Loading status... ")) : (s(), o(F, { key: 2 }, [
              Q.value === "status" ? (s(), E(cl, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: P,
                status: S.value,
                "setup-state": re.value,
                onSwitchBranch: ot,
                onCommitChanges: O[17] || (O[17] = (Se) => fe.value = !0),
                onSyncEnvironment: O[18] || (O[18] = (Se) => J.value = !0),
                onViewWorkflows: O[19] || (O[19] = (Se) => we("workflows", "this-env")),
                onViewHistory: O[20] || (O[20] = (Se) => we("history", "this-env")),
                onViewDebug: O[21] || (O[21] = (Se) => we("debug-env", "this-env")),
                onViewNodes: O[22] || (O[22] = (Se) => we("nodes", "this-env")),
                onRepairMissingModels: $s,
                onRepairEnvironment: os,
                onStartSetup: O[23] || (O[23] = (Se) => z.value = !0),
                onViewEnvironments: O[24] || (O[24] = (Se) => we("environments", "all-envs")),
                onCreateEnvironment: Eo
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (s(), E(Um, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: Fe
              }, null, 512)) : Q.value === "models-env" ? (s(), E(wv, {
                key: 2,
                onNavigate: Ae
              })) : Q.value === "branches" ? (s(), E(xl, {
                key: 3,
                branches: W.value,
                current: ((Ke = S.value) == null ? void 0 : Ke.branch) || null,
                onSwitch: q,
                onCreate: I,
                onDelete: A
              }, null, 8, ["branches", "current"])) : Q.value === "history" ? (s(), E(Nl, {
                key: 4,
                commits: R.value,
                onSelect: ve,
                onCheckout: K
              }, null, 8, ["commits"])) : Q.value === "nodes" ? (s(), E(pf, {
                key: 5,
                "version-mismatches": ((xt = (Ze = S.value) == null ? void 0 : Ze.comparison) == null ? void 0 : xt.version_mismatches) || [],
                onOpenNodeManager: it,
                onRepairEnvironment: os,
                onToast: ct
              }, null, 8, ["version-mismatches"])) : Q.value === "debug-env" ? (s(), E($h, { key: 6 })) : Q.value === "environments" ? (s(), E(S1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: mt,
                onCreated: Cs,
                onDelete: H
              }, null, 512)) : Q.value === "model-index" ? (s(), E(Ov, {
                key: 8,
                onRefresh: Fe
              })) : Q.value === "settings" ? (s(), E(wh, { key: 9 })) : Q.value === "debug-workspace" ? (s(), E(_h, { key: 10 })) : Q.value === "deploy" ? (s(), E(Qw, {
                key: 11,
                onToast: ct
              })) : Q.value === "export" ? (s(), E(oy, { key: 12 })) : Q.value === "import" ? (s(), E(X0, {
                key: 13,
                onImportCompleteSwitch: Pt
              })) : Q.value === "remotes" ? (s(), E(Zp, {
                key: 14,
                onToast: ct
              })) : d("", !0)
            ], 64))
          ])
        ]),
        de.value ? (s(), E(gk, {
          key: 0,
          commit: de.value,
          onClose: O[25] || (O[25] = (Se) => de.value = null),
          onCheckout: K,
          onCreateBranch: te
        }, null, 8, ["commit"])) : d("", !0),
        Ee.value ? (s(), E(co, {
          key: 1,
          title: Ee.value.title,
          message: Ee.value.message,
          details: Ee.value.details,
          warning: Ee.value.warning,
          confirmLabel: Ee.value.confirmLabel,
          cancelLabel: Ee.value.cancelLabel,
          secondaryLabel: Ee.value.secondaryLabel,
          secondaryAction: Ee.value.secondaryAction,
          destructive: Ee.value.destructive,
          onConfirm: Ee.value.onConfirm,
          onCancel: O[26] || (O[26] = (Se) => Ee.value = null),
          onSecondary: Ee.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        w(v_, {
          show: ie.value,
          "from-environment": ((jt = j.value) == null ? void 0 : jt.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Nt,
          onClose: ks
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && S.value ? (s(), E(wo, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: O[27] || (O[27] = (Se) => fe.value = !1),
          onCommitted: _s
        }, null, 8, ["status"])) : d("", !0),
        J.value && S.value ? (s(), E(z_, {
          key: 3,
          show: J.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: bs,
          onClose: O[28] || (O[28] = (Se) => J.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        w(C_, {
          show: ee.value,
          state: ze.value.state,
          progress: ze.value.progress,
          message: ze.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Y.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: O[30] || (O[30] = Ge((Se) => Y.value = !1, ["self"]))
        }, [
          e("div", s2, [
            e("div", o2, [
              O[43] || (O[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: O[29] || (O[29] = (Se) => Y.value = !1)
              }, [...O[42] || (O[42] = [
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
            e("div", n2, [
              O[44] || (O[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", a2, [
                (s(!0), o(F, null, ae(V.value, (Se) => (s(), o("div", {
                  key: Se.name,
                  class: ue(["env-item", { current: Se.is_current }])
                }, [
                  e("div", l2, [
                    e("div", i2, [
                      e("span", r2, a(Se.is_current ? "●" : "○"), 1),
                      e("span", d2, a(Se.name), 1),
                      Se.current_branch ? (s(), o("span", c2, "(" + a(Se.current_branch) + ")", 1)) : d("", !0),
                      Se.is_current ? (s(), o("span", u2, "CURRENT")) : d("", !0)
                    ]),
                    e("div", m2, a(Se.workflow_count) + " workflows • " + a(Se.node_count) + " nodes ", 1)
                  ]),
                  Se.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (q$) => mt(Se.name)
                  }, " SWITCH ", 8, v2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        z.value ? (s(), E(Ub, {
          key: 5,
          "default-path": ((Fs = M.value) == null ? void 0 : Fs.default_path) || "~/comfygit",
          "detected-models-dir": ((Vs = M.value) == null ? void 0 : Vs.detected_models_dir) || null,
          "initial-step": B.value,
          "existing-environments": ((Ws = M.value) == null ? void 0 : Ws.environments) || [],
          "cli-installed": ((Gs = M.value) == null ? void 0 : Gs.cli_installed) ?? !0,
          "setup-state": ((js = M.value) == null ? void 0 : js.state) || "no_workspace",
          "workspace-path": ((Hs = M.value) == null ? void 0 : Hs.workspace_path) || null,
          onComplete: ge,
          onClose: Ue,
          onSwitchEnvironment: Ct,
          onEnvironmentCreatedNoSwitch: Io
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", f2, [
          w(zo, { name: "toast" }, {
            default: r(() => [
              (s(!0), o(F, null, ae(me.value, (Se) => (s(), o("div", {
                key: Se.id,
                class: ue(["toast", Se.type])
              }, [
                e("span", g2, a(Se.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), h2 = /* @__PURE__ */ ne(p2, [["__scopeId", "data-v-70f0bf8a"]]), y2 = { class: "item-header" }, w2 = { class: "item-info" }, k2 = { class: "filename" }, _2 = { class: "metadata" }, b2 = { class: "size" }, $2 = {
  key: 0,
  class: "type"
}, C2 = { class: "item-actions" }, x2 = {
  key: 0,
  class: "progress-section"
}, S2 = { class: "progress-bar" }, I2 = { class: "progress-stats" }, E2 = { class: "downloaded" }, M2 = { class: "speed" }, P2 = {
  key: 0,
  class: "eta"
}, T2 = {
  key: 1,
  class: "status-msg paused"
}, R2 = {
  key: 2,
  class: "status-msg queued"
}, z2 = {
  key: 3,
  class: "status-msg completed"
}, L2 = {
  key: 4,
  class: "status-msg failed"
}, D2 = {
  key: 0,
  class: "retries"
}, N2 = /* @__PURE__ */ oe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: l }) {
    const n = l;
    function i(u) {
      if (u === 0) return "?";
      const f = u / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function m(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const f = Math.floor(u / 60);
      return f < 60 ? `${f}m` : `${Math.floor(f / 60)}h ${f % 60}m`;
    }
    return (u, f) => (s(), o("div", {
      class: ue(["download-item", `status-${t.item.status}`])
    }, [
      e("div", y2, [
        e("div", w2, [
          e("div", k2, a(t.item.filename), 1),
          e("div", _2, [
            e("span", b2, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", $2, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", C2, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: f[0] || (f[0] = (c) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: f[1] || (f[1] = (c) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: f[2] || (f[2] = (c) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: f[3] || (f[3] = (c) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", x2, [
        e("div", S2, [
          e("div", {
            class: "progress-fill",
            style: It({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", I2, [
          e("span", E2, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", M2, a(m(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", P2, a(v(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", T2, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", R2, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", z2, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", L2, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", D2, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ ne(N2, [["__scopeId", "data-v-2110df65"]]), U2 = { class: "queue-title" }, B2 = { class: "count" }, O2 = { class: "queue-actions" }, A2 = { class: "action-label" }, F2 = {
  key: 0,
  class: "overall-progress"
}, V2 = { class: "progress-bar" }, W2 = {
  key: 0,
  class: "current-mini"
}, G2 = { class: "filename" }, j2 = { class: "speed" }, H2 = {
  key: 1,
  class: "queue-content"
}, K2 = {
  key: 0,
  class: "section"
}, q2 = {
  key: 1,
  class: "section"
}, Y2 = { class: "section-header" }, X2 = { class: "section-label paused" }, Q2 = { class: "items-list" }, Z2 = {
  key: 2,
  class: "section"
}, J2 = { class: "section-header" }, e$ = { class: "section-label" }, t$ = { class: "items-list" }, s$ = {
  key: 3,
  class: "section"
}, o$ = { class: "section-header" }, n$ = { class: "section-label" }, a$ = { class: "items-list" }, l$ = {
  key: 4,
  class: "section"
}, i$ = { class: "section-header" }, r$ = { class: "section-label failed" }, d$ = { class: "items-list" }, c$ = /* @__PURE__ */ oe({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: l,
      currentDownload: n,
      queuedItems: i,
      completedItems: m,
      failedItems: v,
      pausedItems: u,
      hasItems: f,
      activeCount: c,
      cancelDownload: g,
      retryDownload: p,
      resumeDownload: y,
      resumeAllPaused: b,
      removeItem: _,
      clearCompleted: T
    } = ts(), x = k(!1);
    let $ = null;
    St(
      () => ({
        active: c.value,
        failed: v.value.length,
        paused: u.value.length,
        completed: m.value.length
      }),
      (R, W) => {
        $ && (clearTimeout($), $ = null);
        const V = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, j = W && (W.active > 0 || W.paused > 0);
        V && j && ($ = setTimeout(() => {
          T(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = U(() => {
      var V;
      if (l.items.length === 0) return 0;
      const R = m.value.length, W = ((V = n.value) == null ? void 0 : V.progress) || 0;
      return Math.round((R + W / 100) / l.items.length * 100);
    });
    function D(R) {
      g(R);
    }
    function S(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, W) => (s(), E(Qe, { to: "body" }, [
      _e(f) ? (s(), o("div", {
        key: 0,
        class: ue(["model-download-queue", { minimized: !x.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (V) => x.value = !x.value)
        }, [
          e("div", U2, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", B2, "(" + a(_e(c)) + "/" + a(_e(l).items.length) + ")", 1)
          ]),
          e("div", O2, [
            e("span", A2, a(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (s(), o("div", H2, [
          _e(n) ? (s(), o("div", K2, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(qt, {
              item: _e(n),
              onCancel: W[1] || (W[1] = (V) => D(_e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          _e(u).length > 0 ? (s(), o("div", q2, [
            e("div", Y2, [
              e("span", X2, "Paused (" + a(_e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...V) => _e(b) && _e(b)(...V))
              }, "Resume All")
            ]),
            e("div", Q2, [
              (s(!0), o(F, null, ae(_e(u), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onResume: (j) => _e(y)(V.id),
                onRemove: (j) => _e(_)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(i).length > 0 ? (s(), o("div", Z2, [
            e("div", J2, [
              e("span", e$, "Queued (" + a(_e(i).length) + ")", 1)
            ]),
            e("div", t$, [
              (s(!0), o(F, null, ae(_e(i), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onCancel: (j) => D(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          _e(m).length > 0 ? (s(), o("div", s$, [
            e("div", o$, [
              e("span", n$, "Completed (" + a(_e(m).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...V) => _e(T) && _e(T)(...V))
              }, "Clear")
            ]),
            e("div", a$, [
              (s(!0), o(F, null, ae(_e(m).slice(0, 3), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onRemove: (j) => _e(_)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(v).length > 0 ? (s(), o("div", l$, [
            e("div", i$, [
              e("span", r$, "Failed (" + a(_e(v).length) + ")", 1)
            ]),
            e("div", d$, [
              (s(!0), o(F, null, ae(_e(v), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onRetry: (j) => _e(p)(V.id),
                onRemove: (j) => _e(_)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", F2, [
          e("div", V2, [
            e("div", {
              class: "progress-fill",
              style: It({ width: `${C.value}%` })
            }, null, 4)
          ]),
          _e(n) ? (s(), o("div", W2, [
            e("span", G2, a(_e(n).filename), 1),
            e("span", j2, a(S(_e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), u$ = /* @__PURE__ */ ne(c$, [["__scopeId", "data-v-60751cfa"]]), m$ = { class: "mock-control-popover" }, v$ = { class: "popover-header" }, f$ = { class: "popover-content" }, g$ = { class: "section" }, p$ = { class: "preset-buttons" }, h$ = ["onClick"], y$ = { class: "section" }, w$ = { class: "toggle-row" }, k$ = { class: "toggle-label" }, _$ = ["checked"], b$ = { class: "toggle-row" }, $$ = { class: "toggle-label" }, C$ = ["checked", "disabled"], x$ = { class: "toggle-row" }, S$ = { class: "toggle-label" }, I$ = ["checked", "disabled"], E$ = { class: "toggle-row" }, M$ = { class: "toggle-label" }, P$ = ["checked"], T$ = { class: "section" }, R$ = { class: "state-display" }, z$ = /* @__PURE__ */ oe({
  __name: "MockControlPopover",
  emits: ["close"],
  setup(t) {
    const {
      state: l,
      setupState: n,
      setHasWorkspace: i,
      setHasEnvironments: m,
      setIsManaged: v,
      setHasLegacyManager: u,
      setPreset: f
    } = Ls(), c = [
      { value: "no_workspace", label: "No Workspace" },
      { value: "empty_workspace", label: "Empty WS" },
      { value: "unmanaged", label: "Unmanaged" },
      { value: "managed", label: "Managed" }
    ];
    return (g, p) => (s(), o("div", m$, [
      e("div", v$, [
        p[5] || (p[5] = e("span", { class: "popover-title" }, "Mock Controls", -1)),
        e("button", {
          class: "close-btn",
          onClick: p[0] || (p[0] = (y) => g.$emit("close"))
        }, "×")
      ]),
      e("div", f$, [
        e("div", g$, [
          p[6] || (p[6] = e("div", { class: "section-title" }, "QUICK PRESETS", -1)),
          e("div", p$, [
            (s(), o(F, null, ae(c, (y) => e("button", {
              key: y.value,
              class: ue(["preset-btn", { active: _e(n) === y.value }]),
              onClick: (b) => _e(f)(y.value)
            }, a(y.label), 11, h$)), 64))
          ])
        ]),
        e("div", y$, [
          p[11] || (p[11] = e("div", { class: "section-title" }, "STATE TOGGLES", -1)),
          e("div", w$, [
            e("label", k$, [
              e("input", {
                type: "checkbox",
                checked: _e(l).hasWorkspace,
                onChange: p[1] || (p[1] = (y) => _e(i)(y.target.checked))
              }, null, 40, _$),
              p[7] || (p[7] = e("span", null, "Workspace exists", -1))
            ])
          ]),
          e("div", b$, [
            e("label", $$, [
              e("input", {
                type: "checkbox",
                checked: _e(l).hasEnvironments,
                disabled: !_e(l).hasWorkspace,
                onChange: p[2] || (p[2] = (y) => _e(m)(y.target.checked))
              }, null, 40, C$),
              p[8] || (p[8] = e("span", null, "Has environments", -1))
            ])
          ]),
          e("div", x$, [
            e("label", S$, [
              e("input", {
                type: "checkbox",
                checked: _e(l).isManaged,
                disabled: !_e(l).hasEnvironments,
                onChange: p[3] || (p[3] = (y) => _e(v)(y.target.checked))
              }, null, 40, I$),
              p[9] || (p[9] = e("span", null, "Running in managed env", -1))
            ])
          ]),
          e("div", E$, [
            e("label", M$, [
              e("input", {
                type: "checkbox",
                checked: _e(l).hasLegacyManager,
                onChange: p[4] || (p[4] = (y) => _e(u)(y.target.checked))
              }, null, 40, P$),
              p[10] || (p[10] = e("span", null, "Legacy ComfyUI-Manager installed", -1))
            ])
          ])
        ]),
        e("div", T$, [
          p[12] || (p[12] = e("div", { class: "section-title" }, "CURRENT STATE", -1)),
          e("div", R$, [
            e("code", null, a(_e(n)), 1)
          ])
        ]),
        p[13] || (p[13] = e("div", { class: "hint" }, " Changes apply on next panel open or status refresh ", -1))
      ])
    ]));
  }
}), L$ = /* @__PURE__ */ ne(z$, [["__scopeId", "data-v-3255dab3"]]), D$ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', N$ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', U$ = {
  comfy: D$,
  phosphor: N$
}, Us = "comfy", bo = "comfygit-theme";
let Rt = null, $o = Us;
function B$() {
  try {
    const t = localStorage.getItem(bo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Us;
}
function Co(t = Us) {
  Rt && Rt.remove(), Rt = document.createElement("style"), Rt.id = "comfygit-theme-styles", Rt.setAttribute("data-theme", t), Rt.textContent = U$[t], document.head.appendChild(Rt), document.body.setAttribute("data-comfygit-theme", t), $o = t;
  try {
    localStorage.setItem(bo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function O$() {
  return $o;
}
function A$(t) {
  Co(t);
}
function F$(t) {
  var v;
  const { ui_id: l, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!l)
    return null;
  const m = i[l];
  return m && m.result === "error" && ((v = m.status) == null ? void 0 : v.status_str) === "error" ? (m.status.messages || [])[0] || "Unknown error" : null;
}
const Bs = document.createElement("link");
Bs.rel = "stylesheet";
Bs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Bs);
const V$ = B$();
Co(V$);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), A$(t);
  },
  getTheme: () => {
    const t = O$();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ft = null, at = null, Zt = null, Yt = null, Js = null, lt = null, Jt = null;
const Vt = k(null);
let Os = "managed", xo = !1;
async function cs() {
  var t;
  if (!((t = At) != null && t.api)) return null;
  try {
    const l = await At.api.fetchApi("/v2/comfygit/status");
    l.ok && (Vt.value = await l.json());
  } catch {
  }
}
async function Ps() {
  {
    Os = "no_workspace", xo = !0;
    return;
  }
}
function Ts() {
  var l;
  if (Os === "managed" || !xo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((l = n.textContent) == null ? void 0 : l.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function W$() {
  if (!Vt.value) return !1;
  const t = Vt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Vt.value.has_changes;
}
function eo(t) {
  ft && ft.remove(), ft = document.createElement("div"), ft.className = "comfygit-panel-overlay";
  const l = document.createElement("div");
  l.className = "comfygit-panel-container", ft.appendChild(l), ft.addEventListener("click", (m) => {
    m.target === ft && Es();
  });
  const n = (m) => {
    m.key === "Escape" && (Es(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ps({
    render: () => hs(h2, {
      initialView: t,
      onClose: Es,
      onStatusUpdate: async (m) => {
        Vt.value = m, es(), await Ps(), Rs(), Ts();
      }
    })
  }).mount(l), document.body.appendChild(ft);
}
function Es() {
  ft && (ft.remove(), ft = null);
}
function G$(t) {
  Xt(), at = document.createElement("div"), at.className = "comfygit-commit-popover-container";
  const l = t.getBoundingClientRect();
  at.style.position = "fixed", at.style.top = `${l.bottom + 8}px`, at.style.right = `${window.innerWidth - l.right}px`, at.style.zIndex = "10001";
  const n = (m) => {
    at && !at.contains(m.target) && m.target !== t && (Xt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (m) => {
    m.key === "Escape" && (Xt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Zt = ps({
    render: () => hs(wo, {
      status: Vt.value,
      onClose: Xt,
      onCommitted: (m) => {
        Xt(), j$(m.success, m.message), cs().then(es);
      }
    })
  }), Zt.mount(at), document.body.appendChild(at);
}
function Xt() {
  Zt && (Zt.unmount(), Zt = null), at && (at.remove(), at = null);
}
function j$(t, l) {
  const n = document.createElement("div"), i = t ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${i};
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
  const m = document.createElement("span");
  m.textContent = t ? "✓" : "✕", m.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(m);
  const v = document.createElement("span");
  v.textContent = l, n.appendChild(v), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function H$() {
  Yt || (Yt = document.createElement("div"), Yt.className = "comfygit-download-queue-root", Js = ps({
    render: () => hs(u$)
  }), Js.mount(Yt), document.body.appendChild(Yt), console.log("[ComfyGit] Model download queue mounted"));
}
function K$(t) {
  rs(), lt = document.createElement("div"), lt.className = "comfygit-mock-control-container";
  const l = t.getBoundingClientRect();
  lt.style.position = "fixed", lt.style.top = `${l.bottom + 8}px`, lt.style.right = `${window.innerWidth - l.right}px`, lt.style.zIndex = "10001";
  const n = (m) => {
    lt && !lt.contains(m.target) && m.target !== t && (rs(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (m) => {
    m.key === "Escape" && (rs(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Jt = ps({
    render: () => hs(L$, {
      onClose: rs
    })
  }), Jt.mount(lt), document.body.appendChild(lt);
}
function rs() {
  Jt && (Jt.unmount(), Jt = null), lt && (lt.remove(), lt = null);
}
let rt = null, zt = null;
function es() {
  if (!rt) return;
  const t = rt.querySelector(".commit-indicator");
  t && (t.style.display = W$() ? "block" : "none");
}
function Rs() {
  if (!rt) return;
  const t = Os !== "managed";
  rt.disabled = t, rt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const So = document.createElement("style");
So.textContent = `
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
document.head.appendChild(So);
At.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var m, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = eo, rt = document.createElement("button"), rt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", rt.innerHTML = 'Commit <span class="commit-indicator"></span>', rt.title = "Quick Commit", rt.onclick = () => G$(rt), t.appendChild(l), t.appendChild(rt), zt = document.createElement("button"), zt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-mock-btn", zt.textContent = "Mock", zt.title = "Mock Controls - Simulate different environment states", zt.onclick = () => K$(zt), t.appendChild(zt), console.log("[ComfyGit] Mock mode enabled - Mock Control button added"), (v = (m = At.menu) == null ? void 0 : m.settingsGroup) != null && v.element && (At.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), H$();
    const { loadPendingDownloads: n } = ts();
    n(), await Promise.all([cs(), Ps()]), es(), Rs(), Ts(), setTimeout(Ts, 100), setInterval(async () => {
      await Promise.all([cs(), Ps()]), es(), Rs();
    }, 3e4);
    const i = At.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, f = function() {
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
        const y = document.createElement("span");
        y.textContent = "Workflows updated - refresh required", p.appendChild(y);
        const b = document.createElement("button");
        b.textContent = "Refresh", b.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => u(), p.appendChild(b);
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
      }, c = function(p) {
        const y = document.getElementById("comfygit-error-toast");
        y && y.remove();
        const b = document.createElement("div");
        b.id = "comfygit-error-toast", b.style.cssText = `
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
        _.textContent = "⚠️", _.style.fontSize = "20px", b.appendChild(_);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(x);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild($), b.appendChild(T);
        const C = document.createElement("button");
        C.textContent = "View Logs", C.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, C.onmouseover = () => C.style.background = "#c62828", C.onmouseout = () => C.style.background = "#e53935", C.onclick = () => {
          b.remove(), eo("debug-env");
        }, b.appendChild(C);
        const D = document.createElement("button");
        D.textContent = "×", D.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, D.onmouseover = () => D.style.opacity = "1", D.onmouseout = () => D.style.opacity = "0.6", D.onclick = () => b.remove(), b.appendChild(D), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: y, workflow_name: b } = p.detail;
        console.log(`[ComfyGit] Workflow ${y}: ${b}`), await cs(), es();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let g = !1;
      i.addEventListener("status", async (p) => {
        const y = p.detail != null;
        y && !g && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : f()), g = y;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (p) => {
        const y = F$(p.detail);
        y && c(y);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
