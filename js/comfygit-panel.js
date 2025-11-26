import { app as tt } from "../../scripts/app.js";
import { defineComponent as J, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as re, createBlock as x, resolveDynamicComponent as It, normalizeClass as ne, withCtx as a, toDisplayString as l, createVNode as f, createTextVNode as w, computed as O, Fragment as H, renderList as ae, normalizeStyle as qe, ref as C, onMounted as ye, watch as Et, Teleport as ke, withModifiers as pe, Transition as no, withKeys as We, onUnmounted as ao, reactive as Vt, readonly as lo, unref as ce, withDirectives as io, vModelText as ro, resolveComponent as co, createSlots as Ft, TransitionGroup as uo, createApp as Mt, h as zt } from "vue";
const mo = { class: "panel-layout" }, vo = {
  key: 0,
  class: "panel-layout-header"
}, fo = {
  key: 1,
  class: "panel-layout-search"
}, go = { class: "panel-layout-content" }, ho = {
  key: 2,
  class: "panel-layout-footer"
}, po = /* @__PURE__ */ J({
  __name: "PanelLayout",
  setup(t) {
    return (d, n) => (o(), s("div", mo, [
      d.$slots.header ? (o(), s("div", vo, [
        re(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), s("div", fo, [
        re(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", go, [
        re(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), s("div", ho, [
        re(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Y = (t, d) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of d)
    n[r] = g;
  return n;
}, Ce = /* @__PURE__ */ Y(po, [["__scopeId", "data-v-21565df9"]]), yo = {
  key: 0,
  class: "panel-title-prefix"
}, wo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bo = /* @__PURE__ */ J({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, n) => (o(), x(It(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), s("span", yo, l(t.prefix), 1)) : (o(), s("span", wo)),
        re(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ko = /* @__PURE__ */ Y(bo, [["__scopeId", "data-v-c3875efc"]]), _o = ["title"], $o = ["width", "height"], Co = /* @__PURE__ */ J({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => d.$emit("click"))
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
      ])], 8, $o))
    ], 8, _o));
  }
}), At = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-6fc7f16d"]]), xo = { class: "header-left" }, So = {
  key: 0,
  class: "header-actions"
}, Io = /* @__PURE__ */ J({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (d, n) => (o(), s("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", xo, [
        f(ko, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            w(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(At, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), s("div", So, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Y(Io, [["__scopeId", "data-v-55a62cd6"]]), Eo = {
  key: 0,
  class: "section-title-count"
}, Mo = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ J({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (o(), x(It(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Eo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", Mo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ Y(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, To = { class: "status-grid__column" }, Do = { class: "status-grid__title" }, Ro = { class: "status-grid__column status-grid__column--right" }, No = { class: "status-grid__title" }, Oo = /* @__PURE__ */ J({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, n) => (o(), s("div", Lo, [
      e("div", To, [
        e("h4", Do, l(t.leftTitle), 1),
        re(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Ro, [
        e("h4", No, l(t.rightTitle), 1),
        re(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Uo = /* @__PURE__ */ Y(Oo, [["__scopeId", "data-v-fe556068"]]), Bo = {
  key: 0,
  class: "status-item__icon"
}, Po = {
  key: 1,
  class: "status-item__count"
}, Vo = { class: "status-item__label" }, Fo = /* @__PURE__ */ J({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, n = O(() => `status-item--${d.variant}`);
    return (r, g) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Bo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", Po, l(t.count), 1)) : c("", !0),
      e("span", Vo, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(Fo, [["__scopeId", "data-v-6f929183"]]), Ao = { class: "issue-card__header" }, Wo = { class: "issue-card__icon" }, Go = { class: "issue-card__title" }, jo = {
  key: 0,
  class: "issue-card__content"
}, Ho = {
  key: 0,
  class: "issue-card__description"
}, qo = {
  key: 1,
  class: "issue-card__items"
}, Ko = {
  key: 2,
  class: "issue-card__actions"
}, Jo = /* @__PURE__ */ J({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, n = O(() => `issue-card--${d.severity}`);
    return (r, g) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", Ao, [
        e("span", Wo, l(t.icon), 1),
        e("h4", Go, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", jo, [
        t.description ? (o(), s("p", Ho, l(t.description), 1)) : c("", !0),
        re(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", qo, [
        (o(!0), s(H, null, ae(t.items, (y, v) => (o(), s("div", {
          key: v,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", Ko, [
        re(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ Y(Jo, [["__scopeId", "data-v-df6aa348"]]), Yo = ["type", "disabled"], Qo = {
  key: 0,
  class: "spinner"
}, Xo = /* @__PURE__ */ J({
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
    return (d, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Qo)) : c("", !0),
      t.loading ? c("", !0) : re(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Yo));
  }
}), X = /* @__PURE__ */ Y(Xo, [["__scopeId", "data-v-772abe47"]]), Zo = { class: "empty-state" }, es = {
  key: 0,
  class: "empty-icon"
}, ts = { class: "empty-message" }, os = /* @__PURE__ */ J({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, n) => (o(), s("div", Zo, [
      t.icon ? (o(), s("div", es, l(t.icon), 1)) : c("", !0),
      e("p", ts, l(t.message), 1),
      t.actionLabel ? (o(), x(X, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("action"))
      }, {
        default: a(() => [
          w(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ Y(os, [["__scopeId", "data-v-4466284f"]]), ss = { class: "branch-indicator" }, ns = { class: "branch-indicator__info" }, as = { class: "branch-indicator__label" }, ls = { class: "branch-indicator__name" }, is = {
  key: 0,
  class: "branch-indicator__remote"
}, rs = {
  key: 0,
  class: "branch-indicator__status"
}, ds = {
  key: 0,
  class: "branch-indicator__ahead"
}, cs = {
  key: 1,
  class: "branch-indicator__behind"
}, us = {
  key: 1,
  class: "branch-indicator__actions"
}, ms = /* @__PURE__ */ J({
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
    return (d, n) => (o(), s("div", ss, [
      e("div", ns, [
        e("span", as, l(t.label), 1),
        e("span", ls, l(t.branchName), 1),
        t.remote ? (o(), s("span", is, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), s("div", rs, [
        t.commitsAhead ? (o(), s("span", ds, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), s("span", cs, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), s("div", us, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ Y(ms, [["__scopeId", "data-v-cb8dd50e"]]), fs = /* @__PURE__ */ J({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ Y(fs, [["__scopeId", "data-v-75e9eeb8"]]), gs = /* @__PURE__ */ J({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ Y(gs, [["__scopeId", "data-v-2f186e4c"]]), hs = { class: "detail-row" }, ps = /* @__PURE__ */ J({
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
    return (d, n) => (o(), s("div", hs, [
      f(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          w(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), x(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          w(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : re(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), fe = /* @__PURE__ */ Y(ps, [["__scopeId", "data-v-ef15664a"]]), ys = { class: "modal-header" }, ws = { class: "modal-body" }, bs = { class: "status-section" }, ks = {
  key: 0,
  class: "status-section"
}, _s = { class: "section-header-row" }, $s = {
  key: 0,
  class: "workflow-group"
}, Cs = { class: "workflow-group-header" }, xs = { class: "workflow-group-title" }, Ss = { class: "workflow-list" }, Is = { class: "workflow-name" }, Es = { class: "workflow-issue" }, Ms = {
  key: 1,
  class: "workflow-group"
}, zs = { class: "workflow-group-header" }, Ls = { class: "workflow-group-title" }, Ts = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Rs = { class: "workflow-issue" }, Ns = {
  key: 2,
  class: "workflow-group"
}, Os = { class: "workflow-group-header" }, Us = { class: "workflow-group-title" }, Bs = { class: "workflow-list" }, Ps = { class: "workflow-name" }, Vs = {
  key: 3,
  class: "workflow-group"
}, Fs = { class: "workflow-group-header" }, As = { class: "workflow-group-title" }, Ws = { class: "workflow-list" }, Gs = { class: "workflow-name" }, js = {
  key: 4,
  class: "workflow-group"
}, Hs = { class: "workflow-group-header" }, qs = { class: "workflow-group-title" }, Ks = { class: "workflow-list" }, Js = { class: "workflow-name" }, Ys = {
  key: 5,
  class: "workflow-group"
}, Qs = { class: "workflow-group-title" }, Xs = { class: "expand-icon" }, Zs = {
  key: 0,
  class: "workflow-list"
}, en = { class: "workflow-name" }, tn = {
  key: 1,
  class: "status-section"
}, on = {
  key: 0,
  class: "change-group"
}, sn = { class: "change-group-header" }, nn = { class: "change-group-title" }, an = { class: "change-list" }, ln = { class: "node-name" }, rn = {
  key: 0,
  class: "dev-badge"
}, dn = {
  key: 1,
  class: "change-group"
}, cn = { class: "change-group-header" }, un = { class: "change-group-title" }, mn = { class: "change-list" }, vn = { class: "node-name" }, fn = {
  key: 0,
  class: "dev-badge"
}, gn = {
  key: 2,
  class: "change-group"
}, hn = { class: "change-list" }, pn = { class: "change-item" }, yn = { class: "node-name" }, wn = {
  key: 3,
  class: "change-group"
}, bn = {
  key: 2,
  class: "status-section"
}, kn = {
  key: 0,
  class: "drift-item"
}, _n = { class: "drift-list" }, $n = {
  key: 0,
  class: "drift-list-more"
}, Cn = {
  key: 1,
  class: "drift-item"
}, xn = { class: "drift-list" }, Sn = {
  key: 0,
  class: "drift-list-more"
}, In = {
  key: 2,
  class: "drift-item"
}, En = {
  key: 3,
  class: "drift-item"
}, Mn = {
  key: 3,
  class: "status-section"
}, zn = { class: "info-box" }, Ln = { class: "drift-list" }, Tn = {
  key: 0,
  class: "drift-list-more"
}, Dn = {
  key: 4,
  class: "status-section"
}, Rn = { class: "warning-box" }, Nn = {
  key: 5,
  class: "empty-state-inline"
}, On = { class: "modal-actions" }, Un = /* @__PURE__ */ J({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, n = C(!1);
    ye(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (z, M) => {
      console.log("StatusDetailModal show prop changed from", M, "to", z);
    }, { immediate: !0 });
    const r = O(() => {
      var z, M, _;
      return ((_ = (M = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : _.filter(
        (E) => E.status === "broken" && E.sync_state === "synced"
      )) || [];
    }), g = O(() => {
      var z, M, _;
      return ((_ = (M = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : _.filter(
        (E) => E.status === "broken" && E.sync_state !== "synced"
      )) || [];
    }), y = O(() => {
      var z, M, _;
      return ((_ = (M = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : M.synced) == null ? void 0 : _.filter((E) => {
        var $, P, L;
        const k = (L = (P = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : P.analyzed) == null ? void 0 : L.find((p) => p.name === E);
        return !k || k.status !== "broken";
      })) || [];
    }), v = O(() => {
      var z, M, _, E, k;
      return (z = d.status) != null && z.workflows ? (((M = d.status.workflows.new) == null ? void 0 : M.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((E = d.status.workflows.deleted) == null ? void 0 : E.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = O(() => {
      var M, _, E;
      const z = (M = d.status) == null ? void 0 : M.git_changes;
      return z ? (((_ = z.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((E = z.nodes_removed) == null ? void 0 : E.length) ?? 0) > 0 || z.workflow_changes || z.has_other_changes : !1;
    }), i = O(() => {
      var z, M, _, E, k, $;
      return !v.value && !m.value && ((M = (z = d.status) == null ? void 0 : z.comparison) == null ? void 0 : M.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && ((($ = (k = (E = d.status) == null ? void 0 : E.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), u = O(() => {
      var M, _;
      const z = (_ = (M = d.status) == null ? void 0 : M.git_changes) == null ? void 0 : _.workflow_changes;
      return z ? typeof z == "number" ? z : Object.keys(z).length : 0;
    });
    function b(z) {
      return typeof z == "string" ? z : z.name;
    }
    function h(z) {
      return typeof z == "object" && z.is_development === !0;
    }
    return (z, M) => {
      var _, E, k, $, P, L, p, S, I, q, G, F, B, A, U, te, V, W, oe, K, N, se;
      return o(), x(ke, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[5] || (M[5] = (ee) => z.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: M[4] || (M[4] = pe(() => {
            }, ["stop"]))
          }, [
            e("div", ys, [
              M[6] || (M[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[0] || (M[0] = (ee) => z.$emit("close"))
              }, "✕")
            ]),
            e("div", ws, [
              e("div", bs, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[7] || (M[7] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(fe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), s("div", ks, [
                e("div", _s, [
                  f(Ee, { level: "4" }, {
                    default: a(() => [...M[8] || (M[8] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: M[1] || (M[1] = (ee) => z.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", $s, [
                  e("div", Cs, [
                    M[9] || (M[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), s(H, null, ae(r.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Is, l(ee.name), 1),
                      e("span", Es, l(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (o(), s("div", Ms, [
                  e("div", zs, [
                    M[10] || (M[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ls, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), s(H, null, ae(g.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(ee.name), 1),
                      e("span", Rs, l(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = (_ = t.status.workflows) == null ? void 0 : _.new) != null && E.length ? (o(), s("div", Ns, [
                  e("div", Os, [
                    M[11] || (M[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Us, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Bs, [
                    (o(!0), s(H, null, ae(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ps, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (k = t.status.workflows) == null ? void 0 : k.modified) != null && $.length ? (o(), s("div", Vs, [
                  e("div", Fs, [
                    M[12] || (M[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", As, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ws, [
                    (o(!0), s(H, null, ae(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Gs, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (P = t.status.workflows) == null ? void 0 : P.deleted) != null && L.length ? (o(), s("div", js, [
                  e("div", Hs, [
                    M[13] || (M[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", qs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ks, [
                    (o(!0), s(H, null, ae(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Js, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), s("div", Ys, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: M[2] || (M[2] = (ee) => n.value = !n.value)
                  }, [
                    M[14] || (M[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Qs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Xs, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", Zs, [
                    (o(!0), s(H, null, ae(y.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", en, l(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", tn, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[15] || (M[15] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (S = (p = t.status.git_changes) == null ? void 0 : p.nodes_added) != null && S.length ? (o(), s("div", on, [
                  e("div", sn, [
                    M[16] || (M[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", nn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (o(!0), s(H, null, ae(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: b(ee),
                      class: "change-item"
                    }, [
                      e("span", ln, l(b(ee)), 1),
                      h(ee) ? (o(), s("span", rn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (q = (I = t.status.git_changes) == null ? void 0 : I.nodes_removed) != null && q.length ? (o(), s("div", dn, [
                  e("div", cn, [
                    M[17] || (M[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", un, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", mn, [
                    (o(!0), s(H, null, ae(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: b(ee),
                      class: "change-item"
                    }, [
                      e("span", vn, l(b(ee)), 1),
                      h(ee) ? (o(), s("span", fn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (G = t.status.git_changes) != null && G.workflow_changes ? (o(), s("div", gn, [
                  M[18] || (M[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", hn, [
                    e("div", pn, [
                      e("span", yn, l(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (F = t.status.git_changes) != null && F.has_other_changes ? (o(), s("div", wn, [...M[19] || (M[19] = [
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
              (B = t.status.comparison) != null && B.is_synced ? c("", !0) : (o(), s("div", bn, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[20] || (M[20] = [
                    w("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                M[21] || (M[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (U = (A = t.status.comparison) == null ? void 0 : A.missing_nodes) != null && U.length ? (o(), s("div", kn, [
                  f(fe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", _n, [
                    (o(!0), s(H, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + l(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", $n, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (V = (te = t.status.comparison) == null ? void 0 : te.extra_nodes) != null && V.length ? (o(), s("div", Cn, [
                  f(fe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", xn, [
                    (o(!0), s(H, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + l(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Sn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (oe = (W = t.status.comparison) == null ? void 0 : W.version_mismatches) != null && oe.length ? (o(), s("div", In, [
                  f(fe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (K = t.status.comparison) != null && K.packages_in_sync ? c("", !0) : (o(), s("div", En, [
                  f(fe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (N = t.status.comparison) == null ? void 0 : N.disabled_nodes) != null && se.length ? (o(), s("div", Mn, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[22] || (M[22] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", zn, [
                  M[23] || (M[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ln, [
                  (o(!0), s(H, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + l(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Tn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Dn, [
                f(Ee, { level: "4" }, {
                  default: a(() => [...M[24] || (M[24] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Rn, [
                  M[25] || (M[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                M[26] || (M[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              i.value ? (o(), s("div", Nn, [...M[27] || (M[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", On, [
              f(X, {
                variant: "secondary",
                onClick: M[3] || (M[3] = (ee) => z.$emit("close"))
              }, {
                default: a(() => [...M[28] || (M[28] = [
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
}), Nt = /* @__PURE__ */ Y(Un, [["__scopeId", "data-v-cbde957e"]]), Bn = { class: "health-section-header" }, Pn = { style: { "margin-top": "var(--cg-space-1)" } }, Vn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Fn = /* @__PURE__ */ J({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const n = t, r = C(!1), g = C(!1);
    ye(() => {
      console.log("StatusSection mounted with status:", n.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function v() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function m() {
      r.value = !1, i("view-workflows");
    }
    const i = d, u = O(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), b = O(() => {
      const L = n.status.git_changes;
      return L.nodes_added.length > 0 || L.nodes_removed.length > 0 || L.workflow_changes || L.has_other_changes;
    }), h = O(() => u.value || b.value), z = O(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), M = O(() => n.status.git_changes.has_other_changes), _ = O(() => {
      var L;
      return ((L = n.status.workflows.analyzed) == null ? void 0 : L.filter(
        (p) => p.status === "broken" && p.sync_state === "synced"
      )) || [];
    }), E = O(() => {
      var L;
      return ((L = n.status.workflows.analyzed) == null ? void 0 : L.filter(
        (p) => p.status === "broken" && p.sync_state !== "synced"
      )) || [];
    }), k = O(() => _.value.length > 0 || E.value.length > 0), $ = O(() => k.value || n.status.missing_models_count > 0 || h.value || !n.status.comparison.is_synced), P = O(() => {
      const L = [];
      return n.status.workflows.new.length > 0 && L.push(`${n.status.workflows.new.length} new workflow${n.status.workflows.new.length === 1 ? "" : "s"}`), n.status.workflows.modified.length > 0 && L.push(`${n.status.workflows.modified.length} modified workflow${n.status.workflows.modified.length === 1 ? "" : "s"}`), n.status.workflows.deleted.length > 0 && L.push(`${n.status.workflows.deleted.length} deleted workflow${n.status.workflows.deleted.length === 1 ? "" : "s"}`), n.status.git_changes.nodes_added.length > 0 && L.push(`${n.status.git_changes.nodes_added.length} node${n.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), n.status.git_changes.nodes_removed.length > 0 && L.push(`${n.status.git_changes.nodes_removed.length} node${n.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${L.length > 0 ? L.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (L, p) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: p[0] || (p[0] = (S) => g.value = !0),
            onMouseleave: p[1] || (p[1] = (S) => g.value = !1)
          }, [
            e("div", Bn, [
              f(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...p[11] || (p[11] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(no, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), x(X, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...p[12] || (p[12] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            f(Uo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), x(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), x(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), x(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                f(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), x(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Ve, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                M.value ? (o(), x(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), x(Ve, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Pn, [
            f(vs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                f(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p[2] || (p[2] = (S) => L.$emit("switch-branch"))
                }, {
                  default: a(() => [...p[13] || (p[13] = [
                    w(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), x(Ye, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: p[3] || (p[3] = (S) => L.$emit("create-branch"))
              }, {
                default: a(() => [...p[14] || (p[14] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          $.value ? (o(), s("div", Vn, [
            f(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...p[15] || (p[15] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (o(), x(Ye, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map((S) => `${S.name} — ${S.issue_summary}`)
            }, {
              actions: a(() => [
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[4] || (p[4] = (S) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[16] || (p[16] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            E.value.length > 0 ? (o(), x(Ye, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: E.value.map((S) => `${S.name} — ${S.issue_summary}`)
            }, {
              actions: a(() => [
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[5] || (p[5] = (S) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[17] || (p[17] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), x(Ye, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[6] || (p[6] = (S) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[18] || (p[18] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            h.value ? (o(), x(Ye, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: P.value
            }, {
              actions: a(() => [
                f(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: a(() => [...p[19] || (p[19] = [
                    w(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[7] || (p[7] = (S) => L.$emit("commit-changes"))
                }, {
                  default: a(() => [...p[20] || (p[20] = [
                    w(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), x(Ye, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                f(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p[8] || (p[8] = (S) => L.$emit("view-debug"))
                }, {
                  default: a(() => [...p[21] || (p[21] = [
                    w(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                f(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[9] || (p[9] = (S) => L.$emit("sync-environment"))
                }, {
                  default: a(() => [...p[22] || (p[22] = [
                    w(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !$.value && !b.value ? (o(), x(Ne, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      f(Nt, {
        show: r.value,
        status: t.status,
        onClose: p[10] || (p[10] = (S) => r.value = !1),
        onNavigateWorkflows: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), An = /* @__PURE__ */ Y(Fn, [["__scopeId", "data-v-05737be6"]]), Wn = ["type", "value", "placeholder", "disabled"], Gn = /* @__PURE__ */ J({
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
  setup(t, { expose: d, emit: n }) {
    const r = t, g = n, y = C(null);
    function v(m) {
      const i = m.target.value;
      g("update:modelValue", i);
    }
    return ye(() => {
      r.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.blur();
      }
    }), (m, i) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        i[0] || (i[0] = We((u) => m.$emit("enter"), ["enter"])),
        i[1] || (i[1] = We((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (u) => m.$emit("focus")),
      onBlur: i[3] || (i[3] = (u) => m.$emit("blur"))
    }, null, 42, Wn));
  }
}), ft = /* @__PURE__ */ Y(Gn, [["__scopeId", "data-v-0380d08f"]]), jn = { class: "branch-create-form" }, Hn = { class: "form-actions" }, qn = /* @__PURE__ */ J({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const n = d, r = C(""), g = O(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function v() {
      r.value = "", n("cancel");
    }
    return (m, i) => (o(), s("div", jn, [
      f(ft, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Hn, [
        f(X, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: a(() => [...i[1] || (i[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(X, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: a(() => [...i[2] || (i[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Kn = /* @__PURE__ */ Y(qn, [["__scopeId", "data-v-7c500394"]]), Jn = { class: "branch-list-item__indicator" }, Yn = { class: "branch-list-item__name" }, Qn = {
  key: 0,
  class: "branch-list-item__actions"
}, Xn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Zn = /* @__PURE__ */ J({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (o(), s("div", {
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && d.$emit("click"))
    }, [
      e("span", Jn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Yn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), s("div", Qn, [
        re(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Xn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ea = /* @__PURE__ */ Y(Zn, [["__scopeId", "data-v-c6581a24"]]), ta = {
  key: 2,
  class: "branch-list"
}, oa = /* @__PURE__ */ J({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const n = d, r = C(!1);
    function g(v) {
      n("create", v), y();
    }
    function y() {
      r.value = !1;
    }
    return (v, m) => (o(), x(Ce, null, {
      header: a(() => [
        f(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            f(X, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (i) => r.value = !0),
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
        r.value ? (o(), x(Kn, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), x(Ne, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ta, [
          (o(!0), s(H, null, ae(t.branches, (i) => (o(), x(ea, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: a(() => [
              i.is_current ? c("", !0) : (o(), x(X, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => v.$emit("switch", i.name)
              }, {
                default: a(() => [...m[2] || (m[2] = [
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
}), sa = /* @__PURE__ */ Y(oa, [["__scopeId", "data-v-763d6ec4"]]), na = { class: "commit-list" }, aa = /* @__PURE__ */ J({
  __name: "CommitList",
  setup(t) {
    return (d, n) => (o(), s("div", na, [
      re(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), la = /* @__PURE__ */ Y(aa, [["__scopeId", "data-v-8c5ee761"]]), ia = { class: "commit-hash" }, ra = /* @__PURE__ */ J({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, n = O(() => d.hash.slice(0, d.length));
    return (r, g) => (o(), s("span", ia, l(n.value), 1));
  }
}), Wt = /* @__PURE__ */ Y(ra, [["__scopeId", "data-v-7c333cc6"]]), da = { class: "commit-message" }, ca = { class: "commit-date" }, ua = /* @__PURE__ */ J({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const n = t, r = d;
    function g() {
      n.clickable && r("click");
    }
    return (y, v) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", da, l(t.message), 1),
      e("span", ca, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = pe(() => {
        }, ["stop"]))
      }, [
        re(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ Y(ua, [["__scopeId", "data-v-dd7c621b"]]), va = /* @__PURE__ */ J({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, n) => (o(), x(Ce, null, {
      header: a(() => [
        f(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), x(Ne, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(la, { key: 1 }, {
          default: a(() => [
            (o(!0), s(H, null, ae(t.commits, (r) => (o(), x(ma, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => d.$emit("select", r)
            }, {
              actions: a(() => [
                f(X, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => d.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...n[0] || (n[0] = [
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
}), fa = /* @__PURE__ */ Y(va, [["__scopeId", "data-v-981c3c64"]]), Tp = [
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
], Dp = {
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
}, ga = [
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
], Rp = [
  ...ga,
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
function wt() {
  return !1;
}
function _e() {
  const t = C(!1), d = C(null);
  async function n(Q, R) {
    var Z;
    if (!((Z = window.app) != null && Z.api))
      throw new Error("ComfyUI API not available");
    const D = await window.app.api.fetchApi(Q, R);
    if (!D.ok) {
      const me = await D.json().catch(() => ({}));
      throw new Error(me.error || me.message || `Request failed: ${D.status}`);
    }
    return D.json();
  }
  async function r(Q = !1) {
    return n(Q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(Q, R = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: R })
    });
  }
  async function y(Q = 10, R = 0) {
    return n(`/v2/comfygit/log?limit=${Q}&offset=${R}`);
  }
  async function v(Q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function i(Q) {
    return n(`/v2/comfygit/commit/${Q}`);
  }
  async function u(Q, R = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: R })
    });
  }
  async function b(Q, R = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: R })
    });
  }
  async function h(Q, R = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: R })
    });
  }
  async function z() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Q = await r();
        return [{
          name: Q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(Q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Q })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(Q, R, D) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, pytorch_backend: R, clone_from: D })
    });
  }
  async function k(Q) {
    return n(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function $(Q = !1) {
    try {
      return n(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const R = await r(Q), D = [];
      return R.workflows.new.forEach((Z) => {
        D.push({ name: Z, status: "new", missing_nodes: 0, missing_models: 0, path: Z });
      }), R.workflows.modified.forEach((Z) => {
        D.push({ name: Z, status: "modified", missing_nodes: 0, missing_models: 0, path: Z });
      }), R.workflows.synced.forEach((Z) => {
        D.push({ name: Z, status: "synced", missing_nodes: 0, missing_models: 0, path: Z });
      }), D;
    }
  }
  async function P(Q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function L(Q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function p(Q, R, D) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: R, install_models: D })
    });
  }
  async function S(Q, R, D) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: R, importance: D })
    });
  }
  async function I() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function q() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function G(Q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function F(Q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function B(Q, R) {
    return n(`/v2/workspace/models/${Q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: R })
    });
  }
  async function A(Q) {
    return n(`/v2/workspace/models/${Q}`, {
      method: "DELETE"
    });
  }
  async function U(Q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function te() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function V() {
    return n("/v2/workspace/models/directory");
  }
  async function W(Q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function oe() {
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
  async function K(Q) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function N(Q, R) {
    try {
      const D = new URLSearchParams();
      return Q && D.append("level", Q), R && D.append("lines", R.toString()), n(`/v2/comfygit/debug/logs?${D}`);
    } catch {
      return [];
    }
  }
  async function se(Q, R) {
    try {
      const D = new URLSearchParams();
      return Q && D.append("level", Q), R && D.append("lines", R.toString()), n(`/v2/workspace/debug/logs?${D}`);
    } catch {
      return [];
    }
  }
  async function ee() {
    try {
      return n("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function be(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function ge(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function Xe(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function ve() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Me(Q, R) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: R })
    });
  }
  async function at(Q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Ke(Q, R, D) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: R, push_url: D })
    });
  }
  async function Se(Q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST"
    });
  }
  async function lt(Q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function Ze(Q = "skip", R = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: R
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: v,
    // Git Operations
    getBranches: m,
    getCommitDetail: i,
    checkout: u,
    createBranch: b,
    switchBranch: h,
    // Environment Management
    getEnvironments: z,
    switchEnvironment: M,
    getSwitchProgress: _,
    createEnvironment: E,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: $,
    getWorkflowDetails: P,
    resolveWorkflow: L,
    installWorkflowDeps: p,
    setModelImportance: S,
    // Model Management
    getEnvironmentModels: I,
    getWorkspaceModels: q,
    getModelDetails: G,
    openFileLocation: F,
    updateModelSource: B,
    deleteModel: A,
    downloadModel: U,
    scanWorkspaceModels: te,
    getModelsDirectory: V,
    setModelsDirectory: W,
    // Settings
    getConfig: oe,
    updateConfig: K,
    // Debug/Logs
    getEnvironmentLogs: N,
    getWorkspaceLogs: se,
    // Node Management
    getNodes: ee,
    installNode: be,
    updateNode: ge,
    uninstallNode: Xe,
    // Git Remotes
    getRemotes: ve,
    addRemote: Me,
    removeRemote: at,
    updateRemoteUrl: Ke,
    fetchRemote: Se,
    getRemoteSyncStatus: lt,
    // Environment Sync
    syncEnvironmentManually: Ze
  };
}
const ha = { class: "base-modal-header" }, pa = {
  key: 0,
  class: "base-modal-title"
}, ya = { class: "base-modal-body" }, wa = {
  key: 0,
  class: "base-modal-loading"
}, ba = {
  key: 1,
  class: "base-modal-error"
}, ka = {
  key: 0,
  class: "base-modal-footer"
}, _a = /* @__PURE__ */ J({
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
    const n = t, r = d;
    function g() {
      n.closeOnOverlayClick && r("close");
    }
    function y(v) {
      v.key === "Escape" && r("close");
    }
    return ye(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (v, m) => (o(), x(ke, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", ha, [
            re(v.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", pa, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (i) => v.$emit("close"))
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
          e("div", ya, [
            t.loading ? (o(), s("div", wa, "Loading...")) : t.error ? (o(), s("div", ba, l(t.error), 1)) : re(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), s("div", ka, [
            re(v.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), gt = /* @__PURE__ */ Y(_a, [["__scopeId", "data-v-2125a0e6"]]), $a = ["type", "disabled"], Ca = {
  key: 0,
  class: "spinner"
}, xa = /* @__PURE__ */ J({
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
    return (d, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Ca)) : c("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, $a));
  }
}), le = /* @__PURE__ */ Y(xa, [["__scopeId", "data-v-f3452606"]]), Sa = {
  key: 0,
  class: "base-title-count"
}, Ia = /* @__PURE__ */ J({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, n) => (o(), x(It(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Sa, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ Y(Ia, [["__scopeId", "data-v-5a01561d"]]), Ea = ["value", "disabled"], Ma = {
  key: 0,
  value: "",
  disabled: ""
}, za = ["value"], La = {
  key: 0,
  class: "base-select-error"
}, Ta = /* @__PURE__ */ J({
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
    function d(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, g) => (o(), s("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ma, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(H, null, ae(t.options, (y) => (o(), s("option", {
          key: d(y),
          value: d(y)
        }, l(n(y)), 9, za))), 128))
      ], 42, Ea),
      t.error ? (o(), s("span", La, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Da = /* @__PURE__ */ Y(Ta, [["__scopeId", "data-v-7436d745"]]), Ra = { class: "popover-header" }, Na = { class: "popover-title" }, Oa = { class: "popover-content" }, Ua = {
  key: 0,
  class: "popover-actions"
}, Ba = /* @__PURE__ */ J({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, n) => (o(), x(ke, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Ra, [
            e("h4", Na, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Oa, [
            re(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), s("div", Ua, [
            re(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ Y(Ba, [["__scopeId", "data-v-42815ace"]]), Pa = { class: "detail-section" }, Va = {
  key: 0,
  class: "empty-message"
}, Fa = { class: "model-header" }, Aa = { class: "model-name" }, Wa = { class: "model-details" }, Ga = { class: "model-row" }, ja = { class: "model-row" }, Ha = { class: "label" }, qa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ka = { class: "node-list" }, Ja = ["onClick"], Ya = {
  key: 1,
  class: "model-row"
}, Qa = { class: "value" }, Xa = {
  key: 0,
  class: "model-actions"
}, Za = { class: "detail-section" }, el = {
  key: 0,
  class: "empty-message"
}, tl = { class: "node-name" }, ol = {
  key: 0,
  class: "node-version"
}, sl = /* @__PURE__ */ J({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const n = t, r = d, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: v } = _e(), m = C(null), i = C(!1), u = C(null), b = C(!1), h = C({}), z = C({}), M = C(!1), _ = C(/* @__PURE__ */ new Set()), E = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(F) {
      switch (F) {
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
    function $(F) {
      switch (F) {
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
    function P(F) {
      if (!F.loaded_by || F.loaded_by.length === 0) return [];
      const B = F.hash || F.filename;
      return _.value.has(B) ? F.loaded_by : F.loaded_by.slice(0, 3);
    }
    function L(F) {
      return _.value.has(F);
    }
    function p(F) {
      _.value.has(F) ? _.value.delete(F) : _.value.add(F), _.value = new Set(_.value);
    }
    async function S() {
      i.value = !0, u.value = null;
      try {
        m.value = await g(n.workflowName);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function I(F, B) {
      h.value[F] = B, b.value = !0;
    }
    async function q() {
      if (!b.value) {
        r("close");
        return;
      }
      i.value = !0, u.value = null;
      try {
        for (const [F, B] of Object.entries(h.value))
          await y(n.workflowName, F, B);
        r("refresh"), r("close");
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function G(F) {
      z.value[F] = !0, u.value = null;
      try {
        await v(n.workflowName, !0, !1), await S();
      } catch (B) {
        u.value = B instanceof Error ? B.message : "Failed to install node";
      } finally {
        z.value[F] = !1;
      }
    }
    return ye(S), (F, B) => (o(), s(H, null, [
      f(gt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: u.value || void 0,
        onClose: B[5] || (B[5] = (A) => r("close"))
      }, {
        body: a(() => [
          m.value ? (o(), s(H, { key: 0 }, [
            e("section", Pa, [
              f(ut, { variant: "section" }, {
                default: a(() => [
                  w("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Va, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(H, null, ae(m.value.models, (A) => (o(), s("div", {
                key: A.hash || A.filename,
                class: "model-card"
              }, [
                e("div", Fa, [
                  B[7] || (B[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Aa, l(A.filename), 1)
                ]),
                e("div", Wa, [
                  e("div", Ga, [
                    B[8] || (B[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", k(A.status)])
                    }, l($(A.status)), 3)
                  ]),
                  e("div", ja, [
                    e("span", Ha, [
                      B[9] || (B[9] = w(" Importance: ", -1)),
                      f(At, {
                        size: 14,
                        title: "About importance levels",
                        onClick: B[0] || (B[0] = (U) => M.value = !0)
                      })
                    ]),
                    f(Da, {
                      "model-value": h.value[A.filename] || A.importance,
                      options: E,
                      "onUpdate:modelValue": (U) => I(A.filename, U)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  A.loaded_by && A.loaded_by.length > 0 ? (o(), s("div", qa, [
                    B[10] || (B[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ka, [
                      (o(!0), s(H, null, ae(P(A), (U, te) => (o(), s("div", {
                        key: `${U.node_id}-${te}`,
                        class: "node-reference"
                      }, l(U.node_type) + " (Node #" + l(U.node_id) + ") ", 1))), 128)),
                      A.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (U) => p(A.hash || A.filename)
                      }, l(L(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, Ja)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  A.size_mb ? (o(), s("div", Ya, [
                    B[11] || (B[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Qa, l(A.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                A.status !== "available" ? (o(), s("div", Xa, [
                  A.status === "downloadable" ? (o(), x(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: B[1] || (B[1] = (U) => r("resolve"))
                  }, {
                    default: a(() => [...B[12] || (B[12] = [
                      w(" Download ", -1)
                    ])]),
                    _: 1
                  })) : A.status === "path_mismatch" ? (o(), x(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[2] || (B[2] = (U) => r("resolve"))
                  }, {
                    default: a(() => [...B[13] || (B[13] = [
                      w(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[3] || (B[3] = (U) => r("resolve"))
                  }, {
                    default: a(() => [...B[14] || (B[14] = [
                      w(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Za, [
              f(ut, { variant: "section" }, {
                default: a(() => [
                  w("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", el, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(H, null, ae(m.value.nodes, (A) => (o(), s("div", {
                key: A.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, l(A.status === "installed" ? "✓" : "✕"), 3),
                e("span", tl, l(A.name), 1),
                A.version ? (o(), s("span", ol, "v" + l(A.version), 1)) : c("", !0),
                A.status === "missing" ? (o(), x(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: z.value[A.name],
                  onClick: (U) => G(A.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...B[15] || (B[15] = [
                    w(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          f(le, {
            variant: "secondary",
            onClick: B[4] || (B[4] = (A) => r("close"))
          }, {
            default: a(() => [...B[16] || (B[16] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), x(le, {
            key: 0,
            variant: "primary",
            onClick: q
          }, {
            default: a(() => [...B[17] || (B[17] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(Ge, {
        show: M.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (A) => M.value = !1)
      }, {
        content: a(() => [...B[18] || (B[18] = [
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
}), nl = /* @__PURE__ */ Y(sl, [["__scopeId", "data-v-0b14d32e"]]), ue = Vt({
  items: [],
  status: "idle"
});
let Pe = null;
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
    await al(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ue.status = "idle", et();
  }
}
async function al(t) {
  return new Promise((d, n) => {
    Pe && (Pe.close(), Pe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Pe = g;
    let y = Date.now(), v = 0, m = !1;
    g.onmessage = (i) => {
      try {
        const u = JSON.parse(i.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), h = (b - y) / 1e3;
            if (h > 0.5) {
              const z = t.downloaded - v;
              if (t.speed = z / h, y = b, v = t.downloaded, t.speed > 0 && t.size > 0) {
                const M = t.size - t.downloaded;
                t.eta = M / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), Pe = null, d();
            break;
          case "error":
            m = !0, g.close(), Pe = null, n(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Pe = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ll() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const n of d.pending_downloads) {
      if (ue.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: Gt(),
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
      ue.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function ht() {
  function t(k) {
    for (const $ of k) {
      if (ue.items.some(
        (p) => p.url === $.url && p.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(p.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const L = {
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
      ue.items.push(L);
    }
    ue.status === "idle" && et();
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
        Pe && (Pe.close(), Pe = null), $.status = "failed", $.error = "Cancelled by user", ue.status = "idle", et();
      } else if ($.status === "queued") {
        const P = ue.items.findIndex((L) => L.id === k);
        P >= 0 && ue.items.splice(P, 1);
      }
    }
  }
  function n(k) {
    const $ = _t(k);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, ue.status === "idle" && et());
  }
  function r(k) {
    const $ = _t(k);
    !$ || $.status !== "paused" || ($.status = "queued", ue.status === "idle" && et());
  }
  function g() {
    const k = ue.items.filter(($) => $.status === "paused");
    for (const $ of k)
      $.status = "queued";
    ue.status === "idle" && et();
  }
  function y(k) {
    const $ = ue.items.findIndex((P) => P.id === k);
    $ >= 0 && ["completed", "failed", "paused"].includes(ue.items[$].status) && ue.items.splice($, 1);
  }
  function v() {
    ue.items = ue.items.filter((k) => k.status !== "completed");
  }
  function m() {
    ue.items = ue.items.filter((k) => k.status !== "failed");
  }
  const i = O(
    () => ue.items.find((k) => k.status === "downloading")
  ), u = O(
    () => ue.items.filter((k) => k.status === "queued")
  ), b = O(
    () => ue.items.filter((k) => k.status === "completed")
  ), h = O(
    () => ue.items.filter((k) => k.status === "failed")
  ), z = O(
    () => ue.items.filter((k) => k.status === "paused")
  ), M = O(() => ue.items.length > 0), _ = O(
    () => ue.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), E = O(
    () => ue.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(ue),
    // Computed
    currentDownload: i,
    queuedItems: u,
    completedItems: b,
    failedItems: h,
    pausedItems: z,
    hasItems: M,
    activeCount: _,
    hasPaused: E,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: v,
    clearFailed: m,
    loadPendingDownloads: ll
  };
}
function il() {
  const t = C(null), d = C(null), n = C([]), r = C([]), g = C(!1), y = C(null);
  async function v(k, $) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(k, $);
    if (!P.ok) {
      const p = await P.json().catch(() => ({})), S = p.error || p.message || `Request failed: ${P.status}`;
      throw new Error(S);
    }
    return P.json();
  }
  async function m(k) {
    g.value = !0, y.value = null;
    try {
      let $;
      return wt() || ($ = await v(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = $, $;
    } catch ($) {
      const P = $ instanceof Error ? $.message : "Unknown error occurred";
      throw y.value = P, $;
    } finally {
      g.value = !1;
    }
  }
  async function i(k, $, P) {
    g.value = !0, y.value = null;
    try {
      let L;
      if (!wt()) {
        const p = Object.fromEntries($), S = Object.fromEntries(P);
        L = await v(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: p,
              model_choices: S
            })
          }
        );
      }
      return d.value = L, L;
    } catch (L) {
      const p = L instanceof Error ? L.message : "Unknown error occurred";
      throw y.value = p, L;
    } finally {
      g.value = !1;
    }
  }
  async function u(k, $ = 10) {
    g.value = !0, y.value = null;
    try {
      let P;
      return wt() || (P = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: $ })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const L = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = L, P;
    } finally {
      g.value = !1;
    }
  }
  async function b(k, $ = 10) {
    g.value = !0, y.value = null;
    try {
      let P;
      return wt() || (P = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: $ })
        }
      )), r.value = P.results, P.results;
    } catch (P) {
      const L = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = L, P;
    } finally {
      g.value = !1;
    }
  }
  const h = Vt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function z() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.error = void 0;
  }
  async function M(k, $, P) {
    z(), h.phase = "resolving", y.value = null;
    const L = Object.fromEntries($), p = Object.fromEntries(P);
    try {
      const S = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: p
        })
      });
      if (!S.ok)
        throw new Error(`Request failed: ${S.status}`);
      if (!S.body)
        throw new Error("No response body");
      const I = S.body.getReader(), q = new TextDecoder();
      let G = "";
      for (; ; ) {
        const { done: F, value: B } = await I.read();
        if (F) break;
        G += q.decode(B, { stream: !0 });
        const A = G.split(`

`);
        G = A.pop() || "";
        for (const U of A) {
          if (!U.trim()) continue;
          const te = U.split(`
`);
          let V = "", W = "";
          for (const oe of te)
            oe.startsWith("event: ") ? V = oe.slice(7) : oe.startsWith("data: ") && (W = oe.slice(6));
          if (W)
            try {
              const oe = JSON.parse(W);
              _(V, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (S) {
      const I = S instanceof Error ? S.message : "Unknown error occurred";
      throw y.value = I, h.error = I, h.phase = "error", S;
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
  function E(k, $) {
    const { addToQueue: P } = ht(), L = $.filter((p) => p.url && p.target_path).map((p) => ({
      workflow: k,
      filename: p.filename,
      url: p.url,
      targetPath: p.target_path,
      size: p.size || 0,
      type: "model"
    }));
    return L.length > 0 && P(L), L.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: n,
    modelSearchResults: r,
    isLoading: g,
    error: y,
    progress: h,
    // Methods
    analyzeWorkflow: m,
    applyResolution: i,
    applyResolutionWithProgress: M,
    searchNodes: u,
    searchModels: b,
    resetProgress: z,
    queueModelDownloads: E
  };
}
const rl = { class: "resolution-stepper" }, dl = { class: "stepper-header" }, cl = ["onClick"], ul = {
  key: 0,
  class: "step-icon"
}, ml = {
  key: 1,
  class: "step-number"
}, vl = { class: "step-label" }, fl = {
  key: 0,
  class: "step-connector"
}, gl = { class: "stepper-content" }, hl = /* @__PURE__ */ J({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const n = t, r = d;
    function g(u) {
      var b;
      if ((b = n.stepStats) != null && b[u]) {
        const h = n.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return n.completedSteps.includes(u);
    }
    function y(u) {
      var b;
      if ((b = n.stepStats) != null && b[u]) {
        const h = n.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function v(u) {
      return g(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function i(u) {
      r("step-change", u);
    }
    return (u, b) => (o(), s("div", rl, [
      e("div", dl, [
        (o(!0), s(H, null, ae(t.steps, (h, z) => (o(), s("div", {
          key: h.id,
          class: ne(["step", {
            active: t.currentStep === h.id,
            completed: g(h.id),
            "in-progress": y(h.id),
            disabled: m(h.id)
          }]),
          onClick: (M) => i(h.id)
        }, [
          e("div", {
            class: ne(["step-indicator", v(h.id)])
          }, [
            g(h.id) ? (o(), s("span", ul, "✓")) : (o(), s("span", ml, l(z + 1), 1))
          ], 2),
          e("div", vl, l(h.label), 1),
          z < t.steps.length - 1 ? (o(), s("div", fl)) : c("", !0)
        ], 10, cl))), 128))
      ]),
      e("div", gl, [
        re(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), pl = /* @__PURE__ */ Y(hl, [["__scopeId", "data-v-2a7b3af8"]]), yl = /* @__PURE__ */ J({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, n = O(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), r = O(() => `confidence-${n.value}`), g = O(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, v) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), Lt = /* @__PURE__ */ Y(yl, [["__scopeId", "data-v-17ec4b80"]]), wl = { class: "node-info" }, bl = { class: "node-info-text" }, kl = { class: "item-body" }, _l = {
  key: 0,
  class: "resolved-state"
}, $l = {
  key: 1,
  class: "multiple-options"
}, Cl = { class: "options-list" }, xl = ["onClick"], Sl = ["name", "value", "checked", "onChange"], Il = { class: "option-content" }, El = { class: "option-header" }, Ml = { class: "option-package-id" }, zl = {
  key: 0,
  class: "option-title"
}, Ll = { class: "option-meta" }, Tl = {
  key: 0,
  class: "installed-badge"
}, Dl = { class: "action-buttons" }, Rl = {
  key: 2,
  class: "unresolved"
}, Nl = { class: "action-buttons" }, Ol = /* @__PURE__ */ J({
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
    const n = t, r = d, g = O(() => !!n.choice);
    O(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), O(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const y = O(() => {
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
    function v(m) {
      r("option-selected", m);
    }
    return (m, i) => (o(), s("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", wl, [
        e("span", bl, [
          i[7] || (i[7] = w("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", kl, [
        g.value ? (o(), s("div", _l, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (u) => r("clear-choice"))
          }, {
            default: a(() => [...i[8] || (i[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", $l, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Cl, [
            (o(!0), s(H, null, ae(t.options, (u, b) => (o(), s("label", {
              key: u.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (h) => v(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (h) => v(b)
              }, null, 40, Sl),
              e("div", Il, [
                e("div", El, [
                  e("span", Ml, l(u.package_id), 1),
                  f(Lt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), s("div", zl, l(u.title), 1)) : c("", !0),
                e("div", Ll, [
                  u.is_installed ? (o(), s("span", Tl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, xl))), 128))
          ]),
          e("div", Dl, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (u) => r("search"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (u) => r("manual-entry"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (u) => r("mark-optional"))
            }, {
              default: a(() => [...i[11] || (i[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Rl, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Nl, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (u) => r("search"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (u) => r("manual-entry"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (u) => r("mark-optional"))
            }, {
              default: a(() => [...i[15] || (i[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ul = /* @__PURE__ */ Y(Ol, [["__scopeId", "data-v-e02629e7"]]), Bl = { class: "item-navigator" }, Pl = { class: "nav-item-info" }, Vl = ["title"], Fl = { class: "nav-controls" }, Al = { class: "nav-arrows" }, Wl = ["disabled"], Gl = ["disabled"], jl = { class: "nav-position" }, Hl = /* @__PURE__ */ J({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const n = d;
    return (r, g) => (o(), s("div", Bl, [
      e("div", Pl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Vl)
      ]),
      e("div", Fl, [
        e("div", Al, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Wl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Gl)
        ]),
        e("span", jl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ Y(Hl, [["__scopeId", "data-v-74af7920"]]), ql = ["type", "value", "placeholder", "disabled"], Kl = {
  key: 0,
  class: "base-input-error"
}, Jl = /* @__PURE__ */ J({
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
    return (d, n) => (o(), s("div", {
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = We((r) => d.$emit("enter"), ["enter"])),
          n[2] || (n[2] = We((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ql),
      t.error ? (o(), s("span", Kl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ Y(Jl, [["__scopeId", "data-v-9ba02cdc"]]), Yl = { class: "node-resolution-step" }, Ql = { class: "step-header" }, Xl = { class: "stat-badge" }, Zl = {
  key: 1,
  class: "step-body"
}, ei = {
  key: 2,
  class: "empty-state"
}, ti = { class: "node-search-modal" }, oi = { class: "node-modal-body" }, si = {
  key: 0,
  class: "node-search-results"
}, ni = ["onClick"], ai = { class: "node-result-header" }, li = { class: "node-result-package-id" }, ii = {
  key: 0,
  class: "node-result-description"
}, ri = {
  key: 1,
  class: "node-no-results"
}, di = {
  key: 2,
  class: "node-searching"
}, ci = { class: "node-manual-entry-modal" }, ui = { class: "node-modal-body" }, mi = { class: "node-modal-actions" }, vi = /* @__PURE__ */ J({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const n = t, r = d, g = C(0), y = C(!1), v = C(!1), m = C(""), i = C(""), u = C([]), b = C(!1), h = O(() => n.nodes[g.value]), z = O(() => n.nodes.filter((A) => n.nodeChoices.has(A.node_type)).length), M = O(() => {
      var U;
      if (!h.value) return "not-found";
      const A = n.nodeChoices.get(h.value.node_type);
      if (A)
        switch (A.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (U = h.value.options) != null && U.length ? "ambiguous" : "not-found";
    }), _ = O(() => {
      var U;
      if (!h.value) return;
      const A = n.nodeChoices.get(h.value.node_type);
      if (A)
        switch (A.action) {
          case "install":
            return A.package_id ? `→ ${A.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (U = h.value.options) != null && U.length ? `${h.value.options.length} matches` : "Not Found";
    });
    function E(A) {
      A >= 0 && A < n.nodes.length && (g.value = A);
    }
    function k() {
      h.value && r("mark-optional", h.value.node_type);
    }
    function $() {
      h.value && r("skip", h.value.node_type);
    }
    function P(A) {
      h.value && r("option-selected", h.value.node_type, A);
    }
    function L() {
      h.value && r("clear-choice", h.value.node_type);
    }
    function p() {
      h.value && (m.value = h.value.node_type, y.value = !0);
    }
    function S() {
      i.value = "", v.value = !0;
    }
    function I() {
      y.value = !1, m.value = "", u.value = [];
    }
    function q() {
      v.value = !1, i.value = "";
    }
    function G() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function F(A) {
      h.value && (r("manual-entry", h.value.node_type, A.package_id), I());
    }
    function B() {
      !h.value || !i.value.trim() || (r("manual-entry", h.value.node_type, i.value.trim()), q());
    }
    return (A, U) => {
      var te, V;
      return o(), s("div", Yl, [
        e("div", Ql, [
          U[4] || (U[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Xl, l(z.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        h.value ? (o(), x(jt, {
          key: 0,
          "item-name": h.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: U[0] || (U[0] = (W) => E(g.value - 1)),
          onNext: U[1] || (U[1] = (W) => E(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        h.value ? (o(), s("div", Zl, [
          f(Ul, {
            "node-type": h.value.node_type,
            "has-multiple-options": !!((te = h.value.options) != null && te.length),
            options: h.value.options,
            choice: (V = t.nodeChoices) == null ? void 0 : V.get(h.value.node_type),
            status: M.value,
            "status-label": _.value,
            onMarkOptional: k,
            onSkip: $,
            onManualEntry: S,
            onSearch: p,
            onOptionSelected: P,
            onClearChoice: L
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", ei, [...U[5] || (U[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), x(ke, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(I, ["self"])
          }, [
            e("div", ti, [
              e("div", { class: "node-modal-header" }, [
                U[6] || (U[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", oi, [
                f(Re, {
                  modelValue: m.value,
                  "onUpdate:modelValue": U[2] || (U[2] = (W) => m.value = W),
                  placeholder: "Search by node type, package name...",
                  onInput: G
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), s("div", si, [
                  (o(!0), s(H, null, ae(u.value, (W) => (o(), s("div", {
                    key: W.package_id,
                    class: "node-search-result-item",
                    onClick: (oe) => F(W)
                  }, [
                    e("div", ai, [
                      e("code", li, l(W.package_id), 1),
                      W.match_confidence ? (o(), x(Lt, {
                        key: 0,
                        confidence: W.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    W.description ? (o(), s("div", ii, l(W.description), 1)) : c("", !0)
                  ], 8, ni))), 128))
                ])) : m.value && !b.value ? (o(), s("div", ri, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), s("div", di, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), x(ke, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(q, ["self"])
          }, [
            e("div", ci, [
              e("div", { class: "node-modal-header" }, [
                U[7] || (U[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              e("div", ui, [
                f(Re, {
                  modelValue: i.value,
                  "onUpdate:modelValue": U[3] || (U[3] = (W) => i.value = W),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", mi, [
                  f(le, {
                    variant: "secondary",
                    onClick: q
                  }, {
                    default: a(() => [...U[8] || (U[8] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: B
                  }, {
                    default: a(() => [...U[9] || (U[9] = [
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
}), fi = /* @__PURE__ */ Y(vi, [["__scopeId", "data-v-4fb196b1"]]), gi = { class: "node-info" }, hi = { class: "node-info-text" }, pi = { class: "item-body" }, yi = {
  key: 0,
  class: "resolved-state"
}, wi = {
  key: 1,
  class: "multiple-options"
}, bi = { class: "options-list" }, ki = ["onClick"], _i = ["name", "value", "checked", "onChange"], $i = { class: "option-content" }, Ci = { class: "option-header" }, xi = { class: "option-filename" }, Si = { class: "option-meta" }, Ii = { class: "option-size" }, Ei = { class: "option-category" }, Mi = { class: "option-path" }, zi = { class: "action-buttons" }, Li = {
  key: 2,
  class: "unresolved"
}, Ti = { class: "action-buttons" }, Di = /* @__PURE__ */ J({
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
    const n = t, r = d, g = O(() => !!n.choice);
    O(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), O(() => {
      var i, u;
      return ((u = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const y = O(() => {
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
    function v(i) {
      r("option-selected", i);
    }
    function m(i) {
      if (!i) return "Unknown";
      const u = i / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, u) => (o(), s("div", {
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", gi, [
        e("span", hi, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", pi, [
        g.value ? (o(), s("div", yi, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => r("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", wi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", bi, [
            (o(!0), s(H, null, ae(t.options, (b, h) => (o(), s("label", {
              key: b.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (z) => v(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (z) => v(h)
              }, null, 40, _i),
              e("div", $i, [
                e("div", Ci, [
                  e("span", xi, l(b.model.filename), 1),
                  f(Lt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Si, [
                  e("span", Ii, l(m(b.model.size)), 1),
                  e("span", Ei, l(b.model.category), 1)
                ]),
                e("div", Mi, l(b.model.relative_path), 1)
              ])
            ], 10, ki))), 128))
          ]),
          e("div", zi, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => r("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => r("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => r("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Li, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ti, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => r("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => r("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => r("mark-optional"))
            }, {
              default: a(() => [...u[15] || (u[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ri = /* @__PURE__ */ Y(Di, [["__scopeId", "data-v-8a82fefa"]]), Ni = { class: "model-resolution-step" }, Oi = { class: "step-header" }, Ui = { class: "step-info" }, Bi = { class: "step-title" }, Pi = { class: "step-description" }, Vi = { class: "stat-badge" }, Fi = {
  key: 1,
  class: "step-body"
}, Ai = {
  key: 2,
  class: "empty-state"
}, Wi = { class: "model-search-modal" }, Gi = { class: "model-modal-body" }, ji = {
  key: 0,
  class: "model-search-results"
}, Hi = ["onClick"], qi = { class: "model-result-header" }, Ki = { class: "model-result-filename" }, Ji = { class: "model-result-meta" }, Yi = { class: "model-result-category" }, Qi = { class: "model-result-size" }, Xi = {
  key: 0,
  class: "model-result-path"
}, Zi = {
  key: 1,
  class: "model-no-results"
}, er = {
  key: 2,
  class: "model-searching"
}, tr = { class: "model-download-url-modal" }, or = { class: "model-modal-body" }, sr = { class: "model-input-group" }, nr = { class: "model-input-group" }, ar = { class: "model-modal-actions" }, lr = /* @__PURE__ */ J({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
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
    function r(K) {
      var N;
      return K && ((N = n[K]) == null ? void 0 : N[0]) || null;
    }
    const g = t, y = d, v = C(0), m = C(!1), i = C(!1), u = C(""), b = C(""), h = C(""), z = C([]), M = C(!1), _ = O(() => g.models[v.value]), E = O(() => g.models.some((K) => K.is_download_intent)), k = O(() => g.models.filter(
      (K) => g.modelChoices.has(K.filename) || K.is_download_intent
    ).length), $ = O(() => {
      var N;
      if (!_.value) return "";
      const K = r((N = _.value.reference) == null ? void 0 : N.node_type);
      return K ? `${K}/${_.value.filename}` : "";
    }), P = O(() => {
      var N;
      if (!_.value) return "not-found";
      const K = g.modelChoices.get(_.value.filename);
      if (K)
        switch (K.action) {
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
      return _.value.is_download_intent ? "download" : (N = _.value.options) != null && N.length ? "ambiguous" : "not-found";
    }), L = O(() => {
      var N, se;
      if (!_.value) return;
      const K = g.modelChoices.get(_.value.filename);
      if (K)
        switch (K.action) {
          case "select":
            return (N = K.selected_model) != null && N.filename ? `→ ${K.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (se = _.value.options) != null && se.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function p(K) {
      K >= 0 && K < g.models.length && (v.value = K);
    }
    function S() {
      _.value && y("mark-optional", _.value.filename);
    }
    function I() {
      _.value && y("skip", _.value.filename);
    }
    function q(K) {
      _.value && y("option-selected", _.value.filename, K);
    }
    function G() {
      _.value && y("clear-choice", _.value.filename);
    }
    function F() {
      _.value && (u.value = _.value.filename, m.value = !0);
    }
    function B() {
      _.value && (b.value = _.value.download_source || "", h.value = _.value.target_path || $.value, i.value = !0);
    }
    function A() {
      m.value = !1, u.value = "", z.value = [];
    }
    function U() {
      i.value = !1, b.value = "", h.value = "";
    }
    function te() {
      M.value = !0, setTimeout(() => {
        M.value = !1;
      }, 300);
    }
    function V(K) {
      _.value && A();
    }
    function W() {
      !_.value || !b.value.trim() || (y("download-url", _.value.filename, b.value.trim(), h.value.trim() || void 0), U());
    }
    function oe(K) {
      if (!K) return "Unknown";
      const N = K / (1024 * 1024 * 1024);
      return N >= 1 ? `${N.toFixed(2)} GB` : `${(K / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (K, N) => {
      var se, ee, be;
      return o(), s("div", Ni, [
        e("div", Oi, [
          e("div", Ui, [
            e("h3", Bi, l(E.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Pi, l(E.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Vi, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), x(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: N[0] || (N[0] = (ge) => p(v.value - 1)),
          onNext: N[1] || (N[1] = (ge) => p(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        _.value ? (o(), s("div", Fi, [
          f(Ri, {
            filename: _.value.filename,
            "node-type": ((se = _.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((ee = _.value.options) != null && ee.length),
            options: _.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(_.value.filename),
            status: P.value,
            "status-label": L.value,
            onMarkOptional: S,
            onSkip: I,
            onDownloadUrl: B,
            onSearch: F,
            onOptionSelected: q,
            onClearChoice: G
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Ai, [...N[5] || (N[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(ke, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(A, ["self"])
          }, [
            e("div", Wi, [
              e("div", { class: "model-modal-header" }, [
                N[6] || (N[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", Gi, [
                f(Re, {
                  modelValue: u.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (ge) => u.value = ge),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                z.value.length > 0 ? (o(), s("div", ji, [
                  (o(!0), s(H, null, ae(z.value, (ge) => (o(), s("div", {
                    key: ge.hash,
                    class: "model-search-result-item",
                    onClick: (Xe) => V()
                  }, [
                    e("div", qi, [
                      e("code", Ki, l(ge.filename), 1)
                    ]),
                    e("div", Ji, [
                      e("span", Yi, l(ge.category), 1),
                      e("span", Qi, l(oe(ge.size)), 1)
                    ]),
                    ge.relative_path ? (o(), s("div", Xi, l(ge.relative_path), 1)) : c("", !0)
                  ], 8, Hi))), 128))
                ])) : u.value && !M.value ? (o(), s("div", Zi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                M.value ? (o(), s("div", er, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), x(ke, { to: "body" }, [
          i.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(U, ["self"])
          }, [
            e("div", tr, [
              e("div", { class: "model-modal-header" }, [
                N[7] || (N[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", or, [
                e("div", sr, [
                  N[8] || (N[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Re, {
                    modelValue: b.value,
                    "onUpdate:modelValue": N[3] || (N[3] = (ge) => b.value = ge),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", nr, [
                  N[9] || (N[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Re, {
                    modelValue: h.value,
                    "onUpdate:modelValue": N[4] || (N[4] = (ge) => h.value = ge),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ar, [
                  f(le, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: a(() => [...N[10] || (N[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !b.value.trim() || !h.value.trim(),
                    onClick: W
                  }, {
                    default: a(() => [...N[11] || (N[11] = [
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
}), ir = /* @__PURE__ */ Y(lr, [["__scopeId", "data-v-c6acbada"]]), rr = { class: "applying-step" }, dr = {
  key: 0,
  class: "phase-content"
}, cr = {
  key: 1,
  class: "phase-content"
}, ur = { class: "completion-summary" }, mr = {
  key: 0,
  class: "summary-item info"
}, vr = { class: "summary-text" }, fr = {
  key: 2,
  class: "phase-content error"
}, gr = { class: "error-message" }, hr = /* @__PURE__ */ J({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, n) => (o(), s("div", rr, [
      t.progress.phase === "resolving" ? (o(), s("div", dr, [...n[0] || (n[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), s("div", cr, [
        n[4] || (n[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", ur, [
          t.progress.nodesToInstall.length > 0 ? (o(), s("div", mr, [
            n[1] || (n[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", vr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          n[2] || (n[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[3] || (n[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), s("div", fr, [
        n[5] || (n[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", gr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), pr = /* @__PURE__ */ Y(hr, [["__scopeId", "data-v-b4d7e0eb"]]), yr = {
  key: 0,
  class: "loading-state"
}, wr = {
  key: 1,
  class: "wizard-content"
}, br = {
  key: 0,
  class: "step-content"
}, kr = { class: "analysis-summary" }, _r = { class: "analysis-header" }, $r = { class: "summary-description" }, Cr = { class: "stats-grid" }, xr = { class: "stat-card" }, Sr = { class: "stat-items" }, Ir = { class: "stat-item success" }, Er = { class: "stat-count" }, Mr = {
  key: 0,
  class: "stat-item warning"
}, zr = { class: "stat-count" }, Lr = {
  key: 1,
  class: "stat-item error"
}, Tr = { class: "stat-count" }, Dr = { class: "stat-card" }, Rr = { class: "stat-items" }, Nr = { class: "stat-item success" }, Or = { class: "stat-count" }, Ur = {
  key: 0,
  class: "stat-item info"
}, Br = { class: "stat-count" }, Pr = {
  key: 1,
  class: "stat-item warning"
}, Vr = { class: "stat-count" }, Fr = {
  key: 2,
  class: "stat-item error"
}, Ar = { class: "stat-count" }, Wr = {
  key: 0,
  class: "status-message warning"
}, Gr = { class: "status-text" }, jr = {
  key: 1,
  class: "status-message info"
}, Hr = { class: "status-text" }, qr = {
  key: 2,
  class: "status-message success"
}, Kr = {
  key: 3,
  class: "step-content"
}, Jr = { class: "review-summary" }, Yr = { class: "review-stats" }, Qr = { class: "review-stat" }, Xr = { class: "stat-value" }, Zr = { class: "review-stat" }, ed = { class: "stat-value" }, td = { class: "review-stat" }, od = { class: "stat-value" }, sd = { class: "review-stat" }, nd = { class: "stat-value" }, ad = {
  key: 0,
  class: "review-section"
}, ld = { class: "section-title" }, id = { class: "review-items" }, rd = { class: "item-name" }, dd = { class: "item-choice" }, cd = {
  key: 0,
  class: "choice-badge install"
}, ud = {
  key: 1,
  class: "choice-badge optional"
}, md = {
  key: 2,
  class: "choice-badge skip"
}, vd = {
  key: 1,
  class: "choice-badge pending"
}, fd = {
  key: 1,
  class: "review-section"
}, gd = { class: "section-title" }, hd = { class: "review-items" }, pd = { class: "item-name" }, yd = { class: "item-choice" }, wd = {
  key: 0,
  class: "choice-badge install"
}, bd = {
  key: 1,
  class: "choice-badge download"
}, kd = {
  key: 2,
  class: "choice-badge optional"
}, _d = {
  key: 3,
  class: "choice-badge skip"
}, $d = {
  key: 4,
  class: "choice-badge skip"
}, Cd = {
  key: 1,
  class: "choice-badge download"
}, xd = {
  key: 2,
  class: "choice-badge pending"
}, Sd = {
  key: 2,
  class: "no-choices"
}, Id = /* @__PURE__ */ J({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const n = t, r = d, { analyzeWorkflow: g, applyResolution: y, queueModelDownloads: v, progress: m, resetProgress: i } = il(), { loadPendingDownloads: u } = ht(), b = C(null), h = C(!1), z = C(!1), M = C(null), _ = C("analysis"), E = C([]), k = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Map()), P = O(() => {
      const R = [
        { id: "analysis", label: "Analysis" }
      ];
      return p.value && R.push({ id: "nodes", label: "Nodes" }), (S.value || I.value) && R.push({ id: "models", label: "Models" }), R.push({ id: "review", label: "Review" }), _.value === "applying" && R.push({ id: "applying", label: "Applying" }), R;
    }), L = O(() => b.value ? b.value.stats.needs_user_input : !1), p = O(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), S = O(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), I = O(() => b.value ? b.value.stats.download_intents > 0 : !1), q = O(() => b.value ? b.value.models.resolved.filter((R) => R.match_type === "download_intent").map((R) => ({
      filename: R.reference.widget_value,
      reference: R.reference,
      is_download_intent: !0,
      resolved_model: R.model,
      download_source: R.download_source,
      target_path: R.target_path
    })) : []), G = O(() => {
      if (!b.value) return [];
      const R = b.value.nodes.unresolved.map((Z) => ({
        node_type: Z.reference.node_type,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), D = b.value.nodes.ambiguous.map((Z) => ({
        node_type: Z.reference.node_type,
        has_multiple_options: !0,
        options: Z.options.map((me) => ({
          package_id: me.package.package_id,
          title: me.package.title,
          match_confidence: me.match_confidence,
          match_type: me.match_type,
          is_installed: me.is_installed
        }))
      }));
      return [...R, ...D];
    }), F = O(() => {
      if (!b.value) return [];
      const R = b.value.models.unresolved.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), D = b.value.models.ambiguous.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        has_multiple_options: !0,
        options: Z.options.map((me) => ({
          model: me.model,
          match_confidence: me.match_confidence,
          match_type: me.match_type,
          has_download_source: me.has_download_source
        }))
      }));
      return [...R, ...D];
    }), B = O(() => {
      const R = F.value, D = q.value.map((Z) => ({
        filename: Z.filename,
        reference: Z.reference,
        is_download_intent: !0,
        resolved_model: Z.resolved_model,
        download_source: Z.download_source,
        target_path: Z.target_path,
        options: void 0
      }));
      return [...R, ...D];
    }), A = O(() => {
      let R = 0;
      for (const D of k.value.values())
        D.action === "install" && R++;
      for (const D of $.value.values())
        D.action === "select" && R++;
      return R;
    }), U = O(() => {
      let R = 0;
      for (const D of $.value.values())
        D.action === "download" && R++;
      return R;
    }), te = O(() => {
      let R = 0;
      for (const D of k.value.values())
        D.action === "optional" && R++;
      for (const D of $.value.values())
        D.action === "optional" && R++;
      return R;
    }), V = O(() => {
      let R = 0;
      for (const D of k.value.values())
        D.action === "skip" && R++;
      for (const D of $.value.values())
        D.action === "skip" && R++;
      for (const D of G.value)
        k.value.has(D.node_type) || R++;
      for (const D of F.value)
        $.value.has(D.filename) || R++;
      return R;
    }), W = O(() => {
      const R = {};
      if (R.analysis = { resolved: 1, total: 1 }, p.value) {
        const D = G.value.length, Z = G.value.filter(
          (me) => k.value.has(me.node_type)
        ).length;
        R.nodes = { resolved: Z, total: D };
      }
      if (S.value || I.value) {
        const D = B.value.length, Z = B.value.filter(
          (me) => $.value.has(me.filename) || me.is_download_intent
        ).length;
        R.models = { resolved: Z, total: D };
      }
      if (R.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const D = m.totalFiles || 1, Z = m.completedFiles.length;
        R.applying = { resolved: Z, total: D };
      }
      return R;
    });
    function oe(R) {
      _.value = R;
    }
    function K() {
      const R = P.value.findIndex((D) => D.id === _.value);
      R > 0 && (_.value = P.value[R - 1].id);
    }
    function N() {
      const R = P.value.findIndex((D) => D.id === _.value);
      R < P.value.length - 1 && (_.value = P.value[R + 1].id);
    }
    async function se() {
      h.value = !0, M.value = null;
      try {
        b.value = await g(n.workflowName);
      } catch (R) {
        M.value = R instanceof Error ? R.message : "Failed to analyze workflow";
      } finally {
        h.value = !1;
      }
    }
    function ee() {
      E.value.includes("analysis") || E.value.push("analysis"), p.value ? _.value = "nodes" : S.value || I.value ? _.value = "models" : _.value = "review";
    }
    function be(R) {
      k.value.set(R, { action: "optional" });
    }
    function ge(R) {
      k.value.set(R, { action: "skip" });
    }
    function Xe(R, D) {
      var me;
      const Z = G.value.find((ze) => ze.node_type === R);
      (me = Z == null ? void 0 : Z.options) != null && me[D] && k.value.set(R, {
        action: "install",
        package_id: Z.options[D].package_id
      });
    }
    function ve(R, D) {
      k.value.set(R, {
        action: "install",
        package_id: D
      });
    }
    function Me(R) {
      k.value.delete(R);
    }
    function at(R) {
      $.value.set(R, { action: "optional" });
    }
    function Ke(R) {
      $.value.set(R, { action: "skip" });
    }
    function Se(R, D) {
      var me;
      const Z = F.value.find((ze) => ze.filename === R);
      (me = Z == null ? void 0 : Z.options) != null && me[D] && $.value.set(R, {
        action: "select",
        selected_model: Z.options[D].model
      });
    }
    function lt(R, D, Z) {
      $.value.set(R, {
        action: "download",
        url: D,
        target_path: Z
      });
    }
    function Ze(R) {
      $.value.delete(R);
    }
    async function Q() {
      z.value = !0, M.value = null, i(), m.phase = "resolving", _.value = "applying";
      try {
        const R = await y(n.workflowName, k.value, $.value);
        R.models_to_download && R.models_to_download.length > 0 && v(n.workflowName, R.models_to_download), m.nodesToInstall = R.nodes_to_install || [], m.phase = "complete", await u(), setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (R) {
        M.value = R instanceof Error ? R.message : "Failed to apply resolution", m.error = M.value, m.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    return ye(se), (R, D) => (o(), x(gt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: h.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (Z) => r("close"))
    }, {
      body: a(() => [
        h.value && !b.value ? (o(), s("div", yr, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), s("div", wr, [
          f(pl, {
            steps: P.value,
            "current-step": _.value,
            "completed-steps": E.value,
            "step-stats": W.value,
            onStepChange: oe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), s("div", br, [
            e("div", kr, [
              e("div", _r, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", $r, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Cr, [
                e("div", xr, [
                  D[10] || (D[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Sr, [
                    e("div", Ir, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Er, l(b.value.nodes.resolved.length), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), s("div", Mr, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zr, l(b.value.nodes.ambiguous.length), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), s("div", Lr, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Tr, l(b.value.nodes.unresolved.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Dr, [
                  D[19] || (D[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rr, [
                    e("div", Nr, [
                      D[11] || (D[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Or, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      D[12] || (D[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), s("div", Ur, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Br, l(b.value.stats.download_intents), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), s("div", Pr, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Vr, l(b.value.models.ambiguous.length), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), s("div", Fr, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ar, l(b.value.models.unresolved.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              L.value ? (o(), s("div", Wr, [
                D[20] || (D[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Gr, l(G.value.length + F.value.length) + " items need your input", 1)
              ])) : I.value ? (o(), s("div", jr, [
                D[21] || (D[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", qr, [...D[22] || (D[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), x(fi, {
            key: 1,
            nodes: G.value,
            "node-choices": k.value,
            onMarkOptional: be,
            onSkip: ge,
            onOptionSelected: Xe,
            onManualEntry: ve,
            onClearChoice: Me
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          _.value === "models" ? (o(), x(ir, {
            key: 2,
            models: B.value,
            "model-choices": $.value,
            onMarkOptional: at,
            onSkip: Ke,
            onOptionSelected: Se,
            onDownloadUrl: lt,
            onClearChoice: Ze
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), s("div", Kr, [
            e("div", Jr, [
              D[27] || (D[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Yr, [
                e("div", Qr, [
                  e("span", Xr, l(A.value), 1),
                  D[23] || (D[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zr, [
                  e("span", ed, l(U.value), 1),
                  D[24] || (D[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", td, [
                  e("span", od, l(te.value), 1),
                  D[25] || (D[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", sd, [
                  e("span", nd, l(V.value), 1),
                  D[26] || (D[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              G.value.length > 0 ? (o(), s("div", ad, [
                e("h4", ld, "Node Packages (" + l(G.value.length) + ")", 1),
                e("div", id, [
                  (o(!0), s(H, null, ae(G.value, (Z) => {
                    var me, ze, Oe, Ue;
                    return o(), s("div", {
                      key: Z.node_type,
                      class: "review-item"
                    }, [
                      e("code", rd, l(Z.node_type), 1),
                      e("div", dd, [
                        k.value.has(Z.node_type) ? (o(), s(H, { key: 0 }, [
                          ((me = k.value.get(Z.node_type)) == null ? void 0 : me.action) === "install" ? (o(), s("span", cd, l((ze = k.value.get(Z.node_type)) == null ? void 0 : ze.package_id), 1)) : ((Oe = k.value.get(Z.node_type)) == null ? void 0 : Oe.action) === "optional" ? (o(), s("span", ud, " Optional ")) : ((Ue = k.value.get(Z.node_type)) == null ? void 0 : Ue.action) === "skip" ? (o(), s("span", md, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", vd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              B.value.length > 0 ? (o(), s("div", fd, [
                e("h4", gd, "Models (" + l(B.value.length) + ")", 1),
                e("div", hd, [
                  (o(!0), s(H, null, ae(B.value, (Z) => {
                    var me, ze, Oe, Ue, pt, Be, yt;
                    return o(), s("div", {
                      key: Z.filename,
                      class: "review-item"
                    }, [
                      e("code", pd, l(Z.filename), 1),
                      e("div", yd, [
                        $.value.has(Z.filename) ? (o(), s(H, { key: 0 }, [
                          ((me = $.value.get(Z.filename)) == null ? void 0 : me.action) === "select" ? (o(), s("span", wd, l((Oe = (ze = $.value.get(Z.filename)) == null ? void 0 : ze.selected_model) == null ? void 0 : Oe.filename), 1)) : ((Ue = $.value.get(Z.filename)) == null ? void 0 : Ue.action) === "download" ? (o(), s("span", bd, " Download ")) : ((pt = $.value.get(Z.filename)) == null ? void 0 : pt.action) === "optional" ? (o(), s("span", kd, " Optional ")) : ((Be = $.value.get(Z.filename)) == null ? void 0 : Be.action) === "skip" ? (o(), s("span", _d, " Skip ")) : ((yt = $.value.get(Z.filename)) == null ? void 0 : yt.action) === "cancel_download" ? (o(), s("span", $d, " Cancel Download ")) : c("", !0)
                        ], 64)) : Z.is_download_intent ? (o(), s("span", Cd, " Pending Download ")) : (o(), s("span", xd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              G.value.length === 0 && B.value.length === 0 ? (o(), s("div", Sd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), x(pr, {
            key: 4,
            progress: ce(m)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), x(le, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: K
        }, {
          default: a(() => [...D[28] || (D[28] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        D[31] || (D[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || ce(m).phase === "complete" || ce(m).phase === "error" ? (o(), x(le, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (Z) => r("close"))
        }, {
          default: a(() => [
            w(l(ce(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), x(le, {
          key: 2,
          variant: "primary",
          disabled: h.value,
          onClick: ee
        }, {
          default: a(() => [
            w(l(L.value || I.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), x(le, {
          key: 3,
          variant: "primary",
          onClick: N
        }, {
          default: a(() => [
            w(l(S.value || I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), x(le, {
          key: 4,
          variant: "primary",
          onClick: N
        }, {
          default: a(() => [...D[29] || (D[29] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), x(le, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: Q
        }, {
          default: a(() => [...D[30] || (D[30] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ed = /* @__PURE__ */ Y(Id, [["__scopeId", "data-v-08beb8e3"]]), Md = { class: "search-input-wrapper" }, zd = ["value", "placeholder"], Ld = /* @__PURE__ */ J({
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
    const n = t, r = d, g = C(null);
    let y;
    function v(i) {
      const u = i.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", u);
      }, n.debounce)) : r("update:modelValue", u);
    }
    function m() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = g.value) == null || i.focus();
    }
    return ye(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (i, u) => (o(), s("div", Md, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: We(m, ["escape"])
      }, null, 40, zd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Td = /* @__PURE__ */ Y(Ld, [["__scopeId", "data-v-266f857a"]]), Dd = { class: "search-bar" }, Rd = /* @__PURE__ */ J({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, n) => (o(), s("div", Dd, [
      f(Td, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), st = /* @__PURE__ */ Y(Rd, [["__scopeId", "data-v-3d51bbfd"]]), Nd = { class: "section-group" }, Od = {
  key: 0,
  class: "section-content"
}, Ud = /* @__PURE__ */ J({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const n = t, r = d, g = C(n.initiallyExpanded);
    function y() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (v, m) => (o(), s("section", Nd, [
      f(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: a(() => [
          w(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", Od, [
        re(v.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), we = /* @__PURE__ */ Y(Ud, [["__scopeId", "data-v-c48e33ed"]]), Bd = { class: "item-header" }, Pd = {
  key: 0,
  class: "item-icon"
}, Vd = { class: "item-info" }, Fd = {
  key: 0,
  class: "item-title"
}, Ad = {
  key: 1,
  class: "item-subtitle"
}, Wd = {
  key: 0,
  class: "item-details"
}, Gd = {
  key: 1,
  class: "item-actions"
}, jd = /* @__PURE__ */ J({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const n = t, r = O(() => n.status ? `status-${n.status}` : "");
    return (g, y) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (v) => t.clickable && g.$emit("click"))
    }, [
      e("div", Bd, [
        g.$slots.icon ? (o(), s("span", Pd, [
          re(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Vd, [
          g.$slots.title ? (o(), s("div", Fd, [
            re(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), s("div", Ad, [
            re(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", Wd, [
        re(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), s("div", Gd, [
        re(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), $e = /* @__PURE__ */ Y(jd, [["__scopeId", "data-v-cc435e0e"]]), Hd = { class: "loading-state" }, qd = { class: "loading-message" }, Kd = /* @__PURE__ */ J({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, n) => (o(), s("div", Hd, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", qd, l(t.message), 1)
    ]));
  }
}), je = /* @__PURE__ */ Y(Kd, [["__scopeId", "data-v-ad8436c9"]]), Jd = { class: "error-state" }, Yd = { class: "error-message" }, Qd = /* @__PURE__ */ J({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, n) => (o(), s("div", Jd, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Yd, l(t.message), 1),
      t.retry ? (o(), x(X, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("retry"))
      }, {
        default: a(() => [...n[1] || (n[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), He = /* @__PURE__ */ Y(Qd, [["__scopeId", "data-v-5397be48"]]), Xd = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: n }) {
    const r = n, { getWorkflows: g } = _e(), y = C([]), v = C(!1), m = C(null), i = C(""), u = C(!0), b = C(!1), h = C(!1), z = C(!1), M = C(null), _ = O(
      () => y.value.filter((V) => V.status === "broken")
    ), E = O(
      () => y.value.filter((V) => V.status === "new")
    ), k = O(
      () => y.value.filter((V) => V.status === "modified")
    ), $ = O(
      () => y.value.filter((V) => V.status === "synced")
    ), P = O(() => {
      if (!i.value.trim()) return y.value;
      const V = i.value.toLowerCase();
      return y.value.filter((W) => W.name.toLowerCase().includes(V));
    }), L = O(
      () => _.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), p = O(
      () => E.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), S = O(
      () => k.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), I = O(
      () => $.value.filter(
        (V) => !i.value.trim() || V.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), q = O(
      () => b.value ? I.value : I.value.slice(0, 5)
    );
    async function G(V = !1) {
      v.value = !0, m.value = null;
      try {
        y.value = await g(V);
      } catch (W) {
        m.value = W instanceof Error ? W.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    d({ loadWorkflows: G });
    function F(V) {
      M.value = V, h.value = !0;
    }
    function B(V) {
      M.value = V, z.value = !0;
    }
    function A() {
      alert("Bulk resolution not yet implemented");
    }
    function U() {
      r("refresh");
    }
    function te(V) {
      const W = [];
      return V.missing_nodes > 0 && W.push(`${V.missing_nodes} missing node${V.missing_nodes > 1 ? "s" : ""}`), V.missing_models > 0 && W.push(`${V.missing_models} missing model${V.missing_models > 1 ? "s" : ""}`), V.pending_downloads && V.pending_downloads > 0 && W.push(`${V.pending_downloads} pending download${V.pending_downloads > 1 ? "s" : ""}`), W.length > 0 ? W.join(", ") : "Has issues";
    }
    return ye(G), (V, W) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), x(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: a(() => [...W[8] || (W[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          f(st, {
            modelValue: i.value,
            "onUpdate:modelValue": W[0] || (W[0] = (oe) => i.value = oe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), x(je, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), x(He, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            L.value.length ? (o(), x(we, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(L.value, (oe) => (o(), x($e, {
                  key: oe.name,
                  status: "broken"
                }, {
                  icon: a(() => [...W[9] || (W[9] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(oe.name), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(te(oe)), 1)
                  ]),
                  actions: a(() => [
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => B(oe.name)
                    }, {
                      default: a(() => [...W[10] || (W[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(oe.name)
                    }, {
                      default: a(() => [...W[11] || (W[11] = [
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
            p.value.length ? (o(), x(we, {
              key: 1,
              title: "NEW",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(p.value, (oe) => (o(), x($e, {
                  key: oe.name,
                  status: "new"
                }, {
                  icon: a(() => [...W[12] || (W[12] = [
                    w("●", -1)
                  ])]),
                  title: a(() => [
                    w(l(oe.name), 1)
                  ]),
                  subtitle: a(() => [...W[13] || (W[13] = [
                    w("New", -1)
                  ])]),
                  actions: a(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(oe.name)
                    }, {
                      default: a(() => [...W[14] || (W[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (o(), x(we, {
              key: 2,
              title: "MODIFIED",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(S.value, (oe) => (o(), x($e, {
                  key: oe.name,
                  status: "modified"
                }, {
                  icon: a(() => [...W[15] || (W[15] = [
                    w("⚡", -1)
                  ])]),
                  title: a(() => [
                    w(l(oe.name), 1)
                  ]),
                  subtitle: a(() => [...W[16] || (W[16] = [
                    w("Modified", -1)
                  ])]),
                  actions: a(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(oe.name)
                    }, {
                      default: a(() => [...W[17] || (W[17] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            I.value.length ? (o(), x(we, {
              key: 3,
              title: "SYNCED",
              count: I.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: W[2] || (W[2] = (oe) => u.value = oe)
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(q.value, (oe) => (o(), x($e, {
                  key: oe.name,
                  status: "synced"
                }, {
                  icon: a(() => [...W[18] || (W[18] = [
                    w("✓", -1)
                  ])]),
                  title: a(() => [
                    w(l(oe.name), 1)
                  ]),
                  subtitle: a(() => [...W[19] || (W[19] = [
                    w("Synced", -1)
                  ])]),
                  actions: a(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(oe.name)
                    }, {
                      default: a(() => [...W[20] || (W[20] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && I.value.length > 5 ? (o(), x(X, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: W[1] || (W[1] = (oe) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    w(" View all " + l(I.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            P.value.length ? c("", !0) : (o(), x(Ne, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && M.value ? (o(), x(nl, {
        key: 0,
        "workflow-name": M.value,
        onClose: W[3] || (W[3] = (oe) => h.value = !1),
        onResolve: W[4] || (W[4] = (oe) => B(M.value)),
        onRefresh: W[5] || (W[5] = (oe) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      z.value && M.value ? (o(), x(Ed, {
        key: 1,
        "workflow-name": M.value,
        onClose: W[6] || (W[6] = (oe) => z.value = !1),
        onInstall: U,
        onRefresh: W[7] || (W[7] = (oe) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Zd = /* @__PURE__ */ Y(Xd, [["__scopeId", "data-v-af6b1cd7"]]), ec = /* @__PURE__ */ J({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ Y(ec, [["__scopeId", "data-v-ccb7816e"]]), tc = {
  key: 0,
  class: "model-details"
}, oc = { class: "detail-section" }, sc = { class: "detail-row" }, nc = { class: "detail-value mono" }, ac = { class: "detail-row" }, lc = { class: "detail-value mono" }, ic = { class: "detail-row" }, rc = { class: "detail-value mono" }, dc = { class: "detail-row" }, cc = { class: "detail-value" }, uc = { class: "detail-row" }, mc = { class: "detail-value" }, vc = { class: "detail-row" }, fc = { class: "detail-value" }, gc = { class: "detail-section" }, hc = { class: "section-header" }, pc = {
  key: 0,
  class: "locations-list"
}, yc = { class: "location-path mono" }, wc = {
  key: 0,
  class: "location-modified"
}, bc = ["onClick"], kc = {
  key: 1,
  class: "empty-state"
}, _c = { class: "detail-section" }, $c = { class: "section-header" }, Cc = {
  key: 0,
  class: "sources-list"
}, xc = { class: "source-type" }, Sc = ["href"], Ic = {
  key: 1,
  class: "empty-state"
}, Ec = { class: "add-source-form" }, Mc = ["disabled"], zc = {
  key: 2,
  class: "source-error"
}, Lc = {
  key: 3,
  class: "source-success"
}, Tc = /* @__PURE__ */ J({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const n = t, { getModelDetails: r, updateModelSource: g, openFileLocation: y } = _e(), v = C(null), m = C(!0), i = C(null), u = C(""), b = C(!1), h = C(null), z = C(null), M = C(null);
    let _ = null;
    function E(S, I = "success", q = 2e3) {
      _ && clearTimeout(_), M.value = { message: S, type: I }, _ = setTimeout(() => {
        M.value = null;
      }, q);
    }
    function k(S) {
      if (!S) return "Unknown";
      const I = 1024 * 1024 * 1024, q = 1024 * 1024;
      return S >= I ? `${(S / I).toFixed(1)} GB` : S >= q ? `${(S / q).toFixed(0)} MB` : `${(S / 1024).toFixed(0)} KB`;
    }
    function $(S) {
      navigator.clipboard.writeText(S), E("Copied to clipboard!");
    }
    async function P(S) {
      try {
        await y(S), E("Opening file location...");
      } catch {
        E("Failed to open location", "error");
      }
    }
    async function L() {
      if (!(!u.value.trim() || !v.value)) {
        b.value = !0, h.value = null, z.value = null;
        try {
          const S = v.value.sha256 || v.value.blake3 || v.value.hash || v.value.filename;
          await g(S, u.value.trim()), z.value = "Source added successfully!", u.value = "", await p();
        } catch (S) {
          h.value = S instanceof Error ? S.message : "Failed to add source";
        } finally {
          b.value = !1;
        }
      }
    }
    async function p() {
      m.value = !0, i.value = null;
      try {
        v.value = await r(n.identifier);
      } catch (S) {
        i.value = S instanceof Error ? S.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return ye(p), (S, I) => {
      var q;
      return o(), s(H, null, [
        f(gt, {
          title: `Model Details: ${((q = v.value) == null ? void 0 : q.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: i.value,
          onClose: I[5] || (I[5] = (G) => S.$emit("close"))
        }, {
          body: a(() => {
            var G, F, B, A;
            return [
              v.value ? (o(), s("div", tc, [
                e("section", oc, [
                  e("div", sc, [
                    I[6] || (I[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", nc, l(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[0] || (I[0] = (U) => $(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ac, [
                    I[7] || (I[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", lc, l(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[1] || (I[1] = (U) => $(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ic, [
                    I[8] || (I[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", rc, l(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[2] || (I[2] = (U) => $(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", dc, [
                    I[9] || (I[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", cc, l(k(v.value.size)), 1)
                  ]),
                  e("div", uc, [
                    I[10] || (I[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", mc, l(v.value.category), 1)
                  ]),
                  e("div", vc, [
                    I[11] || (I[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", fc, l(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", gc, [
                  e("h4", hc, "Locations (" + l(((G = v.value.locations) == null ? void 0 : G.length) || 0) + ")", 1),
                  (F = v.value.locations) != null && F.length ? (o(), s("div", pc, [
                    (o(!0), s(H, null, ae(v.value.locations, (U, te) => (o(), s("div", {
                      key: te,
                      class: "location-item"
                    }, [
                      e("span", yc, l(U.path), 1),
                      U.modified ? (o(), s("span", wc, "Modified: " + l(U.modified), 1)) : c("", !0),
                      U.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (V) => P(U.path)
                      }, " Open File Location ", 8, bc)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", kc, "No locations found"))
                ]),
                e("section", _c, [
                  e("h4", $c, "Download Sources (" + l(((B = v.value.sources) == null ? void 0 : B.length) || 0) + ")", 1),
                  (A = v.value.sources) != null && A.length ? (o(), s("div", Cc, [
                    (o(!0), s(H, null, ae(v.value.sources, (U, te) => (o(), s("div", {
                      key: te,
                      class: "source-item"
                    }, [
                      e("span", xc, l(U.type) + ":", 1),
                      e("a", {
                        href: U.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(U.url), 9, Sc)
                    ]))), 128))
                  ])) : (o(), s("div", Ic, " No download sources configured ")),
                  e("div", Ec, [
                    io(e("input", {
                      "onUpdate:modelValue": I[3] || (I[3] = (U) => u.value = U),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ro, u.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !u.value.trim() || b.value,
                      onClick: L
                    }, l(b.value ? "Adding..." : "Add Source"), 9, Mc)
                  ]),
                  h.value ? (o(), s("p", zc, l(h.value), 1)) : c("", !0),
                  z.value ? (o(), s("p", Lc, l(z.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: I[4] || (I[4] = (G) => S.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(ke, { to: "body" }, [
          M.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", M.value.type])
          }, l(M.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Ht = /* @__PURE__ */ Y(Tc, [["__scopeId", "data-v-e14520f5"]]), Dc = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const n = d, { getEnvironmentModels: r, getStatus: g } = _e(), y = C([]), v = C([]), m = C("production"), i = C(!1), u = C(null), b = C(""), h = C(!1), z = C(null);
    function M() {
      h.value = !1, n("navigate", "model-index");
    }
    const _ = O(
      () => y.value.reduce((q, G) => q + (G.size || 0), 0)
    ), E = O(() => {
      if (!b.value.trim()) return y.value;
      const q = b.value.toLowerCase();
      return y.value.filter((G) => G.filename.toLowerCase().includes(q));
    }), k = O(() => {
      if (!b.value.trim()) return v.value;
      const q = b.value.toLowerCase();
      return v.value.filter((G) => G.filename.toLowerCase().includes(q));
    }), $ = O(() => {
      const q = {};
      for (const F of E.value) {
        const B = F.type || "other";
        q[B] || (q[B] = []), q[B].push(F);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(q).sort(([F], [B]) => {
        const A = G.indexOf(F), U = G.indexOf(B);
        return A >= 0 && U >= 0 ? A - U : A >= 0 ? -1 : U >= 0 ? 1 : F.localeCompare(B);
      }).map(([F, B]) => ({ type: F, models: B }));
    });
    function P(q) {
      if (!q) return "Unknown";
      const G = q / (1024 * 1024);
      return G >= 1024 ? `${(G / 1024).toFixed(1)} GB` : `${G.toFixed(0)} MB`;
    }
    function L(q) {
      z.value = q.hash || q.filename;
    }
    function p(q) {
      n("navigate", "model-index");
    }
    function S(q) {
      alert(`Download functionality not yet implemented for ${q}`);
    }
    async function I() {
      i.value = !0, u.value = null;
      try {
        const q = await r();
        y.value = q, v.value = [];
        const G = await g();
        m.value = G.environment || "production";
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return ye(I), (q, G) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (F) => h.value = !0)
          })
        ]),
        search: a(() => [
          f(st, {
            modelValue: b.value,
            "onUpdate:modelValue": G[1] || (G[1] = (F) => b.value = F),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), x(je, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (o(), x(He, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            y.value.length ? (o(), x(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.length) + " models • " + l(P(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(H, null, ae($.value, (F) => (o(), x(we, {
              key: F.type,
              title: F.type.toUpperCase(),
              count: F.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(F.models, (B) => (o(), x($e, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...G[4] || (G[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(P(B.size)), 1)
                  ]),
                  details: a(() => [
                    f(fe, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(fe, {
                      label: "Path:",
                      value: B.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => L(B)
                    }, {
                      default: a(() => [...G[5] || (G[5] = [
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
            k.value.length ? (o(), x(we, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(k.value, (F) => (o(), x($e, {
                  key: F.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...G[6] || (G[6] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(F.filename), 1)
                  ]),
                  subtitle: a(() => [...G[7] || (G[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var B;
                    return [
                      f(fe, {
                        label: "Required by:",
                        value: ((B = F.workflow_names) == null ? void 0 : B.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => S(F.filename)
                    }, {
                      default: a(() => [...G[8] || (G[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => p(F.filename)
                    }, {
                      default: a(() => [...G[9] || (G[9] = [
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
            !E.value.length && !k.value.length ? (o(), x(Ne, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(Ge, {
        show: h.value,
        title: "About Environment Models",
        onClose: G[2] || (G[2] = (F) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            G[10] || (G[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            G[11] || (G[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          f(X, {
            variant: "primary",
            onClick: M
          }, {
            default: a(() => [...G[12] || (G[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), x(Ht, {
        key: 0,
        identifier: z.value,
        onClose: G[3] || (G[3] = (F) => z.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Rc = /* @__PURE__ */ Y(Dc, [["__scopeId", "data-v-cb4f12b3"]]), Nc = {
  key: 0,
  class: "indexing-progress"
}, Oc = { class: "progress-info" }, Uc = { class: "progress-label" }, Bc = { class: "progress-count" }, Pc = { class: "progress-bar" }, Vc = { class: "modal-content" }, Fc = { class: "modal-header" }, Ac = { class: "modal-body" }, Wc = { class: "input-group" }, Gc = { class: "current-path" }, jc = { class: "input-group" }, Hc = { class: "modal-footer" }, qc = { class: "modal-content" }, Kc = { class: "modal-header" }, Jc = { class: "modal-body" }, Yc = { class: "input-group" }, Qc = { class: "input-group" }, Xc = { class: "modal-footer" }, Zc = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: d }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: y
    } = _e(), { addToQueue: v } = ht(), m = d, i = C([]), u = C(!1), b = C(!1), h = C(null), z = C(""), M = C(!1), _ = C(null), E = C(!1), k = C(null), $ = C(""), P = C(!1), L = C(!1), p = C(""), S = C(""), I = C(null), q = O(
      () => i.value.reduce((K, N) => K + (N.size || 0), 0)
    ), G = O(() => {
      if (!z.value.trim()) return i.value;
      const K = z.value.toLowerCase();
      return i.value.filter((N) => {
        const se = N, ee = N.sha256 || se.sha256_hash || "";
        return N.filename.toLowerCase().includes(K) || ee.toLowerCase().includes(K);
      });
    }), F = O(() => {
      const K = {};
      for (const se of G.value) {
        const ee = se.type || "other";
        K[ee] || (K[ee] = []), K[ee].push(se);
      }
      const N = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(K).sort(([se], [ee]) => {
        const be = N.indexOf(se), ge = N.indexOf(ee);
        return be >= 0 && ge >= 0 ? be - ge : be >= 0 ? -1 : ge >= 0 ? 1 : se.localeCompare(ee);
      }).map(([se, ee]) => ({ type: se, models: ee }));
    });
    function B(K) {
      if (!K) return "Unknown";
      const N = 1024 * 1024 * 1024, se = 1024 * 1024;
      return K >= N ? `${(K / N).toFixed(1)} GB` : K >= se ? `${(K / se).toFixed(0)} MB` : `${(K / 1024).toFixed(0)} KB`;
    }
    function A(K) {
      _.value = K.hash || K.filename;
    }
    async function U() {
      b.value = !0, h.value = null;
      try {
        const K = await r();
        await W(), K.changes > 0 && console.log(`Scan complete: ${K.changes} changes detected`);
      } catch (K) {
        h.value = K instanceof Error ? K.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function te() {
      if ($.value.trim()) {
        P.value = !0, h.value = null;
        try {
          const K = await y($.value.trim());
          k.value = K.path, E.value = !1, $.value = "", await W(), console.log(`Directory changed: ${K.models_indexed} models indexed`), m("refresh");
        } catch (K) {
          h.value = K instanceof Error ? K.message : "Failed to change directory";
        } finally {
          P.value = !1;
        }
      }
    }
    function V() {
      if (!p.value.trim() || !S.value.trim()) return;
      const K = S.value.split("/").pop() || "model.safetensors";
      v([{
        workflow: "__manual__",
        filename: K,
        url: p.value.trim(),
        targetPath: S.value.trim()
      }]), p.value = "", S.value = "", L.value = !1;
    }
    async function W() {
      u.value = !0, h.value = null;
      try {
        i.value = await n();
      } catch (K) {
        h.value = K instanceof Error ? K.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function oe() {
      try {
        const K = await g();
        k.value = K.path;
      } catch {
      }
    }
    return ye(() => {
      W(), oe();
    }), (K, N) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: N[2] || (N[2] = (se) => M.value = !0)
          }, {
            actions: a(() => [
              f(X, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: U
              }, {
                default: a(() => [
                  w(l(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (se) => E.value = !0)
              }, {
                default: a(() => [...N[15] || (N[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(X, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (se) => L.value = !0)
              }, {
                default: a(() => [...N[16] || (N[16] = [
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
        search: a(() => [
          I.value ? (o(), s("div", Nc, [
            e("div", Oc, [
              e("span", Uc, l(I.value.message), 1),
              e("span", Bc, l(I.value.current) + "/" + l(I.value.total), 1)
            ]),
            e("div", Pc, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          f(st, {
            modelValue: z.value,
            "onUpdate:modelValue": N[3] || (N[3] = (se) => z.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value || I.value ? (o(), x(je, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (o(), x(He, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            i.value.length ? (o(), x(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(i.value.length) + " models • " + l(B(q.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(H, null, ae(F.value, (se) => (o(), x(we, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(se.models, (ee) => (o(), x($e, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[17] || (N[17] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(ee.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(B(ee.size)), 1)
                  ]),
                  details: a(() => [
                    f(fe, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => A(ee)
                    }, {
                      default: a(() => [...N[18] || (N[18] = [
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
            G.value.length ? c("", !0) : (o(), x(Ne, {
              key: 1,
              icon: "📭",
              message: z.value ? `No models match '${z.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(Ge, {
        show: M.value,
        title: "About Workspace Model Index",
        onClose: N[4] || (N[4] = (se) => M.value = !1)
      }, {
        content: a(() => [...N[19] || (N[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (o(), x(Ht, {
        key: 0,
        identifier: _.value,
        onClose: N[5] || (N[5] = (se) => _.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), x(ke, { to: "body" }, [
        E.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: N[9] || (N[9] = pe((se) => E.value = !1, ["self"]))
        }, [
          e("div", Vc, [
            e("div", Fc, [
              N[20] || (N[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: N[6] || (N[6] = (se) => E.value = !1)
              }, "✕")
            ]),
            e("div", Ac, [
              e("div", Wc, [
                N[21] || (N[21] = e("label", null, "Current Directory", -1)),
                e("code", Gc, l(k.value || "Not set"), 1)
              ]),
              e("div", jc, [
                N[22] || (N[22] = e("label", null, "New Directory Path", -1)),
                f(Re, {
                  modelValue: $.value,
                  "onUpdate:modelValue": N[7] || (N[7] = (se) => $.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              N[23] || (N[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Hc, [
              f(le, {
                variant: "secondary",
                onClick: N[8] || (N[8] = (se) => E.value = !1)
              }, {
                default: a(() => [...N[24] || (N[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !$.value.trim() || P.value,
                loading: P.value,
                onClick: te
              }, {
                default: a(() => [
                  w(l(P.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), x(ke, { to: "body" }, [
        L.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: N[14] || (N[14] = pe((se) => L.value = !1, ["self"]))
        }, [
          e("div", qc, [
            e("div", Kc, [
              N[25] || (N[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: N[10] || (N[10] = (se) => L.value = !1)
              }, "✕")
            ]),
            e("div", Jc, [
              e("div", Yc, [
                N[26] || (N[26] = e("label", null, "Download URL", -1)),
                f(Re, {
                  modelValue: p.value,
                  "onUpdate:modelValue": N[11] || (N[11] = (se) => p.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Qc, [
                N[27] || (N[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Re, {
                  modelValue: S.value,
                  "onUpdate:modelValue": N[12] || (N[12] = (se) => S.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              N[28] || (N[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Xc, [
              f(le, {
                variant: "secondary",
                onClick: N[13] || (N[13] = (se) => L.value = !1)
              }, {
                default: a(() => [...N[29] || (N[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !p.value.trim() || !S.value.trim(),
                onClick: V
              }, {
                default: a(() => [...N[30] || (N[30] = [
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
}), eu = /* @__PURE__ */ Y(Zc, [["__scopeId", "data-v-73b78d84"]]), tu = { key: 0 }, ou = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, su = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, nu = /* @__PURE__ */ J({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: n, updateNode: r, uninstallNode: g } = _e(), y = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = C(!1), m = C(null), i = C(""), u = C(!1), b = O(() => {
      if (!i.value.trim()) return y.value.nodes;
      const p = i.value.toLowerCase();
      return y.value.nodes.filter(
        (S) => {
          var I, q;
          return S.name.toLowerCase().includes(p) || ((I = S.description) == null ? void 0 : I.toLowerCase().includes(p)) || ((q = S.repository) == null ? void 0 : q.toLowerCase().includes(p));
        }
      );
    }), h = O(
      () => b.value.filter((p) => p.installed)
    ), z = O(
      () => b.value.filter((p) => !p.installed)
    );
    function M(p) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[p] || p;
    }
    function _(p) {
      return !p.used_in_workflows || p.used_in_workflows.length === 0 ? "Not used in any workflows" : p.used_in_workflows.length === 1 ? p.used_in_workflows[0] : `${p.used_in_workflows.length} workflows`;
    }
    function E(p) {
      window.open(p, "_blank");
    }
    async function k(p) {
      if (confirm(`Install node "${p}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const S = await n(p);
          S.status === "success" ? (alert(`Node "${p}" installed successfully!`), await L()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function $(p) {
      if (confirm(`Check for updates for "${p}"?`))
        try {
          v.value = !0;
          const S = await r(p);
          S.status === "success" ? (alert(`Node "${p}" is up to date or has been updated!`), await L()) : alert(`Update check failed: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error checking for updates: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function P(p) {
      if (confirm(`Uninstall node "${p}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const S = await g(p);
          S.status === "success" ? (alert(`Node "${p}" uninstalled successfully!`), await L()) : alert(`Failed to uninstall node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error uninstalling node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function L() {
      v.value = !0, m.value = null;
      try {
        y.value = await d();
      } catch (p) {
        m.value = p instanceof Error ? p.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return ye(L), (p, S) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (I) => u.value = !0)
          })
        ]),
        search: a(() => [
          f(st, {
            modelValue: i.value,
            "onUpdate:modelValue": S[1] || (S[1] = (I) => i.value = I),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), x(je, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : m.value ? (o(), x(He, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            y.value.total_count ? (o(), x(nt, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            h.value.length ? (o(), x(we, {
              key: 1,
              title: "INSTALLED",
              count: h.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(h.value, (I) => (o(), x($e, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: a(() => [...S[4] || (S[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(I.name), 1)
                  ]),
                  subtitle: a(() => [
                    I.version ? (o(), s("span", tu, "v" + l(I.version), 1)) : (o(), s("span", ou, "version unknown")),
                    I.source ? (o(), s("span", su, " • " + l(M(I.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    I.description ? (o(), x(fe, {
                      key: 0,
                      label: "Description:",
                      value: I.description
                    }, null, 8, ["value"])) : c("", !0),
                    I.repository ? (o(), x(fe, {
                      key: 1,
                      label: "Repository:",
                      value: I.repository
                    }, null, 8, ["value"])) : c("", !0),
                    f(fe, {
                      label: "Used by:",
                      value: _(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    I.repository ? (o(), x(X, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => E(I.repository)
                    }, {
                      default: a(() => [...S[5] || (S[5] = [
                        w(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    I.source === "registry" ? (o(), x(X, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => $(I.name)
                    }, {
                      default: a(() => [...S[6] || (S[6] = [
                        w(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    I.source !== "unknown" ? (o(), x(X, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (q) => P(I.name)
                    }, {
                      default: a(() => [...S[7] || (S[7] = [
                        w(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            z.value.length ? (o(), x(we, {
              key: 2,
              title: "MISSING",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(z.value, (I) => (o(), x($e, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: a(() => [...S[8] || (S[8] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(I.name), 1)
                  ]),
                  subtitle: a(() => [...S[9] || (S[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    I.description ? (o(), x(fe, {
                      key: 0,
                      label: "Description:",
                      value: I.description
                    }, null, 8, ["value"])) : c("", !0),
                    I.repository ? (o(), x(fe, {
                      key: 1,
                      label: "Repository:",
                      value: I.repository
                    }, null, 8, ["value"])) : c("", !0),
                    f(fe, {
                      label: "Required by:",
                      value: _(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    I.download_url ? (o(), x(X, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => k(I.name)
                    }, {
                      default: a(() => [...S[10] || (S[10] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    I.repository ? (o(), x(X, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => E(I.repository)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        w(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !h.value.length && !z.value.length ? (o(), x(Ne, {
              key: 3,
              icon: "📭",
              message: i.value ? `No nodes match '${i.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(Ge, {
        show: u.value,
        title: "About Git-Tracked Nodes",
        onClose: S[3] || (S[3] = (I) => u.value = !1)
      }, {
        content: a(() => [...S[12] || (S[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            w(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            w(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          f(X, {
            variant: "primary",
            onClick: S[2] || (S[2] = (I) => u.value = !1)
          }, {
            default: a(() => [...S[13] || (S[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), au = /* @__PURE__ */ Y(nu, [["__scopeId", "data-v-c480e2c1"]]), lu = { class: "remote-url-display" }, iu = ["title"], ru = ["title"], du = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, cu = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, uu = /* @__PURE__ */ J({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, n = C(!1), r = O(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), v = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${v}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(d.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, v) => (o(), s("div", lu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, iu),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", cu, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", du, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ru)
    ]));
  }
}), Ot = /* @__PURE__ */ Y(uu, [["__scopeId", "data-v-7768a58d"]]), mu = { class: "remote-title" }, vu = {
  key: 0,
  class: "default-badge"
}, fu = {
  key: 1,
  class: "sync-badge"
}, gu = {
  key: 0,
  class: "ahead"
}, hu = {
  key: 1,
  class: "behind"
}, pu = {
  key: 0,
  class: "tracking-info"
}, yu = /* @__PURE__ */ J({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const n = t, r = O(() => n.fetchingRemote === n.remote.name), g = O(() => n.remote.is_default), y = O(() => !!n.trackingBranch);
    function v(m) {
      const i = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), h = Math.floor(b / 6e4);
      if (h < 1) return "Just now";
      if (h < 60) return `${h}m ago`;
      const z = Math.floor(h / 60);
      if (z < 24) return `${z}h ago`;
      const M = Math.floor(z / 24);
      return M < 7 ? `${M}d ago` : i.toLocaleDateString();
    }
    return (m, i) => (o(), x($e, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", mu, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), s("span", vu, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", fu, [
            t.syncStatus.ahead > 0 ? (o(), s("span", gu, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", hu, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), s("span", pu, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          f(fe, { label: "Fetch:" }, {
            default: a(() => [
              f(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(fe, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              f(Ot, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), x(fe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        f(X, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...i[3] || (i[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(X, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...i[4] || (i[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), x(X, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...i[5] || (i[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), wu = /* @__PURE__ */ Y(yu, [["__scopeId", "data-v-17362e45"]]), bu = ["for"], ku = {
  key: 0,
  class: "base-form-field-required"
}, _u = { class: "base-form-field-input" }, $u = {
  key: 1,
  class: "base-form-field-error"
}, Cu = {
  key: 2,
  class: "base-form-field-hint"
}, xu = /* @__PURE__ */ J({
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
    const d = t, n = O(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, g) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        w(l(t.label) + " ", 1),
        t.required ? (o(), s("span", ku, "*")) : c("", !0)
      ], 8, bu)) : c("", !0),
      e("div", _u, [
        re(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", $u, l(t.error), 1)) : t.hint ? (o(), s("span", Cu, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Y(xu, [["__scopeId", "data-v-9a1cf296"]]), Su = { class: "remote-form" }, Iu = { class: "form-header" }, Eu = { class: "form-body" }, Mu = {
  key: 0,
  class: "form-error"
}, zu = { class: "form-actions" }, Lu = /* @__PURE__ */ J({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const n = t, r = d, g = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = C(!1), v = C(null);
    Et(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = O(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!m.value || y.value)) {
        v.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (u) {
          v.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, b) => (o(), s("div", Su, [
      e("div", Iu, [
        f(Ee, null, {
          default: a(() => [
            w(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Eu, [
        f($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            f(Re, {
              modelValue: g.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (h) => g.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            f(Re, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (h) => g.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            f(Re, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (h) => g.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), s("div", Mu, l(v.value), 1)) : c("", !0)
      ]),
      e("div", zu, [
        f(X, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: i
        }, {
          default: a(() => [
            w(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(X, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (h) => u.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Tu = /* @__PURE__ */ Y(Lu, [["__scopeId", "data-v-56021b18"]]), Du = { key: 0 }, Ru = /* @__PURE__ */ J({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: v
    } = _e(), m = C([]), i = C(null), u = C({}), b = C(!1), h = C(null), z = C(""), M = C(!1), _ = C(null), E = C(!1), k = C("add"), $ = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = O(() => {
      if (!z.value.trim()) return m.value;
      const U = z.value.toLowerCase();
      return m.value.filter(
        (te) => te.name.toLowerCase().includes(U) || te.fetch_url.toLowerCase().includes(U) || te.push_url.toLowerCase().includes(U)
      );
    });
    function L(U) {
      var te;
      return ((te = i.value) == null ? void 0 : te.remote) === U;
    }
    async function p() {
      b.value = !0, h.value = null;
      try {
        const U = await d();
        m.value = U.remotes, i.value = U.current_branch_tracking || null, await Promise.all(
          U.remotes.map(async (te) => {
            const V = await v(te.name);
            V && (u.value[te.name] = V);
          })
        );
      } catch (U) {
        h.value = U instanceof Error ? U.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function S() {
      k.value = "add", $.value = { name: "", fetchUrl: "", pushUrl: "" }, E.value = !0;
    }
    function I(U) {
      const te = m.value.find((V) => V.name === U);
      te && (k.value = "edit", $.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, E.value = !0);
    }
    async function q(U) {
      try {
        k.value === "add" ? await n(U.name, U.fetchUrl) : await g(U.name, U.fetchUrl, U.pushUrl || void 0), E.value = !1, await p();
      } catch (te) {
        h.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function G() {
      E.value = !1, $.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function F(U) {
      _.value = U;
      try {
        await y(U);
        const te = await v(U);
        te && (u.value[U] = te);
      } catch (te) {
        h.value = te instanceof Error ? te.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function B(U) {
      if (confirm(`Remove remote "${U}"?`))
        try {
          await r(U), await p();
        } catch (te) {
          h.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function A() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ye(p), (U, te) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (V) => M.value = !0)
          }, {
            actions: a(() => [
              E.value ? c("", !0) : (o(), x(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: a(() => [...te[3] || (te[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          E.value ? c("", !0) : (o(), x(st, {
            key: 0,
            modelValue: z.value,
            "onUpdate:modelValue": te[1] || (te[1] = (V) => z.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), x(je, {
            key: 0,
            message: "Loading remotes..."
          })) : h.value ? (o(), x(He, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            E.value ? (o(), x(Tu, {
              key: 0,
              mode: k.value,
              "remote-name": $.value.name,
              "fetch-url": $.value.fetchUrl,
              "push-url": $.value.pushUrl,
              onSubmit: q,
              onCancel: G
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !E.value ? (o(), x(nt, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), s("span", Du, " • Tracking: " + l(i.value.remote) + "/" + l(i.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            P.value.length && !E.value ? (o(), x(we, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, ae(P.value, (V) => {
                  var W;
                  return o(), x(wu, {
                    key: V.name,
                    remote: V,
                    "sync-status": u.value[V.name],
                    "tracking-branch": L(V.name) ? (W = i.value) == null ? void 0 : W.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: F,
                    onEdit: I,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !P.value.length && !E.value ? (o(), x(Ne, {
              key: 3,
              icon: "🌐",
              message: z.value ? `No remotes match '${z.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                f(X, {
                  variant: "primary",
                  onClick: S
                }, {
                  default: a(() => [...te[4] || (te[4] = [
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
      f(Ge, {
        show: M.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = (V) => M.value = !1)
      }, {
        content: a(() => [...te[5] || (te[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          f(X, {
            variant: "link",
            onClick: A
          }, {
            default: a(() => [...te[6] || (te[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Nu = /* @__PURE__ */ Y(Ru, [["__scopeId", "data-v-a75719bb"]]), Ou = { class: "setting-info" }, Uu = { class: "setting-label" }, Bu = {
  key: 0,
  class: "required-marker"
}, Pu = {
  key: 0,
  class: "setting-description"
}, Vu = { class: "setting-control" }, Fu = /* @__PURE__ */ J({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Ou, [
        e("div", Uu, [
          w(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Bu, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", Pu, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Vu, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ae = /* @__PURE__ */ Y(Fu, [["__scopeId", "data-v-cb5d236c"]]), Au = { class: "toggle" }, Wu = ["checked", "disabled"], Gu = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (o(), s("label", Au, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Wu),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qe = /* @__PURE__ */ Y(Gu, [["__scopeId", "data-v-71c0f550"]]), ju = { class: "settings-section" }, Hu = { class: "path-setting" }, qu = { class: "path-value" }, Ku = { class: "path-setting" }, Ju = { class: "path-value" }, Yu = { class: "settings-section" }, Qu = { class: "settings-section" }, Xu = { class: "settings-section" }, Zu = /* @__PURE__ */ J({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: n } = _e(), r = C(!1), g = C(null), y = C(null), v = C(null), m = C(null), i = C(""), u = C(""), b = C(!0), h = C(!0), z = C(!1), M = O(() => m.value ? i.value !== (m.value.civitai_api_key || "") : !1);
    async function _() {
      r.value = !0, g.value = null;
      try {
        v.value = await d(), m.value = { ...v.value }, i.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", b.value = v.value.auto_sync_models, h.value = v.value.confirm_destructive;
        const P = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        z.value = P === "true";
      } catch (P) {
        g.value = P instanceof Error ? P.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function E() {
      var P;
      y.value = null;
      try {
        const L = {};
        i.value !== (((P = m.value) == null ? void 0 : P.civitai_api_key) || "") && (L.civitai_api_key = i.value || null), await n(L), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (L) {
        y.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (i.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive, y.value = null);
    }
    function $(P) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(P)), console.log("[ComfyGit] Auto-refresh setting saved:", P);
    }
    return ye(_), (P, L) => (o(), x(Ce, null, {
      header: a(() => [
        f(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            f(X, {
              variant: "primary",
              size: "sm",
              disabled: !M.value,
              onClick: E
            }, {
              default: a(() => [...L[5] || (L[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            M.value ? (o(), x(X, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...L[6] || (L[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), x(je, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), x(He, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
          f(we, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var p, S;
              return [
                e("div", ju, [
                  e("div", Hu, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", qu, l(((p = v.value) == null ? void 0 : p.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Ku, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ju, l(((S = v.value) == null ? void 0 : S.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(we, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Yu, [
                f(Ae, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    f(ft, {
                      modelValue: i.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (p) => i.value = p),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ae, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(ft, {
                      modelValue: u.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (p) => u.value = p),
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
          f(we, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Qu, [
                f(Ae, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    f(Qe, {
                      modelValue: z.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (p) => z.value = p),
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
          f(we, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Xu, [
                f(Ae, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Qe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (p) => b.value = p),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ae, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Qe, {
                      modelValue: h.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (p) => h.value = p),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), x(nt, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: qe({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), em = /* @__PURE__ */ Y(Zu, [["__scopeId", "data-v-7861bd35"]]), tm = /* @__PURE__ */ J({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = _e(), n = C([]), r = C(!1), g = C(null), y = C(!1), v = C(null), m = O(() => n.value.length === 0 ? [] : n.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function i() {
      r.value = !0, g.value = null;
      try {
        n.value = await d(void 0, 500);
      } catch (u) {
        g.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var u;
          (u = v.value) != null && u.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ye(i), (u, b) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (h) => y.value = !0)
          }, {
            actions: a(() => [
              f(X, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: a(() => [
                  w(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          r.value ? (o(), x(je, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), x(He, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            n.value.length === 0 ? (o(), x(Ne, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), s(H, null, ae(m.value, (h, z) => (o(), s("div", {
                key: z,
                class: ne(`log-line log-level-${h.level.toLowerCase()}`)
              }, l(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(Ge, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (h) => y.value = !1)
      }, {
        content: a(() => [...b[3] || (b[3] = [
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
        actions: a(() => [
          f(X, {
            variant: "primary",
            onClick: b[1] || (b[1] = (h) => y.value = !1)
          }, {
            default: a(() => [...b[4] || (b[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), om = /* @__PURE__ */ Y(tm, [["__scopeId", "data-v-39f6a756"]]), sm = /* @__PURE__ */ J({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: n } = _e(), r = C([]), g = C(!1), y = C(null), v = C(!1), m = C("production"), i = C(null), u = O(() => r.value.length === 0 ? [] : r.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function b() {
      g.value = !0, y.value = null;
      try {
        r.value = await d(void 0, 500);
        try {
          const h = await n();
          m.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        y.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var h;
          (h = i.value) != null && h.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ye(b), (h, z) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (M) => v.value = !0)
          }, {
            actions: a(() => [
              f(X, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: g.value
              }, {
                default: a(() => [
                  w(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), x(je, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), x(He, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Ne, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), s(H, null, ae(u.value, (M, _) => (o(), s("div", {
                key: _,
                class: ne(`log-line log-level-${M.level.toLowerCase()}`)
              }, l(M.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(Ge, {
        show: v.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (M) => v.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            z[3] || (z[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            z[4] || (z[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          f(X, {
            variant: "primary",
            onClick: z[1] || (z[1] = (M) => v.value = !1)
          }, {
            default: a(() => [...z[7] || (z[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nm = /* @__PURE__ */ Y(sm, [["__scopeId", "data-v-4f1e6f72"]]), am = { class: "env-title" }, lm = {
  key: 0,
  class: "current-badge"
}, im = {
  key: 0,
  class: "branch-info"
}, rm = /* @__PURE__ */ J({
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
    return (d, n) => (o(), x($e, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", am, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", lm, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), s("span", im, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        f(fe, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(fe, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(fe, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), x(fe, {
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
}), dm = /* @__PURE__ */ Y(rm, [["__scopeId", "data-v-5238e57c"]]), cm = {
  key: 0,
  class: "create-form"
}, um = { class: "create-form__header" }, mm = { class: "create-form__body" }, vm = { class: "create-form__actions" }, fm = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, gm = /* @__PURE__ */ J({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const n = d, { getEnvironments: r } = _e(), g = C([]), y = C(!1), v = C(null), m = C(""), i = C(!1), u = C(!1), b = C(""), h = O(
      () => g.value.find((L) => L.is_current)
    ), z = O(() => {
      if (!m.value.trim()) return g.value;
      const L = m.value.toLowerCase();
      return g.value.filter(
        (p) => {
          var S;
          return p.name.toLowerCase().includes(L) || ((S = p.current_branch) == null ? void 0 : S.toLowerCase().includes(L));
        }
      );
    });
    function M(L) {
      if (!L) return "";
      try {
        const p = new Date(L), I = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), q = Math.floor(I / 6e4), G = Math.floor(I / 36e5), F = Math.floor(I / 864e5);
        return q < 1 ? "just now" : q < 60 ? `${q} ${q === 1 ? "minute" : "minutes"} ago` : G < 24 ? `${G} ${G === 1 ? "hour" : "hours"} ago` : F < 30 ? `${F} ${F === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return L;
      }
    }
    function _() {
      const L = b.value.trim();
      L && (n("create", L), b.value = "", u.value = !1);
    }
    function E() {
      b.value = "", u.value = !1;
    }
    function k(L) {
      n("viewDetails", L);
    }
    function $(L) {
      confirm(`Delete environment "${L}"?

This action cannot be undone.`) && n("delete", L);
    }
    async function P() {
      y.value = !0, v.value = null;
      try {
        g.value = await r();
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return ye(P), (L, p) => {
      const S = co("SectionGroup");
      return o(), s(H, null, [
        f(Ce, null, {
          header: a(() => [
            f(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: p[1] || (p[1] = (I) => i.value = !0)
            }, {
              actions: a(() => [
                f(X, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[0] || (p[0] = (I) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...p[7] || (p[7] = [
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
                f(X, {
                  variant: "ghost",
                  size: "sm",
                  onClick: P,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...p[8] || (p[8] = [
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
            f(st, {
              modelValue: m.value,
              "onUpdate:modelValue": p[2] || (p[2] = (I) => m.value = I),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), x(je, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), x(He, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: P
            }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
              u.value ? (o(), s("div", cm, [
                e("div", um, [
                  p[10] || (p[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(X, {
                    variant: "ghost",
                    size: "xs",
                    onClick: E
                  }, {
                    default: a(() => [...p[9] || (p[9] = [
                      w(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", mm, [
                  f(ft, {
                    modelValue: b.value,
                    "onUpdate:modelValue": p[3] || (p[3] = (I) => b.value = I),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      We(_, ["enter"]),
                      We(E, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", vm, [
                    f(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...p[11] || (p[11] = [
                        w(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: E
                    }, {
                      default: a(() => [...p[12] || (p[12] = [
                        w(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), x(nt, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  w(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  h.value ? (o(), s(H, { key: 0 }, [
                    p[13] || (p[13] = w(" • Current: ", -1)),
                    e("strong", null, l(h.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              z.value.length ? (o(), x(S, {
                key: 2,
                title: "ENVIRONMENTS",
                count: z.value.length
              }, {
                default: a(() => [
                  (o(!0), s(H, null, ae(z.value, (I) => (o(), x(dm, {
                    key: I.name,
                    "environment-name": I.name,
                    "is-current": I.is_current,
                    "current-branch": I.current_branch,
                    "workflow-count": I.workflow_count,
                    "node-count": I.node_count,
                    "model-count": I.model_count,
                    "last-used": M(I.last_used),
                    "show-last-used": !!I.last_used
                  }, {
                    actions: a(() => [
                      I.is_current ? c("", !0) : (o(), x(X, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (q) => L.$emit("switch", I.name)
                      }, {
                        default: a(() => [...p[14] || (p[14] = [
                          w(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(X, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (q) => k(I.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...p[15] || (p[15] = [
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
                      !I.is_current && g.value.length > 1 ? (o(), x(X, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (q) => $(I.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), s("svg", fm, [...p[16] || (p[16] = [
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
              z.value.length ? c("", !0) : (o(), x(Ne, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Ft({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    f(X, {
                      variant: "primary",
                      onClick: p[4] || (p[4] = (I) => u.value = !0)
                    }, {
                      default: a(() => [...p[17] || (p[17] = [
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
        f(Ge, {
          show: i.value,
          title: "About Environments",
          onClose: p[6] || (p[6] = (I) => i.value = !1)
        }, {
          content: a(() => [...p[18] || (p[18] = [
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
          actions: a(() => [
            f(X, {
              variant: "secondary",
              onClick: p[5] || (p[5] = (I) => i.value = !1)
            }, {
              default: a(() => [...p[19] || (p[19] = [
                w(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), hm = /* @__PURE__ */ Y(gm, [["__scopeId", "data-v-97d6527d"]]), pm = { class: "file-path" }, ym = { class: "file-path-text" }, wm = ["title"], bm = /* @__PURE__ */ J({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, n = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), s("div", pm, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", ym, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, wm)) : c("", !0)
    ]));
  }
}), km = /* @__PURE__ */ Y(bm, [["__scopeId", "data-v-f0982173"]]), _m = { class: "output-path-input" }, $m = { class: "export-actions" }, Cm = {
  key: 1,
  class: "export-warning"
}, xm = /* @__PURE__ */ J({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = _e(), n = C(""), r = C(!1), g = C(null), y = C(!1);
    async function v() {
      r.value = !0, g.value = null;
      try {
        const i = await d(n.value || void 0);
        g.value = i;
      } catch (i) {
        g.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function m() {
      var i;
      if ((i = g.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (u) {
          console.error("Failed to copy path:", u);
        }
    }
    return (i, u) => (o(), s(H, null, [
      f(Ce, null, {
        header: a(() => [
          f(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              f(X, {
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
          f(we, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              f($e, { status: "synced" }, {
                icon: a(() => [...u[6] || (u[6] = [
                  w("📦", -1)
                ])]),
                title: a(() => [...u[7] || (u[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...u[8] || (u[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  f(fe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(fe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(fe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(fe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(we, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              f($e, { status: "synced" }, {
                icon: a(() => [...u[9] || (u[9] = [
                  w("📁", -1)
                ])]),
                title: a(() => [...u[10] || (u[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: a(() => [...u[11] || (u[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", _m, [
                    f(ft, {
                      modelValue: n.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (b) => n.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(we, { title: "EXPORT" }, {
            default: a(() => [
              e("div", $m, [
                f(X, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: v
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
                    w(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), x(X, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: u[2] || (u[2] = (b) => n.value = "")
                }, {
                  default: a(() => [...u[13] || (u[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), x(we, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              f($e, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Ft({
                icon: a(() => [
                  w(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  w(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  w(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    f(fe, { label: "Saved to:" }, {
                      default: a(() => [
                        f(km, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), x(fe, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", Cm, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    f(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(X, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => g.value = null)
                    }, {
                      default: a(() => [...u[16] || (u[16] = [
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
      f(Ge, {
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
            w(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sm = /* @__PURE__ */ Y(xm, [["__scopeId", "data-v-1777a9d5"]]), Im = { class: "file-input-wrapper" }, Em = ["accept", "multiple", "disabled"], Mm = /* @__PURE__ */ J({
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
  setup(t, { expose: d, emit: n }) {
    const r = n, g = C(null);
    function y() {
      var m;
      (m = g.value) == null || m.click();
    }
    function v(m) {
      const i = m.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return d({
      triggerInput: y
    }), (m, i) => (o(), s("div", Im, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, Em),
      f(X, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          re(m.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), zm = /* @__PURE__ */ Y(Mm, [["__scopeId", "data-v-cd192091"]]), Lm = {
  key: 0,
  class: "drop-zone-empty"
}, Tm = { class: "drop-zone-text" }, Dm = { class: "drop-zone-primary" }, Rm = { class: "drop-zone-secondary" }, Nm = { class: "drop-zone-actions" }, Om = {
  key: 1,
  class: "drop-zone-file"
}, Um = { class: "file-info" }, Bm = { class: "file-details" }, Pm = { class: "file-name" }, Vm = { class: "file-size" }, Fm = /* @__PURE__ */ J({
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
    const n = d, r = C(!1), g = C(null), y = C(0), v = O(() => g.value !== null), m = O(() => {
      var k;
      return ((k = g.value) == null ? void 0 : k.name) || "";
    }), i = O(() => {
      if (!g.value) return "";
      const k = g.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var $;
      y.value++, ($ = k.dataTransfer) != null && $.types.includes("Files") && (r.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function h() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function z(k) {
      var P;
      y.value = 0, r.value = !1;
      const $ = (P = k.dataTransfer) == null ? void 0 : P.files;
      $ && $.length > 0 && _($[0]);
    }
    function M(k) {
      k.length > 0 && _(k[0]);
    }
    function _(k) {
      g.value = k, n("fileSelected", k);
    }
    function E() {
      g.value = null, n("clear");
    }
    return (k, $) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": v.value }]),
      onDragenter: pe(u, ["prevent"]),
      onDragover: pe(b, ["prevent"]),
      onDragleave: pe(h, ["prevent"]),
      onDrop: pe(z, ["prevent"])
    }, [
      v.value ? (o(), s("div", Om, [
        e("div", Um, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Bm, [
            e("div", Pm, l(m.value), 1),
            e("div", Vm, l(i.value), 1)
          ])
        ]),
        f(X, {
          variant: "ghost",
          size: "xs",
          onClick: E,
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
      ])) : (o(), s("div", Lm, [
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
        e("div", Tm, [
          e("p", Dm, l(t.primaryText), 1),
          e("p", Rm, l(t.secondaryText), 1)
        ]),
        e("div", Nm, [
          f(zm, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: M
          }, {
            default: a(() => [
              w(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Am = /* @__PURE__ */ Y(Fm, [["__scopeId", "data-v-e00abbca"]]), Wm = { class: "import-preview" }, Gm = { class: "preview-header" }, jm = {
  key: 0,
  class: "source-env"
}, Hm = { class: "preview-content" }, qm = { class: "preview-section" }, Km = { class: "section-header" }, Jm = { class: "section-info" }, Ym = { class: "section-count" }, Qm = {
  key: 0,
  class: "item-list"
}, Xm = { class: "item-name" }, Zm = {
  key: 0,
  class: "item-more"
}, ev = { class: "preview-section" }, tv = { class: "section-header" }, ov = { class: "section-info" }, sv = { class: "section-count" }, nv = {
  key: 0,
  class: "item-list"
}, av = { class: "item-details" }, lv = { class: "item-name" }, iv = { class: "item-meta" }, rv = {
  key: 0,
  class: "item-more"
}, dv = { class: "preview-section" }, cv = { class: "section-header" }, uv = { class: "section-info" }, mv = { class: "section-count" }, vv = {
  key: 0,
  class: "item-list"
}, fv = { class: "item-name" }, gv = {
  key: 0,
  class: "item-more"
}, hv = {
  key: 0,
  class: "preview-section"
}, pv = { class: "git-info" }, yv = /* @__PURE__ */ J({
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
    const d = t, n = O(() => d.workflows.length), r = O(() => d.models.length), g = O(() => d.nodes.length);
    function y(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, m) => (o(), s("div", Wm, [
      e("div", Gm, [
        f(Ee, null, {
          default: a(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", jm, [
          m[1] || (m[1] = w(" From: ", -1)),
          f(St, null, {
            default: a(() => [
              w(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Hm, [
        e("div", qm, [
          e("div", Km, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Jm, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Ym, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Qm, [
            (o(!0), s(H, null, ae(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Xm, l(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Zm, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", ev, [
          e("div", tv, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", ov, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", sv, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", nv, [
            (o(!0), s(H, null, ae(t.models.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", av, [
                e("span", lv, l(i.filename), 1),
                e("span", iv, l(y(i.size)) + " • " + l(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", rv, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", dv, [
          e("div", cv, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", uv, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", mv, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", vv, [
            (o(!0), s(H, null, ae(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", fv, l(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", gv, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", hv, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", pv, [
            t.gitBranch ? (o(), x(fe, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                f(St, null, {
                  default: a(() => [
                    w(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), x(fe, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                f(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), wv = /* @__PURE__ */ Y(yv, [["__scopeId", "data-v-182fe113"]]), bv = { class: "import-options" }, kv = { class: "options-container" }, _v = { class: "option-section" }, $v = { class: "conflict-options" }, Cv = ["value", "checked", "onChange"], xv = { class: "conflict-content" }, Sv = { class: "conflict-label" }, Iv = { class: "conflict-description" }, Ev = { class: "option-section" }, Mv = { class: "component-toggles" }, zv = /* @__PURE__ */ J({
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
    const n = d, r = [
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
    return (g, y) => (o(), s("div", bv, [
      f(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", kv, [
        e("div", _v, [
          f(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", $v, [
            (o(), s(H, null, ae(r, (v) => e("label", {
              key: v.value,
              class: ne(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (m) => n("update:conflictMode", v.value)
              }, null, 40, Cv),
              e("div", xv, [
                e("span", Sv, l(v.label), 1),
                e("span", Iv, l(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ev, [
          f(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Mv, [
            f(Ae, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (v) => n("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ae, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (v) => n("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ae, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (v) => n("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ae, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                f(Qe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (v) => n("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Lv = /* @__PURE__ */ Y(zv, [["__scopeId", "data-v-0ec212b0"]]), Tv = {
  key: 0,
  class: "import-empty"
}, Dv = { class: "import-help" }, Rv = {
  key: 1,
  class: "import-configure"
}, Nv = { class: "selected-file-bar" }, Ov = { class: "file-bar-content" }, Uv = { class: "file-bar-info" }, Bv = { class: "file-bar-name" }, Pv = { class: "file-bar-size" }, Vv = { class: "import-actions" }, Fv = {
  key: 2,
  class: "import-progress"
}, Av = { class: "progress-content" }, Wv = { class: "progress-info" }, Gv = { class: "progress-title" }, jv = { class: "progress-detail" }, Hv = { class: "progress-bar" }, qv = { class: "progress-status" }, Kv = {
  key: 3,
  class: "import-complete"
}, Jv = { class: "complete-message" }, Yv = { class: "complete-title" }, Qv = { class: "complete-details" }, Xv = { class: "complete-actions" }, Zv = /* @__PURE__ */ J({
  __name: "ImportSection",
  setup(t) {
    const d = C(null), n = C(!1), r = C(!1), g = C(!1), y = C(""), v = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = C({
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
    }), u = O(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function b(E) {
      d.value = E;
    }
    function h() {
      d.value = null, r.value = !1, g.value = !1, y.value = "";
    }
    function z() {
      h(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function M() {
      if (d.value) {
        n.value = !0, r.value = !1;
        try {
          const E = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of E)
            m.value = k, await new Promise(($) => setTimeout($, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), g.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (E) {
          g.value = !1, y.value = E instanceof Error ? E.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function _(E) {
      return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB` : E < 1024 * 1024 * 1024 ? `${(E / (1024 * 1024)).toFixed(1)} MB` : `${(E / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (E, k) => (o(), x(Ce, null, {
      header: a(() => [
        f(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !n.value ? (o(), s("div", Tv, [
          f(Am, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Dv, [
            f(Ee, null, {
              default: a(() => [...k[5] || (k[5] = [
                w("How to Import", -1)
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
        ])) : d.value && !n.value && !r.value ? (o(), s("div", Rv, [
          e("div", Nv, [
            e("div", Ov, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Uv, [
                e("div", Bv, l(d.value.name), 1),
                e("div", Pv, l(_(d.value.size)), 1)
              ])
            ]),
            f(X, {
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: a(() => [...k[8] || (k[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(wv, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Lv, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = ($) => v.value.conflictMode = $),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = ($) => v.value.includeWorkflows = $),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = ($) => v.value.includeModels = $),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = ($) => v.value.includeNodes = $),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = ($) => v.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && i.value.models.length > 0 ? (o(), x(Ye, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Vv, [
            f(X, {
              variant: "primary",
              size: "md",
              disabled: !u.value,
              onClick: M
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
                w(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(X, {
              variant: "secondary",
              size: "md",
              onClick: h
            }, {
              default: a(() => [...k[10] || (k[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Fv, [
          e("div", Av, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Wv, [
              e("div", Gv, l(m.value.message), 1),
              e("div", jv, l(m.value.detail), 1)
            ])
          ]),
          e("div", Hv, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", qv, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Kv, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", Jv, [
            e("div", Yv, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Qv, l(y.value), 1)
          ]),
          e("div", Xv, [
            f(X, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: a(() => [...k[12] || (k[12] = [
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
}), ef = /* @__PURE__ */ Y(Zv, [["__scopeId", "data-v-18e18eb5"]]), tf = { class: "header-info" }, of = { class: "commit-hash" }, sf = {
  key: 0,
  class: "commit-refs"
}, nf = { class: "commit-message" }, af = { class: "commit-date" }, lf = {
  key: 0,
  class: "loading"
}, rf = {
  key: 1,
  class: "changes-section"
}, df = { class: "stats-row" }, cf = { class: "stat" }, uf = { class: "stat insertions" }, mf = { class: "stat deletions" }, vf = {
  key: 0,
  class: "change-group"
}, ff = {
  key: 1,
  class: "change-group"
}, gf = {
  key: 0,
  class: "version"
}, hf = {
  key: 2,
  class: "change-group"
}, pf = { class: "change-item" }, yf = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: n } = _e(), r = C(null), g = C(!0), y = O(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), v = O(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return ye(async () => {
      try {
        r.value = await n(d.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, i) => (o(), x(gt, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (u) => m.$emit("close"))
    }, {
      header: a(() => {
        var u, b, h, z;
        return [
          e("div", tf, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", of, l(((u = r.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (z = (h = r.value) == null ? void 0 : h.refs) != null && z.length ? (o(), s("span", sf, [
              (o(!0), s(H, null, ae(r.value.refs, (M) => (o(), s("span", {
                key: M,
                class: "ref-badge"
              }, l(M), 1))), 128))
            ])) : c("", !0)
          ]),
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (M) => m.$emit("close"))
          }, {
            default: a(() => [...i[5] || (i[5] = [
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
          e("div", nf, l(((u = r.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", af, l(((b = r.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", lf, "Loading details...")) : r.value ? (o(), s("div", rf, [
            e("div", df, [
              e("span", cf, l(r.value.stats.files_changed) + " files", 1),
              e("span", uf, "+" + l(r.value.stats.insertions), 1),
              e("span", mf, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", vf, [
              f(ut, { variant: "section" }, {
                default: a(() => [...i[6] || (i[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, ae(r.value.changes.workflows.added, (h) => (o(), s("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(h), 1)
              ]))), 128)),
              (o(!0), s(H, null, ae(r.value.changes.workflows.modified, (h) => (o(), s("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(h), 1)
              ]))), 128)),
              (o(!0), s(H, null, ae(r.value.changes.workflows.deleted, (h) => (o(), s("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(h), 1)
              ]))), 128))
            ])) : c("", !0),
            v.value ? (o(), s("div", ff, [
              f(ut, { variant: "section" }, {
                default: a(() => [...i[10] || (i[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, ae(r.value.changes.nodes.added, (h) => (o(), s("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(h.name), 1),
                h.version ? (o(), s("span", gf, "(" + l(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(H, null, ae(r.value.changes.nodes.removed, (h) => (o(), s("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", hf, [
              f(ut, { variant: "section" }, {
                default: a(() => [...i[13] || (i[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", pf, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        f(le, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...i[15] || (i[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: "primary",
          onClick: i[2] || (i[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: a(() => [...i[16] || (i[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), wf = /* @__PURE__ */ Y(yf, [["__scopeId", "data-v-d256ff6d"]]), bf = { class: "dialog-message" }, kf = {
  key: 0,
  class: "dialog-details"
}, _f = {
  key: 1,
  class: "dialog-warning"
}, $f = /* @__PURE__ */ J({
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
    return (d, n) => (o(), x(gt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", bf, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", kf, [
          (o(!0), s(H, null, ae(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", _f, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        f(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => d.$emit("cancel"))
        }, {
          default: a(() => [
            w(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => d.$emit("secondary"))
        }, {
          default: a(() => [
            w(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        f(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
        }, {
          default: a(() => [
            w(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Cf = /* @__PURE__ */ Y($f, [["__scopeId", "data-v-3670b9f5"]]), xf = { class: "base-textarea-wrapper" }, Sf = ["value", "rows", "placeholder", "disabled", "maxlength"], If = {
  key: 0,
  class: "base-textarea-count"
}, Ef = /* @__PURE__ */ J({
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
    return (d, n) => (o(), s("div", xf, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = We(pe((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = We(pe((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Sf),
      t.showCharCount && t.maxLength ? (o(), s("div", If, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ Y(Ef, [["__scopeId", "data-v-5516e6fc"]]), Mf = ["checked", "disabled"], zf = { class: "base-checkbox-box" }, Lf = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Tf = {
  key: 0,
  class: "base-checkbox-label"
}, Df = /* @__PURE__ */ J({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked))
      }, null, 40, Mf),
      e("span", zf, [
        t.modelValue ? (o(), s("svg", Lf, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), s("span", Tf, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ Y(Df, [["__scopeId", "data-v-bf17c831"]]), Rf = { class: "popover-header" }, Nf = { class: "popover-body" }, Of = {
  key: 0,
  class: "changes-summary"
}, Uf = {
  key: 0,
  class: "change-item"
}, Bf = {
  key: 1,
  class: "change-item"
}, Pf = {
  key: 2,
  class: "change-item"
}, Vf = {
  key: 3,
  class: "change-item"
}, Ff = {
  key: 4,
  class: "change-item"
}, Af = {
  key: 1,
  class: "no-changes"
}, Wf = {
  key: 2,
  class: "loading"
}, Gf = {
  key: 3,
  class: "issues-warning"
}, jf = { class: "warning-header" }, Hf = { class: "warning-title" }, qf = { class: "issues-list" }, Kf = { class: "message-section" }, Jf = { class: "popover-footer" }, Yf = {
  key: 1,
  class: "commit-popover"
}, Qf = { class: "popover-header" }, Xf = { class: "popover-body" }, Zf = {
  key: 0,
  class: "changes-summary"
}, eg = {
  key: 0,
  class: "change-item"
}, tg = {
  key: 1,
  class: "change-item"
}, og = {
  key: 2,
  class: "change-item"
}, sg = {
  key: 3,
  class: "change-item"
}, ng = {
  key: 4,
  class: "change-item"
}, ag = {
  key: 1,
  class: "no-changes"
}, lg = {
  key: 2,
  class: "loading"
}, ig = {
  key: 3,
  class: "issues-warning"
}, rg = { class: "warning-header" }, dg = { class: "warning-title" }, cg = { class: "issues-list" }, ug = { class: "message-section" }, mg = { class: "popover-footer" }, vg = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const n = t, r = d, { commit: g } = _e(), y = C(""), v = C(!1), m = C(!1), i = C(null), u = O(() => {
      if (!n.status) return !1;
      const _ = n.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || n.status.has_changes;
    }), b = O(() => {
      var _;
      return (_ = n.status) != null && _.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (E) => E.has_issues && (E.sync_state === "new" || E.sync_state === "modified")
      ) : [];
    }), h = O(() => b.value.length > 0), z = O(() => h.value && !m.value);
    async function M() {
      var _, E, k;
      if (!(h.value && !m.value) && !(!u.value || !y.value.trim() || v.value)) {
        v.value = !0, i.value = null;
        try {
          const $ = await g(y.value.trim(), m.value);
          $.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((_ = $.summary) == null ? void 0 : _.new) || 0} new, ${((E = $.summary) == null ? void 0 : E.modified) || 0} modified, ${((k = $.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : $.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : $.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          i.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (_, E) => t.asModal ? (o(), x(ke, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: E[5] || (E[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: E[4] || (E[4] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Rf, [
            E[11] || (E[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: E[0] || (E[0] = (k) => r("close"))
            }, [...E[10] || (E[10] = [
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
          e("div", Nf, [
            t.status && u.value ? (o(), s("div", Of, [
              t.status.workflows.new.length ? (o(), s("div", Uf, [
                E[12] || (E[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Bf, [
                E[13] || (E[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Pf, [
                E[14] || (E[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Vf, [
                E[15] || (E[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Ff, [
                E[16] || (E[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", Af, " No changes to commit ")) : (o(), s("div", Wf, " Loading... ")),
            h.value ? (o(), s("div", Gf, [
              e("div", jf, [
                E[17] || (E[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Hf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", qf, [
                (o(!0), s(H, null, ae(b.value, (k) => (o(), s("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  w(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              f(Bt, {
                modelValue: m.value,
                "onUpdate:modelValue": E[1] || (E[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...E[18] || (E[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Kf, [
              f(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": E[2] || (E[2] = (k) => y.value = k),
                placeholder: z.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || v.value || z.value,
                rows: 3,
                onCtrlEnter: M
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", i.value.type])
            }, l(i.value.message), 3)) : c("", !0)
          ]),
          e("div", Jf, [
            f(le, {
              variant: "secondary",
              onClick: E[3] || (E[3] = (k) => r("close"))
            }, {
              default: a(() => [...E[19] || (E[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || v.value || z.value,
              loading: v.value,
              onClick: M
            }, {
              default: a(() => [
                w(l(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", Yf, [
      e("div", Qf, [
        E[21] || (E[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: E[6] || (E[6] = (k) => r("close"))
        }, [...E[20] || (E[20] = [
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
      e("div", Xf, [
        t.status && u.value ? (o(), s("div", Zf, [
          t.status.workflows.new.length ? (o(), s("div", eg, [
            E[22] || (E[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", tg, [
            E[23] || (E[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", og, [
            E[24] || (E[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", sg, [
            E[25] || (E[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", ng, [
            E[26] || (E[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", ag, " No changes to commit ")) : (o(), s("div", lg, " Loading... ")),
        h.value ? (o(), s("div", ig, [
          e("div", rg, [
            E[27] || (E[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", dg, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", cg, [
            (o(!0), s(H, null, ae(b.value, (k) => (o(), s("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              w(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          f(Bt, {
            modelValue: m.value,
            "onUpdate:modelValue": E[7] || (E[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...E[28] || (E[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", ug, [
          f(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": E[8] || (E[8] = (k) => y.value = k),
            placeholder: z.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || v.value || z.value,
            rows: 3,
            onCtrlEnter: M
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", i.value.type])
        }, l(i.value.message), 3)) : c("", !0)
      ]),
      e("div", mg, [
        f(le, {
          variant: "secondary",
          onClick: E[9] || (E[9] = (k) => r("close"))
        }, {
          default: a(() => [...E[29] || (E[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || v.value || z.value,
          loading: v.value,
          onClick: M
        }, {
          default: a(() => [
            w(l(v.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qt = /* @__PURE__ */ Y(vg, [["__scopeId", "data-v-38b45183"]]), fg = { class: "modal-header" }, gg = { class: "modal-body" }, hg = { class: "switch-message" }, pg = { class: "switch-details" }, yg = { class: "modal-actions" }, wg = /* @__PURE__ */ J({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, n) => (o(), x(ke, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", fg, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", gg, [
            e("p", hg, [
              n[6] || (n[6] = w(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              n[7] || (n[7] = w(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              n[8] || (n[8] = w("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", pg, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", yg, [
            f(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...n[11] || (n[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...n[12] || (n[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), bg = /* @__PURE__ */ Y(wg, [["__scopeId", "data-v-e9c5253e"]]), kg = { class: "progress-bar" }, _g = /* @__PURE__ */ J({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, n = O(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, g) => (o(), s("div", kg, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), $g = /* @__PURE__ */ Y(_g, [["__scopeId", "data-v-1beb0512"]]), Cg = {
  key: 0,
  class: "modal-overlay"
}, xg = { class: "modal-content" }, Sg = { class: "modal-body" }, Ig = { class: "progress-info" }, Eg = { class: "progress-percentage" }, Mg = { class: "progress-state" }, zg = { class: "switch-steps" }, Lg = { class: "step-icon" }, Tg = { class: "step-label" }, Dg = /* @__PURE__ */ J({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, n = O(() => {
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
    }), r = O(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), g = O(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = y.findIndex((m) => m.state === d.state);
      return y.map((m, i) => {
        let u = "pending", b = "○";
        return i < v ? (u = "completed", b = "✓") : i === v && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (y, v) => (o(), x(ke, { to: "body" }, [
      t.show ? (o(), s("div", Cg, [
        e("div", xg, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Sg, [
            f($g, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ig, [
              e("div", Eg, l(t.progress) + "%", 1),
              e("div", Mg, l(n.value), 1)
            ]),
            e("div", zg, [
              (o(!0), s(H, null, ae(g.value, (m) => (o(), s("div", {
                key: m.state,
                class: ne(["switch-step", m.status])
              }, [
                e("span", Lg, l(m.icon), 1),
                e("span", Tg, l(m.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Rg = /* @__PURE__ */ Y(Dg, [["__scopeId", "data-v-768a5078"]]), Ng = { class: "modal-header" }, Og = { class: "modal-body" }, Ug = {
  key: 0,
  class: "node-section"
}, Bg = { class: "node-list" }, Pg = {
  key: 1,
  class: "node-section"
}, Vg = { class: "node-list" }, Fg = { class: "modal-actions" }, Ag = /* @__PURE__ */ J({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, n) => (o(), x(ke, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Ng, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Og, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Ug, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Bg, [
                (o(!0), s(H, null, ae(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Pg, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Vg, [
                (o(!0), s(H, null, ae(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Fg, [
            f(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...n[10] || (n[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...n[11] || (n[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Wg = /* @__PURE__ */ Y(Ag, [["__scopeId", "data-v-7cad7518"]]);
async function it(t, d = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function Gg() {
  const t = C(null);
  async function d() {
    try {
      const v = await it(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (v.ok)
        return (await v.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const v = await it(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const v = await it(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Failed to get status");
      return await v.json();
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
    checkHealth: n,
    getStatus: r,
    restart: g,
    kill: y
  };
}
const jg = { class: "comfygit-panel" }, Hg = { class: "panel-header" }, qg = { class: "header-left" }, Kg = {
  key: 0,
  class: "header-info"
}, Jg = { class: "header-actions" }, Yg = { class: "env-switcher" }, Qg = {
  key: 0,
  class: "header-info"
}, Xg = { class: "branch-name" }, Zg = { class: "panel-main" }, eh = { class: "sidebar" }, th = { class: "sidebar-section" }, oh = { class: "sidebar-section" }, sh = { class: "sidebar-section" }, nh = { class: "content-area" }, ah = {
  key: 0,
  class: "error-message"
}, lh = {
  key: 1,
  class: "loading"
}, ih = { class: "dialog-content env-selector-dialog" }, rh = { class: "dialog-header" }, dh = { class: "dialog-body" }, ch = { class: "env-list" }, uh = { class: "env-info" }, mh = { class: "env-name-row" }, vh = { class: "env-indicator" }, fh = { class: "env-name" }, gh = {
  key: 0,
  class: "env-branch"
}, hh = {
  key: 1,
  class: "current-label"
}, ph = { class: "env-stats" }, yh = ["onClick"], wh = { class: "toast-container" }, bh = { class: "toast-icon" }, kh = { class: "toast-message" }, _h = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const n = d, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: v,
      createBranch: m,
      switchBranch: i,
      getEnvironments: u,
      switchEnvironment: b,
      getSwitchProgress: h,
      syncEnvironmentManually: z
    } = _e(), M = Gg(), _ = C(null), E = C([]), k = C([]), $ = C([]), P = O(() => $.value.find((j) => j.is_current)), L = C(!1), p = C(null), S = C(null), I = C(!1), q = C(null), G = C(!1), F = C(!1), B = C(""), A = C({ state: "idle", progress: 0, message: "" });
    let U = null, te = null;
    const V = C("status"), W = C("this-env");
    function oe(j, T) {
      V.value = j, W.value = T;
    }
    function K(j) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      de && oe(de.view, de.section);
    }
    function N() {
      oe("branches", "this-env");
    }
    const se = C(null), ee = C(!1), be = C(!1), ge = C([]);
    let Xe = 0;
    function ve(j, T = "info", de = 3e3) {
      const he = ++Xe;
      return ge.value.push({ id: he, message: j, type: T }), de > 0 && setTimeout(() => {
        ge.value = ge.value.filter((Le) => Le.id !== he);
      }, de), he;
    }
    function Me(j) {
      ge.value = ge.value.filter((T) => T.id !== j);
    }
    function at(j) {
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
    const Ke = O(() => {
      if (!_.value) return "neutral";
      const j = _.value.workflows, T = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    O(() => _.value ? Ke.value === "success" ? "All synced" : Ke.value === "warning" ? "Uncommitted changes" : Ke.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      L.value = !0, p.value = null;
      try {
        const [j, T, de, he] = await Promise.all([
          r(!0),
          g(),
          y(),
          u()
        ]);
        _.value = j, E.value = T.commits, k.value = de.branches, $.value = he, n("statusUpdate", j), q.value && await q.value.loadWorkflows(!0);
      } catch (j) {
        p.value = j instanceof Error ? j.message : "Failed to load status", _.value = null, E.value = [], k.value = [];
      } finally {
        L.value = !1;
      }
    }
    function lt(j) {
      S.value = j;
    }
    async function Ze(j) {
      var de;
      S.value = null;
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      se.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((de = j.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: T ? Rt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var Te;
          se.value = null, Z();
          const he = ve(`Checking out ${j.short_hash || ((Te = j.hash) == null ? void 0 : Te.slice(0, 7))}...`, "info", 0), Le = await v(j.hash, T);
          Me(he), Le.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Le.message || "Checkout failed", "error");
        }
      };
    }
    async function Q(j) {
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      se.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: T ? Rt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          se.value = null, Z();
          const de = ve(`Switching to ${j}...`, "info", 0), he = await i(j, T);
          Me(de), he.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(he.message || "Branch switch failed", "error");
        }
      };
    }
    async function R(j) {
      const T = ve(`Creating branch ${j}...`, "info", 0), de = await m(j);
      Me(T), de.status === "success" ? (ve(`Branch "${j}" created`, "success"), await Se()) : ve(de.message || "Failed to create branch", "error");
    }
    async function D(j) {
      S.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const de = ve(`Creating branch ${T}...`, "info", 0), he = await m(T, j.hash);
        Me(de), he.status === "success" ? (ve(`Branch "${T}" created from ${j.short_hash}`, "success"), await Se()) : ve(he.message || "Failed to create branch", "error");
      }
    }
    function Z() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function me(j) {
      I.value = !1, B.value = j, G.value = !0;
    }
    async function ze() {
      G.value = !1, F.value = !0, Z(), A.value = {
        progress: 10,
        state: Oe(10),
        message: Ue(10)
      };
      try {
        await b(B.value), pt(), yt();
      } catch (j) {
        Be(), F.value = !1, ve(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), A.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Oe(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Ue(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Oe(j)] || "";
    }
    function pt() {
      if (te) return;
      let j = 10;
      const T = 60, de = 5e3, he = 100, Le = (T - j) / (de / he);
      te = window.setInterval(() => {
        if (j += Le, j >= T && (j = T, Be()), A.value.progress < T) {
          const Te = Math.floor(j);
          A.value = {
            progress: Te,
            state: Oe(Te),
            message: Ue(Te)
          };
        }
      }, he);
    }
    function Be() {
      te && (clearInterval(te), te = null);
    }
    function yt() {
      U || (U = window.setInterval(async () => {
        try {
          let j = await M.getStatus();
          if ((!j || j.state === "idle") && (j = await h()), !j)
            return;
          const T = j.progress || 0;
          T >= 60 && Be();
          const de = Math.max(T, A.value.progress), he = j.state && j.state !== "idle" && j.state !== "unknown", Le = he ? j.state : Oe(de), Te = he && j.message || Ue(de);
          A.value = {
            state: Le,
            progress: de,
            message: Te
          }, j.state === "complete" ? (Be(), kt(), F.value = !1, ve(`✓ Switched to ${B.value}`, "success"), await Se(), B.value = "") : j.state === "rolled_back" ? (Be(), kt(), F.value = !1, ve("Switch failed, restored previous environment", "warning"), B.value = "") : j.state === "critical_failure" && (Be(), kt(), F.value = !1, ve(`Critical error during switch: ${j.message}`, "error"), B.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function kt() {
      Be(), U && (clearInterval(U), U = null);
    }
    function Xt() {
      G.value = !1, B.value = "";
    }
    async function Zt() {
      ee.value = !1, await Se(), ve("✓ Changes committed", "success");
    }
    async function eo() {
      be.value = !1;
      const j = ve("Syncing environment...", "info", 0);
      try {
        const T = await z("skip", !0);
        if (Me(j), T.status === "success") {
          const de = [];
          T.nodes_installed.length && de.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && de.push(`${T.nodes_removed.length} removed`);
          const he = de.length ? `: ${de.join(", ")}` : "";
          ve(`✓ Environment synced${he}`, "success"), await Se();
        } else {
          const de = T.errors.length ? T.errors.join("; ") : T.message;
          ve(`Sync failed: ${de}`, "error");
        }
      } catch (T) {
        Me(j), ve(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function to(j) {
      const T = ve(`Creating environment "${j}"...`, "info", 0);
      Me(T), ve("Environment creation not yet implemented", "warning");
    }
    async function oo(j) {
      const T = ve(`Deleting environment "${j}"...`, "info", 0);
      Me(T), ve("Environment deletion not yet implemented", "warning");
    }
    function so(j) {
      ve(`Viewing details for "${j}"`, "info"), oe("models-env", "this-env");
    }
    function Rt() {
      if (!_.value) return [];
      const j = [], T = _.value.workflows;
      return T.new.length && j.push(`${T.new.length} new workflow(s)`), T.modified.length && j.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && j.push(`${T.deleted.length} deleted workflow(s)`), j;
    }
    return ye(Se), (j, T) => {
      var de, he, Le, Te;
      return o(), s("div", jg, [
        e("div", Hg, [
          e("div", qg, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), s("div", Kg)) : c("", !0)
          ]),
          e("div", Jg, [
            e("button", {
              class: ne(["icon-btn", { spinning: L.value }]),
              onClick: Se,
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
              onClick: T[0] || (T[0] = (ie) => n("close")),
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
        e("div", Yg, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ie) => oe("environments", "all-envs"))
          }, [
            _.value ? (o(), s("div", Qg, [
              e("span", null, l(((de = P.value) == null ? void 0 : de.name) || ((he = _.value) == null ? void 0 : he.environment) || "Loading..."), 1),
              e("span", Xg, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Zg, [
          e("div", eh, [
            e("div", th, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "status" && W.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ie) => oe("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ie) => oe("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ie) => oe("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "branches" }]),
                onClick: T[5] || (T[5] = (ie) => oe("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "history" }]),
                onClick: T[6] || (T[6] = (ie) => oe("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ie) => oe("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ie) => oe("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", oh, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "environments" }]),
                onClick: T[9] || (T[9] = (ie) => oe("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ie) => oe("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "settings" }]),
                onClick: T[11] || (T[11] = (ie) => oe("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ie) => oe("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", sh, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "export" }]),
                onClick: T[13] || (T[13] = (ie) => oe("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "import" }]),
                onClick: T[14] || (T[14] = (ie) => oe("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: V.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ie) => oe("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", nh, [
            p.value ? (o(), s("div", ah, l(p.value), 1)) : !_.value && V.value === "status" ? (o(), s("div", lh, " Loading status... ")) : (o(), s(H, { key: 2 }, [
              V.value === "status" ? (o(), x(An, {
                key: 0,
                status: _.value,
                onSwitchBranch: N,
                onCommitChanges: T[16] || (T[16] = (ie) => ee.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ie) => be.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ie) => oe("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ie) => oe("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ie) => oe("debug-env", "this-env"))
              }, null, 8, ["status"])) : V.value === "workflows" ? (o(), x(Zd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: q,
                onRefresh: Se
              }, null, 512)) : V.value === "models-env" ? (o(), x(Rc, {
                key: 2,
                onNavigate: K
              })) : V.value === "branches" ? (o(), x(sa, {
                key: 3,
                branches: k.value,
                current: ((Le = _.value) == null ? void 0 : Le.branch) || null,
                onSwitch: Q,
                onCreate: R
              }, null, 8, ["branches", "current"])) : V.value === "history" ? (o(), x(fa, {
                key: 4,
                commits: E.value,
                onSelect: lt,
                onCheckout: Ze
              }, null, 8, ["commits"])) : V.value === "nodes" ? (o(), x(au, { key: 5 })) : V.value === "debug-env" ? (o(), x(nm, { key: 6 })) : V.value === "environments" ? (o(), x(hm, {
                key: 7,
                onSwitch: me,
                onCreate: to,
                onDelete: oo,
                onViewDetails: so
              })) : V.value === "model-index" ? (o(), x(eu, {
                key: 8,
                onRefresh: Se
              })) : V.value === "settings" ? (o(), x(em, { key: 9 })) : V.value === "debug-workspace" ? (o(), x(om, { key: 10 })) : V.value === "export" ? (o(), x(Sm, { key: 11 })) : V.value === "import" ? (o(), x(ef, { key: 12 })) : V.value === "remotes" ? (o(), x(Nu, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        S.value ? (o(), x(wf, {
          key: 0,
          commit: S.value,
          onClose: T[21] || (T[21] = (ie) => S.value = null),
          onCheckout: Ze,
          onCreateBranch: D
        }, null, 8, ["commit"])) : c("", !0),
        se.value ? (o(), x(Cf, {
          key: 1,
          title: se.value.title,
          message: se.value.message,
          details: se.value.details,
          warning: se.value.warning,
          confirmLabel: se.value.confirmLabel,
          cancelLabel: se.value.cancelLabel,
          secondaryLabel: se.value.secondaryLabel,
          secondaryAction: se.value.secondaryAction,
          destructive: se.value.destructive,
          onConfirm: se.value.onConfirm,
          onCancel: T[22] || (T[22] = (ie) => se.value = null),
          onSecondary: se.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        f(bg, {
          show: G.value,
          "from-environment": ((Te = P.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": B.value,
          onConfirm: ze,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ee.value && _.value ? (o(), x(qt, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ie) => ee.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : c("", !0),
        be.value && _.value ? (o(), x(Wg, {
          key: 3,
          show: be.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: eo,
          onClose: T[24] || (T[24] = (ie) => be.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        f(Rg, {
          show: F.value,
          state: A.value.state,
          progress: A.value.progress,
          message: A.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        I.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = pe((ie) => I.value = !1, ["self"]))
        }, [
          e("div", ih, [
            e("div", rh, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ie) => I.value = !1)
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
            e("div", dh, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", ch, [
                (o(!0), s(H, null, ae($.value, (ie) => (o(), s("div", {
                  key: ie.name,
                  class: ne(["env-item", { current: ie.is_current }])
                }, [
                  e("div", uh, [
                    e("div", mh, [
                      e("span", vh, l(ie.is_current ? "●" : "○"), 1),
                      e("span", fh, l(ie.name), 1),
                      ie.current_branch ? (o(), s("span", gh, "(" + l(ie.current_branch) + ")", 1)) : c("", !0),
                      ie.is_current ? (o(), s("span", hh, "CURRENT")) : c("", !0)
                    ]),
                    e("div", ph, l(ie.workflow_count) + " workflows • " + l(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Mp) => me(ie.name)
                  }, " SWITCH ", 8, yh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", wh, [
          f(uo, { name: "toast" }, {
            default: a(() => [
              (o(!0), s(H, null, ae(ge.value, (ie) => (o(), s("div", {
                key: ie.id,
                class: ne(["toast", ie.type])
              }, [
                e("span", bh, l(at(ie.type)), 1),
                e("span", kh, l(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $h = /* @__PURE__ */ Y(_h, [["__scopeId", "data-v-8a4bb082"]]), Ch = { class: "item-header" }, xh = { class: "item-info" }, Sh = { class: "filename" }, Ih = { class: "metadata" }, Eh = { class: "size" }, Mh = {
  key: 0,
  class: "type"
}, zh = { class: "item-actions" }, Lh = {
  key: 0,
  class: "progress-section"
}, Th = { class: "progress-bar" }, Dh = { class: "progress-stats" }, Rh = { class: "downloaded" }, Nh = { class: "speed" }, Oh = {
  key: 0,
  class: "eta"
}, Uh = {
  key: 1,
  class: "status-msg paused"
}, Bh = {
  key: 2,
  class: "status-msg queued"
}, Ph = {
  key: 3,
  class: "status-msg completed"
}, Vh = {
  key: 4,
  class: "status-msg failed"
}, Fh = {
  key: 0,
  class: "retries"
}, Ah = /* @__PURE__ */ J({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const n = d;
    function r(v) {
      if (v === 0) return "?";
      const m = v / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(v / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(v) {
      return v === 0 ? "-" : `${(v / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(v) {
      if (v < 60) return `${Math.round(v)}s`;
      const m = Math.floor(v / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (v, m) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Ch, [
        e("div", xh, [
          e("div", Sh, l(t.item.filename), 1),
          e("div", Ih, [
            e("span", Eh, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Mh, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", zh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Lh, [
        e("div", Th, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Dh, [
          e("span", Rh, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", Nh, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Oh, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Uh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Bh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Ph, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Vh, [
        w(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Fh, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ Y(Ah, [["__scopeId", "data-v-2110df65"]]), Wh = { class: "queue-title" }, Gh = { class: "count" }, jh = { class: "queue-actions" }, Hh = { class: "action-label" }, qh = {
  key: 0,
  class: "overall-progress"
}, Kh = { class: "progress-bar" }, Jh = {
  key: 0,
  class: "current-mini"
}, Yh = { class: "filename" }, Qh = { class: "speed" }, Xh = {
  key: 1,
  class: "queue-content"
}, Zh = {
  key: 0,
  class: "section"
}, ep = {
  key: 1,
  class: "section"
}, tp = { class: "section-header" }, op = { class: "section-label paused" }, sp = { class: "items-list" }, np = {
  key: 2,
  class: "section"
}, ap = { class: "section-header" }, lp = { class: "section-label" }, ip = { class: "items-list" }, rp = {
  key: 3,
  class: "section"
}, dp = { class: "section-header" }, cp = { class: "section-label" }, up = { class: "items-list" }, mp = {
  key: 4,
  class: "section"
}, vp = { class: "section-header" }, fp = { class: "section-label failed" }, gp = { class: "items-list" }, hp = /* @__PURE__ */ J({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: v,
      hasItems: m,
      activeCount: i,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: h,
      resumeAllPaused: z,
      removeItem: M,
      clearCompleted: _
    } = ht(), E = C(!1);
    let k = null;
    Et(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: v.value.length,
        completed: g.value.length
      }),
      (p, S) => {
        k && (clearTimeout(k), k = null);
        const I = p.active === 0 && p.failed === 0 && p.paused === 0 && p.completed > 0, q = S && (S.active > 0 || S.paused > 0);
        I && q && (k = setTimeout(() => {
          _(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = O(() => {
      var I;
      if (d.items.length === 0) return 0;
      const p = g.value.length, S = ((I = n.value) == null ? void 0 : I.progress) || 0;
      return Math.round((p + S / 100) / d.items.length * 100);
    });
    function P(p) {
      u(p);
    }
    function L(p) {
      return p === 0 ? "" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (p, S) => (o(), x(ke, { to: "body" }, [
      ce(m) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !E.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: S[0] || (S[0] = (I) => E.value = !E.value)
        }, [
          e("div", Wh, [
            S[4] || (S[4] = e("span", { class: "icon" }, "↓", -1)),
            S[5] || (S[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Gh, "(" + l(ce(i)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", jh, [
            e("span", Hh, l(E.value ? "minimize" : "expand"), 1)
          ])
        ]),
        E.value ? (o(), s("div", Xh, [
          ce(n) ? (o(), s("div", Zh, [
            S[6] || (S[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(rt, {
              item: ce(n),
              onCancel: S[1] || (S[1] = (I) => P(ce(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ce(v).length > 0 ? (o(), s("div", ep, [
            e("div", tp, [
              e("span", op, "Paused (" + l(ce(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: S[2] || (S[2] = //@ts-ignore
                (...I) => ce(z) && ce(z)(...I))
              }, "Resume All")
            ]),
            e("div", sp, [
              (o(!0), s(H, null, ae(ce(v), (I) => (o(), x(rt, {
                key: I.id,
                item: I,
                onResume: (q) => ce(h)(I.id),
                onRemove: (q) => ce(M)(I.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(r).length > 0 ? (o(), s("div", np, [
            e("div", ap, [
              e("span", lp, "Queued (" + l(ce(r).length) + ")", 1)
            ]),
            e("div", ip, [
              (o(!0), s(H, null, ae(ce(r), (I) => (o(), x(rt, {
                key: I.id,
                item: I,
                onCancel: (q) => P(I.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ce(g).length > 0 ? (o(), s("div", rp, [
            e("div", dp, [
              e("span", cp, "Completed (" + l(ce(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: S[3] || (S[3] = //@ts-ignore
                (...I) => ce(_) && ce(_)(...I))
              }, "Clear")
            ]),
            e("div", up, [
              (o(!0), s(H, null, ae(ce(g).slice(0, 3), (I) => (o(), x(rt, {
                key: I.id,
                item: I,
                onRemove: (q) => ce(M)(I.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(y).length > 0 ? (o(), s("div", mp, [
            e("div", vp, [
              e("span", fp, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", gp, [
              (o(!0), s(H, null, ae(ce(y), (I) => (o(), x(rt, {
                key: I.id,
                item: I,
                onRetry: (q) => ce(b)(I.id),
                onRemove: (q) => ce(M)(I.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", qh, [
          e("div", Kh, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ce(n) ? (o(), s("div", Jh, [
            e("span", Yh, l(ce(n).filename), 1),
            e("span", Qh, l(L(ce(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), pp = /* @__PURE__ */ Y(hp, [["__scopeId", "data-v-60751cfa"]]), yp = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', wp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', bp = {
  comfy: yp,
  phosphor: wp
}, Tt = "comfy", Kt = "comfygit-theme";
let Je = null, Jt = Tt;
function kp() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Yt(t = Tt) {
  Je && Je.remove(), Je = document.createElement("style"), Je.id = "comfygit-theme-styles", Je.setAttribute("data-theme", t), Je.textContent = bp[t], document.head.appendChild(Je), document.body.setAttribute("data-comfygit-theme", t), Jt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function _p() {
  return Jt;
}
function $p(t) {
  Yt(t);
}
const Dt = document.createElement("link");
Dt.rel = "stylesheet";
Dt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Dt);
const Cp = kp();
Yt(Cp);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), $p(t);
  },
  getTheme: () => {
    const t = _p();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let De = null, Ie = null, mt = null, dt = null, Pt = null;
const ot = C(null);
async function bt() {
  var t;
  if (!((t = tt) != null && t.api)) return null;
  try {
    const d = await tt.api.fetchApi("/v2/comfygit/status");
    d.ok && (ot.value = await d.json());
  } catch {
  }
}
function xp() {
  if (!ot.value) return !1;
  const t = ot.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ot.value.has_changes;
}
function Sp() {
  De && De.remove(), De = document.createElement("div"), De.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", De.appendChild(t), De.addEventListener("click", (r) => {
    r.target === De && Ct();
  });
  const d = (r) => {
    r.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Mt({
    render: () => zt($h, {
      onClose: Ct,
      onStatusUpdate: (r) => {
        ot.value = r, vt();
      }
    })
  }).mount(t), document.body.appendChild(De);
}
function Ct() {
  De && (De.remove(), De = null);
}
function Ip(t) {
  ct(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const n = (g) => {
    Ie && !Ie.contains(g.target) && g.target !== t && (ct(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (ct(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), mt = Mt({
    render: () => zt(qt, {
      status: ot.value,
      onClose: ct,
      onCommitted: () => {
        ct(), bt().then(vt);
      }
    })
  }), mt.mount(Ie), document.body.appendChild(Ie);
}
function ct() {
  mt && (mt.unmount(), mt = null), Ie && (Ie.remove(), Ie = null);
}
function Ep() {
  dt || (dt = document.createElement("div"), dt.className = "comfygit-download-queue-root", Pt = Mt({
    render: () => zt(pp)
  }), Pt.mount(dt), document.body.appendChild(dt), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function vt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = xp() ? "block" : "none");
}
const Qt = document.createElement("style");
Qt.textContent = `
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
document.head.appendChild(Qt);
tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Sp, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => Ip(Fe), t.appendChild(d), t.appendChild(Fe), (y = (g = tt.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Ep();
    const { loadPendingDownloads: n } = ht();
    n(), await bt(), vt(), setInterval(async () => {
      await bt(), vt();
    }, 3e4);
    const r = tt.api;
    if (r) {
      let v = function() {
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => v(), u.appendChild(h);
        const z = document.createElement("button");
        z.textContent = "×", z.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => u.remove(), u.appendChild(z), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: b, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${h}`), await bt(), vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : m()), i = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
