import { app as ht } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as ge, createBlock as E, resolveDynamicComponent as Ht, normalizeClass as oe, withCtx as i, toDisplayString as a, createVNode as h, createTextVNode as w, computed as D, Fragment as A, renderList as Z, normalizeStyle as et, ref as $, onMounted as Ie, watch as wt, Teleport as Me, withModifiers as $e, Transition as Mo, createSlots as Rt, withKeys as rt, onUnmounted as Ro, reactive as no, readonly as To, unref as pe, withDirectives as Ze, vModelText as ao, vModelRadio as Bt, vModelCheckbox as lo, nextTick as Lo, vModelSelect as Ft, TransitionGroup as zo, createApp as qt, h as Kt } from "vue";
const No = { class: "panel-layout" }, Do = {
  key: 0,
  class: "panel-layout-header"
}, Po = {
  key: 1,
  class: "panel-layout-search"
}, Uo = { class: "panel-layout-content" }, Oo = {
  key: 2,
  class: "panel-layout-footer"
}, Bo = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", No, [
      u.$slots.header ? (o(), s("div", Do, [
        ge(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", Po, [
        ge(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Uo, [
        ge(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", Oo, [
        ge(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Y = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of u)
    n[r] = p;
  return n;
}, Pe = /* @__PURE__ */ Y(Bo, [["__scopeId", "data-v-21565df9"]]), Fo = {
  key: 0,
  class: "panel-title-prefix"
}, Ao = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Vo = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), E(Ht(`h${t.level}`), {
      class: oe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Fo, a(t.prefix), 1)) : (o(), s("span", Ao)),
        ge(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wo = /* @__PURE__ */ Y(Vo, [["__scopeId", "data-v-c3875efc"]]), Go = ["title"], jo = ["width", "height"], Ho = /* @__PURE__ */ K({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => u.$emit("click"))
    }, [
      (o(), s("svg", {
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
}), io = /* @__PURE__ */ Y(Ho, [["__scopeId", "data-v-6fc7f16d"]]), qo = { class: "header-left" }, Ko = {
  key: 0,
  class: "header-actions"
}, Yo = /* @__PURE__ */ K({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", qo, [
        h(Wo, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), E(io, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", Ko, [
        ge(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ Y(Yo, [["__scopeId", "data-v-55a62cd6"]]), Jo = {
  key: 0,
  class: "section-title-count"
}, Qo = {
  key: 1,
  class: "section-title-icon"
}, Xo = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), E(Ht(`h${t.level}`), {
      class: oe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        ge(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Jo, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", Qo, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), He = /* @__PURE__ */ Y(Xo, [["__scopeId", "data-v-559361eb"]]), Zo = { class: "status-grid" }, es = { class: "status-grid__columns" }, ts = { class: "status-grid__column" }, os = { class: "status-grid__title" }, ss = { class: "status-grid__column status-grid__column--right" }, ns = { class: "status-grid__title" }, as = {
  key: 0,
  class: "status-grid__footer"
}, ls = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Zo, [
      e("div", es, [
        e("div", ts, [
          e("h4", os, a(t.leftTitle), 1),
          ge(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ss, [
          e("h4", ns, a(t.rightTitle), 1),
          ge(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", as, [
        ge(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Y(ls, [["__scopeId", "data-v-73b7ba3f"]]), rs = {
  key: 0,
  class: "status-item__icon"
}, ds = {
  key: 1,
  class: "status-item__count"
}, cs = { class: "status-item__label" }, us = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = D(() => `status-item--${u.variant}`);
    return (r, p) => (o(), s("div", {
      class: oe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", rs, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", ds, a(t.count), 1)) : c("", !0),
      e("span", cs, a(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ Y(us, [["__scopeId", "data-v-6f929183"]]), ms = { class: "issue-card__header" }, vs = { class: "issue-card__icon" }, fs = { class: "issue-card__title" }, gs = {
  key: 0,
  class: "issue-card__content"
}, ps = {
  key: 0,
  class: "issue-card__description"
}, hs = {
  key: 1,
  class: "issue-card__items"
}, ys = {
  key: 2,
  class: "issue-card__actions"
}, ws = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = D(() => `issue-card--${u.severity}`);
    return (r, p) => (o(), s("div", {
      class: oe(["issue-card", n.value])
    }, [
      e("div", ms, [
        e("span", vs, a(t.icon), 1),
        e("h4", fs, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", gs, [
        t.description ? (o(), s("p", ps, a(t.description), 1)) : c("", !0),
        ge(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", hs, [
        (o(!0), s(A, null, Z(t.items, (f, m) => (o(), s("div", {
          key: m,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(f), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", ys, [
        ge(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ Y(ws, [["__scopeId", "data-v-df6aa348"]]), ks = ["type", "disabled"], bs = {
  key: 0,
  class: "spinner"
}, _s = /* @__PURE__ */ K({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: oe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", bs)) : c("", !0),
      t.loading ? c("", !0) : ge(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ks));
  }
}), Q = /* @__PURE__ */ Y(_s, [["__scopeId", "data-v-772abe47"]]), $s = { class: "empty-state" }, Cs = {
  key: 0,
  class: "empty-icon"
}, xs = { class: "empty-message" }, Ss = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", $s, [
      t.icon ? (o(), s("div", Cs, a(t.icon), 1)) : c("", !0),
      e("p", xs, a(t.message), 1),
      t.actionLabel ? (o(), E(Q, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          w(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ Y(Ss, [["__scopeId", "data-v-4466284f"]]), Is = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: oe(["detail-label"]),
      style: et({ minWidth: t.minWidth })
    }, [
      ge(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ Y(Is, [["__scopeId", "data-v-75e9eeb8"]]), Es = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: oe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ge(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ Y(Es, [["__scopeId", "data-v-2f186e4c"]]), Ms = { class: "detail-row" }, Rs = /* @__PURE__ */ K({
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
    return (u, n) => (o(), s("div", Ms, [
      h(Gt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), E(jt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ge(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ce = /* @__PURE__ */ Y(Rs, [["__scopeId", "data-v-ef15664a"]]), Ts = { class: "modal-header" }, Ls = { class: "modal-body" }, zs = { class: "status-section" }, Ns = {
  key: 0,
  class: "status-section"
}, Ds = { class: "section-header-row" }, Ps = {
  key: 0,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Os = { class: "workflow-group-title" }, Bs = { class: "workflow-list" }, Fs = { class: "workflow-name" }, As = { class: "workflow-issue" }, Vs = {
  key: 1,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, qs = { class: "workflow-issue" }, Ks = {
  key: 2,
  class: "workflow-group"
}, Ys = { class: "workflow-group-header" }, Js = { class: "workflow-group-title" }, Qs = { class: "workflow-list" }, Xs = { class: "workflow-name" }, Zs = {
  key: 3,
  class: "workflow-group"
}, en = { class: "workflow-group-header" }, tn = { class: "workflow-group-title" }, on = { class: "workflow-list" }, sn = { class: "workflow-name" }, nn = {
  key: 4,
  class: "workflow-group"
}, an = { class: "workflow-group-header" }, ln = { class: "workflow-group-title" }, rn = { class: "workflow-list" }, dn = { class: "workflow-name" }, cn = {
  key: 5,
  class: "workflow-group"
}, un = { class: "workflow-group-title" }, mn = { class: "expand-icon" }, vn = {
  key: 0,
  class: "workflow-list"
}, fn = { class: "workflow-name" }, gn = {
  key: 1,
  class: "status-section"
}, pn = {
  key: 0,
  class: "change-group"
}, hn = { class: "change-group-header" }, yn = { class: "change-group-title" }, wn = { class: "change-list" }, kn = { class: "node-name" }, bn = {
  key: 0,
  class: "dev-badge"
}, _n = {
  key: 1,
  class: "change-group"
}, $n = { class: "change-group-header" }, Cn = { class: "change-group-title" }, xn = { class: "change-list" }, Sn = { class: "node-name" }, In = {
  key: 0,
  class: "dev-badge"
}, En = {
  key: 2,
  class: "change-group"
}, Mn = { class: "change-list" }, Rn = { class: "change-item" }, Tn = { class: "node-name" }, Ln = {
  key: 3,
  class: "change-group"
}, zn = {
  key: 2,
  class: "status-section"
}, Nn = { class: "section-header-row" }, Dn = {
  key: 0,
  class: "drift-item"
}, Pn = { class: "drift-list" }, Un = {
  key: 0,
  class: "drift-list-more"
}, On = {
  key: 1,
  class: "drift-item"
}, Bn = { class: "drift-list" }, Fn = {
  key: 0,
  class: "drift-list-more"
}, An = {
  key: 2,
  class: "drift-item"
}, Vn = {
  key: 3,
  class: "drift-item"
}, Wn = {
  key: 3,
  class: "status-section"
}, Gn = { class: "info-box" }, jn = { class: "drift-list" }, Hn = {
  key: 0,
  class: "drift-list-more"
}, qn = {
  key: 4,
  class: "status-section"
}, Kn = { class: "warning-box" }, Yn = {
  key: 5,
  class: "empty-state-inline"
}, Jn = { class: "modal-actions" }, Qn = /* @__PURE__ */ K({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = $(!1);
    Ie(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), wt(() => u.show, (M, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", M);
    }, { immediate: !0 });
    const r = D(() => {
      var M, k, z;
      return ((z = (k = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : z.filter(
        (_) => _.status === "broken" && _.sync_state === "synced"
      )) || [];
    }), p = D(() => {
      var M, k, z;
      return ((z = (k = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : z.filter(
        (_) => _.status === "broken" && _.sync_state !== "synced"
      )) || [];
    }), f = D(() => {
      var M, k, z;
      return ((z = (k = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : k.synced) == null ? void 0 : z.filter((_) => {
        var C, W, R;
        const x = (R = (W = (C = u.status) == null ? void 0 : C.workflows) == null ? void 0 : W.analyzed) == null ? void 0 : R.find((S) => S.name === _);
        return !x || x.status !== "broken";
      })) || [];
    }), m = D(() => {
      var M, k, z, _, x;
      return (M = u.status) != null && M.workflows ? (((k = u.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((z = u.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((_ = u.status.workflows.deleted) == null ? void 0 : _.length) ?? 0) > 0 || (((x = u.status.workflows.synced) == null ? void 0 : x.length) ?? 0) > 0 : !1;
    }), v = D(() => {
      var k, z, _;
      const M = (k = u.status) == null ? void 0 : k.git_changes;
      return M ? (((z = M.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((_ = M.nodes_removed) == null ? void 0 : _.length) ?? 0) > 0 || M.workflow_changes || M.has_other_changes : !1;
    }), l = D(() => {
      var M, k, z, _, x, C;
      return !m.value && !v.value && ((k = (M = u.status) == null ? void 0 : M.comparison) == null ? void 0 : k.is_synced) && (((z = u.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((C = (x = (_ = u.status) == null ? void 0 : _.comparison) == null ? void 0 : x.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), g = D(() => {
      var k, z;
      const M = (z = (k = u.status) == null ? void 0 : k.git_changes) == null ? void 0 : z.workflow_changes;
      return M ? typeof M == "number" ? M : Object.keys(M).length : 0;
    });
    function y(M) {
      return typeof M == "string" ? M : M.name;
    }
    function d(M) {
      return typeof M == "object" && M.is_development === !0;
    }
    return (M, k) => {
      var z, _, x, C, W, R, S, P, F, J, G, N, T, O, V, le, re, X, ee, U, b, se;
      return o(), E(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[6] || (k[6] = (te) => M.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[5] || (k[5] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Ts, [
              k[7] || (k[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (te) => M.$emit("close"))
              }, "✕")
            ]),
            e("div", Ls, [
              e("div", zs, [
                h(He, { level: "4" }, {
                  default: i(() => [...k[8] || (k[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                h(Ce, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (o(), s("div", Ns, [
                e("div", Ds, [
                  h(He, { level: "4" }, {
                    default: i(() => [...k[9] || (k[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (te) => M.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ps, [
                  e("div", Us, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Os, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Bs, [
                    (o(!0), s(A, null, Z(r.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, a(te.name), 1),
                      e("span", As, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (o(), s("div", Vs, [
                  e("div", Ws, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gs, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), s(A, null, Z(p.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, a(te.name), 1),
                      e("span", qs, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (_ = (z = t.status.workflows) == null ? void 0 : z.new) != null && _.length ? (o(), s("div", Ks, [
                  e("div", Ys, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Js, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(A, null, Z(t.status.workflows.new, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, a(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (x = t.status.workflows) == null ? void 0 : x.modified) != null && C.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", tn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(A, null, Z(t.status.workflows.modified, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", sn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (W = t.status.workflows) == null ? void 0 : W.deleted) != null && R.length ? (o(), s("div", nn, [
                  e("div", an, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ln, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (o(!0), s(A, null, Z(t.status.workflows.deleted, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", dn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), s("div", cn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (te) => n.value = !n.value)
                  }, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", un, "SYNCED (" + a(f.value.length) + ")", 1),
                    e("span", mn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", vn, [
                    (o(!0), s(A, null, Z(f.value, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", fn, a(te), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (o(), s("div", gn, [
                h(He, { level: "4" }, {
                  default: i(() => [...k[16] || (k[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (P = (S = t.status.git_changes) == null ? void 0 : S.nodes_added) != null && P.length ? (o(), s("div", pn, [
                  e("div", hn, [
                    k[17] || (k[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", yn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", wn, [
                    (o(!0), s(A, null, Z(t.status.git_changes.nodes_added, (te) => (o(), s("div", {
                      key: y(te),
                      class: "change-item"
                    }, [
                      e("span", kn, a(y(te)), 1),
                      d(te) ? (o(), s("span", bn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (J = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && J.length ? (o(), s("div", _n, [
                  e("div", $n, [
                    k[18] || (k[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Cn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", xn, [
                    (o(!0), s(A, null, Z(t.status.git_changes.nodes_removed, (te) => (o(), s("div", {
                      key: y(te),
                      class: "change-item"
                    }, [
                      e("span", Sn, a(y(te)), 1),
                      d(te) ? (o(), s("span", In, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (G = t.status.git_changes) != null && G.workflow_changes ? (o(), s("div", En, [
                  k[19] || (k[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Mn, [
                    e("div", Rn, [
                      e("span", Tn, a(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (N = t.status.git_changes) != null && N.has_other_changes ? (o(), s("div", Ln, [...k[20] || (k[20] = [
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
              (T = t.status.comparison) != null && T.is_synced ? c("", !0) : (o(), s("div", zn, [
                e("div", Nn, [
                  h(He, { level: "4" }, {
                    default: i(() => [...k[21] || (k[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (te) => M.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[22] || (k[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (V = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && V.length ? (o(), s("div", Dn, [
                  h(Ce, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Pn, [
                    (o(!0), s(A, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Un, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (re = (le = t.status.comparison) == null ? void 0 : le.extra_nodes) != null && re.length ? (o(), s("div", On, [
                  h(Ce, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Bn, [
                    (o(!0), s(A, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Fn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ee = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && ee.length ? (o(), s("div", An, [
                  h(Ce, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? c("", !0) : (o(), s("div", Vn, [
                  h(Ce, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (b = t.status.comparison) == null ? void 0 : b.disabled_nodes) != null && se.length ? (o(), s("div", Wn, [
                h(He, { level: "4" }, {
                  default: i(() => [...k[23] || (k[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Gn, [
                  k[24] || (k[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", jn, [
                  (o(!0), s(A, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), s("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + a(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Hn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", qn, [
                h(He, { level: "4" }, {
                  default: i(() => [...k[25] || (k[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Kn, [
                  k[26] || (k[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[27] || (k[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (o(), s("div", Yn, [...k[28] || (k[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Jn, [
              h(Q, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (te) => M.$emit("close"))
              }, {
                default: i(() => [...k[29] || (k[29] = [
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
}), Xn = /* @__PURE__ */ Y(Qn, [["__scopeId", "data-v-c67eed17"]]), Zn = { class: "health-section-header" }, ea = { class: "suggestions-content" }, ta = { class: "suggestions-text" }, oa = { style: { "margin-top": "var(--cg-space-3)" } }, sa = {
  key: 1,
  class: "no-issues-text"
}, na = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: u, emit: n }) {
    const r = t, p = $(!1), f = $(!1);
    function m() {
      p.value = !0;
    }
    function v() {
      p.value = !1, g("view-workflows");
    }
    function l() {
      p.value = !1, g("view-nodes");
    }
    const g = n, y = $(!1), d = D(() => {
      const O = r.status.workflows.analyzed || [], V = O.filter(
        (le) => le.unresolved_models_count > 0 || le.ambiguous_models_count > 0
      );
      return V.length === 0 && r.status.missing_models_count > 0 ? O.filter((le) => le.sync_state === "synced") : V;
    });
    function M() {
      const O = d.value;
      O.length !== 0 && (y.value = !0, g("repair-missing-models", O.map((V) => V.name)));
    }
    function k() {
      y.value = !1;
    }
    u({ resetRepairingState: k });
    const z = D(() => r.status.workflows.new.length > 0 || r.status.workflows.modified.length > 0 || r.status.workflows.deleted.length > 0), _ = D(() => r.status.has_changes), x = D(() => {
      const O = r.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), C = D(() => r.status.has_changes || z.value), W = D(() => Object.keys(r.status.git_changes.workflow_changes_detail).length), R = D(() => r.status.git_changes.has_other_changes), S = D(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter((V) => V.status === "broken")) || [];
    }), P = D(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter(
        (V) => V.has_path_sync_issues && !V.has_issues
      )) || [];
    }), F = D(() => S.value.length > 0), J = D(() => F.value || P.value.length > 0 || r.status.missing_models_count > 0 || !r.status.comparison.is_synced), G = D(() => {
      const O = [];
      return r.status.workflows.new.length > 0 && O.push(`${r.status.workflows.new.length} new`), r.status.workflows.modified.length > 0 && O.push(`${r.status.workflows.modified.length} modified`), r.status.workflows.deleted.length > 0 && O.push(`${r.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), N = D(() => {
      var le, re;
      const O = [], V = r.status.comparison;
      return (le = V.missing_nodes) != null && le.length && O.push(`${V.missing_nodes.length} missing node${V.missing_nodes.length === 1 ? "" : "s"}`), (re = V.extra_nodes) != null && re.length && O.push(`${V.extra_nodes.length} untracked node${V.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), T = D(() => {
      var le, re;
      const O = [], V = r.status.comparison;
      return (le = V.extra_nodes) != null && le.length && (V.extra_nodes.slice(0, 3).forEach((X) => {
        O.push(`Untracked: ${X}`);
      }), V.extra_nodes.length > 3 && O.push(`...and ${V.extra_nodes.length - 3} more untracked`)), (re = V.missing_nodes) != null && re.length && (V.missing_nodes.slice(0, 3).forEach((X) => {
        O.push(`Missing: ${X}`);
      }), V.missing_nodes.length > 3 && O.push(`...and ${V.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, V) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: V[1] || (V[1] = (le) => f.value = !0),
            onMouseleave: V[2] || (V[2] = (le) => f.value = !1)
          }, [
            e("div", Zn, [
              h(He, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...V[9] || (V[9] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              h(Mo, { name: "fade" }, {
                default: i(() => [
                  f.value ? (o(), E(Q, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: m
                  }, {
                    default: i(() => [...V[10] || (V[10] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            h(is, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Rt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), E(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), E(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), E(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                h(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), E(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), E(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), E(Qe, {
                  key: 2,
                  icon: "●",
                  count: W.value,
                  label: W.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                R.value ? (o(), E(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                _.value && !x.value && !R.value ? (o(), E(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                _.value ? c("", !0) : (o(), E(Qe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              C.value ? {
                name: "footer",
                fn: i(() => [
                  V[12] || (V[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ea, [
                    e("span", ta, a(G.value), 1),
                    h(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: V[0] || (V[0] = (le) => O.$emit("commit-changes"))
                    }, {
                      default: i(() => [...V[11] || (V[11] = [
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
          t.status.is_detached_head ? (o(), E(ft, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              h(Q, {
                variant: "primary",
                size: "sm",
                onClick: V[3] || (V[3] = (le) => O.$emit("create-branch"))
              }, {
                default: i(() => [...V[13] || (V[13] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", oa, [
            h(He, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...V[14] || (V[14] = [
                w(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            J.value ? (o(), s(A, { key: 0 }, [
              S.value.length > 0 ? (o(), E(ft, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((le) => `${le.name} — ${le.issue_summary}`)
              }, {
                actions: i(() => [
                  h(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[4] || (V[4] = (le) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...V[15] || (V[15] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              P.value.length > 0 ? (o(), E(ft, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: P.value.map((le) => `${le.name} — ${le.models_needing_path_sync_count} model path${le.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  h(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[5] || (V[5] = (le) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...V[16] || (V[16] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !F.value ? (o(), E(ft, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  h(Q, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: M
                  }, {
                    default: i(() => [
                      w(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  h(Q, {
                    variant: "secondary",
                    size: "sm",
                    onClick: V[6] || (V[6] = (le) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...V[17] || (V[17] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (o(), E(ft, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: N.value,
                items: T.value
              }, {
                actions: i(() => [
                  h(Q, {
                    variant: "secondary",
                    size: "sm",
                    onClick: m
                  }, {
                    default: i(() => [...V[18] || (V[18] = [
                      w(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  h(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[7] || (V[7] = (le) => O.$emit("view-nodes"))
                  }, {
                    default: i(() => [...V[19] || (V[19] = [
                      w(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : C.value ? (o(), s("span", sa, "No issues")) : (o(), E(Ye, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      h(Xn, {
        show: p.value,
        status: t.status,
        onClose: V[8] || (V[8] = (le) => p.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), aa = /* @__PURE__ */ Y(na, [["__scopeId", "data-v-5f863725"]]), la = ["type", "value", "placeholder", "disabled"], ia = /* @__PURE__ */ K({
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
  setup(t, { expose: u, emit: n }) {
    const r = t, p = n, f = $(null);
    function m(v) {
      const l = v.target.value;
      p("update:modelValue", l);
    }
    return Ie(() => {
      r.autoFocus && f.value && f.value.focus();
    }), u({
      focus: () => {
        var v;
        return (v = f.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = f.value) == null ? void 0 : v.blur();
      }
    }), (v, l) => (o(), s("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: oe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        l[0] || (l[0] = rt((g) => v.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((g) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (g) => v.$emit("focus")),
      onBlur: l[3] || (l[3] = (g) => v.$emit("blur"))
    }, null, 42, la));
  }
}), Pt = /* @__PURE__ */ Y(ia, [["__scopeId", "data-v-0380d08f"]]), ra = { class: "branch-create-form" }, da = { class: "form-actions" }, ca = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = $(""), p = D(() => {
      const v = r.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function f() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function m() {
      r.value = "", n("cancel");
    }
    return (v, l) => (o(), s("div", ra, [
      h(Pt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (g) => r.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", da, [
        h(Q, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: f
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        h(Q, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ua = /* @__PURE__ */ Y(ca, [["__scopeId", "data-v-7c500394"]]), ma = { class: "branch-list-item__indicator" }, va = { class: "branch-list-item__name" }, fa = {
  key: 0,
  class: "branch-list-item__actions"
}, ga = {
  key: 0,
  class: "branch-list-item__current-label"
}, pa = /* @__PURE__ */ K({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", ma, a(t.isCurrent ? "●" : "○"), 1),
      e("span", va, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", fa, [
        ge(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", ga, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ha = /* @__PURE__ */ Y(pa, [["__scopeId", "data-v-c6581a24"]]), ya = {
  key: 2,
  class: "branch-list"
}, wa = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function p(m) {
      n("create", m), f();
    }
    function f() {
      r.value = !1;
    }
    return (m, v) => (o(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (o(), E(Q, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (l) => r.value = !0)
            }, {
              default: i(() => [...v[1] || (v[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), E(ua, {
          key: 0,
          onCreate: p,
          onCancel: f
        })) : c("", !0),
        t.branches.length === 0 ? (o(), E(Ye, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ya, [
          (o(!0), s(A, null, Z(t.branches, (l) => (o(), E(ha, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (o(), E(Q, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (g) => m.$emit("delete", l.name)
              }, {
                default: i(() => [...v[2] || (v[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (o(), E(Q, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (g) => m.$emit("switch", l.name)
              }, {
                default: i(() => [...v[3] || (v[3] = [
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
}), ka = /* @__PURE__ */ Y(wa, [["__scopeId", "data-v-86784ddd"]]), ba = { class: "commit-list" }, _a = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", ba, [
      ge(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), $a = /* @__PURE__ */ Y(_a, [["__scopeId", "data-v-8c5ee761"]]), Ca = { class: "commit-hash" }, xa = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = D(() => u.hash.slice(0, u.length));
    return (r, p) => (o(), s("span", Ca, a(n.value), 1));
  }
}), ro = /* @__PURE__ */ Y(xa, [["__scopeId", "data-v-7c333cc6"]]), Sa = { class: "commit-message" }, Ia = { class: "commit-date" }, Ea = /* @__PURE__ */ K({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function p() {
      n.clickable && r("click");
    }
    return (f, m) => (o(), s("div", {
      class: oe(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      h(ro, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Sa, a(t.message), 1),
      e("span", Ia, a(t.relativeDate), 1),
      f.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = $e(() => {
        }, ["stop"]))
      }, [
        ge(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ Y(Ea, [["__scopeId", "data-v-dd7c621b"]]), Ra = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), E(Ye, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), E($a, { key: 1 }, {
          default: i(() => [
            (o(!0), s(A, null, Z(t.commits, (r) => (o(), E(Ma, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => u.$emit("select", r)
            }, {
              actions: i(() => [
                h(Q, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => u.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: i(() => [...n[0] || (n[0] = [
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
}), Ta = /* @__PURE__ */ Y(Ra, [["__scopeId", "data-v-981c3c64"]]), W0 = [
  // BROKEN workflows (3) - Missing dependencies
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
  ...Array(12).fill(null).map((t, u) => ({
    name: `synced-workflow-${u + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + u,
    model_count: 1 + u % 3,
    sync_state: "synced"
  }))
], G0 = {
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
  }
}, La = [
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
], j0 = [
  ...La,
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
function _t() {
  return !1;
}
function Re() {
  const t = $(!1), u = $(null);
  async function n(I, q) {
    var be;
    if (!((be = window.app) != null && be.api))
      throw new Error("ComfyUI API not available");
    const ce = await window.app.api.fetchApi(I, q);
    if (!ce.ok) {
      const ne = await ce.json().catch(() => ({}));
      throw new Error(ne.error || ne.message || `Request failed: ${ce.status}`);
    }
    return ce.json();
  }
  async function r(I = !1) {
    return n(I ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(I, q = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: I, allow_issues: q })
    });
  }
  async function f(I = 10, q = 0) {
    return n(`/v2/comfygit/log?limit=${I}&offset=${q}`);
  }
  async function m(I) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: I })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function l(I) {
    return n(`/v2/comfygit/commit/${I}`);
  }
  async function g(I, q = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: I, force: q })
    });
  }
  async function y(I, q = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: I, start_point: q })
    });
  }
  async function d(I, q = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: I, force: q })
    });
  }
  async function M(I, q = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(I)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: q })
    });
  }
  async function k() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const I = await r();
        return [{
          name: I.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + I.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: I.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: I.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function z(I) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: I })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(I) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(I)
    });
  }
  async function C() {
    return n("/v2/workspace/environments/create_status");
  }
  async function W(I = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${I}`);
  }
  async function R(I) {
    return n(`/v2/workspace/environments/${I}`, {
      method: "DELETE"
    });
  }
  async function S(I = !1) {
    try {
      return n(I ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const q = await r(I), ce = [];
      return q.workflows.new.forEach((be) => {
        ce.push({ name: be, status: "new", missing_nodes: 0, missing_models: 0, path: be });
      }), q.workflows.modified.forEach((be) => {
        ce.push({ name: be, status: "modified", missing_nodes: 0, missing_models: 0, path: be });
      }), q.workflows.synced.forEach((be) => {
        ce.push({ name: be, status: "synced", missing_nodes: 0, missing_models: 0, path: be });
      }), ce;
    }
  }
  async function P(I) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(I)}/details`);
  }
  async function F(I) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(I)}/resolve`, {
      method: "POST"
    });
  }
  async function J(I, q, ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(I)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: q, install_models: ce })
    });
  }
  async function G(I, q, ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(I)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: q, importance: ce })
    });
  }
  async function N() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function T() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(I) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(I)}`);
  }
  async function V(I) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: I })
    });
  }
  async function le(I, q) {
    return n(`/v2/workspace/models/${I}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: q })
    });
  }
  async function re(I, q) {
    return n(`/v2/workspace/models/${I}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: q })
    });
  }
  async function X(I) {
    return n(`/v2/workspace/models/${I}`, {
      method: "DELETE"
    });
  }
  async function ee(I) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(I)
    });
  }
  async function U() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function b() {
    return n("/v2/workspace/models/directory");
  }
  async function se(I) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: I })
    });
  }
  async function te() {
    try {
      return n("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function xe(I) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(I)
    });
  }
  async function ke(I, q) {
    try {
      const ce = new URLSearchParams();
      return I && ce.append("level", I), q && ce.append("lines", q.toString()), n(`/v2/comfygit/debug/logs?${ce}`);
    } catch {
      return [];
    }
  }
  async function Te(I, q) {
    try {
      const ce = new URLSearchParams();
      return I && ce.append("level", I), q && ce.append("lines", q.toString()), n(`/v2/workspace/debug/logs?${ce}`);
    } catch {
      return [];
    }
  }
  async function Oe() {
    try {
      return n("/v2/comfygit/nodes");
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
  async function ue(I) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(I)}/track-dev`, {
      method: "POST"
    });
  }
  async function Be(I) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(I)}/install`, {
      method: "POST"
    });
  }
  async function ye(I) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(I)}/update`, {
      method: "POST"
    });
  }
  async function Le(I) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(I)}`, {
      method: "DELETE"
    });
  }
  async function Ve() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Je(I, q) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: I, url: q })
    });
  }
  async function fe(I) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}`, {
      method: "DELETE"
    });
  }
  async function We(I, q, ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: q, push_url: ce })
    });
  }
  async function Ge(I) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}/fetch`, {
      method: "POST"
    });
  }
  async function je(I) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}/status`);
    } catch {
      return null;
    }
  }
  async function dt(I = "skip", q = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: I,
        remove_extra_nodes: q
      })
    });
  }
  async function ve(I, q) {
    const ce = q ? `/v2/comfygit/remotes/${encodeURIComponent(I)}/pull-preview?branch=${encodeURIComponent(q)}` : `/v2/comfygit/remotes/${encodeURIComponent(I)}/pull-preview`;
    return n(ce);
  }
  async function ze(I, q = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q.modelStrategy || "skip",
        force: q.force || !1,
        resolutions: q.resolutions
      })
    });
  }
  async function ct(I, q) {
    const ce = q ? `/v2/comfygit/remotes/${encodeURIComponent(I)}/push-preview?branch=${encodeURIComponent(q)}` : `/v2/comfygit/remotes/${encodeURIComponent(I)}/push-preview`;
    return n(ce);
  }
  async function st(I, q = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: q.force || !1 })
    });
  }
  async function Se(I, q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(I)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: q })
    });
  }
  async function ut(I) {
    const q = {
      success: 0,
      failed: []
    };
    for (const ce of I)
      try {
        await F(ce), q.success++;
      } catch (be) {
        q.failed.push({
          name: ce,
          error: be instanceof Error ? be.message : "Unknown error"
        });
      }
    return q;
  }
  async function H(I) {
    var be;
    const q = new FormData();
    if (q.append("file", I), !((be = window.app) != null && be.api))
      throw new Error("ComfyUI API not available");
    const ce = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: q
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ce.ok) {
      const ne = await ce.json().catch(() => ({}));
      throw new Error(ne.error || `Preview failed: ${ce.status}`);
    }
    return ce.json();
  }
  async function B(I) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(I)}`
    );
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: p,
    getHistory: f,
    exportEnv: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: l,
    checkout: g,
    createBranch: y,
    switchBranch: d,
    deleteBranch: M,
    // Environment Management
    getEnvironments: k,
    switchEnvironment: z,
    getSwitchProgress: _,
    createEnvironment: x,
    getCreateProgress: C,
    getComfyUIReleases: W,
    deleteEnvironment: R,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: P,
    resolveWorkflow: F,
    installWorkflowDeps: J,
    setModelImportance: G,
    // Model Management
    getEnvironmentModels: N,
    getWorkspaceModels: T,
    getModelDetails: O,
    openFileLocation: V,
    addModelSource: le,
    removeModelSource: re,
    deleteModel: X,
    downloadModel: ee,
    scanWorkspaceModels: U,
    getModelsDirectory: b,
    setModelsDirectory: se,
    // Settings
    getConfig: te,
    updateConfig: xe,
    // Debug/Logs
    getEnvironmentLogs: ke,
    getWorkspaceLogs: Te,
    // Node Management
    getNodes: Oe,
    trackNodeAsDev: ue,
    installNode: Be,
    updateNode: ye,
    uninstallNode: Le,
    // Git Remotes
    getRemotes: Ve,
    addRemote: Je,
    removeRemote: fe,
    updateRemoteUrl: We,
    fetchRemote: Ge,
    getRemoteSyncStatus: je,
    // Push/Pull
    getPullPreview: ve,
    pullFromRemote: ze,
    getPushPreview: ct,
    pushToRemote: st,
    validateMerge: Se,
    // Environment Sync
    syncEnvironmentManually: dt,
    // Workflow Repair
    repairWorkflowModels: ut,
    // Import Operations
    previewTarballImport: H,
    validateEnvironmentName: B
  };
}
async function $t(t, u = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const f = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(p), f;
  } catch (f) {
    throw clearTimeout(p), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function co() {
  const t = $(null);
  async function u() {
    try {
      const m = await $t(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const m = await $t(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const m = await $t(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Failed to get status");
      return await m.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: u,
    checkHealth: n,
    getStatus: r,
    restart: p,
    kill: f
  };
}
const za = { class: "base-modal-header" }, Na = {
  key: 0,
  class: "base-modal-title"
}, Da = { class: "base-modal-body" }, Pa = {
  key: 0,
  class: "base-modal-loading"
}, Ua = {
  key: 1,
  class: "base-modal-error"
}, Oa = {
  key: 0,
  class: "base-modal-footer"
}, Ba = /* @__PURE__ */ K({
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
  setup(t, { emit: u }) {
    const n = t, r = u;
    function p() {
      n.closeOnOverlayClick && r("close");
    }
    function f(m) {
      m.key === "Escape" && r("close");
    }
    return Ie(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), Ro(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (m, v) => (o(), E(Me, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: oe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", za, [
            ge(m.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Na, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (l) => m.$emit("close"))
            }, [...v[2] || (v[2] = [
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
          e("div", Da, [
            t.loading ? (o(), s("div", Pa, "Loading...")) : t.error ? (o(), s("div", Ua, a(t.error), 1)) : ge(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), s("div", Oa, [
            ge(m.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ Y(Ba, [["__scopeId", "data-v-2125a0e6"]]), Fa = ["type", "disabled"], Aa = {
  key: 0,
  class: "spinner"
}, Va = /* @__PURE__ */ K({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: oe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Aa)) : c("", !0),
      ge(u.$slots, "default", {}, void 0, !0)
    ], 10, Fa));
  }
}), de = /* @__PURE__ */ Y(Va, [["__scopeId", "data-v-f3452606"]]), Wa = {
  key: 0,
  class: "base-title-count"
}, Ga = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), E(Ht(`h${t.level}`), {
      class: oe(["base-title", t.variant])
    }, {
      default: i(() => [
        ge(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Wa, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), It = /* @__PURE__ */ Y(Ga, [["__scopeId", "data-v-5a01561d"]]), ja = ["value", "disabled"], Ha = {
  key: 0,
  value: "",
  disabled: ""
}, qa = ["value"], Ka = {
  key: 0,
  class: "base-select-error"
}, Ya = /* @__PURE__ */ K({
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
    function u(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, p) => (o(), s("div", {
      class: oe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: oe(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (f) => r.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ha, a(t.placeholder), 1)) : c("", !0),
        (o(!0), s(A, null, Z(t.options, (f) => (o(), s("option", {
          key: u(f),
          value: u(f)
        }, a(n(f)), 9, qa))), 128))
      ], 42, ja),
      t.error ? (o(), s("span", Ka, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ Y(Ya, [["__scopeId", "data-v-7436d745"]]), Qa = { class: "popover-header" }, Xa = { class: "popover-title" }, Za = { class: "popover-content" }, el = {
  key: 0,
  class: "popover-actions"
}, tl = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), E(Me, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: et({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Qa, [
            e("h4", Xa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Za, [
            ge(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", el, [
            ge(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), ot = /* @__PURE__ */ Y(tl, [["__scopeId", "data-v-42815ace"]]), ol = { class: "detail-section" }, sl = {
  key: 0,
  class: "empty-message"
}, nl = { class: "model-header" }, al = { class: "model-name" }, ll = { class: "model-details" }, il = { class: "model-row" }, rl = { class: "model-row" }, dl = { class: "label" }, cl = {
  key: 0,
  class: "model-row model-row-nodes"
}, ul = { class: "node-list" }, ml = ["onClick"], vl = {
  key: 1,
  class: "model-row"
}, fl = { class: "value" }, gl = {
  key: 0,
  class: "model-actions"
}, pl = { class: "detail-section" }, hl = {
  key: 0,
  class: "empty-message"
}, yl = { class: "node-name" }, wl = {
  key: 0,
  class: "node-version"
}, kl = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: p, setModelImportance: f, installWorkflowDeps: m } = Re(), v = $(null), l = $(!1), g = $(null), y = $(!1), d = $({}), M = $({}), k = $(!1), z = $(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(N) {
      switch (N) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "missing":
        default:
          return "error";
      }
    }
    function C(N) {
      switch (N) {
        case "available":
          return "✓ Available";
        case "path_mismatch":
          return "⚠ Path Mismatch";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function W(N) {
      if (!N.loaded_by || N.loaded_by.length === 0) return [];
      const T = N.hash || N.filename;
      return z.value.has(T) ? N.loaded_by : N.loaded_by.slice(0, 3);
    }
    function R(N) {
      return z.value.has(N);
    }
    function S(N) {
      z.value.has(N) ? z.value.delete(N) : z.value.add(N), z.value = new Set(z.value);
    }
    async function P() {
      l.value = !0, g.value = null;
      try {
        v.value = await p(n.workflowName);
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function F(N, T) {
      d.value[N] = T, y.value = !0;
    }
    async function J() {
      if (!y.value) {
        r("close");
        return;
      }
      l.value = !0, g.value = null;
      try {
        for (const [N, T] of Object.entries(d.value))
          await f(n.workflowName, N, T);
        r("refresh"), r("close");
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function G(N) {
      M.value[N] = !0, g.value = null;
      try {
        await m(n.workflowName, !0, !1), await P();
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to install node";
      } finally {
        M.value[N] = !1;
      }
    }
    return Ie(P), (N, T) => (o(), s(A, null, [
      h(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: g.value || void 0,
        onClose: T[5] || (T[5] = (O) => r("close"))
      }, {
        body: i(() => [
          v.value ? (o(), s(A, { key: 0 }, [
            e("section", ol, [
              h(It, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), s("div", sl, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(A, null, Z(v.value.models, (O) => (o(), s("div", {
                key: O.hash || O.filename,
                class: "model-card"
              }, [
                e("div", nl, [
                  T[7] || (T[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", al, a(O.filename), 1)
                ]),
                e("div", ll, [
                  e("div", il, [
                    T[8] || (T[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: oe(["value", x(O.status)])
                    }, a(C(O.status)), 3)
                  ]),
                  e("div", rl, [
                    e("span", dl, [
                      T[9] || (T[9] = w(" Importance: ", -1)),
                      h(io, {
                        size: 14,
                        title: "About importance levels",
                        onClick: T[0] || (T[0] = (V) => k.value = !0)
                      })
                    ]),
                    h(Ja, {
                      "model-value": d.value[O.filename] || O.importance,
                      options: _,
                      "onUpdate:modelValue": (V) => F(O.filename, V)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  O.loaded_by && O.loaded_by.length > 0 ? (o(), s("div", cl, [
                    T[10] || (T[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ul, [
                      (o(!0), s(A, null, Z(W(O), (V, le) => (o(), s("div", {
                        key: `${V.node_id}-${le}`,
                        class: "node-reference"
                      }, a(V.node_type) + " (Node #" + a(V.node_id) + ") ", 1))), 128)),
                      O.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (V) => S(O.hash || O.filename)
                      }, a(R(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, ml)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  O.size_mb ? (o(), s("div", vl, [
                    T[11] || (T[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", fl, a(O.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                O.status !== "available" ? (o(), s("div", gl, [
                  O.status === "downloadable" ? (o(), E(de, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: T[1] || (T[1] = (V) => r("resolve"))
                  }, {
                    default: i(() => [...T[12] || (T[12] = [
                      w(" Download ", -1)
                    ])]),
                    _: 1
                  })) : O.status === "path_mismatch" ? (o(), E(de, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: T[2] || (T[2] = (V) => r("resolve"))
                  }, {
                    default: i(() => [...T[13] || (T[13] = [
                      w(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), E(de, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: T[3] || (T[3] = (V) => r("resolve"))
                  }, {
                    default: i(() => [...T[14] || (T[14] = [
                      w(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", pl, [
              h(It, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), s("div", hl, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(A, null, Z(v.value.nodes, (O) => (o(), s("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: oe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", yl, a(O.name), 1),
                O.version ? (o(), s("span", wl, "v" + a(O.version), 1)) : c("", !0),
                O.status === "missing" ? (o(), E(de, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: M.value[O.name],
                  onClick: (V) => G(O.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...T[15] || (T[15] = [
                    w(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          h(de, {
            variant: "secondary",
            onClick: T[4] || (T[4] = (O) => r("close"))
          }, {
            default: i(() => [...T[16] || (T[16] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (o(), E(de, {
            key: 0,
            variant: "primary",
            onClick: J
          }, {
            default: i(() => [...T[17] || (T[17] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      h(ot, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: T[6] || (T[6] = (O) => k.value = !1)
      }, {
        content: i(() => [...T[18] || (T[18] = [
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
}), bl = /* @__PURE__ */ Y(kl, [["__scopeId", "data-v-0b14d32e"]]), he = no({
  items: [],
  status: "idle"
});
let Xe = null;
function uo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function At(t) {
  return he.items.find((u) => u.id === t);
}
async function pt() {
  if (he.status === "downloading") return;
  const t = he.items.find((u) => u.status === "queued");
  if (!t) {
    he.status = "idle";
    return;
  }
  he.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await _l(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    he.status = "idle", pt();
  }
}
async function _l(t) {
  return new Promise((u, n) => {
    Xe && (Xe.close(), Xe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Xe = p;
    let f = Date.now(), m = 0, v = !1;
    p.onmessage = (l) => {
      try {
        const g = JSON.parse(l.data);
        switch (g.type) {
          case "progress":
            t.downloaded = g.downloaded || 0, t.size = g.total || t.size;
            const y = Date.now(), d = (y - f) / 1e3;
            if (d > 0.5) {
              const M = t.downloaded - m;
              if (t.speed = M / d, f = y, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, p.close(), Xe = null, u();
            break;
          case "error":
            v = !0, p.close(), Xe = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Xe = null, v || n(new Error("Connection lost"));
    };
  });
}
async function $l() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (he.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const r = {
        id: uo(),
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
      he.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Tt() {
  function t(x) {
    for (const C of x) {
      if (he.items.some(
        (S) => S.url === C.url && S.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const R = {
        id: uo(),
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
      he.items.push(R);
    }
    he.status === "idle" && pt();
  }
  async function u(x) {
    const C = At(x);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Xe && (Xe.close(), Xe = null), C.status = "failed", C.error = "Cancelled by user", he.status = "idle", pt();
      } else if (C.status === "queued") {
        const W = he.items.findIndex((R) => R.id === x);
        W >= 0 && he.items.splice(W, 1);
      }
    }
  }
  function n(x) {
    const C = At(x);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, he.status === "idle" && pt());
  }
  function r(x) {
    const C = At(x);
    !C || C.status !== "paused" || (C.status = "queued", he.status === "idle" && pt());
  }
  function p() {
    const x = he.items.filter((C) => C.status === "paused");
    for (const C of x)
      C.status = "queued";
    he.status === "idle" && pt();
  }
  function f(x) {
    const C = he.items.findIndex((W) => W.id === x);
    C >= 0 && ["completed", "failed", "paused"].includes(he.items[C].status) && he.items.splice(C, 1);
  }
  function m() {
    he.items = he.items.filter((x) => x.status !== "completed");
  }
  function v() {
    he.items = he.items.filter((x) => x.status !== "failed");
  }
  const l = D(
    () => he.items.find((x) => x.status === "downloading")
  ), g = D(
    () => he.items.filter((x) => x.status === "queued")
  ), y = D(
    () => he.items.filter((x) => x.status === "completed")
  ), d = D(
    () => he.items.filter((x) => x.status === "failed")
  ), M = D(
    () => he.items.filter((x) => x.status === "paused")
  ), k = D(() => he.items.length > 0), z = D(
    () => he.items.filter((x) => x.status === "queued" || x.status === "downloading").length
  ), _ = D(
    () => he.items.some((x) => x.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: To(he),
    // Computed
    currentDownload: l,
    queuedItems: g,
    completedItems: y,
    failedItems: d,
    pausedItems: M,
    hasItems: k,
    activeCount: z,
    hasPaused: _,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: f,
    clearCompleted: m,
    clearFailed: v,
    loadPendingDownloads: $l
  };
}
function Cl() {
  const t = $(null), u = $(null), n = $([]), r = $([]), p = $(!1), f = $(null);
  async function m(W, R) {
    var P;
    if (!((P = window.app) != null && P.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(W, R);
    if (!S.ok) {
      const F = await S.json().catch(() => ({})), J = F.error || F.message || `Request failed: ${S.status}`;
      throw new Error(J);
    }
    return S.json();
  }
  async function v(W) {
    p.value = !0, f.value = null;
    try {
      let R;
      return _t() || (R = await m(
        `/v2/comfygit/workflow/${W}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = R, R;
    } catch (R) {
      const S = R instanceof Error ? R.message : "Unknown error occurred";
      throw f.value = S, R;
    } finally {
      p.value = !1;
    }
  }
  async function l(W, R, S, P) {
    p.value = !0, f.value = null;
    try {
      let F;
      if (!_t()) {
        const J = Object.fromEntries(R), G = Object.fromEntries(S), N = P ? Array.from(P) : [];
        F = await m(
          `/v2/comfygit/workflow/${W}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: J,
              model_choices: G,
              skipped_packages: N
            })
          }
        );
      }
      return u.value = F, F;
    } catch (F) {
      const J = F instanceof Error ? F.message : "Unknown error occurred";
      throw f.value = J, F;
    } finally {
      p.value = !1;
    }
  }
  async function g(W, R = 10) {
    p.value = !0, f.value = null;
    try {
      let S;
      return _t() || (S = await m(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: W, limit: R })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const P = S instanceof Error ? S.message : "Unknown error occurred";
      throw f.value = P, S;
    } finally {
      p.value = !1;
    }
  }
  async function y(W, R = 10) {
    p.value = !0, f.value = null;
    try {
      let S;
      return _t() || (S = await m(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: W, limit: R })
        }
      )), r.value = S.results, S.results;
    } catch (S) {
      const P = S instanceof Error ? S.message : "Unknown error occurred";
      throw f.value = P, S;
    } finally {
      p.value = !1;
    }
  }
  const d = no({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function M() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0, d.nodeInstallProgress = void 0;
  }
  async function k(W) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return _t(), await z(W);
    } catch (R) {
      const S = R instanceof Error ? R.message : "Failed to install nodes";
      throw d.installError = S, R;
    }
  }
  async function z(W) {
    var S;
    const R = await m(
      `/v2/comfygit/workflow/${W}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: d.nodesToInstall
        })
      }
    );
    if (d.nodeInstallProgress) {
      d.nodeInstallProgress.totalNodes = d.nodesToInstall.length;
      const P = new Map(((S = R.failed) == null ? void 0 : S.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < d.nodesToInstall.length; F++) {
        const J = d.nodesToInstall[F], G = P.get(J);
        d.nodeInstallProgress.completedNodes.push({
          node_id: J,
          success: !G,
          error: G
        });
      }
    }
    return d.nodesInstalled = R.nodes_installed, d.needsRestart = R.nodes_installed.length > 0, R.failed && R.failed.length > 0 && (d.installError = `${R.failed.length} package(s) failed to install`), R;
  }
  async function _(W, R, S) {
    M(), d.phase = "resolving", f.value = null;
    const P = Object.fromEntries(R), F = Object.fromEntries(S);
    try {
      const J = await fetch(`/v2/comfygit/workflow/${W}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: P,
          model_choices: F
        })
      });
      if (!J.ok)
        throw new Error(`Request failed: ${J.status}`);
      if (!J.body)
        throw new Error("No response body");
      const G = J.body.getReader(), N = new TextDecoder();
      let T = "";
      for (; ; ) {
        const { done: O, value: V } = await G.read();
        if (O) break;
        T += N.decode(V, { stream: !0 });
        const le = T.split(`

`);
        T = le.pop() || "";
        for (const re of le) {
          if (!re.trim()) continue;
          const X = re.split(`
`);
          let ee = "", U = "";
          for (const b of X)
            b.startsWith("event: ") ? ee = b.slice(7) : b.startsWith("data: ") && (U = b.slice(6));
          if (U)
            try {
              const b = JSON.parse(U);
              x(ee, b);
            } catch (b) {
              console.warn("Failed to parse SSE event:", b);
            }
        }
      }
    } catch (J) {
      const G = J instanceof Error ? J.message : "Unknown error occurred";
      throw f.value = G, d.error = G, d.phase = "error", J;
    }
  }
  function x(W, R) {
    switch (W) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = R.total;
        break;
      case "file_start":
        d.currentFile = R.filename, d.currentFileIndex = R.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = R.downloaded, d.bytesTotal = R.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: R.filename,
          success: R.success,
          error: R.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = R.nodes_to_install || [], R.download_results && (d.completedFiles = R.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = R.message, d.phase = "error", f.value = R.message;
        break;
    }
  }
  function C(W, R) {
    const { addToQueue: S } = Tt(), P = R.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: W,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return P.length > 0 && S(P), P.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: f,
    progress: d,
    // Methods
    analyzeWorkflow: v,
    applyResolution: l,
    applyResolutionWithProgress: _,
    installNodes: k,
    searchNodes: g,
    searchModels: y,
    resetProgress: M,
    queueModelDownloads: C
  };
}
const xl = { class: "resolution-stepper" }, Sl = { class: "stepper-header" }, Il = ["onClick"], El = {
  key: 0,
  class: "step-icon"
}, Ml = {
  key: 1,
  class: "step-number"
}, Rl = { class: "step-label" }, Tl = {
  key: 0,
  class: "step-connector"
}, Ll = { class: "stepper-content" }, zl = /* @__PURE__ */ K({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function p(g) {
      var y;
      if ((y = n.stepStats) != null && y[g]) {
        const d = n.stepStats[g];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(g);
    }
    function f(g) {
      var y;
      if ((y = n.stepStats) != null && y[g]) {
        const d = n.stepStats[g];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function m(g) {
      return p(g) ? "state-complete" : f(g) ? "state-partial" : "state-pending";
    }
    function v(g) {
      return !1;
    }
    function l(g) {
      r("step-change", g);
    }
    return (g, y) => (o(), s("div", xl, [
      e("div", Sl, [
        (o(!0), s(A, null, Z(t.steps, (d, M) => (o(), s("div", {
          key: d.id,
          class: oe(["step", {
            active: t.currentStep === d.id,
            completed: p(d.id),
            "in-progress": f(d.id),
            disabled: v(d.id)
          }]),
          onClick: (k) => l(d.id)
        }, [
          e("div", {
            class: oe(["step-indicator", m(d.id)])
          }, [
            p(d.id) ? (o(), s("span", El, "✓")) : (o(), s("span", Ml, a(M + 1), 1))
          ], 2),
          e("div", Rl, a(d.label), 1),
          M < t.steps.length - 1 ? (o(), s("div", Tl)) : c("", !0)
        ], 10, Il))), 128))
      ]),
      e("div", Ll, [
        ge(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Nl = /* @__PURE__ */ Y(zl, [["__scopeId", "data-v-2a7b3af8"]]), Dl = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = D(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = D(() => `confidence-${n.value}`), p = D(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, m) => (o(), s("span", {
      class: oe(["confidence-badge", r.value, t.size])
    }, a(p.value), 3));
  }
}), Yt = /* @__PURE__ */ Y(Dl, [["__scopeId", "data-v-17ec4b80"]]), Pl = { class: "node-info" }, Ul = { class: "node-info-text" }, Ol = { class: "item-body" }, Bl = {
  key: 0,
  class: "resolved-state"
}, Fl = {
  key: 1,
  class: "multiple-options"
}, Al = { class: "options-list" }, Vl = ["onClick"], Wl = ["name", "value", "checked", "onChange"], Gl = { class: "option-content" }, jl = { class: "option-header" }, Hl = { class: "option-package-id" }, ql = {
  key: 0,
  class: "option-title"
}, Kl = { class: "option-meta" }, Yl = {
  key: 0,
  class: "installed-badge"
}, Jl = { class: "action-buttons" }, Ql = {
  key: 2,
  class: "unresolved"
}, Xl = { class: "action-buttons" }, Zl = /* @__PURE__ */ K({
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
    statusLabel: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => !!n.choice);
    D(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), D(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    });
    const f = D(() => {
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
    function m(v) {
      r("option-selected", v);
    }
    return (v, l) => (o(), s("div", {
      class: oe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", Pl, [
        e("span", Ul, [
          l[7] || (l[7] = w("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: oe(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Ol, [
        p.value ? (o(), s("div", Bl, [
          h(de, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (g) => r("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Fl, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Al, [
            (o(!0), s(A, null, Z(t.options, (g, y) => (o(), s("label", {
              key: g.package_id,
              class: oe(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (d) => m(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (d) => m(y)
              }, null, 40, Wl),
              e("div", Gl, [
                e("div", jl, [
                  e("span", Hl, a(g.package_id), 1),
                  h(Yt, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                g.title && g.title !== g.package_id ? (o(), s("div", ql, a(g.title), 1)) : c("", !0),
                e("div", Kl, [
                  g.is_installed ? (o(), s("span", Yl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Vl))), 128))
          ]),
          e("div", Jl, [
            h(de, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (g) => r("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (g) => r("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (g) => r("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Ql, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Xl, [
            h(de, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (g) => r("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (g) => r("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (g) => r("mark-optional"))
            }, {
              default: i(() => [...l[15] || (l[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ei = /* @__PURE__ */ Y(Zl, [["__scopeId", "data-v-e02629e7"]]), ti = { class: "item-navigator" }, oi = { class: "nav-item-info" }, si = ["title"], ni = { class: "nav-controls" }, ai = { class: "nav-arrows" }, li = ["disabled"], ii = ["disabled"], ri = { class: "nav-position" }, di = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, p) => (o(), s("div", ti, [
      e("div", oi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, si)
      ]),
      e("div", ni, [
        e("div", ai, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, li),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, ii)
        ]),
        e("span", ri, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), mo = /* @__PURE__ */ Y(di, [["__scopeId", "data-v-74af7920"]]), ci = ["type", "value", "placeholder", "disabled"], ui = {
  key: 0,
  class: "base-input-error"
}, mi = /* @__PURE__ */ K({
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
    return (u, n) => (o(), s("div", {
      class: oe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: oe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ci),
      t.error ? (o(), s("span", ui, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ Y(mi, [["__scopeId", "data-v-9ba02cdc"]]), vi = { class: "node-resolution-step" }, fi = {
  key: 0,
  class: "auto-resolved-section"
}, gi = { class: "section-header" }, pi = { class: "stat-badge" }, hi = { class: "resolved-packages-list" }, yi = { class: "package-info" }, wi = { class: "package-id" }, ki = { class: "node-count" }, bi = { class: "package-actions" }, _i = {
  key: 0,
  class: "status-badge install"
}, $i = {
  key: 1,
  class: "status-badge skip"
}, Ci = ["onClick"], xi = {
  key: 1,
  class: "section-divider"
}, Si = { class: "step-header" }, Ii = { class: "stat-badge" }, Ei = {
  key: 1,
  class: "step-body"
}, Mi = {
  key: 3,
  class: "empty-state"
}, Ri = { class: "node-search-modal" }, Ti = { class: "node-modal-body" }, Li = {
  key: 0,
  class: "node-search-results"
}, zi = ["onClick"], Ni = { class: "node-result-header" }, Di = { class: "node-result-package-id" }, Pi = {
  key: 0,
  class: "node-result-description"
}, Ui = {
  key: 1,
  class: "node-no-results"
}, Oi = {
  key: 2,
  class: "node-searching"
}, Bi = { class: "node-manual-entry-modal" }, Fi = { class: "node-modal-body" }, Ai = { class: "node-modal-actions" }, Vi = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(0), f = $(!1), m = $(!1), v = $(""), l = $(""), g = $([]), y = $(!1), d = D(() => n.nodes[p.value]), M = D(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), k = D(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function z(re) {
      return n.skippedPackages.has(re);
    }
    function _(re) {
      r("package-skip", re);
    }
    const x = D(() => {
      var X;
      if (!d.value) return "not-found";
      const re = n.nodeChoices.get(d.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = d.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), C = D(() => {
      var X;
      if (!d.value) return;
      const re = n.nodeChoices.get(d.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = d.value.options) != null && X.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function W(re) {
      re >= 0 && re < n.nodes.length && (p.value = re);
    }
    function R() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function S() {
      d.value && r("skip", d.value.node_type);
    }
    function P(re) {
      d.value && r("option-selected", d.value.node_type, re);
    }
    function F() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function J() {
      d.value && (v.value = d.value.node_type, f.value = !0);
    }
    function G() {
      l.value = "", m.value = !0;
    }
    function N() {
      f.value = !1, v.value = "", g.value = [];
    }
    function T() {
      m.value = !1, l.value = "";
    }
    function O() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function V(re) {
      d.value && (r("manual-entry", d.value.node_type, re.package_id), N());
    }
    function le() {
      !d.value || !l.value.trim() || (r("manual-entry", d.value.node_type, l.value.trim()), T());
    }
    return (re, X) => {
      var ee, U;
      return o(), s("div", vi, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", fi, [
          e("div", gi, [
            X[4] || (X[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", pi, a(k.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", hi, [
            (o(!0), s(A, null, Z(t.autoResolvedPackages, (b) => (o(), s("div", {
              key: b.package_id,
              class: "resolved-package-item"
            }, [
              e("div", yi, [
                e("code", wi, a(b.package_id), 1),
                e("span", ki, a(b.node_types_count) + " node type" + a(b.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", bi, [
                z(b.package_id) ? (o(), s("span", $i, " SKIPPED ")) : (o(), s("span", _i, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (se) => _(b.package_id)
                }, a(z(b.package_id) ? "Include" : "Skip"), 9, Ci)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", xi)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(A, { key: 2 }, [
          e("div", Si, [
            X[5] || (X[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ii, a(M.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), E(mo, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: X[0] || (X[0] = (b) => W(p.value - 1)),
            onNext: X[1] || (X[1] = (b) => W(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", Ei, [
            h(ei, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((ee = d.value.options) != null && ee.length),
              options: d.value.options,
              choice: (U = t.nodeChoices) == null ? void 0 : U.get(d.value.node_type),
              status: x.value,
              "status-label": C.value,
              onMarkOptional: R,
              onSkip: S,
              onManualEntry: G,
              onSearch: J,
              onOptionSelected: P,
              onClearChoice: F
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", Mi, [...X[6] || (X[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), E(Me, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(N, ["self"])
          }, [
            e("div", Ri, [
              e("div", { class: "node-modal-header" }, [
                X[7] || (X[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Ti, [
                h(Ke, {
                  modelValue: v.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (b) => v.value = b),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                g.value.length > 0 ? (o(), s("div", Li, [
                  (o(!0), s(A, null, Z(g.value, (b) => (o(), s("div", {
                    key: b.package_id,
                    class: "node-search-result-item",
                    onClick: (se) => V(b)
                  }, [
                    e("div", Ni, [
                      e("code", Di, a(b.package_id), 1),
                      b.match_confidence ? (o(), E(Yt, {
                        key: 0,
                        confidence: b.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    b.description ? (o(), s("div", Pi, a(b.description), 1)) : c("", !0)
                  ], 8, zi))), 128))
                ])) : v.value && !y.value ? (o(), s("div", Ui, ' No packages found matching "' + a(v.value) + '" ', 1)) : c("", !0),
                y.value ? (o(), s("div", Oi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), E(Me, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(T, ["self"])
          }, [
            e("div", Bi, [
              e("div", { class: "node-modal-header" }, [
                X[8] || (X[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Fi, [
                h(Ke, {
                  modelValue: l.value,
                  "onUpdate:modelValue": X[3] || (X[3] = (b) => l.value = b),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ai, [
                  h(de, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: i(() => [...X[9] || (X[9] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  h(de, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: le
                  }, {
                    default: i(() => [...X[10] || (X[10] = [
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
}), Wi = /* @__PURE__ */ Y(Vi, [["__scopeId", "data-v-6474069a"]]), Gi = { class: "node-info" }, ji = { class: "node-info-text" }, Hi = { class: "item-body" }, qi = {
  key: 0,
  class: "resolved-state"
}, Ki = {
  key: 1,
  class: "multiple-options"
}, Yi = { class: "options-list" }, Ji = ["onClick"], Qi = ["name", "value", "checked", "onChange"], Xi = { class: "option-content" }, Zi = { class: "option-header" }, er = { class: "option-filename" }, tr = { class: "option-meta" }, or = { class: "option-size" }, sr = { class: "option-category" }, nr = { class: "option-path" }, ar = { class: "action-buttons" }, lr = {
  key: 2,
  class: "unresolved"
}, ir = { class: "action-buttons" }, rr = /* @__PURE__ */ K({
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
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => !!n.choice);
    D(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), D(() => {
      var l, g;
      return ((g = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : g.filename) || "selected";
    });
    const f = D(() => {
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
    function m(l) {
      r("option-selected", l);
    }
    function v(l) {
      if (!l) return "Unknown";
      const g = l / (1024 * 1024 * 1024);
      return g >= 1 ? `${g.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, g) => (o(), s("div", {
      class: oe(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Gi, [
        e("span", ji, [
          g[7] || (g[7] = w("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: oe(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Hi, [
        p.value ? (o(), s("div", qi, [
          h(de, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (y) => r("clear-choice"))
          }, {
            default: i(() => [...g[8] || (g[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ki, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Yi, [
            (o(!0), s(A, null, Z(t.options, (y, d) => (o(), s("label", {
              key: y.model.hash,
              class: oe(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (M) => m(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (M) => m(d)
              }, null, 40, Qi),
              e("div", Xi, [
                e("div", Zi, [
                  e("span", er, a(y.model.filename), 1),
                  h(Yt, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", tr, [
                  e("span", or, a(v(y.model.size)), 1),
                  e("span", sr, a(y.model.category), 1)
                ]),
                e("div", nr, a(y.model.relative_path), 1)
              ])
            ], 10, Ji))), 128))
          ]),
          e("div", ar, [
            h(de, {
              variant: "ghost",
              size: "sm",
              onClick: g[1] || (g[1] = (y) => r("search"))
            }, {
              default: i(() => [...g[9] || (g[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "ghost",
              size: "sm",
              onClick: g[2] || (g[2] = (y) => r("download-url"))
            }, {
              default: i(() => [...g[10] || (g[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (y) => r("mark-optional"))
            }, {
              default: i(() => [...g[11] || (g[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", lr, [
          g[16] || (g[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ir, [
            h(de, {
              variant: "primary",
              size: "sm",
              onClick: g[4] || (g[4] = (y) => r("search"))
            }, {
              default: i(() => [...g[13] || (g[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (y) => r("download-url"))
            }, {
              default: i(() => [...g[14] || (g[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (y) => r("mark-optional"))
            }, {
              default: i(() => [...g[15] || (g[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), dr = /* @__PURE__ */ Y(rr, [["__scopeId", "data-v-8a82fefa"]]), cr = { class: "model-resolution-step" }, ur = { class: "step-header" }, mr = { class: "step-info" }, vr = { class: "step-title" }, fr = { class: "step-description" }, gr = { class: "stat-badge" }, pr = {
  key: 1,
  class: "step-body"
}, hr = {
  key: 2,
  class: "empty-state"
}, yr = { class: "model-search-modal" }, wr = { class: "model-modal-body" }, kr = {
  key: 0,
  class: "model-search-results"
}, br = ["onClick"], _r = { class: "model-result-header" }, $r = { class: "model-result-filename" }, Cr = { class: "model-result-meta" }, xr = { class: "model-result-category" }, Sr = { class: "model-result-size" }, Ir = {
  key: 0,
  class: "model-result-path"
}, Er = {
  key: 1,
  class: "model-no-results"
}, Mr = {
  key: 2,
  class: "model-searching"
}, Rr = { class: "model-download-url-modal" }, Tr = { class: "model-modal-body" }, Lr = { class: "model-input-group" }, zr = { class: "model-input-group" }, Nr = { class: "model-modal-actions" }, Dr = /* @__PURE__ */ K({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: u }) {
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
    function r(U) {
      var b;
      return U && ((b = n[U]) == null ? void 0 : b[0]) || null;
    }
    const p = t, f = u, m = $(0), v = $(!1), l = $(!1), g = $(""), y = $(""), d = $(""), M = $([]), k = $(!1), z = D(() => p.models[m.value]), _ = D(() => p.models.some((U) => U.is_download_intent)), x = D(() => p.models.filter(
      (U) => p.modelChoices.has(U.filename) || U.is_download_intent
    ).length), C = D(() => {
      var b;
      if (!z.value) return "";
      const U = r((b = z.value.reference) == null ? void 0 : b.node_type);
      return U ? `${U}/${z.value.filename}` : "";
    }), W = D(() => {
      var b;
      if (!z.value) return "not-found";
      const U = p.modelChoices.get(z.value.filename);
      if (U)
        switch (U.action) {
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
      return z.value.is_download_intent ? "download" : (b = z.value.options) != null && b.length ? "ambiguous" : "not-found";
    }), R = D(() => {
      var b, se;
      if (!z.value) return;
      const U = p.modelChoices.get(z.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (b = U.selected_model) != null && b.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (se = z.value.options) != null && se.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function S(U) {
      U >= 0 && U < p.models.length && (m.value = U);
    }
    function P() {
      z.value && f("mark-optional", z.value.filename);
    }
    function F() {
      z.value && f("skip", z.value.filename);
    }
    function J(U) {
      z.value && f("option-selected", z.value.filename, U);
    }
    function G() {
      z.value && f("clear-choice", z.value.filename);
    }
    function N() {
      z.value && (g.value = z.value.filename, v.value = !0);
    }
    function T() {
      z.value && (y.value = z.value.download_source || "", d.value = z.value.target_path || C.value, l.value = !0);
    }
    function O() {
      v.value = !1, g.value = "", M.value = [];
    }
    function V() {
      l.value = !1, y.value = "", d.value = "";
    }
    function le() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function re(U) {
      z.value && O();
    }
    function X() {
      !z.value || !y.value.trim() || (f("download-url", z.value.filename, y.value.trim(), d.value.trim() || void 0), V());
    }
    function ee(U) {
      if (!U) return "Unknown";
      const b = U / (1024 * 1024 * 1024);
      return b >= 1 ? `${b.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, b) => {
      var se, te, xe;
      return o(), s("div", cr, [
        e("div", ur, [
          e("div", mr, [
            e("h3", vr, a(_.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", fr, a(_.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", gr, a(x.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (o(), E(mo, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: b[0] || (b[0] = (ke) => S(m.value - 1)),
          onNext: b[1] || (b[1] = (ke) => S(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        z.value ? (o(), s("div", pr, [
          h(dr, {
            filename: z.value.filename,
            "node-type": ((se = z.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((te = z.value.options) != null && te.length),
            options: z.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(z.value.filename),
            status: W.value,
            "status-label": R.value,
            onMarkOptional: P,
            onSkip: F,
            onDownloadUrl: T,
            onSearch: N,
            onOptionSelected: J,
            onClearChoice: G
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", hr, [...b[5] || (b[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), E(Me, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(O, ["self"])
          }, [
            e("div", yr, [
              e("div", { class: "model-modal-header" }, [
                b[6] || (b[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", wr, [
                h(Ke, {
                  modelValue: g.value,
                  "onUpdate:modelValue": b[2] || (b[2] = (ke) => g.value = ke),
                  placeholder: "Search by filename, category...",
                  onInput: le
                }, null, 8, ["modelValue"]),
                M.value.length > 0 ? (o(), s("div", kr, [
                  (o(!0), s(A, null, Z(M.value, (ke) => (o(), s("div", {
                    key: ke.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => re()
                  }, [
                    e("div", _r, [
                      e("code", $r, a(ke.filename), 1)
                    ]),
                    e("div", Cr, [
                      e("span", xr, a(ke.category), 1),
                      e("span", Sr, a(ee(ke.size)), 1)
                    ]),
                    ke.relative_path ? (o(), s("div", Ir, a(ke.relative_path), 1)) : c("", !0)
                  ], 8, br))), 128))
                ])) : g.value && !k.value ? (o(), s("div", Er, ' No models found matching "' + a(g.value) + '" ', 1)) : c("", !0),
                k.value ? (o(), s("div", Mr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), E(Me, { to: "body" }, [
          l.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(V, ["self"])
          }, [
            e("div", Rr, [
              e("div", { class: "model-modal-header" }, [
                b[7] || (b[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Tr, [
                e("div", Lr, [
                  b[8] || (b[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  h(Ke, {
                    modelValue: y.value,
                    "onUpdate:modelValue": b[3] || (b[3] = (ke) => y.value = ke),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", zr, [
                  b[9] || (b[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  h(Ke, {
                    modelValue: d.value,
                    "onUpdate:modelValue": b[4] || (b[4] = (ke) => d.value = ke),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Nr, [
                  h(de, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: i(() => [...b[10] || (b[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  h(de, {
                    variant: "primary",
                    disabled: !y.value.trim() || !d.value.trim(),
                    onClick: X
                  }, {
                    default: i(() => [...b[11] || (b[11] = [
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
}), Pr = /* @__PURE__ */ Y(Dr, [["__scopeId", "data-v-c6acbada"]]), Ur = { class: "applying-step" }, Or = {
  key: 0,
  class: "phase-content"
}, Br = {
  key: 1,
  class: "phase-content"
}, Fr = { class: "phase-description" }, Ar = { class: "overall-progress" }, Vr = { class: "progress-bar" }, Wr = { class: "progress-label" }, Gr = { class: "install-list" }, jr = { class: "install-icon" }, Hr = { key: 0 }, qr = {
  key: 1,
  class: "spinner"
}, Kr = { key: 2 }, Yr = { key: 3 }, Jr = {
  key: 0,
  class: "install-error"
}, Qr = {
  key: 2,
  class: "phase-content"
}, Xr = { class: "phase-header" }, Zr = { class: "phase-title" }, ed = { class: "completion-summary" }, td = {
  key: 0,
  class: "summary-item success"
}, od = { class: "summary-text" }, sd = {
  key: 1,
  class: "summary-item error"
}, nd = { class: "summary-text" }, ad = {
  key: 2,
  class: "failed-list"
}, ld = { class: "failed-node-id" }, id = { class: "failed-error" }, rd = {
  key: 4,
  class: "summary-item success"
}, dd = {
  key: 5,
  class: "restart-prompt"
}, cd = {
  key: 3,
  class: "phase-content error"
}, ud = { class: "error-message" }, md = /* @__PURE__ */ K({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = D(() => {
      var g, y;
      const v = ((g = u.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) || u.progress.nodesToInstall.length;
      if (!v) return 0;
      const l = ((y = u.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(l / v * 100);
    }), r = D(() => {
      var v;
      return ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((l) => !l.success)) || [];
    }), p = D(() => r.value.length > 0);
    function f(v, l) {
      var y, d;
      const g = (y = u.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((M) => M.node_id === v);
      return g ? g.success ? "complete" : "failed" : ((d = u.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) === l ? "installing" : "pending";
    }
    function m(v) {
      var l, g;
      return (g = (l = u.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((y) => y.node_id === v)) == null ? void 0 : g.error;
    }
    return (v, l) => {
      var g, y, d, M;
      return o(), s("div", Ur, [
        t.progress.phase === "resolving" ? (o(), s("div", Or, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Br, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Fr, " Installing " + a((((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ar, [
            e("div", Vr, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Wr, a(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + a(((M = t.progress.nodeInstallProgress) == null ? void 0 : M.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Gr, [
            (o(!0), s(A, null, Z(t.progress.nodesToInstall, (k, z) => (o(), s("div", {
              key: k,
              class: oe(["install-item", f(k, z)])
            }, [
              e("span", jr, [
                f(k, z) === "pending" ? (o(), s("span", Hr, "○")) : f(k, z) === "installing" ? (o(), s("span", qr, "◌")) : f(k, z) === "complete" ? (o(), s("span", Kr, "✓")) : f(k, z) === "failed" ? (o(), s("span", Yr, "✗")) : c("", !0)
              ]),
              e("code", null, a(k), 1),
              m(k) ? (o(), s("span", Jr, a(m(k)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Qr, [
          e("div", Xr, [
            e("span", {
              class: oe(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", Zr, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", ed, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", td, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", od, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", sd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", nd, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", ad, [
              (o(!0), s(A, null, Z(r.value, (k) => (o(), s("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", ld, a(k.node_id), 1),
                e("span", id, a(k.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (k) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (o(), s("div", rd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", dd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (k) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", cd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", ud, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), vd = /* @__PURE__ */ Y(md, [["__scopeId", "data-v-5efaae58"]]), fd = {
  key: 0,
  class: "loading-state"
}, gd = {
  key: 1,
  class: "wizard-content"
}, pd = {
  key: 0,
  class: "step-content"
}, hd = { class: "analysis-summary" }, yd = { class: "analysis-header" }, wd = { class: "summary-description" }, kd = { class: "stats-grid" }, bd = { class: "stat-card" }, _d = { class: "stat-items" }, $d = {
  key: 0,
  class: "stat-item success"
}, Cd = { class: "stat-count" }, xd = {
  key: 1,
  class: "stat-item info"
}, Sd = { class: "stat-count" }, Id = {
  key: 2,
  class: "stat-item warning"
}, Ed = { class: "stat-count" }, Md = {
  key: 3,
  class: "stat-item error"
}, Rd = { class: "stat-count" }, Td = { class: "stat-card" }, Ld = { class: "stat-items" }, zd = { class: "stat-item success" }, Nd = { class: "stat-count" }, Dd = {
  key: 0,
  class: "stat-item info"
}, Pd = { class: "stat-count" }, Ud = {
  key: 1,
  class: "stat-item warning"
}, Od = { class: "stat-count" }, Bd = {
  key: 2,
  class: "stat-item error"
}, Fd = { class: "stat-count" }, Ad = {
  key: 0,
  class: "status-message warning"
}, Vd = { class: "status-text" }, Wd = {
  key: 1,
  class: "status-message info"
}, Gd = { class: "status-text" }, jd = {
  key: 2,
  class: "status-message info"
}, Hd = { class: "status-text" }, qd = {
  key: 3,
  class: "status-message success"
}, Kd = {
  key: 3,
  class: "step-content"
}, Yd = { class: "review-summary" }, Jd = { class: "review-stats" }, Qd = { class: "review-stat" }, Xd = { class: "stat-value" }, Zd = { class: "review-stat" }, ec = { class: "stat-value" }, tc = { class: "review-stat" }, oc = { class: "stat-value" }, sc = { class: "review-stat" }, nc = { class: "stat-value" }, ac = {
  key: 0,
  class: "review-section"
}, lc = { class: "section-title" }, ic = { class: "review-items" }, rc = { class: "item-name" }, dc = { class: "item-choice" }, cc = {
  key: 0,
  class: "choice-badge install"
}, uc = {
  key: 1,
  class: "choice-badge skip"
}, mc = {
  key: 1,
  class: "review-section"
}, vc = { class: "section-title" }, fc = { class: "review-items" }, gc = { class: "item-name" }, pc = { class: "item-choice" }, hc = {
  key: 0,
  class: "choice-badge install"
}, yc = {
  key: 1,
  class: "choice-badge optional"
}, wc = {
  key: 2,
  class: "choice-badge skip"
}, kc = {
  key: 1,
  class: "choice-badge pending"
}, bc = {
  key: 2,
  class: "review-section"
}, _c = { class: "section-title" }, $c = { class: "review-items" }, Cc = { class: "item-name" }, xc = { class: "item-choice" }, Sc = {
  key: 0,
  class: "choice-badge install"
}, Ic = {
  key: 1,
  class: "choice-badge download"
}, Ec = {
  key: 2,
  class: "choice-badge optional"
}, Mc = {
  key: 3,
  class: "choice-badge skip"
}, Rc = {
  key: 4,
  class: "choice-badge skip"
}, Tc = {
  key: 1,
  class: "choice-badge download"
}, Lc = {
  key: 2,
  class: "choice-badge pending"
}, zc = {
  key: 3,
  class: "no-choices"
}, Nc = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: p, applyResolution: f, installNodes: m, queueModelDownloads: v, progress: l, resetProgress: g } = Cl(), { loadPendingDownloads: y } = Tt(), d = $(null), M = $(!1), k = $(!1), z = $(null), _ = $("analysis"), x = $([]), C = $(/* @__PURE__ */ new Map()), W = $(/* @__PURE__ */ new Map()), R = $(/* @__PURE__ */ new Set()), S = D(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return (F.value || N.value) && H.push({ id: "nodes", label: "Nodes" }), (J.value || G.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), _.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), P = D(() => d.value ? d.value.stats.needs_user_input : !1), F = D(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), J = D(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), G = D(() => d.value ? d.value.stats.download_intents > 0 : !1), N = D(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), T = D(() => d.value ? d.value.nodes.resolved.length : 0), O = D(() => {
      if (!d.value) return [];
      const H = d.value.nodes.resolved.filter((I) => !I.is_installed), B = /* @__PURE__ */ new Set();
      return H.filter((I) => B.has(I.package.package_id) ? !1 : (B.add(I.package.package_id), !0));
    }), V = D(() => {
      if (!d.value) return [];
      const H = d.value.nodes.resolved.filter((I) => !I.is_installed), B = /* @__PURE__ */ new Map();
      for (const I of H) {
        const q = B.get(I.package.package_id);
        q ? q.node_types_count++ : B.set(I.package.package_id, {
          package_id: I.package.package_id,
          title: I.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), le = D(() => O.value.filter((H) => !R.value.has(H.package.package_id))), re = D(() => d.value ? d.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), X = D(() => {
      if (!d.value) return [];
      const H = d.value.nodes.unresolved.map((I) => ({
        node_type: I.reference.node_type,
        reason: I.reason,
        is_unresolved: !0,
        options: void 0
      })), B = d.value.nodes.ambiguous.map((I) => ({
        node_type: I.reference.node_type,
        has_multiple_options: !0,
        options: I.options.map((q) => ({
          package_id: q.package.package_id,
          title: q.package.title,
          match_confidence: q.match_confidence,
          match_type: q.match_type,
          is_installed: q.is_installed
        }))
      }));
      return [...H, ...B];
    }), ee = D(() => {
      if (!d.value) return [];
      const H = d.value.models.unresolved.map((I) => ({
        filename: I.reference.widget_value,
        reference: I.reference,
        reason: I.reason,
        is_unresolved: !0,
        options: void 0
      })), B = d.value.models.ambiguous.map((I) => ({
        filename: I.reference.widget_value,
        reference: I.reference,
        has_multiple_options: !0,
        options: I.options.map((q) => ({
          model: q.model,
          match_confidence: q.match_confidence,
          match_type: q.match_type,
          has_download_source: q.has_download_source
        }))
      }));
      return [...H, ...B];
    }), U = D(() => {
      const H = ee.value, B = re.value.map((I) => ({
        filename: I.filename,
        reference: I.reference,
        is_download_intent: !0,
        resolved_model: I.resolved_model,
        download_source: I.download_source,
        target_path: I.target_path,
        options: void 0
      }));
      return [...H, ...B];
    }), b = D(() => {
      let H = le.value.length;
      for (const B of C.value.values())
        B.action === "install" && H++;
      for (const B of W.value.values())
        B.action === "select" && H++;
      return H;
    }), se = D(() => {
      let H = 0;
      for (const B of W.value.values())
        B.action === "download" && H++;
      return H;
    }), te = D(() => {
      let H = 0;
      for (const B of C.value.values())
        B.action === "optional" && H++;
      for (const B of W.value.values())
        B.action === "optional" && H++;
      return H;
    }), xe = D(() => {
      let H = R.value.size;
      for (const B of C.value.values())
        B.action === "skip" && H++;
      for (const B of W.value.values())
        B.action === "skip" && H++;
      for (const B of X.value)
        C.value.has(B.node_type) || H++;
      for (const B of ee.value)
        W.value.has(B.filename) || H++;
      return H;
    }), ke = D(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, F.value) {
        const B = X.value.length, I = X.value.filter(
          (q) => C.value.has(q.node_type)
        ).length;
        H.nodes = { resolved: I, total: B };
      }
      if (J.value || G.value) {
        const B = U.value.length, I = U.value.filter(
          (q) => W.value.has(q.filename) || q.is_download_intent
        ).length;
        H.models = { resolved: I, total: B };
      }
      if (H.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const B = l.totalFiles || 1, I = l.completedFiles.length;
        H.applying = { resolved: I, total: B };
      }
      return H;
    });
    function Te(H) {
      _.value = H;
    }
    function Oe() {
      const H = S.value.findIndex((B) => B.id === _.value);
      H > 0 && (_.value = S.value[H - 1].id);
    }
    function ue() {
      const H = S.value.findIndex((B) => B.id === _.value);
      H < S.value.length - 1 && (_.value = S.value[H + 1].id);
    }
    async function Be() {
      M.value = !0, z.value = null;
      try {
        d.value = await p(n.workflowName);
      } catch (H) {
        z.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        M.value = !1;
      }
    }
    function ye() {
      x.value.includes("analysis") || x.value.push("analysis"), F.value || N.value ? _.value = "nodes" : J.value || G.value ? _.value = "models" : _.value = "review";
    }
    function Le(H) {
      C.value.set(H, { action: "optional" });
    }
    function Ve(H) {
      C.value.set(H, { action: "skip" });
    }
    function Je(H, B) {
      var q;
      const I = X.value.find((ce) => ce.node_type === H);
      (q = I == null ? void 0 : I.options) != null && q[B] && C.value.set(H, {
        action: "install",
        package_id: I.options[B].package_id
      });
    }
    function fe(H, B) {
      C.value.set(H, {
        action: "install",
        package_id: B
      });
    }
    function We(H) {
      C.value.delete(H);
    }
    function Ge(H) {
      R.value.has(H) ? R.value.delete(H) : R.value.add(H);
    }
    function je(H) {
      W.value.set(H, { action: "optional" });
    }
    function dt(H) {
      W.value.set(H, { action: "skip" });
    }
    function ve(H, B) {
      var q;
      const I = ee.value.find((ce) => ce.filename === H);
      (q = I == null ? void 0 : I.options) != null && q[B] && W.value.set(H, {
        action: "select",
        selected_model: I.options[B].model
      });
    }
    function ze(H, B, I) {
      W.value.set(H, {
        action: "download",
        url: B,
        target_path: I
      });
    }
    function ct(H) {
      W.value.delete(H);
    }
    async function st() {
      var H;
      k.value = !0, z.value = null, g(), l.phase = "resolving", _.value = "applying";
      try {
        const B = await f(n.workflowName, C.value, W.value, R.value);
        B.models_to_download && B.models_to_download.length > 0 && v(n.workflowName, B.models_to_download);
        const I = [
          ...B.nodes_to_install || [],
          ...le.value.map((ce) => ce.package.package_id)
        ];
        l.nodesToInstall = [...new Set(I)], l.nodesToInstall.length > 0 && await m(n.workflowName), l.phase = "complete", await y();
        const q = l.installError || ((H = l.nodeInstallProgress) == null ? void 0 : H.completedNodes.some((ce) => !ce.success));
        !l.needsRestart && !q && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (B) {
        z.value = B instanceof Error ? B.message : "Failed to apply resolution", l.error = z.value, l.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function Se() {
      r("refresh"), r("restart"), r("close");
    }
    async function ut() {
      var B;
      const H = ((B = l.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((I) => !I.success).map((I) => I.node_id)) || [];
      if (H.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: H.length
        }, l.nodesToInstall = H, l.nodesInstalled = [], l.installError = void 0;
        try {
          await m(n.workflowName), l.phase = "complete";
        } catch (I) {
          l.error = I instanceof Error ? I.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ie(Be), (H, B) => (o(), E(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: M.value,
      error: z.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (I) => r("close"))
    }, {
      body: i(() => [
        M.value && !d.value ? (o(), s("div", fd, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", gd, [
          h(Nl, {
            steps: S.value,
            "current-step": _.value,
            "completed-steps": x.value,
            "step-stats": ke.value,
            onStepChange: Te
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), s("div", pd, [
            e("div", hd, [
              e("div", yd, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", wd, " Found " + a(d.value.stats.total_nodes) + " nodes and " + a(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", kd, [
                e("div", bd, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", _d, [
                    T.value > 0 ? (o(), s("div", $d, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Cd, a(T.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", xd, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Sd, a(d.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", Id, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ed, a(d.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", Md, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Rd, a(d.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Td, [
                  B[21] || (B[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ld, [
                    e("div", zd, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Nd, a(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Dd, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pd, a(d.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Ud, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Od, a(d.value.models.ambiguous.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", Bd, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fd, a(d.value.models.unresolved.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              P.value ? (o(), s("div", Ad, [
                B[22] || (B[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vd, a(X.value.length + ee.value.length) + " items need your input", 1)
              ])) : N.value ? (o(), s("div", Wd, [
                B[23] || (B[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gd, a(d.value.stats.packages_needing_installation) + " package" + a(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(d.value.stats.nodes_needing_installation) + " node type" + a(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(G.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : G.value ? (o(), s("div", jd, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hd, a(d.value.stats.download_intents) + " model" + a(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", qd, [...B[25] || (B[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), E(Wi, {
            key: 1,
            nodes: X.value,
            "node-choices": C.value,
            "auto-resolved-packages": V.value,
            "skipped-packages": R.value,
            onMarkOptional: Le,
            onSkip: Ve,
            onOptionSelected: Je,
            onManualEntry: fe,
            onClearChoice: We,
            onPackageSkip: Ge
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          _.value === "models" ? (o(), E(Pr, {
            key: 2,
            models: U.value,
            "model-choices": W.value,
            onMarkOptional: je,
            onSkip: dt,
            onOptionSelected: ve,
            onDownloadUrl: ze,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), s("div", Kd, [
            e("div", Yd, [
              B[30] || (B[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Jd, [
                e("div", Qd, [
                  e("span", Xd, a(b.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zd, [
                  e("span", ec, a(se.value), 1),
                  B[27] || (B[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", tc, [
                  e("span", oc, a(te.value), 1),
                  B[28] || (B[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", sc, [
                  e("span", nc, a(xe.value), 1),
                  B[29] || (B[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              V.value.length > 0 ? (o(), s("div", ac, [
                e("h4", lc, "Node Packages (" + a(V.value.length) + ")", 1),
                e("div", ic, [
                  (o(!0), s(A, null, Z(V.value, (I) => (o(), s("div", {
                    key: I.package_id,
                    class: "review-item"
                  }, [
                    e("code", rc, a(I.package_id), 1),
                    e("div", dc, [
                      R.value.has(I.package_id) ? (o(), s("span", uc, "Skipped")) : (o(), s("span", cc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              X.value.length > 0 ? (o(), s("div", mc, [
                e("h4", vc, "Node Choices (" + a(X.value.length) + ")", 1),
                e("div", fc, [
                  (o(!0), s(A, null, Z(X.value, (I) => {
                    var q, ce, be, ne;
                    return o(), s("div", {
                      key: I.node_type,
                      class: "review-item"
                    }, [
                      e("code", gc, a(I.node_type), 1),
                      e("div", pc, [
                        C.value.has(I.node_type) ? (o(), s(A, { key: 0 }, [
                          ((q = C.value.get(I.node_type)) == null ? void 0 : q.action) === "install" ? (o(), s("span", hc, a((ce = C.value.get(I.node_type)) == null ? void 0 : ce.package_id), 1)) : ((be = C.value.get(I.node_type)) == null ? void 0 : be.action) === "optional" ? (o(), s("span", yc, " Optional ")) : ((ne = C.value.get(I.node_type)) == null ? void 0 : ne.action) === "skip" ? (o(), s("span", wc, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", kc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (o(), s("div", bc, [
                e("h4", _c, "Models (" + a(U.value.length) + ")", 1),
                e("div", $c, [
                  (o(!0), s(A, null, Z(U.value, (I) => {
                    var q, ce, be, ne, ae, we, Lt;
                    return o(), s("div", {
                      key: I.filename,
                      class: "review-item"
                    }, [
                      e("code", Cc, a(I.filename), 1),
                      e("div", xc, [
                        W.value.has(I.filename) ? (o(), s(A, { key: 0 }, [
                          ((q = W.value.get(I.filename)) == null ? void 0 : q.action) === "select" ? (o(), s("span", Sc, a((be = (ce = W.value.get(I.filename)) == null ? void 0 : ce.selected_model) == null ? void 0 : be.filename), 1)) : ((ne = W.value.get(I.filename)) == null ? void 0 : ne.action) === "download" ? (o(), s("span", Ic, " Download ")) : ((ae = W.value.get(I.filename)) == null ? void 0 : ae.action) === "optional" ? (o(), s("span", Ec, " Optional ")) : ((we = W.value.get(I.filename)) == null ? void 0 : we.action) === "skip" ? (o(), s("span", Mc, " Skip ")) : ((Lt = W.value.get(I.filename)) == null ? void 0 : Lt.action) === "cancel_download" ? (o(), s("span", Rc, " Cancel Download ")) : c("", !0)
                        ], 64)) : I.is_download_intent ? (o(), s("span", Tc, " Pending Download ")) : (o(), s("span", Lc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              O.value.length === 0 && X.value.length === 0 && U.value.length === 0 ? (o(), s("div", zc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), E(vd, {
            key: 4,
            progress: pe(l),
            onRestart: Se,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), E(de, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Oe
        }, {
          default: i(() => [...B[31] || (B[31] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[35] || (B[35] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || pe(l).phase === "complete" || pe(l).phase === "error" ? (o(), E(de, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (I) => r("close"))
        }, {
          default: i(() => [
            w(a(pe(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), E(de, {
          key: 2,
          variant: "primary",
          disabled: M.value,
          onClick: ye
        }, {
          default: i(() => [...B[32] || (B[32] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), E(de, {
          key: 3,
          variant: "primary",
          onClick: ue
        }, {
          default: i(() => [
            w(a(J.value || G.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), E(de, {
          key: 4,
          variant: "primary",
          onClick: ue
        }, {
          default: i(() => [...B[33] || (B[33] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), E(de, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: st
        }, {
          default: i(() => [...B[34] || (B[34] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Dc = /* @__PURE__ */ Y(Nc, [["__scopeId", "data-v-0d3f93e6"]]), Pc = { class: "search-input-wrapper" }, Uc = ["value", "placeholder"], Oc = /* @__PURE__ */ K({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(null);
    let f;
    function m(l) {
      const g = l.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        r("update:modelValue", g);
      }, n.debounce)) : r("update:modelValue", g);
    }
    function v() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = p.value) == null || l.focus();
    }
    return Ie(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (l, g) => (o(), s("div", Pc, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: rt(v, ["escape"])
      }, null, 40, Uc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Bc = /* @__PURE__ */ Y(Oc, [["__scopeId", "data-v-266f857a"]]), Fc = { class: "search-bar" }, Ac = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", Fc, [
      h(Bc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), kt = /* @__PURE__ */ Y(Ac, [["__scopeId", "data-v-3d51bbfd"]]), Vc = { class: "section-group" }, Wc = {
  key: 0,
  class: "section-content"
}, Gc = /* @__PURE__ */ K({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(n.initiallyExpanded);
    function f() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (m, v) => (o(), s("section", Vc, [
      h(He, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: f
      }, {
        default: i(() => [
          w(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (o(), s("div", Wc, [
        ge(m.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ Y(Gc, [["__scopeId", "data-v-c48e33ed"]]), jc = { class: "item-header" }, Hc = {
  key: 0,
  class: "item-icon"
}, qc = { class: "item-info" }, Kc = {
  key: 0,
  class: "item-title"
}, Yc = {
  key: 1,
  class: "item-subtitle"
}, Jc = {
  key: 0,
  class: "item-details"
}, Qc = {
  key: 1,
  class: "item-actions"
}, Xc = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = D(() => n.status ? `status-${n.status}` : "");
    return (p, f) => (o(), s("div", {
      class: oe(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: f[0] || (f[0] = (m) => t.clickable && p.$emit("click"))
    }, [
      e("div", jc, [
        p.$slots.icon ? (o(), s("span", Hc, [
          ge(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", qc, [
          p.$slots.title ? (o(), s("div", Kc, [
            ge(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (o(), s("div", Yc, [
            ge(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", Jc, [
        ge(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (o(), s("div", Qc, [
        ge(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ Y(Xc, [["__scopeId", "data-v-cc435e0e"]]), Zc = { class: "loading-state" }, eu = { class: "loading-message" }, tu = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", Zc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", eu, a(t.message), 1)
    ]));
  }
}), lt = /* @__PURE__ */ Y(tu, [["__scopeId", "data-v-ad8436c9"]]), ou = { class: "error-state" }, su = { class: "error-message" }, nu = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", ou, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", su, a(t.message), 1),
      t.retry ? (o(), E(Q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), it = /* @__PURE__ */ Y(nu, [["__scopeId", "data-v-5397be48"]]), au = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: p } = Re();
    co();
    const f = $([]), m = $(!1), v = $(null), l = $(""), g = $(!0), y = $(!1), d = $(!1), M = $(!1), k = $(null), z = D(
      () => f.value.filter((ee) => ee.status === "broken")
    ), _ = D(
      () => f.value.filter((ee) => ee.status === "new")
    ), x = D(
      () => f.value.filter((ee) => ee.status === "modified")
    ), C = D(
      () => f.value.filter((ee) => ee.status === "synced")
    ), W = D(() => {
      if (!l.value.trim()) return f.value;
      const ee = l.value.toLowerCase();
      return f.value.filter((U) => U.name.toLowerCase().includes(ee));
    }), R = D(
      () => z.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), S = D(
      () => _.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), P = D(
      () => x.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), F = D(
      () => C.value.filter(
        (ee) => !l.value.trim() || ee.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), J = D(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function G(ee = !1) {
      m.value = !0, v.value = null;
      try {
        f.value = await p(ee);
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    u({ loadWorkflows: G });
    function N(ee) {
      k.value = ee, d.value = !0;
    }
    function T(ee) {
      k.value = ee, M.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function V() {
      r("refresh");
    }
    async function le() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(ee) {
      const U = [];
      return ee.missing_nodes > 0 && U.push(`${ee.missing_nodes} missing node${ee.missing_nodes > 1 ? "s" : ""}`), ee.missing_models > 0 && U.push(`${ee.missing_models} missing model${ee.missing_models > 1 ? "s" : ""}`), ee.pending_downloads && ee.pending_downloads > 0 && U.push(`${ee.pending_downloads} pending download${ee.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function X(ee) {
      const U = ee.sync_state === "new" ? "New" : ee.sync_state === "modified" ? "Modified" : ee.sync_state === "synced" ? "Synced" : ee.sync_state;
      return ee.has_path_sync_issues && ee.models_needing_path_sync && ee.models_needing_path_sync > 0 ? `${ee.models_needing_path_sync} model path${ee.models_needing_path_sync > 1 ? "s" : ""} need${ee.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Ie(G), (ee, U) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, { title: "WORKFLOWS" }, {
            actions: i(() => [
              z.value.length > 0 ? (o(), E(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...U[8] || (U[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": U[0] || (U[0] = (b) => l.value = b),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (o(), E(lt, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), E(it, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            R.value.length ? (o(), E(Ee, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(R.value, (b) => (o(), E(Ae, {
                  key: b.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[9] || (U[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(re(b)), 1)
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => T(b.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => N(b.name)
                    }, {
                      default: i(() => [...U[11] || (U[11] = [
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
            S.value.length ? (o(), E(Ee, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(S.value, (b) => (o(), E(Ae, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(a(b.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(X(b)), 1)
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => N(b.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
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
            P.value.length ? (o(), E(Ee, {
              key: 2,
              title: "MODIFIED",
              count: P.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(P.value, (b) => (o(), E(Ae, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[13] || (U[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(X(b)), 1)
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => N(b.name)
                    }, {
                      default: i(() => [...U[14] || (U[14] = [
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
            F.value.length ? (o(), E(Ee, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": g.value,
              onToggle: U[2] || (U[2] = (b) => g.value = b)
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(J.value, (b) => (o(), E(Ae, {
                  key: b.name,
                  status: b.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(a(b.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(a(b.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(X(b)), 1)
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => N(b.name)
                    }, {
                      default: i(() => [...U[15] || (U[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (o(), E(Q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (b) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            W.value.length ? c("", !0) : (o(), E(Ye, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && k.value ? (o(), E(bl, {
        key: 0,
        "workflow-name": k.value,
        onClose: U[3] || (U[3] = (b) => d.value = !1),
        onResolve: U[4] || (U[4] = (b) => T(k.value)),
        onRefresh: U[5] || (U[5] = (b) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      M.value && k.value ? (o(), E(Dc, {
        key: 1,
        "workflow-name": k.value,
        onClose: U[6] || (U[6] = (b) => M.value = !1),
        onInstall: V,
        onRefresh: U[7] || (U[7] = (b) => r("refresh")),
        onRestart: le
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), lu = /* @__PURE__ */ Y(au, [["__scopeId", "data-v-b7939cb4"]]), iu = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["summary-bar", t.variant])
    }, [
      ge(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Y(iu, [["__scopeId", "data-v-ccb7816e"]]), ru = {
  key: 0,
  class: "model-details"
}, du = { class: "detail-section" }, cu = { class: "detail-row" }, uu = { class: "detail-value mono" }, mu = { class: "detail-row" }, vu = { class: "detail-value mono" }, fu = { class: "detail-row" }, gu = { class: "detail-value mono" }, pu = { class: "detail-row" }, hu = { class: "detail-value" }, yu = { class: "detail-row" }, wu = { class: "detail-value" }, ku = { class: "detail-row" }, bu = { class: "detail-value" }, _u = { class: "detail-section" }, $u = { class: "section-header" }, Cu = {
  key: 0,
  class: "locations-list"
}, xu = { class: "location-path mono" }, Su = {
  key: 0,
  class: "location-modified"
}, Iu = ["onClick"], Eu = {
  key: 1,
  class: "empty-state"
}, Mu = { class: "detail-section" }, Ru = { class: "section-header" }, Tu = {
  key: 0,
  class: "sources-list"
}, Lu = { class: "source-type" }, zu = ["href"], Nu = ["disabled", "onClick"], Du = {
  key: 1,
  class: "empty-state"
}, Pu = { class: "add-source-form" }, Uu = ["disabled"], Ou = {
  key: 2,
  class: "source-error"
}, Bu = {
  key: 3,
  class: "source-success"
}, Fu = /* @__PURE__ */ K({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: f, openFileLocation: m } = Re(), v = $(null), l = $(!0), g = $(null), y = $(""), d = $(!1), M = $(null), k = $(null), z = $(null), _ = $(null);
    let x = null;
    function C(G, N = "success", T = 2e3) {
      x && clearTimeout(x), _.value = { message: G, type: N }, x = setTimeout(() => {
        _.value = null;
      }, T);
    }
    function W(G) {
      if (!G) return "Unknown";
      const N = 1024 * 1024 * 1024, T = 1024 * 1024;
      return G >= N ? `${(G / N).toFixed(1)} GB` : G >= T ? `${(G / T).toFixed(0)} MB` : `${(G / 1024).toFixed(0)} KB`;
    }
    function R(G) {
      navigator.clipboard.writeText(G), C("Copied to clipboard!");
    }
    async function S(G) {
      try {
        await m(G), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function P() {
      if (!(!y.value.trim() || !v.value)) {
        d.value = !0, k.value = null, z.value = null;
        try {
          await p(v.value.hash, y.value.trim()), z.value = "Source added successfully!", y.value = "", await J();
        } catch (G) {
          k.value = G instanceof Error ? G.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function F(G) {
      if (v.value) {
        M.value = G, k.value = null, z.value = null;
        try {
          await f(v.value.hash, G), C("Source removed"), await J();
        } catch (N) {
          k.value = N instanceof Error ? N.message : "Failed to remove source";
        } finally {
          M.value = null;
        }
      }
    }
    async function J() {
      l.value = !0, g.value = null;
      try {
        v.value = await r(n.identifier);
      } catch (G) {
        g.value = G instanceof Error ? G.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ie(J), (G, N) => {
      var T;
      return o(), s(A, null, [
        h(tt, {
          title: `Model Details: ${((T = v.value) == null ? void 0 : T.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: g.value,
          onClose: N[5] || (N[5] = (O) => G.$emit("close"))
        }, {
          body: i(() => {
            var O, V, le, re;
            return [
              v.value ? (o(), s("div", ru, [
                e("section", du, [
                  e("div", cu, [
                    N[6] || (N[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", uu, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[0] || (N[0] = (X) => R(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", mu, [
                    N[7] || (N[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", vu, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[1] || (N[1] = (X) => R(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", fu, [
                    N[8] || (N[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", gu, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[2] || (N[2] = (X) => R(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", pu, [
                    N[9] || (N[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", hu, a(W(v.value.size)), 1)
                  ]),
                  e("div", yu, [
                    N[10] || (N[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", wu, a(v.value.category), 1)
                  ]),
                  e("div", ku, [
                    N[11] || (N[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", bu, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", _u, [
                  e("h4", $u, "Locations (" + a(((O = v.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (V = v.value.locations) != null && V.length ? (o(), s("div", Cu, [
                    (o(!0), s(A, null, Z(v.value.locations, (X, ee) => (o(), s("div", {
                      key: ee,
                      class: "location-item"
                    }, [
                      e("span", xu, a(X.path), 1),
                      X.modified ? (o(), s("span", Su, "Modified: " + a(X.modified), 1)) : c("", !0),
                      X.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => S(X.path)
                      }, " Open File Location ", 8, Iu)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Eu, "No locations found"))
                ]),
                e("section", Mu, [
                  e("h4", Ru, "Download Sources (" + a(((le = v.value.sources) == null ? void 0 : le.length) || 0) + ")", 1),
                  (re = v.value.sources) != null && re.length ? (o(), s("div", Tu, [
                    (o(!0), s(A, null, Z(v.value.sources, (X, ee) => (o(), s("div", {
                      key: ee,
                      class: "source-item"
                    }, [
                      e("span", Lu, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, zu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: M.value === X.url,
                        onClick: (U) => F(X.url)
                      }, a(M.value === X.url ? "..." : "×"), 9, Nu)
                    ]))), 128))
                  ])) : (o(), s("div", Du, " No download sources configured ")),
                  e("div", Pu, [
                    Ze(e("input", {
                      "onUpdate:modelValue": N[3] || (N[3] = (X) => y.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ao, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || d.value,
                      onClick: P
                    }, a(d.value ? "Adding..." : "Add Source"), 9, Uu)
                  ]),
                  k.value ? (o(), s("p", Ou, a(k.value), 1)) : c("", !0),
                  z.value ? (o(), s("p", Bu, a(z.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: N[4] || (N[4] = (O) => G.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), E(Me, { to: "body" }, [
          _.value ? (o(), s("div", {
            key: 0,
            class: oe(["toast", _.value.type])
          }, a(_.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), vo = /* @__PURE__ */ Y(Fu, [["__scopeId", "data-v-f15cbb56"]]), Au = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: p } = Re(), f = $([]), m = $([]), v = $("production"), l = $(!1), g = $(null), y = $(""), d = $(!1), M = $(null);
    function k() {
      d.value = !1, n("navigate", "model-index");
    }
    const z = D(
      () => f.value.reduce((J, G) => J + (G.size || 0), 0)
    ), _ = D(() => {
      if (!y.value.trim()) return f.value;
      const J = y.value.toLowerCase();
      return f.value.filter((G) => G.filename.toLowerCase().includes(J));
    }), x = D(() => {
      if (!y.value.trim()) return m.value;
      const J = y.value.toLowerCase();
      return m.value.filter((G) => G.filename.toLowerCase().includes(J));
    }), C = D(() => {
      const J = {};
      for (const N of _.value) {
        const T = N.type || "other";
        J[T] || (J[T] = []), J[T].push(N);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(J).sort(([N], [T]) => {
        const O = G.indexOf(N), V = G.indexOf(T);
        return O >= 0 && V >= 0 ? O - V : O >= 0 ? -1 : V >= 0 ? 1 : N.localeCompare(T);
      }).map(([N, T]) => ({ type: N, models: T }));
    });
    function W(J) {
      if (!J) return "Unknown";
      const G = J / (1024 * 1024);
      return G >= 1024 ? `${(G / 1024).toFixed(1)} GB` : `${G.toFixed(0)} MB`;
    }
    function R(J) {
      M.value = J.hash || J.filename;
    }
    function S(J) {
      n("navigate", "model-index");
    }
    function P(J) {
      alert(`Download functionality not yet implemented for ${J}`);
    }
    async function F() {
      l.value = !0, g.value = null;
      try {
        const J = await r();
        f.value = J, m.value = [];
        const G = await p();
        v.value = G.environment || "production";
      } catch (J) {
        g.value = J instanceof Error ? J.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ie(F), (J, G) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (N) => d.value = !0)
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: y.value,
            "onUpdate:modelValue": G[1] || (G[1] = (N) => y.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (o(), E(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            f.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(f.value.length) + " models • " + a(W(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(A, null, Z(C.value, (N) => (o(), E(Ee, {
              key: N.type,
              title: N.type.toUpperCase(),
              count: N.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(N.models, (T) => (o(), E(Ae, {
                  key: T.hash || T.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...G[4] || (G[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(T.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(W(T.size)), 1)
                  ]),
                  details: i(() => [
                    h(Ce, {
                      label: "Used by:",
                      value: (T.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    h(Ce, {
                      label: "Path:",
                      value: T.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => R(T)
                    }, {
                      default: i(() => [...G[5] || (G[5] = [
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
            x.value.length ? (o(), E(Ee, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(x.value, (N) => (o(), E(Ae, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...G[6] || (G[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(N.filename), 1)
                  ]),
                  subtitle: i(() => [...G[7] || (G[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var T;
                    return [
                      h(Ce, {
                        label: "Required by:",
                        value: ((T = N.workflow_names) == null ? void 0 : T.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    h(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (T) => P(N.filename)
                    }, {
                      default: i(() => [...G[8] || (G[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (T) => S(N.filename)
                    }, {
                      default: i(() => [...G[9] || (G[9] = [
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
            !_.value.length && !x.value.length ? (o(), E(Ye, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      h(ot, {
        show: d.value,
        title: "About Environment Models",
        onClose: G[2] || (G[2] = (N) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            G[10] || (G[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            G[11] || (G[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          h(Q, {
            variant: "primary",
            onClick: k
          }, {
            default: i(() => [...G[12] || (G[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), E(vo, {
        key: 0,
        identifier: M.value,
        onClose: G[3] || (G[3] = (N) => M.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Vu = /* @__PURE__ */ Y(Au, [["__scopeId", "data-v-cb4f12b3"]]), Wu = {
  key: 0,
  class: "indexing-progress"
}, Gu = { class: "progress-info" }, ju = { class: "progress-label" }, Hu = { class: "progress-count" }, qu = { class: "progress-bar" }, Ku = { class: "modal-content" }, Yu = { class: "modal-header" }, Ju = { class: "modal-body" }, Qu = { class: "input-group" }, Xu = { class: "current-path" }, Zu = { class: "input-group" }, em = { class: "modal-footer" }, tm = { class: "modal-content" }, om = { class: "modal-header" }, sm = { class: "modal-body" }, nm = { class: "input-group" }, am = { class: "input-group" }, lm = { class: "modal-footer" }, im = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: f
    } = Re(), { addToQueue: m } = Tt(), v = u, l = $([]), g = $(!1), y = $(!1), d = $(null), M = $(""), k = $(!1), z = $(null), _ = $(!1), x = $(null), C = $(""), W = $(!1), R = $(!1), S = $(""), P = $(""), F = $(null), J = D(
      () => l.value.reduce((U, b) => U + (b.size || 0), 0)
    ), G = D(() => {
      if (!M.value.trim()) return l.value;
      const U = M.value.toLowerCase();
      return l.value.filter((b) => {
        const se = b, te = b.sha256 || se.sha256_hash || "";
        return b.filename.toLowerCase().includes(U) || te.toLowerCase().includes(U);
      });
    }), N = D(() => {
      const U = {};
      for (const se of G.value) {
        const te = se.type || "other";
        U[te] || (U[te] = []), U[te].push(se);
      }
      const b = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([se], [te]) => {
        const xe = b.indexOf(se), ke = b.indexOf(te);
        return xe >= 0 && ke >= 0 ? xe - ke : xe >= 0 ? -1 : ke >= 0 ? 1 : se.localeCompare(te);
      }).map(([se, te]) => ({ type: se, models: te }));
    });
    function T(U) {
      if (!U) return "Unknown";
      const b = 1024 * 1024 * 1024, se = 1024 * 1024;
      return U >= b ? `${(U / b).toFixed(1)} GB` : U >= se ? `${(U / se).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function O(U) {
      z.value = U.hash || U.filename;
    }
    async function V() {
      y.value = !0, d.value = null;
      try {
        const U = await r();
        await X(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function le() {
      if (C.value.trim()) {
        W.value = !0, d.value = null;
        try {
          const U = await f(C.value.trim());
          x.value = U.path, _.value = !1, C.value = "", await X(), console.log(`Directory changed: ${U.models_indexed} models indexed`), v("refresh");
        } catch (U) {
          d.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          W.value = !1;
        }
      }
    }
    function re() {
      if (!S.value.trim() || !P.value.trim()) return;
      const U = P.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: U,
        url: S.value.trim(),
        targetPath: P.value.trim()
      }]), S.value = "", P.value = "", R.value = !1;
    }
    async function X() {
      g.value = !0, d.value = null;
      try {
        l.value = await n();
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        g.value = !1;
      }
    }
    async function ee() {
      try {
        const U = await p();
        x.value = U.path;
      } catch {
      }
    }
    return Ie(() => {
      X(), ee();
    }), (U, b) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: b[2] || (b[2] = (se) => k.value = !0)
          }, {
            actions: i(() => [
              h(Q, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: V
              }, {
                default: i(() => [
                  w(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              h(Q, {
                variant: "primary",
                size: "sm",
                onClick: b[0] || (b[0] = (se) => _.value = !0)
              }, {
                default: i(() => [...b[15] || (b[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              h(Q, {
                variant: "primary",
                size: "sm",
                onClick: b[1] || (b[1] = (se) => R.value = !0)
              }, {
                default: i(() => [...b[16] || (b[16] = [
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
          F.value ? (o(), s("div", Wu, [
            e("div", Gu, [
              e("span", ju, a(F.value.message), 1),
              e("span", Hu, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", qu, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          h(kt, {
            modelValue: M.value,
            "onUpdate:modelValue": b[3] || (b[3] = (se) => M.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          g.value || F.value ? (o(), E(lt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), E(it, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            l.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(l.value.length) + " models • " + a(T(J.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(A, null, Z(N.value, (se) => (o(), E(Ee, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(se.models, (te) => (o(), E(Ae, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...b[17] || (b[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(te.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(T(te.size)), 1)
                  ]),
                  details: i(() => [
                    h(Ce, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (xe) => O(te)
                    }, {
                      default: i(() => [...b[18] || (b[18] = [
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
            G.value.length ? c("", !0) : (o(), E(Ye, {
              key: 1,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h(ot, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: b[4] || (b[4] = (se) => k.value = !1)
      }, {
        content: i(() => [...b[19] || (b[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), E(vo, {
        key: 0,
        identifier: z.value,
        onClose: b[5] || (b[5] = (se) => z.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), E(Me, { to: "body" }, [
        _.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[9] || (b[9] = $e((se) => _.value = !1, ["self"]))
        }, [
          e("div", Ku, [
            e("div", Yu, [
              b[20] || (b[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[6] || (b[6] = (se) => _.value = !1)
              }, "✕")
            ]),
            e("div", Ju, [
              e("div", Qu, [
                b[21] || (b[21] = e("label", null, "Current Directory", -1)),
                e("code", Xu, a(x.value || "Not set"), 1)
              ]),
              e("div", Zu, [
                b[22] || (b[22] = e("label", null, "New Directory Path", -1)),
                h(Ke, {
                  modelValue: C.value,
                  "onUpdate:modelValue": b[7] || (b[7] = (se) => C.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              b[23] || (b[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", em, [
              h(de, {
                variant: "secondary",
                onClick: b[8] || (b[8] = (se) => _.value = !1)
              }, {
                default: i(() => [...b[24] || (b[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              h(de, {
                variant: "primary",
                disabled: !C.value.trim() || W.value,
                loading: W.value,
                onClick: le
              }, {
                default: i(() => [
                  w(a(W.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), E(Me, { to: "body" }, [
        R.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[14] || (b[14] = $e((se) => R.value = !1, ["self"]))
        }, [
          e("div", tm, [
            e("div", om, [
              b[25] || (b[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[10] || (b[10] = (se) => R.value = !1)
              }, "✕")
            ]),
            e("div", sm, [
              e("div", nm, [
                b[26] || (b[26] = e("label", null, "Download URL", -1)),
                h(Ke, {
                  modelValue: S.value,
                  "onUpdate:modelValue": b[11] || (b[11] = (se) => S.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", am, [
                b[27] || (b[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                h(Ke, {
                  modelValue: P.value,
                  "onUpdate:modelValue": b[12] || (b[12] = (se) => P.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              b[28] || (b[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", lm, [
              h(de, {
                variant: "secondary",
                onClick: b[13] || (b[13] = (se) => R.value = !1)
              }, {
                default: i(() => [...b[29] || (b[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              h(de, {
                variant: "primary",
                disabled: !S.value.trim() || !P.value.trim(),
                onClick: re
              }, {
                default: i(() => [...b[30] || (b[30] = [
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
}), rm = /* @__PURE__ */ Y(im, [["__scopeId", "data-v-73b78d84"]]), dm = { class: "node-details" }, cm = { class: "status-row" }, um = {
  key: 0,
  class: "detail-row"
}, mm = { class: "value" }, vm = { class: "detail-row" }, fm = { class: "value" }, gm = {
  key: 1,
  class: "detail-row"
}, pm = { class: "value mono" }, hm = {
  key: 2,
  class: "detail-row"
}, ym = ["href"], wm = {
  key: 3,
  class: "detail-row"
}, km = { class: "value mono small" }, bm = { class: "detail-row" }, _m = {
  key: 0,
  class: "value"
}, $m = {
  key: 1,
  class: "workflow-list"
}, Cm = /* @__PURE__ */ K({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, l) => (o(), E(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (g) => r("close"))
    }, {
      body: i(() => [
        e("div", dm, [
          e("div", cm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", p.value])
            }, a(f.value), 3)
          ]),
          t.node.version ? (o(), s("div", um, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", mm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", vm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", fm, a(m.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", gm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pm, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", hm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(a(t.node.repository) + " ", 1),
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
            ], 8, ym)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", wm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", km, a(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", bm, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", _m, " Not used in any workflows ")) : (o(), s("div", $m, [
              (o(!0), s(A, null, Z(t.node.used_in_workflows, (g) => (o(), s("span", {
                key: g,
                class: "workflow-tag"
              }, a(g), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        h(de, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (g) => r("close"))
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
}), xm = /* @__PURE__ */ Y(Cm, [["__scopeId", "data-v-b342f626"]]), Sm = { key: 0 }, Im = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Em = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Mm = /* @__PURE__ */ K({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: p, installNode: f, uninstallNode: m } = Re(), v = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = $(!1), g = $(null), y = $(""), d = $(!1), M = $(null), k = D(() => {
      if (!y.value.trim()) return v.value.nodes;
      const N = y.value.toLowerCase();
      return v.value.nodes.filter(
        (T) => {
          var O, V;
          return T.name.toLowerCase().includes(N) || ((O = T.description) == null ? void 0 : O.toLowerCase().includes(N)) || ((V = T.repository) == null ? void 0 : V.toLowerCase().includes(N));
        }
      );
    }), z = D(
      () => k.value.filter((N) => N.installed && N.tracked)
    ), _ = D(
      () => k.value.filter((N) => !N.installed && N.tracked)
    ), x = D(
      () => k.value.filter((N) => N.installed && !N.tracked)
    );
    function C(N) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[N] || N;
    }
    function W(N) {
      return !N.used_in_workflows || N.used_in_workflows.length === 0 ? "Not used in any workflows" : N.used_in_workflows.length === 1 ? N.used_in_workflows[0] : `${N.used_in_workflows.length} workflows`;
    }
    function R(N) {
      M.value = N;
    }
    function S() {
      n("open-node-manager");
    }
    async function P(N) {
      if (confirm(`Track "${N}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const T = await p(N);
          T.status === "success" ? (alert(`Node "${N}" is now tracked as development!`), await G()) : alert(`Failed to track node: ${T.message || "Unknown error"}`);
        } catch (T) {
          alert(`Error tracking node: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function F(N) {
      if (confirm(`Remove untracked node "${N}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const T = await m(N);
          T.status === "success" ? (alert(`Node "${N}" removed!`), await G()) : alert(`Failed to remove node: ${T.message || "Unknown error"}`);
        } catch (T) {
          alert(`Error removing node: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function J(N) {
      if (confirm(`Install node "${N}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const T = await f(N);
          T.status === "success" ? (alert(`Node "${N}" installed successfully!`), await G()) : alert(`Failed to install node: ${T.message || "Unknown error"}`);
        } catch (T) {
          alert(`Error installing node: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function G() {
      l.value = !0, g.value = null;
      try {
        v.value = await r();
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(G), (N, T) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (O) => d.value = !0)
          }, {
            actions: i(() => [
              h(Q, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: i(() => [...T[5] || (T[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: y.value,
            "onUpdate:modelValue": T[1] || (T[1] = (O) => y.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), E(lt, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (o(), E(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            v.value.total_count ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (o(), s(A, { key: 0 }, [
                  w(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                v.value.untracked_count ? (o(), s(A, { key: 1 }, [
                  w(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            x.value.length ? (o(), E(Ee, {
              key: 1,
              title: "UNTRACKED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(x.value, (O) => (o(), E(Ae, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: i(() => [...T[6] || (T[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    h(Ce, {
                      label: "Used by:",
                      value: W(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => R(O)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => P(O.name)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Q, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (V) => F(O.name)
                    }, {
                      default: i(() => [...T[10] || (T[10] = [
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
            z.value.length ? (o(), E(Ee, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(z.value, (O) => (o(), E(Ae, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(a(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    O.version ? (o(), s("span", Sm, a(O.source === "development" ? "" : "v") + a(O.version), 1)) : (o(), s("span", Im, "version unknown")),
                    e("span", Em, " • " + a(C(O.source)), 1)
                  ]),
                  details: i(() => [
                    h(Ce, {
                      label: "Used by:",
                      value: W(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => R(O)
                    }, {
                      default: i(() => [...T[11] || (T[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: S
                    }, {
                      default: i(() => [...T[12] || (T[12] = [
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
            _.value.length ? (o(), E(Ee, {
              key: 3,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(_.value, (O) => (o(), E(Ae, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: i(() => [...T[13] || (T[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...T[14] || (T[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    h(Ce, {
                      label: "Required by:",
                      value: W(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    h(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => R(O)
                    }, {
                      default: i(() => [...T[15] || (T[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => J(O.name)
                    }, {
                      default: i(() => [...T[16] || (T[16] = [
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
            !z.value.length && !_.value.length && !x.value.length ? (o(), E(Ye, {
              key: 4,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      h(ot, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: T[3] || (T[3] = (O) => d.value = !1)
      }, {
        content: i(() => [...T[17] || (T[17] = [
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
          h(Q, {
            variant: "primary",
            onClick: T[2] || (T[2] = (O) => d.value = !1)
          }, {
            default: i(() => [...T[18] || (T[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), E(xm, {
        key: 0,
        node: M.value,
        onClose: T[4] || (T[4] = (O) => M.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Rm = /* @__PURE__ */ Y(Mm, [["__scopeId", "data-v-4ac1465a"]]);
function fo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Tm = { class: "remote-url-display" }, Lm = ["title"], zm = ["title"], Nm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Dm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pm = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = D(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const f = u.url.slice(0, Math.floor(u.maxLength * 0.6)), m = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${f}...${m}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy URL:", f);
      }
    }
    return (f, m) => (o(), s("div", Tm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Lm),
      e("button", {
        class: oe(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Dm, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Nm, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, zm)
    ]));
  }
}), Um = /* @__PURE__ */ Y(Pm, [["__scopeId", "data-v-7768a58d"]]), Om = { class: "remote-title" }, Bm = {
  key: 0,
  class: "default-badge"
}, Fm = {
  key: 1,
  class: "sync-badge"
}, Am = {
  key: 0,
  class: "ahead"
}, Vm = {
  key: 1,
  class: "behind"
}, Wm = {
  key: 1,
  class: "synced"
}, Gm = ["href"], jm = {
  key: 1,
  class: "remote-url-text"
}, Hm = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = D(() => u.fetchingRemote === u.remote.name), r = D(() => u.remote.is_default), p = D(() => u.syncStatus && u.syncStatus.behind > 0), f = D(() => u.syncStatus && u.syncStatus.ahead > 0), m = D(() => u.remote.push_url !== u.remote.fetch_url), v = D(() => {
      const g = u.remote.fetch_url, y = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), l = D(() => u.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, y) => (o(), E(Ae, {
      status: r.value ? "synced" : void 0
    }, Rt({
      icon: i(() => [
        w(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Om, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (o(), s("span", Bm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", Fm, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (o(), s(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (o(), s("span", Am, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
              t.syncStatus.behind > 0 ? (o(), s("span", Vm, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
            ], 64)) : (o(), s("span", Wm, "✓ synced"))
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (o(), s("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: y[0] || (y[0] = $e(() => {
          }, ["stop"]))
        }, a(l.value), 9, Gm)) : (o(), s("span", jm, a(l.value), 1))
      ]),
      actions: i(() => [
        h(Q, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (d) => g.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...y[6] || (y[6] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        h(Q, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (d) => g.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            w(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        h(Q, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (d) => g.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            w(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        h(Q, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (d) => g.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...y[7] || (y[7] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? c("", !0) : (o(), E(Q, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (d) => g.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...y[8] || (y[8] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      m.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (o(), E(Ce, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
              h(Um, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), qm = /* @__PURE__ */ Y(Hm, [["__scopeId", "data-v-8310f3a8"]]), Km = ["for"], Ym = {
  key: 0,
  class: "base-form-field-required"
}, Jm = { class: "base-form-field-input" }, Qm = {
  key: 1,
  class: "base-form-field-error"
}, Xm = {
  key: 2,
  class: "base-form-field-hint"
}, Zm = /* @__PURE__ */ K({
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
    const u = t, n = D(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, p) => (o(), s("div", {
      class: oe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        w(a(t.label) + " ", 1),
        t.required ? (o(), s("span", Ym, "*")) : c("", !0)
      ], 8, Km)) : c("", !0),
      e("div", Jm, [
        ge(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Qm, a(t.error), 1)) : t.hint ? (o(), s("span", Xm, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Y(Zm, [["__scopeId", "data-v-9a1cf296"]]), ev = { class: "remote-form" }, tv = { class: "form-header" }, ov = { class: "form-body" }, sv = {
  key: 0,
  class: "form-error"
}, nv = { class: "form-actions" }, av = /* @__PURE__ */ K({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), f = $(!1), m = $(null);
    wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = D(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!v.value || f.value)) {
        m.value = null, f.value = !0;
        try {
          r("submit", p.value);
        } catch (g) {
          m.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (g, y) => (o(), s("div", ev, [
      e("div", tv, [
        h(He, null, {
          default: i(() => [
            w(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", ov, [
        h(Vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            h(Ke, {
              modelValue: p.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (d) => p.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        h(Vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            h(Ke, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (d) => p.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h(Vt, { label: "Push URL (optional)" }, {
          default: i(() => [
            h(Ke, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (d) => p.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), s("div", sv, a(m.value), 1)) : c("", !0)
      ]),
      e("div", nv, [
        h(Q, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: f.value,
          onClick: l
        }, {
          default: i(() => [
            w(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        h(Q, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (d) => g.$emit("cancel"))
        }, {
          default: i(() => [...y[4] || (y[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), lv = /* @__PURE__ */ Y(av, [["__scopeId", "data-v-56021b18"]]), iv = { class: "conflict-summary-box" }, rv = { class: "summary-header" }, dv = { class: "summary-text" }, cv = { key: 0 }, uv = {
  key: 1,
  class: "all-resolved"
}, mv = { class: "summary-progress" }, vv = { class: "progress-bar" }, fv = { class: "progress-text" }, gv = /* @__PURE__ */ K({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const u = t, n = D(
      () => u.conflictCount > 0 ? u.resolvedCount / u.conflictCount * 100 : 0
    );
    return (r, p) => (o(), s("div", iv, [
      e("div", rv, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", dv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (o(), s("p", cv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (o(), s("p", uv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", mv, [
        e("div", vv, [
          e("div", {
            class: "progress-fill",
            style: et({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", fv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), pv = /* @__PURE__ */ Y(gv, [["__scopeId", "data-v-4e9e6cc9"]]), hv = { class: "modal-header" }, yv = { class: "modal-title" }, wv = { class: "modal-body" }, kv = {
  key: 0,
  class: "error-box"
}, bv = {
  key: 0,
  class: "error-hint"
}, _v = {
  key: 1,
  class: "loading-state"
}, $v = { class: "commit-summary" }, Cv = {
  key: 0,
  class: "changes-section"
}, xv = {
  key: 0,
  class: "change-group",
  open: ""
}, Sv = { class: "change-count" }, Iv = { class: "change-list" }, Ev = {
  key: 0,
  class: "conflict-badge"
}, Mv = {
  key: 1,
  class: "change-group"
}, Rv = { class: "change-count" }, Tv = { class: "change-list" }, Lv = {
  key: 2,
  class: "change-group"
}, zv = { class: "change-count" }, Nv = { class: "change-list" }, Dv = {
  key: 2,
  class: "strategy-section"
}, Pv = { class: "radio-group" }, Uv = { class: "radio-option" }, Ov = { class: "radio-option" }, Bv = { class: "radio-option" }, Fv = {
  key: 3,
  class: "up-to-date"
}, Av = { class: "modal-actions" }, eo = "comfygit.pullModelStrategy", Vv = /* @__PURE__ */ K({
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
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(localStorage.getItem(eo) || "skip");
    wt(p, (x) => {
      localStorage.setItem(eo, x);
    });
    const f = D(() => {
      var x;
      return ((x = n.error) == null ? void 0 : x.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = D(() => {
      if (!n.preview) return 0;
      const x = n.preview.changes.workflows;
      return x.added.length + x.modified.length + x.deleted.length;
    }), v = D(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = D(() => {
      var x;
      return m.value > 0 || v.value > 0 || (((x = n.preview) == null ? void 0 : x.changes.models.count) || 0) > 0;
    }), g = D(() => n.preview && fo(n.preview) ? n.preview : null), y = D(() => {
      var x;
      return ((x = g.value) == null ? void 0 : x.workflow_conflicts.length) ?? 0;
    }), d = D(() => {
      var x;
      return ((x = n.conflictResolutions) == null ? void 0 : x.size) ?? 0;
    }), M = D(
      () => y.value > 0 && d.value === y.value
    ), k = D(() => !(!n.preview || n.preview.has_uncommitted_changes || g.value && !M.value));
    function z(x) {
      if (!g.value) return !1;
      const C = x.replace(/\.json$/, "");
      return g.value.workflow_conflicts.some((W) => W.name === C);
    }
    function _(x) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: p.value, force: x, resolutions: C });
    }
    return (x, C) => {
      var W, R;
      return o(), E(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (S) => x.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", hv, [
              e("h3", yv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (S) => x.$emit("close"))
              }, "✕")
            ]),
            e("div", wv, [
              t.error ? (o(), s("div", kv, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  f.value ? (o(), s("p", bv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : c("", !0)
                ])
              ])) : t.loading ? (o(), s("div", _v, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                w(" Loading preview... ", -1)
              ])])) : (W = t.preview) != null && W.has_uncommitted_changes ? (o(), s(A, { key: 2 }, [
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
              ], 64)) : t.preview ? (o(), s(A, { key: 3 }, [
                e("div", $v, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  w(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (o(), s("div", Cv, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  m.value > 0 ? (o(), s("details", xv, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Sv, a(m.value) + " changes", 1)
                    ]),
                    e("div", Iv, [
                      (o(!0), s(A, null, Z(t.preview.changes.workflows.added, (S) => (o(), s("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128)),
                      (o(!0), s(A, null, Z(t.preview.changes.workflows.modified, (S) => (o(), s("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        w(" ~ " + a(S) + " ", 1),
                        z(S) ? (o(), s("span", Ev, "CONFLICT")) : c("", !0)
                      ]))), 128)),
                      (o(!0), s(A, null, Z(t.preview.changes.workflows.deleted, (S) => (o(), s("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + a(S), 1))), 128))
                    ])
                  ])) : c("", !0),
                  v.value > 0 ? (o(), s("details", Mv, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Rv, a(v.value) + " to install", 1)
                    ]),
                    e("div", Tv, [
                      (o(!0), s(A, null, Z(t.preview.changes.nodes.to_install, (S) => (o(), s("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128))
                    ])
                  ])) : c("", !0),
                  t.preview.changes.models.count > 0 ? (o(), s("details", Lv, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", zv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Nv, [
                      (o(!0), s(A, null, Z(t.preview.changes.models.referenced, (S) => (o(), s("div", {
                        key: S,
                        class: "change-item"
                      }, a(S), 1))), 128))
                    ])
                  ])) : c("", !0)
                ])) : c("", !0),
                g.value ? (o(), E(pv, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": d.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : c("", !0),
                t.preview.changes.models.count > 0 ? (o(), s("div", Dv, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Pv, [
                    e("label", Uv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (S) => p.value = S),
                        value: "all"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Ov, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (S) => p.value = S),
                        value: "required"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Bv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (S) => p.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : c("", !0),
                t.preview.commits_behind === 0 ? (o(), s("div", Fv, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  w(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ]),
            e("div", Av, [
              h(Q, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (S) => x.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (o(), s(A, { key: 0 }, [
                h(Q, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (S) => _(!1))
                }, {
                  default: i(() => [...C[30] || (C[30] = [
                    w(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                h(Q, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (S) => _(!0))
                }, {
                  default: i(() => [...C[31] || (C[31] = [
                    w(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (R = t.preview) != null && R.has_uncommitted_changes ? (o(), E(Q, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (S) => _(!0))
              }, {
                default: i(() => [...C[32] || (C[32] = [
                  w(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (o(), s(A, { key: 2 }, [
                g.value && !M.value ? (o(), E(Q, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (S) => r("openConflictResolution"))
                }, {
                  default: i(() => [
                    w(" Resolve Conflicts (" + a(d.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), E(Q, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !k.value,
                  onClick: C[9] || (C[9] = (S) => _(!1))
                }, {
                  default: i(() => [...C[33] || (C[33] = [
                    w(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Wv = /* @__PURE__ */ Y(Vv, [["__scopeId", "data-v-300c7b2f"]]), Gv = { class: "modal-header" }, jv = { class: "modal-title" }, Hv = { class: "modal-body" }, qv = {
  key: 0,
  class: "loading-state"
}, Kv = {
  key: 1,
  class: "warning-box"
}, Yv = {
  key: 0,
  class: "commits-section"
}, Jv = { class: "commit-list" }, Qv = { class: "commit-hash" }, Xv = { class: "commit-message" }, Zv = { class: "commit-date" }, ef = { class: "force-option" }, tf = { class: "checkbox-option" }, of = { class: "commit-summary" }, sf = {
  key: 0,
  class: "commits-section"
}, nf = { class: "commit-list" }, af = { class: "commit-hash" }, lf = { class: "commit-message" }, rf = { class: "commit-date" }, df = {
  key: 1,
  class: "up-to-date"
}, cf = { class: "modal-actions" }, uf = /* @__PURE__ */ K({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function p(f) {
      n("push", { force: f });
    }
    return (f, m) => {
      var v, l, g;
      return o(), E(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: m[7] || (m[7] = (y) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: m[6] || (m[6] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Gv, [
              e("h3", jv, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: m[0] || (m[0] = (y) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", Hv, [
              t.loading ? (o(), s("div", qv, [...m[8] || (m[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                w(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (o(), s("div", Kv, [...m[9] || (m[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (o(), s(A, { key: 2 }, [
                m[13] || (m[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (o(), s("div", Yv, [
                  m[10] || (m[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Jv, [
                    (o(!0), s(A, null, Z(t.preview.commits, (y) => (o(), s("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", Qv, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", Xv, a(y.message), 1),
                      e("span", Zv, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                e("div", ef, [
                  e("label", tf, [
                    Ze(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": m[1] || (m[1] = (y) => r.value = y)
                    }, null, 512), [
                      [lo, r.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (o(), s(A, { key: 3 }, [
                e("div", of, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  w(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (o(), s("div", sf, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", nf, [
                    (o(!0), s(A, null, Z(t.preview.commits, (y) => (o(), s("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", af, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", lf, a(y.message), 1),
                      e("span", rf, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (o(), s("div", df, [
                  m[16] || (m[16] = e("span", { class: "icon" }, "✓", -1)),
                  w(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : c("", !0)
            ]),
            e("div", cf, [
              h(Q, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (y) => f.$emit("close"))
              }, {
                default: i(() => [...m[17] || (m[17] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (g = t.preview) != null && g.remote_has_new_commits ? (o(), s(A, { key: 0 }, [
                h(Q, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (y) => f.$emit("pull-first"))
                }, {
                  default: i(() => [...m[18] || (m[18] = [
                    w(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                h(Q, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (y) => p(!0))
                }, {
                  default: i(() => [...m[19] || (m[19] = [
                    w(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (o(), E(Q, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (y) => p(!1))
              }, {
                default: i(() => [...m[20] || (m[20] = [
                  w(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), mf = /* @__PURE__ */ Y(uf, [["__scopeId", "data-v-bc6ded53"]]), vf = { class: "resolution-choice-group" }, ff = ["disabled"], gf = ["disabled"], pf = /* @__PURE__ */ K({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("div", vf, [
      e("button", {
        class: oe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => u.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, ff),
      e("button", {
        class: oe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => u.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, gf)
    ]));
  }
}), hf = /* @__PURE__ */ Y(pf, [["__scopeId", "data-v-985715ed"]]), yf = { class: "conflict-header" }, wf = { class: "conflict-info" }, kf = { class: "workflow-name" }, bf = { class: "conflict-description" }, _f = {
  key: 0,
  class: "resolved-badge"
}, $f = { class: "resolved-text" }, Cf = { class: "conflict-hashes" }, xf = { class: "hash-item" }, Sf = { class: "hash-item" }, If = { class: "conflict-actions" }, Ef = /* @__PURE__ */ K({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(n.resolution);
    wt(() => n.resolution, (l) => {
      p.value = l;
    }), wt(p, (l) => {
      l && r("resolve", l);
    });
    const f = D(() => p.value !== null), m = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = D(() => {
      switch (p.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, g) => {
      var y, d;
      return o(), s("div", {
        class: oe(["conflict-item", { resolved: f.value }])
      }, [
        e("div", yf, [
          g[2] || (g[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", wf, [
            e("code", kf, a(t.conflict.name) + ".json", 1),
            e("div", bf, a(m.value), 1)
          ]),
          f.value ? (o(), s("div", _f, [
            g[1] || (g[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", $f, a(v.value), 1)
          ])) : c("", !0)
        ]),
        e("div", Cf, [
          e("span", xf, [
            g[3] || (g[3] = w("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Sf, [
            g[4] || (g[4] = w("Theirs: ", -1)),
            e("code", null, a(((d = t.conflict.target_hash) == null ? void 0 : d.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", If, [
          h(hf, {
            modelValue: p.value,
            "onUpdate:modelValue": g[0] || (g[0] = (M) => p.value = M),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Mf = /* @__PURE__ */ Y(Ef, [["__scopeId", "data-v-506d3bbf"]]), Rf = { class: "resolution-content" }, Tf = {
  key: 0,
  class: "error-box"
}, Lf = { class: "resolution-header" }, zf = { class: "header-stats" }, Nf = { class: "stat" }, Df = { class: "stat-value" }, Pf = { class: "stat resolved" }, Uf = { class: "stat-value" }, Of = {
  key: 0,
  class: "stat pending"
}, Bf = { class: "stat-value" }, Ff = { class: "conflicts-list" }, Af = {
  key: 1,
  class: "all-resolved-message"
}, Vf = /* @__PURE__ */ K({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => n.resolutions.size), f = D(() => n.workflowConflicts.length - p.value), m = D(() => p.value === n.workflowConflicts.length), v = D(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(M) {
      const k = n.resolutions.get(M);
      return (k == null ? void 0 : k.resolution) ?? null;
    }
    function g(M, k) {
      r("resolve", M, k);
    }
    function y() {
      r("close");
    }
    function d() {
      r("apply");
    }
    return (M, k) => (o(), E(tt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: i(() => [
        e("div", Rf, [
          t.error ? (o(), s("div", Tf, [
            k[1] || (k[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              k[0] || (k[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : c("", !0),
          e("div", Lf, [
            e("div", zf, [
              e("div", Nf, [
                e("span", Df, a(t.workflowConflicts.length), 1),
                k[2] || (k[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Pf, [
                e("span", Uf, a(p.value), 1),
                k[3] || (k[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              f.value > 0 ? (o(), s("div", Of, [
                e("span", Bf, a(f.value), 1),
                k[4] || (k[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : c("", !0)
            ]),
            k[5] || (k[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Ff, [
            (o(!0), s(A, null, Z(t.workflowConflicts, (z) => (o(), E(Mf, {
              key: z.name,
              conflict: z,
              resolution: l(z.name),
              onResolve: (_) => g(z.name, _)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (o(), s("div", Af, [
            k[6] || (k[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        h(de, {
          variant: "secondary",
          onClick: y
        }, {
          default: i(() => [...k[7] || (k[7] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k[8] || (k[8] = e("div", { class: "footer-spacer" }, null, -1)),
        h(de, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: d
        }, {
          default: i(() => [
            w(a(v.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wf = /* @__PURE__ */ Y(Vf, [["__scopeId", "data-v-c58d150d"]]), Gf = { class: "node-conflict-item" }, jf = { class: "node-header" }, Hf = { class: "node-name" }, qf = { class: "node-id" }, Kf = { class: "version-comparison" }, Yf = { class: "version yours" }, Jf = { class: "version theirs" }, Qf = { class: "chosen-version" }, Xf = { class: "chosen" }, Zf = { class: "chosen-reason" }, eg = { class: "affected-workflows" }, tg = { class: "wf-source" }, og = { class: "wf-version" }, sg = /* @__PURE__ */ K({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Gf, [
      e("div", jf, [
        e("code", Hf, a(t.conflict.node_name), 1),
        e("span", qf, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Kf, [
        e("div", Yf, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Jf, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Qf, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Xf, a(t.conflict.chosen_version), 1),
        e("span", Zf, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", eg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (o(!0), s(A, null, Z(t.conflict.affected_workflows, (r) => (o(), s("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", tg, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", og, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), ng = /* @__PURE__ */ Y(sg, [["__scopeId", "data-v-8b626725"]]), ag = { class: "validation-content" }, lg = {
  key: 0,
  class: "compatible-message"
}, ig = { class: "conflicts-list" }, rg = {
  key: 2,
  class: "warnings-section"
}, dg = /* @__PURE__ */ K({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (f, m) => (o(), E(tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (v) => r("cancel"))
    }, {
      body: i(() => [
        e("div", ag, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (o(), s("div", lg, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (o(), s(A, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", ig, [
              (o(!0), s(A, null, Z(t.validation.node_conflicts, (v) => (o(), E(ng, {
                key: v.node_id,
                conflict: v
              }, null, 8, ["conflict"]))), 128))
            ]),
            m[7] || (m[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : c("", !0),
          t.validation.warnings.length > 0 ? (o(), s("div", rg, [
            m[8] || (m[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (o(!0), s(A, null, Z(t.validation.warnings, (v, l) => (o(), s("li", { key: l }, a(v), 1))), 128))
            ])
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        h(de, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (v) => r("cancel"))
        }, {
          default: i(() => [...m[9] || (m[9] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        h(de, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (v) => r("goBack"))
        }, {
          default: i(() => [...m[10] || (m[10] = [
            w(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        h(de, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (v) => r("proceed"))
        }, {
          default: i(() => [
            w(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), cg = /* @__PURE__ */ Y(dg, [["__scopeId", "data-v-fefd26ed"]]), ug = { key: 0 }, mg = /* @__PURE__ */ K({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: u }) {
    const n = u, {
      getRemotes: r,
      addRemote: p,
      removeRemote: f,
      updateRemoteUrl: m,
      fetchRemote: v,
      getRemoteSyncStatus: l,
      getPullPreview: g,
      pullFromRemote: y,
      getPushPreview: d,
      pushToRemote: M,
      validateMerge: k
    } = Re(), z = $([]), _ = $(null), x = $({}), C = $(!1), W = $(null), R = $(""), S = $(!1), P = $(null), F = $(!1), J = $("add"), G = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = D(() => {
      if (!R.value.trim()) return z.value;
      const ne = R.value.toLowerCase();
      return z.value.filter(
        (ae) => ae.name.toLowerCase().includes(ne) || ae.fetch_url.toLowerCase().includes(ne) || ae.push_url.toLowerCase().includes(ne)
      );
    });
    async function T() {
      C.value = !0, W.value = null;
      try {
        const ne = await r();
        z.value = ne.remotes, _.value = ne.current_branch_tracking || null, await Promise.all(
          ne.remotes.map(async (ae) => {
            const we = await l(ae.name);
            we && (x.value[ae.name] = we);
          })
        );
      } catch (ne) {
        W.value = ne instanceof Error ? ne.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function O() {
      J.value = "add", G.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function V(ne) {
      const ae = z.value.find((we) => we.name === ne);
      ae && (J.value = "edit", G.value = {
        name: ae.name,
        fetchUrl: ae.fetch_url,
        pushUrl: ae.push_url
      }, F.value = !0);
    }
    async function le(ne) {
      try {
        J.value === "add" ? await p(ne.name, ne.fetchUrl) : await m(ne.name, ne.fetchUrl, ne.pushUrl || void 0), F.value = !1, await T();
      } catch (ae) {
        W.value = ae instanceof Error ? ae.message : "Operation failed";
      }
    }
    function re() {
      F.value = !1, G.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(ne) {
      P.value = ne;
      try {
        await v(ne);
        const ae = await l(ne);
        ae && (x.value[ne] = ae), n("toast", `✓ Fetched from ${ne}`, "success");
      } catch (ae) {
        n("toast", ae instanceof Error ? ae.message : "Fetch failed", "error");
      } finally {
        P.value = null;
      }
    }
    async function ee(ne) {
      if (confirm(`Remove remote "${ne}"?`))
        try {
          await f(ne), await T();
        } catch (ae) {
          W.value = ae instanceof Error ? ae.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const b = $("idle"), se = D(() => b.value === "pull_preview"), te = D(
      () => b.value === "resolving" || b.value === "validating"
    ), xe = D(
      () => b.value === "validation_review" || b.value === "executing"
    ), ke = $(!1), Te = $(null), Oe = $(!1), ue = $(null), Be = $(!1), ye = $(null), Le = $(null), Ve = $(/* @__PURE__ */ new Map()), Je = $(null), fe = $(null), We = D(() => ye.value && fo(ye.value) ? ye.value : null);
    async function Ge(ne) {
      ue.value = ne, b.value = "pull_preview", Be.value = !0, ye.value = null, Le.value = null;
      try {
        ye.value = await g(ne);
      } catch (ae) {
        Le.value = ae instanceof Error ? ae.message : "Failed to load pull preview";
      } finally {
        Be.value = !1;
      }
    }
    function je() {
      b.value = "idle", ye.value = null, Le.value = null, ue.value = null;
    }
    async function dt(ne) {
      if (!ue.value) return;
      b.value = "executing", Le.value = null;
      const ae = ue.value;
      try {
        const we = await y(ae, ne);
        if (we.rolled_back) {
          Le.value = `Pull failed and was rolled back: ${we.error || "Unknown error"}`, b.value = "pull_preview";
          return;
        }
        B(), b.value = "idle", n("toast", `✓ Pulled from ${ae}`, "success"), await T();
      } catch (we) {
        Le.value = we instanceof Error ? we.message : "Pull failed", b.value = "pull_preview";
      }
    }
    function ve() {
      We.value && (b.value = "resolving", fe.value = null);
    }
    function ze(ne, ae) {
      Ve.value.set(ne, { name: ne, resolution: ae });
    }
    function ct() {
      b.value = "pull_preview";
    }
    async function st() {
      b.value = "validating", fe.value = null;
      try {
        const ne = Array.from(Ve.value.values());
        Je.value = await k(ue.value, ne), b.value = "validation_review";
      } catch (ne) {
        fe.value = ne instanceof Error ? ne.message : "Validation failed", b.value = "resolving";
      }
    }
    async function Se() {
      b.value = "executing";
      const ne = ue.value;
      try {
        const ae = Array.from(Ve.value.values()), we = await y(ne, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ae
        });
        if (we.rolled_back) {
          Le.value = `Pull failed and was rolled back: ${we.error || "Unknown error"}`, b.value = "pull_preview";
          return;
        }
        B(), b.value = "idle", n("toast", `✓ Pulled from ${ne}`, "success"), await T();
      } catch (ae) {
        Le.value = ae instanceof Error ? ae.message : "Pull failed", b.value = "validation_review";
      }
    }
    function ut() {
      b.value = "resolving";
    }
    function H() {
      B(), b.value = "idle";
    }
    function B() {
      Ve.value.clear(), Je.value = null, fe.value = null, Le.value = null, ye.value = null, ue.value = null;
    }
    async function I(ne) {
      ue.value = ne, ke.value = !0, Be.value = !0, Te.value = null;
      try {
        Te.value = await d(ne);
      } catch (ae) {
        W.value = ae instanceof Error ? ae.message : "Failed to load push preview";
      } finally {
        Be.value = !1;
      }
    }
    function q() {
      ke.value = !1, Te.value = null, ue.value = null;
    }
    async function ce(ne) {
      if (!ue.value) return;
      Oe.value = !0;
      const ae = ue.value;
      try {
        await M(ae, ne), q(), n("toast", `✓ Pushed to ${ae}`, "success"), await T();
      } catch (we) {
        n("toast", we instanceof Error ? we.message : "Push failed", "error");
      } finally {
        Oe.value = !1;
      }
    }
    function be() {
      const ne = ue.value;
      q(), ne && Ge(ne);
    }
    return Ie(T), (ne, ae) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ae[0] || (ae[0] = (we) => S.value = !0)
          }, {
            actions: i(() => [
              F.value ? c("", !0) : (o(), E(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
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
          F.value ? c("", !0) : (o(), E(kt, {
            key: 0,
            modelValue: R.value,
            "onUpdate:modelValue": ae[1] || (ae[1] = (we) => R.value = we),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (o(), E(lt, {
            key: 0,
            message: "Loading remotes..."
          })) : W.value ? (o(), E(it, {
            key: 1,
            message: W.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            F.value ? (o(), E(lv, {
              key: 0,
              mode: J.value,
              "remote-name": G.value.name,
              "fetch-url": G.value.fetchUrl,
              "push-url": G.value.pushUrl,
              onSubmit: le,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            z.value.length && !F.value ? (o(), E(bt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(z.value.length) + " remote" + a(z.value.length !== 1 ? "s" : "") + " ", 1),
                _.value ? (o(), s("span", ug, " • Tracking: " + a(_.value.remote) + "/" + a(_.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            N.value.length && !F.value ? (o(), E(Ee, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(N.value, (we) => (o(), E(qm, {
                  key: we.name,
                  remote: we,
                  "sync-status": x.value[we.name],
                  "fetching-remote": P.value,
                  onFetch: X,
                  onEdit: V,
                  onRemove: ee,
                  onPull: Ge,
                  onPush: I
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !N.value.length && !F.value ? (o(), E(Ye, {
              key: 3,
              icon: "🌐",
              message: R.value ? `No remotes match '${R.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                h(Q, {
                  variant: "primary",
                  onClick: O
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
      h(ot, {
        show: S.value,
        title: "About Git Remotes",
        onClose: ae[2] || (ae[2] = (we) => S.value = !1)
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
          h(Q, {
            variant: "link",
            onClick: U
          }, {
            default: i(() => [...ae[6] || (ae[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h(Wv, {
        show: se.value,
        "remote-name": ue.value || "",
        preview: ye.value,
        loading: Be.value,
        pulling: b.value === "executing",
        error: Le.value,
        "conflict-resolutions": Ve.value,
        onClose: je,
        onPull: dt,
        onOpenConflictResolution: ve
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      h(mf, {
        show: ke.value,
        "remote-name": ue.value || "",
        preview: Te.value,
        loading: Be.value,
        pushing: Oe.value,
        onClose: q,
        onPush: ce,
        onPullFirst: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      te.value && We.value ? (o(), E(Wf, {
        key: 0,
        "workflow-conflicts": We.value.workflow_conflicts,
        resolutions: Ve.value,
        "operation-type": "pull",
        validating: b.value === "validating",
        error: fe.value,
        onClose: ct,
        onResolve: ze,
        onApply: st
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : c("", !0),
      xe.value && Je.value ? (o(), E(cg, {
        key: 1,
        validation: Je.value,
        "operation-type": "pull",
        executing: b.value === "executing",
        onProceed: Se,
        onGoBack: ut,
        onCancel: H
      }, null, 8, ["validation", "executing"])) : c("", !0)
    ], 64));
  }
}), vg = /* @__PURE__ */ Y(mg, [["__scopeId", "data-v-9ae3b76d"]]), fg = { class: "setting-info" }, gg = { class: "setting-label" }, pg = {
  key: 0,
  class: "required-marker"
}, hg = {
  key: 0,
  class: "setting-description"
}, yg = { class: "setting-control" }, wg = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", fg, [
        e("div", gg, [
          w(a(t.label) + " ", 1),
          t.required ? (o(), s("span", pg, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", hg, a(t.description), 1)) : c("", !0)
      ]),
      e("div", yg, [
        ge(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), at = /* @__PURE__ */ Y(wg, [["__scopeId", "data-v-cb5d236c"]]), kg = { class: "toggle" }, bg = ["checked", "disabled"], _g = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", kg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, bg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), gt = /* @__PURE__ */ Y(_g, [["__scopeId", "data-v-71c0f550"]]), $g = { class: "settings-section" }, Cg = { class: "path-setting" }, xg = { class: "path-value" }, Sg = { class: "path-setting" }, Ig = { class: "path-value" }, Eg = { class: "settings-section" }, Mg = { class: "settings-section" }, Rg = { class: "settings-section" }, Tg = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Re(), r = $(!1), p = $(null), f = $(null), m = $(null), v = $(null), l = $(""), g = $(""), y = $(!0), d = $(!0), M = $(!1), k = D(() => v.value ? l.value !== (v.value.civitai_api_key || "") : !1);
    async function z() {
      r.value = !0, p.value = null;
      try {
        m.value = await u(), v.value = { ...m.value }, l.value = m.value.civitai_api_key || "", g.value = m.value.huggingface_token || "", y.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive;
        const W = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = W === "true";
      } catch (W) {
        p.value = W instanceof Error ? W.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function _() {
      var W;
      f.value = null;
      try {
        const R = {};
        l.value !== (((W = v.value) == null ? void 0 : W.civitai_api_key) || "") && (R.civitai_api_key = l.value || null), await n(R), await z(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (R) {
        f.value = {
          type: "error",
          message: R instanceof Error ? R.message : "Failed to save settings"
        };
      }
    }
    function x() {
      v.value && (l.value = v.value.civitai_api_key || "", g.value = v.value.huggingface_token || "", y.value = v.value.auto_sync_models, d.value = v.value.confirm_destructive, f.value = null);
    }
    function C(W) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(W)), console.log("[ComfyGit] Auto-refresh setting saved:", W);
    }
    return Ie(z), (W, R) => (o(), E(Pe, null, {
      header: i(() => [
        h(Ue, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            h(Q, {
              variant: "primary",
              size: "sm",
              disabled: !k.value,
              onClick: _
            }, {
              default: i(() => [...R[5] || (R[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            k.value ? (o(), E(Q, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: x
            }, {
              default: i(() => [...R[6] || (R[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), E(lt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), E(it, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
          h(Ee, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var S, P;
              return [
                e("div", $g, [
                  e("div", Cg, [
                    R[7] || (R[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    R[8] || (R[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", xg, a(((S = m.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Sg, [
                    R[9] || (R[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    R[10] || (R[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ig, a(((P = m.value) == null ? void 0 : P.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          h(Ee, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Eg, [
                h(at, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    h(Pt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": R[0] || (R[0] = (S) => l.value = S),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(at, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    h(Pt, {
                      modelValue: g.value,
                      "onUpdate:modelValue": R[1] || (R[1] = (S) => g.value = S),
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
          h(Ee, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Mg, [
                h(at, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    h(gt, {
                      modelValue: M.value,
                      "onUpdate:modelValue": [
                        R[2] || (R[2] = (S) => M.value = S),
                        C
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h(Ee, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Rg, [
                h(at, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    h(gt, {
                      modelValue: y.value,
                      "onUpdate:modelValue": R[3] || (R[3] = (S) => y.value = S),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(at, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    h(gt, {
                      modelValue: d.value,
                      "onUpdate:modelValue": R[4] || (R[4] = (S) => d.value = S),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), E(bt, {
            key: 0,
            variant: (f.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: et({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(f.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Lg = /* @__PURE__ */ Y(Tg, [["__scopeId", "data-v-7861bd35"]]), zg = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Re(), n = $([]), r = $(!1), p = $(null), f = $(!1), m = $(null), v = D(() => n.value.length === 0 ? [] : n.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function l() {
      r.value = !0, p.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (g) {
        p.value = g instanceof Error ? g.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var g;
          (g = m.value) != null && g.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(l), (g, y) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (d) => f.value = !0)
          }, {
            actions: i(() => [
              h(Q, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: r.value
              }, {
                default: i(() => [
                  w(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), E(lt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), E(it, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            n.value.length === 0 ? (o(), E(Ye, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), s(A, null, Z(v.value, (d, M) => (o(), s("div", {
                key: M,
                class: oe(`log-line log-level-${d.level.toLowerCase()}`)
              }, a(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      h(ot, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: y[2] || (y[2] = (d) => f.value = !1)
      }, {
        content: i(() => [...y[3] || (y[3] = [
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
          h(Q, {
            variant: "primary",
            onClick: y[1] || (y[1] = (d) => f.value = !1)
          }, {
            default: i(() => [...y[4] || (y[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ng = /* @__PURE__ */ Y(zg, [["__scopeId", "data-v-39f6a756"]]), Dg = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Re(), r = $([]), p = $(!1), f = $(null), m = $(!1), v = $("production"), l = $(null), g = D(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function y() {
      p.value = !0, f.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const d = await n();
          v.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        f.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var d;
          (d = l.value) != null && d.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(y), (d, M) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (k) => m.value = !0)
          }, {
            actions: i(() => [
              h(Q, {
                variant: "secondary",
                size: "sm",
                onClick: y,
                disabled: p.value
              }, {
                default: i(() => [
                  w(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (o(), E(it, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            r.value.length === 0 ? (o(), E(Ye, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), s(A, null, Z(g.value, (k, z) => (o(), s("div", {
                key: z,
                class: oe(`log-line log-level-${k.level.toLowerCase()}`)
              }, a(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      h(ot, {
        show: m.value,
        title: "About Environment Logs",
        onClose: M[2] || (M[2] = (k) => m.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            M[3] || (M[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            M[4] || (M[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          M[5] || (M[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          M[6] || (M[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          h(Q, {
            variant: "primary",
            onClick: M[1] || (M[1] = (k) => m.value = !1)
          }, {
            default: i(() => [...M[7] || (M[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pg = /* @__PURE__ */ Y(Dg, [["__scopeId", "data-v-4f1e6f72"]]), Ug = { class: "env-title" }, Og = {
  key: 0,
  class: "current-badge"
}, Bg = {
  key: 0,
  class: "branch-info"
}, Fg = /* @__PURE__ */ K({
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
    return (u, n) => (o(), E(Ae, {
      status: t.isCurrent ? "synced" : void 0
    }, Rt({
      icon: i(() => [
        w(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Ug, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Og, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Bg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        ge(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          h(Ce, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          h(Ce, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          h(Ce, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), E(Ce, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ag = /* @__PURE__ */ Y(Fg, [["__scopeId", "data-v-9231917a"]]), Vg = { class: "env-details" }, Wg = { class: "status-row" }, Gg = {
  key: 0,
  class: "detail-row"
}, jg = { class: "value mono" }, Hg = {
  key: 1,
  class: "detail-row"
}, qg = { class: "value mono small" }, Kg = { class: "detail-row" }, Yg = { class: "value" }, Jg = { class: "detail-row" }, Qg = { class: "value" }, Xg = { class: "detail-row" }, Zg = { class: "value" }, ep = {
  key: 2,
  class: "section-divider"
}, tp = {
  key: 3,
  class: "detail-row"
}, op = { class: "value" }, sp = {
  key: 4,
  class: "detail-row"
}, np = { class: "value" }, ap = { class: "footer-actions" }, lp = /* @__PURE__ */ K({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function r(p) {
      if (!p) return "Unknown";
      try {
        const f = new Date(p), v = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), l = Math.floor(v / 6e4), g = Math.floor(v / 36e5), y = Math.floor(v / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : g < 24 ? `${g} ${g === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, f) => (o(), E(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (m) => n("close"))
    }, {
      body: i(() => [
        e("div", Vg, [
          e("div", Wg, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Gg, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", jg, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (o(), s("div", Hg, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", qg, a(t.environment.path), 1)
          ])) : c("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Kg, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Yg, a(t.environment.workflow_count), 1)
          ]),
          e("div", Jg, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Qg, a(t.environment.node_count), 1)
          ]),
          e("div", Xg, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Zg, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", ep)) : c("", !0),
          t.environment.created_at ? (o(), s("div", tp, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", op, a(r(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (o(), s("div", sp, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", np, a(r(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", ap, [
          t.canDelete ? (o(), E(de, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (m) => n("delete", t.environment.name))
          }, {
            default: i(() => [...f[12] || (f[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          h(de, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (m) => n("close"))
          }, {
            default: i(() => [...f[13] || (f[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ip = /* @__PURE__ */ Y(lp, [["__scopeId", "data-v-59855453"]]), rp = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], dp = "3.12", cp = [
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
], up = "auto", mp = { class: "create-env-form" }, vp = { class: "form-field" }, fp = { class: "form-field" }, gp = ["value"], pp = { class: "form-field" }, hp = ["disabled"], yp = ["value"], wp = { class: "form-field" }, kp = ["value"], bp = { class: "form-field form-field--checkbox" }, _p = { class: "form-checkbox" }, $p = /* @__PURE__ */ K({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r } = Re(), p = $(""), f = $(dp), m = $("latest"), v = $(up), l = $(!1), g = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), y = $(!1), d = $(null);
    function M() {
      const z = p.value.trim();
      if (!z) return;
      const _ = {
        name: z,
        python_version: f.value,
        comfyui_version: m.value,
        torch_backend: v.value,
        switch_after: l.value
      };
      n("create", _);
    }
    async function k() {
      y.value = !0;
      try {
        g.value = await r();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        y.value = !1;
      }
    }
    return Ie(async () => {
      var z;
      await Lo(), (z = d.value) == null || z.focus(), k();
    }), (z, _) => (o(), E(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: _[6] || (_[6] = (x) => n("close"))
    }, {
      body: i(() => [
        e("div", mp, [
          e("div", vp, [
            _[7] || (_[7] = e("label", { class: "form-label" }, "Name", -1)),
            Ze(e("input", {
              ref_key: "nameInput",
              ref: d,
              "onUpdate:modelValue": _[0] || (_[0] = (x) => p.value = x),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(M, ["enter"])
            }, null, 544), [
              [ao, p.value]
            ])
          ]),
          e("div", fp, [
            _[8] || (_[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": _[1] || (_[1] = (x) => f.value = x),
              class: "form-select"
            }, [
              (o(!0), s(A, null, Z(pe(rp), (x) => (o(), s("option", {
                key: x,
                value: x
              }, a(x), 9, gp))), 128))
            ], 512), [
              [Ft, f.value]
            ])
          ]),
          e("div", pp, [
            _[9] || (_[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": _[2] || (_[2] = (x) => m.value = x),
              class: "form-select",
              disabled: y.value
            }, [
              (o(!0), s(A, null, Z(g.value, (x) => (o(), s("option", {
                key: x.tag_name,
                value: x.tag_name
              }, a(x.name), 9, yp))), 128))
            ], 8, hp), [
              [Ft, m.value]
            ])
          ]),
          e("div", wp, [
            _[10] || (_[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (x) => v.value = x),
              class: "form-select"
            }, [
              (o(!0), s(A, null, Z(pe(cp), (x) => (o(), s("option", {
                key: x,
                value: x
              }, a(x) + a(x === "auto" ? " (detect GPU)" : ""), 9, kp))), 128))
            ], 512), [
              [Ft, v.value]
            ])
          ]),
          e("div", bp, [
            e("label", _p, [
              Ze(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": _[4] || (_[4] = (x) => l.value = x)
              }, null, 512), [
                [lo, l.value]
              ]),
              _[11] || (_[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        h(de, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: M
        }, {
          default: i(() => [..._[12] || (_[12] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        h(de, {
          variant: "secondary",
          onClick: _[5] || (_[5] = (x) => n("close"))
        }, {
          default: i(() => [..._[13] || (_[13] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ Y($p, [["__scopeId", "data-v-a2f13447"]]), xp = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: p } = Re(), f = $([]), m = $(!1), v = $(null), l = $(""), g = $(!1), y = $(!1), d = $(null), M = D(
      () => f.value.find((R) => R.is_current)
    ), k = D(() => {
      if (!l.value.trim()) return f.value;
      const R = l.value.toLowerCase();
      return f.value.filter(
        (S) => {
          var P;
          return S.name.toLowerCase().includes(R) || ((P = S.current_branch) == null ? void 0 : P.toLowerCase().includes(R));
        }
      );
    });
    function z(R) {
      r("create", R), y.value = !1;
    }
    function _() {
      y.value = !0;
    }
    function x(R) {
      d.value = R;
    }
    function C(R) {
      d.value = null, r("delete", R);
    }
    async function W() {
      m.value = !0, v.value = null;
      try {
        f.value = await p();
      } catch (R) {
        v.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Ie(W), u({
      loadEnvironments: W
    }), (R, S) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (P) => g.value = !0)
          }, {
            actions: i(() => [
              h(Q, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: i(() => [...S[6] || (S[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              h(Q, {
                variant: "secondary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...S[7] || (S[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          h(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (o(), E(it, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            f.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(f.value.length) + " " + a(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                M.value ? (o(), s(A, { key: 0 }, [
                  S[8] || (S[8] = w(" • Current: ", -1)),
                  e("strong", null, a(M.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), E(Ee, {
              key: 1,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, Z(k.value, (P) => (o(), E(Ag, {
                  key: P.name,
                  "environment-name": P.name,
                  "is-current": P.is_current,
                  "current-branch": P.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    P.is_current ? c("", !0) : (o(), E(Q, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => R.$emit("switch", P.name)
                    }, {
                      default: i(() => [...S[9] || (S[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => x(P)
                    }, {
                      default: i(() => [...S[10] || (S[10] = [
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
            k.value.length ? c("", !0) : (o(), E(Ye, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Rt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  h(Q, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: i(() => [...S[11] || (S[11] = [
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
      h(ot, {
        show: g.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (P) => g.value = !1)
      }, {
        content: i(() => [...S[12] || (S[12] = [
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
          h(Q, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (P) => g.value = !1)
          }, {
            default: i(() => [...S[13] || (S[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      d.value ? (o(), E(ip, {
        key: 0,
        environment: d.value,
        "can-delete": f.value.length > 1,
        onClose: S[4] || (S[4] = (P) => d.value = null),
        onDelete: C
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      y.value ? (o(), E(Cp, {
        key: 1,
        onClose: S[5] || (S[5] = (P) => y.value = !1),
        onCreate: z
      })) : c("", !0)
    ], 64));
  }
}), Sp = /* @__PURE__ */ Y(xp, [["__scopeId", "data-v-307d9926"]]), Ip = { class: "file-path" }, Ep = { class: "file-path-text" }, Mp = ["title"], Rp = /* @__PURE__ */ K({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = $(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, f) => (o(), s("div", Ip, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ep, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Mp)) : c("", !0)
    ]));
  }
}), Tp = /* @__PURE__ */ Y(Rp, [["__scopeId", "data-v-f0982173"]]), Lp = { class: "export-card" }, zp = { class: "export-path-row" }, Np = { class: "export-actions" }, Dp = {
  key: 1,
  class: "export-warning"
}, Pp = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Re(), n = $(""), r = $(!1), p = $(!1), f = $(null), m = $(!1);
    async function v() {
      r.value = !0, f.value = null;
      try {
        const y = await u(n.value || void 0);
        f.value = y;
      } catch (y) {
        f.value = {
          status: "error",
          message: y instanceof Error ? y.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function l() {
      var y;
      if ((y = f.value) != null && y.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (d) {
          console.error("Failed to copy path:", d);
        }
    }
    async function g() {
      var y;
      if ((y = f.value) != null && y.path) {
        p.value = !0;
        try {
          const d = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!d.ok)
            throw new Error(`Download failed: ${d.statusText}`);
          const M = await d.blob(), k = URL.createObjectURL(M), z = f.value.path.split("/").pop() || "environment-export.tar.gz", _ = document.createElement("a");
          _.href = k, _.download = z, document.body.appendChild(_), _.click(), document.body.removeChild(_), URL.revokeObjectURL(k);
        } catch (d) {
          console.error("Failed to download:", d), alert(`Download failed: ${d instanceof Error ? d.message : "Unknown error"}`);
        } finally {
          p.value = !1;
        }
      }
    }
    return (y, d) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: d[0] || (d[0] = (M) => m.value = !0)
          })
        ]),
        content: i(() => [
          h(Ee, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              e("div", Lp, [
                d[5] || (d[5] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", zp, [
                  h(Pt, {
                    modelValue: n.value,
                    "onUpdate:modelValue": d[1] || (d[1] = (M) => n.value = M),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Np, [
                  h(Q, {
                    variant: "primary",
                    size: "md",
                    loading: r.value,
                    disabled: r.value,
                    onClick: v
                  }, {
                    default: i(() => [
                      d[4] || (d[4] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      w(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), E(Ee, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              h(Ae, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Rt({
                icon: i(() => [
                  w(a(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(a(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(a(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    h(Ce, { label: "Saved to:" }, {
                      default: i(() => [
                        h(Tp, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), E(Ce, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), s("div", Dp, [...d[6] || (d[6] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    h(Q, {
                      variant: "primary",
                      size: "sm",
                      loading: p.value,
                      onClick: g
                    }, {
                      default: i(() => [...d[7] || (d[7] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    h(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: l
                    }, {
                      default: i(() => [...d[8] || (d[8] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    h(Q, {
                      variant: "ghost",
                      size: "sm",
                      onClick: d[2] || (d[2] = (M) => f.value = null)
                    }, {
                      default: i(() => [...d[9] || (d[9] = [
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
      h(ot, {
        show: m.value,
        title: "What Gets Exported",
        onClose: d[3] || (d[3] = (M) => m.value = !1)
      }, {
        content: i(() => [...d[10] || (d[10] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  w(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  w(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  w(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  w(" — Environment settings and metadata")
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
              w(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Up = /* @__PURE__ */ Y(Pp, [["__scopeId", "data-v-33124fb3"]]), Op = { class: "file-input-wrapper" }, Bp = ["accept", "multiple", "disabled"], Fp = /* @__PURE__ */ K({
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
  setup(t, { expose: u, emit: n }) {
    const r = n, p = $(null);
    function f() {
      var v;
      (v = p.value) == null || v.click();
    }
    function m(v) {
      const l = v.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return u({
      triggerInput: f
    }), (v, l) => (o(), s("div", Op, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, Bp),
      h(Q, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: i(() => [
          ge(v.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ap = /* @__PURE__ */ Y(Fp, [["__scopeId", "data-v-cd192091"]]), Vp = {
  key: 0,
  class: "drop-zone-empty"
}, Wp = { class: "drop-zone-text" }, Gp = { class: "drop-zone-primary" }, jp = { class: "drop-zone-secondary" }, Hp = { class: "drop-zone-actions" }, qp = {
  key: 1,
  class: "drop-zone-file"
}, Kp = { class: "file-info" }, Yp = { class: "file-details" }, Jp = { class: "file-name" }, Qp = { class: "file-size" }, Xp = /* @__PURE__ */ K({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1), p = $(null), f = $(0), m = D(() => p.value !== null), v = D(() => {
      var x;
      return ((x = p.value) == null ? void 0 : x.name) || "";
    }), l = D(() => {
      if (!p.value) return "";
      const x = p.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g(x) {
      var C;
      x.stopPropagation(), f.value++, (C = x.dataTransfer) != null && C.types.includes("Files") && (r.value = !0);
    }
    function y(x) {
      x.stopPropagation(), x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function d(x) {
      x.stopPropagation(), f.value--, f.value === 0 && (r.value = !1);
    }
    function M(x) {
      var W;
      x.stopPropagation(), f.value = 0, r.value = !1;
      const C = (W = x.dataTransfer) == null ? void 0 : W.files;
      C && C.length > 0 && z(C[0]);
    }
    function k(x) {
      x.length > 0 && z(x[0]);
    }
    function z(x) {
      p.value = x, n("fileSelected", x);
    }
    function _() {
      p.value = null, n("clear");
    }
    return (x, C) => (o(), s("div", {
      class: oe(["file-drop-zone", { "drop-active": r.value, "has-file": m.value }]),
      onDragenter: $e(g, ["prevent"]),
      onDragover: $e(y, ["prevent"]),
      onDragleave: $e(d, ["prevent"]),
      onDrop: $e(M, ["prevent"])
    }, [
      m.value ? (o(), s("div", qp, [
        e("div", Kp, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Yp, [
            e("div", Jp, a(v.value), 1),
            e("div", Qp, a(l.value), 1)
          ])
        ]),
        h(Q, {
          variant: "ghost",
          size: "xs",
          onClick: _,
          title: "Remove file"
        }, {
          default: i(() => [...C[2] || (C[2] = [
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
      ])) : (o(), s("div", Vp, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Wp, [
          e("p", Gp, a(t.primaryText), 1),
          e("p", jp, a(t.secondaryText), 1)
        ]),
        e("div", Hp, [
          h(Ap, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: i(() => [
              w(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Zp = /* @__PURE__ */ Y(Xp, [["__scopeId", "data-v-b774d3bb"]]), eh = { class: "import-preview" }, th = { class: "preview-header" }, oh = {
  key: 0,
  class: "source-env"
}, sh = { class: "preview-content" }, nh = { class: "preview-section" }, ah = { class: "section-header" }, lh = { class: "section-info" }, ih = { class: "section-count" }, rh = {
  key: 0,
  class: "item-list"
}, dh = { class: "item-name" }, ch = {
  key: 0,
  class: "item-more"
}, uh = { class: "preview-section" }, mh = { class: "section-header" }, vh = { class: "section-info" }, fh = { class: "section-count" }, gh = {
  key: 0,
  class: "item-list"
}, ph = { class: "item-details" }, hh = { class: "item-name" }, yh = { class: "item-meta" }, wh = {
  key: 0,
  class: "item-more"
}, kh = { class: "preview-section" }, bh = { class: "section-header" }, _h = { class: "section-info" }, $h = { class: "section-count" }, Ch = {
  key: 0,
  class: "item-list"
}, xh = { class: "item-name" }, Sh = {
  key: 0,
  class: "item-more"
}, Ih = {
  key: 0,
  class: "preview-section"
}, Eh = { class: "git-info" }, Mh = /* @__PURE__ */ K({
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
    const u = t, n = D(() => u.workflows.length), r = D(() => u.models.length), p = D(() => u.nodes.length);
    function f(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, v) => (o(), s("div", eh, [
      e("div", th, [
        h(He, null, {
          default: i(() => [...v[0] || (v[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", oh, [
          v[1] || (v[1] = w(" From: ", -1)),
          h(jt, null, {
            default: i(() => [
              w(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", sh, [
        e("div", nh, [
          e("div", ah, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", lh, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ih, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", rh, [
            (o(!0), s(A, null, Z(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", dh, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", ch, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", uh, [
          e("div", mh, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", vh, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", fh, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", gh, [
            (o(!0), s(A, null, Z(t.models.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ph, [
                e("span", hh, a(l.filename), 1),
                e("span", yh, a(f(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", wh, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", kh, [
          e("div", bh, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", _h, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", $h, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", Ch, [
            (o(!0), s(A, null, Z(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", xh, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Sh, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Ih, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Eh, [
            t.gitBranch ? (o(), E(Ce, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                h(jt, null, {
                  default: i(() => [
                    w(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), E(Ce, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                h(ro, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Rh = /* @__PURE__ */ Y(Mh, [["__scopeId", "data-v-182fe113"]]), Th = { class: "import-options" }, Lh = { class: "options-container" }, zh = { class: "option-section" }, Nh = { class: "conflict-options" }, Dh = ["value", "checked", "onChange"], Ph = { class: "conflict-content" }, Uh = { class: "conflict-label" }, Oh = { class: "conflict-description" }, Bh = { class: "option-section" }, Fh = { class: "component-toggles" }, Ah = /* @__PURE__ */ K({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: u }) {
    const n = u, r = [
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
    return (p, f) => (o(), s("div", Th, [
      h(He, null, {
        default: i(() => [...f[4] || (f[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Lh, [
        e("div", zh, [
          h(Gt, null, {
            default: i(() => [...f[5] || (f[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Nh, [
            (o(), s(A, null, Z(r, (m) => e("label", {
              key: m.value,
              class: oe(["conflict-option", { active: t.conflictMode === m.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: t.conflictMode === m.value,
                onChange: (v) => n("update:conflictMode", m.value)
              }, null, 40, Dh),
              e("div", Ph, [
                e("span", Uh, a(m.label), 1),
                e("span", Oh, a(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Bh, [
          h(Gt, null, {
            default: i(() => [...f[6] || (f[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Fh, [
            h(at, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                h(gt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": f[0] || (f[0] = (m) => n("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            h(at, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                h(gt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": f[1] || (f[1] = (m) => n("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            h(at, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                h(gt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": f[2] || (f[2] = (m) => n("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            h(at, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                h(gt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": f[3] || (f[3] = (m) => n("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Vh = /* @__PURE__ */ Y(Ah, [["__scopeId", "data-v-0ec212b0"]]), Wh = {
  key: 0,
  class: "import-empty"
}, Gh = {
  key: 1,
  class: "import-configure"
}, jh = { class: "selected-file-bar" }, Hh = { class: "file-bar-content" }, qh = { class: "file-bar-info" }, Kh = { class: "file-bar-name" }, Yh = { class: "file-bar-size" }, Jh = {
  key: 0,
  class: "preview-loading"
}, Qh = { class: "import-actions" }, Xh = {
  key: 2,
  class: "import-progress"
}, Zh = { class: "progress-content" }, e1 = { class: "progress-info" }, t1 = { class: "progress-title" }, o1 = { class: "progress-detail" }, s1 = { class: "progress-bar" }, n1 = { class: "progress-status" }, a1 = {
  key: 3,
  class: "import-complete"
}, l1 = { class: "complete-message" }, i1 = { class: "complete-title" }, r1 = { class: "complete-details" }, d1 = { class: "complete-actions" }, c1 = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const { previewTarballImport: u } = Re(), n = $(!1), r = $(null), p = $(!1), f = $(!1), m = $(!1), v = $(""), l = $(!1), g = $(null), y = $(null), d = $({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), M = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), k = D(() => {
      if (!y.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const S = y.value;
      return {
        sourceEnvironment: S.environment_name || (S.comfyui_version ? `ComfyUI ${S.comfyui_version}` : "Unknown"),
        workflows: (S.workflows || []).map(
          (P) => typeof P == "string" ? P : P.name || "unknown"
        ),
        models: (S.models || []).map((P) => {
          var F;
          return {
            filename: P.filename || "unknown",
            size: 0,
            type: ((F = P.relative_path) == null ? void 0 : F.split("/")[0]) || "model"
          };
        }),
        nodes: (S.nodes || []).map(
          (P) => typeof P == "string" ? P : P.name || P.package_id || "unknown"
        ),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), z = D(() => !l.value && !g.value && y.value && (d.value.includeWorkflows || d.value.includeModels || d.value.includeNodes || d.value.includeGitHistory));
    async function _(S) {
      r.value = S, l.value = !0, g.value = null, y.value = null;
      try {
        const P = await u(S);
        y.value = P;
      } catch (P) {
        g.value = P instanceof Error ? P.message : "Failed to analyze file", console.error("Preview error:", P);
      } finally {
        l.value = !1;
      }
    }
    function x() {
      r.value = null, f.value = !1, m.value = !1, v.value = "", y.value = null, g.value = null;
    }
    function C() {
      x(), p.value = !1, l.value = !1, M.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function W() {
      if (r.value) {
        p.value = !0, f.value = !1;
        try {
          const S = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${k.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${k.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${k.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const P of S)
            M.value = P, await new Promise((F) => setTimeout(F, 800));
          M.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((P) => setTimeout(P, 500)), m.value = !0, v.value = `Successfully imported ${k.value.workflows.length} workflows, ${k.value.models.length} models, and ${k.value.nodes.length} custom nodes.`;
        } catch (S) {
          m.value = !1, v.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          p.value = !1, f.value = !0;
        }
      }
    }
    function R(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, P) => (o(), s(A, null, [
      h(Pe, null, {
        header: i(() => [
          h(Ue, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (F) => n.value = !0)
          })
        ]),
        content: i(() => [
          !r.value && !p.value ? (o(), s("div", Wh, [
            h(Zp, {
              accept: ".tar.gz,.tgz,.zip",
              "primary-text": "Drag & drop environment export here",
              "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
              "button-text": "Select Export File",
              onFileSelected: _
            })
          ])) : r.value && !p.value && !f.value ? (o(), s("div", Gh, [
            e("div", jh, [
              e("div", Hh, [
                P[7] || (P[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                e("div", qh, [
                  e("div", Kh, a(r.value.name), 1),
                  e("div", Yh, a(R(r.value.size)), 1)
                ])
              ]),
              h(Q, {
                variant: "ghost",
                size: "sm",
                onClick: x
              }, {
                default: i(() => [...P[8] || (P[8] = [
                  w(" Change File ", -1)
                ])]),
                _: 1
              })
            ]),
            l.value ? (o(), s("div", Jh, [...P[9] || (P[9] = [
              e("div", { class: "loading-spinner" }, null, -1),
              e("div", { class: "loading-text" }, "Analyzing import file...", -1)
            ])])) : g.value ? (o(), E(ft, {
              key: 1,
              type: "error",
              title: "Failed to Analyze File",
              details: [g.value]
            }, null, 8, ["details"])) : y.value ? (o(), E(Rh, {
              key: 2,
              "source-environment": k.value.sourceEnvironment,
              workflows: k.value.workflows,
              models: k.value.models,
              nodes: k.value.nodes,
              "git-branch": k.value.gitBranch,
              "git-commit": k.value.gitCommit
            }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : c("", !0),
            h(Vh, {
              "conflict-mode": d.value.conflictMode,
              "onUpdate:conflictMode": P[1] || (P[1] = (F) => d.value.conflictMode = F),
              "include-workflows": d.value.includeWorkflows,
              "onUpdate:includeWorkflows": P[2] || (P[2] = (F) => d.value.includeWorkflows = F),
              "include-models": d.value.includeModels,
              "onUpdate:includeModels": P[3] || (P[3] = (F) => d.value.includeModels = F),
              "include-nodes": d.value.includeNodes,
              "onUpdate:includeNodes": P[4] || (P[4] = (F) => d.value.includeNodes = F),
              "include-git-history": d.value.includeGitHistory,
              "onUpdate:includeGitHistory": P[5] || (P[5] = (F) => d.value.includeGitHistory = F)
            }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
            !d.value.includeModels && k.value.models.length > 0 ? (o(), E(ft, {
              key: 3,
              type: "warning",
              title: "Models Will Not Be Imported",
              details: [
                `${k.value.models.length} model file(s) will be skipped`,
                "Workflows may not function without required models",
                "You can download models manually from the MODEL INDEX"
              ]
            }, null, 8, ["details"])) : c("", !0),
            e("div", Qh, [
              h(Q, {
                variant: "primary",
                size: "md",
                disabled: !z.value,
                onClick: W
              }, {
                default: i(() => [...P[10] || (P[10] = [
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
              h(Q, {
                variant: "secondary",
                size: "md",
                onClick: x
              }, {
                default: i(() => [...P[11] || (P[11] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : p.value ? (o(), s("div", Xh, [
            e("div", Zh, [
              P[12] || (P[12] = e("div", { class: "progress-icon" }, [
                e("div", { class: "spinner" })
              ], -1)),
              e("div", e1, [
                e("div", t1, a(M.value.message), 1),
                e("div", o1, a(M.value.detail), 1)
              ])
            ]),
            e("div", s1, [
              e("div", {
                class: "progress-bar-fill",
                style: et({ width: `${M.value.percent}%` })
              }, null, 4)
            ]),
            e("div", n1, a(M.value.percent) + "% complete ", 1)
          ])) : f.value ? (o(), s("div", a1, [
            e("div", {
              class: oe(["complete-icon", m.value ? "success" : "error"])
            }, a(m.value ? "✓" : "✕"), 3),
            e("div", l1, [
              e("div", i1, a(m.value ? "Import Successful" : "Import Failed"), 1),
              e("div", r1, a(v.value), 1)
            ]),
            e("div", d1, [
              h(Q, {
                variant: "primary",
                size: "md",
                onClick: C
              }, {
                default: i(() => [...P[13] || (P[13] = [
                  w(" Import Another ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : c("", !0)
        ]),
        _: 1
      }),
      h(ot, {
        show: n.value,
        title: "How to Import",
        onClose: P[6] || (P[6] = (F) => n.value = !1)
      }, {
        content: i(() => [...P[14] || (P[14] = [
          e("div", { class: "help-steps" }, [
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "1"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Select Export File"),
                e("p", null, "Choose a ComfyGit environment export file created with the EXPORT feature")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "2"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Review Preview"),
                e("p", null, "Check what workflows, models, and nodes will be imported")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "3"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Configure Options"),
                e("p", null, "Choose how to handle conflicts and which components to import")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "4"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Import"),
                e("p", null, "Start the import process and wait for completion")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), u1 = /* @__PURE__ */ Y(c1, [["__scopeId", "data-v-3f1a3f7c"]]), m1 = { class: "header-info" }, v1 = { class: "commit-hash" }, f1 = {
  key: 0,
  class: "commit-refs"
}, g1 = { class: "commit-message" }, p1 = { class: "commit-date" }, h1 = {
  key: 0,
  class: "loading"
}, y1 = {
  key: 1,
  class: "changes-section"
}, w1 = { class: "stats-row" }, k1 = { class: "stat" }, b1 = { class: "stat insertions" }, _1 = { class: "stat deletions" }, $1 = {
  key: 0,
  class: "change-group"
}, C1 = {
  key: 1,
  class: "change-group"
}, x1 = {
  key: 0,
  class: "version"
}, S1 = {
  key: 2,
  class: "change-group"
}, I1 = { class: "change-item" }, E1 = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Re(), r = $(null), p = $(!0), f = D(() => {
      if (!r.value) return !1;
      const v = r.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), m = D(() => {
      if (!r.value) return !1;
      const v = r.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ie(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (v, l) => (o(), E(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (g) => v.$emit("close"))
    }, {
      header: i(() => {
        var g, y, d, M;
        return [
          e("div", m1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", v1, a(((g = r.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (M = (d = r.value) == null ? void 0 : d.refs) != null && M.length ? (o(), s("span", f1, [
              (o(!0), s(A, null, Z(r.value.refs, (k) => (o(), s("span", {
                key: k,
                class: "ref-badge"
              }, a(k), 1))), 128))
            ])) : c("", !0)
          ]),
          h(de, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (k) => v.$emit("close"))
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
        var g, y;
        return [
          e("div", g1, a(((g = r.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", p1, a(((y = r.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", h1, "Loading details...")) : r.value ? (o(), s("div", y1, [
            e("div", w1, [
              e("span", k1, a(r.value.stats.files_changed) + " files", 1),
              e("span", b1, "+" + a(r.value.stats.insertions), 1),
              e("span", _1, "-" + a(r.value.stats.deletions), 1)
            ]),
            f.value ? (o(), s("div", $1, [
              h(It, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(A, null, Z(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(A, null, Z(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(A, null, Z(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d), 1)
              ]))), 128))
            ])) : c("", !0),
            m.value ? (o(), s("div", C1, [
              h(It, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(A, null, Z(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d.name), 1),
                d.version ? (o(), s("span", x1, "(" + a(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(A, null, Z(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", S1, [
              h(It, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", I1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        h(de, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (g) => v.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        h(de, {
          variant: "primary",
          onClick: l[2] || (l[2] = (g) => v.$emit("checkout", t.commit))
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
}), M1 = /* @__PURE__ */ Y(E1, [["__scopeId", "data-v-d256ff6d"]]), R1 = { class: "dialog-message" }, T1 = {
  key: 0,
  class: "dialog-details"
}, L1 = {
  key: 1,
  class: "dialog-warning"
}, z1 = /* @__PURE__ */ K({
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
    return (u, n) => (o(), E(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", R1, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", T1, [
          (o(!0), s(A, null, Z(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", L1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        h(de, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            w(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), E(de, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            w(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        h(de, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            w(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), N1 = /* @__PURE__ */ Y(z1, [["__scopeId", "data-v-3670b9f5"]]), D1 = { class: "base-textarea-wrapper" }, P1 = ["value", "rows", "placeholder", "disabled", "maxlength"], U1 = {
  key: 0,
  class: "base-textarea-count"
}, O1 = /* @__PURE__ */ K({
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
    return (u, n) => (o(), s("div", D1, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = rt($e((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = rt($e((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, P1),
      t.showCharCount && t.maxLength ? (o(), s("div", U1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), to = /* @__PURE__ */ Y(O1, [["__scopeId", "data-v-5516e6fc"]]), B1 = ["checked", "disabled"], F1 = { class: "base-checkbox-box" }, A1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, V1 = {
  key: 0,
  class: "base-checkbox-label"
}, W1 = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: oe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, B1),
      e("span", F1, [
        t.modelValue ? (o(), s("svg", A1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", V1, [
        ge(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), oo = /* @__PURE__ */ Y(W1, [["__scopeId", "data-v-bf17c831"]]), G1 = { class: "popover-header" }, j1 = { class: "popover-body" }, H1 = {
  key: 0,
  class: "changes-summary"
}, q1 = {
  key: 0,
  class: "change-item"
}, K1 = {
  key: 1,
  class: "change-item"
}, Y1 = {
  key: 2,
  class: "change-item"
}, J1 = {
  key: 3,
  class: "change-item"
}, Q1 = {
  key: 4,
  class: "change-item"
}, X1 = {
  key: 1,
  class: "no-changes"
}, Z1 = {
  key: 2,
  class: "loading"
}, ey = {
  key: 3,
  class: "issues-error"
}, ty = { class: "error-header" }, oy = { class: "error-title" }, sy = { class: "issues-list" }, ny = { class: "message-section" }, ay = { class: "popover-footer" }, ly = {
  key: 1,
  class: "commit-popover"
}, iy = { class: "popover-header" }, ry = { class: "popover-body" }, dy = {
  key: 0,
  class: "changes-summary"
}, cy = {
  key: 0,
  class: "change-item"
}, uy = {
  key: 1,
  class: "change-item"
}, my = {
  key: 2,
  class: "change-item"
}, vy = {
  key: 3,
  class: "change-item"
}, fy = {
  key: 4,
  class: "change-item"
}, gy = {
  key: 1,
  class: "no-changes"
}, py = {
  key: 2,
  class: "loading"
}, hy = {
  key: 3,
  class: "issues-error"
}, yy = { class: "error-header" }, wy = { class: "error-title" }, ky = { class: "issues-list" }, by = { class: "message-section" }, _y = { class: "popover-footer" }, $y = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: p } = Re(), f = $(""), m = $(!1), v = $(!1), l = $(null), g = D(() => {
      if (!n.status) return !1;
      const z = n.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || n.status.has_changes;
    }), y = D(() => {
      var z;
      return (z = n.status) != null && z.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (_) => _.has_issues && (_.sync_state === "new" || _.sync_state === "modified")
      ) : [];
    }), d = D(() => y.value.length > 0), M = D(() => d.value && !v.value);
    async function k() {
      var z, _, x;
      if (!(d.value && !v.value) && !(!g.value || !f.value.trim() || m.value)) {
        m.value = !0, l.value = null;
        try {
          const C = await p(f.value.trim(), v.value);
          C.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((z = C.summary) == null ? void 0 : z.new) || 0} new, ${((_ = C.summary) == null ? void 0 : _.modified) || 0} modified, ${((x = C.summary) == null ? void 0 : x.deleted) || 0} deleted`
          }, f.value = "", v.value = !1, setTimeout(() => r("committed"), 1e3)) : C.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          l.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (z, _) => t.asModal ? (o(), E(Me, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: _[5] || (_[5] = (x) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: _[4] || (_[4] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", G1, [
            _[11] || (_[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: _[0] || (_[0] = (x) => r("close"))
            }, [..._[10] || (_[10] = [
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
          e("div", j1, [
            t.status && g.value ? (o(), s("div", H1, [
              t.status.workflows.new.length ? (o(), s("div", q1, [
                _[12] || (_[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", K1, [
                _[13] || (_[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Y1, [
                _[14] || (_[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", J1, [
                _[15] || (_[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Q1, [
                _[16] || (_[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", X1, " No changes to commit ")) : (o(), s("div", Z1, " Loading... ")),
            d.value ? (o(), s("div", ey, [
              e("div", ty, [
                _[17] || (_[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", oy, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", sy, [
                (o(!0), s(A, null, Z(y.value, (x) => (o(), s("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(x.name), 1),
                  w(": " + a(x.issue_summary), 1)
                ]))), 128))
              ]),
              h(oo, {
                modelValue: v.value,
                "onUpdate:modelValue": _[1] || (_[1] = (x) => v.value = x),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [..._[18] || (_[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", ny, [
              h(to, {
                modelValue: f.value,
                "onUpdate:modelValue": _[2] || (_[2] = (x) => f.value = x),
                placeholder: M.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
                disabled: !g.value || m.value || M.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), s("div", {
              key: 4,
              class: oe(["result", l.value.type])
            }, a(l.value.message), 3)) : c("", !0)
          ]),
          e("div", ay, [
            h(de, {
              variant: "secondary",
              onClick: _[3] || (_[3] = (x) => r("close"))
            }, {
              default: i(() => [..._[19] || (_[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            h(de, {
              variant: v.value ? "danger" : "primary",
              disabled: !g.value || !f.value.trim() || m.value || M.value,
              loading: m.value,
              onClick: k
            }, {
              default: i(() => [
                w(a(m.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", ly, [
      e("div", iy, [
        _[21] || (_[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: _[6] || (_[6] = (x) => r("close"))
        }, [..._[20] || (_[20] = [
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
      e("div", ry, [
        t.status && g.value ? (o(), s("div", dy, [
          t.status.workflows.new.length ? (o(), s("div", cy, [
            _[22] || (_[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", uy, [
            _[23] || (_[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", my, [
            _[24] || (_[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", vy, [
            _[25] || (_[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", fy, [
            _[26] || (_[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", gy, " No changes to commit ")) : (o(), s("div", py, " Loading... ")),
        d.value ? (o(), s("div", hy, [
          e("div", yy, [
            _[27] || (_[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", wy, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", ky, [
            (o(!0), s(A, null, Z(y.value, (x) => (o(), s("div", {
              key: x.name,
              class: "issue-item"
            }, [
              e("strong", null, a(x.name), 1),
              w(": " + a(x.issue_summary), 1)
            ]))), 128))
          ]),
          h(oo, {
            modelValue: v.value,
            "onUpdate:modelValue": _[7] || (_[7] = (x) => v.value = x),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [..._[28] || (_[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", by, [
          h(to, {
            modelValue: f.value,
            "onUpdate:modelValue": _[8] || (_[8] = (x) => f.value = x),
            placeholder: M.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || m.value || M.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), s("div", {
          key: 4,
          class: oe(["result", l.value.type])
        }, a(l.value.message), 3)) : c("", !0)
      ]),
      e("div", _y, [
        h(de, {
          variant: "secondary",
          onClick: _[9] || (_[9] = (x) => r("close"))
        }, {
          default: i(() => [..._[29] || (_[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h(de, {
          variant: v.value ? "danger" : "primary",
          disabled: !g.value || !f.value.trim() || m.value || M.value,
          loading: m.value,
          onClick: k
        }, {
          default: i(() => [
            w(a(m.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), go = /* @__PURE__ */ Y($y, [["__scopeId", "data-v-d92153de"]]), Cy = { class: "modal-header" }, xy = { class: "modal-body" }, Sy = { class: "switch-message" }, Iy = { class: "switch-details" }, Ey = { class: "modal-actions" }, My = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), E(Me, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Cy, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", xy, [
            e("p", Sy, [
              n[6] || (n[6] = w(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = w(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = w("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Iy, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Ey, [
            h(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            h(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ry = /* @__PURE__ */ Y(My, [["__scopeId", "data-v-e9c5253e"]]), Ty = { class: "progress-bar" }, Ly = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = D(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, p) => (o(), s("div", Ty, [
      e("div", {
        class: oe(["progress-fill", t.variant]),
        style: et({ width: n.value })
      }, null, 6)
    ]));
  }
}), zy = /* @__PURE__ */ Y(Ly, [["__scopeId", "data-v-1beb0512"]]), Ny = {
  key: 0,
  class: "modal-overlay"
}, Dy = { class: "modal-content" }, Py = { class: "modal-body" }, Uy = { class: "progress-info" }, Oy = { class: "progress-percentage" }, By = { class: "progress-state" }, Fy = { class: "switch-steps" }, Ay = { class: "step-icon" }, Vy = { class: "step-label" }, Wy = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = D(() => {
      const f = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return u.message || f[u.state] || u.state;
    }), r = D(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), p = D(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = f.findIndex((v) => v.state === u.state);
      return f.map((v, l) => {
        let g = "pending", y = "○";
        return l < m ? (g = "completed", y = "✓") : l === m && (g = "active", y = "⟳"), {
          ...v,
          status: g,
          icon: y
        };
      });
    });
    return (f, m) => (o(), E(Me, { to: "body" }, [
      t.show ? (o(), s("div", Ny, [
        e("div", Dy, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Py, [
            h(zy, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Uy, [
              e("div", Oy, a(t.progress) + "%", 1),
              e("div", By, a(n.value), 1)
            ]),
            e("div", Fy, [
              (o(!0), s(A, null, Z(p.value, (v) => (o(), s("div", {
                key: v.state,
                class: oe(["switch-step", v.status])
              }, [
                e("span", Ay, a(v.icon), 1),
                e("span", Vy, a(v.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Gy = /* @__PURE__ */ Y(Wy, [["__scopeId", "data-v-768a5078"]]), jy = { class: "modal-header" }, Hy = { class: "modal-body" }, qy = {
  key: 0,
  class: "node-section"
}, Ky = { class: "node-list" }, Yy = {
  key: 1,
  class: "node-section"
}, Jy = { class: "node-list" }, Qy = { class: "modal-actions" }, Xy = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), E(Me, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", jy, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Hy, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", qy, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Ky, [
                (o(!0), s(A, null, Z(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Yy, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Jy, [
                (o(!0), s(A, null, Z(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Qy, [
            h(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            h(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Zy = /* @__PURE__ */ Y(Xy, [["__scopeId", "data-v-7cad7518"]]), ew = { class: "comfygit-panel" }, tw = { class: "panel-header" }, ow = { class: "header-left" }, sw = {
  key: 0,
  class: "header-info"
}, nw = { class: "header-actions" }, aw = { class: "env-switcher" }, lw = {
  key: 0,
  class: "header-info"
}, iw = { class: "branch-name" }, rw = { class: "panel-main" }, dw = { class: "sidebar" }, cw = { class: "sidebar-section" }, uw = { class: "sidebar-section" }, mw = { class: "sidebar-section" }, vw = { class: "content-area" }, fw = {
  key: 0,
  class: "error-message"
}, gw = {
  key: 1,
  class: "loading"
}, pw = {
  key: 4,
  class: "dialog-overlay"
}, hw = { class: "dialog-content create-progress-dialog" }, yw = { class: "dialog-body create-progress-body" }, ww = { class: "create-progress-message" }, kw = { class: "dialog-content env-selector-dialog" }, bw = { class: "dialog-header" }, _w = { class: "dialog-body" }, $w = { class: "env-list" }, Cw = { class: "env-info" }, xw = { class: "env-name-row" }, Sw = { class: "env-indicator" }, Iw = { class: "env-name" }, Ew = {
  key: 0,
  class: "env-branch"
}, Mw = {
  key: 1,
  class: "current-label"
}, Rw = { class: "env-stats" }, Tw = ["onClick"], Lw = { class: "toast-container" }, zw = { class: "toast-message" }, Nw = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: p,
      getBranches: f,
      checkout: m,
      createBranch: v,
      switchBranch: l,
      deleteBranch: g,
      getEnvironments: y,
      switchEnvironment: d,
      getSwitchProgress: M,
      createEnvironment: k,
      getCreateProgress: z,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: C
    } = Re(), W = co(), R = $(null), S = $([]), P = $([]), F = $([]), J = D(() => F.value.find((j) => j.is_current)), G = $(!1), N = $(null), T = $(null), O = $(!1), V = $(null), le = $(null), re = $(null), X = $(!1), ee = $(!1), U = $(""), b = $({ state: "idle", progress: 0, message: "" });
    let se = null, te = null;
    const xe = $(!1), ke = $({ state: "idle", message: "" }), Te = $(null);
    let Oe = null;
    const ue = $("status"), Be = $("this-env");
    function ye(j, L) {
      ue.value = j, Be.value = L;
    }
    function Le(j) {
      const ie = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ie && ye(ie.view, ie.section);
    }
    function Ve() {
      ye("branches", "this-env");
    }
    function Je() {
      n("close"), setTimeout(() => {
        var L;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ie of j)
          if (((L = ie.textContent) == null ? void 0 : L.trim()) === "Manager") {
            ie.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const fe = $(null), We = $(!1), Ge = $(!1), je = $([]);
    let dt = 0;
    function ve(j, L = "info", ie = 3e3) {
      const _e = ++dt;
      return je.value.push({ id: _e, message: j, type: L }), ie > 0 && setTimeout(() => {
        je.value = je.value.filter((Ne) => Ne.id !== _e);
      }, ie), _e;
    }
    function ze(j) {
      je.value = je.value.filter((L) => L.id !== j);
    }
    function ct(j, L) {
      ve(j, L);
    }
    const st = D(() => {
      if (!R.value) return "neutral";
      const j = R.value.workflows, L = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || R.value.has_changes;
      return R.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    D(() => R.value ? st.value === "success" ? "All synced" : st.value === "warning" ? "Uncommitted changes" : st.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      G.value = !0, N.value = null;
      try {
        const [j, L, ie, _e] = await Promise.all([
          r(!0),
          p(),
          f(),
          y()
        ]);
        R.value = j, S.value = L.commits, P.value = ie.branches, F.value = _e, n("statusUpdate", j), V.value && await V.value.loadWorkflows(!0);
      } catch (j) {
        N.value = j instanceof Error ? j.message : "Failed to load status", R.value = null, S.value = [], P.value = [];
      } finally {
        G.value = !1;
      }
    }
    function ut(j) {
      T.value = j;
    }
    async function H(j) {
      var ie;
      T.value = null;
      const L = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      fe.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ie = j.hash) == null ? void 0 : ie.slice(0, 7))}?`,
        details: L ? Zt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var De;
          fe.value = null, be();
          const _e = ve(`Checking out ${j.short_hash || ((De = j.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Ne = await m(j.hash, L);
          ze(_e), Ne.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function B(j) {
      const L = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      fe.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: L ? Zt() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, be();
          const ie = ve(`Switching to ${j}...`, "info", 0), _e = await l(j, L);
          ze(ie), _e.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(_e.message || "Branch switch failed", "error");
        }
      };
    }
    async function I(j) {
      const L = ve(`Creating branch ${j}...`, "info", 0), ie = await v(j);
      ze(L), ie.status === "success" ? (ve(`Branch "${j}" created`, "success"), await Se()) : ve(ie.message || "Failed to create branch", "error");
    }
    async function q(j, L = !1) {
      const ie = async (_e) => {
        var De;
        const Ne = ve(`Deleting branch ${j}...`, "info", 0);
        try {
          const me = await g(j, _e);
          ze(Ne), me.status === "success" ? (ve(`Branch "${j}" deleted`, "success"), await Se()) : (De = me.message) != null && De.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await ie(!0);
            }
          } : ve(me.message || "Failed to delete branch", "error");
        } catch (me) {
          ze(Ne);
          const Ot = me instanceof Error ? me.message : "Failed to delete branch";
          Ot.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await ie(!0);
            }
          } : ve(Ot, "error");
        }
      };
      fe.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, await ie(L);
        }
      };
    }
    async function ce(j) {
      T.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const ie = ve(`Creating branch ${L}...`, "info", 0), _e = await v(L, j.hash);
        ze(ie), _e.status === "success" ? (ve(`Branch "${L}" created from ${j.short_hash}`, "success"), await Se()) : ve(_e.message || "Failed to create branch", "error");
      }
    }
    function be() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ne() {
      fe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          fe.value = null, be(), ve("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ae() {
      fe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          fe.value = null, ve("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function we(j) {
      O.value = !1, U.value = j, X.value = !0;
    }
    async function Lt() {
      X.value = !1, ee.value = !0, be(), b.value = {
        progress: 10,
        state: zt(10),
        message: Nt(10)
      };
      try {
        await d(U.value), ko(), bo();
      } catch (j) {
        mt(), ee.value = !1, ve(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), b.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function zt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Nt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[zt(j)] || "";
    }
    function ko() {
      if (te) return;
      let j = 10;
      const L = 60, ie = 5e3, _e = 100, Ne = (L - j) / (ie / _e);
      te = window.setInterval(() => {
        if (j += Ne, j >= L && (j = L, mt()), b.value.progress < L) {
          const De = Math.floor(j);
          b.value = {
            progress: De,
            state: zt(De),
            message: Nt(De)
          };
        }
      }, _e);
    }
    function mt() {
      te && (clearInterval(te), te = null);
    }
    function bo() {
      se || (se = window.setInterval(async () => {
        try {
          let j = await W.getStatus();
          if ((!j || j.state === "idle") && (j = await M()), !j)
            return;
          const L = j.progress || 0;
          L >= 60 && mt();
          const ie = Math.max(L, b.value.progress), _e = j.state && j.state !== "idle" && j.state !== "unknown", Ne = _e ? j.state : zt(ie), De = _e && j.message || Nt(ie);
          b.value = {
            state: Ne,
            progress: ie,
            message: De
          }, j.state === "complete" ? (mt(), Ut(), ee.value = !1, ve(`✓ Switched to ${U.value}`, "success"), await Se(), U.value = "") : j.state === "rolled_back" ? (mt(), Ut(), ee.value = !1, ve("Switch failed, restored previous environment", "warning"), U.value = "") : j.state === "critical_failure" && (mt(), Ut(), ee.value = !1, ve(`Critical error during switch: ${j.message}`, "error"), U.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Ut() {
      mt(), se && (clearInterval(se), se = null);
    }
    function _o() {
      X.value = !1, U.value = "";
    }
    async function $o() {
      We.value = !1, await Se(), ve("✓ Changes committed", "success");
    }
    async function Co() {
      Ge.value = !1;
      const j = ve("Syncing environment...", "info", 0);
      try {
        const L = await x("skip", !0);
        if (ze(j), L.status === "success") {
          const ie = [];
          L.nodes_installed.length && ie.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && ie.push(`${L.nodes_removed.length} removed`);
          const _e = ie.length ? `: ${ie.join(", ")}` : "";
          ve(`✓ Environment synced${_e}`, "success"), await Se();
        } else {
          const ie = L.errors.length ? L.errors.join("; ") : L.message;
          ve(`Sync failed: ${ie}`, "error");
        }
      } catch (L) {
        ze(j), ve(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function xo(j) {
      var L;
      try {
        const ie = await C(j);
        ie.failed.length === 0 ? ve(`✓ Repaired ${ie.success} workflow${ie.success === 1 ? "" : "s"}`, "success") : ve(`Repaired ${ie.success}, failed: ${ie.failed.length}`, "warning"), await Se();
      } catch (ie) {
        ve(`Repair failed: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error");
      } finally {
        (L = re.value) == null || L.resetRepairingState();
      }
    }
    async function So(j) {
      Te.value = j, xe.value = !0, ke.value = { state: "creating", message: `Creating environment '${j.name}'...` };
      try {
        const L = await k(j);
        L.status === "started" ? Io() : L.status === "error" && (xe.value = !1, ve(`Failed to create environment: ${L.message}. Check debug logs for details.`, "error"), Te.value = null);
      } catch (L) {
        xe.value = !1, ve(`Error creating environment: ${L instanceof Error ? L.message : "Unknown error"}. Check debug logs.`, "error"), Te.value = null;
      }
    }
    function Io() {
      Oe || (Oe = window.setInterval(async () => {
        var j;
        try {
          const L = await z();
          ke.value = { state: L.state, message: L.message }, L.state === "complete" ? (Xt(), xe.value = !1, ve(`✓ Environment '${L.environment_name}' created`, "success"), await Se(), le.value && await le.value.loadEnvironments(), (j = Te.value) != null && j.switch_after && L.environment_name && await we(L.environment_name), Te.value = null) : L.state === "error" && (Xt(), xe.value = !1, ve(`Failed to create environment: ${L.error || L.message}. Check debug logs.`, "error"), Te.value = null);
        } catch (L) {
          console.error("Failed to poll create progress:", L);
        }
      }, 2e3));
    }
    function Xt() {
      Oe && (clearInterval(Oe), Oe = null);
    }
    async function Eo(j) {
      var L;
      if (((L = J.value) == null ? void 0 : L.name) === j) {
        ve("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      fe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          fe.value = null;
          try {
            const ie = await _(j);
            ie.status === "success" ? (ve(`Environment "${j}" deleted`, "success"), await Se(), le.value && await le.value.loadEnvironments()) : ve(ie.message || "Failed to delete environment", "error");
          } catch (ie) {
            ve(`Error deleting environment: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Zt() {
      if (!R.value) return [];
      const j = [], L = R.value.workflows;
      return L.new.length && j.push(`${L.new.length} new workflow(s)`), L.modified.length && j.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && j.push(`${L.deleted.length} deleted workflow(s)`), j;
    }
    return Ie(Se), (j, L) => {
      var ie, _e, Ne, De;
      return o(), s("div", ew, [
        e("div", tw, [
          e("div", ow, [
            L[27] || (L[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            R.value ? (o(), s("div", sw)) : c("", !0)
          ]),
          e("div", nw, [
            e("button", {
              class: oe(["icon-btn", { spinning: G.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...L[28] || (L[28] = [
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
              onClick: L[0] || (L[0] = (me) => n("close")),
              title: "Close"
            }, [...L[29] || (L[29] = [
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
        e("div", aw, [
          e("div", { class: "env-switcher-header" }, [
            L[30] || (L[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ne
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ae
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: L[1] || (L[1] = (me) => ye("environments", "all-envs"))
          }, [
            R.value ? (o(), s("div", lw, [
              e("span", null, a(((ie = J.value) == null ? void 0 : ie.name) || ((_e = R.value) == null ? void 0 : _e.environment) || "Loading..."), 1),
              e("span", iw, "(" + a(R.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            L[31] || (L[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", rw, [
          e("div", dw, [
            e("div", cw, [
              L[32] || (L[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "status" && Be.value === "this-env" }]),
                onClick: L[2] || (L[2] = (me) => ye("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "workflows" }]),
                onClick: L[3] || (L[3] = (me) => ye("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "models-env" }]),
                onClick: L[4] || (L[4] = (me) => ye("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "branches" }]),
                onClick: L[5] || (L[5] = (me) => ye("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "history" }]),
                onClick: L[6] || (L[6] = (me) => ye("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "nodes" }]),
                onClick: L[7] || (L[7] = (me) => ye("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "debug-env" }]),
                onClick: L[8] || (L[8] = (me) => ye("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            L[35] || (L[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", uw, [
              L[33] || (L[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "environments" }]),
                onClick: L[9] || (L[9] = (me) => ye("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "model-index" }]),
                onClick: L[10] || (L[10] = (me) => ye("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "settings" }]),
                onClick: L[11] || (L[11] = (me) => ye("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "debug-workspace" }]),
                onClick: L[12] || (L[12] = (me) => ye("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            L[36] || (L[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", mw, [
              L[34] || (L[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "export" }]),
                onClick: L[13] || (L[13] = (me) => ye("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "import" }]),
                onClick: L[14] || (L[14] = (me) => ye("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ue.value === "remotes" }]),
                onClick: L[15] || (L[15] = (me) => ye("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", vw, [
            N.value ? (o(), s("div", fw, a(N.value), 1)) : !R.value && ue.value === "status" ? (o(), s("div", gw, " Loading status... ")) : (o(), s(A, { key: 2 }, [
              ue.value === "status" ? (o(), E(aa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: R.value,
                onSwitchBranch: Ve,
                onCommitChanges: L[16] || (L[16] = (me) => We.value = !0),
                onSyncEnvironment: L[17] || (L[17] = (me) => Ge.value = !0),
                onViewWorkflows: L[18] || (L[18] = (me) => ye("workflows", "this-env")),
                onViewHistory: L[19] || (L[19] = (me) => ye("history", "this-env")),
                onViewDebug: L[20] || (L[20] = (me) => ye("debug-env", "this-env")),
                onRepairMissingModels: xo
              }, null, 8, ["status"])) : ue.value === "workflows" ? (o(), E(lu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: V,
                onRefresh: Se
              }, null, 512)) : ue.value === "models-env" ? (o(), E(Vu, {
                key: 2,
                onNavigate: Le
              })) : ue.value === "branches" ? (o(), E(ka, {
                key: 3,
                branches: P.value,
                current: ((Ne = R.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: B,
                onCreate: I,
                onDelete: q
              }, null, 8, ["branches", "current"])) : ue.value === "history" ? (o(), E(Ta, {
                key: 4,
                commits: S.value,
                onSelect: ut,
                onCheckout: H
              }, null, 8, ["commits"])) : ue.value === "nodes" ? (o(), E(Rm, {
                key: 5,
                onOpenNodeManager: Je
              })) : ue.value === "debug-env" ? (o(), E(Pg, { key: 6 })) : ue.value === "environments" ? (o(), E(Sp, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: le,
                onSwitch: we,
                onCreate: So,
                onDelete: Eo
              }, null, 512)) : ue.value === "model-index" ? (o(), E(rm, {
                key: 8,
                onRefresh: Se
              })) : ue.value === "settings" ? (o(), E(Lg, { key: 9 })) : ue.value === "debug-workspace" ? (o(), E(Ng, { key: 10 })) : ue.value === "export" ? (o(), E(Up, { key: 11 })) : ue.value === "import" ? (o(), E(u1, { key: 12 })) : ue.value === "remotes" ? (o(), E(vg, {
                key: 13,
                onToast: ct
              })) : c("", !0)
            ], 64))
          ])
        ]),
        T.value ? (o(), E(M1, {
          key: 0,
          commit: T.value,
          onClose: L[21] || (L[21] = (me) => T.value = null),
          onCheckout: H,
          onCreateBranch: ce
        }, null, 8, ["commit"])) : c("", !0),
        fe.value ? (o(), E(N1, {
          key: 1,
          title: fe.value.title,
          message: fe.value.message,
          details: fe.value.details,
          warning: fe.value.warning,
          confirmLabel: fe.value.confirmLabel,
          cancelLabel: fe.value.cancelLabel,
          secondaryLabel: fe.value.secondaryLabel,
          secondaryAction: fe.value.secondaryAction,
          destructive: fe.value.destructive,
          onConfirm: fe.value.onConfirm,
          onCancel: L[22] || (L[22] = (me) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        h(Ry, {
          show: X.value,
          "from-environment": ((De = J.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": U.value,
          onConfirm: Lt,
          onClose: _o
        }, null, 8, ["show", "from-environment", "to-environment"]),
        We.value && R.value ? (o(), E(go, {
          key: 2,
          status: R.value,
          "as-modal": !0,
          onClose: L[23] || (L[23] = (me) => We.value = !1),
          onCommitted: $o
        }, null, 8, ["status"])) : c("", !0),
        Ge.value && R.value ? (o(), E(Zy, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: R.value.comparison.missing_nodes,
            extra_nodes: R.value.comparison.extra_nodes
          },
          onConfirm: Co,
          onClose: L[24] || (L[24] = (me) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        h(Gy, {
          show: ee.value,
          state: b.value.state,
          progress: b.value.progress,
          message: b.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        xe.value ? (o(), s("div", pw, [
          e("div", hw, [
            L[39] || (L[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", yw, [
              L[37] || (L[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", ww, a(ke.value.message), 1),
              L[38] || (L[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        O.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: L[26] || (L[26] = $e((me) => O.value = !1, ["self"]))
        }, [
          e("div", kw, [
            e("div", bw, [
              L[41] || (L[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[25] || (L[25] = (me) => O.value = !1)
              }, [...L[40] || (L[40] = [
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
            e("div", _w, [
              L[42] || (L[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", $w, [
                (o(!0), s(A, null, Z(F.value, (me) => (o(), s("div", {
                  key: me.name,
                  class: oe(["env-item", { current: me.is_current }])
                }, [
                  e("div", Cw, [
                    e("div", xw, [
                      e("span", Sw, a(me.is_current ? "●" : "○"), 1),
                      e("span", Iw, a(me.name), 1),
                      me.current_branch ? (o(), s("span", Ew, "(" + a(me.current_branch) + ")", 1)) : c("", !0),
                      me.is_current ? (o(), s("span", Mw, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Rw, a(me.workflow_count) + " workflows • " + a(me.node_count) + " nodes ", 1)
                  ]),
                  me.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ot) => we(me.name)
                  }, " SWITCH ", 8, Tw))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Lw, [
          h(zo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(A, null, Z(je.value, (me) => (o(), s("div", {
                key: me.id,
                class: oe(["toast", me.type])
              }, [
                e("span", zw, a(me.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Dw = /* @__PURE__ */ Y(Nw, [["__scopeId", "data-v-44184278"]]), Pw = { class: "item-header" }, Uw = { class: "item-info" }, Ow = { class: "filename" }, Bw = { class: "metadata" }, Fw = { class: "size" }, Aw = {
  key: 0,
  class: "type"
}, Vw = { class: "item-actions" }, Ww = {
  key: 0,
  class: "progress-section"
}, Gw = { class: "progress-bar" }, jw = { class: "progress-stats" }, Hw = { class: "downloaded" }, qw = { class: "speed" }, Kw = {
  key: 0,
  class: "eta"
}, Yw = {
  key: 1,
  class: "status-msg paused"
}, Jw = {
  key: 2,
  class: "status-msg queued"
}, Qw = {
  key: 3,
  class: "status-msg completed"
}, Xw = {
  key: 4,
  class: "status-msg failed"
}, Zw = {
  key: 0,
  class: "retries"
}, e0 = /* @__PURE__ */ K({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(m) {
      if (m === 0) return "?";
      const v = m / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(m) {
      return m === 0 ? "-" : `${(m / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(m) {
      if (m < 60) return `${Math.round(m)}s`;
      const v = Math.floor(m / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (m, v) => (o(), s("div", {
      class: oe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Pw, [
        e("div", Uw, [
          e("div", Ow, a(t.item.filename), 1),
          e("div", Bw, [
            e("span", Fw, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Aw, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Vw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Ww, [
        e("div", Gw, [
          e("div", {
            class: "progress-fill",
            style: et({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", jw, [
          e("span", Hw, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", qw, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Kw, a(f(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Yw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Jw, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Qw, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Xw, [
        w(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Zw, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ Y(e0, [["__scopeId", "data-v-2110df65"]]), t0 = { class: "queue-title" }, o0 = { class: "count" }, s0 = { class: "queue-actions" }, n0 = { class: "action-label" }, a0 = {
  key: 0,
  class: "overall-progress"
}, l0 = { class: "progress-bar" }, i0 = {
  key: 0,
  class: "current-mini"
}, r0 = { class: "filename" }, d0 = { class: "speed" }, c0 = {
  key: 1,
  class: "queue-content"
}, u0 = {
  key: 0,
  class: "section"
}, m0 = {
  key: 1,
  class: "section"
}, v0 = { class: "section-header" }, f0 = { class: "section-label paused" }, g0 = { class: "items-list" }, p0 = {
  key: 2,
  class: "section"
}, h0 = { class: "section-header" }, y0 = { class: "section-label" }, w0 = { class: "items-list" }, k0 = {
  key: 3,
  class: "section"
}, b0 = { class: "section-header" }, _0 = { class: "section-label" }, $0 = { class: "items-list" }, C0 = {
  key: 4,
  class: "section"
}, x0 = { class: "section-header" }, S0 = { class: "section-label failed" }, I0 = { class: "items-list" }, E0 = /* @__PURE__ */ K({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: f,
      pausedItems: m,
      hasItems: v,
      activeCount: l,
      cancelDownload: g,
      retryDownload: y,
      resumeDownload: d,
      resumeAllPaused: M,
      removeItem: k,
      clearCompleted: z
    } = Tt(), _ = $(!1);
    let x = null;
    wt(
      () => ({
        active: l.value,
        failed: f.value.length,
        paused: m.value.length,
        completed: p.value.length
      }),
      (S, P) => {
        x && (clearTimeout(x), x = null);
        const F = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, J = P && (P.active > 0 || P.paused > 0);
        F && J && (x = setTimeout(() => {
          z(), x = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = D(() => {
      var F;
      if (u.items.length === 0) return 0;
      const S = p.value.length, P = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((S + P / 100) / u.items.length * 100);
    });
    function W(S) {
      g(S);
    }
    function R(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, P) => (o(), E(Me, { to: "body" }, [
      pe(v) ? (o(), s("div", {
        key: 0,
        class: oe(["model-download-queue", { minimized: !_.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: P[0] || (P[0] = (F) => _.value = !_.value)
        }, [
          e("div", t0, [
            P[4] || (P[4] = e("span", { class: "icon" }, "↓", -1)),
            P[5] || (P[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", o0, "(" + a(pe(l)) + "/" + a(pe(u).items.length) + ")", 1)
          ]),
          e("div", s0, [
            e("span", n0, a(_.value ? "minimize" : "expand"), 1)
          ])
        ]),
        _.value ? (o(), s("div", c0, [
          pe(n) ? (o(), s("div", u0, [
            P[6] || (P[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            h(Ct, {
              item: pe(n),
              onCancel: P[1] || (P[1] = (F) => W(pe(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          pe(m).length > 0 ? (o(), s("div", m0, [
            e("div", v0, [
              e("span", f0, "Paused (" + a(pe(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: P[2] || (P[2] = //@ts-ignore
                (...F) => pe(M) && pe(M)(...F))
              }, "Resume All")
            ]),
            e("div", g0, [
              (o(!0), s(A, null, Z(pe(m), (F) => (o(), E(Ct, {
                key: F.id,
                item: F,
                onResume: (J) => pe(d)(F.id),
                onRemove: (J) => pe(k)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          pe(r).length > 0 ? (o(), s("div", p0, [
            e("div", h0, [
              e("span", y0, "Queued (" + a(pe(r).length) + ")", 1)
            ]),
            e("div", w0, [
              (o(!0), s(A, null, Z(pe(r), (F) => (o(), E(Ct, {
                key: F.id,
                item: F,
                onCancel: (J) => W(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          pe(p).length > 0 ? (o(), s("div", k0, [
            e("div", b0, [
              e("span", _0, "Completed (" + a(pe(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: P[3] || (P[3] = //@ts-ignore
                (...F) => pe(z) && pe(z)(...F))
              }, "Clear")
            ]),
            e("div", $0, [
              (o(!0), s(A, null, Z(pe(p).slice(0, 3), (F) => (o(), E(Ct, {
                key: F.id,
                item: F,
                onRemove: (J) => pe(k)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          pe(f).length > 0 ? (o(), s("div", C0, [
            e("div", x0, [
              e("span", S0, "Failed (" + a(pe(f).length) + ")", 1)
            ]),
            e("div", I0, [
              (o(!0), s(A, null, Z(pe(f), (F) => (o(), E(Ct, {
                key: F.id,
                item: F,
                onRetry: (J) => pe(y)(F.id),
                onRemove: (J) => pe(k)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", a0, [
          e("div", l0, [
            e("div", {
              class: "progress-fill",
              style: et({ width: `${C.value}%` })
            }, null, 4)
          ]),
          pe(n) ? (o(), s("div", i0, [
            e("span", r0, a(pe(n).filename), 1),
            e("span", d0, a(R(pe(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), M0 = /* @__PURE__ */ Y(E0, [["__scopeId", "data-v-60751cfa"]]), R0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', T0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', L0 = {
  comfy: R0,
  phosphor: T0
}, Jt = "comfy", po = "comfygit-theme";
let vt = null, ho = Jt;
function z0() {
  try {
    const t = localStorage.getItem(po);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function yo(t = Jt) {
  vt && vt.remove(), vt = document.createElement("style"), vt.id = "comfygit-theme-styles", vt.setAttribute("data-theme", t), vt.textContent = L0[t], document.head.appendChild(vt), document.body.setAttribute("data-comfygit-theme", t), ho = t;
  try {
    localStorage.setItem(po, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function N0() {
  return ho;
}
function D0(t) {
  yo(t);
}
const Qt = document.createElement("link");
Qt.rel = "stylesheet";
Qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qt);
const P0 = z0();
yo(P0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), D0(t);
  },
  getTheme: () => {
    const t = N0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let qe = null, Fe = null, Et = null, xt = null, so = null;
const yt = $(null);
async function Dt() {
  var t;
  if (!((t = ht) != null && t.api)) return null;
  try {
    const u = await ht.api.fetchApi("/v2/comfygit/status");
    u.ok && (yt.value = await u.json());
  } catch {
  }
}
function U0() {
  if (!yt.value) return !1;
  const t = yt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || yt.value.has_changes;
}
function O0() {
  qe && qe.remove(), qe = document.createElement("div"), qe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", qe.appendChild(t), qe.addEventListener("click", (r) => {
    r.target === qe && Wt();
  });
  const u = (r) => {
    r.key === "Escape" && (Wt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), qt({
    render: () => Kt(Dw, {
      onClose: Wt,
      onStatusUpdate: (r) => {
        yt.value = r, Mt();
      }
    })
  }).mount(t), document.body.appendChild(qe);
}
function Wt() {
  qe && (qe.remove(), qe = null);
}
function B0(t) {
  St(), Fe = document.createElement("div"), Fe.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Fe.style.position = "fixed", Fe.style.top = `${u.bottom + 8}px`, Fe.style.right = `${window.innerWidth - u.right}px`, Fe.style.zIndex = "10001";
  const n = (p) => {
    Fe && !Fe.contains(p.target) && p.target !== t && (St(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (St(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Et = qt({
    render: () => Kt(go, {
      status: yt.value,
      onClose: St,
      onCommitted: () => {
        St(), Dt().then(Mt);
      }
    })
  }), Et.mount(Fe), document.body.appendChild(Fe);
}
function St() {
  Et && (Et.unmount(), Et = null), Fe && (Fe.remove(), Fe = null);
}
function F0() {
  xt || (xt = document.createElement("div"), xt.className = "comfygit-download-queue-root", so = qt({
    render: () => Kt(M0)
  }), so.mount(xt), document.body.appendChild(xt), console.log("[ComfyGit] Model download queue mounted"));
}
let nt = null;
function Mt() {
  if (!nt) return;
  const t = nt.querySelector(".commit-indicator");
  t && (t.style.display = U0() ? "block" : "none");
}
const wo = document.createElement("style");
wo.textContent = `
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

  .comfygit-commit-btn:hover {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
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
document.head.appendChild(wo);
ht.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = O0, nt = document.createElement("button"), nt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", nt.innerHTML = 'Commit <span class="commit-indicator"></span>', nt.title = "Quick Commit", nt.onclick = () => B0(nt), t.appendChild(u), t.appendChild(nt), (f = (p = ht.menu) == null ? void 0 : p.settingsGroup) != null && f.element && (ht.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), F0();
    const { loadPendingDownloads: n } = Tt();
    n(), await Dt(), Mt(), setInterval(async () => {
      await Dt(), Mt();
    }, 3e4);
    const r = ht.api;
    if (r) {
      let m = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, v = function() {
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
        const y = document.createElement("span");
        y.textContent = "Workflows updated - refresh required", g.appendChild(y);
        const d = document.createElement("button");
        d.textContent = "Refresh", d.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => m(), g.appendChild(d);
        const M = document.createElement("button");
        M.textContent = "×", M.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => g.remove(), g.appendChild(M), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: y, workflow_name: d } = g.detail;
        console.log(`[ComfyGit] Workflow ${y}: ${d}`), await Dt(), Mt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (g) => {
        const y = g.detail != null;
        y && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : v()), l = y;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
