import { app as ot } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as re, createBlock as C, resolveDynamicComponent as It, normalizeClass as Z, withCtx as a, toDisplayString as l, createVNode as g, createTextVNode as w, computed as D, Fragment as W, renderList as ee, normalizeStyle as Ze, ref as I, onMounted as we, watch as Et, Teleport as Me, withModifiers as be, Transition as no, withKeys as Ge, onUnmounted as ao, reactive as Vt, readonly as lo, unref as ce, withDirectives as io, vModelText as ro, resolveComponent as co, createSlots as Ft, TransitionGroup as uo, createApp as Mt, h as zt } from "vue";
const mo = { class: "panel-layout" }, vo = {
  key: 0,
  class: "panel-layout-header"
}, fo = {
  key: 1,
  class: "panel-layout-search"
}, go = { class: "panel-layout-content" }, ho = {
  key: 2,
  class: "panel-layout-footer"
}, po = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", mo, [
      d.$slots.header ? (o(), n("div", vo, [
        re(d.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.search ? (o(), n("div", fo, [
        re(d.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", go, [
        re(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", ho, [
        re(d.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [i, f] of d)
    s[i] = f;
  return s;
}, xe = /* @__PURE__ */ J(po, [["__scopeId", "data-v-21565df9"]]), yo = {
  key: 0,
  class: "panel-title-prefix"
}, wo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bo = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), C(It(`h${t.level}`), {
      class: Z(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", yo, l(t.prefix), 1)) : (o(), n("span", wo)),
        re(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ko = /* @__PURE__ */ J(bo, [["__scopeId", "data-v-c3875efc"]]), _o = ["title"], $o = ["width", "height"], Co = /* @__PURE__ */ q({
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
      ])], 8, $o))
    ], 8, _o));
  }
}), At = /* @__PURE__ */ J(Co, [["__scopeId", "data-v-6fc7f16d"]]), xo = { class: "header-left" }, So = {
  key: 0,
  class: "header-actions"
}, Io = /* @__PURE__ */ q({
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
      class: Z(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", xo, [
        g(ko, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            w(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), C(At, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", So, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Se = /* @__PURE__ */ J(Io, [["__scopeId", "data-v-55a62cd6"]]), Eo = {
  key: 0,
  class: "section-title-count"
}, Mo = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ q({
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
      class: Z(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Eo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", Mo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ J(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, To = { class: "status-grid__column" }, Ro = { class: "status-grid__title" }, Do = { class: "status-grid__column status-grid__column--right" }, No = { class: "status-grid__title" }, Oo = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Lo, [
      e("div", To, [
        e("h4", Ro, l(t.leftTitle), 1),
        re(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Do, [
        e("h4", No, l(t.rightTitle), 1),
        re(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Uo = /* @__PURE__ */ J(Oo, [["__scopeId", "data-v-fe556068"]]), Bo = {
  key: 0,
  class: "status-item__icon"
}, Po = {
  key: 1,
  class: "status-item__count"
}, Vo = { class: "status-item__label" }, Fo = /* @__PURE__ */ q({
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
      class: Z(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Bo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Po, l(t.count), 1)) : c("", !0),
      e("span", Vo, l(t.label), 1)
    ], 2));
  }
}), Fe = /* @__PURE__ */ J(Fo, [["__scopeId", "data-v-6f929183"]]), Ao = { class: "issue-card__header" }, Wo = { class: "issue-card__icon" }, Go = { class: "issue-card__title" }, jo = {
  key: 0,
  class: "issue-card__content"
}, Ho = {
  key: 0,
  class: "issue-card__description"
}, Ko = {
  key: 1,
  class: "issue-card__items"
}, qo = {
  key: 2,
  class: "issue-card__actions"
}, Jo = /* @__PURE__ */ q({
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
      class: Z(["issue-card", s.value])
    }, [
      e("div", Ao, [
        e("span", Wo, l(t.icon), 1),
        e("h4", Go, l(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", jo, [
        t.description ? (o(), n("p", Ho, l(t.description), 1)) : c("", !0),
        re(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", Ko, [
        (o(!0), n(W, null, ee(t.items, (y, v) => (o(), n("div", {
          key: v,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (o(), n("div", qo, [
        re(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ J(Jo, [["__scopeId", "data-v-df6aa348"]]), Yo = ["type", "disabled"], Xo = {
  key: 0,
  class: "spinner"
}, Qo = /* @__PURE__ */ q({
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
      class: Z(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Xo)) : c("", !0),
      t.loading ? c("", !0) : re(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Yo));
  }
}), Y = /* @__PURE__ */ J(Qo, [["__scopeId", "data-v-772abe47"]]), Zo = { class: "empty-state" }, es = {
  key: 0,
  class: "empty-icon"
}, ts = { class: "empty-message" }, os = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", Zo, [
      t.icon ? (o(), n("div", es, l(t.icon), 1)) : c("", !0),
      e("p", ts, l(t.message), 1),
      t.actionLabel ? (o(), C(Y, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("action"))
      }, {
        default: a(() => [
          w(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ J(os, [["__scopeId", "data-v-4466284f"]]), ss = { class: "branch-indicator" }, ns = { class: "branch-indicator__info" }, as = { class: "branch-indicator__label" }, ls = { class: "branch-indicator__name" }, is = {
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
}, ms = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", ss, [
      e("div", ns, [
        e("span", as, l(t.label), 1),
        e("span", ls, l(t.branchName), 1),
        t.remote ? (o(), n("span", is, "@" + l(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", rs, [
        t.commitsAhead ? (o(), n("span", ds, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", cs, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      d.$slots.actions ? (o(), n("div", us, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ J(ms, [["__scopeId", "data-v-cb8dd50e"]]), fs = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: Z(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ J(fs, [["__scopeId", "data-v-75e9eeb8"]]), gs = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: Z(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ J(gs, [["__scopeId", "data-v-2f186e4c"]]), hs = { class: "detail-row" }, ps = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", hs, [
      g(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          w(l(t.label), 1)
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
          w(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : re(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), he = /* @__PURE__ */ J(ps, [["__scopeId", "data-v-ef15664a"]]), ys = { class: "modal-header" }, ws = { class: "modal-body" }, bs = { class: "status-section" }, ks = {
  key: 0,
  class: "status-section"
}, _s = { class: "section-header-row" }, $s = {
  key: 0,
  class: "workflow-group"
}, Cs = { class: "workflow-group-header" }, xs = { class: "workflow-group-title" }, Ss = { class: "workflow-list" }, Is = { class: "workflow-name" }, Es = { class: "workflow-issue" }, Ms = {
  key: 1,
  class: "workflow-group"
}, zs = { class: "workflow-group-header" }, Ls = { class: "workflow-group-title" }, Ts = { class: "workflow-list" }, Rs = { class: "workflow-name" }, Ds = { class: "workflow-issue" }, Ns = {
  key: 2,
  class: "workflow-group"
}, Os = { class: "workflow-group-header" }, Us = { class: "workflow-group-title" }, Bs = { class: "workflow-list" }, Ps = { class: "workflow-name" }, Vs = {
  key: 3,
  class: "workflow-group"
}, Fs = { class: "workflow-group-header" }, As = { class: "workflow-group-title" }, Ws = { class: "workflow-list" }, Gs = { class: "workflow-name" }, js = {
  key: 4,
  class: "workflow-group"
}, Hs = { class: "workflow-group-header" }, Ks = { class: "workflow-group-title" }, qs = { class: "workflow-list" }, Js = { class: "workflow-name" }, Ys = {
  key: 5,
  class: "workflow-group"
}, Xs = { class: "workflow-group-title" }, Qs = { class: "expand-icon" }, Zs = {
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
}, Rn = {
  key: 4,
  class: "status-section"
}, Dn = { class: "warning-box" }, Nn = {
  key: 5,
  class: "empty-state-inline"
}, On = { class: "modal-actions" }, Un = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const d = t, s = I(!1);
    we(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (L, M) => {
      console.log("StatusDetailModal show prop changed from", M, "to", L);
    }, { immediate: !0 });
    const i = D(() => {
      var L, M, $;
      return (($ = (M = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : $.filter(
        (E) => E.status === "broken" && E.sync_state === "synced"
      )) || [];
    }), f = D(() => {
      var L, M, $;
      return (($ = (M = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : $.filter(
        (E) => E.status === "broken" && E.sync_state !== "synced"
      )) || [];
    }), y = D(() => {
      var L, M, $;
      return (($ = (M = (L = d.status) == null ? void 0 : L.workflows) == null ? void 0 : M.synced) == null ? void 0 : $.filter((E) => {
        var _, R, z;
        const k = (z = (R = (_ = d.status) == null ? void 0 : _.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : z.find((h) => h.name === E);
        return !k || k.status !== "broken";
      })) || [];
    }), v = D(() => {
      var L, M, $, E, k;
      return (L = d.status) != null && L.workflows ? (((M = d.status.workflows.new) == null ? void 0 : M.length) ?? 0) > 0 || ((($ = d.status.workflows.modified) == null ? void 0 : $.length) ?? 0) > 0 || (((E = d.status.workflows.deleted) == null ? void 0 : E.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = D(() => {
      var M, $, E;
      const L = (M = d.status) == null ? void 0 : M.git_changes;
      return L ? ((($ = L.nodes_added) == null ? void 0 : $.length) ?? 0) > 0 || (((E = L.nodes_removed) == null ? void 0 : E.length) ?? 0) > 0 || L.workflow_changes || L.has_other_changes : !1;
    }), r = D(() => {
      var L, M, $, E, k, _;
      return !v.value && !m.value && ((M = (L = d.status) == null ? void 0 : L.comparison) == null ? void 0 : M.is_synced) && ((($ = d.status) == null ? void 0 : $.missing_models_count) ?? 0) === 0 && (((_ = (k = (E = d.status) == null ? void 0 : E.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : _.length) ?? 0) === 0;
    }), u = D(() => {
      var M, $;
      const L = ($ = (M = d.status) == null ? void 0 : M.git_changes) == null ? void 0 : $.workflow_changes;
      return L ? typeof L == "number" ? L : Object.keys(L).length : 0;
    });
    function b(L) {
      return typeof L == "string" ? L : L.name;
    }
    function p(L) {
      return typeof L == "object" && L.is_development === !0;
    }
    return (L, M) => {
      var $, E, k, _, R, z, h, x, S, K, G, P, U, V, N, X, B, H, Q, ne, se, me;
      return o(), C(Me, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[5] || (M[5] = (oe) => L.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: M[4] || (M[4] = be(() => {
            }, ["stop"]))
          }, [
            e("div", ys, [
              M[6] || (M[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[0] || (M[0] = (oe) => L.$emit("close"))
              }, "✕")
            ]),
            e("div", ws, [
              e("div", bs, [
                g(Ee, { level: "4" }, {
                  default: a(() => [...M[7] || (M[7] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(he, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), n("div", ks, [
                e("div", _s, [
                  g(Ee, { level: "4" }, {
                    default: a(() => [...M[8] || (M[8] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: M[1] || (M[1] = (oe) => L.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), n("div", $s, [
                  e("div", Cs, [
                    M[9] || (M[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xs, "BROKEN (COMMITTED) (" + l(i.value.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), n(W, null, ee(i.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Is, l(oe.name), 1),
                      e("span", Es, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), n("div", Ms, [
                  e("div", zs, [
                    M[10] || (M[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ls, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), n(W, null, ee(f.value, (oe) => (o(), n("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Rs, l(oe.name), 1),
                      e("span", Ds, l(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (E = ($ = t.status.workflows) == null ? void 0 : $.new) != null && E.length ? (o(), n("div", Ns, [
                  e("div", Os, [
                    M[11] || (M[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Us, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Bs, [
                    (o(!0), n(W, null, ee(t.status.workflows.new, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Ps, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (_ = (k = t.status.workflows) == null ? void 0 : k.modified) != null && _.length ? (o(), n("div", Vs, [
                  e("div", Fs, [
                    M[12] || (M[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", As, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ws, [
                    (o(!0), n(W, null, ee(t.status.workflows.modified, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Gs, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (z = (R = t.status.workflows) == null ? void 0 : R.deleted) != null && z.length ? (o(), n("div", js, [
                  e("div", Hs, [
                    M[13] || (M[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ks, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", qs, [
                    (o(!0), n(W, null, ee(t.status.workflows.deleted, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Js, l(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", Ys, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: M[2] || (M[2] = (oe) => s.value = !s.value)
                  }, [
                    M[14] || (M[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Xs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Qs, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Zs, [
                    (o(!0), n(W, null, ee(y.value, (oe) => (o(), n("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", en, l(oe), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), n("div", tn, [
                g(Ee, { level: "4" }, {
                  default: a(() => [...M[15] || (M[15] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (x = (h = t.status.git_changes) == null ? void 0 : h.nodes_added) != null && x.length ? (o(), n("div", on, [
                  e("div", sn, [
                    M[16] || (M[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", nn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (o(!0), n(W, null, ee(t.status.git_changes.nodes_added, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", ln, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", rn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (K = (S = t.status.git_changes) == null ? void 0 : S.nodes_removed) != null && K.length ? (o(), n("div", dn, [
                  e("div", cn, [
                    M[17] || (M[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", un, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", mn, [
                    (o(!0), n(W, null, ee(t.status.git_changes.nodes_removed, (oe) => (o(), n("div", {
                      key: b(oe),
                      class: "change-item"
                    }, [
                      e("span", vn, l(b(oe)), 1),
                      p(oe) ? (o(), n("span", fn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (G = t.status.git_changes) != null && G.workflow_changes ? (o(), n("div", gn, [
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
                (P = t.status.git_changes) != null && P.has_other_changes ? (o(), n("div", wn, [...M[19] || (M[19] = [
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
              (U = t.status.comparison) != null && U.is_synced ? c("", !0) : (o(), n("div", bn, [
                g(Ee, { level: "4" }, {
                  default: a(() => [...M[20] || (M[20] = [
                    w("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                M[21] || (M[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (N = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && N.length ? (o(), n("div", kn, [
                  g(he, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", _n, [
                    (o(!0), n(W, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", $n, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (B = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && B.length ? (o(), n("div", Cn, [
                  g(he, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", xn, [
                    (o(!0), n(W, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (o(), n("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + l(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", Sn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Q = (H = t.status.comparison) == null ? void 0 : H.version_mismatches) != null && Q.length ? (o(), n("div", In, [
                  g(he, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (ne = t.status.comparison) != null && ne.packages_in_sync ? c("", !0) : (o(), n("div", En, [
                  g(he, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (me = (se = t.status.comparison) == null ? void 0 : se.disabled_nodes) != null && me.length ? (o(), n("div", Mn, [
                g(Ee, { level: "4" }, {
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
                  (o(!0), n(W, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (o(), n("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + l(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Tn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Rn, [
                g(Ee, { level: "4" }, {
                  default: a(() => [...M[24] || (M[24] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Dn, [
                  M[25] || (M[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                M[26] || (M[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              r.value ? (o(), n("div", Nn, [...M[27] || (M[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", On, [
              g(Y, {
                variant: "secondary",
                onClick: M[3] || (M[3] = (oe) => L.$emit("close"))
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
}), Nt = /* @__PURE__ */ J(Un, [["__scopeId", "data-v-cbde957e"]]), Bn = { class: "health-section-header" }, Pn = { style: { "margin-top": "var(--cg-space-1)" } }, Vn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Fn = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: d }) {
    const s = t, i = I(!1), f = I(!1);
    we(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function v() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      i.value = !1, r("view-workflows");
    }
    const r = d, u = D(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = D(() => {
      const z = s.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes || z.has_other_changes;
    }), p = D(() => u.value || b.value), L = D(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), M = D(() => s.status.git_changes.has_other_changes), $ = D(() => {
      var z;
      return ((z = s.status.workflows.analyzed) == null ? void 0 : z.filter(
        (h) => h.status === "broken" && h.sync_state === "synced"
      )) || [];
    }), E = D(() => {
      var z;
      return ((z = s.status.workflows.analyzed) == null ? void 0 : z.filter(
        (h) => h.status === "broken" && h.sync_state !== "synced"
      )) || [];
    }), k = D(() => $.value.length > 0 || E.value.length > 0), _ = D(() => k.value || s.status.missing_models_count > 0 || p.value || !s.status.comparison.is_synced), R = D(() => {
      const z = [];
      return s.status.workflows.new.length > 0 && z.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && z.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && z.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && z.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && z.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${z.length > 0 ? z.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (z, h) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: h[0] || (h[0] = (x) => f.value = !0),
            onMouseleave: h[1] || (h[1] = (x) => f.value = !1)
          }, [
            e("div", Bn, [
              g(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...h[11] || (h[11] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(no, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), C(Y, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...h[12] || (h[12] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(Uo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), C(Fe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), C(Fe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), C(Fe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(Fe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: u.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), C(Fe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), C(Fe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), C(Fe, {
                  key: 2,
                  icon: "●",
                  count: L.value,
                  label: L.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                M.value ? (o(), C(Fe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), C(Fe, {
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
            g(vs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                g(Y, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h[2] || (h[2] = (x) => z.$emit("switch-branch"))
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    w(" Switch Branch ", -1)
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
              g(Y, {
                variant: "primary",
                size: "sm",
                onClick: h[3] || (h[3] = (x) => z.$emit("create-branch"))
              }, {
                default: a(() => [...h[14] || (h[14] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          _.value ? (o(), n("div", Vn, [
            g(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...h[15] || (h[15] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            $.value.length > 0 ? (o(), C(Xe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${$.value.length} committed workflow${$.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: $.value.map((x) => `${x.name} — ${x.issue_summary}`)
            }, {
              actions: a(() => [
                g(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[4] || (h[4] = (x) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...h[16] || (h[16] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            E.value.length > 0 ? (o(), C(Xe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: E.value.map((x) => `${x.name} — ${x.issue_summary}`)
            }, {
              actions: a(() => [
                g(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[5] || (h[5] = (x) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...h[17] || (h[17] = [
                    w(" See Workflows ", -1)
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
                g(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[6] || (h[6] = (x) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...h[18] || (h[18] = [
                    w(" See Workflows ", -1)
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
                g(Y, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: a(() => [...h[19] || (h[19] = [
                    w(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                g(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[7] || (h[7] = (x) => z.$emit("commit-changes"))
                }, {
                  default: a(() => [...h[20] || (h[20] = [
                    w(" Commit Changes ", -1)
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
                g(Y, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h[8] || (h[8] = (x) => z.$emit("view-debug"))
                }, {
                  default: a(() => [...h[21] || (h[21] = [
                    w(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                g(Y, {
                  variant: "primary",
                  size: "sm",
                  onClick: h[9] || (h[9] = (x) => z.$emit("sync-environment"))
                }, {
                  default: a(() => [...h[22] || (h[22] = [
                    w(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !_.value && !b.value ? (o(), C(Oe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(Nt, {
        show: i.value,
        status: t.status,
        onClose: h[10] || (h[10] = (x) => i.value = !1),
        onNavigateWorkflows: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), An = /* @__PURE__ */ J(Fn, [["__scopeId", "data-v-05737be6"]]), Wn = ["type", "value", "placeholder", "disabled"], Gn = /* @__PURE__ */ q({
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
    const i = t, f = s, y = I(null);
    function v(m) {
      const r = m.target.value;
      f("update:modelValue", r);
    }
    return we(() => {
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
      class: Z(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        r[0] || (r[0] = Ge((u) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = Ge((u) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => m.$emit("blur"))
    }, null, 42, Wn));
  }
}), ft = /* @__PURE__ */ J(Gn, [["__scopeId", "data-v-0380d08f"]]), jn = { class: "branch-create-form" }, Hn = { class: "form-actions" }, Kn = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, i = I(""), f = D(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
      f.value && (s("create", i.value.trim()), i.value = "");
    }
    function v() {
      i.value = "", s("cancel");
    }
    return (m, r) => (o(), n("div", jn, [
      g(ft, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Hn, [
        g(Y, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...r[1] || (r[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(Y, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: a(() => [...r[2] || (r[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), qn = /* @__PURE__ */ J(Kn, [["__scopeId", "data-v-7c500394"]]), Jn = { class: "branch-list-item__indicator" }, Yn = { class: "branch-list-item__name" }, Xn = {
  key: 0,
  class: "branch-list-item__actions"
}, Qn = {
  key: 0,
  class: "branch-list-item__current-label"
}, Zn = /* @__PURE__ */ q({
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
      class: Z(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && d.$emit("click"))
    }, [
      e("span", Jn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Yn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Xn, [
        re(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Qn, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ea = /* @__PURE__ */ J(Zn, [["__scopeId", "data-v-c6581a24"]]), ta = {
  key: 2,
  class: "branch-list"
}, oa = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, i = I(!1);
    function f(v) {
      s("create", v), y();
    }
    function y() {
      i.value = !1;
    }
    return (v, m) => (o(), C(xe, null, {
      header: a(() => [
        g(Se, { title: "BRANCHES" }, {
          actions: a(() => [
            g(Y, {
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
        i.value ? (o(), C(qn, {
          key: 0,
          onCreate: f,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), C(Oe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", ta, [
          (o(!0), n(W, null, ee(t.branches, (r) => (o(), C(ea, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: a(() => [
              r.is_current ? c("", !0) : (o(), C(Y, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (u) => v.$emit("switch", r.name)
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
}), sa = /* @__PURE__ */ J(oa, [["__scopeId", "data-v-763d6ec4"]]), na = { class: "commit-list" }, aa = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", na, [
      re(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), la = /* @__PURE__ */ J(aa, [["__scopeId", "data-v-8c5ee761"]]), ia = { class: "commit-hash" }, ra = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = D(() => d.hash.slice(0, d.length));
    return (i, f) => (o(), n("span", ia, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ J(ra, [["__scopeId", "data-v-7c333cc6"]]), da = { class: "commit-message" }, ca = { class: "commit-date" }, ua = /* @__PURE__ */ q({
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
    return (y, v) => (o(), n("div", {
      class: Z(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      g(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", da, l(t.message), 1),
      e("span", ca, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = be(() => {
        }, ["stop"]))
      }, [
        re(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ J(ua, [["__scopeId", "data-v-dd7c621b"]]), va = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), C(xe, null, {
      header: a(() => [
        g(Se, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), C(Oe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), C(la, { key: 1 }, {
          default: a(() => [
            (o(!0), n(W, null, ee(t.commits, (i) => (o(), C(ma, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => d.$emit("select", i)
            }, {
              actions: a(() => [
                g(Y, {
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
}), fa = /* @__PURE__ */ J(va, [["__scopeId", "data-v-981c3c64"]]), fp = [
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
], gp = {
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
], hp = [
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
function yt() {
  return !1;
}
function $e() {
  const t = I(!1), d = I(null);
  async function s(j, le) {
    var _e;
    if (!((_e = window.app) != null && _e.api))
      throw new Error("ComfyUI API not available");
    const fe = await window.app.api.fetchApi(j, le);
    if (!fe.ok) {
      const F = await fe.json().catch(() => ({}));
      throw new Error(F.error || F.message || `Request failed: ${fe.status}`);
    }
    return fe.json();
  }
  async function i(j = !1) {
    return s(j ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(j, le = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: j, allow_issues: le })
    });
  }
  async function y(j = 10, le = 0) {
    return s(`/v2/comfygit/log?limit=${j}&offset=${le}`);
  }
  async function v(j) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function m() {
    return s("/v2/comfygit/branches");
  }
  async function r(j) {
    return s(`/v2/comfygit/commit/${j}`);
  }
  async function u(j, le = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: j, force: le })
    });
  }
  async function b(j, le = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, start_point: le })
    });
  }
  async function p(j, le = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: j, force: le })
    });
  }
  async function L() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const j = await i();
        return [{
          name: j.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + j.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: j.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: j.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(j) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: j })
    });
  }
  async function $() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(j, le, fe) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, pytorch_backend: le, clone_from: fe })
    });
  }
  async function k(j) {
    return s(`/v2/workspace/environments/${j}`, {
      method: "DELETE"
    });
  }
  async function _(j = !1) {
    try {
      return s(j ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const le = await i(j), fe = [];
      return le.workflows.new.forEach((_e) => {
        fe.push({ name: _e, status: "new", missing_nodes: 0, missing_models: 0, path: _e });
      }), le.workflows.modified.forEach((_e) => {
        fe.push({ name: _e, status: "modified", missing_nodes: 0, missing_models: 0, path: _e });
      }), le.workflows.synced.forEach((_e) => {
        fe.push({ name: _e, status: "synced", missing_nodes: 0, missing_models: 0, path: _e });
      }), fe;
    }
  }
  async function R(j) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(j)}/details`);
  }
  async function z(j) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(j)}/resolve`, {
      method: "POST"
    });
  }
  async function h(j, le, fe) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(j)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: le, install_models: fe })
    });
  }
  async function x(j, le, fe) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(j)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: le, importance: fe })
    });
  }
  async function S() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function K() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function G(j) {
    return s(`/v2/workspace/models/details/${encodeURIComponent(j)}`);
  }
  async function P(j) {
    return s("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function U(j, le) {
    return s(`/v2/workspace/models/${j}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: le })
    });
  }
  async function V(j) {
    return s(`/v2/workspace/models/${j}`, {
      method: "DELETE"
    });
  }
  async function N(j) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function X() {
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
  async function B(j) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function H(j, le) {
    try {
      const fe = new URLSearchParams();
      return j && fe.append("level", j), le && fe.append("lines", le.toString()), s(`/v2/comfygit/debug/logs?${fe}`);
    } catch {
      return [];
    }
  }
  async function Q(j, le) {
    try {
      const fe = new URLSearchParams();
      return j && fe.append("level", j), le && fe.append("lines", le.toString()), s(`/v2/workspace/debug/logs?${fe}`);
    } catch {
      return [];
    }
  }
  async function ne() {
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
  async function se(j) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(j)}/install`, {
      method: "POST"
    });
  }
  async function me(j) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(j)}/update`, {
      method: "POST"
    });
  }
  async function oe(j) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function ze() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function pe(j, le) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, url: le })
    });
  }
  async function et(j) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function ve(j, le, fe) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: le, push_url: fe })
    });
  }
  async function Le(j) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(j)}/fetch`, {
      method: "POST"
    });
  }
  async function lt(j) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(j)}/status`);
    } catch {
      return null;
    }
  }
  async function Je(j = "skip", le = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: j,
        remove_extra_nodes: le
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: i,
    commit: f,
    getHistory: y,
    exportEnv: v,
    // Git Operations
    getBranches: m,
    getCommitDetail: r,
    checkout: u,
    createBranch: b,
    switchBranch: p,
    // Environment Management
    getEnvironments: L,
    switchEnvironment: M,
    getSwitchProgress: $,
    createEnvironment: E,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: _,
    getWorkflowDetails: R,
    resolveWorkflow: z,
    installWorkflowDeps: h,
    setModelImportance: x,
    // Model Management
    getEnvironmentModels: S,
    getWorkspaceModels: K,
    getModelDetails: G,
    openFileLocation: P,
    updateModelSource: U,
    deleteModel: V,
    downloadModel: N,
    // Settings
    getConfig: X,
    updateConfig: B,
    // Debug/Logs
    getEnvironmentLogs: H,
    getWorkspaceLogs: Q,
    // Node Management
    getNodes: ne,
    installNode: se,
    updateNode: me,
    uninstallNode: oe,
    // Git Remotes
    getRemotes: ze,
    addRemote: pe,
    removeRemote: et,
    updateRemoteUrl: ve,
    fetchRemote: Le,
    getRemoteSyncStatus: lt,
    // Environment Sync
    syncEnvironmentManually: Je
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
}, _a = /* @__PURE__ */ q({
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
    function y(v) {
      v.key === "Escape" && i("close");
    }
    return we(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (v, m) => (o(), C(Me, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: Z(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", ha, [
            re(v.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", pa, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (r) => v.$emit("close"))
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
            t.loading ? (o(), n("div", wa, "Loading...")) : t.error ? (o(), n("div", ba, l(t.error), 1)) : re(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), n("div", ka, [
            re(v.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), gt = /* @__PURE__ */ J(_a, [["__scopeId", "data-v-2125a0e6"]]), $a = ["type", "disabled"], Ca = {
  key: 0,
  class: "spinner"
}, xa = /* @__PURE__ */ q({
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
      class: Z(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => d.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Ca)) : c("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, $a));
  }
}), ie = /* @__PURE__ */ J(xa, [["__scopeId", "data-v-f3452606"]]), Sa = {
  key: 0,
  class: "base-title-count"
}, Ia = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), C(It(`h${t.level}`), {
      class: Z(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Sa, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ J(Ia, [["__scopeId", "data-v-5a01561d"]]), Ea = ["value", "disabled"], Ma = {
  key: 0,
  value: "",
  disabled: ""
}, za = ["value"], La = {
  key: 0,
  class: "base-select-error"
}, Ta = /* @__PURE__ */ q({
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
      class: Z(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: Z(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => i.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ma, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(W, null, ee(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, za))), 128))
      ], 42, Ea),
      t.error ? (o(), n("span", La, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ J(Ta, [["__scopeId", "data-v-7436d745"]]), Da = { class: "popover-header" }, Na = { class: "popover-title" }, Oa = { class: "popover-content" }, Ua = {
  key: 0,
  class: "popover-actions"
}, Ba = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), C(Me, { to: "body" }, [
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
          e("div", Da, [
            e("h4", Na, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Oa, [
            re(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Ua, [
            re(d.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ J(Ba, [["__scopeId", "data-v-42815ace"]]), Pa = { class: "detail-section" }, Va = {
  key: 0,
  class: "empty-message"
}, Fa = { class: "model-header" }, Aa = { class: "model-name" }, Wa = { class: "model-details" }, Ga = { class: "model-row" }, ja = { class: "model-row" }, Ha = { class: "label" }, Ka = {
  key: 0,
  class: "model-row model-row-nodes"
}, qa = { class: "node-list" }, Ja = ["onClick"], Ya = {
  key: 1,
  class: "model-row"
}, Xa = { class: "value" }, Qa = {
  key: 0,
  class: "model-actions"
}, Za = { class: "detail-section" }, el = {
  key: 0,
  class: "empty-message"
}, tl = { class: "node-name" }, ol = {
  key: 0,
  class: "node-version"
}, sl = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: v } = $e(), m = I(null), r = I(!1), u = I(null), b = I(!1), p = I({}), L = I({}), M = I(!1), $ = I(/* @__PURE__ */ new Set()), E = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(P) {
      switch (P) {
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
    function _(P) {
      switch (P) {
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
    function R(P) {
      if (!P.loaded_by || P.loaded_by.length === 0) return [];
      const U = P.hash || P.filename;
      return $.value.has(U) ? P.loaded_by : P.loaded_by.slice(0, 3);
    }
    function z(P) {
      return $.value.has(P);
    }
    function h(P) {
      $.value.has(P) ? $.value.delete(P) : $.value.add(P), $.value = new Set($.value);
    }
    async function x() {
      r.value = !0, u.value = null;
      try {
        m.value = await f(s.workflowName);
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function S(P, U) {
      p.value[P] = U, b.value = !0;
    }
    async function K() {
      if (!b.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [P, U] of Object.entries(p.value))
          await y(s.workflowName, P, U);
        i("refresh"), i("close");
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    async function G(P) {
      L.value[P] = !0, u.value = null;
      try {
        await v(s.workflowName, !0, !1), await x();
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to install node";
      } finally {
        L.value[P] = !1;
      }
    }
    return we(x), (P, U) => (o(), n(W, null, [
      g(gt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: U[5] || (U[5] = (V) => i("close"))
      }, {
        body: a(() => [
          m.value ? (o(), n(W, { key: 0 }, [
            e("section", Pa, [
              g(ut, { variant: "section" }, {
                default: a(() => [
                  w("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), n("div", Va, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, ee(m.value.models, (V) => (o(), n("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Fa, [
                  U[7] || (U[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Aa, l(V.filename), 1)
                ]),
                e("div", Wa, [
                  e("div", Ga, [
                    U[8] || (U[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: Z(["value", k(V.status)])
                    }, l(_(V.status)), 3)
                  ]),
                  e("div", ja, [
                    e("span", Ha, [
                      U[9] || (U[9] = w(" Importance: ", -1)),
                      g(At, {
                        size: 14,
                        title: "About importance levels",
                        onClick: U[0] || (U[0] = (N) => M.value = !0)
                      })
                    ]),
                    g(Ra, {
                      "model-value": p.value[V.filename] || V.importance,
                      options: E,
                      "onUpdate:modelValue": (N) => S(V.filename, N)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), n("div", Ka, [
                    U[10] || (U[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", qa, [
                      (o(!0), n(W, null, ee(R(V), (N, X) => (o(), n("div", {
                        key: `${N.node_id}-${X}`,
                        class: "node-reference"
                      }, l(N.node_type) + " (Node #" + l(N.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (N) => h(V.hash || V.filename)
                      }, l(z(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, Ja)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), n("div", Ya, [
                    U[11] || (U[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Xa, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), n("div", Qa, [
                  V.status === "downloadable" ? (o(), C(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: U[1] || (U[1] = (N) => i("resolve"))
                  }, {
                    default: a(() => [...U[12] || (U[12] = [
                      w(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), C(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[2] || (U[2] = (N) => i("resolve"))
                  }, {
                    default: a(() => [...U[13] || (U[13] = [
                      w(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), C(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[3] || (U[3] = (N) => i("resolve"))
                  }, {
                    default: a(() => [...U[14] || (U[14] = [
                      w(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", Za, [
              g(ut, { variant: "section" }, {
                default: a(() => [
                  w("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), n("div", el, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(W, null, ee(m.value.nodes, (V) => (o(), n("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: Z(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", tl, l(V.name), 1),
                V.version ? (o(), n("span", ol, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), C(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: L.value[V.name],
                  onClick: (N) => G(V.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...U[15] || (U[15] = [
                    w(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          g(ie, {
            variant: "secondary",
            onClick: U[4] || (U[4] = (V) => i("close"))
          }, {
            default: a(() => [...U[16] || (U[16] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), C(ie, {
            key: 0,
            variant: "primary",
            onClick: K
          }, {
            default: a(() => [...U[17] || (U[17] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(je, {
        show: M.value,
        title: "Model Importance Levels",
        onClose: U[6] || (U[6] = (V) => M.value = !1)
      }, {
        content: a(() => [...U[18] || (U[18] = [
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
}), nl = /* @__PURE__ */ J(sl, [["__scopeId", "data-v-0b14d32e"]]), ue = Vt({
  items: [],
  status: "idle"
});
let Ve = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ue.items.find((d) => d.id === t);
}
async function tt() {
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
    ue.status = "idle", tt();
  }
}
async function al(t) {
  return new Promise((d, s) => {
    Ve && (Ve.close(), Ve = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ve = f;
    let y = Date.now(), v = 0, m = !1;
    f.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const b = Date.now(), p = (b - y) / 1e3;
            if (p > 0.5) {
              const L = t.downloaded - v;
              if (t.speed = L / p, y = b, v = t.downloaded, t.speed > 0 && t.size > 0) {
                const M = t.size - t.downloaded;
                t.eta = M / t.speed;
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
async function ll() {
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
function bt() {
  function t(k) {
    for (const _ of k) {
      if (ue.items.some(
        (h) => h.url === _.url && h.targetPath === _.targetPath && ["queued", "downloading", "paused", "completed"].includes(h.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${_.filename}`);
        continue;
      }
      const z = {
        id: Gt(),
        workflow: _.workflow,
        filename: _.filename,
        url: _.url,
        targetPath: _.targetPath,
        size: _.size || 0,
        type: _.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ue.items.push(z);
    }
    ue.status === "idle" && tt();
  }
  async function d(k) {
    const _ = _t(k);
    if (_) {
      if (_.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(_.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), _.status = "failed", _.error = "Cancelled by user", ue.status = "idle", tt();
      } else if (_.status === "queued") {
        const R = ue.items.findIndex((z) => z.id === k);
        R >= 0 && ue.items.splice(R, 1);
      }
    }
  }
  function s(k) {
    const _ = _t(k);
    !_ || _.status !== "failed" || (_.status = "queued", _.error = void 0, _.progress = 0, _.downloaded = 0, ue.status === "idle" && tt());
  }
  function i(k) {
    const _ = _t(k);
    !_ || _.status !== "paused" || (_.status = "queued", ue.status === "idle" && tt());
  }
  function f() {
    const k = ue.items.filter((_) => _.status === "paused");
    for (const _ of k)
      _.status = "queued";
    ue.status === "idle" && tt();
  }
  function y(k) {
    const _ = ue.items.findIndex((R) => R.id === k);
    _ >= 0 && ["completed", "failed", "paused"].includes(ue.items[_].status) && ue.items.splice(_, 1);
  }
  function v() {
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
  ), L = D(
    () => ue.items.filter((k) => k.status === "paused")
  ), M = D(() => ue.items.length > 0), $ = D(
    () => ue.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), E = D(
    () => ue.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(ue),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: b,
    failedItems: p,
    pausedItems: L,
    hasItems: M,
    activeCount: $,
    hasPaused: E,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: v,
    clearFailed: m,
    loadPendingDownloads: ll
  };
}
function il() {
  const t = I(null), d = I(null), s = I([]), i = I([]), f = I(!1), y = I(null);
  async function v(k, _) {
    var z;
    if (!((z = window.app) != null && z.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(k, _);
    if (!R.ok) {
      const h = await R.json().catch(() => ({})), x = h.error || h.message || `Request failed: ${R.status}`;
      throw new Error(x);
    }
    return R.json();
  }
  async function m(k) {
    f.value = !0, y.value = null;
    try {
      let _;
      return yt() || (_ = await v(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = _, _;
    } catch (_) {
      const R = _ instanceof Error ? _.message : "Unknown error occurred";
      throw y.value = R, _;
    } finally {
      f.value = !1;
    }
  }
  async function r(k, _, R) {
    f.value = !0, y.value = null;
    try {
      let z;
      if (!yt()) {
        const h = Object.fromEntries(_), x = Object.fromEntries(R);
        z = await v(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: h,
              model_choices: x
            })
          }
        );
      }
      return d.value = z, z;
    } catch (z) {
      const h = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = h, z;
    } finally {
      f.value = !1;
    }
  }
  async function u(k, _ = 10) {
    f.value = !0, y.value = null;
    try {
      let R;
      return yt() || (R = await v(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: _ })
        }
      )), s.value = R.results, R.results;
    } catch (R) {
      const z = R instanceof Error ? R.message : "Unknown error occurred";
      throw y.value = z, R;
    } finally {
      f.value = !1;
    }
  }
  async function b(k, _ = 10) {
    f.value = !0, y.value = null;
    try {
      let R;
      return yt() || (R = await v(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: _ })
        }
      )), i.value = R.results, R.results;
    } catch (R) {
      const z = R instanceof Error ? R.message : "Unknown error occurred";
      throw y.value = z, R;
    } finally {
      f.value = !1;
    }
  }
  const p = Vt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function L() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.error = void 0;
  }
  async function M(k, _, R) {
    L(), p.phase = "resolving", y.value = null;
    const z = Object.fromEntries(_), h = Object.fromEntries(R);
    try {
      const x = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: z,
          model_choices: h
        })
      });
      if (!x.ok)
        throw new Error(`Request failed: ${x.status}`);
      if (!x.body)
        throw new Error("No response body");
      const S = x.body.getReader(), K = new TextDecoder();
      let G = "";
      for (; ; ) {
        const { done: P, value: U } = await S.read();
        if (P) break;
        G += K.decode(U, { stream: !0 });
        const V = G.split(`

`);
        G = V.pop() || "";
        for (const N of V) {
          if (!N.trim()) continue;
          const X = N.split(`
`);
          let B = "", H = "";
          for (const Q of X)
            Q.startsWith("event: ") ? B = Q.slice(7) : Q.startsWith("data: ") && (H = Q.slice(6));
          if (H)
            try {
              const Q = JSON.parse(H);
              $(B, Q);
            } catch (Q) {
              console.warn("Failed to parse SSE event:", Q);
            }
        }
      }
    } catch (x) {
      const S = x instanceof Error ? x.message : "Unknown error occurred";
      throw y.value = S, p.error = S, p.phase = "error", x;
    }
  }
  function $(k, _) {
    switch (k) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = _.total;
        break;
      case "file_start":
        p.currentFile = _.filename, p.currentFileIndex = _.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = _.downloaded, p.bytesTotal = _.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: _.filename,
          success: _.success,
          error: _.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = _.nodes_to_install || [], _.download_results && (p.completedFiles = _.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = _.message, p.phase = "error", y.value = _.message;
        break;
    }
  }
  function E(k, _) {
    const { addToQueue: R } = bt(), z = _.filter((h) => h.url && h.target_path).map((h) => ({
      workflow: k,
      filename: h.filename,
      url: h.url,
      targetPath: h.target_path,
      size: h.size || 0,
      type: "model"
    }));
    return z.length > 0 && R(z), z.length;
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
    applyResolutionWithProgress: M,
    searchNodes: u,
    searchModels: b,
    resetProgress: L,
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
}, gl = { class: "stepper-content" }, hl = /* @__PURE__ */ q({
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
    function v(u) {
      return f(u) ? "state-complete" : y(u) ? "state-partial" : "state-pending";
    }
    function m(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, b) => (o(), n("div", rl, [
      e("div", dl, [
        (o(!0), n(W, null, ee(t.steps, (p, L) => (o(), n("div", {
          key: p.id,
          class: Z(["step", {
            active: t.currentStep === p.id,
            completed: f(p.id),
            "in-progress": y(p.id),
            disabled: m(p.id)
          }]),
          onClick: (M) => r(p.id)
        }, [
          e("div", {
            class: Z(["step-indicator", v(p.id)])
          }, [
            f(p.id) ? (o(), n("span", ul, "✓")) : (o(), n("span", ml, l(L + 1), 1))
          ], 2),
          e("div", vl, l(p.label), 1),
          L < t.steps.length - 1 ? (o(), n("div", fl)) : c("", !0)
        ], 10, cl))), 128))
      ]),
      e("div", gl, [
        re(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), pl = /* @__PURE__ */ J(hl, [["__scopeId", "data-v-2a7b3af8"]]), yl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = D(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${s.value}`), f = D(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, v) => (o(), n("span", {
      class: Z(["confidence-badge", i.value, t.size])
    }, l(f.value), 3));
  }
}), Lt = /* @__PURE__ */ J(yl, [["__scopeId", "data-v-17ec4b80"]]), wl = { class: "node-info" }, bl = { class: "node-info-text" }, kl = { class: "item-body" }, _l = {
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
}, Rl = { class: "action-buttons" }, Dl = {
  key: 2,
  class: "unresolved"
}, Nl = { class: "action-buttons" }, Ol = /* @__PURE__ */ q({
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
    function v(m) {
      i("option-selected", m);
    }
    return (m, r) => (o(), n("div", {
      class: Z(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", wl, [
        e("span", bl, [
          r[7] || (r[7] = w("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: Z(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", kl, [
        f.value ? (o(), n("div", _l, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (u) => i("clear-choice"))
          }, {
            default: a(() => [...r[8] || (r[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", $l, [
          r[12] || (r[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Cl, [
            (o(!0), n(W, null, ee(t.options, (u, b) => (o(), n("label", {
              key: u.package_id,
              class: Z(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (p) => v(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (p) => v(b)
              }, null, 40, Sl),
              e("div", Il, [
                e("div", El, [
                  e("span", Ml, l(u.package_id), 1),
                  g(Lt, {
                    confidence: u.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                u.title && u.title !== u.package_id ? (o(), n("div", zl, l(u.title), 1)) : c("", !0),
                e("div", Ll, [
                  u.is_installed ? (o(), n("span", Tl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, xl))), 128))
          ]),
          e("div", Rl, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: r[1] || (r[1] = (u) => i("search"))
            }, {
              default: a(() => [...r[9] || (r[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: r[2] || (r[2] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[10] || (r[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[3] || (r[3] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[11] || (r[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Dl, [
          r[16] || (r[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Nl, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: r[4] || (r[4] = (u) => i("search"))
            }, {
              default: a(() => [...r[13] || (r[13] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[5] || (r[5] = (u) => i("manual-entry"))
            }, {
              default: a(() => [...r[14] || (r[14] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: r[6] || (r[6] = (u) => i("mark-optional"))
            }, {
              default: a(() => [...r[15] || (r[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ul = /* @__PURE__ */ J(Ol, [["__scopeId", "data-v-e02629e7"]]), Bl = { class: "item-navigator" }, Pl = { class: "nav-item-info" }, Vl = ["title"], Fl = { class: "nav-controls" }, Al = { class: "nav-arrows" }, Wl = ["disabled"], Gl = ["disabled"], jl = { class: "nav-position" }, Hl = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (i, f) => (o(), n("div", Bl, [
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
            onClick: f[0] || (f[0] = (y) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, Wl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (y) => s("next")),
            title: "Next item"
          }, " → ", 8, Gl)
        ]),
        e("span", jl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ J(Hl, [["__scopeId", "data-v-74af7920"]]), Kl = ["type", "value", "placeholder", "disabled"], ql = {
  key: 0,
  class: "base-input-error"
}, Jl = /* @__PURE__ */ q({
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
      class: Z(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: Z(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ge((i) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ge((i) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Kl),
      t.error ? (o(), n("span", ql, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ J(Jl, [["__scopeId", "data-v-9ba02cdc"]]), Yl = { class: "node-resolution-step" }, Xl = { class: "step-header" }, Ql = { class: "stat-badge" }, Zl = {
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
}, ci = { class: "node-manual-entry-modal" }, ui = { class: "node-modal-body" }, mi = { class: "node-modal-actions" }, vi = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = I(0), y = I(!1), v = I(!1), m = I(""), r = I(""), u = I([]), b = I(!1), p = D(() => s.nodes[f.value]), L = D(() => s.nodes.filter((V) => s.nodeChoices.has(V.node_type)).length), M = D(() => {
      var N;
      if (!p.value) return "not-found";
      const V = s.nodeChoices.get(p.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (N = p.value.options) != null && N.length ? "ambiguous" : "not-found";
    }), $ = D(() => {
      var N;
      if (!p.value) return;
      const V = s.nodeChoices.get(p.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return V.package_id ? `→ ${V.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (N = p.value.options) != null && N.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function E(V) {
      V >= 0 && V < s.nodes.length && (f.value = V);
    }
    function k() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function _() {
      p.value && i("skip", p.value.node_type);
    }
    function R(V) {
      p.value && i("option-selected", p.value.node_type, V);
    }
    function z() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function h() {
      p.value && (m.value = p.value.node_type, y.value = !0);
    }
    function x() {
      r.value = "", v.value = !0;
    }
    function S() {
      y.value = !1, m.value = "", u.value = [];
    }
    function K() {
      v.value = !1, r.value = "";
    }
    function G() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function P(V) {
      p.value && (i("manual-entry", p.value.node_type, V.package_id), S());
    }
    function U() {
      !p.value || !r.value.trim() || (i("manual-entry", p.value.node_type, r.value.trim()), K());
    }
    return (V, N) => {
      var X, B;
      return o(), n("div", Yl, [
        e("div", Xl, [
          N[4] || (N[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Ql, l(L.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        p.value ? (o(), C(jt, {
          key: 0,
          "item-name": p.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: N[0] || (N[0] = (H) => E(f.value - 1)),
          onNext: N[1] || (N[1] = (H) => E(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        p.value ? (o(), n("div", Zl, [
          g(Ul, {
            "node-type": p.value.node_type,
            "has-multiple-options": !!((X = p.value.options) != null && X.length),
            options: p.value.options,
            choice: (B = t.nodeChoices) == null ? void 0 : B.get(p.value.node_type),
            status: M.value,
            "status-label": $.value,
            onMarkOptional: k,
            onSkip: _,
            onManualEntry: x,
            onSearch: h,
            onOptionSelected: R,
            onClearChoice: z
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", ei, [...N[5] || (N[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), C(Me, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(S, ["self"])
          }, [
            e("div", ti, [
              e("div", { class: "node-modal-header" }, [
                N[6] || (N[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", oi, [
                g(qe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (H) => m.value = H),
                  placeholder: "Search by node type, package name...",
                  onInput: G
                }, null, 8, ["modelValue"]),
                u.value.length > 0 ? (o(), n("div", si, [
                  (o(!0), n(W, null, ee(u.value, (H) => (o(), n("div", {
                    key: H.package_id,
                    class: "node-search-result-item",
                    onClick: (Q) => P(H)
                  }, [
                    e("div", ai, [
                      e("code", li, l(H.package_id), 1),
                      H.match_confidence ? (o(), C(Lt, {
                        key: 0,
                        confidence: H.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    H.description ? (o(), n("div", ii, l(H.description), 1)) : c("", !0)
                  ], 8, ni))), 128))
                ])) : m.value && !b.value ? (o(), n("div", ri, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", di, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), C(Me, { to: "body" }, [
          v.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(K, ["self"])
          }, [
            e("div", ci, [
              e("div", { class: "node-modal-header" }, [
                N[7] || (N[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              e("div", ui, [
                g(qe, {
                  modelValue: r.value,
                  "onUpdate:modelValue": N[3] || (N[3] = (H) => r.value = H),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", mi, [
                  g(ie, {
                    variant: "secondary",
                    onClick: K
                  }, {
                    default: a(() => [...N[8] || (N[8] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !r.value.trim(),
                    onClick: U
                  }, {
                    default: a(() => [...N[9] || (N[9] = [
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
}), fi = /* @__PURE__ */ J(vi, [["__scopeId", "data-v-4fb196b1"]]), gi = { class: "node-info" }, hi = { class: "node-info-text" }, pi = { class: "item-body" }, yi = {
  key: 0,
  class: "resolved-state"
}, wi = {
  key: 1,
  class: "multiple-options"
}, bi = { class: "options-list" }, ki = ["onClick"], _i = ["name", "value", "checked", "onChange"], $i = { class: "option-content" }, Ci = { class: "option-header" }, xi = { class: "option-filename" }, Si = { class: "option-meta" }, Ii = { class: "option-size" }, Ei = { class: "option-category" }, Mi = { class: "option-path" }, zi = { class: "action-buttons" }, Li = {
  key: 2,
  class: "unresolved"
}, Ti = { class: "action-buttons" }, Ri = /* @__PURE__ */ q({
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
    function v(r) {
      i("option-selected", r);
    }
    function m(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (o(), n("div", {
      class: Z(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", gi, [
        e("span", hi, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: Z(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", pi, [
        f.value ? (o(), n("div", yi, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (b) => i("clear-choice"))
          }, {
            default: a(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", wi, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", bi, [
            (o(!0), n(W, null, ee(t.options, (b, p) => (o(), n("label", {
              key: b.model.hash,
              class: Z(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (L) => v(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (L) => v(p)
              }, null, 40, _i),
              e("div", $i, [
                e("div", Ci, [
                  e("span", xi, l(b.model.filename), 1),
                  g(Lt, {
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
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (b) => i("search"))
            }, {
              default: a(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (b) => i("mark-optional"))
            }, {
              default: a(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Li, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ti, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (b) => i("search"))
            }, {
              default: a(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (b) => i("download-url"))
            }, {
              default: a(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (b) => i("mark-optional"))
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
}), Di = /* @__PURE__ */ J(Ri, [["__scopeId", "data-v-8a82fefa"]]), Ni = { class: "model-resolution-step" }, Oi = { class: "step-header" }, Ui = { class: "step-info" }, Bi = { class: "step-title" }, Pi = { class: "step-description" }, Vi = { class: "stat-badge" }, Fi = {
  key: 1,
  class: "step-body"
}, Ai = {
  key: 2,
  class: "empty-state"
}, Wi = { class: "model-search-modal" }, Gi = { class: "model-modal-body" }, ji = {
  key: 0,
  class: "model-search-results"
}, Hi = ["onClick"], Ki = { class: "model-result-header" }, qi = { class: "model-result-filename" }, Ji = { class: "model-result-meta" }, Yi = { class: "model-result-category" }, Xi = { class: "model-result-size" }, Qi = {
  key: 0,
  class: "model-result-path"
}, Zi = {
  key: 1,
  class: "model-no-results"
}, er = {
  key: 2,
  class: "model-searching"
}, tr = { class: "model-download-url-modal" }, or = { class: "model-modal-body" }, sr = { class: "model-input-group" }, nr = { class: "model-input-group" }, ar = { class: "model-modal-actions" }, lr = /* @__PURE__ */ q({
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
    const f = t, y = d, v = I(0), m = I(!1), r = I(!1), u = I(""), b = I(""), p = I(""), L = I([]), M = I(!1), $ = D(() => f.models[v.value]), E = D(() => f.models.some((ne) => ne.is_download_intent)), k = D(() => f.models.filter(
      (ne) => f.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), _ = D(() => {
      var se;
      if (!$.value) return "";
      const ne = i((se = $.value.reference) == null ? void 0 : se.node_type);
      return ne ? `${ne}/${$.value.filename}` : "";
    }), R = D(() => {
      var se;
      if (!$.value) return "not-found";
      const ne = f.modelChoices.get($.value.filename);
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
      return $.value.is_download_intent ? "download" : (se = $.value.options) != null && se.length ? "ambiguous" : "not-found";
    }), z = D(() => {
      var se, me;
      if (!$.value) return;
      const ne = f.modelChoices.get($.value.filename);
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
      return $.value.is_download_intent ? "Pending Download" : (me = $.value.options) != null && me.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function h(ne) {
      ne >= 0 && ne < f.models.length && (v.value = ne);
    }
    function x() {
      $.value && y("mark-optional", $.value.filename);
    }
    function S() {
      $.value && y("skip", $.value.filename);
    }
    function K(ne) {
      $.value && y("option-selected", $.value.filename, ne);
    }
    function G() {
      $.value && y("clear-choice", $.value.filename);
    }
    function P() {
      $.value && (u.value = $.value.filename, m.value = !0);
    }
    function U() {
      $.value && (b.value = $.value.download_source || "", p.value = $.value.target_path || _.value, r.value = !0);
    }
    function V() {
      m.value = !1, u.value = "", L.value = [];
    }
    function N() {
      r.value = !1, b.value = "", p.value = "";
    }
    function X() {
      M.value = !0, setTimeout(() => {
        M.value = !1;
      }, 300);
    }
    function B(ne) {
      $.value && V();
    }
    function H() {
      !$.value || !b.value.trim() || (y("download-url", $.value.filename, b.value.trim(), p.value.trim() || void 0), N());
    }
    function Q(ne) {
      if (!ne) return "Unknown";
      const se = ne / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, se) => {
      var me, oe, ze;
      return o(), n("div", Ni, [
        e("div", Oi, [
          e("div", Ui, [
            e("h3", Bi, l(E.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Pi, l(E.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Vi, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        $.value ? (o(), C(jt, {
          key: 0,
          "item-name": $.value.filename,
          "current-index": v.value,
          "total-items": t.models.length,
          onPrev: se[0] || (se[0] = (pe) => h(v.value - 1)),
          onNext: se[1] || (se[1] = (pe) => h(v.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        $.value ? (o(), n("div", Fi, [
          g(Di, {
            filename: $.value.filename,
            "node-type": ((me = $.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((oe = $.value.options) != null && oe.length),
            options: $.value.options,
            choice: (ze = t.modelChoices) == null ? void 0 : ze.get($.value.filename),
            status: R.value,
            "status-label": z.value,
            onMarkOptional: x,
            onSkip: S,
            onDownloadUrl: U,
            onSearch: P,
            onOptionSelected: K,
            onClearChoice: G
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Ai, [...se[5] || (se[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), C(Me, { to: "body" }, [
          m.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(V, ["self"])
          }, [
            e("div", Wi, [
              e("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Gi, [
                g(qe, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (pe) => u.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                L.value.length > 0 ? (o(), n("div", ji, [
                  (o(!0), n(W, null, ee(L.value, (pe) => (o(), n("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (et) => B()
                  }, [
                    e("div", Ki, [
                      e("code", qi, l(pe.filename), 1)
                    ]),
                    e("div", Ji, [
                      e("span", Yi, l(pe.category), 1),
                      e("span", Xi, l(Q(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), n("div", Qi, l(pe.relative_path), 1)) : c("", !0)
                  ], 8, Hi))), 128))
                ])) : u.value && !M.value ? (o(), n("div", Zi, ' No models found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                M.value ? (o(), n("div", er, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), C(Me, { to: "body" }, [
          r.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(N, ["self"])
          }, [
            e("div", tr, [
              e("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", or, [
                e("div", sr, [
                  se[8] || (se[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(qe, {
                    modelValue: b.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (pe) => b.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", nr, [
                  se[9] || (se[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(qe, {
                    modelValue: p.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (pe) => p.value = pe),
                    placeholder: _.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ar, [
                  g(ie, {
                    variant: "secondary",
                    onClick: N
                  }, {
                    default: a(() => [...se[10] || (se[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !b.value.trim() || !p.value.trim(),
                    onClick: H
                  }, {
                    default: a(() => [...se[11] || (se[11] = [
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
}), ir = /* @__PURE__ */ J(lr, [["__scopeId", "data-v-c6acbada"]]), rr = { class: "applying-step" }, dr = {
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
}, gr = { class: "error-message" }, hr = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", rr, [
      t.progress.phase === "resolving" ? (o(), n("div", dr, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", cr, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", ur, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", mr, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", vr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : c("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", fr, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", gr, l(t.progress.error), 1)
      ])) : c("", !0)
    ]));
  }
}), pr = /* @__PURE__ */ J(hr, [["__scopeId", "data-v-b4d7e0eb"]]), yr = {
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
}, Tr = { class: "stat-count" }, Rr = { class: "stat-card" }, Dr = { class: "stat-items" }, Nr = { class: "stat-item success" }, Or = { class: "stat-count" }, Ur = {
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
}, Hr = { class: "status-text" }, Kr = {
  key: 2,
  class: "status-message success"
}, qr = {
  key: 3,
  class: "step-content"
}, Jr = { class: "review-summary" }, Yr = { class: "review-stats" }, Xr = { class: "review-stat" }, Qr = { class: "stat-value" }, Zr = { class: "review-stat" }, ed = { class: "stat-value" }, td = { class: "review-stat" }, od = { class: "stat-value" }, sd = { class: "review-stat" }, nd = { class: "stat-value" }, ad = {
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
}, Id = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, i = d, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: v, progress: m, resetProgress: r } = il(), { loadPendingDownloads: u } = bt(), b = I(null), p = I(!1), L = I(!1), M = I(null), $ = I("analysis"), E = I([]), k = I(/* @__PURE__ */ new Map()), _ = I(/* @__PURE__ */ new Map()), R = D(() => {
      const F = [
        { id: "analysis", label: "Analysis" }
      ];
      return h.value && F.push({ id: "nodes", label: "Nodes" }), (x.value || S.value) && F.push({ id: "models", label: "Models" }), F.push({ id: "review", label: "Review" }), $.value === "applying" && F.push({ id: "applying", label: "Applying" }), F;
    }), z = D(() => b.value ? b.value.stats.needs_user_input : !1), h = D(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), x = D(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), S = D(() => b.value ? b.value.stats.download_intents > 0 : !1), K = D(() => b.value ? b.value.models.resolved.filter((F) => F.match_type === "download_intent").map((F) => ({
      filename: F.reference.widget_value,
      reference: F.reference,
      is_download_intent: !0,
      resolved_model: F.model,
      download_source: F.download_source,
      target_path: F.target_path
    })) : []), G = D(() => {
      if (!b.value) return [];
      const F = b.value.nodes.unresolved.map((te) => ({
        node_type: te.reference.node_type,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), O = b.value.nodes.ambiguous.map((te) => ({
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
      return [...F, ...O];
    }), P = D(() => {
      if (!b.value) return [];
      const F = b.value.models.unresolved.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), O = b.value.models.ambiguous.map((te) => ({
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
      return [...F, ...O];
    }), U = D(() => {
      const F = P.value, O = K.value.map((te) => ({
        filename: te.filename,
        reference: te.reference,
        is_download_intent: !0,
        resolved_model: te.resolved_model,
        download_source: te.download_source,
        target_path: te.target_path,
        options: void 0
      }));
      return [...F, ...O];
    }), V = D(() => {
      let F = 0;
      for (const O of k.value.values())
        O.action === "install" && F++;
      for (const O of _.value.values())
        O.action === "select" && F++;
      return F;
    }), N = D(() => {
      let F = 0;
      for (const O of _.value.values())
        O.action === "download" && F++;
      return F;
    }), X = D(() => {
      let F = 0;
      for (const O of k.value.values())
        O.action === "optional" && F++;
      for (const O of _.value.values())
        O.action === "optional" && F++;
      return F;
    }), B = D(() => {
      let F = 0;
      for (const O of k.value.values())
        O.action === "skip" && F++;
      for (const O of _.value.values())
        O.action === "skip" && F++;
      for (const O of G.value)
        k.value.has(O.node_type) || F++;
      for (const O of P.value)
        _.value.has(O.filename) || F++;
      return F;
    }), H = D(() => {
      const F = {};
      if (F.analysis = { resolved: 1, total: 1 }, h.value) {
        const O = G.value.length, te = G.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        F.nodes = { resolved: te, total: O };
      }
      if (x.value || S.value) {
        const O = U.value.length, te = U.value.filter(
          (ge) => _.value.has(ge.filename) || ge.is_download_intent
        ).length;
        F.models = { resolved: te, total: O };
      }
      if (F.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const O = m.totalFiles || 1, te = m.completedFiles.length;
        F.applying = { resolved: te, total: O };
      }
      return F;
    });
    function Q(F) {
      $.value = F;
    }
    function ne() {
      const F = R.value.findIndex((O) => O.id === $.value);
      F > 0 && ($.value = R.value[F - 1].id);
    }
    function se() {
      const F = R.value.findIndex((O) => O.id === $.value);
      F < R.value.length - 1 && ($.value = R.value[F + 1].id);
    }
    async function me() {
      p.value = !0, M.value = null;
      try {
        b.value = await f(s.workflowName);
      } catch (F) {
        M.value = F instanceof Error ? F.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function oe() {
      E.value.includes("analysis") || E.value.push("analysis"), h.value ? $.value = "nodes" : x.value || S.value ? $.value = "models" : $.value = "review";
    }
    function ze(F) {
      k.value.set(F, { action: "optional" });
    }
    function pe(F) {
      k.value.set(F, { action: "skip" });
    }
    function et(F, O) {
      var ge;
      const te = G.value.find((Te) => Te.node_type === F);
      (ge = te == null ? void 0 : te.options) != null && ge[O] && k.value.set(F, {
        action: "install",
        package_id: te.options[O].package_id
      });
    }
    function ve(F, O) {
      k.value.set(F, {
        action: "install",
        package_id: O
      });
    }
    function Le(F) {
      k.value.delete(F);
    }
    function lt(F) {
      _.value.set(F, { action: "optional" });
    }
    function Je(F) {
      _.value.set(F, { action: "skip" });
    }
    function j(F, O) {
      var ge;
      const te = P.value.find((Te) => Te.filename === F);
      (ge = te == null ? void 0 : te.options) != null && ge[O] && _.value.set(F, {
        action: "select",
        selected_model: te.options[O].model
      });
    }
    function le(F, O, te) {
      _.value.set(F, {
        action: "download",
        url: O,
        target_path: te
      });
    }
    function fe(F) {
      _.value.delete(F);
    }
    async function _e() {
      L.value = !0, M.value = null, r(), m.phase = "resolving", $.value = "applying";
      try {
        const F = await y(s.workflowName, k.value, _.value);
        F.models_to_download && F.models_to_download.length > 0 && v(s.workflowName, F.models_to_download), m.nodesToInstall = F.nodes_to_install || [], m.phase = "complete", await u(), setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1e3);
      } catch (F) {
        M.value = F instanceof Error ? F.message : "Failed to apply resolution", m.error = M.value, m.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    return we(me), (F, O) => (o(), C(gt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: p.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (te) => i("close"))
    }, {
      body: a(() => [
        p.value && !b.value ? (o(), n("div", yr, [...O[2] || (O[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", wr, [
          g(pl, {
            steps: R.value,
            "current-step": $.value,
            "completed-steps": E.value,
            "step-stats": H.value,
            onStepChange: Q
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (o(), n("div", br, [
            e("div", kr, [
              e("div", _r, [
                O[3] || (O[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", $r, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Cr, [
                e("div", xr, [
                  O[10] || (O[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Sr, [
                    e("div", Ir, [
                      O[4] || (O[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Er, l(b.value.nodes.resolved.length), 1),
                      O[5] || (O[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", Mr, [
                      O[6] || (O[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zr, l(b.value.nodes.ambiguous.length), 1),
                      O[7] || (O[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", Lr, [
                      O[8] || (O[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Tr, l(b.value.nodes.unresolved.length), 1),
                      O[9] || (O[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Rr, [
                  O[19] || (O[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Dr, [
                    e("div", Nr, [
                      O[11] || (O[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Or, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      O[12] || (O[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Ur, [
                      O[13] || (O[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Br, l(b.value.stats.download_intents), 1),
                      O[14] || (O[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Pr, [
                      O[15] || (O[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Vr, l(b.value.models.ambiguous.length), 1),
                      O[16] || (O[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Fr, [
                      O[17] || (O[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ar, l(b.value.models.unresolved.length), 1),
                      O[18] || (O[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              z.value ? (o(), n("div", Wr, [
                O[20] || (O[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Gr, l(G.value.length + P.value.length) + " items need your input", 1)
              ])) : S.value ? (o(), n("div", jr, [
                O[21] || (O[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Kr, [...O[22] || (O[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          $.value === "nodes" ? (o(), C(fi, {
            key: 1,
            nodes: G.value,
            "node-choices": k.value,
            onMarkOptional: ze,
            onSkip: pe,
            onOptionSelected: et,
            onManualEntry: ve,
            onClearChoice: Le
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          $.value === "models" ? (o(), C(ir, {
            key: 2,
            models: U.value,
            "model-choices": _.value,
            onMarkOptional: lt,
            onSkip: Je,
            onOptionSelected: j,
            onDownloadUrl: le,
            onClearChoice: fe
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          $.value === "review" ? (o(), n("div", qr, [
            e("div", Jr, [
              O[27] || (O[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Yr, [
                e("div", Xr, [
                  e("span", Qr, l(V.value), 1),
                  O[23] || (O[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zr, [
                  e("span", ed, l(N.value), 1),
                  O[24] || (O[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", td, [
                  e("span", od, l(X.value), 1),
                  O[25] || (O[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", sd, [
                  e("span", nd, l(B.value), 1),
                  O[26] || (O[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              G.value.length > 0 ? (o(), n("div", ad, [
                e("h4", ld, "Node Packages (" + l(G.value.length) + ")", 1),
                e("div", id, [
                  (o(!0), n(W, null, ee(G.value, (te) => {
                    var ge, Te, Ue, Be;
                    return o(), n("div", {
                      key: te.node_type,
                      class: "review-item"
                    }, [
                      e("code", rd, l(te.node_type), 1),
                      e("div", dd, [
                        k.value.has(te.node_type) ? (o(), n(W, { key: 0 }, [
                          ((ge = k.value.get(te.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), n("span", cd, l((Te = k.value.get(te.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ue = k.value.get(te.node_type)) == null ? void 0 : Ue.action) === "optional" ? (o(), n("span", ud, " Optional ")) : ((Be = k.value.get(te.node_type)) == null ? void 0 : Be.action) === "skip" ? (o(), n("span", md, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", vd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              U.value.length > 0 ? (o(), n("div", fd, [
                e("h4", gd, "Models (" + l(U.value.length) + ")", 1),
                e("div", hd, [
                  (o(!0), n(W, null, ee(U.value, (te) => {
                    var ge, Te, Ue, Be, ht, Pe, pt;
                    return o(), n("div", {
                      key: te.filename,
                      class: "review-item"
                    }, [
                      e("code", pd, l(te.filename), 1),
                      e("div", yd, [
                        _.value.has(te.filename) ? (o(), n(W, { key: 0 }, [
                          ((ge = _.value.get(te.filename)) == null ? void 0 : ge.action) === "select" ? (o(), n("span", wd, l((Ue = (Te = _.value.get(te.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ue.filename), 1)) : ((Be = _.value.get(te.filename)) == null ? void 0 : Be.action) === "download" ? (o(), n("span", bd, " Download ")) : ((ht = _.value.get(te.filename)) == null ? void 0 : ht.action) === "optional" ? (o(), n("span", kd, " Optional ")) : ((Pe = _.value.get(te.filename)) == null ? void 0 : Pe.action) === "skip" ? (o(), n("span", _d, " Skip ")) : ((pt = _.value.get(te.filename)) == null ? void 0 : pt.action) === "cancel_download" ? (o(), n("span", $d, " Cancel Download ")) : c("", !0)
                        ], 64)) : te.is_download_intent ? (o(), n("span", Cd, " Pending Download ")) : (o(), n("span", xd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              G.value.length === 0 && U.value.length === 0 ? (o(), n("div", Sd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          $.value === "applying" ? (o(), C(pr, {
            key: 4,
            progress: ce(m)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        $.value !== "analysis" && $.value !== "applying" ? (o(), C(ie, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: ne
        }, {
          default: a(() => [...O[28] || (O[28] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        O[31] || (O[31] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || ce(m).phase === "complete" || ce(m).phase === "error" ? (o(), C(ie, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (te) => i("close"))
        }, {
          default: a(() => [
            w(l(ce(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        $.value === "analysis" ? (o(), C(ie, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: oe
        }, {
          default: a(() => [
            w(l(z.value || S.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        $.value === "nodes" ? (o(), C(ie, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [
            w(l(x.value || S.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        $.value === "models" ? (o(), C(ie, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: a(() => [...O[29] || (O[29] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        $.value === "review" ? (o(), C(ie, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: _e
        }, {
          default: a(() => [...O[30] || (O[30] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ed = /* @__PURE__ */ J(Id, [["__scopeId", "data-v-08beb8e3"]]), Md = { class: "search-input-wrapper" }, zd = ["value", "placeholder"], Ld = /* @__PURE__ */ q({
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
    const s = t, i = d, f = I(null);
    let y;
    function v(r) {
      const u = r.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        i("update:modelValue", u);
      }, s.debounce)) : i("update:modelValue", u);
    }
    function m() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = f.value) == null || r.focus();
    }
    return we(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (r, u) => (o(), n("div", Md, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: Ge(m, ["escape"])
      }, null, 40, zd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Td = /* @__PURE__ */ J(Ld, [["__scopeId", "data-v-266f857a"]]), Rd = { class: "search-bar" }, Dd = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Rd, [
      g(Td, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => d.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ J(Dd, [["__scopeId", "data-v-3d51bbfd"]]), Nd = { class: "section-group" }, Od = {
  key: 0,
  class: "section-content"
}, Ud = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = I(s.initiallyExpanded);
    function y() {
      s.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (v, m) => (o(), n("section", Nd, [
      g(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: y
      }, {
        default: a(() => [
          w(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", Od, [
        re(v.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ J(Ud, [["__scopeId", "data-v-c48e33ed"]]), Bd = { class: "item-header" }, Pd = {
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
}, jd = /* @__PURE__ */ q({
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
      class: Z(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: y[0] || (y[0] = (v) => t.clickable && f.$emit("click"))
    }, [
      e("div", Bd, [
        f.$slots.icon ? (o(), n("span", Pd, [
          re(f.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Vd, [
          f.$slots.title ? (o(), n("div", Fd, [
            re(f.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          f.$slots.subtitle ? (o(), n("div", Ad, [
            re(f.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", Wd, [
        re(f.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      f.$slots.actions ? (o(), n("div", Gd, [
        re(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ J(jd, [["__scopeId", "data-v-cc435e0e"]]), Hd = { class: "loading-state" }, Kd = { class: "loading-message" }, qd = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Hd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Kd, l(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ J(qd, [["__scopeId", "data-v-ad8436c9"]]), Jd = { class: "error-state" }, Yd = { class: "error-message" }, Xd = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Jd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Yd, l(t.message), 1),
      t.retry ? (o(), C(Y, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ J(Xd, [["__scopeId", "data-v-5397be48"]]), Qd = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const i = s, { getWorkflows: f } = $e(), y = I([]), v = I(!1), m = I(null), r = I(""), u = I(!0), b = I(!1), p = I(!1), L = I(!1), M = I(null), $ = D(
      () => y.value.filter((B) => B.status === "broken")
    ), E = D(
      () => y.value.filter((B) => B.status === "new")
    ), k = D(
      () => y.value.filter((B) => B.status === "modified")
    ), _ = D(
      () => y.value.filter((B) => B.status === "synced")
    ), R = D(() => {
      if (!r.value.trim()) return y.value;
      const B = r.value.toLowerCase();
      return y.value.filter((H) => H.name.toLowerCase().includes(B));
    }), z = D(
      () => $.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), h = D(
      () => E.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = D(
      () => k.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), S = D(
      () => _.value.filter(
        (B) => !r.value.trim() || B.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = D(
      () => b.value ? S.value : S.value.slice(0, 5)
    );
    async function G(B = !1) {
      v.value = !0, m.value = null;
      try {
        y.value = await f(B);
      } catch (H) {
        m.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        v.value = !1;
      }
    }
    d({ loadWorkflows: G });
    function P(B) {
      M.value = B, p.value = !0;
    }
    function U(B) {
      M.value = B, L.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function N() {
      i("refresh");
    }
    function X(B) {
      const H = [];
      return B.missing_nodes > 0 && H.push(`${B.missing_nodes} missing node${B.missing_nodes > 1 ? "s" : ""}`), B.missing_models > 0 && H.push(`${B.missing_models} missing model${B.missing_models > 1 ? "s" : ""}`), B.pending_downloads && B.pending_downloads > 0 && H.push(`${B.pending_downloads} pending download${B.pending_downloads > 1 ? "s" : ""}`), H.length > 0 ? H.join(", ") : "Has issues";
    }
    return we(G), (B, H) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, { title: "WORKFLOWS" }, {
            actions: a(() => [
              $.value.length > 0 ? (o(), C(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: a(() => [...H[8] || (H[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          g(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": H[0] || (H[0] = (Q) => r.value = Q),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), C(He, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), C(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            z.value.length ? (o(), C(ke, {
              key: 0,
              title: "BROKEN",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(z.value, (Q) => (o(), C(Ce, {
                  key: Q.name,
                  status: "broken"
                }, {
                  icon: a(() => [...H[9] || (H[9] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(X(Q)), 1)
                  ]),
                  actions: a(() => [
                    g(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => U(Q.name)
                    }, {
                      default: a(() => [...H[10] || (H[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => P(Q.name)
                    }, {
                      default: a(() => [...H[11] || (H[11] = [
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
            h.value.length ? (o(), C(ke, {
              key: 1,
              title: "NEW",
              count: h.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(h.value, (Q) => (o(), C(Ce, {
                  key: Q.name,
                  status: "new"
                }, {
                  icon: a(() => [...H[12] || (H[12] = [
                    w("●", -1)
                  ])]),
                  title: a(() => [
                    w(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [...H[13] || (H[13] = [
                    w("New", -1)
                  ])]),
                  actions: a(() => [
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => P(Q.name)
                    }, {
                      default: a(() => [...H[14] || (H[14] = [
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
            x.value.length ? (o(), C(ke, {
              key: 2,
              title: "MODIFIED",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(x.value, (Q) => (o(), C(Ce, {
                  key: Q.name,
                  status: "modified"
                }, {
                  icon: a(() => [...H[15] || (H[15] = [
                    w("⚡", -1)
                  ])]),
                  title: a(() => [
                    w(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [...H[16] || (H[16] = [
                    w("Modified", -1)
                  ])]),
                  actions: a(() => [
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => P(Q.name)
                    }, {
                      default: a(() => [...H[17] || (H[17] = [
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
            S.value.length ? (o(), C(ke, {
              key: 3,
              title: "SYNCED",
              count: S.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: H[2] || (H[2] = (Q) => u.value = Q)
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(K.value, (Q) => (o(), C(Ce, {
                  key: Q.name,
                  status: "synced"
                }, {
                  icon: a(() => [...H[18] || (H[18] = [
                    w("✓", -1)
                  ])]),
                  title: a(() => [
                    w(l(Q.name), 1)
                  ]),
                  subtitle: a(() => [...H[19] || (H[19] = [
                    w("Synced", -1)
                  ])]),
                  actions: a(() => [
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => P(Q.name)
                    }, {
                      default: a(() => [...H[20] || (H[20] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && S.value.length > 5 ? (o(), C(Y, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: H[1] || (H[1] = (Q) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    w(" View all " + l(S.value.length) + " → ", 1)
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
      p.value && M.value ? (o(), C(nl, {
        key: 0,
        "workflow-name": M.value,
        onClose: H[3] || (H[3] = (Q) => p.value = !1),
        onResolve: H[4] || (H[4] = (Q) => U(M.value)),
        onRefresh: H[5] || (H[5] = (Q) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      L.value && M.value ? (o(), C(Ed, {
        key: 1,
        "workflow-name": M.value,
        onClose: H[6] || (H[6] = (Q) => L.value = !1),
        onInstall: N,
        onRefresh: H[7] || (H[7] = (Q) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Zd = /* @__PURE__ */ J(Qd, [["__scopeId", "data-v-af6b1cd7"]]), ec = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: Z(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ J(ec, [["__scopeId", "data-v-ccb7816e"]]), tc = {
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
}, Tc = /* @__PURE__ */ q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, { getModelDetails: i, updateModelSource: f, openFileLocation: y } = $e(), v = I(null), m = I(!0), r = I(null), u = I(""), b = I(!1), p = I(null), L = I(null), M = I(null);
    let $ = null;
    function E(x, S = "success", K = 2e3) {
      $ && clearTimeout($), M.value = { message: x, type: S }, $ = setTimeout(() => {
        M.value = null;
      }, K);
    }
    function k(x) {
      if (!x) return "Unknown";
      const S = 1024 * 1024 * 1024, K = 1024 * 1024;
      return x >= S ? `${(x / S).toFixed(1)} GB` : x >= K ? `${(x / K).toFixed(0)} MB` : `${(x / 1024).toFixed(0)} KB`;
    }
    function _(x) {
      navigator.clipboard.writeText(x), E("Copied to clipboard!");
    }
    async function R(x) {
      try {
        await y(x), E("Opening file location...");
      } catch {
        E("Failed to open location", "error");
      }
    }
    async function z() {
      if (!(!u.value.trim() || !v.value)) {
        b.value = !0, p.value = null, L.value = null;
        try {
          await f(v.value.hash, u.value.trim()), L.value = "Source added successfully!", u.value = "", await h();
        } catch (x) {
          p.value = x instanceof Error ? x.message : "Failed to add source";
        } finally {
          b.value = !1;
        }
      }
    }
    async function h() {
      m.value = !0, r.value = null;
      try {
        v.value = await i(s.identifier);
      } catch (x) {
        r.value = x instanceof Error ? x.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return we(h), (x, S) => {
      var K;
      return o(), n(W, null, [
        g(gt, {
          title: `Model Details: ${((K = v.value) == null ? void 0 : K.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: r.value,
          onClose: S[5] || (S[5] = (G) => x.$emit("close"))
        }, {
          body: a(() => {
            var G, P, U, V;
            return [
              v.value ? (o(), n("div", tc, [
                e("section", oc, [
                  e("div", sc, [
                    S[6] || (S[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", nc, l(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (N) => _(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ac, [
                    S[7] || (S[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", lc, l(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (N) => _(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ic, [
                    S[8] || (S[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", rc, l(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (N) => _(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", dc, [
                    S[9] || (S[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", cc, l(k(v.value.size)), 1)
                  ]),
                  e("div", uc, [
                    S[10] || (S[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", mc, l(v.value.category), 1)
                  ]),
                  e("div", vc, [
                    S[11] || (S[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", fc, l(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", gc, [
                  e("h4", hc, "Locations (" + l(((G = v.value.locations) == null ? void 0 : G.length) || 0) + ")", 1),
                  (P = v.value.locations) != null && P.length ? (o(), n("div", pc, [
                    (o(!0), n(W, null, ee(v.value.locations, (N, X) => (o(), n("div", {
                      key: X,
                      class: "location-item"
                    }, [
                      e("span", yc, l(N.path), 1),
                      N.modified ? (o(), n("span", wc, "Modified: " + l(N.modified), 1)) : c("", !0),
                      N.path ? (o(), n("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (B) => R(N.path)
                      }, " Open File Location ", 8, bc)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), n("div", kc, "No locations found"))
                ]),
                e("section", _c, [
                  e("h4", $c, "Download Sources (" + l(((U = v.value.sources) == null ? void 0 : U.length) || 0) + ")", 1),
                  (V = v.value.sources) != null && V.length ? (o(), n("div", Cc, [
                    (o(!0), n(W, null, ee(v.value.sources, (N, X) => (o(), n("div", {
                      key: X,
                      class: "source-item"
                    }, [
                      e("span", xc, l(N.type) + ":", 1),
                      e("a", {
                        href: N.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(N.url), 9, Sc)
                    ]))), 128))
                  ])) : (o(), n("div", Ic, " No download sources configured ")),
                  e("div", Ec, [
                    io(e("input", {
                      "onUpdate:modelValue": S[3] || (S[3] = (N) => u.value = N),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ro, u.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !u.value.trim() || b.value,
                      onClick: z
                    }, l(b.value ? "Adding..." : "Add Source"), 9, Mc)
                  ]),
                  p.value ? (o(), n("p", zc, l(p.value), 1)) : c("", !0),
                  L.value ? (o(), n("p", Lc, l(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: S[4] || (S[4] = (G) => x.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), C(Me, { to: "body" }, [
          M.value ? (o(), n("div", {
            key: 0,
            class: Z(["toast", M.value.type])
          }, l(M.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Ht = /* @__PURE__ */ J(Tc, [["__scopeId", "data-v-698be6a2"]]), Rc = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: i, getStatus: f } = $e(), y = I([]), v = I([]), m = I("production"), r = I(!1), u = I(null), b = I(""), p = I(!1), L = I(null);
    function M() {
      p.value = !1, s("navigate", "model-index");
    }
    const $ = D(
      () => y.value.reduce((K, G) => K + (G.size || 0), 0)
    ), E = D(() => {
      if (!b.value.trim()) return y.value;
      const K = b.value.toLowerCase();
      return y.value.filter((G) => G.filename.toLowerCase().includes(K));
    }), k = D(() => {
      if (!b.value.trim()) return v.value;
      const K = b.value.toLowerCase();
      return v.value.filter((G) => G.filename.toLowerCase().includes(K));
    }), _ = D(() => {
      const K = {};
      for (const P of E.value) {
        const U = P.type || "other";
        K[U] || (K[U] = []), K[U].push(P);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(K).sort(([P], [U]) => {
        const V = G.indexOf(P), N = G.indexOf(U);
        return V >= 0 && N >= 0 ? V - N : V >= 0 ? -1 : N >= 0 ? 1 : P.localeCompare(U);
      }).map(([P, U]) => ({ type: P, models: U }));
    });
    function R(K) {
      if (!K) return "Unknown";
      const G = K / (1024 * 1024);
      return G >= 1024 ? `${(G / 1024).toFixed(1)} GB` : `${G.toFixed(0)} MB`;
    }
    function z(K) {
      L.value = K.hash || K.filename;
    }
    function h(K) {
      s("navigate", "model-index");
    }
    function x(K) {
      alert(`Download functionality not yet implemented for ${K}`);
    }
    async function S() {
      r.value = !0, u.value = null;
      try {
        const K = await i();
        y.value = K, v.value = [];
        const G = await f();
        m.value = G.environment || "production";
      } catch (K) {
        u.value = K instanceof Error ? K.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return we(S), (K, G) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (P) => p.value = !0)
          })
        ]),
        search: a(() => [
          g(nt, {
            modelValue: b.value,
            "onUpdate:modelValue": G[1] || (G[1] = (P) => b.value = P),
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
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            y.value.length ? (o(), C(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.length) + " models • " + l(R($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), n(W, null, ee(_.value, (P) => (o(), C(ke, {
              key: P.type,
              title: P.type.toUpperCase(),
              count: P.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(P.models, (U) => (o(), C(Ce, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...G[4] || (G[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(R(U.size)), 1)
                  ]),
                  details: a(() => [
                    g(he, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(he, {
                      label: "Path:",
                      value: U.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => z(U)
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
            k.value.length ? (o(), C(ke, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(k.value, (P) => (o(), C(Ce, {
                  key: P.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...G[6] || (G[6] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(P.filename), 1)
                  ]),
                  subtitle: a(() => [...G[7] || (G[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var U;
                    return [
                      g(he, {
                        label: "Required by:",
                        value: ((U = P.workflow_names) == null ? void 0 : U.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    g(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => x(P.filename)
                    }, {
                      default: a(() => [...G[8] || (G[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => h(P.filename)
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
            !E.value.length && !k.value.length ? (o(), C(Oe, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: p.value,
        title: "About Environment Models",
        onClose: G[2] || (G[2] = (P) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            G[10] || (G[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            G[11] || (G[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          g(Y, {
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
      L.value ? (o(), C(Ht, {
        key: 0,
        identifier: L.value,
        onClose: G[3] || (G[3] = (P) => L.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Dc = /* @__PURE__ */ J(Rc, [["__scopeId", "data-v-cb4f12b3"]]), Nc = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: d } = $e(), s = I([]), i = I(!1), f = I(null), y = I(""), v = I(!1), m = I(null), r = D(
      () => s.value.reduce((_, R) => _ + (R.size || 0), 0)
    ), u = D(() => {
      if (!y.value.trim()) return s.value;
      const _ = y.value.toLowerCase();
      return s.value.filter((R) => {
        const z = R, h = R.sha256 || z.sha256_hash || "";
        return R.filename.toLowerCase().includes(_) || h.toLowerCase().includes(_);
      });
    }), b = D(() => {
      const _ = {};
      for (const z of u.value) {
        const h = z.type || "other";
        _[h] || (_[h] = []), _[h].push(z);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(_).sort(([z], [h]) => {
        const x = R.indexOf(z), S = R.indexOf(h);
        return x >= 0 && S >= 0 ? x - S : x >= 0 ? -1 : S >= 0 ? 1 : z.localeCompare(h);
      }).map(([z, h]) => ({ type: z, models: h }));
    });
    function p(_) {
      if (!_) return "Unknown";
      const R = 1024 * 1024 * 1024, z = 1024 * 1024;
      return _ >= R ? `${(_ / R).toFixed(1)} GB` : _ >= z ? `${(_ / z).toFixed(0)} MB` : `${(_ / 1024).toFixed(0)} KB`;
    }
    function L(_) {
      m.value = _.hash || _.filename;
    }
    function M() {
      alert("Scan for models not yet implemented");
    }
    function $() {
      alert("Change directory not yet implemented");
    }
    function E() {
      alert("Download new model not yet implemented");
    }
    async function k() {
      i.value = !0, f.value = null;
      try {
        s.value = await d();
      } catch (_) {
        f.value = _ instanceof Error ? _.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return we(k), (_, R) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: R[0] || (R[0] = (z) => v.value = !0)
          }, {
            actions: a(() => [
              g(Y, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...R[4] || (R[4] = [
                  w(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              g(Y, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...R[5] || (R[5] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(Y, {
                variant: "primary",
                size: "sm",
                onClick: E
              }, {
                default: a(() => [...R[6] || (R[6] = [
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
          g(nt, {
            modelValue: y.value,
            "onUpdate:modelValue": R[1] || (R[1] = (z) => y.value = z),
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
            onRetry: k
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length ? (o(), C(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(s.value.length) + " models • " + l(p(r.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), n(W, null, ee(b.value, (z) => (o(), C(ke, {
              key: z.type,
              title: z.type.toUpperCase(),
              count: z.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(z.models, (h) => (o(), C(Ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[7] || (R[7] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(p(h.size)), 1)
                  ]),
                  details: a(() => [
                    g(he, {
                      label: "Hash:",
                      value: h.hash ? h.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    g(Y, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (x) => L(h)
                    }, {
                      default: a(() => [...R[8] || (R[8] = [
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
            u.value.length ? c("", !0) : (o(), C(Oe, {
              key: 1,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: R[2] || (R[2] = (z) => v.value = !1)
      }, {
        content: a(() => [...R[9] || (R[9] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      m.value ? (o(), C(Ht, {
        key: 0,
        identifier: m.value,
        onClose: R[3] || (R[3] = (z) => m.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Oc = /* @__PURE__ */ J(Nc, [["__scopeId", "data-v-db08e859"]]), Uc = { key: 0 }, Bc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Pc = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Vc = /* @__PURE__ */ q({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: i, uninstallNode: f } = $e(), y = I({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = I(!1), m = I(null), r = I(""), u = I(!1), b = D(() => {
      if (!r.value.trim()) return y.value.nodes;
      const h = r.value.toLowerCase();
      return y.value.nodes.filter(
        (x) => {
          var S, K;
          return x.name.toLowerCase().includes(h) || ((S = x.description) == null ? void 0 : S.toLowerCase().includes(h)) || ((K = x.repository) == null ? void 0 : K.toLowerCase().includes(h));
        }
      );
    }), p = D(
      () => b.value.filter((h) => h.installed)
    ), L = D(
      () => b.value.filter((h) => !h.installed)
    );
    function M(h) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[h] || h;
    }
    function $(h) {
      return !h.used_in_workflows || h.used_in_workflows.length === 0 ? "Not used in any workflows" : h.used_in_workflows.length === 1 ? h.used_in_workflows[0] : `${h.used_in_workflows.length} workflows`;
    }
    function E(h) {
      window.open(h, "_blank");
    }
    async function k(h) {
      if (confirm(`Install node "${h}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const x = await s(h);
          x.status === "success" ? (alert(`Node "${h}" installed successfully!`), await z()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function _(h) {
      if (confirm(`Check for updates for "${h}"?`))
        try {
          v.value = !0;
          const x = await i(h);
          x.status === "success" ? (alert(`Node "${h}" is up to date or has been updated!`), await z()) : alert(`Update check failed: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error checking for updates: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function R(h) {
      if (confirm(`Uninstall node "${h}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const x = await f(h);
          x.status === "success" ? (alert(`Node "${h}" uninstalled successfully!`), await z()) : alert(`Failed to uninstall node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error uninstalling node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function z() {
      v.value = !0, m.value = null;
      try {
        y.value = await d();
      } catch (h) {
        m.value = h instanceof Error ? h.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return we(z), (h, x) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (S) => u.value = !0)
          })
        ]),
        search: a(() => [
          g(nt, {
            modelValue: r.value,
            "onUpdate:modelValue": x[1] || (x[1] = (S) => r.value = S),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), C(He, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : m.value ? (o(), C(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            y.value.total_count ? (o(), C(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), C(ke, {
              key: 1,
              title: "INSTALLED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(p.value, (S) => (o(), C(Ce, {
                  key: S.name,
                  status: "synced"
                }, {
                  icon: a(() => [...x[4] || (x[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(S.name), 1)
                  ]),
                  subtitle: a(() => [
                    S.version ? (o(), n("span", Uc, "v" + l(S.version), 1)) : (o(), n("span", Bc, "version unknown")),
                    S.source ? (o(), n("span", Pc, " • " + l(M(S.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    S.description ? (o(), C(he, {
                      key: 0,
                      label: "Description:",
                      value: S.description
                    }, null, 8, ["value"])) : c("", !0),
                    S.repository ? (o(), C(he, {
                      key: 1,
                      label: "Repository:",
                      value: S.repository
                    }, null, 8, ["value"])) : c("", !0),
                    g(he, {
                      label: "Used by:",
                      value: $(S)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    S.repository ? (o(), C(Y, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => E(S.repository)
                    }, {
                      default: a(() => [...x[5] || (x[5] = [
                        w(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    S.source === "registry" ? (o(), C(Y, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => _(S.name)
                    }, {
                      default: a(() => [...x[6] || (x[6] = [
                        w(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    S.source !== "unknown" ? (o(), C(Y, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (K) => R(S.name)
                    }, {
                      default: a(() => [...x[7] || (x[7] = [
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
            L.value.length ? (o(), C(ke, {
              key: 2,
              title: "MISSING",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(L.value, (S) => (o(), C(Ce, {
                  key: S.name,
                  status: "missing"
                }, {
                  icon: a(() => [...x[8] || (x[8] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(S.name), 1)
                  ]),
                  subtitle: a(() => [...x[9] || (x[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    S.description ? (o(), C(he, {
                      key: 0,
                      label: "Description:",
                      value: S.description
                    }, null, 8, ["value"])) : c("", !0),
                    S.repository ? (o(), C(he, {
                      key: 1,
                      label: "Repository:",
                      value: S.repository
                    }, null, 8, ["value"])) : c("", !0),
                    g(he, {
                      label: "Required by:",
                      value: $(S)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    S.download_url ? (o(), C(Y, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => k(S.name)
                    }, {
                      default: a(() => [...x[10] || (x[10] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    S.repository ? (o(), C(Y, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => E(S.repository)
                    }, {
                      default: a(() => [...x[11] || (x[11] = [
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
            !p.value.length && !L.value.length ? (o(), C(Oe, {
              key: 3,
              icon: "📭",
              message: r.value ? `No nodes match '${r.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: u.value,
        title: "About Git-Tracked Nodes",
        onClose: x[3] || (x[3] = (S) => u.value = !1)
      }, {
        content: a(() => [...x[12] || (x[12] = [
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
          g(Y, {
            variant: "primary",
            onClick: x[2] || (x[2] = (S) => u.value = !1)
          }, {
            default: a(() => [...x[13] || (x[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fc = /* @__PURE__ */ J(Vc, [["__scopeId", "data-v-c480e2c1"]]), Ac = { class: "remote-url-display" }, Wc = ["title"], Gc = ["title"], jc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Hc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Kc = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = I(!1), i = D(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), v = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${v}`;
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
    return (y, v) => (o(), n("div", Ac, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(i.value), 9, Wc),
      e("button", {
        class: Z(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Hc, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", jc, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Gc)
    ]));
  }
}), Ot = /* @__PURE__ */ J(Kc, [["__scopeId", "data-v-7768a58d"]]), qc = { class: "remote-title" }, Jc = {
  key: 0,
  class: "default-badge"
}, Yc = {
  key: 1,
  class: "sync-badge"
}, Xc = {
  key: 0,
  class: "ahead"
}, Qc = {
  key: 1,
  class: "behind"
}, Zc = {
  key: 0,
  class: "tracking-info"
}, eu = /* @__PURE__ */ q({
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
    function v(m) {
      const r = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const L = Math.floor(p / 60);
      if (L < 24) return `${L}h ago`;
      const M = Math.floor(L / 24);
      return M < 7 ? `${M}d ago` : r.toLocaleDateString();
    }
    return (m, r) => (o(), C(Ce, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", qc, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", Jc, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", Yc, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Xc, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Qc, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", Zc, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var u;
        return [
          g(he, { label: "Fetch:" }, {
            default: a(() => [
              g(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), C(he, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              g(Ot, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (u = t.syncStatus) != null && u.last_fetch ? (o(), C(he, {
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
        g(Y, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: r[0] || (r[0] = (u) => m.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...r[3] || (r[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(Y, {
          variant: "secondary",
          size: "xs",
          onClick: r[1] || (r[1] = (u) => m.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...r[4] || (r[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (o(), C(Y, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: r[2] || (r[2] = (u) => m.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...r[5] || (r[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), tu = /* @__PURE__ */ J(eu, [["__scopeId", "data-v-17362e45"]]), ou = ["for"], su = {
  key: 0,
  class: "base-form-field-required"
}, nu = { class: "base-form-field-input" }, au = {
  key: 1,
  class: "base-form-field-error"
}, lu = {
  key: 2,
  class: "base-form-field-hint"
}, iu = /* @__PURE__ */ q({
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
      class: Z(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        w(l(t.label) + " ", 1),
        t.required ? (o(), n("span", su, "*")) : c("", !0)
      ], 8, ou)) : c("", !0),
      e("div", nu, [
        re(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", au, l(t.error), 1)) : t.hint ? (o(), n("span", lu, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ J(iu, [["__scopeId", "data-v-9a1cf296"]]), ru = { class: "remote-form" }, du = { class: "form-header" }, cu = { class: "form-body" }, uu = {
  key: 0,
  class: "form-error"
}, mu = { class: "form-actions" }, vu = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, i = d, f = I({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = I(!1), v = I(null);
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
        v.value = null, y.value = !0;
        try {
          i("submit", f.value);
        } catch (u) {
          v.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (u, b) => (o(), n("div", ru, [
      e("div", du, [
        g(Ee, null, {
          default: a(() => [
            w(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", cu, [
        g($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            g(qe, {
              modelValue: f.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => f.value.name = p),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            g(qe, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => f.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            g(qe, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (p) => f.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), n("div", uu, l(v.value), 1)) : c("", !0)
      ]),
      e("div", mu, [
        g(Y, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: r
        }, {
          default: a(() => [
            w(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(Y, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => u.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), fu = /* @__PURE__ */ J(vu, [["__scopeId", "data-v-56021b18"]]), gu = { key: 0 }, hu = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: v
    } = $e(), m = I([]), r = I(null), u = I({}), b = I(!1), p = I(null), L = I(""), M = I(!1), $ = I(null), E = I(!1), k = I("add"), _ = I({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = D(() => {
      if (!L.value.trim()) return m.value;
      const N = L.value.toLowerCase();
      return m.value.filter(
        (X) => X.name.toLowerCase().includes(N) || X.fetch_url.toLowerCase().includes(N) || X.push_url.toLowerCase().includes(N)
      );
    });
    function z(N) {
      var X;
      return ((X = r.value) == null ? void 0 : X.remote) === N;
    }
    async function h() {
      b.value = !0, p.value = null;
      try {
        const N = await d();
        m.value = N.remotes, r.value = N.current_branch_tracking || null, await Promise.all(
          N.remotes.map(async (X) => {
            const B = await v(X.name);
            B && (u.value[X.name] = B);
          })
        );
      } catch (N) {
        p.value = N instanceof Error ? N.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function x() {
      k.value = "add", _.value = { name: "", fetchUrl: "", pushUrl: "" }, E.value = !0;
    }
    function S(N) {
      const X = m.value.find((B) => B.name === N);
      X && (k.value = "edit", _.value = {
        name: X.name,
        fetchUrl: X.fetch_url,
        pushUrl: X.push_url
      }, E.value = !0);
    }
    async function K(N) {
      try {
        k.value === "add" ? await s(N.name, N.fetchUrl) : await f(N.name, N.fetchUrl, N.pushUrl || void 0), E.value = !1, await h();
      } catch (X) {
        p.value = X instanceof Error ? X.message : "Operation failed";
      }
    }
    function G() {
      E.value = !1, _.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function P(N) {
      $.value = N;
      try {
        await y(N);
        const X = await v(N);
        X && (u.value[N] = X);
      } catch (X) {
        p.value = X instanceof Error ? X.message : "Fetch failed";
      } finally {
        $.value = null;
      }
    }
    async function U(N) {
      if (confirm(`Remove remote "${N}"?`))
        try {
          await i(N), await h();
        } catch (X) {
          p.value = X instanceof Error ? X.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return we(h), (N, X) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (B) => M.value = !0)
          }, {
            actions: a(() => [
              E.value ? c("", !0) : (o(), C(Y, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: a(() => [...X[3] || (X[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          E.value ? c("", !0) : (o(), C(nt, {
            key: 0,
            modelValue: L.value,
            "onUpdate:modelValue": X[1] || (X[1] = (B) => L.value = B),
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
            onRetry: h
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            E.value ? (o(), C(fu, {
              key: 0,
              mode: k.value,
              "remote-name": _.value.name,
              "fetch-url": _.value.fetchUrl,
              "push-url": _.value.pushUrl,
              onSubmit: K,
              onCancel: G
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !E.value ? (o(), C(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                r.value ? (o(), n("span", gu, " • Tracking: " + l(r.value.remote) + "/" + l(r.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            R.value.length && !E.value ? (o(), C(ke, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(W, null, ee(R.value, (B) => {
                  var H;
                  return o(), C(tu, {
                    key: B.name,
                    remote: B,
                    "sync-status": u.value[B.name],
                    "tracking-branch": z(B.name) ? (H = r.value) == null ? void 0 : H.branch : void 0,
                    "fetching-remote": $.value,
                    onFetch: P,
                    onEdit: S,
                    onRemove: U
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !R.value.length && !E.value ? (o(), C(Oe, {
              key: 3,
              icon: "🌐",
              message: L.value ? `No remotes match '${L.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                g(Y, {
                  variant: "primary",
                  onClick: x
                }, {
                  default: a(() => [...X[4] || (X[4] = [
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
      g(je, {
        show: M.value,
        title: "About Git Remotes",
        onClose: X[2] || (X[2] = (B) => M.value = !1)
      }, {
        content: a(() => [...X[5] || (X[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          g(Y, {
            variant: "link",
            onClick: V
          }, {
            default: a(() => [...X[6] || (X[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), pu = /* @__PURE__ */ J(hu, [["__scopeId", "data-v-a75719bb"]]), yu = { class: "setting-info" }, wu = { class: "setting-label" }, bu = {
  key: 0,
  class: "required-marker"
}, ku = {
  key: 0,
  class: "setting-description"
}, _u = { class: "setting-control" }, $u = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: Z(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", yu, [
        e("div", wu, [
          w(l(t.label) + " ", 1),
          t.required ? (o(), n("span", bu, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", ku, l(t.description), 1)) : c("", !0)
      ]),
      e("div", _u, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ J($u, [["__scopeId", "data-v-cb5d236c"]]), Cu = { class: "toggle" }, xu = ["checked", "disabled"], Su = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Cu, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, xu),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qe = /* @__PURE__ */ J(Su, [["__scopeId", "data-v-71c0f550"]]), Iu = { class: "settings-section" }, Eu = { class: "path-setting" }, Mu = { class: "path-value" }, zu = { class: "path-setting" }, Lu = { class: "path-value" }, Tu = { class: "settings-section" }, Ru = { class: "settings-section" }, Du = { class: "settings-section" }, Nu = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = $e(), i = I(!1), f = I(null), y = I(null), v = I(null), m = I(null), r = I(""), u = I(""), b = I(!0), p = I(!0), L = I(!1), M = D(() => m.value ? r.value !== (m.value.civitai_api_key || "") : !1);
    async function $() {
      i.value = !0, f.value = null;
      try {
        v.value = await d(), m.value = { ...v.value }, r.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", b.value = v.value.auto_sync_models, p.value = v.value.confirm_destructive;
        const R = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        L.value = R === "true";
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function E() {
      var R;
      y.value = null;
      try {
        const z = {};
        r.value !== (((R = m.value) == null ? void 0 : R.civitai_api_key) || "") && (z.civitai_api_key = r.value || null), await s(z), await $(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (z) {
        y.value = {
          type: "error",
          message: z instanceof Error ? z.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (r.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, p.value = m.value.confirm_destructive, y.value = null);
    }
    function _(R) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(R)), console.log("[ComfyGit] Auto-refresh setting saved:", R);
    }
    return we($), (R, z) => (o(), C(xe, null, {
      header: a(() => [
        g(Se, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            g(Y, {
              variant: "primary",
              size: "sm",
              disabled: !M.value,
              onClick: E
            }, {
              default: a(() => [...z[5] || (z[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            M.value ? (o(), C(Y, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...z[6] || (z[6] = [
                w(" Reset ", -1)
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
          onRetry: $
        }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
          g(ke, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var h, x;
              return [
                e("div", Iu, [
                  e("div", Eu, [
                    z[7] || (z[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    z[8] || (z[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Mu, l(((h = v.value) == null ? void 0 : h.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", zu, [
                    z[9] || (z[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    z[10] || (z[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Lu, l(((x = v.value) == null ? void 0 : x.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(ke, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Tu, [
                g(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    g(ft, {
                      modelValue: r.value,
                      "onUpdate:modelValue": z[0] || (z[0] = (h) => r.value = h),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    g(ft, {
                      modelValue: u.value,
                      "onUpdate:modelValue": z[1] || (z[1] = (h) => u.value = h),
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
          g(ke, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Ru, [
                g(We, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    g(Qe, {
                      modelValue: L.value,
                      "onUpdate:modelValue": [
                        z[2] || (z[2] = (h) => L.value = h),
                        _
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(ke, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Du, [
                g(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    g(Qe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": z[3] || (z[3] = (h) => b.value = h),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    g(Qe, {
                      modelValue: p.value,
                      "onUpdate:modelValue": z[4] || (z[4] = (h) => p.value = h),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), C(at, {
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
}), Ou = /* @__PURE__ */ J(Nu, [["__scopeId", "data-v-7861bd35"]]), Uu = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = $e(), s = I([]), i = I(!1), f = I(null), y = I(!1), v = I(null), m = D(() => s.value.length === 0 ? [] : s.value.map((u) => ({
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
          (u = v.value) != null && u.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(r), (u, b) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => y.value = !0)
          }, {
            actions: a(() => [
              g(Y, {
                variant: "secondary",
                size: "sm",
                onClick: r,
                disabled: i.value
              }, {
                default: a(() => [
                  w(l(i.value ? "Loading..." : "Refresh"), 1)
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
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
            s.value.length === 0 ? (o(), C(Oe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), n(W, null, ee(m.value, (p, L) => (o(), n("div", {
                key: L,
                class: Z(`log-line log-level-${p.level.toLowerCase()}`)
              }, l(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
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
          g(Y, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => y.value = !1)
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
}), Bu = /* @__PURE__ */ J(Uu, [["__scopeId", "data-v-39f6a756"]]), Pu = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = $e(), i = I([]), f = I(!1), y = I(null), v = I(!1), m = I("production"), r = I(null), u = D(() => i.value.length === 0 ? [] : i.value.map((p) => ({
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
    return we(b), (p, L) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (M) => v.value = !0)
          }, {
            actions: a(() => [
              g(Y, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: f.value
              }, {
                default: a(() => [
                  w(l(f.value ? "Loading..." : "Refresh"), 1)
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
          })) : y.value ? (o(), C(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
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
              (o(!0), n(W, null, ee(u.value, (M, $) => (o(), n("div", {
                key: $,
                class: Z(`log-line log-level-${M.level.toLowerCase()}`)
              }, l(M.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: v.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (M) => v.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            L[3] || (L[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            L[4] || (L[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          L[5] || (L[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          L[6] || (L[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          g(Y, {
            variant: "primary",
            onClick: L[1] || (L[1] = (M) => v.value = !1)
          }, {
            default: a(() => [...L[7] || (L[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vu = /* @__PURE__ */ J(Pu, [["__scopeId", "data-v-4f1e6f72"]]), Fu = { class: "env-title" }, Au = {
  key: 0,
  class: "current-badge"
}, Wu = {
  key: 0,
  class: "branch-info"
}, Gu = /* @__PURE__ */ q({
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
    return (d, s) => (o(), C(Ce, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Fu, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Au, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Wu, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        g(he, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        g(he, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        g(he, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), C(he, {
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
}), ju = /* @__PURE__ */ J(Gu, [["__scopeId", "data-v-5238e57c"]]), Hu = {
  key: 0,
  class: "create-form"
}, Ku = { class: "create-form__header" }, qu = { class: "create-form__body" }, Ju = { class: "create-form__actions" }, Yu = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Xu = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: i } = $e(), f = I([]), y = I(!1), v = I(null), m = I(""), r = I(!1), u = I(!1), b = I(""), p = D(
      () => f.value.find((z) => z.is_current)
    ), L = D(() => {
      if (!m.value.trim()) return f.value;
      const z = m.value.toLowerCase();
      return f.value.filter(
        (h) => {
          var x;
          return h.name.toLowerCase().includes(z) || ((x = h.current_branch) == null ? void 0 : x.toLowerCase().includes(z));
        }
      );
    });
    function M(z) {
      if (!z) return "";
      try {
        const h = new Date(z), S = (/* @__PURE__ */ new Date()).getTime() - h.getTime(), K = Math.floor(S / 6e4), G = Math.floor(S / 36e5), P = Math.floor(S / 864e5);
        return K < 1 ? "just now" : K < 60 ? `${K} ${K === 1 ? "minute" : "minutes"} ago` : G < 24 ? `${G} ${G === 1 ? "hour" : "hours"} ago` : P < 30 ? `${P} ${P === 1 ? "day" : "days"} ago` : h.toLocaleDateString();
      } catch {
        return z;
      }
    }
    function $() {
      const z = b.value.trim();
      z && (s("create", z), b.value = "", u.value = !1);
    }
    function E() {
      b.value = "", u.value = !1;
    }
    function k(z) {
      s("viewDetails", z);
    }
    function _(z) {
      confirm(`Delete environment "${z}"?

This action cannot be undone.`) && s("delete", z);
    }
    async function R() {
      y.value = !0, v.value = null;
      try {
        f.value = await i();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return we(R), (z, h) => {
      const x = co("SectionGroup");
      return o(), n(W, null, [
        g(xe, null, {
          header: a(() => [
            g(Se, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: h[1] || (h[1] = (S) => r.value = !0)
            }, {
              actions: a(() => [
                g(Y, {
                  variant: "ghost",
                  size: "sm",
                  onClick: h[0] || (h[0] = (S) => u.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...h[7] || (h[7] = [
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
                g(Y, {
                  variant: "ghost",
                  size: "sm",
                  onClick: R,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...h[8] || (h[8] = [
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
            g(nt, {
              modelValue: m.value,
              "onUpdate:modelValue": h[2] || (h[2] = (S) => m.value = S),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), C(He, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), C(Ke, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: R
            }, null, 8, ["message"])) : (o(), n(W, { key: 2 }, [
              u.value ? (o(), n("div", Hu, [
                e("div", Ku, [
                  h[10] || (h[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  g(Y, {
                    variant: "ghost",
                    size: "xs",
                    onClick: E
                  }, {
                    default: a(() => [...h[9] || (h[9] = [
                      w(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", qu, [
                  g(ft, {
                    modelValue: b.value,
                    "onUpdate:modelValue": h[3] || (h[3] = (S) => b.value = S),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ge($, ["enter"]),
                      Ge(E, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Ju, [
                    g(Y, {
                      variant: "primary",
                      size: "sm",
                      onClick: $,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...h[11] || (h[11] = [
                        w(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: E
                    }, {
                      default: a(() => [...h[12] || (h[12] = [
                        w(" Cancel ", -1)
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
                  w(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  p.value ? (o(), n(W, { key: 0 }, [
                    h[13] || (h[13] = w(" • Current: ", -1)),
                    e("strong", null, l(p.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              L.value.length ? (o(), C(x, {
                key: 2,
                title: "ENVIRONMENTS",
                count: L.value.length
              }, {
                default: a(() => [
                  (o(!0), n(W, null, ee(L.value, (S) => (o(), C(ju, {
                    key: S.name,
                    "environment-name": S.name,
                    "is-current": S.is_current,
                    "current-branch": S.current_branch,
                    "workflow-count": S.workflow_count,
                    "node-count": S.node_count,
                    "model-count": S.model_count,
                    "last-used": M(S.last_used),
                    "show-last-used": !!S.last_used
                  }, {
                    actions: a(() => [
                      S.is_current ? c("", !0) : (o(), C(Y, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (K) => z.$emit("switch", S.name)
                      }, {
                        default: a(() => [...h[14] || (h[14] = [
                          w(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      g(Y, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (K) => k(S.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...h[15] || (h[15] = [
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
                      !S.is_current && f.value.length > 1 ? (o(), C(Y, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (K) => _(S.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Yu, [...h[16] || (h[16] = [
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
              L.value.length ? c("", !0) : (o(), C(Oe, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Ft({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    g(Y, {
                      variant: "primary",
                      onClick: h[4] || (h[4] = (S) => u.value = !0)
                    }, {
                      default: a(() => [...h[17] || (h[17] = [
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
        g(je, {
          show: r.value,
          title: "About Environments",
          onClose: h[6] || (h[6] = (S) => r.value = !1)
        }, {
          content: a(() => [...h[18] || (h[18] = [
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
            g(Y, {
              variant: "secondary",
              onClick: h[5] || (h[5] = (S) => r.value = !1)
            }, {
              default: a(() => [...h[19] || (h[19] = [
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
}), Qu = /* @__PURE__ */ J(Xu, [["__scopeId", "data-v-97d6527d"]]), Zu = { class: "file-path" }, em = { class: "file-path-text" }, tm = ["title"], om = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = I(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), n("div", Zu, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", em, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, l(s.value ? "✓" : "📋"), 9, tm)) : c("", !0)
    ]));
  }
}), sm = /* @__PURE__ */ J(om, [["__scopeId", "data-v-f0982173"]]), nm = { class: "output-path-input" }, am = { class: "export-actions" }, lm = {
  key: 1,
  class: "export-warning"
}, im = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = $e(), s = I(""), i = I(!1), f = I(null), y = I(!1);
    async function v() {
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
    return (r, u) => (o(), n(W, null, [
      g(xe, null, {
        header: a(() => [
          g(Se, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              g(Y, {
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
          g(ke, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              g(Ce, { status: "synced" }, {
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
                  g(he, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(he, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(he, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(he, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(ke, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              g(Ce, { status: "synced" }, {
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
                  e("div", nm, [
                    g(ft, {
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
          g(ke, { title: "EXPORT" }, {
            default: a(() => [
              e("div", am, [
                g(Y, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
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
                    w(" " + l(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), C(Y, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: u[2] || (u[2] = (b) => s.value = "")
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
          f.value ? (o(), C(ke, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              g(Ce, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Ft({
                icon: a(() => [
                  w(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  w(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  w(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    g(he, { label: "Saved to:" }, {
                      default: a(() => [
                        g(sm, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), C(he, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", lm, [...u[14] || (u[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    g(Y, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...u[15] || (u[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(Y, {
                      variant: "ghost",
                      size: "sm",
                      onClick: u[3] || (u[3] = (b) => f.value = null)
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
      g(je, {
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
}), rm = /* @__PURE__ */ J(im, [["__scopeId", "data-v-1777a9d5"]]), dm = { class: "file-input-wrapper" }, cm = ["accept", "multiple", "disabled"], um = /* @__PURE__ */ q({
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
    const i = s, f = I(null);
    function y() {
      var m;
      (m = f.value) == null || m.click();
    }
    function v(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return d({
      triggerInput: y
    }), (m, r) => (o(), n("div", dm, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, cm),
      g(Y, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
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
            w(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), mm = /* @__PURE__ */ J(um, [["__scopeId", "data-v-cd192091"]]), vm = {
  key: 0,
  class: "drop-zone-empty"
}, fm = { class: "drop-zone-text" }, gm = { class: "drop-zone-primary" }, hm = { class: "drop-zone-secondary" }, pm = { class: "drop-zone-actions" }, ym = {
  key: 1,
  class: "drop-zone-file"
}, wm = { class: "file-info" }, bm = { class: "file-details" }, km = { class: "file-name" }, _m = { class: "file-size" }, $m = /* @__PURE__ */ q({
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
    const s = d, i = I(!1), f = I(null), y = I(0), v = D(() => f.value !== null), m = D(() => {
      var k;
      return ((k = f.value) == null ? void 0 : k.name) || "";
    }), r = D(() => {
      if (!f.value) return "";
      const k = f.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(k) {
      var _;
      y.value++, (_ = k.dataTransfer) != null && _.types.includes("Files") && (i.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function p() {
      y.value--, y.value === 0 && (i.value = !1);
    }
    function L(k) {
      var R;
      y.value = 0, i.value = !1;
      const _ = (R = k.dataTransfer) == null ? void 0 : R.files;
      _ && _.length > 0 && $(_[0]);
    }
    function M(k) {
      k.length > 0 && $(k[0]);
    }
    function $(k) {
      f.value = k, s("fileSelected", k);
    }
    function E() {
      f.value = null, s("clear");
    }
    return (k, _) => (o(), n("div", {
      class: Z(["file-drop-zone", { "drop-active": i.value, "has-file": v.value }]),
      onDragenter: be(u, ["prevent"]),
      onDragover: be(b, ["prevent"]),
      onDragleave: be(p, ["prevent"]),
      onDrop: be(L, ["prevent"])
    }, [
      v.value ? (o(), n("div", ym, [
        e("div", wm, [
          _[1] || (_[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", bm, [
            e("div", km, l(m.value), 1),
            e("div", _m, l(r.value), 1)
          ])
        ]),
        g(Y, {
          variant: "ghost",
          size: "xs",
          onClick: E,
          title: "Remove file"
        }, {
          default: a(() => [..._[2] || (_[2] = [
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
      ])) : (o(), n("div", vm, [
        _[0] || (_[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", fm, [
          e("p", gm, l(t.primaryText), 1),
          e("p", hm, l(t.secondaryText), 1)
        ]),
        e("div", pm, [
          g(mm, {
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
}), Cm = /* @__PURE__ */ J($m, [["__scopeId", "data-v-e00abbca"]]), xm = { class: "import-preview" }, Sm = { class: "preview-header" }, Im = {
  key: 0,
  class: "source-env"
}, Em = { class: "preview-content" }, Mm = { class: "preview-section" }, zm = { class: "section-header" }, Lm = { class: "section-info" }, Tm = { class: "section-count" }, Rm = {
  key: 0,
  class: "item-list"
}, Dm = { class: "item-name" }, Nm = {
  key: 0,
  class: "item-more"
}, Om = { class: "preview-section" }, Um = { class: "section-header" }, Bm = { class: "section-info" }, Pm = { class: "section-count" }, Vm = {
  key: 0,
  class: "item-list"
}, Fm = { class: "item-details" }, Am = { class: "item-name" }, Wm = { class: "item-meta" }, Gm = {
  key: 0,
  class: "item-more"
}, jm = { class: "preview-section" }, Hm = { class: "section-header" }, Km = { class: "section-info" }, qm = { class: "section-count" }, Jm = {
  key: 0,
  class: "item-list"
}, Ym = { class: "item-name" }, Xm = {
  key: 0,
  class: "item-more"
}, Qm = {
  key: 0,
  class: "preview-section"
}, Zm = { class: "git-info" }, ev = /* @__PURE__ */ q({
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
    function y(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, m) => (o(), n("div", xm, [
      e("div", Sm, [
        g(Ee, null, {
          default: a(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Im, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(St, null, {
            default: a(() => [
              w(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Em, [
        e("div", Mm, [
          e("div", zm, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Lm, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Tm, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Rm, [
            (o(!0), n(W, null, ee(t.workflows.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Dm, l(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Nm, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Om, [
          e("div", Um, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Bm, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Pm, l(i.value) + " file" + l(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Vm, [
            (o(!0), n(W, null, ee(t.models.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Fm, [
                e("span", Am, l(r.filename), 1),
                e("span", Wm, l(y(r.size)) + " • " + l(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Gm, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", jm, [
          e("div", Hm, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Km, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", qm, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Jm, [
            (o(!0), n(W, null, ee(t.nodes.slice(0, t.maxPreviewItems), (r) => (o(), n("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ym, l(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", Xm, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", Qm, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Zm, [
            t.gitBranch ? (o(), C(he, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                g(St, null, {
                  default: a(() => [
                    w(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), C(he, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                g(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), tv = /* @__PURE__ */ J(ev, [["__scopeId", "data-v-182fe113"]]), ov = { class: "import-options" }, sv = { class: "options-container" }, nv = { class: "option-section" }, av = { class: "conflict-options" }, lv = ["value", "checked", "onChange"], iv = { class: "conflict-content" }, rv = { class: "conflict-label" }, dv = { class: "conflict-description" }, cv = { class: "option-section" }, uv = { class: "component-toggles" }, mv = /* @__PURE__ */ q({
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
    return (f, y) => (o(), n("div", ov, [
      g(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", sv, [
        e("div", nv, [
          g(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", av, [
            (o(), n(W, null, ee(i, (v) => e("label", {
              key: v.value,
              class: Z(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (m) => s("update:conflictMode", v.value)
              }, null, 40, lv),
              e("div", iv, [
                e("span", rv, l(v.label), 1),
                e("span", dv, l(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", cv, [
          g(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", uv, [
            g(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                g(Qe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (v) => s("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                g(Qe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (v) => s("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                g(Qe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (v) => s("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                g(Qe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (v) => s("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), vv = /* @__PURE__ */ J(mv, [["__scopeId", "data-v-0ec212b0"]]), fv = {
  key: 0,
  class: "import-empty"
}, gv = { class: "import-help" }, hv = {
  key: 1,
  class: "import-configure"
}, pv = { class: "selected-file-bar" }, yv = { class: "file-bar-content" }, wv = { class: "file-bar-info" }, bv = { class: "file-bar-name" }, kv = { class: "file-bar-size" }, _v = { class: "import-actions" }, $v = {
  key: 2,
  class: "import-progress"
}, Cv = { class: "progress-content" }, xv = { class: "progress-info" }, Sv = { class: "progress-title" }, Iv = { class: "progress-detail" }, Ev = { class: "progress-bar" }, Mv = { class: "progress-status" }, zv = {
  key: 3,
  class: "import-complete"
}, Lv = { class: "complete-message" }, Tv = { class: "complete-title" }, Rv = { class: "complete-details" }, Dv = { class: "complete-actions" }, Nv = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const d = I(null), s = I(!1), i = I(!1), f = I(!1), y = I(""), v = I({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = I({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), r = I({
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
    }), u = D(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function b(E) {
      d.value = E;
    }
    function p() {
      d.value = null, i.value = !1, f.value = !1, y.value = "";
    }
    function L() {
      p(), s.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function M() {
      if (d.value) {
        s.value = !0, i.value = !1;
        try {
          const E = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${r.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${r.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${r.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of E)
            m.value = k, await new Promise((_) => setTimeout(_, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, y.value = `Successfully imported ${r.value.workflows.length} workflows, ${r.value.models.length} models, and ${r.value.nodes.length} custom nodes.`;
        } catch (E) {
          f.value = !1, y.value = E instanceof Error ? E.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function $(E) {
      return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KB` : E < 1024 * 1024 * 1024 ? `${(E / (1024 * 1024)).toFixed(1)} MB` : `${(E / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (E, k) => (o(), C(xe, null, {
      header: a(() => [
        g(Se, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", fv, [
          g(Cm, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", gv, [
            g(Ee, null, {
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
        ])) : d.value && !s.value && !i.value ? (o(), n("div", hv, [
          e("div", pv, [
            e("div", yv, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", wv, [
                e("div", bv, l(d.value.name), 1),
                e("div", kv, l($(d.value.size)), 1)
              ])
            ]),
            g(Y, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: a(() => [...k[8] || (k[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(tv, {
            "source-environment": r.value.sourceEnvironment,
            workflows: r.value.workflows,
            models: r.value.models,
            nodes: r.value.nodes,
            "git-branch": r.value.gitBranch,
            "git-commit": r.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(vv, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (_) => v.value.conflictMode = _),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (_) => v.value.includeWorkflows = _),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (_) => v.value.includeModels = _),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (_) => v.value.includeNodes = _),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (_) => v.value.includeGitHistory = _)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && r.value.models.length > 0 ? (o(), C(Xe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${r.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", _v, [
            g(Y, {
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
            g(Y, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: a(() => [...k[10] || (k[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", $v, [
          e("div", Cv, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", xv, [
              e("div", Sv, l(m.value.message), 1),
              e("div", Iv, l(m.value.detail), 1)
            ])
          ]),
          e("div", Ev, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Mv, l(m.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", zv, [
          e("div", {
            class: Z(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", Lv, [
            e("div", Tv, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Rv, l(y.value), 1)
          ]),
          e("div", Dv, [
            g(Y, {
              variant: "primary",
              size: "md",
              onClick: L
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
}), Ov = /* @__PURE__ */ J(Nv, [["__scopeId", "data-v-18e18eb5"]]), Uv = { class: "header-info" }, Bv = { class: "commit-hash" }, Pv = {
  key: 0,
  class: "commit-refs"
}, Vv = { class: "commit-message" }, Fv = { class: "commit-date" }, Av = {
  key: 0,
  class: "loading"
}, Wv = {
  key: 1,
  class: "changes-section"
}, Gv = { class: "stats-row" }, jv = { class: "stat" }, Hv = { class: "stat insertions" }, Kv = { class: "stat deletions" }, qv = {
  key: 0,
  class: "change-group"
}, Jv = {
  key: 1,
  class: "change-group"
}, Yv = {
  key: 0,
  class: "version"
}, Xv = {
  key: 2,
  class: "change-group"
}, Qv = { class: "change-item" }, Zv = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = $e(), i = I(null), f = I(!0), y = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), v = D(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return we(async () => {
      try {
        i.value = await s(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, r) => (o(), C(gt, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => m.$emit("close"))
    }, {
      header: a(() => {
        var u, b, p, L;
        return [
          e("div", Uv, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Bv, l(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (L = (p = i.value) == null ? void 0 : p.refs) != null && L.length ? (o(), n("span", Pv, [
              (o(!0), n(W, null, ee(i.value.refs, (M) => (o(), n("span", {
                key: M,
                class: "ref-badge"
              }, l(M), 1))), 128))
            ])) : c("", !0)
          ]),
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (M) => m.$emit("close"))
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
          e("div", Vv, l(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Fv, l(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", Av, "Loading details...")) : i.value ? (o(), n("div", Wv, [
            e("div", Gv, [
              e("span", jv, l(i.value.stats.files_changed) + " files", 1),
              e("span", Hv, "+" + l(i.value.stats.insertions), 1),
              e("span", Kv, "-" + l(i.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", qv, [
              g(ut, { variant: "section" }, {
                default: a(() => [...r[6] || (r[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, ee(i.value.changes.workflows.added, (p) => (o(), n("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(W, null, ee(i.value.changes.workflows.modified, (p) => (o(), n("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(p), 1)
              ]))), 128)),
              (o(!0), n(W, null, ee(i.value.changes.workflows.deleted, (p) => (o(), n("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p), 1)
              ]))), 128))
            ])) : c("", !0),
            v.value ? (o(), n("div", Jv, [
              g(ut, { variant: "section" }, {
                default: a(() => [...r[10] || (r[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(W, null, ee(i.value.changes.nodes.added, (p) => (o(), n("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(p.name), 1),
                p.version ? (o(), n("span", Yv, "(" + l(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(W, null, ee(i.value.changes.nodes.removed, (p) => (o(), n("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", Xv, [
              g(ut, { variant: "section" }, {
                default: a(() => [...r[13] || (r[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Qv, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        g(ie, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => m.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...r[15] || (r[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => m.$emit("checkout", t.commit))
        }, {
          default: a(() => [...r[16] || (r[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ef = /* @__PURE__ */ J(Zv, [["__scopeId", "data-v-d256ff6d"]]), tf = { class: "dialog-message" }, of = {
  key: 0,
  class: "dialog-details"
}, sf = {
  key: 1,
  class: "dialog-warning"
}, nf = /* @__PURE__ */ q({
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
    return (d, s) => (o(), C(gt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", tf, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", of, [
          (o(!0), n(W, null, ee(t.details, (i, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", sf, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        g(ie, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => d.$emit("cancel"))
        }, {
          default: a(() => [
            w(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), C(ie, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => d.$emit("secondary"))
        }, {
          default: a(() => [
            w(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
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
}), af = /* @__PURE__ */ J(nf, [["__scopeId", "data-v-3670b9f5"]]), lf = { class: "base-textarea-wrapper" }, rf = ["value", "rows", "placeholder", "disabled", "maxlength"], df = {
  key: 0,
  class: "base-textarea-count"
}, cf = /* @__PURE__ */ q({
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
    return (d, s) => (o(), n("div", lf, [
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
      }, null, 40, rf),
      t.showCharCount && t.maxLength ? (o(), n("div", df, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ J(cf, [["__scopeId", "data-v-5516e6fc"]]), uf = ["checked", "disabled"], mf = { class: "base-checkbox-box" }, vf = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, ff = {
  key: 0,
  class: "base-checkbox-label"
}, gf = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: Z(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => d.$emit("update:modelValue", i.target.checked))
      }, null, 40, uf),
      e("span", mf, [
        t.modelValue ? (o(), n("svg", vf, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", ff, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ J(gf, [["__scopeId", "data-v-bf17c831"]]), hf = { class: "popover-header" }, pf = { class: "popover-body" }, yf = {
  key: 0,
  class: "changes-summary"
}, wf = {
  key: 0,
  class: "change-item"
}, bf = {
  key: 1,
  class: "change-item"
}, kf = {
  key: 2,
  class: "change-item"
}, _f = {
  key: 3,
  class: "change-item"
}, $f = {
  key: 4,
  class: "change-item"
}, Cf = {
  key: 1,
  class: "no-changes"
}, xf = {
  key: 2,
  class: "loading"
}, Sf = {
  key: 3,
  class: "issues-warning"
}, If = { class: "warning-header" }, Ef = { class: "warning-title" }, Mf = { class: "issues-list" }, zf = { class: "message-section" }, Lf = { class: "popover-footer" }, Tf = {
  key: 1,
  class: "commit-popover"
}, Rf = { class: "popover-header" }, Df = { class: "popover-body" }, Nf = {
  key: 0,
  class: "changes-summary"
}, Of = {
  key: 0,
  class: "change-item"
}, Uf = {
  key: 1,
  class: "change-item"
}, Bf = {
  key: 2,
  class: "change-item"
}, Pf = {
  key: 3,
  class: "change-item"
}, Vf = {
  key: 4,
  class: "change-item"
}, Ff = {
  key: 1,
  class: "no-changes"
}, Af = {
  key: 2,
  class: "loading"
}, Wf = {
  key: 3,
  class: "issues-warning"
}, Gf = { class: "warning-header" }, jf = { class: "warning-title" }, Hf = { class: "issues-list" }, Kf = { class: "message-section" }, qf = { class: "popover-footer" }, Jf = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, i = d, { commit: f } = $e(), y = I(""), v = I(!1), m = I(!1), r = I(null), u = D(() => {
      if (!s.status) return !1;
      const $ = s.status.workflows;
      return $.new.length > 0 || $.modified.length > 0 || $.deleted.length > 0 || s.status.has_changes;
    }), b = D(() => {
      var $;
      return ($ = s.status) != null && $.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (E) => E.has_issues && (E.sync_state === "new" || E.sync_state === "modified")
      ) : [];
    }), p = D(() => b.value.length > 0), L = D(() => p.value && !m.value);
    async function M() {
      var $, E, k;
      if (!(p.value && !m.value) && !(!u.value || !y.value.trim() || v.value)) {
        v.value = !0, r.value = null;
        try {
          const _ = await f(y.value.trim(), m.value);
          _.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${(($ = _.summary) == null ? void 0 : $.new) || 0} new, ${((E = _.summary) == null ? void 0 : E.modified) || 0} modified, ${((k = _.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => i("committed"), 1e3)) : _.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : _.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: _.message || "Commit failed" };
        } catch (_) {
          r.value = { type: "error", message: _ instanceof Error ? _.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return ($, E) => t.asModal ? (o(), C(Me, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: E[5] || (E[5] = (k) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: E[4] || (E[4] = be(() => {
          }, ["stop"]))
        }, [
          e("div", hf, [
            E[11] || (E[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: E[0] || (E[0] = (k) => i("close"))
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
          e("div", pf, [
            t.status && u.value ? (o(), n("div", yf, [
              t.status.workflows.new.length ? (o(), n("div", wf, [
                E[12] || (E[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", bf, [
                E[13] || (E[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", kf, [
                E[14] || (E[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", _f, [
                E[15] || (E[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", $f, [
                E[16] || (E[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Cf, " No changes to commit ")) : (o(), n("div", xf, " Loading... ")),
            p.value ? (o(), n("div", Sf, [
              e("div", If, [
                E[17] || (E[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Ef, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Mf, [
                (o(!0), n(W, null, ee(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  w(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              g(Bt, {
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
            e("div", zf, [
              g(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": E[2] || (E[2] = (k) => y.value = k),
                placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || v.value || L.value,
                rows: 3,
                onCtrlEnter: M
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (o(), n("div", {
              key: 4,
              class: Z(["result", r.value.type])
            }, l(r.value.message), 3)) : c("", !0)
          ]),
          e("div", Lf, [
            g(ie, {
              variant: "secondary",
              onClick: E[3] || (E[3] = (k) => i("close"))
            }, {
              default: a(() => [...E[19] || (E[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: m.value ? "danger" : "primary",
              disabled: !u.value || !y.value.trim() || v.value || L.value,
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
    ])) : (o(), n("div", Tf, [
      e("div", Rf, [
        E[21] || (E[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: E[6] || (E[6] = (k) => i("close"))
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
      e("div", Df, [
        t.status && u.value ? (o(), n("div", Nf, [
          t.status.workflows.new.length ? (o(), n("div", Of, [
            E[22] || (E[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Uf, [
            E[23] || (E[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Bf, [
            E[24] || (E[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Pf, [
            E[25] || (E[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Vf, [
            E[26] || (E[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", Ff, " No changes to commit ")) : (o(), n("div", Af, " Loading... ")),
        p.value ? (o(), n("div", Wf, [
          e("div", Gf, [
            E[27] || (E[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", jf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Hf, [
            (o(!0), n(W, null, ee(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              w(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          g(Bt, {
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
        e("div", Kf, [
          g(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": E[8] || (E[8] = (k) => y.value = k),
            placeholder: L.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || v.value || L.value,
            rows: 3,
            onCtrlEnter: M
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (o(), n("div", {
          key: 4,
          class: Z(["result", r.value.type])
        }, l(r.value.message), 3)) : c("", !0)
      ]),
      e("div", qf, [
        g(ie, {
          variant: "secondary",
          onClick: E[9] || (E[9] = (k) => i("close"))
        }, {
          default: a(() => [...E[29] || (E[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: m.value ? "danger" : "primary",
          disabled: !u.value || !y.value.trim() || v.value || L.value,
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
}), Kt = /* @__PURE__ */ J(Jf, [["__scopeId", "data-v-38b45183"]]), Yf = { class: "modal-header" }, Xf = { class: "modal-body" }, Qf = { class: "switch-message" }, Zf = { class: "switch-details" }, eg = { class: "modal-actions" }, tg = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), C(Me, { to: "body" }, [
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
          e("div", Yf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Xf, [
            e("p", Qf, [
              s[6] || (s[6] = w(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = w(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = w("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Zf, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", eg, [
            g(Y, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Y, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), og = /* @__PURE__ */ J(tg, [["__scopeId", "data-v-e9c5253e"]]), sg = { class: "progress-bar" }, ng = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = D(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (i, f) => (o(), n("div", sg, [
      e("div", {
        class: Z(["progress-fill", t.variant]),
        style: Ze({ width: s.value })
      }, null, 6)
    ]));
  }
}), ag = /* @__PURE__ */ J(ng, [["__scopeId", "data-v-1beb0512"]]), lg = {
  key: 0,
  class: "modal-overlay"
}, ig = { class: "modal-content" }, rg = { class: "modal-body" }, dg = { class: "progress-info" }, cg = { class: "progress-percentage" }, ug = { class: "progress-state" }, mg = { class: "switch-steps" }, vg = { class: "step-icon" }, fg = { class: "step-label" }, gg = /* @__PURE__ */ q({
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
      ], v = y.findIndex((m) => m.state === d.state);
      return y.map((m, r) => {
        let u = "pending", b = "○";
        return r < v ? (u = "completed", b = "✓") : r === v && (u = "active", b = "⟳"), {
          ...m,
          status: u,
          icon: b
        };
      });
    });
    return (y, v) => (o(), C(Me, { to: "body" }, [
      t.show ? (o(), n("div", lg, [
        e("div", ig, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", rg, [
            g(ag, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", dg, [
              e("div", cg, l(t.progress) + "%", 1),
              e("div", ug, l(s.value), 1)
            ]),
            e("div", mg, [
              (o(!0), n(W, null, ee(f.value, (m) => (o(), n("div", {
                key: m.state,
                class: Z(["switch-step", m.status])
              }, [
                e("span", vg, l(m.icon), 1),
                e("span", fg, l(m.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), hg = /* @__PURE__ */ J(gg, [["__scopeId", "data-v-768a5078"]]), pg = { class: "modal-header" }, yg = { class: "modal-body" }, wg = {
  key: 0,
  class: "node-section"
}, bg = { class: "node-list" }, kg = {
  key: 1,
  class: "node-section"
}, _g = { class: "node-list" }, $g = { class: "modal-actions" }, Cg = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), C(Me, { to: "body" }, [
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
          e("div", pg, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", yg, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", wg, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", bg, [
                (o(!0), n(W, null, ee(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + l(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", kg, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", _g, [
                (o(!0), n(W, null, ee(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
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
          e("div", $g, [
            g(Y, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Y, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), xg = /* @__PURE__ */ J(Cg, [["__scopeId", "data-v-7cad7518"]]);
async function it(t, d = {}, s = 5e3) {
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
function Sg() {
  const t = I(null);
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
  async function s() {
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
  async function i() {
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
  async function f() {
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
    restart: f,
    kill: y
  };
}
const Ig = { class: "comfygit-panel" }, Eg = { class: "panel-header" }, Mg = { class: "header-left" }, zg = {
  key: 0,
  class: "header-info"
}, Lg = { class: "header-actions" }, Tg = { class: "env-switcher" }, Rg = {
  key: 0,
  class: "header-info"
}, Dg = { class: "branch-name" }, Ng = { class: "panel-main" }, Og = { class: "sidebar" }, Ug = { class: "sidebar-section" }, Bg = { class: "sidebar-section" }, Pg = { class: "sidebar-section" }, Vg = { class: "content-area" }, Fg = {
  key: 0,
  class: "error-message"
}, Ag = {
  key: 1,
  class: "loading"
}, Wg = { class: "dialog-content env-selector-dialog" }, Gg = { class: "dialog-header" }, jg = { class: "dialog-body" }, Hg = { class: "env-list" }, Kg = { class: "env-info" }, qg = { class: "env-name-row" }, Jg = { class: "env-indicator" }, Yg = { class: "env-name" }, Xg = {
  key: 0,
  class: "env-branch"
}, Qg = {
  key: 1,
  class: "current-label"
}, Zg = { class: "env-stats" }, eh = ["onClick"], th = { class: "toast-container" }, oh = { class: "toast-icon" }, sh = { class: "toast-message" }, nh = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: i,
      getHistory: f,
      getBranches: y,
      checkout: v,
      createBranch: m,
      switchBranch: r,
      getEnvironments: u,
      switchEnvironment: b,
      getSwitchProgress: p,
      syncEnvironmentManually: L
    } = $e(), M = Sg(), $ = I(null), E = I([]), k = I([]), _ = I([]), R = D(() => _.value.find((A) => A.is_current)), z = I(!1), h = I(null), x = I(null), S = I(!1), K = I(null), G = I(!1), P = I(!1), U = I(""), V = I({ state: "idle", progress: 0, message: "" });
    let N = null, X = null;
    const B = I("status"), H = I("this-env");
    function Q(A, T) {
      B.value = A, H.value = T;
    }
    function ne(A) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      de && Q(de.view, de.section);
    }
    function se() {
      Q("branches", "this-env");
    }
    const me = I(null), oe = I(!1), ze = I(!1), pe = I([]);
    let et = 0;
    function ve(A, T = "info", de = 3e3) {
      const ye = ++et;
      return pe.value.push({ id: ye, message: A, type: T }), de > 0 && setTimeout(() => {
        pe.value = pe.value.filter((Re) => Re.id !== ye);
      }, de), ye;
    }
    function Le(A) {
      pe.value = pe.value.filter((T) => T.id !== A);
    }
    function lt(A) {
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
    const Je = D(() => {
      if (!$.value) return "neutral";
      const A = $.value.workflows, T = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || $.value.has_changes;
      return $.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    D(() => $.value ? Je.value === "success" ? "All synced" : Je.value === "warning" ? "Uncommitted changes" : Je.value === "error" ? "Not synced" : "" : "");
    async function j() {
      z.value = !0, h.value = null;
      try {
        const [A, T, de, ye] = await Promise.all([
          i(!0),
          f(),
          y(),
          u()
        ]);
        $.value = A, E.value = T.commits, k.value = de.branches, _.value = ye, s("statusUpdate", A), K.value && await K.value.loadWorkflows(!0);
      } catch (A) {
        h.value = A instanceof Error ? A.message : "Failed to load status", $.value = null, E.value = [], k.value = [];
      } finally {
        z.value = !1;
      }
    }
    function le(A) {
      x.value = A;
    }
    async function fe(A) {
      var de;
      x.value = null;
      const T = $.value && ($.value.workflows.new.length > 0 || $.value.workflows.modified.length > 0 || $.value.workflows.deleted.length > 0 || $.value.has_changes);
      me.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((de = A.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: T ? Dt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var De;
          me.value = null, te();
          const ye = ve(`Checking out ${A.short_hash || ((De = A.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Re = await v(A.hash, T);
          Le(ye), Re.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function _e(A) {
      const T = $.value && ($.value.workflows.new.length > 0 || $.value.workflows.modified.length > 0 || $.value.workflows.deleted.length > 0 || $.value.has_changes);
      me.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: T ? Dt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          me.value = null, te();
          const de = ve(`Switching to ${A}...`, "info", 0), ye = await r(A, T);
          Le(de), ye.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function F(A) {
      const T = ve(`Creating branch ${A}...`, "info", 0), de = await m(A);
      Le(T), de.status === "success" ? (ve(`Branch "${A}" created`, "success"), await j()) : ve(de.message || "Failed to create branch", "error");
    }
    async function O(A) {
      x.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const de = ve(`Creating branch ${T}...`, "info", 0), ye = await m(T, A.hash);
        Le(de), ye.status === "success" ? (ve(`Branch "${T}" created from ${A.short_hash}`, "success"), await j()) : ve(ye.message || "Failed to create branch", "error");
      }
    }
    function te() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ge(A) {
      S.value = !1, U.value = A, G.value = !0;
    }
    async function Te() {
      G.value = !1, P.value = !0, te(), V.value = {
        progress: 10,
        state: Ue(10),
        message: Be(10)
      };
      try {
        await b(U.value), ht(), pt();
      } catch (A) {
        Pe(), P.value = !1, ve(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), V.value = { state: "idle", progress: 0, message: "" };
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
    function ht() {
      if (X) return;
      let A = 10;
      const T = 60, de = 5e3, ye = 100, Re = (T - A) / (de / ye);
      X = window.setInterval(() => {
        if (A += Re, A >= T && (A = T, Pe()), V.value.progress < T) {
          const De = Math.floor(A);
          V.value = {
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
    function pt() {
      N || (N = window.setInterval(async () => {
        try {
          let A = await M.getStatus();
          if ((!A || A.state === "idle") && (A = await p()), !A)
            return;
          const T = A.progress || 0;
          T >= 60 && Pe();
          const de = Math.max(T, V.value.progress), ye = A.state && A.state !== "idle" && A.state !== "unknown", Re = ye ? A.state : Ue(de), De = ye && A.message || Be(de);
          V.value = {
            state: Re,
            progress: de,
            message: De
          }, A.state === "complete" ? (Pe(), kt(), P.value = !1, ve(`✓ Switched to ${U.value}`, "success"), await j(), U.value = "") : A.state === "rolled_back" ? (Pe(), kt(), P.value = !1, ve("Switch failed, restored previous environment", "warning"), U.value = "") : A.state === "critical_failure" && (Pe(), kt(), P.value = !1, ve(`Critical error during switch: ${A.message}`, "error"), U.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function kt() {
      Pe(), N && (clearInterval(N), N = null);
    }
    function Qt() {
      G.value = !1, U.value = "";
    }
    async function Zt() {
      oe.value = !1, await j(), ve("✓ Changes committed", "success");
    }
    async function eo() {
      ze.value = !1;
      const A = ve("Syncing environment...", "info", 0);
      try {
        const T = await L("skip", !0);
        if (Le(A), T.status === "success") {
          const de = [];
          T.nodes_installed.length && de.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && de.push(`${T.nodes_removed.length} removed`);
          const ye = de.length ? `: ${de.join(", ")}` : "";
          ve(`✓ Environment synced${ye}`, "success"), await j();
        } else {
          const de = T.errors.length ? T.errors.join("; ") : T.message;
          ve(`Sync failed: ${de}`, "error");
        }
      } catch (T) {
        Le(A), ve(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function to(A) {
      const T = ve(`Creating environment "${A}"...`, "info", 0);
      Le(T), ve("Environment creation not yet implemented", "warning");
    }
    async function oo(A) {
      const T = ve(`Deleting environment "${A}"...`, "info", 0);
      Le(T), ve("Environment deletion not yet implemented", "warning");
    }
    function so(A) {
      ve(`Viewing details for "${A}"`, "info"), Q("models-env", "this-env");
    }
    function Dt() {
      if (!$.value) return [];
      const A = [], T = $.value.workflows;
      return T.new.length && A.push(`${T.new.length} new workflow(s)`), T.modified.length && A.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && A.push(`${T.deleted.length} deleted workflow(s)`), A;
    }
    return we(j), (A, T) => {
      var de, ye, Re, De;
      return o(), n("div", Ig, [
        e("div", Eg, [
          e("div", Mg, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            $.value ? (o(), n("div", zg)) : c("", !0)
          ]),
          e("div", Lg, [
            e("button", {
              class: Z(["icon-btn", { spinning: z.value }]),
              onClick: j,
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
              onClick: T[0] || (T[0] = (ae) => s("close")),
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
        e("div", Tg, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ae) => Q("environments", "all-envs"))
          }, [
            $.value ? (o(), n("div", Rg, [
              e("span", null, l(((de = R.value) == null ? void 0 : de.name) || ((ye = $.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", Dg, "(" + l($.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Ng, [
          e("div", Og, [
            e("div", Ug, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "status" && H.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ae) => Q("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ae) => Q("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ae) => Q("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "branches" }]),
                onClick: T[5] || (T[5] = (ae) => Q("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "history" }]),
                onClick: T[6] || (T[6] = (ae) => Q("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ae) => Q("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ae) => Q("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Bg, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "environments" }]),
                onClick: T[9] || (T[9] = (ae) => Q("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ae) => Q("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "settings" }]),
                onClick: T[11] || (T[11] = (ae) => Q("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ae) => Q("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Pg, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "export" }]),
                onClick: T[13] || (T[13] = (ae) => Q("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "import" }]),
                onClick: T[14] || (T[14] = (ae) => Q("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: Z(["sidebar-item", { active: B.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ae) => Q("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Vg, [
            h.value ? (o(), n("div", Fg, l(h.value), 1)) : !$.value && B.value === "status" ? (o(), n("div", Ag, " Loading status... ")) : (o(), n(W, { key: 2 }, [
              B.value === "status" ? (o(), C(An, {
                key: 0,
                status: $.value,
                onSwitchBranch: se,
                onCommitChanges: T[16] || (T[16] = (ae) => oe.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ae) => ze.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ae) => Q("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ae) => Q("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ae) => Q("debug-env", "this-env"))
              }, null, 8, ["status"])) : B.value === "workflows" ? (o(), C(Zd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: K,
                onRefresh: j
              }, null, 512)) : B.value === "models-env" ? (o(), C(Dc, {
                key: 2,
                onNavigate: ne
              })) : B.value === "branches" ? (o(), C(sa, {
                key: 3,
                branches: k.value,
                current: ((Re = $.value) == null ? void 0 : Re.branch) || null,
                onSwitch: _e,
                onCreate: F
              }, null, 8, ["branches", "current"])) : B.value === "history" ? (o(), C(fa, {
                key: 4,
                commits: E.value,
                onSelect: le,
                onCheckout: fe
              }, null, 8, ["commits"])) : B.value === "nodes" ? (o(), C(Fc, { key: 5 })) : B.value === "debug-env" ? (o(), C(Vu, { key: 6 })) : B.value === "environments" ? (o(), C(Qu, {
                key: 7,
                onSwitch: ge,
                onCreate: to,
                onDelete: oo,
                onViewDetails: so
              })) : B.value === "model-index" ? (o(), C(Oc, { key: 8 })) : B.value === "settings" ? (o(), C(Ou, { key: 9 })) : B.value === "debug-workspace" ? (o(), C(Bu, { key: 10 })) : B.value === "export" ? (o(), C(rm, { key: 11 })) : B.value === "import" ? (o(), C(Ov, { key: 12 })) : B.value === "remotes" ? (o(), C(pu, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        x.value ? (o(), C(ef, {
          key: 0,
          commit: x.value,
          onClose: T[21] || (T[21] = (ae) => x.value = null),
          onCheckout: fe,
          onCreateBranch: O
        }, null, 8, ["commit"])) : c("", !0),
        me.value ? (o(), C(af, {
          key: 1,
          title: me.value.title,
          message: me.value.message,
          details: me.value.details,
          warning: me.value.warning,
          confirmLabel: me.value.confirmLabel,
          cancelLabel: me.value.cancelLabel,
          secondaryLabel: me.value.secondaryLabel,
          secondaryAction: me.value.secondaryAction,
          destructive: me.value.destructive,
          onConfirm: me.value.onConfirm,
          onCancel: T[22] || (T[22] = (ae) => me.value = null),
          onSecondary: me.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(og, {
          show: G.value,
          "from-environment": ((De = R.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": U.value,
          onConfirm: Te,
          onClose: Qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        oe.value && $.value ? (o(), C(Kt, {
          key: 2,
          status: $.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ae) => oe.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : c("", !0),
        ze.value && $.value ? (o(), C(xg, {
          key: 3,
          show: ze.value,
          "mismatch-details": {
            missing_nodes: $.value.comparison.missing_nodes,
            extra_nodes: $.value.comparison.extra_nodes
          },
          onConfirm: eo,
          onClose: T[24] || (T[24] = (ae) => ze.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(hg, {
          show: P.value,
          state: V.value.state,
          progress: V.value.progress,
          message: V.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        S.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = be((ae) => S.value = !1, ["self"]))
        }, [
          e("div", Wg, [
            e("div", Gg, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ae) => S.value = !1)
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
            e("div", jg, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Hg, [
                (o(!0), n(W, null, ee(_.value, (ae) => (o(), n("div", {
                  key: ae.name,
                  class: Z(["env-item", { current: ae.is_current }])
                }, [
                  e("div", Kg, [
                    e("div", qg, [
                      e("span", Jg, l(ae.is_current ? "●" : "○"), 1),
                      e("span", Yg, l(ae.name), 1),
                      ae.current_branch ? (o(), n("span", Xg, "(" + l(ae.current_branch) + ")", 1)) : c("", !0),
                      ae.is_current ? (o(), n("span", Qg, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Zg, l(ae.workflow_count) + " workflows • " + l(ae.node_count) + " nodes ", 1)
                  ]),
                  ae.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (up) => ge(ae.name)
                  }, " SWITCH ", 8, eh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", th, [
          g(uo, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(W, null, ee(pe.value, (ae) => (o(), n("div", {
                key: ae.id,
                class: Z(["toast", ae.type])
              }, [
                e("span", oh, l(lt(ae.type)), 1),
                e("span", sh, l(ae.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ah = /* @__PURE__ */ J(nh, [["__scopeId", "data-v-734ed318"]]), lh = { class: "item-header" }, ih = { class: "item-info" }, rh = { class: "filename" }, dh = { class: "metadata" }, ch = { class: "size" }, uh = {
  key: 0,
  class: "type"
}, mh = { class: "item-actions" }, vh = {
  key: 0,
  class: "progress-section"
}, fh = { class: "progress-bar" }, gh = { class: "progress-stats" }, hh = { class: "downloaded" }, ph = { class: "speed" }, yh = {
  key: 0,
  class: "eta"
}, wh = {
  key: 1,
  class: "status-msg paused"
}, bh = {
  key: 2,
  class: "status-msg queued"
}, kh = {
  key: 3,
  class: "status-msg completed"
}, _h = {
  key: 4,
  class: "status-msg failed"
}, $h = {
  key: 0,
  class: "retries"
}, Ch = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function i(v) {
      if (v === 0) return "?";
      const m = v / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(v / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(v) {
      return v === 0 ? "-" : `${(v / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(v) {
      if (v < 60) return `${Math.round(v)}s`;
      const m = Math.floor(v / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (v, m) => (o(), n("div", {
      class: Z(["download-item", `status-${t.item.status}`])
    }, [
      e("div", lh, [
        e("div", ih, [
          e("div", rh, l(t.item.filename), 1),
          e("div", dh, [
            e("span", ch, l(i(t.item.size)), 1),
            t.item.type ? (o(), n("span", uh, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", mh, [
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
      t.item.status === "downloading" ? (o(), n("div", vh, [
        e("div", fh, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", gh, [
          e("span", hh, l(i(t.item.downloaded)) + " / " + l(i(t.item.size)), 1),
          e("span", ph, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", yh, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", wh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", bh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", kh, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", _h, [
        w(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", $h, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ J(Ch, [["__scopeId", "data-v-2110df65"]]), xh = { class: "queue-title" }, Sh = { class: "count" }, Ih = { class: "queue-actions" }, Eh = { class: "action-label" }, Mh = {
  key: 0,
  class: "overall-progress"
}, zh = { class: "progress-bar" }, Lh = {
  key: 0,
  class: "current-mini"
}, Th = { class: "filename" }, Rh = { class: "speed" }, Dh = {
  key: 1,
  class: "queue-content"
}, Nh = {
  key: 0,
  class: "section"
}, Oh = {
  key: 1,
  class: "section"
}, Uh = { class: "section-header" }, Bh = { class: "section-label paused" }, Ph = { class: "items-list" }, Vh = {
  key: 2,
  class: "section"
}, Fh = { class: "section-header" }, Ah = { class: "section-label" }, Wh = { class: "items-list" }, Gh = {
  key: 3,
  class: "section"
}, jh = { class: "section-header" }, Hh = { class: "section-label" }, Kh = { class: "items-list" }, qh = {
  key: 4,
  class: "section"
}, Jh = { class: "section-header" }, Yh = { class: "section-label failed" }, Xh = { class: "items-list" }, Qh = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: i,
      completedItems: f,
      failedItems: y,
      pausedItems: v,
      hasItems: m,
      activeCount: r,
      cancelDownload: u,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: L,
      removeItem: M,
      clearCompleted: $
    } = bt(), E = I(!1);
    let k = null;
    Et(
      () => ({
        active: r.value,
        failed: y.value.length,
        paused: v.value.length,
        completed: f.value.length
      }),
      (h, x) => {
        k && (clearTimeout(k), k = null);
        const S = h.active === 0 && h.failed === 0 && h.paused === 0 && h.completed > 0, K = x && (x.active > 0 || x.paused > 0);
        S && K && (k = setTimeout(() => {
          $(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const _ = D(() => {
      var S;
      if (d.items.length === 0) return 0;
      const h = f.value.length, x = ((S = s.value) == null ? void 0 : S.progress) || 0;
      return Math.round((h + x / 100) / d.items.length * 100);
    });
    function R(h) {
      u(h);
    }
    function z(h) {
      return h === 0 ? "" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (h, x) => (o(), C(Me, { to: "body" }, [
      ce(m) ? (o(), n("div", {
        key: 0,
        class: Z(["model-download-queue", { minimized: !E.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: x[0] || (x[0] = (S) => E.value = !E.value)
        }, [
          e("div", xh, [
            x[4] || (x[4] = e("span", { class: "icon" }, "↓", -1)),
            x[5] || (x[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Sh, "(" + l(ce(r)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", Ih, [
            e("span", Eh, l(E.value ? "minimize" : "expand"), 1)
          ])
        ]),
        E.value ? (o(), n("div", Dh, [
          ce(s) ? (o(), n("div", Nh, [
            x[6] || (x[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(rt, {
              item: ce(s),
              onCancel: x[1] || (x[1] = (S) => R(ce(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ce(v).length > 0 ? (o(), n("div", Oh, [
            e("div", Uh, [
              e("span", Bh, "Paused (" + l(ce(v).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: x[2] || (x[2] = //@ts-ignore
                (...S) => ce(L) && ce(L)(...S))
              }, "Resume All")
            ]),
            e("div", Ph, [
              (o(!0), n(W, null, ee(ce(v), (S) => (o(), C(rt, {
                key: S.id,
                item: S,
                onResume: (K) => ce(p)(S.id),
                onRemove: (K) => ce(M)(S.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(i).length > 0 ? (o(), n("div", Vh, [
            e("div", Fh, [
              e("span", Ah, "Queued (" + l(ce(i).length) + ")", 1)
            ]),
            e("div", Wh, [
              (o(!0), n(W, null, ee(ce(i), (S) => (o(), C(rt, {
                key: S.id,
                item: S,
                onCancel: (K) => R(S.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ce(f).length > 0 ? (o(), n("div", Gh, [
            e("div", jh, [
              e("span", Hh, "Completed (" + l(ce(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: x[3] || (x[3] = //@ts-ignore
                (...S) => ce($) && ce($)(...S))
              }, "Clear")
            ]),
            e("div", Kh, [
              (o(!0), n(W, null, ee(ce(f).slice(0, 3), (S) => (o(), C(rt, {
                key: S.id,
                item: S,
                onRemove: (K) => ce(M)(S.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(y).length > 0 ? (o(), n("div", qh, [
            e("div", Jh, [
              e("span", Yh, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", Xh, [
              (o(!0), n(W, null, ee(ce(y), (S) => (o(), C(rt, {
                key: S.id,
                item: S,
                onRetry: (K) => ce(b)(S.id),
                onRemove: (K) => ce(M)(S.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", Mh, [
          e("div", zh, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${_.value}%` })
            }, null, 4)
          ]),
          ce(s) ? (o(), n("div", Lh, [
            e("span", Th, l(ce(s).filename), 1),
            e("span", Rh, l(z(ce(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), Zh = /* @__PURE__ */ J(Qh, [["__scopeId", "data-v-60751cfa"]]), ep = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', tp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', op = {
  comfy: ep,
  phosphor: tp
}, Tt = "comfy", qt = "comfygit-theme";
let Ye = null, Jt = Tt;
function sp() {
  try {
    const t = localStorage.getItem(qt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Yt(t = Tt) {
  Ye && Ye.remove(), Ye = document.createElement("style"), Ye.id = "comfygit-theme-styles", Ye.setAttribute("data-theme", t), Ye.textContent = op[t], document.head.appendChild(Ye), document.body.setAttribute("data-comfygit-theme", t), Jt = t;
  try {
    localStorage.setItem(qt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function np() {
  return Jt;
}
function ap(t) {
  Yt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const lp = sp();
Yt(lp);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), ap(t);
  },
  getTheme: () => {
    const t = np();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ne = null, Ie = null, mt = null, dt = null, Pt = null;
const st = I(null);
async function wt() {
  var t;
  if (!((t = ot) != null && t.api)) return null;
  try {
    const d = await ot.api.fetchApi("/v2/comfygit/status");
    d.ok && (st.value = await d.json());
  } catch {
  }
}
function ip() {
  if (!st.value) return !1;
  const t = st.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || st.value.has_changes;
}
function rp() {
  Ne && Ne.remove(), Ne = document.createElement("div"), Ne.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ne.appendChild(t), Ne.addEventListener("click", (i) => {
    i.target === Ne && Ct();
  });
  const d = (i) => {
    i.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Mt({
    render: () => zt(ah, {
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
function dp(t) {
  ct(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (f) => {
    Ie && !Ie.contains(f.target) && f.target !== t && (ct(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (f) => {
    f.key === "Escape" && (ct(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), mt = Mt({
    render: () => zt(Kt, {
      status: st.value,
      onClose: ct,
      onCommitted: () => {
        ct(), wt().then(vt);
      }
    })
  }), mt.mount(Ie), document.body.appendChild(Ie);
}
function ct() {
  mt && (mt.unmount(), mt = null), Ie && (Ie.remove(), Ie = null);
}
function cp() {
  dt || (dt = document.createElement("div"), dt.className = "comfygit-download-queue-root", Pt = Mt({
    render: () => zt(Zh)
  }), Pt.mount(dt), document.body.appendChild(dt), console.log("[ComfyGit] Model download queue mounted"));
}
let Ae = null;
function vt() {
  if (!Ae) return;
  const t = Ae.querySelector(".commit-indicator");
  t && (t.style.display = ip() ? "block" : "none");
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
ot.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = rp, Ae = document.createElement("button"), Ae.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ae.innerHTML = 'Commit <span class="commit-indicator"></span>', Ae.title = "Quick Commit", Ae.onclick = () => dp(Ae), t.appendChild(d), t.appendChild(Ae), (y = (f = ot.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (ot.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), cp();
    const { loadPendingDownloads: s } = bt();
    s(), await wt(), vt(), setInterval(async () => {
      await wt(), vt();
    }, 3e4);
    const i = ot.api;
    if (i) {
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => v(), u.appendChild(p);
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
        const { change_type: b, workflow_name: p } = u.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${p}`), await wt(), vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (u) => {
        const b = u.detail != null;
        b && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), v()) : m()), r = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
