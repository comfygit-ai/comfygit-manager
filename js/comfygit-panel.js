import { app as nt } from "../../scripts/app.js";
import { defineComponent as A, createElementBlock as n, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as te, createBlock as w, resolveDynamicComponent as ut, normalizeClass as K, withCtx as s, toDisplayString as r, createVNode as l, createTextVNode as v, computed as H, Fragment as P, renderList as J, normalizeStyle as Je, ref as x, onMounted as me, watch as wt, Teleport as Re, withModifiers as fe, Transition as Ft, withKeys as Se, onUnmounted as At, resolveComponent as Wt, createSlots as bt, TransitionGroup as Ht, createApp as kt, h as $t } from "vue";
const Gt = { class: "panel-layout" }, jt = {
  key: 0,
  class: "panel-layout-header"
}, qt = {
  key: 1,
  class: "panel-layout-search"
}, Kt = { class: "panel-layout-content" }, Jt = {
  key: 2,
  class: "panel-layout-footer"
}, Yt = /* @__PURE__ */ A({
  __name: "PanelLayout",
  setup(t) {
    return (c, a) => (o(), n("div", Gt, [
      c.$slots.header ? (o(), n("div", jt, [
        te(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (o(), n("div", qt, [
        te(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Kt, [
        te(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", Jt, [
        te(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), W = (t, c) => {
  const a = t.__vccOpts || t;
  for (const [i, u] of c)
    a[i] = u;
  return a;
}, ge = /* @__PURE__ */ W(Yt, [["__scopeId", "data-v-21565df9"]]), Xt = {
  key: 0,
  class: "panel-title-prefix"
}, Qt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Zt = /* @__PURE__ */ A({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, a) => (o(), w(ut(`h${t.level}`), {
      class: K(["panel-title", t.variant])
    }, {
      default: s(() => [
        t.showPrefix ? (o(), n("span", Xt, r(t.prefix), 1)) : (o(), n("span", Qt)),
        te(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), eo = /* @__PURE__ */ W(Zt, [["__scopeId", "data-v-c3875efc"]]), to = ["title"], oo = ["width", "height"], so = /* @__PURE__ */ A({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, a) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (i) => c.$emit("click"))
    }, [
      (o(), n("svg", {
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
      ])], 8, oo))
    ], 8, to));
  }
}), Ct = /* @__PURE__ */ W(so, [["__scopeId", "data-v-6fc7f16d"]]), ao = { class: "header-left" }, no = {
  key: 0,
  class: "header-actions"
}, lo = /* @__PURE__ */ A({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, a) => (o(), n("div", {
      class: K(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", ao, [
        l(eo, { "show-prefix": t.showPrefix }, {
          default: s(() => [
            v(r(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), w(Ct, {
          key: 0,
          onClick: a[0] || (a[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", no, [
        te(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ W(lo, [["__scopeId", "data-v-55a62cd6"]]), io = {
  key: 0,
  class: "section-title-count"
}, ro = {
  key: 1,
  class: "section-title-icon"
}, co = /* @__PURE__ */ A({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, a) => (o(), w(ut(`h${t.level}`), {
      class: K(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: s(() => [
        te(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", io, "(" + r(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), n("span", ro, r(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), we = /* @__PURE__ */ W(co, [["__scopeId", "data-v-559361eb"]]), uo = { class: "status-grid" }, mo = { class: "status-grid__column" }, vo = { class: "status-grid__title" }, fo = { class: "status-grid__column status-grid__column--right" }, go = { class: "status-grid__title" }, ho = /* @__PURE__ */ A({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, a) => (o(), n("div", uo, [
      e("div", mo, [
        e("h4", vo, r(t.leftTitle), 1),
        te(c.$slots, "left", {}, void 0, !0)
      ]),
      e("div", fo, [
        e("h4", go, r(t.rightTitle), 1),
        te(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), po = /* @__PURE__ */ W(ho, [["__scopeId", "data-v-fe556068"]]), yo = {
  key: 0,
  class: "status-item__icon"
}, wo = {
  key: 1,
  class: "status-item__count"
}, bo = { class: "status-item__label" }, ko = /* @__PURE__ */ A({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, a = H(() => `status-item--${c.variant}`);
    return (i, u) => (o(), n("div", {
      class: K(["status-item", a.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", yo, r(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), n("span", wo, r(t.count), 1)) : d("", !0),
      e("span", bo, r(t.label), 1)
    ], 2));
  }
}), Me = /* @__PURE__ */ W(ko, [["__scopeId", "data-v-6f929183"]]), $o = { class: "issue-card__header" }, Co = { class: "issue-card__icon" }, _o = { class: "issue-card__title" }, xo = {
  key: 0,
  class: "issue-card__content"
}, So = {
  key: 0,
  class: "issue-card__description"
}, Eo = {
  key: 1,
  class: "issue-card__items"
}, Io = {
  key: 2,
  class: "issue-card__actions"
}, Lo = /* @__PURE__ */ A({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, a = H(() => `issue-card--${c.severity}`);
    return (i, u) => (o(), n("div", {
      class: K(["issue-card", a.value])
    }, [
      e("div", $o, [
        e("span", Co, r(t.icon), 1),
        e("h4", _o, r(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", xo, [
        t.description ? (o(), n("p", So, r(t.description), 1)) : d("", !0),
        te(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), n("div", Eo, [
        (o(!0), n(P, null, J(t.items, (y, m) => (o(), n("div", {
          key: m,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, r(y), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (o(), n("div", Io, [
        te(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ W(Lo, [["__scopeId", "data-v-df6aa348"]]), zo = ["type", "disabled"], Mo = {
  key: 0,
  class: "spinner"
}, No = /* @__PURE__ */ A({
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
    return (c, a) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: K(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Mo)) : d("", !0),
      t.loading ? d("", !0) : te(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, zo));
  }
}), R = /* @__PURE__ */ W(No, [["__scopeId", "data-v-772abe47"]]), Do = { class: "empty-state" }, To = {
  key: 0,
  class: "empty-icon"
}, Vo = { class: "empty-message" }, Bo = /* @__PURE__ */ A({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, a) => (o(), n("div", Do, [
      t.icon ? (o(), n("div", To, r(t.icon), 1)) : d("", !0),
      e("p", Vo, r(t.message), 1),
      t.actionLabel ? (o(), w(R, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (i) => c.$emit("action"))
      }, {
        default: s(() => [
          v(r(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ W(Bo, [["__scopeId", "data-v-4466284f"]]), Ro = { class: "branch-indicator" }, Uo = { class: "branch-indicator__info" }, Oo = { class: "branch-indicator__label" }, Po = { class: "branch-indicator__name" }, Fo = {
  key: 0,
  class: "branch-indicator__remote"
}, Ao = {
  key: 0,
  class: "branch-indicator__status"
}, Wo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Ho = {
  key: 1,
  class: "branch-indicator__behind"
}, Go = {
  key: 1,
  class: "branch-indicator__actions"
}, jo = /* @__PURE__ */ A({
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
    return (c, a) => (o(), n("div", Ro, [
      e("div", Uo, [
        e("span", Oo, r(t.label), 1),
        e("span", Po, r(t.branchName), 1),
        t.remote ? (o(), n("span", Fo, "@" + r(t.remote), 1)) : d("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", Ao, [
        t.commitsAhead ? (o(), n("span", Wo, " ↑ " + r(t.commitsAhead) + " ahead ", 1)) : d("", !0),
        t.commitsBehind ? (o(), n("span", Ho, " ↓ " + r(t.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      c.$slots.actions ? (o(), n("div", Go, [
        te(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), qo = /* @__PURE__ */ W(jo, [["__scopeId", "data-v-cb8dd50e"]]), Ko = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, a) => (o(), n("span", {
      class: K(["detail-label"]),
      style: Je({ minWidth: t.minWidth })
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ct = /* @__PURE__ */ W(Ko, [["__scopeId", "data-v-75e9eeb8"]]), Jo = /* @__PURE__ */ A({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, a) => (o(), n("span", {
      class: K(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ W(Jo, [["__scopeId", "data-v-2f186e4c"]]), Yo = { class: "detail-row" }, Xo = /* @__PURE__ */ A({
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
    return (c, a) => (o(), n("div", Yo, [
      l(ct, { "min-width": t.labelMinWidth }, {
        default: s(() => [
          v(r(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), w(Pe, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: s(() => [
          v(r(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : te(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Z = /* @__PURE__ */ W(Xo, [["__scopeId", "data-v-ef15664a"]]), Qo = { class: "modal-header" }, Zo = { class: "modal-body" }, es = { class: "status-section" }, ts = {
  key: 0,
  class: "status-section"
}, os = {
  key: 0,
  class: "workflow-group"
}, ss = { class: "workflow-group-header" }, as = { class: "workflow-group-title" }, ns = { class: "workflow-list" }, ls = { class: "workflow-name" }, is = {
  key: 1,
  class: "workflow-group"
}, rs = { class: "workflow-group-header" }, cs = { class: "workflow-group-title" }, ds = { class: "workflow-list" }, us = { class: "workflow-name" }, ms = {
  key: 2,
  class: "workflow-group"
}, vs = { class: "workflow-group-header" }, fs = { class: "workflow-group-title" }, gs = { class: "workflow-list" }, hs = { class: "workflow-name" }, ps = {
  key: 3,
  class: "workflow-group"
}, ys = { class: "workflow-group-title" }, ws = { class: "expand-icon" }, bs = {
  key: 0,
  class: "workflow-list"
}, ks = { class: "workflow-name" }, $s = {
  key: 1,
  class: "status-section"
}, Cs = {
  key: 0,
  class: "change-group"
}, _s = { class: "change-group-header" }, xs = { class: "change-group-title" }, Ss = { class: "change-list" }, Es = { class: "node-name" }, Is = {
  key: 0,
  class: "dev-badge"
}, Ls = {
  key: 1,
  class: "change-group"
}, zs = { class: "change-group-header" }, Ms = { class: "change-group-title" }, Ns = { class: "change-list" }, Ds = { class: "node-name" }, Ts = {
  key: 0,
  class: "dev-badge"
}, Vs = {
  key: 2,
  class: "change-group"
}, Bs = { class: "change-list" }, Rs = { class: "change-item" }, Us = { class: "node-name" }, Os = {
  key: 3,
  class: "change-group"
}, Ps = {
  key: 2,
  class: "status-section"
}, Fs = {
  key: 0,
  class: "drift-item"
}, As = { class: "drift-list" }, Ws = {
  key: 0,
  class: "drift-list-more"
}, Hs = {
  key: 1,
  class: "drift-item"
}, Gs = { class: "drift-list" }, js = {
  key: 0,
  class: "drift-list-more"
}, qs = {
  key: 2,
  class: "drift-item"
}, Ks = {
  key: 3,
  class: "drift-item"
}, Js = {
  key: 3,
  class: "status-section"
}, Ys = { class: "info-box" }, Xs = { class: "drift-list" }, Qs = {
  key: 0,
  class: "drift-list-more"
}, Zs = {
  key: 4,
  class: "status-section"
}, ea = { class: "warning-box" }, ta = {
  key: 5,
  class: "empty-state-inline"
}, oa = { class: "modal-actions" }, sa = /* @__PURE__ */ A({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, a = x(!1);
    me(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), wt(() => c.show, (h, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", h);
    }, { immediate: !0 });
    const i = H(() => {
      var h, p, b, C, z;
      return (h = c.status) != null && h.workflows ? (((p = c.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((b = c.status.workflows.modified) == null ? void 0 : b.length) ?? 0) > 0 || (((C = c.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((z = c.status.workflows.synced) == null ? void 0 : z.length) ?? 0) > 0 : !1;
    }), u = H(() => {
      var p, b, C;
      const h = (p = c.status) == null ? void 0 : p.git_changes;
      return h ? (((b = h.nodes_added) == null ? void 0 : b.length) ?? 0) > 0 || (((C = h.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || h.workflow_changes || h.has_other_changes : !1;
    }), y = H(() => {
      var h, p, b, C, z, V;
      return !i.value && !u.value && ((p = (h = c.status) == null ? void 0 : h.comparison) == null ? void 0 : p.is_synced) && (((b = c.status) == null ? void 0 : b.missing_models_count) ?? 0) === 0 && (((V = (z = (C = c.status) == null ? void 0 : C.comparison) == null ? void 0 : z.disabled_nodes) == null ? void 0 : V.length) ?? 0) === 0;
    }), m = H(() => {
      var p, b;
      const h = (b = (p = c.status) == null ? void 0 : p.git_changes) == null ? void 0 : b.workflow_changes;
      return h ? typeof h == "number" ? h : Object.keys(h).length : 0;
    });
    function g(h) {
      return typeof h == "string" ? h : h.name;
    }
    function f(h) {
      return typeof h == "object" && h.is_development === !0;
    }
    return (h, p) => {
      var b, C, z, V, G, T, D, F, q, M, I, k, S, _, L, N, j, U, E, Y, oe, Ue, Oe, ce;
      return o(), w(Re, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[4] || (p[4] = (ee) => h.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: p[3] || (p[3] = fe(() => {
            }, ["stop"]))
          }, [
            e("div", Qo, [
              p[5] || (p[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ee) => h.$emit("close"))
              }, "✕")
            ]),
            e("div", Zo, [
              e("div", es, [
                l(we, { level: "4" }, {
                  default: s(() => [...p[6] || (p[6] = [
                    v("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                l(Z, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              i.value ? (o(), n("div", ts, [
                l(we, { level: "4" }, {
                  default: s(() => [...p[7] || (p[7] = [
                    v("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                (C = (b = t.status.workflows) == null ? void 0 : b.new) != null && C.length ? (o(), n("div", os, [
                  e("div", ss, [
                    p[8] || (p[8] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", as, "NEW (" + r(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", ns, [
                    (o(!0), n(P, null, J(t.status.workflows.new, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", ls, r(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (V = (z = t.status.workflows) == null ? void 0 : z.modified) != null && V.length ? (o(), n("div", is, [
                  e("div", rs, [
                    p[9] || (p[9] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", cs, "MODIFIED (" + r(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", ds, [
                    (o(!0), n(P, null, J(t.status.workflows.modified, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", us, r(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (T = (G = t.status.workflows) == null ? void 0 : G.deleted) != null && T.length ? (o(), n("div", ms, [
                  e("div", vs, [
                    p[10] || (p[10] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", fs, "DELETED (" + r(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", gs, [
                    (o(!0), n(P, null, J(t.status.workflows.deleted, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", hs, r(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (F = (D = t.status.workflows) == null ? void 0 : D.synced) != null && F.length ? (o(), n("div", ps, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[1] || (p[1] = (ee) => a.value = !a.value)
                  }, [
                    p[11] || (p[11] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ys, "SYNCED (" + r(t.status.workflows.synced.length) + ")", 1),
                    e("span", ws, r(a.value ? "▼" : "▶"), 1)
                  ]),
                  a.value ? (o(), n("div", bs, [
                    (o(!0), n(P, null, J(t.status.workflows.synced, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", ks, r(ee), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (o(), n("div", $s, [
                l(we, { level: "4" }, {
                  default: s(() => [...p[12] || (p[12] = [
                    v("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (q = t.status.git_changes) == null ? void 0 : q.nodes_added) != null && M.length ? (o(), n("div", Cs, [
                  e("div", _s, [
                    p[13] || (p[13] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", xs, "NODES ADDED (" + r(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), n(P, null, J(t.status.git_changes.nodes_added, (ee) => (o(), n("div", {
                      key: g(ee),
                      class: "change-item"
                    }, [
                      e("span", Es, r(g(ee)), 1),
                      f(ee) ? (o(), n("span", Is, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (k = (I = t.status.git_changes) == null ? void 0 : I.nodes_removed) != null && k.length ? (o(), n("div", Ls, [
                  e("div", zs, [
                    p[14] || (p[14] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ms, "NODES REMOVED (" + r(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), n(P, null, J(t.status.git_changes.nodes_removed, (ee) => (o(), n("div", {
                      key: g(ee),
                      class: "change-item"
                    }, [
                      e("span", Ds, r(g(ee)), 1),
                      f(ee) ? (o(), n("span", Ts, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (S = t.status.git_changes) != null && S.workflow_changes ? (o(), n("div", Vs, [
                  p[15] || (p[15] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Bs, [
                    e("div", Rs, [
                      e("span", Us, r(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (_ = t.status.git_changes) != null && _.has_other_changes ? (o(), n("div", Os, [...p[16] || (p[16] = [
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
              (L = t.status.comparison) != null && L.is_synced ? d("", !0) : (o(), n("div", Ps, [
                l(we, { level: "4" }, {
                  default: s(() => [...p[17] || (p[17] = [
                    v("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                p[18] || (p[18] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (j = (N = t.status.comparison) == null ? void 0 : N.missing_nodes) != null && j.length ? (o(), n("div", Fs, [
                  l(Z, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", As, [
                    (o(!0), n(P, null, J(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), n("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + r(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", Ws, " ... and " + r(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (E = (U = t.status.comparison) == null ? void 0 : U.extra_nodes) != null && E.length ? (o(), n("div", Hs, [
                  l(Z, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Gs, [
                    (o(!0), n(P, null, J(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), n("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + r(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", js, " ... and " + r(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (oe = (Y = t.status.comparison) == null ? void 0 : Y.version_mismatches) != null && oe.length ? (o(), n("div", qs, [
                  l(Z, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (Ue = t.status.comparison) != null && Ue.packages_in_sync ? d("", !0) : (o(), n("div", Ks, [
                  l(Z, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ce = (Oe = t.status.comparison) == null ? void 0 : Oe.disabled_nodes) != null && ce.length ? (o(), n("div", Js, [
                l(we, { level: "4" }, {
                  default: s(() => [...p[19] || (p[19] = [
                    v("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ys, [
                  p[20] || (p[20] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, r(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Xs, [
                  (o(!0), n(P, null, J(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), n("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + r(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Qs, " ... and " + r(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Zs, [
                l(we, { level: "4" }, {
                  default: s(() => [...p[21] || (p[21] = [
                    v("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ea, [
                  p[22] || (p[22] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, r(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[23] || (p[23] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              y.value ? (o(), n("div", ta, [...p[24] || (p[24] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", oa, [
              l(R, {
                variant: "secondary",
                onClick: p[2] || (p[2] = (ee) => h.$emit("close"))
              }, {
                default: s(() => [...p[25] || (p[25] = [
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
}), ht = /* @__PURE__ */ W(sa, [["__scopeId", "data-v-19585c5b"]]), aa = { class: "health-section-header" }, na = { style: { "margin-top": "var(--cg-space-1)" } }, la = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, ia = /* @__PURE__ */ A({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(t, { emit: c }) {
    const a = t, i = x(!1), u = x(!1);
    me(() => {
      console.log("StatusSection mounted with status:", a.status), console.log("StatusDetailModal component imported:", ht);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const g = H(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), f = H(() => {
      const C = a.status.git_changes;
      return C.nodes_added.length > 0 || C.nodes_removed.length > 0 || C.workflow_changes || C.has_other_changes;
    }), h = H(() => a.status.git_changes.has_other_changes), p = H(() => a.status.missing_models_count > 0 || f.value || !a.status.comparison.is_synced), b = H(() => {
      const C = [];
      return a.status.workflows.new.length > 0 && C.push(`${a.status.workflows.new.length} new workflow${a.status.workflows.new.length === 1 ? "" : "s"}`), a.status.workflows.modified.length > 0 && C.push(`${a.status.workflows.modified.length} modified workflow${a.status.workflows.modified.length === 1 ? "" : "s"}`), a.status.workflows.deleted.length > 0 && C.push(`${a.status.workflows.deleted.length} deleted workflow${a.status.workflows.deleted.length === 1 ? "" : "s"}`), a.status.git_changes.nodes_added.length > 0 && C.push(`${a.status.git_changes.nodes_added.length} node${a.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), a.status.git_changes.nodes_removed.length > 0 && C.push(`${a.status.git_changes.nodes_removed.length} node${a.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${C.length > 0 ? C.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (C, z) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, { title: "STATUS" })
        ]),
        content: s(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: z[0] || (z[0] = (V) => u.value = !0),
            onMouseleave: z[1] || (z[1] = (V) => u.value = !1)
          }, [
            e("div", aa, [
              l(we, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: s(() => [...z[9] || (z[9] = [
                  v(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              l(Ft, { name: "fade" }, {
                default: s(() => [
                  u.value ? (o(), w(R, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: s(() => [...z[10] || (z[10] = [
                      v(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            l(po, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: s(() => [
                t.status.workflows.new.length ? (o(), w(Me, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), w(Me, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), w(Me, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                l(Me, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: g.value
                }, null, 8, ["count", "separator"])
              ]),
              right: s(() => [
                t.status.git_changes.nodes_added.length ? (o(), w(Me, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), w(Me, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                h.value ? (o(), w(Me, {
                  key: 2,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                f.value ? d("", !0) : (o(), w(Me, {
                  key: 3,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", na, [
            l(qo, {
              "branch-name": t.status.current_branch || "main"
            }, {
              actions: s(() => [
                l(R, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[2] || (z[2] = (V) => C.$emit("switch-branch"))
                }, {
                  default: s(() => [...z[11] || (z[11] = [
                    v(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          p.value ? (o(), n("div", la, [
            l(we, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: s(() => [...z[12] || (z[12] = [
                v(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            t.status.missing_models_count > 0 ? (o(), w(Ze, {
              key: 0,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: s(() => [
                l(R, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[3] || (z[3] = (V) => C.$emit("view-workflows"))
                }, {
                  default: s(() => [...z[13] || (z[13] = [
                    v(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                l(R, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[4] || (z[4] = (V) => C.$emit("resolve-models"))
                }, {
                  default: s(() => [...z[14] || (z[14] = [
                    v(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            f.value ? (o(), w(Ze, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: "You have unsaved changes",
              description: b.value
            }, {
              actions: s(() => [
                l(R, {
                  variant: "secondary",
                  size: "sm",
                  onClick: m
                }, {
                  default: s(() => [...z[15] || (z[15] = [
                    v(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                l(R, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[5] || (z[5] = (V) => C.$emit("commit-changes"))
                }, {
                  default: s(() => [...z[16] || (z[16] = [
                    v(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), w(Ze, {
              key: 2,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: s(() => [
                l(R, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[6] || (z[6] = (V) => C.$emit("view-debug"))
                }, {
                  default: s(() => [...z[17] || (z[17] = [
                    v(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                l(R, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[7] || (z[7] = (V) => C.$emit("sync-environment"))
                }, {
                  default: s(() => [...z[18] || (z[18] = [
                    v(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : d("", !0),
          !p.value && !f.value ? (o(), w(Ce, {
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
        status: t.status,
        onClose: z[8] || (z[8] = (V) => i.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ra = /* @__PURE__ */ W(ia, [["__scopeId", "data-v-d5c467d9"]]), ca = ["type", "value", "placeholder", "disabled"], da = /* @__PURE__ */ A({
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
  setup(t, { expose: c, emit: a }) {
    const i = t, u = a, y = x(null);
    function m(g) {
      const f = g.target.value;
      u("update:modelValue", f);
    }
    return me(() => {
      i.autoFocus && y.value && y.value.focus();
    }), c({
      focus: () => {
        var g;
        return (g = y.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = y.value) == null ? void 0 : g.blur();
      }
    }), (g, f) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: K(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        f[0] || (f[0] = Se((h) => g.$emit("enter"), ["enter"])),
        f[1] || (f[1] = Se((h) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: f[2] || (f[2] = (h) => g.$emit("focus")),
      onBlur: f[3] || (f[3] = (h) => g.$emit("blur"))
    }, null, 42, ca));
  }
}), Fe = /* @__PURE__ */ W(da, [["__scopeId", "data-v-0380d08f"]]), ua = { class: "branch-create-form" }, ma = { class: "form-actions" }, va = /* @__PURE__ */ A({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const a = c, i = x(""), u = H(() => {
      const g = i.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function y() {
      u.value && (a("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", a("cancel");
    }
    return (g, f) => (o(), n("div", ua, [
      l(Fe, {
        modelValue: i.value,
        "onUpdate:modelValue": f[0] || (f[0] = (h) => i.value = h),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", ma, [
        l(R, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: y
        }, {
          default: s(() => [...f[1] || (f[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(R, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: s(() => [...f[2] || (f[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), fa = /* @__PURE__ */ W(va, [["__scopeId", "data-v-7c500394"]]), ga = { class: "branch-list-item__indicator" }, ha = { class: "branch-list-item__name" }, pa = {
  key: 0,
  class: "branch-list-item__actions"
}, ya = {
  key: 0,
  class: "branch-list-item__current-label"
}, wa = /* @__PURE__ */ A({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, a) => (o(), n("div", {
      class: K(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", ga, r(t.isCurrent ? "●" : "○"), 1),
      e("span", ha, r(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), n("div", pa, [
        te(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", ya, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), ba = /* @__PURE__ */ W(wa, [["__scopeId", "data-v-c6581a24"]]), ka = {
  key: 2,
  class: "branch-list"
}, $a = /* @__PURE__ */ A({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const a = c, i = x(!1);
    function u(m) {
      a("create", m), y();
    }
    function y() {
      i.value = !1;
    }
    return (m, g) => (o(), w(ge, null, {
      header: s(() => [
        l(he, { title: "BRANCHES" }, {
          actions: s(() => [
            l(R, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (f) => i.value = !0),
              title: "Create new branch"
            }, {
              default: s(() => [...g[1] || (g[1] = [
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
      content: s(() => [
        i.value ? (o(), w(fa, {
          key: 0,
          onCreate: u,
          onCancel: y
        })) : d("", !0),
        t.branches.length === 0 ? (o(), w(Ce, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", ka, [
          (o(!0), n(P, null, J(t.branches, (f) => (o(), w(ba, {
            key: f.name,
            "branch-name": f.name,
            "is-current": f.is_current
          }, {
            actions: s(() => [
              f.is_current ? d("", !0) : (o(), w(R, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (h) => m.$emit("switch", f.name)
              }, {
                default: s(() => [...g[2] || (g[2] = [
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
}), Ca = /* @__PURE__ */ W($a, [["__scopeId", "data-v-763d6ec4"]]), _a = { class: "commit-list" }, xa = /* @__PURE__ */ A({
  __name: "CommitList",
  setup(t) {
    return (c, a) => (o(), n("div", _a, [
      te(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Sa = /* @__PURE__ */ W(xa, [["__scopeId", "data-v-8c5ee761"]]), Ea = { class: "commit-hash" }, Ia = /* @__PURE__ */ A({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, a = H(() => c.hash.slice(0, c.length));
    return (i, u) => (o(), n("span", Ea, r(a.value), 1));
  }
}), _t = /* @__PURE__ */ W(Ia, [["__scopeId", "data-v-7c333cc6"]]), La = { class: "commit-message" }, za = { class: "commit-date" }, Ma = /* @__PURE__ */ A({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const a = t, i = c;
    function u() {
      a.clickable && i("click");
    }
    return (y, m) => (o(), n("div", {
      class: K(["commit-item", { clickable: t.clickable }]),
      onClick: u
    }, [
      l(_t, { hash: t.hash }, null, 8, ["hash"]),
      e("span", La, r(t.message), 1),
      e("span", za, r(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = fe(() => {
        }, ["stop"]))
      }, [
        te(y.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Na = /* @__PURE__ */ W(Ma, [["__scopeId", "data-v-dd7c621b"]]), Da = /* @__PURE__ */ A({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, a) => (o(), w(ge, null, {
      header: s(() => [
        l(he, { title: "HISTORY" })
      ]),
      content: s(() => [
        t.commits.length === 0 ? (o(), w(Ce, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), w(Sa, { key: 1 }, {
          default: s(() => [
            (o(!0), n(P, null, J(t.commits, (i) => (o(), w(Na, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (u) => c.$emit("select", i)
            }, {
              actions: s(() => [
                l(R, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => c.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: s(() => [...a[0] || (a[0] = [
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
}), Ta = /* @__PURE__ */ W(Da, [["__scopeId", "data-v-981c3c64"]]);
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
const Va = [
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
  ...Va,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() - 6e4).toISOString(), new Date(Date.now() - 12e4).toISOString(), new Date(Date.now() - 18e4).toISOString();
function pe() {
  const t = x(!1), c = x(null);
  async function a(O, X) {
    var Ge;
    if (!((Ge = window.app) != null && Ge.api))
      throw new Error("ComfyUI API not available");
    const ae = await window.app.api.fetchApi(O, X);
    if (!ae.ok) {
      const Ye = await ae.json().catch(() => ({}));
      throw new Error(Ye.error || Ye.message || `Request failed: ${ae.status}`);
    }
    return ae.json();
  }
  async function i() {
    return a("/v2/comfygit/status");
  }
  async function u(O, X = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: O, allow_issues: X })
    });
  }
  async function y(O = 10, X = 0) {
    return a(`/v2/comfygit/log?limit=${O}&offset=${X}`);
  }
  async function m(O) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: O })
    });
  }
  async function g() {
    return a("/v2/comfygit/branches");
  }
  async function f(O) {
    return a(`/v2/comfygit/commit/${O}`);
  }
  async function h(O, X = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: O, force: X })
    });
  }
  async function p(O, X = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: O, start_point: X })
    });
  }
  async function b(O, X = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: O, force: X })
    });
  }
  async function C() {
    try {
      return (await a("/v2/comfygit/environments")).environments;
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
  async function z(O) {
    return a("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: O })
    });
  }
  async function V() {
    try {
      return a("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function G(O, X, ae) {
    return a("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: O, pytorch_backend: X, clone_from: ae })
    });
  }
  async function T(O) {
    return a(`/v2/workspace/environments/${O}`, {
      method: "DELETE"
    });
  }
  async function D() {
    try {
      return a("/v2/comfygit/workflows");
    } catch {
      const O = await i(), X = [];
      return O.workflows.new.forEach((ae) => {
        X.push({ name: ae, status: "new", missing_nodes: 0, missing_models: 0, path: ae });
      }), O.workflows.modified.forEach((ae) => {
        X.push({ name: ae, status: "modified", missing_nodes: 0, missing_models: 0, path: ae });
      }), O.workflows.synced.forEach((ae) => {
        X.push({ name: ae, status: "synced", missing_nodes: 0, missing_models: 0, path: ae });
      }), X;
    }
  }
  async function F(O) {
    return a(`/v2/comfygit/workflow/${encodeURIComponent(O)}/details`);
  }
  async function q(O) {
    return a(`/v2/comfygit/workflow/${encodeURIComponent(O)}/resolve`, {
      method: "POST"
    });
  }
  async function M(O, X, ae) {
    return a(`/v2/comfygit/workflow/${encodeURIComponent(O)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: X, install_models: ae })
    });
  }
  async function I(O, X, ae) {
    return a(`/v2/comfygit/workflow/${encodeURIComponent(O)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: X, importance: ae })
    });
  }
  async function k() {
    try {
      return a("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function S() {
    try {
      return a("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function _(O, X) {
    return a(`/v2/workspace/models/${O}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: X })
    });
  }
  async function L(O) {
    return a(`/v2/workspace/models/${O}`, {
      method: "DELETE"
    });
  }
  async function N(O) {
    return a("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(O)
    });
  }
  async function j() {
    try {
      return a("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function U(O) {
    return a("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(O)
    });
  }
  async function E(O, X) {
    try {
      const ae = new URLSearchParams();
      return O && ae.append("level", O), X && ae.append("lines", X.toString()), a(`/v2/comfygit/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function Y(O, X) {
    try {
      const ae = new URLSearchParams();
      return O && ae.append("level", O), X && ae.append("lines", X.toString()), a(`/v2/workspace/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function oe() {
    try {
      return a("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function Ue(O) {
    return a(`/v2/comfygit/nodes/${encodeURIComponent(O)}/install`, {
      method: "POST"
    });
  }
  async function Oe(O) {
    return a(`/v2/comfygit/nodes/${encodeURIComponent(O)}/update`, {
      method: "POST"
    });
  }
  async function ce(O) {
    return a(`/v2/comfygit/nodes/${encodeURIComponent(O)}`, {
      method: "DELETE"
    });
  }
  async function ee() {
    try {
      return a("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function De(O, X) {
    return a("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: O, url: X })
    });
  }
  async function ze(O) {
    return a(`/v2/comfygit/remotes/${encodeURIComponent(O)}`, {
      method: "DELETE"
    });
  }
  async function ot(O, X, ae) {
    return a(`/v2/comfygit/remotes/${encodeURIComponent(O)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: X, push_url: ae })
    });
  }
  async function ne(O) {
    return a(`/v2/comfygit/remotes/${encodeURIComponent(O)}/fetch`, {
      method: "POST"
    });
  }
  async function _e(O) {
    try {
      return a(`/v2/comfygit/remotes/${encodeURIComponent(O)}/status`);
    } catch {
      return null;
    }
  }
  async function st(O = "skip", X = !0) {
    return a("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: O,
        remove_extra_nodes: X
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: u,
    getHistory: y,
    exportEnv: m,
    // Git Operations
    getBranches: g,
    getCommitDetail: f,
    checkout: h,
    createBranch: p,
    switchBranch: b,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: z,
    getSwitchProgress: V,
    createEnvironment: G,
    deleteEnvironment: T,
    // Workflow Management
    getWorkflows: D,
    getWorkflowDetails: F,
    resolveWorkflow: q,
    installWorkflowDeps: M,
    setModelImportance: I,
    // Model Management
    getEnvironmentModels: k,
    getWorkspaceModels: S,
    updateModelSource: _,
    deleteModel: L,
    downloadModel: N,
    // Settings
    getConfig: j,
    updateConfig: U,
    // Debug/Logs
    getEnvironmentLogs: E,
    getWorkspaceLogs: Y,
    // Node Management
    getNodes: oe,
    installNode: Ue,
    updateNode: Oe,
    uninstallNode: ce,
    // Git Remotes
    getRemotes: ee,
    addRemote: De,
    removeRemote: ze,
    updateRemoteUrl: ot,
    fetchRemote: ne,
    getRemoteSyncStatus: _e,
    // Environment Sync
    syncEnvironmentManually: st
  };
}
const Ba = { class: "base-modal-header" }, Ra = {
  key: 0,
  class: "base-modal-title"
}, Ua = { class: "base-modal-body" }, Oa = {
  key: 0,
  class: "base-modal-loading"
}, Pa = {
  key: 1,
  class: "base-modal-error"
}, Fa = {
  key: 0,
  class: "base-modal-footer"
}, Aa = /* @__PURE__ */ A({
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
    const a = t, i = c;
    function u() {
      a.closeOnOverlayClick && i("close");
    }
    function y(m) {
      m.key === "Escape" && i("close");
    }
    return me(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), At(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (m, g) => (o(), w(Re, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        e("div", {
          class: K(["base-modal-content", t.size]),
          onClick: g[1] || (g[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Ba, [
            te(m.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", Ra, r(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (f) => m.$emit("close"))
            }, [...g[2] || (g[2] = [
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
          e("div", Ua, [
            t.loading ? (o(), n("div", Oa, "Loading...")) : t.error ? (o(), n("div", Pa, r(t.error), 1)) : te(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), n("div", Fa, [
            te(m.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ W(Aa, [["__scopeId", "data-v-700d367b"]]), Wa = ["type", "disabled"], Ha = {
  key: 0,
  class: "spinner"
}, Ga = /* @__PURE__ */ A({
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
    return (c, a) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: K(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Ha)) : d("", !0),
      te(c.$slots, "default", {}, void 0, !0)
    ], 10, Wa));
  }
}), de = /* @__PURE__ */ W(Ga, [["__scopeId", "data-v-f3452606"]]), ja = {
  key: 0,
  class: "base-title-count"
}, qa = /* @__PURE__ */ A({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, a) => (o(), w(ut(`h${t.level}`), {
      class: K(["base-title", t.variant])
    }, {
      default: s(() => [
        te(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", ja, "(" + r(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ne = /* @__PURE__ */ W(qa, [["__scopeId", "data-v-5a01561d"]]), Ka = ["value", "disabled"], Ja = {
  key: 0,
  value: "",
  disabled: ""
}, Ya = ["value"], Xa = {
  key: 0,
  class: "base-select-error"
}, Qa = /* @__PURE__ */ A({
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
    function a(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, u) => (o(), n("div", {
      class: K(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: K(["base-select", { error: !!t.error }]),
        onChange: u[0] || (u[0] = (y) => i.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ja, r(t.placeholder), 1)) : d("", !0),
        (o(!0), n(P, null, J(t.options, (y) => (o(), n("option", {
          key: c(y),
          value: c(y)
        }, r(a(y)), 9, Ya))), 128))
      ], 42, Ka),
      t.error ? (o(), n("span", Xa, r(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ W(Qa, [["__scopeId", "data-v-7436d745"]]), Za = { class: "popover-header" }, en = { class: "popover-title" }, tn = { class: "popover-content" }, on = {
  key: 0,
  class: "popover-actions"
}, sn = /* @__PURE__ */ A({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, a) => (o(), w(Re, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Je({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Za, [
            e("h4", en, r(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", tn, [
            te(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", on, [
            te(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ W(sn, [["__scopeId", "data-v-42815ace"]]), an = { class: "detail-section" }, nn = {
  key: 0,
  class: "empty-message"
}, ln = { class: "model-header" }, rn = { class: "model-name" }, cn = { class: "model-details" }, dn = { class: "model-row" }, un = { class: "model-row" }, mn = { class: "label" }, vn = {
  key: 0,
  class: "model-row model-row-nodes"
}, fn = { class: "node-list" }, gn = ["onClick"], hn = {
  key: 1,
  class: "model-row"
}, pn = { class: "value" }, yn = {
  key: 0,
  class: "model-actions"
}, wn = { class: "detail-section" }, bn = {
  key: 0,
  class: "empty-message"
}, kn = { class: "node-name" }, $n = {
  key: 0,
  class: "node-version"
}, Cn = /* @__PURE__ */ A({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: c }) {
    const a = t, i = c, { getWorkflowDetails: u, setModelImportance: y, installWorkflowDeps: m } = pe(), g = x(null), f = x(!1), h = x(null), p = x(!1), b = x({}), C = x({}), z = x(!1), V = x(/* @__PURE__ */ new Set()), G = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function T(L) {
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
    function D(L) {
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
    function F(L) {
      if (!L.loaded_by || L.loaded_by.length === 0) return [];
      const N = L.hash || L.filename;
      return V.value.has(N) ? L.loaded_by : L.loaded_by.slice(0, 3);
    }
    function q(L) {
      return V.value.has(L);
    }
    function M(L) {
      V.value.has(L) ? V.value.delete(L) : V.value.add(L), V.value = new Set(V.value);
    }
    async function I() {
      f.value = !0, h.value = null;
      try {
        g.value = await u(a.workflowName);
      } catch (L) {
        h.value = L instanceof Error ? L.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function k(L, N) {
      b.value[L] = N, p.value = !0;
    }
    async function S() {
      if (!p.value) {
        i("close");
        return;
      }
      f.value = !0, h.value = null;
      try {
        for (const [L, N] of Object.entries(b.value))
          await y(a.workflowName, L, N);
        i("close");
      } catch (L) {
        h.value = L instanceof Error ? L.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    async function _(L) {
      C.value[L] = !0, h.value = null;
      try {
        await m(a.workflowName, !0, !1), await I();
      } catch (N) {
        h.value = N instanceof Error ? N.message : "Failed to install node";
      } finally {
        C.value[L] = !1;
      }
    }
    return me(I), (L, N) => (o(), n(P, null, [
      l(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: f.value,
        error: h.value || void 0,
        onClose: N[5] || (N[5] = (j) => i("close"))
      }, {
        body: s(() => [
          g.value ? (o(), n(P, { key: 0 }, [
            e("section", an, [
              l(Ne, { variant: "section" }, {
                default: s(() => [
                  v("MODELS USED (" + r(g.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              g.value.models.length === 0 ? (o(), n("div", nn, " No models used in this workflow ")) : d("", !0),
              (o(!0), n(P, null, J(g.value.models, (j) => (o(), n("div", {
                key: j.hash,
                class: "model-card"
              }, [
                e("div", ln, [
                  N[7] || (N[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", rn, r(j.filename), 1)
                ]),
                e("div", cn, [
                  e("div", dn, [
                    N[8] || (N[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: K(["value", T(j.status)])
                    }, r(D(j.status)), 3)
                  ]),
                  e("div", un, [
                    e("span", mn, [
                      N[9] || (N[9] = v(" Importance: ", -1)),
                      l(Ct, {
                        size: 14,
                        title: "About importance levels",
                        onClick: N[0] || (N[0] = (U) => z.value = !0)
                      })
                    ]),
                    l(Be, {
                      "model-value": b.value[j.hash] || j.importance,
                      options: G,
                      "onUpdate:modelValue": (U) => k(j.hash, U)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  j.loaded_by && j.loaded_by.length > 0 ? (o(), n("div", vn, [
                    N[10] || (N[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", fn, [
                      (o(!0), n(P, null, J(F(j), (U, E) => (o(), n("div", {
                        key: `${U.node_id}-${E}`,
                        class: "node-reference"
                      }, r(U.node_type) + " (Node #" + r(U.node_id) + ") ", 1))), 128)),
                      j.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (U) => M(j.hash || j.filename)
                      }, r(q(j.hash || j.filename) ? "▼ Show less" : `▶ View all (${j.loaded_by.length})`), 9, gn)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  j.size_mb ? (o(), n("div", hn, [
                    N[11] || (N[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", pn, r(j.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                j.status !== "available" ? (o(), n("div", yn, [
                  j.status === "downloadable" ? (o(), w(de, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: N[1] || (N[1] = (U) => i("resolve"))
                  }, {
                    default: s(() => [...N[12] || (N[12] = [
                      v(" Download ", -1)
                    ])]),
                    _: 1
                  })) : j.status === "path_mismatch" ? (o(), w(de, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[2] || (N[2] = (U) => i("resolve"))
                  }, {
                    default: s(() => [...N[13] || (N[13] = [
                      v(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), w(de, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[3] || (N[3] = (U) => i("resolve"))
                  }, {
                    default: s(() => [...N[14] || (N[14] = [
                      v(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", wn, [
              l(Ne, { variant: "section" }, {
                default: s(() => [
                  v("NODES USED (" + r(g.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              g.value.nodes.length === 0 ? (o(), n("div", bn, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), n(P, null, J(g.value.nodes, (j) => (o(), n("div", {
                key: j.name,
                class: "node-item"
              }, [
                e("span", {
                  class: K(["node-status", j.status === "installed" ? "installed" : "missing"])
                }, r(j.status === "installed" ? "✓" : "✕"), 3),
                e("span", kn, r(j.name), 1),
                j.version ? (o(), n("span", $n, "v" + r(j.version), 1)) : d("", !0),
                j.status === "missing" ? (o(), w(de, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: C.value[j.name],
                  onClick: (U) => _(j.name),
                  class: "node-install-btn"
                }, {
                  default: s(() => [...N[15] || (N[15] = [
                    v(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: s(() => [
          l(de, {
            variant: "secondary",
            onClick: N[4] || (N[4] = (j) => i("close"))
          }, {
            default: s(() => [...N[16] || (N[16] = [
              v(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (o(), w(de, {
            key: 0,
            variant: "primary",
            onClick: S
          }, {
            default: s(() => [...N[17] || (N[17] = [
              v(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      l(Ee, {
        show: z.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (j) => z.value = !1)
      }, {
        content: s(() => [...N[18] || (N[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              v(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              v(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              v(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _n = /* @__PURE__ */ W(Cn, [["__scopeId", "data-v-1325d542"]]), xn = {
  key: 0,
  class: "resolve-section"
}, Sn = { class: "resolve-card success-card" }, En = { class: "items-list" }, In = { class: "item-info" }, Ln = { class: "item-name" }, zn = {
  key: 0,
  class: "item-meta"
}, Mn = { class: "match-type" }, Nn = { class: "source" }, Dn = {
  key: 1,
  class: "resolve-section"
}, Tn = { class: "resolve-card warning-card" }, Vn = { class: "items-list" }, Bn = { class: "item-info" }, Rn = { class: "item-name" }, Un = { class: "item-meta" }, On = { key: 0 }, Pn = { key: 1 }, Fn = {
  key: 0,
  class: "item-warning"
}, An = {
  key: 0,
  class: "item-action"
}, Wn = ["onClick"], Hn = {
  key: 2,
  class: "resolve-section"
}, Gn = { class: "info-text" }, jn = { class: "actions-summary" }, qn = { class: "summary-list" }, Kn = { key: 0 }, Jn = { key: 1 }, Yn = { key: 2 }, Xn = {
  key: 0,
  class: "estimated-size"
}, Qn = /* @__PURE__ */ A({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: c }) {
    const a = t, i = c, { resolveWorkflow: u, installWorkflowDeps: y } = pe(), m = x(null), g = x(!1), f = x(!1), h = x(null), p = H(() => {
      var I;
      return m.value ? ((I = m.value.download_results) == null ? void 0 : I.every((k) => k.can_download)) ?? !1 : !1;
    });
    async function b() {
      g.value = !0, h.value = null;
      try {
        m.value = await u(a.workflowName);
      } catch (I) {
        h.value = I instanceof Error ? I.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function C(I) {
      return !I.possible_matches || I.possible_matches.length === 0 ? null : I.possible_matches.reduce(
        (k, S) => S.match_confidence > k.match_confidence ? S : k
      );
    }
    function z(I) {
      return I >= 0.9 ? "high" : I >= 0.7 ? "medium" : "low";
    }
    function V(I) {
      const k = C(I);
      return k ? k.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G(I) {
      var k, S;
      return (S = (k = m.value) == null ? void 0 : k.download_results) == null ? void 0 : S.find((_) => _.model === I);
    }
    function T(I) {
      const k = G(I);
      return (k == null ? void 0 : k.can_download) ?? !1;
    }
    function D(I) {
      const k = G(I);
      return (k == null ? void 0 : k.source_url) || null;
    }
    function F(I) {
      window.open(I, "_blank");
    }
    async function q() {
      if (!(!m.value || f.value)) {
        f.value = !0, h.value = null;
        try {
          await y(
            a.workflowName,
            m.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch (I) {
          h.value = I instanceof Error ? I.message : "Installation failed";
        } finally {
          f.value = !1;
        }
      }
    }
    async function M() {
      if (!(!m.value || f.value)) {
        f.value = !0, h.value = null;
        try {
          await y(
            a.workflowName,
            m.value.nodes_to_install,
            m.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch (I) {
          h.value = I instanceof Error ? I.message : "Installation failed";
        } finally {
          f.value = !1;
        }
      }
    }
    return me(b), (I, k) => (o(), w(tt, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: h.value || void 0,
      onClose: k[1] || (k[1] = (S) => i("close"))
    }, {
      body: s(() => [
        m.value ? (o(), n(P, { key: 0 }, [
          k[5] || (k[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          m.value.nodes_unresolved.length > 0 ? (o(), n("section", xn, [
            l(Ne, { variant: "section" }, {
              default: s(() => [
                v("NODES (" + r(m.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Sn, [
              k[2] || (k[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", En, [
                (o(!0), n(P, null, J(m.value.nodes_unresolved, (S) => {
                  var _;
                  return o(), n("div", {
                    key: S.node_type,
                    class: "item"
                  }, [
                    e("div", In, [
                      e("div", Ln, r(((_ = C(S)) == null ? void 0 : _.package_id) || S.node_type), 1),
                      C(S) ? (o(), n("div", zn, [
                        e("span", {
                          class: K(["confidence-badge", z(C(S).match_confidence)])
                        }, r(Math.round(C(S).match_confidence * 100)) + "% match ", 3),
                        e("span", Mn, r(C(S).match_type), 1),
                        e("span", Nn, "Source: " + r(V(S)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          m.value.models_unresolved.length > 0 ? (o(), n("section", Dn, [
            l(Ne, { variant: "section" }, {
              default: s(() => [
                v("MODELS (" + r(m.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Tn, [
              k[3] || (k[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Vn, [
                (o(!0), n(P, null, J(m.value.models_unresolved, (S) => (o(), n("div", {
                  key: S.filename,
                  class: "item"
                }, [
                  e("div", Bn, [
                    e("div", Rn, r(S.filename), 1),
                    e("div", Un, [
                      S.expected_category ? (o(), n("span", On, "Type: " + r(S.expected_category), 1)) : d("", !0),
                      G(S.filename) ? (o(), n("span", Pn, " Size: ~" + r(G(S.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    T(S.filename) ? d("", !0) : (o(), n("div", Fn, " No auto-download source configured "))
                  ]),
                  D(S.filename) ? (o(), n("div", An, [
                    e("button", {
                      class: "link-btn",
                      onClick: (_) => F(D(S.filename))
                    }, " Open Source ↗ ", 8, Wn)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          m.value.nodes_resolved.length > 0 || m.value.models_resolved.length > 0 ? (o(), n("section", Hn, [
            l(Ne, { variant: "section" }, {
              default: s(() => [
                v(" ALREADY AVAILABLE (" + r(m.value.nodes_resolved.length + m.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", Gn, r(m.value.nodes_resolved.length) + " nodes and " + r(m.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          e("div", jn, [
            k[4] || (k[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", qn, [
              m.value.nodes_to_install.length ? (o(), n("li", Kn, " Install " + r(m.value.nodes_to_install.length) + " nodes (~" + r(m.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              m.value.nodes_to_install.length ? (o(), n("li", Jn, " Restart ComfyUI to load new nodes ")) : d("", !0),
              m.value.models_to_download.length ? (o(), n("li", Yn, " You'll still need to download " + r(m.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            m.value.estimated_size_mb ? (o(), n("div", Xn, " Estimated download: " + r(m.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: s(() => [
        l(de, {
          variant: "secondary",
          onClick: k[0] || (k[0] = (S) => i("close"))
        }, {
          default: s(() => [...k[6] || (k[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m.value && m.value.nodes_to_install.length && m.value.models_to_download.length ? (o(), w(de, {
          key: 0,
          variant: "secondary",
          disabled: f.value,
          loading: f.value,
          onClick: q
        }, {
          default: s(() => [...k[7] || (k[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        m.value && (m.value.nodes_to_install.length || m.value.models_to_download.length) ? (o(), w(de, {
          key: 1,
          variant: "primary",
          disabled: f.value || m.value.models_to_download.length > 0 && !p.value,
          loading: f.value,
          onClick: M
        }, {
          default: s(() => [...k[8] || (k[8] = [
            v(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Zn = /* @__PURE__ */ W(Qn, [["__scopeId", "data-v-d68efb14"]]), el = { class: "search-input-wrapper" }, tl = ["value", "placeholder"], ol = /* @__PURE__ */ A({
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
    const a = t, i = c, u = x(null);
    let y;
    function m(f) {
      const h = f.target.value;
      a.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        i("update:modelValue", h);
      }, a.debounce)) : i("update:modelValue", h);
    }
    function g() {
      var f;
      i("update:modelValue", ""), i("clear"), (f = u.value) == null || f.focus();
    }
    return me(() => {
      a.autoFocus && u.value && u.value.focus();
    }), (f, h) => (o(), n("div", el, [
      e("input", {
        ref_key: "inputRef",
        ref: u,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: Se(g, ["escape"])
      }, null, 40, tl),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), sl = /* @__PURE__ */ W(ol, [["__scopeId", "data-v-266f857a"]]), al = { class: "search-bar" }, nl = /* @__PURE__ */ A({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, a) => (o(), n("div", al, [
      l(sl, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: a[1] || (a[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), We = /* @__PURE__ */ W(nl, [["__scopeId", "data-v-3d51bbfd"]]), ll = { class: "section-group" }, il = {
  key: 0,
  class: "section-content"
}, rl = /* @__PURE__ */ A({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const a = t, i = c, u = x(a.initiallyExpanded);
    function y() {
      a.collapsible && (u.value = !u.value, i("toggle", u.value));
    }
    return (m, g) => (o(), n("section", ll, [
      l(we, {
        count: t.count,
        clickable: t.collapsible,
        expanded: u.value,
        onClick: y
      }, {
        default: s(() => [
          v(r(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || u.value ? (o(), n("div", il, [
        te(m.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), re = /* @__PURE__ */ W(rl, [["__scopeId", "data-v-c48e33ed"]]), cl = { class: "item-header" }, dl = {
  key: 0,
  class: "item-icon"
}, ul = { class: "item-info" }, ml = {
  key: 0,
  class: "item-title"
}, vl = {
  key: 1,
  class: "item-subtitle"
}, fl = {
  key: 0,
  class: "item-details"
}, gl = {
  key: 1,
  class: "item-actions"
}, hl = /* @__PURE__ */ A({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const a = t, i = H(() => a.status ? `status-${a.status}` : "");
    return (u, y) => (o(), n("div", {
      class: K(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: y[0] || (y[0] = (m) => t.clickable && u.$emit("click"))
    }, [
      e("div", cl, [
        u.$slots.icon ? (o(), n("span", dl, [
          te(u.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", ul, [
          u.$slots.title ? (o(), n("div", ml, [
            te(u.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          u.$slots.subtitle ? (o(), n("div", vl, [
            te(u.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      u.$slots.details ? (o(), n("div", fl, [
        te(u.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.actions ? (o(), n("div", gl, [
        te(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ue = /* @__PURE__ */ W(hl, [["__scopeId", "data-v-cc435e0e"]]), pl = { class: "loading-state" }, yl = { class: "loading-message" }, wl = /* @__PURE__ */ A({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, a) => (o(), n("div", pl, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", yl, r(t.message), 1)
    ]));
  }
}), Ie = /* @__PURE__ */ W(wl, [["__scopeId", "data-v-ad8436c9"]]), bl = { class: "error-state" }, kl = { class: "error-message" }, $l = /* @__PURE__ */ A({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, a) => (o(), n("div", bl, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", kl, r(t.message), 1),
      t.retry ? (o(), w(R, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (i) => c.$emit("retry"))
      }, {
        default: s(() => [...a[1] || (a[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ W($l, [["__scopeId", "data-v-5397be48"]]), Cl = /* @__PURE__ */ A({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const a = c, { getWorkflows: i } = pe(), u = x([]), y = x(!1), m = x(null), g = x(""), f = x(!0), h = x(!1), p = x(!1), b = x(!1), C = x(null), z = H(
      () => u.value.filter((U) => U.status === "broken")
    ), V = H(
      () => u.value.filter((U) => U.status === "new")
    ), G = H(
      () => u.value.filter((U) => U.status === "modified")
    ), T = H(
      () => u.value.filter((U) => U.status === "synced")
    ), D = H(() => {
      if (!g.value.trim()) return u.value;
      const U = g.value.toLowerCase();
      return u.value.filter((E) => E.name.toLowerCase().includes(U));
    }), F = H(
      () => z.value.filter(
        (U) => !g.value.trim() || U.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), q = H(
      () => V.value.filter(
        (U) => !g.value.trim() || U.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), M = H(
      () => G.value.filter(
        (U) => !g.value.trim() || U.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), I = H(
      () => T.value.filter(
        (U) => !g.value.trim() || U.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), k = H(
      () => h.value ? I.value : I.value.slice(0, 5)
    );
    async function S() {
      y.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    function _(U) {
      C.value = U, p.value = !0;
    }
    function L(U) {
      C.value = U, b.value = !0;
    }
    function N() {
      alert("Bulk resolution not yet implemented");
    }
    function j() {
      a("refresh");
    }
    return me(S), (U, E) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, { title: "WORKFLOWS" }, {
            actions: s(() => [
              z.value.length > 0 ? (o(), w(R, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: s(() => [...E[7] || (E[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: s(() => [
          l(We, {
            modelValue: g.value,
            "onUpdate:modelValue": E[0] || (E[0] = (Y) => g.value = Y),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          y.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), w(Le, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            F.value.length ? (o(), w(re, {
              key: 0,
              title: "BROKEN",
              count: F.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(F.value, (Y) => (o(), w(ue, {
                  key: Y.name,
                  status: "broken"
                }, {
                  icon: s(() => [...E[8] || (E[8] = [
                    v("⚠", -1)
                  ])]),
                  title: s(() => [
                    v(r(Y.name), 1)
                  ]),
                  subtitle: s(() => [
                    v(" Missing: " + r(Y.missing_nodes) + " nodes, " + r(Y.missing_models) + " models ", 1)
                  ]),
                  actions: s(() => [
                    l(R, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => L(Y.name)
                    }, {
                      default: s(() => [...E[9] || (E[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => _(Y.name)
                    }, {
                      default: s(() => [...E[10] || (E[10] = [
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
            q.value.length ? (o(), w(re, {
              key: 1,
              title: "NEW",
              count: q.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(q.value, (Y) => (o(), w(ue, {
                  key: Y.name,
                  status: "new"
                }, {
                  icon: s(() => [...E[11] || (E[11] = [
                    v("●", -1)
                  ])]),
                  title: s(() => [
                    v(r(Y.name), 1)
                  ]),
                  subtitle: s(() => [...E[12] || (E[12] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => _(Y.name)
                    }, {
                      default: s(() => [...E[13] || (E[13] = [
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
            M.value.length ? (o(), w(re, {
              key: 2,
              title: "MODIFIED",
              count: M.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(M.value, (Y) => (o(), w(ue, {
                  key: Y.name,
                  status: "modified"
                }, {
                  icon: s(() => [...E[14] || (E[14] = [
                    v("⚡", -1)
                  ])]),
                  title: s(() => [
                    v(r(Y.name), 1)
                  ]),
                  subtitle: s(() => [...E[15] || (E[15] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => _(Y.name)
                    }, {
                      default: s(() => [...E[16] || (E[16] = [
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
            I.value.length ? (o(), w(re, {
              key: 3,
              title: "SYNCED",
              count: I.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: E[2] || (E[2] = (Y) => f.value = Y)
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(k.value, (Y) => (o(), w(ue, {
                  key: Y.name,
                  status: "synced"
                }, {
                  icon: s(() => [...E[17] || (E[17] = [
                    v("✓", -1)
                  ])]),
                  title: s(() => [
                    v(r(Y.name), 1)
                  ]),
                  subtitle: s(() => [...E[18] || (E[18] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => _(Y.name)
                    }, {
                      default: s(() => [...E[19] || (E[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !h.value && I.value.length > 5 ? (o(), w(R, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: E[1] || (E[1] = (Y) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: s(() => [
                    v(" View all " + r(I.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            D.value.length ? d("", !0) : (o(), w(Ce, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && C.value ? (o(), w(_n, {
        key: 0,
        "workflow-name": C.value,
        onClose: E[3] || (E[3] = (Y) => p.value = !1),
        onResolve: E[4] || (E[4] = (Y) => L(C.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && C.value ? (o(), w(Zn, {
        key: 1,
        "workflow-name": C.value,
        onClose: E[5] || (E[5] = (Y) => b.value = !1),
        onInstall: j,
        onRefresh: E[6] || (E[6] = (Y) => a("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), _l = /* @__PURE__ */ W(Cl, [["__scopeId", "data-v-cf78a4ac"]]), xl = /* @__PURE__ */ A({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, a) => (o(), n("div", {
      class: K(["summary-bar", t.variant])
    }, [
      te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), He = /* @__PURE__ */ W(xl, [["__scopeId", "data-v-ccb7816e"]]), Sl = /* @__PURE__ */ A({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const a = c, { getEnvironmentModels: i, getStatus: u } = pe(), y = x([]), m = x([]), g = x("production"), f = x(!1), h = x(null), p = x(""), b = x(!1);
    function C() {
      b.value = !1, a("navigate", "model-index");
    }
    const z = H(
      () => y.value.reduce((_, L) => _ + (L.size || 0), 0)
    ), V = H(() => {
      if (!p.value.trim()) return y.value;
      const _ = p.value.toLowerCase();
      return y.value.filter((L) => L.filename.toLowerCase().includes(_));
    }), G = H(() => {
      if (!p.value.trim()) return m.value;
      const _ = p.value.toLowerCase();
      return m.value.filter((L) => L.filename.toLowerCase().includes(_));
    }), T = H(
      () => V.value.filter((_) => _.type === "checkpoints")
    ), D = H(
      () => V.value.filter((_) => _.type === "loras")
    ), F = H(
      () => V.value.filter((_) => _.type !== "checkpoints" && _.type !== "loras")
    );
    function q(_) {
      if (!_) return "Unknown";
      const L = _ / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function M(_) {
      a("navigate", "model-index");
    }
    function I(_) {
      a("navigate", "model-index");
    }
    function k(_) {
      alert(`Download functionality not yet implemented for ${_}`);
    }
    async function S() {
      f.value = !0, h.value = null;
      try {
        const _ = await i();
        y.value = _, m.value = [];
        const L = await u();
        g.value = L.environment || "production";
      } catch (_) {
        h.value = _ instanceof Error ? _.message : "Failed to load models";
      } finally {
        f.value = !1;
      }
    }
    return me(S), (_, L) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (N) => b.value = !0)
          })
        ]),
        search: s(() => [
          l(We, {
            modelValue: p.value,
            "onUpdate:modelValue": L[1] || (L[1] = (N) => p.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          f.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading environment models..."
          })) : h.value ? (o(), w(Le, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            y.value.length ? (o(), w(He, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                v(" Total: " + r(y.value.length) + " models • " + r(q(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            T.value.length ? (o(), w(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: T.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(T.value, (N) => (o(), w(ue, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...L[3] || (L[3] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(N.filename), 1)
                  ]),
                  subtitle: s(() => [
                    v(r(q(N.size)), 1)
                  ]),
                  details: s(() => [
                    l(Z, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Z, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => M(N.hash)
                    }, {
                      default: s(() => [...L[4] || (L[4] = [
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
            D.value.length ? (o(), w(re, {
              key: 2,
              title: "LORAS",
              count: D.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(D.value, (N) => (o(), w(ue, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...L[5] || (L[5] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(N.filename), 1)
                  ]),
                  subtitle: s(() => [
                    v(r(q(N.size)), 1)
                  ]),
                  details: s(() => [
                    l(Z, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Z, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => M(N.hash)
                    }, {
                      default: s(() => [...L[6] || (L[6] = [
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
            F.value.length ? (o(), w(re, {
              key: 3,
              title: "OTHER",
              count: F.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(F.value, (N) => (o(), w(ue, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...L[7] || (L[7] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(N.filename), 1)
                  ]),
                  subtitle: s(() => [
                    v(r(q(N.size)), 1)
                  ]),
                  details: s(() => [
                    l(Z, {
                      label: "Type:",
                      value: N.type
                    }, null, 8, ["value"]),
                    l(Z, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => M(N.hash)
                    }, {
                      default: s(() => [...L[8] || (L[8] = [
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
            G.value.length ? (o(), w(re, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(G.value, (N) => (o(), w(ue, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: s(() => [...L[9] || (L[9] = [
                    v("⚠", -1)
                  ])]),
                  title: s(() => [
                    v(r(N.filename), 1)
                  ]),
                  subtitle: s(() => [...L[10] || (L[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: s(() => {
                    var j;
                    return [
                      l(Z, {
                        label: "Required by:",
                        value: ((j = N.workflow_names) == null ? void 0 : j.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: s(() => [
                    l(R, {
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => k(N.filename)
                    }, {
                      default: s(() => [...L[11] || (L[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => I(N.filename)
                    }, {
                      default: s(() => [...L[12] || (L[12] = [
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
            !V.value.length && !G.value.length ? (o(), w(Ce, {
              key: 5,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ee, {
        show: b.value,
        title: "About Environment Models",
        onClose: L[2] || (L[2] = (N) => b.value = !1)
      }, {
        content: s(() => [
          e("p", null, [
            L[13] || (L[13] = v(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + r(g.value) + '"', 1),
            L[14] || (L[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: s(() => [
          l(R, {
            variant: "primary",
            onClick: C
          }, {
            default: s(() => [...L[15] || (L[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), El = /* @__PURE__ */ W(Sl, [["__scopeId", "data-v-72675609"]]), Il = /* @__PURE__ */ A({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: c } = pe(), a = x([]), i = x(!1), u = x(null), y = x(""), m = x(!1), g = H(
      () => a.value.reduce((k, S) => k + (S.size_mb || S.size || 0), 0)
    ), f = H(() => {
      const k = /* @__PURE__ */ new Set();
      return a.value.forEach((S) => {
        S.used_in_environments && S.used_in_environments.length > 0 && S.used_in_environments.forEach((_) => k.add(_.env_name));
      }), k.size;
    }), h = H(() => {
      if (!y.value.trim()) return a.value;
      const k = y.value.toLowerCase();
      return a.value.filter((S) => {
        const _ = S, L = S.sha256 || _.sha256_hash || "";
        return S.filename.toLowerCase().includes(k) || L.toLowerCase().includes(k);
      });
    }), p = H(
      () => h.value.filter((k) => k.type === "checkpoints")
    ), b = H(
      () => h.value.filter((k) => k.type === "loras")
    ), C = H(
      () => h.value.filter((k) => k.type !== "checkpoints" && k.type !== "loras")
    );
    function z(k) {
      return k ? k >= 1024 ? `${(k / 1024).toFixed(1)} GB` : `${k.toFixed(0)} MB` : "Unknown";
    }
    function V(k) {
      const S = k, _ = k.used_in_workflows || S.used_by || [];
      return !_ || _.length === 0 ? "Not used" : `${_.length} workflow(s)`;
    }
    function G(k) {
      navigator.clipboard.writeText(k), alert("Hash copied to clipboard");
    }
    function T(k) {
      prompt("Enter model source URL:", k.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function D(k) {
      const S = k, _ = k.used_in_workflows || S.used_by || [], L = _ && _.length > 0 ? `

⚠ WARNING: This model is used by ${_.length} workflow(s):
${_.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${k.filename}?${L}

This will free ${z(S.size_mb || k.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function F() {
      alert("Scan for models not yet implemented");
    }
    function q() {
      alert("Change directory not yet implemented");
    }
    function M() {
      alert("Download new model not yet implemented");
    }
    async function I() {
      i.value = !0, u.value = null;
      try {
        a.value = await c(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", p.value), console.log("Filtered loras:", b.value), console.log("Filtered other:", C.value);
      } catch (k) {
        u.value = k instanceof Error ? k.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return me(I), (k, S) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[0] || (S[0] = (_) => m.value = !0)
          }, {
            actions: s(() => [
              l(R, {
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: s(() => [...S[3] || (S[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              l(R, {
                variant: "primary",
                size: "sm",
                onClick: q
              }, {
                default: s(() => [...S[4] || (S[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(R, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: s(() => [...S[5] || (S[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: s(() => [
          l(We, {
            modelValue: y.value,
            "onUpdate:modelValue": S[1] || (S[1] = (_) => y.value = _),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          i.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading workspace models..."
          })) : u.value ? (o(), w(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            a.value.length ? (o(), w(He, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                v(" Total: " + r(a.value.length) + " models • " + r(z(g.value)) + " • Used in " + r(f.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            p.value.length ? (o(), w(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: p.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(p.value, (_) => (o(), w(ue, {
                  key: _.sha256 || _.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...S[6] || (S[6] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(_.filename), 1)
                  ]),
                  subtitle: s(() => [
                    v(r(z(_.size_mb || _.size)), 1)
                  ]),
                  details: s(() => {
                    var L, N;
                    return [
                      _.sha256 || _.sha256_hash ? (o(), w(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (_.sha256 || _.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Z, {
                        label: "Used in:",
                        value: V(_)
                      }, null, 8, ["value"]),
                      _.source_url || (L = _.sources) != null && L[0] ? (o(), w(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: _.source_url || ((N = _.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), w(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: s(() => [...S[7] || (S[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => T(_)
                    }, {
                      default: s(() => [...S[8] || (S[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _.sha256 || _.sha256_hash ? (o(), w(R, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => G(_.sha256 || _.sha256_hash)
                    }, {
                      default: s(() => [...S[9] || (S[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(R, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => D(_)
                    }, {
                      default: s(() => [...S[10] || (S[10] = [
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
            b.value.length ? (o(), w(re, {
              key: 2,
              title: "LORAS",
              count: b.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(b.value, (_) => (o(), w(ue, {
                  key: _.sha256 || _.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...S[11] || (S[11] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(_.filename), 1)
                  ]),
                  subtitle: s(() => [
                    v(r(z(_.size_mb || _.size)), 1)
                  ]),
                  details: s(() => {
                    var L, N;
                    return [
                      _.sha256 || _.sha256_hash ? (o(), w(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (_.sha256 || _.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Z, {
                        label: "Used in:",
                        value: V(_)
                      }, null, 8, ["value"]),
                      _.source_url || (L = _.sources) != null && L[0] ? (o(), w(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: _.source_url || ((N = _.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), w(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: s(() => [...S[12] || (S[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => T(_)
                    }, {
                      default: s(() => [...S[13] || (S[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _.sha256 || _.sha256_hash ? (o(), w(R, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => G(_.sha256 || _.sha256_hash)
                    }, {
                      default: s(() => [...S[14] || (S[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(R, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => D(_)
                    }, {
                      default: s(() => [...S[15] || (S[15] = [
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
            C.value.length ? (o(), w(re, {
              key: 3,
              title: "OTHER",
              count: C.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(C.value, (_) => (o(), w(ue, {
                  key: _.sha256 || _.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...S[16] || (S[16] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(_.filename), 1)
                  ]),
                  subtitle: s(() => [
                    v(r(z(_.size_mb || _.size)), 1)
                  ]),
                  details: s(() => [
                    l(Z, {
                      label: "Type:",
                      value: _.type
                    }, null, 8, ["value"]),
                    _.sha256 || _.sha256_hash ? (o(), w(Z, {
                      key: 0,
                      label: "SHA256:",
                      value: (_.sha256 || _.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    l(Z, {
                      label: "Used in:",
                      value: V(_)
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => T(_)
                    }, {
                      default: s(() => [...S[17] || (S[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _.sha256 || _.sha256_hash ? (o(), w(R, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (L) => G(_.sha256 || _.sha256_hash)
                    }, {
                      default: s(() => [...S[18] || (S[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(R, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (L) => D(_)
                    }, {
                      default: s(() => [...S[19] || (S[19] = [
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
            h.value.length ? d("", !0) : (o(), w(Ce, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Ee, {
        show: m.value,
        title: "About Workspace Model Index",
        onClose: S[2] || (S[2] = (_) => m.value = !1)
      }, {
        content: s(() => [...S[20] || (S[20] = [
          e("p", null, [
            v(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ll = /* @__PURE__ */ W(Il, [["__scopeId", "data-v-5a24af01"]]), zl = { key: 0 }, Ml = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Nl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Dl = /* @__PURE__ */ A({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: c, installNode: a, updateNode: i, uninstallNode: u } = pe(), y = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), m = x(!1), g = x(null), f = x(""), h = x(!1), p = H(() => {
      if (!f.value.trim()) return y.value.nodes;
      const M = f.value.toLowerCase();
      return y.value.nodes.filter(
        (I) => {
          var k, S;
          return I.name.toLowerCase().includes(M) || ((k = I.description) == null ? void 0 : k.toLowerCase().includes(M)) || ((S = I.repository) == null ? void 0 : S.toLowerCase().includes(M));
        }
      );
    }), b = H(
      () => p.value.filter((M) => M.installed)
    ), C = H(
      () => p.value.filter((M) => !M.installed)
    );
    function z(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[M] || M;
    }
    function V(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function G(M) {
      window.open(M, "_blank");
    }
    async function T(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node from its repository.`))
        try {
          m.value = !0;
          const I = await a(M);
          I.status === "success" ? (alert(`Node "${M}" installed successfully!`), await q()) : alert(`Failed to install node: ${I.message || "Unknown error"}`);
        } catch (I) {
          alert(`Error installing node: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function D(M) {
      if (confirm(`Check for updates for "${M}"?`))
        try {
          m.value = !0;
          const I = await i(M);
          I.status === "success" ? (alert(`Node "${M}" is up to date or has been updated!`), await q()) : alert(`Update check failed: ${I.message || "Unknown error"}`);
        } catch (I) {
          alert(`Error checking for updates: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function F(M) {
      if (confirm(`Uninstall node "${M}"?

This will remove the node from this environment.`))
        try {
          m.value = !0;
          const I = await u(M);
          I.status === "success" ? (alert(`Node "${M}" uninstalled successfully!`), await q()) : alert(`Failed to uninstall node: ${I.message || "Unknown error"}`);
        } catch (I) {
          alert(`Error uninstalling node: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function q() {
      m.value = !0, g.value = null;
      try {
        y.value = await c();
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return me(q), (M, I) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (k) => h.value = !0)
          })
        ]),
        search: s(() => [
          l(We, {
            modelValue: f.value,
            "onUpdate:modelValue": I[1] || (I[1] = (k) => f.value = k),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          m.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), w(Le, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            y.value.total_count ? (o(), w(He, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                v(" Total: " + r(y.value.total_count) + " nodes • " + r(y.value.installed_count) + " installed • " + r(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            b.value.length ? (o(), w(re, {
              key: 1,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(b.value, (k) => (o(), w(ue, {
                  key: k.name,
                  status: "synced"
                }, {
                  icon: s(() => [...I[4] || (I[4] = [
                    v("📦", -1)
                  ])]),
                  title: s(() => [
                    v(r(k.name), 1)
                  ]),
                  subtitle: s(() => [
                    k.version ? (o(), n("span", zl, "v" + r(k.version), 1)) : (o(), n("span", Ml, "version unknown")),
                    k.source ? (o(), n("span", Nl, " • " + r(z(k.source)), 1)) : d("", !0)
                  ]),
                  details: s(() => [
                    k.description ? (o(), w(Z, {
                      key: 0,
                      label: "Description:",
                      value: k.description
                    }, null, 8, ["value"])) : d("", !0),
                    k.repository ? (o(), w(Z, {
                      key: 1,
                      label: "Repository:",
                      value: k.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Z, {
                      label: "Used by:",
                      value: V(k)
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    k.repository ? (o(), w(R, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => G(k.repository)
                    }, {
                      default: s(() => [...I[5] || (I[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k.source === "registry" ? (o(), w(R, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => D(k.name)
                    }, {
                      default: s(() => [...I[6] || (I[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k.source !== "unknown" ? (o(), w(R, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => F(k.name)
                    }, {
                      default: s(() => [...I[7] || (I[7] = [
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
            C.value.length ? (o(), w(re, {
              key: 2,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(C.value, (k) => (o(), w(ue, {
                  key: k.name,
                  status: "missing"
                }, {
                  icon: s(() => [...I[8] || (I[8] = [
                    v("⚠", -1)
                  ])]),
                  title: s(() => [
                    v(r(k.name), 1)
                  ]),
                  subtitle: s(() => [...I[9] || (I[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: s(() => [
                    k.description ? (o(), w(Z, {
                      key: 0,
                      label: "Description:",
                      value: k.description
                    }, null, 8, ["value"])) : d("", !0),
                    k.repository ? (o(), w(Z, {
                      key: 1,
                      label: "Repository:",
                      value: k.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Z, {
                      label: "Required by:",
                      value: V(k)
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    k.download_url ? (o(), w(R, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => T(k.name)
                    }, {
                      default: s(() => [...I[10] || (I[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k.repository ? (o(), w(R, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => G(k.repository)
                    }, {
                      default: s(() => [...I[11] || (I[11] = [
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
            !b.value.length && !C.value.length ? (o(), w(Ce, {
              key: 3,
              icon: "📭",
              message: f.value ? `No nodes match '${f.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Ee, {
        show: h.value,
        title: "About Git-Tracked Nodes",
        onClose: I[3] || (I[3] = (k) => h.value = !1)
      }, {
        content: s(() => [...I[12] || (I[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: s(() => [
          l(R, {
            variant: "primary",
            onClick: I[2] || (I[2] = (k) => h.value = !1)
          }, {
            default: s(() => [...I[13] || (I[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Tl = /* @__PURE__ */ W(Dl, [["__scopeId", "data-v-c480e2c1"]]), Vl = { class: "remote-url-display" }, Bl = ["title"], Rl = ["title"], Ul = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ol = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pl = /* @__PURE__ */ A({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, a = x(!1), i = H(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const y = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${y}...${m}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(c.url), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, m) => (o(), n("div", Vl, [
      e("span", {
        class: "url-text",
        title: t.url
      }, r(i.value), 9, Bl),
      e("button", {
        class: K(["copy-btn", { copied: a.value }]),
        onClick: u,
        title: a.value ? "Copied!" : "Copy URL"
      }, [
        a.value ? (o(), n("svg", Ol, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Ul, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Rl)
    ]));
  }
}), pt = /* @__PURE__ */ W(Pl, [["__scopeId", "data-v-7768a58d"]]), Fl = { class: "remote-title" }, Al = {
  key: 0,
  class: "default-badge"
}, Wl = {
  key: 1,
  class: "sync-badge"
}, Hl = {
  key: 0,
  class: "ahead"
}, Gl = {
  key: 1,
  class: "behind"
}, jl = {
  key: 0,
  class: "tracking-info"
}, ql = /* @__PURE__ */ A({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const a = t, i = H(() => a.fetchingRemote === a.remote.name), u = H(() => a.remote.is_default), y = H(() => !!a.trackingBranch);
    function m(g) {
      const f = new Date(g), p = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), b = Math.floor(p / 6e4);
      if (b < 1) return "Just now";
      if (b < 60) return `${b}m ago`;
      const C = Math.floor(b / 60);
      if (C < 24) return `${C}h ago`;
      const z = Math.floor(C / 24);
      return z < 7 ? `${z}d ago` : f.toLocaleDateString();
    }
    return (g, f) => (o(), w(ue, {
      status: u.value ? "synced" : void 0
    }, {
      icon: s(() => [
        v(r(u.value ? "🔗" : "🌐"), 1)
      ]),
      title: s(() => [
        e("div", Fl, [
          e("span", null, r(t.remote.name), 1),
          u.value ? (o(), n("span", Al, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), n("span", Wl, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Hl, "↑" + r(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Gl, "↓" + r(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: s(() => [
        y.value ? (o(), n("span", jl, " Tracking: " + r(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: s(() => {
        var h;
        return [
          l(Z, { label: "Fetch:" }, {
            default: s(() => [
              l(pt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), w(Z, {
            key: 0,
            label: "Push:"
          }, {
            default: s(() => [
              l(pt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (h = t.syncStatus) != null && h.last_fetch ? (o(), w(Z, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: s(() => [
              e("span", null, r(m(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: s(() => [
        l(R, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: f[0] || (f[0] = (h) => g.$emit("fetch", t.remote.name))
        }, {
          default: s(() => [...f[3] || (f[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        l(R, {
          variant: "secondary",
          size: "xs",
          onClick: f[1] || (f[1] = (h) => g.$emit("edit", t.remote.name))
        }, {
          default: s(() => [...f[4] || (f[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        u.value ? d("", !0) : (o(), w(R, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[2] || (f[2] = (h) => g.$emit("remove", t.remote.name))
        }, {
          default: s(() => [...f[5] || (f[5] = [
            v(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Kl = /* @__PURE__ */ W(ql, [["__scopeId", "data-v-17362e45"]]), Jl = ["for"], Yl = {
  key: 0,
  class: "base-form-field-required"
}, Xl = { class: "base-form-field-input" }, Ql = {
  key: 1,
  class: "base-form-field-error"
}, Zl = {
  key: 2,
  class: "base-form-field-hint"
}, ei = /* @__PURE__ */ A({
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
    const c = t, a = H(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, u) => (o(), n("div", {
      class: K(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: a.value,
        class: "base-form-field-label"
      }, [
        v(r(t.label) + " ", 1),
        t.required ? (o(), n("span", Yl, "*")) : d("", !0)
      ], 8, Jl)) : d("", !0),
      e("div", Xl, [
        te(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Ql, r(t.error), 1)) : t.hint ? (o(), n("span", Zl, r(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ W(ei, [["__scopeId", "data-v-9a1cf296"]]), ti = ["type", "value", "placeholder", "disabled"], oi = {
  key: 0,
  class: "base-input-error"
}, si = /* @__PURE__ */ A({
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
    return (c, a) => (o(), n("div", {
      class: K(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: K(["base-input", { error: !!t.error }]),
        onInput: a[0] || (a[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          a[1] || (a[1] = Se((i) => c.$emit("enter"), ["enter"])),
          a[2] || (a[2] = Se((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ti),
      t.error ? (o(), n("span", oi, r(t.error), 1)) : d("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ W(si, [["__scopeId", "data-v-9ba02cdc"]]), ai = { class: "remote-form" }, ni = { class: "form-header" }, li = { class: "form-body" }, ii = {
  key: 0,
  class: "form-error"
}, ri = { class: "form-actions" }, ci = /* @__PURE__ */ A({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const a = t, i = c, u = x({
      name: a.remoteName,
      fetchUrl: a.fetchUrl,
      pushUrl: a.pushUrl
    }), y = x(!1), m = x(null);
    wt(() => [a.remoteName, a.fetchUrl, a.pushUrl], () => {
      u.value = {
        name: a.remoteName,
        fetchUrl: a.fetchUrl,
        pushUrl: a.pushUrl
      };
    });
    const g = H(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function f() {
      if (!(!g.value || y.value)) {
        m.value = null, y.value = !0;
        try {
          i("submit", u.value);
        } catch (h) {
          m.value = h instanceof Error ? h.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (h, p) => (o(), n("div", ai, [
      e("div", ni, [
        l(we, null, {
          default: s(() => [
            v(r(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", li, [
        l(lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: s(() => [
            l(it, {
              modelValue: u.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (b) => u.value.name = b),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: s(() => [
            l(it, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (b) => u.value.fetchUrl = b),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(lt, { label: "Push URL (optional)" }, {
          default: s(() => [
            l(it, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (b) => u.value.pushUrl = b),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), n("div", ii, r(m.value), 1)) : d("", !0)
      ]),
      e("div", ri, [
        l(R, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: y.value,
          onClick: f
        }, {
          default: s(() => [
            v(r(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        l(R, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (b) => h.$emit("cancel"))
        }, {
          default: s(() => [...p[4] || (p[4] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), di = /* @__PURE__ */ W(ci, [["__scopeId", "data-v-56021b18"]]), ui = { key: 0 }, mi = /* @__PURE__ */ A({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: a,
      removeRemote: i,
      updateRemoteUrl: u,
      fetchRemote: y,
      getRemoteSyncStatus: m
    } = pe(), g = x([]), f = x(null), h = x({}), p = x(!1), b = x(null), C = x(""), z = x(!1), V = x(null), G = x(!1), T = x("add"), D = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = H(() => {
      if (!C.value.trim()) return g.value;
      const U = C.value.toLowerCase();
      return g.value.filter(
        (E) => E.name.toLowerCase().includes(U) || E.fetch_url.toLowerCase().includes(U) || E.push_url.toLowerCase().includes(U)
      );
    });
    function q(U) {
      var E;
      return ((E = f.value) == null ? void 0 : E.remote) === U;
    }
    async function M() {
      p.value = !0, b.value = null;
      try {
        const U = await c();
        g.value = U.remotes, f.value = U.current_branch_tracking || null, await Promise.all(
          U.remotes.map(async (E) => {
            const Y = await m(E.name);
            Y && (h.value[E.name] = Y);
          })
        );
      } catch (U) {
        b.value = U instanceof Error ? U.message : "Failed to load remotes";
      } finally {
        p.value = !1;
      }
    }
    function I() {
      T.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, G.value = !0;
    }
    function k(U) {
      const E = g.value.find((Y) => Y.name === U);
      E && (T.value = "edit", D.value = {
        name: E.name,
        fetchUrl: E.fetch_url,
        pushUrl: E.push_url
      }, G.value = !0);
    }
    async function S(U) {
      try {
        T.value === "add" ? await a(U.name, U.fetchUrl) : await u(U.name, U.fetchUrl, U.pushUrl || void 0), G.value = !1, await M();
      } catch (E) {
        b.value = E instanceof Error ? E.message : "Operation failed";
      }
    }
    function _() {
      G.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function L(U) {
      V.value = U;
      try {
        await y(U);
        const E = await m(U);
        E && (h.value[U] = E);
      } catch (E) {
        b.value = E instanceof Error ? E.message : "Fetch failed";
      } finally {
        V.value = null;
      }
    }
    async function N(U) {
      if (confirm(`Remove remote "${U}"?`))
        try {
          await i(U), await M();
        } catch (E) {
          b.value = E instanceof Error ? E.message : "Failed to remove remote";
        }
    }
    function j() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return me(M), (U, E) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (Y) => z.value = !0)
          }, {
            actions: s(() => [
              G.value ? d("", !0) : (o(), w(R, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: s(() => [...E[3] || (E[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: s(() => [
          G.value ? d("", !0) : (o(), w(We, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": E[1] || (E[1] = (Y) => C.value = Y),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: s(() => [
          p.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading remotes..."
          })) : b.value ? (o(), w(Le, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            G.value ? (o(), w(di, {
              key: 0,
              mode: T.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: S,
              onCancel: _
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            g.value.length && !G.value ? (o(), w(He, {
              key: 1,
              variant: "compact"
            }, {
              default: s(() => [
                v(" Total: " + r(g.value.length) + " remote" + r(g.value.length !== 1 ? "s" : "") + " ", 1),
                f.value ? (o(), n("span", ui, " • Tracking: " + r(f.value.remote) + "/" + r(f.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            F.value.length && !G.value ? (o(), w(re, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: s(() => [
                (o(!0), n(P, null, J(F.value, (Y) => {
                  var oe;
                  return o(), w(Kl, {
                    key: Y.name,
                    remote: Y,
                    "sync-status": h.value[Y.name],
                    "tracking-branch": q(Y.name) ? (oe = f.value) == null ? void 0 : oe.branch : void 0,
                    "fetching-remote": V.value,
                    onFetch: L,
                    onEdit: k,
                    onRemove: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !F.value.length && !G.value ? (o(), w(Ce, {
              key: 3,
              icon: "🌐",
              message: C.value ? `No remotes match '${C.value}'` : "No remotes configured."
            }, {
              actions: s(() => [
                l(R, {
                  variant: "primary",
                  onClick: I
                }, {
                  default: s(() => [...E[4] || (E[4] = [
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
      l(Ee, {
        show: z.value,
        title: "About Git Remotes",
        onClose: E[2] || (E[2] = (Y) => z.value = !1)
      }, {
        content: s(() => [...E[5] || (E[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            v(" The "),
            e("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: s(() => [
          l(R, {
            variant: "link",
            onClick: j
          }, {
            default: s(() => [...E[6] || (E[6] = [
              v(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), vi = /* @__PURE__ */ W(mi, [["__scopeId", "data-v-a75719bb"]]), fi = { class: "setting-info" }, gi = { class: "setting-label" }, hi = {
  key: 0,
  class: "required-marker"
}, pi = {
  key: 0,
  class: "setting-description"
}, yi = { class: "setting-control" }, wi = /* @__PURE__ */ A({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, a) => (o(), n("div", {
      class: K(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", fi, [
        e("div", gi, [
          v(r(t.label) + " ", 1),
          t.required ? (o(), n("span", hi, "*")) : d("", !0)
        ]),
        t.description ? (o(), n("div", pi, r(t.description), 1)) : d("", !0)
      ]),
      e("div", yi, [
        te(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), le = /* @__PURE__ */ W(wi, [["__scopeId", "data-v-cb5d236c"]]), bi = { class: "toggle" }, ki = ["checked", "disabled"], $i = /* @__PURE__ */ A({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, a) => (o(), n("label", bi, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: a[0] || (a[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, ki),
      a[1] || (a[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ve = /* @__PURE__ */ W($i, [["__scopeId", "data-v-71c0f550"]]), Ci = { class: "settings-section" }, _i = { class: "settings-section" }, xi = { class: "settings-section" }, Si = { class: "settings-section" }, Ei = { class: "settings-section" }, Ii = { class: "settings-section" }, Li = /* @__PURE__ */ A({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = x(!1), a = x(null), i = x(null), u = x({
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
    }), y = x(null), m = H(() => y.value ? JSON.stringify(u.value) !== JSON.stringify(y.value) : !1), g = [
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
    ], p = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], b = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], C = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function z() {
      c.value = !0, a.value = null;
      try {
        await new Promise((T) => setTimeout(T, 500)), y.value = JSON.parse(JSON.stringify(u.value));
      } catch (T) {
        a.value = T instanceof Error ? T.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function V() {
      i.value = null;
      try {
        await new Promise((T) => setTimeout(T, 300)), y.value = JSON.parse(JSON.stringify(u.value)), i.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          i.value = null;
        }, 3e3);
      } catch (T) {
        i.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function G() {
      y.value && (u.value = JSON.parse(JSON.stringify(y.value)), i.value = null);
    }
    return me(z), (T, D) => (o(), w(ge, null, {
      header: s(() => [
        l(he, { title: "WORKSPACE SETTINGS" }, {
          actions: s(() => [
            l(R, {
              variant: "primary",
              size: "sm",
              disabled: !m.value,
              onClick: V
            }, {
              default: s(() => [...D[19] || (D[19] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m.value ? (o(), w(R, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: s(() => [...D[20] || (D[20] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: s(() => [
        c.value ? (o(), w(Ie, {
          key: 0,
          message: "Loading workspace settings..."
        })) : a.value ? (o(), w(Le, {
          key: 1,
          message: a.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
          l(re, { title: "GIT CONFIGURATION" }, {
            default: s(() => [
              e("div", Ci, [
                l(le, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: s(() => [
                    l(Fe, {
                      modelValue: u.value.git.userName,
                      "onUpdate:modelValue": D[0] || (D[0] = (F) => u.value.git.userName = F),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: s(() => [
                    l(Fe, {
                      modelValue: u.value.git.userEmail,
                      "onUpdate:modelValue": D[1] || (D[1] = (F) => u.value.git.userEmail = F),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: s(() => [
                    l(Fe, {
                      modelValue: u.value.git.defaultBranch,
                      "onUpdate:modelValue": D[2] || (D[2] = (F) => u.value.git.defaultBranch = F),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.git.autoCommit,
                      "onUpdate:modelValue": D[3] || (D[3] = (F) => u.value.git.autoCommit = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(re, { title: "WORKSPACE PATHS" }, {
            default: s(() => [
              e("div", _i, [
                l(le, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: s(() => [
                    l(Pe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: s(() => [
                        v(r(u.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: s(() => [
                    l(Pe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: s(() => [
                        v(r(u.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: s(() => [
                    l(Pe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: s(() => [
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
          l(re, { title: "MODEL INDEX" }, {
            default: s(() => [
              e("div", xi, [
                l(le, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": D[4] || (D[4] = (F) => u.value.modelIndex.autoIndex = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": D[5] || (D[5] = (F) => u.value.modelIndex.indexOnStartup = F),
                      disabled: !u.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(le, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: s(() => [
                    l(Be, {
                      modelValue: u.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": D[6] || (D[6] = (F) => u.value.modelIndex.scanInterval = F),
                      options: g,
                      disabled: !u.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(le, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.deepScan,
                      "onUpdate:modelValue": D[7] || (D[7] = (F) => u.value.modelIndex.deepScan = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(re, { title: "ENVIRONMENT DEFAULTS" }, {
            default: s(() => [
              e("div", Si, [
                l(le, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: s(() => [
                    l(Be, {
                      modelValue: u.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": D[8] || (D[8] = (F) => u.value.environment.defaultComfyUIVersion = F),
                      options: f,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: s(() => [
                    l(Be, {
                      modelValue: u.value.environment.pythonVersion,
                      "onUpdate:modelValue": D[9] || (D[9] = (F) => u.value.environment.pythonVersion = F),
                      options: h,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": D[10] || (D[10] = (F) => u.value.environment.autoCreateVenv = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": D[11] || (D[11] = (F) => u.value.environment.autoInstallDeps = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(re, { title: "UI PREFERENCES" }, {
            default: s(() => [
              e("div", Ei, [
                l(le, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: s(() => [
                    l(Be, {
                      modelValue: u.value.ui.theme,
                      "onUpdate:modelValue": D[12] || (D[12] = (F) => u.value.ui.theme = F),
                      options: p,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.ui.compactMode,
                      "onUpdate:modelValue": D[13] || (D[13] = (F) => u.value.ui.compactMode = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.ui.showFileExtensions,
                      "onUpdate:modelValue": D[14] || (D[14] = (F) => u.value.ui.showFileExtensions = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.ui.confirmDestructive,
                      "onUpdate:modelValue": D[15] || (D[15] = (F) => u.value.ui.confirmDestructive = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(re, { title: "ADVANCED" }, {
            default: s(() => [
              e("div", Ii, [
                l(le, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: s(() => [
                    l(ve, {
                      modelValue: u.value.advanced.debugMode,
                      "onUpdate:modelValue": D[16] || (D[16] = (F) => u.value.advanced.debugMode = F)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: s(() => [
                    l(Be, {
                      modelValue: u.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": D[17] || (D[17] = (F) => u.value.advanced.maxHistoryItems = F),
                      options: b,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(le, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: s(() => [
                    l(Be, {
                      modelValue: u.value.advanced.cacheDuration,
                      "onUpdate:modelValue": D[18] || (D[18] = (F) => u.value.advanced.cacheDuration = F),
                      options: C,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i.value ? (o(), w(He, {
            key: 0,
            variant: (i.value.type === "success", "compact")
          }, {
            default: s(() => [
              e("span", {
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
}), zi = /* @__PURE__ */ W(Li, [["__scopeId", "data-v-74f65bd5"]]), Mi = /* @__PURE__ */ A({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = pe(), a = x([]), i = x(!1), u = x(null), y = x(!1), m = x(null), g = H(() => a.value.length === 0 ? [] : [...a.value].reverse().map((p) => {
      const C = new Date(p.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      }).replace(",", ""), z = p.context ? `[${p.context}]` : "";
      return {
        text: `${C} ${p.level.padEnd(7)} ${z} ${p.message}`,
        level: p.level
      };
    }));
    async function f() {
      i.value = !0, u.value = null;
      try {
        a.value = await c(void 0, 500), a.value.sort((h, p) => new Date(p.timestamp).getTime() - new Date(h.timestamp).getTime());
      } catch (h) {
        u.value = h instanceof Error ? h.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var h;
          (h = m.value) != null && h.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return me(f), (h, p) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: p[0] || (p[0] = (b) => y.value = !0)
          }, {
            actions: s(() => [
              l(R, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: i.value
              }, {
                default: s(() => [
                  v(r(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: s(() => [
          i.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (o(), w(Le, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: f
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            a.value.length === 0 ? (o(), w(Ce, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), n(P, null, J(g.value, (b, C) => (o(), n("div", {
                key: C,
                class: K(`log-line log-level-${b.level.toLowerCase()}`)
              }, r(b.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      l(Ee, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: p[2] || (p[2] = (b) => y.value = !1)
      }, {
        content: s(() => [...p[3] || (p[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: s(() => [
          l(R, {
            variant: "primary",
            onClick: p[1] || (p[1] = (b) => y.value = !1)
          }, {
            default: s(() => [...p[4] || (p[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ni = /* @__PURE__ */ W(Mi, [["__scopeId", "data-v-846ec23c"]]), Di = /* @__PURE__ */ A({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: a } = pe(), i = x([]), u = x(!1), y = x(null), m = x(!1), g = x("production"), f = x(null), h = H(() => i.value.length === 0 ? [] : [...i.value].reverse().map((C) => {
      const V = new Date(C.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      }).replace(",", ""), G = C.context ? `[${C.context}]` : "";
      return {
        text: `${V} ${C.level.padEnd(7)} ${G} ${C.message}`,
        level: C.level
      };
    }));
    async function p() {
      u.value = !0, y.value = null;
      try {
        i.value = await c(void 0, 500), i.value.sort((b, C) => new Date(C.timestamp).getTime() - new Date(b.timestamp).getTime());
        try {
          const b = await a();
          g.value = b.environment || "production";
        } catch {
        }
      } catch (b) {
        y.value = b instanceof Error ? b.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var b;
          (b = f.value) != null && b.parentElement && (f.value.parentElement.scrollTop = f.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return me(p), (b, C) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (z) => m.value = !0)
          }, {
            actions: s(() => [
              l(R, {
                variant: "secondary",
                size: "sm",
                onClick: p,
                disabled: u.value
              }, {
                default: s(() => [
                  v(r(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: s(() => [
          u.value ? (o(), w(Ie, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), w(Le, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            i.value.length === 0 ? (o(), w(Ce, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: f,
              class: "log-output"
            }, [
              (o(!0), n(P, null, J(h.value, (z, V) => (o(), n("div", {
                key: V,
                class: K(`log-line log-level-${z.level.toLowerCase()}`)
              }, r(z.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      l(Ee, {
        show: m.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (z) => m.value = !1)
      }, {
        content: s(() => [
          e("p", null, [
            C[3] || (C[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, r(g.value), 1),
            C[4] || (C[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1)),
          C[6] || (C[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: s(() => [
          l(R, {
            variant: "primary",
            onClick: C[1] || (C[1] = (z) => m.value = !1)
          }, {
            default: s(() => [...C[7] || (C[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ti = /* @__PURE__ */ W(Di, [["__scopeId", "data-v-cf493022"]]), Vi = { class: "env-title" }, Bi = {
  key: 0,
  class: "current-badge"
}, Ri = {
  key: 0,
  class: "branch-info"
}, Ui = /* @__PURE__ */ A({
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
    return (c, a) => (o(), w(ue, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: s(() => [
        v(r(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: s(() => [
        e("div", Vi, [
          e("span", null, r(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Bi, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: s(() => [
        t.currentBranch ? (o(), n("span", Ri, [
          a[0] || (a[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          v(" " + r(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: s(() => [
        l(Z, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        l(Z, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        l(Z, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), w(Z, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: s(() => [
        te(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Oi = /* @__PURE__ */ W(Ui, [["__scopeId", "data-v-5238e57c"]]), Pi = {
  key: 0,
  class: "create-form"
}, Fi = { class: "create-form__header" }, Ai = { class: "create-form__body" }, Wi = { class: "create-form__actions" }, Hi = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Gi = /* @__PURE__ */ A({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const a = c, { getEnvironments: i } = pe(), u = x([]), y = x(!1), m = x(null), g = x(""), f = x(!1), h = x(!1), p = x(""), b = H(
      () => u.value.find((q) => q.is_current)
    ), C = H(() => {
      if (!g.value.trim()) return u.value;
      const q = g.value.toLowerCase();
      return u.value.filter(
        (M) => {
          var I;
          return M.name.toLowerCase().includes(q) || ((I = M.current_branch) == null ? void 0 : I.toLowerCase().includes(q));
        }
      );
    });
    function z(q) {
      if (!q) return "";
      try {
        const M = new Date(q), k = (/* @__PURE__ */ new Date()).getTime() - M.getTime(), S = Math.floor(k / 6e4), _ = Math.floor(k / 36e5), L = Math.floor(k / 864e5);
        return S < 1 ? "just now" : S < 60 ? `${S} ${S === 1 ? "minute" : "minutes"} ago` : _ < 24 ? `${_} ${_ === 1 ? "hour" : "hours"} ago` : L < 30 ? `${L} ${L === 1 ? "day" : "days"} ago` : M.toLocaleDateString();
      } catch {
        return q;
      }
    }
    function V() {
      const q = p.value.trim();
      q && (a("create", q), p.value = "", h.value = !1);
    }
    function G() {
      p.value = "", h.value = !1;
    }
    function T(q) {
      a("viewDetails", q);
    }
    function D(q) {
      confirm(`Delete environment "${q}"?

This action cannot be undone.`) && a("delete", q);
    }
    async function F() {
      y.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (q) {
        m.value = q instanceof Error ? q.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return me(F), (q, M) => {
      const I = Wt("SectionGroup");
      return o(), n(P, null, [
        l(ge, null, {
          header: s(() => [
            l(he, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: M[1] || (M[1] = (k) => f.value = !0)
            }, {
              actions: s(() => [
                l(R, {
                  variant: "ghost",
                  size: "sm",
                  onClick: M[0] || (M[0] = (k) => h.value = !0),
                  title: "Create new environment"
                }, {
                  default: s(() => [...M[7] || (M[7] = [
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
                l(R, {
                  variant: "ghost",
                  size: "sm",
                  onClick: F,
                  title: "Refresh environments"
                }, {
                  default: s(() => [...M[8] || (M[8] = [
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
          search: s(() => [
            l(We, {
              modelValue: g.value,
              "onUpdate:modelValue": M[2] || (M[2] = (k) => g.value = k),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: s(() => [
            y.value ? (o(), w(Ie, {
              key: 0,
              message: "Loading environments..."
            })) : m.value ? (o(), w(Le, {
              key: 1,
              message: m.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
              h.value ? (o(), n("div", Pi, [
                e("div", Fi, [
                  M[10] || (M[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(R, {
                    variant: "ghost",
                    size: "xs",
                    onClick: G
                  }, {
                    default: s(() => [...M[9] || (M[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Ai, [
                  l(Fe, {
                    modelValue: p.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (k) => p.value = k),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Se(V, ["enter"]),
                      Se(G, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Wi, [
                    l(R, {
                      variant: "primary",
                      size: "sm",
                      onClick: V,
                      disabled: !p.value.trim()
                    }, {
                      default: s(() => [...M[11] || (M[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: G
                    }, {
                      default: s(() => [...M[12] || (M[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              u.value.length ? (o(), w(He, {
                key: 1,
                variant: "compact"
              }, {
                default: s(() => [
                  v(" Total: " + r(u.value.length) + " " + r(u.value.length === 1 ? "environment" : "environments") + " ", 1),
                  b.value ? (o(), n(P, { key: 0 }, [
                    M[13] || (M[13] = v(" • Current: ", -1)),
                    e("strong", null, r(b.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              C.value.length ? (o(), w(I, {
                key: 2,
                title: "ENVIRONMENTS",
                count: C.value.length
              }, {
                default: s(() => [
                  (o(!0), n(P, null, J(C.value, (k) => (o(), w(Oi, {
                    key: k.name,
                    "environment-name": k.name,
                    "is-current": k.is_current,
                    "current-branch": k.current_branch,
                    "workflow-count": k.workflow_count,
                    "node-count": k.node_count,
                    "model-count": k.model_count,
                    "last-used": z(k.last_used),
                    "show-last-used": !!k.last_used
                  }, {
                    actions: s(() => [
                      k.is_current ? d("", !0) : (o(), w(R, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (S) => q.$emit("switch", k.name)
                      }, {
                        default: s(() => [...M[14] || (M[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(R, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (S) => T(k.name),
                        title: "View environment details"
                      }, {
                        default: s(() => [...M[15] || (M[15] = [
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
                      !k.is_current && u.value.length > 1 ? (o(), w(R, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (S) => D(k.name),
                        title: "Delete environment"
                      }, {
                        default: s(() => [
                          (o(), n("svg", Hi, [...M[16] || (M[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
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
              C.value.length ? d("", !0) : (o(), w(Ce, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, bt({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: s(() => [
                    l(R, {
                      variant: "primary",
                      onClick: M[4] || (M[4] = (k) => h.value = !0)
                    }, {
                      default: s(() => [...M[17] || (M[17] = [
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
        l(Ee, {
          show: f.value,
          title: "About Environments",
          onClose: M[6] || (M[6] = (k) => f.value = !1)
        }, {
          content: s(() => [...M[18] || (M[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              v(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: s(() => [
            l(R, {
              variant: "secondary",
              onClick: M[5] || (M[5] = (k) => f.value = !1)
            }, {
              default: s(() => [...M[19] || (M[19] = [
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
}), ji = /* @__PURE__ */ W(Gi, [["__scopeId", "data-v-97d6527d"]]), qi = { class: "file-path" }, Ki = { class: "file-path-text" }, Ji = ["title"], Yi = /* @__PURE__ */ A({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, a = x(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), a.value = !0, setTimeout(() => {
          a.value = !1;
        }, 2e3);
      } catch (u) {
        console.error("Failed to copy:", u);
      }
    }
    return (u, y) => (o(), n("div", qi, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Ki, r(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: a.value ? "Copied!" : "Copy path",
        onClick: i
      }, r(a.value ? "✓" : "📋"), 9, Ji)) : d("", !0)
    ]));
  }
}), Xi = /* @__PURE__ */ W(Yi, [["__scopeId", "data-v-f0982173"]]), Qi = { class: "output-path-input" }, Zi = { class: "export-actions" }, er = {
  key: 1,
  class: "export-warning"
}, tr = /* @__PURE__ */ A({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = pe(), a = x(""), i = x(!1), u = x(null), y = x(!1);
    async function m() {
      i.value = !0, u.value = null;
      try {
        const f = await c(a.value || void 0);
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
    return (f, h) => (o(), n(P, null, [
      l(ge, null, {
        header: s(() => [
          l(he, { title: "EXPORT ENVIRONMENT" }, {
            actions: s(() => [
              l(R, {
                variant: "ghost",
                size: "sm",
                onClick: h[0] || (h[0] = (p) => y.value = !0),
                title: "About exporting"
              }, {
                default: s(() => [...h[5] || (h[5] = [
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
        content: s(() => [
          l(re, { title: "WHAT WILL BE EXPORTED" }, {
            default: s(() => [
              l(ue, { status: "synced" }, {
                icon: s(() => [...h[6] || (h[6] = [
                  v("📦", -1)
                ])]),
                title: s(() => [...h[7] || (h[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: s(() => [...h[8] || (h[8] = [
                  v(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: s(() => [
                  l(Z, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  l(Z, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  l(Z, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  l(Z, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(re, { title: "EXPORT OPTIONS" }, {
            default: s(() => [
              l(ue, { status: "synced" }, {
                icon: s(() => [...h[9] || (h[9] = [
                  v("📁", -1)
                ])]),
                title: s(() => [...h[10] || (h[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: s(() => [...h[11] || (h[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: s(() => [
                  e("div", Qi, [
                    l(Fe, {
                      modelValue: a.value,
                      "onUpdate:modelValue": h[1] || (h[1] = (p) => a.value = p),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(re, { title: "EXPORT" }, {
            default: s(() => [
              e("div", Zi, [
                l(R, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: m
                }, {
                  default: s(() => [
                    h[12] || (h[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    v(" " + r(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                a.value ? (o(), w(R, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: h[2] || (h[2] = (p) => a.value = "")
                }, {
                  default: s(() => [...h[13] || (h[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          u.value ? (o(), w(re, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: s(() => [
              l(ue, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, bt({
                icon: s(() => [
                  v(r(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: s(() => [
                  v(r(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: s(() => [
                  v(r(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: s(() => [
                    l(Z, { label: "Saved to:" }, {
                      default: s(() => [
                        l(Xi, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (o(), w(Z, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (o(), n("div", er, [...h[14] || (h[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: s(() => [
                    l(R, {
                      variant: "secondary",
                      size: "sm",
                      onClick: g
                    }, {
                      default: s(() => [...h[15] || (h[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    l(R, {
                      variant: "ghost",
                      size: "sm",
                      onClick: h[3] || (h[3] = (p) => u.value = null)
                    }, {
                      default: s(() => [...h[16] || (h[16] = [
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
      l(Ee, {
        show: y.value,
        title: "About Environment Export",
        onClose: h[4] || (h[4] = (p) => y.value = !1)
      }, {
        content: s(() => [...h[17] || (h[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            v(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), or = /* @__PURE__ */ W(tr, [["__scopeId", "data-v-1777a9d5"]]), sr = { class: "file-input-wrapper" }, ar = ["accept", "multiple", "disabled"], nr = /* @__PURE__ */ A({
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
  setup(t, { expose: c, emit: a }) {
    const i = a, u = x(null);
    function y() {
      var g;
      (g = u.value) == null || g.click();
    }
    function m(g) {
      const f = g.target;
      f.files && f.files.length > 0 && (i("change", f.files), f.value = "");
    }
    return c({
      triggerInput: y
    }), (g, f) => (o(), n("div", sr, [
      e("input", {
        ref_key: "fileInputRef",
        ref: u,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, ar),
      l(R, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: s(() => [
          te(g.$slots, "default", {}, () => [
            f[0] || (f[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            v(" " + r(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), lr = /* @__PURE__ */ W(nr, [["__scopeId", "data-v-cd192091"]]), ir = {
  key: 0,
  class: "drop-zone-empty"
}, rr = { class: "drop-zone-text" }, cr = { class: "drop-zone-primary" }, dr = { class: "drop-zone-secondary" }, ur = { class: "drop-zone-actions" }, mr = {
  key: 1,
  class: "drop-zone-file"
}, vr = { class: "file-info" }, fr = { class: "file-details" }, gr = { class: "file-name" }, hr = { class: "file-size" }, pr = /* @__PURE__ */ A({
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
    const a = c, i = x(!1), u = x(null), y = x(0), m = H(() => u.value !== null), g = H(() => {
      var T;
      return ((T = u.value) == null ? void 0 : T.name) || "";
    }), f = H(() => {
      if (!u.value) return "";
      const T = u.value.size;
      return T < 1024 ? `${T} B` : T < 1024 * 1024 ? `${(T / 1024).toFixed(1)} KB` : T < 1024 * 1024 * 1024 ? `${(T / (1024 * 1024)).toFixed(1)} MB` : `${(T / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function h(T) {
      var D;
      y.value++, (D = T.dataTransfer) != null && D.types.includes("Files") && (i.value = !0);
    }
    function p(T) {
      T.dataTransfer && (T.dataTransfer.dropEffect = "copy");
    }
    function b() {
      y.value--, y.value === 0 && (i.value = !1);
    }
    function C(T) {
      var F;
      y.value = 0, i.value = !1;
      const D = (F = T.dataTransfer) == null ? void 0 : F.files;
      D && D.length > 0 && V(D[0]);
    }
    function z(T) {
      T.length > 0 && V(T[0]);
    }
    function V(T) {
      u.value = T, a("fileSelected", T);
    }
    function G() {
      u.value = null, a("clear");
    }
    return (T, D) => (o(), n("div", {
      class: K(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: fe(h, ["prevent"]),
      onDragover: fe(p, ["prevent"]),
      onDragleave: fe(b, ["prevent"]),
      onDrop: fe(C, ["prevent"])
    }, [
      m.value ? (o(), n("div", mr, [
        e("div", vr, [
          D[1] || (D[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", fr, [
            e("div", gr, r(g.value), 1),
            e("div", hr, r(f.value), 1)
          ])
        ]),
        l(R, {
          variant: "ghost",
          size: "xs",
          onClick: G,
          title: "Remove file"
        }, {
          default: s(() => [...D[2] || (D[2] = [
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
      ])) : (o(), n("div", ir, [
        D[0] || (D[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", rr, [
          e("p", cr, r(t.primaryText), 1),
          e("p", dr, r(t.secondaryText), 1)
        ]),
        e("div", ur, [
          l(lr, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: z
          }, {
            default: s(() => [
              v(r(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), yr = /* @__PURE__ */ W(pr, [["__scopeId", "data-v-e00abbca"]]), wr = { class: "import-preview" }, br = { class: "preview-header" }, kr = {
  key: 0,
  class: "source-env"
}, $r = { class: "preview-content" }, Cr = { class: "preview-section" }, _r = { class: "section-header" }, xr = { class: "section-info" }, Sr = { class: "section-count" }, Er = {
  key: 0,
  class: "item-list"
}, Ir = { class: "item-name" }, Lr = {
  key: 0,
  class: "item-more"
}, zr = { class: "preview-section" }, Mr = { class: "section-header" }, Nr = { class: "section-info" }, Dr = { class: "section-count" }, Tr = {
  key: 0,
  class: "item-list"
}, Vr = { class: "item-details" }, Br = { class: "item-name" }, Rr = { class: "item-meta" }, Ur = {
  key: 0,
  class: "item-more"
}, Or = { class: "preview-section" }, Pr = { class: "section-header" }, Fr = { class: "section-info" }, Ar = { class: "section-count" }, Wr = {
  key: 0,
  class: "item-list"
}, Hr = { class: "item-name" }, Gr = {
  key: 0,
  class: "item-more"
}, jr = {
  key: 0,
  class: "preview-section"
}, qr = { class: "git-info" }, Kr = /* @__PURE__ */ A({
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
    const c = t, a = H(() => c.workflows.length), i = H(() => c.models.length), u = H(() => c.nodes.length);
    function y(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, g) => (o(), n("div", wr, [
      e("div", br, [
        l(we, null, {
          default: s(() => [...g[0] || (g[0] = [
            v("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", kr, [
          g[1] || (g[1] = v(" From: ", -1)),
          l(Pe, null, {
            default: s(() => [
              v(r(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", $r, [
        e("div", Cr, [
          e("div", _r, [
            g[3] || (g[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", xr, [
              g[2] || (g[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Sr, r(a.value) + " file" + r(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Er, [
            (o(!0), n(P, null, J(t.workflows.slice(0, t.maxPreviewItems), (f) => (o(), n("div", {
              key: f,
              class: "preview-item"
            }, [
              g[4] || (g[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ir, r(f), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Lr, " +" + r(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", zr, [
          e("div", Mr, [
            g[6] || (g[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Nr, [
              g[5] || (g[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Dr, r(i.value) + " file" + r(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Tr, [
            (o(!0), n(P, null, J(t.models.slice(0, t.maxPreviewItems), (f) => (o(), n("div", {
              key: f.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Vr, [
                e("span", Br, r(f.filename), 1),
                e("span", Rr, r(y(f.size)) + " • " + r(f.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Ur, " +" + r(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Or, [
          e("div", Pr, [
            g[9] || (g[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Fr, [
              g[8] || (g[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Ar, r(u.value) + " node" + r(u.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Wr, [
            (o(!0), n(P, null, J(t.nodes.slice(0, t.maxPreviewItems), (f) => (o(), n("div", {
              key: f,
              class: "preview-item"
            }, [
              g[10] || (g[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Hr, r(f), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", Gr, " +" + r(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", jr, [
          g[11] || (g[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", qr, [
            t.gitBranch ? (o(), w(Z, {
              key: 0,
              label: "Branch"
            }, {
              default: s(() => [
                l(Pe, null, {
                  default: s(() => [
                    v(r(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), w(Z, {
              key: 1,
              label: "Commit"
            }, {
              default: s(() => [
                l(_t, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ W(Kr, [["__scopeId", "data-v-182fe113"]]), Yr = { class: "import-options" }, Xr = { class: "options-container" }, Qr = { class: "option-section" }, Zr = { class: "conflict-options" }, ec = ["value", "checked", "onChange"], tc = { class: "conflict-content" }, oc = { class: "conflict-label" }, sc = { class: "conflict-description" }, ac = { class: "option-section" }, nc = { class: "component-toggles" }, lc = /* @__PURE__ */ A({
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
    const a = c, i = [
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
    return (u, y) => (o(), n("div", Yr, [
      l(we, null, {
        default: s(() => [...y[4] || (y[4] = [
          v("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Xr, [
        e("div", Qr, [
          l(ct, null, {
            default: s(() => [...y[5] || (y[5] = [
              v("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Zr, [
            (o(), n(P, null, J(i, (m) => e("label", {
              key: m.value,
              class: K(["conflict-option", { active: t.conflictMode === m.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: t.conflictMode === m.value,
                onChange: (g) => a("update:conflictMode", m.value)
              }, null, 40, ec),
              e("div", tc, [
                e("span", oc, r(m.label), 1),
                e("span", sc, r(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", ac, [
          l(ct, null, {
            default: s(() => [...y[6] || (y[6] = [
              v("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", nc, [
            l(le, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: s(() => [
                l(ve, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (m) => a("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(le, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: s(() => [
                l(ve, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (m) => a("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(le, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: s(() => [
                l(ve, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (m) => a("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(le, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: s(() => [
                l(ve, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (m) => a("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), ic = /* @__PURE__ */ W(lc, [["__scopeId", "data-v-0ec212b0"]]), rc = {
  key: 0,
  class: "import-empty"
}, cc = { class: "import-help" }, dc = {
  key: 1,
  class: "import-configure"
}, uc = { class: "selected-file-bar" }, mc = { class: "file-bar-content" }, vc = { class: "file-bar-info" }, fc = { class: "file-bar-name" }, gc = { class: "file-bar-size" }, hc = { class: "import-actions" }, pc = {
  key: 2,
  class: "import-progress"
}, yc = { class: "progress-content" }, wc = { class: "progress-info" }, bc = { class: "progress-title" }, kc = { class: "progress-detail" }, $c = { class: "progress-bar" }, Cc = { class: "progress-status" }, _c = {
  key: 3,
  class: "import-complete"
}, xc = { class: "complete-message" }, Sc = { class: "complete-title" }, Ec = { class: "complete-details" }, Ic = { class: "complete-actions" }, Lc = /* @__PURE__ */ A({
  __name: "ImportSection",
  setup(t) {
    const c = x(null), a = x(!1), i = x(!1), u = x(!1), y = x(""), m = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), f = x({
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
    }), h = H(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function p(G) {
      c.value = G;
    }
    function b() {
      c.value = null, i.value = !1, u.value = !1, y.value = "";
    }
    function C() {
      b(), a.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function z() {
      if (c.value) {
        a.value = !0, i.value = !1;
        try {
          const G = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${f.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${f.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${f.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const T of G)
            g.value = T, await new Promise((D) => setTimeout(D, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((T) => setTimeout(T, 500)), u.value = !0, y.value = `Successfully imported ${f.value.workflows.length} workflows, ${f.value.models.length} models, and ${f.value.nodes.length} custom nodes.`;
        } catch (G) {
          u.value = !1, y.value = G instanceof Error ? G.message : "Unknown error occurred during import";
        } finally {
          a.value = !1, i.value = !0;
        }
      }
    }
    function V(G) {
      return G < 1024 ? `${G} B` : G < 1024 * 1024 ? `${(G / 1024).toFixed(1)} KB` : G < 1024 * 1024 * 1024 ? `${(G / (1024 * 1024)).toFixed(1)} MB` : `${(G / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (G, T) => (o(), w(ge, null, {
      header: s(() => [
        l(he, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: s(() => [
        !c.value && !a.value ? (o(), n("div", rc, [
          l(yr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: p
          }),
          e("div", cc, [
            l(we, null, {
              default: s(() => [...T[5] || (T[5] = [
                v("How to Import", -1)
              ])]),
              _: 1
            }),
            T[6] || (T[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !a.value && !i.value ? (o(), n("div", dc, [
          e("div", uc, [
            e("div", mc, [
              T[7] || (T[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", vc, [
                e("div", fc, r(c.value.name), 1),
                e("div", gc, r(V(c.value.size)), 1)
              ])
            ]),
            l(R, {
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: s(() => [...T[8] || (T[8] = [
                v(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          l(Jr, {
            "source-environment": f.value.sourceEnvironment,
            workflows: f.value.workflows,
            models: f.value.models,
            nodes: f.value.nodes,
            "git-branch": f.value.gitBranch,
            "git-commit": f.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          l(ic, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": T[0] || (T[0] = (D) => m.value.conflictMode = D),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": T[1] || (T[1] = (D) => m.value.includeWorkflows = D),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": T[2] || (T[2] = (D) => m.value.includeModels = D),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": T[3] || (T[3] = (D) => m.value.includeNodes = D),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": T[4] || (T[4] = (D) => m.value.includeGitHistory = D)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && f.value.models.length > 0 ? (o(), w(Ze, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${f.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", hc, [
            l(R, {
              variant: "primary",
              size: "md",
              disabled: !h.value,
              onClick: z
            }, {
              default: s(() => [...T[9] || (T[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                v(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            l(R, {
              variant: "secondary",
              size: "md",
              onClick: b
            }, {
              default: s(() => [...T[10] || (T[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : a.value ? (o(), n("div", pc, [
          e("div", yc, [
            T[11] || (T[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", wc, [
              e("div", bc, r(g.value.message), 1),
              e("div", kc, r(g.value.detail), 1)
            ])
          ]),
          e("div", $c, [
            e("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Cc, r(g.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", _c, [
          e("div", {
            class: K(["complete-icon", u.value ? "success" : "error"])
          }, r(u.value ? "✓" : "✕"), 3),
          e("div", xc, [
            e("div", Sc, r(u.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Ec, r(y.value), 1)
          ]),
          e("div", Ic, [
            l(R, {
              variant: "primary",
              size: "md",
              onClick: C
            }, {
              default: s(() => [...T[12] || (T[12] = [
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
}), zc = /* @__PURE__ */ W(Lc, [["__scopeId", "data-v-18e18eb5"]]), Mc = { class: "header-info" }, Nc = { class: "commit-hash" }, Dc = {
  key: 0,
  class: "commit-refs"
}, Tc = { class: "commit-message" }, Vc = { class: "commit-date" }, Bc = {
  key: 0,
  class: "loading"
}, Rc = {
  key: 1,
  class: "changes-section"
}, Uc = { class: "stats-row" }, Oc = { class: "stat" }, Pc = { class: "stat insertions" }, Fc = { class: "stat deletions" }, Ac = {
  key: 0,
  class: "change-group"
}, Wc = {
  key: 1,
  class: "change-group"
}, Hc = {
  key: 0,
  class: "version"
}, Gc = {
  key: 2,
  class: "change-group"
}, jc = { class: "change-item" }, qc = /* @__PURE__ */ A({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: a } = pe(), i = x(null), u = x(!0), y = H(() => {
      if (!i.value) return !1;
      const g = i.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), m = H(() => {
      if (!i.value) return !1;
      const g = i.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return me(async () => {
      try {
        i.value = await a(c.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (g, f) => (o(), w(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: f[3] || (f[3] = (h) => g.$emit("close"))
    }, {
      header: s(() => {
        var h, p, b, C;
        return [
          e("div", Mc, [
            f[4] || (f[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Nc, r(((h = i.value) == null ? void 0 : h.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (C = (b = i.value) == null ? void 0 : b.refs) != null && C.length ? (o(), n("span", Dc, [
              (o(!0), n(P, null, J(i.value.refs, (z) => (o(), n("span", {
                key: z,
                class: "ref-badge"
              }, r(z), 1))), 128))
            ])) : d("", !0)
          ]),
          l(de, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (z) => g.$emit("close"))
          }, {
            default: s(() => [...f[5] || (f[5] = [
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
      body: s(() => {
        var h, p;
        return [
          e("div", Tc, r(((h = i.value) == null ? void 0 : h.message) || t.commit.message), 1),
          e("div", Vc, r(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          u.value ? (o(), n("div", Bc, "Loading details...")) : i.value ? (o(), n("div", Rc, [
            e("div", Uc, [
              e("span", Oc, r(i.value.stats.files_changed) + " files", 1),
              e("span", Pc, "+" + r(i.value.stats.insertions), 1),
              e("span", Fc, "-" + r(i.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", Ac, [
              l(Ne, { variant: "section" }, {
                default: s(() => [...f[6] || (f[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, J(i.value.changes.workflows.added, (b) => (o(), n("div", {
                key: "add-" + b,
                class: "change-item added"
              }, [
                f[7] || (f[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, r(b), 1)
              ]))), 128)),
              (o(!0), n(P, null, J(i.value.changes.workflows.modified, (b) => (o(), n("div", {
                key: "mod-" + b,
                class: "change-item modified"
              }, [
                f[8] || (f[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, r(b), 1)
              ]))), 128)),
              (o(!0), n(P, null, J(i.value.changes.workflows.deleted, (b) => (o(), n("div", {
                key: "del-" + b,
                class: "change-item deleted"
              }, [
                f[9] || (f[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, r(b), 1)
              ]))), 128))
            ])) : d("", !0),
            m.value ? (o(), n("div", Wc, [
              l(Ne, { variant: "section" }, {
                default: s(() => [...f[10] || (f[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, J(i.value.changes.nodes.added, (b) => (o(), n("div", {
                key: "add-" + b.name,
                class: "change-item added"
              }, [
                f[11] || (f[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, r(b.name), 1),
                b.version ? (o(), n("span", Hc, "(" + r(b.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), n(P, null, J(i.value.changes.nodes.removed, (b) => (o(), n("div", {
                key: "rem-" + b.name,
                class: "change-item deleted"
              }, [
                f[12] || (f[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, r(b.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", Gc, [
              l(Ne, { variant: "section" }, {
                default: s(() => [...f[13] || (f[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", jc, [
                f[14] || (f[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, r(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: s(() => [
        l(de, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (h) => g.$emit("createBranch", t.commit))
        }, {
          default: s(() => [...f[15] || (f[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(de, {
          variant: "primary",
          onClick: f[2] || (f[2] = (h) => g.$emit("checkout", t.commit))
        }, {
          default: s(() => [...f[16] || (f[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Kc = /* @__PURE__ */ W(qc, [["__scopeId", "data-v-d256ff6d"]]), Jc = { class: "dialog-message" }, Yc = {
  key: 0,
  class: "dialog-details"
}, Xc = {
  key: 1,
  class: "dialog-warning"
}, Qc = /* @__PURE__ */ A({
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
    return (c, a) => (o(), w(tt, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (i) => c.$emit("cancel"))
    }, {
      body: s(() => [
        e("p", Jc, r(t.message), 1),
        t.details && t.details.length ? (o(), n("div", Yc, [
          (o(!0), n(P, null, J(t.details, (i, u) => (o(), n("div", {
            key: u,
            class: "detail-item"
          }, " • " + r(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), n("p", Xc, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + r(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: s(() => [
        l(de, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (i) => c.$emit("cancel"))
        }, {
          default: s(() => [
            v(r(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), w(de, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (i) => c.$emit("secondary"))
        }, {
          default: s(() => [
            v(r(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        l(de, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (i) => c.$emit("confirm"))
        }, {
          default: s(() => [
            v(r(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Zc = /* @__PURE__ */ W(Qc, [["__scopeId", "data-v-3670b9f5"]]), ed = { class: "base-textarea-wrapper" }, td = ["value", "rows", "placeholder", "disabled", "maxlength"], od = {
  key: 0,
  class: "base-textarea-count"
}, sd = /* @__PURE__ */ A({
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
    return (c, a) => (o(), n("div", ed, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          a[1] || (a[1] = Se(fe((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = Se(fe((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, td),
      t.showCharCount && t.maxLength ? (o(), n("div", od, r(t.modelValue.length) + " / " + r(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ W(sd, [["__scopeId", "data-v-5516e6fc"]]), ad = { class: "popover-header" }, nd = { class: "popover-body" }, ld = {
  key: 0,
  class: "changes-summary"
}, id = {
  key: 0,
  class: "change-item"
}, rd = {
  key: 1,
  class: "change-item"
}, cd = {
  key: 2,
  class: "change-item"
}, dd = {
  key: 3,
  class: "change-item"
}, ud = {
  key: 4,
  class: "change-item"
}, md = {
  key: 1,
  class: "no-changes"
}, vd = {
  key: 2,
  class: "loading"
}, fd = { class: "message-section" }, gd = { class: "popover-footer" }, hd = {
  key: 1,
  class: "commit-popover"
}, pd = { class: "popover-header" }, yd = { class: "popover-body" }, wd = {
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
}, Cd = {
  key: 3,
  class: "change-item"
}, _d = {
  key: 4,
  class: "change-item"
}, xd = {
  key: 1,
  class: "no-changes"
}, Sd = {
  key: 2,
  class: "loading"
}, Ed = { class: "message-section" }, Id = { class: "popover-footer" }, Ld = /* @__PURE__ */ A({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const a = t, i = c, { commit: u } = pe(), y = x(""), m = x(!1), g = x(null), f = H(() => {
      if (!a.status) return !1;
      const p = a.status.workflows;
      return p.new.length > 0 || p.modified.length > 0 || p.deleted.length > 0 || a.status.has_changes;
    });
    async function h() {
      var p, b, C;
      if (!(!f.value || !y.value.trim() || m.value)) {
        m.value = !0, g.value = null;
        try {
          const z = await u(y.value.trim());
          z.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((p = z.summary) == null ? void 0 : p.new) || 0} new, ${((b = z.summary) == null ? void 0 : b.modified) || 0} modified, ${((C = z.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, y.value = "", setTimeout(() => i("committed"), 1e3)) : z.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          g.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (p, b) => t.asModal ? (o(), w(Re, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[4] || (b[4] = (C) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[3] || (b[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", ad, [
            b[9] || (b[9] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (C) => i("close"))
            }, [...b[8] || (b[8] = [
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
          e("div", nd, [
            t.status && f.value ? (o(), n("div", ld, [
              t.status.workflows.new.length ? (o(), n("div", id, [
                b[10] || (b[10] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, r(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), n("div", rd, [
                b[11] || (b[11] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, r(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", cd, [
                b[12] || (b[12] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, r(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", dd, [
                b[13] || (b[13] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, r(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", ud, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, r(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), n("div", md, " No changes to commit ")) : (o(), n("div", vd, " Loading... ")),
            e("div", fd, [
              l(yt, {
                modelValue: y.value,
                "onUpdate:modelValue": b[1] || (b[1] = (C) => y.value = C),
                placeholder: f.value ? "Describe your changes..." : "No changes",
                disabled: !f.value || m.value,
                rows: 3,
                onCtrlEnter: h
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            g.value ? (o(), n("div", {
              key: 3,
              class: K(["result", g.value.type])
            }, r(g.value.message), 3)) : d("", !0)
          ]),
          e("div", gd, [
            l(de, {
              variant: "secondary",
              onClick: b[2] || (b[2] = (C) => i("close"))
            }, {
              default: s(() => [...b[15] || (b[15] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(de, {
              variant: "primary",
              disabled: !f.value || !y.value.trim() || m.value,
              loading: m.value,
              onClick: h
            }, {
              default: s(() => [
                v(r(m.value ? "Committing..." : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", hd, [
      e("div", pd, [
        b[17] || (b[17] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[5] || (b[5] = (C) => i("close"))
        }, [...b[16] || (b[16] = [
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
        t.status && f.value ? (o(), n("div", wd, [
          t.status.workflows.new.length ? (o(), n("div", bd, [
            b[18] || (b[18] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, r(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), n("div", kd, [
            b[19] || (b[19] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, r(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", $d, [
            b[20] || (b[20] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, r(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Cd, [
            b[21] || (b[21] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, r(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", _d, [
            b[22] || (b[22] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, r(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), n("div", xd, " No changes to commit ")) : (o(), n("div", Sd, " Loading... ")),
        e("div", Ed, [
          l(yt, {
            modelValue: y.value,
            "onUpdate:modelValue": b[6] || (b[6] = (C) => y.value = C),
            placeholder: f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || m.value,
            rows: 3,
            onCtrlEnter: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (o(), n("div", {
          key: 3,
          class: K(["result", g.value.type])
        }, r(g.value.message), 3)) : d("", !0)
      ]),
      e("div", Id, [
        l(de, {
          variant: "secondary",
          onClick: b[7] || (b[7] = (C) => i("close"))
        }, {
          default: s(() => [...b[23] || (b[23] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(de, {
          variant: "primary",
          disabled: !f.value || !y.value.trim() || m.value,
          loading: m.value,
          onClick: h
        }, {
          default: s(() => [
            v(r(m.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), xt = /* @__PURE__ */ W(Ld, [["__scopeId", "data-v-a8e2ae3a"]]), zd = { class: "modal-header" }, Md = { class: "modal-body" }, Nd = { class: "switch-message" }, Dd = { class: "switch-details" }, Td = { class: "modal-actions" }, Vd = /* @__PURE__ */ A({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, a) => (o(), w(Re, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", zd, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Md, [
            e("p", Nd, [
              a[6] || (a[6] = v(" Switch from ", -1)),
              e("strong", null, r(t.fromEnvironment), 1),
              a[7] || (a[7] = v(" to ", -1)),
              e("strong", null, r(t.toEnvironment), 1),
              a[8] || (a[8] = v("? ", -1))
            ]),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Dd, ' Your current work will be preserved. You can switch back to "' + r(t.fromEnvironment) + '" anytime. ', 1),
            a[10] || (a[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Td, [
            l(R, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (i) => c.$emit("close"))
            }, {
              default: s(() => [...a[11] || (a[11] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(R, {
              variant: "primary",
              onClick: a[2] || (a[2] = (i) => c.$emit("confirm"))
            }, {
              default: s(() => [...a[12] || (a[12] = [
                v(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Bd = /* @__PURE__ */ W(Vd, [["__scopeId", "data-v-e9c5253e"]]), Rd = { class: "progress-bar" }, Ud = /* @__PURE__ */ A({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, a = H(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, u) => (o(), n("div", Rd, [
      e("div", {
        class: K(["progress-fill", t.variant]),
        style: Je({ width: a.value })
      }, null, 6)
    ]));
  }
}), Od = /* @__PURE__ */ W(Ud, [["__scopeId", "data-v-1beb0512"]]), Pd = {
  key: 0,
  class: "modal-overlay"
}, Fd = { class: "modal-content" }, Ad = { class: "modal-body" }, Wd = { class: "progress-info" }, Hd = { class: "progress-percentage" }, Gd = { class: "progress-state" }, jd = { class: "switch-steps" }, qd = { class: "step-icon" }, Kd = { class: "step-label" }, Jd = /* @__PURE__ */ A({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, a = H(() => {
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
      return c.message || y[c.state] || c.state;
    }), i = H(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), u = H(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = y.findIndex((g) => g.state === c.state);
      return y.map((g, f) => {
        let h = "pending", p = "○";
        return f < m ? (h = "completed", p = "✓") : f === m && (h = "active", p = "⟳"), {
          ...g,
          status: h,
          icon: p
        };
      });
    });
    return (y, m) => (o(), w(Re, { to: "body" }, [
      t.show ? (o(), n("div", Pd, [
        e("div", Fd, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ad, [
            l(Od, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Wd, [
              e("div", Hd, r(t.progress) + "%", 1),
              e("div", Gd, r(a.value), 1)
            ]),
            e("div", jd, [
              (o(!0), n(P, null, J(u.value, (g) => (o(), n("div", {
                key: g.state,
                class: K(["switch-step", g.status])
              }, [
                e("span", qd, r(g.icon), 1),
                e("span", Kd, r(g.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Yd = /* @__PURE__ */ W(Jd, [["__scopeId", "data-v-768a5078"]]), Xd = { class: "modal-header" }, Qd = { class: "modal-body" }, Zd = {
  key: 0,
  class: "node-section"
}, eu = { class: "node-list" }, tu = {
  key: 1,
  class: "node-section"
}, ou = { class: "node-list" }, su = { class: "modal-actions" }, au = /* @__PURE__ */ A({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, a) => (o(), w(Re, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: a[4] || (a[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: a[3] || (a[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Xd, [
            a[5] || (a[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: a[0] || (a[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Qd, [
            a[8] || (a[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Zd, [
              a[6] || (a[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", eu, [
                (o(!0), n(P, null, J(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + r(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", tu, [
              a[7] || (a[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", ou, [
                (o(!0), n(P, null, J(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + r(i), 1))), 128))
              ])
            ])) : d("", !0),
            a[9] || (a[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", su, [
            l(R, {
              variant: "secondary",
              onClick: a[1] || (a[1] = (i) => c.$emit("close"))
            }, {
              default: s(() => [...a[10] || (a[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(R, {
              variant: "primary",
              onClick: a[2] || (a[2] = (i) => c.$emit("confirm"))
            }, {
              default: s(() => [...a[11] || (a[11] = [
                v(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), nu = /* @__PURE__ */ W(au, [["__scopeId", "data-v-7cad7518"]]);
async function je(t, c = {}, a = 5e3) {
  const i = new AbortController(), u = setTimeout(() => i.abort(), a);
  try {
    const y = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(u), y;
  } catch (y) {
    throw clearTimeout(u), y.name === "AbortError" ? new Error(`Request timeout after ${a}ms`) : y;
  }
}
function lu() {
  const t = x(null);
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
  async function a() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await je(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await je(
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
  async function u() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: a,
    getStatus: i,
    restart: u,
    kill: y
  };
}
const iu = { class: "comfygit-panel" }, ru = { class: "panel-header" }, cu = { class: "header-left" }, du = {
  key: 0,
  class: "header-info"
}, uu = { class: "header-actions" }, mu = { class: "env-switcher" }, vu = {
  key: 0,
  class: "header-info"
}, fu = { class: "branch-name" }, gu = { class: "panel-main" }, hu = { class: "sidebar" }, pu = { class: "sidebar-section" }, yu = { class: "sidebar-section" }, wu = { class: "sidebar-section" }, bu = { class: "content-area" }, ku = {
  key: 0,
  class: "error-message"
}, $u = {
  key: 1,
  class: "loading"
}, Cu = { class: "dialog-content env-selector-dialog" }, _u = { class: "dialog-header" }, xu = { class: "dialog-body" }, Su = { class: "env-list" }, Eu = { class: "env-info" }, Iu = { class: "env-name-row" }, Lu = { class: "env-indicator" }, zu = { class: "env-name" }, Mu = {
  key: 0,
  class: "env-branch"
}, Nu = {
  key: 1,
  class: "current-label"
}, Du = { class: "env-stats" }, Tu = ["onClick"], Vu = { class: "toast-container" }, Bu = { class: "toast-icon" }, Ru = { class: "toast-message" }, Uu = /* @__PURE__ */ A({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const a = c, {
      getStatus: i,
      getHistory: u,
      getBranches: y,
      checkout: m,
      createBranch: g,
      switchBranch: f,
      getEnvironments: h,
      switchEnvironment: p,
      getSwitchProgress: b,
      syncEnvironmentManually: C
    } = pe(), z = lu(), V = x(null), G = x([]), T = x([]), D = x([]), F = H(() => D.value.find((B) => B.is_current)), q = x(!1), M = x(null), I = x(null), k = x(!1), S = x(!1), _ = x(!1), L = x(""), N = x({ state: "idle", progress: 0, message: "" });
    let j = null, U = null;
    const E = x("status"), Y = x("this-env");
    function oe(B, $) {
      E.value = B, Y.value = $;
    }
    function Ue(B) {
      const se = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[B];
      se && oe(se.view, se.section);
    }
    function Oe() {
      oe("branches", "this-env");
    }
    const ce = x(null), ee = x(!1), De = x(!1), ze = x([]);
    let ot = 0;
    function ne(B, $ = "info", se = 3e3) {
      const ie = ++ot;
      return ze.value.push({ id: ie, message: B, type: $ }), se > 0 && setTimeout(() => {
        ze.value = ze.value.filter((be) => be.id !== ie);
      }, se), ie;
    }
    function _e(B) {
      ze.value = ze.value.filter(($) => $.id !== B);
    }
    function st(B) {
      switch (B) {
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
    const O = H(() => {
      if (!V.value) return "neutral";
      const B = V.value.workflows, $ = B.new.length > 0 || B.modified.length > 0 || B.deleted.length > 0 || V.value.has_changes;
      return V.value.comparison.is_synced ? $ ? "warning" : "success" : "error";
    });
    H(() => V.value ? O.value === "success" ? "All synced" : O.value === "warning" ? "Uncommitted changes" : O.value === "error" ? "Not synced" : "" : "");
    async function X() {
      q.value = !0, M.value = null;
      try {
        const [B, $, se, ie] = await Promise.all([
          i(),
          u(),
          y(),
          h()
        ]);
        V.value = B, G.value = $.commits, T.value = se.branches, D.value = ie, a("statusUpdate", B);
      } catch (B) {
        M.value = B instanceof Error ? B.message : "Failed to load status", V.value = null, G.value = [], T.value = [];
      } finally {
        q.value = !1;
      }
    }
    function ae(B) {
      I.value = B;
    }
    async function Ge(B) {
      var se;
      I.value = null;
      const $ = V.value && (V.value.workflows.new.length > 0 || V.value.workflows.modified.length > 0 || V.value.workflows.deleted.length > 0 || V.value.has_changes);
      ce.value = {
        title: $ ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: $ ? "You have uncommitted changes that will be lost." : `Checkout commit ${B.short_hash || ((se = B.hash) == null ? void 0 : se.slice(0, 7))}?`,
        details: $ ? gt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: $,
        onConfirm: async () => {
          var ke;
          ce.value = null;
          const ie = ne(`Checking out ${B.short_hash || ((ke = B.hash) == null ? void 0 : ke.slice(0, 7))}...`, "info", 0), be = await m(B.hash, $);
          _e(ie), be.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(be.message || "Checkout failed", "error");
        }
      };
    }
    async function Ye(B) {
      const $ = V.value && (V.value.workflows.new.length > 0 || V.value.workflows.modified.length > 0 || V.value.workflows.deleted.length > 0 || V.value.has_changes);
      ce.value = {
        title: $ ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: $ ? "You have uncommitted changes." : `Switch to branch "${B}"?`,
        details: $ ? gt() : void 0,
        warning: $ ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null;
          const se = ne(`Switching to ${B}...`, "info", 0), ie = await f(B, $);
          _e(se), ie.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function zt(B) {
      const $ = ne(`Creating branch ${B}...`, "info", 0), se = await g(B);
      _e($), se.status === "success" ? (ne(`Branch "${B}" created`, "success"), await X()) : ne(se.message || "Failed to create branch", "error");
    }
    async function Mt(B) {
      I.value = null;
      const $ = prompt("Enter branch name:");
      if ($) {
        const se = ne(`Creating branch ${$}...`, "info", 0), ie = await g($, B.hash);
        _e(se), ie.status === "success" ? (ne(`Branch "${$}" created from ${B.short_hash}`, "success"), await X()) : ne(ie.message || "Failed to create branch", "error");
      }
    }
    async function ft(B) {
      k.value = !1, L.value = B, S.value = !0;
    }
    async function Nt() {
      S.value = !1, _.value = !0, N.value = {
        progress: 10,
        state: Xe(10),
        message: Qe(10)
      };
      try {
        await p(L.value), Dt(), Tt();
      } catch (B) {
        Te(), _.value = !1, ne(`Failed to initiate switch: ${B instanceof Error ? B.message : "Unknown error"}`, "error"), N.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Xe(B) {
      return B >= 100 ? "complete" : B >= 80 ? "validating" : B >= 60 ? "starting" : B >= 30 ? "syncing" : "preparing";
    }
    function Qe(B) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Xe(B)] || "";
    }
    function Dt() {
      if (U) return;
      let B = 10;
      const $ = 60, se = 5e3, ie = 100, be = ($ - B) / (se / ie);
      U = window.setInterval(() => {
        if (B += be, B >= $ && (B = $, Te()), N.value.progress < $) {
          const ke = Math.floor(B);
          N.value = {
            progress: ke,
            state: Xe(ke),
            message: Qe(ke)
          };
        }
      }, ie);
    }
    function Te() {
      U && (clearInterval(U), U = null);
    }
    function Tt() {
      j || (j = window.setInterval(async () => {
        try {
          let B = await z.getStatus();
          if ((!B || B.state === "idle") && (B = await b()), !B)
            return;
          const $ = B.progress || 0;
          $ >= 60 && Te();
          const se = Math.max($, N.value.progress), ie = B.state && B.state !== "idle" && B.state !== "unknown", be = ie ? B.state : Xe(se), ke = ie && B.message || Qe(se);
          N.value = {
            state: be,
            progress: se,
            message: ke
          }, B.state === "complete" ? (Te(), at(), _.value = !1, ne(`✓ Switched to ${L.value}`, "success"), await X(), L.value = "") : B.state === "rolled_back" ? (Te(), at(), _.value = !1, ne("Switch failed, restored previous environment", "warning"), L.value = "") : B.state === "critical_failure" && (Te(), at(), _.value = !1, ne(`Critical error during switch: ${B.message}`, "error"), L.value = "");
        } catch (B) {
          console.error("Failed to poll switch progress:", B);
        }
      }, 1e3));
    }
    function at() {
      Te(), j && (clearInterval(j), j = null);
    }
    function Vt() {
      S.value = !1, L.value = "";
    }
    async function Bt() {
      ee.value = !1, await X(), ne("✓ Changes committed", "success");
    }
    async function Rt() {
      De.value = !1;
      const B = ne("Syncing environment...", "info", 0);
      try {
        const $ = await C("skip", !0);
        if (_e(B), $.status === "success") {
          const se = [];
          $.nodes_installed.length && se.push(`${$.nodes_installed.length} installed`), $.nodes_removed.length && se.push(`${$.nodes_removed.length} removed`);
          const ie = se.length ? `: ${se.join(", ")}` : "";
          ne(`✓ Environment synced${ie}`, "success"), await X();
        } else {
          const se = $.errors.length ? $.errors.join("; ") : $.message;
          ne(`Sync failed: ${se}`, "error");
        }
      } catch ($) {
        _e(B), ne(`Sync error: ${$ instanceof Error ? $.message : "Unknown error"}`, "error");
      }
    }
    async function Ut(B) {
      const $ = ne(`Creating environment "${B}"...`, "info", 0);
      _e($), ne("Environment creation not yet implemented", "warning");
    }
    async function Ot(B) {
      const $ = ne(`Deleting environment "${B}"...`, "info", 0);
      _e($), ne("Environment deletion not yet implemented", "warning");
    }
    function Pt(B) {
      ne(`Viewing details for "${B}"`, "info"), oe("models-env", "this-env");
    }
    function gt() {
      if (!V.value) return [];
      const B = [], $ = V.value.workflows;
      return $.new.length && B.push(`${$.new.length} new workflow(s)`), $.modified.length && B.push(`${$.modified.length} modified workflow(s)`), $.deleted.length && B.push(`${$.deleted.length} deleted workflow(s)`), B;
    }
    return me(X), (B, $) => {
      var se, ie, be, ke;
      return o(), n("div", iu, [
        e("div", ru, [
          e("div", cu, [
            $[28] || ($[28] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            V.value ? (o(), n("div", du)) : d("", !0)
          ]),
          e("div", uu, [
            e("button", {
              class: K(["icon-btn", { spinning: q.value }]),
              onClick: X,
              title: "Refresh"
            }, [...$[29] || ($[29] = [
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
              onClick: $[0] || ($[0] = (Q) => a("close")),
              title: "Close"
            }, [...$[30] || ($[30] = [
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
        e("div", mu, [
          $[32] || ($[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: $[1] || ($[1] = (Q) => oe("environments", "all-envs"))
          }, [
            V.value ? (o(), n("div", vu, [
              e("span", null, r(((se = F.value) == null ? void 0 : se.name) || ((ie = V.value) == null ? void 0 : ie.environment) || "Loading..."), 1),
              e("span", fu, "(" + r(V.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            $[31] || ($[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", gu, [
          e("div", hu, [
            e("div", pu, [
              $[33] || ($[33] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "status" && Y.value === "this-env" }]),
                onClick: $[2] || ($[2] = (Q) => oe("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "workflows" }]),
                onClick: $[3] || ($[3] = (Q) => oe("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "models-env" }]),
                onClick: $[4] || ($[4] = (Q) => oe("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "branches" }]),
                onClick: $[5] || ($[5] = (Q) => oe("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "history" }]),
                onClick: $[6] || ($[6] = (Q) => oe("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "nodes" }]),
                onClick: $[7] || ($[7] = (Q) => oe("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "debug-env" }]),
                onClick: $[8] || ($[8] = (Q) => oe("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            $[36] || ($[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", yu, [
              $[34] || ($[34] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "environments" }]),
                onClick: $[9] || ($[9] = (Q) => oe("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "model-index" }]),
                onClick: $[10] || ($[10] = (Q) => oe("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "settings" }]),
                onClick: $[11] || ($[11] = (Q) => oe("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "debug-workspace" }]),
                onClick: $[12] || ($[12] = (Q) => oe("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            $[37] || ($[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", wu, [
              $[35] || ($[35] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "export" }]),
                onClick: $[13] || ($[13] = (Q) => oe("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "import" }]),
                onClick: $[14] || ($[14] = (Q) => oe("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: K(["sidebar-item", { active: E.value === "remotes" }]),
                onClick: $[15] || ($[15] = (Q) => oe("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", bu, [
            M.value ? (o(), n("div", ku, r(M.value), 1)) : !V.value && E.value === "status" ? (o(), n("div", $u, " Loading status... ")) : (o(), n(P, { key: 2 }, [
              E.value === "status" ? (o(), w(ra, {
                key: 0,
                status: V.value,
                onSwitchBranch: Oe,
                onCommitChanges: $[16] || ($[16] = (Q) => ee.value = !0),
                onSyncEnvironment: $[17] || ($[17] = (Q) => De.value = !0),
                onViewWorkflows: $[18] || ($[18] = (Q) => oe("workflows", "this-env")),
                onViewHistory: $[19] || ($[19] = (Q) => oe("history", "this-env")),
                onViewDebug: $[20] || ($[20] = (Q) => oe("debug-env", "this-env")),
                onResolveModels: $[21] || ($[21] = (Q) => oe("workflows", "this-env"))
              }, null, 8, ["status"])) : E.value === "workflows" ? (o(), w(_l, {
                key: 1,
                onRefresh: X
              })) : E.value === "models-env" ? (o(), w(El, {
                key: 2,
                onNavigate: Ue
              })) : E.value === "branches" ? (o(), w(Ca, {
                key: 3,
                branches: T.value,
                current: ((be = V.value) == null ? void 0 : be.branch) || null,
                onSwitch: Ye,
                onCreate: zt
              }, null, 8, ["branches", "current"])) : E.value === "history" ? (o(), w(Ta, {
                key: 4,
                commits: G.value,
                onSelect: ae,
                onCheckout: Ge
              }, null, 8, ["commits"])) : E.value === "nodes" ? (o(), w(Tl, { key: 5 })) : E.value === "debug-env" ? (o(), w(Ti, { key: 6 })) : E.value === "environments" ? (o(), w(ji, {
                key: 7,
                onSwitch: ft,
                onCreate: Ut,
                onDelete: Ot,
                onViewDetails: Pt
              })) : E.value === "model-index" ? (o(), w(Ll, { key: 8 })) : E.value === "settings" ? (o(), w(zi, { key: 9 })) : E.value === "debug-workspace" ? (o(), w(Ni, { key: 10 })) : E.value === "export" ? (o(), w(or, { key: 11 })) : E.value === "import" ? (o(), w(zc, { key: 12 })) : E.value === "remotes" ? (o(), w(vi, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        I.value ? (o(), w(Kc, {
          key: 0,
          commit: I.value,
          onClose: $[22] || ($[22] = (Q) => I.value = null),
          onCheckout: Ge,
          onCreateBranch: Mt
        }, null, 8, ["commit"])) : d("", !0),
        ce.value ? (o(), w(Zc, {
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
          onCancel: $[23] || ($[23] = (Q) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        l(Bd, {
          show: S.value,
          "from-environment": ((ke = F.value) == null ? void 0 : ke.name) || "unknown",
          "to-environment": L.value,
          onConfirm: Nt,
          onClose: Vt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ee.value && V.value ? (o(), w(xt, {
          key: 2,
          status: V.value,
          "as-modal": !0,
          onClose: $[24] || ($[24] = (Q) => ee.value = !1),
          onCommitted: Bt
        }, null, 8, ["status"])) : d("", !0),
        De.value && V.value ? (o(), w(nu, {
          key: 3,
          show: De.value,
          "mismatch-details": {
            missing_nodes: V.value.comparison.missing_nodes,
            extra_nodes: V.value.comparison.extra_nodes
          },
          onConfirm: Rt,
          onClose: $[25] || ($[25] = (Q) => De.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        l(Yd, {
          show: _.value,
          state: N.value.state,
          progress: N.value.progress,
          message: N.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        k.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: $[27] || ($[27] = fe((Q) => k.value = !1, ["self"]))
        }, [
          e("div", Cu, [
            e("div", _u, [
              $[39] || ($[39] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: $[26] || ($[26] = (Q) => k.value = !1)
              }, [...$[38] || ($[38] = [
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
            e("div", xu, [
              $[40] || ($[40] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Su, [
                (o(!0), n(P, null, J(D.value, (Q) => (o(), n("div", {
                  key: Q.name,
                  class: K(["env-item", { current: Q.is_current }])
                }, [
                  e("div", Eu, [
                    e("div", Iu, [
                      e("span", Lu, r(Q.is_current ? "●" : "○"), 1),
                      e("span", zu, r(Q.name), 1),
                      Q.current_branch ? (o(), n("span", Mu, "(" + r(Q.current_branch) + ")", 1)) : d("", !0),
                      Q.is_current ? (o(), n("span", Nu, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Du, r(Q.workflow_count) + " workflows • " + r(Q.node_count) + " nodes ", 1)
                  ]),
                  Q.is_current ? d("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Yu) => ft(Q.name)
                  }, " SWITCH ", 8, Tu))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", Vu, [
          l(Ht, { name: "toast" }, {
            default: s(() => [
              (o(!0), n(P, null, J(ze.value, (Q) => (o(), n("div", {
                key: Q.id,
                class: K(["toast", Q.type])
              }, [
                e("span", Bu, r(st(Q.type)), 1),
                e("span", Ru, r(Q.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ou = /* @__PURE__ */ W(Uu, [["__scopeId", "data-v-0bc7ca73"]]), Pu = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Fu = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Au = {
  comfy: Pu,
  phosphor: Fu
}, mt = "comfy", St = "comfygit-theme";
let Ve = null, Et = mt;
function Wu() {
  try {
    const t = localStorage.getItem(St);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return mt;
}
function It(t = mt) {
  Ve && Ve.remove(), Ve = document.createElement("style"), Ve.id = "comfygit-theme-styles", Ve.setAttribute("data-theme", t), Ve.textContent = Au[t], document.head.appendChild(Ve), document.body.setAttribute("data-comfygit-theme", t), Et = t;
  try {
    localStorage.setItem(St, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Hu() {
  return Et;
}
function Gu(t) {
  It(t);
}
const vt = document.createElement("link");
vt.rel = "stylesheet";
vt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(vt);
const ju = Wu();
It(ju);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Gu(t);
  },
  getTheme: () => {
    const t = Hu();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let $e = null, ye = null, Ke = null;
const Ae = x(null);
async function dt() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (Ae.value = await c.json());
  } catch {
  }
}
function qu() {
  if (!Ae.value) return !1;
  const t = Ae.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ae.value.has_changes;
}
function Ku() {
  $e && $e.remove(), $e = document.createElement("div"), $e.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", $e.appendChild(t), $e.addEventListener("click", (i) => {
    i.target === $e && rt();
  });
  const c = (i) => {
    i.key === "Escape" && (rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), kt({
    render: () => $t(Ou, {
      onClose: rt,
      onStatusUpdate: (i) => {
        Ae.value = i, et();
      }
    })
  }).mount(t), document.body.appendChild($e);
}
function rt() {
  $e && ($e.remove(), $e = null);
}
function Ju(t) {
  qe(), ye = document.createElement("div"), ye.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  ye.style.position = "fixed", ye.style.top = `${c.bottom + 8}px`, ye.style.right = `${window.innerWidth - c.right}px`, ye.style.zIndex = "10001";
  const a = (u) => {
    ye && !ye.contains(u.target) && u.target !== t && (qe(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const i = (u) => {
    u.key === "Escape" && (qe(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ke = kt({
    render: () => $t(xt, {
      status: Ae.value,
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
  const t = xe.querySelector(".commit-indicator");
  t && (t.style.display = qu() ? "block" : "none");
}
const Lt = document.createElement("style");
Lt.textContent = `
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
document.head.appendChild(Lt);
nt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, i;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Ku, xe = document.createElement("button"), xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", xe.innerHTML = 'Commit <span class="commit-indicator"></span>', xe.title = "Quick Commit", xe.onclick = () => Ju(xe), t.appendChild(c), t.appendChild(xe), (i = (a = nt.menu) == null ? void 0 : a.settingsGroup) != null && i.element && (nt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await dt(), et(), setInterval(async () => {
      await dt(), et();
    }, 3e4);
  }
});
