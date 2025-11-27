import { app as gt } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as fe, createBlock as I, resolveDynamicComponent as Ht, normalizeClass as oe, withCtx as i, toDisplayString as a, createVNode as g, createTextVNode as w, computed as P, Fragment as W, renderList as Z, normalizeStyle as Qe, ref as C, onMounted as Ie, watch as Rt, Teleport as Le, withModifiers as xe, Transition as $s, createSlots as Dt, withKeys as nt, onUnmounted as Cs, reactive as os, readonly as xs, unref as ye, withDirectives as mt, vModelText as ns, nextTick as Ss, vModelSelect as Ft, vModelCheckbox as Is, TransitionGroup as Es, createApp as qt, h as Kt } from "vue";
const Ms = { class: "panel-layout" }, zs = {
  key: 0,
  class: "panel-layout-header"
}, Ls = {
  key: 1,
  class: "panel-layout-search"
}, Ts = { class: "panel-layout-content" }, Rs = {
  key: 2,
  class: "panel-layout-footer"
}, Ds = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (s(), o("div", Ms, [
      u.$slots.header ? (s(), o("div", zs, [
        fe(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (s(), o("div", Ls, [
        fe(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Ts, [
        fe(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (s(), o("div", Rs, [
        fe(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, h] of u)
    n[r] = h;
  return n;
}, De = /* @__PURE__ */ J(Ds, [["__scopeId", "data-v-21565df9"]]), Ns = {
  key: 0,
  class: "panel-title-prefix"
}, Os = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Us = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (s(), I(Ht(`h${t.level}`), {
      class: oe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Ns, a(t.prefix), 1)) : (s(), o("span", Os)),
        fe(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ps = /* @__PURE__ */ J(Us, [["__scopeId", "data-v-c3875efc"]]), Bs = ["title"], Fs = ["width", "height"], As = /* @__PURE__ */ K({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => u.$emit("click"))
    }, [
      (s(), o("svg", {
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
      ])], 8, Fs))
    ], 8, Bs));
  }
}), as = /* @__PURE__ */ J(As, [["__scopeId", "data-v-6fc7f16d"]]), Vs = { class: "header-left" }, Ws = {
  key: 0,
  class: "header-actions"
}, Gs = /* @__PURE__ */ K({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: oe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Vs, [
        g(Ps, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(as, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (s(), o("div", Ws, [
        fe(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ J(Gs, [["__scopeId", "data-v-55a62cd6"]]), js = {
  key: 0,
  class: "section-title-count"
}, Hs = {
  key: 1,
  class: "section-title-icon"
}, qs = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), I(Ht(`h${t.level}`), {
      class: oe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        fe(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", js, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", Hs, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ue = /* @__PURE__ */ J(qs, [["__scopeId", "data-v-559361eb"]]), Ks = { class: "status-grid" }, Js = { class: "status-grid__columns" }, Ys = { class: "status-grid__column" }, Xs = { class: "status-grid__title" }, Qs = { class: "status-grid__column status-grid__column--right" }, Zs = { class: "status-grid__title" }, eo = {
  key: 0,
  class: "status-grid__footer"
}, to = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", Ks, [
      e("div", Js, [
        e("div", Ys, [
          e("h4", Xs, a(t.leftTitle), 1),
          fe(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Qs, [
          e("h4", Zs, a(t.rightTitle), 1),
          fe(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (s(), o("div", eo, [
        fe(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), so = /* @__PURE__ */ J(to, [["__scopeId", "data-v-73b7ba3f"]]), oo = {
  key: 0,
  class: "status-item__icon"
}, no = {
  key: 1,
  class: "status-item__count"
}, ao = { class: "status-item__label" }, lo = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = P(() => `status-item--${u.variant}`);
    return (r, h) => (s(), o("div", {
      class: oe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", oo, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", no, a(t.count), 1)) : c("", !0),
      e("span", ao, a(t.label), 1)
    ], 2));
  }
}), He = /* @__PURE__ */ J(lo, [["__scopeId", "data-v-6f929183"]]), io = { class: "issue-card__header" }, ro = { class: "issue-card__icon" }, co = { class: "issue-card__title" }, uo = {
  key: 0,
  class: "issue-card__content"
}, mo = {
  key: 0,
  class: "issue-card__description"
}, vo = {
  key: 1,
  class: "issue-card__items"
}, fo = {
  key: 2,
  class: "issue-card__actions"
}, go = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = P(() => `issue-card--${u.severity}`);
    return (r, h) => (s(), o("div", {
      class: oe(["issue-card", n.value])
    }, [
      e("div", io, [
        e("span", ro, a(t.icon), 1),
        e("h4", co, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (s(), o("div", uo, [
        t.description ? (s(), o("p", mo, a(t.description), 1)) : c("", !0),
        fe(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", vo, [
        (s(!0), o(W, null, Z(t.items, (v, y) => (s(), o("div", {
          key: y,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (s(), o("div", fo, [
        fe(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ J(go, [["__scopeId", "data-v-df6aa348"]]), ho = ["type", "disabled"], po = {
  key: 0,
  class: "spinner"
}, yo = /* @__PURE__ */ K({
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
    return (u, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: oe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (s(), o("span", po)) : c("", !0),
      t.loading ? c("", !0) : fe(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ho));
  }
}), Q = /* @__PURE__ */ J(yo, [["__scopeId", "data-v-772abe47"]]), wo = { class: "empty-state" }, ko = {
  key: 0,
  class: "empty-icon"
}, bo = { class: "empty-message" }, _o = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (s(), o("div", wo, [
      t.icon ? (s(), o("div", ko, a(t.icon), 1)) : c("", !0),
      e("p", bo, a(t.message), 1),
      t.actionLabel ? (s(), I(Q, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          w(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ J(_o, [["__scopeId", "data-v-4466284f"]]), $o = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: oe(["detail-label"]),
      style: Qe({ minWidth: t.minWidth })
    }, [
      fe(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Gt = /* @__PURE__ */ J($o, [["__scopeId", "data-v-75e9eeb8"]]), Co = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: oe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      fe(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ J(Co, [["__scopeId", "data-v-2f186e4c"]]), xo = { class: "detail-row" }, So = /* @__PURE__ */ K({
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
    return (u, n) => (s(), o("div", xo, [
      g(Gt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(jt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : fe(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), be = /* @__PURE__ */ J(So, [["__scopeId", "data-v-ef15664a"]]), Io = { class: "modal-header" }, Eo = { class: "modal-body" }, Mo = { class: "status-section" }, zo = {
  key: 0,
  class: "status-section"
}, Lo = { class: "section-header-row" }, To = {
  key: 0,
  class: "workflow-group"
}, Ro = { class: "workflow-group-header" }, Do = { class: "workflow-group-title" }, No = { class: "workflow-list" }, Oo = { class: "workflow-name" }, Uo = { class: "workflow-issue" }, Po = {
  key: 1,
  class: "workflow-group"
}, Bo = { class: "workflow-group-header" }, Fo = { class: "workflow-group-title" }, Ao = { class: "workflow-list" }, Vo = { class: "workflow-name" }, Wo = { class: "workflow-issue" }, Go = {
  key: 2,
  class: "workflow-group"
}, jo = { class: "workflow-group-header" }, Ho = { class: "workflow-group-title" }, qo = { class: "workflow-list" }, Ko = { class: "workflow-name" }, Jo = {
  key: 3,
  class: "workflow-group"
}, Yo = { class: "workflow-group-header" }, Xo = { class: "workflow-group-title" }, Qo = { class: "workflow-list" }, Zo = { class: "workflow-name" }, en = {
  key: 4,
  class: "workflow-group"
}, tn = { class: "workflow-group-header" }, sn = { class: "workflow-group-title" }, on = { class: "workflow-list" }, nn = { class: "workflow-name" }, an = {
  key: 5,
  class: "workflow-group"
}, ln = { class: "workflow-group-title" }, rn = { class: "expand-icon" }, dn = {
  key: 0,
  class: "workflow-list"
}, cn = { class: "workflow-name" }, un = {
  key: 1,
  class: "status-section"
}, mn = {
  key: 0,
  class: "change-group"
}, vn = { class: "change-group-header" }, fn = { class: "change-group-title" }, gn = { class: "change-list" }, hn = { class: "node-name" }, pn = {
  key: 0,
  class: "dev-badge"
}, yn = {
  key: 1,
  class: "change-group"
}, wn = { class: "change-group-header" }, kn = { class: "change-group-title" }, bn = { class: "change-list" }, _n = { class: "node-name" }, $n = {
  key: 0,
  class: "dev-badge"
}, Cn = {
  key: 2,
  class: "change-group"
}, xn = { class: "change-list" }, Sn = { class: "change-item" }, In = { class: "node-name" }, En = {
  key: 3,
  class: "change-group"
}, Mn = {
  key: 2,
  class: "status-section"
}, zn = { class: "section-header-row" }, Ln = {
  key: 0,
  class: "drift-item"
}, Tn = { class: "drift-list" }, Rn = {
  key: 0,
  class: "drift-list-more"
}, Dn = {
  key: 1,
  class: "drift-item"
}, Nn = { class: "drift-list" }, On = {
  key: 0,
  class: "drift-list-more"
}, Un = {
  key: 2,
  class: "drift-item"
}, Pn = {
  key: 3,
  class: "drift-item"
}, Bn = {
  key: 3,
  class: "status-section"
}, Fn = { class: "info-box" }, An = { class: "drift-list" }, Vn = {
  key: 0,
  class: "drift-list-more"
}, Wn = {
  key: 4,
  class: "status-section"
}, Gn = { class: "warning-box" }, jn = {
  key: 5,
  class: "empty-state-inline"
}, Hn = { class: "modal-actions" }, qn = /* @__PURE__ */ K({
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
    }), Rt(() => u.show, (k, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", k);
    }, { immediate: !0 });
    const r = P(() => {
      var k, $, T;
      return ((T = ($ = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : T.filter(
        (_) => _.status === "broken" && _.sync_state === "synced"
      )) || [];
    }), h = P(() => {
      var k, $, T;
      return ((T = ($ = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : T.filter(
        (_) => _.status === "broken" && _.sync_state !== "synced"
      )) || [];
    }), v = P(() => {
      var k, $, T;
      return ((T = ($ = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : $.synced) == null ? void 0 : T.filter((_) => {
        var F, U, L;
        const f = (L = (U = (F = u.status) == null ? void 0 : F.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : L.find((D) => D.name === _);
        return !f || f.status !== "broken";
      })) || [];
    }), y = P(() => {
      var k, $, T, _, f;
      return (k = u.status) != null && k.workflows ? ((($ = u.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((T = u.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((_ = u.status.workflows.deleted) == null ? void 0 : _.length) ?? 0) > 0 || (((f = u.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = P(() => {
      var $, T, _;
      const k = ($ = u.status) == null ? void 0 : $.git_changes;
      return k ? (((T = k.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((_ = k.nodes_removed) == null ? void 0 : _.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = P(() => {
      var k, $, T, _, f, F;
      return !y.value && !m.value && (($ = (k = u.status) == null ? void 0 : k.comparison) == null ? void 0 : $.is_synced) && (((T = u.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((F = (f = (_ = u.status) == null ? void 0 : _.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : F.length) ?? 0) === 0;
    }), d = P(() => {
      var $, T;
      const k = (T = ($ = u.status) == null ? void 0 : $.git_changes) == null ? void 0 : T.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function b(k) {
      return typeof k == "string" ? k : k.name;
    }
    function p(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, $) => {
      var T, _, f, F, U, L, D, V, B, N, z, x, M, te, q, ee, me, le, Y, O, S, se;
      return s(), I(Le, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (X) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = xe(() => {
            }, ["stop"]))
          }, [
            e("div", Io, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (X) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Eo, [
              e("div", Mo, [
                g(Ue, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(be, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              y.value ? (s(), o("div", zo, [
                e("div", Lo, [
                  g(Ue, { level: "4" }, {
                    default: i(() => [...$[9] || ($[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (X) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (s(), o("div", To, [
                  e("div", Ro, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Do, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", No, [
                    (s(!0), o(W, null, Z(r.value, (X) => (s(), o("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", Oo, a(X.name), 1),
                      e("span", Uo, a(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                h.value.length ? (s(), o("div", Po, [
                  e("div", Bo, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Fo, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Ao, [
                    (s(!0), o(W, null, Z(h.value, (X) => (s(), o("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", Vo, a(X.name), 1),
                      e("span", Wo, a(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (_ = (T = t.status.workflows) == null ? void 0 : T.new) != null && _.length ? (s(), o("div", Go, [
                  e("div", jo, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ho, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", qo, [
                    (s(!0), o(W, null, Z(t.status.workflows.new, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Ko, a(X), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (F = (f = t.status.workflows) == null ? void 0 : f.modified) != null && F.length ? (s(), o("div", Jo, [
                  e("div", Yo, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Xo, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Qo, [
                    (s(!0), o(W, null, Z(t.status.workflows.modified, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Zo, a(X), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (U = t.status.workflows) == null ? void 0 : U.deleted) != null && L.length ? (s(), o("div", en, [
                  e("div", tn, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", sn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (s(!0), o(W, null, Z(t.status.workflows.deleted, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", nn, a(X), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                v.value.length ? (s(), o("div", an, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (X) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ln, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", rn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", dn, [
                    (s(!0), o(W, null, Z(v.value, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", cn, a(X), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (s(), o("div", un, [
                g(Ue, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (D = t.status.git_changes) == null ? void 0 : D.nodes_added) != null && V.length ? (s(), o("div", mn, [
                  e("div", vn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", fn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", gn, [
                    (s(!0), o(W, null, Z(t.status.git_changes.nodes_added, (X) => (s(), o("div", {
                      key: b(X),
                      class: "change-item"
                    }, [
                      e("span", hn, a(b(X)), 1),
                      p(X) ? (s(), o("span", pn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (B = t.status.git_changes) == null ? void 0 : B.nodes_removed) != null && N.length ? (s(), o("div", yn, [
                  e("div", wn, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", kn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", bn, [
                    (s(!0), o(W, null, Z(t.status.git_changes.nodes_removed, (X) => (s(), o("div", {
                      key: b(X),
                      class: "change-item"
                    }, [
                      e("span", _n, a(b(X)), 1),
                      p(X) ? (s(), o("span", $n, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (s(), o("div", Cn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", xn, [
                    e("div", Sn, [
                      e("span", In, a(d.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", En, [...$[20] || ($[20] = [
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
              (M = t.status.comparison) != null && M.is_synced ? c("", !0) : (s(), o("div", Mn, [
                e("div", zn, [
                  g(Ue, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (X) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (q = (te = t.status.comparison) == null ? void 0 : te.missing_nodes) != null && q.length ? (s(), o("div", Ln, [
                  g(be, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Tn, [
                    (s(!0), o(W, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (X) => (s(), o("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + a(X), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Rn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (me = (ee = t.status.comparison) == null ? void 0 : ee.extra_nodes) != null && me.length ? (s(), o("div", Dn, [
                  g(be, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Nn, [
                    (s(!0), o(W, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (X) => (s(), o("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + a(X), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", On, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Y = (le = t.status.comparison) == null ? void 0 : le.version_mismatches) != null && Y.length ? (s(), o("div", Un, [
                  g(be, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? c("", !0) : (s(), o("div", Pn, [
                  g(be, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (se = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && se.length ? (s(), o("div", Bn, [
                g(Ue, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Fn, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", An, [
                  (s(!0), o(W, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (X) => (s(), o("div", {
                    key: X,
                    class: "drift-list-item"
                  }, " • " + a(X), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Vn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Wn, [
                g(Ue, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Gn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", jn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Hn, [
              g(Q, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (X) => k.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
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
}), Kn = /* @__PURE__ */ J(qn, [["__scopeId", "data-v-c67eed17"]]), Jn = { class: "health-section-header" }, Yn = { class: "suggestions-content" }, Xn = { class: "suggestions-text" }, Qn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Zn = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: u }) {
    const n = t, r = C(!1), h = C(!1);
    function v() {
      r.value = !0;
    }
    function y() {
      r.value = !1, l("view-workflows");
    }
    function m() {
      r.value = !1, l("view-nodes");
    }
    const l = u, d = P(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), b = P(() => n.status.has_changes), p = P(() => {
      const B = n.status.git_changes;
      return B.nodes_added.length > 0 || B.nodes_removed.length > 0 || B.workflow_changes;
    }), k = P(() => n.status.has_changes || d.value), $ = P(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), T = P(() => n.status.git_changes.has_other_changes), _ = P(() => {
      var B;
      return ((B = n.status.workflows.analyzed) == null ? void 0 : B.filter((N) => N.status === "broken")) || [];
    }), f = P(() => {
      var B;
      return ((B = n.status.workflows.analyzed) == null ? void 0 : B.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), F = P(() => _.value.length > 0), U = P(() => F.value || f.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), L = P(() => {
      const B = [];
      return n.status.workflows.new.length > 0 && B.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && B.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && B.push(`${n.status.workflows.deleted.length} deleted`), B.length > 0 ? `${B.join(", ")} workflow${B.length === 1 && !B[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = P(() => {
      var z, x;
      const B = [], N = n.status.comparison;
      return (z = N.missing_nodes) != null && z.length && B.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (x = N.extra_nodes) != null && x.length && B.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), B.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${B.join(" and ")}.`;
    }), V = P(() => {
      var z, x;
      const B = [], N = n.status.comparison;
      return (z = N.extra_nodes) != null && z.length && (N.extra_nodes.slice(0, 3).forEach((M) => {
        B.push(`Untracked: ${M}`);
      }), N.extra_nodes.length > 3 && B.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (x = N.missing_nodes) != null && x.length && (N.missing_nodes.slice(0, 3).forEach((M) => {
        B.push(`Missing: ${M}`);
      }), N.missing_nodes.length > 3 && B.push(`...and ${N.missing_nodes.length - 3} more missing`)), B;
    });
    return (B, N) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (z) => h.value = !0),
            onMouseleave: N[2] || (N[2] = (z) => h.value = !1)
          }, [
            e("div", Jn, [
              g(Ue, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...N[9] || (N[9] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g($s, { name: "fade" }, {
                default: i(() => [
                  h.value ? (s(), I(Q, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...N[10] || (N[10] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(so, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Dt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), I(He, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), I(He, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), I(He, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(He, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: d.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), I(He, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I(He, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), I(He, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                T.value ? (s(), I(He, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !p.value && !T.value ? (s(), I(He, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (s(), I(He, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              k.value ? {
                name: "footer",
                fn: i(() => [
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Yn, [
                    e("span", Xn, a(L.value), 1),
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (z) => B.$emit("commit-changes"))
                    }, {
                      default: i(() => [...N[11] || (N[11] = [
                        w(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), I(vt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (z) => B.$emit("create-branch"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          U.value ? (s(), o("div", Qn, [
            g(Ue, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[14] || (N[14] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (s(), I(vt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: _.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[4] || (N[4] = (z) => B.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[15] || (N[15] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            f.value.length > 0 ? (s(), I(vt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${f.value.length} workflow${f.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: f.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[5] || (N[5] = (z) => B.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[16] || (N[16] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !F.value ? (s(), I(vt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[6] || (N[6] = (z) => B.$emit("view-workflows"))
                }, {
                  default: i(() => [...N[17] || (N[17] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (s(), I(vt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: D.value,
              items: V.value
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...N[18] || (N[18] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (z) => B.$emit("view-nodes"))
                }, {
                  default: i(() => [...N[19] || (N[19] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !U.value && !k.value ? (s(), I(Ve, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(Kn, {
        show: r.value,
        status: t.status,
        onClose: N[8] || (N[8] = (z) => r.value = !1),
        onNavigateWorkflows: y,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ea = /* @__PURE__ */ J(Zn, [["__scopeId", "data-v-698b3f43"]]), ta = ["type", "value", "placeholder", "disabled"], sa = /* @__PURE__ */ K({
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
    const r = t, h = n, v = C(null);
    function y(m) {
      const l = m.target.value;
      h("update:modelValue", l);
    }
    return Ie(() => {
      r.autoFocus && v.value && v.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: oe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: y,
      onKeyup: [
        l[0] || (l[0] = nt((d) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = nt((d) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (d) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (d) => m.$emit("blur"))
    }, null, 42, ta));
  }
}), Lt = /* @__PURE__ */ J(sa, [["__scopeId", "data-v-0380d08f"]]), oa = { class: "branch-create-form" }, na = { class: "form-actions" }, aa = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = C(""), h = P(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      h.value && (n("create", r.value.trim()), r.value = "");
    }
    function y() {
      r.value = "", n("cancel");
    }
    return (m, l) => (s(), o("div", oa, [
      g(Lt, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (d) => r.value = d),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: y
      }, null, 8, ["modelValue"]),
      e("div", na, [
        g(Q, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: v
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(Q, {
          variant: "secondary",
          size: "sm",
          onClick: y
        }, {
          default: i(() => [...l[2] || (l[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), la = /* @__PURE__ */ J(aa, [["__scopeId", "data-v-7c500394"]]), ia = { class: "branch-list-item__indicator" }, ra = { class: "branch-list-item__name" }, da = {
  key: 0,
  class: "branch-list-item__actions"
}, ca = {
  key: 0,
  class: "branch-list-item__current-label"
}, ua = /* @__PURE__ */ K({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: oe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", ia, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ra, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (s(), o("div", da, [
        fe(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", ca, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ J(ua, [["__scopeId", "data-v-c6581a24"]]), va = {
  key: 2,
  class: "branch-list"
}, fa = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = C(!1);
    function h(y) {
      n("create", y), v();
    }
    function v() {
      r.value = !1;
    }
    return (y, m) => (s(), I(De, null, {
      header: i(() => [
        g(Ne, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (s(), I(Q, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => r.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (s(), I(la, {
          key: 0,
          onCreate: h,
          onCancel: v
        })) : c("", !0),
        t.branches.length === 0 ? (s(), I(Ve, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", va, [
          (s(!0), o(W, null, Z(t.branches, (l) => (s(), I(ma, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? c("", !0) : (s(), I(Q, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (d) => y.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), I(Q, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (d) => y.$emit("switch", l.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
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
}), ga = /* @__PURE__ */ J(fa, [["__scopeId", "data-v-86784ddd"]]), ha = { class: "commit-list" }, pa = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (s(), o("div", ha, [
      fe(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ya = /* @__PURE__ */ J(pa, [["__scopeId", "data-v-8c5ee761"]]), wa = { class: "commit-hash" }, ka = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = P(() => u.hash.slice(0, u.length));
    return (r, h) => (s(), o("span", wa, a(n.value), 1));
  }
}), ls = /* @__PURE__ */ J(ka, [["__scopeId", "data-v-7c333cc6"]]), ba = { class: "commit-message" }, _a = { class: "commit-date" }, $a = /* @__PURE__ */ K({
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
    return (v, y) => (s(), o("div", {
      class: oe(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      g(ls, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ba, a(t.message), 1),
      e("span", _a, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: y[0] || (y[0] = xe(() => {
        }, ["stop"]))
      }, [
        fe(v.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ J($a, [["__scopeId", "data-v-dd7c621b"]]), xa = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (s(), I(De, null, {
      header: i(() => [
        g(Ne, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), I(Ve, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(ya, { key: 1 }, {
          default: i(() => [
            (s(!0), o(W, null, Z(t.commits, (r) => (s(), I(Ca, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (h) => u.$emit("select", r)
            }, {
              actions: i(() => [
                g(Q, {
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
}), Sa = /* @__PURE__ */ J(xa, [["__scopeId", "data-v-981c3c64"]]), Zy = [
  // BROKEN workflows (4) - Missing dependencies or category mismatch
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
  // Category mismatch example - model exists but in wrong directory
  {
    name: "lora-wrong-dir.json",
    status: "broken",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 8,
    model_count: 2,
    sync_state: "synced",
    has_category_mismatch_issues: !0,
    models_with_category_mismatch: 1
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
], ew = {
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
  },
  // Category mismatch example - LoRA in wrong directory
  "lora-wrong-dir.json": {
    name: "lora-wrong-dir.json",
    status: "broken",
    nodes: [
      {
        name: "comfyui-core",
        installed: !0,
        registry_id: "comfyui-core",
        repository: null,
        version: "0.3.0",
        source: "builtin",
        download_url: null
      }
    ],
    models: [
      {
        filename: "my_character_lora.safetensors",
        hash: "f8c9e2d1",
        // CRC32
        sha256_hash: "f8c9e2d1a0b1c2d3e4f5678901234567890abcdef1234567890abcdef12345678",
        blake3_hash: null,
        status: "category_mismatch",
        // Wrong directory!
        importance: "required",
        size_mb: 185,
        file_size: 194e6,
        node_type: "LoraLoader",
        node_id: "7",
        relative_path: "checkpoints/my_character_lora.safetensors",
        // Wrong! Should be loras/
        category: "checkpoints",
        // Wrong category
        mtime: Date.now() / 1e3 - 86400 * 3,
        metadata: {
          model_type: "lora",
          base_model: "SDXL"
        },
        // Category mismatch details
        has_category_mismatch: !0,
        expected_categories: ["loras"],
        actual_category: "checkpoints"
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "b22f3f8c",
        sha256_hash: "b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
        blake3_hash: null,
        status: "available",
        importance: "required",
        size_mb: 6938,
        file_size: 7275159552,
        node_type: "CheckpointLoader",
        node_id: "4",
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        category: "checkpoints",
        mtime: Date.now() / 1e3 - 86400 * 30,
        metadata: {
          model_type: "checkpoint",
          base_model: "SDXL"
        },
        has_category_mismatch: !1,
        expected_categories: ["checkpoints"],
        actual_category: "checkpoints"
      }
    ]
  }
}, Ia = [
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
], tw = [
  ...Ia,
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
function kt() {
  return !1;
}
function Ee() {
  const t = C(!1), u = C(null);
  async function n(H, ce) {
    var Me;
    if (!((Me = window.app) != null && Me.api))
      throw new Error("ComfyUI API not available");
    const ge = await window.app.api.fetchApi(H, ce);
    if (!ge.ok) {
      const lt = await ge.json().catch(() => ({}));
      throw new Error(lt.error || lt.message || `Request failed: ${ge.status}`);
    }
    return ge.json();
  }
  async function r(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(H, ce = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ce })
    });
  }
  async function v(H = 10, ce = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ce}`);
  }
  async function y(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function l(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function d(H, ce = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ce })
    });
  }
  async function b(H, ce = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ce })
    });
  }
  async function p(H, ce = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ce })
    });
  }
  async function k(H, ce = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ce })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await r();
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
  async function T(H) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function f(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function F() {
    return n("/v2/workspace/environments/create_status");
  }
  async function U(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function L(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function D(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ce = await r(H), ge = [];
      return ce.workflows.new.forEach((Me) => {
        ge.push({ name: Me, status: "new", missing_nodes: 0, missing_models: 0, path: Me });
      }), ce.workflows.modified.forEach((Me) => {
        ge.push({ name: Me, status: "modified", missing_nodes: 0, missing_models: 0, path: Me });
      }), ce.workflows.synced.forEach((Me) => {
        ge.push({ name: Me, status: "synced", missing_nodes: 0, missing_models: 0, path: Me });
      }), ge;
    }
  }
  async function V(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function B(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function N(H, ce, ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ce, install_models: ge })
    });
  }
  async function z(H, ce, ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ce, importance: ge })
    });
  }
  async function x() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function M() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function te(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function q(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function ee(H, ce) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ce })
    });
  }
  async function me(H, ce) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ce })
    });
  }
  async function le(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function Y(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function O() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function S() {
    return n("/v2/workspace/models/directory");
  }
  async function se(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function X() {
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
  async function $e(H) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ke(H, ce) {
    try {
      const ge = new URLSearchParams();
      return H && ge.append("level", H), ce && ge.append("lines", ce.toString()), n(`/v2/comfygit/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function he(H, ce) {
    try {
      const ge = new URLSearchParams();
      return H && ge.append("level", H), ce && ge.append("lines", ce.toString()), n(`/v2/workspace/debug/logs?${ge}`);
    } catch {
      return [];
    }
  }
  async function st() {
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
  async function ne(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function ue(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function ot(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function Ke(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function ae() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function We(H, ce) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ce })
    });
  }
  async function Je(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Ge(H, ce, ge) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ce, push_url: ge })
    });
  }
  async function wt(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function ve(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Pe(H = "skip", ce = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ce
      })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: h,
    getHistory: v,
    exportEnv: y,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: d,
    createBranch: b,
    switchBranch: p,
    deleteBranch: k,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: T,
    getSwitchProgress: _,
    createEnvironment: f,
    getCreateProgress: F,
    getComfyUIReleases: U,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: D,
    getWorkflowDetails: V,
    resolveWorkflow: B,
    installWorkflowDeps: N,
    setModelImportance: z,
    // Model Management
    getEnvironmentModels: x,
    getWorkspaceModels: M,
    getModelDetails: te,
    openFileLocation: q,
    addModelSource: ee,
    removeModelSource: me,
    deleteModel: le,
    downloadModel: Y,
    scanWorkspaceModels: O,
    getModelsDirectory: S,
    setModelsDirectory: se,
    // Settings
    getConfig: X,
    updateConfig: $e,
    // Debug/Logs
    getEnvironmentLogs: ke,
    getWorkspaceLogs: he,
    // Node Management
    getNodes: st,
    trackNodeAsDev: ne,
    installNode: ue,
    updateNode: ot,
    uninstallNode: Ke,
    // Git Remotes
    getRemotes: ae,
    addRemote: We,
    removeRemote: Je,
    updateRemoteUrl: Ge,
    fetchRemote: wt,
    getRemoteSyncStatus: ve,
    // Environment Sync
    syncEnvironmentManually: Pe
  };
}
async function bt(t, u = {}, n = 5e3) {
  const r = new AbortController(), h = setTimeout(() => r.abort(), n);
  try {
    const v = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(h), v;
  } catch (v) {
    throw clearTimeout(h), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function is() {
  const t = C(null);
  async function u() {
    try {
      const y = await bt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (y.ok)
        return (await y.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const y = await bt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Health check failed");
      return await y.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const y = await bt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!y.ok) throw new Error("Failed to get status");
      return await y.json();
    } catch {
      return null;
    }
  }
  async function h() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await bt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await bt(
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
    kill: v
  };
}
const Ea = { class: "base-modal-header" }, Ma = {
  key: 0,
  class: "base-modal-title"
}, za = { class: "base-modal-body" }, La = {
  key: 0,
  class: "base-modal-loading"
}, Ta = {
  key: 1,
  class: "base-modal-error"
}, Ra = {
  key: 0,
  class: "base-modal-footer"
}, Da = /* @__PURE__ */ K({
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
    function v(y) {
      y.key === "Escape" && r("close");
    }
    return Ie(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Cs(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (y, m) => (s(), I(Le, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: oe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", Ea, [
            fe(y.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Ma, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => y.$emit("close"))
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
          e("div", za, [
            t.loading ? (s(), o("div", La, "Loading...")) : t.error ? (s(), o("div", Ta, a(t.error), 1)) : fe(y.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          y.$slots.footer ? (s(), o("div", Ra, [
            fe(y.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), at = /* @__PURE__ */ J(Da, [["__scopeId", "data-v-2125a0e6"]]), Na = ["type", "disabled"], Oa = {
  key: 0,
  class: "spinner"
}, Ua = /* @__PURE__ */ K({
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
    return (u, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: oe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (s(), o("span", Oa)) : c("", !0),
      fe(u.$slots, "default", {}, void 0, !0)
    ], 10, Na));
  }
}), re = /* @__PURE__ */ J(Ua, [["__scopeId", "data-v-f3452606"]]), Pa = {
  key: 0,
  class: "base-title-count"
}, Ba = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (s(), I(Ht(`h${t.level}`), {
      class: oe(["base-title", t.variant])
    }, {
      default: i(() => [
        fe(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Pa, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xt = /* @__PURE__ */ J(Ba, [["__scopeId", "data-v-5a01561d"]]), Fa = ["value", "disabled"], Aa = {
  key: 0,
  value: "",
  disabled: ""
}, Va = ["value"], Wa = {
  key: 0,
  class: "base-select-error"
}, Ga = /* @__PURE__ */ K({
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
    return (r, h) => (s(), o("div", {
      class: oe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: oe(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (v) => r.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", Aa, a(t.placeholder), 1)) : c("", !0),
        (s(!0), o(W, null, Z(t.options, (v) => (s(), o("option", {
          key: u(v),
          value: u(v)
        }, a(n(v)), 9, Va))), 128))
      ], 42, Fa),
      t.error ? (s(), o("span", Wa, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), ja = /* @__PURE__ */ J(Ga, [["__scopeId", "data-v-7436d745"]]), Ha = { class: "popover-header" }, qa = { class: "popover-title" }, Ka = { class: "popover-content" }, Ja = {
  key: 0,
  class: "popover-actions"
}, Ya = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (s(), I(Le, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", Ha, [
            e("h4", qa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Ka, [
            fe(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (s(), o("div", Ja, [
            fe(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Ze = /* @__PURE__ */ J(Ya, [["__scopeId", "data-v-42815ace"]]), Xa = { class: "detail-section" }, Qa = {
  key: 0,
  class: "empty-message"
}, Za = { class: "model-header" }, el = { class: "model-name" }, tl = { class: "model-details" }, sl = { class: "model-row" }, ol = { class: "model-row" }, nl = { class: "label" }, al = {
  key: 0,
  class: "model-row model-row-nodes"
}, ll = { class: "node-list" }, il = ["onClick"], rl = {
  key: 1,
  class: "model-row"
}, dl = { class: "value" }, cl = {
  key: 2,
  class: "model-row"
}, ul = { class: "value error" }, ml = {
  key: 0,
  class: "model-actions"
}, vl = { class: "detail-section" }, fl = {
  key: 0,
  class: "empty-message"
}, gl = { class: "node-name" }, hl = {
  key: 0,
  class: "node-version"
}, pl = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: h, setModelImportance: v, openFileLocation: y } = Ee(), m = C(null), l = C(!1), d = C(null), b = C(!1), p = C({}), k = C(!1), $ = C(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function _(z) {
      switch (z) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "category_mismatch":
          return "error";
        case "missing":
        default:
          return "error";
      }
    }
    function f(z) {
      switch (z) {
        case "available":
          return "✓ Available";
        case "path_mismatch":
          return "⚠ Path Mismatch";
        case "category_mismatch":
          return "✗ Wrong Directory";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function F(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const x = z.hash || z.filename;
      return $.value.has(x) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function U(z) {
      return $.value.has(z);
    }
    function L(z) {
      $.value.has(z) ? $.value.delete(z) : $.value.add(z), $.value = new Set($.value);
    }
    async function D() {
      l.value = !0, d.value = null;
      try {
        m.value = await h(n.workflowName);
      } catch (z) {
        d.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function V(z, x) {
      p.value[z] = x, b.value = !0;
    }
    async function B(z) {
      try {
        await y(z);
      } catch (x) {
        d.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function N() {
      if (!b.value) {
        r("close");
        return;
      }
      l.value = !0, d.value = null;
      try {
        for (const [z, x] of Object.entries(p.value))
          await v(n.workflowName, z, x);
        r("refresh"), r("close");
      } catch (z) {
        d.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(D), (z, x) => (s(), o(W, null, [
      g(at, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: d.value || void 0,
        onClose: x[4] || (x[4] = (M) => r("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", Xa, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Qa, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(W, null, Z(m.value.models, (M) => {
                var te;
                return s(), o("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  e("div", Za, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", el, a(M.filename), 1)
                  ]),
                  e("div", tl, [
                    e("div", sl, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: oe(["value", _(M.status)])
                      }, a(f(M.status)), 3)
                    ]),
                    e("div", ol, [
                      e("span", nl, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        g(as, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (q) => k.value = !0)
                        })
                      ]),
                      g(ja, {
                        "model-value": p.value[M.filename] || M.importance,
                        options: T,
                        "onUpdate:modelValue": (q) => V(M.filename, q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (s(), o("div", al, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", ll, [
                        (s(!0), o(W, null, Z(F(M), (q, ee) => (s(), o("div", {
                          key: `${q.node_id}-${ee}`,
                          class: "node-reference"
                        }, a(q.node_type) + " (Node #" + a(q.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (q) => L(M.hash || M.filename)
                        }, a(U(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, il)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    M.size_mb ? (s(), o("div", rl, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", dl, a(M.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    M.has_category_mismatch ? (s(), o("div", cl, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ul, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, a(M.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, a((te = M.expected_categories) == null ? void 0 : te[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  M.status !== "available" ? (s(), o("div", ml, [
                    M.status === "downloadable" ? (s(), I(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (q) => r("resolve"))
                    }, {
                      default: i(() => [...x[14] || (x[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (s(), I(re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => B(M.file_path)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (s(), I(re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (q) => r("resolve"))
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : c("", !0)
                  ])) : c("", !0)
                ]);
              }), 128))
            ]),
            e("section", vl, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", fl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(W, null, Z(m.value.nodes, (M) => (s(), o("div", {
                key: M.name,
                class: "node-item"
              }, [
                e("span", {
                  class: oe(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, a(M.status === "installed" ? "✓" : "✕"), 3),
                e("span", gl, a(M.name), 1),
                M.version ? (s(), o("span", hl, "v" + a(M.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(re, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (M) => r("close"))
          }, {
            default: i(() => [...x[17] || (x[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (s(), I(re, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...x[18] || (x[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(Ze, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (M) => k.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
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
}), yl = /* @__PURE__ */ J(pl, [["__scopeId", "data-v-668728e6"]]), we = os({
  items: [],
  status: "idle"
});
let qe = null;
function rs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function At(t) {
  return we.items.find((u) => u.id === t);
}
async function ft() {
  if (we.status === "downloading") return;
  const t = we.items.find((u) => u.status === "queued");
  if (!t) {
    we.status = "idle";
    return;
  }
  we.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await wl(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    we.status = "idle", ft();
  }
}
async function wl(t) {
  return new Promise((u, n) => {
    qe && (qe.close(), qe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    qe = h;
    let v = Date.now(), y = 0, m = !1;
    h.onmessage = (l) => {
      try {
        const d = JSON.parse(l.data);
        switch (d.type) {
          case "progress":
            t.downloaded = d.downloaded || 0, t.size = d.total || t.size;
            const b = Date.now(), p = (b - v) / 1e3;
            if (p > 0.5) {
              const k = t.downloaded - y;
              if (t.speed = k / p, v = b, y = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, h.close(), qe = null, u();
            break;
          case "error":
            m = !0, h.close(), qe = null, n(new Error(d.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), qe = null, m || n(new Error("Connection lost"));
    };
  });
}
async function kl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (we.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const r = {
        id: rs(),
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
      we.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Et() {
  function t(f) {
    for (const F of f) {
      if (we.items.some(
        (D) => D.url === F.url && D.targetPath === F.targetPath && ["queued", "downloading", "paused", "completed"].includes(D.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${F.filename}`);
        continue;
      }
      const L = {
        id: rs(),
        workflow: F.workflow,
        filename: F.filename,
        url: F.url,
        targetPath: F.targetPath,
        size: F.size || 0,
        type: F.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      we.items.push(L);
    }
    we.status === "idle" && ft();
  }
  async function u(f) {
    const F = At(f);
    if (F) {
      if (F.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(F.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        qe && (qe.close(), qe = null), F.status = "failed", F.error = "Cancelled by user", we.status = "idle", ft();
      } else if (F.status === "queued") {
        const U = we.items.findIndex((L) => L.id === f);
        U >= 0 && we.items.splice(U, 1);
      }
    }
  }
  function n(f) {
    const F = At(f);
    !F || F.status !== "failed" || (F.status = "queued", F.error = void 0, F.progress = 0, F.downloaded = 0, we.status === "idle" && ft());
  }
  function r(f) {
    const F = At(f);
    !F || F.status !== "paused" || (F.status = "queued", we.status === "idle" && ft());
  }
  function h() {
    const f = we.items.filter((F) => F.status === "paused");
    for (const F of f)
      F.status = "queued";
    we.status === "idle" && ft();
  }
  function v(f) {
    const F = we.items.findIndex((U) => U.id === f);
    F >= 0 && ["completed", "failed", "paused"].includes(we.items[F].status) && we.items.splice(F, 1);
  }
  function y() {
    we.items = we.items.filter((f) => f.status !== "completed");
  }
  function m() {
    we.items = we.items.filter((f) => f.status !== "failed");
  }
  const l = P(
    () => we.items.find((f) => f.status === "downloading")
  ), d = P(
    () => we.items.filter((f) => f.status === "queued")
  ), b = P(
    () => we.items.filter((f) => f.status === "completed")
  ), p = P(
    () => we.items.filter((f) => f.status === "failed")
  ), k = P(
    () => we.items.filter((f) => f.status === "paused")
  ), $ = P(() => we.items.length > 0), T = P(
    () => we.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), _ = P(
    () => we.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: xs(we),
    // Computed
    currentDownload: l,
    queuedItems: d,
    completedItems: b,
    failedItems: p,
    pausedItems: k,
    hasItems: $,
    activeCount: T,
    hasPaused: _,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: h,
    removeItem: v,
    clearCompleted: y,
    clearFailed: m,
    loadPendingDownloads: kl
  };
}
function ds() {
  const t = C(null), u = C(null), n = C([]), r = C([]), h = C(!1), v = C(null);
  async function y(U, L) {
    var V;
    if (!((V = window.app) != null && V.api))
      throw new Error("ComfyUI API not available");
    const D = await window.app.api.fetchApi(U, L);
    if (!D.ok) {
      const B = await D.json().catch(() => ({})), N = B.error || B.message || `Request failed: ${D.status}`;
      throw new Error(N);
    }
    return D.json();
  }
  async function m(U) {
    h.value = !0, v.value = null;
    try {
      let L;
      return kt() || (L = await y(
        `/v2/comfygit/workflow/${U}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = L, L;
    } catch (L) {
      const D = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = D, L;
    } finally {
      h.value = !1;
    }
  }
  async function l(U, L, D, V) {
    h.value = !0, v.value = null;
    try {
      let B;
      if (!kt()) {
        const N = Object.fromEntries(L), z = Object.fromEntries(D), x = V ? Array.from(V) : [];
        B = await y(
          `/v2/comfygit/workflow/${U}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: z,
              skipped_packages: x
            })
          }
        );
      }
      return u.value = B, B;
    } catch (B) {
      const N = B instanceof Error ? B.message : "Unknown error occurred";
      throw v.value = N, B;
    } finally {
      h.value = !1;
    }
  }
  async function d(U, L = 10) {
    h.value = !0, v.value = null;
    try {
      let D;
      return kt() || (D = await y(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: L })
        }
      )), n.value = D.results, D.results;
    } catch (D) {
      const V = D instanceof Error ? D.message : "Unknown error occurred";
      throw v.value = V, D;
    } finally {
      h.value = !1;
    }
  }
  async function b(U, L = 10) {
    h.value = !0, v.value = null;
    try {
      let D;
      return kt() || (D = await y(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: L })
        }
      )), r.value = D.results, D.results;
    } catch (D) {
      const V = D instanceof Error ? D.message : "Unknown error occurred";
      throw v.value = V, D;
    } finally {
      h.value = !1;
    }
  }
  const p = os({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function $(U) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return kt(), await T(U);
    } catch (L) {
      const D = L instanceof Error ? L.message : "Failed to install nodes";
      throw p.installError = D, L;
    }
  }
  async function T(U) {
    var D;
    const L = await y(
      `/v2/comfygit/workflow/${U}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: p.nodesToInstall
        })
      }
    );
    if (p.nodeInstallProgress) {
      p.nodeInstallProgress.totalNodes = p.nodesToInstall.length;
      const V = new Map(((D = L.failed) == null ? void 0 : D.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < p.nodesToInstall.length; B++) {
        const N = p.nodesToInstall[B], z = V.get(N);
        p.nodeInstallProgress.completedNodes.push({
          node_id: N,
          success: !z,
          error: z
        });
      }
    }
    return p.nodesInstalled = L.nodes_installed, p.needsRestart = L.nodes_installed.length > 0, L.failed && L.failed.length > 0 && (p.installError = `${L.failed.length} package(s) failed to install`), L;
  }
  async function _(U, L, D) {
    k(), p.phase = "resolving", v.value = null;
    const V = Object.fromEntries(L), B = Object.fromEntries(D);
    try {
      const N = await fetch(`/v2/comfygit/workflow/${U}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: V,
          model_choices: B
        })
      });
      if (!N.ok)
        throw new Error(`Request failed: ${N.status}`);
      if (!N.body)
        throw new Error("No response body");
      const z = N.body.getReader(), x = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: te, value: q } = await z.read();
        if (te) break;
        M += x.decode(q, { stream: !0 });
        const ee = M.split(`

`);
        M = ee.pop() || "";
        for (const me of ee) {
          if (!me.trim()) continue;
          const le = me.split(`
`);
          let Y = "", O = "";
          for (const S of le)
            S.startsWith("event: ") ? Y = S.slice(7) : S.startsWith("data: ") && (O = S.slice(6));
          if (O)
            try {
              const S = JSON.parse(O);
              f(Y, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (N) {
      const z = N instanceof Error ? N.message : "Unknown error occurred";
      throw v.value = z, p.error = z, p.phase = "error", N;
    }
  }
  function f(U, L) {
    switch (U) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = L.total;
        break;
      case "file_start":
        p.currentFile = L.filename, p.currentFileIndex = L.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = L.downloaded, p.bytesTotal = L.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: L.filename,
          success: L.success,
          error: L.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = L.nodes_to_install || [], L.download_results && (p.completedFiles = L.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = L.message, p.phase = "error", v.value = L.message;
        break;
    }
  }
  function F(U, L) {
    const { addToQueue: D } = Et(), V = L.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: U,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return V.length > 0 && D(V), V.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: h,
    error: v,
    progress: p,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: _,
    installNodes: $,
    searchNodes: d,
    searchModels: b,
    resetProgress: k,
    queueModelDownloads: F
  };
}
const bl = { class: "resolution-stepper" }, _l = { class: "stepper-header" }, $l = ["onClick"], Cl = {
  key: 0,
  class: "step-icon"
}, xl = {
  key: 1,
  class: "step-number"
}, Sl = { class: "step-label" }, Il = {
  key: 0,
  class: "step-connector"
}, El = { class: "stepper-content" }, Ml = /* @__PURE__ */ K({
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
    function h(d) {
      var b;
      if ((b = n.stepStats) != null && b[d]) {
        const p = n.stepStats[d];
        return p.total > 0 && p.resolved === p.total;
      }
      return n.completedSteps.includes(d);
    }
    function v(d) {
      var b;
      if ((b = n.stepStats) != null && b[d]) {
        const p = n.stepStats[d];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function y(d) {
      return h(d) ? "state-complete" : v(d) ? "state-partial" : "state-pending";
    }
    function m(d) {
      return !1;
    }
    function l(d) {
      r("step-change", d);
    }
    return (d, b) => (s(), o("div", bl, [
      e("div", _l, [
        (s(!0), o(W, null, Z(t.steps, (p, k) => (s(), o("div", {
          key: p.id,
          class: oe(["step", {
            active: t.currentStep === p.id,
            completed: h(p.id),
            "in-progress": v(p.id),
            disabled: m(p.id)
          }]),
          onClick: ($) => l(p.id)
        }, [
          e("div", {
            class: oe(["step-indicator", y(p.id)])
          }, [
            h(p.id) ? (s(), o("span", Cl, "✓")) : (s(), o("span", xl, a(k + 1), 1))
          ], 2),
          e("div", Sl, a(p.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Il)) : c("", !0)
        ], 10, $l))), 128))
      ]),
      e("div", El, [
        fe(d.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), zl = /* @__PURE__ */ J(Ml, [["__scopeId", "data-v-2a7b3af8"]]), Ll = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = P(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = P(() => `confidence-${n.value}`), h = P(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, y) => (s(), o("span", {
      class: oe(["confidence-badge", r.value, t.size])
    }, a(h.value), 3));
  }
}), Tt = /* @__PURE__ */ J(Ll, [["__scopeId", "data-v-17ec4b80"]]), Tl = { class: "node-info" }, Rl = { class: "node-info-text" }, Dl = { class: "item-body" }, Nl = {
  key: 0,
  class: "resolved-state"
}, Ol = {
  key: 1,
  class: "multiple-options"
}, Ul = { class: "options-list" }, Pl = ["onClick"], Bl = ["name", "value", "checked", "onChange"], Fl = { class: "option-content" }, Al = { class: "option-header" }, Vl = { class: "option-package-id" }, Wl = {
  key: 0,
  class: "option-title"
}, Gl = { class: "option-meta" }, jl = {
  key: 0,
  class: "installed-badge"
}, Hl = { class: "action-buttons" }, ql = {
  key: 2,
  class: "unresolved"
}, Kl = {
  key: 0,
  class: "searching-state"
}, Jl = { class: "options-list" }, Yl = ["onClick"], Xl = ["name", "value"], Ql = { class: "option-content" }, Zl = { class: "option-header" }, ei = { class: "option-package-id" }, ti = {
  key: 0,
  class: "option-description"
}, si = { class: "option-meta" }, oi = {
  key: 0,
  class: "installed-badge"
}, ni = {
  key: 2,
  class: "unresolved-message"
}, ai = { class: "action-buttons" }, li = /* @__PURE__ */ K({
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
    statusLabel: {},
    searchResults: {},
    isSearching: { type: Boolean }
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function h(l, d = 80) {
      return l.length <= d ? l : l.slice(0, d - 3) + "...";
    }
    const v = P(() => !!n.choice);
    P(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), P(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.package_id;
    });
    const y = P(() => {
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
    function m(l) {
      r("option-selected", l);
    }
    return (l, d) => (s(), o("div", {
      class: oe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Tl, [
        e("span", Rl, [
          d[7] || (d[7] = w("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: oe(["status-badge", y.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Dl, [
        v.value ? (s(), o("div", Nl, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (b) => r("clear-choice"))
          }, {
            default: i(() => [...d[8] || (d[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ol, [
          d[12] || (d[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ul, [
            (s(!0), o(W, null, Z(t.options, (b, p) => (s(), o("label", {
              key: b.package_id,
              class: oe(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (k) => m(p)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (k) => m(p)
              }, null, 40, Bl),
              e("div", Fl, [
                e("div", Al, [
                  e("span", Vl, a(b.package_id), 1),
                  g(Tt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", Wl, a(b.title), 1)) : c("", !0),
                e("div", Gl, [
                  b.is_installed ? (s(), o("span", jl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Pl))), 128))
          ]),
          e("div", Hl, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[1] || (d[1] = (b) => r("search"))
            }, {
              default: i(() => [...d[9] || (d[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[2] || (d[2] = (b) => r("manual-entry"))
            }, {
              default: i(() => [...d[10] || (d[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[3] || (d[3] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...d[11] || (d[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ql, [
          t.isSearching ? (s(), o("div", Kl, [...d[13] || (d[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            d[14] || (d[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Jl, [
              (s(!0), o(W, null, Z(t.searchResults.slice(0, 5), (b, p) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => r("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: p
                }, null, 8, Xl),
                e("div", Ql, [
                  e("div", Zl, [
                    e("span", ei, a(b.package_id), 1),
                    g(Tt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", ti, a(h(b.description)), 1)) : c("", !0),
                  e("div", si, [
                    b.is_installed ? (s(), o("span", oi, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, Yl))), 128))
            ])
          ], 64)) : (s(), o("div", ni, [...d[15] || (d[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", ai, [
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[4] || (d[4] = (b) => r("search"))
            }, {
              default: i(() => {
                var b;
                return [
                  w(a((b = t.searchResults) != null && b.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[5] || (d[5] = (b) => r("manual-entry"))
            }, {
              default: i(() => [...d[16] || (d[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[6] || (d[6] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...d[17] || (d[17] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ii = /* @__PURE__ */ J(li, [["__scopeId", "data-v-c2997d1d"]]), ri = { class: "item-navigator" }, di = { class: "nav-item-info" }, ci = ["title"], ui = { class: "nav-controls" }, mi = { class: "nav-arrows" }, vi = ["disabled"], fi = ["disabled"], gi = { class: "nav-position" }, hi = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, h) => (s(), o("div", ri, [
      e("div", di, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, ci)
      ]),
      e("div", ui, [
        e("div", mi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, vi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, fi)
        ]),
        e("span", gi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), cs = /* @__PURE__ */ J(hi, [["__scopeId", "data-v-74af7920"]]), pi = ["type", "value", "placeholder", "disabled"], yi = {
  key: 0,
  class: "base-input-error"
}, wi = /* @__PURE__ */ K({
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
    return (u, n) => (s(), o("div", {
      class: oe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: oe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = nt((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = nt((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, pi),
      t.error ? (s(), o("span", yi, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ J(wi, [["__scopeId", "data-v-9ba02cdc"]]), ki = { class: "node-resolution-step" }, bi = {
  key: 0,
  class: "auto-resolved-section"
}, _i = { class: "section-header" }, $i = { class: "stat-badge" }, Ci = { class: "resolved-packages-list" }, xi = { class: "package-info" }, Si = { class: "package-id" }, Ii = { class: "node-count" }, Ei = { class: "package-actions" }, Mi = {
  key: 0,
  class: "status-badge install"
}, zi = {
  key: 1,
  class: "status-badge skip"
}, Li = ["onClick"], Ti = {
  key: 1,
  class: "section-divider"
}, Ri = { class: "step-header" }, Di = { class: "stat-badge" }, Ni = {
  key: 1,
  class: "step-body"
}, Oi = {
  key: 3,
  class: "empty-state"
}, Ui = { class: "node-modal-body" }, Pi = { class: "node-search-results-container" }, Bi = {
  key: 0,
  class: "node-search-results"
}, Fi = ["onClick"], Ai = { class: "node-result-header" }, Vi = { class: "node-result-package-id" }, Wi = {
  key: 0,
  class: "node-result-description"
}, Gi = {
  key: 1,
  class: "node-empty-state"
}, ji = {
  key: 2,
  class: "node-empty-state"
}, Hi = {
  key: 3,
  class: "node-empty-state"
}, qi = { class: "node-manual-entry-modal" }, Ki = { class: "node-modal-body" }, Ji = { class: "node-modal-actions" }, Yi = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, { searchNodes: h } = ds(), v = C(0), y = C(!1), m = C(!1), l = C(""), d = C(""), b = C([]), p = C(!1), k = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Set()), T = C(!1);
    function _() {
      T.value && O(), T.value = !1;
    }
    const f = P(() => n.nodes[v.value]), F = P(() => n.nodes.filter((ne) => n.nodeChoices.has(ne.node_type)).length), U = P(() => f.value ? k.value.get(f.value.node_type) || [] : []), L = P(() => f.value ? $.value.has(f.value.node_type) : !1);
    Rt(f, async (ne) => {
      var ue;
      ne && ((ue = ne.options) != null && ue.length || k.value.has(ne.node_type) || $.value.has(ne.node_type) || n.nodeChoices.has(ne.node_type) || await D(ne.node_type));
    }, { immediate: !0 });
    async function D(ne) {
      $.value.add(ne);
      try {
        const ue = await h(ne, 5);
        k.value.set(ne, ue);
      } catch {
        k.value.set(ne, []);
      } finally {
        $.value.delete(ne);
      }
    }
    const V = P(() => n.autoResolvedPackages.filter((ne) => !n.skippedPackages.has(ne.package_id)).length);
    function B(ne) {
      return n.skippedPackages.has(ne);
    }
    function N(ne) {
      r("package-skip", ne);
    }
    const z = P(() => {
      var ue;
      if (!f.value) return "not-found";
      const ne = n.nodeChoices.get(f.value.node_type);
      if (ne)
        switch (ne.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ue = f.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), x = P(() => {
      var ue;
      if (!f.value) return;
      const ne = n.nodeChoices.get(f.value.node_type);
      if (ne)
        switch (ne.action) {
          case "install":
            return ne.package_id ? `→ ${ne.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ue = f.value.options) != null && ue.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function M(ne) {
      ne >= 0 && ne < n.nodes.length && (v.value = ne);
    }
    function te() {
      f.value && r("mark-optional", f.value.node_type);
    }
    function q() {
      f.value && r("skip", f.value.node_type);
    }
    function ee(ne) {
      f.value && r("option-selected", f.value.node_type, ne);
    }
    function me() {
      f.value && r("clear-choice", f.value.node_type);
    }
    function le() {
      f.value && (l.value = f.value.node_type, b.value = U.value, y.value = !0, $e(l.value));
    }
    function Y() {
      d.value = "", m.value = !0;
    }
    function O() {
      y.value = !1, l.value = "", b.value = [];
    }
    function S() {
      m.value = !1, d.value = "";
    }
    let se = null;
    function X() {
      se && clearTimeout(se), se = setTimeout(() => {
        $e(l.value);
      }, 300);
    }
    async function $e(ne) {
      if (!ne.trim()) {
        b.value = [];
        return;
      }
      p.value = !0;
      try {
        b.value = await h(ne, 10);
      } catch {
        b.value = [];
      } finally {
        p.value = !1;
      }
    }
    function ke(ne) {
      f.value && (r("manual-entry", f.value.node_type, ne.package_id), O());
    }
    function he(ne) {
      f.value && r("manual-entry", f.value.node_type, ne.package_id);
    }
    function st() {
      !f.value || !d.value.trim() || (r("manual-entry", f.value.node_type, d.value.trim()), S());
    }
    return (ne, ue) => {
      var ot, Ke;
      return s(), o("div", ki, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", bi, [
          e("div", _i, [
            ue[6] || (ue[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", $i, a(V.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ci, [
            (s(!0), o(W, null, Z(t.autoResolvedPackages, (ae) => (s(), o("div", {
              key: ae.package_id,
              class: "resolved-package-item"
            }, [
              e("div", xi, [
                e("code", Si, a(ae.package_id), 1),
                e("span", Ii, a(ae.node_types_count) + " node type" + a(ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Ei, [
                B(ae.package_id) ? (s(), o("span", zi, " SKIPPED ")) : (s(), o("span", Mi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (We) => N(ae.package_id)
                }, a(B(ae.package_id) ? "Include" : "Skip"), 9, Li)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Ti)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Ri, [
            ue[7] || (ue[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Di, a(F.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), I(cs, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ue[0] || (ue[0] = (ae) => M(v.value - 1)),
            onNext: ue[1] || (ue[1] = (ae) => M(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          f.value ? (s(), o("div", Ni, [
            g(ii, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((ot = f.value.options) != null && ot.length),
              options: f.value.options,
              choice: (Ke = t.nodeChoices) == null ? void 0 : Ke.get(f.value.node_type),
              status: z.value,
              "status-label": x.value,
              "search-results": U.value,
              "is-searching": L.value,
              onMarkOptional: te,
              onSkip: q,
              onManualEntry: Y,
              onSearch: le,
              onOptionSelected: ee,
              onClearChoice: me,
              onSearchResultSelected: he
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Oi, [...ue[8] || (ue[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), I(Le, { to: "body" }, [
          y.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ue[4] || (ue[4] = xe((ae) => T.value = !0, ["self"])),
            onMouseup: xe(_, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ue[3] || (ue[3] = (ae) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ue[9] || (ue[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", Ui, [
                g(Ae, {
                  modelValue: l.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (ae) => l.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                e("div", Pi, [
                  b.value.length > 0 ? (s(), o("div", Bi, [
                    (s(!0), o(W, null, Z(b.value, (ae) => (s(), o("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (We) => ke(ae)
                    }, [
                      e("div", Ai, [
                        e("code", Vi, a(ae.package_id), 1),
                        ae.match_confidence ? (s(), I(Tt, {
                          key: 0,
                          confidence: ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      ae.description ? (s(), o("div", Wi, a(ae.description), 1)) : c("", !0)
                    ], 8, Fi))), 128))
                  ])) : p.value ? (s(), o("div", Gi, "Searching...")) : l.value ? (s(), o("div", ji, 'No packages found matching "' + a(l.value) + '"', 1)) : (s(), o("div", Hi, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), I(Le, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: xe(S, ["self"])
          }, [
            e("div", qi, [
              e("div", { class: "node-modal-header" }, [
                ue[10] || (ue[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Ki, [
                g(Ae, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ue[5] || (ue[5] = (ae) => d.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ji, [
                  g(re, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: i(() => [...ue[11] || (ue[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !d.value.trim(),
                    onClick: st
                  }, {
                    default: i(() => [...ue[12] || (ue[12] = [
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
}), Xi = /* @__PURE__ */ J(Yi, [["__scopeId", "data-v-281581bc"]]), Qi = { class: "node-info" }, Zi = { class: "node-info-text" }, er = { class: "item-body" }, tr = {
  key: 0,
  class: "resolved-state"
}, sr = {
  key: 1,
  class: "multiple-options"
}, or = { class: "options-list" }, nr = ["onClick"], ar = ["name", "value", "checked", "onChange"], lr = { class: "option-content" }, ir = { class: "option-header" }, rr = { class: "option-filename" }, dr = { class: "option-meta" }, cr = { class: "option-size" }, ur = { class: "option-category" }, mr = { class: "option-path" }, vr = { class: "action-buttons" }, fr = {
  key: 2,
  class: "unresolved"
}, gr = { class: "action-buttons" }, hr = /* @__PURE__ */ K({
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
    const n = t, r = u, h = P(() => !!n.choice);
    P(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), P(() => {
      var l, d;
      return ((d = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : d.filename) || "selected";
    });
    const v = P(() => {
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
    function y(l) {
      r("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const d = l / (1024 * 1024 * 1024);
      return d >= 1 ? `${d.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, d) => (s(), o("div", {
      class: oe(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Qi, [
        e("span", Zi, [
          d[7] || (d[7] = w("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: oe(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", er, [
        h.value ? (s(), o("div", tr, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (b) => r("clear-choice"))
          }, {
            default: i(() => [...d[8] || (d[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", sr, [
          d[12] || (d[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", or, [
            (s(!0), o(W, null, Z(t.options, (b, p) => (s(), o("label", {
              key: b.model.hash,
              class: oe(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (k) => y(p)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (k) => y(p)
              }, null, 40, ar),
              e("div", lr, [
                e("div", ir, [
                  e("span", rr, a(b.model.filename), 1),
                  g(Tt, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", dr, [
                  e("span", cr, a(m(b.model.size)), 1),
                  e("span", ur, a(b.model.category), 1)
                ]),
                e("div", mr, a(b.model.relative_path), 1)
              ])
            ], 10, nr))), 128))
          ]),
          e("div", vr, [
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: d[1] || (d[1] = (b) => r("search"))
            }, {
              default: i(() => [...d[9] || (d[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: d[2] || (d[2] = (b) => r("download-url"))
            }, {
              default: i(() => [...d[10] || (d[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[3] || (d[3] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...d[11] || (d[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", fr, [
          d[16] || (d[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", gr, [
            g(re, {
              variant: "primary",
              size: "sm",
              onClick: d[4] || (d[4] = (b) => r("search"))
            }, {
              default: i(() => [...d[13] || (d[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[5] || (d[5] = (b) => r("download-url"))
            }, {
              default: i(() => [...d[14] || (d[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: d[6] || (d[6] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...d[15] || (d[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), pr = /* @__PURE__ */ J(hr, [["__scopeId", "data-v-8a82fefa"]]), yr = { class: "model-resolution-step" }, wr = { class: "step-header" }, kr = { class: "step-info" }, br = { class: "step-title" }, _r = { class: "step-description" }, $r = { class: "stat-badge" }, Cr = {
  key: 1,
  class: "step-body"
}, xr = {
  key: 2,
  class: "empty-state"
}, Sr = { class: "model-search-modal" }, Ir = { class: "model-modal-body" }, Er = {
  key: 0,
  class: "model-search-results"
}, Mr = ["onClick"], zr = { class: "model-result-header" }, Lr = { class: "model-result-filename" }, Tr = { class: "model-result-meta" }, Rr = { class: "model-result-category" }, Dr = { class: "model-result-size" }, Nr = {
  key: 0,
  class: "model-result-path"
}, Or = {
  key: 1,
  class: "model-no-results"
}, Ur = {
  key: 2,
  class: "model-searching"
}, Pr = { class: "model-download-url-modal" }, Br = { class: "model-modal-body" }, Fr = { class: "model-input-group" }, Ar = { class: "model-input-group" }, Vr = { class: "model-modal-actions" }, Wr = /* @__PURE__ */ K({
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
    function r(O) {
      var S;
      return O && ((S = n[O]) == null ? void 0 : S[0]) || null;
    }
    const h = t, v = u, y = C(0), m = C(!1), l = C(!1), d = C(""), b = C(""), p = C(""), k = C([]), $ = C(!1), T = P(() => h.models[y.value]), _ = P(() => h.models.some((O) => O.is_download_intent)), f = P(() => h.models.filter(
      (O) => h.modelChoices.has(O.filename) || O.is_download_intent
    ).length), F = P(() => {
      var S;
      if (!T.value) return "";
      const O = r((S = T.value.reference) == null ? void 0 : S.node_type);
      return O ? `${O}/${T.value.filename}` : "";
    }), U = P(() => {
      var S;
      if (!T.value) return "not-found";
      const O = h.modelChoices.get(T.value.filename);
      if (O)
        switch (O.action) {
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
      return T.value.is_download_intent ? "download" : (S = T.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), L = P(() => {
      var S, se;
      if (!T.value) return;
      const O = h.modelChoices.get(T.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (S = O.selected_model) != null && S.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (se = T.value.options) != null && se.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function D(O) {
      O >= 0 && O < h.models.length && (y.value = O);
    }
    function V() {
      T.value && v("mark-optional", T.value.filename);
    }
    function B() {
      T.value && v("skip", T.value.filename);
    }
    function N(O) {
      T.value && v("option-selected", T.value.filename, O);
    }
    function z() {
      T.value && v("clear-choice", T.value.filename);
    }
    function x() {
      T.value && (d.value = T.value.filename, m.value = !0);
    }
    function M() {
      T.value && (b.value = T.value.download_source || "", p.value = T.value.target_path || F.value, l.value = !0);
    }
    function te() {
      m.value = !1, d.value = "", k.value = [];
    }
    function q() {
      l.value = !1, b.value = "", p.value = "";
    }
    function ee() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function me(O) {
      T.value && te();
    }
    function le() {
      !T.value || !b.value.trim() || (v("download-url", T.value.filename, b.value.trim(), p.value.trim() || void 0), q());
    }
    function Y(O) {
      if (!O) return "Unknown";
      const S = O / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, S) => {
      var se, X, $e;
      return s(), o("div", yr, [
        e("div", wr, [
          e("div", kr, [
            e("h3", br, a(_.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", _r, a(_.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", $r, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), I(cs, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": y.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (ke) => D(y.value - 1)),
          onNext: S[1] || (S[1] = (ke) => D(y.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        T.value ? (s(), o("div", Cr, [
          g(pr, {
            filename: T.value.filename,
            "node-type": ((se = T.value.reference) == null ? void 0 : se.node_type) || "Unknown",
            "has-multiple-options": !!((X = T.value.options) != null && X.length),
            options: T.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(T.value.filename),
            status: U.value,
            "status-label": L.value,
            onMarkOptional: V,
            onSkip: B,
            onDownloadUrl: M,
            onSearch: x,
            onOptionSelected: N,
            onClearChoice: z
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", xr, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Le, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: xe(te, ["self"])
          }, [
            e("div", Sr, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              e("div", Ir, [
                g(Ae, {
                  modelValue: d.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (ke) => d.value = ke),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Er, [
                  (s(!0), o(W, null, Z(k.value, (ke) => (s(), o("div", {
                    key: ke.hash,
                    class: "model-search-result-item",
                    onClick: (he) => me()
                  }, [
                    e("div", zr, [
                      e("code", Lr, a(ke.filename), 1)
                    ]),
                    e("div", Tr, [
                      e("span", Rr, a(ke.category), 1),
                      e("span", Dr, a(Y(ke.size)), 1)
                    ]),
                    ke.relative_path ? (s(), o("div", Nr, a(ke.relative_path), 1)) : c("", !0)
                  ], 8, Mr))), 128))
                ])) : d.value && !$.value ? (s(), o("div", Or, ' No models found matching "' + a(d.value) + '" ', 1)) : c("", !0),
                $.value ? (s(), o("div", Ur, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), I(Le, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: xe(q, ["self"])
          }, [
            e("div", Pr, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              e("div", Br, [
                e("div", Fr, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Ae, {
                    modelValue: b.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (ke) => b.value = ke),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Ar, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Ae, {
                    modelValue: p.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (ke) => p.value = ke),
                    placeholder: F.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Vr, [
                  g(re, {
                    variant: "secondary",
                    onClick: q
                  }, {
                    default: i(() => [...S[10] || (S[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !b.value.trim() || !p.value.trim(),
                    onClick: le
                  }, {
                    default: i(() => [...S[11] || (S[11] = [
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
}), Gr = /* @__PURE__ */ J(Wr, [["__scopeId", "data-v-c6acbada"]]), jr = { class: "applying-step" }, Hr = {
  key: 0,
  class: "phase-content"
}, qr = {
  key: 1,
  class: "phase-content"
}, Kr = { class: "phase-description" }, Jr = { class: "overall-progress" }, Yr = { class: "progress-bar" }, Xr = { class: "progress-label" }, Qr = { class: "install-list" }, Zr = { class: "install-icon" }, ed = { key: 0 }, td = {
  key: 1,
  class: "spinner"
}, sd = { key: 2 }, od = { key: 3 }, nd = {
  key: 0,
  class: "install-error"
}, ad = {
  key: 2,
  class: "phase-content"
}, ld = { class: "phase-header" }, id = { class: "phase-title" }, rd = { class: "completion-summary" }, dd = {
  key: 0,
  class: "summary-item success"
}, cd = { class: "summary-text" }, ud = {
  key: 1,
  class: "summary-item error"
}, md = { class: "summary-text" }, vd = {
  key: 2,
  class: "failed-list"
}, fd = { class: "failed-node-id" }, gd = { class: "failed-error" }, hd = {
  key: 4,
  class: "summary-item success"
}, pd = {
  key: 5,
  class: "restart-prompt"
}, yd = {
  key: 3,
  class: "phase-content error"
}, wd = { class: "error-message" }, kd = /* @__PURE__ */ K({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = P(() => {
      var d, b;
      const m = ((d = u.progress.nodeInstallProgress) == null ? void 0 : d.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), r = P(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), h = P(() => r.value.length > 0);
    function v(m, l) {
      var b, p;
      const d = (b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((k) => k.node_id === m);
      return d ? d.success ? "complete" : "failed" : ((p = u.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === l ? "installing" : "pending";
    }
    function y(m) {
      var l, d;
      return (d = (l = u.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : d.error;
    }
    return (m, l) => {
      var d, b, p, k;
      return s(), o("div", jr, [
        t.progress.phase === "resolving" ? (s(), o("div", Hr, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", qr, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Kr, " Installing " + a((((d = t.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) ?? 0) + 1) + " of " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Jr, [
            e("div", Yr, [
              e("div", {
                class: "progress-fill",
                style: Qe({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Xr, a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Qr, [
            (s(!0), o(W, null, Z(t.progress.nodesToInstall, ($, T) => (s(), o("div", {
              key: $,
              class: oe(["install-item", v($, T)])
            }, [
              e("span", Zr, [
                v($, T) === "pending" ? (s(), o("span", ed, "○")) : v($, T) === "installing" ? (s(), o("span", td, "◌")) : v($, T) === "complete" ? (s(), o("span", sd, "✓")) : v($, T) === "failed" ? (s(), o("span", od, "✗")) : c("", !0)
              ]),
              e("code", null, a($), 1),
              y($) ? (s(), o("span", nd, a(y($)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", ad, [
          e("div", ld, [
            e("span", {
              class: oe(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", id, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", rd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", dd, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", cd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (s(), o("div", ud, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", md, a(r.value.length) + " package" + a(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (s(), o("div", vd, [
              (s(!0), o(W, null, Z(r.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", fd, a($.node_id), 1),
                e("span", gd, a($.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(r.value.length) + ") ", 1)) : c("", !0),
            h.value ? c("", !0) : (s(), o("div", hd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", pd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = ($) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", yd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", wd, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), bd = /* @__PURE__ */ J(kd, [["__scopeId", "data-v-5efaae58"]]), _d = {
  key: 0,
  class: "loading-state"
}, $d = {
  key: 1,
  class: "wizard-content"
}, Cd = {
  key: 0,
  class: "step-content"
}, xd = { class: "analysis-summary" }, Sd = { class: "analysis-header" }, Id = { class: "summary-description" }, Ed = { class: "stats-grid" }, Md = { class: "stat-card" }, zd = { class: "stat-items" }, Ld = {
  key: 0,
  class: "stat-item success"
}, Td = { class: "stat-count" }, Rd = {
  key: 1,
  class: "stat-item info"
}, Dd = { class: "stat-count" }, Nd = {
  key: 2,
  class: "stat-item warning"
}, Od = { class: "stat-count" }, Ud = {
  key: 3,
  class: "stat-item error"
}, Pd = { class: "stat-count" }, Bd = { class: "stat-card" }, Fd = { class: "stat-items" }, Ad = { class: "stat-item success" }, Vd = { class: "stat-count" }, Wd = {
  key: 0,
  class: "stat-item info"
}, Gd = { class: "stat-count" }, jd = {
  key: 1,
  class: "stat-item warning"
}, Hd = { class: "stat-count" }, qd = {
  key: 2,
  class: "stat-item warning"
}, Kd = { class: "stat-count" }, Jd = {
  key: 3,
  class: "stat-item error"
}, Yd = { class: "stat-count" }, Xd = {
  key: 0,
  class: "status-message warning"
}, Qd = { class: "status-text" }, Zd = {
  key: 1,
  class: "status-message info"
}, ec = { class: "status-text" }, tc = {
  key: 2,
  class: "status-message info"
}, sc = { class: "status-text" }, oc = {
  key: 3,
  class: "status-message warning"
}, nc = { class: "status-text" }, ac = {
  key: 4,
  class: "status-message success"
}, lc = {
  key: 5,
  class: "category-mismatch-section"
}, ic = { class: "mismatch-list" }, rc = { class: "mismatch-path" }, dc = { class: "mismatch-target" }, cc = {
  key: 3,
  class: "step-content"
}, uc = { class: "review-summary" }, mc = { class: "review-stats" }, vc = { class: "review-stat" }, fc = { class: "stat-value" }, gc = { class: "review-stat" }, hc = { class: "stat-value" }, pc = { class: "review-stat" }, yc = { class: "stat-value" }, wc = { class: "review-stat" }, kc = { class: "stat-value" }, bc = {
  key: 0,
  class: "review-section"
}, _c = { class: "section-title" }, $c = { class: "review-items" }, Cc = { class: "item-name" }, xc = { class: "item-choice" }, Sc = {
  key: 0,
  class: "choice-badge install"
}, Ic = {
  key: 1,
  class: "choice-badge skip"
}, Ec = {
  key: 1,
  class: "review-section"
}, Mc = { class: "section-title" }, zc = { class: "review-items" }, Lc = { class: "item-name" }, Tc = { class: "item-choice" }, Rc = {
  key: 0,
  class: "choice-badge install"
}, Dc = {
  key: 1,
  class: "choice-badge optional"
}, Nc = {
  key: 2,
  class: "choice-badge skip"
}, Oc = {
  key: 1,
  class: "choice-badge pending"
}, Uc = {
  key: 2,
  class: "review-section"
}, Pc = { class: "section-title" }, Bc = { class: "review-items" }, Fc = { class: "item-name" }, Ac = { class: "item-choice" }, Vc = {
  key: 0,
  class: "choice-badge install"
}, Wc = {
  key: 1,
  class: "choice-badge download"
}, Gc = {
  key: 2,
  class: "choice-badge optional"
}, jc = {
  key: 3,
  class: "choice-badge skip"
}, Hc = {
  key: 4,
  class: "choice-badge skip"
}, qc = {
  key: 1,
  class: "choice-badge download"
}, Kc = {
  key: 2,
  class: "choice-badge pending"
}, Jc = {
  key: 3,
  class: "no-choices"
}, Yc = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: h, applyResolution: v, installNodes: y, queueModelDownloads: m, progress: l, resetProgress: d } = ds(), { loadPendingDownloads: b } = Et(), { openFileLocation: p } = Ee(), k = C(null), $ = C(!1), T = C(!1), _ = C(null), f = C("analysis"), F = C([]), U = C(/* @__PURE__ */ new Map()), L = C(/* @__PURE__ */ new Map()), D = C(/* @__PURE__ */ new Set()), V = P(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (N.value || M.value) && G.push({ id: "nodes", label: "Nodes" }), (z.value || x.value) && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), f.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), B = P(() => k.value ? k.value.stats.needs_user_input : !1), N = P(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), z = P(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = P(() => k.value ? k.value.stats.download_intents > 0 : !1), M = P(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), te = P(() => k.value ? k.value.nodes.resolved.length : 0), q = P(() => k.value ? k.value.models.resolved.filter((G) => G.has_category_mismatch) : []), ee = P(() => q.value.length > 0), me = P(() => {
      if (!k.value) return [];
      const G = k.value.nodes.resolved.filter((j) => !j.is_installed), R = /* @__PURE__ */ new Set();
      return G.filter((j) => R.has(j.package.package_id) ? !1 : (R.add(j.package.package_id), !0));
    }), le = P(() => {
      if (!k.value) return [];
      const G = k.value.nodes.resolved.filter((j) => !j.is_installed), R = /* @__PURE__ */ new Map();
      for (const j of G) {
        const pe = R.get(j.package.package_id);
        pe ? pe.node_types_count++ : R.set(j.package.package_id, {
          package_id: j.package.package_id,
          title: j.package.title,
          node_types_count: 1
        });
      }
      return Array.from(R.values());
    }), Y = P(() => me.value.filter((G) => !D.value.has(G.package.package_id))), O = P(() => k.value ? k.value.models.resolved.filter((G) => G.match_type === "download_intent").map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), S = P(() => {
      if (!k.value) return [];
      const G = k.value.nodes.unresolved.map((j) => ({
        node_type: j.reference.node_type,
        reason: j.reason,
        is_unresolved: !0,
        options: void 0
      })), R = k.value.nodes.ambiguous.map((j) => ({
        node_type: j.reference.node_type,
        has_multiple_options: !0,
        options: j.options.map((pe) => ({
          package_id: pe.package.package_id,
          title: pe.package.title,
          match_confidence: pe.match_confidence,
          match_type: pe.match_type,
          is_installed: pe.is_installed
        }))
      }));
      return [...G, ...R];
    }), se = P(() => {
      if (!k.value) return [];
      const G = k.value.models.unresolved.map((j) => ({
        filename: j.reference.widget_value,
        reference: j.reference,
        reason: j.reason,
        is_unresolved: !0,
        options: void 0
      })), R = k.value.models.ambiguous.map((j) => ({
        filename: j.reference.widget_value,
        reference: j.reference,
        has_multiple_options: !0,
        options: j.options.map((pe) => ({
          model: pe.model,
          match_confidence: pe.match_confidence,
          match_type: pe.match_type,
          has_download_source: pe.has_download_source
        }))
      }));
      return [...G, ...R];
    }), X = P(() => {
      const G = se.value, R = O.value.map((j) => ({
        filename: j.filename,
        reference: j.reference,
        is_download_intent: !0,
        resolved_model: j.resolved_model,
        download_source: j.download_source,
        target_path: j.target_path,
        options: void 0
      }));
      return [...G, ...R];
    }), $e = P(() => {
      let G = Y.value.length;
      for (const R of U.value.values())
        R.action === "install" && G++;
      for (const R of L.value.values())
        R.action === "select" && G++;
      return G;
    }), ke = P(() => {
      let G = 0;
      for (const R of L.value.values())
        R.action === "download" && G++;
      return G;
    }), he = P(() => {
      let G = 0;
      for (const R of U.value.values())
        R.action === "optional" && G++;
      for (const R of L.value.values())
        R.action === "optional" && G++;
      return G;
    }), st = P(() => {
      let G = D.value.size;
      for (const R of U.value.values())
        R.action === "skip" && G++;
      for (const R of L.value.values())
        R.action === "skip" && G++;
      for (const R of S.value)
        U.value.has(R.node_type) || G++;
      for (const R of se.value)
        L.value.has(R.filename) || G++;
      return G;
    }), ne = P(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, N.value) {
        const R = S.value.length, j = S.value.filter(
          (pe) => U.value.has(pe.node_type)
        ).length;
        G.nodes = { resolved: j, total: R };
      }
      if (z.value || x.value) {
        const R = X.value.length, j = X.value.filter(
          (pe) => L.value.has(pe.filename) || pe.is_download_intent
        ).length;
        G.models = { resolved: j, total: R };
      }
      if (G.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const R = l.totalFiles || 1, j = l.completedFiles.length;
        G.applying = { resolved: j, total: R };
      }
      return G;
    });
    function ue(G) {
      f.value = G;
    }
    function ot() {
      const G = V.value.findIndex((R) => R.id === f.value);
      G > 0 && (f.value = V.value[G - 1].id);
    }
    function Ke() {
      const G = V.value.findIndex((R) => R.id === f.value);
      G < V.value.length - 1 && (f.value = V.value[G + 1].id);
    }
    async function ae() {
      $.value = !0, _.value = null;
      try {
        k.value = await h(n.workflowName);
      } catch (G) {
        _.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function We() {
      F.value.includes("analysis") || F.value.push("analysis"), N.value || M.value ? f.value = "nodes" : z.value || x.value ? f.value = "models" : f.value = "review";
    }
    function Je(G) {
      U.value.set(G, { action: "optional" });
    }
    function Ge(G) {
      U.value.set(G, { action: "skip" });
    }
    function wt(G, R) {
      var pe;
      const j = S.value.find((Ce) => Ce.node_type === G);
      (pe = j == null ? void 0 : j.options) != null && pe[R] && U.value.set(G, {
        action: "install",
        package_id: j.options[R].package_id
      });
    }
    function ve(G, R) {
      U.value.set(G, {
        action: "install",
        package_id: R
      });
    }
    function Pe(G) {
      U.value.delete(G);
    }
    function H(G) {
      D.value.has(G) ? D.value.delete(G) : D.value.add(G);
    }
    function ce(G) {
      L.value.set(G, { action: "optional" });
    }
    function ge(G) {
      L.value.set(G, { action: "skip" });
    }
    function Me(G, R) {
      var pe;
      const j = se.value.find((Ce) => Ce.filename === G);
      (pe = j == null ? void 0 : j.options) != null && pe[R] && L.value.set(G, {
        action: "select",
        selected_model: j.options[R].model
      });
    }
    function lt(G, R, j) {
      L.value.set(G, {
        action: "download",
        url: R,
        target_path: j
      });
    }
    function Nt(G) {
      L.value.delete(G);
    }
    async function Ot(G) {
      try {
        await p(G);
      } catch (R) {
        _.value = R instanceof Error ? R.message : "Failed to open file location";
      }
    }
    async function Ut() {
      var G;
      T.value = !0, _.value = null, d(), l.phase = "resolving", f.value = "applying";
      try {
        const R = await v(n.workflowName, U.value, L.value, D.value);
        R.models_to_download && R.models_to_download.length > 0 && m(n.workflowName, R.models_to_download);
        const j = [
          ...R.nodes_to_install || [],
          ...Y.value.map((Ce) => Ce.package.package_id)
        ];
        l.nodesToInstall = [...new Set(j)], l.nodesToInstall.length > 0 && await y(n.workflowName), l.phase = "complete", await b();
        const pe = l.installError || ((G = l.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Ce) => !Ce.success));
        !l.needsRestart && !pe && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (R) {
        _.value = R instanceof Error ? R.message : "Failed to apply resolution", l.error = _.value, l.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function Pt() {
      r("refresh"), r("restart"), r("close");
    }
    async function ct() {
      var R;
      const G = ((R = l.nodeInstallProgress) == null ? void 0 : R.completedNodes.filter((j) => !j.success).map((j) => j.node_id)) || [];
      if (G.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, l.nodesToInstall = G, l.nodesInstalled = [], l.installError = void 0;
        try {
          await y(n.workflowName), l.phase = "complete";
        } catch (j) {
          l.error = j instanceof Error ? j.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ie(ae), (G, R) => (s(), I(at, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: _.value || void 0,
      "fixed-height": !0,
      onClose: R[1] || (R[1] = (j) => r("close"))
    }, {
      body: i(() => [
        $.value && !k.value ? (s(), o("div", _d, [...R[2] || (R[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", $d, [
          g(zl, {
            steps: V.value,
            "current-step": f.value,
            "completed-steps": F.value,
            "step-stats": ne.value,
            onStepChange: ue
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", Cd, [
            e("div", xd, [
              e("div", Sd, [
                R[3] || (R[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Id, " Found " + a(k.value.stats.total_nodes) + " nodes and " + a(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Ed, [
                e("div", Md, [
                  R[12] || (R[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", zd, [
                    te.value > 0 ? (s(), o("div", Ld, [
                      R[4] || (R[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Td, a(te.value), 1),
                      R[5] || (R[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Rd, [
                      R[6] || (R[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Dd, a(k.value.stats.packages_needing_installation), 1),
                      R[7] || (R[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", Nd, [
                      R[8] || (R[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Od, a(k.value.nodes.ambiguous.length), 1),
                      R[9] || (R[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", Ud, [
                      R[10] || (R[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pd, a(k.value.nodes.unresolved.length), 1),
                      R[11] || (R[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Bd, [
                  R[23] || (R[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Fd, [
                    e("div", Ad, [
                      R[13] || (R[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Vd, a(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      R[14] || (R[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", Wd, [
                      R[15] || (R[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Gd, a(k.value.stats.download_intents), 1),
                      R[16] || (R[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    ee.value ? (s(), o("div", jd, [
                      R[17] || (R[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Hd, a(q.value.length), 1),
                      R[18] || (R[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", qd, [
                      R[19] || (R[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Kd, a(k.value.models.ambiguous.length), 1),
                      R[20] || (R[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", Jd, [
                      R[21] || (R[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Yd, a(k.value.models.unresolved.length), 1),
                      R[22] || (R[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              B.value ? (s(), o("div", Xd, [
                R[24] || (R[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Qd, a(S.value.length + se.value.length) + " items need your input", 1)
              ])) : M.value ? (s(), o("div", Zd, [
                R[25] || (R[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ec, a(k.value.stats.packages_needing_installation) + " package" + a(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(k.value.stats.nodes_needing_installation) + " node type" + a(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", tc, [
                R[26] || (R[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", sc, a(k.value.stats.download_intents) + " model" + a(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ee.value ? (s(), o("div", oc, [
                R[27] || (R[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", nc, a(q.value.length) + " model" + a(q.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", ac, [...R[28] || (R[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ee.value ? (s(), o("div", lc, [
                R[31] || (R[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", ic, [
                  (s(!0), o(W, null, Z(q.value, (j) => {
                    var pe, Ce;
                    return s(), o("div", {
                      key: j.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", rc, a(j.actual_category) + "/" + a((pe = j.model) == null ? void 0 : pe.filename), 1),
                      R[30] || (R[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", dc, a((Ce = j.expected_categories) == null ? void 0 : Ce[0]) + "/", 1),
                      j.file_path ? (s(), I(re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Be) => Ot(j.file_path)
                      }, {
                        default: i(() => [...R[29] || (R[29] = [
                          w(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]);
                  }), 128))
                ])
              ])) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "nodes" ? (s(), I(Xi, {
            key: 1,
            nodes: S.value,
            "node-choices": U.value,
            "auto-resolved-packages": le.value,
            "skipped-packages": D.value,
            onMarkOptional: Je,
            onSkip: Ge,
            onOptionSelected: wt,
            onManualEntry: ve,
            onClearChoice: Pe,
            onPackageSkip: H
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          f.value === "models" ? (s(), I(Gr, {
            key: 2,
            models: X.value,
            "model-choices": L.value,
            onMarkOptional: ce,
            onSkip: ge,
            onOptionSelected: Me,
            onDownloadUrl: lt,
            onClearChoice: Nt
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          f.value === "review" ? (s(), o("div", cc, [
            e("div", uc, [
              R[36] || (R[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", mc, [
                e("div", vc, [
                  e("span", fc, a($e.value), 1),
                  R[32] || (R[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", gc, [
                  e("span", hc, a(ke.value), 1),
                  R[33] || (R[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", pc, [
                  e("span", yc, a(he.value), 1),
                  R[34] || (R[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", wc, [
                  e("span", kc, a(st.value), 1),
                  R[35] || (R[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              le.value.length > 0 ? (s(), o("div", bc, [
                e("h4", _c, "Node Packages (" + a(le.value.length) + ")", 1),
                e("div", $c, [
                  (s(!0), o(W, null, Z(le.value, (j) => (s(), o("div", {
                    key: j.package_id,
                    class: "review-item"
                  }, [
                    e("code", Cc, a(j.package_id), 1),
                    e("div", xc, [
                      D.value.has(j.package_id) ? (s(), o("span", Ic, "Skipped")) : (s(), o("span", Sc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              S.value.length > 0 ? (s(), o("div", Ec, [
                e("h4", Mc, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", zc, [
                  (s(!0), o(W, null, Z(S.value, (j) => {
                    var pe, Ce, Be, it;
                    return s(), o("div", {
                      key: j.node_type,
                      class: "review-item"
                    }, [
                      e("code", Lc, a(j.node_type), 1),
                      e("div", Tc, [
                        U.value.has(j.node_type) ? (s(), o(W, { key: 0 }, [
                          ((pe = U.value.get(j.node_type)) == null ? void 0 : pe.action) === "install" ? (s(), o("span", Rc, a((Ce = U.value.get(j.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((Be = U.value.get(j.node_type)) == null ? void 0 : Be.action) === "optional" ? (s(), o("span", Dc, " Optional ")) : ((it = U.value.get(j.node_type)) == null ? void 0 : it.action) === "skip" ? (s(), o("span", Nc, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", Oc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              X.value.length > 0 ? (s(), o("div", Uc, [
                e("h4", Pc, "Models (" + a(X.value.length) + ")", 1),
                e("div", Bc, [
                  (s(!0), o(W, null, Z(X.value, (j) => {
                    var pe, Ce, Be, it, je, Mt, ut;
                    return s(), o("div", {
                      key: j.filename,
                      class: "review-item"
                    }, [
                      e("code", Fc, a(j.filename), 1),
                      e("div", Ac, [
                        L.value.has(j.filename) ? (s(), o(W, { key: 0 }, [
                          ((pe = L.value.get(j.filename)) == null ? void 0 : pe.action) === "select" ? (s(), o("span", Vc, a((Be = (Ce = L.value.get(j.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : Be.filename), 1)) : ((it = L.value.get(j.filename)) == null ? void 0 : it.action) === "download" ? (s(), o("span", Wc, " Download ")) : ((je = L.value.get(j.filename)) == null ? void 0 : je.action) === "optional" ? (s(), o("span", Gc, " Optional ")) : ((Mt = L.value.get(j.filename)) == null ? void 0 : Mt.action) === "skip" ? (s(), o("span", jc, " Skip ")) : ((ut = L.value.get(j.filename)) == null ? void 0 : ut.action) === "cancel_download" ? (s(), o("span", Hc, " Cancel Download ")) : c("", !0)
                        ], 64)) : j.is_download_intent ? (s(), o("span", qc, " Pending Download ")) : (s(), o("span", Kc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              me.value.length === 0 && S.value.length === 0 && X.value.length === 0 ? (s(), o("div", Jc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          f.value === "applying" ? (s(), I(bd, {
            key: 4,
            progress: ye(l),
            onRestart: Pt,
            onRetryFailed: ct
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), I(re, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: ot
        }, {
          default: i(() => [...R[37] || (R[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        R[41] || (R[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || ye(l).phase === "complete" || ye(l).phase === "error" ? (s(), I(re, {
          key: 1,
          variant: "secondary",
          onClick: R[0] || (R[0] = (j) => r("close"))
        }, {
          default: i(() => [
            w(a(ye(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "analysis" ? (s(), I(re, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: We
        }, {
          default: i(() => [...R[38] || (R[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        f.value === "nodes" ? (s(), I(re, {
          key: 3,
          variant: "primary",
          onClick: Ke
        }, {
          default: i(() => [
            w(a(z.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        f.value === "models" ? (s(), I(re, {
          key: 4,
          variant: "primary",
          onClick: Ke
        }, {
          default: i(() => [...R[39] || (R[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        f.value === "review" ? (s(), I(re, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Ut
        }, {
          default: i(() => [...R[40] || (R[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Xc = /* @__PURE__ */ J(Yc, [["__scopeId", "data-v-6276cf1d"]]), Qc = { class: "search-input-wrapper" }, Zc = ["value", "placeholder"], eu = /* @__PURE__ */ K({
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
    let v;
    function y(l) {
      const d = l.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        r("update:modelValue", d);
      }, n.debounce)) : r("update:modelValue", d);
    }
    function m() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = h.value) == null || l.focus();
    }
    return Ie(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, d) => (s(), o("div", Qc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: y,
        onKeyup: nt(m, ["escape"])
      }, null, 40, Zc),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), tu = /* @__PURE__ */ J(eu, [["__scopeId", "data-v-266f857a"]]), su = { class: "search-bar" }, ou = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (s(), o("div", su, [
      g(tu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), pt = /* @__PURE__ */ J(ou, [["__scopeId", "data-v-3d51bbfd"]]), nu = { class: "section-group" }, au = {
  key: 0,
  class: "section-content"
}, lu = /* @__PURE__ */ K({
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
    function v() {
      n.collapsible && (h.value = !h.value, r("toggle", h.value));
    }
    return (y, m) => (s(), o("section", nu, [
      g(Ue, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: v
      }, {
        default: i(() => [
          w(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", au, [
        fe(y.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Se = /* @__PURE__ */ J(lu, [["__scopeId", "data-v-c48e33ed"]]), iu = { class: "item-header" }, ru = {
  key: 0,
  class: "item-icon"
}, du = { class: "item-info" }, cu = {
  key: 0,
  class: "item-title"
}, uu = {
  key: 1,
  class: "item-subtitle"
}, mu = {
  key: 0,
  class: "item-details"
}, vu = {
  key: 1,
  class: "item-actions"
}, fu = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = P(() => n.status ? `status-${n.status}` : "");
    return (h, v) => (s(), o("div", {
      class: oe(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: v[0] || (v[0] = (y) => t.clickable && h.$emit("click"))
    }, [
      e("div", iu, [
        h.$slots.icon ? (s(), o("span", ru, [
          fe(h.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", du, [
          h.$slots.title ? (s(), o("div", cu, [
            fe(h.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          h.$slots.subtitle ? (s(), o("div", uu, [
            fe(h.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", mu, [
        fe(h.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      h.$slots.actions ? (s(), o("div", vu, [
        fe(h.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ J(fu, [["__scopeId", "data-v-cc435e0e"]]), gu = { class: "loading-state" }, hu = { class: "loading-message" }, pu = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (s(), o("div", gu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", hu, a(t.message), 1)
    ]));
  }
}), et = /* @__PURE__ */ J(pu, [["__scopeId", "data-v-ad8436c9"]]), yu = { class: "error-state" }, wu = { class: "error-message" }, ku = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (s(), o("div", yu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", wu, a(t.message), 1),
      t.retry ? (s(), I(Q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), tt = /* @__PURE__ */ J(ku, [["__scopeId", "data-v-5397be48"]]), bu = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: h } = Ee();
    is();
    const v = C([]), y = C(!1), m = C(null), l = C(""), d = C(!0), b = C(!1), p = C(!1), k = C(!1), $ = C(null), T = P(
      () => v.value.filter((Y) => Y.status === "broken")
    ), _ = P(
      () => v.value.filter((Y) => Y.status === "new")
    ), f = P(
      () => v.value.filter((Y) => Y.status === "modified")
    ), F = P(
      () => v.value.filter((Y) => Y.status === "synced")
    ), U = P(() => {
      if (!l.value.trim()) return v.value;
      const Y = l.value.toLowerCase();
      return v.value.filter((O) => O.name.toLowerCase().includes(Y));
    }), L = P(
      () => T.value.filter(
        (Y) => !l.value.trim() || Y.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), D = P(
      () => _.value.filter(
        (Y) => !l.value.trim() || Y.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), V = P(
      () => f.value.filter(
        (Y) => !l.value.trim() || Y.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), B = P(
      () => F.value.filter(
        (Y) => !l.value.trim() || Y.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), N = P(
      () => b.value ? B.value : B.value.slice(0, 5)
    );
    async function z(Y = !1) {
      y.value = !0, m.value = null;
      try {
        v.value = await h(Y);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    u({ loadWorkflows: z });
    function x(Y) {
      $.value = Y, p.value = !0;
    }
    function M(Y) {
      $.value = Y, k.value = !0;
    }
    function te() {
      alert("Bulk resolution not yet implemented");
    }
    function q() {
      r("refresh");
    }
    async function ee() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function me(Y) {
      const O = [];
      return Y.missing_nodes > 0 && O.push(`${Y.missing_nodes} missing node${Y.missing_nodes > 1 ? "s" : ""}`), Y.missing_models > 0 && O.push(`${Y.missing_models} missing model${Y.missing_models > 1 ? "s" : ""}`), Y.models_with_category_mismatch && Y.models_with_category_mismatch > 0 && O.push(`${Y.models_with_category_mismatch} model${Y.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), Y.pending_downloads && Y.pending_downloads > 0 && O.push(`${Y.pending_downloads} pending download${Y.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function le(Y) {
      const O = Y.sync_state === "new" ? "New" : Y.sync_state === "modified" ? "Modified" : Y.sync_state === "synced" ? "Synced" : Y.sync_state;
      return Y.has_path_sync_issues && Y.models_needing_path_sync && Y.models_needing_path_sync > 0 ? `${Y.models_needing_path_sync} model path${Y.models_needing_path_sync > 1 ? "s" : ""} need${Y.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return Ie(z), (Y, O) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, { title: "WORKFLOWS" }, {
            actions: i(() => [
              T.value.length > 0 ? (s(), I(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: i(() => [...O[8] || (O[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(pt, {
            modelValue: l.value,
            "onUpdate:modelValue": O[0] || (O[0] = (S) => l.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), I(et, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), I(tt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            L.value.length ? (s(), I(Se, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(L.value, (S) => (s(), I(ze, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: i(() => [...O[9] || (O[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(me(S)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => M(S.name)
                    }, {
                      default: i(() => [...O[10] || (O[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(S.name)
                    }, {
                      default: i(() => [...O[11] || (O[11] = [
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
            D.value.length ? (s(), I(Se, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(D.value, (S) => (s(), I(ze, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(le(S)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(S.name)
                    }, {
                      default: i(() => [...O[12] || (O[12] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            V.value.length ? (s(), I(Se, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(V.value, (S) => (s(), I(ze, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...O[13] || (O[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(le(S)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(S.name)
                    }, {
                      default: i(() => [...O[14] || (O[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            B.value.length ? (s(), I(Se, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": d.value,
              onToggle: O[2] || (O[2] = (S) => d.value = S)
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(N.value, (S) => (s(), I(ze, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(le(S)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => x(S.name)
                    }, {
                      default: i(() => [...O[15] || (O[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && B.value.length > 5 ? (s(), I(Q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (S) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + a(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            U.value.length ? c("", !0) : (s(), I(Ve, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && $.value ? (s(), I(yl, {
        key: 0,
        "workflow-name": $.value,
        onClose: O[3] || (O[3] = (S) => p.value = !1),
        onResolve: O[4] || (O[4] = (S) => M($.value)),
        onRefresh: O[5] || (O[5] = (S) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      k.value && $.value ? (s(), I(Xc, {
        key: 1,
        "workflow-name": $.value,
        onClose: O[6] || (O[6] = (S) => k.value = !1),
        onInstall: q,
        onRefresh: O[7] || (O[7] = (S) => r("refresh")),
        onRestart: ee
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), _u = /* @__PURE__ */ J(bu, [["__scopeId", "data-v-591d06d5"]]), $u = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: oe(["summary-bar", t.variant])
    }, [
      fe(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ J($u, [["__scopeId", "data-v-ccb7816e"]]), Cu = {
  key: 0,
  class: "model-details"
}, xu = { class: "detail-section" }, Su = { class: "detail-row" }, Iu = { class: "detail-value mono" }, Eu = { class: "detail-row" }, Mu = { class: "detail-value mono" }, zu = { class: "detail-row" }, Lu = { class: "detail-value mono" }, Tu = { class: "detail-row" }, Ru = { class: "detail-value" }, Du = { class: "detail-row" }, Nu = { class: "detail-value" }, Ou = { class: "detail-row" }, Uu = { class: "detail-value" }, Pu = { class: "detail-section" }, Bu = { class: "section-header" }, Fu = {
  key: 0,
  class: "locations-list"
}, Au = { class: "location-path mono" }, Vu = {
  key: 0,
  class: "location-modified"
}, Wu = ["onClick"], Gu = {
  key: 1,
  class: "empty-state"
}, ju = { class: "detail-section" }, Hu = { class: "section-header" }, qu = {
  key: 0,
  class: "sources-list"
}, Ku = { class: "source-type" }, Ju = ["href"], Yu = ["disabled", "onClick"], Xu = {
  key: 1,
  class: "empty-state"
}, Qu = { class: "add-source-form" }, Zu = ["disabled"], em = {
  key: 2,
  class: "source-error"
}, tm = {
  key: 3,
  class: "source-success"
}, sm = /* @__PURE__ */ K({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: h, removeModelSource: v, openFileLocation: y } = Ee(), m = C(null), l = C(!0), d = C(null), b = C(""), p = C(!1), k = C(null), $ = C(null), T = C(null), _ = C(null);
    let f = null;
    function F(z, x = "success", M = 2e3) {
      f && clearTimeout(f), _.value = { message: z, type: x }, f = setTimeout(() => {
        _.value = null;
      }, M);
    }
    function U(z) {
      if (!z) return "Unknown";
      const x = 1024 * 1024 * 1024, M = 1024 * 1024;
      return z >= x ? `${(z / x).toFixed(1)} GB` : z >= M ? `${(z / M).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function L(z) {
      navigator.clipboard.writeText(z), F("Copied to clipboard!");
    }
    async function D(z) {
      try {
        await y(z), F("Opening file location...");
      } catch {
        F("Failed to open location", "error");
      }
    }
    async function V() {
      if (!(!b.value.trim() || !m.value)) {
        p.value = !0, $.value = null, T.value = null;
        try {
          await h(m.value.hash, b.value.trim()), T.value = "Source added successfully!", b.value = "", await N();
        } catch (z) {
          $.value = z instanceof Error ? z.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function B(z) {
      if (m.value) {
        k.value = z, $.value = null, T.value = null;
        try {
          await v(m.value.hash, z), F("Source removed"), await N();
        } catch (x) {
          $.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function N() {
      l.value = !0, d.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (z) {
        d.value = z instanceof Error ? z.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ie(N), (z, x) => {
      var M;
      return s(), o(W, null, [
        g(at, {
          title: `Model Details: ${((M = m.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: d.value,
          onClose: x[5] || (x[5] = (te) => z.$emit("close"))
        }, {
          body: i(() => {
            var te, q, ee, me;
            return [
              m.value ? (s(), o("div", Cu, [
                e("section", xu, [
                  e("div", Su, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Iu, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (le) => L(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Eu, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Mu, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (le) => L(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", zu, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Lu, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (le) => L(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Tu, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Ru, a(U(m.value.size)), 1)
                  ]),
                  e("div", Du, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Nu, a(m.value.category), 1)
                  ]),
                  e("div", Ou, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Uu, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Pu, [
                  e("h4", Bu, "Locations (" + a(((te = m.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (q = m.value.locations) != null && q.length ? (s(), o("div", Fu, [
                    (s(!0), o(W, null, Z(m.value.locations, (le, Y) => (s(), o("div", {
                      key: Y,
                      class: "location-item"
                    }, [
                      e("span", Au, a(le.path), 1),
                      le.modified ? (s(), o("span", Vu, "Modified: " + a(le.modified), 1)) : c("", !0),
                      le.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => D(le.path)
                      }, " Open File Location ", 8, Wu)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Gu, "No locations found"))
                ]),
                e("section", ju, [
                  e("h4", Hu, "Download Sources (" + a(((ee = m.value.sources) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (me = m.value.sources) != null && me.length ? (s(), o("div", qu, [
                    (s(!0), o(W, null, Z(m.value.sources, (le, Y) => (s(), o("div", {
                      key: Y,
                      class: "source-item"
                    }, [
                      e("span", Ku, a(le.type) + ":", 1),
                      e("a", {
                        href: le.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(le.url), 9, Ju),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === le.url,
                        onClick: (O) => B(le.url)
                      }, a(k.value === le.url ? "..." : "×"), 9, Yu)
                    ]))), 128))
                  ])) : (s(), o("div", Xu, " No download sources configured ")),
                  e("div", Qu, [
                    mt(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (le) => b.value = le),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ns, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || p.value,
                      onClick: V
                    }, a(p.value ? "Adding..." : "Add Source"), 9, Zu)
                  ]),
                  $.value ? (s(), o("p", em, a($.value), 1)) : c("", !0),
                  T.value ? (s(), o("p", tm, a(T.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (te) => z.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Le, { to: "body" }, [
          _.value ? (s(), o("div", {
            key: 0,
            class: oe(["toast", _.value.type])
          }, a(_.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), us = /* @__PURE__ */ J(sm, [["__scopeId", "data-v-f15cbb56"]]), om = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: h } = Ee(), v = C([]), y = C([]), m = C("production"), l = C(!1), d = C(null), b = C(""), p = C(!1), k = C(null);
    function $() {
      p.value = !1, n("navigate", "model-index");
    }
    const T = P(
      () => v.value.reduce((N, z) => N + (z.size || 0), 0)
    ), _ = P(() => {
      if (!b.value.trim()) return v.value;
      const N = b.value.toLowerCase();
      return v.value.filter((z) => z.filename.toLowerCase().includes(N));
    }), f = P(() => {
      if (!b.value.trim()) return y.value;
      const N = b.value.toLowerCase();
      return y.value.filter((z) => z.filename.toLowerCase().includes(N));
    }), F = P(() => {
      const N = {};
      for (const x of _.value) {
        const M = x.type || "other";
        N[M] || (N[M] = []), N[M].push(x);
      }
      const z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([x], [M]) => {
        const te = z.indexOf(x), q = z.indexOf(M);
        return te >= 0 && q >= 0 ? te - q : te >= 0 ? -1 : q >= 0 ? 1 : x.localeCompare(M);
      }).map(([x, M]) => ({ type: x, models: M }));
    });
    function U(N) {
      if (!N) return "Unknown";
      const z = N / (1024 * 1024);
      return z >= 1024 ? `${(z / 1024).toFixed(1)} GB` : `${z.toFixed(0)} MB`;
    }
    function L(N) {
      k.value = N.hash || N.filename;
    }
    function D(N) {
      n("navigate", "model-index");
    }
    function V(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function B() {
      l.value = !0, d.value = null;
      try {
        const N = await r();
        v.value = N, y.value = [];
        const z = await h();
        m.value = z.environment || "production";
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ie(B), (N, z) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (x) => p.value = !0)
          })
        ]),
        search: i(() => [
          g(pt, {
            modelValue: b.value,
            "onUpdate:modelValue": z[1] || (z[1] = (x) => b.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(et, {
            key: 0,
            message: "Loading environment models..."
          })) : d.value ? (s(), I(tt, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), I(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(v.value.length) + " models • " + a(U(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(W, null, Z(F.value, (x) => (s(), I(Se, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(x.models, (M) => (s(), I(ze, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...z[4] || (z[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(M.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(U(M.size)), 1)
                  ]),
                  details: i(() => [
                    g(be, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(be, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => L(M)
                    }, {
                      default: i(() => [...z[5] || (z[5] = [
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
            f.value.length ? (s(), I(Se, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(f.value, (x) => (s(), I(ze, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(x.filename), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var M;
                    return [
                      g(be, {
                        label: "Required by:",
                        value: ((M = x.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => V(x.filename)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => D(x.filename)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
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
            !_.value.length && !f.value.length ? (s(), I(Ve, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Ze, {
        show: p.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (x) => p.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            z[10] || (z[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            z[11] || (z[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...z[12] || (z[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(us, {
        key: 0,
        identifier: k.value,
        onClose: z[3] || (z[3] = (x) => k.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), nm = /* @__PURE__ */ J(om, [["__scopeId", "data-v-cb4f12b3"]]), am = {
  key: 0,
  class: "indexing-progress"
}, lm = { class: "progress-info" }, im = { class: "progress-label" }, rm = { class: "progress-count" }, dm = { class: "progress-bar" }, cm = { class: "modal-content" }, um = { class: "modal-header" }, mm = { class: "modal-body" }, vm = { class: "input-group" }, fm = { class: "current-path" }, gm = { class: "input-group" }, hm = { class: "modal-footer" }, pm = { class: "modal-content" }, ym = { class: "modal-header" }, wm = { class: "modal-body" }, km = { class: "input-group" }, bm = { class: "input-group" }, _m = { class: "modal-footer" }, $m = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: h,
      setModelsDirectory: v
    } = Ee(), { addToQueue: y } = Et(), m = u, l = C([]), d = C(!1), b = C(!1), p = C(null), k = C(""), $ = C(!1), T = C(null), _ = C(!1), f = C(null), F = C(""), U = C(!1), L = C(!1), D = C(""), V = C(""), B = C(null), N = P(
      () => l.value.reduce((O, S) => O + (S.size || 0), 0)
    ), z = P(() => {
      if (!k.value.trim()) return l.value;
      const O = k.value.toLowerCase();
      return l.value.filter((S) => {
        const se = S, X = S.sha256 || se.sha256_hash || "";
        return S.filename.toLowerCase().includes(O) || X.toLowerCase().includes(O);
      });
    }), x = P(() => {
      const O = {};
      for (const se of z.value) {
        const X = se.type || "other";
        O[X] || (O[X] = []), O[X].push(se);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([se], [X]) => {
        const $e = S.indexOf(se), ke = S.indexOf(X);
        return $e >= 0 && ke >= 0 ? $e - ke : $e >= 0 ? -1 : ke >= 0 ? 1 : se.localeCompare(X);
      }).map(([se, X]) => ({ type: se, models: X }));
    });
    function M(O) {
      if (!O) return "Unknown";
      const S = 1024 * 1024 * 1024, se = 1024 * 1024;
      return O >= S ? `${(O / S).toFixed(1)} GB` : O >= se ? `${(O / se).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function te(O) {
      T.value = O.hash || O.filename;
    }
    async function q() {
      b.value = !0, p.value = null;
      try {
        const O = await r();
        await le(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function ee() {
      if (F.value.trim()) {
        U.value = !0, p.value = null;
        try {
          const O = await v(F.value.trim());
          f.value = O.path, _.value = !1, F.value = "", await le(), console.log(`Directory changed: ${O.models_indexed} models indexed`), m("refresh");
        } catch (O) {
          p.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          U.value = !1;
        }
      }
    }
    function me() {
      if (!D.value.trim() || !V.value.trim()) return;
      const O = V.value.split("/").pop() || "model.safetensors";
      y([{
        workflow: "__manual__",
        filename: O,
        url: D.value.trim(),
        targetPath: V.value.trim()
      }]), D.value = "", V.value = "", L.value = !1;
    }
    async function le() {
      d.value = !0, p.value = null;
      try {
        l.value = await n();
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Y() {
      try {
        const O = await h();
        f.value = O.path;
      } catch {
      }
    }
    return Ie(() => {
      le(), Y();
    }), (O, S) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (se) => $.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: q
              }, {
                default: i(() => [
                  w(a(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (se) => _.value = !0)
              }, {
                default: i(() => [...S[15] || (S[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (se) => L.value = !0)
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
                  w(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          B.value ? (s(), o("div", am, [
            e("div", lm, [
              e("span", im, a(B.value.message), 1),
              e("span", rm, a(B.value.current) + "/" + a(B.value.total), 1)
            ]),
            e("div", dm, [
              e("div", {
                class: "progress-fill",
                style: Qe({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g(pt, {
            modelValue: k.value,
            "onUpdate:modelValue": S[3] || (S[3] = (se) => k.value = se),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          d.value || B.value ? (s(), I(et, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : p.value ? (s(), I(tt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            l.value.length ? (s(), I(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(l.value.length) + " models • " + a(M(N.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(W, null, Z(x.value, (se) => (s(), I(Se, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(se.models, (X) => (s(), I(ze, {
                  key: X.sha256 || X.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...S[17] || (S[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(X.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(M(X.size)), 1)
                  ]),
                  details: i(() => [
                    g(be, {
                      label: "Hash:",
                      value: X.hash ? X.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => te(X)
                    }, {
                      default: i(() => [...S[18] || (S[18] = [
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
            z.value.length ? c("", !0) : (s(), I(Ve, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(Ze, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (se) => $.value = !1)
      }, {
        content: i(() => [...S[19] || (S[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), I(us, {
        key: 0,
        identifier: T.value,
        onClose: S[5] || (S[5] = (se) => T.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), I(Le, { to: "body" }, [
        _.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = xe((se) => _.value = !1, ["self"]))
        }, [
          e("div", cm, [
            e("div", um, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (se) => _.value = !1)
              }, "✕")
            ]),
            e("div", mm, [
              e("div", vm, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", fm, a(f.value || "Not set"), 1)
              ]),
              e("div", gm, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                g(Ae, {
                  modelValue: F.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (se) => F.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", hm, [
              g(re, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (se) => _.value = !1)
              }, {
                default: i(() => [...S[24] || (S[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !F.value.trim() || U.value,
                loading: U.value,
                onClick: ee
              }, {
                default: i(() => [
                  w(a(U.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), I(Le, { to: "body" }, [
        L.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = xe((se) => L.value = !1, ["self"]))
        }, [
          e("div", pm, [
            e("div", ym, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (se) => L.value = !1)
              }, "✕")
            ]),
            e("div", wm, [
              e("div", km, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                g(Ae, {
                  modelValue: D.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (se) => D.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", bm, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Ae, {
                  modelValue: V.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (se) => V.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", _m, [
              g(re, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (se) => L.value = !1)
              }, {
                default: i(() => [...S[29] || (S[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !D.value.trim() || !V.value.trim(),
                onClick: me
              }, {
                default: i(() => [...S[30] || (S[30] = [
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
}), Cm = /* @__PURE__ */ J($m, [["__scopeId", "data-v-73b78d84"]]), xm = { class: "node-details" }, Sm = { class: "status-row" }, Im = {
  key: 0,
  class: "detail-row"
}, Em = { class: "value" }, Mm = { class: "detail-row" }, zm = { class: "value" }, Lm = {
  key: 1,
  class: "detail-row"
}, Tm = { class: "value mono" }, Rm = {
  key: 2,
  class: "detail-row"
}, Dm = ["href"], Nm = {
  key: 3,
  class: "detail-row"
}, Om = { class: "value mono small" }, Um = { class: "detail-row" }, Pm = {
  key: 0,
  class: "value"
}, Bm = {
  key: 1,
  class: "workflow-list"
}, Fm = /* @__PURE__ */ K({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, h = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), y = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, l) => (s(), I(at, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (d) => r("close"))
    }, {
      body: i(() => [
        e("div", xm, [
          e("div", Sm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", h.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Im, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Em, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", Mm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", zm, a(y.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Lm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Tm, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", Rm, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(a(t.node.repository) + " ", 1),
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
            ], 8, Dm)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", Nm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Om, a(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Um, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Pm, " Not used in any workflows ")) : (s(), o("div", Bm, [
              (s(!0), o(W, null, Z(t.node.used_in_workflows, (d) => (s(), o("span", {
                key: d,
                class: "workflow-tag"
              }, a(d), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (d) => r("close"))
        }, {
          default: i(() => [...l[11] || (l[11] = [
            w(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Am = /* @__PURE__ */ J(Fm, [["__scopeId", "data-v-b342f626"]]), Vm = { key: 0 }, Wm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Gm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, jm = /* @__PURE__ */ K({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: h, installNode: v, uninstallNode: y } = Ee(), m = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = C(!1), d = C(null), b = C(""), p = C(!1), k = C(null), $ = P(() => {
      if (!b.value.trim()) return m.value.nodes;
      const x = b.value.toLowerCase();
      return m.value.nodes.filter(
        (M) => {
          var te, q;
          return M.name.toLowerCase().includes(x) || ((te = M.description) == null ? void 0 : te.toLowerCase().includes(x)) || ((q = M.repository) == null ? void 0 : q.toLowerCase().includes(x));
        }
      );
    }), T = P(
      () => $.value.filter((x) => x.installed && x.tracked)
    ), _ = P(
      () => $.value.filter((x) => !x.installed && x.tracked)
    ), f = P(
      () => $.value.filter((x) => x.installed && !x.tracked)
    );
    function F(x) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[x] || x;
    }
    function U(x) {
      return !x.used_in_workflows || x.used_in_workflows.length === 0 ? "Not used in any workflows" : x.used_in_workflows.length === 1 ? x.used_in_workflows[0] : `${x.used_in_workflows.length} workflows`;
    }
    function L(x) {
      k.value = x;
    }
    function D() {
      n("open-node-manager");
    }
    async function V(x) {
      if (confirm(`Track "${x}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const M = await h(x);
          M.status === "success" ? (alert(`Node "${x}" is now tracked as development!`), await z()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function B(x) {
      if (confirm(`Remove untracked node "${x}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const M = await y(x);
          M.status === "success" ? (alert(`Node "${x}" removed!`), await z()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function N(x) {
      if (confirm(`Install node "${x}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const M = await v(x);
          M.status === "success" ? (alert(`Node "${x}" installed successfully!`), await z()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function z() {
      l.value = !0, d.value = null;
      try {
        m.value = await r();
      } catch (x) {
        d.value = x instanceof Error ? x.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ie(z), (x, M) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (te) => p.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: i(() => [...M[5] || (M[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(pt, {
            modelValue: b.value,
            "onUpdate:modelValue": M[1] || (M[1] = (te) => b.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(et, {
            key: 0,
            message: "Loading nodes..."
          })) : d.value ? (s(), I(tt, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            m.value.total_count ? (s(), I(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(W, { key: 0 }, [
                  w(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  w(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            f.value.length ? (s(), I(Se, {
              key: 1,
              title: "UNTRACKED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(f.value, (te) => (s(), I(ze, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: i(() => [...M[6] || (M[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(a(te.name), 1)
                  ]),
                  subtitle: i(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(be, {
                      label: "Used by:",
                      value: U(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(te)
                    }, {
                      default: i(() => [...M[8] || (M[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => V(te.name)
                    }, {
                      default: i(() => [...M[9] || (M[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => B(te.name)
                    }, {
                      default: i(() => [...M[10] || (M[10] = [
                        w(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            T.value.length ? (s(), I(Se, {
              key: 2,
              title: "INSTALLED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(T.value, (te) => (s(), I(ze, {
                  key: te.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(a(te.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(a(te.name), 1)
                  ]),
                  subtitle: i(() => [
                    te.version ? (s(), o("span", Vm, a(te.source === "development" ? "" : "v") + a(te.version), 1)) : (s(), o("span", Wm, "version unknown")),
                    e("span", Gm, " • " + a(F(te.source)), 1)
                  ]),
                  details: i(() => [
                    g(be, {
                      label: "Used by:",
                      value: U(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(te)
                    }, {
                      default: i(() => [...M[11] || (M[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: D
                    }, {
                      default: i(() => [...M[12] || (M[12] = [
                        w(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (s(), I(Se, {
              key: 3,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(_.value, (te) => (s(), I(ze, {
                  key: te.name,
                  status: "missing"
                }, {
                  icon: i(() => [...M[13] || (M[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(a(te.name), 1)
                  ]),
                  subtitle: i(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(be, {
                      label: "Required by:",
                      value: U(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(te)
                    }, {
                      default: i(() => [...M[15] || (M[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N(te.name)
                    }, {
                      default: i(() => [...M[16] || (M[16] = [
                        w(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !T.value.length && !_.value.length && !f.value.length ? (s(), I(Ve, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Ze, {
        show: p.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (te) => p.value = !1)
      }, {
        content: i(() => [...M[17] || (M[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            w(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            w(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            w(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: M[2] || (M[2] = (te) => p.value = !1)
          }, {
            default: i(() => [...M[18] || (M[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(Am, {
        key: 0,
        node: k.value,
        onClose: M[4] || (M[4] = (te) => k.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Hm = /* @__PURE__ */ J(jm, [["__scopeId", "data-v-4ac1465a"]]), qm = { class: "remote-url-display" }, Km = ["title"], Jm = ["title"], Ym = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Xm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Qm = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = C(!1), r = P(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const v = u.url.slice(0, Math.floor(u.maxLength * 0.6)), y = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${v}...${y}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, y) => (s(), o("div", qm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Km),
      e("button", {
        class: oe(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Xm, [...y[1] || (y[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Ym, [...y[0] || (y[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Jm)
    ]));
  }
}), Zt = /* @__PURE__ */ J(Qm, [["__scopeId", "data-v-7768a58d"]]), Zm = { class: "remote-title" }, ev = {
  key: 0,
  class: "default-badge"
}, tv = {
  key: 1,
  class: "sync-badge"
}, sv = {
  key: 0,
  class: "ahead"
}, ov = {
  key: 1,
  class: "behind"
}, nv = {
  key: 0,
  class: "tracking-info"
}, av = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, r = P(() => n.fetchingRemote === n.remote.name), h = P(() => n.remote.is_default), v = P(() => !!n.trackingBranch);
    function y(m) {
      const l = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), p = Math.floor(b / 6e4);
      if (p < 1) return "Just now";
      if (p < 60) return `${p}m ago`;
      const k = Math.floor(p / 60);
      if (k < 24) return `${k}h ago`;
      const $ = Math.floor(k / 24);
      return $ < 7 ? `${$}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), I(ze, {
      status: h.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(a(h.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Zm, [
          e("span", null, a(t.remote.name), 1),
          h.value ? (s(), o("span", ev, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", tv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", sv, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", ov, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", nv, " Tracking: " + a(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var d;
        return [
          g(be, { label: "Fetch:" }, {
            default: i(() => [
              g(Zt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(be, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(Zt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (d = t.syncStatus) != null && d.last_fetch ? (s(), I(be, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, a(y(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        g(Q, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: l[0] || (l[0] = (d) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...l[3] || (l[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(Q, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (d) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        h.value ? c("", !0) : (s(), I(Q, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (d) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...l[5] || (l[5] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), lv = /* @__PURE__ */ J(av, [["__scopeId", "data-v-17362e45"]]), iv = ["for"], rv = {
  key: 0,
  class: "base-form-field-required"
}, dv = { class: "base-form-field-input" }, cv = {
  key: 1,
  class: "base-form-field-error"
}, uv = {
  key: 2,
  class: "base-form-field-hint"
}, mv = /* @__PURE__ */ K({
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
    const u = t, n = P(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, h) => (s(), o("div", {
      class: oe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        w(a(t.label) + " ", 1),
        t.required ? (s(), o("span", rv, "*")) : c("", !0)
      ], 8, iv)) : c("", !0),
      e("div", dv, [
        fe(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", cv, a(t.error), 1)) : t.hint ? (s(), o("span", uv, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ J(mv, [["__scopeId", "data-v-9a1cf296"]]), vv = { class: "remote-form" }, fv = { class: "form-header" }, gv = { class: "form-body" }, hv = {
  key: 0,
  class: "form-error"
}, pv = { class: "form-actions" }, yv = /* @__PURE__ */ K({
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
    }), v = C(!1), y = C(null);
    Rt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = P(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        y.value = null, v.value = !0;
        try {
          r("submit", h.value);
        } catch (d) {
          y.value = d instanceof Error ? d.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (d, b) => (s(), o("div", vv, [
      e("div", fv, [
        g(Ue, null, {
          default: i(() => [
            w(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", gv, [
        g(Vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Ae, {
              modelValue: h.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (p) => h.value.name = p),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Ae, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (p) => h.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Vt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Ae, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (p) => h.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y.value ? (s(), o("div", hv, a(y.value), 1)) : c("", !0)
      ]),
      e("div", pv, [
        g(Q, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: l
        }, {
          default: i(() => [
            w(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(Q, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (p) => d.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), wv = /* @__PURE__ */ J(yv, [["__scopeId", "data-v-56021b18"]]), kv = { key: 0 }, bv = /* @__PURE__ */ K({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: h,
      fetchRemote: v,
      getRemoteSyncStatus: y
    } = Ee(), m = C([]), l = C(null), d = C({}), b = C(!1), p = C(null), k = C(""), $ = C(!1), T = C(null), _ = C(!1), f = C("add"), F = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = P(() => {
      if (!k.value.trim()) return m.value;
      const q = k.value.toLowerCase();
      return m.value.filter(
        (ee) => ee.name.toLowerCase().includes(q) || ee.fetch_url.toLowerCase().includes(q) || ee.push_url.toLowerCase().includes(q)
      );
    });
    function L(q) {
      var ee;
      return ((ee = l.value) == null ? void 0 : ee.remote) === q;
    }
    async function D() {
      b.value = !0, p.value = null;
      try {
        const q = await u();
        m.value = q.remotes, l.value = q.current_branch_tracking || null, await Promise.all(
          q.remotes.map(async (ee) => {
            const me = await y(ee.name);
            me && (d.value[ee.name] = me);
          })
        );
      } catch (q) {
        p.value = q instanceof Error ? q.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function V() {
      f.value = "add", F.value = { name: "", fetchUrl: "", pushUrl: "" }, _.value = !0;
    }
    function B(q) {
      const ee = m.value.find((me) => me.name === q);
      ee && (f.value = "edit", F.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, _.value = !0);
    }
    async function N(q) {
      try {
        f.value === "add" ? await n(q.name, q.fetchUrl) : await h(q.name, q.fetchUrl, q.pushUrl || void 0), _.value = !1, await D();
      } catch (ee) {
        p.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function z() {
      _.value = !1, F.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function x(q) {
      T.value = q;
      try {
        await v(q);
        const ee = await y(q);
        ee && (d.value[q] = ee);
      } catch (ee) {
        p.value = ee instanceof Error ? ee.message : "Fetch failed";
      } finally {
        T.value = null;
      }
    }
    async function M(q) {
      if (confirm(`Remove remote "${q}"?`))
        try {
          await r(q), await D();
        } catch (ee) {
          p.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function te() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Ie(D), (q, ee) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (me) => $.value = !0)
          }, {
            actions: i(() => [
              _.value ? c("", !0) : (s(), I(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...ee[3] || (ee[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          _.value ? c("", !0) : (s(), I(pt, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (me) => k.value = me),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (s(), I(et, {
            key: 0,
            message: "Loading remotes..."
          })) : p.value ? (s(), I(tt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value ? (s(), I(wv, {
              key: 0,
              mode: f.value,
              "remote-name": F.value.name,
              "fetch-url": F.value.fetchUrl,
              "push-url": F.value.pushUrl,
              onSubmit: N,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !_.value ? (s(), I(yt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(m.value.length) + " remote" + a(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", kv, " • Tracking: " + a(l.value.remote) + "/" + a(l.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            U.value.length && !_.value ? (s(), I(Se, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z(U.value, (me) => {
                  var le;
                  return s(), I(lv, {
                    key: me.name,
                    remote: me,
                    "sync-status": d.value[me.name],
                    "tracking-branch": L(me.name) ? (le = l.value) == null ? void 0 : le.branch : void 0,
                    "fetching-remote": T.value,
                    onFetch: x,
                    onEdit: B,
                    onRemove: M
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !U.value.length && !_.value ? (s(), I(Ve, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  onClick: V
                }, {
                  default: i(() => [...ee[4] || (ee[4] = [
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
      g(Ze, {
        show: $.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (me) => $.value = !1)
      }, {
        content: i(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(Q, {
            variant: "link",
            onClick: te
          }, {
            default: i(() => [...ee[6] || (ee[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _v = /* @__PURE__ */ J(bv, [["__scopeId", "data-v-a75719bb"]]), $v = { class: "setting-info" }, Cv = { class: "setting-label" }, xv = {
  key: 0,
  class: "required-marker"
}, Sv = {
  key: 0,
  class: "setting-description"
}, Iv = { class: "setting-control" }, Ev = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: oe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", $v, [
        e("div", Cv, [
          w(a(t.label) + " ", 1),
          t.required ? (s(), o("span", xv, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", Sv, a(t.description), 1)) : c("", !0)
      ]),
      e("div", Iv, [
        fe(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Xe = /* @__PURE__ */ J(Ev, [["__scopeId", "data-v-cb5d236c"]]), Mv = { class: "toggle" }, zv = ["checked", "disabled"], Lv = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", Mv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, zv),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), dt = /* @__PURE__ */ J(Lv, [["__scopeId", "data-v-71c0f550"]]), Tv = { class: "settings-section" }, Rv = { class: "path-setting" }, Dv = { class: "path-value" }, Nv = { class: "path-setting" }, Ov = { class: "path-value" }, Uv = { class: "settings-section" }, Pv = { class: "settings-section" }, Bv = { class: "settings-section" }, Fv = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Ee(), r = C(!1), h = C(null), v = C(null), y = C(null), m = C(null), l = C(""), d = C(""), b = C(!0), p = C(!0), k = C(!1), $ = P(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function T() {
      r.value = !0, h.value = null;
      try {
        y.value = await u(), m.value = { ...y.value }, l.value = y.value.civitai_api_key || "", d.value = y.value.huggingface_token || "", b.value = y.value.auto_sync_models, p.value = y.value.confirm_destructive;
        const U = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = U === "true";
      } catch (U) {
        h.value = U instanceof Error ? U.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function _() {
      var U;
      v.value = null;
      try {
        const L = {};
        l.value !== (((U = m.value) == null ? void 0 : U.civitai_api_key) || "") && (L.civitai_api_key = l.value || null), await n(L), await T(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (L) {
        v.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function f() {
      m.value && (l.value = m.value.civitai_api_key || "", d.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, p.value = m.value.confirm_destructive, v.value = null);
    }
    function F(U) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(U)), console.log("[ComfyGit] Auto-refresh setting saved:", U);
    }
    return Ie(T), (U, L) => (s(), I(De, null, {
      header: i(() => [
        g(Ne, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(Q, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: _
            }, {
              default: i(() => [...L[5] || (L[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), I(Q, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: f
            }, {
              default: i(() => [...L[6] || (L[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (s(), I(et, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), I(tt, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: T
        }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
          g(Se, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var D, V;
              return [
                e("div", Tv, [
                  e("div", Rv, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Dv, a(((D = y.value) == null ? void 0 : D.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Nv, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ov, a(((V = y.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(Se, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Uv, [
                g(Xe, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Lt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (D) => l.value = D),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(Xe, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Lt, {
                      modelValue: d.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (D) => d.value = D),
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
          g(Se, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Pv, [
                g(Xe, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(dt, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (D) => k.value = D),
                        F
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(Se, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Bv, [
                g(Xe, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(dt, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (D) => b.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(Xe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(dt, {
                      modelValue: p.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (D) => p.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), I(yt, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Qe({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Av = /* @__PURE__ */ J(Fv, [["__scopeId", "data-v-7861bd35"]]), Vv = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Ee(), n = C([]), r = C(!1), h = C(null), v = C(!1), y = C(null), m = P(() => n.value.length === 0 ? [] : n.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function l() {
      r.value = !0, h.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (d) {
        h.value = d instanceof Error ? d.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var d;
          (d = y.value) != null && d.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(l), (d, b) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (p) => v.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: r.value
              }, {
                default: i(() => [
                  w(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (s(), I(et, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (s(), I(tt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            n.value.length === 0 ? (s(), I(Ve, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, Z(m.value, (p, k) => (s(), o("div", {
                key: k,
                class: oe(`log-line log-level-${p.level.toLowerCase()}`)
              }, a(p.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Ze, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (p) => v.value = !1)
      }, {
        content: i(() => [...b[3] || (b[3] = [
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
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: b[1] || (b[1] = (p) => v.value = !1)
          }, {
            default: i(() => [...b[4] || (b[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wv = /* @__PURE__ */ J(Vv, [["__scopeId", "data-v-39f6a756"]]), Gv = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Ee(), r = C([]), h = C(!1), v = C(null), y = C(!1), m = C("production"), l = C(null), d = P(() => r.value.length === 0 ? [] : r.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function b() {
      h.value = !0, v.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const p = await n();
          m.value = p.environment || "production";
        } catch {
        }
      } catch (p) {
        v.value = p instanceof Error ? p.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var p;
          (p = l.value) != null && p.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ie(b), (p, k) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = ($) => y.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: h.value
              }, {
                default: i(() => [
                  w(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          h.value ? (s(), I(et, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(tt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            r.value.length === 0 ? (s(), I(Ve, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(W, null, Z(d.value, ($, T) => (s(), o("div", {
                key: T,
                class: oe(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Ze, {
        show: y.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = ($) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            k[3] || (k[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            k[4] || (k[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          k[5] || (k[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          k[6] || (k[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: k[1] || (k[1] = ($) => y.value = !1)
          }, {
            default: i(() => [...k[7] || (k[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jv = /* @__PURE__ */ J(Gv, [["__scopeId", "data-v-4f1e6f72"]]), Hv = { class: "env-title" }, qv = {
  key: 0,
  class: "current-badge"
}, Kv = {
  key: 0,
  class: "branch-info"
}, Jv = /* @__PURE__ */ K({
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
    return (u, n) => (s(), I(ze, {
      status: t.isCurrent ? "synced" : void 0
    }, Dt({
      icon: i(() => [
        w(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Hv, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", qv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", Kv, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        fe(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(be, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(be, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(be, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(be, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Yv = /* @__PURE__ */ J(Jv, [["__scopeId", "data-v-9231917a"]]), Xv = { class: "env-details" }, Qv = { class: "status-row" }, Zv = {
  key: 0,
  class: "detail-row"
}, ef = { class: "value mono" }, tf = {
  key: 1,
  class: "detail-row"
}, sf = { class: "value mono small" }, of = { class: "detail-row" }, nf = { class: "value" }, af = { class: "detail-row" }, lf = { class: "value" }, rf = { class: "detail-row" }, df = { class: "value" }, cf = {
  key: 2,
  class: "section-divider"
}, uf = {
  key: 3,
  class: "detail-row"
}, mf = { class: "value" }, vf = {
  key: 4,
  class: "detail-row"
}, ff = { class: "value" }, gf = { class: "footer-actions" }, hf = /* @__PURE__ */ K({
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
        const v = new Date(h), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), d = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : d < 24 ? `${d} ${d === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, v) => (s(), I(at, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (y) => n("close"))
    }, {
      body: i(() => [
        e("div", Xv, [
          e("div", Qv, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Zv, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", ef, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", tf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", sf, a(t.environment.path), 1)
          ])) : c("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", of, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", nf, a(t.environment.workflow_count), 1)
          ]),
          e("div", af, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", lf, a(t.environment.node_count), 1)
          ]),
          e("div", rf, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", df, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", cf)) : c("", !0),
          t.environment.created_at ? (s(), o("div", uf, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", mf, a(r(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", vf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", ff, a(r(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", gf, [
          t.canDelete ? (s(), I(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => n("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(re, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (y) => n("close"))
          }, {
            default: i(() => [...v[13] || (v[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), pf = /* @__PURE__ */ J(hf, [["__scopeId", "data-v-59855453"]]), yf = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], wf = "3.12", kf = [
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
], bf = "auto", _f = { class: "create-env-form" }, $f = { class: "form-field" }, Cf = { class: "form-field" }, xf = ["value"], Sf = { class: "form-field" }, If = ["disabled"], Ef = ["value"], Mf = { class: "form-field" }, zf = ["value"], Lf = { class: "form-field form-field--checkbox" }, Tf = { class: "form-checkbox" }, Rf = /* @__PURE__ */ K({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r } = Ee(), h = C(""), v = C(wf), y = C("latest"), m = C(bf), l = C(!1), d = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = C(!1), p = C(null);
    function k() {
      const T = h.value.trim();
      if (!T) return;
      const _ = {
        name: T,
        python_version: v.value,
        comfyui_version: y.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      n("create", _);
    }
    async function $() {
      b.value = !0;
      try {
        d.value = await r();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        b.value = !1;
      }
    }
    return Ie(async () => {
      var T;
      await Ss(), (T = p.value) == null || T.focus(), $();
    }), (T, _) => (s(), I(at, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: _[6] || (_[6] = (f) => n("close"))
    }, {
      body: i(() => [
        e("div", _f, [
          e("div", $f, [
            _[7] || (_[7] = e("label", { class: "form-label" }, "Name", -1)),
            mt(e("input", {
              ref_key: "nameInput",
              ref: p,
              "onUpdate:modelValue": _[0] || (_[0] = (f) => h.value = f),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: nt(k, ["enter"])
            }, null, 544), [
              [ns, h.value]
            ])
          ]),
          e("div", Cf, [
            _[8] || (_[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            mt(e("select", {
              "onUpdate:modelValue": _[1] || (_[1] = (f) => v.value = f),
              class: "form-select"
            }, [
              (s(!0), o(W, null, Z(ye(yf), (f) => (s(), o("option", {
                key: f,
                value: f
              }, a(f), 9, xf))), 128))
            ], 512), [
              [Ft, v.value]
            ])
          ]),
          e("div", Sf, [
            _[9] || (_[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            mt(e("select", {
              "onUpdate:modelValue": _[2] || (_[2] = (f) => y.value = f),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(W, null, Z(d.value, (f) => (s(), o("option", {
                key: f.tag_name,
                value: f.tag_name
              }, a(f.name), 9, Ef))), 128))
            ], 8, If), [
              [Ft, y.value]
            ])
          ]),
          e("div", Mf, [
            _[10] || (_[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            mt(e("select", {
              "onUpdate:modelValue": _[3] || (_[3] = (f) => m.value = f),
              class: "form-select"
            }, [
              (s(!0), o(W, null, Z(ye(kf), (f) => (s(), o("option", {
                key: f,
                value: f
              }, a(f) + a(f === "auto" ? " (detect GPU)" : ""), 9, zf))), 128))
            ], 512), [
              [Ft, m.value]
            ])
          ]),
          e("div", Lf, [
            e("label", Tf, [
              mt(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": _[4] || (_[4] = (f) => l.value = f)
              }, null, 512), [
                [Is, l.value]
              ]),
              _[11] || (_[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: k
        }, {
          default: i(() => [..._[12] || (_[12] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(re, {
          variant: "secondary",
          onClick: _[5] || (_[5] = (f) => n("close"))
        }, {
          default: i(() => [..._[13] || (_[13] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Df = /* @__PURE__ */ J(Rf, [["__scopeId", "data-v-a2f13447"]]), Nf = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: h } = Ee(), v = C([]), y = C(!1), m = C(null), l = C(""), d = C(!1), b = C(!1), p = C(null), k = P(
      () => v.value.find((L) => L.is_current)
    ), $ = P(() => {
      if (!l.value.trim()) return v.value;
      const L = l.value.toLowerCase();
      return v.value.filter(
        (D) => {
          var V;
          return D.name.toLowerCase().includes(L) || ((V = D.current_branch) == null ? void 0 : V.toLowerCase().includes(L));
        }
      );
    });
    function T(L) {
      r("create", L), b.value = !1;
    }
    function _() {
      b.value = !0;
    }
    function f(L) {
      p.value = L;
    }
    function F(L) {
      p.value = null, r("delete", L);
    }
    async function U() {
      y.value = !0, m.value = null;
      try {
        v.value = await h();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return Ie(U), u({
      loadEnvironments: U
    }), (L, D) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (V) => d.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: i(() => [...D[6] || (D[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              g(Q, {
                variant: "secondary",
                size: "sm",
                onClick: U
              }, {
                default: i(() => [...D[7] || (D[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(pt, {
            modelValue: l.value,
            "onUpdate:modelValue": D[1] || (D[1] = (V) => l.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          y.value ? (s(), I(et, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), I(tt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), I(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(v.value.length) + " " + a(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(W, { key: 0 }, [
                  D[8] || (D[8] = w(" • Current: ", -1)),
                  e("strong", null, a(k.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (s(), I(Se, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, Z($.value, (V) => (s(), I(Yv, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    V.is_current ? c("", !0) : (s(), I(Q, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => L.$emit("switch", V.name)
                    }, {
                      default: i(() => [...D[9] || (D[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => f(V)
                    }, {
                      default: i(() => [...D[10] || (D[10] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? c("", !0) : (s(), I(Ve, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Dt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(Q, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: i(() => [...D[11] || (D[11] = [
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
      g(Ze, {
        show: d.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (V) => d.value = !1)
      }, {
        content: i(() => [...D[12] || (D[12] = [
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
        actions: i(() => [
          g(Q, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (V) => d.value = !1)
          }, {
            default: i(() => [...D[13] || (D[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (s(), I(pf, {
        key: 0,
        environment: p.value,
        "can-delete": v.value.length > 1,
        onClose: D[4] || (D[4] = (V) => p.value = null),
        onDelete: F
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (s(), I(Df, {
        key: 1,
        onClose: D[5] || (D[5] = (V) => b.value = !1),
        onCreate: T
      })) : c("", !0)
    ], 64));
  }
}), Of = /* @__PURE__ */ J(Nf, [["__scopeId", "data-v-307d9926"]]), Uf = { class: "file-path" }, Pf = { class: "file-path-text" }, Bf = ["title"], Ff = /* @__PURE__ */ K({
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
    return (h, v) => (s(), o("div", Uf, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Pf, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Bf)) : c("", !0)
    ]));
  }
}), Af = /* @__PURE__ */ J(Ff, [["__scopeId", "data-v-f0982173"]]), Vf = { class: "output-path-input" }, Wf = { class: "export-actions" }, Gf = {
  key: 1,
  class: "export-warning"
}, jf = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Ee(), n = C(""), r = C(!1), h = C(null), v = C(!1);
    async function y() {
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
    async function m() {
      var l;
      if ((l = h.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(h.value.path);
        } catch (d) {
          console.error("Failed to copy path:", d);
        }
    }
    return (l, d) => (s(), o(W, null, [
      g(De, null, {
        header: i(() => [
          g(Ne, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(Q, {
                variant: "ghost",
                size: "sm",
                onClick: d[0] || (d[0] = (b) => v.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...d[5] || (d[5] = [
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
          g(Se, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(ze, { status: "synced" }, {
                icon: i(() => [...d[6] || (d[6] = [
                  w("📦", -1)
                ])]),
                title: i(() => [...d[7] || (d[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...d[8] || (d[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  g(be, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(be, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(be, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(be, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Se, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(ze, { status: "synced" }, {
                icon: i(() => [...d[9] || (d[9] = [
                  w("📁", -1)
                ])]),
                title: i(() => [...d[10] || (d[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: i(() => [...d[11] || (d[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", Vf, [
                    g(Lt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": d[1] || (d[1] = (b) => n.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(Se, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Wf, [
                g(Q, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: y
                }, {
                  default: i(() => [
                    d[12] || (d[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    w(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (s(), I(Q, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: d[2] || (d[2] = (b) => n.value = "")
                }, {
                  default: i(() => [...d[13] || (d[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          h.value ? (s(), I(Se, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(ze, {
                status: h.value.status === "success" ? "synced" : "broken"
              }, Dt({
                icon: i(() => [
                  w(a(h.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(a(h.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(a(h.value.status === "success" ? "Your environment has been exported" : h.value.message), 1)
                ]),
                _: 2
              }, [
                h.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(be, { label: "Saved to:" }, {
                      default: i(() => [
                        g(Af, {
                          path: h.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    h.value.models_without_sources !== void 0 ? (s(), I(be, {
                      key: 0,
                      label: "Models without sources:",
                      value: h.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    h.value.models_without_sources && h.value.models_without_sources > 0 ? (s(), o("div", Gf, [...d[14] || (d[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                h.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...d[15] || (d[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(Q, {
                      variant: "ghost",
                      size: "sm",
                      onClick: d[3] || (d[3] = (b) => h.value = null)
                    }, {
                      default: i(() => [...d[16] || (d[16] = [
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
      g(Ze, {
        show: v.value,
        title: "About Environment Export",
        onClose: d[4] || (d[4] = (b) => v.value = !1)
      }, {
        content: i(() => [...d[17] || (d[17] = [
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
}), Hf = /* @__PURE__ */ J(jf, [["__scopeId", "data-v-1777a9d5"]]), qf = { class: "file-input-wrapper" }, Kf = ["accept", "multiple", "disabled"], Jf = /* @__PURE__ */ K({
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
    function v() {
      var m;
      (m = h.value) == null || m.click();
    }
    function y(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return u({
      triggerInput: v
    }), (m, l) => (s(), o("div", qf, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: y
      }, null, 40, Kf),
      g(Q, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          fe(m.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Yf = /* @__PURE__ */ J(Jf, [["__scopeId", "data-v-cd192091"]]), Xf = {
  key: 0,
  class: "drop-zone-empty"
}, Qf = { class: "drop-zone-text" }, Zf = { class: "drop-zone-primary" }, eg = { class: "drop-zone-secondary" }, tg = { class: "drop-zone-actions" }, sg = {
  key: 1,
  class: "drop-zone-file"
}, og = { class: "file-info" }, ng = { class: "file-details" }, ag = { class: "file-name" }, lg = { class: "file-size" }, ig = /* @__PURE__ */ K({
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
    const n = u, r = C(!1), h = C(null), v = C(0), y = P(() => h.value !== null), m = P(() => {
      var f;
      return ((f = h.value) == null ? void 0 : f.name) || "";
    }), l = P(() => {
      if (!h.value) return "";
      const f = h.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function d(f) {
      var F;
      v.value++, (F = f.dataTransfer) != null && F.types.includes("Files") && (r.value = !0);
    }
    function b(f) {
      f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function p() {
      v.value--, v.value === 0 && (r.value = !1);
    }
    function k(f) {
      var U;
      v.value = 0, r.value = !1;
      const F = (U = f.dataTransfer) == null ? void 0 : U.files;
      F && F.length > 0 && T(F[0]);
    }
    function $(f) {
      f.length > 0 && T(f[0]);
    }
    function T(f) {
      h.value = f, n("fileSelected", f);
    }
    function _() {
      h.value = null, n("clear");
    }
    return (f, F) => (s(), o("div", {
      class: oe(["file-drop-zone", { "drop-active": r.value, "has-file": y.value }]),
      onDragenter: xe(d, ["prevent"]),
      onDragover: xe(b, ["prevent"]),
      onDragleave: xe(p, ["prevent"]),
      onDrop: xe(k, ["prevent"])
    }, [
      y.value ? (s(), o("div", sg, [
        e("div", og, [
          F[1] || (F[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", ng, [
            e("div", ag, a(m.value), 1),
            e("div", lg, a(l.value), 1)
          ])
        ]),
        g(Q, {
          variant: "ghost",
          size: "xs",
          onClick: _,
          title: "Remove file"
        }, {
          default: i(() => [...F[2] || (F[2] = [
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
      ])) : (s(), o("div", Xf, [
        F[0] || (F[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Qf, [
          e("p", Zf, a(t.primaryText), 1),
          e("p", eg, a(t.secondaryText), 1)
        ]),
        e("div", tg, [
          g(Yf, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: i(() => [
              w(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), rg = /* @__PURE__ */ J(ig, [["__scopeId", "data-v-e00abbca"]]), dg = { class: "import-preview" }, cg = { class: "preview-header" }, ug = {
  key: 0,
  class: "source-env"
}, mg = { class: "preview-content" }, vg = { class: "preview-section" }, fg = { class: "section-header" }, gg = { class: "section-info" }, hg = { class: "section-count" }, pg = {
  key: 0,
  class: "item-list"
}, yg = { class: "item-name" }, wg = {
  key: 0,
  class: "item-more"
}, kg = { class: "preview-section" }, bg = { class: "section-header" }, _g = { class: "section-info" }, $g = { class: "section-count" }, Cg = {
  key: 0,
  class: "item-list"
}, xg = { class: "item-details" }, Sg = { class: "item-name" }, Ig = { class: "item-meta" }, Eg = {
  key: 0,
  class: "item-more"
}, Mg = { class: "preview-section" }, zg = { class: "section-header" }, Lg = { class: "section-info" }, Tg = { class: "section-count" }, Rg = {
  key: 0,
  class: "item-list"
}, Dg = { class: "item-name" }, Ng = {
  key: 0,
  class: "item-more"
}, Og = {
  key: 0,
  class: "preview-section"
}, Ug = { class: "git-info" }, Pg = /* @__PURE__ */ K({
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
    const u = t, n = P(() => u.workflows.length), r = P(() => u.models.length), h = P(() => u.nodes.length);
    function v(y) {
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (y, m) => (s(), o("div", dg, [
      e("div", cg, [
        g(Ue, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", ug, [
          m[1] || (m[1] = w(" From: ", -1)),
          g(jt, null, {
            default: i(() => [
              w(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", mg, [
        e("div", vg, [
          e("div", fg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", gg, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", hg, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", pg, [
            (s(!0), o(W, null, Z(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", yg, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", wg, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", kg, [
          e("div", bg, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", _g, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", $g, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Cg, [
            (s(!0), o(W, null, Z(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", xg, [
                e("span", Sg, a(l.filename), 1),
                e("span", Ig, a(v(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Eg, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Mg, [
          e("div", zg, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Lg, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Tg, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Rg, [
            (s(!0), o(W, null, Z(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Dg, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Ng, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Og, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Ug, [
            t.gitBranch ? (s(), I(be, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(jt, null, {
                  default: i(() => [
                    w(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), I(be, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(ls, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Bg = /* @__PURE__ */ J(Pg, [["__scopeId", "data-v-182fe113"]]), Fg = { class: "import-options" }, Ag = { class: "options-container" }, Vg = { class: "option-section" }, Wg = { class: "conflict-options" }, Gg = ["value", "checked", "onChange"], jg = { class: "conflict-content" }, Hg = { class: "conflict-label" }, qg = { class: "conflict-description" }, Kg = { class: "option-section" }, Jg = { class: "component-toggles" }, Yg = /* @__PURE__ */ K({
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
    return (h, v) => (s(), o("div", Fg, [
      g(Ue, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Ag, [
        e("div", Vg, [
          g(Gt, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Wg, [
            (s(), o(W, null, Z(r, (y) => e("label", {
              key: y.value,
              class: oe(["conflict-option", { active: t.conflictMode === y.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: y.value,
                checked: t.conflictMode === y.value,
                onChange: (m) => n("update:conflictMode", y.value)
              }, null, 40, Gg),
              e("div", jg, [
                e("span", Hg, a(y.label), 1),
                e("span", qg, a(y.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Kg, [
          g(Gt, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Jg, [
            g(Xe, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(dt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (y) => n("update:includeWorkflows", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Xe, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(dt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (y) => n("update:includeModels", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Xe, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(dt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (y) => n("update:includeNodes", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Xe, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(dt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (y) => n("update:includeGitHistory", y))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Xg = /* @__PURE__ */ J(Yg, [["__scopeId", "data-v-0ec212b0"]]), Qg = {
  key: 0,
  class: "import-empty"
}, Zg = { class: "import-help" }, eh = {
  key: 1,
  class: "import-configure"
}, th = { class: "selected-file-bar" }, sh = { class: "file-bar-content" }, oh = { class: "file-bar-info" }, nh = { class: "file-bar-name" }, ah = { class: "file-bar-size" }, lh = { class: "import-actions" }, ih = {
  key: 2,
  class: "import-progress"
}, rh = { class: "progress-content" }, dh = { class: "progress-info" }, ch = { class: "progress-title" }, uh = { class: "progress-detail" }, mh = { class: "progress-bar" }, vh = { class: "progress-status" }, fh = {
  key: 3,
  class: "import-complete"
}, gh = { class: "complete-message" }, hh = { class: "complete-title" }, ph = { class: "complete-details" }, yh = { class: "complete-actions" }, wh = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const u = C(null), n = C(!1), r = C(!1), h = C(!1), v = C(""), y = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = C({
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
    }), d = P(() => y.value.includeWorkflows || y.value.includeModels || y.value.includeNodes || y.value.includeGitHistory);
    function b(_) {
      u.value = _;
    }
    function p() {
      u.value = null, r.value = !1, h.value = !1, v.value = "";
    }
    function k() {
      p(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
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
          for (const f of _)
            m.value = f, await new Promise((F) => setTimeout(F, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((f) => setTimeout(f, 500)), h.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (_) {
          h.value = !1, v.value = _ instanceof Error ? _.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function T(_) {
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (_, f) => (s(), I(De, null, {
      header: i(() => [
        g(Ne, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (s(), o("div", Qg, [
          g(rg, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Zg, [
            g(Ue, null, {
              default: i(() => [...f[5] || (f[5] = [
                w("How to Import", -1)
              ])]),
              _: 1
            }),
            f[6] || (f[6] = e("div", { class: "help-content" }, [
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
        ])) : u.value && !n.value && !r.value ? (s(), o("div", eh, [
          e("div", th, [
            e("div", sh, [
              f[7] || (f[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", oh, [
                e("div", nh, a(u.value.name), 1),
                e("div", ah, a(T(u.value.size)), 1)
              ])
            ]),
            g(Q, {
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: i(() => [...f[8] || (f[8] = [
                w(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(Bg, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(Xg, {
            "conflict-mode": y.value.conflictMode,
            "onUpdate:conflictMode": f[0] || (f[0] = (F) => y.value.conflictMode = F),
            "include-workflows": y.value.includeWorkflows,
            "onUpdate:includeWorkflows": f[1] || (f[1] = (F) => y.value.includeWorkflows = F),
            "include-models": y.value.includeModels,
            "onUpdate:includeModels": f[2] || (f[2] = (F) => y.value.includeModels = F),
            "include-nodes": y.value.includeNodes,
            "onUpdate:includeNodes": f[3] || (f[3] = (F) => y.value.includeNodes = F),
            "include-git-history": y.value.includeGitHistory,
            "onUpdate:includeGitHistory": f[4] || (f[4] = (F) => y.value.includeGitHistory = F)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !y.value.includeModels && l.value.models.length > 0 ? (s(), I(vt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", lh, [
            g(Q, {
              variant: "primary",
              size: "md",
              disabled: !d.value,
              onClick: $
            }, {
              default: i(() => [...f[9] || (f[9] = [
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
            g(Q, {
              variant: "secondary",
              size: "md",
              onClick: p
            }, {
              default: i(() => [...f[10] || (f[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (s(), o("div", ih, [
          e("div", rh, [
            f[11] || (f[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", dh, [
              e("div", ch, a(m.value.message), 1),
              e("div", uh, a(m.value.detail), 1)
            ])
          ]),
          e("div", mh, [
            e("div", {
              class: "progress-bar-fill",
              style: Qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", vh, a(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (s(), o("div", fh, [
          e("div", {
            class: oe(["complete-icon", h.value ? "success" : "error"])
          }, a(h.value ? "✓" : "✕"), 3),
          e("div", gh, [
            e("div", hh, a(h.value ? "Import Successful" : "Import Failed"), 1),
            e("div", ph, a(v.value), 1)
          ]),
          e("div", yh, [
            g(Q, {
              variant: "primary",
              size: "md",
              onClick: k
            }, {
              default: i(() => [...f[12] || (f[12] = [
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
}), kh = /* @__PURE__ */ J(wh, [["__scopeId", "data-v-18e18eb5"]]), bh = { class: "header-info" }, _h = { class: "commit-hash" }, $h = {
  key: 0,
  class: "commit-refs"
}, Ch = { class: "commit-message" }, xh = { class: "commit-date" }, Sh = {
  key: 0,
  class: "loading"
}, Ih = {
  key: 1,
  class: "changes-section"
}, Eh = { class: "stats-row" }, Mh = { class: "stat" }, zh = { class: "stat insertions" }, Lh = { class: "stat deletions" }, Th = {
  key: 0,
  class: "change-group"
}, Rh = {
  key: 1,
  class: "change-group"
}, Dh = {
  key: 0,
  class: "version"
}, Nh = {
  key: 2,
  class: "change-group"
}, Oh = { class: "change-item" }, Uh = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Ee(), r = C(null), h = C(!0), v = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), y = P(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ie(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (m, l) => (s(), I(at, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (d) => m.$emit("close"))
    }, {
      header: i(() => {
        var d, b, p, k;
        return [
          e("div", bh, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", _h, a(((d = r.value) == null ? void 0 : d.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (p = r.value) == null ? void 0 : p.refs) != null && k.length ? (s(), o("span", $h, [
              (s(!0), o(W, null, Z(r.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : c("", !0)
          ]),
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = ($) => m.$emit("close"))
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
        var d, b;
        return [
          e("div", Ch, a(((d = r.value) == null ? void 0 : d.message) || t.commit.message), 1),
          e("div", xh, a(((b = r.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", Sh, "Loading details...")) : r.value ? (s(), o("div", Ih, [
            e("div", Eh, [
              e("span", Mh, a(r.value.stats.files_changed) + " files", 1),
              e("span", zh, "+" + a(r.value.stats.insertions), 1),
              e("span", Lh, "-" + a(r.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", Th, [
              g(xt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, Z(r.value.changes.workflows.added, (p) => (s(), o("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(p), 1)
              ]))), 128)),
              (s(!0), o(W, null, Z(r.value.changes.workflows.modified, (p) => (s(), o("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(p), 1)
              ]))), 128)),
              (s(!0), o(W, null, Z(r.value.changes.workflows.deleted, (p) => (s(), o("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(p), 1)
              ]))), 128))
            ])) : c("", !0),
            y.value ? (s(), o("div", Rh, [
              g(xt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, Z(r.value.changes.nodes.added, (p) => (s(), o("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(p.name), 1),
                p.version ? (s(), o("span", Dh, "(" + a(p.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(W, null, Z(r.value.changes.nodes.removed, (p) => (s(), o("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(p.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (s(), o("div", Nh, [
              g(xt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Oh, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (d) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: "primary",
          onClick: l[2] || (l[2] = (d) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...l[16] || (l[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ph = /* @__PURE__ */ J(Uh, [["__scopeId", "data-v-d256ff6d"]]), Bh = { class: "dialog-message" }, Fh = {
  key: 0,
  class: "dialog-details"
}, Ah = {
  key: 1,
  class: "dialog-warning"
}, Vh = /* @__PURE__ */ K({
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
    return (u, n) => (s(), I(at, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Bh, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Fh, [
          (s(!0), o(W, null, Z(t.details, (r, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", Ah, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            w(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            w(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            w(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wh = /* @__PURE__ */ J(Vh, [["__scopeId", "data-v-3670b9f5"]]), Gh = { class: "base-textarea-wrapper" }, jh = ["value", "rows", "placeholder", "disabled", "maxlength"], Hh = {
  key: 0,
  class: "base-textarea-count"
}, qh = /* @__PURE__ */ K({
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
    return (u, n) => (s(), o("div", Gh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = nt(xe((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = nt(xe((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, jh),
      t.showCharCount && t.maxLength ? (s(), o("div", Hh, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), es = /* @__PURE__ */ J(qh, [["__scopeId", "data-v-5516e6fc"]]), Kh = ["checked", "disabled"], Jh = { class: "base-checkbox-box" }, Yh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Xh = {
  key: 0,
  class: "base-checkbox-label"
}, Qh = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", {
      class: oe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, Kh),
      e("span", Jh, [
        t.modelValue ? (s(), o("svg", Yh, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (s(), o("span", Xh, [
        fe(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ J(Qh, [["__scopeId", "data-v-bf17c831"]]), Zh = { class: "popover-header" }, ep = { class: "popover-body" }, tp = {
  key: 0,
  class: "changes-summary"
}, sp = {
  key: 0,
  class: "change-item"
}, op = {
  key: 1,
  class: "change-item"
}, np = {
  key: 2,
  class: "change-item"
}, ap = {
  key: 3,
  class: "change-item"
}, lp = {
  key: 4,
  class: "change-item"
}, ip = {
  key: 1,
  class: "no-changes"
}, rp = {
  key: 2,
  class: "loading"
}, dp = {
  key: 3,
  class: "issues-error"
}, cp = { class: "error-header" }, up = { class: "error-title" }, mp = { class: "issues-list" }, vp = { class: "message-section" }, fp = { class: "popover-footer" }, gp = {
  key: 1,
  class: "commit-popover"
}, hp = { class: "popover-header" }, pp = { class: "popover-body" }, yp = {
  key: 0,
  class: "changes-summary"
}, wp = {
  key: 0,
  class: "change-item"
}, kp = {
  key: 1,
  class: "change-item"
}, bp = {
  key: 2,
  class: "change-item"
}, _p = {
  key: 3,
  class: "change-item"
}, $p = {
  key: 4,
  class: "change-item"
}, Cp = {
  key: 1,
  class: "no-changes"
}, xp = {
  key: 2,
  class: "loading"
}, Sp = {
  key: 3,
  class: "issues-error"
}, Ip = { class: "error-header" }, Ep = { class: "error-title" }, Mp = { class: "issues-list" }, zp = { class: "message-section" }, Lp = { class: "popover-footer" }, Tp = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: h } = Ee(), v = C(""), y = C(!1), m = C(!1), l = C(null), d = P(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), b = P(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (_) => _.has_issues && (_.sync_state === "new" || _.sync_state === "modified")
      ) : [];
    }), p = P(() => b.value.length > 0), k = P(() => p.value && !m.value);
    async function $() {
      var T, _, f;
      if (!(p.value && !m.value) && !(!d.value || !v.value.trim() || y.value)) {
        y.value = !0, l.value = null;
        try {
          const F = await h(v.value.trim(), m.value);
          F.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((T = F.summary) == null ? void 0 : T.new) || 0} new, ${((_ = F.summary) == null ? void 0 : _.modified) || 0} modified, ${((f = F.summary) == null ? void 0 : f.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : F.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : F.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: F.message || "Commit failed" };
        } catch (F) {
          l.value = { type: "error", message: F instanceof Error ? F.message : "Commit failed" };
        } finally {
          y.value = !1;
        }
      }
    }
    return (T, _) => t.asModal ? (s(), I(Le, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: _[5] || (_[5] = (f) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: _[4] || (_[4] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", Zh, [
            _[11] || (_[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: _[0] || (_[0] = (f) => r("close"))
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
          e("div", ep, [
            t.status && d.value ? (s(), o("div", tp, [
              t.status.workflows.new.length ? (s(), o("div", sp, [
                _[12] || (_[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", op, [
                _[13] || (_[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", np, [
                _[14] || (_[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", ap, [
                _[15] || (_[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", lp, [
                _[16] || (_[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", ip, " No changes to commit ")) : (s(), o("div", rp, " Loading... ")),
            p.value ? (s(), o("div", dp, [
              e("div", cp, [
                _[17] || (_[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", up, a(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", mp, [
                (s(!0), o(W, null, Z(b.value, (f) => (s(), o("div", {
                  key: f.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(f.name), 1),
                  w(": " + a(f.issue_summary), 1)
                ]))), 128))
              ]),
              g(ts, {
                modelValue: m.value,
                "onUpdate:modelValue": _[1] || (_[1] = (f) => m.value = f),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [..._[18] || (_[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", vp, [
              g(es, {
                modelValue: v.value,
                "onUpdate:modelValue": _[2] || (_[2] = (f) => v.value = f),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || y.value || k.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: oe(["result", l.value.type])
            }, a(l.value.message), 3)) : c("", !0)
          ]),
          e("div", fp, [
            g(re, {
              variant: "secondary",
              onClick: _[3] || (_[3] = (f) => r("close"))
            }, {
              default: i(() => [..._[19] || (_[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !d.value || !v.value.trim() || y.value || k.value,
              loading: y.value,
              onClick: $
            }, {
              default: i(() => [
                w(a(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", gp, [
      e("div", hp, [
        _[21] || (_[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: _[6] || (_[6] = (f) => r("close"))
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
      e("div", pp, [
        t.status && d.value ? (s(), o("div", yp, [
          t.status.workflows.new.length ? (s(), o("div", wp, [
            _[22] || (_[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", kp, [
            _[23] || (_[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", bp, [
            _[24] || (_[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", _p, [
            _[25] || (_[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", $p, [
            _[26] || (_[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", Cp, " No changes to commit ")) : (s(), o("div", xp, " Loading... ")),
        p.value ? (s(), o("div", Sp, [
          e("div", Ip, [
            _[27] || (_[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Ep, a(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Mp, [
            (s(!0), o(W, null, Z(b.value, (f) => (s(), o("div", {
              key: f.name,
              class: "issue-item"
            }, [
              e("strong", null, a(f.name), 1),
              w(": " + a(f.issue_summary), 1)
            ]))), 128))
          ]),
          g(ts, {
            modelValue: m.value,
            "onUpdate:modelValue": _[7] || (_[7] = (f) => m.value = f),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [..._[28] || (_[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", zp, [
          g(es, {
            modelValue: v.value,
            "onUpdate:modelValue": _[8] || (_[8] = (f) => v.value = f),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || y.value || k.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: oe(["result", l.value.type])
        }, a(l.value.message), 3)) : c("", !0)
      ]),
      e("div", Lp, [
        g(re, {
          variant: "secondary",
          onClick: _[9] || (_[9] = (f) => r("close"))
        }, {
          default: i(() => [..._[29] || (_[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !d.value || !v.value.trim() || y.value || k.value,
          loading: y.value,
          onClick: $
        }, {
          default: i(() => [
            w(a(y.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ms = /* @__PURE__ */ J(Tp, [["__scopeId", "data-v-d92153de"]]), Rp = { class: "modal-header" }, Dp = { class: "modal-body" }, Np = { class: "switch-message" }, Op = { class: "switch-details" }, Up = { class: "modal-actions" }, Pp = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), I(Le, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", Rp, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Dp, [
            e("p", Np, [
              n[6] || (n[6] = w(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = w(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = w("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Op, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Up, [
            g(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Bp = /* @__PURE__ */ J(Pp, [["__scopeId", "data-v-e9c5253e"]]), Fp = { class: "progress-bar" }, Ap = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = P(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, h) => (s(), o("div", Fp, [
      e("div", {
        class: oe(["progress-fill", t.variant]),
        style: Qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), Vp = /* @__PURE__ */ J(Ap, [["__scopeId", "data-v-1beb0512"]]), Wp = {
  key: 0,
  class: "modal-overlay"
}, Gp = { class: "modal-content" }, jp = { class: "modal-body" }, Hp = { class: "progress-info" }, qp = { class: "progress-percentage" }, Kp = { class: "progress-state" }, Jp = { class: "switch-steps" }, Yp = { class: "step-icon" }, Xp = { class: "step-label" }, Qp = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = P(() => {
      const v = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return u.message || v[u.state] || u.state;
    }), r = P(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), h = P(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], y = v.findIndex((m) => m.state === u.state);
      return v.map((m, l) => {
        let d = "pending", b = "○";
        return l < y ? (d = "completed", b = "✓") : l === y && (d = "active", b = "⟳"), {
          ...m,
          status: d,
          icon: b
        };
      });
    });
    return (v, y) => (s(), I(Le, { to: "body" }, [
      t.show ? (s(), o("div", Wp, [
        e("div", Gp, [
          y[1] || (y[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", jp, [
            g(Vp, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Hp, [
              e("div", qp, a(t.progress) + "%", 1),
              e("div", Kp, a(n.value), 1)
            ]),
            e("div", Jp, [
              (s(!0), o(W, null, Z(h.value, (m) => (s(), o("div", {
                key: m.state,
                class: oe(["switch-step", m.status])
              }, [
                e("span", Yp, a(m.icon), 1),
                e("span", Xp, a(m.label), 1)
              ], 2))), 128))
            ]),
            y[0] || (y[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Zp = /* @__PURE__ */ J(Qp, [["__scopeId", "data-v-768a5078"]]), e1 = { class: "modal-header" }, t1 = { class: "modal-body" }, s1 = {
  key: 0,
  class: "node-section"
}, o1 = { class: "node-list" }, n1 = {
  key: 1,
  class: "node-section"
}, a1 = { class: "node-list" }, l1 = { class: "modal-actions" }, i1 = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), I(Le, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = xe(() => {
          }, ["stop"]))
        }, [
          e("div", e1, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", t1, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", s1, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", o1, [
                (s(!0), o(W, null, Z(t.mismatchDetails.missing_nodes, (r) => (s(), o("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", n1, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", a1, [
                (s(!0), o(W, null, Z(t.mismatchDetails.extra_nodes, (r) => (s(), o("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", l1, [
            g(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), r1 = /* @__PURE__ */ J(i1, [["__scopeId", "data-v-7cad7518"]]), d1 = { class: "comfygit-panel" }, c1 = { class: "panel-header" }, u1 = { class: "header-left" }, m1 = {
  key: 0,
  class: "header-info"
}, v1 = { class: "header-actions" }, f1 = { class: "env-switcher" }, g1 = {
  key: 0,
  class: "header-info"
}, h1 = { class: "branch-name" }, p1 = { class: "panel-main" }, y1 = { class: "sidebar" }, w1 = { class: "sidebar-section" }, k1 = { class: "sidebar-section" }, b1 = { class: "sidebar-section" }, _1 = { class: "content-area" }, $1 = {
  key: 0,
  class: "error-message"
}, C1 = {
  key: 1,
  class: "loading"
}, x1 = {
  key: 4,
  class: "dialog-overlay"
}, S1 = { class: "dialog-content create-progress-dialog" }, I1 = { class: "dialog-body create-progress-body" }, E1 = { class: "create-progress-message" }, M1 = { class: "dialog-content env-selector-dialog" }, z1 = { class: "dialog-header" }, L1 = { class: "dialog-body" }, T1 = { class: "env-list" }, R1 = { class: "env-info" }, D1 = { class: "env-name-row" }, N1 = { class: "env-indicator" }, O1 = { class: "env-name" }, U1 = {
  key: 0,
  class: "env-branch"
}, P1 = {
  key: 1,
  class: "current-label"
}, B1 = { class: "env-stats" }, F1 = ["onClick"], A1 = { class: "toast-container" }, V1 = { class: "toast-icon" }, W1 = { class: "toast-message" }, G1 = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: h,
      getBranches: v,
      checkout: y,
      createBranch: m,
      switchBranch: l,
      deleteBranch: d,
      getEnvironments: b,
      switchEnvironment: p,
      getSwitchProgress: k,
      createEnvironment: $,
      getCreateProgress: T,
      deleteEnvironment: _,
      syncEnvironmentManually: f
    } = Ee(), F = is(), U = C(null), L = C([]), D = C([]), V = C([]), B = P(() => V.value.find((A) => A.is_current)), N = C(!1), z = C(null), x = C(null), M = C(!1), te = C(null), q = C(null), ee = C(!1), me = C(!1), le = C(""), Y = C({ state: "idle", progress: 0, message: "" });
    let O = null, S = null;
    const se = C(!1), X = C({ state: "idle", message: "" }), $e = C(null);
    let ke = null;
    const he = C("status"), st = C("this-env");
    function ne(A, E) {
      he.value = A, st.value = E;
    }
    function ue(A) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      de && ne(de.view, de.section);
    }
    function ot() {
      ne("branches", "this-env");
    }
    function Ke() {
      n("close"), setTimeout(() => {
        var E;
        const A = document.querySelectorAll("button.comfyui-button");
        for (const de of A)
          if (((E = de.textContent) == null ? void 0 : E.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = C(null), We = C(!1), Je = C(!1), Ge = C([]);
    let wt = 0;
    function ve(A, E = "info", de = 3e3) {
      const _e = ++wt;
      return Ge.value.push({ id: _e, message: A, type: E }), de > 0 && setTimeout(() => {
        Ge.value = Ge.value.filter((Te) => Te.id !== _e);
      }, de), _e;
    }
    function Pe(A) {
      Ge.value = Ge.value.filter((E) => E.id !== A);
    }
    function H(A) {
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
    const ce = P(() => {
      if (!U.value) return "neutral";
      const A = U.value.workflows, E = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? E ? "warning" : "success" : "error";
    });
    P(() => U.value ? ce.value === "success" ? "All synced" : ce.value === "warning" ? "Uncommitted changes" : ce.value === "error" ? "Not synced" : "" : "");
    async function ge() {
      N.value = !0, z.value = null;
      try {
        const [A, E, de, _e] = await Promise.all([
          r(!0),
          h(),
          v(),
          b()
        ]);
        U.value = A, L.value = E.commits, D.value = de.branches, V.value = _e, n("statusUpdate", A), te.value && await te.value.loadWorkflows(!0);
      } catch (A) {
        z.value = A instanceof Error ? A.message : "Failed to load status", U.value = null, L.value = [], D.value = [];
      } finally {
        N.value = !1;
      }
    }
    function Me(A) {
      x.value = A;
    }
    async function lt(A) {
      var de;
      x.value = null;
      const E = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      ae.value = {
        title: E ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: E ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((de = A.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: E ? Qt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: E,
        onConfirm: async () => {
          var Re;
          ae.value = null, ct();
          const _e = ve(`Checking out ${A.short_hash || ((Re = A.hash) == null ? void 0 : Re.slice(0, 7))}...`, "info", 0), Te = await y(A.hash, E);
          Pe(_e), Te.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Te.message || "Checkout failed", "error");
        }
      };
    }
    async function Nt(A) {
      const E = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      ae.value = {
        title: E ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: E ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: E ? Qt() : void 0,
        warning: E ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, ct();
          const de = ve(`Switching to ${A}...`, "info", 0), _e = await l(A, E);
          Pe(de), _e.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(_e.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ot(A) {
      const E = ve(`Creating branch ${A}...`, "info", 0), de = await m(A);
      Pe(E), de.status === "success" ? (ve(`Branch "${A}" created`, "success"), await ge()) : ve(de.message || "Failed to create branch", "error");
    }
    async function Ut(A, E = !1) {
      const de = async (_e) => {
        var Re;
        const Te = ve(`Deleting branch ${A}...`, "info", 0);
        try {
          const ie = await d(A, _e);
          Pe(Te), ie.status === "success" ? (ve(`Branch "${A}" deleted`, "success"), await ge()) : (Re = ie.message) != null && Re.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await de(!0);
            }
          } : ve(ie.message || "Failed to delete branch", "error");
        } catch (ie) {
          Pe(Te);
          const Bt = ie instanceof Error ? ie.message : "Failed to delete branch";
          Bt.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await de(!0);
            }
          } : ve(Bt, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${A}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await de(E);
        }
      };
    }
    async function Pt(A) {
      x.value = null;
      const E = prompt("Enter branch name:");
      if (E) {
        const de = ve(`Creating branch ${E}...`, "info", 0), _e = await m(E, A.hash);
        Pe(de), _e.status === "success" ? (ve(`Branch "${E}" created from ${A.short_hash}`, "success"), await ge()) : ve(_e.message || "Failed to create branch", "error");
      }
    }
    function ct() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function G() {
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          ae.value = null, ct(), ve("Restarting environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function R() {
      ae.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          ae.value = null, ve("Stopping environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function j(A) {
      M.value = !1, le.value = A, ee.value = !0;
    }
    async function pe() {
      ee.value = !1, me.value = !0, ct(), Y.value = {
        progress: 10,
        state: Ce(10),
        message: Be(10)
      };
      try {
        await p(le.value), it(), Mt();
      } catch (A) {
        je(), me.value = !1, ve(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), Y.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ce(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function Be(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ce(A)] || "";
    }
    function it() {
      if (S) return;
      let A = 10;
      const E = 60, de = 5e3, _e = 100, Te = (E - A) / (de / _e);
      S = window.setInterval(() => {
        if (A += Te, A >= E && (A = E, je()), Y.value.progress < E) {
          const Re = Math.floor(A);
          Y.value = {
            progress: Re,
            state: Ce(Re),
            message: Be(Re)
          };
        }
      }, _e);
    }
    function je() {
      S && (clearInterval(S), S = null);
    }
    function Mt() {
      O || (O = window.setInterval(async () => {
        try {
          let A = await F.getStatus();
          if ((!A || A.state === "idle") && (A = await k()), !A)
            return;
          const E = A.progress || 0;
          E >= 60 && je();
          const de = Math.max(E, Y.value.progress), _e = A.state && A.state !== "idle" && A.state !== "unknown", Te = _e ? A.state : Ce(de), Re = _e && A.message || Be(de);
          Y.value = {
            state: Te,
            progress: de,
            message: Re
          }, A.state === "complete" ? (je(), ut(), me.value = !1, ve(`✓ Switched to ${le.value}`, "success"), await ge(), le.value = "") : A.state === "rolled_back" ? (je(), ut(), me.value = !1, ve("Switch failed, restored previous environment", "warning"), le.value = "") : A.state === "critical_failure" && (je(), ut(), me.value = !1, ve(`Critical error during switch: ${A.message}`, "error"), le.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function ut() {
      je(), O && (clearInterval(O), O = null);
    }
    function ps() {
      ee.value = !1, le.value = "";
    }
    async function ys() {
      We.value = !1, await ge(), ve("✓ Changes committed", "success");
    }
    async function ws() {
      Je.value = !1;
      const A = ve("Syncing environment...", "info", 0);
      try {
        const E = await f("skip", !0);
        if (Pe(A), E.status === "success") {
          const de = [];
          E.nodes_installed.length && de.push(`${E.nodes_installed.length} installed`), E.nodes_removed.length && de.push(`${E.nodes_removed.length} removed`);
          const _e = de.length ? `: ${de.join(", ")}` : "";
          ve(`✓ Environment synced${_e}`, "success"), await ge();
        } else {
          const de = E.errors.length ? E.errors.join("; ") : E.message;
          ve(`Sync failed: ${de}`, "error");
        }
      } catch (E) {
        Pe(A), ve(`Sync error: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
      }
    }
    async function ks(A) {
      $e.value = A, se.value = !0, X.value = { state: "creating", message: `Creating environment '${A.name}'...` };
      try {
        const E = await $(A);
        E.status === "started" ? bs() : E.status === "error" && (se.value = !1, ve(`Failed to create environment: ${E.message}. Check debug logs for details.`, "error"), $e.value = null);
      } catch (E) {
        se.value = !1, ve(`Error creating environment: ${E instanceof Error ? E.message : "Unknown error"}. Check debug logs.`, "error"), $e.value = null;
      }
    }
    function bs() {
      ke || (ke = window.setInterval(async () => {
        var A;
        try {
          const E = await T();
          X.value = { state: E.state, message: E.message }, E.state === "complete" ? (Xt(), se.value = !1, ve(`✓ Environment '${E.environment_name}' created`, "success"), await ge(), q.value && await q.value.loadEnvironments(), (A = $e.value) != null && A.switch_after && E.environment_name && await j(E.environment_name), $e.value = null) : E.state === "error" && (Xt(), se.value = !1, ve(`Failed to create environment: ${E.error || E.message}. Check debug logs.`, "error"), $e.value = null);
        } catch (E) {
          console.error("Failed to poll create progress:", E);
        }
      }, 2e3));
    }
    function Xt() {
      ke && (clearInterval(ke), ke = null);
    }
    async function _s(A) {
      var E;
      if (((E = B.value) == null ? void 0 : E.name) === A) {
        ve("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ae.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${A}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ae.value = null;
          try {
            const de = await _(A);
            de.status === "success" ? (ve(`Environment "${A}" deleted`, "success"), await ge(), q.value && await q.value.loadEnvironments()) : ve(de.message || "Failed to delete environment", "error");
          } catch (de) {
            ve(`Error deleting environment: ${de instanceof Error ? de.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Qt() {
      if (!U.value) return [];
      const A = [], E = U.value.workflows;
      return E.new.length && A.push(`${E.new.length} new workflow(s)`), E.modified.length && A.push(`${E.modified.length} modified workflow(s)`), E.deleted.length && A.push(`${E.deleted.length} deleted workflow(s)`), A;
    }
    return Ie(ge), (A, E) => {
      var de, _e, Te, Re;
      return s(), o("div", d1, [
        e("div", c1, [
          e("div", u1, [
            E[27] || (E[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (s(), o("div", m1)) : c("", !0)
          ]),
          e("div", v1, [
            e("button", {
              class: oe(["icon-btn", { spinning: N.value }]),
              onClick: ge,
              title: "Refresh"
            }, [...E[28] || (E[28] = [
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
              onClick: E[0] || (E[0] = (ie) => n("close")),
              title: "Close"
            }, [...E[29] || (E[29] = [
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
        e("div", f1, [
          e("div", { class: "env-switcher-header" }, [
            E[30] || (E[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: G
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: R
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: E[1] || (E[1] = (ie) => ne("environments", "all-envs"))
          }, [
            U.value ? (s(), o("div", g1, [
              e("span", null, a(((de = B.value) == null ? void 0 : de.name) || ((_e = U.value) == null ? void 0 : _e.environment) || "Loading..."), 1),
              e("span", h1, "(" + a(U.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            E[31] || (E[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", p1, [
          e("div", y1, [
            e("div", w1, [
              E[32] || (E[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "status" && st.value === "this-env" }]),
                onClick: E[2] || (E[2] = (ie) => ne("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "workflows" }]),
                onClick: E[3] || (E[3] = (ie) => ne("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "models-env" }]),
                onClick: E[4] || (E[4] = (ie) => ne("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "branches" }]),
                onClick: E[5] || (E[5] = (ie) => ne("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "history" }]),
                onClick: E[6] || (E[6] = (ie) => ne("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "nodes" }]),
                onClick: E[7] || (E[7] = (ie) => ne("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "debug-env" }]),
                onClick: E[8] || (E[8] = (ie) => ne("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            E[35] || (E[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", k1, [
              E[33] || (E[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "environments" }]),
                onClick: E[9] || (E[9] = (ie) => ne("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "model-index" }]),
                onClick: E[10] || (E[10] = (ie) => ne("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "settings" }]),
                onClick: E[11] || (E[11] = (ie) => ne("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "debug-workspace" }]),
                onClick: E[12] || (E[12] = (ie) => ne("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            E[36] || (E[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", b1, [
              E[34] || (E[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "export" }]),
                onClick: E[13] || (E[13] = (ie) => ne("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "import" }]),
                onClick: E[14] || (E[14] = (ie) => ne("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: he.value === "remotes" }]),
                onClick: E[15] || (E[15] = (ie) => ne("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", _1, [
            z.value ? (s(), o("div", $1, a(z.value), 1)) : !U.value && he.value === "status" ? (s(), o("div", C1, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              he.value === "status" ? (s(), I(ea, {
                key: 0,
                status: U.value,
                onSwitchBranch: ot,
                onCommitChanges: E[16] || (E[16] = (ie) => We.value = !0),
                onSyncEnvironment: E[17] || (E[17] = (ie) => Je.value = !0),
                onViewWorkflows: E[18] || (E[18] = (ie) => ne("workflows", "this-env")),
                onViewHistory: E[19] || (E[19] = (ie) => ne("history", "this-env")),
                onViewDebug: E[20] || (E[20] = (ie) => ne("debug-env", "this-env"))
              }, null, 8, ["status"])) : he.value === "workflows" ? (s(), I(_u, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: te,
                onRefresh: ge
              }, null, 512)) : he.value === "models-env" ? (s(), I(nm, {
                key: 2,
                onNavigate: ue
              })) : he.value === "branches" ? (s(), I(ga, {
                key: 3,
                branches: D.value,
                current: ((Te = U.value) == null ? void 0 : Te.branch) || null,
                onSwitch: Nt,
                onCreate: Ot,
                onDelete: Ut
              }, null, 8, ["branches", "current"])) : he.value === "history" ? (s(), I(Sa, {
                key: 4,
                commits: L.value,
                onSelect: Me,
                onCheckout: lt
              }, null, 8, ["commits"])) : he.value === "nodes" ? (s(), I(Hm, {
                key: 5,
                onOpenNodeManager: Ke
              })) : he.value === "debug-env" ? (s(), I(jv, { key: 6 })) : he.value === "environments" ? (s(), I(Of, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: q,
                onSwitch: j,
                onCreate: ks,
                onDelete: _s
              }, null, 512)) : he.value === "model-index" ? (s(), I(Cm, {
                key: 8,
                onRefresh: ge
              })) : he.value === "settings" ? (s(), I(Av, { key: 9 })) : he.value === "debug-workspace" ? (s(), I(Wv, { key: 10 })) : he.value === "export" ? (s(), I(Hf, { key: 11 })) : he.value === "import" ? (s(), I(kh, { key: 12 })) : he.value === "remotes" ? (s(), I(_v, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        x.value ? (s(), I(Ph, {
          key: 0,
          commit: x.value,
          onClose: E[21] || (E[21] = (ie) => x.value = null),
          onCheckout: lt,
          onCreateBranch: Pt
        }, null, 8, ["commit"])) : c("", !0),
        ae.value ? (s(), I(Wh, {
          key: 1,
          title: ae.value.title,
          message: ae.value.message,
          details: ae.value.details,
          warning: ae.value.warning,
          confirmLabel: ae.value.confirmLabel,
          cancelLabel: ae.value.cancelLabel,
          secondaryLabel: ae.value.secondaryLabel,
          secondaryAction: ae.value.secondaryAction,
          destructive: ae.value.destructive,
          onConfirm: ae.value.onConfirm,
          onCancel: E[22] || (E[22] = (ie) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(Bp, {
          show: ee.value,
          "from-environment": ((Re = B.value) == null ? void 0 : Re.name) || "unknown",
          "to-environment": le.value,
          onConfirm: pe,
          onClose: ps
        }, null, 8, ["show", "from-environment", "to-environment"]),
        We.value && U.value ? (s(), I(ms, {
          key: 2,
          status: U.value,
          "as-modal": !0,
          onClose: E[23] || (E[23] = (ie) => We.value = !1),
          onCommitted: ys
        }, null, 8, ["status"])) : c("", !0),
        Je.value && U.value ? (s(), I(r1, {
          key: 3,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: ws,
          onClose: E[24] || (E[24] = (ie) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(Zp, {
          show: me.value,
          state: Y.value.state,
          progress: Y.value.progress,
          message: Y.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (s(), o("div", x1, [
          e("div", S1, [
            E[39] || (E[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", I1, [
              E[37] || (E[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", E1, a(X.value.message), 1),
              E[38] || (E[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        M.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: E[26] || (E[26] = xe((ie) => M.value = !1, ["self"]))
        }, [
          e("div", M1, [
            e("div", z1, [
              E[41] || (E[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: E[25] || (E[25] = (ie) => M.value = !1)
              }, [...E[40] || (E[40] = [
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
            e("div", L1, [
              E[42] || (E[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", T1, [
                (s(!0), o(W, null, Z(V.value, (ie) => (s(), o("div", {
                  key: ie.name,
                  class: oe(["env-item", { current: ie.is_current }])
                }, [
                  e("div", R1, [
                    e("div", D1, [
                      e("span", N1, a(ie.is_current ? "●" : "○"), 1),
                      e("span", O1, a(ie.name), 1),
                      ie.current_branch ? (s(), o("span", U1, "(" + a(ie.current_branch) + ")", 1)) : c("", !0),
                      ie.is_current ? (s(), o("span", P1, "CURRENT")) : c("", !0)
                    ]),
                    e("div", B1, a(ie.workflow_count) + " workflows • " + a(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Bt) => j(ie.name)
                  }, " SWITCH ", 8, F1))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", A1, [
          g(Es, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(W, null, Z(Ge.value, (ie) => (s(), o("div", {
                key: ie.id,
                class: oe(["toast", ie.type])
              }, [
                e("span", V1, a(H(ie.type)), 1),
                e("span", W1, a(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), j1 = /* @__PURE__ */ J(G1, [["__scopeId", "data-v-97ffaacd"]]), H1 = { class: "item-header" }, q1 = { class: "item-info" }, K1 = { class: "filename" }, J1 = { class: "metadata" }, Y1 = { class: "size" }, X1 = {
  key: 0,
  class: "type"
}, Q1 = { class: "item-actions" }, Z1 = {
  key: 0,
  class: "progress-section"
}, ey = { class: "progress-bar" }, ty = { class: "progress-stats" }, sy = { class: "downloaded" }, oy = { class: "speed" }, ny = {
  key: 0,
  class: "eta"
}, ay = {
  key: 1,
  class: "status-msg paused"
}, ly = {
  key: 2,
  class: "status-msg queued"
}, iy = {
  key: 3,
  class: "status-msg completed"
}, ry = {
  key: 4,
  class: "status-msg failed"
}, dy = {
  key: 0,
  class: "retries"
}, cy = /* @__PURE__ */ K({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(y) {
      if (y === 0) return "?";
      const m = y / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(y / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(y) {
      return y === 0 ? "-" : `${(y / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(y) {
      if (y < 60) return `${Math.round(y)}s`;
      const m = Math.floor(y / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (y, m) => (s(), o("div", {
      class: oe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", H1, [
        e("div", q1, [
          e("div", K1, a(t.item.filename), 1),
          e("div", J1, [
            e("span", Y1, a(r(t.item.size)), 1),
            t.item.type ? (s(), o("span", X1, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Q1, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Z1, [
        e("div", ey, [
          e("div", {
            class: "progress-fill",
            style: Qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", ty, [
          e("span", sy, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", oy, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", ny, a(v(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", ay, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", ly, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", iy, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", ry, [
        w(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", dy, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J(cy, [["__scopeId", "data-v-2110df65"]]), uy = { class: "queue-title" }, my = { class: "count" }, vy = { class: "queue-actions" }, fy = { class: "action-label" }, gy = {
  key: 0,
  class: "overall-progress"
}, hy = { class: "progress-bar" }, py = {
  key: 0,
  class: "current-mini"
}, yy = { class: "filename" }, wy = { class: "speed" }, ky = {
  key: 1,
  class: "queue-content"
}, by = {
  key: 0,
  class: "section"
}, _y = {
  key: 1,
  class: "section"
}, $y = { class: "section-header" }, Cy = { class: "section-label paused" }, xy = { class: "items-list" }, Sy = {
  key: 2,
  class: "section"
}, Iy = { class: "section-header" }, Ey = { class: "section-label" }, My = { class: "items-list" }, zy = {
  key: 3,
  class: "section"
}, Ly = { class: "section-header" }, Ty = { class: "section-label" }, Ry = { class: "items-list" }, Dy = {
  key: 4,
  class: "section"
}, Ny = { class: "section-header" }, Oy = { class: "section-label failed" }, Uy = { class: "items-list" }, Py = /* @__PURE__ */ K({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: h,
      failedItems: v,
      pausedItems: y,
      hasItems: m,
      activeCount: l,
      cancelDownload: d,
      retryDownload: b,
      resumeDownload: p,
      resumeAllPaused: k,
      removeItem: $,
      clearCompleted: T
    } = Et(), _ = C(!1);
    let f = null;
    Rt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: y.value.length,
        completed: h.value.length
      }),
      (D, V) => {
        f && (clearTimeout(f), f = null);
        const B = D.active === 0 && D.failed === 0 && D.paused === 0 && D.completed > 0, N = V && (V.active > 0 || V.paused > 0);
        B && N && (f = setTimeout(() => {
          T(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const F = P(() => {
      var B;
      if (u.items.length === 0) return 0;
      const D = h.value.length, V = ((B = n.value) == null ? void 0 : B.progress) || 0;
      return Math.round((D + V / 100) / u.items.length * 100);
    });
    function U(D) {
      d(D);
    }
    function L(D) {
      return D === 0 ? "" : `${(D / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (D, V) => (s(), I(Le, { to: "body" }, [
      ye(m) ? (s(), o("div", {
        key: 0,
        class: oe(["model-download-queue", { minimized: !_.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: V[0] || (V[0] = (B) => _.value = !_.value)
        }, [
          e("div", uy, [
            V[4] || (V[4] = e("span", { class: "icon" }, "↓", -1)),
            V[5] || (V[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", my, "(" + a(ye(l)) + "/" + a(ye(u).items.length) + ")", 1)
          ]),
          e("div", vy, [
            e("span", fy, a(_.value ? "minimize" : "expand"), 1)
          ])
        ]),
        _.value ? (s(), o("div", ky, [
          ye(n) ? (s(), o("div", by, [
            V[6] || (V[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(_t, {
              item: ye(n),
              onCancel: V[1] || (V[1] = (B) => U(ye(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ye(y).length > 0 ? (s(), o("div", _y, [
            e("div", $y, [
              e("span", Cy, "Paused (" + a(ye(y).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: V[2] || (V[2] = //@ts-ignore
                (...B) => ye(k) && ye(k)(...B))
              }, "Resume All")
            ]),
            e("div", xy, [
              (s(!0), o(W, null, Z(ye(y), (B) => (s(), I(_t, {
                key: B.id,
                item: B,
                onResume: (N) => ye(p)(B.id),
                onRemove: (N) => ye($)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ye(r).length > 0 ? (s(), o("div", Sy, [
            e("div", Iy, [
              e("span", Ey, "Queued (" + a(ye(r).length) + ")", 1)
            ]),
            e("div", My, [
              (s(!0), o(W, null, Z(ye(r), (B) => (s(), I(_t, {
                key: B.id,
                item: B,
                onCancel: (N) => U(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ye(h).length > 0 ? (s(), o("div", zy, [
            e("div", Ly, [
              e("span", Ty, "Completed (" + a(ye(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: V[3] || (V[3] = //@ts-ignore
                (...B) => ye(T) && ye(T)(...B))
              }, "Clear")
            ]),
            e("div", Ry, [
              (s(!0), o(W, null, Z(ye(h).slice(0, 3), (B) => (s(), I(_t, {
                key: B.id,
                item: B,
                onRemove: (N) => ye($)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ye(v).length > 0 ? (s(), o("div", Dy, [
            e("div", Ny, [
              e("span", Oy, "Failed (" + a(ye(v).length) + ")", 1)
            ]),
            e("div", Uy, [
              (s(!0), o(W, null, Z(ye(v), (B) => (s(), I(_t, {
                key: B.id,
                item: B,
                onRetry: (N) => ye(b)(B.id),
                onRemove: (N) => ye($)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", gy, [
          e("div", hy, [
            e("div", {
              class: "progress-fill",
              style: Qe({ width: `${F.value}%` })
            }, null, 4)
          ]),
          ye(n) ? (s(), o("div", py, [
            e("span", yy, a(ye(n).filename), 1),
            e("span", wy, a(L(ye(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), By = /* @__PURE__ */ J(Py, [["__scopeId", "data-v-60751cfa"]]), Fy = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Ay = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Vy = {
  comfy: Fy,
  phosphor: Ay
}, Jt = "comfy", vs = "comfygit-theme";
let rt = null, fs = Jt;
function Wy() {
  try {
    const t = localStorage.getItem(vs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Jt;
}
function gs(t = Jt) {
  rt && rt.remove(), rt = document.createElement("style"), rt.id = "comfygit-theme-styles", rt.setAttribute("data-theme", t), rt.textContent = Vy[t], document.head.appendChild(rt), document.body.setAttribute("data-comfygit-theme", t), fs = t;
  try {
    localStorage.setItem(vs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Gy() {
  return fs;
}
function jy(t) {
  gs(t);
}
const Yt = document.createElement("link");
Yt.rel = "stylesheet";
Yt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Yt);
const Hy = Wy();
gs(Hy);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), jy(t);
  },
  getTheme: () => {
    const t = Gy();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Fe = null, Oe = null, St = null, $t = null, ss = null;
const ht = C(null);
async function zt() {
  var t;
  if (!((t = gt) != null && t.api)) return null;
  try {
    const u = await gt.api.fetchApi("/v2/comfygit/status");
    u.ok && (ht.value = await u.json());
  } catch {
  }
}
function qy() {
  if (!ht.value) return !1;
  const t = ht.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ht.value.has_changes;
}
function Ky() {
  Fe && Fe.remove(), Fe = document.createElement("div"), Fe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Fe.appendChild(t), Fe.addEventListener("click", (r) => {
    r.target === Fe && Wt();
  });
  const u = (r) => {
    r.key === "Escape" && (Wt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), qt({
    render: () => Kt(j1, {
      onClose: Wt,
      onStatusUpdate: (r) => {
        ht.value = r, It();
      }
    })
  }).mount(t), document.body.appendChild(Fe);
}
function Wt() {
  Fe && (Fe.remove(), Fe = null);
}
function Jy(t) {
  Ct(), Oe = document.createElement("div"), Oe.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Oe.style.position = "fixed", Oe.style.top = `${u.bottom + 8}px`, Oe.style.right = `${window.innerWidth - u.right}px`, Oe.style.zIndex = "10001";
  const n = (h) => {
    Oe && !Oe.contains(h.target) && h.target !== t && (Ct(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (h) => {
    h.key === "Escape" && (Ct(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), St = qt({
    render: () => Kt(ms, {
      status: ht.value,
      onClose: Ct,
      onCommitted: () => {
        Ct(), zt().then(It);
      }
    })
  }), St.mount(Oe), document.body.appendChild(Oe);
}
function Ct() {
  St && (St.unmount(), St = null), Oe && (Oe.remove(), Oe = null);
}
function Yy() {
  $t || ($t = document.createElement("div"), $t.className = "comfygit-download-queue-root", ss = qt({
    render: () => Kt(By)
  }), ss.mount($t), document.body.appendChild($t), console.log("[ComfyGit] Model download queue mounted"));
}
let Ye = null;
function It() {
  if (!Ye) return;
  const t = Ye.querySelector(".commit-indicator");
  t && (t.style.display = qy() ? "block" : "none");
}
const hs = document.createElement("style");
hs.textContent = `
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
document.head.appendChild(hs);
gt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = Ky, Ye = document.createElement("button"), Ye.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ye.innerHTML = 'Commit <span class="commit-indicator"></span>', Ye.title = "Quick Commit", Ye.onclick = () => Jy(Ye), t.appendChild(u), t.appendChild(Ye), (v = (h = gt.menu) == null ? void 0 : h.settingsGroup) != null && v.element && (gt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Yy();
    const { loadPendingDownloads: n } = Et();
    n(), await zt(), It(), setInterval(async () => {
      await zt(), It();
    }, 3e4);
    const r = gt.api;
    if (r) {
      let y = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((d) => {
          (d.startsWith("workflow:") || d.startsWith("Comfy.OpenWorkflowsPaths:") || d.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(d);
        }), window.location.reload();
      }, m = function() {
        const d = document.createElement("div");
        d.style.cssText = `
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
        b.textContent = "Workflows updated - refresh required", d.appendChild(b);
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => y(), d.appendChild(p);
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => d.remove(), d.appendChild(k), document.body.appendChild(d), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (d) => {
        const { change_type: b, workflow_name: p } = d.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${p}`), await zt(), It();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (d) => {
        const b = d.detail != null;
        b && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), y()) : m()), l = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
