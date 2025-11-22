import { app as nt } from "../../scripts/app.js";
import { defineComponent as P, createElementBlock as n, openBlock as o, createCommentVNode as d, createElementVNode as t, renderSlot as ee, createBlock as y, resolveDynamicComponent as ut, normalizeClass as q, withCtx as a, toDisplayString as r, createVNode as l, createTextVNode as v, computed as V, Fragment as F, renderList as K, normalizeStyle as Je, ref as I, onMounted as ue, watch as wt, Teleport as Ue, withModifiers as fe, Transition as Gt, withKeys as Se, onUnmounted as Ht, resolveComponent as jt, createSlots as bt, TransitionGroup as qt, createApp as kt, h as $t } from "vue";
const Kt = { class: "panel-layout" }, Jt = {
  key: 0,
  class: "panel-layout-header"
}, Yt = {
  key: 1,
  class: "panel-layout-search"
}, Xt = { class: "panel-layout-content" }, Qt = {
  key: 2,
  class: "panel-layout-footer"
}, Zt = /* @__PURE__ */ P({
  __name: "PanelLayout",
  setup(e) {
    return (c, s) => (o(), n("div", Kt, [
      c.$slots.header ? (o(), n("div", Jt, [
        ee(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (o(), n("div", Yt, [
        ee(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      t("div", Xt, [
        ee(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", Qt, [
        ee(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), A = (e, c) => {
  const s = e.__vccOpts || e;
  for (const [i, u] of c)
    s[i] = u;
  return s;
}, ge = /* @__PURE__ */ A(Zt, [["__scopeId", "data-v-21565df9"]]), eo = {
  key: 0,
  class: "panel-title-prefix"
}, to = {
  key: 1,
  class: "panel-title-prefix-theme"
}, oo = /* @__PURE__ */ P({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (c, s) => (o(), y(ut(`h${e.level}`), {
      class: q(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (o(), n("span", eo, r(e.prefix), 1)) : (o(), n("span", to)),
        ee(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), so = /* @__PURE__ */ A(oo, [["__scopeId", "data-v-c3875efc"]]), ao = ["title"], no = ["width", "height"], lo = /* @__PURE__ */ P({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (c, s) => (o(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (i) => c.$emit("click"))
    }, [
      (o(), n("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
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
      ])], 8, no))
    ], 8, ao));
  }
}), _t = /* @__PURE__ */ A(lo, [["__scopeId", "data-v-6fc7f16d"]]), io = { class: "header-left" }, ro = {
  key: 0,
  class: "header-actions"
}, co = /* @__PURE__ */ P({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: q(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", io, [
        l(so, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            v(r(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), y(_t, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", ro, [
        ee(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ A(co, [["__scopeId", "data-v-55a62cd6"]]), uo = {
  key: 0,
  class: "section-title-count"
}, mo = {
  key: 1,
  class: "section-title-icon"
}, vo = /* @__PURE__ */ P({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (c, s) => (o(), y(ut(`h${e.level}`), {
      class: q(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (i) => e.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        ee(c.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", uo, "(" + r(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (o(), n("span", mo, r(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), we = /* @__PURE__ */ A(vo, [["__scopeId", "data-v-559361eb"]]), fo = { class: "status-grid" }, go = { class: "status-grid__column" }, ho = { class: "status-grid__title" }, po = { class: "status-grid__column status-grid__column--right" }, yo = { class: "status-grid__title" }, wo = /* @__PURE__ */ P({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (c, s) => (o(), n("div", fo, [
      t("div", go, [
        t("h4", ho, r(e.leftTitle), 1),
        ee(c.$slots, "left", {}, void 0, !0)
      ]),
      t("div", po, [
        t("h4", yo, r(e.rightTitle), 1),
        ee(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), bo = /* @__PURE__ */ A(wo, [["__scopeId", "data-v-fe556068"]]), ko = {
  key: 0,
  class: "status-item__icon"
}, $o = {
  key: 1,
  class: "status-item__count"
}, _o = { class: "status-item__label" }, Co = /* @__PURE__ */ P({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const c = e, s = V(() => `status-item--${c.variant}`);
    return (i, u) => (o(), n("div", {
      class: q(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), n("span", ko, r(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (o(), n("span", $o, r(e.count), 1)) : d("", !0),
      t("span", _o, r(e.label), 1)
    ], 2));
  }
}), Me = /* @__PURE__ */ A(Co, [["__scopeId", "data-v-6f929183"]]), xo = { class: "issue-card__header" }, So = { class: "issue-card__icon" }, Io = { class: "issue-card__title" }, Eo = {
  key: 0,
  class: "issue-card__content"
}, Lo = {
  key: 0,
  class: "issue-card__description"
}, No = {
  key: 1,
  class: "issue-card__items"
}, Mo = {
  key: 2,
  class: "issue-card__actions"
}, zo = /* @__PURE__ */ P({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const c = e, s = V(() => `issue-card--${c.severity}`);
    return (i, u) => (o(), n("div", {
      class: q(["issue-card", s.value])
    }, [
      t("div", xo, [
        t("span", So, r(e.icon), 1),
        t("h4", Io, r(e.title), 1)
      ]),
      i.$slots.default || e.description ? (o(), n("div", Eo, [
        e.description ? (o(), n("p", Lo, r(e.description), 1)) : d("", !0),
        ee(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (o(), n("div", No, [
        (o(!0), n(F, null, K(e.items, (p, m) => (o(), n("div", {
          key: m,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, r(p), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (o(), n("div", Mo, [
        ee(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ A(zo, [["__scopeId", "data-v-df6aa348"]]), Ro = ["type", "disabled"], Do = {
  key: 0,
  class: "spinner"
}, To = /* @__PURE__ */ P({
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
    return (c, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: q(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      e.loading ? (o(), n("span", Do)) : d("", !0),
      e.loading ? d("", !0) : ee(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ro));
  }
}), T = /* @__PURE__ */ A(To, [["__scopeId", "data-v-772abe47"]]), Bo = { class: "empty-state" }, Vo = {
  key: 0,
  class: "empty-icon"
}, Uo = { class: "empty-message" }, Oo = /* @__PURE__ */ P({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (c, s) => (o(), n("div", Bo, [
      e.icon ? (o(), n("div", Vo, r(e.icon), 1)) : d("", !0),
      t("p", Uo, r(e.message), 1),
      e.actionLabel ? (o(), y(T, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("action"))
      }, {
        default: a(() => [
          v(r(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), be = /* @__PURE__ */ A(Oo, [["__scopeId", "data-v-4466284f"]]), Fo = { class: "branch-indicator" }, Po = { class: "branch-indicator__info" }, Ao = { class: "branch-indicator__label" }, Wo = { class: "branch-indicator__name" }, Go = {
  key: 0,
  class: "branch-indicator__remote"
}, Ho = {
  key: 0,
  class: "branch-indicator__status"
}, jo = {
  key: 0,
  class: "branch-indicator__ahead"
}, qo = {
  key: 1,
  class: "branch-indicator__behind"
}, Ko = {
  key: 1,
  class: "branch-indicator__actions"
}, Jo = /* @__PURE__ */ P({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, s) => (o(), n("div", Fo, [
      t("div", Po, [
        t("span", Ao, r(e.label), 1),
        t("span", Wo, r(e.branchName), 1),
        e.remote ? (o(), n("span", Go, "@" + r(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (o(), n("div", Ho, [
        e.commitsAhead ? (o(), n("span", jo, " ↑ " + r(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (o(), n("span", qo, " ↓ " + r(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      c.$slots.actions ? (o(), n("div", Ko, [
        ee(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Yo = /* @__PURE__ */ A(Jo, [["__scopeId", "data-v-cb8dd50e"]]), Xo = /* @__PURE__ */ P({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (c, s) => (o(), n("span", {
      class: q(["detail-label"]),
      style: Je({ minWidth: e.minWidth })
    }, [
      ee(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ct = /* @__PURE__ */ A(Xo, [["__scopeId", "data-v-75e9eeb8"]]), Qo = /* @__PURE__ */ P({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, s) => (o(), n("span", {
      class: q(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ A(Qo, [["__scopeId", "data-v-2f186e4c"]]), Zo = { class: "detail-row" }, es = /* @__PURE__ */ P({
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
    return (c, s) => (o(), n("div", Zo, [
      l(ct, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          v(r(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), y(Pe, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          v(r(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ee(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Q = /* @__PURE__ */ A(es, [["__scopeId", "data-v-ef15664a"]]), ts = { class: "modal-header" }, os = { class: "modal-body" }, ss = { class: "status-section" }, as = {
  key: 0,
  class: "status-section"
}, ns = {
  key: 0,
  class: "workflow-group"
}, ls = { class: "workflow-group-header" }, is = { class: "workflow-group-title" }, rs = { class: "workflow-list" }, cs = { class: "workflow-name" }, ds = {
  key: 1,
  class: "workflow-group"
}, us = { class: "workflow-group-header" }, ms = { class: "workflow-group-title" }, vs = { class: "workflow-list" }, fs = { class: "workflow-name" }, gs = {
  key: 2,
  class: "workflow-group"
}, hs = { class: "workflow-group-header" }, ps = { class: "workflow-group-title" }, ys = { class: "workflow-list" }, ws = { class: "workflow-name" }, bs = {
  key: 3,
  class: "workflow-group"
}, ks = { class: "workflow-group-title" }, $s = { class: "expand-icon" }, _s = {
  key: 0,
  class: "workflow-list"
}, Cs = { class: "workflow-name" }, xs = {
  key: 1,
  class: "status-section"
}, Ss = {
  key: 0,
  class: "change-group"
}, Is = { class: "change-group-header" }, Es = { class: "change-group-title" }, Ls = { class: "change-list" }, Ns = { class: "node-name" }, Ms = {
  key: 0,
  class: "dev-badge"
}, zs = {
  key: 1,
  class: "change-group"
}, Rs = { class: "change-group-header" }, Ds = { class: "change-group-title" }, Ts = { class: "change-list" }, Bs = { class: "node-name" }, Vs = {
  key: 0,
  class: "dev-badge"
}, Us = {
  key: 2,
  class: "change-group"
}, Os = { class: "change-list" }, Fs = { class: "change-item" }, Ps = { class: "node-name" }, As = {
  key: 3,
  class: "change-group"
}, Ws = {
  key: 2,
  class: "status-section"
}, Gs = {
  key: 0,
  class: "drift-item"
}, Hs = { class: "drift-list" }, js = {
  key: 0,
  class: "drift-list-more"
}, qs = {
  key: 1,
  class: "drift-item"
}, Ks = { class: "drift-list" }, Js = {
  key: 0,
  class: "drift-list-more"
}, Ys = {
  key: 2,
  class: "drift-item"
}, Xs = {
  key: 3,
  class: "drift-item"
}, Qs = {
  key: 3,
  class: "status-section"
}, Zs = { class: "info-box" }, ea = { class: "drift-list" }, ta = {
  key: 0,
  class: "drift-list-more"
}, oa = {
  key: 4,
  class: "status-section"
}, sa = { class: "warning-box" }, aa = {
  key: 5,
  class: "empty-state-inline"
}, na = { class: "modal-actions" }, la = /* @__PURE__ */ P({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(e) {
    const c = e, s = I(!1);
    ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), wt(() => c.show, (h, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", h);
    }, { immediate: !0 });
    const i = V(() => {
      var h, k, C, L, M;
      return (h = c.status) != null && h.workflows ? (((k = c.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((C = c.status.workflows.modified) == null ? void 0 : C.length) ?? 0) > 0 || (((L = c.status.workflows.deleted) == null ? void 0 : L.length) ?? 0) > 0 || (((M = c.status.workflows.synced) == null ? void 0 : M.length) ?? 0) > 0 : !1;
    }), u = V(() => {
      var k, C, L;
      const h = (k = c.status) == null ? void 0 : k.git_changes;
      return h ? (((C = h.nodes_added) == null ? void 0 : C.length) ?? 0) > 0 || (((L = h.nodes_removed) == null ? void 0 : L.length) ?? 0) > 0 || h.workflow_changes || h.has_other_changes : !1;
    }), p = V(() => {
      var h, k, C, L, M, B;
      return !i.value && !u.value && ((k = (h = c.status) == null ? void 0 : h.comparison) == null ? void 0 : k.is_synced) && (((C = c.status) == null ? void 0 : C.missing_models_count) ?? 0) === 0 && (((B = (M = (L = c.status) == null ? void 0 : L.comparison) == null ? void 0 : M.disabled_nodes) == null ? void 0 : B.length) ?? 0) === 0;
    }), m = V(() => {
      var k, C;
      const h = (C = (k = c.status) == null ? void 0 : k.git_changes) == null ? void 0 : C.workflow_changes;
      return h ? typeof h == "number" ? h : Object.keys(h).length : 0;
    });
    function g(h) {
      return typeof h == "string" ? h : h.name;
    }
    function f(h) {
      return typeof h == "object" && h.is_development === !0;
    }
    return (h, k) => {
      var C, L, M, B, G, z, N, U, W, b, $, w, x, _, R, j, re, H, E, J, te, Oe, Fe, ce;
      return o(), y(Ue, { to: "body" }, [
        e.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[4] || (k[4] = (Z) => h.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: k[3] || (k[3] = fe(() => {
            }, ["stop"]))
          }, [
            t("div", ts, [
              k[5] || (k[5] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (Z) => h.$emit("close"))
              }, "✕")
            ]),
            t("div", os, [
              t("div", ss, [
                l(we, { level: "4" }, {
                  default: a(() => [...k[6] || (k[6] = [
                    v("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                l(Q, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              i.value ? (o(), n("div", as, [
                l(we, { level: "4" }, {
                  default: a(() => [...k[7] || (k[7] = [
                    v("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                (L = (C = e.status.workflows) == null ? void 0 : C.new) != null && L.length ? (o(), n("div", ns, [
                  t("div", ls, [
                    k[8] || (k[8] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", is, "NEW (" + r(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", rs, [
                    (o(!0), n(F, null, K(e.status.workflows.new, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", cs, r(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (B = (M = e.status.workflows) == null ? void 0 : M.modified) != null && B.length ? (o(), n("div", ds, [
                  t("div", us, [
                    k[9] || (k[9] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", ms, "MODIFIED (" + r(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", vs, [
                    (o(!0), n(F, null, K(e.status.workflows.modified, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", fs, r(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (z = (G = e.status.workflows) == null ? void 0 : G.deleted) != null && z.length ? (o(), n("div", gs, [
                  t("div", hs, [
                    k[10] || (k[10] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", ps, "DELETED (" + r(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", ys, [
                    (o(!0), n(F, null, K(e.status.workflows.deleted, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", ws, r(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (U = (N = e.status.workflows) == null ? void 0 : N.synced) != null && U.length ? (o(), n("div", bs, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[1] || (k[1] = (Z) => s.value = !s.value)
                  }, [
                    k[11] || (k[11] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", ks, "SYNCED (" + r(e.status.workflows.synced.length) + ")", 1),
                    t("span", $s, r(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", _s, [
                    (o(!0), n(F, null, K(e.status.workflows.synced, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      t("span", Cs, r(Z), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (o(), n("div", xs, [
                l(we, { level: "4" }, {
                  default: a(() => [...k[12] || (k[12] = [
                    v("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (b = (W = e.status.git_changes) == null ? void 0 : W.nodes_added) != null && b.length ? (o(), n("div", Ss, [
                  t("div", Is, [
                    k[13] || (k[13] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Es, "NODES ADDED (" + r(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Ls, [
                    (o(!0), n(F, null, K(e.status.git_changes.nodes_added, (Z) => (o(), n("div", {
                      key: g(Z),
                      class: "change-item"
                    }, [
                      t("span", Ns, r(g(Z)), 1),
                      f(Z) ? (o(), n("span", Ms, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (w = ($ = e.status.git_changes) == null ? void 0 : $.nodes_removed) != null && w.length ? (o(), n("div", zs, [
                  t("div", Rs, [
                    k[14] || (k[14] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Ds, "NODES REMOVED (" + r(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Ts, [
                    (o(!0), n(F, null, K(e.status.git_changes.nodes_removed, (Z) => (o(), n("div", {
                      key: g(Z),
                      class: "change-item"
                    }, [
                      t("span", Bs, r(g(Z)), 1),
                      f(Z) ? (o(), n("span", Vs, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = e.status.git_changes) != null && x.workflow_changes ? (o(), n("div", Us, [
                  k[15] || (k[15] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Os, [
                    t("div", Fs, [
                      t("span", Ps, r(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (_ = e.status.git_changes) != null && _.has_other_changes ? (o(), n("div", As, [...k[16] || (k[16] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : d("", !0)
              ])) : d("", !0),
              (R = e.status.comparison) != null && R.is_synced ? d("", !0) : (o(), n("div", Ws, [
                l(we, { level: "4" }, {
                  default: a(() => [...k[17] || (k[17] = [
                    v("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                k[18] || (k[18] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (re = (j = e.status.comparison) == null ? void 0 : j.missing_nodes) != null && re.length ? (o(), n("div", Gs, [
                  l(Q, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Hs, [
                    (o(!0), n(F, null, K(e.status.comparison.missing_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + r(Z), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), n("div", js, " ... and " + r(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (E = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && E.length ? (o(), n("div", qs, [
                  l(Q, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Ks, [
                    (o(!0), n(F, null, K(e.status.comparison.extra_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + r(Z), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), n("div", Js, " ... and " + r(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (te = (J = e.status.comparison) == null ? void 0 : J.version_mismatches) != null && te.length ? (o(), n("div", Ys, [
                  l(Q, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (Oe = e.status.comparison) != null && Oe.packages_in_sync ? d("", !0) : (o(), n("div", Xs, [
                  l(Q, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ce = (Fe = e.status.comparison) == null ? void 0 : Fe.disabled_nodes) != null && ce.length ? (o(), n("div", Qs, [
                l(we, { level: "4" }, {
                  default: a(() => [...k[19] || (k[19] = [
                    v("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Zs, [
                  k[20] || (k[20] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, r(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", ea, [
                  (o(!0), n(F, null, K(e.status.comparison.disabled_nodes.slice(0, 10), (Z) => (o(), n("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + r(Z), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", ta, " ... and " + r(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), n("div", oa, [
                l(we, { level: "4" }, {
                  default: a(() => [...k[21] || (k[21] = [
                    v("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", sa, [
                  k[22] || (k[22] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, r(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[23] || (k[23] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              p.value ? (o(), n("div", aa, [...k[24] || (k[24] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            t("div", na, [
              l(T, {
                variant: "secondary",
                onClick: k[2] || (k[2] = (Z) => h.$emit("close"))
              }, {
                default: a(() => [...k[25] || (k[25] = [
                  v(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), ht = /* @__PURE__ */ A(la, [["__scopeId", "data-v-19585c5b"]]), ia = { class: "health-section-header" }, ra = { style: { "margin-top": "var(--cg-space-1)" } }, ca = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, da = /* @__PURE__ */ P({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: c }) {
    const s = e, i = I(!1), u = I(!1);
    ue(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", ht);
    });
    function p() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const g = V(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), f = V(() => {
      const L = s.status.git_changes;
      return L.nodes_added.length > 0 || L.nodes_removed.length > 0 || L.workflow_changes || L.has_other_changes;
    }), h = V(() => s.status.git_changes.has_other_changes), k = V(() => s.status.missing_models_count > 0 || f.value || !s.status.comparison.is_synced), C = V(() => {
      const L = [];
      return s.status.workflows.new.length > 0 && L.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && L.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && L.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && L.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && L.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${L.length > 0 ? L.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (L, M) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, { title: "STATUS" })
        ]),
        content: a(() => [
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: M[0] || (M[0] = (B) => u.value = !0),
            onMouseleave: M[1] || (M[1] = (B) => u.value = !1)
          }, [
            t("div", ia, [
              l(we, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...M[9] || (M[9] = [
                  v(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              l(Gt, { name: "fade" }, {
                default: a(() => [
                  u.value ? (o(), y(T, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: a(() => [...M[10] || (M[10] = [
                      v(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            l(bo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                e.status.workflows.new.length ? (o(), y(Me, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                e.status.workflows.modified.length ? (o(), y(Me, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                e.status.workflows.deleted.length ? (o(), y(Me, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                l(Me, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: g.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                e.status.git_changes.nodes_added.length ? (o(), y(Me, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), y(Me, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                h.value ? (o(), y(Me, {
                  key: 2,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                f.value ? d("", !0) : (o(), y(Me, {
                  key: 3,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          t("div", ra, [
            l(Yo, {
              "branch-name": e.status.current_branch || "main"
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[2] || (M[2] = (B) => L.$emit("switch-branch"))
                }, {
                  default: a(() => [...M[11] || (M[11] = [
                    v(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          k.value ? (o(), n("div", ca, [
            l(we, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...M[12] || (M[12] = [
                v(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            e.status.missing_models_count > 0 ? (o(), y(Ze, {
              key: 0,
              severity: "warning",
              icon: "⚠",
              title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[3] || (M[3] = (B) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...M[13] || (M[13] = [
                    v(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[4] || (M[4] = (B) => L.$emit("resolve-models"))
                }, {
                  default: a(() => [...M[14] || (M[14] = [
                    v(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            f.value ? (o(), y(Ze, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: "You have unsaved changes",
              description: C.value
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: m
                }, {
                  default: a(() => [...M[15] || (M[15] = [
                    v(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[5] || (M[5] = (B) => L.$emit("commit-changes"))
                }, {
                  default: a(() => [...M[16] || (M[16] = [
                    v(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : d("", !0),
            e.status.comparison.is_synced ? d("", !0) : (o(), y(Ze, {
              key: 2,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[6] || (M[6] = (B) => L.$emit("view-debug"))
                }, {
                  default: a(() => [...M[17] || (M[17] = [
                    v(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "primary",
                  size: "sm",
                  onClick: M[7] || (M[7] = (B) => L.$emit("sync-environment"))
                }, {
                  default: a(() => [...M[18] || (M[18] = [
                    v(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : d("", !0),
          !k.value && !f.value ? (o(), y(be, {
            key: 1,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      l(ht, {
        show: i.value,
        status: e.status,
        onClose: M[8] || (M[8] = (B) => i.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ua = /* @__PURE__ */ A(da, [["__scopeId", "data-v-d5c467d9"]]), ma = ["type", "value", "placeholder", "disabled"], va = /* @__PURE__ */ P({
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
  setup(e, { expose: c, emit: s }) {
    const i = e, u = s, p = I(null);
    function m(g) {
      const f = g.target.value;
      u("update:modelValue", f);
    }
    return ue(() => {
      i.autoFocus && p.value && p.value.focus();
    }), c({
      focus: () => {
        var g;
        return (g = p.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = p.value) == null ? void 0 : g.blur();
      }
    }), (g, f) => (o(), n("input", {
      ref_key: "inputRef",
      ref: p,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: q(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: m,
      onKeyup: [
        f[0] || (f[0] = Se((h) => g.$emit("enter"), ["enter"])),
        f[1] || (f[1] = Se((h) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: f[2] || (f[2] = (h) => g.$emit("focus")),
      onBlur: f[3] || (f[3] = (h) => g.$emit("blur"))
    }, null, 42, ma));
  }
}), Ae = /* @__PURE__ */ A(va, [["__scopeId", "data-v-0380d08f"]]), fa = { class: "branch-create-form" }, ga = { class: "form-actions" }, ha = /* @__PURE__ */ P({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: c }) {
    const s = c, i = I(""), u = V(() => {
      const g = i.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function p() {
      u.value && (s("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", s("cancel");
    }
    return (g, f) => (o(), n("div", fa, [
      l(Ae, {
        modelValue: i.value,
        "onUpdate:modelValue": f[0] || (f[0] = (h) => i.value = h),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: m
      }, null, 8, ["modelValue"]),
      t("div", ga, [
        l(T, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: p
        }, {
          default: a(() => [...f[1] || (f[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(T, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: a(() => [...f[2] || (f[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pa = /* @__PURE__ */ A(ha, [["__scopeId", "data-v-7c500394"]]), ya = { class: "branch-list-item__indicator" }, wa = { class: "branch-list-item__name" }, ba = {
  key: 0,
  class: "branch-list-item__actions"
}, ka = {
  key: 0,
  class: "branch-list-item__current-label"
}, $a = /* @__PURE__ */ P({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: q(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (i) => e.clickable && c.$emit("click"))
    }, [
      t("span", ya, r(e.isCurrent ? "●" : "○"), 1),
      t("span", wa, r(e.branchName), 1),
      c.$slots.actions || e.showCurrentLabel ? (o(), n("div", ba, [
        ee(c.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (o(), n("span", ka, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), _a = /* @__PURE__ */ A($a, [["__scopeId", "data-v-c6581a24"]]), Ca = {
  key: 2,
  class: "branch-list"
}, xa = /* @__PURE__ */ P({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: c }) {
    const s = c, i = I(!1);
    function u(m) {
      s("create", m), p();
    }
    function p() {
      i.value = !1;
    }
    return (m, g) => (o(), y(ge, null, {
      header: a(() => [
        l(he, { title: "BRANCHES" }, {
          actions: a(() => [
            l(T, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (f) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...g[1] || (g[1] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", {
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
        i.value ? (o(), y(pa, {
          key: 0,
          onCreate: u,
          onCancel: p
        })) : d("", !0),
        e.branches.length === 0 ? (o(), y(be, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Ca, [
          (o(!0), n(F, null, K(e.branches, (f) => (o(), y(_a, {
            key: f.name,
            "branch-name": f.name,
            "is-current": f.is_current
          }, {
            actions: a(() => [
              f.is_current ? d("", !0) : (o(), y(T, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (h) => m.$emit("switch", f.name)
              }, {
                default: a(() => [...g[2] || (g[2] = [
                  v(" Switch ", -1)
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
}), Sa = /* @__PURE__ */ A(xa, [["__scopeId", "data-v-763d6ec4"]]), Ia = { class: "commit-list" }, Ea = /* @__PURE__ */ P({
  __name: "CommitList",
  setup(e) {
    return (c, s) => (o(), n("div", Ia, [
      ee(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), La = /* @__PURE__ */ A(Ea, [["__scopeId", "data-v-8c5ee761"]]), Na = { class: "commit-hash" }, Ma = /* @__PURE__ */ P({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const c = e, s = V(() => c.hash.slice(0, c.length));
    return (i, u) => (o(), n("span", Na, r(s.value), 1));
  }
}), Ct = /* @__PURE__ */ A(Ma, [["__scopeId", "data-v-7c333cc6"]]), za = { class: "commit-message" }, Ra = { class: "commit-date" }, Da = /* @__PURE__ */ P({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const s = e, i = c;
    function u() {
      s.clickable && i("click");
    }
    return (p, m) => (o(), n("div", {
      class: q(["commit-item", { clickable: e.clickable }]),
      onClick: u
    }, [
      l(Ct, { hash: e.hash }, null, 8, ["hash"]),
      t("span", za, r(e.message), 1),
      t("span", Ra, r(e.relativeDate), 1),
      p.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = fe(() => {
        }, ["stop"]))
      }, [
        ee(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ A(Da, [["__scopeId", "data-v-dd7c621b"]]), Ba = /* @__PURE__ */ P({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (c, s) => (o(), y(ge, null, {
      header: a(() => [
        l(he, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (o(), y(be, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), y(La, { key: 1 }, {
          default: a(() => [
            (o(!0), n(F, null, K(e.commits, (i) => (o(), y(Ta, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (u) => c.$emit("select", i)
            }, {
              actions: a(() => [
                l(T, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => c.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
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
}), Va = /* @__PURE__ */ A(Ba, [["__scopeId", "data-v-981c3c64"]]);
[
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((e, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
];
const Ua = [
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
  ...Ua,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() - 6e4).toISOString(), new Date(Date.now() - 12e4).toISOString(), new Date(Date.now() - 18e4).toISOString();
function pe() {
  const e = I(!1), c = I(null);
  async function s(O, Y) {
    var He;
    if (!((He = window.app) != null && He.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(O, Y);
    if (!se.ok) {
      const Ye = await se.json().catch(() => ({}));
      throw new Error(Ye.error || Ye.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function i() {
    return s("/v2/comfygit/status");
  }
  async function u(O, Y = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: O, allow_issues: Y })
    });
  }
  async function p(O = 10, Y = 0) {
    return s(`/v2/comfygit/log?limit=${O}&offset=${Y}`);
  }
  async function m(O) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: O })
    });
  }
  async function g() {
    return s("/v2/comfygit/branches");
  }
  async function f(O) {
    return s(`/v2/comfygit/commit/${O}`);
  }
  async function h(O, Y = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: O, force: Y })
    });
  }
  async function k(O, Y = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: O, start_point: Y })
    });
  }
  async function C(O, Y = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: O, force: Y })
    });
  }
  async function L() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const O = await i();
        return [{
          name: O.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + O.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: O.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: O.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(O) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: O })
    });
  }
  async function B() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function G(O, Y, se) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: O, pytorch_backend: Y, clone_from: se })
    });
  }
  async function z(O) {
    return s(`/v2/workspace/environments/${O}`, {
      method: "DELETE"
    });
  }
  async function N() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const O = await i(), Y = [];
      return O.workflows.new.forEach((se) => {
        Y.push({ name: se, status: "new", missing_nodes: 0, missing_models: 0, path: se });
      }), O.workflows.modified.forEach((se) => {
        Y.push({ name: se, status: "modified", missing_nodes: 0, missing_models: 0, path: se });
      }), O.workflows.synced.forEach((se) => {
        Y.push({ name: se, status: "synced", missing_nodes: 0, missing_models: 0, path: se });
      }), Y;
    }
  }
  async function U(O) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(O)}/details`);
  }
  async function W(O) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(O)}/resolve`, {
      method: "POST"
    });
  }
  async function b(O, Y, se) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(O)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Y, install_models: se })
    });
  }
  async function $(O, Y, se) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(O)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Y, importance: se })
    });
  }
  async function w() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function x() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function _(O, Y) {
    return s(`/v2/workspace/models/${O}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Y })
    });
  }
  async function R(O) {
    return s(`/v2/workspace/models/${O}`, {
      method: "DELETE"
    });
  }
  async function j(O) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(O)
    });
  }
  async function re() {
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
  async function H(O) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(O)
    });
  }
  async function E(O, Y) {
    try {
      const se = new URLSearchParams();
      return O && se.append("level", O), Y && se.append("lines", Y.toString()), s(`/v2/comfygit/debug/logs?${se}`);
    } catch {
      return [];
    }
  }
  async function J(O, Y) {
    try {
      const se = new URLSearchParams();
      return O && se.append("level", O), Y && se.append("lines", Y.toString()), s(`/v2/workspace/debug/logs?${se}`);
    } catch {
      return [];
    }
  }
  async function te() {
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
  async function Oe(O) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(O)}/install`, {
      method: "POST"
    });
  }
  async function Fe(O) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(O)}/update`, {
      method: "POST"
    });
  }
  async function ce(O) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(O)}`, {
      method: "DELETE"
    });
  }
  async function Z() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function De(O, Y) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: O, url: Y })
    });
  }
  async function Ne(O) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(O)}`, {
      method: "DELETE"
    });
  }
  async function ot(O, Y, se) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(O)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Y, push_url: se })
    });
  }
  async function ae(O) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(O)}/fetch`, {
      method: "POST"
    });
  }
  async function Ce(O) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(O)}/status`);
    } catch {
      return null;
    }
  }
  async function st(O = "skip", Y = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: O,
        remove_extra_nodes: Y
      })
    });
  }
  return {
    isLoading: e,
    error: c,
    getStatus: i,
    commit: u,
    getHistory: p,
    exportEnv: m,
    // Git Operations
    getBranches: g,
    getCommitDetail: f,
    checkout: h,
    createBranch: k,
    switchBranch: C,
    // Environment Management
    getEnvironments: L,
    switchEnvironment: M,
    getSwitchProgress: B,
    createEnvironment: G,
    deleteEnvironment: z,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: U,
    resolveWorkflow: W,
    installWorkflowDeps: b,
    setModelImportance: $,
    // Model Management
    getEnvironmentModels: w,
    getWorkspaceModels: x,
    updateModelSource: _,
    deleteModel: R,
    downloadModel: j,
    // Settings
    getConfig: re,
    updateConfig: H,
    // Debug/Logs
    getEnvironmentLogs: E,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: te,
    installNode: Oe,
    updateNode: Fe,
    uninstallNode: ce,
    // Git Remotes
    getRemotes: Z,
    addRemote: De,
    removeRemote: Ne,
    updateRemoteUrl: ot,
    fetchRemote: ae,
    getRemoteSyncStatus: Ce,
    // Environment Sync
    syncEnvironmentManually: st
  };
}
const Oa = { class: "base-modal-header" }, Fa = {
  key: 0,
  class: "base-modal-title"
}, Pa = { class: "base-modal-body" }, Aa = {
  key: 0,
  class: "base-modal-loading"
}, Wa = {
  key: 1,
  class: "base-modal-error"
}, Ga = {
  key: 0,
  class: "base-modal-footer"
}, Ha = /* @__PURE__ */ P({
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
  setup(e, { emit: c }) {
    const s = e, i = c;
    function u() {
      s.closeOnOverlayClick && i("close");
    }
    function p(m) {
      m.key === "Escape" && i("close");
    }
    return ue(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Ht(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (m, g) => (o(), y(Ue, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        t("div", {
          class: q(["base-modal-content", e.size]),
          onClick: g[1] || (g[1] = fe(() => {
          }, ["stop"]))
        }, [
          t("div", Oa, [
            ee(m.$slots, "header", {}, () => [
              e.title ? (o(), n("h3", Fa, r(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (f) => m.$emit("close"))
            }, [...g[2] || (g[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          t("div", Pa, [
            e.loading ? (o(), n("div", Aa, "Loading...")) : e.error ? (o(), n("div", Wa, r(e.error), 1)) : ee(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), n("div", Ga, [
            ee(m.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ A(Ha, [["__scopeId", "data-v-700d367b"]]), ja = ["type", "disabled"], qa = {
  key: 0,
  class: "spinner"
}, Ka = /* @__PURE__ */ P({
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
    return (c, s) => (o(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: q(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      e.loading ? (o(), n("span", qa)) : d("", !0),
      ee(c.$slots, "default", {}, void 0, !0)
    ], 10, ja));
  }
}), me = /* @__PURE__ */ A(Ka, [["__scopeId", "data-v-f3452606"]]), Ja = {
  key: 0,
  class: "base-title-count"
}, Ya = /* @__PURE__ */ P({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (c, s) => (o(), y(ut(`h${e.level}`), {
      class: q(["base-title", e.variant])
    }, {
      default: a(() => [
        ee(c.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), n("span", Ja, "(" + r(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ A(Ya, [["__scopeId", "data-v-5a01561d"]]), Xa = ["value", "disabled"], Qa = {
  key: 0,
  value: "",
  disabled: ""
}, Za = ["value"], en = {
  key: 0,
  class: "base-select-error"
}, tn = /* @__PURE__ */ P({
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
    function c(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, u) => (o(), n("div", {
      class: q(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: q(["base-select", { error: !!e.error }]),
        onChange: u[0] || (u[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        e.placeholder ? (o(), n("option", Qa, r(e.placeholder), 1)) : d("", !0),
        (o(!0), n(F, null, K(e.options, (p) => (o(), n("option", {
          key: c(p),
          value: c(p)
        }, r(s(p)), 9, Za))), 128))
      ], 42, Xa),
      e.error ? (o(), n("span", en, r(e.error), 1)) : d("", !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ A(tn, [["__scopeId", "data-v-7436d745"]]), on = { class: "popover-header" }, sn = { class: "popover-title" }, an = { class: "popover-content" }, nn = {
  key: 0,
  class: "popover-actions"
}, ln = /* @__PURE__ */ P({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (c, s) => (o(), y(Ue, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => c.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Je({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = fe(() => {
          }, ["stop"]))
        }, [
          t("div", on, [
            t("h4", sn, r(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          t("div", an, [
            ee(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", nn, [
            ee(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ie = /* @__PURE__ */ A(ln, [["__scopeId", "data-v-42815ace"]]), rn = { class: "detail-section" }, cn = {
  key: 0,
  class: "empty-message"
}, dn = { class: "model-header" }, un = { class: "model-name" }, mn = { class: "model-details" }, vn = { class: "model-row" }, fn = { class: "model-row" }, gn = { class: "label" }, hn = {
  key: 0,
  class: "model-row"
}, pn = { class: "value" }, yn = {
  key: 1,
  class: "model-row"
}, wn = { class: "value" }, bn = {
  key: 0,
  class: "model-actions"
}, kn = { class: "detail-section" }, $n = {
  key: 0,
  class: "empty-message"
}, _n = { class: "node-name" }, Cn = {
  key: 0,
  class: "node-version"
}, xn = /* @__PURE__ */ P({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: c }) {
    const s = e, i = c, { getWorkflowDetails: u, setModelImportance: p, installWorkflowDeps: m } = pe(), g = I(null), f = I(!1), h = I(null), k = I(!1), C = I({}), L = I({}), M = I(!1), B = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function G() {
      f.value = !0, h.value = null;
      try {
        g.value = await u(s.workflowName);
      } catch (W) {
        h.value = W instanceof Error ? W.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function z(W, b) {
      C.value[W] = b, k.value = !0;
    }
    async function N() {
      if (!k.value) {
        i("close");
        return;
      }
      f.value = !0, h.value = null;
      try {
        for (const [W, b] of Object.entries(C.value))
          await p(s.workflowName, W, b);
        i("close");
      } catch (W) {
        h.value = W instanceof Error ? W.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    async function U(W) {
      L.value[W] = !0, h.value = null;
      try {
        await m(s.workflowName, !0, !1), await G();
      } catch (b) {
        h.value = b instanceof Error ? b.message : "Failed to install node";
      } finally {
        L.value[W] = !1;
      }
    }
    return ue(G), (W, b) => (o(), n(F, null, [
      l(tt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: h.value || void 0,
        onClose: b[3] || (b[3] = ($) => i("close"))
      }, {
        body: a(() => [
          g.value ? (o(), n(F, { key: 0 }, [
            t("section", rn, [
              l(ze, { variant: "section" }, {
                default: a(() => [
                  v("MODELS USED (" + r(g.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              g.value.models.length === 0 ? (o(), n("div", cn, " No models used in this workflow ")) : d("", !0),
              (o(!0), n(F, null, K(g.value.models, ($) => (o(), n("div", {
                key: $.hash,
                class: "model-card"
              }, [
                t("div", dn, [
                  b[5] || (b[5] = t("span", { class: "model-icon" }, "📦", -1)),
                  t("span", un, r($.filename), 1)
                ]),
                t("div", mn, [
                  t("div", vn, [
                    b[6] || (b[6] = t("span", { class: "label" }, "Status:", -1)),
                    t("span", {
                      class: q(["value", $.status === "available" ? "success" : "error"])
                    }, r($.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                  ]),
                  t("div", fn, [
                    t("span", gn, [
                      b[7] || (b[7] = v(" Importance: ", -1)),
                      l(_t, {
                        size: 14,
                        title: "About importance levels",
                        onClick: b[0] || (b[0] = (w) => M.value = !0)
                      })
                    ]),
                    l(Ve, {
                      "model-value": C.value[$.hash] || $.importance,
                      options: B,
                      "onUpdate:modelValue": (w) => z($.hash, w)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  $.node_type ? (o(), n("div", hn, [
                    b[8] || (b[8] = t("span", { class: "label" }, "Used in:", -1)),
                    t("span", pn, r($.node_type) + " (Node " + r($.node_id) + ")", 1)
                  ])) : d("", !0),
                  $.size_mb ? (o(), n("div", yn, [
                    b[9] || (b[9] = t("span", { class: "label" }, "Size:", -1)),
                    t("span", wn, r($.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                $.status === "missing" ? (o(), n("div", bn, [
                  l(me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: b[1] || (b[1] = (w) => i("resolve"))
                  }, {
                    default: a(() => [...b[10] || (b[10] = [
                      v(" Resolve ", -1)
                    ])]),
                    _: 1
                  })
                ])) : d("", !0)
              ]))), 128))
            ]),
            t("section", kn, [
              l(ze, { variant: "section" }, {
                default: a(() => [
                  v("NODES USED (" + r(g.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              g.value.nodes.length === 0 ? (o(), n("div", $n, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), n(F, null, K(g.value.nodes, ($) => (o(), n("div", {
                key: $.name,
                class: "node-item"
              }, [
                t("span", {
                  class: q(["node-status", $.status === "installed" ? "installed" : "missing"])
                }, r($.status === "installed" ? "✓" : "✕"), 3),
                t("span", _n, r($.name), 1),
                $.version ? (o(), n("span", Cn, "v" + r($.version), 1)) : d("", !0),
                $.status === "missing" ? (o(), y(me, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: L.value[$.name],
                  onClick: (w) => U($.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...b[11] || (b[11] = [
                    v(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: a(() => [
          l(me, {
            variant: "secondary",
            onClick: b[2] || (b[2] = ($) => i("close"))
          }, {
            default: a(() => [...b[12] || (b[12] = [
              v(" Close ", -1)
            ])]),
            _: 1
          }),
          k.value ? (o(), y(me, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: a(() => [...b[13] || (b[13] = [
              v(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      l(Ie, {
        show: M.value,
        title: "Model Importance Levels",
        onClose: b[4] || (b[4] = ($) => M.value = !1)
      }, {
        content: a(() => [...b[14] || (b[14] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              v(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              v(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              v(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sn = /* @__PURE__ */ A(xn, [["__scopeId", "data-v-acbf5032"]]), In = {
  key: 0,
  class: "resolve-section"
}, En = { class: "resolve-card success-card" }, Ln = { class: "items-list" }, Nn = { class: "item-info" }, Mn = { class: "item-name" }, zn = {
  key: 0,
  class: "item-meta"
}, Rn = { class: "match-type" }, Dn = { class: "source" }, Tn = {
  key: 1,
  class: "resolve-section"
}, Bn = { class: "resolve-card warning-card" }, Vn = { class: "items-list" }, Un = { class: "item-info" }, On = { class: "item-name" }, Fn = { class: "item-meta" }, Pn = { key: 0 }, An = { key: 1 }, Wn = {
  key: 0,
  class: "item-warning"
}, Gn = {
  key: 0,
  class: "item-action"
}, Hn = ["onClick"], jn = {
  key: 2,
  class: "resolve-section"
}, qn = { class: "info-text" }, Kn = { class: "actions-summary" }, Jn = { class: "summary-list" }, Yn = { key: 0 }, Xn = { key: 1 }, Qn = { key: 2 }, Zn = {
  key: 0,
  class: "estimated-size"
}, el = /* @__PURE__ */ P({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: c }) {
    const s = e, i = c, { resolveWorkflow: u, installWorkflowDeps: p } = pe(), m = I(null), g = I(!1), f = I(!1), h = I(null), k = V(() => {
      var $;
      return m.value ? (($ = m.value.download_results) == null ? void 0 : $.every((w) => w.can_download)) ?? !1 : !1;
    });
    async function C() {
      g.value = !0, h.value = null;
      try {
        m.value = await u(s.workflowName);
      } catch ($) {
        h.value = $ instanceof Error ? $.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function L($) {
      return !$.possible_matches || $.possible_matches.length === 0 ? null : $.possible_matches.reduce(
        (w, x) => x.match_confidence > w.match_confidence ? x : w
      );
    }
    function M($) {
      return $ >= 0.9 ? "high" : $ >= 0.7 ? "medium" : "low";
    }
    function B($) {
      const w = L($);
      return w ? w.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G($) {
      var w, x;
      return (x = (w = m.value) == null ? void 0 : w.download_results) == null ? void 0 : x.find((_) => _.model === $);
    }
    function z($) {
      const w = G($);
      return (w == null ? void 0 : w.can_download) ?? !1;
    }
    function N($) {
      const w = G($);
      return (w == null ? void 0 : w.source_url) || null;
    }
    function U($) {
      window.open($, "_blank");
    }
    async function W() {
      if (!(!m.value || f.value)) {
        f.value = !0, h.value = null;
        try {
          await p(
            s.workflowName,
            m.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch ($) {
          h.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          f.value = !1;
        }
      }
    }
    async function b() {
      if (!(!m.value || f.value)) {
        f.value = !0, h.value = null;
        try {
          await p(
            s.workflowName,
            m.value.nodes_to_install,
            m.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch ($) {
          h.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          f.value = !1;
        }
      }
    }
    return ue(C), ($, w) => (o(), y(tt, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: h.value || void 0,
      onClose: w[1] || (w[1] = (x) => i("close"))
    }, {
      body: a(() => [
        m.value ? (o(), n(F, { key: 0 }, [
          w[5] || (w[5] = t("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          m.value.nodes_unresolved.length > 0 ? (o(), n("section", In, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                v("NODES (" + r(m.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", En, [
              w[2] || (w[2] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "✓"),
                t("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              t("div", Ln, [
                (o(!0), n(F, null, K(m.value.nodes_unresolved, (x) => {
                  var _;
                  return o(), n("div", {
                    key: x.node_type,
                    class: "item"
                  }, [
                    t("div", Nn, [
                      t("div", Mn, r(((_ = L(x)) == null ? void 0 : _.package_id) || x.node_type), 1),
                      L(x) ? (o(), n("div", zn, [
                        t("span", {
                          class: q(["confidence-badge", M(L(x).match_confidence)])
                        }, r(Math.round(L(x).match_confidence * 100)) + "% match ", 3),
                        t("span", Rn, r(L(x).match_type), 1),
                        t("span", Dn, "Source: " + r(B(x)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          m.value.models_unresolved.length > 0 ? (o(), n("section", Tn, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                v("MODELS (" + r(m.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", Bn, [
              w[3] || (w[3] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "⚠"),
                t("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              t("div", Vn, [
                (o(!0), n(F, null, K(m.value.models_unresolved, (x) => (o(), n("div", {
                  key: x.filename,
                  class: "item"
                }, [
                  t("div", Un, [
                    t("div", On, r(x.filename), 1),
                    t("div", Fn, [
                      x.expected_category ? (o(), n("span", Pn, "Type: " + r(x.expected_category), 1)) : d("", !0),
                      G(x.filename) ? (o(), n("span", An, " Size: ~" + r(G(x.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    z(x.filename) ? d("", !0) : (o(), n("div", Wn, " No auto-download source configured "))
                  ]),
                  N(x.filename) ? (o(), n("div", Gn, [
                    t("button", {
                      class: "link-btn",
                      onClick: (_) => U(N(x.filename))
                    }, " Open Source ↗ ", 8, Hn)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          m.value.nodes_resolved.length > 0 || m.value.models_resolved.length > 0 ? (o(), n("section", jn, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                v(" ALREADY AVAILABLE (" + r(m.value.nodes_resolved.length + m.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            t("div", qn, r(m.value.nodes_resolved.length) + " nodes and " + r(m.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          t("div", Kn, [
            w[4] || (w[4] = t("div", { class: "summary-title" }, "This will:", -1)),
            t("ol", Jn, [
              m.value.nodes_to_install.length ? (o(), n("li", Yn, " Install " + r(m.value.nodes_to_install.length) + " nodes (~" + r(m.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              m.value.nodes_to_install.length ? (o(), n("li", Xn, " Restart ComfyUI to load new nodes ")) : d("", !0),
              m.value.models_to_download.length ? (o(), n("li", Qn, " You'll still need to download " + r(m.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            m.value.estimated_size_mb ? (o(), n("div", Zn, " Estimated download: " + r(m.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: w[0] || (w[0] = (x) => i("close"))
        }, {
          default: a(() => [...w[6] || (w[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m.value && m.value.nodes_to_install.length && m.value.models_to_download.length ? (o(), y(me, {
          key: 0,
          variant: "secondary",
          disabled: f.value,
          loading: f.value,
          onClick: W
        }, {
          default: a(() => [...w[7] || (w[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        m.value && (m.value.nodes_to_install.length || m.value.models_to_download.length) ? (o(), y(me, {
          key: 1,
          variant: "primary",
          disabled: f.value || m.value.models_to_download.length > 0 && !k.value,
          loading: f.value,
          onClick: b
        }, {
          default: a(() => [...w[8] || (w[8] = [
            v(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), tl = /* @__PURE__ */ A(el, [["__scopeId", "data-v-d68efb14"]]), ol = { class: "search-input-wrapper" }, sl = ["value", "placeholder"], al = /* @__PURE__ */ P({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: c }) {
    const s = e, i = c, u = I(null);
    let p;
    function m(f) {
      const h = f.target.value;
      s.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        i("update:modelValue", h);
      }, s.debounce)) : i("update:modelValue", h);
    }
    function g() {
      var f;
      i("update:modelValue", ""), i("clear"), (f = u.value) == null || f.focus();
    }
    return ue(() => {
      s.autoFocus && u.value && u.value.focus();
    }), (f, h) => (o(), n("div", ol, [
      t("input", {
        ref_key: "inputRef",
        ref: u,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: Se(g, ["escape"])
      }, null, 40, sl),
      e.clearable && e.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), nl = /* @__PURE__ */ A(al, [["__scopeId", "data-v-266f857a"]]), ll = { class: "search-bar" }, il = /* @__PURE__ */ P({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (c, s) => (o(), n("div", ll, [
      l(nl, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ge = /* @__PURE__ */ A(il, [["__scopeId", "data-v-3d51bbfd"]]), rl = { class: "section-group" }, cl = {
  key: 0,
  class: "section-content"
}, dl = /* @__PURE__ */ P({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: c }) {
    const s = e, i = c, u = I(s.initiallyExpanded);
    function p() {
      s.collapsible && (u.value = !u.value, i("toggle", u.value));
    }
    return (m, g) => (o(), n("section", rl, [
      l(we, {
        count: e.count,
        clickable: e.collapsible,
        expanded: u.value,
        onClick: p
      }, {
        default: a(() => [
          v(r(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || u.value ? (o(), n("div", cl, [
        ee(m.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ie = /* @__PURE__ */ A(dl, [["__scopeId", "data-v-c48e33ed"]]), ul = { class: "item-header" }, ml = {
  key: 0,
  class: "item-icon"
}, vl = { class: "item-info" }, fl = {
  key: 0,
  class: "item-title"
}, gl = {
  key: 1,
  class: "item-subtitle"
}, hl = {
  key: 0,
  class: "item-details"
}, pl = {
  key: 1,
  class: "item-actions"
}, yl = /* @__PURE__ */ P({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const s = e, i = V(() => s.status ? `status-${s.status}` : "");
    return (u, p) => (o(), n("div", {
      class: q(["item-card", { clickable: e.clickable, compact: e.compact }, i.value]),
      onClick: p[0] || (p[0] = (m) => e.clickable && u.$emit("click"))
    }, [
      t("div", ul, [
        u.$slots.icon ? (o(), n("span", ml, [
          ee(u.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        t("div", vl, [
          u.$slots.title ? (o(), n("div", fl, [
            ee(u.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          u.$slots.subtitle ? (o(), n("div", gl, [
            ee(u.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      u.$slots.details ? (o(), n("div", hl, [
        ee(u.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.actions ? (o(), n("div", pl, [
        ee(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ A(yl, [["__scopeId", "data-v-cc435e0e"]]), wl = { class: "loading-state" }, bl = { class: "loading-message" }, kl = /* @__PURE__ */ P({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (c, s) => (o(), n("div", wl, [
      s[0] || (s[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", bl, r(e.message), 1)
    ]));
  }
}), Ee = /* @__PURE__ */ A(kl, [["__scopeId", "data-v-ad8436c9"]]), $l = { class: "error-state" }, _l = { class: "error-message" }, Cl = /* @__PURE__ */ P({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (c, s) => (o(), n("div", $l, [
      s[2] || (s[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", _l, r(e.message), 1),
      e.retry ? (o(), y(T, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ A(Cl, [["__scopeId", "data-v-5397be48"]]), xl = /* @__PURE__ */ P({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: c }) {
    const s = c, { getWorkflows: i } = pe(), u = I([]), p = I(!1), m = I(null), g = I(""), f = I(!0), h = I(!1), k = I(!1), C = I(!1), L = I(null), M = V(
      () => u.value.filter((H) => H.status === "broken")
    ), B = V(
      () => u.value.filter((H) => H.status === "new")
    ), G = V(
      () => u.value.filter((H) => H.status === "modified")
    ), z = V(
      () => u.value.filter((H) => H.status === "synced")
    ), N = V(() => {
      if (!g.value.trim()) return u.value;
      const H = g.value.toLowerCase();
      return u.value.filter((E) => E.name.toLowerCase().includes(H));
    }), U = V(
      () => M.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), W = V(
      () => B.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), b = V(
      () => G.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), $ = V(
      () => z.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), w = V(
      () => h.value ? $.value : $.value.slice(0, 5)
    );
    async function x() {
      p.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (H) {
        m.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    function _(H) {
      L.value = H, k.value = !0;
    }
    function R(H) {
      L.value = H, C.value = !0;
    }
    function j() {
      alert("Bulk resolution not yet implemented");
    }
    function re() {
      s("refresh");
    }
    return ue(x), (H, E) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, { title: "WORKFLOWS" }, {
            actions: a(() => [
              M.value.length > 0 ? (o(), y(T, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: a(() => [...E[7] || (E[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: g.value,
            "onUpdate:modelValue": E[0] || (E[0] = (J) => g.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          p.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), y(Le, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            U.value.length ? (o(), y(ie, {
              key: 0,
              title: "BROKEN",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(U.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...E[8] || (E[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(r(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    v(" Missing: " + r(J.missing_nodes) + " nodes, " + r(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => R(J.name)
                    }, {
                      default: a(() => [...E[9] || (E[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => _(J.name)
                    }, {
                      default: a(() => [...E[10] || (E[10] = [
                        v(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            W.value.length ? (o(), y(ie, {
              key: 1,
              title: "NEW",
              count: W.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(W.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...E[11] || (E[11] = [
                    v("●", -1)
                  ])]),
                  title: a(() => [
                    v(r(J.name), 1)
                  ]),
                  subtitle: a(() => [...E[12] || (E[12] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => _(J.name)
                    }, {
                      default: a(() => [...E[13] || (E[13] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? (o(), y(ie, {
              key: 2,
              title: "MODIFIED",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(b.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...E[14] || (E[14] = [
                    v("⚡", -1)
                  ])]),
                  title: a(() => [
                    v(r(J.name), 1)
                  ]),
                  subtitle: a(() => [...E[15] || (E[15] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => _(J.name)
                    }, {
                      default: a(() => [...E[16] || (E[16] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (o(), y(ie, {
              key: 3,
              title: "SYNCED",
              count: $.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: E[2] || (E[2] = (J) => f.value = J)
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(w.value, (J) => (o(), y(de, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...E[17] || (E[17] = [
                    v("✓", -1)
                  ])]),
                  title: a(() => [
                    v(r(J.name), 1)
                  ]),
                  subtitle: a(() => [...E[18] || (E[18] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => _(J.name)
                    }, {
                      default: a(() => [...E[19] || (E[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !h.value && $.value.length > 5 ? (o(), y(T, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: E[1] || (E[1] = (J) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    v(" View all " + r($.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            N.value.length ? d("", !0) : (o(), y(be, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && L.value ? (o(), y(Sn, {
        key: 0,
        "workflow-name": L.value,
        onClose: E[3] || (E[3] = (J) => k.value = !1),
        onResolve: E[4] || (E[4] = (J) => R(L.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      C.value && L.value ? (o(), y(tl, {
        key: 1,
        "workflow-name": L.value,
        onClose: E[5] || (E[5] = (J) => C.value = !1),
        onInstall: re,
        onRefresh: E[6] || (E[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Sl = /* @__PURE__ */ A(xl, [["__scopeId", "data-v-cf78a4ac"]]), Il = /* @__PURE__ */ P({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: q(["summary-bar", e.variant])
    }, [
      ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ A(Il, [["__scopeId", "data-v-ccb7816e"]]), El = /* @__PURE__ */ P({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: c }) {
    const s = c, { getEnvironmentModels: i, getStatus: u } = pe(), p = I([]), m = I([]), g = I("production"), f = I(!1), h = I(null), k = I(""), C = I(!1);
    function L() {
      C.value = !1, s("navigate", "model-index");
    }
    const M = V(
      () => p.value.reduce((_, R) => _ + (R.size || 0), 0)
    ), B = V(() => {
      if (!k.value.trim()) return p.value;
      const _ = k.value.toLowerCase();
      return p.value.filter((R) => R.filename.toLowerCase().includes(_));
    }), G = V(() => {
      if (!k.value.trim()) return m.value;
      const _ = k.value.toLowerCase();
      return m.value.filter((R) => R.filename.toLowerCase().includes(_));
    }), z = V(
      () => B.value.filter((_) => _.type === "checkpoints")
    ), N = V(
      () => B.value.filter((_) => _.type === "loras")
    ), U = V(
      () => B.value.filter((_) => _.type !== "checkpoints" && _.type !== "loras")
    );
    function W(_) {
      if (!_) return "Unknown";
      const R = _ / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function b(_) {
      s("navigate", "model-index");
    }
    function $(_) {
      s("navigate", "model-index");
    }
    function w(_) {
      alert(`Download functionality not yet implemented for ${_}`);
    }
    async function x() {
      f.value = !0, h.value = null;
      try {
        const _ = await i();
        p.value = _, m.value = [];
        const R = await u();
        g.value = R.environment || "production";
      } catch (_) {
        h.value = _ instanceof Error ? _.message : "Failed to load models";
      } finally {
        f.value = !1;
      }
    }
    return ue(x), (_, R) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (j) => C.value = !0)
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: k.value,
            "onUpdate:modelValue": R[1] || (R[1] = (j) => k.value = j),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          f.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading environment models..."
          })) : h.value ? (o(), y(Le, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            p.value.length ? (o(), y(Re, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + r(p.value.length) + " models • " + r(W(M.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            z.value.length ? (o(), y(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(z.value, (j) => (o(), y(de, {
                  key: j.hash || j.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[3] || (R[3] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(j.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(r(W(j.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Used by:",
                      value: (j.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Q, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => b(j.hash)
                    }, {
                      default: a(() => [...R[4] || (R[4] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            N.value.length ? (o(), y(ie, {
              key: 2,
              title: "LORAS",
              count: N.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(N.value, (j) => (o(), y(de, {
                  key: j.hash || j.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[5] || (R[5] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(j.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(r(W(j.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Used by:",
                      value: (j.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Q, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => b(j.hash)
                    }, {
                      default: a(() => [...R[6] || (R[6] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            U.value.length ? (o(), y(ie, {
              key: 3,
              title: "OTHER",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(U.value, (j) => (o(), y(de, {
                  key: j.hash || j.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[7] || (R[7] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(j.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(r(W(j.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Type:",
                      value: j.type
                    }, null, 8, ["value"]),
                    l(Q, {
                      label: "Used by:",
                      value: (j.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => b(j.hash)
                    }, {
                      default: a(() => [...R[8] || (R[8] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            G.value.length ? (o(), y(ie, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(G.value, (j) => (o(), y(de, {
                  key: j.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...R[9] || (R[9] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(r(j.filename), 1)
                  ]),
                  subtitle: a(() => [...R[10] || (R[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var re;
                    return [
                      l(Q, {
                        label: "Required by:",
                        value: ((re = j.workflow_names) == null ? void 0 : re.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: (re) => w(j.filename)
                    }, {
                      default: a(() => [...R[11] || (R[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => $(j.filename)
                    }, {
                      default: a(() => [...R[12] || (R[12] = [
                        v(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !B.value.length && !G.value.length ? (o(), y(be, {
              key: 5,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ie, {
        show: C.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (j) => C.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            R[13] || (R[13] = v(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + r(g.value) + '"', 1),
            R[14] || (R[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: L
          }, {
            default: a(() => [...R[15] || (R[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ll = /* @__PURE__ */ A(El, [["__scopeId", "data-v-72675609"]]), Nl = /* @__PURE__ */ P({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: c } = pe(), s = I([]), i = I(!1), u = I(null), p = I(""), m = I(!1), g = V(
      () => s.value.reduce((w, x) => w + (x.size_mb || x.size || 0), 0)
    ), f = V(() => {
      const w = /* @__PURE__ */ new Set();
      return s.value.forEach((x) => {
        x.used_in_environments && x.used_in_environments.length > 0 && x.used_in_environments.forEach((_) => w.add(_.env_name));
      }), w.size;
    }), h = V(() => {
      if (!p.value.trim()) return s.value;
      const w = p.value.toLowerCase();
      return s.value.filter((x) => {
        const _ = x, R = x.sha256 || _.sha256_hash || "";
        return x.filename.toLowerCase().includes(w) || R.toLowerCase().includes(w);
      });
    }), k = V(
      () => h.value.filter((w) => w.type === "checkpoints")
    ), C = V(
      () => h.value.filter((w) => w.type === "loras")
    ), L = V(
      () => h.value.filter((w) => w.type !== "checkpoints" && w.type !== "loras")
    );
    function M(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function B(w) {
      const x = w, _ = w.used_in_workflows || x.used_by || [];
      return !_ || _.length === 0 ? "Not used" : `${_.length} workflow(s)`;
    }
    function G(w) {
      navigator.clipboard.writeText(w), alert("Hash copied to clipboard");
    }
    function z(w) {
      prompt("Enter model source URL:", w.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function N(w) {
      const x = w, _ = w.used_in_workflows || x.used_by || [], R = _ && _.length > 0 ? `

⚠ WARNING: This model is used by ${_.length} workflow(s):
${_.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${w.filename}?${R}

This will free ${M(x.size_mb || w.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function U() {
      alert("Scan for models not yet implemented");
    }
    function W() {
      alert("Change directory not yet implemented");
    }
    function b() {
      alert("Download new model not yet implemented");
    }
    async function $() {
      i.value = !0, u.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", k.value), console.log("Filtered loras:", C.value), console.log("Filtered other:", L.value);
      } catch (w) {
        u.value = w instanceof Error ? w.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ue($), (w, x) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: x[0] || (x[0] = (_) => m.value = !0)
          }, {
            actions: a(() => [
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...x[3] || (x[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: a(() => [...x[4] || (x[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: a(() => [...x[5] || (x[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: p.value,
            "onUpdate:modelValue": x[1] || (x[1] = (_) => p.value = _),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading workspace models..."
          })) : u.value ? (o(), y(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length ? (o(), y(Re, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + r(s.value.length) + " models • " + r(M(g.value)) + " • Used in " + r(f.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            k.value.length ? (o(), y(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(k.value, (_) => (o(), y(de, {
                  key: _.sha256 || _.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[6] || (x[6] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(_.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(r(M(_.size_mb || _.size)), 1)
                  ]),
                  details: a(() => {
                    var R, j;
                    return [
                      _.sha256 || _.sha256_hash ? (o(), y(Q, {
                        key: 0,
                        label: "SHA256:",
                        value: (_.sha256 || _.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Q, {
                        label: "Used in:",
                        value: B(_)
                      }, null, 8, ["value"]),
                      _.source_url || (R = _.sources) != null && R[0] ? (o(), y(Q, {
                        key: 1,
                        label: "Source URL:",
                        value: _.source_url || ((j = _.sources) == null ? void 0 : j[0])
                      }, null, 8, ["value"])) : (o(), y(Q, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...x[7] || (x[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => z(_)
                    }, {
                      default: a(() => [...x[8] || (x[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _.sha256 || _.sha256_hash ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => G(_.sha256 || _.sha256_hash)
                    }, {
                      default: a(() => [...x[9] || (x[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => N(_)
                    }, {
                      default: a(() => [...x[10] || (x[10] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? (o(), y(ie, {
              key: 2,
              title: "LORAS",
              count: C.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(C.value, (_) => (o(), y(de, {
                  key: _.sha256 || _.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[11] || (x[11] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(_.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(r(M(_.size_mb || _.size)), 1)
                  ]),
                  details: a(() => {
                    var R, j;
                    return [
                      _.sha256 || _.sha256_hash ? (o(), y(Q, {
                        key: 0,
                        label: "SHA256:",
                        value: (_.sha256 || _.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Q, {
                        label: "Used in:",
                        value: B(_)
                      }, null, 8, ["value"]),
                      _.source_url || (R = _.sources) != null && R[0] ? (o(), y(Q, {
                        key: 1,
                        label: "Source URL:",
                        value: _.source_url || ((j = _.sources) == null ? void 0 : j[0])
                      }, null, 8, ["value"])) : (o(), y(Q, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...x[12] || (x[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => z(_)
                    }, {
                      default: a(() => [...x[13] || (x[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _.sha256 || _.sha256_hash ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => G(_.sha256 || _.sha256_hash)
                    }, {
                      default: a(() => [...x[14] || (x[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => N(_)
                    }, {
                      default: a(() => [...x[15] || (x[15] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            L.value.length ? (o(), y(ie, {
              key: 3,
              title: "OTHER",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(L.value, (_) => (o(), y(de, {
                  key: _.sha256 || _.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...x[16] || (x[16] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(_.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(r(M(_.size_mb || _.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Type:",
                      value: _.type
                    }, null, 8, ["value"]),
                    _.sha256 || _.sha256_hash ? (o(), y(Q, {
                      key: 0,
                      label: "SHA256:",
                      value: (_.sha256 || _.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    l(Q, {
                      label: "Used in:",
                      value: B(_)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => z(_)
                    }, {
                      default: a(() => [...x[17] || (x[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _.sha256 || _.sha256_hash ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => G(_.sha256 || _.sha256_hash)
                    }, {
                      default: a(() => [...x[18] || (x[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => N(_)
                    }, {
                      default: a(() => [...x[19] || (x[19] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            h.value.length ? d("", !0) : (o(), y(be, {
              key: 4,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Ie, {
        show: m.value,
        title: "About Workspace Model Index",
        onClose: x[2] || (x[2] = (_) => m.value = !1)
      }, {
        content: a(() => [...x[20] || (x[20] = [
          t("p", null, [
            v(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ml = /* @__PURE__ */ A(Nl, [["__scopeId", "data-v-5a24af01"]]), zl = { key: 0 }, Rl = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Dl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Tl = /* @__PURE__ */ P({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: c, installNode: s, updateNode: i, uninstallNode: u } = pe(), p = I({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), m = I(!1), g = I(null), f = I(""), h = I(!1), k = V(() => {
      if (!f.value.trim()) return p.value.nodes;
      const b = f.value.toLowerCase();
      return p.value.nodes.filter(
        ($) => {
          var w, x;
          return $.name.toLowerCase().includes(b) || ((w = $.description) == null ? void 0 : w.toLowerCase().includes(b)) || ((x = $.repository) == null ? void 0 : x.toLowerCase().includes(b));
        }
      );
    }), C = V(
      () => k.value.filter((b) => b.installed)
    ), L = V(
      () => k.value.filter((b) => !b.installed)
    );
    function M(b) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[b] || b;
    }
    function B(b) {
      return !b.used_in_workflows || b.used_in_workflows.length === 0 ? "Not used in any workflows" : b.used_in_workflows.length === 1 ? b.used_in_workflows[0] : `${b.used_in_workflows.length} workflows`;
    }
    function G(b) {
      window.open(b, "_blank");
    }
    async function z(b) {
      if (confirm(`Install node "${b}"?

This will download and install the node from its repository.`))
        try {
          m.value = !0;
          const $ = await s(b);
          $.status === "success" ? (alert(`Node "${b}" installed successfully!`), await W()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function N(b) {
      if (confirm(`Check for updates for "${b}"?`))
        try {
          m.value = !0;
          const $ = await i(b);
          $.status === "success" ? (alert(`Node "${b}" is up to date or has been updated!`), await W()) : alert(`Update check failed: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error checking for updates: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function U(b) {
      if (confirm(`Uninstall node "${b}"?

This will remove the node from this environment.`))
        try {
          m.value = !0;
          const $ = await u(b);
          $.status === "success" ? (alert(`Node "${b}" uninstalled successfully!`), await W()) : alert(`Failed to uninstall node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error uninstalling node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function W() {
      m.value = !0, g.value = null;
      try {
        p.value = await c();
      } catch (b) {
        g.value = b instanceof Error ? b.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return ue(W), (b, $) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (w) => h.value = !0)
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: f.value,
            "onUpdate:modelValue": $[1] || ($[1] = (w) => f.value = w),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), y(Le, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            p.value.total_count ? (o(), y(Re, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + r(p.value.total_count) + " nodes • " + r(p.value.installed_count) + " installed • " + r(p.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            C.value.length ? (o(), y(ie, {
              key: 1,
              title: "INSTALLED",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(C.value, (w) => (o(), y(de, {
                  key: w.name,
                  status: "synced"
                }, {
                  icon: a(() => [...$[4] || ($[4] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(r(w.name), 1)
                  ]),
                  subtitle: a(() => [
                    w.version ? (o(), n("span", zl, "v" + r(w.version), 1)) : (o(), n("span", Rl, "version unknown")),
                    w.source ? (o(), n("span", Dl, " • " + r(M(w.source)), 1)) : d("", !0)
                  ]),
                  details: a(() => [
                    w.description ? (o(), y(Q, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : d("", !0),
                    w.repository ? (o(), y(Q, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Q, {
                      label: "Used by:",
                      value: B(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.repository ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => G(w.repository)
                    }, {
                      default: a(() => [...$[5] || ($[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w.source === "registry" ? (o(), y(T, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => N(w.name)
                    }, {
                      default: a(() => [...$[6] || ($[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w.source !== "unknown" ? (o(), y(T, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (x) => U(w.name)
                    }, {
                      default: a(() => [...$[7] || ($[7] = [
                        v(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            L.value.length ? (o(), y(ie, {
              key: 2,
              title: "MISSING",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(L.value, (w) => (o(), y(de, {
                  key: w.name,
                  status: "missing"
                }, {
                  icon: a(() => [...$[8] || ($[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(r(w.name), 1)
                  ]),
                  subtitle: a(() => [...$[9] || ($[9] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    w.description ? (o(), y(Q, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : d("", !0),
                    w.repository ? (o(), y(Q, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Q, {
                      label: "Required by:",
                      value: B(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.download_url ? (o(), y(T, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => z(w.name)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w.repository ? (o(), y(T, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => G(w.repository)
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !C.value.length && !L.value.length ? (o(), y(be, {
              key: 3,
              icon: "📭",
              message: f.value ? `No nodes match '${f.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ie, {
        show: h.value,
        title: "About Git-Tracked Nodes",
        onClose: $[3] || ($[3] = (w) => h.value = !1)
      }, {
        content: a(() => [...$[12] || ($[12] = [
          t("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: $[2] || ($[2] = (w) => h.value = !1)
          }, {
            default: a(() => [...$[13] || ($[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bl = /* @__PURE__ */ A(Tl, [["__scopeId", "data-v-c480e2c1"]]), Vl = { class: "remote-url-display" }, Ul = ["title"], Ol = ["title"], Fl = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pl = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Al = /* @__PURE__ */ P({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const c = e, s = I(!1), i = V(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const p = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${p}...${m}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(c.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, m) => (o(), n("div", Vl, [
      t("span", {
        class: "url-text",
        title: e.url
      }, r(i.value), 9, Ul),
      t("button", {
        class: q(["copy-btn", { copied: s.value }]),
        onClick: u,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Pl, [...m[1] || (m[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Fl, [...m[0] || (m[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Ol)
    ]));
  }
}), pt = /* @__PURE__ */ A(Al, [["__scopeId", "data-v-7768a58d"]]), Wl = { class: "remote-title" }, Gl = {
  key: 0,
  class: "default-badge"
}, Hl = {
  key: 1,
  class: "sync-badge"
}, jl = {
  key: 0,
  class: "ahead"
}, ql = {
  key: 1,
  class: "behind"
}, Kl = {
  key: 0,
  class: "tracking-info"
}, Jl = /* @__PURE__ */ P({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: c }) {
    const s = e, i = V(() => s.fetchingRemote === s.remote.name), u = V(() => s.remote.is_default), p = V(() => !!s.trackingBranch);
    function m(g) {
      const f = new Date(g), k = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), C = Math.floor(k / 6e4);
      if (C < 1) return "Just now";
      if (C < 60) return `${C}m ago`;
      const L = Math.floor(C / 60);
      if (L < 24) return `${L}h ago`;
      const M = Math.floor(L / 24);
      return M < 7 ? `${M}d ago` : f.toLocaleDateString();
    }
    return (g, f) => (o(), y(de, {
      status: u.value ? "synced" : void 0
    }, {
      icon: a(() => [
        v(r(u.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        t("div", Wl, [
          t("span", null, r(e.remote.name), 1),
          u.value ? (o(), n("span", Gl, "DEFAULT")) : d("", !0),
          e.syncStatus ? (o(), n("span", Hl, [
            e.syncStatus.ahead > 0 ? (o(), n("span", jl, "↑" + r(e.syncStatus.ahead), 1)) : d("", !0),
            e.syncStatus.behind > 0 ? (o(), n("span", ql, "↓" + r(e.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: a(() => [
        p.value ? (o(), n("span", Kl, " Tracking: " + r(e.trackingBranch), 1)) : d("", !0)
      ]),
      details: a(() => {
        var h;
        return [
          l(Q, { label: "Fetch:" }, {
            default: a(() => [
              l(pt, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (o(), y(Q, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              l(pt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (h = e.syncStatus) != null && h.last_fetch ? (o(), y(Q, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              t("span", null, r(m(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: a(() => [
        l(T, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: f[0] || (f[0] = (h) => g.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...f[3] || (f[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        l(T, {
          variant: "secondary",
          size: "xs",
          onClick: f[1] || (f[1] = (h) => g.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...f[4] || (f[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        u.value ? d("", !0) : (o(), y(T, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[2] || (f[2] = (h) => g.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...f[5] || (f[5] = [
            v(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Yl = /* @__PURE__ */ A(Jl, [["__scopeId", "data-v-17362e45"]]), Xl = ["for"], Ql = {
  key: 0,
  class: "base-form-field-required"
}, Zl = { class: "base-form-field-input" }, ei = {
  key: 1,
  class: "base-form-field-error"
}, ti = {
  key: 2,
  class: "base-form-field-hint"
}, oi = /* @__PURE__ */ P({
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
    const c = e, s = V(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, u) => (o(), n("div", {
      class: q(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        v(r(e.label) + " ", 1),
        e.required ? (o(), n("span", Ql, "*")) : d("", !0)
      ], 8, Xl)) : d("", !0),
      t("div", Zl, [
        ee(i.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (o(), n("span", ei, r(e.error), 1)) : e.hint ? (o(), n("span", ti, r(e.hint), 1)) : d("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ A(oi, [["__scopeId", "data-v-9a1cf296"]]), si = ["type", "value", "placeholder", "disabled"], ai = {
  key: 0,
  class: "base-input-error"
}, ni = /* @__PURE__ */ P({
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
    return (c, s) => (o(), n("div", {
      class: q(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: q(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Se((i) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Se((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, si),
      e.error ? (o(), n("span", ai, r(e.error), 1)) : d("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ A(ni, [["__scopeId", "data-v-9ba02cdc"]]), li = { class: "remote-form" }, ii = { class: "form-header" }, ri = { class: "form-body" }, ci = {
  key: 0,
  class: "form-error"
}, di = { class: "form-actions" }, ui = /* @__PURE__ */ P({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: c }) {
    const s = e, i = c, u = I({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), p = I(!1), m = I(null);
    wt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      u.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const g = V(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function f() {
      if (!(!g.value || p.value)) {
        m.value = null, p.value = !0;
        try {
          i("submit", u.value);
        } catch (h) {
          m.value = h instanceof Error ? h.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (h, k) => (o(), n("div", li, [
      t("div", ii, [
        l(we, null, {
          default: a(() => [
            v(r(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", ri, [
        l(lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            l(it, {
              modelValue: u.value.name,
              "onUpdate:modelValue": k[0] || (k[0] = (C) => u.value.name = C),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            l(it, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": k[1] || (k[1] = (C) => u.value.fetchUrl = C),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(lt, { label: "Push URL (optional)" }, {
          default: a(() => [
            l(it, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": k[2] || (k[2] = (C) => u.value.pushUrl = C),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), n("div", ci, r(m.value), 1)) : d("", !0)
      ]),
      t("div", di, [
        l(T, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: p.value,
          onClick: f
        }, {
          default: a(() => [
            v(r(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        l(T, {
          variant: "ghost",
          size: "md",
          onClick: k[3] || (k[3] = (C) => h.$emit("cancel"))
        }, {
          default: a(() => [...k[4] || (k[4] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), mi = /* @__PURE__ */ A(ui, [["__scopeId", "data-v-56021b18"]]), vi = { key: 0 }, fi = /* @__PURE__ */ P({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: c,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: u,
      fetchRemote: p,
      getRemoteSyncStatus: m
    } = pe(), g = I([]), f = I(null), h = I({}), k = I(!1), C = I(null), L = I(""), M = I(!1), B = I(null), G = I(!1), z = I("add"), N = I({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = V(() => {
      if (!L.value.trim()) return g.value;
      const H = L.value.toLowerCase();
      return g.value.filter(
        (E) => E.name.toLowerCase().includes(H) || E.fetch_url.toLowerCase().includes(H) || E.push_url.toLowerCase().includes(H)
      );
    });
    function W(H) {
      var E;
      return ((E = f.value) == null ? void 0 : E.remote) === H;
    }
    async function b() {
      k.value = !0, C.value = null;
      try {
        const H = await c();
        g.value = H.remotes, f.value = H.current_branch_tracking || null, await Promise.all(
          H.remotes.map(async (E) => {
            const J = await m(E.name);
            J && (h.value[E.name] = J);
          })
        );
      } catch (H) {
        C.value = H instanceof Error ? H.message : "Failed to load remotes";
      } finally {
        k.value = !1;
      }
    }
    function $() {
      z.value = "add", N.value = { name: "", fetchUrl: "", pushUrl: "" }, G.value = !0;
    }
    function w(H) {
      const E = g.value.find((J) => J.name === H);
      E && (z.value = "edit", N.value = {
        name: E.name,
        fetchUrl: E.fetch_url,
        pushUrl: E.push_url
      }, G.value = !0);
    }
    async function x(H) {
      try {
        z.value === "add" ? await s(H.name, H.fetchUrl) : await u(H.name, H.fetchUrl, H.pushUrl || void 0), G.value = !1, await b();
      } catch (E) {
        C.value = E instanceof Error ? E.message : "Operation failed";
      }
    }
    function _() {
      G.value = !1, N.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function R(H) {
      B.value = H;
      try {
        await p(H);
        const E = await m(H);
        E && (h.value[H] = E);
      } catch (E) {
        C.value = E instanceof Error ? E.message : "Fetch failed";
      } finally {
        B.value = null;
      }
    }
    async function j(H) {
      if (confirm(`Remove remote "${H}"?`))
        try {
          await i(H), await b();
        } catch (E) {
          C.value = E instanceof Error ? E.message : "Failed to remove remote";
        }
    }
    function re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(b), (H, E) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (J) => M.value = !0)
          }, {
            actions: a(() => [
              G.value ? d("", !0) : (o(), y(T, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...E[3] || (E[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          G.value ? d("", !0) : (o(), y(Ge, {
            key: 0,
            modelValue: L.value,
            "onUpdate:modelValue": E[1] || (E[1] = (J) => L.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          k.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (o(), y(Le, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            G.value ? (o(), y(mi, {
              key: 0,
              mode: z.value,
              "remote-name": N.value.name,
              "fetch-url": N.value.fetchUrl,
              "push-url": N.value.pushUrl,
              onSubmit: x,
              onCancel: _
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            g.value.length && !G.value ? (o(), y(Re, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + r(g.value.length) + " remote" + r(g.value.length !== 1 ? "s" : "") + " ", 1),
                f.value ? (o(), n("span", vi, " • Tracking: " + r(f.value.remote) + "/" + r(f.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            U.value.length && !G.value ? (o(), y(ie, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(F, null, K(U.value, (J) => {
                  var te;
                  return o(), y(Yl, {
                    key: J.name,
                    remote: J,
                    "sync-status": h.value[J.name],
                    "tracking-branch": W(J.name) ? (te = f.value) == null ? void 0 : te.branch : void 0,
                    "fetching-remote": B.value,
                    onFetch: R,
                    onEdit: w,
                    onRemove: j
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !U.value.length && !G.value ? (o(), y(be, {
              key: 3,
              icon: "🌐",
              message: L.value ? `No remotes match '${L.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "primary",
                  onClick: $
                }, {
                  default: a(() => [...E[4] || (E[4] = [
                    v(" Add Your First Remote ", -1)
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
      l(Ie, {
        show: M.value,
        title: "About Git Remotes",
        onClose: E[2] || (E[2] = (J) => M.value = !1)
      }, {
        content: a(() => [...E[5] || (E[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            v(" The "),
            t("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "link",
            onClick: re
          }, {
            default: a(() => [...E[6] || (E[6] = [
              v(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), gi = /* @__PURE__ */ A(fi, [["__scopeId", "data-v-a75719bb"]]), hi = { class: "setting-info" }, pi = { class: "setting-label" }, yi = {
  key: 0,
  class: "required-marker"
}, wi = {
  key: 0,
  class: "setting-description"
}, bi = { class: "setting-control" }, ki = /* @__PURE__ */ P({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (c, s) => (o(), n("div", {
      class: q(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", hi, [
        t("div", pi, [
          v(r(e.label) + " ", 1),
          e.required ? (o(), n("span", yi, "*")) : d("", !0)
        ]),
        e.description ? (o(), n("div", wi, r(e.description), 1)) : d("", !0)
      ]),
      t("div", bi, [
        ee(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ne = /* @__PURE__ */ A(ki, [["__scopeId", "data-v-cb5d236c"]]), $i = { class: "toggle" }, _i = ["checked", "disabled"], Ci = /* @__PURE__ */ P({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (c, s) => (o(), n("label", $i, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, _i),
      s[1] || (s[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ve = /* @__PURE__ */ A(Ci, [["__scopeId", "data-v-71c0f550"]]), xi = { class: "settings-section" }, Si = { class: "settings-section" }, Ii = { class: "settings-section" }, Ei = { class: "settings-section" }, Li = { class: "settings-section" }, Ni = { class: "settings-section" }, Mi = /* @__PURE__ */ P({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const c = I(!1), s = I(null), i = I(null), u = I({
      git: {
        userName: "",
        userEmail: "",
        defaultBranch: "main",
        autoCommit: !1
      },
      paths: {
        workspaceRoot: "/path/to/workspace",
        environmentsDir: "environments",
        modelsDir: "models"
      },
      modelIndex: {
        autoIndex: !0,
        indexOnStartup: !0,
        scanInterval: 30,
        deepScan: !1
      },
      environment: {
        defaultComfyUIVersion: "latest",
        pythonVersion: "3.11",
        autoCreateVenv: !0,
        autoInstallDeps: !0
      },
      ui: {
        theme: "comfy",
        compactMode: !1,
        showFileExtensions: !0,
        confirmDestructive: !0
      },
      advanced: {
        debugMode: !1,
        maxHistoryItems: 50,
        cacheDuration: 300
      }
    }), p = I(null), m = V(() => p.value ? JSON.stringify(u.value) !== JSON.stringify(p.value) : !1), g = [
      { label: "15 minutes", value: 15 },
      { label: "30 minutes", value: 30 },
      { label: "1 hour", value: 60 },
      { label: "2 hours", value: 120 },
      { label: "Manual only", value: 0 }
    ], f = [
      { label: "Latest", value: "latest" },
      { label: "Stable", value: "stable" },
      { label: "v0.2.0", value: "v0.2.0" },
      { label: "v0.1.0", value: "v0.1.0" }
    ], h = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], k = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], C = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], L = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function M() {
      c.value = !0, s.value = null;
      try {
        await new Promise((z) => setTimeout(z, 500)), p.value = JSON.parse(JSON.stringify(u.value));
      } catch (z) {
        s.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function B() {
      i.value = null;
      try {
        await new Promise((z) => setTimeout(z, 300)), p.value = JSON.parse(JSON.stringify(u.value)), i.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          i.value = null;
        }, 3e3);
      } catch (z) {
        i.value = {
          type: "error",
          message: z instanceof Error ? z.message : "Failed to save settings"
        };
      }
    }
    function G() {
      p.value && (u.value = JSON.parse(JSON.stringify(p.value)), i.value = null);
    }
    return ue(M), (z, N) => (o(), y(ge, null, {
      header: a(() => [
        l(he, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            l(T, {
              variant: "primary",
              size: "sm",
              disabled: !m.value,
              onClick: B
            }, {
              default: a(() => [...N[19] || (N[19] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m.value ? (o(), y(T, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: a(() => [...N[20] || (N[20] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        c.value ? (o(), y(Ee, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (o(), y(Le, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: M
        }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
          l(ie, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              t("div", xi, [
                l(ne, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(Ae, {
                      modelValue: u.value.git.userName,
                      "onUpdate:modelValue": N[0] || (N[0] = (U) => u.value.git.userName = U),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(Ae, {
                      modelValue: u.value.git.userEmail,
                      "onUpdate:modelValue": N[1] || (N[1] = (U) => u.value.git.userEmail = U),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    l(Ae, {
                      modelValue: u.value.git.defaultBranch,
                      "onUpdate:modelValue": N[2] || (N[2] = (U) => u.value.git.defaultBranch = U),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.git.autoCommit,
                      "onUpdate:modelValue": N[3] || (N[3] = (U) => u.value.git.autoCommit = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              t("div", Si, [
                l(ne, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    l(Pe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        v(r(u.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    l(Pe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        v(r(u.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    l(Pe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        v(r(u.value.paths.modelsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "MODEL INDEX" }, {
            default: a(() => [
              t("div", Ii, [
                l(ne, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": N[4] || (N[4] = (U) => u.value.modelIndex.autoIndex = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": N[5] || (N[5] = (U) => u.value.modelIndex.indexOnStartup = U),
                      disabled: !u.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ne, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": N[6] || (N[6] = (U) => u.value.modelIndex.scanInterval = U),
                      options: g,
                      disabled: !u.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ne, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.deepScan,
                      "onUpdate:modelValue": N[7] || (N[7] = (U) => u.value.modelIndex.deepScan = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              t("div", Ei, [
                l(ne, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": N[8] || (N[8] = (U) => u.value.environment.defaultComfyUIVersion = U),
                      options: f,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.environment.pythonVersion,
                      "onUpdate:modelValue": N[9] || (N[9] = (U) => u.value.environment.pythonVersion = U),
                      options: h,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": N[10] || (N[10] = (U) => u.value.environment.autoCreateVenv = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": N[11] || (N[11] = (U) => u.value.environment.autoInstallDeps = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "UI PREFERENCES" }, {
            default: a(() => [
              t("div", Li, [
                l(ne, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.ui.theme,
                      "onUpdate:modelValue": N[12] || (N[12] = (U) => u.value.ui.theme = U),
                      options: k,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.ui.compactMode,
                      "onUpdate:modelValue": N[13] || (N[13] = (U) => u.value.ui.compactMode = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.ui.showFileExtensions,
                      "onUpdate:modelValue": N[14] || (N[14] = (U) => u.value.ui.showFileExtensions = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.ui.confirmDestructive,
                      "onUpdate:modelValue": N[15] || (N[15] = (U) => u.value.ui.confirmDestructive = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "ADVANCED" }, {
            default: a(() => [
              t("div", Ni, [
                l(ne, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.advanced.debugMode,
                      "onUpdate:modelValue": N[16] || (N[16] = (U) => u.value.advanced.debugMode = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": N[17] || (N[17] = (U) => u.value.advanced.maxHistoryItems = U),
                      options: C,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.advanced.cacheDuration,
                      "onUpdate:modelValue": N[18] || (N[18] = (U) => u.value.advanced.cacheDuration = U),
                      options: L,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i.value ? (o(), y(Re, {
            key: 0,
            variant: (i.value.type === "success", "compact")
          }, {
            default: a(() => [
              t("span", {
                style: Je({ color: i.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, r(i.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), zi = /* @__PURE__ */ A(Mi, [["__scopeId", "data-v-74f65bd5"]]), Ri = { class: "log-filter-bar" }, Di = { class: "log-filter-bar__options" }, Ti = ["onClick"], Bi = /* @__PURE__ */ P({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: c }) {
    const s = e, i = c, u = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function p(g) {
      return s.activeLevels.includes(g);
    }
    function m(g) {
      i("toggle", g);
    }
    return (g, f) => (o(), n("div", Ri, [
      f[1] || (f[1] = t("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      t("div", Di, [
        (o(), n(F, null, K(u, (h) => t("button", {
          key: h,
          class: q(["filter-option", { active: p(h) }]),
          onClick: (k) => m(h)
        }, r(h), 11, Ti)), 64)),
        t("button", {
          class: "filter-option filter-option--clear",
          onClick: f[0] || (f[0] = (h) => g.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), xt = /* @__PURE__ */ A(Bi, [["__scopeId", "data-v-9052edf8"]]), Vi = { class: "log-list" }, Ui = /* @__PURE__ */ P({
  __name: "LogList",
  setup(e) {
    return (c, s) => (o(), n("div", Vi, [
      ee(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), St = /* @__PURE__ */ A(Ui, [["__scopeId", "data-v-0061c330"]]), Oi = { class: "log-level__icon" }, Fi = { class: "log-level__text" }, Pi = /* @__PURE__ */ P({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const c = e, s = V(() => `log-level--${c.level.toLowerCase()}`), i = V(() => {
      switch (c.level) {
        case "ERROR":
          return "✕";
        case "WARNING":
          return "!";
        case "INFO":
          return "→";
        case "DEBUG":
          return "·";
        default:
          return "·";
      }
    });
    return (u, p) => (o(), n("span", {
      class: q(["log-level", s.value])
    }, [
      t("span", Oi, r(i.value), 1),
      t("span", Fi, r(e.level), 1)
    ], 2));
  }
}), Ai = /* @__PURE__ */ A(Pi, [["__scopeId", "data-v-8547c115"]]), Wi = { class: "log-item__header" }, Gi = { class: "log-item__timestamp" }, Hi = {
  key: 0,
  class: "log-item__context"
}, ji = { class: "log-item__message" }, qi = /* @__PURE__ */ P({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: c }) {
    const s = e, i = V(() => `log-item--${s.level.toLowerCase()}`);
    return (u, p) => (o(), n("div", {
      class: q(["log-item", i.value, { clickable: e.clickable }]),
      onClick: p[0] || (p[0] = (m) => e.clickable && u.$emit("click"))
    }, [
      t("div", Wi, [
        l(Ai, { level: e.level }, null, 8, ["level"]),
        t("span", Gi, r(e.timestamp), 1),
        e.context ? (o(), n("span", Hi, r(e.context), 1)) : d("", !0)
      ]),
      t("div", ji, r(e.message), 1)
    ], 2));
  }
}), It = /* @__PURE__ */ A(qi, [["__scopeId", "data-v-adb291b1"]]), Ki = {
  key: 2,
  class: "load-more"
}, Ji = /* @__PURE__ */ P({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: c } = pe(), s = I([]), i = I(!1), u = I(null), p = I(!1), m = I(["ERROR", "WARNING", "INFO", "DEBUG"]), g = I(100), f = V(() => s.value.filter((b) => b.level === "ERROR").length), h = V(() => s.value.filter((b) => b.level === "WARNING").length), k = V(() => s.value.filter((b) => b.level === "INFO").length), C = V(() => s.value.filter((b) => b.level === "DEBUG").length), L = V(() => s.value.filter((b) => m.value.includes(b.level))), M = V(() => L.value.slice(0, g.value)), B = V(() => L.value.length > g.value);
    function G(b) {
      const $ = m.value.indexOf(b);
      $ >= 0 ? m.value.splice($, 1) : m.value.push(b);
    }
    function z() {
      m.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function N() {
      g.value += 100;
    }
    function U(b) {
      try {
        return new Date(b).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return b;
      }
    }
    async function W() {
      i.value = !0, u.value = null;
      try {
        s.value = await c(void 0, 500);
      } catch (b) {
        u.value = b instanceof Error ? b.message : "Failed to load workspace logs";
      } finally {
        i.value = !1;
      }
    }
    return ue(W), (b, $) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (w) => p.value = !0)
          })
        ]),
        content: a(() => [
          i.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (o(), y(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            s.value.length > 0 ? (o(), y(Re, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + r(s.value.length) + " entries • " + r(f.value) + " errors • " + r(h.value) + " warnings • " + r(k.value) + " info • " + r(C.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            l(xt, {
              "active-levels": m.value,
              onToggle: G,
              onClear: z
            }, null, 8, ["active-levels"]),
            L.value.length > 0 ? (o(), y(St, { key: 1 }, {
              default: a(() => [
                (o(!0), n(F, null, K(M.value, (w, x) => (o(), y(It, {
                  key: `${w.timestamp}-${x}`,
                  level: w.level,
                  timestamp: U(w.timestamp),
                  message: w.message,
                  context: w.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            B.value ? (o(), n("div", Ki, [
              l(T, {
                variant: "secondary",
                onClick: N
              }, {
                default: a(() => [
                  v(" Load More (" + r(L.value.length - g.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            s.value.length > 0 && L.value.length === 0 ? (o(), y(be, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            s.value.length === 0 ? (o(), y(be, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ie, {
        show: p.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (w) => p.value = !1)
      }, {
        content: a(() => [...$[3] || ($[3] = [
          t("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            v(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: $[1] || ($[1] = (w) => p.value = !1)
          }, {
            default: a(() => [...$[4] || ($[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yi = /* @__PURE__ */ A(Ji, [["__scopeId", "data-v-55d656f1"]]), Xi = {
  key: 2,
  class: "load-more"
}, Qi = /* @__PURE__ */ P({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: c, getStatus: s } = pe(), i = I([]), u = I(!1), p = I(null), m = I(!1), g = I(["ERROR", "WARNING", "INFO", "DEBUG"]), f = I(50), h = I("production"), k = V(() => i.value.filter((x) => g.value.includes(x.level.toUpperCase()))), C = V(() => k.value.slice(0, f.value)), L = V(() => k.value.length > f.value), M = V(
      () => i.value.filter((x) => x.level.toUpperCase() === "ERROR").length
    ), B = V(
      () => i.value.filter((x) => x.level.toUpperCase() === "WARNING").length
    ), G = V(
      () => i.value.filter((x) => x.level.toUpperCase() === "INFO").length
    ), z = V(
      () => i.value.filter((x) => x.level.toUpperCase() === "DEBUG").length
    );
    function N(x) {
      const _ = g.value.indexOf(x);
      _ > -1 ? g.value.splice(_, 1) : g.value.push(x);
    }
    function U() {
      g.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function W() {
      f.value += 50;
    }
    function b(x) {
      return new Date(x).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function $(x) {
      if (!x) return;
      const _ = Object.entries(x);
      if (_.length === 0) return;
      const [R, j] = _[0];
      return typeof j == "string" || typeof j == "number" ? `${R}: ${j}` : R;
    }
    async function w() {
      u.value = !0, p.value = null;
      try {
        i.value = await c(void 0, 200), i.value.sort((x, _) => new Date(_.timestamp).getTime() - new Date(x.timestamp).getTime());
        try {
          const x = await s();
          h.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        p.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    return ue(w), (x, _) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (R) => m.value = !0)
          })
        ]),
        content: a(() => [
          u.value ? (o(), y(Ee, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (o(), y(Le, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
            i.value.length > 0 ? (o(), y(Re, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + r(i.value.length) + " entries • " + r(M.value) + " errors • " + r(B.value) + " warnings • " + r(G.value) + " info • " + r(z.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            l(xt, {
              "active-levels": g.value,
              onToggle: N,
              onClear: U
            }, null, 8, ["active-levels"]),
            k.value.length > 0 ? (o(), y(St, { key: 1 }, {
              default: a(() => [
                (o(!0), n(F, null, K(C.value, (R, j) => (o(), y(It, {
                  key: `${R.timestamp}-${j}`,
                  level: R.level,
                  timestamp: b(R.timestamp),
                  message: R.message,
                  context: $(R.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            L.value ? (o(), n("div", Xi, [
              l(T, {
                variant: "secondary",
                onClick: W
              }, {
                default: a(() => [
                  v(" Load More (" + r(k.value.length - f.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            i.value.length > 0 && k.value.length === 0 ? (o(), y(be, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            i.value.length === 0 ? (o(), y(be, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ie, {
        show: m.value,
        title: "About Environment Logs",
        onClose: _[2] || (_[2] = (R) => m.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            _[3] || (_[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, r(h.value), 1),
            _[4] || (_[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          _[5] || (_[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            v(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            v(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1)),
          _[6] || (_[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: _[1] || (_[1] = (R) => m.value = !1)
          }, {
            default: a(() => [..._[7] || (_[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zi = /* @__PURE__ */ A(Qi, [["__scopeId", "data-v-456b4c97"]]), er = { class: "env-title" }, tr = {
  key: 0,
  class: "current-badge"
}, or = {
  key: 0,
  class: "branch-info"
}, sr = /* @__PURE__ */ P({
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
  setup(e) {
    return (c, s) => (o(), y(de, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        v(r(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        t("div", er, [
          t("span", null, r(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), n("span", tr, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (o(), n("span", or, [
          s[0] || (s[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          v(" " + r(e.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: a(() => [
        l(Q, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        l(Q, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        l(Q, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (o(), y(Q, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: a(() => [
        ee(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), ar = /* @__PURE__ */ A(sr, [["__scopeId", "data-v-5238e57c"]]), nr = {
  key: 0,
  class: "create-form"
}, lr = { class: "create-form__header" }, ir = { class: "create-form__body" }, rr = { class: "create-form__actions" }, cr = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, dr = /* @__PURE__ */ P({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: c }) {
    const s = c, { getEnvironments: i } = pe(), u = I([]), p = I(!1), m = I(null), g = I(""), f = I(!1), h = I(!1), k = I(""), C = V(
      () => u.value.find((W) => W.is_current)
    ), L = V(() => {
      if (!g.value.trim()) return u.value;
      const W = g.value.toLowerCase();
      return u.value.filter(
        (b) => {
          var $;
          return b.name.toLowerCase().includes(W) || (($ = b.current_branch) == null ? void 0 : $.toLowerCase().includes(W));
        }
      );
    });
    function M(W) {
      if (!W) return "";
      try {
        const b = new Date(W), w = (/* @__PURE__ */ new Date()).getTime() - b.getTime(), x = Math.floor(w / 6e4), _ = Math.floor(w / 36e5), R = Math.floor(w / 864e5);
        return x < 1 ? "just now" : x < 60 ? `${x} ${x === 1 ? "minute" : "minutes"} ago` : _ < 24 ? `${_} ${_ === 1 ? "hour" : "hours"} ago` : R < 30 ? `${R} ${R === 1 ? "day" : "days"} ago` : b.toLocaleDateString();
      } catch {
        return W;
      }
    }
    function B() {
      const W = k.value.trim();
      W && (s("create", W), k.value = "", h.value = !1);
    }
    function G() {
      k.value = "", h.value = !1;
    }
    function z(W) {
      s("viewDetails", W);
    }
    function N(W) {
      confirm(`Delete environment "${W}"?

This action cannot be undone.`) && s("delete", W);
    }
    async function U() {
      p.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (W) {
        m.value = W instanceof Error ? W.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return ue(U), (W, b) => {
      const $ = jt("SectionGroup");
      return o(), n(F, null, [
        l(ge, null, {
          header: a(() => [
            l(he, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: b[1] || (b[1] = (w) => f.value = !0)
            }, {
              actions: a(() => [
                l(T, {
                  variant: "ghost",
                  size: "sm",
                  onClick: b[0] || (b[0] = (w) => h.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...b[7] || (b[7] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", {
                        d: "M8 2v12M2 8h12",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      })
                    ], -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...b[8] || (b[8] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            l(Ge, {
              modelValue: g.value,
              "onUpdate:modelValue": b[2] || (b[2] = (w) => g.value = w),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            p.value ? (o(), y(Ee, {
              key: 0,
              message: "Loading environments..."
            })) : m.value ? (o(), y(Le, {
              key: 1,
              message: m.value,
              retry: !0,
              onRetry: U
            }, null, 8, ["message"])) : (o(), n(F, { key: 2 }, [
              h.value ? (o(), n("div", nr, [
                t("div", lr, [
                  b[10] || (b[10] = t("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(T, {
                    variant: "ghost",
                    size: "xs",
                    onClick: G
                  }, {
                    default: a(() => [...b[9] || (b[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                t("div", ir, [
                  l(Ae, {
                    modelValue: k.value,
                    "onUpdate:modelValue": b[3] || (b[3] = (w) => k.value = w),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Se(B, ["enter"]),
                      Se(G, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  t("div", rr, [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: B,
                      disabled: !k.value.trim()
                    }, {
                      default: a(() => [...b[11] || (b[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: G
                    }, {
                      default: a(() => [...b[12] || (b[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              u.value.length ? (o(), y(Re, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  v(" Total: " + r(u.value.length) + " " + r(u.value.length === 1 ? "environment" : "environments") + " ", 1),
                  C.value ? (o(), n(F, { key: 0 }, [
                    b[13] || (b[13] = v(" • Current: ", -1)),
                    t("strong", null, r(C.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              L.value.length ? (o(), y($, {
                key: 2,
                title: "ENVIRONMENTS",
                count: L.value.length
              }, {
                default: a(() => [
                  (o(!0), n(F, null, K(L.value, (w) => (o(), y(ar, {
                    key: w.name,
                    "environment-name": w.name,
                    "is-current": w.is_current,
                    "current-branch": w.current_branch,
                    "workflow-count": w.workflow_count,
                    "node-count": w.node_count,
                    "model-count": w.model_count,
                    "last-used": M(w.last_used),
                    "show-last-used": !!w.last_used
                  }, {
                    actions: a(() => [
                      w.is_current ? d("", !0) : (o(), y(T, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (x) => W.$emit("switch", w.name)
                      }, {
                        default: a(() => [...b[14] || (b[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(T, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (x) => z(w.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...b[15] || (b[15] = [
                          t("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            t("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            t("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !w.is_current && u.value.length > 1 ? (o(), y(T, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (x) => N(w.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", cr, [...b[16] || (b[16] = [
                            t("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : d("", !0),
              L.value.length ? d("", !0) : (o(), y(be, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, bt({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    l(T, {
                      variant: "primary",
                      onClick: b[4] || (b[4] = (w) => h.value = !0)
                    }, {
                      default: a(() => [...b[17] || (b[17] = [
                        v(" Create Environment ", -1)
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
        l(Ie, {
          show: f.value,
          title: "About Environments",
          onClose: b[6] || (b[6] = (w) => f.value = !1)
        }, {
          content: a(() => [...b[18] || (b[18] = [
            t("p", null, [
              t("strong", null, "Environments"),
              v(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: a(() => [
            l(T, {
              variant: "secondary",
              onClick: b[5] || (b[5] = (w) => f.value = !1)
            }, {
              default: a(() => [...b[19] || (b[19] = [
                v(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), ur = /* @__PURE__ */ A(dr, [["__scopeId", "data-v-97d6527d"]]), mr = { class: "file-path" }, vr = { class: "file-path-text" }, fr = ["title"], gr = /* @__PURE__ */ P({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const c = e, s = I(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (u) {
        console.error("Failed to copy:", u);
      }
    }
    return (u, p) => (o(), n("div", mr, [
      p[0] || (p[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", vr, r(e.path), 1),
      e.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, r(s.value ? "✓" : "📋"), 9, fr)) : d("", !0)
    ]));
  }
}), hr = /* @__PURE__ */ A(gr, [["__scopeId", "data-v-f0982173"]]), pr = { class: "output-path-input" }, yr = { class: "export-actions" }, wr = {
  key: 1,
  class: "export-warning"
}, br = /* @__PURE__ */ P({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: c } = pe(), s = I(""), i = I(!1), u = I(null), p = I(!1);
    async function m() {
      i.value = !0, u.value = null;
      try {
        const f = await c(s.value || void 0);
        u.value = f;
      } catch (f) {
        u.value = {
          status: "error",
          message: f instanceof Error ? f.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function g() {
      var f;
      if ((f = u.value) != null && f.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (h) {
          console.error("Failed to copy path:", h);
        }
    }
    return (f, h) => (o(), n(F, null, [
      l(ge, null, {
        header: a(() => [
          l(he, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              l(T, {
                variant: "ghost",
                size: "sm",
                onClick: h[0] || (h[0] = (k) => p.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...h[5] || (h[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    t("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          l(ie, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              l(de, { status: "synced" }, {
                icon: a(() => [...h[6] || (h[6] = [
                  v("📦", -1)
                ])]),
                title: a(() => [...h[7] || (h[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...h[8] || (h[8] = [
                  v(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  l(Q, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  l(Q, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  l(Q, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  l(Q, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ie, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              l(de, { status: "synced" }, {
                icon: a(() => [...h[9] || (h[9] = [
                  v("📁", -1)
                ])]),
                title: a(() => [...h[10] || (h[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: a(() => [...h[11] || (h[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  t("div", pr, [
                    l(Ae, {
                      modelValue: s.value,
                      "onUpdate:modelValue": h[1] || (h[1] = (k) => s.value = k),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ie, { title: "EXPORT" }, {
            default: a(() => [
              t("div", yr, [
                l(T, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: m
                }, {
                  default: a(() => [
                    h[12] || (h[12] = t("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      t("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    v(" " + r(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), y(T, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: h[2] || (h[2] = (k) => s.value = "")
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          u.value ? (o(), y(ie, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              l(de, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, bt({
                icon: a(() => [
                  v(r(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  v(r(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  v(r(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    l(Q, { label: "Saved to:" }, {
                      default: a(() => [
                        l(hr, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (o(), y(Q, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (o(), n("div", wr, [...h[14] || (h[14] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: g
                    }, {
                      default: a(() => [...h[15] || (h[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    l(T, {
                      variant: "ghost",
                      size: "sm",
                      onClick: h[3] || (h[3] = (k) => u.value = null)
                    }, {
                      default: a(() => [...h[16] || (h[16] = [
                        v(" Dismiss ", -1)
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
      l(Ie, {
        show: p.value,
        title: "About Environment Export",
        onClose: h[4] || (h[4] = (k) => p.value = !1)
      }, {
        content: a(() => [...h[17] || (h[17] = [
          t("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          t("ul", null, [
            t("li", null, "Shared with collaborators"),
            t("li", null, "Backed up for safekeeping"),
            t("li", null, "Imported into other ComfyGit workspaces"),
            t("li", null, "Version controlled separately")
          ], -1),
          t("p", null, [
            t("strong", null, "Note:"),
            v(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kr = /* @__PURE__ */ A(br, [["__scopeId", "data-v-1777a9d5"]]), $r = { class: "file-input-wrapper" }, _r = ["accept", "multiple", "disabled"], Cr = /* @__PURE__ */ P({
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
  setup(e, { expose: c, emit: s }) {
    const i = s, u = I(null);
    function p() {
      var g;
      (g = u.value) == null || g.click();
    }
    function m(g) {
      const f = g.target;
      f.files && f.files.length > 0 && (i("change", f.files), f.value = "");
    }
    return c({
      triggerInput: p
    }), (g, f) => (o(), n("div", $r, [
      t("input", {
        ref_key: "fileInputRef",
        ref: u,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, _r),
      l(T, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: p
      }, {
        default: a(() => [
          ee(g.$slots, "default", {}, () => [
            f[0] || (f[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            v(" " + r(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), xr = /* @__PURE__ */ A(Cr, [["__scopeId", "data-v-cd192091"]]), Sr = {
  key: 0,
  class: "drop-zone-empty"
}, Ir = { class: "drop-zone-text" }, Er = { class: "drop-zone-primary" }, Lr = { class: "drop-zone-secondary" }, Nr = { class: "drop-zone-actions" }, Mr = {
  key: 1,
  class: "drop-zone-file"
}, zr = { class: "file-info" }, Rr = { class: "file-details" }, Dr = { class: "file-name" }, Tr = { class: "file-size" }, Br = /* @__PURE__ */ P({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: c }) {
    const s = c, i = I(!1), u = I(null), p = I(0), m = V(() => u.value !== null), g = V(() => {
      var z;
      return ((z = u.value) == null ? void 0 : z.name) || "";
    }), f = V(() => {
      if (!u.value) return "";
      const z = u.value.size;
      return z < 1024 ? `${z} B` : z < 1024 * 1024 ? `${(z / 1024).toFixed(1)} KB` : z < 1024 * 1024 * 1024 ? `${(z / (1024 * 1024)).toFixed(1)} MB` : `${(z / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function h(z) {
      var N;
      p.value++, (N = z.dataTransfer) != null && N.types.includes("Files") && (i.value = !0);
    }
    function k(z) {
      z.dataTransfer && (z.dataTransfer.dropEffect = "copy");
    }
    function C() {
      p.value--, p.value === 0 && (i.value = !1);
    }
    function L(z) {
      var U;
      p.value = 0, i.value = !1;
      const N = (U = z.dataTransfer) == null ? void 0 : U.files;
      N && N.length > 0 && B(N[0]);
    }
    function M(z) {
      z.length > 0 && B(z[0]);
    }
    function B(z) {
      u.value = z, s("fileSelected", z);
    }
    function G() {
      u.value = null, s("clear");
    }
    return (z, N) => (o(), n("div", {
      class: q(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: fe(h, ["prevent"]),
      onDragover: fe(k, ["prevent"]),
      onDragleave: fe(C, ["prevent"]),
      onDrop: fe(L, ["prevent"])
    }, [
      m.value ? (o(), n("div", Mr, [
        t("div", zr, [
          N[1] || (N[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Rr, [
            t("div", Dr, r(g.value), 1),
            t("div", Tr, r(f.value), 1)
          ])
        ]),
        l(T, {
          variant: "ghost",
          size: "xs",
          onClick: G,
          title: "Remove file"
        }, {
          default: a(() => [...N[2] || (N[2] = [
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
      ])) : (o(), n("div", Sr, [
        N[0] || (N[0] = t("div", { class: "drop-zone-icon" }, [
          t("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            t("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        t("div", Ir, [
          t("p", Er, r(e.primaryText), 1),
          t("p", Lr, r(e.secondaryText), 1)
        ]),
        t("div", Nr, [
          l(xr, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "md",
            onChange: M
          }, {
            default: a(() => [
              v(r(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Vr = /* @__PURE__ */ A(Br, [["__scopeId", "data-v-e00abbca"]]), Ur = { class: "import-preview" }, Or = { class: "preview-header" }, Fr = {
  key: 0,
  class: "source-env"
}, Pr = { class: "preview-content" }, Ar = { class: "preview-section" }, Wr = { class: "section-header" }, Gr = { class: "section-info" }, Hr = { class: "section-count" }, jr = {
  key: 0,
  class: "item-list"
}, qr = { class: "item-name" }, Kr = {
  key: 0,
  class: "item-more"
}, Jr = { class: "preview-section" }, Yr = { class: "section-header" }, Xr = { class: "section-info" }, Qr = { class: "section-count" }, Zr = {
  key: 0,
  class: "item-list"
}, ec = { class: "item-details" }, tc = { class: "item-name" }, oc = { class: "item-meta" }, sc = {
  key: 0,
  class: "item-more"
}, ac = { class: "preview-section" }, nc = { class: "section-header" }, lc = { class: "section-info" }, ic = { class: "section-count" }, rc = {
  key: 0,
  class: "item-list"
}, cc = { class: "item-name" }, dc = {
  key: 0,
  class: "item-more"
}, uc = {
  key: 0,
  class: "preview-section"
}, mc = { class: "git-info" }, vc = /* @__PURE__ */ P({
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
    const c = e, s = V(() => c.workflows.length), i = V(() => c.models.length), u = V(() => c.nodes.length);
    function p(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, g) => (o(), n("div", Ur, [
      t("div", Or, [
        l(we, null, {
          default: a(() => [...g[0] || (g[0] = [
            v("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), n("span", Fr, [
          g[1] || (g[1] = v(" From: ", -1)),
          l(Pe, null, {
            default: a(() => [
              v(r(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      t("div", Pr, [
        t("div", Ar, [
          t("div", Wr, [
            g[3] || (g[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Gr, [
              g[2] || (g[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Hr, r(s.value) + " file" + r(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), n("div", jr, [
            (o(!0), n(F, null, K(e.workflows.slice(0, e.maxPreviewItems), (f) => (o(), n("div", {
              key: f,
              class: "preview-item"
            }, [
              g[4] || (g[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", qr, r(f), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), n("div", Kr, " +" + r(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t("div", Jr, [
          t("div", Yr, [
            g[6] || (g[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Xr, [
              g[5] || (g[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Qr, r(i.value) + " file" + r(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), n("div", Zr, [
            (o(!0), n(F, null, K(e.models.slice(0, e.maxPreviewItems), (f) => (o(), n("div", {
              key: f.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", ec, [
                t("span", tc, r(f.filename), 1),
                t("span", oc, r(p(f.size)) + " • " + r(f.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), n("div", sc, " +" + r(e.models.length - e.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t("div", ac, [
          t("div", nc, [
            g[9] || (g[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", lc, [
              g[8] || (g[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", ic, r(u.value) + " node" + r(u.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), n("div", rc, [
            (o(!0), n(F, null, K(e.nodes.slice(0, e.maxPreviewItems), (f) => (o(), n("div", {
              key: f,
              class: "preview-item"
            }, [
              g[10] || (g[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", cc, r(f), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), n("div", dc, " +" + r(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), n("div", uc, [
          g[11] || (g[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", mc, [
            e.gitBranch ? (o(), y(Q, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                l(Pe, null, {
                  default: a(() => [
                    v(r(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            e.gitCommit ? (o(), y(Q, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                l(Ct, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), fc = /* @__PURE__ */ A(vc, [["__scopeId", "data-v-182fe113"]]), gc = { class: "import-options" }, hc = { class: "options-container" }, pc = { class: "option-section" }, yc = { class: "conflict-options" }, wc = ["value", "checked", "onChange"], bc = { class: "conflict-content" }, kc = { class: "conflict-label" }, $c = { class: "conflict-description" }, _c = { class: "option-section" }, Cc = { class: "component-toggles" }, xc = /* @__PURE__ */ P({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(e, { emit: c }) {
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
    return (u, p) => (o(), n("div", gc, [
      l(we, null, {
        default: a(() => [...p[4] || (p[4] = [
          v("Import Options", -1)
        ])]),
        _: 1
      }),
      t("div", hc, [
        t("div", pc, [
          l(ct, null, {
            default: a(() => [...p[5] || (p[5] = [
              v("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          t("div", yc, [
            (o(), n(F, null, K(i, (m) => t("label", {
              key: m.value,
              class: q(["conflict-option", { active: e.conflictMode === m.value }])
            }, [
              t("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: e.conflictMode === m.value,
                onChange: (g) => s("update:conflictMode", m.value)
              }, null, 40, wc),
              t("div", bc, [
                t("span", kc, r(m.label), 1),
                t("span", $c, r(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", _c, [
          l(ct, null, {
            default: a(() => [...p[6] || (p[6] = [
              v("Components to Import", -1)
            ])]),
            _: 1
          }),
          t("div", Cc, [
            l(ne, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": e.includeWorkflows,
                  "onUpdate:modelValue": p[0] || (p[0] = (m) => s("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ne, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": e.includeModels,
                  "onUpdate:modelValue": p[1] || (p[1] = (m) => s("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ne, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": e.includeNodes,
                  "onUpdate:modelValue": p[2] || (p[2] = (m) => s("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ne, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": e.includeGitHistory,
                  "onUpdate:modelValue": p[3] || (p[3] = (m) => s("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Sc = /* @__PURE__ */ A(xc, [["__scopeId", "data-v-0ec212b0"]]), Ic = {
  key: 0,
  class: "import-empty"
}, Ec = { class: "import-help" }, Lc = {
  key: 1,
  class: "import-configure"
}, Nc = { class: "selected-file-bar" }, Mc = { class: "file-bar-content" }, zc = { class: "file-bar-info" }, Rc = { class: "file-bar-name" }, Dc = { class: "file-bar-size" }, Tc = { class: "import-actions" }, Bc = {
  key: 2,
  class: "import-progress"
}, Vc = { class: "progress-content" }, Uc = { class: "progress-info" }, Oc = { class: "progress-title" }, Fc = { class: "progress-detail" }, Pc = { class: "progress-bar" }, Ac = { class: "progress-status" }, Wc = {
  key: 3,
  class: "import-complete"
}, Gc = { class: "complete-message" }, Hc = { class: "complete-title" }, jc = { class: "complete-details" }, qc = { class: "complete-actions" }, Kc = /* @__PURE__ */ P({
  __name: "ImportSection",
  setup(e) {
    const c = I(null), s = I(!1), i = I(!1), u = I(!1), p = I(""), m = I({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = I({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), f = I({
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
    }), h = V(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function k(G) {
      c.value = G;
    }
    function C() {
      c.value = null, i.value = !1, u.value = !1, p.value = "";
    }
    function L() {
      C(), s.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function M() {
      if (c.value) {
        s.value = !0, i.value = !1;
        try {
          const G = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${f.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${f.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${f.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const z of G)
            g.value = z, await new Promise((N) => setTimeout(N, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((z) => setTimeout(z, 500)), u.value = !0, p.value = `Successfully imported ${f.value.workflows.length} workflows, ${f.value.models.length} models, and ${f.value.nodes.length} custom nodes.`;
        } catch (G) {
          u.value = !1, p.value = G instanceof Error ? G.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function B(G) {
      return G < 1024 ? `${G} B` : G < 1024 * 1024 ? `${(G / 1024).toFixed(1)} KB` : G < 1024 * 1024 * 1024 ? `${(G / (1024 * 1024)).toFixed(1)} MB` : `${(G / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (G, z) => (o(), y(ge, null, {
      header: a(() => [
        l(he, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", Ic, [
          l(Vr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: k
          }),
          t("div", Ec, [
            l(we, null, {
              default: a(() => [...z[5] || (z[5] = [
                v("How to Import", -1)
              ])]),
              _: 1
            }),
            z[6] || (z[6] = t("div", { class: "help-content" }, [
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "1"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Select Export File"),
                  t("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "2"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Review Preview"),
                  t("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "3"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Configure Options"),
                  t("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "4"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Import"),
                  t("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : c.value && !s.value && !i.value ? (o(), n("div", Lc, [
          t("div", Nc, [
            t("div", Mc, [
              z[7] || (z[7] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", zc, [
                t("div", Rc, r(c.value.name), 1),
                t("div", Dc, r(B(c.value.size)), 1)
              ])
            ]),
            l(T, {
              variant: "ghost",
              size: "sm",
              onClick: C
            }, {
              default: a(() => [...z[8] || (z[8] = [
                v(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          l(fc, {
            "source-environment": f.value.sourceEnvironment,
            workflows: f.value.workflows,
            models: f.value.models,
            nodes: f.value.nodes,
            "git-branch": f.value.gitBranch,
            "git-commit": f.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          l(Sc, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": z[0] || (z[0] = (N) => m.value.conflictMode = N),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": z[1] || (z[1] = (N) => m.value.includeWorkflows = N),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": z[2] || (z[2] = (N) => m.value.includeModels = N),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": z[3] || (z[3] = (N) => m.value.includeNodes = N),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": z[4] || (z[4] = (N) => m.value.includeGitHistory = N)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && f.value.models.length > 0 ? (o(), y(Ze, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${f.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          t("div", Tc, [
            l(T, {
              variant: "primary",
              size: "md",
              disabled: !h.value,
              onClick: M
            }, {
              default: a(() => [...z[9] || (z[9] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  t("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                v(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            l(T, {
              variant: "secondary",
              size: "md",
              onClick: C
            }, {
              default: a(() => [...z[10] || (z[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Bc, [
          t("div", Vc, [
            z[11] || (z[11] = t("div", { class: "progress-icon" }, [
              t("div", { class: "spinner" })
            ], -1)),
            t("div", Uc, [
              t("div", Oc, r(g.value.message), 1),
              t("div", Fc, r(g.value.detail), 1)
            ])
          ]),
          t("div", Pc, [
            t("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          t("div", Ac, r(g.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Wc, [
          t("div", {
            class: q(["complete-icon", u.value ? "success" : "error"])
          }, r(u.value ? "✓" : "✕"), 3),
          t("div", Gc, [
            t("div", Hc, r(u.value ? "Import Successful" : "Import Failed"), 1),
            t("div", jc, r(p.value), 1)
          ]),
          t("div", qc, [
            l(T, {
              variant: "primary",
              size: "md",
              onClick: L
            }, {
              default: a(() => [...z[12] || (z[12] = [
                v(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), Jc = /* @__PURE__ */ A(Kc, [["__scopeId", "data-v-18e18eb5"]]), Yc = { class: "header-info" }, Xc = { class: "commit-hash" }, Qc = {
  key: 0,
  class: "commit-refs"
}, Zc = { class: "commit-message" }, ed = { class: "commit-date" }, td = {
  key: 0,
  class: "loading"
}, od = {
  key: 1,
  class: "changes-section"
}, sd = { class: "stats-row" }, ad = { class: "stat" }, nd = { class: "stat insertions" }, ld = { class: "stat deletions" }, id = {
  key: 0,
  class: "change-group"
}, rd = {
  key: 1,
  class: "change-group"
}, cd = {
  key: 0,
  class: "version"
}, dd = {
  key: 2,
  class: "change-group"
}, ud = { class: "change-item" }, md = /* @__PURE__ */ P({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const c = e, { getCommitDetail: s } = pe(), i = I(null), u = I(!0), p = V(() => {
      if (!i.value) return !1;
      const g = i.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), m = V(() => {
      if (!i.value) return !1;
      const g = i.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return ue(async () => {
      try {
        i.value = await s(c.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (g, f) => (o(), y(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: f[3] || (f[3] = (h) => g.$emit("close"))
    }, {
      header: a(() => {
        var h, k, C, L;
        return [
          t("div", Yc, [
            f[4] || (f[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", Xc, r(((h = i.value) == null ? void 0 : h.short_hash) || e.commit.short_hash || ((k = e.commit.hash) == null ? void 0 : k.slice(0, 7))), 1),
            (L = (C = i.value) == null ? void 0 : C.refs) != null && L.length ? (o(), n("span", Qc, [
              (o(!0), n(F, null, K(i.value.refs, (M) => (o(), n("span", {
                key: M,
                class: "ref-badge"
              }, r(M), 1))), 128))
            ])) : d("", !0)
          ]),
          l(me, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (M) => g.$emit("close"))
          }, {
            default: a(() => [...f[5] || (f[5] = [
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
      body: a(() => {
        var h, k;
        return [
          t("div", Zc, r(((h = i.value) == null ? void 0 : h.message) || e.commit.message), 1),
          t("div", ed, r(((k = i.value) == null ? void 0 : k.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          u.value ? (o(), n("div", td, "Loading details...")) : i.value ? (o(), n("div", od, [
            t("div", sd, [
              t("span", ad, r(i.value.stats.files_changed) + " files", 1),
              t("span", nd, "+" + r(i.value.stats.insertions), 1),
              t("span", ld, "-" + r(i.value.stats.deletions), 1)
            ]),
            p.value ? (o(), n("div", id, [
              l(ze, { variant: "section" }, {
                default: a(() => [...f[6] || (f[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, K(i.value.changes.workflows.added, (C) => (o(), n("div", {
                key: "add-" + C,
                class: "change-item added"
              }, [
                f[7] || (f[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, r(C), 1)
              ]))), 128)),
              (o(!0), n(F, null, K(i.value.changes.workflows.modified, (C) => (o(), n("div", {
                key: "mod-" + C,
                class: "change-item modified"
              }, [
                f[8] || (f[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, r(C), 1)
              ]))), 128)),
              (o(!0), n(F, null, K(i.value.changes.workflows.deleted, (C) => (o(), n("div", {
                key: "del-" + C,
                class: "change-item deleted"
              }, [
                f[9] || (f[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, r(C), 1)
              ]))), 128))
            ])) : d("", !0),
            m.value ? (o(), n("div", rd, [
              l(ze, { variant: "section" }, {
                default: a(() => [...f[10] || (f[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(F, null, K(i.value.changes.nodes.added, (C) => (o(), n("div", {
                key: "add-" + C.name,
                class: "change-item added"
              }, [
                f[11] || (f[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, r(C.name), 1),
                C.version ? (o(), n("span", cd, "(" + r(C.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), n(F, null, K(i.value.changes.nodes.removed, (C) => (o(), n("div", {
                key: "rem-" + C.name,
                class: "change-item deleted"
              }, [
                f[12] || (f[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, r(C.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", dd, [
              l(ze, { variant: "section" }, {
                default: a(() => [...f[13] || (f[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", ud, [
                f[14] || (f[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, r(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (h) => g.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...f[15] || (f[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(me, {
          variant: "primary",
          onClick: f[2] || (f[2] = (h) => g.$emit("checkout", e.commit))
        }, {
          default: a(() => [...f[16] || (f[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), vd = /* @__PURE__ */ A(md, [["__scopeId", "data-v-d256ff6d"]]), fd = { class: "dialog-message" }, gd = {
  key: 0,
  class: "dialog-details"
}, hd = {
  key: 1,
  class: "dialog-warning"
}, pd = /* @__PURE__ */ P({
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
    return (c, s) => (o(), y(tt, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => c.$emit("cancel"))
    }, {
      body: a(() => [
        t("p", fd, r(e.message), 1),
        e.details && e.details.length ? (o(), n("div", gd, [
          (o(!0), n(F, null, K(e.details, (i, u) => (o(), n("div", {
            key: u,
            class: "detail-item"
          }, " • " + r(i), 1))), 128))
        ])) : d("", !0),
        e.warning ? (o(), n("p", hd, [
          s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + r(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => c.$emit("cancel"))
        }, {
          default: a(() => [
            v(r(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), y(me, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => c.$emit("secondary"))
        }, {
          default: a(() => [
            v(r(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        l(me, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
        }, {
          default: a(() => [
            v(r(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yd = /* @__PURE__ */ A(pd, [["__scopeId", "data-v-3670b9f5"]]), wd = { class: "base-textarea-wrapper" }, bd = ["value", "rows", "placeholder", "disabled", "maxlength"], kd = {
  key: 0,
  class: "base-textarea-count"
}, $d = /* @__PURE__ */ P({
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
  setup(e) {
    return (c, s) => (o(), n("div", wd, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Se(fe((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Se(fe((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, bd),
      e.showCharCount && e.maxLength ? (o(), n("div", kd, r(e.modelValue.length) + " / " + r(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ A($d, [["__scopeId", "data-v-5516e6fc"]]), _d = { class: "popover-header" }, Cd = { class: "popover-body" }, xd = {
  key: 0,
  class: "changes-summary"
}, Sd = {
  key: 0,
  class: "change-item"
}, Id = {
  key: 1,
  class: "change-item"
}, Ed = {
  key: 2,
  class: "change-item"
}, Ld = {
  key: 3,
  class: "change-item"
}, Nd = {
  key: 4,
  class: "change-item"
}, Md = {
  key: 1,
  class: "no-changes"
}, zd = {
  key: 2,
  class: "loading"
}, Rd = { class: "message-section" }, Dd = { class: "popover-footer" }, Td = {
  key: 1,
  class: "commit-popover"
}, Bd = { class: "popover-header" }, Vd = { class: "popover-body" }, Ud = {
  key: 0,
  class: "changes-summary"
}, Od = {
  key: 0,
  class: "change-item"
}, Fd = {
  key: 1,
  class: "change-item"
}, Pd = {
  key: 2,
  class: "change-item"
}, Ad = {
  key: 3,
  class: "change-item"
}, Wd = {
  key: 4,
  class: "change-item"
}, Gd = {
  key: 1,
  class: "no-changes"
}, Hd = {
  key: 2,
  class: "loading"
}, jd = { class: "message-section" }, qd = { class: "popover-footer" }, Kd = /* @__PURE__ */ P({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: c }) {
    const s = e, i = c, { commit: u } = pe(), p = I(""), m = I(!1), g = I(null), f = V(() => {
      if (!s.status) return !1;
      const k = s.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || s.status.has_changes;
    });
    async function h() {
      var k, C, L;
      if (!(!f.value || !p.value.trim() || m.value)) {
        m.value = !0, g.value = null;
        try {
          const M = await u(p.value.trim());
          M.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((k = M.summary) == null ? void 0 : k.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((L = M.summary) == null ? void 0 : L.deleted) || 0} deleted`
          }, p.value = "", setTimeout(() => i("committed"), 1e3)) : M.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: M.message || "Commit failed" };
        } catch (M) {
          g.value = { type: "error", message: M instanceof Error ? M.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (k, C) => e.asModal ? (o(), y(Ue, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[4] || (C[4] = (L) => i("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[3] || (C[3] = fe(() => {
          }, ["stop"]))
        }, [
          t("div", _d, [
            C[9] || (C[9] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (L) => i("close"))
            }, [...C[8] || (C[8] = [
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
          t("div", Cd, [
            e.status && f.value ? (o(), n("div", xd, [
              e.status.workflows.new.length ? (o(), n("div", Sd, [
                C[10] || (C[10] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, r(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              e.status.workflows.modified.length ? (o(), n("div", Id, [
                C[11] || (C[11] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, r(e.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              e.status.workflows.deleted.length ? (o(), n("div", Ed, [
                C[12] || (C[12] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, r(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              e.status.git_changes.nodes_added.length ? (o(), n("div", Ld, [
                C[13] || (C[13] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, r(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), n("div", Nd, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, r(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : e.status ? (o(), n("div", Md, " No changes to commit ")) : (o(), n("div", zd, " Loading... ")),
            t("div", Rd, [
              l(yt, {
                modelValue: p.value,
                "onUpdate:modelValue": C[1] || (C[1] = (L) => p.value = L),
                placeholder: f.value ? "Describe your changes..." : "No changes",
                disabled: !f.value || m.value,
                rows: 3,
                onCtrlEnter: h
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            g.value ? (o(), n("div", {
              key: 3,
              class: q(["result", g.value.type])
            }, r(g.value.message), 3)) : d("", !0)
          ]),
          t("div", Dd, [
            l(me, {
              variant: "secondary",
              onClick: C[2] || (C[2] = (L) => i("close"))
            }, {
              default: a(() => [...C[15] || (C[15] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(me, {
              variant: "primary",
              disabled: !f.value || !p.value.trim() || m.value,
              loading: m.value,
              onClick: h
            }, {
              default: a(() => [
                v(r(m.value ? "Committing..." : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Td, [
      t("div", Bd, [
        C[17] || (C[17] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[5] || (C[5] = (L) => i("close"))
        }, [...C[16] || (C[16] = [
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
      t("div", Vd, [
        e.status && f.value ? (o(), n("div", Ud, [
          e.status.workflows.new.length ? (o(), n("div", Od, [
            C[18] || (C[18] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, r(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (o(), n("div", Fd, [
            C[19] || (C[19] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, r(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (o(), n("div", Pd, [
            C[20] || (C[20] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, r(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (o(), n("div", Ad, [
            C[21] || (C[21] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, r(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), n("div", Wd, [
            C[22] || (C[22] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, r(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (o(), n("div", Gd, " No changes to commit ")) : (o(), n("div", Hd, " Loading... ")),
        t("div", jd, [
          l(yt, {
            modelValue: p.value,
            "onUpdate:modelValue": C[6] || (C[6] = (L) => p.value = L),
            placeholder: f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || m.value,
            rows: 3,
            onCtrlEnter: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (o(), n("div", {
          key: 3,
          class: q(["result", g.value.type])
        }, r(g.value.message), 3)) : d("", !0)
      ]),
      t("div", qd, [
        l(me, {
          variant: "secondary",
          onClick: C[7] || (C[7] = (L) => i("close"))
        }, {
          default: a(() => [...C[23] || (C[23] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(me, {
          variant: "primary",
          disabled: !f.value || !p.value.trim() || m.value,
          loading: m.value,
          onClick: h
        }, {
          default: a(() => [
            v(r(m.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Et = /* @__PURE__ */ A(Kd, [["__scopeId", "data-v-a8e2ae3a"]]), Jd = { class: "modal-header" }, Yd = { class: "modal-body" }, Xd = { class: "switch-message" }, Qd = { class: "switch-details" }, Zd = { class: "modal-actions" }, eu = /* @__PURE__ */ P({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (c, s) => (o(), y(Ue, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          t("div", Jd, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          t("div", Yd, [
            t("p", Xd, [
              s[6] || (s[6] = v(" Switch from ", -1)),
              t("strong", null, r(e.fromEnvironment), 1),
              s[7] || (s[7] = v(" to ", -1)),
              t("strong", null, r(e.toEnvironment), 1),
              s[8] || (s[8] = v("? ", -1))
            ]),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", Qd, ' Your current work will be preserved. You can switch back to "' + r(e.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", Zd, [
            l(T, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(T, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                v(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), tu = /* @__PURE__ */ A(eu, [["__scopeId", "data-v-e9c5253e"]]), ou = { class: "progress-bar" }, su = /* @__PURE__ */ P({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const c = e, s = V(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, u) => (o(), n("div", ou, [
      t("div", {
        class: q(["progress-fill", e.variant]),
        style: Je({ width: s.value })
      }, null, 6)
    ]));
  }
}), au = /* @__PURE__ */ A(su, [["__scopeId", "data-v-1beb0512"]]), nu = {
  key: 0,
  class: "modal-overlay"
}, lu = { class: "modal-content" }, iu = { class: "modal-body" }, ru = { class: "progress-info" }, cu = { class: "progress-percentage" }, du = { class: "progress-state" }, uu = { class: "switch-steps" }, mu = { class: "step-icon" }, vu = { class: "step-label" }, fu = /* @__PURE__ */ P({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const c = e, s = V(() => {
      const p = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || p[c.state] || c.state;
    }), i = V(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), u = V(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = p.findIndex((g) => g.state === c.state);
      return p.map((g, f) => {
        let h = "pending", k = "○";
        return f < m ? (h = "completed", k = "✓") : f === m && (h = "active", k = "⟳"), {
          ...g,
          status: h,
          icon: k
        };
      });
    });
    return (p, m) => (o(), y(Ue, { to: "body" }, [
      e.show ? (o(), n("div", nu, [
        t("div", lu, [
          m[1] || (m[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", iu, [
            l(au, {
              progress: e.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            t("div", ru, [
              t("div", cu, r(e.progress) + "%", 1),
              t("div", du, r(s.value), 1)
            ]),
            t("div", uu, [
              (o(!0), n(F, null, K(u.value, (g) => (o(), n("div", {
                key: g.state,
                class: q(["switch-step", g.status])
              }, [
                t("span", mu, r(g.icon), 1),
                t("span", vu, r(g.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), gu = /* @__PURE__ */ A(fu, [["__scopeId", "data-v-768a5078"]]), hu = { class: "modal-header" }, pu = { class: "modal-body" }, yu = {
  key: 0,
  class: "node-section"
}, wu = { class: "node-list" }, bu = {
  key: 1,
  class: "node-section"
}, ku = { class: "node-list" }, $u = { class: "modal-actions" }, _u = /* @__PURE__ */ P({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (c, s) => (o(), y(Ue, { to: "body" }, [
      e.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          t("div", hu, [
            s[5] || (s[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          t("div", pu, [
            s[8] || (s[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), n("div", yu, [
              s[6] || (s[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", wu, [
                (o(!0), n(F, null, K(e.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + r(i), 1))), 128))
              ])
            ])) : d("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), n("div", bu, [
              s[7] || (s[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", ku, [
                (o(!0), n(F, null, K(e.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + r(i), 1))), 128))
              ])
            ])) : d("", !0),
            s[9] || (s[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", $u, [
            l(T, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(T, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Cu = /* @__PURE__ */ A(_u, [["__scopeId", "data-v-7cad7518"]]);
async function je(e, c = {}, s = 5e3) {
  const i = new AbortController(), u = setTimeout(() => i.abort(), s);
  try {
    const p = await fetch(e, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(u), p;
  } catch (p) {
    throw clearTimeout(u), p.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : p;
  }
}
function xu() {
  const e = I(null);
  async function c() {
    try {
      const m = await je(
        "http://127.0.0.1:8188/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (e.value || (e.value = await c()), !e.value)
      return null;
    try {
      const m = await je(
        `http://127.0.0.1:${e.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return e.value = await c(), null;
    }
  }
  async function i() {
    if (e.value || (e.value = await c()), !e.value)
      return null;
    try {
      const m = await je(
        `http://127.0.0.1:${e.value}/status`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Failed to get status");
      return await m.json();
    } catch {
      return null;
    }
  }
  async function u() {
    if (e.value || (e.value = await c()), !e.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${e.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (e.value || (e.value = await c()), !e.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${e.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: e,
    discoverControlPort: c,
    checkHealth: s,
    getStatus: i,
    restart: u,
    kill: p
  };
}
const Su = { class: "comfygit-panel" }, Iu = { class: "panel-header" }, Eu = { class: "header-left" }, Lu = {
  key: 0,
  class: "header-info"
}, Nu = { class: "header-actions" }, Mu = { class: "env-switcher" }, zu = {
  key: 0,
  class: "header-info"
}, Ru = { class: "branch-name" }, Du = { class: "panel-main" }, Tu = { class: "sidebar" }, Bu = { class: "sidebar-section" }, Vu = { class: "sidebar-section" }, Uu = { class: "sidebar-section" }, Ou = { class: "content-area" }, Fu = {
  key: 0,
  class: "error-message"
}, Pu = {
  key: 1,
  class: "loading"
}, Au = { class: "dialog-content env-selector-dialog" }, Wu = { class: "dialog-header" }, Gu = { class: "dialog-body" }, Hu = { class: "env-list" }, ju = { class: "env-info" }, qu = { class: "env-name-row" }, Ku = { class: "env-indicator" }, Ju = { class: "env-name" }, Yu = {
  key: 0,
  class: "env-branch"
}, Xu = {
  key: 1,
  class: "current-label"
}, Qu = { class: "env-stats" }, Zu = ["onClick"], em = { class: "toast-container" }, tm = { class: "toast-icon" }, om = { class: "toast-message" }, sm = /* @__PURE__ */ P({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: c }) {
    const s = c, {
      getStatus: i,
      getHistory: u,
      getBranches: p,
      checkout: m,
      createBranch: g,
      switchBranch: f,
      getEnvironments: h,
      switchEnvironment: k,
      getSwitchProgress: C,
      syncEnvironmentManually: L
    } = pe(), M = xu(), B = I(null), G = I([]), z = I([]), N = I([]), U = V(() => N.value.find((D) => D.is_current)), W = I(!1), b = I(null), $ = I(null), w = I(!1), x = I(!1), _ = I(!1), R = I(""), j = I({ state: "idle", progress: 0, message: "" });
    let re = null, H = null;
    const E = I("status"), J = I("this-env");
    function te(D, S) {
      E.value = D, J.value = S;
    }
    function Oe(D) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[D];
      oe && te(oe.view, oe.section);
    }
    function Fe() {
      te("branches", "this-env");
    }
    const ce = I(null), Z = I(!1), De = I(!1), Ne = I([]);
    let ot = 0;
    function ae(D, S = "info", oe = 3e3) {
      const le = ++ot;
      return Ne.value.push({ id: le, message: D, type: S }), oe > 0 && setTimeout(() => {
        Ne.value = Ne.value.filter((ke) => ke.id !== le);
      }, oe), le;
    }
    function Ce(D) {
      Ne.value = Ne.value.filter((S) => S.id !== D);
    }
    function st(D) {
      switch (D) {
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
    const O = V(() => {
      if (!B.value) return "neutral";
      const D = B.value.workflows, S = D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || B.value.has_changes;
      return B.value.comparison.is_synced ? S ? "warning" : "success" : "error";
    });
    V(() => B.value ? O.value === "success" ? "All synced" : O.value === "warning" ? "Uncommitted changes" : O.value === "error" ? "Not synced" : "" : "");
    async function Y() {
      W.value = !0, b.value = null;
      try {
        const [D, S, oe, le] = await Promise.all([
          i(),
          u(),
          p(),
          h()
        ]);
        B.value = D, G.value = S.commits, z.value = oe.branches, N.value = le, s("statusUpdate", D);
      } catch (D) {
        b.value = D instanceof Error ? D.message : "Failed to load status", B.value = null, G.value = [], z.value = [];
      } finally {
        W.value = !1;
      }
    }
    function se(D) {
      $.value = D;
    }
    async function He(D) {
      var oe;
      $.value = null;
      const S = B.value && (B.value.workflows.new.length > 0 || B.value.workflows.modified.length > 0 || B.value.workflows.deleted.length > 0 || B.value.has_changes);
      ce.value = {
        title: S ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: S ? "You have uncommitted changes that will be lost." : `Checkout commit ${D.short_hash || ((oe = D.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: S ? gt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: S,
        onConfirm: async () => {
          var $e;
          ce.value = null;
          const le = ae(`Checking out ${D.short_hash || (($e = D.hash) == null ? void 0 : $e.slice(0, 7))}...`, "info", 0), ke = await m(D.hash, S);
          Ce(le), ke.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(ke.message || "Checkout failed", "error");
        }
      };
    }
    async function Ye(D) {
      const S = B.value && (B.value.workflows.new.length > 0 || B.value.workflows.modified.length > 0 || B.value.workflows.deleted.length > 0 || B.value.has_changes);
      ce.value = {
        title: S ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: S ? "You have uncommitted changes." : `Switch to branch "${D}"?`,
        details: S ? gt() : void 0,
        warning: S ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null;
          const oe = ae(`Switching to ${D}...`, "info", 0), le = await f(D, S);
          Ce(oe), le.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(le.message || "Branch switch failed", "error");
        }
      };
    }
    async function Rt(D) {
      const S = ae(`Creating branch ${D}...`, "info", 0), oe = await g(D);
      Ce(S), oe.status === "success" ? (ae(`Branch "${D}" created`, "success"), await Y()) : ae(oe.message || "Failed to create branch", "error");
    }
    async function Dt(D) {
      $.value = null;
      const S = prompt("Enter branch name:");
      if (S) {
        const oe = ae(`Creating branch ${S}...`, "info", 0), le = await g(S, D.hash);
        Ce(oe), le.status === "success" ? (ae(`Branch "${S}" created from ${D.short_hash}`, "success"), await Y()) : ae(le.message || "Failed to create branch", "error");
      }
    }
    async function ft(D) {
      w.value = !1, R.value = D, x.value = !0;
    }
    async function Tt() {
      x.value = !1, _.value = !0, j.value = {
        progress: 10,
        state: Xe(10),
        message: Qe(10)
      };
      try {
        await k(R.value), Bt(), Vt();
      } catch (D) {
        Te(), _.value = !1, ae(`Failed to initiate switch: ${D instanceof Error ? D.message : "Unknown error"}`, "error"), j.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Xe(D) {
      return D >= 100 ? "complete" : D >= 80 ? "validating" : D >= 60 ? "starting" : D >= 30 ? "syncing" : "preparing";
    }
    function Qe(D) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Xe(D)] || "";
    }
    function Bt() {
      if (H) return;
      let D = 10;
      const S = 60, oe = 5e3, le = 100, ke = (S - D) / (oe / le);
      H = window.setInterval(() => {
        if (D += ke, D >= S && (D = S, Te()), j.value.progress < S) {
          const $e = Math.floor(D);
          j.value = {
            progress: $e,
            state: Xe($e),
            message: Qe($e)
          };
        }
      }, le);
    }
    function Te() {
      H && (clearInterval(H), H = null);
    }
    function Vt() {
      re || (re = window.setInterval(async () => {
        try {
          let D = await M.getStatus();
          if ((!D || D.state === "idle") && (D = await C()), !D)
            return;
          const S = D.progress || 0;
          S >= 60 && Te();
          const oe = Math.max(S, j.value.progress), le = D.state && D.state !== "idle" && D.state !== "unknown", ke = le ? D.state : Xe(oe), $e = le && D.message || Qe(oe);
          j.value = {
            state: ke,
            progress: oe,
            message: $e
          }, D.state === "complete" ? (Te(), at(), _.value = !1, ae(`✓ Switched to ${R.value}`, "success"), await Y(), R.value = "") : D.state === "rolled_back" ? (Te(), at(), _.value = !1, ae("Switch failed, restored previous environment", "warning"), R.value = "") : D.state === "critical_failure" && (Te(), at(), _.value = !1, ae(`Critical error during switch: ${D.message}`, "error"), R.value = "");
        } catch (D) {
          console.error("Failed to poll switch progress:", D);
        }
      }, 1e3));
    }
    function at() {
      Te(), re && (clearInterval(re), re = null);
    }
    function Ut() {
      x.value = !1, R.value = "";
    }
    async function Ot() {
      Z.value = !1, await Y(), ae("✓ Changes committed", "success");
    }
    async function Ft() {
      De.value = !1;
      const D = ae("Syncing environment...", "info", 0);
      try {
        const S = await L("skip", !0);
        if (Ce(D), S.status === "success") {
          const oe = [];
          S.nodes_installed.length && oe.push(`${S.nodes_installed.length} installed`), S.nodes_removed.length && oe.push(`${S.nodes_removed.length} removed`);
          const le = oe.length ? `: ${oe.join(", ")}` : "";
          ae(`✓ Environment synced${le}`, "success"), await Y();
        } else {
          const oe = S.errors.length ? S.errors.join("; ") : S.message;
          ae(`Sync failed: ${oe}`, "error");
        }
      } catch (S) {
        Ce(D), ae(`Sync error: ${S instanceof Error ? S.message : "Unknown error"}`, "error");
      }
    }
    async function Pt(D) {
      const S = ae(`Creating environment "${D}"...`, "info", 0);
      Ce(S), ae("Environment creation not yet implemented", "warning");
    }
    async function At(D) {
      const S = ae(`Deleting environment "${D}"...`, "info", 0);
      Ce(S), ae("Environment deletion not yet implemented", "warning");
    }
    function Wt(D) {
      ae(`Viewing details for "${D}"`, "info"), te("models-env", "this-env");
    }
    function gt() {
      if (!B.value) return [];
      const D = [], S = B.value.workflows;
      return S.new.length && D.push(`${S.new.length} new workflow(s)`), S.modified.length && D.push(`${S.modified.length} modified workflow(s)`), S.deleted.length && D.push(`${S.deleted.length} deleted workflow(s)`), D;
    }
    return ue(Y), (D, S) => {
      var oe, le, ke, $e;
      return o(), n("div", Su, [
        t("div", Iu, [
          t("div", Eu, [
            S[28] || (S[28] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            B.value ? (o(), n("div", Lu)) : d("", !0)
          ]),
          t("div", Nu, [
            t("button", {
              class: q(["icon-btn", { spinning: W.value }]),
              onClick: Y,
              title: "Refresh"
            }, [...S[29] || (S[29] = [
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
              onClick: S[0] || (S[0] = (X) => s("close")),
              title: "Close"
            }, [...S[30] || (S[30] = [
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
        t("div", Mu, [
          S[32] || (S[32] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: S[1] || (S[1] = (X) => te("environments", "all-envs"))
          }, [
            B.value ? (o(), n("div", zu, [
              t("span", null, r(((oe = U.value) == null ? void 0 : oe.name) || ((le = B.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              t("span", Ru, "(" + r(B.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            S[31] || (S[31] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Du, [
          t("div", Tu, [
            t("div", Bu, [
              S[33] || (S[33] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "status" && J.value === "this-env" }]),
                onClick: S[2] || (S[2] = (X) => te("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "workflows" }]),
                onClick: S[3] || (S[3] = (X) => te("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "models-env" }]),
                onClick: S[4] || (S[4] = (X) => te("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "branches" }]),
                onClick: S[5] || (S[5] = (X) => te("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "history" }]),
                onClick: S[6] || (S[6] = (X) => te("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "nodes" }]),
                onClick: S[7] || (S[7] = (X) => te("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "debug-env" }]),
                onClick: S[8] || (S[8] = (X) => te("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            S[36] || (S[36] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Vu, [
              S[34] || (S[34] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "environments" }]),
                onClick: S[9] || (S[9] = (X) => te("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "model-index" }]),
                onClick: S[10] || (S[10] = (X) => te("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "settings" }]),
                onClick: S[11] || (S[11] = (X) => te("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "debug-workspace" }]),
                onClick: S[12] || (S[12] = (X) => te("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            S[37] || (S[37] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Uu, [
              S[35] || (S[35] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "export" }]),
                onClick: S[13] || (S[13] = (X) => te("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "import" }]),
                onClick: S[14] || (S[14] = (X) => te("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: q(["sidebar-item", { active: E.value === "remotes" }]),
                onClick: S[15] || (S[15] = (X) => te("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", Ou, [
            b.value ? (o(), n("div", Fu, r(b.value), 1)) : !B.value && E.value === "status" ? (o(), n("div", Pu, " Loading status... ")) : (o(), n(F, { key: 2 }, [
              E.value === "status" ? (o(), y(ua, {
                key: 0,
                status: B.value,
                onSwitchBranch: Fe,
                onCommitChanges: S[16] || (S[16] = (X) => Z.value = !0),
                onSyncEnvironment: S[17] || (S[17] = (X) => De.value = !0),
                onViewWorkflows: S[18] || (S[18] = (X) => te("workflows", "this-env")),
                onViewHistory: S[19] || (S[19] = (X) => te("history", "this-env")),
                onViewDebug: S[20] || (S[20] = (X) => te("debug-env", "this-env")),
                onResolveModels: S[21] || (S[21] = (X) => te("workflows", "this-env"))
              }, null, 8, ["status"])) : E.value === "workflows" ? (o(), y(Sl, {
                key: 1,
                onRefresh: Y
              })) : E.value === "models-env" ? (o(), y(Ll, {
                key: 2,
                onNavigate: Oe
              })) : E.value === "branches" ? (o(), y(Sa, {
                key: 3,
                branches: z.value,
                current: ((ke = B.value) == null ? void 0 : ke.branch) || null,
                onSwitch: Ye,
                onCreate: Rt
              }, null, 8, ["branches", "current"])) : E.value === "history" ? (o(), y(Va, {
                key: 4,
                commits: G.value,
                onSelect: se,
                onCheckout: He
              }, null, 8, ["commits"])) : E.value === "nodes" ? (o(), y(Bl, { key: 5 })) : E.value === "debug-env" ? (o(), y(Zi, { key: 6 })) : E.value === "environments" ? (o(), y(ur, {
                key: 7,
                onSwitch: ft,
                onCreate: Pt,
                onDelete: At,
                onViewDetails: Wt
              })) : E.value === "model-index" ? (o(), y(Ml, { key: 8 })) : E.value === "settings" ? (o(), y(zi, { key: 9 })) : E.value === "debug-workspace" ? (o(), y(Yi, { key: 10 })) : E.value === "export" ? (o(), y(kr, { key: 11 })) : E.value === "import" ? (o(), y(Jc, { key: 12 })) : E.value === "remotes" ? (o(), y(gi, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        $.value ? (o(), y(vd, {
          key: 0,
          commit: $.value,
          onClose: S[22] || (S[22] = (X) => $.value = null),
          onCheckout: He,
          onCreateBranch: Dt
        }, null, 8, ["commit"])) : d("", !0),
        ce.value ? (o(), y(yd, {
          key: 1,
          title: ce.value.title,
          message: ce.value.message,
          details: ce.value.details,
          warning: ce.value.warning,
          confirmLabel: ce.value.confirmLabel,
          cancelLabel: ce.value.cancelLabel,
          secondaryLabel: ce.value.secondaryLabel,
          secondaryAction: ce.value.secondaryAction,
          destructive: ce.value.destructive,
          onConfirm: ce.value.onConfirm,
          onCancel: S[23] || (S[23] = (X) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        l(tu, {
          show: x.value,
          "from-environment": (($e = U.value) == null ? void 0 : $e.name) || "unknown",
          "to-environment": R.value,
          onConfirm: Tt,
          onClose: Ut
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Z.value && B.value ? (o(), y(Et, {
          key: 2,
          status: B.value,
          "as-modal": !0,
          onClose: S[24] || (S[24] = (X) => Z.value = !1),
          onCommitted: Ot
        }, null, 8, ["status"])) : d("", !0),
        De.value && B.value ? (o(), y(Cu, {
          key: 3,
          show: De.value,
          "mismatch-details": {
            missing_nodes: B.value.comparison.missing_nodes,
            extra_nodes: B.value.comparison.extra_nodes
          },
          onConfirm: Ft,
          onClose: S[25] || (S[25] = (X) => De.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        l(gu, {
          show: _.value,
          state: j.value.state,
          progress: j.value.progress,
          message: j.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        w.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: S[27] || (S[27] = fe((X) => w.value = !1, ["self"]))
        }, [
          t("div", Au, [
            t("div", Wu, [
              S[39] || (S[39] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: S[26] || (S[26] = (X) => w.value = !1)
              }, [...S[38] || (S[38] = [
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
            t("div", Gu, [
              S[40] || (S[40] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", Hu, [
                (o(!0), n(F, null, K(N.value, (X) => (o(), n("div", {
                  key: X.name,
                  class: q(["env-item", { current: X.is_current }])
                }, [
                  t("div", ju, [
                    t("div", qu, [
                      t("span", Ku, r(X.is_current ? "●" : "○"), 1),
                      t("span", Ju, r(X.name), 1),
                      X.current_branch ? (o(), n("span", Yu, "(" + r(X.current_branch) + ")", 1)) : d("", !0),
                      X.is_current ? (o(), n("span", Xu, "CURRENT")) : d("", !0)
                    ]),
                    t("div", Qu, r(X.workflow_count) + " workflows • " + r(X.node_count) + " nodes ", 1)
                  ]),
                  X.is_current ? d("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (gm) => ft(X.name)
                  }, " SWITCH ", 8, Zu))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        t("div", em, [
          l(qt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(F, null, K(Ne.value, (X) => (o(), n("div", {
                key: X.id,
                class: q(["toast", X.type])
              }, [
                t("span", tm, r(st(X.type)), 1),
                t("span", om, r(X.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), am = /* @__PURE__ */ A(sm, [["__scopeId", "data-v-0bc7ca73"]]), nm = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', lm = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', im = {
  comfy: nm,
  phosphor: lm
}, mt = "comfy", Lt = "comfygit-theme";
let Be = null, Nt = mt;
function rm() {
  try {
    const e = localStorage.getItem(Lt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return mt;
}
function Mt(e = mt) {
  Be && Be.remove(), Be = document.createElement("style"), Be.id = "comfygit-theme-styles", Be.setAttribute("data-theme", e), Be.textContent = im[e], document.head.appendChild(Be), document.body.setAttribute("data-comfygit-theme", e), Nt = e;
  try {
    localStorage.setItem(Lt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function cm() {
  return Nt;
}
function dm(e) {
  Mt(e);
}
const vt = document.createElement("link");
vt.rel = "stylesheet";
vt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(vt);
const um = rm();
Mt(um);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), dm(e);
  },
  getTheme: () => {
    const e = cm();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let _e = null, ye = null, Ke = null;
const We = I(null);
async function dt() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (We.value = await c.json());
  } catch {
  }
}
function mm() {
  if (!We.value) return !1;
  const e = We.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || We.value.has_changes;
}
function vm() {
  _e && _e.remove(), _e = document.createElement("div"), _e.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", _e.appendChild(e), _e.addEventListener("click", (i) => {
    i.target === _e && rt();
  });
  const c = (i) => {
    i.key === "Escape" && (rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), kt({
    render: () => $t(am, {
      onClose: rt,
      onStatusUpdate: (i) => {
        We.value = i, et();
      }
    })
  }).mount(e), document.body.appendChild(_e);
}
function rt() {
  _e && (_e.remove(), _e = null);
}
function fm(e) {
  qe(), ye = document.createElement("div"), ye.className = "comfygit-commit-popover-container";
  const c = e.getBoundingClientRect();
  ye.style.position = "fixed", ye.style.top = `${c.bottom + 8}px`, ye.style.right = `${window.innerWidth - c.right}px`, ye.style.zIndex = "10001";
  const s = (u) => {
    ye && !ye.contains(u.target) && u.target !== e && (qe(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (u) => {
    u.key === "Escape" && (qe(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ke = kt({
    render: () => $t(Et, {
      status: We.value,
      onClose: qe,
      onCommitted: () => {
        qe(), dt().then(et);
      }
    })
  }), Ke.mount(ye), document.body.appendChild(ye);
}
function qe() {
  Ke && (Ke.unmount(), Ke = null), ye && (ye.remove(), ye = null);
}
let xe = null;
function et() {
  if (!xe) return;
  const e = xe.querySelector(".commit-indicator");
  e && (e.style.display = mm() ? "block" : "none");
}
const zt = document.createElement("style");
zt.textContent = `
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
document.head.appendChild(zt);
nt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = vm, xe = document.createElement("button"), xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", xe.innerHTML = 'Commit <span class="commit-indicator"></span>', xe.title = "Quick Commit", xe.onclick = () => fm(xe), e.appendChild(c), e.appendChild(xe), (i = (s = nt.menu) == null ? void 0 : s.settingsGroup) != null && i.element && (nt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await dt(), et(), setInterval(async () => {
      await dt(), et();
    }, 3e4);
  }
});
