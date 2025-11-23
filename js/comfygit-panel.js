import { app as st } from "../../scripts/app.js";
import { defineComponent as G, createElementBlock as n, openBlock as o, createCommentVNode as r, createElementVNode as e, renderSlot as te, createBlock as p, resolveDynamicComponent as dt, normalizeClass as Y, withCtx as a, toDisplayString as l, createVNode as d, createTextVNode as m, computed as F, Fragment as W, renderList as q, normalizeStyle as qe, ref as x, onMounted as ue, watch as yt, Teleport as Re, withModifiers as ve, Transition as Pt, withKeys as Se, onUnmounted as At, resolveComponent as Wt, createSlots as wt, TransitionGroup as Ft, createApp as bt, h as kt } from "vue";
const Ht = { class: "panel-layout" }, Gt = {
  key: 0,
  class: "panel-layout-header"
}, jt = {
  key: 1,
  class: "panel-layout-search"
}, Kt = { class: "panel-layout-content" }, qt = {
  key: 2,
  class: "panel-layout-footer"
}, Yt = /* @__PURE__ */ G({
  __name: "PanelLayout",
  setup(t) {
    return (c, s) => (o(), n("div", Ht, [
      c.$slots.header ? (o(), n("div", Gt, [
        te(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (o(), n("div", jt, [
        te(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Kt, [
        te(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", qt, [
        te(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), j = (t, c) => {
  const s = t.__vccOpts || t;
  for (const [i, g] of c)
    s[i] = g;
  return s;
}, fe = /* @__PURE__ */ j(Yt, [["__scopeId", "data-v-21565df9"]]), Jt = {
  key: 0,
  class: "panel-title-prefix"
}, Xt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Qt = /* @__PURE__ */ G({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, s) => (o(), p(dt(`h${t.level}`), {
      class: Y(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", Jt, l(t.prefix), 1)) : (o(), n("span", Xt)),
        te(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zt = /* @__PURE__ */ j(Qt, [["__scopeId", "data-v-c3875efc"]]), eo = ["title"], to = ["width", "height"], oo = /* @__PURE__ */ G({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (i) => c.$emit("click"))
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
      ])], 8, to))
    ], 8, eo));
  }
}), $t = /* @__PURE__ */ j(oo, [["__scopeId", "data-v-6fc7f16d"]]), so = { class: "header-left" }, ao = {
  key: 0,
  class: "header-actions"
}, no = /* @__PURE__ */ G({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", so, [
        d(Zt, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            m(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), p($t, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", ao, [
        te(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ j(no, [["__scopeId", "data-v-55a62cd6"]]), lo = {
  key: 0,
  class: "section-title-count"
}, io = {
  key: 1,
  class: "section-title-icon"
}, ro = /* @__PURE__ */ G({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), p(dt(`h${t.level}`), {
      class: Y(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        te(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", lo, "(" + l(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (o(), n("span", io, l(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pe = /* @__PURE__ */ j(ro, [["__scopeId", "data-v-559361eb"]]), co = { class: "status-grid" }, uo = { class: "status-grid__column" }, mo = { class: "status-grid__title" }, vo = { class: "status-grid__column status-grid__column--right" }, fo = { class: "status-grid__title" }, go = /* @__PURE__ */ G({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, s) => (o(), n("div", co, [
      e("div", uo, [
        e("h4", mo, l(t.leftTitle), 1),
        te(c.$slots, "left", {}, void 0, !0)
      ]),
      e("div", vo, [
        e("h4", fo, l(t.rightTitle), 1),
        te(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), ho = /* @__PURE__ */ j(go, [["__scopeId", "data-v-fe556068"]]), po = {
  key: 0,
  class: "status-item__icon"
}, yo = {
  key: 1,
  class: "status-item__count"
}, wo = { class: "status-item__label" }, bo = /* @__PURE__ */ G({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, s = F(() => `status-item--${c.variant}`);
    return (i, g) => (o(), n("div", {
      class: Y(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", po, l(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (o(), n("span", yo, l(t.count), 1)) : r("", !0),
      e("span", wo, l(t.label), 1)
    ], 2));
  }
}), Ce = /* @__PURE__ */ j(bo, [["__scopeId", "data-v-6f929183"]]), ko = { class: "issue-card__header" }, $o = { class: "issue-card__icon" }, _o = { class: "issue-card__title" }, Co = {
  key: 0,
  class: "issue-card__content"
}, xo = {
  key: 0,
  class: "issue-card__description"
}, So = {
  key: 1,
  class: "issue-card__items"
}, Eo = {
  key: 2,
  class: "issue-card__actions"
}, Io = /* @__PURE__ */ G({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, s = F(() => `issue-card--${c.severity}`);
    return (i, g) => (o(), n("div", {
      class: Y(["issue-card", s.value])
    }, [
      e("div", ko, [
        e("span", $o, l(t.icon), 1),
        e("h4", _o, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Co, [
        t.description ? (o(), n("p", xo, l(t.description), 1)) : r("", !0),
        te(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (o(), n("div", So, [
        (o(!0), n(W, null, q(t.items, (h, u) => (o(), n("div", {
          key: u,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(h), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (o(), n("div", Eo, [
        te(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ j(Io, [["__scopeId", "data-v-df6aa348"]]), zo = ["type", "disabled"], Lo = {
  key: 0,
  class: "spinner"
}, Mo = /* @__PURE__ */ G({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Y(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Lo)) : r("", !0),
      t.loading ? r("", !0) : te(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, zo));
  }
}), U = /* @__PURE__ */ j(Mo, [["__scopeId", "data-v-772abe47"]]), To = { class: "empty-state" }, No = {
  key: 0,
  class: "empty-icon"
}, Do = { class: "empty-message" }, Bo = /* @__PURE__ */ G({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, s) => (o(), n("div", To, [
      t.icon ? (o(), n("div", No, l(t.icon), 1)) : r("", !0),
      e("p", Do, l(t.message), 1),
      t.actionLabel ? (o(), p(U, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("action"))
      }, {
        default: a(() => [
          m(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ j(Bo, [["__scopeId", "data-v-4466284f"]]), Ro = { class: "branch-indicator" }, Uo = { class: "branch-indicator__info" }, Oo = { class: "branch-indicator__label" }, Vo = { class: "branch-indicator__name" }, Po = {
  key: 0,
  class: "branch-indicator__remote"
}, Ao = {
  key: 0,
  class: "branch-indicator__status"
}, Wo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Fo = {
  key: 1,
  class: "branch-indicator__behind"
}, Ho = {
  key: 1,
  class: "branch-indicator__actions"
}, Go = /* @__PURE__ */ G({
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
    return (c, s) => (o(), n("div", Ro, [
      e("div", Uo, [
        e("span", Oo, l(t.label), 1),
        e("span", Vo, l(t.branchName), 1),
        t.remote ? (o(), n("span", Po, "@" + l(t.remote), 1)) : r("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", Ao, [
        t.commitsAhead ? (o(), n("span", Wo, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : r("", !0),
        t.commitsBehind ? (o(), n("span", Fo, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : r("", !0)
      ])) : r("", !0),
      c.$slots.actions ? (o(), n("div", Ho, [
        te(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), jo = /* @__PURE__ */ j(Go, [["__scopeId", "data-v-cb8dd50e"]]), Ko = /* @__PURE__ */ G({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: Y(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), it = /* @__PURE__ */ j(Ko, [["__scopeId", "data-v-75e9eeb8"]]), qo = /* @__PURE__ */ G({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: Y(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ j(qo, [["__scopeId", "data-v-2f186e4c"]]), Yo = { class: "detail-row" }, Jo = /* @__PURE__ */ G({
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
    return (c, s) => (o(), n("div", Yo, [
      d(it, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          m(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), p(rt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          m(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : te(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ j(Jo, [["__scopeId", "data-v-ef15664a"]]), Xo = { class: "modal-header" }, Qo = { class: "modal-body" }, Zo = { class: "status-section" }, es = {
  key: 0,
  class: "status-section"
}, ts = {
  key: 0,
  class: "workflow-group"
}, os = { class: "workflow-group-header" }, ss = { class: "workflow-group-title" }, as = { class: "workflow-list" }, ns = { class: "workflow-name" }, ls = { class: "workflow-issue" }, is = {
  key: 1,
  class: "workflow-group"
}, rs = { class: "workflow-group-header" }, cs = { class: "workflow-group-title" }, ds = { class: "workflow-list" }, us = { class: "workflow-name" }, ms = { class: "workflow-issue" }, vs = {
  key: 2,
  class: "workflow-group"
}, fs = { class: "workflow-group-header" }, gs = { class: "workflow-group-title" }, hs = { class: "workflow-list" }, ps = { class: "workflow-name" }, ys = {
  key: 3,
  class: "workflow-group"
}, ws = { class: "workflow-group-header" }, bs = { class: "workflow-group-title" }, ks = { class: "workflow-list" }, $s = { class: "workflow-name" }, _s = {
  key: 4,
  class: "workflow-group"
}, Cs = { class: "workflow-group-header" }, xs = { class: "workflow-group-title" }, Ss = { class: "workflow-list" }, Es = { class: "workflow-name" }, Is = {
  key: 5,
  class: "workflow-group"
}, zs = { class: "workflow-group-title" }, Ls = { class: "expand-icon" }, Ms = {
  key: 0,
  class: "workflow-list"
}, Ts = { class: "workflow-name" }, Ns = {
  key: 1,
  class: "status-section"
}, Ds = {
  key: 0,
  class: "change-group"
}, Bs = { class: "change-group-header" }, Rs = { class: "change-group-title" }, Us = { class: "change-list" }, Os = { class: "node-name" }, Vs = {
  key: 0,
  class: "dev-badge"
}, Ps = {
  key: 1,
  class: "change-group"
}, As = { class: "change-group-header" }, Ws = { class: "change-group-title" }, Fs = { class: "change-list" }, Hs = { class: "node-name" }, Gs = {
  key: 0,
  class: "dev-badge"
}, js = {
  key: 2,
  class: "change-group"
}, Ks = { class: "change-list" }, qs = { class: "change-item" }, Ys = { class: "node-name" }, Js = {
  key: 3,
  class: "change-group"
}, Xs = {
  key: 2,
  class: "status-section"
}, Qs = {
  key: 0,
  class: "drift-item"
}, Zs = { class: "drift-list" }, ea = {
  key: 0,
  class: "drift-list-more"
}, ta = {
  key: 1,
  class: "drift-item"
}, oa = { class: "drift-list" }, sa = {
  key: 0,
  class: "drift-list-more"
}, aa = {
  key: 2,
  class: "drift-item"
}, na = {
  key: 3,
  class: "drift-item"
}, la = {
  key: 3,
  class: "status-section"
}, ia = { class: "info-box" }, ra = { class: "drift-list" }, ca = {
  key: 0,
  class: "drift-list-more"
}, da = {
  key: 4,
  class: "status-section"
}, ua = { class: "warning-box" }, ma = {
  key: 5,
  class: "empty-state-inline"
}, va = { class: "modal-actions" }, fa = /* @__PURE__ */ G({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, s = x(!1);
    ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), yt(() => c.show, ($, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", $);
    }, { immediate: !0 });
    const i = F(() => {
      var $, k, R;
      return ((R = (k = ($ = c.status) == null ? void 0 : $.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : R.filter(
        (V) => V.status === "broken" && V.sync_state === "synced"
      )) || [];
    }), g = F(() => {
      var $, k, R;
      return ((R = (k = ($ = c.status) == null ? void 0 : $.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : R.filter(
        (V) => V.status === "broken" && V.sync_state !== "synced"
      )) || [];
    }), h = F(() => {
      var $, k, R;
      return ((R = (k = ($ = c.status) == null ? void 0 : $.workflows) == null ? void 0 : k.synced) == null ? void 0 : R.filter((V) => {
        var S, T, P;
        const D = (P = (T = (S = c.status) == null ? void 0 : S.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : P.find((N) => N.name === V);
        return !D || D.status !== "broken";
      })) || [];
    }), u = F(() => {
      var $, k, R, V, D;
      return ($ = c.status) != null && $.workflows ? (((k = c.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((V = c.status.workflows.deleted) == null ? void 0 : V.length) ?? 0) > 0 || (((D = c.status.workflows.synced) == null ? void 0 : D.length) ?? 0) > 0 : !1;
    }), f = F(() => {
      var k, R, V;
      const $ = (k = c.status) == null ? void 0 : k.git_changes;
      return $ ? (((R = $.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((V = $.nodes_removed) == null ? void 0 : V.length) ?? 0) > 0 || $.workflow_changes || $.has_other_changes : !1;
    }), v = F(() => {
      var $, k, R, V, D, S;
      return !u.value && !f.value && ((k = ($ = c.status) == null ? void 0 : $.comparison) == null ? void 0 : k.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((S = (D = (V = c.status) == null ? void 0 : V.comparison) == null ? void 0 : D.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), b = F(() => {
      var k, R;
      const $ = (R = (k = c.status) == null ? void 0 : k.git_changes) == null ? void 0 : R.workflow_changes;
      return $ ? typeof $ == "number" ? $ : Object.keys($).length : 0;
    });
    function z($) {
      return typeof $ == "string" ? $ : $.name;
    }
    function y($) {
      return typeof $ == "object" && $.is_development === !0;
    }
    return ($, k) => {
      var R, V, D, S, T, P, N, L, w, E, C, M, B, K, A, I, J, oe, Ue, Oe, ie, _e;
      return o(), p(Re, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[4] || (k[4] = (X) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[3] || (k[3] = ve(() => {
            }, ["stop"]))
          }, [
            e("div", Xo, [
              k[5] || (k[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (X) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Qo, [
              e("div", Zo, [
                d(pe, { level: "4" }, {
                  default: a(() => [...k[6] || (k[6] = [
                    m("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                d(ee, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (o(), n("div", es, [
                d(pe, { level: "4" }, {
                  default: a(() => [...k[7] || (k[7] = [
                    m("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                i.value.length ? (o(), n("div", ts, [
                  e("div", os, [
                    k[8] || (k[8] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ss, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", as, [
                    (o(!0), n(W, null, q(i.value, (X) => (o(), n("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", ns, l(X.name), 1),
                      e("span", ls, l(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                g.value.length ? (o(), n("div", is, [
                  e("div", rs, [
                    k[9] || (k[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", cs, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", ds, [
                    (o(!0), n(W, null, q(g.value, (X) => (o(), n("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", us, l(X.name), 1),
                      e("span", ms, l(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (V = (R = t.status.workflows) == null ? void 0 : R.new) != null && V.length ? (o(), n("div", vs, [
                  e("div", fs, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", gs, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", hs, [
                    (o(!0), n(W, null, q(t.status.workflows.new, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", ps, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = (D = t.status.workflows) == null ? void 0 : D.modified) != null && S.length ? (o(), n("div", ys, [
                  e("div", ws, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", bs, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", ks, [
                    (o(!0), n(W, null, q(t.status.workflows.modified, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", $s, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (P = (T = t.status.workflows) == null ? void 0 : T.deleted) != null && P.length ? (o(), n("div", _s, [
                  e("div", Cs, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", xs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), n(W, null, q(t.status.workflows.deleted, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Es, l(X), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                h.value.length ? (o(), n("div", Is, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[1] || (k[1] = (X) => s.value = !s.value)
                  }, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", zs, "SYNCED (" + l(h.value.length) + ")", 1),
                    e("span", Ls, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Ms, [
                    (o(!0), n(W, null, q(h.value, (X) => (o(), n("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Ts, l(X), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              f.value ? (o(), n("div", Ns, [
                d(pe, { level: "4" }, {
                  default: a(() => [...k[14] || (k[14] = [
                    m("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (L = (N = t.status.git_changes) == null ? void 0 : N.nodes_added) != null && L.length ? (o(), n("div", Ds, [
                  e("div", Bs, [
                    k[15] || (k[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Rs, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Us, [
                    (o(!0), n(W, null, q(t.status.git_changes.nodes_added, (X) => (o(), n("div", {
                      key: z(X),
                      class: "change-item"
                    }, [
                      e("span", Os, l(z(X)), 1),
                      y(X) ? (o(), n("span", Vs, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (E = (w = t.status.git_changes) == null ? void 0 : w.nodes_removed) != null && E.length ? (o(), n("div", Ps, [
                  e("div", As, [
                    k[16] || (k[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ws, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), n(W, null, q(t.status.git_changes.nodes_removed, (X) => (o(), n("div", {
                      key: z(X),
                      class: "change-item"
                    }, [
                      e("span", Hs, l(z(X)), 1),
                      y(X) ? (o(), n("span", Gs, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = t.status.git_changes) != null && C.workflow_changes ? (o(), n("div", js, [
                  k[17] || (k[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ks, [
                    e("div", qs, [
                      e("span", Ys, l(b.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), n("div", Js, [...k[18] || (k[18] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : r("", !0)
              ])) : r("", !0),
              (B = t.status.comparison) != null && B.is_synced ? r("", !0) : (o(), n("div", Xs, [
                d(pe, { level: "4" }, {
                  default: a(() => [...k[19] || (k[19] = [
                    m("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                k[20] || (k[20] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (A = (K = t.status.comparison) == null ? void 0 : K.missing_nodes) != null && A.length ? (o(), n("div", Qs, [
                  d(ee, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Zs, [
                    (o(!0), n(W, null, q(t.status.comparison.missing_nodes.slice(0, 10), (X) => (o(), n("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + l(X), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", ea, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (J = (I = t.status.comparison) == null ? void 0 : I.extra_nodes) != null && J.length ? (o(), n("div", ta, [
                  d(ee, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", oa, [
                    (o(!0), n(W, null, q(t.status.comparison.extra_nodes.slice(0, 10), (X) => (o(), n("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + l(X), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", sa, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (Ue = (oe = t.status.comparison) == null ? void 0 : oe.version_mismatches) != null && Ue.length ? (o(), n("div", aa, [
                  d(ee, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : r("", !0),
                (Oe = t.status.comparison) != null && Oe.packages_in_sync ? r("", !0) : (o(), n("div", na, [
                  d(ee, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (_e = (ie = t.status.comparison) == null ? void 0 : ie.disabled_nodes) != null && _e.length ? (o(), n("div", la, [
                d(pe, { level: "4" }, {
                  default: a(() => [...k[21] || (k[21] = [
                    m("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ia, [
                  k[22] || (k[22] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ra, [
                  (o(!0), n(W, null, q(t.status.comparison.disabled_nodes.slice(0, 10), (X) => (o(), n("div", {
                    key: X,
                    class: "drift-list-item"
                  }, " • " + l(X), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", ca, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", da, [
                d(pe, { level: "4" }, {
                  default: a(() => [...k[23] || (k[23] = [
                    m("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ua, [
                  k[24] || (k[24] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[25] || (k[25] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              v.value ? (o(), n("div", ma, [...k[26] || (k[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", va, [
              d(U, {
                variant: "secondary",
                onClick: k[2] || (k[2] = (X) => $.$emit("close"))
              }, {
                default: a(() => [...k[27] || (k[27] = [
                  m(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), gt = /* @__PURE__ */ j(fa, [["__scopeId", "data-v-c2264f66"]]), ga = { class: "health-section-header" }, ha = { style: { "margin-top": "var(--cg-space-1)" } }, pa = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, ya = /* @__PURE__ */ G({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: c }) {
    const s = t, i = x(!1), g = x(!1);
    ue(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", gt);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function u() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const f = F(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), v = F(() => {
      const S = s.status.git_changes;
      return S.nodes_added.length > 0 || S.nodes_removed.length > 0 || S.workflow_changes || S.has_other_changes;
    }), b = F(() => f.value || v.value), z = F(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), y = F(() => s.status.git_changes.has_other_changes), $ = F(() => {
      var S;
      return ((S = s.status.workflows.analyzed) == null ? void 0 : S.filter(
        (T) => T.status === "broken" && T.sync_state === "synced"
      )) || [];
    }), k = F(() => {
      var S;
      return ((S = s.status.workflows.analyzed) == null ? void 0 : S.filter(
        (T) => T.status === "broken" && T.sync_state !== "synced"
      )) || [];
    }), R = F(() => $.value.length > 0 || k.value.length > 0), V = F(() => R.value || s.status.missing_models_count > 0 || b.value || !s.status.comparison.is_synced), D = F(() => {
      const S = [];
      return s.status.workflows.new.length > 0 && S.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && S.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && S.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && S.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && S.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${S.length > 0 ? S.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (S, T) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[0] || (T[0] = (P) => g.value = !0),
            onMouseleave: T[1] || (T[1] = (P) => g.value = !1)
          }, [
            e("div", ga, [
              d(pe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...T[14] || (T[14] = [
                  m(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              d(Pt, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), p(U, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: h
                  }, {
                    default: a(() => [...T[15] || (T[15] = [
                      m(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            d(ho, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), p(Ce, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (o(), p(Ce, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (o(), p(Ce, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                d(Ce, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: f.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), p(Ce, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), p(Ce, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (o(), p(Ce, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                y.value ? (o(), p(Ce, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                v.value ? r("", !0) : (o(), p(Ce, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", ha, [
            d(jo, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[2] || (T[2] = (P) => S.$emit("switch-branch"))
                }, {
                  default: a(() => [...T[16] || (T[16] = [
                    m(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), p(Be, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (P) => S.$emit("create-branch"))
              }, {
                default: a(() => [...T[17] || (T[17] = [
                  m(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          V.value ? (o(), n("div", pa, [
            d(pe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...T[18] || (T[18] = [
                m(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (o(), p(Be, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} committed workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: $.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (P) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[19] || (T[19] = [
                    m(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (P) => S.$emit("resolve-models"))
                }, {
                  default: a(() => [...T[20] || (T[20] = [
                    m(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            k.value.length > 0 ? (o(), p(Be, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: k.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (P) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[21] || (T[21] = [
                    m(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (P) => S.$emit("resolve-models"))
                }, {
                  default: a(() => [...T[22] || (T[22] = [
                    m(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            t.status.missing_models_count > 0 && !R.value ? (o(), p(Be, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (P) => S.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[23] || (T[23] = [
                    m(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (P) => S.$emit("resolve-models"))
                }, {
                  default: a(() => [...T[24] || (T[24] = [
                    m(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : r("", !0),
            b.value ? (o(), p(Be, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: D.value
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u
                }, {
                  default: a(() => [...T[25] || (T[25] = [
                    m(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[10] || (T[10] = (P) => S.$emit("commit-changes"))
                }, {
                  default: a(() => [...T[26] || (T[26] = [
                    m(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : r("", !0),
            t.status.comparison.is_synced ? r("", !0) : (o(), p(Be, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[11] || (T[11] = (P) => S.$emit("view-debug"))
                }, {
                  default: a(() => [...T[27] || (T[27] = [
                    m(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[12] || (T[12] = (P) => S.$emit("sync-environment"))
                }, {
                  default: a(() => [...T[28] || (T[28] = [
                    m(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : r("", !0),
          !V.value && !v.value ? (o(), p(ke, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : r("", !0)
        ]),
        _: 1
      }),
      d(gt, {
        show: i.value,
        status: t.status,
        onClose: T[13] || (T[13] = (P) => i.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), wa = /* @__PURE__ */ j(ya, [["__scopeId", "data-v-d47b8cde"]]), ba = ["type", "value", "placeholder", "disabled"], ka = /* @__PURE__ */ G({
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
  setup(t, { expose: c, emit: s }) {
    const i = t, g = s, h = x(null);
    function u(f) {
      const v = f.target.value;
      g("update:modelValue", v);
    }
    return ue(() => {
      i.autoFocus && h.value && h.value.focus();
    }), c({
      focus: () => {
        var f;
        return (f = h.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = h.value) == null ? void 0 : f.blur();
      }
    }), (f, v) => (o(), n("input", {
      ref_key: "inputRef",
      ref: h,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: Y(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        v[0] || (v[0] = Se((b) => f.$emit("enter"), ["enter"])),
        v[1] || (v[1] = Se((b) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: v[2] || (v[2] = (b) => f.$emit("focus")),
      onBlur: v[3] || (v[3] = (b) => f.$emit("blur"))
    }, null, 42, ba));
  }
}), Ke = /* @__PURE__ */ j(ka, [["__scopeId", "data-v-0380d08f"]]), $a = { class: "branch-create-form" }, _a = { class: "form-actions" }, Ca = /* @__PURE__ */ G({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const s = c, i = x(""), g = F(() => {
      const f = i.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function h() {
      g.value && (s("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", s("cancel");
    }
    return (f, v) => (o(), n("div", $a, [
      d(Ke, {
        modelValue: i.value,
        "onUpdate:modelValue": v[0] || (v[0] = (b) => i.value = b),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", _a, [
        d(U, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: h
        }, {
          default: a(() => [...v[1] || (v[1] = [
            m(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        d(U, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: a(() => [...v[2] || (v[2] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), xa = /* @__PURE__ */ j(Ca, [["__scopeId", "data-v-7c500394"]]), Sa = { class: "branch-list-item__indicator" }, Ea = { class: "branch-list-item__name" }, Ia = {
  key: 0,
  class: "branch-list-item__actions"
}, za = {
  key: 0,
  class: "branch-list-item__current-label"
}, La = /* @__PURE__ */ G({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Sa, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Ea, l(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), n("div", Ia, [
        te(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", za, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ j(La, [["__scopeId", "data-v-c6581a24"]]), Ta = {
  key: 2,
  class: "branch-list"
}, Na = /* @__PURE__ */ G({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const s = c, i = x(!1);
    function g(u) {
      s("create", u), h();
    }
    function h() {
      i.value = !1;
    }
    return (u, f) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "BRANCHES" }, {
          actions: a(() => [
            d(U, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (v) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...f[1] || (f[1] = [
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
        i.value ? (o(), p(xa, {
          key: 0,
          onCreate: g,
          onCancel: h
        })) : r("", !0),
        t.branches.length === 0 ? (o(), p(ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Ta, [
          (o(!0), n(W, null, q(t.branches, (v) => (o(), p(Ma, {
            key: v.name,
            "branch-name": v.name,
            "is-current": v.is_current
          }, {
            actions: a(() => [
              v.is_current ? r("", !0) : (o(), p(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (b) => u.$emit("switch", v.name)
              }, {
                default: a(() => [...f[2] || (f[2] = [
                  m(" Switch ", -1)
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
}), Da = /* @__PURE__ */ j(Na, [["__scopeId", "data-v-763d6ec4"]]), Ba = { class: "commit-list" }, Ra = /* @__PURE__ */ G({
  __name: "CommitList",
  setup(t) {
    return (c, s) => (o(), n("div", Ba, [
      te(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ua = /* @__PURE__ */ j(Ra, [["__scopeId", "data-v-8c5ee761"]]), Oa = { class: "commit-hash" }, Va = /* @__PURE__ */ G({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, s = F(() => c.hash.slice(0, c.length));
    return (i, g) => (o(), n("span", Oa, l(s.value), 1));
  }
}), _t = /* @__PURE__ */ j(Va, [["__scopeId", "data-v-7c333cc6"]]), Pa = { class: "commit-message" }, Aa = { class: "commit-date" }, Wa = /* @__PURE__ */ G({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = c;
    function g() {
      s.clickable && i("click");
    }
    return (h, u) => (o(), n("div", {
      class: Y(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      d(_t, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Pa, l(t.message), 1),
      e("span", Aa, l(t.relativeDate), 1),
      h.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ve(() => {
        }, ["stop"]))
      }, [
        te(h.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Fa = /* @__PURE__ */ j(Wa, [["__scopeId", "data-v-dd7c621b"]]), Ha = /* @__PURE__ */ G({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, s) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), p(ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), p(Ua, { key: 1 }, {
          default: a(() => [
            (o(!0), n(W, null, q(t.commits, (i) => (o(), p(Fa, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (g) => c.$emit("select", i)
            }, {
              actions: a(() => [
                d(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => c.$emit("checkout", i),
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
}), Ga = /* @__PURE__ */ j(Ha, [["__scopeId", "data-v-981c3c64"]]);
[
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
];
const ja = [
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
];
[
  ...ja,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() - 6e4).toISOString(), new Date(Date.now() - 12e4).toISOString(), new Date(Date.now() - 18e4).toISOString();
function me() {
  const t = x(!1), c = x(null);
  async function s(H, Q) {
    var Fe;
    if (!((Fe = window.app) != null && Fe.api))
      throw new Error("ComfyUI API not available");
    const ae = await window.app.api.fetchApi(H, Q);
    if (!ae.ok) {
      const Ye = await ae.json().catch(() => ({}));
      throw new Error(Ye.error || Ye.message || `Request failed: ${ae.status}`);
    }
    return ae.json();
  }
  async function i() {
    return s("/v2/comfygit/status");
  }
  async function g(H, Q = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: Q })
    });
  }
  async function h(H = 10, Q = 0) {
    return s(`/v2/comfygit/log?limit=${H}&offset=${Q}`);
  }
  async function u(H) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function f() {
    return s("/v2/comfygit/branches");
  }
  async function v(H) {
    return s(`/v2/comfygit/commit/${H}`);
  }
  async function b(H, Q = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: Q })
    });
  }
  async function z(H, Q = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: Q })
    });
  }
  async function y(H, Q = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: Q })
    });
  }
  async function $() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await i();
        return [{
          name: H.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + H.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: H.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: H.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function k(H) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function R() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function V(H, Q, ae) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, pytorch_backend: Q, clone_from: ae })
    });
  }
  async function D(H) {
    return s(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function S() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const H = await i(), Q = [];
      return H.workflows.new.forEach((ae) => {
        Q.push({ name: ae, status: "new", missing_nodes: 0, missing_models: 0, path: ae });
      }), H.workflows.modified.forEach((ae) => {
        Q.push({ name: ae, status: "modified", missing_nodes: 0, missing_models: 0, path: ae });
      }), H.workflows.synced.forEach((ae) => {
        Q.push({ name: ae, status: "synced", missing_nodes: 0, missing_models: 0, path: ae });
      }), Q;
    }
  }
  async function T(H) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function P(H) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function N(H, Q, ae) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Q, install_models: ae })
    });
  }
  async function L(H, Q, ae) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Q, importance: ae })
    });
  }
  async function w() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function E() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function C(H, Q) {
    return s(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Q })
    });
  }
  async function M(H) {
    return s(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function B(H) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function K() {
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
  async function A(H) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function I(H, Q) {
    try {
      const ae = new URLSearchParams();
      return H && ae.append("level", H), Q && ae.append("lines", Q.toString()), s(`/v2/comfygit/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function J(H, Q) {
    try {
      const ae = new URLSearchParams();
      return H && ae.append("level", H), Q && ae.append("lines", Q.toString()), s(`/v2/workspace/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function oe() {
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
  async function Ue(H) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function Oe(H) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function ie(H) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function _e() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function X(H, Q) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: Q })
    });
  }
  async function Le(H) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function et(H, Q, ae) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Q, push_url: ae })
    });
  }
  async function ne(H) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function $e(H) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function tt(H = "skip", Q = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: Q
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: g,
    getHistory: h,
    exportEnv: u,
    // Git Operations
    getBranches: f,
    getCommitDetail: v,
    checkout: b,
    createBranch: z,
    switchBranch: y,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: k,
    getSwitchProgress: R,
    createEnvironment: V,
    deleteEnvironment: D,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: T,
    resolveWorkflow: P,
    installWorkflowDeps: N,
    setModelImportance: L,
    // Model Management
    getEnvironmentModels: w,
    getWorkspaceModels: E,
    updateModelSource: C,
    deleteModel: M,
    downloadModel: B,
    // Settings
    getConfig: K,
    updateConfig: A,
    // Debug/Logs
    getEnvironmentLogs: I,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: oe,
    installNode: Ue,
    updateNode: Oe,
    uninstallNode: ie,
    // Git Remotes
    getRemotes: _e,
    addRemote: X,
    removeRemote: Le,
    updateRemoteUrl: et,
    fetchRemote: ne,
    getRemoteSyncStatus: $e,
    // Environment Sync
    syncEnvironmentManually: tt
  };
}
const Ka = { class: "base-modal-header" }, qa = {
  key: 0,
  class: "base-modal-title"
}, Ya = { class: "base-modal-body" }, Ja = {
  key: 0,
  class: "base-modal-loading"
}, Xa = {
  key: 1,
  class: "base-modal-error"
}, Qa = {
  key: 0,
  class: "base-modal-footer"
}, Za = /* @__PURE__ */ G({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const s = t, i = c;
    function g() {
      s.closeOnOverlayClick && i("close");
    }
    function h(u) {
      u.key === "Escape" && i("close");
    }
    return ue(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), At(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (u, f) => (o(), p(Re, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: Y(["base-modal-content", t.size]),
          onClick: f[1] || (f[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Ka, [
            te(u.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", qa, l(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (v) => u.$emit("close"))
            }, [...f[2] || (f[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : r("", !0)
          ]),
          e("div", Ya, [
            t.loading ? (o(), n("div", Ja, "Loading...")) : t.error ? (o(), n("div", Xa, l(t.error), 1)) : te(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (o(), n("div", Qa, [
            te(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), Ze = /* @__PURE__ */ j(Za, [["__scopeId", "data-v-700d367b"]]), en = ["type", "disabled"], tn = {
  key: 0,
  class: "spinner"
}, on = /* @__PURE__ */ G({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: Y(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", tn)) : r("", !0),
      te(c.$slots, "default", {}, void 0, !0)
    ], 10, en));
  }
}), ce = /* @__PURE__ */ j(on, [["__scopeId", "data-v-f3452606"]]), sn = {
  key: 0,
  class: "base-title-count"
}, an = /* @__PURE__ */ G({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, s) => (o(), p(dt(`h${t.level}`), {
      class: Y(["base-title", t.variant])
    }, {
      default: a(() => [
        te(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", sn, "(" + l(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ j(an, [["__scopeId", "data-v-5a01561d"]]), nn = ["value", "disabled"], ln = {
  key: 0,
  value: "",
  disabled: ""
}, rn = ["value"], cn = {
  key: 0,
  class: "base-select-error"
}, dn = /* @__PURE__ */ G({
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
    function c(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, g) => (o(), n("div", {
      class: Y(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: Y(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (h) => i.$emit("update:modelValue", h.target.value))
      }, [
        t.placeholder ? (o(), n("option", ln, l(t.placeholder), 1)) : r("", !0),
        (o(!0), n(W, null, q(t.options, (h) => (o(), n("option", {
          key: c(h),
          value: c(h)
        }, l(s(h)), 9, rn))), 128))
      ], 42, nn),
      t.error ? (o(), n("span", cn, l(t.error), 1)) : r("", !0)
    ], 2));
  }
}), un = /* @__PURE__ */ j(dn, [["__scopeId", "data-v-7436d745"]]), mn = { class: "popover-header" }, vn = { class: "popover-title" }, fn = { class: "popover-content" }, gn = {
  key: 0,
  class: "popover-actions"
}, hn = /* @__PURE__ */ G({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, s) => (o(), p(Re, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", mn, [
            e("h4", vn, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", fn, [
            te(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", gn, [
            te(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ j(hn, [["__scopeId", "data-v-42815ace"]]), pn = { class: "detail-section" }, yn = {
  key: 0,
  class: "empty-message"
}, wn = { class: "model-header" }, bn = { class: "model-name" }, kn = { class: "model-details" }, $n = { class: "model-row" }, _n = { class: "model-row" }, Cn = { class: "label" }, xn = {
  key: 0,
  class: "model-row model-row-nodes"
}, Sn = { class: "node-list" }, En = ["onClick"], In = {
  key: 1,
  class: "model-row"
}, zn = { class: "value" }, Ln = {
  key: 0,
  class: "model-actions"
}, Mn = { class: "detail-section" }, Tn = {
  key: 0,
  class: "empty-message"
}, Nn = { class: "node-name" }, Dn = {
  key: 0,
  class: "node-version"
}, Bn = /* @__PURE__ */ G({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: c }) {
    const s = t, i = c, { getWorkflowDetails: g, setModelImportance: h, installWorkflowDeps: u } = me(), f = x(null), v = x(!1), b = x(null), z = x(!1), y = x({}), $ = x({}), k = x(!1), R = x(/* @__PURE__ */ new Set()), V = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function D(M) {
      switch (M) {
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
    function S(M) {
      switch (M) {
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
    function T(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const B = M.hash || M.filename;
      return R.value.has(B) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function P(M) {
      return R.value.has(M);
    }
    function N(M) {
      R.value.has(M) ? R.value.delete(M) : R.value.add(M), R.value = new Set(R.value);
    }
    async function L() {
      v.value = !0, b.value = null;
      try {
        f.value = await g(s.workflowName);
      } catch (M) {
        b.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function w(M, B) {
      y.value[M] = B, z.value = !0;
    }
    async function E() {
      if (!z.value) {
        i("close");
        return;
      }
      v.value = !0, b.value = null;
      try {
        for (const [M, B] of Object.entries(y.value))
          await h(s.workflowName, M, B);
        i("close");
      } catch (M) {
        b.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    async function C(M) {
      $.value[M] = !0, b.value = null;
      try {
        await u(s.workflowName, !0, !1), await L();
      } catch (B) {
        b.value = B instanceof Error ? B.message : "Failed to install node";
      } finally {
        $.value[M] = !1;
      }
    }
    return ue(L), (M, B) => (o(), n(W, null, [
      d(Ze, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: v.value,
        error: b.value || void 0,
        onClose: B[5] || (B[5] = (K) => i("close"))
      }, {
        body: a(() => [
          f.value ? (o(), n(W, { key: 0 }, [
            e("section", pn, [
              d(Te, { variant: "section" }, {
                default: a(() => [
                  m("MODELS USED (" + l(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), n("div", yn, " No models used in this workflow ")) : r("", !0),
              (o(!0), n(W, null, q(f.value.models, (K) => (o(), n("div", {
                key: K.hash,
                class: "model-card"
              }, [
                e("div", wn, [
                  B[7] || (B[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", bn, l(K.filename), 1)
                ]),
                e("div", kn, [
                  e("div", $n, [
                    B[8] || (B[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: Y(["value", D(K.status)])
                    }, l(S(K.status)), 3)
                  ]),
                  e("div", _n, [
                    e("span", Cn, [
                      B[9] || (B[9] = m(" Importance: ", -1)),
                      d($t, {
                        size: 14,
                        title: "About importance levels",
                        onClick: B[0] || (B[0] = (A) => k.value = !0)
                      })
                    ]),
                    d(un, {
                      "model-value": y.value[K.hash] || K.importance,
                      options: V,
                      "onUpdate:modelValue": (A) => w(K.hash, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  K.loaded_by && K.loaded_by.length > 0 ? (o(), n("div", xn, [
                    B[10] || (B[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Sn, [
                      (o(!0), n(W, null, q(T(K), (A, I) => (o(), n("div", {
                        key: `${A.node_id}-${I}`,
                        class: "node-reference"
                      }, l(A.node_type) + " (Node #" + l(A.node_id) + ") ", 1))), 128)),
                      K.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => N(K.hash || K.filename)
                      }, l(P(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, En)) : r("", !0)
                    ])
                  ])) : r("", !0),
                  K.size_mb ? (o(), n("div", In, [
                    B[11] || (B[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", zn, l(K.size_mb) + " MB", 1)
                  ])) : r("", !0)
                ]),
                K.status !== "available" ? (o(), n("div", Ln, [
                  K.status === "downloadable" ? (o(), p(ce, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: B[1] || (B[1] = (A) => i("resolve"))
                  }, {
                    default: a(() => [...B[12] || (B[12] = [
                      m(" Download ", -1)
                    ])]),
                    _: 1
                  })) : K.status === "path_mismatch" ? (o(), p(ce, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[2] || (B[2] = (A) => i("resolve"))
                  }, {
                    default: a(() => [...B[13] || (B[13] = [
                      m(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), p(ce, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[3] || (B[3] = (A) => i("resolve"))
                  }, {
                    default: a(() => [...B[14] || (B[14] = [
                      m(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : r("", !0)
              ]))), 128))
            ]),
            e("section", Mn, [
              d(Te, { variant: "section" }, {
                default: a(() => [
                  m("NODES USED (" + l(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (o(), n("div", Tn, " No custom nodes used in this workflow ")) : r("", !0),
              (o(!0), n(W, null, q(f.value.nodes, (K) => (o(), n("div", {
                key: K.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Y(["node-status", K.status === "installed" ? "installed" : "missing"])
                }, l(K.status === "installed" ? "✓" : "✕"), 3),
                e("span", Nn, l(K.name), 1),
                K.version ? (o(), n("span", Dn, "v" + l(K.version), 1)) : r("", !0),
                K.status === "missing" ? (o(), p(ce, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: $.value[K.name],
                  onClick: (A) => C(K.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...B[15] || (B[15] = [
                    m(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: a(() => [
          d(ce, {
            variant: "secondary",
            onClick: B[4] || (B[4] = (K) => i("close"))
          }, {
            default: a(() => [...B[16] || (B[16] = [
              m(" Close ", -1)
            ])]),
            _: 1
          }),
          z.value ? (o(), p(ce, {
            key: 0,
            variant: "primary",
            onClick: E
          }, {
            default: a(() => [...B[17] || (B[17] = [
              m(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      d(Ee, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (K) => k.value = !1)
      }, {
        content: a(() => [...B[18] || (B[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              m(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              m(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              m(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rn = /* @__PURE__ */ j(Bn, [["__scopeId", "data-v-1325d542"]]), Un = {
  key: 0,
  class: "resolve-section"
}, On = { class: "resolve-card success-card" }, Vn = { class: "items-list" }, Pn = { class: "item-info" }, An = { class: "item-name" }, Wn = {
  key: 0,
  class: "item-meta"
}, Fn = { class: "match-type" }, Hn = { class: "source" }, Gn = {
  key: 1,
  class: "resolve-section"
}, jn = { class: "resolve-card warning-card" }, Kn = { class: "items-list" }, qn = { class: "item-info" }, Yn = { class: "item-name" }, Jn = { class: "item-meta" }, Xn = { key: 0 }, Qn = { key: 1 }, Zn = {
  key: 0,
  class: "item-warning"
}, el = {
  key: 0,
  class: "item-action"
}, tl = ["onClick"], ol = {
  key: 2,
  class: "resolve-section"
}, sl = { class: "info-text" }, al = { class: "actions-summary" }, nl = { class: "summary-list" }, ll = { key: 0 }, il = { key: 1 }, rl = { key: 2 }, cl = {
  key: 0,
  class: "estimated-size"
}, dl = /* @__PURE__ */ G({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: c }) {
    const s = t, i = c, { resolveWorkflow: g, installWorkflowDeps: h } = me(), u = x(null), f = x(!1), v = x(!1), b = x(null), z = F(() => {
      var L;
      return u.value ? ((L = u.value.download_results) == null ? void 0 : L.every((w) => w.can_download)) ?? !1 : !1;
    });
    async function y() {
      f.value = !0, b.value = null;
      try {
        u.value = await g(s.workflowName);
      } catch (L) {
        b.value = L instanceof Error ? L.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function $(L) {
      return !L.possible_matches || L.possible_matches.length === 0 ? null : L.possible_matches.reduce(
        (w, E) => E.match_confidence > w.match_confidence ? E : w
      );
    }
    function k(L) {
      return L >= 0.9 ? "high" : L >= 0.7 ? "medium" : "low";
    }
    function R(L) {
      const w = $(L);
      return w ? w.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function V(L) {
      var w, E;
      return (E = (w = u.value) == null ? void 0 : w.download_results) == null ? void 0 : E.find((C) => C.model === L);
    }
    function D(L) {
      const w = V(L);
      return (w == null ? void 0 : w.can_download) ?? !1;
    }
    function S(L) {
      const w = V(L);
      return (w == null ? void 0 : w.source_url) || null;
    }
    function T(L) {
      window.open(L, "_blank");
    }
    async function P() {
      if (!(!u.value || v.value)) {
        v.value = !0, b.value = null;
        try {
          await h(
            s.workflowName,
            u.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch (L) {
          b.value = L instanceof Error ? L.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    async function N() {
      if (!(!u.value || v.value)) {
        v.value = !0, b.value = null;
        try {
          await h(
            s.workflowName,
            u.value.nodes_to_install,
            u.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch (L) {
          b.value = L instanceof Error ? L.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    return ue(y), (L, w) => (o(), p(Ze, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: b.value || void 0,
      onClose: w[1] || (w[1] = (E) => i("close"))
    }, {
      body: a(() => [
        u.value ? (o(), n(W, { key: 0 }, [
          w[5] || (w[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          u.value.nodes_unresolved.length > 0 ? (o(), n("section", Un, [
            d(Te, { variant: "section" }, {
              default: a(() => [
                m("NODES (" + l(u.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", On, [
              w[2] || (w[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Vn, [
                (o(!0), n(W, null, q(u.value.nodes_unresolved, (E) => {
                  var C;
                  return o(), n("div", {
                    key: E.node_type,
                    class: "item"
                  }, [
                    e("div", Pn, [
                      e("div", An, l(((C = $(E)) == null ? void 0 : C.package_id) || E.node_type), 1),
                      $(E) ? (o(), n("div", Wn, [
                        e("span", {
                          class: Y(["confidence-badge", k($(E).match_confidence)])
                        }, l(Math.round($(E).match_confidence * 100)) + "% match ", 3),
                        e("span", Fn, l($(E).match_type), 1),
                        e("span", Hn, "Source: " + l(R(E)), 1)
                      ])) : r("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : r("", !0),
          u.value.models_unresolved.length > 0 ? (o(), n("section", Gn, [
            d(Te, { variant: "section" }, {
              default: a(() => [
                m("MODELS (" + l(u.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", jn, [
              w[3] || (w[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Kn, [
                (o(!0), n(W, null, q(u.value.models_unresolved, (E) => (o(), n("div", {
                  key: E.filename,
                  class: "item"
                }, [
                  e("div", qn, [
                    e("div", Yn, l(E.filename), 1),
                    e("div", Jn, [
                      E.expected_category ? (o(), n("span", Xn, "Type: " + l(E.expected_category), 1)) : r("", !0),
                      V(E.filename) ? (o(), n("span", Qn, " Size: ~" + l(V(E.filename).estimated_size_mb) + " MB ", 1)) : r("", !0)
                    ]),
                    D(E.filename) ? r("", !0) : (o(), n("div", Zn, " No auto-download source configured "))
                  ]),
                  S(E.filename) ? (o(), n("div", el, [
                    e("button", {
                      class: "link-btn",
                      onClick: (C) => T(S(E.filename))
                    }, " Open Source ↗ ", 8, tl)
                  ])) : r("", !0)
                ]))), 128))
              ])
            ])
          ])) : r("", !0),
          u.value.nodes_resolved.length > 0 || u.value.models_resolved.length > 0 ? (o(), n("section", ol, [
            d(Te, { variant: "section" }, {
              default: a(() => [
                m(" ALREADY AVAILABLE (" + l(u.value.nodes_resolved.length + u.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", sl, l(u.value.nodes_resolved.length) + " nodes and " + l(u.value.models_resolved.length) + " models are already installed ", 1)
          ])) : r("", !0),
          e("div", al, [
            w[4] || (w[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", nl, [
              u.value.nodes_to_install.length ? (o(), n("li", ll, " Install " + l(u.value.nodes_to_install.length) + " nodes (~" + l(u.value.estimated_time_seconds) + "s) ", 1)) : r("", !0),
              u.value.nodes_to_install.length ? (o(), n("li", il, " Restart ComfyUI to load new nodes ")) : r("", !0),
              u.value.models_to_download.length ? (o(), n("li", rl, " You'll still need to download " + l(u.value.models_to_download.length) + " model(s) manually ", 1)) : r("", !0)
            ]),
            u.value.estimated_size_mb ? (o(), n("div", cl, " Estimated download: " + l(u.value.estimated_size_mb) + " MB ", 1)) : r("", !0)
          ])
        ], 64)) : r("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: w[0] || (w[0] = (E) => i("close"))
        }, {
          default: a(() => [...w[6] || (w[6] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u.value && u.value.nodes_to_install.length && u.value.models_to_download.length ? (o(), p(ce, {
          key: 0,
          variant: "secondary",
          disabled: v.value,
          loading: v.value,
          onClick: P
        }, {
          default: a(() => [...w[7] || (w[7] = [
            m(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0),
        u.value && (u.value.nodes_to_install.length || u.value.models_to_download.length) ? (o(), p(ce, {
          key: 1,
          variant: "primary",
          disabled: v.value || u.value.models_to_download.length > 0 && !z.value,
          loading: v.value,
          onClick: N
        }, {
          default: a(() => [...w[8] || (w[8] = [
            m(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ul = /* @__PURE__ */ j(dl, [["__scopeId", "data-v-d68efb14"]]), ml = { class: "search-input-wrapper" }, vl = ["value", "placeholder"], fl = /* @__PURE__ */ G({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: c }) {
    const s = t, i = c, g = x(null);
    let h;
    function u(v) {
      const b = v.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        i("update:modelValue", b);
      }, s.debounce)) : i("update:modelValue", b);
    }
    function f() {
      var v;
      i("update:modelValue", ""), i("clear"), (v = g.value) == null || v.focus();
    }
    return ue(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (v, b) => (o(), n("div", ml, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Se(f, ["escape"])
      }, null, 40, vl),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), gl = /* @__PURE__ */ j(fl, [["__scopeId", "data-v-266f857a"]]), hl = { class: "search-bar" }, pl = /* @__PURE__ */ G({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, s) => (o(), n("div", hl, [
      d(gl, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ae = /* @__PURE__ */ j(pl, [["__scopeId", "data-v-3d51bbfd"]]), yl = { class: "section-group" }, wl = {
  key: 0,
  class: "section-content"
}, bl = /* @__PURE__ */ G({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const s = t, i = c, g = x(s.initiallyExpanded);
    function h() {
      s.collapsible && (g.value = !g.value, i("toggle", g.value));
    }
    return (u, f) => (o(), n("section", yl, [
      d(pe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: h
      }, {
        default: a(() => [
          m(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), n("div", wl, [
        te(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), re = /* @__PURE__ */ j(bl, [["__scopeId", "data-v-c48e33ed"]]), kl = { class: "item-header" }, $l = {
  key: 0,
  class: "item-icon"
}, _l = { class: "item-info" }, Cl = {
  key: 0,
  class: "item-title"
}, xl = {
  key: 1,
  class: "item-subtitle"
}, Sl = {
  key: 0,
  class: "item-details"
}, El = {
  key: 1,
  class: "item-actions"
}, Il = /* @__PURE__ */ G({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = F(() => s.status ? `status-${s.status}` : "");
    return (g, h) => (o(), n("div", {
      class: Y(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: h[0] || (h[0] = (u) => t.clickable && g.$emit("click"))
    }, [
      e("div", kl, [
        g.$slots.icon ? (o(), n("span", $l, [
          te(g.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", _l, [
          g.$slots.title ? (o(), n("div", Cl, [
            te(g.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          g.$slots.subtitle ? (o(), n("div", xl, [
            te(g.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", Sl, [
        te(g.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      g.$slots.actions ? (o(), n("div", El, [
        te(g.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ j(Il, [["__scopeId", "data-v-cc435e0e"]]), zl = { class: "loading-state" }, Ll = { class: "loading-message" }, Ml = /* @__PURE__ */ G({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, s) => (o(), n("div", zl, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Ll, l(t.message), 1)
    ]));
  }
}), Ie = /* @__PURE__ */ j(Ml, [["__scopeId", "data-v-ad8436c9"]]), Tl = { class: "error-state" }, Nl = { class: "error-message" }, Dl = /* @__PURE__ */ G({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, s) => (o(), n("div", Tl, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Nl, l(t.message), 1),
      t.retry ? (o(), p(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          m(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), ze = /* @__PURE__ */ j(Dl, [["__scopeId", "data-v-5397be48"]]), Bl = /* @__PURE__ */ G({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const s = c, { getWorkflows: i } = me(), g = x([]), h = x(!1), u = x(null), f = x(""), v = x(!0), b = x(!1), z = x(!1), y = x(!1), $ = x(null), k = F(
      () => g.value.filter((A) => A.status === "broken")
    ), R = F(
      () => g.value.filter((A) => A.status === "new")
    ), V = F(
      () => g.value.filter((A) => A.status === "modified")
    ), D = F(
      () => g.value.filter((A) => A.status === "synced")
    ), S = F(() => {
      if (!f.value.trim()) return g.value;
      const A = f.value.toLowerCase();
      return g.value.filter((I) => I.name.toLowerCase().includes(A));
    }), T = F(
      () => k.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), P = F(
      () => R.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), N = F(
      () => V.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), L = F(
      () => D.value.filter(
        (A) => !f.value.trim() || A.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), w = F(
      () => b.value ? L.value : L.value.slice(0, 5)
    );
    async function E() {
      h.value = !0, u.value = null;
      try {
        g.value = await i();
      } catch (A) {
        u.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function C(A) {
      $.value = A, z.value = !0;
    }
    function M(A) {
      $.value = A, y.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function K() {
      s("refresh");
    }
    return ue(E), (A, I) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "WORKFLOWS" }, {
            actions: a(() => [
              k.value.length > 0 ? (o(), p(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: a(() => [...I[7] || (I[7] = [
                  m(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: f.value,
            "onUpdate:modelValue": I[0] || (I[0] = (J) => f.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), p(ze, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            T.value.length ? (o(), p(re, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(T.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...I[8] || (I[8] = [
                    m("⚠", -1)
                  ])]),
                  title: a(() => [
                    m(l(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    m(" Missing: " + l(J.missing_nodes) + " nodes, " + l(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => M(J.name)
                    }, {
                      default: a(() => [...I[9] || (I[9] = [
                        m(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(J.name)
                    }, {
                      default: a(() => [...I[10] || (I[10] = [
                        m(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            P.value.length ? (o(), p(re, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(P.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...I[11] || (I[11] = [
                    m("●", -1)
                  ])]),
                  title: a(() => [
                    m(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...I[12] || (I[12] = [
                    m("New", -1)
                  ])]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(J.name)
                    }, {
                      default: a(() => [...I[13] || (I[13] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            N.value.length ? (o(), p(re, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(N.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...I[14] || (I[14] = [
                    m("⚡", -1)
                  ])]),
                  title: a(() => [
                    m(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...I[15] || (I[15] = [
                    m("Modified", -1)
                  ])]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(J.name)
                    }, {
                      default: a(() => [...I[16] || (I[16] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            L.value.length ? (o(), p(re, {
              key: 3,
              title: "SYNCED",
              count: L.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: I[2] || (I[2] = (J) => v.value = J)
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(w.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...I[17] || (I[17] = [
                    m("✓", -1)
                  ])]),
                  title: a(() => [
                    m(l(J.name), 1)
                  ]),
                  subtitle: a(() => [...I[18] || (I[18] = [
                    m("Synced", -1)
                  ])]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(J.name)
                    }, {
                      default: a(() => [...I[19] || (I[19] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && L.value.length > 5 ? (o(), p(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: I[1] || (I[1] = (J) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    m(" View all " + l(L.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            S.value.length ? r("", !0) : (o(), p(ke, {
              key: 4,
              icon: "📭",
              message: f.value ? `No workflows match '${f.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      z.value && $.value ? (o(), p(Rn, {
        key: 0,
        "workflow-name": $.value,
        onClose: I[3] || (I[3] = (J) => z.value = !1),
        onResolve: I[4] || (I[4] = (J) => M($.value))
      }, null, 8, ["workflow-name"])) : r("", !0),
      y.value && $.value ? (o(), p(ul, {
        key: 1,
        "workflow-name": $.value,
        onClose: I[5] || (I[5] = (J) => y.value = !1),
        onInstall: K,
        onRefresh: I[6] || (I[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Rl = /* @__PURE__ */ j(Bl, [["__scopeId", "data-v-ee63730e"]]), Ul = /* @__PURE__ */ G({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["summary-bar", t.variant])
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), We = /* @__PURE__ */ j(Ul, [["__scopeId", "data-v-ccb7816e"]]), Ol = /* @__PURE__ */ G({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironmentModels: i, getStatus: g } = me(), h = x([]), u = x([]), f = x("production"), v = x(!1), b = x(null), z = x(""), y = x(!1);
    function $() {
      y.value = !1, s("navigate", "model-index");
    }
    const k = F(
      () => h.value.reduce((C, M) => C + (M.size || 0), 0)
    ), R = F(() => {
      if (!z.value.trim()) return h.value;
      const C = z.value.toLowerCase();
      return h.value.filter((M) => M.filename.toLowerCase().includes(C));
    }), V = F(() => {
      if (!z.value.trim()) return u.value;
      const C = z.value.toLowerCase();
      return u.value.filter((M) => M.filename.toLowerCase().includes(C));
    }), D = F(
      () => R.value.filter((C) => C.type === "checkpoints")
    ), S = F(
      () => R.value.filter((C) => C.type === "loras")
    ), T = F(
      () => R.value.filter((C) => C.type !== "checkpoints" && C.type !== "loras")
    );
    function P(C) {
      if (!C) return "Unknown";
      const M = C / (1024 * 1024);
      return M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB`;
    }
    function N(C) {
      s("navigate", "model-index");
    }
    function L(C) {
      s("navigate", "model-index");
    }
    function w(C) {
      alert(`Download functionality not yet implemented for ${C}`);
    }
    async function E() {
      v.value = !0, b.value = null;
      try {
        const C = await i();
        h.value = C, u.value = [];
        const M = await g();
        f.value = M.environment || "production";
      } catch (C) {
        b.value = C instanceof Error ? C.message : "Failed to load models";
      } finally {
        v.value = !1;
      }
    }
    return ue(E), (C, M) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (B) => y.value = !0)
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: z.value,
            "onUpdate:modelValue": M[1] || (M[1] = (B) => z.value = B),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading environment models..."
          })) : b.value ? (o(), p(ze, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            h.value.length ? (o(), p(We, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + l(h.value.length) + " models • " + l(P(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            D.value.length ? (o(), p(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(D.value, (B) => (o(), p(de, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...M[3] || (M[3] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(l(P(B.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => N(B.hash)
                    }, {
                      default: a(() => [...M[4] || (M[4] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            S.value.length ? (o(), p(re, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(S.value, (B) => (o(), p(de, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...M[5] || (M[5] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(l(P(B.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => N(B.hash)
                    }, {
                      default: a(() => [...M[6] || (M[6] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            T.value.length ? (o(), p(re, {
              key: 3,
              title: "OTHER",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(T.value, (B) => (o(), p(de, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...M[7] || (M[7] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(l(P(B.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Type:",
                      value: B.type
                    }, null, 8, ["value"]),
                    d(ee, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => N(B.hash)
                    }, {
                      default: a(() => [...M[8] || (M[8] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            V.value.length ? (o(), p(re, {
              key: 4,
              title: "MISSING",
              count: V.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(V.value, (B) => (o(), p(de, {
                  key: B.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...M[9] || (M[9] = [
                    m("⚠", -1)
                  ])]),
                  title: a(() => [
                    m(l(B.filename), 1)
                  ]),
                  subtitle: a(() => [...M[10] || (M[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var K;
                    return [
                      d(ee, {
                        label: "Required by:",
                        value: ((K = B.workflow_names) == null ? void 0 : K.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    d(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => w(B.filename)
                    }, {
                      default: a(() => [...M[11] || (M[11] = [
                        m(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => L(B.filename)
                    }, {
                      default: a(() => [...M[12] || (M[12] = [
                        m(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !R.value.length && !V.value.length ? (o(), p(ke, {
              key: 5,
              icon: "📭",
              message: z.value ? `No models match '${z.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: y.value,
        title: "About Environment Models",
        onClose: M[2] || (M[2] = (B) => y.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            M[13] || (M[13] = m(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(f.value) + '"', 1),
            M[14] || (M[14] = m(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: $
          }, {
            default: a(() => [...M[15] || (M[15] = [
              m(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vl = /* @__PURE__ */ j(Ol, [["__scopeId", "data-v-72675609"]]), Pl = /* @__PURE__ */ G({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: c } = me(), s = x([]), i = x(!1), g = x(null), h = x(""), u = x(!1), f = F(
      () => s.value.reduce((w, E) => w + (E.size_mb || E.size || 0), 0)
    ), v = F(() => {
      const w = /* @__PURE__ */ new Set();
      return s.value.forEach((E) => {
        E.used_in_environments && E.used_in_environments.length > 0 && E.used_in_environments.forEach((C) => w.add(C.env_name));
      }), w.size;
    }), b = F(() => {
      if (!h.value.trim()) return s.value;
      const w = h.value.toLowerCase();
      return s.value.filter((E) => {
        const C = E, M = E.sha256 || C.sha256_hash || "";
        return E.filename.toLowerCase().includes(w) || M.toLowerCase().includes(w);
      });
    }), z = F(
      () => b.value.filter((w) => w.type === "checkpoints")
    ), y = F(
      () => b.value.filter((w) => w.type === "loras")
    ), $ = F(
      () => b.value.filter((w) => w.type !== "checkpoints" && w.type !== "loras")
    );
    function k(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function R(w) {
      const E = w, C = w.used_in_workflows || E.used_by || [];
      return !C || C.length === 0 ? "Not used" : `${C.length} workflow(s)`;
    }
    function V(w) {
      navigator.clipboard.writeText(w), alert("Hash copied to clipboard");
    }
    function D(w) {
      prompt("Enter model source URL:", w.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function S(w) {
      const E = w, C = w.used_in_workflows || E.used_by || [], M = C && C.length > 0 ? `

⚠ WARNING: This model is used by ${C.length} workflow(s):
${C.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${w.filename}?${M}

This will free ${k(E.size_mb || w.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function T() {
      alert("Scan for models not yet implemented");
    }
    function P() {
      alert("Change directory not yet implemented");
    }
    function N() {
      alert("Download new model not yet implemented");
    }
    async function L() {
      i.value = !0, g.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", z.value), console.log("Filtered loras:", y.value), console.log("Filtered other:", $.value);
      } catch (w) {
        g.value = w instanceof Error ? w.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ue(L), (w, E) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[0] || (E[0] = (C) => u.value = !0)
          }, {
            actions: a(() => [
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: a(() => [...E[3] || (E[3] = [
                  m(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: a(() => [...E[4] || (E[4] = [
                  m(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...E[5] || (E[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  m(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: h.value,
            "onUpdate:modelValue": E[1] || (E[1] = (C) => h.value = C),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), p(ze, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length ? (o(), p(We, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + l(s.value.length) + " models • " + l(k(f.value)) + " • Used in " + l(v.value) + " environments ", 1)
              ]),
              _: 1
            })) : r("", !0),
            z.value.length ? (o(), p(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(z.value, (C) => (o(), p(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...E[6] || (E[6] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(l(k(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => {
                    var M, B;
                    return [
                      C.sha256 || C.sha256_hash ? (o(), p(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : r("", !0),
                      d(ee, {
                        label: "Used in:",
                        value: R(C)
                      }, null, 8, ["value"]),
                      C.source_url || (M = C.sources) != null && M[0] ? (o(), p(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: C.source_url || ((B = C.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (o(), p(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...E[7] || (E[7] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (M) => D(C)
                    }, {
                      default: a(() => [...E[8] || (E[8] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (M) => V(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...E[9] || (E[9] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (M) => S(C)
                    }, {
                      default: a(() => [...E[10] || (E[10] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            y.value.length ? (o(), p(re, {
              key: 2,
              title: "LORAS",
              count: y.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(y.value, (C) => (o(), p(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...E[11] || (E[11] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(l(k(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => {
                    var M, B;
                    return [
                      C.sha256 || C.sha256_hash ? (o(), p(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : r("", !0),
                      d(ee, {
                        label: "Used in:",
                        value: R(C)
                      }, null, 8, ["value"]),
                      C.source_url || (M = C.sources) != null && M[0] ? (o(), p(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: C.source_url || ((B = C.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (o(), p(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...E[12] || (E[12] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (M) => D(C)
                    }, {
                      default: a(() => [...E[13] || (E[13] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (M) => V(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...E[14] || (E[14] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (M) => S(C)
                    }, {
                      default: a(() => [...E[15] || (E[15] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (o(), p(re, {
              key: 3,
              title: "OTHER",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q($.value, (C) => (o(), p(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...E[16] || (E[16] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    m(l(k(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Type:",
                      value: C.type
                    }, null, 8, ["value"]),
                    C.sha256 || C.sha256_hash ? (o(), p(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : r("", !0),
                    d(ee, {
                      label: "Used in:",
                      value: R(C)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (M) => D(C)
                    }, {
                      default: a(() => [...E[17] || (E[17] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (M) => V(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...E[18] || (E[18] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    d(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (M) => S(C)
                    }, {
                      default: a(() => [...E[19] || (E[19] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            b.value.length ? r("", !0) : (o(), p(ke, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: u.value,
        title: "About Workspace Model Index",
        onClose: E[2] || (E[2] = (C) => u.value = !1)
      }, {
        content: a(() => [...E[20] || (E[20] = [
          e("p", null, [
            m(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            m(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Al = /* @__PURE__ */ j(Pl, [["__scopeId", "data-v-5a24af01"]]), Wl = { key: 0 }, Fl = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Hl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Gl = /* @__PURE__ */ G({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: c, installNode: s, updateNode: i, uninstallNode: g } = me(), h = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), u = x(!1), f = x(null), v = x(""), b = x(!1), z = F(() => {
      if (!v.value.trim()) return h.value.nodes;
      const N = v.value.toLowerCase();
      return h.value.nodes.filter(
        (L) => {
          var w, E;
          return L.name.toLowerCase().includes(N) || ((w = L.description) == null ? void 0 : w.toLowerCase().includes(N)) || ((E = L.repository) == null ? void 0 : E.toLowerCase().includes(N));
        }
      );
    }), y = F(
      () => z.value.filter((N) => N.installed)
    ), $ = F(
      () => z.value.filter((N) => !N.installed)
    );
    function k(N) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[N] || N;
    }
    function R(N) {
      return !N.used_in_workflows || N.used_in_workflows.length === 0 ? "Not used in any workflows" : N.used_in_workflows.length === 1 ? N.used_in_workflows[0] : `${N.used_in_workflows.length} workflows`;
    }
    function V(N) {
      window.open(N, "_blank");
    }
    async function D(N) {
      if (confirm(`Install node "${N}"?

This will download and install the node from its repository.`))
        try {
          u.value = !0;
          const L = await s(N);
          L.status === "success" ? (alert(`Node "${N}" installed successfully!`), await P()) : alert(`Failed to install node: ${L.message || "Unknown error"}`);
        } catch (L) {
          alert(`Error installing node: ${L instanceof Error ? L.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function S(N) {
      if (confirm(`Check for updates for "${N}"?`))
        try {
          u.value = !0;
          const L = await i(N);
          L.status === "success" ? (alert(`Node "${N}" is up to date or has been updated!`), await P()) : alert(`Update check failed: ${L.message || "Unknown error"}`);
        } catch (L) {
          alert(`Error checking for updates: ${L instanceof Error ? L.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function T(N) {
      if (confirm(`Uninstall node "${N}"?

This will remove the node from this environment.`))
        try {
          u.value = !0;
          const L = await g(N);
          L.status === "success" ? (alert(`Node "${N}" uninstalled successfully!`), await P()) : alert(`Failed to uninstall node: ${L.message || "Unknown error"}`);
        } catch (L) {
          alert(`Error uninstalling node: ${L instanceof Error ? L.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function P() {
      u.value = !0, f.value = null;
      try {
        h.value = await c();
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return ue(P), (N, L) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (w) => b.value = !0)
          })
        ]),
        search: a(() => [
          d(Ae, {
            modelValue: v.value,
            "onUpdate:modelValue": L[1] || (L[1] = (w) => v.value = w),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : f.value ? (o(), p(ze, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            h.value.total_count ? (o(), p(We, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + l(h.value.total_count) + " nodes • " + l(h.value.installed_count) + " installed • " + l(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : r("", !0),
            y.value.length ? (o(), p(re, {
              key: 1,
              title: "INSTALLED",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(y.value, (w) => (o(), p(de, {
                  key: w.name,
                  status: "synced"
                }, {
                  icon: a(() => [...L[4] || (L[4] = [
                    m("📦", -1)
                  ])]),
                  title: a(() => [
                    m(l(w.name), 1)
                  ]),
                  subtitle: a(() => [
                    w.version ? (o(), n("span", Wl, "v" + l(w.version), 1)) : (o(), n("span", Fl, "version unknown")),
                    w.source ? (o(), n("span", Hl, " • " + l(k(w.source)), 1)) : r("", !0)
                  ]),
                  details: a(() => [
                    w.description ? (o(), p(ee, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : r("", !0),
                    w.repository ? (o(), p(ee, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : r("", !0),
                    d(ee, {
                      label: "Used by:",
                      value: R(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.repository ? (o(), p(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => V(w.repository)
                    }, {
                      default: a(() => [...L[5] || (L[5] = [
                        m(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.source === "registry" ? (o(), p(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => S(w.name)
                    }, {
                      default: a(() => [...L[6] || (L[6] = [
                        m(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.source !== "unknown" ? (o(), p(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (E) => T(w.name)
                    }, {
                      default: a(() => [...L[7] || (L[7] = [
                        m(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (o(), p(re, {
              key: 2,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, q($.value, (w) => (o(), p(de, {
                  key: w.name,
                  status: "missing"
                }, {
                  icon: a(() => [...L[8] || (L[8] = [
                    m("⚠", -1)
                  ])]),
                  title: a(() => [
                    m(l(w.name), 1)
                  ]),
                  subtitle: a(() => [...L[9] || (L[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    w.description ? (o(), p(ee, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : r("", !0),
                    w.repository ? (o(), p(ee, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : r("", !0),
                    d(ee, {
                      label: "Required by:",
                      value: R(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.download_url ? (o(), p(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => D(w.name)
                    }, {
                      default: a(() => [...L[10] || (L[10] = [
                        m(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w.repository ? (o(), p(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => V(w.repository)
                    }, {
                      default: a(() => [...L[11] || (L[11] = [
                        m(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !y.value.length && !$.value.length ? (o(), p(ke, {
              key: 3,
              icon: "📭",
              message: v.value ? `No nodes match '${v.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: b.value,
        title: "About Git-Tracked Nodes",
        onClose: L[3] || (L[3] = (w) => b.value = !1)
      }, {
        content: a(() => [...L[12] || (L[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            m(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            m(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: L[2] || (L[2] = (w) => b.value = !1)
          }, {
            default: a(() => [...L[13] || (L[13] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jl = /* @__PURE__ */ j(Gl, [["__scopeId", "data-v-c480e2c1"]]), Kl = { class: "remote-url-display" }, ql = ["title"], Yl = ["title"], Jl = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Xl = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ql = /* @__PURE__ */ G({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, s = x(!1), i = F(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const h = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${h}...${u}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(c.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy URL:", h);
      }
    }
    return (h, u) => (o(), n("div", Kl, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, ql),
      e("button", {
        class: Y(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Xl, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Jl, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Yl)
    ]));
  }
}), ht = /* @__PURE__ */ j(Ql, [["__scopeId", "data-v-7768a58d"]]), Zl = { class: "remote-title" }, ei = {
  key: 0,
  class: "default-badge"
}, ti = {
  key: 1,
  class: "sync-badge"
}, oi = {
  key: 0,
  class: "ahead"
}, si = {
  key: 1,
  class: "behind"
}, ai = {
  key: 0,
  class: "tracking-info"
}, ni = /* @__PURE__ */ G({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const s = t, i = F(() => s.fetchingRemote === s.remote.name), g = F(() => s.remote.is_default), h = F(() => !!s.trackingBranch);
    function u(f) {
      const v = new Date(f), z = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), y = Math.floor(z / 6e4);
      if (y < 1) return "Just now";
      if (y < 60) return `${y}m ago`;
      const $ = Math.floor(y / 60);
      if ($ < 24) return `${$}h ago`;
      const k = Math.floor($ / 24);
      return k < 7 ? `${k}d ago` : v.toLocaleDateString();
    }
    return (f, v) => (o(), p(de, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        m(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Zl, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), n("span", ei, "DEFAULT")) : r("", !0),
          t.syncStatus ? (o(), n("span", ti, [
            t.syncStatus.ahead > 0 ? (o(), n("span", oi, "↑" + l(t.syncStatus.ahead), 1)) : r("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", si, "↓" + l(t.syncStatus.behind), 1)) : r("", !0)
          ])) : r("", !0)
        ])
      ]),
      subtitle: a(() => [
        h.value ? (o(), n("span", ai, " Tracking: " + l(t.trackingBranch), 1)) : r("", !0)
      ]),
      details: a(() => {
        var b;
        return [
          d(ee, { label: "Fetch:" }, {
            default: a(() => [
              d(ht, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), p(ee, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              d(ht, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0),
          (b = t.syncStatus) != null && b.last_fetch ? (o(), p(ee, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(u(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : r("", !0)
        ];
      }),
      actions: a(() => [
        d(U, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: v[0] || (v[0] = (b) => f.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...v[3] || (v[3] = [
            m(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        d(U, {
          variant: "secondary",
          size: "xs",
          onClick: v[1] || (v[1] = (b) => f.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...v[4] || (v[4] = [
            m(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? r("", !0) : (o(), p(U, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[2] || (v[2] = (b) => f.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...v[5] || (v[5] = [
            m(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), li = /* @__PURE__ */ j(ni, [["__scopeId", "data-v-17362e45"]]), ii = ["for"], ri = {
  key: 0,
  class: "base-form-field-required"
}, ci = { class: "base-form-field-input" }, di = {
  key: 1,
  class: "base-form-field-error"
}, ui = {
  key: 2,
  class: "base-form-field-hint"
}, mi = /* @__PURE__ */ G({
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
    const c = t, s = F(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, g) => (o(), n("div", {
      class: Y(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        m(l(t.label) + " ", 1),
        t.required ? (o(), n("span", ri, "*")) : r("", !0)
      ], 8, ii)) : r("", !0),
      e("div", ci, [
        te(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", di, l(t.error), 1)) : t.hint ? (o(), n("span", ui, l(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ j(mi, [["__scopeId", "data-v-9a1cf296"]]), vi = ["type", "value", "placeholder", "disabled"], fi = {
  key: 0,
  class: "base-input-error"
}, gi = /* @__PURE__ */ G({
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
    return (c, s) => (o(), n("div", {
      class: Y(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: Y(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Se((i) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Se((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, vi),
      t.error ? (o(), n("span", fi, l(t.error), 1)) : r("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ j(gi, [["__scopeId", "data-v-9ba02cdc"]]), hi = { class: "remote-form" }, pi = { class: "form-header" }, yi = { class: "form-body" }, wi = {
  key: 0,
  class: "form-error"
}, bi = { class: "form-actions" }, ki = /* @__PURE__ */ G({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const s = t, i = c, g = x({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = x(!1), u = x(null);
    yt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const f = F(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function v() {
      if (!(!f.value || h.value)) {
        u.value = null, h.value = !0;
        try {
          i("submit", g.value);
        } catch (b) {
          u.value = b instanceof Error ? b.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (b, z) => (o(), n("div", hi, [
      e("div", pi, [
        d(pe, null, {
          default: a(() => [
            m(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", yi, [
        d(at, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            d(nt, {
              modelValue: g.value.name,
              "onUpdate:modelValue": z[0] || (z[0] = (y) => g.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        d(at, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            d(nt, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": z[1] || (z[1] = (y) => g.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d(at, { label: "Push URL (optional)" }, {
          default: a(() => [
            d(nt, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": z[2] || (z[2] = (y) => g.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (o(), n("div", wi, l(u.value), 1)) : r("", !0)
      ]),
      e("div", bi, [
        d(U, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: h.value,
          onClick: v
        }, {
          default: a(() => [
            m(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        d(U, {
          variant: "ghost",
          size: "md",
          onClick: z[3] || (z[3] = (y) => b.$emit("cancel"))
        }, {
          default: a(() => [...z[4] || (z[4] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), $i = /* @__PURE__ */ j(ki, [["__scopeId", "data-v-56021b18"]]), _i = { key: 0 }, Ci = /* @__PURE__ */ G({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: g,
      fetchRemote: h,
      getRemoteSyncStatus: u
    } = me(), f = x([]), v = x(null), b = x({}), z = x(!1), y = x(null), $ = x(""), k = x(!1), R = x(null), V = x(!1), D = x("add"), S = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = F(() => {
      if (!$.value.trim()) return f.value;
      const A = $.value.toLowerCase();
      return f.value.filter(
        (I) => I.name.toLowerCase().includes(A) || I.fetch_url.toLowerCase().includes(A) || I.push_url.toLowerCase().includes(A)
      );
    });
    function P(A) {
      var I;
      return ((I = v.value) == null ? void 0 : I.remote) === A;
    }
    async function N() {
      z.value = !0, y.value = null;
      try {
        const A = await c();
        f.value = A.remotes, v.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (I) => {
            const J = await u(I.name);
            J && (b.value[I.name] = J);
          })
        );
      } catch (A) {
        y.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        z.value = !1;
      }
    }
    function L() {
      D.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function w(A) {
      const I = f.value.find((J) => J.name === A);
      I && (D.value = "edit", S.value = {
        name: I.name,
        fetchUrl: I.fetch_url,
        pushUrl: I.push_url
      }, V.value = !0);
    }
    async function E(A) {
      try {
        D.value === "add" ? await s(A.name, A.fetchUrl) : await g(A.name, A.fetchUrl, A.pushUrl || void 0), V.value = !1, await N();
      } catch (I) {
        y.value = I instanceof Error ? I.message : "Operation failed";
      }
    }
    function C() {
      V.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(A) {
      R.value = A;
      try {
        await h(A);
        const I = await u(A);
        I && (b.value[A] = I);
      } catch (I) {
        y.value = I instanceof Error ? I.message : "Fetch failed";
      } finally {
        R.value = null;
      }
    }
    async function B(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await i(A), await N();
        } catch (I) {
          y.value = I instanceof Error ? I.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(N), (A, I) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (J) => k.value = !0)
          }, {
            actions: a(() => [
              V.value ? r("", !0) : (o(), p(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: a(() => [...I[3] || (I[3] = [
                  m(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          V.value ? r("", !0) : (o(), p(Ae, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": I[1] || (I[1] = (J) => $.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          z.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading remotes..."
          })) : y.value ? (o(), p(ze, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            V.value ? (o(), p($i, {
              key: 0,
              mode: D.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: E,
              onCancel: C
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            f.value.length && !V.value ? (o(), p(We, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                m(" Total: " + l(f.value.length) + " remote" + l(f.value.length !== 1 ? "s" : "") + " ", 1),
                v.value ? (o(), n("span", _i, " • Tracking: " + l(v.value.remote) + "/" + l(v.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            T.value.length && !V.value ? (o(), p(re, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, q(T.value, (J) => {
                  var oe;
                  return o(), p(li, {
                    key: J.name,
                    remote: J,
                    "sync-status": b.value[J.name],
                    "tracking-branch": P(J.name) ? (oe = v.value) == null ? void 0 : oe.branch : void 0,
                    "fetching-remote": R.value,
                    onFetch: M,
                    onEdit: w,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !T.value.length && !V.value ? (o(), p(ke, {
              key: 3,
              icon: "🌐",
              message: $.value ? `No remotes match '${$.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                d(U, {
                  variant: "primary",
                  onClick: L
                }, {
                  default: a(() => [...I[4] || (I[4] = [
                    m(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: k.value,
        title: "About Git Remotes",
        onClose: I[2] || (I[2] = (J) => k.value = !1)
      }, {
        content: a(() => [...I[5] || (I[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            m(" The "),
            e("strong", null, '"origin"'),
            m(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          d(U, {
            variant: "link",
            onClick: K
          }, {
            default: a(() => [...I[6] || (I[6] = [
              m(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xi = /* @__PURE__ */ j(Ci, [["__scopeId", "data-v-a75719bb"]]), Si = { class: "setting-info" }, Ei = { class: "setting-label" }, Ii = {
  key: 0,
  class: "required-marker"
}, zi = {
  key: 0,
  class: "setting-description"
}, Li = { class: "setting-control" }, Mi = /* @__PURE__ */ G({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: Y(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Si, [
        e("div", Ei, [
          m(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Ii, "*")) : r("", !0)
        ]),
        t.description ? (o(), n("div", zi, l(t.description), 1)) : r("", !0)
      ]),
      e("div", Li, [
        te(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Me = /* @__PURE__ */ j(Mi, [["__scopeId", "data-v-cb5d236c"]]), Ti = { class: "toggle" }, Ni = ["checked", "disabled"], Di = /* @__PURE__ */ G({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", Ti, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Ni),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ve = /* @__PURE__ */ j(Di, [["__scopeId", "data-v-71c0f550"]]), Bi = { class: "settings-section" }, Ri = { class: "path-setting" }, Ui = { class: "path-value" }, Oi = { class: "path-setting" }, Vi = { class: "path-value" }, Pi = { class: "settings-section" }, Ai = { class: "settings-section" }, Wi = /* @__PURE__ */ G({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: s } = me(), i = x(!1), g = x(null), h = x(null), u = x(null), f = x(null), v = x(""), b = x(""), z = x(!0), y = x(!0), $ = F(() => f.value ? v.value !== (f.value.civitai_api_key || "") : !1);
    async function k() {
      i.value = !0, g.value = null;
      try {
        u.value = await c(), f.value = { ...u.value }, v.value = u.value.civitai_api_key || "", b.value = u.value.huggingface_token || "", z.value = u.value.auto_sync_models, y.value = u.value.confirm_destructive;
      } catch (D) {
        g.value = D instanceof Error ? D.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function R() {
      var D;
      h.value = null;
      try {
        const S = {};
        v.value !== (((D = f.value) == null ? void 0 : D.civitai_api_key) || "") && (S.civitai_api_key = v.value || null), await s(S), await k(), h.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          h.value = null;
        }, 3e3);
      } catch (S) {
        h.value = {
          type: "error",
          message: S instanceof Error ? S.message : "Failed to save settings"
        };
      }
    }
    function V() {
      f.value && (v.value = f.value.civitai_api_key || "", b.value = f.value.huggingface_token || "", z.value = f.value.auto_sync_models, y.value = f.value.confirm_destructive, h.value = null);
    }
    return ue(k), (D, S) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            d(U, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: R
            }, {
              default: a(() => [...S[4] || (S[4] = [
                m(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (o(), p(U, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: V
            }, {
              default: a(() => [...S[5] || (S[5] = [
                m(" Reset ", -1)
              ])]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), p(Ie, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), p(ze, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: k
        }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
          d(re, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var T, P;
              return [
                e("div", Bi, [
                  e("div", Ri, [
                    S[6] || (S[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[7] || (S[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Ui, l(((T = u.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Oi, [
                    S[8] || (S[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    S[9] || (S[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Vi, l(((P = u.value) == null ? void 0 : P.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          d(re, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Pi, [
                d(Me, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    d(Ke, {
                      modelValue: v.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (T) => v.value = T),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Me, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ke, {
                      modelValue: b.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (T) => b.value = T),
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
          d(re, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Ai, [
                d(Me, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ve, {
                      modelValue: z.value,
                      "onUpdate:modelValue": S[2] || (S[2] = (T) => z.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Me, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Ve, {
                      modelValue: y.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (T) => y.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), p(We, {
            key: 0,
            variant: (h.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: qe({ color: h.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(h.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : r("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Fi = /* @__PURE__ */ j(Wi, [["__scopeId", "data-v-8b092643"]]), Hi = /* @__PURE__ */ G({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = me(), s = x([]), i = x(!1), g = x(null), h = x(!1), u = x(null), f = F(() => s.value.length === 0 ? [] : [...s.value].reverse().map((z) => {
      const $ = new Date(z.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      }).replace(",", ""), k = z.context ? `[${z.context}]` : "";
      return {
        text: `${$} ${z.level.padEnd(7)} ${k} ${z.message}`,
        level: z.level
      };
    }));
    async function v() {
      i.value = !0, g.value = null;
      try {
        s.value = await c(void 0, 500), s.value.sort((b, z) => new Date(z.timestamp).getTime() - new Date(b.timestamp).getTime());
      } catch (b) {
        g.value = b instanceof Error ? b.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var b;
          (b = u.value) != null && b.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(v), (b, z) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (y) => h.value = !0)
          }, {
            actions: a(() => [
              d(U, {
                variant: "secondary",
                size: "sm",
                onClick: v,
                disabled: i.value
              }, {
                default: a(() => [
                  m(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), p(ze, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length === 0 ? (o(), p(ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), n(W, null, q(f.value, (y, $) => (o(), n("div", {
                key: $,
                class: Y(`log-line log-level-${y.level.toLowerCase()}`)
              }, l(y.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: z[2] || (z[2] = (y) => h.value = !1)
      }, {
        content: a(() => [...z[3] || (z[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            m(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            m(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            m(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            m(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: z[1] || (z[1] = (y) => h.value = !1)
          }, {
            default: a(() => [...z[4] || (z[4] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gi = /* @__PURE__ */ j(Hi, [["__scopeId", "data-v-846ec23c"]]), ji = /* @__PURE__ */ G({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: s } = me(), i = x([]), g = x(!1), h = x(null), u = x(!1), f = x("production"), v = x(null), b = F(() => i.value.length === 0 ? [] : [...i.value].reverse().map(($) => {
      const R = new Date($.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      }).replace(",", ""), V = $.context ? `[${$.context}]` : "";
      return {
        text: `${R} ${$.level.padEnd(7)} ${V} ${$.message}`,
        level: $.level
      };
    }));
    async function z() {
      g.value = !0, h.value = null;
      try {
        i.value = await c(void 0, 500), i.value.sort((y, $) => new Date($.timestamp).getTime() - new Date(y.timestamp).getTime());
        try {
          const y = await s();
          f.value = y.environment || "production";
        } catch {
        }
      } catch (y) {
        h.value = y instanceof Error ? y.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var y;
          (y = v.value) != null && y.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(z), (y, $) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (k) => u.value = !0)
          }, {
            actions: a(() => [
              d(U, {
                variant: "secondary",
                size: "sm",
                onClick: z,
                disabled: g.value
              }, {
                default: a(() => [
                  m(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), p(ze, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            i.value.length === 0 ? (o(), p(ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), n(W, null, q(b.value, (k, R) => (o(), n("div", {
                key: R,
                class: Y(`log-line log-level-${k.level.toLowerCase()}`)
              }, l(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(Ee, {
        show: u.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (k) => u.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            $[3] || ($[3] = m(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(f.value), 1),
            $[4] || ($[4] = m(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            m(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            m(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            m(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            m(" Detailed debugging information ")
          ], -1)),
          $[6] || ($[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: $[1] || ($[1] = (k) => u.value = !1)
          }, {
            default: a(() => [...$[7] || ($[7] = [
              m(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ki = /* @__PURE__ */ j(ji, [["__scopeId", "data-v-cf493022"]]), qi = { class: "env-title" }, Yi = {
  key: 0,
  class: "current-badge"
}, Ji = {
  key: 0,
  class: "branch-info"
}, Xi = /* @__PURE__ */ G({
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
    return (c, s) => (o(), p(de, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        m(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", qi, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Yi, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Ji, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          m(" " + l(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      details: a(() => [
        d(ee, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        d(ee, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        d(ee, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), p(ee, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : r("", !0)
      ]),
      actions: a(() => [
        te(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Qi = /* @__PURE__ */ j(Xi, [["__scopeId", "data-v-5238e57c"]]), Zi = {
  key: 0,
  class: "create-form"
}, er = { class: "create-form__header" }, tr = { class: "create-form__body" }, or = { class: "create-form__actions" }, sr = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, ar = /* @__PURE__ */ G({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironments: i } = me(), g = x([]), h = x(!1), u = x(null), f = x(""), v = x(!1), b = x(!1), z = x(""), y = F(
      () => g.value.find((P) => P.is_current)
    ), $ = F(() => {
      if (!f.value.trim()) return g.value;
      const P = f.value.toLowerCase();
      return g.value.filter(
        (N) => {
          var L;
          return N.name.toLowerCase().includes(P) || ((L = N.current_branch) == null ? void 0 : L.toLowerCase().includes(P));
        }
      );
    });
    function k(P) {
      if (!P) return "";
      try {
        const N = new Date(P), w = (/* @__PURE__ */ new Date()).getTime() - N.getTime(), E = Math.floor(w / 6e4), C = Math.floor(w / 36e5), M = Math.floor(w / 864e5);
        return E < 1 ? "just now" : E < 60 ? `${E} ${E === 1 ? "minute" : "minutes"} ago` : C < 24 ? `${C} ${C === 1 ? "hour" : "hours"} ago` : M < 30 ? `${M} ${M === 1 ? "day" : "days"} ago` : N.toLocaleDateString();
      } catch {
        return P;
      }
    }
    function R() {
      const P = z.value.trim();
      P && (s("create", P), z.value = "", b.value = !1);
    }
    function V() {
      z.value = "", b.value = !1;
    }
    function D(P) {
      s("viewDetails", P);
    }
    function S(P) {
      confirm(`Delete environment "${P}"?

This action cannot be undone.`) && s("delete", P);
    }
    async function T() {
      h.value = !0, u.value = null;
      try {
        g.value = await i();
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return ue(T), (P, N) => {
      const L = Wt("SectionGroup");
      return o(), n(W, null, [
        d(fe, null, {
          header: a(() => [
            d(ge, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: N[1] || (N[1] = (w) => v.value = !0)
            }, {
              actions: a(() => [
                d(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: N[0] || (N[0] = (w) => b.value = !0),
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
                d(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: T,
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
            d(Ae, {
              modelValue: f.value,
              "onUpdate:modelValue": N[2] || (N[2] = (w) => f.value = w),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            h.value ? (o(), p(Ie, {
              key: 0,
              message: "Loading environments..."
            })) : u.value ? (o(), p(ze, {
              key: 1,
              message: u.value,
              retry: !0,
              onRetry: T
            }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
              b.value ? (o(), n("div", Zi, [
                e("div", er, [
                  N[10] || (N[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  d(U, {
                    variant: "ghost",
                    size: "xs",
                    onClick: V
                  }, {
                    default: a(() => [...N[9] || (N[9] = [
                      m(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", tr, [
                  d(Ke, {
                    modelValue: z.value,
                    "onUpdate:modelValue": N[3] || (N[3] = (w) => z.value = w),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Se(R, ["enter"]),
                      Se(V, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", or, [
                    d(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: R,
                      disabled: !z.value.trim()
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        m(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: V
                    }, {
                      default: a(() => [...N[12] || (N[12] = [
                        m(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : r("", !0),
              g.value.length ? (o(), p(We, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  m(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  y.value ? (o(), n(W, { key: 0 }, [
                    N[13] || (N[13] = m(" • Current: ", -1)),
                    e("strong", null, l(y.value.name), 1)
                  ], 64)) : r("", !0)
                ]),
                _: 1
              })) : r("", !0),
              $.value.length ? (o(), p(L, {
                key: 2,
                title: "ENVIRONMENTS",
                count: $.value.length
              }, {
                default: a(() => [
                  (o(!0), n(W, null, q($.value, (w) => (o(), p(Qi, {
                    key: w.name,
                    "environment-name": w.name,
                    "is-current": w.is_current,
                    "current-branch": w.current_branch,
                    "workflow-count": w.workflow_count,
                    "node-count": w.node_count,
                    "model-count": w.model_count,
                    "last-used": k(w.last_used),
                    "show-last-used": !!w.last_used
                  }, {
                    actions: a(() => [
                      w.is_current ? r("", !0) : (o(), p(U, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (E) => P.$emit("switch", w.name)
                      }, {
                        default: a(() => [...N[14] || (N[14] = [
                          m(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      d(U, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (E) => D(w.name),
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
                      !w.is_current && g.value.length > 1 ? (o(), p(U, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (E) => S(w.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", sr, [...N[16] || (N[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : r("", !0),
              $.value.length ? r("", !0) : (o(), p(ke, {
                key: 3,
                icon: "🌍",
                message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
              }, wt({ _: 2 }, [
                f.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    d(U, {
                      variant: "primary",
                      onClick: N[4] || (N[4] = (w) => b.value = !0)
                    }, {
                      default: a(() => [...N[17] || (N[17] = [
                        m(" Create Environment ", -1)
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
        d(Ee, {
          show: v.value,
          title: "About Environments",
          onClose: N[6] || (N[6] = (w) => v.value = !1)
        }, {
          content: a(() => [...N[18] || (N[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              m(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            d(U, {
              variant: "secondary",
              onClick: N[5] || (N[5] = (w) => v.value = !1)
            }, {
              default: a(() => [...N[19] || (N[19] = [
                m(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), nr = /* @__PURE__ */ j(ar, [["__scopeId", "data-v-97d6527d"]]), lr = { class: "file-path" }, ir = { class: "file-path-text" }, rr = ["title"], cr = /* @__PURE__ */ G({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, s = x(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, h) => (o(), n("div", lr, [
      h[0] || (h[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", ir, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, rr)) : r("", !0)
    ]));
  }
}), dr = /* @__PURE__ */ j(cr, [["__scopeId", "data-v-f0982173"]]), ur = { class: "output-path-input" }, mr = { class: "export-actions" }, vr = {
  key: 1,
  class: "export-warning"
}, fr = /* @__PURE__ */ G({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = me(), s = x(""), i = x(!1), g = x(null), h = x(!1);
    async function u() {
      i.value = !0, g.value = null;
      try {
        const v = await c(s.value || void 0);
        g.value = v;
      } catch (v) {
        g.value = {
          status: "error",
          message: v instanceof Error ? v.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function f() {
      var v;
      if ((v = g.value) != null && v.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (b) {
          console.error("Failed to copy path:", b);
        }
    }
    return (v, b) => (o(), n(W, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              d(U, {
                variant: "ghost",
                size: "sm",
                onClick: b[0] || (b[0] = (z) => h.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...b[5] || (b[5] = [
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
          d(re, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              d(de, { status: "synced" }, {
                icon: a(() => [...b[6] || (b[6] = [
                  m("📦", -1)
                ])]),
                title: a(() => [...b[7] || (b[7] = [
                  m("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...b[8] || (b[8] = [
                  m(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  d(ee, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  d(ee, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  d(ee, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  d(ee, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(re, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              d(de, { status: "synced" }, {
                icon: a(() => [...b[9] || (b[9] = [
                  m("📁", -1)
                ])]),
                title: a(() => [...b[10] || (b[10] = [
                  m("Output Destination", -1)
                ])]),
                subtitle: a(() => [...b[11] || (b[11] = [
                  m(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", ur, [
                    d(Ke, {
                      modelValue: s.value,
                      "onUpdate:modelValue": b[1] || (b[1] = (z) => s.value = z),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(re, { title: "EXPORT" }, {
            default: a(() => [
              e("div", mr, [
                d(U, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: u
                }, {
                  default: a(() => [
                    b[12] || (b[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    m(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), p(U, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: b[2] || (b[2] = (z) => s.value = "")
                }, {
                  default: a(() => [...b[13] || (b[13] = [
                    m(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), p(re, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              d(de, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, wt({
                icon: a(() => [
                  m(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  m(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  m(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    d(ee, { label: "Saved to:" }, {
                      default: a(() => [
                        d(dr, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), p(ee, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", vr, [...b[14] || (b[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: a(() => [...b[15] || (b[15] = [
                        m(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    d(U, {
                      variant: "ghost",
                      size: "sm",
                      onClick: b[3] || (b[3] = (z) => g.value = null)
                    }, {
                      default: a(() => [...b[16] || (b[16] = [
                        m(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }),
      d(Ee, {
        show: h.value,
        title: "About Environment Export",
        onClose: b[4] || (b[4] = (z) => h.value = !1)
      }, {
        content: a(() => [...b[17] || (b[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            m(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), gr = /* @__PURE__ */ j(fr, [["__scopeId", "data-v-1777a9d5"]]), hr = { class: "file-input-wrapper" }, pr = ["accept", "multiple", "disabled"], yr = /* @__PURE__ */ G({
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
  setup(t, { expose: c, emit: s }) {
    const i = s, g = x(null);
    function h() {
      var f;
      (f = g.value) == null || f.click();
    }
    function u(f) {
      const v = f.target;
      v.files && v.files.length > 0 && (i("change", v.files), v.value = "");
    }
    return c({
      triggerInput: h
    }), (f, v) => (o(), n("div", hr, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, pr),
      d(U, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: h
      }, {
        default: a(() => [
          te(f.$slots, "default", {}, () => [
            v[0] || (v[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            m(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), wr = /* @__PURE__ */ j(yr, [["__scopeId", "data-v-cd192091"]]), br = {
  key: 0,
  class: "drop-zone-empty"
}, kr = { class: "drop-zone-text" }, $r = { class: "drop-zone-primary" }, _r = { class: "drop-zone-secondary" }, Cr = { class: "drop-zone-actions" }, xr = {
  key: 1,
  class: "drop-zone-file"
}, Sr = { class: "file-info" }, Er = { class: "file-details" }, Ir = { class: "file-name" }, zr = { class: "file-size" }, Lr = /* @__PURE__ */ G({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: c }) {
    const s = c, i = x(!1), g = x(null), h = x(0), u = F(() => g.value !== null), f = F(() => {
      var D;
      return ((D = g.value) == null ? void 0 : D.name) || "";
    }), v = F(() => {
      if (!g.value) return "";
      const D = g.value.size;
      return D < 1024 ? `${D} B` : D < 1024 * 1024 ? `${(D / 1024).toFixed(1)} KB` : D < 1024 * 1024 * 1024 ? `${(D / (1024 * 1024)).toFixed(1)} MB` : `${(D / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function b(D) {
      var S;
      h.value++, (S = D.dataTransfer) != null && S.types.includes("Files") && (i.value = !0);
    }
    function z(D) {
      D.dataTransfer && (D.dataTransfer.dropEffect = "copy");
    }
    function y() {
      h.value--, h.value === 0 && (i.value = !1);
    }
    function $(D) {
      var T;
      h.value = 0, i.value = !1;
      const S = (T = D.dataTransfer) == null ? void 0 : T.files;
      S && S.length > 0 && R(S[0]);
    }
    function k(D) {
      D.length > 0 && R(D[0]);
    }
    function R(D) {
      g.value = D, s("fileSelected", D);
    }
    function V() {
      g.value = null, s("clear");
    }
    return (D, S) => (o(), n("div", {
      class: Y(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: ve(b, ["prevent"]),
      onDragover: ve(z, ["prevent"]),
      onDragleave: ve(y, ["prevent"]),
      onDrop: ve($, ["prevent"])
    }, [
      u.value ? (o(), n("div", xr, [
        e("div", Sr, [
          S[1] || (S[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Er, [
            e("div", Ir, l(f.value), 1),
            e("div", zr, l(v.value), 1)
          ])
        ]),
        d(U, {
          variant: "ghost",
          size: "xs",
          onClick: V,
          title: "Remove file"
        }, {
          default: a(() => [...S[2] || (S[2] = [
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
      ])) : (o(), n("div", br, [
        S[0] || (S[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", kr, [
          e("p", $r, l(t.primaryText), 1),
          e("p", _r, l(t.secondaryText), 1)
        ]),
        e("div", Cr, [
          d(wr, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: a(() => [
              m(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Mr = /* @__PURE__ */ j(Lr, [["__scopeId", "data-v-e00abbca"]]), Tr = { class: "import-preview" }, Nr = { class: "preview-header" }, Dr = {
  key: 0,
  class: "source-env"
}, Br = { class: "preview-content" }, Rr = { class: "preview-section" }, Ur = { class: "section-header" }, Or = { class: "section-info" }, Vr = { class: "section-count" }, Pr = {
  key: 0,
  class: "item-list"
}, Ar = { class: "item-name" }, Wr = {
  key: 0,
  class: "item-more"
}, Fr = { class: "preview-section" }, Hr = { class: "section-header" }, Gr = { class: "section-info" }, jr = { class: "section-count" }, Kr = {
  key: 0,
  class: "item-list"
}, qr = { class: "item-details" }, Yr = { class: "item-name" }, Jr = { class: "item-meta" }, Xr = {
  key: 0,
  class: "item-more"
}, Qr = { class: "preview-section" }, Zr = { class: "section-header" }, ec = { class: "section-info" }, tc = { class: "section-count" }, oc = {
  key: 0,
  class: "item-list"
}, sc = { class: "item-name" }, ac = {
  key: 0,
  class: "item-more"
}, nc = {
  key: 0,
  class: "preview-section"
}, lc = { class: "git-info" }, ic = /* @__PURE__ */ G({
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
    const c = t, s = F(() => c.workflows.length), i = F(() => c.models.length), g = F(() => c.nodes.length);
    function h(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (o(), n("div", Tr, [
      e("div", Nr, [
        d(pe, null, {
          default: a(() => [...f[0] || (f[0] = [
            m("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Dr, [
          f[1] || (f[1] = m(" From: ", -1)),
          d(rt, null, {
            default: a(() => [
              m(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", Br, [
        e("div", Rr, [
          e("div", Ur, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Or, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Vr, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Pr, [
            (o(!0), n(W, null, q(t.workflows.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ar, l(v), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Wr, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Fr, [
          e("div", Hr, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Gr, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", jr, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Kr, [
            (o(!0), n(W, null, q(t.models.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", qr, [
                e("span", Yr, l(v.filename), 1),
                e("span", Jr, l(h(v.size)) + " • " + l(v.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Xr, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Qr, [
          e("div", Zr, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", ec, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", tc, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", oc, [
            (o(!0), n(W, null, q(t.nodes.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", sc, l(v), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", ac, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", nc, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", lc, [
            t.gitBranch ? (o(), p(ee, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                d(rt, null, {
                  default: a(() => [
                    m(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (o(), p(ee, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                d(_t, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), rc = /* @__PURE__ */ j(ic, [["__scopeId", "data-v-182fe113"]]), cc = { class: "import-options" }, dc = { class: "options-container" }, uc = { class: "option-section" }, mc = { class: "conflict-options" }, vc = ["value", "checked", "onChange"], fc = { class: "conflict-content" }, gc = { class: "conflict-label" }, hc = { class: "conflict-description" }, pc = { class: "option-section" }, yc = { class: "component-toggles" }, wc = /* @__PURE__ */ G({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: c }) {
    const s = c, i = [
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
    return (g, h) => (o(), n("div", cc, [
      d(pe, null, {
        default: a(() => [...h[4] || (h[4] = [
          m("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", dc, [
        e("div", uc, [
          d(it, null, {
            default: a(() => [...h[5] || (h[5] = [
              m("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", mc, [
            (o(), n(W, null, q(i, (u) => e("label", {
              key: u.value,
              class: Y(["conflict-option", { active: t.conflictMode === u.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: u.value,
                checked: t.conflictMode === u.value,
                onChange: (f) => s("update:conflictMode", u.value)
              }, null, 40, vc),
              e("div", fc, [
                e("span", gc, l(u.label), 1),
                e("span", hc, l(u.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", pc, [
          d(it, null, {
            default: a(() => [...h[6] || (h[6] = [
              m("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", yc, [
            d(Me, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                d(Ve, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (u) => s("update:includeWorkflows", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Me, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                d(Ve, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (u) => s("update:includeModels", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Me, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                d(Ve, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (u) => s("update:includeNodes", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Me, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                d(Ve, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": h[3] || (h[3] = (u) => s("update:includeGitHistory", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), bc = /* @__PURE__ */ j(wc, [["__scopeId", "data-v-0ec212b0"]]), kc = {
  key: 0,
  class: "import-empty"
}, $c = { class: "import-help" }, _c = {
  key: 1,
  class: "import-configure"
}, Cc = { class: "selected-file-bar" }, xc = { class: "file-bar-content" }, Sc = { class: "file-bar-info" }, Ec = { class: "file-bar-name" }, Ic = { class: "file-bar-size" }, zc = { class: "import-actions" }, Lc = {
  key: 2,
  class: "import-progress"
}, Mc = { class: "progress-content" }, Tc = { class: "progress-info" }, Nc = { class: "progress-title" }, Dc = { class: "progress-detail" }, Bc = { class: "progress-bar" }, Rc = { class: "progress-status" }, Uc = {
  key: 3,
  class: "import-complete"
}, Oc = { class: "complete-message" }, Vc = { class: "complete-title" }, Pc = { class: "complete-details" }, Ac = { class: "complete-actions" }, Wc = /* @__PURE__ */ G({
  __name: "ImportSection",
  setup(t) {
    const c = x(null), s = x(!1), i = x(!1), g = x(!1), h = x(""), u = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), v = x({
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
    }), b = F(() => u.value.includeWorkflows || u.value.includeModels || u.value.includeNodes || u.value.includeGitHistory);
    function z(V) {
      c.value = V;
    }
    function y() {
      c.value = null, i.value = !1, g.value = !1, h.value = "";
    }
    function $() {
      y(), s.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function k() {
      if (c.value) {
        s.value = !0, i.value = !1;
        try {
          const V = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${v.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${v.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${v.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const D of V)
            f.value = D, await new Promise((S) => setTimeout(S, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((D) => setTimeout(D, 500)), g.value = !0, h.value = `Successfully imported ${v.value.workflows.length} workflows, ${v.value.models.length} models, and ${v.value.nodes.length} custom nodes.`;
        } catch (V) {
          g.value = !1, h.value = V instanceof Error ? V.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function R(V) {
      return V < 1024 ? `${V} B` : V < 1024 * 1024 ? `${(V / 1024).toFixed(1)} KB` : V < 1024 * 1024 * 1024 ? `${(V / (1024 * 1024)).toFixed(1)} MB` : `${(V / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (V, D) => (o(), p(fe, null, {
      header: a(() => [
        d(ge, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", kc, [
          d(Mr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: z
          }),
          e("div", $c, [
            d(pe, null, {
              default: a(() => [...D[5] || (D[5] = [
                m("How to Import", -1)
              ])]),
              _: 1
            }),
            D[6] || (D[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !s.value && !i.value ? (o(), n("div", _c, [
          e("div", Cc, [
            e("div", xc, [
              D[7] || (D[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Sc, [
                e("div", Ec, l(c.value.name), 1),
                e("div", Ic, l(R(c.value.size)), 1)
              ])
            ]),
            d(U, {
              variant: "ghost",
              size: "sm",
              onClick: y
            }, {
              default: a(() => [...D[8] || (D[8] = [
                m(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          d(rc, {
            "source-environment": v.value.sourceEnvironment,
            workflows: v.value.workflows,
            models: v.value.models,
            nodes: v.value.nodes,
            "git-branch": v.value.gitBranch,
            "git-commit": v.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          d(bc, {
            "conflict-mode": u.value.conflictMode,
            "onUpdate:conflictMode": D[0] || (D[0] = (S) => u.value.conflictMode = S),
            "include-workflows": u.value.includeWorkflows,
            "onUpdate:includeWorkflows": D[1] || (D[1] = (S) => u.value.includeWorkflows = S),
            "include-models": u.value.includeModels,
            "onUpdate:includeModels": D[2] || (D[2] = (S) => u.value.includeModels = S),
            "include-nodes": u.value.includeNodes,
            "onUpdate:includeNodes": D[3] || (D[3] = (S) => u.value.includeNodes = S),
            "include-git-history": u.value.includeGitHistory,
            "onUpdate:includeGitHistory": D[4] || (D[4] = (S) => u.value.includeGitHistory = S)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !u.value.includeModels && v.value.models.length > 0 ? (o(), p(Be, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${v.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", zc, [
            d(U, {
              variant: "primary",
              size: "md",
              disabled: !b.value,
              onClick: k
            }, {
              default: a(() => [...D[9] || (D[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                m(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            d(U, {
              variant: "secondary",
              size: "md",
              onClick: y
            }, {
              default: a(() => [...D[10] || (D[10] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Lc, [
          e("div", Mc, [
            D[11] || (D[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Tc, [
              e("div", Nc, l(f.value.message), 1),
              e("div", Dc, l(f.value.detail), 1)
            ])
          ]),
          e("div", Bc, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Rc, l(f.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Uc, [
          e("div", {
            class: Y(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Oc, [
            e("div", Vc, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Pc, l(h.value), 1)
          ]),
          e("div", Ac, [
            d(U, {
              variant: "primary",
              size: "md",
              onClick: $
            }, {
              default: a(() => [...D[12] || (D[12] = [
                m(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]),
      _: 1
    }));
  }
}), Fc = /* @__PURE__ */ j(Wc, [["__scopeId", "data-v-18e18eb5"]]), Hc = { class: "header-info" }, Gc = { class: "commit-hash" }, jc = {
  key: 0,
  class: "commit-refs"
}, Kc = { class: "commit-message" }, qc = { class: "commit-date" }, Yc = {
  key: 0,
  class: "loading"
}, Jc = {
  key: 1,
  class: "changes-section"
}, Xc = { class: "stats-row" }, Qc = { class: "stat" }, Zc = { class: "stat insertions" }, ed = { class: "stat deletions" }, td = {
  key: 0,
  class: "change-group"
}, od = {
  key: 1,
  class: "change-group"
}, sd = {
  key: 0,
  class: "version"
}, ad = {
  key: 2,
  class: "change-group"
}, nd = { class: "change-item" }, ld = /* @__PURE__ */ G({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: s } = me(), i = x(null), g = x(!0), h = F(() => {
      if (!i.value) return !1;
      const f = i.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = F(() => {
      if (!i.value) return !1;
      const f = i.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return ue(async () => {
      try {
        i.value = await s(c.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (f, v) => (o(), p(Ze, {
      size: "md",
      "show-close-button": !1,
      onClose: v[3] || (v[3] = (b) => f.$emit("close"))
    }, {
      header: a(() => {
        var b, z, y, $;
        return [
          e("div", Hc, [
            v[4] || (v[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Gc, l(((b = i.value) == null ? void 0 : b.short_hash) || t.commit.short_hash || ((z = t.commit.hash) == null ? void 0 : z.slice(0, 7))), 1),
            ($ = (y = i.value) == null ? void 0 : y.refs) != null && $.length ? (o(), n("span", jc, [
              (o(!0), n(W, null, q(i.value.refs, (k) => (o(), n("span", {
                key: k,
                class: "ref-badge"
              }, l(k), 1))), 128))
            ])) : r("", !0)
          ]),
          d(ce, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (k) => f.$emit("close"))
          }, {
            default: a(() => [...v[5] || (v[5] = [
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
        var b, z;
        return [
          e("div", Kc, l(((b = i.value) == null ? void 0 : b.message) || t.commit.message), 1),
          e("div", qc, l(((z = i.value) == null ? void 0 : z.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", Yc, "Loading details...")) : i.value ? (o(), n("div", Jc, [
            e("div", Xc, [
              e("span", Qc, l(i.value.stats.files_changed) + " files", 1),
              e("span", Zc, "+" + l(i.value.stats.insertions), 1),
              e("span", ed, "-" + l(i.value.stats.deletions), 1)
            ]),
            h.value ? (o(), n("div", td, [
              d(Te, { variant: "section" }, {
                default: a(() => [...v[6] || (v[6] = [
                  m("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, q(i.value.changes.workflows.added, (y) => (o(), n("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                v[7] || (v[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(y), 1)
              ]))), 128)),
              (o(!0), n(W, null, q(i.value.changes.workflows.modified, (y) => (o(), n("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                v[8] || (v[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(y), 1)
              ]))), 128)),
              (o(!0), n(W, null, q(i.value.changes.workflows.deleted, (y) => (o(), n("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                v[9] || (v[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(y), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (o(), n("div", od, [
              d(Te, { variant: "section" }, {
                default: a(() => [...v[10] || (v[10] = [
                  m("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, q(i.value.changes.nodes.added, (y) => (o(), n("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                v[11] || (v[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(y.name), 1),
                y.version ? (o(), n("span", sd, "(" + l(y.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (o(!0), n(W, null, q(i.value.changes.nodes.removed, (y) => (o(), n("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                v[12] || (v[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(y.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", ad, [
              d(Te, { variant: "section" }, {
                default: a(() => [...v[13] || (v[13] = [
                  m("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", nd, [
                v[14] || (v[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (b) => f.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...v[15] || (v[15] = [
            m(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: "primary",
          onClick: v[2] || (v[2] = (b) => f.$emit("checkout", t.commit))
        }, {
          default: a(() => [...v[16] || (v[16] = [
            m(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), id = /* @__PURE__ */ j(ld, [["__scopeId", "data-v-d256ff6d"]]), rd = { class: "dialog-message" }, cd = {
  key: 0,
  class: "dialog-details"
}, dd = {
  key: 1,
  class: "dialog-warning"
}, ud = /* @__PURE__ */ G({
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
    return (c, s) => (o(), p(Ze, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => c.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", rd, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", cd, [
          (o(!0), n(W, null, q(t.details, (i, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (o(), n("p", dd, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          m(" " + l(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => c.$emit("cancel"))
        }, {
          default: a(() => [
            m(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), p(ce, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => c.$emit("secondary"))
        }, {
          default: a(() => [
            m(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        d(ce, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
        }, {
          default: a(() => [
            m(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), md = /* @__PURE__ */ j(ud, [["__scopeId", "data-v-3670b9f5"]]), vd = { class: "base-textarea-wrapper" }, fd = ["value", "rows", "placeholder", "disabled", "maxlength"], gd = {
  key: 0,
  class: "base-textarea-count"
}, hd = /* @__PURE__ */ G({
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
    return (c, s) => (o(), n("div", vd, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Se(ve((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Se(ve((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, fd),
      t.showCharCount && t.maxLength ? (o(), n("div", gd, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), pt = /* @__PURE__ */ j(hd, [["__scopeId", "data-v-5516e6fc"]]), pd = { class: "popover-header" }, yd = { class: "popover-body" }, wd = {
  key: 0,
  class: "changes-summary"
}, bd = {
  key: 0,
  class: "change-item"
}, kd = {
  key: 1,
  class: "change-item"
}, $d = {
  key: 2,
  class: "change-item"
}, _d = {
  key: 3,
  class: "change-item"
}, Cd = {
  key: 4,
  class: "change-item"
}, xd = {
  key: 1,
  class: "no-changes"
}, Sd = {
  key: 2,
  class: "loading"
}, Ed = { class: "message-section" }, Id = { class: "popover-footer" }, zd = {
  key: 1,
  class: "commit-popover"
}, Ld = { class: "popover-header" }, Md = { class: "popover-body" }, Td = {
  key: 0,
  class: "changes-summary"
}, Nd = {
  key: 0,
  class: "change-item"
}, Dd = {
  key: 1,
  class: "change-item"
}, Bd = {
  key: 2,
  class: "change-item"
}, Rd = {
  key: 3,
  class: "change-item"
}, Ud = {
  key: 4,
  class: "change-item"
}, Od = {
  key: 1,
  class: "no-changes"
}, Vd = {
  key: 2,
  class: "loading"
}, Pd = { class: "message-section" }, Ad = { class: "popover-footer" }, Wd = /* @__PURE__ */ G({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const s = t, i = c, { commit: g } = me(), h = x(""), u = x(!1), f = x(null), v = F(() => {
      if (!s.status) return !1;
      const z = s.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || s.status.has_changes;
    });
    async function b() {
      var z, y, $;
      if (!(!v.value || !h.value.trim() || u.value)) {
        u.value = !0, f.value = null;
        try {
          const k = await g(h.value.trim());
          k.status === "success" ? (f.value = {
            type: "success",
            message: `Committed: ${((z = k.summary) == null ? void 0 : z.new) || 0} new, ${((y = k.summary) == null ? void 0 : y.modified) || 0} modified, ${(($ = k.summary) == null ? void 0 : $.deleted) || 0} deleted`
          }, h.value = "", setTimeout(() => i("committed"), 1e3)) : k.status === "no_changes" ? f.value = { type: "error", message: "No changes to commit" } : f.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          f.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (z, y) => t.asModal ? (o(), p(Re, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: y[4] || (y[4] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: y[3] || (y[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", pd, [
            y[9] || (y[9] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: y[0] || (y[0] = ($) => i("close"))
            }, [...y[8] || (y[8] = [
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
          e("div", yd, [
            t.status && v.value ? (o(), n("div", wd, [
              t.status.workflows.new.length ? (o(), n("div", bd, [
                y[10] || (y[10] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (o(), n("div", kd, [
                y[11] || (y[11] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", $d, [
                y[12] || (y[12] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", _d, [
                y[13] || (y[13] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Cd, [
                y[14] || (y[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0)
            ])) : t.status ? (o(), n("div", xd, " No changes to commit ")) : (o(), n("div", Sd, " Loading... ")),
            e("div", Ed, [
              d(pt, {
                modelValue: h.value,
                "onUpdate:modelValue": y[1] || (y[1] = ($) => h.value = $),
                placeholder: v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || u.value,
                rows: 3,
                onCtrlEnter: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            f.value ? (o(), n("div", {
              key: 3,
              class: Y(["result", f.value.type])
            }, l(f.value.message), 3)) : r("", !0)
          ]),
          e("div", Id, [
            d(ce, {
              variant: "secondary",
              onClick: y[2] || (y[2] = ($) => i("close"))
            }, {
              default: a(() => [...y[15] || (y[15] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(ce, {
              variant: "primary",
              disabled: !v.value || !h.value.trim() || u.value,
              loading: u.value,
              onClick: b
            }, {
              default: a(() => [
                m(l(u.value ? "Committing..." : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", zd, [
      e("div", Ld, [
        y[17] || (y[17] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: y[5] || (y[5] = ($) => i("close"))
        }, [...y[16] || (y[16] = [
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
      e("div", Md, [
        t.status && v.value ? (o(), n("div", Td, [
          t.status.workflows.new.length ? (o(), n("div", Nd, [
            y[18] || (y[18] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Dd, [
            y[19] || (y[19] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Bd, [
            y[20] || (y[20] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Rd, [
            y[21] || (y[21] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Ud, [
            y[22] || (y[22] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0)
        ])) : t.status ? (o(), n("div", Od, " No changes to commit ")) : (o(), n("div", Vd, " Loading... ")),
        e("div", Pd, [
          d(pt, {
            modelValue: h.value,
            "onUpdate:modelValue": y[6] || (y[6] = ($) => h.value = $),
            placeholder: v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || u.value,
            rows: 3,
            onCtrlEnter: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        f.value ? (o(), n("div", {
          key: 3,
          class: Y(["result", f.value.type])
        }, l(f.value.message), 3)) : r("", !0)
      ]),
      e("div", Ad, [
        d(ce, {
          variant: "secondary",
          onClick: y[7] || (y[7] = ($) => i("close"))
        }, {
          default: a(() => [...y[23] || (y[23] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: "primary",
          disabled: !v.value || !h.value.trim() || u.value,
          loading: u.value,
          onClick: b
        }, {
          default: a(() => [
            m(l(u.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ j(Wd, [["__scopeId", "data-v-a8e2ae3a"]]), Fd = { class: "modal-header" }, Hd = { class: "modal-body" }, Gd = { class: "switch-message" }, jd = { class: "switch-details" }, Kd = { class: "modal-actions" }, qd = /* @__PURE__ */ G({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), p(Re, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Fd, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Hd, [
            e("p", Gd, [
              s[6] || (s[6] = m(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = m(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = m("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", jd, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Kd, [
            d(U, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(U, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                m(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Yd = /* @__PURE__ */ j(qd, [["__scopeId", "data-v-e9c5253e"]]), Jd = { class: "progress-bar" }, Xd = /* @__PURE__ */ G({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, s = F(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, g) => (o(), n("div", Jd, [
      e("div", {
        class: Y(["progress-fill", t.variant]),
        style: qe({ width: s.value })
      }, null, 6)
    ]));
  }
}), Qd = /* @__PURE__ */ j(Xd, [["__scopeId", "data-v-1beb0512"]]), Zd = {
  key: 0,
  class: "modal-overlay"
}, eu = { class: "modal-content" }, tu = { class: "modal-body" }, ou = { class: "progress-info" }, su = { class: "progress-percentage" }, au = { class: "progress-state" }, nu = { class: "switch-steps" }, lu = { class: "step-icon" }, iu = { class: "step-label" }, ru = /* @__PURE__ */ G({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, s = F(() => {
      const h = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || h[c.state] || c.state;
    }), i = F(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = F(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = h.findIndex((f) => f.state === c.state);
      return h.map((f, v) => {
        let b = "pending", z = "○";
        return v < u ? (b = "completed", z = "✓") : v === u && (b = "active", z = "⟳"), {
          ...f,
          status: b,
          icon: z
        };
      });
    });
    return (h, u) => (o(), p(Re, { to: "body" }, [
      t.show ? (o(), n("div", Zd, [
        e("div", eu, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", tu, [
            d(Qd, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", ou, [
              e("div", su, l(t.progress) + "%", 1),
              e("div", au, l(s.value), 1)
            ]),
            e("div", nu, [
              (o(!0), n(W, null, q(g.value, (f) => (o(), n("div", {
                key: f.state,
                class: Y(["switch-step", f.status])
              }, [
                e("span", lu, l(f.icon), 1),
                e("span", iu, l(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), cu = /* @__PURE__ */ j(ru, [["__scopeId", "data-v-768a5078"]]), du = { class: "modal-header" }, uu = { class: "modal-body" }, mu = {
  key: 0,
  class: "node-section"
}, vu = { class: "node-list" }, fu = {
  key: 1,
  class: "node-section"
}, gu = { class: "node-list" }, hu = { class: "modal-actions" }, pu = /* @__PURE__ */ G({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), p(Re, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", du, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", uu, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", mu, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", vu, [
                (o(!0), n(W, null, q(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", fu, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", gu, [
                (o(!0), n(W, null, q(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + l(i), 1))), 128))
              ])
            ])) : r("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", hu, [
            d(U, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                m(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(U, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                m(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), yu = /* @__PURE__ */ j(pu, [["__scopeId", "data-v-7cad7518"]]);
async function He(t, c = {}, s = 5e3) {
  const i = new AbortController(), g = setTimeout(() => i.abort(), s);
  try {
    const h = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(g), h;
  } catch (h) {
    throw clearTimeout(g), h.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : h;
  }
}
function wu() {
  const t = x(null);
  async function c() {
    try {
      const u = await He(
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
  async function s() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await He(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await He(
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
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await He(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function h() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await He(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: s,
    getStatus: i,
    restart: g,
    kill: h
  };
}
const bu = { class: "comfygit-panel" }, ku = { class: "panel-header" }, $u = { class: "header-left" }, _u = {
  key: 0,
  class: "header-info"
}, Cu = { class: "header-actions" }, xu = { class: "env-switcher" }, Su = {
  key: 0,
  class: "header-info"
}, Eu = { class: "branch-name" }, Iu = { class: "panel-main" }, zu = { class: "sidebar" }, Lu = { class: "sidebar-section" }, Mu = { class: "sidebar-section" }, Tu = { class: "sidebar-section" }, Nu = { class: "content-area" }, Du = {
  key: 0,
  class: "error-message"
}, Bu = {
  key: 1,
  class: "loading"
}, Ru = { class: "dialog-content env-selector-dialog" }, Uu = { class: "dialog-header" }, Ou = { class: "dialog-body" }, Vu = { class: "env-list" }, Pu = { class: "env-info" }, Au = { class: "env-name-row" }, Wu = { class: "env-indicator" }, Fu = { class: "env-name" }, Hu = {
  key: 0,
  class: "env-branch"
}, Gu = {
  key: 1,
  class: "current-label"
}, ju = { class: "env-stats" }, Ku = ["onClick"], qu = { class: "toast-container" }, Yu = { class: "toast-icon" }, Ju = { class: "toast-message" }, Xu = /* @__PURE__ */ G({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const s = c, {
      getStatus: i,
      getHistory: g,
      getBranches: h,
      checkout: u,
      createBranch: f,
      switchBranch: v,
      getEnvironments: b,
      switchEnvironment: z,
      getSwitchProgress: y,
      syncEnvironmentManually: $
    } = me(), k = wu(), R = x(null), V = x([]), D = x([]), S = x([]), T = F(() => S.value.find((O) => O.is_current)), P = x(!1), N = x(null), L = x(null), w = x(!1), E = x(!1), C = x(!1), M = x(""), B = x({ state: "idle", progress: 0, message: "" });
    let K = null, A = null;
    const I = x("status"), J = x("this-env");
    function oe(O, _) {
      I.value = O, J.value = _;
    }
    function Ue(O) {
      const se = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[O];
      se && oe(se.view, se.section);
    }
    function Oe() {
      oe("branches", "this-env");
    }
    const ie = x(null), _e = x(!1), X = x(!1), Le = x([]);
    let et = 0;
    function ne(O, _ = "info", se = 3e3) {
      const le = ++et;
      return Le.value.push({ id: le, message: O, type: _ }), se > 0 && setTimeout(() => {
        Le.value = Le.value.filter((ye) => ye.id !== le);
      }, se), le;
    }
    function $e(O) {
      Le.value = Le.value.filter((_) => _.id !== O);
    }
    function tt(O) {
      switch (O) {
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
    const H = F(() => {
      if (!R.value) return "neutral";
      const O = R.value.workflows, _ = O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || R.value.has_changes;
      return R.value.comparison.is_synced ? _ ? "warning" : "success" : "error";
    });
    F(() => R.value ? H.value === "success" ? "All synced" : H.value === "warning" ? "Uncommitted changes" : H.value === "error" ? "Not synced" : "" : "");
    async function Q() {
      P.value = !0, N.value = null;
      try {
        const [O, _, se, le] = await Promise.all([
          i(),
          g(),
          h(),
          b()
        ]);
        R.value = O, V.value = _.commits, D.value = se.branches, S.value = le, s("statusUpdate", O);
      } catch (O) {
        N.value = O instanceof Error ? O.message : "Failed to load status", R.value = null, V.value = [], D.value = [];
      } finally {
        P.value = !1;
      }
    }
    function ae(O) {
      L.value = O;
    }
    async function Fe(O) {
      var se;
      L.value = null;
      const _ = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      ie.value = {
        title: _ ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: _ ? "You have uncommitted changes that will be lost." : `Checkout commit ${O.short_hash || ((se = O.hash) == null ? void 0 : se.slice(0, 7))}?`,
        details: _ ? ft() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: _ ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: _,
        onConfirm: async () => {
          var we;
          ie.value = null;
          const le = ne(`Checking out ${O.short_hash || ((we = O.hash) == null ? void 0 : we.slice(0, 7))}...`, "info", 0), ye = await u(O.hash, _);
          $e(le), ye.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ye.message || "Checkout failed", "error");
        }
      };
    }
    async function Ye(O) {
      const _ = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      ie.value = {
        title: _ ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: _ ? "You have uncommitted changes." : `Switch to branch "${O}"?`,
        details: _ ? ft() : void 0,
        warning: _ ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: _ ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null;
          const se = ne(`Switching to ${O}...`, "info", 0), le = await v(O, _);
          $e(se), le.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(le.message || "Branch switch failed", "error");
        }
      };
    }
    async function zt(O) {
      const _ = ne(`Creating branch ${O}...`, "info", 0), se = await f(O);
      $e(_), se.status === "success" ? (ne(`Branch "${O}" created`, "success"), await Q()) : ne(se.message || "Failed to create branch", "error");
    }
    async function Lt(O) {
      L.value = null;
      const _ = prompt("Enter branch name:");
      if (_) {
        const se = ne(`Creating branch ${_}...`, "info", 0), le = await f(_, O.hash);
        $e(se), le.status === "success" ? (ne(`Branch "${_}" created from ${O.short_hash}`, "success"), await Q()) : ne(le.message || "Failed to create branch", "error");
      }
    }
    async function vt(O) {
      w.value = !1, M.value = O, E.value = !0;
    }
    async function Mt() {
      E.value = !1, C.value = !0, B.value = {
        progress: 10,
        state: Je(10),
        message: Xe(10)
      };
      try {
        await z(M.value), Tt(), Nt();
      } catch (O) {
        Ne(), C.value = !1, ne(`Failed to initiate switch: ${O instanceof Error ? O.message : "Unknown error"}`, "error"), B.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Je(O) {
      return O >= 100 ? "complete" : O >= 80 ? "validating" : O >= 60 ? "starting" : O >= 30 ? "syncing" : "preparing";
    }
    function Xe(O) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Je(O)] || "";
    }
    function Tt() {
      if (A) return;
      let O = 10;
      const _ = 60, se = 5e3, le = 100, ye = (_ - O) / (se / le);
      A = window.setInterval(() => {
        if (O += ye, O >= _ && (O = _, Ne()), B.value.progress < _) {
          const we = Math.floor(O);
          B.value = {
            progress: we,
            state: Je(we),
            message: Xe(we)
          };
        }
      }, le);
    }
    function Ne() {
      A && (clearInterval(A), A = null);
    }
    function Nt() {
      K || (K = window.setInterval(async () => {
        try {
          let O = await k.getStatus();
          if ((!O || O.state === "idle") && (O = await y()), !O)
            return;
          const _ = O.progress || 0;
          _ >= 60 && Ne();
          const se = Math.max(_, B.value.progress), le = O.state && O.state !== "idle" && O.state !== "unknown", ye = le ? O.state : Je(se), we = le && O.message || Xe(se);
          B.value = {
            state: ye,
            progress: se,
            message: we
          }, O.state === "complete" ? (Ne(), ot(), C.value = !1, ne(`✓ Switched to ${M.value}`, "success"), await Q(), M.value = "") : O.state === "rolled_back" ? (Ne(), ot(), C.value = !1, ne("Switch failed, restored previous environment", "warning"), M.value = "") : O.state === "critical_failure" && (Ne(), ot(), C.value = !1, ne(`Critical error during switch: ${O.message}`, "error"), M.value = "");
        } catch (O) {
          console.error("Failed to poll switch progress:", O);
        }
      }, 1e3));
    }
    function ot() {
      Ne(), K && (clearInterval(K), K = null);
    }
    function Dt() {
      E.value = !1, M.value = "";
    }
    async function Bt() {
      _e.value = !1, await Q(), ne("✓ Changes committed", "success");
    }
    async function Rt() {
      X.value = !1;
      const O = ne("Syncing environment...", "info", 0);
      try {
        const _ = await $("skip", !0);
        if ($e(O), _.status === "success") {
          const se = [];
          _.nodes_installed.length && se.push(`${_.nodes_installed.length} installed`), _.nodes_removed.length && se.push(`${_.nodes_removed.length} removed`);
          const le = se.length ? `: ${se.join(", ")}` : "";
          ne(`✓ Environment synced${le}`, "success"), await Q();
        } else {
          const se = _.errors.length ? _.errors.join("; ") : _.message;
          ne(`Sync failed: ${se}`, "error");
        }
      } catch (_) {
        $e(O), ne(`Sync error: ${_ instanceof Error ? _.message : "Unknown error"}`, "error");
      }
    }
    async function Ut(O) {
      const _ = ne(`Creating environment "${O}"...`, "info", 0);
      $e(_), ne("Environment creation not yet implemented", "warning");
    }
    async function Ot(O) {
      const _ = ne(`Deleting environment "${O}"...`, "info", 0);
      $e(_), ne("Environment deletion not yet implemented", "warning");
    }
    function Vt(O) {
      ne(`Viewing details for "${O}"`, "info"), oe("models-env", "this-env");
    }
    function ft() {
      if (!R.value) return [];
      const O = [], _ = R.value.workflows;
      return _.new.length && O.push(`${_.new.length} new workflow(s)`), _.modified.length && O.push(`${_.modified.length} modified workflow(s)`), _.deleted.length && O.push(`${_.deleted.length} deleted workflow(s)`), O;
    }
    return ue(Q), (O, _) => {
      var se, le, ye, we;
      return o(), n("div", bu, [
        e("div", ku, [
          e("div", $u, [
            _[28] || (_[28] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            R.value ? (o(), n("div", _u)) : r("", !0)
          ]),
          e("div", Cu, [
            e("button", {
              class: Y(["icon-btn", { spinning: P.value }]),
              onClick: Q,
              title: "Refresh"
            }, [..._[29] || (_[29] = [
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
              onClick: _[0] || (_[0] = (Z) => s("close")),
              title: "Close"
            }, [..._[30] || (_[30] = [
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
        e("div", xu, [
          _[32] || (_[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: _[1] || (_[1] = (Z) => oe("environments", "all-envs"))
          }, [
            R.value ? (o(), n("div", Su, [
              e("span", null, l(((se = T.value) == null ? void 0 : se.name) || ((le = R.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              e("span", Eu, "(" + l(R.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            _[31] || (_[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Iu, [
          e("div", zu, [
            e("div", Lu, [
              _[33] || (_[33] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "status" && J.value === "this-env" }]),
                onClick: _[2] || (_[2] = (Z) => oe("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "workflows" }]),
                onClick: _[3] || (_[3] = (Z) => oe("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "models-env" }]),
                onClick: _[4] || (_[4] = (Z) => oe("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "branches" }]),
                onClick: _[5] || (_[5] = (Z) => oe("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "history" }]),
                onClick: _[6] || (_[6] = (Z) => oe("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "nodes" }]),
                onClick: _[7] || (_[7] = (Z) => oe("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "debug-env" }]),
                onClick: _[8] || (_[8] = (Z) => oe("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            _[36] || (_[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Mu, [
              _[34] || (_[34] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "environments" }]),
                onClick: _[9] || (_[9] = (Z) => oe("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "model-index" }]),
                onClick: _[10] || (_[10] = (Z) => oe("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "settings" }]),
                onClick: _[11] || (_[11] = (Z) => oe("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "debug-workspace" }]),
                onClick: _[12] || (_[12] = (Z) => oe("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            _[37] || (_[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Tu, [
              _[35] || (_[35] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "export" }]),
                onClick: _[13] || (_[13] = (Z) => oe("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "import" }]),
                onClick: _[14] || (_[14] = (Z) => oe("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Y(["sidebar-item", { active: I.value === "remotes" }]),
                onClick: _[15] || (_[15] = (Z) => oe("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Nu, [
            N.value ? (o(), n("div", Du, l(N.value), 1)) : !R.value && I.value === "status" ? (o(), n("div", Bu, " Loading status... ")) : (o(), n(W, { key: 2 }, [
              I.value === "status" ? (o(), p(wa, {
                key: 0,
                status: R.value,
                onSwitchBranch: Oe,
                onCommitChanges: _[16] || (_[16] = (Z) => _e.value = !0),
                onSyncEnvironment: _[17] || (_[17] = (Z) => X.value = !0),
                onViewWorkflows: _[18] || (_[18] = (Z) => oe("workflows", "this-env")),
                onViewHistory: _[19] || (_[19] = (Z) => oe("history", "this-env")),
                onViewDebug: _[20] || (_[20] = (Z) => oe("debug-env", "this-env")),
                onResolveModels: _[21] || (_[21] = (Z) => oe("workflows", "this-env"))
              }, null, 8, ["status"])) : I.value === "workflows" ? (o(), p(Rl, {
                key: 1,
                onRefresh: Q
              })) : I.value === "models-env" ? (o(), p(Vl, {
                key: 2,
                onNavigate: Ue
              })) : I.value === "branches" ? (o(), p(Da, {
                key: 3,
                branches: D.value,
                current: ((ye = R.value) == null ? void 0 : ye.branch) || null,
                onSwitch: Ye,
                onCreate: zt
              }, null, 8, ["branches", "current"])) : I.value === "history" ? (o(), p(Ga, {
                key: 4,
                commits: V.value,
                onSelect: ae,
                onCheckout: Fe
              }, null, 8, ["commits"])) : I.value === "nodes" ? (o(), p(jl, { key: 5 })) : I.value === "debug-env" ? (o(), p(Ki, { key: 6 })) : I.value === "environments" ? (o(), p(nr, {
                key: 7,
                onSwitch: vt,
                onCreate: Ut,
                onDelete: Ot,
                onViewDetails: Vt
              })) : I.value === "model-index" ? (o(), p(Al, { key: 8 })) : I.value === "settings" ? (o(), p(Fi, { key: 9 })) : I.value === "debug-workspace" ? (o(), p(Gi, { key: 10 })) : I.value === "export" ? (o(), p(gr, { key: 11 })) : I.value === "import" ? (o(), p(Fc, { key: 12 })) : I.value === "remotes" ? (o(), p(xi, { key: 13 })) : r("", !0)
            ], 64))
          ])
        ]),
        L.value ? (o(), p(id, {
          key: 0,
          commit: L.value,
          onClose: _[22] || (_[22] = (Z) => L.value = null),
          onCheckout: Fe,
          onCreateBranch: Lt
        }, null, 8, ["commit"])) : r("", !0),
        ie.value ? (o(), p(md, {
          key: 1,
          title: ie.value.title,
          message: ie.value.message,
          details: ie.value.details,
          warning: ie.value.warning,
          confirmLabel: ie.value.confirmLabel,
          cancelLabel: ie.value.cancelLabel,
          secondaryLabel: ie.value.secondaryLabel,
          secondaryAction: ie.value.secondaryAction,
          destructive: ie.value.destructive,
          onConfirm: ie.value.onConfirm,
          onCancel: _[23] || (_[23] = (Z) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        d(Yd, {
          show: E.value,
          "from-environment": ((we = T.value) == null ? void 0 : we.name) || "unknown",
          "to-environment": M.value,
          onConfirm: Mt,
          onClose: Dt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && R.value ? (o(), p(Ct, {
          key: 2,
          status: R.value,
          "as-modal": !0,
          onClose: _[24] || (_[24] = (Z) => _e.value = !1),
          onCommitted: Bt
        }, null, 8, ["status"])) : r("", !0),
        X.value && R.value ? (o(), p(yu, {
          key: 3,
          show: X.value,
          "mismatch-details": {
            missing_nodes: R.value.comparison.missing_nodes,
            extra_nodes: R.value.comparison.extra_nodes
          },
          onConfirm: Rt,
          onClose: _[25] || (_[25] = (Z) => X.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        d(cu, {
          show: C.value,
          state: B.value.state,
          progress: B.value.progress,
          message: B.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        w.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: _[27] || (_[27] = ve((Z) => w.value = !1, ["self"]))
        }, [
          e("div", Ru, [
            e("div", Uu, [
              _[39] || (_[39] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: _[26] || (_[26] = (Z) => w.value = !1)
              }, [..._[38] || (_[38] = [
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
            e("div", Ou, [
              _[40] || (_[40] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Vu, [
                (o(!0), n(W, null, q(S.value, (Z) => (o(), n("div", {
                  key: Z.name,
                  class: Y(["env-item", { current: Z.is_current }])
                }, [
                  e("div", Pu, [
                    e("div", Au, [
                      e("span", Wu, l(Z.is_current ? "●" : "○"), 1),
                      e("span", Fu, l(Z.name), 1),
                      Z.current_branch ? (o(), n("span", Hu, "(" + l(Z.current_branch) + ")", 1)) : r("", !0),
                      Z.is_current ? (o(), n("span", Gu, "CURRENT")) : r("", !0)
                    ]),
                    e("div", ju, l(Z.workflow_count) + " workflows • " + l(Z.node_count) + " nodes ", 1)
                  ]),
                  Z.is_current ? r("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (cm) => vt(Z.name)
                  }, " SWITCH ", 8, Ku))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        e("div", qu, [
          d(Ft, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(W, null, q(Le.value, (Z) => (o(), n("div", {
                key: Z.id,
                class: Y(["toast", Z.type])
              }, [
                e("span", Yu, l(tt(Z.type)), 1),
                e("span", Ju, l(Z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Qu = /* @__PURE__ */ j(Xu, [["__scopeId", "data-v-0bc7ca73"]]), Zu = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', em = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', tm = {
  comfy: Zu,
  phosphor: em
}, ut = "comfy", xt = "comfygit-theme";
let De = null, St = ut;
function om() {
  try {
    const t = localStorage.getItem(xt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ut;
}
function Et(t = ut) {
  De && De.remove(), De = document.createElement("style"), De.id = "comfygit-theme-styles", De.setAttribute("data-theme", t), De.textContent = tm[t], document.head.appendChild(De), document.body.setAttribute("data-comfygit-theme", t), St = t;
  try {
    localStorage.setItem(xt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function sm() {
  return St;
}
function am(t) {
  Et(t);
}
const mt = document.createElement("link");
mt.rel = "stylesheet";
mt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(mt);
const nm = om();
Et(nm);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), am(t);
  },
  getTheme: () => {
    const t = sm();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let be = null, he = null, je = null;
const Pe = x(null);
async function ct() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (Pe.value = await c.json());
  } catch {
  }
}
function lm() {
  if (!Pe.value) return !1;
  const t = Pe.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Pe.value.has_changes;
}
function im() {
  be && be.remove(), be = document.createElement("div"), be.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", be.appendChild(t), be.addEventListener("click", (i) => {
    i.target === be && lt();
  });
  const c = (i) => {
    i.key === "Escape" && (lt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), bt({
    render: () => kt(Qu, {
      onClose: lt,
      onStatusUpdate: (i) => {
        Pe.value = i, Qe();
      }
    })
  }).mount(t), document.body.appendChild(be);
}
function lt() {
  be && (be.remove(), be = null);
}
function rm(t) {
  Ge(), he = document.createElement("div"), he.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  he.style.position = "fixed", he.style.top = `${c.bottom + 8}px`, he.style.right = `${window.innerWidth - c.right}px`, he.style.zIndex = "10001";
  const s = (g) => {
    he && !he.contains(g.target) && g.target !== t && (Ge(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (g) => {
    g.key === "Escape" && (Ge(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), je = bt({
    render: () => kt(Ct, {
      status: Pe.value,
      onClose: Ge,
      onCommitted: () => {
        Ge(), ct().then(Qe);
      }
    })
  }), je.mount(he), document.body.appendChild(he);
}
function Ge() {
  je && (je.unmount(), je = null), he && (he.remove(), he = null);
}
let xe = null;
function Qe() {
  if (!xe) return;
  const t = xe.querySelector(".commit-indicator");
  t && (t.style.display = lm() ? "block" : "none");
}
const It = document.createElement("style");
It.textContent = `
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
document.head.appendChild(It);
st.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, i;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = im, xe = document.createElement("button"), xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", xe.innerHTML = 'Commit <span class="commit-indicator"></span>', xe.title = "Quick Commit", xe.onclick = () => rm(xe), t.appendChild(c), t.appendChild(xe), (i = (s = st.menu) == null ? void 0 : s.settingsGroup) != null && i.element && (st.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ct(), Qe(), setInterval(async () => {
      await ct(), Qe();
    }, 3e4);
  }
});
