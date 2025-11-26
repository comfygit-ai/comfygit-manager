import { app as ot } from "../../scripts/app.js";
import { defineComponent as J, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as de, createBlock as b, resolveDynamicComponent as It, normalizeClass as ee, withCtx as a, toDisplayString as l, createVNode as m, createTextVNode as f, computed as O, Fragment as W, renderList as Z, normalizeStyle as Qe, ref as M, onMounted as _e, watch as Et, Teleport as Le, withModifiers as be, Transition as so, withKeys as Ge, onUnmounted as no, reactive as At, readonly as ao, unref as ue, resolveComponent as lo, createSlots as Vt, TransitionGroup as io, createApp as zt, h as Mt } from "vue";
const ro = { class: "panel-layout" }, co = {
  key: 0,
  class: "panel-layout-header"
}, uo = {
  key: 1,
  class: "panel-layout-search"
}, mo = { class: "panel-layout-content" }, vo = {
  key: 2,
  class: "panel-layout-footer"
}, fo = /* @__PURE__ */ J({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", ro, [
      d.$slots.header ? (o(), n("div", co, [
        de(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", uo, [
        de(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", mo, [
        de(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", vo, [
        de(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Y = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, g] of d)
    s[i] = g;
  return s;
}, Ce = /* @__PURE__ */ Y(fo, [["__scopeId", "data-v-21565df9"]]), go = {
  key: 0,
  class: "panel-title-prefix"
}, ho = {
  key: 1,
  class: "panel-title-prefix-theme"
}, po = /* @__PURE__ */ J({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), b(It(`h${t.level}`), {
      class: ee(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", go, l(t.prefix), 1)) : (o(), n("span", ho)),
        de(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yo = /* @__PURE__ */ Y(po, [["__scopeId", "data-v-c3875efc"]]), wo = ["title"], ko = ["width", "height"], bo = /* @__PURE__ */ J({
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
      ])], 8, ko))
    ], 8, wo));
  }
}), Ft = /* @__PURE__ */ Y(bo, [["__scopeId", "data-v-6fc7f16d"]]), _o = { class: "header-left" }, $o = {
  key: 0,
  class: "header-actions"
}, Co = /* @__PURE__ */ J({
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
      class: ee(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", _o, [
        m(yo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            f(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), b(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", $o, [
        de(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-55a62cd6"]]), xo = {
  key: 0,
  class: "section-title-count"
}, So = {
  key: 1,
  class: "section-title-icon"
}, Io = /* @__PURE__ */ J({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), b(It(`h${t.level}`), {
      class: ee(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        de(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", xo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", So, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ Y(Io, [["__scopeId", "data-v-559361eb"]]), Eo = { class: "status-grid" }, zo = { class: "status-grid__column" }, Mo = { class: "status-grid__title" }, Lo = { class: "status-grid__column status-grid__column--right" }, To = { class: "status-grid__title" }, Ro = /* @__PURE__ */ J({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Eo, [
      e("div", zo, [
        e("h4", Mo, l(t.leftTitle), 1),
        de(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Lo, [
        e("h4", To, l(t.rightTitle), 1),
        de(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Do = /* @__PURE__ */ Y(Ro, [["__scopeId", "data-v-fe556068"]]), No = {
  key: 0,
  class: "status-item__icon"
}, Uo = {
  key: 1,
  class: "status-item__count"
}, Oo = { class: "status-item__label" }, Bo = /* @__PURE__ */ J({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = O(() => `status-item--${d.variant}`);
    return (i, g) => (o(), n("div", {
      class: ee(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", No, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Uo, l(t.count), 1)) : c("", !0),
      e("span", Oo, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(Bo, [["__scopeId", "data-v-6f929183"]]), Po = { class: "issue-card__header" }, Ao = { class: "issue-card__icon" }, Vo = { class: "issue-card__title" }, Fo = {
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
}, Ho = /* @__PURE__ */ J({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = O(() => `issue-card--${d.severity}`);
    return (i, g) => (o(), n("div", {
      class: ee(["issue-card", s.value])
    }, [
      e("div", Po, [
        e("span", Ao, l(t.icon), 1),
        e("h4", Vo, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Fo, [
        t.description ? (o(), n("p", Wo, l(t.description), 1)) : c("", !0),
        de(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Go, [
        (o(!0), n(W, null, Z(t.items, (y, p) => (o(), n("div", {
          key: p,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", jo, [
        de(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ Y(Ho, [["__scopeId", "data-v-df6aa348"]]), Ko = ["type", "disabled"], qo = {
  key: 0,
  class: "spinner"
}, Jo = /* @__PURE__ */ J({
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
      class: ee(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", qo)) : c("", !0),
      t.loading ? c("", !0) : de(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ko));
  }
}), G = /* @__PURE__ */ Y(Jo, [["__scopeId", "data-v-772abe47"]]), Yo = { class: "empty-state" }, Xo = {
  key: 0,
  class: "empty-icon"
}, Qo = { class: "empty-message" }, Zo = /* @__PURE__ */ J({
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
      t.actionLabel ? (o(), b(G, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          f(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ Y(Zo, [["__scopeId", "data-v-4466284f"]]), es = { class: "branch-indicator" }, ts = { class: "branch-indicator__info" }, os = { class: "branch-indicator__label" }, ss = { class: "branch-indicator__name" }, ns = {
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
}, ds = /* @__PURE__ */ J({
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
        de(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ Y(ds, [["__scopeId", "data-v-cb8dd50e"]]), us = /* @__PURE__ */ J({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-label"]),
      style: Qe({ minWidth: t.minWidth })
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ Y(us, [["__scopeId", "data-v-75e9eeb8"]]), ms = /* @__PURE__ */ J({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: ee(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ Y(ms, [["__scopeId", "data-v-2f186e4c"]]), vs = { class: "detail-row" }, fs = /* @__PURE__ */ J({
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
      m(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          f(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), b(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          f(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : de(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ae = /* @__PURE__ */ Y(fs, [["__scopeId", "data-v-ef15664a"]]), gs = { class: "modal-header" }, hs = { class: "modal-body" }, ps = { class: "status-section" }, ys = {
  key: 0,
  class: "status-section"
}, ws = { class: "section-header-row" }, ks = {
  key: 0,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
  key: 1,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, zs = { class: "workflow-list" }, Ms = { class: "workflow-name" }, Ls = { class: "workflow-issue" }, Ts = {
  key: 2,
  class: "workflow-group"
}, Rs = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Us = { class: "workflow-name" }, Os = {
  key: 3,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, As = { class: "workflow-list" }, Vs = { class: "workflow-name" }, Fs = {
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
}, yn = { class: "section-header-row" }, wn = {
  key: 0,
  class: "drift-item"
}, kn = { class: "drift-list" }, bn = {
  key: 0,
  class: "drift-list-more"
}, _n = {
  key: 1,
  class: "drift-item"
}, $n = { class: "drift-list" }, Cn = {
  key: 0,
  class: "drift-list-more"
}, xn = {
  key: 2,
  class: "drift-item"
}, Sn = {
  key: 3,
  class: "drift-item"
}, In = {
  key: 3,
  class: "status-section"
}, En = { class: "info-box" }, zn = { class: "drift-list" }, Mn = {
  key: 0,
  class: "drift-list-more"
}, Ln = {
  key: 4,
  class: "status-section"
}, Tn = { class: "warning-box" }, Rn = {
  key: 5,
  class: "empty-state-inline"
}, Dn = { class: "modal-actions" }, Nn = /* @__PURE__ */ J({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const d = t, s = M(!1);
    _e(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (L, I) => {
      console.log("StatusDetailModal show prop changed from", I, "to", L);
    }, { immediate: !0 });
    const i = O(() => {
      var L, I, _;
      return ((_ = (I = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), g = O(() => {
      var L, I, _;
      return ((_ = (I = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), y = O(() => {
      var L, I, _;
      return ((_ = (I = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : I.synced) == null ? void 0 : _.filter((S) => {
        var $, F, B;
        const k = (B = (F = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : B.find((N) => N.name === S);
        return !k || k.status !== "broken";
      })) || [];
    }), p = O(() => {
      var L, I, _, S, k;
      return (L = d.status) != null && L.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = d.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), v = O(() => {
      var I, _, S;
      const L = (I = d.status) == null ? void 0 : I.git_changes;
      return L ? (((_ = L.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = L.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || L.workflow_changes || L.has_other_changes : !1;
    }), r = O(() => {
      var L, I, _, S, k, $;
      return !p.value && !v.value && ((I = (L = d.status) == null ? void 0 : L.comparison) == null ? void 0 : I.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && ((($ = (k = (S = d.status) == null ? void 0 : S.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), u = O(() => {
      var I, _;
      const L = (_ = (I = d.status) == null ? void 0 : I.git_changes) == null ? void 0 : _.workflow_changes;
      return L ? typeof L == "number" ? L : Object.keys(L).length : 0;
    });
    function w(L) {
      return typeof L == "string" ? L : L.name;
    }
    function h(L) {
      return typeof L == "object" && L.is_development === !0;
    }
    return (L, I) => {
      var _, S, k, $, F, B, N, q, x, C, E, D, U, R, z, A, V, K, Q, le, se, ve;
      return o(), b(Le, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[6] || (I[6] = (oe) => L.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[5] || (I[5] = be(() => {
            }, ["stop"]))
          }, [
            e("div", gs, [
              I[7] || (I[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (oe) => L.$emit("close"))
              }, "✕")
            ]),
            e("div", hs, [
              e("div", ps, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[8] || (I[8] = [
                    f("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                m(ae, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (o(), n("div", ys, [
                e("div", ws, [
                  m(Ee, { level: "4" }, {
                    default: a(() => [...I[9] || (I[9] = [
                      f("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (oe) => L.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", ks, [
                  e("div", bs, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), n(W, null, Z(i.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(oe.name), 1),
                      e("span", xs, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), n("div", Ss, [
                  e("div", Is, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", zs, [
                    (o(!0), n(W, null, Z(g.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ms, l(oe.name), 1),
                      e("span", Ls, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = (_ = t.status.workflows) == null ? void 0 : _.new) != null && S.length ? (o(), n("div", Ts, [
                  e("div", Rs, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ds, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(W, null, Z(t.status.workflows.new, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Us, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (k = t.status.workflows) == null ? void 0 : k.modified) != null && $.length ? (o(), n("div", Os, [
                  e("div", Bs, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ps, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", As, [
                    (o(!0), n(W, null, Z(t.status.workflows.modified, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (B = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && B.length ? (o(), n("div", Fs, [
                  e("div", Ws, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Gs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), n(W, null, Z(t.status.workflows.deleted, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", Ks, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (oe) => s.value = !s.value)
                  }, [
                    I[15] || (I[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", qs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Js, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ys, [
                    (o(!0), n(W, null, Z(y.value, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(oe), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (o(), n("div", Qs, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[16] || (I[16] = [
                    f("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (N = t.status.git_changes) == null ? void 0 : N.nodes_added) != null && q.length ? (o(), n("div", Zs, [
                  e("div", en, [
                    I[17] || (I[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", tn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), n(W, null, Z(t.status.git_changes.nodes_added, (oe) => (o(), n("div", {
                      key: w(oe),
                      class: "change-item"
                    }, [
                      e("span", sn, l(w(oe)), 1),
                      h(oe) ? (o(), n("span", nn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (x = t.status.git_changes) == null ? void 0 : x.nodes_removed) != null && C.length ? (o(), n("div", an, [
                  e("div", ln, [
                    I[18] || (I[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", rn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), n(W, null, Z(t.status.git_changes.nodes_removed, (oe) => (o(), n("div", {
                      key: w(oe),
                      class: "change-item"
                    }, [
                      e("span", cn, l(w(oe)), 1),
                      h(oe) ? (o(), n("span", un, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = t.status.git_changes) != null && E.workflow_changes ? (o(), n("div", mn, [
                  I[19] || (I[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", vn, [
                    e("div", fn, [
                      e("span", gn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (o(), n("div", hn, [...I[20] || (I[20] = [
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
              (U = t.status.comparison) != null && U.is_synced ? c("", !0) : (o(), n("div", pn, [
                e("div", yn, [
                  m(Ee, { level: "4" }, {
                    default: a(() => [...I[21] || (I[21] = [
                      f("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[3] || (I[3] = (oe) => L.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                I[22] || (I[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (z = (R = t.status.comparison) == null ? void 0 : R.missing_nodes) != null && z.length ? (o(), n("div", wn, [
                  m(ae, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", kn, [
                    (o(!0), n(W, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", bn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (V = (A = t.status.comparison) == null ? void 0 : A.extra_nodes) != null && V.length ? (o(), n("div", _n, [
                  m(ae, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", $n, [
                    (o(!0), n(W, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", Cn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Q = (K = t.status.comparison) == null ? void 0 : K.version_mismatches) != null && Q.length ? (o(), n("div", xn, [
                  m(ae, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (le = t.status.comparison) != null && le.packages_in_sync ? c("", !0) : (o(), n("div", Sn, [
                  m(ae, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ve = (se = t.status.comparison) == null ? void 0 : se.disabled_nodes) != null && ve.length ? (o(), n("div", In, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[23] || (I[23] = [
                    f("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", En, [
                  I[24] || (I[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", zn, [
                  (o(!0), n(W, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (o(), n("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + l(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Mn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Ln, [
                m(Ee, { level: "4" }, {
                  default: a(() => [...I[25] || (I[25] = [
                    f("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Tn, [
                  I[26] || (I[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[27] || (I[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Rn, [...I[28] || (I[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Dn, [
              m(G, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (oe) => L.$emit("close"))
              }, {
                default: a(() => [...I[29] || (I[29] = [
                  f(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ Y(Nn, [["__scopeId", "data-v-c67eed17"]]), Un = { class: "health-section-header" }, On = { style: { "margin-top": "var(--cg-space-1)" } }, Bn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Pn = /* @__PURE__ */ J({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch", "view-nodes"],
  setup(t, { emit: d }) {
    const s = t, i = M(!1), g = M(!1);
    _e(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function p() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function v() {
      i.value = !1, u("view-workflows");
    }
    function r() {
      i.value = !1, u("view-nodes");
    }
    const u = d, w = O(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), h = O(() => {
      const x = s.status.git_changes;
      return x.nodes_added.length > 0 || x.nodes_removed.length > 0 || x.workflow_changes || x.has_other_changes;
    }), L = O(() => w.value || h.value), I = O(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), _ = O(() => s.status.git_changes.has_other_changes), S = O(() => {
      var x;
      return ((x = s.status.workflows.analyzed) == null ? void 0 : x.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), k = O(() => {
      var x;
      return ((x = s.status.workflows.analyzed) == null ? void 0 : x.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), $ = O(() => S.value.length > 0 || k.value.length > 0), F = O(() => $.value || s.status.missing_models_count > 0 || L.value || !s.status.comparison.is_synced), B = O(() => {
      const x = [];
      return s.status.workflows.new.length > 0 && x.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && x.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && x.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && x.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && x.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${x.length > 0 ? x.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    }), N = O(() => {
      var E, D;
      const x = [], C = s.status.comparison;
      return (E = C.missing_nodes) != null && E.length && x.push(`${C.missing_nodes.length} missing node${C.missing_nodes.length === 1 ? "" : "s"}`), (D = C.extra_nodes) != null && D.length && x.push(`${C.extra_nodes.length} untracked node${C.extra_nodes.length === 1 ? "" : "s"}`), x.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${x.join(" and ")}.`;
    }), q = O(() => {
      var E, D;
      const x = [], C = s.status.comparison;
      return (E = C.extra_nodes) != null && E.length && (C.extra_nodes.slice(0, 3).forEach((U) => {
        x.push(`Untracked: ${U}`);
      }), C.extra_nodes.length > 3 && x.push(`...and ${C.extra_nodes.length - 3} more untracked`)), (D = C.missing_nodes) != null && D.length && (C.missing_nodes.slice(0, 3).forEach((U) => {
        x.push(`Missing: ${U}`);
      }), C.missing_nodes.length > 3 && x.push(`...and ${C.missing_nodes.length - 3} more missing`)), x;
    });
    return (x, C) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: C[0] || (C[0] = (E) => g.value = !0),
            onMouseleave: C[1] || (C[1] = (E) => g.value = !1)
          }, [
            e("div", Un, [
              m(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...C[10] || (C[10] = [
                  f(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              m(so, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), b(G, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...C[11] || (C[11] = [
                      f(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            m(Do, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), b(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), b(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), b(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                m(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: w.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), b(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), b(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), b(Ve, {
                  key: 2,
                  icon: "●",
                  count: I.value,
                  label: I.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                _.value ? (o(), b(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                h.value ? c("", !0) : (o(), b(Ve, {
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
            m(cs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                m(G, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C[2] || (C[2] = (E) => x.$emit("switch-branch"))
                }, {
                  default: a(() => [...C[12] || (C[12] = [
                    f(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), b(Ye, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: C[3] || (C[3] = (E) => x.$emit("create-branch"))
              }, {
                default: a(() => [...C[13] || (C[13] = [
                  f(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          F.value ? (o(), n("div", Bn, [
            m(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...C[14] || (C[14] = [
                f(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            S.value.length > 0 ? (o(), b(Ye, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${S.value.length} committed workflow${S.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: S.value.map((E) => `${E.name} — ${E.issue_summary}`)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: C[4] || (C[4] = (E) => x.$emit("view-workflows"))
                }, {
                  default: a(() => [...C[15] || (C[15] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            k.value.length > 0 ? (o(), b(Ye, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: k.value.map((E) => `${E.name} — ${E.issue_summary}`)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: C[5] || (C[5] = (E) => x.$emit("view-workflows"))
                }, {
                  default: a(() => [...C[16] || (C[16] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !$.value ? (o(), b(Ye, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: C[6] || (C[6] = (E) => x.$emit("view-workflows"))
                }, {
                  default: a(() => [...C[17] || (C[17] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            L.value ? (o(), b(Ye, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: B.value
            }, {
              actions: a(() => [
                m(G, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p
                }, {
                  default: a(() => [...C[18] || (C[18] = [
                    f(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: C[7] || (C[7] = (E) => x.$emit("commit-changes"))
                }, {
                  default: a(() => [...C[19] || (C[19] = [
                    f(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), b(Ye, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: N.value,
              items: q.value
            }, {
              actions: a(() => [
                m(G, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: a(() => [...C[20] || (C[20] = [
                    f(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                m(G, {
                  variant: "primary",
                  size: "sm",
                  onClick: C[8] || (C[8] = (E) => x.$emit("view-nodes"))
                }, {
                  default: a(() => [...C[21] || (C[21] = [
                    f(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !F.value && !h.value ? (o(), b(Ue, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      m(Nt, {
        show: i.value,
        status: t.status,
        onClose: C[9] || (C[9] = (E) => i.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), An = /* @__PURE__ */ Y(Pn, [["__scopeId", "data-v-d1cf48a7"]]), Vn = ["type", "value", "placeholder", "disabled"], Fn = /* @__PURE__ */ J({
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
    const i = t, g = s, y = M(null);
    function p(v) {
      const r = v.target.value;
      g("update:modelValue", r);
    }
    return _e(() => {
      i.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.blur();
      }
    }), (v, r) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ee(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        r[0] || (r[0] = Ge((u) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ge((u) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => v.$emit("blur"))
    }, null, 42, Vn));
  }
}), ft = /* @__PURE__ */ Y(Fn, [["__scopeId", "data-v-0380d08f"]]), Wn = { class: "branch-create-form" }, Gn = { class: "form-actions" }, jn = /* @__PURE__ */ J({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = M(""), g = O(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function y() {
      g.value && (s("create", i.value.trim()), i.value = "");
    }
    function p() {
      i.value = "", s("cancel");
    }
    return (v, r) => (o(), n("div", Wn, [
      m(ft, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", Gn, [
        m(G, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: a(() => [...r[1] || (r[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        m(G, {
          variant: "secondary",
          size: "sm",
          onClick: p
        }, {
          default: a(() => [...r[2] || (r[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Hn = /* @__PURE__ */ Y(jn, [["__scopeId", "data-v-7c500394"]]), Kn = { class: "branch-list-item__indicator" }, qn = { class: "branch-list-item__name" }, Jn = {
  key: 0,
  class: "branch-list-item__actions"
}, Yn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Xn = /* @__PURE__ */ J({
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
      class: ee(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, [
      e("span", Kn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", qn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Jn, [
        de(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Yn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Qn = /* @__PURE__ */ Y(Xn, [["__scopeId", "data-v-c6581a24"]]), Zn = {
  key: 2,
  class: "branch-list"
}, ea = /* @__PURE__ */ J({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = M(!1);
    function g(p) {
      s("create", p), y();
    }
    function y() {
      i.value = !1;
    }
    return (p, v) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            m(G, {
              variant: "ghost",
              size: "sm",
              onClick: v[0] || (v[0] = (r) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...v[1] || (v[1] = [
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
        i.value ? (o(), b(Hn, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), b(Ue, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Zn, [
          (o(!0), n(W, null, Z(t.branches, (r) => (o(), b(Qn, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), b(G, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => p.$emit("switch", r.name)
              }, {
                default: a(() => [...v[2] || (v[2] = [
                  f(" Switch ", -1)
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
}), ta = /* @__PURE__ */ Y(ea, [["__scopeId", "data-v-763d6ec4"]]), oa = { class: "commit-list" }, sa = /* @__PURE__ */ J({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", oa, [
      de(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), na = /* @__PURE__ */ Y(sa, [["__scopeId", "data-v-8c5ee761"]]), aa = { class: "commit-hash" }, la = /* @__PURE__ */ J({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = O(() => d.hash.slice(0, d.length));
    return (i, g) => (o(), n("span", aa, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ Y(la, [["__scopeId", "data-v-7c333cc6"]]), ia = { class: "commit-message" }, ra = { class: "commit-date" }, da = /* @__PURE__ */ J({
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
    function g() {
      s.clickable && i("click");
    }
    return (y, p) => (o(), n("div", {
      class: ee(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      m(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ia, l(t.message), 1),
      e("span", ra, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = be(() => {
        }, ["stop"]))
      }, [
        de(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ Y(da, [["__scopeId", "data-v-dd7c621b"]]), ua = /* @__PURE__ */ J({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), b(Ue, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(na, { key: 1 }, {
          default: a(() => [
            (o(!0), n(W, null, Z(t.commits, (i) => (o(), b(ca, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (g) => d.$emit("select", i)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => d.$emit("checkout", i),
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
}), ma = /* @__PURE__ */ Y(ua, [["__scopeId", "data-v-981c3c64"]]), Dh = [
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
], Nh = {
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
}, va = [
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
], Uh = [
  ...va,
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
function pt() {
  return !1;
}
function Se() {
  const t = M(!1), d = M(null);
  async function s(X, ne) {
    var $e;
    if (!(($e = window.app) != null && $e.api))
      throw new Error("ComfyUI API not available");
    const he = await window.app.api.fetchApi(X, ne);
    if (!he.ok) {
      const et = await he.json().catch(() => ({}));
      throw new Error(et.error || et.message || `Request failed: ${he.status}`);
    }
    return he.json();
  }
  async function i(X = !1) {
    return s(X ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(X, ne = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: X, allow_issues: ne })
    });
  }
  async function y(X = 10, ne = 0) {
    return s(`/v2/comfygit/log?limit=${X}&offset=${ne}`);
  }
  async function p(X) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
    });
  }
  async function v() {
    return s("/v2/comfygit/branches");
  }
  async function r(X) {
    return s(`/v2/comfygit/commit/${X}`);
  }
  async function u(X, ne = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: X, force: ne })
    });
  }
  async function w(X, ne = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, start_point: ne })
    });
  }
  async function h(X, ne = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: X, force: ne })
    });
  }
  async function L() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const X = await i();
        return [{
          name: X.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + X.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: X.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: X.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function I(X) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: X })
    });
  }
  async function _() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function S(X, ne, he) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, pytorch_backend: ne, clone_from: he })
    });
  }
  async function k(X) {
    return s(`/v2/workspace/environments/${X}`, {
      method: "DELETE"
    });
  }
  async function $(X = !1) {
    try {
      return s(X ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ne = await i(X), he = [];
      return ne.workflows.new.forEach(($e) => {
        he.push({ name: $e, status: "new", missing_nodes: 0, missing_models: 0, path: $e });
      }), ne.workflows.modified.forEach(($e) => {
        he.push({ name: $e, status: "modified", missing_nodes: 0, missing_models: 0, path: $e });
      }), ne.workflows.synced.forEach(($e) => {
        he.push({ name: $e, status: "synced", missing_nodes: 0, missing_models: 0, path: $e });
      }), he;
    }
  }
  async function F(X) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(X)}/details`);
  }
  async function B(X) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(X)}/resolve`, {
      method: "POST"
    });
  }
  async function N(X, ne, he) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(X)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ne, install_models: he })
    });
  }
  async function q(X, ne, he) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(X)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ne, importance: he })
    });
  }
  async function x() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function C() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function E(X, ne) {
    return s(`/v2/workspace/models/${X}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ne })
    });
  }
  async function D(X) {
    return s(`/v2/workspace/models/${X}`, {
      method: "DELETE"
    });
  }
  async function U(X) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function R() {
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
  async function z(X) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function A(X, ne) {
    try {
      const he = new URLSearchParams();
      return X && he.append("level", X), ne && he.append("lines", ne.toString()), s(`/v2/comfygit/debug/logs?${he}`);
    } catch {
      return [];
    }
  }
  async function V(X, ne) {
    try {
      const he = new URLSearchParams();
      return X && he.append("level", X), ne && he.append("lines", ne.toString()), s(`/v2/workspace/debug/logs?${he}`);
    } catch {
      return [];
    }
  }
  async function K() {
    try {
      return s("/v2/comfygit/nodes");
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
  async function Q(X) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(X)}/track-dev`, {
      method: "POST"
    });
  }
  async function le(X) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(X)}/install`, {
      method: "POST"
    });
  }
  async function se(X) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(X)}/update`, {
      method: "POST"
    });
  }
  async function ve(X) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function oe() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ze(X, ne) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, url: ne })
    });
  }
  async function pe(X) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Ze(X, ne, he) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ne, push_url: he })
    });
  }
  async function fe(X) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(X)}/fetch`, {
      method: "POST"
    });
  }
  async function Me(X) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(X)}/status`);
    } catch {
      return null;
    }
  }
  async function lt(X = "skip", ne = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: X,
        remove_extra_nodes: ne
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: g,
    getHistory: y,
    exportEnv: p,
    // Git Operations
    getBranches: v,
    getCommitDetail: r,
    checkout: u,
    createBranch: w,
    switchBranch: h,
    // Environment Management
    getEnvironments: L,
    switchEnvironment: I,
    getSwitchProgress: _,
    createEnvironment: S,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: $,
    getWorkflowDetails: F,
    resolveWorkflow: B,
    installWorkflowDeps: N,
    setModelImportance: q,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: C,
    updateModelSource: E,
    deleteModel: D,
    downloadModel: U,
    // Settings
    getConfig: R,
    updateConfig: z,
    // Debug/Logs
    getEnvironmentLogs: A,
    getWorkspaceLogs: V,
    // Node Management
    getNodes: K,
    trackNodeAsDev: Q,
    installNode: le,
    updateNode: se,
    uninstallNode: ve,
    // Git Remotes
    getRemotes: oe,
    addRemote: ze,
    removeRemote: pe,
    updateRemoteUrl: Ze,
    fetchRemote: fe,
    getRemoteSyncStatus: Me,
    // Environment Sync
    syncEnvironmentManually: lt
  };
}
const fa = { class: "base-modal-header" }, ga = {
  key: 0,
  class: "base-modal-title"
}, ha = { class: "base-modal-body" }, pa = {
  key: 0,
  class: "base-modal-loading"
}, ya = {
  key: 1,
  class: "base-modal-error"
}, wa = {
  key: 0,
  class: "base-modal-footer"
}, ka = /* @__PURE__ */ J({
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
    function g() {
      s.closeOnOverlayClick && i("close");
    }
    function y(p) {
      p.key === "Escape" && i("close");
    }
    return _e(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), no(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (p, v) => (o(), b(Le, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ee(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", fa, [
            de(p.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", ga, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (r) => p.$emit("close"))
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
          e("div", ha, [
            t.loading ? (o(), n("div", pa, "Loading...")) : t.error ? (o(), n("div", ya, l(t.error), 1)) : de(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (o(), n("div", wa, [
            de(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), wt = /* @__PURE__ */ Y(ka, [["__scopeId", "data-v-2125a0e6"]]), ba = ["type", "disabled"], _a = {
  key: 0,
  class: "spinner"
}, $a = /* @__PURE__ */ J({
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
      class: ee(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", _a)) : c("", !0),
      de(d.$slots, "default", {}, void 0, !0)
    ], 10, ba));
  }
}), re = /* @__PURE__ */ Y($a, [["__scopeId", "data-v-f3452606"]]), Ca = {
  key: 0,
  class: "base-title-count"
}, xa = /* @__PURE__ */ J({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), b(It(`h${t.level}`), {
      class: ee(["base-title", t.variant])
    }, {
      default: a(() => [
        de(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Ca, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ Y(xa, [["__scopeId", "data-v-5a01561d"]]), Sa = ["value", "disabled"], Ia = {
  key: 0,
  value: "",
  disabled: ""
}, Ea = ["value"], za = {
  key: 0,
  class: "base-select-error"
}, Ma = /* @__PURE__ */ J({
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
    return (i, g) => (o(), n("div", {
      class: ee(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ee(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => i.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ia, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(W, null, Z(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, Ea))), 128))
      ], 42, Sa),
      t.error ? (o(), n("span", za, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), La = /* @__PURE__ */ Y(Ma, [["__scopeId", "data-v-7436d745"]]), Ta = { class: "popover-header" }, Ra = { class: "popover-title" }, Da = { class: "popover-content" }, Na = {
  key: 0,
  class: "popover-actions"
}, Ua = /* @__PURE__ */ J({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), b(Le, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Qe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Ta, [
            e("h4", Ra, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Da, [
            de(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Na, [
            de(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ Y(Ua, [["__scopeId", "data-v-42815ace"]]), Oa = { class: "detail-section" }, Ba = {
  key: 0,
  class: "empty-message"
}, Pa = { class: "model-header" }, Aa = { class: "model-name" }, Va = { class: "model-details" }, Fa = { class: "model-row" }, Wa = { class: "model-row" }, Ga = { class: "label" }, ja = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ha = { class: "node-list" }, Ka = ["onClick"], qa = {
  key: 1,
  class: "model-row"
}, Ja = { class: "value" }, Ya = {
  key: 0,
  class: "model-actions"
}, Xa = { class: "detail-section" }, Qa = {
  key: 0,
  class: "empty-message"
}, Za = { class: "node-name" }, el = {
  key: 0,
  class: "node-version"
}, tl = /* @__PURE__ */ J({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: p } = Se(), v = M(null), r = M(!1), u = M(null), w = M(!1), h = M({}), L = M({}), I = M(!1), _ = M(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(D) {
      switch (D) {
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
    function $(D) {
      switch (D) {
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
    function F(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const U = D.hash || D.filename;
      return _.value.has(U) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function B(D) {
      return _.value.has(D);
    }
    function N(D) {
      _.value.has(D) ? _.value.delete(D) : _.value.add(D), _.value = new Set(_.value);
    }
    async function q() {
      r.value = !0, u.value = null;
      try {
        v.value = await g(s.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function x(D, U) {
      h.value[D] = U, w.value = !0;
    }
    async function C() {
      if (!w.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [D, U] of Object.entries(h.value))
          await y(s.workflowName, D, U);
        i("refresh"), i("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function E(D) {
      L.value[D] = !0, u.value = null;
      try {
        await p(s.workflowName, !0, !1), await q();
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to install node";
      } finally {
        L.value[D] = !1;
      }
    }
    return _e(q), (D, U) => (o(), n(W, null, [
      m(wt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: U[5] || (U[5] = (R) => i("close"))
      }, {
        body: a(() => [
          v.value ? (o(), n(W, { key: 0 }, [
            e("section", Oa, [
              m(ut, { variant: "section" }, {
                default: a(() => [
                  f("MODELS USED (" + l(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), n("div", Ba, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, Z(v.value.models, (R) => (o(), n("div", {
                key: R.hash || R.filename,
                class: "model-card"
              }, [
                e("div", Pa, [
                  U[7] || (U[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Aa, l(R.filename), 1)
                ]),
                e("div", Va, [
                  e("div", Fa, [
                    U[8] || (U[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ee(["value", k(R.status)])
                    }, l($(R.status)), 3)
                  ]),
                  e("div", Wa, [
                    e("span", Ga, [
                      U[9] || (U[9] = f(" Importance: ", -1)),
                      m(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: U[0] || (U[0] = (z) => I.value = !0)
                      })
                    ]),
                    m(La, {
                      "model-value": h.value[R.filename] || R.importance,
                      options: S,
                      "onUpdate:modelValue": (z) => x(R.filename, z)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  R.loaded_by && R.loaded_by.length > 0 ? (o(), n("div", ja, [
                    U[10] || (U[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ha, [
                      (o(!0), n(W, null, Z(F(R), (z, A) => (o(), n("div", {
                        key: `${z.node_id}-${A}`,
                        class: "node-reference"
                      }, l(z.node_type) + " (Node #" + l(z.node_id) + ") ", 1))), 128)),
                      R.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (z) => N(R.hash || R.filename)
                      }, l(B(R.hash || R.filename) ? "▼ Show less" : `▶ View all (${R.loaded_by.length})`), 9, Ka)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  R.size_mb ? (o(), n("div", qa, [
                    U[11] || (U[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Ja, l(R.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                R.status !== "available" ? (o(), n("div", Ya, [
                  R.status === "downloadable" ? (o(), b(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: U[1] || (U[1] = (z) => i("resolve"))
                  }, {
                    default: a(() => [...U[12] || (U[12] = [
                      f(" Download ", -1)
                    ])]),
                    _: 1
                  })) : R.status === "path_mismatch" ? (o(), b(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[2] || (U[2] = (z) => i("resolve"))
                  }, {
                    default: a(() => [...U[13] || (U[13] = [
                      f(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[3] || (U[3] = (z) => i("resolve"))
                  }, {
                    default: a(() => [...U[14] || (U[14] = [
                      f(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Xa, [
              m(ut, { variant: "section" }, {
                default: a(() => [
                  f("NODES USED (" + l(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), n("div", Qa, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, Z(v.value.nodes, (R) => (o(), n("div", {
                key: R.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ee(["node-status", R.status === "installed" ? "installed" : "missing"])
                }, l(R.status === "installed" ? "✓" : "✕"), 3),
                e("span", Za, l(R.name), 1),
                R.version ? (o(), n("span", el, "v" + l(R.version), 1)) : c("", !0),
                R.status === "missing" ? (o(), b(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: L.value[R.name],
                  onClick: (z) => E(R.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...U[15] || (U[15] = [
                    f(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          m(re, {
            variant: "secondary",
            onClick: U[4] || (U[4] = (R) => i("close"))
          }, {
            default: a(() => [...U[16] || (U[16] = [
              f(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (o(), b(re, {
            key: 0,
            variant: "primary",
            onClick: C
          }, {
            default: a(() => [...U[17] || (U[17] = [
              f(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      m(je, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: U[6] || (U[6] = (R) => I.value = !1)
      }, {
        content: a(() => [...U[18] || (U[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              f(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              f(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              f(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ol = /* @__PURE__ */ Y(tl, [["__scopeId", "data-v-0b14d32e"]]), me = At({
  items: [],
  status: "idle"
});
let Ae = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return me.items.find((d) => d.id === t);
}
async function tt() {
  if (me.status === "downloading") return;
  const t = me.items.find((d) => d.status === "queued");
  if (!t) {
    me.status = "idle";
    return;
  }
  me.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await sl(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    me.status = "idle", tt();
  }
}
async function sl(t) {
  return new Promise((d, s) => {
    Ae && (Ae.close(), Ae = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ae = g;
    let y = Date.now(), p = 0, v = !1;
    g.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const w = Date.now(), h = (w - y) / 1e3;
            if (h > 0.5) {
              const L = t.downloaded - p;
              if (t.speed = L / h, y = w, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const I = t.size - t.downloaded;
                t.eta = I / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, g.close(), Ae = null, d();
            break;
          case "error":
            v = !0, g.close(), Ae = null, s(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ae = null, v || s(new Error("Connection lost"));
    };
  });
}
async function nl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const s of d.pending_downloads) {
      if (me.items.some((g) => g.url === s.url && g.filename === s.filename))
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
      me.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function kt() {
  function t(k) {
    for (const $ of k) {
      if (me.items.some(
        (N) => N.url === $.url && N.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(N.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const B = {
        id: Gt(),
        workflow: $.workflow,
        filename: $.filename,
        url: $.url,
        targetPath: $.targetPath,
        size: $.size || 0,
        type: $.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      me.items.push(B);
    }
    me.status === "idle" && tt();
  }
  async function d(k) {
    const $ = _t(k);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ae && (Ae.close(), Ae = null), $.status = "failed", $.error = "Cancelled by user", me.status = "idle", tt();
      } else if ($.status === "queued") {
        const F = me.items.findIndex((B) => B.id === k);
        F >= 0 && me.items.splice(F, 1);
      }
    }
  }
  function s(k) {
    const $ = _t(k);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, me.status === "idle" && tt());
  }
  function i(k) {
    const $ = _t(k);
    !$ || $.status !== "paused" || ($.status = "queued", me.status === "idle" && tt());
  }
  function g() {
    const k = me.items.filter(($) => $.status === "paused");
    for (const $ of k)
      $.status = "queued";
    me.status === "idle" && tt();
  }
  function y(k) {
    const $ = me.items.findIndex((F) => F.id === k);
    $ >= 0 && ["completed", "failed", "paused"].includes(me.items[$].status) && me.items.splice($, 1);
  }
  function p() {
    me.items = me.items.filter((k) => k.status !== "completed");
  }
  function v() {
    me.items = me.items.filter((k) => k.status !== "failed");
  }
  const r = O(
    () => me.items.find((k) => k.status === "downloading")
  ), u = O(
    () => me.items.filter((k) => k.status === "queued")
  ), w = O(
    () => me.items.filter((k) => k.status === "completed")
  ), h = O(
    () => me.items.filter((k) => k.status === "failed")
  ), L = O(
    () => me.items.filter((k) => k.status === "paused")
  ), I = O(() => me.items.length > 0), _ = O(
    () => me.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), S = O(
    () => me.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ao(me),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: w,
    failedItems: h,
    pausedItems: L,
    hasItems: I,
    activeCount: _,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: p,
    clearFailed: v,
    loadPendingDownloads: nl
  };
}
function al() {
  const t = M(null), d = M(null), s = M([]), i = M([]), g = M(!1), y = M(null);
  async function p(k, $) {
    var B;
    if (!((B = window.app) != null && B.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(k, $);
    if (!F.ok) {
      const N = await F.json().catch(() => ({})), q = N.error || N.message || `Request failed: ${F.status}`;
      throw new Error(q);
    }
    return F.json();
  }
  async function v(k) {
    g.value = !0, y.value = null;
    try {
      let $;
      return pt() || ($ = await p(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = $, $;
    } catch ($) {
      const F = $ instanceof Error ? $.message : "Unknown error occurred";
      throw y.value = F, $;
    } finally {
      g.value = !1;
    }
  }
  async function r(k, $, F) {
    g.value = !0, y.value = null;
    try {
      let B;
      if (!pt()) {
        const N = Object.fromEntries($), q = Object.fromEntries(F);
        B = await p(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: q
            })
          }
        );
      }
      return d.value = B, B;
    } catch (B) {
      const N = B instanceof Error ? B.message : "Unknown error occurred";
      throw y.value = N, B;
    } finally {
      g.value = !1;
    }
  }
  async function u(k, $ = 10) {
    g.value = !0, y.value = null;
    try {
      let F;
      return pt() || (F = await p(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: $ })
        }
      )), s.value = F.results, F.results;
    } catch (F) {
      const B = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = B, F;
    } finally {
      g.value = !1;
    }
  }
  async function w(k, $ = 10) {
    g.value = !0, y.value = null;
    try {
      let F;
      return pt() || (F = await p(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: $ })
        }
      )), i.value = F.results, F.results;
    } catch (F) {
      const B = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = B, F;
    } finally {
      g.value = !1;
    }
  }
  const h = At({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function L() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.error = void 0;
  }
  async function I(k, $, F) {
    L(), h.phase = "resolving", y.value = null;
    const B = Object.fromEntries($), N = Object.fromEntries(F);
    try {
      const q = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: B,
          model_choices: N
        })
      });
      if (!q.ok)
        throw new Error(`Request failed: ${q.status}`);
      if (!q.body)
        throw new Error("No response body");
      const x = q.body.getReader(), C = new TextDecoder();
      let E = "";
      for (; ; ) {
        const { done: D, value: U } = await x.read();
        if (D) break;
        E += C.decode(U, { stream: !0 });
        const R = E.split(`

`);
        E = R.pop() || "";
        for (const z of R) {
          if (!z.trim()) continue;
          const A = z.split(`
`);
          let V = "", K = "";
          for (const Q of A)
            Q.startsWith("event: ") ? V = Q.slice(7) : Q.startsWith("data: ") && (K = Q.slice(6));
          if (K)
            try {
              const Q = JSON.parse(K);
              _(V, Q);
            } catch (Q) {
              console.warn("Failed to parse SSE event:", Q);
            }
        }
      }
    } catch (q) {
      const x = q instanceof Error ? q.message : "Unknown error occurred";
      throw y.value = x, h.error = x, h.phase = "error", q;
    }
  }
  function _(k, $) {
    switch (k) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = $.total;
        break;
      case "file_start":
        h.currentFile = $.filename, h.currentFileIndex = $.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = $.downloaded, h.bytesTotal = $.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: $.filename,
          success: $.success,
          error: $.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = $.nodes_to_install || [], $.download_results && (h.completedFiles = $.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = $.message, h.phase = "error", y.value = $.message;
        break;
    }
  }
  function S(k, $) {
    const { addToQueue: F } = kt(), B = $.filter((N) => N.url && N.target_path).map((N) => ({
      workflow: k,
      filename: N.filename,
      url: N.url,
      targetPath: N.target_path,
      size: N.size || 0,
      type: "model"
    }));
    return B.length > 0 && F(B), B.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: i,
    isLoading: g,
    error: y,
    progress: h,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: I,
    searchNodes: u,
    searchModels: w,
    resetProgress: L,
    queueModelDownloads: S
  };
}
const ll = { class: "resolution-stepper" }, il = { class: "stepper-header" }, rl = ["onClick"], dl = {
  key: 0,
  class: "step-icon"
}, cl = {
  key: 1,
  class: "step-number"
}, ul = { class: "step-label" }, ml = {
  key: 0,
  class: "step-connector"
}, vl = { class: "stepper-content" }, fl = /* @__PURE__ */ J({
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
    function g(u) {
      var w;
      if ((w = s.stepStats) != null && w[u]) {
        const h = s.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return s.completedSteps.includes(u);
    }
    function y(u) {
      var w;
      if ((w = s.stepStats) != null && w[u]) {
        const h = s.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function p(u) {
      return g(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function v(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, w) => (o(), n("div", ll, [
      e("div", il, [
        (o(!0), n(W, null, Z(t.steps, (h, L) => (o(), n("div", {
          key: h.id,
          class: ee(["step", {
            active: t.currentStep === h.id,
            completed: g(h.id),
            "in-progress": y(h.id),
            disabled: v(h.id)
          }]),
          onClick: (I) => r(h.id)
        }, [
          e("div", {
            class: ee(["step-indicator", p(h.id)])
          }, [
            g(h.id) ? (o(), n("span", dl, "✓")) : (o(), n("span", cl, l(L + 1), 1))
          ], 2),
          e("div", ul, l(h.label), 1),
          L < t.steps.length - 1 ? (o(), n("div", ml)) : c("", !0)
        ], 10, rl))), 128))
      ]),
      e("div", vl, [
        de(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), gl = /* @__PURE__ */ Y(fl, [["__scopeId", "data-v-2a7b3af8"]]), hl = /* @__PURE__ */ J({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = O(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = O(() => `confidence-${s.value}`), g = O(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, p) => (o(), n("span", {
      class: ee(["confidence-badge", i.value, t.size])
    }, l(g.value), 3));
  }
}), Lt = /* @__PURE__ */ Y(hl, [["__scopeId", "data-v-17ec4b80"]]), pl = { class: "node-info" }, yl = { class: "node-info-text" }, wl = { class: "item-body" }, kl = {
  key: 0,
  class: "resolved-state"
}, bl = {
  key: 1,
  class: "multiple-options"
}, _l = { class: "options-list" }, $l = ["onClick"], Cl = ["name", "value", "checked", "onChange"], xl = { class: "option-content" }, Sl = { class: "option-header" }, Il = { class: "option-package-id" }, El = {
  key: 0,
  class: "option-title"
}, zl = { class: "option-meta" }, Ml = {
  key: 0,
  class: "installed-badge"
}, Ll = { class: "action-buttons" }, Tl = {
  key: 2,
  class: "unresolved"
}, Rl = { class: "action-buttons" }, Dl = /* @__PURE__ */ J({
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
    const s = t, i = d, g = O(() => !!s.choice);
    O(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.action;
    }), O(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.package_id;
    });
    const y = O(() => {
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
    function p(v) {
      i("option-selected", v);
    }
    return (v, r) => (o(), n("div", {
      class: ee(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", pl, [
        e("span", yl, [
          r[7] || (r[7] = f("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", wl, [
        g.value ? (o(), n("div", kl, [
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (u) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", bl, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", _l, [
            (o(!0), n(W, null, Z(t.options, (u, w) => (o(), n("label", {
              key: u.package_id,
              class: ee(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (h) => p(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (h) => p(w)
              }, null, 40, Cl),
              e("div", xl, [
                e("div", Sl, [
                  e("span", Il, l(u.package_id), 1),
                  m(Lt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), n("div", El, l(u.title), 1)) : c("", !0),
                e("div", zl, [
                  u.is_installed ? (o(), n("span", Ml, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, $l))), 128))
          ]),
          e("div", Ll, [
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (u) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Tl, [
          r[16] || (r[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Rl, [
            m(re, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (u) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Nl = /* @__PURE__ */ Y(Dl, [["__scopeId", "data-v-e02629e7"]]), Ul = { class: "item-navigator" }, Ol = { class: "nav-item-info" }, Bl = ["title"], Pl = { class: "nav-controls" }, Al = { class: "nav-arrows" }, Vl = ["disabled"], Fl = ["disabled"], Wl = { class: "nav-position" }, Gl = /* @__PURE__ */ J({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, g) => (o(), n("div", Ul, [
      e("div", Ol, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Bl)
      ]),
      e("div", Pl, [
        e("div", Al, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Vl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => s("next")),
            title: "Next item"
          }, " → ", 8, Fl)
        ]),
        e("span", Wl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ Y(Gl, [["__scopeId", "data-v-74af7920"]]), jl = ["type", "value", "placeholder", "disabled"], Hl = {
  key: 0,
  class: "base-input-error"
}, Kl = /* @__PURE__ */ J({
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
      class: ee(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ee(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, jl),
      t.error ? (o(), n("span", Hl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ Y(Kl, [["__scopeId", "data-v-9ba02cdc"]]), ql = { class: "node-resolution-step" }, Jl = { class: "step-header" }, Yl = { class: "stat-badge" }, Xl = {
  key: 1,
  class: "step-body"
}, Ql = {
  key: 2,
  class: "empty-state"
}, Zl = { class: "node-search-modal" }, ei = { class: "node-modal-body" }, ti = {
  key: 0,
  class: "node-search-results"
}, oi = ["onClick"], si = { class: "node-result-header" }, ni = { class: "node-result-package-id" }, ai = {
  key: 0,
  class: "node-result-description"
}, li = {
  key: 1,
  class: "node-no-results"
}, ii = {
  key: 2,
  class: "node-searching"
}, ri = { class: "node-manual-entry-modal" }, di = { class: "node-modal-body" }, ci = { class: "node-modal-actions" }, ui = /* @__PURE__ */ J({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, g = M(0), y = M(!1), p = M(!1), v = M(""), r = M(""), u = M([]), w = M(!1), h = O(() => s.nodes[g.value]), L = O(() => s.nodes.filter((R) => s.nodeChoices.has(R.node_type)).length), I = O(() => {
      var z;
      if (!h.value) return "not-found";
      const R = s.nodeChoices.get(h.value.node_type);
      if (R)
        switch (R.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (z = h.value.options) != null && z.length ? "ambiguous" : "not-found";
    }), _ = O(() => {
      var z;
      if (!h.value) return;
      const R = s.nodeChoices.get(h.value.node_type);
      if (R)
        switch (R.action) {
          case "install":
            return R.package_id ? `→ ${R.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (z = h.value.options) != null && z.length ? `${h.value.options.length} matches` : "Not Found";
    });
    function S(R) {
      R >= 0 && R < s.nodes.length && (g.value = R);
    }
    function k() {
      h.value && i("mark-optional", h.value.node_type);
    }
    function $() {
      h.value && i("skip", h.value.node_type);
    }
    function F(R) {
      h.value && i("option-selected", h.value.node_type, R);
    }
    function B() {
      h.value && i("clear-choice", h.value.node_type);
    }
    function N() {
      h.value && (v.value = h.value.node_type, y.value = !0);
    }
    function q() {
      r.value = "", p.value = !0;
    }
    function x() {
      y.value = !1, v.value = "", u.value = [];
    }
    function C() {
      p.value = !1, r.value = "";
    }
    function E() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function D(R) {
      h.value && (i("manual-entry", h.value.node_type, R.package_id), x());
    }
    function U() {
      !h.value || !r.value.trim() || (i("manual-entry", h.value.node_type, r.value.trim()), C());
    }
    return (R, z) => {
      var A, V;
      return o(), n("div", ql, [
        e("div", Jl, [
          z[4] || (z[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Yl, l(L.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        h.value ? (o(), b(jt, {
          key: 0,
          "item-name": h.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: z[0] || (z[0] = (K) => S(g.value - 1)),
          onNext: z[1] || (z[1] = (K) => S(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        h.value ? (o(), n("div", Xl, [
          m(Nl, {
            "node-type": h.value.node_type,
            "has-multiple-options": !!((A = h.value.options) != null && A.length),
            options: h.value.options,
            choice: (V = t.nodeChoices) == null ? void 0 : V.get(h.value.node_type),
            status: I.value,
            "status-label": _.value,
            onMarkOptional: k,
            onSkip: $,
            onManualEntry: q,
            onSearch: N,
            onOptionSelected: F,
            onClearChoice: B
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Ql, [...z[5] || (z[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), b(Le, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(x, ["self"])
          }, [
            e("div", Zl, [
              e("div", { class: "node-modal-header" }, [
                z[6] || (z[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", ei, [
                m(qe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": z[2] || (z[2] = (K) => v.value = K),
                  placeholder: "Search by node type, package name...",
                  onInput: E
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", ti, [
                  (o(!0), n(W, null, Z(u.value, (K) => (o(), n("div", {
                    key: K.package_id,
                    class: "node-search-result-item",
                    onClick: (Q) => D(K)
                  }, [
                    e("div", si, [
                      e("code", ni, l(K.package_id), 1),
                      K.match_confidence ? (o(), b(Lt, {
                        key: 0,
                        confidence: K.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    K.description ? (o(), n("div", ai, l(K.description), 1)) : c("", !0)
                  ], 8, oi))), 128))
                ])) : v.value && !w.value ? (o(), n("div", li, ' No packages found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                w.value ? (o(), n("div", ii, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), b(Le, { to: "body" }, [
          p.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(C, ["self"])
          }, [
            e("div", ri, [
              e("div", { class: "node-modal-header" }, [
                z[7] || (z[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: C
                }, "✕")
              ]),
              e("div", di, [
                m(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": z[3] || (z[3] = (K) => r.value = K),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ci, [
                  m(re, {
                    variant: "secondary",
                    onClick: C
                  }, {
                    default: a(() => [...z[8] || (z[8] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(re, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: U
                  }, {
                    default: a(() => [...z[9] || (z[9] = [
                      f(" Add Package ", -1)
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
}), mi = /* @__PURE__ */ Y(ui, [["__scopeId", "data-v-4fb196b1"]]), vi = { class: "node-info" }, fi = { class: "node-info-text" }, gi = { class: "item-body" }, hi = {
  key: 0,
  class: "resolved-state"
}, pi = {
  key: 1,
  class: "multiple-options"
}, yi = { class: "options-list" }, wi = ["onClick"], ki = ["name", "value", "checked", "onChange"], bi = { class: "option-content" }, _i = { class: "option-header" }, $i = { class: "option-filename" }, Ci = { class: "option-meta" }, xi = { class: "option-size" }, Si = { class: "option-category" }, Ii = { class: "option-path" }, Ei = { class: "action-buttons" }, zi = {
  key: 2,
  class: "unresolved"
}, Mi = { class: "action-buttons" }, Li = /* @__PURE__ */ J({
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
    const s = t, i = d, g = O(() => !!s.choice);
    O(() => {
      var r;
      return (r = s.choice) == null ? void 0 : r.action;
    }), O(() => {
      var r, u;
      return ((u = (r = s.choice) == null ? void 0 : r.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const y = O(() => {
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
    function p(r) {
      i("option-selected", r);
    }
    function v(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (o(), n("div", {
      class: ee(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", vi, [
        e("span", fi, [
          u[7] || (u[7] = f("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: ee(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", gi, [
        g.value ? (o(), n("div", hi, [
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (w) => i("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", pi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", yi, [
            (o(!0), n(W, null, Z(t.options, (w, h) => (o(), n("label", {
              key: w.model.hash,
              class: ee(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (L) => p(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (L) => p(h)
              }, null, 40, ki),
              e("div", bi, [
                e("div", _i, [
                  e("span", $i, l(w.model.filename), 1),
                  m(Lt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ci, [
                  e("span", xi, l(v(w.model.size)), 1),
                  e("span", Si, l(w.model.category), 1)
                ]),
                e("div", Ii, l(w.model.relative_path), 1)
              ])
            ], 10, wi))), 128))
          ]),
          e("div", Ei, [
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (w) => i("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (w) => i("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (w) => i("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", zi, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Mi, [
            m(re, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (w) => i("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (w) => i("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (w) => i("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ti = /* @__PURE__ */ Y(Li, [["__scopeId", "data-v-8a82fefa"]]), Ri = { class: "model-resolution-step" }, Di = { class: "step-header" }, Ni = { class: "step-info" }, Ui = { class: "step-title" }, Oi = { class: "step-description" }, Bi = { class: "stat-badge" }, Pi = {
  key: 1,
  class: "step-body"
}, Ai = {
  key: 2,
  class: "empty-state"
}, Vi = { class: "model-search-modal" }, Fi = { class: "model-modal-body" }, Wi = {
  key: 0,
  class: "model-search-results"
}, Gi = ["onClick"], ji = { class: "model-result-header" }, Hi = { class: "model-result-filename" }, Ki = { class: "model-result-meta" }, qi = { class: "model-result-category" }, Ji = { class: "model-result-size" }, Yi = {
  key: 0,
  class: "model-result-path"
}, Xi = {
  key: 1,
  class: "model-no-results"
}, Qi = {
  key: 2,
  class: "model-searching"
}, Zi = { class: "model-download-url-modal" }, er = { class: "model-modal-body" }, tr = { class: "model-input-group" }, or = { class: "model-input-group" }, sr = { class: "model-modal-actions" }, nr = /* @__PURE__ */ J({
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
    function i(le) {
      var se;
      return le && ((se = s[le]) == null ? void 0 : se[0]) || null;
    }
    const g = t, y = d, p = M(0), v = M(!1), r = M(!1), u = M(""), w = M(""), h = M(""), L = M([]), I = M(!1), _ = O(() => g.models[p.value]), S = O(() => g.models.some((le) => le.is_download_intent)), k = O(() => g.models.filter(
      (le) => g.modelChoices.has(le.filename) || le.is_download_intent
    ).length), $ = O(() => {
      var se;
      if (!_.value) return "";
      const le = i((se = _.value.reference) == null ? void 0 : se.node_type);
      return le ? `${le}/${_.value.filename}` : "";
    }), F = O(() => {
      var se;
      if (!_.value) return "not-found";
      const le = g.modelChoices.get(_.value.filename);
      if (le)
        switch (le.action) {
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
    }), B = O(() => {
      var se, ve;
      if (!_.value) return;
      const le = g.modelChoices.get(_.value.filename);
      if (le)
        switch (le.action) {
          case "select":
            return (se = le.selected_model) != null && se.filename ? `→ ${le.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (ve = _.value.options) != null && ve.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function N(le) {
      le >= 0 && le < g.models.length && (p.value = le);
    }
    function q() {
      _.value && y("mark-optional", _.value.filename);
    }
    function x() {
      _.value && y("skip", _.value.filename);
    }
    function C(le) {
      _.value && y("option-selected", _.value.filename, le);
    }
    function E() {
      _.value && y("clear-choice", _.value.filename);
    }
    function D() {
      _.value && (u.value = _.value.filename, v.value = !0);
    }
    function U() {
      _.value && (w.value = _.value.download_source || "", h.value = _.value.target_path || $.value, r.value = !0);
    }
    function R() {
      v.value = !1, u.value = "", L.value = [];
    }
    function z() {
      r.value = !1, w.value = "", h.value = "";
    }
    function A() {
      I.value = !0, setTimeout(() => {
        I.value = !1;
      }, 300);
    }
    function V(le) {
      _.value && R();
    }
    function K() {
      !_.value || !w.value.trim() || (y("download-url", _.value.filename, w.value.trim(), h.value.trim() || void 0), z());
    }
    function Q(le) {
      if (!le) return "Unknown";
      const se = le / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(le / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (le, se) => {
      var ve, oe, ze;
      return o(), n("div", Ri, [
        e("div", Di, [
          e("div", Ni, [
            e("h3", Ui, l(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Oi, l(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Bi, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), b(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: se[0] || (se[0] = (pe) => N(p.value - 1)),
          onNext: se[1] || (se[1] = (pe) => N(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        _.value ? (o(), n("div", Pi, [
          m(Ti, {
            filename: _.value.filename,
            "node-type": ((ve = _.value.reference) == null ? void 0 : ve.node_type) || "Unknown",
            "has-multiple-options": !!((oe = _.value.options) != null && oe.length),
            options: _.value.options,
            choice: (ze = t.modelChoices) == null ? void 0 : ze.get(_.value.filename),
            status: F.value,
            "status-label": B.value,
            onMarkOptional: q,
            onSkip: x,
            onDownloadUrl: U,
            onSearch: D,
            onOptionSelected: C,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Ai, [...se[5] || (se[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), b(Le, { to: "body" }, [
          v.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(R, ["self"])
          }, [
            e("div", Vi, [
              e("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Fi, [
                m(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (pe) => u.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: A
                }, null, 8, ["modelValue"]),
                L.value.length > 0 ? (o(), n("div", Wi, [
                  (o(!0), n(W, null, Z(L.value, (pe) => (o(), n("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (Ze) => V()
                  }, [
                    e("div", ji, [
                      e("code", Hi, l(pe.filename), 1)
                    ]),
                    e("div", Ki, [
                      e("span", qi, l(pe.category), 1),
                      e("span", Ji, l(Q(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), n("div", Yi, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, Gi))), 128))
                ])) : u.value && !I.value ? (o(), n("div", Xi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                I.value ? (o(), n("div", Qi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), b(Le, { to: "body" }, [
          r.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(z, ["self"])
          }, [
            e("div", Zi, [
              e("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", er, [
                e("div", tr, [
                  se[8] || (se[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  m(qe, {
                    modelValue: w.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (pe) => w.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", or, [
                  se[9] || (se[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  m(qe, {
                    modelValue: h.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (pe) => h.value = pe),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", sr, [
                  m(re, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: a(() => [...se[10] || (se[10] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(re, {
                    variant: "primary",
                    disabled: !w.value.trim() || !h.value.trim(),
                    onClick: K
                  }, {
                    default: a(() => [...se[11] || (se[11] = [
                      f(" Queue Download ", -1)
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
}), ar = /* @__PURE__ */ Y(nr, [["__scopeId", "data-v-c6acbada"]]), lr = { class: "applying-step" }, ir = {
  key: 0,
  class: "phase-content"
}, rr = {
  key: 1,
  class: "phase-content"
}, dr = { class: "completion-summary" }, cr = {
  key: 0,
  class: "summary-item info"
}, ur = { class: "summary-text" }, mr = {
  key: 2,
  class: "phase-content error"
}, vr = { class: "error-message" }, fr = /* @__PURE__ */ J({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", lr, [
      t.progress.phase === "resolving" ? (o(), n("div", ir, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", rr, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", dr, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", cr, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", ur, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", mr, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", vr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), gr = /* @__PURE__ */ Y(fr, [["__scopeId", "data-v-b4d7e0eb"]]), hr = {
  key: 0,
  class: "loading-state"
}, pr = {
  key: 1,
  class: "wizard-content"
}, yr = {
  key: 0,
  class: "step-content"
}, wr = { class: "analysis-summary" }, kr = { class: "analysis-header" }, br = { class: "summary-description" }, _r = { class: "stats-grid" }, $r = { class: "stat-card" }, Cr = { class: "stat-items" }, xr = { class: "stat-item success" }, Sr = { class: "stat-count" }, Ir = {
  key: 0,
  class: "stat-item warning"
}, Er = { class: "stat-count" }, zr = {
  key: 1,
  class: "stat-item error"
}, Mr = { class: "stat-count" }, Lr = { class: "stat-card" }, Tr = { class: "stat-items" }, Rr = { class: "stat-item success" }, Dr = { class: "stat-count" }, Nr = {
  key: 0,
  class: "stat-item info"
}, Ur = { class: "stat-count" }, Or = {
  key: 1,
  class: "stat-item warning"
}, Br = { class: "stat-count" }, Pr = {
  key: 2,
  class: "stat-item error"
}, Ar = { class: "stat-count" }, Vr = {
  key: 0,
  class: "status-message warning"
}, Fr = { class: "status-text" }, Wr = {
  key: 1,
  class: "status-message info"
}, Gr = { class: "status-text" }, jr = {
  key: 2,
  class: "status-message success"
}, Hr = {
  key: 3,
  class: "step-content"
}, Kr = { class: "review-summary" }, qr = { class: "review-stats" }, Jr = { class: "review-stat" }, Yr = { class: "stat-value" }, Xr = { class: "review-stat" }, Qr = { class: "stat-value" }, Zr = { class: "review-stat" }, ed = { class: "stat-value" }, td = { class: "review-stat" }, od = { class: "stat-value" }, sd = {
  key: 0,
  class: "review-section"
}, nd = { class: "section-title" }, ad = { class: "review-items" }, ld = { class: "item-name" }, id = { class: "item-choice" }, rd = {
  key: 0,
  class: "choice-badge install"
}, dd = {
  key: 1,
  class: "choice-badge optional"
}, cd = {
  key: 2,
  class: "choice-badge skip"
}, ud = {
  key: 1,
  class: "choice-badge pending"
}, md = {
  key: 1,
  class: "review-section"
}, vd = { class: "section-title" }, fd = { class: "review-items" }, gd = { class: "item-name" }, hd = { class: "item-choice" }, pd = {
  key: 0,
  class: "choice-badge install"
}, yd = {
  key: 1,
  class: "choice-badge download"
}, wd = {
  key: 2,
  class: "choice-badge optional"
}, kd = {
  key: 3,
  class: "choice-badge skip"
}, bd = {
  key: 4,
  class: "choice-badge skip"
}, _d = {
  key: 1,
  class: "choice-badge download"
}, $d = {
  key: 2,
  class: "choice-badge pending"
}, Cd = {
  key: 2,
  class: "no-choices"
}, xd = /* @__PURE__ */ J({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: g, applyResolution: y, queueModelDownloads: p, progress: v, resetProgress: r } = al(), { loadPendingDownloads: u } = kt(), w = M(null), h = M(!1), L = M(!1), I = M(null), _ = M("analysis"), S = M([]), k = M(/* @__PURE__ */ new Map()), $ = M(/* @__PURE__ */ new Map()), F = O(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return N.value && H.push({ id: "nodes", label: "Nodes" }), (q.value || x.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), _.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), B = O(() => w.value ? w.value.stats.needs_user_input : !1), N = O(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), q = O(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), x = O(() => w.value ? w.value.stats.download_intents > 0 : !1), C = O(() => w.value ? w.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), E = O(() => {
      if (!w.value) return [];
      const H = w.value.nodes.unresolved.map((te) => ({
        node_type: te.reference.node_type,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), P = w.value.nodes.ambiguous.map((te) => ({
        node_type: te.reference.node_type,
        has_multiple_options: !0,
        options: te.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...H, ...P];
    }), D = O(() => {
      if (!w.value) return [];
      const H = w.value.models.unresolved.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), P = w.value.models.ambiguous.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        has_multiple_options: !0,
        options: te.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...H, ...P];
    }), U = O(() => {
      const H = D.value, P = C.value.map((te) => ({
        filename: te.filename,
        reference: te.reference,
        is_download_intent: !0,
        resolved_model: te.resolved_model,
        download_source: te.download_source,
        target_path: te.target_path,
        options: void 0
      }));
      return [...H, ...P];
    }), R = O(() => {
      let H = 0;
      for (const P of k.value.values())
        P.action === "install" && H++;
      for (const P of $.value.values())
        P.action === "select" && H++;
      return H;
    }), z = O(() => {
      let H = 0;
      for (const P of $.value.values())
        P.action === "download" && H++;
      return H;
    }), A = O(() => {
      let H = 0;
      for (const P of k.value.values())
        P.action === "optional" && H++;
      for (const P of $.value.values())
        P.action === "optional" && H++;
      return H;
    }), V = O(() => {
      let H = 0;
      for (const P of k.value.values())
        P.action === "skip" && H++;
      for (const P of $.value.values())
        P.action === "skip" && H++;
      for (const P of E.value)
        k.value.has(P.node_type) || H++;
      for (const P of D.value)
        $.value.has(P.filename) || H++;
      return H;
    }), K = O(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, N.value) {
        const P = E.value.length, te = E.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        H.nodes = { resolved: te, total: P };
      }
      if (q.value || x.value) {
        const P = U.value.length, te = U.value.filter(
          (ge) => $.value.has(ge.filename) || ge.is_download_intent
        ).length;
        H.models = { resolved: te, total: P };
      }
      if (H.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const P = v.totalFiles || 1, te = v.completedFiles.length;
        H.applying = { resolved: te, total: P };
      }
      return H;
    });
    function Q(H) {
      _.value = H;
    }
    function le() {
      const H = F.value.findIndex((P) => P.id === _.value);
      H > 0 && (_.value = F.value[H - 1].id);
    }
    function se() {
      const H = F.value.findIndex((P) => P.id === _.value);
      H < F.value.length - 1 && (_.value = F.value[H + 1].id);
    }
    async function ve() {
      h.value = !0, I.value = null;
      try {
        w.value = await g(s.workflowName);
      } catch (H) {
        I.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        h.value = !1;
      }
    }
    function oe() {
      S.value.includes("analysis") || S.value.push("analysis"), N.value ? _.value = "nodes" : q.value || x.value ? _.value = "models" : _.value = "review";
    }
    function ze(H) {
      k.value.set(H, { action: "optional" });
    }
    function pe(H) {
      k.value.set(H, { action: "skip" });
    }
    function Ze(H, P) {
      var ge;
      const te = E.value.find((Te) => Te.node_type === H);
      (ge = te == null ? void 0 : te.options) != null && ge[P] && k.value.set(H, {
        action: "install",
        package_id: te.options[P].package_id
      });
    }
    function fe(H, P) {
      k.value.set(H, {
        action: "install",
        package_id: P
      });
    }
    function Me(H) {
      k.value.delete(H);
    }
    function lt(H) {
      $.value.set(H, { action: "optional" });
    }
    function X(H) {
      $.value.set(H, { action: "skip" });
    }
    function ne(H, P) {
      var ge;
      const te = D.value.find((Te) => Te.filename === H);
      (ge = te == null ? void 0 : te.options) != null && ge[P] && $.value.set(H, {
        action: "select",
        selected_model: te.options[P].model
      });
    }
    function he(H, P, te) {
      $.value.set(H, {
        action: "download",
        url: P,
        target_path: te
      });
    }
    function $e(H) {
      $.value.delete(H);
    }
    async function et() {
      L.value = !0, I.value = null, r(), v.phase = "resolving", _.value = "applying";
      try {
        const H = await y(s.workflowName, k.value, $.value);
        H.models_to_download && H.models_to_download.length > 0 && p(s.workflowName, H.models_to_download), v.nodesToInstall = H.nodes_to_install || [], v.phase = "complete", await u(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (H) {
        I.value = H instanceof Error ? H.message : "Failed to apply resolution", v.error = I.value, v.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    return _e(ve), (H, P) => (o(), b(wt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: h.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (te) => i("close"))
    }, {
      body: a(() => [
        h.value && !w.value ? (o(), n("div", hr, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (o(), n("div", pr, [
          m(gl, {
            steps: F.value,
            "current-step": _.value,
            "completed-steps": S.value,
            "step-stats": K.value,
            onStepChange: Q
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), n("div", yr, [
            e("div", wr, [
              e("div", kr, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", br, " Found " + l(w.value.stats.total_nodes) + " nodes and " + l(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", _r, [
                e("div", $r, [
                  P[10] || (P[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Cr, [
                    e("div", xr, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Sr, l(w.value.nodes.resolved.length), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.nodes.ambiguous.length > 0 ? (o(), n("div", Ir, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Er, l(w.value.nodes.ambiguous.length), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    w.value.nodes.unresolved.length > 0 ? (o(), n("div", zr, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Mr, l(w.value.nodes.unresolved.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Lr, [
                  P[19] || (P[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tr, [
                    e("div", Rr, [
                      P[11] || (P[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Dr, l(w.value.models.resolved.length - w.value.stats.download_intents), 1),
                      P[12] || (P[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (o(), n("div", Nr, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ur, l(w.value.stats.download_intents), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    w.value.models.ambiguous.length > 0 ? (o(), n("div", Or, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Br, l(w.value.models.ambiguous.length), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    w.value.models.unresolved.length > 0 ? (o(), n("div", Pr, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ar, l(w.value.models.unresolved.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              B.value ? (o(), n("div", Vr, [
                P[20] || (P[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Fr, l(E.value.length + D.value.length) + " items need your input", 1)
              ])) : x.value ? (o(), n("div", Wr, [
                P[21] || (P[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gr, l(w.value.stats.download_intents) + " model" + l(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", jr, [...P[22] || (P[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), b(mi, {
            key: 1,
            nodes: E.value,
            "node-choices": k.value,
            onMarkOptional: ze,
            onSkip: pe,
            onOptionSelected: Ze,
            onManualEntry: fe,
            onClearChoice: Me
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          _.value === "models" ? (o(), b(ar, {
            key: 2,
            models: U.value,
            "model-choices": $.value,
            onMarkOptional: lt,
            onSkip: X,
            onOptionSelected: ne,
            onDownloadUrl: he,
            onClearChoice: $e
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), n("div", Hr, [
            e("div", Kr, [
              P[27] || (P[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", qr, [
                e("div", Jr, [
                  e("span", Yr, l(R.value), 1),
                  P[23] || (P[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Xr, [
                  e("span", Qr, l(z.value), 1),
                  P[24] || (P[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Zr, [
                  e("span", ed, l(A.value), 1),
                  P[25] || (P[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", td, [
                  e("span", od, l(V.value), 1),
                  P[26] || (P[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              E.value.length > 0 ? (o(), n("div", sd, [
                e("h4", nd, "Node Packages (" + l(E.value.length) + ")", 1),
                e("div", ad, [
                  (o(!0), n(W, null, Z(E.value, (te) => {
                    var ge, Te, Oe, Be;
                    return o(), n("div", {
                      key: te.node_type,
                      class: "review-item"
                    }, [
                      e("code", ld, l(te.node_type), 1),
                      e("div", id, [
                        k.value.has(te.node_type) ? (o(), n(W, { key: 0 }, [
                          ((ge = k.value.get(te.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), n("span", rd, l((Te = k.value.get(te.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Oe = k.value.get(te.node_type)) == null ? void 0 : Oe.action) === "optional" ? (o(), n("span", dd, " Optional ")) : ((Be = k.value.get(te.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", cd, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", ud, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (o(), n("div", md, [
                e("h4", vd, "Models (" + l(U.value.length) + ")", 1),
                e("div", fd, [
                  (o(!0), n(W, null, Z(U.value, (te) => {
                    var ge, Te, Oe, Be, gt, Pe, ht;
                    return o(), n("div", {
                      key: te.filename,
                      class: "review-item"
                    }, [
                      e("code", gd, l(te.filename), 1),
                      e("div", hd, [
                        $.value.has(te.filename) ? (o(), n(W, { key: 0 }, [
                          ((ge = $.value.get(te.filename)) == null ? void 0 : ge.action) === "select" ? (o(), n("span", pd, l((Oe = (Te = $.value.get(te.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Oe.filename), 1)) : ((Be = $.value.get(te.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", yd, " Download ")) : ((gt = $.value.get(te.filename)) == null ? void 0 : gt.action) === "optional" ? (o(), n("span", wd, " Optional ")) : ((Pe = $.value.get(te.filename)) == null ? void 0 : Pe.action) === "skip" ? (o(), n("span", kd, " Skip ")) : ((ht = $.value.get(te.filename)) == null ? void 0 : ht.action) === "cancel_download" ? (o(), n("span", bd, " Cancel Download ")) : c("", !0)
                        ], 64)) : te.is_download_intent ? (o(), n("span", _d, " Pending Download ")) : (o(), n("span", $d, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              E.value.length === 0 && U.value.length === 0 ? (o(), n("div", Cd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), b(gr, {
            key: 4,
            progress: ue(v)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), b(re, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: le
        }, {
          default: a(() => [...P[28] || (P[28] = [
            f(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        P[31] || (P[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || ue(v).phase === "complete" || ue(v).phase === "error" ? (o(), b(re, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (te) => i("close"))
        }, {
          default: a(() => [
            f(l(ue(v).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), b(re, {
          key: 2,
          variant: "primary",
          disabled: h.value,
          onClick: oe
        }, {
          default: a(() => [
            f(l(B.value || x.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), b(re, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [
            f(l(q.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), b(re, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [...P[29] || (P[29] = [
            f(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), b(re, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: et
        }, {
          default: a(() => [...P[30] || (P[30] = [
            f(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Sd = /* @__PURE__ */ Y(xd, [["__scopeId", "data-v-08beb8e3"]]), Id = { class: "search-input-wrapper" }, Ed = ["value", "placeholder"], zd = /* @__PURE__ */ J({
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
    const s = t, i = d, g = M(null);
    let y;
    function p(r) {
      const u = r.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        i("update:modelValue", u);
      }, s.debounce)) : i("update:modelValue", u);
    }
    function v() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = g.value) == null || r.focus();
    }
    return _e(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (r, u) => (o(), n("div", Id, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: Ge(v, ["escape"])
      }, null, 40, Ed),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Md = /* @__PURE__ */ Y(zd, [["__scopeId", "data-v-266f857a"]]), Ld = { class: "search-bar" }, Td = /* @__PURE__ */ J({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Ld, [
      m(Md, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ Y(Td, [["__scopeId", "data-v-3d51bbfd"]]), Rd = { class: "section-group" }, Dd = {
  key: 0,
  class: "section-content"
}, Nd = /* @__PURE__ */ J({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, g = M(s.initiallyExpanded);
    function y() {
      s.collapsible && (g.value = !g.value, i("toggle", g.value));
    }
    return (p, v) => (o(), n("section", Rd, [
      m(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: a(() => [
          f(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), n("div", Dd, [
        de(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), we = /* @__PURE__ */ Y(Nd, [["__scopeId", "data-v-c48e33ed"]]), Ud = { class: "item-header" }, Od = {
  key: 0,
  class: "item-icon"
}, Bd = { class: "item-info" }, Pd = {
  key: 0,
  class: "item-title"
}, Ad = {
  key: 1,
  class: "item-subtitle"
}, Vd = {
  key: 0,
  class: "item-details"
}, Fd = {
  key: 1,
  class: "item-actions"
}, Wd = /* @__PURE__ */ J({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = O(() => s.status ? `status-${s.status}` : "");
    return (g, y) => (o(), n("div", {
      class: ee(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: y[0] || (y[0] = (p) => t.clickable && g.$emit("click"))
    }, [
      e("div", Ud, [
        g.$slots.icon ? (o(), n("span", Od, [
          de(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Bd, [
          g.$slots.title ? (o(), n("div", Pd, [
            de(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), n("div", Ad, [
            de(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", Vd, [
        de(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), n("div", Fd, [
        de(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ Y(Wd, [["__scopeId", "data-v-cc435e0e"]]), Gd = { class: "loading-state" }, jd = { class: "loading-message" }, Hd = /* @__PURE__ */ J({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Gd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", jd, l(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ Y(Hd, [["__scopeId", "data-v-ad8436c9"]]), Kd = { class: "error-state" }, qd = { class: "error-message" }, Jd = /* @__PURE__ */ J({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Kd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", qd, l(t.message), 1),
      t.retry ? (o(), b(G, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ Y(Jd, [["__scopeId", "data-v-5397be48"]]), Yd = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const i = s, { getWorkflows: g } = Se(), y = M([]), p = M(!1), v = M(null), r = M(""), u = M(!0), w = M(!1), h = M(!1), L = M(!1), I = M(null), _ = O(
      () => y.value.filter((V) => V.status === "broken")
    ), S = O(
      () => y.value.filter((V) => V.status === "new")
    ), k = O(
      () => y.value.filter((V) => V.status === "modified")
    ), $ = O(
      () => y.value.filter((V) => V.status === "synced")
    ), F = O(() => {
      if (!r.value.trim()) return y.value;
      const V = r.value.toLowerCase();
      return y.value.filter((K) => K.name.toLowerCase().includes(V));
    }), B = O(
      () => _.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), N = O(
      () => S.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), q = O(
      () => k.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = O(
      () => $.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), C = O(
      () => w.value ? x.value : x.value.slice(0, 5)
    );
    async function E(V = !1) {
      p.value = !0, v.value = null;
      try {
        y.value = await g(V);
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    d({ loadWorkflows: E });
    function D(V) {
      I.value = V, h.value = !0;
    }
    function U(V) {
      I.value = V, L.value = !0;
    }
    function R() {
      alert("Bulk resolution not yet implemented");
    }
    function z() {
      i("refresh");
    }
    function A(V) {
      const K = [];
      return V.missing_nodes > 0 && K.push(`${V.missing_nodes} missing node${V.missing_nodes > 1 ? "s" : ""}`), V.missing_models > 0 && K.push(`${V.missing_models} missing model${V.missing_models > 1 ? "s" : ""}`), V.pending_downloads && V.pending_downloads > 0 && K.push(`${V.pending_downloads} pending download${V.pending_downloads > 1 ? "s" : ""}`), K.length > 0 ? K.join(", ") : "Has issues";
    }
    return _e(E), (V, K) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), b(G, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: a(() => [...K[8] || (K[8] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": K[0] || (K[0] = (Q) => r.value = Q),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          p.value ? (o(), b(He, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), b(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            B.value.length ? (o(), b(we, {
              key: 0,
              title: "BROKEN",
              count: B.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(B.value, (Q) => (o(), b(ke, {
                  key: Q.name,
                  status: "broken"
                }, {
                  icon: a(() => [...K[9] || (K[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(A(Q)), 1)
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => U(Q.name)
                    }, {
                      default: a(() => [...K[10] || (K[10] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => D(Q.name)
                    }, {
                      default: a(() => [...K[11] || (K[11] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            N.value.length ? (o(), b(we, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(N.value, (Q) => (o(), b(ke, {
                  key: Q.name,
                  status: "new"
                }, {
                  icon: a(() => [...K[12] || (K[12] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [...K[13] || (K[13] = [
                    f("New", -1)
                  ])]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => D(Q.name)
                    }, {
                      default: a(() => [...K[14] || (K[14] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            q.value.length ? (o(), b(we, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(q.value, (Q) => (o(), b(ke, {
                  key: Q.name,
                  status: "modified"
                }, {
                  icon: a(() => [...K[15] || (K[15] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [...K[16] || (K[16] = [
                    f("Modified", -1)
                  ])]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => D(Q.name)
                    }, {
                      default: a(() => [...K[17] || (K[17] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), b(we, {
              key: 3,
              title: "SYNCED",
              count: x.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: K[2] || (K[2] = (Q) => u.value = Q)
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(C.value, (Q) => (o(), b(ke, {
                  key: Q.name,
                  status: "synced"
                }, {
                  icon: a(() => [...K[18] || (K[18] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [...K[19] || (K[19] = [
                    f("Synced", -1)
                  ])]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => D(Q.name)
                    }, {
                      default: a(() => [...K[20] || (K[20] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !w.value && x.value.length > 5 ? (o(), b(G, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: K[1] || (K[1] = (Q) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + l(x.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            F.value.length ? c("", !0) : (o(), b(Ue, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && I.value ? (o(), b(ol, {
        key: 0,
        "workflow-name": I.value,
        onClose: K[3] || (K[3] = (Q) => h.value = !1),
        onResolve: K[4] || (K[4] = (Q) => U(I.value)),
        onRefresh: K[5] || (K[5] = (Q) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      L.value && I.value ? (o(), b(Sd, {
        key: 1,
        "workflow-name": I.value,
        onClose: K[6] || (K[6] = (Q) => L.value = !1),
        onInstall: z,
        onRefresh: K[7] || (K[7] = (Q) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Xd = /* @__PURE__ */ Y(Yd, [["__scopeId", "data-v-af6b1cd7"]]), Qd = /* @__PURE__ */ J({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["summary-bar", t.variant])
    }, [
      de(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Y(Qd, [["__scopeId", "data-v-ccb7816e"]]), Zd = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: g } = Se(), y = M([]), p = M([]), v = M("production"), r = M(!1), u = M(null), w = M(""), h = M(!1);
    function L() {
      h.value = !1, s("navigate", "model-index");
    }
    const I = O(
      () => y.value.reduce((E, D) => E + (D.size || 0), 0)
    ), _ = O(() => {
      if (!w.value.trim()) return y.value;
      const E = w.value.toLowerCase();
      return y.value.filter((D) => D.filename.toLowerCase().includes(E));
    }), S = O(() => {
      if (!w.value.trim()) return p.value;
      const E = w.value.toLowerCase();
      return p.value.filter((D) => D.filename.toLowerCase().includes(E));
    }), k = O(
      () => _.value.filter((E) => E.type === "checkpoints")
    ), $ = O(
      () => _.value.filter((E) => E.type === "loras")
    ), F = O(
      () => _.value.filter((E) => E.type !== "checkpoints" && E.type !== "loras")
    );
    function B(E) {
      if (!E) return "Unknown";
      const D = E / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function N(E) {
      s("navigate", "model-index");
    }
    function q(E) {
      s("navigate", "model-index");
    }
    function x(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function C() {
      r.value = !0, u.value = null;
      try {
        const E = await i();
        y.value = E, p.value = [];
        const D = await g();
        v.value = D.environment || "production";
      } catch (E) {
        u.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return _e(C), (E, D) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (U) => h.value = !0)
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: w.value,
            "onUpdate:modelValue": D[1] || (D[1] = (U) => w.value = U),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), b(He, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), b(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            y.value.length ? (o(), b(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + l(y.value.length) + " models • " + l(B(I.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), b(we, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(k.value, (U) => (o(), b(ke, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[3] || (D[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(B(U.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(ae, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => N(U.hash)
                    }, {
                      default: a(() => [...D[4] || (D[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (o(), b(we, {
              key: 2,
              title: "LORAS",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z($.value, (U) => (o(), b(ke, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[5] || (D[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(B(U.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(ae, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => N(U.hash)
                    }, {
                      default: a(() => [...D[6] || (D[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            F.value.length ? (o(), b(we, {
              key: 3,
              title: "OTHER",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(F.value, (U) => (o(), b(ke, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...D[7] || (D[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(B(U.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Type:",
                      value: U.type
                    }, null, 8, ["value"]),
                    m(ae, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => N(U.hash)
                    }, {
                      default: a(() => [...D[8] || (D[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), b(we, {
              key: 4,
              title: "MISSING",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(S.value, (U) => (o(), b(ke, {
                  key: U.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...D[9] || (D[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [...D[10] || (D[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var R;
                    return [
                      m(ae, {
                        label: "Required by:",
                        value: ((R = U.workflow_names) == null ? void 0 : R.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => x(U.filename)
                    }, {
                      default: a(() => [...D[11] || (D[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => q(U.filename)
                    }, {
                      default: a(() => [...D[12] || (D[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !_.value.length && !S.value.length ? (o(), b(Ue, {
              key: 5,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: h.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (U) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            D[13] || (D[13] = f(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(v.value) + '"', 1),
            D[14] || (D[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: L
          }, {
            default: a(() => [...D[15] || (D[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ec = /* @__PURE__ */ Y(Zd, [["__scopeId", "data-v-72675609"]]), tc = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = Se(), s = M([]), i = M(!1), g = M(null), y = M(""), p = M(!1), v = O(
      () => s.value.reduce((x, C) => x + (C.size_mb || C.size || 0), 0)
    ), r = O(() => {
      const x = /* @__PURE__ */ new Set();
      return s.value.forEach((C) => {
        C.used_in_environments && C.used_in_environments.length > 0 && C.used_in_environments.forEach((E) => x.add(E.env_name));
      }), x.size;
    }), u = O(() => {
      if (!y.value.trim()) return s.value;
      const x = y.value.toLowerCase();
      return s.value.filter((C) => {
        const E = C, D = C.sha256 || E.sha256_hash || "";
        return C.filename.toLowerCase().includes(x) || D.toLowerCase().includes(x);
      });
    }), w = O(
      () => u.value.filter((x) => x.type === "checkpoints")
    ), h = O(
      () => u.value.filter((x) => x.type === "loras")
    ), L = O(
      () => u.value.filter((x) => x.type !== "checkpoints" && x.type !== "loras")
    );
    function I(x) {
      return x ? x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB` : "Unknown";
    }
    function _(x) {
      const C = x, E = x.used_in_workflows || C.used_by || [];
      return !E || E.length === 0 ? "Not used" : `${E.length} workflow(s)`;
    }
    function S(x) {
      navigator.clipboard.writeText(x), alert("Hash copied to clipboard");
    }
    function k(x) {
      prompt("Enter model source URL:", x.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function $(x) {
      const C = x, E = x.used_in_workflows || C.used_by || [], D = E && E.length > 0 ? `

⚠ WARNING: This model is used by ${E.length} workflow(s):
${E.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${x.filename}?${D}

This will free ${I(C.size_mb || x.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function F() {
      alert("Scan for models not yet implemented");
    }
    function B() {
      alert("Change directory not yet implemented");
    }
    function N() {
      alert("Download new model not yet implemented");
    }
    async function q() {
      i.value = !0, g.value = null;
      try {
        s.value = await d(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", w.value), console.log("Filtered loras:", h.value), console.log("Filtered other:", L.value);
      } catch (x) {
        g.value = x instanceof Error ? x.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return _e(q), (x, C) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[0] || (C[0] = (E) => p.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: a(() => [...C[3] || (C[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: a(() => [...C[4] || (C[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...C[5] || (C[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: y.value,
            "onUpdate:modelValue": C[1] || (C[1] = (E) => y.value = E),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), b(He, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), b(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length ? (o(), b(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + l(s.value.length) + " models • " + l(I(v.value)) + " • Used in " + l(r.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            w.value.length ? (o(), b(we, {
              key: 1,
              title: "CHECKPOINTS",
              count: w.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(w.value, (E) => (o(), b(ke, {
                  key: E.sha256 || E.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[6] || (C[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(E.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(I(E.size_mb || E.size)), 1)
                  ]),
                  details: a(() => {
                    var D, U;
                    return [
                      E.sha256 || E.sha256_hash ? (o(), b(ae, {
                        key: 0,
                        label: "SHA256:",
                        value: (E.sha256 || E.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      m(ae, {
                        label: "Used in:",
                        value: _(E)
                      }, null, 8, ["value"]),
                      E.source_url || (D = E.sources) != null && D[0] ? (o(), b(ae, {
                        key: 1,
                        label: "Source URL:",
                        value: E.source_url || ((U = E.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), b(ae, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...C[7] || (C[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => k(E)
                    }, {
                      default: a(() => [...C[8] || (C[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    E.sha256 || E.sha256_hash ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => S(E.sha256 || E.sha256_hash)
                    }, {
                      default: a(() => [...C[9] || (C[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => $(E)
                    }, {
                      default: a(() => [...C[10] || (C[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            h.value.length ? (o(), b(we, {
              key: 2,
              title: "LORAS",
              count: h.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(h.value, (E) => (o(), b(ke, {
                  key: E.sha256 || E.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[11] || (C[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(E.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(I(E.size_mb || E.size)), 1)
                  ]),
                  details: a(() => {
                    var D, U;
                    return [
                      E.sha256 || E.sha256_hash ? (o(), b(ae, {
                        key: 0,
                        label: "SHA256:",
                        value: (E.sha256 || E.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      m(ae, {
                        label: "Used in:",
                        value: _(E)
                      }, null, 8, ["value"]),
                      E.source_url || (D = E.sources) != null && D[0] ? (o(), b(ae, {
                        key: 1,
                        label: "Source URL:",
                        value: E.source_url || ((U = E.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), b(ae, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...C[12] || (C[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => k(E)
                    }, {
                      default: a(() => [...C[13] || (C[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    E.sha256 || E.sha256_hash ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => S(E.sha256 || E.sha256_hash)
                    }, {
                      default: a(() => [...C[14] || (C[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => $(E)
                    }, {
                      default: a(() => [...C[15] || (C[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (o(), b(we, {
              key: 3,
              title: "OTHER",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(L.value, (E) => (o(), b(ke, {
                  key: E.sha256 || E.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[16] || (C[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(l(E.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(l(I(E.size_mb || E.size)), 1)
                  ]),
                  details: a(() => [
                    m(ae, {
                      label: "Type:",
                      value: E.type
                    }, null, 8, ["value"]),
                    E.sha256 || E.sha256_hash ? (o(), b(ae, {
                      key: 0,
                      label: "SHA256:",
                      value: (E.sha256 || E.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    m(ae, {
                      label: "Used in:",
                      value: _(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => k(E)
                    }, {
                      default: a(() => [...C[17] || (C[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    E.sha256 || E.sha256_hash ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => S(E.sha256 || E.sha256_hash)
                    }, {
                      default: a(() => [...C[18] || (C[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => $(E)
                    }, {
                      default: a(() => [...C[19] || (C[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            u.value.length ? c("", !0) : (o(), b(Ue, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: C[2] || (C[2] = (E) => p.value = !1)
      }, {
        content: a(() => [...C[20] || (C[20] = [
          e("p", null, [
            f(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), oc = /* @__PURE__ */ Y(tc, [["__scopeId", "data-v-5a24af01"]]), sc = { key: 0 }, nc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, ac = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, lc = /* @__PURE__ */ J({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: d }) {
    const s = d, { getNodes: i, trackNodeAsDev: g, installNode: y, updateNode: p, uninstallNode: v } = Se(), r = M({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), u = M(!1), w = M(null), h = M(""), L = M(!1), I = O(() => {
      if (!h.value.trim()) return r.value.nodes;
      const R = h.value.toLowerCase();
      return r.value.nodes.filter(
        (z) => {
          var A, V;
          return z.name.toLowerCase().includes(R) || ((A = z.description) == null ? void 0 : A.toLowerCase().includes(R)) || ((V = z.repository) == null ? void 0 : V.toLowerCase().includes(R));
        }
      );
    }), _ = O(
      () => I.value.filter((R) => R.installed && R.tracked)
    ), S = O(
      () => I.value.filter((R) => !R.installed && R.tracked)
    ), k = O(
      () => I.value.filter((R) => R.installed && !R.tracked)
    );
    function $(R) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[R] || R;
    }
    function F(R) {
      return !R.used_in_workflows || R.used_in_workflows.length === 0 ? "Not used in any workflows" : R.used_in_workflows.length === 1 ? R.used_in_workflows[0] : `${R.used_in_workflows.length} workflows`;
    }
    function B(R) {
      window.open(R, "_blank");
    }
    function N() {
      s("open-node-manager");
    }
    async function q(R) {
      if (confirm(`Track "${R}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          u.value = !0;
          const z = await g(R);
          z.status === "success" ? (alert(`Node "${R}" is now tracked as development!`), await U()) : alert(`Failed to track node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function x(R) {
      if (confirm(`Remove untracked node "${R}"?

This will delete the node directory from custom_nodes/.`))
        try {
          u.value = !0;
          const z = await v(R);
          z.status === "success" ? (alert(`Node "${R}" removed!`), await U()) : alert(`Failed to remove node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function C(R) {
      if (confirm(`Install node "${R}"?

This will download and install the node.`))
        try {
          u.value = !0;
          const z = await y(R);
          z.status === "success" ? (alert(`Node "${R}" installed successfully!`), await U()) : alert(`Failed to install node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function E(R) {
      if (confirm(`Check for updates for "${R}"?`))
        try {
          u.value = !0;
          const z = await p(R);
          z.status === "success" ? (alert(`Node "${R}" is up to date or has been updated!`), await U()) : alert(`Update check failed: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error checking for updates: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function D(R) {
      if (confirm(`Uninstall node "${R}"?

This will remove the node from this environment.`))
        try {
          u.value = !0;
          const z = await v(R);
          z.status === "success" ? (alert(`Node "${R}" uninstalled!`), await U()) : alert(`Failed to uninstall node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error uninstalling node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function U() {
      u.value = !0, w.value = null;
      try {
        r.value = await i();
      } catch (R) {
        w.value = R instanceof Error ? R.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return _e(U), (R, z) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (A) => L.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...z[4] || (z[4] = [
                  f(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          m(nt, {
            modelValue: h.value,
            "onUpdate:modelValue": z[1] || (z[1] = (A) => h.value = A),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), b(He, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), b(Ke, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            r.value.total_count ? (o(), b(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(l(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (o(), n(W, { key: 0 }, [
                  f(" • " + l(r.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                r.value.untracked_count ? (o(), n(W, { key: 1 }, [
                  f(" • " + l(r.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), b(we, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(k.value, (A) => (o(), b(ke, {
                  key: A.name,
                  status: "warning"
                }, {
                  icon: a(() => [...z[5] || (z[5] = [
                    f("?", -1)
                  ])]),
                  title: a(() => [
                    f(l(A.name), 1)
                  ]),
                  subtitle: a(() => [...z[6] || (z[6] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: a(() => [
                    m(ae, {
                      label: "Status:",
                      value: "This node exists in custom_nodes/ but is not in your environment manifest."
                    }),
                    m(ae, {
                      label: "Used by:",
                      value: F(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => q(A.name)
                    }, {
                      default: a(() => [...z[7] || (z[7] = [
                        f(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(G, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (V) => x(A.name)
                    }, {
                      default: a(() => [...z[8] || (z[8] = [
                        f(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (o(), b(we, {
              key: 2,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(_.value, (A) => (o(), b(ke, {
                  key: A.name,
                  status: "synced"
                }, {
                  icon: a(() => [
                    f(l(A.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: a(() => [
                    f(l(A.name), 1)
                  ]),
                  subtitle: a(() => [
                    A.version ? (o(), n("span", sc, l(A.source === "development" ? "" : "v") + l(A.version), 1)) : (o(), n("span", nc, "version unknown")),
                    e("span", ac, " • " + l($(A.source)), 1)
                  ]),
                  details: a(() => [
                    A.description ? (o(), b(ae, {
                      key: 0,
                      label: "Description:",
                      value: A.description
                    }, null, 8, ["value"])) : c("", !0),
                    A.repository ? (o(), b(ae, {
                      key: 1,
                      label: "Repository:",
                      value: A.repository
                    }, null, 8, ["value"])) : c("", !0),
                    m(ae, {
                      label: "Used by:",
                      value: F(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    A.repository ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => B(A.repository)
                    }, {
                      default: a(() => [...z[9] || (z[9] = [
                        f(" View Repo ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    A.source === "registry" || A.source === "git" ? (o(), b(G, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => E(A.name)
                    }, {
                      default: a(() => [...z[10] || (z[10] = [
                        f(" Update ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    m(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (V) => D(A.name)
                    }, {
                      default: a(() => [...z[11] || (z[11] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), b(we, {
              key: 3,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(S.value, (A) => (o(), b(ke, {
                  key: A.name,
                  status: "missing"
                }, {
                  icon: a(() => [...z[12] || (z[12] = [
                    f("!", -1)
                  ])]),
                  title: a(() => [
                    f(l(A.name), 1)
                  ]),
                  subtitle: a(() => [...z[13] || (z[13] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: a(() => [
                    A.description ? (o(), b(ae, {
                      key: 0,
                      label: "Description:",
                      value: A.description
                    }, null, 8, ["value"])) : c("", !0),
                    A.repository ? (o(), b(ae, {
                      key: 1,
                      label: "Repository:",
                      value: A.repository
                    }, null, 8, ["value"])) : c("", !0),
                    m(ae, {
                      label: "Required by:",
                      value: F(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => C(A.name)
                    }, {
                      default: a(() => [...z[14] || (z[14] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    A.repository ? (o(), b(G, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => B(A.repository)
                    }, {
                      default: a(() => [...z[15] || (z[15] = [
                        f(" View Repo ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !_.value.length && !S.value.length && !k.value.length ? (o(), b(Ue, {
              key: 4,
              icon: "📭",
              message: h.value ? `No nodes match '${h.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: L.value,
        title: "About Custom Nodes",
        onClose: z[3] || (z[3] = (A) => L.value = !1)
      }, {
        content: a(() => [...z[16] || (z[16] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            f(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            f(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            f(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: z[2] || (z[2] = (A) => L.value = !1)
          }, {
            default: a(() => [...z[17] || (z[17] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ic = /* @__PURE__ */ Y(lc, [["__scopeId", "data-v-b958e6f2"]]), rc = { class: "remote-url-display" }, dc = ["title"], cc = ["title"], uc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vc = /* @__PURE__ */ J({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = M(!1), i = O(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), p = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${p}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, p) => (o(), n("div", rc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, dc),
      e("button", {
        class: ee(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", mc, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", uc, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, cc)
    ]));
  }
}), Ut = /* @__PURE__ */ Y(vc, [["__scopeId", "data-v-7768a58d"]]), fc = { class: "remote-title" }, gc = {
  key: 0,
  class: "default-badge"
}, hc = {
  key: 1,
  class: "sync-badge"
}, pc = {
  key: 0,
  class: "ahead"
}, yc = {
  key: 1,
  class: "behind"
}, wc = {
  key: 0,
  class: "tracking-info"
}, kc = /* @__PURE__ */ J({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, i = O(() => s.fetchingRemote === s.remote.name), g = O(() => s.remote.is_default), y = O(() => !!s.trackingBranch);
    function p(v) {
      const r = new Date(v), w = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), h = Math.floor(w / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const L = Math.floor(h / 60);
      if (L < 24) return `${L}h ago`;
      const I = Math.floor(L / 24);
      return I < 7 ? `${I}d ago` : r.toLocaleDateString();
    }
    return (v, r) => (o(), b(ke, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", fc, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), n("span", gc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", hc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", pc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", yc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", wc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          m(ae, { label: "Fetch:" }, {
            default: a(() => [
              m(Ut, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), b(ae, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              m(Ut, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), b(ae, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(p(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        m(G, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (u) => v.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        m(G, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (u) => v.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), b(G, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (u) => v.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), bc = /* @__PURE__ */ Y(kc, [["__scopeId", "data-v-17362e45"]]), _c = ["for"], $c = {
  key: 0,
  class: "base-form-field-required"
}, Cc = { class: "base-form-field-input" }, xc = {
  key: 1,
  class: "base-form-field-error"
}, Sc = {
  key: 2,
  class: "base-form-field-hint"
}, Ic = /* @__PURE__ */ J({
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
    const d = t, s = O(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, g) => (o(), n("div", {
      class: ee(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(l(t.label) + " ", 1),
        t.required ? (o(), n("span", $c, "*")) : c("", !0)
      ], 8, _c)) : c("", !0),
      e("div", Cc, [
        de(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", xc, l(t.error), 1)) : t.hint ? (o(), n("span", Sc, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Y(Ic, [["__scopeId", "data-v-9a1cf296"]]), Ec = { class: "remote-form" }, zc = { class: "form-header" }, Mc = { class: "form-body" }, Lc = {
  key: 0,
  class: "form-error"
}, Tc = { class: "form-actions" }, Rc = /* @__PURE__ */ J({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, g = M({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = M(!1), p = M(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const v = O(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || y.value)) {
        p.value = null, y.value = !0;
        try {
          i("submit", g.value);
        } catch (u) {
          p.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, w) => (o(), n("div", Ec, [
      e("div", zc, [
        m(Ee, null, {
          default: a(() => [
            f(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Mc, [
        m($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            m(qe, {
              modelValue: g.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (h) => g.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        m($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            m(qe, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (h) => g.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            m(qe, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (h) => g.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (o(), n("div", Lc, l(p.value), 1)) : c("", !0)
      ]),
      e("div", Tc, [
        m(G, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: y.value,
          onClick: r
        }, {
          default: a(() => [
            f(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        m(G, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (h) => u.$emit("cancel"))
        }, {
          default: a(() => [...w[4] || (w[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Dc = /* @__PURE__ */ Y(Rc, [["__scopeId", "data-v-56021b18"]]), Nc = { key: 0 }, Uc = /* @__PURE__ */ J({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: p
    } = Se(), v = M([]), r = M(null), u = M({}), w = M(!1), h = M(null), L = M(""), I = M(!1), _ = M(null), S = M(!1), k = M("add"), $ = M({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = O(() => {
      if (!L.value.trim()) return v.value;
      const z = L.value.toLowerCase();
      return v.value.filter(
        (A) => A.name.toLowerCase().includes(z) || A.fetch_url.toLowerCase().includes(z) || A.push_url.toLowerCase().includes(z)
      );
    });
    function B(z) {
      var A;
      return ((A = r.value) == null ? void 0 : A.remote) === z;
    }
    async function N() {
      w.value = !0, h.value = null;
      try {
        const z = await d();
        v.value = z.remotes, r.value = z.current_branch_tracking || null, await Promise.all(
          z.remotes.map(async (A) => {
            const V = await p(A.name);
            V && (u.value[A.name] = V);
          })
        );
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to load remotes";
      } finally {
        w.value = !1;
      }
    }
    function q() {
      k.value = "add", $.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function x(z) {
      const A = v.value.find((V) => V.name === z);
      A && (k.value = "edit", $.value = {
        name: A.name,
        fetchUrl: A.fetch_url,
        pushUrl: A.push_url
      }, S.value = !0);
    }
    async function C(z) {
      try {
        k.value === "add" ? await s(z.name, z.fetchUrl) : await g(z.name, z.fetchUrl, z.pushUrl || void 0), S.value = !1, await N();
      } catch (A) {
        h.value = A instanceof Error ? A.message : "Operation failed";
      }
    }
    function E() {
      S.value = !1, $.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function D(z) {
      _.value = z;
      try {
        await y(z);
        const A = await p(z);
        A && (u.value[z] = A);
      } catch (A) {
        h.value = A instanceof Error ? A.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function U(z) {
      if (confirm(`Remove remote "${z}"?`))
        try {
          await i(z), await N();
        } catch (A) {
          h.value = A instanceof Error ? A.message : "Failed to remove remote";
        }
    }
    function R() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return _e(N), (z, A) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (V) => I.value = !0)
          }, {
            actions: a(() => [
              S.value ? c("", !0) : (o(), b(G, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: q
              }, {
                default: a(() => [...A[3] || (A[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          S.value ? c("", !0) : (o(), b(nt, {
            key: 0,
            modelValue: L.value,
            "onUpdate:modelValue": A[1] || (A[1] = (V) => L.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          w.value ? (o(), b(He, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (o(), b(Ke, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            S.value ? (o(), b(Dc, {
              key: 0,
              mode: k.value,
              "remote-name": $.value.name,
              "fetch-url": $.value.fetchUrl,
              "push-url": $.value.pushUrl,
              onSubmit: C,
              onCancel: E
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            v.value.length && !S.value ? (o(), b(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + l(v.value.length) + " remote" + l(v.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", Nc, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            F.value.length && !S.value ? (o(), b(we, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, Z(F.value, (V) => {
                  var K;
                  return o(), b(bc, {
                    key: V.name,
                    remote: V,
                    "sync-status": u.value[V.name],
                    "tracking-branch": B(V.name) ? (K = r.value) == null ? void 0 : K.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: D,
                    onEdit: x,
                    onRemove: U
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !F.value.length && !S.value ? (o(), b(Ue, {
              key: 3,
              icon: "🌐",
              message: L.value ? `No remotes match '${L.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                m(G, {
                  variant: "primary",
                  onClick: q
                }, {
                  default: a(() => [...A[4] || (A[4] = [
                    f(" Add Your First Remote ", -1)
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
      m(je, {
        show: I.value,
        title: "About Git Remotes",
        onClose: A[2] || (A[2] = (V) => I.value = !1)
      }, {
        content: a(() => [...A[5] || (A[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            f(" The "),
            e("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          m(G, {
            variant: "link",
            onClick: R
          }, {
            default: a(() => [...A[6] || (A[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oc = /* @__PURE__ */ Y(Uc, [["__scopeId", "data-v-a75719bb"]]), Bc = { class: "setting-info" }, Pc = { class: "setting-label" }, Ac = {
  key: 0,
  class: "required-marker"
}, Vc = {
  key: 0,
  class: "setting-description"
}, Fc = { class: "setting-control" }, Wc = /* @__PURE__ */ J({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: ee(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Bc, [
        e("div", Pc, [
          f(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Ac, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Vc, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Fc, [
        de(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ Y(Wc, [["__scopeId", "data-v-cb5d236c"]]), Gc = { class: "toggle" }, jc = ["checked", "disabled"], Hc = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Gc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, jc),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Xe = /* @__PURE__ */ Y(Hc, [["__scopeId", "data-v-71c0f550"]]), Kc = { class: "settings-section" }, qc = { class: "path-setting" }, Jc = { class: "path-value" }, Yc = { class: "path-setting" }, Xc = { class: "path-value" }, Qc = { class: "settings-section" }, Zc = { class: "settings-section" }, eu = { class: "settings-section" }, tu = /* @__PURE__ */ J({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = Se(), i = M(!1), g = M(null), y = M(null), p = M(null), v = M(null), r = M(""), u = M(""), w = M(!0), h = M(!0), L = M(!1), I = O(() => v.value ? r.value !== (v.value.civitai_api_key || "") : !1);
    async function _() {
      i.value = !0, g.value = null;
      try {
        p.value = await d(), v.value = { ...p.value }, r.value = p.value.civitai_api_key || "", u.value = p.value.huggingface_token || "", w.value = p.value.auto_sync_models, h.value = p.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        L.value = F === "true";
      } catch (F) {
        g.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function S() {
      var F;
      y.value = null;
      try {
        const B = {};
        r.value !== (((F = v.value) == null ? void 0 : F.civitai_api_key) || "") && (B.civitai_api_key = r.value || null), await s(B), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (B) {
        y.value = {
          type: "error",
          message: B instanceof Error ? B.message : "Failed to save settings"
        };
      }
    }
    function k() {
      v.value && (r.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", w.value = v.value.auto_sync_models, h.value = v.value.confirm_destructive, y.value = null);
    }
    function $(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return _e(_), (F, B) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            m(G, {
              variant: "primary",
              size: "sm",
              disabled: !I.value,
              onClick: S
            }, {
              default: a(() => [...B[5] || (B[5] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            I.value ? (o(), b(G, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...B[6] || (B[6] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), b(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), b(Ke, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
          m(we, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var N, q;
              return [
                e("div", Kc, [
                  e("div", qc, [
                    B[7] || (B[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    B[8] || (B[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Jc, l(((N = p.value) == null ? void 0 : N.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Yc, [
                    B[9] || (B[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    B[10] || (B[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Xc, l(((q = p.value) == null ? void 0 : q.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          m(we, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Qc, [
                m(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    m(ft, {
                      modelValue: r.value,
                      "onUpdate:modelValue": B[0] || (B[0] = (N) => r.value = N),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(ft, {
                      modelValue: u.value,
                      "onUpdate:modelValue": B[1] || (B[1] = (N) => u.value = N),
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
          m(we, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Zc, [
                m(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    m(Xe, {
                      modelValue: L.value,
                      "onUpdate:modelValue": [
                        B[2] || (B[2] = (N) => L.value = N),
                        $
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          m(we, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", eu, [
                m(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(Xe, {
                      modelValue: w.value,
                      "onUpdate:modelValue": B[3] || (B[3] = (N) => w.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    m(Xe, {
                      modelValue: h.value,
                      "onUpdate:modelValue": B[4] || (B[4] = (N) => h.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), b(at, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Qe({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), ou = /* @__PURE__ */ Y(tu, [["__scopeId", "data-v-7861bd35"]]), su = /* @__PURE__ */ J({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Se(), s = M([]), i = M(!1), g = M(null), y = M(!1), p = M(null), v = O(() => s.value.length === 0 ? [] : s.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function r() {
      i.value = !0, g.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (u) {
        g.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var u;
          (u = p.value) != null && u.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(r), (u, w) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (h) => y.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  f(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), b(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), b(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length === 0 ? (o(), b(Ue, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (o(!0), n(W, null, Z(v.value, (h, L) => (o(), n("div", {
                key: L,
                class: ee(`log-line log-level-${h.level.toLowerCase()}`)
              }, l(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (h) => y.value = !1)
      }, {
        content: a(() => [...w[3] || (w[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: w[1] || (w[1] = (h) => y.value = !1)
          }, {
            default: a(() => [...w[4] || (w[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nu = /* @__PURE__ */ Y(su, [["__scopeId", "data-v-39f6a756"]]), au = /* @__PURE__ */ J({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = Se(), i = M([]), g = M(!1), y = M(null), p = M(!1), v = M("production"), r = M(null), u = O(() => i.value.length === 0 ? [] : i.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function w() {
      g.value = !0, y.value = null;
      try {
        i.value = await d(void 0, 500);
        try {
          const h = await s();
          v.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        y.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var h;
          (h = r.value) != null && h.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(w), (h, L) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (I) => p.value = !0)
          }, {
            actions: a(() => [
              m(G, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: g.value
              }, {
                default: a(() => [
                  f(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), b(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), b(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            i.value.length === 0 ? (o(), b(Ue, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (o(!0), n(W, null, Z(u.value, (I, _) => (o(), n("div", {
                key: _,
                class: ee(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(je, {
        show: p.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (I) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            L[3] || (L[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(v.value), 1),
            L[4] || (L[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          L[5] || (L[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          L[6] || (L[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          m(G, {
            variant: "primary",
            onClick: L[1] || (L[1] = (I) => p.value = !1)
          }, {
            default: a(() => [...L[7] || (L[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lu = /* @__PURE__ */ Y(au, [["__scopeId", "data-v-4f1e6f72"]]), iu = { class: "env-title" }, ru = {
  key: 0,
  class: "current-badge"
}, du = {
  key: 0,
  class: "branch-info"
}, cu = /* @__PURE__ */ J({
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
    return (d, s) => (o(), b(ke, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", iu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", ru, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", du, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        m(ae, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        m(ae, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        m(ae, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), b(ae, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        de(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), uu = /* @__PURE__ */ Y(cu, [["__scopeId", "data-v-5238e57c"]]), mu = {
  key: 0,
  class: "create-form"
}, vu = { class: "create-form__header" }, fu = { class: "create-form__body" }, gu = { class: "create-form__actions" }, hu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, pu = /* @__PURE__ */ J({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = Se(), g = M([]), y = M(!1), p = M(null), v = M(""), r = M(!1), u = M(!1), w = M(""), h = O(
      () => g.value.find((B) => B.is_current)
    ), L = O(() => {
      if (!v.value.trim()) return g.value;
      const B = v.value.toLowerCase();
      return g.value.filter(
        (N) => {
          var q;
          return N.name.toLowerCase().includes(B) || ((q = N.current_branch) == null ? void 0 : q.toLowerCase().includes(B));
        }
      );
    });
    function I(B) {
      if (!B) return "";
      try {
        const N = new Date(B), x = (/* @__PURE__ */ new Date()).getTime() - N.getTime(), C = Math.floor(x / 6e4), E = Math.floor(x / 36e5), D = Math.floor(x / 864e5);
        return C < 1 ? "just now" : C < 60 ? `${C} ${C === 1 ? "minute" : "minutes"} ago` : E < 24 ? `${E} ${E === 1 ? "hour" : "hours"} ago` : D < 30 ? `${D} ${D === 1 ? "day" : "days"} ago` : N.toLocaleDateString();
      } catch {
        return B;
      }
    }
    function _() {
      const B = w.value.trim();
      B && (s("create", B), w.value = "", u.value = !1);
    }
    function S() {
      w.value = "", u.value = !1;
    }
    function k(B) {
      s("viewDetails", B);
    }
    function $(B) {
      confirm(`Delete environment "${B}"?

This action cannot be undone.`) && s("delete", B);
    }
    async function F() {
      y.value = !0, p.value = null;
      try {
        g.value = await i();
      } catch (B) {
        p.value = B instanceof Error ? B.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return _e(F), (B, N) => {
      const q = lo("SectionGroup");
      return o(), n(W, null, [
        m(Ce, null, {
          header: a(() => [
            m(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: N[1] || (N[1] = (x) => r.value = !0)
            }, {
              actions: a(() => [
                m(G, {
                  variant: "ghost",
                  size: "sm",
                  onClick: N[0] || (N[0] = (x) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...N[7] || (N[7] = [
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
                m(G, {
                  variant: "ghost",
                  size: "sm",
                  onClick: F,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...N[8] || (N[8] = [
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
            m(nt, {
              modelValue: v.value,
              "onUpdate:modelValue": N[2] || (N[2] = (x) => v.value = x),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), b(He, {
              key: 0,
              message: "Loading environments..."
            })) : p.value ? (o(), b(Ke, {
              key: 1,
              message: p.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
              u.value ? (o(), n("div", mu, [
                e("div", vu, [
                  N[10] || (N[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  m(G, {
                    variant: "ghost",
                    size: "xs",
                    onClick: S
                  }, {
                    default: a(() => [...N[9] || (N[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", fu, [
                  m(ft, {
                    modelValue: w.value,
                    "onUpdate:modelValue": N[3] || (N[3] = (x) => w.value = x),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge(_, ["enter"]),
                      Ge(S, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", gu, [
                    m(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !w.value.trim()
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: a(() => [...N[12] || (N[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), b(at, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  h.value ? (o(), n(W, { key: 0 }, [
                    N[13] || (N[13] = f(" • Current: ", -1)),
                    e("strong", null, l(h.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              L.value.length ? (o(), b(q, {
                key: 2,
                title: "ENVIRONMENTS",
                count: L.value.length
              }, {
                default: a(() => [
                  (o(!0), n(W, null, Z(L.value, (x) => (o(), b(uu, {
                    key: x.name,
                    "environment-name": x.name,
                    "is-current": x.is_current,
                    "current-branch": x.current_branch,
                    "workflow-count": x.workflow_count,
                    "node-count": x.node_count,
                    "model-count": x.model_count,
                    "last-used": I(x.last_used),
                    "show-last-used": !!x.last_used
                  }, {
                    actions: a(() => [
                      x.is_current ? c("", !0) : (o(), b(G, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (C) => B.$emit("switch", x.name)
                      }, {
                        default: a(() => [...N[14] || (N[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      m(G, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (C) => k(x.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...N[15] || (N[15] = [
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
                      !x.is_current && g.value.length > 1 ? (o(), b(G, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (C) => $(x.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", hu, [...N[16] || (N[16] = [
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
              L.value.length ? c("", !0) : (o(), b(Ue, {
                key: 3,
                icon: "🌍",
                message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
              }, Vt({ _: 2 }, [
                v.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    m(G, {
                      variant: "primary",
                      onClick: N[4] || (N[4] = (x) => u.value = !0)
                    }, {
                      default: a(() => [...N[17] || (N[17] = [
                        f(" Create Environment ", -1)
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
        m(je, {
          show: r.value,
          title: "About Environments",
          onClose: N[6] || (N[6] = (x) => r.value = !1)
        }, {
          content: a(() => [...N[18] || (N[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            m(G, {
              variant: "secondary",
              onClick: N[5] || (N[5] = (x) => r.value = !1)
            }, {
              default: a(() => [...N[19] || (N[19] = [
                f(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), yu = /* @__PURE__ */ Y(pu, [["__scopeId", "data-v-97d6527d"]]), wu = { class: "file-path" }, ku = { class: "file-path-text" }, bu = ["title"], _u = /* @__PURE__ */ J({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = M(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), n("div", wu, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", ku, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, bu)) : c("", !0)
    ]));
  }
}), $u = /* @__PURE__ */ Y(_u, [["__scopeId", "data-v-f0982173"]]), Cu = { class: "output-path-input" }, xu = { class: "export-actions" }, Su = {
  key: 1,
  class: "export-warning"
}, Iu = /* @__PURE__ */ J({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Se(), s = M(""), i = M(!1), g = M(null), y = M(!1);
    async function p() {
      i.value = !0, g.value = null;
      try {
        const r = await d(s.value || void 0);
        g.value = r;
      } catch (r) {
        g.value = {
          status: "error",
          message: r instanceof Error ? r.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function v() {
      var r;
      if ((r = g.value) != null && r.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (r, u) => (o(), n(W, null, [
      m(Ce, null, {
        header: a(() => [
          m(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              m(G, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (w) => y.value = !0),
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
          m(we, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              m(ke, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  f("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  m(ae, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  m(ae, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  m(ae, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  m(ae, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(we, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              m(ke, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  f("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", Cu, [
                    m(ft, {
                      modelValue: s.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (w) => s.value = w),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(we, { title: "EXPORT" }, {
            default: a(() => [
              e("div", xu, [
                m(G, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: p
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
                    f(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), b(G, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: u[2] || (u[2] = (w) => s.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), b(we, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              m(ke, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: a(() => [
                  f(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  f(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  f(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    m(ae, { label: "Saved to:" }, {
                      default: a(() => [
                        m($u, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), b(ae, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", Su, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    m(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    m(G, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (w) => g.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
                        f(" Dismiss ", -1)
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
      m(je, {
        show: y.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (w) => y.value = !1)
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
            f(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Eu = /* @__PURE__ */ Y(Iu, [["__scopeId", "data-v-1777a9d5"]]), zu = { class: "file-input-wrapper" }, Mu = ["accept", "multiple", "disabled"], Lu = /* @__PURE__ */ J({
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
    const i = s, g = M(null);
    function y() {
      var v;
      (v = g.value) == null || v.click();
    }
    function p(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: y
    }), (v, r) => (o(), n("div", zu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, Mu),
      m(G, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          de(v.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Tu = /* @__PURE__ */ Y(Lu, [["__scopeId", "data-v-cd192091"]]), Ru = {
  key: 0,
  class: "drop-zone-empty"
}, Du = { class: "drop-zone-text" }, Nu = { class: "drop-zone-primary" }, Uu = { class: "drop-zone-secondary" }, Ou = { class: "drop-zone-actions" }, Bu = {
  key: 1,
  class: "drop-zone-file"
}, Pu = { class: "file-info" }, Au = { class: "file-details" }, Vu = { class: "file-name" }, Fu = { class: "file-size" }, Wu = /* @__PURE__ */ J({
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
    const s = d, i = M(!1), g = M(null), y = M(0), p = O(() => g.value !== null), v = O(() => {
      var k;
      return ((k = g.value) == null ? void 0 : k.name) || "";
    }), r = O(() => {
      if (!g.value) return "";
      const k = g.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var $;
      y.value++, ($ = k.dataTransfer) != null && $.types.includes("Files") && (i.value = !0);
    }
    function w(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function h() {
      y.value--, y.value === 0 && (i.value = !1);
    }
    function L(k) {
      var F;
      y.value = 0, i.value = !1;
      const $ = (F = k.dataTransfer) == null ? void 0 : F.files;
      $ && $.length > 0 && _($[0]);
    }
    function I(k) {
      k.length > 0 && _(k[0]);
    }
    function _(k) {
      g.value = k, s("fileSelected", k);
    }
    function S() {
      g.value = null, s("clear");
    }
    return (k, $) => (o(), n("div", {
      class: ee(["file-drop-zone", { "drop-active": i.value, "has-file": p.value }]),
      onDragenter: be(u, ["prevent"]),
      onDragover: be(w, ["prevent"]),
      onDragleave: be(h, ["prevent"]),
      onDrop: be(L, ["prevent"])
    }, [
      p.value ? (o(), n("div", Bu, [
        e("div", Pu, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Au, [
            e("div", Vu, l(v.value), 1),
            e("div", Fu, l(r.value), 1)
          ])
        ]),
        m(G, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: a(() => [...$[2] || ($[2] = [
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
      ])) : (o(), n("div", Ru, [
        $[0] || ($[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Du, [
          e("p", Nu, l(t.primaryText), 1),
          e("p", Uu, l(t.secondaryText), 1)
        ]),
        e("div", Ou, [
          m(Tu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
          }, {
            default: a(() => [
              f(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Gu = /* @__PURE__ */ Y(Wu, [["__scopeId", "data-v-e00abbca"]]), ju = { class: "import-preview" }, Hu = { class: "preview-header" }, Ku = {
  key: 0,
  class: "source-env"
}, qu = { class: "preview-content" }, Ju = { class: "preview-section" }, Yu = { class: "section-header" }, Xu = { class: "section-info" }, Qu = { class: "section-count" }, Zu = {
  key: 0,
  class: "item-list"
}, em = { class: "item-name" }, tm = {
  key: 0,
  class: "item-more"
}, om = { class: "preview-section" }, sm = { class: "section-header" }, nm = { class: "section-info" }, am = { class: "section-count" }, lm = {
  key: 0,
  class: "item-list"
}, im = { class: "item-details" }, rm = { class: "item-name" }, dm = { class: "item-meta" }, cm = {
  key: 0,
  class: "item-more"
}, um = { class: "preview-section" }, mm = { class: "section-header" }, vm = { class: "section-info" }, fm = { class: "section-count" }, gm = {
  key: 0,
  class: "item-list"
}, hm = { class: "item-name" }, pm = {
  key: 0,
  class: "item-more"
}, ym = {
  key: 0,
  class: "preview-section"
}, wm = { class: "git-info" }, km = /* @__PURE__ */ J({
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
    const d = t, s = O(() => d.workflows.length), i = O(() => d.models.length), g = O(() => d.nodes.length);
    function y(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, v) => (o(), n("div", ju, [
      e("div", Hu, [
        m(Ee, null, {
          default: a(() => [...v[0] || (v[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Ku, [
          v[1] || (v[1] = f(" From: ", -1)),
          m(St, null, {
            default: a(() => [
              f(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", qu, [
        e("div", Ju, [
          e("div", Yu, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Xu, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Qu, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Zu, [
            (o(!0), n(W, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", em, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", tm, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", om, [
          e("div", sm, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", nm, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", am, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", lm, [
            (o(!0), n(W, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", im, [
                e("span", rm, l(r.filename), 1),
                e("span", dm, l(y(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", cm, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", um, [
          e("div", mm, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", vm, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", fm, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", gm, [
            (o(!0), n(W, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", hm, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", pm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", ym, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", wm, [
            t.gitBranch ? (o(), b(ae, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                m(St, null, {
                  default: a(() => [
                    f(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), b(ae, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                m(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), bm = /* @__PURE__ */ Y(km, [["__scopeId", "data-v-182fe113"]]), _m = { class: "import-options" }, $m = { class: "options-container" }, Cm = { class: "option-section" }, xm = { class: "conflict-options" }, Sm = ["value", "checked", "onChange"], Im = { class: "conflict-content" }, Em = { class: "conflict-label" }, zm = { class: "conflict-description" }, Mm = { class: "option-section" }, Lm = { class: "component-toggles" }, Tm = /* @__PURE__ */ J({
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
    return (g, y) => (o(), n("div", _m, [
      m(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", $m, [
        e("div", Cm, [
          m(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", xm, [
            (o(), n(W, null, Z(i, (p) => e("label", {
              key: p.value,
              class: ee(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (v) => s("update:conflictMode", p.value)
              }, null, 40, Sm),
              e("div", Im, [
                e("span", Em, l(p.label), 1),
                e("span", zm, l(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Mm, [
          m(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Lm, [
            m(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                m(Xe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (p) => s("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                m(Xe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (p) => s("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                m(Xe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (p) => s("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                m(Xe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (p) => s("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Rm = /* @__PURE__ */ Y(Tm, [["__scopeId", "data-v-0ec212b0"]]), Dm = {
  key: 0,
  class: "import-empty"
}, Nm = { class: "import-help" }, Um = {
  key: 1,
  class: "import-configure"
}, Om = { class: "selected-file-bar" }, Bm = { class: "file-bar-content" }, Pm = { class: "file-bar-info" }, Am = { class: "file-bar-name" }, Vm = { class: "file-bar-size" }, Fm = { class: "import-actions" }, Wm = {
  key: 2,
  class: "import-progress"
}, Gm = { class: "progress-content" }, jm = { class: "progress-info" }, Hm = { class: "progress-title" }, Km = { class: "progress-detail" }, qm = { class: "progress-bar" }, Jm = { class: "progress-status" }, Ym = {
  key: 3,
  class: "import-complete"
}, Xm = { class: "complete-message" }, Qm = { class: "complete-title" }, Zm = { class: "complete-details" }, ev = { class: "complete-actions" }, tv = /* @__PURE__ */ J({
  __name: "ImportSection",
  setup(t) {
    const d = M(null), s = M(!1), i = M(!1), g = M(!1), y = M(""), p = M({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = M({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = M({
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
    }), u = O(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function w(S) {
      d.value = S;
    }
    function h() {
      d.value = null, i.value = !1, g.value = !1, y.value = "";
    }
    function L() {
      h(), s.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function I() {
      if (d.value) {
        s.value = !0, i.value = !1;
        try {
          const S = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${r.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${r.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${r.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of S)
            v.value = k, await new Promise(($) => setTimeout($, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), g.value = !0, y.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (S) {
          g.value = !1, y.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function _(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, k) => (o(), b(Ce, null, {
      header: a(() => [
        m(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Dm, [
          m(Gu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", Nm, [
            m(Ee, null, {
              default: a(() => [...k[5] || (k[5] = [
                f("How to Import", -1)
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", Um, [
          e("div", Om, [
            e("div", Bm, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Pm, [
                e("div", Am, l(d.value.name), 1),
                e("div", Vm, l(_(d.value.size)), 1)
              ])
            ]),
            m(G, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: a(() => [...k[8] || (k[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          m(bm, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          m(Rm, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = ($) => p.value.conflictMode = $),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = ($) => p.value.includeWorkflows = $),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = ($) => p.value.includeModels = $),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = ($) => p.value.includeNodes = $),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = ($) => p.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && r.value.models.length > 0 ? (o(), b(Ye, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Fm, [
            m(G, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: I
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
                f(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m(G, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: a(() => [...k[10] || (k[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Wm, [
          e("div", Gm, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", jm, [
              e("div", Hm, l(v.value.message), 1),
              e("div", Km, l(v.value.detail), 1)
            ])
          ]),
          e("div", qm, [
            e("div", {
              class: "progress-bar-fill",
              style: Qe({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Jm, l(v.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Ym, [
          e("div", {
            class: ee(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Xm, [
            e("div", Qm, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Zm, l(y.value), 1)
          ]),
          e("div", ev, [
            m(G, {
              variant: "primary",
              size: "md",
              onClick: L
            }, {
              default: a(() => [...k[12] || (k[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), ov = /* @__PURE__ */ Y(tv, [["__scopeId", "data-v-18e18eb5"]]), sv = { class: "header-info" }, nv = { class: "commit-hash" }, av = {
  key: 0,
  class: "commit-refs"
}, lv = { class: "commit-message" }, iv = { class: "commit-date" }, rv = {
  key: 0,
  class: "loading"
}, dv = {
  key: 1,
  class: "changes-section"
}, cv = { class: "stats-row" }, uv = { class: "stat" }, mv = { class: "stat insertions" }, vv = { class: "stat deletions" }, fv = {
  key: 0,
  class: "change-group"
}, gv = {
  key: 1,
  class: "change-group"
}, hv = {
  key: 0,
  class: "version"
}, pv = {
  key: 2,
  class: "change-group"
}, yv = { class: "change-item" }, wv = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = Se(), i = M(null), g = M(!0), y = O(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), p = O(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return _e(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (v, r) => (o(), b(wt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => v.$emit("close"))
    }, {
      header: a(() => {
        var u, w, h, L;
        return [
          e("div", sv, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", nv, l(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (L = (h = i.value) == null ? void 0 : h.refs) != null && L.length ? (o(), n("span", av, [
              (o(!0), n(W, null, Z(i.value.refs, (I) => (o(), n("span", {
                key: I,
                class: "ref-badge"
              }, l(I), 1))), 128))
            ])) : c("", !0)
          ]),
          m(re, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (I) => v.$emit("close"))
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
        var u, w;
        return [
          e("div", lv, l(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", iv, l(((w = i.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", rv, "Loading details...")) : i.value ? (o(), n("div", dv, [
            e("div", cv, [
              e("span", uv, l(i.value.stats.files_changed) + " files", 1),
              e("span", mv, "+" + l(i.value.stats.insertions), 1),
              e("span", vv, "-" + l(i.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", fv, [
              m(ut, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, Z(i.value.changes.workflows.added, (h) => (o(), n("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(h), 1)
              ]))), 128)),
              (o(!0), n(W, null, Z(i.value.changes.workflows.modified, (h) => (o(), n("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(h), 1)
              ]))), 128)),
              (o(!0), n(W, null, Z(i.value.changes.workflows.deleted, (h) => (o(), n("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(h), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (o(), n("div", gv, [
              m(ut, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, Z(i.value.changes.nodes.added, (h) => (o(), n("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(h.name), 1),
                h.version ? (o(), n("span", hv, "(" + l(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(W, null, Z(i.value.changes.nodes.removed, (h) => (o(), n("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", pv, [
              m(ut, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", yv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => v.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        m(re, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => v.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), kv = /* @__PURE__ */ Y(wv, [["__scopeId", "data-v-d256ff6d"]]), bv = { class: "dialog-message" }, _v = {
  key: 0,
  class: "dialog-details"
}, $v = {
  key: 1,
  class: "dialog-warning"
}, Cv = /* @__PURE__ */ J({
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
    return (d, s) => (o(), b(wt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", bv, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", _v, [
          (o(!0), n(W, null, Z(t.details, (i, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", $v, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        m(re, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            f(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), b(re, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            f(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        m(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
        }, {
          default: a(() => [
            f(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), xv = /* @__PURE__ */ Y(Cv, [["__scopeId", "data-v-3670b9f5"]]), Sv = { class: "base-textarea-wrapper" }, Iv = ["value", "rows", "placeholder", "disabled", "maxlength"], Ev = {
  key: 0,
  class: "base-textarea-count"
}, zv = /* @__PURE__ */ J({
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
    return (d, s) => (o(), n("div", Sv, [
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
      }, null, 40, Iv),
      t.showCharCount && t.maxLength ? (o(), n("div", Ev, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ot = /* @__PURE__ */ Y(zv, [["__scopeId", "data-v-5516e6fc"]]), Mv = ["checked", "disabled"], Lv = { class: "base-checkbox-box" }, Tv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Rv = {
  key: 0,
  class: "base-checkbox-label"
}, Dv = /* @__PURE__ */ J({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: ee(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked))
      }, null, 40, Mv),
      e("span", Lv, [
        t.modelValue ? (o(), n("svg", Tv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Rv, [
        de(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ Y(Dv, [["__scopeId", "data-v-bf17c831"]]), Nv = { class: "popover-header" }, Uv = { class: "popover-body" }, Ov = {
  key: 0,
  class: "changes-summary"
}, Bv = {
  key: 0,
  class: "change-item"
}, Pv = {
  key: 1,
  class: "change-item"
}, Av = {
  key: 2,
  class: "change-item"
}, Vv = {
  key: 3,
  class: "change-item"
}, Fv = {
  key: 4,
  class: "change-item"
}, Wv = {
  key: 1,
  class: "no-changes"
}, Gv = {
  key: 2,
  class: "loading"
}, jv = {
  key: 3,
  class: "issues-warning"
}, Hv = { class: "warning-header" }, Kv = { class: "warning-title" }, qv = { class: "issues-list" }, Jv = { class: "message-section" }, Yv = { class: "popover-footer" }, Xv = {
  key: 1,
  class: "commit-popover"
}, Qv = { class: "popover-header" }, Zv = { class: "popover-body" }, ef = {
  key: 0,
  class: "changes-summary"
}, tf = {
  key: 0,
  class: "change-item"
}, of = {
  key: 1,
  class: "change-item"
}, sf = {
  key: 2,
  class: "change-item"
}, nf = {
  key: 3,
  class: "change-item"
}, af = {
  key: 4,
  class: "change-item"
}, lf = {
  key: 1,
  class: "no-changes"
}, rf = {
  key: 2,
  class: "loading"
}, df = {
  key: 3,
  class: "issues-warning"
}, cf = { class: "warning-header" }, uf = { class: "warning-title" }, mf = { class: "issues-list" }, vf = { class: "message-section" }, ff = { class: "popover-footer" }, gf = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: g } = Se(), y = M(""), p = M(!1), v = M(!1), r = M(null), u = O(() => {
      if (!s.status) return !1;
      const _ = s.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || s.status.has_changes;
    }), w = O(() => {
      var _;
      return (_ = s.status) != null && _.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), h = O(() => w.value.length > 0), L = O(() => h.value && !v.value);
    async function I() {
      var _, S, k;
      if (!(h.value && !v.value) && !(!u.value || !y.value.trim() || p.value)) {
        p.value = !0, r.value = null;
        try {
          const $ = await g(y.value.trim(), v.value);
          $.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((_ = $.summary) == null ? void 0 : _.new) || 0} new, ${((S = $.summary) == null ? void 0 : S.modified) || 0} modified, ${((k = $.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : $.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : $.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          r.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (_, S) => t.asModal ? (o(), b(Le, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Nv, [
            S[11] || (S[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = (k) => i("close"))
            }, [...S[10] || (S[10] = [
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
          e("div", Uv, [
            t.status && u.value ? (o(), n("div", Ov, [
              t.status.workflows.new.length ? (o(), n("div", Bv, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Pv, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Av, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Vv, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Fv, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Wv, " No changes to commit ")) : (o(), n("div", Gv, " Loading... ")),
            h.value ? (o(), n("div", jv, [
              e("div", Hv, [
                S[17] || (S[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Kv, l(w.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", qv, [
                (o(!0), n(W, null, Z(w.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  f(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              m(Bt, {
                modelValue: v.value,
                "onUpdate:modelValue": S[1] || (S[1] = (k) => v.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...S[18] || (S[18] = [
                  f(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Jv, [
              m(Ot, {
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (k) => y.value = k),
                placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || p.value || L.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: ee(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Yv, [
            m(re, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (k) => i("close"))
            }, {
              default: a(() => [...S[19] || (S[19] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(re, {
              variant: v.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || p.value || L.value,
              loading: p.value,
              onClick: I
            }, {
              default: a(() => [
                f(l(p.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Xv, [
      e("div", Qv, [
        S[21] || (S[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = (k) => i("close"))
        }, [...S[20] || (S[20] = [
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
      e("div", Zv, [
        t.status && u.value ? (o(), n("div", ef, [
          t.status.workflows.new.length ? (o(), n("div", tf, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", of, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", sf, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", nf, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", af, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", lf, " No changes to commit ")) : (o(), n("div", rf, " Loading... ")),
        h.value ? (o(), n("div", df, [
          e("div", cf, [
            S[27] || (S[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", uf, l(w.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", mf, [
            (o(!0), n(W, null, Z(w.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              f(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          m(Bt, {
            modelValue: v.value,
            "onUpdate:modelValue": S[7] || (S[7] = (k) => v.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...S[28] || (S[28] = [
              f(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", vf, [
          m(Ot, {
            modelValue: y.value,
            "onUpdate:modelValue": S[8] || (S[8] = (k) => y.value = k),
            placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || p.value || L.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: ee(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", ff, [
        m(re, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (k) => i("close"))
        }, {
          default: a(() => [...S[29] || (S[29] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m(re, {
          variant: v.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || p.value || L.value,
          loading: p.value,
          onClick: I
        }, {
          default: a(() => [
            f(l(p.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ Y(gf, [["__scopeId", "data-v-38b45183"]]), hf = { class: "modal-header" }, pf = { class: "modal-body" }, yf = { class: "switch-message" }, wf = { class: "switch-details" }, kf = { class: "modal-actions" }, bf = /* @__PURE__ */ J({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), b(Le, { to: "body" }, [
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
          e("div", hf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", pf, [
            e("p", yf, [
              s[6] || (s[6] = f(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = f(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = f("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", wf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", kf, [
            m(G, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(G, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), _f = /* @__PURE__ */ Y(bf, [["__scopeId", "data-v-e9c5253e"]]), $f = { class: "progress-bar" }, Cf = /* @__PURE__ */ J({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = O(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, g) => (o(), n("div", $f, [
      e("div", {
        class: ee(["progress-fill", t.variant]),
        style: Qe({ width: s.value })
      }, null, 6)
    ]));
  }
}), xf = /* @__PURE__ */ Y(Cf, [["__scopeId", "data-v-1beb0512"]]), Sf = {
  key: 0,
  class: "modal-overlay"
}, If = { class: "modal-content" }, Ef = { class: "modal-body" }, zf = { class: "progress-info" }, Mf = { class: "progress-percentage" }, Lf = { class: "progress-state" }, Tf = { class: "switch-steps" }, Rf = { class: "step-icon" }, Df = { class: "step-label" }, Nf = /* @__PURE__ */ J({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = O(() => {
      const y = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return d.message || y[d.state] || d.state;
    }), i = O(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), g = O(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = y.findIndex((v) => v.state === d.state);
      return y.map((v, r) => {
        let u = "pending", w = "○";
        return r < p ? (u = "completed", w = "✓") : r === p && (u = "active", w = "⟳"), {
          ...v,
          status: u,
          icon: w
        };
      });
    });
    return (y, p) => (o(), b(Le, { to: "body" }, [
      t.show ? (o(), n("div", Sf, [
        e("div", If, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ef, [
            m(xf, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", zf, [
              e("div", Mf, l(t.progress) + "%", 1),
              e("div", Lf, l(s.value), 1)
            ]),
            e("div", Tf, [
              (o(!0), n(W, null, Z(g.value, (v) => (o(), n("div", {
                key: v.state,
                class: ee(["switch-step", v.status])
              }, [
                e("span", Rf, l(v.icon), 1),
                e("span", Df, l(v.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Uf = /* @__PURE__ */ Y(Nf, [["__scopeId", "data-v-768a5078"]]), Of = { class: "modal-header" }, Bf = { class: "modal-body" }, Pf = {
  key: 0,
  class: "node-section"
}, Af = { class: "node-list" }, Vf = {
  key: 1,
  class: "node-section"
}, Ff = { class: "node-list" }, Wf = { class: "modal-actions" }, Gf = /* @__PURE__ */ J({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), b(Le, { to: "body" }, [
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
          e("div", Bf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Pf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Af, [
                (o(!0), n(W, null, Z(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Vf, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Ff, [
                (o(!0), n(W, null, Z(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
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
          e("div", Wf, [
            m(G, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(G, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), jf = /* @__PURE__ */ Y(Gf, [["__scopeId", "data-v-7cad7518"]]);
async function it(t, d = {}, s = 5e3) {
  const i = new AbortController(), g = setTimeout(() => i.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: i.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function Hf() {
  const t = M(null);
  async function d() {
    try {
      const p = await it(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (p.ok)
        return (await p.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const p = await it(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const p = await it(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Failed to get status");
      return await p.json();
    } catch {
      return null;
    }
  }
  async function g() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await it(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await it(
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
    restart: g,
    kill: y
  };
}
const Kf = { class: "comfygit-panel" }, qf = { class: "panel-header" }, Jf = { class: "header-left" }, Yf = {
  key: 0,
  class: "header-info"
}, Xf = { class: "header-actions" }, Qf = { class: "env-switcher" }, Zf = {
  key: 0,
  class: "header-info"
}, eg = { class: "branch-name" }, tg = { class: "panel-main" }, og = { class: "sidebar" }, sg = { class: "sidebar-section" }, ng = { class: "sidebar-section" }, ag = { class: "sidebar-section" }, lg = { class: "content-area" }, ig = {
  key: 0,
  class: "error-message"
}, rg = {
  key: 1,
  class: "loading"
}, dg = { class: "dialog-content env-selector-dialog" }, cg = { class: "dialog-header" }, ug = { class: "dialog-body" }, mg = { class: "env-list" }, vg = { class: "env-info" }, fg = { class: "env-name-row" }, gg = { class: "env-indicator" }, hg = { class: "env-name" }, pg = {
  key: 0,
  class: "env-branch"
}, yg = {
  key: 1,
  class: "current-label"
}, wg = { class: "env-stats" }, kg = ["onClick"], bg = { class: "toast-container" }, _g = { class: "toast-icon" }, $g = { class: "toast-message" }, Cg = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: g,
      getBranches: y,
      checkout: p,
      createBranch: v,
      switchBranch: r,
      getEnvironments: u,
      switchEnvironment: w,
      getSwitchProgress: h,
      syncEnvironmentManually: L
    } = Se(), I = Hf(), _ = M(null), S = M([]), k = M([]), $ = M([]), F = O(() => $.value.find((j) => j.is_current)), B = M(!1), N = M(null), q = M(null), x = M(!1), C = M(null), E = M(!1), D = M(!1), U = M(""), R = M({ state: "idle", progress: 0, message: "" });
    let z = null, A = null;
    const V = M("status"), K = M("this-env");
    function Q(j, T) {
      V.value = j, K.value = T;
    }
    function le(j) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ce && Q(ce.view, ce.section);
    }
    function se() {
      Q("branches", "this-env");
    }
    const ve = M(null), oe = M(!1), ze = M(!1), pe = M([]);
    let Ze = 0;
    function fe(j, T = "info", ce = 3e3) {
      const ye = ++Ze;
      return pe.value.push({ id: ye, message: j, type: T }), ce > 0 && setTimeout(() => {
        pe.value = pe.value.filter((Re) => Re.id !== ye);
      }, ce), ye;
    }
    function Me(j) {
      pe.value = pe.value.filter((T) => T.id !== j);
    }
    function lt(j) {
      switch (j) {
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
    const X = O(() => {
      if (!_.value) return "neutral";
      const j = _.value.workflows, T = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    O(() => _.value ? X.value === "success" ? "All synced" : X.value === "warning" ? "Uncommitted changes" : X.value === "error" ? "Not synced" : "" : "");
    async function ne() {
      B.value = !0, N.value = null;
      try {
        const [j, T, ce, ye] = await Promise.all([
          i(!0),
          g(),
          y(),
          u()
        ]);
        _.value = j, S.value = T.commits, k.value = ce.branches, $.value = ye, s("statusUpdate", j), C.value && await C.value.loadWorkflows(!0);
      } catch (j) {
        N.value = j instanceof Error ? j.message : "Failed to load status", _.value = null, S.value = [], k.value = [];
      } finally {
        B.value = !1;
      }
    }
    function he(j) {
      q.value = j;
    }
    async function $e(j) {
      var ce;
      q.value = null;
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      ve.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ce = j.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: T ? Dt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var De;
          ve.value = null, te();
          const ye = fe(`Checking out ${j.short_hash || ((De = j.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Re = await p(j.hash, T);
          Me(ye), Re.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function et(j) {
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      ve.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: T ? Dt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ve.value = null, te();
          const ce = fe(`Switching to ${j}...`, "info", 0), ye = await r(j, T);
          Me(ce), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function H(j) {
      const T = fe(`Creating branch ${j}...`, "info", 0), ce = await v(j);
      Me(T), ce.status === "success" ? (fe(`Branch "${j}" created`, "success"), await ne()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function P(j) {
      q.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const ce = fe(`Creating branch ${T}...`, "info", 0), ye = await v(T, j.hash);
        Me(ce), ye.status === "success" ? (fe(`Branch "${T}" created from ${j.short_hash}`, "success"), await ne()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function te() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ge(j) {
      x.value = !1, U.value = j, E.value = !0;
    }
    async function Te() {
      E.value = !1, D.value = !0, te(), R.value = {
        progress: 10,
        state: Oe(10),
        message: Be(10)
      };
      try {
        await w(U.value), gt(), ht();
      } catch (j) {
        Pe(), D.value = !1, fe(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), R.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Oe(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Be(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Oe(j)] || "";
    }
    function gt() {
      if (A) return;
      let j = 10;
      const T = 60, ce = 5e3, ye = 100, Re = (T - j) / (ce / ye);
      A = window.setInterval(() => {
        if (j += Re, j >= T && (j = T, Pe()), R.value.progress < T) {
          const De = Math.floor(j);
          R.value = {
            progress: De,
            state: Oe(De),
            message: Be(De)
          };
        }
      }, ye);
    }
    function Pe() {
      A && (clearInterval(A), A = null);
    }
    function ht() {
      z || (z = window.setInterval(async () => {
        try {
          let j = await I.getStatus();
          if ((!j || j.state === "idle") && (j = await h()), !j)
            return;
          const T = j.progress || 0;
          T >= 60 && Pe();
          const ce = Math.max(T, R.value.progress), ye = j.state && j.state !== "idle" && j.state !== "unknown", Re = ye ? j.state : Oe(ce), De = ye && j.message || Be(ce);
          R.value = {
            state: Re,
            progress: ce,
            message: De
          }, j.state === "complete" ? (Pe(), bt(), D.value = !1, fe(`✓ Switched to ${U.value}`, "success"), await ne(), U.value = "") : j.state === "rolled_back" ? (Pe(), bt(), D.value = !1, fe("Switch failed, restored previous environment", "warning"), U.value = "") : j.state === "critical_failure" && (Pe(), bt(), D.value = !1, fe(`Critical error during switch: ${j.message}`, "error"), U.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function bt() {
      Pe(), z && (clearInterval(z), z = null);
    }
    function Xt() {
      E.value = !1, U.value = "";
    }
    async function Qt() {
      oe.value = !1, await ne(), fe("✓ Changes committed", "success");
    }
    async function Zt() {
      ze.value = !1;
      const j = fe("Syncing environment...", "info", 0);
      try {
        const T = await L("skip", !0);
        if (Me(j), T.status === "success") {
          const ce = [];
          T.nodes_installed.length && ce.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && ce.push(`${T.nodes_removed.length} removed`);
          const ye = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await ne();
        } else {
          const ce = T.errors.length ? T.errors.join("; ") : T.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (T) {
        Me(j), fe(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function eo(j) {
      const T = fe(`Creating environment "${j}"...`, "info", 0);
      Me(T), fe("Environment creation not yet implemented", "warning");
    }
    async function to(j) {
      const T = fe(`Deleting environment "${j}"...`, "info", 0);
      Me(T), fe("Environment deletion not yet implemented", "warning");
    }
    function oo(j) {
      fe(`Viewing details for "${j}"`, "info"), Q("models-env", "this-env");
    }
    function Dt() {
      if (!_.value) return [];
      const j = [], T = _.value.workflows;
      return T.new.length && j.push(`${T.new.length} new workflow(s)`), T.modified.length && j.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && j.push(`${T.deleted.length} deleted workflow(s)`), j;
    }
    return _e(ne), (j, T) => {
      var ce, ye, Re, De;
      return o(), n("div", Kf, [
        e("div", qf, [
          e("div", Jf, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), n("div", Yf)) : c("", !0)
          ]),
          e("div", Xf, [
            e("button", {
              class: ee(["icon-btn", { spinning: B.value }]),
              onClick: ne,
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
              onClick: T[0] || (T[0] = (ie) => s("close")),
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
        e("div", Qf, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ie) => Q("environments", "all-envs"))
          }, [
            _.value ? (o(), n("div", Zf, [
              e("span", null, l(((ce = F.value) == null ? void 0 : ce.name) || ((ye = _.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", eg, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", tg, [
          e("div", og, [
            e("div", sg, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "status" && K.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ie) => Q("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ie) => Q("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ie) => Q("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "branches" }]),
                onClick: T[5] || (T[5] = (ie) => Q("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "history" }]),
                onClick: T[6] || (T[6] = (ie) => Q("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ie) => Q("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ie) => Q("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ng, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "environments" }]),
                onClick: T[9] || (T[9] = (ie) => Q("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ie) => Q("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "settings" }]),
                onClick: T[11] || (T[11] = (ie) => Q("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ie) => Q("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ag, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "export" }]),
                onClick: T[13] || (T[13] = (ie) => Q("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "import" }]),
                onClick: T[14] || (T[14] = (ie) => Q("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: V.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ie) => Q("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", lg, [
            N.value ? (o(), n("div", ig, l(N.value), 1)) : !_.value && V.value === "status" ? (o(), n("div", rg, " Loading status... ")) : (o(), n(W, { key: 2 }, [
              V.value === "status" ? (o(), b(An, {
                key: 0,
                status: _.value,
                onSwitchBranch: se,
                onCommitChanges: T[16] || (T[16] = (ie) => oe.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ie) => ze.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ie) => Q("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ie) => Q("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ie) => Q("debug-env", "this-env"))
              }, null, 8, ["status"])) : V.value === "workflows" ? (o(), b(Xd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: C,
                onRefresh: ne
              }, null, 512)) : V.value === "models-env" ? (o(), b(ec, {
                key: 2,
                onNavigate: le
              })) : V.value === "branches" ? (o(), b(ta, {
                key: 3,
                branches: k.value,
                current: ((Re = _.value) == null ? void 0 : Re.branch) || null,
                onSwitch: et,
                onCreate: H
              }, null, 8, ["branches", "current"])) : V.value === "history" ? (o(), b(ma, {
                key: 4,
                commits: S.value,
                onSelect: he,
                onCheckout: $e
              }, null, 8, ["commits"])) : V.value === "nodes" ? (o(), b(ic, { key: 5 })) : V.value === "debug-env" ? (o(), b(lu, { key: 6 })) : V.value === "environments" ? (o(), b(yu, {
                key: 7,
                onSwitch: ge,
                onCreate: eo,
                onDelete: to,
                onViewDetails: oo
              })) : V.value === "model-index" ? (o(), b(oc, { key: 8 })) : V.value === "settings" ? (o(), b(ou, { key: 9 })) : V.value === "debug-workspace" ? (o(), b(nu, { key: 10 })) : V.value === "export" ? (o(), b(Eu, { key: 11 })) : V.value === "import" ? (o(), b(ov, { key: 12 })) : V.value === "remotes" ? (o(), b(Oc, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        q.value ? (o(), b(kv, {
          key: 0,
          commit: q.value,
          onClose: T[21] || (T[21] = (ie) => q.value = null),
          onCheckout: $e,
          onCreateBranch: P
        }, null, 8, ["commit"])) : c("", !0),
        ve.value ? (o(), b(xv, {
          key: 1,
          title: ve.value.title,
          message: ve.value.message,
          details: ve.value.details,
          warning: ve.value.warning,
          confirmLabel: ve.value.confirmLabel,
          cancelLabel: ve.value.cancelLabel,
          secondaryLabel: ve.value.secondaryLabel,
          secondaryAction: ve.value.secondaryAction,
          destructive: ve.value.destructive,
          onConfirm: ve.value.onConfirm,
          onCancel: T[22] || (T[22] = (ie) => ve.value = null),
          onSecondary: ve.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        m(_f, {
          show: E.value,
          "from-environment": ((De = F.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": U.value,
          onConfirm: Te,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        oe.value && _.value ? (o(), b(Ht, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ie) => oe.value = !1),
          onCommitted: Qt
        }, null, 8, ["status"])) : c("", !0),
        ze.value && _.value ? (o(), b(jf, {
          key: 3,
          show: ze.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: Zt,
          onClose: T[24] || (T[24] = (ie) => ze.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        m(Uf, {
          show: D.value,
          state: R.value.state,
          progress: R.value.progress,
          message: R.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        x.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = be((ie) => x.value = !1, ["self"]))
        }, [
          e("div", dg, [
            e("div", cg, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ie) => x.value = !1)
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
            e("div", ug, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", mg, [
                (o(!0), n(W, null, Z($.value, (ie) => (o(), n("div", {
                  key: ie.name,
                  class: ee(["env-item", { current: ie.is_current }])
                }, [
                  e("div", vg, [
                    e("div", fg, [
                      e("span", gg, l(ie.is_current ? "●" : "○"), 1),
                      e("span", hg, l(ie.name), 1),
                      ie.current_branch ? (o(), n("span", pg, "(" + l(ie.current_branch) + ")", 1)) : c("", !0),
                      ie.is_current ? (o(), n("span", yg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", wg, l(ie.workflow_count) + " workflows • " + l(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Lh) => ge(ie.name)
                  }, " SWITCH ", 8, kg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", bg, [
          m(io, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(W, null, Z(pe.value, (ie) => (o(), n("div", {
                key: ie.id,
                class: ee(["toast", ie.type])
              }, [
                e("span", _g, l(lt(ie.type)), 1),
                e("span", $g, l(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), xg = /* @__PURE__ */ Y(Cg, [["__scopeId", "data-v-734ed318"]]), Sg = { class: "item-header" }, Ig = { class: "item-info" }, Eg = { class: "filename" }, zg = { class: "metadata" }, Mg = { class: "size" }, Lg = {
  key: 0,
  class: "type"
}, Tg = { class: "item-actions" }, Rg = {
  key: 0,
  class: "progress-section"
}, Dg = { class: "progress-bar" }, Ng = { class: "progress-stats" }, Ug = { class: "downloaded" }, Og = { class: "speed" }, Bg = {
  key: 0,
  class: "eta"
}, Pg = {
  key: 1,
  class: "status-msg paused"
}, Ag = {
  key: 2,
  class: "status-msg queued"
}, Vg = {
  key: 3,
  class: "status-msg completed"
}, Fg = {
  key: 4,
  class: "status-msg failed"
}, Wg = {
  key: 0,
  class: "retries"
}, Gg = /* @__PURE__ */ J({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function i(p) {
      if (p === 0) return "?";
      const v = p / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const v = Math.floor(p / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (p, v) => (o(), n("div", {
      class: ee(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Sg, [
        e("div", Ig, [
          e("div", Eg, l(t.item.filename), 1),
          e("div", zg, [
            e("span", Mg, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", Lg, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Tg, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (r) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (r) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (r) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (r) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", Rg, [
        e("div", Dg, [
          e("div", {
            class: "progress-fill",
            style: Qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Ng, [
          e("span", Ug, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", Og, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", Bg, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", Pg, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Ag, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", Vg, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Fg, [
        f(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Wg, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ Y(Gg, [["__scopeId", "data-v-2110df65"]]), jg = { class: "queue-title" }, Hg = { class: "count" }, Kg = { class: "queue-actions" }, qg = { class: "action-label" }, Jg = {
  key: 0,
  class: "overall-progress"
}, Yg = { class: "progress-bar" }, Xg = {
  key: 0,
  class: "current-mini"
}, Qg = { class: "filename" }, Zg = { class: "speed" }, eh = {
  key: 1,
  class: "queue-content"
}, th = {
  key: 0,
  class: "section"
}, oh = {
  key: 1,
  class: "section"
}, sh = { class: "section-header" }, nh = { class: "section-label paused" }, ah = { class: "items-list" }, lh = {
  key: 2,
  class: "section"
}, ih = { class: "section-header" }, rh = { class: "section-label" }, dh = { class: "items-list" }, ch = {
  key: 3,
  class: "section"
}, uh = { class: "section-header" }, mh = { class: "section-label" }, vh = { class: "items-list" }, fh = {
  key: 4,
  class: "section"
}, gh = { class: "section-header" }, hh = { class: "section-label failed" }, ph = { class: "items-list" }, yh = /* @__PURE__ */ J({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: g,
      failedItems: y,
      pausedItems: p,
      hasItems: v,
      activeCount: r,
      cancelDownload: u,
      retryDownload: w,
      resumeDownload: h,
      resumeAllPaused: L,
      removeItem: I,
      clearCompleted: _
    } = kt(), S = M(!1);
    let k = null;
    Et(
      () => ({
        active: r.value,
        failed: y.value.length,
        paused: p.value.length,
        completed: g.value.length
      }),
      (N, q) => {
        k && (clearTimeout(k), k = null);
        const x = N.active === 0 && N.failed === 0 && N.paused === 0 && N.completed > 0, C = q && (q.active > 0 || q.paused > 0);
        x && C && (k = setTimeout(() => {
          _(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = O(() => {
      var x;
      if (d.items.length === 0) return 0;
      const N = g.value.length, q = ((x = s.value) == null ? void 0 : x.progress) || 0;
      return Math.round((N + q / 100) / d.items.length * 100);
    });
    function F(N) {
      u(N);
    }
    function B(N) {
      return N === 0 ? "" : `${(N / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (N, q) => (o(), b(Le, { to: "body" }, [
      ue(v) ? (o(), n("div", {
        key: 0,
        class: ee(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (x) => S.value = !S.value)
        }, [
          e("div", jg, [
            q[4] || (q[4] = e("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Hg, "(" + l(ue(r)) + "/" + l(ue(d).items.length) + ")", 1)
          ]),
          e("div", Kg, [
            e("span", qg, l(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (o(), n("div", eh, [
          ue(s) ? (o(), n("div", th, [
            q[6] || (q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            m(rt, {
              item: ue(s),
              onCancel: q[1] || (q[1] = (x) => F(ue(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ue(p).length > 0 ? (o(), n("div", oh, [
            e("div", sh, [
              e("span", nh, "Paused (" + l(ue(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...x) => ue(L) && ue(L)(...x))
              }, "Resume All")
            ]),
            e("div", ah, [
              (o(!0), n(W, null, Z(ue(p), (x) => (o(), b(rt, {
                key: x.id,
                item: x,
                onResume: (C) => ue(h)(x.id),
                onRemove: (C) => ue(I)(x.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ue(i).length > 0 ? (o(), n("div", lh, [
            e("div", ih, [
              e("span", rh, "Queued (" + l(ue(i).length) + ")", 1)
            ]),
            e("div", dh, [
              (o(!0), n(W, null, Z(ue(i), (x) => (o(), b(rt, {
                key: x.id,
                item: x,
                onCancel: (C) => F(x.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ue(g).length > 0 ? (o(), n("div", ch, [
            e("div", uh, [
              e("span", mh, "Completed (" + l(ue(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...x) => ue(_) && ue(_)(...x))
              }, "Clear")
            ]),
            e("div", vh, [
              (o(!0), n(W, null, Z(ue(g).slice(0, 3), (x) => (o(), b(rt, {
                key: x.id,
                item: x,
                onRemove: (C) => ue(I)(x.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ue(y).length > 0 ? (o(), n("div", fh, [
            e("div", gh, [
              e("span", hh, "Failed (" + l(ue(y).length) + ")", 1)
            ]),
            e("div", ph, [
              (o(!0), n(W, null, Z(ue(y), (x) => (o(), b(rt, {
                key: x.id,
                item: x,
                onRetry: (C) => ue(w)(x.id),
                onRemove: (C) => ue(I)(x.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", Jg, [
          e("div", Yg, [
            e("div", {
              class: "progress-fill",
              style: Qe({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ue(s) ? (o(), n("div", Xg, [
            e("span", Qg, l(ue(s).filename), 1),
            e("span", Zg, l(B(ue(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), wh = /* @__PURE__ */ Y(yh, [["__scopeId", "data-v-60751cfa"]]), kh = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', bh = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', _h = {
  comfy: kh,
  phosphor: bh
}, Tt = "comfy", Kt = "comfygit-theme";
let Je = null, qt = Tt;
function $h() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Jt(t = Tt) {
  Je && Je.remove(), Je = document.createElement("style"), Je.id = "comfygit-theme-styles", Je.setAttribute("data-theme", t), Je.textContent = _h[t], document.head.appendChild(Je), document.body.setAttribute("data-comfygit-theme", t), qt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Ch() {
  return qt;
}
function xh(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const Sh = $h();
Jt(Sh);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), xh(t);
  },
  getTheme: () => {
    const t = Ch();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ne = null, Ie = null, mt = null, dt = null, Pt = null;
const st = M(null);
async function yt() {
  var t;
  if (!((t = ot) != null && t.api)) return null;
  try {
    const d = await ot.api.fetchApi("/v2/comfygit/status");
    d.ok && (st.value = await d.json());
  } catch {
  }
}
function Ih() {
  if (!st.value) return !1;
  const t = st.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || st.value.has_changes;
}
function Eh() {
  Ne && Ne.remove(), Ne = document.createElement("div"), Ne.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ne.appendChild(t), Ne.addEventListener("click", (i) => {
    i.target === Ne && Ct();
  });
  const d = (i) => {
    i.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Mt(xg, {
      onClose: Ct,
      onStatusUpdate: (i) => {
        st.value = i, vt();
      }
    })
  }).mount(t), document.body.appendChild(Ne);
}
function Ct() {
  Ne && (Ne.remove(), Ne = null);
}
function zh(t) {
  ct(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (g) => {
    Ie && !Ie.contains(g.target) && g.target !== t && (ct(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (g) => {
    g.key === "Escape" && (ct(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), mt = zt({
    render: () => Mt(Ht, {
      status: st.value,
      onClose: ct,
      onCommitted: () => {
        ct(), yt().then(vt);
      }
    })
  }), mt.mount(Ie), document.body.appendChild(Ie);
}
function ct() {
  mt && (mt.unmount(), mt = null), Ie && (Ie.remove(), Ie = null);
}
function Mh() {
  dt || (dt = document.createElement("div"), dt.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Mt(wh)
  }), Pt.mount(dt), document.body.appendChild(dt), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function vt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = Ih() ? "block" : "none");
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
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Eh, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => zh(Fe), t.appendChild(d), t.appendChild(Fe), (y = (g = ot.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (ot.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Mh();
    const { loadPendingDownloads: s } = kt();
    s(), await yt(), vt(), setInterval(async () => {
      await yt(), vt();
    }, 3e4);
    const i = ot.api;
    if (i) {
      let p = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, v = function() {
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", u.appendChild(w);
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => p(), u.appendChild(h);
        const L = document.createElement("button");
        L.textContent = "×", L.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => u.remove(), u.appendChild(L), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: w, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${h}`), await yt(), vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (u) => {
        const w = u.detail != null;
        w && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : v()), r = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
