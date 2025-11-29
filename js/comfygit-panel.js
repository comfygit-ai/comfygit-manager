import { app as wt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as pe, createBlock as I, resolveDynamicComponent as qt, normalizeClass as le, withCtx as d, toDisplayString as a, createVNode as w, createTextVNode as y, computed as D, Fragment as F, renderList as te, normalizeStyle as et, ref as $, onMounted as Ie, watch as pt, Teleport as Me, withModifiers as $e, Transition as Ro, createSlots as zt, withKeys as rt, onUnmounted as To, reactive as no, readonly as zo, unref as ye, withDirectives as Ze, vModelText as ao, vModelRadio as Bt, vModelCheckbox as lo, nextTick as Lo, vModelSelect as Ft, TransitionGroup as Do, createApp as Ht, h as Kt } from "vue";
const No = { class: "panel-layout" }, Po = {
  key: 0,
  class: "panel-layout-header"
}, Uo = {
  key: 1,
  class: "panel-layout-search"
}, Oo = { class: "panel-layout-content" }, Bo = {
  key: 2,
  class: "panel-layout-footer"
}, Fo = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", No, [
      u.$slots.header ? (o(), s("div", Po, [
        pe(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", Uo, [
        pe(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Oo, [
        pe(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", Bo, [
        pe(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of u)
    n[r] = p;
  return n;
}, Pe = /* @__PURE__ */ J(Fo, [["__scopeId", "data-v-21565df9"]]), Ao = {
  key: 0,
  class: "panel-title-prefix"
}, Vo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Wo = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), I(qt(`h${t.level}`), {
      class: le(["panel-title", t.variant])
    }, {
      default: d(() => [
        t.showPrefix ? (o(), s("span", Ao, a(t.prefix), 1)) : (o(), s("span", Vo)),
        pe(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jo = /* @__PURE__ */ J(Wo, [["__scopeId", "data-v-c3875efc"]]), Go = ["title"], qo = ["width", "height"], Ho = /* @__PURE__ */ Y({
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
      ])], 8, qo))
    ], 8, Go));
  }
}), io = /* @__PURE__ */ J(Ho, [["__scopeId", "data-v-6fc7f16d"]]), Ko = { class: "header-left" }, Yo = {
  key: 0,
  class: "header-actions"
}, Jo = /* @__PURE__ */ Y({
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
      class: le(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ko, [
        w(jo, { "show-prefix": t.showPrefix }, {
          default: d(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), I(io, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", Yo, [
        pe(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ J(Jo, [["__scopeId", "data-v-55a62cd6"]]), Qo = {
  key: 0,
  class: "section-title-count"
}, Xo = {
  key: 1,
  class: "section-title-icon"
}, Zo = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), I(qt(`h${t.level}`), {
      class: le(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: d(() => [
        pe(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Qo, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", Xo, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qe = /* @__PURE__ */ J(Zo, [["__scopeId", "data-v-559361eb"]]), es = { class: "status-grid" }, ts = { class: "status-grid__columns" }, os = { class: "status-grid__column" }, ss = { class: "status-grid__title" }, ns = { class: "status-grid__column status-grid__column--right" }, as = { class: "status-grid__title" }, ls = {
  key: 0,
  class: "status-grid__footer"
}, is = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", es, [
      e("div", ts, [
        e("div", os, [
          e("h4", ss, a(t.leftTitle), 1),
          pe(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ns, [
          e("h4", as, a(t.rightTitle), 1),
          pe(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", ls, [
        pe(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ J(is, [["__scopeId", "data-v-73b7ba3f"]]), ds = {
  key: 0,
  class: "status-item__icon"
}, cs = {
  key: 1,
  class: "status-item__count"
}, us = { class: "status-item__label" }, ms = /* @__PURE__ */ Y({
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
      class: le(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", ds, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", cs, a(t.count), 1)) : c("", !0),
      e("span", us, a(t.label), 1)
    ], 2));
  }
}), Qe = /* @__PURE__ */ J(ms, [["__scopeId", "data-v-6f929183"]]), vs = { class: "issue-card__header" }, fs = { class: "issue-card__icon" }, gs = { class: "issue-card__title" }, hs = {
  key: 0,
  class: "issue-card__content"
}, ps = {
  key: 0,
  class: "issue-card__description"
}, ys = {
  key: 1,
  class: "issue-card__items"
}, ws = {
  key: 2,
  class: "issue-card__actions"
}, ks = /* @__PURE__ */ Y({
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
      class: le(["issue-card", n.value])
    }, [
      e("div", vs, [
        e("span", fs, a(t.icon), 1),
        e("h4", gs, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", hs, [
        t.description ? (o(), s("p", ps, a(t.description), 1)) : c("", !0),
        pe(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", ys, [
        (o(!0), s(F, null, te(t.items, (v, f) => (o(), s("div", {
          key: f,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", ws, [
        pe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ J(ks, [["__scopeId", "data-v-df6aa348"]]), bs = ["type", "disabled"], _s = {
  key: 0,
  class: "spinner"
}, $s = /* @__PURE__ */ Y({
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
      class: le(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", _s)) : c("", !0),
      t.loading ? c("", !0) : pe(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, bs));
  }
}), ee = /* @__PURE__ */ J($s, [["__scopeId", "data-v-772abe47"]]), Cs = { class: "empty-state" }, xs = {
  key: 0,
  class: "empty-icon"
}, Ss = { class: "empty-message" }, Is = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", Cs, [
      t.icon ? (o(), s("div", xs, a(t.icon), 1)) : c("", !0),
      e("p", Ss, a(t.message), 1),
      t.actionLabel ? (o(), I(ee, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: d(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ J(Is, [["__scopeId", "data-v-4466284f"]]), Es = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: le(["detail-label"]),
      style: et({ minWidth: t.minWidth })
    }, [
      pe(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Dt = /* @__PURE__ */ J(Es, [["__scopeId", "data-v-75e9eeb8"]]), Ms = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: le(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      pe(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ J(Ms, [["__scopeId", "data-v-2f186e4c"]]), Rs = { class: "detail-row" }, Ts = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("div", Rs, [
      w(Dt, { "min-width": t.labelMinWidth }, {
        default: d(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), I(Gt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: d(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : pe(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ce = /* @__PURE__ */ J(Ts, [["__scopeId", "data-v-ef15664a"]]), zs = { class: "modal-header" }, Ls = { class: "modal-body" }, Ds = { class: "status-section" }, Ns = {
  key: 0,
  class: "status-section"
}, Ps = { class: "section-header-row" }, Us = {
  key: 0,
  class: "workflow-group"
}, Os = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, As = { class: "workflow-name" }, Vs = { class: "workflow-issue" }, Ws = {
  key: 1,
  class: "workflow-group"
}, js = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, qs = { class: "workflow-list" }, Hs = { class: "workflow-name" }, Ks = { class: "workflow-issue" }, Ys = {
  key: 2,
  class: "workflow-group"
}, Js = { class: "workflow-group-header" }, Qs = { class: "workflow-group-title" }, Xs = { class: "workflow-list" }, Zs = { class: "workflow-name" }, en = {
  key: 3,
  class: "workflow-group"
}, tn = { class: "workflow-group-header" }, on = { class: "workflow-group-title" }, sn = { class: "workflow-list" }, nn = { class: "workflow-name" }, an = {
  key: 4,
  class: "workflow-group"
}, ln = { class: "workflow-group-header" }, rn = { class: "workflow-group-title" }, dn = { class: "workflow-list" }, cn = { class: "workflow-name" }, un = {
  key: 5,
  class: "workflow-group"
}, mn = { class: "workflow-group-title" }, vn = { class: "expand-icon" }, fn = {
  key: 0,
  class: "workflow-list"
}, gn = { class: "workflow-name" }, hn = {
  key: 1,
  class: "status-section"
}, pn = {
  key: 0,
  class: "change-group"
}, yn = { class: "change-group-header" }, wn = { class: "change-group-title" }, kn = { class: "change-list" }, bn = { class: "node-name" }, _n = {
  key: 0,
  class: "dev-badge"
}, $n = {
  key: 1,
  class: "change-group"
}, Cn = { class: "change-group-header" }, xn = { class: "change-group-title" }, Sn = { class: "change-list" }, In = { class: "node-name" }, En = {
  key: 0,
  class: "dev-badge"
}, Mn = {
  key: 2,
  class: "change-group"
}, Rn = { class: "change-list" }, Tn = { class: "change-item" }, zn = { class: "node-name" }, Ln = {
  key: 3,
  class: "change-group"
}, Dn = {
  key: 2,
  class: "status-section"
}, Nn = { class: "section-header-row" }, Pn = {
  key: 0,
  class: "drift-item"
}, Un = { class: "drift-list" }, On = {
  key: 0,
  class: "drift-list-more"
}, Bn = {
  key: 1,
  class: "drift-item"
}, Fn = { class: "drift-list" }, An = {
  key: 0,
  class: "drift-list-more"
}, Vn = {
  key: 2,
  class: "drift-item"
}, Wn = {
  key: 3,
  class: "drift-item"
}, jn = {
  key: 3,
  class: "status-section"
}, Gn = { class: "info-box" }, qn = { class: "drift-list" }, Hn = {
  key: 0,
  class: "drift-list-more"
}, Kn = {
  key: 4,
  class: "status-section"
}, Yn = { class: "warning-box" }, Jn = {
  key: 5,
  class: "empty-state-inline"
}, Qn = { class: "modal-actions" }, Xn = /* @__PURE__ */ Y({
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
    }), pt(() => u.show, (S, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", S);
    }, { immediate: !0 });
    const r = D(() => {
      var S, b, T;
      return ((T = (b = (S = u.status) == null ? void 0 : S.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (k) => k.status === "broken" && k.sync_state === "synced"
      )) || [];
    }), p = D(() => {
      var S, b, T;
      return ((T = (b = (S = u.status) == null ? void 0 : S.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (k) => k.status === "broken" && k.sync_state !== "synced"
      )) || [];
    }), v = D(() => {
      var S, b, T;
      return ((T = (b = (S = u.status) == null ? void 0 : S.workflows) == null ? void 0 : b.synced) == null ? void 0 : T.filter((k) => {
        var C, B, E;
        const x = (E = (B = (C = u.status) == null ? void 0 : C.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : E.find((R) => R.name === k);
        return !x || x.status !== "broken";
      })) || [];
    }), f = D(() => {
      var S, b, T, k, x;
      return (S = u.status) != null && S.workflows ? (((b = u.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((T = u.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((k = u.status.workflows.deleted) == null ? void 0 : k.length) ?? 0) > 0 || (((x = u.status.workflows.synced) == null ? void 0 : x.length) ?? 0) > 0 : !1;
    }), m = D(() => {
      var b, T, k;
      const S = (b = u.status) == null ? void 0 : b.git_changes;
      return S ? (((T = S.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((k = S.nodes_removed) == null ? void 0 : k.length) ?? 0) > 0 || S.workflow_changes || S.has_other_changes : !1;
    }), l = D(() => {
      var S, b, T, k, x, C;
      return !f.value && !m.value && ((b = (S = u.status) == null ? void 0 : S.comparison) == null ? void 0 : b.is_synced) && (((T = u.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = (x = (k = u.status) == null ? void 0 : k.comparison) == null ? void 0 : x.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), g = D(() => {
      var b, T;
      const S = (T = (b = u.status) == null ? void 0 : b.git_changes) == null ? void 0 : T.workflow_changes;
      return S ? typeof S == "number" ? S : Object.keys(S).length : 0;
    });
    function h(S) {
      return typeof S == "string" ? S : S.name;
    }
    function i(S) {
      return typeof S == "object" && S.is_development === !0;
    }
    return (S, b) => {
      var T, k, x, C, B, E, R, G, W, X, V, L, M, P, N, q, re, Q, se, U, _, ie;
      return o(), I(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[6] || (b[6] = (ne) => S.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[5] || (b[5] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", zs, [
              b[7] || (b[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (ne) => S.$emit("close"))
              }, "✕")
            ]),
            e("div", Ls, [
              e("div", Ds, [
                w(qe, { level: "4" }, {
                  default: d(() => [...b[8] || (b[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Ce, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (o(), s("div", Ns, [
                e("div", Ps, [
                  w(qe, { level: "4" }, {
                    default: d(() => [...b[9] || (b[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (ne) => S.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Us, [
                  e("div", Os, [
                    b[10] || (b[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bs, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(F, null, te(r.value, (ne) => (o(), s("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      e("span", As, a(ne.name), 1),
                      e("span", Vs, a(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (o(), s("div", Ws, [
                  e("div", js, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gs, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", qs, [
                    (o(!0), s(F, null, te(p.value, (ne) => (o(), s("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, a(ne.name), 1),
                      e("span", Ks, a(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (k = (T = t.status.workflows) == null ? void 0 : T.new) != null && k.length ? (o(), s("div", Ys, [
                  e("div", Js, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Qs, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Xs, [
                    (o(!0), s(F, null, te(t.status.workflows.new, (ne) => (o(), s("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Zs, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (x = t.status.workflows) == null ? void 0 : x.modified) != null && C.length ? (o(), s("div", en, [
                  e("div", tn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", on, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (o(!0), s(F, null, te(t.status.workflows.modified, (ne) => (o(), s("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", nn, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && E.length ? (o(), s("div", an, [
                  e("div", ln, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", rn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), s(F, null, te(t.status.workflows.deleted, (ne) => (o(), s("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", cn, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (o(), s("div", un, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (ne) => n.value = !n.value)
                  }, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", mn, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", vn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", fn, [
                    (o(!0), s(F, null, te(v.value, (ne) => (o(), s("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", gn, a(ne), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", hn, [
                w(qe, { level: "4" }, {
                  default: d(() => [...b[16] || (b[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && G.length ? (o(), s("div", pn, [
                  e("div", yn, [
                    b[17] || (b[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", wn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (o(!0), s(F, null, te(t.status.git_changes.nodes_added, (ne) => (o(), s("div", {
                      key: h(ne),
                      class: "change-item"
                    }, [
                      e("span", bn, a(h(ne)), 1),
                      i(ne) ? (o(), s("span", _n, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (X = (W = t.status.git_changes) == null ? void 0 : W.nodes_removed) != null && X.length ? (o(), s("div", $n, [
                  e("div", Cn, [
                    b[18] || (b[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", xn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (o(!0), s(F, null, te(t.status.git_changes.nodes_removed, (ne) => (o(), s("div", {
                      key: h(ne),
                      class: "change-item"
                    }, [
                      e("span", In, a(h(ne)), 1),
                      i(ne) ? (o(), s("span", En, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (V = t.status.git_changes) != null && V.workflow_changes ? (o(), s("div", Mn, [
                  b[19] || (b[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Rn, [
                    e("div", Tn, [
                      e("span", zn, a(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (L = t.status.git_changes) != null && L.has_other_changes ? (o(), s("div", Ln, [...b[20] || (b[20] = [
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
              (M = t.status.comparison) != null && M.is_synced ? c("", !0) : (o(), s("div", Dn, [
                e("div", Nn, [
                  w(qe, { level: "4" }, {
                    default: d(() => [...b[21] || (b[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (ne) => S.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[22] || (b[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (N = (P = t.status.comparison) == null ? void 0 : P.missing_nodes) != null && N.length ? (o(), s("div", Pn, [
                  w(Ce, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Un, [
                    (o(!0), s(F, null, te(t.status.comparison.missing_nodes.slice(0, 10), (ne) => (o(), s("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + a(ne), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", On, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (re = (q = t.status.comparison) == null ? void 0 : q.extra_nodes) != null && re.length ? (o(), s("div", Bn, [
                  w(Ce, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Fn, [
                    (o(!0), s(F, null, te(t.status.comparison.extra_nodes.slice(0, 10), (ne) => (o(), s("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + a(ne), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", An, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (se = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && se.length ? (o(), s("div", Vn, [
                  w(Ce, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (U = t.status.comparison) != null && U.packages_in_sync ? c("", !0) : (o(), s("div", Wn, [
                  w(Ce, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ie = (_ = t.status.comparison) == null ? void 0 : _.disabled_nodes) != null && ie.length ? (o(), s("div", jn, [
                w(qe, { level: "4" }, {
                  default: d(() => [...b[23] || (b[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Gn, [
                  b[24] || (b[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", qn, [
                  (o(!0), s(F, null, te(t.status.comparison.disabled_nodes.slice(0, 10), (ne) => (o(), s("div", {
                    key: ne,
                    class: "drift-list-item"
                  }, " • " + a(ne), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Hn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Kn, [
                w(qe, { level: "4" }, {
                  default: d(() => [...b[25] || (b[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Yn, [
                  b[26] || (b[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[27] || (b[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (o(), s("div", Jn, [...b[28] || (b[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Qn, [
              w(ee, {
                variant: "secondary",
                onClick: b[4] || (b[4] = (ne) => S.$emit("close"))
              }, {
                default: d(() => [...b[29] || (b[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Zn = /* @__PURE__ */ J(Xn, [["__scopeId", "data-v-c67eed17"]]), ea = { class: "health-section-header" }, ta = { class: "suggestions-content" }, oa = { class: "suggestions-text" }, sa = { style: { "margin-top": "var(--cg-space-3)" } }, na = {
  key: 1,
  class: "no-issues-text"
}, aa = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: u, emit: n }) {
    const r = t, p = $(!1), v = $(!1);
    function f() {
      p.value = !0;
    }
    function m() {
      p.value = !1, g("view-workflows");
    }
    function l() {
      p.value = !1, g("view-nodes");
    }
    const g = n, h = $(!1), i = D(() => {
      const P = r.status.workflows.analyzed || [], N = P.filter(
        (q) => q.unresolved_models_count > 0 || q.ambiguous_models_count > 0
      );
      return N.length === 0 && r.status.missing_models_count > 0 ? P.filter((q) => q.sync_state === "synced") : N;
    });
    function S() {
      const P = i.value;
      P.length !== 0 && (h.value = !0, g("repair-missing-models", P.map((N) => N.name)));
    }
    function b() {
      h.value = !1;
    }
    u({ resetRepairingState: b });
    const T = D(() => r.status.workflows.new.length > 0 || r.status.workflows.modified.length > 0 || r.status.workflows.deleted.length > 0), k = D(() => r.status.has_changes), x = D(() => {
      const P = r.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), C = D(() => r.status.has_changes || T.value), B = D(() => Object.keys(r.status.git_changes.workflow_changes_detail).length), E = D(() => r.status.git_changes.has_other_changes), R = D(() => {
      var P;
      return ((P = r.status.workflows.analyzed) == null ? void 0 : P.filter((N) => N.status === "broken")) || [];
    }), G = D(() => {
      var P;
      return ((P = r.status.workflows.analyzed) == null ? void 0 : P.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), W = D(() => R.value.length > 0), X = D(() => W.value || G.value.length > 0 || r.status.missing_models_count > 0 || !r.status.comparison.is_synced), V = D(() => {
      const P = [];
      return r.status.workflows.new.length > 0 && P.push(`${r.status.workflows.new.length} new`), r.status.workflows.modified.length > 0 && P.push(`${r.status.workflows.modified.length} modified`), r.status.workflows.deleted.length > 0 && P.push(`${r.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), L = D(() => {
      var q, re;
      const P = [], N = r.status.comparison;
      return (q = N.missing_nodes) != null && q.length && P.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (re = N.extra_nodes) != null && re.length && P.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), M = D(() => {
      var q, re;
      const P = [], N = r.status.comparison;
      return (q = N.extra_nodes) != null && q.length && (N.extra_nodes.slice(0, 3).forEach((Q) => {
        P.push(`Untracked: ${Q}`);
      }), N.extra_nodes.length > 3 && P.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (re = N.missing_nodes) != null && re.length && (N.missing_nodes.slice(0, 3).forEach((Q) => {
        P.push(`Missing: ${Q}`);
      }), N.missing_nodes.length > 3 && P.push(`...and ${N.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, N) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, { title: "STATUS" })
        ]),
        content: d(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (q) => v.value = !0),
            onMouseleave: N[2] || (N[2] = (q) => v.value = !1)
          }, [
            e("div", ea, [
              w(qe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: d(() => [...N[9] || (N[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(Ro, { name: "fade" }, {
                default: d(() => [
                  v.value ? (o(), I(ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: d(() => [...N[10] || (N[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            w(rs, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, zt({
              left: d(() => [
                t.status.workflows.new.length ? (o(), I(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), I(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), I(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                w(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: T.value
                }, null, 8, ["count", "separator"])
              ]),
              right: d(() => [
                t.status.git_changes.nodes_added.length ? (o(), I(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), I(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), I(Qe, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                E.value ? (o(), I(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                k.value && !x.value && !E.value ? (o(), I(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                k.value ? c("", !0) : (o(), I(Qe, {
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
                fn: d(() => [
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ta, [
                    e("span", oa, a(V.value), 1),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (q) => P.$emit("commit-changes"))
                    }, {
                      default: d(() => [...N[11] || (N[11] = [
                        y(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (o(), I(ht, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (q) => P.$emit("create-branch"))
              }, {
                default: d(() => [...N[13] || (N[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", sa, [
            w(qe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: d(() => [...N[14] || (N[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            X.value ? (o(), s(F, { key: 0 }, [
              R.value.length > 0 ? (o(), I(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${R.value.length} workflow${R.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: R.value.map((q) => `${q.name} — ${q.issue_summary}`)
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[4] || (N[4] = (q) => P.$emit("view-workflows"))
                  }, {
                    default: d(() => [...N[15] || (N[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              G.value.length > 0 ? (o(), I(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${G.value.length} workflow${G.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: G.value.map((q) => `${q.name} — ${q.models_needing_path_sync_count} model path${q.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[5] || (N[5] = (q) => P.$emit("view-workflows"))
                  }, {
                    default: d(() => [...N[16] || (N[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !W.value ? (o(), I(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: h.value,
                    onClick: S
                  }, {
                    default: d(() => [
                      y(a(h.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[6] || (N[6] = (q) => P.$emit("view-workflows"))
                  }, {
                    default: d(() => [...N[17] || (N[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (o(), I(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: L.value,
                items: M.value
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: d(() => [...N[18] || (N[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (q) => P.$emit("view-nodes"))
                  }, {
                    default: d(() => [...N[19] || (N[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : C.value ? (o(), s("span", na, "No issues")) : (o(), I(Ye, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(Zn, {
        show: p.value,
        status: t.status,
        onClose: N[8] || (N[8] = (q) => p.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), la = /* @__PURE__ */ J(aa, [["__scopeId", "data-v-5f863725"]]), ia = ["type", "value", "placeholder", "disabled"], ra = /* @__PURE__ */ Y({
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
    const r = t, p = n, v = $(null);
    function f(m) {
      const l = m.target.value;
      p("update:modelValue", l);
    }
    return Ie(() => {
      r.autoFocus && v.value && v.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (o(), s("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: le(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        l[0] || (l[0] = rt((g) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((g) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (g) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (g) => m.$emit("blur"))
    }, null, 42, ia));
  }
}), Pt = /* @__PURE__ */ J(ra, [["__scopeId", "data-v-0380d08f"]]), da = { class: "branch-create-form" }, ca = { class: "form-actions" }, ua = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = $(""), p = D(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function f() {
      r.value = "", n("cancel");
    }
    return (m, l) => (o(), s("div", da, [
      w(Pt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (g) => r.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", ca, [
        w(ee, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: v
        }, {
          default: d(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(ee, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: d(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ma = /* @__PURE__ */ J(ua, [["__scopeId", "data-v-7c500394"]]), va = { class: "branch-list-item__indicator" }, fa = { class: "branch-list-item__name" }, ga = {
  key: 0,
  class: "branch-list-item__actions"
}, ha = {
  key: 0,
  class: "branch-list-item__current-label"
}, pa = /* @__PURE__ */ Y({
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
      class: le(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", va, a(t.isCurrent ? "●" : "○"), 1),
      e("span", fa, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", ga, [
        pe(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", ha, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ J(pa, [["__scopeId", "data-v-c6581a24"]]), wa = {
  key: 2,
  class: "branch-list"
}, ka = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function p(f) {
      n("create", f), v();
    }
    function v() {
      r.value = !1;
    }
    return (f, m) => (o(), I(Pe, null, {
      header: d(() => [
        w(Ue, { title: "BRANCHES" }, {
          actions: d(() => [
            r.value ? c("", !0) : (o(), I(ee, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => r.value = !0)
            }, {
              default: d(() => [...m[1] || (m[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: d(() => [
        r.value ? (o(), I(ma, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (o(), I(Ye, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", wa, [
          (o(!0), s(F, null, te(t.branches, (l) => (o(), I(ya, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: d(() => [
              l.is_current ? c("", !0) : (o(), I(ee, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (g) => f.$emit("delete", l.name)
              }, {
                default: d(() => [...m[2] || (m[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (o(), I(ee, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (g) => f.$emit("switch", l.name)
              }, {
                default: d(() => [...m[3] || (m[3] = [
                  y(" Switch ", -1)
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
}), ba = /* @__PURE__ */ J(ka, [["__scopeId", "data-v-86784ddd"]]), _a = { class: "commit-list" }, $a = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", _a, [
      pe(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ca = /* @__PURE__ */ J($a, [["__scopeId", "data-v-8c5ee761"]]), xa = { class: "commit-hash" }, Sa = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = D(() => u.hash.slice(0, u.length));
    return (r, p) => (o(), s("span", xa, a(n.value), 1));
  }
}), ro = /* @__PURE__ */ J(Sa, [["__scopeId", "data-v-7c333cc6"]]), Ia = { class: "commit-message" }, Ea = { class: "commit-date" }, Ma = /* @__PURE__ */ Y({
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
    return (v, f) => (o(), s("div", {
      class: le(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      w(ro, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ia, a(t.message), 1),
      e("span", Ea, a(t.relativeDate), 1),
      v.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = $e(() => {
        }, ["stop"]))
      }, [
        pe(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ J(Ma, [["__scopeId", "data-v-dd7c621b"]]), Ta = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), I(Pe, null, {
      header: d(() => [
        w(Ue, { title: "HISTORY" })
      ]),
      content: d(() => [
        t.commits.length === 0 ? (o(), I(Ye, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), I(Ca, { key: 1 }, {
          default: d(() => [
            (o(!0), s(F, null, te(t.commits, (r) => (o(), I(Ra, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => u.$emit("select", r)
            }, {
              actions: d(() => [
                w(ee, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => u.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: d(() => [...n[0] || (n[0] = [
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
}), za = /* @__PURE__ */ J(Ta, [["__scopeId", "data-v-981c3c64"]]), X0 = [
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
], Z0 = {
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
], ek = [
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
function $t() {
  return !1;
}
function Re() {
  const t = $(!1), u = $(null);
  async function n(A, ae) {
    var oe;
    if (!((oe = window.app) != null && oe.api))
      throw new Error("ComfyUI API not available");
    const K = await window.app.api.fetchApi(A, ae);
    if (!K.ok) {
      const fe = await K.json().catch(() => ({}));
      throw new Error(fe.error || fe.message || `Request failed: ${K.status}`);
    }
    return K.json();
  }
  async function r(A = !1) {
    return n(A ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(A, ae = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: A, allow_issues: ae })
    });
  }
  async function v(A = 10, ae = 0) {
    return n(`/v2/comfygit/log?limit=${A}&offset=${ae}`);
  }
  async function f(A) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function l(A) {
    return n(`/v2/comfygit/commit/${A}`);
  }
  async function g(A, ae = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: A, force: ae })
    });
  }
  async function h(A, ae = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, start_point: ae })
    });
  }
  async function i(A, ae = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: A, force: ae })
    });
  }
  async function S(A, ae = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(A)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ae })
    });
  }
  async function b() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const A = await r();
        return [{
          name: A.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + A.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: A.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: A.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function T(A) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: A })
    });
  }
  async function k() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(A) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function C() {
    return n("/v2/workspace/environments/create_status");
  }
  async function B(A = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${A}`);
  }
  async function E(A) {
    return n(`/v2/workspace/environments/${A}`, {
      method: "DELETE"
    });
  }
  async function R(A = !1) {
    try {
      return n(A ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ae = await r(A), K = [];
      return ae.workflows.new.forEach((oe) => {
        K.push({ name: oe, status: "new", missing_nodes: 0, missing_models: 0, path: oe });
      }), ae.workflows.modified.forEach((oe) => {
        K.push({ name: oe, status: "modified", missing_nodes: 0, missing_models: 0, path: oe });
      }), ae.workflows.synced.forEach((oe) => {
        K.push({ name: oe, status: "synced", missing_nodes: 0, missing_models: 0, path: oe });
      }), K;
    }
  }
  async function G(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/details`);
  }
  async function W(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/resolve`, {
      method: "POST"
    });
  }
  async function X(A, ae, K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ae, install_models: K })
    });
  }
  async function V(A, ae, K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ae, importance: K })
    });
  }
  async function L() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function M() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function P(A) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(A)}`);
  }
  async function N(A) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function q(A, ae) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ae })
    });
  }
  async function re(A, ae) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ae })
    });
  }
  async function Q(A) {
    return n(`/v2/workspace/models/${A}`, {
      method: "DELETE"
    });
  }
  async function se(A) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function U() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function _() {
    return n("/v2/workspace/models/directory");
  }
  async function ie(A) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function ne() {
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
  async function xe(A) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function be(A, ae) {
    try {
      const K = new URLSearchParams();
      return A && K.append("level", A), ae && K.append("lines", ae.toString()), n(`/v2/comfygit/debug/logs?${K}`);
    } catch {
      return [];
    }
  }
  async function Te(A, ae) {
    try {
      const K = new URLSearchParams();
      return A && K.append("level", A), ae && K.append("lines", ae.toString()), n(`/v2/workspace/debug/logs?${K}`);
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
  async function ue(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/track-dev`, {
      method: "POST"
    });
  }
  async function Be(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/install`, {
      method: "POST"
    });
  }
  async function ke(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/update`, {
      method: "POST"
    });
  }
  async function ze(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}`, {
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
  async function Je(A, ae) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, url: ae })
    });
  }
  async function he(A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function We(A, ae, K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ae, push_url: K })
    });
  }
  async function je(A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/fetch`, {
      method: "POST"
    });
  }
  async function Ge(A) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/status`);
    } catch {
      return null;
    }
  }
  async function dt(A = "skip", ae = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: A,
        remove_extra_nodes: ae
      })
    });
  }
  async function ve(A, ae) {
    const K = ae ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview?branch=${encodeURIComponent(ae)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview`;
    return n(K);
  }
  async function Le(A, ae = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ae.modelStrategy || "skip",
        force: ae.force || !1,
        resolutions: ae.resolutions
      })
    });
  }
  async function ct(A, ae) {
    const K = ae ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview?branch=${encodeURIComponent(ae)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview`;
    return n(K);
  }
  async function st(A, ae = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ae.force || !1 })
    });
  }
  async function Se(A, ae) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ae })
    });
  }
  async function ut(A) {
    const ae = {
      success: 0,
      failed: []
    };
    for (const K of A)
      try {
        await W(K), ae.success++;
      } catch (oe) {
        ae.failed.push({
          name: K,
          error: oe instanceof Error ? oe.message : "Unknown error"
        });
      }
    return ae;
  }
  async function H(A) {
    var oe;
    const ae = new FormData();
    if (ae.append("file", A), !((oe = window.app) != null && oe.api))
      throw new Error("ComfyUI API not available");
    const K = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ae
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!K.ok) {
      const fe = await K.json().catch(() => ({}));
      throw new Error(fe.error || `Preview failed: ${K.status}`);
    }
    return K.json();
  }
  async function O(A) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(A)}`
    );
  }
  async function Z(A, ae, K, oe) {
    var mt;
    const fe = new FormData();
    if (fe.append("file", A), fe.append("name", ae), fe.append("model_strategy", K), fe.append("torch_backend", oe), !((mt = window.app) != null && mt.api))
      throw new Error("ComfyUI API not available");
    const nt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: fe
    });
    if (!nt.ok) {
      const vt = await nt.json().catch(() => ({}));
      throw new Error(vt.message || vt.error || `Import failed: ${nt.status}`);
    }
    return nt.json();
  }
  async function ge() {
    return n("/v2/workspace/import/status");
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: p,
    getHistory: v,
    exportEnv: f,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: g,
    createBranch: h,
    switchBranch: i,
    deleteBranch: S,
    // Environment Management
    getEnvironments: b,
    switchEnvironment: T,
    getSwitchProgress: k,
    createEnvironment: x,
    getCreateProgress: C,
    getComfyUIReleases: B,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: G,
    resolveWorkflow: W,
    installWorkflowDeps: X,
    setModelImportance: V,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: M,
    getModelDetails: P,
    openFileLocation: N,
    addModelSource: q,
    removeModelSource: re,
    deleteModel: Q,
    downloadModel: se,
    scanWorkspaceModels: U,
    getModelsDirectory: _,
    setModelsDirectory: ie,
    // Settings
    getConfig: ne,
    updateConfig: xe,
    // Debug/Logs
    getEnvironmentLogs: be,
    getWorkspaceLogs: Te,
    // Node Management
    getNodes: Oe,
    trackNodeAsDev: ue,
    installNode: Be,
    updateNode: ke,
    uninstallNode: ze,
    // Git Remotes
    getRemotes: Ve,
    addRemote: Je,
    removeRemote: he,
    updateRemoteUrl: We,
    fetchRemote: je,
    getRemoteSyncStatus: Ge,
    // Push/Pull
    getPullPreview: ve,
    pullFromRemote: Le,
    getPushPreview: ct,
    pushToRemote: st,
    validateMerge: Se,
    // Environment Sync
    syncEnvironmentManually: dt,
    // Workflow Repair
    repairWorkflowModels: ut,
    // Import Operations
    previewTarballImport: H,
    validateEnvironmentName: O,
    executeImport: Z,
    getImportProgress: ge
  };
}
async function Ct(t, u = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const v = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(p), v;
  } catch (v) {
    throw clearTimeout(p), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function co() {
  const t = $(null);
  async function u() {
    try {
      const f = await Ct(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (f.ok)
        return (await f.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const f = await Ct(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Health check failed");
      return await f.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const f = await Ct(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Failed to get status");
      return await f.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ct(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ct(
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
    kill: v
  };
}
const Da = { class: "base-modal-header" }, Na = {
  key: 0,
  class: "base-modal-title"
}, Pa = { class: "base-modal-body" }, Ua = {
  key: 0,
  class: "base-modal-loading"
}, Oa = {
  key: 1,
  class: "base-modal-error"
}, Ba = {
  key: 0,
  class: "base-modal-footer"
}, Fa = /* @__PURE__ */ Y({
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
    function v(f) {
      f.key === "Escape" && r("close");
    }
    return Ie(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), To(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (f, m) => (o(), I(Me, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: le(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Da, [
            pe(f.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Na, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => f.$emit("close"))
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
          e("div", Pa, [
            t.loading ? (o(), s("div", Ua, "Loading...")) : t.error ? (o(), s("div", Oa, a(t.error), 1)) : pe(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (o(), s("div", Ba, [
            pe(f.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ J(Fa, [["__scopeId", "data-v-2125a0e6"]]), Aa = ["type", "disabled"], Va = {
  key: 0,
  class: "spinner"
}, Wa = /* @__PURE__ */ Y({
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
      class: le(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Va)) : c("", !0),
      pe(u.$slots, "default", {}, void 0, !0)
    ], 10, Aa));
  }
}), ce = /* @__PURE__ */ J(Wa, [["__scopeId", "data-v-f3452606"]]), ja = {
  key: 0,
  class: "base-title-count"
}, Ga = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), I(qt(`h${t.level}`), {
      class: le(["base-title", t.variant])
    }, {
      default: d(() => [
        pe(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ja, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mt = /* @__PURE__ */ J(Ga, [["__scopeId", "data-v-5a01561d"]]), qa = ["value", "disabled"], Ha = {
  key: 0,
  value: "",
  disabled: ""
}, Ka = ["value"], Ya = {
  key: 0,
  class: "base-select-error"
}, Ja = /* @__PURE__ */ Y({
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
      class: le(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: le(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (v) => r.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ha, a(t.placeholder), 1)) : c("", !0),
        (o(!0), s(F, null, te(t.options, (v) => (o(), s("option", {
          key: u(v),
          value: u(v)
        }, a(n(v)), 9, Ka))), 128))
      ], 42, qa),
      t.error ? (o(), s("span", Ya, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Qa = /* @__PURE__ */ J(Ja, [["__scopeId", "data-v-7436d745"]]), Xa = { class: "popover-header" }, Za = { class: "popover-title" }, el = { class: "popover-content" }, tl = {
  key: 0,
  class: "popover-actions"
}, ol = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), I(Me, { to: "body" }, [
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
          e("div", Xa, [
            e("h4", Za, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", el, [
            pe(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", tl, [
            pe(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), ot = /* @__PURE__ */ J(ol, [["__scopeId", "data-v-42815ace"]]), sl = { class: "detail-section" }, nl = {
  key: 0,
  class: "empty-message"
}, al = { class: "model-header" }, ll = { class: "model-name" }, il = { class: "model-details" }, rl = { class: "model-row" }, dl = { class: "model-row" }, cl = { class: "label" }, ul = {
  key: 0,
  class: "model-row model-row-nodes"
}, ml = { class: "node-list" }, vl = ["onClick"], fl = {
  key: 1,
  class: "model-row"
}, gl = { class: "value" }, hl = {
  key: 0,
  class: "model-actions"
}, pl = { class: "detail-section" }, yl = {
  key: 0,
  class: "empty-message"
}, wl = { class: "node-name" }, kl = {
  key: 0,
  class: "node-version"
}, bl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: p, setModelImportance: v, installWorkflowDeps: f } = Re(), m = $(null), l = $(!1), g = $(null), h = $(!1), i = $({}), S = $({}), b = $(!1), T = $(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(L) {
      switch (L) {
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
    function C(L) {
      switch (L) {
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
    function B(L) {
      if (!L.loaded_by || L.loaded_by.length === 0) return [];
      const M = L.hash || L.filename;
      return T.value.has(M) ? L.loaded_by : L.loaded_by.slice(0, 3);
    }
    function E(L) {
      return T.value.has(L);
    }
    function R(L) {
      T.value.has(L) ? T.value.delete(L) : T.value.add(L), T.value = new Set(T.value);
    }
    async function G() {
      l.value = !0, g.value = null;
      try {
        m.value = await p(n.workflowName);
      } catch (L) {
        g.value = L instanceof Error ? L.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function W(L, M) {
      i.value[L] = M, h.value = !0;
    }
    async function X() {
      if (!h.value) {
        r("close");
        return;
      }
      l.value = !0, g.value = null;
      try {
        for (const [L, M] of Object.entries(i.value))
          await v(n.workflowName, L, M);
        r("refresh"), r("close");
      } catch (L) {
        g.value = L instanceof Error ? L.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function V(L) {
      S.value[L] = !0, g.value = null;
      try {
        await f(n.workflowName, !0, !1), await G();
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to install node";
      } finally {
        S.value[L] = !1;
      }
    }
    return Ie(G), (L, M) => (o(), s(F, null, [
      w(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: g.value || void 0,
        onClose: M[5] || (M[5] = (P) => r("close"))
      }, {
        body: d(() => [
          m.value ? (o(), s(F, { key: 0 }, [
            e("section", sl, [
              w(Mt, { variant: "section" }, {
                default: d(() => [
                  y("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", nl, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(F, null, te(m.value.models, (P) => (o(), s("div", {
                key: P.hash || P.filename,
                class: "model-card"
              }, [
                e("div", al, [
                  M[7] || (M[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", ll, a(P.filename), 1)
                ]),
                e("div", il, [
                  e("div", rl, [
                    M[8] || (M[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: le(["value", x(P.status)])
                    }, a(C(P.status)), 3)
                  ]),
                  e("div", dl, [
                    e("span", cl, [
                      M[9] || (M[9] = y(" Importance: ", -1)),
                      w(io, {
                        size: 14,
                        title: "About importance levels",
                        onClick: M[0] || (M[0] = (N) => b.value = !0)
                      })
                    ]),
                    w(Qa, {
                      "model-value": i.value[P.filename] || P.importance,
                      options: k,
                      "onUpdate:modelValue": (N) => W(P.filename, N)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  P.loaded_by && P.loaded_by.length > 0 ? (o(), s("div", ul, [
                    M[10] || (M[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ml, [
                      (o(!0), s(F, null, te(B(P), (N, q) => (o(), s("div", {
                        key: `${N.node_id}-${q}`,
                        class: "node-reference"
                      }, a(N.node_type) + " (Node #" + a(N.node_id) + ") ", 1))), 128)),
                      P.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (N) => R(P.hash || P.filename)
                      }, a(E(P.hash || P.filename) ? "▼ Show less" : `▶ View all (${P.loaded_by.length})`), 9, vl)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  P.size_mb ? (o(), s("div", fl, [
                    M[11] || (M[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", gl, a(P.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                P.status !== "available" ? (o(), s("div", hl, [
                  P.status === "downloadable" ? (o(), I(ce, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: M[1] || (M[1] = (N) => r("resolve"))
                  }, {
                    default: d(() => [...M[12] || (M[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : P.status === "path_mismatch" ? (o(), I(ce, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[2] || (M[2] = (N) => r("resolve"))
                  }, {
                    default: d(() => [...M[13] || (M[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), I(ce, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: M[3] || (M[3] = (N) => r("resolve"))
                  }, {
                    default: d(() => [...M[14] || (M[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", pl, [
              w(Mt, { variant: "section" }, {
                default: d(() => [
                  y("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", yl, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(F, null, te(m.value.nodes, (P) => (o(), s("div", {
                key: P.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", P.status === "installed" ? "installed" : "missing"])
                }, a(P.status === "installed" ? "✓" : "✕"), 3),
                e("span", wl, a(P.name), 1),
                P.version ? (o(), s("span", kl, "v" + a(P.version), 1)) : c("", !0),
                P.status === "missing" ? (o(), I(ce, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: S.value[P.name],
                  onClick: (N) => V(P.name),
                  class: "node-install-btn"
                }, {
                  default: d(() => [...M[15] || (M[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: d(() => [
          w(ce, {
            variant: "secondary",
            onClick: M[4] || (M[4] = (P) => r("close"))
          }, {
            default: d(() => [...M[16] || (M[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          h.value ? (o(), I(ce, {
            key: 0,
            variant: "primary",
            onClick: X
          }, {
            default: d(() => [...M[17] || (M[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(ot, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: M[6] || (M[6] = (P) => b.value = !1)
      }, {
        content: d(() => [...M[18] || (M[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              y(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              y(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              y(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _l = /* @__PURE__ */ J(bl, [["__scopeId", "data-v-0b14d32e"]]), we = no({
  items: [],
  status: "idle"
});
let Xe = null;
function uo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function At(t) {
  return we.items.find((u) => u.id === t);
}
async function yt() {
  if (we.status === "downloading") return;
  const t = we.items.find((u) => u.status === "queued");
  if (!t) {
    we.status = "idle";
    return;
  }
  we.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await $l(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    we.status = "idle", yt();
  }
}
async function $l(t) {
  return new Promise((u, n) => {
    Xe && (Xe.close(), Xe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Xe = p;
    let v = Date.now(), f = 0, m = !1;
    p.onmessage = (l) => {
      try {
        const g = JSON.parse(l.data);
        switch (g.type) {
          case "progress":
            t.downloaded = g.downloaded || 0, t.size = g.total || t.size;
            const h = Date.now(), i = (h - v) / 1e3;
            if (i > 0.5) {
              const S = t.downloaded - f;
              if (t.speed = S / i, v = h, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), Xe = null, u();
            break;
          case "error":
            m = !0, p.close(), Xe = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Xe = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Cl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (we.items.some((p) => p.url === n.url && p.filename === n.filename))
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
      we.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Lt() {
  function t(x) {
    for (const C of x) {
      if (we.items.some(
        (R) => R.url === C.url && R.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
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
      we.items.push(E);
    }
    we.status === "idle" && yt();
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
        Xe && (Xe.close(), Xe = null), C.status = "failed", C.error = "Cancelled by user", we.status = "idle", yt();
      } else if (C.status === "queued") {
        const B = we.items.findIndex((E) => E.id === x);
        B >= 0 && we.items.splice(B, 1);
      }
    }
  }
  function n(x) {
    const C = At(x);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, we.status === "idle" && yt());
  }
  function r(x) {
    const C = At(x);
    !C || C.status !== "paused" || (C.status = "queued", we.status === "idle" && yt());
  }
  function p() {
    const x = we.items.filter((C) => C.status === "paused");
    for (const C of x)
      C.status = "queued";
    we.status === "idle" && yt();
  }
  function v(x) {
    const C = we.items.findIndex((B) => B.id === x);
    C >= 0 && ["completed", "failed", "paused"].includes(we.items[C].status) && we.items.splice(C, 1);
  }
  function f() {
    we.items = we.items.filter((x) => x.status !== "completed");
  }
  function m() {
    we.items = we.items.filter((x) => x.status !== "failed");
  }
  const l = D(
    () => we.items.find((x) => x.status === "downloading")
  ), g = D(
    () => we.items.filter((x) => x.status === "queued")
  ), h = D(
    () => we.items.filter((x) => x.status === "completed")
  ), i = D(
    () => we.items.filter((x) => x.status === "failed")
  ), S = D(
    () => we.items.filter((x) => x.status === "paused")
  ), b = D(() => we.items.length > 0), T = D(
    () => we.items.filter((x) => x.status === "queued" || x.status === "downloading").length
  ), k = D(
    () => we.items.some((x) => x.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: zo(we),
    // Computed
    currentDownload: l,
    queuedItems: g,
    completedItems: h,
    failedItems: i,
    pausedItems: S,
    hasItems: b,
    activeCount: T,
    hasPaused: k,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: v,
    clearCompleted: f,
    clearFailed: m,
    loadPendingDownloads: Cl
  };
}
function xl() {
  const t = $(null), u = $(null), n = $([]), r = $([]), p = $(!1), v = $(null);
  async function f(B, E) {
    var G;
    if (!((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(B, E);
    if (!R.ok) {
      const W = await R.json().catch(() => ({})), X = W.error || W.message || `Request failed: ${R.status}`;
      throw new Error(X);
    }
    return R.json();
  }
  async function m(B) {
    p.value = !0, v.value = null;
    try {
      let E;
      return $t() || (E = await f(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = E, E;
    } catch (E) {
      const R = E instanceof Error ? E.message : "Unknown error occurred";
      throw v.value = R, E;
    } finally {
      p.value = !1;
    }
  }
  async function l(B, E, R, G) {
    p.value = !0, v.value = null;
    try {
      let W;
      if (!$t()) {
        const X = Object.fromEntries(E), V = Object.fromEntries(R), L = G ? Array.from(G) : [];
        W = await f(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: X,
              model_choices: V,
              skipped_packages: L
            })
          }
        );
      }
      return u.value = W, W;
    } catch (W) {
      const X = W instanceof Error ? W.message : "Unknown error occurred";
      throw v.value = X, W;
    } finally {
      p.value = !1;
    }
  }
  async function g(B, E = 10) {
    p.value = !0, v.value = null;
    try {
      let R;
      return $t() || (R = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: E })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const G = R instanceof Error ? R.message : "Unknown error occurred";
      throw v.value = G, R;
    } finally {
      p.value = !1;
    }
  }
  async function h(B, E = 10) {
    p.value = !0, v.value = null;
    try {
      let R;
      return $t() || (R = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: E })
        }
      )), r.value = R.results, R.results;
    } catch (R) {
      const G = R instanceof Error ? R.message : "Unknown error occurred";
      throw v.value = G, R;
    } finally {
      p.value = !1;
    }
  }
  const i = no({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function S() {
    i.phase = "idle", i.currentFile = void 0, i.currentFileIndex = void 0, i.totalFiles = void 0, i.bytesDownloaded = void 0, i.bytesTotal = void 0, i.completedFiles = [], i.nodesToInstall = [], i.nodesInstalled = [], i.installError = void 0, i.needsRestart = void 0, i.error = void 0, i.nodeInstallProgress = void 0;
  }
  async function b(B) {
    i.phase = "installing", i.nodesInstalled = [], i.installError = void 0, i.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return $t(), await T(B);
    } catch (E) {
      const R = E instanceof Error ? E.message : "Failed to install nodes";
      throw i.installError = R, E;
    }
  }
  async function T(B) {
    var R;
    const E = await f(
      `/v2/comfygit/workflow/${B}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: i.nodesToInstall
        })
      }
    );
    if (i.nodeInstallProgress) {
      i.nodeInstallProgress.totalNodes = i.nodesToInstall.length;
      const G = new Map(((R = E.failed) == null ? void 0 : R.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < i.nodesToInstall.length; W++) {
        const X = i.nodesToInstall[W], V = G.get(X);
        i.nodeInstallProgress.completedNodes.push({
          node_id: X,
          success: !V,
          error: V
        });
      }
    }
    return i.nodesInstalled = E.nodes_installed, i.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (i.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function k(B, E, R) {
    S(), i.phase = "resolving", v.value = null;
    const G = Object.fromEntries(E), W = Object.fromEntries(R);
    try {
      const X = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: G,
          model_choices: W
        })
      });
      if (!X.ok)
        throw new Error(`Request failed: ${X.status}`);
      if (!X.body)
        throw new Error("No response body");
      const V = X.body.getReader(), L = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: P, value: N } = await V.read();
        if (P) break;
        M += L.decode(N, { stream: !0 });
        const q = M.split(`

`);
        M = q.pop() || "";
        for (const re of q) {
          if (!re.trim()) continue;
          const Q = re.split(`
`);
          let se = "", U = "";
          for (const _ of Q)
            _.startsWith("event: ") ? se = _.slice(7) : _.startsWith("data: ") && (U = _.slice(6));
          if (U)
            try {
              const _ = JSON.parse(U);
              x(se, _);
            } catch (_) {
              console.warn("Failed to parse SSE event:", _);
            }
        }
      }
    } catch (X) {
      const V = X instanceof Error ? X.message : "Unknown error occurred";
      throw v.value = V, i.error = V, i.phase = "error", X;
    }
  }
  function x(B, E) {
    switch (B) {
      case "batch_start":
        i.phase = "downloading", i.totalFiles = E.total;
        break;
      case "file_start":
        i.currentFile = E.filename, i.currentFileIndex = E.index, i.bytesDownloaded = 0, i.bytesTotal = void 0;
        break;
      case "file_progress":
        i.bytesDownloaded = E.downloaded, i.bytesTotal = E.total;
        break;
      case "file_complete":
        i.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        i.nodesToInstall = E.nodes_to_install || [], E.download_results && (i.completedFiles = E.download_results), i.phase = "complete";
        break;
      case "error":
        i.error = E.message, i.phase = "error", v.value = E.message;
        break;
    }
  }
  function C(B, E) {
    const { addToQueue: R } = Lt(), G = E.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: B,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return G.length > 0 && R(G), G.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: v,
    progress: i,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: k,
    installNodes: b,
    searchNodes: g,
    searchModels: h,
    resetProgress: S,
    queueModelDownloads: C
  };
}
const Sl = { class: "resolution-stepper" }, Il = { class: "stepper-header" }, El = ["onClick"], Ml = {
  key: 0,
  class: "step-icon"
}, Rl = {
  key: 1,
  class: "step-number"
}, Tl = { class: "step-label" }, zl = {
  key: 0,
  class: "step-connector"
}, Ll = { class: "stepper-content" }, Dl = /* @__PURE__ */ Y({
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
      var h;
      if ((h = n.stepStats) != null && h[g]) {
        const i = n.stepStats[g];
        return i.total > 0 && i.resolved === i.total;
      }
      return n.completedSteps.includes(g);
    }
    function v(g) {
      var h;
      if ((h = n.stepStats) != null && h[g]) {
        const i = n.stepStats[g];
        return i.resolved > 0 && i.resolved < i.total;
      }
      return !1;
    }
    function f(g) {
      return p(g) ? "state-complete" : v(g) ? "state-partial" : "state-pending";
    }
    function m(g) {
      return !1;
    }
    function l(g) {
      r("step-change", g);
    }
    return (g, h) => (o(), s("div", Sl, [
      e("div", Il, [
        (o(!0), s(F, null, te(t.steps, (i, S) => (o(), s("div", {
          key: i.id,
          class: le(["step", {
            active: t.currentStep === i.id,
            completed: p(i.id),
            "in-progress": v(i.id),
            disabled: m(i.id)
          }]),
          onClick: (b) => l(i.id)
        }, [
          e("div", {
            class: le(["step-indicator", f(i.id)])
          }, [
            p(i.id) ? (o(), s("span", Ml, "✓")) : (o(), s("span", Rl, a(S + 1), 1))
          ], 2),
          e("div", Tl, a(i.label), 1),
          S < t.steps.length - 1 ? (o(), s("div", zl)) : c("", !0)
        ], 10, El))), 128))
      ]),
      e("div", Ll, [
        pe(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Nl = /* @__PURE__ */ J(Dl, [["__scopeId", "data-v-2a7b3af8"]]), Pl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = D(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = D(() => `confidence-${n.value}`), p = D(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, f) => (o(), s("span", {
      class: le(["confidence-badge", r.value, t.size])
    }, a(p.value), 3));
  }
}), Yt = /* @__PURE__ */ J(Pl, [["__scopeId", "data-v-17ec4b80"]]), Ul = { class: "node-info" }, Ol = { class: "node-info-text" }, Bl = { class: "item-body" }, Fl = {
  key: 0,
  class: "resolved-state"
}, Al = {
  key: 1,
  class: "multiple-options"
}, Vl = { class: "options-list" }, Wl = ["onClick"], jl = ["name", "value", "checked", "onChange"], Gl = { class: "option-content" }, ql = { class: "option-header" }, Hl = { class: "option-package-id" }, Kl = {
  key: 0,
  class: "option-title"
}, Yl = { class: "option-meta" }, Jl = {
  key: 0,
  class: "installed-badge"
}, Ql = { class: "action-buttons" }, Xl = {
  key: 2,
  class: "unresolved"
}, Zl = { class: "action-buttons" }, ei = /* @__PURE__ */ Y({
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
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const v = D(() => {
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
    function f(m) {
      r("option-selected", m);
    }
    return (m, l) => (o(), s("div", {
      class: le(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", Ul, [
        e("span", Ol, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: le(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Bl, [
        p.value ? (o(), s("div", Fl, [
          w(ce, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (g) => r("clear-choice"))
          }, {
            default: d(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Al, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Vl, [
            (o(!0), s(F, null, te(t.options, (g, h) => (o(), s("label", {
              key: g.package_id,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (i) => f(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (i) => f(h)
              }, null, 40, jl),
              e("div", Gl, [
                e("div", ql, [
                  e("span", Hl, a(g.package_id), 1),
                  w(Yt, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                g.title && g.title !== g.package_id ? (o(), s("div", Kl, a(g.title), 1)) : c("", !0),
                e("div", Yl, [
                  g.is_installed ? (o(), s("span", Jl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Wl))), 128))
          ]),
          e("div", Ql, [
            w(ce, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (g) => r("search"))
            }, {
              default: d(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (g) => r("manual-entry"))
            }, {
              default: d(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (g) => r("mark-optional"))
            }, {
              default: d(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Xl, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Zl, [
            w(ce, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (g) => r("search"))
            }, {
              default: d(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (g) => r("manual-entry"))
            }, {
              default: d(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (g) => r("mark-optional"))
            }, {
              default: d(() => [...l[15] || (l[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ti = /* @__PURE__ */ J(ei, [["__scopeId", "data-v-e02629e7"]]), oi = { class: "item-navigator" }, si = { class: "nav-item-info" }, ni = ["title"], ai = { class: "nav-controls" }, li = { class: "nav-arrows" }, ii = ["disabled"], ri = ["disabled"], di = { class: "nav-position" }, ci = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, p) => (o(), s("div", oi, [
      e("div", si, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, ni)
      ]),
      e("div", ai, [
        e("div", li, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, ii),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, ri)
        ]),
        e("span", di, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), mo = /* @__PURE__ */ J(ci, [["__scopeId", "data-v-74af7920"]]), ui = ["type", "value", "placeholder", "disabled"], mi = {
  key: 0,
  class: "base-input-error"
}, vi = /* @__PURE__ */ Y({
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
      class: le(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: le(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ui),
      t.error ? (o(), s("span", mi, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ J(vi, [["__scopeId", "data-v-9ba02cdc"]]), fi = { class: "node-resolution-step" }, gi = {
  key: 0,
  class: "auto-resolved-section"
}, hi = { class: "section-header" }, pi = { class: "stat-badge" }, yi = { class: "resolved-packages-list" }, wi = { class: "package-info" }, ki = { class: "package-id" }, bi = { class: "node-count" }, _i = { class: "package-actions" }, $i = {
  key: 0,
  class: "status-badge install"
}, Ci = {
  key: 1,
  class: "status-badge skip"
}, xi = ["onClick"], Si = {
  key: 1,
  class: "section-divider"
}, Ii = { class: "step-header" }, Ei = { class: "stat-badge" }, Mi = {
  key: 1,
  class: "step-body"
}, Ri = {
  key: 3,
  class: "empty-state"
}, Ti = { class: "node-search-modal" }, zi = { class: "node-modal-body" }, Li = {
  key: 0,
  class: "node-search-results"
}, Di = ["onClick"], Ni = { class: "node-result-header" }, Pi = { class: "node-result-package-id" }, Ui = {
  key: 0,
  class: "node-result-description"
}, Oi = {
  key: 1,
  class: "node-no-results"
}, Bi = {
  key: 2,
  class: "node-searching"
}, Fi = { class: "node-manual-entry-modal" }, Ai = { class: "node-modal-body" }, Vi = { class: "node-modal-actions" }, Wi = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(0), v = $(!1), f = $(!1), m = $(""), l = $(""), g = $([]), h = $(!1), i = D(() => n.nodes[p.value]), S = D(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), b = D(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function T(re) {
      return n.skippedPackages.has(re);
    }
    function k(re) {
      r("package-skip", re);
    }
    const x = D(() => {
      var Q;
      if (!i.value) return "not-found";
      const re = n.nodeChoices.get(i.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Q = i.value.options) != null && Q.length ? "ambiguous" : "not-found";
    }), C = D(() => {
      var Q;
      if (!i.value) return;
      const re = n.nodeChoices.get(i.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Q = i.value.options) != null && Q.length ? `${i.value.options.length} matches` : "Not Found";
    });
    function B(re) {
      re >= 0 && re < n.nodes.length && (p.value = re);
    }
    function E() {
      i.value && r("mark-optional", i.value.node_type);
    }
    function R() {
      i.value && r("skip", i.value.node_type);
    }
    function G(re) {
      i.value && r("option-selected", i.value.node_type, re);
    }
    function W() {
      i.value && r("clear-choice", i.value.node_type);
    }
    function X() {
      i.value && (m.value = i.value.node_type, v.value = !0);
    }
    function V() {
      l.value = "", f.value = !0;
    }
    function L() {
      v.value = !1, m.value = "", g.value = [];
    }
    function M() {
      f.value = !1, l.value = "";
    }
    function P() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function N(re) {
      i.value && (r("manual-entry", i.value.node_type, re.package_id), L());
    }
    function q() {
      !i.value || !l.value.trim() || (r("manual-entry", i.value.node_type, l.value.trim()), M());
    }
    return (re, Q) => {
      var se, U;
      return o(), s("div", fi, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", gi, [
          e("div", hi, [
            Q[4] || (Q[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", pi, a(b.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", yi, [
            (o(!0), s(F, null, te(t.autoResolvedPackages, (_) => (o(), s("div", {
              key: _.package_id,
              class: "resolved-package-item"
            }, [
              e("div", wi, [
                e("code", ki, a(_.package_id), 1),
                e("span", bi, a(_.node_types_count) + " node type" + a(_.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", _i, [
                T(_.package_id) ? (o(), s("span", Ci, " SKIPPED ")) : (o(), s("span", $i, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ie) => k(_.package_id)
                }, a(T(_.package_id) ? "Include" : "Skip"), 9, xi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", Si)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(F, { key: 2 }, [
          e("div", Ii, [
            Q[5] || (Q[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ei, a(S.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          i.value ? (o(), I(mo, {
            key: 0,
            "item-name": i.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: Q[0] || (Q[0] = (_) => B(p.value - 1)),
            onNext: Q[1] || (Q[1] = (_) => B(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          i.value ? (o(), s("div", Mi, [
            w(ti, {
              "node-type": i.value.node_type,
              "has-multiple-options": !!((se = i.value.options) != null && se.length),
              options: i.value.options,
              choice: (U = t.nodeChoices) == null ? void 0 : U.get(i.value.node_type),
              status: x.value,
              "status-label": C.value,
              onMarkOptional: E,
              onSkip: R,
              onManualEntry: V,
              onSearch: X,
              onOptionSelected: G,
              onClearChoice: W
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", Ri, [...Q[6] || (Q[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), I(Me, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(L, ["self"])
          }, [
            e("div", Ti, [
              e("div", { class: "node-modal-header" }, [
                Q[7] || (Q[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", zi, [
                w(Ke, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (_) => m.value = _),
                  placeholder: "Search by node type, package name...",
                  onInput: P
                }, null, 8, ["modelValue"]),
                g.value.length > 0 ? (o(), s("div", Li, [
                  (o(!0), s(F, null, te(g.value, (_) => (o(), s("div", {
                    key: _.package_id,
                    class: "node-search-result-item",
                    onClick: (ie) => N(_)
                  }, [
                    e("div", Ni, [
                      e("code", Pi, a(_.package_id), 1),
                      _.match_confidence ? (o(), I(Yt, {
                        key: 0,
                        confidence: _.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    _.description ? (o(), s("div", Ui, a(_.description), 1)) : c("", !0)
                  ], 8, Di))), 128))
                ])) : m.value && !h.value ? (o(), s("div", Oi, ' No packages found matching "' + a(m.value) + '" ', 1)) : c("", !0),
                h.value ? (o(), s("div", Bi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), I(Me, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(M, ["self"])
          }, [
            e("div", Fi, [
              e("div", { class: "node-modal-header" }, [
                Q[8] || (Q[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Ai, [
                w(Ke, {
                  modelValue: l.value,
                  "onUpdate:modelValue": Q[3] || (Q[3] = (_) => l.value = _),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Vi, [
                  w(ce, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: d(() => [...Q[9] || (Q[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ce, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: q
                  }, {
                    default: d(() => [...Q[10] || (Q[10] = [
                      y(" Add Package ", -1)
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
}), ji = /* @__PURE__ */ J(Wi, [["__scopeId", "data-v-6474069a"]]), Gi = { class: "node-info" }, qi = { class: "node-info-text" }, Hi = { class: "item-body" }, Ki = {
  key: 0,
  class: "resolved-state"
}, Yi = {
  key: 1,
  class: "multiple-options"
}, Ji = { class: "options-list" }, Qi = ["onClick"], Xi = ["name", "value", "checked", "onChange"], Zi = { class: "option-content" }, er = { class: "option-header" }, tr = { class: "option-filename" }, or = { class: "option-meta" }, sr = { class: "option-size" }, nr = { class: "option-category" }, ar = { class: "option-path" }, lr = { class: "action-buttons" }, ir = {
  key: 2,
  class: "unresolved"
}, rr = { class: "action-buttons" }, dr = /* @__PURE__ */ Y({
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
    const v = D(() => {
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
    function f(l) {
      r("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const g = l / (1024 * 1024 * 1024);
      return g >= 1 ? `${g.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, g) => (o(), s("div", {
      class: le(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Gi, [
        e("span", qi, [
          g[7] || (g[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: le(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Hi, [
        p.value ? (o(), s("div", Ki, [
          w(ce, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (h) => r("clear-choice"))
          }, {
            default: d(() => [...g[8] || (g[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Yi, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Ji, [
            (o(!0), s(F, null, te(t.options, (h, i) => (o(), s("label", {
              key: h.model.hash,
              class: le(["option-card", { selected: t.selectedOptionIndex === i }]),
              onClick: (S) => f(i)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: i,
                checked: t.selectedOptionIndex === i,
                onChange: (S) => f(i)
              }, null, 40, Xi),
              e("div", Zi, [
                e("div", er, [
                  e("span", tr, a(h.model.filename), 1),
                  w(Yt, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", or, [
                  e("span", sr, a(m(h.model.size)), 1),
                  e("span", nr, a(h.model.category), 1)
                ]),
                e("div", ar, a(h.model.relative_path), 1)
              ])
            ], 10, Qi))), 128))
          ]),
          e("div", lr, [
            w(ce, {
              variant: "ghost",
              size: "sm",
              onClick: g[1] || (g[1] = (h) => r("search"))
            }, {
              default: d(() => [...g[9] || (g[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "ghost",
              size: "sm",
              onClick: g[2] || (g[2] = (h) => r("download-url"))
            }, {
              default: d(() => [...g[10] || (g[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (h) => r("mark-optional"))
            }, {
              default: d(() => [...g[11] || (g[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", ir, [
          g[16] || (g[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", rr, [
            w(ce, {
              variant: "primary",
              size: "sm",
              onClick: g[4] || (g[4] = (h) => r("search"))
            }, {
              default: d(() => [...g[13] || (g[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (h) => r("download-url"))
            }, {
              default: d(() => [...g[14] || (g[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (h) => r("mark-optional"))
            }, {
              default: d(() => [...g[15] || (g[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), cr = /* @__PURE__ */ J(dr, [["__scopeId", "data-v-8a82fefa"]]), ur = { class: "model-resolution-step" }, mr = { class: "step-header" }, vr = { class: "step-info" }, fr = { class: "step-title" }, gr = { class: "step-description" }, hr = { class: "stat-badge" }, pr = {
  key: 1,
  class: "step-body"
}, yr = {
  key: 2,
  class: "empty-state"
}, wr = { class: "model-search-modal" }, kr = { class: "model-modal-body" }, br = {
  key: 0,
  class: "model-search-results"
}, _r = ["onClick"], $r = { class: "model-result-header" }, Cr = { class: "model-result-filename" }, xr = { class: "model-result-meta" }, Sr = { class: "model-result-category" }, Ir = { class: "model-result-size" }, Er = {
  key: 0,
  class: "model-result-path"
}, Mr = {
  key: 1,
  class: "model-no-results"
}, Rr = {
  key: 2,
  class: "model-searching"
}, Tr = { class: "model-download-url-modal" }, zr = { class: "model-modal-body" }, Lr = { class: "model-input-group" }, Dr = { class: "model-input-group" }, Nr = { class: "model-modal-actions" }, Pr = /* @__PURE__ */ Y({
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
      var _;
      return U && ((_ = n[U]) == null ? void 0 : _[0]) || null;
    }
    const p = t, v = u, f = $(0), m = $(!1), l = $(!1), g = $(""), h = $(""), i = $(""), S = $([]), b = $(!1), T = D(() => p.models[f.value]), k = D(() => p.models.some((U) => U.is_download_intent)), x = D(() => p.models.filter(
      (U) => p.modelChoices.has(U.filename) || U.is_download_intent
    ).length), C = D(() => {
      var _;
      if (!T.value) return "";
      const U = r((_ = T.value.reference) == null ? void 0 : _.node_type);
      return U ? `${U}/${T.value.filename}` : "";
    }), B = D(() => {
      var _;
      if (!T.value) return "not-found";
      const U = p.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (_ = T.value.options) != null && _.length ? "ambiguous" : "not-found";
    }), E = D(() => {
      var _, ie;
      if (!T.value) return;
      const U = p.modelChoices.get(T.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (_ = U.selected_model) != null && _.filename ? `→ ${U.selected_model.filename}` : "Selected";
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
    function R(U) {
      U >= 0 && U < p.models.length && (f.value = U);
    }
    function G() {
      T.value && v("mark-optional", T.value.filename);
    }
    function W() {
      T.value && v("skip", T.value.filename);
    }
    function X(U) {
      T.value && v("option-selected", T.value.filename, U);
    }
    function V() {
      T.value && v("clear-choice", T.value.filename);
    }
    function L() {
      T.value && (g.value = T.value.filename, m.value = !0);
    }
    function M() {
      T.value && (h.value = T.value.download_source || "", i.value = T.value.target_path || C.value, l.value = !0);
    }
    function P() {
      m.value = !1, g.value = "", S.value = [];
    }
    function N() {
      l.value = !1, h.value = "", i.value = "";
    }
    function q() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function re(U) {
      T.value && P();
    }
    function Q() {
      !T.value || !h.value.trim() || (v("download-url", T.value.filename, h.value.trim(), i.value.trim() || void 0), N());
    }
    function se(U) {
      if (!U) return "Unknown";
      const _ = U / (1024 * 1024 * 1024);
      return _ >= 1 ? `${_.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, _) => {
      var ie, ne, xe;
      return o(), s("div", ur, [
        e("div", mr, [
          e("div", vr, [
            e("h3", fr, a(k.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", gr, a(k.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", hr, a(x.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (o(), I(mo, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: _[0] || (_[0] = (be) => R(f.value - 1)),
          onNext: _[1] || (_[1] = (be) => R(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        T.value ? (o(), s("div", pr, [
          w(cr, {
            filename: T.value.filename,
            "node-type": ((ie = T.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((ne = T.value.options) != null && ne.length),
            options: T.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(T.value.filename),
            status: B.value,
            "status-label": E.value,
            onMarkOptional: G,
            onSkip: W,
            onDownloadUrl: M,
            onSearch: L,
            onOptionSelected: X,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", yr, [..._[5] || (_[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), I(Me, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(P, ["self"])
          }, [
            e("div", wr, [
              e("div", { class: "model-modal-header" }, [
                _[6] || (_[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", kr, [
                w(Ke, {
                  modelValue: g.value,
                  "onUpdate:modelValue": _[2] || (_[2] = (be) => g.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                S.value.length > 0 ? (o(), s("div", br, [
                  (o(!0), s(F, null, te(S.value, (be) => (o(), s("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => re()
                  }, [
                    e("div", $r, [
                      e("code", Cr, a(be.filename), 1)
                    ]),
                    e("div", xr, [
                      e("span", Sr, a(be.category), 1),
                      e("span", Ir, a(se(be.size)), 1)
                    ]),
                    be.relative_path ? (o(), s("div", Er, a(be.relative_path), 1)) : c("", !0)
                  ], 8, _r))), 128))
                ])) : g.value && !b.value ? (o(), s("div", Mr, ' No models found matching "' + a(g.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), s("div", Rr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), I(Me, { to: "body" }, [
          l.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(N, ["self"])
          }, [
            e("div", Tr, [
              e("div", { class: "model-modal-header" }, [
                _[7] || (_[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", zr, [
                e("div", Lr, [
                  _[8] || (_[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(Ke, {
                    modelValue: h.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (be) => h.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Dr, [
                  _[9] || (_[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(Ke, {
                    modelValue: i.value,
                    "onUpdate:modelValue": _[4] || (_[4] = (be) => i.value = be),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Nr, [
                  w(ce, {
                    variant: "secondary",
                    onClick: N
                  }, {
                    default: d(() => [..._[10] || (_[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ce, {
                    variant: "primary",
                    disabled: !h.value.trim() || !i.value.trim(),
                    onClick: Q
                  }, {
                    default: d(() => [..._[11] || (_[11] = [
                      y(" Queue Download ", -1)
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
}), Ur = /* @__PURE__ */ J(Pr, [["__scopeId", "data-v-c6acbada"]]), Or = { class: "applying-step" }, Br = {
  key: 0,
  class: "phase-content"
}, Fr = {
  key: 1,
  class: "phase-content"
}, Ar = { class: "phase-description" }, Vr = { class: "overall-progress" }, Wr = { class: "progress-bar" }, jr = { class: "progress-label" }, Gr = { class: "install-list" }, qr = { class: "install-icon" }, Hr = { key: 0 }, Kr = {
  key: 1,
  class: "spinner"
}, Yr = { key: 2 }, Jr = { key: 3 }, Qr = {
  key: 0,
  class: "install-error"
}, Xr = {
  key: 2,
  class: "phase-content"
}, Zr = { class: "phase-header" }, ed = { class: "phase-title" }, td = { class: "completion-summary" }, od = {
  key: 0,
  class: "summary-item success"
}, sd = { class: "summary-text" }, nd = {
  key: 1,
  class: "summary-item error"
}, ad = { class: "summary-text" }, ld = {
  key: 2,
  class: "failed-list"
}, id = { class: "failed-node-id" }, rd = { class: "failed-error" }, dd = {
  key: 4,
  class: "summary-item success"
}, cd = {
  key: 5,
  class: "restart-prompt"
}, ud = {
  key: 3,
  class: "phase-content error"
}, md = { class: "error-message" }, vd = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = D(() => {
      var g, h;
      const m = ((g = u.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((h = u.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), r = D(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), p = D(() => r.value.length > 0);
    function v(m, l) {
      var h, i;
      const g = (h = u.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.find((S) => S.node_id === m);
      return g ? g.success ? "complete" : "failed" : ((i = u.progress.nodeInstallProgress) == null ? void 0 : i.currentIndex) === l ? "installing" : "pending";
    }
    function f(m) {
      var l, g;
      return (g = (l = u.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((h) => h.node_id === m)) == null ? void 0 : g.error;
    }
    return (m, l) => {
      var g, h, i, S;
      return o(), s("div", Or, [
        t.progress.phase === "resolving" ? (o(), s("div", Br, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Fr, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Ar, " Installing " + a((((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) ?? 0) + 1) + " of " + a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Vr, [
            e("div", Wr, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", jr, a(((i = t.progress.nodeInstallProgress) == null ? void 0 : i.completedNodes.length) ?? 0) + " / " + a(((S = t.progress.nodeInstallProgress) == null ? void 0 : S.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Gr, [
            (o(!0), s(F, null, te(t.progress.nodesToInstall, (b, T) => (o(), s("div", {
              key: b,
              class: le(["install-item", v(b, T)])
            }, [
              e("span", qr, [
                v(b, T) === "pending" ? (o(), s("span", Hr, "○")) : v(b, T) === "installing" ? (o(), s("span", Kr, "◌")) : v(b, T) === "complete" ? (o(), s("span", Yr, "✓")) : v(b, T) === "failed" ? (o(), s("span", Jr, "✗")) : c("", !0)
              ]),
              e("code", null, a(b), 1),
              f(b) ? (o(), s("span", Qr, a(f(b)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Xr, [
          e("div", Zr, [
            e("span", {
              class: le(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", ed, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", td, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", od, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", sd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", nd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", ad, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", ld, [
              (o(!0), s(F, null, te(r.value, (b) => (o(), s("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", id, a(b.node_id), 1),
                e("span", rd, a(b.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (o(), s("div", dd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", cd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (b) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", ud, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", md, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), fd = /* @__PURE__ */ J(vd, [["__scopeId", "data-v-5efaae58"]]), gd = {
  key: 0,
  class: "loading-state"
}, hd = {
  key: 1,
  class: "wizard-content"
}, pd = {
  key: 0,
  class: "step-content"
}, yd = { class: "analysis-summary" }, wd = { class: "analysis-header" }, kd = { class: "summary-description" }, bd = { class: "stats-grid" }, _d = { class: "stat-card" }, $d = { class: "stat-items" }, Cd = {
  key: 0,
  class: "stat-item success"
}, xd = { class: "stat-count" }, Sd = {
  key: 1,
  class: "stat-item info"
}, Id = { class: "stat-count" }, Ed = {
  key: 2,
  class: "stat-item warning"
}, Md = { class: "stat-count" }, Rd = {
  key: 3,
  class: "stat-item error"
}, Td = { class: "stat-count" }, zd = { class: "stat-card" }, Ld = { class: "stat-items" }, Dd = { class: "stat-item success" }, Nd = { class: "stat-count" }, Pd = {
  key: 0,
  class: "stat-item info"
}, Ud = { class: "stat-count" }, Od = {
  key: 1,
  class: "stat-item warning"
}, Bd = { class: "stat-count" }, Fd = {
  key: 2,
  class: "stat-item error"
}, Ad = { class: "stat-count" }, Vd = {
  key: 0,
  class: "status-message warning"
}, Wd = { class: "status-text" }, jd = {
  key: 1,
  class: "status-message info"
}, Gd = { class: "status-text" }, qd = {
  key: 2,
  class: "status-message info"
}, Hd = { class: "status-text" }, Kd = {
  key: 3,
  class: "status-message success"
}, Yd = {
  key: 3,
  class: "step-content"
}, Jd = { class: "review-summary" }, Qd = { class: "review-stats" }, Xd = { class: "review-stat" }, Zd = { class: "stat-value" }, ec = { class: "review-stat" }, tc = { class: "stat-value" }, oc = { class: "review-stat" }, sc = { class: "stat-value" }, nc = { class: "review-stat" }, ac = { class: "stat-value" }, lc = {
  key: 0,
  class: "review-section"
}, ic = { class: "section-title" }, rc = { class: "review-items" }, dc = { class: "item-name" }, cc = { class: "item-choice" }, uc = {
  key: 0,
  class: "choice-badge install"
}, mc = {
  key: 1,
  class: "choice-badge skip"
}, vc = {
  key: 1,
  class: "review-section"
}, fc = { class: "section-title" }, gc = { class: "review-items" }, hc = { class: "item-name" }, pc = { class: "item-choice" }, yc = {
  key: 0,
  class: "choice-badge install"
}, wc = {
  key: 1,
  class: "choice-badge optional"
}, kc = {
  key: 2,
  class: "choice-badge skip"
}, bc = {
  key: 1,
  class: "choice-badge pending"
}, _c = {
  key: 2,
  class: "review-section"
}, $c = { class: "section-title" }, Cc = { class: "review-items" }, xc = { class: "item-name" }, Sc = { class: "item-choice" }, Ic = {
  key: 0,
  class: "choice-badge install"
}, Ec = {
  key: 1,
  class: "choice-badge download"
}, Mc = {
  key: 2,
  class: "choice-badge optional"
}, Rc = {
  key: 3,
  class: "choice-badge skip"
}, Tc = {
  key: 4,
  class: "choice-badge skip"
}, zc = {
  key: 1,
  class: "choice-badge download"
}, Lc = {
  key: 2,
  class: "choice-badge pending"
}, Dc = {
  key: 3,
  class: "no-choices"
}, Nc = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: p, applyResolution: v, installNodes: f, queueModelDownloads: m, progress: l, resetProgress: g } = xl(), { loadPendingDownloads: h } = Lt(), i = $(null), S = $(!1), b = $(!1), T = $(null), k = $("analysis"), x = $([]), C = $(/* @__PURE__ */ new Map()), B = $(/* @__PURE__ */ new Map()), E = $(/* @__PURE__ */ new Set()), R = D(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || L.value) && H.push({ id: "nodes", label: "Nodes" }), (X.value || V.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), k.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), G = D(() => i.value ? i.value.stats.needs_user_input : !1), W = D(() => i.value ? i.value.nodes.unresolved.length > 0 || i.value.nodes.ambiguous.length > 0 : !1), X = D(() => i.value ? i.value.models.unresolved.length > 0 || i.value.models.ambiguous.length > 0 : !1), V = D(() => i.value ? i.value.stats.download_intents > 0 : !1), L = D(() => i.value ? i.value.stats.nodes_needing_installation > 0 : !1), M = D(() => i.value ? i.value.nodes.resolved.length : 0), P = D(() => {
      if (!i.value) return [];
      const H = i.value.nodes.resolved.filter((Z) => !Z.is_installed), O = /* @__PURE__ */ new Set();
      return H.filter((Z) => O.has(Z.package.package_id) ? !1 : (O.add(Z.package.package_id), !0));
    }), N = D(() => {
      if (!i.value) return [];
      const H = i.value.nodes.resolved.filter((Z) => !Z.is_installed), O = /* @__PURE__ */ new Map();
      for (const Z of H) {
        const ge = O.get(Z.package.package_id);
        ge ? ge.node_types_count++ : O.set(Z.package.package_id, {
          package_id: Z.package.package_id,
          title: Z.package.title,
          node_types_count: 1
        });
      }
      return Array.from(O.values());
    }), q = D(() => P.value.filter((H) => !E.value.has(H.package.package_id))), re = D(() => i.value ? i.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), Q = D(() => {
      if (!i.value) return [];
      const H = i.value.nodes.unresolved.map((Z) => ({
        node_type: Z.reference.node_type,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), O = i.value.nodes.ambiguous.map((Z) => ({
        node_type: Z.reference.node_type,
        has_multiple_options: !0,
        options: Z.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...H, ...O];
    }), se = D(() => {
      if (!i.value) return [];
      const H = i.value.models.unresolved.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), O = i.value.models.ambiguous.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        has_multiple_options: !0,
        options: Z.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...H, ...O];
    }), U = D(() => {
      const H = se.value, O = re.value.map((Z) => ({
        filename: Z.filename,
        reference: Z.reference,
        is_download_intent: !0,
        resolved_model: Z.resolved_model,
        download_source: Z.download_source,
        target_path: Z.target_path,
        options: void 0
      }));
      return [...H, ...O];
    }), _ = D(() => {
      let H = q.value.length;
      for (const O of C.value.values())
        O.action === "install" && H++;
      for (const O of B.value.values())
        O.action === "select" && H++;
      return H;
    }), ie = D(() => {
      let H = 0;
      for (const O of B.value.values())
        O.action === "download" && H++;
      return H;
    }), ne = D(() => {
      let H = 0;
      for (const O of C.value.values())
        O.action === "optional" && H++;
      for (const O of B.value.values())
        O.action === "optional" && H++;
      return H;
    }), xe = D(() => {
      let H = E.value.size;
      for (const O of C.value.values())
        O.action === "skip" && H++;
      for (const O of B.value.values())
        O.action === "skip" && H++;
      for (const O of Q.value)
        C.value.has(O.node_type) || H++;
      for (const O of se.value)
        B.value.has(O.filename) || H++;
      return H;
    }), be = D(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, W.value) {
        const O = Q.value.length, Z = Q.value.filter(
          (ge) => C.value.has(ge.node_type)
        ).length;
        H.nodes = { resolved: Z, total: O };
      }
      if (X.value || V.value) {
        const O = U.value.length, Z = U.value.filter(
          (ge) => B.value.has(ge.filename) || ge.is_download_intent
        ).length;
        H.models = { resolved: Z, total: O };
      }
      if (H.review = { resolved: 1, total: 1 }, k.value === "applying") {
        const O = l.totalFiles || 1, Z = l.completedFiles.length;
        H.applying = { resolved: Z, total: O };
      }
      return H;
    });
    function Te(H) {
      k.value = H;
    }
    function Oe() {
      const H = R.value.findIndex((O) => O.id === k.value);
      H > 0 && (k.value = R.value[H - 1].id);
    }
    function ue() {
      const H = R.value.findIndex((O) => O.id === k.value);
      H < R.value.length - 1 && (k.value = R.value[H + 1].id);
    }
    async function Be() {
      S.value = !0, T.value = null;
      try {
        i.value = await p(n.workflowName);
      } catch (H) {
        T.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function ke() {
      x.value.includes("analysis") || x.value.push("analysis"), W.value || L.value ? k.value = "nodes" : X.value || V.value ? k.value = "models" : k.value = "review";
    }
    function ze(H) {
      C.value.set(H, { action: "optional" });
    }
    function Ve(H) {
      C.value.set(H, { action: "skip" });
    }
    function Je(H, O) {
      var ge;
      const Z = Q.value.find((A) => A.node_type === H);
      (ge = Z == null ? void 0 : Z.options) != null && ge[O] && C.value.set(H, {
        action: "install",
        package_id: Z.options[O].package_id
      });
    }
    function he(H, O) {
      C.value.set(H, {
        action: "install",
        package_id: O
      });
    }
    function We(H) {
      C.value.delete(H);
    }
    function je(H) {
      E.value.has(H) ? E.value.delete(H) : E.value.add(H);
    }
    function Ge(H) {
      B.value.set(H, { action: "optional" });
    }
    function dt(H) {
      B.value.set(H, { action: "skip" });
    }
    function ve(H, O) {
      var ge;
      const Z = se.value.find((A) => A.filename === H);
      (ge = Z == null ? void 0 : Z.options) != null && ge[O] && B.value.set(H, {
        action: "select",
        selected_model: Z.options[O].model
      });
    }
    function Le(H, O, Z) {
      B.value.set(H, {
        action: "download",
        url: O,
        target_path: Z
      });
    }
    function ct(H) {
      B.value.delete(H);
    }
    async function st() {
      var H;
      b.value = !0, T.value = null, g(), l.phase = "resolving", k.value = "applying";
      try {
        const O = await v(n.workflowName, C.value, B.value, E.value);
        O.models_to_download && O.models_to_download.length > 0 && m(n.workflowName, O.models_to_download);
        const Z = [
          ...O.nodes_to_install || [],
          ...q.value.map((A) => A.package.package_id)
        ];
        l.nodesToInstall = [...new Set(Z)], l.nodesToInstall.length > 0 && await f(n.workflowName), l.phase = "complete", await h();
        const ge = l.installError || ((H = l.nodeInstallProgress) == null ? void 0 : H.completedNodes.some((A) => !A.success));
        !l.needsRestart && !ge && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (O) {
        T.value = O instanceof Error ? O.message : "Failed to apply resolution", l.error = T.value, l.phase = "error";
      } finally {
        b.value = !1;
      }
    }
    function Se() {
      r("refresh"), r("restart"), r("close");
    }
    async function ut() {
      var O;
      const H = ((O = l.nodeInstallProgress) == null ? void 0 : O.completedNodes.filter((Z) => !Z.success).map((Z) => Z.node_id)) || [];
      if (H.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: H.length
        }, l.nodesToInstall = H, l.nodesInstalled = [], l.installError = void 0;
        try {
          await f(n.workflowName), l.phase = "complete";
        } catch (Z) {
          l.error = Z instanceof Error ? Z.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ie(Be), (H, O) => (o(), I(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: S.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (Z) => r("close"))
    }, {
      body: d(() => [
        S.value && !i.value ? (o(), s("div", gd, [...O[2] || (O[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : i.value ? (o(), s("div", hd, [
          w(Nl, {
            steps: R.value,
            "current-step": k.value,
            "completed-steps": x.value,
            "step-stats": be.value,
            onStepChange: Te
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          k.value === "analysis" ? (o(), s("div", pd, [
            e("div", yd, [
              e("div", wd, [
                O[3] || (O[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", kd, " Found " + a(i.value.stats.total_nodes) + " nodes and " + a(i.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", bd, [
                e("div", _d, [
                  O[12] || (O[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", $d, [
                    M.value > 0 ? (o(), s("div", Cd, [
                      O[4] || (O[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", xd, a(M.value), 1),
                      O[5] || (O[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    i.value.stats.packages_needing_installation > 0 ? (o(), s("div", Sd, [
                      O[6] || (O[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Id, a(i.value.stats.packages_needing_installation), 1),
                      O[7] || (O[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    i.value.nodes.ambiguous.length > 0 ? (o(), s("div", Ed, [
                      O[8] || (O[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Md, a(i.value.nodes.ambiguous.length), 1),
                      O[9] || (O[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    i.value.nodes.unresolved.length > 0 ? (o(), s("div", Rd, [
                      O[10] || (O[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Td, a(i.value.nodes.unresolved.length), 1),
                      O[11] || (O[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", zd, [
                  O[21] || (O[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ld, [
                    e("div", Dd, [
                      O[13] || (O[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Nd, a(i.value.models.resolved.length - i.value.stats.download_intents), 1),
                      O[14] || (O[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    i.value.stats.download_intents > 0 ? (o(), s("div", Pd, [
                      O[15] || (O[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ud, a(i.value.stats.download_intents), 1),
                      O[16] || (O[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    i.value.models.ambiguous.length > 0 ? (o(), s("div", Od, [
                      O[17] || (O[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bd, a(i.value.models.ambiguous.length), 1),
                      O[18] || (O[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    i.value.models.unresolved.length > 0 ? (o(), s("div", Fd, [
                      O[19] || (O[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ad, a(i.value.models.unresolved.length), 1),
                      O[20] || (O[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              G.value ? (o(), s("div", Vd, [
                O[22] || (O[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wd, a(Q.value.length + se.value.length) + " items need your input", 1)
              ])) : L.value ? (o(), s("div", jd, [
                O[23] || (O[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gd, a(i.value.stats.packages_needing_installation) + " package" + a(i.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(i.value.stats.nodes_needing_installation) + " node type" + a(i.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(V.value ? `, ${i.value.stats.download_intents} model${i.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : V.value ? (o(), s("div", qd, [
                O[24] || (O[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hd, a(i.value.stats.download_intents) + " model" + a(i.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Kd, [...O[25] || (O[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          k.value === "nodes" ? (o(), I(ji, {
            key: 1,
            nodes: Q.value,
            "node-choices": C.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": E.value,
            onMarkOptional: ze,
            onSkip: Ve,
            onOptionSelected: Je,
            onManualEntry: he,
            onClearChoice: We,
            onPackageSkip: je
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          k.value === "models" ? (o(), I(Ur, {
            key: 2,
            models: U.value,
            "model-choices": B.value,
            onMarkOptional: Ge,
            onSkip: dt,
            onOptionSelected: ve,
            onDownloadUrl: Le,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          k.value === "review" ? (o(), s("div", Yd, [
            e("div", Jd, [
              O[30] || (O[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Qd, [
                e("div", Xd, [
                  e("span", Zd, a(_.value), 1),
                  O[26] || (O[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", ec, [
                  e("span", tc, a(ie.value), 1),
                  O[27] || (O[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", oc, [
                  e("span", sc, a(ne.value), 1),
                  O[28] || (O[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", nc, [
                  e("span", ac, a(xe.value), 1),
                  O[29] || (O[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (o(), s("div", lc, [
                e("h4", ic, "Node Packages (" + a(N.value.length) + ")", 1),
                e("div", rc, [
                  (o(!0), s(F, null, te(N.value, (Z) => (o(), s("div", {
                    key: Z.package_id,
                    class: "review-item"
                  }, [
                    e("code", dc, a(Z.package_id), 1),
                    e("div", cc, [
                      E.value.has(Z.package_id) ? (o(), s("span", mc, "Skipped")) : (o(), s("span", uc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              Q.value.length > 0 ? (o(), s("div", vc, [
                e("h4", fc, "Node Choices (" + a(Q.value.length) + ")", 1),
                e("div", gc, [
                  (o(!0), s(F, null, te(Q.value, (Z) => {
                    var ge, A, ae, K;
                    return o(), s("div", {
                      key: Z.node_type,
                      class: "review-item"
                    }, [
                      e("code", hc, a(Z.node_type), 1),
                      e("div", pc, [
                        C.value.has(Z.node_type) ? (o(), s(F, { key: 0 }, [
                          ((ge = C.value.get(Z.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), s("span", yc, a((A = C.value.get(Z.node_type)) == null ? void 0 : A.package_id), 1)) : ((ae = C.value.get(Z.node_type)) == null ? void 0 : ae.action) === "optional" ? (o(), s("span", wc, " Optional ")) : ((K = C.value.get(Z.node_type)) == null ? void 0 : K.action) === "skip" ? (o(), s("span", kc, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", bc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (o(), s("div", _c, [
                e("h4", $c, "Models (" + a(U.value.length) + ")", 1),
                e("div", Cc, [
                  (o(!0), s(F, null, te(U.value, (Z) => {
                    var ge, A, ae, K, oe, fe, nt;
                    return o(), s("div", {
                      key: Z.filename,
                      class: "review-item"
                    }, [
                      e("code", xc, a(Z.filename), 1),
                      e("div", Sc, [
                        B.value.has(Z.filename) ? (o(), s(F, { key: 0 }, [
                          ((ge = B.value.get(Z.filename)) == null ? void 0 : ge.action) === "select" ? (o(), s("span", Ic, a((ae = (A = B.value.get(Z.filename)) == null ? void 0 : A.selected_model) == null ? void 0 : ae.filename), 1)) : ((K = B.value.get(Z.filename)) == null ? void 0 : K.action) === "download" ? (o(), s("span", Ec, " Download ")) : ((oe = B.value.get(Z.filename)) == null ? void 0 : oe.action) === "optional" ? (o(), s("span", Mc, " Optional ")) : ((fe = B.value.get(Z.filename)) == null ? void 0 : fe.action) === "skip" ? (o(), s("span", Rc, " Skip ")) : ((nt = B.value.get(Z.filename)) == null ? void 0 : nt.action) === "cancel_download" ? (o(), s("span", Tc, " Cancel Download ")) : c("", !0)
                        ], 64)) : Z.is_download_intent ? (o(), s("span", zc, " Pending Download ")) : (o(), s("span", Lc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              P.value.length === 0 && Q.value.length === 0 && U.value.length === 0 ? (o(), s("div", Dc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          k.value === "applying" ? (o(), I(fd, {
            key: 4,
            progress: ye(l),
            onRestart: Se,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: d(() => [
        k.value !== "analysis" && k.value !== "applying" ? (o(), I(ce, {
          key: 0,
          variant: "secondary",
          disabled: b.value,
          onClick: Oe
        }, {
          default: d(() => [...O[31] || (O[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        O[35] || (O[35] = e("div", { class: "footer-spacer" }, null, -1)),
        k.value !== "applying" || ye(l).phase === "complete" || ye(l).phase === "error" ? (o(), I(ce, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (Z) => r("close"))
        }, {
          default: d(() => [
            y(a(ye(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        k.value === "analysis" ? (o(), I(ce, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: ke
        }, {
          default: d(() => [...O[32] || (O[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        k.value === "nodes" ? (o(), I(ce, {
          key: 3,
          variant: "primary",
          onClick: ue
        }, {
          default: d(() => [
            y(a(X.value || V.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        k.value === "models" ? (o(), I(ce, {
          key: 4,
          variant: "primary",
          onClick: ue
        }, {
          default: d(() => [...O[33] || (O[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        k.value === "review" ? (o(), I(ce, {
          key: 5,
          variant: "primary",
          disabled: b.value,
          loading: b.value,
          onClick: st
        }, {
          default: d(() => [...O[34] || (O[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Pc = /* @__PURE__ */ J(Nc, [["__scopeId", "data-v-0d3f93e6"]]), Uc = { class: "search-input-wrapper" }, Oc = ["value", "placeholder"], Bc = /* @__PURE__ */ Y({
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
    let v;
    function f(l) {
      const g = l.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        r("update:modelValue", g);
      }, n.debounce)) : r("update:modelValue", g);
    }
    function m() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = p.value) == null || l.focus();
    }
    return Ie(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (l, g) => (o(), s("div", Uc, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: rt(m, ["escape"])
      }, null, 40, Oc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Fc = /* @__PURE__ */ J(Bc, [["__scopeId", "data-v-266f857a"]]), Ac = { class: "search-bar" }, Vc = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", Ac, [
      w(Fc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bt = /* @__PURE__ */ J(Vc, [["__scopeId", "data-v-3d51bbfd"]]), Wc = { class: "section-group" }, jc = {
  key: 0,
  class: "section-content"
}, Gc = /* @__PURE__ */ Y({
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
    function v() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (f, m) => (o(), s("section", Wc, [
      w(qe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: v
      }, {
        default: d(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (o(), s("div", jc, [
        pe(f.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ J(Gc, [["__scopeId", "data-v-c48e33ed"]]), qc = { class: "item-header" }, Hc = {
  key: 0,
  class: "item-icon"
}, Kc = { class: "item-info" }, Yc = {
  key: 0,
  class: "item-title"
}, Jc = {
  key: 1,
  class: "item-subtitle"
}, Qc = {
  key: 0,
  class: "item-details"
}, Xc = {
  key: 1,
  class: "item-actions"
}, Zc = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = D(() => n.status ? `status-${n.status}` : "");
    return (p, v) => (o(), s("div", {
      class: le(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: v[0] || (v[0] = (f) => t.clickable && p.$emit("click"))
    }, [
      e("div", qc, [
        p.$slots.icon ? (o(), s("span", Hc, [
          pe(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Kc, [
          p.$slots.title ? (o(), s("div", Yc, [
            pe(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (o(), s("div", Jc, [
            pe(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", Qc, [
        pe(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (o(), s("div", Xc, [
        pe(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ J(Zc, [["__scopeId", "data-v-cc435e0e"]]), eu = { class: "loading-state" }, tu = { class: "loading-message" }, ou = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", eu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", tu, a(t.message), 1)
    ]));
  }
}), lt = /* @__PURE__ */ J(ou, [["__scopeId", "data-v-ad8436c9"]]), su = { class: "error-state" }, nu = { class: "error-message" }, au = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", su, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", nu, a(t.message), 1),
      t.retry ? (o(), I(ee, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: d(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), it = /* @__PURE__ */ J(au, [["__scopeId", "data-v-5397be48"]]), lu = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: p } = Re();
    co();
    const v = $([]), f = $(!1), m = $(null), l = $(""), g = $(!0), h = $(!1), i = $(!1), S = $(!1), b = $(null), T = D(
      () => v.value.filter((se) => se.status === "broken")
    ), k = D(
      () => v.value.filter((se) => se.status === "new")
    ), x = D(
      () => v.value.filter((se) => se.status === "modified")
    ), C = D(
      () => v.value.filter((se) => se.status === "synced")
    ), B = D(() => {
      if (!l.value.trim()) return v.value;
      const se = l.value.toLowerCase();
      return v.value.filter((U) => U.name.toLowerCase().includes(se));
    }), E = D(
      () => T.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), R = D(
      () => k.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), G = D(
      () => x.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), W = D(
      () => C.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), X = D(
      () => h.value ? W.value : W.value.slice(0, 5)
    );
    async function V(se = !1) {
      f.value = !0, m.value = null;
      try {
        v.value = await p(se);
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    u({ loadWorkflows: V });
    function L(se) {
      b.value = se, i.value = !0;
    }
    function M(se) {
      b.value = se, S.value = !0;
    }
    function P() {
      alert("Bulk resolution not yet implemented");
    }
    function N() {
      r("refresh");
    }
    async function q() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(se) {
      const U = [];
      return se.missing_nodes > 0 && U.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && U.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.pending_downloads && se.pending_downloads > 0 && U.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function Q(se) {
      const U = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state;
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Ie(V), (se, U) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, { title: "WORKFLOWS" }, {
            actions: d(() => [
              T.value.length > 0 ? (o(), I(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: d(() => [...U[8] || (U[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(bt, {
            modelValue: l.value,
            "onUpdate:modelValue": U[0] || (U[0] = (_) => l.value = _),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          f.value ? (o(), I(lt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), I(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            E.value.length ? (o(), I(Ee, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(E.value, (_) => (o(), I(Ae, {
                  key: _.name,
                  status: "broken"
                }, {
                  icon: d(() => [...U[9] || (U[9] = [
                    y("⚠", -1)
                  ])]),
                  title: d(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(re(_)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => M(_.name)
                    }, {
                      default: d(() => [...U[10] || (U[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => L(_.name)
                    }, {
                      default: d(() => [...U[11] || (U[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (o(), I(Ee, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(R.value, (_) => (o(), I(Ae, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: d(() => [
                    y(a(_.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: d(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(Q(_)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => L(_.name)
                    }, {
                      default: d(() => [...U[12] || (U[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            G.value.length ? (o(), I(Ee, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(G.value, (_) => (o(), I(Ae, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: d(() => [...U[13] || (U[13] = [
                    y("⚡", -1)
                  ])]),
                  title: d(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(Q(_)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => L(_.name)
                    }, {
                      default: d(() => [...U[14] || (U[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            W.value.length ? (o(), I(Ee, {
              key: 3,
              title: "SYNCED",
              count: W.value.length,
              collapsible: !0,
              "initially-expanded": g.value,
              onToggle: U[2] || (U[2] = (_) => g.value = _)
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(X.value, (_) => (o(), I(Ae, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: d(() => [
                    y(a(_.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: d(() => [
                    y(a(_.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(Q(_)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => L(_.name)
                    }, {
                      default: d(() => [...U[15] || (U[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !h.value && W.value.length > 5 ? (o(), I(ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (_) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: d(() => [
                    y(" View all " + a(W.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            B.value.length ? c("", !0) : (o(), I(Ye, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      i.value && b.value ? (o(), I(_l, {
        key: 0,
        "workflow-name": b.value,
        onClose: U[3] || (U[3] = (_) => i.value = !1),
        onResolve: U[4] || (U[4] = (_) => M(b.value)),
        onRefresh: U[5] || (U[5] = (_) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      S.value && b.value ? (o(), I(Pc, {
        key: 1,
        "workflow-name": b.value,
        onClose: U[6] || (U[6] = (_) => S.value = !1),
        onInstall: N,
        onRefresh: U[7] || (U[7] = (_) => r("refresh")),
        onRestart: q
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), iu = /* @__PURE__ */ J(lu, [["__scopeId", "data-v-b7939cb4"]]), ru = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: le(["summary-bar", t.variant])
    }, [
      pe(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J(ru, [["__scopeId", "data-v-ccb7816e"]]), du = {
  key: 0,
  class: "model-details"
}, cu = { class: "detail-section" }, uu = { class: "detail-row" }, mu = { class: "detail-value mono" }, vu = { class: "detail-row" }, fu = { class: "detail-value mono" }, gu = { class: "detail-row" }, hu = { class: "detail-value mono" }, pu = { class: "detail-row" }, yu = { class: "detail-value" }, wu = { class: "detail-row" }, ku = { class: "detail-value" }, bu = { class: "detail-row" }, _u = { class: "detail-value" }, $u = { class: "detail-section" }, Cu = { class: "section-header" }, xu = {
  key: 0,
  class: "locations-list"
}, Su = { class: "location-path mono" }, Iu = {
  key: 0,
  class: "location-modified"
}, Eu = ["onClick"], Mu = {
  key: 1,
  class: "empty-state"
}, Ru = { class: "detail-section" }, Tu = { class: "section-header" }, zu = {
  key: 0,
  class: "sources-list"
}, Lu = { class: "source-type" }, Du = ["href"], Nu = ["disabled", "onClick"], Pu = {
  key: 1,
  class: "empty-state"
}, Uu = { class: "add-source-form" }, Ou = ["disabled"], Bu = {
  key: 2,
  class: "source-error"
}, Fu = {
  key: 3,
  class: "source-success"
}, Au = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: v, openFileLocation: f } = Re(), m = $(null), l = $(!0), g = $(null), h = $(""), i = $(!1), S = $(null), b = $(null), T = $(null), k = $(null);
    let x = null;
    function C(V, L = "success", M = 2e3) {
      x && clearTimeout(x), k.value = { message: V, type: L }, x = setTimeout(() => {
        k.value = null;
      }, M);
    }
    function B(V) {
      if (!V) return "Unknown";
      const L = 1024 * 1024 * 1024, M = 1024 * 1024;
      return V >= L ? `${(V / L).toFixed(1)} GB` : V >= M ? `${(V / M).toFixed(0)} MB` : `${(V / 1024).toFixed(0)} KB`;
    }
    function E(V) {
      navigator.clipboard.writeText(V), C("Copied to clipboard!");
    }
    async function R(V) {
      try {
        await f(V), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!h.value.trim() || !m.value)) {
        i.value = !0, b.value = null, T.value = null;
        try {
          await p(m.value.hash, h.value.trim()), T.value = "Source added successfully!", h.value = "", await X();
        } catch (V) {
          b.value = V instanceof Error ? V.message : "Failed to add source";
        } finally {
          i.value = !1;
        }
      }
    }
    async function W(V) {
      if (m.value) {
        S.value = V, b.value = null, T.value = null;
        try {
          await v(m.value.hash, V), C("Source removed"), await X();
        } catch (L) {
          b.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          S.value = null;
        }
      }
    }
    async function X() {
      l.value = !0, g.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ie(X), (V, L) => {
      var M;
      return o(), s(F, null, [
        w(tt, {
          title: `Model Details: ${((M = m.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: g.value,
          onClose: L[5] || (L[5] = (P) => V.$emit("close"))
        }, {
          body: d(() => {
            var P, N, q, re;
            return [
              m.value ? (o(), s("div", du, [
                e("section", cu, [
                  e("div", uu, [
                    L[6] || (L[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", mu, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (Q) => E(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", vu, [
                    L[7] || (L[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", fu, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (Q) => E(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", gu, [
                    L[8] || (L[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", hu, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (Q) => E(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", pu, [
                    L[9] || (L[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", yu, a(B(m.value.size)), 1)
                  ]),
                  e("div", wu, [
                    L[10] || (L[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", ku, a(m.value.category), 1)
                  ]),
                  e("div", bu, [
                    L[11] || (L[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", _u, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", $u, [
                  e("h4", Cu, "Locations (" + a(((P = m.value.locations) == null ? void 0 : P.length) || 0) + ")", 1),
                  (N = m.value.locations) != null && N.length ? (o(), s("div", xu, [
                    (o(!0), s(F, null, te(m.value.locations, (Q, se) => (o(), s("div", {
                      key: se,
                      class: "location-item"
                    }, [
                      e("span", Su, a(Q.path), 1),
                      Q.modified ? (o(), s("span", Iu, "Modified: " + a(Q.modified), 1)) : c("", !0),
                      Q.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => R(Q.path)
                      }, " Open File Location ", 8, Eu)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Mu, "No locations found"))
                ]),
                e("section", Ru, [
                  e("h4", Tu, "Download Sources (" + a(((q = m.value.sources) == null ? void 0 : q.length) || 0) + ")", 1),
                  (re = m.value.sources) != null && re.length ? (o(), s("div", zu, [
                    (o(!0), s(F, null, te(m.value.sources, (Q, se) => (o(), s("div", {
                      key: se,
                      class: "source-item"
                    }, [
                      e("span", Lu, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, Du),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: S.value === Q.url,
                        onClick: (U) => W(Q.url)
                      }, a(S.value === Q.url ? "..." : "×"), 9, Nu)
                    ]))), 128))
                  ])) : (o(), s("div", Pu, " No download sources configured ")),
                  e("div", Uu, [
                    Ze(e("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (Q) => h.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ao, h.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !h.value.trim() || i.value,
                      onClick: G
                    }, a(i.value ? "Adding..." : "Add Source"), 9, Ou)
                  ]),
                  b.value ? (o(), s("p", Bu, a(b.value), 1)) : c("", !0),
                  T.value ? (o(), s("p", Fu, a(T.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: d(() => [
            e("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (P) => V.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), I(Me, { to: "body" }, [
          k.value ? (o(), s("div", {
            key: 0,
            class: le(["toast", k.value.type])
          }, a(k.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), vo = /* @__PURE__ */ J(Au, [["__scopeId", "data-v-f15cbb56"]]), Vu = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: p } = Re(), v = $([]), f = $([]), m = $("production"), l = $(!1), g = $(null), h = $(""), i = $(!1), S = $(null);
    function b() {
      i.value = !1, n("navigate", "model-index");
    }
    const T = D(
      () => v.value.reduce((X, V) => X + (V.size || 0), 0)
    ), k = D(() => {
      if (!h.value.trim()) return v.value;
      const X = h.value.toLowerCase();
      return v.value.filter((V) => V.filename.toLowerCase().includes(X));
    }), x = D(() => {
      if (!h.value.trim()) return f.value;
      const X = h.value.toLowerCase();
      return f.value.filter((V) => V.filename.toLowerCase().includes(X));
    }), C = D(() => {
      const X = {};
      for (const L of k.value) {
        const M = L.type || "other";
        X[M] || (X[M] = []), X[M].push(L);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(X).sort(([L], [M]) => {
        const P = V.indexOf(L), N = V.indexOf(M);
        return P >= 0 && N >= 0 ? P - N : P >= 0 ? -1 : N >= 0 ? 1 : L.localeCompare(M);
      }).map(([L, M]) => ({ type: L, models: M }));
    });
    function B(X) {
      if (!X) return "Unknown";
      const V = X / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function E(X) {
      S.value = X.hash || X.filename;
    }
    function R(X) {
      n("navigate", "model-index");
    }
    function G(X) {
      alert(`Download functionality not yet implemented for ${X}`);
    }
    async function W() {
      l.value = !0, g.value = null;
      try {
        const X = await r();
        v.value = X, f.value = [];
        const V = await p();
        m.value = V.environment || "production";
      } catch (X) {
        g.value = X instanceof Error ? X.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ie(W), (X, V) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (L) => i.value = !0)
          })
        ]),
        search: d(() => [
          w(bt, {
            modelValue: h.value,
            "onUpdate:modelValue": V[1] || (V[1] = (L) => h.value = L),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (o(), I(lt, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (o(), I(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            v.value.length ? (o(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(v.value.length) + " models • " + a(B(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(F, null, te(C.value, (L) => (o(), I(Ee, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(L.models, (M) => (o(), I(Ae, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...V[4] || (V[4] = [
                    y("📦", -1)
                  ])]),
                  title: d(() => [
                    y(a(M.filename), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(B(M.size)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Ce, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => E(M)
                    }, {
                      default: d(() => [...V[5] || (V[5] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? (o(), I(Ee, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(x.value, (L) => (o(), I(Ae, {
                  key: L.filename,
                  status: "broken"
                }, {
                  icon: d(() => [...V[6] || (V[6] = [
                    y("⚠", -1)
                  ])]),
                  title: d(() => [
                    y(a(L.filename), 1)
                  ]),
                  subtitle: d(() => [...V[7] || (V[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: d(() => {
                    var M;
                    return [
                      w(Ce, {
                        label: "Required by:",
                        value: ((M = L.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => G(L.filename)
                    }, {
                      default: d(() => [...V[8] || (V[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => R(L.filename)
                    }, {
                      default: d(() => [...V[9] || (V[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !k.value.length && !x.value.length ? (o(), I(Ye, {
              key: 2,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(ot, {
        show: i.value,
        title: "About Environment Models",
        onClose: V[2] || (V[2] = (L) => i.value = !1)
      }, {
        content: d(() => [
          e("p", null, [
            V[10] || (V[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            V[11] || (V[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: b
          }, {
            default: d(() => [...V[12] || (V[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S.value ? (o(), I(vo, {
        key: 0,
        identifier: S.value,
        onClose: V[3] || (V[3] = (L) => S.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Wu = /* @__PURE__ */ J(Vu, [["__scopeId", "data-v-cb4f12b3"]]), ju = {
  key: 0,
  class: "indexing-progress"
}, Gu = { class: "progress-info" }, qu = { class: "progress-label" }, Hu = { class: "progress-count" }, Ku = { class: "progress-bar" }, Yu = { class: "modal-content" }, Ju = { class: "modal-header" }, Qu = { class: "modal-body" }, Xu = { class: "input-group" }, Zu = { class: "current-path" }, em = { class: "input-group" }, tm = { class: "modal-footer" }, om = { class: "modal-content" }, sm = { class: "modal-header" }, nm = { class: "modal-body" }, am = { class: "input-group" }, lm = { class: "input-group" }, im = { class: "modal-footer" }, rm = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: v
    } = Re(), { addToQueue: f } = Lt(), m = u, l = $([]), g = $(!1), h = $(!1), i = $(null), S = $(""), b = $(!1), T = $(null), k = $(!1), x = $(null), C = $(""), B = $(!1), E = $(!1), R = $(""), G = $(""), W = $(null), X = D(
      () => l.value.reduce((U, _) => U + (_.size || 0), 0)
    ), V = D(() => {
      if (!S.value.trim()) return l.value;
      const U = S.value.toLowerCase();
      return l.value.filter((_) => {
        const ie = _, ne = _.sha256 || ie.sha256_hash || "";
        return _.filename.toLowerCase().includes(U) || ne.toLowerCase().includes(U);
      });
    }), L = D(() => {
      const U = {};
      for (const ie of V.value) {
        const ne = ie.type || "other";
        U[ne] || (U[ne] = []), U[ne].push(ie);
      }
      const _ = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([ie], [ne]) => {
        const xe = _.indexOf(ie), be = _.indexOf(ne);
        return xe >= 0 && be >= 0 ? xe - be : xe >= 0 ? -1 : be >= 0 ? 1 : ie.localeCompare(ne);
      }).map(([ie, ne]) => ({ type: ie, models: ne }));
    });
    function M(U) {
      if (!U) return "Unknown";
      const _ = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return U >= _ ? `${(U / _).toFixed(1)} GB` : U >= ie ? `${(U / ie).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function P(U) {
      T.value = U.hash || U.filename;
    }
    async function N() {
      h.value = !0, i.value = null;
      try {
        const U = await r();
        await Q(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        i.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        h.value = !1;
      }
    }
    async function q() {
      if (C.value.trim()) {
        B.value = !0, i.value = null;
        try {
          const U = await v(C.value.trim());
          x.value = U.path, k.value = !1, C.value = "", await Q(), console.log(`Directory changed: ${U.models_indexed} models indexed`), m("refresh");
        } catch (U) {
          i.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function re() {
      if (!R.value.trim() || !G.value.trim()) return;
      const U = G.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: U,
        url: R.value.trim(),
        targetPath: G.value.trim()
      }]), R.value = "", G.value = "", E.value = !1;
    }
    async function Q() {
      g.value = !0, i.value = null;
      try {
        l.value = await n();
      } catch (U) {
        i.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        g.value = !1;
      }
    }
    async function se() {
      try {
        const U = await p();
        x.value = U.path;
      } catch {
      }
    }
    return Ie(() => {
      Q(), se();
    }), (U, _) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: _[2] || (_[2] = (ie) => b.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                disabled: h.value,
                onClick: N
              }, {
                default: d(() => [
                  y(a(h.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: _[0] || (_[0] = (ie) => k.value = !0)
              }, {
                default: d(() => [..._[15] || (_[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: _[1] || (_[1] = (ie) => E.value = !0)
              }, {
                default: d(() => [..._[16] || (_[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  y(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          W.value ? (o(), s("div", ju, [
            e("div", Gu, [
              e("span", qu, a(W.value.message), 1),
              e("span", Hu, a(W.value.current) + "/" + a(W.value.total), 1)
            ]),
            e("div", Ku, [
              e("div", {
                class: "progress-fill",
                style: et({ width: `${W.value.current / W.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          w(bt, {
            modelValue: S.value,
            "onUpdate:modelValue": _[3] || (_[3] = (ie) => S.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          g.value || W.value ? (o(), I(lt, {
            key: 0,
            message: W.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : i.value ? (o(), I(it, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            l.value.length ? (o(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(M(X.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(F, null, te(L.value, (ie) => (o(), I(Ee, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(ie.models, (ne) => (o(), I(Ae, {
                  key: ne.sha256 || ne.filename,
                  status: "synced"
                }, {
                  icon: d(() => [..._[17] || (_[17] = [
                    y("📦", -1)
                  ])]),
                  title: d(() => [
                    y(a(ne.filename), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(M(ne.size)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Hash:",
                      value: ne.hash ? ne.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (xe) => P(ne)
                    }, {
                      default: d(() => [..._[18] || (_[18] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            V.value.length ? c("", !0) : (o(), I(Ye, {
              key: 1,
              icon: "📭",
              message: S.value ? `No models match '${S.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(ot, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: _[4] || (_[4] = (ie) => b.value = !1)
      }, {
        content: d(() => [..._[19] || (_[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (o(), I(vo, {
        key: 0,
        identifier: T.value,
        onClose: _[5] || (_[5] = (ie) => T.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), I(Me, { to: "body" }, [
        k.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[9] || (_[9] = $e((ie) => k.value = !1, ["self"]))
        }, [
          e("div", Yu, [
            e("div", Ju, [
              _[20] || (_[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[6] || (_[6] = (ie) => k.value = !1)
              }, "✕")
            ]),
            e("div", Qu, [
              e("div", Xu, [
                _[21] || (_[21] = e("label", null, "Current Directory", -1)),
                e("code", Zu, a(x.value || "Not set"), 1)
              ]),
              e("div", em, [
                _[22] || (_[22] = e("label", null, "New Directory Path", -1)),
                w(Ke, {
                  modelValue: C.value,
                  "onUpdate:modelValue": _[7] || (_[7] = (ie) => C.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              _[23] || (_[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", tm, [
              w(ce, {
                variant: "secondary",
                onClick: _[8] || (_[8] = (ie) => k.value = !1)
              }, {
                default: d(() => [..._[24] || (_[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ce, {
                variant: "primary",
                disabled: !C.value.trim() || B.value,
                loading: B.value,
                onClick: q
              }, {
                default: d(() => [
                  y(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), I(Me, { to: "body" }, [
        E.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[14] || (_[14] = $e((ie) => E.value = !1, ["self"]))
        }, [
          e("div", om, [
            e("div", sm, [
              _[25] || (_[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[10] || (_[10] = (ie) => E.value = !1)
              }, "✕")
            ]),
            e("div", nm, [
              e("div", am, [
                _[26] || (_[26] = e("label", null, "Download URL", -1)),
                w(Ke, {
                  modelValue: R.value,
                  "onUpdate:modelValue": _[11] || (_[11] = (ie) => R.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", lm, [
                _[27] || (_[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(Ke, {
                  modelValue: G.value,
                  "onUpdate:modelValue": _[12] || (_[12] = (ie) => G.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              _[28] || (_[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", im, [
              w(ce, {
                variant: "secondary",
                onClick: _[13] || (_[13] = (ie) => E.value = !1)
              }, {
                default: d(() => [..._[29] || (_[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ce, {
                variant: "primary",
                disabled: !R.value.trim() || !G.value.trim(),
                onClick: re
              }, {
                default: d(() => [..._[30] || (_[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), dm = /* @__PURE__ */ J(rm, [["__scopeId", "data-v-73b78d84"]]), cm = { class: "node-details" }, um = { class: "status-row" }, mm = {
  key: 0,
  class: "detail-row"
}, vm = { class: "value" }, fm = { class: "detail-row" }, gm = { class: "value" }, hm = {
  key: 1,
  class: "detail-row"
}, pm = { class: "value mono" }, ym = {
  key: 2,
  class: "detail-row"
}, wm = ["href"], km = {
  key: 3,
  class: "detail-row"
}, bm = { class: "value mono small" }, _m = { class: "detail-row" }, $m = {
  key: 0,
  class: "value"
}, Cm = {
  key: 1,
  class: "workflow-list"
}, xm = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, l) => (o(), I(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (g) => r("close"))
    }, {
      body: d(() => [
        e("div", cm, [
          e("div", um, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", p.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (o(), s("div", mm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", vm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", fm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", gm, a(f.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", hm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pm, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", ym, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
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
            ], 8, wm)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", km, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", bm, a(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", _m, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", $m, " Not used in any workflows ")) : (o(), s("div", Cm, [
              (o(!0), s(F, null, te(t.node.used_in_workflows, (g) => (o(), s("span", {
                key: g,
                class: "workflow-tag"
              }, a(g), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: d(() => [
        w(ce, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (g) => r("close"))
        }, {
          default: d(() => [...l[11] || (l[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Sm = /* @__PURE__ */ J(xm, [["__scopeId", "data-v-b342f626"]]), Im = { key: 0 }, Em = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Mm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Rm = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: p, installNode: v, uninstallNode: f } = Re(), m = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = $(!1), g = $(null), h = $(""), i = $(!1), S = $(null), b = D(() => {
      if (!h.value.trim()) return m.value.nodes;
      const L = h.value.toLowerCase();
      return m.value.nodes.filter(
        (M) => {
          var P, N;
          return M.name.toLowerCase().includes(L) || ((P = M.description) == null ? void 0 : P.toLowerCase().includes(L)) || ((N = M.repository) == null ? void 0 : N.toLowerCase().includes(L));
        }
      );
    }), T = D(
      () => b.value.filter((L) => L.installed && L.tracked)
    ), k = D(
      () => b.value.filter((L) => !L.installed && L.tracked)
    ), x = D(
      () => b.value.filter((L) => L.installed && !L.tracked)
    );
    function C(L) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[L] || L;
    }
    function B(L) {
      return !L.used_in_workflows || L.used_in_workflows.length === 0 ? "Not used in any workflows" : L.used_in_workflows.length === 1 ? L.used_in_workflows[0] : `${L.used_in_workflows.length} workflows`;
    }
    function E(L) {
      S.value = L;
    }
    function R() {
      n("open-node-manager");
    }
    async function G(L) {
      if (confirm(`Track "${L}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const M = await p(L);
          M.status === "success" ? (alert(`Node "${L}" is now tracked as development!`), await V()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function W(L) {
      if (confirm(`Remove untracked node "${L}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const M = await f(L);
          M.status === "success" ? (alert(`Node "${L}" removed!`), await V()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function X(L) {
      if (confirm(`Install node "${L}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const M = await v(L);
          M.status === "success" ? (alert(`Node "${L}" installed successfully!`), await V()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function V() {
      l.value = !0, g.value = null;
      try {
        m.value = await r();
      } catch (L) {
        g.value = L instanceof Error ? L.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(V), (L, M) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (P) => i.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: d(() => [...M[5] || (M[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(bt, {
            modelValue: h.value,
            "onUpdate:modelValue": M[1] || (M[1] = (P) => h.value = P),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (o(), I(lt, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (o(), I(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            m.value.total_count ? (o(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(F, { key: 0 }, [
                  y(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(F, { key: 1 }, [
                  y(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            x.value.length ? (o(), I(Ee, {
              key: 1,
              title: "UNTRACKED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(x.value, (P) => (o(), I(Ae, {
                  key: P.name,
                  status: "warning"
                }, {
                  icon: d(() => [...M[6] || (M[6] = [
                    y("?", -1)
                  ])]),
                  title: d(() => [
                    y(a(P.name), 1)
                  ]),
                  subtitle: d(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: B(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => E(P)
                    }, {
                      default: d(() => [...M[8] || (M[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => G(P.name)
                    }, {
                      default: d(() => [...M[9] || (M[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (N) => W(P.name)
                    }, {
                      default: d(() => [...M[10] || (M[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            T.value.length ? (o(), I(Ee, {
              key: 2,
              title: "INSTALLED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(T.value, (P) => (o(), I(Ae, {
                  key: P.name,
                  status: "synced"
                }, {
                  icon: d(() => [
                    y(a(P.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: d(() => [
                    y(a(P.name), 1)
                  ]),
                  subtitle: d(() => [
                    P.version ? (o(), s("span", Im, a(P.source === "development" ? "" : "v") + a(P.version), 1)) : (o(), s("span", Em, "version unknown")),
                    e("span", Mm, " • " + a(C(P.source)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: B(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => E(P)
                    }, {
                      default: d(() => [...M[11] || (M[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: R
                    }, {
                      default: d(() => [...M[12] || (M[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            k.value.length ? (o(), I(Ee, {
              key: 3,
              title: "MISSING",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(k.value, (P) => (o(), I(Ae, {
                  key: P.name,
                  status: "missing"
                }, {
                  icon: d(() => [...M[13] || (M[13] = [
                    y("!", -1)
                  ])]),
                  title: d(() => [
                    y(a(P.name), 1)
                  ]),
                  subtitle: d(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: d(() => [
                    w(Ce, {
                      label: "Required by:",
                      value: B(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => E(P)
                    }, {
                      default: d(() => [...M[15] || (M[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => X(P.name)
                    }, {
                      default: d(() => [...M[16] || (M[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !T.value.length && !k.value.length && !x.value.length ? (o(), I(Ye, {
              key: 4,
              icon: "📭",
              message: h.value ? `No nodes match '${h.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(ot, {
        show: i.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (P) => i.value = !1)
      }, {
        content: d(() => [...M[17] || (M[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            y(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            y(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            y(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: M[2] || (M[2] = (P) => i.value = !1)
          }, {
            default: d(() => [...M[18] || (M[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S.value ? (o(), I(Sm, {
        key: 0,
        node: S.value,
        onClose: M[4] || (M[4] = (P) => S.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Tm = /* @__PURE__ */ J(Rm, [["__scopeId", "data-v-4ac1465a"]]);
function fo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const zm = { class: "remote-url-display" }, Lm = ["title"], Dm = ["title"], Nm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Um = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = D(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const v = u.url.slice(0, Math.floor(u.maxLength * 0.6)), f = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${v}...${f}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, f) => (o(), s("div", zm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Lm),
      e("button", {
        class: le(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Pm, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Nm, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Dm)
    ]));
  }
}), Om = /* @__PURE__ */ J(Um, [["__scopeId", "data-v-7768a58d"]]), Bm = { class: "remote-title" }, Fm = {
  key: 0,
  class: "default-badge"
}, Am = {
  key: 1,
  class: "sync-badge"
}, Vm = {
  key: 0,
  class: "ahead"
}, Wm = {
  key: 1,
  class: "behind"
}, jm = {
  key: 1,
  class: "synced"
}, Gm = ["href"], qm = {
  key: 1,
  class: "remote-url-text"
}, Hm = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = D(() => u.fetchingRemote === u.remote.name), r = D(() => u.remote.is_default), p = D(() => u.syncStatus && u.syncStatus.behind > 0), v = D(() => u.syncStatus && u.syncStatus.ahead > 0), f = D(() => u.remote.push_url !== u.remote.fetch_url), m = D(() => {
      const g = u.remote.fetch_url, h = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return h ? `https://${h[1]}/${h[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), l = D(() => u.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, h) => (o(), I(Ae, {
      status: r.value ? "synced" : void 0
    }, zt({
      icon: d(() => [
        y(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: d(() => [
        e("div", Bm, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (o(), s("span", Fm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", Am, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (o(), s(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (o(), s("span", Vm, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
              t.syncStatus.behind > 0 ? (o(), s("span", Wm, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
            ], 64)) : (o(), s("span", jm, "✓ synced"))
          ])) : c("", !0)
        ])
      ]),
      subtitle: d(() => [
        m.value ? (o(), s("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: h[0] || (h[0] = $e(() => {
          }, ["stop"]))
        }, a(l.value), 9, Gm)) : (o(), s("span", qm, a(l.value), 1))
      ]),
      actions: d(() => [
        w(ee, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: h[1] || (h[1] = (i) => g.$emit("fetch", t.remote.name))
        }, {
          default: d(() => [...h[6] || (h[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(ee, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[2] || (h[2] = (i) => g.$emit("pull", t.remote.name))
        }, {
          default: d(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(ee, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[3] || (h[3] = (i) => g.$emit("push", t.remote.name))
        }, {
          default: d(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(ee, {
          variant: "secondary",
          size: "xs",
          onClick: h[4] || (h[4] = (i) => g.$emit("edit", t.remote.name))
        }, {
          default: d(() => [...h[7] || (h[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? c("", !0) : (o(), I(ee, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: h[5] || (h[5] = (i) => g.$emit("remove", t.remote.name))
        }, {
          default: d(() => [...h[8] || (h[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      f.value ? {
        name: "details",
        fn: d(() => [
          t.remote.push_url !== t.remote.fetch_url ? (o(), I(Ce, {
            key: 0,
            label: "Push URL:"
          }, {
            default: d(() => [
              w(Om, {
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
}), Km = /* @__PURE__ */ J(Hm, [["__scopeId", "data-v-8310f3a8"]]), Ym = ["for"], Jm = {
  key: 0,
  class: "base-form-field-required"
}, Qm = { class: "base-form-field-input" }, Xm = {
  key: 1,
  class: "base-form-field-error"
}, Zm = {
  key: 2,
  class: "base-form-field-hint"
}, ev = /* @__PURE__ */ Y({
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
      class: le(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (o(), s("span", Jm, "*")) : c("", !0)
      ], 8, Ym)) : c("", !0),
      e("div", Qm, [
        pe(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Xm, a(t.error), 1)) : t.hint ? (o(), s("span", Zm, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ J(ev, [["__scopeId", "data-v-9a1cf296"]]), tv = { class: "remote-form" }, ov = { class: "form-header" }, sv = { class: "form-body" }, nv = {
  key: 0,
  class: "form-error"
}, av = { class: "form-actions" }, lv = /* @__PURE__ */ Y({
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
    }), v = $(!1), f = $(null);
    pt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = D(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        f.value = null, v.value = !0;
        try {
          r("submit", p.value);
        } catch (g) {
          f.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (g, h) => (o(), s("div", tv, [
      e("div", ov, [
        w(qe, null, {
          default: d(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", sv, [
        w(Vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: d(() => [
            w(Ke, {
              modelValue: p.value.name,
              "onUpdate:modelValue": h[0] || (h[0] = (i) => p.value.name = i),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(Vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: d(() => [
            w(Ke, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": h[1] || (h[1] = (i) => p.value.fetchUrl = i),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(Vt, { label: "Push URL (optional)" }, {
          default: d(() => [
            w(Ke, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": h[2] || (h[2] = (i) => p.value.pushUrl = i),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (o(), s("div", nv, a(f.value), 1)) : c("", !0)
      ]),
      e("div", av, [
        w(ee, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: l
        }, {
          default: d(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(ee, {
          variant: "ghost",
          size: "md",
          onClick: h[3] || (h[3] = (i) => g.$emit("cancel"))
        }, {
          default: d(() => [...h[4] || (h[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), iv = /* @__PURE__ */ J(lv, [["__scopeId", "data-v-56021b18"]]), rv = { class: "conflict-summary-box" }, dv = { class: "summary-header" }, cv = { class: "summary-text" }, uv = { key: 0 }, mv = {
  key: 1,
  class: "all-resolved"
}, vv = { class: "summary-progress" }, fv = { class: "progress-bar" }, gv = { class: "progress-text" }, hv = /* @__PURE__ */ Y({
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
    return (r, p) => (o(), s("div", rv, [
      e("div", dv, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", cv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (o(), s("p", uv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (o(), s("p", mv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", vv, [
        e("div", fv, [
          e("div", {
            class: "progress-fill",
            style: et({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", gv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), pv = /* @__PURE__ */ J(hv, [["__scopeId", "data-v-4e9e6cc9"]]), yv = { class: "modal-header" }, wv = { class: "modal-title" }, kv = { class: "modal-body" }, bv = {
  key: 0,
  class: "error-box"
}, _v = {
  key: 0,
  class: "error-hint"
}, $v = {
  key: 1,
  class: "loading-state"
}, Cv = { class: "commit-summary" }, xv = {
  key: 0,
  class: "changes-section"
}, Sv = {
  key: 0,
  class: "change-group",
  open: ""
}, Iv = { class: "change-count" }, Ev = { class: "change-list" }, Mv = {
  key: 0,
  class: "conflict-badge"
}, Rv = {
  key: 1,
  class: "change-group"
}, Tv = { class: "change-count" }, zv = { class: "change-list" }, Lv = {
  key: 2,
  class: "change-group"
}, Dv = { class: "change-count" }, Nv = { class: "change-list" }, Pv = {
  key: 2,
  class: "strategy-section"
}, Uv = { class: "radio-group" }, Ov = { class: "radio-option" }, Bv = { class: "radio-option" }, Fv = { class: "radio-option" }, Av = {
  key: 3,
  class: "up-to-date"
}, Vv = { class: "modal-actions" }, eo = "comfygit.pullModelStrategy", Wv = /* @__PURE__ */ Y({
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
    pt(p, (x) => {
      localStorage.setItem(eo, x);
    });
    const v = D(() => {
      var x;
      return ((x = n.error) == null ? void 0 : x.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = D(() => {
      if (!n.preview) return 0;
      const x = n.preview.changes.workflows;
      return x.added.length + x.modified.length + x.deleted.length;
    }), m = D(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = D(() => {
      var x;
      return f.value > 0 || m.value > 0 || (((x = n.preview) == null ? void 0 : x.changes.models.count) || 0) > 0;
    }), g = D(() => n.preview && fo(n.preview) ? n.preview : null), h = D(() => {
      var x;
      return ((x = g.value) == null ? void 0 : x.workflow_conflicts.length) ?? 0;
    }), i = D(() => {
      var x;
      return ((x = n.conflictResolutions) == null ? void 0 : x.size) ?? 0;
    }), S = D(
      () => h.value > 0 && i.value === h.value
    ), b = D(() => !(!n.preview || n.preview.has_uncommitted_changes || g.value && !S.value));
    function T(x) {
      if (!g.value) return !1;
      const C = x.replace(/\.json$/, "");
      return g.value.workflow_conflicts.some((B) => B.name === C);
    }
    function k(x) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: p.value, force: x, resolutions: C });
    }
    return (x, C) => {
      var B, E;
      return o(), I(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (R) => x.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", yv, [
              e("h3", wv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (R) => x.$emit("close"))
              }, "✕")
            ]),
            e("div", kv, [
              t.error ? (o(), s("div", bv, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (o(), s("p", _v, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : c("", !0)
                ])
              ])) : t.loading ? (o(), s("div", $v, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (o(), s(F, { key: 2 }, [
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
              ], 64)) : t.preview ? (o(), s(F, { key: 3 }, [
                e("div", Cv, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (o(), s("div", xv, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (o(), s("details", Sv, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Iv, a(f.value) + " changes", 1)
                    ]),
                    e("div", Ev, [
                      (o(!0), s(F, null, te(t.preview.changes.workflows.added, (R) => (o(), s("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (o(!0), s(F, null, te(t.preview.changes.workflows.modified, (R) => (o(), s("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(R) + " ", 1),
                        T(R) ? (o(), s("span", Mv, "CONFLICT")) : c("", !0)
                      ]))), 128)),
                      (o(!0), s(F, null, te(t.preview.changes.workflows.deleted, (R) => (o(), s("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : c("", !0),
                  m.value > 0 ? (o(), s("details", Rv, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Tv, a(m.value) + " to install", 1)
                    ]),
                    e("div", zv, [
                      (o(!0), s(F, null, te(t.preview.changes.nodes.to_install, (R) => (o(), s("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : c("", !0),
                  t.preview.changes.models.count > 0 ? (o(), s("details", Lv, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Dv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Nv, [
                      (o(!0), s(F, null, te(t.preview.changes.models.referenced, (R) => (o(), s("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : c("", !0)
                ])) : c("", !0),
                g.value ? (o(), I(pv, {
                  key: 1,
                  "conflict-count": h.value,
                  "resolved-count": i.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : c("", !0),
                t.preview.changes.models.count > 0 ? (o(), s("div", Pv, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Uv, [
                    e("label", Ov, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (R) => p.value = R),
                        value: "all"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Bv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (R) => p.value = R),
                        value: "required"
                      }, null, 512), [
                        [Bt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Fv, [
                      Ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (R) => p.value = R),
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
                t.preview.commits_behind === 0 ? (o(), s("div", Av, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ]),
            e("div", Vv, [
              w(ee, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (R) => x.$emit("close"))
              }, {
                default: d(() => [...C[29] || (C[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (o(), s(F, { key: 0 }, [
                w(ee, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (R) => k(!1))
                }, {
                  default: d(() => [...C[30] || (C[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(ee, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (R) => k(!0))
                }, {
                  default: d(() => [...C[31] || (C[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = t.preview) != null && E.has_uncommitted_changes ? (o(), I(ee, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (R) => k(!0))
              }, {
                default: d(() => [...C[32] || (C[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (o(), s(F, { key: 2 }, [
                g.value && !S.value ? (o(), I(ee, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (R) => r("openConflictResolution"))
                }, {
                  default: d(() => [
                    y(" Resolve Conflicts (" + a(i.value) + "/" + a(h.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), I(ee, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (R) => k(!1))
                }, {
                  default: d(() => [...C[33] || (C[33] = [
                    y(" Pull Changes ", -1)
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
}), jv = /* @__PURE__ */ J(Wv, [["__scopeId", "data-v-300c7b2f"]]), Gv = { class: "modal-header" }, qv = { class: "modal-title" }, Hv = { class: "modal-body" }, Kv = {
  key: 0,
  class: "loading-state"
}, Yv = {
  key: 1,
  class: "warning-box"
}, Jv = {
  key: 0,
  class: "commits-section"
}, Qv = { class: "commit-list" }, Xv = { class: "commit-hash" }, Zv = { class: "commit-message" }, ef = { class: "commit-date" }, tf = { class: "force-option" }, of = { class: "checkbox-option" }, sf = { class: "commit-summary" }, nf = {
  key: 0,
  class: "commits-section"
}, af = { class: "commit-list" }, lf = { class: "commit-hash" }, rf = { class: "commit-message" }, df = { class: "commit-date" }, cf = {
  key: 1,
  class: "up-to-date"
}, uf = { class: "modal-actions" }, mf = /* @__PURE__ */ Y({
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
    function p(v) {
      n("push", { force: v });
    }
    return (v, f) => {
      var m, l, g;
      return o(), I(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (h) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Gv, [
              e("h3", qv, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (h) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", Hv, [
              t.loading ? (o(), s("div", Kv, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (o(), s("div", Yv, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (o(), s(F, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (o(), s("div", Jv, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Qv, [
                    (o(!0), s(F, null, te(t.preview.commits, (h) => (o(), s("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", Xv, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", Zv, a(h.message), 1),
                      e("span", ef, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                e("div", tf, [
                  e("label", of, [
                    Ze(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (h) => r.value = h)
                    }, null, 512), [
                      [lo, r.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (o(), s(F, { key: 3 }, [
                e("div", sf, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (o(), s("div", nf, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", af, [
                    (o(!0), s(F, null, te(t.preview.commits, (h) => (o(), s("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", lf, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", rf, a(h.message), 1),
                      e("span", df, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (o(), s("div", cf, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : c("", !0)
            ]),
            e("div", uf, [
              w(ee, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (h) => v.$emit("close"))
              }, {
                default: d(() => [...f[17] || (f[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (g = t.preview) != null && g.remote_has_new_commits ? (o(), s(F, { key: 0 }, [
                w(ee, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (h) => v.$emit("pull-first"))
                }, {
                  default: d(() => [...f[18] || (f[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(ee, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (h) => p(!0))
                }, {
                  default: d(() => [...f[19] || (f[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (o(), I(ee, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (h) => p(!1))
              }, {
                default: d(() => [...f[20] || (f[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), vf = /* @__PURE__ */ J(mf, [["__scopeId", "data-v-bc6ded53"]]), ff = { class: "resolution-choice-group" }, gf = ["disabled"], hf = ["disabled"], pf = /* @__PURE__ */ Y({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("div", ff, [
      e("button", {
        class: le(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => u.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, gf),
      e("button", {
        class: le(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => u.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, hf)
    ]));
  }
}), yf = /* @__PURE__ */ J(pf, [["__scopeId", "data-v-985715ed"]]), wf = { class: "conflict-header" }, kf = { class: "conflict-info" }, bf = { class: "workflow-name" }, _f = { class: "conflict-description" }, $f = {
  key: 0,
  class: "resolved-badge"
}, Cf = { class: "resolved-text" }, xf = { class: "conflict-hashes" }, Sf = { class: "hash-item" }, If = { class: "hash-item" }, Ef = { class: "conflict-actions" }, Mf = /* @__PURE__ */ Y({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(n.resolution);
    pt(() => n.resolution, (l) => {
      p.value = l;
    }), pt(p, (l) => {
      l && r("resolve", l);
    });
    const v = D(() => p.value !== null), f = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = D(() => {
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
      var h, i;
      return o(), s("div", {
        class: le(["conflict-item", { resolved: v.value }])
      }, [
        e("div", wf, [
          g[2] || (g[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", kf, [
            e("code", bf, a(t.conflict.name) + ".json", 1),
            e("div", _f, a(f.value), 1)
          ]),
          v.value ? (o(), s("div", $f, [
            g[1] || (g[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Cf, a(m.value), 1)
          ])) : c("", !0)
        ]),
        e("div", xf, [
          e("span", Sf, [
            g[3] || (g[3] = y("Your: ", -1)),
            e("code", null, a(((h = t.conflict.base_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", If, [
            g[4] || (g[4] = y("Theirs: ", -1)),
            e("code", null, a(((i = t.conflict.target_hash) == null ? void 0 : i.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Ef, [
          w(yf, {
            modelValue: p.value,
            "onUpdate:modelValue": g[0] || (g[0] = (S) => p.value = S),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Rf = /* @__PURE__ */ J(Mf, [["__scopeId", "data-v-506d3bbf"]]), Tf = { class: "resolution-content" }, zf = {
  key: 0,
  class: "error-box"
}, Lf = { class: "resolution-header" }, Df = { class: "header-stats" }, Nf = { class: "stat" }, Pf = { class: "stat-value" }, Uf = { class: "stat resolved" }, Of = { class: "stat-value" }, Bf = {
  key: 0,
  class: "stat pending"
}, Ff = { class: "stat-value" }, Af = { class: "conflicts-list" }, Vf = {
  key: 1,
  class: "all-resolved-message"
}, Wf = /* @__PURE__ */ Y({
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
    const n = t, r = u, p = D(() => n.resolutions.size), v = D(() => n.workflowConflicts.length - p.value), f = D(() => p.value === n.workflowConflicts.length), m = D(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(S) {
      const b = n.resolutions.get(S);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function g(S, b) {
      r("resolve", S, b);
    }
    function h() {
      r("close");
    }
    function i() {
      r("apply");
    }
    return (S, b) => (o(), I(tt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: h
    }, {
      body: d(() => [
        e("div", Tf, [
          t.error ? (o(), s("div", zf, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : c("", !0),
          e("div", Lf, [
            e("div", Df, [
              e("div", Nf, [
                e("span", Pf, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Uf, [
                e("span", Of, a(p.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (o(), s("div", Bf, [
                e("span", Ff, a(v.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : c("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Af, [
            (o(!0), s(F, null, te(t.workflowConflicts, (T) => (o(), I(Rf, {
              key: T.name,
              conflict: T,
              resolution: l(T.name),
              onResolve: (k) => g(T.name, k)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (o(), s("div", Vf, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : c("", !0)
        ])
      ]),
      footer: d(() => [
        w(ce, {
          variant: "secondary",
          onClick: h
        }, {
          default: d(() => [...b[7] || (b[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ce, {
          variant: "primary",
          disabled: !f.value || t.validating,
          loading: t.validating,
          onClick: i
        }, {
          default: d(() => [
            y(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), jf = /* @__PURE__ */ J(Wf, [["__scopeId", "data-v-c58d150d"]]), Gf = { class: "node-conflict-item" }, qf = { class: "node-header" }, Hf = { class: "node-name" }, Kf = { class: "node-id" }, Yf = { class: "version-comparison" }, Jf = { class: "version yours" }, Qf = { class: "version theirs" }, Xf = { class: "chosen-version" }, Zf = { class: "chosen" }, eg = { class: "chosen-reason" }, tg = { class: "affected-workflows" }, og = { class: "wf-source" }, sg = { class: "wf-version" }, ng = /* @__PURE__ */ Y({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Gf, [
      e("div", qf, [
        e("code", Hf, a(t.conflict.node_name), 1),
        e("span", Kf, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Yf, [
        e("div", Jf, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Qf, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Xf, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Zf, a(t.conflict.chosen_version), 1),
        e("span", eg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", tg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (o(!0), s(F, null, te(t.conflict.affected_workflows, (r) => (o(), s("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", og, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", sg, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), ag = /* @__PURE__ */ J(ng, [["__scopeId", "data-v-8b626725"]]), lg = { class: "validation-content" }, ig = {
  key: 0,
  class: "compatible-message"
}, rg = { class: "conflicts-list" }, dg = {
  key: 2,
  class: "warnings-section"
}, cg = /* @__PURE__ */ Y({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, f) => (o(), I(tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (m) => r("cancel"))
    }, {
      body: d(() => [
        e("div", lg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (o(), s("div", ig, [
            f[5] || (f[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              f[4] || (f[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (o(), s(F, { key: 1 }, [
            f[6] || (f[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", rg, [
              (o(!0), s(F, null, te(t.validation.node_conflicts, (m) => (o(), I(ag, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : c("", !0),
          t.validation.warnings.length > 0 ? (o(), s("div", dg, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (o(!0), s(F, null, te(t.validation.warnings, (m, l) => (o(), s("li", { key: l }, a(m), 1))), 128))
            ])
          ])) : c("", !0)
        ])
      ]),
      footer: d(() => [
        w(ce, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (m) => r("cancel"))
        }, {
          default: d(() => [...f[9] || (f[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[11] || (f[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ce, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (m) => r("goBack"))
        }, {
          default: d(() => [...f[10] || (f[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(ce, {
          variant: "primary",
          loading: t.executing,
          onClick: f[2] || (f[2] = (m) => r("proceed"))
        }, {
          default: d(() => [
            y(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), ug = /* @__PURE__ */ J(cg, [["__scopeId", "data-v-fefd26ed"]]), mg = { key: 0 }, vg = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: u }) {
    const n = u, {
      getRemotes: r,
      addRemote: p,
      removeRemote: v,
      updateRemoteUrl: f,
      fetchRemote: m,
      getRemoteSyncStatus: l,
      getPullPreview: g,
      pullFromRemote: h,
      getPushPreview: i,
      pushToRemote: S,
      validateMerge: b
    } = Re(), T = $([]), k = $(null), x = $({}), C = $(!1), B = $(null), E = $(""), R = $(!1), G = $(null), W = $(!1), X = $("add"), V = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = D(() => {
      if (!E.value.trim()) return T.value;
      const K = E.value.toLowerCase();
      return T.value.filter(
        (oe) => oe.name.toLowerCase().includes(K) || oe.fetch_url.toLowerCase().includes(K) || oe.push_url.toLowerCase().includes(K)
      );
    });
    async function M() {
      C.value = !0, B.value = null;
      try {
        const K = await r();
        T.value = K.remotes, k.value = K.current_branch_tracking || null, await Promise.all(
          K.remotes.map(async (oe) => {
            const fe = await l(oe.name);
            fe && (x.value[oe.name] = fe);
          })
        );
      } catch (K) {
        B.value = K instanceof Error ? K.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function P() {
      X.value = "add", V.value = { name: "", fetchUrl: "", pushUrl: "" }, W.value = !0;
    }
    function N(K) {
      const oe = T.value.find((fe) => fe.name === K);
      oe && (X.value = "edit", V.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, W.value = !0);
    }
    async function q(K) {
      try {
        X.value === "add" ? await p(K.name, K.fetchUrl) : await f(K.name, K.fetchUrl, K.pushUrl || void 0), W.value = !1, await M();
      } catch (oe) {
        B.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function re() {
      W.value = !1, V.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(K) {
      G.value = K;
      try {
        await m(K);
        const oe = await l(K);
        oe && (x.value[K] = oe), n("toast", `✓ Fetched from ${K}`, "success");
      } catch (oe) {
        n("toast", oe instanceof Error ? oe.message : "Fetch failed", "error");
      } finally {
        G.value = null;
      }
    }
    async function se(K) {
      if (confirm(`Remove remote "${K}"?`))
        try {
          await v(K), await M();
        } catch (oe) {
          B.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const _ = $("idle"), ie = D(() => _.value === "pull_preview"), ne = D(
      () => _.value === "resolving" || _.value === "validating"
    ), xe = D(
      () => _.value === "validation_review" || _.value === "executing"
    ), be = $(!1), Te = $(null), Oe = $(!1), ue = $(null), Be = $(!1), ke = $(null), ze = $(null), Ve = $(/* @__PURE__ */ new Map()), Je = $(null), he = $(null), We = D(() => ke.value && fo(ke.value) ? ke.value : null);
    async function je(K) {
      ue.value = K, _.value = "pull_preview", Be.value = !0, ke.value = null, ze.value = null;
      try {
        ke.value = await g(K);
      } catch (oe) {
        ze.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        Be.value = !1;
      }
    }
    function Ge() {
      _.value = "idle", ke.value = null, ze.value = null, ue.value = null;
    }
    async function dt(K) {
      if (!ue.value) return;
      _.value = "executing", ze.value = null;
      const oe = ue.value;
      try {
        const fe = await h(oe, K);
        if (fe.rolled_back) {
          ze.value = `Pull failed and was rolled back: ${fe.error || "Unknown error"}`, _.value = "pull_preview";
          return;
        }
        O(), _.value = "idle", n("toast", `✓ Pulled from ${oe}`, "success"), await M();
      } catch (fe) {
        ze.value = fe instanceof Error ? fe.message : "Pull failed", _.value = "pull_preview";
      }
    }
    function ve() {
      We.value && (_.value = "resolving", he.value = null);
    }
    function Le(K, oe) {
      Ve.value.set(K, { name: K, resolution: oe });
    }
    function ct() {
      _.value = "pull_preview";
    }
    async function st() {
      _.value = "validating", he.value = null;
      try {
        const K = Array.from(Ve.value.values());
        Je.value = await b(ue.value, K), _.value = "validation_review";
      } catch (K) {
        he.value = K instanceof Error ? K.message : "Validation failed", _.value = "resolving";
      }
    }
    async function Se() {
      _.value = "executing";
      const K = ue.value;
      try {
        const oe = Array.from(Ve.value.values()), fe = await h(K, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: oe
        });
        if (fe.rolled_back) {
          ze.value = `Pull failed and was rolled back: ${fe.error || "Unknown error"}`, _.value = "pull_preview";
          return;
        }
        O(), _.value = "idle", n("toast", `✓ Pulled from ${K}`, "success"), await M();
      } catch (oe) {
        ze.value = oe instanceof Error ? oe.message : "Pull failed", _.value = "validation_review";
      }
    }
    function ut() {
      _.value = "resolving";
    }
    function H() {
      O(), _.value = "idle";
    }
    function O() {
      Ve.value.clear(), Je.value = null, he.value = null, ze.value = null, ke.value = null, ue.value = null;
    }
    async function Z(K) {
      ue.value = K, be.value = !0, Be.value = !0, Te.value = null;
      try {
        Te.value = await i(K);
      } catch (oe) {
        B.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        Be.value = !1;
      }
    }
    function ge() {
      be.value = !1, Te.value = null, ue.value = null;
    }
    async function A(K) {
      if (!ue.value) return;
      Oe.value = !0;
      const oe = ue.value;
      try {
        await S(oe, K), ge(), n("toast", `✓ Pushed to ${oe}`, "success"), await M();
      } catch (fe) {
        n("toast", fe instanceof Error ? fe.message : "Push failed", "error");
      } finally {
        Oe.value = !1;
      }
    }
    function ae() {
      const K = ue.value;
      ge(), K && je(K);
    }
    return Ie(M), (K, oe) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (fe) => R.value = !0)
          }, {
            actions: d(() => [
              W.value ? c("", !0) : (o(), I(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: d(() => [...oe[3] || (oe[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          W.value ? c("", !0) : (o(), I(bt, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (fe) => E.value = fe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: d(() => [
          C.value ? (o(), I(lt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (o(), I(it, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            W.value ? (o(), I(iv, {
              key: 0,
              mode: X.value,
              "remote-name": V.value.name,
              "fetch-url": V.value.fetchUrl,
              "push-url": V.value.pushUrl,
              onSubmit: q,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            T.value.length && !W.value ? (o(), I(_t, {
              key: 1,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                k.value ? (o(), s("span", mg, " • Tracking: " + a(k.value.remote) + "/" + a(k.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            L.value.length && !W.value ? (o(), I(Ee, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(L.value, (fe) => (o(), I(Km, {
                  key: fe.name,
                  remote: fe,
                  "sync-status": x.value[fe.name],
                  "fetching-remote": G.value,
                  onFetch: Q,
                  onEdit: N,
                  onRemove: se,
                  onPull: je,
                  onPush: Z
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !L.value.length && !W.value ? (o(), I(Ye, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: d(() => [
                w(ee, {
                  variant: "primary",
                  onClick: P
                }, {
                  default: d(() => [...oe[4] || (oe[4] = [
                    y(" Add Your First Remote ", -1)
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
      w(ot, {
        show: R.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (fe) => R.value = !1)
      }, {
        content: d(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "link",
            onClick: U
          }, {
            default: d(() => [...oe[6] || (oe[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(jv, {
        show: ie.value,
        "remote-name": ue.value || "",
        preview: ke.value,
        loading: Be.value,
        pulling: _.value === "executing",
        error: ze.value,
        "conflict-resolutions": Ve.value,
        onClose: Ge,
        onPull: dt,
        onOpenConflictResolution: ve
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(vf, {
        show: be.value,
        "remote-name": ue.value || "",
        preview: Te.value,
        loading: Be.value,
        pushing: Oe.value,
        onClose: ge,
        onPush: A,
        onPullFirst: ae
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ne.value && We.value ? (o(), I(jf, {
        key: 0,
        "workflow-conflicts": We.value.workflow_conflicts,
        resolutions: Ve.value,
        "operation-type": "pull",
        validating: _.value === "validating",
        error: he.value,
        onClose: ct,
        onResolve: Le,
        onApply: st
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : c("", !0),
      xe.value && Je.value ? (o(), I(ug, {
        key: 1,
        validation: Je.value,
        "operation-type": "pull",
        executing: _.value === "executing",
        onProceed: Se,
        onGoBack: ut,
        onCancel: H
      }, null, 8, ["validation", "executing"])) : c("", !0)
    ], 64));
  }
}), fg = /* @__PURE__ */ J(vg, [["__scopeId", "data-v-9ae3b76d"]]), gg = { class: "setting-info" }, hg = { class: "setting-label" }, pg = {
  key: 0,
  class: "required-marker"
}, yg = {
  key: 0,
  class: "setting-description"
}, wg = { class: "setting-control" }, kg = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: le(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", gg, [
        e("div", hg, [
          y(a(t.label) + " ", 1),
          t.required ? (o(), s("span", pg, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", yg, a(t.description), 1)) : c("", !0)
      ]),
      e("div", wg, [
        pe(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), xt = /* @__PURE__ */ J(kg, [["__scopeId", "data-v-cb5d236c"]]), bg = { class: "toggle" }, _g = ["checked", "disabled"], $g = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", bg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, _g),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Wt = /* @__PURE__ */ J($g, [["__scopeId", "data-v-71c0f550"]]), Cg = { class: "settings-section" }, xg = { class: "path-setting" }, Sg = { class: "path-value" }, Ig = { class: "path-setting" }, Eg = { class: "path-value" }, Mg = { class: "settings-section" }, Rg = { class: "settings-section" }, Tg = { class: "settings-section" }, zg = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Re(), r = $(!1), p = $(null), v = $(null), f = $(null), m = $(null), l = $(""), g = $(""), h = $(!0), i = $(!0), S = $(!1), b = D(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function T() {
      r.value = !0, p.value = null;
      try {
        f.value = await u(), m.value = { ...f.value }, l.value = f.value.civitai_api_key || "", g.value = f.value.huggingface_token || "", h.value = f.value.auto_sync_models, i.value = f.value.confirm_destructive;
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = B === "true";
      } catch (B) {
        p.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function k() {
      var B;
      v.value = null;
      try {
        const E = {};
        l.value !== (((B = m.value) == null ? void 0 : B.civitai_api_key) || "") && (E.civitai_api_key = l.value || null), await n(E), await T(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (E) {
        v.value = {
          type: "error",
          message: E instanceof Error ? E.message : "Failed to save settings"
        };
      }
    }
    function x() {
      m.value && (l.value = m.value.civitai_api_key || "", g.value = m.value.huggingface_token || "", h.value = m.value.auto_sync_models, i.value = m.value.confirm_destructive, v.value = null);
    }
    function C(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return Ie(T), (B, E) => (o(), I(Pe, null, {
      header: d(() => [
        w(Ue, { title: "WORKSPACE SETTINGS" }, {
          actions: d(() => [
            w(ee, {
              variant: "primary",
              size: "sm",
              disabled: !b.value,
              onClick: k
            }, {
              default: d(() => [...E[5] || (E[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            b.value ? (o(), I(ee, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: x
            }, {
              default: d(() => [...E[6] || (E[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: d(() => [
        r.value ? (o(), I(lt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), I(it, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: T
        }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
          w(Ee, { title: "WORKSPACE PATHS" }, {
            default: d(() => {
              var R, G;
              return [
                e("div", Cg, [
                  e("div", xg, [
                    E[7] || (E[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    E[8] || (E[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Sg, a(((R = f.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Ig, [
                    E[9] || (E[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    E[10] || (E[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Eg, a(((G = f.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          w(Ee, { title: "API CREDENTIALS" }, {
            default: d(() => [
              e("div", Mg, [
                w(xt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: d(() => [
                    w(Pt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": E[0] || (E[0] = (R) => l.value = R),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(xt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Pt, {
                      modelValue: g.value,
                      "onUpdate:modelValue": E[1] || (E[1] = (R) => g.value = R),
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
          w(Ee, { title: "UI SETTINGS" }, {
            default: d(() => [
              e("div", Rg, [
                w(xt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: d(() => [
                    w(Wt, {
                      modelValue: S.value,
                      "onUpdate:modelValue": [
                        E[2] || (E[2] = (R) => S.value = R),
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
          w(Ee, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: d(() => [
              e("div", Tg, [
                w(xt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Wt, {
                      modelValue: h.value,
                      "onUpdate:modelValue": E[3] || (E[3] = (R) => h.value = R),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(xt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Wt, {
                      modelValue: i.value,
                      "onUpdate:modelValue": E[4] || (E[4] = (R) => i.value = R),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), I(_t, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: d(() => [
              e("span", {
                style: et({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Lg = /* @__PURE__ */ J(zg, [["__scopeId", "data-v-7861bd35"]]), Dg = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Re(), n = $([]), r = $(!1), p = $(null), v = $(!1), f = $(null), m = D(() => n.value.length === 0 ? [] : n.value.map((g) => ({
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
          (g = f.value) != null && g.parentElement && (f.value.parentElement.scrollTop = f.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(l), (g, h) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: h[0] || (h[0] = (i) => v.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: r.value
              }, {
                default: d(() => [
                  y(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: d(() => [
          r.value ? (o(), I(lt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), I(it, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            n.value.length === 0 ? (o(), I(Ye, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: f,
              class: "log-output"
            }, [
              (o(!0), s(F, null, te(m.value, (i, S) => (o(), s("div", {
                key: S,
                class: le(`log-line log-level-${i.level.toLowerCase()}`)
              }, a(i.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(ot, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: h[2] || (h[2] = (i) => v.value = !1)
      }, {
        content: d(() => [...h[3] || (h[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            y(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            y(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            y(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            y(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: h[1] || (h[1] = (i) => v.value = !1)
          }, {
            default: d(() => [...h[4] || (h[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ng = /* @__PURE__ */ J(Dg, [["__scopeId", "data-v-39f6a756"]]), Pg = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Re(), r = $([]), p = $(!1), v = $(null), f = $(!1), m = $("production"), l = $(null), g = D(() => r.value.length === 0 ? [] : r.value.map((i) => ({
      text: `${i.timestamp} - ${i.name} - ${i.level} - ${i.func}:${i.line} - ${i.message}`,
      level: i.level
    })));
    async function h() {
      p.value = !0, v.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const i = await n();
          m.value = i.environment || "production";
        } catch {
        }
      } catch (i) {
        v.value = i instanceof Error ? i.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var i;
          (i = l.value) != null && i.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(h), (i, S) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (b) => f.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: h,
                disabled: p.value
              }, {
                default: d(() => [
                  y(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: d(() => [
          p.value ? (o(), I(lt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (o(), I(it, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: h
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            r.value.length === 0 ? (o(), I(Ye, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), s(F, null, te(g.value, (b, T) => (o(), s("div", {
                key: T,
                class: le(`log-line log-level-${b.level.toLowerCase()}`)
              }, a(b.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(ot, {
        show: f.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (b) => f.value = !1)
      }, {
        content: d(() => [
          e("p", null, [
            S[3] || (S[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            S[4] || (S[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          S[5] || (S[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            y(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            y(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            y(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            y(" Detailed debugging information ")
          ], -1)),
          S[6] || (S[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: S[1] || (S[1] = (b) => f.value = !1)
          }, {
            default: d(() => [...S[7] || (S[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ug = /* @__PURE__ */ J(Pg, [["__scopeId", "data-v-4f1e6f72"]]), Og = { class: "env-title" }, Bg = {
  key: 0,
  class: "current-badge"
}, Fg = {
  key: 0,
  class: "branch-info"
}, Ag = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), I(Ae, {
      status: t.isCurrent ? "synced" : void 0
    }, zt({
      icon: d(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: d(() => [
        e("div", Og, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Bg, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: d(() => [
        t.currentBranch ? (o(), s("span", Fg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: d(() => [
        pe(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: d(() => [
          w(Ce, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Ce, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Ce, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), I(Ce, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Vg = /* @__PURE__ */ J(Ag, [["__scopeId", "data-v-9231917a"]]), Wg = { class: "env-details" }, jg = { class: "status-row" }, Gg = {
  key: 0,
  class: "detail-row"
}, qg = { class: "value mono" }, Hg = {
  key: 1,
  class: "detail-row"
}, Kg = { class: "value mono small" }, Yg = { class: "detail-row" }, Jg = { class: "value" }, Qg = { class: "detail-row" }, Xg = { class: "value" }, Zg = { class: "detail-row" }, eh = { class: "value" }, th = {
  key: 2,
  class: "section-divider"
}, oh = {
  key: 3,
  class: "detail-row"
}, sh = { class: "value" }, nh = {
  key: 4,
  class: "detail-row"
}, ah = { class: "value" }, lh = { class: "footer-actions" }, ih = /* @__PURE__ */ Y({
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
        const v = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), g = Math.floor(m / 36e5), h = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : g < 24 ? `${g} ${g === 1 ? "hour" : "hours"} ago` : h < 30 ? `${h} ${h === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, v) => (o(), I(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (f) => n("close"))
    }, {
      body: d(() => [
        e("div", Wg, [
          e("div", jg, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Gg, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", qg, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (o(), s("div", Hg, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Kg, a(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Yg, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Jg, a(t.environment.workflow_count), 1)
          ]),
          e("div", Qg, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Xg, a(t.environment.node_count), 1)
          ]),
          e("div", Zg, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", eh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", th)) : c("", !0),
          t.environment.created_at ? (o(), s("div", oh, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", sh, a(r(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (o(), s("div", nh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", ah, a(r(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: d(() => [
        e("div", lh, [
          t.canDelete ? (o(), I(ce, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => n("delete", t.environment.name))
          }, {
            default: d(() => [...v[12] || (v[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          w(ce, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (f) => n("close"))
          }, {
            default: d(() => [...v[13] || (v[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rh = /* @__PURE__ */ J(ih, [["__scopeId", "data-v-59855453"]]), dh = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ch = "3.12", go = [
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
], uh = "auto", mh = { class: "create-env-form" }, vh = { class: "form-field" }, fh = { class: "form-field" }, gh = ["value"], hh = { class: "form-field" }, ph = ["disabled"], yh = ["value"], wh = { class: "form-field" }, kh = ["value"], bh = { class: "form-field form-field--checkbox" }, _h = { class: "form-checkbox" }, $h = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r } = Re(), p = $(""), v = $(ch), f = $("latest"), m = $(uh), l = $(!1), g = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), h = $(!1), i = $(null);
    function S() {
      const T = p.value.trim();
      if (!T) return;
      const k = {
        name: T,
        python_version: v.value,
        comfyui_version: f.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      n("create", k);
    }
    async function b() {
      h.value = !0;
      try {
        g.value = await r();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        h.value = !1;
      }
    }
    return Ie(async () => {
      var T;
      await Lo(), (T = i.value) == null || T.focus(), b();
    }), (T, k) => (o(), I(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: k[6] || (k[6] = (x) => n("close"))
    }, {
      body: d(() => [
        e("div", mh, [
          e("div", vh, [
            k[7] || (k[7] = e("label", { class: "form-label" }, "Name", -1)),
            Ze(e("input", {
              ref_key: "nameInput",
              ref: i,
              "onUpdate:modelValue": k[0] || (k[0] = (x) => p.value = x),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(S, ["enter"])
            }, null, 544), [
              [ao, p.value]
            ])
          ]),
          e("div", fh, [
            k[8] || (k[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": k[1] || (k[1] = (x) => v.value = x),
              class: "form-select"
            }, [
              (o(!0), s(F, null, te(ye(dh), (x) => (o(), s("option", {
                key: x,
                value: x
              }, a(x), 9, gh))), 128))
            ], 512), [
              [Ft, v.value]
            ])
          ]),
          e("div", hh, [
            k[9] || (k[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": k[2] || (k[2] = (x) => f.value = x),
              class: "form-select",
              disabled: h.value
            }, [
              (o(!0), s(F, null, te(g.value, (x) => (o(), s("option", {
                key: x.tag_name,
                value: x.tag_name
              }, a(x.name), 9, yh))), 128))
            ], 8, ph), [
              [Ft, f.value]
            ])
          ]),
          e("div", wh, [
            k[10] || (k[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ze(e("select", {
              "onUpdate:modelValue": k[3] || (k[3] = (x) => m.value = x),
              class: "form-select"
            }, [
              (o(!0), s(F, null, te(ye(go), (x) => (o(), s("option", {
                key: x,
                value: x
              }, a(x) + a(x === "auto" ? " (detect GPU)" : ""), 9, kh))), 128))
            ], 512), [
              [Ft, m.value]
            ])
          ]),
          e("div", bh, [
            e("label", _h, [
              Ze(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": k[4] || (k[4] = (x) => l.value = x)
              }, null, 512), [
                [lo, l.value]
              ]),
              k[11] || (k[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: d(() => [
        w(ce, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: S
        }, {
          default: d(() => [...k[12] || (k[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(ce, {
          variant: "secondary",
          onClick: k[5] || (k[5] = (x) => n("close"))
        }, {
          default: d(() => [...k[13] || (k[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ch = /* @__PURE__ */ J($h, [["__scopeId", "data-v-a2f13447"]]), xh = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: p } = Re(), v = $([]), f = $(!1), m = $(null), l = $(""), g = $(!1), h = $(!1), i = $(null), S = D(
      () => v.value.find((E) => E.is_current)
    ), b = D(() => {
      if (!l.value.trim()) return v.value;
      const E = l.value.toLowerCase();
      return v.value.filter(
        (R) => {
          var G;
          return R.name.toLowerCase().includes(E) || ((G = R.current_branch) == null ? void 0 : G.toLowerCase().includes(E));
        }
      );
    });
    function T(E) {
      r("create", E), h.value = !1;
    }
    function k() {
      h.value = !0;
    }
    function x(E) {
      i.value = E;
    }
    function C(E) {
      i.value = null, r("delete", E);
    }
    async function B() {
      f.value = !0, m.value = null;
      try {
        v.value = await p();
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Ie(B), u({
      loadEnvironments: B
    }), (E, R) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (G) => g.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: d(() => [...R[6] || (R[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: B
              }, {
                default: d(() => [...R[7] || (R[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(bt, {
            modelValue: l.value,
            "onUpdate:modelValue": R[1] || (R[1] = (G) => l.value = G),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          f.value ? (o(), I(lt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (o(), I(it, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(F, { key: 2 }, [
            v.value.length ? (o(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(v.value.length) + " " + a(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                S.value ? (o(), s(F, { key: 0 }, [
                  R[8] || (R[8] = y(" • Current: ", -1)),
                  e("strong", null, a(S.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            b.value.length ? (o(), I(Ee, {
              key: 1,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: d(() => [
                (o(!0), s(F, null, te(b.value, (G) => (o(), I(Vg, {
                  key: G.name,
                  "environment-name": G.name,
                  "is-current": G.is_current,
                  "current-branch": G.current_branch,
                  "show-last-used": !1
                }, {
                  actions: d(() => [
                    G.is_current ? c("", !0) : (o(), I(ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => E.$emit("switch", G.name)
                    }, {
                      default: d(() => [...R[9] || (R[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => x(G)
                    }, {
                      default: d(() => [...R[10] || (R[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            b.value.length ? c("", !0) : (o(), I(Ye, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, zt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: d(() => [
                  w(ee, {
                    variant: "primary",
                    onClick: k
                  }, {
                    default: d(() => [...R[11] || (R[11] = [
                      y(" Create Environment ", -1)
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
      w(ot, {
        show: g.value,
        title: "About Environments",
        onClose: R[3] || (R[3] = (G) => g.value = !1)
      }, {
        content: d(() => [...R[12] || (R[12] = [
          e("p", null, [
            e("strong", null, "Environments"),
            y(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: d(() => [
          w(ee, {
            variant: "secondary",
            onClick: R[2] || (R[2] = (G) => g.value = !1)
          }, {
            default: d(() => [...R[13] || (R[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      i.value ? (o(), I(rh, {
        key: 0,
        environment: i.value,
        "can-delete": v.value.length > 1,
        onClose: R[4] || (R[4] = (G) => i.value = null),
        onDelete: C
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      h.value ? (o(), I(Ch, {
        key: 1,
        onClose: R[5] || (R[5] = (G) => h.value = !1),
        onCreate: T
      })) : c("", !0)
    ], 64));
  }
}), Sh = /* @__PURE__ */ J(xh, [["__scopeId", "data-v-307d9926"]]), Ih = { class: "file-path" }, Eh = { class: "file-path-text" }, Mh = ["title"], Rh = /* @__PURE__ */ Y({
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
    return (p, v) => (o(), s("div", Ih, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Eh, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Mh)) : c("", !0)
    ]));
  }
}), Th = /* @__PURE__ */ J(Rh, [["__scopeId", "data-v-f0982173"]]), zh = { class: "export-card" }, Lh = { class: "export-path-row" }, Dh = { class: "export-actions" }, Nh = {
  key: 1,
  class: "export-warning"
}, Ph = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Re(), n = $(""), r = $(!1), p = $(!1), v = $(null), f = $(!1);
    async function m() {
      r.value = !0, v.value = null;
      try {
        const h = await u(n.value || void 0);
        v.value = h;
      } catch (h) {
        v.value = {
          status: "error",
          message: h instanceof Error ? h.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function l() {
      var h;
      if ((h = v.value) != null && h.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (i) {
          console.error("Failed to copy path:", i);
        }
    }
    async function g() {
      var h;
      if ((h = v.value) != null && h.path) {
        p.value = !0;
        try {
          const i = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!i.ok)
            throw new Error(`Download failed: ${i.statusText}`);
          const S = await i.blob(), b = URL.createObjectURL(S), T = v.value.path.split("/").pop() || "environment-export.tar.gz", k = document.createElement("a");
          k.href = b, k.download = T, document.body.appendChild(k), k.click(), document.body.removeChild(k), URL.revokeObjectURL(b);
        } catch (i) {
          console.error("Failed to download:", i), alert(`Download failed: ${i instanceof Error ? i.message : "Unknown error"}`);
        } finally {
          p.value = !1;
        }
      }
    }
    return (h, i) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: i[0] || (i[0] = (S) => f.value = !0)
          })
        ]),
        content: d(() => [
          w(Ee, { title: "EXPORT OPTIONS" }, {
            default: d(() => [
              e("div", zh, [
                i[5] || (i[5] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", Lh, [
                  w(Pt, {
                    modelValue: n.value,
                    "onUpdate:modelValue": i[1] || (i[1] = (S) => n.value = S),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Dh, [
                  w(ee, {
                    variant: "primary",
                    size: "md",
                    loading: r.value,
                    disabled: r.value,
                    onClick: m
                  }, {
                    default: d(() => [
                      i[4] || (i[4] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      y(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), I(Ee, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: d(() => [
              w(Ae, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, zt({
                icon: d(() => [
                  y(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: d(() => [
                  y(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: d(() => [
                  y(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: d(() => [
                    w(Ce, { label: "Saved to:" }, {
                      default: d(() => [
                        w(Th, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), I(Ce, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), s("div", Nh, [...i[6] || (i[6] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      loading: p.value,
                      onClick: g
                    }, {
                      default: d(() => [...i[7] || (i[7] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: l
                    }, {
                      default: d(() => [...i[8] || (i[8] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: i[2] || (i[2] = (S) => v.value = null)
                    }, {
                      default: d(() => [...i[9] || (i[9] = [
                        y(" Dismiss ", -1)
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
      w(ot, {
        show: f.value,
        title: "What Gets Exported",
        onClose: i[3] || (i[3] = (S) => f.value = !1)
      }, {
        content: d(() => [...i[10] || (i[10] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  y(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  y(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  y(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  y(" — Environment settings and metadata")
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
              y(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Uh = /* @__PURE__ */ J(Ph, [["__scopeId", "data-v-33124fb3"]]), Oh = { class: "file-input-wrapper" }, Bh = ["accept", "multiple", "disabled"], Fh = /* @__PURE__ */ Y({
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
    function v() {
      var m;
      (m = p.value) == null || m.click();
    }
    function f(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return u({
      triggerInput: v
    }), (m, l) => (o(), s("div", Oh, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, Bh),
      w(ee, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: d(() => [
          pe(m.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            y(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ah = /* @__PURE__ */ J(Fh, [["__scopeId", "data-v-cd192091"]]), Vh = {
  key: 0,
  class: "drop-zone-empty"
}, Wh = { class: "drop-zone-text" }, jh = { class: "drop-zone-primary" }, Gh = { class: "drop-zone-secondary" }, qh = { class: "drop-zone-actions" }, Hh = {
  key: 1,
  class: "drop-zone-file"
}, Kh = { class: "file-info" }, Yh = { class: "file-details" }, Jh = { class: "file-name" }, Qh = { class: "file-size" }, Xh = /* @__PURE__ */ Y({
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
    const n = u, r = $(!1), p = $(null), v = $(0), f = D(() => p.value !== null), m = D(() => {
      var x;
      return ((x = p.value) == null ? void 0 : x.name) || "";
    }), l = D(() => {
      if (!p.value) return "";
      const x = p.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g(x) {
      var C;
      x.stopPropagation(), v.value++, (C = x.dataTransfer) != null && C.types.includes("Files") && (r.value = !0);
    }
    function h(x) {
      x.stopPropagation(), x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function i(x) {
      x.stopPropagation(), v.value--, v.value === 0 && (r.value = !1);
    }
    function S(x) {
      var B;
      x.stopPropagation(), v.value = 0, r.value = !1;
      const C = (B = x.dataTransfer) == null ? void 0 : B.files;
      C && C.length > 0 && T(C[0]);
    }
    function b(x) {
      x.length > 0 && T(x[0]);
    }
    function T(x) {
      p.value = x, n("fileSelected", x);
    }
    function k() {
      p.value = null, n("clear");
    }
    return (x, C) => (o(), s("div", {
      class: le(["file-drop-zone", { "drop-active": r.value, "has-file": f.value }]),
      onDragenter: $e(g, ["prevent"]),
      onDragover: $e(h, ["prevent"]),
      onDragleave: $e(i, ["prevent"]),
      onDrop: $e(S, ["prevent"])
    }, [
      f.value ? (o(), s("div", Hh, [
        e("div", Kh, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Yh, [
            e("div", Jh, a(m.value), 1),
            e("div", Qh, a(l.value), 1)
          ])
        ]),
        w(ee, {
          variant: "ghost",
          size: "xs",
          onClick: k,
          title: "Remove file"
        }, {
          default: d(() => [...C[2] || (C[2] = [
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
      ])) : (o(), s("div", Vh, [
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
        e("div", Wh, [
          e("p", jh, a(t.primaryText), 1),
          e("p", Gh, a(t.secondaryText), 1)
        ]),
        e("div", qh, [
          w(Ah, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: b
          }, {
            default: d(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Zh = /* @__PURE__ */ J(Xh, [["__scopeId", "data-v-b774d3bb"]]), ep = { class: "import-preview" }, tp = { class: "preview-header" }, op = {
  key: 0,
  class: "source-env"
}, sp = { class: "preview-content" }, np = { class: "preview-section" }, ap = { class: "section-header" }, lp = { class: "section-info" }, ip = { class: "section-count" }, rp = {
  key: 0,
  class: "item-list"
}, dp = { class: "item-name" }, cp = {
  key: 0,
  class: "item-more"
}, up = { class: "preview-section" }, mp = { class: "section-header" }, vp = { class: "section-info" }, fp = { class: "section-count" }, gp = {
  key: 0,
  class: "item-list"
}, hp = { class: "item-details" }, pp = { class: "item-name" }, yp = { class: "item-meta" }, wp = {
  key: 0,
  class: "item-more"
}, kp = { class: "preview-section" }, bp = { class: "section-header" }, _p = { class: "section-info" }, $p = { class: "section-count" }, Cp = {
  key: 0,
  class: "item-list"
}, xp = { class: "item-name" }, Sp = {
  key: 0,
  class: "item-more"
}, Ip = {
  key: 0,
  class: "preview-section"
}, Ep = { class: "git-info" }, Mp = /* @__PURE__ */ Y({
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
    function v(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, m) => (o(), s("div", ep, [
      e("div", tp, [
        w(qe, null, {
          default: d(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", op, [
          m[1] || (m[1] = y(" From: ", -1)),
          w(Gt, null, {
            default: d(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", sp, [
        e("div", np, [
          e("div", ap, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", lp, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ip, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", rp, [
            (o(!0), s(F, null, te(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", dp, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", cp, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", up, [
          e("div", mp, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", vp, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", fp, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", gp, [
            (o(!0), s(F, null, te(t.models.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", hp, [
                e("span", pp, a(l.filename), 1),
                e("span", yp, a(v(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", wp, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", kp, [
          e("div", bp, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", _p, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", $p, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", Cp, [
            (o(!0), s(F, null, te(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", xp, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Sp, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Ip, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Ep, [
            t.gitBranch ? (o(), I(Ce, {
              key: 0,
              label: "Branch"
            }, {
              default: d(() => [
                w(Gt, null, {
                  default: d(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), I(Ce, {
              key: 1,
              label: "Commit"
            }, {
              default: d(() => [
                w(ro, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Rp = /* @__PURE__ */ J(Mp, [["__scopeId", "data-v-182fe113"]]), Tp = { class: "import-config" }, zp = { class: "config-container" }, Lp = { class: "config-field" }, Dp = { class: "input-wrapper" }, Np = ["value"], Pp = {
  key: 0,
  class: "validating-indicator"
}, Up = {
  key: 1,
  class: "valid-indicator"
}, Op = {
  key: 0,
  class: "field-error"
}, Bp = { class: "config-field" }, Fp = { class: "strategy-options" }, Ap = ["value", "checked", "onChange"], Vp = { class: "strategy-content" }, Wp = { class: "strategy-label" }, jp = { class: "strategy-description" }, Gp = { class: "advanced-section" }, qp = { class: "advanced-content" }, Hp = { class: "config-field" }, Kp = ["value"], Yp = ["value"], Jp = /* @__PURE__ */ Y({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "validate-name"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(!1), v = $(!1);
    pt(() => n.nameError, (h) => {
      p.value = !1, v.value = !h && n.name.length > 0;
    });
    const f = [
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
    let m = null;
    function l(h) {
      const i = h.target.value;
      r("update:name", i), v.value = !1, m && clearTimeout(m), i.length > 0 ? (p.value = !0, m = setTimeout(() => {
        r("validate-name", i);
      }, 400)) : p.value = !1;
    }
    function g() {
      n.name.length > 0 && r("validate-name", n.name);
    }
    return (h, i) => (o(), s("div", Tp, [
      w(qe, null, {
        default: d(() => [...i[1] || (i[1] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", zp, [
        e("div", Lp, [
          w(Dt, { required: "" }, {
            default: d(() => [...i[2] || (i[2] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Dp, [
            e("input", {
              type: "text",
              class: le(["name-input", { error: t.nameError, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: l,
              onBlur: g
            }, null, 42, Np),
            p.value ? (o(), s("span", Pp, "...")) : v.value ? (o(), s("span", Up, "✓")) : c("", !0)
          ]),
          t.nameError ? (o(), s("div", Op, a(t.nameError), 1)) : c("", !0),
          i[3] || (i[3] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Bp, [
          w(Dt, null, {
            default: d(() => [...i[4] || (i[4] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Fp, [
            (o(), s(F, null, te(f, (S) => e("label", {
              key: S.value,
              class: le(["strategy-option", { active: t.modelStrategy === S.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: S.value,
                checked: t.modelStrategy === S.value,
                onChange: (b) => r("update:modelStrategy", S.value)
              }, null, 40, Ap),
              e("div", Vp, [
                e("span", Wp, a(S.label), 1),
                e("span", jp, a(S.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("details", Gp, [
          i[6] || (i[6] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", qp, [
            e("div", Hp, [
              w(Dt, null, {
                default: d(() => [...i[5] || (i[5] = [
                  y("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: i[0] || (i[0] = (S) => r("update:torchBackend", S.target.value))
              }, [
                (o(!0), s(F, null, te(ye(go), (S) => (o(), s("option", {
                  key: S,
                  value: S
                }, a(S) + a(S === "auto" ? " (detect GPU)" : ""), 9, Yp))), 128))
              ], 40, Kp)
            ])
          ])
        ])
      ])
    ]));
  }
}), Qp = /* @__PURE__ */ J(Jp, [["__scopeId", "data-v-ea63af76"]]), Xp = {
  key: 0,
  class: "import-empty"
}, Zp = {
  key: 1,
  class: "import-configure"
}, e1 = { class: "selected-file-bar" }, t1 = { class: "file-bar-content" }, o1 = { class: "file-bar-info" }, s1 = { class: "file-bar-name" }, n1 = { class: "file-bar-size" }, a1 = {
  key: 0,
  class: "preview-loading"
}, l1 = { class: "import-actions" }, i1 = {
  key: 2,
  class: "import-progress"
}, r1 = { class: "progress-content" }, d1 = { class: "progress-info" }, c1 = { class: "progress-title" }, u1 = { class: "progress-detail" }, m1 = { class: "progress-bar" }, v1 = { class: "progress-status" }, f1 = {
  key: 3,
  class: "import-complete"
}, g1 = { class: "complete-message" }, h1 = { class: "complete-title" }, p1 = { class: "complete-details" }, y1 = { class: "complete-actions" }, w1 = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const { previewTarballImport: u, validateEnvironmentName: n, executeImport: r, getImportProgress: p } = Re();
    let v = null;
    const f = $(!1), m = $(null), l = $(!1), g = $(!1), h = $(!1), i = $(""), S = $(!1), b = $(null), T = $(null), k = $({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto"
    }), x = $(null), C = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), B = D(() => {
      if (!T.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const N = T.value;
      return {
        sourceEnvironment: N.comfyui_version ? `ComfyUI ${N.comfyui_version}` : "Unknown",
        workflows: N.workflows.map((q) => q.name),
        models: N.models.map((q) => ({
          filename: q.filename,
          size: 0,
          type: q.relative_path.split("/")[0] || "model"
        })),
        nodes: N.nodes.map((q) => q.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), E = D(() => !S.value && !b.value && T.value && k.value.name.length > 0 && !x.value);
    async function R(N) {
      m.value = N, S.value = !0, b.value = null, T.value = null;
      try {
        const q = await u(N);
        T.value = q;
      } catch (q) {
        b.value = q instanceof Error ? q.message : "Failed to analyze file", console.error("Preview error:", q);
      } finally {
        S.value = !1;
      }
    }
    function G() {
      m.value = null, g.value = !1, h.value = !1, i.value = "", T.value = null, b.value = null, k.value = { name: "", modelStrategy: "required", torchBackend: "auto" }, x.value = null;
    }
    function W() {
      M(), G(), l.value = !1, S.value = !1, C.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function X(N) {
      if (!N) {
        x.value = "Environment name is required";
        return;
      }
      try {
        const q = await n(N);
        x.value = q.valid ? null : q.error || "Invalid name";
      } catch {
        x.value = "Failed to validate name";
      }
    }
    async function V() {
      if (!(!m.value || !k.value.name)) {
        l.value = !0, g.value = !1, C.value = { message: `Creating environment '${k.value.name}'...`, detail: "", percent: 0 };
        try {
          const N = await r(
            m.value,
            k.value.name,
            k.value.modelStrategy,
            k.value.torchBackend
          );
          N.status === "started" ? L() : (h.value = !1, i.value = N.message, l.value = !1, g.value = !0);
        } catch (N) {
          h.value = !1, i.value = N instanceof Error ? N.message : "Unknown error occurred during import", l.value = !1, g.value = !0;
        }
      }
    }
    function L() {
      v || (v = setInterval(async () => {
        try {
          const N = await p();
          C.value = {
            message: N.message,
            detail: "",
            percent: N.state === "importing" ? 50 : N.state === "complete" ? 100 : 0
          }, N.state === "complete" ? (M(), h.value = !0, i.value = `Environment '${N.environment_name}' created successfully`, l.value = !1, g.value = !0) : N.state === "error" && (M(), h.value = !1, i.value = N.error || N.message, l.value = !1, g.value = !0);
        } catch (N) {
          console.error("Failed to poll import progress:", N);
        }
      }, 2e3));
    }
    function M() {
      v && (clearInterval(v), v = null);
    }
    function P(N) {
      return N < 1024 ? `${N} B` : N < 1024 * 1024 ? `${(N / 1024).toFixed(1)} KB` : N < 1024 * 1024 * 1024 ? `${(N / (1024 * 1024)).toFixed(1)} MB` : `${(N / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (N, q) => (o(), s(F, null, [
      w(Pe, null, {
        header: d(() => [
          w(Ue, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: q[0] || (q[0] = (re) => f.value = !0)
          })
        ]),
        content: d(() => {
          var re;
          return [
            !m.value && !l.value ? (o(), s("div", Xp, [
              w(Zh, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: R
              })
            ])) : m.value && !l.value && !g.value ? (o(), s("div", Zp, [
              e("div", e1, [
                e("div", t1, [
                  q[5] || (q[5] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", o1, [
                    e("div", s1, a(m.value.name), 1),
                    e("div", n1, a(P(m.value.size)), 1)
                  ])
                ]),
                w(ee, {
                  variant: "ghost",
                  size: "sm",
                  onClick: G
                }, {
                  default: d(() => [...q[6] || (q[6] = [
                    y(" Change File ", -1)
                  ])]),
                  _: 1
                })
              ]),
              S.value ? (o(), s("div", a1, [...q[7] || (q[7] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : b.value ? (o(), I(ht, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [b.value]
              }, null, 8, ["details"])) : T.value ? (o(), I(Rp, {
                key: 2,
                "source-environment": B.value.sourceEnvironment,
                workflows: B.value.workflows,
                models: B.value.models,
                nodes: B.value.nodes,
                "git-branch": B.value.gitBranch,
                "git-commit": B.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : c("", !0),
              T.value ? (o(), I(Qp, {
                key: 3,
                name: k.value.name,
                "onUpdate:name": q[1] || (q[1] = (Q) => k.value.name = Q),
                "model-strategy": k.value.modelStrategy,
                "onUpdate:modelStrategy": q[2] || (q[2] = (Q) => k.value.modelStrategy = Q),
                "torch-backend": k.value.torchBackend,
                "onUpdate:torchBackend": q[3] || (q[3] = (Q) => k.value.torchBackend = Q),
                "name-error": x.value,
                onValidateName: X
              }, null, 8, ["name", "model-strategy", "torch-backend", "name-error"])) : c("", !0),
              k.value.modelStrategy === "skip" && ((re = T.value) != null && re.models_needing_download) ? (o(), I(ht, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${T.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : c("", !0),
              e("div", l1, [
                w(ee, {
                  variant: "primary",
                  size: "md",
                  disabled: !E.value,
                  onClick: V
                }, {
                  default: d(() => [...q[8] || (q[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 4v4h3l-4 4-4-4h3V4h2z" })
                    ], -1),
                    y(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"]),
                w(ee, {
                  variant: "secondary",
                  size: "md",
                  onClick: G
                }, {
                  default: d(() => [...q[9] || (q[9] = [
                    y(" Cancel ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : l.value ? (o(), s("div", i1, [
              e("div", r1, [
                q[10] || (q[10] = e("div", { class: "progress-icon" }, [
                  e("div", { class: "spinner" })
                ], -1)),
                e("div", d1, [
                  e("div", c1, a(C.value.message), 1),
                  e("div", u1, a(C.value.detail), 1)
                ])
              ]),
              e("div", m1, [
                e("div", {
                  class: "progress-bar-fill",
                  style: et({ width: `${C.value.percent}%` })
                }, null, 4)
              ]),
              e("div", v1, a(C.value.percent) + "% complete ", 1)
            ])) : g.value ? (o(), s("div", f1, [
              e("div", {
                class: le(["complete-icon", h.value ? "success" : "error"])
              }, a(h.value ? "✓" : "✕"), 3),
              e("div", g1, [
                e("div", h1, a(h.value ? "Import Successful" : "Import Failed"), 1),
                e("div", p1, a(i.value), 1)
              ]),
              e("div", y1, [
                w(ee, {
                  variant: "primary",
                  size: "md",
                  onClick: W
                }, {
                  default: d(() => [...q[11] || (q[11] = [
                    y(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : c("", !0)
          ];
        }),
        _: 1
      }),
      w(ot, {
        show: f.value,
        title: "How Import Works",
        onClose: q[4] || (q[4] = (re) => f.value = !1)
      }, {
        content: d(() => [...q[12] || (q[12] = [
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
}), k1 = /* @__PURE__ */ J(w1, [["__scopeId", "data-v-f9c61799"]]), b1 = { class: "header-info" }, _1 = { class: "commit-hash" }, $1 = {
  key: 0,
  class: "commit-refs"
}, C1 = { class: "commit-message" }, x1 = { class: "commit-date" }, S1 = {
  key: 0,
  class: "loading"
}, I1 = {
  key: 1,
  class: "changes-section"
}, E1 = { class: "stats-row" }, M1 = { class: "stat" }, R1 = { class: "stat insertions" }, T1 = { class: "stat deletions" }, z1 = {
  key: 0,
  class: "change-group"
}, L1 = {
  key: 1,
  class: "change-group"
}, D1 = {
  key: 0,
  class: "version"
}, N1 = {
  key: 2,
  class: "change-group"
}, P1 = { class: "change-item" }, U1 = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Re(), r = $(null), p = $(!0), v = D(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), f = D(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ie(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, l) => (o(), I(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (g) => m.$emit("close"))
    }, {
      header: d(() => {
        var g, h, i, S;
        return [
          e("div", b1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", _1, a(((g = r.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((h = t.commit.hash) == null ? void 0 : h.slice(0, 7))), 1),
            (S = (i = r.value) == null ? void 0 : i.refs) != null && S.length ? (o(), s("span", $1, [
              (o(!0), s(F, null, te(r.value.refs, (b) => (o(), s("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : c("", !0)
          ]),
          w(ce, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (b) => m.$emit("close"))
          }, {
            default: d(() => [...l[5] || (l[5] = [
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
      body: d(() => {
        var g, h;
        return [
          e("div", C1, a(((g = r.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", x1, a(((h = r.value) == null ? void 0 : h.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", S1, "Loading details...")) : r.value ? (o(), s("div", I1, [
            e("div", E1, [
              e("span", M1, a(r.value.stats.files_changed) + " files", 1),
              e("span", R1, "+" + a(r.value.stats.insertions), 1),
              e("span", T1, "-" + a(r.value.stats.deletions), 1)
            ]),
            v.value ? (o(), s("div", z1, [
              w(Mt, { variant: "section" }, {
                default: d(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(F, null, te(r.value.changes.workflows.added, (i) => (o(), s("div", {
                key: "add-" + i,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(i), 1)
              ]))), 128)),
              (o(!0), s(F, null, te(r.value.changes.workflows.modified, (i) => (o(), s("div", {
                key: "mod-" + i,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(i), 1)
              ]))), 128)),
              (o(!0), s(F, null, te(r.value.changes.workflows.deleted, (i) => (o(), s("div", {
                key: "del-" + i,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(i), 1)
              ]))), 128))
            ])) : c("", !0),
            f.value ? (o(), s("div", L1, [
              w(Mt, { variant: "section" }, {
                default: d(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(F, null, te(r.value.changes.nodes.added, (i) => (o(), s("div", {
                key: "add-" + i.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(i.name), 1),
                i.version ? (o(), s("span", D1, "(" + a(i.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(F, null, te(r.value.changes.nodes.removed, (i) => (o(), s("div", {
                key: "rem-" + i.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(i.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", N1, [
              w(Mt, { variant: "section" }, {
                default: d(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", P1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: d(() => [
        w(ce, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (g) => m.$emit("createBranch", t.commit))
        }, {
          default: d(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(ce, {
          variant: "primary",
          onClick: l[2] || (l[2] = (g) => m.$emit("checkout", t.commit))
        }, {
          default: d(() => [...l[16] || (l[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), O1 = /* @__PURE__ */ J(U1, [["__scopeId", "data-v-d256ff6d"]]), B1 = { class: "dialog-message" }, F1 = {
  key: 0,
  class: "dialog-details"
}, A1 = {
  key: 1,
  class: "dialog-warning"
}, V1 = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), I(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: d(() => [
        e("p", B1, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", F1, [
          (o(!0), s(F, null, te(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", A1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: d(() => [
        w(ce, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: d(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), I(ce, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: d(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        w(ce, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: d(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), W1 = /* @__PURE__ */ J(V1, [["__scopeId", "data-v-3670b9f5"]]), j1 = { class: "base-textarea-wrapper" }, G1 = ["value", "rows", "placeholder", "disabled", "maxlength"], q1 = {
  key: 0,
  class: "base-textarea-count"
}, H1 = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("div", j1, [
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
      }, null, 40, G1),
      t.showCharCount && t.maxLength ? (o(), s("div", q1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), to = /* @__PURE__ */ J(H1, [["__scopeId", "data-v-5516e6fc"]]), K1 = ["checked", "disabled"], Y1 = { class: "base-checkbox-box" }, J1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Q1 = {
  key: 0,
  class: "base-checkbox-label"
}, X1 = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: le(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, K1),
      e("span", Y1, [
        t.modelValue ? (o(), s("svg", J1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", Q1, [
        pe(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), oo = /* @__PURE__ */ J(X1, [["__scopeId", "data-v-bf17c831"]]), Z1 = { class: "popover-header" }, ey = { class: "popover-body" }, ty = {
  key: 0,
  class: "changes-summary"
}, oy = {
  key: 0,
  class: "change-item"
}, sy = {
  key: 1,
  class: "change-item"
}, ny = {
  key: 2,
  class: "change-item"
}, ay = {
  key: 3,
  class: "change-item"
}, ly = {
  key: 4,
  class: "change-item"
}, iy = {
  key: 1,
  class: "no-changes"
}, ry = {
  key: 2,
  class: "loading"
}, dy = {
  key: 3,
  class: "issues-error"
}, cy = { class: "error-header" }, uy = { class: "error-title" }, my = { class: "issues-list" }, vy = { class: "message-section" }, fy = { class: "popover-footer" }, gy = {
  key: 1,
  class: "commit-popover"
}, hy = { class: "popover-header" }, py = { class: "popover-body" }, yy = {
  key: 0,
  class: "changes-summary"
}, wy = {
  key: 0,
  class: "change-item"
}, ky = {
  key: 1,
  class: "change-item"
}, by = {
  key: 2,
  class: "change-item"
}, _y = {
  key: 3,
  class: "change-item"
}, $y = {
  key: 4,
  class: "change-item"
}, Cy = {
  key: 1,
  class: "no-changes"
}, xy = {
  key: 2,
  class: "loading"
}, Sy = {
  key: 3,
  class: "issues-error"
}, Iy = { class: "error-header" }, Ey = { class: "error-title" }, My = { class: "issues-list" }, Ry = { class: "message-section" }, Ty = { class: "popover-footer" }, zy = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: p } = Re(), v = $(""), f = $(!1), m = $(!1), l = $(null), g = D(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), h = D(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (k) => k.has_issues && (k.sync_state === "new" || k.sync_state === "modified")
      ) : [];
    }), i = D(() => h.value.length > 0), S = D(() => i.value && !m.value);
    async function b() {
      var T, k, x;
      if (!(i.value && !m.value) && !(!g.value || !v.value.trim() || f.value)) {
        f.value = !0, l.value = null;
        try {
          const C = await p(v.value.trim(), m.value);
          C.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((k = C.summary) == null ? void 0 : k.modified) || 0} modified, ${((x = C.summary) == null ? void 0 : x.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : C.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          l.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (T, k) => t.asModal ? (o(), I(Me, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: k[5] || (k[5] = (x) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: k[4] || (k[4] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Z1, [
            k[11] || (k[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: k[0] || (k[0] = (x) => r("close"))
            }, [...k[10] || (k[10] = [
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
          e("div", ey, [
            t.status && g.value ? (o(), s("div", ty, [
              t.status.workflows.new.length ? (o(), s("div", oy, [
                k[12] || (k[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", sy, [
                k[13] || (k[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", ny, [
                k[14] || (k[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", ay, [
                k[15] || (k[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", ly, [
                k[16] || (k[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", iy, " No changes to commit ")) : (o(), s("div", ry, " Loading... ")),
            i.value ? (o(), s("div", dy, [
              e("div", cy, [
                k[17] || (k[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", uy, a(h.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", my, [
                (o(!0), s(F, null, te(h.value, (x) => (o(), s("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(x.name), 1),
                  y(": " + a(x.issue_summary), 1)
                ]))), 128))
              ]),
              w(oo, {
                modelValue: m.value,
                "onUpdate:modelValue": k[1] || (k[1] = (x) => m.value = x),
                class: "allow-issues-toggle"
              }, {
                default: d(() => [...k[18] || (k[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", vy, [
              w(to, {
                modelValue: v.value,
                "onUpdate:modelValue": k[2] || (k[2] = (x) => v.value = x),
                placeholder: S.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
                disabled: !g.value || f.value || S.value,
                rows: 3,
                onCtrlEnter: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), s("div", {
              key: 4,
              class: le(["result", l.value.type])
            }, a(l.value.message), 3)) : c("", !0)
          ]),
          e("div", fy, [
            w(ce, {
              variant: "secondary",
              onClick: k[3] || (k[3] = (x) => r("close"))
            }, {
              default: d(() => [...k[19] || (k[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ce, {
              variant: m.value ? "danger" : "primary",
              disabled: !g.value || !v.value.trim() || f.value || S.value,
              loading: f.value,
              onClick: b
            }, {
              default: d(() => [
                y(a(f.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", gy, [
      e("div", hy, [
        k[21] || (k[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: k[6] || (k[6] = (x) => r("close"))
        }, [...k[20] || (k[20] = [
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
      e("div", py, [
        t.status && g.value ? (o(), s("div", yy, [
          t.status.workflows.new.length ? (o(), s("div", wy, [
            k[22] || (k[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", ky, [
            k[23] || (k[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", by, [
            k[24] || (k[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", _y, [
            k[25] || (k[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", $y, [
            k[26] || (k[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", Cy, " No changes to commit ")) : (o(), s("div", xy, " Loading... ")),
        i.value ? (o(), s("div", Sy, [
          e("div", Iy, [
            k[27] || (k[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Ey, a(h.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", My, [
            (o(!0), s(F, null, te(h.value, (x) => (o(), s("div", {
              key: x.name,
              class: "issue-item"
            }, [
              e("strong", null, a(x.name), 1),
              y(": " + a(x.issue_summary), 1)
            ]))), 128))
          ]),
          w(oo, {
            modelValue: m.value,
            "onUpdate:modelValue": k[7] || (k[7] = (x) => m.value = x),
            class: "allow-issues-toggle"
          }, {
            default: d(() => [...k[28] || (k[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", Ry, [
          w(to, {
            modelValue: v.value,
            "onUpdate:modelValue": k[8] || (k[8] = (x) => v.value = x),
            placeholder: S.value ? "Enable 'Allow issues' to commit" : g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || f.value || S.value,
            rows: 3,
            onCtrlEnter: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), s("div", {
          key: 4,
          class: le(["result", l.value.type])
        }, a(l.value.message), 3)) : c("", !0)
      ]),
      e("div", Ty, [
        w(ce, {
          variant: "secondary",
          onClick: k[9] || (k[9] = (x) => r("close"))
        }, {
          default: d(() => [...k[29] || (k[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(ce, {
          variant: m.value ? "danger" : "primary",
          disabled: !g.value || !v.value.trim() || f.value || S.value,
          loading: f.value,
          onClick: b
        }, {
          default: d(() => [
            y(a(f.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ho = /* @__PURE__ */ J(zy, [["__scopeId", "data-v-d92153de"]]), Ly = { class: "modal-header" }, Dy = { class: "modal-body" }, Ny = { class: "switch-message" }, Py = { class: "switch-details" }, Uy = { class: "modal-actions" }, Oy = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), I(Me, { to: "body" }, [
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
          e("div", Ly, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Dy, [
            e("p", Ny, [
              n[6] || (n[6] = y(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = y(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = y("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Py, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Uy, [
            w(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: d(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: d(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), By = /* @__PURE__ */ J(Oy, [["__scopeId", "data-v-e9c5253e"]]), Fy = { class: "progress-bar" }, Ay = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = D(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, p) => (o(), s("div", Fy, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: et({ width: n.value })
      }, null, 6)
    ]));
  }
}), Vy = /* @__PURE__ */ J(Ay, [["__scopeId", "data-v-1beb0512"]]), Wy = {
  key: 0,
  class: "modal-overlay"
}, jy = { class: "modal-content" }, Gy = { class: "modal-body" }, qy = { class: "progress-info" }, Hy = { class: "progress-percentage" }, Ky = { class: "progress-state" }, Yy = { class: "switch-steps" }, Jy = { class: "step-icon" }, Qy = { class: "step-label" }, Xy = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = D(() => {
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
      return u.message || v[u.state] || u.state;
    }), r = D(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), p = D(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = v.findIndex((m) => m.state === u.state);
      return v.map((m, l) => {
        let g = "pending", h = "○";
        return l < f ? (g = "completed", h = "✓") : l === f && (g = "active", h = "⟳"), {
          ...m,
          status: g,
          icon: h
        };
      });
    });
    return (v, f) => (o(), I(Me, { to: "body" }, [
      t.show ? (o(), s("div", Wy, [
        e("div", jy, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Gy, [
            w(Vy, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", qy, [
              e("div", Hy, a(t.progress) + "%", 1),
              e("div", Ky, a(n.value), 1)
            ]),
            e("div", Yy, [
              (o(!0), s(F, null, te(p.value, (m) => (o(), s("div", {
                key: m.state,
                class: le(["switch-step", m.status])
              }, [
                e("span", Jy, a(m.icon), 1),
                e("span", Qy, a(m.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Zy = /* @__PURE__ */ J(Xy, [["__scopeId", "data-v-768a5078"]]), ew = { class: "modal-header" }, tw = { class: "modal-body" }, ow = {
  key: 0,
  class: "node-section"
}, sw = { class: "node-list" }, nw = {
  key: 1,
  class: "node-section"
}, aw = { class: "node-list" }, lw = { class: "modal-actions" }, iw = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), I(Me, { to: "body" }, [
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
          e("div", ew, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", tw, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", ow, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", sw, [
                (o(!0), s(F, null, te(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", nw, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", aw, [
                (o(!0), s(F, null, te(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", lw, [
            w(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: d(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: d(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), rw = /* @__PURE__ */ J(iw, [["__scopeId", "data-v-7cad7518"]]), dw = { class: "comfygit-panel" }, cw = { class: "panel-header" }, uw = { class: "header-left" }, mw = {
  key: 0,
  class: "header-info"
}, vw = { class: "header-actions" }, fw = { class: "env-switcher" }, gw = {
  key: 0,
  class: "header-info"
}, hw = { class: "branch-name" }, pw = { class: "panel-main" }, yw = { class: "sidebar" }, ww = { class: "sidebar-section" }, kw = { class: "sidebar-section" }, bw = { class: "sidebar-section" }, _w = { class: "content-area" }, $w = {
  key: 0,
  class: "error-message"
}, Cw = {
  key: 1,
  class: "loading"
}, xw = {
  key: 4,
  class: "dialog-overlay"
}, Sw = { class: "dialog-content create-progress-dialog" }, Iw = { class: "dialog-body create-progress-body" }, Ew = { class: "create-progress-message" }, Mw = { class: "dialog-content env-selector-dialog" }, Rw = { class: "dialog-header" }, Tw = { class: "dialog-body" }, zw = { class: "env-list" }, Lw = { class: "env-info" }, Dw = { class: "env-name-row" }, Nw = { class: "env-indicator" }, Pw = { class: "env-name" }, Uw = {
  key: 0,
  class: "env-branch"
}, Ow = {
  key: 1,
  class: "current-label"
}, Bw = { class: "env-stats" }, Fw = ["onClick"], Aw = { class: "toast-container" }, Vw = { class: "toast-message" }, Ww = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: p,
      getBranches: v,
      checkout: f,
      createBranch: m,
      switchBranch: l,
      deleteBranch: g,
      getEnvironments: h,
      switchEnvironment: i,
      getSwitchProgress: S,
      createEnvironment: b,
      getCreateProgress: T,
      deleteEnvironment: k,
      syncEnvironmentManually: x,
      repairWorkflowModels: C
    } = Re(), B = co(), E = $(null), R = $([]), G = $([]), W = $([]), X = D(() => W.value.find((j) => j.is_current)), V = $(!1), L = $(null), M = $(null), P = $(!1), N = $(null), q = $(null), re = $(null), Q = $(!1), se = $(!1), U = $(""), _ = $({ state: "idle", progress: 0, message: "" });
    let ie = null, ne = null;
    const xe = $(!1), be = $({ state: "idle", message: "" }), Te = $(null);
    let Oe = null;
    const ue = $("status"), Be = $("this-env");
    function ke(j, z) {
      ue.value = j, Be.value = z;
    }
    function ze(j) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      de && ke(de.view, de.section);
    }
    function Ve() {
      ke("branches", "this-env");
    }
    function Je() {
      n("close"), setTimeout(() => {
        var z;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const de of j)
          if (((z = de.textContent) == null ? void 0 : z.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const he = $(null), We = $(!1), je = $(!1), Ge = $([]);
    let dt = 0;
    function ve(j, z = "info", de = 3e3) {
      const _e = ++dt;
      return Ge.value.push({ id: _e, message: j, type: z }), de > 0 && setTimeout(() => {
        Ge.value = Ge.value.filter((De) => De.id !== _e);
      }, de), _e;
    }
    function Le(j) {
      Ge.value = Ge.value.filter((z) => z.id !== j);
    }
    function ct(j, z) {
      ve(j, z);
    }
    const st = D(() => {
      if (!E.value) return "neutral";
      const j = E.value.workflows, z = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    D(() => E.value ? st.value === "success" ? "All synced" : st.value === "warning" ? "Uncommitted changes" : st.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      V.value = !0, L.value = null;
      try {
        const [j, z, de, _e] = await Promise.all([
          r(!0),
          p(),
          v(),
          h()
        ]);
        E.value = j, R.value = z.commits, G.value = de.branches, W.value = _e, n("statusUpdate", j), N.value && await N.value.loadWorkflows(!0);
      } catch (j) {
        L.value = j instanceof Error ? j.message : "Failed to load status", E.value = null, R.value = [], G.value = [];
      } finally {
        V.value = !1;
      }
    }
    function ut(j) {
      M.value = j;
    }
    async function H(j) {
      var de;
      M.value = null;
      const z = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      he.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((de = j.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: z ? Zt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var Ne;
          he.value = null, ae();
          const _e = ve(`Checking out ${j.short_hash || ((Ne = j.hash) == null ? void 0 : Ne.slice(0, 7))}...`, "info", 0), De = await f(j.hash, z);
          Le(_e), De.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(De.message || "Checkout failed", "error");
        }
      };
    }
    async function O(j) {
      const z = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      he.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: z ? Zt() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, ae();
          const de = ve(`Switching to ${j}...`, "info", 0), _e = await l(j, z);
          Le(de), _e.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(_e.message || "Branch switch failed", "error");
        }
      };
    }
    async function Z(j) {
      const z = ve(`Creating branch ${j}...`, "info", 0), de = await m(j);
      Le(z), de.status === "success" ? (ve(`Branch "${j}" created`, "success"), await Se()) : ve(de.message || "Failed to create branch", "error");
    }
    async function ge(j, z = !1) {
      const de = async (_e) => {
        var Ne;
        const De = ve(`Deleting branch ${j}...`, "info", 0);
        try {
          const me = await g(j, _e);
          Le(De), me.status === "success" ? (ve(`Branch "${j}" deleted`, "success"), await Se()) : (Ne = me.message) != null && Ne.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await de(!0);
            }
          } : ve(me.message || "Failed to delete branch", "error");
        } catch (me) {
          Le(De);
          const Ot = me instanceof Error ? me.message : "Failed to delete branch";
          Ot.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await de(!0);
            }
          } : ve(Ot, "error");
        }
      };
      he.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, await de(z);
        }
      };
    }
    async function A(j) {
      M.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const de = ve(`Creating branch ${z}...`, "info", 0), _e = await m(z, j.hash);
        Le(de), _e.status === "success" ? (ve(`Branch "${z}" created from ${j.short_hash}`, "success"), await Se()) : ve(_e.message || "Failed to create branch", "error");
      }
    }
    function ae() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function K() {
      he.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          he.value = null, ae(), ve("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function oe() {
      he.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          he.value = null, ve("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function fe(j) {
      P.value = !1, U.value = j, Q.value = !0;
    }
    async function nt() {
      Q.value = !1, se.value = !0, ae(), _.value = {
        progress: 10,
        state: mt(10),
        message: vt(10)
      };
      try {
        await i(U.value), bo(), _o();
      } catch (j) {
        ft(), se.value = !1, ve(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), _.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function mt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function vt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[mt(j)] || "";
    }
    function bo() {
      if (ne) return;
      let j = 10;
      const z = 60, de = 5e3, _e = 100, De = (z - j) / (de / _e);
      ne = window.setInterval(() => {
        if (j += De, j >= z && (j = z, ft()), _.value.progress < z) {
          const Ne = Math.floor(j);
          _.value = {
            progress: Ne,
            state: mt(Ne),
            message: vt(Ne)
          };
        }
      }, _e);
    }
    function ft() {
      ne && (clearInterval(ne), ne = null);
    }
    function _o() {
      ie || (ie = window.setInterval(async () => {
        try {
          let j = await B.getStatus();
          if ((!j || j.state === "idle") && (j = await S()), !j)
            return;
          const z = j.progress || 0;
          z >= 60 && ft();
          const de = Math.max(z, _.value.progress), _e = j.state && j.state !== "idle" && j.state !== "unknown", De = _e ? j.state : mt(de), Ne = _e && j.message || vt(de);
          _.value = {
            state: De,
            progress: de,
            message: Ne
          }, j.state === "complete" ? (ft(), Ut(), se.value = !1, ve(`✓ Switched to ${U.value}`, "success"), await Se(), U.value = "") : j.state === "rolled_back" ? (ft(), Ut(), se.value = !1, ve("Switch failed, restored previous environment", "warning"), U.value = "") : j.state === "critical_failure" && (ft(), Ut(), se.value = !1, ve(`Critical error during switch: ${j.message}`, "error"), U.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Ut() {
      ft(), ie && (clearInterval(ie), ie = null);
    }
    function $o() {
      Q.value = !1, U.value = "";
    }
    async function Co() {
      We.value = !1, await Se(), ve("✓ Changes committed", "success");
    }
    async function xo() {
      je.value = !1;
      const j = ve("Syncing environment...", "info", 0);
      try {
        const z = await x("skip", !0);
        if (Le(j), z.status === "success") {
          const de = [];
          z.nodes_installed.length && de.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && de.push(`${z.nodes_removed.length} removed`);
          const _e = de.length ? `: ${de.join(", ")}` : "";
          ve(`✓ Environment synced${_e}`, "success"), await Se();
        } else {
          const de = z.errors.length ? z.errors.join("; ") : z.message;
          ve(`Sync failed: ${de}`, "error");
        }
      } catch (z) {
        Le(j), ve(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function So(j) {
      var z;
      try {
        const de = await C(j);
        de.failed.length === 0 ? ve(`✓ Repaired ${de.success} workflow${de.success === 1 ? "" : "s"}`, "success") : ve(`Repaired ${de.success}, failed: ${de.failed.length}`, "warning"), await Se();
      } catch (de) {
        ve(`Repair failed: ${de instanceof Error ? de.message : "Unknown error"}`, "error");
      } finally {
        (z = re.value) == null || z.resetRepairingState();
      }
    }
    async function Io(j) {
      Te.value = j, xe.value = !0, be.value = { state: "creating", message: `Creating environment '${j.name}'...` };
      try {
        const z = await b(j);
        z.status === "started" ? Eo() : z.status === "error" && (xe.value = !1, ve(`Failed to create environment: ${z.message}. Check debug logs for details.`, "error"), Te.value = null);
      } catch (z) {
        xe.value = !1, ve(`Error creating environment: ${z instanceof Error ? z.message : "Unknown error"}. Check debug logs.`, "error"), Te.value = null;
      }
    }
    function Eo() {
      Oe || (Oe = window.setInterval(async () => {
        var j;
        try {
          const z = await T();
          be.value = { state: z.state, message: z.message }, z.state === "complete" ? (Xt(), xe.value = !1, ve(`✓ Environment '${z.environment_name}' created`, "success"), await Se(), q.value && await q.value.loadEnvironments(), (j = Te.value) != null && j.switch_after && z.environment_name && await fe(z.environment_name), Te.value = null) : z.state === "error" && (Xt(), xe.value = !1, ve(`Failed to create environment: ${z.error || z.message}. Check debug logs.`, "error"), Te.value = null);
        } catch (z) {
          console.error("Failed to poll create progress:", z);
        }
      }, 2e3));
    }
    function Xt() {
      Oe && (clearInterval(Oe), Oe = null);
    }
    async function Mo(j) {
      var z;
      if (((z = X.value) == null ? void 0 : z.name) === j) {
        ve("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      he.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          he.value = null;
          try {
            const de = await k(j);
            de.status === "success" ? (ve(`Environment "${j}" deleted`, "success"), await Se(), q.value && await q.value.loadEnvironments()) : ve(de.message || "Failed to delete environment", "error");
          } catch (de) {
            ve(`Error deleting environment: ${de instanceof Error ? de.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Zt() {
      if (!E.value) return [];
      const j = [], z = E.value.workflows;
      return z.new.length && j.push(`${z.new.length} new workflow(s)`), z.modified.length && j.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && j.push(`${z.deleted.length} deleted workflow(s)`), j;
    }
    return Ie(Se), (j, z) => {
      var de, _e, De, Ne;
      return o(), s("div", dw, [
        e("div", cw, [
          e("div", uw, [
            z[27] || (z[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (o(), s("div", mw)) : c("", !0)
          ]),
          e("div", vw, [
            e("button", {
              class: le(["icon-btn", { spinning: V.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...z[28] || (z[28] = [
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
              onClick: z[0] || (z[0] = (me) => n("close")),
              title: "Close"
            }, [...z[29] || (z[29] = [
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
        e("div", fw, [
          e("div", { class: "env-switcher-header" }, [
            z[30] || (z[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: K
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: oe
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: z[1] || (z[1] = (me) => ke("environments", "all-envs"))
          }, [
            E.value ? (o(), s("div", gw, [
              e("span", null, a(((de = X.value) == null ? void 0 : de.name) || ((_e = E.value) == null ? void 0 : _e.environment) || "Loading..."), 1),
              e("span", hw, "(" + a(E.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            z[31] || (z[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", pw, [
          e("div", yw, [
            e("div", ww, [
              z[32] || (z[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "status" && Be.value === "this-env" }]),
                onClick: z[2] || (z[2] = (me) => ke("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "workflows" }]),
                onClick: z[3] || (z[3] = (me) => ke("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "models-env" }]),
                onClick: z[4] || (z[4] = (me) => ke("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "branches" }]),
                onClick: z[5] || (z[5] = (me) => ke("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "history" }]),
                onClick: z[6] || (z[6] = (me) => ke("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "nodes" }]),
                onClick: z[7] || (z[7] = (me) => ke("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "debug-env" }]),
                onClick: z[8] || (z[8] = (me) => ke("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            z[35] || (z[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", kw, [
              z[33] || (z[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "environments" }]),
                onClick: z[9] || (z[9] = (me) => ke("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "model-index" }]),
                onClick: z[10] || (z[10] = (me) => ke("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "settings" }]),
                onClick: z[11] || (z[11] = (me) => ke("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "debug-workspace" }]),
                onClick: z[12] || (z[12] = (me) => ke("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            z[36] || (z[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", bw, [
              z[34] || (z[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "export" }]),
                onClick: z[13] || (z[13] = (me) => ke("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "import" }]),
                onClick: z[14] || (z[14] = (me) => ke("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: ue.value === "remotes" }]),
                onClick: z[15] || (z[15] = (me) => ke("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", _w, [
            L.value ? (o(), s("div", $w, a(L.value), 1)) : !E.value && ue.value === "status" ? (o(), s("div", Cw, " Loading status... ")) : (o(), s(F, { key: 2 }, [
              ue.value === "status" ? (o(), I(la, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: E.value,
                onSwitchBranch: Ve,
                onCommitChanges: z[16] || (z[16] = (me) => We.value = !0),
                onSyncEnvironment: z[17] || (z[17] = (me) => je.value = !0),
                onViewWorkflows: z[18] || (z[18] = (me) => ke("workflows", "this-env")),
                onViewHistory: z[19] || (z[19] = (me) => ke("history", "this-env")),
                onViewDebug: z[20] || (z[20] = (me) => ke("debug-env", "this-env")),
                onRepairMissingModels: So
              }, null, 8, ["status"])) : ue.value === "workflows" ? (o(), I(iu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: Se
              }, null, 512)) : ue.value === "models-env" ? (o(), I(Wu, {
                key: 2,
                onNavigate: ze
              })) : ue.value === "branches" ? (o(), I(ba, {
                key: 3,
                branches: G.value,
                current: ((De = E.value) == null ? void 0 : De.branch) || null,
                onSwitch: O,
                onCreate: Z,
                onDelete: ge
              }, null, 8, ["branches", "current"])) : ue.value === "history" ? (o(), I(za, {
                key: 4,
                commits: R.value,
                onSelect: ut,
                onCheckout: H
              }, null, 8, ["commits"])) : ue.value === "nodes" ? (o(), I(Tm, {
                key: 5,
                onOpenNodeManager: Je
              })) : ue.value === "debug-env" ? (o(), I(Ug, { key: 6 })) : ue.value === "environments" ? (o(), I(Sh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: q,
                onSwitch: fe,
                onCreate: Io,
                onDelete: Mo
              }, null, 512)) : ue.value === "model-index" ? (o(), I(dm, {
                key: 8,
                onRefresh: Se
              })) : ue.value === "settings" ? (o(), I(Lg, { key: 9 })) : ue.value === "debug-workspace" ? (o(), I(Ng, { key: 10 })) : ue.value === "export" ? (o(), I(Uh, { key: 11 })) : ue.value === "import" ? (o(), I(k1, { key: 12 })) : ue.value === "remotes" ? (o(), I(fg, {
                key: 13,
                onToast: ct
              })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), I(O1, {
          key: 0,
          commit: M.value,
          onClose: z[21] || (z[21] = (me) => M.value = null),
          onCheckout: H,
          onCreateBranch: A
        }, null, 8, ["commit"])) : c("", !0),
        he.value ? (o(), I(W1, {
          key: 1,
          title: he.value.title,
          message: he.value.message,
          details: he.value.details,
          warning: he.value.warning,
          confirmLabel: he.value.confirmLabel,
          cancelLabel: he.value.cancelLabel,
          secondaryLabel: he.value.secondaryLabel,
          secondaryAction: he.value.secondaryAction,
          destructive: he.value.destructive,
          onConfirm: he.value.onConfirm,
          onCancel: z[22] || (z[22] = (me) => he.value = null),
          onSecondary: he.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        w(By, {
          show: Q.value,
          "from-environment": ((Ne = X.value) == null ? void 0 : Ne.name) || "unknown",
          "to-environment": U.value,
          onConfirm: nt,
          onClose: $o
        }, null, 8, ["show", "from-environment", "to-environment"]),
        We.value && E.value ? (o(), I(ho, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: z[23] || (z[23] = (me) => We.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : c("", !0),
        je.value && E.value ? (o(), I(rw, {
          key: 3,
          show: je.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: z[24] || (z[24] = (me) => je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        w(Zy, {
          show: se.value,
          state: _.value.state,
          progress: _.value.progress,
          message: _.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        xe.value ? (o(), s("div", xw, [
          e("div", Sw, [
            z[39] || (z[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", Iw, [
              z[37] || (z[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", Ew, a(be.value.message), 1),
              z[38] || (z[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        P.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: z[26] || (z[26] = $e((me) => P.value = !1, ["self"]))
        }, [
          e("div", Mw, [
            e("div", Rw, [
              z[41] || (z[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[25] || (z[25] = (me) => P.value = !1)
              }, [...z[40] || (z[40] = [
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
            e("div", Tw, [
              z[42] || (z[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", zw, [
                (o(!0), s(F, null, te(W.value, (me) => (o(), s("div", {
                  key: me.name,
                  class: le(["env-item", { current: me.is_current }])
                }, [
                  e("div", Lw, [
                    e("div", Dw, [
                      e("span", Nw, a(me.is_current ? "●" : "○"), 1),
                      e("span", Pw, a(me.name), 1),
                      me.current_branch ? (o(), s("span", Uw, "(" + a(me.current_branch) + ")", 1)) : c("", !0),
                      me.is_current ? (o(), s("span", Ow, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Bw, a(me.workflow_count) + " workflows • " + a(me.node_count) + " nodes ", 1)
                  ]),
                  me.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ot) => fe(me.name)
                  }, " SWITCH ", 8, Fw))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Aw, [
          w(Do, { name: "toast" }, {
            default: d(() => [
              (o(!0), s(F, null, te(Ge.value, (me) => (o(), s("div", {
                key: me.id,
                class: le(["toast", me.type])
              }, [
                e("span", Vw, a(me.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), jw = /* @__PURE__ */ J(Ww, [["__scopeId", "data-v-44184278"]]), Gw = { class: "item-header" }, qw = { class: "item-info" }, Hw = { class: "filename" }, Kw = { class: "metadata" }, Yw = { class: "size" }, Jw = {
  key: 0,
  class: "type"
}, Qw = { class: "item-actions" }, Xw = {
  key: 0,
  class: "progress-section"
}, Zw = { class: "progress-bar" }, e0 = { class: "progress-stats" }, t0 = { class: "downloaded" }, o0 = { class: "speed" }, s0 = {
  key: 0,
  class: "eta"
}, n0 = {
  key: 1,
  class: "status-msg paused"
}, a0 = {
  key: 2,
  class: "status-msg queued"
}, l0 = {
  key: 3,
  class: "status-msg completed"
}, i0 = {
  key: 4,
  class: "status-msg failed"
}, r0 = {
  key: 0,
  class: "retries"
}, d0 = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(f) {
      if (f === 0) return "?";
      const m = f / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const m = Math.floor(f / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (f, m) => (o(), s("div", {
      class: le(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Gw, [
        e("div", qw, [
          e("div", Hw, a(t.item.filename), 1),
          e("div", Kw, [
            e("span", Yw, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Jw, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Qw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Xw, [
        e("div", Zw, [
          e("div", {
            class: "progress-fill",
            style: et({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", e0, [
          e("span", t0, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", o0, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", s0, a(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", n0, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", a0, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", l0, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", i0, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", r0, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), St = /* @__PURE__ */ J(d0, [["__scopeId", "data-v-2110df65"]]), c0 = { class: "queue-title" }, u0 = { class: "count" }, m0 = { class: "queue-actions" }, v0 = { class: "action-label" }, f0 = {
  key: 0,
  class: "overall-progress"
}, g0 = { class: "progress-bar" }, h0 = {
  key: 0,
  class: "current-mini"
}, p0 = { class: "filename" }, y0 = { class: "speed" }, w0 = {
  key: 1,
  class: "queue-content"
}, k0 = {
  key: 0,
  class: "section"
}, b0 = {
  key: 1,
  class: "section"
}, _0 = { class: "section-header" }, $0 = { class: "section-label paused" }, C0 = { class: "items-list" }, x0 = {
  key: 2,
  class: "section"
}, S0 = { class: "section-header" }, I0 = { class: "section-label" }, E0 = { class: "items-list" }, M0 = {
  key: 3,
  class: "section"
}, R0 = { class: "section-header" }, T0 = { class: "section-label" }, z0 = { class: "items-list" }, L0 = {
  key: 4,
  class: "section"
}, D0 = { class: "section-header" }, N0 = { class: "section-label failed" }, P0 = { class: "items-list" }, U0 = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: v,
      pausedItems: f,
      hasItems: m,
      activeCount: l,
      cancelDownload: g,
      retryDownload: h,
      resumeDownload: i,
      resumeAllPaused: S,
      removeItem: b,
      clearCompleted: T
    } = Lt(), k = $(!1);
    let x = null;
    pt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: f.value.length,
        completed: p.value.length
      }),
      (R, G) => {
        x && (clearTimeout(x), x = null);
        const W = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, X = G && (G.active > 0 || G.paused > 0);
        W && X && (x = setTimeout(() => {
          T(), x = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = D(() => {
      var W;
      if (u.items.length === 0) return 0;
      const R = p.value.length, G = ((W = n.value) == null ? void 0 : W.progress) || 0;
      return Math.round((R + G / 100) / u.items.length * 100);
    });
    function B(R) {
      g(R);
    }
    function E(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, G) => (o(), I(Me, { to: "body" }, [
      ye(m) ? (o(), s("div", {
        key: 0,
        class: le(["model-download-queue", { minimized: !k.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (W) => k.value = !k.value)
        }, [
          e("div", c0, [
            G[4] || (G[4] = e("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", u0, "(" + a(ye(l)) + "/" + a(ye(u).items.length) + ")", 1)
          ]),
          e("div", m0, [
            e("span", v0, a(k.value ? "minimize" : "expand"), 1)
          ])
        ]),
        k.value ? (o(), s("div", w0, [
          ye(n) ? (o(), s("div", k0, [
            G[6] || (G[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(St, {
              item: ye(n),
              onCancel: G[1] || (G[1] = (W) => B(ye(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ye(f).length > 0 ? (o(), s("div", b0, [
            e("div", _0, [
              e("span", $0, "Paused (" + a(ye(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...W) => ye(S) && ye(S)(...W))
              }, "Resume All")
            ]),
            e("div", C0, [
              (o(!0), s(F, null, te(ye(f), (W) => (o(), I(St, {
                key: W.id,
                item: W,
                onResume: (X) => ye(i)(W.id),
                onRemove: (X) => ye(b)(W.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ye(r).length > 0 ? (o(), s("div", x0, [
            e("div", S0, [
              e("span", I0, "Queued (" + a(ye(r).length) + ")", 1)
            ]),
            e("div", E0, [
              (o(!0), s(F, null, te(ye(r), (W) => (o(), I(St, {
                key: W.id,
                item: W,
                onCancel: (X) => B(W.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ye(p).length > 0 ? (o(), s("div", M0, [
            e("div", R0, [
              e("span", T0, "Completed (" + a(ye(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...W) => ye(T) && ye(T)(...W))
              }, "Clear")
            ]),
            e("div", z0, [
              (o(!0), s(F, null, te(ye(p).slice(0, 3), (W) => (o(), I(St, {
                key: W.id,
                item: W,
                onRemove: (X) => ye(b)(W.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ye(v).length > 0 ? (o(), s("div", L0, [
            e("div", D0, [
              e("span", N0, "Failed (" + a(ye(v).length) + ")", 1)
            ]),
            e("div", P0, [
              (o(!0), s(F, null, te(ye(v), (W) => (o(), I(St, {
                key: W.id,
                item: W,
                onRetry: (X) => ye(h)(W.id),
                onRemove: (X) => ye(b)(W.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", f0, [
          e("div", g0, [
            e("div", {
              class: "progress-fill",
              style: et({ width: `${C.value}%` })
            }, null, 4)
          ]),
          ye(n) ? (o(), s("div", h0, [
            e("span", p0, a(ye(n).filename), 1),
            e("span", y0, a(E(ye(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), O0 = /* @__PURE__ */ J(U0, [["__scopeId", "data-v-60751cfa"]]), B0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', F0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', A0 = {
  comfy: B0,
  phosphor: F0
}, Jt = "comfy", po = "comfygit-theme";
let gt = null, yo = Jt;
function V0() {
  try {
    const t = localStorage.getItem(po);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function wo(t = Jt) {
  gt && gt.remove(), gt = document.createElement("style"), gt.id = "comfygit-theme-styles", gt.setAttribute("data-theme", t), gt.textContent = A0[t], document.head.appendChild(gt), document.body.setAttribute("data-comfygit-theme", t), yo = t;
  try {
    localStorage.setItem(po, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function W0() {
  return yo;
}
function j0(t) {
  wo(t);
}
const Qt = document.createElement("link");
Qt.rel = "stylesheet";
Qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qt);
const G0 = V0();
wo(G0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), j0(t);
  },
  getTheme: () => {
    const t = W0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let He = null, Fe = null, Rt = null, It = null, so = null;
const kt = $(null);
async function Nt() {
  var t;
  if (!((t = wt) != null && t.api)) return null;
  try {
    const u = await wt.api.fetchApi("/v2/comfygit/status");
    u.ok && (kt.value = await u.json());
  } catch {
  }
}
function q0() {
  if (!kt.value) return !1;
  const t = kt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || kt.value.has_changes;
}
function H0() {
  He && He.remove(), He = document.createElement("div"), He.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", He.appendChild(t), He.addEventListener("click", (r) => {
    r.target === He && jt();
  });
  const u = (r) => {
    r.key === "Escape" && (jt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Ht({
    render: () => Kt(jw, {
      onClose: jt,
      onStatusUpdate: (r) => {
        kt.value = r, Tt();
      }
    })
  }).mount(t), document.body.appendChild(He);
}
function jt() {
  He && (He.remove(), He = null);
}
function K0(t) {
  Et(), Fe = document.createElement("div"), Fe.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Fe.style.position = "fixed", Fe.style.top = `${u.bottom + 8}px`, Fe.style.right = `${window.innerWidth - u.right}px`, Fe.style.zIndex = "10001";
  const n = (p) => {
    Fe && !Fe.contains(p.target) && p.target !== t && (Et(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (Et(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Rt = Ht({
    render: () => Kt(ho, {
      status: kt.value,
      onClose: Et,
      onCommitted: () => {
        Et(), Nt().then(Tt);
      }
    })
  }), Rt.mount(Fe), document.body.appendChild(Fe);
}
function Et() {
  Rt && (Rt.unmount(), Rt = null), Fe && (Fe.remove(), Fe = null);
}
function Y0() {
  It || (It = document.createElement("div"), It.className = "comfygit-download-queue-root", so = Ht({
    render: () => Kt(O0)
  }), so.mount(It), document.body.appendChild(It), console.log("[ComfyGit] Model download queue mounted"));
}
let at = null;
function Tt() {
  if (!at) return;
  const t = at.querySelector(".commit-indicator");
  t && (t.style.display = q0() ? "block" : "none");
}
const ko = document.createElement("style");
ko.textContent = `
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
document.head.appendChild(ko);
wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = H0, at = document.createElement("button"), at.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", at.innerHTML = 'Commit <span class="commit-indicator"></span>', at.title = "Quick Commit", at.onclick = () => K0(at), t.appendChild(u), t.appendChild(at), (v = (p = wt.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (wt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Y0();
    const { loadPendingDownloads: n } = Lt();
    n(), await Nt(), Tt(), setInterval(async () => {
      await Nt(), Tt();
    }, 3e4);
    const r = wt.api;
    if (r) {
      let f = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, m = function() {
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
        const h = document.createElement("span");
        h.textContent = "Workflows updated - refresh required", g.appendChild(h);
        const i = document.createElement("button");
        i.textContent = "Refresh", i.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, i.onmouseover = () => i.style.background = "var(--comfy-input-bg)", i.onmouseout = () => i.style.background = "var(--comfy-menu-bg)", i.onclick = () => f(), g.appendChild(i);
        const S = document.createElement("button");
        S.textContent = "×", S.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, S.onmouseover = () => S.style.opacity = "1", S.onmouseout = () => S.style.opacity = "0.6", S.onclick = () => g.remove(), g.appendChild(S), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: h, workflow_name: i } = g.detail;
        console.log(`[ComfyGit] Workflow ${h}: ${i}`), await Nt(), Tt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (g) => {
        const h = g.detail != null;
        h && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : m()), l = h;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
