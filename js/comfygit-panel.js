import { app as et } from "../../scripts/app.js";
import { defineComponent as J, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as re, createBlock as x, resolveDynamicComponent as It, normalizeClass as se, withCtx as a, toDisplayString as l, createVNode as v, createTextVNode as w, computed as U, Fragment as H, renderList as ne, normalizeStyle as He, ref as C, onMounted as pe, watch as Et, Teleport as be, withModifiers as he, Transition as no, withKeys as Ae, onUnmounted as ao, reactive as Vt, readonly as lo, unref as ce, withDirectives as io, vModelText as ro, resolveComponent as co, createSlots as Ft, TransitionGroup as uo, createApp as Mt, h as zt } from "vue";
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
}), Y = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [r, f] of d)
    s[r] = f;
  return s;
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
    return (d, s) => (o(), x(It(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", yo, l(t.prefix), 1)) : (o(), n("span", wo)),
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
    return (d, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (r) => d.$emit("click"))
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
    return (d, s) => (o(), n("div", {
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", xo, [
        v(ko, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            w(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(At, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => d.$emit("info-click"))
        })) : c("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", So, [
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
    return (d, s) => (o(), x(It(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Eo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", Mo, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
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
    return (d, s) => (o(), n("div", Lo, [
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
    const d = t, s = U(() => `status-item--${d.variant}`);
    return (r, f) => (o(), n("div", {
      class: se(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Bo, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", Po, l(t.count), 1)) : c("", !0),
      e("span", Vo, l(t.label), 1)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Y(Fo, [["__scopeId", "data-v-6f929183"]]), Ao = { class: "issue-card__header" }, Wo = { class: "issue-card__icon" }, Go = { class: "issue-card__title" }, jo = {
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
    const d = t, s = U(() => `issue-card--${d.severity}`);
    return (r, f) => (o(), n("div", {
      class: se(["issue-card", s.value])
    }, [
      e("div", Ao, [
        e("span", Wo, l(t.icon), 1),
        e("h4", Go, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), n("div", jo, [
        t.description ? (o(), n("p", Ho, l(t.description), 1)) : c("", !0),
        re(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", qo, [
        (o(!0), n(H, null, ne(t.items, (y, h) => (o(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), n("div", Ko, [
        re(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ Y(Jo, [["__scopeId", "data-v-df6aa348"]]), Yo = ["type", "disabled"], Qo = {
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", Qo)) : c("", !0),
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
    return (d, s) => (o(), n("div", Zo, [
      t.icon ? (o(), n("div", es, l(t.icon), 1)) : c("", !0),
      e("p", ts, l(t.message), 1),
      t.actionLabel ? (o(), x(X, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => d.$emit("action"))
      }, {
        default: a(() => [
          w(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ Y(os, [["__scopeId", "data-v-4466284f"]]), ss = { class: "branch-indicator" }, ns = { class: "branch-indicator__info" }, as = { class: "branch-indicator__label" }, ls = { class: "branch-indicator__name" }, is = {
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
}), vs = /* @__PURE__ */ Y(ms, [["__scopeId", "data-v-cb8dd50e"]]), fs = /* @__PURE__ */ J({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: se(["detail-label"]),
      style: He({ minWidth: t.minWidth })
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
    return (d, s) => (o(), n("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
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
    return (d, s) => (o(), n("div", hs, [
      v(xt, { "min-width": t.labelMinWidth }, {
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
}), ve = /* @__PURE__ */ Y(ps, [["__scopeId", "data-v-ef15664a"]]), ys = { class: "modal-header" }, ws = { class: "modal-body" }, bs = { class: "status-section" }, ks = {
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
    const d = t, s = C(!1);
    pe(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (M, I) => {
      console.log("StatusDetailModal show prop changed from", I, "to", M);
    }, { immediate: !0 });
    const r = U(() => {
      var M, I, _;
      return ((_ = (I = (M = d.status) == null ? void 0 : M.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var M, I, _;
      return ((_ = (I = (M = d.status) == null ? void 0 : M.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), y = U(() => {
      var M, I, _;
      return ((_ = (I = (M = d.status) == null ? void 0 : M.workflows) == null ? void 0 : I.synced) == null ? void 0 : _.filter((S) => {
        var $, F, L;
        const k = (L = (F = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : L.find((p) => p.name === S);
        return !k || k.status !== "broken";
      })) || [];
    }), h = U(() => {
      var M, I, _, S, k;
      return (M = d.status) != null && M.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = d.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((k = d.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), u = U(() => {
      var I, _, S;
      const M = (I = d.status) == null ? void 0 : I.git_changes;
      return M ? (((_ = M.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = M.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || M.workflow_changes || M.has_other_changes : !1;
    }), i = U(() => {
      var M, I, _, S, k, $;
      return !h.value && !u.value && ((I = (M = d.status) == null ? void 0 : M.comparison) == null ? void 0 : I.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && ((($ = (k = (S = d.status) == null ? void 0 : S.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), m = U(() => {
      var I, _;
      const M = (_ = (I = d.status) == null ? void 0 : I.git_changes) == null ? void 0 : _.workflow_changes;
      return M ? typeof M == "number" ? M : Object.keys(M).length : 0;
    });
    function b(M) {
      return typeof M == "string" ? M : M.name;
    }
    function g(M) {
      return typeof M == "object" && M.is_development === !0;
    }
    return (M, I) => {
      var _, S, k, $, F, L, p, z, D, Q, P, N, B, G, A, te, W, V, Z, K, O, oe;
      return o(), x(be, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[5] || (I[5] = (ee) => M.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[4] || (I[4] = he(() => {
            }, ["stop"]))
          }, [
            e("div", ys, [
              I[6] || (I[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (ee) => M.$emit("close"))
              }, "✕")
            ]),
            e("div", ws, [
              e("div", bs, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[7] || (I[7] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                v(ve, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), n("div", ks, [
                e("div", _s, [
                  v(Ee, { level: "4" }, {
                    default: a(() => [...I[8] || (I[8] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (ee) => M.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), n("div", $s, [
                  e("div", Cs, [
                    I[9] || (I[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), n(H, null, ne(r.value, (ee) => (o(), n("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Is, l(ee.name), 1),
                      e("span", Es, l(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), n("div", Ms, [
                  e("div", zs, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ls, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), n(H, null, ne(f.value, (ee) => (o(), n("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(ee.name), 1),
                      e("span", Rs, l(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = (_ = t.status.workflows) == null ? void 0 : _.new) != null && S.length ? (o(), n("div", Ns, [
                  e("div", Os, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Us, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Bs, [
                    (o(!0), n(H, null, ne(t.status.workflows.new, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ps, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (k = t.status.workflows) == null ? void 0 : k.modified) != null && $.length ? (o(), n("div", Vs, [
                  e("div", Fs, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", As, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ws, [
                    (o(!0), n(H, null, ne(t.status.workflows.modified, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Gs, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && L.length ? (o(), n("div", js, [
                  e("div", Hs, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", qs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ks, [
                    (o(!0), n(H, null, ne(t.status.workflows.deleted, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Js, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (o(), n("div", Ys, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (ee) => s.value = !s.value)
                  }, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Qs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Xs, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", Zs, [
                    (o(!0), n(H, null, ne(y.value, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", en, l(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              u.value ? (o(), n("div", tn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[15] || (I[15] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (z = (p = t.status.git_changes) == null ? void 0 : p.nodes_added) != null && z.length ? (o(), n("div", on, [
                  e("div", sn, [
                    I[16] || (I[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", nn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (o(!0), n(H, null, ne(t.status.git_changes.nodes_added, (ee) => (o(), n("div", {
                      key: b(ee),
                      class: "change-item"
                    }, [
                      e("span", ln, l(b(ee)), 1),
                      g(ee) ? (o(), n("span", rn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (Q = (D = t.status.git_changes) == null ? void 0 : D.nodes_removed) != null && Q.length ? (o(), n("div", dn, [
                  e("div", cn, [
                    I[17] || (I[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", un, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", mn, [
                    (o(!0), n(H, null, ne(t.status.git_changes.nodes_removed, (ee) => (o(), n("div", {
                      key: b(ee),
                      class: "change-item"
                    }, [
                      e("span", vn, l(b(ee)), 1),
                      g(ee) ? (o(), n("span", fn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = t.status.git_changes) != null && P.workflow_changes ? (o(), n("div", gn, [
                  I[18] || (I[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", hn, [
                    e("div", pn, [
                      e("span", yn, l(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (N = t.status.git_changes) != null && N.has_other_changes ? (o(), n("div", wn, [...I[19] || (I[19] = [
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
              (B = t.status.comparison) != null && B.is_synced ? c("", !0) : (o(), n("div", bn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[20] || (I[20] = [
                    w("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                I[21] || (I[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (A = (G = t.status.comparison) == null ? void 0 : G.missing_nodes) != null && A.length ? (o(), n("div", kn, [
                  v(ve, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", _n, [
                    (o(!0), n(H, null, ne(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), n("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + l(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", $n, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (W = (te = t.status.comparison) == null ? void 0 : te.extra_nodes) != null && W.length ? (o(), n("div", Cn, [
                  v(ve, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", xn, [
                    (o(!0), n(H, null, ne(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), n("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + l(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", Sn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Z = (V = t.status.comparison) == null ? void 0 : V.version_mismatches) != null && Z.length ? (o(), n("div", In, [
                  v(ve, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (K = t.status.comparison) != null && K.packages_in_sync ? c("", !0) : (o(), n("div", En, [
                  v(ve, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (oe = (O = t.status.comparison) == null ? void 0 : O.disabled_nodes) != null && oe.length ? (o(), n("div", Mn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[22] || (I[22] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", zn, [
                  I[23] || (I[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ln, [
                  (o(!0), n(H, null, ne(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), n("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + l(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Tn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Dn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[24] || (I[24] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Rn, [
                  I[25] || (I[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[26] || (I[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              i.value ? (o(), n("div", Nn, [...I[27] || (I[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", On, [
              v(X, {
                variant: "secondary",
                onClick: I[3] || (I[3] = (ee) => M.$emit("close"))
              }, {
                default: a(() => [...I[28] || (I[28] = [
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
    const s = t, r = C(!1), f = C(!1);
    pe(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function h() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function u() {
      r.value = !1, i("view-workflows");
    }
    const i = d, m = U(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = U(() => {
      const L = s.status.git_changes;
      return L.nodes_added.length > 0 || L.nodes_removed.length > 0 || L.workflow_changes || L.has_other_changes;
    }), g = U(() => m.value || b.value), M = U(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), I = U(() => s.status.git_changes.has_other_changes), _ = U(() => {
      var L;
      return ((L = s.status.workflows.analyzed) == null ? void 0 : L.filter(
        (p) => p.status === "broken" && p.sync_state === "synced"
      )) || [];
    }), S = U(() => {
      var L;
      return ((L = s.status.workflows.analyzed) == null ? void 0 : L.filter(
        (p) => p.status === "broken" && p.sync_state !== "synced"
      )) || [];
    }), k = U(() => _.value.length > 0 || S.value.length > 0), $ = U(() => k.value || s.status.missing_models_count > 0 || g.value || !s.status.comparison.is_synced), F = U(() => {
      const L = [];
      return s.status.workflows.new.length > 0 && L.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && L.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && L.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && L.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && L.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${L.length > 0 ? L.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (L, p) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: p[0] || (p[0] = (z) => f.value = !0),
            onMouseleave: p[1] || (p[1] = (z) => f.value = !1)
          }, [
            e("div", Bn, [
              v(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...p[11] || (p[11] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              v(no, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), x(X, {
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
            v(Uo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                v(Pe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: M.value,
                  label: M.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                I.value ? (o(), x(Pe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), x(Pe, {
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
            v(vs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                v(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p[2] || (p[2] = (z) => L.$emit("switch-branch"))
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
          t.status.is_detached_head ? (o(), x(Je, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              v(X, {
                variant: "primary",
                size: "sm",
                onClick: p[3] || (p[3] = (z) => L.$emit("create-branch"))
              }, {
                default: a(() => [...p[14] || (p[14] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          $.value ? (o(), n("div", Vn, [
            v(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...p[15] || (p[15] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (o(), x(Je, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: a(() => [
                v(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[4] || (p[4] = (z) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[16] || (p[16] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            S.value.length > 0 ? (o(), x(Je, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: S.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: a(() => [
                v(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[5] || (p[5] = (z) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[17] || (p[17] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), x(Je, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                v(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[6] || (p[6] = (z) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...p[18] || (p[18] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            g.value ? (o(), x(Je, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: F.value
            }, {
              actions: a(() => [
                v(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: h
                }, {
                  default: a(() => [...p[19] || (p[19] = [
                    w(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                v(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[7] || (p[7] = (z) => L.$emit("commit-changes"))
                }, {
                  default: a(() => [...p[20] || (p[20] = [
                    w(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), x(Je, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                v(X, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p[8] || (p[8] = (z) => L.$emit("view-debug"))
                }, {
                  default: a(() => [...p[21] || (p[21] = [
                    w(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                v(X, {
                  variant: "primary",
                  size: "sm",
                  onClick: p[9] || (p[9] = (z) => L.$emit("sync-environment"))
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
          !$.value && !b.value ? (o(), x(Re, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      v(Nt, {
        show: r.value,
        status: t.status,
        onClose: p[10] || (p[10] = (z) => r.value = !1),
        onNavigateWorkflows: u
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
  setup(t, { expose: d, emit: s }) {
    const r = t, f = s, y = C(null);
    function h(u) {
      const i = u.target.value;
      f("update:modelValue", i);
    }
    return pe(() => {
      r.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var u;
        return (u = y.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = y.value) == null ? void 0 : u.blur();
      }
    }), (u, i) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        i[0] || (i[0] = Ae((m) => u.$emit("enter"), ["enter"])),
        i[1] || (i[1] = Ae((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (m) => u.$emit("focus")),
      onBlur: i[3] || (i[3] = (m) => u.$emit("blur"))
    }, null, 42, Wn));
  }
}), ft = /* @__PURE__ */ Y(Gn, [["__scopeId", "data-v-0380d08f"]]), jn = { class: "branch-create-form" }, Hn = { class: "form-actions" }, qn = /* @__PURE__ */ J({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, r = C(""), f = U(() => {
      const u = r.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function y() {
      f.value && (s("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", s("cancel");
    }
    return (u, i) => (o(), n("div", jn, [
      v(ft, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Hn, [
        v(X, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...i[1] || (i[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        v(X, {
          variant: "secondary",
          size: "sm",
          onClick: h
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
    return (d, s) => (o(), n("div", {
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && d.$emit("click"))
    }, [
      e("span", Jn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Yn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Qn, [
        re(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", Xn, " current ")) : c("", !0)
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
    const s = d, r = C(!1);
    function f(h) {
      s("create", h), y();
    }
    function y() {
      r.value = !1;
    }
    return (h, u) => (o(), x(Ce, null, {
      header: a(() => [
        v(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            v(X, {
              variant: "ghost",
              size: "sm",
              onClick: u[0] || (u[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...u[1] || (u[1] = [
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
          onCreate: f,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), x(Re, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", ta, [
          (o(!0), n(H, null, ne(t.branches, (i) => (o(), x(ea, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: a(() => [
              i.is_current ? c("", !0) : (o(), x(X, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", i.name)
              }, {
                default: a(() => [...u[2] || (u[2] = [
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
    return (d, s) => (o(), n("div", na, [
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
    const d = t, s = U(() => d.hash.slice(0, d.length));
    return (r, f) => (o(), n("span", ia, l(s.value), 1));
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
    const s = t, r = d;
    function f() {
      s.clickable && r("click");
    }
    return (y, h) => (o(), n("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      v(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", da, l(t.message), 1),
      e("span", ca, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = he(() => {
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
    return (d, s) => (o(), x(Ce, null, {
      header: a(() => [
        v(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), x(Re, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(la, { key: 1 }, {
          default: a(() => [
            (o(!0), n(H, null, ne(t.commits, (r) => (o(), x(ma, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (f) => d.$emit("select", r)
            }, {
              actions: a(() => [
                v(X, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => d.$emit("checkout", r),
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
}), fa = /* @__PURE__ */ Y(va, [["__scopeId", "data-v-981c3c64"]]), Dp = [
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
], Rp = {
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
], Np = [
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
function ke() {
  const t = C(!1), d = C(null);
  async function s(E, T) {
    var ie;
    if (!((ie = window.app) != null && ie.api))
      throw new Error("ComfyUI API not available");
    const q = await window.app.api.fetchApi(E, T);
    if (!q.ok) {
      const _e = await q.json().catch(() => ({}));
      throw new Error(_e.error || _e.message || `Request failed: ${q.status}`);
    }
    return q.json();
  }
  async function r(E = !1) {
    return s(E ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(E, T = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: E, allow_issues: T })
    });
  }
  async function y(E = 10, T = 0) {
    return s(`/v2/comfygit/log?limit=${E}&offset=${T}`);
  }
  async function h(E) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: E })
    });
  }
  async function u() {
    return s("/v2/comfygit/branches");
  }
  async function i(E) {
    return s(`/v2/comfygit/commit/${E}`);
  }
  async function m(E, T = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: E, force: T })
    });
  }
  async function b(E, T = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: E, start_point: T })
    });
  }
  async function g(E, T = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: E, force: T })
    });
  }
  async function M() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const E = await r();
        return [{
          name: E.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + E.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: E.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: E.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function I(E) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: E })
    });
  }
  async function _() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function S(E, T, q) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: E, pytorch_backend: T, clone_from: q })
    });
  }
  async function k(E) {
    return s(`/v2/workspace/environments/${E}`, {
      method: "DELETE"
    });
  }
  async function $(E = !1) {
    try {
      return s(E ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const T = await r(E), q = [];
      return T.workflows.new.forEach((ie) => {
        q.push({ name: ie, status: "new", missing_nodes: 0, missing_models: 0, path: ie });
      }), T.workflows.modified.forEach((ie) => {
        q.push({ name: ie, status: "modified", missing_nodes: 0, missing_models: 0, path: ie });
      }), T.workflows.synced.forEach((ie) => {
        q.push({ name: ie, status: "synced", missing_nodes: 0, missing_models: 0, path: ie });
      }), q;
    }
  }
  async function F(E) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(E)}/details`);
  }
  async function L(E) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(E)}/resolve`, {
      method: "POST"
    });
  }
  async function p(E, T, q) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(E)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: T, install_models: q })
    });
  }
  async function z(E, T, q) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(E)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: T, importance: q })
    });
  }
  async function D() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Q() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function P(E) {
    return s(`/v2/workspace/models/details/${encodeURIComponent(E)}`);
  }
  async function N(E) {
    return s("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: E })
    });
  }
  async function B(E, T) {
    return s(`/v2/workspace/models/${E}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: T })
    });
  }
  async function G(E, T) {
    return s(`/v2/workspace/models/${E}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: T })
    });
  }
  async function A(E) {
    return s(`/v2/workspace/models/${E}`, {
      method: "DELETE"
    });
  }
  async function te(E) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(E)
    });
  }
  async function W() {
    return s("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function V() {
    return s("/v2/workspace/models/directory");
  }
  async function Z(E) {
    return s("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: E })
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
  async function O(E) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(E)
    });
  }
  async function oe(E, T) {
    try {
      const q = new URLSearchParams();
      return E && q.append("level", E), T && q.append("lines", T.toString()), s(`/v2/comfygit/debug/logs?${q}`);
    } catch {
      return [];
    }
  }
  async function ee(E, T) {
    try {
      const q = new URLSearchParams();
      return E && q.append("level", E), T && q.append("lines", T.toString()), s(`/v2/workspace/debug/logs?${q}`);
    } catch {
      return [];
    }
  }
  async function we() {
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
  async function fe(E) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(E)}/install`, {
      method: "POST"
    });
  }
  async function Qe(E) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(E)}/update`, {
      method: "POST"
    });
  }
  async function me(E) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(E)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function nt(E, T) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: E, url: T })
    });
  }
  async function qe(E) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(E)}`, {
      method: "DELETE"
    });
  }
  async function Se(E, T, q) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(E)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: T, push_url: q })
    });
  }
  async function at(E) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(E)}/fetch`, {
      method: "POST"
    });
  }
  async function Xe(E) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(E)}/status`);
    } catch {
      return null;
    }
  }
  async function lt(E = "skip", T = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: E,
        remove_extra_nodes: T
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: r,
    commit: f,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: u,
    getCommitDetail: i,
    checkout: m,
    createBranch: b,
    switchBranch: g,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: I,
    getSwitchProgress: _,
    createEnvironment: S,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: $,
    getWorkflowDetails: F,
    resolveWorkflow: L,
    installWorkflowDeps: p,
    setModelImportance: z,
    // Model Management
    getEnvironmentModels: D,
    getWorkspaceModels: Q,
    getModelDetails: P,
    openFileLocation: N,
    addModelSource: B,
    removeModelSource: G,
    deleteModel: A,
    downloadModel: te,
    scanWorkspaceModels: W,
    getModelsDirectory: V,
    setModelsDirectory: Z,
    // Settings
    getConfig: K,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: oe,
    getWorkspaceLogs: ee,
    // Node Management
    getNodes: we,
    installNode: fe,
    updateNode: Qe,
    uninstallNode: me,
    // Git Remotes
    getRemotes: Me,
    addRemote: nt,
    removeRemote: qe,
    updateRemoteUrl: Se,
    fetchRemote: at,
    getRemoteSyncStatus: Xe,
    // Environment Sync
    syncEnvironmentManually: lt
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
    const s = t, r = d;
    function f() {
      s.closeOnOverlayClick && r("close");
    }
    function y(h) {
      h.key === "Escape" && r("close");
    }
    return pe(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, u) => (o(), x(be, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = he(() => {
          }, ["stop"]))
        }, [
          e("div", ha, [
            re(h.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", pa, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (i) => h.$emit("close"))
            }, [...u[2] || (u[2] = [
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
            t.loading ? (o(), n("div", wa, "Loading...")) : t.error ? (o(), n("div", ba, l(t.error), 1)) : re(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), n("div", ka, [
            re(h.$slots, "footer", {}, void 0, !0)
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", Ca)) : c("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, $a));
  }
}), ae = /* @__PURE__ */ Y(xa, [["__scopeId", "data-v-f3452606"]]), Sa = {
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
    return (d, s) => (o(), x(It(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Sa, "(" + l(t.count) + ")", 1)) : c("", !0)
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
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, f) => (o(), n("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ma, l(t.placeholder), 1)) : c("", !0),
        (o(!0), n(H, null, ne(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, za))), 128))
      ], 42, Ea),
      t.error ? (o(), n("span", La, l(t.error), 1)) : c("", !0)
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
    return (d, s) => (o(), x(be, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: He({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = he(() => {
          }, ["stop"]))
        }, [
          e("div", Ra, [
            e("h4", Na, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
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
}), We = /* @__PURE__ */ Y(Ba, [["__scopeId", "data-v-42815ace"]]), Pa = { class: "detail-section" }, Va = {
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
    const s = t, r = d, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: h } = ke(), u = C(null), i = C(!1), m = C(null), b = C(!1), g = C({}), M = C({}), I = C(!1), _ = C(/* @__PURE__ */ new Set()), S = [
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
    function $(N) {
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
    function F(N) {
      if (!N.loaded_by || N.loaded_by.length === 0) return [];
      const B = N.hash || N.filename;
      return _.value.has(B) ? N.loaded_by : N.loaded_by.slice(0, 3);
    }
    function L(N) {
      return _.value.has(N);
    }
    function p(N) {
      _.value.has(N) ? _.value.delete(N) : _.value.add(N), _.value = new Set(_.value);
    }
    async function z() {
      i.value = !0, m.value = null;
      try {
        u.value = await f(s.workflowName);
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function D(N, B) {
      g.value[N] = B, b.value = !0;
    }
    async function Q() {
      if (!b.value) {
        r("close");
        return;
      }
      i.value = !0, m.value = null;
      try {
        for (const [N, B] of Object.entries(g.value))
          await y(s.workflowName, N, B);
        r("refresh"), r("close");
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function P(N) {
      M.value[N] = !0, m.value = null;
      try {
        await h(s.workflowName, !0, !1), await z();
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to install node";
      } finally {
        M.value[N] = !1;
      }
    }
    return pe(z), (N, B) => (o(), n(H, null, [
      v(gt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: m.value || void 0,
        onClose: B[5] || (B[5] = (G) => r("close"))
      }, {
        body: a(() => [
          u.value ? (o(), n(H, { key: 0 }, [
            e("section", Pa, [
              v(ut, { variant: "section" }, {
                default: a(() => [
                  w("MODELS USED (" + l(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (o(), n("div", Va, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(H, null, ne(u.value.models, (G) => (o(), n("div", {
                key: G.hash || G.filename,
                class: "model-card"
              }, [
                e("div", Fa, [
                  B[7] || (B[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Aa, l(G.filename), 1)
                ]),
                e("div", Wa, [
                  e("div", Ga, [
                    B[8] || (B[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", k(G.status)])
                    }, l($(G.status)), 3)
                  ]),
                  e("div", ja, [
                    e("span", Ha, [
                      B[9] || (B[9] = w(" Importance: ", -1)),
                      v(At, {
                        size: 14,
                        title: "About importance levels",
                        onClick: B[0] || (B[0] = (A) => I.value = !0)
                      })
                    ]),
                    v(Da, {
                      "model-value": g.value[G.filename] || G.importance,
                      options: S,
                      "onUpdate:modelValue": (A) => D(G.filename, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  G.loaded_by && G.loaded_by.length > 0 ? (o(), n("div", qa, [
                    B[10] || (B[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ka, [
                      (o(!0), n(H, null, ne(F(G), (A, te) => (o(), n("div", {
                        key: `${A.node_id}-${te}`,
                        class: "node-reference"
                      }, l(A.node_type) + " (Node #" + l(A.node_id) + ") ", 1))), 128)),
                      G.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => p(G.hash || G.filename)
                      }, l(L(G.hash || G.filename) ? "▼ Show less" : `▶ View all (${G.loaded_by.length})`), 9, Ja)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  G.size_mb ? (o(), n("div", Ya, [
                    B[11] || (B[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Qa, l(G.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                G.status !== "available" ? (o(), n("div", Xa, [
                  G.status === "downloadable" ? (o(), x(ae, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: B[1] || (B[1] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...B[12] || (B[12] = [
                      w(" Download ", -1)
                    ])]),
                    _: 1
                  })) : G.status === "path_mismatch" ? (o(), x(ae, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[2] || (B[2] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...B[13] || (B[13] = [
                      w(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(ae, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[3] || (B[3] = (A) => r("resolve"))
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
              v(ut, { variant: "section" }, {
                default: a(() => [
                  w("NODES USED (" + l(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (o(), n("div", el, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(H, null, ne(u.value.nodes, (G) => (o(), n("div", {
                key: G.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", G.status === "installed" ? "installed" : "missing"])
                }, l(G.status === "installed" ? "✓" : "✕"), 3),
                e("span", tl, l(G.name), 1),
                G.version ? (o(), n("span", ol, "v" + l(G.version), 1)) : c("", !0),
                G.status === "missing" ? (o(), x(ae, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: M.value[G.name],
                  onClick: (A) => P(G.name),
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
          v(ae, {
            variant: "secondary",
            onClick: B[4] || (B[4] = (G) => r("close"))
          }, {
            default: a(() => [...B[16] || (B[16] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), x(ae, {
            key: 0,
            variant: "primary",
            onClick: Q
          }, {
            default: a(() => [...B[17] || (B[17] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      v(We, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (G) => I.value = !1)
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
let Be = null;
function Gt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ue.items.find((d) => d.id === t);
}
async function Ze() {
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
    ue.status = "idle", Ze();
  }
}
async function al(t) {
  return new Promise((d, s) => {
    Be && (Be.close(), Be = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Be = f;
    let y = Date.now(), h = 0, u = !1;
    f.onmessage = (i) => {
      try {
        const m = JSON.parse(i.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const b = Date.now(), g = (b - y) / 1e3;
            if (g > 0.5) {
              const M = t.downloaded - h;
              if (t.speed = M / g, y = b, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const I = t.size - t.downloaded;
                t.eta = I / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            u = !0, f.close(), Be = null, d();
            break;
          case "error":
            u = !0, f.close(), Be = null, s(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Be = null, u || s(new Error("Connection lost"));
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
      const r = {
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
    ue.status === "idle" && Ze();
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
        Be && (Be.close(), Be = null), $.status = "failed", $.error = "Cancelled by user", ue.status = "idle", Ze();
      } else if ($.status === "queued") {
        const F = ue.items.findIndex((L) => L.id === k);
        F >= 0 && ue.items.splice(F, 1);
      }
    }
  }
  function s(k) {
    const $ = _t(k);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, ue.status === "idle" && Ze());
  }
  function r(k) {
    const $ = _t(k);
    !$ || $.status !== "paused" || ($.status = "queued", ue.status === "idle" && Ze());
  }
  function f() {
    const k = ue.items.filter(($) => $.status === "paused");
    for (const $ of k)
      $.status = "queued";
    ue.status === "idle" && Ze();
  }
  function y(k) {
    const $ = ue.items.findIndex((F) => F.id === k);
    $ >= 0 && ["completed", "failed", "paused"].includes(ue.items[$].status) && ue.items.splice($, 1);
  }
  function h() {
    ue.items = ue.items.filter((k) => k.status !== "completed");
  }
  function u() {
    ue.items = ue.items.filter((k) => k.status !== "failed");
  }
  const i = U(
    () => ue.items.find((k) => k.status === "downloading")
  ), m = U(
    () => ue.items.filter((k) => k.status === "queued")
  ), b = U(
    () => ue.items.filter((k) => k.status === "completed")
  ), g = U(
    () => ue.items.filter((k) => k.status === "failed")
  ), M = U(
    () => ue.items.filter((k) => k.status === "paused")
  ), I = U(() => ue.items.length > 0), _ = U(
    () => ue.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), S = U(
    () => ue.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(ue),
    // Computed
    currentDownload: i,
    queuedItems: m,
    completedItems: b,
    failedItems: g,
    pausedItems: M,
    hasItems: I,
    activeCount: _,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: s,
    resumeDownload: r,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: h,
    clearFailed: u,
    loadPendingDownloads: ll
  };
}
function il() {
  const t = C(null), d = C(null), s = C([]), r = C([]), f = C(!1), y = C(null);
  async function h(k, $) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(k, $);
    if (!F.ok) {
      const p = await F.json().catch(() => ({})), z = p.error || p.message || `Request failed: ${F.status}`;
      throw new Error(z);
    }
    return F.json();
  }
  async function u(k) {
    f.value = !0, y.value = null;
    try {
      let $;
      return wt() || ($ = await h(
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
      f.value = !1;
    }
  }
  async function i(k, $, F) {
    f.value = !0, y.value = null;
    try {
      let L;
      if (!wt()) {
        const p = Object.fromEntries($), z = Object.fromEntries(F);
        L = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: p,
              model_choices: z
            })
          }
        );
      }
      return d.value = L, L;
    } catch (L) {
      const p = L instanceof Error ? L.message : "Unknown error occurred";
      throw y.value = p, L;
    } finally {
      f.value = !1;
    }
  }
  async function m(k, $ = 10) {
    f.value = !0, y.value = null;
    try {
      let F;
      return wt() || (F = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: $ })
        }
      )), s.value = F.results, F.results;
    } catch (F) {
      const L = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = L, F;
    } finally {
      f.value = !1;
    }
  }
  async function b(k, $ = 10) {
    f.value = !0, y.value = null;
    try {
      let F;
      return wt() || (F = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: $ })
        }
      )), r.value = F.results, F.results;
    } catch (F) {
      const L = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = L, F;
    } finally {
      f.value = !1;
    }
  }
  const g = Vt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function M() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.error = void 0;
  }
  async function I(k, $, F) {
    M(), g.phase = "resolving", y.value = null;
    const L = Object.fromEntries($), p = Object.fromEntries(F);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: p
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const D = z.body.getReader(), Q = new TextDecoder();
      let P = "";
      for (; ; ) {
        const { done: N, value: B } = await D.read();
        if (N) break;
        P += Q.decode(B, { stream: !0 });
        const G = P.split(`

`);
        P = G.pop() || "";
        for (const A of G) {
          if (!A.trim()) continue;
          const te = A.split(`
`);
          let W = "", V = "";
          for (const Z of te)
            Z.startsWith("event: ") ? W = Z.slice(7) : Z.startsWith("data: ") && (V = Z.slice(6));
          if (V)
            try {
              const Z = JSON.parse(V);
              _(W, Z);
            } catch (Z) {
              console.warn("Failed to parse SSE event:", Z);
            }
        }
      }
    } catch (z) {
      const D = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = D, g.error = D, g.phase = "error", z;
    }
  }
  function _(k, $) {
    switch (k) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = $.total;
        break;
      case "file_start":
        g.currentFile = $.filename, g.currentFileIndex = $.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = $.downloaded, g.bytesTotal = $.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: $.filename,
          success: $.success,
          error: $.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = $.nodes_to_install || [], $.download_results && (g.completedFiles = $.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = $.message, g.phase = "error", y.value = $.message;
        break;
    }
  }
  function S(k, $) {
    const { addToQueue: F } = ht(), L = $.filter((p) => p.url && p.target_path).map((p) => ({
      workflow: k,
      filename: p.filename,
      url: p.url,
      targetPath: p.target_path,
      size: p.size || 0,
      type: "model"
    }));
    return L.length > 0 && F(L), L.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
    modelSearchResults: r,
    isLoading: f,
    error: y,
    progress: g,
    // Methods
    analyzeWorkflow: u,
    applyResolution: i,
    applyResolutionWithProgress: I,
    searchNodes: m,
    searchModels: b,
    resetProgress: M,
    queueModelDownloads: S
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
    const s = t, r = d;
    function f(m) {
      var b;
      if ((b = s.stepStats) != null && b[m]) {
        const g = s.stepStats[m];
        return g.total > 0 && g.resolved === g.total;
      }
      return s.completedSteps.includes(m);
    }
    function y(m) {
      var b;
      if ((b = s.stepStats) != null && b[m]) {
        const g = s.stepStats[m];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function h(m) {
      return f(m) ? "state-complete" : y(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function i(m) {
      r("step-change", m);
    }
    return (m, b) => (o(), n("div", rl, [
      e("div", dl, [
        (o(!0), n(H, null, ne(t.steps, (g, M) => (o(), n("div", {
          key: g.id,
          class: se(["step", {
            active: t.currentStep === g.id,
            completed: f(g.id),
            "in-progress": y(g.id),
            disabled: u(g.id)
          }]),
          onClick: (I) => i(g.id)
        }, [
          e("div", {
            class: se(["step-indicator", h(g.id)])
          }, [
            f(g.id) ? (o(), n("span", ul, "✓")) : (o(), n("span", ml, l(M + 1), 1))
          ], 2),
          e("div", vl, l(g.label), 1),
          M < t.steps.length - 1 ? (o(), n("div", fl)) : c("", !0)
        ], 10, cl))), 128))
      ]),
      e("div", gl, [
        re(m.$slots, "default", {}, void 0, !0)
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
    const d = t, s = U(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), r = U(() => `confidence-${s.value}`), f = U(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, h) => (o(), n("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(f.value), 3));
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
    const s = t, r = d, f = U(() => !!s.choice);
    U(() => {
      var u;
      return (u = s.choice) == null ? void 0 : u.action;
    }), U(() => {
      var u;
      return (u = s.choice) == null ? void 0 : u.package_id;
    });
    const y = U(() => {
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
    function h(u) {
      r("option-selected", u);
    }
    return (u, i) => (o(), n("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", wl, [
        e("span", bl, [
          i[7] || (i[7] = w("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: se(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", kl, [
        f.value ? (o(), n("div", _l, [
          v(ae, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (m) => r("clear-choice"))
          }, {
            default: a(() => [...i[8] || (i[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", $l, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Cl, [
            (o(!0), n(H, null, ne(t.options, (m, b) => (o(), n("label", {
              key: m.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (g) => h(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (g) => h(b)
              }, null, 40, Sl),
              e("div", Il, [
                e("div", El, [
                  e("span", Ml, l(m.package_id), 1),
                  v(Lt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), n("div", zl, l(m.title), 1)) : c("", !0),
                e("div", Ll, [
                  m.is_installed ? (o(), n("span", Tl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, xl))), 128))
          ]),
          e("div", Dl, [
            v(ae, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (m) => r("search"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (m) => r("manual-entry"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (m) => r("mark-optional"))
            }, {
              default: a(() => [...i[11] || (i[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Rl, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Nl, [
            v(ae, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (m) => r("search"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (m) => r("manual-entry"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (m) => r("mark-optional"))
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
    const s = d;
    return (r, f) => (o(), n("div", Bl, [
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
    return (d, s) => (o(), n("div", {
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ae((r) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ae((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ql),
      t.error ? (o(), n("span", Kl, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), De = /* @__PURE__ */ Y(Jl, [["__scopeId", "data-v-9ba02cdc"]]), Yl = { class: "node-resolution-step" }, Ql = { class: "step-header" }, Xl = { class: "stat-badge" }, Zl = {
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
    const s = t, r = d, f = C(0), y = C(!1), h = C(!1), u = C(""), i = C(""), m = C([]), b = C(!1), g = U(() => s.nodes[f.value]), M = U(() => s.nodes.filter((G) => s.nodeChoices.has(G.node_type)).length), I = U(() => {
      var A;
      if (!g.value) return "not-found";
      const G = s.nodeChoices.get(g.value.node_type);
      if (G)
        switch (G.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = g.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), _ = U(() => {
      var A;
      if (!g.value) return;
      const G = s.nodeChoices.get(g.value.node_type);
      if (G)
        switch (G.action) {
          case "install":
            return G.package_id ? `→ ${G.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = g.value.options) != null && A.length ? `${g.value.options.length} matches` : "Not Found";
    });
    function S(G) {
      G >= 0 && G < s.nodes.length && (f.value = G);
    }
    function k() {
      g.value && r("mark-optional", g.value.node_type);
    }
    function $() {
      g.value && r("skip", g.value.node_type);
    }
    function F(G) {
      g.value && r("option-selected", g.value.node_type, G);
    }
    function L() {
      g.value && r("clear-choice", g.value.node_type);
    }
    function p() {
      g.value && (u.value = g.value.node_type, y.value = !0);
    }
    function z() {
      i.value = "", h.value = !0;
    }
    function D() {
      y.value = !1, u.value = "", m.value = [];
    }
    function Q() {
      h.value = !1, i.value = "";
    }
    function P() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function N(G) {
      g.value && (r("manual-entry", g.value.node_type, G.package_id), D());
    }
    function B() {
      !g.value || !i.value.trim() || (r("manual-entry", g.value.node_type, i.value.trim()), Q());
    }
    return (G, A) => {
      var te, W;
      return o(), n("div", Yl, [
        e("div", Ql, [
          A[4] || (A[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Xl, l(M.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        g.value ? (o(), x(jt, {
          key: 0,
          "item-name": g.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: A[0] || (A[0] = (V) => S(f.value - 1)),
          onNext: A[1] || (A[1] = (V) => S(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        g.value ? (o(), n("div", Zl, [
          v(Ul, {
            "node-type": g.value.node_type,
            "has-multiple-options": !!((te = g.value.options) != null && te.length),
            options: g.value.options,
            choice: (W = t.nodeChoices) == null ? void 0 : W.get(g.value.node_type),
            status: I.value,
            "status-label": _.value,
            onMarkOptional: k,
            onSkip: $,
            onManualEntry: z,
            onSearch: p,
            onOptionSelected: F,
            onClearChoice: L
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", ei, [...A[5] || (A[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), x(be, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: he(D, ["self"])
          }, [
            e("div", ti, [
              e("div", { class: "node-modal-header" }, [
                A[6] || (A[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", oi, [
                v(De, {
                  modelValue: u.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (V) => u.value = V),
                  placeholder: "Search by node type, package name...",
                  onInput: P
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), n("div", si, [
                  (o(!0), n(H, null, ne(m.value, (V) => (o(), n("div", {
                    key: V.package_id,
                    class: "node-search-result-item",
                    onClick: (Z) => N(V)
                  }, [
                    e("div", ai, [
                      e("code", li, l(V.package_id), 1),
                      V.match_confidence ? (o(), x(Lt, {
                        key: 0,
                        confidence: V.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    V.description ? (o(), n("div", ii, l(V.description), 1)) : c("", !0)
                  ], 8, ni))), 128))
                ])) : u.value && !b.value ? (o(), n("div", ri, ' No packages found matching "' + l(u.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), n("div", di, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), x(be, { to: "body" }, [
          h.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: he(Q, ["self"])
          }, [
            e("div", ci, [
              e("div", { class: "node-modal-header" }, [
                A[7] || (A[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              e("div", ui, [
                v(De, {
                  modelValue: i.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (V) => i.value = V),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", mi, [
                  v(ae, {
                    variant: "secondary",
                    onClick: Q
                  }, {
                    default: a(() => [...A[8] || (A[8] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(ae, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: B
                  }, {
                    default: a(() => [...A[9] || (A[9] = [
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
    const s = t, r = d, f = U(() => !!s.choice);
    U(() => {
      var i;
      return (i = s.choice) == null ? void 0 : i.action;
    }), U(() => {
      var i, m;
      return ((m = (i = s.choice) == null ? void 0 : i.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const y = U(() => {
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
    function h(i) {
      r("option-selected", i);
    }
    function u(i) {
      if (!i) return "Unknown";
      const m = i / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, m) => (o(), n("div", {
      class: se(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", gi, [
        e("span", hi, [
          m[7] || (m[7] = w("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: se(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", pi, [
        f.value ? (o(), n("div", yi, [
          v(ae, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (b) => r("clear-choice"))
          }, {
            default: a(() => [...m[8] || (m[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", wi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", bi, [
            (o(!0), n(H, null, ne(t.options, (b, g) => (o(), n("label", {
              key: b.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === g }]),
              onClick: (M) => h(g)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: g,
                checked: t.selectedOptionIndex === g,
                onChange: (M) => h(g)
              }, null, 40, _i),
              e("div", $i, [
                e("div", Ci, [
                  e("span", xi, l(b.model.filename), 1),
                  v(Lt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Si, [
                  e("span", Ii, l(u(b.model.size)), 1),
                  e("span", Ei, l(b.model.category), 1)
                ]),
                e("div", Mi, l(b.model.relative_path), 1)
              ])
            ], 10, ki))), 128))
          ]),
          e("div", zi, [
            v(ae, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (b) => r("search"))
            }, {
              default: a(() => [...m[9] || (m[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (b) => r("download-url"))
            }, {
              default: a(() => [...m[10] || (m[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (b) => r("mark-optional"))
            }, {
              default: a(() => [...m[11] || (m[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Li, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ti, [
            v(ae, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (b) => r("search"))
            }, {
              default: a(() => [...m[13] || (m[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (b) => r("download-url"))
            }, {
              default: a(() => [...m[14] || (m[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (b) => r("mark-optional"))
            }, {
              default: a(() => [...m[15] || (m[15] = [
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
    function r(K) {
      var O;
      return K && ((O = s[K]) == null ? void 0 : O[0]) || null;
    }
    const f = t, y = d, h = C(0), u = C(!1), i = C(!1), m = C(""), b = C(""), g = C(""), M = C([]), I = C(!1), _ = U(() => f.models[h.value]), S = U(() => f.models.some((K) => K.is_download_intent)), k = U(() => f.models.filter(
      (K) => f.modelChoices.has(K.filename) || K.is_download_intent
    ).length), $ = U(() => {
      var O;
      if (!_.value) return "";
      const K = r((O = _.value.reference) == null ? void 0 : O.node_type);
      return K ? `${K}/${_.value.filename}` : "";
    }), F = U(() => {
      var O;
      if (!_.value) return "not-found";
      const K = f.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (O = _.value.options) != null && O.length ? "ambiguous" : "not-found";
    }), L = U(() => {
      var O, oe;
      if (!_.value) return;
      const K = f.modelChoices.get(_.value.filename);
      if (K)
        switch (K.action) {
          case "select":
            return (O = K.selected_model) != null && O.filename ? `→ ${K.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (oe = _.value.options) != null && oe.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function p(K) {
      K >= 0 && K < f.models.length && (h.value = K);
    }
    function z() {
      _.value && y("mark-optional", _.value.filename);
    }
    function D() {
      _.value && y("skip", _.value.filename);
    }
    function Q(K) {
      _.value && y("option-selected", _.value.filename, K);
    }
    function P() {
      _.value && y("clear-choice", _.value.filename);
    }
    function N() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function B() {
      _.value && (b.value = _.value.download_source || "", g.value = _.value.target_path || $.value, i.value = !0);
    }
    function G() {
      u.value = !1, m.value = "", M.value = [];
    }
    function A() {
      i.value = !1, b.value = "", g.value = "";
    }
    function te() {
      I.value = !0, setTimeout(() => {
        I.value = !1;
      }, 300);
    }
    function W(K) {
      _.value && G();
    }
    function V() {
      !_.value || !b.value.trim() || (y("download-url", _.value.filename, b.value.trim(), g.value.trim() || void 0), A());
    }
    function Z(K) {
      if (!K) return "Unknown";
      const O = K / (1024 * 1024 * 1024);
      return O >= 1 ? `${O.toFixed(2)} GB` : `${(K / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (K, O) => {
      var oe, ee, we;
      return o(), n("div", Ni, [
        e("div", Oi, [
          e("div", Ui, [
            e("h3", Bi, l(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Pi, l(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Vi, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), x(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: O[0] || (O[0] = (fe) => p(h.value - 1)),
          onNext: O[1] || (O[1] = (fe) => p(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        _.value ? (o(), n("div", Fi, [
          v(Ri, {
            filename: _.value.filename,
            "node-type": ((oe = _.value.reference) == null ? void 0 : oe.node_type) || "Unknown",
            "has-multiple-options": !!((ee = _.value.options) != null && ee.length),
            options: _.value.options,
            choice: (we = t.modelChoices) == null ? void 0 : we.get(_.value.filename),
            status: F.value,
            "status-label": L.value,
            onMarkOptional: z,
            onSkip: D,
            onDownloadUrl: B,
            onSearch: N,
            onOptionSelected: Q,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Ai, [...O[5] || (O[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(be, { to: "body" }, [
          u.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: he(G, ["self"])
          }, [
            e("div", Wi, [
              e("div", { class: "model-modal-header" }, [
                O[6] || (O[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              e("div", Gi, [
                v(De, {
                  modelValue: m.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (fe) => m.value = fe),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                M.value.length > 0 ? (o(), n("div", ji, [
                  (o(!0), n(H, null, ne(M.value, (fe) => (o(), n("div", {
                    key: fe.hash,
                    class: "model-search-result-item",
                    onClick: (Qe) => W()
                  }, [
                    e("div", qi, [
                      e("code", Ki, l(fe.filename), 1)
                    ]),
                    e("div", Ji, [
                      e("span", Yi, l(fe.category), 1),
                      e("span", Qi, l(Z(fe.size)), 1)
                    ]),
                    fe.relative_path ? (o(), n("div", Xi, l(fe.relative_path), 1)) : c("", !0)
                  ], 8, Hi))), 128))
                ])) : m.value && !I.value ? (o(), n("div", Zi, ' No models found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                I.value ? (o(), n("div", er, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), x(be, { to: "body" }, [
          i.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: he(A, ["self"])
          }, [
            e("div", tr, [
              e("div", { class: "model-modal-header" }, [
                O[7] || (O[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", or, [
                e("div", sr, [
                  O[8] || (O[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  v(De, {
                    modelValue: b.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (fe) => b.value = fe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", nr, [
                  O[9] || (O[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  v(De, {
                    modelValue: g.value,
                    "onUpdate:modelValue": O[4] || (O[4] = (fe) => g.value = fe),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ar, [
                  v(ae, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: a(() => [...O[10] || (O[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(ae, {
                    variant: "primary",
                    disabled: !b.value.trim() || !g.value.trim(),
                    onClick: V
                  }, {
                    default: a(() => [...O[11] || (O[11] = [
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
    const s = t, r = d, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: h, progress: u, resetProgress: i } = il(), { loadPendingDownloads: m } = ht(), b = C(null), g = C(!1), M = C(!1), I = C(null), _ = C("analysis"), S = C([]), k = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Map()), F = U(() => {
      const E = [
        { id: "analysis", label: "Analysis" }
      ];
      return p.value && E.push({ id: "nodes", label: "Nodes" }), (z.value || D.value) && E.push({ id: "models", label: "Models" }), E.push({ id: "review", label: "Review" }), _.value === "applying" && E.push({ id: "applying", label: "Applying" }), E;
    }), L = U(() => b.value ? b.value.stats.needs_user_input : !1), p = U(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), z = U(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), D = U(() => b.value ? b.value.stats.download_intents > 0 : !1), Q = U(() => b.value ? b.value.models.resolved.filter((E) => E.match_type === "download_intent").map((E) => ({
      filename: E.reference.widget_value,
      reference: E.reference,
      is_download_intent: !0,
      resolved_model: E.model,
      download_source: E.download_source,
      target_path: E.target_path
    })) : []), P = U(() => {
      if (!b.value) return [];
      const E = b.value.nodes.unresolved.map((q) => ({
        node_type: q.reference.node_type,
        reason: q.reason,
        is_unresolved: !0,
        options: void 0
      })), T = b.value.nodes.ambiguous.map((q) => ({
        node_type: q.reference.node_type,
        has_multiple_options: !0,
        options: q.options.map((ie) => ({
          package_id: ie.package.package_id,
          title: ie.package.title,
          match_confidence: ie.match_confidence,
          match_type: ie.match_type,
          is_installed: ie.is_installed
        }))
      }));
      return [...E, ...T];
    }), N = U(() => {
      if (!b.value) return [];
      const E = b.value.models.unresolved.map((q) => ({
        filename: q.reference.widget_value,
        reference: q.reference,
        reason: q.reason,
        is_unresolved: !0,
        options: void 0
      })), T = b.value.models.ambiguous.map((q) => ({
        filename: q.reference.widget_value,
        reference: q.reference,
        has_multiple_options: !0,
        options: q.options.map((ie) => ({
          model: ie.model,
          match_confidence: ie.match_confidence,
          match_type: ie.match_type,
          has_download_source: ie.has_download_source
        }))
      }));
      return [...E, ...T];
    }), B = U(() => {
      const E = N.value, T = Q.value.map((q) => ({
        filename: q.filename,
        reference: q.reference,
        is_download_intent: !0,
        resolved_model: q.resolved_model,
        download_source: q.download_source,
        target_path: q.target_path,
        options: void 0
      }));
      return [...E, ...T];
    }), G = U(() => {
      let E = 0;
      for (const T of k.value.values())
        T.action === "install" && E++;
      for (const T of $.value.values())
        T.action === "select" && E++;
      return E;
    }), A = U(() => {
      let E = 0;
      for (const T of $.value.values())
        T.action === "download" && E++;
      return E;
    }), te = U(() => {
      let E = 0;
      for (const T of k.value.values())
        T.action === "optional" && E++;
      for (const T of $.value.values())
        T.action === "optional" && E++;
      return E;
    }), W = U(() => {
      let E = 0;
      for (const T of k.value.values())
        T.action === "skip" && E++;
      for (const T of $.value.values())
        T.action === "skip" && E++;
      for (const T of P.value)
        k.value.has(T.node_type) || E++;
      for (const T of N.value)
        $.value.has(T.filename) || E++;
      return E;
    }), V = U(() => {
      const E = {};
      if (E.analysis = { resolved: 1, total: 1 }, p.value) {
        const T = P.value.length, q = P.value.filter(
          (ie) => k.value.has(ie.node_type)
        ).length;
        E.nodes = { resolved: q, total: T };
      }
      if (z.value || D.value) {
        const T = B.value.length, q = B.value.filter(
          (ie) => $.value.has(ie.filename) || ie.is_download_intent
        ).length;
        E.models = { resolved: q, total: T };
      }
      if (E.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const T = u.totalFiles || 1, q = u.completedFiles.length;
        E.applying = { resolved: q, total: T };
      }
      return E;
    });
    function Z(E) {
      _.value = E;
    }
    function K() {
      const E = F.value.findIndex((T) => T.id === _.value);
      E > 0 && (_.value = F.value[E - 1].id);
    }
    function O() {
      const E = F.value.findIndex((T) => T.id === _.value);
      E < F.value.length - 1 && (_.value = F.value[E + 1].id);
    }
    async function oe() {
      g.value = !0, I.value = null;
      try {
        b.value = await f(s.workflowName);
      } catch (E) {
        I.value = E instanceof Error ? E.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function ee() {
      S.value.includes("analysis") || S.value.push("analysis"), p.value ? _.value = "nodes" : z.value || D.value ? _.value = "models" : _.value = "review";
    }
    function we(E) {
      k.value.set(E, { action: "optional" });
    }
    function fe(E) {
      k.value.set(E, { action: "skip" });
    }
    function Qe(E, T) {
      var ie;
      const q = P.value.find((_e) => _e.node_type === E);
      (ie = q == null ? void 0 : q.options) != null && ie[T] && k.value.set(E, {
        action: "install",
        package_id: q.options[T].package_id
      });
    }
    function me(E, T) {
      k.value.set(E, {
        action: "install",
        package_id: T
      });
    }
    function Me(E) {
      k.value.delete(E);
    }
    function nt(E) {
      $.value.set(E, { action: "optional" });
    }
    function qe(E) {
      $.value.set(E, { action: "skip" });
    }
    function Se(E, T) {
      var ie;
      const q = N.value.find((_e) => _e.filename === E);
      (ie = q == null ? void 0 : q.options) != null && ie[T] && $.value.set(E, {
        action: "select",
        selected_model: q.options[T].model
      });
    }
    function at(E, T, q) {
      $.value.set(E, {
        action: "download",
        url: T,
        target_path: q
      });
    }
    function Xe(E) {
      $.value.delete(E);
    }
    async function lt() {
      M.value = !0, I.value = null, i(), u.phase = "resolving", _.value = "applying";
      try {
        const E = await y(s.workflowName, k.value, $.value);
        E.models_to_download && E.models_to_download.length > 0 && h(s.workflowName, E.models_to_download), u.nodesToInstall = E.nodes_to_install || [], u.phase = "complete", await m(), setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (E) {
        I.value = E instanceof Error ? E.message : "Failed to apply resolution", u.error = I.value, u.phase = "error";
      } finally {
        M.value = !1;
      }
    }
    return pe(oe), (E, T) => (o(), x(gt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: T[1] || (T[1] = (q) => r("close"))
    }, {
      body: a(() => [
        g.value && !b.value ? (o(), n("div", yr, [...T[2] || (T[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (o(), n("div", wr, [
          v(pl, {
            steps: F.value,
            "current-step": _.value,
            "completed-steps": S.value,
            "step-stats": V.value,
            onStepChange: Z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), n("div", br, [
            e("div", kr, [
              e("div", _r, [
                T[3] || (T[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", $r, " Found " + l(b.value.stats.total_nodes) + " nodes and " + l(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Cr, [
                e("div", xr, [
                  T[10] || (T[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Sr, [
                    e("div", Ir, [
                      T[4] || (T[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Er, l(b.value.nodes.resolved.length), 1),
                      T[5] || (T[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.nodes.ambiguous.length > 0 ? (o(), n("div", Mr, [
                      T[6] || (T[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zr, l(b.value.nodes.ambiguous.length), 1),
                      T[7] || (T[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (o(), n("div", Lr, [
                      T[8] || (T[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Tr, l(b.value.nodes.unresolved.length), 1),
                      T[9] || (T[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Dr, [
                  T[19] || (T[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rr, [
                    e("div", Nr, [
                      T[11] || (T[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Or, l(b.value.models.resolved.length - b.value.stats.download_intents), 1),
                      T[12] || (T[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (o(), n("div", Ur, [
                      T[13] || (T[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Br, l(b.value.stats.download_intents), 1),
                      T[14] || (T[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (o(), n("div", Pr, [
                      T[15] || (T[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Vr, l(b.value.models.ambiguous.length), 1),
                      T[16] || (T[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (o(), n("div", Fr, [
                      T[17] || (T[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ar, l(b.value.models.unresolved.length), 1),
                      T[18] || (T[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              L.value ? (o(), n("div", Wr, [
                T[20] || (T[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Gr, l(P.value.length + N.value.length) + " items need your input", 1)
              ])) : D.value ? (o(), n("div", jr, [
                T[21] || (T[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hr, l(b.value.stats.download_intents) + " model" + l(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", qr, [...T[22] || (T[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          _.value === "nodes" ? (o(), x(fi, {
            key: 1,
            nodes: P.value,
            "node-choices": k.value,
            onMarkOptional: we,
            onSkip: fe,
            onOptionSelected: Qe,
            onManualEntry: me,
            onClearChoice: Me
          }, null, 8, ["nodes", "node-choices"])) : c("", !0),
          _.value === "models" ? (o(), x(ir, {
            key: 2,
            models: B.value,
            "model-choices": $.value,
            onMarkOptional: nt,
            onSkip: qe,
            onOptionSelected: Se,
            onDownloadUrl: at,
            onClearChoice: Xe
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          _.value === "review" ? (o(), n("div", Kr, [
            e("div", Jr, [
              T[27] || (T[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Yr, [
                e("div", Qr, [
                  e("span", Xr, l(G.value), 1),
                  T[23] || (T[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zr, [
                  e("span", ed, l(A.value), 1),
                  T[24] || (T[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", td, [
                  e("span", od, l(te.value), 1),
                  T[25] || (T[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", sd, [
                  e("span", nd, l(W.value), 1),
                  T[26] || (T[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              P.value.length > 0 ? (o(), n("div", ad, [
                e("h4", ld, "Node Packages (" + l(P.value.length) + ")", 1),
                e("div", id, [
                  (o(!0), n(H, null, ne(P.value, (q) => {
                    var ie, _e, Ne, Oe;
                    return o(), n("div", {
                      key: q.node_type,
                      class: "review-item"
                    }, [
                      e("code", rd, l(q.node_type), 1),
                      e("div", dd, [
                        k.value.has(q.node_type) ? (o(), n(H, { key: 0 }, [
                          ((ie = k.value.get(q.node_type)) == null ? void 0 : ie.action) === "install" ? (o(), n("span", cd, l((_e = k.value.get(q.node_type)) == null ? void 0 : _e.package_id), 1)) : ((Ne = k.value.get(q.node_type)) == null ? void 0 : Ne.action) === "optional" ? (o(), n("span", ud, " Optional ")) : ((Oe = k.value.get(q.node_type)) == null ? void 0 : Oe.action) === "skip" ? (o(), n("span", md, " Skip ")) : c("", !0)
                        ], 64)) : (o(), n("span", vd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              B.value.length > 0 ? (o(), n("div", fd, [
                e("h4", gd, "Models (" + l(B.value.length) + ")", 1),
                e("div", hd, [
                  (o(!0), n(H, null, ne(B.value, (q) => {
                    var ie, _e, Ne, Oe, pt, Ue, yt;
                    return o(), n("div", {
                      key: q.filename,
                      class: "review-item"
                    }, [
                      e("code", pd, l(q.filename), 1),
                      e("div", yd, [
                        $.value.has(q.filename) ? (o(), n(H, { key: 0 }, [
                          ((ie = $.value.get(q.filename)) == null ? void 0 : ie.action) === "select" ? (o(), n("span", wd, l((Ne = (_e = $.value.get(q.filename)) == null ? void 0 : _e.selected_model) == null ? void 0 : Ne.filename), 1)) : ((Oe = $.value.get(q.filename)) == null ? void 0 : Oe.action) === "download" ? (o(), n("span", bd, " Download ")) : ((pt = $.value.get(q.filename)) == null ? void 0 : pt.action) === "optional" ? (o(), n("span", kd, " Optional ")) : ((Ue = $.value.get(q.filename)) == null ? void 0 : Ue.action) === "skip" ? (o(), n("span", _d, " Skip ")) : ((yt = $.value.get(q.filename)) == null ? void 0 : yt.action) === "cancel_download" ? (o(), n("span", $d, " Cancel Download ")) : c("", !0)
                        ], 64)) : q.is_download_intent ? (o(), n("span", Cd, " Pending Download ")) : (o(), n("span", xd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              P.value.length === 0 && B.value.length === 0 ? (o(), n("div", Sd, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          _.value === "applying" ? (o(), x(pr, {
            key: 4,
            progress: ce(u)
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), x(ae, {
          key: 0,
          variant: "secondary",
          disabled: M.value,
          onClick: K
        }, {
          default: a(() => [...T[28] || (T[28] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        T[31] || (T[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || ce(u).phase === "complete" || ce(u).phase === "error" ? (o(), x(ae, {
          key: 1,
          variant: "secondary",
          onClick: T[0] || (T[0] = (q) => r("close"))
        }, {
          default: a(() => [
            w(l(ce(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "analysis" ? (o(), x(ae, {
          key: 2,
          variant: "primary",
          disabled: g.value,
          onClick: ee
        }, {
          default: a(() => [
            w(l(L.value || D.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        _.value === "nodes" ? (o(), x(ae, {
          key: 3,
          variant: "primary",
          onClick: O
        }, {
          default: a(() => [
            w(l(z.value || D.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        _.value === "models" ? (o(), x(ae, {
          key: 4,
          variant: "primary",
          onClick: O
        }, {
          default: a(() => [...T[29] || (T[29] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        _.value === "review" ? (o(), x(ae, {
          key: 5,
          variant: "primary",
          disabled: M.value,
          loading: M.value,
          onClick: lt
        }, {
          default: a(() => [...T[30] || (T[30] = [
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
    const s = t, r = d, f = C(null);
    let y;
    function h(i) {
      const m = i.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", m);
      }, s.debounce)) : r("update:modelValue", m);
    }
    function u() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = f.value) == null || i.focus();
    }
    return pe(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (i, m) => (o(), n("div", Md, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ae(u, ["escape"])
      }, null, 40, zd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
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
    return (d, s) => (o(), n("div", Dd, [
      v(Td, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ot = /* @__PURE__ */ Y(Rd, [["__scopeId", "data-v-3d51bbfd"]]), Nd = { class: "section-group" }, Od = {
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
    const s = t, r = d, f = C(s.initiallyExpanded);
    function y() {
      s.collapsible && (f.value = !f.value, r("toggle", f.value));
    }
    return (h, u) => (o(), n("section", Nd, [
      v(Ee, {
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
        re(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ye = /* @__PURE__ */ Y(Ud, [["__scopeId", "data-v-c48e33ed"]]), Bd = { class: "item-header" }, Pd = {
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
    const s = t, r = U(() => s.status ? `status-${s.status}` : "");
    return (f, y) => (o(), n("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && f.$emit("click"))
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
}), $e = /* @__PURE__ */ Y(jd, [["__scopeId", "data-v-cc435e0e"]]), Hd = { class: "loading-state" }, qd = { class: "loading-message" }, Kd = /* @__PURE__ */ J({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Hd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", qd, l(t.message), 1)
    ]));
  }
}), Ge = /* @__PURE__ */ Y(Kd, [["__scopeId", "data-v-ad8436c9"]]), Jd = { class: "error-state" }, Yd = { class: "error-message" }, Qd = /* @__PURE__ */ J({
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
      t.retry ? (o(), x(X, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), je = /* @__PURE__ */ Y(Qd, [["__scopeId", "data-v-5397be48"]]), Xd = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const r = s, { getWorkflows: f } = ke(), y = C([]), h = C(!1), u = C(null), i = C(""), m = C(!0), b = C(!1), g = C(!1), M = C(!1), I = C(null), _ = U(
      () => y.value.filter((W) => W.status === "broken")
    ), S = U(
      () => y.value.filter((W) => W.status === "new")
    ), k = U(
      () => y.value.filter((W) => W.status === "modified")
    ), $ = U(
      () => y.value.filter((W) => W.status === "synced")
    ), F = U(() => {
      if (!i.value.trim()) return y.value;
      const W = i.value.toLowerCase();
      return y.value.filter((V) => V.name.toLowerCase().includes(W));
    }), L = U(
      () => _.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), p = U(
      () => S.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), z = U(
      () => k.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), D = U(
      () => $.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), Q = U(
      () => b.value ? D.value : D.value.slice(0, 5)
    );
    async function P(W = !1) {
      h.value = !0, u.value = null;
      try {
        y.value = await f(W);
      } catch (V) {
        u.value = V instanceof Error ? V.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    d({ loadWorkflows: P });
    function N(W) {
      I.value = W, g.value = !0;
    }
    function B(W) {
      I.value = W, M.value = !0;
    }
    function G() {
      alert("Bulk resolution not yet implemented");
    }
    function A() {
      r("refresh");
    }
    function te(W) {
      const V = [];
      return W.missing_nodes > 0 && V.push(`${W.missing_nodes} missing node${W.missing_nodes > 1 ? "s" : ""}`), W.missing_models > 0 && V.push(`${W.missing_models} missing model${W.missing_models > 1 ? "s" : ""}`), W.pending_downloads && W.pending_downloads > 0 && V.push(`${W.pending_downloads} pending download${W.pending_downloads > 1 ? "s" : ""}`), V.length > 0 ? V.join(", ") : "Has issues";
    }
    return pe(P), (W, V) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), x(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: a(() => [...V[8] || (V[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(ot, {
            modelValue: i.value,
            "onUpdate:modelValue": V[0] || (V[0] = (Z) => i.value = Z),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), x(Ge, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), x(je, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            L.value.length ? (o(), x(ye, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(L.value, (Z) => (o(), x($e, {
                  key: Z.name,
                  status: "broken"
                }, {
                  icon: a(() => [...V[9] || (V[9] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(Z.name), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(te(Z)), 1)
                  ]),
                  actions: a(() => [
                    v(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => B(Z.name)
                    }, {
                      default: a(() => [...V[10] || (V[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => N(Z.name)
                    }, {
                      default: a(() => [...V[11] || (V[11] = [
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
            p.value.length ? (o(), x(ye, {
              key: 1,
              title: "NEW",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(p.value, (Z) => (o(), x($e, {
                  key: Z.name,
                  status: "new"
                }, {
                  icon: a(() => [...V[12] || (V[12] = [
                    w("●", -1)
                  ])]),
                  title: a(() => [
                    w(l(Z.name), 1)
                  ]),
                  subtitle: a(() => [...V[13] || (V[13] = [
                    w("New", -1)
                  ])]),
                  actions: a(() => [
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => N(Z.name)
                    }, {
                      default: a(() => [...V[14] || (V[14] = [
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
            z.value.length ? (o(), x(ye, {
              key: 2,
              title: "MODIFIED",
              count: z.value.length
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(z.value, (Z) => (o(), x($e, {
                  key: Z.name,
                  status: "modified"
                }, {
                  icon: a(() => [...V[15] || (V[15] = [
                    w("⚡", -1)
                  ])]),
                  title: a(() => [
                    w(l(Z.name), 1)
                  ]),
                  subtitle: a(() => [...V[16] || (V[16] = [
                    w("Modified", -1)
                  ])]),
                  actions: a(() => [
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => N(Z.name)
                    }, {
                      default: a(() => [...V[17] || (V[17] = [
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
            D.value.length ? (o(), x(ye, {
              key: 3,
              title: "SYNCED",
              count: D.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: V[2] || (V[2] = (Z) => m.value = Z)
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(Q.value, (Z) => (o(), x($e, {
                  key: Z.name,
                  status: "synced"
                }, {
                  icon: a(() => [...V[18] || (V[18] = [
                    w("✓", -1)
                  ])]),
                  title: a(() => [
                    w(l(Z.name), 1)
                  ]),
                  subtitle: a(() => [...V[19] || (V[19] = [
                    w("Synced", -1)
                  ])]),
                  actions: a(() => [
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => N(Z.name)
                    }, {
                      default: a(() => [...V[20] || (V[20] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && D.value.length > 5 ? (o(), x(X, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: V[1] || (V[1] = (Z) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    w(" View all " + l(D.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            F.value.length ? c("", !0) : (o(), x(Re, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && I.value ? (o(), x(nl, {
        key: 0,
        "workflow-name": I.value,
        onClose: V[3] || (V[3] = (Z) => g.value = !1),
        onResolve: V[4] || (V[4] = (Z) => B(I.value)),
        onRefresh: V[5] || (V[5] = (Z) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      M.value && I.value ? (o(), x(Ed, {
        key: 1,
        "workflow-name": I.value,
        onClose: V[6] || (V[6] = (Z) => M.value = !1),
        onInstall: A,
        onRefresh: V[7] || (V[7] = (Z) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Zd = /* @__PURE__ */ Y(Xd, [["__scopeId", "data-v-af6b1cd7"]]), ec = /* @__PURE__ */ J({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: se(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), st = /* @__PURE__ */ Y(ec, [["__scopeId", "data-v-ccb7816e"]]), tc = {
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
}, xc = { class: "source-type" }, Sc = ["href"], Ic = ["disabled", "onClick"], Ec = {
  key: 1,
  class: "empty-state"
}, Mc = { class: "add-source-form" }, zc = ["disabled"], Lc = {
  key: 2,
  class: "source-error"
}, Tc = {
  key: 3,
  class: "source-success"
}, Dc = /* @__PURE__ */ J({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, { getModelDetails: r, addModelSource: f, removeModelSource: y, openFileLocation: h } = ke(), u = C(null), i = C(!0), m = C(null), b = C(""), g = C(!1), M = C(null), I = C(null), _ = C(null), S = C(null);
    let k = null;
    function $(P, N = "success", B = 2e3) {
      k && clearTimeout(k), S.value = { message: P, type: N }, k = setTimeout(() => {
        S.value = null;
      }, B);
    }
    function F(P) {
      if (!P) return "Unknown";
      const N = 1024 * 1024 * 1024, B = 1024 * 1024;
      return P >= N ? `${(P / N).toFixed(1)} GB` : P >= B ? `${(P / B).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function L(P) {
      navigator.clipboard.writeText(P), $("Copied to clipboard!");
    }
    async function p(P) {
      try {
        await h(P), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function z() {
      if (!(!b.value.trim() || !u.value)) {
        g.value = !0, I.value = null, _.value = null;
        try {
          await f(u.value.hash, b.value.trim()), _.value = "Source added successfully!", b.value = "", await Q();
        } catch (P) {
          I.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function D(P) {
      if (u.value) {
        M.value = P, I.value = null, _.value = null;
        try {
          await y(u.value.hash, P), $("Source removed"), await Q();
        } catch (N) {
          I.value = N instanceof Error ? N.message : "Failed to remove source";
        } finally {
          M.value = null;
        }
      }
    }
    async function Q() {
      i.value = !0, m.value = null;
      try {
        u.value = await r(s.identifier);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return pe(Q), (P, N) => {
      var B;
      return o(), n(H, null, [
        v(gt, {
          title: `Model Details: ${((B = u.value) == null ? void 0 : B.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: m.value,
          onClose: N[5] || (N[5] = (G) => P.$emit("close"))
        }, {
          body: a(() => {
            var G, A, te, W;
            return [
              u.value ? (o(), n("div", tc, [
                e("section", oc, [
                  e("div", sc, [
                    N[6] || (N[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", nc, l(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[0] || (N[0] = (V) => L(u.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ac, [
                    N[7] || (N[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", lc, l(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[1] || (N[1] = (V) => L(u.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ic, [
                    N[8] || (N[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", rc, l(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[2] || (N[2] = (V) => L(u.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", dc, [
                    N[9] || (N[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", cc, l(F(u.value.size)), 1)
                  ]),
                  e("div", uc, [
                    N[10] || (N[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", mc, l(u.value.category), 1)
                  ]),
                  e("div", vc, [
                    N[11] || (N[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", fc, l(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", gc, [
                  e("h4", hc, "Locations (" + l(((G = u.value.locations) == null ? void 0 : G.length) || 0) + ")", 1),
                  (A = u.value.locations) != null && A.length ? (o(), n("div", pc, [
                    (o(!0), n(H, null, ne(u.value.locations, (V, Z) => (o(), n("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", yc, l(V.path), 1),
                      V.modified ? (o(), n("span", wc, "Modified: " + l(V.modified), 1)) : c("", !0),
                      V.path ? (o(), n("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (K) => p(V.path)
                      }, " Open File Location ", 8, bc)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), n("div", kc, "No locations found"))
                ]),
                e("section", _c, [
                  e("h4", $c, "Download Sources (" + l(((te = u.value.sources) == null ? void 0 : te.length) || 0) + ")", 1),
                  (W = u.value.sources) != null && W.length ? (o(), n("div", Cc, [
                    (o(!0), n(H, null, ne(u.value.sources, (V, Z) => (o(), n("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", xc, l(V.type) + ":", 1),
                      e("a", {
                        href: V.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(V.url), 9, Sc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: M.value === V.url,
                        onClick: (K) => D(V.url)
                      }, l(M.value === V.url ? "..." : "×"), 9, Ic)
                    ]))), 128))
                  ])) : (o(), n("div", Ec, " No download sources configured ")),
                  e("div", Mc, [
                    io(e("input", {
                      "onUpdate:modelValue": N[3] || (N[3] = (V) => b.value = V),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ro, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || g.value,
                      onClick: z
                    }, l(g.value ? "Adding..." : "Add Source"), 9, zc)
                  ]),
                  I.value ? (o(), n("p", Lc, l(I.value), 1)) : c("", !0),
                  _.value ? (o(), n("p", Tc, l(_.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: N[4] || (N[4] = (G) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(be, { to: "body" }, [
          S.value ? (o(), n("div", {
            key: 0,
            class: se(["toast", S.value.type])
          }, l(S.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), Ht = /* @__PURE__ */ Y(Dc, [["__scopeId", "data-v-f15cbb56"]]), Rc = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: r, getStatus: f } = ke(), y = C([]), h = C([]), u = C("production"), i = C(!1), m = C(null), b = C(""), g = C(!1), M = C(null);
    function I() {
      g.value = !1, s("navigate", "model-index");
    }
    const _ = U(
      () => y.value.reduce((Q, P) => Q + (P.size || 0), 0)
    ), S = U(() => {
      if (!b.value.trim()) return y.value;
      const Q = b.value.toLowerCase();
      return y.value.filter((P) => P.filename.toLowerCase().includes(Q));
    }), k = U(() => {
      if (!b.value.trim()) return h.value;
      const Q = b.value.toLowerCase();
      return h.value.filter((P) => P.filename.toLowerCase().includes(Q));
    }), $ = U(() => {
      const Q = {};
      for (const N of S.value) {
        const B = N.type || "other";
        Q[B] || (Q[B] = []), Q[B].push(N);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(Q).sort(([N], [B]) => {
        const G = P.indexOf(N), A = P.indexOf(B);
        return G >= 0 && A >= 0 ? G - A : G >= 0 ? -1 : A >= 0 ? 1 : N.localeCompare(B);
      }).map(([N, B]) => ({ type: N, models: B }));
    });
    function F(Q) {
      if (!Q) return "Unknown";
      const P = Q / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function L(Q) {
      M.value = Q.hash || Q.filename;
    }
    function p(Q) {
      s("navigate", "model-index");
    }
    function z(Q) {
      alert(`Download functionality not yet implemented for ${Q}`);
    }
    async function D() {
      i.value = !0, m.value = null;
      try {
        const Q = await r();
        y.value = Q, h.value = [];
        const P = await f();
        u.value = P.environment || "production";
      } catch (Q) {
        m.value = Q instanceof Error ? Q.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return pe(D), (Q, P) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (N) => g.value = !0)
          })
        ]),
        search: a(() => [
          v(ot, {
            modelValue: b.value,
            "onUpdate:modelValue": P[1] || (P[1] = (N) => b.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), x(Ge, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), x(je, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            y.value.length ? (o(), x(st, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.length) + " models • " + l(F(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), n(H, null, ne($.value, (N) => (o(), x(ye, {
              key: N.type,
              title: N.type.toUpperCase(),
              count: N.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(N.models, (B) => (o(), x($e, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...P[4] || (P[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(B.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(F(B.size)), 1)
                  ]),
                  details: a(() => [
                    v(ve, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(ve, {
                      label: "Path:",
                      value: B.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => L(B)
                    }, {
                      default: a(() => [...P[5] || (P[5] = [
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
            k.value.length ? (o(), x(ye, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(k.value, (N) => (o(), x($e, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...P[6] || (P[6] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(N.filename), 1)
                  ]),
                  subtitle: a(() => [...P[7] || (P[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var B;
                    return [
                      v(ve, {
                        label: "Required by:",
                        value: ((B = N.workflow_names) == null ? void 0 : B.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    v(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => z(N.filename)
                    }, {
                      default: a(() => [...P[8] || (P[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => p(N.filename)
                    }, {
                      default: a(() => [...P[9] || (P[9] = [
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
            !S.value.length && !k.value.length ? (o(), x(Re, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(We, {
        show: g.value,
        title: "About Environment Models",
        onClose: P[2] || (P[2] = (N) => g.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            P[10] || (P[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(u.value) + '"', 1),
            P[11] || (P[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          v(X, {
            variant: "primary",
            onClick: I
          }, {
            default: a(() => [...P[12] || (P[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), x(Ht, {
        key: 0,
        identifier: M.value,
        onClose: P[3] || (P[3] = (N) => M.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Nc = /* @__PURE__ */ Y(Rc, [["__scopeId", "data-v-cb4f12b3"]]), Oc = {
  key: 0,
  class: "indexing-progress"
}, Uc = { class: "progress-info" }, Bc = { class: "progress-label" }, Pc = { class: "progress-count" }, Vc = { class: "progress-bar" }, Fc = { class: "modal-content" }, Ac = { class: "modal-header" }, Wc = { class: "modal-body" }, Gc = { class: "input-group" }, jc = { class: "current-path" }, Hc = { class: "input-group" }, qc = { class: "modal-footer" }, Kc = { class: "modal-content" }, Jc = { class: "modal-header" }, Yc = { class: "modal-body" }, Qc = { class: "input-group" }, Xc = { class: "input-group" }, Zc = { class: "modal-footer" }, eu = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: d }) {
    const {
      getWorkspaceModels: s,
      scanWorkspaceModels: r,
      getModelsDirectory: f,
      setModelsDirectory: y
    } = ke(), { addToQueue: h } = ht(), u = d, i = C([]), m = C(!1), b = C(!1), g = C(null), M = C(""), I = C(!1), _ = C(null), S = C(!1), k = C(null), $ = C(""), F = C(!1), L = C(!1), p = C(""), z = C(""), D = C(null), Q = U(
      () => i.value.reduce((K, O) => K + (O.size || 0), 0)
    ), P = U(() => {
      if (!M.value.trim()) return i.value;
      const K = M.value.toLowerCase();
      return i.value.filter((O) => {
        const oe = O, ee = O.sha256 || oe.sha256_hash || "";
        return O.filename.toLowerCase().includes(K) || ee.toLowerCase().includes(K);
      });
    }), N = U(() => {
      const K = {};
      for (const oe of P.value) {
        const ee = oe.type || "other";
        K[ee] || (K[ee] = []), K[ee].push(oe);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(K).sort(([oe], [ee]) => {
        const we = O.indexOf(oe), fe = O.indexOf(ee);
        return we >= 0 && fe >= 0 ? we - fe : we >= 0 ? -1 : fe >= 0 ? 1 : oe.localeCompare(ee);
      }).map(([oe, ee]) => ({ type: oe, models: ee }));
    });
    function B(K) {
      if (!K) return "Unknown";
      const O = 1024 * 1024 * 1024, oe = 1024 * 1024;
      return K >= O ? `${(K / O).toFixed(1)} GB` : K >= oe ? `${(K / oe).toFixed(0)} MB` : `${(K / 1024).toFixed(0)} KB`;
    }
    function G(K) {
      _.value = K.hash || K.filename;
    }
    async function A() {
      b.value = !0, g.value = null;
      try {
        const K = await r();
        await V(), K.changes > 0 && console.log(`Scan complete: ${K.changes} changes detected`);
      } catch (K) {
        g.value = K instanceof Error ? K.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function te() {
      if ($.value.trim()) {
        F.value = !0, g.value = null;
        try {
          const K = await y($.value.trim());
          k.value = K.path, S.value = !1, $.value = "", await V(), console.log(`Directory changed: ${K.models_indexed} models indexed`), u("refresh");
        } catch (K) {
          g.value = K instanceof Error ? K.message : "Failed to change directory";
        } finally {
          F.value = !1;
        }
      }
    }
    function W() {
      if (!p.value.trim() || !z.value.trim()) return;
      const K = z.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: K,
        url: p.value.trim(),
        targetPath: z.value.trim()
      }]), p.value = "", z.value = "", L.value = !1;
    }
    async function V() {
      m.value = !0, g.value = null;
      try {
        i.value = await s();
      } catch (K) {
        g.value = K instanceof Error ? K.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function Z() {
      try {
        const K = await f();
        k.value = K.path;
      } catch {
      }
    }
    return pe(() => {
      V(), Z();
    }), (K, O) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[2] || (O[2] = (oe) => I.value = !0)
          }, {
            actions: a(() => [
              v(X, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: A
              }, {
                default: a(() => [
                  w(l(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              v(X, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (oe) => S.value = !0)
              }, {
                default: a(() => [...O[15] || (O[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              v(X, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (oe) => L.value = !0)
              }, {
                default: a(() => [...O[16] || (O[16] = [
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
          D.value ? (o(), n("div", Oc, [
            e("div", Uc, [
              e("span", Bc, l(D.value.message), 1),
              e("span", Pc, l(D.value.current) + "/" + l(D.value.total), 1)
            ]),
            e("div", Vc, [
              e("div", {
                class: "progress-fill",
                style: He({ width: `${D.value.current / D.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          v(ot, {
            modelValue: M.value,
            "onUpdate:modelValue": O[3] || (O[3] = (oe) => M.value = oe),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value || D.value ? (o(), x(Ge, {
            key: 0,
            message: D.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (o(), x(je, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            i.value.length ? (o(), x(st, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(i.value.length) + " models • " + l(B(Q.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), n(H, null, ne(N.value, (oe) => (o(), x(ye, {
              key: oe.type,
              title: oe.type.toUpperCase(),
              count: oe.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(oe.models, (ee) => (o(), x($e, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[17] || (O[17] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(ee.filename), 1)
                  ]),
                  subtitle: a(() => [
                    w(l(B(ee.size)), 1)
                  ]),
                  details: a(() => [
                    v(ve, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (we) => G(ee)
                    }, {
                      default: a(() => [...O[18] || (O[18] = [
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
            P.value.length ? c("", !0) : (o(), x(Re, {
              key: 1,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v(We, {
        show: I.value,
        title: "About Workspace Model Index",
        onClose: O[4] || (O[4] = (oe) => I.value = !1)
      }, {
        content: a(() => [...O[19] || (O[19] = [
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
        onClose: O[5] || (O[5] = (oe) => _.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), x(be, { to: "body" }, [
        S.value ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[9] || (O[9] = he((oe) => S.value = !1, ["self"]))
        }, [
          e("div", Fc, [
            e("div", Ac, [
              O[20] || (O[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[6] || (O[6] = (oe) => S.value = !1)
              }, "✕")
            ]),
            e("div", Wc, [
              e("div", Gc, [
                O[21] || (O[21] = e("label", null, "Current Directory", -1)),
                e("code", jc, l(k.value || "Not set"), 1)
              ]),
              e("div", Hc, [
                O[22] || (O[22] = e("label", null, "New Directory Path", -1)),
                v(De, {
                  modelValue: $.value,
                  "onUpdate:modelValue": O[7] || (O[7] = (oe) => $.value = oe),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              O[23] || (O[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", qc, [
              v(ae, {
                variant: "secondary",
                onClick: O[8] || (O[8] = (oe) => S.value = !1)
              }, {
                default: a(() => [...O[24] || (O[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              v(ae, {
                variant: "primary",
                disabled: !$.value.trim() || F.value,
                loading: F.value,
                onClick: te
              }, {
                default: a(() => [
                  w(l(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), x(be, { to: "body" }, [
        L.value ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[14] || (O[14] = he((oe) => L.value = !1, ["self"]))
        }, [
          e("div", Kc, [
            e("div", Jc, [
              O[25] || (O[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[10] || (O[10] = (oe) => L.value = !1)
              }, "✕")
            ]),
            e("div", Yc, [
              e("div", Qc, [
                O[26] || (O[26] = e("label", null, "Download URL", -1)),
                v(De, {
                  modelValue: p.value,
                  "onUpdate:modelValue": O[11] || (O[11] = (oe) => p.value = oe),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Xc, [
                O[27] || (O[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                v(De, {
                  modelValue: z.value,
                  "onUpdate:modelValue": O[12] || (O[12] = (oe) => z.value = oe),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              O[28] || (O[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Zc, [
              v(ae, {
                variant: "secondary",
                onClick: O[13] || (O[13] = (oe) => L.value = !1)
              }, {
                default: a(() => [...O[29] || (O[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              v(ae, {
                variant: "primary",
                disabled: !p.value.trim() || !z.value.trim(),
                onClick: W
              }, {
                default: a(() => [...O[30] || (O[30] = [
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
}), tu = /* @__PURE__ */ Y(eu, [["__scopeId", "data-v-73b78d84"]]), ou = { key: 0 }, su = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, nu = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, au = /* @__PURE__ */ J({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: d, installNode: s, updateNode: r, uninstallNode: f } = ke(), y = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = C(!1), u = C(null), i = C(""), m = C(!1), b = U(() => {
      if (!i.value.trim()) return y.value.nodes;
      const p = i.value.toLowerCase();
      return y.value.nodes.filter(
        (z) => {
          var D, Q;
          return z.name.toLowerCase().includes(p) || ((D = z.description) == null ? void 0 : D.toLowerCase().includes(p)) || ((Q = z.repository) == null ? void 0 : Q.toLowerCase().includes(p));
        }
      );
    }), g = U(
      () => b.value.filter((p) => p.installed)
    ), M = U(
      () => b.value.filter((p) => !p.installed)
    );
    function I(p) {
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
    function S(p) {
      window.open(p, "_blank");
    }
    async function k(p) {
      if (confirm(`Install node "${p}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const z = await s(p);
          z.status === "success" ? (alert(`Node "${p}" installed successfully!`), await L()) : alert(`Failed to install node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function $(p) {
      if (confirm(`Check for updates for "${p}"?`))
        try {
          h.value = !0;
          const z = await r(p);
          z.status === "success" ? (alert(`Node "${p}" is up to date or has been updated!`), await L()) : alert(`Update check failed: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error checking for updates: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function F(p) {
      if (confirm(`Uninstall node "${p}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const z = await f(p);
          z.status === "success" ? (alert(`Node "${p}" uninstalled successfully!`), await L()) : alert(`Failed to uninstall node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error uninstalling node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function L() {
      h.value = !0, u.value = null;
      try {
        y.value = await d();
      } catch (p) {
        u.value = p instanceof Error ? p.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return pe(L), (p, z) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (D) => m.value = !0)
          })
        ]),
        search: a(() => [
          v(ot, {
            modelValue: i.value,
            "onUpdate:modelValue": z[1] || (z[1] = (D) => i.value = D),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), x(Ge, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : u.value ? (o(), x(je, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            y.value.total_count ? (o(), x(st, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(y.value.total_count) + " nodes • " + l(y.value.installed_count) + " installed • " + l(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            g.value.length ? (o(), x(ye, {
              key: 1,
              title: "INSTALLED",
              count: g.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(g.value, (D) => (o(), x($e, {
                  key: D.name,
                  status: "synced"
                }, {
                  icon: a(() => [...z[4] || (z[4] = [
                    w("📦", -1)
                  ])]),
                  title: a(() => [
                    w(l(D.name), 1)
                  ]),
                  subtitle: a(() => [
                    D.version ? (o(), n("span", ou, "v" + l(D.version), 1)) : (o(), n("span", su, "version unknown")),
                    D.source ? (o(), n("span", nu, " • " + l(I(D.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    D.description ? (o(), x(ve, {
                      key: 0,
                      label: "Description:",
                      value: D.description
                    }, null, 8, ["value"])) : c("", !0),
                    D.repository ? (o(), x(ve, {
                      key: 1,
                      label: "Repository:",
                      value: D.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(ve, {
                      label: "Used by:",
                      value: _(D)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    D.repository ? (o(), x(X, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => S(D.repository)
                    }, {
                      default: a(() => [...z[5] || (z[5] = [
                        w(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    D.source === "registry" ? (o(), x(X, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => $(D.name)
                    }, {
                      default: a(() => [...z[6] || (z[6] = [
                        w(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    D.source !== "unknown" ? (o(), x(X, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (Q) => F(D.name)
                    }, {
                      default: a(() => [...z[7] || (z[7] = [
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
            M.value.length ? (o(), x(ye, {
              key: 2,
              title: "MISSING",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(M.value, (D) => (o(), x($e, {
                  key: D.name,
                  status: "missing"
                }, {
                  icon: a(() => [...z[8] || (z[8] = [
                    w("⚠", -1)
                  ])]),
                  title: a(() => [
                    w(l(D.name), 1)
                  ]),
                  subtitle: a(() => [...z[9] || (z[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    D.description ? (o(), x(ve, {
                      key: 0,
                      label: "Description:",
                      value: D.description
                    }, null, 8, ["value"])) : c("", !0),
                    D.repository ? (o(), x(ve, {
                      key: 1,
                      label: "Repository:",
                      value: D.repository
                    }, null, 8, ["value"])) : c("", !0),
                    v(ve, {
                      label: "Required by:",
                      value: _(D)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    D.download_url ? (o(), x(X, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => k(D.name)
                    }, {
                      default: a(() => [...z[10] || (z[10] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    D.repository ? (o(), x(X, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Q) => S(D.repository)
                    }, {
                      default: a(() => [...z[11] || (z[11] = [
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
            !g.value.length && !M.value.length ? (o(), x(Re, {
              key: 3,
              icon: "📭",
              message: i.value ? `No nodes match '${i.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(We, {
        show: m.value,
        title: "About Git-Tracked Nodes",
        onClose: z[3] || (z[3] = (D) => m.value = !1)
      }, {
        content: a(() => [...z[12] || (z[12] = [
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
          v(X, {
            variant: "primary",
            onClick: z[2] || (z[2] = (D) => m.value = !1)
          }, {
            default: a(() => [...z[13] || (z[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lu = /* @__PURE__ */ Y(au, [["__scopeId", "data-v-c480e2c1"]]), iu = { class: "remote-url-display" }, ru = ["title"], du = ["title"], cu = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, uu = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mu = /* @__PURE__ */ J({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = C(!1), r = U(() => {
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
    return (y, h) => (o(), n("div", iu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, ru),
      e("button", {
        class: se(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", uu, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", cu, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, du)
    ]));
  }
}), Ot = /* @__PURE__ */ Y(mu, [["__scopeId", "data-v-7768a58d"]]), vu = { class: "remote-title" }, fu = {
  key: 0,
  class: "default-badge"
}, gu = {
  key: 1,
  class: "sync-badge"
}, hu = {
  key: 0,
  class: "ahead"
}, pu = {
  key: 1,
  class: "behind"
}, yu = {
  key: 0,
  class: "tracking-info"
}, wu = /* @__PURE__ */ J({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, r = U(() => s.fetchingRemote === s.remote.name), f = U(() => s.remote.is_default), y = U(() => !!s.trackingBranch);
    function h(u) {
      const i = new Date(u), b = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), g = Math.floor(b / 6e4);
      if (g < 1) return "Just now";
      if (g < 60) return `${g}m ago`;
      const M = Math.floor(g / 60);
      if (M < 24) return `${M}h ago`;
      const I = Math.floor(M / 24);
      return I < 7 ? `${I}d ago` : i.toLocaleDateString();
    }
    return (u, i) => (o(), x($e, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", vu, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", fu, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", gu, [
            t.syncStatus.ahead > 0 ? (o(), n("span", hu, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", pu, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", yu, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var m;
        return [
          v(ve, { label: "Fetch:" }, {
            default: a(() => [
              v(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(ve, {
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
          (m = t.syncStatus) != null && m.last_fetch ? (o(), x(ve, {
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
        v(X, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (m) => u.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...i[3] || (i[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        v(X, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (m) => u.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...i[4] || (i[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? c("", !0) : (o(), x(X, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (m) => u.$emit("remove", t.remote.name))
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
}), bu = /* @__PURE__ */ Y(wu, [["__scopeId", "data-v-17362e45"]]), ku = ["for"], _u = {
  key: 0,
  class: "base-form-field-required"
}, $u = { class: "base-form-field-input" }, Cu = {
  key: 1,
  class: "base-form-field-error"
}, xu = {
  key: 2,
  class: "base-form-field-hint"
}, Su = /* @__PURE__ */ J({
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
    const d = t, s = U(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, f) => (o(), n("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        w(l(t.label) + " ", 1),
        t.required ? (o(), n("span", _u, "*")) : c("", !0)
      ], 8, ku)) : c("", !0),
      e("div", $u, [
        re(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Cu, l(t.error), 1)) : t.hint ? (o(), n("span", xu, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Y(Su, [["__scopeId", "data-v-9a1cf296"]]), Iu = { class: "remote-form" }, Eu = { class: "form-header" }, Mu = { class: "form-body" }, zu = {
  key: 0,
  class: "form-error"
}, Lu = { class: "form-actions" }, Tu = /* @__PURE__ */ J({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, r = d, f = C({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = C(!1), h = C(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const u = U(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!u.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          r("submit", f.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (m, b) => (o(), n("div", Iu, [
      e("div", Eu, [
        v(Ee, null, {
          default: a(() => [
            w(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Mu, [
        v($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            v(De, {
              modelValue: f.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (g) => f.value.name = g),
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
            v(De, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (g) => f.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            v(De, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (g) => f.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), n("div", zu, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Lu, [
        v(X, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: y.value,
          onClick: i
        }, {
          default: a(() => [
            w(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        v(X, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (g) => m.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Du = /* @__PURE__ */ Y(Tu, [["__scopeId", "data-v-56021b18"]]), Ru = { key: 0 }, Nu = /* @__PURE__ */ J({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = ke(), u = C([]), i = C(null), m = C({}), b = C(!1), g = C(null), M = C(""), I = C(!1), _ = C(null), S = C(!1), k = C("add"), $ = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = U(() => {
      if (!M.value.trim()) return u.value;
      const A = M.value.toLowerCase();
      return u.value.filter(
        (te) => te.name.toLowerCase().includes(A) || te.fetch_url.toLowerCase().includes(A) || te.push_url.toLowerCase().includes(A)
      );
    });
    function L(A) {
      var te;
      return ((te = i.value) == null ? void 0 : te.remote) === A;
    }
    async function p() {
      b.value = !0, g.value = null;
      try {
        const A = await d();
        u.value = A.remotes, i.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (te) => {
            const W = await h(te.name);
            W && (m.value[te.name] = W);
          })
        );
      } catch (A) {
        g.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function z() {
      k.value = "add", $.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function D(A) {
      const te = u.value.find((W) => W.name === A);
      te && (k.value = "edit", $.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, S.value = !0);
    }
    async function Q(A) {
      try {
        k.value === "add" ? await s(A.name, A.fetchUrl) : await f(A.name, A.fetchUrl, A.pushUrl || void 0), S.value = !1, await p();
      } catch (te) {
        g.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function P() {
      S.value = !1, $.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function N(A) {
      _.value = A;
      try {
        await y(A);
        const te = await h(A);
        te && (m.value[A] = te);
      } catch (te) {
        g.value = te instanceof Error ? te.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function B(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await r(A), await p();
        } catch (te) {
          g.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return pe(p), (A, te) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (W) => I.value = !0)
          }, {
            actions: a(() => [
              S.value ? c("", !0) : (o(), x(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: z
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
          S.value ? c("", !0) : (o(), x(ot, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": te[1] || (te[1] = (W) => M.value = W),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), x(Ge, {
            key: 0,
            message: "Loading remotes..."
          })) : g.value ? (o(), x(je, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            S.value ? (o(), x(Du, {
              key: 0,
              mode: k.value,
              "remote-name": $.value.name,
              "fetch-url": $.value.fetchUrl,
              "push-url": $.value.pushUrl,
              onSubmit: Q,
              onCancel: P
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            u.value.length && !S.value ? (o(), x(st, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                w(" Total: " + l(u.value.length) + " remote" + l(u.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), n("span", Ru, " • Tracking: " + l(i.value.remote) + "/" + l(i.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            F.value.length && !S.value ? (o(), x(ye, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(H, null, ne(F.value, (W) => {
                  var V;
                  return o(), x(bu, {
                    key: W.name,
                    remote: W,
                    "sync-status": m.value[W.name],
                    "tracking-branch": L(W.name) ? (V = i.value) == null ? void 0 : V.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: N,
                    onEdit: D,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !F.value.length && !S.value ? (o(), x(Re, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                v(X, {
                  variant: "primary",
                  onClick: z
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
      v(We, {
        show: I.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = (W) => I.value = !1)
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
          v(X, {
            variant: "link",
            onClick: G
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
}), Ou = /* @__PURE__ */ Y(Nu, [["__scopeId", "data-v-a75719bb"]]), Uu = { class: "setting-info" }, Bu = { class: "setting-label" }, Pu = {
  key: 0,
  class: "required-marker"
}, Vu = {
  key: 0,
  class: "setting-description"
}, Fu = { class: "setting-control" }, Au = /* @__PURE__ */ J({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Uu, [
        e("div", Bu, [
          w(l(t.label) + " ", 1),
          t.required ? (o(), n("span", Pu, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", Vu, l(t.description), 1)) : c("", !0)
      ]),
      e("div", Fu, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Fe = /* @__PURE__ */ Y(Au, [["__scopeId", "data-v-cb5d236c"]]), Wu = { class: "toggle" }, Gu = ["checked", "disabled"], ju = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", Wu, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Gu),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ye = /* @__PURE__ */ Y(ju, [["__scopeId", "data-v-71c0f550"]]), Hu = { class: "settings-section" }, qu = { class: "path-setting" }, Ku = { class: "path-value" }, Ju = { class: "path-setting" }, Yu = { class: "path-value" }, Qu = { class: "settings-section" }, Xu = { class: "settings-section" }, Zu = { class: "settings-section" }, em = /* @__PURE__ */ J({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = ke(), r = C(!1), f = C(null), y = C(null), h = C(null), u = C(null), i = C(""), m = C(""), b = C(!0), g = C(!0), M = C(!1), I = U(() => u.value ? i.value !== (u.value.civitai_api_key || "") : !1);
    async function _() {
      r.value = !0, f.value = null;
      try {
        h.value = await d(), u.value = { ...h.value }, i.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, g.value = h.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = F === "true";
      } catch (F) {
        f.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function S() {
      var F;
      y.value = null;
      try {
        const L = {};
        i.value !== (((F = u.value) == null ? void 0 : F.civitai_api_key) || "") && (L.civitai_api_key = i.value || null), await s(L), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
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
      u.value && (i.value = u.value.civitai_api_key || "", m.value = u.value.huggingface_token || "", b.value = u.value.auto_sync_models, g.value = u.value.confirm_destructive, y.value = null);
    }
    function $(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return pe(_), (F, L) => (o(), x(Ce, null, {
      header: a(() => [
        v(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            v(X, {
              variant: "primary",
              size: "sm",
              disabled: !I.value,
              onClick: S
            }, {
              default: a(() => [...L[5] || (L[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            I.value ? (o(), x(X, {
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
        r.value ? (o(), x(Ge, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), x(je, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
          v(ye, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var p, z;
              return [
                e("div", Hu, [
                  e("div", qu, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Ku, l(((p = h.value) == null ? void 0 : p.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Ju, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Yu, l(((z = h.value) == null ? void 0 : z.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(ye, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Qu, [
                v(Fe, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    v(ft, {
                      modelValue: i.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (p) => i.value = p),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Fe, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(ft, {
                      modelValue: m.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (p) => m.value = p),
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
          v(ye, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", Xu, [
                v(Fe, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    v(Ye, {
                      modelValue: M.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (p) => M.value = p),
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
          v(ye, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Zu, [
                v(Fe, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Ye, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (p) => b.value = p),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Fe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Ye, {
                      modelValue: g.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (p) => g.value = p),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), x(st, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: He({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), tm = /* @__PURE__ */ Y(em, [["__scopeId", "data-v-7861bd35"]]), om = /* @__PURE__ */ J({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = ke(), s = C([]), r = C(!1), f = C(null), y = C(!1), h = C(null), u = U(() => s.value.length === 0 ? [] : s.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      r.value = !0, f.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (m) {
        f.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return pe(i), (m, b) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (g) => y.value = !0)
          }, {
            actions: a(() => [
              v(X, {
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
          r.value ? (o(), x(Ge, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), x(je, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            s.value.length === 0 ? (o(), x(Re, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), n(H, null, ne(u.value, (g, M) => (o(), n("div", {
                key: M,
                class: se(`log-line log-level-${g.level.toLowerCase()}`)
              }, l(g.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(We, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (g) => y.value = !1)
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
          v(X, {
            variant: "primary",
            onClick: b[1] || (b[1] = (g) => y.value = !1)
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
}), sm = /* @__PURE__ */ Y(om, [["__scopeId", "data-v-39f6a756"]]), nm = /* @__PURE__ */ J({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = ke(), r = C([]), f = C(!1), y = C(null), h = C(!1), u = C("production"), i = C(null), m = U(() => r.value.length === 0 ? [] : r.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function b() {
      f.value = !0, y.value = null;
      try {
        r.value = await d(void 0, 500);
        try {
          const g = await s();
          u.value = g.environment || "production";
        } catch {
        }
      } catch (g) {
        y.value = g instanceof Error ? g.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var g;
          (g = i.value) != null && g.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return pe(b), (g, M) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (I) => h.value = !0)
          }, {
            actions: a(() => [
              v(X, {
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
          f.value ? (o(), x(Ge, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), x(je, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Re, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), n(H, null, ne(m.value, (I, _) => (o(), n("div", {
                key: _,
                class: se(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(We, {
        show: h.value,
        title: "About Environment Logs",
        onClose: M[2] || (M[2] = (I) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            M[3] || (M[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(u.value), 1),
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
        actions: a(() => [
          v(X, {
            variant: "primary",
            onClick: M[1] || (M[1] = (I) => h.value = !1)
          }, {
            default: a(() => [...M[7] || (M[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), am = /* @__PURE__ */ Y(nm, [["__scopeId", "data-v-4f1e6f72"]]), lm = { class: "env-title" }, im = {
  key: 0,
  class: "current-badge"
}, rm = {
  key: 0,
  class: "branch-info"
}, dm = /* @__PURE__ */ J({
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
    return (d, s) => (o(), x($e, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        w(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", lm, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", im, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", rm, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        v(ve, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        v(ve, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        v(ve, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), x(ve, {
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
}), cm = /* @__PURE__ */ Y(dm, [["__scopeId", "data-v-5238e57c"]]), um = {
  key: 0,
  class: "create-form"
}, mm = { class: "create-form__header" }, vm = { class: "create-form__body" }, fm = { class: "create-form__actions" }, gm = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, hm = /* @__PURE__ */ J({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: r } = ke(), f = C([]), y = C(!1), h = C(null), u = C(""), i = C(!1), m = C(!1), b = C(""), g = U(
      () => f.value.find((L) => L.is_current)
    ), M = U(() => {
      if (!u.value.trim()) return f.value;
      const L = u.value.toLowerCase();
      return f.value.filter(
        (p) => {
          var z;
          return p.name.toLowerCase().includes(L) || ((z = p.current_branch) == null ? void 0 : z.toLowerCase().includes(L));
        }
      );
    });
    function I(L) {
      if (!L) return "";
      try {
        const p = new Date(L), D = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), Q = Math.floor(D / 6e4), P = Math.floor(D / 36e5), N = Math.floor(D / 864e5);
        return Q < 1 ? "just now" : Q < 60 ? `${Q} ${Q === 1 ? "minute" : "minutes"} ago` : P < 24 ? `${P} ${P === 1 ? "hour" : "hours"} ago` : N < 30 ? `${N} ${N === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return L;
      }
    }
    function _() {
      const L = b.value.trim();
      L && (s("create", L), b.value = "", m.value = !1);
    }
    function S() {
      b.value = "", m.value = !1;
    }
    function k(L) {
      s("viewDetails", L);
    }
    function $(L) {
      confirm(`Delete environment "${L}"?

This action cannot be undone.`) && s("delete", L);
    }
    async function F() {
      y.value = !0, h.value = null;
      try {
        f.value = await r();
      } catch (L) {
        h.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return pe(F), (L, p) => {
      const z = co("SectionGroup");
      return o(), n(H, null, [
        v(Ce, null, {
          header: a(() => [
            v(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: p[1] || (p[1] = (D) => i.value = !0)
            }, {
              actions: a(() => [
                v(X, {
                  variant: "ghost",
                  size: "sm",
                  onClick: p[0] || (p[0] = (D) => m.value = !0),
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
                v(X, {
                  variant: "ghost",
                  size: "sm",
                  onClick: F,
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
            v(ot, {
              modelValue: u.value,
              "onUpdate:modelValue": p[2] || (p[2] = (D) => u.value = D),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), x(Ge, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), x(je, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), n(H, { key: 2 }, [
              m.value ? (o(), n("div", um, [
                e("div", mm, [
                  p[10] || (p[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  v(X, {
                    variant: "ghost",
                    size: "xs",
                    onClick: S
                  }, {
                    default: a(() => [...p[9] || (p[9] = [
                      w(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", vm, [
                  v(ft, {
                    modelValue: b.value,
                    "onUpdate:modelValue": p[3] || (p[3] = (D) => b.value = D),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ae(_, ["enter"]),
                      Ae(S, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", fm, [
                    v(X, {
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
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: a(() => [...p[12] || (p[12] = [
                        w(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              f.value.length ? (o(), x(st, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  w(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  g.value ? (o(), n(H, { key: 0 }, [
                    p[13] || (p[13] = w(" • Current: ", -1)),
                    e("strong", null, l(g.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              M.value.length ? (o(), x(z, {
                key: 2,
                title: "ENVIRONMENTS",
                count: M.value.length
              }, {
                default: a(() => [
                  (o(!0), n(H, null, ne(M.value, (D) => (o(), x(cm, {
                    key: D.name,
                    "environment-name": D.name,
                    "is-current": D.is_current,
                    "current-branch": D.current_branch,
                    "workflow-count": D.workflow_count,
                    "node-count": D.node_count,
                    "model-count": D.model_count,
                    "last-used": I(D.last_used),
                    "show-last-used": !!D.last_used
                  }, {
                    actions: a(() => [
                      D.is_current ? c("", !0) : (o(), x(X, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Q) => L.$emit("switch", D.name)
                      }, {
                        default: a(() => [...p[14] || (p[14] = [
                          w(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      v(X, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (Q) => k(D.name),
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
                      !D.is_current && f.value.length > 1 ? (o(), x(X, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Q) => $(D.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", gm, [...p[16] || (p[16] = [
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
              M.value.length ? c("", !0) : (o(), x(Re, {
                key: 3,
                icon: "🌍",
                message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
              }, Ft({ _: 2 }, [
                u.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    v(X, {
                      variant: "primary",
                      onClick: p[4] || (p[4] = (D) => m.value = !0)
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
        v(We, {
          show: i.value,
          title: "About Environments",
          onClose: p[6] || (p[6] = (D) => i.value = !1)
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
            v(X, {
              variant: "secondary",
              onClick: p[5] || (p[5] = (D) => i.value = !1)
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
}), pm = /* @__PURE__ */ Y(hm, [["__scopeId", "data-v-97d6527d"]]), ym = { class: "file-path" }, wm = { class: "file-path-text" }, bm = ["title"], km = /* @__PURE__ */ J({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), n("div", ym, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", wm, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(s.value ? "✓" : "📋"), 9, bm)) : c("", !0)
    ]));
  }
}), _m = /* @__PURE__ */ Y(km, [["__scopeId", "data-v-f0982173"]]), $m = { class: "output-path-input" }, Cm = { class: "export-actions" }, xm = {
  key: 1,
  class: "export-warning"
}, Sm = /* @__PURE__ */ J({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = ke(), s = C(""), r = C(!1), f = C(null), y = C(!1);
    async function h() {
      r.value = !0, f.value = null;
      try {
        const i = await d(s.value || void 0);
        f.value = i;
      } catch (i) {
        f.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function u() {
      var i;
      if ((i = f.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (i, m) => (o(), n(H, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              v(X, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (b) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...m[5] || (m[5] = [
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
          v(ye, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              v($e, { status: "synced" }, {
                icon: a(() => [...m[6] || (m[6] = [
                  w("📦", -1)
                ])]),
                title: a(() => [...m[7] || (m[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...m[8] || (m[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  v(ve, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  v(ve, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  v(ve, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  v(ve, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(ye, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              v($e, { status: "synced" }, {
                icon: a(() => [...m[9] || (m[9] = [
                  w("📁", -1)
                ])]),
                title: a(() => [...m[10] || (m[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: a(() => [...m[11] || (m[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", $m, [
                    v(ft, {
                      modelValue: s.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (b) => s.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(ye, { title: "EXPORT" }, {
            default: a(() => [
              e("div", Cm, [
                v(X, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: a(() => [
                    m[12] || (m[12] = e("svg", {
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
                s.value ? (o(), x(X, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...m[13] || (m[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), x(ye, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              v($e, {
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
                    v(ve, { label: "Saved to:" }, {
                      default: a(() => [
                        v(_m, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), x(ve, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", xm, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    v(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: u
                    }, {
                      default: a(() => [...m[15] || (m[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    v(X, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (b) => f.value = null)
                    }, {
                      default: a(() => [...m[16] || (m[16] = [
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
      v(We, {
        show: y.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (b) => y.value = !1)
      }, {
        content: a(() => [...m[17] || (m[17] = [
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
}), Im = /* @__PURE__ */ Y(Sm, [["__scopeId", "data-v-1777a9d5"]]), Em = { class: "file-input-wrapper" }, Mm = ["accept", "multiple", "disabled"], zm = /* @__PURE__ */ J({
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
    const r = s, f = C(null);
    function y() {
      var u;
      (u = f.value) == null || u.click();
    }
    function h(u) {
      const i = u.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return d({
      triggerInput: y
    }), (u, i) => (o(), n("div", Em, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Mm),
      v(X, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          re(u.$slots, "default", {}, () => [
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
}), Lm = /* @__PURE__ */ Y(zm, [["__scopeId", "data-v-cd192091"]]), Tm = {
  key: 0,
  class: "drop-zone-empty"
}, Dm = { class: "drop-zone-text" }, Rm = { class: "drop-zone-primary" }, Nm = { class: "drop-zone-secondary" }, Om = { class: "drop-zone-actions" }, Um = {
  key: 1,
  class: "drop-zone-file"
}, Bm = { class: "file-info" }, Pm = { class: "file-details" }, Vm = { class: "file-name" }, Fm = { class: "file-size" }, Am = /* @__PURE__ */ J({
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
    const s = d, r = C(!1), f = C(null), y = C(0), h = U(() => f.value !== null), u = U(() => {
      var k;
      return ((k = f.value) == null ? void 0 : k.name) || "";
    }), i = U(() => {
      if (!f.value) return "";
      const k = f.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(k) {
      var $;
      y.value++, ($ = k.dataTransfer) != null && $.types.includes("Files") && (r.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function g() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function M(k) {
      var F;
      y.value = 0, r.value = !1;
      const $ = (F = k.dataTransfer) == null ? void 0 : F.files;
      $ && $.length > 0 && _($[0]);
    }
    function I(k) {
      k.length > 0 && _(k[0]);
    }
    function _(k) {
      f.value = k, s("fileSelected", k);
    }
    function S() {
      f.value = null, s("clear");
    }
    return (k, $) => (o(), n("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: he(m, ["prevent"]),
      onDragover: he(b, ["prevent"]),
      onDragleave: he(g, ["prevent"]),
      onDrop: he(M, ["prevent"])
    }, [
      h.value ? (o(), n("div", Um, [
        e("div", Bm, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Pm, [
            e("div", Vm, l(u.value), 1),
            e("div", Fm, l(i.value), 1)
          ])
        ]),
        v(X, {
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
      ])) : (o(), n("div", Tm, [
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
        e("div", Dm, [
          e("p", Rm, l(t.primaryText), 1),
          e("p", Nm, l(t.secondaryText), 1)
        ]),
        e("div", Om, [
          v(Lm, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
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
}), Wm = /* @__PURE__ */ Y(Am, [["__scopeId", "data-v-e00abbca"]]), Gm = { class: "import-preview" }, jm = { class: "preview-header" }, Hm = {
  key: 0,
  class: "source-env"
}, qm = { class: "preview-content" }, Km = { class: "preview-section" }, Jm = { class: "section-header" }, Ym = { class: "section-info" }, Qm = { class: "section-count" }, Xm = {
  key: 0,
  class: "item-list"
}, Zm = { class: "item-name" }, ev = {
  key: 0,
  class: "item-more"
}, tv = { class: "preview-section" }, ov = { class: "section-header" }, sv = { class: "section-info" }, nv = { class: "section-count" }, av = {
  key: 0,
  class: "item-list"
}, lv = { class: "item-details" }, iv = { class: "item-name" }, rv = { class: "item-meta" }, dv = {
  key: 0,
  class: "item-more"
}, cv = { class: "preview-section" }, uv = { class: "section-header" }, mv = { class: "section-info" }, vv = { class: "section-count" }, fv = {
  key: 0,
  class: "item-list"
}, gv = { class: "item-name" }, hv = {
  key: 0,
  class: "item-more"
}, pv = {
  key: 0,
  class: "preview-section"
}, yv = { class: "git-info" }, wv = /* @__PURE__ */ J({
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
    const d = t, s = U(() => d.workflows.length), r = U(() => d.models.length), f = U(() => d.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, u) => (o(), n("div", Gm, [
      e("div", jm, [
        v(Ee, null, {
          default: a(() => [...u[0] || (u[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Hm, [
          u[1] || (u[1] = w(" From: ", -1)),
          v(St, null, {
            default: a(() => [
              w(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", qm, [
        e("div", Km, [
          e("div", Jm, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Ym, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Qm, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Xm, [
            (o(!0), n(H, null, ne(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Zm, l(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", ev, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", tv, [
          e("div", ov, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", sv, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", nv, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", av, [
            (o(!0), n(H, null, ne(t.models.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", lv, [
                e("span", iv, l(i.filename), 1),
                e("span", rv, l(y(i.size)) + " • " + l(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", dv, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", cv, [
          e("div", uv, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", mv, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", vv, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", fv, [
            (o(!0), n(H, null, ne(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", gv, l(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", hv, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", pv, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", yv, [
            t.gitBranch ? (o(), x(ve, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                v(St, null, {
                  default: a(() => [
                    w(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), x(ve, {
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
}), bv = /* @__PURE__ */ Y(wv, [["__scopeId", "data-v-182fe113"]]), kv = { class: "import-options" }, _v = { class: "options-container" }, $v = { class: "option-section" }, Cv = { class: "conflict-options" }, xv = ["value", "checked", "onChange"], Sv = { class: "conflict-content" }, Iv = { class: "conflict-label" }, Ev = { class: "conflict-description" }, Mv = { class: "option-section" }, zv = { class: "component-toggles" }, Lv = /* @__PURE__ */ J({
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
    const s = d, r = [
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
    return (f, y) => (o(), n("div", kv, [
      v(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", _v, [
        e("div", $v, [
          v(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Cv, [
            (o(), n(H, null, ne(r, (h) => e("label", {
              key: h.value,
              class: se(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (u) => s("update:conflictMode", h.value)
              }, null, 40, xv),
              e("div", Sv, [
                e("span", Iv, l(h.label), 1),
                e("span", Ev, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Mv, [
          v(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", zv, [
            v(Fe, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                v(Ye, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => s("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Fe, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                v(Ye, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => s("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Fe, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                v(Ye, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => s("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Fe, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                v(Ye, {
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
}), Tv = /* @__PURE__ */ Y(Lv, [["__scopeId", "data-v-0ec212b0"]]), Dv = {
  key: 0,
  class: "import-empty"
}, Rv = { class: "import-help" }, Nv = {
  key: 1,
  class: "import-configure"
}, Ov = { class: "selected-file-bar" }, Uv = { class: "file-bar-content" }, Bv = { class: "file-bar-info" }, Pv = { class: "file-bar-name" }, Vv = { class: "file-bar-size" }, Fv = { class: "import-actions" }, Av = {
  key: 2,
  class: "import-progress"
}, Wv = { class: "progress-content" }, Gv = { class: "progress-info" }, jv = { class: "progress-title" }, Hv = { class: "progress-detail" }, qv = { class: "progress-bar" }, Kv = { class: "progress-status" }, Jv = {
  key: 3,
  class: "import-complete"
}, Yv = { class: "complete-message" }, Qv = { class: "complete-title" }, Xv = { class: "complete-details" }, Zv = { class: "complete-actions" }, ef = /* @__PURE__ */ J({
  __name: "ImportSection",
  setup(t) {
    const d = C(null), s = C(!1), r = C(!1), f = C(!1), y = C(""), h = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), u = C({
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
    }), m = U(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function b(S) {
      d.value = S;
    }
    function g() {
      d.value = null, r.value = !1, f.value = !1, y.value = "";
    }
    function M() {
      g(), s.value = !1, u.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function I() {
      if (d.value) {
        s.value = !0, r.value = !1;
        try {
          const S = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of S)
            u.value = k, await new Promise(($) => setTimeout($, 800));
          u.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), f.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (S) {
          f.value = !1, y.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, r.value = !0;
        }
      }
    }
    function _(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, k) => (o(), x(Ce, null, {
      header: a(() => [
        v(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !s.value ? (o(), n("div", Dv, [
          v(Wm, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Rv, [
            v(Ee, null, {
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
        ])) : d.value && !s.value && !r.value ? (o(), n("div", Nv, [
          e("div", Ov, [
            e("div", Uv, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Bv, [
                e("div", Pv, l(d.value.name), 1),
                e("div", Vv, l(_(d.value.size)), 1)
              ])
            ]),
            v(X, {
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: a(() => [...k[8] || (k[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          v(bv, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          v(Tv, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = ($) => h.value.conflictMode = $),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = ($) => h.value.includeWorkflows = $),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = ($) => h.value.includeModels = $),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = ($) => h.value.includeNodes = $),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = ($) => h.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && i.value.models.length > 0 ? (o(), x(Je, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Fv, [
            v(X, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
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
                w(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            v(X, {
              variant: "secondary",
              size: "md",
              onClick: g
            }, {
              default: a(() => [...k[10] || (k[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Av, [
          e("div", Wv, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Gv, [
              e("div", jv, l(u.value.message), 1),
              e("div", Hv, l(u.value.detail), 1)
            ])
          ]),
          e("div", qv, [
            e("div", {
              class: "progress-bar-fill",
              style: He({ width: `${u.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Kv, l(u.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", Jv, [
          e("div", {
            class: se(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", Yv, [
            e("div", Qv, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Xv, l(y.value), 1)
          ]),
          e("div", Zv, [
            v(X, {
              variant: "primary",
              size: "md",
              onClick: M
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
}), tf = /* @__PURE__ */ Y(ef, [["__scopeId", "data-v-18e18eb5"]]), of = { class: "header-info" }, sf = { class: "commit-hash" }, nf = {
  key: 0,
  class: "commit-refs"
}, af = { class: "commit-message" }, lf = { class: "commit-date" }, rf = {
  key: 0,
  class: "loading"
}, df = {
  key: 1,
  class: "changes-section"
}, cf = { class: "stats-row" }, uf = { class: "stat" }, mf = { class: "stat insertions" }, vf = { class: "stat deletions" }, ff = {
  key: 0,
  class: "change-group"
}, gf = {
  key: 1,
  class: "change-group"
}, hf = {
  key: 0,
  class: "version"
}, pf = {
  key: 2,
  class: "change-group"
}, yf = { class: "change-item" }, wf = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = ke(), r = C(null), f = C(!0), y = U(() => {
      if (!r.value) return !1;
      const u = r.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), h = U(() => {
      if (!r.value) return !1;
      const u = r.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return pe(async () => {
      try {
        r.value = await s(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (u, i) => (o(), x(gt, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (m) => u.$emit("close"))
    }, {
      header: a(() => {
        var m, b, g, M;
        return [
          e("div", of, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", sf, l(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (M = (g = r.value) == null ? void 0 : g.refs) != null && M.length ? (o(), n("span", nf, [
              (o(!0), n(H, null, ne(r.value.refs, (I) => (o(), n("span", {
                key: I,
                class: "ref-badge"
              }, l(I), 1))), 128))
            ])) : c("", !0)
          ]),
          v(ae, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (I) => u.$emit("close"))
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
        var m, b;
        return [
          e("div", af, l(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", lf, l(((b = r.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", rf, "Loading details...")) : r.value ? (o(), n("div", df, [
            e("div", cf, [
              e("span", uf, l(r.value.stats.files_changed) + " files", 1),
              e("span", mf, "+" + l(r.value.stats.insertions), 1),
              e("span", vf, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", ff, [
              v(ut, { variant: "section" }, {
                default: a(() => [...i[6] || (i[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(H, null, ne(r.value.changes.workflows.added, (g) => (o(), n("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(g), 1)
              ]))), 128)),
              (o(!0), n(H, null, ne(r.value.changes.workflows.modified, (g) => (o(), n("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(g), 1)
              ]))), 128)),
              (o(!0), n(H, null, ne(r.value.changes.workflows.deleted, (g) => (o(), n("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(g), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), n("div", gf, [
              v(ut, { variant: "section" }, {
                default: a(() => [...i[10] || (i[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(H, null, ne(r.value.changes.nodes.added, (g) => (o(), n("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(g.name), 1),
                g.version ? (o(), n("span", hf, "(" + l(g.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(H, null, ne(r.value.changes.nodes.removed, (g) => (o(), n("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(g.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", pf, [
              v(ut, { variant: "section" }, {
                default: a(() => [...i[13] || (i[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", yf, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        v(ae, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (m) => u.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...i[15] || (i[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        v(ae, {
          variant: "primary",
          onClick: i[2] || (i[2] = (m) => u.$emit("checkout", t.commit))
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
}), bf = /* @__PURE__ */ Y(wf, [["__scopeId", "data-v-d256ff6d"]]), kf = { class: "dialog-message" }, _f = {
  key: 0,
  class: "dialog-details"
}, $f = {
  key: 1,
  class: "dialog-warning"
}, Cf = /* @__PURE__ */ J({
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
    return (d, s) => (o(), x(gt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", kf, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", _f, [
          (o(!0), n(H, null, ne(t.details, (r, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", $f, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        v(ae, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => d.$emit("cancel"))
        }, {
          default: a(() => [
            w(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(ae, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => d.$emit("secondary"))
        }, {
          default: a(() => [
            w(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        v(ae, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
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
}), xf = /* @__PURE__ */ Y(Cf, [["__scopeId", "data-v-3670b9f5"]]), Sf = { class: "base-textarea-wrapper" }, If = ["value", "rows", "placeholder", "disabled", "maxlength"], Ef = {
  key: 0,
  class: "base-textarea-count"
}, Mf = /* @__PURE__ */ J({
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
    return (d, s) => (o(), n("div", Sf, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ae(he((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ae(he((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, If),
      t.showCharCount && t.maxLength ? (o(), n("div", Ef, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ Y(Mf, [["__scopeId", "data-v-5516e6fc"]]), zf = ["checked", "disabled"], Lf = { class: "base-checkbox-box" }, Tf = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Df = {
  key: 0,
  class: "base-checkbox-label"
}, Rf = /* @__PURE__ */ J({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.checked))
      }, null, 40, zf),
      e("span", Lf, [
        t.modelValue ? (o(), n("svg", Tf, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Df, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ Y(Rf, [["__scopeId", "data-v-bf17c831"]]), Nf = { class: "popover-header" }, Of = { class: "popover-body" }, Uf = {
  key: 0,
  class: "changes-summary"
}, Bf = {
  key: 0,
  class: "change-item"
}, Pf = {
  key: 1,
  class: "change-item"
}, Vf = {
  key: 2,
  class: "change-item"
}, Ff = {
  key: 3,
  class: "change-item"
}, Af = {
  key: 4,
  class: "change-item"
}, Wf = {
  key: 1,
  class: "no-changes"
}, Gf = {
  key: 2,
  class: "loading"
}, jf = {
  key: 3,
  class: "issues-warning"
}, Hf = { class: "warning-header" }, qf = { class: "warning-title" }, Kf = { class: "issues-list" }, Jf = { class: "message-section" }, Yf = { class: "popover-footer" }, Qf = {
  key: 1,
  class: "commit-popover"
}, Xf = { class: "popover-header" }, Zf = { class: "popover-body" }, eg = {
  key: 0,
  class: "changes-summary"
}, tg = {
  key: 0,
  class: "change-item"
}, og = {
  key: 1,
  class: "change-item"
}, sg = {
  key: 2,
  class: "change-item"
}, ng = {
  key: 3,
  class: "change-item"
}, ag = {
  key: 4,
  class: "change-item"
}, lg = {
  key: 1,
  class: "no-changes"
}, ig = {
  key: 2,
  class: "loading"
}, rg = {
  key: 3,
  class: "issues-warning"
}, dg = { class: "warning-header" }, cg = { class: "warning-title" }, ug = { class: "issues-list" }, mg = { class: "message-section" }, vg = { class: "popover-footer" }, fg = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, r = d, { commit: f } = ke(), y = C(""), h = C(!1), u = C(!1), i = C(null), m = U(() => {
      if (!s.status) return !1;
      const _ = s.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || s.status.has_changes;
    }), b = U(() => {
      var _;
      return (_ = s.status) != null && _.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), g = U(() => b.value.length > 0), M = U(() => g.value && !u.value);
    async function I() {
      var _, S, k;
      if (!(g.value && !u.value) && !(!m.value || !y.value.trim() || h.value)) {
        h.value = !0, i.value = null;
        try {
          const $ = await f(y.value.trim(), u.value);
          $.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((_ = $.summary) == null ? void 0 : _.new) || 0} new, ${((S = $.summary) == null ? void 0 : S.modified) || 0} modified, ${((k = $.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", u.value = !1, setTimeout(() => r("committed"), 1e3)) : $.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : $.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          i.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (_, S) => t.asModal ? (o(), x(be, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = he(() => {
          }, ["stop"]))
        }, [
          e("div", Nf, [
            S[11] || (S[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = (k) => r("close"))
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
          e("div", Of, [
            t.status && m.value ? (o(), n("div", Uf, [
              t.status.workflows.new.length ? (o(), n("div", Bf, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Pf, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Vf, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Ff, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Af, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", Wf, " No changes to commit ")) : (o(), n("div", Gf, " Loading... ")),
            g.value ? (o(), n("div", jf, [
              e("div", Hf, [
                S[17] || (S[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", qf, l(b.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Kf, [
                (o(!0), n(H, null, ne(b.value, (k) => (o(), n("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  w(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              v(Bt, {
                modelValue: u.value,
                "onUpdate:modelValue": S[1] || (S[1] = (k) => u.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...S[18] || (S[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Jf, [
              v(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (k) => y.value = k),
                placeholder: M.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || M.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), n("div", {
              key: 4,
              class: se(["result", i.value.type])
            }, l(i.value.message), 3)) : c("", !0)
          ]),
          e("div", Yf, [
            v(ae, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (k) => r("close"))
            }, {
              default: a(() => [...S[19] || (S[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(ae, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !y.value.trim() || h.value || M.value,
              loading: h.value,
              onClick: I
            }, {
              default: a(() => [
                w(l(h.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Qf, [
      e("div", Xf, [
        S[21] || (S[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = (k) => r("close"))
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
      e("div", Zf, [
        t.status && m.value ? (o(), n("div", eg, [
          t.status.workflows.new.length ? (o(), n("div", tg, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", og, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", sg, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", ng, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", ag, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", lg, " No changes to commit ")) : (o(), n("div", ig, " Loading... ")),
        g.value ? (o(), n("div", rg, [
          e("div", dg, [
            S[27] || (S[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", cg, l(b.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", ug, [
            (o(!0), n(H, null, ne(b.value, (k) => (o(), n("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              w(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          v(Bt, {
            modelValue: u.value,
            "onUpdate:modelValue": S[7] || (S[7] = (k) => u.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...S[28] || (S[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", mg, [
          v(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": S[8] || (S[8] = (k) => y.value = k),
            placeholder: M.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || M.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), n("div", {
          key: 4,
          class: se(["result", i.value.type])
        }, l(i.value.message), 3)) : c("", !0)
      ]),
      e("div", vg, [
        v(ae, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (k) => r("close"))
        }, {
          default: a(() => [...S[29] || (S[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v(ae, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !y.value.trim() || h.value || M.value,
          loading: h.value,
          onClick: I
        }, {
          default: a(() => [
            w(l(h.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qt = /* @__PURE__ */ Y(fg, [["__scopeId", "data-v-38b45183"]]), gg = { class: "modal-header" }, hg = { class: "modal-body" }, pg = { class: "switch-message" }, yg = { class: "switch-details" }, wg = { class: "modal-actions" }, bg = /* @__PURE__ */ J({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), x(be, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = he(() => {
          }, ["stop"]))
        }, [
          e("div", gg, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", hg, [
            e("p", pg, [
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
            e("p", yg, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", wg, [
            v(X, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(X, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
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
}), kg = /* @__PURE__ */ Y(bg, [["__scopeId", "data-v-e9c5253e"]]), _g = { class: "progress-bar" }, $g = /* @__PURE__ */ J({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = U(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, f) => (o(), n("div", _g, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: He({ width: s.value })
      }, null, 6)
    ]));
  }
}), Cg = /* @__PURE__ */ Y($g, [["__scopeId", "data-v-1beb0512"]]), xg = {
  key: 0,
  class: "modal-overlay"
}, Sg = { class: "modal-content" }, Ig = { class: "modal-body" }, Eg = { class: "progress-info" }, Mg = { class: "progress-percentage" }, zg = { class: "progress-state" }, Lg = { class: "switch-steps" }, Tg = { class: "step-icon" }, Dg = { class: "step-label" }, Rg = /* @__PURE__ */ J({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = U(() => {
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
    }), r = U(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), f = U(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((u) => u.state === d.state);
      return y.map((u, i) => {
        let m = "pending", b = "○";
        return i < h ? (m = "completed", b = "✓") : i === h && (m = "active", b = "⟳"), {
          ...u,
          status: m,
          icon: b
        };
      });
    });
    return (y, h) => (o(), x(be, { to: "body" }, [
      t.show ? (o(), n("div", xg, [
        e("div", Sg, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ig, [
            v(Cg, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Eg, [
              e("div", Mg, l(t.progress) + "%", 1),
              e("div", zg, l(s.value), 1)
            ]),
            e("div", Lg, [
              (o(!0), n(H, null, ne(f.value, (u) => (o(), n("div", {
                key: u.state,
                class: se(["switch-step", u.status])
              }, [
                e("span", Tg, l(u.icon), 1),
                e("span", Dg, l(u.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ng = /* @__PURE__ */ Y(Rg, [["__scopeId", "data-v-768a5078"]]), Og = { class: "modal-header" }, Ug = { class: "modal-body" }, Bg = {
  key: 0,
  class: "node-section"
}, Pg = { class: "node-list" }, Vg = {
  key: 1,
  class: "node-section"
}, Fg = { class: "node-list" }, Ag = { class: "modal-actions" }, Wg = /* @__PURE__ */ J({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), x(be, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = he(() => {
          }, ["stop"]))
        }, [
          e("div", Og, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ug, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", Bg, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Pg, [
                (o(!0), n(H, null, ne(t.mismatchDetails.missing_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", Vg, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Fg, [
                (o(!0), n(H, null, ne(t.mismatchDetails.extra_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Ag, [
            v(X, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(X, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
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
}), Gg = /* @__PURE__ */ Y(Wg, [["__scopeId", "data-v-7cad7518"]]);
async function it(t, d = {}, s = 5e3) {
  const r = new AbortController(), f = setTimeout(() => r.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(f), y;
  } catch (y) {
    throw clearTimeout(f), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function jg() {
  const t = C(null);
  async function d() {
    try {
      const h = await it(
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
      const h = await it(
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
  async function r() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await it(
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
    getStatus: r,
    restart: f,
    kill: y
  };
}
const Hg = { class: "comfygit-panel" }, qg = { class: "panel-header" }, Kg = { class: "header-left" }, Jg = {
  key: 0,
  class: "header-info"
}, Yg = { class: "header-actions" }, Qg = { class: "env-switcher" }, Xg = {
  key: 0,
  class: "header-info"
}, Zg = { class: "branch-name" }, eh = { class: "panel-main" }, th = { class: "sidebar" }, oh = { class: "sidebar-section" }, sh = { class: "sidebar-section" }, nh = { class: "sidebar-section" }, ah = { class: "content-area" }, lh = {
  key: 0,
  class: "error-message"
}, ih = {
  key: 1,
  class: "loading"
}, rh = { class: "dialog-content env-selector-dialog" }, dh = { class: "dialog-header" }, ch = { class: "dialog-body" }, uh = { class: "env-list" }, mh = { class: "env-info" }, vh = { class: "env-name-row" }, fh = { class: "env-indicator" }, gh = { class: "env-name" }, hh = {
  key: 0,
  class: "env-branch"
}, ph = {
  key: 1,
  class: "current-label"
}, yh = { class: "env-stats" }, wh = ["onClick"], bh = { class: "toast-container" }, kh = { class: "toast-icon" }, _h = { class: "toast-message" }, $h = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: r,
      getHistory: f,
      getBranches: y,
      checkout: h,
      createBranch: u,
      switchBranch: i,
      getEnvironments: m,
      switchEnvironment: b,
      getSwitchProgress: g,
      syncEnvironmentManually: M
    } = ke(), I = jg(), _ = C(null), S = C([]), k = C([]), $ = C([]), F = U(() => $.value.find((j) => j.is_current)), L = C(!1), p = C(null), z = C(null), D = C(!1), Q = C(null), P = C(!1), N = C(!1), B = C(""), G = C({ state: "idle", progress: 0, message: "" });
    let A = null, te = null;
    const W = C("status"), V = C("this-env");
    function Z(j, R) {
      W.value = j, V.value = R;
    }
    function K(j) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      de && Z(de.view, de.section);
    }
    function O() {
      Z("branches", "this-env");
    }
    const oe = C(null), ee = C(!1), we = C(!1), fe = C([]);
    let Qe = 0;
    function me(j, R = "info", de = 3e3) {
      const ge = ++Qe;
      return fe.value.push({ id: ge, message: j, type: R }), de > 0 && setTimeout(() => {
        fe.value = fe.value.filter((ze) => ze.id !== ge);
      }, de), ge;
    }
    function Me(j) {
      fe.value = fe.value.filter((R) => R.id !== j);
    }
    function nt(j) {
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
    const qe = U(() => {
      if (!_.value) return "neutral";
      const j = _.value.workflows, R = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    U(() => _.value ? qe.value === "success" ? "All synced" : qe.value === "warning" ? "Uncommitted changes" : qe.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      L.value = !0, p.value = null;
      try {
        const [j, R, de, ge] = await Promise.all([
          r(!0),
          f(),
          y(),
          m()
        ]);
        _.value = j, S.value = R.commits, k.value = de.branches, $.value = ge, s("statusUpdate", j), Q.value && await Q.value.loadWorkflows(!0);
      } catch (j) {
        p.value = j instanceof Error ? j.message : "Failed to load status", _.value = null, S.value = [], k.value = [];
      } finally {
        L.value = !1;
      }
    }
    function at(j) {
      z.value = j;
    }
    async function Xe(j) {
      var de;
      z.value = null;
      const R = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      oe.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((de = j.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: R ? Rt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var Le;
          oe.value = null, q();
          const ge = me(`Checking out ${j.short_hash || ((Le = j.hash) == null ? void 0 : Le.slice(0, 7))}...`, "info", 0), ze = await h(j.hash, R);
          Me(ge), ze.status === "success" ? me("Restarting ComfyUI...", "success") : me(ze.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(j) {
      const R = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      oe.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: R ? Rt() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          oe.value = null, q();
          const de = me(`Switching to ${j}...`, "info", 0), ge = await i(j, R);
          Me(de), ge.status === "success" ? me("Restarting ComfyUI...", "success") : me(ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function E(j) {
      const R = me(`Creating branch ${j}...`, "info", 0), de = await u(j);
      Me(R), de.status === "success" ? (me(`Branch "${j}" created`, "success"), await Se()) : me(de.message || "Failed to create branch", "error");
    }
    async function T(j) {
      z.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const de = me(`Creating branch ${R}...`, "info", 0), ge = await u(R, j.hash);
        Me(de), ge.status === "success" ? (me(`Branch "${R}" created from ${j.short_hash}`, "success"), await Se()) : me(ge.message || "Failed to create branch", "error");
      }
    }
    function q() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ie(j) {
      D.value = !1, B.value = j, P.value = !0;
    }
    async function _e() {
      P.value = !1, N.value = !0, q(), G.value = {
        progress: 10,
        state: Ne(10),
        message: Oe(10)
      };
      try {
        await b(B.value), pt(), yt();
      } catch (j) {
        Ue(), N.value = !1, me(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), G.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ne(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Oe(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ne(j)] || "";
    }
    function pt() {
      if (te) return;
      let j = 10;
      const R = 60, de = 5e3, ge = 100, ze = (R - j) / (de / ge);
      te = window.setInterval(() => {
        if (j += ze, j >= R && (j = R, Ue()), G.value.progress < R) {
          const Le = Math.floor(j);
          G.value = {
            progress: Le,
            state: Ne(Le),
            message: Oe(Le)
          };
        }
      }, ge);
    }
    function Ue() {
      te && (clearInterval(te), te = null);
    }
    function yt() {
      A || (A = window.setInterval(async () => {
        try {
          let j = await I.getStatus();
          if ((!j || j.state === "idle") && (j = await g()), !j)
            return;
          const R = j.progress || 0;
          R >= 60 && Ue();
          const de = Math.max(R, G.value.progress), ge = j.state && j.state !== "idle" && j.state !== "unknown", ze = ge ? j.state : Ne(de), Le = ge && j.message || Oe(de);
          G.value = {
            state: ze,
            progress: de,
            message: Le
          }, j.state === "complete" ? (Ue(), kt(), N.value = !1, me(`✓ Switched to ${B.value}`, "success"), await Se(), B.value = "") : j.state === "rolled_back" ? (Ue(), kt(), N.value = !1, me("Switch failed, restored previous environment", "warning"), B.value = "") : j.state === "critical_failure" && (Ue(), kt(), N.value = !1, me(`Critical error during switch: ${j.message}`, "error"), B.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function kt() {
      Ue(), A && (clearInterval(A), A = null);
    }
    function Xt() {
      P.value = !1, B.value = "";
    }
    async function Zt() {
      ee.value = !1, await Se(), me("✓ Changes committed", "success");
    }
    async function eo() {
      we.value = !1;
      const j = me("Syncing environment...", "info", 0);
      try {
        const R = await M("skip", !0);
        if (Me(j), R.status === "success") {
          const de = [];
          R.nodes_installed.length && de.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && de.push(`${R.nodes_removed.length} removed`);
          const ge = de.length ? `: ${de.join(", ")}` : "";
          me(`✓ Environment synced${ge}`, "success"), await Se();
        } else {
          const de = R.errors.length ? R.errors.join("; ") : R.message;
          me(`Sync failed: ${de}`, "error");
        }
      } catch (R) {
        Me(j), me(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function to(j) {
      const R = me(`Creating environment "${j}"...`, "info", 0);
      Me(R), me("Environment creation not yet implemented", "warning");
    }
    async function oo(j) {
      const R = me(`Deleting environment "${j}"...`, "info", 0);
      Me(R), me("Environment deletion not yet implemented", "warning");
    }
    function so(j) {
      me(`Viewing details for "${j}"`, "info"), Z("models-env", "this-env");
    }
    function Rt() {
      if (!_.value) return [];
      const j = [], R = _.value.workflows;
      return R.new.length && j.push(`${R.new.length} new workflow(s)`), R.modified.length && j.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && j.push(`${R.deleted.length} deleted workflow(s)`), j;
    }
    return pe(Se), (j, R) => {
      var de, ge, ze, Le;
      return o(), n("div", Hg, [
        e("div", qg, [
          e("div", Kg, [
            R[27] || (R[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), n("div", Jg)) : c("", !0)
          ]),
          e("div", Yg, [
            e("button", {
              class: se(["icon-btn", { spinning: L.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...R[28] || (R[28] = [
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
              onClick: R[0] || (R[0] = (le) => s("close")),
              title: "Close"
            }, [...R[29] || (R[29] = [
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
        e("div", Qg, [
          R[31] || (R[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[1] || (R[1] = (le) => Z("environments", "all-envs"))
          }, [
            _.value ? (o(), n("div", Xg, [
              e("span", null, l(((de = F.value) == null ? void 0 : de.name) || ((ge = _.value) == null ? void 0 : ge.environment) || "Loading..."), 1),
              e("span", Zg, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            R[30] || (R[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", eh, [
          e("div", th, [
            e("div", oh, [
              R[32] || (R[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "status" && V.value === "this-env" }]),
                onClick: R[2] || (R[2] = (le) => Z("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "workflows" }]),
                onClick: R[3] || (R[3] = (le) => Z("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "models-env" }]),
                onClick: R[4] || (R[4] = (le) => Z("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "branches" }]),
                onClick: R[5] || (R[5] = (le) => Z("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "history" }]),
                onClick: R[6] || (R[6] = (le) => Z("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "nodes" }]),
                onClick: R[7] || (R[7] = (le) => Z("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "debug-env" }]),
                onClick: R[8] || (R[8] = (le) => Z("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            R[35] || (R[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", sh, [
              R[33] || (R[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "environments" }]),
                onClick: R[9] || (R[9] = (le) => Z("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "model-index" }]),
                onClick: R[10] || (R[10] = (le) => Z("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "settings" }]),
                onClick: R[11] || (R[11] = (le) => Z("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "debug-workspace" }]),
                onClick: R[12] || (R[12] = (le) => Z("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            R[36] || (R[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", nh, [
              R[34] || (R[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "export" }]),
                onClick: R[13] || (R[13] = (le) => Z("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "import" }]),
                onClick: R[14] || (R[14] = (le) => Z("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "remotes" }]),
                onClick: R[15] || (R[15] = (le) => Z("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ah, [
            p.value ? (o(), n("div", lh, l(p.value), 1)) : !_.value && W.value === "status" ? (o(), n("div", ih, " Loading status... ")) : (o(), n(H, { key: 2 }, [
              W.value === "status" ? (o(), x(An, {
                key: 0,
                status: _.value,
                onSwitchBranch: O,
                onCommitChanges: R[16] || (R[16] = (le) => ee.value = !0),
                onSyncEnvironment: R[17] || (R[17] = (le) => we.value = !0),
                onViewWorkflows: R[18] || (R[18] = (le) => Z("workflows", "this-env")),
                onViewHistory: R[19] || (R[19] = (le) => Z("history", "this-env")),
                onViewDebug: R[20] || (R[20] = (le) => Z("debug-env", "this-env"))
              }, null, 8, ["status"])) : W.value === "workflows" ? (o(), x(Zd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Q,
                onRefresh: Se
              }, null, 512)) : W.value === "models-env" ? (o(), x(Nc, {
                key: 2,
                onNavigate: K
              })) : W.value === "branches" ? (o(), x(sa, {
                key: 3,
                branches: k.value,
                current: ((ze = _.value) == null ? void 0 : ze.branch) || null,
                onSwitch: lt,
                onCreate: E
              }, null, 8, ["branches", "current"])) : W.value === "history" ? (o(), x(fa, {
                key: 4,
                commits: S.value,
                onSelect: at,
                onCheckout: Xe
              }, null, 8, ["commits"])) : W.value === "nodes" ? (o(), x(lu, { key: 5 })) : W.value === "debug-env" ? (o(), x(am, { key: 6 })) : W.value === "environments" ? (o(), x(pm, {
                key: 7,
                onSwitch: ie,
                onCreate: to,
                onDelete: oo,
                onViewDetails: so
              })) : W.value === "model-index" ? (o(), x(tu, {
                key: 8,
                onRefresh: Se
              })) : W.value === "settings" ? (o(), x(tm, { key: 9 })) : W.value === "debug-workspace" ? (o(), x(sm, { key: 10 })) : W.value === "export" ? (o(), x(Im, { key: 11 })) : W.value === "import" ? (o(), x(tf, { key: 12 })) : W.value === "remotes" ? (o(), x(Ou, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        z.value ? (o(), x(bf, {
          key: 0,
          commit: z.value,
          onClose: R[21] || (R[21] = (le) => z.value = null),
          onCheckout: Xe,
          onCreateBranch: T
        }, null, 8, ["commit"])) : c("", !0),
        oe.value ? (o(), x(xf, {
          key: 1,
          title: oe.value.title,
          message: oe.value.message,
          details: oe.value.details,
          warning: oe.value.warning,
          confirmLabel: oe.value.confirmLabel,
          cancelLabel: oe.value.cancelLabel,
          secondaryLabel: oe.value.secondaryLabel,
          secondaryAction: oe.value.secondaryAction,
          destructive: oe.value.destructive,
          onConfirm: oe.value.onConfirm,
          onCancel: R[22] || (R[22] = (le) => oe.value = null),
          onSecondary: oe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        v(kg, {
          show: P.value,
          "from-environment": ((Le = F.value) == null ? void 0 : Le.name) || "unknown",
          "to-environment": B.value,
          onConfirm: _e,
          onClose: Xt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ee.value && _.value ? (o(), x(qt, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: R[23] || (R[23] = (le) => ee.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : c("", !0),
        we.value && _.value ? (o(), x(Gg, {
          key: 3,
          show: we.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: eo,
          onClose: R[24] || (R[24] = (le) => we.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        v(Ng, {
          show: N.value,
          state: G.value.state,
          progress: G.value.progress,
          message: G.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        D.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[26] || (R[26] = he((le) => D.value = !1, ["self"]))
        }, [
          e("div", rh, [
            e("div", dh, [
              R[38] || (R[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[25] || (R[25] = (le) => D.value = !1)
              }, [...R[37] || (R[37] = [
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
            e("div", ch, [
              R[39] || (R[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", uh, [
                (o(!0), n(H, null, ne($.value, (le) => (o(), n("div", {
                  key: le.name,
                  class: se(["env-item", { current: le.is_current }])
                }, [
                  e("div", mh, [
                    e("div", vh, [
                      e("span", fh, l(le.is_current ? "●" : "○"), 1),
                      e("span", gh, l(le.name), 1),
                      le.current_branch ? (o(), n("span", hh, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), n("span", ph, "CURRENT")) : c("", !0)
                    ]),
                    e("div", yh, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (zp) => ie(le.name)
                  }, " SWITCH ", 8, wh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", bh, [
          v(uo, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(H, null, ne(fe.value, (le) => (o(), n("div", {
                key: le.id,
                class: se(["toast", le.type])
              }, [
                e("span", kh, l(nt(le.type)), 1),
                e("span", _h, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ch = /* @__PURE__ */ Y($h, [["__scopeId", "data-v-8a4bb082"]]), xh = { class: "item-header" }, Sh = { class: "item-info" }, Ih = { class: "filename" }, Eh = { class: "metadata" }, Mh = { class: "size" }, zh = {
  key: 0,
  class: "type"
}, Lh = { class: "item-actions" }, Th = {
  key: 0,
  class: "progress-section"
}, Dh = { class: "progress-bar" }, Rh = { class: "progress-stats" }, Nh = { class: "downloaded" }, Oh = { class: "speed" }, Uh = {
  key: 0,
  class: "eta"
}, Bh = {
  key: 1,
  class: "status-msg paused"
}, Ph = {
  key: 2,
  class: "status-msg queued"
}, Vh = {
  key: 3,
  class: "status-msg completed"
}, Fh = {
  key: 4,
  class: "status-msg failed"
}, Ah = {
  key: 0,
  class: "retries"
}, Wh = /* @__PURE__ */ J({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function r(h) {
      if (h === 0) return "?";
      const u = h / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const u = Math.floor(h / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (h, u) => (o(), n("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", xh, [
        e("div", Sh, [
          e("div", Ih, l(t.item.filename), 1),
          e("div", Eh, [
            e("span", Mh, l(r(t.item.size)), 1),
            t.item.type ? (o(), n("span", zh, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Lh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (i) => s("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (i) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (i) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (i) => s("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", Th, [
        e("div", Dh, [
          e("div", {
            class: "progress-fill",
            style: He({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Rh, [
          e("span", Nh, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", Oh, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", Uh, l(y(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", Bh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", Ph, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", Vh, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", Fh, [
        w(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", Ah, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ Y(Wh, [["__scopeId", "data-v-2110df65"]]), Gh = { class: "queue-title" }, jh = { class: "count" }, Hh = { class: "queue-actions" }, qh = { class: "action-label" }, Kh = {
  key: 0,
  class: "overall-progress"
}, Jh = { class: "progress-bar" }, Yh = {
  key: 0,
  class: "current-mini"
}, Qh = { class: "filename" }, Xh = { class: "speed" }, Zh = {
  key: 1,
  class: "queue-content"
}, ep = {
  key: 0,
  class: "section"
}, tp = {
  key: 1,
  class: "section"
}, op = { class: "section-header" }, sp = { class: "section-label paused" }, np = { class: "items-list" }, ap = {
  key: 2,
  class: "section"
}, lp = { class: "section-header" }, ip = { class: "section-label" }, rp = { class: "items-list" }, dp = {
  key: 3,
  class: "section"
}, cp = { class: "section-header" }, up = { class: "section-label" }, mp = { class: "items-list" }, vp = {
  key: 4,
  class: "section"
}, fp = { class: "section-header" }, gp = { class: "section-label failed" }, hp = { class: "items-list" }, pp = /* @__PURE__ */ J({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: r,
      completedItems: f,
      failedItems: y,
      pausedItems: h,
      hasItems: u,
      activeCount: i,
      cancelDownload: m,
      retryDownload: b,
      resumeDownload: g,
      resumeAllPaused: M,
      removeItem: I,
      clearCompleted: _
    } = ht(), S = C(!1);
    let k = null;
    Et(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: f.value.length
      }),
      (p, z) => {
        k && (clearTimeout(k), k = null);
        const D = p.active === 0 && p.failed === 0 && p.paused === 0 && p.completed > 0, Q = z && (z.active > 0 || z.paused > 0);
        D && Q && (k = setTimeout(() => {
          _(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = U(() => {
      var D;
      if (d.items.length === 0) return 0;
      const p = f.value.length, z = ((D = s.value) == null ? void 0 : D.progress) || 0;
      return Math.round((p + z / 100) / d.items.length * 100);
    });
    function F(p) {
      m(p);
    }
    function L(p) {
      return p === 0 ? "" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (p, z) => (o(), x(be, { to: "body" }, [
      ce(u) ? (o(), n("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: z[0] || (z[0] = (D) => S.value = !S.value)
        }, [
          e("div", Gh, [
            z[4] || (z[4] = e("span", { class: "icon" }, "↓", -1)),
            z[5] || (z[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", jh, "(" + l(ce(i)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", Hh, [
            e("span", qh, l(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (o(), n("div", Zh, [
          ce(s) ? (o(), n("div", ep, [
            z[6] || (z[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            v(rt, {
              item: ce(s),
              onCancel: z[1] || (z[1] = (D) => F(ce(s).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ce(h).length > 0 ? (o(), n("div", tp, [
            e("div", op, [
              e("span", sp, "Paused (" + l(ce(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: z[2] || (z[2] = //@ts-ignore
                (...D) => ce(M) && ce(M)(...D))
              }, "Resume All")
            ]),
            e("div", np, [
              (o(!0), n(H, null, ne(ce(h), (D) => (o(), x(rt, {
                key: D.id,
                item: D,
                onResume: (Q) => ce(g)(D.id),
                onRemove: (Q) => ce(I)(D.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(r).length > 0 ? (o(), n("div", ap, [
            e("div", lp, [
              e("span", ip, "Queued (" + l(ce(r).length) + ")", 1)
            ]),
            e("div", rp, [
              (o(!0), n(H, null, ne(ce(r), (D) => (o(), x(rt, {
                key: D.id,
                item: D,
                onCancel: (Q) => F(D.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ce(f).length > 0 ? (o(), n("div", dp, [
            e("div", cp, [
              e("span", up, "Completed (" + l(ce(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: z[3] || (z[3] = //@ts-ignore
                (...D) => ce(_) && ce(_)(...D))
              }, "Clear")
            ]),
            e("div", mp, [
              (o(!0), n(H, null, ne(ce(f).slice(0, 3), (D) => (o(), x(rt, {
                key: D.id,
                item: D,
                onRemove: (Q) => ce(I)(D.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ce(y).length > 0 ? (o(), n("div", vp, [
            e("div", fp, [
              e("span", gp, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", hp, [
              (o(!0), n(H, null, ne(ce(y), (D) => (o(), x(rt, {
                key: D.id,
                item: D,
                onRetry: (Q) => ce(b)(D.id),
                onRemove: (Q) => ce(I)(D.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), n("div", Kh, [
          e("div", Jh, [
            e("div", {
              class: "progress-fill",
              style: He({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ce(s) ? (o(), n("div", Yh, [
            e("span", Qh, l(ce(s).filename), 1),
            e("span", Xh, l(L(ce(s).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), yp = /* @__PURE__ */ Y(pp, [["__scopeId", "data-v-60751cfa"]]), wp = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', bp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', kp = {
  comfy: wp,
  phosphor: bp
}, Tt = "comfy", Kt = "comfygit-theme";
let Ke = null, Jt = Tt;
function _p() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Tt;
}
function Yt(t = Tt) {
  Ke && Ke.remove(), Ke = document.createElement("style"), Ke.id = "comfygit-theme-styles", Ke.setAttribute("data-theme", t), Ke.textContent = kp[t], document.head.appendChild(Ke), document.body.setAttribute("data-comfygit-theme", t), Jt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function $p() {
  return Jt;
}
function Cp(t) {
  Yt(t);
}
const Dt = document.createElement("link");
Dt.rel = "stylesheet";
Dt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Dt);
const xp = _p();
Yt(xp);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Cp(t);
  },
  getTheme: () => {
    const t = $p();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Te = null, Ie = null, mt = null, dt = null, Pt = null;
const tt = C(null);
async function bt() {
  var t;
  if (!((t = et) != null && t.api)) return null;
  try {
    const d = await et.api.fetchApi("/v2/comfygit/status");
    d.ok && (tt.value = await d.json());
  } catch {
  }
}
function Sp() {
  if (!tt.value) return !1;
  const t = tt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || tt.value.has_changes;
}
function Ip() {
  Te && Te.remove(), Te = document.createElement("div"), Te.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Te.appendChild(t), Te.addEventListener("click", (r) => {
    r.target === Te && Ct();
  });
  const d = (r) => {
    r.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Mt({
    render: () => zt(Ch, {
      onClose: Ct,
      onStatusUpdate: (r) => {
        tt.value = r, vt();
      }
    })
  }).mount(t), document.body.appendChild(Te);
}
function Ct() {
  Te && (Te.remove(), Te = null);
}
function Ep(t) {
  ct(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (f) => {
    Ie && !Ie.contains(f.target) && f.target !== t && (ct(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (f) => {
    f.key === "Escape" && (ct(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), mt = Mt({
    render: () => zt(qt, {
      status: tt.value,
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
function Mp() {
  dt || (dt = document.createElement("div"), dt.className = "comfygit-download-queue-root", Pt = Mt({
    render: () => zt(yp)
  }), Pt.mount(dt), document.body.appendChild(dt), console.log("[ComfyGit] Model download queue mounted"));
}
let Ve = null;
function vt() {
  if (!Ve) return;
  const t = Ve.querySelector(".commit-indicator");
  t && (t.style.display = Sp() ? "block" : "none");
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
et.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ip, Ve = document.createElement("button"), Ve.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ve.innerHTML = 'Commit <span class="commit-indicator"></span>', Ve.title = "Quick Commit", Ve.onclick = () => Ep(Ve), t.appendChild(d), t.appendChild(Ve), (y = (f = et.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (et.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Mp();
    const { loadPendingDownloads: s } = ht();
    s(), await bt(), vt(), setInterval(async () => {
      await bt(), vt();
    }, 3e4);
    const r = et.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, u = function() {
        const m = document.createElement("div");
        m.style.cssText = `
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
        b.textContent = "Workflows updated - refresh required", m.appendChild(b);
        const g = document.createElement("button");
        g.textContent = "Refresh", g.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => h(), m.appendChild(g);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => m.remove(), m.appendChild(M), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: b, workflow_name: g } = m.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${g}`), await bt(), vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (m) => {
        const b = m.detail != null;
        b && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : u()), i = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
