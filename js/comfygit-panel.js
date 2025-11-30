import { app as Tt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as c, createElementVNode as e, renderSlot as _e, createBlock as E, resolveDynamicComponent as ys, normalizeClass as le, withCtx as r, toDisplayString as a, createVNode as k, createTextVNode as w, computed as L, Fragment as A, renderList as ee, normalizeStyle as pt, ref as _, onMounted as Ae, watch as bt, Teleport as je, withModifiers as Pe, Transition as mo, createSlots as qt, withKeys as _t, reactive as rs, onUnmounted as Ps, readonly as vo, unref as ve, withDirectives as Ve, vModelText as Vt, vModelRadio as ts, vModelCheckbox as ns, nextTick as fo, vModelSelect as zt, TransitionGroup as go, createApp as ds, h as cs } from "vue";
const po = { class: "panel-layout" }, ho = {
  key: 0,
  class: "panel-layout-header"
}, yo = {
  key: 1,
  class: "panel-layout-search"
}, wo = { class: "panel-layout-content" }, ko = {
  key: 2,
  class: "panel-layout-footer"
}, bo = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (l, n) => (s(), o("div", po, [
      l.$slots.header ? (s(), o("div", ho, [
        _e(l.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      l.$slots.search ? (s(), o("div", yo, [
        _e(l.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", wo, [
        _e(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (s(), o("div", ko, [
        _e(l.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Z = (t, l) => {
  const n = t.__vccOpts || t;
  for (const [i, y] of l)
    n[i] = y;
  return n;
}, Ye = /* @__PURE__ */ Z(bo, [["__scopeId", "data-v-21565df9"]]), _o = {
  key: 0,
  class: "panel-title-prefix"
}, $o = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Co = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (l, n) => (s(), E(ys(`h${t.level}`), {
      class: le(["panel-title", t.variant])
    }, {
      default: r(() => [
        t.showPrefix ? (s(), o("span", _o, a(t.prefix), 1)) : (s(), o("span", $o)),
        _e(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xo = /* @__PURE__ */ Z(Co, [["__scopeId", "data-v-c3875efc"]]), So = ["title"], Io = ["width", "height"], Eo = /* @__PURE__ */ X({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => l.$emit("click"))
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
      ])], 8, Io))
    ], 8, So));
  }
}), Ds = /* @__PURE__ */ Z(Eo, [["__scopeId", "data-v-6fc7f16d"]]), Mo = { class: "header-left" }, To = {
  key: 0,
  class: "header-actions"
}, zo = /* @__PURE__ */ X({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: le(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Mo, [
        k(xo, { "show-prefix": t.showPrefix }, {
          default: r(() => [
            w(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Ds, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => l.$emit("info-click"))
        })) : c("", !0)
      ]),
      l.$slots.actions ? (s(), o("div", To, [
        _e(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ Z(zo, [["__scopeId", "data-v-55a62cd6"]]), Ro = {
  key: 0,
  class: "section-title-count"
}, Lo = {
  key: 1,
  class: "section-title-icon"
}, Po = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), E(ys(`h${t.level}`), {
      class: le(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && l.$emit("click"))
    }, {
      default: r(() => [
        _e(l.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ro, "(" + a(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (s(), o("span", Lo, a(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ot = /* @__PURE__ */ Z(Po, [["__scopeId", "data-v-559361eb"]]), Do = { class: "status-grid" }, No = { class: "status-grid__columns" }, Uo = { class: "status-grid__column" }, Bo = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Fo = { class: "status-grid__title" }, Ao = {
  key: 0,
  class: "status-grid__footer"
}, Vo = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (l, n) => (s(), o("div", Do, [
      e("div", No, [
        e("div", Uo, [
          e("h4", Bo, a(t.leftTitle), 1),
          _e(l.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Fo, a(t.rightTitle), 1),
          _e(l.$slots, "right", {}, void 0, !0)
        ])
      ]),
      l.$slots.footer ? (s(), o("div", Ao, [
        _e(l.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Wo = /* @__PURE__ */ Z(Vo, [["__scopeId", "data-v-73b7ba3f"]]), Go = {
  key: 0,
  class: "status-item__icon"
}, jo = {
  key: 1,
  class: "status-item__count"
}, Ho = { class: "status-item__label" }, qo = /* @__PURE__ */ X({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, n = L(() => `status-item--${l.variant}`);
    return (i, y) => (s(), o("div", {
      class: le(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Go, a(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (s(), o("span", jo, a(t.count), 1)) : c("", !0),
      e("span", Ho, a(t.label), 1)
    ], 2));
  }
}), dt = /* @__PURE__ */ Z(qo, [["__scopeId", "data-v-6f929183"]]), Ko = { class: "issue-card__header" }, Yo = { class: "issue-card__icon" }, Qo = { class: "issue-card__title" }, Xo = {
  key: 0,
  class: "issue-card__content"
}, Zo = {
  key: 0,
  class: "issue-card__description"
}, Jo = {
  key: 1,
  class: "issue-card__items"
}, en = {
  key: 2,
  class: "issue-card__actions"
}, tn = /* @__PURE__ */ X({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const l = t, n = L(() => `issue-card--${l.severity}`);
    return (i, y) => (s(), o("div", {
      class: le(["issue-card", n.value])
    }, [
      e("div", Ko, [
        e("span", Yo, a(t.icon), 1),
        e("h4", Qo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Xo, [
        t.description ? (s(), o("p", Zo, a(t.description), 1)) : c("", !0),
        _e(i.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (s(), o("div", Jo, [
        (s(!0), o(A, null, ee(t.items, (g, m) => (s(), o("div", {
          key: m,
          class: "issue-card__item"
        }, [
          y[0] || (y[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : c("", !0),
      i.$slots.actions ? (s(), o("div", en, [
        _e(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Z(tn, [["__scopeId", "data-v-df6aa348"]]), sn = ["type", "disabled"], on = {
  key: 0,
  class: "spinner"
}, nn = /* @__PURE__ */ X({
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
    return (l, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: le(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => l.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", on)) : c("", !0),
      t.loading ? c("", !0) : _e(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, sn));
  }
}), se = /* @__PURE__ */ Z(nn, [["__scopeId", "data-v-772abe47"]]), an = { class: "empty-state" }, ln = {
  key: 0,
  class: "empty-icon"
}, rn = { class: "empty-message" }, dn = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (l, n) => (s(), o("div", an, [
      t.icon ? (s(), o("div", ln, a(t.icon), 1)) : c("", !0),
      e("p", rn, a(t.message), 1),
      t.actionLabel ? (s(), E(se, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => l.$emit("action"))
      }, {
        default: r(() => [
          w(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), rt = /* @__PURE__ */ Z(dn, [["__scopeId", "data-v-4466284f"]]), cn = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (l, n) => (s(), o("span", {
      class: le(["detail-label"]),
      style: pt({ minWidth: t.minWidth })
    }, [
      _e(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ss = /* @__PURE__ */ Z(cn, [["__scopeId", "data-v-75e9eeb8"]]), un = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (l, n) => (s(), o("span", {
      class: le(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      _e(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ Z(un, [["__scopeId", "data-v-2f186e4c"]]), mn = { class: "detail-row" }, vn = /* @__PURE__ */ X({
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
    return (l, n) => (s(), o("div", mn, [
      k(ss, { "min-width": t.labelMinWidth }, {
        default: r(() => [
          w(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(gs, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: r(() => [
          w(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : _e(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ue = /* @__PURE__ */ Z(vn, [["__scopeId", "data-v-ef15664a"]]), fn = { class: "modal-header" }, gn = { class: "modal-body" }, pn = { class: "status-section" }, hn = {
  key: 0,
  class: "status-section"
}, yn = { class: "section-header-row" }, wn = {
  key: 0,
  class: "workflow-group"
}, kn = { class: "workflow-group-header" }, bn = { class: "workflow-group-title" }, _n = { class: "workflow-list" }, $n = { class: "workflow-name" }, Cn = { class: "workflow-issue" }, xn = {
  key: 1,
  class: "workflow-group"
}, Sn = { class: "workflow-group-header" }, In = { class: "workflow-group-title" }, En = { class: "workflow-list" }, Mn = { class: "workflow-name" }, Tn = { class: "workflow-issue" }, zn = {
  key: 2,
  class: "workflow-group"
}, Rn = { class: "workflow-group-header" }, Ln = { class: "workflow-group-title" }, Pn = { class: "workflow-list" }, Dn = { class: "workflow-name" }, Nn = {
  key: 3,
  class: "workflow-group"
}, Un = { class: "workflow-group-header" }, Bn = { class: "workflow-group-title" }, On = { class: "workflow-list" }, Fn = { class: "workflow-name" }, An = {
  key: 4,
  class: "workflow-group"
}, Vn = { class: "workflow-group-header" }, Wn = { class: "workflow-group-title" }, Gn = { class: "workflow-list" }, jn = { class: "workflow-name" }, Hn = {
  key: 5,
  class: "workflow-group"
}, qn = { class: "workflow-group-title" }, Kn = { class: "expand-icon" }, Yn = {
  key: 0,
  class: "workflow-list"
}, Qn = { class: "workflow-name" }, Xn = {
  key: 1,
  class: "status-section"
}, Zn = {
  key: 0,
  class: "change-group"
}, Jn = { class: "change-group-header" }, ea = { class: "change-group-title" }, ta = { class: "change-list" }, sa = { class: "node-name" }, oa = {
  key: 0,
  class: "dev-badge"
}, na = {
  key: 1,
  class: "change-group"
}, aa = { class: "change-group-header" }, la = { class: "change-group-title" }, ia = { class: "change-list" }, ra = { class: "node-name" }, da = {
  key: 0,
  class: "dev-badge"
}, ca = {
  key: 2,
  class: "change-group"
}, ua = { class: "change-list" }, ma = { class: "change-item" }, va = { class: "node-name" }, fa = {
  key: 3,
  class: "change-group"
}, ga = {
  key: 2,
  class: "status-section"
}, pa = { class: "section-header-row" }, ha = {
  key: 0,
  class: "drift-item"
}, ya = { class: "drift-list" }, wa = {
  key: 0,
  class: "drift-list-more"
}, ka = {
  key: 1,
  class: "drift-item"
}, ba = { class: "drift-list" }, _a = {
  key: 0,
  class: "drift-list-more"
}, $a = {
  key: 2,
  class: "drift-item"
}, Ca = {
  key: 3,
  class: "drift-item"
}, xa = {
  key: 3,
  class: "status-section"
}, Sa = { class: "info-box" }, Ia = { class: "drift-list" }, Ea = {
  key: 0,
  class: "drift-list-more"
}, Ma = {
  key: 4,
  class: "status-section"
}, Ta = { class: "warning-box" }, za = {
  key: 5,
  class: "empty-state-inline"
}, Ra = { class: "modal-actions" }, La = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const l = t, n = _(!1);
    Ae(() => {
      console.log("StatusDetailModal mounted, initial show value:", l.show);
    }), bt(() => l.show, (b, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", b);
    }, { immediate: !0 });
    const i = L(() => {
      var b, C, R;
      return ((R = (C = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : R.filter(
        (W) => W.status === "broken" && W.sync_state === "synced"
      )) || [];
    }), y = L(() => {
      var b, C, R;
      return ((R = (C = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : R.filter(
        (W) => W.status === "broken" && W.sync_state !== "synced"
      )) || [];
    }), g = L(() => {
      var b, C, R;
      return ((R = (C = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : C.synced) == null ? void 0 : R.filter((W) => {
        var $, z, T;
        const p = (T = (z = ($ = l.status) == null ? void 0 : $.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : T.find((I) => I.name === W);
        return !p || p.status !== "broken";
      })) || [];
    }), m = L(() => {
      var b, C, R, W, p;
      return (b = l.status) != null && b.workflows ? (((C = l.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((R = l.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((W = l.status.workflows.deleted) == null ? void 0 : W.length) ?? 0) > 0 || (((p = l.status.workflows.synced) == null ? void 0 : p.length) ?? 0) > 0 : !1;
    }), v = L(() => {
      var C, R, W;
      const b = (C = l.status) == null ? void 0 : C.git_changes;
      return b ? (((R = b.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((W = b.nodes_removed) == null ? void 0 : W.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), d = L(() => {
      var b, C, R, W, p, $;
      return !m.value && !v.value && ((C = (b = l.status) == null ? void 0 : b.comparison) == null ? void 0 : C.is_synced) && (((R = l.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && ((($ = (p = (W = l.status) == null ? void 0 : W.comparison) == null ? void 0 : p.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), u = L(() => {
      var C, R;
      const b = (R = (C = l.status) == null ? void 0 : C.git_changes) == null ? void 0 : R.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function f(b) {
      return typeof b == "string" ? b : b.name;
    }
    function h(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, C) => {
      var R, W, p, $, z, T, I, V, K, te, P, x, M, B, U, ne, $e, J, j, F, S, ae;
      return s(), E(je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (oe) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", fn, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (oe) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", gn, [
              e("div", pn, [
                k(ot, { level: "4" }, {
                  default: r(() => [...C[8] || (C[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Ue, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (s(), o("div", hn, [
                e("div", yn, [
                  k(ot, { level: "4" }, {
                    default: r(() => [...C[9] || (C[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (oe) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", wn, [
                  e("div", kn, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", bn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", _n, [
                    (s(!0), o(A, null, ee(i.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", $n, a(oe.name), 1),
                      e("span", Cn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                y.value.length ? (s(), o("div", xn, [
                  e("div", Sn, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", In, "BROKEN (UNCOMMITTED) (" + a(y.value.length) + ")", 1)
                  ]),
                  e("div", En, [
                    (s(!0), o(A, null, ee(y.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Mn, a(oe.name), 1),
                      e("span", Tn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (W = (R = t.status.workflows) == null ? void 0 : R.new) != null && W.length ? (s(), o("div", zn, [
                  e("div", Rn, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ln, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Pn, [
                    (s(!0), o(A, null, ee(t.status.workflows.new, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Dn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                ($ = (p = t.status.workflows) == null ? void 0 : p.modified) != null && $.length ? (s(), o("div", Nn, [
                  e("div", Un, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Bn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(A, null, ee(t.status.workflows.modified, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (z = t.status.workflows) == null ? void 0 : z.deleted) != null && T.length ? (s(), o("div", An, [
                  e("div", Vn, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Wn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Gn, [
                    (s(!0), o(A, null, ee(t.status.workflows.deleted, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", jn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                g.value.length ? (s(), o("div", Hn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (oe) => n.value = !n.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", qn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Kn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Yn, [
                    (s(!0), o(A, null, ee(g.value, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Qn, a(oe), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              v.value ? (s(), o("div", Xn, [
                k(ot, { level: "4" }, {
                  default: r(() => [...C[16] || (C[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (I = t.status.git_changes) == null ? void 0 : I.nodes_added) != null && V.length ? (s(), o("div", Zn, [
                  e("div", Jn, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ea, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ta, [
                    (s(!0), o(A, null, ee(t.status.git_changes.nodes_added, (oe) => (s(), o("div", {
                      key: f(oe),
                      class: "change-item"
                    }, [
                      e("span", sa, a(f(oe)), 1),
                      h(oe) ? (s(), o("span", oa, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (te = (K = t.status.git_changes) == null ? void 0 : K.nodes_removed) != null && te.length ? (s(), o("div", na, [
                  e("div", aa, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", la, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ia, [
                    (s(!0), o(A, null, ee(t.status.git_changes.nodes_removed, (oe) => (s(), o("div", {
                      key: f(oe),
                      class: "change-item"
                    }, [
                      e("span", ra, a(f(oe)), 1),
                      h(oe) ? (s(), o("span", da, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = t.status.git_changes) != null && P.workflow_changes ? (s(), o("div", ca, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ua, [
                    e("div", ma, [
                      e("span", va, a(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", fa, [...C[20] || (C[20] = [
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
              (M = t.status.comparison) != null && M.is_synced ? c("", !0) : (s(), o("div", ga, [
                e("div", pa, [
                  k(ot, { level: "4" }, {
                    default: r(() => [...C[21] || (C[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (oe) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (U = (B = t.status.comparison) == null ? void 0 : B.missing_nodes) != null && U.length ? (s(), o("div", ha, [
                  k(Ue, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ya, [
                    (s(!0), o(A, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", wa, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                ($e = (ne = t.status.comparison) == null ? void 0 : ne.extra_nodes) != null && $e.length ? (s(), o("div", ka, [
                  k(Ue, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ba, [
                    (s(!0), o(A, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", _a, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (j = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && j.length ? (s(), o("div", $a, [
                  k(Ue, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (F = t.status.comparison) != null && F.packages_in_sync ? c("", !0) : (s(), o("div", Ca, [
                  k(Ue, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && ae.length ? (s(), o("div", xa, [
                k(ot, { level: "4" }, {
                  default: r(() => [...C[23] || (C[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sa, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ia, [
                  (s(!0), o(A, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (s(), o("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + a(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ea, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Ma, [
                k(ot, { level: "4" }, {
                  default: r(() => [...C[25] || (C[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ta, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              d.value ? (s(), o("div", za, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", Ra, [
              k(se, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (oe) => b.$emit("close"))
              }, {
                default: r(() => [...C[29] || (C[29] = [
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
}), Pa = /* @__PURE__ */ Z(La, [["__scopeId", "data-v-c67eed17"]]), Da = { class: "health-section-header" }, Na = { class: "suggestions-content" }, Ua = { class: "suggestions-text" }, Ba = { style: { "margin-top": "var(--cg-space-3)" } }, Oa = {
  key: 1,
  class: "no-issues-text"
}, Fa = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: l, emit: n }) {
    const i = t, y = _(!1), g = _(!1);
    function m() {
      y.value = !0;
    }
    function v() {
      y.value = !1, u("view-workflows");
    }
    function d() {
      y.value = !1, u("view-nodes");
    }
    const u = n, f = _(!1), h = L(() => {
      const B = i.status.workflows.analyzed || [], U = B.filter(
        (ne) => ne.unresolved_models_count > 0 || ne.ambiguous_models_count > 0
      );
      return U.length === 0 && i.status.missing_models_count > 0 ? B.filter((ne) => ne.sync_state === "synced") : U;
    });
    function b() {
      const B = h.value;
      B.length !== 0 && (f.value = !0, u("repair-missing-models", B.map((U) => U.name)));
    }
    function C() {
      f.value = !1;
    }
    l({ resetRepairingState: C });
    const R = L(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), W = L(() => i.status.has_changes), p = L(() => {
      const B = i.status.git_changes;
      return B.nodes_added.length > 0 || B.nodes_removed.length > 0 || B.workflow_changes;
    }), $ = L(() => i.status.has_changes || R.value), z = L(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), T = L(() => i.status.git_changes.has_other_changes), I = L(() => {
      var B;
      return ((B = i.status.workflows.analyzed) == null ? void 0 : B.filter((U) => U.status === "broken")) || [];
    }), V = L(() => {
      var B;
      return ((B = i.status.workflows.analyzed) == null ? void 0 : B.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), K = L(() => I.value.length > 0), te = L(() => K.value || V.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), P = L(() => {
      const B = [];
      return i.status.workflows.new.length > 0 && B.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && B.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && B.push(`${i.status.workflows.deleted.length} deleted`), B.length > 0 ? `${B.join(", ")} workflow${B.length === 1 && !B[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), x = L(() => {
      var ne, $e;
      const B = [], U = i.status.comparison;
      return (ne = U.missing_nodes) != null && ne.length && B.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), ($e = U.extra_nodes) != null && $e.length && B.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), B.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${B.join(" and ")}.`;
    }), M = L(() => {
      var ne, $e;
      const B = [], U = i.status.comparison;
      return (ne = U.extra_nodes) != null && ne.length && (U.extra_nodes.slice(0, 3).forEach((J) => {
        B.push(`Untracked: ${J}`);
      }), U.extra_nodes.length > 3 && B.push(`...and ${U.extra_nodes.length - 3} more untracked`)), ($e = U.missing_nodes) != null && $e.length && (U.missing_nodes.slice(0, 3).forEach((J) => {
        B.push(`Missing: ${J}`);
      }), U.missing_nodes.length > 3 && B.push(`...and ${U.missing_nodes.length - 3} more missing`)), B;
    });
    return (B, U) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, { title: "STATUS" })
        ]),
        content: r(() => [
          i.setupState === "no_workspace" ? (s(), E(at, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (ne) => B.$emit("start-setup"))
              }, {
                default: r(() => [...U[13] || (U[13] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(at, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (ne) => B.$emit("view-environments"))
              }, {
                default: r(() => [...U[14] || (U[14] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(at, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (ne) => B.$emit("create-environment"))
              }, {
                default: r(() => [...U[15] || (U[15] = [
                  w(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (ne) => g.value = !0),
            onMouseleave: U[5] || (U[5] = (ne) => g.value = !1)
          }, [
            e("div", Da, [
              k(ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: r(() => [...U[16] || (U[16] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(mo, { name: "fade" }, {
                default: r(() => [
                  g.value ? (s(), E(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: m
                  }, {
                    default: r(() => [...U[17] || (U[17] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            k(Wo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, qt({
              left: r(() => [
                t.status.workflows.new.length ? (s(), E(dt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (s(), E(dt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (s(), E(dt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                k(dt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: R.value
                }, null, 8, ["count", "separator"])
              ]),
              right: r(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(dt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(dt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(dt, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                T.value ? (s(), E(dt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                W.value && !p.value && !T.value ? (s(), E(dt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                W.value ? c("", !0) : (s(), E(dt, {
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
                fn: r(() => [
                  U[19] || (U[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Na, [
                    e("span", Ua, a(P.value), 1),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (ne) => B.$emit("commit-changes"))
                    }, {
                      default: r(() => [...U[18] || (U[18] = [
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
          t.status.is_detached_head ? (s(), E(at, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (ne) => B.$emit("create-branch"))
              }, {
                default: r(() => [...U[20] || (U[20] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", Ba, [
            k(ot, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: r(() => [...U[21] || (U[21] = [
                w(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            te.value ? (s(), o(A, { key: 0 }, [
              I.value.length > 0 ? (s(), E(at, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((ne) => `${ne.name} — ${ne.issue_summary}`)
              }, {
                actions: r(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (ne) => B.$emit("view-workflows"))
                  }, {
                    default: r(() => [...U[22] || (U[22] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              V.value.length > 0 ? (s(), E(at, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((ne) => `${ne.name} — ${ne.models_needing_path_sync_count} model path${ne.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: r(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (ne) => B.$emit("view-workflows"))
                  }, {
                    default: r(() => [...U[23] || (U[23] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !K.value ? (s(), E(at, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: r(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: f.value,
                    onClick: b
                  }, {
                    default: r(() => [
                      w(a(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (ne) => B.$emit("view-workflows"))
                  }, {
                    default: r(() => [...U[24] || (U[24] = [
                      w(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (s(), E(at, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: x.value,
                items: M.value
              }, {
                actions: r(() => [
                  k(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: m
                  }, {
                    default: r(() => [...U[25] || (U[25] = [
                      w(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (ne) => B.$emit("view-nodes"))
                  }, {
                    default: r(() => [...U[26] || (U[26] = [
                      w(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(at, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: r(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (ne) => B.$emit("view-nodes"))
                  }, {
                    default: r(() => [...U[27] || (U[27] = [
                      w(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : c("", !0)
            ], 64)) : $.value ? (s(), o("span", Oa, "No issues")) : (s(), E(rt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Pa, {
        show: y.value,
        status: t.status,
        onClose: U[12] || (U[12] = (ne) => y.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: d
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Aa = /* @__PURE__ */ Z(Fa, [["__scopeId", "data-v-0398c02e"]]), Va = ["type", "value", "placeholder", "disabled"], Wa = /* @__PURE__ */ X({
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
  setup(t, { expose: l, emit: n }) {
    const i = t, y = n, g = _(null);
    function m(v) {
      const d = v.target.value;
      y("update:modelValue", d);
    }
    return Ae(() => {
      i.autoFocus && g.value && g.value.focus();
    }), l({
      focus: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.blur();
      }
    }), (v, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: le(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        d[0] || (d[0] = _t((u) => v.$emit("enter"), ["enter"])),
        d[1] || (d[1] = _t((u) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (u) => v.$emit("focus")),
      onBlur: d[3] || (d[3] = (u) => v.$emit("blur"))
    }, null, 42, Va));
  }
}), as = /* @__PURE__ */ Z(Wa, [["__scopeId", "data-v-0380d08f"]]), Ga = { class: "branch-create-form" }, ja = { class: "form-actions" }, Ha = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: l }) {
    const n = l, i = _(""), y = L(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      y.value && (n("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", n("cancel");
    }
    return (v, d) => (s(), o("div", Ga, [
      k(as, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", ja, [
        k(se, {
          variant: "primary",
          size: "sm",
          disabled: !y.value,
          onClick: g
        }, {
          default: r(() => [...d[1] || (d[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(se, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: r(() => [...d[2] || (d[2] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), qa = /* @__PURE__ */ Z(Ha, [["__scopeId", "data-v-7c500394"]]), Ka = { class: "branch-list-item__indicator" }, Ya = { class: "branch-list-item__name" }, Qa = {
  key: 0,
  class: "branch-list-item__actions"
}, Xa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Za = /* @__PURE__ */ X({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: le(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && l.$emit("click"))
    }, [
      e("span", Ka, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Ya, a(t.branchName), 1),
      l.$slots.actions || t.showCurrentLabel ? (s(), o("div", Qa, [
        _e(l.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Xa, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ Z(Za, [["__scopeId", "data-v-c6581a24"]]), el = {
  key: 2,
  class: "branch-list"
}, tl = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: l }) {
    const n = l, i = _(!1);
    function y(m) {
      n("create", m), g();
    }
    function g() {
      i.value = !1;
    }
    return (m, v) => (s(), E(Ye, null, {
      header: r(() => [
        k(Qe, { title: "BRANCHES" }, {
          actions: r(() => [
            i.value ? c("", !0) : (s(), E(se, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (d) => i.value = !0)
            }, {
              default: r(() => [...v[1] || (v[1] = [
                w(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: r(() => [
        i.value ? (s(), E(qa, {
          key: 0,
          onCreate: y,
          onCancel: g
        })) : c("", !0),
        t.branches.length === 0 ? (s(), E(rt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", el, [
          (s(!0), o(A, null, ee(t.branches, (d) => (s(), E(Ja, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: r(() => [
              d.is_current ? c("", !0) : (s(), E(se, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => m.$emit("delete", d.name)
              }, {
                default: r(() => [...v[2] || (v[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? c("", !0) : (s(), E(se, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => m.$emit("switch", d.name)
              }, {
                default: r(() => [...v[3] || (v[3] = [
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
}), sl = /* @__PURE__ */ Z(tl, [["__scopeId", "data-v-86784ddd"]]), ol = { class: "commit-list" }, nl = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (l, n) => (s(), o("div", ol, [
      _e(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), al = /* @__PURE__ */ Z(nl, [["__scopeId", "data-v-8c5ee761"]]), ll = { class: "commit-hash" }, il = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const l = t, n = L(() => l.hash.slice(0, l.length));
    return (i, y) => (s(), o("span", ll, a(n.value), 1));
  }
}), Ns = /* @__PURE__ */ Z(il, [["__scopeId", "data-v-7c333cc6"]]), rl = { class: "commit-message" }, dl = { class: "commit-date" }, cl = /* @__PURE__ */ X({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, i = l;
    function y() {
      n.clickable && i("click");
    }
    return (g, m) => (s(), o("div", {
      class: le(["commit-item", { clickable: t.clickable }]),
      onClick: y
    }, [
      k(Ns, { hash: t.hash }, null, 8, ["hash"]),
      e("span", rl, a(t.message), 1),
      e("span", dl, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = Pe(() => {
        }, ["stop"]))
      }, [
        _e(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ul = /* @__PURE__ */ Z(cl, [["__scopeId", "data-v-dd7c621b"]]), ml = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (l, n) => (s(), E(Ye, null, {
      header: r(() => [
        k(Qe, { title: "HISTORY" })
      ]),
      content: r(() => [
        t.commits.length === 0 ? (s(), E(rt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(al, { key: 1 }, {
          default: r(() => [
            (s(!0), o(A, null, ee(t.commits, (i) => (s(), E(ul, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (y) => l.$emit("select", i)
            }, {
              actions: r(() => [
                k(se, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (y) => l.$emit("checkout", i),
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
}), vl = /* @__PURE__ */ Z(ml, [["__scopeId", "data-v-981c3c64"]]), Re = rs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
function ws() {
  const t = L(() => Re.hasWorkspace ? Re.hasEnvironments ? Re.isManaged ? "managed" : "unmanaged" : "empty_workspace" : "no_workspace");
  function l(m) {
    Re.hasWorkspace = m, m || (Re.hasEnvironments = !1, Re.isManaged = !1);
  }
  function n(m) {
    Re.hasEnvironments = m, m || (Re.isManaged = !1), m && !Re.hasWorkspace && (Re.hasWorkspace = !0);
  }
  function i(m) {
    Re.isManaged = m, m && (Re.hasWorkspace = !0, Re.hasEnvironments = !0);
  }
  function y(m) {
    Re.hasLegacyManager = m;
  }
  function g(m) {
    switch (m) {
      case "no_workspace":
        Re.hasWorkspace = !1, Re.hasEnvironments = !1, Re.isManaged = !1;
        break;
      case "empty_workspace":
        Re.hasWorkspace = !0, Re.hasEnvironments = !1, Re.isManaged = !1;
        break;
      case "unmanaged":
        Re.hasWorkspace = !0, Re.hasEnvironments = !0, Re.isManaged = !1;
        break;
      case "managed":
        Re.hasWorkspace = !0, Re.hasEnvironments = !0, Re.isManaged = !0;
        break;
    }
  }
  return {
    state: Re,
    setupState: t,
    setHasWorkspace: l,
    setHasEnvironments: n,
    setIsManaged: i,
    setHasLegacyManager: y,
    setPreset: g
  };
}
const Es = /* @__PURE__ */ new Set(), Ms = [
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
  ...Array(12).fill(null).map((t, l) => ({
    name: `synced-workflow-${l + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + l,
    model_count: 1 + l % 3,
    sync_state: "synced"
  }))
], fl = {
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
}, Us = [
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
], gl = [
  ...Us,
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
], Yt = [
  {
    name: "ComfyUI-Manager",
    installed: !0,
    registry_id: "comfyui-manager",
    repository: "https://github.com/ltdrdata/ComfyUI-Manager",
    version: "2.8.5",
    source: "registry",
    download_url: null,
    description: "ComfyUI extension for managing custom nodes",
    used_in_workflows: ["flux-dev-img2img.json", "sdxl-lightning.json", "flux-schnell.json"]
  },
  {
    name: "comfyui_flux",
    installed: !0,
    registry_id: "comfyui_flux",
    repository: "https://github.com/black-forest-labs/flux",
    version: "1.2.0",
    source: "registry",
    download_url: null,
    description: "FLUX.1 model support for ComfyUI",
    used_in_workflows: ["flux-dev-img2img.json", "flux-schnell.json"]
  },
  {
    name: "comfyui-controlnet-aux",
    installed: !0,
    registry_id: "comfyui-controlnet-aux",
    repository: "https://github.com/Fannovel16/comfyui_controlnet_aux",
    version: "1.0.3",
    source: "registry",
    download_url: null,
    description: "ControlNet auxiliary preprocessors",
    used_in_workflows: ["controlnet-pose.json"]
  },
  {
    name: "rgthree-comfy",
    installed: !1,
    registry_id: "rgthree-comfy",
    repository: "https://github.com/rgthree/rgthree-comfy",
    version: null,
    source: "registry",
    download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip",
    description: "Power user nodes for ComfyUI workflows",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-image-saver",
    installed: !1,
    registry_id: "comfyui-image-saver",
    repository: "https://github.com/girish946/ComfyUI-Image-Saver",
    version: null,
    source: "registry",
    download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip",
    description: "Advanced image saving options",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-impact-pack",
    installed: !0,
    registry_id: "comfyui-impact-pack",
    repository: "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    version: "4.12.1",
    source: "registry",
    download_url: null,
    description: "Custom nodes for ComfyUI impact pack",
    used_in_workflows: ["sd15-upscale.json"]
  },
  {
    name: "ComfyUI-KJNodes",
    installed: !0,
    registry_id: "comfyui-kjnodes",
    repository: "https://github.com/kijai/ComfyUI-KJNodes",
    version: "1.1.2",
    source: "registry",
    download_url: null,
    description: "KJ utility nodes collection",
    used_in_workflows: []
  },
  {
    name: "custom-dev-nodes",
    installed: !0,
    registry_id: void 0,
    repository: void 0,
    version: "0.1.0-dev",
    source: "development",
    download_url: null,
    description: "Local development nodes",
    used_in_workflows: []
  },
  {
    name: "comfyui-easy-use",
    installed: !1,
    registry_id: "comfyui-easy-use",
    repository: "https://github.com/yolain/ComfyUI-Easy-Use",
    version: null,
    source: "registry",
    download_url: "https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip",
    description: "Simplified workflow nodes",
    used_in_workflows: ["sd15-upscale.json"]
  }
], pl = [
  {
    hash: "e719c9c",
    message: "refactor: Improve UI consistency and fix display issues",
    author: "Alex Katz",
    date: "2024-01-15T10:30:00Z",
    date_relative: "5 days ago"
  },
  {
    hash: "781a023",
    message: "refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic",
    author: "Alex Katz",
    date: "2024-01-14T15:20:00Z",
    date_relative: "6 days ago"
  },
  {
    hash: "19f7898",
    message: "Merge branch 'design/phosphor' into feature/comfygit-ui",
    author: "Alex Katz",
    date: "2024-01-13T09:15:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "426fe3c",
    message: "Merge branch 'feature/comfygit-ui' into main",
    author: "Alex Katz",
    date: "2024-01-12T14:45:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "8c21deb",
    message: "Add initial agpl 3 license",
    author: "Alex Katz",
    date: "2024-01-10T11:00:00Z",
    date_relative: "2 weeks ago"
  }
], Qt = [
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.core.environment",
    level: "INFO",
    func: "sync",
    line: "306",
    message: "Restored workflows from .cec/"
  },
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.managers.workflow_manager",
    level: "INFO",
    func: "restore_from_cec",
    line: "554",
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: "2025-11-23 13:07:40,286",
    name: "comfygit_core.core.environment",
    level: "DEBUG",
    func: "sync",
    line: "399",
    message: "User content symlinks configured"
  },
  {
    timestamp: "2025-11-23 13:07:42,130",
    name: "comfygit_core.managers.workflow_manager",
    level: "DEBUG",
    func: "resolve_workflow",
    line: "884",
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: "2025-11-23 13:07:42,157",
    name: "comfygit.command",
    level: "INFO",
    func: "log_command",
    line: "180",
    message: "Command 'env status' completed successfully"
  }
], ye = {
  // Environment Management
  getEnvironments: async () => (await ge(300), [
    {
      name: "production",
      is_current: !0,
      path: "~/comfygit/environments/production",
      workflow_count: 18,
      node_count: 45,
      model_count: 3,
      current_branch: "main",
      created_at: "2024-01-01T00:00:00Z",
      last_used: (/* @__PURE__ */ new Date()).toISOString(),
      last_commit: "e719c9c",
      last_commit_date: "2024-01-15T10:30:00Z"
    },
    {
      name: "testing",
      is_current: !1,
      path: "~/comfygit/environments/testing",
      workflow_count: 12,
      node_count: 32,
      model_count: 2,
      current_branch: "develop",
      created_at: "2024-01-05T00:00:00Z",
      last_used: new Date(Date.now() - 864e5 * 2).toISOString(),
      // 2 days ago
      last_commit: "426fe3c",
      last_commit_date: "2024-01-12T14:45:00Z"
    },
    {
      name: "experimental",
      is_current: !1,
      path: "~/comfygit/environments/experimental",
      workflow_count: 5,
      node_count: 18,
      model_count: 1,
      current_branch: "feature/new-nodes",
      created_at: "2024-01-10T00:00:00Z",
      last_used: new Date(Date.now() - 864e5).toISOString(),
      // 1 day ago
      last_commit: "781a023",
      last_commit_date: "2024-01-14T15:20:00Z"
    }
  ]),
  switchEnvironment: async (t) => {
    await ge(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, l, n) => {
    await ge(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${l}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (t) => {
    await ge(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ge(400), Ms),
  getWorkflowDetails: async (t) => (await ge(300), fl[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ge(800), {
    workflow_name: t,
    // Nodes resolved with confidence scores
    nodes_resolved: [
      {
        node_type: "ComfyUI-Flux",
        match_type: "exact",
        package_id: "comfyui_flux",
        match_confidence: 1,
        is_optional: !1,
        rank: 5,
        // Registry popularity
        versions: ["1.2.0", "1.1.0", "1.0.0"]
      }
    ],
    // Nodes that need installation
    nodes_unresolved: [
      {
        node_type: "RgthreeNodeSet",
        possible_matches: [
          {
            package_id: "rgthree-comfy",
            match_type: "fuzzy",
            match_confidence: 0.85,
            rank: 12
          }
        ]
      },
      {
        node_type: "ImageSaver",
        possible_matches: [
          {
            package_id: "comfyui-image-saver",
            match_type: "type_only",
            match_confidence: 0.7,
            rank: 45
          }
        ]
      }
    ],
    nodes_ambiguous: [],
    // Multiple equally-matched candidates
    // Models resolved
    models_resolved: [
      {
        workflow: t,
        filename: "flux1-dev-fp8.safetensors",
        resolved_model: {
          hash: "a11e2e7b",
          sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      },
      {
        workflow: t,
        filename: "clip_l.safetensors",
        resolved_model: {
          hash: "3e9f12a7",
          sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      }
    ],
    // Models that need downloading
    models_unresolved: [
      {
        workflow: t,
        filename: "flux_vae.safetensors",
        node_type: "VAELoader",
        node_id: "10",
        expected_category: "vae"
      }
    ],
    models_ambiguous: [],
    // Multiple models match same name
    // Download intents (models queued for download)
    download_results: [
      {
        model: "flux_vae.safetensors",
        status: "pending",
        source_url: null,
        // No source configured
        can_download: !1,
        estimated_size_mb: 335
      }
    ],
    // Summary fields
    has_issues: !0,
    // Has unresolved nodes and models
    has_download_intents: !0,
    summary: "Missing: 2 nodes, 1 model",
    // Installation plan preview
    nodes_to_install: ["rgthree-comfy", "comfyui-image-saver"],
    models_to_download: ["flux_vae.safetensors"],
    estimated_size_mb: 335,
    estimated_time_seconds: 120
  }),
  installWorkflowDeps: async (t, l, n) => {
    await ge(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${l}, models=${n}`);
  },
  setModelImportance: async (t, l, n) => {
    await ge(200), console.log(`[MOCK] Setting ${l} importance to ${n} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ge(350), Us),
  getWorkspaceModels: async () => (await ge(400), gl),
  getModelDetails: async (t) => (await ge(200), {
    filename: t,
    hash: "762871a9ab79bfa2",
    blake3: null,
    sha256: null,
    size: 173e8,
    category: "checkpoints",
    relative_path: `checkpoints/${t}`,
    last_seen: "2025-11-11 23:34:23",
    locations: [
      { path: `/workspace/models/checkpoints/${t}`, modified: "2024-08-03 13:16:22" }
    ],
    sources: []
  }),
  updateModelSource: async (t, l) => {
    await ge(300), Es.add(t), console.log(`[MOCK] Added source for ${t}: ${l}`);
  },
  deleteModel: async (t) => {
    await ge(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ge(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ge(350);
    const t = Yt.filter((n) => n.installed), l = Yt.filter((n) => !n.installed);
    return {
      nodes: Yt,
      total_count: Yt.length,
      installed_count: t.length,
      missing_count: l.length
    };
  },
  installNode: async (t) => {
    await ge(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ge(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ge(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ge(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ge(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, l) => (await ge(250), (t ? Qt.filter((i) => i.level === t) : Qt).slice(0, l || 100)),
  getWorkspaceLogs: async (t, l) => {
    await ge(300);
    const n = [...Qt, ...Qt.map((y) => ({
      ...y,
      name: "comfygit.workspace"
    }))];
    return (t ? n.filter((y) => y.level === t) : n).slice(0, l || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async () => {
    await ge(400);
    const { state: t } = ws();
    return {
      environment: "production",
      branch: "main",
      // Set to null to test detached HEAD
      is_detached_head: !1,
      // Set to true to test detached HEAD warning
      is_synced: !1,
      has_changes: !1,
      workflows: {
        new: ["img2img-basic.json", "controlnet-pose.json"],
        modified: ["flux-schnell.json"],
        deleted: [],
        synced: Ms.filter((l) => l.status === "synced").map((l) => l.name),
        total: 18,
        analyzed: [
          {
            name: "img2img-basic.json",
            sync_state: "new",
            status: "new",
            has_issues: !1,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "No issues",
            node_count: 8,
            model_count: 2
          },
          {
            name: "controlnet-pose.json",
            sync_state: "new",
            status: "broken",
            has_issues: !0,
            uninstalled_nodes: 1,
            unresolved_nodes_count: 1,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "1 unresolved node",
            node_count: 12,
            model_count: 3
          },
          {
            name: "flux-schnell.json",
            sync_state: "modified",
            status: "modified",
            has_issues: !1,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "No issues",
            node_count: 15,
            model_count: 4
          },
          {
            name: "sdxl-lightning.json",
            sync_state: "synced",
            status: "broken",
            has_issues: !0,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 2,
            unresolved_models_count: 1,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "2 unresolved nodes, 1 missing model",
            node_count: 20,
            model_count: 5,
            has_category_mismatch_issues: !1,
            models_with_category_mismatch_count: 0
          },
          // Category mismatch example - LoRA in wrong directory
          {
            name: "lora-wrong-dir.json",
            sync_state: "synced",
            status: "broken",
            has_issues: !0,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "1 model in wrong directory",
            node_count: 8,
            model_count: 2,
            has_category_mismatch_issues: !0,
            models_with_category_mismatch_count: 1
          },
          {
            name: "flux-dev-img2img.json",
            sync_state: "synced",
            status: "synced",
            has_issues: !1,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "No issues",
            node_count: 18,
            model_count: 3
          }
        ]
      },
      git_changes: {
        nodes_added: [],
        nodes_removed: [],
        workflow_changes: !1,
        has_other_changes: !1
      },
      comparison: {
        is_synced: !1,
        missing_nodes: ["rgthree-comfy", "comfyui-image-saver"],
        extra_nodes: []
      },
      missing_models_count: 1,
      has_legacy_manager: t.hasLegacyManager
    };
  },
  getCommitHistory: async (t = 10) => (await ge(300), pl.slice(0, t)),
  getBranches: async () => (await ge(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ge(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ge(300), {
    remotes: [
      {
        name: "origin",
        fetch_url: "https://github.com/comfyhub/comfygit-demo.git",
        push_url: "https://github.com/comfyhub/comfygit-demo.git",
        is_default: !0
      },
      {
        name: "upstream",
        fetch_url: "https://github.com/comfyhub/comfygit.git",
        push_url: "https://github.com/comfyhub/comfygit.git",
        is_default: !1
      }
    ],
    current_branch_tracking: {
      remote: "origin",
      branch: "main"
    }
  }),
  addRemote: async (t, l) => {
    await ge(400), console.log(`[MOCK] Adding remote: ${t} -> ${l}`);
  },
  removeRemote: async (t) => {
    await ge(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, l, n) => {
    await ge(400), console.log(`[MOCK] Updating remote ${t}: ${l}${n ? ` (push: ${n})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ge(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ge(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  /**
   * Get Pull Preview - Returns preview with optional workflow conflicts (V2)
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH workflow conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with workflow conflicts
   */
  getPullPreview: async (t) => {
    await ge(500);
    const l = {
      remote: t,
      branch: "main",
      commits_behind: 3,
      commits: [
        { hash: "abc1234", short_hash: "abc1234", message: "Add new workflow features", date: "2024-01-15T10:30:00Z", date_relative: "2 hours ago" },
        { hash: "def5678", short_hash: "def5678", message: "Update node dependencies", date: "2024-01-15T09:15:00Z", date_relative: "3 hours ago" },
        { hash: "ghi9012", short_hash: "ghi9012", message: "Fix model path handling", date: "2024-01-15T08:00:00Z", date_relative: "4 hours ago" }
      ],
      changes: {
        workflows: {
          added: ["new-workflow.json"],
          modified: ["flux-schnell.json", "sdxl-turbo.json"],
          deleted: []
        },
        nodes: {
          to_install: ["comfyui-animatediff", "comfyui-controlnet-aux"],
          to_remove: []
        },
        models: {
          referenced: ["flux1-dev.safetensors", "sdxl_base.safetensors"],
          count: 2
        }
      },
      has_uncommitted_changes: !1,
      can_pull: !0,
      block_reason: null
    };
    return t !== "upstream" ? {
      ...l,
      has_conflicts: !0,
      workflow_conflicts: [
        {
          name: "flux-schnell",
          conflict_type: "both_modified",
          base_hash: "abc12345",
          target_hash: "def67890"
        },
        {
          name: "sdxl-turbo",
          conflict_type: "both_modified",
          base_hash: "11111111",
          target_hash: "22222222"
        }
      ]
    } : {
      ...l,
      has_conflicts: !1,
      workflow_conflicts: []
    };
  },
  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (t, l) => {
    await ge(400);
    const n = l.some((g) => g.resolution === "take_base"), i = l.some((g) => g.resolution === "take_target");
    return n && i ? {
      is_compatible: !1,
      node_conflicts: [
        {
          node_id: "rgthree-comfy",
          node_name: "rgthree's ComfyUI Nodes",
          base_version: "2.0.0",
          target_version: "1.5.0",
          chosen_version: "1.5.0",
          chosen_reason: "Required by sdxl-turbo (theirs)",
          affected_workflows: [
            { name: "flux-schnell", source: "base", required_version: "2.0.0" },
            { name: "sdxl-turbo", source: "target", required_version: "1.5.0" }
          ]
        }
      ],
      warnings: []
    } : {
      is_compatible: !0,
      node_conflicts: [],
      warnings: i ? ["Model 'flux-dev.safetensors' has no download source"] : []
    };
  },
  /**
   * Pull from Remote - Execute pull with optional conflict resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (t, l) => (await ge(1500), console.log(`[MOCK] Pulling from ${t} with options:`, l), l.resolutions && Math.random() < 0.1 ? {
    status: "error",
    pull_output: "",
    sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
    rolled_back: !0,
    error: "Simulated sync failure - merge rolled back"
  } : {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: l.resolutions ? ["comfyui-animatediff"] : [],
      nodes_removed: [],
      models_queued: 0,
      errors: []
    },
    rolled_back: !1,
    message: "Pull completed successfully"
  }),
  /**
   * Get Push Preview
   * GET /v2/comfygit/remotes/{name}/push-preview
   */
  getPushPreview: async (t) => (await ge(400), {
    remote: t,
    branch: "main",
    commits_ahead: 2,
    commits: [
      { hash: "xyz1234", short_hash: "xyz1234", message: "Local workflow changes", date: "2024-01-15T11:00:00Z", date_relative: "1 hour ago" },
      { hash: "uvw5678", short_hash: "uvw5678", message: "Add new node configuration", date: "2024-01-15T10:45:00Z", date_relative: "1.5 hours ago" }
    ],
    has_uncommitted_changes: !1,
    remote_has_new_commits: !1,
    can_push: !0,
    needs_force: !1,
    block_reason: null
  }),
  /**
   * Push to Remote
   * POST /v2/comfygit/remotes/{name}/push
   */
  pushToRemote: async (t, l) => (await ge(1e3), console.log(`[MOCK] Pushing to ${t} with options:`, l), {
    status: "success",
    push_output: "Everything up-to-date",
    commits_pushed: 2,
    message: "Push completed successfully"
  }),
  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================
  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (t) => (await ge(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: t, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 2,
        nodes_ambiguous: 0,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 2: Only unresolved models (not found in index)
    "test-unresolved-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: t,
              node_id: "node4",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "custom_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 1,
        total_models: 2,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 2,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 3: Ambiguous nodes (multiple matching packages)
    "test-ambiguous-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: t, node_id: "node1" },
            options: [
              {
                package: { package_id: "comfyui-flux-official", title: "FLUX Official Nodes" },
                match_confidence: 0.95,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-community-nodes", title: "FLUX Community Pack" },
                match_confidence: 0.9,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "advanced-flux-toolkit", title: "Advanced FLUX Toolkit" },
                match_confidence: 0.85,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          },
          {
            reference: { node_type: "ImageEnhancer", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "comfyui-image-enhance", title: "Image Enhancement Suite" },
                match_confidence: 0.88,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "ultimate-image-toolkit", title: "Ultimate Image Toolkit" },
                match_confidence: 0.82,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "def456", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 2,
        total_models: 1,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 2,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 4: Ambiguous models (multiple files match the name)
    "test-ambiguous-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl_model.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "aaa111",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.95,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "bbb222",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.85,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_turbo.safetensors",
                  hash: "ccc333",
                  size: 67e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_turbo.safetensors"
                },
                match_confidence: 0.75,
                match_type: "fuzzy",
                has_download_source: !1
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 1,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 0,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 5: Complex mixed scenario (everything)
    "test-mixed-complex.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "flux-samplers-pro", title: "FLUX Samplers Pro" },
                match_confidence: 0.92,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-toolkit", title: "FLUX Toolkit" },
                match_confidence: 0.87,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node5",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "flux_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node6",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "ddd444",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.9,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "eee555",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.8,
                match_type: "fuzzy",
                has_download_source: !0
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 3,
        total_models: 3,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 1,
        models_unresolved: 1,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 6: All resolved (perfect workflow, no user input needed)
    "test-all-resolved.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: t, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
            model: { filename: "sdxl_vae.safetensors", hash: "ggg777", size: 335e6, category: "vae", relative_path: "vae/sdxl_vae.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 2,
        nodes_resolved: 3,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !1
      }
    }
  }[t] || {
    workflow: t,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: t },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: t, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: t, node_id: "node2" },
          options: [
            {
              package: { package_id: "flux-package-a", title: "FLUX Package A" },
              match_confidence: 0.92,
              match_type: "fuzzy",
              is_installed: !1
            },
            {
              package: { package_id: "flux-package-b", title: "FLUX Package B" },
              match_confidence: 0.85,
              match_type: "fuzzy",
              is_installed: !1
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: t,
            node_id: "node3",
            node_type: "CheckpointLoader",
            widget_name: "model",
            widget_value: "test_model.safetensors"
          },
          reason: "not_found_in_index"
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: !0
    }
  }),
  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (t, l, n) => {
    await ge(800);
    const i = [], y = [];
    return l.forEach((g, m) => {
      g.action === "install" && g.package_id && i.push(g.package_id);
    }), n.forEach((g, m) => {
      g.action === "download" && g.url ? y.push({
        filename: m,
        url: g.url,
        size: 65e8,
        target_path: g.target_path || `models/${m}`
      }) : g.action === "select" && g.selected_model && console.log(`[MOCK] Selected existing model: ${g.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: y,
      estimated_time_seconds: i.length * 30 + y.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, l = 10) => {
    await ge(400);
    const n = [
      {
        package_id: "comfyui-flux-official",
        match_confidence: 0.95,
        match_type: "fuzzy",
        description: "Official FLUX model support for ComfyUI with optimized samplers",
        repository: "https://github.com/black-forest-labs/flux-comfy",
        is_installed: !1
      },
      {
        package_id: "flux-advanced-toolkit",
        match_confidence: 0.88,
        match_type: "fuzzy",
        description: "Advanced FLUX tools including custom schedulers and samplers",
        repository: "https://github.com/community/flux-toolkit",
        is_installed: !1
      },
      {
        package_id: "comfyui-upscaler-pack",
        match_confidence: 0.82,
        match_type: "fuzzy",
        description: "Collection of upscaling nodes with various models",
        repository: "https://github.com/upscaler/comfyui-pack",
        is_installed: !1
      },
      {
        package_id: "ultimate-image-tools",
        match_confidence: 0.75,
        match_type: "partial",
        description: "Ultimate image processing toolkit for ComfyUI",
        repository: "https://github.com/tools/ultimate-image",
        is_installed: !0
      },
      {
        package_id: "comfyui-controlnet-aux",
        match_confidence: 0.7,
        match_type: "partial",
        description: "Auxiliary ControlNet preprocessors",
        repository: "https://github.com/fannovel16/controlnet-aux",
        is_installed: !0
      }
    ];
    return {
      results: n.slice(0, l),
      total: n.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, l = 10) => {
    await ge(400);
    const n = [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "abc123def456",
        size: 11725e6,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        match_confidence: 0.95
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "def456abc789",
        size: 65e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        match_confidence: 0.9
      },
      {
        filename: "sdxl_refiner_1.0.safetensors",
        hash: "ghi789jkl012",
        size: 61e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_refiner_1.0.safetensors",
        match_confidence: 0.85
      },
      {
        filename: "flux_vae.safetensors",
        hash: "mno345pqr678",
        size: 335e6,
        category: "vae",
        has_download_source: !1,
        relative_path: "vae/flux_vae.safetensors",
        match_confidence: 0.8
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "stu901vwx234",
        size: 145e7,
        category: "controlnet",
        has_download_source: !0,
        relative_path: "controlnet/controlnet_openpose.safetensors",
        match_confidence: 0.75
      }
    ];
    return {
      results: n.slice(0, l),
      total: n.length
    };
  },
  // Export Validation - shows warnings for models without sources
  validateExport: async () => {
    await ge(400);
    const l = [
      {
        filename: "sd_xl_base_1.0.safetensors",
        hash: "abc123def456",
        workflows: ["flux-dev-img2img.json", "sdxl-lightning.json"]
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "xyz789ghi012",
        workflows: ["pose-to-image.json"]
      },
      {
        filename: "custom_lora_v2.safetensors",
        hash: "lmn345opq678",
        workflows: ["flux-dev-img2img.json"]
      },
      {
        filename: "vae_ft_mse.pt",
        hash: "rst901uvw234",
        workflows: ["sdxl-lightning.json", "pose-to-image.json", "upscale-workflow.json"]
      }
    ].filter(
      (n) => !Es.has(n.hash)
    );
    return {
      can_export: !0,
      blocking_issues: [],
      warnings: {
        models_without_sources: l
      }
    };
  },
  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async () => (await ge(400), {
    can_export: !1,
    blocking_issues: [
      {
        type: "uncommitted_workflows",
        message: "Cannot export with uncommitted workflow changes",
        details: ["new-workflow.json", "modified-portrait.json", "another-change.json"]
      },
      {
        type: "unresolved_issues",
        message: "Cannot export - workflows have unresolved issues",
        details: []
      }
    ],
    warnings: {
      models_without_sources: []
    }
  }),
  exportEnvWithForce: async (t) => {
    await ge(800);
    const l = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      path: t || `/home/user/exports/production_export_${l}.tar.gz`,
      models_without_sources: 4
    };
  }
};
function ge(t) {
  return new Promise((l) => setTimeout(l, t));
}
function Nt() {
  return !0;
}
const Te = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, Me = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, Xt = [
  { id: "init_structure", endTime: 300, progress: 5, message: "Creating environment structure..." },
  { id: "resolve_version", endTime: 800, progress: 10, message: "Resolving ComfyUI version..." },
  { id: "clone_comfyui", endTime: 2800, progress: 25, message: "Cloning ComfyUI..." },
  { id: "configure_environment", endTime: 3300, progress: 30, message: "Configuring environment..." },
  { id: "create_venv", endTime: 4300, progress: 35, message: "Creating virtual environment..." },
  { id: "install_pytorch", endTime: 8300, progress: 70, message: "Installing PyTorch..." },
  { id: "configure_pytorch", endTime: 8800, progress: 75, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 11300, progress: 95, message: "Installing ComfyUI dependencies..." },
  { id: "finalize", endTime: 11800, progress: 100, message: "Finalizing environment..." }
];
function hl() {
  if (Te.initState === "idle" || Te.initState === "complete" || Te.initState === "error" || !Te.initStartTime) return;
  const t = Date.now() - Te.initStartTime;
  if (t < 2e3)
    Te.initState = "creating_workspace", Te.initProgress = Math.min(20, Math.floor(t / 100)), Te.initMessage = "Creating workspace structure...";
  else if (t < 4e3)
    Te.initState = "setting_models_dir", Te.initProgress = 20 + Math.floor((t - 2e3) / 200), Te.initMessage = "Configuring models directory...";
  else if (t < 8e3) {
    Te.initState = "scanning_models";
    const l = Math.floor((t - 4e3) / 50);
    Te.initProgress = 30 + Math.min(65, l);
    const n = Math.floor((t - 4e3) / 100);
    Te.initMessage = `Scanning models (${n}/42)...`;
  } else
    Te.initState = "complete", Te.initProgress = 100, Te.initMessage = "Complete! 42 models indexed", Te.modelsFound = 42, Te.initStartTime = null;
}
function yl() {
  if (Me.state === "idle" || Me.state === "complete" || Me.state === "error" || !Me.startTime) return;
  const t = Date.now() - Me.startTime;
  let l = !1;
  for (const n of Xt)
    if (t < n.endTime) {
      Me.phase = n.id, Me.message = n.message;
      const i = Xt.indexOf(n) - 1, y = i >= 0 ? Xt[i].endTime : 0, g = i >= 0 ? Xt[i].progress : 0, m = n.endTime - y, d = (t - y) / m;
      Me.progress = Math.floor(g + (n.progress - g) * d), l = !0;
      break;
    }
  l || (Me.state = "complete", Me.phase = "complete", Me.progress = 100, Me.message = `Environment '${Me.envName}' created successfully`, Me.startTime = null);
}
const De = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, Zt = [
  { id: "clone_comfyui", endTime: 2e3, progress: 15, message: "Cloning/restoring ComfyUI..." },
  { id: "extract_builtins", endTime: 2500, progress: 20, message: "Extracting builtin nodes..." },
  { id: "configure_pytorch", endTime: 3500, progress: 35, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 6e3, progress: 60, message: "Installing dependencies..." },
  { id: "sync_nodes", endTime: 7e3, progress: 70, message: "Syncing custom nodes..." },
  { id: "copy_workflows", endTime: 7500, progress: 80, message: "Copying workflows..." },
  { id: "resolve_models", endTime: 8e3, progress: 85, message: "Resolving models..." },
  { id: "download_models", endTime: 9500, progress: 95, message: "Downloading models..." },
  { id: "finalize", endTime: 1e4, progress: 100, message: "Finalizing environment..." }
];
function wl() {
  if (De.state !== "importing" || !De.startTime) return;
  const t = Date.now() - De.startTime;
  for (const l of Zt)
    if (t < l.endTime) {
      De.phase = l.id, De.message = l.message;
      const n = Zt.indexOf(l) - 1, i = n >= 0 ? Zt[n].endTime : 0, y = n >= 0 ? Zt[n].progress : 0, g = l.endTime - i, m = t - i;
      De.progress = Math.floor(y + (l.progress - y) * (m / g));
      return;
    }
  De.state = "complete", De.phase = "complete", De.progress = 100, De.message = `Environment '${De.envName}' imported successfully`, De.startTime = null;
}
function We() {
  const t = _(!1), l = _(null);
  async function n(q, ue) {
    var nt;
    if (!((nt = window.app) != null && nt.api))
      throw new Error("ComfyUI API not available");
    const Se = await window.app.api.fetchApi(q, ue);
    if (!Se.ok) {
      const kt = await Se.json().catch(() => ({}));
      throw new Error(kt.error || kt.message || `Request failed: ${Se.status}`);
    }
    return Se.json();
  }
  async function i(q = !1) {
    return ye.getStatus();
  }
  async function y(q, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ue })
    });
  }
  async function g(q = 10, ue = 0) {
    {
      const Se = await ye.getCommitHistory(q);
      return {
        commits: Se,
        total: Se.length,
        offset: ue
      };
    }
  }
  async function m(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function v() {
    return ye.validateExport();
  }
  async function d(q) {
    return ye.exportEnvWithForce(q);
  }
  async function u() {
    return ye.getBranches();
  }
  async function f(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function h(q, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ue })
    });
  }
  async function b(q, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ue })
    });
  }
  async function C(q, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ue })
    });
  }
  async function R(q, ue = !1) {
    return await ye.deleteBranch(q), { status: "success" };
  }
  async function W() {
    return ye.getEnvironments();
  }
  async function p(q) {
    return ye.switchEnvironment(q);
  }
  async function $() {
    return null;
  }
  async function z(q) {
    return Me.state = "creating", Me.phase = "init_structure", Me.progress = 0, Me.message = "Creating environment structure...", Me.startTime = Date.now(), Me.envName = q.name, console.log("[MOCK] Starting environment creation:", q), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function T() {
    return yl(), {
      state: Me.state,
      phase: Me.phase ?? void 0,
      progress: Me.progress,
      message: Me.message,
      environment_name: Me.state === "complete" && Me.envName || void 0,
      error: Me.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function I(q = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function V(q) {
    return await ye.deleteEnvironment(q), { status: "success" };
  }
  async function K(q = !1) {
    return ye.getWorkflows();
  }
  async function te(q) {
    return ye.getWorkflowDetails(q);
  }
  async function P(q) {
    return ye.resolveWorkflow(q);
  }
  async function x(q, ue, Se) {
    return await ye.installWorkflowDeps(q, ue, Se), { status: "success" };
  }
  async function M(q, ue, Se) {
    return ye.setModelImportance(q, ue, Se);
  }
  async function B() {
    return ye.getEnvironmentModels();
  }
  async function U() {
    return ye.getWorkspaceModels();
  }
  async function ne(q) {
    return ye.getModelDetails(q);
  }
  async function $e(q) {
    return console.log(`[MOCK] Opening file location: ${q}`), { status: "success" };
  }
  async function J(q, ue) {
    return await ye.updateModelSource(q, ue), { status: "success", source_type: "custom" };
  }
  async function j(q, ue) {
    return { status: "success" };
  }
  async function F(q) {
    return ye.deleteModel(q);
  }
  async function S(q) {
    return await ye.downloadModel(q), { status: "success" };
  }
  async function ae() {
    return { status: "success", changes: 0 };
  }
  async function oe() {
    return { path: "~/comfygit/models" };
  }
  async function ze(q) {
    return { status: "success", path: q, models_indexed: 10 };
  }
  async function Ce() {
    return ye.getConfig();
  }
  async function Be(q) {
    return ye.updateConfig(q);
  }
  async function we(q, ue) {
    return ye.getEnvironmentLogs(q, ue);
  }
  async function re(q, ue) {
    return ye.getWorkspaceLogs(q, ue);
  }
  async function ie() {
    return ye.getNodes();
  }
  async function Oe(q) {
    return { status: "success", message: `Node '${q}' tracked as development` };
  }
  async function Ne(q) {
    return await ye.installNode(q), { status: "success" };
  }
  async function ce(q) {
    return await ye.updateNode(q), { status: "success" };
  }
  async function H(q) {
    return await ye.uninstallNode(q), { status: "success" };
  }
  async function xe() {
    return ye.getRemotes();
  }
  async function ke(q, ue) {
    return await ye.addRemote(q, ue), { status: "success", remote_name: q };
  }
  async function Ee(q) {
    return await ye.removeRemote(q), { status: "success", remote_name: q };
  }
  async function be(q, ue, Se) {
    return await ye.updateRemoteUrl(q, ue, Se), { status: "success", remote_name: q };
  }
  async function pe(q) {
    return await ye.fetchRemote(q), { status: "success", remote_name: q };
  }
  async function He(q) {
    return ye.getRemoteSyncStatus(q);
  }
  async function $t(q = "skip", ue = !0) {
    return await new Promise((Se) => setTimeout(Se, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function mt(q, ue) {
    return ye.getPullPreview(q);
  }
  async function Fe(q, ue = {}) {
    return ye.pullFromRemote(q, ue);
  }
  async function Ct(q, ue) {
    return ye.getPushPreview(q);
  }
  async function wt(q, ue = {}) {
    return ye.pushToRemote(q, ue);
  }
  async function xt(q, ue) {
    return ye.validateMerge(q, ue);
  }
  async function vt(q) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const Se of q)
      try {
        await P(Se), ue.success++;
      } catch (nt) {
        ue.failed.push({
          name: Se,
          error: nt instanceof Error ? nt.message : "Unknown error"
        });
      }
    return ue;
  }
  async function St(q) {
    return await new Promise((ue) => setTimeout(ue, 500)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function ft(q) {
    return await new Promise((ue) => setTimeout(ue, 200)), q === "existing-env" ? { valid: !1, error: "Environment 'existing-env' already exists" } : q.includes("/") || q.includes(" ") ? { valid: !1, error: "Name contains invalid characters" } : { valid: !0, name: q };
  }
  async function Y(q, ue, Se, nt) {
    return await new Promise((kt) => setTimeout(kt, 300)), De.state = "importing", De.phase = null, De.progress = 0, De.message = `Importing environment '${ue}'...`, De.startTime = Date.now(), De.envName = ue, { status: "started", message: `Importing environment '${ue}'...` };
  }
  async function N() {
    return wl(), {
      state: De.state,
      phase: De.phase,
      progress: De.progress,
      message: De.message,
      environment_name: De.envName
    };
  }
  async function O() {
    {
      const { state: q, setupState: ue } = ws(), Se = [];
      return q.hasEnvironments && Se.push("mock-env-1", "mock-env-2"), Me.state === "complete" && Me.envName && (Se.includes(Me.envName) || Se.push(Me.envName)), {
        state: ue.value,
        workspace_path: q.hasWorkspace ? "~/comfygit" : null,
        default_path: "~/comfygit",
        environments: Se,
        current_environment: q.isManaged ? "mock-env-1" : null,
        detected_models_dir: "/mock/ComfyUI/models",
        cli_installed: !1,
        cli_path: null
      };
    }
  }
  async function Q(q) {
    return Te.initState = "creating_workspace", Te.initProgress = 0, Te.initMessage = "Starting workspace creation...", Te.initStartTime = Date.now(), Te.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", q), { status: "started", task_id: "mock-task-id" };
  }
  async function fe() {
    return hl(), {
      state: Te.initState,
      progress: Te.initProgress,
      message: Te.initMessage,
      models_found: Te.initState === "complete" ? Te.modelsFound : void 0,
      error: Te.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function Xe(q) {
    return await new Promise((ue) => setTimeout(ue, 200)), q.type === "workspace" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : q.type === "models" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.endsWith("ComfyUI") || q.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: q.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  return {
    isLoading: t,
    error: l,
    getStatus: i,
    commit: y,
    getHistory: g,
    exportEnv: m,
    validateExport: v,
    exportEnvWithForce: d,
    // Git Operations
    getBranches: u,
    getCommitDetail: f,
    checkout: h,
    createBranch: b,
    switchBranch: C,
    deleteBranch: R,
    // Environment Management
    getEnvironments: W,
    switchEnvironment: p,
    getSwitchProgress: $,
    createEnvironment: z,
    getCreateProgress: T,
    getComfyUIReleases: I,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: K,
    getWorkflowDetails: te,
    resolveWorkflow: P,
    installWorkflowDeps: x,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: B,
    getWorkspaceModels: U,
    getModelDetails: ne,
    openFileLocation: $e,
    addModelSource: J,
    removeModelSource: j,
    deleteModel: F,
    downloadModel: S,
    scanWorkspaceModels: ae,
    getModelsDirectory: oe,
    setModelsDirectory: ze,
    // Settings
    getConfig: Ce,
    updateConfig: Be,
    // Debug/Logs
    getEnvironmentLogs: we,
    getWorkspaceLogs: re,
    // Node Management
    getNodes: ie,
    trackNodeAsDev: Oe,
    installNode: Ne,
    updateNode: ce,
    uninstallNode: H,
    // Git Remotes
    getRemotes: xe,
    addRemote: ke,
    removeRemote: Ee,
    updateRemoteUrl: be,
    fetchRemote: pe,
    getRemoteSyncStatus: He,
    // Push/Pull
    getPullPreview: mt,
    pullFromRemote: Fe,
    getPushPreview: Ct,
    pushToRemote: wt,
    validateMerge: xt,
    // Environment Sync
    syncEnvironmentManually: $t,
    // Workflow Repair
    repairWorkflowModels: vt,
    // Import Operations
    previewTarballImport: St,
    validateEnvironmentName: ft,
    executeImport: Y,
    getImportProgress: N,
    // First-Time Setup
    getSetupStatus: O,
    initializeWorkspace: Q,
    getInitializeProgress: fe,
    validatePath: Xe
  };
}
async function Ut(t, l = {}, n = 5e3) {
  const i = new AbortController(), y = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...l,
      signal: i.signal
    });
    return clearTimeout(y), g;
  } catch (g) {
    throw clearTimeout(y), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Bs() {
  const t = _(null);
  async function l() {
    try {
      const m = await Ut(
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
    if (t.value || (t.value = await l()), !t.value)
      return null;
    try {
      const m = await Ut(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await l(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await l()), !t.value)
      return null;
    try {
      const m = await Ut(
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
  async function y() {
    if (t.value || (t.value = await l()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ut(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await l()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ut(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: l,
    checkHealth: n,
    getStatus: i,
    restart: y,
    kill: g
  };
}
const kl = { class: "base-modal-header" }, bl = {
  key: 0,
  class: "base-modal-title"
}, _l = { class: "base-modal-body" }, $l = {
  key: 0,
  class: "base-modal-loading"
}, Cl = {
  key: 1,
  class: "base-modal-error"
}, xl = {
  key: 0,
  class: "base-modal-footer"
}, Sl = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function y() {
      n.closeOnOverlayClick && i("close");
    }
    function g(m) {
      m.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ae(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Ps(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (m, v) => (s(), E(je, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: y
      }, [
        e("div", {
          class: le(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", kl, [
            _e(m.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", bl, a(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (d) => m.$emit("close"))
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
          e("div", _l, [
            t.loading ? (s(), o("div", $l, "Loading...")) : t.error ? (s(), o("div", Cl, a(t.error), 1)) : _e(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (s(), o("div", xl, [
            _e(m.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ Z(Sl, [["__scopeId", "data-v-8dab1081"]]), Il = ["type", "disabled"], El = {
  key: 0,
  class: "spinner"
}, Ml = /* @__PURE__ */ X({
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
    return (l, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: le(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => l.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", El)) : c("", !0),
      _e(l.$slots, "default", {}, void 0, !0)
    ], 10, Il));
  }
}), de = /* @__PURE__ */ Z(Ml, [["__scopeId", "data-v-f3452606"]]), Tl = {
  key: 0,
  class: "base-title-count"
}, zl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (l, n) => (s(), E(ys(`h${t.level}`), {
      class: le(["base-title", t.variant])
    }, {
      default: r(() => [
        _e(l.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Tl, "(" + a(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wt = /* @__PURE__ */ Z(zl, [["__scopeId", "data-v-5a01561d"]]), Rl = ["value", "disabled"], Ll = {
  key: 0,
  value: "",
  disabled: ""
}, Pl = ["value"], Dl = {
  key: 0,
  class: "base-select-error"
}, Nl = /* @__PURE__ */ X({
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
    function l(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, y) => (s(), o("div", {
      class: le(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: le(["base-select", { error: !!t.error }]),
        onChange: y[0] || (y[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Ll, a(t.placeholder), 1)) : c("", !0),
        (s(!0), o(A, null, ee(t.options, (g) => (s(), o("option", {
          key: l(g),
          value: l(g)
        }, a(n(g)), 9, Pl))), 128))
      ], 42, Rl),
      t.error ? (s(), o("span", Dl, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ul = /* @__PURE__ */ Z(Nl, [["__scopeId", "data-v-7436d745"]]), Bl = { class: "popover-header" }, Ol = { class: "popover-title" }, Fl = { class: "popover-content" }, Al = {
  key: 0,
  class: "popover-actions"
}, Vl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (l, n) => (s(), E(je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", Bl, [
            e("h4", Ol, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", Fl, [
            _e(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (s(), o("div", Al, [
            _e(l.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), ut = /* @__PURE__ */ Z(Vl, [["__scopeId", "data-v-42815ace"]]), Wl = { class: "detail-section" }, Gl = {
  key: 0,
  class: "empty-message"
}, jl = { class: "model-header" }, Hl = { class: "model-name" }, ql = { class: "model-details" }, Kl = { class: "model-row" }, Yl = { class: "model-row" }, Ql = { class: "label" }, Xl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Zl = { class: "node-list" }, Jl = ["onClick"], ei = {
  key: 1,
  class: "model-row"
}, ti = { class: "value" }, si = {
  key: 2,
  class: "model-row"
}, oi = { class: "value error" }, ni = {
  key: 0,
  class: "model-actions"
}, ai = { class: "detail-section" }, li = {
  key: 0,
  class: "empty-message"
}, ii = { class: "node-name" }, ri = {
  key: 0,
  class: "node-version"
}, di = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: l }) {
    const n = t, i = l, { getWorkflowDetails: y, setModelImportance: g, openFileLocation: m } = We(), v = _(null), d = _(!1), u = _(null), f = _(!1), h = _({}), b = _(!1), C = _(/* @__PURE__ */ new Set()), R = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function W(P) {
      switch (P) {
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
    function p(P) {
      switch (P) {
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
    function $(P) {
      if (!P.loaded_by || P.loaded_by.length === 0) return [];
      const x = P.hash || P.filename;
      return C.value.has(x) ? P.loaded_by : P.loaded_by.slice(0, 3);
    }
    function z(P) {
      return C.value.has(P);
    }
    function T(P) {
      C.value.has(P) ? C.value.delete(P) : C.value.add(P), C.value = new Set(C.value);
    }
    async function I() {
      d.value = !0, u.value = null;
      try {
        v.value = await y(n.workflowName);
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function V(P, x) {
      h.value[P] = x, f.value = !0;
    }
    async function K(P) {
      try {
        await m(P);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function te() {
      if (!f.value) {
        i("close");
        return;
      }
      d.value = !0, u.value = null;
      try {
        for (const [P, x] of Object.entries(h.value))
          await g(n.workflowName, P, x);
        i("refresh"), i("close");
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ae(I), (P, x) => (s(), o(A, null, [
      k(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: u.value || void 0,
        onClose: x[4] || (x[4] = (M) => i("close"))
      }, {
        body: r(() => [
          v.value ? (s(), o(A, { key: 0 }, [
            e("section", Wl, [
              k(Wt, { variant: "section" }, {
                default: r(() => [
                  w("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Gl, " No models used in this workflow ")) : c("", !0),
              (s(!0), o(A, null, ee(v.value.models, (M) => {
                var B;
                return s(), o("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  e("div", jl, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Hl, a(M.filename), 1)
                  ]),
                  e("div", ql, [
                    e("div", Kl, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: le(["value", W(M.status)])
                      }, a(p(M.status)), 3)
                    ]),
                    e("div", Yl, [
                      e("span", Ql, [
                        x[8] || (x[8] = w(" Importance: ", -1)),
                        k(Ds, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (U) => b.value = !0)
                        })
                      ]),
                      k(Ul, {
                        "model-value": h.value[M.filename] || M.importance,
                        options: R,
                        "onUpdate:modelValue": (U) => V(M.filename, U)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (s(), o("div", Xl, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Zl, [
                        (s(!0), o(A, null, ee($(M), (U, ne) => (s(), o("div", {
                          key: `${U.node_id}-${ne}`,
                          class: "node-reference"
                        }, a(U.node_type) + " (Node #" + a(U.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (U) => T(M.hash || M.filename)
                        }, a(z(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, Jl)) : c("", !0)
                      ])
                    ])) : c("", !0),
                    M.size_mb ? (s(), o("div", ei, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", ti, a(M.size_mb) + " MB", 1)
                    ])) : c("", !0),
                    M.has_category_mismatch ? (s(), o("div", si, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", oi, [
                        x[11] || (x[11] = w(" In ", -1)),
                        e("code", null, a(M.actual_category) + "/", 1),
                        x[12] || (x[12] = w(" but loader needs ", -1)),
                        e("code", null, a((B = M.expected_categories) == null ? void 0 : B[0]) + "/", 1)
                      ])
                    ])) : c("", !0)
                  ]),
                  M.status !== "available" ? (s(), o("div", ni, [
                    M.status === "downloadable" ? (s(), E(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (U) => i("resolve"))
                    }, {
                      default: r(() => [...x[14] || (x[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (s(), E(de, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => K(M.file_path)
                    }, {
                      default: r(() => [...x[15] || (x[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (s(), E(de, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (U) => i("resolve"))
                    }, {
                      default: r(() => [...x[16] || (x[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : c("", !0)
                  ])) : c("", !0)
                ]);
              }), 128))
            ]),
            e("section", ai, [
              k(Wt, { variant: "section" }, {
                default: r(() => [
                  w("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", li, " No custom nodes used in this workflow ")) : c("", !0),
              (s(!0), o(A, null, ee(v.value.nodes, (M) => (s(), o("div", {
                key: M.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, a(M.status === "installed" ? "✓" : "✕"), 3),
                e("span", ii, a(M.name), 1),
                M.version ? (s(), o("span", ri, "v" + a(M.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: r(() => [
          k(de, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (M) => i("close"))
          }, {
            default: r(() => [...x[17] || (x[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          f.value ? (s(), E(de, {
            key: 0,
            variant: "primary",
            onClick: te
          }, {
            default: r(() => [...x[18] || (x[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ut, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (M) => b.value = !1)
      }, {
        content: r(() => [...x[19] || (x[19] = [
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
}), ci = /* @__PURE__ */ Z(di, [["__scopeId", "data-v-668728e6"]]), Ie = rs({
  items: [],
  status: "idle"
});
let ct = null;
function Os() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function us(t) {
  return Ie.items.find((l) => l.id === t);
}
async function Mt() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((l) => l.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ui(t), t.status = "completed", t.progress = 100;
  } catch (l) {
    t.status = "failed", t.error = l instanceof Error ? l.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", Mt();
  }
}
async function ui(t) {
  return new Promise((l, n) => {
    ct && (ct.close(), ct = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), y = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    ct = y;
    let g = Date.now(), m = 0, v = !1;
    y.onmessage = (d) => {
      try {
        const u = JSON.parse(d.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const f = Date.now(), h = (f - g) / 1e3;
            if (h > 0.5) {
              const b = t.downloaded - m;
              if (t.speed = b / h, g = f, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, y.close(), ct = null, l();
            break;
          case "error":
            v = !0, y.close(), ct = null, n(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, y.onerror = () => {
      y.close(), ct = null, v || n(new Error("Connection lost"));
    };
  });
}
async function mi() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const l = await t.json();
    if (!l.pending_downloads || l.pending_downloads.length === 0) return;
    for (const n of l.pending_downloads) {
      if (Ie.items.some((y) => y.url === n.url && y.filename === n.filename))
        continue;
      const i = {
        id: Os(),
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
      Ie.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${l.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Kt() {
  function t(p) {
    for (const $ of p) {
      if (Ie.items.some(
        (I) => I.url === $.url && I.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const T = {
        id: Os(),
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
      Ie.items.push(T);
    }
    Ie.status === "idle" && Mt();
  }
  async function l(p) {
    const $ = us(p);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ct && (ct.close(), ct = null), $.status = "failed", $.error = "Cancelled by user", Ie.status = "idle", Mt();
      } else if ($.status === "queued") {
        const z = Ie.items.findIndex((T) => T.id === p);
        z >= 0 && Ie.items.splice(z, 1);
      }
    }
  }
  function n(p) {
    const $ = us(p);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, Ie.status === "idle" && Mt());
  }
  function i(p) {
    const $ = us(p);
    !$ || $.status !== "paused" || ($.status = "queued", Ie.status === "idle" && Mt());
  }
  function y() {
    const p = Ie.items.filter(($) => $.status === "paused");
    for (const $ of p)
      $.status = "queued";
    Ie.status === "idle" && Mt();
  }
  function g(p) {
    const $ = Ie.items.findIndex((z) => z.id === p);
    $ >= 0 && ["completed", "failed", "paused"].includes(Ie.items[$].status) && Ie.items.splice($, 1);
  }
  function m() {
    Ie.items = Ie.items.filter((p) => p.status !== "completed");
  }
  function v() {
    Ie.items = Ie.items.filter((p) => p.status !== "failed");
  }
  const d = L(
    () => Ie.items.find((p) => p.status === "downloading")
  ), u = L(
    () => Ie.items.filter((p) => p.status === "queued")
  ), f = L(
    () => Ie.items.filter((p) => p.status === "completed")
  ), h = L(
    () => Ie.items.filter((p) => p.status === "failed")
  ), b = L(
    () => Ie.items.filter((p) => p.status === "paused")
  ), C = L(() => Ie.items.length > 0), R = L(
    () => Ie.items.filter((p) => p.status === "queued" || p.status === "downloading").length
  ), W = L(
    () => Ie.items.some((p) => p.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: vo(Ie),
    // Computed
    currentDownload: d,
    queuedItems: u,
    completedItems: f,
    failedItems: h,
    pausedItems: b,
    hasItems: C,
    activeCount: R,
    hasPaused: W,
    // Actions
    addToQueue: t,
    cancelDownload: l,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: y,
    removeItem: g,
    clearCompleted: m,
    clearFailed: v,
    loadPendingDownloads: mi
  };
}
function Fs() {
  const t = _(null), l = _(null), n = _([]), i = _([]), y = _(!1), g = _(null);
  async function m($, z) {
    var I;
    if (!((I = window.app) != null && I.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi($, z);
    if (!T.ok) {
      const V = await T.json().catch(() => ({})), K = V.error || V.message || `Request failed: ${T.status}`;
      throw new Error(K);
    }
    return T.json();
  }
  async function v($) {
    y.value = !0, g.value = null;
    try {
      let z;
      return Nt() && (z = await ye.analyzeWorkflow($)), t.value = z, z;
    } catch (z) {
      const T = z instanceof Error ? z.message : "Unknown error occurred";
      throw g.value = T, z;
    } finally {
      y.value = !1;
    }
  }
  async function d($, z, T, I) {
    y.value = !0, g.value = null;
    try {
      let V;
      return Nt() && (V = await ye.applyResolution($, z, T)), l.value = V, V;
    } catch (V) {
      const K = V instanceof Error ? V.message : "Unknown error occurred";
      throw g.value = K, V;
    } finally {
      y.value = !1;
    }
  }
  async function u($, z = 10) {
    y.value = !0, g.value = null;
    try {
      let T;
      return Nt() && (T = await ye.searchNodes($, z)), n.value = T.results, T.results;
    } catch (T) {
      const I = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = I, T;
    } finally {
      y.value = !1;
    }
  }
  async function f($, z = 10) {
    y.value = !0, g.value = null;
    try {
      let T;
      return Nt() && (T = await ye.searchModels($, z)), i.value = T.results, T.results;
    } catch (T) {
      const I = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = I, T;
    } finally {
      y.value = !1;
    }
  }
  const h = rs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function C($) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Nt()) {
        h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
        for (let z = 0; z < h.nodesToInstall.length; z++)
          h.nodeInstallProgress.currentNode = h.nodesToInstall[z], h.nodeInstallProgress.currentIndex = z, await new Promise((T) => setTimeout(T, 500)), h.nodeInstallProgress.completedNodes.push({
            node_id: h.nodesToInstall[z],
            success: !0
          });
        return h.nodesInstalled = h.nodesToInstall, h.needsRestart = h.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: h.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await R($);
    } catch (z) {
      const T = z instanceof Error ? z.message : "Failed to install nodes";
      throw h.installError = T, z;
    }
  }
  async function R($) {
    var T;
    const z = await m(
      `/v2/comfygit/workflow/${$}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: h.nodesToInstall
        })
      }
    );
    if (h.nodeInstallProgress) {
      h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
      const I = new Map(((T = z.failed) == null ? void 0 : T.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < h.nodesToInstall.length; V++) {
        const K = h.nodesToInstall[V], te = I.get(K);
        h.nodeInstallProgress.completedNodes.push({
          node_id: K,
          success: !te,
          error: te
        });
      }
    }
    return h.nodesInstalled = z.nodes_installed, h.needsRestart = z.nodes_installed.length > 0, z.failed && z.failed.length > 0 && (h.installError = `${z.failed.length} package(s) failed to install`), z;
  }
  async function W($, z, T) {
    b(), h.phase = "resolving", g.value = null;
    {
      const I = await ye.applyResolution($, z, T);
      l.value = I, h.nodesToInstall = I.nodes_to_install, h.phase = "complete";
      return;
    }
  }
  function p($, z) {
    const { addToQueue: T } = Kt(), I = z.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: $,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return I.length > 0 && T(I), I.length;
  }
  return {
    // State
    result: t,
    appliedResult: l,
    searchResults: n,
    modelSearchResults: i,
    isLoading: y,
    error: g,
    progress: h,
    // Methods
    analyzeWorkflow: v,
    applyResolution: d,
    applyResolutionWithProgress: W,
    installNodes: C,
    searchNodes: u,
    searchModels: f,
    resetProgress: b,
    queueModelDownloads: p
  };
}
const vi = { class: "resolution-stepper" }, fi = { class: "stepper-header" }, gi = ["onClick"], pi = {
  key: 0,
  class: "step-icon"
}, hi = {
  key: 1,
  class: "step-number"
}, yi = { class: "step-label" }, wi = {
  key: 0,
  class: "step-connector"
}, ki = { class: "stepper-content" }, bi = /* @__PURE__ */ X({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: l }) {
    const n = t, i = l;
    function y(u) {
      var f;
      if ((f = n.stepStats) != null && f[u]) {
        const h = n.stepStats[u];
        return h.total > 0 && h.resolved === h.total;
      }
      return n.completedSteps.includes(u);
    }
    function g(u) {
      var f;
      if ((f = n.stepStats) != null && f[u]) {
        const h = n.stepStats[u];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function m(u) {
      return y(u) ? "state-complete" : g(u) ? "state-partial" : "state-pending";
    }
    function v(u) {
      return !1;
    }
    function d(u) {
      i("step-change", u);
    }
    return (u, f) => (s(), o("div", vi, [
      e("div", fi, [
        (s(!0), o(A, null, ee(t.steps, (h, b) => (s(), o("div", {
          key: h.id,
          class: le(["step", {
            active: t.currentStep === h.id,
            completed: y(h.id),
            "in-progress": g(h.id),
            disabled: v(h.id)
          }]),
          onClick: (C) => d(h.id)
        }, [
          e("div", {
            class: le(["step-indicator", m(h.id)])
          }, [
            y(h.id) ? (s(), o("span", pi, "✓")) : (s(), o("span", hi, a(b + 1), 1))
          ], 2),
          e("div", yi, a(h.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", wi)) : c("", !0)
        ], 10, gi))), 128))
      ]),
      e("div", ki, [
        _e(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), _i = /* @__PURE__ */ Z(bi, [["__scopeId", "data-v-2a7b3af8"]]), $i = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, n = L(() => l.confidence >= 0.9 ? "high" : l.confidence >= 0.7 ? "medium" : "low"), i = L(() => `confidence-${n.value}`), y = L(() => l.showPercentage ? `${Math.round(l.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, m) => (s(), o("span", {
      class: le(["confidence-badge", i.value, t.size])
    }, a(y.value), 3));
  }
}), ls = /* @__PURE__ */ Z($i, [["__scopeId", "data-v-17ec4b80"]]), Ci = { class: "node-info" }, xi = { class: "node-info-text" }, Si = { class: "item-body" }, Ii = {
  key: 0,
  class: "resolved-state"
}, Ei = {
  key: 1,
  class: "multiple-options"
}, Mi = { class: "options-list" }, Ti = ["onClick"], zi = ["name", "value", "checked", "onChange"], Ri = { class: "option-content" }, Li = { class: "option-header" }, Pi = { class: "option-package-id" }, Di = {
  key: 0,
  class: "option-title"
}, Ni = { class: "option-meta" }, Ui = {
  key: 0,
  class: "installed-badge"
}, Bi = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Fi = {
  key: 0,
  class: "searching-state"
}, Ai = { class: "options-list" }, Vi = ["onClick"], Wi = ["name", "value"], Gi = { class: "option-content" }, ji = { class: "option-header" }, Hi = { class: "option-package-id" }, qi = {
  key: 0,
  class: "option-description"
}, Ki = { class: "option-meta" }, Yi = {
  key: 0,
  class: "installed-badge"
}, Qi = {
  key: 2,
  class: "unresolved-message"
}, Xi = { class: "action-buttons" }, Zi = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function y(d, u = 80) {
      return d.length <= u ? d : d.slice(0, u - 3) + "...";
    }
    const g = L(() => !!n.choice);
    L(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const m = L(() => {
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
    function v(d) {
      i("option-selected", d);
    }
    return (d, u) => (s(), o("div", {
      class: le(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", Ci, [
        e("span", xi, [
          u[7] || (u[7] = w("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", m.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Si, [
        g.value ? (s(), o("div", Ii, [
          k(de, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (f) => i("clear-choice"))
          }, {
            default: r(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ei, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Mi, [
            (s(!0), o(A, null, ee(t.options, (f, h) => (s(), o("label", {
              key: f.package_id,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (b) => v(h)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (b) => v(h)
              }, null, 40, zi),
              e("div", Ri, [
                e("div", Li, [
                  e("span", Pi, a(f.package_id), 1),
                  k(ls, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                f.title && f.title !== f.package_id ? (s(), o("div", Di, a(f.title), 1)) : c("", !0),
                e("div", Ni, [
                  f.is_installed ? (s(), o("span", Ui, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Ti))), 128))
          ]),
          e("div", Bi, [
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (f) => i("search"))
            }, {
              default: r(() => [...u[9] || (u[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (f) => i("manual-entry"))
            }, {
              default: r(() => [...u[10] || (u[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (f) => i("mark-optional"))
            }, {
              default: r(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Oi, [
          t.isSearching ? (s(), o("div", Fi, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(A, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Ai, [
              (s(!0), o(A, null, ee(t.searchResults.slice(0, 5), (f, h) => (s(), o("label", {
                key: f.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", f)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: h
                }, null, 8, Wi),
                e("div", Gi, [
                  e("div", ji, [
                    e("span", Hi, a(f.package_id), 1),
                    k(ls, {
                      confidence: f.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  f.description ? (s(), o("div", qi, a(y(f.description)), 1)) : c("", !0),
                  e("div", Ki, [
                    f.is_installed ? (s(), o("span", Yi, "Already Installed")) : c("", !0)
                  ])
                ])
              ], 8, Vi))), 128))
            ])
          ], 64)) : (s(), o("div", Qi, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Xi, [
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (f) => i("search"))
            }, {
              default: r(() => {
                var f;
                return [
                  w(a((f = t.searchResults) != null && f.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (f) => i("manual-entry"))
            }, {
              default: r(() => [...u[16] || (u[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (f) => i("mark-optional"))
            }, {
              default: r(() => [...u[17] || (u[17] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ji = /* @__PURE__ */ Z(Zi, [["__scopeId", "data-v-c2997d1d"]]), er = { class: "item-navigator" }, tr = { class: "nav-item-info" }, sr = ["title"], or = { class: "nav-controls" }, nr = { class: "nav-arrows" }, ar = ["disabled"], lr = ["disabled"], ir = { class: "nav-position" }, rr = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: l }) {
    const n = l;
    return (i, y) => (s(), o("div", er, [
      e("div", tr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, sr)
      ]),
      e("div", or, [
        e("div", nr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: y[0] || (y[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, ar),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: y[1] || (y[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, lr)
        ]),
        e("span", ir, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), As = /* @__PURE__ */ Z(rr, [["__scopeId", "data-v-74af7920"]]), dr = ["type", "value", "placeholder", "disabled"], cr = {
  key: 0,
  class: "base-input-error"
}, ur = /* @__PURE__ */ X({
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
    return (l, n) => (s(), o("div", {
      class: le(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: le(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = _t((i) => l.$emit("enter"), ["enter"])),
          n[2] || (n[2] = _t((i) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, dr),
      t.error ? (s(), o("span", cr, a(t.error), 1)) : c("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Z(ur, [["__scopeId", "data-v-9ba02cdc"]]), mr = { class: "node-resolution-step" }, vr = {
  key: 0,
  class: "auto-resolved-section"
}, fr = { class: "section-header" }, gr = { class: "stat-badge" }, pr = { class: "resolved-packages-list" }, hr = { class: "package-info" }, yr = { class: "package-id" }, wr = { class: "node-count" }, kr = { class: "package-actions" }, br = {
  key: 0,
  class: "status-badge install"
}, _r = {
  key: 1,
  class: "status-badge skip"
}, $r = ["onClick"], Cr = {
  key: 1,
  class: "section-divider"
}, xr = { class: "step-header" }, Sr = { class: "stat-badge" }, Ir = {
  key: 1,
  class: "step-body"
}, Er = {
  key: 3,
  class: "empty-state"
}, Mr = { class: "node-modal-body" }, Tr = { class: "node-search-results-container" }, zr = {
  key: 0,
  class: "node-search-results"
}, Rr = ["onClick"], Lr = { class: "node-result-header" }, Pr = { class: "node-result-package-id" }, Dr = {
  key: 0,
  class: "node-result-description"
}, Nr = {
  key: 1,
  class: "node-empty-state"
}, Ur = {
  key: 2,
  class: "node-empty-state"
}, Br = {
  key: 3,
  class: "node-empty-state"
}, Or = { class: "node-manual-entry-modal" }, Fr = { class: "node-modal-body" }, Ar = { class: "node-modal-actions" }, Vr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: l }) {
    const n = t, i = l, { searchNodes: y } = Fs(), g = _(0), m = _(!1), v = _(!1), d = _(""), u = _(""), f = _([]), h = _(!1), b = _(/* @__PURE__ */ new Map()), C = _(/* @__PURE__ */ new Set()), R = _(!1);
    function W() {
      R.value && F(), R.value = !1;
    }
    const p = L(() => n.nodes[g.value]), $ = L(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), z = L(() => p.value ? b.value.get(p.value.node_type) || [] : []), T = L(() => p.value ? C.value.has(p.value.node_type) : !1);
    bt(p, async (re) => {
      var ie;
      re && ((ie = re.options) != null && ie.length || b.value.has(re.node_type) || C.value.has(re.node_type) || n.nodeChoices.has(re.node_type) || await I(re.node_type));
    }, { immediate: !0 });
    async function I(re) {
      C.value.add(re);
      try {
        const ie = await y(re, 5);
        b.value.set(re, ie);
      } catch {
        b.value.set(re, []);
      } finally {
        C.value.delete(re);
      }
    }
    const V = L(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function K(re) {
      return n.skippedPackages.has(re);
    }
    function te(re) {
      i("package-skip", re);
    }
    const P = L(() => {
      var ie;
      if (!p.value) return "not-found";
      const re = n.nodeChoices.get(p.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ie = p.value.options) != null && ie.length ? "ambiguous" : "not-found";
    }), x = L(() => {
      var ie;
      if (!p.value) return;
      const re = n.nodeChoices.get(p.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ie = p.value.options) != null && ie.length ? `${p.value.options.length} matches` : "Not Found";
    });
    function M(re) {
      re >= 0 && re < n.nodes.length && (g.value = re);
    }
    function B() {
      p.value && i("mark-optional", p.value.node_type);
    }
    function U() {
      p.value && i("skip", p.value.node_type);
    }
    function ne(re) {
      p.value && i("option-selected", p.value.node_type, re);
    }
    function $e() {
      p.value && i("clear-choice", p.value.node_type);
    }
    function J() {
      p.value && (d.value = p.value.node_type, f.value = z.value, m.value = !0, ze(d.value));
    }
    function j() {
      u.value = "", v.value = !0;
    }
    function F() {
      m.value = !1, d.value = "", f.value = [];
    }
    function S() {
      v.value = !1, u.value = "";
    }
    let ae = null;
    function oe() {
      ae && clearTimeout(ae), ae = setTimeout(() => {
        ze(d.value);
      }, 300);
    }
    async function ze(re) {
      if (!re.trim()) {
        f.value = [];
        return;
      }
      h.value = !0;
      try {
        f.value = await y(re, 10);
      } catch {
        f.value = [];
      } finally {
        h.value = !1;
      }
    }
    function Ce(re) {
      p.value && (i("manual-entry", p.value.node_type, re.package_id), F());
    }
    function Be(re) {
      p.value && i("manual-entry", p.value.node_type, re.package_id);
    }
    function we() {
      !p.value || !u.value.trim() || (i("manual-entry", p.value.node_type, u.value.trim()), S());
    }
    return (re, ie) => {
      var Oe, Ne;
      return s(), o("div", mr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", vr, [
          e("div", fr, [
            ie[6] || (ie[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", gr, a(V.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", pr, [
            (s(!0), o(A, null, ee(t.autoResolvedPackages, (ce) => (s(), o("div", {
              key: ce.package_id,
              class: "resolved-package-item"
            }, [
              e("div", hr, [
                e("code", yr, a(ce.package_id), 1),
                e("span", wr, a(ce.node_types_count) + " node type" + a(ce.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", kr, [
                K(ce.package_id) ? (s(), o("span", _r, " SKIPPED ")) : (s(), o("span", br, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (H) => te(ce.package_id)
                }, a(K(ce.package_id) ? "Include" : "Skip"), 9, $r)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Cr)) : c("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", xr, [
            ie[7] || (ie[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Sr, a($.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          p.value ? (s(), E(As, {
            key: 0,
            "item-name": p.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ie[0] || (ie[0] = (ce) => M(g.value - 1)),
            onNext: ie[1] || (ie[1] = (ce) => M(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          p.value ? (s(), o("div", Ir, [
            k(Ji, {
              "node-type": p.value.node_type,
              "has-multiple-options": !!((Oe = p.value.options) != null && Oe.length),
              options: p.value.options,
              choice: (Ne = t.nodeChoices) == null ? void 0 : Ne.get(p.value.node_type),
              status: P.value,
              "status-label": x.value,
              "search-results": z.value,
              "is-searching": T.value,
              onMarkOptional: B,
              onSkip: U,
              onManualEntry: j,
              onSearch: J,
              onOptionSelected: ne,
              onClearChoice: $e,
              onSearchResultSelected: Be
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Er, [...ie[8] || (ie[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (s(), E(je, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ie[4] || (ie[4] = Pe((ce) => R.value = !0, ["self"])),
            onMouseup: Pe(W, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ie[3] || (ie[3] = (ce) => R.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ie[9] || (ie[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Mr, [
                k(it, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ie[2] || (ie[2] = (ce) => d.value = ce),
                  placeholder: "Search by node type, package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                e("div", Tr, [
                  f.value.length > 0 ? (s(), o("div", zr, [
                    (s(!0), o(A, null, ee(f.value, (ce) => (s(), o("div", {
                      key: ce.package_id,
                      class: "node-search-result-item",
                      onClick: (H) => Ce(ce)
                    }, [
                      e("div", Lr, [
                        e("code", Pr, a(ce.package_id), 1),
                        ce.match_confidence ? (s(), E(ls, {
                          key: 0,
                          confidence: ce.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : c("", !0)
                      ]),
                      ce.description ? (s(), o("div", Dr, a(ce.description), 1)) : c("", !0)
                    ], 8, Rr))), 128))
                  ])) : h.value ? (s(), o("div", Nr, "Searching...")) : d.value ? (s(), o("div", Ur, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Br, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : c("", !0)
        ])),
        (s(), E(je, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Pe(S, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "node-modal-header" }, [
                ie[10] || (ie[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Fr, [
                k(it, {
                  modelValue: u.value,
                  "onUpdate:modelValue": ie[5] || (ie[5] = (ce) => u.value = ce),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ar, [
                  k(de, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: r(() => [...ie[11] || (ie[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(de, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: we
                  }, {
                    default: r(() => [...ie[12] || (ie[12] = [
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
}), Wr = /* @__PURE__ */ Z(Vr, [["__scopeId", "data-v-281581bc"]]), Gr = { class: "node-info" }, jr = { class: "node-info-text" }, Hr = { class: "item-body" }, qr = {
  key: 0,
  class: "resolved-state"
}, Kr = {
  key: 1,
  class: "multiple-options"
}, Yr = { class: "options-list" }, Qr = ["onClick"], Xr = ["name", "value", "checked", "onChange"], Zr = { class: "option-content" }, Jr = { class: "option-header" }, ed = { class: "option-filename" }, td = { class: "option-meta" }, sd = { class: "option-size" }, od = { class: "option-category" }, nd = { class: "option-path" }, ad = { class: "action-buttons" }, ld = {
  key: 2,
  class: "unresolved"
}, id = { class: "action-buttons" }, rd = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const n = t, i = l, y = L(() => !!n.choice);
    L(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d, u;
      return ((u = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const g = L(() => {
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
    function m(d) {
      i("option-selected", d);
    }
    function v(d) {
      if (!d) return "Unknown";
      const u = d / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, u) => (s(), o("div", {
      class: le(["model-resolution-item", { resolved: y.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Gr, [
        e("span", jr, [
          u[7] || (u[7] = w("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Hr, [
        y.value ? (s(), o("div", qr, [
          k(de, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (f) => i("clear-choice"))
          }, {
            default: r(() => [...u[8] || (u[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Kr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Yr, [
            (s(!0), o(A, null, ee(t.options, (f, h) => (s(), o("label", {
              key: f.model.hash,
              class: le(["option-card", { selected: t.selectedOptionIndex === h }]),
              onClick: (b) => m(h)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: h,
                checked: t.selectedOptionIndex === h,
                onChange: (b) => m(h)
              }, null, 40, Xr),
              e("div", Zr, [
                e("div", Jr, [
                  e("span", ed, a(f.model.filename), 1),
                  k(ls, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", td, [
                  e("span", sd, a(v(f.model.size)), 1),
                  e("span", od, a(f.model.category), 1)
                ]),
                e("div", nd, a(f.model.relative_path), 1)
              ])
            ], 10, Qr))), 128))
          ]),
          e("div", ad, [
            k(de, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (f) => i("search"))
            }, {
              default: r(() => [...u[9] || (u[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (f) => i("download-url"))
            }, {
              default: r(() => [...u[10] || (u[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (f) => i("mark-optional"))
            }, {
              default: r(() => [...u[11] || (u[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ld, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", id, [
            k(de, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (f) => i("search"))
            }, {
              default: r(() => [...u[13] || (u[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (f) => i("download-url"))
            }, {
              default: r(() => [...u[14] || (u[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (f) => i("mark-optional"))
            }, {
              default: r(() => [...u[15] || (u[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), dd = /* @__PURE__ */ Z(rd, [["__scopeId", "data-v-8a82fefa"]]), cd = { class: "model-resolution-step" }, ud = { class: "step-header" }, md = { class: "step-info" }, vd = { class: "step-title" }, fd = { class: "step-description" }, gd = { class: "stat-badge" }, pd = {
  key: 1,
  class: "step-body"
}, hd = {
  key: 2,
  class: "empty-state"
}, yd = { class: "model-search-modal" }, wd = { class: "model-modal-body" }, kd = {
  key: 0,
  class: "model-search-results"
}, bd = ["onClick"], _d = { class: "model-result-header" }, $d = { class: "model-result-filename" }, Cd = { class: "model-result-meta" }, xd = { class: "model-result-category" }, Sd = { class: "model-result-size" }, Id = {
  key: 0,
  class: "model-result-path"
}, Ed = {
  key: 1,
  class: "model-no-results"
}, Md = {
  key: 2,
  class: "model-searching"
}, Td = { class: "model-download-url-modal" }, zd = { class: "model-modal-body" }, Rd = { class: "model-input-group" }, Ld = { class: "model-input-group" }, Pd = { class: "model-modal-actions" }, Dd = /* @__PURE__ */ X({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: l }) {
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
    function i(F) {
      var S;
      return F && ((S = n[F]) == null ? void 0 : S[0]) || null;
    }
    const y = t, g = l, m = _(0), v = _(!1), d = _(!1), u = _(""), f = _(""), h = _(""), b = _([]), C = _(!1), R = L(() => y.models[m.value]), W = L(() => y.models.some((F) => F.is_download_intent)), p = L(() => y.models.filter(
      (F) => y.modelChoices.has(F.filename) || F.is_download_intent
    ).length), $ = L(() => {
      var S;
      if (!R.value) return "";
      const F = i((S = R.value.reference) == null ? void 0 : S.node_type);
      return F ? `${F}/${R.value.filename}` : "";
    }), z = L(() => {
      var S;
      if (!R.value) return "not-found";
      const F = y.modelChoices.get(R.value.filename);
      if (F)
        switch (F.action) {
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
      return R.value.is_download_intent ? "download" : (S = R.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), T = L(() => {
      var S, ae;
      if (!R.value) return;
      const F = y.modelChoices.get(R.value.filename);
      if (F)
        switch (F.action) {
          case "select":
            return (S = F.selected_model) != null && S.filename ? `→ ${F.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (ae = R.value.options) != null && ae.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function I(F) {
      F >= 0 && F < y.models.length && (m.value = F);
    }
    function V() {
      R.value && g("mark-optional", R.value.filename);
    }
    function K() {
      R.value && g("skip", R.value.filename);
    }
    function te(F) {
      R.value && g("option-selected", R.value.filename, F);
    }
    function P() {
      R.value && g("clear-choice", R.value.filename);
    }
    function x() {
      R.value && (u.value = R.value.filename, v.value = !0);
    }
    function M() {
      R.value && (f.value = R.value.download_source || "", h.value = R.value.target_path || $.value, d.value = !0);
    }
    function B() {
      v.value = !1, u.value = "", b.value = [];
    }
    function U() {
      d.value = !1, f.value = "", h.value = "";
    }
    function ne() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function $e(F) {
      R.value && B();
    }
    function J() {
      !R.value || !f.value.trim() || (g("download-url", R.value.filename, f.value.trim(), h.value.trim() || void 0), U());
    }
    function j(F) {
      if (!F) return "Unknown";
      const S = F / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(F / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (F, S) => {
      var ae, oe, ze;
      return s(), o("div", cd, [
        e("div", ud, [
          e("div", md, [
            e("h3", vd, a(W.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", fd, a(W.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", gd, a(p.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), E(As, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (Ce) => I(m.value - 1)),
          onNext: S[1] || (S[1] = (Ce) => I(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        R.value ? (s(), o("div", pd, [
          k(dd, {
            filename: R.value.filename,
            "node-type": ((ae = R.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((oe = R.value.options) != null && oe.length),
            options: R.value.options,
            choice: (ze = t.modelChoices) == null ? void 0 : ze.get(R.value.filename),
            status: z.value,
            "status-label": T.value,
            onMarkOptional: V,
            onSkip: K,
            onDownloadUrl: M,
            onSearch: x,
            onOptionSelected: te,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", hd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(je, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Pe(B, ["self"])
          }, [
            e("div", yd, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", wd, [
                k(it, {
                  modelValue: u.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (Ce) => u.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", kd, [
                  (s(!0), o(A, null, ee(b.value, (Ce) => (s(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (Be) => $e()
                  }, [
                    e("div", _d, [
                      e("code", $d, a(Ce.filename), 1)
                    ]),
                    e("div", Cd, [
                      e("span", xd, a(Ce.category), 1),
                      e("span", Sd, a(j(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (s(), o("div", Id, a(Ce.relative_path), 1)) : c("", !0)
                  ], 8, bd))), 128))
                ])) : u.value && !C.value ? (s(), o("div", Ed, ' No models found matching "' + a(u.value) + '" ', 1)) : c("", !0),
                C.value ? (s(), o("div", Md, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (s(), E(je, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Pe(U, ["self"])
          }, [
            e("div", Td, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", zd, [
                e("div", Rd, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(it, {
                    modelValue: f.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (Ce) => f.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Ld, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(it, {
                    modelValue: h.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (Ce) => h.value = Ce),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Pd, [
                  k(de, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: r(() => [...S[10] || (S[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(de, {
                    variant: "primary",
                    disabled: !f.value.trim() || !h.value.trim(),
                    onClick: J
                  }, {
                    default: r(() => [...S[11] || (S[11] = [
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
}), Nd = /* @__PURE__ */ Z(Dd, [["__scopeId", "data-v-c6acbada"]]), Ud = { class: "applying-step" }, Bd = {
  key: 0,
  class: "phase-content"
}, Od = {
  key: 1,
  class: "phase-content"
}, Fd = { class: "phase-description" }, Ad = { class: "overall-progress" }, Vd = { class: "progress-bar" }, Wd = { class: "progress-label" }, Gd = { class: "install-list" }, jd = { class: "install-icon" }, Hd = { key: 0 }, qd = {
  key: 1,
  class: "spinner"
}, Kd = { key: 2 }, Yd = { key: 3 }, Qd = {
  key: 0,
  class: "install-error"
}, Xd = {
  key: 2,
  class: "phase-content"
}, Zd = { class: "phase-header" }, Jd = { class: "phase-title" }, ec = { class: "completion-summary" }, tc = {
  key: 0,
  class: "summary-item success"
}, sc = { class: "summary-text" }, oc = {
  key: 1,
  class: "summary-item error"
}, nc = { class: "summary-text" }, ac = {
  key: 2,
  class: "failed-list"
}, lc = { class: "failed-node-id" }, ic = { class: "failed-error" }, rc = {
  key: 4,
  class: "summary-item success"
}, dc = {
  key: 5,
  class: "restart-prompt"
}, cc = {
  key: 3,
  class: "phase-content error"
}, uc = { class: "error-message" }, mc = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const l = t, n = L(() => {
      var u, f;
      const v = ((u = l.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || l.progress.nodesToInstall.length;
      if (!v) return 0;
      const d = ((f = l.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / v * 100);
    }), i = L(() => {
      var v;
      return ((v = l.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((d) => !d.success)) || [];
    }), y = L(() => i.value.length > 0);
    function g(v, d) {
      var f, h;
      const u = (f = l.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((b) => b.node_id === v);
      return u ? u.success ? "complete" : "failed" : ((h = l.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === d ? "installing" : "pending";
    }
    function m(v) {
      var d, u;
      return (u = (d = l.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === v)) == null ? void 0 : u.error;
    }
    return (v, d) => {
      var u, f, h, b;
      return s(), o("div", Ud, [
        t.progress.phase === "resolving" ? (s(), o("div", Bd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Od, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Fd, " Installing " + a((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + a(((f = t.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ad, [
            e("div", Vd, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Wd, a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Gd, [
            (s(!0), o(A, null, ee(t.progress.nodesToInstall, (C, R) => (s(), o("div", {
              key: C,
              class: le(["install-item", g(C, R)])
            }, [
              e("span", jd, [
                g(C, R) === "pending" ? (s(), o("span", Hd, "○")) : g(C, R) === "installing" ? (s(), o("span", qd, "◌")) : g(C, R) === "complete" ? (s(), o("span", Kd, "✓")) : g(C, R) === "failed" ? (s(), o("span", Yd, "✗")) : c("", !0)
              ]),
              e("code", null, a(C), 1),
              m(C) ? (s(), o("span", Qd, a(m(C)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Xd, [
          e("div", Zd, [
            e("span", {
              class: le(["phase-icon", y.value ? "warning" : "success"])
            }, a(y.value ? "⚠" : "✓"), 3),
            e("h3", Jd, a(y.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", ec, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", tc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", sc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            i.value.length > 0 ? (s(), o("div", oc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", nc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            i.value.length > 0 ? (s(), o("div", ac, [
              (s(!0), o(A, null, ee(i.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", lc, a(C.node_id), 1),
                e("span", ic, a(C.error), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (C) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : c("", !0),
            y.value ? c("", !0) : (s(), o("div", rc, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", dc, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (C) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", cc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", uc, a(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), vc = /* @__PURE__ */ Z(mc, [["__scopeId", "data-v-5efaae58"]]), fc = {
  key: 0,
  class: "loading-state"
}, gc = {
  key: 1,
  class: "wizard-content"
}, pc = {
  key: 0,
  class: "step-content"
}, hc = { class: "analysis-summary" }, yc = { class: "analysis-header" }, wc = { class: "summary-description" }, kc = { class: "stats-grid" }, bc = { class: "stat-card" }, _c = { class: "stat-items" }, $c = {
  key: 0,
  class: "stat-item success"
}, Cc = { class: "stat-count" }, xc = {
  key: 1,
  class: "stat-item info"
}, Sc = { class: "stat-count" }, Ic = {
  key: 2,
  class: "stat-item warning"
}, Ec = { class: "stat-count" }, Mc = {
  key: 3,
  class: "stat-item error"
}, Tc = { class: "stat-count" }, zc = { class: "stat-card" }, Rc = { class: "stat-items" }, Lc = { class: "stat-item success" }, Pc = { class: "stat-count" }, Dc = {
  key: 0,
  class: "stat-item info"
}, Nc = { class: "stat-count" }, Uc = {
  key: 1,
  class: "stat-item warning"
}, Bc = { class: "stat-count" }, Oc = {
  key: 2,
  class: "stat-item warning"
}, Fc = { class: "stat-count" }, Ac = {
  key: 3,
  class: "stat-item error"
}, Vc = { class: "stat-count" }, Wc = {
  key: 0,
  class: "status-message warning"
}, Gc = { class: "status-text" }, jc = {
  key: 1,
  class: "status-message info"
}, Hc = { class: "status-text" }, qc = {
  key: 2,
  class: "status-message info"
}, Kc = { class: "status-text" }, Yc = {
  key: 3,
  class: "status-message warning"
}, Qc = { class: "status-text" }, Xc = {
  key: 4,
  class: "status-message success"
}, Zc = {
  key: 5,
  class: "category-mismatch-section"
}, Jc = { class: "mismatch-list" }, eu = { class: "mismatch-path" }, tu = { class: "mismatch-target" }, su = {
  key: 3,
  class: "step-content"
}, ou = { class: "review-summary" }, nu = { class: "review-stats" }, au = { class: "review-stat" }, lu = { class: "stat-value" }, iu = { class: "review-stat" }, ru = { class: "stat-value" }, du = { class: "review-stat" }, cu = { class: "stat-value" }, uu = { class: "review-stat" }, mu = { class: "stat-value" }, vu = {
  key: 0,
  class: "review-section"
}, fu = { class: "section-title" }, gu = { class: "review-items" }, pu = { class: "item-name" }, hu = { class: "item-choice" }, yu = {
  key: 0,
  class: "choice-badge install"
}, wu = {
  key: 1,
  class: "choice-badge skip"
}, ku = {
  key: 1,
  class: "review-section"
}, bu = { class: "section-title" }, _u = { class: "review-items" }, $u = { class: "item-name" }, Cu = { class: "item-choice" }, xu = {
  key: 0,
  class: "choice-badge install"
}, Su = {
  key: 1,
  class: "choice-badge optional"
}, Iu = {
  key: 2,
  class: "choice-badge skip"
}, Eu = {
  key: 1,
  class: "choice-badge pending"
}, Mu = {
  key: 2,
  class: "review-section"
}, Tu = { class: "section-title" }, zu = { class: "review-items" }, Ru = { class: "item-name" }, Lu = { class: "item-choice" }, Pu = {
  key: 0,
  class: "choice-badge install"
}, Du = {
  key: 1,
  class: "choice-badge download"
}, Nu = {
  key: 2,
  class: "choice-badge optional"
}, Uu = {
  key: 3,
  class: "choice-badge skip"
}, Bu = {
  key: 4,
  class: "choice-badge skip"
}, Ou = {
  key: 1,
  class: "choice-badge download"
}, Fu = {
  key: 2,
  class: "choice-badge pending"
}, Au = {
  key: 3,
  class: "no-choices"
}, Vu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: l }) {
    const n = t, i = l, { analyzeWorkflow: y, applyResolution: g, installNodes: m, queueModelDownloads: v, progress: d, resetProgress: u } = Fs(), { loadPendingDownloads: f } = Kt(), { openFileLocation: h } = We(), b = _(null), C = _(!1), R = _(!1), W = _(null), p = _("analysis"), $ = _([]), z = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Map()), I = _(/* @__PURE__ */ new Set()), V = L(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (te.value || M.value) && Y.push({ id: "nodes", label: "Nodes" }), (P.value || x.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), p.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), K = L(() => b.value ? b.value.stats.needs_user_input : !1), te = L(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), P = L(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), x = L(() => b.value ? b.value.stats.download_intents > 0 : !1), M = L(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), B = L(() => b.value ? b.value.nodes.resolved.length : 0), U = L(() => b.value ? b.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), ne = L(() => U.value.length > 0), $e = L(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((O) => !O.is_installed), N = /* @__PURE__ */ new Set();
      return Y.filter((O) => N.has(O.package.package_id) ? !1 : (N.add(O.package.package_id), !0));
    }), J = L(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((O) => !O.is_installed), N = /* @__PURE__ */ new Map();
      for (const O of Y) {
        const Q = N.get(O.package.package_id);
        Q ? Q.node_types_count++ : N.set(O.package.package_id, {
          package_id: O.package.package_id,
          title: O.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), j = L(() => $e.value.filter((Y) => !I.value.has(Y.package.package_id))), F = L(() => b.value ? b.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), S = L(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.unresolved.map((O) => ({
        node_type: O.reference.node_type,
        reason: O.reason,
        is_unresolved: !0,
        options: void 0
      })), N = b.value.nodes.ambiguous.map((O) => ({
        node_type: O.reference.node_type,
        has_multiple_options: !0,
        options: O.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...Y, ...N];
    }), ae = L(() => {
      if (!b.value) return [];
      const Y = b.value.models.unresolved.map((O) => ({
        filename: O.reference.widget_value,
        reference: O.reference,
        reason: O.reason,
        is_unresolved: !0,
        options: void 0
      })), N = b.value.models.ambiguous.map((O) => ({
        filename: O.reference.widget_value,
        reference: O.reference,
        has_multiple_options: !0,
        options: O.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...Y, ...N];
    }), oe = L(() => {
      const Y = ae.value, N = F.value.map((O) => ({
        filename: O.filename,
        reference: O.reference,
        is_download_intent: !0,
        resolved_model: O.resolved_model,
        download_source: O.download_source,
        target_path: O.target_path,
        options: void 0
      }));
      return [...Y, ...N];
    }), ze = L(() => {
      let Y = j.value.length;
      for (const N of z.value.values())
        N.action === "install" && Y++;
      for (const N of T.value.values())
        N.action === "select" && Y++;
      return Y;
    }), Ce = L(() => {
      let Y = 0;
      for (const N of T.value.values())
        N.action === "download" && Y++;
      return Y;
    }), Be = L(() => {
      let Y = 0;
      for (const N of z.value.values())
        N.action === "optional" && Y++;
      for (const N of T.value.values())
        N.action === "optional" && Y++;
      return Y;
    }), we = L(() => {
      let Y = I.value.size;
      for (const N of z.value.values())
        N.action === "skip" && Y++;
      for (const N of T.value.values())
        N.action === "skip" && Y++;
      for (const N of S.value)
        z.value.has(N.node_type) || Y++;
      for (const N of ae.value)
        T.value.has(N.filename) || Y++;
      return Y;
    }), re = L(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, te.value) {
        const N = S.value.length, O = S.value.filter(
          (Q) => z.value.has(Q.node_type)
        ).length;
        Y.nodes = { resolved: O, total: N };
      }
      if (P.value || x.value) {
        const N = oe.value.length, O = oe.value.filter(
          (Q) => T.value.has(Q.filename) || Q.is_download_intent
        ).length;
        Y.models = { resolved: O, total: N };
      }
      if (Y.review = { resolved: 1, total: 1 }, p.value === "applying") {
        const N = d.totalFiles || 1, O = d.completedFiles.length;
        Y.applying = { resolved: O, total: N };
      }
      return Y;
    });
    function ie(Y) {
      p.value = Y;
    }
    function Oe() {
      const Y = V.value.findIndex((N) => N.id === p.value);
      Y > 0 && (p.value = V.value[Y - 1].id);
    }
    function Ne() {
      const Y = V.value.findIndex((N) => N.id === p.value);
      Y < V.value.length - 1 && (p.value = V.value[Y + 1].id);
    }
    async function ce() {
      C.value = !0, W.value = null;
      try {
        b.value = await y(n.workflowName);
      } catch (Y) {
        W.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function H() {
      $.value.includes("analysis") || $.value.push("analysis"), te.value || M.value ? p.value = "nodes" : P.value || x.value ? p.value = "models" : p.value = "review";
    }
    function xe(Y) {
      z.value.set(Y, { action: "optional" });
    }
    function ke(Y) {
      z.value.set(Y, { action: "skip" });
    }
    function Ee(Y, N) {
      var Q;
      const O = S.value.find((fe) => fe.node_type === Y);
      (Q = O == null ? void 0 : O.options) != null && Q[N] && z.value.set(Y, {
        action: "install",
        package_id: O.options[N].package_id
      });
    }
    function be(Y, N) {
      z.value.set(Y, {
        action: "install",
        package_id: N
      });
    }
    function pe(Y) {
      z.value.delete(Y);
    }
    function He(Y) {
      I.value.has(Y) ? I.value.delete(Y) : I.value.add(Y);
    }
    function $t(Y) {
      T.value.set(Y, { action: "optional" });
    }
    function mt(Y) {
      T.value.set(Y, { action: "skip" });
    }
    function Fe(Y, N) {
      var Q;
      const O = ae.value.find((fe) => fe.filename === Y);
      (Q = O == null ? void 0 : O.options) != null && Q[N] && T.value.set(Y, {
        action: "select",
        selected_model: O.options[N].model
      });
    }
    function Ct(Y, N, O) {
      T.value.set(Y, {
        action: "download",
        url: N,
        target_path: O
      });
    }
    function wt(Y) {
      T.value.delete(Y);
    }
    async function xt(Y) {
      try {
        await h(Y);
      } catch (N) {
        W.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function vt() {
      var Y;
      R.value = !0, W.value = null, u(), d.phase = "resolving", p.value = "applying";
      try {
        const N = await g(n.workflowName, z.value, T.value, I.value);
        N.models_to_download && N.models_to_download.length > 0 && v(n.workflowName, N.models_to_download);
        const O = [
          ...N.nodes_to_install || [],
          ...j.value.map((fe) => fe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(O)], d.nodesToInstall.length > 0 && await m(n.workflowName), d.phase = "complete", await f();
        const Q = d.installError || ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((fe) => !fe.success));
        !d.needsRestart && !Q && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (N) {
        W.value = N instanceof Error ? N.message : "Failed to apply resolution", d.error = W.value, d.phase = "error";
      } finally {
        R.value = !1;
      }
    }
    function St() {
      i("refresh"), i("restart"), i("close");
    }
    async function ft() {
      var N;
      const Y = ((N = d.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((O) => !O.success).map((O) => O.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await m(n.workflowName), d.phase = "complete";
        } catch (O) {
          d.error = O instanceof Error ? O.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Ae(ce), (Y, N) => (s(), E(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: W.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (O) => i("close"))
    }, {
      body: r(() => [
        C.value && !b.value ? (s(), o("div", fc, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", gc, [
          k(_i, {
            steps: V.value,
            "current-step": p.value,
            "completed-steps": $.value,
            "step-stats": re.value,
            onStepChange: ie
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          p.value === "analysis" ? (s(), o("div", pc, [
            e("div", hc, [
              e("div", yc, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", wc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", kc, [
                e("div", bc, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", _c, [
                    B.value > 0 ? (s(), o("div", $c, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Cc, a(B.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", xc, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Sc, a(b.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", Ic, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ec, a(b.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Mc, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Tc, a(b.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", zc, [
                  N[23] || (N[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rc, [
                    e("div", Lc, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Pc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", Dc, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nc, a(b.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    ne.value ? (s(), o("div", Uc, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Bc, a(U.value.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : c("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", Oc, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Fc, a(b.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", Ac, [
                      N[21] || (N[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Vc, a(b.value.models.unresolved.length), 1),
                      N[22] || (N[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              K.value ? (s(), o("div", Wc, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Gc, a(S.value.length + ae.value.length) + " items need your input", 1)
              ])) : M.value ? (s(), o("div", jc, [
                N[25] || (N[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hc, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(x.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", qc, [
                N[26] || (N[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ne.value ? (s(), o("div", Yc, [
                N[27] || (N[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Qc, a(U.value.length) + " model" + a(U.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Xc, [...N[28] || (N[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ne.value ? (s(), o("div", Zc, [
                N[31] || (N[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Jc, [
                  (s(!0), o(A, null, ee(U.value, (O) => {
                    var Q, fe;
                    return s(), o("div", {
                      key: O.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", eu, a(O.actual_category) + "/" + a((Q = O.model) == null ? void 0 : Q.filename), 1),
                      N[30] || (N[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", tu, a((fe = O.expected_categories) == null ? void 0 : fe[0]) + "/", 1),
                      O.file_path ? (s(), E(de, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Xe) => xt(O.file_path)
                      }, {
                        default: r(() => [...N[29] || (N[29] = [
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
          p.value === "nodes" ? (s(), E(Wr, {
            key: 1,
            nodes: S.value,
            "node-choices": z.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": I.value,
            onMarkOptional: xe,
            onSkip: ke,
            onOptionSelected: Ee,
            onManualEntry: be,
            onClearChoice: pe,
            onPackageSkip: He
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          p.value === "models" ? (s(), E(Nd, {
            key: 2,
            models: oe.value,
            "model-choices": T.value,
            onMarkOptional: $t,
            onSkip: mt,
            onOptionSelected: Fe,
            onDownloadUrl: Ct,
            onClearChoice: wt
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          p.value === "review" ? (s(), o("div", su, [
            e("div", ou, [
              N[36] || (N[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", nu, [
                e("div", au, [
                  e("span", lu, a(ze.value), 1),
                  N[32] || (N[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(Ce.value), 1),
                  N[33] || (N[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(Be.value), 1),
                  N[34] || (N[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", uu, [
                  e("span", mu, a(we.value), 1),
                  N[35] || (N[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (s(), o("div", vu, [
                e("h4", fu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", gu, [
                  (s(!0), o(A, null, ee(J.value, (O) => (s(), o("div", {
                    key: O.package_id,
                    class: "review-item"
                  }, [
                    e("code", pu, a(O.package_id), 1),
                    e("div", hu, [
                      I.value.has(O.package_id) ? (s(), o("span", wu, "Skipped")) : (s(), o("span", yu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              S.value.length > 0 ? (s(), o("div", ku, [
                e("h4", bu, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", _u, [
                  (s(!0), o(A, null, ee(S.value, (O) => {
                    var Q, fe, Xe, q;
                    return s(), o("div", {
                      key: O.node_type,
                      class: "review-item"
                    }, [
                      e("code", $u, a(O.node_type), 1),
                      e("div", Cu, [
                        z.value.has(O.node_type) ? (s(), o(A, { key: 0 }, [
                          ((Q = z.value.get(O.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", xu, a((fe = z.value.get(O.node_type)) == null ? void 0 : fe.package_id), 1)) : ((Xe = z.value.get(O.node_type)) == null ? void 0 : Xe.action) === "optional" ? (s(), o("span", Su, " Optional ")) : ((q = z.value.get(O.node_type)) == null ? void 0 : q.action) === "skip" ? (s(), o("span", Iu, " Skip ")) : c("", !0)
                        ], 64)) : (s(), o("span", Eu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              oe.value.length > 0 ? (s(), o("div", Mu, [
                e("h4", Tu, "Models (" + a(oe.value.length) + ")", 1),
                e("div", zu, [
                  (s(!0), o(A, null, ee(oe.value, (O) => {
                    var Q, fe, Xe, q, ue, Se, nt;
                    return s(), o("div", {
                      key: O.filename,
                      class: "review-item"
                    }, [
                      e("code", Ru, a(O.filename), 1),
                      e("div", Lu, [
                        T.value.has(O.filename) ? (s(), o(A, { key: 0 }, [
                          ((Q = T.value.get(O.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", Pu, a((Xe = (fe = T.value.get(O.filename)) == null ? void 0 : fe.selected_model) == null ? void 0 : Xe.filename), 1)) : ((q = T.value.get(O.filename)) == null ? void 0 : q.action) === "download" ? (s(), o("span", Du, " Download ")) : ((ue = T.value.get(O.filename)) == null ? void 0 : ue.action) === "optional" ? (s(), o("span", Nu, " Optional ")) : ((Se = T.value.get(O.filename)) == null ? void 0 : Se.action) === "skip" ? (s(), o("span", Uu, " Skip ")) : ((nt = T.value.get(O.filename)) == null ? void 0 : nt.action) === "cancel_download" ? (s(), o("span", Bu, " Cancel Download ")) : c("", !0)
                        ], 64)) : O.is_download_intent ? (s(), o("span", Ou, " Pending Download ")) : (s(), o("span", Fu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              $e.value.length === 0 && S.value.length === 0 && oe.value.length === 0 ? (s(), o("div", Au, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          p.value === "applying" ? (s(), E(vc, {
            key: 4,
            progress: ve(d),
            onRestart: St,
            onRetryFailed: ft
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: r(() => [
        p.value !== "analysis" && p.value !== "applying" ? (s(), E(de, {
          key: 0,
          variant: "secondary",
          disabled: R.value,
          onClick: Oe
        }, {
          default: r(() => [...N[37] || (N[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        N[41] || (N[41] = e("div", { class: "footer-spacer" }, null, -1)),
        p.value !== "applying" || ve(d).phase === "complete" || ve(d).phase === "error" ? (s(), E(de, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (O) => i("close"))
        }, {
          default: r(() => [
            w(a(ve(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        p.value === "analysis" ? (s(), E(de, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: H
        }, {
          default: r(() => [...N[38] || (N[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        p.value === "nodes" ? (s(), E(de, {
          key: 3,
          variant: "primary",
          onClick: Ne
        }, {
          default: r(() => [
            w(a(P.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        p.value === "models" ? (s(), E(de, {
          key: 4,
          variant: "primary",
          onClick: Ne
        }, {
          default: r(() => [...N[39] || (N[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        p.value === "review" ? (s(), E(de, {
          key: 5,
          variant: "primary",
          disabled: R.value,
          loading: R.value,
          onClick: vt
        }, {
          default: r(() => [...N[40] || (N[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Wu = /* @__PURE__ */ Z(Vu, [["__scopeId", "data-v-6276cf1d"]]), Gu = { class: "search-input-wrapper" }, ju = ["value", "placeholder"], Hu = /* @__PURE__ */ X({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = _(null);
    let g;
    function m(d) {
      const u = d.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", u);
      }, n.debounce)) : i("update:modelValue", u);
    }
    function v() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = y.value) == null || d.focus();
    }
    return Ae(() => {
      n.autoFocus && y.value && y.value.focus();
    }), (d, u) => (s(), o("div", Gu, [
      e("input", {
        ref_key: "inputRef",
        ref: y,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: _t(v, ["escape"])
      }, null, 40, ju),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), qu = /* @__PURE__ */ Z(Hu, [["__scopeId", "data-v-266f857a"]]), Ku = { class: "search-bar" }, Yu = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (l, n) => (s(), o("div", Ku, [
      k(qu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lt = /* @__PURE__ */ Z(Yu, [["__scopeId", "data-v-3d51bbfd"]]), Qu = { class: "section-group" }, Xu = {
  key: 0,
  class: "section-content"
}, Zu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = _(n.initiallyExpanded);
    function g() {
      n.collapsible && (y.value = !y.value, i("toggle", y.value));
    }
    return (m, v) => (s(), o("section", Qu, [
      k(ot, {
        count: t.count,
        clickable: t.collapsible,
        expanded: y.value,
        onClick: g
      }, {
        default: r(() => [
          w(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || y.value ? (s(), o("div", Xu, [
        _e(m.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ Z(Zu, [["__scopeId", "data-v-c48e33ed"]]), Ju = { class: "item-header" }, em = {
  key: 0,
  class: "item-icon"
}, tm = { class: "item-info" }, sm = {
  key: 0,
  class: "item-title"
}, om = {
  key: 1,
  class: "item-subtitle"
}, nm = {
  key: 0,
  class: "item-details"
}, am = {
  key: 1,
  class: "item-actions"
}, lm = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, i = L(() => n.status ? `status-${n.status}` : "");
    return (y, g) => (s(), o("div", {
      class: le(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (m) => t.clickable && y.$emit("click"))
    }, [
      e("div", Ju, [
        y.$slots.icon ? (s(), o("span", em, [
          _e(y.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", tm, [
          y.$slots.title ? (s(), o("div", sm, [
            _e(y.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          y.$slots.subtitle ? (s(), o("div", om, [
            _e(y.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      y.$slots.details ? (s(), o("div", nm, [
        _e(y.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      y.$slots.actions ? (s(), o("div", am, [
        _e(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), et = /* @__PURE__ */ Z(lm, [["__scopeId", "data-v-cc435e0e"]]), im = { class: "loading-state" }, rm = { class: "loading-message" }, dm = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (l, n) => (s(), o("div", im, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", rm, a(t.message), 1)
    ]));
  }
}), ht = /* @__PURE__ */ Z(dm, [["__scopeId", "data-v-ad8436c9"]]), cm = { class: "error-state" }, um = { class: "error-message" }, mm = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (l, n) => (s(), o("div", cm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", um, a(t.message), 1),
      t.retry ? (s(), E(se, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => l.$emit("retry"))
      }, {
        default: r(() => [...n[1] || (n[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ Z(mm, [["__scopeId", "data-v-5397be48"]]), vm = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: l, emit: n }) {
    const i = n, { getWorkflows: y } = We();
    Bs();
    const g = _([]), m = _(!1), v = _(null), d = _(""), u = _(!0), f = _(!1), h = _(!1), b = _(!1), C = _(null), R = L(
      () => g.value.filter((j) => j.status === "broken")
    ), W = L(
      () => g.value.filter((j) => j.status === "new")
    ), p = L(
      () => g.value.filter((j) => j.status === "modified")
    ), $ = L(
      () => g.value.filter((j) => j.status === "synced")
    ), z = L(() => {
      if (!d.value.trim()) return g.value;
      const j = d.value.toLowerCase();
      return g.value.filter((F) => F.name.toLowerCase().includes(j));
    }), T = L(
      () => R.value.filter(
        (j) => !d.value.trim() || j.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), I = L(
      () => W.value.filter(
        (j) => !d.value.trim() || j.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = L(
      () => p.value.filter(
        (j) => !d.value.trim() || j.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = L(
      () => $.value.filter(
        (j) => !d.value.trim() || j.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), te = L(
      () => f.value ? K.value : K.value.slice(0, 5)
    );
    async function P(j = !1) {
      m.value = !0, v.value = null;
      try {
        g.value = await y(j);
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    l({ loadWorkflows: P });
    function x(j) {
      C.value = j, h.value = !0;
    }
    function M(j) {
      C.value = j, b.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function U() {
      i("refresh");
    }
    async function ne() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function $e(j) {
      const F = [];
      return j.missing_nodes > 0 && F.push(`${j.missing_nodes} missing node${j.missing_nodes > 1 ? "s" : ""}`), j.missing_models > 0 && F.push(`${j.missing_models} missing model${j.missing_models > 1 ? "s" : ""}`), j.models_with_category_mismatch && j.models_with_category_mismatch > 0 && F.push(`${j.models_with_category_mismatch} model${j.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), j.pending_downloads && j.pending_downloads > 0 && F.push(`${j.pending_downloads} pending download${j.pending_downloads > 1 ? "s" : ""}`), F.length > 0 ? F.join(", ") : "Has issues";
    }
    function J(j) {
      const F = j.sync_state === "new" ? "New" : j.sync_state === "modified" ? "Modified" : j.sync_state === "synced" ? "Synced" : j.sync_state;
      return j.has_path_sync_issues && j.models_needing_path_sync && j.models_needing_path_sync > 0 ? `${j.models_needing_path_sync} model path${j.models_needing_path_sync > 1 ? "s" : ""} need${j.models_needing_path_sync === 1 ? "s" : ""} sync` : F || "Unknown";
    }
    return Ae(P), (j, F) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, { title: "WORKFLOWS" }, {
            actions: r(() => [
              R.value.length > 0 ? (s(), E(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: r(() => [...F[8] || (F[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          k(Lt, {
            modelValue: d.value,
            "onUpdate:modelValue": F[0] || (F[0] = (S) => d.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          m.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            T.value.length ? (s(), E(Ge, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(T.value, (S) => (s(), E(et, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: r(() => [...F[9] || (F[9] = [
                    w("⚠", -1)
                  ])]),
                  title: r(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: r(() => [
                    w(a($e(S)), 1)
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => M(S.name)
                    }, {
                      default: r(() => [...F[10] || (F[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(S.name)
                    }, {
                      default: r(() => [...F[11] || (F[11] = [
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
            I.value.length ? (s(), E(Ge, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(I.value, (S) => (s(), E(et, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: r(() => [
                    w(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: r(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: r(() => [
                    w(a(J(S)), 1)
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(S.name)
                    }, {
                      default: r(() => [...F[12] || (F[12] = [
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
            V.value.length ? (s(), E(Ge, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(V.value, (S) => (s(), E(et, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: r(() => [...F[13] || (F[13] = [
                    w("⚡", -1)
                  ])]),
                  title: r(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: r(() => [
                    w(a(J(S)), 1)
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(S.name)
                    }, {
                      default: r(() => [...F[14] || (F[14] = [
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
            K.value.length ? (s(), E(Ge, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: F[2] || (F[2] = (S) => u.value = S)
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(te.value, (S) => (s(), E(et, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: r(() => [
                    w(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: r(() => [
                    w(a(S.name), 1)
                  ]),
                  subtitle: r(() => [
                    w(a(J(S)), 1)
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => x(S.name)
                    }, {
                      default: r(() => [...F[15] || (F[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && K.value.length > 5 ? (s(), E(se, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: F[1] || (F[1] = (S) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: r(() => [
                    w(" View all " + a(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            z.value.length ? c("", !0) : (s(), E(rt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && C.value ? (s(), E(ci, {
        key: 0,
        "workflow-name": C.value,
        onClose: F[3] || (F[3] = (S) => h.value = !1),
        onResolve: F[4] || (F[4] = (S) => M(C.value)),
        onRefresh: F[5] || (F[5] = (S) => i("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      b.value && C.value ? (s(), E(Wu, {
        key: 1,
        "workflow-name": C.value,
        onClose: F[6] || (F[6] = (S) => b.value = !1),
        onInstall: U,
        onRefresh: F[7] || (F[7] = (S) => i("refresh")),
        onRestart: ne
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), fm = /* @__PURE__ */ Z(vm, [["__scopeId", "data-v-591d06d5"]]), gm = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: le(["summary-bar", t.variant])
    }, [
      _e(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ Z(gm, [["__scopeId", "data-v-ccb7816e"]]), pm = {
  key: 0,
  class: "model-details"
}, hm = { class: "detail-section" }, ym = { class: "detail-row" }, wm = { class: "detail-value mono" }, km = { class: "detail-row" }, bm = { class: "detail-value mono" }, _m = { class: "detail-row" }, $m = { class: "detail-value mono" }, Cm = { class: "detail-row" }, xm = { class: "detail-value" }, Sm = { class: "detail-row" }, Im = { class: "detail-value" }, Em = { class: "detail-row" }, Mm = { class: "detail-value" }, Tm = { class: "detail-section" }, zm = { class: "section-header" }, Rm = {
  key: 0,
  class: "locations-list"
}, Lm = { class: "location-path mono" }, Pm = {
  key: 0,
  class: "location-modified"
}, Dm = ["onClick"], Nm = {
  key: 1,
  class: "empty-state"
}, Um = { class: "detail-section" }, Bm = { class: "section-header" }, Om = {
  key: 0,
  class: "sources-list"
}, Fm = { class: "source-type" }, Am = ["href"], Vm = ["disabled", "onClick"], Wm = {
  key: 1,
  class: "empty-state"
}, Gm = { class: "add-source-form" }, jm = ["disabled"], Hm = {
  key: 2,
  class: "source-error"
}, qm = {
  key: 3,
  class: "source-success"
}, Km = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = t, { getModelDetails: i, addModelSource: y, removeModelSource: g, openFileLocation: m } = We(), v = _(null), d = _(!0), u = _(null), f = _(""), h = _(!1), b = _(null), C = _(null), R = _(null), W = _(null);
    let p = null;
    function $(P, x = "success", M = 2e3) {
      p && clearTimeout(p), W.value = { message: P, type: x }, p = setTimeout(() => {
        W.value = null;
      }, M);
    }
    function z(P) {
      if (!P) return "Unknown";
      const x = 1024 * 1024 * 1024, M = 1024 * 1024;
      return P >= x ? `${(P / x).toFixed(1)} GB` : P >= M ? `${(P / M).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function T(P) {
      navigator.clipboard.writeText(P), $("Copied to clipboard!");
    }
    async function I(P) {
      try {
        await m(P), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function V() {
      if (!(!f.value.trim() || !v.value)) {
        h.value = !0, C.value = null, R.value = null;
        try {
          await y(v.value.hash, f.value.trim()), R.value = "Source added successfully!", f.value = "", await te();
        } catch (P) {
          C.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function K(P) {
      if (v.value) {
        b.value = P, C.value = null, R.value = null;
        try {
          await g(v.value.hash, P), $("Source removed"), await te();
        } catch (x) {
          C.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function te() {
      d.value = !0, u.value = null;
      try {
        v.value = await i(n.identifier);
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ae(te), (P, x) => {
      var M;
      return s(), o(A, null, [
        k(tt, {
          title: `Model Details: ${((M = v.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: u.value,
          onClose: x[5] || (x[5] = (B) => P.$emit("close"))
        }, {
          body: r(() => {
            var B, U, ne, $e;
            return [
              v.value ? (s(), o("div", pm, [
                e("section", hm, [
                  e("div", ym, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", wm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (J) => T(v.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", km, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", bm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (J) => T(v.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", _m, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", $m, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (J) => T(v.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", Cm, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", xm, a(z(v.value.size)), 1)
                  ]),
                  e("div", Sm, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Im, a(v.value.category), 1)
                  ]),
                  e("div", Em, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Mm, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Tm, [
                  e("h4", zm, "Locations (" + a(((B = v.value.locations) == null ? void 0 : B.length) || 0) + ")", 1),
                  (U = v.value.locations) != null && U.length ? (s(), o("div", Rm, [
                    (s(!0), o(A, null, ee(v.value.locations, (J, j) => (s(), o("div", {
                      key: j,
                      class: "location-item"
                    }, [
                      e("span", Lm, a(J.path), 1),
                      J.modified ? (s(), o("span", Pm, "Modified: " + a(J.modified), 1)) : c("", !0),
                      J.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (F) => I(J.path)
                      }, " Open File Location ", 8, Dm)) : c("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Nm, "No locations found"))
                ]),
                e("section", Um, [
                  e("h4", Bm, "Download Sources (" + a(((ne = v.value.sources) == null ? void 0 : ne.length) || 0) + ")", 1),
                  ($e = v.value.sources) != null && $e.length ? (s(), o("div", Om, [
                    (s(!0), o(A, null, ee(v.value.sources, (J, j) => (s(), o("div", {
                      key: j,
                      class: "source-item"
                    }, [
                      e("span", Fm, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, Am),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === J.url,
                        onClick: (F) => K(J.url)
                      }, a(b.value === J.url ? "..." : "×"), 9, Vm)
                    ]))), 128))
                  ])) : (s(), o("div", Wm, " No download sources configured ")),
                  e("div", Gm, [
                    Ve(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (J) => f.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Vt, f.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !f.value.trim() || h.value,
                      onClick: V
                    }, a(h.value ? "Adding..." : "Add Source"), 9, jm)
                  ]),
                  C.value ? (s(), o("p", Hm, a(C.value), 1)) : c("", !0),
                  R.value ? (s(), o("p", qm, a(R.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: r(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (B) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(je, { to: "body" }, [
          W.value ? (s(), o("div", {
            key: 0,
            class: le(["toast", W.value.type])
          }, a(W.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), ks = /* @__PURE__ */ Z(Km, [["__scopeId", "data-v-f15cbb56"]]), Ym = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: l }) {
    const n = l, { getEnvironmentModels: i, getStatus: y } = We(), g = _([]), m = _([]), v = _("production"), d = _(!1), u = _(null), f = _(""), h = _(!1), b = _(null);
    function C() {
      h.value = !1, n("navigate", "model-index");
    }
    const R = L(
      () => g.value.reduce((te, P) => te + (P.size || 0), 0)
    ), W = L(() => {
      if (!f.value.trim()) return g.value;
      const te = f.value.toLowerCase();
      return g.value.filter((P) => P.filename.toLowerCase().includes(te));
    }), p = L(() => {
      if (!f.value.trim()) return m.value;
      const te = f.value.toLowerCase();
      return m.value.filter((P) => P.filename.toLowerCase().includes(te));
    }), $ = L(() => {
      const te = {};
      for (const x of W.value) {
        const M = x.type || "other";
        te[M] || (te[M] = []), te[M].push(x);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(te).sort(([x], [M]) => {
        const B = P.indexOf(x), U = P.indexOf(M);
        return B >= 0 && U >= 0 ? B - U : B >= 0 ? -1 : U >= 0 ? 1 : x.localeCompare(M);
      }).map(([x, M]) => ({ type: x, models: M }));
    });
    function z(te) {
      if (!te) return "Unknown";
      const P = te / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function T(te) {
      b.value = te.hash || te.filename;
    }
    function I(te) {
      n("navigate", "model-index");
    }
    function V(te) {
      alert(`Download functionality not yet implemented for ${te}`);
    }
    async function K() {
      d.value = !0, u.value = null;
      try {
        const te = await i();
        g.value = te, m.value = [];
        const P = await y();
        v.value = P.environment || "production";
      } catch (te) {
        u.value = te instanceof Error ? te.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ae(K), (te, P) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (x) => h.value = !0)
          })
        ]),
        search: r(() => [
          k(Lt, {
            modelValue: f.value,
            "onUpdate:modelValue": P[1] || (P[1] = (x) => f.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          d.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(Pt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                w(" Total: " + a(g.value.length) + " models • " + a(z(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(A, null, ee($.value, (x) => (s(), E(Ge, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(x.models, (M) => (s(), E(et, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...P[4] || (P[4] = [
                    w("📦", -1)
                  ])]),
                  title: r(() => [
                    w(a(M.filename), 1)
                  ]),
                  subtitle: r(() => [
                    w(a(z(M.size)), 1)
                  ]),
                  details: r(() => [
                    k(Ue, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Ue, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => T(M)
                    }, {
                      default: r(() => [...P[5] || (P[5] = [
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
            p.value.length ? (s(), E(Ge, {
              key: 1,
              title: "MISSING",
              count: p.value.length
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(p.value, (x) => (s(), E(et, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: r(() => [...P[6] || (P[6] = [
                    w("⚠", -1)
                  ])]),
                  title: r(() => [
                    w(a(x.filename), 1)
                  ]),
                  subtitle: r(() => [...P[7] || (P[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: r(() => {
                    var M;
                    return [
                      k(Ue, {
                        label: "Required by:",
                        value: ((M = x.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: r(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => V(x.filename)
                    }, {
                      default: r(() => [...P[8] || (P[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => I(x.filename)
                    }, {
                      default: r(() => [...P[9] || (P[9] = [
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
            !W.value.length && !p.value.length ? (s(), E(rt, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ut, {
        show: h.value,
        title: "About Environment Models",
        onClose: P[2] || (P[2] = (x) => h.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            P[10] || (P[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            P[11] || (P[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: r(() => [
          k(se, {
            variant: "primary",
            onClick: C
          }, {
            default: r(() => [...P[12] || (P[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(ks, {
        key: 0,
        identifier: b.value,
        onClose: P[3] || (P[3] = (x) => b.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Qm = /* @__PURE__ */ Z(Ym, [["__scopeId", "data-v-cb4f12b3"]]), Xm = {
  key: 0,
  class: "indexing-progress"
}, Zm = { class: "progress-info" }, Jm = { class: "progress-label" }, ev = { class: "progress-count" }, tv = { class: "progress-bar" }, sv = { class: "modal-content" }, ov = { class: "modal-header" }, nv = { class: "modal-body" }, av = { class: "input-group" }, lv = { class: "current-path" }, iv = { class: "input-group" }, rv = { class: "modal-footer" }, dv = { class: "modal-content" }, cv = { class: "modal-header" }, uv = { class: "modal-body" }, mv = { class: "input-group" }, vv = { class: "input-group" }, fv = { class: "modal-footer" }, gv = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: l }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: y,
      setModelsDirectory: g
    } = We(), { addToQueue: m } = Kt(), v = l, d = _([]), u = _(!1), f = _(!1), h = _(null), b = _(""), C = _(!1), R = _(null), W = _(!1), p = _(null), $ = _(""), z = _(!1), T = _(!1), I = _(""), V = _(""), K = _(null), te = L(
      () => d.value.reduce((F, S) => F + (S.size || 0), 0)
    ), P = L(() => {
      if (!b.value.trim()) return d.value;
      const F = b.value.toLowerCase();
      return d.value.filter((S) => {
        const ae = S, oe = S.sha256 || ae.sha256_hash || "";
        return S.filename.toLowerCase().includes(F) || oe.toLowerCase().includes(F);
      });
    }), x = L(() => {
      const F = {};
      for (const ae of P.value) {
        const oe = ae.type || "other";
        F[oe] || (F[oe] = []), F[oe].push(ae);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([ae], [oe]) => {
        const ze = S.indexOf(ae), Ce = S.indexOf(oe);
        return ze >= 0 && Ce >= 0 ? ze - Ce : ze >= 0 ? -1 : Ce >= 0 ? 1 : ae.localeCompare(oe);
      }).map(([ae, oe]) => ({ type: ae, models: oe }));
    });
    function M(F) {
      if (!F) return "Unknown";
      const S = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return F >= S ? `${(F / S).toFixed(1)} GB` : F >= ae ? `${(F / ae).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function B(F) {
      R.value = F.hash || F.filename;
    }
    async function U() {
      f.value = !0, h.value = null;
      try {
        const F = await i();
        await J(), F.changes > 0 && console.log(`Scan complete: ${F.changes} changes detected`);
      } catch (F) {
        h.value = F instanceof Error ? F.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ne() {
      if ($.value.trim()) {
        z.value = !0, h.value = null;
        try {
          const F = await g($.value.trim());
          p.value = F.path, W.value = !1, $.value = "", await J(), console.log(`Directory changed: ${F.models_indexed} models indexed`), v("refresh");
        } catch (F) {
          h.value = F instanceof Error ? F.message : "Failed to change directory";
        } finally {
          z.value = !1;
        }
      }
    }
    function $e() {
      if (!I.value.trim() || !V.value.trim()) return;
      const F = V.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: F,
        url: I.value.trim(),
        targetPath: V.value.trim()
      }]), I.value = "", V.value = "", T.value = !1;
    }
    async function J() {
      u.value = !0, h.value = null;
      try {
        d.value = await n();
      } catch (F) {
        h.value = F instanceof Error ? F.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function j() {
      try {
        const F = await y();
        p.value = F.path;
      } catch {
      }
    }
    return Ae(() => {
      J(), j();
    }), (F, S) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (ae) => C.value = !0)
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: U
              }, {
                default: r(() => [
                  w(a(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (ae) => W.value = !0)
              }, {
                default: r(() => [...S[15] || (S[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (ae) => T.value = !0)
              }, {
                default: r(() => [...S[16] || (S[16] = [
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
        search: r(() => [
          K.value ? (s(), o("div", Xm, [
            e("div", Zm, [
              e("span", Jm, a(K.value.message), 1),
              e("span", ev, a(K.value.current) + "/" + a(K.value.total), 1)
            ]),
            e("div", tv, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${K.value.current / K.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          k(Lt, {
            modelValue: b.value,
            "onUpdate:modelValue": S[3] || (S[3] = (ae) => b.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          u.value || K.value ? (s(), E(ht, {
            key: 0,
            message: K.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (s(), E(yt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            d.value.length ? (s(), E(Pt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                w(" Total: " + a(d.value.length) + " models • " + a(M(te.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (s(!0), o(A, null, ee(x.value, (ae) => (s(), E(Ge, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(ae.models, (oe) => (s(), E(et, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...S[17] || (S[17] = [
                    w("📦", -1)
                  ])]),
                  title: r(() => [
                    w(a(oe.filename), 1)
                  ]),
                  subtitle: r(() => [
                    w(a(M(oe.size)), 1)
                  ]),
                  details: r(() => [
                    k(Ue, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => B(oe)
                    }, {
                      default: r(() => [...S[18] || (S[18] = [
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
            P.value.length ? c("", !0) : (s(), E(rt, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ut, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (ae) => C.value = !1)
      }, {
        content: r(() => [...S[19] || (S[19] = [
          e("p", null, [
            w(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            w(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      R.value ? (s(), E(ks, {
        key: 0,
        identifier: R.value,
        onClose: S[5] || (S[5] = (ae) => R.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (s(), E(je, { to: "body" }, [
        W.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = Pe((ae) => W.value = !1, ["self"]))
        }, [
          e("div", sv, [
            e("div", ov, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (ae) => W.value = !1)
              }, "✕")
            ]),
            e("div", nv, [
              e("div", av, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", lv, a(p.value || "Not set"), 1)
              ]),
              e("div", iv, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                k(it, {
                  modelValue: $.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (ae) => $.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", rv, [
              k(de, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (ae) => W.value = !1)
              }, {
                default: r(() => [...S[24] || (S[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(de, {
                variant: "primary",
                disabled: !$.value.trim() || z.value,
                loading: z.value,
                onClick: ne
              }, {
                default: r(() => [
                  w(a(z.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (s(), E(je, { to: "body" }, [
        T.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = Pe((ae) => T.value = !1, ["self"]))
        }, [
          e("div", dv, [
            e("div", cv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (ae) => T.value = !1)
              }, "✕")
            ]),
            e("div", uv, [
              e("div", mv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                k(it, {
                  modelValue: I.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (ae) => I.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", vv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(it, {
                  modelValue: V.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (ae) => V.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", fv, [
              k(de, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (ae) => T.value = !1)
              }, {
                default: r(() => [...S[29] || (S[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(de, {
                variant: "primary",
                disabled: !I.value.trim() || !V.value.trim(),
                onClick: $e
              }, {
                default: r(() => [...S[30] || (S[30] = [
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
}), pv = /* @__PURE__ */ Z(gv, [["__scopeId", "data-v-73b78d84"]]), hv = { class: "node-details" }, yv = { class: "status-row" }, wv = {
  key: 0,
  class: "detail-row"
}, kv = { class: "value" }, bv = { class: "detail-row" }, _v = { class: "value" }, $v = {
  key: 1,
  class: "detail-row"
}, Cv = { class: "value mono" }, xv = {
  key: 2,
  class: "detail-row"
}, Sv = ["href"], Iv = {
  key: 3,
  class: "detail-row"
}, Ev = { class: "value mono small" }, Mv = { class: "detail-row" }, Tv = {
  key: 0,
  class: "value"
}, zv = {
  key: 1,
  class: "workflow-list"
}, Rv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = L(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = L(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = L(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, d) => (s(), E(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (u) => i("close"))
    }, {
      body: r(() => [
        e("div", hv, [
          e("div", yv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", y.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", wv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", kv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : c("", !0),
          e("div", bv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", _v, a(m.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", $v, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Cv, a(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (s(), o("div", xv, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(a(t.node.repository) + " ", 1),
              d[6] || (d[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Sv)
          ])) : c("", !0),
          t.node.download_url ? (s(), o("div", Iv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Ev, a(t.node.download_url), 1)
          ])) : c("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Mv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Tv, " Not used in any workflows ")) : (s(), o("div", zv, [
              (s(!0), o(A, null, ee(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, a(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: r(() => [
        k(de, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (u) => i("close"))
        }, {
          default: r(() => [...d[11] || (d[11] = [
            w(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Lv = /* @__PURE__ */ Z(Rv, [["__scopeId", "data-v-b342f626"]]), Pv = { key: 0 }, Dv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Nv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Uv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: l }) {
    const n = l, { getNodes: i, trackNodeAsDev: y, installNode: g, uninstallNode: m } = We(), v = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), d = _(!1), u = _(null), f = _(""), h = _(!1), b = _(null), C = L(() => {
      if (!f.value.trim()) return v.value.nodes;
      const x = f.value.toLowerCase();
      return v.value.nodes.filter(
        (M) => {
          var B, U;
          return M.name.toLowerCase().includes(x) || ((B = M.description) == null ? void 0 : B.toLowerCase().includes(x)) || ((U = M.repository) == null ? void 0 : U.toLowerCase().includes(x));
        }
      );
    }), R = L(
      () => C.value.filter((x) => x.installed && x.tracked)
    ), W = L(
      () => C.value.filter((x) => !x.installed && x.tracked)
    ), p = L(
      () => C.value.filter((x) => x.installed && !x.tracked)
    );
    function $(x) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[x] || x;
    }
    function z(x) {
      return !x.used_in_workflows || x.used_in_workflows.length === 0 ? "Not used in any workflows" : x.used_in_workflows.length === 1 ? x.used_in_workflows[0] : `${x.used_in_workflows.length} workflows`;
    }
    function T(x) {
      b.value = x;
    }
    function I() {
      n("open-node-manager");
    }
    async function V(x) {
      if (confirm(`Track "${x}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          d.value = !0;
          const M = await y(x);
          M.status === "success" ? (alert(`Node "${x}" is now tracked as development!`), await P()) : alert(`Failed to track node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function K(x) {
      if (confirm(`Remove untracked node "${x}"?

This will delete the node directory from custom_nodes/.`))
        try {
          d.value = !0;
          const M = await m(x);
          M.status === "success" ? (alert(`Node "${x}" removed!`), await P()) : alert(`Failed to remove node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function te(x) {
      if (confirm(`Install node "${x}"?

This will download and install the node.`))
        try {
          d.value = !0;
          const M = await g(x);
          M.status === "success" ? (alert(`Node "${x}" installed successfully!`), await P()) : alert(`Failed to install node: ${M.message || "Unknown error"}`);
        } catch (M) {
          alert(`Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          d.value = !1;
        }
    }
    async function P() {
      d.value = !0, u.value = null;
      try {
        v.value = await i();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load nodes";
      } finally {
        d.value = !1;
      }
    }
    return Ae(P), (x, M) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (B) => h.value = !0)
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: r(() => [...M[5] || (M[5] = [
                  w(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          k(Lt, {
            modelValue: f.value,
            "onUpdate:modelValue": M[1] || (M[1] = (B) => f.value = B),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          d.value ? (s(), E(ht, {
            key: 0,
            message: "Loading nodes..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            v.value.total_count ? (s(), E(Pt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                w(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (s(), o(A, { key: 0 }, [
                  w(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                v.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  w(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (s(), E(Ge, {
              key: 1,
              title: "UNTRACKED",
              count: p.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(p.value, (B) => (s(), E(et, {
                  key: B.name,
                  status: "warning"
                }, {
                  icon: r(() => [...M[6] || (M[6] = [
                    w("?", -1)
                  ])]),
                  title: r(() => [
                    w(a(B.name), 1)
                  ]),
                  subtitle: r(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: r(() => [
                    k(Ue, {
                      label: "Used by:",
                      value: z(B)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => T(B)
                    }, {
                      default: r(() => [...M[8] || (M[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => V(B.name)
                    }, {
                      default: r(() => [...M[9] || (M[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => K(B.name)
                    }, {
                      default: r(() => [...M[10] || (M[10] = [
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
            R.value.length ? (s(), E(Ge, {
              key: 2,
              title: "INSTALLED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(R.value, (B) => (s(), E(et, {
                  key: B.name,
                  status: "synced"
                }, {
                  icon: r(() => [
                    w(a(B.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: r(() => [
                    w(a(B.name), 1)
                  ]),
                  subtitle: r(() => [
                    B.version ? (s(), o("span", Pv, a(B.source === "development" ? "" : "v") + a(B.version), 1)) : (s(), o("span", Dv, "version unknown")),
                    e("span", Nv, " • " + a($(B.source)), 1)
                  ]),
                  details: r(() => [
                    k(Ue, {
                      label: "Used by:",
                      value: z(B)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => T(B)
                    }, {
                      default: r(() => [...M[11] || (M[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: I
                    }, {
                      default: r(() => [...M[12] || (M[12] = [
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
            W.value.length ? (s(), E(Ge, {
              key: 3,
              title: "MISSING",
              count: W.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(W.value, (B) => (s(), E(et, {
                  key: B.name,
                  status: "missing"
                }, {
                  icon: r(() => [...M[13] || (M[13] = [
                    w("!", -1)
                  ])]),
                  title: r(() => [
                    w(a(B.name), 1)
                  ]),
                  subtitle: r(() => [...M[14] || (M[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: r(() => [
                    k(Ue, {
                      label: "Required by:",
                      value: z(B)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => T(B)
                    }, {
                      default: r(() => [...M[15] || (M[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => te(B.name)
                    }, {
                      default: r(() => [...M[16] || (M[16] = [
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
            !R.value.length && !W.value.length && !p.value.length ? (s(), E(rt, {
              key: 4,
              icon: "📭",
              message: f.value ? `No nodes match '${f.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ut, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: M[3] || (M[3] = (B) => h.value = !1)
      }, {
        content: r(() => [...M[17] || (M[17] = [
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
        actions: r(() => [
          k(se, {
            variant: "primary",
            onClick: M[2] || (M[2] = (B) => h.value = !1)
          }, {
            default: r(() => [...M[18] || (M[18] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(Lv, {
        key: 0,
        node: b.value,
        onClose: M[4] || (M[4] = (B) => b.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Bv = /* @__PURE__ */ Z(Uv, [["__scopeId", "data-v-4ac1465a"]]);
function Vs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Ov = { class: "remote-url-display" }, Fv = ["title"], Av = ["title"], Vv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Wv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Gv = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const l = t, n = _(!1), i = L(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const g = l.url.slice(0, Math.floor(l.maxLength * 0.6)), m = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${g}...${m}`;
    });
    async function y() {
      try {
        await navigator.clipboard.writeText(l.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, m) => (s(), o("div", Ov, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Fv),
      e("button", {
        class: le(["copy-btn", { copied: n.value }]),
        onClick: y,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Wv, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Vv, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Av)
    ]));
  }
}), jv = /* @__PURE__ */ Z(Gv, [["__scopeId", "data-v-7768a58d"]]), Hv = { class: "remote-title" }, qv = {
  key: 0,
  class: "default-badge"
}, Kv = {
  key: 1,
  class: "sync-badge"
}, Yv = {
  key: 0,
  class: "ahead"
}, Qv = {
  key: 1,
  class: "behind"
}, Xv = {
  key: 1,
  class: "synced"
}, Zv = ["href"], Jv = {
  key: 1,
  class: "remote-url-text"
}, ef = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const l = t, n = L(() => l.fetchingRemote === l.remote.name), i = L(() => l.remote.is_default), y = L(() => l.syncStatus && l.syncStatus.behind > 0), g = L(() => l.syncStatus && l.syncStatus.ahead > 0), m = L(() => l.remote.push_url !== l.remote.fetch_url), v = L(() => {
      const u = l.remote.fetch_url, f = u.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : u.startsWith("https://") || u.startsWith("http://") ? u.replace(/\.git$/, "") : null;
    }), d = L(() => l.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (u, f) => (s(), E(et, {
      status: i.value ? "synced" : void 0
    }, qt({
      icon: r(() => [
        w(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: r(() => [
        e("div", Hv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", qv, "DEFAULT")) : c("", !0),
          t.syncStatus ? (s(), o("span", Kv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Yv, "↑" + a(t.syncStatus.ahead), 1)) : c("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Qv, "↓" + a(t.syncStatus.behind), 1)) : c("", !0)
            ], 64)) : (s(), o("span", Xv, "✓ synced"))
          ])) : c("", !0)
        ])
      ]),
      subtitle: r(() => [
        v.value ? (s(), o("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = Pe(() => {
          }, ["stop"]))
        }, a(d.value), 9, Zv)) : (s(), o("span", Jv, a(d.value), 1))
      ]),
      actions: r(() => [
        k(se, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: f[1] || (f[1] = (h) => u.$emit("fetch", t.remote.name))
        }, {
          default: r(() => [...f[6] || (f[6] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(se, {
          variant: y.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: f[2] || (f[2] = (h) => u.$emit("pull", t.remote.name))
        }, {
          default: r(() => [
            w(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(se, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: f[3] || (f[3] = (h) => u.$emit("push", t.remote.name))
        }, {
          default: r(() => [
            w(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(se, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (h) => u.$emit("edit", t.remote.name))
        }, {
          default: r(() => [...f[7] || (f[7] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? c("", !0) : (s(), E(se, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (h) => u.$emit("remove", t.remote.name))
        }, {
          default: r(() => [...f[8] || (f[8] = [
            w(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      m.value ? {
        name: "details",
        fn: r(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ue, {
            key: 0,
            label: "Push URL:"
          }, {
            default: r(() => [
              k(jv, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), tf = /* @__PURE__ */ Z(ef, [["__scopeId", "data-v-8310f3a8"]]), sf = ["for"], of = {
  key: 0,
  class: "base-form-field-required"
}, nf = { class: "base-form-field-input" }, af = {
  key: 1,
  class: "base-form-field-error"
}, lf = {
  key: 2,
  class: "base-form-field-hint"
}, rf = /* @__PURE__ */ X({
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
    const l = t, n = L(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, y) => (s(), o("div", {
      class: le(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        w(a(t.label) + " ", 1),
        t.required ? (s(), o("span", of, "*")) : c("", !0)
      ], 8, sf)) : c("", !0),
      e("div", nf, [
        _e(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", af, a(t.error), 1)) : t.hint ? (s(), o("span", lf, a(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), ms = /* @__PURE__ */ Z(rf, [["__scopeId", "data-v-9a1cf296"]]), df = { class: "remote-form" }, cf = { class: "form-header" }, uf = { class: "form-body" }, mf = {
  key: 0,
  class: "form-error"
}, vf = { class: "form-actions" }, ff = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = _(!1), m = _(null);
    bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      y.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = L(() => y.value.name.trim() !== "" && y.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!v.value || g.value)) {
        m.value = null, g.value = !0;
        try {
          i("submit", y.value);
        } catch (u) {
          m.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (u, f) => (s(), o("div", df, [
      e("div", cf, [
        k(ot, null, {
          default: r(() => [
            w(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", uf, [
        k(ms, {
          label: "Remote Name",
          required: ""
        }, {
          default: r(() => [
            k(it, {
              modelValue: y.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (h) => y.value.name = h),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(ms, {
          label: "Fetch URL",
          required: ""
        }, {
          default: r(() => [
            k(it, {
              modelValue: y.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (h) => y.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(ms, { label: "Push URL (optional)" }, {
          default: r(() => [
            k(it, {
              modelValue: y.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (h) => y.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (s(), o("div", mf, a(m.value), 1)) : c("", !0)
      ]),
      e("div", vf, [
        k(se, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: d
        }, {
          default: r(() => [
            w(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(se, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (h) => u.$emit("cancel"))
        }, {
          default: r(() => [...f[4] || (f[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), gf = /* @__PURE__ */ Z(ff, [["__scopeId", "data-v-56021b18"]]), pf = { class: "conflict-summary-box" }, hf = { class: "summary-header" }, yf = { class: "summary-text" }, wf = { key: 0 }, kf = {
  key: 1,
  class: "all-resolved"
}, bf = { class: "summary-progress" }, _f = { class: "progress-bar" }, $f = { class: "progress-text" }, Cf = /* @__PURE__ */ X({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const l = t, n = L(
      () => l.conflictCount > 0 ? l.resolvedCount / l.conflictCount * 100 : 0
    );
    return (i, y) => (s(), o("div", pf, [
      e("div", hf, [
        y[0] || (y[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", yf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", wf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", kf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", bf, [
        e("div", _f, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", $f, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), xf = /* @__PURE__ */ Z(Cf, [["__scopeId", "data-v-4e9e6cc9"]]), Sf = { class: "modal-header" }, If = { class: "modal-title" }, Ef = { class: "modal-body" }, Mf = {
  key: 0,
  class: "error-box"
}, Tf = {
  key: 0,
  class: "error-hint"
}, zf = {
  key: 1,
  class: "loading-state"
}, Rf = { class: "commit-summary" }, Lf = {
  key: 0,
  class: "changes-section"
}, Pf = {
  key: 0,
  class: "change-group",
  open: ""
}, Df = { class: "change-count" }, Nf = { class: "change-list" }, Uf = {
  key: 0,
  class: "conflict-badge"
}, Bf = {
  key: 1,
  class: "change-group"
}, Of = { class: "change-count" }, Ff = { class: "change-list" }, Af = {
  key: 2,
  class: "change-group"
}, Vf = { class: "change-count" }, Wf = { class: "change-list" }, Gf = {
  key: 2,
  class: "strategy-section"
}, jf = { class: "radio-group" }, Hf = { class: "radio-option" }, qf = { class: "radio-option" }, Kf = { class: "radio-option" }, Yf = {
  key: 3,
  class: "up-to-date"
}, Qf = { class: "modal-actions" }, Ts = "comfygit.pullModelStrategy", Xf = /* @__PURE__ */ X({
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
  setup(t, { emit: l }) {
    const n = t, i = l, y = _(localStorage.getItem(Ts) || "skip");
    bt(y, (p) => {
      localStorage.setItem(Ts, p);
    });
    const g = L(() => {
      var p;
      return ((p = n.error) == null ? void 0 : p.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = L(() => {
      if (!n.preview) return 0;
      const p = n.preview.changes.workflows;
      return p.added.length + p.modified.length + p.deleted.length;
    }), v = L(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = L(() => {
      var p;
      return m.value > 0 || v.value > 0 || (((p = n.preview) == null ? void 0 : p.changes.models.count) || 0) > 0;
    }), u = L(() => n.preview && Vs(n.preview) ? n.preview : null), f = L(() => {
      var p;
      return ((p = u.value) == null ? void 0 : p.workflow_conflicts.length) ?? 0;
    }), h = L(() => {
      var p;
      return ((p = n.conflictResolutions) == null ? void 0 : p.size) ?? 0;
    }), b = L(
      () => f.value > 0 && h.value === f.value
    ), C = L(() => !(!n.preview || n.preview.has_uncommitted_changes || u.value && !b.value));
    function R(p) {
      if (!u.value) return !1;
      const $ = p.replace(/\.json$/, "");
      return u.value.workflow_conflicts.some((z) => z.name === $);
    }
    function W(p) {
      const $ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: y.value, force: p, resolutions: $ });
    }
    return (p, $) => {
      var z, T;
      return s(), E(je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[11] || ($[11] = (I) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[10] || ($[10] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", Sf, [
              e("h3", If, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (I) => p.$emit("close"))
              }, "✕")
            ]),
            e("div", Ef, [
              t.error ? (s(), o("div", Mf, [
                $[13] || ($[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  $[12] || ($[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", Tf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : c("", !0)
                ])
              ])) : t.loading ? (s(), o("div", zf, [...$[14] || ($[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                w(" Loading preview... ", -1)
              ])])) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), o(A, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", Rf, [
                  $[17] || ($[17] = e("span", { class: "icon" }, "📥", -1)),
                  w(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", Lf, [
                  $[21] || ($[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  m.value > 0 ? (s(), o("details", Pf, [
                    e("summary", null, [
                      $[18] || ($[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Df, a(m.value) + " changes", 1)
                    ]),
                    e("div", Nf, [
                      (s(!0), o(A, null, ee(t.preview.changes.workflows.added, (I) => (s(), o("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + a(I), 1))), 128)),
                      (s(!0), o(A, null, ee(t.preview.changes.workflows.modified, (I) => (s(), o("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        w(" ~ " + a(I) + " ", 1),
                        R(I) ? (s(), o("span", Uf, "CONFLICT")) : c("", !0)
                      ]))), 128)),
                      (s(!0), o(A, null, ee(t.preview.changes.workflows.deleted, (I) => (s(), o("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + a(I), 1))), 128))
                    ])
                  ])) : c("", !0),
                  v.value > 0 ? (s(), o("details", Bf, [
                    e("summary", null, [
                      $[19] || ($[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Of, a(v.value) + " to install", 1)
                    ]),
                    e("div", Ff, [
                      (s(!0), o(A, null, ee(t.preview.changes.nodes.to_install, (I) => (s(), o("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + a(I), 1))), 128))
                    ])
                  ])) : c("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Af, [
                    e("summary", null, [
                      $[20] || ($[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Vf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(A, null, ee(t.preview.changes.models.referenced, (I) => (s(), o("div", {
                        key: I,
                        class: "change-item"
                      }, a(I), 1))), 128))
                    ])
                  ])) : c("", !0)
                ])) : c("", !0),
                u.value ? (s(), E(xf, {
                  key: 1,
                  "conflict-count": f.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : c("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Gf, [
                  $[26] || ($[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", jf, [
                    e("label", Hf, [
                      Ve(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (I) => y.value = I),
                        value: "all"
                      }, null, 512), [
                        [ts, y.value]
                      ]),
                      $[22] || ($[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", qf, [
                      Ve(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (I) => y.value = I),
                        value: "required"
                      }, null, 512), [
                        [ts, y.value]
                      ]),
                      $[23] || ($[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Kf, [
                      Ve(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (I) => y.value = I),
                        value: "skip"
                      }, null, 512), [
                        [ts, y.value]
                      ]),
                      $[24] || ($[24] = e("span", null, "Skip model downloads", -1)),
                      $[25] || ($[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[27] || ($[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : c("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Yf, [
                  $[28] || ($[28] = e("span", { class: "icon" }, "✓", -1)),
                  w(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ]),
            e("div", Qf, [
              k(se, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (I) => p.$emit("close"))
              }, {
                default: r(() => [...$[29] || ($[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(A, { key: 0 }, [
                k(se, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: $[5] || ($[5] = (I) => W(!1))
                }, {
                  default: r(() => [...$[30] || ($[30] = [
                    w(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(se, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: $[6] || ($[6] = (I) => W(!0))
                }, {
                  default: r(() => [...$[31] || ($[31] = [
                    w(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = t.preview) != null && T.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: $[7] || ($[7] = (I) => W(!0))
              }, {
                default: r(() => [...$[32] || ($[32] = [
                  w(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(A, { key: 2 }, [
                u.value && !b.value ? (s(), E(se, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (I) => i("openConflictResolution"))
                }, {
                  default: r(() => [
                    w(" Resolve Conflicts (" + a(h.value) + "/" + a(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(se, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !C.value,
                  onClick: $[9] || ($[9] = (I) => W(!1))
                }, {
                  default: r(() => [...$[33] || ($[33] = [
                    w(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Zf = /* @__PURE__ */ Z(Xf, [["__scopeId", "data-v-300c7b2f"]]), Jf = { class: "modal-header" }, eg = { class: "modal-title" }, tg = { class: "modal-body" }, sg = {
  key: 0,
  class: "loading-state"
}, og = {
  key: 1,
  class: "warning-box"
}, ng = {
  key: 0,
  class: "commits-section"
}, ag = { class: "commit-list" }, lg = { class: "commit-hash" }, ig = { class: "commit-message" }, rg = { class: "commit-date" }, dg = { class: "force-option" }, cg = { class: "checkbox-option" }, ug = { class: "commit-summary" }, mg = {
  key: 0,
  class: "commits-section"
}, vg = { class: "commit-list" }, fg = { class: "commit-hash" }, gg = { class: "commit-message" }, pg = { class: "commit-date" }, hg = {
  key: 1,
  class: "up-to-date"
}, yg = { class: "modal-actions" }, wg = /* @__PURE__ */ X({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: l }) {
    const n = l, i = _(!1);
    function y(g) {
      n("push", { force: g });
    }
    return (g, m) => {
      var v, d, u;
      return s(), E(je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: m[7] || (m[7] = (f) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: m[6] || (m[6] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", Jf, [
              e("h3", eg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: m[0] || (m[0] = (f) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", tg, [
              t.loading ? (s(), o("div", sg, [...m[8] || (m[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                w(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", og, [...m[9] || (m[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(A, { key: 2 }, [
                m[13] || (m[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", ng, [
                  m[10] || (m[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", ag, [
                    (s(!0), o(A, null, ee(t.preview.commits, (f) => (s(), o("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      e("span", lg, a(f.short_hash || f.hash.slice(0, 7)), 1),
                      e("span", ig, a(f.message), 1),
                      e("span", rg, a(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                e("div", dg, [
                  e("label", cg, [
                    Ve(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": m[1] || (m[1] = (f) => i.value = f)
                    }, null, 512), [
                      [ns, i.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", ug, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  w(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", mg, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", vg, [
                    (s(!0), o(A, null, ee(t.preview.commits, (f) => (s(), o("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      e("span", fg, a(f.short_hash || f.hash.slice(0, 7)), 1),
                      e("span", gg, a(f.message), 1),
                      e("span", pg, a(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", hg, [
                  m[16] || (m[16] = e("span", { class: "icon" }, "✓", -1)),
                  w(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : c("", !0)
            ]),
            e("div", yg, [
              k(se, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (f) => g.$emit("close"))
              }, {
                default: r(() => [...m[17] || (m[17] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (u = t.preview) != null && u.remote_has_new_commits ? (s(), o(A, { key: 0 }, [
                k(se, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (f) => g.$emit("pull-first"))
                }, {
                  default: r(() => [...m[18] || (m[18] = [
                    w(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(se, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (f) => y(!0))
                }, {
                  default: r(() => [...m[19] || (m[19] = [
                    w(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (f) => y(!1))
              }, {
                default: r(() => [...m[20] || (m[20] = [
                  w(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : c("", !0)
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), kg = /* @__PURE__ */ Z(wg, [["__scopeId", "data-v-bc6ded53"]]), bg = { class: "resolution-choice-group" }, _g = ["disabled"], $g = ["disabled"], Cg = /* @__PURE__ */ X({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("div", bg, [
      e("button", {
        class: le(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => l.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, _g),
      e("button", {
        class: le(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => l.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, $g)
    ]));
  }
}), xg = /* @__PURE__ */ Z(Cg, [["__scopeId", "data-v-985715ed"]]), Sg = { class: "conflict-header" }, Ig = { class: "conflict-info" }, Eg = { class: "workflow-name" }, Mg = { class: "conflict-description" }, Tg = {
  key: 0,
  class: "resolved-badge"
}, zg = { class: "resolved-text" }, Rg = { class: "conflict-hashes" }, Lg = { class: "hash-item" }, Pg = { class: "hash-item" }, Dg = { class: "conflict-actions" }, Ng = /* @__PURE__ */ X({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = _(n.resolution);
    bt(() => n.resolution, (d) => {
      y.value = d;
    }), bt(y, (d) => {
      d && i("resolve", d);
    });
    const g = L(() => y.value !== null), m = L(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = L(() => {
      switch (y.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, u) => {
      var f, h;
      return s(), o("div", {
        class: le(["conflict-item", { resolved: g.value }])
      }, [
        e("div", Sg, [
          u[2] || (u[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Ig, [
            e("code", Eg, a(t.conflict.name) + ".json", 1),
            e("div", Mg, a(m.value), 1)
          ]),
          g.value ? (s(), o("div", Tg, [
            u[1] || (u[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", zg, a(v.value), 1)
          ])) : c("", !0)
        ]),
        e("div", Rg, [
          e("span", Lg, [
            u[3] || (u[3] = w("Your: ", -1)),
            e("code", null, a(((f = t.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Pg, [
            u[4] || (u[4] = w("Theirs: ", -1)),
            e("code", null, a(((h = t.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Dg, [
          k(xg, {
            modelValue: y.value,
            "onUpdate:modelValue": u[0] || (u[0] = (b) => y.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Ug = /* @__PURE__ */ Z(Ng, [["__scopeId", "data-v-506d3bbf"]]), Bg = { class: "resolution-content" }, Og = {
  key: 0,
  class: "error-box"
}, Fg = { class: "resolution-header" }, Ag = { class: "header-stats" }, Vg = { class: "stat" }, Wg = { class: "stat-value" }, Gg = { class: "stat resolved" }, jg = { class: "stat-value" }, Hg = {
  key: 0,
  class: "stat pending"
}, qg = { class: "stat-value" }, Kg = { class: "conflicts-list" }, Yg = {
  key: 1,
  class: "all-resolved-message"
}, Qg = /* @__PURE__ */ X({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = L(() => n.resolutions.size), g = L(() => n.workflowConflicts.length - y.value), m = L(() => y.value === n.workflowConflicts.length), v = L(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(b) {
      const C = n.resolutions.get(b);
      return (C == null ? void 0 : C.resolution) ?? null;
    }
    function u(b, C) {
      i("resolve", b, C);
    }
    function f() {
      i("close");
    }
    function h() {
      i("apply");
    }
    return (b, C) => (s(), E(tt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: r(() => [
        e("div", Bg, [
          t.error ? (s(), o("div", Og, [
            C[1] || (C[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              C[0] || (C[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : c("", !0),
          e("div", Fg, [
            e("div", Ag, [
              e("div", Vg, [
                e("span", Wg, a(t.workflowConflicts.length), 1),
                C[2] || (C[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Gg, [
                e("span", jg, a(y.value), 1),
                C[3] || (C[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Hg, [
                e("span", qg, a(g.value), 1),
                C[4] || (C[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : c("", !0)
            ]),
            C[5] || (C[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Kg, [
            (s(!0), o(A, null, ee(t.workflowConflicts, (R) => (s(), E(Ug, {
              key: R.name,
              conflict: R,
              resolution: d(R.name),
              onResolve: (W) => u(R.name, W)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (s(), o("div", Yg, [
            C[6] || (C[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : c("", !0)
        ])
      ]),
      footer: r(() => [
        k(de, {
          variant: "secondary",
          onClick: f
        }, {
          default: r(() => [...C[7] || (C[7] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C[8] || (C[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(de, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: h
        }, {
          default: r(() => [
            w(a(v.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Xg = /* @__PURE__ */ Z(Qg, [["__scopeId", "data-v-c58d150d"]]), Zg = { class: "node-conflict-item" }, Jg = { class: "node-header" }, ep = { class: "node-name" }, tp = { class: "node-id" }, sp = { class: "version-comparison" }, op = { class: "version yours" }, np = { class: "version theirs" }, ap = { class: "chosen-version" }, lp = { class: "chosen" }, ip = { class: "chosen-reason" }, rp = { class: "affected-workflows" }, dp = { class: "wf-source" }, cp = { class: "wf-version" }, up = /* @__PURE__ */ X({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (l, n) => (s(), o("div", Zg, [
      e("div", Jg, [
        e("code", ep, a(t.conflict.node_name), 1),
        e("span", tp, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", sp, [
        e("div", op, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", np, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", ap, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", lp, a(t.conflict.chosen_version), 1),
        e("span", ip, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", rp, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(A, null, ee(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", dp, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", cp, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), mp = /* @__PURE__ */ Z(up, [["__scopeId", "data-v-8b626725"]]), vp = { class: "validation-content" }, fp = {
  key: 0,
  class: "compatible-message"
}, gp = { class: "conflicts-list" }, pp = {
  key: 2,
  class: "warnings-section"
}, hp = /* @__PURE__ */ X({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = L(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, m) => (s(), E(tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (v) => i("cancel"))
    }, {
      body: r(() => [
        e("div", vp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", fp, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(A, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", gp, [
              (s(!0), o(A, null, ee(t.validation.node_conflicts, (v) => (s(), E(mp, {
                key: v.node_id,
                conflict: v
              }, null, 8, ["conflict"]))), 128))
            ]),
            m[7] || (m[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : c("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", pp, [
            m[8] || (m[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(A, null, ee(t.validation.warnings, (v, d) => (s(), o("li", { key: d }, a(v), 1))), 128))
            ])
          ])) : c("", !0)
        ])
      ]),
      footer: r(() => [
        k(de, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (v) => i("cancel"))
        }, {
          default: r(() => [...m[9] || (m[9] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(de, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (v) => i("goBack"))
        }, {
          default: r(() => [...m[10] || (m[10] = [
            w(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(de, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (v) => i("proceed"))
        }, {
          default: r(() => [
            w(a(y.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), yp = /* @__PURE__ */ Z(hp, [["__scopeId", "data-v-fefd26ed"]]), wp = { key: 0 }, kp = /* @__PURE__ */ X({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: l }) {
    const n = l, {
      getRemotes: i,
      addRemote: y,
      removeRemote: g,
      updateRemoteUrl: m,
      fetchRemote: v,
      getRemoteSyncStatus: d,
      getPullPreview: u,
      pullFromRemote: f,
      getPushPreview: h,
      pushToRemote: b,
      validateMerge: C
    } = We(), R = _([]), W = _(null), p = _({}), $ = _(!1), z = _(null), T = _(""), I = _(!1), V = _(null), K = _(!1), te = _("add"), P = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), x = L(() => {
      if (!T.value.trim()) return R.value;
      const O = T.value.toLowerCase();
      return R.value.filter(
        (Q) => Q.name.toLowerCase().includes(O) || Q.fetch_url.toLowerCase().includes(O) || Q.push_url.toLowerCase().includes(O)
      );
    });
    async function M() {
      $.value = !0, z.value = null;
      try {
        const O = await i();
        R.value = O.remotes, W.value = O.current_branch_tracking || null, await Promise.all(
          O.remotes.map(async (Q) => {
            const fe = await d(Q.name);
            fe && (p.value[Q.name] = fe);
          })
        );
      } catch (O) {
        z.value = O instanceof Error ? O.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function B() {
      te.value = "add", P.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function U(O) {
      const Q = R.value.find((fe) => fe.name === O);
      Q && (te.value = "edit", P.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, K.value = !0);
    }
    async function ne(O) {
      try {
        te.value === "add" ? await y(O.name, O.fetchUrl) : await m(O.name, O.fetchUrl, O.pushUrl || void 0), K.value = !1, await M();
      } catch (Q) {
        z.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function $e() {
      K.value = !1, P.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(O) {
      V.value = O;
      try {
        await v(O);
        const Q = await d(O);
        Q && (p.value[O] = Q), n("toast", `✓ Fetched from ${O}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        V.value = null;
      }
    }
    async function j(O) {
      if (confirm(`Remove remote "${O}"?`))
        try {
          await g(O), await M();
        } catch (Q) {
          z.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = _("idle"), ae = L(() => S.value === "pull_preview"), oe = L(
      () => S.value === "resolving" || S.value === "validating"
    ), ze = L(
      () => S.value === "validation_review" || S.value === "executing"
    ), Ce = _(!1), Be = _(null), we = _(!1), re = _(null), ie = _(!1), Oe = _(null), Ne = _(null), ce = _(/* @__PURE__ */ new Map()), H = _(null), xe = _(null), ke = L(() => Oe.value && Vs(Oe.value) ? Oe.value : null);
    async function Ee(O) {
      re.value = O, S.value = "pull_preview", ie.value = !0, Oe.value = null, Ne.value = null;
      try {
        Oe.value = await u(O);
      } catch (Q) {
        Ne.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        ie.value = !1;
      }
    }
    function be() {
      S.value = "idle", Oe.value = null, Ne.value = null, re.value = null;
    }
    async function pe(O) {
      if (!re.value) return;
      S.value = "executing", Ne.value = null;
      const Q = re.value;
      try {
        const fe = await f(Q, O);
        if (fe.rolled_back) {
          Ne.value = `Pull failed and was rolled back: ${fe.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        vt(), S.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await M();
      } catch (fe) {
        Ne.value = fe instanceof Error ? fe.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function He() {
      ke.value && (S.value = "resolving", xe.value = null);
    }
    function $t(O, Q) {
      ce.value.set(O, { name: O, resolution: Q });
    }
    function mt() {
      S.value = "pull_preview";
    }
    async function Fe() {
      S.value = "validating", xe.value = null;
      try {
        const O = Array.from(ce.value.values());
        H.value = await C(re.value, O), S.value = "validation_review";
      } catch (O) {
        xe.value = O instanceof Error ? O.message : "Validation failed", S.value = "resolving";
      }
    }
    async function Ct() {
      S.value = "executing";
      const O = re.value;
      try {
        const Q = Array.from(ce.value.values()), fe = await f(O, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (fe.rolled_back) {
          Ne.value = `Pull failed and was rolled back: ${fe.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        vt(), S.value = "idle", n("toast", `✓ Pulled from ${O}`, "success"), await M();
      } catch (Q) {
        Ne.value = Q instanceof Error ? Q.message : "Pull failed", S.value = "validation_review";
      }
    }
    function wt() {
      S.value = "resolving";
    }
    function xt() {
      vt(), S.value = "idle";
    }
    function vt() {
      ce.value.clear(), H.value = null, xe.value = null, Ne.value = null, Oe.value = null, re.value = null;
    }
    async function St(O) {
      re.value = O, Ce.value = !0, ie.value = !0, Be.value = null;
      try {
        Be.value = await h(O);
      } catch (Q) {
        z.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        ie.value = !1;
      }
    }
    function ft() {
      Ce.value = !1, Be.value = null, re.value = null;
    }
    async function Y(O) {
      if (!re.value) return;
      we.value = !0;
      const Q = re.value;
      try {
        await b(Q, O), ft(), n("toast", `✓ Pushed to ${Q}`, "success"), await M();
      } catch (fe) {
        n("toast", fe instanceof Error ? fe.message : "Push failed", "error");
      } finally {
        we.value = !1;
      }
    }
    function N() {
      const O = re.value;
      ft(), O && Ee(O);
    }
    return Ae(M), (O, Q) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (fe) => I.value = !0)
          }, {
            actions: r(() => [
              K.value ? c("", !0) : (s(), E(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: r(() => [...Q[3] || (Q[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          K.value ? c("", !0) : (s(), E(Lt, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (fe) => T.value = fe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: r(() => [
          $.value ? (s(), E(ht, {
            key: 0,
            message: "Loading remotes..."
          })) : z.value ? (s(), E(yt, {
            key: 1,
            message: z.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            K.value ? (s(), E(gf, {
              key: 0,
              mode: te.value,
              "remote-name": P.value.name,
              "fetch-url": P.value.fetchUrl,
              "push-url": P.value.pushUrl,
              onSubmit: ne,
              onCancel: $e
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            R.value.length && !K.value ? (s(), E(Pt, {
              key: 1,
              variant: "compact"
            }, {
              default: r(() => [
                w(" Total: " + a(R.value.length) + " remote" + a(R.value.length !== 1 ? "s" : "") + " ", 1),
                W.value ? (s(), o("span", wp, " • Tracking: " + a(W.value.remote) + "/" + a(W.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            x.value.length && !K.value ? (s(), E(Ge, {
              key: 2,
              title: "REMOTES",
              count: x.value.length
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(x.value, (fe) => (s(), E(tf, {
                  key: fe.name,
                  remote: fe,
                  "sync-status": p.value[fe.name],
                  "fetching-remote": V.value,
                  onFetch: J,
                  onEdit: U,
                  onRemove: j,
                  onPull: Ee,
                  onPush: St
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !x.value.length && !K.value ? (s(), E(rt, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: r(() => [
                k(se, {
                  variant: "primary",
                  onClick: B
                }, {
                  default: r(() => [...Q[4] || (Q[4] = [
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
      k(ut, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (fe) => I.value = !1)
      }, {
        content: r(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: r(() => [
          k(se, {
            variant: "link",
            onClick: F
          }, {
            default: r(() => [...Q[6] || (Q[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Zf, {
        show: ae.value,
        "remote-name": re.value || "",
        preview: Oe.value,
        loading: ie.value,
        pulling: S.value === "executing",
        error: Ne.value,
        "conflict-resolutions": ce.value,
        onClose: be,
        onPull: pe,
        onOpenConflictResolution: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(kg, {
        show: Ce.value,
        "remote-name": re.value || "",
        preview: Be.value,
        loading: ie.value,
        pushing: we.value,
        onClose: ft,
        onPush: Y,
        onPullFirst: N
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      oe.value && ke.value ? (s(), E(Xg, {
        key: 0,
        "workflow-conflicts": ke.value.workflow_conflicts,
        resolutions: ce.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: xe.value,
        onClose: mt,
        onResolve: $t,
        onApply: Fe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : c("", !0),
      ze.value && H.value ? (s(), E(yp, {
        key: 1,
        validation: H.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: Ct,
        onGoBack: wt,
        onCancel: xt
      }, null, 8, ["validation", "executing"])) : c("", !0)
    ], 64));
  }
}), bp = /* @__PURE__ */ Z(kp, [["__scopeId", "data-v-9ae3b76d"]]), _p = { class: "setting-info" }, $p = { class: "setting-label" }, Cp = {
  key: 0,
  class: "required-marker"
}, xp = {
  key: 0,
  class: "setting-description"
}, Sp = { class: "setting-control" }, Ip = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: le(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", _p, [
        e("div", $p, [
          w(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Cp, "*")) : c("", !0)
        ]),
        t.description ? (s(), o("div", xp, a(t.description), 1)) : c("", !0)
      ]),
      e("div", Sp, [
        _e(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Bt = /* @__PURE__ */ Z(Ip, [["__scopeId", "data-v-cb5d236c"]]), Ep = { class: "toggle" }, Mp = ["checked", "disabled"], Tp = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("label", Ep, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Mp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), vs = /* @__PURE__ */ Z(Tp, [["__scopeId", "data-v-71c0f550"]]), zp = { class: "settings-section" }, Rp = { class: "path-setting" }, Lp = { class: "path-value" }, Pp = { class: "path-setting" }, Dp = { class: "path-value" }, Np = { class: "settings-section" }, Up = { class: "settings-section" }, Bp = { class: "settings-section" }, Op = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: l, updateConfig: n } = We(), i = _(!1), y = _(null), g = _(null), m = _(null), v = _(null), d = _(""), u = _(""), f = _(!0), h = _(!0), b = _(!1), C = L(() => v.value ? d.value !== (v.value.civitai_api_key || "") : !1);
    async function R() {
      i.value = !0, y.value = null;
      try {
        m.value = await l(), v.value = { ...m.value }, d.value = m.value.civitai_api_key || "", u.value = m.value.huggingface_token || "", f.value = m.value.auto_sync_models, h.value = m.value.confirm_destructive;
        const z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        b.value = z === "true";
      } catch (z) {
        y.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function W() {
      var z;
      g.value = null;
      try {
        const T = {};
        d.value !== (((z = v.value) == null ? void 0 : z.civitai_api_key) || "") && (T.civitai_api_key = d.value || null), await n(T), await R(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (T) {
        g.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to save settings"
        };
      }
    }
    function p() {
      v.value && (d.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", f.value = v.value.auto_sync_models, h.value = v.value.confirm_destructive, g.value = null);
    }
    function $(z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(z)), console.log("[ComfyGit] Auto-refresh setting saved:", z);
    }
    return Ae(R), (z, T) => (s(), E(Ye, null, {
      header: r(() => [
        k(Qe, { title: "WORKSPACE SETTINGS" }, {
          actions: r(() => [
            k(se, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: W
            }, {
              default: r(() => [...T[5] || (T[5] = [
                w(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (s(), E(se, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: p
            }, {
              default: r(() => [...T[6] || (T[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: r(() => [
        i.value ? (s(), E(ht, {
          key: 0,
          message: "Loading workspace settings..."
        })) : y.value ? (s(), E(yt, {
          key: 1,
          message: y.value,
          retry: !0,
          onRetry: R
        }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
          k(Ge, { title: "WORKSPACE PATHS" }, {
            default: r(() => {
              var I, V;
              return [
                e("div", zp, [
                  e("div", Rp, [
                    T[7] || (T[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    T[8] || (T[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Lp, a(((I = m.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Pp, [
                    T[9] || (T[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    T[10] || (T[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Dp, a(((V = m.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Ge, { title: "API CREDENTIALS" }, {
            default: r(() => [
              e("div", Np, [
                k(Bt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: r(() => [
                    k(as, {
                      modelValue: d.value,
                      "onUpdate:modelValue": T[0] || (T[0] = (I) => d.value = I),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Bt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: r(() => [
                    k(as, {
                      modelValue: u.value,
                      "onUpdate:modelValue": T[1] || (T[1] = (I) => u.value = I),
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
          k(Ge, { title: "UI SETTINGS" }, {
            default: r(() => [
              e("div", Up, [
                k(Bt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: r(() => [
                    k(vs, {
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        T[2] || (T[2] = (I) => b.value = I),
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
          k(Ge, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: r(() => [
              e("div", Bp, [
                k(Bt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: r(() => [
                    k(vs, {
                      modelValue: f.value,
                      "onUpdate:modelValue": T[3] || (T[3] = (I) => f.value = I),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Bt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: r(() => [
                    k(vs, {
                      modelValue: h.value,
                      "onUpdate:modelValue": T[4] || (T[4] = (I) => h.value = I),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), E(Pt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: r(() => [
              e("span", {
                style: pt({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Fp = /* @__PURE__ */ Z(Op, [["__scopeId", "data-v-7861bd35"]]), Ap = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: l } = We(), n = _([]), i = _(!1), y = _(null), g = _(!1), m = _(null), v = L(() => n.value.length === 0 ? [] : n.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function d() {
      i.value = !0, y.value = null;
      try {
        n.value = await l(void 0, 500);
      } catch (u) {
        y.value = u instanceof Error ? u.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var u;
          (u = m.value) != null && u.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ae(d), (u, f) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (h) => g.value = !0)
          }, {
            actions: r(() => [
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: d,
                disabled: i.value
              }, {
                default: r(() => [
                  w(a(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          i.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workspace logs..."
          })) : y.value ? (s(), E(yt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: d
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            n.value.length === 0 ? (s(), E(rt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (s(!0), o(A, null, ee(v.value, (h, b) => (s(), o("div", {
                key: b,
                class: le(`log-line log-level-${h.level.toLowerCase()}`)
              }, a(h.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ut, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: f[2] || (f[2] = (h) => g.value = !1)
      }, {
        content: r(() => [...f[3] || (f[3] = [
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
        actions: r(() => [
          k(se, {
            variant: "primary",
            onClick: f[1] || (f[1] = (h) => g.value = !1)
          }, {
            default: r(() => [...f[4] || (f[4] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vp = /* @__PURE__ */ Z(Ap, [["__scopeId", "data-v-39f6a756"]]), Wp = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: l, getStatus: n } = We(), i = _([]), y = _(!1), g = _(null), m = _(!1), v = _("production"), d = _(null), u = L(() => i.value.length === 0 ? [] : i.value.map((h) => ({
      text: `${h.timestamp} - ${h.name} - ${h.level} - ${h.func}:${h.line} - ${h.message}`,
      level: h.level
    })));
    async function f() {
      y.value = !0, g.value = null;
      try {
        i.value = await l(void 0, 500);
        try {
          const h = await n();
          v.value = h.environment || "production";
        } catch {
        }
      } catch (h) {
        g.value = h instanceof Error ? h.message : "Failed to load environment logs";
      } finally {
        y.value = !1, setTimeout(() => {
          var h;
          (h = d.value) != null && h.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ae(f), (h, b) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (C) => m.value = !0)
          }, {
            actions: r(() => [
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: y.value
              }, {
                default: r(() => [
                  w(a(y.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          y.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (s(), E(yt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: f
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            i.value.length === 0 ? (s(), E(rt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(A, null, ee(u.value, (C, R) => (s(), o("div", {
                key: R,
                class: le(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ut, {
        show: m.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (C) => m.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            b[3] || (b[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            b[4] || (b[4] = w(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          b[6] || (b[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: r(() => [
          k(se, {
            variant: "primary",
            onClick: b[1] || (b[1] = (C) => m.value = !1)
          }, {
            default: r(() => [...b[7] || (b[7] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gp = /* @__PURE__ */ Z(Wp, [["__scopeId", "data-v-4f1e6f72"]]), jp = { class: "env-title" }, Hp = {
  key: 0,
  class: "current-badge"
}, qp = {
  key: 0,
  class: "branch-info"
}, Kp = /* @__PURE__ */ X({
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
    return (l, n) => (s(), E(et, {
      status: t.isCurrent ? "synced" : void 0
    }, qt({
      icon: r(() => [
        w(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: r(() => [
        e("div", jp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Hp, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: r(() => [
        t.currentBranch ? (s(), o("span", qp, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + a(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: r(() => [
        _e(l.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: r(() => [
          k(Ue, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Ue, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Ue, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(Ue, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Yp = /* @__PURE__ */ Z(Kp, [["__scopeId", "data-v-9231917a"]]), Qp = { class: "env-details" }, Xp = { class: "status-row" }, Zp = {
  key: 0,
  class: "detail-row"
}, Jp = { class: "value mono" }, eh = {
  key: 1,
  class: "detail-row"
}, th = { class: "value mono small" }, sh = { class: "detail-row" }, oh = { class: "value" }, nh = { class: "detail-row" }, ah = { class: "value" }, lh = { class: "detail-row" }, ih = { class: "value" }, rh = {
  key: 2,
  class: "section-divider"
}, dh = {
  key: 3,
  class: "detail-row"
}, ch = { class: "value" }, uh = {
  key: 4,
  class: "detail-row"
}, mh = { class: "value" }, vh = { class: "footer-actions" }, fh = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: l }) {
    const n = l;
    function i(y) {
      if (!y) return "Unknown";
      try {
        const g = new Date(y), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), d = Math.floor(v / 6e4), u = Math.floor(v / 36e5), f = Math.floor(v / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : f < 30 ? `${f} ${f === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return y;
      }
    }
    return (y, g) => (s(), E(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (m) => n("close"))
    }, {
      body: r(() => [
        e("div", Qp, [
          e("div", Xp, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Zp, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Jp, a(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (s(), o("div", eh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", th, a(t.environment.path), 1)
          ])) : c("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", sh, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", oh, a(t.environment.workflow_count), 1)
          ]),
          e("div", nh, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", ah, a(t.environment.node_count), 1)
          ]),
          e("div", lh, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", ih, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", rh)) : c("", !0),
          t.environment.created_at ? (s(), o("div", dh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", ch, a(i(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (s(), o("div", uh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", mh, a(i(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: r(() => [
        e("div", vh, [
          t.canDelete ? (s(), E(de, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (m) => n("delete", t.environment.name))
          }, {
            default: r(() => [...g[12] || (g[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(de, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (m) => n("close"))
          }, {
            default: r(() => [...g[13] || (g[13] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gh = /* @__PURE__ */ Z(fh, [["__scopeId", "data-v-59855453"]]), Ws = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Gs = "3.12", bs = [
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
], js = "auto", ph = { class: "progress-bar" }, hh = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const l = t, n = L(() => `${Math.max(0, Math.min(100, l.progress))}%`);
    return (i, y) => (s(), o("div", ph, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Hs = /* @__PURE__ */ Z(hh, [["__scopeId", "data-v-1beb0512"]]), yh = { class: "task-progress" }, wh = { class: "progress-info" }, kh = { class: "progress-percentage" }, bh = { class: "progress-message" }, _h = {
  key: 0,
  class: "progress-steps"
}, $h = { class: "step-icon" }, Ch = { class: "step-label" }, xh = /* @__PURE__ */ X({
  __name: "TaskProgressDisplay",
  props: {
    progress: {},
    message: {},
    currentPhase: {},
    variant: { default: "default" },
    showSteps: { type: Boolean, default: !1 },
    steps: { default: () => [] }
  },
  setup(t) {
    const l = t;
    function n(y) {
      const g = l.steps.find((m) => m.id === y);
      return g ? l.progress >= g.progressThreshold ? "completed" : l.currentPhase === y ? "active" : "pending" : "pending";
    }
    function i(y) {
      const g = n(y);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (y, g) => (s(), o("div", yh, [
      k(Hs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", wh, [
        e("span", kh, a(t.progress) + "%", 1),
        e("span", bh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", _h, [
        (s(!0), o(A, null, ee(t.steps, (m) => (s(), o("div", {
          key: m.id,
          class: le(["step", n(m.id)])
        }, [
          e("span", $h, a(i(m.id)), 1),
          e("span", Ch, a(m.label), 1)
        ], 2))), 128))
      ])) : c("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Z(xh, [["__scopeId", "data-v-9d1de66c"]]), Sh = {
  key: 0,
  class: "create-env-form"
}, Ih = { class: "form-field" }, Eh = { class: "form-field" }, Mh = ["value"], Th = { class: "form-field" }, zh = ["disabled"], Rh = ["value"], Lh = { class: "form-field" }, Ph = ["value"], Dh = { class: "form-field form-field--checkbox" }, Nh = { class: "form-checkbox" }, Uh = {
  key: 1,
  class: "create-env-progress"
}, Bh = { class: "creating-intro" }, Oh = {
  key: 0,
  class: "progress-warning"
}, Fh = {
  key: 1,
  class: "create-error"
}, Ah = { class: "error-message" }, Vh = {
  key: 1,
  class: "footer-status"
}, Wh = 10, Gh = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: l }) {
    const n = l, { getComfyUIReleases: i, createEnvironment: y, getCreateProgress: g } = We(), m = _(""), v = _(Gs), d = _("latest"), u = _(js), f = _(!1), h = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = _(!1), C = _(!1), R = _({
      progress: 0,
      message: ""
    });
    let W = null, p = 0;
    const $ = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], z = _(null);
    function T() {
      C.value || n("close");
    }
    async function I() {
      const x = m.value.trim();
      if (x) {
        C.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const M = {
            name: x,
            python_version: v.value,
            comfyui_version: d.value,
            torch_backend: u.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, B = await y(M);
          B.status === "started" ? V() : B.status === "error" && (R.value = {
            progress: 0,
            message: B.message || "Failed to start creation",
            error: B.message
          });
        } catch (M) {
          R.value = {
            progress: 0,
            message: M instanceof Error ? M.message : "Unknown error",
            error: M instanceof Error ? M.message : "Unknown error"
          };
        }
      }
    }
    function V() {
      W || (p = 0, W = window.setInterval(async () => {
        try {
          const x = await g();
          p = 0, R.value = {
            progress: x.progress ?? 0,
            message: x.message,
            phase: x.phase,
            error: x.error
          }, x.state === "complete" ? (K(), n("created", x.environment_name || m.value.trim(), f.value)) : x.state === "error" ? (K(), R.value.error = x.error || x.message) : x.state === "idle" && C.value && (K(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          p++, p >= Wh && (K(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      W && (clearInterval(W), W = null);
    }
    function te() {
      C.value = !1, R.value = { progress: 0, message: "" }, n("close");
    }
    async function P() {
      b.value = !0;
      try {
        h.value = await i();
      } catch (x) {
        console.error("Failed to load ComfyUI releases:", x);
      } finally {
        b.value = !1;
      }
    }
    return Ae(async () => {
      var x;
      await fo(), (x = z.value) == null || x.focus(), P();
    }), Ps(() => {
      K();
    }), (x, M) => (s(), E(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !C.value,
      onClose: T
    }, {
      body: r(() => [
        C.value ? (s(), o("div", Uh, [
          e("p", Bh, [
            M[11] || (M[11] = w(" Creating environment ", -1)),
            e("strong", null, a(m.value), 1),
            M[12] || (M[12] = w("... ", -1))
          ]),
          k(is, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: $
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? c("", !0) : (s(), o("p", Oh, " This may take several minutes. Please wait... ")),
          R.value.error ? (s(), o("div", Fh, [
            e("p", Ah, a(R.value.error), 1)
          ])) : c("", !0)
        ])) : (s(), o("div", Sh, [
          e("div", Ih, [
            M[6] || (M[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ve(e("input", {
              ref_key: "nameInput",
              ref: z,
              "onUpdate:modelValue": M[0] || (M[0] = (B) => m.value = B),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: _t(I, ["enter"])
            }, null, 544), [
              [Vt, m.value]
            ])
          ]),
          e("div", Eh, [
            M[7] || (M[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ve(e("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (B) => v.value = B),
              class: "form-select"
            }, [
              (s(!0), o(A, null, ee(ve(Ws), (B) => (s(), o("option", {
                key: B,
                value: B
              }, a(B), 9, Mh))), 128))
            ], 512), [
              [zt, v.value]
            ])
          ]),
          e("div", Th, [
            M[8] || (M[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ve(e("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (B) => d.value = B),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(A, null, ee(h.value, (B) => (s(), o("option", {
                key: B.tag_name,
                value: B.tag_name
              }, a(B.name), 9, Rh))), 128))
            ], 8, zh), [
              [zt, d.value]
            ])
          ]),
          e("div", Lh, [
            M[9] || (M[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ve(e("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (B) => u.value = B),
              class: "form-select"
            }, [
              (s(!0), o(A, null, ee(ve(bs), (B) => (s(), o("option", {
                key: B,
                value: B
              }, a(B) + a(B === "auto" ? " (detect GPU)" : ""), 9, Ph))), 128))
            ], 512), [
              [zt, u.value]
            ])
          ]),
          e("div", Dh, [
            e("label", Nh, [
              Ve(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (B) => f.value = B)
              }, null, 512), [
                [ns, f.value]
              ]),
              M[10] || (M[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: r(() => [
        C.value ? (s(), o(A, { key: 1 }, [
          R.value.error ? (s(), E(de, {
            key: 0,
            variant: "secondary",
            onClick: te
          }, {
            default: r(() => [...M[15] || (M[15] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Vh, " Creating environment... "))
        ], 64)) : (s(), o(A, { key: 0 }, [
          k(de, {
            variant: "primary",
            disabled: !m.value.trim(),
            onClick: I
          }, {
            default: r(() => [...M[13] || (M[13] = [
              w(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(de, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (B) => n("close"))
          }, {
            default: r(() => [...M[14] || (M[14] = [
              w(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), jh = /* @__PURE__ */ Z(Gh, [["__scopeId", "data-v-f37eaa42"]]), Hh = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: l, emit: n }) {
    const i = n, { getEnvironments: y } = We(), g = _([]), m = _(!1), v = _(null), d = _(""), u = _(!1), f = _(!1), h = _(null), b = L(
      () => g.value.find((T) => T.is_current)
    ), C = L(() => {
      if (!d.value.trim()) return g.value;
      const T = d.value.toLowerCase();
      return g.value.filter(
        (I) => {
          var V;
          return I.name.toLowerCase().includes(T) || ((V = I.current_branch) == null ? void 0 : V.toLowerCase().includes(T));
        }
      );
    });
    function R(T, I) {
      f.value = !1, i("created", T, I);
    }
    function W() {
      f.value = !0;
    }
    function p(T) {
      h.value = T;
    }
    function $(T) {
      h.value = null, i("delete", T);
    }
    async function z() {
      m.value = !0, v.value = null;
      try {
        g.value = await y();
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Ae(z), l({
      loadEnvironments: z,
      openCreateModal: W
    }), (T, I) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (V) => u.value = !0)
          }, {
            actions: r(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: r(() => [...I[6] || (I[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: z
              }, {
                default: r(() => [...I[7] || (I[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          k(Lt, {
            modelValue: d.value,
            "onUpdate:modelValue": I[1] || (I[1] = (V) => d.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          m.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(Pt, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                w(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                b.value ? (s(), o(A, { key: 0 }, [
                  I[8] || (I[8] = w(" • Current: ", -1)),
                  e("strong", null, a(b.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (s(), E(Ge, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: r(() => [
                (s(!0), o(A, null, ee(C.value, (V) => (s(), E(Yp, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: r(() => [
                    V.is_current ? c("", !0) : (s(), E(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => T.$emit("switch", V.name)
                    }, {
                      default: r(() => [...I[9] || (I[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => p(V)
                    }, {
                      default: r(() => [...I[10] || (I[10] = [
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
            C.value.length ? c("", !0) : (s(), E(rt, {
              key: 2,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, qt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: r(() => [
                  k(se, {
                    variant: "primary",
                    onClick: W
                  }, {
                    default: r(() => [...I[11] || (I[11] = [
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
      k(ut, {
        show: u.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (V) => u.value = !1)
      }, {
        content: r(() => [...I[12] || (I[12] = [
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
        actions: r(() => [
          k(se, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (V) => u.value = !1)
          }, {
            default: r(() => [...I[13] || (I[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), E(gh, {
        key: 0,
        environment: h.value,
        "can-delete": g.value.length > 1,
        onClose: I[4] || (I[4] = (V) => h.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      f.value ? (s(), E(jh, {
        key: 1,
        onClose: I[5] || (I[5] = (V) => f.value = !1),
        onCreated: R
      })) : c("", !0)
    ], 64));
  }
}), qh = /* @__PURE__ */ Z(Hh, [["__scopeId", "data-v-d6dc0255"]]), Kh = { class: "file-path" }, Yh = { class: "file-path-text" }, Qh = ["title"], Xh = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, n = _(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(l.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy:", y);
      }
    }
    return (y, g) => (s(), o("div", Kh, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Yh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Qh)) : c("", !0)
    ]));
  }
}), Zh = /* @__PURE__ */ Z(Xh, [["__scopeId", "data-v-f0982173"]]), Jh = { class: "export-blocked" }, e1 = { class: "issues-list" }, t1 = { class: "issue-message" }, s1 = {
  key: 0,
  class: "issue-details"
}, o1 = ["onClick"], n1 = { class: "issue-fix" }, a1 = /* @__PURE__ */ X({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const l = t, n = rs({});
    function i(y) {
      const g = l.issues[y];
      return n[y] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (y, g) => (s(), E(tt, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (m) => y.$emit("close"))
    }, {
      body: r(() => [
        e("div", Jh, [
          g[2] || (g[2] = e("div", { class: "error-header" }, [
            e("span", { class: "error-icon" }, [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            e("div", { class: "error-summary" }, [
              e("h3", { class: "error-title" }, "Export blocked"),
              e("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          e("div", e1, [
            (s(!0), o(A, null, ee(t.issues, (m, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", t1, a(m.message), 1),
              m.details.length ? (s(), o("div", s1, [
                (s(!0), o(A, null, ee(i(v), (d, u) => (s(), o("div", {
                  key: u,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                m.details.length > 3 && !n[v] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[v] = !0
                }, " +" + a(m.details.length - 3) + " more ", 9, o1)) : c("", !0)
              ])) : c("", !0),
              e("div", n1, [
                m.type === "uncommitted_workflows" ? (s(), o(A, { key: 0 }, [
                  w(" Commit your workflow changes before exporting. ")
                ], 64)) : m.type === "uncommitted_git_changes" ? (s(), o(A, { key: 1 }, [
                  w(" Commit your changes before exporting. ")
                ], 64)) : m.type === "unresolved_issues" ? (s(), o(A, { key: 2 }, [
                  w(" Resolve all workflow issues before exporting. ")
                ], 64)) : c("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: r(() => [
        k(de, {
          variant: "primary",
          onClick: g[0] || (g[0] = (m) => y.$emit("close"))
        }, {
          default: r(() => [...g[3] || (g[3] = [
            w(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), l1 = /* @__PURE__ */ Z(a1, [["__scopeId", "data-v-b52f5e32"]]), i1 = { class: "export-warnings" }, r1 = {
  key: 0,
  class: "success-header"
}, d1 = { class: "warning-header" }, c1 = { class: "warning-summary" }, u1 = { class: "warning-title" }, m1 = { class: "models-section" }, v1 = { class: "models-list" }, f1 = { class: "model-info" }, g1 = { class: "model-filename" }, p1 = { class: "model-workflows" }, h1 = ["onClick"], y1 = /* @__PURE__ */ X({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = _(!1), g = _(null), m = L(() => y.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, i("revalidate");
    }
    return (d, u) => (s(), o(A, null, [
      k(tt, {
        title: "Export Warnings",
        size: "md",
        onClose: u[3] || (u[3] = (f) => d.$emit("cancel"))
      }, {
        body: r(() => [
          e("div", i1, [
            t.models.length === 0 ? (s(), o("div", r1, [...u[4] || (u[4] = [
              e("span", { class: "success-icon" }, [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              e("div", { class: "success-summary" }, [
                e("h3", { class: "success-title" }, "All models have source URLs"),
                e("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (s(), o(A, { key: 1 }, [
              e("div", d1, [
                u[6] || (u[6] = e("span", { class: "warning-icon" }, [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    e("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                e("div", c1, [
                  e("h3", u1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  u[5] || (u[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", m1, [
                e("div", v1, [
                  (s(!0), o(A, null, ee(m.value, (f) => (s(), o("div", {
                    key: f.hash,
                    class: "model-item"
                  }, [
                    e("div", f1, [
                      e("div", g1, a(f.filename), 1),
                      e("div", p1, " Used by: " + a(f.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (h) => g.value = f.hash
                    }, " Add Source ", 8, h1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !y.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: u[0] || (u[0] = (f) => y.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : c("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: r(() => [
          k(de, {
            variant: "secondary",
            onClick: u[1] || (u[1] = (f) => d.$emit("cancel"))
          }, {
            default: r(() => [...u[7] || (u[7] = [
              w(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(de, {
            variant: "primary",
            onClick: u[2] || (u[2] = (f) => d.$emit("confirm"))
          }, {
            default: r(() => [
              w(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), E(ks, {
        key: 0,
        identifier: g.value,
        onClose: v
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), w1 = /* @__PURE__ */ Z(y1, [["__scopeId", "data-v-b698d882"]]), k1 = { class: "export-card" }, b1 = { class: "export-path-row" }, _1 = { class: "export-actions" }, $1 = {
  key: 1,
  class: "export-warning"
}, C1 = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: l, exportEnvWithForce: n } = We(), i = _(""), y = _(!1), g = _(!1), m = _(!1), v = _(null), d = _(!1), u = _(null), f = _(!1), h = _(!1), b = L(() => y.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function C() {
      y.value = !0, v.value = null;
      try {
        const T = await l();
        u.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? h.value = !0 : await p() : f.value = !0;
      } catch (T) {
        v.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        y.value = !1;
      }
    }
    async function R() {
      h.value = !1, await p();
    }
    async function W() {
      try {
        const T = await l();
        u.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function p() {
      g.value = !0;
      try {
        const T = await n(i.value || void 0);
        v.value = T;
      } catch (T) {
        v.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function $() {
      var T;
      if ((T = v.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (I) {
          console.error("Failed to copy path:", I);
        }
    }
    async function z() {
      var T;
      if ((T = v.value) != null && T.path) {
        m.value = !0;
        try {
          const I = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!I.ok)
            throw new Error(`Download failed: ${I.statusText}`);
          const V = await I.blob(), K = URL.createObjectURL(V), te = v.value.path.split("/").pop() || "environment-export.tar.gz", P = document.createElement("a");
          P.href = K, P.download = te, document.body.appendChild(P), P.click(), document.body.removeChild(P), URL.revokeObjectURL(K);
        } catch (I) {
          console.error("Failed to download:", I), alert(`Download failed: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return (T, I) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (V) => d.value = !0)
          })
        ]),
        content: r(() => [
          k(Ge, { title: "EXPORT OPTIONS" }, {
            default: r(() => [
              e("div", k1, [
                I[7] || (I[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", b1, [
                  k(as, {
                    modelValue: i.value,
                    "onUpdate:modelValue": I[1] || (I[1] = (V) => i.value = V),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", _1, [
                  k(se, {
                    variant: "primary",
                    size: "md",
                    loading: y.value || g.value,
                    disabled: y.value || g.value,
                    onClick: C
                  }, {
                    default: r(() => [
                      I[6] || (I[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      w(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), E(Ge, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: r(() => [
              k(et, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, qt({
                icon: r(() => [
                  w(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  w(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: r(() => [
                  w(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: r(() => [
                    k(Ue, { label: "Saved to:" }, {
                      default: r(() => [
                        k(Zh, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), E(Ue, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", $1, [...I[8] || (I[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: r(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: z
                    }, {
                      default: r(() => [...I[9] || (I[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: $
                    }, {
                      default: r(() => [...I[10] || (I[10] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: I[2] || (I[2] = (V) => v.value = null)
                    }, {
                      default: r(() => [...I[11] || (I[11] = [
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
      k(ut, {
        show: d.value,
        title: "What Gets Exported",
        onClose: I[3] || (I[3] = (V) => d.value = !1)
      }, {
        content: r(() => [...I[12] || (I[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  w(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  w(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  w(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  w(" — Environment settings and metadata")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Use Cases:"),
              e("ul", null, [
                e("li", null, "Share environments with collaborators"),
                e("li", null, "Back up your setup for safekeeping"),
                e("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            e("p", { class: "info-note" }, [
              e("strong", null, "Note:"),
              w(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      f.value && u.value ? (s(), E(l1, {
        key: 0,
        issues: u.value.blocking_issues,
        onClose: I[4] || (I[4] = (V) => f.value = !1)
      }, null, 8, ["issues"])) : c("", !0),
      h.value && u.value ? (s(), E(w1, {
        key: 1,
        models: u.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: I[5] || (I[5] = (V) => h.value = !1),
        onRevalidate: W
      }, null, 8, ["models"])) : c("", !0)
    ], 64));
  }
}), x1 = /* @__PURE__ */ Z(C1, [["__scopeId", "data-v-f4d120f2"]]), S1 = { class: "file-input-wrapper" }, I1 = ["accept", "multiple", "disabled"], E1 = /* @__PURE__ */ X({
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
  setup(t, { expose: l, emit: n }) {
    const i = n, y = _(null);
    function g() {
      var v;
      (v = y.value) == null || v.click();
    }
    function m(v) {
      const d = v.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return l({
      triggerInput: g
    }), (v, d) => (s(), o("div", S1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: y,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, I1),
      k(se, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: r(() => [
          _e(v.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
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
}), M1 = /* @__PURE__ */ Z(E1, [["__scopeId", "data-v-cd192091"]]), T1 = {
  key: 0,
  class: "drop-zone-empty"
}, z1 = { class: "drop-zone-text" }, R1 = { class: "drop-zone-primary" }, L1 = { class: "drop-zone-secondary" }, P1 = { class: "drop-zone-actions" }, D1 = {
  key: 1,
  class: "drop-zone-file"
}, N1 = { class: "file-info" }, U1 = { class: "file-details" }, B1 = { class: "file-name" }, O1 = { class: "file-size" }, F1 = /* @__PURE__ */ X({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: l }) {
    const n = l, i = _(!1), y = _(null), g = _(0), m = L(() => y.value !== null), v = L(() => {
      var p;
      return ((p = y.value) == null ? void 0 : p.name) || "";
    }), d = L(() => {
      if (!y.value) return "";
      const p = y.value.size;
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(p) {
      var $;
      p.stopPropagation(), g.value++, ($ = p.dataTransfer) != null && $.types.includes("Files") && (i.value = !0);
    }
    function f(p) {
      p.stopPropagation(), p.dataTransfer && (p.dataTransfer.dropEffect = "copy");
    }
    function h(p) {
      p.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b(p) {
      var z;
      p.stopPropagation(), g.value = 0, i.value = !1;
      const $ = (z = p.dataTransfer) == null ? void 0 : z.files;
      $ && $.length > 0 && R($[0]);
    }
    function C(p) {
      p.length > 0 && R(p[0]);
    }
    function R(p) {
      y.value = p, n("fileSelected", p);
    }
    function W() {
      y.value = null, n("clear");
    }
    return (p, $) => (s(), o("div", {
      class: le(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: Pe(u, ["prevent"]),
      onDragover: Pe(f, ["prevent"]),
      onDragleave: Pe(h, ["prevent"]),
      onDrop: Pe(b, ["prevent"])
    }, [
      m.value ? (s(), o("div", D1, [
        e("div", N1, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", U1, [
            e("div", B1, a(v.value), 1),
            e("div", O1, a(d.value), 1)
          ])
        ]),
        k(se, {
          variant: "ghost",
          size: "xs",
          onClick: W,
          title: "Remove file"
        }, {
          default: r(() => [...$[2] || ($[2] = [
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
      ])) : (s(), o("div", T1, [
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
        e("div", z1, [
          e("p", R1, a(t.primaryText), 1),
          e("p", L1, a(t.secondaryText), 1)
        ]),
        e("div", P1, [
          k(M1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: r(() => [
              w(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), A1 = /* @__PURE__ */ Z(F1, [["__scopeId", "data-v-b774d3bb"]]), V1 = { class: "import-preview" }, W1 = { class: "preview-header" }, G1 = {
  key: 0,
  class: "source-env"
}, j1 = { class: "preview-content" }, H1 = { class: "preview-section" }, q1 = { class: "section-header" }, K1 = { class: "section-info" }, Y1 = { class: "section-count" }, Q1 = {
  key: 0,
  class: "item-list"
}, X1 = { class: "item-name" }, Z1 = {
  key: 0,
  class: "item-more"
}, J1 = { class: "preview-section" }, ey = { class: "section-header" }, ty = { class: "section-info" }, sy = { class: "section-count" }, oy = {
  key: 0,
  class: "item-list"
}, ny = { class: "item-details" }, ay = { class: "item-name" }, ly = { class: "item-meta" }, iy = {
  key: 0,
  class: "item-more"
}, ry = { class: "preview-section" }, dy = { class: "section-header" }, cy = { class: "section-info" }, uy = { class: "section-count" }, my = {
  key: 0,
  class: "item-list"
}, vy = { class: "item-name" }, fy = {
  key: 0,
  class: "item-more"
}, gy = {
  key: 0,
  class: "preview-section"
}, py = { class: "git-info" }, hy = /* @__PURE__ */ X({
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
    const l = t, n = L(() => l.workflows.length), i = L(() => l.models.length), y = L(() => l.nodes.length);
    function g(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, v) => (s(), o("div", V1, [
      e("div", W1, [
        k(ot, null, {
          default: r(() => [...v[0] || (v[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", G1, [
          v[1] || (v[1] = w(" From: ", -1)),
          k(gs, null, {
            default: r(() => [
              w(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", j1, [
        e("div", H1, [
          e("div", q1, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", K1, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Y1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Q1, [
            (s(!0), o(A, null, ee(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", X1, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Z1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", J1, [
          e("div", ey, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", ty, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", sy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", oy, [
            (s(!0), o(A, null, ee(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ny, [
                e("span", ay, a(d.filename), 1),
                e("span", ly, a(g(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", iy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", ry, [
          e("div", dy, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", cy, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", uy, a(y.value) + " node" + a(y.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", my, [
            (s(!0), o(A, null, ee(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", vy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", fy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", gy, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", py, [
            t.gitBranch ? (s(), E(Ue, {
              key: 0,
              label: "Branch"
            }, {
              default: r(() => [
                k(gs, null, {
                  default: r(() => [
                    w(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (s(), E(Ue, {
              key: 1,
              label: "Commit"
            }, {
              default: r(() => [
                k(Ns, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), yy = /* @__PURE__ */ Z(hy, [["__scopeId", "data-v-182fe113"]]), wy = { class: "import-config" }, ky = { class: "config-container" }, by = { class: "config-field" }, _y = { class: "input-wrapper" }, $y = ["value"], Cy = {
  key: 0,
  class: "validating-indicator"
}, xy = {
  key: 1,
  class: "valid-indicator"
}, Sy = {
  key: 0,
  class: "field-error"
}, Iy = { class: "config-field" }, Ey = { class: "strategy-options" }, My = ["value", "checked", "onChange"], Ty = { class: "strategy-content" }, zy = { class: "strategy-label" }, Ry = { class: "strategy-description" }, Ly = { class: "config-field switch-field" }, Py = { class: "switch-label" }, Dy = ["checked"], Ny = { class: "advanced-section" }, Uy = { class: "advanced-content" }, By = { class: "config-field" }, Oy = ["value"], Fy = ["value"], Ay = /* @__PURE__ */ X({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: l }) {
    const n = t, i = l, y = _(!1), g = _(!1);
    bt(() => n.nameError, (f) => {
      y.value = !1, g.value = !f && n.name.length > 0;
    });
    const m = [
      {
        value: "all",
        label: "Download All",
        description: "Download all models with available sources"
      },
      {
        value: "required",
        label: "Required Only",
        description: "Only download models marked as required in workflows"
      },
      {
        value: "skip",
        label: "Skip Downloads",
        description: "Don't download any models now (resolve later)"
      }
    ];
    let v = null;
    function d(f) {
      const h = f.target.value;
      i("update:name", h), g.value = !1, v && clearTimeout(v), h.length > 0 ? (y.value = !0, v = setTimeout(() => {
        i("validate-name", h);
      }, 400)) : y.value = !1;
    }
    function u() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (f, h) => (s(), o("div", wy, [
      k(ot, null, {
        default: r(() => [...h[2] || (h[2] = [
          w("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", ky, [
        e("div", by, [
          k(ss, { required: "" }, {
            default: r(() => [...h[3] || (h[3] = [
              w("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", _y, [
            e("input", {
              type: "text",
              class: le(["name-input", { error: t.nameError, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: u
            }, null, 42, $y),
            y.value ? (s(), o("span", Cy, "...")) : g.value ? (s(), o("span", xy, "✓")) : c("", !0)
          ]),
          t.nameError ? (s(), o("div", Sy, a(t.nameError), 1)) : c("", !0),
          h[4] || (h[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Iy, [
          k(ss, null, {
            default: r(() => [...h[5] || (h[5] = [
              w("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ey, [
            (s(), o(A, null, ee(m, (b) => e("label", {
              key: b.value,
              class: le(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (C) => i("update:modelStrategy", b.value)
              }, null, 40, My),
              e("div", Ty, [
                e("span", zy, a(b.label), 1),
                e("span", Ry, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ly, [
          e("label", Py, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: h[0] || (h[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, Dy),
            h[6] || (h[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Ny, [
          h[8] || (h[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Uy, [
            e("div", By, [
              k(ss, null, {
                default: r(() => [...h[7] || (h[7] = [
                  w("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: h[1] || (h[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(A, null, ee(ve(bs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, Fy))), 128))
              ], 40, Oy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Vy = /* @__PURE__ */ Z(Ay, [["__scopeId", "data-v-9b948dbf"]]), Wy = {
  key: 0,
  class: "import-empty"
}, Gy = {
  key: 1,
  class: "import-configure"
}, jy = { class: "selected-file-bar" }, Hy = { class: "file-bar-content" }, qy = { class: "file-bar-info" }, Ky = { class: "file-bar-name" }, Yy = { class: "file-bar-size" }, Qy = {
  key: 0,
  class: "preview-loading"
}, Xy = { class: "import-actions" }, Zy = {
  key: 2,
  class: "import-progress"
}, Jy = { class: "creating-intro" }, ew = {
  key: 0,
  class: "progress-warning"
}, tw = {
  key: 1,
  class: "import-error"
}, sw = { class: "error-message" }, ow = {
  key: 3,
  class: "import-complete"
}, nw = { class: "complete-message" }, aw = { class: "complete-title" }, lw = { class: "complete-details" }, iw = { class: "complete-actions" }, rw = /* @__PURE__ */ X({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: l }) {
    const { previewTarballImport: n, validateEnvironmentName: i, executeImport: y, getImportProgress: g } = We(), m = l;
    let v = null;
    const d = _(!1), u = _(null), f = _(!1), h = _(!1), b = _(!1), C = _(""), R = _(!1), W = _(null), p = _(null), $ = _({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), z = _(null), T = _({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), I = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = L(() => {
      if (!p.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const J = p.value;
      return {
        sourceEnvironment: J.comfyui_version ? `ComfyUI ${J.comfyui_version}` : "Unknown",
        workflows: J.workflows.map((j) => j.name),
        models: J.models.map((j) => ({
          filename: j.filename,
          size: 0,
          type: j.relative_path.split("/")[0] || "model"
        })),
        nodes: J.nodes.map((j) => j.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), K = L(() => !R.value && !W.value && p.value && $.value.name.length > 0 && !z.value);
    async function te(J) {
      u.value = J, R.value = !0, W.value = null, p.value = null;
      try {
        const j = await n(J);
        p.value = j;
      } catch (j) {
        W.value = j instanceof Error ? j.message : "Failed to analyze file", console.error("Preview error:", j);
      } finally {
        R.value = !1;
      }
    }
    function P() {
      u.value = null, h.value = !1, b.value = !1, C.value = "", p.value = null, W.value = null, $.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, z.value = null;
    }
    function x() {
      ne(), P(), f.value = !1, R.value = !1, T.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function M(J) {
      if (!J) {
        z.value = "Environment name is required";
        return;
      }
      try {
        const j = await i(J);
        z.value = j.valid ? null : j.error || "Invalid name";
      } catch {
        z.value = "Failed to validate name";
      }
    }
    async function B() {
      if (!(!u.value || !$.value.name)) {
        f.value = !0, h.value = !1, T.value = { message: `Creating environment '${$.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          const J = await y(
            u.value,
            $.value.name,
            $.value.modelStrategy,
            $.value.torchBackend
          );
          J.status === "started" ? U() : (b.value = !1, C.value = J.message, f.value = !1, h.value = !0);
        } catch (J) {
          b.value = !1, C.value = J instanceof Error ? J.message : "Unknown error occurred during import", f.value = !1, h.value = !0;
        }
      }
    }
    function U() {
      v || (v = setInterval(async () => {
        try {
          const J = await g();
          T.value = {
            message: J.message,
            phase: J.phase || "",
            progress: J.progress ?? (J.state === "importing" ? 50 : 0),
            error: J.error || null
          }, J.state === "complete" ? (ne(), b.value = !0, C.value = `Environment '${J.environment_name}' created successfully`, f.value = !1, h.value = !0, $.value.switchAfterImport && J.environment_name && m("import-complete-switch", J.environment_name)) : J.state === "error" && (ne(), b.value = !1, C.value = J.error || J.message, f.value = !1, h.value = !0);
        } catch (J) {
          console.error("Failed to poll import progress:", J);
        }
      }, 2e3));
    }
    function ne() {
      v && (clearInterval(v), v = null);
    }
    function $e(J) {
      return J < 1024 ? `${J} B` : J < 1024 * 1024 ? `${(J / 1024).toFixed(1)} KB` : J < 1024 * 1024 * 1024 ? `${(J / (1024 * 1024)).toFixed(1)} MB` : `${(J / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (J, j) => (s(), o(A, null, [
      k(Ye, null, {
        header: r(() => [
          k(Qe, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (F) => d.value = !0)
          })
        ]),
        content: r(() => {
          var F;
          return [
            !u.value && !f.value ? (s(), o("div", Wy, [
              k(A1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: te
              })
            ])) : u.value && !f.value && !h.value ? (s(), o("div", Gy, [
              e("div", jy, [
                e("div", Hy, [
                  j[6] || (j[6] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", qy, [
                    e("div", Ky, a(u.value.name), 1),
                    e("div", Yy, a($e(u.value.size)), 1)
                  ])
                ]),
                k(se, {
                  variant: "ghost",
                  size: "sm",
                  onClick: P
                }, {
                  default: r(() => [...j[7] || (j[7] = [
                    w(" Change File ", -1)
                  ])]),
                  _: 1
                })
              ]),
              R.value ? (s(), o("div", Qy, [...j[8] || (j[8] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : W.value ? (s(), E(at, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [W.value]
              }, null, 8, ["details"])) : p.value ? (s(), E(yy, {
                key: 2,
                "source-environment": V.value.sourceEnvironment,
                workflows: V.value.workflows,
                models: V.value.models,
                nodes: V.value.nodes,
                "git-branch": V.value.gitBranch,
                "git-commit": V.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : c("", !0),
              p.value ? (s(), E(Vy, {
                key: 3,
                name: $.value.name,
                "onUpdate:name": j[1] || (j[1] = (S) => $.value.name = S),
                "model-strategy": $.value.modelStrategy,
                "onUpdate:modelStrategy": j[2] || (j[2] = (S) => $.value.modelStrategy = S),
                "torch-backend": $.value.torchBackend,
                "onUpdate:torchBackend": j[3] || (j[3] = (S) => $.value.torchBackend = S),
                "switch-after-import": $.value.switchAfterImport,
                "onUpdate:switchAfterImport": j[4] || (j[4] = (S) => $.value.switchAfterImport = S),
                "name-error": z.value,
                onValidateName: M
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : c("", !0),
              $.value.modelStrategy === "skip" && ((F = p.value) != null && F.models_needing_download) ? (s(), E(at, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${p.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : c("", !0),
              e("div", Xy, [
                k(se, {
                  variant: "primary",
                  size: "md",
                  disabled: !K.value,
                  onClick: B
                }, {
                  default: r(() => [...j[9] || (j[9] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 4v4h3l-4 4-4-4h3V4h2z" })
                    ], -1),
                    w(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"]),
                k(se, {
                  variant: "secondary",
                  size: "md",
                  onClick: P
                }, {
                  default: r(() => [...j[10] || (j[10] = [
                    w(" Cancel ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : f.value ? (s(), o("div", Zy, [
              e("p", Jy, [
                j[11] || (j[11] = w(" Importing environment ", -1)),
                e("strong", null, a($.value.name), 1),
                j[12] || (j[12] = w("... ", -1))
              ]),
              k(is, {
                progress: T.value.progress,
                message: T.value.message,
                "current-phase": T.value.phase,
                variant: T.value.error ? "error" : "default",
                "show-steps": !0,
                steps: I
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              T.value.error ? c("", !0) : (s(), o("p", ew, " This may take several minutes. Please wait... ")),
              T.value.error ? (s(), o("div", tw, [
                e("p", sw, a(T.value.error), 1)
              ])) : c("", !0)
            ])) : h.value ? (s(), o("div", ow, [
              e("div", {
                class: le(["complete-icon", b.value ? "success" : "error"])
              }, a(b.value ? "✓" : "✕"), 3),
              e("div", nw, [
                e("div", aw, a(b.value ? "Import Successful" : "Import Failed"), 1),
                e("div", lw, a(C.value), 1)
              ]),
              e("div", iw, [
                k(se, {
                  variant: "primary",
                  size: "md",
                  onClick: x
                }, {
                  default: r(() => [...j[13] || (j[13] = [
                    w(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : c("", !0)
          ];
        }),
        _: 1
      }),
      k(ut, {
        show: d.value,
        title: "How Import Works",
        onClose: j[5] || (j[5] = (F) => d.value = !1)
      }, {
        content: r(() => [...j[14] || (j[14] = [
          e("div", { class: "help-steps" }, [
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "1"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Creates a New Environment"),
                e("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "2"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Preview Before Import"),
                e("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "3"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Choose Model Strategy"),
                e("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            e("div", { class: "help-step" }, [
              e("span", { class: "step-number" }, "4"),
              e("div", { class: "step-content" }, [
                e("strong", null, "Switch When Ready"),
                e("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), dw = /* @__PURE__ */ Z(rw, [["__scopeId", "data-v-bd002125"]]), cw = { class: "header-info" }, uw = { class: "commit-hash" }, mw = {
  key: 0,
  class: "commit-refs"
}, vw = { class: "commit-message" }, fw = { class: "commit-date" }, gw = {
  key: 0,
  class: "loading"
}, pw = {
  key: 1,
  class: "changes-section"
}, hw = { class: "stats-row" }, yw = { class: "stat" }, ww = { class: "stat insertions" }, kw = { class: "stat deletions" }, bw = {
  key: 0,
  class: "change-group"
}, _w = {
  key: 1,
  class: "change-group"
}, $w = {
  key: 0,
  class: "version"
}, Cw = {
  key: 2,
  class: "change-group"
}, xw = { class: "change-item" }, Sw = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const l = t, { getCommitDetail: n } = We(), i = _(null), y = _(!0), g = L(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), m = L(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ae(async () => {
      try {
        i.value = await n(l.commit.hash);
      } finally {
        y.value = !1;
      }
    }), (v, d) => (s(), E(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (u) => v.$emit("close"))
    }, {
      header: r(() => {
        var u, f, h, b;
        return [
          e("div", cw, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", uw, a(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((f = t.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (b = (h = i.value) == null ? void 0 : h.refs) != null && b.length ? (s(), o("span", mw, [
              (s(!0), o(A, null, ee(i.value.refs, (C) => (s(), o("span", {
                key: C,
                class: "ref-badge"
              }, a(C), 1))), 128))
            ])) : c("", !0)
          ]),
          k(de, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (C) => v.$emit("close"))
          }, {
            default: r(() => [...d[5] || (d[5] = [
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
        var u, f;
        return [
          e("div", vw, a(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", fw, a(((f = i.value) == null ? void 0 : f.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          y.value ? (s(), o("div", gw, "Loading details...")) : i.value ? (s(), o("div", pw, [
            e("div", hw, [
              e("span", yw, a(i.value.stats.files_changed) + " files", 1),
              e("span", ww, "+" + a(i.value.stats.insertions), 1),
              e("span", kw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", bw, [
              k(Wt, { variant: "section" }, {
                default: r(() => [...d[6] || (d[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, ee(i.value.changes.workflows.added, (h) => (s(), o("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(h), 1)
              ]))), 128)),
              (s(!0), o(A, null, ee(i.value.changes.workflows.modified, (h) => (s(), o("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(h), 1)
              ]))), 128)),
              (s(!0), o(A, null, ee(i.value.changes.workflows.deleted, (h) => (s(), o("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(h), 1)
              ]))), 128))
            ])) : c("", !0),
            m.value ? (s(), o("div", _w, [
              k(Wt, { variant: "section" }, {
                default: r(() => [...d[10] || (d[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, ee(i.value.changes.nodes.added, (h) => (s(), o("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(h.name), 1),
                h.version ? (s(), o("span", $w, "(" + a(h.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (s(!0), o(A, null, ee(i.value.changes.nodes.removed, (h) => (s(), o("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(h.name), 1)
              ]))), 128))
            ])) : c("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Cw, [
              k(Wt, { variant: "section" }, {
                default: r(() => [...d[13] || (d[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", xw, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: r(() => [
        k(de, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (u) => v.$emit("createBranch", t.commit))
        }, {
          default: r(() => [...d[15] || (d[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(de, {
          variant: "primary",
          onClick: d[2] || (d[2] = (u) => v.$emit("checkout", t.commit))
        }, {
          default: r(() => [...d[16] || (d[16] = [
            w(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Iw = /* @__PURE__ */ Z(Sw, [["__scopeId", "data-v-d256ff6d"]]), Ew = { class: "dialog-message" }, Mw = {
  key: 0,
  class: "dialog-details"
}, Tw = {
  key: 1,
  class: "dialog-warning"
}, zw = /* @__PURE__ */ X({
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
    return (l, n) => (s(), E(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => l.$emit("cancel"))
    }, {
      body: r(() => [
        e("p", Ew, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Mw, [
          (s(!0), o(A, null, ee(t.details, (i, y) => (s(), o("div", {
            key: y,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : c("", !0),
        t.warning ? (s(), o("p", Tw, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + a(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: r(() => [
        k(de, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => l.$emit("cancel"))
        }, {
          default: r(() => [
            w(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(de, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => l.$emit("secondary"))
        }, {
          default: r(() => [
            w(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        k(de, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
        }, {
          default: r(() => [
            w(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Rw = /* @__PURE__ */ Z(zw, [["__scopeId", "data-v-3670b9f5"]]), Lw = { class: "base-textarea-wrapper" }, Pw = ["value", "rows", "placeholder", "disabled", "maxlength"], Dw = {
  key: 0,
  class: "base-textarea-count"
}, Nw = /* @__PURE__ */ X({
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
    return (l, n) => (s(), o("div", Lw, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = _t(Pe((i) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = _t(Pe((i) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Pw),
      t.showCharCount && t.maxLength ? (s(), o("div", Dw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), zs = /* @__PURE__ */ Z(Nw, [["__scopeId", "data-v-5516e6fc"]]), Uw = ["checked", "disabled"], Bw = { class: "base-checkbox-box" }, Ow = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Fw = {
  key: 0,
  class: "base-checkbox-label"
}, Aw = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("label", {
      class: le(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.checked))
      }, null, 40, Uw),
      e("span", Bw, [
        t.modelValue ? (s(), o("svg", Ow, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      l.$slots.default ? (s(), o("span", Fw, [
        _e(l.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Rs = /* @__PURE__ */ Z(Aw, [["__scopeId", "data-v-bf17c831"]]), Vw = { class: "popover-header" }, Ww = { class: "popover-body" }, Gw = {
  key: 0,
  class: "changes-summary"
}, jw = {
  key: 0,
  class: "change-item"
}, Hw = {
  key: 1,
  class: "change-item"
}, qw = {
  key: 2,
  class: "change-item"
}, Kw = {
  key: 3,
  class: "change-item"
}, Yw = {
  key: 4,
  class: "change-item"
}, Qw = {
  key: 5,
  class: "change-item"
}, Xw = {
  key: 1,
  class: "no-changes"
}, Zw = {
  key: 2,
  class: "loading"
}, Jw = {
  key: 3,
  class: "issues-error"
}, e0 = { class: "error-header" }, t0 = { class: "error-title" }, s0 = { class: "issues-list" }, o0 = { class: "message-section" }, n0 = { class: "popover-footer" }, a0 = {
  key: 1,
  class: "commit-popover"
}, l0 = { class: "popover-header" }, i0 = { class: "popover-body" }, r0 = {
  key: 0,
  class: "changes-summary"
}, d0 = {
  key: 0,
  class: "change-item"
}, c0 = {
  key: 1,
  class: "change-item"
}, u0 = {
  key: 2,
  class: "change-item"
}, m0 = {
  key: 3,
  class: "change-item"
}, v0 = {
  key: 4,
  class: "change-item"
}, f0 = {
  key: 5,
  class: "change-item"
}, g0 = {
  key: 1,
  class: "no-changes"
}, p0 = {
  key: 2,
  class: "loading"
}, h0 = {
  key: 3,
  class: "issues-error"
}, y0 = { class: "error-header" }, w0 = { class: "error-title" }, k0 = { class: "issues-list" }, b0 = { class: "message-section" }, _0 = { class: "popover-footer" }, $0 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: l }) {
    const n = t, i = l, { commit: y } = We(), g = _(""), m = _(!1), v = _(!1), d = _(null), u = L(() => {
      if (!n.status) return !1;
      const W = n.status.workflows;
      return W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || n.status.has_changes;
    }), f = L(() => {
      if (!n.status) return !1;
      const W = n.status.workflows, p = n.status.git_changes;
      return W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || p.nodes_added.length > 0 || p.nodes_removed.length > 0;
    }), h = L(() => {
      var W;
      return (W = n.status) != null && W.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (p) => p.has_issues && (p.sync_state === "new" || p.sync_state === "modified")
      ) : [];
    }), b = L(() => h.value.length > 0), C = L(() => b.value && !v.value);
    async function R() {
      var W, p, $;
      if (!(b.value && !v.value) && !(!u.value || !g.value.trim() || m.value)) {
        m.value = !0, d.value = null;
        try {
          const z = await y(g.value.trim(), v.value);
          z.status === "success" ? (d.value = {
            type: "success",
            message: `Committed: ${((W = z.summary) == null ? void 0 : W.new) || 0} new, ${((p = z.summary) == null ? void 0 : p.modified) || 0} modified, ${(($ = z.summary) == null ? void 0 : $.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : z.status === "no_changes" ? d.value = { type: "error", message: "No changes to commit" } : z.status === "blocked" ? d.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : d.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          d.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (W, p) => t.asModal ? (s(), E(je, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: p[5] || (p[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: p[4] || (p[4] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", Vw, [
            p[11] || (p[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: p[0] || (p[0] = ($) => i("close"))
            }, [...p[10] || (p[10] = [
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
          e("div", Ww, [
            t.status && u.value ? (s(), o("div", Gw, [
              t.status.workflows.new.length ? (s(), o("div", jw, [
                p[12] || (p[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Hw, [
                p[13] || (p[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", qw, [
                p[14] || (p[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Kw, [
                p[15] || (p[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Yw, [
                p[16] || (p[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0),
              f.value ? c("", !0) : (s(), o("div", Qw, [...p[17] || (p[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Xw, " No changes to commit ")) : (s(), o("div", Zw, " Loading... ")),
            b.value ? (s(), o("div", Jw, [
              e("div", e0, [
                p[18] || (p[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", t0, a(h.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", s0, [
                (s(!0), o(A, null, ee(h.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  w(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              k(Rs, {
                modelValue: v.value,
                "onUpdate:modelValue": p[1] || (p[1] = ($) => v.value = $),
                class: "allow-issues-toggle"
              }, {
                default: r(() => [...p[19] || (p[19] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", o0, [
              k(zs, {
                modelValue: g.value,
                "onUpdate:modelValue": p[2] || (p[2] = ($) => g.value = $),
                placeholder: C.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || m.value || C.value,
                rows: 3,
                onCtrlEnter: R
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            d.value ? (s(), o("div", {
              key: 4,
              class: le(["result", d.value.type])
            }, a(d.value.message), 3)) : c("", !0)
          ]),
          e("div", n0, [
            k(de, {
              variant: "secondary",
              onClick: p[3] || (p[3] = ($) => i("close"))
            }, {
              default: r(() => [...p[20] || (p[20] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(de, {
              variant: v.value ? "danger" : "primary",
              disabled: !u.value || !g.value.trim() || m.value || C.value,
              loading: m.value,
              onClick: R
            }, {
              default: r(() => [
                w(a(m.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", a0, [
      e("div", l0, [
        p[22] || (p[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: p[6] || (p[6] = ($) => i("close"))
        }, [...p[21] || (p[21] = [
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
      e("div", i0, [
        t.status && u.value ? (s(), o("div", r0, [
          t.status.workflows.new.length ? (s(), o("div", d0, [
            p[23] || (p[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (s(), o("div", c0, [
            p[24] || (p[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", u0, [
            p[25] || (p[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", m0, [
            p[26] || (p[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", v0, [
            p[27] || (p[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0),
          f.value ? c("", !0) : (s(), o("div", f0, [...p[28] || (p[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", g0, " No changes to commit ")) : (s(), o("div", p0, " Loading... ")),
        b.value ? (s(), o("div", h0, [
          e("div", y0, [
            p[29] || (p[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", w0, a(h.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", k0, [
            (s(!0), o(A, null, ee(h.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              w(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          k(Rs, {
            modelValue: v.value,
            "onUpdate:modelValue": p[7] || (p[7] = ($) => v.value = $),
            class: "allow-issues-toggle"
          }, {
            default: r(() => [...p[30] || (p[30] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", b0, [
          k(zs, {
            modelValue: g.value,
            "onUpdate:modelValue": p[8] || (p[8] = ($) => g.value = $),
            placeholder: C.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || m.value || C.value,
            rows: 3,
            onCtrlEnter: R
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        d.value ? (s(), o("div", {
          key: 4,
          class: le(["result", d.value.type])
        }, a(d.value.message), 3)) : c("", !0)
      ]),
      e("div", _0, [
        k(de, {
          variant: "secondary",
          onClick: p[9] || (p[9] = ($) => i("close"))
        }, {
          default: r(() => [...p[31] || (p[31] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(de, {
          variant: v.value ? "danger" : "primary",
          disabled: !u.value || !g.value.trim() || m.value || C.value,
          loading: m.value,
          onClick: R
        }, {
          default: r(() => [
            w(a(m.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qs = /* @__PURE__ */ Z($0, [["__scopeId", "data-v-aa2a9bdf"]]), C0 = { class: "modal-header" }, x0 = { class: "modal-body" }, S0 = { class: "switch-message" }, I0 = { class: "switch-details" }, E0 = { class: "modal-actions" }, M0 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (l, n) => (s(), E(je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", C0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", x0, [
            e("p", S0, [
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
            e("p", I0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", E0, [
            k(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => l.$emit("close"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
            }, {
              default: r(() => [...n[12] || (n[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), T0 = /* @__PURE__ */ Z(M0, [["__scopeId", "data-v-e9c5253e"]]), z0 = {
  key: 0,
  class: "modal-overlay"
}, R0 = { class: "modal-content" }, L0 = { class: "modal-body" }, P0 = { class: "progress-info" }, D0 = { class: "progress-percentage" }, N0 = { class: "progress-state" }, U0 = { class: "switch-steps" }, B0 = { class: "step-icon" }, O0 = { class: "step-label" }, F0 = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const l = t, n = L(() => {
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
      return l.message || g[l.state] || l.state;
    }), i = L(() => l.state === "complete" ? "success" : l.state === "critical_failure" || l.state === "rolled_back" ? "error" : "default"), y = L(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = g.findIndex((v) => v.state === l.state);
      return g.map((v, d) => {
        let u = "pending", f = "○";
        return d < m ? (u = "completed", f = "✓") : d === m && (u = "active", f = "⟳"), {
          ...v,
          status: u,
          icon: f
        };
      });
    });
    return (g, m) => (s(), E(je, { to: "body" }, [
      t.show ? (s(), o("div", z0, [
        e("div", R0, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", L0, [
            k(Hs, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", P0, [
              e("div", D0, a(t.progress) + "%", 1),
              e("div", N0, a(n.value), 1)
            ]),
            e("div", U0, [
              (s(!0), o(A, null, ee(y.value, (v) => (s(), o("div", {
                key: v.state,
                class: le(["switch-step", v.status])
              }, [
                e("span", B0, a(v.icon), 1),
                e("span", O0, a(v.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), A0 = /* @__PURE__ */ Z(F0, [["__scopeId", "data-v-768a5078"]]), V0 = { class: "modal-header" }, W0 = { class: "modal-body" }, G0 = {
  key: 0,
  class: "node-section"
}, j0 = { class: "node-list" }, H0 = {
  key: 1,
  class: "node-section"
}, q0 = { class: "node-list" }, K0 = { class: "modal-actions" }, Y0 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (l, n) => (s(), E(je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", V0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", W0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", G0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", j0, [
                (s(!0), o(A, null, ee(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", H0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", q0, [
                (s(!0), o(A, null, ee(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", K0, [
            k(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => l.$emit("close"))
            }, {
              default: r(() => [...n[10] || (n[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Q0 = /* @__PURE__ */ Z(Y0, [["__scopeId", "data-v-7cad7518"]]), X0 = {
  key: 0,
  class: "wizard-steps"
}, Z0 = { class: "step-number" }, J0 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, ek = {
  key: 2,
  class: "wizard-step"
}, tk = { class: "form-field" }, sk = ["placeholder"], ok = {
  key: 0,
  class: "form-error"
}, nk = { class: "form-field form-field--checkbox" }, ak = { class: "form-checkbox" }, lk = {
  key: 0,
  class: "form-field"
}, ik = ["placeholder"], rk = {
  key: 0,
  class: "form-info"
}, dk = {
  key: 1,
  class: "form-suggestion"
}, ck = {
  key: 2,
  class: "form-error"
}, uk = {
  key: 3,
  class: "form-info"
}, mk = {
  key: 3,
  class: "wizard-step"
}, vk = {
  key: 0,
  class: "cli-warning"
}, fk = {
  key: 1,
  class: "env-selection"
}, gk = { class: "env-list" }, pk = ["value"], hk = { class: "env-name" }, yk = { class: "env-actions" }, wk = { key: 2 }, kk = { class: "wizard-intro" }, bk = { class: "form-field" }, _k = { class: "form-field" }, $k = ["value"], Ck = { class: "form-field" }, xk = ["disabled"], Sk = ["value"], Ik = { class: "form-field" }, Ek = ["value"], Mk = { class: "form-field form-field--checkbox" }, Tk = { class: "form-checkbox" }, zk = {
  key: 1,
  class: "form-error"
}, Jt = 10, Rk = 600 * 1e3, Lk = 1800 * 1e3, Pk = /* @__PURE__ */ X({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(t, { emit: l }) {
    const n = t, i = l, {
      initializeWorkspace: y,
      getInitializeProgress: g,
      validatePath: m,
      createEnvironment: v,
      getCreateProgress: d,
      getComfyUIReleases: u
    } = We(), f = _(n.initialStep || 1), h = _(null), b = _(!1), C = _(n.defaultPath), R = _(!!n.detectedModelsDir), W = _(n.detectedModelsDir || ""), p = _(null), $ = _(null), z = _(null), T = _(null), I = _("my-new-env"), V = _(Gs), K = _("latest"), te = _(js), P = _(!0), x = _(null), M = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), B = _(!1), U = _(!1), ne = _(!1), $e = _({ progress: 0, message: "" }), J = _({ progress: 0, message: "" }), j = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = _(0), S = _(null), ae = _(0), oe = _(null), ze = L(() => {
      var ke, Ee;
      const ce = (ke = C.value) == null ? void 0 : ke.trim(), H = !p.value, xe = !R.value || !$.value && ((Ee = W.value) == null ? void 0 : Ee.trim());
      return ce && H && xe;
    }), Ce = L(() => {
      var ce;
      return (ce = I.value) == null ? void 0 : ce.trim();
    });
    async function Be() {
      var ce;
      if (p.value = null, !!((ce = C.value) != null && ce.trim()))
        try {
          const H = await m({ path: C.value, type: "workspace" });
          H.valid || (p.value = H.error || "Invalid path");
        } catch (H) {
          p.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function we() {
      var ce;
      if ($.value = null, z.value = null, T.value = null, !!((ce = W.value) != null && ce.trim()))
        try {
          const H = await m({ path: W.value, type: "models" });
          if (H.valid)
            T.value = H.model_count ?? null;
          else if ($.value = H.error || "Invalid path", H.suggestion) {
            z.value = H.suggestion, W.value = H.suggestion, $.value = null;
            const xe = await m({ path: H.suggestion, type: "models" });
            xe.valid && (T.value = xe.model_count ?? null);
          }
        } catch (H) {
          $.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function re() {
      var ce, H, xe;
      if (p.value = null, $.value = null, await Be(), !p.value && !(R.value && ((ce = W.value) != null && ce.trim()) && (await we(), $.value))) {
        U.value = !0;
        try {
          await y({
            workspace_path: ((H = C.value) == null ? void 0 : H.trim()) || n.defaultPath,
            models_directory: R.value && ((xe = W.value) == null ? void 0 : xe.trim()) || null
          }), F.value = 0, S.value = Date.now();
          const ke = setInterval(async () => {
            if (S.value && Date.now() - S.value > Rk) {
              clearInterval(ke), U.value = !1, p.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ee = await g();
              if (F.value = 0, Ee.state === "idle" && U.value) {
                clearInterval(ke), U.value = !1, p.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              $e.value = { progress: Ee.progress, message: Ee.message }, Ee.state === "complete" ? (clearInterval(ke), U.value = !1, f.value = 2, Oe()) : Ee.state === "error" && (clearInterval(ke), U.value = !1, p.value = Ee.error || "Workspace creation failed");
            } catch (Ee) {
              F.value++, console.warn(`Polling failure ${F.value}/${Jt}:`, Ee), F.value >= Jt && (clearInterval(ke), U.value = !1, p.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ke) {
          U.value = !1, p.value = ke instanceof Error ? ke.message : "Failed to create workspace";
        }
      }
    }
    async function ie() {
      ne.value = !0, x.value = null;
      try {
        const ce = {
          name: I.value.trim() || "my-new-env",
          python_version: V.value,
          comfyui_version: K.value,
          torch_backend: te.value,
          switch_after: P.value
        };
        if ((await v(ce)).status === "started") {
          ae.value = 0, oe.value = Date.now();
          const xe = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Lk) {
              clearInterval(xe), ne.value = !1, x.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ke = await d();
              if (ae.value = 0, ke.state === "idle" && ne.value) {
                clearInterval(xe), ne.value = !1, x.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (J.value = {
                progress: ke.progress ?? 0,
                message: ke.message,
                phase: ke.phase
              }, ke.state === "complete") {
                clearInterval(xe), ne.value = !1;
                const Ee = ke.environment_name || ce.name;
                P.value ? i("complete", Ee) : (b.value = !1, i("environment-created-no-switch", Ee));
              } else ke.state === "error" && (clearInterval(xe), ne.value = !1, x.value = ke.error || "Environment creation failed");
            } catch (ke) {
              ae.value++, console.warn(`Polling failure ${ae.value}/${Jt}:`, ke), ae.value >= Jt && (clearInterval(xe), ne.value = !1, x.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ce) {
        ne.value = !1, x.value = ce instanceof Error ? ce.message : "Unknown error";
      }
    }
    async function Oe() {
      B.value = !0;
      try {
        M.value = await u();
      } catch (ce) {
        console.error("Failed to load ComfyUI releases:", ce);
      } finally {
        B.value = !1;
      }
    }
    function Ne() {
      h.value && i("switch-environment", h.value);
    }
    return Ae(() => {
      n.detectedModelsDir && (W.value = n.detectedModelsDir), f.value === 2 && Oe();
    }), (ce, H) => (s(), E(tt, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: H[12] || (H[12] = (xe) => ce.$emit("close"))
    }, {
      body: r(() => {
        var xe, ke, Ee;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", X0, [
            e("div", {
              class: le(["step", { active: f.value === 1, complete: f.value > 1 }])
            }, [
              e("span", Z0, a(f.value > 1 ? "✓" : "1"), 1),
              H[13] || (H[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            H[15] || (H[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: le(["step", { active: f.value === 2 }])
            }, [...H[14] || (H[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", J0, [...H[16] || (H[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          f.value === 1 ? (s(), o("div", ek, [
            H[20] || (H[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", tk, [
              H[17] || (H[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ve(e("input", {
                "onUpdate:modelValue": H[0] || (H[0] = (be) => C.value = be),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: Be
              }, null, 40, sk), [
                [Vt, C.value]
              ]),
              p.value ? (s(), o("p", ok, a(p.value), 1)) : c("", !0)
            ]),
            e("div", nk, [
              e("label", ak, [
                Ve(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": H[1] || (H[1] = (be) => R.value = be)
                }, null, 512), [
                  [ns, R.value]
                ]),
                H[18] || (H[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            R.value ? (s(), o("div", lk, [
              H[19] || (H[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ve(e("input", {
                "onUpdate:modelValue": H[2] || (H[2] = (be) => W.value = be),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: we
              }, null, 40, ik), [
                [Vt, W.value]
              ]),
              t.detectedModelsDir && !W.value ? (s(), o("p", rk, " Detected: " + a(t.detectedModelsDir), 1)) : c("", !0),
              z.value ? (s(), o("p", dk, " Did you mean: " + a(z.value), 1)) : c("", !0),
              $.value ? (s(), o("p", ck, a($.value), 1)) : c("", !0),
              T.value !== null && !$.value ? (s(), o("p", uk, " Found " + a(T.value) + " model files ", 1)) : c("", !0)
            ])) : c("", !0),
            U.value ? (s(), E(is, {
              key: 1,
              progress: $e.value.progress,
              message: $e.value.message
            }, null, 8, ["progress", "message"])) : c("", !0)
          ])) : c("", !0),
          f.value === 2 ? (s(), o("div", mk, [
            n.cliInstalled ? c("", !0) : (s(), o("div", vk, [...H[21] || (H[21] = [
              e("div", { class: "cli-warning-header" }, [
                e("span", { class: "cli-warning-icon" }, "!"),
                e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed")
              ], -1),
              e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1),
              e("div", { class: "cli-warning-commands" }, [
                e("code", null, "pipx install comfygit"),
                e("span", { class: "cli-warning-or" }, "or"),
                e("code", null, "uv tool install comfygit")
              ], -1)
            ])])),
            (xe = n.existingEnvironments) != null && xe.length && !b.value ? (s(), o("div", fk, [
              H[23] || (H[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", gk, [
                (s(!0), o(A, null, ee(n.existingEnvironments, (be) => (s(), o("label", {
                  key: be,
                  class: le(["env-option", { selected: h.value === be }])
                }, [
                  Ve(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: be,
                    "onUpdate:modelValue": H[3] || (H[3] = (pe) => h.value = pe)
                  }, null, 8, pk), [
                    [ts, h.value]
                  ]),
                  e("span", hk, a(be), 1)
                ], 2))), 128))
              ]),
              e("div", yk, [
                h.value ? (s(), E(de, {
                  key: 0,
                  variant: "primary",
                  onClick: Ne
                }, {
                  default: r(() => [
                    w(" Switch to " + a(h.value), 1)
                  ]),
                  _: 1
                })) : c("", !0),
                k(de, {
                  variant: "secondary",
                  onClick: H[4] || (H[4] = (be) => b.value = !0)
                }, {
                  default: r(() => [...H[22] || (H[22] = [
                    w(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : c("", !0),
            b.value || !((ke = n.existingEnvironments) != null && ke.length) ? (s(), o("div", wk, [
              e("p", kk, a((Ee = n.existingEnvironments) != null && Ee.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", bk, [
                H[24] || (H[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ve(e("input", {
                  "onUpdate:modelValue": H[5] || (H[5] = (be) => I.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Vt, I.value]
                ])
              ]),
              e("div", _k, [
                H[25] || (H[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ve(e("select", {
                  "onUpdate:modelValue": H[6] || (H[6] = (be) => V.value = be),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, ee(ve(Ws), (be) => (s(), o("option", {
                    key: be,
                    value: be
                  }, a(be), 9, $k))), 128))
                ], 512), [
                  [zt, V.value]
                ])
              ]),
              e("div", Ck, [
                H[26] || (H[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ve(e("select", {
                  "onUpdate:modelValue": H[7] || (H[7] = (be) => K.value = be),
                  class: "form-select",
                  disabled: B.value
                }, [
                  (s(!0), o(A, null, ee(M.value, (be) => (s(), o("option", {
                    key: be.tag_name,
                    value: be.tag_name
                  }, a(be.name), 9, Sk))), 128))
                ], 8, xk), [
                  [zt, K.value]
                ])
              ]),
              e("div", Ik, [
                H[27] || (H[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ve(e("select", {
                  "onUpdate:modelValue": H[8] || (H[8] = (be) => te.value = be),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, ee(ve(bs), (be) => (s(), o("option", {
                    key: be,
                    value: be
                  }, a(be) + a(be === "auto" ? " (detect GPU)" : ""), 9, Ek))), 128))
                ], 512), [
                  [zt, te.value]
                ])
              ]),
              e("div", Mk, [
                e("label", Tk, [
                  Ve(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": H[9] || (H[9] = (be) => P.value = be)
                  }, null, 512), [
                    [ns, P.value]
                  ]),
                  H[28] || (H[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              ne.value ? (s(), E(is, {
                key: 0,
                progress: J.value.progress,
                message: J.value.message,
                "current-phase": J.value.phase,
                "show-steps": !0,
                steps: j
              }, null, 8, ["progress", "message", "current-phase"])) : c("", !0),
              x.value ? (s(), o("div", zk, a(x.value), 1)) : c("", !0)
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: r(() => {
        var xe, ke;
        return [
          f.value === 1 ? (s(), E(de, {
            key: 0,
            variant: "primary",
            disabled: !ze.value || U.value,
            onClick: re
          }, {
            default: r(() => [
              w(a(U.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : f.value === 2 ? (s(), o(A, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), E(de, {
              key: 0,
              variant: "secondary",
              disabled: ne.value,
              onClick: H[10] || (H[10] = (Ee) => f.value = 1)
            }, {
              default: r(() => [...H[29] || (H[29] = [
                w(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (xe = n.existingEnvironments) != null && xe.length && b.value ? (s(), E(de, {
              key: 1,
              variant: "secondary",
              disabled: ne.value,
              onClick: H[11] || (H[11] = (Ee) => b.value = !1)
            }, {
              default: r(() => [...H[30] || (H[30] = [
                w(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : c("", !0),
            b.value || !((ke = n.existingEnvironments) != null && ke.length) ? (s(), E(de, {
              key: 2,
              variant: "primary",
              disabled: !Ce.value || ne.value,
              onClick: ie
            }, {
              default: r(() => [
                w(a(ne.value ? "Creating..." : P.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : c("", !0)
          ], 64)) : c("", !0)
        ];
      }),
      _: 1
    }));
  }
}), Dk = /* @__PURE__ */ Z(Pk, [["__scopeId", "data-v-b8c35e2d"]]), Nk = { class: "comfygit-panel" }, Uk = { class: "panel-header" }, Bk = { class: "header-left" }, Ok = {
  key: 0,
  class: "header-info"
}, Fk = { class: "header-actions" }, Ak = { class: "env-switcher" }, Vk = {
  key: 0,
  class: "header-info"
}, Wk = { class: "branch-name" }, Gk = { class: "panel-main" }, jk = { class: "sidebar" }, Hk = { class: "sidebar-section" }, qk = { class: "sidebar-section" }, Kk = { class: "sidebar-section" }, Yk = { class: "content-area" }, Qk = {
  key: 0,
  class: "error-message"
}, Xk = {
  key: 1,
  class: "loading"
}, Zk = { class: "dialog-content env-selector-dialog" }, Jk = { class: "dialog-header" }, eb = { class: "dialog-body" }, tb = { class: "env-list" }, sb = { class: "env-info" }, ob = { class: "env-name-row" }, nb = { class: "env-indicator" }, ab = { class: "env-name" }, lb = {
  key: 0,
  class: "env-branch"
}, ib = {
  key: 1,
  class: "current-label"
}, rb = { class: "env-stats" }, db = ["onClick"], cb = { class: "toast-container" }, ub = { class: "toast-message" }, mb = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: l }) {
    const n = l, {
      getStatus: i,
      getHistory: y,
      getBranches: g,
      checkout: m,
      createBranch: v,
      switchBranch: d,
      deleteBranch: u,
      getEnvironments: f,
      switchEnvironment: h,
      getSwitchProgress: b,
      deleteEnvironment: C,
      syncEnvironmentManually: R,
      repairWorkflowModels: W,
      getSetupStatus: p
    } = We(), $ = Bs(), z = _(null), T = _([]), I = _([]), V = _([]), K = L(() => V.value.find((G) => G.is_current)), te = _(null), P = _(!1), x = _(1), M = L(() => {
      var G;
      return ((G = te.value) == null ? void 0 : G.state) || "managed";
    }), B = _(!1), U = _(null), ne = _(null), $e = _(!1), J = _(null), j = _(null), F = _(null), S = _(!1), ae = _(!1), oe = _(""), ze = _({ state: "idle", progress: 0, message: "" });
    let Ce = null, Be = null;
    const we = _("status"), re = _("this-env");
    function ie(G, D) {
      we.value = G, re.value = D;
    }
    function Oe(G) {
      const me = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      me && ie(me.view, me.section);
    }
    function Ne() {
      ie("branches", "this-env");
    }
    function ce() {
      n("close"), setTimeout(() => {
        var D;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const me of G)
          if (((D = me.textContent) == null ? void 0 : D.trim()) === "Manager") {
            me.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const H = _(null), xe = _(!1), ke = _(!1), Ee = _([]);
    let be = 0;
    function pe(G, D = "info", me = 3e3) {
      const Le = ++be;
      return Ee.value.push({ id: Le, message: G, type: D }), me > 0 && setTimeout(() => {
        Ee.value = Ee.value.filter((qe) => qe.id !== Le);
      }, me), Le;
    }
    function He(G) {
      Ee.value = Ee.value.filter((D) => D.id !== G);
    }
    function $t(G, D) {
      pe(G, D);
    }
    const mt = L(() => {
      if (!z.value) return "neutral";
      const G = z.value.workflows, D = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || z.value.has_changes;
      return z.value.comparison.is_synced ? D ? "warning" : "success" : "error";
    });
    L(() => z.value ? mt.value === "success" ? "All synced" : mt.value === "warning" ? "Uncommitted changes" : mt.value === "error" ? "Not synced" : "" : "");
    async function Fe() {
      B.value = !0, U.value = null;
      try {
        const [G, D, me, Le] = await Promise.all([
          i(!0),
          y(),
          g(),
          f()
        ]);
        z.value = G, T.value = D.commits, I.value = me.branches, V.value = Le, n("statusUpdate", G), J.value && await J.value.loadWorkflows(!0);
      } catch (G) {
        U.value = G instanceof Error ? G.message : "Failed to load status", z.value = null, T.value = [], I.value = [];
      } finally {
        B.value = !1;
      }
    }
    function Ct(G) {
      ne.value = G;
    }
    async function wt(G) {
      var me;
      ne.value = null;
      const D = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      H.value = {
        title: D ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: D ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((me = G.hash) == null ? void 0 : me.slice(0, 7))}?`,
        details: D ? Cs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: D,
        onConfirm: async () => {
          var Ke;
          H.value = null, Y();
          const Le = pe(`Checking out ${G.short_hash || ((Ke = G.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), qe = await m(G.hash, D);
          He(Le), qe.status === "success" ? pe("Restarting ComfyUI...", "success") : pe(qe.message || "Checkout failed", "error");
        }
      };
    }
    async function xt(G) {
      const D = z.value && (z.value.workflows.new.length > 0 || z.value.workflows.modified.length > 0 || z.value.workflows.deleted.length > 0 || z.value.has_changes);
      H.value = {
        title: D ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: D ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: D ? Cs() : void 0,
        warning: D ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          H.value = null, Y();
          const me = pe(`Switching to ${G}...`, "info", 0), Le = await d(G, D);
          He(me), Le.status === "success" ? pe("Restarting ComfyUI...", "success") : pe(Le.message || "Branch switch failed", "error");
        }
      };
    }
    async function vt(G) {
      const D = pe(`Creating branch ${G}...`, "info", 0), me = await v(G);
      He(D), me.status === "success" ? (pe(`Branch "${G}" created`, "success"), await Fe()) : pe(me.message || "Failed to create branch", "error");
    }
    async function St(G, D = !1) {
      const me = async (Le) => {
        var Ke;
        const qe = pe(`Deleting branch ${G}...`, "info", 0);
        try {
          const gt = await u(G, Le);
          He(qe), gt.status === "success" ? (pe(`Branch "${G}" deleted`, "success"), await Fe()) : (Ke = gt.message) != null && Ke.includes("not fully merged") ? H.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              H.value = null, await me(!0);
            }
          } : pe(gt.message || "Failed to delete branch", "error");
        } catch (gt) {
          He(qe);
          const Dt = gt instanceof Error ? gt.message : "Failed to delete branch";
          Dt.includes("not fully merged") ? H.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              H.value = null, await me(!0);
            }
          } : pe(Dt, "error");
        }
      };
      H.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          H.value = null, await me(D);
        }
      };
    }
    async function ft(G) {
      ne.value = null;
      const D = prompt("Enter branch name:");
      if (D) {
        const me = pe(`Creating branch ${D}...`, "info", 0), Le = await v(D, G.hash);
        He(me), Le.status === "success" ? (pe(`Branch "${D}" created from ${G.short_hash}`, "success"), await Fe()) : pe(Le.message || "Failed to create branch", "error");
      }
    }
    function Y() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function N() {
      H.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          H.value = null, Y(), pe("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function O() {
      H.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          H.value = null, pe("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Q(G) {
      $e.value = !1, oe.value = G, S.value = !0;
    }
    async function fe() {
      S.value = !1, ae.value = !0, Y(), ze.value = {
        progress: 10,
        state: Xe(10),
        message: q(10)
      };
      try {
        await h(oe.value), ue(), nt();
      } catch (G) {
        Se(), ae.value = !1, pe(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), ze.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Xe(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function q(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Xe(G)] || "";
    }
    function ue() {
      if (Be) return;
      let G = 10;
      const D = 60, me = 5e3, Le = 100, qe = (D - G) / (me / Le);
      Be = window.setInterval(() => {
        if (G += qe, G >= D && (G = D, Se()), ze.value.progress < D) {
          const Ke = Math.floor(G);
          ze.value = {
            progress: Ke,
            state: Xe(Ke),
            message: q(Ke)
          };
        }
      }, Le);
    }
    function Se() {
      Be && (clearInterval(Be), Be = null);
    }
    function nt() {
      Ce || (Ce = window.setInterval(async () => {
        try {
          let G = await $.getStatus();
          if ((!G || G.state === "idle") && (G = await b()), !G)
            return;
          const D = G.progress || 0;
          D >= 60 && Se();
          const me = Math.max(D, ze.value.progress), Le = G.state && G.state !== "idle" && G.state !== "unknown", qe = Le ? G.state : Xe(me), Ke = Le && G.message || q(me);
          ze.value = {
            state: qe,
            progress: me,
            message: Ke
          }, G.state === "complete" ? (Se(), kt(), ae.value = !1, pe(`✓ Switched to ${oe.value}`, "success"), await Fe(), oe.value = "") : G.state === "rolled_back" ? (Se(), kt(), ae.value = !1, pe("Switch failed, restored previous environment", "warning"), oe.value = "") : G.state === "critical_failure" && (Se(), kt(), ae.value = !1, pe(`Critical error during switch: ${G.message}`, "error"), oe.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function kt() {
      Se(), Ce && (clearInterval(Ce), Ce = null);
    }
    function Js() {
      var G;
      S.value = !1, oe.value = "", (G = te.value) != null && G.state && te.value.state !== "managed" && (x.value = te.value.state === "no_workspace" ? 1 : 2, P.value = !0);
    }
    async function eo() {
      xe.value = !1, await Fe(), pe("✓ Changes committed", "success");
    }
    async function to() {
      ke.value = !1;
      const G = pe("Syncing environment...", "info", 0);
      try {
        const D = await R("skip", !0);
        if (He(G), D.status === "success") {
          const me = [];
          D.nodes_installed.length && me.push(`${D.nodes_installed.length} installed`), D.nodes_removed.length && me.push(`${D.nodes_removed.length} removed`);
          const Le = me.length ? `: ${me.join(", ")}` : "";
          pe(`✓ Environment synced${Le}`, "success"), await Fe();
        } else {
          const me = D.errors.length ? D.errors.join("; ") : D.message;
          pe(`Sync failed: ${me}`, "error");
        }
      } catch (D) {
        He(G), pe(`Sync error: ${D instanceof Error ? D.message : "Unknown error"}`, "error");
      }
    }
    async function so(G) {
      var D;
      try {
        const me = await W(G);
        me.failed.length === 0 ? pe(`✓ Repaired ${me.success} workflow${me.success === 1 ? "" : "s"}`, "success") : pe(`Repaired ${me.success}, failed: ${me.failed.length}`, "warning"), await Fe();
      } catch (me) {
        pe(`Repair failed: ${me instanceof Error ? me.message : "Unknown error"}`, "error");
      } finally {
        (D = F.value) == null || D.resetRepairingState();
      }
    }
    async function oo(G, D) {
      pe(`Environment '${G}' created`, "success"), await Fe(), j.value && await j.value.loadEnvironments(), D && await Q(G);
    }
    async function no(G) {
      var D;
      if (((D = K.value) == null ? void 0 : D.name) === G) {
        pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      H.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          H.value = null;
          try {
            const me = await C(G);
            me.status === "success" ? (pe(`Environment "${G}" deleted`, "success"), await Fe(), j.value && await j.value.loadEnvironments()) : pe(me.message || "Failed to delete environment", "error");
          } catch (me) {
            pe(`Error deleting environment: ${me instanceof Error ? me.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ao(G) {
      P.value = !1;
      try {
        te.value = await p();
      } catch {
      }
      await Q(G);
    }
    function lo() {
      P.value = !1, n("close");
    }
    async function io(G) {
      await Q(G);
    }
    async function ro(G) {
      await Fe(), await Q(G);
    }
    async function co(G) {
      te.value = await p(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function uo() {
      ie("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = j.value) == null || G.openCreateModal();
      }, 100);
    }
    function Cs() {
      if (!z.value) return [];
      const G = [], D = z.value.workflows;
      return D.new.length && G.push(`${D.new.length} new workflow(s)`), D.modified.length && G.push(`${D.modified.length} modified workflow(s)`), D.deleted.length && G.push(`${D.deleted.length} deleted workflow(s)`), G;
    }
    return Ae(async () => {
      try {
        if (te.value = await p(), te.value.state === "no_workspace") {
          P.value = !0, x.value = 1;
          return;
        }
        if (te.value.state === "empty_workspace") {
          P.value = !0, x.value = 2;
          return;
        }
        if (te.value.state === "unmanaged") {
          P.value = !0, x.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await Fe();
    }), (G, D) => {
      var me, Le, qe, Ke, gt, Dt, xs, Ss, Is;
      return s(), o("div", Nk, [
        e("div", Uk, [
          e("div", Bk, [
            D[29] || (D[29] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            z.value ? (s(), o("div", Ok)) : c("", !0)
          ]),
          e("div", Fk, [
            e("button", {
              class: le(["icon-btn", { spinning: B.value }]),
              onClick: Fe,
              title: "Refresh"
            }, [...D[30] || (D[30] = [
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
              onClick: D[0] || (D[0] = (he) => n("close")),
              title: "Close"
            }, [...D[31] || (D[31] = [
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
        e("div", Ak, [
          e("div", { class: "env-switcher-header" }, [
            D[32] || (D[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: N
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: O
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: D[1] || (D[1] = (he) => ie("environments", "all-envs"))
          }, [
            z.value ? (s(), o("div", Vk, [
              e("span", null, a(((me = K.value) == null ? void 0 : me.name) || ((Le = z.value) == null ? void 0 : Le.environment) || "Loading..."), 1),
              e("span", Wk, "(" + a(z.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            D[33] || (D[33] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Gk, [
          e("div", jk, [
            e("div", Hk, [
              D[34] || (D[34] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "status" && re.value === "this-env" }]),
                onClick: D[2] || (D[2] = (he) => ie("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "workflows" }]),
                onClick: D[3] || (D[3] = (he) => ie("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "models-env" }]),
                onClick: D[4] || (D[4] = (he) => ie("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "branches" }]),
                onClick: D[5] || (D[5] = (he) => ie("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "history" }]),
                onClick: D[6] || (D[6] = (he) => ie("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "nodes" }]),
                onClick: D[7] || (D[7] = (he) => ie("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "debug-env" }]),
                onClick: D[8] || (D[8] = (he) => ie("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            D[37] || (D[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", qk, [
              D[35] || (D[35] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "environments" }]),
                onClick: D[9] || (D[9] = (he) => ie("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "model-index" }]),
                onClick: D[10] || (D[10] = (he) => ie("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "settings" }]),
                onClick: D[11] || (D[11] = (he) => ie("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "debug-workspace" }]),
                onClick: D[12] || (D[12] = (he) => ie("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            D[38] || (D[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Kk, [
              D[36] || (D[36] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "export" }]),
                onClick: D[13] || (D[13] = (he) => ie("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "import" }]),
                onClick: D[14] || (D[14] = (he) => ie("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: le(["sidebar-item", { active: we.value === "remotes" }]),
                onClick: D[15] || (D[15] = (he) => ie("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Yk, [
            U.value ? (s(), o("div", Qk, a(U.value), 1)) : !z.value && we.value === "status" ? (s(), o("div", Xk, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              we.value === "status" ? (s(), E(Aa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: F,
                status: z.value,
                "setup-state": M.value,
                onSwitchBranch: Ne,
                onCommitChanges: D[16] || (D[16] = (he) => xe.value = !0),
                onSyncEnvironment: D[17] || (D[17] = (he) => ke.value = !0),
                onViewWorkflows: D[18] || (D[18] = (he) => ie("workflows", "this-env")),
                onViewHistory: D[19] || (D[19] = (he) => ie("history", "this-env")),
                onViewDebug: D[20] || (D[20] = (he) => ie("debug-env", "this-env")),
                onRepairMissingModels: so,
                onStartSetup: D[21] || (D[21] = (he) => P.value = !0),
                onViewEnvironments: D[22] || (D[22] = (he) => ie("environments", "all-envs")),
                onCreateEnvironment: uo
              }, null, 8, ["status", "setup-state"])) : we.value === "workflows" ? (s(), E(fm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: J,
                onRefresh: Fe
              }, null, 512)) : we.value === "models-env" ? (s(), E(Qm, {
                key: 2,
                onNavigate: Oe
              })) : we.value === "branches" ? (s(), E(sl, {
                key: 3,
                branches: I.value,
                current: ((qe = z.value) == null ? void 0 : qe.branch) || null,
                onSwitch: xt,
                onCreate: vt,
                onDelete: St
              }, null, 8, ["branches", "current"])) : we.value === "history" ? (s(), E(vl, {
                key: 4,
                commits: T.value,
                onSelect: Ct,
                onCheckout: wt
              }, null, 8, ["commits"])) : we.value === "nodes" ? (s(), E(Bv, {
                key: 5,
                onOpenNodeManager: ce
              })) : we.value === "debug-env" ? (s(), E(Gp, { key: 6 })) : we.value === "environments" ? (s(), E(qh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: j,
                onSwitch: Q,
                onCreated: oo,
                onDelete: no
              }, null, 512)) : we.value === "model-index" ? (s(), E(pv, {
                key: 8,
                onRefresh: Fe
              })) : we.value === "settings" ? (s(), E(Fp, { key: 9 })) : we.value === "debug-workspace" ? (s(), E(Vp, { key: 10 })) : we.value === "export" ? (s(), E(x1, { key: 11 })) : we.value === "import" ? (s(), E(dw, {
                key: 12,
                onImportCompleteSwitch: ro
              })) : we.value === "remotes" ? (s(), E(bp, {
                key: 13,
                onToast: $t
              })) : c("", !0)
            ], 64))
          ])
        ]),
        ne.value ? (s(), E(Iw, {
          key: 0,
          commit: ne.value,
          onClose: D[23] || (D[23] = (he) => ne.value = null),
          onCheckout: wt,
          onCreateBranch: ft
        }, null, 8, ["commit"])) : c("", !0),
        H.value ? (s(), E(Rw, {
          key: 1,
          title: H.value.title,
          message: H.value.message,
          details: H.value.details,
          warning: H.value.warning,
          confirmLabel: H.value.confirmLabel,
          cancelLabel: H.value.cancelLabel,
          secondaryLabel: H.value.secondaryLabel,
          secondaryAction: H.value.secondaryAction,
          destructive: H.value.destructive,
          onConfirm: H.value.onConfirm,
          onCancel: D[24] || (D[24] = (he) => H.value = null),
          onSecondary: H.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        k(T0, {
          show: S.value,
          "from-environment": ((Ke = K.value) == null ? void 0 : Ke.name) || "unknown",
          "to-environment": oe.value,
          onConfirm: fe,
          onClose: Js
        }, null, 8, ["show", "from-environment", "to-environment"]),
        xe.value && z.value ? (s(), E(qs, {
          key: 2,
          status: z.value,
          "as-modal": !0,
          onClose: D[25] || (D[25] = (he) => xe.value = !1),
          onCommitted: eo
        }, null, 8, ["status"])) : c("", !0),
        ke.value && z.value ? (s(), E(Q0, {
          key: 3,
          show: ke.value,
          "mismatch-details": {
            missing_nodes: z.value.comparison.missing_nodes,
            extra_nodes: z.value.comparison.extra_nodes
          },
          onConfirm: to,
          onClose: D[26] || (D[26] = (he) => ke.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        k(A0, {
          show: ae.value,
          state: ze.value.state,
          progress: ze.value.progress,
          message: ze.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        $e.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: D[28] || (D[28] = Pe((he) => $e.value = !1, ["self"]))
        }, [
          e("div", Zk, [
            e("div", Jk, [
              D[40] || (D[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: D[27] || (D[27] = (he) => $e.value = !1)
              }, [...D[39] || (D[39] = [
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
            e("div", eb, [
              D[41] || (D[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", tb, [
                (s(!0), o(A, null, ee(V.value, (he) => (s(), o("div", {
                  key: he.name,
                  class: le(["env-item", { current: he.is_current }])
                }, [
                  e("div", sb, [
                    e("div", ob, [
                      e("span", nb, a(he.is_current ? "●" : "○"), 1),
                      e("span", ab, a(he.name), 1),
                      he.current_branch ? (s(), o("span", lb, "(" + a(he.current_branch) + ")", 1)) : c("", !0),
                      he.is_current ? (s(), o("span", ib, "CURRENT")) : c("", !0)
                    ]),
                    e("div", rb, a(he.workflow_count) + " workflows • " + a(he.node_count) + " nodes ", 1)
                  ]),
                  he.is_current ? c("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (W_) => Q(he.name)
                  }, " SWITCH ", 8, db))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        P.value ? (s(), E(Dk, {
          key: 5,
          "default-path": ((gt = te.value) == null ? void 0 : gt.default_path) || "~/comfygit",
          "detected-models-dir": ((Dt = te.value) == null ? void 0 : Dt.detected_models_dir) || null,
          "initial-step": x.value,
          "existing-environments": ((xs = te.value) == null ? void 0 : xs.environments) || [],
          "cli-installed": ((Ss = te.value) == null ? void 0 : Ss.cli_installed) ?? !0,
          "setup-state": ((Is = te.value) == null ? void 0 : Is.state) || "no_workspace",
          onComplete: ao,
          onClose: lo,
          onSwitchEnvironment: io,
          onEnvironmentCreatedNoSwitch: co
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : c("", !0),
        e("div", cb, [
          k(go, { name: "toast" }, {
            default: r(() => [
              (s(!0), o(A, null, ee(Ee.value, (he) => (s(), o("div", {
                key: he.id,
                class: le(["toast", he.type])
              }, [
                e("span", ub, a(he.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), vb = /* @__PURE__ */ Z(mb, [["__scopeId", "data-v-85fc8e7a"]]), fb = { class: "item-header" }, gb = { class: "item-info" }, pb = { class: "filename" }, hb = { class: "metadata" }, yb = { class: "size" }, wb = {
  key: 0,
  class: "type"
}, kb = { class: "item-actions" }, bb = {
  key: 0,
  class: "progress-section"
}, _b = { class: "progress-bar" }, $b = { class: "progress-stats" }, Cb = { class: "downloaded" }, xb = { class: "speed" }, Sb = {
  key: 0,
  class: "eta"
}, Ib = {
  key: 1,
  class: "status-msg paused"
}, Eb = {
  key: 2,
  class: "status-msg queued"
}, Mb = {
  key: 3,
  class: "status-msg completed"
}, Tb = {
  key: 4,
  class: "status-msg failed"
}, zb = {
  key: 0,
  class: "retries"
}, Rb = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: l }) {
    const n = l;
    function i(m) {
      if (m === 0) return "?";
      const v = m / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function y(m) {
      return m === 0 ? "-" : `${(m / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(m) {
      if (m < 60) return `${Math.round(m)}s`;
      const v = Math.floor(m / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (m, v) => (s(), o("div", {
      class: le(["download-item", `status-${t.item.status}`])
    }, [
      e("div", fb, [
        e("div", gb, [
          e("div", pb, a(t.item.filename), 1),
          e("div", hb, [
            e("span", yb, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", wb, a(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", kb, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", bb, [
        e("div", _b, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", $b, [
          e("span", Cb, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", xb, a(y(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Sb, a(g(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Ib, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Eb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Mb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Tb, [
        w(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", zb, "(" + a(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Z(Rb, [["__scopeId", "data-v-2110df65"]]), Lb = { class: "queue-title" }, Pb = { class: "count" }, Db = { class: "queue-actions" }, Nb = { class: "action-label" }, Ub = {
  key: 0,
  class: "overall-progress"
}, Bb = { class: "progress-bar" }, Ob = {
  key: 0,
  class: "current-mini"
}, Fb = { class: "filename" }, Ab = { class: "speed" }, Vb = {
  key: 1,
  class: "queue-content"
}, Wb = {
  key: 0,
  class: "section"
}, Gb = {
  key: 1,
  class: "section"
}, jb = { class: "section-header" }, Hb = { class: "section-label paused" }, qb = { class: "items-list" }, Kb = {
  key: 2,
  class: "section"
}, Yb = { class: "section-header" }, Qb = { class: "section-label" }, Xb = { class: "items-list" }, Zb = {
  key: 3,
  class: "section"
}, Jb = { class: "section-header" }, e_ = { class: "section-label" }, t_ = { class: "items-list" }, s_ = {
  key: 4,
  class: "section"
}, o_ = { class: "section-header" }, n_ = { class: "section-label failed" }, a_ = { class: "items-list" }, l_ = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: l,
      currentDownload: n,
      queuedItems: i,
      completedItems: y,
      failedItems: g,
      pausedItems: m,
      hasItems: v,
      activeCount: d,
      cancelDownload: u,
      retryDownload: f,
      resumeDownload: h,
      resumeAllPaused: b,
      removeItem: C,
      clearCompleted: R
    } = Kt(), W = _(!1);
    let p = null;
    bt(
      () => ({
        active: d.value,
        failed: g.value.length,
        paused: m.value.length,
        completed: y.value.length
      }),
      (I, V) => {
        p && (clearTimeout(p), p = null);
        const K = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, te = V && (V.active > 0 || V.paused > 0);
        K && te && (p = setTimeout(() => {
          R(), p = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = L(() => {
      var K;
      if (l.items.length === 0) return 0;
      const I = y.value.length, V = ((K = n.value) == null ? void 0 : K.progress) || 0;
      return Math.round((I + V / 100) / l.items.length * 100);
    });
    function z(I) {
      u(I);
    }
    function T(I) {
      return I === 0 ? "" : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, V) => (s(), E(je, { to: "body" }, [
      ve(v) ? (s(), o("div", {
        key: 0,
        class: le(["model-download-queue", { minimized: !W.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: V[0] || (V[0] = (K) => W.value = !W.value)
        }, [
          e("div", Lb, [
            V[4] || (V[4] = e("span", { class: "icon" }, "↓", -1)),
            V[5] || (V[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Pb, "(" + a(ve(d)) + "/" + a(ve(l).items.length) + ")", 1)
          ]),
          e("div", Db, [
            e("span", Nb, a(W.value ? "minimize" : "expand"), 1)
          ])
        ]),
        W.value ? (s(), o("div", Vb, [
          ve(n) ? (s(), o("div", Wb, [
            V[6] || (V[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ot, {
              item: ve(n),
              onCancel: V[1] || (V[1] = (K) => z(ve(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          ve(m).length > 0 ? (s(), o("div", Gb, [
            e("div", jb, [
              e("span", Hb, "Paused (" + a(ve(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: V[2] || (V[2] = //@ts-ignore
                (...K) => ve(b) && ve(b)(...K))
              }, "Resume All")
            ]),
            e("div", qb, [
              (s(!0), o(A, null, ee(ve(m), (K) => (s(), E(Ot, {
                key: K.id,
                item: K,
                onResume: (te) => ve(h)(K.id),
                onRemove: (te) => ve(C)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ve(i).length > 0 ? (s(), o("div", Kb, [
            e("div", Yb, [
              e("span", Qb, "Queued (" + a(ve(i).length) + ")", 1)
            ]),
            e("div", Xb, [
              (s(!0), o(A, null, ee(ve(i), (K) => (s(), E(Ot, {
                key: K.id,
                item: K,
                onCancel: (te) => z(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          ve(y).length > 0 ? (s(), o("div", Zb, [
            e("div", Jb, [
              e("span", e_, "Completed (" + a(ve(y).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: V[3] || (V[3] = //@ts-ignore
                (...K) => ve(R) && ve(R)(...K))
              }, "Clear")
            ]),
            e("div", t_, [
              (s(!0), o(A, null, ee(ve(y).slice(0, 3), (K) => (s(), E(Ot, {
                key: K.id,
                item: K,
                onRemove: (te) => ve(C)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          ve(g).length > 0 ? (s(), o("div", s_, [
            e("div", o_, [
              e("span", n_, "Failed (" + a(ve(g).length) + ")", 1)
            ]),
            e("div", a_, [
              (s(!0), o(A, null, ee(ve(g), (K) => (s(), E(Ot, {
                key: K.id,
                item: K,
                onRetry: (te) => ve(f)(K.id),
                onRemove: (te) => ve(C)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (s(), o("div", Ub, [
          e("div", Bb, [
            e("div", {
              class: "progress-fill",
              style: pt({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ve(n) ? (s(), o("div", Ob, [
            e("span", Fb, a(ve(n).filename), 1),
            e("span", Ab, a(T(ve(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), i_ = /* @__PURE__ */ Z(l_, [["__scopeId", "data-v-60751cfa"]]), r_ = { class: "mock-control-popover" }, d_ = { class: "popover-header" }, c_ = { class: "popover-content" }, u_ = { class: "section" }, m_ = { class: "preset-buttons" }, v_ = ["onClick"], f_ = { class: "section" }, g_ = { class: "toggle-row" }, p_ = { class: "toggle-label" }, h_ = ["checked"], y_ = { class: "toggle-row" }, w_ = { class: "toggle-label" }, k_ = ["checked", "disabled"], b_ = { class: "toggle-row" }, __ = { class: "toggle-label" }, $_ = ["checked", "disabled"], C_ = { class: "toggle-row" }, x_ = { class: "toggle-label" }, S_ = ["checked"], I_ = { class: "section" }, E_ = { class: "state-display" }, M_ = /* @__PURE__ */ X({
  __name: "MockControlPopover",
  emits: ["close"],
  setup(t) {
    const {
      state: l,
      setupState: n,
      setHasWorkspace: i,
      setHasEnvironments: y,
      setIsManaged: g,
      setHasLegacyManager: m,
      setPreset: v
    } = ws(), d = [
      { value: "no_workspace", label: "No Workspace" },
      { value: "empty_workspace", label: "Empty WS" },
      { value: "unmanaged", label: "Unmanaged" },
      { value: "managed", label: "Managed" }
    ];
    return (u, f) => (s(), o("div", r_, [
      e("div", d_, [
        f[5] || (f[5] = e("span", { class: "popover-title" }, "Mock Controls", -1)),
        e("button", {
          class: "close-btn",
          onClick: f[0] || (f[0] = (h) => u.$emit("close"))
        }, "×")
      ]),
      e("div", c_, [
        e("div", u_, [
          f[6] || (f[6] = e("div", { class: "section-title" }, "QUICK PRESETS", -1)),
          e("div", m_, [
            (s(), o(A, null, ee(d, (h) => e("button", {
              key: h.value,
              class: le(["preset-btn", { active: ve(n) === h.value }]),
              onClick: (b) => ve(v)(h.value)
            }, a(h.label), 11, v_)), 64))
          ])
        ]),
        e("div", f_, [
          f[11] || (f[11] = e("div", { class: "section-title" }, "STATE TOGGLES", -1)),
          e("div", g_, [
            e("label", p_, [
              e("input", {
                type: "checkbox",
                checked: ve(l).hasWorkspace,
                onChange: f[1] || (f[1] = (h) => ve(i)(h.target.checked))
              }, null, 40, h_),
              f[7] || (f[7] = e("span", null, "Workspace exists", -1))
            ])
          ]),
          e("div", y_, [
            e("label", w_, [
              e("input", {
                type: "checkbox",
                checked: ve(l).hasEnvironments,
                disabled: !ve(l).hasWorkspace,
                onChange: f[2] || (f[2] = (h) => ve(y)(h.target.checked))
              }, null, 40, k_),
              f[8] || (f[8] = e("span", null, "Has environments", -1))
            ])
          ]),
          e("div", b_, [
            e("label", __, [
              e("input", {
                type: "checkbox",
                checked: ve(l).isManaged,
                disabled: !ve(l).hasEnvironments,
                onChange: f[3] || (f[3] = (h) => ve(g)(h.target.checked))
              }, null, 40, $_),
              f[9] || (f[9] = e("span", null, "Running in managed env", -1))
            ])
          ]),
          e("div", C_, [
            e("label", x_, [
              e("input", {
                type: "checkbox",
                checked: ve(l).hasLegacyManager,
                onChange: f[4] || (f[4] = (h) => ve(m)(h.target.checked))
              }, null, 40, S_),
              f[10] || (f[10] = e("span", null, "Legacy ComfyUI-Manager installed", -1))
            ])
          ])
        ]),
        e("div", I_, [
          f[12] || (f[12] = e("div", { class: "section-title" }, "CURRENT STATE", -1)),
          e("div", E_, [
            e("code", null, a(ve(n)), 1)
          ])
        ]),
        f[13] || (f[13] = e("div", { class: "hint" }, " Changes apply on next panel open or status refresh ", -1))
      ])
    ]));
  }
}), T_ = /* @__PURE__ */ Z(M_, [["__scopeId", "data-v-3255dab3"]]), z_ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', R_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', L_ = {
  comfy: z_,
  phosphor: R_
}, _s = "comfy", Ks = "comfygit-theme";
let It = null, Ys = _s;
function P_() {
  try {
    const t = localStorage.getItem(Ks);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return _s;
}
function Qs(t = _s) {
  It && It.remove(), It = document.createElement("style"), It.id = "comfygit-theme-styles", It.setAttribute("data-theme", t), It.textContent = L_[t], document.head.appendChild(It), document.body.setAttribute("data-comfygit-theme", t), Ys = t;
  try {
    localStorage.setItem(Ks, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function D_() {
  return Ys;
}
function N_(t) {
  Qs(t);
}
const $s = document.createElement("link");
$s.rel = "stylesheet";
$s.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild($s);
const U_ = P_();
Qs(U_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), N_(t);
  },
  getTheme: () => {
    const t = D_();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let lt = null, Ze = null, Gt = null, Ft = null, Ls = null, Je = null, jt = null;
const Rt = _(null);
let Xs = "managed";
async function os() {
  var t;
  if (!((t = Tt) != null && t.api)) return null;
  try {
    const l = await Tt.api.fetchApi("/v2/comfygit/status");
    l.ok && (Rt.value = await l.json());
  } catch {
  }
}
async function ps() {
  {
    Xs = "no_workspace";
    return;
  }
}
function B_() {
  if (!Rt.value) return !1;
  const t = Rt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Rt.value.has_changes;
}
function O_() {
  lt && lt.remove(), lt = document.createElement("div"), lt.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", lt.appendChild(t), lt.addEventListener("click", (i) => {
    i.target === lt && fs();
  });
  const l = (i) => {
    i.key === "Escape" && (fs(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), ds({
    render: () => cs(vb, {
      onClose: fs,
      onStatusUpdate: async (i) => {
        Rt.value = i, Ht(), await ps(), hs();
      }
    })
  }).mount(t), document.body.appendChild(lt);
}
function fs() {
  lt && (lt.remove(), lt = null);
}
function F_(t) {
  At(), Ze = document.createElement("div"), Ze.className = "comfygit-commit-popover-container";
  const l = t.getBoundingClientRect();
  Ze.style.position = "fixed", Ze.style.top = `${l.bottom + 8}px`, Ze.style.right = `${window.innerWidth - l.right}px`, Ze.style.zIndex = "10001";
  const n = (y) => {
    Ze && !Ze.contains(y.target) && y.target !== t && (At(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (y) => {
    y.key === "Escape" && (At(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Gt = ds({
    render: () => cs(qs, {
      status: Rt.value,
      onClose: At,
      onCommitted: () => {
        At(), os().then(Ht);
      }
    })
  }), Gt.mount(Ze), document.body.appendChild(Ze);
}
function At() {
  Gt && (Gt.unmount(), Gt = null), Ze && (Ze.remove(), Ze = null);
}
function A_() {
  Ft || (Ft = document.createElement("div"), Ft.className = "comfygit-download-queue-root", Ls = ds({
    render: () => cs(i_)
  }), Ls.mount(Ft), document.body.appendChild(Ft), console.log("[ComfyGit] Model download queue mounted"));
}
function V_(t) {
  es(), Je = document.createElement("div"), Je.className = "comfygit-mock-control-container";
  const l = t.getBoundingClientRect();
  Je.style.position = "fixed", Je.style.top = `${l.bottom + 8}px`, Je.style.right = `${window.innerWidth - l.right}px`, Je.style.zIndex = "10001";
  const n = (y) => {
    Je && !Je.contains(y.target) && y.target !== t && (es(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (y) => {
    y.key === "Escape" && (es(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), jt = ds({
    render: () => cs(T_, {
      onClose: es
    })
  }), jt.mount(Je), document.body.appendChild(Je);
}
function es() {
  jt && (jt.unmount(), jt = null), Je && (Je.remove(), Je = null);
}
let st = null, Et = null;
function Ht() {
  if (!st) return;
  const t = st.querySelector(".commit-indicator");
  t && (t.style.display = B_() ? "block" : "none");
}
function hs() {
  if (!st) return;
  const t = Xs !== "managed";
  st.disabled = t, st.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Zs = document.createElement("style");
Zs.textContent = `
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

  .comfygit-commit-btn:hover:not(:disabled) {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
  }

  .comfygit-commit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .comfygit-mock-btn {
    background: linear-gradient(180deg, #7c3aed 0%, #5b21b6 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-mock-btn:hover {
    background: linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%) !important;
  }

  /* Adjust commit button border-radius when mock button is present */
  .comfygit-btn-group:has(.comfygit-mock-btn) .comfygit-commit-btn {
    border-radius: 0 !important;
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
document.head.appendChild(Zs);
Tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var y, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = O_, st = document.createElement("button"), st.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", st.innerHTML = 'Commit <span class="commit-indicator"></span>', st.title = "Quick Commit", st.onclick = () => F_(st), t.appendChild(l), t.appendChild(st), Et = document.createElement("button"), Et.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-mock-btn", Et.textContent = "Mock", Et.title = "Mock Controls - Simulate different environment states", Et.onclick = () => V_(Et), t.appendChild(Et), console.log("[ComfyGit] Mock mode enabled - Mock Control button added"), (g = (y = Tt.menu) == null ? void 0 : y.settingsGroup) != null && g.element && (Tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), A_();
    const { loadPendingDownloads: n } = Kt();
    n(), await Promise.all([os(), ps()]), Ht(), hs(), setInterval(async () => {
      await Promise.all([os(), ps()]), Ht(), hs();
    }, 3e4);
    const i = Tt.api;
    if (i) {
      let m = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((u) => {
          (u.startsWith("workflow:") || u.startsWith("Comfy.OpenWorkflowsPaths:") || u.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(u);
        }), window.location.reload();
      }, v = function() {
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
        const f = document.createElement("span");
        f.textContent = "Workflows updated - refresh required", u.appendChild(f);
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => m(), u.appendChild(h);
        const b = document.createElement("button");
        b.textContent = "×", b.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => u.remove(), u.appendChild(b), document.body.appendChild(u), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (u) => {
        const { change_type: f, workflow_name: h } = u.detail;
        console.log(`[ComfyGit] Workflow ${f}: ${h}`), await os(), Ht();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let d = !1;
      i.addEventListener("status", async (u) => {
        const f = u.detail != null;
        f && !d && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : v()), d = f;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
