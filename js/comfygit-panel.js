import { app as tt } from "../../scripts/app.js";
import { defineComponent as J, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as ie, createBlock as _, resolveDynamicComponent as It, normalizeClass as te, withCtx as a, toDisplayString as l, createVNode as v, createTextVNode as g, computed as D, Fragment as G, renderList as ee, normalizeStyle as Ze, ref as E, onMounted as be, watch as Et, Teleport as ze, withModifiers as ye, Transition as so, withKeys as Ge, onUnmounted as no, reactive as At, readonly as ao, unref as ce, resolveComponent as lo, createSlots as Vt, TransitionGroup as io, createApp as zt, h as Mt } from "vue";
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
        ie(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", uo, [
        ie(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", mo, [
        ie(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", vo, [
        ie(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), X = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, f] of d)
    s[i] = f;
  return s;
}, _e = /* @__PURE__ */ X(fo, [["__scopeId", "data-v-21565df9"]]), go = {
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
    return (d, s) => (o(), _(It(`h${t.level}`), {
      class: te(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", go, l(t.prefix), 1)) : (o(), n("span", ho)),
        ie(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yo = /* @__PURE__ */ X(po, [["__scopeId", "data-v-c3875efc"]]), wo = ["title"], bo = ["width", "height"], ko = /* @__PURE__ */ J({
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
}), Ft = /* @__PURE__ */ X(ko, [["__scopeId", "data-v-6fc7f16d"]]), _o = { class: "header-left" }, $o = {
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
      class: te(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", _o, [
        v(yo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            g(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), _(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", $o, [
        ie(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), $e = /* @__PURE__ */ X(Co, [["__scopeId", "data-v-55a62cd6"]]), xo = {
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
    return (d, s) => (o(), _(It(`h${t.level}`), {
      class: te(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        ie(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", xo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", So, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Se = /* @__PURE__ */ X(Io, [["__scopeId", "data-v-559361eb"]]), Eo = { class: "status-grid" }, zo = { class: "status-grid__column" }, Mo = { class: "status-grid__title" }, Lo = { class: "status-grid__column status-grid__column--right" }, To = { class: "status-grid__title" }, Ro = /* @__PURE__ */ J({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Eo, [
      e("div", zo, [
        e("h4", Mo, l(t.leftTitle), 1),
        ie(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Lo, [
        e("h4", To, l(t.rightTitle), 1),
        ie(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), No = /* @__PURE__ */ X(Ro, [["__scopeId", "data-v-fe556068"]]), Do = {
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
    const d = t, s = D(() => `status-item--${d.variant}`);
    return (i, f) => (o(), n("div", {
      class: te(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Do, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Uo, l(t.count), 1)) : c("", !0),
      e("span", Oo, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ X(Bo, [["__scopeId", "data-v-6f929183"]]), Po = { class: "issue-card__header" }, Ao = { class: "issue-card__icon" }, Vo = { class: "issue-card__title" }, Fo = {
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
    const d = t, s = D(() => `issue-card--${d.severity}`);
    return (i, f) => (o(), n("div", {
      class: te(["issue-card", s.value])
    }, [
      e("div", Po, [
        e("span", Ao, l(t.icon), 1),
        e("h4", Vo, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Fo, [
        t.description ? (o(), n("p", Wo, l(t.description), 1)) : c("", !0),
        ie(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Go, [
        (o(!0), n(G, null, ee(t.items, (y, h) => (o(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", jo, [
        ie(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ X(Ho, [["__scopeId", "data-v-df6aa348"]]), Ko = ["type", "disabled"], qo = {
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
      class: te(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", qo)) : c("", !0),
      t.loading ? c("", !0) : ie(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ko));
  }
}), K = /* @__PURE__ */ X(Jo, [["__scopeId", "data-v-772abe47"]]), Xo = { class: "empty-state" }, Yo = {
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
    return (d, s) => (o(), n("div", Xo, [
      t.icon ? (o(), n("div", Yo, l(t.icon), 1)) : c("", !0),
      e("p", Qo, l(t.message), 1),
      t.actionLabel ? (o(), _(K, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          g(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ X(Zo, [["__scopeId", "data-v-4466284f"]]), es = { class: "branch-indicator" }, ts = { class: "branch-indicator__info" }, os = { class: "branch-indicator__label" }, ss = { class: "branch-indicator__name" }, ns = {
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
        ie(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ X(ds, [["__scopeId", "data-v-cb8dd50e"]]), us = /* @__PURE__ */ J({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: te(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      ie(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ X(us, [["__scopeId", "data-v-75e9eeb8"]]), ms = /* @__PURE__ */ J({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: te(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ie(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ X(ms, [["__scopeId", "data-v-2f186e4c"]]), vs = { class: "detail-row" }, fs = /* @__PURE__ */ J({
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
          g(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), _(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          g(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ie(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), se = /* @__PURE__ */ X(fs, [["__scopeId", "data-v-ef15664a"]]), gs = { class: "modal-header" }, hs = { class: "modal-body" }, ps = { class: "status-section" }, ys = {
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
}, Rs = { class: "workflow-group-header" }, Ns = { class: "workflow-group-title" }, Ds = { class: "workflow-list" }, Us = { class: "workflow-name" }, Os = {
  key: 3,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, As = { class: "workflow-list" }, Vs = { class: "workflow-name" }, Fs = {
  key: 4,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, Ks = {
  key: 5,
  class: "workflow-group"
}, qs = { class: "workflow-group-title" }, Js = { class: "expand-icon" }, Xs = {
  key: 0,
  class: "workflow-list"
}, Ys = { class: "workflow-name" }, Qs = {
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
}, Rn = { class: "modal-actions" }, Nn = /* @__PURE__ */ J({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, s = E(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, ($, I) => {
      console.log("StatusDetailModal show prop changed from", I, "to", $);
    }, { immediate: !0 });
    const i = D(() => {
      var $, I, z;
      return ((z = (I = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : z.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), f = D(() => {
      var $, I, z;
      return ((z = (I = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : z.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), y = D(() => {
      var $, I, z;
      return ((z = (I = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : I.synced) == null ? void 0 : z.filter((S) => {
        var C, A, T;
        const k = (T = (A = (C = d.status) == null ? void 0 : C.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : T.find((w) => w.name === S);
        return !k || k.status !== "broken";
      })) || [];
    }), h = D(() => {
      var $, I, z, S, k;
      return ($ = d.status) != null && $.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || (((z = d.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((S = d.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = D(() => {
      var I, z, S;
      const $ = (I = d.status) == null ? void 0 : I.git_changes;
      return $ ? (((z = $.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((S = $.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || $.workflow_changes || $.has_other_changes : !1;
    }), r = D(() => {
      var $, I, z, S, k, C;
      return !h.value && !m.value && ((I = ($ = d.status) == null ? void 0 : $.comparison) == null ? void 0 : I.is_synced) && (((z = d.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((C = (k = (S = d.status) == null ? void 0 : S.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), u = D(() => {
      var I, z;
      const $ = (z = (I = d.status) == null ? void 0 : I.git_changes) == null ? void 0 : z.workflow_changes;
      return $ ? typeof $ == "number" ? $ : Object.keys($).length : 0;
    });
    function b($) {
      return typeof $ == "string" ? $ : $.name;
    }
    function p($) {
      return typeof $ == "object" && $.is_development === !0;
    }
    return ($, I) => {
      var z, S, k, C, A, T, w, M, x, O, R, N, U, j, H, Q, V, P, F, pe, Ie, fe;
      return o(), _(ze, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[5] || (I[5] = (Z) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[4] || (I[4] = ye(() => {
            }, ["stop"]))
          }, [
            e("div", gs, [
              I[6] || (I[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (Z) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", hs, [
              e("div", ps, [
                v(Se, { level: "4" }, {
                  default: a(() => [...I[7] || (I[7] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                v(se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), n("div", ys, [
                e("div", ws, [
                  v(Se, { level: "4" }, {
                    default: a(() => [...I[8] || (I[8] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (Z) => $.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", bs, [
                  e("div", ks, [
                    I[9] || (I[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), n(G, null, ee(i.value, (Z) => (o(), n("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(Z.name), 1),
                      e("span", xs, l(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), n("div", Ss, [
                  e("div", Is, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", zs, [
                    (o(!0), n(G, null, ee(f.value, (Z) => (o(), n("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ms, l(Z.name), 1),
                      e("span", Ls, l(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = (z = t.status.workflows) == null ? void 0 : z.new) != null && S.length ? (o(), n("div", Ts, [
                  e("div", Rs, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ns, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ds, [
                    (o(!0), n(G, null, ee(t.status.workflows.new, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Us, l(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (C = (k = t.status.workflows) == null ? void 0 : k.modified) != null && C.length ? (o(), n("div", Os, [
                  e("div", Bs, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ps, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", As, [
                    (o(!0), n(G, null, ee(t.status.workflows.modified, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (A = t.status.workflows) == null ? void 0 : A.deleted) != null && T.length ? (o(), n("div", Fs, [
                  e("div", Ws, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Gs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), n(G, null, ee(t.status.workflows.deleted, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, l(Z), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", Ks, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (Z) => s.value = !s.value)
                  }, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", qs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Js, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Xs, [
                    (o(!0), n(G, null, ee(y.value, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Ys, l(Z), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), n("div", Qs, [
                v(Se, { level: "4" }, {
                  default: a(() => [...I[15] || (I[15] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (w = t.status.git_changes) == null ? void 0 : w.nodes_added) != null && M.length ? (o(), n("div", Zs, [
                  e("div", en, [
                    I[16] || (I[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", tn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), n(G, null, ee(t.status.git_changes.nodes_added, (Z) => (o(), n("div", {
                      key: b(Z),
                      class: "change-item"
                    }, [
                      e("span", sn, l(b(Z)), 1),
                      p(Z) ? (o(), n("span", nn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (O = (x = t.status.git_changes) == null ? void 0 : x.nodes_removed) != null && O.length ? (o(), n("div", an, [
                  e("div", ln, [
                    I[17] || (I[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", rn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), n(G, null, ee(t.status.git_changes.nodes_removed, (Z) => (o(), n("div", {
                      key: b(Z),
                      class: "change-item"
                    }, [
                      e("span", cn, l(b(Z)), 1),
                      p(Z) ? (o(), n("span", un, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = t.status.git_changes) != null && R.workflow_changes ? (o(), n("div", mn, [
                  I[18] || (I[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", vn, [
                    e("div", fn, [
                      e("span", gn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (N = t.status.git_changes) != null && N.has_other_changes ? (o(), n("div", hn, [...I[19] || (I[19] = [
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
                v(Se, { level: "4" }, {
                  default: a(() => [...I[20] || (I[20] = [
                    g("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                I[21] || (I[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (H = (j = t.status.comparison) == null ? void 0 : j.missing_nodes) != null && H.length ? (o(), n("div", yn, [
                  v(se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", wn, [
                    (o(!0), n(G, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + l(Z), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", bn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (V = (Q = t.status.comparison) == null ? void 0 : Q.extra_nodes) != null && V.length ? (o(), n("div", kn, [
                  v(se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", _n, [
                    (o(!0), n(G, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + l(Z), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", $n, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (F = (P = t.status.comparison) == null ? void 0 : P.version_mismatches) != null && F.length ? (o(), n("div", Cn, [
                  v(se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (pe = t.status.comparison) != null && pe.packages_in_sync ? c("", !0) : (o(), n("div", xn, [
                  v(se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (fe = (Ie = t.status.comparison) == null ? void 0 : Ie.disabled_nodes) != null && fe.length ? (o(), n("div", Sn, [
                v(Se, { level: "4" }, {
                  default: a(() => [...I[22] || (I[22] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", In, [
                  I[23] || (I[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", En, [
                  (o(!0), n(G, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (Z) => (o(), n("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + l(Z), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", zn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Mn, [
                v(Se, { level: "4" }, {
                  default: a(() => [...I[24] || (I[24] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ln, [
                  I[25] || (I[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[26] || (I[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Tn, [...I[27] || (I[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Rn, [
              v(K, {
                variant: "secondary",
                onClick: I[3] || (I[3] = (Z) => $.$emit("close"))
              }, {
                default: a(() => [...I[28] || (I[28] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Dt = /* @__PURE__ */ X(Nn, [["__scopeId", "data-v-cbde957e"]]), Dn = { class: "health-section-header" }, Un = { style: { "margin-top": "var(--cg-space-1)" } }, On = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Bn = /* @__PURE__ */ J({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const s = t, i = E(!1), f = E(!1);
    be(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Dt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function h() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      i.value = !1, r("view-workflows");
    }
    const r = d, u = D(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = D(() => {
      const T = s.status.git_changes;
      return T.nodes_added.length > 0 || T.nodes_removed.length > 0 || T.workflow_changes || T.has_other_changes;
    }), p = D(() => u.value || b.value), $ = D(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), I = D(() => s.status.git_changes.has_other_changes), z = D(() => {
      var T;
      return ((T = s.status.workflows.analyzed) == null ? void 0 : T.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), S = D(() => {
      var T;
      return ((T = s.status.workflows.analyzed) == null ? void 0 : T.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), k = D(() => z.value.length > 0 || S.value.length > 0), C = D(() => k.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), A = D(() => {
      const T = [];
      return s.status.workflows.new.length > 0 && T.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && T.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && T.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && T.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && T.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${T.length > 0 ? T.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (T, w) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: w[0] || (w[0] = (M) => f.value = !0),
            onMouseleave: w[1] || (w[1] = (M) => f.value = !1)
          }, [
            e("div", Dn, [
              v(Se, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...w[11] || (w[11] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              v(so, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), _(K, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...w[12] || (w[12] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            v(No, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), _(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), _(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), _(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                v(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), _(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), _(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), _(Ve, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                I.value ? (o(), _(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), _(Ve, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Un, [
            v(cs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                v(K, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w[2] || (w[2] = (M) => T.$emit("switch-branch"))
                }, {
                  default: a(() => [...w[13] || (w[13] = [
                    g(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), _(Ye, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              v(K, {
                variant: "primary",
                size: "sm",
                onClick: w[3] || (w[3] = (M) => T.$emit("create-branch"))
              }, {
                default: a(() => [...w[14] || (w[14] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          C.value ? (o(), n("div", On, [
            v(Se, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...w[15] || (w[15] = [
                g(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            z.value.length > 0 ? (o(), _(Ye, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${z.value.length} committed workflow${z.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: z.value.map((M) => `${M.name} — ${M.issue_summary}`)
            }, {
              actions: a(() => [
                v(K, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[4] || (w[4] = (M) => T.$emit("view-workflows"))
                }, {
                  default: a(() => [...w[16] || (w[16] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            S.value.length > 0 ? (o(), _(Ye, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: S.value.map((M) => `${M.name} — ${M.issue_summary}`)
            }, {
              actions: a(() => [
                v(K, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[5] || (w[5] = (M) => T.$emit("view-workflows"))
                }, {
                  default: a(() => [...w[17] || (w[17] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), _(Ye, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                v(K, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[6] || (w[6] = (M) => T.$emit("view-workflows"))
                }, {
                  default: a(() => [...w[18] || (w[18] = [
                    g(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            p.value ? (o(), _(Ye, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: A.value
            }, {
              actions: a(() => [
                v(K, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h
                }, {
                  default: a(() => [...w[19] || (w[19] = [
                    g(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                v(K, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[7] || (w[7] = (M) => T.$emit("commit-changes"))
                }, {
                  default: a(() => [...w[20] || (w[20] = [
                    g(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), _(Ye, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                v(K, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w[8] || (w[8] = (M) => T.$emit("view-debug"))
                }, {
                  default: a(() => [...w[21] || (w[21] = [
                    g(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                v(K, {
                  variant: "primary",
                  size: "sm",
                  onClick: w[9] || (w[9] = (M) => T.$emit("sync-environment"))
                }, {
                  default: a(() => [...w[22] || (w[22] = [
                    g(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !C.value && !b.value ? (o(), _(Ne, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      v(Dt, {
        show: i.value,
        status: t.status,
        onClose: w[10] || (w[10] = (M) => i.value = !1),
        onNavigateWorkflows: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Pn = /* @__PURE__ */ X(Bn, [["__scopeId", "data-v-05737be6"]]), An = ["type", "value", "placeholder", "disabled"], Vn = /* @__PURE__ */ J({
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
    const i = t, f = s, y = E(null);
    function h(m) {
      const r = m.target.value;
      f("update:modelValue", r);
    }
    return be(() => {
      i.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.blur();
      }
    }), (m, r) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: te(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        r[0] || (r[0] = Ge((u) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ge((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => m.$emit("blur"))
    }, null, 42, An));
  }
}), vt = /* @__PURE__ */ X(Vn, [["__scopeId", "data-v-0380d08f"]]), Fn = { class: "branch-create-form" }, Wn = { class: "form-actions" }, Gn = /* @__PURE__ */ J({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = E(""), f = D(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
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
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Wn, [
        v(K, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...r[1] || (r[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        v(K, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...r[2] || (r[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), jn = /* @__PURE__ */ X(Gn, [["__scopeId", "data-v-7c500394"]]), Hn = { class: "branch-list-item__indicator" }, Kn = { class: "branch-list-item__name" }, qn = {
  key: 0,
  class: "branch-list-item__actions"
}, Jn = {
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
      class: te(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, [
      e("span", Hn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Kn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", qn, [
        ie(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Jn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Yn = /* @__PURE__ */ X(Xn, [["__scopeId", "data-v-c6581a24"]]), Qn = {
  key: 2,
  class: "branch-list"
}, Zn = /* @__PURE__ */ J({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = E(!1);
    function f(h) {
      s("create", h), y();
    }
    function y() {
      i.value = !1;
    }
    return (h, m) => (o(), _(_e, null, {
      header: a(() => [
        v($e, { title: "BRANCHES" }, {
          actions: a(() => [
            v(K, {
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
        i.value ? (o(), _(jn, {
          key: 0,
          onCreate: f,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), _(Ne, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Qn, [
          (o(!0), n(G, null, ee(t.branches, (r) => (o(), _(Yn, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), _(K, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => h.$emit("switch", r.name)
              }, {
                default: a(() => [...m[2] || (m[2] = [
                  g(" Switch ", -1)
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
}), ea = /* @__PURE__ */ X(Zn, [["__scopeId", "data-v-763d6ec4"]]), ta = { class: "commit-list" }, oa = /* @__PURE__ */ J({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", ta, [
      ie(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), sa = /* @__PURE__ */ X(oa, [["__scopeId", "data-v-8c5ee761"]]), na = { class: "commit-hash" }, aa = /* @__PURE__ */ J({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = D(() => d.hash.slice(0, d.length));
    return (i, f) => (o(), n("span", na, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ X(aa, [["__scopeId", "data-v-7c333cc6"]]), la = { class: "commit-message" }, ia = { class: "commit-date" }, ra = /* @__PURE__ */ J({
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
    return (y, h) => (o(), n("div", {
      class: te(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      v(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", la, l(t.message), 1),
      e("span", ia, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = ye(() => {
        }, ["stop"]))
      }, [
        ie(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), da = /* @__PURE__ */ X(ra, [["__scopeId", "data-v-dd7c621b"]]), ca = /* @__PURE__ */ J({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), _(_e, null, {
      header: a(() => [
        v($e, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), _(Ne, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), _(sa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(G, null, ee(t.commits, (i) => (o(), _(da, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => d.$emit("select", i)
            }, {
              actions: a(() => [
                v(K, {
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
}), ua = /* @__PURE__ */ X(ca, [["__scopeId", "data-v-981c3c64"]]), Lh = [
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
], Th = {
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
], Rh = [
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
function Ce() {
  const t = E(!1), d = E(null);
  async function s(Y, ne) {
    var ke;
    if (!((ke = window.app) != null && ke.api))
      throw new Error("ComfyUI API not available");
    const re = await window.app.api.fetchApi(Y, ne);
    if (!re.ok) {
      const Je = await re.json().catch(() => ({}));
      throw new Error(Je.error || Je.message || `Request failed: ${re.status}`);
    }
    return re.json();
  }
  async function i(Y = !1) {
    return s(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(Y, ne = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: ne })
    });
  }
  async function y(Y = 10, ne = 0) {
    return s(`/v2/comfygit/log?limit=${Y}&offset=${ne}`);
  }
  async function h(Y) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function m() {
    return s("/v2/comfygit/branches");
  }
  async function r(Y) {
    return s(`/v2/comfygit/commit/${Y}`);
  }
  async function u(Y, ne = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: ne })
    });
  }
  async function b(Y, ne = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: ne })
    });
  }
  async function p(Y, ne = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: ne })
    });
  }
  async function $() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Y = await i();
        return [{
          name: Y.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Y.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Y.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Y.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function I(Y) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Y })
    });
  }
  async function z() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function S(Y, ne, re) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, pytorch_backend: ne, clone_from: re })
    });
  }
  async function k(Y) {
    return s(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function C(Y = !1) {
    try {
      return s(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ne = await i(Y), re = [];
      return ne.workflows.new.forEach((ke) => {
        re.push({ name: ke, status: "new", missing_nodes: 0, missing_models: 0, path: ke });
      }), ne.workflows.modified.forEach((ke) => {
        re.push({ name: ke, status: "modified", missing_nodes: 0, missing_models: 0, path: ke });
      }), ne.workflows.synced.forEach((ke) => {
        re.push({ name: ke, status: "synced", missing_nodes: 0, missing_models: 0, path: ke });
      }), re;
    }
  }
  async function A(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function T(Y) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function w(Y, ne, re) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ne, install_models: re })
    });
  }
  async function M(Y, ne, re) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ne, importance: re })
    });
  }
  async function x() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function O() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function R(Y, ne) {
    return s(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ne })
    });
  }
  async function N(Y) {
    return s(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function U(Y) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function j() {
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
  async function H(Y) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Q(Y, ne) {
    try {
      const re = new URLSearchParams();
      return Y && re.append("level", Y), ne && re.append("lines", ne.toString()), s(`/v2/comfygit/debug/logs?${re}`);
    } catch {
      return [];
    }
  }
  async function V(Y, ne) {
    try {
      const re = new URLSearchParams();
      return Y && re.append("level", Y), ne && re.append("lines", ne.toString()), s(`/v2/workspace/debug/logs?${re}`);
    } catch {
      return [];
    }
  }
  async function P() {
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
  async function F(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function pe(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function Ie(Y) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
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
  async function Z(Y, ne) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: ne })
    });
  }
  async function De(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Ue(Y, ne, re) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ne, push_url: re })
    });
  }
  async function at(Y) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST"
    });
  }
  async function me(Y) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function Ee(Y = "skip", ne = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: ne
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: f,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: r,
    checkout: u,
    createBranch: b,
    switchBranch: p,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: I,
    getSwitchProgress: z,
    createEnvironment: S,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: C,
    getWorkflowDetails: A,
    resolveWorkflow: T,
    installWorkflowDeps: w,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: O,
    updateModelSource: R,
    deleteModel: N,
    downloadModel: U,
    // Settings
    getConfig: j,
    updateConfig: H,
    // Debug/Logs
    getEnvironmentLogs: Q,
    getWorkspaceLogs: V,
    // Node Management
    getNodes: P,
    installNode: F,
    updateNode: pe,
    uninstallNode: Ie,
    // Git Remotes
    getRemotes: fe,
    addRemote: Z,
    removeRemote: De,
    updateRemoteUrl: Ue,
    fetchRemote: at,
    getRemoteSyncStatus: me,
    // Environment Sync
    syncEnvironmentManually: Ee
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
}, wa = /* @__PURE__ */ J({
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
    function y(h) {
      h.key === "Escape" && i("close");
    }
    return be(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), no(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, m) => (o(), _(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: te(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ye(() => {
          }, ["stop"]))
        }, [
          e("div", va, [
            ie(h.$slots, "header", {}, () => [
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
            t.loading ? (o(), n("div", ha, "Loading...")) : t.error ? (o(), n("div", pa, l(t.error), 1)) : ie(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), n("div", ya, [
            ie(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), yt = /* @__PURE__ */ X(wa, [["__scopeId", "data-v-2125a0e6"]]), ba = ["type", "disabled"], ka = {
  key: 0,
  class: "spinner"
}, _a = /* @__PURE__ */ J({
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
      class: te(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", ka)) : c("", !0),
      ie(d.$slots, "default", {}, void 0, !0)
    ], 10, ba));
  }
}), le = /* @__PURE__ */ X(_a, [["__scopeId", "data-v-f3452606"]]), $a = {
  key: 0,
  class: "base-title-count"
}, Ca = /* @__PURE__ */ J({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), _(It(`h${t.level}`), {
      class: te(["base-title", t.variant])
    }, {
      default: a(() => [
        ie(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", $a, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ X(Ca, [["__scopeId", "data-v-5a01561d"]]), xa = ["value", "disabled"], Sa = {
  key: 0,
  value: "",
  disabled: ""
}, Ia = ["value"], Ea = {
  key: 0,
  class: "base-select-error"
}, za = /* @__PURE__ */ J({
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
      class: te(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: te(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => i.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Sa, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(G, null, ee(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, Ia))), 128))
      ], 42, xa),
      t.error ? (o(), n("span", Ea, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ X(za, [["__scopeId", "data-v-7436d745"]]), La = { class: "popover-header" }, Ta = { class: "popover-title" }, Ra = { class: "popover-content" }, Na = {
  key: 0,
  class: "popover-actions"
}, Da = /* @__PURE__ */ J({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ze({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = ye(() => {
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
            ie(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Na, [
            ie(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ X(Da, [["__scopeId", "data-v-42815ace"]]), Ua = { class: "detail-section" }, Oa = {
  key: 0,
  class: "empty-message"
}, Ba = { class: "model-header" }, Pa = { class: "model-name" }, Aa = { class: "model-details" }, Va = { class: "model-row" }, Fa = { class: "model-row" }, Wa = { class: "label" }, Ga = {
  key: 0,
  class: "model-row model-row-nodes"
}, ja = { class: "node-list" }, Ha = ["onClick"], Ka = {
  key: 1,
  class: "model-row"
}, qa = { class: "value" }, Ja = {
  key: 0,
  class: "model-actions"
}, Xa = { class: "detail-section" }, Ya = {
  key: 0,
  class: "empty-message"
}, Qa = { class: "node-name" }, Za = {
  key: 0,
  class: "node-version"
}, el = /* @__PURE__ */ J({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: h } = Ce(), m = E(null), r = E(!1), u = E(null), b = E(!1), p = E({}), $ = E({}), I = E(!1), z = E(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(N) {
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
    function A(N) {
      if (!N.loaded_by || N.loaded_by.length === 0) return [];
      const U = N.hash || N.filename;
      return z.value.has(U) ? N.loaded_by : N.loaded_by.slice(0, 3);
    }
    function T(N) {
      return z.value.has(N);
    }
    function w(N) {
      z.value.has(N) ? z.value.delete(N) : z.value.add(N), z.value = new Set(z.value);
    }
    async function M() {
      r.value = !0, u.value = null;
      try {
        m.value = await f(s.workflowName);
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function x(N, U) {
      p.value[N] = U, b.value = !0;
    }
    async function O() {
      if (!b.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [N, U] of Object.entries(p.value))
          await y(s.workflowName, N, U);
        i("close");
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function R(N) {
      $.value[N] = !0, u.value = null;
      try {
        await h(s.workflowName, !0, !1), await M();
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to install node";
      } finally {
        $.value[N] = !1;
      }
    }
    return be(M), (N, U) => (o(), n(G, null, [
      v(yt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: U[5] || (U[5] = (j) => i("close"))
      }, {
        body: a(() => [
          m.value ? (o(), n(G, { key: 0 }, [
            e("section", Ua, [
              v(ct, { variant: "section" }, {
                default: a(() => [
                  g("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), n("div", Oa, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(G, null, ee(m.value.models, (j) => (o(), n("div", {
                key: j.hash,
                class: "model-card"
              }, [
                e("div", Ba, [
                  U[7] || (U[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Pa, l(j.filename), 1)
                ]),
                e("div", Aa, [
                  e("div", Va, [
                    U[8] || (U[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: te(["value", k(j.status)])
                    }, l(C(j.status)), 3)
                  ]),
                  e("div", Fa, [
                    e("span", Wa, [
                      U[9] || (U[9] = g(" Importance: ", -1)),
                      v(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: U[0] || (U[0] = (H) => I.value = !0)
                      })
                    ]),
                    v(Ma, {
                      "model-value": p.value[j.hash] || j.importance,
                      options: S,
                      "onUpdate:modelValue": (H) => x(j.hash, H)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  j.loaded_by && j.loaded_by.length > 0 ? (o(), n("div", Ga, [
                    U[10] || (U[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ja, [
                      (o(!0), n(G, null, ee(A(j), (H, Q) => (o(), n("div", {
                        key: `${H.node_id}-${Q}`,
                        class: "node-reference"
                      }, l(H.node_type) + " (Node #" + l(H.node_id) + ") ", 1))), 128)),
                      j.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (H) => w(j.hash || j.filename)
                      }, l(T(j.hash || j.filename) ? "▼ Show less" : `▶ View all (${j.loaded_by.length})`), 9, Ha)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  j.size_mb ? (o(), n("div", Ka, [
                    U[11] || (U[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", qa, l(j.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                j.status !== "available" ? (o(), n("div", Ja, [
                  j.status === "downloadable" ? (o(), _(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: U[1] || (U[1] = (H) => i("resolve"))
                  }, {
                    default: a(() => [...U[12] || (U[12] = [
                      g(" Download ", -1)
                    ])]),
                    _: 1
                  })) : j.status === "path_mismatch" ? (o(), _(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[2] || (U[2] = (H) => i("resolve"))
                  }, {
                    default: a(() => [...U[13] || (U[13] = [
                      g(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), _(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[3] || (U[3] = (H) => i("resolve"))
                  }, {
                    default: a(() => [...U[14] || (U[14] = [
                      g(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Xa, [
              v(ct, { variant: "section" }, {
                default: a(() => [
                  g("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), n("div", Ya, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(G, null, ee(m.value.nodes, (j) => (o(), n("div", {
                key: j.name,
                class: "node-item"
              }, [
                e("span", {
                  class: te(["node-status", j.status === "installed" ? "installed" : "missing"])
                }, l(j.status === "installed" ? "✓" : "✕"), 3),
                e("span", Qa, l(j.name), 1),
                j.version ? (o(), n("span", Za, "v" + l(j.version), 1)) : c("", !0),
                j.status === "missing" ? (o(), _(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: $.value[j.name],
                  onClick: (H) => R(j.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...U[15] || (U[15] = [
                    g(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          v(le, {
            variant: "secondary",
            onClick: U[4] || (U[4] = (j) => i("close"))
          }, {
            default: a(() => [...U[16] || (U[16] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), _(le, {
            key: 0,
            variant: "primary",
            onClick: O
          }, {
            default: a(() => [...U[17] || (U[17] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      v(je, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: U[6] || (U[6] = (j) => I.value = !1)
      }, {
        content: a(() => [...U[18] || (U[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              g(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              g(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              g(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tl = /* @__PURE__ */ X(el, [["__scopeId", "data-v-1325d542"]]), ue = At({
  items: [],
  status: "idle"
});
let Ae = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ue.items.find((d) => d.id === t);
}
async function et() {
  if (ue.status === "downloading") return;
  const t = ue.items.find((d) => d.status === "queued");
  if (!t) {
    ue.status = "idle";
    return;
  }
  ue.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ol(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ue.status = "idle", et();
  }
}
async function ol(t) {
  return new Promise((d, s) => {
    Ae && (Ae.close(), Ae = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ae = f;
    let y = Date.now(), h = 0, m = !1;
    f.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), p = (b - y) / 1e3;
            if (p > 0.5) {
              const $ = t.downloaded - h;
              if (t.speed = $ / p, y = b, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const I = t.size - t.downloaded;
                t.eta = I / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), Ae = null, d();
            break;
          case "error":
            m = !0, f.close(), Ae = null, s(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ae = null, m || s(new Error("Connection lost"));
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
      if (ue.items.some((f) => f.url === s.url && f.filename === s.filename))
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
      ue.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function wt() {
  function t(k) {
    for (const C of k) {
      const A = {
        id: Gt(),
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
      ue.items.push(A);
    }
    ue.status === "idle" && et();
  }
  async function d(k) {
    const C = _t(k);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ae && (Ae.close(), Ae = null), C.status = "failed", C.error = "Cancelled by user", ue.status = "idle", et();
      } else if (C.status === "queued") {
        const A = ue.items.findIndex((T) => T.id === k);
        A >= 0 && ue.items.splice(A, 1);
      }
    }
  }
  function s(k) {
    const C = _t(k);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, ue.status === "idle" && et());
  }
  function i(k) {
    const C = _t(k);
    !C || C.status !== "paused" || (C.status = "queued", ue.status === "idle" && et());
  }
  function f() {
    const k = ue.items.filter((C) => C.status === "paused");
    for (const C of k)
      C.status = "queued";
    ue.status === "idle" && et();
  }
  function y(k) {
    const C = ue.items.findIndex((A) => A.id === k);
    C >= 0 && (ue.items[C].status === "completed" || ue.items[C].status === "failed") && ue.items.splice(C, 1);
  }
  function h() {
    ue.items = ue.items.filter((k) => k.status !== "completed");
  }
  function m() {
    ue.items = ue.items.filter((k) => k.status !== "failed");
  }
  const r = D(
    () => ue.items.find((k) => k.status === "downloading")
  ), u = D(
    () => ue.items.filter((k) => k.status === "queued")
  ), b = D(
    () => ue.items.filter((k) => k.status === "completed")
  ), p = D(
    () => ue.items.filter((k) => k.status === "failed")
  ), $ = D(
    () => ue.items.filter((k) => k.status === "paused")
  ), I = D(() => ue.items.length > 0), z = D(
    () => ue.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), S = D(
    () => ue.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ao(ue),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: b,
    failedItems: p,
    pausedItems: $,
    hasItems: I,
    activeCount: z,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: sl
  };
}
function nl() {
  const t = E(null), d = E(null), s = E([]), i = E([]), f = E(!1), y = E(null);
  async function h(k, C) {
    var T;
    if (!((T = window.app) != null && T.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(k, C);
    if (!A.ok) {
      const w = await A.json().catch(() => ({})), M = w.error || w.message || `Request failed: ${A.status}`;
      throw new Error(M);
    }
    return A.json();
  }
  async function m(k) {
    f.value = !0, y.value = null;
    try {
      let C;
      return ht() || (C = await h(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = C, C;
    } catch (C) {
      const A = C instanceof Error ? C.message : "Unknown error occurred";
      throw y.value = A, C;
    } finally {
      f.value = !1;
    }
  }
  async function r(k, C, A) {
    f.value = !0, y.value = null;
    try {
      let T;
      if (!ht()) {
        const w = Object.fromEntries(C), M = Object.fromEntries(A);
        T = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: w,
              model_choices: M
            })
          }
        );
      }
      return d.value = T, T;
    } catch (T) {
      const w = T instanceof Error ? T.message : "Unknown error occurred";
      throw y.value = w, T;
    } finally {
      f.value = !1;
    }
  }
  async function u(k, C = 10) {
    f.value = !0, y.value = null;
    try {
      let A;
      return ht() || (A = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), s.value = A.results, A.results;
    } catch (A) {
      const T = A instanceof Error ? A.message : "Unknown error occurred";
      throw y.value = T, A;
    } finally {
      f.value = !1;
    }
  }
  async function b(k, C = 10) {
    f.value = !0, y.value = null;
    try {
      let A;
      return ht() || (A = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: C })
        }
      )), i.value = A.results, A.results;
    } catch (A) {
      const T = A instanceof Error ? A.message : "Unknown error occurred";
      throw y.value = T, A;
    } finally {
      f.value = !1;
    }
  }
  const p = At({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function $() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.error = void 0;
  }
  async function I(k, C, A) {
    $(), p.phase = "resolving", y.value = null;
    const T = Object.fromEntries(C), w = Object.fromEntries(A);
    try {
      const M = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: T,
          model_choices: w
        })
      });
      if (!M.ok)
        throw new Error(`Request failed: ${M.status}`);
      if (!M.body)
        throw new Error("No response body");
      const x = M.body.getReader(), O = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: N, value: U } = await x.read();
        if (N) break;
        R += O.decode(U, { stream: !0 });
        const j = R.split(`

`);
        R = j.pop() || "";
        for (const H of j) {
          if (!H.trim()) continue;
          const Q = H.split(`
`);
          let V = "", P = "";
          for (const F of Q)
            F.startsWith("event: ") ? V = F.slice(7) : F.startsWith("data: ") && (P = F.slice(6));
          if (P)
            try {
              const F = JSON.parse(P);
              z(V, F);
            } catch (F) {
              console.warn("Failed to parse SSE event:", F);
            }
        }
      }
    } catch (M) {
      const x = M instanceof Error ? M.message : "Unknown error occurred";
      throw y.value = x, p.error = x, p.phase = "error", M;
    }
  }
  function z(k, C) {
    switch (k) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = C.total;
        break;
      case "file_start":
        p.currentFile = C.filename, p.currentFileIndex = C.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = C.downloaded, p.bytesTotal = C.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: C.filename,
          success: C.success,
          error: C.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = C.nodes_to_install || [], C.download_results && (p.completedFiles = C.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = C.message, p.phase = "error", y.value = C.message;
        break;
    }
  }
  function S(k, C) {
    const { addToQueue: A } = wt(), T = C.filter((w) => w.url && w.target_path).map((w) => ({
      workflow: k,
      filename: w.filename,
      url: w.url,
      targetPath: w.target_path,
      size: w.size || 0,
      type: "model"
    }));
    return T.length > 0 && A(T), T.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: i,
    isLoading: f,
    error: y,
    progress: p,
    // Methods
    analyzeWorkflow: m,
    applyResolution: r,
    applyResolutionWithProgress: I,
    searchNodes: u,
    searchModels: b,
    resetProgress: $,
    queueModelDownloads: S
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
}, ml = { class: "stepper-content" }, vl = /* @__PURE__ */ J({
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
    function y(u) {
      var b;
      if ((b = s.stepStats) != null && b[u]) {
        const p = s.stepStats[u];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function h(u) {
      return f(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, b) => (o(), n("div", al, [
      e("div", ll, [
        (o(!0), n(G, null, ee(t.steps, (p, $) => (o(), n("div", {
          key: p.id,
          class: te(["step", {
            active: t.currentStep === p.id,
            completed: f(p.id),
            "in-progress": y(p.id),
            disabled: m(p.id)
          }]),
          onClick: (I) => r(p.id)
        }, [
          e("div", {
            class: te(["step-indicator", h(p.id)])
          }, [
            f(p.id) ? (o(), n("span", rl, "✓")) : (o(), n("span", dl, l($ + 1), 1))
          ], 2),
          e("div", cl, l(p.label), 1),
          $ < t.steps.length - 1 ? (o(), n("div", ul)) : c("", !0)
        ], 10, il))), 128))
      ]),
      e("div", ml, [
        ie(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), fl = /* @__PURE__ */ X(vl, [["__scopeId", "data-v-2a7b3af8"]]), gl = /* @__PURE__ */ J({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = D(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${s.value}`), f = D(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, h) => (o(), n("span", {
      class: te(["confidence-badge", i.value, t.size])
    }, l(f.value), 3));
  }
}), Lt = /* @__PURE__ */ X(gl, [["__scopeId", "data-v-17ec4b80"]]), hl = { class: "node-info" }, pl = { class: "node-info-text" }, yl = { class: "item-body" }, wl = {
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
}, Tl = { class: "action-buttons" }, Rl = /* @__PURE__ */ J({
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
    const y = D(() => {
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
      class: te(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", hl, [
        e("span", pl, [
          r[7] || (r[7] = g("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: te(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", yl, [
        f.value ? (o(), n("div", wl, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (u) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", bl, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", kl, [
            (o(!0), n(G, null, ee(t.options, (u, b) => (o(), n("label", {
              key: u.package_id,
              class: te(["option-card", { selected: t.selectedOptionIndex === b }]),
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
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (u) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                g(" Mark Optional ", -1)
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
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (u) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Nl = /* @__PURE__ */ X(Rl, [["__scopeId", "data-v-e02629e7"]]), Dl = { class: "item-navigator" }, Ul = { class: "nav-item-info" }, Ol = ["title"], Bl = { class: "nav-controls" }, Pl = { class: "nav-arrows" }, Al = ["disabled"], Vl = ["disabled"], Fl = { class: "nav-position" }, Wl = /* @__PURE__ */ J({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, f) => (o(), n("div", Dl, [
      e("div", Ul, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Ol)
      ]),
      e("div", Bl, [
        e("div", Pl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (y) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Al),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (y) => s("next")),
            title: "Next item"
          }, " → ", 8, Vl)
        ]),
        e("span", Fl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ X(Wl, [["__scopeId", "data-v-74af7920"]]), Gl = ["type", "value", "placeholder", "disabled"], jl = {
  key: 0,
  class: "base-input-error"
}, Hl = /* @__PURE__ */ J({
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
      class: te(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: te(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Gl),
      t.error ? (o(), n("span", jl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ X(Hl, [["__scopeId", "data-v-9ba02cdc"]]), Kl = { class: "node-resolution-step" }, ql = { class: "step-header" }, Jl = { class: "stat-badge" }, Xl = {
  key: 1,
  class: "step-body"
}, Yl = {
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
}, ii = { class: "node-manual-entry-modal" }, ri = { class: "node-modal-body" }, di = { class: "node-modal-actions" }, ci = /* @__PURE__ */ J({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E(0), y = E(!1), h = E(!1), m = E(""), r = E(""), u = E([]), b = E(!1), p = D(() => s.nodes[f.value]), $ = D(() => s.nodes.filter((j) => s.nodeChoices.has(j.node_type)).length), I = D(() => {
      var H;
      if (!p.value) return "not-found";
      const j = s.nodeChoices.get(p.value.node_type);
      if (j)
        switch (j.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (H = p.value.options) != null && H.length ? "ambiguous" : "not-found";
    }), z = D(() => {
      var H;
      if (!p.value) return;
      const j = s.nodeChoices.get(p.value.node_type);
      if (j)
        switch (j.action) {
          case "install":
            return j.package_id ? `→ ${j.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (H = p.value.options) != null && H.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function S(j) {
      j >= 0 && j < s.nodes.length && (f.value = j);
    }
    function k() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function C() {
      p.value && i("skip", p.value.node_type);
    }
    function A(j) {
      p.value && i("option-selected", p.value.node_type, j);
    }
    function T() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function w() {
      p.value && (m.value = p.value.node_type, y.value = !0);
    }
    function M() {
      r.value = "", h.value = !0;
    }
    function x() {
      y.value = !1, m.value = "", u.value = [];
    }
    function O() {
      h.value = !1, r.value = "";
    }
    function R() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function N(j) {
      p.value && (i("manual-entry", p.value.node_type, j.package_id), x());
    }
    function U() {
      !p.value || !r.value.trim() || (i("manual-entry", p.value.node_type, r.value.trim()), O());
    }
    return (j, H) => {
      var Q, V;
      return o(), n("div", Kl, [
        e("div", ql, [
          H[4] || (H[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Jl, l($.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        p.value ? (o(), _(jt, {
          key: 0,
          "item-name": p.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: H[0] || (H[0] = (P) => S(f.value - 1)),
          onNext: H[1] || (H[1] = (P) => S(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        p.value ? (o(), n("div", Xl, [
          v(Nl, {
            "node-type": p.value.node_type,
            "has-multiple-options": !!((Q = p.value.options) != null && Q.length),
            options: p.value.options,
            choice: (V = t.nodeChoices) == null ? void 0 : V.get(p.value.node_type),
            status: I.value,
            "status-label": z.value,
            onMarkOptional: k,
            onSkip: C,
            onManualEntry: M,
            onSearch: w,
            onOptionSelected: A,
            onClearChoice: T
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Yl, [...H[5] || (H[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), _(ze, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ye(x, ["self"])
          }, [
            e("div", Ql, [
              e("div", { class: "node-modal-header" }, [
                H[6] || (H[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: x
                }, "✕")
              ]),
              e("div", Zl, [
                v(qe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": H[2] || (H[2] = (P) => m.value = P),
                  placeholder: "Search by node type, package name...",
                  onInput: R
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", ei, [
                  (o(!0), n(G, null, ee(u.value, (P) => (o(), n("div", {
                    key: P.package_id,
                    class: "node-search-result-item",
                    onClick: (F) => N(P)
                  }, [
                    e("div", oi, [
                      e("code", si, l(P.package_id), 1),
                      P.match_confidence ? (o(), _(Lt, {
                        key: 0,
                        confidence: P.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    P.description ? (o(), n("div", ni, l(P.description), 1)) : c("", !0)
                  ], 8, ti))), 128))
                ])) : m.value && !b.value ? (o(), n("div", ai, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", li, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), _(ze, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ye(O, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                H[7] || (H[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", ri, [
                v(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": H[3] || (H[3] = (P) => r.value = P),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", di, [
                  v(le, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: a(() => [...H[8] || (H[8] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: U
                  }, {
                    default: a(() => [...H[9] || (H[9] = [
                      g(" Add Package ", -1)
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
}), ui = /* @__PURE__ */ X(ci, [["__scopeId", "data-v-4fb196b1"]]), mi = { class: "node-info" }, vi = { class: "node-info-text" }, fi = { class: "item-body" }, gi = {
  key: 0,
  class: "resolved-state"
}, hi = {
  key: 1,
  class: "multiple-options"
}, pi = { class: "options-list" }, yi = ["onClick"], wi = ["name", "value", "checked", "onChange"], bi = { class: "option-content" }, ki = { class: "option-header" }, _i = { class: "option-filename" }, $i = { class: "option-meta" }, Ci = { class: "option-size" }, xi = { class: "option-category" }, Si = { class: "option-path" }, Ii = { class: "action-buttons" }, Ei = {
  key: 2,
  class: "unresolved"
}, zi = { class: "action-buttons" }, Mi = /* @__PURE__ */ J({
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
    const y = D(() => {
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
      class: te(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", mi, [
        e("span", vi, [
          u[7] || (u[7] = g("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: te(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", fi, [
        f.value ? (o(), n("div", gi, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => i("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", hi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", pi, [
            (o(!0), n(G, null, ee(t.options, (b, p) => (o(), n("label", {
              key: b.model.hash,
              class: te(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: ($) => h(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: ($) => h(p)
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
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => i("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                g(" Mark Optional ", -1)
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
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => i("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Li = /* @__PURE__ */ X(Mi, [["__scopeId", "data-v-8a82fefa"]]), Ti = { class: "model-resolution-step" }, Ri = { class: "step-header" }, Ni = { class: "step-info" }, Di = { class: "step-title" }, Ui = { class: "step-description" }, Oi = { class: "stat-badge" }, Bi = {
  key: 1,
  class: "step-body"
}, Pi = {
  key: 2,
  class: "empty-state"
}, Ai = { class: "model-search-modal" }, Vi = { class: "model-modal-body" }, Fi = {
  key: 0,
  class: "model-search-results"
}, Wi = ["onClick"], Gi = { class: "model-result-header" }, ji = { class: "model-result-filename" }, Hi = { class: "model-result-meta" }, Ki = { class: "model-result-category" }, qi = { class: "model-result-size" }, Ji = {
  key: 0,
  class: "model-result-path"
}, Xi = {
  key: 1,
  class: "model-no-results"
}, Yi = {
  key: 2,
  class: "model-searching"
}, Qi = { class: "model-download-url-modal" }, Zi = { class: "model-modal-body" }, er = { class: "model-modal-actions" }, tr = /* @__PURE__ */ J({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E(0), y = E(!1), h = E(!1), m = E(""), r = E(""), u = E(""), b = E([]), p = E(!1), $ = D(() => s.models[f.value]), I = D(() => s.models.some((P) => P.is_download_intent)), z = D(() => s.models.filter(
      (P) => s.modelChoices.has(P.filename) || P.is_download_intent
    ).length), S = D(() => $.value ? `checkpoints/${$.value.filename}` : "checkpoints/"), k = D(() => {
      var F;
      if (!$.value) return "not-found";
      const P = s.modelChoices.get($.value.filename);
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
      return $.value.is_download_intent ? "download" : (F = $.value.options) != null && F.length ? "ambiguous" : "not-found";
    }), C = D(() => {
      var F, pe;
      if (!$.value) return;
      const P = s.modelChoices.get($.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (F = P.selected_model) != null && F.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return $.value.is_download_intent ? "Pending Download" : (pe = $.value.options) != null && pe.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function A(P) {
      P >= 0 && P < s.models.length && (f.value = P);
    }
    function T() {
      $.value && i("mark-optional", $.value.filename);
    }
    function w() {
      $.value && i("skip", $.value.filename);
    }
    function M(P) {
      $.value && i("option-selected", $.value.filename, P);
    }
    function x() {
      $.value && i("clear-choice", $.value.filename);
    }
    function O() {
      $.value && (m.value = $.value.filename, y.value = !0);
    }
    function R() {
      r.value = "", u.value = S.value, h.value = !0;
    }
    function N() {
      y.value = !1, m.value = "", b.value = [];
    }
    function U() {
      h.value = !1, r.value = "", u.value = "";
    }
    function j() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function H(P) {
      $.value && N();
    }
    function Q() {
      !$.value || !r.value.trim() || (i("download-url", $.value.filename, r.value.trim(), u.value.trim() || void 0), U());
    }
    function V(P) {
      if (!P) return "Unknown";
      const F = P / (1024 * 1024 * 1024);
      return F >= 1 ? `${F.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, F) => {
      var pe, Ie, fe;
      return o(), n("div", Ti, [
        e("div", Ri, [
          e("div", Ni, [
            e("h3", Di, l(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ui, l(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Oi, l(z.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        $.value ? (o(), _(jt, {
          key: 0,
          "item-name": $.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: F[0] || (F[0] = (Z) => A(f.value - 1)),
          onNext: F[1] || (F[1] = (Z) => A(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        $.value ? (o(), n("div", Bi, [
          v(Li, {
            filename: $.value.filename,
            "node-type": ((pe = $.value.reference) == null ? void 0 : pe.node_type) || "Unknown",
            "has-multiple-options": !!((Ie = $.value.options) != null && Ie.length),
            options: $.value.options,
            choice: (fe = t.modelChoices) == null ? void 0 : fe.get($.value.filename),
            status: k.value,
            "status-label": C.value,
            onMarkOptional: T,
            onSkip: w,
            onDownloadUrl: R,
            onSearch: O,
            onOptionSelected: M,
            onClearChoice: x
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Pi, [...F[5] || (F[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), _(ze, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ye(N, ["self"])
          }, [
            e("div", Ai, [
              e("div", { class: "model-modal-header" }, [
                F[6] || (F[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Vi, [
                v(qe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": F[2] || (F[2] = (Z) => m.value = Z),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (o(), n("div", Fi, [
                  (o(!0), n(G, null, ee(b.value, (Z) => (o(), n("div", {
                    key: Z.hash,
                    class: "model-search-result-item",
                    onClick: (De) => H()
                  }, [
                    e("div", Gi, [
                      e("code", ji, l(Z.filename), 1)
                    ]),
                    e("div", Hi, [
                      e("span", Ki, l(Z.category), 1),
                      e("span", qi, l(V(Z.size)), 1)
                    ]),
                    Z.relative_path ? (o(), n("div", Ji, l(Z.relative_path), 1)) : c("", !0)
                  ], 8, Wi))), 128))
                ])) : m.value && !p.value ? (o(), n("div", Xi, ' No models found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                p.value ? (o(), n("div", Yi, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), _(ze, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ye(U, ["self"])
          }, [
            e("div", Qi, [
              e("div", { class: "model-modal-header" }, [
                F[7] || (F[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", Zi, [
                v(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": F[3] || (F[3] = (Z) => r.value = Z),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                v(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": F[4] || (F[4] = (Z) => u.value = Z),
                  label: "Target Path (relative to models folder)",
                  placeholder: S.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", er, [
                  v(le, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: a(() => [...F[8] || (F[8] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: Q
                  }, {
                    default: a(() => [...F[9] || (F[9] = [
                      g(" Queue Download ", -1)
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
}), or = /* @__PURE__ */ X(tr, [["__scopeId", "data-v-9d55280c"]]), sr = { class: "applying-step" }, nr = {
  key: 0,
  class: "phase-content"
}, ar = {
  key: 1,
  class: "phase-content"
}, lr = { class: "completion-summary" }, ir = {
  key: 0,
  class: "summary-item info"
}, rr = { class: "summary-text" }, dr = {
  key: 2,
  class: "phase-content error"
}, cr = { class: "error-message" }, ur = /* @__PURE__ */ J({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", sr, [
      t.progress.phase === "resolving" ? (o(), n("div", nr, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", ar, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", lr, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", ir, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", rr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", dr, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", cr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), mr = /* @__PURE__ */ X(ur, [["__scopeId", "data-v-b4d7e0eb"]]), vr = {
  key: 0,
  class: "loading-state"
}, fr = {
  key: 1,
  class: "wizard-content"
}, gr = {
  key: 0,
  class: "step-content"
}, hr = { class: "analysis-summary" }, pr = { class: "analysis-header" }, yr = { class: "summary-description" }, wr = { class: "stats-grid" }, br = { class: "stat-card" }, kr = { class: "stat-items" }, _r = { class: "stat-item success" }, $r = { class: "stat-count" }, Cr = {
  key: 0,
  class: "stat-item warning"
}, xr = { class: "stat-count" }, Sr = {
  key: 1,
  class: "stat-item error"
}, Ir = { class: "stat-count" }, Er = { class: "stat-card" }, zr = { class: "stat-items" }, Mr = { class: "stat-item success" }, Lr = { class: "stat-count" }, Tr = {
  key: 0,
  class: "stat-item info"
}, Rr = { class: "stat-count" }, Nr = {
  key: 1,
  class: "stat-item warning"
}, Dr = { class: "stat-count" }, Ur = {
  key: 2,
  class: "stat-item error"
}, Or = { class: "stat-count" }, Br = {
  key: 0,
  class: "status-message warning"
}, Pr = { class: "status-text" }, Ar = {
  key: 1,
  class: "status-message info"
}, Vr = { class: "status-text" }, Fr = {
  key: 2,
  class: "status-message success"
}, Wr = {
  key: 3,
  class: "step-content"
}, Gr = { class: "review-summary" }, jr = { class: "review-stats" }, Hr = { class: "review-stat" }, Kr = { class: "stat-value" }, qr = { class: "review-stat" }, Jr = { class: "stat-value" }, Xr = { class: "review-stat" }, Yr = { class: "stat-value" }, Qr = { class: "review-stat" }, Zr = { class: "stat-value" }, ed = {
  key: 0,
  class: "review-section"
}, td = { class: "section-title" }, od = { class: "review-items" }, sd = { class: "item-name" }, nd = { class: "item-choice" }, ad = {
  key: 0,
  class: "choice-badge install"
}, ld = {
  key: 1,
  class: "choice-badge optional"
}, id = {
  key: 2,
  class: "choice-badge skip"
}, rd = {
  key: 1,
  class: "choice-badge pending"
}, dd = {
  key: 1,
  class: "review-section"
}, cd = { class: "section-title" }, ud = { class: "review-items" }, md = { class: "item-name" }, vd = { class: "item-choice" }, fd = {
  key: 0,
  class: "choice-badge install"
}, gd = {
  key: 1,
  class: "choice-badge download"
}, hd = {
  key: 2,
  class: "choice-badge optional"
}, pd = {
  key: 3,
  class: "choice-badge skip"
}, yd = {
  key: 4,
  class: "choice-badge skip"
}, wd = {
  key: 1,
  class: "choice-badge download"
}, bd = {
  key: 2,
  class: "choice-badge pending"
}, kd = {
  key: 2,
  class: "no-choices"
}, _d = /* @__PURE__ */ J({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: h, progress: m, resetProgress: r } = nl(), { loadPendingDownloads: u } = wt(), b = E(null), p = E(!1), $ = E(!1), I = E(null), z = E("analysis"), S = E([]), k = E(/* @__PURE__ */ new Map()), C = E(/* @__PURE__ */ new Map()), A = D(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return w.value && q.push({ id: "nodes", label: "Nodes" }), (M.value || x.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), z.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), T = D(() => b.value ? b.value.stats.needs_user_input : !1), w = D(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), M = D(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), x = D(() => b.value ? b.value.stats.download_intents > 0 : !1), O = D(() => b.value ? b.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model
    })) : []), R = D(() => {
      if (!b.value) return [];
      const q = b.value.nodes.unresolved.map((oe) => ({
        node_type: oe.reference.node_type,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.nodes.ambiguous.map((oe) => ({
        node_type: oe.reference.node_type,
        has_multiple_options: !0,
        options: oe.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...q, ...B];
    }), N = D(() => {
      if (!b.value) return [];
      const q = b.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...q, ...B];
    }), U = D(() => {
      const q = N.value, B = O.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        options: void 0
      }));
      return [...q, ...B];
    }), j = D(() => {
      let q = 0;
      for (const B of k.value.values())
        B.action === "install" && q++;
      for (const B of C.value.values())
        B.action === "select" && q++;
      return q;
    }), H = D(() => {
      let q = 0;
      for (const B of C.value.values())
        B.action === "download" && q++;
      return q;
    }), Q = D(() => {
      let q = 0;
      for (const B of k.value.values())
        B.action === "optional" && q++;
      for (const B of C.value.values())
        B.action === "optional" && q++;
      return q;
    }), V = D(() => {
      let q = 0;
      for (const B of k.value.values())
        B.action === "skip" && q++;
      for (const B of C.value.values())
        B.action === "skip" && q++;
      for (const B of R.value)
        k.value.has(B.node_type) || q++;
      for (const B of N.value)
        C.value.has(B.filename) || q++;
      return q;
    }), P = D(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, w.value) {
        const B = R.value.length, oe = R.value.filter(
          (ve) => k.value.has(ve.node_type)
        ).length;
        q.nodes = { resolved: oe, total: B };
      }
      if (M.value || x.value) {
        const B = U.value.length, oe = U.value.filter(
          (ve) => C.value.has(ve.filename) || ve.is_download_intent
        ).length;
        q.models = { resolved: oe, total: B };
      }
      if (q.review = { resolved: 1, total: 1 }, z.value === "applying") {
        const B = m.totalFiles || 1, oe = m.completedFiles.length;
        q.applying = { resolved: oe, total: B };
      }
      return q;
    });
    function F(q) {
      z.value = q;
    }
    function pe() {
      const q = A.value.findIndex((B) => B.id === z.value);
      q > 0 && (z.value = A.value[q - 1].id);
    }
    function Ie() {
      const q = A.value.findIndex((B) => B.id === z.value);
      q < A.value.length - 1 && (z.value = A.value[q + 1].id);
    }
    async function fe() {
      p.value = !0, I.value = null;
      try {
        b.value = await f(s.workflowName);
      } catch (q) {
        I.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function Z() {
      S.value.includes("analysis") || S.value.push("analysis"), w.value ? z.value = "nodes" : M.value || x.value ? z.value = "models" : z.value = "review";
    }
    function De(q) {
      k.value.set(q, { action: "optional" });
    }
    function Ue(q) {
      k.value.set(q, { action: "skip" });
    }
    function at(q, B) {
      var ve;
      const oe = R.value.find((Me) => Me.node_type === q);
      (ve = oe == null ? void 0 : oe.options) != null && ve[B] && k.value.set(q, {
        action: "install",
        package_id: oe.options[B].package_id
      });
    }
    function me(q, B) {
      k.value.set(q, {
        action: "install",
        package_id: B
      });
    }
    function Ee(q) {
      k.value.delete(q);
    }
    function Y(q) {
      C.value.set(q, { action: "optional" });
    }
    function ne(q) {
      C.value.set(q, { action: "skip" });
    }
    function re(q, B) {
      var ve;
      const oe = N.value.find((Me) => Me.filename === q);
      (ve = oe == null ? void 0 : oe.options) != null && ve[B] && C.value.set(q, {
        action: "select",
        selected_model: oe.options[B].model
      });
    }
    function ke(q, B, oe) {
      C.value.set(q, {
        action: "download",
        url: B,
        target_path: oe
      });
    }
    function Je(q) {
      C.value.delete(q);
    }
    async function bt() {
      $.value = !0, I.value = null, r(), m.phase = "resolving", z.value = "applying";
      try {
        const q = await y(s.workflowName, k.value, C.value);
        q.models_to_download && q.models_to_download.length > 0 && h(s.workflowName, q.models_to_download), m.nodesToInstall = q.nodes_to_install || [], m.phase = "complete", await u(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (q) {
        I.value = q instanceof Error ? q.message : "Failed to apply resolution", m.error = I.value, m.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    return be(fe), (q, B) => (o(), _(yt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: p.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (oe) => i("close"))
    }, {
      body: a(() => [
        p.value && !b.value ? (o(), n("div", vr, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", fr, [
          v(fl, {
            steps: A.value,
            "current-step": z.value,
            "completed-steps": S.value,
            "step-stats": P.value,
            onStepChange: F
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          z.value === "analysis" ? (o(), n("div", gr, [
            e("div", hr, [
              e("div", pr, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", yr, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", wr, [
                e("div", br, [
                  B[10] || (B[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kr, [
                    e("div", _r, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", $r, l(b.value.nodes.resolved.length), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", Cr, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", xr, l(b.value.nodes.ambiguous.length), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", Sr, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ir, l(b.value.nodes.unresolved.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Er, [
                  B[19] || (B[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", zr, [
                    e("div", Mr, [
                      B[11] || (B[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Lr, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      B[12] || (B[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Tr, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Rr, l(b.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Nr, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Dr, l(b.value.models.ambiguous.length), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Ur, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Or, l(b.value.models.unresolved.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              T.value ? (o(), n("div", Br, [
                B[20] || (B[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Pr, l(R.value.length + N.value.length) + " items need your input", 1)
              ])) : x.value ? (o(), n("div", Ar, [
                B[21] || (B[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Vr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Fr, [...B[22] || (B[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          z.value === "nodes" ? (o(), _(ui, {
            key: 1,
            nodes: R.value,
            "node-choices": k.value,
            onMarkOptional: De,
            onSkip: Ue,
            onOptionSelected: at,
            onManualEntry: me,
            onClearChoice: Ee
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          z.value === "models" ? (o(), _(or, {
            key: 2,
            models: U.value,
            "model-choices": C.value,
            onMarkOptional: Y,
            onSkip: ne,
            onOptionSelected: re,
            onDownloadUrl: ke,
            onClearChoice: Je
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          z.value === "review" ? (o(), n("div", Wr, [
            e("div", Gr, [
              B[27] || (B[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", jr, [
                e("div", Hr, [
                  e("span", Kr, l(j.value), 1),
                  B[23] || (B[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", qr, [
                  e("span", Jr, l(H.value), 1),
                  B[24] || (B[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Xr, [
                  e("span", Yr, l(Q.value), 1),
                  B[25] || (B[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Qr, [
                  e("span", Zr, l(V.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              R.value.length > 0 ? (o(), n("div", ed, [
                e("h4", td, "Node Packages (" + l(R.value.length) + ")", 1),
                e("div", od, [
                  (o(!0), n(G, null, ee(R.value, (oe) => {
                    var ve, Me, Oe, Be;
                    return o(), n("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      e("code", sd, l(oe.node_type), 1),
                      e("div", nd, [
                        k.value.has(oe.node_type) ? (o(), n(G, { key: 0 }, [
                          ((ve = k.value.get(oe.node_type)) == null ? void 0 : ve.action) === "install" ? (o(), n("span", ad, l((Me = k.value.get(oe.node_type)) == null ? void 0 : Me.package_id), 1)) : ((Oe = k.value.get(oe.node_type)) == null ? void 0 : Oe.action) === "optional" ? (o(), n("span", ld, " Optional ")) : ((Be = k.value.get(oe.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", id, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", rd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (o(), n("div", dd, [
                e("h4", cd, "Models (" + l(U.value.length) + ")", 1),
                e("div", ud, [
                  (o(!0), n(G, null, ee(U.value, (oe) => {
                    var ve, Me, Oe, Be, ft, Pe, gt;
                    return o(), n("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      e("code", md, l(oe.filename), 1),
                      e("div", vd, [
                        C.value.has(oe.filename) ? (o(), n(G, { key: 0 }, [
                          ((ve = C.value.get(oe.filename)) == null ? void 0 : ve.action) === "select" ? (o(), n("span", fd, l((Oe = (Me = C.value.get(oe.filename)) == null ? void 0 : Me.selected_model) == null ? void 0 : Oe.filename), 1)) : ((Be = C.value.get(oe.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", gd, " Download ")) : ((ft = C.value.get(oe.filename)) == null ? void 0 : ft.action) === "optional" ? (o(), n("span", hd, " Optional ")) : ((Pe = C.value.get(oe.filename)) == null ? void 0 : Pe.action) === "skip" ? (o(), n("span", pd, " Skip ")) : ((gt = C.value.get(oe.filename)) == null ? void 0 : gt.action) === "cancel_download" ? (o(), n("span", yd, " Cancel Download ")) : c("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), n("span", wd, " Pending Download ")) : (o(), n("span", bd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              R.value.length === 0 && U.value.length === 0 ? (o(), n("div", kd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          z.value === "applying" ? (o(), _(mr, {
            key: 4,
            progress: ce(m)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        z.value !== "analysis" && z.value !== "applying" ? (o(), _(le, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: pe
        }, {
          default: a(() => [...B[28] || (B[28] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[31] || (B[31] = e("div", { class: "footer-spacer" }, null, -1)),
        z.value !== "applying" || ce(m).phase === "complete" || ce(m).phase === "error" ? (o(), _(le, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (oe) => i("close"))
        }, {
          default: a(() => [
            g(l(ce(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        z.value === "analysis" ? (o(), _(le, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: Z
        }, {
          default: a(() => [
            g(l(T.value || x.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        z.value === "nodes" ? (o(), _(le, {
          key: 3,
          variant: "primary",
          onClick: Ie
        }, {
          default: a(() => [
            g(l(M.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        z.value === "models" ? (o(), _(le, {
          key: 4,
          variant: "primary",
          onClick: Ie
        }, {
          default: a(() => [...B[29] || (B[29] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        z.value === "review" ? (o(), _(le, {
          key: 5,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: bt
        }, {
          default: a(() => [...B[30] || (B[30] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), $d = /* @__PURE__ */ X(_d, [["__scopeId", "data-v-c69fd67a"]]), Cd = { class: "search-input-wrapper" }, xd = ["value", "placeholder"], Sd = /* @__PURE__ */ J({
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
    const s = t, i = d, f = E(null);
    let y;
    function h(r) {
      const u = r.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        i("update:modelValue", u);
      }, s.debounce)) : i("update:modelValue", u);
    }
    function m() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = f.value) == null || r.focus();
    }
    return be(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (r, u) => (o(), n("div", Cd, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ge(m, ["escape"])
      }, null, 40, xd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Id = /* @__PURE__ */ X(Sd, [["__scopeId", "data-v-266f857a"]]), Ed = { class: "search-bar" }, zd = /* @__PURE__ */ J({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Ed, [
      v(Id, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), st = /* @__PURE__ */ X(zd, [["__scopeId", "data-v-3d51bbfd"]]), Md = { class: "section-group" }, Ld = {
  key: 0,
  class: "section-content"
}, Td = /* @__PURE__ */ J({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E(s.initiallyExpanded);
    function y() {
      s.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (h, m) => (o(), n("section", Md, [
      v(Se, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: y
      }, {
        default: a(() => [
          g(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", Ld, [
        ie(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), he = /* @__PURE__ */ X(Td, [["__scopeId", "data-v-c48e33ed"]]), Rd = { class: "item-header" }, Nd = {
  key: 0,
  class: "item-icon"
}, Dd = { class: "item-info" }, Ud = {
  key: 0,
  class: "item-title"
}, Od = {
  key: 1,
  class: "item-subtitle"
}, Bd = {
  key: 0,
  class: "item-details"
}, Pd = {
  key: 1,
  class: "item-actions"
}, Ad = /* @__PURE__ */ J({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, i = D(() => s.status ? `status-${s.status}` : "");
    return (f, y) => (o(), n("div", {
      class: te(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && f.$emit("click"))
    }, [
      e("div", Rd, [
        f.$slots.icon ? (o(), n("span", Nd, [
          ie(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Dd, [
          f.$slots.title ? (o(), n("div", Ud, [
            ie(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (o(), n("div", Od, [
            ie(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", Bd, [
        ie(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (o(), n("div", Pd, [
        ie(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), we = /* @__PURE__ */ X(Ad, [["__scopeId", "data-v-cc435e0e"]]), Vd = { class: "loading-state" }, Fd = { class: "loading-message" }, Wd = /* @__PURE__ */ J({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Vd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Fd, l(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ X(Wd, [["__scopeId", "data-v-ad8436c9"]]), Gd = { class: "error-state" }, jd = { class: "error-message" }, Hd = /* @__PURE__ */ J({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Gd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", jd, l(t.message), 1),
      t.retry ? (o(), _(K, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ X(Hd, [["__scopeId", "data-v-5397be48"]]), Kd = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const i = s, { getWorkflows: f } = Ce(), y = E([]), h = E(!1), m = E(null), r = E(""), u = E(!0), b = E(!1), p = E(!1), $ = E(!1), I = E(null), z = D(
      () => y.value.filter((V) => V.status === "broken")
    ), S = D(
      () => y.value.filter((V) => V.status === "new")
    ), k = D(
      () => y.value.filter((V) => V.status === "modified")
    ), C = D(
      () => y.value.filter((V) => V.status === "synced")
    ), A = D(() => {
      if (!r.value.trim()) return y.value;
      const V = r.value.toLowerCase();
      return y.value.filter((P) => P.name.toLowerCase().includes(V));
    }), T = D(
      () => z.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), w = D(
      () => S.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), M = D(
      () => k.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = D(
      () => C.value.filter(
        (V) => !r.value.trim() || V.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), O = D(
      () => b.value ? x.value : x.value.slice(0, 5)
    );
    async function R(V = !1) {
      h.value = !0, m.value = null;
      try {
        y.value = await f(V);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    d({ loadWorkflows: R });
    function N(V) {
      I.value = V, p.value = !0;
    }
    function U(V) {
      I.value = V, $.value = !0;
    }
    function j() {
      alert("Bulk resolution not yet implemented");
    }
    function H() {
      i("refresh");
    }
    function Q(V) {
      const P = [];
      return V.missing_nodes > 0 && P.push(`${V.missing_nodes} missing node${V.missing_nodes > 1 ? "s" : ""}`), V.missing_models > 0 && P.push(`${V.missing_models} missing model${V.missing_models > 1 ? "s" : ""}`), V.pending_downloads && V.pending_downloads > 0 && P.push(`${V.pending_downloads} pending download${V.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    return be(R), (V, P) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, { title: "WORKFLOWS" }, {
            actions: a(() => [
              z.value.length > 0 ? (o(), _(K, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: a(() => [...P[7] || (P[7] = [
                  g(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: r.value,
            "onUpdate:modelValue": P[0] || (P[0] = (F) => r.value = F),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), _(He, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), _(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            T.value.length ? (o(), _(he, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(T.value, (F) => (o(), _(we, {
                  key: F.name,
                  status: "broken"
                }, {
                  icon: a(() => [...P[8] || (P[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(F.name), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(Q(F)), 1)
                  ]),
                  actions: a(() => [
                    v(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: (pe) => U(F.name)
                    }, {
                      default: a(() => [...P[9] || (P[9] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => N(F.name)
                    }, {
                      default: a(() => [...P[10] || (P[10] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            w.value.length ? (o(), _(he, {
              key: 1,
              title: "NEW",
              count: w.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(w.value, (F) => (o(), _(we, {
                  key: F.name,
                  status: "new"
                }, {
                  icon: a(() => [...P[11] || (P[11] = [
                    g("●", -1)
                  ])]),
                  title: a(() => [
                    g(l(F.name), 1)
                  ]),
                  subtitle: a(() => [...P[12] || (P[12] = [
                    g("New", -1)
                  ])]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => N(F.name)
                    }, {
                      default: a(() => [...P[13] || (P[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), _(he, {
              key: 2,
              title: "MODIFIED",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(M.value, (F) => (o(), _(we, {
                  key: F.name,
                  status: "modified"
                }, {
                  icon: a(() => [...P[14] || (P[14] = [
                    g("⚡", -1)
                  ])]),
                  title: a(() => [
                    g(l(F.name), 1)
                  ]),
                  subtitle: a(() => [...P[15] || (P[15] = [
                    g("Modified", -1)
                  ])]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => N(F.name)
                    }, {
                      default: a(() => [...P[16] || (P[16] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (o(), _(he, {
              key: 3,
              title: "SYNCED",
              count: x.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: P[2] || (P[2] = (F) => u.value = F)
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(O.value, (F) => (o(), _(we, {
                  key: F.name,
                  status: "synced"
                }, {
                  icon: a(() => [...P[17] || (P[17] = [
                    g("✓", -1)
                  ])]),
                  title: a(() => [
                    g(l(F.name), 1)
                  ]),
                  subtitle: a(() => [...P[18] || (P[18] = [
                    g("Synced", -1)
                  ])]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => N(F.name)
                    }, {
                      default: a(() => [...P[19] || (P[19] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && x.value.length > 5 ? (o(), _(K, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (F) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    g(" View all " + l(x.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            A.value.length ? c("", !0) : (o(), _(Ne, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && I.value ? (o(), _(tl, {
        key: 0,
        "workflow-name": I.value,
        onClose: P[3] || (P[3] = (F) => p.value = !1),
        onResolve: P[4] || (P[4] = (F) => U(I.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      $.value && I.value ? (o(), _($d, {
        key: 1,
        "workflow-name": I.value,
        onClose: P[5] || (P[5] = (F) => $.value = !1),
        onInstall: H,
        onRefresh: P[6] || (P[6] = (F) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), qd = /* @__PURE__ */ X(Kd, [["__scopeId", "data-v-862d0231"]]), Jd = /* @__PURE__ */ J({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["summary-bar", t.variant])
    }, [
      ie(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ X(Jd, [["__scopeId", "data-v-ccb7816e"]]), Xd = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: f } = Ce(), y = E([]), h = E([]), m = E("production"), r = E(!1), u = E(null), b = E(""), p = E(!1);
    function $() {
      p.value = !1, s("navigate", "model-index");
    }
    const I = D(
      () => y.value.reduce((R, N) => R + (N.size || 0), 0)
    ), z = D(() => {
      if (!b.value.trim()) return y.value;
      const R = b.value.toLowerCase();
      return y.value.filter((N) => N.filename.toLowerCase().includes(R));
    }), S = D(() => {
      if (!b.value.trim()) return h.value;
      const R = b.value.toLowerCase();
      return h.value.filter((N) => N.filename.toLowerCase().includes(R));
    }), k = D(
      () => z.value.filter((R) => R.type === "checkpoints")
    ), C = D(
      () => z.value.filter((R) => R.type === "loras")
    ), A = D(
      () => z.value.filter((R) => R.type !== "checkpoints" && R.type !== "loras")
    );
    function T(R) {
      if (!R) return "Unknown";
      const N = R / (1024 * 1024);
      return N >= 1024 ? `${(N / 1024).toFixed(1)} GB` : `${N.toFixed(0)} MB`;
    }
    function w(R) {
      s("navigate", "model-index");
    }
    function M(R) {
      s("navigate", "model-index");
    }
    function x(R) {
      alert(`Download functionality not yet implemented for ${R}`);
    }
    async function O() {
      r.value = !0, u.value = null;
      try {
        const R = await i();
        y.value = R, h.value = [];
        const N = await f();
        m.value = N.environment || "production";
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return be(O), (R, N) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (U) => p.value = !0)
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: b.value,
            "onUpdate:modelValue": N[1] || (N[1] = (U) => b.value = U),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), _(He, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), _(Ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            y.value.length ? (o(), _(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(y.value.length) + " models • " + l(T(I.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), _(he, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(k.value, (U) => (o(), _(we, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[3] || (N[3] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(T(U.size)), 1)
                  ]),
                  details: a(() => [
                    v(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => w(U.hash)
                    }, {
                      default: a(() => [...N[4] || (N[4] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? (o(), _(he, {
              key: 2,
              title: "LORAS",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(C.value, (U) => (o(), _(we, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[5] || (N[5] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(T(U.size)), 1)
                  ]),
                  details: a(() => [
                    v(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => w(U.hash)
                    }, {
                      default: a(() => [...N[6] || (N[6] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            A.value.length ? (o(), _(he, {
              key: 3,
              title: "OTHER",
              count: A.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(A.value, (U) => (o(), _(we, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[7] || (N[7] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(T(U.size)), 1)
                  ]),
                  details: a(() => [
                    v(se, {
                      label: "Type:",
                      value: U.type
                    }, null, 8, ["value"]),
                    v(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => w(U.hash)
                    }, {
                      default: a(() => [...N[8] || (N[8] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), _(he, {
              key: 4,
              title: "MISSING",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(S.value, (U) => (o(), _(we, {
                  key: U.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...N[9] || (N[9] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [...N[10] || (N[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var j;
                    return [
                      v(se, {
                        label: "Required by:",
                        value: ((j = U.workflow_names) == null ? void 0 : j.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    v(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => x(U.filename)
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => M(U.filename)
                    }, {
                      default: a(() => [...N[12] || (N[12] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !z.value.length && !S.value.length ? (o(), _(Ne, {
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
        onClose: N[2] || (N[2] = (U) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            N[13] || (N[13] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            N[14] || (N[14] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          v(K, {
            variant: "primary",
            onClick: $
          }, {
            default: a(() => [...N[15] || (N[15] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yd = /* @__PURE__ */ X(Xd, [["__scopeId", "data-v-72675609"]]), Qd = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = Ce(), s = E([]), i = E(!1), f = E(null), y = E(""), h = E(!1), m = D(
      () => s.value.reduce((x, O) => x + (O.size_mb || O.size || 0), 0)
    ), r = D(() => {
      const x = /* @__PURE__ */ new Set();
      return s.value.forEach((O) => {
        O.used_in_environments && O.used_in_environments.length > 0 && O.used_in_environments.forEach((R) => x.add(R.env_name));
      }), x.size;
    }), u = D(() => {
      if (!y.value.trim()) return s.value;
      const x = y.value.toLowerCase();
      return s.value.filter((O) => {
        const R = O, N = O.sha256 || R.sha256_hash || "";
        return O.filename.toLowerCase().includes(x) || N.toLowerCase().includes(x);
      });
    }), b = D(
      () => u.value.filter((x) => x.type === "checkpoints")
    ), p = D(
      () => u.value.filter((x) => x.type === "loras")
    ), $ = D(
      () => u.value.filter((x) => x.type !== "checkpoints" && x.type !== "loras")
    );
    function I(x) {
      return x ? x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB` : "Unknown";
    }
    function z(x) {
      const O = x, R = x.used_in_workflows || O.used_by || [];
      return !R || R.length === 0 ? "Not used" : `${R.length} workflow(s)`;
    }
    function S(x) {
      navigator.clipboard.writeText(x), alert("Hash copied to clipboard");
    }
    function k(x) {
      prompt("Enter model source URL:", x.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function C(x) {
      const O = x, R = x.used_in_workflows || O.used_by || [], N = R && R.length > 0 ? `

⚠ WARNING: This model is used by ${R.length} workflow(s):
${R.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${x.filename}?${N}

This will free ${I(O.size_mb || x.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function A() {
      alert("Scan for models not yet implemented");
    }
    function T() {
      alert("Change directory not yet implemented");
    }
    function w() {
      alert("Download new model not yet implemented");
    }
    async function M() {
      i.value = !0, f.value = null;
      try {
        s.value = await d(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", b.value), console.log("Filtered loras:", p.value), console.log("Filtered other:", $.value);
      } catch (x) {
        f.value = x instanceof Error ? x.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return be(M), (x, O) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[0] || (O[0] = (R) => h.value = !0)
          }, {
            actions: a(() => [
              v(K, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: a(() => [...O[3] || (O[3] = [
                  g(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              v(K, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: a(() => [...O[4] || (O[4] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              v(K, {
                variant: "primary",
                size: "sm",
                onClick: w
              }, {
                default: a(() => [...O[5] || (O[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: y.value,
            "onUpdate:modelValue": O[1] || (O[1] = (R) => y.value = R),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), _(He, {
            key: 0,
            message: "Loading workspace models..."
          })) : f.value ? (o(), _(Ke, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length ? (o(), _(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(s.value.length) + " models • " + l(I(m.value)) + " • Used in " + l(r.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            b.value.length ? (o(), _(he, {
              key: 1,
              title: "CHECKPOINTS",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(b.value, (R) => (o(), _(we, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[6] || (O[6] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(R.size_mb || R.size)), 1)
                  ]),
                  details: a(() => {
                    var N, U;
                    return [
                      R.sha256 || R.sha256_hash ? (o(), _(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (R.sha256 || R.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      v(se, {
                        label: "Used in:",
                        value: z(R)
                      }, null, 8, ["value"]),
                      R.source_url || (N = R.sources) != null && N[0] ? (o(), _(se, {
                        key: 1,
                        label: "Source URL:",
                        value: R.source_url || ((U = R.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), _(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...O[7] || (O[7] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => k(R)
                    }, {
                      default: a(() => [...O[8] || (O[8] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    R.sha256 || R.sha256_hash ? (o(), _(K, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(R.sha256 || R.sha256_hash)
                    }, {
                      default: a(() => [...O[9] || (O[9] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(K, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => C(R)
                    }, {
                      default: a(() => [...O[10] || (O[10] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            p.value.length ? (o(), _(he, {
              key: 2,
              title: "LORAS",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(p.value, (R) => (o(), _(we, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[11] || (O[11] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(R.size_mb || R.size)), 1)
                  ]),
                  details: a(() => {
                    var N, U;
                    return [
                      R.sha256 || R.sha256_hash ? (o(), _(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (R.sha256 || R.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      v(se, {
                        label: "Used in:",
                        value: z(R)
                      }, null, 8, ["value"]),
                      R.source_url || (N = R.sources) != null && N[0] ? (o(), _(se, {
                        key: 1,
                        label: "Source URL:",
                        value: R.source_url || ((U = R.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), _(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...O[12] || (O[12] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => k(R)
                    }, {
                      default: a(() => [...O[13] || (O[13] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    R.sha256 || R.sha256_hash ? (o(), _(K, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(R.sha256 || R.sha256_hash)
                    }, {
                      default: a(() => [...O[14] || (O[14] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(K, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => C(R)
                    }, {
                      default: a(() => [...O[15] || (O[15] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (o(), _(he, {
              key: 3,
              title: "OTHER",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee($.value, (R) => (o(), _(we, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[16] || (O[16] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(R.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(l(I(R.size_mb || R.size)), 1)
                  ]),
                  details: a(() => [
                    v(se, {
                      label: "Type:",
                      value: R.type
                    }, null, 8, ["value"]),
                    R.sha256 || R.sha256_hash ? (o(), _(se, {
                      key: 0,
                      label: "SHA256:",
                      value: (R.sha256 || R.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    v(se, {
                      label: "Used in:",
                      value: z(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => k(R)
                    }, {
                      default: a(() => [...O[17] || (O[17] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    R.sha256 || R.sha256_hash ? (o(), _(K, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(R.sha256 || R.sha256_hash)
                    }, {
                      default: a(() => [...O[18] || (O[18] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v(K, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (N) => C(R)
                    }, {
                      default: a(() => [...O[19] || (O[19] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            u.value.length ? c("", !0) : (o(), _(Ne, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: O[2] || (O[2] = (R) => h.value = !1)
      }, {
        content: a(() => [...O[20] || (O[20] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zd = /* @__PURE__ */ X(Qd, [["__scopeId", "data-v-5a24af01"]]), ec = { key: 0 }, tc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, oc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, sc = /* @__PURE__ */ J({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: i, uninstallNode: f } = Ce(), y = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = E(!1), m = E(null), r = E(""), u = E(!1), b = D(() => {
      if (!r.value.trim()) return y.value.nodes;
      const w = r.value.toLowerCase();
      return y.value.nodes.filter(
        (M) => {
          var x, O;
          return M.name.toLowerCase().includes(w) || ((x = M.description) == null ? void 0 : x.toLowerCase().includes(w)) || ((O = M.repository) == null ? void 0 : O.toLowerCase().includes(w));
        }
      );
    }), p = D(
      () => b.value.filter((w) => w.installed)
    ), $ = D(
      () => b.value.filter((w) => !w.installed)
    );
    function I(w) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[w] || w;
    }
    function z(w) {
      return !w.used_in_workflows || w.used_in_workflows.length === 0 ? "Not used in any workflows" : w.used_in_workflows.length === 1 ? w.used_in_workflows[0] : `${w.used_in_workflows.length} workflows`;
    }
    function S(w) {
      window.open(w, "_blank");
    }
    async function k(w) {
      if (confirm(`Install node "${w}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const M = await s(w);
          M.status === "success" ? (alert(`Node "${w}" installed successfully!`), await T()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function C(w) {
      if (confirm(`Check for updates for "${w}"?`))
        try {
          h.value = !0;
          const M = await i(w);
          M.status === "success" ? (alert(`Node "${w}" is up to date or has been updated!`), await T()) : alert(`Update check failed: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error checking for updates: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function A(w) {
      if (confirm(`Uninstall node "${w}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const M = await f(w);
          M.status === "success" ? (alert(`Node "${w}" uninstalled successfully!`), await T()) : alert(`Failed to uninstall node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error uninstalling node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function T() {
      h.value = !0, m.value = null;
      try {
        y.value = await d();
      } catch (w) {
        m.value = w instanceof Error ? w.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return be(T), (w, M) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (x) => u.value = !0)
          })
        ]),
        search: a(() => [
          v(st, {
            modelValue: r.value,
            "onUpdate:modelValue": M[1] || (M[1] = (x) => r.value = x),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), _(He, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : m.value ? (o(), _(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            y.value.total_count ? (o(), _(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), _(he, {
              key: 1,
              title: "INSTALLED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(p.value, (x) => (o(), _(we, {
                  key: x.name,
                  status: "synced"
                }, {
                  icon: a(() => [...M[4] || (M[4] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(l(x.name), 1)
                  ]),
                  subtitle: a(() => [
                    x.version ? (o(), n("span", ec, "v" + l(x.version), 1)) : (o(), n("span", tc, "version unknown")),
                    x.source ? (o(), n("span", oc, " • " + l(I(x.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    x.description ? (o(), _(se, {
                      key: 0,
                      label: "Description:",
                      value: x.description
                    }, null, 8, ["value"])) : c("", !0),
                    x.repository ? (o(), _(se, {
                      key: 1,
                      label: "Repository:",
                      value: x.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(se, {
                      label: "Used by:",
                      value: z(x)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    x.repository ? (o(), _(K, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => S(x.repository)
                    }, {
                      default: a(() => [...M[5] || (M[5] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    x.source === "registry" ? (o(), _(K, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => C(x.name)
                    }, {
                      default: a(() => [...M[6] || (M[6] = [
                        g(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    x.source !== "unknown" ? (o(), _(K, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (O) => A(x.name)
                    }, {
                      default: a(() => [...M[7] || (M[7] = [
                        g(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? (o(), _(he, {
              key: 2,
              title: "MISSING",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee($.value, (x) => (o(), _(we, {
                  key: x.name,
                  status: "missing"
                }, {
                  icon: a(() => [...M[8] || (M[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(l(x.name), 1)
                  ]),
                  subtitle: a(() => [...M[9] || (M[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    x.description ? (o(), _(se, {
                      key: 0,
                      label: "Description:",
                      value: x.description
                    }, null, 8, ["value"])) : c("", !0),
                    x.repository ? (o(), _(se, {
                      key: 1,
                      label: "Repository:",
                      value: x.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(se, {
                      label: "Required by:",
                      value: z(x)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    x.download_url ? (o(), _(K, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => k(x.name)
                    }, {
                      default: a(() => [...M[10] || (M[10] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    x.repository ? (o(), _(K, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(x.repository)
                    }, {
                      default: a(() => [...M[11] || (M[11] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !p.value.length && !$.value.length ? (o(), _(Ne, {
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
        onClose: M[3] || (M[3] = (x) => u.value = !1)
      }, {
        content: a(() => [...M[12] || (M[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            g(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            g(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          v(K, {
            variant: "primary",
            onClick: M[2] || (M[2] = (x) => u.value = !1)
          }, {
            default: a(() => [...M[13] || (M[13] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nc = /* @__PURE__ */ X(sc, [["__scopeId", "data-v-c480e2c1"]]), ac = { class: "remote-url-display" }, lc = ["title"], ic = ["title"], rc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, dc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, cc = /* @__PURE__ */ J({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = E(!1), i = D(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), h = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), n("div", ac, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, lc),
      e("button", {
        class: te(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", dc, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", rc, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ic)
    ]));
  }
}), Ut = /* @__PURE__ */ X(cc, [["__scopeId", "data-v-7768a58d"]]), uc = { class: "remote-title" }, mc = {
  key: 0,
  class: "default-badge"
}, vc = {
  key: 1,
  class: "sync-badge"
}, fc = {
  key: 0,
  class: "ahead"
}, gc = {
  key: 1,
  class: "behind"
}, hc = {
  key: 0,
  class: "tracking-info"
}, pc = /* @__PURE__ */ J({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, i = D(() => s.fetchingRemote === s.remote.name), f = D(() => s.remote.is_default), y = D(() => !!s.trackingBranch);
    function h(m) {
      const r = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const $ = Math.floor(p / 60);
      if ($ < 24) return `${$}h ago`;
      const I = Math.floor($ / 24);
      return I < 7 ? `${I}d ago` : r.toLocaleDateString();
    }
    return (m, r) => (o(), _(we, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        g(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", uc, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", mc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", vc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", fc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", gc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", hc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          v(se, { label: "Fetch:" }, {
            default: a(() => [
              v(Ut, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), _(se, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              v(Ut, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), _(se, {
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
        v(K, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        v(K, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (o(), _(K, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), yc = /* @__PURE__ */ X(pc, [["__scopeId", "data-v-17362e45"]]), wc = ["for"], bc = {
  key: 0,
  class: "base-form-field-required"
}, kc = { class: "base-form-field-input" }, _c = {
  key: 1,
  class: "base-form-field-error"
}, $c = {
  key: 2,
  class: "base-form-field-hint"
}, Cc = /* @__PURE__ */ J({
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
      class: te(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        g(l(t.label) + " ", 1),
        t.required ? (o(), n("span", bc, "*")) : c("", !0)
      ], 8, wc)) : c("", !0),
      e("div", kc, [
        ie(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", _c, l(t.error), 1)) : t.hint ? (o(), n("span", $c, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ X(Cc, [["__scopeId", "data-v-9a1cf296"]]), xc = { class: "remote-form" }, Sc = { class: "form-header" }, Ic = { class: "form-body" }, Ec = {
  key: 0,
  class: "form-error"
}, zc = { class: "form-actions" }, Mc = /* @__PURE__ */ J({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = E({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = E(!1), h = E(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const m = D(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!m.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          i("submit", f.value);
        } catch (u) {
          h.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, b) => (o(), n("div", xc, [
      e("div", Sc, [
        v(Se, null, {
          default: a(() => [
            g(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Ic, [
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
        h.value ? (o(), n("div", Ec, l(h.value), 1)) : c("", !0)
      ]),
      e("div", zc, [
        v(K, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: r
        }, {
          default: a(() => [
            g(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        v(K, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => u.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Lc = /* @__PURE__ */ X(Mc, [["__scopeId", "data-v-56021b18"]]), Tc = { key: 0 }, Rc = /* @__PURE__ */ J({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = Ce(), m = E([]), r = E(null), u = E({}), b = E(!1), p = E(null), $ = E(""), I = E(!1), z = E(null), S = E(!1), k = E("add"), C = E({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), A = D(() => {
      if (!$.value.trim()) return m.value;
      const H = $.value.toLowerCase();
      return m.value.filter(
        (Q) => Q.name.toLowerCase().includes(H) || Q.fetch_url.toLowerCase().includes(H) || Q.push_url.toLowerCase().includes(H)
      );
    });
    function T(H) {
      var Q;
      return ((Q = r.value) == null ? void 0 : Q.remote) === H;
    }
    async function w() {
      b.value = !0, p.value = null;
      try {
        const H = await d();
        m.value = H.remotes, r.value = H.current_branch_tracking || null, await Promise.all(
          H.remotes.map(async (Q) => {
            const V = await h(Q.name);
            V && (u.value[Q.name] = V);
          })
        );
      } catch (H) {
        p.value = H instanceof Error ? H.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function M() {
      k.value = "add", C.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function x(H) {
      const Q = m.value.find((V) => V.name === H);
      Q && (k.value = "edit", C.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, S.value = !0);
    }
    async function O(H) {
      try {
        k.value === "add" ? await s(H.name, H.fetchUrl) : await f(H.name, H.fetchUrl, H.pushUrl || void 0), S.value = !1, await w();
      } catch (Q) {
        p.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function R() {
      S.value = !1, C.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function N(H) {
      z.value = H;
      try {
        await y(H);
        const Q = await h(H);
        Q && (u.value[H] = Q);
      } catch (Q) {
        p.value = Q instanceof Error ? Q.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function U(H) {
      if (confirm(`Remove remote "${H}"?`))
        try {
          await i(H), await w();
        } catch (Q) {
          p.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function j() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(w), (H, Q) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (V) => I.value = !0)
          }, {
            actions: a(() => [
              S.value ? c("", !0) : (o(), _(K, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...Q[3] || (Q[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          S.value ? c("", !0) : (o(), _(st, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (V) => $.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), _(He, {
            key: 0,
            message: "Loading remotes..."
          })) : p.value ? (o(), _(Ke, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            S.value ? (o(), _(Lc, {
              key: 0,
              mode: k.value,
              "remote-name": C.value.name,
              "fetch-url": C.value.fetchUrl,
              "push-url": C.value.pushUrl,
              onSubmit: O,
              onCancel: R
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !S.value ? (o(), _(nt, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", Tc, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            A.value.length && !S.value ? (o(), _(he, {
              key: 2,
              title: "REMOTES",
              count: A.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, ee(A.value, (V) => {
                  var P;
                  return o(), _(yc, {
                    key: V.name,
                    remote: V,
                    "sync-status": u.value[V.name],
                    "tracking-branch": T(V.name) ? (P = r.value) == null ? void 0 : P.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: N,
                    onEdit: x,
                    onRemove: U
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !A.value.length && !S.value ? (o(), _(Ne, {
              key: 3,
              icon: "🌐",
              message: $.value ? `No remotes match '${$.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                v(K, {
                  variant: "primary",
                  onClick: M
                }, {
                  default: a(() => [...Q[4] || (Q[4] = [
                    g(" Add Your First Remote ", -1)
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
        show: I.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (V) => I.value = !1)
      }, {
        content: a(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          v(K, {
            variant: "link",
            onClick: j
          }, {
            default: a(() => [...Q[6] || (Q[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Nc = /* @__PURE__ */ X(Rc, [["__scopeId", "data-v-a75719bb"]]), Dc = { class: "setting-info" }, Uc = { class: "setting-label" }, Oc = {
  key: 0,
  class: "required-marker"
}, Bc = {
  key: 0,
  class: "setting-description"
}, Pc = { class: "setting-control" }, Ac = /* @__PURE__ */ J({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: te(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Dc, [
        e("div", Uc, [
          g(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Oc, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Bc, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Pc, [
        ie(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ X(Ac, [["__scopeId", "data-v-cb5d236c"]]), Vc = { class: "toggle" }, Fc = ["checked", "disabled"], Wc = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Vc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Fc),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qe = /* @__PURE__ */ X(Wc, [["__scopeId", "data-v-71c0f550"]]), Gc = { class: "settings-section" }, jc = { class: "path-setting" }, Hc = { class: "path-value" }, Kc = { class: "path-setting" }, qc = { class: "path-value" }, Jc = { class: "settings-section" }, Xc = { class: "settings-section" }, Yc = { class: "settings-section" }, Qc = /* @__PURE__ */ J({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = Ce(), i = E(!1), f = E(null), y = E(null), h = E(null), m = E(null), r = E(""), u = E(""), b = E(!0), p = E(!0), $ = E(!1), I = D(() => m.value ? r.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      i.value = !0, f.value = null;
      try {
        h.value = await d(), m.value = { ...h.value }, r.value = h.value.civitai_api_key || "", u.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, p.value = h.value.confirm_destructive;
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        $.value = A === "true";
      } catch (A) {
        f.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function S() {
      var A;
      y.value = null;
      try {
        const T = {};
        r.value !== (((A = m.value) == null ? void 0 : A.civitai_api_key) || "") && (T.civitai_api_key = r.value || null), await s(T), await z(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (T) {
        y.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (r.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, p.value = m.value.confirm_destructive, y.value = null);
    }
    function C(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return be(z), (A, T) => (o(), _(_e, null, {
      header: a(() => [
        v($e, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            v(K, {
              variant: "primary",
              size: "sm",
              disabled: !I.value,
              onClick: S
            }, {
              default: a(() => [...T[5] || (T[5] = [
                g(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            I.value ? (o(), _(K, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...T[6] || (T[6] = [
                g(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        i.value ? (o(), _(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), _(Ke, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
          v(he, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var w, M;
              return [
                e("div", Gc, [
                  e("div", jc, [
                    T[7] || (T[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    T[8] || (T[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Hc, l(((w = h.value) == null ? void 0 : w.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Kc, [
                    T[9] || (T[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    T[10] || (T[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", qc, l(((M = h.value) == null ? void 0 : M.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(he, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Jc, [
                v(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    v(vt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": T[0] || (T[0] = (w) => r.value = w),
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
                      "onUpdate:modelValue": T[1] || (T[1] = (w) => u.value = w),
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
          v(he, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Xc, [
                v(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    v(Qe, {
                      modelValue: $.value,
                      "onUpdate:modelValue": [
                        T[2] || (T[2] = (w) => $.value = w),
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
          v(he, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Yc, [
                v(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Qe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": T[3] || (T[3] = (w) => b.value = w),
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
                      "onUpdate:modelValue": T[4] || (T[4] = (w) => p.value = w),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), _(nt, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Ze({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Zc = /* @__PURE__ */ X(Qc, [["__scopeId", "data-v-7861bd35"]]), eu = /* @__PURE__ */ J({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = Ce(), s = E([]), i = E(!1), f = E(null), y = E(!1), h = E(null), m = D(() => s.value.length === 0 ? [] : s.value.map((u) => ({
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
    return be(r), (u, b) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => y.value = !0)
          }, {
            actions: a(() => [
              v(K, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  g(l(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          i.value ? (o(), _(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), _(Ke, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: r
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length === 0 ? (o(), _(Ne, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), n(G, null, ee(m.value, (p, $) => (o(), n("div", {
                key: $,
                class: te(`log-line log-level-${p.level.toLowerCase()}`)
              }, l(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (p) => y.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          v(K, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => y.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tu = /* @__PURE__ */ X(eu, [["__scopeId", "data-v-39f6a756"]]), ou = /* @__PURE__ */ J({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = Ce(), i = E([]), f = E(!1), y = E(null), h = E(!1), m = E("production"), r = E(null), u = D(() => i.value.length === 0 ? [] : i.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function b() {
      f.value = !0, y.value = null;
      try {
        i.value = await d(void 0, 500);
        try {
          const p = await s();
          m.value = p.environment || "production";
        } catch {
        }
      } catch (p) {
        y.value = p instanceof Error ? p.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var p;
          (p = r.value) != null && p.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(b), (p, $) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (I) => h.value = !0)
          }, {
            actions: a(() => [
              v(K, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: f.value
              }, {
                default: a(() => [
                  g(l(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          f.value ? (o(), _(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), _(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            i.value.length === 0 ? (o(), _(Ne, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (o(!0), n(G, null, ee(u.value, (I, z) => (o(), n("div", {
                key: z,
                class: te(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (I) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            $[3] || ($[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            $[4] || ($[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1)),
          $[6] || ($[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          v(K, {
            variant: "primary",
            onClick: $[1] || ($[1] = (I) => h.value = !1)
          }, {
            default: a(() => [...$[7] || ($[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), su = /* @__PURE__ */ X(ou, [["__scopeId", "data-v-4f1e6f72"]]), nu = { class: "env-title" }, au = {
  key: 0,
  class: "current-badge"
}, lu = {
  key: 0,
  class: "branch-info"
}, iu = /* @__PURE__ */ J({
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
    return (d, s) => (o(), _(we, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        g(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", nu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", au, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", lu, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        v(se, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        v(se, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        v(se, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), _(se, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        ie(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), ru = /* @__PURE__ */ X(iu, [["__scopeId", "data-v-5238e57c"]]), du = {
  key: 0,
  class: "create-form"
}, cu = { class: "create-form__header" }, uu = { class: "create-form__body" }, mu = { class: "create-form__actions" }, vu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, fu = /* @__PURE__ */ J({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = Ce(), f = E([]), y = E(!1), h = E(null), m = E(""), r = E(!1), u = E(!1), b = E(""), p = D(
      () => f.value.find((T) => T.is_current)
    ), $ = D(() => {
      if (!m.value.trim()) return f.value;
      const T = m.value.toLowerCase();
      return f.value.filter(
        (w) => {
          var M;
          return w.name.toLowerCase().includes(T) || ((M = w.current_branch) == null ? void 0 : M.toLowerCase().includes(T));
        }
      );
    });
    function I(T) {
      if (!T) return "";
      try {
        const w = new Date(T), x = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), O = Math.floor(x / 6e4), R = Math.floor(x / 36e5), N = Math.floor(x / 864e5);
        return O < 1 ? "just now" : O < 60 ? `${O} ${O === 1 ? "minute" : "minutes"} ago` : R < 24 ? `${R} ${R === 1 ? "hour" : "hours"} ago` : N < 30 ? `${N} ${N === 1 ? "day" : "days"} ago` : w.toLocaleDateString();
      } catch {
        return T;
      }
    }
    function z() {
      const T = b.value.trim();
      T && (s("create", T), b.value = "", u.value = !1);
    }
    function S() {
      b.value = "", u.value = !1;
    }
    function k(T) {
      s("viewDetails", T);
    }
    function C(T) {
      confirm(`Delete environment "${T}"?

This action cannot be undone.`) && s("delete", T);
    }
    async function A() {
      y.value = !0, h.value = null;
      try {
        f.value = await i();
      } catch (T) {
        h.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return be(A), (T, w) => {
      const M = lo("SectionGroup");
      return o(), n(G, null, [
        v(_e, null, {
          header: a(() => [
            v($e, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: w[1] || (w[1] = (x) => r.value = !0)
            }, {
              actions: a(() => [
                v(K, {
                  variant: "ghost",
                  size: "sm",
                  onClick: w[0] || (w[0] = (x) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...w[7] || (w[7] = [
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
                v(K, {
                  variant: "ghost",
                  size: "sm",
                  onClick: A,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...w[8] || (w[8] = [
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
            v(st, {
              modelValue: m.value,
              "onUpdate:modelValue": w[2] || (w[2] = (x) => m.value = x),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), _(He, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), _(Ke, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: A
            }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
              u.value ? (o(), n("div", du, [
                e("div", cu, [
                  w[10] || (w[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  v(K, {
                    variant: "ghost",
                    size: "xs",
                    onClick: S
                  }, {
                    default: a(() => [...w[9] || (w[9] = [
                      g(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", uu, [
                  v(vt, {
                    modelValue: b.value,
                    "onUpdate:modelValue": w[3] || (w[3] = (x) => b.value = x),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge(z, ["enter"]),
                      Ge(S, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", mu, [
                    v(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: z,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...w[11] || (w[11] = [
                        g(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: a(() => [...w[12] || (w[12] = [
                        g(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              f.value.length ? (o(), _(nt, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  g(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  p.value ? (o(), n(G, { key: 0 }, [
                    w[13] || (w[13] = g(" • Current: ", -1)),
                    e("strong", null, l(p.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              $.value.length ? (o(), _(M, {
                key: 2,
                title: "ENVIRONMENTS",
                count: $.value.length
              }, {
                default: a(() => [
                  (o(!0), n(G, null, ee($.value, (x) => (o(), _(ru, {
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
                      x.is_current ? c("", !0) : (o(), _(K, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (O) => T.$emit("switch", x.name)
                      }, {
                        default: a(() => [...w[14] || (w[14] = [
                          g(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      v(K, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (O) => k(x.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...w[15] || (w[15] = [
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
                      !x.is_current && f.value.length > 1 ? (o(), _(K, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (O) => C(x.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", vu, [...w[16] || (w[16] = [
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
              $.value.length ? c("", !0) : (o(), _(Ne, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Vt({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    v(K, {
                      variant: "primary",
                      onClick: w[4] || (w[4] = (x) => u.value = !0)
                    }, {
                      default: a(() => [...w[17] || (w[17] = [
                        g(" Create Environment ", -1)
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
          onClose: w[6] || (w[6] = (x) => r.value = !1)
        }, {
          content: a(() => [...w[18] || (w[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              g(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            v(K, {
              variant: "secondary",
              onClick: w[5] || (w[5] = (x) => r.value = !1)
            }, {
              default: a(() => [...w[19] || (w[19] = [
                g(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), gu = /* @__PURE__ */ X(fu, [["__scopeId", "data-v-97d6527d"]]), hu = { class: "file-path" }, pu = { class: "file-path-text" }, yu = ["title"], wu = /* @__PURE__ */ J({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = E(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), n("div", hu, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", pu, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, yu)) : c("", !0)
    ]));
  }
}), bu = /* @__PURE__ */ X(wu, [["__scopeId", "data-v-f0982173"]]), ku = { class: "output-path-input" }, _u = { class: "export-actions" }, $u = {
  key: 1,
  class: "export-warning"
}, Cu = /* @__PURE__ */ J({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = Ce(), s = E(""), i = E(!1), f = E(null), y = E(!1);
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
    return (r, u) => (o(), n(G, null, [
      v(_e, null, {
        header: a(() => [
          v($e, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              v(K, {
                variant: "ghost",
                size: "sm",
                onClick: u[0] || (u[0] = (b) => y.value = !0),
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
          v(he, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              v(we, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  g("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  g("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  g(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  v(se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  v(se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  v(se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  v(se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(he, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              v(we, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  g("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  g("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  g(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", ku, [
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
          v(he, { title: "EXPORT" }, {
            default: a(() => [
              e("div", _u, [
                v(K, {
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
                    g(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), _(K, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: u[2] || (u[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    g(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), _(he, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              v(we, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: a(() => [
                  g(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  g(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  g(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    v(se, { label: "Saved to:" }, {
                      default: a(() => [
                        v(bu, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), _(se, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", $u, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    v(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    v(K, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => f.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
                        g(" Dismiss ", -1)
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
        show: y.value,
        title: "About Environment Export",
        onClose: u[4] || (u[4] = (b) => y.value = !1)
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
            g(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xu = /* @__PURE__ */ X(Cu, [["__scopeId", "data-v-1777a9d5"]]), Su = { class: "file-input-wrapper" }, Iu = ["accept", "multiple", "disabled"], Eu = /* @__PURE__ */ J({
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
    const i = s, f = E(null);
    function y() {
      var m;
      (m = f.value) == null || m.click();
    }
    function h(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: y
    }), (m, r) => (o(), n("div", Su, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Iu),
      v(K, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          ie(m.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), zu = /* @__PURE__ */ X(Eu, [["__scopeId", "data-v-cd192091"]]), Mu = {
  key: 0,
  class: "drop-zone-empty"
}, Lu = { class: "drop-zone-text" }, Tu = { class: "drop-zone-primary" }, Ru = { class: "drop-zone-secondary" }, Nu = { class: "drop-zone-actions" }, Du = {
  key: 1,
  class: "drop-zone-file"
}, Uu = { class: "file-info" }, Ou = { class: "file-details" }, Bu = { class: "file-name" }, Pu = { class: "file-size" }, Au = /* @__PURE__ */ J({
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
    const s = d, i = E(!1), f = E(null), y = E(0), h = D(() => f.value !== null), m = D(() => {
      var k;
      return ((k = f.value) == null ? void 0 : k.name) || "";
    }), r = D(() => {
      if (!f.value) return "";
      const k = f.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var C;
      y.value++, (C = k.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function p() {
      y.value--, y.value === 0 && (i.value = !1);
    }
    function $(k) {
      var A;
      y.value = 0, i.value = !1;
      const C = (A = k.dataTransfer) == null ? void 0 : A.files;
      C && C.length > 0 && z(C[0]);
    }
    function I(k) {
      k.length > 0 && z(k[0]);
    }
    function z(k) {
      f.value = k, s("fileSelected", k);
    }
    function S() {
      f.value = null, s("clear");
    }
    return (k, C) => (o(), n("div", {
      class: te(["file-drop-zone", { "drop-active": i.value, "has-file": h.value }]),
      onDragenter: ye(u, ["prevent"]),
      onDragover: ye(b, ["prevent"]),
      onDragleave: ye(p, ["prevent"]),
      onDrop: ye($, ["prevent"])
    }, [
      h.value ? (o(), n("div", Du, [
        e("div", Uu, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Ou, [
            e("div", Bu, l(m.value), 1),
            e("div", Pu, l(r.value), 1)
          ])
        ]),
        v(K, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: a(() => [...C[2] || (C[2] = [
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
      ])) : (o(), n("div", Mu, [
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
        e("div", Lu, [
          e("p", Tu, l(t.primaryText), 1),
          e("p", Ru, l(t.secondaryText), 1)
        ]),
        e("div", Nu, [
          v(zu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
          }, {
            default: a(() => [
              g(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Vu = /* @__PURE__ */ X(Au, [["__scopeId", "data-v-e00abbca"]]), Fu = { class: "import-preview" }, Wu = { class: "preview-header" }, Gu = {
  key: 0,
  class: "source-env"
}, ju = { class: "preview-content" }, Hu = { class: "preview-section" }, Ku = { class: "section-header" }, qu = { class: "section-info" }, Ju = { class: "section-count" }, Xu = {
  key: 0,
  class: "item-list"
}, Yu = { class: "item-name" }, Qu = {
  key: 0,
  class: "item-more"
}, Zu = { class: "preview-section" }, em = { class: "section-header" }, tm = { class: "section-info" }, om = { class: "section-count" }, sm = {
  key: 0,
  class: "item-list"
}, nm = { class: "item-details" }, am = { class: "item-name" }, lm = { class: "item-meta" }, im = {
  key: 0,
  class: "item-more"
}, rm = { class: "preview-section" }, dm = { class: "section-header" }, cm = { class: "section-info" }, um = { class: "section-count" }, mm = {
  key: 0,
  class: "item-list"
}, vm = { class: "item-name" }, fm = {
  key: 0,
  class: "item-more"
}, gm = {
  key: 0,
  class: "preview-section"
}, hm = { class: "git-info" }, pm = /* @__PURE__ */ J({
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
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), n("div", Fu, [
      e("div", Wu, [
        v(Se, null, {
          default: a(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Gu, [
          m[1] || (m[1] = g(" From: ", -1)),
          v(St, null, {
            default: a(() => [
              g(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", ju, [
        e("div", Hu, [
          e("div", Ku, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", qu, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Ju, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Xu, [
            (o(!0), n(G, null, ee(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Yu, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Qu, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Zu, [
          e("div", em, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", tm, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", om, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", sm, [
            (o(!0), n(G, null, ee(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", nm, [
                e("span", am, l(r.filename), 1),
                e("span", lm, l(y(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", im, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", rm, [
          e("div", dm, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", cm, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", um, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", mm, [
            (o(!0), n(G, null, ee(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", vm, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", fm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", gm, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", hm, [
            t.gitBranch ? (o(), _(se, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                v(St, null, {
                  default: a(() => [
                    g(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), _(se, {
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
}), ym = /* @__PURE__ */ X(pm, [["__scopeId", "data-v-182fe113"]]), wm = { class: "import-options" }, bm = { class: "options-container" }, km = { class: "option-section" }, _m = { class: "conflict-options" }, $m = ["value", "checked", "onChange"], Cm = { class: "conflict-content" }, xm = { class: "conflict-label" }, Sm = { class: "conflict-description" }, Im = { class: "option-section" }, Em = { class: "component-toggles" }, zm = /* @__PURE__ */ J({
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
    return (f, y) => (o(), n("div", wm, [
      v(Se, null, {
        default: a(() => [...y[4] || (y[4] = [
          g("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", bm, [
        e("div", km, [
          v(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              g("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", _m, [
            (o(), n(G, null, ee(i, (h) => e("label", {
              key: h.value,
              class: te(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => s("update:conflictMode", h.value)
              }, null, 40, $m),
              e("div", Cm, [
                e("span", xm, l(h.label), 1),
                e("span", Sm, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Im, [
          v(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              g("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Em, [
            v(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                v(Qe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => s("update:includeWorkflows", h))
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
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => s("update:includeModels", h))
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
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => s("update:includeNodes", h))
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
                  "onUpdate:modelValue": y[3] || (y[3] = (h) => s("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Mm = /* @__PURE__ */ X(zm, [["__scopeId", "data-v-0ec212b0"]]), Lm = {
  key: 0,
  class: "import-empty"
}, Tm = { class: "import-help" }, Rm = {
  key: 1,
  class: "import-configure"
}, Nm = { class: "selected-file-bar" }, Dm = { class: "file-bar-content" }, Um = { class: "file-bar-info" }, Om = { class: "file-bar-name" }, Bm = { class: "file-bar-size" }, Pm = { class: "import-actions" }, Am = {
  key: 2,
  class: "import-progress"
}, Vm = { class: "progress-content" }, Fm = { class: "progress-info" }, Wm = { class: "progress-title" }, Gm = { class: "progress-detail" }, jm = { class: "progress-bar" }, Hm = { class: "progress-status" }, Km = {
  key: 3,
  class: "import-complete"
}, qm = { class: "complete-message" }, Jm = { class: "complete-title" }, Xm = { class: "complete-details" }, Ym = { class: "complete-actions" }, Qm = /* @__PURE__ */ J({
  __name: "ImportSection",
  setup(t) {
    const d = E(null), s = E(!1), i = E(!1), f = E(!1), y = E(""), h = E({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = E({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = E({
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
    function b(S) {
      d.value = S;
    }
    function p() {
      d.value = null, i.value = !1, f.value = !1, y.value = "";
    }
    function $() {
      p(), s.value = !1, m.value = {
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
            m.value = k, await new Promise((C) => setTimeout(C, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, y.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (S) {
          f.value = !1, y.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function z(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, k) => (o(), _(_e, null, {
      header: a(() => [
        v($e, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Lm, [
          v(Vu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Tm, [
            v(Se, null, {
              default: a(() => [...k[5] || (k[5] = [
                g("How to Import", -1)
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", Rm, [
          e("div", Nm, [
            e("div", Dm, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Um, [
                e("div", Om, l(d.value.name), 1),
                e("div", Bm, l(z(d.value.size)), 1)
              ])
            ]),
            v(K, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...k[8] || (k[8] = [
                g(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          v(ym, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          v(Mm, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (C) => h.value.conflictMode = C),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (C) => h.value.includeWorkflows = C),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (C) => h.value.includeModels = C),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (C) => h.value.includeNodes = C),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (C) => h.value.includeGitHistory = C)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && r.value.models.length > 0 ? (o(), _(Ye, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Pm, [
            v(K, {
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
                g(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            v(K, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: a(() => [...k[10] || (k[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Am, [
          e("div", Vm, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Fm, [
              e("div", Wm, l(m.value.message), 1),
              e("div", Gm, l(m.value.detail), 1)
            ])
          ]),
          e("div", jm, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Hm, l(m.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Km, [
          e("div", {
            class: te(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", qm, [
            e("div", Jm, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Xm, l(y.value), 1)
          ]),
          e("div", Ym, [
            v(K, {
              variant: "primary",
              size: "md",
              onClick: $
            }, {
              default: a(() => [...k[12] || (k[12] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Zm = /* @__PURE__ */ X(Qm, [["__scopeId", "data-v-18e18eb5"]]), ev = { class: "header-info" }, tv = { class: "commit-hash" }, ov = {
  key: 0,
  class: "commit-refs"
}, sv = { class: "commit-message" }, nv = { class: "commit-date" }, av = {
  key: 0,
  class: "loading"
}, lv = {
  key: 1,
  class: "changes-section"
}, iv = { class: "stats-row" }, rv = { class: "stat" }, dv = { class: "stat insertions" }, cv = { class: "stat deletions" }, uv = {
  key: 0,
  class: "change-group"
}, mv = {
  key: 1,
  class: "change-group"
}, vv = {
  key: 0,
  class: "version"
}, fv = {
  key: 2,
  class: "change-group"
}, gv = { class: "change-item" }, hv = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = Ce(), i = E(null), f = E(!0), y = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return be(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, r) => (o(), _(yt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => m.$emit("close"))
    }, {
      header: a(() => {
        var u, b, p, $;
        return [
          e("div", ev, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", tv, l(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            ($ = (p = i.value) == null ? void 0 : p.refs) != null && $.length ? (o(), n("span", ov, [
              (o(!0), n(G, null, ee(i.value.refs, (I) => (o(), n("span", {
                key: I,
                class: "ref-badge"
              }, l(I), 1))), 128))
            ])) : c("", !0)
          ]),
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (I) => m.$emit("close"))
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
          e("div", sv, l(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", nv, l(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", av, "Loading details...")) : i.value ? (o(), n("div", lv, [
            e("div", iv, [
              e("span", rv, l(i.value.stats.files_changed) + " files", 1),
              e("span", dv, "+" + l(i.value.stats.insertions), 1),
              e("span", cv, "-" + l(i.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", uv, [
              v(ct, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, ee(i.value.changes.workflows.added, (p) => (o(), n("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(G, null, ee(i.value.changes.workflows.modified, (p) => (o(), n("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(G, null, ee(i.value.changes.workflows.deleted, (p) => (o(), n("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), n("div", mv, [
              v(ct, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, ee(i.value.changes.nodes.added, (p) => (o(), n("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p.name), 1),
                p.version ? (o(), n("span", vv, "(" + l(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(G, null, ee(i.value.changes.nodes.removed, (p) => (o(), n("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", fv, [
              v(ct, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", gv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), pv = /* @__PURE__ */ X(hv, [["__scopeId", "data-v-d256ff6d"]]), yv = { class: "dialog-message" }, wv = {
  key: 0,
  class: "dialog-details"
}, bv = {
  key: 1,
  class: "dialog-warning"
}, kv = /* @__PURE__ */ J({
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
    return (d, s) => (o(), _(yt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", yv, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", wv, [
          (o(!0), n(G, null, ee(t.details, (i, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", bv, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            g(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), _(le, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            g(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        v(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
        }, {
          default: a(() => [
            g(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _v = /* @__PURE__ */ X(kv, [["__scopeId", "data-v-3670b9f5"]]), $v = { class: "base-textarea-wrapper" }, Cv = ["value", "rows", "placeholder", "disabled", "maxlength"], xv = {
  key: 0,
  class: "base-textarea-count"
}, Sv = /* @__PURE__ */ J({
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
    return (d, s) => (o(), n("div", $v, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ge(ye((i) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ge(ye((i) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Cv),
      t.showCharCount && t.maxLength ? (o(), n("div", xv, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ot = /* @__PURE__ */ X(Sv, [["__scopeId", "data-v-5516e6fc"]]), Iv = ["checked", "disabled"], Ev = { class: "base-checkbox-box" }, zv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Mv = {
  key: 0,
  class: "base-checkbox-label"
}, Lv = /* @__PURE__ */ J({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: te(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked))
      }, null, 40, Iv),
      e("span", Ev, [
        t.modelValue ? (o(), n("svg", zv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Mv, [
        ie(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ X(Lv, [["__scopeId", "data-v-bf17c831"]]), Tv = { class: "popover-header" }, Rv = { class: "popover-body" }, Nv = {
  key: 0,
  class: "changes-summary"
}, Dv = {
  key: 0,
  class: "change-item"
}, Uv = {
  key: 1,
  class: "change-item"
}, Ov = {
  key: 2,
  class: "change-item"
}, Bv = {
  key: 3,
  class: "change-item"
}, Pv = {
  key: 4,
  class: "change-item"
}, Av = {
  key: 1,
  class: "no-changes"
}, Vv = {
  key: 2,
  class: "loading"
}, Fv = {
  key: 3,
  class: "issues-warning"
}, Wv = { class: "warning-header" }, Gv = { class: "warning-title" }, jv = { class: "issues-list" }, Hv = { class: "message-section" }, Kv = { class: "popover-footer" }, qv = {
  key: 1,
  class: "commit-popover"
}, Jv = { class: "popover-header" }, Xv = { class: "popover-body" }, Yv = {
  key: 0,
  class: "changes-summary"
}, Qv = {
  key: 0,
  class: "change-item"
}, Zv = {
  key: 1,
  class: "change-item"
}, ef = {
  key: 2,
  class: "change-item"
}, tf = {
  key: 3,
  class: "change-item"
}, of = {
  key: 4,
  class: "change-item"
}, sf = {
  key: 1,
  class: "no-changes"
}, nf = {
  key: 2,
  class: "loading"
}, af = {
  key: 3,
  class: "issues-warning"
}, lf = { class: "warning-header" }, rf = { class: "warning-title" }, df = { class: "issues-list" }, cf = { class: "message-section" }, uf = { class: "popover-footer" }, mf = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: f } = Ce(), y = E(""), h = E(!1), m = E(!1), r = E(null), u = D(() => {
      if (!s.status) return !1;
      const z = s.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || s.status.has_changes;
    }), b = D(() => {
      var z;
      return (z = s.status) != null && z.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), p = D(() => b.value.length > 0), $ = D(() => p.value && !m.value);
    async function I() {
      var z, S, k;
      if (!(p.value && !m.value) && !(!u.value || !y.value.trim() || h.value)) {
        h.value = !0, r.value = null;
        try {
          const C = await f(y.value.trim(), m.value);
          C.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((z = C.summary) == null ? void 0 : z.new) || 0} new, ${((S = C.summary) == null ? void 0 : S.modified) || 0} modified, ${((k = C.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => i("committed"), 1e3)) : C.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : C.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: C.message || "Commit failed" };
        } catch (C) {
          r.value = { type: "error", message: C instanceof Error ? C.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (z, S) => t.asModal ? (o(), _(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = ye(() => {
          }, ["stop"]))
        }, [
          e("div", Tv, [
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
          e("div", Rv, [
            t.status && u.value ? (o(), n("div", Nv, [
              t.status.workflows.new.length ? (o(), n("div", Dv, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Uv, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Ov, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Bv, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Pv, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Av, " No changes to commit ")) : (o(), n("div", Vv, " Loading... ")),
            p.value ? (o(), n("div", Fv, [
              e("div", Wv, [
                S[17] || (S[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Gv, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", jv, [
                (o(!0), n(G, null, ee(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  g(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              v(Bt, {
                modelValue: m.value,
                "onUpdate:modelValue": S[1] || (S[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...S[18] || (S[18] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Hv, [
              v(Ot, {
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (k) => y.value = k),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || h.value || $.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: te(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Kv, [
            v(le, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (k) => i("close"))
            }, {
              default: a(() => [...S[19] || (S[19] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || h.value || $.value,
              loading: h.value,
              onClick: I
            }, {
              default: a(() => [
                g(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", qv, [
      e("div", Jv, [
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
      e("div", Xv, [
        t.status && u.value ? (o(), n("div", Yv, [
          t.status.workflows.new.length ? (o(), n("div", Qv, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Zv, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", ef, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", tf, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", of, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", sf, " No changes to commit ")) : (o(), n("div", nf, " Loading... ")),
        p.value ? (o(), n("div", af, [
          e("div", lf, [
            S[27] || (S[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", rf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", df, [
            (o(!0), n(G, null, ee(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              g(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          v(Bt, {
            modelValue: m.value,
            "onUpdate:modelValue": S[7] || (S[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...S[28] || (S[28] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", cf, [
          v(Ot, {
            modelValue: y.value,
            "onUpdate:modelValue": S[8] || (S[8] = (k) => y.value = k),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || h.value || $.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: te(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", uf, [
        v(le, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (k) => i("close"))
        }, {
          default: a(() => [...S[29] || (S[29] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || h.value || $.value,
          loading: h.value,
          onClick: I
        }, {
          default: a(() => [
            g(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ X(mf, [["__scopeId", "data-v-38b45183"]]), vf = { class: "modal-header" }, ff = { class: "modal-body" }, gf = { class: "switch-message" }, hf = { class: "switch-details" }, pf = { class: "modal-actions" }, yf = /* @__PURE__ */ J({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ye(() => {
          }, ["stop"]))
        }, [
          e("div", vf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", ff, [
            e("p", gf, [
              s[6] || (s[6] = g(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = g(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = g("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", hf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", pf, [
            v(K, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(K, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), wf = /* @__PURE__ */ X(yf, [["__scopeId", "data-v-e9c5253e"]]), bf = { class: "progress-bar" }, kf = /* @__PURE__ */ J({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = D(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, f) => (o(), n("div", bf, [
      e("div", {
        class: te(["progress-fill", t.variant]),
        style: Ze({ width: s.value })
      }, null, 6)
    ]));
  }
}), _f = /* @__PURE__ */ X(kf, [["__scopeId", "data-v-1beb0512"]]), $f = {
  key: 0,
  class: "modal-overlay"
}, Cf = { class: "modal-content" }, xf = { class: "modal-body" }, Sf = { class: "progress-info" }, If = { class: "progress-percentage" }, Ef = { class: "progress-state" }, zf = { class: "switch-steps" }, Mf = { class: "step-icon" }, Lf = { class: "step-label" }, Tf = /* @__PURE__ */ J({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = D(() => {
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
    }), i = D(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), f = D(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((m) => m.state === d.state);
      return y.map((m, r) => {
        let u = "pending", b = "○";
        return r < h ? (u = "completed", b = "✓") : r === h && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (y, h) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", $f, [
        e("div", Cf, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", xf, [
            v(_f, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Sf, [
              e("div", If, l(t.progress) + "%", 1),
              e("div", Ef, l(s.value), 1)
            ]),
            e("div", zf, [
              (o(!0), n(G, null, ee(f.value, (m) => (o(), n("div", {
                key: m.state,
                class: te(["switch-step", m.status])
              }, [
                e("span", Mf, l(m.icon), 1),
                e("span", Lf, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Rf = /* @__PURE__ */ X(Tf, [["__scopeId", "data-v-768a5078"]]), Nf = { class: "modal-header" }, Df = { class: "modal-body" }, Uf = {
  key: 0,
  class: "node-section"
}, Of = { class: "node-list" }, Bf = {
  key: 1,
  class: "node-section"
}, Pf = { class: "node-list" }, Af = { class: "modal-actions" }, Vf = /* @__PURE__ */ J({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), _(ze, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ye(() => {
          }, ["stop"]))
        }, [
          e("div", Nf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Df, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Uf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Of, [
                (o(!0), n(G, null, ee(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Bf, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Pf, [
                (o(!0), n(G, null, ee(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
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
          e("div", Af, [
            v(K, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(K, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ff = /* @__PURE__ */ X(Vf, [["__scopeId", "data-v-7cad7518"]]);
async function lt(t, d = {}, s = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: i.signal
    });
    return clearTimeout(f), y;
  } catch (y) {
    throw clearTimeout(f), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function Wf() {
  const t = E(null);
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
  async function y() {
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
    kill: y
  };
}
const Gf = { class: "comfygit-panel" }, jf = { class: "panel-header" }, Hf = { class: "header-left" }, Kf = {
  key: 0,
  class: "header-info"
}, qf = { class: "header-actions" }, Jf = { class: "env-switcher" }, Xf = {
  key: 0,
  class: "header-info"
}, Yf = { class: "branch-name" }, Qf = { class: "panel-main" }, Zf = { class: "sidebar" }, eg = { class: "sidebar-section" }, tg = { class: "sidebar-section" }, og = { class: "sidebar-section" }, sg = { class: "content-area" }, ng = {
  key: 0,
  class: "error-message"
}, ag = {
  key: 1,
  class: "loading"
}, lg = { class: "dialog-content env-selector-dialog" }, ig = { class: "dialog-header" }, rg = { class: "dialog-body" }, dg = { class: "env-list" }, cg = { class: "env-info" }, ug = { class: "env-name-row" }, mg = { class: "env-indicator" }, vg = { class: "env-name" }, fg = {
  key: 0,
  class: "env-branch"
}, gg = {
  key: 1,
  class: "current-label"
}, hg = { class: "env-stats" }, pg = ["onClick"], yg = { class: "toast-container" }, wg = { class: "toast-icon" }, bg = { class: "toast-message" }, kg = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: f,
      getBranches: y,
      checkout: h,
      createBranch: m,
      switchBranch: r,
      getEnvironments: u,
      switchEnvironment: b,
      getSwitchProgress: p,
      syncEnvironmentManually: $
    } = Ce(), I = Wf(), z = E(null), S = E([]), k = E([]), C = E([]), A = D(() => C.value.find((W) => W.is_current)), T = E(!1), w = E(null), M = E(null), x = E(!1), O = E(null), R = E(!1), N = E(!1), U = E(""), j = E({ state: "idle", progress: 0, message: "" });
    let H = null, Q = null;
    const V = E("status"), P = E("this-env");
    function F(W, L) {
      V.value = W, P.value = L;
    }
    function pe(W) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      de && F(de.view, de.section);
    }
    function Ie() {
      F("branches", "this-env");
    }
    const fe = E(null), Z = E(!1), De = E(!1), Ue = E([]);
    let at = 0;
    function me(W, L = "info", de = 3e3) {
      const ge = ++at;
      return Ue.value.push({ id: ge, message: W, type: L }), de > 0 && setTimeout(() => {
        Ue.value = Ue.value.filter((Le) => Le.id !== ge);
      }, de), ge;
    }
    function Ee(W) {
      Ue.value = Ue.value.filter((L) => L.id !== W);
    }
    function Y(W) {
      switch (W) {
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
    const ne = D(() => {
      if (!z.value) return "neutral";
      const W = z.value.workflows, L = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || z.value.has_changes;
      return z.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    D(() => z.value ? ne.value === "success" ? "All synced" : ne.value === "warning" ? "Uncommitted changes" : ne.value === "error" ? "Not synced" : "" : "");
    async function re() {
      T.value = !0, w.value = null;
      try {
        const [W, L, de, ge] = await Promise.all([
          i(!0),
          f(),
          y(),
          u()
        ]);
        z.value = W, S.value = L.commits, k.value = de.branches, C.value = ge, s("statusUpdate", W), O.value && await O.value.loadWorkflows(!0);
      } catch (W) {
        w.value = W instanceof Error ? W.message : "Failed to load status", z.value = null, S.value = [], k.value = [];
      } finally {
        T.value = !1;
      }
    }
    function ke(W) {
      M.value = W;
    }
    async function Je(W) {
      var de;
      M.value = null;
      const L = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      fe.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((de = W.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: L ? Nt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var Te;
          fe.value = null, oe();
          const ge = me(`Checking out ${W.short_hash || ((Te = W.hash) == null ? void 0 : Te.slice(0, 7))}...`, "info", 0), Le = await h(W.hash, L);
          Ee(ge), Le.status === "success" ? me("Restarting ComfyUI...", "success") : me(Le.message || "Checkout failed", "error");
        }
      };
    }
    async function bt(W) {
      const L = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      fe.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: L ? Nt() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, oe();
          const de = me(`Switching to ${W}...`, "info", 0), ge = await r(W, L);
          Ee(de), ge.status === "success" ? me("Restarting ComfyUI...", "success") : me(ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function q(W) {
      const L = me(`Creating branch ${W}...`, "info", 0), de = await m(W);
      Ee(L), de.status === "success" ? (me(`Branch "${W}" created`, "success"), await re()) : me(de.message || "Failed to create branch", "error");
    }
    async function B(W) {
      M.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const de = me(`Creating branch ${L}...`, "info", 0), ge = await m(L, W.hash);
        Ee(de), ge.status === "success" ? (me(`Branch "${L}" created from ${W.short_hash}`, "success"), await re()) : me(ge.message || "Failed to create branch", "error");
      }
    }
    function oe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ve(W) {
      x.value = !1, U.value = W, R.value = !0;
    }
    async function Me() {
      R.value = !1, N.value = !0, oe(), j.value = {
        progress: 10,
        state: Oe(10),
        message: Be(10)
      };
      try {
        await b(U.value), ft(), gt();
      } catch (W) {
        Pe(), N.value = !1, me(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), j.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Oe(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function Be(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Oe(W)] || "";
    }
    function ft() {
      if (Q) return;
      let W = 10;
      const L = 60, de = 5e3, ge = 100, Le = (L - W) / (de / ge);
      Q = window.setInterval(() => {
        if (W += Le, W >= L && (W = L, Pe()), j.value.progress < L) {
          const Te = Math.floor(W);
          j.value = {
            progress: Te,
            state: Oe(Te),
            message: Be(Te)
          };
        }
      }, ge);
    }
    function Pe() {
      Q && (clearInterval(Q), Q = null);
    }
    function gt() {
      H || (H = window.setInterval(async () => {
        try {
          let W = await I.getStatus();
          if ((!W || W.state === "idle") && (W = await p()), !W)
            return;
          const L = W.progress || 0;
          L >= 60 && Pe();
          const de = Math.max(L, j.value.progress), ge = W.state && W.state !== "idle" && W.state !== "unknown", Le = ge ? W.state : Oe(de), Te = ge && W.message || Be(de);
          j.value = {
            state: Le,
            progress: de,
            message: Te
          }, W.state === "complete" ? (Pe(), kt(), N.value = !1, me(`✓ Switched to ${U.value}`, "success"), await re(), U.value = "") : W.state === "rolled_back" ? (Pe(), kt(), N.value = !1, me("Switch failed, restored previous environment", "warning"), U.value = "") : W.state === "critical_failure" && (Pe(), kt(), N.value = !1, me(`Critical error during switch: ${W.message}`, "error"), U.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function kt() {
      Pe(), H && (clearInterval(H), H = null);
    }
    function Yt() {
      R.value = !1, U.value = "";
    }
    async function Qt() {
      Z.value = !1, await re(), me("✓ Changes committed", "success");
    }
    async function Zt() {
      De.value = !1;
      const W = me("Syncing environment...", "info", 0);
      try {
        const L = await $("skip", !0);
        if (Ee(W), L.status === "success") {
          const de = [];
          L.nodes_installed.length && de.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && de.push(`${L.nodes_removed.length} removed`);
          const ge = de.length ? `: ${de.join(", ")}` : "";
          me(`✓ Environment synced${ge}`, "success"), await re();
        } else {
          const de = L.errors.length ? L.errors.join("; ") : L.message;
          me(`Sync failed: ${de}`, "error");
        }
      } catch (L) {
        Ee(W), me(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function eo(W) {
      const L = me(`Creating environment "${W}"...`, "info", 0);
      Ee(L), me("Environment creation not yet implemented", "warning");
    }
    async function to(W) {
      const L = me(`Deleting environment "${W}"...`, "info", 0);
      Ee(L), me("Environment deletion not yet implemented", "warning");
    }
    function oo(W) {
      me(`Viewing details for "${W}"`, "info"), F("models-env", "this-env");
    }
    function Nt() {
      if (!z.value) return [];
      const W = [], L = z.value.workflows;
      return L.new.length && W.push(`${L.new.length} new workflow(s)`), L.modified.length && W.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && W.push(`${L.deleted.length} deleted workflow(s)`), W;
    }
    return be(re), (W, L) => {
      var de, ge, Le, Te;
      return o(), n("div", Gf, [
        e("div", jf, [
          e("div", Hf, [
            L[27] || (L[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            z.value ? (o(), n("div", Kf)) : c("", !0)
          ]),
          e("div", qf, [
            e("button", {
              class: te(["icon-btn", { spinning: T.value }]),
              onClick: re,
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
              onClick: L[0] || (L[0] = (ae) => s("close")),
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
        e("div", Jf, [
          L[31] || (L[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: L[1] || (L[1] = (ae) => F("environments", "all-envs"))
          }, [
            z.value ? (o(), n("div", Xf, [
              e("span", null, l(((de = A.value) == null ? void 0 : de.name) || ((ge = z.value) == null ? void 0 : ge.environment) || "Loading..."), 1),
              e("span", Yf, "(" + l(z.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            L[30] || (L[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Qf, [
          e("div", Zf, [
            e("div", eg, [
              L[32] || (L[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "status" && P.value === "this-env" }]),
                onClick: L[2] || (L[2] = (ae) => F("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "workflows" }]),
                onClick: L[3] || (L[3] = (ae) => F("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "models-env" }]),
                onClick: L[4] || (L[4] = (ae) => F("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "branches" }]),
                onClick: L[5] || (L[5] = (ae) => F("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "history" }]),
                onClick: L[6] || (L[6] = (ae) => F("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "nodes" }]),
                onClick: L[7] || (L[7] = (ae) => F("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "debug-env" }]),
                onClick: L[8] || (L[8] = (ae) => F("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            L[35] || (L[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", tg, [
              L[33] || (L[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "environments" }]),
                onClick: L[9] || (L[9] = (ae) => F("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "model-index" }]),
                onClick: L[10] || (L[10] = (ae) => F("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "settings" }]),
                onClick: L[11] || (L[11] = (ae) => F("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "debug-workspace" }]),
                onClick: L[12] || (L[12] = (ae) => F("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            L[36] || (L[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", og, [
              L[34] || (L[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "export" }]),
                onClick: L[13] || (L[13] = (ae) => F("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "import" }]),
                onClick: L[14] || (L[14] = (ae) => F("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: V.value === "remotes" }]),
                onClick: L[15] || (L[15] = (ae) => F("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", sg, [
            w.value ? (o(), n("div", ng, l(w.value), 1)) : !z.value && V.value === "status" ? (o(), n("div", ag, " Loading status... ")) : (o(), n(G, { key: 2 }, [
              V.value === "status" ? (o(), _(Pn, {
                key: 0,
                status: z.value,
                onSwitchBranch: Ie,
                onCommitChanges: L[16] || (L[16] = (ae) => Z.value = !0),
                onSyncEnvironment: L[17] || (L[17] = (ae) => De.value = !0),
                onViewWorkflows: L[18] || (L[18] = (ae) => F("workflows", "this-env")),
                onViewHistory: L[19] || (L[19] = (ae) => F("history", "this-env")),
                onViewDebug: L[20] || (L[20] = (ae) => F("debug-env", "this-env"))
              }, null, 8, ["status"])) : V.value === "workflows" ? (o(), _(qd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: O,
                onRefresh: re
              }, null, 512)) : V.value === "models-env" ? (o(), _(Yd, {
                key: 2,
                onNavigate: pe
              })) : V.value === "branches" ? (o(), _(ea, {
                key: 3,
                branches: k.value,
                current: ((Le = z.value) == null ? void 0 : Le.branch) || null,
                onSwitch: bt,
                onCreate: q
              }, null, 8, ["branches", "current"])) : V.value === "history" ? (o(), _(ua, {
                key: 4,
                commits: S.value,
                onSelect: ke,
                onCheckout: Je
              }, null, 8, ["commits"])) : V.value === "nodes" ? (o(), _(nc, { key: 5 })) : V.value === "debug-env" ? (o(), _(su, { key: 6 })) : V.value === "environments" ? (o(), _(gu, {
                key: 7,
                onSwitch: ve,
                onCreate: eo,
                onDelete: to,
                onViewDetails: oo
              })) : V.value === "model-index" ? (o(), _(Zd, { key: 8 })) : V.value === "settings" ? (o(), _(Zc, { key: 9 })) : V.value === "debug-workspace" ? (o(), _(tu, { key: 10 })) : V.value === "export" ? (o(), _(xu, { key: 11 })) : V.value === "import" ? (o(), _(Zm, { key: 12 })) : V.value === "remotes" ? (o(), _(Nc, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), _(pv, {
          key: 0,
          commit: M.value,
          onClose: L[21] || (L[21] = (ae) => M.value = null),
          onCheckout: Je,
          onCreateBranch: B
        }, null, 8, ["commit"])) : c("", !0),
        fe.value ? (o(), _(_v, {
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
          onCancel: L[22] || (L[22] = (ae) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        v(wf, {
          show: R.value,
          "from-environment": ((Te = A.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": U.value,
          onConfirm: Me,
          onClose: Yt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Z.value && z.value ? (o(), _(Ht, {
          key: 2,
          status: z.value,
          "as-modal": !0,
          onClose: L[23] || (L[23] = (ae) => Z.value = !1),
          onCommitted: Qt
        }, null, 8, ["status"])) : c("", !0),
        De.value && z.value ? (o(), _(Ff, {
          key: 3,
          show: De.value,
          "mismatch-details": {
            missing_nodes: z.value.comparison.missing_nodes,
            extra_nodes: z.value.comparison.extra_nodes
          },
          onConfirm: Zt,
          onClose: L[24] || (L[24] = (ae) => De.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        v(Rf, {
          show: N.value,
          state: j.value.state,
          progress: j.value.progress,
          message: j.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        x.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: L[26] || (L[26] = ye((ae) => x.value = !1, ["self"]))
        }, [
          e("div", lg, [
            e("div", ig, [
              L[38] || (L[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[25] || (L[25] = (ae) => x.value = !1)
              }, [...L[37] || (L[37] = [
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
            e("div", rg, [
              L[39] || (L[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", dg, [
                (o(!0), n(G, null, ee(C.value, (ae) => (o(), n("div", {
                  key: ae.name,
                  class: te(["env-item", { current: ae.is_current }])
                }, [
                  e("div", cg, [
                    e("div", ug, [
                      e("span", mg, l(ae.is_current ? "●" : "○"), 1),
                      e("span", vg, l(ae.name), 1),
                      ae.current_branch ? (o(), n("span", fg, "(" + l(ae.current_branch) + ")", 1)) : c("", !0),
                      ae.is_current ? (o(), n("span", gg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", hg, l(ae.workflow_count) + " workflows • " + l(ae.node_count) + " nodes ", 1)
                  ]),
                  ae.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Eh) => ve(ae.name)
                  }, " SWITCH ", 8, pg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", yg, [
          v(io, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(G, null, ee(Ue.value, (ae) => (o(), n("div", {
                key: ae.id,
                class: te(["toast", ae.type])
              }, [
                e("span", wg, l(Y(ae.type)), 1),
                e("span", bg, l(ae.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), _g = /* @__PURE__ */ X(kg, [["__scopeId", "data-v-734ed318"]]), $g = { class: "item-header" }, Cg = { class: "item-info" }, xg = { class: "filename" }, Sg = { class: "metadata" }, Ig = { class: "size" }, Eg = {
  key: 0,
  class: "type"
}, zg = { class: "item-actions" }, Mg = {
  key: 0,
  class: "progress-section"
}, Lg = { class: "progress-bar" }, Tg = { class: "progress-stats" }, Rg = { class: "downloaded" }, Ng = { class: "speed" }, Dg = {
  key: 0,
  class: "eta"
}, Ug = {
  key: 1,
  class: "status-msg paused"
}, Og = {
  key: 2,
  class: "status-msg queued"
}, Bg = {
  key: 3,
  class: "status-msg completed"
}, Pg = {
  key: 4,
  class: "status-msg failed"
}, Ag = {
  key: 0,
  class: "retries"
}, Vg = /* @__PURE__ */ J({
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
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), n("div", {
      class: te(["download-item", `status-${t.item.status}`])
    }, [
      e("div", $g, [
        e("div", Cg, [
          e("div", xg, l(t.item.filename), 1),
          e("div", Sg, [
            e("span", Ig, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", Eg, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", zg, [
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
      t.item.status === "downloading" ? (o(), n("div", Mg, [
        e("div", Lg, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Tg, [
          e("span", Rg, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", Ng, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", Dg, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", Ug, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Og, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", Bg, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Pg, [
        g(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Ag, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ X(Vg, [["__scopeId", "data-v-2110df65"]]), Fg = { class: "queue-title" }, Wg = { class: "count" }, Gg = { class: "queue-actions" }, jg = { class: "action-label" }, Hg = {
  key: 0,
  class: "overall-progress"
}, Kg = { class: "progress-bar" }, qg = {
  key: 0,
  class: "current-mini"
}, Jg = { class: "filename" }, Xg = { class: "speed" }, Yg = {
  key: 1,
  class: "queue-content"
}, Qg = {
  key: 0,
  class: "section"
}, Zg = {
  key: 1,
  class: "section"
}, eh = { class: "section-header" }, th = { class: "section-label paused" }, oh = { class: "items-list" }, sh = {
  key: 2,
  class: "section"
}, nh = { class: "section-header" }, ah = { class: "section-label" }, lh = { class: "items-list" }, ih = {
  key: 3,
  class: "section"
}, rh = { class: "section-header" }, dh = { class: "section-label" }, ch = { class: "items-list" }, uh = {
  key: 4,
  class: "section"
}, mh = { class: "section-header" }, vh = { class: "section-label failed" }, fh = { class: "items-list" }, gh = /* @__PURE__ */ J({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: f,
      failedItems: y,
      pausedItems: h,
      hasItems: m,
      activeCount: r,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: $,
      removeItem: I,
      clearCompleted: z
    } = wt(), S = E(!1);
    let k = null;
    Et(
      () => ({
        active: r.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: f.value.length
      }),
      (w, M) => {
        k && (clearTimeout(k), k = null);
        const x = w.active === 0 && w.failed === 0 && w.paused === 0 && w.completed > 0, O = M && (M.active > 0 || M.paused > 0);
        x && O && (k = setTimeout(() => {
          z(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = D(() => {
      var x;
      if (d.items.length === 0) return 0;
      const w = f.value.length, M = ((x = s.value) == null ? void 0 : x.progress) || 0;
      return Math.round((w + M / 100) / d.items.length * 100);
    });
    function A(w) {
      u(w);
    }
    function T(w) {
      return w === 0 ? "" : `${(w / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (w, M) => (o(), _(ze, { to: "body" }, [
      ce(m) ? (o(), n("div", {
        key: 0,
        class: te(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (x) => S.value = !S.value)
        }, [
          e("div", Fg, [
            M[4] || (M[4] = e("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Wg, "(" + l(ce(r)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", Gg, [
            e("span", jg, l(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (o(), n("div", Yg, [
          ce(s) ? (o(), n("div", Qg, [
            M[6] || (M[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            v(it, {
              item: ce(s),
              onCancel: M[1] || (M[1] = (x) => A(ce(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ce(h).length > 0 ? (o(), n("div", Zg, [
            e("div", eh, [
              e("span", th, "Paused (" + l(ce(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...x) => ce($) && ce($)(...x))
              }, "Resume All")
            ]),
            e("div", oh, [
              (o(!0), n(G, null, ee(ce(h), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onResume: (O) => ce(p)(x.id),
                onRemove: (O) => ce(I)(x.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(i).length > 0 ? (o(), n("div", sh, [
            e("div", nh, [
              e("span", ah, "Queued (" + l(ce(i).length) + ")", 1)
            ]),
            e("div", lh, [
              (o(!0), n(G, null, ee(ce(i), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onCancel: (O) => A(x.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ce(f).length > 0 ? (o(), n("div", ih, [
            e("div", rh, [
              e("span", dh, "Completed (" + l(ce(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...x) => ce(z) && ce(z)(...x))
              }, "Clear")
            ]),
            e("div", ch, [
              (o(!0), n(G, null, ee(ce(f).slice(0, 3), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onRemove: (O) => ce(I)(x.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(y).length > 0 ? (o(), n("div", uh, [
            e("div", mh, [
              e("span", vh, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", fh, [
              (o(!0), n(G, null, ee(ce(y), (x) => (o(), _(it, {
                key: x.id,
                item: x,
                onRetry: (O) => ce(b)(x.id),
                onRemove: (O) => ce(I)(x.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", Hg, [
          e("div", Kg, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${C.value}%` })
            }, null, 4)
          ]),
          ce(s) ? (o(), n("div", qg, [
            e("span", Jg, l(ce(s).filename), 1),
            e("span", Xg, l(T(ce(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), hh = /* @__PURE__ */ X(gh, [["__scopeId", "data-v-60751cfa"]]), ph = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', yh = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', wh = {
  comfy: ph,
  phosphor: yh
}, Tt = "comfy", Kt = "comfygit-theme";
let Xe = null, qt = Tt;
function bh() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Jt(t = Tt) {
  Xe && Xe.remove(), Xe = document.createElement("style"), Xe.id = "comfygit-theme-styles", Xe.setAttribute("data-theme", t), Xe.textContent = wh[t], document.head.appendChild(Xe), document.body.setAttribute("data-comfygit-theme", t), qt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function kh() {
  return qt;
}
function _h(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const $h = bh();
Jt($h);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), _h(t);
  },
  getTheme: () => {
    const t = kh();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Re = null, xe = null, ut = null, rt = null, Pt = null;
const ot = E(null);
async function pt() {
  var t;
  if (!((t = tt) != null && t.api)) return null;
  try {
    const d = await tt.api.fetchApi("/v2/comfygit/status");
    d.ok && (ot.value = await d.json());
  } catch {
  }
}
function Ch() {
  if (!ot.value) return !1;
  const t = ot.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ot.value.has_changes;
}
function xh() {
  Re && Re.remove(), Re = document.createElement("div"), Re.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Re.appendChild(t), Re.addEventListener("click", (i) => {
    i.target === Re && Ct();
  });
  const d = (i) => {
    i.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Mt(_g, {
      onClose: Ct,
      onStatusUpdate: (i) => {
        ot.value = i, mt();
      }
    })
  }).mount(t), document.body.appendChild(Re);
}
function Ct() {
  Re && (Re.remove(), Re = null);
}
function Sh(t) {
  dt(), xe = document.createElement("div"), xe.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  xe.style.position = "fixed", xe.style.top = `${d.bottom + 8}px`, xe.style.right = `${window.innerWidth - d.right}px`, xe.style.zIndex = "10001";
  const s = (f) => {
    xe && !xe.contains(f.target) && f.target !== t && (dt(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (f) => {
    f.key === "Escape" && (dt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ut = zt({
    render: () => Mt(Ht, {
      status: ot.value,
      onClose: dt,
      onCommitted: () => {
        dt(), pt().then(mt);
      }
    })
  }), ut.mount(xe), document.body.appendChild(xe);
}
function dt() {
  ut && (ut.unmount(), ut = null), xe && (xe.remove(), xe = null);
}
function Ih() {
  rt || (rt = document.createElement("div"), rt.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Mt(hh)
  }), Pt.mount(rt), document.body.appendChild(rt), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function mt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = Ch() ? "block" : "none");
}
const Xt = document.createElement("style");
Xt.textContent = `
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
document.head.appendChild(Xt);
tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = xh, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => Sh(Fe), t.appendChild(d), t.appendChild(Fe), (y = (f = tt.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Ih();
    const { loadPendingDownloads: s } = wt();
    s(), await pt(), mt(), setInterval(async () => {
      await pt(), mt();
    }, 3e4);
    const i = tt.api;
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
        const $ = document.createElement("button");
        $.textContent = "×", $.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, $.onmouseover = () => $.style.opacity = "1", $.onmouseout = () => $.style.opacity = "0.6", $.onclick = () => u.remove(), u.appendChild($), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
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
