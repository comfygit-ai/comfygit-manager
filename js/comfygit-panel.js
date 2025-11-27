import { app as gt } from "../../scripts/app.js";
import { defineComponent as J, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as ve, createBlock as S, resolveDynamicComponent as Gt, normalizeClass as se, withCtx as r, toDisplayString as a, createVNode as p, createTextVNode as y, computed as B, Fragment as V, renderList as Z, normalizeStyle as Xe, ref as _, onMounted as Se, watch as Rt, Teleport as Ie, withModifiers as Ce, Transition as xs, createSlots as Nt, withKeys as ot, onUnmounted as Ss, reactive as os, readonly as Is, unref as ge, withDirectives as qe, vModelText as ns, vModelRadio as Ot, vModelCheckbox as as, nextTick as Es, vModelSelect as Ut, TransitionGroup as Ms, createApp as jt, h as Ht } from "vue";
const Ts = { class: "panel-layout" }, zs = {
  key: 0,
  class: "panel-layout-header"
}, Ls = {
  key: 1,
  class: "panel-layout-search"
}, Rs = { class: "panel-layout-content" }, Ns = {
  key: 2,
  class: "panel-layout-footer"
}, Ds = /* @__PURE__ */ J({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (s(), o("div", Ts, [
      u.$slots.header ? (s(), o("div", zs, [
        ve(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (s(), o("div", Ls, [
        ve(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Rs, [
        ve(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (s(), o("div", Ns, [
        ve(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Y = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [d, h] of u)
    n[d] = h;
  return n;
}, De = /* @__PURE__ */ Y(Ds, [["__scopeId", "data-v-21565df9"]]), Ps = {
  key: 0,
  class: "panel-title-prefix"
}, Os = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Us = /* @__PURE__ */ J({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (s(), S(Gt(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: r(() => [
        t.showPrefix ? (s(), o("span", Ps, a(t.prefix), 1)) : (s(), o("span", Os)),
        ve(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bs = /* @__PURE__ */ Y(Us, [["__scopeId", "data-v-c3875efc"]]), Fs = ["title"], As = ["width", "height"], Vs = /* @__PURE__ */ J({
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
      onClick: n[0] || (n[0] = (d) => u.$emit("click"))
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
      ])], 8, As))
    ], 8, Fs));
  }
}), ls = /* @__PURE__ */ Y(Vs, [["__scopeId", "data-v-6fc7f16d"]]), Ws = { class: "header-left" }, Gs = {
  key: 0,
  class: "header-actions"
}, js = /* @__PURE__ */ J({
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
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ws, [
        p(Bs, { "show-prefix": t.showPrefix }, {
          default: r(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(ls, {
          key: 0,
          onClick: n[0] || (n[0] = (d) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (s(), o("div", Gs, [
        ve(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Y(js, [["__scopeId", "data-v-55a62cd6"]]), Hs = {
  key: 0,
  class: "section-title-count"
}, qs = {
  key: 1,
  class: "section-title-icon"
}, Ks = /* @__PURE__ */ J({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (s(), S(Gt(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (d) => t.clickable && u.$emit("click"))
    }, {
      default: r(() => [
        ve(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Hs, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", qs, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ue = /* @__PURE__ */ Y(Ks, [["__scopeId", "data-v-559361eb"]]), Js = { class: "status-grid" }, Ys = { class: "status-grid__columns" }, Qs = { class: "status-grid__column" }, Xs = { class: "status-grid__title" }, Zs = { class: "status-grid__column status-grid__column--right" }, eo = { class: "status-grid__title" }, to = {
  key: 0,
  class: "status-grid__footer"
}, so = /* @__PURE__ */ J({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", Js, [
      e("div", Ys, [
        e("div", Qs, [
          e("h4", Xs, a(t.leftTitle), 1),
          ve(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Zs, [
          e("h4", eo, a(t.rightTitle), 1),
          ve(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (s(), o("div", to, [
        ve(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), oo = /* @__PURE__ */ Y(so, [["__scopeId", "data-v-73b7ba3f"]]), no = {
  key: 0,
  class: "status-item__icon"
}, ao = {
  key: 1,
  class: "status-item__count"
}, lo = { class: "status-item__label" }, io = /* @__PURE__ */ J({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = B(() => `status-item--${u.variant}`);
    return (d, h) => (s(), o("div", {
      class: se(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", no, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", ao, a(t.count), 1)) : c("", !0),
      e("span", lo, a(t.label), 1)
    ], 2));
  }
}), je = /* @__PURE__ */ Y(io, [["__scopeId", "data-v-6f929183"]]), ro = { class: "issue-card__header" }, co = { class: "issue-card__icon" }, uo = { class: "issue-card__title" }, mo = {
  key: 0,
  class: "issue-card__content"
}, vo = {
  key: 0,
  class: "issue-card__description"
}, fo = {
  key: 1,
  class: "issue-card__items"
}, go = {
  key: 2,
  class: "issue-card__actions"
}, po = /* @__PURE__ */ J({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = B(() => `issue-card--${u.severity}`);
    return (d, h) => (s(), o("div", {
      class: se(["issue-card", n.value])
    }, [
      e("div", ro, [
        e("span", co, a(t.icon), 1),
        e("h4", uo, a(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", mo, [
        t.description ? (s(), o("p", vo, a(t.description), 1)) : c("", !0),
        ve(d.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", fo, [
        (s(!0), o(V, null, Z(t.items, (g, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : c("", !0),
      d.$slots.actions ? (s(), o("div", go, [
        ve(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ Y(po, [["__scopeId", "data-v-df6aa348"]]), ho = ["type", "disabled"], yo = {
  key: 0,
  class: "spinner"
}, wo = /* @__PURE__ */ J({
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
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (d) => u.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", yo)) : c("", !0),
      t.loading ? c("", !0) : ve(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ho));
  }
}), K = /* @__PURE__ */ Y(wo, [["__scopeId", "data-v-772abe47"]]), ko = { class: "empty-state" }, bo = {
  key: 0,
  class: "empty-icon"
}, _o = { class: "empty-message" }, $o = /* @__PURE__ */ J({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (s(), o("div", ko, [
      t.icon ? (s(), o("div", bo, a(t.icon), 1)) : c("", !0),
      e("p", _o, a(t.message), 1),
      t.actionLabel ? (s(), S(K, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (d) => u.$emit("action"))
      }, {
        default: r(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), We = /* @__PURE__ */ Y($o, [["__scopeId", "data-v-4466284f"]]), Co = /* @__PURE__ */ J({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: se(["detail-label"]),
      style: Xe({ minWidth: t.minWidth })
    }, [
      ve(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Vt = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-75e9eeb8"]]), xo = /* @__PURE__ */ J({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ve(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Wt = /* @__PURE__ */ Y(xo, [["__scopeId", "data-v-2f186e4c"]]), So = { class: "detail-row" }, Io = /* @__PURE__ */ J({
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
    return (u, n) => (s(), o("div", So, [
      p(Vt, { "min-width": t.labelMinWidth }, {
        default: r(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(Wt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: r(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ve(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), be = /* @__PURE__ */ Y(Io, [["__scopeId", "data-v-ef15664a"]]), Eo = { class: "modal-header" }, Mo = { class: "modal-body" }, To = { class: "status-section" }, zo = {
  key: 0,
  class: "status-section"
}, Lo = { class: "section-header-row" }, Ro = {
  key: 0,
  class: "workflow-group"
}, No = { class: "workflow-group-header" }, Do = { class: "workflow-group-title" }, Po = { class: "workflow-list" }, Oo = { class: "workflow-name" }, Uo = { class: "workflow-issue" }, Bo = {
  key: 1,
  class: "workflow-group"
}, Fo = { class: "workflow-group-header" }, Ao = { class: "workflow-group-title" }, Vo = { class: "workflow-list" }, Wo = { class: "workflow-name" }, Go = { class: "workflow-issue" }, jo = {
  key: 2,
  class: "workflow-group"
}, Ho = { class: "workflow-group-header" }, qo = { class: "workflow-group-title" }, Ko = { class: "workflow-list" }, Jo = { class: "workflow-name" }, Yo = {
  key: 3,
  class: "workflow-group"
}, Qo = { class: "workflow-group-header" }, Xo = { class: "workflow-group-title" }, Zo = { class: "workflow-list" }, en = { class: "workflow-name" }, tn = {
  key: 4,
  class: "workflow-group"
}, sn = { class: "workflow-group-header" }, on = { class: "workflow-group-title" }, nn = { class: "workflow-list" }, an = { class: "workflow-name" }, ln = {
  key: 5,
  class: "workflow-group"
}, rn = { class: "workflow-group-title" }, dn = { class: "expand-icon" }, cn = {
  key: 0,
  class: "workflow-list"
}, un = { class: "workflow-name" }, mn = {
  key: 1,
  class: "status-section"
}, vn = {
  key: 0,
  class: "change-group"
}, fn = { class: "change-group-header" }, gn = { class: "change-group-title" }, pn = { class: "change-list" }, hn = { class: "node-name" }, yn = {
  key: 0,
  class: "dev-badge"
}, wn = {
  key: 1,
  class: "change-group"
}, kn = { class: "change-group-header" }, bn = { class: "change-group-title" }, _n = { class: "change-list" }, $n = { class: "node-name" }, Cn = {
  key: 0,
  class: "dev-badge"
}, xn = {
  key: 2,
  class: "change-group"
}, Sn = { class: "change-list" }, In = { class: "change-item" }, En = { class: "node-name" }, Mn = {
  key: 3,
  class: "change-group"
}, Tn = {
  key: 2,
  class: "status-section"
}, zn = { class: "section-header-row" }, Ln = {
  key: 0,
  class: "drift-item"
}, Rn = { class: "drift-list" }, Nn = {
  key: 0,
  class: "drift-list-more"
}, Dn = {
  key: 1,
  class: "drift-item"
}, Pn = { class: "drift-list" }, On = {
  key: 0,
  class: "drift-list-more"
}, Un = {
  key: 2,
  class: "drift-item"
}, Bn = {
  key: 3,
  class: "drift-item"
}, Fn = {
  key: 3,
  class: "status-section"
}, An = { class: "info-box" }, Vn = { class: "drift-list" }, Wn = {
  key: 0,
  class: "drift-list-more"
}, Gn = {
  key: 4,
  class: "status-section"
}, jn = { class: "warning-box" }, Hn = {
  key: 5,
  class: "empty-state-inline"
}, qn = { class: "modal-actions" }, Kn = /* @__PURE__ */ J({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = _(!1);
    Se(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Rt(() => u.show, (I, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", I);
    }, { immediate: !0 });
    const d = B(() => {
      var I, $, x;
      return ((x = ($ = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : x.filter(
        (k) => k.status === "broken" && k.sync_state === "synced"
      )) || [];
    }), h = B(() => {
      var I, $, x;
      return ((x = ($ = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : x.filter(
        (k) => k.status === "broken" && k.sync_state !== "synced"
      )) || [];
    }), g = B(() => {
      var I, $, x;
      return ((x = ($ = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : $.synced) == null ? void 0 : x.filter((k) => {
        var P, F, z;
        const b = (z = (F = (P = u.status) == null ? void 0 : P.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : z.find((N) => N.name === k);
        return !b || b.status !== "broken";
      })) || [];
    }), f = B(() => {
      var I, $, x, k, b;
      return (I = u.status) != null && I.workflows ? ((($ = u.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((x = u.status.workflows.modified) == null ? void 0 : x.length) ?? 0) > 0 || (((k = u.status.workflows.deleted) == null ? void 0 : k.length) ?? 0) > 0 || (((b = u.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), v = B(() => {
      var $, x, k;
      const I = ($ = u.status) == null ? void 0 : $.git_changes;
      return I ? (((x = I.nodes_added) == null ? void 0 : x.length) ?? 0) > 0 || (((k = I.nodes_removed) == null ? void 0 : k.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), l = B(() => {
      var I, $, x, k, b, P;
      return !f.value && !v.value && (($ = (I = u.status) == null ? void 0 : I.comparison) == null ? void 0 : $.is_synced) && (((x = u.status) == null ? void 0 : x.missing_models_count) ?? 0) === 0 && (((P = (b = (k = u.status) == null ? void 0 : k.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = B(() => {
      var $, x;
      const I = (x = ($ = u.status) == null ? void 0 : $.git_changes) == null ? void 0 : x.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function w(I) {
      return typeof I == "string" ? I : I.name;
    }
    function i(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, $) => {
      var x, k, b, P, F, z, N, G, O, D, U, T, E, j, ne, we, re, Q, X, L, C, te;
      return s(), S(Ie, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (ee) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = Ce(() => {
            }, ["stop"]))
          }, [
            e("div", Eo, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (ee) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", Mo, [
              e("div", To, [
                p(Ue, { level: "4" }, {
                  default: r(() => [...$[8] || ($[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                p(be, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (s(), o("div", zo, [
                e("div", Lo, [
                  p(Ue, { level: "4" }, {
                    default: r(() => [...$[9] || ($[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (ee) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", Ro, [
                  e("div", No, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Do, "BROKEN (COMMITTED) (" + a(d.value.length) + ")", 1)
                  ]),
                  e("div", Po, [
                    (s(!0), o(V, null, Z(d.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Oo, a(ee.name), 1),
                      e("span", Uo, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                h.value.length ? (s(), o("div", Bo, [
                  e("div", Fo, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ao, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Vo, [
                    (s(!0), o(V, null, Z(h.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Wo, a(ee.name), 1),
                      e("span", Go, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (k = (x = t.status.workflows) == null ? void 0 : x.new) != null && k.length ? (s(), o("div", jo, [
                  e("div", Ho, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", qo, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ko, [
                    (s(!0), o(V, null, Z(t.status.workflows.new, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Jo, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = (b = t.status.workflows) == null ? void 0 : b.modified) != null && P.length ? (s(), o("div", Yo, [
                  e("div", Qo, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Xo, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Zo, [
                    (s(!0), o(V, null, Z(t.status.workflows.modified, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", en, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (z = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && z.length ? (s(), o("div", tn, [
                  e("div", sn, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", on, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", nn, [
                    (s(!0), o(V, null, Z(t.status.workflows.deleted, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", an, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (s(), o("div", ln, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (ee) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", rn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", dn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", cn, [
                    (s(!0), o(V, null, Z(g.value, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", un, a(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (s(), o("div", mn, [
                p(Ue, { level: "4" }, {
                  default: r(() => [...$[16] || ($[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (N = t.status.git_changes) == null ? void 0 : N.nodes_added) != null && G.length ? (s(), o("div", vn, [
                  e("div", fn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", gn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", pn, [
                    (s(!0), o(V, null, Z(t.status.git_changes.nodes_added, (ee) => (s(), o("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", hn, a(w(ee)), 1),
                      i(ee) ? (s(), o("span", yn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (O = t.status.git_changes) == null ? void 0 : O.nodes_removed) != null && D.length ? (s(), o("div", wn, [
                  e("div", kn, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", bn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", _n, [
                    (s(!0), o(V, null, Z(t.status.git_changes.nodes_removed, (ee) => (s(), o("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", $n, a(w(ee)), 1),
                      i(ee) ? (s(), o("span", Cn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (U = t.status.git_changes) != null && U.workflow_changes ? (s(), o("div", xn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Sn, [
                    e("div", In, [
                      e("span", En, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (s(), o("div", Mn, [...$[20] || ($[20] = [
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
              (E = t.status.comparison) != null && E.is_synced ? c("", !0) : (s(), o("div", Tn, [
                e("div", zn, [
                  p(Ue, { level: "4" }, {
                    default: r(() => [...$[21] || ($[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (ee) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ne = (j = t.status.comparison) == null ? void 0 : j.missing_nodes) != null && ne.length ? (s(), o("div", Ln, [
                  p(be, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Rn, [
                    (s(!0), o(V, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Nn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (re = (we = t.status.comparison) == null ? void 0 : we.extra_nodes) != null && re.length ? (s(), o("div", Dn, [
                  p(be, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Pn, [
                    (s(!0), o(V, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", On, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && X.length ? (s(), o("div", Un, [
                  p(be, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (L = t.status.comparison) != null && L.packages_in_sync ? c("", !0) : (s(), o("div", Bn, [
                  p(be, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (te = (C = t.status.comparison) == null ? void 0 : C.disabled_nodes) != null && te.length ? (s(), o("div", Fn, [
                p(Ue, { level: "4" }, {
                  default: r(() => [...$[23] || ($[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", An, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Vn, [
                  (s(!0), o(V, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (s(), o("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Wn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Gn, [
                p(Ue, { level: "4" }, {
                  default: r(() => [...$[25] || ($[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", jn, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              l.value ? (s(), o("div", Hn, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", qn, [
              p(K, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (ee) => I.$emit("close"))
              }, {
                default: r(() => [...$[29] || ($[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Jn = /* @__PURE__ */ Y(Kn, [["__scopeId", "data-v-c67eed17"]]), Yn = { class: "health-section-header" }, Qn = { class: "suggestions-content" }, Xn = { class: "suggestions-text" }, Zn = { style: { "margin-top": "var(--cg-space-3)" } }, ea = {
  key: 1,
  class: "no-issues-text"
}, ta = /* @__PURE__ */ J({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: u }) {
    const n = t, d = _(!1), h = _(!1);
    function g() {
      d.value = !0;
    }
    function f() {
      d.value = !1, l("view-workflows");
    }
    function v() {
      d.value = !1, l("view-nodes");
    }
    const l = u, m = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), w = B(() => n.status.has_changes), i = B(() => {
      const O = n.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), I = B(() => n.status.has_changes || m.value), $ = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), x = B(() => n.status.git_changes.has_other_changes), k = B(() => {
      var O;
      return ((O = n.status.workflows.analyzed) == null ? void 0 : O.filter((D) => D.status === "broken")) || [];
    }), b = B(() => {
      var O;
      return ((O = n.status.workflows.analyzed) == null ? void 0 : O.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), P = B(() => k.value.length > 0), F = B(() => P.value || b.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), z = B(() => {
      const O = [];
      return n.status.workflows.new.length > 0 && O.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && O.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && O.push(`${n.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), N = B(() => {
      var U, T;
      const O = [], D = n.status.comparison;
      return (U = D.missing_nodes) != null && U.length && O.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (T = D.extra_nodes) != null && T.length && O.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), G = B(() => {
      var U, T;
      const O = [], D = n.status.comparison;
      return (U = D.extra_nodes) != null && U.length && (D.extra_nodes.slice(0, 3).forEach((E) => {
        O.push(`Untracked: ${E}`);
      }), D.extra_nodes.length > 3 && O.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (T = D.missing_nodes) != null && T.length && (D.missing_nodes.slice(0, 3).forEach((E) => {
        O.push(`Missing: ${E}`);
      }), D.missing_nodes.length > 3 && O.push(`...and ${D.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, D) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, { title: "STATUS" })
        ]),
        content: r(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: D[1] || (D[1] = (U) => h.value = !0),
            onMouseleave: D[2] || (D[2] = (U) => h.value = !1)
          }, [
            e("div", Yn, [
              p(Ue, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: r(() => [...D[9] || (D[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              p(xs, { name: "fade" }, {
                default: r(() => [
                  h.value ? (s(), S(K, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: g
                  }, {
                    default: r(() => [...D[10] || (D[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            p(oo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Nt({
              left: r(() => [
                t.status.workflows.new.length ? (s(), S(je, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), S(je, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), S(je, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                p(je, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: r(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(je, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(je, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(je, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                x.value ? (s(), S(je, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                w.value && !i.value && !x.value ? (s(), S(je, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                w.value ? c("", !0) : (s(), S(je, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              I.value ? {
                name: "footer",
                fn: r(() => [
                  D[12] || (D[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Qn, [
                    e("span", Xn, a(z.value), 1),
                    p(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[0] || (D[0] = (U) => O.$emit("commit-changes"))
                    }, {
                      default: r(() => [...D[11] || (D[11] = [
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
          t.status.is_detached_head ? (s(), S(vt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: r(() => [
              p(K, {
                variant: "primary",
                size: "sm",
                onClick: D[3] || (D[3] = (U) => O.$emit("create-branch"))
              }, {
                default: r(() => [...D[13] || (D[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", Zn, [
            p(Ue, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: r(() => [...D[14] || (D[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            F.value ? (s(), o(V, { key: 0 }, [
              k.value.length > 0 ? (s(), S(vt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: k.value.map((U) => `${U.name} — ${U.issue_summary}`)
              }, {
                actions: r(() => [
                  p(K, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[4] || (D[4] = (U) => O.$emit("view-workflows"))
                  }, {
                    default: r(() => [...D[15] || (D[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              b.value.length > 0 ? (s(), S(vt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${b.value.length} workflow${b.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: b.value.map((U) => `${U.name} — ${U.models_needing_path_sync_count} model path${U.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: r(() => [
                  p(K, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[5] || (D[5] = (U) => O.$emit("view-workflows"))
                  }, {
                    default: r(() => [...D[16] || (D[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !P.value ? (s(), S(vt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index."
              }, {
                actions: r(() => [
                  p(K, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[6] || (D[6] = (U) => O.$emit("view-workflows"))
                  }, {
                    default: r(() => [...D[17] || (D[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (s(), S(vt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: N.value,
                items: G.value
              }, {
                actions: r(() => [
                  p(K, {
                    variant: "secondary",
                    size: "sm",
                    onClick: g
                  }, {
                    default: r(() => [...D[18] || (D[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  p(K, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (U) => O.$emit("view-nodes"))
                  }, {
                    default: r(() => [...D[19] || (D[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : I.value ? (s(), o("span", ea, "No issues")) : (s(), S(We, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      p(Jn, {
        show: d.value,
        status: t.status,
        onClose: D[8] || (D[8] = (U) => d.value = !1),
        onNavigateWorkflows: f,
        onNavigateNodes: v
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), sa = /* @__PURE__ */ Y(ta, [["__scopeId", "data-v-bd67edd1"]]), oa = ["type", "value", "placeholder", "disabled"], na = /* @__PURE__ */ J({
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
    const d = t, h = n, g = _(null);
    function f(v) {
      const l = v.target.value;
      h("update:modelValue", l);
    }
    return Se(() => {
      d.autoFocus && g.value && g.value.focus();
    }), u({
      focus: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.blur();
      }
    }), (v, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        l[0] || (l[0] = ot((m) => v.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ot((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (m) => v.$emit("focus")),
      onBlur: l[3] || (l[3] = (m) => v.$emit("blur"))
    }, null, 42, oa));
  }
}), Lt = /* @__PURE__ */ Y(na, [["__scopeId", "data-v-0380d08f"]]), aa = { class: "branch-create-form" }, la = { class: "form-actions" }, ia = /* @__PURE__ */ J({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, d = _(""), h = B(() => {
      const v = d.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      h.value && (n("create", d.value.trim()), d.value = "");
    }
    function f() {
      d.value = "", n("cancel");
    }
    return (v, l) => (s(), o("div", aa, [
      p(Lt, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (m) => d.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", la, [
        p(K, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: g
        }, {
          default: r(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(K, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: r(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ra = /* @__PURE__ */ Y(ia, [["__scopeId", "data-v-7c500394"]]), da = { class: "branch-list-item__indicator" }, ca = { class: "branch-list-item__name" }, ua = {
  key: 0,
  class: "branch-list-item__actions"
}, ma = {
  key: 0,
  class: "branch-list-item__current-label"
}, va = /* @__PURE__ */ J({
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
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (d) => t.clickable && u.$emit("click"))
    }, [
      e("span", da, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ca, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (s(), o("div", ua, [
        ve(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", ma, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), fa = /* @__PURE__ */ Y(va, [["__scopeId", "data-v-c6581a24"]]), ga = {
  key: 2,
  class: "branch-list"
}, pa = /* @__PURE__ */ J({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, d = _(!1);
    function h(f) {
      n("create", f), g();
    }
    function g() {
      d.value = !1;
    }
    return (f, v) => (s(), S(De, null, {
      header: r(() => [
        p(Pe, { title: "BRANCHES" }, {
          actions: r(() => [
            d.value ? c("", !0) : (s(), S(K, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (l) => d.value = !0)
            }, {
              default: r(() => [...v[1] || (v[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: r(() => [
        d.value ? (s(), S(ra, {
          key: 0,
          onCreate: h,
          onCancel: g
        })) : c("", !0),
        t.branches.length === 0 ? (s(), S(We, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ga, [
          (s(!0), o(V, null, Z(t.branches, (l) => (s(), S(fa, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: r(() => [
              l.is_current ? c("", !0) : (s(), S(K, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => f.$emit("delete", l.name)
              }, {
                default: r(() => [...v[2] || (v[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? c("", !0) : (s(), S(K, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => f.$emit("switch", l.name)
              }, {
                default: r(() => [...v[3] || (v[3] = [
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
}), ha = /* @__PURE__ */ Y(pa, [["__scopeId", "data-v-86784ddd"]]), ya = { class: "commit-list" }, wa = /* @__PURE__ */ J({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (s(), o("div", ya, [
      ve(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ka = /* @__PURE__ */ Y(wa, [["__scopeId", "data-v-8c5ee761"]]), ba = { class: "commit-hash" }, _a = /* @__PURE__ */ J({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = B(() => u.hash.slice(0, u.length));
    return (d, h) => (s(), o("span", ba, a(n.value), 1));
  }
}), is = /* @__PURE__ */ Y(_a, [["__scopeId", "data-v-7c333cc6"]]), $a = { class: "commit-message" }, Ca = { class: "commit-date" }, xa = /* @__PURE__ */ J({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, d = u;
    function h() {
      n.clickable && d("click");
    }
    return (g, f) => (s(), o("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      p(is, { hash: t.hash }, null, 8, ["hash"]),
      e("span", $a, a(t.message), 1),
      e("span", Ca, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = Ce(() => {
        }, ["stop"]))
      }, [
        ve(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Sa = /* @__PURE__ */ Y(xa, [["__scopeId", "data-v-dd7c621b"]]), Ia = /* @__PURE__ */ J({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (s(), S(De, null, {
      header: r(() => [
        p(Pe, { title: "HISTORY" })
      ]),
      content: r(() => [
        t.commits.length === 0 ? (s(), S(We, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(ka, { key: 1 }, {
          default: r(() => [
            (s(!0), o(V, null, Z(t.commits, (d) => (s(), S(Sa, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (h) => u.$emit("select", d)
            }, {
              actions: r(() => [
                p(K, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => u.$emit("checkout", d),
                  title: "Checkout this commit"
                }, {
                  default: r(() => [...n[0] || (n[0] = [
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
}), Ea = /* @__PURE__ */ Y(Ia, [["__scopeId", "data-v-981c3c64"]]), Ew = [
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
], Mw = {
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
}, Ma = [
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
], Tw = [
  ...Ma,
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
function bt() {
  return !1;
}
function Me() {
  const t = _(!1), u = _(null);
  async function n(H, ae) {
    var R;
    if (!((R = window.app) != null && R.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(H, ae);
    if (!A.ok) {
      const q = await A.json().catch(() => ({}));
      throw new Error(q.error || q.message || `Request failed: ${A.status}`);
    }
    return A.json();
  }
  async function d(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(H, ae = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ae })
    });
  }
  async function g(H = 10, ae = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ae}`);
  }
  async function f(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function l(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function m(H, ae = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ae })
    });
  }
  async function w(H, ae = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ae })
    });
  }
  async function i(H, ae = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ae })
    });
  }
  async function I(H, ae = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ae })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await d();
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
  async function x(H) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function k() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function b(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function P() {
    return n("/v2/workspace/environments/create_status");
  }
  async function F(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function z(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function N(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ae = await d(H), A = [];
      return ae.workflows.new.forEach((R) => {
        A.push({ name: R, status: "new", missing_nodes: 0, missing_models: 0, path: R });
      }), ae.workflows.modified.forEach((R) => {
        A.push({ name: R, status: "modified", missing_nodes: 0, missing_models: 0, path: R });
      }), ae.workflows.synced.forEach((R) => {
        A.push({ name: R, status: "synced", missing_nodes: 0, missing_models: 0, path: R });
      }), A;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function O(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function D(H, ae, A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ae, install_models: A })
    });
  }
  async function U(H, ae, A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ae, importance: A })
    });
  }
  async function T() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function E() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function j(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function ne(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function we(H, ae) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ae })
    });
  }
  async function re(H, ae) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ae })
    });
  }
  async function Q(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function X(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function L() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function C() {
    return n("/v2/workspace/models/directory");
  }
  async function te(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
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
  async function $e(H) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ye(H, ae) {
    try {
      const A = new URLSearchParams();
      return H && A.append("level", H), ae && A.append("lines", ae.toString()), n(`/v2/comfygit/debug/logs?${A}`);
    } catch {
      return [];
    }
  }
  async function me(H, ae) {
    try {
      const A = new URLSearchParams();
      return H && A.append("level", H), ae && A.append("lines", ae.toString()), n(`/v2/workspace/debug/logs?${A}`);
    } catch {
      return [];
    }
  }
  async function Be() {
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
  async function ke(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function at(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function st(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function Ke(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function pe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ge(H, ae) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ae })
    });
  }
  async function Fe(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function le(H, ae, A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ae, push_url: A })
    });
  }
  async function oe(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function ie(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Te(H = "skip", ae = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ae
      })
    });
  }
  async function wt(H, ae) {
    const A = ae ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ae)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(A);
  }
  async function lt(H, ae = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ae.modelStrategy || "skip",
        force: ae.force || !1
      })
    });
  }
  async function Ee(H, ae) {
    const A = ae ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ae)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(A);
  }
  async function kt(H, ae = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ae.force || !1 })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: d,
    commit: h,
    getHistory: g,
    exportEnv: f,
    // Git Operations
    getBranches: v,
    getCommitDetail: l,
    checkout: m,
    createBranch: w,
    switchBranch: i,
    deleteBranch: I,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: x,
    getSwitchProgress: k,
    createEnvironment: b,
    getCreateProgress: P,
    getComfyUIReleases: F,
    deleteEnvironment: z,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: G,
    resolveWorkflow: O,
    installWorkflowDeps: D,
    setModelImportance: U,
    // Model Management
    getEnvironmentModels: T,
    getWorkspaceModels: E,
    getModelDetails: j,
    openFileLocation: ne,
    addModelSource: we,
    removeModelSource: re,
    deleteModel: Q,
    downloadModel: X,
    scanWorkspaceModels: L,
    getModelsDirectory: C,
    setModelsDirectory: te,
    // Settings
    getConfig: ee,
    updateConfig: $e,
    // Debug/Logs
    getEnvironmentLogs: ye,
    getWorkspaceLogs: me,
    // Node Management
    getNodes: Be,
    trackNodeAsDev: ke,
    installNode: at,
    updateNode: st,
    uninstallNode: Ke,
    // Git Remotes
    getRemotes: pe,
    addRemote: Ge,
    removeRemote: Fe,
    updateRemoteUrl: le,
    fetchRemote: oe,
    getRemoteSyncStatus: ie,
    // Push/Pull
    getPullPreview: wt,
    pullFromRemote: lt,
    getPushPreview: Ee,
    pushToRemote: kt,
    // Environment Sync
    syncEnvironmentManually: Te
  };
}
async function _t(t, u = {}, n = 5e3) {
  const d = new AbortController(), h = setTimeout(() => d.abort(), n);
  try {
    const g = await fetch(t, {
      ...u,
      signal: d.signal
    });
    return clearTimeout(h), g;
  } catch (g) {
    throw clearTimeout(h), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function rs() {
  const t = _(null);
  async function u() {
    try {
      const f = await _t(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (f.ok)
        return (await f.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const f = await _t(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Health check failed");
      return await f.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const f = await _t(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Failed to get status");
      return await f.json();
    } catch {
      return null;
    }
  }
  async function h() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await _t(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await _t(
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
    getStatus: d,
    restart: h,
    kill: g
  };
}
const Ta = { class: "base-modal-header" }, za = {
  key: 0,
  class: "base-modal-title"
}, La = { class: "base-modal-body" }, Ra = {
  key: 0,
  class: "base-modal-loading"
}, Na = {
  key: 1,
  class: "base-modal-error"
}, Da = {
  key: 0,
  class: "base-modal-footer"
}, Pa = /* @__PURE__ */ J({
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
    const n = t, d = u;
    function h() {
      n.closeOnOverlayClick && d("close");
    }
    function g(f) {
      f.key === "Escape" && d("close");
    }
    return Se(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Ss(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (f, v) => (s(), S(Ie, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Ce(() => {
          }, ["stop"]))
        }, [
          e("div", Ta, [
            ve(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", za, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (l) => f.$emit("close"))
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
          e("div", La, [
            t.loading ? (s(), o("div", Ra, "Loading...")) : t.error ? (s(), o("div", Na, a(t.error), 1)) : ve(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", Da, [
            ve(f.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), nt = /* @__PURE__ */ Y(Pa, [["__scopeId", "data-v-2125a0e6"]]), Oa = ["type", "disabled"], Ua = {
  key: 0,
  class: "spinner"
}, Ba = /* @__PURE__ */ J({
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
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (d) => u.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Ua)) : c("", !0),
      ve(u.$slots, "default", {}, void 0, !0)
    ], 10, Oa));
  }
}), ce = /* @__PURE__ */ Y(Ba, [["__scopeId", "data-v-f3452606"]]), Fa = {
  key: 0,
  class: "base-title-count"
}, Aa = /* @__PURE__ */ J({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (s(), S(Gt(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: r(() => [
        ve(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Fa, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), St = /* @__PURE__ */ Y(Aa, [["__scopeId", "data-v-5a01561d"]]), Va = ["value", "disabled"], Wa = {
  key: 0,
  value: "",
  disabled: ""
}, Ga = ["value"], ja = {
  key: 0,
  class: "base-select-error"
}, Ha = /* @__PURE__ */ J({
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
    function u(d) {
      return typeof d == "string" ? d : d.value;
    }
    function n(d) {
      return typeof d == "string" ? d : d.label;
    }
    return (d, h) => (s(), o("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (g) => d.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Wa, a(t.placeholder), 1)) : c("", !0),
        (s(!0), o(V, null, Z(t.options, (g) => (s(), o("option", {
          key: u(g),
          value: u(g)
        }, a(n(g)), 9, Ga))), 128))
      ], 42, Va),
      t.error ? (s(), o("span", ja, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), qa = /* @__PURE__ */ Y(Ha, [["__scopeId", "data-v-7436d745"]]), Ka = { class: "popover-header" }, Ja = { class: "popover-title" }, Ya = { class: "popover-content" }, Qa = {
  key: 0,
  class: "popover-actions"
}, Xa = /* @__PURE__ */ J({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (s(), S(Ie, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (d) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Xe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ce(() => {
          }, ["stop"]))
        }, [
          e("div", Ka, [
            e("h4", Ja, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (d) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Ya, [
            ve(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (s(), o("div", Qa, [
            ve(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Ze = /* @__PURE__ */ Y(Xa, [["__scopeId", "data-v-42815ace"]]), Za = { class: "detail-section" }, el = {
  key: 0,
  class: "empty-message"
}, tl = { class: "model-header" }, sl = { class: "model-name" }, ol = { class: "model-details" }, nl = { class: "model-row" }, al = { class: "model-row" }, ll = { class: "label" }, il = {
  key: 0,
  class: "model-row model-row-nodes"
}, rl = { class: "node-list" }, dl = ["onClick"], cl = {
  key: 1,
  class: "model-row"
}, ul = { class: "value" }, ml = {
  key: 0,
  class: "model-actions"
}, vl = { class: "detail-section" }, fl = {
  key: 0,
  class: "empty-message"
}, gl = { class: "node-name" }, pl = {
  key: 0,
  class: "node-version"
}, hl = /* @__PURE__ */ J({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, d = u, { getWorkflowDetails: h, setModelImportance: g, installWorkflowDeps: f } = Me(), v = _(null), l = _(!1), m = _(null), w = _(!1), i = _({}), I = _({}), $ = _(!1), x = _(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function b(T) {
      switch (T) {
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
    function P(T) {
      switch (T) {
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
    function F(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const E = T.hash || T.filename;
      return x.value.has(E) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function z(T) {
      return x.value.has(T);
    }
    function N(T) {
      x.value.has(T) ? x.value.delete(T) : x.value.add(T), x.value = new Set(x.value);
    }
    async function G() {
      l.value = !0, m.value = null;
      try {
        v.value = await h(n.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function O(T, E) {
      i.value[T] = E, w.value = !0;
    }
    async function D() {
      if (!w.value) {
        d("close");
        return;
      }
      l.value = !0, m.value = null;
      try {
        for (const [T, E] of Object.entries(i.value))
          await g(n.workflowName, T, E);
        d("refresh"), d("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function U(T) {
      I.value[T] = !0, m.value = null;
      try {
        await f(n.workflowName, !0, !1), await G();
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to install node";
      } finally {
        I.value[T] = !1;
      }
    }
    return Se(G), (T, E) => (s(), o(V, null, [
      p(nt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: m.value || void 0,
        onClose: E[5] || (E[5] = (j) => d("close"))
      }, {
        body: r(() => [
          v.value ? (s(), o(V, { key: 0 }, [
            e("section", Za, [
              p(St, { variant: "section" }, {
                default: r(() => [
                  y("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", el, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(V, null, Z(v.value.models, (j) => (s(), o("div", {
                key: j.hash || j.filename,
                class: "model-card"
              }, [
                e("div", tl, [
                  E[7] || (E[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", sl, a(j.filename), 1)
                ]),
                e("div", ol, [
                  e("div", nl, [
                    E[8] || (E[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", b(j.status)])
                    }, a(P(j.status)), 3)
                  ]),
                  e("div", al, [
                    e("span", ll, [
                      E[9] || (E[9] = y(" Importance: ", -1)),
                      p(ls, {
                        size: 14,
                        title: "About importance levels",
                        onClick: E[0] || (E[0] = (ne) => $.value = !0)
                      })
                    ]),
                    p(qa, {
                      "model-value": i.value[j.filename] || j.importance,
                      options: k,
                      "onUpdate:modelValue": (ne) => O(j.filename, ne)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  j.loaded_by && j.loaded_by.length > 0 ? (s(), o("div", il, [
                    E[10] || (E[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", rl, [
                      (s(!0), o(V, null, Z(F(j), (ne, we) => (s(), o("div", {
                        key: `${ne.node_id}-${we}`,
                        class: "node-reference"
                      }, a(ne.node_type) + " (Node #" + a(ne.node_id) + ") ", 1))), 128)),
                      j.loaded_by.length > 3 ? (s(), o("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (ne) => N(j.hash || j.filename)
                      }, a(z(j.hash || j.filename) ? "▼ Show less" : `▶ View all (${j.loaded_by.length})`), 9, dl)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  j.size_mb ? (s(), o("div", cl, [
                    E[11] || (E[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", ul, a(j.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                j.status !== "available" ? (s(), o("div", ml, [
                  j.status === "downloadable" ? (s(), S(ce, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: E[1] || (E[1] = (ne) => d("resolve"))
                  }, {
                    default: r(() => [...E[12] || (E[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : j.status === "path_mismatch" ? (s(), S(ce, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: E[2] || (E[2] = (ne) => d("resolve"))
                  }, {
                    default: r(() => [...E[13] || (E[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (s(), S(ce, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: E[3] || (E[3] = (ne) => d("resolve"))
                  }, {
                    default: r(() => [...E[14] || (E[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", vl, [
              p(St, { variant: "section" }, {
                default: r(() => [
                  y("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", fl, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(V, null, Z(v.value.nodes, (j) => (s(), o("div", {
                key: j.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", j.status === "installed" ? "installed" : "missing"])
                }, a(j.status === "installed" ? "✓" : "✕"), 3),
                e("span", gl, a(j.name), 1),
                j.version ? (s(), o("span", pl, "v" + a(j.version), 1)) : c("", !0),
                j.status === "missing" ? (s(), S(ce, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[j.name],
                  onClick: (ne) => U(j.name),
                  class: "node-install-btn"
                }, {
                  default: r(() => [...E[15] || (E[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: r(() => [
          p(ce, {
            variant: "secondary",
            onClick: E[4] || (E[4] = (j) => d("close"))
          }, {
            default: r(() => [...E[16] || (E[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), S(ce, {
            key: 0,
            variant: "primary",
            onClick: D
          }, {
            default: r(() => [...E[17] || (E[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      p(Ze, {
        show: $.value,
        title: "Model Importance Levels",
        onClose: E[6] || (E[6] = (j) => $.value = !1)
      }, {
        content: r(() => [...E[18] || (E[18] = [
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
}), yl = /* @__PURE__ */ Y(hl, [["__scopeId", "data-v-0b14d32e"]]), he = os({
  items: [],
  status: "idle"
});
let He = null;
function ds() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Bt(t) {
  return he.items.find((u) => u.id === t);
}
async function ft() {
  if (he.status === "downloading") return;
  const t = he.items.find((u) => u.status === "queued");
  if (!t) {
    he.status = "idle";
    return;
  }
  he.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await wl(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    he.status = "idle", ft();
  }
}
async function wl(t) {
  return new Promise((u, n) => {
    He && (He.close(), He = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    He = h;
    let g = Date.now(), f = 0, v = !1;
    h.onmessage = (l) => {
      try {
        const m = JSON.parse(l.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const w = Date.now(), i = (w - g) / 1e3;
            if (i > 0.5) {
              const I = t.downloaded - f;
              if (t.speed = I / i, g = w, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, h.close(), He = null, u();
            break;
          case "error":
            v = !0, h.close(), He = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), He = null, v || n(new Error("Connection lost"));
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
      if (he.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const d = {
        id: ds(),
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
      he.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Mt() {
  function t(b) {
    for (const P of b) {
      if (he.items.some(
        (N) => N.url === P.url && N.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(N.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const z = {
        id: ds(),
        workflow: P.workflow,
        filename: P.filename,
        url: P.url,
        targetPath: P.targetPath,
        size: P.size || 0,
        type: P.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      he.items.push(z);
    }
    he.status === "idle" && ft();
  }
  async function u(b) {
    const P = Bt(b);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        He && (He.close(), He = null), P.status = "failed", P.error = "Cancelled by user", he.status = "idle", ft();
      } else if (P.status === "queued") {
        const F = he.items.findIndex((z) => z.id === b);
        F >= 0 && he.items.splice(F, 1);
      }
    }
  }
  function n(b) {
    const P = Bt(b);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, he.status === "idle" && ft());
  }
  function d(b) {
    const P = Bt(b);
    !P || P.status !== "paused" || (P.status = "queued", he.status === "idle" && ft());
  }
  function h() {
    const b = he.items.filter((P) => P.status === "paused");
    for (const P of b)
      P.status = "queued";
    he.status === "idle" && ft();
  }
  function g(b) {
    const P = he.items.findIndex((F) => F.id === b);
    P >= 0 && ["completed", "failed", "paused"].includes(he.items[P].status) && he.items.splice(P, 1);
  }
  function f() {
    he.items = he.items.filter((b) => b.status !== "completed");
  }
  function v() {
    he.items = he.items.filter((b) => b.status !== "failed");
  }
  const l = B(
    () => he.items.find((b) => b.status === "downloading")
  ), m = B(
    () => he.items.filter((b) => b.status === "queued")
  ), w = B(
    () => he.items.filter((b) => b.status === "completed")
  ), i = B(
    () => he.items.filter((b) => b.status === "failed")
  ), I = B(
    () => he.items.filter((b) => b.status === "paused")
  ), $ = B(() => he.items.length > 0), x = B(
    () => he.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), k = B(
    () => he.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Is(he),
    // Computed
    currentDownload: l,
    queuedItems: m,
    completedItems: w,
    failedItems: i,
    pausedItems: I,
    hasItems: $,
    activeCount: x,
    hasPaused: k,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: d,
    resumeAllPaused: h,
    removeItem: g,
    clearCompleted: f,
    clearFailed: v,
    loadPendingDownloads: kl
  };
}
function bl() {
  const t = _(null), u = _(null), n = _([]), d = _([]), h = _(!1), g = _(null);
  async function f(F, z) {
    var G;
    if (!((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const N = await window.app.api.fetchApi(F, z);
    if (!N.ok) {
      const O = await N.json().catch(() => ({})), D = O.error || O.message || `Request failed: ${N.status}`;
      throw new Error(D);
    }
    return N.json();
  }
  async function v(F) {
    h.value = !0, g.value = null;
    try {
      let z;
      return bt() || (z = await f(
        `/v2/comfygit/workflow/${F}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = z, z;
    } catch (z) {
      const N = z instanceof Error ? z.message : "Unknown error occurred";
      throw g.value = N, z;
    } finally {
      h.value = !1;
    }
  }
  async function l(F, z, N, G) {
    h.value = !0, g.value = null;
    try {
      let O;
      if (!bt()) {
        const D = Object.fromEntries(z), U = Object.fromEntries(N), T = G ? Array.from(G) : [];
        O = await f(
          `/v2/comfygit/workflow/${F}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: D,
              model_choices: U,
              skipped_packages: T
            })
          }
        );
      }
      return u.value = O, O;
    } catch (O) {
      const D = O instanceof Error ? O.message : "Unknown error occurred";
      throw g.value = D, O;
    } finally {
      h.value = !1;
    }
  }
  async function m(F, z = 10) {
    h.value = !0, g.value = null;
    try {
      let N;
      return bt() || (N = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: z })
        }
      )), n.value = N.results, N.results;
    } catch (N) {
      const G = N instanceof Error ? N.message : "Unknown error occurred";
      throw g.value = G, N;
    } finally {
      h.value = !1;
    }
  }
  async function w(F, z = 10) {
    h.value = !0, g.value = null;
    try {
      let N;
      return bt() || (N = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: z })
        }
      )), d.value = N.results, N.results;
    } catch (N) {
      const G = N instanceof Error ? N.message : "Unknown error occurred";
      throw g.value = G, N;
    } finally {
      h.value = !1;
    }
  }
  const i = os({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    i.phase = "idle", i.currentFile = void 0, i.currentFileIndex = void 0, i.totalFiles = void 0, i.bytesDownloaded = void 0, i.bytesTotal = void 0, i.completedFiles = [], i.nodesToInstall = [], i.nodesInstalled = [], i.installError = void 0, i.needsRestart = void 0, i.error = void 0, i.nodeInstallProgress = void 0;
  }
  async function $(F) {
    i.phase = "installing", i.nodesInstalled = [], i.installError = void 0, i.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return bt(), await x(F);
    } catch (z) {
      const N = z instanceof Error ? z.message : "Failed to install nodes";
      throw i.installError = N, z;
    }
  }
  async function x(F) {
    var N;
    const z = await f(
      `/v2/comfygit/workflow/${F}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: i.nodesToInstall
        })
      }
    );
    if (i.nodeInstallProgress) {
      i.nodeInstallProgress.totalNodes = i.nodesToInstall.length;
      const G = new Map(((N = z.failed) == null ? void 0 : N.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < i.nodesToInstall.length; O++) {
        const D = i.nodesToInstall[O], U = G.get(D);
        i.nodeInstallProgress.completedNodes.push({
          node_id: D,
          success: !U,
          error: U
        });
      }
    }
    return i.nodesInstalled = z.nodes_installed, i.needsRestart = z.nodes_installed.length > 0, z.failed && z.failed.length > 0 && (i.installError = `${z.failed.length} package(s) failed to install`), z;
  }
  async function k(F, z, N) {
    I(), i.phase = "resolving", g.value = null;
    const G = Object.fromEntries(z), O = Object.fromEntries(N);
    try {
      const D = await fetch(`/v2/comfygit/workflow/${F}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: G,
          model_choices: O
        })
      });
      if (!D.ok)
        throw new Error(`Request failed: ${D.status}`);
      if (!D.body)
        throw new Error("No response body");
      const U = D.body.getReader(), T = new TextDecoder();
      let E = "";
      for (; ; ) {
        const { done: j, value: ne } = await U.read();
        if (j) break;
        E += T.decode(ne, { stream: !0 });
        const we = E.split(`

`);
        E = we.pop() || "";
        for (const re of we) {
          if (!re.trim()) continue;
          const Q = re.split(`
`);
          let X = "", L = "";
          for (const C of Q)
            C.startsWith("event: ") ? X = C.slice(7) : C.startsWith("data: ") && (L = C.slice(6));
          if (L)
            try {
              const C = JSON.parse(L);
              b(X, C);
            } catch (C) {
              console.warn("Failed to parse SSE event:", C);
            }
        }
      }
    } catch (D) {
      const U = D instanceof Error ? D.message : "Unknown error occurred";
      throw g.value = U, i.error = U, i.phase = "error", D;
    }
  }
  function b(F, z) {
    switch (F) {
      case "batch_start":
        i.phase = "downloading", i.totalFiles = z.total;
        break;
      case "file_start":
        i.currentFile = z.filename, i.currentFileIndex = z.index, i.bytesDownloaded = 0, i.bytesTotal = void 0;
        break;
      case "file_progress":
        i.bytesDownloaded = z.downloaded, i.bytesTotal = z.total;
        break;
      case "file_complete":
        i.completedFiles.push({
          filename: z.filename,
          success: z.success,
          error: z.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        i.nodesToInstall = z.nodes_to_install || [], z.download_results && (i.completedFiles = z.download_results), i.phase = "complete";
        break;
      case "error":
        i.error = z.message, i.phase = "error", g.value = z.message;
        break;
    }
  }
  function P(F, z) {
    const { addToQueue: N } = Mt(), G = z.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: F,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return G.length > 0 && N(G), G.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: d,
    isLoading: h,
    error: g,
    progress: i,
    // Methods
    analyzeWorkflow: v,
    applyResolution: l,
    applyResolutionWithProgress: k,
    installNodes: $,
    searchNodes: m,
    searchModels: w,
    resetProgress: I,
    queueModelDownloads: P
  };
}
const _l = { class: "resolution-stepper" }, $l = { class: "stepper-header" }, Cl = ["onClick"], xl = {
  key: 0,
  class: "step-icon"
}, Sl = {
  key: 1,
  class: "step-number"
}, Il = { class: "step-label" }, El = {
  key: 0,
  class: "step-connector"
}, Ml = { class: "stepper-content" }, Tl = /* @__PURE__ */ J({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, d = u;
    function h(m) {
      var w;
      if ((w = n.stepStats) != null && w[m]) {
        const i = n.stepStats[m];
        return i.total > 0 && i.resolved === i.total;
      }
      return n.completedSteps.includes(m);
    }
    function g(m) {
      var w;
      if ((w = n.stepStats) != null && w[m]) {
        const i = n.stepStats[m];
        return i.resolved > 0 && i.resolved < i.total;
      }
      return !1;
    }
    function f(m) {
      return h(m) ? "state-complete" : g(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function l(m) {
      d("step-change", m);
    }
    return (m, w) => (s(), o("div", _l, [
      e("div", $l, [
        (s(!0), o(V, null, Z(t.steps, (i, I) => (s(), o("div", {
          key: i.id,
          class: se(["step", {
            active: t.currentStep === i.id,
            completed: h(i.id),
            "in-progress": g(i.id),
            disabled: v(i.id)
          }]),
          onClick: ($) => l(i.id)
        }, [
          e("div", {
            class: se(["step-indicator", f(i.id)])
          }, [
            h(i.id) ? (s(), o("span", xl, "✓")) : (s(), o("span", Sl, a(I + 1), 1))
          ], 2),
          e("div", Il, a(i.label), 1),
          I < t.steps.length - 1 ? (s(), o("div", El)) : c("", !0)
        ], 10, Cl))), 128))
      ]),
      e("div", Ml, [
        ve(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), zl = /* @__PURE__ */ Y(Tl, [["__scopeId", "data-v-2a7b3af8"]]), Ll = /* @__PURE__ */ J({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = B(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), d = B(() => `confidence-${n.value}`), h = B(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, f) => (s(), o("span", {
      class: se(["confidence-badge", d.value, t.size])
    }, a(h.value), 3));
  }
}), qt = /* @__PURE__ */ Y(Ll, [["__scopeId", "data-v-17ec4b80"]]), Rl = { class: "node-info" }, Nl = { class: "node-info-text" }, Dl = { class: "item-body" }, Pl = {
  key: 0,
  class: "resolved-state"
}, Ol = {
  key: 1,
  class: "multiple-options"
}, Ul = { class: "options-list" }, Bl = ["onClick"], Fl = ["name", "value", "checked", "onChange"], Al = { class: "option-content" }, Vl = { class: "option-header" }, Wl = { class: "option-package-id" }, Gl = {
  key: 0,
  class: "option-title"
}, jl = { class: "option-meta" }, Hl = {
  key: 0,
  class: "installed-badge"
}, ql = { class: "action-buttons" }, Kl = {
  key: 2,
  class: "unresolved"
}, Jl = { class: "action-buttons" }, Yl = /* @__PURE__ */ J({
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
    const n = t, d = u, h = B(() => !!n.choice);
    B(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), B(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    });
    const g = B(() => {
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
    function f(v) {
      d("option-selected", v);
    }
    return (v, l) => (s(), o("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", Rl, [
        e("span", Nl, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: se(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Dl, [
        h.value ? (s(), o("div", Pl, [
          p(ce, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (m) => d("clear-choice"))
          }, {
            default: r(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ol, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ul, [
            (s(!0), o(V, null, Z(t.options, (m, w) => (s(), o("label", {
              key: m.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (i) => f(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (i) => f(w)
              }, null, 40, Fl),
              e("div", Al, [
                e("div", Vl, [
                  e("span", Wl, a(m.package_id), 1),
                  p(qt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (s(), o("div", Gl, a(m.title), 1)) : c("", !0),
                e("div", jl, [
                  m.is_installed ? (s(), o("span", Hl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Bl))), 128))
          ]),
          e("div", ql, [
            p(ce, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (m) => d("search"))
            }, {
              default: r(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (m) => d("manual-entry"))
            }, {
              default: r(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (m) => d("mark-optional"))
            }, {
              default: r(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Kl, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Jl, [
            p(ce, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (m) => d("search"))
            }, {
              default: r(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (m) => d("manual-entry"))
            }, {
              default: r(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (m) => d("mark-optional"))
            }, {
              default: r(() => [...l[15] || (l[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ql = /* @__PURE__ */ Y(Yl, [["__scopeId", "data-v-e02629e7"]]), Xl = { class: "item-navigator" }, Zl = { class: "nav-item-info" }, ei = ["title"], ti = { class: "nav-controls" }, si = { class: "nav-arrows" }, oi = ["disabled"], ni = ["disabled"], ai = { class: "nav-position" }, li = /* @__PURE__ */ J({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (d, h) => (s(), o("div", Xl, [
      e("div", Zl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, ei)
      ]),
      e("div", ti, [
        e("div", si, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, oi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, ni)
        ]),
        e("span", ai, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), cs = /* @__PURE__ */ Y(li, [["__scopeId", "data-v-74af7920"]]), ii = ["type", "value", "placeholder", "disabled"], ri = {
  key: 0,
  class: "base-input-error"
}, di = /* @__PURE__ */ J({
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
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          n[1] || (n[1] = ot((d) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ot((d) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ii),
      t.error ? (s(), o("span", ri, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(di, [["__scopeId", "data-v-9ba02cdc"]]), ci = { class: "node-resolution-step" }, ui = {
  key: 0,
  class: "auto-resolved-section"
}, mi = { class: "section-header" }, vi = { class: "stat-badge" }, fi = { class: "resolved-packages-list" }, gi = { class: "package-info" }, pi = { class: "package-id" }, hi = { class: "node-count" }, yi = { class: "package-actions" }, wi = {
  key: 0,
  class: "status-badge install"
}, ki = {
  key: 1,
  class: "status-badge skip"
}, bi = ["onClick"], _i = {
  key: 1,
  class: "section-divider"
}, $i = { class: "step-header" }, Ci = { class: "stat-badge" }, xi = {
  key: 1,
  class: "step-body"
}, Si = {
  key: 3,
  class: "empty-state"
}, Ii = { class: "node-search-modal" }, Ei = { class: "node-modal-body" }, Mi = {
  key: 0,
  class: "node-search-results"
}, Ti = ["onClick"], zi = { class: "node-result-header" }, Li = { class: "node-result-package-id" }, Ri = {
  key: 0,
  class: "node-result-description"
}, Ni = {
  key: 1,
  class: "node-no-results"
}, Di = {
  key: 2,
  class: "node-searching"
}, Pi = { class: "node-manual-entry-modal" }, Oi = { class: "node-modal-body" }, Ui = { class: "node-modal-actions" }, Bi = /* @__PURE__ */ J({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, d = u, h = _(0), g = _(!1), f = _(!1), v = _(""), l = _(""), m = _([]), w = _(!1), i = B(() => n.nodes[h.value]), I = B(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), $ = B(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function x(re) {
      return n.skippedPackages.has(re);
    }
    function k(re) {
      d("package-skip", re);
    }
    const b = B(() => {
      var Q;
      if (!i.value) return "not-found";
      const re = n.nodeChoices.get(i.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Q = i.value.options) != null && Q.length ? "ambiguous" : "not-found";
    }), P = B(() => {
      var Q;
      if (!i.value) return;
      const re = n.nodeChoices.get(i.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Q = i.value.options) != null && Q.length ? `${i.value.options.length} matches` : "Not Found";
    });
    function F(re) {
      re >= 0 && re < n.nodes.length && (h.value = re);
    }
    function z() {
      i.value && d("mark-optional", i.value.node_type);
    }
    function N() {
      i.value && d("skip", i.value.node_type);
    }
    function G(re) {
      i.value && d("option-selected", i.value.node_type, re);
    }
    function O() {
      i.value && d("clear-choice", i.value.node_type);
    }
    function D() {
      i.value && (v.value = i.value.node_type, g.value = !0);
    }
    function U() {
      l.value = "", f.value = !0;
    }
    function T() {
      g.value = !1, v.value = "", m.value = [];
    }
    function E() {
      f.value = !1, l.value = "";
    }
    function j() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function ne(re) {
      i.value && (d("manual-entry", i.value.node_type, re.package_id), T());
    }
    function we() {
      !i.value || !l.value.trim() || (d("manual-entry", i.value.node_type, l.value.trim()), E());
    }
    return (re, Q) => {
      var X, L;
      return s(), o("div", ci, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ui, [
          e("div", mi, [
            Q[4] || (Q[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vi, a($.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fi, [
            (s(!0), o(V, null, Z(t.autoResolvedPackages, (C) => (s(), o("div", {
              key: C.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gi, [
                e("code", pi, a(C.package_id), 1),
                e("span", hi, a(C.node_types_count) + " node type" + a(C.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yi, [
                x(C.package_id) ? (s(), o("span", ki, " SKIPPED ")) : (s(), o("span", wi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (te) => k(C.package_id)
                }, a(x(C.package_id) ? "Include" : "Skip"), 9, bi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", _i)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", $i, [
            Q[5] || (Q[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ci, a(I.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          i.value ? (s(), S(cs, {
            key: 0,
            "item-name": i.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: Q[0] || (Q[0] = (C) => F(h.value - 1)),
            onNext: Q[1] || (Q[1] = (C) => F(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          i.value ? (s(), o("div", xi, [
            p(Ql, {
              "node-type": i.value.node_type,
              "has-multiple-options": !!((X = i.value.options) != null && X.length),
              options: i.value.options,
              choice: (L = t.nodeChoices) == null ? void 0 : L.get(i.value.node_type),
              status: b.value,
              "status-label": P.value,
              onMarkOptional: z,
              onSkip: N,
              onManualEntry: U,
              onSearch: D,
              onOptionSelected: G,
              onClearChoice: O
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Si, [...Q[6] || (Q[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), S(Ie, { to: "body" }, [
          g.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ce(T, ["self"])
          }, [
            e("div", Ii, [
              e("div", { class: "node-modal-header" }, [
                Q[7] || (Q[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Ei, [
                p(Ve, {
                  modelValue: v.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (C) => v.value = C),
                  placeholder: "Search by node type, package name...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (s(), o("div", Mi, [
                  (s(!0), o(V, null, Z(m.value, (C) => (s(), o("div", {
                    key: C.package_id,
                    class: "node-search-result-item",
                    onClick: (te) => ne(C)
                  }, [
                    e("div", zi, [
                      e("code", Li, a(C.package_id), 1),
                      C.match_confidence ? (s(), S(qt, {
                        key: 0,
                        confidence: C.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    C.description ? (s(), o("div", Ri, a(C.description), 1)) : c("", !0)
                  ], 8, Ti))), 128))
                ])) : v.value && !w.value ? (s(), o("div", Ni, ' No packages found matching "' + a(v.value) + '" ', 1)) : c("", !0),
                w.value ? (s(), o("div", Di, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Ie, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ce(E, ["self"])
          }, [
            e("div", Pi, [
              e("div", { class: "node-modal-header" }, [
                Q[8] || (Q[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", Oi, [
                p(Ve, {
                  modelValue: l.value,
                  "onUpdate:modelValue": Q[3] || (Q[3] = (C) => l.value = C),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ui, [
                  p(ce, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: r(() => [...Q[9] || (Q[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(ce, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: we
                  }, {
                    default: r(() => [...Q[10] || (Q[10] = [
                      y(" Add Package ", -1)
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
}), Fi = /* @__PURE__ */ Y(Bi, [["__scopeId", "data-v-6474069a"]]), Ai = { class: "node-info" }, Vi = { class: "node-info-text" }, Wi = { class: "item-body" }, Gi = {
  key: 0,
  class: "resolved-state"
}, ji = {
  key: 1,
  class: "multiple-options"
}, Hi = { class: "options-list" }, qi = ["onClick"], Ki = ["name", "value", "checked", "onChange"], Ji = { class: "option-content" }, Yi = { class: "option-header" }, Qi = { class: "option-filename" }, Xi = { class: "option-meta" }, Zi = { class: "option-size" }, er = { class: "option-category" }, tr = { class: "option-path" }, sr = { class: "action-buttons" }, or = {
  key: 2,
  class: "unresolved"
}, nr = { class: "action-buttons" }, ar = /* @__PURE__ */ J({
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
    const n = t, d = u, h = B(() => !!n.choice);
    B(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), B(() => {
      var l, m;
      return ((m = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const g = B(() => {
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
    function f(l) {
      d("option-selected", l);
    }
    function v(l) {
      if (!l) return "Unknown";
      const m = l / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, m) => (s(), o("div", {
      class: se(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Ai, [
        e("span", Vi, [
          m[7] || (m[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: se(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Wi, [
        h.value ? (s(), o("div", Gi, [
          p(ce, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (w) => d("clear-choice"))
          }, {
            default: r(() => [...m[8] || (m[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ji, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Hi, [
            (s(!0), o(V, null, Z(t.options, (w, i) => (s(), o("label", {
              key: w.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === i }]),
              onClick: (I) => f(i)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: i,
                checked: t.selectedOptionIndex === i,
                onChange: (I) => f(i)
              }, null, 40, Ki),
              e("div", Ji, [
                e("div", Yi, [
                  e("span", Qi, a(w.model.filename), 1),
                  p(qt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Xi, [
                  e("span", Zi, a(v(w.model.size)), 1),
                  e("span", er, a(w.model.category), 1)
                ]),
                e("div", tr, a(w.model.relative_path), 1)
              ])
            ], 10, qi))), 128))
          ]),
          e("div", sr, [
            p(ce, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (w) => d("search"))
            }, {
              default: r(() => [...m[9] || (m[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (w) => d("download-url"))
            }, {
              default: r(() => [...m[10] || (m[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (w) => d("mark-optional"))
            }, {
              default: r(() => [...m[11] || (m[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", or, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", nr, [
            p(ce, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (w) => d("search"))
            }, {
              default: r(() => [...m[13] || (m[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (w) => d("download-url"))
            }, {
              default: r(() => [...m[14] || (m[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (w) => d("mark-optional"))
            }, {
              default: r(() => [...m[15] || (m[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), lr = /* @__PURE__ */ Y(ar, [["__scopeId", "data-v-8a82fefa"]]), ir = { class: "model-resolution-step" }, rr = { class: "step-header" }, dr = { class: "step-info" }, cr = { class: "step-title" }, ur = { class: "step-description" }, mr = { class: "stat-badge" }, vr = {
  key: 1,
  class: "step-body"
}, fr = {
  key: 2,
  class: "empty-state"
}, gr = { class: "model-search-modal" }, pr = { class: "model-modal-body" }, hr = {
  key: 0,
  class: "model-search-results"
}, yr = ["onClick"], wr = { class: "model-result-header" }, kr = { class: "model-result-filename" }, br = { class: "model-result-meta" }, _r = { class: "model-result-category" }, $r = { class: "model-result-size" }, Cr = {
  key: 0,
  class: "model-result-path"
}, xr = {
  key: 1,
  class: "model-no-results"
}, Sr = {
  key: 2,
  class: "model-searching"
}, Ir = { class: "model-download-url-modal" }, Er = { class: "model-modal-body" }, Mr = { class: "model-input-group" }, Tr = { class: "model-input-group" }, zr = { class: "model-modal-actions" }, Lr = /* @__PURE__ */ J({
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
    function d(L) {
      var C;
      return L && ((C = n[L]) == null ? void 0 : C[0]) || null;
    }
    const h = t, g = u, f = _(0), v = _(!1), l = _(!1), m = _(""), w = _(""), i = _(""), I = _([]), $ = _(!1), x = B(() => h.models[f.value]), k = B(() => h.models.some((L) => L.is_download_intent)), b = B(() => h.models.filter(
      (L) => h.modelChoices.has(L.filename) || L.is_download_intent
    ).length), P = B(() => {
      var C;
      if (!x.value) return "";
      const L = d((C = x.value.reference) == null ? void 0 : C.node_type);
      return L ? `${L}/${x.value.filename}` : "";
    }), F = B(() => {
      var C;
      if (!x.value) return "not-found";
      const L = h.modelChoices.get(x.value.filename);
      if (L)
        switch (L.action) {
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
      return x.value.is_download_intent ? "download" : (C = x.value.options) != null && C.length ? "ambiguous" : "not-found";
    }), z = B(() => {
      var C, te;
      if (!x.value) return;
      const L = h.modelChoices.get(x.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (C = L.selected_model) != null && C.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return x.value.is_download_intent ? "Pending Download" : (te = x.value.options) != null && te.length ? `${x.value.options.length} matches` : "Not Found";
    });
    function N(L) {
      L >= 0 && L < h.models.length && (f.value = L);
    }
    function G() {
      x.value && g("mark-optional", x.value.filename);
    }
    function O() {
      x.value && g("skip", x.value.filename);
    }
    function D(L) {
      x.value && g("option-selected", x.value.filename, L);
    }
    function U() {
      x.value && g("clear-choice", x.value.filename);
    }
    function T() {
      x.value && (m.value = x.value.filename, v.value = !0);
    }
    function E() {
      x.value && (w.value = x.value.download_source || "", i.value = x.value.target_path || P.value, l.value = !0);
    }
    function j() {
      v.value = !1, m.value = "", I.value = [];
    }
    function ne() {
      l.value = !1, w.value = "", i.value = "";
    }
    function we() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function re(L) {
      x.value && j();
    }
    function Q() {
      !x.value || !w.value.trim() || (g("download-url", x.value.filename, w.value.trim(), i.value.trim() || void 0), ne());
    }
    function X(L) {
      if (!L) return "Unknown";
      const C = L / (1024 * 1024 * 1024);
      return C >= 1 ? `${C.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, C) => {
      var te, ee, $e;
      return s(), o("div", ir, [
        e("div", rr, [
          e("div", dr, [
            e("h3", cr, a(k.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", ur, a(k.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", mr, a(b.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        x.value ? (s(), S(cs, {
          key: 0,
          "item-name": x.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: C[0] || (C[0] = (ye) => N(f.value - 1)),
          onNext: C[1] || (C[1] = (ye) => N(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        x.value ? (s(), o("div", vr, [
          p(lr, {
            filename: x.value.filename,
            "node-type": ((te = x.value.reference) == null ? void 0 : te.node_type) || "Unknown",
            "has-multiple-options": !!((ee = x.value.options) != null && ee.length),
            options: x.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(x.value.filename),
            status: F.value,
            "status-label": z.value,
            onMarkOptional: G,
            onSkip: O,
            onDownloadUrl: E,
            onSearch: T,
            onOptionSelected: D,
            onClearChoice: U
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", fr, [...C[5] || (C[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Ie, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ce(j, ["self"])
          }, [
            e("div", gr, [
              e("div", { class: "model-modal-header" }, [
                C[6] || (C[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: j
                }, "✕")
              ]),
              e("div", pr, [
                p(Ve, {
                  modelValue: m.value,
                  "onUpdate:modelValue": C[2] || (C[2] = (ye) => m.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: we
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (s(), o("div", hr, [
                  (s(!0), o(V, null, Z(I.value, (ye) => (s(), o("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (me) => re()
                  }, [
                    e("div", wr, [
                      e("code", kr, a(ye.filename), 1)
                    ]),
                    e("div", br, [
                      e("span", _r, a(ye.category), 1),
                      e("span", $r, a(X(ye.size)), 1)
                    ]),
                    ye.relative_path ? (s(), o("div", Cr, a(ye.relative_path), 1)) : c("", !0)
                  ], 8, yr))), 128))
                ])) : m.value && !$.value ? (s(), o("div", xr, ' No models found matching "' + a(m.value) + '" ', 1)) : c("", !0),
                $.value ? (s(), o("div", Sr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), S(Ie, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ce(ne, ["self"])
          }, [
            e("div", Ir, [
              e("div", { class: "model-modal-header" }, [
                C[7] || (C[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              e("div", Er, [
                e("div", Mr, [
                  C[8] || (C[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  p(Ve, {
                    modelValue: w.value,
                    "onUpdate:modelValue": C[3] || (C[3] = (ye) => w.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Tr, [
                  C[9] || (C[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  p(Ve, {
                    modelValue: i.value,
                    "onUpdate:modelValue": C[4] || (C[4] = (ye) => i.value = ye),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zr, [
                  p(ce, {
                    variant: "secondary",
                    onClick: ne
                  }, {
                    default: r(() => [...C[10] || (C[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  p(ce, {
                    variant: "primary",
                    disabled: !w.value.trim() || !i.value.trim(),
                    onClick: Q
                  }, {
                    default: r(() => [...C[11] || (C[11] = [
                      y(" Queue Download ", -1)
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
}), Rr = /* @__PURE__ */ Y(Lr, [["__scopeId", "data-v-c6acbada"]]), Nr = { class: "applying-step" }, Dr = {
  key: 0,
  class: "phase-content"
}, Pr = {
  key: 1,
  class: "phase-content"
}, Or = { class: "phase-description" }, Ur = { class: "overall-progress" }, Br = { class: "progress-bar" }, Fr = { class: "progress-label" }, Ar = { class: "install-list" }, Vr = { class: "install-icon" }, Wr = { key: 0 }, Gr = {
  key: 1,
  class: "spinner"
}, jr = { key: 2 }, Hr = { key: 3 }, qr = {
  key: 0,
  class: "install-error"
}, Kr = {
  key: 2,
  class: "phase-content"
}, Jr = { class: "phase-header" }, Yr = { class: "phase-title" }, Qr = { class: "completion-summary" }, Xr = {
  key: 0,
  class: "summary-item success"
}, Zr = { class: "summary-text" }, ed = {
  key: 1,
  class: "summary-item error"
}, td = { class: "summary-text" }, sd = {
  key: 2,
  class: "failed-list"
}, od = { class: "failed-node-id" }, nd = { class: "failed-error" }, ad = {
  key: 4,
  class: "summary-item success"
}, ld = {
  key: 5,
  class: "restart-prompt"
}, id = {
  key: 3,
  class: "phase-content error"
}, rd = { class: "error-message" }, dd = /* @__PURE__ */ J({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = B(() => {
      var m, w;
      const v = ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || u.progress.nodesToInstall.length;
      if (!v) return 0;
      const l = ((w = u.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(l / v * 100);
    }), d = B(() => {
      var v;
      return ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((l) => !l.success)) || [];
    }), h = B(() => d.value.length > 0);
    function g(v, l) {
      var w, i;
      const m = (w = u.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((I) => I.node_id === v);
      return m ? m.success ? "complete" : "failed" : ((i = u.progress.nodeInstallProgress) == null ? void 0 : i.currentIndex) === l ? "installing" : "pending";
    }
    function f(v) {
      var l, m;
      return (m = (l = u.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((w) => w.node_id === v)) == null ? void 0 : m.error;
    }
    return (v, l) => {
      var m, w, i, I;
      return s(), o("div", Nr, [
        t.progress.phase === "resolving" ? (s(), o("div", Dr, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Pr, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Or, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ur, [
            e("div", Br, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Fr, a(((i = t.progress.nodeInstallProgress) == null ? void 0 : i.completedNodes.length) ?? 0) + " / " + a(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Ar, [
            (s(!0), o(V, null, Z(t.progress.nodesToInstall, ($, x) => (s(), o("div", {
              key: $,
              class: se(["install-item", g($, x)])
            }, [
              e("span", Vr, [
                g($, x) === "pending" ? (s(), o("span", Wr, "○")) : g($, x) === "installing" ? (s(), o("span", Gr, "◌")) : g($, x) === "complete" ? (s(), o("span", jr, "✓")) : g($, x) === "failed" ? (s(), o("span", Hr, "✗")) : c("", !0)
              ]),
              e("code", null, a($), 1),
              f($) ? (s(), o("span", qr, a(f($)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Kr, [
          e("div", Jr, [
            e("span", {
              class: se(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", Yr, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Qr, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Xr, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Zr, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", ed, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", td, a(d.value.length) + " package" + a(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("div", sd, [
              (s(!0), o(V, null, Z(d.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", od, a($.node_id), 1),
                e("span", nd, a($.error), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(d.value.length) + ") ", 1)) : c("", !0),
            h.value ? c("", !0) : (s(), o("div", ad, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", ld, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = ($) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", id, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", rd, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), cd = /* @__PURE__ */ Y(dd, [["__scopeId", "data-v-5efaae58"]]), ud = {
  key: 0,
  class: "loading-state"
}, md = {
  key: 1,
  class: "wizard-content"
}, vd = {
  key: 0,
  class: "step-content"
}, fd = { class: "analysis-summary" }, gd = { class: "analysis-header" }, pd = { class: "summary-description" }, hd = { class: "stats-grid" }, yd = { class: "stat-card" }, wd = { class: "stat-items" }, kd = {
  key: 0,
  class: "stat-item success"
}, bd = { class: "stat-count" }, _d = {
  key: 1,
  class: "stat-item info"
}, $d = { class: "stat-count" }, Cd = {
  key: 2,
  class: "stat-item warning"
}, xd = { class: "stat-count" }, Sd = {
  key: 3,
  class: "stat-item error"
}, Id = { class: "stat-count" }, Ed = { class: "stat-card" }, Md = { class: "stat-items" }, Td = { class: "stat-item success" }, zd = { class: "stat-count" }, Ld = {
  key: 0,
  class: "stat-item info"
}, Rd = { class: "stat-count" }, Nd = {
  key: 1,
  class: "stat-item warning"
}, Dd = { class: "stat-count" }, Pd = {
  key: 2,
  class: "stat-item error"
}, Od = { class: "stat-count" }, Ud = {
  key: 0,
  class: "status-message warning"
}, Bd = { class: "status-text" }, Fd = {
  key: 1,
  class: "status-message info"
}, Ad = { class: "status-text" }, Vd = {
  key: 2,
  class: "status-message info"
}, Wd = { class: "status-text" }, Gd = {
  key: 3,
  class: "status-message success"
}, jd = {
  key: 3,
  class: "step-content"
}, Hd = { class: "review-summary" }, qd = { class: "review-stats" }, Kd = { class: "review-stat" }, Jd = { class: "stat-value" }, Yd = { class: "review-stat" }, Qd = { class: "stat-value" }, Xd = { class: "review-stat" }, Zd = { class: "stat-value" }, ec = { class: "review-stat" }, tc = { class: "stat-value" }, sc = {
  key: 0,
  class: "review-section"
}, oc = { class: "section-title" }, nc = { class: "review-items" }, ac = { class: "item-name" }, lc = { class: "item-choice" }, ic = {
  key: 0,
  class: "choice-badge install"
}, rc = {
  key: 1,
  class: "choice-badge skip"
}, dc = {
  key: 1,
  class: "review-section"
}, cc = { class: "section-title" }, uc = { class: "review-items" }, mc = { class: "item-name" }, vc = { class: "item-choice" }, fc = {
  key: 0,
  class: "choice-badge install"
}, gc = {
  key: 1,
  class: "choice-badge optional"
}, pc = {
  key: 2,
  class: "choice-badge skip"
}, hc = {
  key: 1,
  class: "choice-badge pending"
}, yc = {
  key: 2,
  class: "review-section"
}, wc = { class: "section-title" }, kc = { class: "review-items" }, bc = { class: "item-name" }, _c = { class: "item-choice" }, $c = {
  key: 0,
  class: "choice-badge install"
}, Cc = {
  key: 1,
  class: "choice-badge download"
}, xc = {
  key: 2,
  class: "choice-badge optional"
}, Sc = {
  key: 3,
  class: "choice-badge skip"
}, Ic = {
  key: 4,
  class: "choice-badge skip"
}, Ec = {
  key: 1,
  class: "choice-badge download"
}, Mc = {
  key: 2,
  class: "choice-badge pending"
}, Tc = {
  key: 3,
  class: "no-choices"
}, zc = /* @__PURE__ */ J({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, d = u, { analyzeWorkflow: h, applyResolution: g, installNodes: f, queueModelDownloads: v, progress: l, resetProgress: m } = bl(), { loadPendingDownloads: w } = Mt(), i = _(null), I = _(!1), $ = _(!1), x = _(null), k = _("analysis"), b = _([]), P = _(/* @__PURE__ */ new Map()), F = _(/* @__PURE__ */ new Map()), z = _(/* @__PURE__ */ new Set()), N = B(() => {
      const A = [
        { id: "analysis", label: "Analysis" }
      ];
      return (O.value || T.value) && A.push({ id: "nodes", label: "Nodes" }), (D.value || U.value) && A.push({ id: "models", label: "Models" }), A.push({ id: "review", label: "Review" }), k.value === "applying" && A.push({ id: "applying", label: "Applying" }), A;
    }), G = B(() => i.value ? i.value.stats.needs_user_input : !1), O = B(() => i.value ? i.value.nodes.unresolved.length > 0 || i.value.nodes.ambiguous.length > 0 : !1), D = B(() => i.value ? i.value.models.unresolved.length > 0 || i.value.models.ambiguous.length > 0 : !1), U = B(() => i.value ? i.value.stats.download_intents > 0 : !1), T = B(() => i.value ? i.value.stats.nodes_needing_installation > 0 : !1), E = B(() => i.value ? i.value.nodes.resolved.length : 0), j = B(() => {
      if (!i.value) return [];
      const A = i.value.nodes.resolved.filter((q) => !q.is_installed), R = /* @__PURE__ */ new Set();
      return A.filter((q) => R.has(q.package.package_id) ? !1 : (R.add(q.package.package_id), !0));
    }), ne = B(() => {
      if (!i.value) return [];
      const A = i.value.nodes.resolved.filter((q) => !q.is_installed), R = /* @__PURE__ */ new Map();
      for (const q of A) {
        const fe = R.get(q.package.package_id);
        fe ? fe.node_types_count++ : R.set(q.package.package_id, {
          package_id: q.package.package_id,
          title: q.package.title,
          node_types_count: 1
        });
      }
      return Array.from(R.values());
    }), we = B(() => j.value.filter((A) => !z.value.has(A.package.package_id))), re = B(() => i.value ? i.value.models.resolved.filter((A) => A.match_type === "download_intent").map((A) => ({
      filename: A.reference.widget_value,
      reference: A.reference,
      is_download_intent: !0,
      resolved_model: A.model,
      download_source: A.download_source,
      target_path: A.target_path
    })) : []), Q = B(() => {
      if (!i.value) return [];
      const A = i.value.nodes.unresolved.map((q) => ({
        node_type: q.reference.node_type,
        reason: q.reason,
        is_unresolved: !0,
        options: void 0
      })), R = i.value.nodes.ambiguous.map((q) => ({
        node_type: q.reference.node_type,
        has_multiple_options: !0,
        options: q.options.map((fe) => ({
          package_id: fe.package.package_id,
          title: fe.package.title,
          match_confidence: fe.match_confidence,
          match_type: fe.match_type,
          is_installed: fe.is_installed
        }))
      }));
      return [...A, ...R];
    }), X = B(() => {
      if (!i.value) return [];
      const A = i.value.models.unresolved.map((q) => ({
        filename: q.reference.widget_value,
        reference: q.reference,
        reason: q.reason,
        is_unresolved: !0,
        options: void 0
      })), R = i.value.models.ambiguous.map((q) => ({
        filename: q.reference.widget_value,
        reference: q.reference,
        has_multiple_options: !0,
        options: q.options.map((fe) => ({
          model: fe.model,
          match_confidence: fe.match_confidence,
          match_type: fe.match_type,
          has_download_source: fe.has_download_source
        }))
      }));
      return [...A, ...R];
    }), L = B(() => {
      const A = X.value, R = re.value.map((q) => ({
        filename: q.filename,
        reference: q.reference,
        is_download_intent: !0,
        resolved_model: q.resolved_model,
        download_source: q.download_source,
        target_path: q.target_path,
        options: void 0
      }));
      return [...A, ...R];
    }), C = B(() => {
      let A = we.value.length;
      for (const R of P.value.values())
        R.action === "install" && A++;
      for (const R of F.value.values())
        R.action === "select" && A++;
      return A;
    }), te = B(() => {
      let A = 0;
      for (const R of F.value.values())
        R.action === "download" && A++;
      return A;
    }), ee = B(() => {
      let A = 0;
      for (const R of P.value.values())
        R.action === "optional" && A++;
      for (const R of F.value.values())
        R.action === "optional" && A++;
      return A;
    }), $e = B(() => {
      let A = z.value.size;
      for (const R of P.value.values())
        R.action === "skip" && A++;
      for (const R of F.value.values())
        R.action === "skip" && A++;
      for (const R of Q.value)
        P.value.has(R.node_type) || A++;
      for (const R of X.value)
        F.value.has(R.filename) || A++;
      return A;
    }), ye = B(() => {
      const A = {};
      if (A.analysis = { resolved: 1, total: 1 }, O.value) {
        const R = Q.value.length, q = Q.value.filter(
          (fe) => P.value.has(fe.node_type)
        ).length;
        A.nodes = { resolved: q, total: R };
      }
      if (D.value || U.value) {
        const R = L.value.length, q = L.value.filter(
          (fe) => F.value.has(fe.filename) || fe.is_download_intent
        ).length;
        A.models = { resolved: q, total: R };
      }
      if (A.review = { resolved: 1, total: 1 }, k.value === "applying") {
        const R = l.totalFiles || 1, q = l.completedFiles.length;
        A.applying = { resolved: q, total: R };
      }
      return A;
    });
    function me(A) {
      k.value = A;
    }
    function Be() {
      const A = N.value.findIndex((R) => R.id === k.value);
      A > 0 && (k.value = N.value[A - 1].id);
    }
    function ke() {
      const A = N.value.findIndex((R) => R.id === k.value);
      A < N.value.length - 1 && (k.value = N.value[A + 1].id);
    }
    async function at() {
      I.value = !0, x.value = null;
      try {
        i.value = await h(n.workflowName);
      } catch (A) {
        x.value = A instanceof Error ? A.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function st() {
      b.value.includes("analysis") || b.value.push("analysis"), O.value || T.value ? k.value = "nodes" : D.value || U.value ? k.value = "models" : k.value = "review";
    }
    function Ke(A) {
      P.value.set(A, { action: "optional" });
    }
    function pe(A) {
      P.value.set(A, { action: "skip" });
    }
    function Ge(A, R) {
      var fe;
      const q = Q.value.find((ze) => ze.node_type === A);
      (fe = q == null ? void 0 : q.options) != null && fe[R] && P.value.set(A, {
        action: "install",
        package_id: q.options[R].package_id
      });
    }
    function Fe(A, R) {
      P.value.set(A, {
        action: "install",
        package_id: R
      });
    }
    function le(A) {
      P.value.delete(A);
    }
    function oe(A) {
      z.value.has(A) ? z.value.delete(A) : z.value.add(A);
    }
    function ie(A) {
      F.value.set(A, { action: "optional" });
    }
    function Te(A) {
      F.value.set(A, { action: "skip" });
    }
    function wt(A, R) {
      var fe;
      const q = X.value.find((ze) => ze.filename === A);
      (fe = q == null ? void 0 : q.options) != null && fe[R] && F.value.set(A, {
        action: "select",
        selected_model: q.options[R].model
      });
    }
    function lt(A, R, q) {
      F.value.set(A, {
        action: "download",
        url: R,
        target_path: q
      });
    }
    function Ee(A) {
      F.value.delete(A);
    }
    async function kt() {
      var A;
      $.value = !0, x.value = null, m(), l.phase = "resolving", k.value = "applying";
      try {
        const R = await g(n.workflowName, P.value, F.value, z.value);
        R.models_to_download && R.models_to_download.length > 0 && v(n.workflowName, R.models_to_download);
        const q = [
          ...R.nodes_to_install || [],
          ...we.value.map((ze) => ze.package.package_id)
        ];
        l.nodesToInstall = [...new Set(q)], l.nodesToInstall.length > 0 && await f(n.workflowName), l.phase = "complete", await w();
        const fe = l.installError || ((A = l.nodeInstallProgress) == null ? void 0 : A.completedNodes.some((ze) => !ze.success));
        !l.needsRestart && !fe && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (R) {
        x.value = R instanceof Error ? R.message : "Failed to apply resolution", l.error = x.value, l.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    function H() {
      d("refresh"), d("restart"), d("close");
    }
    async function ae() {
      var R;
      const A = ((R = l.nodeInstallProgress) == null ? void 0 : R.completedNodes.filter((q) => !q.success).map((q) => q.node_id)) || [];
      if (A.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: A.length
        }, l.nodesToInstall = A, l.nodesInstalled = [], l.installError = void 0;
        try {
          await f(n.workflowName), l.phase = "complete";
        } catch (q) {
          l.error = q instanceof Error ? q.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Se(at), (A, R) => (s(), S(nt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: R[1] || (R[1] = (q) => d("close"))
    }, {
      body: r(() => [
        I.value && !i.value ? (s(), o("div", ud, [...R[2] || (R[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : i.value ? (s(), o("div", md, [
          p(zl, {
            steps: N.value,
            "current-step": k.value,
            "completed-steps": b.value,
            "step-stats": ye.value,
            onStepChange: me
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          k.value === "analysis" ? (s(), o("div", vd, [
            e("div", fd, [
              e("div", gd, [
                R[3] || (R[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", pd, " Found " + a(i.value.stats.total_nodes) + " nodes and " + a(i.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", hd, [
                e("div", yd, [
                  R[12] || (R[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", wd, [
                    E.value > 0 ? (s(), o("div", kd, [
                      R[4] || (R[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", bd, a(E.value), 1),
                      R[5] || (R[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    i.value.stats.packages_needing_installation > 0 ? (s(), o("div", _d, [
                      R[6] || (R[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", $d, a(i.value.stats.packages_needing_installation), 1),
                      R[7] || (R[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    i.value.nodes.ambiguous.length > 0 ? (s(), o("div", Cd, [
                      R[8] || (R[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", xd, a(i.value.nodes.ambiguous.length), 1),
                      R[9] || (R[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    i.value.nodes.unresolved.length > 0 ? (s(), o("div", Sd, [
                      R[10] || (R[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Id, a(i.value.nodes.unresolved.length), 1),
                      R[11] || (R[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Ed, [
                  R[21] || (R[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Md, [
                    e("div", Td, [
                      R[13] || (R[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zd, a(i.value.models.resolved.length - i.value.stats.download_intents), 1),
                      R[14] || (R[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    i.value.stats.download_intents > 0 ? (s(), o("div", Ld, [
                      R[15] || (R[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Rd, a(i.value.stats.download_intents), 1),
                      R[16] || (R[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    i.value.models.ambiguous.length > 0 ? (s(), o("div", Nd, [
                      R[17] || (R[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Dd, a(i.value.models.ambiguous.length), 1),
                      R[18] || (R[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    i.value.models.unresolved.length > 0 ? (s(), o("div", Pd, [
                      R[19] || (R[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Od, a(i.value.models.unresolved.length), 1),
                      R[20] || (R[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              G.value ? (s(), o("div", Ud, [
                R[22] || (R[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Bd, a(Q.value.length + X.value.length) + " items need your input", 1)
              ])) : T.value ? (s(), o("div", Fd, [
                R[23] || (R[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Ad, a(i.value.stats.packages_needing_installation) + " package" + a(i.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(i.value.stats.nodes_needing_installation) + " node type" + a(i.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(U.value ? `, ${i.value.stats.download_intents} model${i.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : U.value ? (s(), o("div", Vd, [
                R[24] || (R[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Wd, a(i.value.stats.download_intents) + " model" + a(i.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (s(), o("div", Gd, [...R[25] || (R[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          k.value === "nodes" ? (s(), S(Fi, {
            key: 1,
            nodes: Q.value,
            "node-choices": P.value,
            "auto-resolved-packages": ne.value,
            "skipped-packages": z.value,
            onMarkOptional: Ke,
            onSkip: pe,
            onOptionSelected: Ge,
            onManualEntry: Fe,
            onClearChoice: le,
            onPackageSkip: oe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          k.value === "models" ? (s(), S(Rr, {
            key: 2,
            models: L.value,
            "model-choices": F.value,
            onMarkOptional: ie,
            onSkip: Te,
            onOptionSelected: wt,
            onDownloadUrl: lt,
            onClearChoice: Ee
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          k.value === "review" ? (s(), o("div", jd, [
            e("div", Hd, [
              R[30] || (R[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", qd, [
                e("div", Kd, [
                  e("span", Jd, a(C.value), 1),
                  R[26] || (R[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Yd, [
                  e("span", Qd, a(te.value), 1),
                  R[27] || (R[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Xd, [
                  e("span", Zd, a(ee.value), 1),
                  R[28] || (R[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", ec, [
                  e("span", tc, a($e.value), 1),
                  R[29] || (R[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ne.value.length > 0 ? (s(), o("div", sc, [
                e("h4", oc, "Node Packages (" + a(ne.value.length) + ")", 1),
                e("div", nc, [
                  (s(!0), o(V, null, Z(ne.value, (q) => (s(), o("div", {
                    key: q.package_id,
                    class: "review-item"
                  }, [
                    e("code", ac, a(q.package_id), 1),
                    e("div", lc, [
                      z.value.has(q.package_id) ? (s(), o("span", rc, "Skipped")) : (s(), o("span", ic, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              Q.value.length > 0 ? (s(), o("div", dc, [
                e("h4", cc, "Node Choices (" + a(Q.value.length) + ")", 1),
                e("div", uc, [
                  (s(!0), o(V, null, Z(Q.value, (q) => {
                    var fe, ze, it, Je;
                    return s(), o("div", {
                      key: q.node_type,
                      class: "review-item"
                    }, [
                      e("code", mc, a(q.node_type), 1),
                      e("div", vc, [
                        P.value.has(q.node_type) ? (s(), o(V, { key: 0 }, [
                          ((fe = P.value.get(q.node_type)) == null ? void 0 : fe.action) === "install" ? (s(), o("span", fc, a((ze = P.value.get(q.node_type)) == null ? void 0 : ze.package_id), 1)) : ((it = P.value.get(q.node_type)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", gc, " Optional ")) : ((Je = P.value.get(q.node_type)) == null ? void 0 : Je.action) === "skip" ? (s(), o("span", pc, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", hc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              L.value.length > 0 ? (s(), o("div", yc, [
                e("h4", wc, "Models (" + a(L.value.length) + ")", 1),
                e("div", kc, [
                  (s(!0), o(V, null, Z(L.value, (q) => {
                    var fe, ze, it, Je, Tt, rt, dt;
                    return s(), o("div", {
                      key: q.filename,
                      class: "review-item"
                    }, [
                      e("code", bc, a(q.filename), 1),
                      e("div", _c, [
                        F.value.has(q.filename) ? (s(), o(V, { key: 0 }, [
                          ((fe = F.value.get(q.filename)) == null ? void 0 : fe.action) === "select" ? (s(), o("span", $c, a((it = (ze = F.value.get(q.filename)) == null ? void 0 : ze.selected_model) == null ? void 0 : it.filename), 1)) : ((Je = F.value.get(q.filename)) == null ? void 0 : Je.action) === "download" ? (s(), o("span", Cc, " Download ")) : ((Tt = F.value.get(q.filename)) == null ? void 0 : Tt.action) === "optional" ? (s(), o("span", xc, " Optional ")) : ((rt = F.value.get(q.filename)) == null ? void 0 : rt.action) === "skip" ? (s(), o("span", Sc, " Skip ")) : ((dt = F.value.get(q.filename)) == null ? void 0 : dt.action) === "cancel_download" ? (s(), o("span", Ic, " Cancel Download ")) : c("", !0)
                        ], 64)) : q.is_download_intent ? (s(), o("span", Ec, " Pending Download ")) : (s(), o("span", Mc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              j.value.length === 0 && Q.value.length === 0 && L.value.length === 0 ? (s(), o("div", Tc, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          k.value === "applying" ? (s(), S(cd, {
            key: 4,
            progress: ge(l),
            onRestart: H,
            onRetryFailed: ae
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: r(() => [
        k.value !== "analysis" && k.value !== "applying" ? (s(), S(ce, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: Be
        }, {
          default: r(() => [...R[31] || (R[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        R[35] || (R[35] = e("div", { class: "footer-spacer" }, null, -1)),
        k.value !== "applying" || ge(l).phase === "complete" || ge(l).phase === "error" ? (s(), S(ce, {
          key: 1,
          variant: "secondary",
          onClick: R[0] || (R[0] = (q) => d("close"))
        }, {
          default: r(() => [
            y(a(ge(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        k.value === "analysis" ? (s(), S(ce, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: st
        }, {
          default: r(() => [...R[32] || (R[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        k.value === "nodes" ? (s(), S(ce, {
          key: 3,
          variant: "primary",
          onClick: ke
        }, {
          default: r(() => [
            y(a(D.value || U.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        k.value === "models" ? (s(), S(ce, {
          key: 4,
          variant: "primary",
          onClick: ke
        }, {
          default: r(() => [...R[33] || (R[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        k.value === "review" ? (s(), S(ce, {
          key: 5,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: kt
        }, {
          default: r(() => [...R[34] || (R[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Lc = /* @__PURE__ */ Y(zc, [["__scopeId", "data-v-0d3f93e6"]]), Rc = { class: "search-input-wrapper" }, Nc = ["value", "placeholder"], Dc = /* @__PURE__ */ J({
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
    const n = t, d = u, h = _(null);
    let g;
    function f(l) {
      const m = l.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        d("update:modelValue", m);
      }, n.debounce)) : d("update:modelValue", m);
    }
    function v() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = h.value) == null || l.focus();
    }
    return Se(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, m) => (s(), o("div", Rc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: ot(v, ["escape"])
      }, null, 40, Nc),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Pc = /* @__PURE__ */ Y(Dc, [["__scopeId", "data-v-266f857a"]]), Oc = { class: "search-bar" }, Uc = /* @__PURE__ */ J({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (s(), o("div", Oc, [
      p(Pc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (d) => u.$emit("update:modelValue", d)),
        onClear: n[1] || (n[1] = (d) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ht = /* @__PURE__ */ Y(Uc, [["__scopeId", "data-v-3d51bbfd"]]), Bc = { class: "section-group" }, Fc = {
  key: 0,
  class: "section-content"
}, Ac = /* @__PURE__ */ J({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, d = u, h = _(n.initiallyExpanded);
    function g() {
      n.collapsible && (h.value = !h.value, d("toggle", h.value));
    }
    return (f, v) => (s(), o("section", Bc, [
      p(Ue, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: g
      }, {
        default: r(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", Fc, [
        ve(f.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), xe = /* @__PURE__ */ Y(Ac, [["__scopeId", "data-v-c48e33ed"]]), Vc = { class: "item-header" }, Wc = {
  key: 0,
  class: "item-icon"
}, Gc = { class: "item-info" }, jc = {
  key: 0,
  class: "item-title"
}, Hc = {
  key: 1,
  class: "item-subtitle"
}, qc = {
  key: 0,
  class: "item-details"
}, Kc = {
  key: 1,
  class: "item-actions"
}, Jc = /* @__PURE__ */ J({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, d = B(() => n.status ? `status-${n.status}` : "");
    return (h, g) => (s(), o("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: g[0] || (g[0] = (f) => t.clickable && h.$emit("click"))
    }, [
      e("div", Vc, [
        h.$slots.icon ? (s(), o("span", Wc, [
          ve(h.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Gc, [
          h.$slots.title ? (s(), o("div", jc, [
            ve(h.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          h.$slots.subtitle ? (s(), o("div", Hc, [
            ve(h.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", qc, [
        ve(h.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      h.$slots.actions ? (s(), o("div", Kc, [
        ve(h.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Le = /* @__PURE__ */ Y(Jc, [["__scopeId", "data-v-cc435e0e"]]), Yc = { class: "loading-state" }, Qc = { class: "loading-message" }, Xc = /* @__PURE__ */ J({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (s(), o("div", Yc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Qc, a(t.message), 1)
    ]));
  }
}), et = /* @__PURE__ */ Y(Xc, [["__scopeId", "data-v-ad8436c9"]]), Zc = { class: "error-state" }, eu = { class: "error-message" }, tu = /* @__PURE__ */ J({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (s(), o("div", Zc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", eu, a(t.message), 1),
      t.retry ? (s(), S(K, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (d) => u.$emit("retry"))
      }, {
        default: r(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), tt = /* @__PURE__ */ Y(tu, [["__scopeId", "data-v-5397be48"]]), su = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const d = n, { getWorkflows: h } = Me();
    rs();
    const g = _([]), f = _(!1), v = _(null), l = _(""), m = _(!0), w = _(!1), i = _(!1), I = _(!1), $ = _(null), x = B(
      () => g.value.filter((X) => X.status === "broken")
    ), k = B(
      () => g.value.filter((X) => X.status === "new")
    ), b = B(
      () => g.value.filter((X) => X.status === "modified")
    ), P = B(
      () => g.value.filter((X) => X.status === "synced")
    ), F = B(() => {
      if (!l.value.trim()) return g.value;
      const X = l.value.toLowerCase();
      return g.value.filter((L) => L.name.toLowerCase().includes(X));
    }), z = B(
      () => x.value.filter(
        (X) => !l.value.trim() || X.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), N = B(
      () => k.value.filter(
        (X) => !l.value.trim() || X.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), G = B(
      () => b.value.filter(
        (X) => !l.value.trim() || X.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), O = B(
      () => P.value.filter(
        (X) => !l.value.trim() || X.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), D = B(
      () => w.value ? O.value : O.value.slice(0, 5)
    );
    async function U(X = !1) {
      f.value = !0, v.value = null;
      try {
        g.value = await h(X);
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    u({ loadWorkflows: U });
    function T(X) {
      $.value = X, i.value = !0;
    }
    function E(X) {
      $.value = X, I.value = !0;
    }
    function j() {
      alert("Bulk resolution not yet implemented");
    }
    function ne() {
      d("refresh");
    }
    async function we() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(X) {
      const L = [];
      return X.missing_nodes > 0 && L.push(`${X.missing_nodes} missing node${X.missing_nodes > 1 ? "s" : ""}`), X.missing_models > 0 && L.push(`${X.missing_models} missing model${X.missing_models > 1 ? "s" : ""}`), X.pending_downloads && X.pending_downloads > 0 && L.push(`${X.pending_downloads} pending download${X.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function Q(X) {
      const L = X.sync_state === "new" ? "New" : X.sync_state === "modified" ? "Modified" : X.sync_state === "synced" ? "Synced" : X.sync_state;
      return X.has_path_sync_issues && X.models_needing_path_sync && X.models_needing_path_sync > 0 ? `${X.models_needing_path_sync} model path${X.models_needing_path_sync > 1 ? "s" : ""} need${X.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return Se(U), (X, L) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, { title: "WORKFLOWS" }, {
            actions: r(() => [
              x.value.length > 0 ? (s(), S(K, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: r(() => [...L[8] || (L[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          p(ht, {
            modelValue: l.value,
            "onUpdate:modelValue": L[0] || (L[0] = (C) => l.value = C),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          f.value ? (s(), S(et, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), S(tt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            z.value.length ? (s(), S(xe, {
              key: 0,
              title: "BROKEN",
              count: z.value.length
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(z.value, (C) => (s(), S(Le, {
                  key: C.name,
                  status: "broken"
                }, {
                  icon: r(() => [...L[9] || (L[9] = [
                    y("⚠", -1)
                  ])]),
                  title: r(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: r(() => [
                    y(a(re(C)), 1)
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => E(C.name)
                    }, {
                      default: r(() => [...L[10] || (L[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => T(C.name)
                    }, {
                      default: r(() => [...L[11] || (L[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            N.value.length ? (s(), S(xe, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(N.value, (C) => (s(), S(Le, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: r(() => [
                    y(a(C.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: r(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: r(() => [
                    y(a(Q(C)), 1)
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => T(C.name)
                    }, {
                      default: r(() => [...L[12] || (L[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            G.value.length ? (s(), S(xe, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(G.value, (C) => (s(), S(Le, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: r(() => [...L[13] || (L[13] = [
                    y("⚡", -1)
                  ])]),
                  title: r(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: r(() => [
                    y(a(Q(C)), 1)
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => T(C.name)
                    }, {
                      default: r(() => [...L[14] || (L[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            O.value.length ? (s(), S(xe, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: L[2] || (L[2] = (C) => m.value = C)
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(D.value, (C) => (s(), S(Le, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: r(() => [
                    y(a(C.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: r(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: r(() => [
                    y(a(Q(C)), 1)
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => T(C.name)
                    }, {
                      default: r(() => [...L[15] || (L[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && O.value.length > 5 ? (s(), S(K, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (C) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: r(() => [
                    y(" View all " + a(O.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            F.value.length ? c("", !0) : (s(), S(We, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      i.value && $.value ? (s(), S(yl, {
        key: 0,
        "workflow-name": $.value,
        onClose: L[3] || (L[3] = (C) => i.value = !1),
        onResolve: L[4] || (L[4] = (C) => E($.value)),
        onRefresh: L[5] || (L[5] = (C) => d("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && $.value ? (s(), S(Lc, {
        key: 1,
        "workflow-name": $.value,
        onClose: L[6] || (L[6] = (C) => I.value = !1),
        onInstall: ne,
        onRefresh: L[7] || (L[7] = (C) => d("refresh")),
        onRestart: we
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), ou = /* @__PURE__ */ Y(su, [["__scopeId", "data-v-b7939cb4"]]), nu = /* @__PURE__ */ J({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: se(["summary-bar", t.variant])
    }, [
      ve(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ Y(nu, [["__scopeId", "data-v-ccb7816e"]]), au = {
  key: 0,
  class: "model-details"
}, lu = { class: "detail-section" }, iu = { class: "detail-row" }, ru = { class: "detail-value mono" }, du = { class: "detail-row" }, cu = { class: "detail-value mono" }, uu = { class: "detail-row" }, mu = { class: "detail-value mono" }, vu = { class: "detail-row" }, fu = { class: "detail-value" }, gu = { class: "detail-row" }, pu = { class: "detail-value" }, hu = { class: "detail-row" }, yu = { class: "detail-value" }, wu = { class: "detail-section" }, ku = { class: "section-header" }, bu = {
  key: 0,
  class: "locations-list"
}, _u = { class: "location-path mono" }, $u = {
  key: 0,
  class: "location-modified"
}, Cu = ["onClick"], xu = {
  key: 1,
  class: "empty-state"
}, Su = { class: "detail-section" }, Iu = { class: "section-header" }, Eu = {
  key: 0,
  class: "sources-list"
}, Mu = { class: "source-type" }, Tu = ["href"], zu = ["disabled", "onClick"], Lu = {
  key: 1,
  class: "empty-state"
}, Ru = { class: "add-source-form" }, Nu = ["disabled"], Du = {
  key: 2,
  class: "source-error"
}, Pu = {
  key: 3,
  class: "source-success"
}, Ou = /* @__PURE__ */ J({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: d, addModelSource: h, removeModelSource: g, openFileLocation: f } = Me(), v = _(null), l = _(!0), m = _(null), w = _(""), i = _(!1), I = _(null), $ = _(null), x = _(null), k = _(null);
    let b = null;
    function P(U, T = "success", E = 2e3) {
      b && clearTimeout(b), k.value = { message: U, type: T }, b = setTimeout(() => {
        k.value = null;
      }, E);
    }
    function F(U) {
      if (!U) return "Unknown";
      const T = 1024 * 1024 * 1024, E = 1024 * 1024;
      return U >= T ? `${(U / T).toFixed(1)} GB` : U >= E ? `${(U / E).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function z(U) {
      navigator.clipboard.writeText(U), P("Copied to clipboard!");
    }
    async function N(U) {
      try {
        await f(U), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!w.value.trim() || !v.value)) {
        i.value = !0, $.value = null, x.value = null;
        try {
          await h(v.value.hash, w.value.trim()), x.value = "Source added successfully!", w.value = "", await D();
        } catch (U) {
          $.value = U instanceof Error ? U.message : "Failed to add source";
        } finally {
          i.value = !1;
        }
      }
    }
    async function O(U) {
      if (v.value) {
        I.value = U, $.value = null, x.value = null;
        try {
          await g(v.value.hash, U), P("Source removed"), await D();
        } catch (T) {
          $.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function D() {
      l.value = !0, m.value = null;
      try {
        v.value = await d(n.identifier);
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Se(D), (U, T) => {
      var E;
      return s(), o(V, null, [
        p(nt, {
          title: `Model Details: ${((E = v.value) == null ? void 0 : E.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: m.value,
          onClose: T[5] || (T[5] = (j) => U.$emit("close"))
        }, {
          body: r(() => {
            var j, ne, we, re;
            return [
              v.value ? (s(), o("div", au, [
                e("section", lu, [
                  e("div", iu, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ru, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Q) => z(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", du, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", cu, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Q) => z(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", uu, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", mu, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Q) => z(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", vu, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", fu, a(F(v.value.size)), 1)
                  ]),
                  e("div", gu, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", pu, a(v.value.category), 1)
                  ]),
                  e("div", hu, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", yu, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", wu, [
                  e("h4", ku, "Locations (" + a(((j = v.value.locations) == null ? void 0 : j.length) || 0) + ")", 1),
                  (ne = v.value.locations) != null && ne.length ? (s(), o("div", bu, [
                    (s(!0), o(V, null, Z(v.value.locations, (Q, X) => (s(), o("div", {
                      key: X,
                      class: "location-item"
                    }, [
                      e("span", _u, a(Q.path), 1),
                      Q.modified ? (s(), o("span", $u, "Modified: " + a(Q.modified), 1)) : c("", !0),
                      Q.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => N(Q.path)
                      }, " Open File Location ", 8, Cu)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", xu, "No locations found"))
                ]),
                e("section", Su, [
                  e("h4", Iu, "Download Sources (" + a(((we = v.value.sources) == null ? void 0 : we.length) || 0) + ")", 1),
                  (re = v.value.sources) != null && re.length ? (s(), o("div", Eu, [
                    (s(!0), o(V, null, Z(v.value.sources, (Q, X) => (s(), o("div", {
                      key: X,
                      class: "source-item"
                    }, [
                      e("span", Mu, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, Tu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === Q.url,
                        onClick: (L) => O(Q.url)
                      }, a(I.value === Q.url ? "..." : "×"), 9, zu)
                    ]))), 128))
                  ])) : (s(), o("div", Lu, " No download sources configured ")),
                  e("div", Ru, [
                    qe(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Q) => w.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ns, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || i.value,
                      onClick: G
                    }, a(i.value ? "Adding..." : "Add Source"), 9, Nu)
                  ]),
                  $.value ? (s(), o("p", Du, a($.value), 1)) : c("", !0),
                  x.value ? (s(), o("p", Pu, a(x.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: r(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (j) => U.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Ie, { to: "body" }, [
          k.value ? (s(), o("div", {
            key: 0,
            class: se(["toast", k.value.type])
          }, a(k.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), us = /* @__PURE__ */ Y(Ou, [["__scopeId", "data-v-f15cbb56"]]), Uu = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: d, getStatus: h } = Me(), g = _([]), f = _([]), v = _("production"), l = _(!1), m = _(null), w = _(""), i = _(!1), I = _(null);
    function $() {
      i.value = !1, n("navigate", "model-index");
    }
    const x = B(
      () => g.value.reduce((D, U) => D + (U.size || 0), 0)
    ), k = B(() => {
      if (!w.value.trim()) return g.value;
      const D = w.value.toLowerCase();
      return g.value.filter((U) => U.filename.toLowerCase().includes(D));
    }), b = B(() => {
      if (!w.value.trim()) return f.value;
      const D = w.value.toLowerCase();
      return f.value.filter((U) => U.filename.toLowerCase().includes(D));
    }), P = B(() => {
      const D = {};
      for (const T of k.value) {
        const E = T.type || "other";
        D[E] || (D[E] = []), D[E].push(T);
      }
      const U = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([T], [E]) => {
        const j = U.indexOf(T), ne = U.indexOf(E);
        return j >= 0 && ne >= 0 ? j - ne : j >= 0 ? -1 : ne >= 0 ? 1 : T.localeCompare(E);
      }).map(([T, E]) => ({ type: T, models: E }));
    });
    function F(D) {
      if (!D) return "Unknown";
      const U = D / (1024 * 1024);
      return U >= 1024 ? `${(U / 1024).toFixed(1)} GB` : `${U.toFixed(0)} MB`;
    }
    function z(D) {
      I.value = D.hash || D.filename;
    }
    function N(D) {
      n("navigate", "model-index");
    }
    function G(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function O() {
      l.value = !0, m.value = null;
      try {
        const D = await d();
        g.value = D, f.value = [];
        const U = await h();
        v.value = U.environment || "production";
      } catch (D) {
        m.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Se(O), (D, U) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (T) => i.value = !0)
          })
        ]),
        search: r(() => [
          p(ht, {
            modelValue: w.value,
            "onUpdate:modelValue": U[1] || (U[1] = (T) => w.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          l.value ? (s(), S(et, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), S(tt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), S(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(F(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(V, null, Z(P.value, (T) => (s(), S(xe, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(T.models, (E) => (s(), S(Le, {
                  key: E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...U[4] || (U[4] = [
                    y("📦", -1)
                  ])]),
                  title: r(() => [
                    y(a(E.filename), 1)
                  ]),
                  subtitle: r(() => [
                    y(a(F(E.size)), 1)
                  ]),
                  details: r(() => [
                    p(be, {
                      label: "Used by:",
                      value: (E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    p(be, {
                      label: "Path:",
                      value: E.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => z(E)
                    }, {
                      default: r(() => [...U[5] || (U[5] = [
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
            b.value.length ? (s(), S(xe, {
              key: 1,
              title: "MISSING",
              count: b.value.length
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(b.value, (T) => (s(), S(Le, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: r(() => [...U[6] || (U[6] = [
                    y("⚠", -1)
                  ])]),
                  title: r(() => [
                    y(a(T.filename), 1)
                  ]),
                  subtitle: r(() => [...U[7] || (U[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: r(() => {
                    var E;
                    return [
                      p(be, {
                        label: "Required by:",
                        value: ((E = T.workflow_names) == null ? void 0 : E.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: r(() => [
                    p(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => G(T.filename)
                    }, {
                      default: r(() => [...U[8] || (U[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => N(T.filename)
                    }, {
                      default: r(() => [...U[9] || (U[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !k.value.length && !b.value.length ? (s(), S(We, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(Ze, {
        show: i.value,
        title: "About Environment Models",
        onClose: U[2] || (U[2] = (T) => i.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            U[10] || (U[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            U[11] || (U[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: r(() => [
          p(K, {
            variant: "primary",
            onClick: $
          }, {
            default: r(() => [...U[12] || (U[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (s(), S(us, {
        key: 0,
        identifier: I.value,
        onClose: U[3] || (U[3] = (T) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Bu = /* @__PURE__ */ Y(Uu, [["__scopeId", "data-v-cb4f12b3"]]), Fu = {
  key: 0,
  class: "indexing-progress"
}, Au = { class: "progress-info" }, Vu = { class: "progress-label" }, Wu = { class: "progress-count" }, Gu = { class: "progress-bar" }, ju = { class: "modal-content" }, Hu = { class: "modal-header" }, qu = { class: "modal-body" }, Ku = { class: "input-group" }, Ju = { class: "current-path" }, Yu = { class: "input-group" }, Qu = { class: "modal-footer" }, Xu = { class: "modal-content" }, Zu = { class: "modal-header" }, em = { class: "modal-body" }, tm = { class: "input-group" }, sm = { class: "input-group" }, om = { class: "modal-footer" }, nm = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: d,
      getModelsDirectory: h,
      setModelsDirectory: g
    } = Me(), { addToQueue: f } = Mt(), v = u, l = _([]), m = _(!1), w = _(!1), i = _(null), I = _(""), $ = _(!1), x = _(null), k = _(!1), b = _(null), P = _(""), F = _(!1), z = _(!1), N = _(""), G = _(""), O = _(null), D = B(
      () => l.value.reduce((L, C) => L + (C.size || 0), 0)
    ), U = B(() => {
      if (!I.value.trim()) return l.value;
      const L = I.value.toLowerCase();
      return l.value.filter((C) => {
        const te = C, ee = C.sha256 || te.sha256_hash || "";
        return C.filename.toLowerCase().includes(L) || ee.toLowerCase().includes(L);
      });
    }), T = B(() => {
      const L = {};
      for (const te of U.value) {
        const ee = te.type || "other";
        L[ee] || (L[ee] = []), L[ee].push(te);
      }
      const C = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([te], [ee]) => {
        const $e = C.indexOf(te), ye = C.indexOf(ee);
        return $e >= 0 && ye >= 0 ? $e - ye : $e >= 0 ? -1 : ye >= 0 ? 1 : te.localeCompare(ee);
      }).map(([te, ee]) => ({ type: te, models: ee }));
    });
    function E(L) {
      if (!L) return "Unknown";
      const C = 1024 * 1024 * 1024, te = 1024 * 1024;
      return L >= C ? `${(L / C).toFixed(1)} GB` : L >= te ? `${(L / te).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function j(L) {
      x.value = L.hash || L.filename;
    }
    async function ne() {
      w.value = !0, i.value = null;
      try {
        const L = await d();
        await Q(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        i.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function we() {
      if (P.value.trim()) {
        F.value = !0, i.value = null;
        try {
          const L = await g(P.value.trim());
          b.value = L.path, k.value = !1, P.value = "", await Q(), console.log(`Directory changed: ${L.models_indexed} models indexed`), v("refresh");
        } catch (L) {
          i.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          F.value = !1;
        }
      }
    }
    function re() {
      if (!N.value.trim() || !G.value.trim()) return;
      const L = G.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: L,
        url: N.value.trim(),
        targetPath: G.value.trim()
      }]), N.value = "", G.value = "", z.value = !1;
    }
    async function Q() {
      m.value = !0, i.value = null;
      try {
        l.value = await n();
      } catch (L) {
        i.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function X() {
      try {
        const L = await h();
        b.value = L.path;
      } catch {
      }
    }
    return Se(() => {
      Q(), X();
    }), (L, C) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[2] || (C[2] = (te) => $.value = !0)
          }, {
            actions: r(() => [
              p(K, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: ne
              }, {
                default: r(() => [
                  y(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              p(K, {
                variant: "primary",
                size: "sm",
                onClick: C[0] || (C[0] = (te) => k.value = !0)
              }, {
                default: r(() => [...C[15] || (C[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              p(K, {
                variant: "primary",
                size: "sm",
                onClick: C[1] || (C[1] = (te) => z.value = !0)
              }, {
                default: r(() => [...C[16] || (C[16] = [
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
        search: r(() => [
          O.value ? (s(), o("div", Fu, [
            e("div", Au, [
              e("span", Vu, a(O.value.message), 1),
              e("span", Wu, a(O.value.current) + "/" + a(O.value.total), 1)
            ]),
            e("div", Gu, [
              e("div", {
                class: "progress-fill",
                style: Xe({ width: `${O.value.current / O.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          p(ht, {
            modelValue: I.value,
            "onUpdate:modelValue": C[3] || (C[3] = (te) => I.value = te),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          m.value || O.value ? (s(), S(et, {
            key: 0,
            message: O.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : i.value ? (s(), S(tt, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            l.value.length ? (s(), S(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(E(D.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(V, null, Z(T.value, (te) => (s(), S(xe, {
              key: te.type,
              title: te.type.toUpperCase(),
              count: te.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(te.models, (ee) => (s(), S(Le, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...C[17] || (C[17] = [
                    y("📦", -1)
                  ])]),
                  title: r(() => [
                    y(a(ee.filename), 1)
                  ]),
                  subtitle: r(() => [
                    y(a(E(ee.size)), 1)
                  ]),
                  details: r(() => [
                    p(be, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => j(ee)
                    }, {
                      default: r(() => [...C[18] || (C[18] = [
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
            U.value.length ? c("", !0) : (s(), S(We, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p(Ze, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: C[4] || (C[4] = (te) => $.value = !1)
      }, {
        content: r(() => [...C[19] || (C[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      x.value ? (s(), S(us, {
        key: 0,
        identifier: x.value,
        onClose: C[5] || (C[5] = (te) => x.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), S(Ie, { to: "body" }, [
        k.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[9] || (C[9] = Ce((te) => k.value = !1, ["self"]))
        }, [
          e("div", ju, [
            e("div", Hu, [
              C[20] || (C[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[6] || (C[6] = (te) => k.value = !1)
              }, "✕")
            ]),
            e("div", qu, [
              e("div", Ku, [
                C[21] || (C[21] = e("label", null, "Current Directory", -1)),
                e("code", Ju, a(b.value || "Not set"), 1)
              ]),
              e("div", Yu, [
                C[22] || (C[22] = e("label", null, "New Directory Path", -1)),
                p(Ve, {
                  modelValue: P.value,
                  "onUpdate:modelValue": C[7] || (C[7] = (te) => P.value = te),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              C[23] || (C[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Qu, [
              p(ce, {
                variant: "secondary",
                onClick: C[8] || (C[8] = (te) => k.value = !1)
              }, {
                default: r(() => [...C[24] || (C[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(ce, {
                variant: "primary",
                disabled: !P.value.trim() || F.value,
                loading: F.value,
                onClick: we
              }, {
                default: r(() => [
                  y(a(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), S(Ie, { to: "body" }, [
        z.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[14] || (C[14] = Ce((te) => z.value = !1, ["self"]))
        }, [
          e("div", Xu, [
            e("div", Zu, [
              C[25] || (C[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[10] || (C[10] = (te) => z.value = !1)
              }, "✕")
            ]),
            e("div", em, [
              e("div", tm, [
                C[26] || (C[26] = e("label", null, "Download URL", -1)),
                p(Ve, {
                  modelValue: N.value,
                  "onUpdate:modelValue": C[11] || (C[11] = (te) => N.value = te),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", sm, [
                C[27] || (C[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                p(Ve, {
                  modelValue: G.value,
                  "onUpdate:modelValue": C[12] || (C[12] = (te) => G.value = te),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              C[28] || (C[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", om, [
              p(ce, {
                variant: "secondary",
                onClick: C[13] || (C[13] = (te) => z.value = !1)
              }, {
                default: r(() => [...C[29] || (C[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              p(ce, {
                variant: "primary",
                disabled: !N.value.trim() || !G.value.trim(),
                onClick: re
              }, {
                default: r(() => [...C[30] || (C[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), am = /* @__PURE__ */ Y(nm, [["__scopeId", "data-v-73b78d84"]]), lm = { class: "node-details" }, im = { class: "status-row" }, rm = {
  key: 0,
  class: "detail-row"
}, dm = { class: "value" }, cm = { class: "detail-row" }, um = { class: "value" }, mm = {
  key: 1,
  class: "detail-row"
}, vm = { class: "value mono" }, fm = {
  key: 2,
  class: "detail-row"
}, gm = ["href"], pm = {
  key: 3,
  class: "detail-row"
}, hm = { class: "value mono small" }, ym = { class: "detail-row" }, wm = {
  key: 0,
  class: "value"
}, km = {
  key: 1,
  class: "workflow-list"
}, bm = /* @__PURE__ */ J({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, d = u, h = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, l) => (s(), S(nt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (m) => d("close"))
    }, {
      body: r(() => [
        e("div", lm, [
          e("div", im, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", h.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", rm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", dm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", cm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", um, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", mm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", vm, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", fm, [
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
            ], 8, gm)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", pm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", hm, a(t.node.download_url), 1)
          ])) : c("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ym, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", wm, " Not used in any workflows ")) : (s(), o("div", km, [
              (s(!0), o(V, null, Z(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: r(() => [
        p(ce, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (m) => d("close"))
        }, {
          default: r(() => [...l[11] || (l[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _m = /* @__PURE__ */ Y(bm, [["__scopeId", "data-v-b342f626"]]), $m = { key: 0 }, Cm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, xm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Sm = /* @__PURE__ */ J({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: d, trackNodeAsDev: h, installNode: g, uninstallNode: f } = Me(), v = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = _(!1), m = _(null), w = _(""), i = _(!1), I = _(null), $ = B(() => {
      if (!w.value.trim()) return v.value.nodes;
      const T = w.value.toLowerCase();
      return v.value.nodes.filter(
        (E) => {
          var j, ne;
          return E.name.toLowerCase().includes(T) || ((j = E.description) == null ? void 0 : j.toLowerCase().includes(T)) || ((ne = E.repository) == null ? void 0 : ne.toLowerCase().includes(T));
        }
      );
    }), x = B(
      () => $.value.filter((T) => T.installed && T.tracked)
    ), k = B(
      () => $.value.filter((T) => !T.installed && T.tracked)
    ), b = B(
      () => $.value.filter((T) => T.installed && !T.tracked)
    );
    function P(T) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[T] || T;
    }
    function F(T) {
      return !T.used_in_workflows || T.used_in_workflows.length === 0 ? "Not used in any workflows" : T.used_in_workflows.length === 1 ? T.used_in_workflows[0] : `${T.used_in_workflows.length} workflows`;
    }
    function z(T) {
      I.value = T;
    }
    function N() {
      n("open-node-manager");
    }
    async function G(T) {
      if (confirm(`Track "${T}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const E = await h(T);
          E.status === "success" ? (alert(`Node "${T}" is now tracked as development!`), await U()) : alert(`Failed to track node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error tracking node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function O(T) {
      if (confirm(`Remove untracked node "${T}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const E = await f(T);
          E.status === "success" ? (alert(`Node "${T}" removed!`), await U()) : alert(`Failed to remove node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error removing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function D(T) {
      if (confirm(`Install node "${T}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const E = await g(T);
          E.status === "success" ? (alert(`Node "${T}" installed successfully!`), await U()) : alert(`Failed to install node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function U() {
      l.value = !0, m.value = null;
      try {
        v.value = await d();
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Se(U), (T, E) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (j) => i.value = !0)
          }, {
            actions: r(() => [
              p(K, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: r(() => [...E[5] || (E[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          p(ht, {
            modelValue: w.value,
            "onUpdate:modelValue": E[1] || (E[1] = (j) => w.value = j),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          l.value ? (s(), S(et, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (s(), S(tt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            v.value.total_count ? (s(), S(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                y(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (s(), o(V, { key: 0 }, [
                  y(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                v.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  y(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            b.value.length ? (s(), S(xe, {
              key: 1,
              title: "UNTRACKED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(b.value, (j) => (s(), S(Le, {
                  key: j.name,
                  status: "warning"
                }, {
                  icon: r(() => [...E[6] || (E[6] = [
                    y("?", -1)
                  ])]),
                  title: r(() => [
                    y(a(j.name), 1)
                  ]),
                  subtitle: r(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: r(() => [
                    p(be, {
                      label: "Used by:",
                      value: F(j)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => z(j)
                    }, {
                      default: r(() => [...E[8] || (E[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => G(j.name)
                    }, {
                      default: r(() => [...E[9] || (E[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(K, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ne) => O(j.name)
                    }, {
                      default: r(() => [...E[10] || (E[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            x.value.length ? (s(), S(xe, {
              key: 2,
              title: "INSTALLED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(x.value, (j) => (s(), S(Le, {
                  key: j.name,
                  status: "synced"
                }, {
                  icon: r(() => [
                    y(a(j.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: r(() => [
                    y(a(j.name), 1)
                  ]),
                  subtitle: r(() => [
                    j.version ? (s(), o("span", $m, a(j.source === "development" ? "" : "v") + a(j.version), 1)) : (s(), o("span", Cm, "version unknown")),
                    e("span", xm, " • " + a(P(j.source)), 1)
                  ]),
                  details: r(() => [
                    p(be, {
                      label: "Used by:",
                      value: F(j)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => z(j)
                    }, {
                      default: r(() => [...E[11] || (E[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: N
                    }, {
                      default: r(() => [...E[12] || (E[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            k.value.length ? (s(), S(xe, {
              key: 3,
              title: "MISSING",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(k.value, (j) => (s(), S(Le, {
                  key: j.name,
                  status: "missing"
                }, {
                  icon: r(() => [...E[13] || (E[13] = [
                    y("!", -1)
                  ])]),
                  title: r(() => [
                    y(a(j.name), 1)
                  ]),
                  subtitle: r(() => [...E[14] || (E[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: r(() => [
                    p(be, {
                      label: "Required by:",
                      value: F(j)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => z(j)
                    }, {
                      default: r(() => [...E[15] || (E[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    p(K, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => D(j.name)
                    }, {
                      default: r(() => [...E[16] || (E[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !x.value.length && !k.value.length && !b.value.length ? (s(), S(We, {
              key: 4,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      p(Ze, {
        show: i.value,
        title: "About Custom Nodes",
        onClose: E[3] || (E[3] = (j) => i.value = !1)
      }, {
        content: r(() => [...E[17] || (E[17] = [
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
        actions: r(() => [
          p(K, {
            variant: "primary",
            onClick: E[2] || (E[2] = (j) => i.value = !1)
          }, {
            default: r(() => [...E[18] || (E[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (s(), S(_m, {
        key: 0,
        node: I.value,
        onClose: E[4] || (E[4] = (j) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Im = /* @__PURE__ */ Y(Sm, [["__scopeId", "data-v-4ac1465a"]]), Em = { class: "remote-url-display" }, Mm = ["title"], Tm = ["title"], zm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Lm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Rm = /* @__PURE__ */ J({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = _(!1), d = B(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const g = u.url.slice(0, Math.floor(u.maxLength * 0.6)), f = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${g}...${f}`;
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
    return (g, f) => (s(), o("div", Em, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(d.value), 9, Mm),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Lm, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", zm, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Tm)
    ]));
  }
}), Xt = /* @__PURE__ */ Y(Rm, [["__scopeId", "data-v-7768a58d"]]), Nm = { class: "remote-title" }, Dm = {
  key: 0,
  class: "default-badge"
}, Pm = {
  key: 1,
  class: "sync-badge"
}, Om = {
  key: 0,
  class: "ahead"
}, Um = {
  key: 1,
  class: "behind"
}, Bm = {
  key: 0,
  class: "tracking-info"
}, Fm = /* @__PURE__ */ J({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const u = t, n = B(() => u.fetchingRemote === u.remote.name), d = B(() => u.remote.is_default), h = B(() => !!u.trackingBranch), g = B(() => u.syncStatus && u.syncStatus.behind > 0), f = B(() => u.syncStatus && u.syncStatus.ahead > 0);
    function v(l) {
      const m = new Date(l), i = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), I = Math.floor(i / 6e4);
      if (I < 1) return "Just now";
      if (I < 60) return `${I}m ago`;
      const $ = Math.floor(I / 60);
      if ($ < 24) return `${$}h ago`;
      const x = Math.floor($ / 24);
      return x < 7 ? `${x}d ago` : m.toLocaleDateString();
    }
    return (l, m) => (s(), S(Le, {
      status: d.value ? "synced" : void 0
    }, {
      icon: r(() => [
        y(a(d.value ? "🔗" : "🌐"), 1)
      ]),
      title: r(() => [
        e("div", Nm, [
          e("span", null, a(t.remote.name), 1),
          d.value ? (s(), o("span", Dm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Pm, [
            t.syncStatus.ahead > 0 ? (s(), o("span", Om, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", Um, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: r(() => [
        h.value ? (s(), o("span", Bm, " Tracking: " + a(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: r(() => {
        var w;
        return [
          p(be, { label: "Fetch:" }, {
            default: r(() => [
              p(Xt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(be, {
            key: 0,
            label: "Push:"
          }, {
            default: r(() => [
              p(Xt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (w = t.syncStatus) != null && w.last_fetch ? (s(), S(be, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: r(() => [
              e("span", null, a(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: r(() => [
        p(K, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: m[0] || (m[0] = (w) => l.$emit("fetch", t.remote.name))
        }, {
          default: r(() => [...m[5] || (m[5] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        p(K, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: m[1] || (m[1] = (w) => l.$emit("pull", t.remote.name))
        }, {
          default: r(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(K, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: m[2] || (m[2] = (w) => l.$emit("push", t.remote.name))
        }, {
          default: r(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        p(K, {
          variant: "secondary",
          size: "xs",
          onClick: m[3] || (m[3] = (w) => l.$emit("edit", t.remote.name))
        }, {
          default: r(() => [...m[6] || (m[6] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        d.value ? c("", !0) : (s(), S(K, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[4] || (m[4] = (w) => l.$emit("remove", t.remote.name))
        }, {
          default: r(() => [...m[7] || (m[7] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Am = /* @__PURE__ */ Y(Fm, [["__scopeId", "data-v-f9018fc6"]]), Vm = ["for"], Wm = {
  key: 0,
  class: "base-form-field-required"
}, Gm = { class: "base-form-field-input" }, jm = {
  key: 1,
  class: "base-form-field-error"
}, Hm = {
  key: 2,
  class: "base-form-field-hint"
}, qm = /* @__PURE__ */ J({
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
    const u = t, n = B(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (d, h) => (s(), o("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Wm, "*")) : c("", !0)
      ], 8, Vm)) : c("", !0),
      e("div", Gm, [
        ve(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", jm, a(t.error), 1)) : t.hint ? (s(), o("span", Hm, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Ft = /* @__PURE__ */ Y(qm, [["__scopeId", "data-v-9a1cf296"]]), Km = { class: "remote-form" }, Jm = { class: "form-header" }, Ym = { class: "form-body" }, Qm = {
  key: 0,
  class: "form-error"
}, Xm = { class: "form-actions" }, Zm = /* @__PURE__ */ J({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, d = u, h = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = _(!1), f = _(null);
    Rt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = B(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!v.value || g.value)) {
        f.value = null, g.value = !0;
        try {
          d("submit", h.value);
        } catch (m) {
          f.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (m, w) => (s(), o("div", Km, [
      e("div", Jm, [
        p(Ue, null, {
          default: r(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Ym, [
        p(Ft, {
          label: "Remote Name",
          required: ""
        }, {
          default: r(() => [
            p(Ve, {
              modelValue: h.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (i) => h.value.name = i),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        p(Ft, {
          label: "Fetch URL",
          required: ""
        }, {
          default: r(() => [
            p(Ve, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (i) => h.value.fetchUrl = i),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p(Ft, { label: "Push URL (optional)" }, {
          default: r(() => [
            p(Ve, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (i) => h.value.pushUrl = i),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (s(), o("div", Qm, a(f.value), 1)) : c("", !0)
      ]),
      e("div", Xm, [
        p(K, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: l
        }, {
          default: r(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        p(K, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (i) => m.$emit("cancel"))
        }, {
          default: r(() => [...w[4] || (w[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ev = /* @__PURE__ */ Y(Zm, [["__scopeId", "data-v-56021b18"]]), tv = { class: "modal-header" }, sv = { class: "modal-title" }, ov = { class: "modal-body" }, nv = {
  key: 0,
  class: "error-box"
}, av = {
  key: 0,
  class: "error-hint"
}, lv = {
  key: 1,
  class: "loading-state"
}, iv = { class: "commit-summary" }, rv = {
  key: 0,
  class: "changes-section"
}, dv = {
  key: 0,
  class: "change-group",
  open: ""
}, cv = { class: "change-count" }, uv = { class: "change-list" }, mv = {
  key: 1,
  class: "change-group"
}, vv = { class: "change-count" }, fv = { class: "change-list" }, gv = {
  key: 2,
  class: "change-group"
}, pv = { class: "change-count" }, hv = { class: "change-list" }, yv = {
  key: 1,
  class: "strategy-section"
}, wv = { class: "radio-group" }, kv = { class: "radio-option" }, bv = { class: "radio-option" }, _v = { class: "radio-option" }, $v = {
  key: 2,
  class: "up-to-date"
}, Cv = { class: "modal-actions" }, Zt = "comfygit.pullModelStrategy", xv = /* @__PURE__ */ J({
  __name: "PullModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pulling: { type: Boolean },
    error: {}
  },
  emits: ["close", "pull"],
  setup(t, { emit: u }) {
    const n = t, d = u, h = _(localStorage.getItem(Zt) || "skip");
    Rt(h, (w) => {
      localStorage.setItem(Zt, w);
    });
    const g = B(() => {
      var w;
      return ((w = n.error) == null ? void 0 : w.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = B(() => {
      if (!n.preview) return 0;
      const w = n.preview.changes.workflows;
      return w.added.length + w.modified.length + w.deleted.length;
    }), v = B(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = B(() => {
      var w;
      return f.value > 0 || v.value > 0 || (((w = n.preview) == null ? void 0 : w.changes.models.count) || 0) > 0;
    });
    function m(w) {
      d("pull", { modelStrategy: h.value, force: w });
    }
    return (w, i) => {
      var I, $;
      return s(), S(Ie, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: i[10] || (i[10] = (x) => w.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: i[9] || (i[9] = Ce(() => {
            }, ["stop"]))
          }, [
            e("div", tv, [
              e("h3", sv, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: i[0] || (i[0] = (x) => w.$emit("close"))
              }, "✕")
            ]),
            e("div", ov, [
              t.error ? (s(), o("div", nv, [
                i[12] || (i[12] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  i[11] || (i[11] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", av, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : c("", !0)
                ])
              ])) : t.loading ? (s(), o("div", lv, [...i[13] || (i[13] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (I = t.preview) != null && I.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
                i[14] || (i[14] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                i[15] || (i[15] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", iv, [
                  i[16] || (i[16] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (s(), o("div", rv, [
                  i[20] || (i[20] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", dv, [
                    e("summary", null, [
                      i[17] || (i[17] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", cv, a(f.value) + " changes", 1)
                    ]),
                    e("div", uv, [
                      (s(!0), o(V, null, Z(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(V, null, Z(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, " ~ " + a(x), 1))), 128)),
                      (s(!0), o(V, null, Z(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : c("", !0),
                  v.value > 0 ? (s(), o("details", mv, [
                    e("summary", null, [
                      i[18] || (i[18] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", vv, a(v.value) + " to install", 1)
                    ]),
                    e("div", fv, [
                      (s(!0), o(V, null, Z(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : c("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", gv, [
                    e("summary", null, [
                      i[19] || (i[19] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", pv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", hv, [
                      (s(!0), o(V, null, Z(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : c("", !0)
                ])) : c("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", yv, [
                  i[25] || (i[25] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", wv, [
                    e("label", kv, [
                      qe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": i[1] || (i[1] = (x) => h.value = x),
                        value: "all"
                      }, null, 512), [
                        [Ot, h.value]
                      ]),
                      i[21] || (i[21] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", bv, [
                      qe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": i[2] || (i[2] = (x) => h.value = x),
                        value: "required"
                      }, null, 512), [
                        [Ot, h.value]
                      ]),
                      i[22] || (i[22] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", _v, [
                      qe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": i[3] || (i[3] = (x) => h.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Ot, h.value]
                      ]),
                      i[23] || (i[23] = e("span", null, "Skip model downloads", -1)),
                      i[24] || (i[24] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  i[26] || (i[26] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : c("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", $v, [
                  i[27] || (i[27] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ]),
            e("div", Cv, [
              p(K, {
                variant: "secondary",
                onClick: i[4] || (i[4] = (x) => w.$emit("close"))
              }, {
                default: r(() => [...i[28] || (i[28] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                p(K, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: i[5] || (i[5] = (x) => m(!1))
                }, {
                  default: r(() => [...i[29] || (i[29] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                p(K, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: i[6] || (i[6] = (x) => m(!0))
                }, {
                  default: r(() => [...i[30] || (i[30] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : ($ = t.preview) != null && $.has_uncommitted_changes ? (s(), S(K, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: i[7] || (i[7] = (x) => m(!0))
              }, {
                default: r(() => [...i[31] || (i[31] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), S(K, {
                key: 2,
                variant: "primary",
                loading: t.pulling,
                onClick: i[8] || (i[8] = (x) => m(!1))
              }, {
                default: r(() => [...i[32] || (i[32] = [
                  y(" Pull Changes ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Sv = /* @__PURE__ */ Y(xv, [["__scopeId", "data-v-8b6ddbac"]]), Iv = { class: "modal-header" }, Ev = { class: "modal-title" }, Mv = { class: "modal-body" }, Tv = {
  key: 0,
  class: "loading-state"
}, zv = {
  key: 1,
  class: "warning-box"
}, Lv = {
  key: 0,
  class: "commits-section"
}, Rv = { class: "commit-list" }, Nv = { class: "commit-hash" }, Dv = { class: "commit-message" }, Pv = { class: "commit-date" }, Ov = { class: "force-option" }, Uv = { class: "checkbox-option" }, Bv = { class: "commit-summary" }, Fv = {
  key: 0,
  class: "commits-section"
}, Av = { class: "commit-list" }, Vv = { class: "commit-hash" }, Wv = { class: "commit-message" }, Gv = { class: "commit-date" }, jv = {
  key: 1,
  class: "up-to-date"
}, Hv = { class: "modal-actions" }, qv = /* @__PURE__ */ J({
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
    const n = u, d = _(!1);
    function h(g) {
      n("push", { force: g });
    }
    return (g, f) => {
      var v, l, m;
      return s(), S(Ie, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (w) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Ce(() => {
            }, ["stop"]))
          }, [
            e("div", Iv, [
              e("h3", Ev, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (w) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Mv, [
              t.loading ? (s(), o("div", Tv, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", zv, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Lv, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Rv, [
                    (s(!0), o(V, null, Z(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Nv, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Dv, a(w.message), 1),
                      e("span", Pv, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                e("div", Ov, [
                  e("label", Uv, [
                    qe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (w) => d.value = w)
                    }, null, 512), [
                      [as, d.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", Bv, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Fv, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Av, [
                    (s(!0), o(V, null, Z(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Vv, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Wv, a(w.message), 1),
                      e("span", Gv, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", jv, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : c("", !0)
            ]),
            e("div", Hv, [
              p(K, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (w) => g.$emit("close"))
              }, {
                default: r(() => [...f[17] || (f[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                p(K, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (w) => g.$emit("pull-first"))
                }, {
                  default: r(() => [...f[18] || (f[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                p(K, {
                  variant: "destructive",
                  disabled: !d.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (w) => h(!0))
                }, {
                  default: r(() => [...f[19] || (f[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), S(K, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (w) => h(!1))
              }, {
                default: r(() => [...f[20] || (f[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Kv = /* @__PURE__ */ Y(qv, [["__scopeId", "data-v-bc6ded53"]]), Jv = { key: 0 }, Yv = /* @__PURE__ */ J({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: d,
      updateRemoteUrl: h,
      fetchRemote: g,
      getRemoteSyncStatus: f,
      getPullPreview: v,
      pullFromRemote: l,
      getPushPreview: m,
      pushToRemote: w
    } = Me(), i = _([]), I = _(null), $ = _({}), x = _(!1), k = _(null), b = _(""), P = _(!1), F = _(null), z = _(!1), N = _("add"), G = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = B(() => {
      if (!b.value.trim()) return i.value;
      const le = b.value.toLowerCase();
      return i.value.filter(
        (oe) => oe.name.toLowerCase().includes(le) || oe.fetch_url.toLowerCase().includes(le) || oe.push_url.toLowerCase().includes(le)
      );
    });
    function D(le) {
      var oe;
      return ((oe = I.value) == null ? void 0 : oe.remote) === le;
    }
    async function U() {
      x.value = !0, k.value = null;
      try {
        const le = await u();
        i.value = le.remotes, I.value = le.current_branch_tracking || null, await Promise.all(
          le.remotes.map(async (oe) => {
            const ie = await f(oe.name);
            ie && ($.value[oe.name] = ie);
          })
        );
      } catch (le) {
        k.value = le instanceof Error ? le.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function T() {
      N.value = "add", G.value = { name: "", fetchUrl: "", pushUrl: "" }, z.value = !0;
    }
    function E(le) {
      const oe = i.value.find((ie) => ie.name === le);
      oe && (N.value = "edit", G.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, z.value = !0);
    }
    async function j(le) {
      try {
        N.value === "add" ? await n(le.name, le.fetchUrl) : await h(le.name, le.fetchUrl, le.pushUrl || void 0), z.value = !1, await U();
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function ne() {
      z.value = !1, G.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function we(le) {
      F.value = le;
      try {
        await g(le);
        const oe = await f(le);
        oe && ($.value[le] = oe);
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Fetch failed";
      } finally {
        F.value = null;
      }
    }
    async function re(le) {
      if (confirm(`Remove remote "${le}"?`))
        try {
          await d(le), await U();
        } catch (oe) {
          k.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function Q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const X = _(!1), L = _(!1), C = _(null), te = _(null), ee = _(!1), $e = _(!1), ye = _(!1), me = _(null), Be = _(null);
    async function ke(le) {
      me.value = le, X.value = !0, ee.value = !0, C.value = null, Be.value = null;
      try {
        C.value = await v(le);
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        ee.value = !1;
      }
    }
    async function at(le) {
      me.value = le, L.value = !0, ee.value = !0, te.value = null;
      try {
        te.value = await m(le);
      } catch (oe) {
        k.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        ee.value = !1;
      }
    }
    function st() {
      X.value = !1, C.value = null, Be.value = null, me.value = null;
    }
    function Ke() {
      L.value = !1, te.value = null, me.value = null;
    }
    async function pe(le) {
      if (me.value) {
        $e.value = !0, Be.value = null;
        try {
          await l(me.value, le), st(), await U();
        } catch (oe) {
          Be.value = oe instanceof Error ? oe.message : "Pull failed";
        } finally {
          $e.value = !1;
        }
      }
    }
    async function Ge(le) {
      if (me.value) {
        ye.value = !0;
        try {
          await w(me.value, le), Ke(), await U();
        } catch (oe) {
          k.value = oe instanceof Error ? oe.message : "Push failed";
        } finally {
          ye.value = !1;
        }
      }
    }
    function Fe() {
      const le = me.value;
      Ke(), le && ke(le);
    }
    return Se(U), (le, oe) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (ie) => P.value = !0)
          }, {
            actions: r(() => [
              z.value ? c("", !0) : (s(), S(K, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: r(() => [...oe[3] || (oe[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          z.value ? c("", !0) : (s(), S(ht, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ie) => b.value = ie),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: r(() => [
          x.value ? (s(), S(et, {
            key: 0,
            message: "Loading remotes..."
          })) : k.value ? (s(), S(tt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            z.value ? (s(), S(ev, {
              key: 0,
              mode: N.value,
              "remote-name": G.value.name,
              "fetch-url": G.value.fetchUrl,
              "push-url": G.value.pushUrl,
              onSubmit: j,
              onCancel: ne
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            i.value.length && !z.value ? (s(), S(yt, {
              key: 1,
              variant: "compact"
            }, {
              default: r(() => [
                y(" Total: " + a(i.value.length) + " remote" + a(i.value.length !== 1 ? "s" : "") + " ", 1),
                I.value ? (s(), o("span", Jv, " • Tracking: " + a(I.value.remote) + "/" + a(I.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !z.value ? (s(), S(xe, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z(O.value, (ie) => {
                  var Te;
                  return s(), S(Am, {
                    key: ie.name,
                    remote: ie,
                    "sync-status": $.value[ie.name],
                    "tracking-branch": D(ie.name) ? (Te = I.value) == null ? void 0 : Te.branch : void 0,
                    "fetching-remote": F.value,
                    onFetch: we,
                    onEdit: E,
                    onRemove: re,
                    onPull: ke,
                    onPush: at
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !O.value.length && !z.value ? (s(), S(We, {
              key: 3,
              icon: "🌐",
              message: b.value ? `No remotes match '${b.value}'` : "No remotes configured."
            }, {
              actions: r(() => [
                p(K, {
                  variant: "primary",
                  onClick: T
                }, {
                  default: r(() => [...oe[4] || (oe[4] = [
                    y(" Add Your First Remote ", -1)
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
      p(Ze, {
        show: P.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (ie) => P.value = !1)
      }, {
        content: r(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: r(() => [
          p(K, {
            variant: "link",
            onClick: Q
          }, {
            default: r(() => [...oe[6] || (oe[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p(Sv, {
        show: X.value,
        "remote-name": me.value || "",
        preview: C.value,
        loading: ee.value,
        pulling: $e.value,
        error: Be.value,
        onClose: st,
        onPull: pe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error"]),
      p(Kv, {
        show: L.value,
        "remote-name": me.value || "",
        preview: te.value,
        loading: ee.value,
        pushing: ye.value,
        onClose: Ke,
        onPush: Ge,
        onPullFirst: Fe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"])
    ], 64));
  }
}), Qv = /* @__PURE__ */ Y(Yv, [["__scopeId", "data-v-0d2561eb"]]), Xv = { class: "setting-info" }, Zv = { class: "setting-label" }, ef = {
  key: 0,
  class: "required-marker"
}, tf = {
  key: 0,
  class: "setting-description"
}, sf = { class: "setting-control" }, of = /* @__PURE__ */ J({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Xv, [
        e("div", Zv, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", ef, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", tf, a(t.description), 1)) : c("", !0)
      ]),
      e("div", sf, [
        ve(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Qe = /* @__PURE__ */ Y(of, [["__scopeId", "data-v-cb5d236c"]]), nf = { class: "toggle" }, af = ["checked", "disabled"], lf = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", nf, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, af),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), mt = /* @__PURE__ */ Y(lf, [["__scopeId", "data-v-71c0f550"]]), rf = { class: "settings-section" }, df = { class: "path-setting" }, cf = { class: "path-value" }, uf = { class: "path-setting" }, mf = { class: "path-value" }, vf = { class: "settings-section" }, ff = { class: "settings-section" }, gf = { class: "settings-section" }, pf = /* @__PURE__ */ J({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Me(), d = _(!1), h = _(null), g = _(null), f = _(null), v = _(null), l = _(""), m = _(""), w = _(!0), i = _(!0), I = _(!1), $ = B(() => v.value ? l.value !== (v.value.civitai_api_key || "") : !1);
    async function x() {
      d.value = !0, h.value = null;
      try {
        f.value = await u(), v.value = { ...f.value }, l.value = f.value.civitai_api_key || "", m.value = f.value.huggingface_token || "", w.value = f.value.auto_sync_models, i.value = f.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = F === "true";
      } catch (F) {
        h.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function k() {
      var F;
      g.value = null;
      try {
        const z = {};
        l.value !== (((F = v.value) == null ? void 0 : F.civitai_api_key) || "") && (z.civitai_api_key = l.value || null), await n(z), await x(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (z) {
        g.value = {
          type: "error",
          message: z instanceof Error ? z.message : "Failed to save settings"
        };
      }
    }
    function b() {
      v.value && (l.value = v.value.civitai_api_key || "", m.value = v.value.huggingface_token || "", w.value = v.value.auto_sync_models, i.value = v.value.confirm_destructive, g.value = null);
    }
    function P(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return Se(x), (F, z) => (s(), S(De, null, {
      header: r(() => [
        p(Pe, { title: "WORKSPACE SETTINGS" }, {
          actions: r(() => [
            p(K, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: k
            }, {
              default: r(() => [...z[5] || (z[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), S(K, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: r(() => [...z[6] || (z[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: r(() => [
        d.value ? (s(), S(et, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), S(tt, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: x
        }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
          p(xe, { title: "WORKSPACE PATHS" }, {
            default: r(() => {
              var N, G;
              return [
                e("div", rf, [
                  e("div", df, [
                    z[7] || (z[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    z[8] || (z[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", cf, a(((N = f.value) == null ? void 0 : N.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", uf, [
                    z[9] || (z[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    z[10] || (z[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", mf, a(((G = f.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          p(xe, { title: "API CREDENTIALS" }, {
            default: r(() => [
              e("div", vf, [
                p(Qe, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: r(() => [
                    p(Lt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": z[0] || (z[0] = (N) => l.value = N),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(Qe, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: r(() => [
                    p(Lt, {
                      modelValue: m.value,
                      "onUpdate:modelValue": z[1] || (z[1] = (N) => m.value = N),
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
            default: r(() => [
              e("div", ff, [
                p(Qe, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: r(() => [
                    p(mt, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        z[2] || (z[2] = (N) => I.value = N),
                        P
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
            default: r(() => [
              e("div", gf, [
                p(Qe, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: r(() => [
                    p(mt, {
                      modelValue: w.value,
                      "onUpdate:modelValue": z[3] || (z[3] = (N) => w.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                p(Qe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: r(() => [
                    p(mt, {
                      modelValue: i.value,
                      "onUpdate:modelValue": z[4] || (z[4] = (N) => i.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), S(yt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: r(() => [
              e("span", {
                style: Xe({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), hf = /* @__PURE__ */ Y(pf, [["__scopeId", "data-v-7861bd35"]]), yf = /* @__PURE__ */ J({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Me(), n = _([]), d = _(!1), h = _(null), g = _(!1), f = _(null), v = B(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function l() {
      d.value = !0, h.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (m) {
        h.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var m;
          (m = f.value) != null && m.parentElement && (f.value.parentElement.scrollTop = f.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Se(l), (m, w) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (i) => g.value = !0)
          }, {
            actions: r(() => [
              p(K, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: d.value
              }, {
                default: r(() => [
                  y(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          d.value ? (s(), S(et, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (s(), S(tt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            n.value.length === 0 ? (s(), S(We, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: f,
              class: "log-output"
            }, [
              (s(!0), o(V, null, Z(v.value, (i, I) => (s(), o("div", {
                key: I,
                class: se(`log-line log-level-${i.level.toLowerCase()}`)
              }, a(i.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(Ze, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (i) => g.value = !1)
      }, {
        content: r(() => [...w[3] || (w[3] = [
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
        actions: r(() => [
          p(K, {
            variant: "primary",
            onClick: w[1] || (w[1] = (i) => g.value = !1)
          }, {
            default: r(() => [...w[4] || (w[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), wf = /* @__PURE__ */ Y(yf, [["__scopeId", "data-v-39f6a756"]]), kf = /* @__PURE__ */ J({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Me(), d = _([]), h = _(!1), g = _(null), f = _(!1), v = _("production"), l = _(null), m = B(() => d.value.length === 0 ? [] : d.value.map((i) => ({
      text: `${i.timestamp} - ${i.name} - ${i.level} - ${i.func}:${i.line} - ${i.message}`,
      level: i.level
    })));
    async function w() {
      h.value = !0, g.value = null;
      try {
        d.value = await u(void 0, 500);
        try {
          const i = await n();
          v.value = i.environment || "production";
        } catch {
        }
      } catch (i) {
        g.value = i instanceof Error ? i.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var i;
          (i = l.value) != null && i.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Se(w), (i, I) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = ($) => f.value = !0)
          }, {
            actions: r(() => [
              p(K, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: h.value
              }, {
                default: r(() => [
                  y(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          h.value ? (s(), S(et, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (s(), S(tt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            d.value.length === 0 ? (s(), S(We, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(V, null, Z(m.value, ($, x) => (s(), o("div", {
                key: x,
                class: se(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      p(Ze, {
        show: f.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = ($) => f.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            I[3] || (I[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            I[4] || (I[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          I[5] || (I[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          I[6] || (I[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: r(() => [
          p(K, {
            variant: "primary",
            onClick: I[1] || (I[1] = ($) => f.value = !1)
          }, {
            default: r(() => [...I[7] || (I[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bf = /* @__PURE__ */ Y(kf, [["__scopeId", "data-v-4f1e6f72"]]), _f = { class: "env-title" }, $f = {
  key: 0,
  class: "current-badge"
}, Cf = {
  key: 0,
  class: "branch-info"
}, xf = /* @__PURE__ */ J({
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
    return (u, n) => (s(), S(Le, {
      status: t.isCurrent ? "synced" : void 0
    }, Nt({
      icon: r(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: r(() => [
        e("div", _f, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", $f, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: r(() => [
        t.currentBranch ? (s(), o("span", Cf, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: r(() => [
        ve(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: r(() => [
          p(be, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          p(be, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          p(be, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(be, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Sf = /* @__PURE__ */ Y(xf, [["__scopeId", "data-v-9231917a"]]), If = { class: "env-details" }, Ef = { class: "status-row" }, Mf = {
  key: 0,
  class: "detail-row"
}, Tf = { class: "value mono" }, zf = {
  key: 1,
  class: "detail-row"
}, Lf = { class: "value mono small" }, Rf = { class: "detail-row" }, Nf = { class: "value" }, Df = { class: "detail-row" }, Pf = { class: "value" }, Of = { class: "detail-row" }, Uf = { class: "value" }, Bf = {
  key: 2,
  class: "section-divider"
}, Ff = {
  key: 3,
  class: "detail-row"
}, Af = { class: "value" }, Vf = {
  key: 4,
  class: "detail-row"
}, Wf = { class: "value" }, Gf = { class: "footer-actions" }, jf = /* @__PURE__ */ J({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function d(h) {
      if (!h) return "Unknown";
      try {
        const g = new Date(h), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), l = Math.floor(v / 6e4), m = Math.floor(v / 36e5), w = Math.floor(v / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, g) => (s(), S(nt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (f) => n("close"))
    }, {
      body: r(() => [
        e("div", If, [
          e("div", Ef, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Mf, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Tf, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", zf, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Lf, a(t.environment.path), 1)
          ])) : c("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Rf, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Nf, a(t.environment.workflow_count), 1)
          ]),
          e("div", Df, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Pf, a(t.environment.node_count), 1)
          ]),
          e("div", Of, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Uf, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Bf)) : c("", !0),
          t.environment.created_at ? (s(), o("div", Ff, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Af, a(d(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", Vf, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Wf, a(d(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: r(() => [
        e("div", Gf, [
          t.canDelete ? (s(), S(ce, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (f) => n("delete", t.environment.name))
          }, {
            default: r(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          p(ce, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (f) => n("close"))
          }, {
            default: r(() => [...g[13] || (g[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hf = /* @__PURE__ */ Y(jf, [["__scopeId", "data-v-59855453"]]), qf = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Kf = "3.12", Jf = [
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
], Yf = "auto", Qf = { class: "create-env-form" }, Xf = { class: "form-field" }, Zf = { class: "form-field" }, eg = ["value"], tg = { class: "form-field" }, sg = ["disabled"], og = ["value"], ng = { class: "form-field" }, ag = ["value"], lg = { class: "form-field form-field--checkbox" }, ig = { class: "form-checkbox" }, rg = /* @__PURE__ */ J({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: d } = Me(), h = _(""), g = _(Kf), f = _("latest"), v = _(Yf), l = _(!1), m = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = _(!1), i = _(null);
    function I() {
      const x = h.value.trim();
      if (!x) return;
      const k = {
        name: x,
        python_version: g.value,
        comfyui_version: f.value,
        torch_backend: v.value,
        switch_after: l.value
      };
      n("create", k);
    }
    async function $() {
      w.value = !0;
      try {
        m.value = await d();
      } catch (x) {
        console.error("Failed to load ComfyUI releases:", x);
      } finally {
        w.value = !1;
      }
    }
    return Se(async () => {
      var x;
      await Es(), (x = i.value) == null || x.focus(), $();
    }), (x, k) => (s(), S(nt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: k[6] || (k[6] = (b) => n("close"))
    }, {
      body: r(() => [
        e("div", Qf, [
          e("div", Xf, [
            k[7] || (k[7] = e("label", { class: "form-label" }, "Name", -1)),
            qe(e("input", {
              ref_key: "nameInput",
              ref: i,
              "onUpdate:modelValue": k[0] || (k[0] = (b) => h.value = b),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ot(I, ["enter"])
            }, null, 544), [
              [ns, h.value]
            ])
          ]),
          e("div", Zf, [
            k[8] || (k[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            qe(e("select", {
              "onUpdate:modelValue": k[1] || (k[1] = (b) => g.value = b),
              class: "form-select"
            }, [
              (s(!0), o(V, null, Z(ge(qf), (b) => (s(), o("option", {
                key: b,
                value: b
              }, a(b), 9, eg))), 128))
            ], 512), [
              [Ut, g.value]
            ])
          ]),
          e("div", tg, [
            k[9] || (k[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(e("select", {
              "onUpdate:modelValue": k[2] || (k[2] = (b) => f.value = b),
              class: "form-select",
              disabled: w.value
            }, [
              (s(!0), o(V, null, Z(m.value, (b) => (s(), o("option", {
                key: b.tag_name,
                value: b.tag_name
              }, a(b.name), 9, og))), 128))
            ], 8, sg), [
              [Ut, f.value]
            ])
          ]),
          e("div", ng, [
            k[10] || (k[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(e("select", {
              "onUpdate:modelValue": k[3] || (k[3] = (b) => v.value = b),
              class: "form-select"
            }, [
              (s(!0), o(V, null, Z(ge(Jf), (b) => (s(), o("option", {
                key: b,
                value: b
              }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, ag))), 128))
            ], 512), [
              [Ut, v.value]
            ])
          ]),
          e("div", lg, [
            e("label", ig, [
              qe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": k[4] || (k[4] = (b) => l.value = b)
              }, null, 512), [
                [as, l.value]
              ]),
              k[11] || (k[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: r(() => [
        p(ce, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: I
        }, {
          default: r(() => [...k[12] || (k[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        p(ce, {
          variant: "secondary",
          onClick: k[5] || (k[5] = (b) => n("close"))
        }, {
          default: r(() => [...k[13] || (k[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), dg = /* @__PURE__ */ Y(rg, [["__scopeId", "data-v-a2f13447"]]), cg = /* @__PURE__ */ J({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const d = n, { getEnvironments: h } = Me(), g = _([]), f = _(!1), v = _(null), l = _(""), m = _(!1), w = _(!1), i = _(null), I = B(
      () => g.value.find((z) => z.is_current)
    ), $ = B(() => {
      if (!l.value.trim()) return g.value;
      const z = l.value.toLowerCase();
      return g.value.filter(
        (N) => {
          var G;
          return N.name.toLowerCase().includes(z) || ((G = N.current_branch) == null ? void 0 : G.toLowerCase().includes(z));
        }
      );
    });
    function x(z) {
      d("create", z), w.value = !1;
    }
    function k() {
      w.value = !0;
    }
    function b(z) {
      i.value = z;
    }
    function P(z) {
      i.value = null, d("delete", z);
    }
    async function F() {
      f.value = !0, v.value = null;
      try {
        g.value = await h();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Se(F), u({
      loadEnvironments: F
    }), (z, N) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (G) => m.value = !0)
          }, {
            actions: r(() => [
              p(K, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: r(() => [...N[6] || (N[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              p(K, {
                variant: "secondary",
                size: "sm",
                onClick: F
              }, {
                default: r(() => [...N[7] || (N[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          p(ht, {
            modelValue: l.value,
            "onUpdate:modelValue": N[1] || (N[1] = (G) => l.value = G),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          f.value ? (s(), S(et, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), S(tt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), S(yt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                I.value ? (s(), o(V, { key: 0 }, [
                  N[8] || (N[8] = y(" • Current: ", -1)),
                  e("strong", null, a(I.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            $.value.length ? (s(), S(xe, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: r(() => [
                (s(!0), o(V, null, Z($.value, (G) => (s(), S(Sf, {
                  key: G.name,
                  "environment-name": G.name,
                  "is-current": G.is_current,
                  "current-branch": G.current_branch,
                  "show-last-used": !1
                }, {
                  actions: r(() => [
                    G.is_current ? c("", !0) : (s(), S(K, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => z.$emit("switch", G.name)
                    }, {
                      default: r(() => [...N[9] || (N[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => b(G)
                    }, {
                      default: r(() => [...N[10] || (N[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            $.value.length ? c("", !0) : (s(), S(We, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Nt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: r(() => [
                  p(K, {
                    variant: "primary",
                    onClick: k
                  }, {
                    default: r(() => [...N[11] || (N[11] = [
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
      p(Ze, {
        show: m.value,
        title: "About Environments",
        onClose: N[3] || (N[3] = (G) => m.value = !1)
      }, {
        content: r(() => [...N[12] || (N[12] = [
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
        actions: r(() => [
          p(K, {
            variant: "secondary",
            onClick: N[2] || (N[2] = (G) => m.value = !1)
          }, {
            default: r(() => [...N[13] || (N[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      i.value ? (s(), S(Hf, {
        key: 0,
        environment: i.value,
        "can-delete": g.value.length > 1,
        onClose: N[4] || (N[4] = (G) => i.value = null),
        onDelete: P
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      w.value ? (s(), S(dg, {
        key: 1,
        onClose: N[5] || (N[5] = (G) => w.value = !1),
        onCreate: x
      })) : c("", !0)
    ], 64));
  }
}), ug = /* @__PURE__ */ Y(cg, [["__scopeId", "data-v-307d9926"]]), mg = { class: "file-path" }, vg = { class: "file-path-text" }, fg = ["title"], gg = /* @__PURE__ */ J({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = _(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, g) => (s(), o("div", mg, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", vg, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: d
      }, a(n.value ? "✓" : "📋"), 9, fg)) : c("", !0)
    ]));
  }
}), pg = /* @__PURE__ */ Y(gg, [["__scopeId", "data-v-f0982173"]]), hg = { class: "output-path-input" }, yg = { class: "export-actions" }, wg = {
  key: 1,
  class: "export-warning"
}, kg = /* @__PURE__ */ J({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Me(), n = _(""), d = _(!1), h = _(null), g = _(!1);
    async function f() {
      d.value = !0, h.value = null;
      try {
        const l = await u(n.value || void 0);
        h.value = l;
      } catch (l) {
        h.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function v() {
      var l;
      if ((l = h.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(h.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (l, m) => (s(), o(V, null, [
      p(De, null, {
        header: r(() => [
          p(Pe, { title: "EXPORT ENVIRONMENT" }, {
            actions: r(() => [
              p(K, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (w) => g.value = !0),
                title: "About exporting"
              }, {
                default: r(() => [...m[5] || (m[5] = [
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
        content: r(() => [
          p(xe, { title: "WHAT WILL BE EXPORTED" }, {
            default: r(() => [
              p(Le, { status: "synced" }, {
                icon: r(() => [...m[6] || (m[6] = [
                  y("📦", -1)
                ])]),
                title: r(() => [...m[7] || (m[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: r(() => [...m[8] || (m[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: r(() => [
                  p(be, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  p(be, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  p(be, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  p(be, {
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
            default: r(() => [
              p(Le, { status: "synced" }, {
                icon: r(() => [...m[9] || (m[9] = [
                  y("📁", -1)
                ])]),
                title: r(() => [...m[10] || (m[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: r(() => [...m[11] || (m[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: r(() => [
                  e("div", hg, [
                    p(Lt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => n.value = w),
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
            default: r(() => [
              e("div", yg, [
                p(K, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: f
                }, {
                  default: r(() => [
                    m[12] || (m[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    y(" " + a(d.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (s(), S(K, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: m[2] || (m[2] = (w) => n.value = "")
                }, {
                  default: r(() => [...m[13] || (m[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          h.value ? (s(), S(xe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: r(() => [
              p(Le, {
                status: h.value.status === "success" ? "synced" : "broken"
              }, Nt({
                icon: r(() => [
                  y(a(h.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  y(a(h.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: r(() => [
                  y(a(h.value.status === "success" ? "Your environment has been exported" : h.value.message), 1)
                ]),
                _: 2
              }, [
                h.value.status === "success" ? {
                  name: "details",
                  fn: r(() => [
                    p(be, { label: "Saved to:" }, {
                      default: r(() => [
                        p(pg, {
                          path: h.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    h.value.models_without_sources !== void 0 ? (s(), S(be, {
                      key: 0,
                      label: "Models without sources:",
                      value: h.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    h.value.models_without_sources && h.value.models_without_sources > 0 ? (s(), o("div", wg, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                h.value.status === "success" ? {
                  name: "actions",
                  fn: r(() => [
                    p(K, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: r(() => [...m[15] || (m[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    p(K, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (w) => h.value = null)
                    }, {
                      default: r(() => [...m[16] || (m[16] = [
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
          })) : c("", !0)
        ]),
        _: 1
      }),
      p(Ze, {
        show: g.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (w) => g.value = !1)
      }, {
        content: r(() => [...m[17] || (m[17] = [
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
}), bg = /* @__PURE__ */ Y(kg, [["__scopeId", "data-v-1777a9d5"]]), _g = { class: "file-input-wrapper" }, $g = ["accept", "multiple", "disabled"], Cg = /* @__PURE__ */ J({
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
    const d = n, h = _(null);
    function g() {
      var v;
      (v = h.value) == null || v.click();
    }
    function f(v) {
      const l = v.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return u({
      triggerInput: g
    }), (v, l) => (s(), o("div", _g, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, $g),
      p(K, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: r(() => [
          ve(v.$slots, "default", {}, () => [
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
}), xg = /* @__PURE__ */ Y(Cg, [["__scopeId", "data-v-cd192091"]]), Sg = {
  key: 0,
  class: "drop-zone-empty"
}, Ig = { class: "drop-zone-text" }, Eg = { class: "drop-zone-primary" }, Mg = { class: "drop-zone-secondary" }, Tg = { class: "drop-zone-actions" }, zg = {
  key: 1,
  class: "drop-zone-file"
}, Lg = { class: "file-info" }, Rg = { class: "file-details" }, Ng = { class: "file-name" }, Dg = { class: "file-size" }, Pg = /* @__PURE__ */ J({
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
    const n = u, d = _(!1), h = _(null), g = _(0), f = B(() => h.value !== null), v = B(() => {
      var b;
      return ((b = h.value) == null ? void 0 : b.name) || "";
    }), l = B(() => {
      if (!h.value) return "";
      const b = h.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var P;
      g.value++, (P = b.dataTransfer) != null && P.types.includes("Files") && (d.value = !0);
    }
    function w(b) {
      b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function i() {
      g.value--, g.value === 0 && (d.value = !1);
    }
    function I(b) {
      var F;
      g.value = 0, d.value = !1;
      const P = (F = b.dataTransfer) == null ? void 0 : F.files;
      P && P.length > 0 && x(P[0]);
    }
    function $(b) {
      b.length > 0 && x(b[0]);
    }
    function x(b) {
      h.value = b, n("fileSelected", b);
    }
    function k() {
      h.value = null, n("clear");
    }
    return (b, P) => (s(), o("div", {
      class: se(["file-drop-zone", { "drop-active": d.value, "has-file": f.value }]),
      onDragenter: Ce(m, ["prevent"]),
      onDragover: Ce(w, ["prevent"]),
      onDragleave: Ce(i, ["prevent"]),
      onDrop: Ce(I, ["prevent"])
    }, [
      f.value ? (s(), o("div", zg, [
        e("div", Lg, [
          P[1] || (P[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Rg, [
            e("div", Ng, a(v.value), 1),
            e("div", Dg, a(l.value), 1)
          ])
        ]),
        p(K, {
          variant: "ghost",
          size: "xs",
          onClick: k,
          title: "Remove file"
        }, {
          default: r(() => [...P[2] || (P[2] = [
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
      ])) : (s(), o("div", Sg, [
        P[0] || (P[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Ig, [
          e("p", Eg, a(t.primaryText), 1),
          e("p", Mg, a(t.secondaryText), 1)
        ]),
        e("div", Tg, [
          p(xg, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: r(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Og = /* @__PURE__ */ Y(Pg, [["__scopeId", "data-v-e00abbca"]]), Ug = { class: "import-preview" }, Bg = { class: "preview-header" }, Fg = {
  key: 0,
  class: "source-env"
}, Ag = { class: "preview-content" }, Vg = { class: "preview-section" }, Wg = { class: "section-header" }, Gg = { class: "section-info" }, jg = { class: "section-count" }, Hg = {
  key: 0,
  class: "item-list"
}, qg = { class: "item-name" }, Kg = {
  key: 0,
  class: "item-more"
}, Jg = { class: "preview-section" }, Yg = { class: "section-header" }, Qg = { class: "section-info" }, Xg = { class: "section-count" }, Zg = {
  key: 0,
  class: "item-list"
}, ep = { class: "item-details" }, tp = { class: "item-name" }, sp = { class: "item-meta" }, op = {
  key: 0,
  class: "item-more"
}, np = { class: "preview-section" }, ap = { class: "section-header" }, lp = { class: "section-info" }, ip = { class: "section-count" }, rp = {
  key: 0,
  class: "item-list"
}, dp = { class: "item-name" }, cp = {
  key: 0,
  class: "item-more"
}, up = {
  key: 0,
  class: "preview-section"
}, mp = { class: "git-info" }, vp = /* @__PURE__ */ J({
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
    const u = t, n = B(() => u.workflows.length), d = B(() => u.models.length), h = B(() => u.nodes.length);
    function g(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, v) => (s(), o("div", Ug, [
      e("div", Bg, [
        p(Ue, null, {
          default: r(() => [...v[0] || (v[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Fg, [
          v[1] || (v[1] = y(" From: ", -1)),
          p(Wt, null, {
            default: r(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Ag, [
        e("div", Vg, [
          e("div", Wg, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Gg, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", jg, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Hg, [
            (s(!0), o(V, null, Z(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", qg, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Kg, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Jg, [
          e("div", Yg, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Qg, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Xg, a(d.value) + " file" + a(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Zg, [
            (s(!0), o(V, null, Z(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ep, [
                e("span", tp, a(l.filename), 1),
                e("span", sp, a(g(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", op, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", np, [
          e("div", ap, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", lp, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", ip, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", rp, [
            (s(!0), o(V, null, Z(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", dp, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", cp, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", up, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", mp, [
            t.gitBranch ? (s(), S(be, {
              key: 0,
              label: "Branch"
            }, {
              default: r(() => [
                p(Wt, null, {
                  default: r(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), S(be, {
              key: 1,
              label: "Commit"
            }, {
              default: r(() => [
                p(is, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), fp = /* @__PURE__ */ Y(vp, [["__scopeId", "data-v-182fe113"]]), gp = { class: "import-options" }, pp = { class: "options-container" }, hp = { class: "option-section" }, yp = { class: "conflict-options" }, wp = ["value", "checked", "onChange"], kp = { class: "conflict-content" }, bp = { class: "conflict-label" }, _p = { class: "conflict-description" }, $p = { class: "option-section" }, Cp = { class: "component-toggles" }, xp = /* @__PURE__ */ J({
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
    const n = u, d = [
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
    return (h, g) => (s(), o("div", gp, [
      p(Ue, null, {
        default: r(() => [...g[4] || (g[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", pp, [
        e("div", hp, [
          p(Vt, null, {
            default: r(() => [...g[5] || (g[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", yp, [
            (s(), o(V, null, Z(d, (f) => e("label", {
              key: f.value,
              class: se(["conflict-option", { active: t.conflictMode === f.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: f.value,
                checked: t.conflictMode === f.value,
                onChange: (v) => n("update:conflictMode", f.value)
              }, null, 40, wp),
              e("div", kp, [
                e("span", bp, a(f.label), 1),
                e("span", _p, a(f.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", $p, [
          p(Vt, null, {
            default: r(() => [...g[6] || (g[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Cp, [
            p(Qe, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: r(() => [
                p(mt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": g[0] || (g[0] = (f) => n("update:includeWorkflows", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(Qe, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: r(() => [
                p(mt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": g[1] || (g[1] = (f) => n("update:includeModels", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(Qe, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: r(() => [
                p(mt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": g[2] || (g[2] = (f) => n("update:includeNodes", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            p(Qe, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: r(() => [
                p(mt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": g[3] || (g[3] = (f) => n("update:includeGitHistory", f))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Sp = /* @__PURE__ */ Y(xp, [["__scopeId", "data-v-0ec212b0"]]), Ip = {
  key: 0,
  class: "import-empty"
}, Ep = { class: "import-help" }, Mp = {
  key: 1,
  class: "import-configure"
}, Tp = { class: "selected-file-bar" }, zp = { class: "file-bar-content" }, Lp = { class: "file-bar-info" }, Rp = { class: "file-bar-name" }, Np = { class: "file-bar-size" }, Dp = { class: "import-actions" }, Pp = {
  key: 2,
  class: "import-progress"
}, Op = { class: "progress-content" }, Up = { class: "progress-info" }, Bp = { class: "progress-title" }, Fp = { class: "progress-detail" }, Ap = { class: "progress-bar" }, Vp = { class: "progress-status" }, Wp = {
  key: 3,
  class: "import-complete"
}, Gp = { class: "complete-message" }, jp = { class: "complete-title" }, Hp = { class: "complete-details" }, qp = { class: "complete-actions" }, Kp = /* @__PURE__ */ J({
  __name: "ImportSection",
  setup(t) {
    const u = _(null), n = _(!1), d = _(!1), h = _(!1), g = _(""), f = _({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = _({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = _({
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
    }), m = B(() => f.value.includeWorkflows || f.value.includeModels || f.value.includeNodes || f.value.includeGitHistory);
    function w(k) {
      u.value = k;
    }
    function i() {
      u.value = null, d.value = !1, h.value = !1, g.value = "";
    }
    function I() {
      i(), n.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (u.value) {
        n.value = !0, d.value = !1;
        try {
          const k = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const b of k)
            v.value = b, await new Promise((P) => setTimeout(P, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((b) => setTimeout(b, 500)), h.value = !0, g.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (k) {
          h.value = !1, g.value = k instanceof Error ? k.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, d.value = !0;
        }
      }
    }
    function x(k) {
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (k, b) => (s(), S(De, null, {
      header: r(() => [
        p(Pe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: r(() => [
        !u.value && !n.value ? (s(), o("div", Ip, [
          p(Og, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", Ep, [
            p(Ue, null, {
              default: r(() => [...b[5] || (b[5] = [
                y("How to Import", -1)
              ])]),
              _: 1
            }),
            b[6] || (b[6] = e("div", { class: "help-content" }, [
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
        ])) : u.value && !n.value && !d.value ? (s(), o("div", Mp, [
          e("div", Tp, [
            e("div", zp, [
              b[7] || (b[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Lp, [
                e("div", Rp, a(u.value.name), 1),
                e("div", Np, a(x(u.value.size)), 1)
              ])
            ]),
            p(K, {
              variant: "ghost",
              size: "sm",
              onClick: i
            }, {
              default: r(() => [...b[8] || (b[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          p(fp, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          p(Sp, {
            "conflict-mode": f.value.conflictMode,
            "onUpdate:conflictMode": b[0] || (b[0] = (P) => f.value.conflictMode = P),
            "include-workflows": f.value.includeWorkflows,
            "onUpdate:includeWorkflows": b[1] || (b[1] = (P) => f.value.includeWorkflows = P),
            "include-models": f.value.includeModels,
            "onUpdate:includeModels": b[2] || (b[2] = (P) => f.value.includeModels = P),
            "include-nodes": f.value.includeNodes,
            "onUpdate:includeNodes": b[3] || (b[3] = (P) => f.value.includeNodes = P),
            "include-git-history": f.value.includeGitHistory,
            "onUpdate:includeGitHistory": b[4] || (b[4] = (P) => f.value.includeGitHistory = P)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !f.value.includeModels && l.value.models.length > 0 ? (s(), S(vt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Dp, [
            p(K, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: $
            }, {
              default: r(() => [...b[9] || (b[9] = [
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
            p(K, {
              variant: "secondary",
              size: "md",
              onClick: i
            }, {
              default: r(() => [...b[10] || (b[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (s(), o("div", Pp, [
          e("div", Op, [
            b[11] || (b[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Up, [
              e("div", Bp, a(v.value.message), 1),
              e("div", Fp, a(v.value.detail), 1)
            ])
          ]),
          e("div", Ap, [
            e("div", {
              class: "progress-bar-fill",
              style: Xe({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Vp, a(v.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Wp, [
          e("div", {
            class: se(["complete-icon", h.value ? "success" : "error"])
          }, a(h.value ? "✓" : "✕"), 3),
          e("div", Gp, [
            e("div", jp, a(h.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Hp, a(g.value), 1)
          ]),
          e("div", qp, [
            p(K, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: r(() => [...b[12] || (b[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Jp = /* @__PURE__ */ Y(Kp, [["__scopeId", "data-v-18e18eb5"]]), Yp = { class: "header-info" }, Qp = { class: "commit-hash" }, Xp = {
  key: 0,
  class: "commit-refs"
}, Zp = { class: "commit-message" }, eh = { class: "commit-date" }, th = {
  key: 0,
  class: "loading"
}, sh = {
  key: 1,
  class: "changes-section"
}, oh = { class: "stats-row" }, nh = { class: "stat" }, ah = { class: "stat insertions" }, lh = { class: "stat deletions" }, ih = {
  key: 0,
  class: "change-group"
}, rh = {
  key: 1,
  class: "change-group"
}, dh = {
  key: 0,
  class: "version"
}, ch = {
  key: 2,
  class: "change-group"
}, uh = { class: "change-item" }, mh = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Me(), d = _(null), h = _(!0), g = B(() => {
      if (!d.value) return !1;
      const v = d.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), f = B(() => {
      if (!d.value) return !1;
      const v = d.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Se(async () => {
      try {
        d.value = await n(u.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (v, l) => (s(), S(nt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (m) => v.$emit("close"))
    }, {
      header: r(() => {
        var m, w, i, I;
        return [
          e("div", Yp, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Qp, a(((m = d.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (I = (i = d.value) == null ? void 0 : i.refs) != null && I.length ? (s(), o("span", Xp, [
              (s(!0), o(V, null, Z(d.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : c("", !0)
          ]),
          p(ce, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = ($) => v.$emit("close"))
          }, {
            default: r(() => [...l[5] || (l[5] = [
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
      body: r(() => {
        var m, w;
        return [
          e("div", Zp, a(((m = d.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", eh, a(((w = d.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", th, "Loading details...")) : d.value ? (s(), o("div", sh, [
            e("div", oh, [
              e("span", nh, a(d.value.stats.files_changed) + " files", 1),
              e("span", ah, "+" + a(d.value.stats.insertions), 1),
              e("span", lh, "-" + a(d.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", ih, [
              p(St, { variant: "section" }, {
                default: r(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, Z(d.value.changes.workflows.added, (i) => (s(), o("div", {
                key: "add-" + i,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(i), 1)
              ]))), 128)),
              (s(!0), o(V, null, Z(d.value.changes.workflows.modified, (i) => (s(), o("div", {
                key: "mod-" + i,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(i), 1)
              ]))), 128)),
              (s(!0), o(V, null, Z(d.value.changes.workflows.deleted, (i) => (s(), o("div", {
                key: "del-" + i,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(i), 1)
              ]))), 128))
            ])) : c("", !0),
            f.value ? (s(), o("div", rh, [
              p(St, { variant: "section" }, {
                default: r(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, Z(d.value.changes.nodes.added, (i) => (s(), o("div", {
                key: "add-" + i.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(i.name), 1),
                i.version ? (s(), o("span", dh, "(" + a(i.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(V, null, Z(d.value.changes.nodes.removed, (i) => (s(), o("div", {
                key: "rem-" + i.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(i.name), 1)
              ]))), 128))
            ])) : c("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", ch, [
              p(St, { variant: "section" }, {
                default: r(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", uh, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: r(() => [
        p(ce, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: r(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        p(ce, {
          variant: "primary",
          onClick: l[2] || (l[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: r(() => [...l[16] || (l[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), vh = /* @__PURE__ */ Y(mh, [["__scopeId", "data-v-d256ff6d"]]), fh = { class: "dialog-message" }, gh = {
  key: 0,
  class: "dialog-details"
}, ph = {
  key: 1,
  class: "dialog-warning"
}, hh = /* @__PURE__ */ J({
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
    return (u, n) => (s(), S(nt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (d) => u.$emit("cancel"))
    }, {
      body: r(() => [
        e("p", fh, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", gh, [
          (s(!0), o(V, null, Z(t.details, (d, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(d), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", ph, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: r(() => [
        p(ce, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (d) => u.$emit("cancel"))
        }, {
          default: r(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(ce, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (d) => u.$emit("secondary"))
        }, {
          default: r(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        p(ce, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (d) => u.$emit("confirm"))
        }, {
          default: r(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yh = /* @__PURE__ */ Y(hh, [["__scopeId", "data-v-3670b9f5"]]), wh = { class: "base-textarea-wrapper" }, kh = ["value", "rows", "placeholder", "disabled", "maxlength"], bh = {
  key: 0,
  class: "base-textarea-count"
}, _h = /* @__PURE__ */ J({
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
    return (u, n) => (s(), o("div", wh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          n[1] || (n[1] = ot(Ce((d) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ot(Ce((d) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, kh),
      t.showCharCount && t.maxLength ? (s(), o("div", bh, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), es = /* @__PURE__ */ Y(_h, [["__scopeId", "data-v-5516e6fc"]]), $h = ["checked", "disabled"], Ch = { class: "base-checkbox-box" }, xh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Sh = {
  key: 0,
  class: "base-checkbox-label"
}, Ih = /* @__PURE__ */ J({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.checked))
      }, null, 40, $h),
      e("span", Ch, [
        t.modelValue ? (s(), o("svg", xh, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (s(), o("span", Sh, [
        ve(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ Y(Ih, [["__scopeId", "data-v-bf17c831"]]), Eh = { class: "popover-header" }, Mh = { class: "popover-body" }, Th = {
  key: 0,
  class: "changes-summary"
}, zh = {
  key: 0,
  class: "change-item"
}, Lh = {
  key: 1,
  class: "change-item"
}, Rh = {
  key: 2,
  class: "change-item"
}, Nh = {
  key: 3,
  class: "change-item"
}, Dh = {
  key: 4,
  class: "change-item"
}, Ph = {
  key: 1,
  class: "no-changes"
}, Oh = {
  key: 2,
  class: "loading"
}, Uh = {
  key: 3,
  class: "issues-error"
}, Bh = { class: "error-header" }, Fh = { class: "error-title" }, Ah = { class: "issues-list" }, Vh = { class: "message-section" }, Wh = { class: "popover-footer" }, Gh = {
  key: 1,
  class: "commit-popover"
}, jh = { class: "popover-header" }, Hh = { class: "popover-body" }, qh = {
  key: 0,
  class: "changes-summary"
}, Kh = {
  key: 0,
  class: "change-item"
}, Jh = {
  key: 1,
  class: "change-item"
}, Yh = {
  key: 2,
  class: "change-item"
}, Qh = {
  key: 3,
  class: "change-item"
}, Xh = {
  key: 4,
  class: "change-item"
}, Zh = {
  key: 1,
  class: "no-changes"
}, e1 = {
  key: 2,
  class: "loading"
}, t1 = {
  key: 3,
  class: "issues-error"
}, s1 = { class: "error-header" }, o1 = { class: "error-title" }, n1 = { class: "issues-list" }, a1 = { class: "message-section" }, l1 = { class: "popover-footer" }, i1 = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, d = u, { commit: h } = Me(), g = _(""), f = _(!1), v = _(!1), l = _(null), m = B(() => {
      if (!n.status) return !1;
      const x = n.status.workflows;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || n.status.has_changes;
    }), w = B(() => {
      var x;
      return (x = n.status) != null && x.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (k) => k.has_issues && (k.sync_state === "new" || k.sync_state === "modified")
      ) : [];
    }), i = B(() => w.value.length > 0), I = B(() => i.value && !v.value);
    async function $() {
      var x, k, b;
      if (!(i.value && !v.value) && !(!m.value || !g.value.trim() || f.value)) {
        f.value = !0, l.value = null;
        try {
          const P = await h(g.value.trim(), v.value);
          P.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((x = P.summary) == null ? void 0 : x.new) || 0} new, ${((k = P.summary) == null ? void 0 : k.modified) || 0} modified, ${((b = P.summary) == null ? void 0 : b.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => d("committed"), 1e3)) : P.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : P.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: P.message || "Commit failed" };
        } catch (P) {
          l.value = { type: "error", message: P instanceof Error ? P.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (x, k) => t.asModal ? (s(), S(Ie, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: k[5] || (k[5] = (b) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: k[4] || (k[4] = Ce(() => {
          }, ["stop"]))
        }, [
          e("div", Eh, [
            k[11] || (k[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: k[0] || (k[0] = (b) => d("close"))
            }, [...k[10] || (k[10] = [
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
          e("div", Mh, [
            t.status && m.value ? (s(), o("div", Th, [
              t.status.workflows.new.length ? (s(), o("div", zh, [
                k[12] || (k[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Lh, [
                k[13] || (k[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Rh, [
                k[14] || (k[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Nh, [
                k[15] || (k[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Dh, [
                k[16] || (k[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (s(), o("div", Ph, " No changes to commit ")) : (s(), o("div", Oh, " Loading... ")),
            i.value ? (s(), o("div", Uh, [
              e("div", Bh, [
                k[17] || (k[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Fh, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Ah, [
                (s(!0), o(V, null, Z(w.value, (b) => (s(), o("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(b.name), 1),
                  y(": " + a(b.issue_summary), 1)
                ]))), 128))
              ]),
              p(ts, {
                modelValue: v.value,
                "onUpdate:modelValue": k[1] || (k[1] = (b) => v.value = b),
                class: "allow-issues-toggle"
              }, {
                default: r(() => [...k[18] || (k[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", Vh, [
              p(es, {
                modelValue: g.value,
                "onUpdate:modelValue": k[2] || (k[2] = (b) => g.value = b),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || f.value || I.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: se(["result", l.value.type])
            }, a(l.value.message), 3)) : c("", !0)
          ]),
          e("div", Wh, [
            p(ce, {
              variant: "secondary",
              onClick: k[3] || (k[3] = (b) => d("close"))
            }, {
              default: r(() => [...k[19] || (k[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(ce, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || f.value || I.value,
              loading: f.value,
              onClick: $
            }, {
              default: r(() => [
                y(a(f.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Gh, [
      e("div", jh, [
        k[21] || (k[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: k[6] || (k[6] = (b) => d("close"))
        }, [...k[20] || (k[20] = [
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
      e("div", Hh, [
        t.status && m.value ? (s(), o("div", qh, [
          t.status.workflows.new.length ? (s(), o("div", Kh, [
            k[22] || (k[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Jh, [
            k[23] || (k[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Yh, [
            k[24] || (k[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Qh, [
            k[25] || (k[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Xh, [
            k[26] || (k[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (s(), o("div", Zh, " No changes to commit ")) : (s(), o("div", e1, " Loading... ")),
        i.value ? (s(), o("div", t1, [
          e("div", s1, [
            k[27] || (k[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", o1, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", n1, [
            (s(!0), o(V, null, Z(w.value, (b) => (s(), o("div", {
              key: b.name,
              class: "issue-item"
            }, [
              e("strong", null, a(b.name), 1),
              y(": " + a(b.issue_summary), 1)
            ]))), 128))
          ]),
          p(ts, {
            modelValue: v.value,
            "onUpdate:modelValue": k[7] || (k[7] = (b) => v.value = b),
            class: "allow-issues-toggle"
          }, {
            default: r(() => [...k[28] || (k[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", a1, [
          p(es, {
            modelValue: g.value,
            "onUpdate:modelValue": k[8] || (k[8] = (b) => g.value = b),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || f.value || I.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: se(["result", l.value.type])
        }, a(l.value.message), 3)) : c("", !0)
      ]),
      e("div", l1, [
        p(ce, {
          variant: "secondary",
          onClick: k[9] || (k[9] = (b) => d("close"))
        }, {
          default: r(() => [...k[29] || (k[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p(ce, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || f.value || I.value,
          loading: f.value,
          onClick: $
        }, {
          default: r(() => [
            y(a(f.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ms = /* @__PURE__ */ Y(i1, [["__scopeId", "data-v-d92153de"]]), r1 = { class: "modal-header" }, d1 = { class: "modal-body" }, c1 = { class: "switch-message" }, u1 = { class: "switch-details" }, m1 = { class: "modal-actions" }, v1 = /* @__PURE__ */ J({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), S(Ie, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (d) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ce(() => {
          }, ["stop"]))
        }, [
          e("div", r1, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (d) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", d1, [
            e("p", c1, [
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
            e("p", u1, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", m1, [
            p(K, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (d) => u.$emit("close"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(K, {
              variant: "primary",
              onClick: n[2] || (n[2] = (d) => u.$emit("confirm"))
            }, {
              default: r(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), f1 = /* @__PURE__ */ Y(v1, [["__scopeId", "data-v-e9c5253e"]]), g1 = { class: "progress-bar" }, p1 = /* @__PURE__ */ J({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = B(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (d, h) => (s(), o("div", g1, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: Xe({ width: n.value })
      }, null, 6)
    ]));
  }
}), h1 = /* @__PURE__ */ Y(p1, [["__scopeId", "data-v-1beb0512"]]), y1 = {
  key: 0,
  class: "modal-overlay"
}, w1 = { class: "modal-content" }, k1 = { class: "modal-body" }, b1 = { class: "progress-info" }, _1 = { class: "progress-percentage" }, $1 = { class: "progress-state" }, C1 = { class: "switch-steps" }, x1 = { class: "step-icon" }, S1 = { class: "step-label" }, I1 = /* @__PURE__ */ J({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = B(() => {
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
    }), d = B(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), h = B(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = g.findIndex((v) => v.state === u.state);
      return g.map((v, l) => {
        let m = "pending", w = "○";
        return l < f ? (m = "completed", w = "✓") : l === f && (m = "active", w = "⟳"), {
          ...v,
          status: m,
          icon: w
        };
      });
    });
    return (g, f) => (s(), S(Ie, { to: "body" }, [
      t.show ? (s(), o("div", y1, [
        e("div", w1, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", k1, [
            p(h1, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", b1, [
              e("div", _1, a(t.progress) + "%", 1),
              e("div", $1, a(n.value), 1)
            ]),
            e("div", C1, [
              (s(!0), o(V, null, Z(h.value, (v) => (s(), o("div", {
                key: v.state,
                class: se(["switch-step", v.status])
              }, [
                e("span", x1, a(v.icon), 1),
                e("span", S1, a(v.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), E1 = /* @__PURE__ */ Y(I1, [["__scopeId", "data-v-768a5078"]]), M1 = { class: "modal-header" }, T1 = { class: "modal-body" }, z1 = {
  key: 0,
  class: "node-section"
}, L1 = { class: "node-list" }, R1 = {
  key: 1,
  class: "node-section"
}, N1 = { class: "node-list" }, D1 = { class: "modal-actions" }, P1 = /* @__PURE__ */ J({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), S(Ie, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (d) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ce(() => {
          }, ["stop"]))
        }, [
          e("div", M1, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (d) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", T1, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", z1, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", L1, [
                (s(!0), o(V, null, Z(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + a(d), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", R1, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", N1, [
                (s(!0), o(V, null, Z(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item remove"
                }, " - " + a(d), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", D1, [
            p(K, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (d) => u.$emit("close"))
            }, {
              default: r(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            p(K, {
              variant: "primary",
              onClick: n[2] || (n[2] = (d) => u.$emit("confirm"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), O1 = /* @__PURE__ */ Y(P1, [["__scopeId", "data-v-7cad7518"]]), U1 = { class: "comfygit-panel" }, B1 = { class: "panel-header" }, F1 = { class: "header-left" }, A1 = {
  key: 0,
  class: "header-info"
}, V1 = { class: "header-actions" }, W1 = { class: "env-switcher" }, G1 = {
  key: 0,
  class: "header-info"
}, j1 = { class: "branch-name" }, H1 = { class: "panel-main" }, q1 = { class: "sidebar" }, K1 = { class: "sidebar-section" }, J1 = { class: "sidebar-section" }, Y1 = { class: "sidebar-section" }, Q1 = { class: "content-area" }, X1 = {
  key: 0,
  class: "error-message"
}, Z1 = {
  key: 1,
  class: "loading"
}, ey = {
  key: 4,
  class: "dialog-overlay"
}, ty = { class: "dialog-content create-progress-dialog" }, sy = { class: "dialog-body create-progress-body" }, oy = { class: "create-progress-message" }, ny = { class: "dialog-content env-selector-dialog" }, ay = { class: "dialog-header" }, ly = { class: "dialog-body" }, iy = { class: "env-list" }, ry = { class: "env-info" }, dy = { class: "env-name-row" }, cy = { class: "env-indicator" }, uy = { class: "env-name" }, my = {
  key: 0,
  class: "env-branch"
}, vy = {
  key: 1,
  class: "current-label"
}, fy = { class: "env-stats" }, gy = ["onClick"], py = { class: "toast-container" }, hy = { class: "toast-icon" }, yy = { class: "toast-message" }, wy = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: d,
      getHistory: h,
      getBranches: g,
      checkout: f,
      createBranch: v,
      switchBranch: l,
      deleteBranch: m,
      getEnvironments: w,
      switchEnvironment: i,
      getSwitchProgress: I,
      createEnvironment: $,
      getCreateProgress: x,
      deleteEnvironment: k,
      syncEnvironmentManually: b
    } = Me(), P = rs(), F = _(null), z = _([]), N = _([]), G = _([]), O = B(() => G.value.find((W) => W.is_current)), D = _(!1), U = _(null), T = _(null), E = _(!1), j = _(null), ne = _(null), we = _(!1), re = _(!1), Q = _(""), X = _({ state: "idle", progress: 0, message: "" });
    let L = null, C = null;
    const te = _(!1), ee = _({ state: "idle", message: "" }), $e = _(null);
    let ye = null;
    const me = _("status"), Be = _("this-env");
    function ke(W, M) {
      me.value = W, Be.value = M;
    }
    function at(W) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      ue && ke(ue.view, ue.section);
    }
    function st() {
      ke("branches", "this-env");
    }
    function Ke() {
      n("close"), setTimeout(() => {
        var M;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const ue of W)
          if (((M = ue.textContent) == null ? void 0 : M.trim()) === "Manager") {
            ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const pe = _(null), Ge = _(!1), Fe = _(!1), le = _([]);
    let oe = 0;
    function ie(W, M = "info", ue = 3e3) {
      const _e = ++oe;
      return le.value.push({ id: _e, message: W, type: M }), ue > 0 && setTimeout(() => {
        le.value = le.value.filter((Re) => Re.id !== _e);
      }, ue), _e;
    }
    function Te(W) {
      le.value = le.value.filter((M) => M.id !== W);
    }
    function wt(W) {
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
    const lt = B(() => {
      if (!F.value) return "neutral";
      const W = F.value.workflows, M = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || F.value.has_changes;
      return F.value.comparison.is_synced ? M ? "warning" : "success" : "error";
    });
    B(() => F.value ? lt.value === "success" ? "All synced" : lt.value === "warning" ? "Uncommitted changes" : lt.value === "error" ? "Not synced" : "" : "");
    async function Ee() {
      D.value = !0, U.value = null;
      try {
        const [W, M, ue, _e] = await Promise.all([
          d(!0),
          h(),
          g(),
          w()
        ]);
        F.value = W, z.value = M.commits, N.value = ue.branches, G.value = _e, n("statusUpdate", W), j.value && await j.value.loadWorkflows(!0);
      } catch (W) {
        U.value = W instanceof Error ? W.message : "Failed to load status", F.value = null, z.value = [], N.value = [];
      } finally {
        D.value = !1;
      }
    }
    function kt(W) {
      T.value = W;
    }
    async function H(W) {
      var ue;
      T.value = null;
      const M = F.value && (F.value.workflows.new.length > 0 || F.value.workflows.modified.length > 0 || F.value.workflows.deleted.length > 0 || F.value.has_changes);
      pe.value = {
        title: M ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: M ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((ue = W.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: M ? Qt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: M,
        onConfirm: async () => {
          var Ne;
          pe.value = null, fe();
          const _e = ie(`Checking out ${W.short_hash || ((Ne = W.hash) == null ? void 0 : Ne.slice(0, 7))}...`, "info", 0), Re = await f(W.hash, M);
          Te(_e), Re.status === "success" ? ie("Restarting ComfyUI...", "success") : ie(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function ae(W) {
      const M = F.value && (F.value.workflows.new.length > 0 || F.value.workflows.modified.length > 0 || F.value.workflows.deleted.length > 0 || F.value.has_changes);
      pe.value = {
        title: M ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: M ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: M ? Qt() : void 0,
        warning: M ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: M ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          pe.value = null, fe();
          const ue = ie(`Switching to ${W}...`, "info", 0), _e = await l(W, M);
          Te(ue), _e.status === "success" ? ie("Restarting ComfyUI...", "success") : ie(_e.message || "Branch switch failed", "error");
        }
      };
    }
    async function A(W) {
      const M = ie(`Creating branch ${W}...`, "info", 0), ue = await v(W);
      Te(M), ue.status === "success" ? (ie(`Branch "${W}" created`, "success"), await Ee()) : ie(ue.message || "Failed to create branch", "error");
    }
    async function R(W, M = !1) {
      const ue = async (_e) => {
        var Ne;
        const Re = ie(`Deleting branch ${W}...`, "info", 0);
        try {
          const de = await m(W, _e);
          Te(Re), de.status === "success" ? (ie(`Branch "${W}" deleted`, "success"), await Ee()) : (Ne = de.message) != null && Ne.includes("not fully merged") ? pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              pe.value = null, await ue(!0);
            }
          } : ie(de.message || "Failed to delete branch", "error");
        } catch (de) {
          Te(Re);
          const Pt = de instanceof Error ? de.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              pe.value = null, await ue(!0);
            }
          } : ie(Pt, "error");
        }
      };
      pe.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          pe.value = null, await ue(M);
        }
      };
    }
    async function q(W) {
      T.value = null;
      const M = prompt("Enter branch name:");
      if (M) {
        const ue = ie(`Creating branch ${M}...`, "info", 0), _e = await v(M, W.hash);
        Te(ue), _e.status === "success" ? (ie(`Branch "${M}" created from ${W.short_hash}`, "success"), await Ee()) : ie(_e.message || "Failed to create branch", "error");
      }
    }
    function fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ze() {
      pe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          pe.value = null, fe(), ie("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function it() {
      pe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          pe.value = null, ie("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Je(W) {
      E.value = !1, Q.value = W, we.value = !0;
    }
    async function Tt() {
      we.value = !1, re.value = !0, fe(), X.value = {
        progress: 10,
        state: rt(10),
        message: dt(10)
      };
      try {
        await i(Q.value), hs(), ys();
      } catch (W) {
        ct(), re.value = !1, ie(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), X.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function rt(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function dt(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[rt(W)] || "";
    }
    function hs() {
      if (C) return;
      let W = 10;
      const M = 60, ue = 5e3, _e = 100, Re = (M - W) / (ue / _e);
      C = window.setInterval(() => {
        if (W += Re, W >= M && (W = M, ct()), X.value.progress < M) {
          const Ne = Math.floor(W);
          X.value = {
            progress: Ne,
            state: rt(Ne),
            message: dt(Ne)
          };
        }
      }, _e);
    }
    function ct() {
      C && (clearInterval(C), C = null);
    }
    function ys() {
      L || (L = window.setInterval(async () => {
        try {
          let W = await P.getStatus();
          if ((!W || W.state === "idle") && (W = await I()), !W)
            return;
          const M = W.progress || 0;
          M >= 60 && ct();
          const ue = Math.max(M, X.value.progress), _e = W.state && W.state !== "idle" && W.state !== "unknown", Re = _e ? W.state : rt(ue), Ne = _e && W.message || dt(ue);
          X.value = {
            state: Re,
            progress: ue,
            message: Ne
          }, W.state === "complete" ? (ct(), Dt(), re.value = !1, ie(`✓ Switched to ${Q.value}`, "success"), await Ee(), Q.value = "") : W.state === "rolled_back" ? (ct(), Dt(), re.value = !1, ie("Switch failed, restored previous environment", "warning"), Q.value = "") : W.state === "critical_failure" && (ct(), Dt(), re.value = !1, ie(`Critical error during switch: ${W.message}`, "error"), Q.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function Dt() {
      ct(), L && (clearInterval(L), L = null);
    }
    function ws() {
      we.value = !1, Q.value = "";
    }
    async function ks() {
      Ge.value = !1, await Ee(), ie("✓ Changes committed", "success");
    }
    async function bs() {
      Fe.value = !1;
      const W = ie("Syncing environment...", "info", 0);
      try {
        const M = await b("skip", !0);
        if (Te(W), M.status === "success") {
          const ue = [];
          M.nodes_installed.length && ue.push(`${M.nodes_installed.length} installed`), M.nodes_removed.length && ue.push(`${M.nodes_removed.length} removed`);
          const _e = ue.length ? `: ${ue.join(", ")}` : "";
          ie(`✓ Environment synced${_e}`, "success"), await Ee();
        } else {
          const ue = M.errors.length ? M.errors.join("; ") : M.message;
          ie(`Sync failed: ${ue}`, "error");
        }
      } catch (M) {
        Te(W), ie(`Sync error: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
      }
    }
    async function _s(W) {
      $e.value = W, te.value = !0, ee.value = { state: "creating", message: `Creating environment '${W.name}'...` };
      try {
        const M = await $(W);
        M.status === "started" ? $s() : M.status === "error" && (te.value = !1, ie(`Failed to create environment: ${M.message}. Check debug logs for details.`, "error"), $e.value = null);
      } catch (M) {
        te.value = !1, ie(`Error creating environment: ${M instanceof Error ? M.message : "Unknown error"}. Check debug logs.`, "error"), $e.value = null;
      }
    }
    function $s() {
      ye || (ye = window.setInterval(async () => {
        var W;
        try {
          const M = await x();
          ee.value = { state: M.state, message: M.message }, M.state === "complete" ? (Yt(), te.value = !1, ie(`✓ Environment '${M.environment_name}' created`, "success"), await Ee(), ne.value && await ne.value.loadEnvironments(), (W = $e.value) != null && W.switch_after && M.environment_name && await Je(M.environment_name), $e.value = null) : M.state === "error" && (Yt(), te.value = !1, ie(`Failed to create environment: ${M.error || M.message}. Check debug logs.`, "error"), $e.value = null);
        } catch (M) {
          console.error("Failed to poll create progress:", M);
        }
      }, 2e3));
    }
    function Yt() {
      ye && (clearInterval(ye), ye = null);
    }
    async function Cs(W) {
      var M;
      if (((M = O.value) == null ? void 0 : M.name) === W) {
        ie("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      pe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${W}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          pe.value = null;
          try {
            const ue = await k(W);
            ue.status === "success" ? (ie(`Environment "${W}" deleted`, "success"), await Ee(), ne.value && await ne.value.loadEnvironments()) : ie(ue.message || "Failed to delete environment", "error");
          } catch (ue) {
            ie(`Error deleting environment: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Qt() {
      if (!F.value) return [];
      const W = [], M = F.value.workflows;
      return M.new.length && W.push(`${M.new.length} new workflow(s)`), M.modified.length && W.push(`${M.modified.length} modified workflow(s)`), M.deleted.length && W.push(`${M.deleted.length} deleted workflow(s)`), W;
    }
    return Se(Ee), (W, M) => {
      var ue, _e, Re, Ne;
      return s(), o("div", U1, [
        e("div", B1, [
          e("div", F1, [
            M[27] || (M[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            F.value ? (s(), o("div", A1)) : c("", !0)
          ]),
          e("div", V1, [
            e("button", {
              class: se(["icon-btn", { spinning: D.value }]),
              onClick: Ee,
              title: "Refresh"
            }, [...M[28] || (M[28] = [
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
              onClick: M[0] || (M[0] = (de) => n("close")),
              title: "Close"
            }, [...M[29] || (M[29] = [
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
        e("div", W1, [
          e("div", { class: "env-switcher-header" }, [
            M[30] || (M[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ze
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: it
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: M[1] || (M[1] = (de) => ke("environments", "all-envs"))
          }, [
            F.value ? (s(), o("div", G1, [
              e("span", null, a(((ue = O.value) == null ? void 0 : ue.name) || ((_e = F.value) == null ? void 0 : _e.environment) || "Loading..."), 1),
              e("span", j1, "(" + a(F.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            M[31] || (M[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", H1, [
          e("div", q1, [
            e("div", K1, [
              M[32] || (M[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "status" && Be.value === "this-env" }]),
                onClick: M[2] || (M[2] = (de) => ke("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "workflows" }]),
                onClick: M[3] || (M[3] = (de) => ke("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "models-env" }]),
                onClick: M[4] || (M[4] = (de) => ke("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "branches" }]),
                onClick: M[5] || (M[5] = (de) => ke("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "history" }]),
                onClick: M[6] || (M[6] = (de) => ke("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "nodes" }]),
                onClick: M[7] || (M[7] = (de) => ke("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "debug-env" }]),
                onClick: M[8] || (M[8] = (de) => ke("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            M[35] || (M[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", J1, [
              M[33] || (M[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "environments" }]),
                onClick: M[9] || (M[9] = (de) => ke("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "model-index" }]),
                onClick: M[10] || (M[10] = (de) => ke("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "settings" }]),
                onClick: M[11] || (M[11] = (de) => ke("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "debug-workspace" }]),
                onClick: M[12] || (M[12] = (de) => ke("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            M[36] || (M[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Y1, [
              M[34] || (M[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "export" }]),
                onClick: M[13] || (M[13] = (de) => ke("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "import" }]),
                onClick: M[14] || (M[14] = (de) => ke("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: me.value === "remotes" }]),
                onClick: M[15] || (M[15] = (de) => ke("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Q1, [
            U.value ? (s(), o("div", X1, a(U.value), 1)) : !F.value && me.value === "status" ? (s(), o("div", Z1, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              me.value === "status" ? (s(), S(sa, {
                key: 0,
                status: F.value,
                onSwitchBranch: st,
                onCommitChanges: M[16] || (M[16] = (de) => Ge.value = !0),
                onSyncEnvironment: M[17] || (M[17] = (de) => Fe.value = !0),
                onViewWorkflows: M[18] || (M[18] = (de) => ke("workflows", "this-env")),
                onViewHistory: M[19] || (M[19] = (de) => ke("history", "this-env")),
                onViewDebug: M[20] || (M[20] = (de) => ke("debug-env", "this-env"))
              }, null, 8, ["status"])) : me.value === "workflows" ? (s(), S(ou, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: j,
                onRefresh: Ee
              }, null, 512)) : me.value === "models-env" ? (s(), S(Bu, {
                key: 2,
                onNavigate: at
              })) : me.value === "branches" ? (s(), S(ha, {
                key: 3,
                branches: N.value,
                current: ((Re = F.value) == null ? void 0 : Re.branch) || null,
                onSwitch: ae,
                onCreate: A,
                onDelete: R
              }, null, 8, ["branches", "current"])) : me.value === "history" ? (s(), S(Ea, {
                key: 4,
                commits: z.value,
                onSelect: kt,
                onCheckout: H
              }, null, 8, ["commits"])) : me.value === "nodes" ? (s(), S(Im, {
                key: 5,
                onOpenNodeManager: Ke
              })) : me.value === "debug-env" ? (s(), S(bf, { key: 6 })) : me.value === "environments" ? (s(), S(ug, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ne,
                onSwitch: Je,
                onCreate: _s,
                onDelete: Cs
              }, null, 512)) : me.value === "model-index" ? (s(), S(am, {
                key: 8,
                onRefresh: Ee
              })) : me.value === "settings" ? (s(), S(hf, { key: 9 })) : me.value === "debug-workspace" ? (s(), S(wf, { key: 10 })) : me.value === "export" ? (s(), S(bg, { key: 11 })) : me.value === "import" ? (s(), S(Jp, { key: 12 })) : me.value === "remotes" ? (s(), S(Qv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        T.value ? (s(), S(vh, {
          key: 0,
          commit: T.value,
          onClose: M[21] || (M[21] = (de) => T.value = null),
          onCheckout: H,
          onCreateBranch: q
        }, null, 8, ["commit"])) : c("", !0),
        pe.value ? (s(), S(yh, {
          key: 1,
          title: pe.value.title,
          message: pe.value.message,
          details: pe.value.details,
          warning: pe.value.warning,
          confirmLabel: pe.value.confirmLabel,
          cancelLabel: pe.value.cancelLabel,
          secondaryLabel: pe.value.secondaryLabel,
          secondaryAction: pe.value.secondaryAction,
          destructive: pe.value.destructive,
          onConfirm: pe.value.onConfirm,
          onCancel: M[22] || (M[22] = (de) => pe.value = null),
          onSecondary: pe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        p(f1, {
          show: we.value,
          "from-environment": ((Ne = O.value) == null ? void 0 : Ne.name) || "unknown",
          "to-environment": Q.value,
          onConfirm: Tt,
          onClose: ws
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ge.value && F.value ? (s(), S(ms, {
          key: 2,
          status: F.value,
          "as-modal": !0,
          onClose: M[23] || (M[23] = (de) => Ge.value = !1),
          onCommitted: ks
        }, null, 8, ["status"])) : c("", !0),
        Fe.value && F.value ? (s(), S(O1, {
          key: 3,
          show: Fe.value,
          "mismatch-details": {
            missing_nodes: F.value.comparison.missing_nodes,
            extra_nodes: F.value.comparison.extra_nodes
          },
          onConfirm: bs,
          onClose: M[24] || (M[24] = (de) => Fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        p(E1, {
          show: re.value,
          state: X.value.state,
          progress: X.value.progress,
          message: X.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        te.value ? (s(), o("div", ey, [
          e("div", ty, [
            M[39] || (M[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", sy, [
              M[37] || (M[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", oy, a(ee.value.message), 1),
              M[38] || (M[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        E.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: M[26] || (M[26] = Ce((de) => E.value = !1, ["self"]))
        }, [
          e("div", ny, [
            e("div", ay, [
              M[41] || (M[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: M[25] || (M[25] = (de) => E.value = !1)
              }, [...M[40] || (M[40] = [
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
            e("div", ly, [
              M[42] || (M[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", iy, [
                (s(!0), o(V, null, Z(G.value, (de) => (s(), o("div", {
                  key: de.name,
                  class: se(["env-item", { current: de.is_current }])
                }, [
                  e("div", ry, [
                    e("div", dy, [
                      e("span", cy, a(de.is_current ? "●" : "○"), 1),
                      e("span", uy, a(de.name), 1),
                      de.current_branch ? (s(), o("span", my, "(" + a(de.current_branch) + ")", 1)) : c("", !0),
                      de.is_current ? (s(), o("span", vy, "CURRENT")) : c("", !0)
                    ]),
                    e("div", fy, a(de.workflow_count) + " workflows • " + a(de.node_count) + " nodes ", 1)
                  ]),
                  de.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Pt) => Je(de.name)
                  }, " SWITCH ", 8, gy))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", py, [
          p(Ms, { name: "toast" }, {
            default: r(() => [
              (s(!0), o(V, null, Z(le.value, (de) => (s(), o("div", {
                key: de.id,
                class: se(["toast", de.type])
              }, [
                e("span", hy, a(wt(de.type)), 1),
                e("span", yy, a(de.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ky = /* @__PURE__ */ Y(wy, [["__scopeId", "data-v-97ffaacd"]]), by = { class: "item-header" }, _y = { class: "item-info" }, $y = { class: "filename" }, Cy = { class: "metadata" }, xy = { class: "size" }, Sy = {
  key: 0,
  class: "type"
}, Iy = { class: "item-actions" }, Ey = {
  key: 0,
  class: "progress-section"
}, My = { class: "progress-bar" }, Ty = { class: "progress-stats" }, zy = { class: "downloaded" }, Ly = { class: "speed" }, Ry = {
  key: 0,
  class: "eta"
}, Ny = {
  key: 1,
  class: "status-msg paused"
}, Dy = {
  key: 2,
  class: "status-msg queued"
}, Py = {
  key: 3,
  class: "status-msg completed"
}, Oy = {
  key: 4,
  class: "status-msg failed"
}, Uy = {
  key: 0,
  class: "retries"
}, By = /* @__PURE__ */ J({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function d(f) {
      if (f === 0) return "?";
      const v = f / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const v = Math.floor(f / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (f, v) => (s(), o("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", by, [
        e("div", _y, [
          e("div", $y, a(t.item.filename), 1),
          e("div", Cy, [
            e("span", xy, a(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", Sy, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", Iy, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Ey, [
        e("div", My, [
          e("div", {
            class: "progress-fill",
            style: Xe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Ty, [
          e("span", zy, a(d(t.item.downloaded)) + " / " + a(d(t.item.size)), 1),
          e("span", Ly, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Ry, a(g(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Ny, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Dy, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Py, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Oy, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Uy, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Y(By, [["__scopeId", "data-v-2110df65"]]), Fy = { class: "queue-title" }, Ay = { class: "count" }, Vy = { class: "queue-actions" }, Wy = { class: "action-label" }, Gy = {
  key: 0,
  class: "overall-progress"
}, jy = { class: "progress-bar" }, Hy = {
  key: 0,
  class: "current-mini"
}, qy = { class: "filename" }, Ky = { class: "speed" }, Jy = {
  key: 1,
  class: "queue-content"
}, Yy = {
  key: 0,
  class: "section"
}, Qy = {
  key: 1,
  class: "section"
}, Xy = { class: "section-header" }, Zy = { class: "section-label paused" }, ew = { class: "items-list" }, tw = {
  key: 2,
  class: "section"
}, sw = { class: "section-header" }, ow = { class: "section-label" }, nw = { class: "items-list" }, aw = {
  key: 3,
  class: "section"
}, lw = { class: "section-header" }, iw = { class: "section-label" }, rw = { class: "items-list" }, dw = {
  key: 4,
  class: "section"
}, cw = { class: "section-header" }, uw = { class: "section-label failed" }, mw = { class: "items-list" }, vw = /* @__PURE__ */ J({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: d,
      completedItems: h,
      failedItems: g,
      pausedItems: f,
      hasItems: v,
      activeCount: l,
      cancelDownload: m,
      retryDownload: w,
      resumeDownload: i,
      resumeAllPaused: I,
      removeItem: $,
      clearCompleted: x
    } = Mt(), k = _(!1);
    let b = null;
    Rt(
      () => ({
        active: l.value,
        failed: g.value.length,
        paused: f.value.length,
        completed: h.value.length
      }),
      (N, G) => {
        b && (clearTimeout(b), b = null);
        const O = N.active === 0 && N.failed === 0 && N.paused === 0 && N.completed > 0, D = G && (G.active > 0 || G.paused > 0);
        O && D && (b = setTimeout(() => {
          x(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = B(() => {
      var O;
      if (u.items.length === 0) return 0;
      const N = h.value.length, G = ((O = n.value) == null ? void 0 : O.progress) || 0;
      return Math.round((N + G / 100) / u.items.length * 100);
    });
    function F(N) {
      m(N);
    }
    function z(N) {
      return N === 0 ? "" : `${(N / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (N, G) => (s(), S(Ie, { to: "body" }, [
      ge(v) ? (s(), o("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !k.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (O) => k.value = !k.value)
        }, [
          e("div", Fy, [
            G[4] || (G[4] = e("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Ay, "(" + a(ge(l)) + "/" + a(ge(u).items.length) + ")", 1)
          ]),
          e("div", Vy, [
            e("span", Wy, a(k.value ? "minimize" : "expand"), 1)
          ])
        ]),
        k.value ? (s(), o("div", Jy, [
          ge(n) ? (s(), o("div", Yy, [
            G[6] || (G[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            p($t, {
              item: ge(n),
              onCancel: G[1] || (G[1] = (O) => F(ge(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ge(f).length > 0 ? (s(), o("div", Qy, [
            e("div", Xy, [
              e("span", Zy, "Paused (" + a(ge(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...O) => ge(I) && ge(I)(...O))
              }, "Resume All")
            ]),
            e("div", ew, [
              (s(!0), o(V, null, Z(ge(f), (O) => (s(), S($t, {
                key: O.id,
                item: O,
                onResume: (D) => ge(i)(O.id),
                onRemove: (D) => ge($)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ge(d).length > 0 ? (s(), o("div", tw, [
            e("div", sw, [
              e("span", ow, "Queued (" + a(ge(d).length) + ")", 1)
            ]),
            e("div", nw, [
              (s(!0), o(V, null, Z(ge(d), (O) => (s(), S($t, {
                key: O.id,
                item: O,
                onCancel: (D) => F(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ge(h).length > 0 ? (s(), o("div", aw, [
            e("div", lw, [
              e("span", iw, "Completed (" + a(ge(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...O) => ge(x) && ge(x)(...O))
              }, "Clear")
            ]),
            e("div", rw, [
              (s(!0), o(V, null, Z(ge(h).slice(0, 3), (O) => (s(), S($t, {
                key: O.id,
                item: O,
                onRemove: (D) => ge($)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ge(g).length > 0 ? (s(), o("div", dw, [
            e("div", cw, [
              e("span", uw, "Failed (" + a(ge(g).length) + ")", 1)
            ]),
            e("div", mw, [
              (s(!0), o(V, null, Z(ge(g), (O) => (s(), S($t, {
                key: O.id,
                item: O,
                onRetry: (D) => ge(w)(O.id),
                onRemove: (D) => ge($)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", Gy, [
          e("div", jy, [
            e("div", {
              class: "progress-fill",
              style: Xe({ width: `${P.value}%` })
            }, null, 4)
          ]),
          ge(n) ? (s(), o("div", Hy, [
            e("span", qy, a(ge(n).filename), 1),
            e("span", Ky, a(z(ge(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), fw = /* @__PURE__ */ Y(vw, [["__scopeId", "data-v-60751cfa"]]), gw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', pw = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', hw = {
  comfy: gw,
  phosphor: pw
}, Kt = "comfy", vs = "comfygit-theme";
let ut = null, fs = Kt;
function yw() {
  try {
    const t = localStorage.getItem(vs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Kt;
}
function gs(t = Kt) {
  ut && ut.remove(), ut = document.createElement("style"), ut.id = "comfygit-theme-styles", ut.setAttribute("data-theme", t), ut.textContent = hw[t], document.head.appendChild(ut), document.body.setAttribute("data-comfygit-theme", t), fs = t;
  try {
    localStorage.setItem(vs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function ww() {
  return fs;
}
function kw(t) {
  gs(t);
}
const Jt = document.createElement("link");
Jt.rel = "stylesheet";
Jt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Jt);
const bw = yw();
gs(bw);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), kw(t);
  },
  getTheme: () => {
    const t = ww();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ae = null, Oe = null, It = null, Ct = null, ss = null;
const pt = _(null);
async function zt() {
  var t;
  if (!((t = gt) != null && t.api)) return null;
  try {
    const u = await gt.api.fetchApi("/v2/comfygit/status");
    u.ok && (pt.value = await u.json());
  } catch {
  }
}
function _w() {
  if (!pt.value) return !1;
  const t = pt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || pt.value.has_changes;
}
function $w() {
  Ae && Ae.remove(), Ae = document.createElement("div"), Ae.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ae.appendChild(t), Ae.addEventListener("click", (d) => {
    d.target === Ae && At();
  });
  const u = (d) => {
    d.key === "Escape" && (At(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), jt({
    render: () => Ht(ky, {
      onClose: At,
      onStatusUpdate: (d) => {
        pt.value = d, Et();
      }
    })
  }).mount(t), document.body.appendChild(Ae);
}
function At() {
  Ae && (Ae.remove(), Ae = null);
}
function Cw(t) {
  xt(), Oe = document.createElement("div"), Oe.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Oe.style.position = "fixed", Oe.style.top = `${u.bottom + 8}px`, Oe.style.right = `${window.innerWidth - u.right}px`, Oe.style.zIndex = "10001";
  const n = (h) => {
    Oe && !Oe.contains(h.target) && h.target !== t && (xt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const d = (h) => {
    h.key === "Escape" && (xt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), It = jt({
    render: () => Ht(ms, {
      status: pt.value,
      onClose: xt,
      onCommitted: () => {
        xt(), zt().then(Et);
      }
    })
  }), It.mount(Oe), document.body.appendChild(Oe);
}
function xt() {
  It && (It.unmount(), It = null), Oe && (Oe.remove(), Oe = null);
}
function xw() {
  Ct || (Ct = document.createElement("div"), Ct.className = "comfygit-download-queue-root", ss = jt({
    render: () => Ht(fw)
  }), ss.mount(Ct), document.body.appendChild(Ct), console.log("[ComfyGit] Model download queue mounted"));
}
let Ye = null;
function Et() {
  if (!Ye) return;
  const t = Ye.querySelector(".commit-indicator");
  t && (t.style.display = _w() ? "block" : "none");
}
const ps = document.createElement("style");
ps.textContent = `
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
document.head.appendChild(ps);
gt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = $w, Ye = document.createElement("button"), Ye.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ye.innerHTML = 'Commit <span class="commit-indicator"></span>', Ye.title = "Quick Commit", Ye.onclick = () => Cw(Ye), t.appendChild(u), t.appendChild(Ye), (g = (h = gt.menu) == null ? void 0 : h.settingsGroup) != null && g.element && (gt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), xw();
    const { loadPendingDownloads: n } = Mt();
    n(), await zt(), Et(), setInterval(async () => {
      await zt(), Et();
    }, 3e4);
    const d = gt.api;
    if (d) {
      let f = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, v = function() {
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", m.appendChild(w);
        const i = document.createElement("button");
        i.textContent = "Refresh", i.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, i.onmouseover = () => i.style.background = "var(--comfy-input-bg)", i.onmouseout = () => i.style.background = "var(--comfy-menu-bg)", i.onclick = () => f(), m.appendChild(i);
        const I = document.createElement("button");
        I.textContent = "×", I.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => m.remove(), m.appendChild(I), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      d.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: w, workflow_name: i } = m.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${i}`), await zt(), Et();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (m) => {
        const w = m.detail != null;
        w && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : v()), l = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
