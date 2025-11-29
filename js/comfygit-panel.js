import { app as pt } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as s, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as ve, createBlock as E, resolveDynamicComponent as Ht, normalizeClass as te, withCtx as i, toDisplayString as a, createVNode as p, createTextVNode as y, computed as U, Fragment as A, renderList as X, normalizeStyle as Ze, ref as C, onMounted as Ie, watch as wt, Teleport as Me, withModifiers as $e, Transition as Ro, createSlots as Pt, withKeys as rt, onUnmounted as To, reactive as ao, readonly as zo, unref as ge, withDirectives as Xe, vModelText as lo, vModelRadio as Bt, vModelCheckbox as io, nextTick as Lo, vModelSelect as At, TransitionGroup as No, createApp as qt, h as Kt } from "vue";
const Do = { class: "panel-layout" }, Po = {
  key: 0,
  class: "panel-layout-header"
}, Uo = {
  key: 1,
  class: "panel-layout-search"
}, Oo = { class: "panel-layout-content" }, Bo = {
  key: 2,
  class: "panel-layout-footer"
}, Ao = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", Do, [
      u.$slots.header ? (o(), s("div", Po, [
        ve(u.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.search ? (o(), s("div", Uo, [
        ve(u.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Oo, [
        ve(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", Bo, [
        ve(u.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), K = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, h] of u)
    n[r] = h;
  return n;
}, Ue = /* @__PURE__ */ K(Ao, [["__scopeId", "data-v-21565df9"]]), Fo = {
  key: 0,
  class: "panel-title-prefix"
}, Vo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Wo = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), E(Ht(`h${t.level}`), {
      class: te(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Fo, a(t.prefix), 1)) : (o(), s("span", Vo)),
        ve(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ K(Wo, [["__scopeId", "data-v-c3875efc"]]), jo = ["title"], Ho = ["width", "height"], qo = /* @__PURE__ */ q({
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
      ])], 8, Ho))
    ], 8, jo));
  }
}), ro = /* @__PURE__ */ K(qo, [["__scopeId", "data-v-6fc7f16d"]]), Ko = { class: "header-left" }, Jo = {
  key: 0,
  class: "header-actions"
}, Yo = /* @__PURE__ */ q({
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
      class: te(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ko, [
        p(Go, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), E(ro, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : d("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", Jo, [
        ve(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ K(Yo, [["__scopeId", "data-v-55a62cd6"]]), Qo = {
  key: 0,
  class: "section-title-count"
}, Xo = {
  key: 1,
  class: "section-title-icon"
}, Zo = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), E(Ht(`h${t.level}`), {
      class: te(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        ve(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Qo, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), s("span", Xo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ae = /* @__PURE__ */ K(Zo, [["__scopeId", "data-v-559361eb"]]), es = { class: "status-grid" }, ts = { class: "status-grid__columns" }, os = { class: "status-grid__column" }, ss = { class: "status-grid__title" }, ns = { class: "status-grid__column status-grid__column--right" }, as = { class: "status-grid__title" }, ls = {
  key: 0,
  class: "status-grid__footer"
}, is = /* @__PURE__ */ q({
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
          ve(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", ns, [
          e("h4", as, a(t.rightTitle), 1),
          ve(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", ls, [
        ve(u.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ K(is, [["__scopeId", "data-v-73b7ba3f"]]), ds = {
  key: 0,
  class: "status-item__icon"
}, cs = {
  key: 1,
  class: "status-item__count"
}, us = { class: "status-item__label" }, ms = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = U(() => `status-item--${u.variant}`);
    return (r, h) => (o(), s("div", {
      class: te(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", ds, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), s("span", cs, a(t.count), 1)) : d("", !0),
      e("span", us, a(t.label), 1)
    ], 2));
  }
}), Ye = /* @__PURE__ */ K(ms, [["__scopeId", "data-v-6f929183"]]), vs = { class: "issue-card__header" }, fs = { class: "issue-card__icon" }, gs = { class: "issue-card__title" }, hs = {
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
}, ks = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = U(() => `issue-card--${u.severity}`);
    return (r, h) => (o(), s("div", {
      class: te(["issue-card", n.value])
    }, [
      e("div", vs, [
        e("span", fs, a(t.icon), 1),
        e("h4", gs, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", hs, [
        t.description ? (o(), s("p", ps, a(t.description), 1)) : d("", !0),
        ve(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), s("div", ys, [
        (o(!0), s(A, null, X(t.items, (g, m) => (o(), s("div", {
          key: m,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (o(), s("div", ws, [
        ve(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ K(ks, [["__scopeId", "data-v-df6aa348"]]), bs = ["type", "disabled"], _s = {
  key: 0,
  class: "spinner"
}, $s = /* @__PURE__ */ q({
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
      class: te(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", _s)) : d("", !0),
      t.loading ? d("", !0) : ve(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, bs));
  }
}), J = /* @__PURE__ */ K($s, [["__scopeId", "data-v-772abe47"]]), Cs = { class: "empty-state" }, xs = {
  key: 0,
  class: "empty-icon"
}, Ss = { class: "empty-message" }, Is = /* @__PURE__ */ q({
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
      t.icon ? (o(), s("div", xs, a(t.icon), 1)) : d("", !0),
      e("p", Ss, a(t.message), 1),
      t.actionLabel ? (o(), E(J, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ K(Is, [["__scopeId", "data-v-4466284f"]]), Es = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: te(["detail-label"]),
      style: Ze({ minWidth: t.minWidth })
    }, [
      ve(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ K(Es, [["__scopeId", "data-v-75e9eeb8"]]), Ms = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: te(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ve(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ K(Ms, [["__scopeId", "data-v-2f186e4c"]]), Rs = { class: "detail-row" }, Ts = /* @__PURE__ */ q({
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
      p(Gt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), E(jt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ve(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), we = /* @__PURE__ */ K(Ts, [["__scopeId", "data-v-ef15664a"]]), zs = { class: "modal-header" }, Ls = { class: "modal-body" }, Ns = { class: "status-section" }, Ds = {
  key: 0,
  class: "status-section"
}, Ps = { class: "section-header-row" }, Us = {
  key: 0,
  class: "workflow-group"
}, Os = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, As = { class: "workflow-list" }, Fs = { class: "workflow-name" }, Vs = { class: "workflow-issue" }, Ws = {
  key: 1,
  class: "workflow-group"
}, Gs = { class: "workflow-group-header" }, js = { class: "workflow-group-title" }, Hs = { class: "workflow-list" }, qs = { class: "workflow-name" }, Ks = { class: "workflow-issue" }, Js = {
  key: 2,
  class: "workflow-group"
}, Ys = { class: "workflow-group-header" }, Qs = { class: "workflow-group-title" }, Xs = { class: "workflow-list" }, Zs = { class: "workflow-name" }, en = {
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
}, Nn = {
  key: 2,
  class: "status-section"
}, Dn = { class: "section-header-row" }, Pn = {
  key: 0,
  class: "drift-item"
}, Un = { class: "drift-list" }, On = {
  key: 0,
  class: "drift-list-more"
}, Bn = {
  key: 1,
  class: "drift-item"
}, An = { class: "drift-list" }, Fn = {
  key: 0,
  class: "drift-list-more"
}, Vn = {
  key: 2,
  class: "drift-item"
}, Wn = {
  key: 3,
  class: "drift-item"
}, Gn = {
  key: 3,
  class: "status-section"
}, jn = { class: "info-box" }, Hn = { class: "drift-list" }, qn = {
  key: 0,
  class: "drift-list-more"
}, Kn = {
  key: 4,
  class: "status-section"
}, Jn = { class: "warning-box" }, Yn = {
  key: 5,
  class: "empty-state-inline"
}, Qn = { class: "modal-actions" }, Xn = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = C(!1);
    Ie(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), wt(() => u.show, (M, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", M);
    }, { immediate: !0 });
    const r = U(() => {
      var M, b, P;
      return ((P = (b = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : P.filter(
        (_) => _.status === "broken" && _.sync_state === "synced"
      )) || [];
    }), h = U(() => {
      var M, b, P;
      return ((P = (b = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : P.filter(
        (_) => _.status === "broken" && _.sync_state !== "synced"
      )) || [];
    }), g = U(() => {
      var M, b, P;
      return ((P = (b = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : b.synced) == null ? void 0 : P.filter((_) => {
        var $, V, T;
        const k = (T = (V = ($ = u.status) == null ? void 0 : $.workflows) == null ? void 0 : V.analyzed) == null ? void 0 : T.find((R) => R.name === _);
        return !k || k.status !== "broken";
      })) || [];
    }), m = U(() => {
      var M, b, P, _, k;
      return (M = u.status) != null && M.workflows ? (((b = u.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((P = u.status.workflows.modified) == null ? void 0 : P.length) ?? 0) > 0 || (((_ = u.status.workflows.deleted) == null ? void 0 : _.length) ?? 0) > 0 || (((k = u.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), f = U(() => {
      var b, P, _;
      const M = (b = u.status) == null ? void 0 : b.git_changes;
      return M ? (((P = M.nodes_added) == null ? void 0 : P.length) ?? 0) > 0 || (((_ = M.nodes_removed) == null ? void 0 : _.length) ?? 0) > 0 || M.workflow_changes || M.has_other_changes : !1;
    }), l = U(() => {
      var M, b, P, _, k, $;
      return !m.value && !f.value && ((b = (M = u.status) == null ? void 0 : M.comparison) == null ? void 0 : b.is_synced) && (((P = u.status) == null ? void 0 : P.missing_models_count) ?? 0) === 0 && ((($ = (k = (_ = u.status) == null ? void 0 : _.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), c = U(() => {
      var b, P;
      const M = (P = (b = u.status) == null ? void 0 : b.git_changes) == null ? void 0 : P.workflow_changes;
      return M ? typeof M == "number" ? M : Object.keys(M).length : 0;
    });
    function w(M) {
      return typeof M == "string" ? M : M.name;
    }
    function v(M) {
      return typeof M == "object" && M.is_development === !0;
    }
    return (M, b) => {
      var P, _, k, $, V, T, R, H, j, Y, W, D, z, O, B, ae, ie, Q, Z, N, S, ne;
      return o(), E(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[6] || (b[6] = (ee) => M.$emit("close"))
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
                onClick: b[0] || (b[0] = (ee) => M.$emit("close"))
              }, "✕")
            ]),
            e("div", Ls, [
              e("div", Ns, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...b[8] || (b[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                p(we, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (o(), s("div", Ds, [
                e("div", Ps, [
                  p(Ae, { level: "4" }, {
                    default: i(() => [...b[9] || (b[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (ee) => M.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Us, [
                  e("div", Os, [
                    b[10] || (b[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bs, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", As, [
                    (o(!0), s(A, null, X(r.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, a(ee.name), 1),
                      e("span", Vs, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                h.value.length ? (o(), s("div", Ws, [
                  e("div", Gs, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", js, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), s(A, null, X(h.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", qs, a(ee.name), 1),
                      e("span", Ks, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (_ = (P = t.status.workflows) == null ? void 0 : P.new) != null && _.length ? (o(), s("div", Js, [
                  e("div", Ys, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Qs, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Xs, [
                    (o(!0), s(A, null, X(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Zs, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                ($ = (k = t.status.workflows) == null ? void 0 : k.modified) != null && $.length ? (o(), s("div", en, [
                  e("div", tn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", on, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sn, [
                    (o(!0), s(A, null, X(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", nn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (T = (V = t.status.workflows) == null ? void 0 : V.deleted) != null && T.length ? (o(), s("div", an, [
                  e("div", ln, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", rn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), s(A, null, X(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", cn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (o(), s("div", un, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (ee) => n.value = !n.value)
                  }, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", mn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", vn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", fn, [
                    (o(!0), s(A, null, X(g.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", gn, a(ee), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              f.value ? (o(), s("div", hn, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...b[16] || (b[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && H.length ? (o(), s("div", pn, [
                  e("div", yn, [
                    b[17] || (b[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", wn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (o(!0), s(A, null, X(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", bn, a(w(ee)), 1),
                      v(ee) ? (o(), s("span", _n, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (Y = (j = t.status.git_changes) == null ? void 0 : j.nodes_removed) != null && Y.length ? (o(), s("div", $n, [
                  e("div", Cn, [
                    b[18] || (b[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", xn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (o(!0), s(A, null, X(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", In, a(w(ee)), 1),
                      v(ee) ? (o(), s("span", En, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (W = t.status.git_changes) != null && W.workflow_changes ? (o(), s("div", Mn, [
                  b[19] || (b[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Rn, [
                    e("div", Tn, [
                      e("span", zn, a(c.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (o(), s("div", Ln, [...b[20] || (b[20] = [
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
              (z = t.status.comparison) != null && z.is_synced ? d("", !0) : (o(), s("div", Nn, [
                e("div", Dn, [
                  p(Ae, { level: "4" }, {
                    default: i(() => [...b[21] || (b[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (ee) => M.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[22] || (b[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (B = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && B.length ? (o(), s("div", Pn, [
                  p(we, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Un, [
                    (o(!0), s(A, null, X(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", On, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ie = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && ie.length ? (o(), s("div", Bn, [
                  p(we, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", An, [
                    (o(!0), s(A, null, X(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Fn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (Z = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && Z.length ? (o(), s("div", Vn, [
                  p(we, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (N = t.status.comparison) != null && N.packages_in_sync ? d("", !0) : (o(), s("div", Wn, [
                  p(we, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && ne.length ? (o(), s("div", Gn, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...b[23] || (b[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", jn, [
                  b[24] || (b[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Hn, [
                  (o(!0), s(A, null, X(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", qn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Kn, [
                p(Ae, { level: "4" }, {
                  default: i(() => [...b[25] || (b[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Jn, [
                  b[26] || (b[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[27] || (b[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              l.value ? (o(), s("div", Yn, [...b[28] || (b[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Qn, [
              p(J, {
                variant: "secondary",
                onClick: b[4] || (b[4] = (ee) => M.$emit("close"))
              }, {
                default: i(() => [...b[29] || (b[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Zn = /* @__PURE__ */ K(Xn, [["__scopeId", "data-v-c67eed17"]]), ea = { class: "health-section-header" }, ta = { class: "suggestions-content" }, oa = { class: "suggestions-text" }, sa = { style: { "margin-top": "var(--cg-space-3)" } }, na = {
  key: 1,
  class: "no-issues-text"
}, aa = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: u, emit: n }) {
    const r = t, h = C(!1), g = C(!1);
    function m() {
      h.value = !0;
    }
    function f() {
      h.value = !1, c("view-workflows");
    }
    function l() {
      h.value = !1, c("view-nodes");
    }
    const c = n, w = C(!1), v = U(() => {
      const O = r.status.workflows.analyzed || [], B = O.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return B.length === 0 && r.status.missing_models_count > 0 ? O.filter((ae) => ae.sync_state === "synced") : B;
    });
    function M() {
      const O = v.value;
      O.length !== 0 && (w.value = !0, c("repair-missing-models", O.map((B) => B.name)));
    }
    function b() {
      w.value = !1;
    }
    u({ resetRepairingState: b });
    const P = U(() => r.status.workflows.new.length > 0 || r.status.workflows.modified.length > 0 || r.status.workflows.deleted.length > 0), _ = U(() => r.status.has_changes), k = U(() => {
      const O = r.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), $ = U(() => r.status.has_changes || P.value), V = U(() => Object.keys(r.status.git_changes.workflow_changes_detail).length), T = U(() => r.status.git_changes.has_other_changes), R = U(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter((B) => B.status === "broken")) || [];
    }), H = U(() => {
      var O;
      return ((O = r.status.workflows.analyzed) == null ? void 0 : O.filter(
        (B) => B.has_path_sync_issues && !B.has_issues
      )) || [];
    }), j = U(() => R.value.length > 0), Y = U(() => j.value || H.value.length > 0 || r.status.missing_models_count > 0 || !r.status.comparison.is_synced), W = U(() => {
      const O = [];
      return r.status.workflows.new.length > 0 && O.push(`${r.status.workflows.new.length} new`), r.status.workflows.modified.length > 0 && O.push(`${r.status.workflows.modified.length} modified`), r.status.workflows.deleted.length > 0 && O.push(`${r.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = U(() => {
      var ae, ie;
      const O = [], B = r.status.comparison;
      return (ae = B.missing_nodes) != null && ae.length && O.push(`${B.missing_nodes.length} missing node${B.missing_nodes.length === 1 ? "" : "s"}`), (ie = B.extra_nodes) != null && ie.length && O.push(`${B.extra_nodes.length} untracked node${B.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), z = U(() => {
      var ae, ie;
      const O = [], B = r.status.comparison;
      return (ae = B.extra_nodes) != null && ae.length && (B.extra_nodes.slice(0, 3).forEach((Q) => {
        O.push(`Untracked: ${Q}`);
      }), B.extra_nodes.length > 3 && O.push(`...and ${B.extra_nodes.length - 3} more untracked`)), (ie = B.missing_nodes) != null && ie.length && (B.missing_nodes.slice(0, 3).forEach((Q) => {
        O.push(`Missing: ${Q}`);
      }), B.missing_nodes.length > 3 && O.push(`...and ${B.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, B) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: B[1] || (B[1] = (ae) => g.value = !0),
            onMouseleave: B[2] || (B[2] = (ae) => g.value = !1)
          }, [
            e("div", ea, [
              p(Ae, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...B[9] || (B[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              p(Ro, { name: "fade" }, {
                default: i(() => [
                  g.value ? (o(), E(J, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: m
                  }, {
                    default: i(() => [...B[10] || (B[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            p(rs, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Pt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), E(Ye, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), E(Ye, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), E(Ye, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                p(Ye, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: P.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), E(Ye, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), E(Ye, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), E(Ye, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                T.value ? (o(), E(Ye, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                _.value && !k.value && !T.value ? (o(), E(Ye, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                _.value ? d("", !0) : (o(), E(Ye, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              $.value ? {
                name: "footer",
                fn: i(() => [
                  B[12] || (B[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ta, [
                    e("span", oa, a(W.value), 1),
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: B[0] || (B[0] = (ae) => O.$emit("commit-changes"))
                    }, {
                      default: i(() => [...B[11] || (B[11] = [
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
          t.status.is_detached_head ? (o(), E(gt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: B[3] || (B[3] = (ae) => O.$emit("create-branch"))
              }, {
                default: i(() => [...B[13] || (B[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", sa, [
            p(Ae, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...B[14] || (B[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Y.value ? (o(), s(A, { key: 0 }, [
              R.value.length > 0 ? (o(), E(gt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${R.value.length} workflow${R.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: R.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[4] || (B[4] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...B[15] || (B[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              H.value.length > 0 ? (o(), E(gt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${H.value.length} workflow${H.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: H.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[5] || (B[5] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...B[16] || (B[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !j.value ? (o(), E(gt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: M
                  }, {
                    default: i(() => [
                      y(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  p(J, {
                    variant: "secondary",
                    size: "sm",
                    onClick: B[6] || (B[6] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: i(() => [...B[17] || (B[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (o(), E(gt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: D.value,
                items: z.value
              }, {
                actions: i(() => [
                  p(J, {
                    variant: "secondary",
                    size: "sm",
                    onClick: m
                  }, {
                    default: i(() => [...B[18] || (B[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  p(J, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[7] || (B[7] = (ae) => O.$emit("view-nodes"))
                  }, {
                    default: i(() => [...B[19] || (B[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : $.value ? (o(), s("span", na, "No issues")) : (o(), E(Ke, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      p(Zn, {
        show: h.value,
        status: t.status,
        onClose: B[8] || (B[8] = (ae) => h.value = !1),
        onNavigateWorkflows: f,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), la = /* @__PURE__ */ K(aa, [["__scopeId", "data-v-5f863725"]]), ia = ["type", "value", "placeholder", "disabled"], ra = /* @__PURE__ */ q({
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
    const r = t, h = n, g = C(null);
    function m(f) {
      const l = f.target.value;
      h("update:modelValue", l);
    }
    return Ie(() => {
      r.autoFocus && g.value && g.value.focus();
    }), u({
      focus: () => {
        var f;
        return (f = g.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = g.value) == null ? void 0 : f.blur();
      }
    }), (f, l) => (o(), s("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: te(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        l[0] || (l[0] = rt((c) => f.$emit("enter"), ["enter"])),
        l[1] || (l[1] = rt((c) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (c) => f.$emit("focus")),
      onBlur: l[3] || (l[3] = (c) => f.$emit("blur"))
    }, null, 42, ia));
  }
}), Dt = /* @__PURE__ */ K(ra, [["__scopeId", "data-v-0380d08f"]]), da = { class: "branch-create-form" }, ca = { class: "form-actions" }, ua = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = C(""), h = U(() => {
      const f = r.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function g() {
      h.value && (n("create", r.value.trim()), r.value = "");
    }
    function m() {
      r.value = "", n("cancel");
    }
    return (f, l) => (o(), s("div", da, [
      p(Dt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (c) => r.value = c),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", ca, [
        p(J, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: g
        }, {
          default: i(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(J, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: i(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ma = /* @__PURE__ */ K(ua, [["__scopeId", "data-v-7c500394"]]), va = { class: "branch-list-item__indicator" }, fa = { class: "branch-list-item__name" }, ga = {
  key: 0,
  class: "branch-list-item__actions"
}, ha = {
  key: 0,
  class: "branch-list-item__current-label"
}, pa = /* @__PURE__ */ q({
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
      class: te(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", va, a(t.isCurrent ? "●" : "○"), 1),
      e("span", fa, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", ga, [
        ve(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", ha, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ K(pa, [["__scopeId", "data-v-c6581a24"]]), wa = {
  key: 2,
  class: "branch-list"
}, ka = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = C(!1);
    function h(m) {
      n("create", m), g();
    }
    function g() {
      r.value = !1;
    }
    return (m, f) => (o(), E(Ue, null, {
      header: i(() => [
        p(Oe, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? d("", !0) : (o(), E(J, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: f[0] || (f[0] = (l) => r.value = !0)
            }, {
              default: i(() => [...f[1] || (f[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), E(ma, {
          key: 0,
          onCreate: h,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (o(), E(Ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", wa, [
          (o(!0), s(A, null, X(t.branches, (l) => (o(), E(ya, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? d("", !0) : (o(), E(J, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (c) => m.$emit("delete", l.name)
              }, {
                default: i(() => [...f[2] || (f[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? d("", !0) : (o(), E(J, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (c) => m.$emit("switch", l.name)
              }, {
                default: i(() => [...f[3] || (f[3] = [
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
}), ba = /* @__PURE__ */ K(ka, [["__scopeId", "data-v-86784ddd"]]), _a = { class: "commit-list" }, $a = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", _a, [
      ve(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ca = /* @__PURE__ */ K($a, [["__scopeId", "data-v-8c5ee761"]]), xa = { class: "commit-hash" }, Sa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = U(() => u.hash.slice(0, u.length));
    return (r, h) => (o(), s("span", xa, a(n.value), 1));
  }
}), co = /* @__PURE__ */ K(Sa, [["__scopeId", "data-v-7c333cc6"]]), Ia = { class: "commit-message" }, Ea = { class: "commit-date" }, Ma = /* @__PURE__ */ q({
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
    function h() {
      n.clickable && r("click");
    }
    return (g, m) => (o(), s("div", {
      class: te(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      p(co, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ia, a(t.message), 1),
      e("span", Ea, a(t.relativeDate), 1),
      g.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = $e(() => {
        }, ["stop"]))
      }, [
        ve(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ K(Ma, [["__scopeId", "data-v-dd7c621b"]]), Ta = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), E(Ue, null, {
      header: i(() => [
        p(Oe, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), E(Ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), E(Ca, { key: 1 }, {
          default: i(() => [
            (o(!0), s(A, null, X(t.commits, (r) => (o(), E(Ra, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (h) => u.$emit("select", r)
            }, {
              actions: i(() => [
                p(J, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => u.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: i(() => [...n[0] || (n[0] = [
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
}), za = /* @__PURE__ */ K(Ta, [["__scopeId", "data-v-981c3c64"]]), F0 = [
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
], V0 = {
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
], W0 = [
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
function _t() {
  return !1;
}
function Re() {
  const t = C(!1), u = C(null);
  async function n(x, I) {
    var de;
    if (!((de = window.app) != null && de.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(x, I);
    if (!F.ok) {
      const Ce = await F.json().catch(() => ({}));
      throw new Error(Ce.error || Ce.message || `Request failed: ${F.status}`);
    }
    return F.json();
  }
  async function r(x = !1) {
    return n(x ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(x, I = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: x, allow_issues: I })
    });
  }
  async function g(x = 10, I = 0) {
    return n(`/v2/comfygit/log?limit=${x}&offset=${I}`);
  }
  async function m(x) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: x })
    });
  }
  async function f() {
    return n("/v2/comfygit/branches");
  }
  async function l(x) {
    return n(`/v2/comfygit/commit/${x}`);
  }
  async function c(x, I = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: x, force: I })
    });
  }
  async function w(x, I = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: x, start_point: I })
    });
  }
  async function v(x, I = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: x, force: I })
    });
  }
  async function M(x, I = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(x)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: I })
    });
  }
  async function b() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const x = await r();
        return [{
          name: x.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + x.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: x.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: x.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(x) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: x })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function k(x) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(x)
    });
  }
  async function $() {
    return n("/v2/workspace/environments/create_status");
  }
  async function V(x = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${x}`);
  }
  async function T(x) {
    return n(`/v2/workspace/environments/${x}`, {
      method: "DELETE"
    });
  }
  async function R(x = !1) {
    try {
      return n(x ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const I = await r(x), F = [];
      return I.workflows.new.forEach((de) => {
        F.push({ name: de, status: "new", missing_nodes: 0, missing_models: 0, path: de });
      }), I.workflows.modified.forEach((de) => {
        F.push({ name: de, status: "modified", missing_nodes: 0, missing_models: 0, path: de });
      }), I.workflows.synced.forEach((de) => {
        F.push({ name: de, status: "synced", missing_nodes: 0, missing_models: 0, path: de });
      }), F;
    }
  }
  async function H(x) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(x)}/details`);
  }
  async function j(x) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(x)}/resolve`, {
      method: "POST"
    });
  }
  async function Y(x, I, F) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(x)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: I, install_models: F })
    });
  }
  async function W(x, I, F) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(x)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: I, importance: F })
    });
  }
  async function D() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function z() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(x) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(x)}`);
  }
  async function B(x) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: x })
    });
  }
  async function ae(x, I) {
    return n(`/v2/workspace/models/${x}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: I })
    });
  }
  async function ie(x, I) {
    return n(`/v2/workspace/models/${x}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: I })
    });
  }
  async function Q(x) {
    return n(`/v2/workspace/models/${x}`, {
      method: "DELETE"
    });
  }
  async function Z(x) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(x)
    });
  }
  async function N() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function S() {
    return n("/v2/workspace/models/directory");
  }
  async function ne(x) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: x })
    });
  }
  async function ee() {
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
  async function _e(x) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(x)
    });
  }
  async function ye(x, I) {
    try {
      const F = new URLSearchParams();
      return x && F.append("level", x), I && F.append("lines", I.toString()), n(`/v2/comfygit/debug/logs?${F}`);
    } catch {
      return [];
    }
  }
  async function Te(x, I) {
    try {
      const F = new URLSearchParams();
      return x && F.append("level", x), I && F.append("lines", I.toString()), n(`/v2/workspace/debug/logs?${F}`);
    } catch {
      return [];
    }
  }
  async function be() {
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
  async function me(x) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(x)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(x) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(x)}/install`, {
      method: "POST"
    });
  }
  async function he(x) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(x)}/update`, {
      method: "POST"
    });
  }
  async function Fe(x) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(x)}`, {
      method: "DELETE"
    });
  }
  async function Je() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function We(x, I) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: x, url: I })
    });
  }
  async function fe(x) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}`, {
      method: "DELETE"
    });
  }
  async function Ge(x, I, F) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: I, push_url: F })
    });
  }
  async function je(x) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}/fetch`, {
      method: "POST"
    });
  }
  async function Ve(x) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}/status`);
    } catch {
      return null;
    }
  }
  async function dt(x = "skip", I = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: x,
        remove_extra_nodes: I
      })
    });
  }
  async function ue(x, I) {
    const F = I ? `/v2/comfygit/remotes/${encodeURIComponent(x)}/pull-preview?branch=${encodeURIComponent(I)}` : `/v2/comfygit/remotes/${encodeURIComponent(x)}/pull-preview`;
    return n(F);
  }
  async function Ne(x, I = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: I.modelStrategy || "skip",
        force: I.force || !1,
        resolutions: I.resolutions
      })
    });
  }
  async function ct(x, I) {
    const F = I ? `/v2/comfygit/remotes/${encodeURIComponent(x)}/push-preview?branch=${encodeURIComponent(I)}` : `/v2/comfygit/remotes/${encodeURIComponent(x)}/push-preview`;
    return n(F);
  }
  async function tt(x, I = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: I.force || !1 })
    });
  }
  async function Se(x, I) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(x)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: I })
    });
  }
  async function ut(x) {
    const I = {
      success: 0,
      failed: []
    };
    for (const F of x)
      try {
        await j(F), I.success++;
      } catch (de) {
        I.failed.push({
          name: F,
          error: de instanceof Error ? de.message : "Unknown error"
        });
      }
    return I;
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: h,
    getHistory: g,
    exportEnv: m,
    // Git Operations
    getBranches: f,
    getCommitDetail: l,
    checkout: c,
    createBranch: w,
    switchBranch: v,
    deleteBranch: M,
    // Environment Management
    getEnvironments: b,
    switchEnvironment: P,
    getSwitchProgress: _,
    createEnvironment: k,
    getCreateProgress: $,
    getComfyUIReleases: V,
    deleteEnvironment: T,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: H,
    resolveWorkflow: j,
    installWorkflowDeps: Y,
    setModelImportance: W,
    // Model Management
    getEnvironmentModels: D,
    getWorkspaceModels: z,
    getModelDetails: O,
    openFileLocation: B,
    addModelSource: ae,
    removeModelSource: ie,
    deleteModel: Q,
    downloadModel: Z,
    scanWorkspaceModels: N,
    getModelsDirectory: S,
    setModelsDirectory: ne,
    // Settings
    getConfig: ee,
    updateConfig: _e,
    // Debug/Logs
    getEnvironmentLogs: ye,
    getWorkspaceLogs: Te,
    // Node Management
    getNodes: be,
    trackNodeAsDev: me,
    installNode: ze,
    updateNode: he,
    uninstallNode: Fe,
    // Git Remotes
    getRemotes: Je,
    addRemote: We,
    removeRemote: fe,
    updateRemoteUrl: Ge,
    fetchRemote: je,
    getRemoteSyncStatus: Ve,
    // Push/Pull
    getPullPreview: ue,
    pullFromRemote: Ne,
    getPushPreview: ct,
    pushToRemote: tt,
    validateMerge: Se,
    // Environment Sync
    syncEnvironmentManually: dt,
    // Workflow Repair
    repairWorkflowModels: ut
  };
}
async function $t(t, u = {}, n = 5e3) {
  const r = new AbortController(), h = setTimeout(() => r.abort(), n);
  try {
    const g = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(h), g;
  } catch (g) {
    throw clearTimeout(h), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function uo() {
  const t = C(null);
  async function u() {
    try {
      const m = await $t(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const m = await $t(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const m = await $t(
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
  async function h() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await $t(
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
    restart: h,
    kill: g
  };
}
const Na = { class: "base-modal-header" }, Da = {
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
}, Aa = /* @__PURE__ */ q({
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
    function h() {
      n.closeOnOverlayClick && r("close");
    }
    function g(m) {
      m.key === "Escape" && r("close");
    }
    return Ie(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), To(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (m, f) => (o(), E(Me, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: te(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: f[1] || (f[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Na, [
            ve(m.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Da, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (l) => m.$emit("close"))
            }, [...f[2] || (f[2] = [
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
          e("div", Pa, [
            t.loading ? (o(), s("div", Ua, "Loading...")) : t.error ? (o(), s("div", Oa, a(t.error), 1)) : ve(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), s("div", Ba, [
            ve(m.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), et = /* @__PURE__ */ K(Aa, [["__scopeId", "data-v-2125a0e6"]]), Fa = ["type", "disabled"], Va = {
  key: 0,
  class: "spinner"
}, Wa = /* @__PURE__ */ q({
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
      class: te(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Va)) : d("", !0),
      ve(u.$slots, "default", {}, void 0, !0)
    ], 10, Fa));
  }
}), re = /* @__PURE__ */ K(Wa, [["__scopeId", "data-v-f3452606"]]), Ga = {
  key: 0,
  class: "base-title-count"
}, ja = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), E(Ht(`h${t.level}`), {
      class: te(["base-title", t.variant])
    }, {
      default: i(() => [
        ve(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ga, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), It = /* @__PURE__ */ K(ja, [["__scopeId", "data-v-5a01561d"]]), Ha = ["value", "disabled"], qa = {
  key: 0,
  value: "",
  disabled: ""
}, Ka = ["value"], Ja = {
  key: 0,
  class: "base-select-error"
}, Ya = /* @__PURE__ */ q({
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
    return (r, h) => (o(), s("div", {
      class: te(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: te(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (g) => r.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (o(), s("option", qa, a(t.placeholder), 1)) : d("", !0),
        (o(!0), s(A, null, X(t.options, (g) => (o(), s("option", {
          key: u(g),
          value: u(g)
        }, a(n(g)), 9, Ka))), 128))
      ], 42, Ha),
      t.error ? (o(), s("span", Ja, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Qa = /* @__PURE__ */ K(Ya, [["__scopeId", "data-v-7436d745"]]), Xa = { class: "popover-header" }, Za = { class: "popover-title" }, el = { class: "popover-content" }, tl = {
  key: 0,
  class: "popover-actions"
}, ol = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), E(Me, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ze({ maxWidth: t.maxWidth }),
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
            ve(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", tl, [
            ve(u.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), at = /* @__PURE__ */ K(ol, [["__scopeId", "data-v-42815ace"]]), sl = { class: "detail-section" }, nl = {
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
}, bl = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: h, setModelImportance: g, installWorkflowDeps: m } = Re(), f = C(null), l = C(!1), c = C(null), w = C(!1), v = C({}), M = C({}), b = C(!1), P = C(/* @__PURE__ */ new Set()), _ = [
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
    function V(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const z = D.hash || D.filename;
      return P.value.has(z) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function T(D) {
      return P.value.has(D);
    }
    function R(D) {
      P.value.has(D) ? P.value.delete(D) : P.value.add(D), P.value = new Set(P.value);
    }
    async function H() {
      l.value = !0, c.value = null;
      try {
        f.value = await h(n.workflowName);
      } catch (D) {
        c.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function j(D, z) {
      v.value[D] = z, w.value = !0;
    }
    async function Y() {
      if (!w.value) {
        r("close");
        return;
      }
      l.value = !0, c.value = null;
      try {
        for (const [D, z] of Object.entries(v.value))
          await g(n.workflowName, D, z);
        r("refresh"), r("close");
      } catch (D) {
        c.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function W(D) {
      M.value[D] = !0, c.value = null;
      try {
        await m(n.workflowName, !0, !1), await H();
      } catch (z) {
        c.value = z instanceof Error ? z.message : "Failed to install node";
      } finally {
        M.value[D] = !1;
      }
    }
    return Ie(H), (D, z) => (o(), s(A, null, [
      p(et, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: c.value || void 0,
        onClose: z[5] || (z[5] = (O) => r("close"))
      }, {
        body: i(() => [
          f.value ? (o(), s(A, { key: 0 }, [
            e("section", sl, [
              p(It, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + a(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), s("div", nl, " No models used in this workflow ")) : d("", !0),
              (o(!0), s(A, null, X(f.value.models, (O) => (o(), s("div", {
                key: O.hash || O.filename,
                class: "model-card"
              }, [
                e("div", al, [
                  z[7] || (z[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", ll, a(O.filename), 1)
                ]),
                e("div", il, [
                  e("div", rl, [
                    z[8] || (z[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: te(["value", k(O.status)])
                    }, a($(O.status)), 3)
                  ]),
                  e("div", dl, [
                    e("span", cl, [
                      z[9] || (z[9] = y(" Importance: ", -1)),
                      p(ro, {
                        size: 14,
                        title: "About importance levels",
                        onClick: z[0] || (z[0] = (B) => b.value = !0)
                      })
                    ]),
                    p(Qa, {
                      "model-value": v.value[O.filename] || O.importance,
                      options: _,
                      "onUpdate:modelValue": (B) => j(O.filename, B)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  O.loaded_by && O.loaded_by.length > 0 ? (o(), s("div", ul, [
                    z[10] || (z[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ml, [
                      (o(!0), s(A, null, X(V(O), (B, ae) => (o(), s("div", {
                        key: `${B.node_id}-${ae}`,
                        class: "node-reference"
                      }, a(B.node_type) + " (Node #" + a(B.node_id) + ") ", 1))), 128)),
                      O.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (B) => R(O.hash || O.filename)
                      }, a(T(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, vl)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  O.size_mb ? (o(), s("div", fl, [
                    z[11] || (z[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", gl, a(O.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                O.status !== "available" ? (o(), s("div", hl, [
                  O.status === "downloadable" ? (o(), E(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: z[1] || (z[1] = (B) => r("resolve"))
                  }, {
                    default: i(() => [...z[12] || (z[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : O.status === "path_mismatch" ? (o(), E(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: z[2] || (z[2] = (B) => r("resolve"))
                  }, {
                    default: i(() => [...z[13] || (z[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), E(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: z[3] || (z[3] = (B) => r("resolve"))
                  }, {
                    default: i(() => [...z[14] || (z[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", pl, [
              p(It, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + a(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (o(), s("div", yl, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), s(A, null, X(f.value.nodes, (O) => (o(), s("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: te(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", wl, a(O.name), 1),
                O.version ? (o(), s("span", kl, "v" + a(O.version), 1)) : d("", !0),
                O.status === "missing" ? (o(), E(re, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: M.value[O.name],
                  onClick: (B) => W(O.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...z[15] || (z[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: i(() => [
          p(re, {
            variant: "secondary",
            onClick: z[4] || (z[4] = (O) => r("close"))
          }, {
            default: i(() => [...z[16] || (z[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (o(), E(re, {
            key: 0,
            variant: "primary",
            onClick: Y
          }, {
            default: i(() => [...z[17] || (z[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      p(at, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: z[6] || (z[6] = (O) => b.value = !1)
      }, {
        content: i(() => [...z[18] || (z[18] = [
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
}), _l = /* @__PURE__ */ K(bl, [["__scopeId", "data-v-0b14d32e"]]), pe = ao({
  items: [],
  status: "idle"
});
let Qe = null;
function mo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ft(t) {
  return pe.items.find((u) => u.id === t);
}
async function ht() {
  if (pe.status === "downloading") return;
  const t = pe.items.find((u) => u.status === "queued");
  if (!t) {
    pe.status = "idle";
    return;
  }
  pe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await $l(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    pe.status = "idle", ht();
  }
}
async function $l(t) {
  return new Promise((u, n) => {
    Qe && (Qe.close(), Qe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Qe = h;
    let g = Date.now(), m = 0, f = !1;
    h.onmessage = (l) => {
      try {
        const c = JSON.parse(l.data);
        switch (c.type) {
          case "progress":
            t.downloaded = c.downloaded || 0, t.size = c.total || t.size;
            const w = Date.now(), v = (w - g) / 1e3;
            if (v > 0.5) {
              const M = t.downloaded - m;
              if (t.speed = M / v, g = w, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f = !0, h.close(), Qe = null, u();
            break;
          case "error":
            f = !0, h.close(), Qe = null, n(new Error(c.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), Qe = null, f || n(new Error("Connection lost"));
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
      if (pe.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const r = {
        id: mo(),
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
      pe.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Rt() {
  function t(k) {
    for (const $ of k) {
      if (pe.items.some(
        (R) => R.url === $.url && R.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const T = {
        id: mo(),
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
      pe.items.push(T);
    }
    pe.status === "idle" && ht();
  }
  async function u(k) {
    const $ = Ft(k);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Qe && (Qe.close(), Qe = null), $.status = "failed", $.error = "Cancelled by user", pe.status = "idle", ht();
      } else if ($.status === "queued") {
        const V = pe.items.findIndex((T) => T.id === k);
        V >= 0 && pe.items.splice(V, 1);
      }
    }
  }
  function n(k) {
    const $ = Ft(k);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, pe.status === "idle" && ht());
  }
  function r(k) {
    const $ = Ft(k);
    !$ || $.status !== "paused" || ($.status = "queued", pe.status === "idle" && ht());
  }
  function h() {
    const k = pe.items.filter(($) => $.status === "paused");
    for (const $ of k)
      $.status = "queued";
    pe.status === "idle" && ht();
  }
  function g(k) {
    const $ = pe.items.findIndex((V) => V.id === k);
    $ >= 0 && ["completed", "failed", "paused"].includes(pe.items[$].status) && pe.items.splice($, 1);
  }
  function m() {
    pe.items = pe.items.filter((k) => k.status !== "completed");
  }
  function f() {
    pe.items = pe.items.filter((k) => k.status !== "failed");
  }
  const l = U(
    () => pe.items.find((k) => k.status === "downloading")
  ), c = U(
    () => pe.items.filter((k) => k.status === "queued")
  ), w = U(
    () => pe.items.filter((k) => k.status === "completed")
  ), v = U(
    () => pe.items.filter((k) => k.status === "failed")
  ), M = U(
    () => pe.items.filter((k) => k.status === "paused")
  ), b = U(() => pe.items.length > 0), P = U(
    () => pe.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), _ = U(
    () => pe.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: zo(pe),
    // Computed
    currentDownload: l,
    queuedItems: c,
    completedItems: w,
    failedItems: v,
    pausedItems: M,
    hasItems: b,
    activeCount: P,
    hasPaused: _,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: h,
    removeItem: g,
    clearCompleted: m,
    clearFailed: f,
    loadPendingDownloads: Cl
  };
}
function xl() {
  const t = C(null), u = C(null), n = C([]), r = C([]), h = C(!1), g = C(null);
  async function m(V, T) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(V, T);
    if (!R.ok) {
      const j = await R.json().catch(() => ({})), Y = j.error || j.message || `Request failed: ${R.status}`;
      throw new Error(Y);
    }
    return R.json();
  }
  async function f(V) {
    h.value = !0, g.value = null;
    try {
      let T;
      return _t() || (T = await m(
        `/v2/comfygit/workflow/${V}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const R = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = R, T;
    } finally {
      h.value = !1;
    }
  }
  async function l(V, T, R, H) {
    h.value = !0, g.value = null;
    try {
      let j;
      if (!_t()) {
        const Y = Object.fromEntries(T), W = Object.fromEntries(R), D = H ? Array.from(H) : [];
        j = await m(
          `/v2/comfygit/workflow/${V}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: Y,
              model_choices: W,
              skipped_packages: D
            })
          }
        );
      }
      return u.value = j, j;
    } catch (j) {
      const Y = j instanceof Error ? j.message : "Unknown error occurred";
      throw g.value = Y, j;
    } finally {
      h.value = !1;
    }
  }
  async function c(V, T = 10) {
    h.value = !0, g.value = null;
    try {
      let R;
      return _t() || (R = await m(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: T })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const H = R instanceof Error ? R.message : "Unknown error occurred";
      throw g.value = H, R;
    } finally {
      h.value = !1;
    }
  }
  async function w(V, T = 10) {
    h.value = !0, g.value = null;
    try {
      let R;
      return _t() || (R = await m(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: T })
        }
      )), r.value = R.results, R.results;
    } catch (R) {
      const H = R instanceof Error ? R.message : "Unknown error occurred";
      throw g.value = H, R;
    } finally {
      h.value = !1;
    }
  }
  const v = ao({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function M() {
    v.phase = "idle", v.currentFile = void 0, v.currentFileIndex = void 0, v.totalFiles = void 0, v.bytesDownloaded = void 0, v.bytesTotal = void 0, v.completedFiles = [], v.nodesToInstall = [], v.nodesInstalled = [], v.installError = void 0, v.needsRestart = void 0, v.error = void 0, v.nodeInstallProgress = void 0;
  }
  async function b(V) {
    v.phase = "installing", v.nodesInstalled = [], v.installError = void 0, v.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return _t(), await P(V);
    } catch (T) {
      const R = T instanceof Error ? T.message : "Failed to install nodes";
      throw v.installError = R, T;
    }
  }
  async function P(V) {
    var R;
    const T = await m(
      `/v2/comfygit/workflow/${V}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: v.nodesToInstall
        })
      }
    );
    if (v.nodeInstallProgress) {
      v.nodeInstallProgress.totalNodes = v.nodesToInstall.length;
      const H = new Map(((R = T.failed) == null ? void 0 : R.map((j) => [j.node_id, j.error])) || []);
      for (let j = 0; j < v.nodesToInstall.length; j++) {
        const Y = v.nodesToInstall[j], W = H.get(Y);
        v.nodeInstallProgress.completedNodes.push({
          node_id: Y,
          success: !W,
          error: W
        });
      }
    }
    return v.nodesInstalled = T.nodes_installed, v.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (v.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function _(V, T, R) {
    M(), v.phase = "resolving", g.value = null;
    const H = Object.fromEntries(T), j = Object.fromEntries(R);
    try {
      const Y = await fetch(`/v2/comfygit/workflow/${V}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: j
        })
      });
      if (!Y.ok)
        throw new Error(`Request failed: ${Y.status}`);
      if (!Y.body)
        throw new Error("No response body");
      const W = Y.body.getReader(), D = new TextDecoder();
      let z = "";
      for (; ; ) {
        const { done: O, value: B } = await W.read();
        if (O) break;
        z += D.decode(B, { stream: !0 });
        const ae = z.split(`

`);
        z = ae.pop() || "";
        for (const ie of ae) {
          if (!ie.trim()) continue;
          const Q = ie.split(`
`);
          let Z = "", N = "";
          for (const S of Q)
            S.startsWith("event: ") ? Z = S.slice(7) : S.startsWith("data: ") && (N = S.slice(6));
          if (N)
            try {
              const S = JSON.parse(N);
              k(Z, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (Y) {
      const W = Y instanceof Error ? Y.message : "Unknown error occurred";
      throw g.value = W, v.error = W, v.phase = "error", Y;
    }
  }
  function k(V, T) {
    switch (V) {
      case "batch_start":
        v.phase = "downloading", v.totalFiles = T.total;
        break;
      case "file_start":
        v.currentFile = T.filename, v.currentFileIndex = T.index, v.bytesDownloaded = 0, v.bytesTotal = void 0;
        break;
      case "file_progress":
        v.bytesDownloaded = T.downloaded, v.bytesTotal = T.total;
        break;
      case "file_complete":
        v.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        v.nodesToInstall = T.nodes_to_install || [], T.download_results && (v.completedFiles = T.download_results), v.phase = "complete";
        break;
      case "error":
        v.error = T.message, v.phase = "error", g.value = T.message;
        break;
    }
  }
  function $(V, T) {
    const { addToQueue: R } = Rt(), H = T.filter((j) => j.url && j.target_path).map((j) => ({
      workflow: V,
      filename: j.filename,
      url: j.url,
      targetPath: j.target_path,
      size: j.size || 0,
      type: "model"
    }));
    return H.length > 0 && R(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: h,
    error: g,
    progress: v,
    // Methods
    analyzeWorkflow: f,
    applyResolution: l,
    applyResolutionWithProgress: _,
    installNodes: b,
    searchNodes: c,
    searchModels: w,
    resetProgress: M,
    queueModelDownloads: $
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
}, Ll = { class: "stepper-content" }, Nl = /* @__PURE__ */ q({
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
    function h(c) {
      var w;
      if ((w = n.stepStats) != null && w[c]) {
        const v = n.stepStats[c];
        return v.total > 0 && v.resolved === v.total;
      }
      return n.completedSteps.includes(c);
    }
    function g(c) {
      var w;
      if ((w = n.stepStats) != null && w[c]) {
        const v = n.stepStats[c];
        return v.resolved > 0 && v.resolved < v.total;
      }
      return !1;
    }
    function m(c) {
      return h(c) ? "state-complete" : g(c) ? "state-partial" : "state-pending";
    }
    function f(c) {
      return !1;
    }
    function l(c) {
      r("step-change", c);
    }
    return (c, w) => (o(), s("div", Sl, [
      e("div", Il, [
        (o(!0), s(A, null, X(t.steps, (v, M) => (o(), s("div", {
          key: v.id,
          class: te(["step", {
            active: t.currentStep === v.id,
            completed: h(v.id),
            "in-progress": g(v.id),
            disabled: f(v.id)
          }]),
          onClick: (b) => l(v.id)
        }, [
          e("div", {
            class: te(["step-indicator", m(v.id)])
          }, [
            h(v.id) ? (o(), s("span", Ml, "✓")) : (o(), s("span", Rl, a(M + 1), 1))
          ], 2),
          e("div", Tl, a(v.label), 1),
          M < t.steps.length - 1 ? (o(), s("div", zl)) : d("", !0)
        ], 10, El))), 128))
      ]),
      e("div", Ll, [
        ve(c.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Dl = /* @__PURE__ */ K(Nl, [["__scopeId", "data-v-2a7b3af8"]]), Pl = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = U(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = U(() => `confidence-${n.value}`), h = U(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, m) => (o(), s("span", {
      class: te(["confidence-badge", r.value, t.size])
    }, a(h.value), 3));
  }
}), Jt = /* @__PURE__ */ K(Pl, [["__scopeId", "data-v-17ec4b80"]]), Ul = { class: "node-info" }, Ol = { class: "node-info-text" }, Bl = { class: "item-body" }, Al = {
  key: 0,
  class: "resolved-state"
}, Fl = {
  key: 1,
  class: "multiple-options"
}, Vl = { class: "options-list" }, Wl = ["onClick"], Gl = ["name", "value", "checked", "onChange"], jl = { class: "option-content" }, Hl = { class: "option-header" }, ql = { class: "option-package-id" }, Kl = {
  key: 0,
  class: "option-title"
}, Jl = { class: "option-meta" }, Yl = {
  key: 0,
  class: "installed-badge"
}, Ql = { class: "action-buttons" }, Xl = {
  key: 2,
  class: "unresolved"
}, Zl = { class: "action-buttons" }, ei = /* @__PURE__ */ q({
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
    const n = t, r = u, h = U(() => !!n.choice);
    U(() => {
      var f;
      return (f = n.choice) == null ? void 0 : f.action;
    }), U(() => {
      var f;
      return (f = n.choice) == null ? void 0 : f.package_id;
    });
    const g = U(() => {
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
    function m(f) {
      r("option-selected", f);
    }
    return (f, l) => (o(), s("div", {
      class: te(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", Ul, [
        e("span", Ol, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: te(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Bl, [
        h.value ? (o(), s("div", Al, [
          p(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (c) => r("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Fl, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Vl, [
            (o(!0), s(A, null, X(t.options, (c, w) => (o(), s("label", {
              key: c.package_id,
              class: te(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (v) => m(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (v) => m(w)
              }, null, 40, Gl),
              e("div", jl, [
                e("div", Hl, [
                  e("span", ql, a(c.package_id), 1),
                  p(Jt, {
                    confidence: c.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                c.title && c.title !== c.package_id ? (o(), s("div", Kl, a(c.title), 1)) : d("", !0),
                e("div", Jl, [
                  c.is_installed ? (o(), s("span", Yl, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Wl))), 128))
          ]),
          e("div", Ql, [
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (c) => r("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (c) => r("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (c) => r("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
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
            p(re, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (c) => r("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (c) => r("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (c) => r("mark-optional"))
            }, {
              default: i(() => [...l[15] || (l[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ti = /* @__PURE__ */ K(ei, [["__scopeId", "data-v-e02629e7"]]), oi = { class: "item-navigator" }, si = { class: "nav-item-info" }, ni = ["title"], ai = { class: "nav-controls" }, li = { class: "nav-arrows" }, ii = ["disabled"], ri = ["disabled"], di = { class: "nav-position" }, ci = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, h) => (o(), s("div", oi, [
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
            onClick: h[0] || (h[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, ii),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, ri)
        ]),
        e("span", di, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), vo = /* @__PURE__ */ K(ci, [["__scopeId", "data-v-74af7920"]]), ui = ["type", "value", "placeholder", "disabled"], mi = {
  key: 0,
  class: "base-input-error"
}, vi = /* @__PURE__ */ q({
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
      class: te(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: te(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = rt((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = rt((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ui),
      t.error ? (o(), s("span", mi, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ K(vi, [["__scopeId", "data-v-9ba02cdc"]]), fi = { class: "node-resolution-step" }, gi = {
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
}, Ni = ["onClick"], Di = { class: "node-result-header" }, Pi = { class: "node-result-package-id" }, Ui = {
  key: 0,
  class: "node-result-description"
}, Oi = {
  key: 1,
  class: "node-no-results"
}, Bi = {
  key: 2,
  class: "node-searching"
}, Ai = { class: "node-manual-entry-modal" }, Fi = { class: "node-modal-body" }, Vi = { class: "node-modal-actions" }, Wi = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = C(0), g = C(!1), m = C(!1), f = C(""), l = C(""), c = C([]), w = C(!1), v = U(() => n.nodes[h.value]), M = U(() => n.nodes.filter((ie) => n.nodeChoices.has(ie.node_type)).length), b = U(() => n.autoResolvedPackages.filter((ie) => !n.skippedPackages.has(ie.package_id)).length);
    function P(ie) {
      return n.skippedPackages.has(ie);
    }
    function _(ie) {
      r("package-skip", ie);
    }
    const k = U(() => {
      var Q;
      if (!v.value) return "not-found";
      const ie = n.nodeChoices.get(v.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Q = v.value.options) != null && Q.length ? "ambiguous" : "not-found";
    }), $ = U(() => {
      var Q;
      if (!v.value) return;
      const ie = n.nodeChoices.get(v.value.node_type);
      if (ie)
        switch (ie.action) {
          case "install":
            return ie.package_id ? `→ ${ie.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Q = v.value.options) != null && Q.length ? `${v.value.options.length} matches` : "Not Found";
    });
    function V(ie) {
      ie >= 0 && ie < n.nodes.length && (h.value = ie);
    }
    function T() {
      v.value && r("mark-optional", v.value.node_type);
    }
    function R() {
      v.value && r("skip", v.value.node_type);
    }
    function H(ie) {
      v.value && r("option-selected", v.value.node_type, ie);
    }
    function j() {
      v.value && r("clear-choice", v.value.node_type);
    }
    function Y() {
      v.value && (f.value = v.value.node_type, g.value = !0);
    }
    function W() {
      l.value = "", m.value = !0;
    }
    function D() {
      g.value = !1, f.value = "", c.value = [];
    }
    function z() {
      m.value = !1, l.value = "";
    }
    function O() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function B(ie) {
      v.value && (r("manual-entry", v.value.node_type, ie.package_id), D());
    }
    function ae() {
      !v.value || !l.value.trim() || (r("manual-entry", v.value.node_type, l.value.trim()), z());
    }
    return (ie, Q) => {
      var Z, N;
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
            (o(!0), s(A, null, X(t.autoResolvedPackages, (S) => (o(), s("div", {
              key: S.package_id,
              class: "resolved-package-item"
            }, [
              e("div", wi, [
                e("code", ki, a(S.package_id), 1),
                e("span", bi, a(S.node_types_count) + " node type" + a(S.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", _i, [
                P(S.package_id) ? (o(), s("span", Ci, " SKIPPED ")) : (o(), s("span", $i, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ne) => _(S.package_id)
                }, a(P(S.package_id) ? "Include" : "Skip"), 9, xi)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", Si)) : d("", !0),
        t.nodes.length > 0 ? (o(), s(A, { key: 2 }, [
          e("div", Ii, [
            Q[5] || (Q[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ei, a(M.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          v.value ? (o(), E(vo, {
            key: 0,
            "item-name": v.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: Q[0] || (Q[0] = (S) => V(h.value - 1)),
            onNext: Q[1] || (Q[1] = (S) => V(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          v.value ? (o(), s("div", Mi, [
            p(ti, {
              "node-type": v.value.node_type,
              "has-multiple-options": !!((Z = v.value.options) != null && Z.length),
              options: v.value.options,
              choice: (N = t.nodeChoices) == null ? void 0 : N.get(v.value.node_type),
              status: k.value,
              "status-label": $.value,
              onMarkOptional: T,
              onSkip: R,
              onManualEntry: W,
              onSearch: Y,
              onOptionSelected: H,
              onClearChoice: j
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", Ri, [...Q[6] || (Q[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (o(), E(Me, { to: "body" }, [
          g.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(D, ["self"])
          }, [
            e("div", Ti, [
              e("div", { class: "node-modal-header" }, [
                Q[7] || (Q[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", zi, [
                p(qe, {
                  modelValue: f.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (S) => f.value = S),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                c.value.length > 0 ? (o(), s("div", Li, [
                  (o(!0), s(A, null, X(c.value, (S) => (o(), s("div", {
                    key: S.package_id,
                    class: "node-search-result-item",
                    onClick: (ne) => B(S)
                  }, [
                    e("div", Di, [
                      e("code", Pi, a(S.package_id), 1),
                      S.match_confidence ? (o(), E(Jt, {
                        key: 0,
                        confidence: S.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    S.description ? (o(), s("div", Ui, a(S.description), 1)) : d("", !0)
                  ], 8, Ni))), 128))
                ])) : f.value && !w.value ? (o(), s("div", Oi, ' No packages found matching "' + a(f.value) + '" ', 1)) : d("", !0),
                w.value ? (o(), s("div", Bi, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), E(Me, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(z, ["self"])
          }, [
            e("div", Ai, [
              e("div", { class: "node-modal-header" }, [
                Q[8] || (Q[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Fi, [
                p(qe, {
                  modelValue: l.value,
                  "onUpdate:modelValue": Q[3] || (Q[3] = (S) => l.value = S),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Vi, [
                  p(re, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: i(() => [...Q[9] || (Q[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(re, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: ae
                  }, {
                    default: i(() => [...Q[10] || (Q[10] = [
                      y(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), Gi = /* @__PURE__ */ K(Wi, [["__scopeId", "data-v-6474069a"]]), ji = { class: "node-info" }, Hi = { class: "node-info-text" }, qi = { class: "item-body" }, Ki = {
  key: 0,
  class: "resolved-state"
}, Ji = {
  key: 1,
  class: "multiple-options"
}, Yi = { class: "options-list" }, Qi = ["onClick"], Xi = ["name", "value", "checked", "onChange"], Zi = { class: "option-content" }, er = { class: "option-header" }, tr = { class: "option-filename" }, or = { class: "option-meta" }, sr = { class: "option-size" }, nr = { class: "option-category" }, ar = { class: "option-path" }, lr = { class: "action-buttons" }, ir = {
  key: 2,
  class: "unresolved"
}, rr = { class: "action-buttons" }, dr = /* @__PURE__ */ q({
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
    const n = t, r = u, h = U(() => !!n.choice);
    U(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), U(() => {
      var l, c;
      return ((c = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : c.filename) || "selected";
    });
    const g = U(() => {
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
    function m(l) {
      r("option-selected", l);
    }
    function f(l) {
      if (!l) return "Unknown";
      const c = l / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, c) => (o(), s("div", {
      class: te(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", ji, [
        e("span", Hi, [
          c[7] || (c[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: te(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", qi, [
        h.value ? (o(), s("div", Ki, [
          p(re, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (w) => r("clear-choice"))
          }, {
            default: i(() => [...c[8] || (c[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ji, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Yi, [
            (o(!0), s(A, null, X(t.options, (w, v) => (o(), s("label", {
              key: w.model.hash,
              class: te(["option-card", { selected: t.selectedOptionIndex === v }]),
              onClick: (M) => m(v)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: v,
                checked: t.selectedOptionIndex === v,
                onChange: (M) => m(v)
              }, null, 40, Xi),
              e("div", Zi, [
                e("div", er, [
                  e("span", tr, a(w.model.filename), 1),
                  p(Jt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", or, [
                  e("span", sr, a(f(w.model.size)), 1),
                  e("span", nr, a(w.model.category), 1)
                ]),
                e("div", ar, a(w.model.relative_path), 1)
              ])
            ], 10, Qi))), 128))
          ]),
          e("div", lr, [
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: c[1] || (c[1] = (w) => r("search"))
            }, {
              default: i(() => [...c[9] || (c[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "ghost",
              size: "sm",
              onClick: c[2] || (c[2] = (w) => r("download-url"))
            }, {
              default: i(() => [...c[10] || (c[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (w) => r("mark-optional"))
            }, {
              default: i(() => [...c[11] || (c[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", ir, [
          c[16] || (c[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", rr, [
            p(re, {
              variant: "primary",
              size: "sm",
              onClick: c[4] || (c[4] = (w) => r("search"))
            }, {
              default: i(() => [...c[13] || (c[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (w) => r("download-url"))
            }, {
              default: i(() => [...c[14] || (c[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (w) => r("mark-optional"))
            }, {
              default: i(() => [...c[15] || (c[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), cr = /* @__PURE__ */ K(dr, [["__scopeId", "data-v-8a82fefa"]]), ur = { class: "model-resolution-step" }, mr = { class: "step-header" }, vr = { class: "step-info" }, fr = { class: "step-title" }, gr = { class: "step-description" }, hr = { class: "stat-badge" }, pr = {
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
}, Tr = { class: "model-download-url-modal" }, zr = { class: "model-modal-body" }, Lr = { class: "model-input-group" }, Nr = { class: "model-input-group" }, Dr = { class: "model-modal-actions" }, Pr = /* @__PURE__ */ q({
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
    function r(N) {
      var S;
      return N && ((S = n[N]) == null ? void 0 : S[0]) || null;
    }
    const h = t, g = u, m = C(0), f = C(!1), l = C(!1), c = C(""), w = C(""), v = C(""), M = C([]), b = C(!1), P = U(() => h.models[m.value]), _ = U(() => h.models.some((N) => N.is_download_intent)), k = U(() => h.models.filter(
      (N) => h.modelChoices.has(N.filename) || N.is_download_intent
    ).length), $ = U(() => {
      var S;
      if (!P.value) return "";
      const N = r((S = P.value.reference) == null ? void 0 : S.node_type);
      return N ? `${N}/${P.value.filename}` : "";
    }), V = U(() => {
      var S;
      if (!P.value) return "not-found";
      const N = h.modelChoices.get(P.value.filename);
      if (N)
        switch (N.action) {
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
      return P.value.is_download_intent ? "download" : (S = P.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), T = U(() => {
      var S, ne;
      if (!P.value) return;
      const N = h.modelChoices.get(P.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (S = N.selected_model) != null && S.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return P.value.is_download_intent ? "Pending Download" : (ne = P.value.options) != null && ne.length ? `${P.value.options.length} matches` : "Not Found";
    });
    function R(N) {
      N >= 0 && N < h.models.length && (m.value = N);
    }
    function H() {
      P.value && g("mark-optional", P.value.filename);
    }
    function j() {
      P.value && g("skip", P.value.filename);
    }
    function Y(N) {
      P.value && g("option-selected", P.value.filename, N);
    }
    function W() {
      P.value && g("clear-choice", P.value.filename);
    }
    function D() {
      P.value && (c.value = P.value.filename, f.value = !0);
    }
    function z() {
      P.value && (w.value = P.value.download_source || "", v.value = P.value.target_path || $.value, l.value = !0);
    }
    function O() {
      f.value = !1, c.value = "", M.value = [];
    }
    function B() {
      l.value = !1, w.value = "", v.value = "";
    }
    function ae() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function ie(N) {
      P.value && O();
    }
    function Q() {
      !P.value || !w.value.trim() || (g("download-url", P.value.filename, w.value.trim(), v.value.trim() || void 0), B());
    }
    function Z(N) {
      if (!N) return "Unknown";
      const S = N / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, S) => {
      var ne, ee, _e;
      return o(), s("div", ur, [
        e("div", mr, [
          e("div", vr, [
            e("h3", fr, a(_.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", gr, a(_.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", hr, a(k.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        P.value ? (o(), E(vo, {
          key: 0,
          "item-name": P.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (ye) => R(m.value - 1)),
          onNext: S[1] || (S[1] = (ye) => R(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        P.value ? (o(), s("div", pr, [
          p(cr, {
            filename: P.value.filename,
            "node-type": ((ne = P.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((ee = P.value.options) != null && ee.length),
            options: P.value.options,
            choice: (_e = t.modelChoices) == null ? void 0 : _e.get(P.value.filename),
            status: V.value,
            "status-label": T.value,
            onMarkOptional: H,
            onSkip: j,
            onDownloadUrl: z,
            onSearch: D,
            onOptionSelected: Y,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", yr, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), E(Me, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(O, ["self"])
          }, [
            e("div", wr, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", kr, [
                p(qe, {
                  modelValue: c.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (ye) => c.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                M.value.length > 0 ? (o(), s("div", br, [
                  (o(!0), s(A, null, X(M.value, (ye) => (o(), s("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ie()
                  }, [
                    e("div", $r, [
                      e("code", Cr, a(ye.filename), 1)
                    ]),
                    e("div", xr, [
                      e("span", Sr, a(ye.category), 1),
                      e("span", Ir, a(Z(ye.size)), 1)
                    ]),
                    ye.relative_path ? (o(), s("div", Er, a(ye.relative_path), 1)) : d("", !0)
                  ], 8, _r))), 128))
                ])) : c.value && !b.value ? (o(), s("div", Mr, ' No models found matching "' + a(c.value) + '" ', 1)) : d("", !0),
                b.value ? (o(), s("div", Rr, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), E(Me, { to: "body" }, [
          l.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(B, ["self"])
          }, [
            e("div", Tr, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", zr, [
                e("div", Lr, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  p(qe, {
                    modelValue: w.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (ye) => w.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Nr, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  p(qe, {
                    modelValue: v.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (ye) => v.value = ye),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Dr, [
                  p(re, {
                    variant: "secondary",
                    onClick: B
                  }, {
                    default: i(() => [...S[10] || (S[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(re, {
                    variant: "primary",
                    disabled: !w.value.trim() || !v.value.trim(),
                    onClick: Q
                  }, {
                    default: i(() => [...S[11] || (S[11] = [
                      y(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), Ur = /* @__PURE__ */ K(Pr, [["__scopeId", "data-v-c6acbada"]]), Or = { class: "applying-step" }, Br = {
  key: 0,
  class: "phase-content"
}, Ar = {
  key: 1,
  class: "phase-content"
}, Fr = { class: "phase-description" }, Vr = { class: "overall-progress" }, Wr = { class: "progress-bar" }, Gr = { class: "progress-label" }, jr = { class: "install-list" }, Hr = { class: "install-icon" }, qr = { key: 0 }, Kr = {
  key: 1,
  class: "spinner"
}, Jr = { key: 2 }, Yr = { key: 3 }, Qr = {
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
}, md = { class: "error-message" }, vd = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = U(() => {
      var c, w;
      const f = ((c = u.progress.nodeInstallProgress) == null ? void 0 : c.totalNodes) || u.progress.nodesToInstall.length;
      if (!f) return 0;
      const l = ((w = u.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(l / f * 100);
    }), r = U(() => {
      var f;
      return ((f = u.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.filter((l) => !l.success)) || [];
    }), h = U(() => r.value.length > 0);
    function g(f, l) {
      var w, v;
      const c = (w = u.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((M) => M.node_id === f);
      return c ? c.success ? "complete" : "failed" : ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) === l ? "installing" : "pending";
    }
    function m(f) {
      var l, c;
      return (c = (l = u.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((w) => w.node_id === f)) == null ? void 0 : c.error;
    }
    return (f, l) => {
      var c, w, v, M;
      return o(), s("div", Or, [
        t.progress.phase === "resolving" ? (o(), s("div", Br, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Ar, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Fr, " Installing " + a((((c = t.progress.nodeInstallProgress) == null ? void 0 : c.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Vr, [
            e("div", Wr, [
              e("div", {
                class: "progress-fill",
                style: Ze({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Gr, a(((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0) + " / " + a(((M = t.progress.nodeInstallProgress) == null ? void 0 : M.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", jr, [
            (o(!0), s(A, null, X(t.progress.nodesToInstall, (b, P) => (o(), s("div", {
              key: b,
              class: te(["install-item", g(b, P)])
            }, [
              e("span", Hr, [
                g(b, P) === "pending" ? (o(), s("span", qr, "○")) : g(b, P) === "installing" ? (o(), s("span", Kr, "◌")) : g(b, P) === "complete" ? (o(), s("span", Jr, "✓")) : g(b, P) === "failed" ? (o(), s("span", Yr, "✗")) : d("", !0)
              ]),
              e("code", null, a(b), 1),
              m(b) ? (o(), s("span", Qr, a(m(b)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Xr, [
          e("div", Zr, [
            e("span", {
              class: te(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", ed, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", td, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", od, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", sd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("div", nd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", ad, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("div", ld, [
              (o(!0), s(A, null, X(r.value, (b) => (o(), s("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", id, a(b.node_id), 1),
                e("span", rd, a(b.error), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (b) => f.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : d("", !0),
            h.value ? d("", !0) : (o(), s("div", dd, [...l[6] || (l[6] = [
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
                onClick: l[1] || (l[1] = (b) => f.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", ud, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", md, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), fd = /* @__PURE__ */ K(vd, [["__scopeId", "data-v-5efaae58"]]), gd = {
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
}, Td = { class: "stat-count" }, zd = { class: "stat-card" }, Ld = { class: "stat-items" }, Nd = { class: "stat-item success" }, Dd = { class: "stat-count" }, Pd = {
  key: 0,
  class: "stat-item info"
}, Ud = { class: "stat-count" }, Od = {
  key: 1,
  class: "stat-item warning"
}, Bd = { class: "stat-count" }, Ad = {
  key: 2,
  class: "stat-item error"
}, Fd = { class: "stat-count" }, Vd = {
  key: 0,
  class: "status-message warning"
}, Wd = { class: "status-text" }, Gd = {
  key: 1,
  class: "status-message info"
}, jd = { class: "status-text" }, Hd = {
  key: 2,
  class: "status-message info"
}, qd = { class: "status-text" }, Kd = {
  key: 3,
  class: "status-message success"
}, Jd = {
  key: 3,
  class: "step-content"
}, Yd = { class: "review-summary" }, Qd = { class: "review-stats" }, Xd = { class: "review-stat" }, Zd = { class: "stat-value" }, ec = { class: "review-stat" }, tc = { class: "stat-value" }, oc = { class: "review-stat" }, sc = { class: "stat-value" }, nc = { class: "review-stat" }, ac = { class: "stat-value" }, lc = {
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
}, Nc = {
  key: 3,
  class: "no-choices"
}, Dc = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: h, applyResolution: g, installNodes: m, queueModelDownloads: f, progress: l, resetProgress: c } = xl(), { loadPendingDownloads: w } = Rt(), v = C(null), M = C(!1), b = C(!1), P = C(null), _ = C("analysis"), k = C([]), $ = C(/* @__PURE__ */ new Map()), V = C(/* @__PURE__ */ new Map()), T = C(/* @__PURE__ */ new Set()), R = U(() => {
      const x = [
        { id: "analysis", label: "Analysis" }
      ];
      return (j.value || D.value) && x.push({ id: "nodes", label: "Nodes" }), (Y.value || W.value) && x.push({ id: "models", label: "Models" }), x.push({ id: "review", label: "Review" }), _.value === "applying" && x.push({ id: "applying", label: "Applying" }), x;
    }), H = U(() => v.value ? v.value.stats.needs_user_input : !1), j = U(() => v.value ? v.value.nodes.unresolved.length > 0 || v.value.nodes.ambiguous.length > 0 : !1), Y = U(() => v.value ? v.value.models.unresolved.length > 0 || v.value.models.ambiguous.length > 0 : !1), W = U(() => v.value ? v.value.stats.download_intents > 0 : !1), D = U(() => v.value ? v.value.stats.nodes_needing_installation > 0 : !1), z = U(() => v.value ? v.value.nodes.resolved.length : 0), O = U(() => {
      if (!v.value) return [];
      const x = v.value.nodes.resolved.filter((F) => !F.is_installed), I = /* @__PURE__ */ new Set();
      return x.filter((F) => I.has(F.package.package_id) ? !1 : (I.add(F.package.package_id), !0));
    }), B = U(() => {
      if (!v.value) return [];
      const x = v.value.nodes.resolved.filter((F) => !F.is_installed), I = /* @__PURE__ */ new Map();
      for (const F of x) {
        const de = I.get(F.package.package_id);
        de ? de.node_types_count++ : I.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(I.values());
    }), ae = U(() => O.value.filter((x) => !T.value.has(x.package.package_id))), ie = U(() => v.value ? v.value.models.resolved.filter((x) => x.match_type === "download_intent").map((x) => ({
      filename: x.reference.widget_value,
      reference: x.reference,
      is_download_intent: !0,
      resolved_model: x.model,
      download_source: x.download_source,
      target_path: x.target_path
    })) : []), Q = U(() => {
      if (!v.value) return [];
      const x = v.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), I = v.value.nodes.ambiguous.map((F) => ({
        node_type: F.reference.node_type,
        has_multiple_options: !0,
        options: F.options.map((de) => ({
          package_id: de.package.package_id,
          title: de.package.title,
          match_confidence: de.match_confidence,
          match_type: de.match_type,
          is_installed: de.is_installed
        }))
      }));
      return [...x, ...I];
    }), Z = U(() => {
      if (!v.value) return [];
      const x = v.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), I = v.value.models.ambiguous.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        has_multiple_options: !0,
        options: F.options.map((de) => ({
          model: de.model,
          match_confidence: de.match_confidence,
          match_type: de.match_type,
          has_download_source: de.has_download_source
        }))
      }));
      return [...x, ...I];
    }), N = U(() => {
      const x = Z.value, I = ie.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...x, ...I];
    }), S = U(() => {
      let x = ae.value.length;
      for (const I of $.value.values())
        I.action === "install" && x++;
      for (const I of V.value.values())
        I.action === "select" && x++;
      return x;
    }), ne = U(() => {
      let x = 0;
      for (const I of V.value.values())
        I.action === "download" && x++;
      return x;
    }), ee = U(() => {
      let x = 0;
      for (const I of $.value.values())
        I.action === "optional" && x++;
      for (const I of V.value.values())
        I.action === "optional" && x++;
      return x;
    }), _e = U(() => {
      let x = T.value.size;
      for (const I of $.value.values())
        I.action === "skip" && x++;
      for (const I of V.value.values())
        I.action === "skip" && x++;
      for (const I of Q.value)
        $.value.has(I.node_type) || x++;
      for (const I of Z.value)
        V.value.has(I.filename) || x++;
      return x;
    }), ye = U(() => {
      const x = {};
      if (x.analysis = { resolved: 1, total: 1 }, j.value) {
        const I = Q.value.length, F = Q.value.filter(
          (de) => $.value.has(de.node_type)
        ).length;
        x.nodes = { resolved: F, total: I };
      }
      if (Y.value || W.value) {
        const I = N.value.length, F = N.value.filter(
          (de) => V.value.has(de.filename) || de.is_download_intent
        ).length;
        x.models = { resolved: F, total: I };
      }
      if (x.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const I = l.totalFiles || 1, F = l.completedFiles.length;
        x.applying = { resolved: F, total: I };
      }
      return x;
    });
    function Te(x) {
      _.value = x;
    }
    function be() {
      const x = R.value.findIndex((I) => I.id === _.value);
      x > 0 && (_.value = R.value[x - 1].id);
    }
    function me() {
      const x = R.value.findIndex((I) => I.id === _.value);
      x < R.value.length - 1 && (_.value = R.value[x + 1].id);
    }
    async function ze() {
      M.value = !0, P.value = null;
      try {
        v.value = await h(n.workflowName);
      } catch (x) {
        P.value = x instanceof Error ? x.message : "Failed to analyze workflow";
      } finally {
        M.value = !1;
      }
    }
    function he() {
      k.value.includes("analysis") || k.value.push("analysis"), j.value || D.value ? _.value = "nodes" : Y.value || W.value ? _.value = "models" : _.value = "review";
    }
    function Fe(x) {
      $.value.set(x, { action: "optional" });
    }
    function Je(x) {
      $.value.set(x, { action: "skip" });
    }
    function We(x, I) {
      var de;
      const F = Q.value.find((Ce) => Ce.node_type === x);
      (de = F == null ? void 0 : F.options) != null && de[I] && $.value.set(x, {
        action: "install",
        package_id: F.options[I].package_id
      });
    }
    function fe(x, I) {
      $.value.set(x, {
        action: "install",
        package_id: I
      });
    }
    function Ge(x) {
      $.value.delete(x);
    }
    function je(x) {
      T.value.has(x) ? T.value.delete(x) : T.value.add(x);
    }
    function Ve(x) {
      V.value.set(x, { action: "optional" });
    }
    function dt(x) {
      V.value.set(x, { action: "skip" });
    }
    function ue(x, I) {
      var de;
      const F = Z.value.find((Ce) => Ce.filename === x);
      (de = F == null ? void 0 : F.options) != null && de[I] && V.value.set(x, {
        action: "select",
        selected_model: F.options[I].model
      });
    }
    function Ne(x, I, F) {
      V.value.set(x, {
        action: "download",
        url: I,
        target_path: F
      });
    }
    function ct(x) {
      V.value.delete(x);
    }
    async function tt() {
      var x;
      b.value = !0, P.value = null, c(), l.phase = "resolving", _.value = "applying";
      try {
        const I = await g(n.workflowName, $.value, V.value, T.value);
        I.models_to_download && I.models_to_download.length > 0 && f(n.workflowName, I.models_to_download);
        const F = [
          ...I.nodes_to_install || [],
          ...ae.value.map((Ce) => Ce.package.package_id)
        ];
        l.nodesToInstall = [...new Set(F)], l.nodesToInstall.length > 0 && await m(n.workflowName), l.phase = "complete", await w();
        const de = l.installError || ((x = l.nodeInstallProgress) == null ? void 0 : x.completedNodes.some((Ce) => !Ce.success));
        !l.needsRestart && !de && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (I) {
        P.value = I instanceof Error ? I.message : "Failed to apply resolution", l.error = P.value, l.phase = "error";
      } finally {
        b.value = !1;
      }
    }
    function Se() {
      r("refresh"), r("restart"), r("close");
    }
    async function ut() {
      var I;
      const x = ((I = l.nodeInstallProgress) == null ? void 0 : I.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
      if (x.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: x.length
        }, l.nodesToInstall = x, l.nodesInstalled = [], l.installError = void 0;
        try {
          await m(n.workflowName), l.phase = "complete";
        } catch (F) {
          l.error = F instanceof Error ? F.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ie(ze), (x, I) => (o(), E(et, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: M.value,
      error: P.value || void 0,
      "fixed-height": !0,
      onClose: I[1] || (I[1] = (F) => r("close"))
    }, {
      body: i(() => [
        M.value && !v.value ? (o(), s("div", gd, [...I[2] || (I[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : v.value ? (o(), s("div", hd, [
          p(Dl, {
            steps: R.value,
            "current-step": _.value,
            "completed-steps": k.value,
            "step-stats": ye.value,
            onStepChange: Te
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), s("div", pd, [
            e("div", yd, [
              e("div", wd, [
                I[3] || (I[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", kd, " Found " + a(v.value.stats.total_nodes) + " nodes and " + a(v.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", bd, [
                e("div", _d, [
                  I[12] || (I[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", $d, [
                    z.value > 0 ? (o(), s("div", Cd, [
                      I[4] || (I[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", xd, a(z.value), 1),
                      I[5] || (I[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    v.value.stats.packages_needing_installation > 0 ? (o(), s("div", Sd, [
                      I[6] || (I[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Id, a(v.value.stats.packages_needing_installation), 1),
                      I[7] || (I[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    v.value.nodes.ambiguous.length > 0 ? (o(), s("div", Ed, [
                      I[8] || (I[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Md, a(v.value.nodes.ambiguous.length), 1),
                      I[9] || (I[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    v.value.nodes.unresolved.length > 0 ? (o(), s("div", Rd, [
                      I[10] || (I[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Td, a(v.value.nodes.unresolved.length), 1),
                      I[11] || (I[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", zd, [
                  I[21] || (I[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ld, [
                    e("div", Nd, [
                      I[13] || (I[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Dd, a(v.value.models.resolved.length - v.value.stats.download_intents), 1),
                      I[14] || (I[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.stats.download_intents > 0 ? (o(), s("div", Pd, [
                      I[15] || (I[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ud, a(v.value.stats.download_intents), 1),
                      I[16] || (I[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    v.value.models.ambiguous.length > 0 ? (o(), s("div", Od, [
                      I[17] || (I[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bd, a(v.value.models.ambiguous.length), 1),
                      I[18] || (I[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    v.value.models.unresolved.length > 0 ? (o(), s("div", Ad, [
                      I[19] || (I[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fd, a(v.value.models.unresolved.length), 1),
                      I[20] || (I[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", Vd, [
                I[22] || (I[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wd, a(Q.value.length + Z.value.length) + " items need your input", 1)
              ])) : D.value ? (o(), s("div", Gd, [
                I[23] || (I[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jd, a(v.value.stats.packages_needing_installation) + " package" + a(v.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(v.value.stats.nodes_needing_installation) + " node type" + a(v.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(W.value ? `, ${v.value.stats.download_intents} model${v.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : W.value ? (o(), s("div", Hd, [
                I[24] || (I[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", qd, a(v.value.stats.download_intents) + " model" + a(v.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Kd, [...I[25] || (I[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : d("", !0),
          _.value === "nodes" ? (o(), E(Gi, {
            key: 1,
            nodes: Q.value,
            "node-choices": $.value,
            "auto-resolved-packages": B.value,
            "skipped-packages": T.value,
            onMarkOptional: Fe,
            onSkip: Je,
            onOptionSelected: We,
            onManualEntry: fe,
            onClearChoice: Ge,
            onPackageSkip: je
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          _.value === "models" ? (o(), E(Ur, {
            key: 2,
            models: N.value,
            "model-choices": V.value,
            onMarkOptional: Ve,
            onSkip: dt,
            onOptionSelected: ue,
            onDownloadUrl: Ne,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          _.value === "review" ? (o(), s("div", Jd, [
            e("div", Yd, [
              I[30] || (I[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Qd, [
                e("div", Xd, [
                  e("span", Zd, a(S.value), 1),
                  I[26] || (I[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", ec, [
                  e("span", tc, a(ne.value), 1),
                  I[27] || (I[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", oc, [
                  e("span", sc, a(ee.value), 1),
                  I[28] || (I[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", nc, [
                  e("span", ac, a(_e.value), 1),
                  I[29] || (I[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              B.value.length > 0 ? (o(), s("div", lc, [
                e("h4", ic, "Node Packages (" + a(B.value.length) + ")", 1),
                e("div", rc, [
                  (o(!0), s(A, null, X(B.value, (F) => (o(), s("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", dc, a(F.package_id), 1),
                    e("div", cc, [
                      T.value.has(F.package_id) ? (o(), s("span", mc, "Skipped")) : (o(), s("span", uc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              Q.value.length > 0 ? (o(), s("div", vc, [
                e("h4", fc, "Node Choices (" + a(Q.value.length) + ")", 1),
                e("div", gc, [
                  (o(!0), s(A, null, X(Q.value, (F) => {
                    var de, Ce, se, oe;
                    return o(), s("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", hc, a(F.node_type), 1),
                      e("div", pc, [
                        $.value.has(F.node_type) ? (o(), s(A, { key: 0 }, [
                          ((de = $.value.get(F.node_type)) == null ? void 0 : de.action) === "install" ? (o(), s("span", yc, a((Ce = $.value.get(F.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((se = $.value.get(F.node_type)) == null ? void 0 : se.action) === "optional" ? (o(), s("span", wc, " Optional ")) : ((oe = $.value.get(F.node_type)) == null ? void 0 : oe.action) === "skip" ? (o(), s("span", kc, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", bc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              N.value.length > 0 ? (o(), s("div", _c, [
                e("h4", $c, "Models (" + a(N.value.length) + ")", 1),
                e("div", Cc, [
                  (o(!0), s(A, null, X(N.value, (F) => {
                    var de, Ce, se, oe, Ee, ot, Tt;
                    return o(), s("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", xc, a(F.filename), 1),
                      e("div", Sc, [
                        V.value.has(F.filename) ? (o(), s(A, { key: 0 }, [
                          ((de = V.value.get(F.filename)) == null ? void 0 : de.action) === "select" ? (o(), s("span", Ic, a((se = (Ce = V.value.get(F.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : se.filename), 1)) : ((oe = V.value.get(F.filename)) == null ? void 0 : oe.action) === "download" ? (o(), s("span", Ec, " Download ")) : ((Ee = V.value.get(F.filename)) == null ? void 0 : Ee.action) === "optional" ? (o(), s("span", Mc, " Optional ")) : ((ot = V.value.get(F.filename)) == null ? void 0 : ot.action) === "skip" ? (o(), s("span", Rc, " Skip ")) : ((Tt = V.value.get(F.filename)) == null ? void 0 : Tt.action) === "cancel_download" ? (o(), s("span", Tc, " Cancel Download ")) : d("", !0)
                        ], 64)) : F.is_download_intent ? (o(), s("span", zc, " Pending Download ")) : (o(), s("span", Lc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              O.value.length === 0 && Q.value.length === 0 && N.value.length === 0 ? (o(), s("div", Nc, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          _.value === "applying" ? (o(), E(fd, {
            key: 4,
            progress: ge(l),
            onRestart: Se,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), E(re, {
          key: 0,
          variant: "secondary",
          disabled: b.value,
          onClick: be
        }, {
          default: i(() => [...I[31] || (I[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        I[35] || (I[35] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || ge(l).phase === "complete" || ge(l).phase === "error" ? (o(), E(re, {
          key: 1,
          variant: "secondary",
          onClick: I[0] || (I[0] = (F) => r("close"))
        }, {
          default: i(() => [
            y(a(ge(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        _.value === "analysis" ? (o(), E(re, {
          key: 2,
          variant: "primary",
          disabled: M.value,
          onClick: he
        }, {
          default: i(() => [...I[32] || (I[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        _.value === "nodes" ? (o(), E(re, {
          key: 3,
          variant: "primary",
          onClick: me
        }, {
          default: i(() => [
            y(a(Y.value || W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        _.value === "models" ? (o(), E(re, {
          key: 4,
          variant: "primary",
          onClick: me
        }, {
          default: i(() => [...I[33] || (I[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        _.value === "review" ? (o(), E(re, {
          key: 5,
          variant: "primary",
          disabled: b.value,
          loading: b.value,
          onClick: tt
        }, {
          default: i(() => [...I[34] || (I[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Pc = /* @__PURE__ */ K(Dc, [["__scopeId", "data-v-0d3f93e6"]]), Uc = { class: "search-input-wrapper" }, Oc = ["value", "placeholder"], Bc = /* @__PURE__ */ q({
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
    const n = t, r = u, h = C(null);
    let g;
    function m(l) {
      const c = l.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        r("update:modelValue", c);
      }, n.debounce)) : r("update:modelValue", c);
    }
    function f() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = h.value) == null || l.focus();
    }
    return Ie(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, c) => (o(), s("div", Uc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: rt(f, ["escape"])
      }, null, 40, Oc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Ac = /* @__PURE__ */ K(Bc, [["__scopeId", "data-v-266f857a"]]), Fc = { class: "search-bar" }, Vc = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", Fc, [
      p(Ac, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), kt = /* @__PURE__ */ K(Vc, [["__scopeId", "data-v-3d51bbfd"]]), Wc = { class: "section-group" }, Gc = {
  key: 0,
  class: "section-content"
}, jc = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = C(n.initiallyExpanded);
    function g() {
      n.collapsible && (h.value = !h.value, r("toggle", h.value));
    }
    return (m, f) => (o(), s("section", Wc, [
      p(Ae, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: g
      }, {
        default: i(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (o(), s("div", Gc, [
        ve(m.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), xe = /* @__PURE__ */ K(jc, [["__scopeId", "data-v-c48e33ed"]]), Hc = { class: "item-header" }, qc = {
  key: 0,
  class: "item-icon"
}, Kc = { class: "item-info" }, Jc = {
  key: 0,
  class: "item-title"
}, Yc = {
  key: 1,
  class: "item-subtitle"
}, Qc = {
  key: 0,
  class: "item-details"
}, Xc = {
  key: 1,
  class: "item-actions"
}, Zc = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = U(() => n.status ? `status-${n.status}` : "");
    return (h, g) => (o(), s("div", {
      class: te(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: g[0] || (g[0] = (m) => t.clickable && h.$emit("click"))
    }, [
      e("div", Hc, [
        h.$slots.icon ? (o(), s("span", qc, [
          ve(h.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Kc, [
          h.$slots.title ? (o(), s("div", Jc, [
            ve(h.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          h.$slots.subtitle ? (o(), s("div", Yc, [
            ve(h.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      h.$slots.details ? (o(), s("div", Qc, [
        ve(h.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      h.$slots.actions ? (o(), s("div", Xc, [
        ve(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Le = /* @__PURE__ */ K(Zc, [["__scopeId", "data-v-cc435e0e"]]), eu = { class: "loading-state" }, tu = { class: "loading-message" }, ou = /* @__PURE__ */ q({
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
}), lt = /* @__PURE__ */ K(ou, [["__scopeId", "data-v-ad8436c9"]]), su = { class: "error-state" }, nu = { class: "error-message" }, au = /* @__PURE__ */ q({
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
      t.retry ? (o(), E(J, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), it = /* @__PURE__ */ K(au, [["__scopeId", "data-v-5397be48"]]), lu = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: h } = Re();
    uo();
    const g = C([]), m = C(!1), f = C(null), l = C(""), c = C(!0), w = C(!1), v = C(!1), M = C(!1), b = C(null), P = U(
      () => g.value.filter((Z) => Z.status === "broken")
    ), _ = U(
      () => g.value.filter((Z) => Z.status === "new")
    ), k = U(
      () => g.value.filter((Z) => Z.status === "modified")
    ), $ = U(
      () => g.value.filter((Z) => Z.status === "synced")
    ), V = U(() => {
      if (!l.value.trim()) return g.value;
      const Z = l.value.toLowerCase();
      return g.value.filter((N) => N.name.toLowerCase().includes(Z));
    }), T = U(
      () => P.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), R = U(
      () => _.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), H = U(
      () => k.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), j = U(
      () => $.value.filter(
        (Z) => !l.value.trim() || Z.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), Y = U(
      () => w.value ? j.value : j.value.slice(0, 5)
    );
    async function W(Z = !1) {
      m.value = !0, f.value = null;
      try {
        g.value = await h(Z);
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    u({ loadWorkflows: W });
    function D(Z) {
      b.value = Z, v.value = !0;
    }
    function z(Z) {
      b.value = Z, M.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function B() {
      r("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(Z) {
      const N = [];
      return Z.missing_nodes > 0 && N.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && N.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.pending_downloads && Z.pending_downloads > 0 && N.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function Q(Z) {
      const N = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state;
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return Ie(W), (Z, N) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, { title: "WORKFLOWS" }, {
            actions: i(() => [
              P.value.length > 0 ? (o(), E(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...N[8] || (N[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": N[0] || (N[0] = (S) => l.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (o(), E(lt, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (o(), E(it, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            T.value.length ? (o(), E(xe, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(T.value, (S) => (o(), E(Le, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: i(() => [...N[9] || (N[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(ie(S)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => z(S.name)
                    }, {
                      default: i(() => [...N[10] || (N[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(S.name)
                    }, {
                      default: i(() => [...N[11] || (N[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            R.value.length ? (o(), E(xe, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(R.value, (S) => (o(), E(Le, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(S)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(S.name)
                    }, {
                      default: i(() => [...N[12] || (N[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            H.value.length ? (o(), E(xe, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(H.value, (S) => (o(), E(Le, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...N[13] || (N[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(S)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(S.name)
                    }, {
                      default: i(() => [...N[14] || (N[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            j.value.length ? (o(), E(xe, {
              key: 3,
              title: "SYNCED",
              count: j.value.length,
              collapsible: !0,
              "initially-expanded": c.value,
              onToggle: N[2] || (N[2] = (S) => c.value = S)
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(Y.value, (S) => (o(), E(Le, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Q(S)), 1)
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(S.name)
                    }, {
                      default: i(() => [...N[15] || (N[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && j.value.length > 5 ? (o(), E(J, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (S) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + a(j.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            V.value.length ? d("", !0) : (o(), E(Ke, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v.value && b.value ? (o(), E(_l, {
        key: 0,
        "workflow-name": b.value,
        onClose: N[3] || (N[3] = (S) => v.value = !1),
        onResolve: N[4] || (N[4] = (S) => z(b.value)),
        onRefresh: N[5] || (N[5] = (S) => r("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      M.value && b.value ? (o(), E(Pc, {
        key: 1,
        "workflow-name": b.value,
        onClose: N[6] || (N[6] = (S) => M.value = !1),
        onInstall: B,
        onRefresh: N[7] || (N[7] = (S) => r("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), iu = /* @__PURE__ */ K(lu, [["__scopeId", "data-v-b7939cb4"]]), ru = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: te(["summary-bar", t.variant])
    }, [
      ve(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ K(ru, [["__scopeId", "data-v-ccb7816e"]]), du = {
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
}, Lu = { class: "source-type" }, Nu = ["href"], Du = ["disabled", "onClick"], Pu = {
  key: 1,
  class: "empty-state"
}, Uu = { class: "add-source-form" }, Ou = ["disabled"], Bu = {
  key: 2,
  class: "source-error"
}, Au = {
  key: 3,
  class: "source-success"
}, Fu = /* @__PURE__ */ q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: h, removeModelSource: g, openFileLocation: m } = Re(), f = C(null), l = C(!0), c = C(null), w = C(""), v = C(!1), M = C(null), b = C(null), P = C(null), _ = C(null);
    let k = null;
    function $(W, D = "success", z = 2e3) {
      k && clearTimeout(k), _.value = { message: W, type: D }, k = setTimeout(() => {
        _.value = null;
      }, z);
    }
    function V(W) {
      if (!W) return "Unknown";
      const D = 1024 * 1024 * 1024, z = 1024 * 1024;
      return W >= D ? `${(W / D).toFixed(1)} GB` : W >= z ? `${(W / z).toFixed(0)} MB` : `${(W / 1024).toFixed(0)} KB`;
    }
    function T(W) {
      navigator.clipboard.writeText(W), $("Copied to clipboard!");
    }
    async function R(W) {
      try {
        await m(W), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!w.value.trim() || !f.value)) {
        v.value = !0, b.value = null, P.value = null;
        try {
          await h(f.value.hash, w.value.trim()), P.value = "Source added successfully!", w.value = "", await Y();
        } catch (W) {
          b.value = W instanceof Error ? W.message : "Failed to add source";
        } finally {
          v.value = !1;
        }
      }
    }
    async function j(W) {
      if (f.value) {
        M.value = W, b.value = null, P.value = null;
        try {
          await g(f.value.hash, W), $("Source removed"), await Y();
        } catch (D) {
          b.value = D instanceof Error ? D.message : "Failed to remove source";
        } finally {
          M.value = null;
        }
      }
    }
    async function Y() {
      l.value = !0, c.value = null;
      try {
        f.value = await r(n.identifier);
      } catch (W) {
        c.value = W instanceof Error ? W.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ie(Y), (W, D) => {
      var z;
      return o(), s(A, null, [
        p(et, {
          title: `Model Details: ${((z = f.value) == null ? void 0 : z.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: c.value,
          onClose: D[5] || (D[5] = (O) => W.$emit("close"))
        }, {
          body: i(() => {
            var O, B, ae, ie;
            return [
              f.value ? (o(), s("div", du, [
                e("section", cu, [
                  e("div", uu, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", mu, a(f.value.hash || "Not computed"), 1),
                    f.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (Q) => T(f.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", vu, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", fu, a(f.value.blake3 || "Not computed"), 1),
                    f.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (Q) => T(f.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", gu, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", hu, a(f.value.sha256 || "Not computed"), 1),
                    f.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (Q) => T(f.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", pu, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", yu, a(V(f.value.size)), 1)
                  ]),
                  e("div", wu, [
                    D[10] || (D[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", ku, a(f.value.category), 1)
                  ]),
                  e("div", bu, [
                    D[11] || (D[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", _u, a(f.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", $u, [
                  e("h4", Cu, "Locations (" + a(((O = f.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (B = f.value.locations) != null && B.length ? (o(), s("div", xu, [
                    (o(!0), s(A, null, X(f.value.locations, (Q, Z) => (o(), s("div", {
                      key: Z,
                      class: "location-item"
                    }, [
                      e("span", Su, a(Q.path), 1),
                      Q.modified ? (o(), s("span", Iu, "Modified: " + a(Q.modified), 1)) : d("", !0),
                      Q.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => R(Q.path)
                      }, " Open File Location ", 8, Eu)) : d("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Mu, "No locations found"))
                ]),
                e("section", Ru, [
                  e("h4", Tu, "Download Sources (" + a(((ae = f.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (ie = f.value.sources) != null && ie.length ? (o(), s("div", zu, [
                    (o(!0), s(A, null, X(f.value.sources, (Q, Z) => (o(), s("div", {
                      key: Z,
                      class: "source-item"
                    }, [
                      e("span", Lu, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, Nu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: M.value === Q.url,
                        onClick: (N) => j(Q.url)
                      }, a(M.value === Q.url ? "..." : "×"), 9, Du)
                    ]))), 128))
                  ])) : (o(), s("div", Pu, " No download sources configured ")),
                  e("div", Uu, [
                    Xe(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (Q) => w.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [lo, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || v.value,
                      onClick: H
                    }, a(v.value ? "Adding..." : "Add Source"), 9, Ou)
                  ]),
                  b.value ? (o(), s("p", Bu, a(b.value), 1)) : d("", !0),
                  P.value ? (o(), s("p", Au, a(P.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: D[4] || (D[4] = (O) => W.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), E(Me, { to: "body" }, [
          _.value ? (o(), s("div", {
            key: 0,
            class: te(["toast", _.value.type])
          }, a(_.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), fo = /* @__PURE__ */ K(Fu, [["__scopeId", "data-v-f15cbb56"]]), Vu = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: h } = Re(), g = C([]), m = C([]), f = C("production"), l = C(!1), c = C(null), w = C(""), v = C(!1), M = C(null);
    function b() {
      v.value = !1, n("navigate", "model-index");
    }
    const P = U(
      () => g.value.reduce((Y, W) => Y + (W.size || 0), 0)
    ), _ = U(() => {
      if (!w.value.trim()) return g.value;
      const Y = w.value.toLowerCase();
      return g.value.filter((W) => W.filename.toLowerCase().includes(Y));
    }), k = U(() => {
      if (!w.value.trim()) return m.value;
      const Y = w.value.toLowerCase();
      return m.value.filter((W) => W.filename.toLowerCase().includes(Y));
    }), $ = U(() => {
      const Y = {};
      for (const D of _.value) {
        const z = D.type || "other";
        Y[z] || (Y[z] = []), Y[z].push(D);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(Y).sort(([D], [z]) => {
        const O = W.indexOf(D), B = W.indexOf(z);
        return O >= 0 && B >= 0 ? O - B : O >= 0 ? -1 : B >= 0 ? 1 : D.localeCompare(z);
      }).map(([D, z]) => ({ type: D, models: z }));
    });
    function V(Y) {
      if (!Y) return "Unknown";
      const W = Y / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function T(Y) {
      M.value = Y.hash || Y.filename;
    }
    function R(Y) {
      n("navigate", "model-index");
    }
    function H(Y) {
      alert(`Download functionality not yet implemented for ${Y}`);
    }
    async function j() {
      l.value = !0, c.value = null;
      try {
        const Y = await r();
        g.value = Y, m.value = [];
        const W = await h();
        f.value = W.environment || "production";
      } catch (Y) {
        c.value = Y instanceof Error ? Y.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ie(j), (Y, W) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (D) => v.value = !0)
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: w.value,
            "onUpdate:modelValue": W[1] || (W[1] = (D) => w.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environment models..."
          })) : c.value ? (o(), E(it, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            g.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(V(P.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(A, null, X($.value, (D) => (o(), E(xe, {
              key: D.type,
              title: D.type.toUpperCase(),
              count: D.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(D.models, (z) => (o(), E(Le, {
                  key: z.hash || z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...W[4] || (W[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(V(z.size)), 1)
                  ]),
                  details: i(() => [
                    p(we, {
                      label: "Used by:",
                      value: (z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    p(we, {
                      label: "Path:",
                      value: z.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => T(z)
                    }, {
                      default: i(() => [...W[5] || (W[5] = [
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
            k.value.length ? (o(), E(xe, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(k.value, (D) => (o(), E(Le, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...W[6] || (W[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(D.filename), 1)
                  ]),
                  subtitle: i(() => [...W[7] || (W[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var z;
                    return [
                      p(we, {
                        label: "Required by:",
                        value: ((z = D.workflow_names) == null ? void 0 : z.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => H(D.filename)
                    }, {
                      default: i(() => [...W[8] || (W[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => R(D.filename)
                    }, {
                      default: i(() => [...W[9] || (W[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !_.value.length && !k.value.length ? (o(), E(Ke, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(at, {
        show: v.value,
        title: "About Environment Models",
        onClose: W[2] || (W[2] = (D) => v.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            W[10] || (W[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(f.value) + '"', 1),
            W[11] || (W[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          p(J, {
            variant: "primary",
            onClick: b
          }, {
            default: i(() => [...W[12] || (W[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), E(fo, {
        key: 0,
        identifier: M.value,
        onClose: W[3] || (W[3] = (D) => M.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Wu = /* @__PURE__ */ K(Vu, [["__scopeId", "data-v-cb4f12b3"]]), Gu = {
  key: 0,
  class: "indexing-progress"
}, ju = { class: "progress-info" }, Hu = { class: "progress-label" }, qu = { class: "progress-count" }, Ku = { class: "progress-bar" }, Ju = { class: "modal-content" }, Yu = { class: "modal-header" }, Qu = { class: "modal-body" }, Xu = { class: "input-group" }, Zu = { class: "current-path" }, em = { class: "input-group" }, tm = { class: "modal-footer" }, om = { class: "modal-content" }, sm = { class: "modal-header" }, nm = { class: "modal-body" }, am = { class: "input-group" }, lm = { class: "input-group" }, im = { class: "modal-footer" }, rm = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: h,
      setModelsDirectory: g
    } = Re(), { addToQueue: m } = Rt(), f = u, l = C([]), c = C(!1), w = C(!1), v = C(null), M = C(""), b = C(!1), P = C(null), _ = C(!1), k = C(null), $ = C(""), V = C(!1), T = C(!1), R = C(""), H = C(""), j = C(null), Y = U(
      () => l.value.reduce((N, S) => N + (S.size || 0), 0)
    ), W = U(() => {
      if (!M.value.trim()) return l.value;
      const N = M.value.toLowerCase();
      return l.value.filter((S) => {
        const ne = S, ee = S.sha256 || ne.sha256_hash || "";
        return S.filename.toLowerCase().includes(N) || ee.toLowerCase().includes(N);
      });
    }), D = U(() => {
      const N = {};
      for (const ne of W.value) {
        const ee = ne.type || "other";
        N[ee] || (N[ee] = []), N[ee].push(ne);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ne], [ee]) => {
        const _e = S.indexOf(ne), ye = S.indexOf(ee);
        return _e >= 0 && ye >= 0 ? _e - ye : _e >= 0 ? -1 : ye >= 0 ? 1 : ne.localeCompare(ee);
      }).map(([ne, ee]) => ({ type: ne, models: ee }));
    });
    function z(N) {
      if (!N) return "Unknown";
      const S = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return N >= S ? `${(N / S).toFixed(1)} GB` : N >= ne ? `${(N / ne).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function O(N) {
      P.value = N.hash || N.filename;
    }
    async function B() {
      w.value = !0, v.value = null;
      try {
        const N = await r();
        await Q(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function ae() {
      if ($.value.trim()) {
        V.value = !0, v.value = null;
        try {
          const N = await g($.value.trim());
          k.value = N.path, _.value = !1, $.value = "", await Q(), console.log(`Directory changed: ${N.models_indexed} models indexed`), f("refresh");
        } catch (N) {
          v.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          V.value = !1;
        }
      }
    }
    function ie() {
      if (!R.value.trim() || !H.value.trim()) return;
      const N = H.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: N,
        url: R.value.trim(),
        targetPath: H.value.trim()
      }]), R.value = "", H.value = "", T.value = !1;
    }
    async function Q() {
      c.value = !0, v.value = null;
      try {
        l.value = await n();
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        c.value = !1;
      }
    }
    async function Z() {
      try {
        const N = await h();
        k.value = N.path;
      } catch {
      }
    }
    return Ie(() => {
      Q(), Z();
    }), (N, S) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (ne) => b.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: B
              }, {
                default: i(() => [
                  y(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (ne) => _.value = !0)
              }, {
                default: i(() => [...S[15] || (S[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (ne) => T.value = !0)
              }, {
                default: i(() => [...S[16] || (S[16] = [
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
        search: i(() => [
          j.value ? (o(), s("div", Gu, [
            e("div", ju, [
              e("span", Hu, a(j.value.message), 1),
              e("span", qu, a(j.value.current) + "/" + a(j.value.total), 1)
            ]),
            e("div", Ku, [
              e("div", {
                class: "progress-fill",
                style: Ze({ width: `${j.value.current / j.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          p(kt, {
            modelValue: M.value,
            "onUpdate:modelValue": S[3] || (S[3] = (ne) => M.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          c.value || j.value ? (o(), E(lt, {
            key: 0,
            message: j.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), E(it, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            l.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(z(Y.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(A, null, X(D.value, (ne) => (o(), E(xe, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(ne.models, (ee) => (o(), E(Le, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...S[17] || (S[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(ee.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(z(ee.size)), 1)
                  ]),
                  details: i(() => [
                    p(we, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => O(ee)
                    }, {
                      default: i(() => [...S[18] || (S[18] = [
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
            W.value.length ? d("", !0) : (o(), E(Ke, {
              key: 1,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p(at, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (ne) => b.value = !1)
      }, {
        content: i(() => [...S[19] || (S[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      P.value ? (o(), E(fo, {
        key: 0,
        identifier: P.value,
        onClose: S[5] || (S[5] = (ne) => P.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (o(), E(Me, { to: "body" }, [
        _.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = $e((ne) => _.value = !1, ["self"]))
        }, [
          e("div", Ju, [
            e("div", Yu, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (ne) => _.value = !1)
              }, "✕")
            ]),
            e("div", Qu, [
              e("div", Xu, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", Zu, a(k.value || "Not set"), 1)
              ]),
              e("div", em, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                p(qe, {
                  modelValue: $.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (ne) => $.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", tm, [
              p(re, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (ne) => _.value = !1)
              }, {
                default: i(() => [...S[24] || (S[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(re, {
                variant: "primary",
                disabled: !$.value.trim() || V.value,
                loading: V.value,
                onClick: ae
              }, {
                default: i(() => [
                  y(a(V.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (o(), E(Me, { to: "body" }, [
        T.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = $e((ne) => T.value = !1, ["self"]))
        }, [
          e("div", om, [
            e("div", sm, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (ne) => T.value = !1)
              }, "✕")
            ]),
            e("div", nm, [
              e("div", am, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                p(qe, {
                  modelValue: R.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (ne) => R.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", lm, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                p(qe, {
                  modelValue: H.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (ne) => H.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", im, [
              p(re, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (ne) => T.value = !1)
              }, {
                default: i(() => [...S[29] || (S[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(re, {
                variant: "primary",
                disabled: !R.value.trim() || !H.value.trim(),
                onClick: ie
              }, {
                default: i(() => [...S[30] || (S[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), dm = /* @__PURE__ */ K(rm, [["__scopeId", "data-v-73b78d84"]]), cm = { class: "node-details" }, um = { class: "status-row" }, mm = {
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
}, xm = /* @__PURE__ */ q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (f, l) => (o(), E(et, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (c) => r("close"))
    }, {
      body: i(() => [
        e("div", cm, [
          e("div", um, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", h.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (o(), s("div", mm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", vm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", fm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", gm, a(m.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", hm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pm, a(t.node.registry_id), 1)
          ])) : d("", !0),
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
          ])) : d("", !0),
          t.node.download_url ? (o(), s("div", km, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", bm, a(t.node.download_url), 1)
          ])) : d("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", _m, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", $m, " Not used in any workflows ")) : (o(), s("div", Cm, [
              (o(!0), s(A, null, X(t.node.used_in_workflows, (c) => (o(), s("span", {
                key: c,
                class: "workflow-tag"
              }, a(c), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (c) => r("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Sm = /* @__PURE__ */ K(xm, [["__scopeId", "data-v-b342f626"]]), Im = { key: 0 }, Em = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Mm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Rm = /* @__PURE__ */ q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: h, installNode: g, uninstallNode: m } = Re(), f = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = C(!1), c = C(null), w = C(""), v = C(!1), M = C(null), b = U(() => {
      if (!w.value.trim()) return f.value.nodes;
      const D = w.value.toLowerCase();
      return f.value.nodes.filter(
        (z) => {
          var O, B;
          return z.name.toLowerCase().includes(D) || ((O = z.description) == null ? void 0 : O.toLowerCase().includes(D)) || ((B = z.repository) == null ? void 0 : B.toLowerCase().includes(D));
        }
      );
    }), P = U(
      () => b.value.filter((D) => D.installed && D.tracked)
    ), _ = U(
      () => b.value.filter((D) => !D.installed && D.tracked)
    ), k = U(
      () => b.value.filter((D) => D.installed && !D.tracked)
    );
    function $(D) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[D] || D;
    }
    function V(D) {
      return !D.used_in_workflows || D.used_in_workflows.length === 0 ? "Not used in any workflows" : D.used_in_workflows.length === 1 ? D.used_in_workflows[0] : `${D.used_in_workflows.length} workflows`;
    }
    function T(D) {
      M.value = D;
    }
    function R() {
      n("open-node-manager");
    }
    async function H(D) {
      if (confirm(`Track "${D}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const z = await h(D);
          z.status === "success" ? (alert(`Node "${D}" is now tracked as development!`), await W()) : alert(`Failed to track node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function j(D) {
      if (confirm(`Remove untracked node "${D}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const z = await m(D);
          z.status === "success" ? (alert(`Node "${D}" removed!`), await W()) : alert(`Failed to remove node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function Y(D) {
      if (confirm(`Install node "${D}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const z = await g(D);
          z.status === "success" ? (alert(`Node "${D}" installed successfully!`), await W()) : alert(`Failed to install node: ${z.message || "Unknown error"}`);
        } catch (z) {
          alert(`Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function W() {
      l.value = !0, c.value = null;
      try {
        f.value = await r();
      } catch (D) {
        c.value = D instanceof Error ? D.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(W), (D, z) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (O) => v.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: i(() => [...z[5] || (z[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: w.value,
            "onUpdate:modelValue": z[1] || (z[1] = (O) => w.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), E(lt, {
            key: 0,
            message: "Loading nodes..."
          })) : c.value ? (o(), E(it, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            f.value.total_count ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(a(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (o(), s(A, { key: 0 }, [
                  y(" • " + a(f.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                f.value.untracked_count ? (o(), s(A, { key: 1 }, [
                  y(" • " + a(f.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            k.value.length ? (o(), E(xe, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(k.value, (O) => (o(), E(Le, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    p(we, {
                      label: "Used by:",
                      value: V(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => T(O)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => H(O.name)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (B) => j(O.name)
                    }, {
                      default: i(() => [...z[10] || (z[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            P.value.length ? (o(), E(xe, {
              key: 2,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(P.value, (O) => (o(), E(Le, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(a(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    O.version ? (o(), s("span", Im, a(O.source === "development" ? "" : "v") + a(O.version), 1)) : (o(), s("span", Em, "version unknown")),
                    e("span", Mm, " • " + a($(O.source)), 1)
                  ]),
                  details: i(() => [
                    p(we, {
                      label: "Used by:",
                      value: V(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => T(O)
                    }, {
                      default: i(() => [...z[11] || (z[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: R
                    }, {
                      default: i(() => [...z[12] || (z[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? (o(), E(xe, {
              key: 3,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(_.value, (O) => (o(), E(Le, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: i(() => [...z[13] || (z[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [...z[14] || (z[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    p(we, {
                      label: "Required by:",
                      value: V(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => T(O)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(J, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => Y(O.name)
                    }, {
                      default: i(() => [...z[16] || (z[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !P.value.length && !_.value.length && !k.value.length ? (o(), E(Ke, {
              key: 4,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(at, {
        show: v.value,
        title: "About Custom Nodes",
        onClose: z[3] || (z[3] = (O) => v.value = !1)
      }, {
        content: i(() => [...z[17] || (z[17] = [
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
        actions: i(() => [
          p(J, {
            variant: "primary",
            onClick: z[2] || (z[2] = (O) => v.value = !1)
          }, {
            default: i(() => [...z[18] || (z[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), E(Sm, {
        key: 0,
        node: M.value,
        onClose: z[4] || (z[4] = (O) => M.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), Tm = /* @__PURE__ */ K(Rm, [["__scopeId", "data-v-4ac1465a"]]);
function go(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const zm = { class: "remote-url-display" }, Lm = ["title"], Nm = ["title"], Dm = {
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
}, Um = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = C(!1), r = U(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const g = u.url.slice(0, Math.floor(u.maxLength * 0.6)), m = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${g}...${m}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, m) => (o(), s("div", zm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Lm),
      e("button", {
        class: te(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Pm, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Dm, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Nm)
    ]));
  }
}), eo = /* @__PURE__ */ K(Um, [["__scopeId", "data-v-7768a58d"]]), Om = { class: "remote-title" }, Bm = {
  key: 0,
  class: "default-badge"
}, Am = {
  key: 1,
  class: "sync-badge"
}, Fm = {
  key: 0,
  class: "ahead"
}, Vm = {
  key: 1,
  class: "behind"
}, Wm = {
  key: 0,
  class: "tracking-info"
}, Gm = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = U(() => u.fetchingRemote === u.remote.name), r = U(() => u.remote.is_default), h = U(() => !!u.trackingBranch), g = U(() => u.syncStatus && u.syncStatus.behind > 0), m = U(() => u.syncStatus && u.syncStatus.ahead > 0);
    function f(l) {
      const c = new Date(l), v = (/* @__PURE__ */ new Date()).getTime() - c.getTime(), M = Math.floor(v / 6e4);
      if (M < 1) return "Just now";
      if (M < 60) return `${M}m ago`;
      const b = Math.floor(M / 60);
      if (b < 24) return `${b}h ago`;
      const P = Math.floor(b / 24);
      return P < 7 ? `${P}d ago` : c.toLocaleDateString();
    }
    return (l, c) => (o(), E(Le, {
      status: r.value ? "synced" : void 0
    }, {
      icon: i(() => [
        y(a(r.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Om, [
          e("span", null, a(t.remote.name), 1),
          r.value ? (o(), s("span", Bm, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), s("span", Am, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Fm, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Vm, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        h.value ? (o(), s("span", Wm, " Tracking: " + a(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: i(() => {
        var w;
        return [
          p(we, { label: "Fetch:" }, {
            default: i(() => [
              p(eo, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), E(we, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              p(eo, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (w = t.syncStatus) != null && w.last_fetch ? (o(), E(we, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, a(f(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: i(() => [
        p(J, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: c[0] || (c[0] = (w) => l.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...c[5] || (c[5] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        p(J, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: c[1] || (c[1] = (w) => l.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(J, {
          variant: m.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: c[2] || (c[2] = (w) => l.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(J, {
          variant: "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (w) => l.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...c[6] || (c[6] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        r.value ? d("", !0) : (o(), E(J, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: c[4] || (c[4] = (w) => l.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...c[7] || (c[7] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), jm = /* @__PURE__ */ K(Gm, [["__scopeId", "data-v-f9018fc6"]]), Hm = ["for"], qm = {
  key: 0,
  class: "base-form-field-required"
}, Km = { class: "base-form-field-input" }, Jm = {
  key: 1,
  class: "base-form-field-error"
}, Ym = {
  key: 2,
  class: "base-form-field-hint"
}, Qm = /* @__PURE__ */ q({
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
    const u = t, n = U(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, h) => (o(), s("div", {
      class: te(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (o(), s("span", qm, "*")) : d("", !0)
      ], 8, Hm)) : d("", !0),
      e("div", Km, [
        ve(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Jm, a(t.error), 1)) : t.hint ? (o(), s("span", Ym, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ K(Qm, [["__scopeId", "data-v-9a1cf296"]]), Xm = { class: "remote-form" }, Zm = { class: "form-header" }, ev = { class: "form-body" }, tv = {
  key: 0,
  class: "form-error"
}, ov = { class: "form-actions" }, sv = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = C(!1), m = C(null);
    wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const f = U(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!f.value || g.value)) {
        m.value = null, g.value = !0;
        try {
          r("submit", h.value);
        } catch (c) {
          m.value = c instanceof Error ? c.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (c, w) => (o(), s("div", Xm, [
      e("div", Zm, [
        p(Ae, null, {
          default: i(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", ev, [
        p(Vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            p(qe, {
              modelValue: h.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (v) => h.value.name = v),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        p(Vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            p(qe, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (v) => h.value.fetchUrl = v),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p(Vt, { label: "Push URL (optional)" }, {
          default: i(() => [
            p(qe, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (v) => h.value.pushUrl = v),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), s("div", tv, a(m.value), 1)) : d("", !0)
      ]),
      e("div", ov, [
        p(J, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: g.value,
          onClick: l
        }, {
          default: i(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        p(J, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (v) => c.$emit("cancel"))
        }, {
          default: i(() => [...w[4] || (w[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), nv = /* @__PURE__ */ K(sv, [["__scopeId", "data-v-56021b18"]]), av = { class: "conflict-summary-box" }, lv = { class: "summary-header" }, iv = { class: "summary-text" }, rv = { key: 0 }, dv = {
  key: 1,
  class: "all-resolved"
}, cv = { class: "summary-progress" }, uv = { class: "progress-bar" }, mv = { class: "progress-text" }, vv = /* @__PURE__ */ q({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const u = t, n = U(
      () => u.conflictCount > 0 ? u.resolvedCount / u.conflictCount * 100 : 0
    );
    return (r, h) => (o(), s("div", av, [
      e("div", lv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", iv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (o(), s("p", rv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (o(), s("p", dv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", cv, [
        e("div", uv, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", mv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), fv = /* @__PURE__ */ K(vv, [["__scopeId", "data-v-4e9e6cc9"]]), gv = { class: "modal-header" }, hv = { class: "modal-title" }, pv = { class: "modal-body" }, yv = {
  key: 0,
  class: "error-box"
}, wv = {
  key: 0,
  class: "error-hint"
}, kv = {
  key: 1,
  class: "loading-state"
}, bv = { class: "commit-summary" }, _v = {
  key: 0,
  class: "changes-section"
}, $v = {
  key: 0,
  class: "change-group",
  open: ""
}, Cv = { class: "change-count" }, xv = { class: "change-list" }, Sv = {
  key: 0,
  class: "conflict-badge"
}, Iv = {
  key: 1,
  class: "change-group"
}, Ev = { class: "change-count" }, Mv = { class: "change-list" }, Rv = {
  key: 2,
  class: "change-group"
}, Tv = { class: "change-count" }, zv = { class: "change-list" }, Lv = {
  key: 2,
  class: "strategy-section"
}, Nv = { class: "radio-group" }, Dv = { class: "radio-option" }, Pv = { class: "radio-option" }, Uv = { class: "radio-option" }, Ov = {
  key: 3,
  class: "up-to-date"
}, Bv = { class: "modal-actions" }, to = "comfygit.pullModelStrategy", Av = /* @__PURE__ */ q({
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
    const n = t, r = u, h = C(localStorage.getItem(to) || "skip");
    wt(h, (k) => {
      localStorage.setItem(to, k);
    });
    const g = U(() => {
      var k;
      return ((k = n.error) == null ? void 0 : k.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = U(() => {
      if (!n.preview) return 0;
      const k = n.preview.changes.workflows;
      return k.added.length + k.modified.length + k.deleted.length;
    }), f = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = U(() => {
      var k;
      return m.value > 0 || f.value > 0 || (((k = n.preview) == null ? void 0 : k.changes.models.count) || 0) > 0;
    }), c = U(() => n.preview && go(n.preview) ? n.preview : null), w = U(() => {
      var k;
      return ((k = c.value) == null ? void 0 : k.workflow_conflicts.length) ?? 0;
    }), v = U(() => {
      var k;
      return ((k = n.conflictResolutions) == null ? void 0 : k.size) ?? 0;
    }), M = U(
      () => w.value > 0 && v.value === w.value
    ), b = U(() => !(!n.preview || n.preview.has_uncommitted_changes || c.value && !M.value));
    function P(k) {
      if (!c.value) return !1;
      const $ = k.replace(/\.json$/, "");
      return c.value.workflow_conflicts.some((V) => V.name === $);
    }
    function _(k) {
      const $ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      r("pull", { modelStrategy: h.value, force: k, resolutions: $ });
    }
    return (k, $) => {
      var V, T;
      return o(), E(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[11] || ($[11] = (R) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[10] || ($[10] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", gv, [
              e("h3", hv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (R) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", pv, [
              t.error ? (o(), s("div", yv, [
                $[13] || ($[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  $[12] || ($[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (o(), s("p", wv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (o(), s("div", kv, [...$[14] || ($[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (V = t.preview) != null && V.has_uncommitted_changes ? (o(), s(A, { key: 2 }, [
                $[15] || ($[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                $[16] || ($[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (o(), s(A, { key: 3 }, [
                e("div", bv, [
                  $[17] || ($[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (o(), s("div", _v, [
                  $[21] || ($[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  m.value > 0 ? (o(), s("details", $v, [
                    e("summary", null, [
                      $[18] || ($[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Cv, a(m.value) + " changes", 1)
                    ]),
                    e("div", xv, [
                      (o(!0), s(A, null, X(t.preview.changes.workflows.added, (R) => (o(), s("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (o(!0), s(A, null, X(t.preview.changes.workflows.modified, (R) => (o(), s("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(R) + " ", 1),
                        P(R) ? (o(), s("span", Sv, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (o(!0), s(A, null, X(t.preview.changes.workflows.deleted, (R) => (o(), s("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : d("", !0),
                  f.value > 0 ? (o(), s("details", Iv, [
                    e("summary", null, [
                      $[19] || ($[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Ev, a(f.value) + " to install", 1)
                    ]),
                    e("div", Mv, [
                      (o(!0), s(A, null, X(t.preview.changes.nodes.to_install, (R) => (o(), s("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (o(), s("details", Rv, [
                    e("summary", null, [
                      $[20] || ($[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Tv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", zv, [
                      (o(!0), s(A, null, X(t.preview.changes.models.referenced, (R) => (o(), s("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                c.value ? (o(), E(fv, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": v.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (o(), s("div", Lv, [
                  $[26] || ($[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Nv, [
                    e("label", Dv, [
                      Xe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (R) => h.value = R),
                        value: "all"
                      }, null, 512), [
                        [Bt, h.value]
                      ]),
                      $[22] || ($[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Pv, [
                      Xe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (R) => h.value = R),
                        value: "required"
                      }, null, 512), [
                        [Bt, h.value]
                      ]),
                      $[23] || ($[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Uv, [
                      Xe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (R) => h.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Bt, h.value]
                      ]),
                      $[24] || ($[24] = e("span", null, "Skip model downloads", -1)),
                      $[25] || ($[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[27] || ($[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (o(), s("div", Ov, [
                  $[28] || ($[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Bv, [
              p(J, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (R) => k.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (o(), s(A, { key: 0 }, [
                p(J, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: $[5] || ($[5] = (R) => _(!1))
                }, {
                  default: i(() => [...$[30] || ($[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                p(J, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: $[6] || ($[6] = (R) => _(!0))
                }, {
                  default: i(() => [...$[31] || ($[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = t.preview) != null && T.has_uncommitted_changes ? (o(), E(J, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: $[7] || ($[7] = (R) => _(!0))
              }, {
                default: i(() => [...$[32] || ($[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (o(), s(A, { key: 2 }, [
                c.value && !M.value ? (o(), E(J, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (R) => r("openConflictResolution"))
                }, {
                  default: i(() => [
                    y(" Resolve Conflicts (" + a(v.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), E(J, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: $[9] || ($[9] = (R) => _(!1))
                }, {
                  default: i(() => [...$[33] || ($[33] = [
                    y(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Fv = /* @__PURE__ */ K(Av, [["__scopeId", "data-v-300c7b2f"]]), Vv = { class: "modal-header" }, Wv = { class: "modal-title" }, Gv = { class: "modal-body" }, jv = {
  key: 0,
  class: "loading-state"
}, Hv = {
  key: 1,
  class: "warning-box"
}, qv = {
  key: 0,
  class: "commits-section"
}, Kv = { class: "commit-list" }, Jv = { class: "commit-hash" }, Yv = { class: "commit-message" }, Qv = { class: "commit-date" }, Xv = { class: "force-option" }, Zv = { class: "checkbox-option" }, ef = { class: "commit-summary" }, tf = {
  key: 0,
  class: "commits-section"
}, of = { class: "commit-list" }, sf = { class: "commit-hash" }, nf = { class: "commit-message" }, af = { class: "commit-date" }, lf = {
  key: 1,
  class: "up-to-date"
}, rf = { class: "modal-actions" }, df = /* @__PURE__ */ q({
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
    const n = u, r = C(!1);
    function h(g) {
      n("push", { force: g });
    }
    return (g, m) => {
      var f, l, c;
      return o(), E(Me, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: m[7] || (m[7] = (w) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: m[6] || (m[6] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Vv, [
              e("h3", Wv, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: m[0] || (m[0] = (w) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Gv, [
              t.loading ? (o(), s("div", jv, [...m[8] || (m[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (f = t.preview) != null && f.has_uncommitted_changes ? (o(), s("div", Hv, [...m[9] || (m[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (o(), s(A, { key: 2 }, [
                m[13] || (m[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (o(), s("div", qv, [
                  m[10] || (m[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Kv, [
                    (o(!0), s(A, null, X(t.preview.commits, (w) => (o(), s("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Jv, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Yv, a(w.message), 1),
                      e("span", Qv, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Xv, [
                  e("label", Zv, [
                    Xe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => r.value = w)
                    }, null, 512), [
                      [io, r.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (o(), s(A, { key: 3 }, [
                e("div", ef, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (o(), s("div", tf, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", of, [
                    (o(!0), s(A, null, X(t.preview.commits, (w) => (o(), s("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", sf, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", nf, a(w.message), 1),
                      e("span", af, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (o(), s("div", lf, [
                  m[16] || (m[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", rf, [
              p(J, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (w) => g.$emit("close"))
              }, {
                default: i(() => [...m[17] || (m[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (c = t.preview) != null && c.remote_has_new_commits ? (o(), s(A, { key: 0 }, [
                p(J, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (w) => g.$emit("pull-first"))
                }, {
                  default: i(() => [...m[18] || (m[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                p(J, {
                  variant: "destructive",
                  disabled: !r.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (w) => h(!0))
                }, {
                  default: i(() => [...m[19] || (m[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (o(), E(J, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (w) => h(!1))
              }, {
                default: i(() => [...m[20] || (m[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), cf = /* @__PURE__ */ K(df, [["__scopeId", "data-v-bc6ded53"]]), uf = { class: "resolution-choice-group" }, mf = ["disabled"], vf = ["disabled"], ff = /* @__PURE__ */ q({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("div", uf, [
      e("button", {
        class: te(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (r) => u.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, mf),
      e("button", {
        class: te(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (r) => u.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, vf)
    ]));
  }
}), gf = /* @__PURE__ */ K(ff, [["__scopeId", "data-v-985715ed"]]), hf = { class: "conflict-header" }, pf = { class: "conflict-info" }, yf = { class: "workflow-name" }, wf = { class: "conflict-description" }, kf = {
  key: 0,
  class: "resolved-badge"
}, bf = { class: "resolved-text" }, _f = { class: "conflict-hashes" }, $f = { class: "hash-item" }, Cf = { class: "hash-item" }, xf = { class: "conflict-actions" }, Sf = /* @__PURE__ */ q({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = C(n.resolution);
    wt(() => n.resolution, (l) => {
      h.value = l;
    }), wt(h, (l) => {
      l && r("resolve", l);
    });
    const g = U(() => h.value !== null), m = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), f = U(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, c) => {
      var w, v;
      return o(), s("div", {
        class: te(["conflict-item", { resolved: g.value }])
      }, [
        e("div", hf, [
          c[2] || (c[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", pf, [
            e("code", yf, a(t.conflict.name) + ".json", 1),
            e("div", wf, a(m.value), 1)
          ]),
          g.value ? (o(), s("div", kf, [
            c[1] || (c[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", bf, a(f.value), 1)
          ])) : d("", !0)
        ]),
        e("div", _f, [
          e("span", $f, [
            c[3] || (c[3] = y("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Cf, [
            c[4] || (c[4] = y("Theirs: ", -1)),
            e("code", null, a(((v = t.conflict.target_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", xf, [
          p(gf, {
            modelValue: h.value,
            "onUpdate:modelValue": c[0] || (c[0] = (M) => h.value = M),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), If = /* @__PURE__ */ K(Sf, [["__scopeId", "data-v-506d3bbf"]]), Ef = { class: "resolution-content" }, Mf = {
  key: 0,
  class: "error-box"
}, Rf = { class: "resolution-header" }, Tf = { class: "header-stats" }, zf = { class: "stat" }, Lf = { class: "stat-value" }, Nf = { class: "stat resolved" }, Df = { class: "stat-value" }, Pf = {
  key: 0,
  class: "stat pending"
}, Uf = { class: "stat-value" }, Of = { class: "conflicts-list" }, Bf = {
  key: 1,
  class: "all-resolved-message"
}, Af = /* @__PURE__ */ q({
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
    const n = t, r = u, h = U(() => n.resolutions.size), g = U(() => n.workflowConflicts.length - h.value), m = U(() => h.value === n.workflowConflicts.length), f = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(M) {
      const b = n.resolutions.get(M);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function c(M, b) {
      r("resolve", M, b);
    }
    function w() {
      r("close");
    }
    function v() {
      r("apply");
    }
    return (M, b) => (o(), E(et, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: i(() => [
        e("div", Ef, [
          t.error ? (o(), s("div", Mf, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", Rf, [
            e("div", Tf, [
              e("div", zf, [
                e("span", Lf, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Nf, [
                e("span", Df, a(h.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (o(), s("div", Pf, [
                e("span", Uf, a(g.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Of, [
            (o(!0), s(A, null, X(t.workflowConflicts, (P) => (o(), E(If, {
              key: P.name,
              conflict: P,
              resolution: l(P.name),
              onResolve: (_) => c(P.name, _)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (o(), s("div", Bf, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(f.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: w
        }, {
          default: i(() => [...b[7] || (b[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        p(re, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: v
        }, {
          default: i(() => [
            y(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ff = /* @__PURE__ */ K(Af, [["__scopeId", "data-v-c58d150d"]]), Vf = { class: "node-conflict-item" }, Wf = { class: "node-header" }, Gf = { class: "node-name" }, jf = { class: "node-id" }, Hf = { class: "version-comparison" }, qf = { class: "version yours" }, Kf = { class: "version theirs" }, Jf = { class: "chosen-version" }, Yf = { class: "chosen" }, Qf = { class: "chosen-reason" }, Xf = { class: "affected-workflows" }, Zf = { class: "wf-source" }, eg = { class: "wf-version" }, tg = /* @__PURE__ */ q({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", Vf, [
      e("div", Wf, [
        e("code", Gf, a(t.conflict.node_name), 1),
        e("span", jf, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Hf, [
        e("div", qf, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Kf, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Jf, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Yf, a(t.conflict.chosen_version), 1),
        e("span", Qf, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Xf, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (o(!0), s(A, null, X(t.conflict.affected_workflows, (r) => (o(), s("li", {
            key: r.name
          }, [
            e("code", null, a(r.name), 1),
            e("span", Zf, "(" + a(r.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", eg, "needs v" + a(r.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), og = /* @__PURE__ */ K(tg, [["__scopeId", "data-v-8b626725"]]), sg = { class: "validation-content" }, ng = {
  key: 0,
  class: "compatible-message"
}, ag = { class: "conflicts-list" }, lg = {
  key: 2,
  class: "warnings-section"
}, ig = /* @__PURE__ */ q({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, m) => (o(), E(et, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (f) => r("cancel"))
    }, {
      body: i(() => [
        e("div", sg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (o(), s("div", ng, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (o(), s(A, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", ag, [
              (o(!0), s(A, null, X(t.validation.node_conflicts, (f) => (o(), E(og, {
                key: f.node_id,
                conflict: f
              }, null, 8, ["conflict"]))), 128))
            ]),
            m[7] || (m[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (o(), s("div", lg, [
            m[8] || (m[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (o(!0), s(A, null, X(t.validation.warnings, (f, l) => (o(), s("li", { key: l }, a(f), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => r("cancel"))
        }, {
          default: i(() => [...m[9] || (m[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        p(re, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => r("goBack"))
        }, {
          default: i(() => [...m[10] || (m[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        p(re, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (f) => r("proceed"))
        }, {
          default: i(() => [
            y(a(h.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), rg = /* @__PURE__ */ K(ig, [["__scopeId", "data-v-fefd26ed"]]), dg = { key: 0 }, cg = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: h,
      fetchRemote: g,
      getRemoteSyncStatus: m,
      getPullPreview: f,
      pullFromRemote: l,
      getPushPreview: c,
      pushToRemote: w,
      validateMerge: v
    } = Re(), M = C([]), b = C(null), P = C({}), _ = C(!1), k = C(null), $ = C(""), V = C(!1), T = C(null), R = C(!1), H = C("add"), j = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), Y = U(() => {
      if (!$.value.trim()) return M.value;
      const se = $.value.toLowerCase();
      return M.value.filter(
        (oe) => oe.name.toLowerCase().includes(se) || oe.fetch_url.toLowerCase().includes(se) || oe.push_url.toLowerCase().includes(se)
      );
    });
    function W(se) {
      var oe;
      return ((oe = b.value) == null ? void 0 : oe.remote) === se;
    }
    async function D() {
      _.value = !0, k.value = null;
      try {
        const se = await u();
        M.value = se.remotes, b.value = se.current_branch_tracking || null, await Promise.all(
          se.remotes.map(async (oe) => {
            const Ee = await m(oe.name);
            Ee && (P.value[oe.name] = Ee);
          })
        );
      } catch (se) {
        k.value = se instanceof Error ? se.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function z() {
      H.value = "add", j.value = { name: "", fetchUrl: "", pushUrl: "" }, R.value = !0;
    }
    function O(se) {
      const oe = M.value.find((Ee) => Ee.name === se);
      oe && (H.value = "edit", j.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, R.value = !0);
    }
    async function B(se) {
      try {
        H.value === "add" ? await n(se.name, se.fetchUrl) : await h(se.name, se.fetchUrl, se.pushUrl || void 0), R.value = !1, await D();
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function ae() {
      R.value = !1, j.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ie(se) {
      T.value = se;
      try {
        await g(se);
        const oe = await m(se);
        oe && (P.value[se] = oe);
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Fetch failed";
      } finally {
        T.value = null;
      }
    }
    async function Q(se) {
      if (confirm(`Remove remote "${se}"?`))
        try {
          await r(se), await D();
        } catch (oe) {
          k.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function Z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const N = C("idle"), S = U(() => N.value === "pull_preview"), ne = U(
      () => N.value === "resolving" || N.value === "validating"
    ), ee = U(
      () => N.value === "validation_review" || N.value === "executing"
    ), _e = C(!1), ye = C(null), Te = C(!1), be = C(null), me = C(!1), ze = C(null), he = C(null), Fe = C(/* @__PURE__ */ new Map()), Je = C(null), We = C(null), fe = U(() => ze.value && go(ze.value) ? ze.value : null);
    async function Ge(se) {
      be.value = se, N.value = "pull_preview", me.value = !0, ze.value = null, he.value = null;
      try {
        ze.value = await f(se);
      } catch (oe) {
        he.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        me.value = !1;
      }
    }
    function je() {
      N.value = "idle", ze.value = null, he.value = null, be.value = null;
    }
    async function Ve(se) {
      if (be.value) {
        N.value = "executing", he.value = null;
        try {
          const oe = await l(be.value, se);
          if (oe.rolled_back) {
            he.value = `Pull failed and was rolled back: ${oe.error || "Unknown error"}`, N.value = "pull_preview";
            return;
          }
          x(), N.value = "idle", await D();
        } catch (oe) {
          he.value = oe instanceof Error ? oe.message : "Pull failed", N.value = "pull_preview";
        }
      }
    }
    function dt() {
      fe.value && (N.value = "resolving", We.value = null);
    }
    function ue(se, oe) {
      Fe.value.set(se, { name: se, resolution: oe });
    }
    function Ne() {
      N.value = "pull_preview";
    }
    async function ct() {
      N.value = "validating", We.value = null;
      try {
        const se = Array.from(Fe.value.values());
        Je.value = await v(be.value, se), N.value = "validation_review";
      } catch (se) {
        We.value = se instanceof Error ? se.message : "Validation failed", N.value = "resolving";
      }
    }
    async function tt() {
      N.value = "executing";
      try {
        const se = Array.from(Fe.value.values()), oe = await l(be.value, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: se
        });
        if (oe.rolled_back) {
          he.value = `Pull failed and was rolled back: ${oe.error || "Unknown error"}`, N.value = "pull_preview";
          return;
        }
        x(), N.value = "idle", await D();
      } catch (se) {
        he.value = se instanceof Error ? se.message : "Pull failed", N.value = "validation_review";
      }
    }
    function Se() {
      N.value = "resolving";
    }
    function ut() {
      x(), N.value = "idle";
    }
    function x() {
      Fe.value.clear(), Je.value = null, We.value = null, he.value = null, ze.value = null, be.value = null;
    }
    async function I(se) {
      be.value = se, _e.value = !0, me.value = !0, ye.value = null;
      try {
        ye.value = await c(se);
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        me.value = !1;
      }
    }
    function F() {
      _e.value = !1, ye.value = null, be.value = null;
    }
    async function de(se) {
      if (be.value) {
        Te.value = !0;
        try {
          await w(be.value, se), F(), await D();
        } catch (oe) {
          k.value = oe instanceof Error ? oe.message : "Push failed";
        } finally {
          Te.value = !1;
        }
      }
    }
    function Ce() {
      const se = be.value;
      F(), se && Ge(se);
    }
    return Ie(D), (se, oe) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (Ee) => V.value = !0)
          }, {
            actions: i(() => [
              R.value ? d("", !0) : (o(), E(J, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: i(() => [...oe[3] || (oe[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          R.value ? d("", !0) : (o(), E(kt, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (Ee) => $.value = Ee),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          _.value ? (o(), E(lt, {
            key: 0,
            message: "Loading remotes..."
          })) : k.value ? (o(), E(it, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            R.value ? (o(), E(nv, {
              key: 0,
              mode: H.value,
              "remote-name": j.value.name,
              "fetch-url": j.value.fetchUrl,
              "push-url": j.value.pushUrl,
              onSubmit: B,
              onCancel: ae
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            M.value.length && !R.value ? (o(), E(bt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(M.value.length) + " remote" + a(M.value.length !== 1 ? "s" : "") + " ", 1),
                b.value ? (o(), s("span", dg, " • Tracking: " + a(b.value.remote) + "/" + a(b.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            Y.value.length && !R.value ? (o(), E(xe, {
              key: 2,
              title: "REMOTES",
              count: Y.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(Y.value, (Ee) => {
                  var ot;
                  return o(), E(jm, {
                    key: Ee.name,
                    remote: Ee,
                    "sync-status": P.value[Ee.name],
                    "tracking-branch": W(Ee.name) ? (ot = b.value) == null ? void 0 : ot.branch : void 0,
                    "fetching-remote": T.value,
                    onFetch: ie,
                    onEdit: O,
                    onRemove: Q,
                    onPull: Ge,
                    onPush: I
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !Y.value.length && !R.value ? (o(), E(Ke, {
              key: 3,
              icon: "🌐",
              message: $.value ? `No remotes match '${$.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                p(J, {
                  variant: "primary",
                  onClick: z
                }, {
                  default: i(() => [...oe[4] || (oe[4] = [
                    y(" Add Your First Remote ", -1)
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
      p(at, {
        show: V.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (Ee) => V.value = !1)
      }, {
        content: i(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          p(J, {
            variant: "link",
            onClick: Z
          }, {
            default: i(() => [...oe[6] || (oe[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p(Fv, {
        show: S.value,
        "remote-name": be.value || "",
        preview: ze.value,
        loading: me.value,
        pulling: N.value === "executing",
        error: he.value,
        "conflict-resolutions": Fe.value,
        onClose: je,
        onPull: Ve,
        onOpenConflictResolution: dt
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      p(cf, {
        show: _e.value,
        "remote-name": be.value || "",
        preview: ye.value,
        loading: me.value,
        pushing: Te.value,
        onClose: F,
        onPush: de,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ne.value && fe.value ? (o(), E(Ff, {
        key: 0,
        "workflow-conflicts": fe.value.workflow_conflicts,
        resolutions: Fe.value,
        "operation-type": "pull",
        validating: N.value === "validating",
        error: We.value,
        onClose: Ne,
        onResolve: ue,
        onApply: ct
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      ee.value && Je.value ? (o(), E(rg, {
        key: 1,
        validation: Je.value,
        "operation-type": "pull",
        executing: N.value === "executing",
        onProceed: tt,
        onGoBack: Se,
        onCancel: ut
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), ug = /* @__PURE__ */ K(cg, [["__scopeId", "data-v-02b374b5"]]), mg = { class: "setting-info" }, vg = { class: "setting-label" }, fg = {
  key: 0,
  class: "required-marker"
}, gg = {
  key: 0,
  class: "setting-description"
}, hg = { class: "setting-control" }, pg = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: te(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", mg, [
        e("div", vg, [
          y(a(t.label) + " ", 1),
          t.required ? (o(), s("span", fg, "*")) : d("", !0)
        ]),
        t.description ? (o(), s("div", gg, a(t.description), 1)) : d("", !0)
      ]),
      e("div", hg, [
        ve(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), nt = /* @__PURE__ */ K(pg, [["__scopeId", "data-v-cb5d236c"]]), yg = { class: "toggle" }, wg = ["checked", "disabled"], kg = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", yg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, wg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ft = /* @__PURE__ */ K(kg, [["__scopeId", "data-v-71c0f550"]]), bg = { class: "settings-section" }, _g = { class: "path-setting" }, $g = { class: "path-value" }, Cg = { class: "path-setting" }, xg = { class: "path-value" }, Sg = { class: "settings-section" }, Ig = { class: "settings-section" }, Eg = { class: "settings-section" }, Mg = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Re(), r = C(!1), h = C(null), g = C(null), m = C(null), f = C(null), l = C(""), c = C(""), w = C(!0), v = C(!0), M = C(!1), b = U(() => f.value ? l.value !== (f.value.civitai_api_key || "") : !1);
    async function P() {
      r.value = !0, h.value = null;
      try {
        m.value = await u(), f.value = { ...m.value }, l.value = m.value.civitai_api_key || "", c.value = m.value.huggingface_token || "", w.value = m.value.auto_sync_models, v.value = m.value.confirm_destructive;
        const V = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = V === "true";
      } catch (V) {
        h.value = V instanceof Error ? V.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function _() {
      var V;
      g.value = null;
      try {
        const T = {};
        l.value !== (((V = f.value) == null ? void 0 : V.civitai_api_key) || "") && (T.civitai_api_key = l.value || null), await n(T), await P(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (T) {
        g.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function k() {
      f.value && (l.value = f.value.civitai_api_key || "", c.value = f.value.huggingface_token || "", w.value = f.value.auto_sync_models, v.value = f.value.confirm_destructive, g.value = null);
    }
    function $(V) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(V)), console.log("[ComfyGit] Auto-refresh setting saved:", V);
    }
    return Ie(P), (V, T) => (o(), E(Ue, null, {
      header: i(() => [
        p(Oe, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            p(J, {
              variant: "primary",
              size: "sm",
              disabled: !b.value,
              onClick: _
            }, {
              default: i(() => [...T[5] || (T[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            b.value ? (o(), E(J, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: i(() => [...T[6] || (T[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), E(lt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (o(), E(it, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: P
        }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
          p(xe, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var R, H;
              return [
                e("div", bg, [
                  e("div", _g, [
                    T[7] || (T[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    T[8] || (T[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", $g, a(((R = m.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Cg, [
                    T[9] || (T[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    T[10] || (T[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", xg, a(((H = m.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          p(xe, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Sg, [
                p(nt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    p(Dt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": T[0] || (T[0] = (R) => l.value = R),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(nt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(Dt, {
                      modelValue: c.value,
                      "onUpdate:modelValue": T[1] || (T[1] = (R) => c.value = R),
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
          p(xe, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Ig, [
                p(nt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    p(ft, {
                      modelValue: M.value,
                      "onUpdate:modelValue": [
                        T[2] || (T[2] = (R) => M.value = R),
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
          p(xe, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Eg, [
                p(nt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(ft, {
                      modelValue: w.value,
                      "onUpdate:modelValue": T[3] || (T[3] = (R) => w.value = R),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(nt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    p(ft, {
                      modelValue: v.value,
                      "onUpdate:modelValue": T[4] || (T[4] = (R) => v.value = R),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), E(bt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Ze({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Rg = /* @__PURE__ */ K(Mg, [["__scopeId", "data-v-7861bd35"]]), Tg = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Re(), n = C([]), r = C(!1), h = C(null), g = C(!1), m = C(null), f = U(() => n.value.length === 0 ? [] : n.value.map((c) => ({
      text: `${c.timestamp} - ${c.name} - ${c.level} - ${c.func}:${c.line} - ${c.message}`,
      level: c.level
    })));
    async function l() {
      r.value = !0, h.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (c) {
        h.value = c instanceof Error ? c.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var c;
          (c = m.value) != null && c.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(l), (c, w) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (v) => g.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: r.value
              }, {
                default: i(() => [
                  y(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), E(lt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (o(), E(it, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            n.value.length === 0 ? (o(), E(Ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), s(A, null, X(f.value, (v, M) => (o(), s("div", {
                key: M,
                class: te(`log-line log-level-${v.level.toLowerCase()}`)
              }, a(v.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(at, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (v) => g.value = !1)
      }, {
        content: i(() => [...w[3] || (w[3] = [
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
        actions: i(() => [
          p(J, {
            variant: "primary",
            onClick: w[1] || (w[1] = (v) => g.value = !1)
          }, {
            default: i(() => [...w[4] || (w[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), zg = /* @__PURE__ */ K(Tg, [["__scopeId", "data-v-39f6a756"]]), Lg = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Re(), r = C([]), h = C(!1), g = C(null), m = C(!1), f = C("production"), l = C(null), c = U(() => r.value.length === 0 ? [] : r.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function w() {
      h.value = !0, g.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const v = await n();
          f.value = v.environment || "production";
        } catch {
        }
      } catch (v) {
        g.value = v instanceof Error ? v.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var v;
          (v = l.value) != null && v.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(w), (v, M) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (b) => m.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: h.value
              }, {
                default: i(() => [
                  y(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          h.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (o(), E(it, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            r.value.length === 0 ? (o(), E(Ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), s(A, null, X(c.value, (b, P) => (o(), s("div", {
                key: P,
                class: te(`log-line log-level-${b.level.toLowerCase()}`)
              }, a(b.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(at, {
        show: m.value,
        title: "About Environment Logs",
        onClose: M[2] || (M[2] = (b) => m.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            M[3] || (M[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(f.value), 1),
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
        actions: i(() => [
          p(J, {
            variant: "primary",
            onClick: M[1] || (M[1] = (b) => m.value = !1)
          }, {
            default: i(() => [...M[7] || (M[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ng = /* @__PURE__ */ K(Lg, [["__scopeId", "data-v-4f1e6f72"]]), Dg = { class: "env-title" }, Pg = {
  key: 0,
  class: "current-badge"
}, Ug = {
  key: 0,
  class: "branch-info"
}, Og = /* @__PURE__ */ q({
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
    return (u, n) => (o(), E(Le, {
      status: t.isCurrent ? "synced" : void 0
    }, Pt({
      icon: i(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Dg, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Pg, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Ug, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: i(() => [
        ve(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          p(we, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          p(we, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          p(we, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), E(we, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Bg = /* @__PURE__ */ K(Og, [["__scopeId", "data-v-9231917a"]]), Ag = { class: "env-details" }, Fg = { class: "status-row" }, Vg = {
  key: 0,
  class: "detail-row"
}, Wg = { class: "value mono" }, Gg = {
  key: 1,
  class: "detail-row"
}, jg = { class: "value mono small" }, Hg = { class: "detail-row" }, qg = { class: "value" }, Kg = { class: "detail-row" }, Jg = { class: "value" }, Yg = { class: "detail-row" }, Qg = { class: "value" }, Xg = {
  key: 2,
  class: "section-divider"
}, Zg = {
  key: 3,
  class: "detail-row"
}, eh = { class: "value" }, th = {
  key: 4,
  class: "detail-row"
}, oh = { class: "value" }, sh = { class: "footer-actions" }, nh = /* @__PURE__ */ q({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function r(h) {
      if (!h) return "Unknown";
      try {
        const g = new Date(h), f = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), l = Math.floor(f / 6e4), c = Math.floor(f / 36e5), w = Math.floor(f / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : c < 24 ? `${c} ${c === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, g) => (o(), E(et, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (m) => n("close"))
    }, {
      body: i(() => [
        e("div", Ag, [
          e("div", Fg, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: te(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Vg, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Wg, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (o(), s("div", Gg, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", jg, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Hg, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", qg, a(t.environment.workflow_count), 1)
          ]),
          e("div", Kg, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Jg, a(t.environment.node_count), 1)
          ]),
          e("div", Yg, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Qg, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", Xg)) : d("", !0),
          t.environment.created_at ? (o(), s("div", Zg, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", eh, a(r(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (o(), s("div", th, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", oh, a(r(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", sh, [
          t.canDelete ? (o(), E(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (m) => n("delete", t.environment.name))
          }, {
            default: i(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          p(re, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (m) => n("close"))
          }, {
            default: i(() => [...g[13] || (g[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ah = /* @__PURE__ */ K(nh, [["__scopeId", "data-v-59855453"]]), lh = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ih = "3.12", rh = [
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
], dh = "auto", ch = { class: "create-env-form" }, uh = { class: "form-field" }, mh = { class: "form-field" }, vh = ["value"], fh = { class: "form-field" }, gh = ["disabled"], hh = ["value"], ph = { class: "form-field" }, yh = ["value"], wh = { class: "form-field form-field--checkbox" }, kh = { class: "form-checkbox" }, bh = /* @__PURE__ */ q({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r } = Re(), h = C(""), g = C(ih), m = C("latest"), f = C(dh), l = C(!1), c = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = C(!1), v = C(null);
    function M() {
      const P = h.value.trim();
      if (!P) return;
      const _ = {
        name: P,
        python_version: g.value,
        comfyui_version: m.value,
        torch_backend: f.value,
        switch_after: l.value
      };
      n("create", _);
    }
    async function b() {
      w.value = !0;
      try {
        c.value = await r();
      } catch (P) {
        console.error("Failed to load ComfyUI releases:", P);
      } finally {
        w.value = !1;
      }
    }
    return Ie(async () => {
      var P;
      await Lo(), (P = v.value) == null || P.focus(), b();
    }), (P, _) => (o(), E(et, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: _[6] || (_[6] = (k) => n("close"))
    }, {
      body: i(() => [
        e("div", ch, [
          e("div", uh, [
            _[7] || (_[7] = e("label", { class: "form-label" }, "Name", -1)),
            Xe(e("input", {
              ref_key: "nameInput",
              ref: v,
              "onUpdate:modelValue": _[0] || (_[0] = (k) => h.value = k),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: rt(M, ["enter"])
            }, null, 544), [
              [lo, h.value]
            ])
          ]),
          e("div", mh, [
            _[8] || (_[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            Xe(e("select", {
              "onUpdate:modelValue": _[1] || (_[1] = (k) => g.value = k),
              class: "form-select"
            }, [
              (o(!0), s(A, null, X(ge(lh), (k) => (o(), s("option", {
                key: k,
                value: k
              }, a(k), 9, vh))), 128))
            ], 512), [
              [At, g.value]
            ])
          ]),
          e("div", fh, [
            _[9] || (_[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Xe(e("select", {
              "onUpdate:modelValue": _[2] || (_[2] = (k) => m.value = k),
              class: "form-select",
              disabled: w.value
            }, [
              (o(!0), s(A, null, X(c.value, (k) => (o(), s("option", {
                key: k.tag_name,
                value: k.tag_name
              }, a(k.name), 9, hh))), 128))
            ], 8, gh), [
              [At, m.value]
            ])
          ]),
          e("div", ph, [
            _[10] || (_[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Xe(e("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (k) => f.value = k),
              class: "form-select"
            }, [
              (o(!0), s(A, null, X(ge(rh), (k) => (o(), s("option", {
                key: k,
                value: k
              }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, yh))), 128))
            ], 512), [
              [At, f.value]
            ])
          ]),
          e("div", wh, [
            e("label", kh, [
              Xe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": _[4] || (_[4] = (k) => l.value = k)
              }, null, 512), [
                [io, l.value]
              ]),
              _[11] || (_[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        p(re, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: M
        }, {
          default: i(() => [..._[12] || (_[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(re, {
          variant: "secondary",
          onClick: _[5] || (_[5] = (k) => n("close"))
        }, {
          default: i(() => [..._[13] || (_[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _h = /* @__PURE__ */ K(bh, [["__scopeId", "data-v-a2f13447"]]), $h = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: h } = Re(), g = C([]), m = C(!1), f = C(null), l = C(""), c = C(!1), w = C(!1), v = C(null), M = U(
      () => g.value.find((T) => T.is_current)
    ), b = U(() => {
      if (!l.value.trim()) return g.value;
      const T = l.value.toLowerCase();
      return g.value.filter(
        (R) => {
          var H;
          return R.name.toLowerCase().includes(T) || ((H = R.current_branch) == null ? void 0 : H.toLowerCase().includes(T));
        }
      );
    });
    function P(T) {
      r("create", T), w.value = !1;
    }
    function _() {
      w.value = !0;
    }
    function k(T) {
      v.value = T;
    }
    function $(T) {
      v.value = null, r("delete", T);
    }
    async function V() {
      m.value = !0, f.value = null;
      try {
        g.value = await h();
      } catch (T) {
        f.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Ie(V), u({
      loadEnvironments: V
    }), (T, R) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (H) => c.value = !0)
          }, {
            actions: i(() => [
              p(J, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: i(() => [...R[6] || (R[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              p(J, {
                variant: "secondary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...R[7] || (R[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          p(kt, {
            modelValue: l.value,
            "onUpdate:modelValue": R[1] || (R[1] = (H) => l.value = H),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (o(), E(lt, {
            key: 0,
            message: "Loading environments..."
          })) : f.value ? (o(), E(it, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(A, { key: 2 }, [
            g.value.length ? (o(), E(bt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                M.value ? (o(), s(A, { key: 0 }, [
                  R[8] || (R[8] = y(" • Current: ", -1)),
                  e("strong", null, a(M.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            b.value.length ? (o(), E(xe, {
              key: 1,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: i(() => [
                (o(!0), s(A, null, X(b.value, (H) => (o(), E(Bg, {
                  key: H.name,
                  "environment-name": H.name,
                  "is-current": H.is_current,
                  "current-branch": H.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    H.is_current ? d("", !0) : (o(), E(J, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => T.$emit("switch", H.name)
                    }, {
                      default: i(() => [...R[9] || (R[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => k(H)
                    }, {
                      default: i(() => [...R[10] || (R[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? d("", !0) : (o(), E(Ke, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Pt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  p(J, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: i(() => [...R[11] || (R[11] = [
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
      p(at, {
        show: c.value,
        title: "About Environments",
        onClose: R[3] || (R[3] = (H) => c.value = !1)
      }, {
        content: i(() => [...R[12] || (R[12] = [
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
        actions: i(() => [
          p(J, {
            variant: "secondary",
            onClick: R[2] || (R[2] = (H) => c.value = !1)
          }, {
            default: i(() => [...R[13] || (R[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      v.value ? (o(), E(ah, {
        key: 0,
        environment: v.value,
        "can-delete": g.value.length > 1,
        onClose: R[4] || (R[4] = (H) => v.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      w.value ? (o(), E(_h, {
        key: 1,
        onClose: R[5] || (R[5] = (H) => w.value = !1),
        onCreate: P
      })) : d("", !0)
    ], 64));
  }
}), Ch = /* @__PURE__ */ K($h, [["__scopeId", "data-v-307d9926"]]), xh = { class: "file-path" }, Sh = { class: "file-path-text" }, Ih = ["title"], Eh = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, g) => (o(), s("div", xh, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Sh, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Ih)) : d("", !0)
    ]));
  }
}), Mh = /* @__PURE__ */ K(Eh, [["__scopeId", "data-v-f0982173"]]), Rh = { class: "output-path-input" }, Th = { class: "export-actions" }, zh = {
  key: 1,
  class: "export-warning"
}, Lh = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Re(), n = C(""), r = C(!1), h = C(null), g = C(!1);
    async function m() {
      r.value = !0, h.value = null;
      try {
        const l = await u(n.value || void 0);
        h.value = l;
      } catch (l) {
        h.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function f() {
      var l;
      if ((l = h.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(h.value.path);
        } catch (c) {
          console.error("Failed to copy path:", c);
        }
    }
    return (l, c) => (o(), s(A, null, [
      p(Ue, null, {
        header: i(() => [
          p(Oe, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              p(J, {
                variant: "ghost",
                size: "sm",
                onClick: c[0] || (c[0] = (w) => g.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...c[5] || (c[5] = [
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
        content: i(() => [
          p(xe, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              p(Le, { status: "synced" }, {
                icon: i(() => [...c[6] || (c[6] = [
                  y("📦", -1)
                ])]),
                title: i(() => [...c[7] || (c[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...c[8] || (c[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  p(we, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  p(we, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  p(we, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  p(we, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(xe, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              p(Le, { status: "synced" }, {
                icon: i(() => [...c[9] || (c[9] = [
                  y("📁", -1)
                ])]),
                title: i(() => [...c[10] || (c[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: i(() => [...c[11] || (c[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", Rh, [
                    p(Dt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": c[1] || (c[1] = (w) => n.value = w),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          p(xe, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Th, [
                p(J, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: m
                }, {
                  default: i(() => [
                    c[12] || (c[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    y(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), E(J, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: c[2] || (c[2] = (w) => n.value = "")
                }, {
                  default: i(() => [...c[13] || (c[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), E(xe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              p(Le, {
                status: h.value.status === "success" ? "synced" : "broken"
              }, Pt({
                icon: i(() => [
                  y(a(h.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  y(a(h.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  y(a(h.value.status === "success" ? "Your environment has been exported" : h.value.message), 1)
                ]),
                _: 2
              }, [
                h.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    p(we, { label: "Saved to:" }, {
                      default: i(() => [
                        p(Mh, {
                          path: h.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    h.value.models_without_sources !== void 0 ? (o(), E(we, {
                      key: 0,
                      label: "Models without sources:",
                      value: h.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    h.value.models_without_sources && h.value.models_without_sources > 0 ? (o(), s("div", zh, [...c[14] || (c[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                h.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    p(J, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: i(() => [...c[15] || (c[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    p(J, {
                      variant: "ghost",
                      size: "sm",
                      onClick: c[3] || (c[3] = (w) => h.value = null)
                    }, {
                      default: i(() => [...c[16] || (c[16] = [
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
          })) : d("", !0)
        ]),
        _: 1
      }),
      p(at, {
        show: g.value,
        title: "About Environment Export",
        onClose: c[4] || (c[4] = (w) => g.value = !1)
      }, {
        content: i(() => [...c[17] || (c[17] = [
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
}), Nh = /* @__PURE__ */ K(Lh, [["__scopeId", "data-v-1777a9d5"]]), Dh = { class: "file-input-wrapper" }, Ph = ["accept", "multiple", "disabled"], Uh = /* @__PURE__ */ q({
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
    const r = n, h = C(null);
    function g() {
      var f;
      (f = h.value) == null || f.click();
    }
    function m(f) {
      const l = f.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return u({
      triggerInput: g
    }), (f, l) => (o(), s("div", Dh, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, Ph),
      p(J, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: i(() => [
          ve(f.$slots, "default", {}, () => [
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
}), Oh = /* @__PURE__ */ K(Uh, [["__scopeId", "data-v-cd192091"]]), Bh = {
  key: 0,
  class: "drop-zone-empty"
}, Ah = { class: "drop-zone-text" }, Fh = { class: "drop-zone-primary" }, Vh = { class: "drop-zone-secondary" }, Wh = { class: "drop-zone-actions" }, Gh = {
  key: 1,
  class: "drop-zone-file"
}, jh = { class: "file-info" }, Hh = { class: "file-details" }, qh = { class: "file-name" }, Kh = { class: "file-size" }, Jh = /* @__PURE__ */ q({
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
    const n = u, r = C(!1), h = C(null), g = C(0), m = U(() => h.value !== null), f = U(() => {
      var k;
      return ((k = h.value) == null ? void 0 : k.name) || "";
    }), l = U(() => {
      if (!h.value) return "";
      const k = h.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function c(k) {
      var $;
      g.value++, ($ = k.dataTransfer) != null && $.types.includes("Files") && (r.value = !0);
    }
    function w(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function v() {
      g.value--, g.value === 0 && (r.value = !1);
    }
    function M(k) {
      var V;
      g.value = 0, r.value = !1;
      const $ = (V = k.dataTransfer) == null ? void 0 : V.files;
      $ && $.length > 0 && P($[0]);
    }
    function b(k) {
      k.length > 0 && P(k[0]);
    }
    function P(k) {
      h.value = k, n("fileSelected", k);
    }
    function _() {
      h.value = null, n("clear");
    }
    return (k, $) => (o(), s("div", {
      class: te(["file-drop-zone", { "drop-active": r.value, "has-file": m.value }]),
      onDragenter: $e(c, ["prevent"]),
      onDragover: $e(w, ["prevent"]),
      onDragleave: $e(v, ["prevent"]),
      onDrop: $e(M, ["prevent"])
    }, [
      m.value ? (o(), s("div", Gh, [
        e("div", jh, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Hh, [
            e("div", qh, a(f.value), 1),
            e("div", Kh, a(l.value), 1)
          ])
        ]),
        p(J, {
          variant: "ghost",
          size: "xs",
          onClick: _,
          title: "Remove file"
        }, {
          default: i(() => [...$[2] || ($[2] = [
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
      ])) : (o(), s("div", Bh, [
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
        e("div", Ah, [
          e("p", Fh, a(t.primaryText), 1),
          e("p", Vh, a(t.secondaryText), 1)
        ]),
        e("div", Wh, [
          p(Oh, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: b
          }, {
            default: i(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Yh = /* @__PURE__ */ K(Jh, [["__scopeId", "data-v-e00abbca"]]), Qh = { class: "import-preview" }, Xh = { class: "preview-header" }, Zh = {
  key: 0,
  class: "source-env"
}, ep = { class: "preview-content" }, tp = { class: "preview-section" }, op = { class: "section-header" }, sp = { class: "section-info" }, np = { class: "section-count" }, ap = {
  key: 0,
  class: "item-list"
}, lp = { class: "item-name" }, ip = {
  key: 0,
  class: "item-more"
}, rp = { class: "preview-section" }, dp = { class: "section-header" }, cp = { class: "section-info" }, up = { class: "section-count" }, mp = {
  key: 0,
  class: "item-list"
}, vp = { class: "item-details" }, fp = { class: "item-name" }, gp = { class: "item-meta" }, hp = {
  key: 0,
  class: "item-more"
}, pp = { class: "preview-section" }, yp = { class: "section-header" }, wp = { class: "section-info" }, kp = { class: "section-count" }, bp = {
  key: 0,
  class: "item-list"
}, _p = { class: "item-name" }, $p = {
  key: 0,
  class: "item-more"
}, Cp = {
  key: 0,
  class: "preview-section"
}, xp = { class: "git-info" }, Sp = /* @__PURE__ */ q({
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
    const u = t, n = U(() => u.workflows.length), r = U(() => u.models.length), h = U(() => u.nodes.length);
    function g(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, f) => (o(), s("div", Qh, [
      e("div", Xh, [
        p(Ae, null, {
          default: i(() => [...f[0] || (f[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Zh, [
          f[1] || (f[1] = y(" From: ", -1)),
          p(jt, null, {
            default: i(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", ep, [
        e("div", tp, [
          e("div", op, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", sp, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", np, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", ap, [
            (o(!0), s(A, null, X(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", lp, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", ip, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", rp, [
          e("div", dp, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", cp, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", up, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", mp, [
            (o(!0), s(A, null, X(t.models.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", vp, [
                e("span", fp, a(l.filename), 1),
                e("span", gp, a(g(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", hp, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", pp, [
          e("div", yp, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", wp, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", kp, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", bp, [
            (o(!0), s(A, null, X(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _p, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", $p, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Cp, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", xp, [
            t.gitBranch ? (o(), E(we, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                p(jt, null, {
                  default: i(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), E(we, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                p(co, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Ip = /* @__PURE__ */ K(Sp, [["__scopeId", "data-v-182fe113"]]), Ep = { class: "import-options" }, Mp = { class: "options-container" }, Rp = { class: "option-section" }, Tp = { class: "conflict-options" }, zp = ["value", "checked", "onChange"], Lp = { class: "conflict-content" }, Np = { class: "conflict-label" }, Dp = { class: "conflict-description" }, Pp = { class: "option-section" }, Up = { class: "component-toggles" }, Op = /* @__PURE__ */ q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: u }) {
    const n = u, r = [
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
    return (h, g) => (o(), s("div", Ep, [
      p(Ae, null, {
        default: i(() => [...g[4] || (g[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Mp, [
        e("div", Rp, [
          p(Gt, null, {
            default: i(() => [...g[5] || (g[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Tp, [
            (o(), s(A, null, X(r, (m) => e("label", {
              key: m.value,
              class: te(["conflict-option", { active: t.conflictMode === m.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: t.conflictMode === m.value,
                onChange: (f) => n("update:conflictMode", m.value)
              }, null, 40, zp),
              e("div", Lp, [
                e("span", Np, a(m.label), 1),
                e("span", Dp, a(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Pp, [
          p(Gt, null, {
            default: i(() => [...g[6] || (g[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Up, [
            p(nt, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": g[0] || (g[0] = (m) => n("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(nt, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": g[1] || (g[1] = (m) => n("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(nt, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": g[2] || (g[2] = (m) => n("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(nt, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                p(ft, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": g[3] || (g[3] = (m) => n("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Bp = /* @__PURE__ */ K(Op, [["__scopeId", "data-v-0ec212b0"]]), Ap = {
  key: 0,
  class: "import-empty"
}, Fp = { class: "import-help" }, Vp = {
  key: 1,
  class: "import-configure"
}, Wp = { class: "selected-file-bar" }, Gp = { class: "file-bar-content" }, jp = { class: "file-bar-info" }, Hp = { class: "file-bar-name" }, qp = { class: "file-bar-size" }, Kp = { class: "import-actions" }, Jp = {
  key: 2,
  class: "import-progress"
}, Yp = { class: "progress-content" }, Qp = { class: "progress-info" }, Xp = { class: "progress-title" }, Zp = { class: "progress-detail" }, e1 = { class: "progress-bar" }, t1 = { class: "progress-status" }, o1 = {
  key: 3,
  class: "import-complete"
}, s1 = { class: "complete-message" }, n1 = { class: "complete-title" }, a1 = { class: "complete-details" }, l1 = { class: "complete-actions" }, i1 = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const u = C(null), n = C(!1), r = C(!1), h = C(!1), g = C(""), m = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = C({
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
    }), c = U(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function w(_) {
      u.value = _;
    }
    function v() {
      u.value = null, r.value = !1, h.value = !1, g.value = "";
    }
    function M() {
      v(), n.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function b() {
      if (u.value) {
        n.value = !0, r.value = !1;
        try {
          const _ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of _)
            f.value = k, await new Promise(($) => setTimeout($, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), h.value = !0, g.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (_) {
          h.value = !1, g.value = _ instanceof Error ? _.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function P(_) {
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (_, k) => (o(), E(Ue, null, {
      header: i(() => [
        p(Oe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", Ap, [
          p(Yh, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", Fp, [
            p(Ae, null, {
              default: i(() => [...k[5] || (k[5] = [
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Vp, [
          e("div", Wp, [
            e("div", Gp, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", jp, [
                e("div", Hp, a(u.value.name), 1),
                e("div", qp, a(P(u.value.size)), 1)
              ])
            ]),
            p(J, {
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: i(() => [...k[8] || (k[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          p(Ip, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          p(Bp, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = ($) => m.value.conflictMode = $),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = ($) => m.value.includeWorkflows = $),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = ($) => m.value.includeModels = $),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = ($) => m.value.includeNodes = $),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = ($) => m.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && l.value.models.length > 0 ? (o(), E(gt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", Kp, [
            p(J, {
              variant: "primary",
              size: "md",
              disabled: !c.value,
              onClick: b
            }, {
              default: i(() => [...k[9] || (k[9] = [
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
            p(J, {
              variant: "secondary",
              size: "md",
              onClick: v
            }, {
              default: i(() => [...k[10] || (k[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Jp, [
          e("div", Yp, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Qp, [
              e("div", Xp, a(f.value.message), 1),
              e("div", Zp, a(f.value.detail), 1)
            ])
          ]),
          e("div", e1, [
            e("div", {
              class: "progress-bar-fill",
              style: Ze({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", t1, a(f.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", o1, [
          e("div", {
            class: te(["complete-icon", h.value ? "success" : "error"])
          }, a(h.value ? "✓" : "✕"), 3),
          e("div", s1, [
            e("div", n1, a(h.value ? "Import Successful" : "Import Failed"), 1),
            e("div", a1, a(g.value), 1)
          ]),
          e("div", l1, [
            p(J, {
              variant: "primary",
              size: "md",
              onClick: M
            }, {
              default: i(() => [...k[12] || (k[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), r1 = /* @__PURE__ */ K(i1, [["__scopeId", "data-v-18e18eb5"]]), d1 = { class: "header-info" }, c1 = { class: "commit-hash" }, u1 = {
  key: 0,
  class: "commit-refs"
}, m1 = { class: "commit-message" }, v1 = { class: "commit-date" }, f1 = {
  key: 0,
  class: "loading"
}, g1 = {
  key: 1,
  class: "changes-section"
}, h1 = { class: "stats-row" }, p1 = { class: "stat" }, y1 = { class: "stat insertions" }, w1 = { class: "stat deletions" }, k1 = {
  key: 0,
  class: "change-group"
}, b1 = {
  key: 1,
  class: "change-group"
}, _1 = {
  key: 0,
  class: "version"
}, $1 = {
  key: 2,
  class: "change-group"
}, C1 = { class: "change-item" }, x1 = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Re(), r = C(null), h = C(!0), g = U(() => {
      if (!r.value) return !1;
      const f = r.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), m = U(() => {
      if (!r.value) return !1;
      const f = r.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return Ie(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (f, l) => (o(), E(et, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (c) => f.$emit("close"))
    }, {
      header: i(() => {
        var c, w, v, M;
        return [
          e("div", d1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", c1, a(((c = r.value) == null ? void 0 : c.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (M = (v = r.value) == null ? void 0 : v.refs) != null && M.length ? (o(), s("span", u1, [
              (o(!0), s(A, null, X(r.value.refs, (b) => (o(), s("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : d("", !0)
          ]),
          p(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (b) => f.$emit("close"))
          }, {
            default: i(() => [...l[5] || (l[5] = [
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
      body: i(() => {
        var c, w;
        return [
          e("div", m1, a(((c = r.value) == null ? void 0 : c.message) || t.commit.message), 1),
          e("div", v1, a(((w = r.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (o(), s("div", f1, "Loading details...")) : r.value ? (o(), s("div", g1, [
            e("div", h1, [
              e("span", p1, a(r.value.stats.files_changed) + " files", 1),
              e("span", y1, "+" + a(r.value.stats.insertions), 1),
              e("span", w1, "-" + a(r.value.stats.deletions), 1)
            ]),
            g.value ? (o(), s("div", k1, [
              p(It, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(A, null, X(r.value.changes.workflows.added, (v) => (o(), s("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(v), 1)
              ]))), 128)),
              (o(!0), s(A, null, X(r.value.changes.workflows.modified, (v) => (o(), s("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(v), 1)
              ]))), 128)),
              (o(!0), s(A, null, X(r.value.changes.workflows.deleted, (v) => (o(), s("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(v), 1)
              ]))), 128))
            ])) : d("", !0),
            m.value ? (o(), s("div", b1, [
              p(It, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(A, null, X(r.value.changes.nodes.added, (v) => (o(), s("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(v.name), 1),
                v.version ? (o(), s("span", _1, "(" + a(v.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), s(A, null, X(r.value.changes.nodes.removed, (v) => (o(), s("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(v.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", $1, [
              p(It, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", C1, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (c) => f.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        p(re, {
          variant: "primary",
          onClick: l[2] || (l[2] = (c) => f.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), S1 = /* @__PURE__ */ K(x1, [["__scopeId", "data-v-d256ff6d"]]), I1 = { class: "dialog-message" }, E1 = {
  key: 0,
  class: "dialog-details"
}, M1 = {
  key: 1,
  class: "dialog-warning"
}, R1 = /* @__PURE__ */ q({
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
    return (u, n) => (o(), E(et, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", I1, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", E1, [
          (o(!0), s(A, null, X(t.details, (r, h) => (o(), s("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), s("p", M1, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        p(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), E(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        p(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), T1 = /* @__PURE__ */ K(R1, [["__scopeId", "data-v-3670b9f5"]]), z1 = { class: "base-textarea-wrapper" }, L1 = ["value", "rows", "placeholder", "disabled", "maxlength"], N1 = {
  key: 0,
  class: "base-textarea-count"
}, D1 = /* @__PURE__ */ q({
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
    return (u, n) => (o(), s("div", z1, [
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
      }, null, 40, L1),
      t.showCharCount && t.maxLength ? (o(), s("div", N1, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), oo = /* @__PURE__ */ K(D1, [["__scopeId", "data-v-5516e6fc"]]), P1 = ["checked", "disabled"], U1 = { class: "base-checkbox-box" }, O1 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, B1 = {
  key: 0,
  class: "base-checkbox-label"
}, A1 = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: te(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, P1),
      e("span", U1, [
        t.modelValue ? (o(), s("svg", O1, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      u.$slots.default ? (o(), s("span", B1, [
        ve(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), so = /* @__PURE__ */ K(A1, [["__scopeId", "data-v-bf17c831"]]), F1 = { class: "popover-header" }, V1 = { class: "popover-body" }, W1 = {
  key: 0,
  class: "changes-summary"
}, G1 = {
  key: 0,
  class: "change-item"
}, j1 = {
  key: 1,
  class: "change-item"
}, H1 = {
  key: 2,
  class: "change-item"
}, q1 = {
  key: 3,
  class: "change-item"
}, K1 = {
  key: 4,
  class: "change-item"
}, J1 = {
  key: 1,
  class: "no-changes"
}, Y1 = {
  key: 2,
  class: "loading"
}, Q1 = {
  key: 3,
  class: "issues-error"
}, X1 = { class: "error-header" }, Z1 = { class: "error-title" }, ey = { class: "issues-list" }, ty = { class: "message-section" }, oy = { class: "popover-footer" }, sy = {
  key: 1,
  class: "commit-popover"
}, ny = { class: "popover-header" }, ay = { class: "popover-body" }, ly = {
  key: 0,
  class: "changes-summary"
}, iy = {
  key: 0,
  class: "change-item"
}, ry = {
  key: 1,
  class: "change-item"
}, dy = {
  key: 2,
  class: "change-item"
}, cy = {
  key: 3,
  class: "change-item"
}, uy = {
  key: 4,
  class: "change-item"
}, my = {
  key: 1,
  class: "no-changes"
}, vy = {
  key: 2,
  class: "loading"
}, fy = {
  key: 3,
  class: "issues-error"
}, gy = { class: "error-header" }, hy = { class: "error-title" }, py = { class: "issues-list" }, yy = { class: "message-section" }, wy = { class: "popover-footer" }, ky = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: h } = Re(), g = C(""), m = C(!1), f = C(!1), l = C(null), c = U(() => {
      if (!n.status) return !1;
      const P = n.status.workflows;
      return P.new.length > 0 || P.modified.length > 0 || P.deleted.length > 0 || n.status.has_changes;
    }), w = U(() => {
      var P;
      return (P = n.status) != null && P.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (_) => _.has_issues && (_.sync_state === "new" || _.sync_state === "modified")
      ) : [];
    }), v = U(() => w.value.length > 0), M = U(() => v.value && !f.value);
    async function b() {
      var P, _, k;
      if (!(v.value && !f.value) && !(!c.value || !g.value.trim() || m.value)) {
        m.value = !0, l.value = null;
        try {
          const $ = await h(g.value.trim(), f.value);
          $.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((P = $.summary) == null ? void 0 : P.new) || 0} new, ${((_ = $.summary) == null ? void 0 : _.modified) || 0} modified, ${((k = $.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, g.value = "", f.value = !1, setTimeout(() => r("committed"), 1e3)) : $.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : $.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          l.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (P, _) => t.asModal ? (o(), E(Me, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: _[5] || (_[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: _[4] || (_[4] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", F1, [
            _[11] || (_[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: _[0] || (_[0] = (k) => r("close"))
            }, [..._[10] || (_[10] = [
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
          e("div", V1, [
            t.status && c.value ? (o(), s("div", W1, [
              t.status.workflows.new.length ? (o(), s("div", G1, [
                _[12] || (_[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), s("div", j1, [
                _[13] || (_[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", H1, [
                _[14] || (_[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", q1, [
                _[15] || (_[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", K1, [
                _[16] || (_[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), s("div", J1, " No changes to commit ")) : (o(), s("div", Y1, " Loading... ")),
            v.value ? (o(), s("div", Q1, [
              e("div", X1, [
                _[17] || (_[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Z1, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", ey, [
                (o(!0), s(A, null, X(w.value, (k) => (o(), s("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(k.name), 1),
                  y(": " + a(k.issue_summary), 1)
                ]))), 128))
              ]),
              p(so, {
                modelValue: f.value,
                "onUpdate:modelValue": _[1] || (_[1] = (k) => f.value = k),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [..._[18] || (_[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", ty, [
              p(oo, {
                modelValue: g.value,
                "onUpdate:modelValue": _[2] || (_[2] = (k) => g.value = k),
                placeholder: M.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
                disabled: !c.value || m.value || M.value,
                rows: 3,
                onCtrlEnter: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), s("div", {
              key: 4,
              class: te(["result", l.value.type])
            }, a(l.value.message), 3)) : d("", !0)
          ]),
          e("div", oy, [
            p(re, {
              variant: "secondary",
              onClick: _[3] || (_[3] = (k) => r("close"))
            }, {
              default: i(() => [..._[19] || (_[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(re, {
              variant: f.value ? "danger" : "primary",
              disabled: !c.value || !g.value.trim() || m.value || M.value,
              loading: m.value,
              onClick: b
            }, {
              default: i(() => [
                y(a(m.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", sy, [
      e("div", ny, [
        _[21] || (_[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: _[6] || (_[6] = (k) => r("close"))
        }, [..._[20] || (_[20] = [
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
      e("div", ay, [
        t.status && c.value ? (o(), s("div", ly, [
          t.status.workflows.new.length ? (o(), s("div", iy, [
            _[22] || (_[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), s("div", ry, [
            _[23] || (_[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", dy, [
            _[24] || (_[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", cy, [
            _[25] || (_[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", uy, [
            _[26] || (_[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), s("div", my, " No changes to commit ")) : (o(), s("div", vy, " Loading... ")),
        v.value ? (o(), s("div", fy, [
          e("div", gy, [
            _[27] || (_[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", hy, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", py, [
            (o(!0), s(A, null, X(w.value, (k) => (o(), s("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, a(k.name), 1),
              y(": " + a(k.issue_summary), 1)
            ]))), 128))
          ]),
          p(so, {
            modelValue: f.value,
            "onUpdate:modelValue": _[7] || (_[7] = (k) => f.value = k),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [..._[28] || (_[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", yy, [
          p(oo, {
            modelValue: g.value,
            "onUpdate:modelValue": _[8] || (_[8] = (k) => g.value = k),
            placeholder: M.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || m.value || M.value,
            rows: 3,
            onCtrlEnter: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), s("div", {
          key: 4,
          class: te(["result", l.value.type])
        }, a(l.value.message), 3)) : d("", !0)
      ]),
      e("div", wy, [
        p(re, {
          variant: "secondary",
          onClick: _[9] || (_[9] = (k) => r("close"))
        }, {
          default: i(() => [..._[29] || (_[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p(re, {
          variant: f.value ? "danger" : "primary",
          disabled: !c.value || !g.value.trim() || m.value || M.value,
          loading: m.value,
          onClick: b
        }, {
          default: i(() => [
            y(a(m.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ho = /* @__PURE__ */ K(ky, [["__scopeId", "data-v-d92153de"]]), by = { class: "modal-header" }, _y = { class: "modal-body" }, $y = { class: "switch-message" }, Cy = { class: "switch-details" }, xy = { class: "modal-actions" }, Sy = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), E(Me, { to: "body" }, [
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
          e("div", by, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", _y, [
            e("p", $y, [
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
            e("p", Cy, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", xy, [
            p(J, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(J, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Iy = /* @__PURE__ */ K(Sy, [["__scopeId", "data-v-e9c5253e"]]), Ey = { class: "progress-bar" }, My = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = U(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, h) => (o(), s("div", Ey, [
      e("div", {
        class: te(["progress-fill", t.variant]),
        style: Ze({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ry = /* @__PURE__ */ K(My, [["__scopeId", "data-v-1beb0512"]]), Ty = {
  key: 0,
  class: "modal-overlay"
}, zy = { class: "modal-content" }, Ly = { class: "modal-body" }, Ny = { class: "progress-info" }, Dy = { class: "progress-percentage" }, Py = { class: "progress-state" }, Uy = { class: "switch-steps" }, Oy = { class: "step-icon" }, By = { class: "step-label" }, Ay = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = U(() => {
      const g = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return u.message || g[u.state] || u.state;
    }), r = U(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), h = U(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = g.findIndex((f) => f.state === u.state);
      return g.map((f, l) => {
        let c = "pending", w = "○";
        return l < m ? (c = "completed", w = "✓") : l === m && (c = "active", w = "⟳"), {
          ...f,
          status: c,
          icon: w
        };
      });
    });
    return (g, m) => (o(), E(Me, { to: "body" }, [
      t.show ? (o(), s("div", Ty, [
        e("div", zy, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ly, [
            p(Ry, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ny, [
              e("div", Dy, a(t.progress) + "%", 1),
              e("div", Py, a(n.value), 1)
            ]),
            e("div", Uy, [
              (o(!0), s(A, null, X(h.value, (f) => (o(), s("div", {
                key: f.state,
                class: te(["switch-step", f.status])
              }, [
                e("span", Oy, a(f.icon), 1),
                e("span", By, a(f.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Fy = /* @__PURE__ */ K(Ay, [["__scopeId", "data-v-768a5078"]]), Vy = { class: "modal-header" }, Wy = { class: "modal-body" }, Gy = {
  key: 0,
  class: "node-section"
}, jy = { class: "node-list" }, Hy = {
  key: 1,
  class: "node-section"
}, qy = { class: "node-list" }, Ky = { class: "modal-actions" }, Jy = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), E(Me, { to: "body" }, [
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
          e("div", Vy, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Wy, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Gy, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", jy, [
                (o(!0), s(A, null, X(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Hy, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", qy, [
                (o(!0), s(A, null, X(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Ky, [
            p(J, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(J, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Yy = /* @__PURE__ */ K(Jy, [["__scopeId", "data-v-7cad7518"]]), Qy = { class: "comfygit-panel" }, Xy = { class: "panel-header" }, Zy = { class: "header-left" }, ew = {
  key: 0,
  class: "header-info"
}, tw = { class: "header-actions" }, ow = { class: "env-switcher" }, sw = {
  key: 0,
  class: "header-info"
}, nw = { class: "branch-name" }, aw = { class: "panel-main" }, lw = { class: "sidebar" }, iw = { class: "sidebar-section" }, rw = { class: "sidebar-section" }, dw = { class: "sidebar-section" }, cw = { class: "content-area" }, uw = {
  key: 0,
  class: "error-message"
}, mw = {
  key: 1,
  class: "loading"
}, vw = {
  key: 4,
  class: "dialog-overlay"
}, fw = { class: "dialog-content create-progress-dialog" }, gw = { class: "dialog-body create-progress-body" }, hw = { class: "create-progress-message" }, pw = { class: "dialog-content env-selector-dialog" }, yw = { class: "dialog-header" }, ww = { class: "dialog-body" }, kw = { class: "env-list" }, bw = { class: "env-info" }, _w = { class: "env-name-row" }, $w = { class: "env-indicator" }, Cw = { class: "env-name" }, xw = {
  key: 0,
  class: "env-branch"
}, Sw = {
  key: 1,
  class: "current-label"
}, Iw = { class: "env-stats" }, Ew = ["onClick"], Mw = { class: "toast-container" }, Rw = { class: "toast-icon" }, Tw = { class: "toast-message" }, zw = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: h,
      getBranches: g,
      checkout: m,
      createBranch: f,
      switchBranch: l,
      deleteBranch: c,
      getEnvironments: w,
      switchEnvironment: v,
      getSwitchProgress: M,
      createEnvironment: b,
      getCreateProgress: P,
      deleteEnvironment: _,
      syncEnvironmentManually: k,
      repairWorkflowModels: $
    } = Re(), V = uo(), T = C(null), R = C([]), H = C([]), j = C([]), Y = U(() => j.value.find((G) => G.is_current)), W = C(!1), D = C(null), z = C(null), O = C(!1), B = C(null), ae = C(null), ie = C(null), Q = C(!1), Z = C(!1), N = C(""), S = C({ state: "idle", progress: 0, message: "" });
    let ne = null, ee = null;
    const _e = C(!1), ye = C({ state: "idle", message: "" }), Te = C(null);
    let be = null;
    const me = C("status"), ze = C("this-env");
    function he(G, L) {
      me.value = G, ze.value = L;
    }
    function Fe(G) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      le && he(le.view, le.section);
    }
    function Je() {
      he("branches", "this-env");
    }
    function We() {
      n("close"), setTimeout(() => {
        var L;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const le of G)
          if (((L = le.textContent) == null ? void 0 : L.trim()) === "Manager") {
            le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const fe = C(null), Ge = C(!1), je = C(!1), Ve = C([]);
    let dt = 0;
    function ue(G, L = "info", le = 3e3) {
      const ke = ++dt;
      return Ve.value.push({ id: ke, message: G, type: L }), le > 0 && setTimeout(() => {
        Ve.value = Ve.value.filter((De) => De.id !== ke);
      }, le), ke;
    }
    function Ne(G) {
      Ve.value = Ve.value.filter((L) => L.id !== G);
    }
    function ct(G) {
      switch (G) {
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
    const tt = U(() => {
      if (!T.value) return "neutral";
      const G = T.value.workflows, L = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || T.value.has_changes;
      return T.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    U(() => T.value ? tt.value === "success" ? "All synced" : tt.value === "warning" ? "Uncommitted changes" : tt.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      W.value = !0, D.value = null;
      try {
        const [G, L, le, ke] = await Promise.all([
          r(!0),
          h(),
          g(),
          w()
        ]);
        T.value = G, R.value = L.commits, H.value = le.branches, j.value = ke, n("statusUpdate", G), B.value && await B.value.loadWorkflows(!0);
      } catch (G) {
        D.value = G instanceof Error ? G.message : "Failed to load status", T.value = null, R.value = [], H.value = [];
      } finally {
        W.value = !1;
      }
    }
    function ut(G) {
      z.value = G;
    }
    async function x(G) {
      var le;
      z.value = null;
      const L = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      fe.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((le = G.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: L ? Zt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var Pe;
          fe.value = null, se();
          const ke = ue(`Checking out ${G.short_hash || ((Pe = G.hash) == null ? void 0 : Pe.slice(0, 7))}...`, "info", 0), De = await m(G.hash, L);
          Ne(ke), De.status === "success" ? ue("Restarting ComfyUI...", "success") : ue(De.message || "Checkout failed", "error");
        }
      };
    }
    async function I(G) {
      const L = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      fe.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: L ? Zt() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, se();
          const le = ue(`Switching to ${G}...`, "info", 0), ke = await l(G, L);
          Ne(le), ke.status === "success" ? ue("Restarting ComfyUI...", "success") : ue(ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function F(G) {
      const L = ue(`Creating branch ${G}...`, "info", 0), le = await f(G);
      Ne(L), le.status === "success" ? (ue(`Branch "${G}" created`, "success"), await Se()) : ue(le.message || "Failed to create branch", "error");
    }
    async function de(G, L = !1) {
      const le = async (ke) => {
        var Pe;
        const De = ue(`Deleting branch ${G}...`, "info", 0);
        try {
          const ce = await c(G, ke);
          Ne(De), ce.status === "success" ? (ue(`Branch "${G}" deleted`, "success"), await Se()) : (Pe = ce.message) != null && Pe.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await le(!0);
            }
          } : ue(ce.message || "Failed to delete branch", "error");
        } catch (ce) {
          Ne(De);
          const Ot = ce instanceof Error ? ce.message : "Failed to delete branch";
          Ot.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await le(!0);
            }
          } : ue(Ot, "error");
        }
      };
      fe.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, await le(L);
        }
      };
    }
    async function Ce(G) {
      z.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const le = ue(`Creating branch ${L}...`, "info", 0), ke = await f(L, G.hash);
        Ne(le), ke.status === "success" ? (ue(`Branch "${L}" created from ${G.short_hash}`, "success"), await Se()) : ue(ke.message || "Failed to create branch", "error");
      }
    }
    function se() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function oe() {
      fe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          fe.value = null, se(), ue("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ee() {
      fe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          fe.value = null, ue("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ot(G) {
      O.value = !1, N.value = G, Q.value = !0;
    }
    async function Tt() {
      Q.value = !1, Z.value = !0, se(), S.value = {
        progress: 10,
        state: zt(10),
        message: Lt(10)
      };
      try {
        await v(N.value), bo(), _o();
      } catch (G) {
        mt(), Z.value = !1, ue(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), S.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function zt(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function Lt(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[zt(G)] || "";
    }
    function bo() {
      if (ee) return;
      let G = 10;
      const L = 60, le = 5e3, ke = 100, De = (L - G) / (le / ke);
      ee = window.setInterval(() => {
        if (G += De, G >= L && (G = L, mt()), S.value.progress < L) {
          const Pe = Math.floor(G);
          S.value = {
            progress: Pe,
            state: zt(Pe),
            message: Lt(Pe)
          };
        }
      }, ke);
    }
    function mt() {
      ee && (clearInterval(ee), ee = null);
    }
    function _o() {
      ne || (ne = window.setInterval(async () => {
        try {
          let G = await V.getStatus();
          if ((!G || G.state === "idle") && (G = await M()), !G)
            return;
          const L = G.progress || 0;
          L >= 60 && mt();
          const le = Math.max(L, S.value.progress), ke = G.state && G.state !== "idle" && G.state !== "unknown", De = ke ? G.state : zt(le), Pe = ke && G.message || Lt(le);
          S.value = {
            state: De,
            progress: le,
            message: Pe
          }, G.state === "complete" ? (mt(), Ut(), Z.value = !1, ue(`✓ Switched to ${N.value}`, "success"), await Se(), N.value = "") : G.state === "rolled_back" ? (mt(), Ut(), Z.value = !1, ue("Switch failed, restored previous environment", "warning"), N.value = "") : G.state === "critical_failure" && (mt(), Ut(), Z.value = !1, ue(`Critical error during switch: ${G.message}`, "error"), N.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Ut() {
      mt(), ne && (clearInterval(ne), ne = null);
    }
    function $o() {
      Q.value = !1, N.value = "";
    }
    async function Co() {
      Ge.value = !1, await Se(), ue("✓ Changes committed", "success");
    }
    async function xo() {
      je.value = !1;
      const G = ue("Syncing environment...", "info", 0);
      try {
        const L = await k("skip", !0);
        if (Ne(G), L.status === "success") {
          const le = [];
          L.nodes_installed.length && le.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && le.push(`${L.nodes_removed.length} removed`);
          const ke = le.length ? `: ${le.join(", ")}` : "";
          ue(`✓ Environment synced${ke}`, "success"), await Se();
        } else {
          const le = L.errors.length ? L.errors.join("; ") : L.message;
          ue(`Sync failed: ${le}`, "error");
        }
      } catch (L) {
        Ne(G), ue(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function So(G) {
      var L;
      try {
        const le = await $(G);
        le.failed.length === 0 ? ue(`✓ Repaired ${le.success} workflow${le.success === 1 ? "" : "s"}`, "success") : ue(`Repaired ${le.success}, failed: ${le.failed.length}`, "warning"), await Se();
      } catch (le) {
        ue(`Repair failed: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
      } finally {
        (L = ie.value) == null || L.resetRepairingState();
      }
    }
    async function Io(G) {
      Te.value = G, _e.value = !0, ye.value = { state: "creating", message: `Creating environment '${G.name}'...` };
      try {
        const L = await b(G);
        L.status === "started" ? Eo() : L.status === "error" && (_e.value = !1, ue(`Failed to create environment: ${L.message}. Check debug logs for details.`, "error"), Te.value = null);
      } catch (L) {
        _e.value = !1, ue(`Error creating environment: ${L instanceof Error ? L.message : "Unknown error"}. Check debug logs.`, "error"), Te.value = null;
      }
    }
    function Eo() {
      be || (be = window.setInterval(async () => {
        var G;
        try {
          const L = await P();
          ye.value = { state: L.state, message: L.message }, L.state === "complete" ? (Xt(), _e.value = !1, ue(`✓ Environment '${L.environment_name}' created`, "success"), await Se(), ae.value && await ae.value.loadEnvironments(), (G = Te.value) != null && G.switch_after && L.environment_name && await ot(L.environment_name), Te.value = null) : L.state === "error" && (Xt(), _e.value = !1, ue(`Failed to create environment: ${L.error || L.message}. Check debug logs.`, "error"), Te.value = null);
        } catch (L) {
          console.error("Failed to poll create progress:", L);
        }
      }, 2e3));
    }
    function Xt() {
      be && (clearInterval(be), be = null);
    }
    async function Mo(G) {
      var L;
      if (((L = Y.value) == null ? void 0 : L.name) === G) {
        ue("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      fe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          fe.value = null;
          try {
            const le = await _(G);
            le.status === "success" ? (ue(`Environment "${G}" deleted`, "success"), await Se(), ae.value && await ae.value.loadEnvironments()) : ue(le.message || "Failed to delete environment", "error");
          } catch (le) {
            ue(`Error deleting environment: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Zt() {
      if (!T.value) return [];
      const G = [], L = T.value.workflows;
      return L.new.length && G.push(`${L.new.length} new workflow(s)`), L.modified.length && G.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && G.push(`${L.deleted.length} deleted workflow(s)`), G;
    }
    return Ie(Se), (G, L) => {
      var le, ke, De, Pe;
      return o(), s("div", Qy, [
        e("div", Xy, [
          e("div", Zy, [
            L[27] || (L[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            T.value ? (o(), s("div", ew)) : d("", !0)
          ]),
          e("div", tw, [
            e("button", {
              class: te(["icon-btn", { spinning: W.value }]),
              onClick: Se,
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
              onClick: L[0] || (L[0] = (ce) => n("close")),
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
        e("div", ow, [
          e("div", { class: "env-switcher-header" }, [
            L[30] || (L[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: oe
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Ee
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: L[1] || (L[1] = (ce) => he("environments", "all-envs"))
          }, [
            T.value ? (o(), s("div", sw, [
              e("span", null, a(((le = Y.value) == null ? void 0 : le.name) || ((ke = T.value) == null ? void 0 : ke.environment) || "Loading..."), 1),
              e("span", nw, "(" + a(T.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            L[31] || (L[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", aw, [
          e("div", lw, [
            e("div", iw, [
              L[32] || (L[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "status" && ze.value === "this-env" }]),
                onClick: L[2] || (L[2] = (ce) => he("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "workflows" }]),
                onClick: L[3] || (L[3] = (ce) => he("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "models-env" }]),
                onClick: L[4] || (L[4] = (ce) => he("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "branches" }]),
                onClick: L[5] || (L[5] = (ce) => he("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "history" }]),
                onClick: L[6] || (L[6] = (ce) => he("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "nodes" }]),
                onClick: L[7] || (L[7] = (ce) => he("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "debug-env" }]),
                onClick: L[8] || (L[8] = (ce) => he("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            L[35] || (L[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", rw, [
              L[33] || (L[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "environments" }]),
                onClick: L[9] || (L[9] = (ce) => he("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "model-index" }]),
                onClick: L[10] || (L[10] = (ce) => he("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "settings" }]),
                onClick: L[11] || (L[11] = (ce) => he("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "debug-workspace" }]),
                onClick: L[12] || (L[12] = (ce) => he("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            L[36] || (L[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", dw, [
              L[34] || (L[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "export" }]),
                onClick: L[13] || (L[13] = (ce) => he("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "import" }]),
                onClick: L[14] || (L[14] = (ce) => he("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: te(["sidebar-item", { active: me.value === "remotes" }]),
                onClick: L[15] || (L[15] = (ce) => he("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", cw, [
            D.value ? (o(), s("div", uw, a(D.value), 1)) : !T.value && me.value === "status" ? (o(), s("div", mw, " Loading status... ")) : (o(), s(A, { key: 2 }, [
              me.value === "status" ? (o(), E(la, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: T.value,
                onSwitchBranch: Je,
                onCommitChanges: L[16] || (L[16] = (ce) => Ge.value = !0),
                onSyncEnvironment: L[17] || (L[17] = (ce) => je.value = !0),
                onViewWorkflows: L[18] || (L[18] = (ce) => he("workflows", "this-env")),
                onViewHistory: L[19] || (L[19] = (ce) => he("history", "this-env")),
                onViewDebug: L[20] || (L[20] = (ce) => he("debug-env", "this-env")),
                onRepairMissingModels: So
              }, null, 8, ["status"])) : me.value === "workflows" ? (o(), E(iu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: B,
                onRefresh: Se
              }, null, 512)) : me.value === "models-env" ? (o(), E(Wu, {
                key: 2,
                onNavigate: Fe
              })) : me.value === "branches" ? (o(), E(ba, {
                key: 3,
                branches: H.value,
                current: ((De = T.value) == null ? void 0 : De.branch) || null,
                onSwitch: I,
                onCreate: F,
                onDelete: de
              }, null, 8, ["branches", "current"])) : me.value === "history" ? (o(), E(za, {
                key: 4,
                commits: R.value,
                onSelect: ut,
                onCheckout: x
              }, null, 8, ["commits"])) : me.value === "nodes" ? (o(), E(Tm, {
                key: 5,
                onOpenNodeManager: We
              })) : me.value === "debug-env" ? (o(), E(Ng, { key: 6 })) : me.value === "environments" ? (o(), E(Ch, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ae,
                onSwitch: ot,
                onCreate: Io,
                onDelete: Mo
              }, null, 512)) : me.value === "model-index" ? (o(), E(dm, {
                key: 8,
                onRefresh: Se
              })) : me.value === "settings" ? (o(), E(Rg, { key: 9 })) : me.value === "debug-workspace" ? (o(), E(zg, { key: 10 })) : me.value === "export" ? (o(), E(Nh, { key: 11 })) : me.value === "import" ? (o(), E(r1, { key: 12 })) : me.value === "remotes" ? (o(), E(ug, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        z.value ? (o(), E(S1, {
          key: 0,
          commit: z.value,
          onClose: L[21] || (L[21] = (ce) => z.value = null),
          onCheckout: x,
          onCreateBranch: Ce
        }, null, 8, ["commit"])) : d("", !0),
        fe.value ? (o(), E(T1, {
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
          onCancel: L[22] || (L[22] = (ce) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        p(Iy, {
          show: Q.value,
          "from-environment": ((Pe = Y.value) == null ? void 0 : Pe.name) || "unknown",
          "to-environment": N.value,
          onConfirm: Tt,
          onClose: $o
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ge.value && T.value ? (o(), E(ho, {
          key: 2,
          status: T.value,
          "as-modal": !0,
          onClose: L[23] || (L[23] = (ce) => Ge.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : d("", !0),
        je.value && T.value ? (o(), E(Yy, {
          key: 3,
          show: je.value,
          "mismatch-details": {
            missing_nodes: T.value.comparison.missing_nodes,
            extra_nodes: T.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: L[24] || (L[24] = (ce) => je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        p(Fy, {
          show: Z.value,
          state: S.value.state,
          progress: S.value.progress,
          message: S.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        _e.value ? (o(), s("div", vw, [
          e("div", fw, [
            L[39] || (L[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", gw, [
              L[37] || (L[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", hw, a(ye.value.message), 1),
              L[38] || (L[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : d("", !0),
        O.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: L[26] || (L[26] = $e((ce) => O.value = !1, ["self"]))
        }, [
          e("div", pw, [
            e("div", yw, [
              L[41] || (L[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[25] || (L[25] = (ce) => O.value = !1)
              }, [...L[40] || (L[40] = [
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
            e("div", ww, [
              L[42] || (L[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", kw, [
                (o(!0), s(A, null, X(j.value, (ce) => (o(), s("div", {
                  key: ce.name,
                  class: te(["env-item", { current: ce.is_current }])
                }, [
                  e("div", bw, [
                    e("div", _w, [
                      e("span", $w, a(ce.is_current ? "●" : "○"), 1),
                      e("span", Cw, a(ce.name), 1),
                      ce.current_branch ? (o(), s("span", xw, "(" + a(ce.current_branch) + ")", 1)) : d("", !0),
                      ce.is_current ? (o(), s("span", Sw, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Iw, a(ce.workflow_count) + " workflows • " + a(ce.node_count) + " nodes ", 1)
                  ]),
                  ce.is_current ? d("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ot) => ot(ce.name)
                  }, " SWITCH ", 8, Ew))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", Mw, [
          p(No, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(A, null, X(Ve.value, (ce) => (o(), s("div", {
                key: ce.id,
                class: te(["toast", ce.type])
              }, [
                e("span", Rw, a(ct(ce.type)), 1),
                e("span", Tw, a(ce.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Lw = /* @__PURE__ */ K(zw, [["__scopeId", "data-v-b4cb235d"]]), Nw = { class: "item-header" }, Dw = { class: "item-info" }, Pw = { class: "filename" }, Uw = { class: "metadata" }, Ow = { class: "size" }, Bw = {
  key: 0,
  class: "type"
}, Aw = { class: "item-actions" }, Fw = {
  key: 0,
  class: "progress-section"
}, Vw = { class: "progress-bar" }, Ww = { class: "progress-stats" }, Gw = { class: "downloaded" }, jw = { class: "speed" }, Hw = {
  key: 0,
  class: "eta"
}, qw = {
  key: 1,
  class: "status-msg paused"
}, Kw = {
  key: 2,
  class: "status-msg queued"
}, Jw = {
  key: 3,
  class: "status-msg completed"
}, Yw = {
  key: 4,
  class: "status-msg failed"
}, Qw = {
  key: 0,
  class: "retries"
}, Xw = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(m) {
      if (m === 0) return "?";
      const f = m / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(m) {
      return m === 0 ? "-" : `${(m / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(m) {
      if (m < 60) return `${Math.round(m)}s`;
      const f = Math.floor(m / 60);
      return f < 60 ? `${f}m` : `${Math.floor(f / 60)}h ${f % 60}m`;
    }
    return (m, f) => (o(), s("div", {
      class: te(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Nw, [
        e("div", Dw, [
          e("div", Pw, a(t.item.filename), 1),
          e("div", Uw, [
            e("span", Ow, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Bw, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Aw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: f[0] || (f[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: f[1] || (f[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: f[2] || (f[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: f[3] || (f[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Fw, [
        e("div", Vw, [
          e("div", {
            class: "progress-fill",
            style: Ze({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Ww, [
          e("span", Gw, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", jw, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Hw, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", qw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Kw, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Jw, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Yw, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Qw, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ct = /* @__PURE__ */ K(Xw, [["__scopeId", "data-v-2110df65"]]), Zw = { class: "queue-title" }, e0 = { class: "count" }, t0 = { class: "queue-actions" }, o0 = { class: "action-label" }, s0 = {
  key: 0,
  class: "overall-progress"
}, n0 = { class: "progress-bar" }, a0 = {
  key: 0,
  class: "current-mini"
}, l0 = { class: "filename" }, i0 = { class: "speed" }, r0 = {
  key: 1,
  class: "queue-content"
}, d0 = {
  key: 0,
  class: "section"
}, c0 = {
  key: 1,
  class: "section"
}, u0 = { class: "section-header" }, m0 = { class: "section-label paused" }, v0 = { class: "items-list" }, f0 = {
  key: 2,
  class: "section"
}, g0 = { class: "section-header" }, h0 = { class: "section-label" }, p0 = { class: "items-list" }, y0 = {
  key: 3,
  class: "section"
}, w0 = { class: "section-header" }, k0 = { class: "section-label" }, b0 = { class: "items-list" }, _0 = {
  key: 4,
  class: "section"
}, $0 = { class: "section-header" }, C0 = { class: "section-label failed" }, x0 = { class: "items-list" }, S0 = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: h,
      failedItems: g,
      pausedItems: m,
      hasItems: f,
      activeCount: l,
      cancelDownload: c,
      retryDownload: w,
      resumeDownload: v,
      resumeAllPaused: M,
      removeItem: b,
      clearCompleted: P
    } = Rt(), _ = C(!1);
    let k = null;
    wt(
      () => ({
        active: l.value,
        failed: g.value.length,
        paused: m.value.length,
        completed: h.value.length
      }),
      (R, H) => {
        k && (clearTimeout(k), k = null);
        const j = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, Y = H && (H.active > 0 || H.paused > 0);
        j && Y && (k = setTimeout(() => {
          P(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = U(() => {
      var j;
      if (u.items.length === 0) return 0;
      const R = h.value.length, H = ((j = n.value) == null ? void 0 : j.progress) || 0;
      return Math.round((R + H / 100) / u.items.length * 100);
    });
    function V(R) {
      c(R);
    }
    function T(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, H) => (o(), E(Me, { to: "body" }, [
      ge(f) ? (o(), s("div", {
        key: 0,
        class: te(["model-download-queue", { minimized: !_.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (j) => _.value = !_.value)
        }, [
          e("div", Zw, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", e0, "(" + a(ge(l)) + "/" + a(ge(u).items.length) + ")", 1)
          ]),
          e("div", t0, [
            e("span", o0, a(_.value ? "minimize" : "expand"), 1)
          ])
        ]),
        _.value ? (o(), s("div", r0, [
          ge(n) ? (o(), s("div", d0, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            p(Ct, {
              item: ge(n),
              onCancel: H[1] || (H[1] = (j) => V(ge(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          ge(m).length > 0 ? (o(), s("div", c0, [
            e("div", u0, [
              e("span", m0, "Paused (" + a(ge(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...j) => ge(M) && ge(M)(...j))
              }, "Resume All")
            ]),
            e("div", v0, [
              (o(!0), s(A, null, X(ge(m), (j) => (o(), E(Ct, {
                key: j.id,
                item: j,
                onResume: (Y) => ge(v)(j.id),
                onRemove: (Y) => ge(b)(j.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          ge(r).length > 0 ? (o(), s("div", f0, [
            e("div", g0, [
              e("span", h0, "Queued (" + a(ge(r).length) + ")", 1)
            ]),
            e("div", p0, [
              (o(!0), s(A, null, X(ge(r), (j) => (o(), E(Ct, {
                key: j.id,
                item: j,
                onCancel: (Y) => V(j.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          ge(h).length > 0 ? (o(), s("div", y0, [
            e("div", w0, [
              e("span", k0, "Completed (" + a(ge(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...j) => ge(P) && ge(P)(...j))
              }, "Clear")
            ]),
            e("div", b0, [
              (o(!0), s(A, null, X(ge(h).slice(0, 3), (j) => (o(), E(Ct, {
                key: j.id,
                item: j,
                onRemove: (Y) => ge(b)(j.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          ge(g).length > 0 ? (o(), s("div", _0, [
            e("div", $0, [
              e("span", C0, "Failed (" + a(ge(g).length) + ")", 1)
            ]),
            e("div", x0, [
              (o(!0), s(A, null, X(ge(g), (j) => (o(), E(Ct, {
                key: j.id,
                item: j,
                onRetry: (Y) => ge(w)(j.id),
                onRemove: (Y) => ge(b)(j.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (o(), s("div", s0, [
          e("div", n0, [
            e("div", {
              class: "progress-fill",
              style: Ze({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ge(n) ? (o(), s("div", a0, [
            e("span", l0, a(ge(n).filename), 1),
            e("span", i0, a(T(ge(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), I0 = /* @__PURE__ */ K(S0, [["__scopeId", "data-v-60751cfa"]]), E0 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', M0 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', R0 = {
  comfy: E0,
  phosphor: M0
}, Yt = "comfy", po = "comfygit-theme";
let vt = null, yo = Yt;
function T0() {
  try {
    const t = localStorage.getItem(po);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Yt;
}
function wo(t = Yt) {
  vt && vt.remove(), vt = document.createElement("style"), vt.id = "comfygit-theme-styles", vt.setAttribute("data-theme", t), vt.textContent = R0[t], document.head.appendChild(vt), document.body.setAttribute("data-comfygit-theme", t), yo = t;
  try {
    localStorage.setItem(po, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function z0() {
  return yo;
}
function L0(t) {
  wo(t);
}
const Qt = document.createElement("link");
Qt.rel = "stylesheet";
Qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qt);
const N0 = T0();
wo(N0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), L0(t);
  },
  getTheme: () => {
    const t = z0();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let He = null, Be = null, Et = null, xt = null, no = null;
const yt = C(null);
async function Nt() {
  var t;
  if (!((t = pt) != null && t.api)) return null;
  try {
    const u = await pt.api.fetchApi("/v2/comfygit/status");
    u.ok && (yt.value = await u.json());
  } catch {
  }
}
function D0() {
  if (!yt.value) return !1;
  const t = yt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || yt.value.has_changes;
}
function P0() {
  He && He.remove(), He = document.createElement("div"), He.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", He.appendChild(t), He.addEventListener("click", (r) => {
    r.target === He && Wt();
  });
  const u = (r) => {
    r.key === "Escape" && (Wt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), qt({
    render: () => Kt(Lw, {
      onClose: Wt,
      onStatusUpdate: (r) => {
        yt.value = r, Mt();
      }
    })
  }).mount(t), document.body.appendChild(He);
}
function Wt() {
  He && (He.remove(), He = null);
}
function U0(t) {
  St(), Be = document.createElement("div"), Be.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Be.style.position = "fixed", Be.style.top = `${u.bottom + 8}px`, Be.style.right = `${window.innerWidth - u.right}px`, Be.style.zIndex = "10001";
  const n = (h) => {
    Be && !Be.contains(h.target) && h.target !== t && (St(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (h) => {
    h.key === "Escape" && (St(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Et = qt({
    render: () => Kt(ho, {
      status: yt.value,
      onClose: St,
      onCommitted: () => {
        St(), Nt().then(Mt);
      }
    })
  }), Et.mount(Be), document.body.appendChild(Be);
}
function St() {
  Et && (Et.unmount(), Et = null), Be && (Be.remove(), Be = null);
}
function O0() {
  xt || (xt = document.createElement("div"), xt.className = "comfygit-download-queue-root", no = qt({
    render: () => Kt(I0)
  }), no.mount(xt), document.body.appendChild(xt), console.log("[ComfyGit] Model download queue mounted"));
}
let st = null;
function Mt() {
  if (!st) return;
  const t = st.querySelector(".commit-indicator");
  t && (t.style.display = D0() ? "block" : "none");
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
pt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = P0, st = document.createElement("button"), st.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", st.innerHTML = 'Commit <span class="commit-indicator"></span>', st.title = "Quick Commit", st.onclick = () => U0(st), t.appendChild(u), t.appendChild(st), (g = (h = pt.menu) == null ? void 0 : h.settingsGroup) != null && g.element && (pt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), O0();
    const { loadPendingDownloads: n } = Rt();
    n(), await Nt(), Mt(), setInterval(async () => {
      await Nt(), Mt();
    }, 3e4);
    const r = pt.api;
    if (r) {
      let m = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((c) => {
          (c.startsWith("workflow:") || c.startsWith("Comfy.OpenWorkflowsPaths:") || c.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(c);
        }), window.location.reload();
      }, f = function() {
        const c = document.createElement("div");
        c.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", c.appendChild(w);
        const v = document.createElement("button");
        v.textContent = "Refresh", v.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, v.onmouseover = () => v.style.background = "var(--comfy-input-bg)", v.onmouseout = () => v.style.background = "var(--comfy-menu-bg)", v.onclick = () => m(), c.appendChild(v);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => c.remove(), c.appendChild(M), document.body.appendChild(c), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (c) => {
        const { change_type: w, workflow_name: v } = c.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${v}`), await Nt(), Mt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (c) => {
        const w = c.detail != null;
        w && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : f()), l = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
