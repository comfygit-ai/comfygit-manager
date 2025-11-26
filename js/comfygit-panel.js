import { app as ot } from "../../scripts/app.js";
import { defineComponent as H, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as re, createBlock as C, resolveDynamicComponent as It, normalizeClass as Q, withCtx as a, toDisplayString as l, createVNode as v, createTextVNode as y, computed as D, Fragment as F, renderList as Z, normalizeStyle as Ze, ref as z, onMounted as ke, watch as Et, Teleport as Le, withModifiers as be, Transition as so, withKeys as Ge, onUnmounted as no, reactive as Vt, readonly as ao, unref as me, resolveComponent as lo, createSlots as At, TransitionGroup as io, createApp as zt, h as Mt } from "vue";
const ro = { class: "panel-layout" }, co = {
  key: 0,
  class: "panel-layout-header"
}, uo = {
  key: 1,
  class: "panel-layout-search"
}, mo = { class: "panel-layout-content" }, vo = {
  key: 2,
  class: "panel-layout-footer"
}, fo = /* @__PURE__ */ H({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", ro, [
      d.$slots.header ? (o(), n("div", co, [
        re(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", uo, [
        re(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", mo, [
        re(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", vo, [
        re(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), K = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, f] of d)
    s[i] = f;
  return s;
}, Ce = /* @__PURE__ */ K(fo, [["__scopeId", "data-v-21565df9"]]), go = {
  key: 0,
  class: "panel-title-prefix"
}, ho = {
  key: 1,
  class: "panel-title-prefix-theme"
}, po = /* @__PURE__ */ H({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), C(It(`h${t.level}`), {
      class: Q(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", go, l(t.prefix), 1)) : (o(), n("span", ho)),
        re(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yo = /* @__PURE__ */ K(po, [["__scopeId", "data-v-c3875efc"]]), wo = ["title"], bo = ["width", "height"], ko = /* @__PURE__ */ H({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (i) => d.$emit("click"))
    }, [
      (o(), n("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
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
      ])], 8, bo))
    ], 8, wo));
  }
}), Ft = /* @__PURE__ */ K(ko, [["__scopeId", "data-v-6fc7f16d"]]), _o = { class: "header-left" }, $o = {
  key: 0,
  class: "header-actions"
}, Co = /* @__PURE__ */ H({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: Q(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", _o, [
        v(yo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            y(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), C(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", $o, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ K(Co, [["__scopeId", "data-v-55a62cd6"]]), xo = {
  key: 0,
  class: "section-title-count"
}, So = {
  key: 1,
  class: "section-title-icon"
}, Io = /* @__PURE__ */ H({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), C(It(`h${t.level}`), {
      class: Q(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", xo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", So, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ K(Io, [["__scopeId", "data-v-559361eb"]]), Eo = { class: "status-grid" }, zo = { class: "status-grid__column" }, Mo = { class: "status-grid__title" }, Lo = { class: "status-grid__column status-grid__column--right" }, To = { class: "status-grid__title" }, Ro = /* @__PURE__ */ H({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Eo, [
      e("div", zo, [
        e("h4", Mo, l(t.leftTitle), 1),
        re(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Lo, [
        e("h4", To, l(t.rightTitle), 1),
        re(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Do = /* @__PURE__ */ K(Ro, [["__scopeId", "data-v-fe556068"]]), No = {
  key: 0,
  class: "status-item__icon"
}, Oo = {
  key: 1,
  class: "status-item__count"
}, Uo = { class: "status-item__label" }, Bo = /* @__PURE__ */ H({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = D(() => `status-item--${d.variant}`);
    return (i, f) => (o(), n("div", {
      class: Q(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", No, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Oo, l(t.count), 1)) : c("", !0),
      e("span", Uo, l(t.label), 1)
    ], 2));
  }
}), Ae = /* @__PURE__ */ K(Bo, [["__scopeId", "data-v-6f929183"]]), Po = { class: "issue-card__header" }, Vo = { class: "issue-card__icon" }, Ao = { class: "issue-card__title" }, Fo = {
  key: 0,
  class: "issue-card__content"
}, Wo = {
  key: 0,
  class: "issue-card__description"
}, Go = {
  key: 1,
  class: "issue-card__items"
}, jo = {
  key: 2,
  class: "issue-card__actions"
}, Ho = /* @__PURE__ */ H({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = D(() => `issue-card--${d.severity}`);
    return (i, f) => (o(), n("div", {
      class: Q(["issue-card", s.value])
    }, [
      e("div", Po, [
        e("span", Vo, l(t.icon), 1),
        e("h4", Ao, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Fo, [
        t.description ? (o(), n("p", Wo, l(t.description), 1)) : c("", !0),
        re(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Go, [
        (o(!0), n(F, null, Z(t.items, (w, h) => (o(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(w), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", jo, [
        re(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ K(Ho, [["__scopeId", "data-v-df6aa348"]]), Ko = ["type", "disabled"], qo = {
  key: 0,
  class: "spinner"
}, Jo = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Q(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", qo)) : c("", !0),
      t.loading ? c("", !0) : re(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ko));
  }
}), j = /* @__PURE__ */ K(Jo, [["__scopeId", "data-v-772abe47"]]), Yo = { class: "empty-state" }, Xo = {
  key: 0,
  class: "empty-icon"
}, Qo = { class: "empty-message" }, Zo = /* @__PURE__ */ H({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", Yo, [
      t.icon ? (o(), n("div", Xo, l(t.icon), 1)) : c("", !0),
      e("p", Qo, l(t.message), 1),
      t.actionLabel ? (o(), C(j, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          y(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ K(Zo, [["__scopeId", "data-v-4466284f"]]), es = { class: "branch-indicator" }, ts = { class: "branch-indicator__info" }, os = { class: "branch-indicator__label" }, ss = { class: "branch-indicator__name" }, ns = {
  key: 0,
  class: "branch-indicator__remote"
}, as = {
  key: 0,
  class: "branch-indicator__status"
}, ls = {
  key: 0,
  class: "branch-indicator__ahead"
}, is = {
  key: 1,
  class: "branch-indicator__behind"
}, rs = {
  key: 1,
  class: "branch-indicator__actions"
}, ds = /* @__PURE__ */ H({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", es, [
      e("div", ts, [
        e("span", os, l(t.label), 1),
        e("span", ss, l(t.branchName), 1),
        t.remote ? (o(), n("span", ns, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", as, [
        t.commitsAhead ? (o(), n("span", ls, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", is, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), n("div", rs, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ K(ds, [["__scopeId", "data-v-cb8dd50e"]]), us = /* @__PURE__ */ H({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: Q(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ K(us, [["__scopeId", "data-v-75e9eeb8"]]), ms = /* @__PURE__ */ H({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: Q(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ K(ms, [["__scopeId", "data-v-2f186e4c"]]), vs = { class: "detail-row" }, fs = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("div", vs, [
      v(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          y(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), C(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          y(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : re(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ce = /* @__PURE__ */ K(fs, [["__scopeId", "data-v-ef15664a"]]), gs = { class: "modal-header" }, hs = { class: "modal-body" }, ps = { class: "status-section" }, ys = {
  key: 0,
  class: "status-section"
}, ws = { class: "section-header-row" }, bs = {
  key: 0,
  class: "workflow-group"
}, ks = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
  key: 1,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, zs = { class: "workflow-list" }, Ms = { class: "workflow-name" }, Ls = { class: "workflow-issue" }, Ts = {
  key: 2,
  class: "workflow-group"
}, Rs = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Os = { class: "workflow-name" }, Us = {
  key: 3,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, Vs = { class: "workflow-list" }, As = { class: "workflow-name" }, Fs = {
  key: 4,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, Ks = {
  key: 5,
  class: "workflow-group"
}, qs = { class: "workflow-group-title" }, Js = { class: "expand-icon" }, Ys = {
  key: 0,
  class: "workflow-list"
}, Xs = { class: "workflow-name" }, Qs = {
  key: 1,
  class: "status-section"
}, Zs = {
  key: 0,
  class: "change-group"
}, en = { class: "change-group-header" }, tn = { class: "change-group-title" }, on = { class: "change-list" }, sn = { class: "node-name" }, nn = {
  key: 0,
  class: "dev-badge"
}, an = {
  key: 1,
  class: "change-group"
}, ln = { class: "change-group-header" }, rn = { class: "change-group-title" }, dn = { class: "change-list" }, cn = { class: "node-name" }, un = {
  key: 0,
  class: "dev-badge"
}, mn = {
  key: 2,
  class: "change-group"
}, vn = { class: "change-list" }, fn = { class: "change-item" }, gn = { class: "node-name" }, hn = {
  key: 3,
  class: "change-group"
}, pn = {
  key: 2,
  class: "status-section"
}, yn = {
  key: 0,
  class: "drift-item"
}, wn = { class: "drift-list" }, bn = {
  key: 0,
  class: "drift-list-more"
}, kn = {
  key: 1,
  class: "drift-item"
}, _n = { class: "drift-list" }, $n = {
  key: 0,
  class: "drift-list-more"
}, Cn = {
  key: 2,
  class: "drift-item"
}, xn = {
  key: 3,
  class: "drift-item"
}, Sn = {
  key: 3,
  class: "status-section"
}, In = { class: "info-box" }, En = { class: "drift-list" }, zn = {
  key: 0,
  class: "drift-list-more"
}, Mn = {
  key: 4,
  class: "status-section"
}, Ln = { class: "warning-box" }, Tn = {
  key: 5,
  class: "empty-state-inline"
}, Rn = { class: "modal-actions" }, Dn = /* @__PURE__ */ H({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, s = z(!1);
    ke(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (M, E) => {
      console.log("StatusDetailModal show prop changed from", E, "to", M);
    }, { immediate: !0 });
    const i = D(() => {
      var M, E, _;
      return ((_ = (E = (M = d.status) == null ? void 0 : M.workflows) == null ? void 0 : E.analyzed) == null ? void 0 : _.filter(
        (I) => I.status === "broken" && I.sync_state === "synced"
      )) || [];
    }), f = D(() => {
      var M, E, _;
      return ((_ = (E = (M = d.status) == null ? void 0 : M.workflows) == null ? void 0 : E.analyzed) == null ? void 0 : _.filter(
        (I) => I.status === "broken" && I.sync_state !== "synced"
      )) || [];
    }), w = D(() => {
      var M, E, _;
      return ((_ = (E = (M = d.status) == null ? void 0 : M.workflows) == null ? void 0 : E.synced) == null ? void 0 : _.filter((I) => {
        var x, R, $;
        const k = ($ = (R = (x = d.status) == null ? void 0 : x.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : $.find((g) => g.name === I);
        return !k || k.status !== "broken";
      })) || [];
    }), h = D(() => {
      var M, E, _, I, k;
      return (M = d.status) != null && M.workflows ? (((E = d.status.workflows.new) == null ? void 0 : E.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((I = d.status.workflows.deleted) == null ? void 0 : I.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = D(() => {
      var E, _, I;
      const M = (E = d.status) == null ? void 0 : E.git_changes;
      return M ? (((_ = M.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((I = M.nodes_removed) == null ? void 0 : I.length) ?? 0) > 0 || M.workflow_changes || M.has_other_changes : !1;
    }), r = D(() => {
      var M, E, _, I, k, x;
      return !h.value && !m.value && ((E = (M = d.status) == null ? void 0 : M.comparison) == null ? void 0 : E.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((x = (k = (I = d.status) == null ? void 0 : I.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), u = D(() => {
      var E, _;
      const M = (_ = (E = d.status) == null ? void 0 : E.git_changes) == null ? void 0 : _.workflow_changes;
      return M ? typeof M == "number" ? M : Object.keys(M).length : 0;
    });
    function b(M) {
      return typeof M == "string" ? M : M.name;
    }
    function p(M) {
      return typeof M == "object" && M.is_development === !0;
    }
    return (M, E) => {
      var _, I, k, x, R, $, g, S, L, te, Y, U, N, P, V, X, B, G, J, ne, se, fe;
      return o(), C(Le, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[5] || (E[5] = (oe) => M.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: E[4] || (E[4] = be(() => {
            }, ["stop"]))
          }, [
            e("div", gs, [
              E[6] || (E[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[0] || (E[0] = (oe) => M.$emit("close"))
              }, "✕")
            ]),
            e("div", hs, [
              e("div", ps, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...E[7] || (E[7] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                v(ce, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), n("div", ys, [
                e("div", ws, [
                  v(Ee, { level: "4" }, {
                    default: a(() => [...E[8] || (E[8] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: E[1] || (E[1] = (oe) => M.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", bs, [
                  e("div", ks, [
                    E[9] || (E[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), n(F, null, Z(i.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(oe.name), 1),
                      e("span", xs, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), n("div", Ss, [
                  e("div", Is, [
                    E[10] || (E[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", zs, [
                    (o(!0), n(F, null, Z(f.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ms, l(oe.name), 1),
                      e("span", Ls, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (I = (_ = t.status.workflows) == null ? void 0 : _.new) != null && I.length ? (o(), n("div", Ts, [
                  e("div", Rs, [
                    E[11] || (E[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ds, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(F, null, Z(t.status.workflows.new, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Os, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (x = (k = t.status.workflows) == null ? void 0 : k.modified) != null && x.length ? (o(), n("div", Us, [
                  e("div", Bs, [
                    E[12] || (E[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ps, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Vs, [
                    (o(!0), n(F, null, Z(t.status.workflows.modified, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", As, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (R = t.status.workflows) == null ? void 0 : R.deleted) != null && $.length ? (o(), n("div", Fs, [
                  e("div", Ws, [
                    E[13] || (E[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Gs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), n(F, null, Z(t.status.workflows.deleted, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                w.value.length ? (o(), n("div", Ks, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: E[2] || (E[2] = (oe) => s.value = !s.value)
                  }, [
                    E[14] || (E[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", qs, "SYNCED (" + l(w.value.length) + ")", 1),
                    e("span", Js, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ys, [
                    (o(!0), n(F, null, Z(w.value, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(oe), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), n("div", Qs, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...E[15] || (E[15] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (S = (g = t.status.git_changes) == null ? void 0 : g.nodes_added) != null && S.length ? (o(), n("div", Zs, [
                  e("div", en, [
                    E[16] || (E[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", tn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), n(F, null, Z(t.status.git_changes.nodes_added, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", sn, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", nn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (te = (L = t.status.git_changes) == null ? void 0 : L.nodes_removed) != null && te.length ? (o(), n("div", an, [
                  e("div", ln, [
                    E[17] || (E[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", rn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), n(F, null, Z(t.status.git_changes.nodes_removed, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", cn, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", un, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (Y = t.status.git_changes) != null && Y.workflow_changes ? (o(), n("div", mn, [
                  E[18] || (E[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", vn, [
                    e("div", fn, [
                      e("span", gn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (U = t.status.git_changes) != null && U.has_other_changes ? (o(), n("div", hn, [...E[19] || (E[19] = [
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
              (N = t.status.comparison) != null && N.is_synced ? c("", !0) : (o(), n("div", pn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...E[20] || (E[20] = [
                    y("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                E[21] || (E[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (V = (P = t.status.comparison) == null ? void 0 : P.missing_nodes) != null && V.length ? (o(), n("div", yn, [
                  v(ce, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", wn, [
                    (o(!0), n(F, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", bn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (B = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && B.length ? (o(), n("div", kn, [
                  v(ce, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", _n, [
                    (o(!0), n(F, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", $n, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (J = (G = t.status.comparison) == null ? void 0 : G.version_mismatches) != null && J.length ? (o(), n("div", Cn, [
                  v(ce, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (ne = t.status.comparison) != null && ne.packages_in_sync ? c("", !0) : (o(), n("div", xn, [
                  v(ce, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (fe = (se = t.status.comparison) == null ? void 0 : se.disabled_nodes) != null && fe.length ? (o(), n("div", Sn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...E[22] || (E[22] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", In, [
                  E[23] || (E[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", En, [
                  (o(!0), n(F, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (o(), n("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + l(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", zn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Mn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...E[24] || (E[24] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ln, [
                  E[25] || (E[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                E[26] || (E[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Tn, [...E[27] || (E[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Rn, [
              v(j, {
                variant: "secondary",
                onClick: E[3] || (E[3] = (oe) => M.$emit("close"))
              }, {
                default: a(() => [...E[28] || (E[28] = [
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
}), Nt = /* @__PURE__ */ K(Dn, [["__scopeId", "data-v-cbde957e"]]), Nn = { class: "health-section-header" }, On = { style: { "margin-top": "var(--cg-space-1)" } }, Un = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Bn = /* @__PURE__ */ H({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const s = t, i = z(!1), f = z(!1);
    ke(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function w() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function h() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      i.value = !1, r("view-workflows");
    }
    const r = d, u = D(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = D(() => {
      const $ = s.status.git_changes;
      return $.nodes_added.length > 0 || $.nodes_removed.length > 0 || $.workflow_changes || $.has_other_changes;
    }), p = D(() => u.value || b.value), M = D(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), E = D(() => s.status.git_changes.has_other_changes), _ = D(() => {
      var $;
      return (($ = s.status.workflows.analyzed) == null ? void 0 : $.filter(
        (g) => g.status === "broken" && g.sync_state === "synced"
      )) || [];
    }), I = D(() => {
      var $;
      return (($ = s.status.workflows.analyzed) == null ? void 0 : $.filter(
        (g) => g.status === "broken" && g.sync_state !== "synced"
      )) || [];
    }), k = D(() => _.value.length > 0 || I.value.length > 0), x = D(() => k.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), R = D(() => {
      const $ = [];
      return s.status.workflows.new.length > 0 && $.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && $.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && $.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && $.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && $.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${$.length > 0 ? $.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return ($, g) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: g[0] || (g[0] = (S) => f.value = !0),
            onMouseleave: g[1] || (g[1] = (S) => f.value = !1)
          }, [
            e("div", Nn, [
              v(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...g[11] || (g[11] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              v(so, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), C(j, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: w
                  }, {
                    default: a(() => [...g[12] || (g[12] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            v(Do, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), C(Ae, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), C(Ae, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), C(Ae, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                v(Ae, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), C(Ae, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), C(Ae, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), C(Ae, {
                  key: 2,
                  icon: "●",
                  count: M.value,
                  label: M.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                E.value ? (o(), C(Ae, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), C(Ae, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", On, [
            v(cs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                v(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: g[2] || (g[2] = (S) => $.$emit("switch-branch"))
                }, {
                  default: a(() => [...g[13] || (g[13] = [
                    y(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), C(Xe, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: g[3] || (g[3] = (S) => $.$emit("create-branch"))
              }, {
                default: a(() => [...g[14] || (g[14] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          x.value ? (o(), n("div", Un, [
            v(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...g[15] || (g[15] = [
                y(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (o(), C(Xe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map((S) => `${S.name} — ${S.issue_summary}`)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: g[4] || (g[4] = (S) => $.$emit("view-workflows"))
                }, {
                  default: a(() => [...g[16] || (g[16] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            I.value.length > 0 ? (o(), C(Xe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: I.value.map((S) => `${S.name} — ${S.issue_summary}`)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: g[5] || (g[5] = (S) => $.$emit("view-workflows"))
                }, {
                  default: a(() => [...g[17] || (g[17] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), C(Xe, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: g[6] || (g[6] = (S) => $.$emit("view-workflows"))
                }, {
                  default: a(() => [...g[18] || (g[18] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            p.value ? (o(), C(Xe, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: R.value
            }, {
              actions: a(() => [
                v(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h
                }, {
                  default: a(() => [...g[19] || (g[19] = [
                    y(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: g[7] || (g[7] = (S) => $.$emit("commit-changes"))
                }, {
                  default: a(() => [...g[20] || (g[20] = [
                    y(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), C(Xe, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                v(j, {
                  variant: "secondary",
                  size: "sm",
                  onClick: g[8] || (g[8] = (S) => $.$emit("view-debug"))
                }, {
                  default: a(() => [...g[21] || (g[21] = [
                    y(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                v(j, {
                  variant: "primary",
                  size: "sm",
                  onClick: g[9] || (g[9] = (S) => $.$emit("sync-environment"))
                }, {
                  default: a(() => [...g[22] || (g[22] = [
                    y(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !x.value && !b.value ? (o(), C(Oe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      v(Nt, {
        show: i.value,
        status: t.status,
        onClose: g[10] || (g[10] = (S) => i.value = !1),
        onNavigateWorkflows: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Pn = /* @__PURE__ */ K(Bn, [["__scopeId", "data-v-05737be6"]]), Vn = ["type", "value", "placeholder", "disabled"], An = /* @__PURE__ */ H({
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
  setup(t, { expose: d, emit: s }) {
    const i = t, f = s, w = z(null);
    function h(m) {
      const r = m.target.value;
      f("update:modelValue", r);
    }
    return ke(() => {
      i.autoFocus && w.value && w.value.focus();
    }), d({
      focus: () => {
        var m;
        return (m = w.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = w.value) == null ? void 0 : m.blur();
      }
    }), (m, r) => (o(), n("input", {
      ref_key: "inputRef",
      ref: w,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: Q(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        r[0] || (r[0] = Ge((u) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ge((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => m.$emit("blur"))
    }, null, 42, Vn));
  }
}), vt = /* @__PURE__ */ K(An, [["__scopeId", "data-v-0380d08f"]]), Fn = { class: "branch-create-form" }, Wn = { class: "form-actions" }, Gn = /* @__PURE__ */ H({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = z(""), f = D(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function w() {
      f.value && (s("create", i.value.trim()), i.value = "");
    }
    function h() {
      i.value = "", s("cancel");
    }
    return (m, r) => (o(), n("div", Fn, [
      v(vt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: w,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Wn, [
        v(j, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: w
        }, {
          default: a(() => [...r[1] || (r[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        v(j, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...r[2] || (r[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), jn = /* @__PURE__ */ K(Gn, [["__scopeId", "data-v-7c500394"]]), Hn = { class: "branch-list-item__indicator" }, Kn = { class: "branch-list-item__name" }, qn = {
  key: 0,
  class: "branch-list-item__actions"
}, Jn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Yn = /* @__PURE__ */ H({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: Q(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, [
      e("span", Hn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Kn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", qn, [
        re(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Jn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ K(Yn, [["__scopeId", "data-v-c6581a24"]]), Qn = {
  key: 2,
  class: "branch-list"
}, Zn = /* @__PURE__ */ H({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = z(!1);
    function f(h) {
      s("create", h), w();
    }
    function w() {
      i.value = !1;
    }
    return (h, m) => (o(), C(Ce, null, {
      header: a(() => [
        v(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            v(j, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (r) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...m[1] || (m[1] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", {
                    d: "M8 2v12M2 8h12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  })
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), C(jn, {
          key: 0,
          onCreate: f,
          onCancel: w
        })) : c("", !0),
        t.branches.length === 0 ? (o(), C(Oe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Qn, [
          (o(!0), n(F, null, Z(t.branches, (r) => (o(), C(Xn, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), C(j, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => h.$emit("switch", r.name)
              }, {
                default: a(() => [...m[2] || (m[2] = [
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
}), ea = /* @__PURE__ */ K(Zn, [["__scopeId", "data-v-763d6ec4"]]), ta = { class: "commit-list" }, oa = /* @__PURE__ */ H({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", ta, [
      re(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), sa = /* @__PURE__ */ K(oa, [["__scopeId", "data-v-8c5ee761"]]), na = { class: "commit-hash" }, aa = /* @__PURE__ */ H({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = D(() => d.hash.slice(0, d.length));
    return (i, f) => (o(), n("span", na, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ K(aa, [["__scopeId", "data-v-7c333cc6"]]), la = { class: "commit-message" }, ia = { class: "commit-date" }, ra = /* @__PURE__ */ H({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = d;
    function f() {
      s.clickable && i("click");
    }
    return (w, h) => (o(), n("div", {
      class: Q(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      v(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", la, l(t.message), 1),
      e("span", ia, l(t.relativeDate), 1),
      w.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = be(() => {
        }, ["stop"]))
      }, [
        re(w.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), da = /* @__PURE__ */ K(ra, [["__scopeId", "data-v-dd7c621b"]]), ca = /* @__PURE__ */ H({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), C(Ce, null, {
      header: a(() => [
        v(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), C(Oe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), C(sa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(F, null, Z(t.commits, (i) => (o(), C(da, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => d.$emit("select", i)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => d.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
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
}), ua = /* @__PURE__ */ K(ca, [["__scopeId", "data-v-981c3c64"]]), Rh = [
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
  ...Array(12).fill(null).map((t, d) => ({
    name: `synced-workflow-${d + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + d,
    model_count: 1 + d % 3,
    sync_state: "synced"
  }))
], Dh = {
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
}, ma = [
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
], Nh = [
  ...ma,
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
function ht() {
  return !1;
}
function Se() {
  const t = z(!1), d = z(null);
  async function s(q, ae) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const de = await window.app.api.fetchApi(q, ae);
    if (!de.ok) {
      const Je = await de.json().catch(() => ({}));
      throw new Error(Je.error || Je.message || `Request failed: ${de.status}`);
    }
    return de.json();
  }
  async function i(q = !1) {
    return s(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(q, ae = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ae })
    });
  }
  async function w(q = 10, ae = 0) {
    return s(`/v2/comfygit/log?limit=${q}&offset=${ae}`);
  }
  async function h(q) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function m() {
    return s("/v2/comfygit/branches");
  }
  async function r(q) {
    return s(`/v2/comfygit/commit/${q}`);
  }
  async function u(q, ae = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ae })
    });
  }
  async function b(q, ae = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ae })
    });
  }
  async function p(q, ae = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ae })
    });
  }
  async function M() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const q = await i();
        return [{
          name: q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function E(q) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: q })
    });
  }
  async function _() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(q, ae, de) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, pytorch_backend: ae, clone_from: de })
    });
  }
  async function k(q) {
    return s(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function x(q = !1) {
    try {
      return s(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ae = await i(q), de = [];
      return ae.workflows.new.forEach(($e) => {
        de.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), ae.workflows.modified.forEach(($e) => {
        de.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), ae.workflows.synced.forEach(($e) => {
        de.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), de;
    }
  }
  async function R(q) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function $(q) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function g(q, ae, de) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ae, install_models: de })
    });
  }
  async function S(q, ae, de) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ae, importance: de })
    });
  }
  async function L() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function te() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function Y(q, ae) {
    return s(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ae })
    });
  }
  async function U(q) {
    return s(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function N(q) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function P() {
    try {
      return s("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function V(q) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function X(q, ae) {
    try {
      const de = new URLSearchParams();
      return q && de.append("level", q), ae && de.append("lines", ae.toString()), s(`/v2/comfygit/debug/logs?${de}`);
    } catch {
      return [];
    }
  }
  async function B(q, ae) {
    try {
      const de = new URLSearchParams();
      return q && de.append("level", q), ae && de.append("lines", ae.toString()), s(`/v2/workspace/debug/logs?${de}`);
    } catch {
      return [];
    }
  }
  async function G() {
    try {
      return s("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function J(q) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function ne(q) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function se(q) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function fe() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function oe(q, ae) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ae })
    });
  }
  async function ze(q) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function pe(q, ae, de) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ae, push_url: de })
    });
  }
  async function et(q) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function ge(q) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function Me(q = "skip", ae = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ae
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: f,
    getHistory: w,
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: r,
    checkout: u,
    createBranch: b,
    switchBranch: p,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: E,
    getSwitchProgress: _,
    createEnvironment: I,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: x,
    getWorkflowDetails: R,
    resolveWorkflow: $,
    installWorkflowDeps: g,
    setModelImportance: S,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: te,
    updateModelSource: Y,
    deleteModel: U,
    downloadModel: N,
    // Settings
    getConfig: P,
    updateConfig: V,
    // Debug/Logs
    getEnvironmentLogs: X,
    getWorkspaceLogs: B,
    // Node Management
    getNodes: G,
    installNode: J,
    updateNode: ne,
    uninstallNode: se,
    // Git Remotes
    getRemotes: fe,
    addRemote: oe,
    removeRemote: ze,
    updateRemoteUrl: pe,
    fetchRemote: et,
    getRemoteSyncStatus: ge,
    // Environment Sync
    syncEnvironmentManually: Me
  };
}
const va = { class: "base-modal-header" }, fa = {
  key: 0,
  class: "base-modal-title"
}, ga = { class: "base-modal-body" }, ha = {
  key: 0,
  class: "base-modal-loading"
}, pa = {
  key: 1,
  class: "base-modal-error"
}, ya = {
  key: 0,
  class: "base-modal-footer"
}, wa = /* @__PURE__ */ H({
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
  setup(t, { emit: d }) {
    const s = t, i = d;
    function f() {
      s.closeOnOverlayClick && i("close");
    }
    function w(h) {
      h.key === "Escape" && i("close");
    }
    return ke(() => {
      document.addEventListener("keydown", w), document.body.style.overflow = "hidden";
    }), no(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = "";
    }), (h, m) => (o(), C(Le, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: Q(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", va, [
            re(h.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", fa, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (r) => h.$emit("close"))
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
          e("div", ga, [
            t.loading ? (o(), n("div", ha, "Loading...")) : t.error ? (o(), n("div", pa, l(t.error), 1)) : re(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), n("div", ya, [
            re(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), yt = /* @__PURE__ */ K(wa, [["__scopeId", "data-v-2125a0e6"]]), ba = ["type", "disabled"], ka = {
  key: 0,
  class: "spinner"
}, _a = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Q(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", ka)) : c("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, ba));
  }
}), ie = /* @__PURE__ */ K(_a, [["__scopeId", "data-v-f3452606"]]), $a = {
  key: 0,
  class: "base-title-count"
}, Ca = /* @__PURE__ */ H({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), C(It(`h${t.level}`), {
      class: Q(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", $a, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ K(Ca, [["__scopeId", "data-v-5a01561d"]]), xa = ["value", "disabled"], Sa = {
  key: 0,
  value: "",
  disabled: ""
}, Ia = ["value"], Ea = {
  key: 0,
  class: "base-select-error"
}, za = /* @__PURE__ */ H({
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
    function d(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, f) => (o(), n("div", {
      class: Q(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: Q(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (w) => i.$emit("update:modelValue", w.target.value))
      }, [
        t.placeholder ? (o(), n("option", Sa, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(F, null, Z(t.options, (w) => (o(), n("option", {
          key: d(w),
          value: d(w)
        }, l(s(w)), 9, Ia))), 128))
      ], 42, xa),
      t.error ? (o(), n("span", Ea, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ K(za, [["__scopeId", "data-v-7436d745"]]), La = { class: "popover-header" }, Ta = { class: "popover-title" }, Ra = { class: "popover-content" }, Da = {
  key: 0,
  class: "popover-actions"
}, Na = /* @__PURE__ */ H({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), C(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ze({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", La, [
            e("h4", Ta, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ra, [
            re(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Da, [
            re(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ K(Na, [["__scopeId", "data-v-42815ace"]]), Oa = { class: "detail-section" }, Ua = {
  key: 0,
  class: "empty-message"
}, Ba = { class: "model-header" }, Pa = { class: "model-name" }, Va = { class: "model-details" }, Aa = { class: "model-row" }, Fa = { class: "model-row" }, Wa = { class: "label" }, Ga = {
  key: 0,
  class: "model-row model-row-nodes"
}, ja = { class: "node-list" }, Ha = ["onClick"], Ka = {
  key: 1,
  class: "model-row"
}, qa = { class: "value" }, Ja = {
  key: 0,
  class: "model-actions"
}, Ya = { class: "detail-section" }, Xa = {
  key: 0,
  class: "empty-message"
}, Qa = { class: "node-name" }, Za = {
  key: 0,
  class: "node-version"
}, el = /* @__PURE__ */ H({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: f, setModelImportance: w, installWorkflowDeps: h } = Se(), m = z(null), r = z(!1), u = z(null), b = z(!1), p = z({}), M = z({}), E = z(!1), _ = z(/* @__PURE__ */ new Set()), I = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(U) {
      switch (U) {
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
    function x(U) {
      switch (U) {
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
    function R(U) {
      if (!U.loaded_by || U.loaded_by.length === 0) return [];
      const N = U.hash || U.filename;
      return _.value.has(N) ? U.loaded_by : U.loaded_by.slice(0, 3);
    }
    function $(U) {
      return _.value.has(U);
    }
    function g(U) {
      _.value.has(U) ? _.value.delete(U) : _.value.add(U), _.value = new Set(_.value);
    }
    async function S() {
      r.value = !0, u.value = null;
      try {
        m.value = await f(s.workflowName);
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function L(U, N) {
      p.value[U] = N, b.value = !0;
    }
    async function te() {
      if (!b.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [U, N] of Object.entries(p.value))
          await w(s.workflowName, U, N);
        i("refresh"), i("close");
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function Y(U) {
      M.value[U] = !0, u.value = null;
      try {
        await h(s.workflowName, !0, !1), await S();
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to install node";
      } finally {
        M.value[U] = !1;
      }
    }
    return ke(S), (U, N) => (o(), n(F, null, [
      v(yt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: N[5] || (N[5] = (P) => i("close"))
      }, {
        body: a(() => [
          m.value ? (o(), n(F, { key: 0 }, [
            e("section", Oa, [
              v(ct, { variant: "section" }, {
                default: a(() => [
                  y("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), n("div", Ua, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(F, null, Z(m.value.models, (P) => (o(), n("div", {
                key: P.hash || P.filename,
                class: "model-card"
              }, [
                e("div", Ba, [
                  N[7] || (N[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Pa, l(P.filename), 1)
                ]),
                e("div", Va, [
                  e("div", Aa, [
                    N[8] || (N[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: Q(["value", k(P.status)])
                    }, l(x(P.status)), 3)
                  ]),
                  e("div", Fa, [
                    e("span", Wa, [
                      N[9] || (N[9] = y(" Importance: ", -1)),
                      v(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: N[0] || (N[0] = (V) => E.value = !0)
                      })
                    ]),
                    v(Ma, {
                      "model-value": p.value[P.filename] || P.importance,
                      options: I,
                      "onUpdate:modelValue": (V) => L(P.filename, V)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  P.loaded_by && P.loaded_by.length > 0 ? (o(), n("div", Ga, [
                    N[10] || (N[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ja, [
                      (o(!0), n(F, null, Z(R(P), (V, X) => (o(), n("div", {
                        key: `${V.node_id}-${X}`,
                        class: "node-reference"
                      }, l(V.node_type) + " (Node #" + l(V.node_id) + ") ", 1))), 128)),
                      P.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (V) => g(P.hash || P.filename)
                      }, l($(P.hash || P.filename) ? "▼ Show less" : `▶ View all (${P.loaded_by.length})`), 9, Ha)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  P.size_mb ? (o(), n("div", Ka, [
                    N[11] || (N[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", qa, l(P.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                P.status !== "available" ? (o(), n("div", Ja, [
                  P.status === "downloadable" ? (o(), C(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: N[1] || (N[1] = (V) => i("resolve"))
                  }, {
                    default: a(() => [...N[12] || (N[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : P.status === "path_mismatch" ? (o(), C(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[2] || (N[2] = (V) => i("resolve"))
                  }, {
                    default: a(() => [...N[13] || (N[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), C(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[3] || (N[3] = (V) => i("resolve"))
                  }, {
                    default: a(() => [...N[14] || (N[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Ya, [
              v(ct, { variant: "section" }, {
                default: a(() => [
                  y("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), n("div", Xa, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(F, null, Z(m.value.nodes, (P) => (o(), n("div", {
                key: P.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Q(["node-status", P.status === "installed" ? "installed" : "missing"])
                }, l(P.status === "installed" ? "✓" : "✕"), 3),
                e("span", Qa, l(P.name), 1),
                P.version ? (o(), n("span", Za, "v" + l(P.version), 1)) : c("", !0),
                P.status === "missing" ? (o(), C(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: M.value[P.name],
                  onClick: (V) => Y(P.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...N[15] || (N[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          v(ie, {
            variant: "secondary",
            onClick: N[4] || (N[4] = (P) => i("close"))
          }, {
            default: a(() => [...N[16] || (N[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), C(ie, {
            key: 0,
            variant: "primary",
            onClick: te
          }, {
            default: a(() => [...N[17] || (N[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      v(je, {
        show: E.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (P) => E.value = !1)
      }, {
        content: a(() => [...N[18] || (N[18] = [
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
}), tl = /* @__PURE__ */ K(el, [["__scopeId", "data-v-0b14d32e"]]), ve = Vt({
  items: [],
  status: "idle"
});
let Ve = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ve.items.find((d) => d.id === t);
}
async function tt() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((d) => d.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ol(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", tt();
  }
}
async function ol(t) {
  return new Promise((d, s) => {
    Ve && (Ve.close(), Ve = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ve = f;
    let w = Date.now(), h = 0, m = !1;
    f.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), p = (b - w) / 1e3;
            if (p > 0.5) {
              const M = t.downloaded - h;
              if (t.speed = M / p, w = b, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const E = t.size - t.downloaded;
                t.eta = E / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), Ve = null, d();
            break;
          case "error":
            m = !0, f.close(), Ve = null, s(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ve = null, m || s(new Error("Connection lost"));
    };
  });
}
async function sl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const s of d.pending_downloads) {
      if (ve.items.some((f) => f.url === s.url && f.filename === s.filename))
        continue;
      const i = {
        id: Gt(),
        workflow: s.workflow,
        filename: s.filename,
        url: s.url,
        targetPath: s.target_path,
        size: s.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function wt() {
  function t(k) {
    for (const x of k) {
      if (ve.items.some(
        (g) => g.url === x.url && g.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(g.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const $ = {
        id: Gt(),
        workflow: x.workflow,
        filename: x.filename,
        url: x.url,
        targetPath: x.targetPath,
        size: x.size || 0,
        type: x.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push($);
    }
    ve.status === "idle" && tt();
  }
  async function d(k) {
    const x = _t(k);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), x.status = "failed", x.error = "Cancelled by user", ve.status = "idle", tt();
      } else if (x.status === "queued") {
        const R = ve.items.findIndex(($) => $.id === k);
        R >= 0 && ve.items.splice(R, 1);
      }
    }
  }
  function s(k) {
    const x = _t(k);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, ve.status === "idle" && tt());
  }
  function i(k) {
    const x = _t(k);
    !x || x.status !== "paused" || (x.status = "queued", ve.status === "idle" && tt());
  }
  function f() {
    const k = ve.items.filter((x) => x.status === "paused");
    for (const x of k)
      x.status = "queued";
    ve.status === "idle" && tt();
  }
  function w(k) {
    const x = ve.items.findIndex((R) => R.id === k);
    x >= 0 && ["completed", "failed", "paused"].includes(ve.items[x].status) && ve.items.splice(x, 1);
  }
  function h() {
    ve.items = ve.items.filter((k) => k.status !== "completed");
  }
  function m() {
    ve.items = ve.items.filter((k) => k.status !== "failed");
  }
  const r = D(
    () => ve.items.find((k) => k.status === "downloading")
  ), u = D(
    () => ve.items.filter((k) => k.status === "queued")
  ), b = D(
    () => ve.items.filter((k) => k.status === "completed")
  ), p = D(
    () => ve.items.filter((k) => k.status === "failed")
  ), M = D(
    () => ve.items.filter((k) => k.status === "paused")
  ), E = D(() => ve.items.length > 0), _ = D(
    () => ve.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), I = D(
    () => ve.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ao(ve),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: b,
    failedItems: p,
    pausedItems: M,
    hasItems: E,
    activeCount: _,
    hasPaused: I,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: w,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: sl
  };
}
function nl() {
  const t = z(null), d = z(null), s = z([]), i = z([]), f = z(!1), w = z(null);
  async function h(k, x) {
    var $;
    if (!(($ = window.app) != null && $.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(k, x);
    if (!R.ok) {
      const g = await R.json().catch(() => ({})), S = g.error || g.message || `Request failed: ${R.status}`;
      throw new Error(S);
    }
    return R.json();
  }
  async function m(k) {
    f.value = !0, w.value = null;
    try {
      let x;
      return ht() || (x = await h(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const R = x instanceof Error ? x.message : "Unknown error occurred";
      throw w.value = R, x;
    } finally {
      f.value = !1;
    }
  }
  async function r(k, x, R) {
    f.value = !0, w.value = null;
    try {
      let $;
      if (!ht()) {
        const g = Object.fromEntries(x), S = Object.fromEntries(R);
        $ = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: g,
              model_choices: S
            })
          }
        );
      }
      return d.value = $, $;
    } catch ($) {
      const g = $ instanceof Error ? $.message : "Unknown error occurred";
      throw w.value = g, $;
    } finally {
      f.value = !1;
    }
  }
  async function u(k, x = 10) {
    f.value = !0, w.value = null;
    try {
      let R;
      return ht() || (R = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: x })
        }
      )), s.value = R.results, R.results;
    } catch (R) {
      const $ = R instanceof Error ? R.message : "Unknown error occurred";
      throw w.value = $, R;
    } finally {
      f.value = !1;
    }
  }
  async function b(k, x = 10) {
    f.value = !0, w.value = null;
    try {
      let R;
      return ht() || (R = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: x })
        }
      )), i.value = R.results, R.results;
    } catch (R) {
      const $ = R instanceof Error ? R.message : "Unknown error occurred";
      throw w.value = $, R;
    } finally {
      f.value = !1;
    }
  }
  const p = Vt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function M() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.error = void 0;
  }
  async function E(k, x, R) {
    M(), p.phase = "resolving", w.value = null;
    const $ = Object.fromEntries(x), g = Object.fromEntries(R);
    try {
      const S = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: $,
          model_choices: g
        })
      });
      if (!S.ok)
        throw new Error(`Request failed: ${S.status}`);
      if (!S.body)
        throw new Error("No response body");
      const L = S.body.getReader(), te = new TextDecoder();
      let Y = "";
      for (; ; ) {
        const { done: U, value: N } = await L.read();
        if (U) break;
        Y += te.decode(N, { stream: !0 });
        const P = Y.split(`

`);
        Y = P.pop() || "";
        for (const V of P) {
          if (!V.trim()) continue;
          const X = V.split(`
`);
          let B = "", G = "";
          for (const J of X)
            J.startsWith("event: ") ? B = J.slice(7) : J.startsWith("data: ") && (G = J.slice(6));
          if (G)
            try {
              const J = JSON.parse(G);
              _(B, J);
            } catch (J) {
              console.warn("Failed to parse SSE event:", J);
            }
        }
      }
    } catch (S) {
      const L = S instanceof Error ? S.message : "Unknown error occurred";
      throw w.value = L, p.error = L, p.phase = "error", S;
    }
  }
  function _(k, x) {
    switch (k) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = x.total;
        break;
      case "file_start":
        p.currentFile = x.filename, p.currentFileIndex = x.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = x.downloaded, p.bytesTotal = x.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = x.nodes_to_install || [], x.download_results && (p.completedFiles = x.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = x.message, p.phase = "error", w.value = x.message;
        break;
    }
  }
  function I(k, x) {
    const { addToQueue: R } = wt(), $ = x.filter((g) => g.url && g.target_path).map((g) => ({
      workflow: k,
      filename: g.filename,
      url: g.url,
      targetPath: g.target_path,
      size: g.size || 0,
      type: "model"
    }));
    return $.length > 0 && R($), $.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: i,
    isLoading: f,
    error: w,
    progress: p,
    // Methods
    analyzeWorkflow: m,
    applyResolution: r,
    applyResolutionWithProgress: E,
    searchNodes: u,
    searchModels: b,
    resetProgress: M,
    queueModelDownloads: I
  };
}
const al = { class: "resolution-stepper" }, ll = { class: "stepper-header" }, il = ["onClick"], rl = {
  key: 0,
  class: "step-icon"
}, dl = {
  key: 1,
  class: "step-number"
}, cl = { class: "step-label" }, ul = {
  key: 0,
  class: "step-connector"
}, ml = { class: "stepper-content" }, vl = /* @__PURE__ */ H({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const s = t, i = d;
    function f(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.total > 0 && p.resolved === p.total;
      }
      return s.completedSteps.includes(u);
    }
    function w(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function h(u) {
      return f(u) ? "state-complete" : w(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, b) => (o(), n("div", al, [
      e("div", ll, [
        (o(!0), n(F, null, Z(t.steps, (p, M) => (o(), n("div", {
          key: p.id,
          class: Q(["step", {
            active: t.currentStep === p.id,
            completed: f(p.id),
            "in-progress": w(p.id),
            disabled: m(p.id)
          }]),
          onClick: (E) => r(p.id)
        }, [
          e("div", {
            class: Q(["step-indicator", h(p.id)])
          }, [
            f(p.id) ? (o(), n("span", rl, "✓")) : (o(), n("span", dl, l(M + 1), 1))
          ], 2),
          e("div", cl, l(p.label), 1),
          M < t.steps.length - 1 ? (o(), n("div", ul)) : c("", !0)
        ], 10, il))), 128))
      ]),
      e("div", ml, [
        re(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), fl = /* @__PURE__ */ K(vl, [["__scopeId", "data-v-2a7b3af8"]]), gl = /* @__PURE__ */ H({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = D(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${s.value}`), f = D(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (w, h) => (o(), n("span", {
      class: Q(["confidence-badge", i.value, t.size])
    }, l(f.value), 3));
  }
}), Lt = /* @__PURE__ */ K(gl, [["__scopeId", "data-v-17ec4b80"]]), hl = { class: "node-info" }, pl = { class: "node-info-text" }, yl = { class: "item-body" }, wl = {
  key: 0,
  class: "resolved-state"
}, bl = {
  key: 1,
  class: "multiple-options"
}, kl = { class: "options-list" }, _l = ["onClick"], $l = ["name", "value", "checked", "onChange"], Cl = { class: "option-content" }, xl = { class: "option-header" }, Sl = { class: "option-package-id" }, Il = {
  key: 0,
  class: "option-title"
}, El = { class: "option-meta" }, zl = {
  key: 0,
  class: "installed-badge"
}, Ml = { class: "action-buttons" }, Ll = {
  key: 2,
  class: "unresolved"
}, Tl = { class: "action-buttons" }, Rl = /* @__PURE__ */ H({
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
  setup(t, { emit: d }) {
    const s = t, i = d, f = D(() => !!s.choice);
    D(() => {
      var m;
      return (m = s.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m;
      return (m = s.choice) == null ? void 0 : m.package_id;
    });
    const w = D(() => {
      switch (s.status) {
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
    function h(m) {
      i("option-selected", m);
    }
    return (m, r) => (o(), n("div", {
      class: Q(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", hl, [
        e("span", pl, [
          r[7] || (r[7] = y("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: Q(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", yl, [
        f.value ? (o(), n("div", wl, [
          v(ie, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (u) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", bl, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", kl, [
            (o(!0), n(F, null, Z(t.options, (u, b) => (o(), n("label", {
              key: u.package_id,
              class: Q(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (p) => h(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (p) => h(b)
              }, null, 40, $l),
              e("div", Cl, [
                e("div", xl, [
                  e("span", Sl, l(u.package_id), 1),
                  v(Lt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), n("div", Il, l(u.title), 1)) : c("", !0),
                e("div", El, [
                  u.is_installed ? (o(), n("span", zl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, _l))), 128))
          ]),
          e("div", Ml, [
            v(ie, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (u) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ll, [
          r[16] || (r[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Tl, [
            v(ie, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (u) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Dl = /* @__PURE__ */ K(Rl, [["__scopeId", "data-v-e02629e7"]]), Nl = { class: "item-navigator" }, Ol = { class: "nav-item-info" }, Ul = ["title"], Bl = { class: "nav-controls" }, Pl = { class: "nav-arrows" }, Vl = ["disabled"], Al = ["disabled"], Fl = { class: "nav-position" }, Wl = /* @__PURE__ */ H({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, f) => (o(), n("div", Nl, [
      e("div", Ol, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Ul)
      ]),
      e("div", Bl, [
        e("div", Pl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (w) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Vl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (w) => s("next")),
            title: "Next item"
          }, " → ", 8, Al)
        ]),
        e("span", Fl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ K(Wl, [["__scopeId", "data-v-74af7920"]]), Gl = ["type", "value", "placeholder", "disabled"], jl = {
  key: 0,
  class: "base-input-error"
}, Hl = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("div", {
      class: Q(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: Q(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Gl),
      t.error ? (o(), n("span", jl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ K(Hl, [["__scopeId", "data-v-9ba02cdc"]]), Kl = { class: "node-resolution-step" }, ql = { class: "step-header" }, Jl = { class: "stat-badge" }, Yl = {
  key: 1,
  class: "step-body"
}, Xl = {
  key: 2,
  class: "empty-state"
}, Ql = { class: "node-search-modal" }, Zl = { class: "node-modal-body" }, ei = {
  key: 0,
  class: "node-search-results"
}, ti = ["onClick"], oi = { class: "node-result-header" }, si = { class: "node-result-package-id" }, ni = {
  key: 0,
  class: "node-result-description"
}, ai = {
  key: 1,
  class: "node-no-results"
}, li = {
  key: 2,
  class: "node-searching"
}, ii = { class: "node-manual-entry-modal" }, ri = { class: "node-modal-body" }, di = { class: "node-modal-actions" }, ci = /* @__PURE__ */ H({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = z(0), w = z(!1), h = z(!1), m = z(""), r = z(""), u = z([]), b = z(!1), p = D(() => s.nodes[f.value]), M = D(() => s.nodes.filter((P) => s.nodeChoices.has(P.node_type)).length), E = D(() => {
      var V;
      if (!p.value) return "not-found";
      const P = s.nodeChoices.get(p.value.node_type);
      if (P)
        switch (P.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (V = p.value.options) != null && V.length ? "ambiguous" : "not-found";
    }), _ = D(() => {
      var V;
      if (!p.value) return;
      const P = s.nodeChoices.get(p.value.node_type);
      if (P)
        switch (P.action) {
          case "install":
            return P.package_id ? `→ ${P.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (V = p.value.options) != null && V.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function I(P) {
      P >= 0 && P < s.nodes.length && (f.value = P);
    }
    function k() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function x() {
      p.value && i("skip", p.value.node_type);
    }
    function R(P) {
      p.value && i("option-selected", p.value.node_type, P);
    }
    function $() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function g() {
      p.value && (m.value = p.value.node_type, w.value = !0);
    }
    function S() {
      r.value = "", h.value = !0;
    }
    function L() {
      w.value = !1, m.value = "", u.value = [];
    }
    function te() {
      h.value = !1, r.value = "";
    }
    function Y() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function U(P) {
      p.value && (i("manual-entry", p.value.node_type, P.package_id), L());
    }
    function N() {
      !p.value || !r.value.trim() || (i("manual-entry", p.value.node_type, r.value.trim()), te());
    }
    return (P, V) => {
      var X, B;
      return o(), n("div", Kl, [
        e("div", ql, [
          V[4] || (V[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Jl, l(M.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        p.value ? (o(), C(jt, {
          key: 0,
          "item-name": p.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: V[0] || (V[0] = (G) => I(f.value - 1)),
          onNext: V[1] || (V[1] = (G) => I(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        p.value ? (o(), n("div", Yl, [
          v(Dl, {
            "node-type": p.value.node_type,
            "has-multiple-options": !!((X = p.value.options) != null && X.length),
            options: p.value.options,
            choice: (B = t.nodeChoices) == null ? void 0 : B.get(p.value.node_type),
            status: E.value,
            "status-label": _.value,
            onMarkOptional: k,
            onSkip: x,
            onManualEntry: S,
            onSearch: g,
            onOptionSelected: R,
            onClearChoice: $
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Xl, [...V[5] || (V[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), C(Le, { to: "body" }, [
          w.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(L, ["self"])
          }, [
            e("div", Ql, [
              e("div", { class: "node-modal-header" }, [
                V[6] || (V[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Zl, [
                v(qe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": V[2] || (V[2] = (G) => m.value = G),
                  placeholder: "Search by node type, package name...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", ei, [
                  (o(!0), n(F, null, Z(u.value, (G) => (o(), n("div", {
                    key: G.package_id,
                    class: "node-search-result-item",
                    onClick: (J) => U(G)
                  }, [
                    e("div", oi, [
                      e("code", si, l(G.package_id), 1),
                      G.match_confidence ? (o(), C(Lt, {
                        key: 0,
                        confidence: G.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    G.description ? (o(), n("div", ni, l(G.description), 1)) : c("", !0)
                  ], 8, ti))), 128))
                ])) : m.value && !b.value ? (o(), n("div", ai, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", li, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), C(Le, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(te, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                V[7] || (V[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              e("div", ri, [
                v(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": V[3] || (V[3] = (G) => r.value = G),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", di, [
                  v(ie, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: a(() => [...V[8] || (V[8] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(ie, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: N
                  }, {
                    default: a(() => [...V[9] || (V[9] = [
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
}), ui = /* @__PURE__ */ K(ci, [["__scopeId", "data-v-4fb196b1"]]), mi = { class: "node-info" }, vi = { class: "node-info-text" }, fi = { class: "item-body" }, gi = {
  key: 0,
  class: "resolved-state"
}, hi = {
  key: 1,
  class: "multiple-options"
}, pi = { class: "options-list" }, yi = ["onClick"], wi = ["name", "value", "checked", "onChange"], bi = { class: "option-content" }, ki = { class: "option-header" }, _i = { class: "option-filename" }, $i = { class: "option-meta" }, Ci = { class: "option-size" }, xi = { class: "option-category" }, Si = { class: "option-path" }, Ii = { class: "action-buttons" }, Ei = {
  key: 2,
  class: "unresolved"
}, zi = { class: "action-buttons" }, Mi = /* @__PURE__ */ H({
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
  setup(t, { emit: d }) {
    const s = t, i = d, f = D(() => !!s.choice);
    D(() => {
      var r;
      return (r = s.choice) == null ? void 0 : r.action;
    }), D(() => {
      var r, u;
      return ((u = (r = s.choice) == null ? void 0 : r.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const w = D(() => {
      switch (s.status) {
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
    function h(r) {
      i("option-selected", r);
    }
    function m(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (o(), n("div", {
      class: Q(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", mi, [
        e("span", vi, [
          u[7] || (u[7] = y("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: Q(["status-badge", w.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", fi, [
        f.value ? (o(), n("div", gi, [
          v(ie, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => i("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", hi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", pi, [
            (o(!0), n(F, null, Z(t.options, (b, p) => (o(), n("label", {
              key: b.model.hash,
              class: Q(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (M) => h(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (M) => h(p)
              }, null, 40, wi),
              e("div", bi, [
                e("div", ki, [
                  e("span", _i, l(b.model.filename), 1),
                  v(Lt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", $i, [
                  e("span", Ci, l(m(b.model.size)), 1),
                  e("span", xi, l(b.model.category), 1)
                ]),
                e("div", Si, l(b.model.relative_path), 1)
              ])
            ], 10, yi))), 128))
          ]),
          e("div", Ii, [
            v(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => i("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ei, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", zi, [
            v(ie, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => i("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Li = /* @__PURE__ */ K(Mi, [["__scopeId", "data-v-8a82fefa"]]), Ti = { class: "model-resolution-step" }, Ri = { class: "step-header" }, Di = { class: "step-info" }, Ni = { class: "step-title" }, Oi = { class: "step-description" }, Ui = { class: "stat-badge" }, Bi = {
  key: 1,
  class: "step-body"
}, Pi = {
  key: 2,
  class: "empty-state"
}, Vi = { class: "model-search-modal" }, Ai = { class: "model-modal-body" }, Fi = {
  key: 0,
  class: "model-search-results"
}, Wi = ["onClick"], Gi = { class: "model-result-header" }, ji = { class: "model-result-filename" }, Hi = { class: "model-result-meta" }, Ki = { class: "model-result-category" }, qi = { class: "model-result-size" }, Ji = {
  key: 0,
  class: "model-result-path"
}, Yi = {
  key: 1,
  class: "model-no-results"
}, Xi = {
  key: 2,
  class: "model-searching"
}, Qi = { class: "model-download-url-modal" }, Zi = { class: "model-modal-body" }, er = { class: "model-input-group" }, tr = { class: "model-input-group" }, or = { class: "model-modal-actions" }, sr = /* @__PURE__ */ H({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
    const s = {
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
    function i(ne) {
      var se;
      return ne && ((se = s[ne]) == null ? void 0 : se[0]) || null;
    }
    const f = t, w = d, h = z(0), m = z(!1), r = z(!1), u = z(""), b = z(""), p = z(""), M = z([]), E = z(!1), _ = D(() => f.models[h.value]), I = D(() => f.models.some((ne) => ne.is_download_intent)), k = D(() => f.models.filter(
      (ne) => f.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), x = D(() => {
      var se;
      if (!_.value) return "";
      const ne = i((se = _.value.reference) == null ? void 0 : se.node_type);
      return ne ? `${ne}/${_.value.filename}` : "";
    }), R = D(() => {
      var se;
      if (!_.value) return "not-found";
      const ne = f.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (se = _.value.options) != null && se.length ? "ambiguous" : "not-found";
    }), $ = D(() => {
      var se, fe;
      if (!_.value) return;
      const ne = f.modelChoices.get(_.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return (se = ne.selected_model) != null && se.filename ? `→ ${ne.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (fe = _.value.options) != null && fe.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function g(ne) {
      ne >= 0 && ne < f.models.length && (h.value = ne);
    }
    function S() {
      _.value && w("mark-optional", _.value.filename);
    }
    function L() {
      _.value && w("skip", _.value.filename);
    }
    function te(ne) {
      _.value && w("option-selected", _.value.filename, ne);
    }
    function Y() {
      _.value && w("clear-choice", _.value.filename);
    }
    function U() {
      _.value && (u.value = _.value.filename, m.value = !0);
    }
    function N() {
      _.value && (b.value = _.value.download_source || "", p.value = _.value.target_path || x.value, r.value = !0);
    }
    function P() {
      m.value = !1, u.value = "", M.value = [];
    }
    function V() {
      r.value = !1, b.value = "", p.value = "";
    }
    function X() {
      E.value = !0, setTimeout(() => {
        E.value = !1;
      }, 300);
    }
    function B(ne) {
      _.value && P();
    }
    function G() {
      !_.value || !b.value.trim() || (w("download-url", _.value.filename, b.value.trim(), p.value.trim() || void 0), V());
    }
    function J(ne) {
      if (!ne) return "Unknown";
      const se = ne / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, se) => {
      var fe, oe, ze;
      return o(), n("div", Ti, [
        e("div", Ri, [
          e("div", Di, [
            e("h3", Ni, l(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Oi, l(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ui, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), C(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: se[0] || (se[0] = (pe) => g(h.value - 1)),
          onNext: se[1] || (se[1] = (pe) => g(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        _.value ? (o(), n("div", Bi, [
          v(Li, {
            filename: _.value.filename,
            "node-type": ((fe = _.value.reference) == null ? void 0 : fe.node_type) || "Unknown",
            "has-multiple-options": !!((oe = _.value.options) != null && oe.length),
            options: _.value.options,
            choice: (ze = t.modelChoices) == null ? void 0 : ze.get(_.value.filename),
            status: R.value,
            "status-label": $.value,
            onMarkOptional: S,
            onSkip: L,
            onDownloadUrl: N,
            onSearch: U,
            onOptionSelected: te,
            onClearChoice: Y
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Pi, [...se[5] || (se[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), C(Le, { to: "body" }, [
          m.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(P, ["self"])
          }, [
            e("div", Vi, [
              e("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Ai, [
                v(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (pe) => u.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                M.value.length > 0 ? (o(), n("div", Fi, [
                  (o(!0), n(F, null, Z(M.value, (pe) => (o(), n("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (et) => B()
                  }, [
                    e("div", Gi, [
                      e("code", ji, l(pe.filename), 1)
                    ]),
                    e("div", Hi, [
                      e("span", Ki, l(pe.category), 1),
                      e("span", qi, l(J(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), n("div", Ji, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, Wi))), 128))
                ])) : u.value && !E.value ? (o(), n("div", Yi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                E.value ? (o(), n("div", Xi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), C(Le, { to: "body" }, [
          r.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(V, ["self"])
          }, [
            e("div", Qi, [
              e("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Zi, [
                e("div", er, [
                  se[8] || (se[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  v(qe, {
                    modelValue: b.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (pe) => b.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", tr, [
                  se[9] || (se[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  v(qe, {
                    modelValue: p.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (pe) => p.value = pe),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", or, [
                  v(ie, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: a(() => [...se[10] || (se[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(ie, {
                    variant: "primary",
                    disabled: !b.value.trim() || !p.value.trim(),
                    onClick: G
                  }, {
                    default: a(() => [...se[11] || (se[11] = [
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
}), nr = /* @__PURE__ */ K(sr, [["__scopeId", "data-v-c6acbada"]]), ar = { class: "applying-step" }, lr = {
  key: 0,
  class: "phase-content"
}, ir = {
  key: 1,
  class: "phase-content"
}, rr = { class: "completion-summary" }, dr = {
  key: 0,
  class: "summary-item info"
}, cr = { class: "summary-text" }, ur = {
  key: 2,
  class: "phase-content error"
}, mr = { class: "error-message" }, vr = /* @__PURE__ */ H({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", ar, [
      t.progress.phase === "resolving" ? (o(), n("div", lr, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", ir, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", rr, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", dr, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", cr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", ur, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", mr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), fr = /* @__PURE__ */ K(vr, [["__scopeId", "data-v-b4d7e0eb"]]), gr = {
  key: 0,
  class: "loading-state"
}, hr = {
  key: 1,
  class: "wizard-content"
}, pr = {
  key: 0,
  class: "step-content"
}, yr = { class: "analysis-summary" }, wr = { class: "analysis-header" }, br = { class: "summary-description" }, kr = { class: "stats-grid" }, _r = { class: "stat-card" }, $r = { class: "stat-items" }, Cr = { class: "stat-item success" }, xr = { class: "stat-count" }, Sr = {
  key: 0,
  class: "stat-item warning"
}, Ir = { class: "stat-count" }, Er = {
  key: 1,
  class: "stat-item error"
}, zr = { class: "stat-count" }, Mr = { class: "stat-card" }, Lr = { class: "stat-items" }, Tr = { class: "stat-item success" }, Rr = { class: "stat-count" }, Dr = {
  key: 0,
  class: "stat-item info"
}, Nr = { class: "stat-count" }, Or = {
  key: 1,
  class: "stat-item warning"
}, Ur = { class: "stat-count" }, Br = {
  key: 2,
  class: "stat-item error"
}, Pr = { class: "stat-count" }, Vr = {
  key: 0,
  class: "status-message warning"
}, Ar = { class: "status-text" }, Fr = {
  key: 1,
  class: "status-message info"
}, Wr = { class: "status-text" }, Gr = {
  key: 2,
  class: "status-message success"
}, jr = {
  key: 3,
  class: "step-content"
}, Hr = { class: "review-summary" }, Kr = { class: "review-stats" }, qr = { class: "review-stat" }, Jr = { class: "stat-value" }, Yr = { class: "review-stat" }, Xr = { class: "stat-value" }, Qr = { class: "review-stat" }, Zr = { class: "stat-value" }, ed = { class: "review-stat" }, td = { class: "stat-value" }, od = {
  key: 0,
  class: "review-section"
}, sd = { class: "section-title" }, nd = { class: "review-items" }, ad = { class: "item-name" }, ld = { class: "item-choice" }, id = {
  key: 0,
  class: "choice-badge install"
}, rd = {
  key: 1,
  class: "choice-badge optional"
}, dd = {
  key: 2,
  class: "choice-badge skip"
}, cd = {
  key: 1,
  class: "choice-badge pending"
}, ud = {
  key: 1,
  class: "review-section"
}, md = { class: "section-title" }, vd = { class: "review-items" }, fd = { class: "item-name" }, gd = { class: "item-choice" }, hd = {
  key: 0,
  class: "choice-badge install"
}, pd = {
  key: 1,
  class: "choice-badge download"
}, yd = {
  key: 2,
  class: "choice-badge optional"
}, wd = {
  key: 3,
  class: "choice-badge skip"
}, bd = {
  key: 4,
  class: "choice-badge skip"
}, kd = {
  key: 1,
  class: "choice-badge download"
}, _d = {
  key: 2,
  class: "choice-badge pending"
}, $d = {
  key: 2,
  class: "no-choices"
}, Cd = /* @__PURE__ */ H({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: f, applyResolution: w, queueModelDownloads: h, progress: m, resetProgress: r } = nl(), { loadPendingDownloads: u } = wt(), b = z(null), p = z(!1), M = z(!1), E = z(null), _ = z("analysis"), I = z([]), k = z(/* @__PURE__ */ new Map()), x = z(/* @__PURE__ */ new Map()), R = D(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return g.value && W.push({ id: "nodes", label: "Nodes" }), (S.value || L.value) && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), _.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), $ = D(() => b.value ? b.value.stats.needs_user_input : !1), g = D(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), S = D(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), L = D(() => b.value ? b.value.stats.download_intents > 0 : !1), te = D(() => b.value ? b.value.models.resolved.filter((W) => W.match_type === "download_intent").map((W) => ({
      filename: W.reference.widget_value,
      reference: W.reference,
      is_download_intent: !0,
      resolved_model: W.model,
      download_source: W.download_source,
      target_path: W.target_path
    })) : []), Y = D(() => {
      if (!b.value) return [];
      const W = b.value.nodes.unresolved.map((ee) => ({
        node_type: ee.reference.node_type,
        reason: ee.reason,
        is_unresolved: !0,
        options: void 0
      })), O = b.value.nodes.ambiguous.map((ee) => ({
        node_type: ee.reference.node_type,
        has_multiple_options: !0,
        options: ee.options.map((he) => ({
          package_id: he.package.package_id,
          title: he.package.title,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          is_installed: he.is_installed
        }))
      }));
      return [...W, ...O];
    }), U = D(() => {
      if (!b.value) return [];
      const W = b.value.models.unresolved.map((ee) => ({
        filename: ee.reference.widget_value,
        reference: ee.reference,
        reason: ee.reason,
        is_unresolved: !0,
        options: void 0
      })), O = b.value.models.ambiguous.map((ee) => ({
        filename: ee.reference.widget_value,
        reference: ee.reference,
        has_multiple_options: !0,
        options: ee.options.map((he) => ({
          model: he.model,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          has_download_source: he.has_download_source
        }))
      }));
      return [...W, ...O];
    }), N = D(() => {
      const W = U.value, O = te.value.map((ee) => ({
        filename: ee.filename,
        reference: ee.reference,
        is_download_intent: !0,
        resolved_model: ee.resolved_model,
        download_source: ee.download_source,
        target_path: ee.target_path,
        options: void 0
      }));
      return [...W, ...O];
    }), P = D(() => {
      let W = 0;
      for (const O of k.value.values())
        O.action === "install" && W++;
      for (const O of x.value.values())
        O.action === "select" && W++;
      return W;
    }), V = D(() => {
      let W = 0;
      for (const O of x.value.values())
        O.action === "download" && W++;
      return W;
    }), X = D(() => {
      let W = 0;
      for (const O of k.value.values())
        O.action === "optional" && W++;
      for (const O of x.value.values())
        O.action === "optional" && W++;
      return W;
    }), B = D(() => {
      let W = 0;
      for (const O of k.value.values())
        O.action === "skip" && W++;
      for (const O of x.value.values())
        O.action === "skip" && W++;
      for (const O of Y.value)
        k.value.has(O.node_type) || W++;
      for (const O of U.value)
        x.value.has(O.filename) || W++;
      return W;
    }), G = D(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, g.value) {
        const O = Y.value.length, ee = Y.value.filter(
          (he) => k.value.has(he.node_type)
        ).length;
        W.nodes = { resolved: ee, total: O };
      }
      if (S.value || L.value) {
        const O = N.value.length, ee = N.value.filter(
          (he) => x.value.has(he.filename) || he.is_download_intent
        ).length;
        W.models = { resolved: ee, total: O };
      }
      if (W.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const O = m.totalFiles || 1, ee = m.completedFiles.length;
        W.applying = { resolved: ee, total: O };
      }
      return W;
    });
    function J(W) {
      _.value = W;
    }
    function ne() {
      const W = R.value.findIndex((O) => O.id === _.value);
      W > 0 && (_.value = R.value[W - 1].id);
    }
    function se() {
      const W = R.value.findIndex((O) => O.id === _.value);
      W < R.value.length - 1 && (_.value = R.value[W + 1].id);
    }
    async function fe() {
      p.value = !0, E.value = null;
      try {
        b.value = await f(s.workflowName);
      } catch (W) {
        E.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function oe() {
      I.value.includes("analysis") || I.value.push("analysis"), g.value ? _.value = "nodes" : S.value || L.value ? _.value = "models" : _.value = "review";
    }
    function ze(W) {
      k.value.set(W, { action: "optional" });
    }
    function pe(W) {
      k.value.set(W, { action: "skip" });
    }
    function et(W, O) {
      var he;
      const ee = Y.value.find((Te) => Te.node_type === W);
      (he = ee == null ? void 0 : ee.options) != null && he[O] && k.value.set(W, {
        action: "install",
        package_id: ee.options[O].package_id
      });
    }
    function ge(W, O) {
      k.value.set(W, {
        action: "install",
        package_id: O
      });
    }
    function Me(W) {
      k.value.delete(W);
    }
    function q(W) {
      x.value.set(W, { action: "optional" });
    }
    function ae(W) {
      x.value.set(W, { action: "skip" });
    }
    function de(W, O) {
      var he;
      const ee = U.value.find((Te) => Te.filename === W);
      (he = ee == null ? void 0 : ee.options) != null && he[O] && x.value.set(W, {
        action: "select",
        selected_model: ee.options[O].model
      });
    }
    function $e(W, O, ee) {
      x.value.set(W, {
        action: "download",
        url: O,
        target_path: ee
      });
    }
    function Je(W) {
      x.value.delete(W);
    }
    async function bt() {
      M.value = !0, E.value = null, r(), m.phase = "resolving", _.value = "applying";
      try {
        const W = await w(s.workflowName, k.value, x.value);
        W.models_to_download && W.models_to_download.length > 0 && h(s.workflowName, W.models_to_download), m.nodesToInstall = W.nodes_to_install || [], m.phase = "complete", await u(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (W) {
        E.value = W instanceof Error ? W.message : "Failed to apply resolution", m.error = E.value, m.phase = "error";
      } finally {
        M.value = !1;
      }
    }
    return ke(fe), (W, O) => (o(), C(yt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: p.value,
      error: E.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (ee) => i("close"))
    }, {
      body: a(() => [
        p.value && !b.value ? (o(), n("div", gr, [...O[2] || (O[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", hr, [
          v(fl, {
            steps: R.value,
            "current-step": _.value,
            "completed-steps": I.value,
            "step-stats": G.value,
            onStepChange: J
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), n("div", pr, [
            e("div", yr, [
              e("div", wr, [
                O[3] || (O[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", br, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", kr, [
                e("div", _r, [
                  O[10] || (O[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", $r, [
                    e("div", Cr, [
                      O[4] || (O[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", xr, l(b.value.nodes.resolved.length), 1),
                      O[5] || (O[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", Sr, [
                      O[6] || (O[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ir, l(b.value.nodes.ambiguous.length), 1),
                      O[7] || (O[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", Er, [
                      O[8] || (O[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", zr, l(b.value.nodes.unresolved.length), 1),
                      O[9] || (O[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Mr, [
                  O[19] || (O[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Lr, [
                    e("div", Tr, [
                      O[11] || (O[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Rr, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      O[12] || (O[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Dr, [
                      O[13] || (O[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nr, l(b.value.stats.download_intents), 1),
                      O[14] || (O[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Or, [
                      O[15] || (O[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ur, l(b.value.models.ambiguous.length), 1),
                      O[16] || (O[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Br, [
                      O[17] || (O[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pr, l(b.value.models.unresolved.length), 1),
                      O[18] || (O[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              $.value ? (o(), n("div", Vr, [
                O[20] || (O[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ar, l(Y.value.length + U.value.length) + " items need your input", 1)
              ])) : L.value ? (o(), n("div", Fr, [
                O[21] || (O[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Wr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Gr, [...O[22] || (O[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), C(ui, {
            key: 1,
            nodes: Y.value,
            "node-choices": k.value,
            onMarkOptional: ze,
            onSkip: pe,
            onOptionSelected: et,
            onManualEntry: ge,
            onClearChoice: Me
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          _.value === "models" ? (o(), C(nr, {
            key: 2,
            models: N.value,
            "model-choices": x.value,
            onMarkOptional: q,
            onSkip: ae,
            onOptionSelected: de,
            onDownloadUrl: $e,
            onClearChoice: Je
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), n("div", jr, [
            e("div", Hr, [
              O[27] || (O[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Kr, [
                e("div", qr, [
                  e("span", Jr, l(P.value), 1),
                  O[23] || (O[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Yr, [
                  e("span", Xr, l(V.value), 1),
                  O[24] || (O[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Qr, [
                  e("span", Zr, l(X.value), 1),
                  O[25] || (O[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", ed, [
                  e("span", td, l(B.value), 1),
                  O[26] || (O[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Y.value.length > 0 ? (o(), n("div", od, [
                e("h4", sd, "Node Packages (" + l(Y.value.length) + ")", 1),
                e("div", nd, [
                  (o(!0), n(F, null, Z(Y.value, (ee) => {
                    var he, Te, Ue, Be;
                    return o(), n("div", {
                      key: ee.node_type,
                      class: "review-item"
                    }, [
                      e("code", ad, l(ee.node_type), 1),
                      e("div", ld, [
                        k.value.has(ee.node_type) ? (o(), n(F, { key: 0 }, [
                          ((he = k.value.get(ee.node_type)) == null ? void 0 : he.action) === "install" ? (o(), n("span", id, l((Te = k.value.get(ee.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ue = k.value.get(ee.node_type)) == null ? void 0 : Ue.action) === "optional" ? (o(), n("span", rd, " Optional ")) : ((Be = k.value.get(ee.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", dd, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", cd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              N.value.length > 0 ? (o(), n("div", ud, [
                e("h4", md, "Models (" + l(N.value.length) + ")", 1),
                e("div", vd, [
                  (o(!0), n(F, null, Z(N.value, (ee) => {
                    var he, Te, Ue, Be, ft, Pe, gt;
                    return o(), n("div", {
                      key: ee.filename,
                      class: "review-item"
                    }, [
                      e("code", fd, l(ee.filename), 1),
                      e("div", gd, [
                        x.value.has(ee.filename) ? (o(), n(F, { key: 0 }, [
                          ((he = x.value.get(ee.filename)) == null ? void 0 : he.action) === "select" ? (o(), n("span", hd, l((Ue = (Te = x.value.get(ee.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ue.filename), 1)) : ((Be = x.value.get(ee.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", pd, " Download ")) : ((ft = x.value.get(ee.filename)) == null ? void 0 : ft.action) === "optional" ? (o(), n("span", yd, " Optional ")) : ((Pe = x.value.get(ee.filename)) == null ? void 0 : Pe.action) === "skip" ? (o(), n("span", wd, " Skip ")) : ((gt = x.value.get(ee.filename)) == null ? void 0 : gt.action) === "cancel_download" ? (o(), n("span", bd, " Cancel Download ")) : c("", !0)
                        ], 64)) : ee.is_download_intent ? (o(), n("span", kd, " Pending Download ")) : (o(), n("span", _d, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              Y.value.length === 0 && N.value.length === 0 ? (o(), n("div", $d, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), C(fr, {
            key: 4,
            progress: me(m)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), C(ie, {
          key: 0,
          variant: "secondary",
          disabled: M.value,
          onClick: ne
        }, {
          default: a(() => [...O[28] || (O[28] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        O[31] || (O[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || me(m).phase === "complete" || me(m).phase === "error" ? (o(), C(ie, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (ee) => i("close"))
        }, {
          default: a(() => [
            y(l(me(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), C(ie, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: oe
        }, {
          default: a(() => [
            y(l($.value || L.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), C(ie, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [
            y(l(S.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), C(ie, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [...O[29] || (O[29] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), C(ie, {
          key: 5,
          variant: "primary",
          disabled: M.value,
          loading: M.value,
          onClick: bt
        }, {
          default: a(() => [...O[30] || (O[30] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), xd = /* @__PURE__ */ K(Cd, [["__scopeId", "data-v-08beb8e3"]]), Sd = { class: "search-input-wrapper" }, Id = ["value", "placeholder"], Ed = /* @__PURE__ */ H({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = z(null);
    let w;
    function h(r) {
      const u = r.target.value;
      s.debounce > 0 ? (clearTimeout(w), w = window.setTimeout(() => {
        i("update:modelValue", u);
      }, s.debounce)) : i("update:modelValue", u);
    }
    function m() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = f.value) == null || r.focus();
    }
    return ke(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (r, u) => (o(), n("div", Sd, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ge(m, ["escape"])
      }, null, 40, Id),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), zd = /* @__PURE__ */ K(Ed, [["__scopeId", "data-v-266f857a"]]), Md = { class: "search-bar" }, Ld = /* @__PURE__ */ H({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Md, [
      v(zd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ K(Ld, [["__scopeId", "data-v-3d51bbfd"]]), Td = { class: "section-group" }, Rd = {
  key: 0,
  class: "section-content"
}, Dd = /* @__PURE__ */ H({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = z(s.initiallyExpanded);
    function w() {
      s.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (h, m) => (o(), n("section", Td, [
      v(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: w
      }, {
        default: a(() => [
          y(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", Rd, [
        re(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), we = /* @__PURE__ */ K(Dd, [["__scopeId", "data-v-c48e33ed"]]), Nd = { class: "item-header" }, Od = {
  key: 0,
  class: "item-icon"
}, Ud = { class: "item-info" }, Bd = {
  key: 0,
  class: "item-title"
}, Pd = {
  key: 1,
  class: "item-subtitle"
}, Vd = {
  key: 0,
  class: "item-details"
}, Ad = {
  key: 1,
  class: "item-actions"
}, Fd = /* @__PURE__ */ H({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = D(() => s.status ? `status-${s.status}` : "");
    return (f, w) => (o(), n("div", {
      class: Q(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: w[0] || (w[0] = (h) => t.clickable && f.$emit("click"))
    }, [
      e("div", Nd, [
        f.$slots.icon ? (o(), n("span", Od, [
          re(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Ud, [
          f.$slots.title ? (o(), n("div", Bd, [
            re(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (o(), n("div", Pd, [
            re(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", Vd, [
        re(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (o(), n("div", Ad, [
        re(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), _e = /* @__PURE__ */ K(Fd, [["__scopeId", "data-v-cc435e0e"]]), Wd = { class: "loading-state" }, Gd = { class: "loading-message" }, jd = /* @__PURE__ */ H({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Wd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Gd, l(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ K(jd, [["__scopeId", "data-v-ad8436c9"]]), Hd = { class: "error-state" }, Kd = { class: "error-message" }, qd = /* @__PURE__ */ H({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Hd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Kd, l(t.message), 1),
      t.retry ? (o(), C(j, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ K(qd, [["__scopeId", "data-v-5397be48"]]), Jd = /* @__PURE__ */ H({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const i = s, { getWorkflows: f } = Se(), w = z([]), h = z(!1), m = z(null), r = z(""), u = z(!0), b = z(!1), p = z(!1), M = z(!1), E = z(null), _ = D(
      () => w.value.filter((B) => B.status === "broken")
    ), I = D(
      () => w.value.filter((B) => B.status === "new")
    ), k = D(
      () => w.value.filter((B) => B.status === "modified")
    ), x = D(
      () => w.value.filter((B) => B.status === "synced")
    ), R = D(() => {
      if (!r.value.trim()) return w.value;
      const B = r.value.toLowerCase();
      return w.value.filter((G) => G.name.toLowerCase().includes(B));
    }), $ = D(
      () => _.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), g = D(
      () => I.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), S = D(
      () => k.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), L = D(
      () => x.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), te = D(
      () => b.value ? L.value : L.value.slice(0, 5)
    );
    async function Y(B = !1) {
      h.value = !0, m.value = null;
      try {
        w.value = await f(B);
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    d({ loadWorkflows: Y });
    function U(B) {
      E.value = B, p.value = !0;
    }
    function N(B) {
      E.value = B, M.value = !0;
    }
    function P() {
      alert("Bulk resolution not yet implemented");
    }
    function V() {
      i("refresh");
    }
    function X(B) {
      const G = [];
      return B.missing_nodes > 0 && G.push(`${B.missing_nodes} missing node${B.missing_nodes > 1 ? "s" : ""}`), B.missing_models > 0 && G.push(`${B.missing_models} missing model${B.missing_models > 1 ? "s" : ""}`), B.pending_downloads && B.pending_downloads > 0 && G.push(`${B.pending_downloads} pending download${B.pending_downloads > 1 ? "s" : ""}`), G.length > 0 ? G.join(", ") : "Has issues";
    }
    return ke(Y), (B, G) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), C(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: a(() => [...G[8] || (G[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": G[0] || (G[0] = (J) => r.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), C(He, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), C(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            $.value.length ? (o(), C(we, {
              key: 0,
              title: "BROKEN",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z($.value, (J) => (o(), C(_e, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...G[9] || (G[9] = [
                    y("⚠", -1)
                  ])]),
                  title: a(() => [
                    y(l(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    y(l(X(J)), 1)
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => N(J.name)
                    }, {
                      default: a(() => [...G[10] || (G[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => U(J.name)
                    }, {
                      default: a(() => [...G[11] || (G[11] = [
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
            g.value.length ? (o(), C(we, {
              key: 1,
              title: "NEW",
              count: g.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(g.value, (J) => (o(), C(_e, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...G[12] || (G[12] = [
                    y("●", -1)
                  ])]),
                  title: a(() => [
                    y(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...G[13] || (G[13] = [
                    y("New", -1)
                  ])]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => U(J.name)
                    }, {
                      default: a(() => [...G[14] || (G[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), C(we, {
              key: 2,
              title: "MODIFIED",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(S.value, (J) => (o(), C(_e, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...G[15] || (G[15] = [
                    y("⚡", -1)
                  ])]),
                  title: a(() => [
                    y(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...G[16] || (G[16] = [
                    y("Modified", -1)
                  ])]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => U(J.name)
                    }, {
                      default: a(() => [...G[17] || (G[17] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (o(), C(we, {
              key: 3,
              title: "SYNCED",
              count: L.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: G[2] || (G[2] = (J) => u.value = J)
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(te.value, (J) => (o(), C(_e, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...G[18] || (G[18] = [
                    y("✓", -1)
                  ])]),
                  title: a(() => [
                    y(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...G[19] || (G[19] = [
                    y("Synced", -1)
                  ])]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => U(J.name)
                    }, {
                      default: a(() => [...G[20] || (G[20] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && L.value.length > 5 ? (o(), C(j, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: G[1] || (G[1] = (J) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    y(" View all " + l(L.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            R.value.length ? c("", !0) : (o(), C(Oe, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && E.value ? (o(), C(tl, {
        key: 0,
        "workflow-name": E.value,
        onClose: G[3] || (G[3] = (J) => p.value = !1),
        onResolve: G[4] || (G[4] = (J) => N(E.value)),
        onRefresh: G[5] || (G[5] = (J) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      M.value && E.value ? (o(), C(xd, {
        key: 1,
        "workflow-name": E.value,
        onClose: G[6] || (G[6] = (J) => M.value = !1),
        onInstall: V,
        onRefresh: G[7] || (G[7] = (J) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Yd = /* @__PURE__ */ K(Jd, [["__scopeId", "data-v-af6b1cd7"]]), Xd = /* @__PURE__ */ H({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: Q(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ K(Xd, [["__scopeId", "data-v-ccb7816e"]]), Qd = /* @__PURE__ */ H({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: f } = Se(), w = z([]), h = z([]), m = z("production"), r = z(!1), u = z(null), b = z(""), p = z(!1);
    function M() {
      p.value = !1, s("navigate", "model-index");
    }
    const E = D(
      () => w.value.reduce((Y, U) => Y + (U.size || 0), 0)
    ), _ = D(() => {
      if (!b.value.trim()) return w.value;
      const Y = b.value.toLowerCase();
      return w.value.filter((U) => U.filename.toLowerCase().includes(Y));
    }), I = D(() => {
      if (!b.value.trim()) return h.value;
      const Y = b.value.toLowerCase();
      return h.value.filter((U) => U.filename.toLowerCase().includes(Y));
    }), k = D(
      () => _.value.filter((Y) => Y.type === "checkpoints")
    ), x = D(
      () => _.value.filter((Y) => Y.type === "loras")
    ), R = D(
      () => _.value.filter((Y) => Y.type !== "checkpoints" && Y.type !== "loras")
    );
    function $(Y) {
      if (!Y) return "Unknown";
      const U = Y / (1024 * 1024);
      return U >= 1024 ? `${(U / 1024).toFixed(1)} GB` : `${U.toFixed(0)} MB`;
    }
    function g(Y) {
      s("navigate", "model-index");
    }
    function S(Y) {
      s("navigate", "model-index");
    }
    function L(Y) {
      alert(`Download functionality not yet implemented for ${Y}`);
    }
    async function te() {
      r.value = !0, u.value = null;
      try {
        const Y = await i();
        w.value = Y, h.value = [];
        const U = await f();
        m.value = U.environment || "production";
      } catch (Y) {
        u.value = Y instanceof Error ? Y.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return ke(te), (Y, U) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (N) => p.value = !0)
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: b.value,
            "onUpdate:modelValue": U[1] || (U[1] = (N) => b.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), C(He, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), C(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            w.value.length ? (o(), C(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                y(" Total: " + l(w.value.length) + " models • " + l($(E.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), C(we, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(k.value, (N) => (o(), C(_e, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[3] || (U[3] = [
                    y("📦", -1)
                  ])]),
                  title: a(() => [
                    y(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    y(l($(N.size)), 1)
                  ]),
                  details: a(() => [
                    v(ce, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(ce, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => g(N.hash)
                    }, {
                      default: a(() => [...U[4] || (U[4] = [
                        y(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), C(we, {
              key: 2,
              title: "LORAS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(x.value, (N) => (o(), C(_e, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[5] || (U[5] = [
                    y("📦", -1)
                  ])]),
                  title: a(() => [
                    y(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    y(l($(N.size)), 1)
                  ]),
                  details: a(() => [
                    v(ce, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(ce, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => g(N.hash)
                    }, {
                      default: a(() => [...U[6] || (U[6] = [
                        y(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (o(), C(we, {
              key: 3,
              title: "OTHER",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(R.value, (N) => (o(), C(_e, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[7] || (U[7] = [
                    y("📦", -1)
                  ])]),
                  title: a(() => [
                    y(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    y(l($(N.size)), 1)
                  ]),
                  details: a(() => [
                    v(ce, {
                      label: "Type:",
                      value: N.type
                    }, null, 8, ["value"]),
                    v(ce, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => g(N.hash)
                    }, {
                      default: a(() => [...U[8] || (U[8] = [
                        y(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            I.value.length ? (o(), C(we, {
              key: 4,
              title: "MISSING",
              count: I.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(I.value, (N) => (o(), C(_e, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...U[9] || (U[9] = [
                    y("⚠", -1)
                  ])]),
                  title: a(() => [
                    y(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [...U[10] || (U[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var P;
                    return [
                      v(ce, {
                        label: "Required by:",
                        value: ((P = N.workflow_names) == null ? void 0 : P.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    v(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => L(N.filename)
                    }, {
                      default: a(() => [...U[11] || (U[11] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => S(N.filename)
                    }, {
                      default: a(() => [...U[12] || (U[12] = [
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
            !_.value.length && !I.value.length ? (o(), C(Oe, {
              key: 5,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: p.value,
        title: "About Environment Models",
        onClose: U[2] || (U[2] = (N) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            U[13] || (U[13] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            U[14] || (U[14] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: M
          }, {
            default: a(() => [...U[15] || (U[15] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zd = /* @__PURE__ */ K(Qd, [["__scopeId", "data-v-72675609"]]), ec = /* @__PURE__ */ H({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = Se(), s = z([]), i = z(!1), f = z(null), w = z(""), h = z(!1), m = D(
      () => s.value.reduce((R, $) => R + ($.size || 0), 0)
    ), r = D(() => {
      if (!w.value.trim()) return s.value;
      const R = w.value.toLowerCase();
      return s.value.filter(($) => {
        const g = $, S = $.sha256 || g.sha256_hash || "";
        return $.filename.toLowerCase().includes(R) || S.toLowerCase().includes(R);
      });
    }), u = D(() => {
      const R = {};
      for (const g of r.value) {
        const S = g.type || "other";
        R[S] || (R[S] = []), R[S].push(g);
      }
      const $ = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings"];
      return Object.entries(R).sort(([g], [S]) => {
        const L = $.indexOf(g), te = $.indexOf(S);
        return L >= 0 && te >= 0 ? L - te : L >= 0 ? -1 : te >= 0 ? 1 : g.localeCompare(S);
      }).map(([g, S]) => ({ type: g, models: S }));
    });
    function b(R) {
      if (!R) return "Unknown";
      const $ = 1024 * 1024 * 1024, g = 1024 * 1024;
      return R >= $ ? `${(R / $).toFixed(1)} GB` : R >= g ? `${(R / g).toFixed(0)} MB` : `${(R / 1024).toFixed(0)} KB`;
    }
    function p(R) {
      navigator.clipboard.writeText(R), alert("Hash copied to clipboard");
    }
    function M(R) {
      prompt("Enter model source URL:", R.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function E(R) {
      confirm(
        `Delete ${R.filename}?

This will free ${b(R.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function _() {
      alert("Scan for models not yet implemented");
    }
    function I() {
      alert("Change directory not yet implemented");
    }
    function k() {
      alert("Download new model not yet implemented");
    }
    async function x() {
      i.value = !0, f.value = null;
      try {
        s.value = await d();
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ke(x), (R, $) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: $[0] || ($[0] = (g) => h.value = !0)
          }, {
            actions: a(() => [
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: a(() => [...$[3] || ($[3] = [
                  y(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: a(() => [...$[4] || ($[4] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              v(j, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: a(() => [...$[5] || ($[5] = [
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
        search: a(() => [
          v(nt, {
            modelValue: w.value,
            "onUpdate:modelValue": $[1] || ($[1] = (g) => w.value = g),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), C(He, {
            key: 0,
            message: "Loading workspace models..."
          })) : f.value ? (o(), C(Ke, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length ? (o(), C(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                y(" Total: " + l(s.value.length) + " models • " + l(b(m.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), n(F, null, Z(u.value, (g) => (o(), C(we, {
              key: g.type,
              title: g.type.toUpperCase(),
              count: g.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(g.models, (S) => (o(), C(_e, {
                  key: S.sha256 || S.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...$[6] || ($[6] = [
                    y("📦", -1)
                  ])]),
                  title: a(() => [
                    y(l(S.filename), 1)
                  ]),
                  subtitle: a(() => [
                    y(l(b(S.size)), 1)
                  ]),
                  details: a(() => {
                    var L, te;
                    return [
                      S.sha256 || S.sha256_hash ? (o(), C(ce, {
                        key: 0,
                        label: "SHA256:",
                        value: (S.sha256 || S.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      S.source_url || (L = S.sources) != null && L[0] ? (o(), C(ce, {
                        key: 1,
                        label: "Source URL:",
                        value: S.source_url || ((te = S.sources) == null ? void 0 : te[0])
                      }, null, 8, ["value"])) : (o(), C(ce, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...$[7] || ($[7] = [
                          y("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => M(S)
                    }, {
                      default: a(() => [...$[8] || ($[8] = [
                        y(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S.sha256 || S.sha256_hash ? (o(), C(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => p(S.sha256 || S.sha256_hash)
                    }, {
                      default: a(() => [...$[9] || ($[9] = [
                        y(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(j, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => E(S)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        y(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            r.value.length ? c("", !0) : (o(), C(Oe, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: $[2] || ($[2] = (g) => h.value = !1)
      }, {
        content: a(() => [...$[11] || ($[11] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tc = /* @__PURE__ */ K(ec, [["__scopeId", "data-v-6dfec8fd"]]), oc = { key: 0 }, sc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, nc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, ac = /* @__PURE__ */ H({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: i, uninstallNode: f } = Se(), w = z({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = z(!1), m = z(null), r = z(""), u = z(!1), b = D(() => {
      if (!r.value.trim()) return w.value.nodes;
      const g = r.value.toLowerCase();
      return w.value.nodes.filter(
        (S) => {
          var L, te;
          return S.name.toLowerCase().includes(g) || ((L = S.description) == null ? void 0 : L.toLowerCase().includes(g)) || ((te = S.repository) == null ? void 0 : te.toLowerCase().includes(g));
        }
      );
    }), p = D(
      () => b.value.filter((g) => g.installed)
    ), M = D(
      () => b.value.filter((g) => !g.installed)
    );
    function E(g) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[g] || g;
    }
    function _(g) {
      return !g.used_in_workflows || g.used_in_workflows.length === 0 ? "Not used in any workflows" : g.used_in_workflows.length === 1 ? g.used_in_workflows[0] : `${g.used_in_workflows.length} workflows`;
    }
    function I(g) {
      window.open(g, "_blank");
    }
    async function k(g) {
      if (confirm(`Install node "${g}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const S = await s(g);
          S.status === "success" ? (alert(`Node "${g}" installed successfully!`), await $()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function x(g) {
      if (confirm(`Check for updates for "${g}"?`))
        try {
          h.value = !0;
          const S = await i(g);
          S.status === "success" ? (alert(`Node "${g}" is up to date or has been updated!`), await $()) : alert(`Update check failed: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error checking for updates: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function R(g) {
      if (confirm(`Uninstall node "${g}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const S = await f(g);
          S.status === "success" ? (alert(`Node "${g}" uninstalled successfully!`), await $()) : alert(`Failed to uninstall node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error uninstalling node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function $() {
      h.value = !0, m.value = null;
      try {
        w.value = await d();
      } catch (g) {
        m.value = g instanceof Error ? g.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return ke($), (g, S) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (L) => u.value = !0)
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": S[1] || (S[1] = (L) => r.value = L),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), C(He, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : m.value ? (o(), C(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            w.value.total_count ? (o(), C(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                y(" Total: " + l(w.value.total_count) + " nodes • " + l(w.value.installed_count) + " installed • " + l(w.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), C(we, {
              key: 1,
              title: "INSTALLED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(p.value, (L) => (o(), C(_e, {
                  key: L.name,
                  status: "synced"
                }, {
                  icon: a(() => [...S[4] || (S[4] = [
                    y("📦", -1)
                  ])]),
                  title: a(() => [
                    y(l(L.name), 1)
                  ]),
                  subtitle: a(() => [
                    L.version ? (o(), n("span", oc, "v" + l(L.version), 1)) : (o(), n("span", sc, "version unknown")),
                    L.source ? (o(), n("span", nc, " • " + l(E(L.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    L.description ? (o(), C(ce, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : c("", !0),
                    L.repository ? (o(), C(ce, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(ce, {
                      label: "Used by:",
                      value: _(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    L.repository ? (o(), C(j, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => I(L.repository)
                    }, {
                      default: a(() => [...S[5] || (S[5] = [
                        y(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    L.source === "registry" ? (o(), C(j, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => x(L.name)
                    }, {
                      default: a(() => [...S[6] || (S[6] = [
                        y(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    L.source !== "unknown" ? (o(), C(j, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (te) => R(L.name)
                    }, {
                      default: a(() => [...S[7] || (S[7] = [
                        y(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), C(we, {
              key: 2,
              title: "MISSING",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(M.value, (L) => (o(), C(_e, {
                  key: L.name,
                  status: "missing"
                }, {
                  icon: a(() => [...S[8] || (S[8] = [
                    y("⚠", -1)
                  ])]),
                  title: a(() => [
                    y(l(L.name), 1)
                  ]),
                  subtitle: a(() => [...S[9] || (S[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    L.description ? (o(), C(ce, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : c("", !0),
                    L.repository ? (o(), C(ce, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(ce, {
                      label: "Required by:",
                      value: _(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    L.download_url ? (o(), C(j, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => k(L.name)
                    }, {
                      default: a(() => [...S[10] || (S[10] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    L.repository ? (o(), C(j, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => I(L.repository)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        y(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !p.value.length && !M.value.length ? (o(), C(Oe, {
              key: 3,
              icon: "📭",
              message: r.value ? `No nodes match '${r.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: u.value,
        title: "About Git-Tracked Nodes",
        onClose: S[3] || (S[3] = (L) => u.value = !1)
      }, {
        content: a(() => [...S[12] || (S[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            y(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            y(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: S[2] || (S[2] = (L) => u.value = !1)
          }, {
            default: a(() => [...S[13] || (S[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lc = /* @__PURE__ */ K(ac, [["__scopeId", "data-v-c480e2c1"]]), ic = { class: "remote-url-display" }, rc = ["title"], dc = ["title"], cc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, uc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mc = /* @__PURE__ */ H({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = z(!1), i = D(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const w = d.url.slice(0, Math.floor(d.maxLength * 0.6)), h = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${w}...${h}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy URL:", w);
      }
    }
    return (w, h) => (o(), n("div", ic, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, rc),
      e("button", {
        class: Q(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", uc, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", cc, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, dc)
    ]));
  }
}), Ot = /* @__PURE__ */ K(mc, [["__scopeId", "data-v-7768a58d"]]), vc = { class: "remote-title" }, fc = {
  key: 0,
  class: "default-badge"
}, gc = {
  key: 1,
  class: "sync-badge"
}, hc = {
  key: 0,
  class: "ahead"
}, pc = {
  key: 1,
  class: "behind"
}, yc = {
  key: 0,
  class: "tracking-info"
}, wc = /* @__PURE__ */ H({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, i = D(() => s.fetchingRemote === s.remote.name), f = D(() => s.remote.is_default), w = D(() => !!s.trackingBranch);
    function h(m) {
      const r = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const M = Math.floor(p / 60);
      if (M < 24) return `${M}h ago`;
      const E = Math.floor(M / 24);
      return E < 7 ? `${E}d ago` : r.toLocaleDateString();
    }
    return (m, r) => (o(), C(_e, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        y(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", vc, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", fc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", gc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", hc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", pc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        w.value ? (o(), n("span", yc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          v(ce, { label: "Fetch:" }, {
            default: a(() => [
              v(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), C(ce, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              v(Ot, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), C(ce, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        v(j, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        v(j, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (o(), C(j, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), bc = /* @__PURE__ */ K(wc, [["__scopeId", "data-v-17362e45"]]), kc = ["for"], _c = {
  key: 0,
  class: "base-form-field-required"
}, $c = { class: "base-form-field-input" }, Cc = {
  key: 1,
  class: "base-form-field-error"
}, xc = {
  key: 2,
  class: "base-form-field-hint"
}, Sc = /* @__PURE__ */ H({
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
    const d = t, s = D(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (o(), n("div", {
      class: Q(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        y(l(t.label) + " ", 1),
        t.required ? (o(), n("span", _c, "*")) : c("", !0)
      ], 8, kc)) : c("", !0),
      e("div", $c, [
        re(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Cc, l(t.error), 1)) : t.hint ? (o(), n("span", xc, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ K(Sc, [["__scopeId", "data-v-9a1cf296"]]), Ic = { class: "remote-form" }, Ec = { class: "form-header" }, zc = { class: "form-body" }, Mc = {
  key: 0,
  class: "form-error"
}, Lc = { class: "form-actions" }, Tc = /* @__PURE__ */ H({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = z({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), w = z(!1), h = z(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const m = D(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!m.value || w.value)) {
        h.value = null, w.value = !0;
        try {
          i("submit", f.value);
        } catch (u) {
          h.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          w.value = !1;
        }
      }
    }
    return (u, b) => (o(), n("div", Ic, [
      e("div", Ec, [
        v(Ee, null, {
          default: a(() => [
            y(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", zc, [
        v($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            v(qe, {
              modelValue: f.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => f.value.name = p),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        v($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            v(qe, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => f.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            v(qe, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (p) => f.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), n("div", Mc, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Lc, [
        v(j, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: w.value,
          onClick: r
        }, {
          default: a(() => [
            y(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        v(j, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => u.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Rc = /* @__PURE__ */ K(Tc, [["__scopeId", "data-v-56021b18"]]), Dc = { key: 0 }, Nc = /* @__PURE__ */ H({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: f,
      fetchRemote: w,
      getRemoteSyncStatus: h
    } = Se(), m = z([]), r = z(null), u = z({}), b = z(!1), p = z(null), M = z(""), E = z(!1), _ = z(null), I = z(!1), k = z("add"), x = z({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = D(() => {
      if (!M.value.trim()) return m.value;
      const V = M.value.toLowerCase();
      return m.value.filter(
        (X) => X.name.toLowerCase().includes(V) || X.fetch_url.toLowerCase().includes(V) || X.push_url.toLowerCase().includes(V)
      );
    });
    function $(V) {
      var X;
      return ((X = r.value) == null ? void 0 : X.remote) === V;
    }
    async function g() {
      b.value = !0, p.value = null;
      try {
        const V = await d();
        m.value = V.remotes, r.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (X) => {
            const B = await h(X.name);
            B && (u.value[X.name] = B);
          })
        );
      } catch (V) {
        p.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function S() {
      k.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, I.value = !0;
    }
    function L(V) {
      const X = m.value.find((B) => B.name === V);
      X && (k.value = "edit", x.value = {
        name: X.name,
        fetchUrl: X.fetch_url,
        pushUrl: X.push_url
      }, I.value = !0);
    }
    async function te(V) {
      try {
        k.value === "add" ? await s(V.name, V.fetchUrl) : await f(V.name, V.fetchUrl, V.pushUrl || void 0), I.value = !1, await g();
      } catch (X) {
        p.value = X instanceof Error ? X.message : "Operation failed";
      }
    }
    function Y() {
      I.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function U(V) {
      _.value = V;
      try {
        await w(V);
        const X = await h(V);
        X && (u.value[V] = X);
      } catch (X) {
        p.value = X instanceof Error ? X.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function N(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await i(V), await g();
        } catch (X) {
          p.value = X instanceof Error ? X.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ke(g), (V, X) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (B) => E.value = !0)
          }, {
            actions: a(() => [
              I.value ? c("", !0) : (o(), C(j, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: a(() => [...X[3] || (X[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          I.value ? c("", !0) : (o(), C(nt, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": X[1] || (X[1] = (B) => M.value = B),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), C(He, {
            key: 0,
            message: "Loading remotes..."
          })) : p.value ? (o(), C(Ke, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: g
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            I.value ? (o(), C(Rc, {
              key: 0,
              mode: k.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: te,
              onCancel: Y
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !I.value ? (o(), C(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                y(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", Dc, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            R.value.length && !I.value ? (o(), C(we, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, Z(R.value, (B) => {
                  var G;
                  return o(), C(bc, {
                    key: B.name,
                    remote: B,
                    "sync-status": u.value[B.name],
                    "tracking-branch": $(B.name) ? (G = r.value) == null ? void 0 : G.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: U,
                    onEdit: L,
                    onRemove: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !R.value.length && !I.value ? (o(), C(Oe, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                v(j, {
                  variant: "primary",
                  onClick: S
                }, {
                  default: a(() => [...X[4] || (X[4] = [
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
      v(je, {
        show: E.value,
        title: "About Git Remotes",
        onClose: X[2] || (X[2] = (B) => E.value = !1)
      }, {
        content: a(() => [...X[5] || (X[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          v(j, {
            variant: "link",
            onClick: P
          }, {
            default: a(() => [...X[6] || (X[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oc = /* @__PURE__ */ K(Nc, [["__scopeId", "data-v-a75719bb"]]), Uc = { class: "setting-info" }, Bc = { class: "setting-label" }, Pc = {
  key: 0,
  class: "required-marker"
}, Vc = {
  key: 0,
  class: "setting-description"
}, Ac = { class: "setting-control" }, Fc = /* @__PURE__ */ H({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: Q(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Uc, [
        e("div", Bc, [
          y(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Pc, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Vc, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Ac, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ K(Fc, [["__scopeId", "data-v-cb5d236c"]]), Wc = { class: "toggle" }, Gc = ["checked", "disabled"], jc = /* @__PURE__ */ H({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Wc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Gc),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qe = /* @__PURE__ */ K(jc, [["__scopeId", "data-v-71c0f550"]]), Hc = { class: "settings-section" }, Kc = { class: "path-setting" }, qc = { class: "path-value" }, Jc = { class: "path-setting" }, Yc = { class: "path-value" }, Xc = { class: "settings-section" }, Qc = { class: "settings-section" }, Zc = { class: "settings-section" }, eu = /* @__PURE__ */ H({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = Se(), i = z(!1), f = z(null), w = z(null), h = z(null), m = z(null), r = z(""), u = z(""), b = z(!0), p = z(!0), M = z(!1), E = D(() => m.value ? r.value !== (m.value.civitai_api_key || "") : !1);
    async function _() {
      i.value = !0, f.value = null;
      try {
        h.value = await d(), m.value = { ...h.value }, r.value = h.value.civitai_api_key || "", u.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, p.value = h.value.confirm_destructive;
        const R = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = R === "true";
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function I() {
      var R;
      w.value = null;
      try {
        const $ = {};
        r.value !== (((R = m.value) == null ? void 0 : R.civitai_api_key) || "") && ($.civitai_api_key = r.value || null), await s($), await _(), w.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          w.value = null;
        }, 3e3);
      } catch ($) {
        w.value = {
          type: "error",
          message: $ instanceof Error ? $.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (r.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, p.value = m.value.confirm_destructive, w.value = null);
    }
    function x(R) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(R)), console.log("[ComfyGit] Auto-refresh setting saved:", R);
    }
    return ke(_), (R, $) => (o(), C(Ce, null, {
      header: a(() => [
        v(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            v(j, {
              variant: "primary",
              size: "sm",
              disabled: !E.value,
              onClick: I
            }, {
              default: a(() => [...$[5] || ($[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            E.value ? (o(), C(j, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...$[6] || ($[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), C(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), C(Ke, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
          v(we, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var g, S;
              return [
                e("div", Hc, [
                  e("div", Kc, [
                    $[7] || ($[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    $[8] || ($[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", qc, l(((g = h.value) == null ? void 0 : g.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Jc, [
                    $[9] || ($[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    $[10] || ($[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Yc, l(((S = h.value) == null ? void 0 : S.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(we, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Xc, [
                v(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    v(vt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": $[0] || ($[0] = (g) => r.value = g),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(vt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": $[1] || ($[1] = (g) => u.value = g),
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
          v(we, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Qc, [
                v(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    v(Qe, {
                      modelValue: M.value,
                      "onUpdate:modelValue": [
                        $[2] || ($[2] = (g) => M.value = g),
                        x
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v(we, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Zc, [
                v(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Qe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": $[3] || ($[3] = (g) => b.value = g),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Qe, {
                      modelValue: p.value,
                      "onUpdate:modelValue": $[4] || ($[4] = (g) => p.value = g),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          w.value ? (o(), C(at, {
            key: 0,
            variant: (w.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Ze({ color: w.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(w.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), tu = /* @__PURE__ */ K(eu, [["__scopeId", "data-v-7861bd35"]]), ou = /* @__PURE__ */ H({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Se(), s = z([]), i = z(!1), f = z(null), w = z(!1), h = z(null), m = D(() => s.value.length === 0 ? [] : s.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function r() {
      i.value = !0, f.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (u) {
        f.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var u;
          (u = h.value) != null && u.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ke(r), (u, b) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => w.value = !0)
          }, {
            actions: a(() => [
              v(j, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  y(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), C(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), C(Ke, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length === 0 ? (o(), C(Oe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), n(F, null, Z(m.value, (p, M) => (o(), n("div", {
                key: M,
                class: Q(`log-line log-level-${p.level.toLowerCase()}`)
              }, l(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: w.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (p) => w.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
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
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => w.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), su = /* @__PURE__ */ K(ou, [["__scopeId", "data-v-39f6a756"]]), nu = /* @__PURE__ */ H({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = Se(), i = z([]), f = z(!1), w = z(null), h = z(!1), m = z("production"), r = z(null), u = D(() => i.value.length === 0 ? [] : i.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function b() {
      f.value = !0, w.value = null;
      try {
        i.value = await d(void 0, 500);
        try {
          const p = await s();
          m.value = p.environment || "production";
        } catch {
        }
      } catch (p) {
        w.value = p instanceof Error ? p.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var p;
          (p = r.value) != null && p.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ke(b), (p, M) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (E) => h.value = !0)
          }, {
            actions: a(() => [
              v(j, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: f.value
              }, {
                default: a(() => [
                  y(l(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          f.value ? (o(), C(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : w.value ? (o(), C(Ke, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            i.value.length === 0 ? (o(), C(Oe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (o(!0), n(F, null, Z(u.value, (E, _) => (o(), n("div", {
                key: _,
                class: Q(`log-line log-level-${E.level.toLowerCase()}`)
              }, l(E.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: M[2] || (M[2] = (E) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            M[3] || (M[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            M[4] || (M[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          M[5] || (M[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          M[6] || (M[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          v(j, {
            variant: "primary",
            onClick: M[1] || (M[1] = (E) => h.value = !1)
          }, {
            default: a(() => [...M[7] || (M[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), au = /* @__PURE__ */ K(nu, [["__scopeId", "data-v-4f1e6f72"]]), lu = { class: "env-title" }, iu = {
  key: 0,
  class: "current-badge"
}, ru = {
  key: 0,
  class: "branch-info"
}, du = /* @__PURE__ */ H({
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
    showLastUsed: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (d, s) => (o(), C(_e, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        y(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", lu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", iu, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", ru, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        v(ce, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        v(ce, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        v(ce, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), C(ce, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        re(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), cu = /* @__PURE__ */ K(du, [["__scopeId", "data-v-5238e57c"]]), uu = {
  key: 0,
  class: "create-form"
}, mu = { class: "create-form__header" }, vu = { class: "create-form__body" }, fu = { class: "create-form__actions" }, gu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, hu = /* @__PURE__ */ H({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = Se(), f = z([]), w = z(!1), h = z(null), m = z(""), r = z(!1), u = z(!1), b = z(""), p = D(
      () => f.value.find(($) => $.is_current)
    ), M = D(() => {
      if (!m.value.trim()) return f.value;
      const $ = m.value.toLowerCase();
      return f.value.filter(
        (g) => {
          var S;
          return g.name.toLowerCase().includes($) || ((S = g.current_branch) == null ? void 0 : S.toLowerCase().includes($));
        }
      );
    });
    function E($) {
      if (!$) return "";
      try {
        const g = new Date($), L = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), te = Math.floor(L / 6e4), Y = Math.floor(L / 36e5), U = Math.floor(L / 864e5);
        return te < 1 ? "just now" : te < 60 ? `${te} ${te === 1 ? "minute" : "minutes"} ago` : Y < 24 ? `${Y} ${Y === 1 ? "hour" : "hours"} ago` : U < 30 ? `${U} ${U === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return $;
      }
    }
    function _() {
      const $ = b.value.trim();
      $ && (s("create", $), b.value = "", u.value = !1);
    }
    function I() {
      b.value = "", u.value = !1;
    }
    function k($) {
      s("viewDetails", $);
    }
    function x($) {
      confirm(`Delete environment "${$}"?

This action cannot be undone.`) && s("delete", $);
    }
    async function R() {
      w.value = !0, h.value = null;
      try {
        f.value = await i();
      } catch ($) {
        h.value = $ instanceof Error ? $.message : "Failed to load environments";
      } finally {
        w.value = !1;
      }
    }
    return ke(R), ($, g) => {
      const S = lo("SectionGroup");
      return o(), n(F, null, [
        v(Ce, null, {
          header: a(() => [
            v(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: g[1] || (g[1] = (L) => r.value = !0)
            }, {
              actions: a(() => [
                v(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: g[0] || (g[0] = (L) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...g[7] || (g[7] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", {
                        d: "M8 2v12M2 8h12",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      })
                    ], -1)
                  ])]),
                  _: 1
                }),
                v(j, {
                  variant: "ghost",
                  size: "sm",
                  onClick: R,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...g[8] || (g[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            v(nt, {
              modelValue: m.value,
              "onUpdate:modelValue": g[2] || (g[2] = (L) => m.value = L),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            w.value ? (o(), C(He, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), C(Ke, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: R
            }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
              u.value ? (o(), n("div", uu, [
                e("div", mu, [
                  g[10] || (g[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  v(j, {
                    variant: "ghost",
                    size: "xs",
                    onClick: I
                  }, {
                    default: a(() => [...g[9] || (g[9] = [
                      y(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", vu, [
                  v(vt, {
                    modelValue: b.value,
                    "onUpdate:modelValue": g[3] || (g[3] = (L) => b.value = L),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge(_, ["enter"]),
                      Ge(I, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", fu, [
                    v(j, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...g[11] || (g[11] = [
                        y(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: I
                    }, {
                      default: a(() => [...g[12] || (g[12] = [
                        y(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              f.value.length ? (o(), C(at, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  y(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  p.value ? (o(), n(F, { key: 0 }, [
                    g[13] || (g[13] = y(" • Current: ", -1)),
                    e("strong", null, l(p.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              M.value.length ? (o(), C(S, {
                key: 2,
                title: "ENVIRONMENTS",
                count: M.value.length
              }, {
                default: a(() => [
                  (o(!0), n(F, null, Z(M.value, (L) => (o(), C(cu, {
                    key: L.name,
                    "environment-name": L.name,
                    "is-current": L.is_current,
                    "current-branch": L.current_branch,
                    "workflow-count": L.workflow_count,
                    "node-count": L.node_count,
                    "model-count": L.model_count,
                    "last-used": E(L.last_used),
                    "show-last-used": !!L.last_used
                  }, {
                    actions: a(() => [
                      L.is_current ? c("", !0) : (o(), C(j, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (te) => $.$emit("switch", L.name)
                      }, {
                        default: a(() => [...g[14] || (g[14] = [
                          y(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      v(j, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (te) => k(L.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...g[15] || (g[15] = [
                          e("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            e("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            e("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !L.is_current && f.value.length > 1 ? (o(), C(j, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (te) => x(L.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", gu, [...g[16] || (g[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : c("", !0),
              M.value.length ? c("", !0) : (o(), C(Oe, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, At({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    v(j, {
                      variant: "primary",
                      onClick: g[4] || (g[4] = (L) => u.value = !0)
                    }, {
                      default: a(() => [...g[17] || (g[17] = [
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
        v(je, {
          show: r.value,
          title: "About Environments",
          onClose: g[6] || (g[6] = (L) => r.value = !1)
        }, {
          content: a(() => [...g[18] || (g[18] = [
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
          actions: a(() => [
            v(j, {
              variant: "secondary",
              onClick: g[5] || (g[5] = (L) => r.value = !1)
            }, {
              default: a(() => [...g[19] || (g[19] = [
                y(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), pu = /* @__PURE__ */ K(hu, [["__scopeId", "data-v-97d6527d"]]), yu = { class: "file-path" }, wu = { class: "file-path-text" }, bu = ["title"], ku = /* @__PURE__ */ H({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = z(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, w) => (o(), n("div", yu, [
      w[0] || (w[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", wu, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, bu)) : c("", !0)
    ]));
  }
}), _u = /* @__PURE__ */ K(ku, [["__scopeId", "data-v-f0982173"]]), $u = { class: "output-path-input" }, Cu = { class: "export-actions" }, xu = {
  key: 1,
  class: "export-warning"
}, Su = /* @__PURE__ */ H({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Se(), s = z(""), i = z(!1), f = z(null), w = z(!1);
    async function h() {
      i.value = !0, f.value = null;
      try {
        const r = await d(s.value || void 0);
        f.value = r;
      } catch (r) {
        f.value = {
          status: "error",
          message: r instanceof Error ? r.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function m() {
      var r;
      if ((r = f.value) != null && r.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (r, u) => (o(), n(F, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              v(j, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => w.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...u[5] || (u[5] = [
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
        content: a(() => [
          v(we, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              v(_e, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  y("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  v(ce, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  v(ce, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  v(ce, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  v(ce, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(we, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              v(_e, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  y("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", $u, [
                    v(vt, {
                      modelValue: s.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => s.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(we, { title: "EXPORT" }, {
            default: a(() => [
              e("div", Cu, [
                v(j, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: h
                }, {
                  default: a(() => [
                    u[12] || (u[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    y(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), C(j, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: u[2] || (u[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), C(we, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              v(_e, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, At({
                icon: a(() => [
                  y(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  y(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  y(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    v(ce, { label: "Saved to:" }, {
                      default: a(() => [
                        v(_u, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), C(ce, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", xu, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    v(j, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    v(j, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => f.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
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
      v(je, {
        show: w.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => w.value = !1)
      }, {
        content: a(() => [...u[17] || (u[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            y(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Iu = /* @__PURE__ */ K(Su, [["__scopeId", "data-v-1777a9d5"]]), Eu = { class: "file-input-wrapper" }, zu = ["accept", "multiple", "disabled"], Mu = /* @__PURE__ */ H({
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
  setup(t, { expose: d, emit: s }) {
    const i = s, f = z(null);
    function w() {
      var m;
      (m = f.value) == null || m.click();
    }
    function h(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: w
    }), (m, r) => (o(), n("div", Eu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, zu),
      v(j, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: w
      }, {
        default: a(() => [
          re(m.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            y(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Lu = /* @__PURE__ */ K(Mu, [["__scopeId", "data-v-cd192091"]]), Tu = {
  key: 0,
  class: "drop-zone-empty"
}, Ru = { class: "drop-zone-text" }, Du = { class: "drop-zone-primary" }, Nu = { class: "drop-zone-secondary" }, Ou = { class: "drop-zone-actions" }, Uu = {
  key: 1,
  class: "drop-zone-file"
}, Bu = { class: "file-info" }, Pu = { class: "file-details" }, Vu = { class: "file-name" }, Au = { class: "file-size" }, Fu = /* @__PURE__ */ H({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: d }) {
    const s = d, i = z(!1), f = z(null), w = z(0), h = D(() => f.value !== null), m = D(() => {
      var k;
      return ((k = f.value) == null ? void 0 : k.name) || "";
    }), r = D(() => {
      if (!f.value) return "";
      const k = f.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var x;
      w.value++, (x = k.dataTransfer) != null && x.types.includes("Files") && (i.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function p() {
      w.value--, w.value === 0 && (i.value = !1);
    }
    function M(k) {
      var R;
      w.value = 0, i.value = !1;
      const x = (R = k.dataTransfer) == null ? void 0 : R.files;
      x && x.length > 0 && _(x[0]);
    }
    function E(k) {
      k.length > 0 && _(k[0]);
    }
    function _(k) {
      f.value = k, s("fileSelected", k);
    }
    function I() {
      f.value = null, s("clear");
    }
    return (k, x) => (o(), n("div", {
      class: Q(["file-drop-zone", { "drop-active": i.value, "has-file": h.value }]),
      onDragenter: be(u, ["prevent"]),
      onDragover: be(b, ["prevent"]),
      onDragleave: be(p, ["prevent"]),
      onDrop: be(M, ["prevent"])
    }, [
      h.value ? (o(), n("div", Uu, [
        e("div", Bu, [
          x[1] || (x[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Pu, [
            e("div", Vu, l(m.value), 1),
            e("div", Au, l(r.value), 1)
          ])
        ]),
        v(j, {
          variant: "ghost",
          size: "xs",
          onClick: I,
          title: "Remove file"
        }, {
          default: a(() => [...x[2] || (x[2] = [
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
      ])) : (o(), n("div", Tu, [
        x[0] || (x[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Ru, [
          e("p", Du, l(t.primaryText), 1),
          e("p", Nu, l(t.secondaryText), 1)
        ]),
        e("div", Ou, [
          v(Lu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: E
          }, {
            default: a(() => [
              y(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Wu = /* @__PURE__ */ K(Fu, [["__scopeId", "data-v-e00abbca"]]), Gu = { class: "import-preview" }, ju = { class: "preview-header" }, Hu = {
  key: 0,
  class: "source-env"
}, Ku = { class: "preview-content" }, qu = { class: "preview-section" }, Ju = { class: "section-header" }, Yu = { class: "section-info" }, Xu = { class: "section-count" }, Qu = {
  key: 0,
  class: "item-list"
}, Zu = { class: "item-name" }, em = {
  key: 0,
  class: "item-more"
}, tm = { class: "preview-section" }, om = { class: "section-header" }, sm = { class: "section-info" }, nm = { class: "section-count" }, am = {
  key: 0,
  class: "item-list"
}, lm = { class: "item-details" }, im = { class: "item-name" }, rm = { class: "item-meta" }, dm = {
  key: 0,
  class: "item-more"
}, cm = { class: "preview-section" }, um = { class: "section-header" }, mm = { class: "section-info" }, vm = { class: "section-count" }, fm = {
  key: 0,
  class: "item-list"
}, gm = { class: "item-name" }, hm = {
  key: 0,
  class: "item-more"
}, pm = {
  key: 0,
  class: "preview-section"
}, ym = { class: "git-info" }, wm = /* @__PURE__ */ H({
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
    const d = t, s = D(() => d.workflows.length), i = D(() => d.models.length), f = D(() => d.nodes.length);
    function w(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), n("div", Gu, [
      e("div", ju, [
        v(Ee, null, {
          default: a(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Hu, [
          m[1] || (m[1] = y(" From: ", -1)),
          v(St, null, {
            default: a(() => [
              y(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Ku, [
        e("div", qu, [
          e("div", Ju, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Yu, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Xu, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Qu, [
            (o(!0), n(F, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Zu, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", em, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", tm, [
          e("div", om, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", sm, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", nm, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", am, [
            (o(!0), n(F, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", lm, [
                e("span", im, l(r.filename), 1),
                e("span", rm, l(w(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", dm, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", cm, [
          e("div", um, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", mm, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", vm, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", fm, [
            (o(!0), n(F, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", gm, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", hm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", pm, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", ym, [
            t.gitBranch ? (o(), C(ce, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                v(St, null, {
                  default: a(() => [
                    y(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), C(ce, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                v(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), bm = /* @__PURE__ */ K(wm, [["__scopeId", "data-v-182fe113"]]), km = { class: "import-options" }, _m = { class: "options-container" }, $m = { class: "option-section" }, Cm = { class: "conflict-options" }, xm = ["value", "checked", "onChange"], Sm = { class: "conflict-content" }, Im = { class: "conflict-label" }, Em = { class: "conflict-description" }, zm = { class: "option-section" }, Mm = { class: "component-toggles" }, Lm = /* @__PURE__ */ H({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: d }) {
    const s = d, i = [
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
    return (f, w) => (o(), n("div", km, [
      v(Ee, null, {
        default: a(() => [...w[4] || (w[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", _m, [
        e("div", $m, [
          v(xt, null, {
            default: a(() => [...w[5] || (w[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Cm, [
            (o(), n(F, null, Z(i, (h) => e("label", {
              key: h.value,
              class: Q(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => s("update:conflictMode", h.value)
              }, null, 40, xm),
              e("div", Sm, [
                e("span", Im, l(h.label), 1),
                e("span", Em, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", zm, [
          v(xt, null, {
            default: a(() => [...w[6] || (w[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Mm, [
            v(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                v(Qe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": w[0] || (w[0] = (h) => s("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                v(Qe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": w[1] || (w[1] = (h) => s("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                v(Qe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": w[2] || (w[2] = (h) => s("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                v(Qe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": w[3] || (w[3] = (h) => s("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Tm = /* @__PURE__ */ K(Lm, [["__scopeId", "data-v-0ec212b0"]]), Rm = {
  key: 0,
  class: "import-empty"
}, Dm = { class: "import-help" }, Nm = {
  key: 1,
  class: "import-configure"
}, Om = { class: "selected-file-bar" }, Um = { class: "file-bar-content" }, Bm = { class: "file-bar-info" }, Pm = { class: "file-bar-name" }, Vm = { class: "file-bar-size" }, Am = { class: "import-actions" }, Fm = {
  key: 2,
  class: "import-progress"
}, Wm = { class: "progress-content" }, Gm = { class: "progress-info" }, jm = { class: "progress-title" }, Hm = { class: "progress-detail" }, Km = { class: "progress-bar" }, qm = { class: "progress-status" }, Jm = {
  key: 3,
  class: "import-complete"
}, Ym = { class: "complete-message" }, Xm = { class: "complete-title" }, Qm = { class: "complete-details" }, Zm = { class: "complete-actions" }, ev = /* @__PURE__ */ H({
  __name: "ImportSection",
  setup(t) {
    const d = z(null), s = z(!1), i = z(!1), f = z(!1), w = z(""), h = z({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = z({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = z({
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
    }), u = D(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function b(I) {
      d.value = I;
    }
    function p() {
      d.value = null, i.value = !1, f.value = !1, w.value = "";
    }
    function M() {
      p(), s.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function E() {
      if (d.value) {
        s.value = !0, i.value = !1;
        try {
          const I = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${r.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${r.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${r.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of I)
            m.value = k, await new Promise((x) => setTimeout(x, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, w.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (I) {
          f.value = !1, w.value = I instanceof Error ? I.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function _(I) {
      return I < 1024 ? `${I} B` : I < 1024 * 1024 ? `${(I / 1024).toFixed(1)} KB` : I < 1024 * 1024 * 1024 ? `${(I / (1024 * 1024)).toFixed(1)} MB` : `${(I / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (I, k) => (o(), C(Ce, null, {
      header: a(() => [
        v(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Rm, [
          v(Wu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Dm, [
            v(Ee, null, {
              default: a(() => [...k[5] || (k[5] = [
                y("How to Import", -1)
              ])]),
              _: 1
            }),
            k[6] || (k[6] = e("div", { class: "help-content" }, [
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", Nm, [
          e("div", Om, [
            e("div", Um, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Bm, [
                e("div", Pm, l(d.value.name), 1),
                e("div", Vm, l(_(d.value.size)), 1)
              ])
            ]),
            v(j, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...k[8] || (k[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          v(bm, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          v(Tm, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (x) => h.value.conflictMode = x),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (x) => h.value.includeWorkflows = x),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (x) => h.value.includeModels = x),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (x) => h.value.includeNodes = x),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (x) => h.value.includeGitHistory = x)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && r.value.models.length > 0 ? (o(), C(Xe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Am, [
            v(j, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: E
            }, {
              default: a(() => [...k[9] || (k[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                y(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            v(j, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: a(() => [...k[10] || (k[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Fm, [
          e("div", Wm, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Gm, [
              e("div", jm, l(m.value.message), 1),
              e("div", Hm, l(m.value.detail), 1)
            ])
          ]),
          e("div", Km, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", qm, l(m.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Jm, [
          e("div", {
            class: Q(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", Ym, [
            e("div", Xm, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Qm, l(w.value), 1)
          ]),
          e("div", Zm, [
            v(j, {
              variant: "primary",
              size: "md",
              onClick: M
            }, {
              default: a(() => [...k[12] || (k[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), tv = /* @__PURE__ */ K(ev, [["__scopeId", "data-v-18e18eb5"]]), ov = { class: "header-info" }, sv = { class: "commit-hash" }, nv = {
  key: 0,
  class: "commit-refs"
}, av = { class: "commit-message" }, lv = { class: "commit-date" }, iv = {
  key: 0,
  class: "loading"
}, rv = {
  key: 1,
  class: "changes-section"
}, dv = { class: "stats-row" }, cv = { class: "stat" }, uv = { class: "stat insertions" }, mv = { class: "stat deletions" }, vv = {
  key: 0,
  class: "change-group"
}, fv = {
  key: 1,
  class: "change-group"
}, gv = {
  key: 0,
  class: "version"
}, hv = {
  key: 2,
  class: "change-group"
}, pv = { class: "change-item" }, yv = /* @__PURE__ */ H({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = Se(), i = z(null), f = z(!0), w = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return ke(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, r) => (o(), C(yt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => m.$emit("close"))
    }, {
      header: a(() => {
        var u, b, p, M;
        return [
          e("div", ov, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", sv, l(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (M = (p = i.value) == null ? void 0 : p.refs) != null && M.length ? (o(), n("span", nv, [
              (o(!0), n(F, null, Z(i.value.refs, (E) => (o(), n("span", {
                key: E,
                class: "ref-badge"
              }, l(E), 1))), 128))
            ])) : c("", !0)
          ]),
          v(ie, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (E) => m.$emit("close"))
          }, {
            default: a(() => [...r[5] || (r[5] = [
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
      body: a(() => {
        var u, b;
        return [
          e("div", av, l(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", lv, l(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", iv, "Loading details...")) : i.value ? (o(), n("div", rv, [
            e("div", dv, [
              e("span", cv, l(i.value.stats.files_changed) + " files", 1),
              e("span", uv, "+" + l(i.value.stats.insertions), 1),
              e("span", mv, "-" + l(i.value.stats.deletions), 1)
            ]),
            w.value ? (o(), n("div", vv, [
              v(ct, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, Z(i.value.changes.workflows.added, (p) => (o(), n("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(F, null, Z(i.value.changes.workflows.modified, (p) => (o(), n("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(F, null, Z(i.value.changes.workflows.deleted, (p) => (o(), n("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), n("div", fv, [
              v(ct, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, Z(i.value.changes.nodes.added, (p) => (o(), n("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p.name), 1),
                p.version ? (o(), n("span", gv, "(" + l(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(F, null, Z(i.value.changes.nodes.removed, (p) => (o(), n("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", hv, [
              v(ct, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", pv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        v(ie, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        v(ie, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), wv = /* @__PURE__ */ K(yv, [["__scopeId", "data-v-d256ff6d"]]), bv = { class: "dialog-message" }, kv = {
  key: 0,
  class: "dialog-details"
}, _v = {
  key: 1,
  class: "dialog-warning"
}, $v = /* @__PURE__ */ H({
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
    return (d, s) => (o(), C(yt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", bv, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", kv, [
          (o(!0), n(F, null, Z(t.details, (i, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", _v, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        v(ie, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            y(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), C(ie, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            y(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        v(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
        }, {
          default: a(() => [
            y(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Cv = /* @__PURE__ */ K($v, [["__scopeId", "data-v-3670b9f5"]]), xv = { class: "base-textarea-wrapper" }, Sv = ["value", "rows", "placeholder", "disabled", "maxlength"], Iv = {
  key: 0,
  class: "base-textarea-count"
}, Ev = /* @__PURE__ */ H({
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
    return (d, s) => (o(), n("div", xv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ge(be((i) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ge(be((i) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Sv),
      t.showCharCount && t.maxLength ? (o(), n("div", Iv, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ K(Ev, [["__scopeId", "data-v-5516e6fc"]]), zv = ["checked", "disabled"], Mv = { class: "base-checkbox-box" }, Lv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Tv = {
  key: 0,
  class: "base-checkbox-label"
}, Rv = /* @__PURE__ */ H({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: Q(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked))
      }, null, 40, zv),
      e("span", Mv, [
        t.modelValue ? (o(), n("svg", Lv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Tv, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ K(Rv, [["__scopeId", "data-v-bf17c831"]]), Dv = { class: "popover-header" }, Nv = { class: "popover-body" }, Ov = {
  key: 0,
  class: "changes-summary"
}, Uv = {
  key: 0,
  class: "change-item"
}, Bv = {
  key: 1,
  class: "change-item"
}, Pv = {
  key: 2,
  class: "change-item"
}, Vv = {
  key: 3,
  class: "change-item"
}, Av = {
  key: 4,
  class: "change-item"
}, Fv = {
  key: 1,
  class: "no-changes"
}, Wv = {
  key: 2,
  class: "loading"
}, Gv = {
  key: 3,
  class: "issues-warning"
}, jv = { class: "warning-header" }, Hv = { class: "warning-title" }, Kv = { class: "issues-list" }, qv = { class: "message-section" }, Jv = { class: "popover-footer" }, Yv = {
  key: 1,
  class: "commit-popover"
}, Xv = { class: "popover-header" }, Qv = { class: "popover-body" }, Zv = {
  key: 0,
  class: "changes-summary"
}, ef = {
  key: 0,
  class: "change-item"
}, tf = {
  key: 1,
  class: "change-item"
}, of = {
  key: 2,
  class: "change-item"
}, sf = {
  key: 3,
  class: "change-item"
}, nf = {
  key: 4,
  class: "change-item"
}, af = {
  key: 1,
  class: "no-changes"
}, lf = {
  key: 2,
  class: "loading"
}, rf = {
  key: 3,
  class: "issues-warning"
}, df = { class: "warning-header" }, cf = { class: "warning-title" }, uf = { class: "issues-list" }, mf = { class: "message-section" }, vf = { class: "popover-footer" }, ff = /* @__PURE__ */ H({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: f } = Se(), w = z(""), h = z(!1), m = z(!1), r = z(null), u = D(() => {
      if (!s.status) return !1;
      const _ = s.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || s.status.has_changes;
    }), b = D(() => {
      var _;
      return (_ = s.status) != null && _.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (I) => I.has_issues && (I.sync_state === "new" || I.sync_state === "modified")
      ) : [];
    }), p = D(() => b.value.length > 0), M = D(() => p.value && !m.value);
    async function E() {
      var _, I, k;
      if (!(p.value && !m.value) && !(!u.value || !w.value.trim() || h.value)) {
        h.value = !0, r.value = null;
        try {
          const x = await f(w.value.trim(), m.value);
          x.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((_ = x.summary) == null ? void 0 : _.new) || 0} new, ${((I = x.summary) == null ? void 0 : I.modified) || 0} modified, ${((k = x.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, w.value = "", m.value = !1, setTimeout(() => i("committed"), 1e3)) : x.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : x.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: x.message || "Commit failed" };
        } catch (x) {
          r.value = { type: "error", message: x instanceof Error ? x.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (_, I) => t.asModal ? (o(), C(Le, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: I[5] || (I[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: I[4] || (I[4] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Dv, [
            I[11] || (I[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: I[0] || (I[0] = (k) => i("close"))
            }, [...I[10] || (I[10] = [
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
          e("div", Nv, [
            t.status && u.value ? (o(), n("div", Ov, [
              t.status.workflows.new.length ? (o(), n("div", Uv, [
                I[12] || (I[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Bv, [
                I[13] || (I[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Pv, [
                I[14] || (I[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Vv, [
                I[15] || (I[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Av, [
                I[16] || (I[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Fv, " No changes to commit ")) : (o(), n("div", Wv, " Loading... ")),
            p.value ? (o(), n("div", Gv, [
              e("div", jv, [
                I[17] || (I[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Hv, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Kv, [
                (o(!0), n(F, null, Z(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  y(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              v(Bt, {
                modelValue: m.value,
                "onUpdate:modelValue": I[1] || (I[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...I[18] || (I[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", qv, [
              v(Ut, {
                modelValue: w.value,
                "onUpdate:modelValue": I[2] || (I[2] = (k) => w.value = k),
                placeholder: M.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || h.value || M.value,
                rows: 3,
                onCtrlEnter: E
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: Q(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Jv, [
            v(ie, {
              variant: "secondary",
              onClick: I[3] || (I[3] = (k) => i("close"))
            }, {
              default: a(() => [...I[19] || (I[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(ie, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !w.value.trim() || h.value || M.value,
              loading: h.value,
              onClick: E
            }, {
              default: a(() => [
                y(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Yv, [
      e("div", Xv, [
        I[21] || (I[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: I[6] || (I[6] = (k) => i("close"))
        }, [...I[20] || (I[20] = [
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
      e("div", Qv, [
        t.status && u.value ? (o(), n("div", Zv, [
          t.status.workflows.new.length ? (o(), n("div", ef, [
            I[22] || (I[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", tf, [
            I[23] || (I[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", of, [
            I[24] || (I[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", sf, [
            I[25] || (I[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", nf, [
            I[26] || (I[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", af, " No changes to commit ")) : (o(), n("div", lf, " Loading... ")),
        p.value ? (o(), n("div", rf, [
          e("div", df, [
            I[27] || (I[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", cf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", uf, [
            (o(!0), n(F, null, Z(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              y(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          v(Bt, {
            modelValue: m.value,
            "onUpdate:modelValue": I[7] || (I[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...I[28] || (I[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", mf, [
          v(Ut, {
            modelValue: w.value,
            "onUpdate:modelValue": I[8] || (I[8] = (k) => w.value = k),
            placeholder: M.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || h.value || M.value,
            rows: 3,
            onCtrlEnter: E
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: Q(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", vf, [
        v(ie, {
          variant: "secondary",
          onClick: I[9] || (I[9] = (k) => i("close"))
        }, {
          default: a(() => [...I[29] || (I[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v(ie, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !w.value.trim() || h.value || M.value,
          loading: h.value,
          onClick: E
        }, {
          default: a(() => [
            y(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ K(ff, [["__scopeId", "data-v-38b45183"]]), gf = { class: "modal-header" }, hf = { class: "modal-body" }, pf = { class: "switch-message" }, yf = { class: "switch-details" }, wf = { class: "modal-actions" }, bf = /* @__PURE__ */ H({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), C(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", gf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", hf, [
            e("p", pf, [
              s[6] || (s[6] = y(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = y(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = y("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", yf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", wf, [
            v(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), kf = /* @__PURE__ */ K(bf, [["__scopeId", "data-v-e9c5253e"]]), _f = { class: "progress-bar" }, $f = /* @__PURE__ */ H({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = D(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, f) => (o(), n("div", _f, [
      e("div", {
        class: Q(["progress-fill", t.variant]),
        style: Ze({ width: s.value })
      }, null, 6)
    ]));
  }
}), Cf = /* @__PURE__ */ K($f, [["__scopeId", "data-v-1beb0512"]]), xf = {
  key: 0,
  class: "modal-overlay"
}, Sf = { class: "modal-content" }, If = { class: "modal-body" }, Ef = { class: "progress-info" }, zf = { class: "progress-percentage" }, Mf = { class: "progress-state" }, Lf = { class: "switch-steps" }, Tf = { class: "step-icon" }, Rf = { class: "step-label" }, Df = /* @__PURE__ */ H({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = D(() => {
      const w = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return d.message || w[d.state] || d.state;
    }), i = D(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), f = D(() => {
      const w = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = w.findIndex((m) => m.state === d.state);
      return w.map((m, r) => {
        let u = "pending", b = "○";
        return r < h ? (u = "completed", b = "✓") : r === h && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (w, h) => (o(), C(Le, { to: "body" }, [
      t.show ? (o(), n("div", xf, [
        e("div", Sf, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", If, [
            v(Cf, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ef, [
              e("div", zf, l(t.progress) + "%", 1),
              e("div", Mf, l(s.value), 1)
            ]),
            e("div", Lf, [
              (o(!0), n(F, null, Z(f.value, (m) => (o(), n("div", {
                key: m.state,
                class: Q(["switch-step", m.status])
              }, [
                e("span", Tf, l(m.icon), 1),
                e("span", Rf, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Nf = /* @__PURE__ */ K(Df, [["__scopeId", "data-v-768a5078"]]), Of = { class: "modal-header" }, Uf = { class: "modal-body" }, Bf = {
  key: 0,
  class: "node-section"
}, Pf = { class: "node-list" }, Vf = {
  key: 1,
  class: "node-section"
}, Af = { class: "node-list" }, Ff = { class: "modal-actions" }, Wf = /* @__PURE__ */ H({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), C(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Of, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Uf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Bf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Pf, [
                (o(!0), n(F, null, Z(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Vf, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Af, [
                (o(!0), n(F, null, Z(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Ff, [
            v(j, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(j, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Gf = /* @__PURE__ */ K(Wf, [["__scopeId", "data-v-7cad7518"]]);
async function lt(t, d = {}, s = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), s);
  try {
    const w = await fetch(t, {
      ...d,
      signal: i.signal
    });
    return clearTimeout(f), w;
  } catch (w) {
    throw clearTimeout(f), w.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : w;
  }
}
function jf() {
  const t = z(null);
  async function d() {
    try {
      const h = await lt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (h.ok)
        return (await h.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await lt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await lt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Failed to get status");
      return await h.json();
    } catch {
      return null;
    }
  }
  async function f() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await lt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function w() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await lt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: d,
    checkHealth: s,
    getStatus: i,
    restart: f,
    kill: w
  };
}
const Hf = { class: "comfygit-panel" }, Kf = { class: "panel-header" }, qf = { class: "header-left" }, Jf = {
  key: 0,
  class: "header-info"
}, Yf = { class: "header-actions" }, Xf = { class: "env-switcher" }, Qf = {
  key: 0,
  class: "header-info"
}, Zf = { class: "branch-name" }, eg = { class: "panel-main" }, tg = { class: "sidebar" }, og = { class: "sidebar-section" }, sg = { class: "sidebar-section" }, ng = { class: "sidebar-section" }, ag = { class: "content-area" }, lg = {
  key: 0,
  class: "error-message"
}, ig = {
  key: 1,
  class: "loading"
}, rg = { class: "dialog-content env-selector-dialog" }, dg = { class: "dialog-header" }, cg = { class: "dialog-body" }, ug = { class: "env-list" }, mg = { class: "env-info" }, vg = { class: "env-name-row" }, fg = { class: "env-indicator" }, gg = { class: "env-name" }, hg = {
  key: 0,
  class: "env-branch"
}, pg = {
  key: 1,
  class: "current-label"
}, yg = { class: "env-stats" }, wg = ["onClick"], bg = { class: "toast-container" }, kg = { class: "toast-icon" }, _g = { class: "toast-message" }, $g = /* @__PURE__ */ H({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: f,
      getBranches: w,
      checkout: h,
      createBranch: m,
      switchBranch: r,
      getEnvironments: u,
      switchEnvironment: b,
      getSwitchProgress: p,
      syncEnvironmentManually: M
    } = Se(), E = jf(), _ = z(null), I = z([]), k = z([]), x = z([]), R = D(() => x.value.find((A) => A.is_current)), $ = z(!1), g = z(null), S = z(null), L = z(!1), te = z(null), Y = z(!1), U = z(!1), N = z(""), P = z({ state: "idle", progress: 0, message: "" });
    let V = null, X = null;
    const B = z("status"), G = z("this-env");
    function J(A, T) {
      B.value = A, G.value = T;
    }
    function ne(A) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      ue && J(ue.view, ue.section);
    }
    function se() {
      J("branches", "this-env");
    }
    const fe = z(null), oe = z(!1), ze = z(!1), pe = z([]);
    let et = 0;
    function ge(A, T = "info", ue = 3e3) {
      const ye = ++et;
      return pe.value.push({ id: ye, message: A, type: T }), ue > 0 && setTimeout(() => {
        pe.value = pe.value.filter((Re) => Re.id !== ye);
      }, ue), ye;
    }
    function Me(A) {
      pe.value = pe.value.filter((T) => T.id !== A);
    }
    function q(A) {
      switch (A) {
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
    const ae = D(() => {
      if (!_.value) return "neutral";
      const A = _.value.workflows, T = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    D(() => _.value ? ae.value === "success" ? "All synced" : ae.value === "warning" ? "Uncommitted changes" : ae.value === "error" ? "Not synced" : "" : "");
    async function de() {
      $.value = !0, g.value = null;
      try {
        const [A, T, ue, ye] = await Promise.all([
          i(!0),
          f(),
          w(),
          u()
        ]);
        _.value = A, I.value = T.commits, k.value = ue.branches, x.value = ye, s("statusUpdate", A), te.value && await te.value.loadWorkflows(!0);
      } catch (A) {
        g.value = A instanceof Error ? A.message : "Failed to load status", _.value = null, I.value = [], k.value = [];
      } finally {
        $.value = !1;
      }
    }
    function $e(A) {
      S.value = A;
    }
    async function Je(A) {
      var ue;
      S.value = null;
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      fe.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((ue = A.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: T ? Dt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var De;
          fe.value = null, ee();
          const ye = ge(`Checking out ${A.short_hash || ((De = A.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Re = await h(A.hash, T);
          Me(ye), Re.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function bt(A) {
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      fe.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: T ? Dt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, ee();
          const ue = ge(`Switching to ${A}...`, "info", 0), ye = await r(A, T);
          Me(ue), ye.status === "success" ? ge("Restarting ComfyUI...", "success") : ge(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(A) {
      const T = ge(`Creating branch ${A}...`, "info", 0), ue = await m(A);
      Me(T), ue.status === "success" ? (ge(`Branch "${A}" created`, "success"), await de()) : ge(ue.message || "Failed to create branch", "error");
    }
    async function O(A) {
      S.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const ue = ge(`Creating branch ${T}...`, "info", 0), ye = await m(T, A.hash);
        Me(ue), ye.status === "success" ? (ge(`Branch "${T}" created from ${A.short_hash}`, "success"), await de()) : ge(ye.message || "Failed to create branch", "error");
      }
    }
    function ee() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function he(A) {
      L.value = !1, N.value = A, Y.value = !0;
    }
    async function Te() {
      Y.value = !1, U.value = !0, ee(), P.value = {
        progress: 10,
        state: Ue(10),
        message: Be(10)
      };
      try {
        await b(N.value), ft(), gt();
      } catch (A) {
        Pe(), U.value = !1, ge(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), P.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ue(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function Be(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ue(A)] || "";
    }
    function ft() {
      if (X) return;
      let A = 10;
      const T = 60, ue = 5e3, ye = 100, Re = (T - A) / (ue / ye);
      X = window.setInterval(() => {
        if (A += Re, A >= T && (A = T, Pe()), P.value.progress < T) {
          const De = Math.floor(A);
          P.value = {
            progress: De,
            state: Ue(De),
            message: Be(De)
          };
        }
      }, ye);
    }
    function Pe() {
      X && (clearInterval(X), X = null);
    }
    function gt() {
      V || (V = window.setInterval(async () => {
        try {
          let A = await E.getStatus();
          if ((!A || A.state === "idle") && (A = await p()), !A)
            return;
          const T = A.progress || 0;
          T >= 60 && Pe();
          const ue = Math.max(T, P.value.progress), ye = A.state && A.state !== "idle" && A.state !== "unknown", Re = ye ? A.state : Ue(ue), De = ye && A.message || Be(ue);
          P.value = {
            state: Re,
            progress: ue,
            message: De
          }, A.state === "complete" ? (Pe(), kt(), U.value = !1, ge(`✓ Switched to ${N.value}`, "success"), await de(), N.value = "") : A.state === "rolled_back" ? (Pe(), kt(), U.value = !1, ge("Switch failed, restored previous environment", "warning"), N.value = "") : A.state === "critical_failure" && (Pe(), kt(), U.value = !1, ge(`Critical error during switch: ${A.message}`, "error"), N.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function kt() {
      Pe(), V && (clearInterval(V), V = null);
    }
    function Xt() {
      Y.value = !1, N.value = "";
    }
    async function Qt() {
      oe.value = !1, await de(), ge("✓ Changes committed", "success");
    }
    async function Zt() {
      ze.value = !1;
      const A = ge("Syncing environment...", "info", 0);
      try {
        const T = await M("skip", !0);
        if (Me(A), T.status === "success") {
          const ue = [];
          T.nodes_installed.length && ue.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && ue.push(`${T.nodes_removed.length} removed`);
          const ye = ue.length ? `: ${ue.join(", ")}` : "";
          ge(`✓ Environment synced${ye}`, "success"), await de();
        } else {
          const ue = T.errors.length ? T.errors.join("; ") : T.message;
          ge(`Sync failed: ${ue}`, "error");
        }
      } catch (T) {
        Me(A), ge(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function eo(A) {
      const T = ge(`Creating environment "${A}"...`, "info", 0);
      Me(T), ge("Environment creation not yet implemented", "warning");
    }
    async function to(A) {
      const T = ge(`Deleting environment "${A}"...`, "info", 0);
      Me(T), ge("Environment deletion not yet implemented", "warning");
    }
    function oo(A) {
      ge(`Viewing details for "${A}"`, "info"), J("models-env", "this-env");
    }
    function Dt() {
      if (!_.value) return [];
      const A = [], T = _.value.workflows;
      return T.new.length && A.push(`${T.new.length} new workflow(s)`), T.modified.length && A.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && A.push(`${T.deleted.length} deleted workflow(s)`), A;
    }
    return ke(de), (A, T) => {
      var ue, ye, Re, De;
      return o(), n("div", Hf, [
        e("div", Kf, [
          e("div", qf, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), n("div", Jf)) : c("", !0)
          ]),
          e("div", Yf, [
            e("button", {
              class: Q(["icon-btn", { spinning: $.value }]),
              onClick: de,
              title: "Refresh"
            }, [...T[28] || (T[28] = [
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
              onClick: T[0] || (T[0] = (le) => s("close")),
              title: "Close"
            }, [...T[29] || (T[29] = [
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
        e("div", Xf, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (le) => J("environments", "all-envs"))
          }, [
            _.value ? (o(), n("div", Qf, [
              e("span", null, l(((ue = R.value) == null ? void 0 : ue.name) || ((ye = _.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", Zf, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", eg, [
          e("div", tg, [
            e("div", og, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "status" && G.value === "this-env" }]),
                onClick: T[2] || (T[2] = (le) => J("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "workflows" }]),
                onClick: T[3] || (T[3] = (le) => J("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "models-env" }]),
                onClick: T[4] || (T[4] = (le) => J("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "branches" }]),
                onClick: T[5] || (T[5] = (le) => J("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "history" }]),
                onClick: T[6] || (T[6] = (le) => J("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "nodes" }]),
                onClick: T[7] || (T[7] = (le) => J("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (le) => J("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", sg, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "environments" }]),
                onClick: T[9] || (T[9] = (le) => J("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "model-index" }]),
                onClick: T[10] || (T[10] = (le) => J("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "settings" }]),
                onClick: T[11] || (T[11] = (le) => J("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (le) => J("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ng, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "export" }]),
                onClick: T[13] || (T[13] = (le) => J("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "import" }]),
                onClick: T[14] || (T[14] = (le) => J("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Q(["sidebar-item", { active: B.value === "remotes" }]),
                onClick: T[15] || (T[15] = (le) => J("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ag, [
            g.value ? (o(), n("div", lg, l(g.value), 1)) : !_.value && B.value === "status" ? (o(), n("div", ig, " Loading status... ")) : (o(), n(F, { key: 2 }, [
              B.value === "status" ? (o(), C(Pn, {
                key: 0,
                status: _.value,
                onSwitchBranch: se,
                onCommitChanges: T[16] || (T[16] = (le) => oe.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (le) => ze.value = !0),
                onViewWorkflows: T[18] || (T[18] = (le) => J("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (le) => J("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (le) => J("debug-env", "this-env"))
              }, null, 8, ["status"])) : B.value === "workflows" ? (o(), C(Yd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: te,
                onRefresh: de
              }, null, 512)) : B.value === "models-env" ? (o(), C(Zd, {
                key: 2,
                onNavigate: ne
              })) : B.value === "branches" ? (o(), C(ea, {
                key: 3,
                branches: k.value,
                current: ((Re = _.value) == null ? void 0 : Re.branch) || null,
                onSwitch: bt,
                onCreate: W
              }, null, 8, ["branches", "current"])) : B.value === "history" ? (o(), C(ua, {
                key: 4,
                commits: I.value,
                onSelect: $e,
                onCheckout: Je
              }, null, 8, ["commits"])) : B.value === "nodes" ? (o(), C(lc, { key: 5 })) : B.value === "debug-env" ? (o(), C(au, { key: 6 })) : B.value === "environments" ? (o(), C(pu, {
                key: 7,
                onSwitch: he,
                onCreate: eo,
                onDelete: to,
                onViewDetails: oo
              })) : B.value === "model-index" ? (o(), C(tc, { key: 8 })) : B.value === "settings" ? (o(), C(tu, { key: 9 })) : B.value === "debug-workspace" ? (o(), C(su, { key: 10 })) : B.value === "export" ? (o(), C(Iu, { key: 11 })) : B.value === "import" ? (o(), C(tv, { key: 12 })) : B.value === "remotes" ? (o(), C(Oc, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        S.value ? (o(), C(wv, {
          key: 0,
          commit: S.value,
          onClose: T[21] || (T[21] = (le) => S.value = null),
          onCheckout: Je,
          onCreateBranch: O
        }, null, 8, ["commit"])) : c("", !0),
        fe.value ? (o(), C(Cv, {
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
          onCancel: T[22] || (T[22] = (le) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        v(kf, {
          show: Y.value,
          "from-environment": ((De = R.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": N.value,
          onConfirm: Te,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        oe.value && _.value ? (o(), C(Ht, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (le) => oe.value = !1),
          onCommitted: Qt
        }, null, 8, ["status"])) : c("", !0),
        ze.value && _.value ? (o(), C(Gf, {
          key: 3,
          show: ze.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: Zt,
          onClose: T[24] || (T[24] = (le) => ze.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        v(Nf, {
          show: U.value,
          state: P.value.state,
          progress: P.value.progress,
          message: P.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = be((le) => L.value = !1, ["self"]))
        }, [
          e("div", rg, [
            e("div", dg, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (le) => L.value = !1)
              }, [...T[37] || (T[37] = [
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
            e("div", cg, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", ug, [
                (o(!0), n(F, null, Z(x.value, (le) => (o(), n("div", {
                  key: le.name,
                  class: Q(["env-item", { current: le.is_current }])
                }, [
                  e("div", mg, [
                    e("div", vg, [
                      e("span", fg, l(le.is_current ? "●" : "○"), 1),
                      e("span", gg, l(le.name), 1),
                      le.current_branch ? (o(), n("span", hg, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), n("span", pg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", yg, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Mh) => he(le.name)
                  }, " SWITCH ", 8, wg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", bg, [
          v(io, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(F, null, Z(pe.value, (le) => (o(), n("div", {
                key: le.id,
                class: Q(["toast", le.type])
              }, [
                e("span", kg, l(q(le.type)), 1),
                e("span", _g, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Cg = /* @__PURE__ */ K($g, [["__scopeId", "data-v-734ed318"]]), xg = { class: "item-header" }, Sg = { class: "item-info" }, Ig = { class: "filename" }, Eg = { class: "metadata" }, zg = { class: "size" }, Mg = {
  key: 0,
  class: "type"
}, Lg = { class: "item-actions" }, Tg = {
  key: 0,
  class: "progress-section"
}, Rg = { class: "progress-bar" }, Dg = { class: "progress-stats" }, Ng = { class: "downloaded" }, Og = { class: "speed" }, Ug = {
  key: 0,
  class: "eta"
}, Bg = {
  key: 1,
  class: "status-msg paused"
}, Pg = {
  key: 2,
  class: "status-msg queued"
}, Vg = {
  key: 3,
  class: "status-msg completed"
}, Ag = {
  key: 4,
  class: "status-msg failed"
}, Fg = {
  key: 0,
  class: "retries"
}, Wg = /* @__PURE__ */ H({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function i(h) {
      if (h === 0) return "?";
      const m = h / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function w(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), n("div", {
      class: Q(["download-item", `status-${t.item.status}`])
    }, [
      e("div", xg, [
        e("div", Sg, [
          e("div", Ig, l(t.item.filename), 1),
          e("div", Eg, [
            e("span", zg, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", Mg, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Lg, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (r) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (r) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (r) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (r) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", Tg, [
        e("div", Rg, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Dg, [
          e("span", Ng, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", Og, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", Ug, l(w(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", Bg, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Pg, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", Vg, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Ag, [
        y(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Fg, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ K(Wg, [["__scopeId", "data-v-2110df65"]]), Gg = { class: "queue-title" }, jg = { class: "count" }, Hg = { class: "queue-actions" }, Kg = { class: "action-label" }, qg = {
  key: 0,
  class: "overall-progress"
}, Jg = { class: "progress-bar" }, Yg = {
  key: 0,
  class: "current-mini"
}, Xg = { class: "filename" }, Qg = { class: "speed" }, Zg = {
  key: 1,
  class: "queue-content"
}, eh = {
  key: 0,
  class: "section"
}, th = {
  key: 1,
  class: "section"
}, oh = { class: "section-header" }, sh = { class: "section-label paused" }, nh = { class: "items-list" }, ah = {
  key: 2,
  class: "section"
}, lh = { class: "section-header" }, ih = { class: "section-label" }, rh = { class: "items-list" }, dh = {
  key: 3,
  class: "section"
}, ch = { class: "section-header" }, uh = { class: "section-label" }, mh = { class: "items-list" }, vh = {
  key: 4,
  class: "section"
}, fh = { class: "section-header" }, gh = { class: "section-label failed" }, hh = { class: "items-list" }, ph = /* @__PURE__ */ H({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: f,
      failedItems: w,
      pausedItems: h,
      hasItems: m,
      activeCount: r,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: M,
      removeItem: E,
      clearCompleted: _
    } = wt(), I = z(!1);
    let k = null;
    Et(
      () => ({
        active: r.value,
        failed: w.value.length,
        paused: h.value.length,
        completed: f.value.length
      }),
      (g, S) => {
        k && (clearTimeout(k), k = null);
        const L = g.active === 0 && g.failed === 0 && g.paused === 0 && g.completed > 0, te = S && (S.active > 0 || S.paused > 0);
        L && te && (k = setTimeout(() => {
          _(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = D(() => {
      var L;
      if (d.items.length === 0) return 0;
      const g = f.value.length, S = ((L = s.value) == null ? void 0 : L.progress) || 0;
      return Math.round((g + S / 100) / d.items.length * 100);
    });
    function R(g) {
      u(g);
    }
    function $(g) {
      return g === 0 ? "" : `${(g / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (g, S) => (o(), C(Le, { to: "body" }, [
      me(m) ? (o(), n("div", {
        key: 0,
        class: Q(["model-download-queue", { minimized: !I.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: S[0] || (S[0] = (L) => I.value = !I.value)
        }, [
          e("div", Gg, [
            S[4] || (S[4] = e("span", { class: "icon" }, "↓", -1)),
            S[5] || (S[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", jg, "(" + l(me(r)) + "/" + l(me(d).items.length) + ")", 1)
          ]),
          e("div", Hg, [
            e("span", Kg, l(I.value ? "minimize" : "expand"), 1)
          ])
        ]),
        I.value ? (o(), n("div", Zg, [
          me(s) ? (o(), n("div", eh, [
            S[6] || (S[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            v(it, {
              item: me(s),
              onCancel: S[1] || (S[1] = (L) => R(me(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          me(h).length > 0 ? (o(), n("div", th, [
            e("div", oh, [
              e("span", sh, "Paused (" + l(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: S[2] || (S[2] = //@ts-ignore
                (...L) => me(M) && me(M)(...L))
              }, "Resume All")
            ]),
            e("div", nh, [
              (o(!0), n(F, null, Z(me(h), (L) => (o(), C(it, {
                key: L.id,
                item: L,
                onResume: (te) => me(p)(L.id),
                onRemove: (te) => me(E)(L.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(i).length > 0 ? (o(), n("div", ah, [
            e("div", lh, [
              e("span", ih, "Queued (" + l(me(i).length) + ")", 1)
            ]),
            e("div", rh, [
              (o(!0), n(F, null, Z(me(i), (L) => (o(), C(it, {
                key: L.id,
                item: L,
                onCancel: (te) => R(L.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          me(f).length > 0 ? (o(), n("div", dh, [
            e("div", ch, [
              e("span", uh, "Completed (" + l(me(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: S[3] || (S[3] = //@ts-ignore
                (...L) => me(_) && me(_)(...L))
              }, "Clear")
            ]),
            e("div", mh, [
              (o(!0), n(F, null, Z(me(f).slice(0, 3), (L) => (o(), C(it, {
                key: L.id,
                item: L,
                onRemove: (te) => me(E)(L.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          me(w).length > 0 ? (o(), n("div", vh, [
            e("div", fh, [
              e("span", gh, "Failed (" + l(me(w).length) + ")", 1)
            ]),
            e("div", hh, [
              (o(!0), n(F, null, Z(me(w), (L) => (o(), C(it, {
                key: L.id,
                item: L,
                onRetry: (te) => me(b)(L.id),
                onRemove: (te) => me(E)(L.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", qg, [
          e("div", Jg, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${x.value}%` })
            }, null, 4)
          ]),
          me(s) ? (o(), n("div", Yg, [
            e("span", Xg, l(me(s).filename), 1),
            e("span", Qg, l($(me(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), yh = /* @__PURE__ */ K(ph, [["__scopeId", "data-v-60751cfa"]]), wh = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', bh = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', kh = {
  comfy: wh,
  phosphor: bh
}, Tt = "comfy", Kt = "comfygit-theme";
let Ye = null, qt = Tt;
function _h() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Jt(t = Tt) {
  Ye && Ye.remove(), Ye = document.createElement("style"), Ye.id = "comfygit-theme-styles", Ye.setAttribute("data-theme", t), Ye.textContent = kh[t], document.head.appendChild(Ye), document.body.setAttribute("data-comfygit-theme", t), qt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function $h() {
  return qt;
}
function Ch(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const xh = _h();
Jt(xh);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Ch(t);
  },
  getTheme: () => {
    const t = $h();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ne = null, Ie = null, ut = null, rt = null, Pt = null;
const st = z(null);
async function pt() {
  var t;
  if (!((t = ot) != null && t.api)) return null;
  try {
    const d = await ot.api.fetchApi("/v2/comfygit/status");
    d.ok && (st.value = await d.json());
  } catch {
  }
}
function Sh() {
  if (!st.value) return !1;
  const t = st.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || st.value.has_changes;
}
function Ih() {
  Ne && Ne.remove(), Ne = document.createElement("div"), Ne.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ne.appendChild(t), Ne.addEventListener("click", (i) => {
    i.target === Ne && Ct();
  });
  const d = (i) => {
    i.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Mt(Cg, {
      onClose: Ct,
      onStatusUpdate: (i) => {
        st.value = i, mt();
      }
    })
  }).mount(t), document.body.appendChild(Ne);
}
function Ct() {
  Ne && (Ne.remove(), Ne = null);
}
function Eh(t) {
  dt(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (f) => {
    Ie && !Ie.contains(f.target) && f.target !== t && (dt(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (f) => {
    f.key === "Escape" && (dt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ut = zt({
    render: () => Mt(Ht, {
      status: st.value,
      onClose: dt,
      onCommitted: () => {
        dt(), pt().then(mt);
      }
    })
  }), ut.mount(Ie), document.body.appendChild(Ie);
}
function dt() {
  ut && (ut.unmount(), ut = null), Ie && (Ie.remove(), Ie = null);
}
function zh() {
  rt || (rt = document.createElement("div"), rt.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Mt(yh)
  }), Pt.mount(rt), document.body.appendChild(rt), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function mt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = Sh() ? "block" : "none");
}
const Yt = document.createElement("style");
Yt.textContent = `
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
document.head.appendChild(Yt);
ot.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, w;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ih, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => Eh(Fe), t.appendChild(d), t.appendChild(Fe), (w = (f = ot.menu) == null ? void 0 : f.settingsGroup) != null && w.element && (ot.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), zh();
    const { loadPendingDownloads: s } = wt();
    s(), await pt(), mt(), setInterval(async () => {
      await pt(), mt();
    }, 3e4);
    const i = ot.api;
    if (i) {
      let h = function() {
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
        const p = document.createElement("button");
        p.textContent = "Refresh", p.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => h(), u.appendChild(p);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => u.remove(), u.appendChild(M), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: p } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${p}`), await pt(), mt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), r = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
